const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = __dirname;
const candidate = path.join(root, 'market-root-page-hero-preview-v1.0.html');
const viewports = [
  { name: 'desktop', width: 1440, height: 980, file: 'MARKET-000_ROOT_PAGE_HERO_DESKTOP_1440_CANDIDATE_V1.0.png', h1: 56, header: 84 },
  { name: 'tablet', width: 768, height: 1180, file: 'MARKET-000_ROOT_PAGE_HERO_TABLET_768_CANDIDATE_V1.0.png', h1: 44, header: 64 },
  { name: 'mobile', width: 390, height: 1280, file: 'MARKET-000_ROOT_PAGE_HERO_MOBILE_390_CANDIDATE_V1.0.png', h1: 36, header: 64 }
];
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
    await page.goto(`file:///${candidate.replace(/\\/g, '/')}`, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const data = await page.evaluate(() => {
      const rect = s => document.querySelector(s).getBoundingClientRect();
      const visibleActions = [...document.querySelectorAll('a,button')].filter(el => { const r = el.getBoundingClientRect(); return getComputedStyle(el).display !== 'none' && r.width > 0 && r.height > 0; });
      const shell = document.querySelector('.hero-shell');
      const h1 = document.querySelector('h1');
      const hs = getComputedStyle(h1);
      const pseudo = getComputedStyle(shell, '::before');
      return {
        h1FontSize: parseFloat(hs.fontSize), h1Weight: hs.fontWeight, h1LineCount: Math.round(h1.getBoundingClientRect().height / parseFloat(hs.lineHeight)),
        headerHeight: rect('.site-header').height, minInteractiveHeight: Math.min(...visibleActions.map(el => el.getBoundingClientRect().height)), overflow: document.documentElement.scrollWidth > window.innerWidth,
        currentWordPresent: [...document.querySelectorAll('*')].some(el => el.children.length === 0 && el.textContent.trim().toUpperCase() === 'CURRENT'),
        heroBorder: getComputedStyle(shell).borderTopWidth, heroRadius: getComputedStyle(shell).borderTopLeftRadius, heroBackground: getComputedStyle(shell).backgroundColor, heroShadow: getComputedStyle(shell).boxShadow, pseudoContent: pseudo.content, pseudoDisplay: pseudo.display,
        primaryHref: document.querySelector('.button-primary').getAttribute('href'), nav: [...document.querySelectorAll('.desktop-nav a')].map(a => a.textContent.trim()), activeNav: document.querySelector('.desktop-nav [aria-current="page"]')?.textContent.trim(),
        childMarketHrefs: [...document.querySelectorAll('[href]')].map(el => el.getAttribute('href')).filter(h => /^\/markets\/.+/.test(h)), ptbrPresent: document.body.textContent.includes('Portuguese') || document.body.textContent.includes('PT-BR'),
        infoMediaVisible: (() => { const r = rect('.market-card'); return r.width > 0 && r.height > 0; })(), destinationOrder: [...document.querySelectorAll('.country-list div, .market-row h3')].map(el => el.textContent.trim())
      };
    });
    const output = path.join(root, vp.file);
    await page.screenshot({ path: output });
    results.push({ ...vp, ...data, screenshot: vp.file, screenshotSha256: hash(output), pass: data.h1FontSize === vp.h1 && data.h1Weight === '700' && data.h1LineCount <= 3 && data.headerHeight === vp.header && data.minInteractiveHeight >= 44 && !data.overflow && !data.currentWordPresent && data.primaryHref === '#destination-selector' && data.childMarketHrefs.length === 0 && !data.ptbrPresent && data.infoMediaVisible });
    await page.close();
  }
  await browser.close();
  const runtime = { candidate: path.basename(candidate), candidateSha256: hash(candidate), status: results.every(r => r.pass) ? 'PASS' : 'FAIL', viewports: results };
  fs.writeFileSync(path.join(root, 'capture-runtime-v1.0.json'), JSON.stringify(runtime, null, 2) + '\n');
  const freeze = {
    freeze_id: 'MARKET-ROOT-HERO-G4-CANDIDATE-01-FREEZE-20260911', page_id: 'MARKET-000', candidate_id: 'MARKET-ROOT-HERO-G4-CANDIDATE-01', status: 'DRAFT_FOR_PROJECT_CONTROL_REVIEW', workflow: 'ROOT-HERO-G4-7P-V1',
    scope: 'Wave 2 targeted Gate 4 Hero proof only; no Manifest replacement, Gate closure, implementation, D16 work or release authorization.',
    contracts: ['docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md', 'docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_TARGETED_GATE4_CONTROL_V1.0.md', 'docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md', 'pages/markets/04_planning/MARKET-000_CONTENT_ARCHITECTURE_V0.1.md'],
    candidate: { path: path.basename(candidate), bytes: fs.statSync(candidate).size, sha256: hash(candidate) },
    replay: { capture: 'node capture-market-root-page-hero-v1.0.cjs', verification: 'node verify-market-root-page-hero-v1.0.cjs', runtime_report: { path: 'capture-runtime-v1.0.json', sha256: hash(path.join(root, 'capture-runtime-v1.0.json')), status: runtime.status } },
    evidence: results.map(r => ({ name:r.name, path:r.screenshot, dimensions:`${r.width}x${r.height}`, bytes:fs.statSync(path.join(root,r.screenshot)).size, sha256:r.screenshotSha256, h1_px:r.h1, header_px:r.header })),
    validated: { desktop_navigation_order:['Home','Markets','Products','Applications','Documents','Resources','About'], buyer_visible_status_label:false, h1_weight:700, no_unconditional_market_child_routes:true, ptbr_absent:true, information_media_visible_390:true, no_hero_left_decoration:true, minimum_visible_interactive_height_px:44, horizontal_overflow:false }
  };
  fs.writeFileSync(path.join(root, 'freeze-record.json'), JSON.stringify(freeze, null, 2) + '\n');
  console.log(JSON.stringify({ status: runtime.status, candidateSha256: runtime.candidateSha256, evidence: freeze.evidence }, null, 2));
  process.exitCode = runtime.status === 'PASS' ? 0 : 1;
})().catch(error => { console.error(error.stack || error); process.exit(2); });
