param(
    [string]$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
)

$ErrorActionPreference = 'Stop'
$visualDir = Join-Path $ProjectRoot 'pages\home\04_planning\visual-designs\home-applications-aligned-v1.1'
$previousDir = Join-Path $ProjectRoot 'pages\home\04_planning\visual-designs\home-applications-aligned-v1.0'
$contractPath = Join-Path $ProjectRoot 'pages\home\04_planning\18_homepage_applications_aligned_visual_design_v1.1.md'
$repairPath = Join-Path $ProjectRoot 'pages\home\05_review\HOME-001_APPLICATIONS_ALIGNED_GATE4_TARGETED_REPAIR_V1.1.md'
$sourcePath = Join-Path $visualDir 'homepage-applications-aligned-preview-v1.1.html'
$freezePath = Join-Path $visualDir 'freeze-record.json'
$resultPath = Join-Path $PSScriptRoot 'verification_home_visual_bundle_v1_1.json'
$runtimePath = Join-Path $PSScriptRoot 'runtime_observations_home_visual_bundle_v1_1.json'

$expected = @(
    @{ name = 'home-001-applications-aligned-1440-v1.1.png'; width = 1440; state = 'default' },
    @{ name = 'home-001-applications-aligned-1024-v1.1.png'; width = 1024; state = 'default' },
    @{ name = 'home-001-applications-aligned-768-v1.1.png'; width = 768; state = 'default' },
    @{ name = 'home-001-applications-aligned-390-v1.1.png'; width = 390; state = 'default' },
    @{ name = 'home-001-applications-aligned-320-v1.1.png'; width = 320; state = 'default' },
    @{ name = 'home-001-mobile-menu-390-v1.1.png'; width = 390; state = 'mobile-menu-open' },
    @{ name = 'home-001-products-expanded-390-v1.1.png'; width = 390; state = 'products-expanded' }
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
Add-Check 'repair.exists' (Test-Path -LiteralPath $repairPath) $repairPath
Add-Check 'source.exists' (Test-Path -LiteralPath $sourcePath) $sourcePath
Add-Check 'freeze.exists' (Test-Path -LiteralPath $freezePath) $freezePath
Add-Check 'runtime.exists' (Test-Path -LiteralPath $runtimePath) $runtimePath

$sourceText = if (Test-Path -LiteralPath $sourcePath) { [System.IO.File]::ReadAllText($sourcePath, [System.Text.Encoding]::UTF8) } else { '' }
$contractText = if (Test-Path -LiteralPath $contractPath) { [System.IO.File]::ReadAllText($contractPath, [System.Text.Encoding]::UTF8) } else { '' }
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
Add-Check 'rfq.mobile-hidden' ($compactSource -match '@media\(max-width:560px\).*\.page-rfq\{display:none') 'page RFQ hidden at mobile breakpoint'
Add-Check 'font.inter-bundled' (($sourceText -match '@font-face') -and ($sourceText -match 'dependencies/Inter-Variable\.ttf')) 'static source binds the local Inter variable-font dependency'
Add-Check 'buyer.current.zero' (-not ($sourceText -match '>\s*CURRENT\s*<')) 'no buyer-visible CURRENT label'
Add-Check 'shared.chrome.owner' (([regex]::Matches($sourceText, 'data-shared-owner=["'']HOME_GLOBAL_CHROME["'']')).Count -eq 2) 'Header and Footer both declare the shared owner assembly'
Add-Check 'chrome.desktop-84' ($compactSource -match '\.global-header\{[^}]*height:84px') 'Desktop Header is 84px'
Add-Check 'chrome.mobile-64' ($compactSource -match '@media\(max-width:1100px\).*\.global-header\{height:64px') 'Mobile Header is 64px below shared breakpoint'
Add-Check 'chrome.mobile-compact-rfq' (($sourceText -match '<span class="rfq-compact">RFQ</span>') -and ($compactSource -match '\.rfq-full\{display:none\}')) 'Mobile Header provides compact RFQ label'
Add-Check 'chrome.menu-deep-navy' ($compactSource -match '\.mobile-menunav\{[^}]*background:var\(--deep\)') 'Mobile Menu uses Deep Navy shared treatment'
Add-Check 'chrome.menu-current-marker' ($compactSource -match '\.mobile-menunav>a\[aria-current="page"\]::before\{[^}]*width:4px[^}]*background:var\(--bright\)') 'Mobile Home current marker is 4px Teal'
$legalExpected = '<nav class="legal-utilities" aria-label="Legal and privacy navigation"><a href="/privacy-policy/">Privacy Policy</a><a href="/ms/privacy-policy/">Dasar Privasi (BM)</a><a href="/cookie-policy/">Cookie Policy</a><button type="button">Cookie Settings</button></nav>'
Add-Check 'chrome.footer-legal-order' ($sourceText.Contains($legalExpected)) 'Footer legal utilities have exact order, routes and button semantics'
Add-Check 'chrome.footer-targets' (($compactSource -match '\.footer-cola\{[^}]*min-height:44px') -and ($compactSource -match '\.footer-rfq\{[^}]*min-height:48px')) 'Footer navigation and RFQ target minima are 44px and 48px'
$gradeIds = @('M-350','M-510','M-896','M-996','M-2196','M-895','M-200','M-108','M-210','M-340','M-886','M-52','M-2377','CR-901')
foreach ($gradeId in $gradeIds) {
    Add-Check "grade.$gradeId" (($sourceText -match ('>\s*' + [regex]::Escape($gradeId) + '\s*<'))) "source contains $gradeId"
}

$runtime = $null
if (Test-Path -LiteralPath $runtimePath) {
    try { $runtime = [System.IO.File]::ReadAllText($runtimePath, [System.Text.Encoding]::UTF8) | ConvertFrom-Json } catch { Add-Check 'runtime.json' $false $_.Exception.Message }
}
if ($null -ne $runtime) {
    Add-Check 'runtime.json' $true 'runtime observations parsed'
    Add-Check 'runtime.pass' ($runtime.passed -eq $true) "passed=$($runtime.passed), failed=$($runtime.checks_failed)"
    Add-Check 'runtime.count' (($runtime.checks_total -eq 88) -and ($runtime.checks_passed -eq 88) -and ($runtime.checks_failed -eq 0)) "total=$($runtime.checks_total), passed=$($runtime.checks_passed), failed=$($runtime.checks_failed)"
}

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
        Add-Check "asset.$($item.name).width-recorded" ([int]$recorded.width -eq $size.width) "recorded=$($recorded.width), actual=$($size.width)"
        Add-Check "asset.$($item.name).height-recorded" ([int]$recorded.height -eq $size.height) "recorded=$($recorded.height), actual=$($size.height)"
        Add-Check "asset.$($item.name).viewport-recorded" ([int]$recorded.viewport_width -eq $item.width) "recorded=$($recorded.viewport_width), expected=$($item.width)"
    }
}

if ($null -ne $freeze) {
    $sourceHash = if (Test-Path -LiteralPath $sourcePath) { (Get-FileHash -LiteralPath $sourcePath -Algorithm SHA256).Hash.ToUpperInvariant() } else { '' }
    Add-Check 'freeze.workset' ($freeze.workset_id -eq 'HOME-001-G4-APP-ALIGN-V1-20260911') "workset_id=$($freeze.workset_id)"
    Add-Check 'freeze.bundle' ($freeze.bundle_id -eq 'HOME-001-G4-APP-ALIGN-BUNDLE-V1.1') "bundle_id=$($freeze.bundle_id)"
    Add-Check 'freeze.source-hash' ($freeze.source.sha256.ToUpperInvariant() -eq $sourceHash) "recorded=$($freeze.source.sha256), actual=$sourceHash"
    Add-Check 'freeze.source-bytes' ([int64]$freeze.source.bytes -eq (Get-Item -LiteralPath $sourcePath).Length) "recorded=$($freeze.source.bytes), actual=$((Get-Item -LiteralPath $sourcePath).Length)"
    Add-Check 'freeze.asset-count' (@($freeze.assets).Count -eq 7) "asset_count=$(@($freeze.assets).Count)"
    Add-Check 'freeze.status' ($freeze.status -eq 'RESOLVED_IN_DRAFT_PENDING_GATE5_TARGETED_RECHECK') "status=$($freeze.status)"
    Add-Check 'freeze.lifecycle' ($freeze.lifecycle -eq 'DRAFT_FOR_PROJECT_CONTROL_REVIEW') "lifecycle=$($freeze.lifecycle)"
    Add-Check 'freeze.finding' ($freeze.finding -eq 'HOME-G5-VR-01') "finding=$($freeze.finding)"
    Add-Check 'freeze.inspection' ([int]$freeze.formal_assets_opened_and_inspected -eq 7) "opened=$($freeze.formal_assets_opened_and_inspected)"
    Add-Check 'body.preserved' (($freeze.body_preservation.match -eq $true) -and ($freeze.body_preservation.previous_sha256 -eq $freeze.body_preservation.current_sha256)) "previous=$($freeze.body_preservation.previous_sha256), current=$($freeze.body_preservation.current_sha256)"
    $previousFreezePath = Join-Path $previousDir 'freeze-record.json'
    $previousSourcePath = Join-Path $previousDir 'homepage-applications-aligned-preview-v1.0.html'
    Add-Check 'previous.freeze-hash' ((Get-FileHash -LiteralPath $previousFreezePath -Algorithm SHA256).Hash.ToUpperInvariant() -eq $freeze.previous_bundle_immutability.freeze_record_sha256.ToUpperInvariant()) 'V1.0 freeze record remains byte-identical'
    Add-Check 'previous.source-hash' ((Get-FileHash -LiteralPath $previousSourcePath -Algorithm SHA256).Hash.ToUpperInvariant() -eq $freeze.previous_bundle_immutability.source_sha256.ToUpperInvariant()) 'V1.0 source remains byte-identical'
    $previousFontPath = Join-Path $previousDir $freeze.previous_bundle_immutability.font_dependency.file
    Add-Check 'previous.font-hash' ((Get-FileHash -LiteralPath $previousFontPath -Algorithm SHA256).Hash.ToUpperInvariant() -eq $freeze.previous_bundle_immutability.font_dependency.sha256.ToUpperInvariant()) 'V1.0 bundled font remains byte-identical'
    foreach ($previousAsset in $freeze.previous_bundle_immutability.assets) {
        $previousAssetPath = Join-Path $previousDir $previousAsset.file
        $actualPreviousHash = (Get-FileHash -LiteralPath $previousAssetPath -Algorithm SHA256).Hash.ToUpperInvariant()
        Add-Check "previous.asset.$($previousAsset.file)" ($actualPreviousHash -eq $previousAsset.sha256.ToUpperInvariant()) "recorded=$($previousAsset.sha256), actual=$actualPreviousHash"
    }
    foreach ($dependency in $freeze.dependencies) {
        $dependencyPath = if ([System.IO.Path]::IsPathRooted($dependency.path)) { $dependency.path } else { Join-Path $ProjectRoot $dependency.path }
        $dependencyExists = Test-Path -LiteralPath $dependencyPath
        Add-Check "dependency.$($dependency.role).exists" $dependencyExists $dependency.path
        if ($dependencyExists) {
            $dependencyFile = Get-Item -LiteralPath $dependencyPath
            $dependencyHash = (Get-FileHash -LiteralPath $dependencyPath -Algorithm SHA256).Hash.ToUpperInvariant()
            Add-Check "dependency.$($dependency.role).bytes" ([int64]$dependency.bytes -eq $dependencyFile.Length) "recorded=$($dependency.bytes), actual=$($dependencyFile.Length)"
            Add-Check "dependency.$($dependency.role).hash" ($dependency.sha256.ToUpperInvariant() -eq $dependencyHash) "recorded=$($dependency.sha256), actual=$dependencyHash"
        }
    }
}

$failed = @($checks | Where-Object { -not $_.pass })
$result = [ordered]@{
    verifier = 'HOME-001-APPLICATIONS-ALIGNED-VISUAL-BUNDLE-V1.1'
    capture_date = '2026-09-11'
    reproducibility = 'No wall-clock timestamp is encoded; identical inputs produce byte-stable JSON.'
    project_root = $ProjectRoot
    workset_id = 'HOME-001-G4-APP-ALIGN-V1-20260911'
    bundle_id = 'HOME-001-G4-APP-ALIGN-BUNDLE-V1.1'
    passed = $failed.Count -eq 0
    checks_total = $checks.Count
    checks_passed = $checks.Count - $failed.Count
    checks_failed = $failed.Count
    checks = $checks
}
$resultJson = (($result | ConvertTo-Json -Depth 8) -replace "`r`n", "`n") + "`n"
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($resultPath, $resultJson, $utf8NoBom)

foreach ($check in $checks) {
    $label = if ($check.pass) { 'PASS' } else { 'FAIL' }
    Write-Host "$label $($check.id): $($check.detail)"
}
Write-Host "SUMMARY passed=$($result.passed) total=$($result.checks_total) failed=$($result.checks_failed)"
if ($failed.Count -gt 0) { exit 1 }
exit 0
