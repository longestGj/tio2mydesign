const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = __dirname;
const candidate = path.join(root, 'app-root-page-hero-preview-v1.0.html');
const output = path.join(root, 'capture-runtime-v1.0.json');
const viewports = [
  { name: 'desktop', width: 1440, height: 980, expectedH1: 56, screenshot: 'APP-000_ROOT_PAGE_HERO_DESKTOP_1440_CANDIDATE_V1.0.png' },
  { name: 'tablet', width: 768, height: 1180, expectedH1: 44, screenshot: 'APP-000_ROOT_PAGE_HERO_TABLET_768_CANDIDATE_V1.0.png' },
  { name: 'mobile', width: 390, height: 1280, expectedH1: 36, screenshot: 'APP-000_ROOT_PAGE_HERO_MOBILE_390_CANDIDATE_V1.0.png' }
];
const sha256 = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  try {
    for (const viewport of viewports) {
      const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1 });
      await page.goto(pathToFileURL(candidate).href, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      const screenshotPath = path.join(root, viewport.screenshot);
      await page.screenshot({ path: screenshotPath, fullPage: false });
      const result = await page.evaluate(expectedH1 => {
        const h1 = document.querySelector('h1');
        const hero = document.querySelector('.hero-shell');
        const card = document.querySelector('.application-card');
        const actions = document.querySelector('.hero-actions');
        const module = document.querySelector('.module-start');
        const header = document.querySelector('.site-header');
        const logo = document.querySelector('.brand-logo');
        const range = document.createRange();
        range.selectNodeContents(h1);
        const distinctLineTops = [...new Set([...range.getClientRects()].map(r => Math.round(r.top)))];
        const shownInteractive = [...document.querySelectorAll('a, button')].filter(el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; });
        const minInteractiveHeight = Math.min(...shownInteractive.map(el => el.getBoundingClientRect().height));
        const heroStyle = getComputedStyle(hero);
        const pseudo = getComputedStyle(hero, '::before');
        const h1Size = Number.parseFloat(getComputedStyle(h1).fontSize);
        const cardFollowsActions = Boolean(actions.compareDocumentPosition(card) & Node.DOCUMENT_POSITION_FOLLOWING);
        return {
          h1FontSize: h1Size,
          h1LineCount: distinctLineTops.length,
          minInteractiveHeight,
          overflow: document.documentElement.scrollWidth > window.innerWidth,
          headerHeight: header.getBoundingClientRect().height,
          heroBorder: heroStyle.borderTopWidth,
          heroRadius: heroStyle.borderTopLeftRadius,
          heroBackground: heroStyle.backgroundColor,
          heroShadow: heroStyle.boxShadow,
          pseudoContent: pseudo.content,
          pseudoDisplay: pseudo.display,
          cardFollowsActions,
          firstModuleAfterHero: Boolean(hero.compareDocumentPosition(module) & Node.DOCUMENT_POSITION_FOLLOWING),
          currentWordPresent: /CURRENT/.test(document.body.innerText),
          logoLoaded: logo.complete && logo.naturalWidth > 0,
          h1Matches: h1Size === expectedH1
        };
      }, viewport.expectedH1);
      result.name = viewport.name;
      result.width = viewport.width;
      result.height = viewport.height;
      result.screenshot = viewport.screenshot;
      result.screenshotSha256 = sha256(screenshotPath);
      result.pass = result.h1Matches && result.h1LineCount <= 3 && result.minInteractiveHeight >= 44 && !result.overflow && result.heroBorder === '0px' && result.heroRadius === '0px' && result.heroBackground === 'rgba(0, 0, 0, 0)' && result.heroShadow === 'none' && result.pseudoContent === 'none' && result.pseudoDisplay === 'none' && result.cardFollowsActions && result.firstModuleAfterHero && !result.currentWordPresent && result.logoLoaded && result.headerHeight === (viewport.width <= 1023 ? 64 : 84);
      results.push(result);
      await page.close();
    }
  } finally {
    await browser.close();
  }
  const report = { candidate: path.basename(candidate), candidateSha256: sha256(candidate), status: results.every(result => result.pass) ? 'PASS' : 'FAIL', viewports: results };
  fs.writeFileSync(output, JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(report, null, 2));
  if (report.status !== 'PASS') process.exitCode = 1;
})().catch(error => { console.error(error); process.exit(1); });
