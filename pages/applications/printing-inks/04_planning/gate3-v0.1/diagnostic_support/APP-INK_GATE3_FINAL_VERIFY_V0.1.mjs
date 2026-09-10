import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = 'D:/23MySec';
const base = `${root}/pages/applications/printing-inks/04_planning/gate3-v0.1`;
const resultPath = `${base}/diagnostic_support/APP-INK_GATE3_FINAL_VERIFICATION_V0.1.json`;
const sha = target => crypto.createHash('sha256').update(fs.readFileSync(target)).digest('hex');
const meta = target => ({ path: target.replaceAll('\\','/'), bytes: fs.statSync(target).size, sha256: sha(target) });
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };

const manifest = `${root}/pages/applications/printing-inks/APP-INK_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md`;
const expectedInputs = {
  A: ['pages/applications/printing-inks/04_planning/APP-INK_GATE2_CONTENT_SKELETON_V0.1.md', 'bbb3a2bbd55d0140c4cfbef2c7e929e5f7f5c47478671b50aeff72f33e5554a6'],
  B: ['pages/applications/printing-inks/04_planning/APP-INK_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md', 'b5a92976f526fcfee74fdf088ec9ea3ef21456e5ba66965f79c50ec4dd5c938d'],
  C: ['pages/applications/printing-inks/04_planning/APP-INK_GATE2_CONTENT_CONTRACT_V0.2.md', '11883e118e017e7886d91a3a6400150fcc92e3972b56847aafecc9250e960dc3']
};
const inputResults = {};
for (const [key, [relative, expected]] of Object.entries(expectedInputs)) {
  const actual = meta(`${root}/${relative}`);
  inputResults[key] = { ...actual, expected, match: actual.sha256 === expected };
  check(actual.sha256 === expected, `${key} input hash mismatch`);
}
check(sha(manifest) === 'e05e8a1f848a147862b7cf20e3a5a0a439f24c802a701ffb59250c12fec75427', 'current Manifest changed');

const freezePath = `${base}/APP-INK_GATE3_FREEZE_RECORD_V0.1.json`;
const freeze = JSON.parse(fs.readFileSync(freezePath, 'utf8'));
const source = meta(freeze.source.path);
check(source.bytes === freeze.source.bytes && source.sha256 === freeze.source.sha256, 'frozen source identity mismatch');
check(freeze.formalExportsExistedAtFreeze === false, 'formal evidence existed at freeze');
const preflight = JSON.parse(fs.readFileSync(`${base}/APP-INK_GATE3_PREFLIGHT_RECORD_V0.1.json`, 'utf8'));
check(preflight.status === 'PASS_FOR_FORMAL_RENDER' && preflight.formalExportsGenerated === false, 'preflight status/sequence invalid');
check(Object.values(preflight.checks).every(value => value === 'PASS'), 'preflight contains non-PASS check');

const observationsPath = `${base}/approval_core/APP-INK_GATE3_FORMAL_OBSERVATIONS_V0.1.json`;
const observations = JSON.parse(fs.readFileSync(observationsPath, 'utf8'));
check(observations.pass === true, 'formal observations did not pass');
check(Object.values(observations.risks).every(Boolean), 'formal risk check failed');
check(Object.values(observations.interactionPass).every(Boolean), 'formal interaction check failed');
for (const width of ['1440','768','390']) {
  const view = observations.viewports[width];
  check(view.modules === 11 && view.h1 === 1 && view.h2 === 10, `${width} module/heading mismatch`);
  check(view.contentExactNormalized && view.documentRows === 4 && view.gradeRows === 4 && view.requestCards === 3 && view.sourceRows === 6 && view.externalSourceLinks === 6, `${width} content/cardinality mismatch`);
  check(view.scrollWidth === view.clientWidth && view.under44.length === 0 && !view.internalGovernanceLeak, `${width} geometry/accessibility/governance failure`);
}

const inventoryPath = `${base}/APP-INK_GATE3_ASSET_INVENTORY_V0.1.json`;
const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
check(inventory.status === 'DRAFT_FOR_PROJECT_CONTROL_REVIEW', 'inventory status invalid');
check(inventory.formalEvidenceCount === 6 && inventory.formalAssets.length === 6, 'formal evidence count is not six');
for (const item of [...inventory.formalAssets, ...inventory.records]) {
  check(fs.existsSync(item.path), `missing inventory item: ${item.path}`);
  if (fs.existsSync(item.path)) check(meta(item.path).bytes === item.bytes && sha(item.path) === item.sha256, `inventory identity mismatch: ${item.path}`);
}
check(inventory.unresolvedFindings.length === 0, 'inventory has unresolved Findings');

const reviewFiles = [
  `${root}/pages/applications/printing-inks/05_review/APP-INK_GATE3_EXECUTION_SELF_CHECK_V0.1.md`,
  `${root}/pages/applications/printing-inks/05_review/APP-INK_GATE3_TO_GATE4_HANDOFF_DRAFT_V0.1.md`
];
check(fs.readFileSync(reviewFiles[0], 'utf8').includes('NOT_INDEPENDENT_REVIEW'), 'self-check boundary missing');
check(fs.readFileSync(reviewFiles[1], 'utf8').includes('NOT_READY_FOR_GATE4'), 'handoff draft boundary missing');

const walk = directory => fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
  const target = path.join(directory, entry.name);
  return entry.isDirectory() ? walk(target) : [target];
});
const allTargets = [...walk(base), ...reviewFiles].filter(target => target.replaceAll('\\','/') !== resultPath);
check(allTargets.every(target => target.replaceAll('\\','/').startsWith(`${root}/pages/applications/printing-inks/`)), 'output escaped APP-INK directory');
const result = {
  status: failures.length ? 'FAIL' : 'PASS',
  verifiedAt: new Date().toISOString(),
  pageId: 'APP-INK',
  failures,
  inputResults,
  frozenSource: source,
  freezeRecord: meta(freezePath),
  preflightRecord: meta(`${base}/APP-INK_GATE3_PREFLIGHT_RECORD_V0.1.json`),
  formalObservations: meta(observationsPath),
  assetInventory: meta(inventoryPath),
  formalEvidenceCount: inventory.formalAssets.length,
  formalEvidence: inventory.formalAssets,
  allCreatedOrModifiedFilesExceptThisReport: allTargets.sort().map(meta),
  unresolvedFindings: inventory.unresolvedFindings
};
fs.writeFileSync(resultPath, `${JSON.stringify(result, null, 2)}\n`);
console.log(JSON.stringify({ status: result.status, failures, filesCount: result.allCreatedOrModifiedFilesExceptThisReport.length, result: meta(resultPath) }, null, 2));
process.exit(failures.length ? 1 : 0);
