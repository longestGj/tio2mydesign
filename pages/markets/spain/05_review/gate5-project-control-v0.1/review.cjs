const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const reviewDir = __dirname;
const pageDir = path.resolve(reviewDir, '../../04_planning/gate5-v0.1');
const htmlPath = path.join(pageDir, 'MARKET-EU-ES_GATE5_COMPLETE_VISUAL_V0.1.html');
const gate4Path = path.resolve(pageDir, '../gate4-v0.1/MARKET-EU-ES_GATE4_VISUAL_SAMPLES_V0.1.html');
const freezePath = path.join(pageDir, 'approval_core/source-freeze.json');
const inventoryPath = path.join(pageDir, 'approval_core/export-inventory.json');
const rerenderDir = path.join(reviewDir, 'rerender');
const reportPath = path.join(reviewDir, 'independent-review.json');
const fileUrl = `file:///${htmlPath.replace(/\\/g, '/')}`;

const expected = {
  title: 'Titanium Dioxide Supplier for Spain | TiO2 Malaysia',
  description: 'Explore Malaysia-origin titanium dioxide for your project in Spain. Review product grades and document needs, then request a quote for your requirements.',
  canonical: 'https://tio2malaysia.com/markets/spain/',
  robots: 'noindex,nofollow',
  headings: [
    'Titanium Dioxide Supplier for Spain',
    'Review TiO2 for Your Application',
    'Coatings',
    'Plastics & Masterbatch',
    'Documents for Your Product Review',
    'Request a Quote for Delivery to Spain',
  ],
  links: [
    ['Home', '/'], ['Markets', '/markets/'], ['European Union', '/markets/european-union/'],
    ['Request a Quote', '/request-a-quote/'], ['Explore Products', '/products/'],
    ['TiO2 for Coatings', '/applications/titanium-dioxide-for-coatings/'],
    ['TiO2 for Plastics', '/applications/titanium-dioxide-for-plastics/'],
    ['TiO2 for Masterbatch', '/applications/titanium-dioxide-for-masterbatch/'],
    ['Explore Products', '/products/'], ['Request Documents', '/request-documents/'],
    ['View Document Hub', '/documents/'], ['Request a Quote', '/request-a-quote/'],
    ['EU Procurement Overview', '/markets/european-union/'],
    ['EU TiO2 Trade Update', '/resources/eu-titanium-dioxide-anti-dumping-duty/'],
  ],
  paragraphs: [
    'Malaysia-origin titanium dioxide for industrial procurement in Spain. Explore grades for coatings, plastics and masterbatch applications, or send us your application, quantity and delivery requirements for a quotation.',
    'A Certificate of Origin is available upon request.',
    'After you submit your quotation request, our team will review your requirements and contact you using the details provided.',
  ],
  breadcrumbs: [
    [1, 'Home', 'https://tio2malaysia.com/'],
    [2, 'Markets', 'https://tio2malaysia.com/markets/'],
    [3, 'European Union', 'https://tio2malaysia.com/markets/european-union/'],
    [4, 'Spain', 'https://tio2malaysia.com/markets/spain/'],
  ],
};

const viewportSpecs = [
  { name: '1440', width: 1440, height: 900, dpr: 1, file: '1440-full-page.png' },
  { name: '768', width: 768, height: 900, dpr: 1, file: '768-full-page.png' },
  { name: '390', width: 390, height: 844, dpr: 2, file: '390-full-page@2x.png' },
];

const sha256 = value => crypto.createHash('sha256').update(value).digest('hex');
const normalize = value => value.replace(/\s+/g, ' ').trim();
const assert = (condition, id, detail, findings) => {
  if (!condition) findings.push({ id, detail });
};
const readHash = p => sha256(fs.readFileSync(p));

(async () => {
  fs.mkdirSync(rerenderDir, { recursive: true });
  const findings = [];
  const freeze = JSON.parse(fs.readFileSync(freezePath, 'utf8'));
  const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));

  const frozenChecks = [...(freeze.dependencies || []), ...(freeze.inputs || [])].map(entry => {
    const actualBytes = fs.statSync(entry.path).size;
    const actualSha256 = readHash(entry.path);
    return { path: entry.path, expectedBytes: entry.bytes, actualBytes, expectedSha256: entry.sha256, actualSha256, match: actualBytes === entry.bytes && actualSha256 === entry.sha256 };
  });
  const reconciledEntryDriftPaths = new Set([
    path.resolve('D:/23MySec/AGENTS.md'),
    path.resolve('D:/23MySec/PROJECT_CONTEXT.md'),
    path.resolve('D:/23MySec/02_DIRECTORY_GUIDE.md'),
    path.resolve('D:/23MySec/docs/architecture/GATE5_TWO_ELIGIBLE_PAGE_SERIAL_CONTROL_V1.0.md'),
  ]);
  const reconciledEntryDrift = frozenChecks.filter(item => !item.match && reconciledEntryDriftPaths.has(path.resolve(item.path)));
  const unreconciledFrozenDrift = frozenChecks.filter(item => !item.match && !reconciledEntryDriftPaths.has(path.resolve(item.path)));
  assert(frozenChecks.length === 51, 'ES-PC-FREEZE-COUNT', `Expected 51 frozen records; found ${frozenChecks.length}`, findings);
  assert(unreconciledFrozenDrift.length === 0, 'ES-PC-FREEZE-HASH', JSON.stringify(unreconciledFrozenDrift), findings);
  assert(reconciledEntryDrift.length === 4, 'ES-PC-ENTRY-DRIFT-SCOPE', JSON.stringify(reconciledEntryDrift), findings);

  const currentAuthorities = [
    'D:/23MySec/docs/architecture/GATE_WORKFLOW_V2.0.md',
    'D:/23MySec/docs/architecture/PAGE_GATE_1_5_STANDARD_V1.2.md',
    'D:/23MySec/docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.1.md',
  ].map(authorityPath => ({ path: authorityPath, bytes: fs.statSync(authorityPath).size, sha256: readHash(authorityPath) }));
  const currentAgent = fs.readFileSync('D:/23MySec/AGENTS.md', 'utf8');
  assert(currentAgent.includes('GATE_WORKFLOW_V2.0.md') && currentAgent.includes('PAGE_GATE_1_5_STANDARD_V1.2.md') && currentAgent.includes('PROJECT_GOVERNANCE_DETAILS_V1.1.md'), 'ES-PC-CURRENT-AUTHORITY', 'Current root entry does not point to the reconciled V2.0/V1.2/V1.1 authorities', findings);

  const exportChecks = inventory.assets.map(entry => {
    const p = path.join(pageDir, 'approval_core', entry.file);
    const actualBytes = fs.statSync(p).size;
    const actualSha256 = readHash(p);
    return { file: entry.file, expectedBytes: entry.bytes, actualBytes, expectedSha256: entry.sha256, actualSha256, match: actualBytes === entry.bytes && actualSha256 === entry.sha256 };
  });
  assert(exportChecks.length === 14, 'ES-PC-EXPORT-COUNT', `Expected 14 formal exports; found ${exportChecks.length}`, findings);
  assert(exportChecks.every(item => item.match), 'ES-PC-EXPORT-HASH', 'One or more formal exports changed', findings);

  const html = fs.readFileSync(htmlPath, 'utf8');
  const gate4 = fs.readFileSync(gate4Path, 'utf8');
  const body = html.match(/<body>[\s\S]*<\/body>/)?.[0];
  const gate4Body = gate4.match(/<body>[\s\S]*<\/body>/)?.[0];
  assert(body === gate4Body, 'ES-PC-G4-BODY', 'Gate 5 visible body differs from approved Gate 4 source', findings);

  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const renderChecks = [];
  const viewportChecks = [];

  for (const spec of viewportSpecs) {
    const context = await browser.newContext({ viewport: { width: spec.width, height: spec.height }, deviceScaleFactor: spec.dpr });
    const page = await context.newPage();
    const pageErrors = [];
    const failedRequests = [];
    page.on('pageerror', error => pageErrors.push(String(error)));
    page.on('requestfailed', request => failedRequests.push({ url: request.url(), error: request.failure()?.errorText }));
    await page.goto(fileUrl, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);

    const data = await page.evaluate(({ expected }) => {
      const main = document.querySelector('main');
      const headings = [...main.querySelectorAll('h1,h2,h3')].map(node => normalizeWhitespace(node.textContent));
      const links = [...main.querySelectorAll('a')].map(node => [normalizeWhitespace(node.textContent), node.getAttribute('href')]);
      const visibleControls = [...document.querySelectorAll('a,button')].filter(node => {
        const rect = node.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 && !node.closest('[hidden]') && !node.closest('dialog:not([open])');
      }).map(node => {
        const rect = node.getBoundingClientRect();
        return { text: normalizeWhitespace(node.textContent), width: rect.width, height: rect.height };
      });
      const graph = JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)['@graph'];
      const webPage = graph.find(node => node['@type'] === 'WebPage');
      const breadcrumbList = graph.find(node => node['@type'] === 'BreadcrumbList');
      return {
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        robots: document.querySelector('meta[name="robots"]')?.content,
        lang: document.documentElement.lang,
        headings,
        h1Count: main.querySelectorAll('h1').length,
        sectionIds: [...main.querySelectorAll(':scope > section')].map(node => node.id),
        links,
        paragraphsPresent: expected.paragraphs.map(text => normalizeWhitespace(main.innerText).includes(text)),
        cooCount: (main.innerText.match(/A Certificate of Origin is available upon request\./g) || []).length,
        afterSubmitCount: (main.innerText.match(/After you submit your quotation request, our team will review your requirements and contact you using the details provided\./g) || []).length,
        dimensions: { scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth, scrollHeight: document.documentElement.scrollHeight },
        minControl: { width: Math.min(...visibleControls.map(control => control.width)), height: Math.min(...visibleControls.map(control => control.height)), count: visibleControls.length },
        font: getComputedStyle(main.querySelector('h1')).fontFamily,
        logoCount: document.querySelectorAll('img[src*="tio2-malaysia-"]').length,
        mainMediaCount: main.querySelectorAll('img,picture,video').length,
        currentDesktop: document.querySelector('.desktopNav a[aria-current="page"]')?.textContent.trim(),
        currentMobile: document.querySelector('.mobileNav a[aria-current="page"]')?.textContent.trim(),
        webPage,
        breadcrumbs: breadcrumbList.itemListElement.map(item => [item.position, item.name, item.item]),
      };
      function normalizeWhitespace(value) { return value.replace(/\s+/g, ' ').trim(); }
    }, { expected });

    assert(data.title === expected.title, `ES-PC-${spec.name}-TITLE`, data.title, findings);
    assert(data.description === expected.description, `ES-PC-${spec.name}-DESCRIPTION`, data.description, findings);
    assert(data.canonical === expected.canonical, `ES-PC-${spec.name}-CANONICAL`, data.canonical, findings);
    assert(data.robots === expected.robots && data.lang === 'en', `ES-PC-${spec.name}-INDEX-LANG`, `${data.robots}; ${data.lang}`, findings);
    assert(JSON.stringify(data.headings) === JSON.stringify(expected.headings) && data.h1Count === 1, `ES-PC-${spec.name}-HEADINGS`, JSON.stringify(data.headings), findings);
    assert(data.sectionIds.join(',') === 'es-01,es-02,es-03,es-04', `ES-PC-${spec.name}-ORDER`, data.sectionIds.join(','), findings);
    assert(JSON.stringify(data.links) === JSON.stringify(expected.links), `ES-PC-${spec.name}-LINKS`, JSON.stringify(data.links), findings);
    assert(data.paragraphsPresent.every(Boolean) && data.cooCount === 1 && data.afterSubmitCount === 1, `ES-PC-${spec.name}-COPY`, JSON.stringify({ paragraphsPresent: data.paragraphsPresent, cooCount: data.cooCount, afterSubmitCount: data.afterSubmitCount }), findings);
    assert(data.dimensions.scrollWidth === data.dimensions.clientWidth, `ES-PC-${spec.name}-OVERFLOW`, JSON.stringify(data.dimensions), findings);
    assert(data.minControl.width >= 44 && data.minControl.height >= 44, `ES-PC-${spec.name}-TARGET`, JSON.stringify(data.minControl), findings);
    assert(data.font.includes('Inter') && data.logoCount === 2 && data.mainMediaCount === 0, `ES-PC-${spec.name}-BRAND-MEDIA`, JSON.stringify({ font: data.font, logoCount: data.logoCount, mainMediaCount: data.mainMediaCount }), findings);
    assert(data.currentDesktop === 'Markets' && data.currentMobile === 'Markets', `ES-PC-${spec.name}-CURRENT`, JSON.stringify({ desktop: data.currentDesktop, mobile: data.currentMobile }), findings);
    assert(data.webPage?.url === expected.canonical && data.webPage?.name === expected.title && data.webPage?.description === expected.description && data.webPage?.inLanguage === 'en', `ES-PC-${spec.name}-WEBPAGE-SCHEMA`, JSON.stringify(data.webPage), findings);
    assert(JSON.stringify(data.breadcrumbs) === JSON.stringify(expected.breadcrumbs), `ES-PC-${spec.name}-BREADCRUMB-SCHEMA`, JSON.stringify(data.breadcrumbs), findings);

    const mainLinks = page.locator('main a');
    const navigationIntents = [];
    for (let index = 0; index < await mainLinks.count(); index += 1) {
      await mainLinks.nth(index).click();
      navigationIntents.push(await page.evaluate(() => window.__navigationIntents.at(-1)));
    }
    const rfqIntents = navigationIntents.filter(item => item.href === '/request-a-quote/');
    const documentIntents = navigationIntents.filter(item => item.href === '/request-documents/');
    assert(rfqIntents.length === 2 && rfqIntents.every(item => JSON.stringify(item.context) === JSON.stringify({ source_page_id: 'MARKET-EU-ES', destination_country: 'Spain', destination_editable: true })), `ES-PC-${spec.name}-RFQ-INTENT`, JSON.stringify(rfqIntents), findings);
    assert(documentIntents.length === 1 && JSON.stringify(documentIntents[0].context) === JSON.stringify({ source_page_id: 'MARKET-EU-ES' }), `ES-PC-${spec.name}-DOCUMENT-INTENT`, JSON.stringify(documentIntents), findings);
    assert(navigationIntents.every(item => item.mode === 'LOCAL_NAVIGATION_INTENT_ONLY'), `ES-PC-${spec.name}-NAV-MODE`, JSON.stringify(navigationIntents), findings);

    let menu = null;
    if (spec.width < 1101) {
      const toggle = page.locator('.menuButton');
      await toggle.focus();
      await page.keyboard.press('Enter');
      const opened = await page.evaluate(() => ({
        expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'),
        active: document.activeElement?.textContent.trim(),
        overflow: document.body.style.overflow,
        mainInert: document.querySelector('main').inert,
        footerInert: document.querySelector('footer').inert,
        hidden: document.querySelector('.mobileNav').hidden,
      }));
      await page.keyboard.press('Shift+Tab');
      const shiftLoop = await page.evaluate(() => document.activeElement?.textContent.trim());
      await page.keyboard.press('Tab');
      const forwardLoop = await page.evaluate(() => document.activeElement?.textContent.trim());
      await page.keyboard.press('Escape');
      const closed = await page.evaluate(() => ({
        expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'),
        activeClass: document.activeElement?.className,
        overflow: document.body.style.overflow,
        hidden: document.querySelector('.mobileNav').hidden,
      }));
      menu = { opened, shiftLoop, forwardLoop, closed };
      assert(opened.expanded === 'true' && opened.active === 'Home' && opened.overflow === 'hidden' && opened.mainInert && opened.footerInert && !opened.hidden, `ES-PC-${spec.name}-MENU-OPEN`, JSON.stringify(opened), findings);
      assert(shiftLoop === 'Close' && forwardLoop === 'Home', `ES-PC-${spec.name}-MENU-LOOP`, JSON.stringify({ shiftLoop, forwardLoop }), findings);
      assert(closed.expanded === 'false' && closed.activeClass === 'menuButton' && closed.overflow === '' && closed.hidden, `ES-PC-${spec.name}-MENU-CLOSE`, JSON.stringify(closed), findings);
    }

    const cookieTrigger = page.locator('#cookie-trigger');
    await cookieTrigger.scrollIntoViewIfNeeded();
    const visibleScrollY = await page.evaluate(() => window.scrollY);
    await cookieTrigger.focus();
    await page.keyboard.press('Enter');
    const cookieOpened = await page.evaluate(() => ({ open: document.querySelector('dialog').open, active: document.activeElement?.textContent.trim() }));
    await page.keyboard.press('Shift+Tab');
    const cookieShiftLoop = await page.evaluate(() => document.activeElement?.textContent.trim());
    await page.keyboard.press('Tab');
    const cookieForwardLoop = await page.evaluate(() => document.activeElement?.textContent.trim());
    await page.keyboard.press('Escape');
    const cookieClosed = await page.evaluate(() => ({ open: document.querySelector('dialog').open, activeId: document.activeElement?.id }));
    assert(visibleScrollY > 0, `ES-PC-${spec.name}-VISIBLE-SCROLL`, String(visibleScrollY), findings);
    assert(cookieOpened.open && cookieOpened.active === 'Close', `ES-PC-${spec.name}-COOKIE-OPEN`, JSON.stringify(cookieOpened), findings);
    assert(cookieShiftLoop === 'Read Cookie Policy' && cookieForwardLoop === 'Close', `ES-PC-${spec.name}-COOKIE-LOOP`, JSON.stringify({ cookieShiftLoop, cookieForwardLoop }), findings);
    assert(!cookieClosed.open && cookieClosed.activeId === 'cookie-trigger', `ES-PC-${spec.name}-COOKIE-CLOSE`, JSON.stringify(cookieClosed), findings);

    await page.mouse.move(spec.width - 1, 1);
    await page.evaluate(() => document.activeElement instanceof HTMLElement && document.activeElement.blur());
    await page.waitForTimeout(30);
    const rerenderPath = path.join(rerenderDir, spec.file);
    await page.screenshot({ path: rerenderPath, fullPage: true });
    const inventoryEntry = inventory.assets.find(entry => entry.file === spec.file);
    const actualHash = readHash(rerenderPath);
    const renderCheck = { file: spec.file, expectedSha256: inventoryEntry.sha256, actualSha256: actualHash, match: actualHash === inventoryEntry.sha256 };
    renderChecks.push(renderCheck);
    assert(renderCheck.match, `ES-PC-${spec.name}-RERENDER`, JSON.stringify(renderCheck), findings);

    viewportChecks.push({ spec, data, navigationIntents, menu, cookie: { visibleScrollY, opened: cookieOpened, shiftLoop: cookieShiftLoop, forwardLoop: cookieForwardLoop, closed: cookieClosed }, pageErrors, failedRequests });
    assert(pageErrors.length === 0 && failedRequests.length === 0, `ES-PC-${spec.name}-RUNTIME-ERROR`, JSON.stringify({ pageErrors, failedRequests }), findings);
    await context.close();
  }

  await browser.close();
  const report = {
    date: new Date().toISOString(),
    reviewer: 'PROJECT_CONTROL_INDEPENDENT_REVIEW',
    browser: inventory.browser,
    source: { htmlPath, htmlSha256: readHash(htmlPath), visibleBodyExactToApprovedGate4: body === gate4Body },
    frozenChecks,
    reconciledEntryDrift,
    unreconciledFrozenDrift,
    currentAuthorities,
    exportChecks,
    renderChecks,
    viewportChecks,
    findings,
    status: findings.length === 0 ? 'PASS_PENDING_USER_APPROVAL' : 'FAIL',
  };
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ status: report.status, frozenCount: frozenChecks.length, exportCount: exportChecks.length, renderChecks, viewportSummary: viewportChecks.map(item => ({ width: item.spec.width, dpr: item.spec.dpr, height: item.data.dimensions.scrollHeight, minControl: item.data.minControl, errors: item.pageErrors.length, failedRequests: item.failedRequests.length })), findings }, null, 2));
  if (findings.length) process.exitCode = 2;
})().catch(error => {
  console.error(error);
  process.exit(1);
});
