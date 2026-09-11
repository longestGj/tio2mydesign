const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = __dirname;
const candidate = path.join(root, 'app-root-page-hero-preview-v1.1.html');
const output = path.join(root, 'capture-runtime-v1.1.json');
const expectedNav = ['Home', 'Markets', 'Products', 'Applications', 'Documents', 'Resources', 'About'];
const expectedAnchors = ['#application-coatings', '#application-plastics', '#application-masterbatch', '#application-printing-inks', '#application-paper', '#application-specialty-materials'];
const viewports = [
  { name:'desktop', width:1440, height:980, expectedH1:56, screenshot:'APP-000_ROOT_PAGE_HERO_DESKTOP_1440_CANDIDATE_V1.1.png' },
  { name:'tablet', width:768, height:1180, expectedH1:44, screenshot:'APP-000_ROOT_PAGE_HERO_TABLET_768_CANDIDATE_V1.1.png' },
  { name:'mobile', width:390, height:1280, expectedH1:36, screenshot:'APP-000_ROOT_PAGE_HERO_MOBILE_390_CANDIDATE_V1.1.png' }
];
const sha256 = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');

(async () => {
  const browser = await chromium.launch({ headless:true });
  const results = [];
  try {
    for (const viewport of viewports) {
      const page = await browser.newPage({ viewport:{ width:viewport.width, height:viewport.height }, deviceScaleFactor:1 });
      await page.goto(pathToFileURL(candidate).href, { waitUntil:'load' });
      await page.evaluate(() => document.fonts.ready);
      const screenshotPath = path.join(root, viewport.screenshot);
      await page.screenshot({ path:screenshotPath, fullPage:false });
      const result = await page.evaluate(({ expectedH1, expectedAnchors, expectedNav }) => {
        const h1 = document.querySelector('h1'); const hero = document.querySelector('.hero-shell'); const card = document.querySelector('.application-card'); const actions = document.querySelector('.hero-actions'); const module = document.querySelector('.module-start'); const header = document.querySelector('.site-header'); const logo = document.querySelector('.brand-logo');
        const range = document.createRange(); range.selectNodeContents(h1);
        const h1LineCount = new Set([...range.getClientRects()].map(rect => Math.round(rect.top))).size;
        const interactive = [...document.querySelectorAll('a, button')].filter(el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; });
        const minInteractiveHeight = Math.min(...interactive.map(el => el.getBoundingClientRect().height));
        const heroStyle = getComputedStyle(hero); const pseudo = getComputedStyle(hero, '::before');
        const desktopNav = [...document.querySelectorAll('.desktop-nav a')].map(link => link.textContent.trim());
        const heroAnchors = [...document.querySelectorAll('.application-links a')].map(link => link.getAttribute('href'));
        const anchorTargetsResolve = heroAnchors.every(anchor => Boolean(document.querySelector(anchor)));
        const previewRouteLinks = document.querySelectorAll('.application-preview-grid a').length;
        const unconditionalApplicationSubroutes = [...document.querySelectorAll('a[href^="/applications/"]')].filter(link => link.getAttribute('href') !== '/applications/').length;
        return { h1FontSize:Number.parseFloat(getComputedStyle(h1).fontSize), h1Weight:getComputedStyle(h1).fontWeight, h1LineCount, minInteractiveHeight, overflow:document.documentElement.scrollWidth > innerWidth, headerHeight:header.getBoundingClientRect().height, heroBorder:heroStyle.borderTopWidth, heroRadius:heroStyle.borderTopLeftRadius, heroBackground:heroStyle.backgroundColor, heroShadow:heroStyle.boxShadow, pseudoContent:pseudo.content, pseudoDisplay:pseudo.display, cardFollowsActions:Boolean(actions.compareDocumentPosition(card) & Node.DOCUMENT_POSITION_FOLLOWING), firstModuleAfterHero:Boolean(hero.compareDocumentPosition(module) & Node.DOCUMENT_POSITION_FOLLOWING), currentWordPresent:/CURRENT/.test(document.body.innerText), logoLoaded:logo.complete && logo.naturalWidth > 0, desktopNav, heroAnchors, anchorTargetsResolve, previewRouteLinks, unconditionalApplicationSubroutes, h1Matches:Number.parseFloat(getComputedStyle(h1).fontSize) === expectedH1, navMatches:JSON.stringify(desktopNav) === JSON.stringify(expectedNav), anchorsMatch:JSON.stringify(heroAnchors) === JSON.stringify(expectedAnchors) };
      }, { expectedH1:viewport.expectedH1, expectedAnchors, expectedNav });
      result.name=viewport.name; result.width=viewport.width; result.height=viewport.height; result.screenshot=viewport.screenshot; result.screenshotSha256=sha256(screenshotPath);
      result.pass = result.h1Matches && result.h1Weight === '700' && result.h1LineCount <= 3 && result.minInteractiveHeight >= 44 && !result.overflow && result.heroBorder === '0px' && result.heroRadius === '0px' && result.heroBackground === 'rgba(0, 0, 0, 0)' && result.heroShadow === 'none' && result.pseudoContent === 'none' && result.pseudoDisplay === 'none' && result.cardFollowsActions && result.firstModuleAfterHero && !result.currentWordPresent && result.logoLoaded && result.navMatches && result.anchorsMatch && result.anchorTargetsResolve && result.previewRouteLinks === 0 && result.unconditionalApplicationSubroutes === 0 && result.headerHeight === (viewport.width <= 1023 ? 64 : 84);
      results.push(result); await page.close();
    }
  } finally { await browser.close(); }
  const report = { candidate:path.basename(candidate), candidateSha256:sha256(candidate), status:results.every(result => result.pass) ? 'PASS' : 'FAIL', viewports:results };
  fs.writeFileSync(output, JSON.stringify(report, null, 2) + '\n'); console.log(JSON.stringify(report, null, 2)); if (report.status !== 'PASS') process.exitCode=1;
})().catch(error => { console.error(error); process.exit(1); });
