const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const norm = p => p.replace(/\\/g, '/');
const hash = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const id = p => ({ path: norm(path.resolve(p)), relativePath: norm(path.relative(root, path.resolve(p))), bytes: fs.statSync(p).size, sha256: hash(p) });
const freezePath = path.join(root, 'approval_core', 'source-freeze.json');
const runtimePath = path.join(root, 'approval_core', 'runtime.json');
const freeze = JSON.parse(fs.readFileSync(freezePath, 'utf8'));
const runtime = JSON.parse(fs.readFileSync(runtimePath, 'utf8'));

const sourceDrift = freeze.sourceIdentity.filter(x => !fs.existsSync(x.path) || fs.statSync(x.path).size !== x.bytes || hash(x.path) !== x.sha256);
if (sourceDrift.length) throw new Error(`Frozen source drift: ${JSON.stringify(sourceDrift)}`);
const inputDrift = freeze.inputIdentity.filter(x => !fs.existsSync(x.path) || fs.statSync(x.path).size !== x.bytes || hash(x.path) !== x.sha256);
if (inputDrift.length) throw new Error(`Frozen input drift: ${JSON.stringify(inputDrift)}`);
if (runtime.summary.failed !== 0 || runtime.captures.length !== 18) throw new Error(`Unexpected runtime result ${JSON.stringify(runtime.summary)} captures=${runtime.captures.length}`);

const captures = runtime.captures.map(x => {
  const actual = id(x.path);
  if (actual.bytes !== x.bytes || actual.sha256 !== x.sha256) throw new Error(`Capture drift ${x.path}`);
  return { ...x, sourceFreeze: freeze.freezeId, sourceCombinationSha256: freeze.sourceCombinationSha256 };
});
const exportInventory = {
  pageId: 'PRODUCT-PROC-CL',
  status: 'DRAFT_FOR_PROJECT_CONTROL_REVIEW',
  freezeId: freeze.freezeId,
  sourceFreezeSha256: hash(freezePath),
  sourceCombinationSha256: freeze.sourceCombinationSha256,
  runtime: id(runtimePath),
  captures,
};
fs.writeFileSync(path.join(root, 'approval_core', 'export-inventory.json'), JSON.stringify(exportInventory, null, 2));

const readableDir = path.join(root, 'diagnostic_support', 'readable-segments');
const readable = fs.readdirSync(readableDir).filter(x => x.endsWith('.png')).sort().map(x => id(path.join(readableDir, x)));
if (readable.length !== 19) throw new Error(`Expected 19 readable segments, found ${readable.length}`);
const readableInventory = { sourceFreeze: freeze.freezeId, sourceFullPageFiles: captures.filter(x => x.state === 'default-full').map(x => x.relativePath), segmentCount: readable.length, segments: readable };
fs.writeFileSync(path.join(readableDir, 'inventory.json'), JSON.stringify(readableInventory, null, 2));

const reports = [
  path.join(root, 'PRODUCT-PROC-CL_GATE5_FULL_VISUAL_SPECIFICATION_V0.1.md'),
  'D:/23MySec/pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE5_EXECUTION_SELF_CHECK_V0.1.md',
  'D:/23MySec/pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE5_TO_GATE6_HANDOFF_V0.1.md',
  'D:/23MySec/pages/products/chloride-process/PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.21.md',
].filter(fs.existsSync).map(id);

const assetInventory = {
  pageId: 'PRODUCT-PROC-CL',
  url: '/products/chloride-process-titanium-dioxide/',
  status: 'DRAFT_FOR_PROJECT_CONTROL_REVIEW',
  freezeId: freeze.freezeId,
  sourceCombinationSha256: freeze.sourceCombinationSha256,
  sourceFreeze: id(freezePath),
  source: freeze.sourceIdentity,
  approvedInputsAndSharedOwners: freeze.inputIdentity,
  formalRuntime: id(runtimePath),
  formalExportInventory: id(path.join(root, 'approval_core', 'export-inventory.json')),
  formalCaptures: captures,
  diagnosticSupport: {
    preflightRuntime: id(path.join(root, 'diagnostic_support', 'preflight', 'runtime.json')),
    readableInventory: id(path.join(readableDir, 'inventory.json')),
    visualReadback: id(path.join(root, 'diagnostic_support', 'visual-readback.md')),
    failureHistory: id(path.join(root, 'diagnostic_support', 'failure-and-repair-history.md')),
    renderer: id(path.join(root, 'diagnostic_support', 'verify-render.cjs')),
  },
  reports,
  authorityBoundary: {
    gate5Candidate: 'DRAFT_FOR_PROJECT_CONTROL_REVIEW',
    gate5UserApproval: 'NOT_YET_REQUESTED',
    actualGate6Authorization: 'NOT_AUTHORIZED',
    gate7DevelopmentDeploymentPublicationIndexing: 'NOT_AUTHORIZED',
  },
};
fs.writeFileSync(path.join(root, 'asset-inventory.json'), JSON.stringify(assetInventory, null, 2));
console.log(JSON.stringify({ freezeId: freeze.freezeId, sourceCombinationSha256: freeze.sourceCombinationSha256, formalCaptures: captures.length, readableSegments: readable.length, reports: reports.length, assetInventory: norm(path.join(root, 'asset-inventory.json')) }, null, 2));
