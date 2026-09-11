const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const root = __dirname;
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const fail = message => { console.error(`FAIL: ${message}`); process.exitCode = 1; };
const freeze = JSON.parse(fs.readFileSync(path.join(root, 'freeze-record.json'), 'utf8'));
const runtime = JSON.parse(fs.readFileSync(path.join(root, 'capture-runtime-v1.0.json'), 'utf8'));
const candidate = path.join(root, freeze.candidate.path);
const html = fs.readFileSync(candidate, 'utf8');
const requiredTokens = [
  'Destination market navigation',
  'Choose Your Destination Market',
  'Start with the region or country where your procurement requirements need to be reviewed. This hub explains which market path to choose and where product, application, document, trade-update, and quotation questions belong.',
  'href="#destination-selector"',
  'id="destination-selector"',
  'EU / UK / IN / BR',
  'Destination-first procurement navigation',
  'Start with the market tied to your procurement requirements',
  'Germany</div><div>Italy</div><div>Spain</div><div>Poland</div><div>Netherlands</div><div>Belgium</div>',
  'United Kingdom</h3>', 'India</h3>', 'Brazil</h3>',
  'font-weight:700',
  'aria-current="page">Markets</a>'
];
for (const token of requiredTokens) if (!html.includes(token)) fail(`required binding missing: ${token}`);
for (const forbidden of ['/markets/european-union/', '/markets/germany/', '/markets/italy/', '/markets/spain/', '/markets/poland/', '/markets/netherlands/', '/markets/belgium/', '/markets/united-kingdom/', '/markets/india/', '/markets/brazil/', 'PT-BR', 'Portuguese']) if (html.includes(forbidden)) fail(`prohibited route/localization token present: ${forbidden}`);
if (hash(candidate) !== freeze.candidate.sha256) fail('candidate SHA differs from freeze');
if (runtime.status !== 'PASS' || runtime.viewports.length !== 3) fail('runtime report is not a three-viewport PASS');
for (const evidence of freeze.evidence) { const file = path.join(root, evidence.path); if (!fs.existsSync(file) || hash(file) !== evidence.sha256) fail(`evidence mismatch: ${evidence.path}`); }
for (const viewport of runtime.viewports) {
  if (!viewport.pass) fail(`viewport failed: ${viewport.name}`);
  if (viewport.h1Weight !== '700' || viewport.h1LineCount > 3) fail(`H1 token failed: ${viewport.name}`);
  if (viewport.childMarketHrefs.length || viewport.ptbrPresent || !viewport.infoMediaVisible) fail(`route/localization/media guard failed: ${viewport.name}`);
  if (viewport.currentWordPresent || viewport.pseudoContent !== 'none' || viewport.pseudoDisplay !== 'none') fail(`CURRENT/left-decoration guard failed: ${viewport.name}`);
}
console.log(JSON.stringify({ status: process.exitCode ? 'FAIL' : 'PASS', candidateSha256: hash(candidate), evidence: freeze.evidence }, null, 2));
