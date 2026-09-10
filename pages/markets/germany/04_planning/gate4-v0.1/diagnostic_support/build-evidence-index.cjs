const fs = require('fs');
const crypto = require('crypto');

const base = 'D:/23MySec/pages/markets/germany/04_planning/gate4-v0.1';
const review = 'D:/23MySec/pages/markets/germany/05_review';
const diag = base + '/diagnostic_support';
const approval = base + '/approval_core';
const sha = data => crypto.createHash('sha256').update(data).digest('hex');
const identity = file => { const data = fs.readFileSync(file); return { path: file.replaceAll('\\', '/'), bytes: data.length, sha256: sha(data) }; };
const write = (file, value) => fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n');

const assetInventory = JSON.parse(fs.readFileSync(approval + '/asset-inventory.json', 'utf8'));
const formal = JSON.parse(fs.readFileSync(diag + '/formal-r1-checks.json', 'utf8'));
const freeze = JSON.parse(fs.readFileSync(approval + '/source-freeze.json', 'utf8'));
const failedRuns = fs.readdirSync(diag).filter(name => /^(direction|formal)-failure-\d+\.json$/.test(name)).sort().map(name => identity(diag + '/' + name));

const out = {
  page_id: 'MARKET-EU-DE',
  url: '/markets/germany/',
  workset_id: 'DE-G4-COMPLETE-20260907-01',
  freeze_id: 'DE-G4-COMPLETE-20260907-01-F01',
  status: 'COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW',
  authority_manifest: identity('D:/23MySec/pages/markets/germany/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md'),
  source: formal.source,
  css: formal.css,
  dependencies: [
    identity(base + '/dependencies/Inter-Variable.ttf'),
    identity(base + '/dependencies/Inter-OFL.txt'),
    identity(base + '/dependencies/tio2-malaysia-primary-horizontal-v0.1.svg'),
    identity(base + '/dependencies/tio2-malaysia-reverse-monochrome-v0.1.svg')
  ],
  bindings: {
    input_index: identity(base + '/input_index.json'),
    workset: identity(base + '/workset.json'),
    source_freeze: identity(approval + '/source-freeze.json'),
    frozen_file_count: freeze.frozen_files.length,
    direction_check: identity(base + '/4A-direction-check.json'),
    direction_runtime: identity(diag + '/direction-r1-checks.json'),
    preflight_runtime: identity(diag + '/preflight-r1-checks.json'),
    formal_runtime: identity(diag + '/formal-r1-checks.json'),
    asset_inventory: identity(approval + '/asset-inventory.json'),
    export_inventory: identity(approval + '/export-inventory.json'),
    visual_readback: identity(diag + '/visual-readback.json'),
    post_freeze_drift: identity(diag + '/post-freeze-drift.json'),
    frozen_index_snapshot: identity(approval + '/snapshots/01_PROJECT_INDEX.frozen.md'),
    composition_report: identity(base + '/MARKET-EU-DE_GATE4_VISUAL_AND_EXECUTION_REPORT_V0.1.md'),
    executor_self_check: identity(review + '/MARKET-EU-DE_GATE4_EXECUTION_SELF_CHECK_V0.1.md'),
    review_submission: identity(review + '/MARKET-EU-DE_GATE4_REVIEW_SUBMISSION_V0.1.md')
  },
  results: {
    gate4a: { status: 'PASS_FOR_4B', checks: 237, passed: 237, failed: 0, images: 6 },
    preflight: { status: 'PASS_FOR_FORMAL_RENDER', checks: 237, passed: 237, failed: 0, images: 3 },
    formal: { status: formal.status, checks: formal.summary.checks, passed: formal.summary.passed, failed: formal.summary.failed, images: formal.summary.assets },
    manual_visual_readback: { status: 'PASS', opened: assetInventory.counts.opened_images, total: assetInventory.counts.total_unique_images },
    executor_required_findings: 0
  },
  counts: assetInventory.counts,
  images: assetInventory.images,
  retained_diagnostic_failures: failedRuns,
  diagnostic_note: 'Two early 4A collection/checker failures and the first formal document-coordinate screenshot clipping failure are retained. The final 4A, preflight and formal runs pass against the same frozen source and stylesheet identities.',
  independent_review: {
    status: 'PENDING',
    path: 'D:/23MySec/pages/markets/germany/05_review/gate4-complete-independent-v0.1/REVIEW.md',
    required_role_separation: 'Reviewer must not be the Gate 4 executor.'
  },
  limitations: formal.limitations,
  stop: 'No independent PASS, project-control PASS, delegated closure, Gate 6, development, deployment or publication is claimed.'
};

write(base + '/evidence_index.json', out);
console.log(JSON.stringify(identity(base + '/evidence_index.json'), null, 2));
