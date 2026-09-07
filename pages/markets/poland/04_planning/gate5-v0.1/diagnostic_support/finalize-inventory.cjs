const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const pageRoot = path.resolve(root, '../..');
const hash = (file) => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const identity = (file, role) => ({
  path: file.replaceAll('\\', '/'),
  relativePath: path.relative(root, file).replaceAll('\\', '/'),
  role,
  bytes: fs.statSync(file).size,
  sha256: hash(file)
});

const sourceFiles = [
  'source/MARKET-EU-PL_GATE5_FULL_VISUAL_V0.1.html',
  'source/visual-rules.css',
  'source/dependencies/shared-chrome-style.snapshot.css',
  'source/dependencies/Inter-Variable.ttf'
].map((relative) => identity(path.join(root, relative), 'EDITABLE_SOURCE_OR_DURABLE_DEPENDENCY'));

const formalCore = fs.readdirSync(path.join(root, 'approval_core'))
  .filter((name) => name.endsWith('.png') || name.endsWith('.json'))
  .sort()
  .map((name) => identity(path.join(root, 'approval_core', name), 'APPROVAL_CORE'));

const reports = [
  identity(path.join(root, 'MARKET-EU-PL_GATE5_FULL_VISUAL_SPECIFICATION_V0.1.md'), 'FINAL_VISUAL_SPECIFICATION'),
  identity(path.join(pageRoot, '05_review/MARKET-EU-PL_GATE5_EXECUTION_SELF_CHECK_V0.1.md'), 'EXECUTION_SELF_CHECK'),
  identity(path.join(pageRoot, '05_review/MARKET-EU-PL_GATE5_TO_GATE6_HANDOFF_V0.1.md'), 'GATE5_TO_GATE6_DRAFT'),
  identity(path.join(pageRoot, 'MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.18.md'), 'CANDIDATE_NEXT_MANIFEST')
];

const diagnosticNames = [
  'verify-and-render.cjs',
  'make-readable-segments.cjs',
  'finalize-inventory.cjs',
  'preflight-observations.json',
  'runtime-observations.json',
  'visual-observations.json',
  'readable-segments/segment-inventory.json',
  ...fs.readdirSync(path.join(root, 'diagnostic_support')).filter((name) => name.startsWith('failure-') && name.endsWith('.json'))
].map((relative) => identity(path.join(root, 'diagnostic_support', relative), 'DIAGNOSTIC_SUPPORT_ENTRY'));

const freeze = JSON.parse(fs.readFileSync(path.join(root, 'approval_core/source-freeze.json'), 'utf8'));
const exportsRecord = JSON.parse(fs.readFileSync(path.join(root, 'approval_core/export-inventory.json'), 'utf8'));
const inventory = {
  page: { id: 'MARKET-EU-PL', url: '/markets/poland/', language: 'en', siteScope: 'tio2-my' },
  status: 'DRAFT_FOR_PROJECT_CONTROL_REVIEW',
  freezeId: freeze.freezeId,
  combinedSha256: freeze.combinedSha256,
  formalPngCount: exportsRecord.captures.length,
  approvalCore: [...sourceFiles, ...formalCore, ...reports],
  diagnosticSupport: diagnosticNames,
  notes: [
    'This inventory does not hash itself.',
    'Readable segment PNGs are controlled by their segment inventory and remain diagnostic support.',
    'Independent project-control evidence will be written by root and is not claimed here.'
  ]
};

fs.writeFileSync(path.join(root, 'asset-inventory.json'), JSON.stringify(inventory, null, 2));
console.log(JSON.stringify({ freezeId: inventory.freezeId, formalPngCount: inventory.formalPngCount, approvalCoreRecords: inventory.approvalCore.length, diagnosticEntries: inventory.diagnosticSupport.length, output: path.join(root, 'asset-inventory.json') }, null, 2));
