const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

const baseUrl = 'http://127.0.0.1:8232/products/';
const artifact = 'wp-fb45d8677fec877ae499976fdfa96491c03bf9c9c062d35c98f70b10eb7cea9b';
const implementationCommit = '7d4875a778401d0ecd118f5935c6392571a6d13c';
const evidenceHead = '5c339caad74e8c00658c9497ee428c4f029adbb7';
const outputDir = __dirname;
const segmentDir = path.join(outputDir, 'segments');
fs.mkdirSync(segmentDir, { recursive: true });

const viewports = [
  { width: 1440, height: 1000 },
  { width: 768, height: 1100 },
  { width: 390, height: 900 },
];

const expectedModules = ['breadcrumb', 'hero', 'selector', 'process', 'directory', 'evaluation', 'faq', 'final-rfq'];
const expectedGroups = [
  { heading: 'Coatings Grades', grades: ['M-350', 'M-510', 'M-896', 'M-996', 'M-2196', 'M-895'] },
  { heading: 'Plastics & Masterbatch Grades', grades: ['M-200', 'M-108', 'M-210', 'M-340', 'M-886'] },
  { heading: 'Inks & Multi-Application Grades', grades: ['M-52', 'M-2377'] },
  { heading: 'Specialty Grade', grades: ['CR-901'] },
];

function pushCheck(target, id, passed, actual, expected) {
  target.push({ id, result: passed ? 'PASS' : 'FAIL', actual, expected });
}

async function captureSegments(page, width, height) {
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  const step = Math.max(300, height - 80);
  const positions = [];
  for (let y = 0; y < total; y += step) positions.push(Math.min(y, Math.max(0, total - height)));
  const unique = [...new Set(positions)];
  const files = [];
  for (let index = 0; index < unique.length; index += 1) {
    const y = unique[index];
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(80);
    const file = path.join(segmentDir, `${width}-${String(index).padStart(2, '0')}-y${y}.png`);
    await page.screenshot({ path: file, animations: 'disabled' });
    files.push(path.relative(outputDir, file).replaceAll('\\', '/'));
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  return { totalHeight: total, files };
}

async function inspectViewport(browser, viewport) {
  const context = await browser.newContext({ viewport, colorScheme: 'light', reducedMotion: 'reduce' });
  const page = await context.newPage();
  const pageErrors = [];
  const consoleErrors = [];
  const consoleWarnings = [];
  const failedRequests = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
    if (message.type() === 'warning') consoleWarnings.push(message.text());
  });
  page.on('requestfailed', (request) => failedRequests.push({ url: request.url(), error: request.failure()?.errorText || 'unknown' }));

  const response = await page.goto(baseUrl, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  const observed = await page.evaluate(({ expectedArtifact }) => {
    const isVisible = (node) => {
      if (!(node instanceof HTMLElement)) return false;
      const style = getComputedStyle(node);
      const rect = node.getBoundingClientRect();
      if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) return false;
      if (rect.width <= 1 || rect.height <= 1) return false;
      if (style.clipPath.includes('inset(50%') || style.clip === 'rect(0px, 0px, 0px, 0px)') return false;
      return true;
    };
    const text = (selector) => document.querySelector(selector)?.textContent?.trim() || '';
    const controls = [...document.querySelectorAll('a[href],button:not([disabled]),summary,input,select,textarea')]
      .filter(isVisible)
      .map((node) => {
        const rect = node.getBoundingClientRect();
        return {
          tag: node.tagName.toLowerCase(),
          text: (node.getAttribute('aria-label') || node.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 100),
          width: Number(rect.width.toFixed(2)),
          height: Number(rect.height.toFixed(2)),
          href: node instanceof HTMLAnchorElement ? node.getAttribute('href') : null,
        };
      });
    const overflowElements = [...document.querySelectorAll('body *')]
      .filter(isVisible)
      .map((node) => {
        const rect = node.getBoundingClientRect();
        return { node, rect };
      })
      .filter(({ rect }) => rect.left < -1 || rect.right > window.innerWidth + 1)
      .map(({ node, rect }) => ({
        tag: node.tagName.toLowerCase(),
        className: String(node.className || '').slice(0, 120),
        text: (node.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 100),
        left: Number(rect.left.toFixed(2)),
        right: Number(rect.right.toFixed(2)),
      }));
    const clippedText = [...document.querySelectorAll('h1,h2,h3,p,a,button,li,span')]
      .filter(isVisible)
      .filter((node) => {
        const style = getComputedStyle(node);
        const clips = ['hidden', 'clip'].includes(style.overflow) || ['hidden', 'clip'].includes(style.overflowX) || ['hidden', 'clip'].includes(style.overflowY);
        return clips && (node.scrollWidth > node.clientWidth + 1 || node.scrollHeight > node.clientHeight + 1);
      })
      .map((node) => ({
        tag: node.tagName.toLowerCase(),
        className: String(node.className || '').slice(0, 120),
        text: (node.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 100),
        client: [node.clientWidth, node.clientHeight],
        scroll: [node.scrollWidth, node.scrollHeight],
      }));
    const groups = [...document.querySelectorAll('.product-grade-group')].map((group) => ({
      heading: group.querySelector('h3')?.textContent?.trim() || '',
      grades: [...group.querySelectorAll('.product-grade-row')].map((row) => row.querySelector('strong')?.textContent?.trim() || ''),
      links: [...group.querySelectorAll('a[href]')].map((link) => link.getAttribute('href')),
    }));
    const exactCurrentWords = (document.body.innerText.match(/\bCURRENT\b/gi) || []).length;
    const bodyText = document.body.innerText;
    const h1 = document.querySelector('h1');
    const h1Style = getComputedStyle(h1);
    const h1Range = document.createRange();
    h1Range.selectNodeContents(h1);
    const gridColumns = (selector) => getComputedStyle(document.querySelector(selector)).gridTemplateColumns.split(' ').filter(Boolean).length;
    return {
      artifact: document.querySelector('meta[name="tio2-artifact"]')?.content || '',
      contentMarker: document.querySelector('meta[name="tio2-products-content-sha256"]')?.content || '',
      htmlLang: document.documentElement.lang,
      title: document.title,
      h1Count: document.querySelectorAll('h1').length,
      h1: text('h1'),
      h1Metrics: {
        fontSize: h1Style.fontSize,
        fontWeight: h1Style.fontWeight,
        letterSpacing: h1Style.letterSpacing,
        lines: new Set([...h1Range.getClientRects()].map((rect) => Math.round(rect.top))).size,
      },
      headerHeight: Number(document.querySelector('.global-header').getBoundingClientRect().height.toFixed(2)),
      columns: {
        directory: gridColumns('.product-directory'),
        selector: gridColumns('.product-selector'),
        evaluation: gridColumns('.product-evaluation-steps'),
      },
      modules: [...document.querySelectorAll('main > section')].map((node) => node.dataset.module || ''),
      headings: [...document.querySelectorAll('h1,h2,h3')].map((node) => ({ level: node.tagName, text: node.textContent.trim().replace(/\s+/g, ' ') })),
      groups,
      gradeRowCount: document.querySelectorAll('.product-grade-row').length,
      gradeDirectoryLinkCount: document.querySelectorAll('.product-grade-row a[href]').length,
      selectorResultLinkCount: document.querySelectorAll('.product-selector-result a[href]').length,
      processRouteCardCount: document.querySelectorAll('.product-process-card').length,
      supportCardCount: document.querySelectorAll('.product-support-card').length,
      cr901ClassificationVisible: bodyText.includes('CR-901 · Vapor-phase oxidation'),
      rfqHrefs: [...document.querySelectorAll('a[href]')].filter((node) => /request a quote|\brfq\b/i.test((node.textContent || '').trim())).map((node) => node.getAttribute('href')),
      navProductsCurrent: document.querySelectorAll('a[aria-current="page"]').length,
      navCurrentTexts: [...document.querySelectorAll('a[aria-current="page"]')].map((node) => node.textContent.trim()),
      visibleNavProductsCurrent: [...document.querySelectorAll('a[aria-current="page"]')].filter(isVisible).length,
      visibleNavCurrentTexts: [...document.querySelectorAll('a[aria-current="page"]')].filter(isVisible).map((node) => node.textContent.trim()),
      exactCurrentWords,
      internalGovernanceLeak: ['PRODUCT-000', 'site_scope', 'GATE', 'PENDING', 'DO_NOT_RENDER'].filter((needle) => bodyText.includes(needle)),
      footerProcurement: bodyText.includes('PROCUREMENT'),
      footerConversion: /\bCONVERSION\b/.test(bodyText),
      axeManualReview: {
        cookieAriaControls: document.querySelector('.cookie-settings')?.getAttribute('aria-controls') || null,
        cookieAriaControlsTargetExists: Boolean(document.getElementById(document.querySelector('.cookie-settings')?.getAttribute('aria-controls') || '')),
        faqIndicatorCount: document.querySelectorAll('.product-faq-item button span[aria-hidden="true"]').length,
        faqIndicatorAllAriaHidden: [...document.querySelectorAll('.product-faq-item button span')].every((node) => node.getAttribute('aria-hidden') === 'true'),
      },
      menuButtonVisible: isVisible(document.querySelector('.menu-button')),
      desktopNavVisible: isVisible(document.querySelector('.desktop-nav')),
      documentClientWidth: document.documentElement.clientWidth,
      documentScrollWidth: document.documentElement.scrollWidth,
      documentScrollHeight: document.documentElement.scrollHeight,
      bodyScrollWidth: document.body.scrollWidth,
      controls,
      smallControls: controls.filter((item) => item.width < 43.5 || item.height < 43.5),
      overflowElements,
      clippedText,
      artifactMatches: (document.querySelector('meta[name="tio2-artifact"]')?.content || '') === expectedArtifact,
    };
  }, { expectedArtifact: artifact });

  const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  const fullScreenshot = path.join(outputDir, `independent-products-${viewport.width}.png`);
  await page.screenshot({ path: fullScreenshot, fullPage: true, animations: 'disabled' });
  const segments = await captureSegments(page, viewport.width, viewport.height);

  const checks = [];
  pushCheck(checks, 'http-200', response?.status() === 200, response?.status(), 200);
  pushCheck(checks, 'scope-header', response?.headers()['x-site-scope'] === 'tio2-my', response?.headers()['x-site-scope'], 'tio2-my');
  pushCheck(checks, 'artifact-marker', observed.artifactMatches, observed.artifact, artifact);
  pushCheck(checks, 'single-approved-h1', observed.h1Count === 1 && observed.h1 === 'Titanium Dioxide Pigment Grades for Industrial Applications', { count: observed.h1Count, text: observed.h1 }, { count: 1, text: 'Titanium Dioxide Pigment Grades for Industrial Applications' });
  const responsiveExpected = viewport.width === 1440
    ? { h1: { fontSize: '56px', fontWeight: '700', lines: 3 }, headerHeight: 84, columns: { directory: 2, selector: 2, evaluation: 5 }, desktopNavVisible: true, menuButtonVisible: false }
    : viewport.width === 768
      ? { h1: { fontSize: '44px', fontWeight: '700', lines: 2 }, headerHeight: 64, columns: { directory: 1, selector: 1, evaluation: 2 }, desktopNavVisible: false, menuButtonVisible: true }
      : { h1: { fontSize: '36px', fontWeight: '700', lines: 4 }, headerHeight: 64, columns: { directory: 1, selector: 1, evaluation: 1 }, desktopNavVisible: false, menuButtonVisible: true };
  const spacingOk = viewport.width === 390 ? ['normal', '0px'].includes(observed.h1Metrics.letterSpacing) : true;
  pushCheck(checks, 'responsive-approved-geometry', observed.h1Metrics.fontSize === responsiveExpected.h1.fontSize && observed.h1Metrics.fontWeight === responsiveExpected.h1.fontWeight && observed.h1Metrics.lines === responsiveExpected.h1.lines && spacingOk && observed.headerHeight === responsiveExpected.headerHeight && JSON.stringify(observed.columns) === JSON.stringify(responsiveExpected.columns) && observed.desktopNavVisible === responsiveExpected.desktopNavVisible && observed.menuButtonVisible === responsiveExpected.menuButtonVisible, { h1: observed.h1Metrics, headerHeight: observed.headerHeight, columns: observed.columns, desktopNavVisible: observed.desktopNavVisible, menuButtonVisible: observed.menuButtonVisible }, responsiveExpected);
  pushCheck(checks, 'module-order', JSON.stringify(observed.modules) === JSON.stringify(expectedModules), observed.modules, expectedModules);
  pushCheck(checks, 'four-groups-fourteen-grades', JSON.stringify(observed.groups) === JSON.stringify(expectedGroups.map((group) => ({ ...group, links: [] }))), observed.groups, expectedGroups.map((group) => ({ ...group, links: [] })));
  pushCheck(checks, 'unready-grades-not-linked', observed.gradeDirectoryLinkCount === 0 && observed.selectorResultLinkCount === 0, { directory: observed.gradeDirectoryLinkCount, selector: observed.selectorResultLinkCount }, { directory: 0, selector: 0 });
  pushCheck(checks, 'unready-routes-fail-closed', observed.processRouteCardCount === 0 && observed.supportCardCount === 0 && observed.cr901ClassificationVisible, { processRouteCards: observed.processRouteCardCount, supportCards: observed.supportCardCount, cr901ClassificationVisible: observed.cr901ClassificationVisible }, { processRouteCards: 0, supportCards: 0, cr901ClassificationVisible: true });
  pushCheck(checks, 'rfq-clean-links', observed.rfqHrefs.length > 0 && observed.rfqHrefs.every((href) => href === '/request-a-quote/'), observed.rfqHrefs, 'all /request-a-quote/');
  const expectedVisibleCurrent = viewport.width > 1024 ? 1 : 0;
  pushCheck(checks, 'products-current-state', observed.navProductsCurrent === 2 && observed.navCurrentTexts.every((item) => item === 'Products') && observed.visibleNavProductsCurrent === expectedVisibleCurrent && observed.visibleNavCurrentTexts.every((item) => item === 'Products') && observed.exactCurrentWords === 0, { domCount: observed.navProductsCurrent, domTexts: observed.navCurrentTexts, visibleCount: observed.visibleNavProductsCurrent, visibleTexts: observed.visibleNavCurrentTexts, visibleCurrentWords: observed.exactCurrentWords }, { domCount: 2, domTexts: ['Products', 'Products'], visibleCount: expectedVisibleCurrent, visibleCurrentWords: 0 });
  pushCheck(checks, 'buyer-clean', observed.internalGovernanceLeak.length === 0 && observed.footerProcurement && !observed.footerConversion, { leaks: observed.internalGovernanceLeak, footerProcurement: observed.footerProcurement, footerConversion: observed.footerConversion }, { leaks: [], footerProcurement: true, footerConversion: false });
  pushCheck(checks, 'no-horizontal-overflow', observed.documentScrollWidth === viewport.width && observed.bodyScrollWidth <= viewport.width && observed.overflowElements.length === 0, { client: observed.documentClientWidth, documentScrollWidth: observed.documentScrollWidth, bodyScrollWidth: observed.bodyScrollWidth, elements: observed.overflowElements }, { width: viewport.width, elements: [] });
  pushCheck(checks, 'no-hidden-clipped-text', observed.clippedText.length === 0, observed.clippedText, []);
  if (viewport.width === 390) pushCheck(checks, 'mobile-controls-44-square', observed.smallControls.length === 0, observed.smallControls, []);
  pushCheck(checks, 'axe-zero-violations', axe.violations.length === 0, axe.violations.map((item) => ({ id: item.id, impact: item.impact, nodes: item.nodes.length })), []);
  const incompleteIds = axe.incomplete.map((item) => item.id).sort();
  pushCheck(checks, 'axe-incomplete-manual-review', JSON.stringify(incompleteIds) === JSON.stringify(['aria-valid-attr-value', 'color-contrast']) && observed.axeManualReview.cookieAriaControls === 'cookie-dialog' && observed.axeManualReview.cookieAriaControlsTargetExists && observed.axeManualReview.faqIndicatorCount === 5 && observed.axeManualReview.faqIndicatorAllAriaHidden, { incompleteIds, manual: observed.axeManualReview }, { incompleteIds: ['aria-valid-attr-value', 'color-contrast'], manual: { cookieAriaControls: 'cookie-dialog', cookieAriaControlsTargetExists: true, faqIndicatorCount: 5, faqIndicatorAllAriaHidden: true } });
  pushCheck(checks, 'no-console-network-errors', pageErrors.length === 0 && consoleErrors.length === 0 && failedRequests.length === 0, { pageErrors, consoleErrors, failedRequests }, { pageErrors: [], consoleErrors: [], failedRequests: [] });

  await context.close();
  return {
    viewport,
    response: { status: response?.status(), headers: { 'x-site-scope': response?.headers()['x-site-scope'] || null } },
    observed,
    accessibility: { violations: axe.violations, passes: axe.passes.length, incomplete: axe.incomplete.map((item) => ({ id: item.id, impact: item.impact, nodes: item.nodes.map((node) => ({ target: node.target, html: node.html, failureSummary: node.failureSummary, any: node.any, all: node.all, none: node.none })) })) },
    browserDiagnostics: { pageErrors, consoleErrors, consoleWarnings, failedRequests },
    screenshots: { full: path.basename(fullScreenshot), segments },
    checks,
  };
}

async function inspectInteractions(browser) {
  const context = await browser.newContext({ viewport: { width: 390, height: 900 }, colorScheme: 'light', reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const checks = [];

  const menuTrigger = page.locator('.menu-button');
  await menuTrigger.focus();
  await page.keyboard.press('Enter');
  const menu = page.getByRole('dialog', { name: 'Primary navigation menu' });
  const menuOpen = await menu.isVisible();
  const menuInitialFocus = await page.evaluate(() => ({ tag: document.activeElement?.tagName, text: (document.activeElement?.getAttribute('aria-label') || document.activeElement?.textContent || '').trim().replace(/\s+/g, ' ') }));
  const menuCurrent = await menu.locator('a[aria-current="page"]').allTextContents();
  const menuIsolation = await page.evaluate(() => ({ mainInert: document.querySelector('main')?.inert === true, footerInert: document.querySelector('footer')?.inert === true }));
  const menuFocusSequence = [];
  let menuTrap = true;
  for (let index = 0; index < 14; index += 1) {
    await page.keyboard.press('Tab');
    const details = await page.evaluate(() => {
      const active = document.activeElement;
      return { tag: active?.tagName, text: (active?.getAttribute('aria-label') || active?.textContent || '').trim().replace(/\s+/g, ' ') };
    });
    const step = { inDialog: await menu.evaluate((node) => node.contains(document.activeElement)), ...details };
    menuFocusSequence.push(step);
    if (!step.inDialog) menuTrap = false;
  }
  await page.screenshot({ path: path.join(outputDir, 'independent-menu-390.png'), animations: 'disabled' });
  await page.keyboard.press('Escape');
  const menuClosed = !(await menu.isVisible());
  const menuFocusReturned = await menuTrigger.evaluate((node) => document.activeElement === node);
  pushCheck(checks, 'mobile-menu-open-focus', menuOpen && /Close primary navigation menu/i.test(menuInitialFocus.text), { menuOpen, menuInitialFocus }, { menuOpen: true, initialFocus: 'Close primary navigation menu' });
  pushCheck(checks, 'mobile-menu-products-current', menuCurrent.length === 1 && menuCurrent[0].trim() === 'Products', menuCurrent, ['Products']);
  pushCheck(checks, 'mobile-menu-modal-isolation', menuIsolation.mainInert && menuIsolation.footerInert && menuTrap, { menuIsolation, menuTrap, sequence: menuFocusSequence }, { mainInert: true, footerInert: true, menuTrap: true });
  pushCheck(checks, 'mobile-menu-escape-return', menuClosed && menuFocusReturned, { menuClosed, menuFocusReturned }, { menuClosed: true, menuFocusReturned: true });

  const cookieTrigger = page.getByRole('button', { name: 'Cookie Settings', exact: true });
  await cookieTrigger.focus();
  await page.keyboard.press('Enter');
  const cookie = page.getByRole('dialog', { name: 'Cookie settings', exact: true });
  const cookieOpen = await cookie.isVisible();
  const cookieInitialFocus = await page.evaluate(() => ({ tag: document.activeElement?.tagName, text: (document.activeElement?.getAttribute('aria-label') || document.activeElement?.textContent || '').trim().replace(/\s+/g, ' ') }));
  const cookieIsolation = await page.evaluate(() => ({ mainInert: document.querySelector('main')?.inert === true, headerInert: document.querySelector('header')?.inert === true }));
  let cookieTrap = true;
  const cookieFocusSequence = [];
  for (let index = 0; index < 6; index += 1) {
    await page.keyboard.press('Tab');
    const details = await page.evaluate(() => {
      const active = document.activeElement;
      return { tag: active?.tagName, text: (active?.getAttribute('aria-label') || active?.textContent || '').trim().replace(/\s+/g, ' ') };
    });
    const step = { inDialog: await cookie.evaluate((node) => node.contains(document.activeElement)), ...details };
    cookieFocusSequence.push(step);
    if (!step.inDialog) cookieTrap = false;
  }
  await page.screenshot({ path: path.join(outputDir, 'independent-cookie-390.png'), animations: 'disabled' });
  await page.keyboard.press('Escape');
  const cookieClosed = !(await cookie.isVisible());
  const cookieFocusReturned = await cookieTrigger.evaluate((node) => document.activeElement === node);
  const storage = await page.evaluate(() => ({ local: localStorage.length, session: sessionStorage.length }));
  const cookies = await context.cookies();
  pushCheck(checks, 'cookie-open-focus', cookieOpen && cookieInitialFocus.text === 'Close', { cookieOpen, cookieInitialFocus }, { cookieOpen: true, initialFocus: 'Close' });
  pushCheck(checks, 'cookie-modal-isolation', cookieIsolation.mainInert && cookieIsolation.headerInert && cookieTrap, { cookieIsolation, cookieTrap, sequence: cookieFocusSequence }, { mainInert: true, headerInert: true, cookieTrap: true });
  pushCheck(checks, 'cookie-escape-return', cookieClosed && cookieFocusReturned, { cookieClosed, cookieFocusReturned }, { cookieClosed: true, cookieFocusReturned: true });
  pushCheck(checks, 'cookie-no-optional-storage', storage.local === 0 && storage.session === 0 && cookies.length === 0, { storage, cookieCount: cookies.length }, { storage: { local: 0, session: 0 }, cookieCount: 0 });

  await context.close();

  const tabletContext = await browser.newContext({ viewport: { width: 768, height: 1100 }, colorScheme: 'light', reducedMotion: 'reduce' });
  const tablet = await tabletContext.newPage();
  await tablet.goto(baseUrl, { waitUntil: 'networkidle' });
  const selectorExpected = new Map([['Coatings', 8], ['Plastics', 8], ['Masterbatch', 7], ['Printing Inks', 4], ['Paper', 2], ['Specialty Materials', 1]]);
  const selectorStates = [];
  const initialUrl = tablet.url();
  const initialSelector = await tablet.evaluate(() => ({ explicit: document.querySelector('.product-selector')?.dataset.explicitSelection, checked: document.querySelectorAll('.product-selector [aria-pressed="true"]').length }));
  for (const [label, expectedCount] of selectorExpected) {
    const button = tablet.getByRole('button', { name: label, exact: true });
    await button.focus();
    await tablet.keyboard.press('Enter');
    const state = await tablet.evaluate(({ label }) => {
      const active = document.activeElement;
      const pressed = [...document.querySelectorAll('.product-selector button')].find((node) => node.textContent.trim() === label);
      return {
        activeText: active?.textContent?.trim(),
        pressed: pressed?.getAttribute('aria-pressed'),
        explicit: document.querySelector('.product-selector')?.dataset.explicitSelection,
        results: document.querySelectorAll('.product-selector-result').length,
        resultLinks: document.querySelectorAll('.product-selector-result a[href]').length,
        heading: document.querySelector('#product-result-heading')?.textContent?.trim(),
      };
    }, { label });
    selectorStates.push({ label, expectedCount, ...state, url: tablet.url() });
  }
  const notSure = tablet.getByRole('button', { name: 'Not Sure', exact: true });
  await notSure.focus();
  await tablet.keyboard.press('Space');
  const notSureState = await tablet.evaluate(() => ({ text: document.querySelector('#product-results')?.innerText.trim(), anchor: document.querySelector('#product-results a')?.getAttribute('href'), focusText: document.activeElement?.textContent?.trim(), url: location.href }));
  await tablet.locator('[data-module="selector"]').screenshot({ path: path.join(outputDir, 'independent-selector-not-sure-768.png'), animations: 'disabled' });
  const selectorPass = selectorStates.every((state) => state.results === state.expectedCount && state.resultLinks === 0 && state.pressed === 'true' && state.explicit === 'true' && state.activeText === state.label && state.url === initialUrl);
  pushCheck(checks, 'selector-approved-counts-and-unready-links', selectorPass, { initialSelector, selectorStates }, '8/8/7/4/2/1 results, zero result links, explicit selection, focus retained, URL unchanged');
  pushCheck(checks, 'selector-not-sure-empty-state', /No grade is listed for this application\./.test(notSureState.text) && notSureState.anchor === '#all-grades' && notSureState.focusText === 'Not Sure' && notSureState.url === initialUrl, notSureState, { text: 'No grade is listed for this application.', anchor: '#all-grades', focusText: 'Not Sure', url: initialUrl });

  const faqItems = tablet.locator('.product-faq-item');
  const faqInitial = [];
  for (let index = 0; index < await faqItems.count(); index += 1) {
    faqInitial.push({ expanded: await faqItems.nth(index).locator('button').getAttribute('aria-expanded'), answerTextLength: (await faqItems.nth(index).locator('.product-faq-answer').textContent()).trim().length, visible: await faqItems.nth(index).locator('.product-faq-answer').isVisible() });
  }
  await faqItems.nth(0).locator('button').focus();
  await tablet.keyboard.press('Enter');
  const firstClosed = (await faqItems.nth(0).locator('button').getAttribute('aria-expanded')) === 'false' && !(await faqItems.nth(0).locator('.product-faq-answer').isVisible());
  await faqItems.nth(1).locator('button').focus();
  await tablet.keyboard.press('Space');
  const secondOpen = (await faqItems.nth(1).locator('button').getAttribute('aria-expanded')) === 'true' && await faqItems.nth(1).locator('.product-faq-answer').isVisible();
  const secondFocusStyle = await faqItems.nth(1).locator('button').evaluate((node) => { const style = getComputedStyle(node); return { focusVisible: node.matches(':focus-visible'), outlineStyle: style.outlineStyle, outlineWidth: style.outlineWidth, outlineColor: style.outlineColor, boxShadow: style.boxShadow }; });
  await tablet.locator('[data-module="faq"]').screenshot({ path: path.join(outputDir, 'independent-faq-keyboard-768.png'), animations: 'disabled' });
  pushCheck(checks, 'faq-five-answers-and-keyboard', faqInitial.length === 5 && faqInitial.every((item) => item.answerTextLength > 20) && faqInitial[0].expanded === 'true' && faqInitial[0].visible && faqInitial.slice(1).every((item) => item.expanded === 'false' && !item.visible) && firstClosed && secondOpen, { faqInitial, firstClosed, secondOpen, secondFocusStyle }, 'five complete answers; first open initially; Enter closes first; Space opens second');
  pushCheck(checks, 'faq-visible-keyboard-focus', secondFocusStyle.focusVisible && ((secondFocusStyle.outlineStyle !== 'none' && secondFocusStyle.outlineWidth !== '0px') || secondFocusStyle.boxShadow !== 'none'), secondFocusStyle, 'focus-visible with visible outline or shadow');

  await tablet.goto(baseUrl, { waitUntil: 'networkidle' });
  const focusSequence = [];
  const seen = new Set();
  let wrapped = false;
  for (let index = 0; index < 100; index += 1) {
    await tablet.keyboard.press('Tab');
    const state = await tablet.evaluate(() => {
      const node = document.activeElement;
      const style = getComputedStyle(node);
      const rect = node.getBoundingClientRect();
      const label = (node.getAttribute('aria-label') || node.textContent || node.getAttribute('href') || '').trim().replace(/\s+/g, ' ').slice(0, 100);
      const interactive = [...document.querySelectorAll('a[href],button:not([disabled]),summary,input,select,textarea')];
      return {
        index: interactive.indexOf(node),
        tag: node.tagName.toLowerCase(),
        label,
        href: node.getAttribute('href'),
        focusVisible: node.matches(':focus-visible'),
        outlineStyle: style.outlineStyle,
        outlineWidth: style.outlineWidth,
        outlineColor: style.outlineColor,
        boxShadow: style.boxShadow,
        rect: { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom, width: rect.width, height: rect.height },
        viewport: { width: innerWidth, height: innerHeight },
      };
    });
    if (state.index === -1 && state.tag === 'body') continue;
    const key = String(state.index);
    if (seen.has(key) && focusSequence.length > 5) { wrapped = true; break; }
    seen.add(key);
    focusSequence.push(state);
  }
  const badFocus = focusSequence.filter((state) => !state.focusVisible || ((state.outlineStyle === 'none' || state.outlineWidth === '0px') && state.boxShadow === 'none') || state.rect.width < 1 || state.rect.height < 1 || state.rect.left < -1 || state.rect.right > state.viewport.width + 1 || state.rect.top < -1 || state.rect.bottom > state.viewport.height + 1);
  pushCheck(checks, 'sequential-keyboard-visible-focus', focusSequence.length >= 20 && wrapped && badFocus.length === 0, { traversed: focusSequence.length, wrapped, badFocus, focusSequence }, 'at least 20 distinct controls, wraps, each visible and visibly focused without clipping');

  await tabletContext.close();
  return { checks, menu: { menuOpen, menuInitialFocus, menuCurrent, menuIsolation, menuTrap, menuFocusSequence, menuClosed, menuFocusReturned }, cookie: { cookieOpen, cookieInitialFocus, cookieIsolation, cookieTrap, cookieFocusSequence, cookieClosed, cookieFocusReturned, storage, cookieCount: cookies.length }, selector: { initialSelector, selectorStates, notSureState }, faq: { faqInitial, firstClosed, secondOpen, secondFocusStyle }, focusSequence };
}

async function inspectNoScript(browser) {
  const context = await browser.newContext({ viewport: { width: 390, height: 900 }, javaScriptEnabled: false, colorScheme: 'light' });
  const page = await context.newPage();
  const response = await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  const observed = await page.evaluate(() => ({
    h1: document.querySelector('h1')?.textContent?.trim() || '',
    gradeRows: document.querySelectorAll('.product-grade-row').length,
    gradeNames: [...document.querySelectorAll('.product-grade-row strong')].map((node) => node.textContent.trim()),
    faqAnswersInDom: document.querySelectorAll('.product-faq-answer').length,
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  await page.screenshot({ path: path.join(outputDir, 'independent-noscript-390.png'), fullPage: true, animations: 'disabled' });
  await context.close();
  const expectedGrades = expectedGroups.flatMap((group) => group.grades);
  const checks = [];
  pushCheck(checks, 'nojs-core-directory', response?.status() === 200 && observed.h1 === 'Titanium Dioxide Pigment Grades for Industrial Applications' && observed.gradeRows === 14 && JSON.stringify(observed.gradeNames) === JSON.stringify(expectedGrades), { status: response?.status(), ...observed }, { status: 200, h1: 'Titanium Dioxide Pigment Grades for Industrial Applications', gradeRows: 14, gradeNames: expectedGrades });
  pushCheck(checks, 'nojs-no-horizontal-overflow', observed.scrollWidth === observed.clientWidth, { scrollWidth: observed.scrollWidth, clientWidth: observed.clientWidth }, 'equal');
  return { observed, checks, screenshot: 'independent-noscript-390.png' };
}

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const result = {
    reviewId: 'PRODUCT-000-D32-G9-VISUAL-IR-01',
    capturedAt: new Date().toISOString(),
    candidate: { implementationCommit, evidenceHead, artifact, runtime: baseUrl, siteScope: 'tio2-my' },
    viewports: [],
  };
  try {
    for (const viewport of viewports) result.viewports.push(await inspectViewport(browser, viewport));
    result.interactions = await inspectInteractions(browser);
    result.noScript = await inspectNoScript(browser);
    const allChecks = [
      ...result.viewports.flatMap((item) => item.checks),
      ...result.interactions.checks,
      ...result.noScript.checks,
    ];
    result.summary = {
      totalChecks: allChecks.length,
      passed: allChecks.filter((item) => item.result === 'PASS').length,
      failed: allChecks.filter((item) => item.result === 'FAIL').length,
      failures: allChecks.filter((item) => item.result === 'FAIL'),
      conclusion: allChecks.every((item) => item.result === 'PASS') ? 'PASS' : 'RETURN',
    };
  } finally {
    await browser.close();
  }
  fs.writeFileSync(path.join(outputDir, 'independent-visual-results.json'), JSON.stringify(result, null, 2));
  process.stdout.write(JSON.stringify(result.summary, null, 2));
})().catch((error) => {
  process.stderr.write(`${error.stack || error}\n`);
  process.exitCode = 1;
});
