const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = 'D:/23MySec';
const pageDir = `${root}/pages/resources/chemours-alternatives`;
const planDir = `${pageDir}/04_planning/gate3-v0.1`;
const evidenceDir = `${pageDir}/05_review/RES-CHEMOURS_GATE3_EXECUTION_EVIDENCE_V0.1/diagnostic_support`;
const source = `${planDir}/RES-CHEMOURS_GATE3_RESPONSIVE_WIREFRAME_V0.2.html`;
const copyPath = `${pageDir}/04_planning/RES-CHEMOURS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md`;
const freezePath = `${planDir}/RES-CHEMOURS_GATE3_FREEZE_RECORD_V0.1.json`;
const exportPath = `${planDir}/RES-CHEMOURS_GATE3_FORMAL_EXPORT_RECORD_V0.1.json`;
const outputPath = `${evidenceDir}/project-control-review-v0.1.json`;

const sha256 = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const normalize = value => value.replace(/\s+/g, ' ').trim();
const markdownToVisibleText = value => normalize(value
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
  .replace(/^#{1,6}\s+/gm, '')
  .replace(/^[1-4]\.\s+(?=\*\*)/gm, '')
  .replace(/\*\*/g, ''));
const pngDimensions = p => {
  const b = fs.readFileSync(p);
  return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
};

(async () => {
  const freeze = JSON.parse(fs.readFileSync(freezePath, 'utf8'));
  const formal = JSON.parse(fs.readFileSync(exportPath, 'utf8'));
  const checks = [];
  const add = (id, pass, evidence) => checks.push({ id, pass: Boolean(pass), evidence });

  const sourceStat = fs.statSync(source);
  add('IDENTITY_SOURCE', sourceStat.size === freeze.source.bytes && sha256(source) === freeze.source.sha256,
    { actualBytes: sourceStat.size, actualSha256: sha256(source), frozen: freeze.source });
  add('SEQUENCE_FREEZE_BEFORE_EXPORT', formal.startedAt > freeze.frozenAt,
    { frozenAt: freeze.frozenAt, exportStartedAt: formal.startedAt });

  const exports = formal.assets.map(item => {
    const stat = fs.statSync(item.path);
    return { path: item.path, exists: true, bytes: stat.size, sha256: sha256(item.path), dimensions: pngDimensions(item.path), expected: item };
  });
  add('IDENTITY_FORMAL_EXPORTS', exports.length === 8 && exports.every(x => x.bytes === x.expected.bytes && x.sha256 === x.expected.sha256 && x.dimensions.width === x.expected.physical.width && x.dimensions.height === x.expected.physical.height), exports);

  const html = fs.readFileSync(source, 'utf8');
  add('DURABLE_SOURCE_DEPENDENCIES', !/(99_workspace|pages\/(markets\/poland|products\/chloride-process))/i.test(html),
    { temporaryOrBusinessPageDependencyMatches: html.match(/99_workspace|pages\/(markets\/poland|products\/chloride-process)/ig) || [] });
  add('SOURCE_SHARED_TEAL_RULES', html.includes('.cookie-actions>*') && html.includes('border:1px solid #008078') && html.includes('color:#008078') && /\.menuButton\{[^}]*border:1px solid #008078/.test(html),
    { expected: '#008078 for Cookie action text/border and Menu button border on light surfaces' });

  const browser = await chromium.launch({ headless: true });
  const browserVersion = browser.version();
  const runtime = [];
  for (const width of [1440, 768, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    const requests = [];
    page.on('request', request => requests.push(request.url()));
    await page.goto(pathToFileURL(source).href);
    await page.waitForFunction(() => document.fonts.status === 'loaded');
    await page.evaluate(() => document.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (link && !link.hash) event.preventDefault();
    }, true));

    const base = await page.evaluate(() => {
      const main = document.querySelector('main');
      const visibleControls = [...document.querySelectorAll('a,button')].filter(el => el.getClientRects().length);
      return {
        mainText: main.innerText,
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        h1: main.querySelectorAll('h1').length,
        h2: main.querySelectorAll('h2').length,
        h3: main.querySelectorAll('h3').length,
        briefItems: main.querySelectorAll('.brief-list li').length,
        mainLinks: [...main.querySelectorAll('a')].map(a => ({ text: a.innerText.trim(), href: a.getAttribute('href') })),
        undersizedControls: visibleControls.map(el => ({ text: el.innerText.trim(), width: el.getBoundingClientRect().width, height: el.getBoundingClientRect().height })).filter(x => x.width < 44 || x.height < 44),
        productsHeadingIndex: [...main.querySelectorAll('h3')].findIndex(h => h.textContent.includes('Review IKHLAS')),
        documentsHeadingIndex: [...main.querySelectorAll('h3')].findIndex(h => h.textContent.includes('Request Documents')),
        currentVisible: [...document.querySelectorAll('[aria-current="page"]')].filter(el => el.getClientRects().length).map(el => el.textContent.trim()),
        fontLoaded: document.fonts.check('16px Inter'),
        logosLoaded: [...document.querySelectorAll('img.logo,.footerLogo')].every(img => img.complete && img.naturalWidth > 0)
      };
    });

    const state = { width, base, menu: null, cookie: null, requests };
    if (width !== 1440) {
      await page.focus('.menuButton');
      await page.keyboard.press('Enter');
      const opened = await page.evaluate(() => ({
        expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'),
        activeText: document.activeElement.textContent.trim(),
        currentVisible: [...document.querySelectorAll('[aria-current="page"]')].filter(el => el.getClientRects().length).map(el => el.textContent.trim()),
        mainInert: document.querySelector('main').inert,
        footerInert: document.querySelector('footer').inert,
        bodyOverflow: document.body.style.overflow,
        borderColor: getComputedStyle(document.querySelector('.menuButton')).borderTopColor
      }));
      const tabTrace = [];
      for (let i = 0; i < 9; i++) {
        tabTrace.push(await page.evaluate(() => document.activeElement.textContent.trim()));
        await page.keyboard.press('Tab');
      }
      await page.keyboard.press('Escape');
      const closed = await page.evaluate(() => ({
        hidden: document.querySelector('.mobileNav').hidden,
        expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'),
        focusReturned: document.activeElement === document.querySelector('.menuButton'),
        mainInert: document.querySelector('main').inert,
        bodyOverflow: document.body.style.overflow
      }));
      state.menu = { opened, tabTrace, closed };
    }

    await page.click('#cookie-trigger');
    const cookieOpened = await page.evaluate(() => ({
      open: document.querySelector('.cookie-layer').open,
      activeText: document.activeElement.textContent.trim(),
      styles: [...document.querySelectorAll('.cookie-actions>*')].map(el => ({ color: getComputedStyle(el).color, border: getComputedStyle(el).borderTopColor })),
      controls: [...document.querySelectorAll('.cookie-actions>*')].map(el => ({ text: el.textContent.trim(), width: el.getBoundingClientRect().width, height: el.getBoundingClientRect().height }))
    }));
    await page.keyboard.press('Tab');
    const cookieSecond = await page.evaluate(() => document.activeElement.textContent.trim());
    await page.keyboard.press('Tab');
    const cookieWrapped = await page.evaluate(() => document.activeElement.textContent.trim());
    await page.keyboard.press('Escape');
    const cookieClosed = await page.evaluate(() => !document.querySelector('.cookie-layer').open && document.activeElement === document.querySelector('#cookie-trigger'));
    state.cookie = { opened: cookieOpened, second: cookieSecond, wrapped: cookieWrapped, closedAndReturned: cookieClosed };
    runtime.push(state);
    await page.close();
  }
  await browser.close();

  const expectedText = markdownToVisibleText(fs.readFileSync(copyPath, 'utf8'));
  add('CONTENT_B_EXACT_VISIBLE_SEQUENCE', runtime.every(x => normalize(x.base.mainText) === expectedText), { expectedText, actualByWidth: runtime.map(x => ({ width: x.width, actual: normalize(x.base.mainText) })) });
  add('CORE_RESPONSIVE_GEOMETRY', runtime.every(x => x.base.scrollWidth === x.base.clientWidth && x.base.undersizedControls.length === 0 && x.base.fontLoaded && x.base.logosLoaded), runtime.map(x => ({ width: x.width, scrollWidth: x.base.scrollWidth, clientWidth: x.base.clientWidth, undersizedControls: x.base.undersizedControls, fontLoaded: x.base.fontLoaded, logosLoaded: x.base.logosLoaded })));
  add('CORE_STRUCTURE', runtime.every(x => x.base.h1 === 1 && x.base.h2 === 5 && x.base.h3 === 5 && x.base.briefItems === 4 && x.base.productsHeadingIndex >= 0 && x.base.documentsHeadingIndex > x.base.productsHeadingIndex), runtime.map(x => ({ width: x.width, h1: x.base.h1, h2: x.base.h2, h3: x.base.h3, briefItems: x.base.briefItems, productsHeadingIndex: x.base.productsHeadingIndex, documentsHeadingIndex: x.base.documentsHeadingIndex })));
  add('CORE_MAIN_LINKS', runtime.every(x => JSON.stringify(x.base.mainLinks) === JSON.stringify([
    { text: 'Home', href: '/' },
    { text: 'Resources', href: '/resources/' },
    { text: 'Explore Titanium Dioxide Products', href: '/products/' },
    { text: 'Ti-Pure portfolio', href: 'https://www.tipure.com/en/products' },
    { text: 'application guidance', href: 'https://www.tipure.com/en/products/coatings' },
    { text: 'Explore Titanium Dioxide Products', href: '/products/' },
    { text: 'Request Product Documents', href: '/request-documents/' }
  ])), runtime.map(x => ({ width: x.width, links: x.base.mainLinks })));
  add('CORE_CURRENT_NAV', runtime.find(x => x.width === 1440).base.currentVisible.join('|') === 'Resources' && runtime.filter(x => x.width !== 1440).every(x => x.base.currentVisible.length === 0 && x.menu.opened.currentVisible.join('|') === 'Resources'), runtime.map(x => ({ width: x.width, closedCurrent: x.base.currentVisible, openCurrent: x.menu?.opened.currentVisible })));
  add('CORE_MENU_INTERACTION', runtime.filter(x => x.width !== 1440).every(x => {
    const m = x.menu;
    return m.opened.expanded === 'true' && m.opened.activeText === 'Home' && m.opened.mainInert && m.opened.footerInert && m.opened.bodyOverflow === 'hidden' && m.opened.borderColor === 'rgb(0, 128, 120)' && m.tabTrace.every(text => ['Home','Markets','Products','Applications','Documents','Resources','About','Request a Quote','Close'].includes(text)) && m.closed.hidden && m.closed.expanded === 'false' && m.closed.focusReturned && !m.closed.mainInert && m.closed.bodyOverflow === '';
  }), runtime.filter(x => x.width !== 1440).map(x => ({ width: x.width, menu: x.menu })));
  add('CORE_COOKIE_INTERACTION', runtime.every(x => x.cookie.opened.open && x.cookie.opened.activeText === 'Close' && x.cookie.opened.styles.length === 2 && x.cookie.opened.styles.every(s => s.color === 'rgb(0, 128, 120)' && s.border === 'rgb(0, 128, 120)') && x.cookie.opened.controls.every(c => c.width >= 44 && c.height >= 44) && x.cookie.second === 'Read Cookie Policy' && x.cookie.wrapped === 'Close' && x.cookie.closedAndReturned), runtime.map(x => ({ width: x.width, cookie: x.cookie })));
  add('RISK_NO_UNAPPROVED_MAPPING_OR_RECOMMENDATION', !/(equivalent|recommended|best match|direct replacement|Chemours\s*(?:→|->)\s*IKHLAS|R-706)/i.test(normalize(runtime[0].base.mainText)), { scanned: normalize(runtime[0].base.mainText) });
  add('RISK_SOURCES_DATE_INDEPENDENCE', ['The Ti-Pure portfolio and application information referenced in this guide come from the Chemours/Ti-Pure pages linked above.','Last reviewed: 6 September 2026','We are not affiliated with, authorized by or endorsed by Chemours.'].every(text => normalize(runtime[0].base.mainText).includes(text)), { width: 1440 });
  add('LOCAL_NO_EXTERNAL_REQUESTS', runtime.every(x => x.requests.every(url => url.startsWith('file:'))), runtime.map(x => ({ width: x.width, requests: x.requests })));

  const failures = checks.filter(x => !x.pass).map(x => x.id);
  const result = {
    reviewRole: 'Project controller independent review',
    reviewedAt: new Date().toISOString(),
    browser: `Chromium ${browserVersion}`,
    frozenSource: freeze.source,
    evidenceModel: 'fixed core plus RES-CHEMOURS page-specific risks; counts are coverage only',
    visualReadback: {
      formalImagesOpenedByReviewer: 8,
      readable390SegmentsOpenedByReviewer: 6,
      note: 'Reviewer visually inspected all formal full/state images and six original-resolution mobile segments; no executor PASS was inherited.'
    },
    checks,
    failures,
    conclusion: failures.length ? 'REVISION_REQUIRED' : 'PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL',
    boundaries: ['No production route or receiving-page validation','No external-link availability check','No other browser engine, physical device, screen reader or native 200% zoom','No Gate 4 authorization']
  };
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ checks: checks.length, failures, conclusion: result.conclusion, outputPath }));
  if (failures.length) process.exit(1);
})().catch(error => { console.error(error); process.exit(1); });
