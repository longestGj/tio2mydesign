const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = __dirname;
const candidate = path.join(root, 'app-root-page-hero-preview-v1.0.html');
const runtime = path.join(root, 'capture-runtime-v1.0.json');
const freeze = path.join(root, 'freeze-record.json');
const requiredCopy = [
  'Explore Titanium Dioxide by Application',
  'This hub organizes titanium dioxide grades by application across coatings, plastics, masterbatch, printing inks, paper and specialty materials. Use each collection as a starting point for technical evaluation.',
  'Explore Applications',
  'Request a Quote',
  'Choose an Application',
  'Choose by Application',
  'Grades to Review are starting points for technical evaluation, not rankings or guarantees of suitability. Open a grade page for product information, or explore an application for guidance on what to evaluate.'
];

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

if (!fs.existsSync(candidate)) {
  fail('candidate preview is missing');
  process.exit();
}

const html = fs.readFileSync(candidate, 'utf8');
for (const text of requiredCopy) {
  if (!html.includes(text)) fail(`required approved copy missing: ${text}`);
}
for (const forbidden of ['CURRENT', 'hero-wide-gradient', 'hero-wide-frame']) {
  if (html.includes(forbidden)) fail(`forbidden buyer-visible or retired treatment token present: ${forbidden}`);
}
for (const rule of [
  '.hero-shell {',
  'border: 0;',
  'border-radius: 0;',
  'background: transparent;',
  'box-shadow: none;',
  'font-size: 56px;',
  'font-size: 44px;',
  'font-size: 36px;',
  'min-height: 44px;'
]) {
  if (!html.includes(rule)) fail(`required open-surface/responsive rule missing: ${rule}`);
}

if (!fs.existsSync(runtime)) {
  fail('capture runtime evidence is missing; run the capture script first');
  process.exit();
}

const results = JSON.parse(fs.readFileSync(runtime, 'utf8'));
if (results.status !== 'PASS') fail('runtime validation did not pass');
if (!Array.isArray(results.viewports) || results.viewports.length !== 3) fail('three viewport checks were not recorded');
for (const result of results.viewports || []) {
  if (!result.pass) fail(`viewport failed: ${result.name}`);
  if (result.overflow) fail(`horizontal overflow at ${result.name}`);
  if (result.h1LineCount > 3) fail(`H1 is over three lines at ${result.name}`);
  if (result.minInteractiveHeight < 44) fail(`touch target under 44px at ${result.name}`);
}

if (!fs.existsSync(freeze)) {
  fail('freeze/asset manifest is missing');
} else {
  const manifest = JSON.parse(fs.readFileSync(freeze, 'utf8'));
  const digest = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  if (manifest.candidate?.sha256 !== digest(candidate)) fail('freeze candidate SHA does not match preview');
  for (const item of manifest.evidence || []) {
    const evidencePath = path.join(root, item.path);
    if (!fs.existsSync(evidencePath)) fail(`frozen evidence missing: ${item.path}`);
    else if (item.sha256 !== digest(evidencePath)) fail(`frozen evidence SHA mismatch: ${item.path}`);
  }
}

const output = {
  status: process.exitCode ? 'FAIL' : 'PASS',
  candidateSha256: crypto.createHash('sha256').update(html).digest('hex'),
  evidence: results.viewports.map(({ name, screenshot, screenshotSha256, width, height }) => ({ name, screenshot, screenshotSha256, width, height }))
};
console.log(JSON.stringify(output, null, 2));
