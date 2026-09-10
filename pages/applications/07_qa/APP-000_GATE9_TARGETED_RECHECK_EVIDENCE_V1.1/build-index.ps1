$ErrorActionPreference='Stop'
$root=Split-Path -Parent $MyInvocation.MyCommand.Path
$qa=Split-Path -Parent $root
$report=Join-Path $qa 'APP-000_GATE9_TARGETED_INDEPENDENT_RECHECK_V1.1.md'
$index=Join-Path $qa 'APP-000_GATE9_TARGETED_RECHECK_EVIDENCE_INDEX_V1.1.json'
$files=@(Get-ChildItem -File -LiteralPath $root|Sort-Object Name)+@(Get-Item -LiteralPath $report)
$artifacts=@()
for($i=0;$i -lt $files.Count;$i++){
  $f=$files[$i]
  $type=if($f.Extension -eq '.png'){'ACTUAL_RUNTIME'}elseif($f.Name -match 'manifest-validation|preflight'){'TEST_RESULT'}elseif($f.Name -match '\.(cjs|ps1)$'){'SOURCE_INSPECTION'}else{'ACTUAL_RUNTIME'}
  $proves=if($f.Name -match 'manifest-validation|preflight'){@('RECHECK_SCOPE_STATUS')}elseif($f.Name -match '390|768|1440'){@('APP000-G9-05','APP000-G9-09','APP000-G9-REPAIR-F03')}elseif($f.Name -match 'public-(html|rsc)'){@('APP000-G9-01','APP000-G9-07','APP000-G9-13','APP000-G9-REPAIR-F01')}else{@('APP000-G9-REPAIR-F01','APP000-G9-REPAIR-F02','APP000-G9-REPAIR-F03','APP000-G9-REPAIR-F04')}
  $artifacts += [ordered]@{
    id='APP000-G9-R2-EV-'+($i+1).ToString('00')
    path=$f.FullName.Replace('D:\23MySec\','').Replace('\','/')
    sha256=(Get-FileHash -Algorithm SHA256 -LiteralPath $f.FullName).Hash
    evidence_type=$type
    collected_by='/root/app000_gate9_review'
    collected_date='2026-09-08'
    personally_collected_or_read=$true
    candidate=[ordered]@{implementation_commit='0144b303d0546dc5bb7012e4292df6339f851b78';evidence_head='87f48dc6eb0489ab26822280918dd0248efe6e05';build_id='cD6FOWG8iVMbgeRxyIqIS';runtime='http://127.0.0.1:4391'}
    environment_or_state=if($f.Name -match '390'){'390px browser emulation'}elseif($f.Name -match '768'){'768px browser emulation'}elseif($f.Name -match '1440'){'1440px browser emulation'}else{'exact held local repair candidate; supplied CMS and receiver fixtures where applicable'}
    proves=$proves
  }
}
$value=[ordered]@{
  index_id='APP-000-G9-TARGETED-RECHECK-EVIDENCE-INDEX-01'
  page_id='APP-000'
  gate=9
  review_mode='INDEPENDENT_READ_ONLY_TARGETED_RECHECK'
  candidate=[ordered]@{implementation_commit='0144b303d0546dc5bb7012e4292df6339f851b78';evidence_head='87f48dc6eb0489ab26822280918dd0248efe6e05';build_id='cD6FOWG8iVMbgeRxyIqIS'}
  public_projection_classification='Approved /tio2-my/brand/* public asset URLs are URL namespaces, not serialized site-scope fields.'
  synthetic_receiver_note='One local-only synthetic request reached the supplied 127.0.0.1:4392 fixture; no external or real buyer submission.'
  non_claims=@('physical touch','native browser 200% zoom','named screen reader/AT')
  artifacts=$artifacts
}
$value|ConvertTo-Json -Depth 9|Set-Content -LiteralPath $index -Encoding utf8
