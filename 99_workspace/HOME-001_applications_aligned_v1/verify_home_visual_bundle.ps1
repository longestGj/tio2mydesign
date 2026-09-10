param(
    [string]$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
)

$ErrorActionPreference = 'Stop'
$visualDir = Join-Path $ProjectRoot 'pages\home\04_planning\visual-designs\home-applications-aligned-v1.0'
$contractPath = Join-Path $ProjectRoot 'pages\home\04_planning\17_homepage_applications_aligned_visual_design_v1.0.md'
$sourcePath = Join-Path $visualDir 'homepage-applications-aligned-preview-v1.0.html'
$freezePath = Join-Path $visualDir 'freeze-record.json'
$resultPath = Join-Path $PSScriptRoot 'verification_home_visual_bundle_v1.json'

$expected = @(
    @{ name = 'home-001-applications-aligned-1440-v1.0.png'; width = 1440; state = 'default' },
    @{ name = 'home-001-applications-aligned-1024-v1.0.png'; width = 1024; state = 'default' },
    @{ name = 'home-001-applications-aligned-768-v1.0.png'; width = 768; state = 'default' },
    @{ name = 'home-001-applications-aligned-390-v1.0.png'; width = 390; state = 'default' },
    @{ name = 'home-001-applications-aligned-320-v1.0.png'; width = 320; state = 'default' },
    @{ name = 'home-001-mobile-menu-390-v1.0.png'; width = 390; state = 'mobile-menu-open' },
    @{ name = 'home-001-products-expanded-390-v1.0.png'; width = 390; state = 'products-expanded' }
)

$checks = [System.Collections.Generic.List[object]]::new()
function Add-Check([string]$Id, [bool]$Pass, [string]$Detail) {
    $checks.Add([ordered]@{ id = $Id; pass = $Pass; detail = $Detail })
}
function Get-PngSize([string]$Path) {
    $bytes = [System.IO.File]::ReadAllBytes($Path)
    if ($bytes.Length -lt 24) { throw "PNG too short: $Path" }
    $signature = [byte[]](137,80,78,71,13,10,26,10)
    for ($i = 0; $i -lt 8; $i++) { if ($bytes[$i] -ne $signature[$i]) { throw "Invalid PNG signature: $Path" } }
    $width = [System.Net.IPAddress]::NetworkToHostOrder([BitConverter]::ToInt32($bytes, 16))
    $height = [System.Net.IPAddress]::NetworkToHostOrder([BitConverter]::ToInt32($bytes, 20))
    return @{ width = $width; height = $height }
}

Add-Check 'contract.exists' (Test-Path -LiteralPath $contractPath) $contractPath
Add-Check 'source.exists' (Test-Path -LiteralPath $sourcePath) $sourcePath
Add-Check 'freeze.exists' (Test-Path -LiteralPath $freezePath) $freezePath

$sourceText = if (Test-Path -LiteralPath $sourcePath) { Get-Content -LiteralPath $sourcePath -Raw } else { '' }
$contractText = if (Test-Path -LiteralPath $contractPath) { Get-Content -LiteralPath $contractPath -Raw } else { '' }
$freeze = $null
if (Test-Path -LiteralPath $freezePath) {
    try { $freeze = Get-Content -LiteralPath $freezePath -Raw | ConvertFrom-Json } catch { Add-Check 'freeze.json' $false $_.Exception.Message }
}
if ($null -ne $freeze) { Add-Check 'freeze.json' $true 'freeze-record.json parsed' }

$modules = @('hero','start-here','markets','products','applications','company','documents','resources','page-rfq')
foreach ($module in $modules) {
    Add-Check "module.$module" ($sourceText -match ('data-module=["'']' + [regex]::Escape($module) + '["'']')) "source contains data-module=$module"
}

$tokens = @(
    '--navy:#062b5b','--deep:#031b3a','--teal:#007f77','--bright:#00a99d','--ink:#334155',
    '--muted:#64748b','--soft:#f5f8fb','--line:#d9e2ec','--white:#fff'
)
$compactSource = $sourceText -replace '\s',''
foreach ($token in $tokens) {
    Add-Check "token.$token" ($compactSource.ToLowerInvariant().Contains($token)) "source contains $token"
}
Add-Check 'shell.1200' ($compactSource -match '1200px') 'source uses 1200px centered shell'
Add-Check 'tablet.start-here' (($sourceText -match 'data-module=["'']start-here["'']') -and ($sourceText -match 'data-tablet-visible=["'']true["'']')) 'Start Here is explicitly present on Tablet'
Add-Check 'rfq.desktop-tablet' (($sourceText -match 'data-module=["'']page-rfq["'']') -and ($sourceText -match 'data-visible-min=["'']768["'']')) 'page RFQ visible from 768px'
Add-Check 'rfq.mobile-hidden' ($compactSource -match '@media\(max-width:560px\).*\.pageRfq\{display:none') 'page RFQ hidden at mobile breakpoint'
Add-Check 'buyer.current.zero' (-not ($sourceText -match '>\s*CURRENT\s*<')) 'no buyer-visible CURRENT label'

$freezeAssets = @{}
if ($null -ne $freeze -and $null -ne $freeze.assets) {
    foreach ($asset in $freeze.assets) { $freezeAssets[$asset.file] = $asset }
}

foreach ($item in $expected) {
    $path = Join-Path $visualDir $item.name
    $exists = Test-Path -LiteralPath $path
    Add-Check "asset.$($item.name).exists" $exists $path
    if (-not $exists) { continue }
    $file = Get-Item -LiteralPath $path
    Add-Check "asset.$($item.name).bytes" ($file.Length -gt 0) "bytes=$($file.Length)"
    try {
        $size = Get-PngSize $path
        Add-Check "asset.$($item.name).width" ($size.width -eq $item.width) "expected=$($item.width), actual=$($size.width)"
        Add-Check "asset.$($item.name).height" ($size.height -gt 0) "height=$($size.height)"
    } catch {
        Add-Check "asset.$($item.name).png" $false $_.Exception.Message
    }
    $hash = (Get-FileHash -LiteralPath $path -Algorithm SHA256).Hash.ToUpperInvariant()
    $recorded = $freezeAssets[$item.name]
    Add-Check "asset.$($item.name).recorded" ($null -ne $recorded) 'asset recorded in freeze-record.json'
    if ($null -ne $recorded) {
        Add-Check "asset.$($item.name).hash" ($recorded.sha256.ToUpperInvariant() -eq $hash) "recorded=$($recorded.sha256), actual=$hash"
        Add-Check "asset.$($item.name).state" ($recorded.state -eq $item.state) "expected=$($item.state), actual=$($recorded.state)"
        Add-Check "asset.$($item.name).bytes-recorded" ([int64]$recorded.bytes -eq $file.Length) "recorded=$($recorded.bytes), actual=$($file.Length)"
    }
}

if ($null -ne $freeze) {
    $sourceHash = if (Test-Path -LiteralPath $sourcePath) { (Get-FileHash -LiteralPath $sourcePath -Algorithm SHA256).Hash.ToUpperInvariant() } else { '' }
    Add-Check 'freeze.workset' ($freeze.workset_id -eq 'HOME-001-G4-APP-ALIGN-V1-20260911') "workset_id=$($freeze.workset_id)"
    Add-Check 'freeze.bundle' ($freeze.bundle_id -eq 'HOME-001-G4-APP-ALIGN-BUNDLE-V1.0') "bundle_id=$($freeze.bundle_id)"
    Add-Check 'freeze.source-hash' ($freeze.source.sha256.ToUpperInvariant() -eq $sourceHash) "recorded=$($freeze.source.sha256), actual=$sourceHash"
    Add-Check 'freeze.asset-count' (@($freeze.assets).Count -eq 7) "asset_count=$(@($freeze.assets).Count)"
}

$failed = @($checks | Where-Object { -not $_.pass })
$result = [ordered]@{
    verifier = 'HOME-001-APPLICATIONS-ALIGNED-VISUAL-BUNDLE-V1'
    generated_at_utc = [DateTime]::UtcNow.ToString('o')
    project_root = $ProjectRoot
    workset_id = 'HOME-001-G4-APP-ALIGN-V1-20260911'
    bundle_id = 'HOME-001-G4-APP-ALIGN-BUNDLE-V1.0'
    passed = $failed.Count -eq 0
    checks_total = $checks.Count
    checks_passed = $checks.Count - $failed.Count
    checks_failed = $failed.Count
    checks = $checks
}
$result | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $resultPath -Encoding utf8

foreach ($check in $checks) {
    $label = if ($check.pass) { 'PASS' } else { 'FAIL' }
    Write-Host "$label $($check.id): $($check.detail)"
}
Write-Host "SUMMARY passed=$($result.passed) total=$($result.checks_total) failed=$($result.checks_failed)"
if ($failed.Count -gt 0) { exit 1 }
exit 0
