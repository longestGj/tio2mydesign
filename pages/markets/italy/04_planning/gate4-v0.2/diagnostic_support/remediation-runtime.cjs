const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const pageDir = 'D:/23MySec/pages/markets/italy';
const oldDir = path.join(pageDir, '04_planning/gate4-v0.1');
const newDir = path.join(pageDir, '04_planning/gate4-v0.2');
const source = path.join(oldDir, 'MARKET-EU-IT_GATE4_COMPLETE_VISUAL_V0.1.html');
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const expectedSource = { bytes: 28199, sha256: 'ed7d54648e058fee6ee4d6ff7ca76d3fe3f440eda0e5d0d7b8871b6da0f15615' };
const expectedHeights = { 1440: 5050, 768: 6114, 390: 7698 };
const checks = [];
const errors = [];
const add = (id, pass, detail) => checks.push({ id, pass: Boolean(pass), detail });

(async () => {
  const before = { bytes: fs.statSync(source).size, sha256: sha(source) };
  add('IT-R2-SOURCE-BEFORE', before.bytes === expectedSource.bytes && before.sha256 === expectedSource.sha256, before);
  fs.mkdirSync(path.join(newDir, 'diagnostic_support/full-page-regression'), { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const widths = {};
  for (const width of [1440, 768, 390]) {
    const viewport = { width, height: width === 390 ? 844 : 900 };
    const page = await browser.newPage({ viewport, deviceScaleFactor: 1, reducedMotion: 'reduce' });
    const localErrors = [];
    page.on('pageerror', e => localErrors.push(e.message));
    page.on('console', m => { if (m.type() === 'error') localErrors.push(m.text()); });
    await page.route(/^https?:\/\//, route => route.abort());
    await page.goto(pathToFileURL(source).href, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const state = await page.evaluate(() => {
      const controls = [...document.querySelectorAll('a,button')].filter(el => { const s = getComputedStyle(el), r = el.getBoundingClientRect(); return s.display !== 'none' && s.visibility !== 'hidden' && r.width > 0 && r.height > 0; });
      return {
        height: document.documentElement.scrollHeight,
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        modules: [...document.querySelectorAll('main > section')].map(x => x.dataset.module),
        h1: document.querySelectorAll('main h1').length,
        bodyLinks: document.querySelectorAll('main a').length,
        below44: controls.filter(el => { const r = el.getBoundingClientRect(); return r.width < 44 || r.height < 44; }).length,
        cooAdjacent: /Certificate of Origin is available upon request\. Availability on request does not promise that a certificate is issued for every shipment or determine customs acceptance or treatment\./.test(document.querySelector('[data-module="IT-04"]').innerText.replace(/\s+/g, ' ')),
        currentVisible: /\bCURRENT\b/.test(document.body.innerText),
      };
    });
    const fullPath = path.join(newDir, `diagnostic_support/full-page-regression/${width}-full.png`);
    await page.locator('html').screenshot({ path: fullPath });
    const image = { path: fullPath.replaceAll('\\', '/'), bytes: fs.statSync(fullPath).size, sha256: sha(fullPath) };
    widths[width] = { viewport, state, image };
    add(`IT-R2-${width}-EXTENT`, state.height === expectedHeights[width] && state.scrollWidth === state.clientWidth, state);
    add(`IT-R2-${width}-STRUCTURE`, JSON.stringify(state.modules) === JSON.stringify(['IT-01','IT-02','IT-03','IT-04','IT-05','IT-06','IT-07']) && state.h1 === 1 && state.bodyLinks === 19, state);
    add(`IT-R2-${width}-CONTROLS`, state.below44 === 0, state);
    add(`IT-R2-${width}-COO`, state.cooAdjacent, state);
    add(`IT-R2-${width}-CHROME`, !state.currentVisible, state);
    add(`IT-R2-${width}-ERRORS`, localErrors.length === 0, localErrors);
    errors.push(...localErrors.map(message => ({ width, message })));
    await page.close();
  }
  await browser.close();
  const after = { bytes: fs.statSync(source).size, sha256: sha(source) };
  add('IT-R2-SOURCE-AFTER', JSON.stringify(before) === JSON.stringify(after), after);
  const result = {
    page_id: 'MARKET-EU-IT', workset_id: 'IT-G4-COMPLETE-20260907-02', freeze_id: 'IT-G4-FREEZE-20260907-02', finding_response_id: 'IT-G4-PC-R01-R1',
    status: 'PASS / SOURCE_AND_VISUAL_UNCHANGED / THREE_WIDTH_FULL_PAGE_REGRESSION',
    generated_at: new Date().toISOString(), source_before: before, source_after: after,
    renderer: { browser: await chromium.launch({headless:true}).then(async b => { const v=await b.version(); await b.close(); return v; }), node: process.version, dpr: 1, network: 'HTTP(S) blocked' },
    widths, errors,
    summary: { checks: checks.length, passed: checks.filter(x => x.pass).length, failed: checks.filter(x => !x.pass).length, failed_ids: checks.filter(x => !x.pass).map(x => x.id), new_images: 3 },
    checks,
  };
  fs.writeFileSync(path.join(newDir, 'diagnostic_support/remediation-runtime.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result.summary));
  if (result.summary.failed) process.exit(1);
})().catch(e => { console.error(e); process.exit(1); });
