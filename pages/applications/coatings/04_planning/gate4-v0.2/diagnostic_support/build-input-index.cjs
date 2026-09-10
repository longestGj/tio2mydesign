const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = 'D:/23MySec';
const oldDir = path.join(root, 'pages/applications/coatings/04_planning/gate4-v0.1');
const newDir = path.join(root, 'pages/applications/coatings/04_planning/gate4-v0.2');
const old = JSON.parse(fs.readFileSync(path.join(oldDir, 'input_index.json'), 'utf8'));
const additions = [
  path.join(oldDir, 'workset.json'),
  path.join(oldDir, 'approval_core/source-freeze.json'),
  path.join(oldDir, 'evidence_index.json'),
  path.join(oldDir, '4A-direction-check.json'),
  path.join(oldDir, 'APP-COAT_GATE4_VISUAL_AND_EXECUTION_REPORT_V0.1.md'),
  path.join(root, 'pages/applications/coatings/05_review/APP-COAT_GATE4_EXECUTION_SELF_CHECK_V0.1.md'),
  path.join(root, 'pages/applications/coatings/05_review/APP-COAT_GATE4_INDEPENDENT_REVIEW_ENTRY_V0.1.md'),
  path.join(root, 'pages/applications/coatings/05_review/gate4-complete-independent-v0.1/REVIEW.md'),
  path.join(root, 'pages/applications/coatings/APP-COAT_CURRENT_GATE_BASELINE_MANIFEST_V0.7_DRAFT.md'),
];
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const identity = p => ({ path: p.replaceAll('\\','/'), bytes: fs.statSync(p).size, sha256: sha(p) });
const unique = [...new Set([...old.inputs.map(x=>x.path), ...additions].map(p=>p.replaceAll('\\','/')))].sort();
const oldByPath = new Map(old.inputs.map(x=>[x.path, x]));
const inputs = unique.map(identity);
const driftFromV01 = inputs.filter(x => oldByPath.has(x.path) && (oldByPath.get(x.path).bytes !== x.bytes || oldByPath.get(x.path).sha256 !== x.sha256)).map(x=>({ path:x.path, v01:oldByPath.get(x.path), current:x }));
const out = {
  page_id: 'APP-COAT',
  workset_id: 'COAT-G4-COMPLETE-V02',
  status: 'INPUTS_BOUND_FOR_DIRECTED_RECORD_CORRECTION',
  generated_at: new Date().toISOString(),
  count: inputs.length,
  inherited_v01_input_paths: old.inputs.length,
  added_remediation_inputs: additions.length,
  drift_from_v01_input_snapshot: driftFromV01,
  inputs,
  note: 'Current identities are frozen for the V0.2 record-only remediation. V0.1 remains unchanged historical evidence.'
};
fs.writeFileSync(path.join(newDir, 'input_index.json'), JSON.stringify(out, null, 2));
console.log(JSON.stringify({ count: inputs.length, drift: driftFromV01.length, driftPaths: driftFromV01.map(x=>x.path) }));
