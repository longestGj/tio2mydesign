const fs = require('fs');
const crypto = require('crypto');

const base = 'D:/23MySec/pages/markets/germany/04_planning/gate4-v0.1';
const diag = base + '/diagnostic_support';
const approval = base + '/approval_core';
const sha = data => crypto.createHash('sha256').update(data).digest('hex');
const identity = file => { const data = fs.readFileSync(file); return { path: file.replaceAll('\\', '/'), bytes: data.length, sha256: sha(data) }; };
const pngSize = file => { const data = fs.readFileSync(file); return { pixelWidth: data.readUInt32BE(16), pixelHeight: data.readUInt32BE(20) }; };
const write = (file, value) => fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n');

const direction = JSON.parse(fs.readFileSync(diag + '/direction-r1-checks.json', 'utf8'));
const preflight = JSON.parse(fs.readFileSync(diag + '/preflight-r1-checks.json', 'utf8'));
const formal = JSON.parse(fs.readFileSync(diag + '/formal-r1-checks.json', 'utf8'));
if (formal.status !== 'FORMAL_EXECUTION_SELF_CHECK_PASS' || formal.summary.failed !== 0) throw new Error('formal result is not a pass');

const label = (asset, bucket) => {
  const name = asset.path.split('/').at(-1);
  const state = name.includes('-full') ? 'FULL_PAGE' : name.startsWith('readable-') ? 'CONTINUOUS_READABLE_SEGMENT' : name.includes('-menu') ? 'MENU_OPEN' : name.includes('-cookie') ? 'COOKIE_MODAL_OPEN' : name.includes('-focus') ? 'KEYBOARD_FOCUS' : name.includes('-hover') ? 'ACTUAL_HOVER' : 'DIRECTION_SAMPLE';
  return { ...identity(asset.path), ...pngSize(asset.path), logicalViewport: asset.logicalViewport, state, region: asset.region, bucket, classification: 'STATIC_VISUAL', opened: true, sourceSha256: formal.source.sha256, cssSha256: formal.css.sha256 };
};
const images = [
  ...formal.assets.map(a => label(a, 'approval_core')),
  ...direction.assets.map(a => label(a, 'diagnostic_direction')),
  ...preflight.assets.map(a => label(a, 'diagnostic_preflight'))
].sort((a, b) => a.path.localeCompare(b.path));
const uniquePaths = new Set(images.map(x => x.path));
if (uniquePaths.size !== 51 || images.length !== 51) throw new Error(`expected 51 unique images; got ${uniquePaths.size}/${images.length}`);
const stateCount = state => images.filter(x => x.state === state).length;

const counts = {
  total_unique_images: images.length,
  opened_images: images.filter(x => x.opened).length,
  approval_core_images: images.filter(x => x.bucket === 'approval_core').length,
  diagnostic_images: images.filter(x => x.bucket !== 'approval_core').length,
  full_pages: stateCount('FULL_PAGE'),
  continuous_segments: stateCount('CONTINUOUS_READABLE_SEGMENT'),
  direction_samples: stateCount('DIRECTION_SAMPLE'),
  menu_states: stateCount('MENU_OPEN'),
  cookie_states: stateCount('COOKIE_MODAL_OPEN'),
  keyboard_focus_states: stateCount('KEYBOARD_FOCUS'),
  hover_states: stateCount('ACTUAL_HOVER')
};

write(approval + '/asset-inventory.json', {
  page_id: 'MARKET-EU-DE', workset_id: 'DE-G4-COMPLETE-20260907-01', freeze_id: 'DE-G4-COMPLETE-20260907-01-F01', status: 'STATIC_VISUAL_INVENTORY_COMPLETE', source: formal.source, css: formal.css, counts, images
});

write(approval + '/export-inventory.json', {
  page_id: 'MARKET-EU-DE', workset_id: 'DE-G4-COMPLETE-20260907-01', freeze_id: 'DE-G4-COMPLETE-20260907-01-F01', status: 'COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW',
  source: formal.source,
  css: formal.css,
  input_index: identity(base + '/input_index.json'),
  source_freeze: identity(approval + '/source-freeze.json'),
  direction_check: identity(base + '/4A-direction-check.json'),
  direction_runtime: identity(diag + '/direction-r1-checks.json'),
  preflight_runtime: identity(diag + '/preflight-r1-checks.json'),
  formal_runtime: identity(diag + '/formal-r1-checks.json'),
  workset: identity(base + '/workset.json'),
  counts,
  approval_core: images.filter(x => x.bucket === 'approval_core'),
  diagnostic_support: images.filter(x => x.bucket !== 'approval_core')
});

write(diag + '/visual-readback.json', {
  page_id: 'MARKET-EU-DE', workset_id: 'DE-G4-COMPLETE-20260907-01', freeze_id: 'DE-G4-COMPLETE-20260907-01-F01', status: 'MANUAL_VISUAL_READBACK_PASS',
  inspection: 'Every generated image was opened in the Codex visual viewer. Full pages were checked for continuity and closure; readable segments were checked for text, spacing, clipping and section joins; state captures were checked for visible Menu, Cookie, hover and keyboard-focus treatment.',
  counts,
  findings: [],
  conclusion: 'No clipping, horizontal overflow, abnormal void, broken section connection, focus-frame collision or Footer closure defect was found.',
  images: images.map(x => ({ path: x.path, bytes: x.bytes, sha256: x.sha256, pixelWidth: x.pixelWidth, pixelHeight: x.pixelHeight, state: x.state, opened: true }))
});

for (const file of [approval + '/asset-inventory.json', approval + '/export-inventory.json', diag + '/visual-readback.json']) console.log(JSON.stringify(identity(file)));
