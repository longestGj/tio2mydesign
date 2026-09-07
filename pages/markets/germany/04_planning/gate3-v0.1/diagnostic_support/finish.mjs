import fs from 'node:fs';
import crypto from 'node:crypto';

const root = 'D:/23MySec';
const out = `${root}/pages/markets/germany/04_planning/gate3-v0.1`;
const review = `${root}/pages/markets/germany/05_review`;
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const item = (file, extra = {}) => ({ path: file, bytes: fs.statSync(file).size, sha256: hash(file), ...extra });
const png = (file, state, logicalWidth) => {
  const data = fs.readFileSync(file);
  return item(file, { width: data.readUInt32BE(16), height: data.readUInt32BE(20), logicalWidth, dpr: 1, state });
};
const freeze = JSON.parse(fs.readFileSync(`${out}/freeze-record.json`, 'utf8'));
const source = item(`${out}/MARKET-EU-DE_GATE3_WIREFRAME_V0.1.html`);
if (source.sha256 !== freeze.source.sha256) throw new Error('Frozen source changed');
const images = [
  png(`${out}/approval_core/MARKET-EU-DE_G3_1440-full.png`, 'default-full', 1440),
  png(`${out}/approval_core/MARKET-EU-DE_G3_768-full.png`, 'default-full', 768),
  png(`${out}/approval_core/MARKET-EU-DE_G3_768-menu.png`, 'menu-open', 768),
  png(`${out}/approval_core/MARKET-EU-DE_G3_390-full.png`, 'default-full', 390),
  png(`${out}/approval_core/MARKET-EU-DE_G3_390-menu.png`, 'menu-open', 390)
];
const formalRuntime = JSON.parse(fs.readFileSync(`${out}/diagnostic_support/formal-runtime.json`, 'utf8'));
if (formalRuntime.status !== 'PASS' || formalRuntime.source.sha256 !== source.sha256 || formalRuntime.checks.some(check => check.status !== 'PASS')) throw new Error('Formal runtime failed or is mismatched');

const observation = {
  status: 'PASS',
  pageId: 'MARKET-EU-DE',
  evidenceType: 'STATIC_VISUAL',
  source,
  inspectedFormalAssets: images,
  openedAtReadableScale: [
    `${out}/diagnostic_support/render/390-segment-00.png`,
    `${out}/diagnostic_support/render/390-segment-04.png`,
    `${out}/diagnostic_support/render/390-segment-08.png`,
    `${out}/diagnostic_support/render/768-segment-04.png`
  ].map(file => item(file)),
  observations: [
    'The 1440 full page preserves the three application records as peers, keeps destination prose beside the checklist and closes cleanly into the shared Footer.',
    'The 768 full page is a deliberate stacked Tablet structure with complete sections and no collision or clipped long label.',
    'The 390 full page preserves the approved order and complete long text, source list, final request and Footer in one column.',
    'Both 768 and 390 formal menu images show Markets current, the terminal RFQ action and clear access to Close while the page remains isolated.',
    'No Buyer Clean placeholder, governance label, invented state, Germany facility implication or visual claim of a local route appears.'
  ],
  unresolvedFindings: [],
  inspectedAt: new Date().toISOString()
};
fs.writeFileSync(`${out}/diagnostic_support/formal-visual-observation.json`, JSON.stringify(observation, null, 2));

const inventory = {
  status: 'DRAFT_FOR_PROJECT_CONTROL_REVIEW',
  pageId: 'MARKET-EU-DE',
  source,
  freeze: item(`${out}/freeze-record.json`),
  preflight: item(`${out}/preflight-record.json`),
  inputBinding: item(`${out}/input-binding.json`),
  sharedConsumer: freeze.sharedConsumer,
  dependencies: freeze.dependencies,
  approval_core: {
    images,
    reports: [
      item(`${out}/task-input-card.md`),
      item(`${out}/design-report.md`),
      item(`${review}/MARKET-EU-DE_GATE3_EXECUTION_SELF_CHECK_V0.1.md`)
    ]
  },
  diagnostic_support: {
    directory: `${out}/diagnostic_support`,
    preflightRuntime: item(`${out}/diagnostic_support/runtime.json`),
    formalRuntime: item(`${out}/diagnostic_support/formal-runtime.json`),
    preflightVisualObservation: item(`${out}/diagnostic_support/visual-observation.json`),
    formalVisualObservation: item(`${out}/diagnostic_support/formal-visual-observation.json`),
    formal768MenuCapture: item(`${out}/diagnostic_support/formal-768-menu-capture.json`),
    failureHistory: fs.readdirSync(`${out}/diagnostic_support`).filter(name => /^failure-.*\.json$/.test(name)).map(name => item(`${out}/diagnostic_support/${name}`))
  },
  unresolvedFindings: [],
  createdAt: new Date().toISOString()
};
fs.writeFileSync(`${out}/asset-inventory.json`, JSON.stringify(inventory, null, 2));
console.log(JSON.stringify({ status: inventory.status, source, formalAssets: images.length, inventory: item(`${out}/asset-inventory.json`), formalObservation: item(`${out}/diagnostic_support/formal-visual-observation.json`) }, null, 2));
