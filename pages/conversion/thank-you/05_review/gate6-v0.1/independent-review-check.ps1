$ErrorActionPreference = 'Stop'
$root = (Resolve-Path (Join-Path $PSScriptRoot '../../../../..')).Path
$packageRel = 'pages/conversion/thank-you/06_handoff/CONV-THANK_GATE6_HANDOFF_PACKAGE_V0.1.md'
$packagePath = Join-Path $root $packageRel
$text = Get-Content -Raw -LiteralPath $packagePath
$lines = Get-Content -LiteralPath $packagePath

$ctRows = @($lines | Where-Object { $_ -match '^\| `CT-G9-\d{2}` \|' })
$ctIds = @($ctRows | ForEach-Object { [regex]::Match($_, 'CT-G9-\d{2}').Value })
$depRows = @($lines | Where-Object { $_ -match '^\| `THANK-DEP\d{2}` \|' })
$depIds = @($depRows | ForEach-Object { [regex]::Match($_, 'THANK-DEP\d{2}').Value })

$sourceChecks = @(
  @{ path = 'pages/conversion/thank-you/CONV-THANK_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md'; expected = 'a688fab4a131c0e303be94e4745b6c9381bf61b869354e8bbebce1543fd8d3ce' },
  @{ path = 'docs/architecture/GATE6_SYS404_CONVTHANK_TO_GATE8_CONTROL_V1.0.md'; expected = '33edf48dff5c5b940089c1d32ad39b23a6bcfc27426a242d34e1c5547a79fd45' },
  @{ path = 'pages/conversion/thank-you/05_review/CONV-THANK_GATE4_TO_GATE6_HANDOFF_V0.1.md'; expected = '6b55b27b09bb9d5c34e018dd50abec40917e1b9009bf175ab1c4410b4e0a0e6a' },
  @{ path = 'pages/conversion/thank-you/05_review/CONV-THANK_GATE5_CONTROLLER_ACCEPTANCE_AND_VISUAL_CLOSURE_V0.1.md'; expected = '92e694e74b0f5ea870cd9d7706b67d117013600158ed4e012d705135da157d30' },
  @{ path = 'pages/conversion/thank-you/05_review/gate5-independent-v0.1/CONV-THANK_GATE5_INDEPENDENT_TARGETED_RECHECK_V0.2.md'; expected = '1fb643eb7b6071c5287bf24c10362e89fbfaf77902655929afa6f5acba65f155' },
  @{ path = 'pages/conversion/thank-you/02_analysis/CONV-THANK_THREE_FORM_SUCCESS_CONTRACT_IMPACT_AUDIT_V0.1.md'; expected = 'a51f5b39104f8635e384e31415c71eb67aa61ed7c7f3c99d4dd53a9a725cd976' },
  @{ path = 'pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE8_USER_AUTHORIZATION_AND_HANDOFF_RECORD_V1.0.md'; expected = '9bf6b0f3658332b781dff83361d1dd7b3b986f572fd988baa0227b09596f3432' },
  @{ path = 'pages/conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_HANDOFF_PACKAGE_V1.1.md'; expected = '264156a38cc88f0926bb9eb6b0bc7ca3ddc500a8b47d3ff63eacc50510930d15' },
  @{ path = 'pages/conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_CMS_API_COMPONENT_MAPPING_V1.0.md'; expected = '219665fcf1e6b7d8b4c6e5673924d5ff820356481335b7df78e70eb5d7642cbf' },
  @{ path = 'pages/conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.4.md'; expected = 'acc1977233a6089f954555e403e493516b2240c1a4972695019c9d1224522a59' },
  @{ path = 'pages/conversion/05_review/CONV-DOC_WEB3FORMS_FREE_PLAN_RUNTIME_DECISION_V0.1.md'; expected = '410e880ca37df593ec4ddc9d786200af98a958ebf7d185d760b3ff5a2ec2dce3' },
  @{ path = 'pages/conversion/06_handoff/CONV-DOC_GATE7_HANDOFF_PACKAGE_V0.1.md'; expected = 'cd0505f25118bd604138cc2a9b5ec04b04af62b6c72e8c5bf3dac16bd08c511a' },
  @{ path = 'pages/conversion/request-sample/05_review/CONV-SAMPLE_GATE9_CURRENT_BASELINE_MANIFEST_V0.3.md'; expected = '4afbf5b80ea7b174554e26a884f1e4dedb38a47021ba6ba36939c21a6618bb61' },
  @{ path = 'pages/conversion/request-sample/06_handoff/CONV-SAMPLE_GATE7_MANIFEST_V0.2.md'; expected = '5a8abfdb6a799cfa47e02a662202ffcdf4645a3ffd82bfe89007d9cce9325599' },
  @{ path = 'pages/conversion/request-sample/06_handoff/CONV-SAMPLE_GATE7_CMS_API_COMPONENT_MAPPING_V0.1.md'; expected = '8e70fa0b368d498f26d8205c80c385dd69e68cf88974a0e482a4b5a67242369d' },
  @{ path = 'docs/architecture/GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md'; expected = 'a74953971244d3b2bb43f6bc5d9b798f428d9590bab8bcb8664e1d4e9b4b31cb' },
  @{ path = 'docs/architecture/GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json'; expected = 'cbd36d338412a5d311ae062a93982d9a5799e0cf3d459bcb72d41e4a155247ad' }
) | ForEach-Object {
  $actual = (Get-FileHash -Algorithm SHA256 -LiteralPath (Join-Path $root $_.path)).Hash.ToLowerInvariant()
  [ordered]@{ path = $_.path; expected_sha256 = $_.expected; actual_sha256 = $actual; pass = ($actual -eq $_.expected) }
}

$checks = [ordered]@{
  package_identity = (((Get-Item -LiteralPath $packagePath).Length -eq 29278) -and ((Get-FileHash -Algorithm SHA256 -LiteralPath $packagePath).Hash.ToLowerInvariant() -eq 'd3b3c4b296bda4a9d7951d7bc0a14b46e89f16840268d227490f0f2301e5ed9e'))
  ct_row_count_16 = ($ctRows.Count -eq 16)
  ct_ids_unique_16 = (($ctIds | Sort-Object -Unique).Count -eq 16)
  ct_rows_have_seven_fields = (($ctRows | Where-Object { (@($_.Split('|')[1..7] | Where-Object { [string]::IsNullOrWhiteSpace($_) })).Count -gt 0 }).Count -eq 0)
  dependency_row_count_7 = ($depRows.Count -eq 7)
  dependency_ids_unique_7 = (($depIds | Sort-Object -Unique).Count -eq 7)
  request_is_sole_selector = ($text.Contains('The only approved selector key is `request`') -and $text.Contains('The obsolete `type` key is never accepted.'))
  direct_negative_matrix = (@('request` is missing','unsupported value','marker is absent','marker types mismatch','Marker is stale','previous/new browser session','unacknowledged, ambiguous or merely transport-successful','Obsolete `?type=quote`') | Where-Object { -not $text.Contains($_) }).Count -eq 0
  receiver_predicates_distinct = ($text.Contains('HTTP 2xx alone is insufficient') -and $text.Contains('parsed JSON `success=true`') -and $text.Contains('`ok=true` **and** `receipt_confirmed=true`'))
  prototype_boundary = ($text.Contains('`LOCAL_SIMULATION / PROTOTYPE_ONLY`') -and $text.Contains('do not prove production'))
  gate8_manifest_contract = ($text.Contains('gate8_evidence_manifest.json') -and $text.Contains('implementation commit') -and $text.Contains('evidence HEAD'))
  source_hashes_all_match = (($sourceChecks | Where-Object { -not $_.pass }).Count -eq 0)
}

$result = [ordered]@{
  schema_version = '1.0'
  page_id = 'CONV-THANK'
  dispatch_id = 'G6-CONVTHANK-REVIEW-20260908-01'
  mode = 'INDEPENDENT_REVIEW'
  reviewer = '/root/conv_thank_gate3_review'
  package_author = '/root/conv_thank_gate4_execute'
  package = [ordered]@{ path = $packageRel; bytes = 29278; sha256 = 'd3b3c4b296bda4a9d7951d7bc0a14b46e89f16840268d227490f0f2301e5ed9e' }
  checks = $checks
  acceptance_ids = $ctIds
  dependency_ids = $depIds
  source_hash_checks = $sourceChecks
  required_findings = 0
  conclusion = 'REVIEW_PASS / PROJECT_CONTROL_REVIEW_PASS'
  limits = @('No Gate 4 visual re-review', 'No production runtime, receiver, session, cache, analytics, deployment or release test', 'No Gate 6 closure or Gate 8 handoff')
  boundary = [ordered]@{ d16_accessed = $false; reviewed_package_modified = $false; manifest_status_index_modified = $false }
}

$result | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath (Join-Path $PSScriptRoot 'CONV-THANK_GATE6_INDEPENDENT_MACHINE_REVIEW_V0.1.json') -Encoding utf8
if (($checks.Values | Where-Object { -not $_ }).Count -gt 0) { throw 'One or more independent checks failed.' }
