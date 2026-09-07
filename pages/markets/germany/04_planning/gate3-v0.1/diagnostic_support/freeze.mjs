import fs from 'node:fs';
import crypto from 'node:crypto';

const root = 'D:/23MySec';
const out = `${root}/pages/markets/germany/04_planning/gate3-v0.1`;
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const item = (file, role) => ({ ...(role ? { role } : {}), path: file, bytes: fs.statSync(file).size, sha256: hash(file) });
const preflight = JSON.parse(fs.readFileSync(`${out}/preflight-record.json`, 'utf8'));
if (preflight.status !== 'PASS_FOR_FORMAL_RENDER') throw new Error('Preflight is not passed');
const source = item(`${out}/MARKET-EU-DE_GATE3_WIREFRAME_V0.1.html`);
if (source.sha256 !== preflight.candidate.sha256) throw new Error('Candidate changed after preflight');
if (fs.readdirSync(`${out}/approval_core`).length !== 0) throw new Error('Formal exports exist before freeze');
const freeze = {
  status: 'FROZEN_FOR_FORMAL_RENDER',
  pageId: 'MARKET-EU-DE',
  frozenAt: new Date().toISOString(),
  source,
  inputBinding: item(`${out}/input-binding.json`),
  approvedInputs: preflight.approvedInputs,
  sharedConsumer: preflight.sharedConsumer,
  sharedManifest: preflight.sharedManifest,
  sharedFiles: preflight.sharedFiles,
  dependencies: preflight.dependencies,
  preflight: item(`${out}/preflight-record.json`),
  checker: item(`${out}/diagnostic_support/preflight-checker-result.json`),
  formalExportsExistedAtFreeze: false,
  submissionStatus: 'DRAFT_FOR_PROJECT_CONTROL_REVIEW'
};
fs.writeFileSync(`${out}/freeze-record.json`, JSON.stringify(freeze, null, 2));
console.log(JSON.stringify(freeze, null, 2));
