$ErrorActionPreference = 'Stop'
$evidenceRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$reportPath = Join-Path (Split-Path -Parent $evidenceRoot) 'APP-000_GATE9_INDEPENDENT_READ_ONLY_ACCEPTANCE_V1.0.md'
$indexPath = Join-Path (Split-Path -Parent $evidenceRoot) 'APP-000_GATE9_EVIDENCE_INDEX_V1.0.json'

function Evidence-Type([string]$name) {
  if ($name -match '\.png$') { return 'ACTUAL_RUNTIME' }
  if ($name -match 'manifest-validation|preflight') { return 'TEST_RESULT' }
  if ($name -match 'cms') { return 'LOCAL_SIMULATION' }
  if ($name -match '\.cjs$|\.ps1$') { return 'SOURCE_INSPECTION' }
  if ($name -match 'error') { return 'COLLECTION_DIAGNOSTIC' }
  return 'ACTUAL_RUNTIME'
}
function Proves([string]$name) {
  if ($name -match 'manifest-validation|preflight') { return @('APP000-G9-01','APP000-G9-14','APP000-G9-15') }
  if ($name -match 'projection') { return @('APP000-G9-01','APP000-G9-03','APP000-G9-07','APP000-G9-11','APP000-G9-13') }
  if ($name -match 'cms') { return @('APP000-G9-03','APP000-G9-04','APP000-G9-06','APP000-G9-14','APP000-G9-15') }
  if ($name -match 'route-integration') { return @('APP000-G9-03','APP000-G9-06','APP000-G9-08','APP000-G9-16','APP000-G9-17') }
  if ($name -match 'interaction') { return @('APP000-G9-05','APP000-G9-07','APP000-G9-08','APP000-G9-10') }
  if ($name -match '\.png$') { return @('APP000-G9-02','APP000-G9-08','APP000-G9-09','APP000-G9-10') }
  if ($name -match 'runtime') { return @('APP000-G9-01','APP000-G9-02','APP000-G9-03','APP000-G9-05','APP000-G9-09','APP000-G9-11','APP000-G9-12','APP000-G9-13') }
  return @('REPRODUCIBILITY')
}

$files = @(Get-ChildItem -LiteralPath $evidenceRoot -File | Sort-Object Name) + @(Get-Item -LiteralPath $reportPath)
$records = foreach ($file in $files) {
  [ordered]@{
    id = 'APP000-G9-EV-' + ([array]::IndexOf($files, $file) + 1).ToString('00')
    path = $file.FullName.Replace('D:\23MySec\','').Replace('\','/')
    sha256 = (Get-FileHash -Algorithm SHA256 -LiteralPath $file.FullName).Hash
    evidence_type = Evidence-Type $file.Name
    collected_by = '/root/app000_gate9_review'
    collected_date = '2026-09-08'
    personally_collected_or_read = $true
    candidate = [ordered]@{
      implementation_commit = 'f0285f288e256ce0c48205931dd8edf4b802b285'
      evidence_head = 'ce3f4c5c21033e56472ec53586173279fb78c415'
      build_id = 'jf9b1VFzbgKGSQMVOMMbU'
      runtime = 'http://127.0.0.1:4391'
      cms_fixture = 'http://127.0.0.1:4390/graphql'
    }
    environment_or_state = if ($file.Name -match 'cms') { 'LOCAL_SIMULATION scoped CMS proxy' } elseif ($file.Name -match '390') { '390px mobile emulation' } elseif ($file.Name -match '768') { '768px tablet emulation' } elseif ($file.Name -match '1440') { '1440px desktop emulation' } else { 'exact held local candidate' }
    proves = Proves $file.Name
  }
}
$index = [ordered]@{
  index_id = 'APP-000-G9-EVIDENCE-INDEX-01'
  page_id = 'APP-000'
  gate = 9
  review_mode = 'INDEPENDENT_READ_ONLY'
  candidate = [ordered]@{implementation_commit='f0285f288e256ce0c48205931dd8edf4b802b285'; evidence_head='ce3f4c5c21033e56472ec53586173279fb78c415'; build_id='jf9b1VFzbgKGSQMVOMMbU'}
  limitations = @('Native browser 200% zoom not verified','Physical touch device not verified','Named screen reader/AT not verified','CMS evidence is the supplied local scoped simulation fixture, not production WordPress persistence')
  artifacts = @($records)
}
$index | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $indexPath -Encoding utf8
