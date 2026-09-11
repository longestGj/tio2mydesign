const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = __dirname;
const candidate = path.join(root, 'app-root-page-hero-preview-v1.1.html');
const runtime = path.join(root, 'capture-runtime-v1.1.json');
const freeze = path.join(root, 'freeze-record.json');
const expectedAnchors = ['#application-coatings', '#application-plastics', '#application-masterbatch', '#application-printing-inks', '#application-paper', '#application-specialty-materials'];

function fail(message) { console.error(`FAIL: ${message}`); process.exitCode = 1; }
function hash(file) { return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'); }

if (!fs.existsSync(candidate)) { fail('V1.1 candidate preview is missing'); process.exit(); }
const html = fs.readFileSync(candidate, 'utf8');
for (const token of ['Home</a><a href="/markets/">Markets', 'font-weight: 700;', 'href="#application-coatings"', 'id="application-specialty-materials"']) {
  if (!html.includes(token)) fail(`required V1.1 binding missing: ${token}`);
}
for (const token of ['/applications/coatings/', '/applications/plastics/', '/applications/masterbatch/', '/applications/printing-inks/', '/applications/paper/', '/applications/specialty-materials/']) {
  if (html.includes(token)) fail(`unconditional application sub-route present: ${token}`);
}
if (!fs.existsSync(runtime)) { fail('runtime evidence is missing'); process.exit(); }
const report = JSON.parse(fs.readFileSync(runtime, 'utf8'));
if (report.status !== 'PASS') fail('runtime report is not PASS');
for (const viewport of report.viewports || []) {
  if (!viewport.pass) fail(`viewport failed: ${viewport.name}`);
  if (viewport.h1Weight !== '700') fail(`H1 is not weight 700: ${viewport.name}`);
  if (JSON.stringify(viewport.desktopNav || []) !== JSON.stringify(['Home', 'Markets', 'Products', 'Applications', 'Documents', 'Resources', 'About'])) fail(`desktop primary navigation order is wrong: ${viewport.name}`);
  if (JSON.stringify(viewport.heroAnchors || []) !== JSON.stringify(expectedAnchors)) fail(`Hero card anchors are wrong: ${viewport.name}`);
  if (!viewport.anchorTargetsResolve) fail(`Hero card anchor target missing: ${viewport.name}`);
  if (viewport.previewRouteLinks !== 0) fail(`M2 preview created route links: ${viewport.name}`);
  if (viewport.unconditionalApplicationSubroutes !== 0) fail(`unconditional application sub-route found: ${viewport.name}`);
}
if (!fs.existsSync(freeze)) { fail('freeze/asset manifest is missing'); process.exit(); }
const manifest = JSON.parse(fs.readFileSync(freeze, 'utf8'));
if (manifest.candidate?.sha256 !== hash(candidate)) fail('freeze candidate SHA does not match preview');
for (const asset of manifest.evidence || []) {
  const assetPath = path.join(root, asset.path);
  if (!fs.existsSync(assetPath)) fail(`frozen evidence missing: ${asset.path}`);
  else if (asset.sha256 !== hash(assetPath)) fail(`frozen evidence SHA mismatch: ${asset.path}`);
}
console.log(JSON.stringify({ status: process.exitCode ? 'FAIL' : 'PASS', candidateSha256: hash(candidate), evidence: report.viewports?.map(v => ({ name: v.name, screenshot: v.screenshot, screenshotSha256: v.screenshotSha256, width: v.width, height: v.height })) }, null, 2));
