import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const { marked } = require('marked');
const root = 'D:/23MySec';
const base = `${root}/pages/applications/printing-inks/04_planning/gate3-v0.2`;
const htmlPath = `${base}/APP-INK_GATE3_RESPONSIVE_WIREFRAME_V0.2.html`;
const copyPath = `${root}/pages/applications/printing-inks/04_planning/APP-INK_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`;
const mode = process.argv[2] ?? 'diagnostic';
const outputDir = `${base}/${mode === 'formal' ? 'approval_core' : 'diagnostic_support'}`;
fs.mkdirSync(outputDir, { recursive: true });

const approved = fs.readFileSync(copyPath, 'utf8').match(/<!-- BUYER_COPY_START -->([\s\S]*?)<!-- BUYER_COPY_END -->/)?.[1]?.trim();
if (!approved) throw new Error('Approved buyer copy missing');
const expectedHtml = marked.parse(approved);
const browser = await chromium.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true });
const results = {
  mode,
  renderer: 'Microsoft Edge via Playwright',
  browserVersion: browser.version(),
  source: htmlPath,
  createdAt: new Date().toISOString(),
  viewports: {},
  bodyKeyboardFocus: {},
  interactions: {},
  content: {},
  risks: {},
  sharedEvidence: {
    originalOwnerCoverage: 'Consumer V0.2 owner validation covers open, selection, Escape and breakpoint behavior; it does not cover Tab or Shift+Tab loops.',
    currentPageExecutionCoverage: 'This run independently exercises forward/backward focus wrapping for menu and Cookie plus page-level exits on the V0.2 candidate.',
    independentReviewCoverage: 'APP-INK Gate 3 Project Control V0.1 independently exercised the same loops on V0.1; the V0.2 execution reruns them because page CSS changed.'
  },
  evidenceTypes: ['ACTUAL_RUNTIME', 'STATIC_VISUAL', 'SOURCE_INSPECTION']
};
const sizes = [
  { key: '1440', width: 1440, height: 1000 },
  { key: '768', width: 768, height: 1024 },
  { key: '390', width: 390, height: 844 }
];
const imageName = (key, suffix) => `APP-INK_GATE3_${key}_${suffix}_V0.2.png`;
const activeState = page => page.evaluate(() => {
  const element = document.activeElement;
  return { text: (element?.textContent || '').trim(), tag: element?.tagName, className: element?.className || '', id: element?.id || '' };
});

async function exerciseBodyLinks(page, viewportKey) {
  await page.evaluate(() => {
    window.scrollTo(0, 0);
    document.body.tabIndex = -1;
    document.body.focus();
  });
  const expectedCount = await page.locator('main a').evaluateAll(elements => elements.filter(element => {
    const box = element.getBoundingClientRect();
    const style = getComputedStyle(element);
    return box.width > 0 && box.height > 0 && style.visibility !== 'hidden' && style.display !== 'none';
  }).length);
  const links = new Map();
  let focusImageCaptured = false;
  for (let index = 0; index < 100 && links.size < expectedCount; index += 1) {
    await page.keyboard.press('Tab');
    const state = await page.evaluate(() => {
      const element = document.activeElement;
      const main = document.querySelector('main');
      if (!(element instanceof HTMLAnchorElement) || !main.contains(element)) return null;
      const box = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      return {
        index: [...main.querySelectorAll('a')].indexOf(element),
        text: element.textContent.trim(),
        href: element.getAttribute('href'),
        outlineColor: style.outlineColor,
        outlineStyle: style.outlineStyle,
        outlineWidth: style.outlineWidth,
        outlineOffset: style.outlineOffset,
        focusVisible: element.matches(':focus-visible'),
        clipped: box.left - 6 < 0 || box.right + 6 > innerWidth
      };
    });
    if (!state) continue;
    links.set(state.index, state);
    if (mode === 'formal' && viewportKey === '390' && state.text === 'Applications' && !focusImageCaptured) {
      await page.screenshot({ path: path.join(outputDir, imageName('390', 'BODY_LINK_FOCUS')), fullPage: false });
      focusImageCaptured = true;
    }
  }
  const ordered = [...links.values()].sort((a, b) => a.index - b.index);
  return {
    expectedCount,
    keyboardReachedCount: ordered.length,
    links: ordered,
    screenshotCaptured: mode !== 'formal' || viewportKey !== '390' || focusImageCaptured,
    pass: ordered.length === expectedCount && ordered.every(link => link.focusVisible && link.outlineColor === 'rgb(0, 128, 120)' && link.outlineStyle === 'solid' && link.outlineWidth === '3px' && !link.clipped)
  };
}

for (const vp of sizes) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
  const url = pathToFileURL(htmlPath).href;
  await page.goto(url, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const geometry = await page.evaluate(() => {
    const visible = element => {
      const box = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      return box.width > 0 && box.height > 0 && style.visibility !== 'hidden' && style.display !== 'none';
    };
    const controls = [...document.querySelectorAll('a,button')].filter(visible).map(element => {
      const box = element.getBoundingClientRect();
      return { text: element.textContent.trim().slice(0, 100), width: +box.width.toFixed(2), height: +box.height.toFixed(2) };
    });
    return {
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
      modules: document.querySelectorAll('main section').length,
      h1: document.querySelectorAll('main h1').length,
      h2: document.querySelectorAll('main h2').length,
      under44: controls.filter(control => control.width < 43.9 || control.height < 43.9),
      documentRows: document.querySelectorAll('.documents-matrix tbody tr').length,
      gradeRows: document.querySelectorAll('.grades tbody tr').length,
      requestCards: document.querySelectorAll('.requestCards .requestCard').length,
      sourceRows: document.querySelectorAll('.sources ol > li').length,
      externalSourceLinks: document.querySelectorAll('.sources a[href^="http"]').length,
      gradeOrder: [...document.querySelectorAll('.grades tbody tr td:first-child')].map(element => element.textContent),
      paragraphCounts: [...document.querySelectorAll('main section')].map(element => ({ module: element.dataset.module, count: element.querySelectorAll('p').length })),
      governanceLeak: /GATE_|DRAFT_FOR_|APPROVED_|PENDING_|Review ID|evidence ID/i.test(document.querySelector('main').innerText)
    };
  });
  const narrativeTokens = await page.locator('main').evaluate(element => {
    const tokens = [];
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      if (walker.currentNode.parentElement?.closest('.breadcrumb,.eyebrow')) continue;
      const value = (walker.currentNode.nodeValue || '').replace(/\s+/g, ' ').trim();
      if (value) tokens.push(value);
    }
    return tokens;
  });
  const expectedTokens = await page.evaluate(html => {
    const box = document.createElement('div');
    box.innerHTML = html;
    const tokens = [];
    const walker = document.createTreeWalker(box, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const value = (walker.currentNode.nodeValue || '').replace(/\s+/g, ' ').trim();
      if (value) tokens.push(value);
    }
    return tokens;
  }, expectedHtml);
  geometry.contentExactNormalized = narrativeTokens.join(' ') === expectedTokens.join(' ');
  results.viewports[vp.key] = geometry;
  await page.screenshot({ path: path.join(outputDir, imageName(vp.key, mode === 'formal' ? 'FULL' : 'DIAGNOSTIC_FULL')), fullPage: true });

  results.bodyKeyboardFocus[vp.key] = await exerciseBodyLinks(page, vp.key);
  await page.goto(url, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);

  if (vp.key !== '1440') {
    const menuButton = page.locator('.menuButton');
    await menuButton.click();
    const opened = { active: await activeState(page), state: await page.evaluate(() => ({ hidden: document.querySelector('.mobileNav').hidden, expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'), mainInert: document.querySelector('main').inert, footerInert: document.querySelector('footer').inert, logoInert: document.querySelector('.logoLink').inert, rfqInert: document.querySelector('.headerRfq').inert, overflow: document.body.style.overflow })) };
    if (mode === 'formal') await page.screenshot({ path: path.join(outputDir, imageName(vp.key, 'MENU')), fullPage: false });
    await page.keyboard.press('Shift+Tab');
    const backwardFirst = await activeState(page);
    await page.keyboard.press('Shift+Tab');
    const backwardWrap = await activeState(page);
    await page.keyboard.press('Tab');
    const forwardWrap = await activeState(page);
    await page.keyboard.press('Escape');
    const escaped = await page.evaluate(() => ({ hidden: document.querySelector('.mobileNav').hidden, focus: document.activeElement?.className || '', mainInert: document.querySelector('main').inert, overflow: document.body.style.overflow }));
    await menuButton.click();
    await page.locator('.mobileNav a[href="/applications/"]').evaluate(element => element.addEventListener('click', event => event.preventDefault(), { capture: true, once: true }));
    await page.locator('.mobileNav a[href="/applications/"]').click();
    const selected = await page.evaluate(() => ({ hidden: document.querySelector('.mobileNav').hidden, focus: document.activeElement?.className || '', mainInert: document.querySelector('main').inert, overflow: document.body.style.overflow }));
    await menuButton.click();
    await page.setViewportSize({ width: 1200, height: vp.height });
    await page.waitForFunction(() => document.querySelector('.mobileNav').hidden);
    const breakpoint = await page.evaluate(() => ({ hidden: document.querySelector('.mobileNav').hidden, mainInert: document.querySelector('main').inert, overflow: document.body.style.overflow }));
    await page.setViewportSize({ width: vp.width, height: vp.height });
    results.interactions[`menu_${vp.key}`] = { opened, backwardFirst, backwardWrap, forwardWrap, escaped, selected, breakpoint };
  }

  const cookieTrigger = page.locator('#cookie-trigger');
  await cookieTrigger.click();
  const cookieOpened = await activeState(page);
  await page.keyboard.press('Shift+Tab');
  const cookieBackwardWrap = await activeState(page);
  await page.keyboard.press('Tab');
  const cookieForwardWrap = await activeState(page);
  await page.keyboard.press('Escape');
  const cookieEscape = await page.evaluate(() => ({ open: document.querySelector('.cookie-layer').open, focus: document.activeElement?.id || '' }));
  await cookieTrigger.click();
  await page.locator('[data-cookie-close]').click();
  const cookieClickClose = await page.evaluate(() => ({ open: document.querySelector('.cookie-layer').open, focus: document.activeElement?.id || '' }));
  results.interactions[`cookie_${vp.key}`] = { opened: cookieOpened, backwardWrap: cookieBackwardWrap, forwardWrap: cookieForwardWrap, escape: cookieEscape, clickClose: cookieClickClose };

  results.interactions[`anchors_${vp.key}`] = [];
  for (const id of ['define-the-ink-and-print-system', 'grades-to-review']) {
    await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; });
    await page.locator(`.heroActions a[href="#${id}"]`).click();
    const state = await page.evaluate(id => ({ id, hash: location.hash, top: document.getElementById(id).getBoundingClientRect().top }), id);
    results.interactions[`anchors_${vp.key}`].push(state);
    if (mode === 'formal' && vp.key === '390' && id === 'grades-to-review') await page.screenshot({ path: path.join(outputDir, imageName('390', 'GRADES_ANCHOR')), fullPage: false });
  }
  await page.close();
}

const menuPass = ['768', '390'].every(key => {
  const value = results.interactions[`menu_${key}`];
  return value.opened.active.text === 'Home' && value.opened.state.hidden === false && value.opened.state.expanded === 'true' && value.opened.state.mainInert && value.opened.state.footerInert && value.opened.state.logoInert && value.opened.state.rfqInert && value.opened.state.overflow === 'hidden' && value.backwardFirst.text === 'Close' && value.backwardWrap.text === 'Request a Quote' && value.forwardWrap.text === 'Close' && value.escaped.hidden && value.escaped.focus === 'menuButton' && !value.escaped.mainInert && value.escaped.overflow === '' && value.selected.hidden && value.selected.focus === 'menuButton' && !value.selected.mainInert && value.selected.overflow === '' && value.breakpoint.hidden && !value.breakpoint.mainInert && value.breakpoint.overflow === '';
});
const cookiePass = ['1440', '768', '390'].every(key => {
  const value = results.interactions[`cookie_${key}`];
  return value.opened.text === 'Close' && value.backwardWrap.text === 'Read Cookie Policy' && value.forwardWrap.text === 'Close' && !value.escape.open && value.escape.focus === 'cookie-trigger' && !value.clickClose.open && value.clickClose.focus === 'cookie-trigger';
});
const anchorPass = ['1440', '768', '390'].every(key => results.interactions[`anchors_${key}`].every(item => item.hash === `#${item.id}` && item.top >= 15 && item.top <= 25));
const focusPass = Object.values(results.bodyKeyboardFocus).every(value => value.pass);
results.content = {
  allViewportsExactNormalized: Object.values(results.viewports).every(viewport => viewport.contentExactNormalized),
  expectedNormalizedSha256: crypto.createHash('sha256').update(approved.replace(/\s+/g, ' ').trim()).digest('hex')
};
results.risks = {
  exactApprovedNarrative: results.content.allViewportsExactNormalized,
  moduleAndHeadingCount: Object.values(results.viewports).every(viewport => viewport.modules === 11 && viewport.h1 === 1 && viewport.h2 === 10),
  documentRoleMatrix: Object.values(results.viewports).every(viewport => viewport.documentRows === 4),
  neutralGradeSet: Object.values(results.viewports).every(viewport => viewport.gradeRows === 4 && viewport.gradeOrder.join('|') === 'M-350|M-510|M-52|M-2377'),
  requestActions: Object.values(results.viewports).every(viewport => viewport.requestCards === 3),
  sixSources: Object.values(results.viewports).every(viewport => viewport.sourceRows === 6 && viewport.externalSourceLinks === 6),
  noHorizontalOverflow: Object.values(results.viewports).every(viewport => viewport.scrollWidth === viewport.clientWidth),
  touchTargets: Object.values(results.viewports).every(viewport => viewport.under44.length === 0),
  noGovernanceLeak: Object.values(results.viewports).every(viewport => !viewport.governanceLeak),
  bodyFocusApprovedTeal: focusPass,
  paragraphRelationships: Object.values(results.viewports).every(viewport => {
    const counts = Object.fromEntries(viewport.paragraphCounts.map(item => [item.module, item.count]));
    return counts['INK-02'] === 2 && counts['INK-05'] === 2 && counts['INK-06'] === 1;
  })
};
results.interactionPass = { menuPass, cookiePass, anchorPass, focusPass };
results.pass = Object.values(results.risks).every(Boolean) && Object.values(results.interactionPass).every(Boolean);
await browser.close();
const output = `${outputDir}/APP-INK_GATE3_${mode.toUpperCase()}_OBSERVATIONS_V0.2.json`;
fs.writeFileSync(output, `${JSON.stringify(results, null, 2)}\n`);
console.log(JSON.stringify({ output, pass: results.pass, risks: results.risks, interactionPass: results.interactionPass, bodyFocus: Object.fromEntries(Object.entries(results.bodyKeyboardFocus).map(([key, value]) => [key, { expectedCount: value.expectedCount, keyboardReachedCount: value.keyboardReachedCount, pass: value.pass }])) }, null, 2));
process.exit(results.pass ? 0 : 1);
