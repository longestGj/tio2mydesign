const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const project = 'D:/23MySec';
const source = path.join(root, 'source/MARKET-EU-PL_GATE5_FULL_VISUAL_V0.1.html');
const core = path.join(root, 'approval_core');
const diagnostic = path.join(root, 'diagnostic_support');
const freezePath = path.join(core, 'source-freeze.json');
const preflight = process.argv.includes('--preflight');
const freezeId = 'PL-G5-V01-SOURCE-01';
const records = [];
const captures = [];
const pageErrors = [];
const network = [];

const inputRelativePaths = [
  'AGENTS.md',
  'PROJECT_CONTEXT.md',
  'docs/architecture/PAGE_GATE_1_5_STANDARD_V1.1.md',
  'docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.0.md',
  'docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md',
  'docs/page-briefs/MARKET-EU-PL_POLAND_BRIEF_V0.2.md',
  'pages/markets/poland/MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.17.md',
  'pages/markets/poland/05_review/MARKET-EU-PL_GATE5_USER_AUTHORIZATION_V0.1.md',
  'pages/markets/poland/MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.16.md',
  'pages/markets/poland/05_review/MARKET-EU-PL_GATE4_USER_APPROVAL_AND_CLOSURE_V0.1.md',
  'pages/markets/poland/04_planning/MARKET-EU-PL_GATE2_CONTENT_SKELETON_V0.2.md',
  'pages/markets/poland/04_planning/MARKET-EU-PL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md',
  'pages/markets/poland/04_planning/MARKET-EU-PL_GATE2_CONTENT_CONTRACT_V0.4.md',
  'pages/markets/poland/05_review/MARKET-EU-PL_GATE3_TO_GATE4_HANDOFF_V0.1.md',
  'pages/markets/poland/04_planning/gate3-v0.1/MARKET-EU-PL_GATE3_RESPONSIVE_WIREFRAME_V0.1.html',
  'pages/markets/poland/04_planning/gate4-v0.2/MARKET-EU-PL_GATE4_VISUAL_DIRECTION_AND_METHOD_REPORT_V0.2.md',
  'pages/markets/poland/04_planning/gate4-v0.2/MARKET-EU-PL_GATE4_VISUAL_SAMPLES_V0.2.html',
  'pages/markets/poland/04_planning/gate4-v0.2/visual-rules.css',
  'brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md',
  'brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md',
  'docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md',
  'docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md',
  'docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md',
  'brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md',
  'pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md',
  'pages/legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md',
  'agents/gate5-execution/agent.md',
  'skills/full-page-visual-composition/SKILL.md',
  'skills/layout-interaction-verification/SKILL.md',
  'skills/layout-interaction-verification/references/core-risk-model.md'
];

const dependencyPaths = [
  source,
  path.join(root, 'source/visual-rules.css'),
  path.join(root, 'source/dependencies/shared-chrome-style.snapshot.css'),
  path.join(root, 'source/dependencies/Inter-Variable.ttf'),
  path.join(project, 'brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg'),
  path.join(project, 'brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg')
];

function sha256(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}

function identity(file) {
  const stat = fs.statSync(file);
  return {
    path: file.replaceAll('\\', '/'),
    relativePath: path.relative(root, file).replaceAll('\\', '/'),
    bytes: stat.size,
    sha256: sha256(file)
  };
}

function check(ok, name, details = null, type = 'ACTUAL_RUNTIME') {
  records.push({ type, name, ok, details });
  if (!ok) throw new Error(name);
}

function pngDimensions(file) {
  const buf = fs.readFileSync(file);
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function luminance(rgb) {
  const values = rgb.match(/[\d.]+/g).slice(0, 3).map(Number).map((value) => {
    const channel = value / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * values[0] + 0.7152 * values[1] + 0.0722 * values[2];
}

function contrast(a, b) {
  const first = luminance(a);
  const second = luminance(b);
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
}

function expectedFromBuyerCopy() {
  const file = path.join(project, 'pages/markets/poland/04_planning/MARKET-EU-PL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md');
  const markdown = fs.readFileSync(file, 'utf8').replace(/<!--[\s\S]*?-->/g, '');
  const lines = markdown.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  return {
    headings: lines.filter((line) => line.startsWith('#')).map((line) => line.replace(/^#+\s+/, '')),
    paragraphs: lines.filter((line) => !line.startsWith('#') && !line.startsWith('[')),
    links: [...markdown.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)].map((match) => ({ text: match[1], href: match[2] }))
  };
}

async function capture(page, name, viewport, options = {}) {
  const suffix = viewport.dpr === 2 ? '-logical-at2x' : '';
  const file = path.join(core, `${name}-${viewport.width}${suffix}.png`);
  if (options.selector) {
    await page.locator(options.selector).screenshot({ path: file });
  } else if (options.hero) {
    await page.evaluate(() => scrollTo(0, 0));
    const bottom = Math.ceil(await page.locator('#pl-01').evaluate((node) => node.getBoundingClientRect().bottom));
    await page.screenshot({ path: file, clip: { x: 0, y: 0, width: viewport.width, height: bottom } });
  } else {
    await page.screenshot({ path: file, fullPage: Boolean(options.fullPage) });
  }
  const dimensions = pngDimensions(file);
  captures.push({
    ...identity(file),
    role: options.role || name,
    state: options.state || 'default',
    evidenceType: 'STATIC_VISUAL',
    logicalViewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: viewport.dpr,
    physicalDimensions: dimensions,
    sourceFreeze: freezeId
  });
}

(async () => {
  fs.mkdirSync(core, { recursive: true });
  fs.mkdirSync(diagnostic, { recursive: true });
  const dependencies = dependencyPaths.map(identity);
  const inputs = inputRelativePaths.map((relative) => identity(path.join(project, relative)));
  const combinedSha256 = crypto.createHash('sha256').update(JSON.stringify({ dependencies, inputs })).digest('hex');
  const freeze = {
    freezeId,
    createdAt: new Date().toISOString(),
    status: 'SOURCE_FROZEN_AFTER_PREFLIGHT / DRAFT_FOR_PROJECT_CONTROL_REVIEW',
    page: { id: 'MARKET-EU-PL', url: '/markets/poland/', language: 'en', siteScope: 'tio2-my' },
    gate5Authorization: 'PL-G5-START-01',
    pageApproval: 'PENDING_PROJECT_CONTROL_AND_USER_REVIEW',
    gate6Authorization: 'NOT_AUTHORIZED',
    entry: identity(source),
    dependencies,
    inputs,
    combinedSha256,
    renderer: {
      node: process.version,
      playwright: require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json').version,
      browserChannel: 'chrome',
      scheme: 'file',
      externalNetwork: 'blocked'
    }
  };

  if (!preflight) {
    const frozen = JSON.parse(fs.readFileSync(freezePath, 'utf8'));
    for (const item of [...frozen.dependencies, ...frozen.inputs]) {
      check(fs.existsSync(item.path) && sha256(item.path) === item.sha256, `Frozen identity unchanged: ${item.relativePath}`);
    }
    check(frozen.combinedSha256 === combinedSha256, 'Frozen combination identity unchanged', { expected: frozen.combinedSha256, actual: combinedSha256 });
  }

  const expected = expectedFromBuyerCopy();
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  freeze.renderer.chrome = browser.version();
  const viewports = [
    { width: 1440, height: 1000, dpr: 1, label: 'desktop' },
    { width: 768, height: 1000, dpr: 1, label: 'tablet' },
    { width: 390, height: 844, dpr: 2, label: 'mobile' }
  ];

  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: viewport.dpr,
      colorScheme: 'light',
      reducedMotion: 'reduce'
    });
    const page = await context.newPage();
    await page.route(/^https?:/i, (route) => {
      network.push(route.request().url());
      route.abort();
    });
    page.on('pageerror', (error) => pageErrors.push(error.message));
    await page.goto(pathToFileURL(source).href, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await Promise.all([...await page.locator('img').all()].map((image) => image.evaluate((node) => node.decode())));

    const content = await page.evaluate(() => ({
      headings: [...document.querySelectorAll('main h1, main h2, main h3')].map((node) => node.textContent.trim()),
      paragraphs: [...document.querySelectorAll('main p')].map((node) => node.textContent.trim()),
      links: [...document.querySelectorAll('main a')].map((node) => ({ text: node.textContent.trim(), href: node.getAttribute('href') })),
      modules: [...document.querySelectorAll('main section')].map((node) => node.id),
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content,
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      robots: document.querySelector('meta[name="robots"]')?.content
    }));
    check(JSON.stringify(content.headings) === JSON.stringify(expected.headings), `${viewport.label}: exact approved headings`, content.headings);
    check(JSON.stringify(content.paragraphs) === JSON.stringify(expected.paragraphs), `${viewport.label}: exact approved paragraphs`, content.paragraphs);
    check(JSON.stringify(content.links) === JSON.stringify(expected.links), `${viewport.label}: exact approved body links`, content.links);
    check(JSON.stringify(content.modules) === JSON.stringify(['pl-01', 'pl-02', 'pl-03', 'pl-04', 'pl-05']), `${viewport.label}: approved module order`, content.modules);
    check(content.title === 'Titanium Dioxide Supplier for Poland | TiO2 Malaysia', `${viewport.label}: approved title`);
    check(content.description === 'Compare Malaysia-origin titanium dioxide grades for coatings, plastics and masterbatch in Poland. Request product documents or submit a quotation request.', `${viewport.label}: approved description`);
    check(content.canonical === 'https://tio2malaysia.com/markets/poland/', `${viewport.label}: approved canonical`);
    check(content.robots === 'noindex,nofollow', `${viewport.label}: local planning source remains noindex`, content.robots, 'SOURCE_INSPECTION');

    const geometry = await page.evaluate(() => ({
      viewportWidth: innerWidth,
      documentScrollWidth: document.documentElement.scrollWidth,
      documentHeight: document.documentElement.scrollHeight,
      headerHeight: document.querySelector('header').getBoundingClientRect().height,
      fontReady: document.fonts.check('17px Inter'),
      images: [...document.images].map((node) => ({ src: node.getAttribute('src'), loaded: node.complete && node.naturalWidth > 0, width: node.getBoundingClientRect().width, height: node.getBoundingClientRect().height })),
      visibleControls: [...document.querySelectorAll('a, button')].filter((node) => {
        const rect = node.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      }).map((node) => {
        const rect = node.getBoundingClientRect();
        return { label: node.textContent.trim() || node.getAttribute('aria-label'), width: rect.width, height: rect.height };
      }),
      mainText: [...document.querySelectorAll('main h1, main h2, main h3, main p, main a')].map((node) => {
        const rect = node.getBoundingClientRect();
        return {
          text: node.textContent.trim(),
          width: rect.width,
          height: rect.height,
          scrollWidth: node.scrollWidth,
          clientWidth: node.clientWidth,
          scrollHeight: node.scrollHeight,
          clientHeight: node.clientHeight,
          overflow: getComputedStyle(node).overflow,
          textOverflow: getComputedStyle(node).textOverflow
        };
      }),
      applicationColumns: getComputedStyle(document.querySelector('.application-paths')).gridTemplateColumns,
      sectionColumns: getComputedStyle(document.querySelector('.section-grid')).gridTemplateColumns,
      activeCurrentCount: [...document.querySelectorAll('nav:not([hidden]) [aria-current="page"]')].filter((node) => node.getBoundingClientRect().width > 0).length,
      visibleCurrentTextCount: (document.body.innerText.match(/\bCURRENT\b/g) || []).length
    }));
    check(geometry.documentScrollWidth === viewport.width, `${viewport.label}: no horizontal document overflow`, geometry);
    check(geometry.visibleControls.every((control) => control.width >= 44 && control.height >= 44), `${viewport.label}: all visible controls at least 44 by 44`, geometry.visibleControls);
    check(geometry.images.every((image) => image.loaded), `${viewport.label}: logo assets decoded`, geometry.images);
    check(geometry.fontReady, `${viewport.label}: Inter loaded`);
    check(geometry.mainText.every((item) => item.scrollWidth <= item.clientWidth + 1 && item.scrollHeight <= item.clientHeight + 1), `${viewport.label}: no text box clipping`, geometry.mainText);
    const expectedVisibleCurrent = viewport.width > 1100 ? 1 : 0;
    check(geometry.activeCurrentCount === expectedVisibleCurrent && geometry.visibleCurrentTextCount === 0, `${viewport.label}: current navigation treatment and no CURRENT label`, { activeCurrentCount: geometry.activeCurrentCount, expectedVisibleCurrent, visibleCurrentTextCount: geometry.visibleCurrentTextCount });

    const colors = await page.evaluate(() => {
      const style = (selector) => getComputedStyle(document.querySelector(selector));
      return {
        bodyOnWhite: [style('#pl-02 p').color, 'rgb(255, 255, 255)'],
        headingOnSoft: [style('h1').color, style('#pl-01').backgroundColor],
        primary: [style('#pl-01 .body-action a[href="/request-a-quote/"]').color, style('#pl-01 .body-action a[href="/request-a-quote/"]').backgroundColor],
        supportingOnSoft: [style('#pl-01 .body-action a[href="/products/"]').color, style('#pl-01').backgroundColor],
        footer: [style('.copyright').color, style('.footer').backgroundColor]
      };
    });
    const ratios = Object.entries(colors).map(([name, [foreground, background]]) => ({ name, foreground, background, ratio: contrast(foreground, background) }));
    check(ratios.every((item) => item.ratio >= 4.5), `${viewport.label}: normal text contrast`, ratios);

    for (const link of await page.locator('main a').all()) {
      const href = await link.getAttribute('href');
      await link.click();
      const observed = await page.evaluate(() => window.planningNavigation.at(-1));
      check(observed.href === href, `${viewport.label}: local navigation intent ${observed.label}`, observed, 'LOCAL_SIMULATION');
    }

    if (preflight) {
      const file = path.join(diagnostic, `preflight-full-${viewport.width}${viewport.dpr === 2 ? '-logical-at2x' : ''}.png`);
      await page.screenshot({ path: file, fullPage: true });
    } else {
      await page.evaluate(() => { document.activeElement?.blur(); scrollTo(0, 0); });
      await page.mouse.move(0, 0);
      await capture(page, 'full-page', viewport, { fullPage: true, role: 'required-full-page', state: 'default' });
    }

    const heroPrimary = page.locator('#pl-01 .body-action a[href="/request-a-quote/"]');
    await heroPrimary.focus();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Shift+Tab');
    const focus = await heroPrimary.evaluate((node) => ({ active: document.activeElement === node, focusVisible: node.matches(':focus-visible'), outline: getComputedStyle(node).outline, offset: getComputedStyle(node).outlineOffset }));
    check(focus.active && focus.focusVisible, `${viewport.label}: hero primary actual keyboard focus`, focus);
    if (!preflight) await capture(page, 'hero-primary-focus', viewport, { hero: true, role: 'focus-state', state: 'hero-primary-focus' });

    const supporting = page.locator('#pl-04 .body-action:last-child a');
    await supporting.hover();
    const hover = await supporting.evaluate((node) => ({ color: getComputedStyle(node).color, background: getComputedStyle(node).backgroundColor }));
    hover.ratio = contrast(hover.color, hover.background);
    check(hover.ratio >= 4.5, `${viewport.label}: supporting hover contrast`, hover);
    if (!preflight) await capture(page, 'documents-support-hover', viewport, { selector: '#pl-04', role: 'hover-state', state: 'document-hub-hover' });
    await page.mouse.move(0, 0);

    if (viewport.width < 1101) {
      await page.evaluate(() => scrollTo(0, 0));
      const toggle = page.locator('.menuButton');
      await toggle.focus();
      await page.keyboard.press('Enter');
      const menuOpen = await page.evaluate(() => ({
        expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'),
        label: document.querySelector('.menuButton').textContent,
        focus: document.activeElement.textContent,
        bodyOverflow: document.body.style.overflow,
        backgroundInert: document.querySelector('main').inert && document.querySelector('footer').inert && document.querySelector('.logoLink').inert && document.querySelector('.headerRfq').inert,
        links: [...document.querySelectorAll('.mobileNav a')].map((node) => ({ text: node.textContent.trim(), current: node.getAttribute('aria-current'), width: node.getBoundingClientRect().width, height: node.getBoundingClientRect().height }))
      }));
      check(menuOpen.expanded === 'true' && menuOpen.label === 'Close' && menuOpen.focus === 'Home' && menuOpen.bodyOverflow === 'hidden' && menuOpen.backgroundInert && menuOpen.links.filter((link) => link.current === 'page').length === 1 && menuOpen.links.every((link) => link.width >= 44 && link.height >= 44), `${viewport.label}: mobile menu open state`, menuOpen);
      if (!preflight) await capture(page, 'menu-open-focus', viewport, { role: 'required-mobile-menu', state: 'menu-open-first-link-focus' });
      await toggle.focus();
      await page.keyboard.press('Shift+Tab');
      check(await page.locator('.mobileNav a').last().evaluate((node) => document.activeElement === node), `${viewport.label}: menu reverse focus cycle`);
      await page.keyboard.press('Tab');
      check(await toggle.evaluate((node) => document.activeElement === node), `${viewport.label}: menu forward focus cycle`);
      await page.keyboard.press('Escape');
      check(await toggle.evaluate((node) => document.activeElement === node && node.getAttribute('aria-expanded') === 'false' && node.textContent === 'Menu'), `${viewport.label}: menu Escape restores toggle focus`);
      await toggle.click();
      await page.locator('.mobileNav a[href="/products/"]').click();
      check(await page.locator('.mobileNav').isHidden() && await page.locator('main').evaluate((node) => !node.inert) && await toggle.evaluate((node) => document.activeElement === node), `${viewport.label}: menu selection closes and restores page`);
    }

    const cookieTrigger = page.locator('#cookie-trigger');
    await cookieTrigger.focus();
    await page.keyboard.press('Enter');
    check(await page.locator('.cookie-layer').evaluate((node) => node.open && document.activeElement === node.querySelector('button')), `${viewport.label}: Cookie Settings opens and focuses Close`);
    if (!preflight) await capture(page, 'cookie-settings-focus', viewport, { role: 'shared-cookie-state', state: 'cookie-open-close-focus' });
    await page.locator('.cookie-actions button').focus();
    await page.keyboard.press('Shift+Tab');
    check(await page.locator('.cookie-actions a').evaluate((node) => document.activeElement === node), `${viewport.label}: Cookie reverse focus cycle`);
    await page.keyboard.press('Tab');
    check(await page.locator('.cookie-actions button').evaluate((node) => document.activeElement === node), `${viewport.label}: Cookie forward focus cycle`);
    const cookieGeometry = await page.locator('.cookie-layer').evaluate((node) => ({
      open: node.open,
      width: node.getBoundingClientRect().width,
      height: node.getBoundingClientRect().height,
      scrollHeight: node.scrollHeight,
      clientHeight: node.clientHeight,
      controls: [...node.querySelectorAll('a, button')].map((control) => ({ width: control.getBoundingClientRect().width, height: control.getBoundingClientRect().height }))
    }));
    check(cookieGeometry.controls.every((control) => control.width >= 44 && control.height >= 44) && cookieGeometry.scrollHeight <= cookieGeometry.clientHeight + 1, `${viewport.label}: Cookie content and controls fit`, cookieGeometry);
    await page.keyboard.press('Escape');
    check(await cookieTrigger.evaluate((node) => document.activeElement === node), `${viewport.label}: Cookie Escape restores trigger focus`);

    await context.close();
  }

  await browser.close();
  check(network.length === 0 && pageErrors.length === 0, 'No external network requests or page errors', { network, pageErrors });

  const runtime = {
    freezeId,
    stage: preflight ? 'PREFLIGHT' : 'FORMAL_EXPORT',
    date: new Date().toISOString(),
    renderer: freeze.renderer,
    viewports,
    records,
    captures
  };
  fs.writeFileSync(path.join(diagnostic, preflight ? 'preflight-observations.json' : 'runtime-observations.json'), JSON.stringify(runtime, null, 2));
  if (preflight) {
    fs.writeFileSync(freezePath, JSON.stringify(freeze, null, 2));
  } else {
    fs.writeFileSync(path.join(core, 'export-inventory.json'), JSON.stringify({ freezeId, sourceFreezeSha256: sha256(freezePath), renderer: freeze.renderer, captures }, null, 2));
  }
  console.log(JSON.stringify({ stage: runtime.stage, freezeId, combinedSha256, records: records.length, captures: captures.length, browser: freeze.renderer.chrome }, null, 2));
})().catch((error) => {
  const failure = { date: new Date().toISOString(), stage: preflight ? 'PREFLIGHT' : 'FORMAL_EXPORT', error: error.stack, records, captures };
  fs.writeFileSync(path.join(diagnostic, `failure-${Date.now()}.json`), JSON.stringify(failure, null, 2));
  console.error(error);
  process.exitCode = 1;
});
