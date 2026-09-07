$ErrorActionPreference='Stop'
$gateRoot='D:/23MySec/pages/markets/poland/04_planning/gate4-v0.1'
$selfCheck='D:/23MySec/pages/markets/poland/05_review/MARKET-EU-PL_GATE4_EXECUTION_SELF_CHECK_V0.1.md'
$freeze=Get-Content -LiteralPath "$gateRoot/approval_core/source-freeze.json" -Raw | ConvertFrom-Json
$export=Get-Content -LiteralPath "$gateRoot/approval_core/export-inventory.json" -Raw | ConvertFrom-Json
$preflight=Get-Content -LiteralPath "$gateRoot/diagnostic_support/preflight-observations.json" -Raw | ConvertFrom-Json
$runtime=Get-Content -LiteralPath "$gateRoot/diagnostic_support/runtime-observations.json" -Raw | ConvertFrom-Json
$observations=foreach($capture in @($export.captures)+@($preflight.captures)) {
 $kind=if($capture.path -match 'preflight-'){'PREFLIGHT_SUPPORT'}else{'FORMAL_CORE'}
 $observation=switch -Regex ($capture.path) {
  'hero' {'Full supplier heading, Malaysia-origin paragraph and request/browse hierarchy readable; Header and current Markets treatment fit.';break}
  'product-review' {'Both complete application contexts readable; equal typography; 768 columns and 390 stack preserve sequence; common Products action follows both.';break}
  'documents' {'All three complete paragraphs and both actions readable; known-grade request, ordinary COO availability and unknown-grade alternative remain connected.';break}
  'material' {'Complete raw-material/finished-masterbatch distinction reads as ordinary prose without a product-card equivalence.';break}
  'final-rfq' {'Complete request and follow-up guidance readable; long EU supporting action is intact and subordinate.';break}
  'footer' {'Reverse Logo, complete navigation and legal utilities including Cookie Settings visible without clipped labels.';break}
  'menu' {'Eight-row open menu content and current Markets marker fit; actual white keyboard focus on Home is distinct from current state.';break}
  'cookie' {'Full no-optional-Analytics explanation, Close and Cookie Policy fit; actual focused Close has visible outline on opaque dialog.';break}
 }
 if($capture.path -match 'hero-focus'){$observation+=' Actual RFQ keyboard focus is visible and distinct from filled primary role.'}
 [ordered]@{path=$capture.path;sha256=$capture.sha256;tier=$kind;evidenceType='STATIC_VISUAL';inspection='Actually opened with tools.view_image(detail=original) by executor; read at native exported scale';observation=$observation;finding='No defect observed in this displayed region/state';limit='Static image does not independently prove behavior or unshown page regions'}
}
[ordered]@{date=(Get-Date).ToString('o');freezeId=$freeze.freezeId;status='EXECUTOR_VISUAL_OBSERVATIONS_NOT_INDEPENDENT_REVIEW';method='Four preflight images inspected before formal run; all eighteen formal PNGs inspected after export in three groups of six. This record transcribes completed visual observations.';images=@($observations)} | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath "$gateRoot/diagnostic_support/visual-observations.json" -Encoding utf8
$checks=foreach($item in @($freeze.dependencies)+@($freeze.inputs)+@($export.captures)+@($preflight.captures)) {
 $actual=(Get-FileHash -LiteralPath $item.path -Algorithm SHA256).Hash.ToLowerInvariant()
 [ordered]@{path=$item.path;expectedSha256=$item.sha256;actualSha256=$actual;matches=($actual -eq $item.sha256)}
}
if(@($checks|Where-Object {-not $_.matches}).Count){throw 'A frozen identity changed. Read the paths before final handoff.'}
$failed=@($runtime.records|Where-Object {$_.ok -eq $false})
if($failed.Count){throw 'Runtime record contains a failed assertion.'}
[ordered]@{date=(Get-Date).ToString('o');freezeId=$freeze.freezeId;status='EXECUTION_COMPLETE_DRAFT_FOR_PROJECT_CONTROL_REVIEW';unchangedFrozenDependencies=9;unchangedFrozenInputs=20;unchangedFormalPng=18;unchangedPreflightPng=4;runtimeRecordCount=$runtime.records.Count;failedRuntimeAssertions=$failed.Count;formalImageReadbackCount=18;preflightImageReadbackCount=4;reportReadback='Direction report and execution self-check opened as text after writing; font PostScript name corrected to actual Inter-20pt on 1440/768 and Inter-18pt on390; source and exports unchanged.';hashChecks=@($checks);limitations='Executor checks only; representative Gate4 local Chrome scope; no Gate5, real destination, deployment or approval.'} | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath "$gateRoot/diagnostic_support/final-readback-receipt.json" -Encoding utf8
function FileIdentity($path,$role) {
 $item=Get-Item -LiteralPath $path
 $relative=[IO.Path]::GetRelativePath($gateRoot,$item.FullName).Replace('\','/')
 $data=[ordered]@{path=$item.FullName.Replace('\','/');relativePath=$relative;role=$role;bytes=$item.Length;sha256=(Get-FileHash -LiteralPath $path -Algorithm SHA256).Hash.ToLowerInvariant()}
 if($item.Extension -eq '.png') {
  $bytes=[IO.File]::ReadAllBytes($item.FullName)
  $data.physicalWidth=([int]$bytes[16]*16777216+[int]$bytes[17]*65536+[int]$bytes[18]*256+[int]$bytes[19])
  $data.physicalHeight=([int]$bytes[20]*16777216+[int]$bytes[21]*65536+[int]$bytes[22]*256+[int]$bytes[23])
 }
 return $data
}
$files=foreach($item in Get-ChildItem -LiteralPath $gateRoot -Recurse -File | Where-Object Name -ne 'asset-inventory.json' | Sort-Object FullName) {
 $role=if($item.FullName -match 'diagnostic_support'){'DIAGNOSTIC_SUPPORT'}elseif($item.Extension -eq '.md'){'FORMAL_DIRECTION_REPORT'}else{'FORMAL_CORE'}
 FileIdentity $item.FullName $role
}
$files+=FileIdentity $selfCheck 'EXECUTION_SELF_CHECK_NOT_INDEPENDENT_REVIEW'
$extraAuthority=FileIdentity 'D:/23MySec/docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.4.md' 'INHERITED_SHARED_CONTRACT'
[ordered]@{date=(Get-Date).ToString('o');freezeId=$freeze.freezeId;status='DRAFT_FOR_PROJECT_CONTROL_REVIEW';entry=$freeze.entry;identityNotes='Existing G3 CSS/font and production SVGs are relative runtime dependencies; G3 source and JSON snapshots are provenance. No dependency was copied or replaced. Input identities were frozen before exports. Reports/support were completed afterwards and do not alter rendering. This inventory intentionally excludes its own recursive hash; final handoff reports its SHA256.';files=@($files);externalDependencies=@($freeze.dependencies|Where-Object relativePath -like '../*');frozenInputs=$freeze.inputs;supplementalAuthority=@($extraAuthority);exports='approval_core/export-inventory.json';sourceFreeze='approval_core/source-freeze.json';visualReadback='diagnostic_support/visual-observations.json';finalReadback='diagnostic_support/final-readback-receipt.json'} | ConvertTo-Json -Depth 10 | Set-Content -LiteralPath "$gateRoot/asset-inventory.json" -Encoding utf8
$read=Get-Content -LiteralPath "$gateRoot/asset-inventory.json" -Raw | ConvertFrom-Json
foreach($item in $read.files){if((Get-FileHash -LiteralPath $item.path -Algorithm SHA256).Hash.ToLowerInvariant() -ne $item.sha256){throw "Inventory mismatch: $($item.path)"}}
[ordered]@{files=$read.files.Count;pngs=@($read.files|Where-Object path -like '*.png').Count;frozenChecks=$checks.Count;inventorySha256=(Get-FileHash -LiteralPath "$gateRoot/asset-inventory.json" -Algorithm SHA256).Hash.ToLowerInvariant();reportSha256=(Get-FileHash -LiteralPath "$gateRoot/MARKET-EU-PL_GATE4_VISUAL_DIRECTION_AND_METHOD_REPORT_V0.1.md" -Algorithm SHA256).Hash.ToLowerInvariant();selfCheckSha256=(Get-FileHash -LiteralPath $selfCheck -Algorithm SHA256).Hash.ToLowerInvariant()} | ConvertTo-Json
