const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const workspace = 'D:/23MySec';
const candidateDir = path.join(workspace, 'pages/applications/04_planning/visual-designs/app-root-page-hero-v1.0');
const reviewDir = __dirname;
const candidate = path.join(candidateDir, 'app-root-page-hero-preview-v1.0.html');
const freeze = path.join(candidateDir, 'freeze-record.json');
const runtime = path.join(candidateDir, 'capture-runtime-v1.0.json');
const output = path.join(reviewDir, 'APP-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_REVIEW_EVIDENCE_V1.0.json');
const digest = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');

function assertion(id, pass, observed, expected) {
  return { id, pass, observed, expected };
}

(async () => {
  const freezeRecord = JSON.parse(fs.readFileSync(freeze, 'utf8'));
  const authorRuntime = JSON.parse(fs.readFileSync(runtime, 'utf8'));
  const browser = await chromium.launch({ headless: true });
  const checks = [];
  const viewportResults = [];
  try {
    checks.push(assertion('IR-01', digest(candidate) === freezeRecord.candidate.sha256, digest(candidate), freezeRecord.candidate.sha256));
    for (const item of freezeRecord.evidence) {
      checks.push(assertion(`IR-02-${item.name}`, digest(path.join(candidateDir, item.path)) === item.sha256, digest(path.join(candidateDir, item.path)), item.sha256));
    }
    checks.push(assertion('IR-03', authorRuntime.status === 'PASS' && authorRuntime.viewports.length === 3, authorRuntime.status, 'PASS with 3 viewports'));

    for (const viewport of [
      { name: 'desktop', width: 1440, height: 980, h1: 56, header: 84 },
      { name: 'tablet', width: 768, height: 1180, h1: 44, header: 64 },
      { name: 'mobile', width: 390, height: 1280, h1: 36, header: 64 }
    ]) {
      const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1 });
      await page.goto(pathToFileURL(candidate).href, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      const result = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        const header = document.querySelector('.site-header');
        const hero = document.querySelector('.hero-shell');
        const card = document.querySelector('.application-card');
        const primary = document.querySelector('.button-primary');
        const secondary = document.querySelector('.button-secondary');
        const cardLabels = [...document.querySelectorAll('.application-links a')].map(a => a.textContent.trim());
        const cardHrefs = [...document.querySelectorAll('.application-links a')].map(a => a.getAttribute('href'));
        const previewHrefs = [...document.querySelectorAll('.application-preview-grid a')].map(a => a.getAttribute('href'));
        const navLabels = [...document.querySelectorAll('.desktop-nav a')].map(a => a.textContent.trim());
        const actions = [...document.querySelectorAll('a,button')].filter(el => {
          const r = el.getBoundingClientRect();
          return r.width > 0 && r.height > 0;
        });
        const range = document.createRange();
        range.selectNodeContents(h1);
        return {
          h1Size: Number.parseFloat(getComputedStyle(h1).fontSize),
          h1Weight: getComputedStyle(h1).fontWeight,
          h1Lines: [...new Set([...range.getClientRects()].map(r => Math.round(r.top)))].length,
          headerHeight: Math.round(header.getBoundingClientRect().height),
          overflow: document.documentElement.scrollWidth > window.innerWidth,
          minActionHeight: Math.min(...actions.map(el => el.getBoundingClientRect().height)),
          currentVisible: /CURRENT/.test(document.body.innerText),
          heroBorder: getComputedStyle(hero).borderTopWidth,
          heroRadius: getComputedStyle(hero).borderTopLeftRadius,
          heroBackground: getComputedStyle(hero).backgroundColor,
          heroShadow: getComputedStyle(hero).boxShadow,
          heroPseudo: getComputedStyle(hero, '::before').content,
          primaryHref: primary.getAttribute('href'),
          secondaryHref: secondary.getAttribute('href'),
          cardLabels,
          cardHrefs,
          previewHrefs,
          navLabels,
          firstModule: document.querySelector('.module-start h2').textContent.trim(),
          firstModuleText: document.querySelector('.module-intro').textContent.trim(),
          cardAfterActions: Boolean(document.querySelector('.hero-actions').compareDocumentPosition(card) & Node.DOCUMENT_POSITION_FOLLOWING)
        };
      });
      viewportResults.push({ ...viewport, ...result });
      await page.close();
    }
  } finally {
    await browser.close();
  }

  const expectedLabels = ['Coatings', 'Plastics', 'Masterbatch', 'Printing Inks', 'Paper', 'Specialty Materials'];
  const desktop = viewportResults.find(item => item.name === 'desktop');
  for (const item of viewportResults) {
    checks.push(assertion(`IR-04-${item.name}`, item.h1Size === item.h1 && item.h1Lines <= 3, { size: item.h1Size, lines: item.h1Lines }, { size: item.h1, maxLines: 3 }));
    checks.push(assertion(`IR-05-${item.name}`, item.headerHeight === item.header && item.minActionHeight >= 44 && !item.overflow, { header: item.headerHeight, minActionHeight: item.minActionHeight, overflow: item.overflow }, { header: item.header, minActionHeight: 44, overflow: false }));
    checks.push(assertion(`IR-06-${item.name}`, !item.currentVisible && item.heroBorder === '0px' && item.heroRadius === '0px' && item.heroBackground === 'rgba(0, 0, 0, 0)' && item.heroShadow === 'none' && item.heroPseudo === 'none', { currentVisible: item.currentVisible, border: item.heroBorder, radius: item.heroRadius, background: item.heroBackground, shadow: item.heroShadow, pseudo: item.heroPseudo }, 'open-white / no CURRENT / no decoration'));
  }
  checks.push(assertion('IR-07', desktop.primaryHref === '#application-selector' && desktop.secondaryHref === '/request-a-quote/', { primary: desktop.primaryHref, secondary: desktop.secondaryHref }, { primary: '#application-selector', secondary: '/request-a-quote/' }));
  checks.push(assertion('IR-08', JSON.stringify(desktop.cardLabels) === JSON.stringify(expectedLabels) && desktop.cardHrefs.every((href, index) => href === `#application-${['coatings','plastics','masterbatch','printing-inks','paper','specialty-materials'][index]}`), { labels: desktop.cardLabels, hrefs: desktop.cardHrefs }, 'six approved same-page application anchors in order'));
  checks.push(assertion('IR-09', desktop.firstModule === 'Choose by Application' && desktop.firstModuleText === 'Grades to Review are starting points for technical evaluation, not rankings or guarantees of suitability. Open a grade page for product information, or explore an application for guidance on what to evaluate.' && desktop.cardAfterActions, { heading: desktop.firstModule, intro: desktop.firstModuleText, cardAfterActions: desktop.cardAfterActions }, 'approved Hero-to-M2 transition'));
  checks.push(assertion('IR-10', JSON.stringify(desktop.navLabels) === JSON.stringify(['Home', 'Markets', 'Products', 'Applications', 'Documents', 'Resources', 'About']), desktop.navLabels, 'complete shared primary-navigation link order before RFQ'));
  checks.push(assertion('IR-11', desktop.h1Weight === '700', desktop.h1Weight, '700'));
  checks.push(assertion('IR-12', !desktop.previewHrefs.includes('/applications/specialty-materials/'), desktop.previewHrefs, 'no sixth Application route; Specialty remains a no-CTA collection / CR-901 path under its existing conditional contract'));

  const evidence = {
    reviewId: 'APP-ROOT-HERO-G4-IR-01',
    reviewerRole: 'independent read-only reviewer',
    candidate: { path: candidate, sha256: digest(candidate) },
    freeze: { path: freeze, sha256: digest(freeze) },
    checks,
    viewportResults,
    result: checks.every(check => check.pass) ? 'PASS' : 'RETURN'
  };
  fs.writeFileSync(output, JSON.stringify(evidence, null, 2) + '\n');
  console.log(JSON.stringify(evidence, null, 2));
  if (evidence.result !== 'PASS') process.exitCode = 1;
})().catch(error => { console.error(error); process.exit(1); });
