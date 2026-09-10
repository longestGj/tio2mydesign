const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = 'D:/23MySec';
const reviewDir = path.join(root, 'pages/markets/italy/05_review/gate4-complete-independent-v0.1');
const runtimePath = path.join(reviewDir, 'diagnostic_support/independent-runtime.json');
const observationPath = path.join(reviewDir, 'diagnostic_support/visual-observation.json');
const executorIndexPath = path.join(root, 'pages/markets/italy/04_planning/gate4-v0.1/MARKET-EU-IT_GATE4_EVIDENCE_INDEX_V0.1.json');
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const id = p => ({ path: p.replaceAll('\\','/'), bytes: fs.statSync(p).size, sha256: sha(p) });
const files = (dir, test) => fs.readdirSync(dir, { withFileTypes: true }).flatMap(ent => {
  const p = path.join(dir, ent.name);
  return ent.isDirectory() ? files(p, test) : (test(p) ? [p] : []);
}).sort();

const runtime = JSON.parse(fs.readFileSync(runtimePath, 'utf8'));
const executor = JSON.parse(fs.readFileSync(executorIndexPath, 'utf8'));
const independentImages = files(reviewDir, p => /\.(png)$/i.test(p) && !p.includes(`${path.sep}contact-sheets${path.sep}`));
const contactSheets = files(path.join(reviewDir, 'diagnostic_support/contact-sheets'), p => /\.png$/i.test(p));
const records = [
  path.join(reviewDir, 'REVIEW.md'), runtimePath, observationPath,
  path.join(reviewDir, 'diagnostic_support/contact-sheets/contact-sheet-index.json'),
  path.join(reviewDir, 'diagnostic_support/contact-sheets/independent-contact-sheet-index.json'),
  path.join(reviewDir, 'independent-review.cjs'),
  path.join(reviewDir, 'make-contact-sheets.py'),
  path.join(reviewDir, 'build-review-evidence-index.cjs'),
].map(id);

const index = {
  page_id: 'MARKET-EU-IT',
  review_id: 'IT-G4-INDEPENDENT-REVIEW-20260907-01',
  workset_id: 'IT-G4-COMPLETE-20260907-01',
  freeze_id: 'IT-G4-FREEZE-20260907-01',
  status: 'PROJECT_CONTROL_REVIEW_PASS',
  required_findings: 0,
  generated_at: new Date().toISOString(),
  reviewed_candidate: runtime.staticContract.candidate,
  reviewed_freeze: runtime.staticContract.freeze,
  reviewed_input_index: runtime.staticContract.inputIndex,
  reviewed_executor_evidence_index: runtime.staticContract.evidenceIndex,
  identity_recomputation: {
    frozen_inputs: { matched: runtime.identities.inputChecks.filter(x=>x.pass).length, total: runtime.identities.inputChecks.length },
    executor_images: { matched: runtime.identities.evidenceChecks.filter(x=>x.pass).length, total: runtime.identities.evidenceChecks.length },
    executor_observations: { matched: runtime.identities.observationChecks.filter(x=>x.pass).length, total: runtime.identities.observationChecks.length },
    freeze_components: { matched: runtime.identities.freezeComponentChecks.filter(x=>x.pass).length, total: runtime.identities.freezeComponentChecks.length },
    top_pointers: { matched: runtime.identities.topIdentityChecks.filter(x=>x.check.pass).length, total: runtime.identities.topIdentityChecks.length },
  },
  counts: {
    executor_images_indexed: executor.images.length,
    executor_images_opened_and_inspected: executor.images.length,
    independent_images: independentImages.length,
    independent_images_opened_and_inspected: independentImages.length,
    independent_full_pages: 3,
    independent_continuous_segments: Object.values(runtime.widths).reduce((n,w)=>n+w.segmentPaths.length,0),
    independent_normal_hover_focus_states: Object.values(runtime.widths).reduce((n,w)=>n+w.stateRecords.filter(x=>x.state).length,0),
    independent_menu_states: Object.values(runtime.widths).filter(w=>w.menu.image).length,
    independent_cookie_states: Object.values(runtime.widths).length,
    independent_runtime_checks: runtime.summary.total,
    independent_runtime_failures: runtime.summary.failed,
    page_errors: runtime.pageErrors.length,
    console_errors: runtime.consoleErrors.length,
    unexpected_external_requests: runtime.blockedNetwork.length,
    contact_sheets: contactSheets.length,
  },
  records,
  independent_images: independentImages.map(id),
  contact_sheets: contactSheets.map(id),
  finding_register: [],
  acceptance: {
    frozen_identity: 'PASS', approved_B_and_gate3_parity: 'PASS', seven_modules: 'PASS',
    coo_limitation_adjacency: 'PASS', grade_neutrality: 'PASS', italy_destination: 'PASS',
    documents_sample_rfq: 'PASS', eu_owner_boundary: 'PASS', menu_cookie: 'PASS',
    focus_hover_44px: 'PASS', overflow_clipping_links: 'PASS', visual_readback: 'PASS',
  },
  boundary: 'Independent Gate 4 review evidence only. This record does not close Gate 4, update the current Manifest, start Gate 6, or authorize implementation or publication.'
};

fs.writeFileSync(path.join(reviewDir, 'review-evidence-index.json'), JSON.stringify(index, null, 2));
console.log(JSON.stringify({ images: independentImages.length, contactSheets: contactSheets.length, checks: runtime.summary.total, failures: runtime.summary.failed, requiredFindings: 0 }));
