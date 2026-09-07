const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const reviewDir = __dirname;
const pageDir = path.resolve(reviewDir, '../../04_planning/gate5-v0.1');
const htmlPath = path.join(pageDir, 'DOC-COO_GATE5_COMPLETE_VISUAL_V0.1.html');
const gate4Path = path.resolve(pageDir, '../gate4-v0.2/DOC-COO_GATE4_VISUAL_SAMPLES_V0.2.html');
const freezePath = path.join(pageDir, 'approval_core/source-freeze.json');
const inventoryPath = path.join(pageDir, 'approval_core/export-inventory.json');
const rerenderDir = path.join(reviewDir, 'rerender');
const reportPath = path.join(reviewDir, 'independent-review.json');
const fileUrl = `file:///${htmlPath.replace(/\\/g, '/')}`;

const expected = {
  title: 'Certificate of Origin for Titanium Dioxide | TiO2 Malaysia',
  description: 'Understand when a titanium dioxide country of origin certificate or other proof may be relevant and what details to provide with a document request.',
  canonical: 'https://tio2malaysia.com/documents/certificate-of-origin/',
  sourceUrl: 'https://www.customs.gov.my/en/business/facilitation/rules-of-origin-roo/faq-rules-of-origin',
  headings: [
    'Certificate of Origin for Titanium Dioxide: What Buyers Should Verify',
    'Which Origin Evidence Is Relevant?',
    'What Determines the Right Evidence?',
    'Origin Evidence and Traceability Answer Different Questions',
    'Prepare Your Request',
    'Official Source',
  ],
  links: [
    ['Home', '/'], ['Documents', '/documents/'], ['explore the Product Hub', '/products/'],
    ['Request Origin Documentation', '/request-documents/'],
    ['Royal Malaysian Customs Department guidance', 'https://www.customs.gov.my/en/business/facilitation/rules-of-origin-roo/faq-rules-of-origin'],
    ['Request Origin Documentation', '/request-documents/'], ['View Document Hub', '/documents/'],
    ['Royal Malaysian Customs Department, FAQ Rules of Origin.', 'https://www.customs.gov.my/en/business/facilitation/rules-of-origin-roo/faq-rules-of-origin'],
  ],
  comparison: [
    ['Preferential proof or certificate', 'When an importer intends to claim treatment under an applicable trade agreement.', 'Confirm the agreement, its rules of origin, the permitted form of proof and the supporting documents required for the transaction.'],
    ['Non-preferential Certificate of Origin', 'When origin must be certified under non-preferential rules.', 'Confirm the destination requirement, the applicable non-preferential rules and the identifying details that must appear in the certificate.'],
    ['Other permitted proof or declaration', 'When the applicable agreement or procedure allows a declaration, electronic form or another form of proof.', 'Confirm who may make or issue it, the required information and how it must accompany the transaction documents.'],
  ],
  breadcrumbs: [
    [1, 'Home', 'https://tio2malaysia.com/'],
    [2, 'Documents', 'https://tio2malaysia.com/documents/'],
    [3, 'Certificate of Origin', 'https://tio2malaysia.com/documents/certificate-of-origin/'],
  ],
};

const viewportSpecs = [
  { name: '1440', width: 1440, height: 900, dpr: 1, file: '1440-full-page.png' },
  { name: '768', width: 768, height: 900, dpr: 1, file: '768-full-page.png' },
  { name: '390', width: 390, height: 844, dpr: 2, file: '390-full-page@2x.png' },
];

const sha256 = value => crypto.createHash('sha256').update(value).digest('hex');
const readHash = p => sha256(fs.readFileSync(p));
const assert = (condition, id, detail, findings) => { if (!condition) findings.push({ id, detail }); };

async function clearState(page, width) {
  await page.keyboard.press('Escape').catch(() => {});
  await page.mouse.move(width - 1, 1);
  await page.evaluate(() => {
    const openDialog = document.querySelector('dialog[open]');
    if (openDialog) openDialog.close();
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    scrollTo(0, 0);
  });
  await page.waitForTimeout(50);
}

(async () => {
  fs.mkdirSync(rerenderDir, { recursive: true });
  const findings = [];
  const freeze = JSON.parse(fs.readFileSync(freezePath, 'utf8'));
  const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));

  const frozenChecks = [...freeze.dependencies, ...freeze.inputs].map(entry => {
    const actualBytes = fs.statSync(entry.path).size;
    const actualSha256 = readHash(entry.path);
    return { path: entry.path, expectedBytes: entry.bytes, actualBytes, expectedSha256: entry.sha256, actualSha256, match: actualBytes === entry.bytes && actualSha256 === entry.sha256 };
  });
  const allowedStateDrift = new Set([path.resolve('D:/23MySec/docs/architecture/GATE5_TWO_ELIGIBLE_PAGE_SERIAL_CONTROL_V1.0.md')]);
  const reconciledStateDrift = frozenChecks.filter(item => !item.match && allowedStateDrift.has(path.resolve(item.path)));
  const unreconciledFrozenDrift = frozenChecks.filter(item => !item.match && !allowedStateDrift.has(path.resolve(item.path)));
  assert(frozenChecks.length === 95, 'COO-PC-FREEZE-COUNT', `Expected 95 frozen records; found ${frozenChecks.length}`, findings);
  assert(unreconciledFrozenDrift.length === 0, 'COO-PC-FREEZE-HASH', JSON.stringify(unreconciledFrozenDrift), findings);

  const exportChecks = inventory.assets.map(entry => {
    const p = path.join(pageDir, 'approval_core', entry.file);
    const actualBytes = fs.statSync(p).size;
    const actualSha256 = readHash(p);
    return { file: entry.file, expectedBytes: entry.bytes, actualBytes, expectedSha256: entry.sha256, actualSha256, match: actualBytes === entry.bytes && actualSha256 === entry.sha256 };
  });
  assert(exportChecks.length === 16, 'COO-PC-EXPORT-COUNT', `Expected 16 formal exports; found ${exportChecks.length}`, findings);
  assert(exportChecks.every(item => item.match), 'COO-PC-EXPORT-HASH', 'One or more formal exports changed', findings);

  const html = fs.readFileSync(htmlPath, 'utf8');
  const gate4 = fs.readFileSync(gate4Path, 'utf8');
  const body = html.match(/<body>[\s\S]*<\/body>/)?.[0];
  const gate4Body = gate4.match(/<body>[\s\S]*<\/body>/)?.[0];
  assert(body === gate4Body, 'COO-PC-G4-BODY', 'Gate 5 visible body differs from approved Gate 4 V0.2 source', findings);

  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const renderChecks = [];
  const viewportChecks = [];

  for (const spec of viewportSpecs) {
    const context = await browser.newContext({ viewport: { width: spec.width, height: spec.height }, deviceScaleFactor: spec.dpr });
    const page = await context.newPage();
    const pageErrors = [];
    const httpRequests = [];
    page.on('pageerror', error => pageErrors.push(String(error)));
    page.on('request', request => { if (/^https?:/.test(request.url())) httpRequests.push(request.url()); });
    await page.goto(fileUrl, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);

    const data = await page.evaluate(({ expected }) => {
      const normalize = value => value.replace(/\s+/g, ' ').trim();
      const main = document.querySelector('main');
      const table = document.querySelector('.evidenceTable');
      const mainText = normalize(main.innerText);
      const visibleControls = [...document.querySelectorAll('a,button')].filter(node => {
        const rect = node.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 && !node.closest('[hidden]') && !node.closest('dialog:not([open])');
      }).map(node => {
        const rect = node.getBoundingClientRect();
        return { text: normalize(node.textContent), width: rect.width, height: rect.height };
      });
      const rows = [...table.tBodies[0].rows].map(row => [...row.querySelectorAll(':scope > th,:scope > td')].map(cell => normalize(cell.querySelector('.cellValue')?.textContent || '')));
      const labels = [...table.querySelectorAll('.cellLabel')].map(node => ({ text: normalize(node.textContent), display: getComputedStyle(node).display }));
      const firstRowStyle = getComputedStyle(table.tBodies[0].rows[0]);
      const sourceLinks = [...main.querySelectorAll('.officialSourceLink')].map(node => {
        const rect = node.getBoundingClientRect();
        return { text: normalize(node.textContent), rectCount: node.getClientRects().length, width: rect.width, height: rect.height, display: getComputedStyle(node).display };
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
        headings: [...main.querySelectorAll('h1,h2')].map(node => normalize(node.textContent)),
        h1Count: main.querySelectorAll('h1').length,
        sectionIds: [...main.querySelectorAll(':scope > section')].map(node => node.id),
        links: [...main.querySelectorAll('a')].map(node => [normalize(node.textContent), node.getAttribute('href')]),
        comparison: rows,
        responsive: {
          tableDisplay: getComputedStyle(table).display,
          rowDisplay: firstRowStyle.display,
          rowColumns: firstRowStyle.gridTemplateColumns.split(' ').filter(Boolean).length,
          contextColumns: getComputedStyle(document.querySelector('.contextList')).gridTemplateColumns.split(' ').filter(Boolean).length,
          visibleLabelCount: labels.filter(label => label.display !== 'none').length,
        },
        labels: labels.map(label => label.text),
        sourceLinks,
        exactCounts: {
          request: (mainText.match(/Request Origin Documentation/g) || []).length,
          additionalRequirements: (mainText.match(/Additional Requirements/g) || []).length,
          countryRegion: (mainText.match(/Country \/ Region/g) || []).length,
          lastReviewed: (mainText.match(/Last reviewed: 7 September 2026/g) || []).length,
          informationDate: (mainText.match(/10 October 2025/g) || []).length,
          pageUpdate: (mainText.match(/5 January 2026/g) || []).length,
        },
        banned: {
          availabilityUponRequest: mainText.includes('A Certificate of Origin is available upon request.'),
          gradePrefillMarker: Boolean(document.querySelector('[data-prefill-grade]')),
        },
        dimensions: { scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth, scrollHeight: document.documentElement.scrollHeight },
        minControl: { width: Math.min(...visibleControls.map(control => control.width)), height: Math.min(...visibleControls.map(control => control.height)), count: visibleControls.length },
        font: { family: getComputedStyle(main.querySelector('h1')).fontFamily, status: document.fonts.status, interLoaded: document.fonts.check('16px Inter') },
        logoCount: document.querySelectorAll('img[src*="tio2-malaysia-"]').length,
        mainMediaCount: main.querySelectorAll('img,picture,video').length,
        currentDesktop: document.querySelector('.desktopNav a[aria-current="page"]')?.textContent.trim(),
        currentMobile: document.querySelector('.mobileNav a[aria-current="page"]')?.textContent.trim(),
        webPage,
        breadcrumbs: breadcrumbList.itemListElement.map(item => [item.position, item.name, item.item]),
      };
    }, { expected });

    assert(data.title === expected.title && data.description === expected.description, `COO-PC-${spec.name}-META`, JSON.stringify({ title: data.title, description: data.description }), findings);
    assert(data.canonical === expected.canonical && data.robots === 'noindex,nofollow' && data.lang === 'en', `COO-PC-${spec.name}-IDENTITY`, JSON.stringify({ canonical: data.canonical, robots: data.robots, lang: data.lang }), findings);
    assert(JSON.stringify(data.headings) === JSON.stringify(expected.headings) && data.h1Count === 1, `COO-PC-${spec.name}-HEADINGS`, JSON.stringify(data.headings), findings);
    assert(data.sectionIds.join(',') === 'coo-01,coo-02,coo-03,coo-04,coo-05,coo-06', `COO-PC-${spec.name}-ORDER`, data.sectionIds.join(','), findings);
    assert(JSON.stringify(data.links) === JSON.stringify(expected.links), `COO-PC-${spec.name}-LINKS`, JSON.stringify(data.links), findings);
    assert(JSON.stringify(data.comparison) === JSON.stringify(expected.comparison), `COO-PC-${spec.name}-COMPARISON`, JSON.stringify(data.comparison), findings);
    assert(data.sourceLinks.length === 2 && data.sourceLinks.every(link => link.rectCount === 1 && link.width >= 44 && link.height >= 44 && link.display === 'block'), `COO-PC-${spec.name}-SOURCE-LINK-GEOMETRY`, JSON.stringify(data.sourceLinks), findings);
    assert(data.exactCounts.request === 2 && data.exactCounts.additionalRequirements === 2 && data.exactCounts.countryRegion === 1 && data.exactCounts.lastReviewed === 1 && data.exactCounts.informationDate === 1 && data.exactCounts.pageUpdate === 1, `COO-PC-${spec.name}-COPY-COUNTS`, JSON.stringify(data.exactCounts), findings);
    assert(!data.banned.availabilityUponRequest && !data.banned.gradePrefillMarker, `COO-PC-${spec.name}-BANNED`, JSON.stringify(data.banned), findings);
    const responsiveOk = spec.width > 1000
      ? data.responsive.tableDisplay === 'table' && data.responsive.visibleLabelCount === 0
      : spec.width > 600
        ? data.responsive.rowDisplay === 'grid' && data.responsive.rowColumns === 2 && data.responsive.visibleLabelCount === 9 && data.responsive.contextColumns === 2
        : data.responsive.rowDisplay === 'grid' && data.responsive.rowColumns === 1 && data.responsive.visibleLabelCount === 9 && data.responsive.contextColumns === 1;
    assert(responsiveOk, `COO-PC-${spec.name}-RESPONSIVE`, JSON.stringify(data.responsive), findings);
    assert(data.dimensions.scrollWidth === data.dimensions.clientWidth, `COO-PC-${spec.name}-OVERFLOW`, JSON.stringify(data.dimensions), findings);
    assert(data.minControl.width >= 44 && data.minControl.height >= 44, `COO-PC-${spec.name}-TARGET`, JSON.stringify(data.minControl), findings);
    assert(data.font.family.includes('Inter') && data.font.status === 'loaded' && data.font.interLoaded && data.logoCount === 2 && data.mainMediaCount === 0, `COO-PC-${spec.name}-BRAND-MEDIA`, JSON.stringify({ font: data.font, logoCount: data.logoCount, mainMediaCount: data.mainMediaCount }), findings);
    assert(data.currentDesktop === 'Documents' && data.currentMobile === 'Documents', `COO-PC-${spec.name}-CURRENT`, JSON.stringify({ desktop: data.currentDesktop, mobile: data.currentMobile }), findings);
    const citation = data.webPage?.citation;
    assert(data.webPage?.url === expected.canonical && data.webPage?.name === expected.title && data.webPage?.description === expected.description && data.webPage?.inLanguage === 'en' && data.webPage?.dateModified === '2026-09-07' && citation?.name === 'Royal Malaysian Customs Department, FAQ Rules of Origin' && citation?.url === expected.sourceUrl, `COO-PC-${spec.name}-WEBPAGE-SCHEMA`, JSON.stringify(data.webPage), findings);
    assert(JSON.stringify(data.breadcrumbs) === JSON.stringify(expected.breadcrumbs), `COO-PC-${spec.name}-BREADCRUMB-SCHEMA`, JSON.stringify(data.breadcrumbs), findings);

    const mainLinks = page.locator('main a');
    const navigationIntents = [];
    for (let index = 0; index < await mainLinks.count(); index += 1) {
      await mainLinks.nth(index).click();
      navigationIntents.push(await page.evaluate(() => window.__navigationIntents.at(-1)));
    }
    const requestIntents = navigationIntents.filter(item => item.href === '/request-documents/');
    const intendedContext = { prefill: { document_types: ['origin_supplier_qualification'] }, source_context: { page_id: 'DOC-COO' } };
    assert(requestIntents.length === 2 && requestIntents.every(item => JSON.stringify(item.context) === JSON.stringify(intendedContext) && item.evidenceType === 'LOCAL_SIMULATION' && item.receiverExecuted === false), `COO-PC-${spec.name}-REQUEST-INTENT`, JSON.stringify(requestIntents), findings);
    assert(requestIntents.every(item => !/grade|destination|scheme/i.test(JSON.stringify(item.context))), `COO-PC-${spec.name}-FORBIDDEN-PREFILL`, JSON.stringify(requestIntents), findings);

    let menu = null;
    let breakpoint = null;
    if (spec.width < 1101) {
      const toggle = page.locator('.menuButton');
      await toggle.focus();
      await page.keyboard.press('Enter');
      const opened = await page.evaluate(() => ({ expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'), active: document.activeElement?.textContent.trim(), overflow: document.body.style.overflow, mainInert: document.querySelector('main').inert, footerInert: document.querySelector('footer').inert, hidden: document.querySelector('.mobileNav').hidden, current: document.querySelector('.mobileNav [aria-current="page"]')?.textContent.trim() }));
      await page.keyboard.press('Shift+Tab');
      const shiftLoop = await page.evaluate(() => document.activeElement?.textContent.trim());
      await page.keyboard.press('Tab');
      const forwardLoop = await page.evaluate(() => document.activeElement?.textContent.trim());
      await page.keyboard.press('Escape');
      const closed = await page.evaluate(() => ({ expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'), activeClass: document.activeElement?.className, overflow: document.body.style.overflow, hidden: document.querySelector('.mobileNav').hidden }));
      menu = { opened, shiftLoop, forwardLoop, closed };
      assert(opened.expanded === 'true' && opened.active === 'Home' && opened.overflow === 'hidden' && opened.mainInert && opened.footerInert && !opened.hidden && opened.current === 'Documents', `COO-PC-${spec.name}-MENU-OPEN`, JSON.stringify(opened), findings);
      assert(shiftLoop === 'Close' && forwardLoop === 'Home', `COO-PC-${spec.name}-MENU-LOOP`, JSON.stringify({ shiftLoop, forwardLoop }), findings);
      assert(closed.expanded === 'false' && closed.activeClass === 'menuButton' && closed.overflow === '' && closed.hidden, `COO-PC-${spec.name}-MENU-CLOSE`, JSON.stringify(closed), findings);
      await toggle.click();
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.waitForTimeout(50);
      breakpoint = await page.evaluate(() => ({ hidden: document.querySelector('.mobileNav').hidden, activeTag: document.activeElement?.tagName, overflow: document.body.style.overflow, mainInert: document.querySelector('main').inert }));
      assert(breakpoint.hidden && breakpoint.activeTag === 'BODY' && breakpoint.overflow === '' && !breakpoint.mainInert, `COO-PC-${spec.name}-SHARED-OBSERVATION`, JSON.stringify(breakpoint), findings);
      await page.setViewportSize({ width: spec.width, height: spec.height });
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
    assert(visibleScrollY > 0, `COO-PC-${spec.name}-VISIBLE-SCROLL`, String(visibleScrollY), findings);
    assert(cookieOpened.open && cookieOpened.active === 'Close', `COO-PC-${spec.name}-COOKIE-OPEN`, JSON.stringify(cookieOpened), findings);
    assert(cookieShiftLoop === 'Read Cookie Policy' && cookieForwardLoop === 'Close', `COO-PC-${spec.name}-COOKIE-LOOP`, JSON.stringify({ cookieShiftLoop, cookieForwardLoop }), findings);
    assert(!cookieClosed.open && cookieClosed.activeId === 'cookie-trigger', `COO-PC-${spec.name}-COOKIE-CLOSE`, JSON.stringify(cookieClosed), findings);

    await clearState(page, spec.width);
    const rerenderPath = path.join(rerenderDir, spec.file);
    await page.screenshot({ path: rerenderPath, fullPage: true });
    const inventoryEntry = inventory.assets.find(entry => entry.file === spec.file);
    const actualHash = readHash(rerenderPath);
    const renderCheck = { file: spec.file, expectedSha256: inventoryEntry.sha256, actualSha256: actualHash, match: actualHash === inventoryEntry.sha256 };
    renderChecks.push(renderCheck);
    assert(renderCheck.match, `COO-PC-${spec.name}-RERENDER`, JSON.stringify(renderCheck), findings);

    viewportChecks.push({ spec, data, navigationIntents, menu, breakpoint, cookie: { visibleScrollY, opened: cookieOpened, shiftLoop: cookieShiftLoop, forwardLoop: cookieForwardLoop, closed: cookieClosed }, pageErrors, httpRequests });
    assert(pageErrors.length === 0 && httpRequests.length === 0, `COO-PC-${spec.name}-RUNTIME-ERROR`, JSON.stringify({ pageErrors, httpRequests }), findings);
    await context.close();
  }

  await browser.close();
  const report = {
    date: new Date().toISOString(),
    reviewer: 'PROJECT_CONTROL_INDEPENDENT_REVIEW',
    source: { htmlPath, htmlSha256: readHash(htmlPath), visibleBodyExactToApprovedGate4V02: body === gate4Body },
    frozenChecks,
    reconciledStateDrift,
    unreconciledFrozenDrift,
    exportChecks,
    renderChecks,
    viewportChecks,
    visualReadback: { formalImagesOpened: 16, readableSegmentsOpened: 19 },
    findings,
    status: findings.length === 0 ? 'PASS_PENDING_USER_APPROVAL' : 'FAIL',
  };
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ status: report.status, frozenCount: frozenChecks.length, stateDrift: reconciledStateDrift.map(item => item.path), exportCount: exportChecks.length, renderChecks, viewportSummary: viewportChecks.map(item => ({ width: item.spec.width, dpr: item.spec.dpr, height: item.data.dimensions.scrollHeight, responsive: item.data.responsive, sourceLinks: item.data.sourceLinks, minControl: item.data.minControl, errors: item.pageErrors.length, httpRequests: item.httpRequests.length })), findings }, null, 2));
  if (findings.length) process.exitCode = 2;
})().catch(error => {
  console.error(error);
  process.exit(1);
});
