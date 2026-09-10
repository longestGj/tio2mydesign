const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = 'D:/23MySec';
const coat = path.join(root, 'pages/applications/coatings');
const oldDir = path.join(coat, '04_planning/gate4-v0.1');
const dir = path.join(coat, '04_planning/gate4-v0.2');
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const linear = n => { n /= 255; return n <= .04045 ? n / 12.92 : ((n + .055) / 1.055) ** 2.4; };
const lum = a => .2126 * linear(a[0]) + .7152 * linear(a[1]) + .0722 * linear(a[2]);
const contrast = (a, b) => (Math.max(lum(a), lum(b)) + .05) / (Math.min(lum(a), lum(b)) + .05);
const rgb = s => (s.match(/\d+/g) || []).slice(0, 3).map(Number);
const expectedFiles = {
  '04_planning/gate4-v0.1/APP-COAT_GATE4_COMPLETE_VISUAL_V0.1.html': 'a1e8c4153831aa829698f62e0c30c1fc7a77ec5bbb1f23ce264dede5d61443d2',
  '04_planning/gate4-v0.1/visual-direction.css': 'f4c2e703345cb3eae1221937ff63b61b3742c6f2da6ccf9c1f3da730db67ca8c',
  '04_planning/gate4-v0.1/approval_core/source-freeze.json': '1dfaab4a9fcaea3747260269924a62bba9883889c55878aa692d801bf87a3323',
  '04_planning/gate4-v0.2/workset.json': '9acc48801c9e171458c04dbbb86ae974b21806bf0fc146b228e6c30ea0e88fd1',
  '04_planning/gate4-v0.2/input_index.json': 'a12087e9469fd2f298eb08f8d32d3f9d74b04436d14dc29f0aca965dbf1cb28a',
  '04_planning/gate4-v0.2/statement-correction-register.json': 'dabc36d786b34a8eb436ac9c32ea626a58f46da7f6d16b1df14beb6d7c9147bf',
  '04_planning/gate4-v0.2/4A-direction-check-correction.json': '63a023c70211498770de981cc80798ca18b21ddfffeb303d4a66e20bc0c68657',
  '04_planning/gate4-v0.2/diagnostic_support/remediation-runtime.json': '73ccbb763d5a623b0ceecc6dadd607dde95103d24e44470cbcda344a2024e9c4',
  '04_planning/gate4-v0.2/approval_core/inherited-asset-verification.json': 'f783ae557672968cd58f4c2d71ea8285f6d0d5f089275b18578a1230b8f1f723',
  '04_planning/gate4-v0.2/approval_core/source-freeze.json': '7f40b7202990a25b17448bd6d75480caebd813cb71a4905d9f8d4a7d1a551226',
  '04_planning/gate4-v0.2/evidence_index.json': 'aad86687d0c8ca055d18482f49f86737ca3c35db72a3d88be5a71c6fb9f404ed',
  '04_planning/gate4-v0.2/APP-COAT_GATE4_FINDING_RESPONSE_COAT-G4-IR-01_V0.2.md': 'd296c3dc166ff12764d57b6c5fbe5121fd0ea49ea3f027580b10ab43e21d3317',
  '04_planning/gate4-v0.2/APP-COAT_GATE4_VISUAL_AND_EXECUTION_REPORT_V0.2.md': '4b4b0643d4d379186e07f4152b45f799dd0536208487bf0f2a1d539617076ba5',
  '05_review/APP-COAT_GATE4_EXECUTION_SELF_CHECK_V0.2.md': '8bc30e668ae2167a2aac11ee5c404304185724274e96e3cce35d7d7a335b4ef2',
  '05_review/APP-COAT_GATE4_REREVIEW_SUBMISSION_V0.2.md': 'd5c10aaac33675a6fa0362c203ce2f7bf0deb8254b2d0452cc6a9ccc862d21bb',
};

const failures = [];
let checks = 0;
const check = (ok, id, detail = '') => { checks++; if (!ok) failures.push({ id, detail }); };

(async () => {
  for (const [rel, expected] of Object.entries(expectedFiles)) {
    const p = path.join(coat, rel);
    check(fs.existsSync(p), `FILE:${rel}`, 'missing');
    if (fs.existsSync(p)) check(sha(p) === expected, `SHA:${rel}`, `${sha(p)} != ${expected}`);
  }

  const runtime = JSON.parse(fs.readFileSync(path.join(dir, 'diagnostic_support/remediation-runtime.json')));
  const assets = JSON.parse(fs.readFileSync(path.join(dir, 'approval_core/inherited-asset-verification.json')));
  const freeze = JSON.parse(fs.readFileSync(path.join(dir, 'approval_core/source-freeze.json')));
  const evidence = JSON.parse(fs.readFileSync(path.join(dir, 'evidence_index.json')));
  const corrections = JSON.parse(fs.readFileSync(path.join(dir, 'statement-correction-register.json')));
  check(runtime.summary.checks === 24 && runtime.summary.passed === 24 && runtime.summary.failed === 0, 'RUNTIME-FROZEN', JSON.stringify(runtime.summary));
  check(assets.counts.formal_assets === 48 && assets.counts.identity_and_pixel_decode_passed === 48 && assets.counts.failed === 0, 'ASSETS-FROZEN', JSON.stringify(assets.counts));
  check(evidence.counts.inherited_formal_checks === 720 && evidence.counts.inherited_formal_checks_passed === 720 && evidence.counts.inherited_formal_assets === 48 && evidence.counts.new_regression_images === 6, 'EVIDENCE-COUNTS', JSON.stringify(evidence.counts));
  check(freeze.inputs.length === 61 && freeze.dependencies.length === 6, 'FREEZE-COUNTS', `${freeze.inputs.length}/${freeze.dependencies.length}`);
  check(corrections.superseded_claim_locations.length === 4, 'CORRECTION-LOCATIONS', String(corrections.superseded_claim_locations.length));

  for (const item of [...freeze.inputs, ...freeze.dependencies]) {
    check(fs.existsSync(item.path), `FROZEN-EXISTS:${item.path}`);
    if (fs.existsSync(item.path)) {
      check(fs.statSync(item.path).size === item.bytes, `FROZEN-BYTES:${item.path}`);
      check(sha(item.path) === item.sha256, `FROZEN-SHA:${item.path}`);
    }
  }

  for (const a of assets.formal_assets) {
    check(fs.existsSync(a.path), `ASSET-EXISTS:${a.path}`);
    if (fs.existsSync(a.path)) {
      check(fs.statSync(a.path).size === a.actual_bytes, `ASSET-BYTES:${a.path}`);
      check(sha(a.path) === a.actual_sha256, `ASSET-SHA:${a.path}`);
    }
  }
  for (const image of evidence.new_regression_images) {
    check(fs.existsSync(image.path), `NEW-IMAGE-EXISTS:${image.path}`);
    if (fs.existsSync(image.path)) {
      check(fs.statSync(image.path).size === image.bytes, `NEW-IMAGE-BYTES:${image.path}`);
      check(sha(image.path) === image.sha256, `NEW-IMAGE-SHA:${image.path}`);
    }
  }

  const browser = await chromium.launch({ headless: true });
  for (const width of [1440, 768, 390]) {
    const page = await browser.newPage({ viewport: { width, height: width === 390 ? 844 : 900 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
    await page.route(/^https?:\/\//, route => route.abort());
    await page.goto(pathToFileURL(path.join(oldDir, 'APP-COAT_GATE4_COMPLETE_VISUAL_V0.1.html')).href, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const target = page.locator('.heroActions .primaryAction');
    const normal = await target.evaluate(el => { const s = getComputedStyle(el), r = el.getBoundingClientRect(); return { fg: s.color, bg: s.backgroundColor, width: r.width, height: r.height, x: r.x, y: r.y }; });
    await target.hover();
    const hover = await target.evaluate(el => { const s = getComputedStyle(el), r = el.getBoundingClientRect(); return { fg: s.color, bg: s.backgroundColor, width: r.width, height: r.height, x: r.x, y: r.y }; });
    const state = await page.evaluate(() => ({
      height: document.documentElement.scrollHeight,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      sections: document.querySelectorAll('main > section').length,
      h1: document.querySelectorAll('main h1').length,
      h2: document.querySelectorAll('main h2').length,
      grades: document.querySelectorAll('.grades tbody tr').length,
      requests: document.querySelectorAll('.requestCards a').length,
      sources: document.querySelectorAll('.sources li').length,
      below44: [...document.querySelectorAll('a,button')].filter(el => { const s = getComputedStyle(el), r = el.getBoundingClientRect(); return s.display !== 'none' && s.visibility !== 'hidden' && r.width > 0 && r.height > 0 && (r.width < 44 || r.height < 44); }).length,
    }));
    const ratio = contrast(rgb(hover.fg), rgb(hover.bg));
    check(hover.fg === 'rgb(255, 255, 255)' && hover.bg === 'rgb(0, 127, 119)', `LIVE-${width}-COLORS`, JSON.stringify(hover));
    check(Math.abs(ratio - 4.881302249384679) < 1e-12 && ratio >= 4.5, `LIVE-${width}-CONTRAST`, String(ratio));
    check(['width', 'height', 'x', 'y'].every(k => Math.abs(normal[k] - hover[k]) < .1) && hover.width >= 44 && hover.height >= 44, `LIVE-${width}-GEOMETRY`, JSON.stringify({ normal, hover }));
    check(state.height === ({1440:10070,768:11531,390:17825})[width] && state.scrollWidth === state.clientWidth, `LIVE-${width}-EXTENT`, JSON.stringify(state));
    check(state.sections === 10 && state.h1 === 1 && state.h2 === 9 && state.grades === 8 && state.requests === 3 && state.sources === 6 && state.below44 === 0, `LIVE-${width}-STRUCTURE`, JSON.stringify(state));
    check(errors.length === 0, `LIVE-${width}-ERRORS`, JSON.stringify(errors));
    await page.close();
  }
  await browser.close();

  console.log(JSON.stringify({ checks, passed: checks - failures.length, failed: failures.length, failures }, null, 2));
  if (failures.length) process.exit(1);
})().catch(error => { console.error(error); process.exit(1); });
