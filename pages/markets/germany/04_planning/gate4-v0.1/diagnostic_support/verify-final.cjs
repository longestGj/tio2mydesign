const fs = require('fs');
const crypto = require('crypto');

const root = 'D:/23MySec';
const base = root + '/pages/markets/germany/04_planning/gate4-v0.1';
const review = root + '/pages/markets/germany/05_review';
const approval = base + '/approval_core';
const diag = base + '/diagnostic_support';
const candidatePath = base + '/MARKET-EU-DE_GATE4_COMPLETE_VISUAL_V0.1.html';
const cssPath = base + '/visual-direction.css';
const sha = data => crypto.createHash('sha256').update(data).digest('hex');
const identity = file => { const data = fs.readFileSync(file); return { path: file.replaceAll('\\', '/'), bytes: data.length, sha256: sha(data) }; };
const results = [];
const assert = (name, pass, data = null) => { results.push({ name, pass: Boolean(pass), data }); if (!pass) throw new Error(name); };
const same = item => { const x = identity(item.path); return x.bytes === item.bytes && x.sha256 === item.sha256; };

const freeze = JSON.parse(fs.readFileSync(approval + '/source-freeze.json', 'utf8'));
assert('freeze id exact', freeze.freeze_id === 'DE-G4-COMPLETE-20260907-01-F01');
const drift = JSON.parse(fs.readFileSync(diag + '/post-freeze-drift.json', 'utf8'));
for (const item of freeze.frozen_files) {
  if (item.path === drift.original_path && !same(item)) {
    assert('recorded post-freeze Index drift matches frozen identity', item.bytes === drift.frozen_identity.bytes && item.sha256 === drift.frozen_identity.sha256);
    assert('preserved frozen Index bytes exact', same(drift.preserved_snapshot) && drift.preserved_snapshot.sha256 === item.sha256);
    assert('recorded live Index identity exact', same(drift.current_identity));
  } else {
    assert(`frozen identity/${item.path}`, same(item));
  }
}

const evidence = JSON.parse(fs.readFileSync(base + '/evidence_index.json', 'utf8'));
assert('workset id exact', evidence.workset_id === 'DE-G4-COMPLETE-20260907-01');
assert('evidence remains review draft', evidence.status === 'COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW');
for (const item of Object.values(evidence.bindings)) if (item && item.path) assert(`evidence binding/${item.path}`, same(item));
for (const item of evidence.dependencies) assert(`evidence dependency/${item.path}`, same(item));
assert('51 unique images', evidence.images.length === 51 && new Set(evidence.images.map(x => x.path)).size === 51);
assert('51 images opened', evidence.images.every(x => x.opened === true));
for (const item of evidence.images) {
  assert(`image identity/${item.path}`, same(item));
  const data = fs.readFileSync(item.path);
  assert(`PNG signature/${item.path}`, data.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10])));
  assert(`PNG dimensions/${item.path}`, data.readUInt32BE(16) === item.pixelWidth && data.readUInt32BE(20) === item.pixelHeight && item.pixelWidth > 0 && item.pixelHeight > 0);
}

for (const [name, expected] of [['direction-r1-checks.json', 'VISUAL_DIRECTION_CHECKED'], ['preflight-r1-checks.json', 'PASS_FOR_FORMAL_RENDER'], ['formal-r1-checks.json', 'FORMAL_EXECUTION_SELF_CHECK_PASS']]) {
  const record = JSON.parse(fs.readFileSync(diag + '/' + name, 'utf8'));
  assert(`${name} status`, record.status === expected);
  assert(`${name} checks`, record.summary.checks === 237 && record.summary.passed === 237 && record.summary.failed === 0);
  assert(`${name} source identity`, same(record.source));
  assert(`${name} CSS identity`, same(record.css));
}

const g3Path = root + '/pages/markets/germany/04_planning/gate3-v0.1/MARKET-EU-DE_GATE3_WIREFRAME_V0.1.html';
const expected = fs.readFileSync(g3Path, 'utf8')
  .replace('file:///D:/23MySec/pages/markets/germany/04_planning/gate3-v0.1/dependencies/Inter-Variable.ttf', 'dependencies/Inter-Variable.ttf')
  .replace('file:///D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg', 'dependencies/tio2-malaysia-primary-horizontal-v0.1.svg')
  .replace('file:///D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg', 'dependencies/tio2-malaysia-reverse-monochrome-v0.1.svg')
  .replace('</head>', '<link rel="stylesheet" href="visual-direction.css"></head>');
assert('candidate exact Gate 3 derivation', fs.readFileSync(candidatePath, 'utf8') === expected);
assert('candidate source identity exact', identity(candidatePath).sha256 === '9f729196ea8135b7daa9aa83cc8e43768eafa27a35792605de67d125e0eccdbc');
assert('stylesheet identity exact', identity(cssPath).sha256 === 'd5723d30d33b265beb60d8afe5394621eb5c1ada23d2a89f56ad0d4d7f21b10d');

const manifestPath = root + '/pages/markets/germany/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.9_DRAFT.md';
const manifest = fs.readFileSync(manifestPath, 'utf8');
assert('manifest remains a draft candidate', manifest.includes('V0.9 DRAFT') && manifest.includes('Gate 4 independent review | `PENDING`') && manifest.includes('V0.8 remains the current approved Germany Manifest'));
assert('independent report absent before review', !fs.existsSync(review + '/gate4-complete-independent-v0.1/REVIEW.md'));
assert('review entry exact', evidence.independent_review.path === review + '/gate4-complete-independent-v0.1/REVIEW.md');
assert('no Gate 6 artifact in workset', !fs.existsSync(base.replace('/gate4-v0.1', '/gate6-v0.1')));
assert('root Status untouched by workset', !evidence.bindings.status && !evidence.bindings.index);

const receipt = {
  page_id: 'MARKET-EU-DE',
  workset_id: 'DE-G4-COMPLETE-20260907-01',
  freeze_id: 'DE-G4-COMPLETE-20260907-01-F01',
  status: 'FINAL_EXECUTOR_VERIFICATION_PASS / READY_FOR_INDEPENDENT_REVIEW',
  summary: { checks: results.length, passed: results.filter(x => x.pass).length, failed: results.filter(x => !x.pass).length, images: evidence.images.length, formal_runtime_checks: 237, executor_required_findings: 0 },
  identities: {
    candidate: identity(candidatePath),
    css: identity(cssPath),
    freeze: identity(approval + '/source-freeze.json'),
    evidence_index: identity(base + '/evidence_index.json'),
    manifest_candidate: identity(manifestPath),
    composition_report: identity(base + '/MARKET-EU-DE_GATE4_VISUAL_AND_EXECUTION_REPORT_V0.1.md'),
    executor_self_check: identity(review + '/MARKET-EU-DE_GATE4_EXECUTION_SELF_CHECK_V0.1.md'),
    review_submission: identity(review + '/MARKET-EU-DE_GATE4_REVIEW_SUBMISSION_V0.1.md')
  },
  independent_review_entry: evidence.independent_review.path,
  stop: 'Executor verification only. No independent PASS, project-control PASS, Gate 4 closure, Gate 6, development, deployment or publication.',
  verified_at: new Date().toISOString()
};
fs.writeFileSync(diag + '/final-receipt.json', JSON.stringify(receipt, null, 2) + '\n');
console.log(JSON.stringify({ ...receipt.summary, receipt: identity(diag + '/final-receipt.json'), identities: receipt.identities }, null, 2));
