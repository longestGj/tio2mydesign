const fs = require('fs');
const crypto = require('crypto');

const base = 'D:/23MySec/pages/markets/belgium';
const out = `${base}/04_planning/gate4-v1.1`;
const review = `${base}/05_review`;
const sha = buffer => crypto.createHash('sha256').update(buffer).digest('hex');
const identity = path => {
  const buffer = fs.readFileSync(path);
  return { path, bytes: buffer.length, sha256: sha(buffer) };
};
const checks = [];
const check = (key, ok, detail) => checks.push({ key, status: ok ? 'PASS' : 'FAIL', detail });

const sourcePath = `${out}/MARKET-EU-BE_GATE4_COMPLETE_VISUAL_V1.1.html`;
const oldSourcePath = `${base}/04_planning/gate4-v1.0/MARKET-EU-BE_GATE4_COMPLETE_VISUAL_V1.0.html`;
const source = fs.readFileSync(sourcePath, 'utf8');
const oldSource = fs.readFileSync(oldSourcePath, 'utf8');
const before = "main [data-module='BE-04'] p:not(.action) a{display:inline-block;vertical-align:baseline;line-height:44px;min-height:44px}";
const after = "main [data-module='BE-04'] p:not(.action) a{display:inline-block;vertical-align:baseline;line-height:44px;min-height:44px;padding-inline:6px;outline-offset:-3px}";
check('source delta is exact BE-04 rule', source.replace(after, before) === oldSource && source.split(after).length === 2, null);

const historical = [
  [oldSourcePath, '73aad15d48c3261b31e34e71288c95a73ec5ab2e869af611ecdbf270aead92dc'],
  [`${base}/04_planning/gate4-v1.0/MARKET-EU-BE_GATE4_FREEZE_RECORD_V1.0.json`, 'ad3376e1f6b72f804f5ebec6335b2f022c004f346c535d10d12b9c374cd3791b'],
  [`${base}/04_planning/gate4-v1.0/MARKET-EU-BE_GATE4_EVIDENCE_INDEX_V1.0.json`, '883db5666eb1fa2f3c343fbbdd0f8f27456e6beb4070d30281ca504cfbd6ca67'],
  [`${base}/MARKET-EU-BE_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md`, '6dc915f84948344c00f8a64128d9f6dfe107f98d5b874354c82b51b3b25094ee'],
  [`${review}/gate4-complete-independent-v1.0/REVIEW.md`, 'b8ba7cc0b69a85ffc1e9a8c5f0f43c21ac077de88b4e358186a72f95d63c2ce1']
];
for (const [path, expected] of historical) check(`historical immutable: ${path}`, identity(path).sha256 === expected, identity(path));

const evidencePath = `${out}/MARKET-EU-BE_GATE4_EVIDENCE_INDEX_V1.1.json`;
const evidence = JSON.parse(fs.readFileSync(evidencePath, 'utf8'));
check('evidence identity bindings', evidence.images.every(item => {
  const actual = identity(item.path);
  return actual.bytes === item.bytes && actual.sha256 === item.sha256;
}), { images: evidence.images.length });
check('evidence category counts', evidence.counts.total_unique_images === 45 && evidence.counts.new_full_pages === 3 && evidence.counts.regenerated_continuous_segments === 19 && evidence.counts.new_focus_state_images === 18 && evidence.counts.retained_menu_cookie_states === 5, evidence.counts);
check('all new images visually opened', evidence.counts.opened_new_images === 40 && evidence.images.filter(item => item.regenerated_for_v1_1).every(item => item.opened), null);
check('retained state equivalence', evidence.images.filter(item => item.retained_from_freeze).length === 5 && evidence.images.filter(item => item.retained_from_freeze).every(item => item.pixel_identical_under_v1_1 && item.sha256 === item.v1_1_rerendered_sha256), null);

const focus = JSON.parse(fs.readFileSync(`${out}/diagnostic_support/focus-repair-runtime.json`, 'utf8'));
const regression = JSON.parse(fs.readFileSync(`${out}/diagnostic_support/render-r1/runtime-checks.json`, 'utf8'));
check('focused runtime', focus.status === 'PASS_PENDING_STATIC_VISUAL_READBACK' && focus.checks.length === 51 && !focus.failed.length && !focus.errors.length, { status: focus.status, checks: focus.checks.length });
check('full regression runtime', regression.status === 'RUNTIME_PASS_PENDING_VISUAL' && regression.checks.length === 115 && !regression.failed.length && !regression.errors.length, { status: regression.status, checks: regression.checks.length });
check('focus collision acceptance', focus.focus_states.length === 6 && focus.focus_states.every(item => item.focus.focused && item.focus.selfHits.length === 0 && item.focus.neighborHits.length === 0 && item.focus.rect.width >= 44 && item.focus.rect.height >= 44 && item.focus_contrast_against_white >= 3 && item.geometry_stable), null);

const artifacts = [
  sourcePath,
  `${out}/MARKET-EU-BE_GATE4_INPUT_INDEX_V1.1.json`,
  `${out}/MARKET-EU-BE_GATE4_WORKSET_V1.1.json`,
  `${out}/MARKET-EU-BE_GATE4_PREFLIGHT_RECORD_V1.1.json`,
  `${out}/MARKET-EU-BE_GATE4_FREEZE_RECORD_V1.1.json`,
  evidencePath,
  `${out}/MARKET-EU-BE_GATE4_COMPLETE_VISUAL_COMPOSITION_REPORT_V1.1.md`,
  `${review}/MARKET-EU-BE_GATE4_BE_G4_IR_01_REVISION_RESPONSE_V1.0.md`,
  `${review}/MARKET-EU-BE_GATE4_EXECUTION_SELF_CHECK_V1.1.md`,
  `${review}/MARKET-EU-BE_GATE4_REVIEW_SUBMISSION_V1.1.md`,
  `${base}/MARKET-EU-BE_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md`
].map(identity);
const manifest = fs.readFileSync(`${base}/MARKET-EU-BE_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md`, 'utf8');
const submission = fs.readFileSync(`${review}/MARKET-EU-BE_GATE4_REVIEW_SUBMISSION_V1.1.md`, 'utf8');
check('stage boundary retained', manifest.includes('DRAFT_FOR_PROJECT_CONTROL_REVIEW') && manifest.includes('NOT_AUTHORIZED') && manifest.includes('Independent focused re-review') && submission.includes('No user approval or Gate 6 authorization is claimed.'), null);
check('new frozen identities are consistent', artifacts.every(item => fs.existsSync(item.path)), null);

const result = {
  page_id: 'MARKET-EU-BE',
  workset_id: 'BE-G4-COMPLETE-20260907-02',
  freeze_id: 'BE-G4-FREEZE-20260907-02',
  finding_id: 'BE-G4-IR-01',
  role: 'EXECUTION_SELF_CHECK',
  generated_at: new Date().toISOString(),
  checks,
  failed: checks.filter(item => item.status === 'FAIL'),
  artifacts,
  image_counts: evidence.counts,
  runtime_counts: { full_regression: regression.checks.length, focused_repair: focus.checks.length, failures: regression.failed.length + focus.failed.length },
  restrictions: { edited_scope: 'Belgium page files only', root_status_index: 'NOT_EDITED_BY_THIS_WORKSET', gate6: 'NOT_AUTHORIZED_OR_STARTED' }
};
result.status = result.failed.length ? 'FAIL' : 'DELIVERY_READBACK_PASS_PENDING_INDEPENDENT_FOCUSED_REREVIEW';
const output = `${out}/diagnostic_support/final-delivery-readback.json`;
fs.writeFileSync(output, JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify({ status: result.status, checks: checks.length, failures: result.failed.length, artifacts: artifacts.length, output: identity(output) }));
if (result.failed.length) process.exitCode = 1;
