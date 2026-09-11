const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = path.resolve(__dirname, '..', '04_planning', 'visual-designs', 'market-root-page-hero-v1.0');
const candidate = path.join(root, 'market-root-page-hero-preview-v1.0.html');
const freeze = JSON.parse(fs.readFileSync(path.join(root, 'freeze-record.json'), 'utf8'));
const expectedNav = ['Home', 'Markets', 'Products', 'Applications', 'Documents', 'Resources', 'About'];
const expectedOrder = ['Germany', 'Italy', 'Spain', 'Poland', 'Netherlands', 'Belgium', 'United Kingdom', 'India', 'Brazil'];
const expectedCopy = {
  eyebrow: 'Destination market navigation',
  h1: 'Choose Your Destination Market',
  intro: 'Start with the region or country where your procurement requirements need to be reviewed. This hub explains which market path to choose and where product, application, document, trade-update, and quotation questions belong.'
};
const viewports = [
  { name: 'desktop', width: 1440, height: 980, h1: 56, header: 84 },
  { name: 'tablet', width: 768, height: 1180, h1: 44, header: 64 },
  { name: 'mobile', width: 390, height: 1280, h1: 36, header: 64 }
];
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  try {
    for (const viewport of viewports) {
      const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1 });
      await page.goto(`file:///${candidate.replace(/\\/g, '/')}`, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      const result = await page.evaluate(({ expectedCopy, expectedNav, expectedOrder }) => {
        const h1 = document.querySelector('h1');
        const hero = document.querySelector('.hero-shell');
        const primary = document.querySelector('.button-primary');
        const card = document.querySelector('.market-card');
        const range = document.createRange(); range.selectNodeContents(h1);
        const h1Lines = new Set([...range.getClientRects()].map(rect => Math.round(rect.top))).size;
        const actionHeights = [...document.querySelectorAll('a,button')].filter(el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; }).map(el => el.getBoundingClientRect().height);
        const pseudo = getComputedStyle(hero, '::before');
        const heroStyle = getComputedStyle(hero);
        const cardRect = card.getBoundingClientRect();
        const nav = [...document.querySelectorAll('.desktop-nav a')].map(link => link.textContent.trim());
        const destinationOrder = [...document.querySelectorAll('.country-list div, .market-row h3')].map(el => el.textContent.trim());
        const childMarketHrefs = [...document.querySelectorAll('[href]')].map(el => el.getAttribute('href')).filter(href => /^\/markets\/.+/.test(href));
        return {
          eyebrow: document.querySelector('.eyebrow').textContent.trim(),
          h1: h1.textContent.trim(),
          intro: document.querySelector('.hero-intro').textContent.trim(),
          h1FontSize: Number.parseFloat(getComputedStyle(h1).fontSize),
          h1Weight: getComputedStyle(h1).fontWeight,
          h1LineCount: h1Lines,
          headerHeight: document.querySelector('.site-header').getBoundingClientRect().height,
          minInteractiveHeight: Math.min(...actionHeights),
          overflow: document.documentElement.scrollWidth > innerWidth,
          currentWordPresent: /\bCURRENT\b/.test(document.body.innerText),
          primaryHref: primary.getAttribute('href'),
          primaryTargetResolves: primary.getAttribute('href') === '#destination-selector' && Boolean(document.querySelector('#destination-selector')),
          nav,
          activeNav: document.querySelector('.desktop-nav [aria-current="page"]')?.textContent.trim(),
          childMarketHrefs,
          ptbrPresent: /PT-BR|Portuguese/i.test(document.body.innerText),
          destinationOrder,
          infoMediaVisible: cardRect.width > 0 && cardRect.height > 0,
          heroBorder: heroStyle.borderTopWidth,
          heroRadius: heroStyle.borderTopLeftRadius,
          heroShadow: heroStyle.boxShadow,
          pseudoContent: pseudo.content,
          pseudoDisplay: pseudo.display,
          copyMatches: document.querySelector('.eyebrow').textContent.trim() === expectedCopy.eyebrow && h1.textContent.trim() === expectedCopy.h1 && document.querySelector('.hero-intro').textContent.trim() === expectedCopy.intro,
          navMatches: JSON.stringify(nav) === JSON.stringify(expectedNav),
          destinationOrderMatches: JSON.stringify(destinationOrder) === JSON.stringify(expectedOrder)
        };
      }, { expectedCopy, expectedNav, expectedOrder });
      result.name = viewport.name;
      result.width = viewport.width;
      result.height = viewport.height;
      result.pass = result.copyMatches && result.h1FontSize === viewport.h1 && result.h1Weight === '700' && result.h1LineCount <= 3 && result.headerHeight === viewport.header && result.minInteractiveHeight >= 44 && !result.overflow && !result.currentWordPresent && result.primaryTargetResolves && result.navMatches && result.activeNav === 'Markets' && result.childMarketHrefs.length === 0 && !result.ptbrPresent && result.destinationOrderMatches && result.infoMediaVisible && result.pseudoContent === 'none' && result.pseudoDisplay === 'none';
      results.push(result);
      await page.close();
    }
  } finally { await browser.close(); }
  const source = fs.readFileSync(candidate, 'utf8');
  const staticChecks = {
    candidateShaMatchesFreeze: hash(candidate) === freeze.candidate.sha256,
    allFrozenEvidenceMatches: freeze.evidence.every(item => hash(path.join(root, item.path)) === item.sha256),
    noProvisionalMarketRouteToken: !['/markets/european-union/', '/markets/germany/', '/markets/italy/', '/markets/spain/', '/markets/poland/', '/markets/netherlands/', '/markets/belgium/', '/markets/united-kingdom/', '/markets/india/', '/markets/brazil/'].some(token => source.includes(token)),
    noPtbrToken: !/PT-BR|Portuguese/i.test(source),
    noSchemaPayload: !/application\/ld\+json|CollectionPage|ItemList|BreadcrumbList/.test(source)
  };
  const status = results.every(result => result.pass) && Object.values(staticChecks).every(Boolean) ? 'PASS' : 'RETURN';
  console.log(JSON.stringify({ reviewId: 'MARKET-ROOT-HERO-G4-IR-01', candidate: path.basename(candidate), status, staticChecks, viewports: results }, null, 2));
  process.exitCode = status === 'PASS' ? 0 : 1;
})().catch(error => { console.error(error.stack || error); process.exit(2); });
