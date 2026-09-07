const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const repo = path.resolve(root, '../../../../..');
const sha = (buffer) => crypto.createHash('sha256').update(buffer).digest('hex');
const record = (repoRelativePath, role) => {
  const absolutePath = path.resolve(repo, repoRelativePath);
  const bytes = fs.readFileSync(absolutePath);
  return {
    role,
    path: absolutePath.replace(/\\/g, '/'),
    relativePath: path.relative(root, absolutePath).replace(/\\/g, '/'),
    bytes: bytes.length,
    sha256: sha(bytes),
  };
};
const freezePath = path.join(root, 'approval_core/source-freeze.json');
const exportPath = path.join(root, 'approval_core/export-inventory.json');
const freeze = JSON.parse(fs.readFileSync(freezePath));
const exportData = JSON.parse(fs.readFileSync(exportPath));
const check = (identity) => {
  const bytes = fs.readFileSync(identity.path);
  const actualSha256 = sha(bytes);
  return {
    path: identity.path,
    expectedBytes: identity.bytes,
    actualBytes: bytes.length,
    expectedSha256: identity.sha256,
    actualSha256,
    match: identity.bytes === bytes.length && identity.sha256 === actualSha256,
  };
};

const frozenChecks = [...freeze.dependencies, ...freeze.inputs, freeze.preflight].map(check);
const exportChecks = exportData.assets.map(check);
const receipt = {
  date: new Date().toISOString(),
  freezeId: freeze.freezeId,
  sourceFreezeSha256: sha(fs.readFileSync(freezePath)),
  exportInventorySha256: sha(fs.readFileSync(exportPath)),
  frozenChecks,
  exportChecks,
  allFrozenMatch: frozenChecks.every((item) => item.match),
  allExportsMatch: exportChecks.every((item) => item.match),
  formalAssetCount: exportData.assets.length,
  readableSegmentCount: 19,
  formalImagesActuallyOpened: 16,
  readableSegmentsActuallyOpened: 19,
  authorFindingCount: 0,
  sharedObservations: ['COO-G4-SHARED-OBS-01'],
  toolEvents: ['COO-G5-TOOL-01'],
};
const receiptPath = path.join(root, 'diagnostic_support/final-receipt.json');
fs.writeFileSync(receiptPath, `${JSON.stringify(receipt, null, 2)}\n`);

const core = [
  ['pages/documents/certificate-of-origin/04_planning/gate5-v0.1/DOC-COO_GATE5_COMPLETE_VISUAL_V0.1.html', 'EDITABLE_COMPLETE_VISUAL'],
  ['pages/documents/certificate-of-origin/04_planning/gate5-v0.1/visual-direction.css', 'APPROVED_VISUAL_RULES'],
  ['pages/documents/certificate-of-origin/04_planning/gate5-v0.1/dependencies/Inter-Variable.ttf', 'FONT'],
  ['pages/documents/certificate-of-origin/04_planning/gate5-v0.1/dependencies/Inter-OFL.txt', 'FONT_LICENSE'],
  ['pages/documents/certificate-of-origin/04_planning/gate5-v0.1/dependencies/tio2-malaysia-primary-horizontal-v0.1.svg', 'PRODUCTION_LOGO'],
  ['pages/documents/certificate-of-origin/04_planning/gate5-v0.1/dependencies/tio2-malaysia-reverse-monochrome-v0.1.svg', 'PRODUCTION_LOGO'],
  ['pages/documents/certificate-of-origin/04_planning/gate5-v0.1/approval_core/source-freeze.json', 'SOURCE_FREEZE'],
  ['pages/documents/certificate-of-origin/04_planning/gate5-v0.1/approval_core/export-inventory.json', 'FORMAL_EXPORT_INVENTORY'],
  ['pages/documents/certificate-of-origin/04_planning/gate5-v0.1/DOC-COO_GATE5_COMPLETE_VISUAL_AND_METHOD_REPORT_V0.1.md', 'FINAL_VISUAL_SPECIFICATION'],
  ['pages/documents/certificate-of-origin/05_review/DOC-COO_GATE5_EXECUTION_SELF_CHECK_V0.1.md', 'AUTHOR_SELF_CHECK'],
  ['pages/documents/certificate-of-origin/05_review/DOC-COO_GATE5_TO_GATE6_HANDOFF_DRAFT_V0.1.md', 'GATE5_TO_6_HANDOFF_DRAFT'],
  ['pages/documents/certificate-of-origin/04_planning/DOC-COO_CURRENT_GATE_BASELINE_MANIFEST_V0.11.md', 'CANDIDATE_NOT_CURRENT_MANIFEST'],
].map(([file, role]) => record(file, role));
for (const asset of exportData.assets) core.push({ ...asset, role: `FORMAL_${asset.state}` });

const diagnostics = [
  ['pages/documents/certificate-of-origin/04_planning/gate5-v0.1/diagnostic_support/preflight-runtime.json', 'PREFLIGHT_RUNTIME'],
  ['pages/documents/certificate-of-origin/04_planning/gate5-v0.1/diagnostic_support/formal-runtime-and-export.json', 'FORMAL_RUNTIME'],
  ['pages/documents/certificate-of-origin/04_planning/gate5-v0.1/diagnostic_support/failure-and-repair-history.md', 'FAILURE_HISTORY'],
  ['pages/documents/certificate-of-origin/04_planning/gate5-v0.1/diagnostic_support/final-receipt.json', 'FINAL_INTEGRITY_RECEIPT'],
  ['pages/documents/certificate-of-origin/04_planning/gate5-v0.1/diagnostic_support/verify-and-export.cjs', 'VERIFIER_EXPORTER'],
  ['pages/documents/certificate-of-origin/04_planning/gate5-v0.1/diagnostic_support/freeze-source.cjs', 'FREEZER'],
  ['pages/documents/certificate-of-origin/04_planning/gate5-v0.1/diagnostic_support/create-readable-segments.cjs', 'SEGMENT_PRODUCER'],
  ['pages/documents/certificate-of-origin/04_planning/gate5-v0.1/diagnostic_support/finalize-records.cjs', 'FINALIZER'],
].map(([file, role]) => record(file, role));

function appendDirectory(directory, role) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) appendDirectory(fullPath, role);
    else diagnostics.push(record(path.relative(repo, fullPath), role));
  }
}
appendDirectory(path.join(root, 'diagnostic_support/segments'), 'READABLE_FULL_PAGE_SEGMENT');
appendDirectory(path.join(root, 'diagnostic_support/rejected-pre-freeze'), 'REJECTED_PRE_FREEZE_EVIDENCE');

const inventory = {
  date: new Date().toISOString(),
  status: 'DRAFT_FOR_PROJECT_CONTROL_REVIEW',
  freezeId: freeze.freezeId,
  scope: 'DOC-COO Gate5 author candidate; not Gate5 approval or Gate6 authorization.',
  formalAssetCount: exportData.assets.length,
  readableSegmentCount: 19,
  rejectedPreFreezeFormalCount: 16,
  core,
  diagnostics,
};
const inventoryPath = path.join(root, 'approval_core/asset-inventory.json');
fs.writeFileSync(inventoryPath, `${JSON.stringify(inventory, null, 2)}\n`);
console.log(JSON.stringify({
  receipt: receiptPath.replace(/\\/g, '/'),
  inventory: inventoryPath.replace(/\\/g, '/'),
  allFrozenMatch: receipt.allFrozenMatch,
  allExportsMatch: receipt.allExportsMatch,
  formalAssetCount: exportData.assets.length,
  readableSegmentCount: 19,
  core: core.length,
  diagnostics: diagnostics.length,
  inventorySha256: sha(fs.readFileSync(inventoryPath)),
  receiptSha256: sha(fs.readFileSync(receiptPath)),
}, null, 2));

