const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const dir = __dirname;
const read = (name) => JSON.parse(fs.readFileSync(path.join(dir, name), 'utf8'));
const sha256 = (file) => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const identity = (file) => ({
  path: path.resolve(file).replaceAll('\\', '/'),
  bytes: fs.statSync(file).size,
  sha256: sha256(file)
});

const preflight = read('preflight.json');
const formal = read('formal-render.json');
const inputs = read('input-identities.json');
const source = path.join(dir, 'application-planning.html');

if (preflight.status !== 'PASS_FOR_FORMAL_RENDER') throw new Error('Preflight does not authorize formal freeze');
if (identity(source).sha256 !== preflight.candidate.sha256) throw new Error('Source drift after preflight');
if (identity(path.join(dir, 'runtime-observations.json')).sha256 !== preflight.runtime.sha256) throw new Error('Runtime record drift after preflight');
for (const item of inputs.inputs) {
  const actual = identity(path.resolve(dir, '../../../../', item.path));
  if (actual.sha256 !== item.sha256 || actual.bytes !== item.bytes) throw new Error(`Approved input drift: ${item.path}`);
}
for (const capture of formal.captures) {
  const actual = identity(capture.path);
  if (actual.sha256 !== capture.sha256 || actual.bytes !== capture.bytes) throw new Error(`Formal capture drift: ${capture.path}`);
}

const dependencyNames = [
  'application-planning.html',
  'planning.css',
  'planning.js',
  'build.cjs',
  'verify.cjs',
  'regression.cjs',
  'freeze-render.cjs',
  'finalize.cjs',
  'content-extraction.json',
  'input-identities.json',
  'runtime-observations.json',
  'preflight.json',
  'formal-render.json'
];
const dependencies = dependencyNames.map((name) => ({ role: name, ...identity(path.join(dir, name)) }));
const assets = formal.captures.map((capture) => ({
  role: 'approval_core',
  state: capture.state,
  path: capture.path,
  bytes: capture.bytes,
  sha256: capture.sha256,
  physical_width: capture.physical_width,
  physical_height: capture.physical_height,
  logical_width: capture.logical_width,
  dpr: capture.dpr
}));
const assetIndex = {
  workset_id: 'APP-000-D32-G3-V0.2',
  source: identity(source),
  dependencies,
  approval_core: assets,
  capture_check_required: true,
  note: 'Formal assets are Gate 3 planning evidence, not D32 implementation or route-readiness evidence.'
};
fs.writeFileSync(path.join(dir, 'asset-index.json'), JSON.stringify(assetIndex, null, 2));

const members = [
  identity(source),
  identity(path.join(dir, 'input-identities.json')),
  identity(path.join(dir, 'content-extraction.json')),
  identity(path.join(dir, 'runtime-observations.json')),
  identity(path.join(dir, 'preflight.json')),
  identity(path.join(dir, 'formal-render.json')),
  identity(path.join(dir, 'asset-index.json')),
  ...assets.map((asset) => ({ path: asset.path, bytes: asset.bytes, sha256: asset.sha256 }))
];
const bundleId = `sha256:${crypto.createHash('sha256').update(JSON.stringify(members)).digest('hex')}`;
const freeze = {
  workset_id: 'APP-000-D32-G3-V0.2',
  status: 'GATE3_STRUCTURE_FROZEN / READY_FOR_AUTHOR_SELF_CHECK',
  lifecycle: 'GATE3_IN_PROGRESS',
  source: identity(source),
  bundle_id: bundleId,
  members,
  approved_inputs_verified: inputs.inputs.length,
  captures_verified: assets.length,
  route_state_interpretation: 'LOCAL_PLANNING_SIMULATION_ONLY',
  d32_implementation: 'NOT_STARTED',
  frozen_at: new Date().toISOString()
};
fs.writeFileSync(path.join(dir, 'freeze.json'), JSON.stringify(freeze, null, 2));
console.log(JSON.stringify({ result: 'FROZEN', bundle_id: bundleId, members: members.length, captures: assets.length }, null, 2));
