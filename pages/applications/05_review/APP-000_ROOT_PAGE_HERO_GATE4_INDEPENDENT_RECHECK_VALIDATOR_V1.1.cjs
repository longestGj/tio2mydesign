/* Independent, read-only targeted recheck for APP-ROOT-HERO-G4-CANDIDATE-02. */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const candidateRoot = 'D:/23MySec/pages/applications/04_planning/visual-designs/app-root-page-hero-v1.1';
const reviewRoot = __dirname;
const candidatePath = path.join(candidateRoot, 'app-root-page-hero-preview-v1.1.html');
const freezePath = path.join(candidateRoot, 'freeze-record.json');
const authorRuntimePath = path.join(candidateRoot, 'capture-runtime-v1.1.json');
const evidencePath = path.join(reviewRoot, 'APP-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_RECHECK_EVIDENCE_V1.1.json');
const expectedNav = ['Home', 'Markets', 'Products', 'Applications', 'Documents', 'Resources', 'About'];
const expectedAnchors = ['#application-coatings', '#application-plastics', '#application-masterbatch', '#application-printing-inks', '#application-paper', '#application-specialty-materials'];
const expectedIntro = 'This hub organizes titanium dioxide grades by application across coatings, plastics, masterbatch, printing inks, paper and specialty materials. Use each collection as a starting point for technical evaluation.';
const expectedM2 = 'Grades to Review are starting points for technical evaluation, not rankings or guarantees of suitability. Open a grade page for product information, or explore an application for guidance on what to evaluate.';
const viewports = [
  { name: 'desktop', width: 1440, height: 980, expectedH1: 56, expectedHeader: 84 },
  { name: 'tablet', width: 768, height: 1180, expectedH1: 44, expectedHeader: 64 },
  { name: 'mobile', width: 390, height: 1280, expectedH1: 36, expectedHeader: 64 }
];
const sha = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const add = (checks, id, pass, observed, expected) => checks.push({ id, pass, observed, expected });

(async () => {
  const checks = [];
  const freeze = JSON.parse(fs.readFileSync(freezePath, 'utf8'));
  add(checks, 'IRR-01', sha(candidatePath) === freeze.candidate.sha256, sha(candidatePath), freeze.candidate.sha256);
  for (const asset of freeze.evidence) {
    const assetPath = path.join(candidateRoot, asset.path);
    add(checks, `IRR-02-${asset.name}`, fs.existsSync(assetPath) && sha(assetPath) === asset.sha256, fs.existsSync(assetPath) ? sha(assetPath) : 'missing', asset.sha256);
  }
  const authorRuntime = JSON.parse(fs.readFileSync(authorRuntimePath, 'utf8'));
  add(checks, 'IRR-03', authorRuntime.status === 'PASS' && authorRuntime.viewports.length === 3 && authorRuntime.viewports.every(v => v.pass), authorRuntime.status, 'PASS / 3 viewports');

  const browser = await chromium.launch({ headless: true });
  const results = [];
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1 });
    await page.goto(`file:///${candidatePath.replace(/\\/g, '/')}`, { waitUntil: 'load' });
    const r = await page.evaluate(() => {
      const text = s => document.querySelector(s)?.textContent.trim() || '';
      const style = s => getComputedStyle(document.querySelector(s));
      const h1 = document.querySelector('h1');
      const h1Style = getComputedStyle(h1);
      const h1Lines = Math.round(h1.getBoundingClientRect().height / parseFloat(h1Style.lineHeight));
      const actions = [...document.querySelectorAll('a,button')].filter(e => {
        const rect = e.getBoundingClientRect();
        return getComputedStyle(e).display !== 'none' && rect.width > 0 && rect.height > 0;
      });
      const actionHeights = actions.map(e => e.getBoundingClientRect().height);
      const cardLinks = [...document.querySelectorAll('.application-links a')];
      const previewHrefs = [...document.querySelectorAll('.application-preview-grid a[href]')].map(a => a.getAttribute('href'));
      const nav = [...document.querySelectorAll('.desktop-nav a')].map(a => a.textContent.trim());
      const shell = document.querySelector('.hero-shell');
      const pseudo = getComputedStyle(shell, '::before');
      return {
        h1: text('h1'), intro: text('.hero-intro'), h1Size: parseFloat(h1Style.fontSize), h1Weight: h1Style.fontWeight, h1Lines,
        header: document.querySelector('.site-header').getBoundingClientRect().height,
        minActionHeight: Math.min(...actionHeights), overflow: document.documentElement.scrollWidth > window.innerWidth,
        currentCount: [...document.querySelectorAll('*')].filter(e => e.children.length === 0 && e.textContent.trim().toUpperCase() === 'CURRENT').length,
        heroBorder: getComputedStyle(shell).borderTopWidth, heroRadius: getComputedStyle(shell).borderTopLeftRadius,
        heroBackground: getComputedStyle(shell).backgroundColor, heroShadow: getComputedStyle(shell).boxShadow,
        heroPseudoContent: pseudo.content, heroPseudoDisplay: pseudo.display,
        primaryHref: document.querySelector('.button-primary')?.getAttribute('href'), secondaryHref: document.querySelector('.button-secondary')?.getAttribute('href'),
        cardLabels: cardLinks.map(a => a.textContent.replace('→', '').trim()), cardHrefs: cardLinks.map(a => a.getAttribute('href')),
        targetIds: cardLinks.map(a => document.querySelector(a.getAttribute('href'))?.id || null), nav,
        firstModule: text('#choose-by-application'), firstModuleText: text('.module-intro'),
        previewHrefs, allApplicationRoutes: [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')).filter(h => /^\/applications\/.+/.test(h))
      };
    });
    results.push({ ...viewport, ...r });
    await page.close();
  }
  await browser.close();

  for (const r of results) {
    add(checks, `IRR-04-${r.name}`, r.h1Size === r.expectedH1 && r.h1Lines <= 3, { size: r.h1Size, lines: r.h1Lines }, { size: r.expectedH1, maxLines: 3 });
    add(checks, `IRR-05-${r.name}`, r.header === r.expectedHeader && r.minActionHeight >= 44 && !r.overflow, { header: r.header, minActionHeight: r.minActionHeight, overflow: r.overflow }, { header: r.expectedHeader, minActionHeight: 44, overflow: false });
    add(checks, `IRR-06-${r.name}`, r.currentCount === 0 && r.heroBorder === '0px' && r.heroRadius === '0px' && r.heroBackground === 'rgba(0, 0, 0, 0)' && r.heroShadow === 'none' && r.heroPseudoContent === 'none' && r.heroPseudoDisplay === 'none', { currentCount: r.currentCount, border: r.heroBorder, radius: r.heroRadius, background: r.heroBackground, shadow: r.heroShadow, pseudo: [r.heroPseudoContent, r.heroPseudoDisplay] }, 'CURRENT=0 / open-white with no exterior decoration');
    add(checks, `IRR-08-${r.name}`, JSON.stringify(r.cardHrefs) === JSON.stringify(expectedAnchors) && JSON.stringify(r.targetIds) === JSON.stringify(expectedAnchors.map(s => s.slice(1))), { hrefs: r.cardHrefs, targets: r.targetIds }, expectedAnchors);
    add(checks, `IRR-10-${r.name}`, JSON.stringify(r.nav) === JSON.stringify(expectedNav), r.nav, expectedNav);
    add(checks, `IRR-11-${r.name}`, r.h1Weight === '700', r.h1Weight, '700');
    add(checks, `IRR-12-${r.name}`, r.previewHrefs.length === 0 && r.allApplicationRoutes.length === 0, { previewHrefs: r.previewHrefs, applicationRoutes: r.allApplicationRoutes }, 'zero child-application routes; no Specialty route');
  }
  const desktop = results[0];
  add(checks, 'IRR-07', desktop.primaryHref === '#application-selector' && desktop.secondaryHref === '/request-a-quote/', { primary: desktop.primaryHref, secondary: desktop.secondaryHref }, { primary: '#application-selector', secondary: '/request-a-quote/' });
  add(checks, 'IRR-09', desktop.h1 === 'Explore Titanium Dioxide by Application' && desktop.intro === expectedIntro && desktop.firstModule === 'Choose by Application' && desktop.firstModuleText === expectedM2, { h1: desktop.h1, intro: desktop.intro, module: desktop.firstModule, moduleText: desktop.firstModuleText }, 'approved Hero copy and M2 transition');

  const result = checks.every(c => c.pass) ? 'PROJECT_CONTROL_REVIEW_PASS' : 'RETURN';
  const evidence = { reviewId: 'APP-ROOT-HERO-G4-IR-02', reviewerRole: 'independent targeted recheck', candidate: { path: candidatePath, sha256: sha(candidatePath) }, freeze: { path: freezePath, sha256: sha(freezePath) }, checks, viewportResults: results, requiredFindings: checks.filter(c => !c.pass).map(c => c.id), result };
  fs.writeFileSync(evidencePath, JSON.stringify(evidence, null, 2) + '\n');
  console.log(JSON.stringify({ result, evidencePath, requiredFindings: evidence.requiredFindings }, null, 2));
  process.exitCode = result === 'PROJECT_CONTROL_REVIEW_PASS' ? 0 : 1;
})().catch(error => { console.error(error.stack || error); process.exit(2); });
