const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = __dirname;
const candidate = path.join(root, 'product-root-page-hero-preview-v1.0.html');
const runtime = path.join(root, 'capture-runtime-v1.0.json');
const freeze = path.join(root, 'freeze-record.json');
const requiredCopy = [
  'Titanium Dioxide Products',
  'Titanium Dioxide Pigment Grades for Industrial Applications',
  'Explore 14 titanium dioxide pigment grades using the application selector, production-process categories or complete grade directory, then continue to individual grade pages for technical evaluation.',
  'The portfolio includes rutile titanium dioxide pigment grades for multiple industrial applications.',
  'Listed grades are starting points for technical evaluation and do not guarantee suitability for a specific formulation or operating condition.',
  'Start Grade Selection', 'Request a Quote', '14 grades. Four portfolio groups.',
  '6 Coatings Grades', '5 Plastics & Masterbatch', '2 Inks & Multi-Application', '1 Specialty Grade',
  'Start with Your Application', 'Choose the closest application to view the grades listed for that use case.', 'M-2377'
];
function fail(message) { console.error(`FAIL: ${message}`); process.exitCode = 1; }
function digest(file) { return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'); }

if (!fs.existsSync(candidate)) { fail('PRODUCT V1.0 candidate preview is missing'); process.exit(); }
const html = fs.readFileSync(candidate, 'utf8');
const visibleText = html.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const compactSource = html.replace(/\s+/g, '');
for (const text of requiredCopy) if (!visibleText.includes(text)) fail(`approved content missing: ${text}`);
for (const forbidden of ['Rubber', 'M-996 vs M-2196', 'hero-wide-frame', 'hero-wide-gradient']) if (html.includes(forbidden)) fail(`forbidden boundary or retired treatment present: ${forbidden}`);
for (const rule of ['font-size:56px;', 'font-size:44px;', 'font-size:36px;', 'font-weight:700;', 'border:0;', 'box-shadow:none;', 'min-height:44px;']) if (!compactSource.includes(rule)) fail(`required shared Hero rule missing: ${rule}`);
if (!fs.existsSync(runtime)) { fail('runtime evidence is missing'); process.exit(); }
const report = JSON.parse(fs.readFileSync(runtime, 'utf8'));
if (report.status !== 'PASS') fail('runtime report is not PASS');
for (const viewport of report.viewports || []) {
  if (!viewport.pass) fail(`viewport failed: ${viewport.name}`);
  if (viewport.h1LineCount > 3 || viewport.minInteractiveHeight < 44 || viewport.overflow) fail(`responsive baseline failed: ${viewport.name}`);
  if (viewport.h1Weight !== '700' || !viewport.primaryTargetResolves || viewport.currentWordPresent) fail(`Hero/Chrome contract failed: ${viewport.name}`);
}
if (!fs.existsSync(freeze)) { fail('freeze/asset manifest is missing'); process.exit(); }
const manifest = JSON.parse(fs.readFileSync(freeze, 'utf8'));
if (manifest.candidate?.sha256 !== digest(candidate)) fail('freeze candidate SHA mismatch');
for (const evidence of manifest.evidence || []) { const evidencePath = path.join(root, evidence.path); if (!fs.existsSync(evidencePath)) fail(`evidence missing: ${evidence.path}`); else if (evidence.sha256 !== digest(evidencePath)) fail(`evidence SHA mismatch: ${evidence.path}`); }
console.log(JSON.stringify({ status: process.exitCode ? 'FAIL' : 'PASS', candidateSha256: digest(candidate), evidence: report.viewports?.map(({ name, screenshot, screenshotSha256, width, height }) => ({ name, screenshot, screenshotSha256, width, height })) }, null, 2));
