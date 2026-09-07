const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const sharp = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');

const root = path.resolve(__dirname, '..');
const entry = path.join(root, 'source', 'index.html');
const mode = process.argv.includes('--formal') ? 'formal' : 'preflight';
const outputDir = mode === 'formal' ? path.join(root, 'approval_core') : path.join(root, 'diagnostic_support', 'preflight');
const readableDir = path.join(root, 'diagnostic_support', 'readable-segments');
fs.mkdirSync(outputDir, { recursive: true });
if (mode === 'formal') fs.mkdirSync(readableDir, { recursive: true });

const widths = [
  { key: '1440', width: 1440, height: 1000, dpr: 1 },
  { key: '768', width: 768, height: 1000, dpr: 1 },
  { key: '390', width: 390, height: 844, dpr: 2 },
];

const expectedGrades = [
  ['M-350', 'Excellent hue and high gloss with strong hiding power.', '/products/m-350/'],
  ['M-510', 'TMP/TME-free multi-application grade with high brightness and durability.', '/products/m-510/'],
  ['M-896', 'Superior weather resistance with high gloss and excellent opacity for demanding exterior coatings.', '/products/m-896/'],
  ['M-895', 'High-opacity, high-gloss coatings grade with good weather resistance.', '/products/m-895/'],
  ['M-200', 'High-durability exterior plastics grade with strong anti-chalking performance.', '/products/m-200/'],
  ['M-210', 'High hiding power and easy dispersion for polyolefin masterbatch.', '/products/m-210/'],
  ['M-340', 'High whiteness with strong high-temperature anti-yellowing performance.', '/products/m-340/'],
  ['M-886', 'Bright-white plastics grade with excellent dispersion and processability.', '/products/m-886/'],
];

function sha256(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}

if (mode === 'formal') {
  const freezePath = path.join(root, 'approval_core', 'source-freeze.json');
  if (!fs.existsSync(freezePath)) throw new Error('Formal render requires approval_core/source-freeze.json');
  const freeze = JSON.parse(fs.readFileSync(freezePath, 'utf8'));
  if (freeze.freezeId !== 'CL-G5-V01-SOURCE-01') throw new Error(`Unexpected freeze ${freeze.freezeId}`);
  const drift = freeze.sourceIdentity.filter(x => !fs.existsSync(x.path) || fs.statSync(x.path).size !== x.bytes || sha256(x.path) !== x.sha256);
  if (drift.length) throw new Error(`Frozen source drift: ${JSON.stringify(drift)}`);
}

function pngSize(file) {
  const b = fs.readFileSync(file);
  return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
}

function rec(file, viewport, state, evidenceType = 'STATIC_VISUAL') {
  const size = pngSize(file);
  return {
    path: file.replace(/\\/g, '/'),
    relativePath: path.relative(root, file).replace(/\\/g, '/'),
    bytes: fs.statSync(file).size,
    sha256: sha256(file),
    logicalViewport: { width: viewport.width, height: viewport.height },
    physicalWidth: size.width,
    physicalHeight: size.height,
    scale: viewport.dpr,
    state,
    evidenceType,
  };
}

async function ready(page) {
  await page.goto(pathToFileURL(entry).href, { waitUntil: 'load' });
  await page.evaluate(async () => { await document.fonts.ready; window.scrollTo(0, 0); });
}

async function captureFull(page, vp, name, captures) {
  await ready(page);
  const file = path.join(outputDir, `${vp.key}-${name}.png`);
  await page.screenshot({ path: file, fullPage: true, animations: 'disabled' });
  captures.push(rec(file, vp, name));
  if (mode === 'formal' && name === 'default-full') {
    const fullMeta = await sharp(file).metadata();
    const total = Math.floor(fullMeta.height / vp.dpr);
    let index = 1;
    for (let y = 0; y < total; y += 800) {
      const h = Math.min(900, total - y);
      const segment = path.join(readableDir, `${vp.key}-default-${String(index).padStart(2, '0')}.png`);
      await sharp(file).extract({ left: 0, top: Math.round(y * vp.dpr), width: fullMeta.width, height: Math.round(h * vp.dpr) }).toFile(segment);
      index += 1;
    }
  }
}

async function captureRegion(page, vp, selector, name, captures) {
  await ready(page);
  const target = page.locator(selector);
  const box = await target.boundingBox();
  if (!box) throw new Error(`Missing region ${selector}`);
  const file = path.join(outputDir, `${vp.key}-${name}.png`);
  await target.screenshot({ path: file, animations: 'disabled' });
  captures.push(rec(file, vp, name));
}

async function captureMenu(page, vp, captures) {
  await ready(page);
  await page.locator('.menuButton').click();
  const file = path.join(outputDir, `${vp.key}-menu-open-focus.png`);
  await page.screenshot({ path: file, animations: 'disabled' });
  captures.push(rec(file, vp, 'menu-open-focus'));
}

async function captureCookie(page, vp, captures) {
  await ready(page);
  await page.locator('#cookie-trigger').scrollIntoViewIfNeeded();
  await page.locator('#cookie-trigger').click();
  const file = path.join(outputDir, `${vp.key}-cookie-open-focus.png`);
  await page.screenshot({ path: file, animations: 'disabled' });
  captures.push(rec(file, vp, 'cookie-open-focus'));
}

async function captureAnchor(page, vp, captures) {
  await ready(page);
  await page.locator('a[href="#explore-chloride-process-grades"]').click();
  const file = path.join(outputDir, `${vp.key}-anchor-focus.png`);
  await page.screenshot({ path: file, animations: 'disabled' });
  captures.push(rec(file, vp, 'anchor-focus'));
}

async function captureHover(page, vp, captures) {
  await ready(page);
  const a = page.locator('.cl-grade').filter({ hasText: 'M-896' }).locator('a');
  await a.scrollIntoViewIfNeeded();
  await a.hover();
  const file = path.join(outputDir, `${vp.key}-m896-hover.png`);
  await page.screenshot({ path: file, animations: 'disabled' });
  captures.push(rec(file, vp, 'm896-hover'));
}

async function inspectPage(page, vp) {
  await ready(page);
  const base = await page.evaluate((expected) => {
    const visible = (el) => {
      const cs = getComputedStyle(el), r = el.getBoundingClientRect();
      return cs.display !== 'none' && cs.visibility !== 'hidden' && !el.hidden && r.width > 0 && r.height > 0;
    };
    const q = (s) => document.querySelector(s);
    const controls = [...document.querySelectorAll('a,button')].filter(visible).map(el => {
      const r = el.getBoundingClientRect();
      return { label: (el.textContent || el.getAttribute('aria-label') || '').trim(), width: r.width, height: r.height };
    });
    const overflow = [...document.querySelectorAll('body *')].filter(visible).map(el => {
      const r = el.getBoundingClientRect();
      return { tag: el.tagName, cls: el.className || '', left: r.left, right: r.right, top: r.top, width: r.width };
    }).filter(x => x.left < -1 || x.right > innerWidth + 1);
    const clipped = [...document.querySelectorAll('h1,h2,h3,p,a,button')].filter(visible).map(el => {
      const cs = getComputedStyle(el);
      return { text: (el.textContent || '').trim().slice(0, 80), sw: el.scrollWidth, cw: el.clientWidth, sh: el.scrollHeight, ch: el.clientHeight, ox: cs.overflowX, oy: cs.overflowY };
    }).filter(x => (x.sw > x.cw + 1 && x.ox !== 'visible') || (x.sh > x.ch + 1 && x.oy !== 'visible'));
    const grades = [...document.querySelectorAll('.cl-grade')].map(li => [
      li.querySelector('h3').textContent.trim(),
      li.querySelector('p').textContent.trim(),
      li.querySelector('a').getAttribute('href'),
    ]);
    const activeDesktop = [...document.querySelectorAll('.desktopNav [aria-current="page"]')].map(a => a.textContent.trim());
    const activeMobile = [...document.querySelectorAll('.mobileNav [aria-current="page"]')].map(a => a.textContent.trim());
    const desktopVisible = visible(q('.desktopNav'));
    const mobileVisible = visible(q('.mobileNav'));
    return {
      viewport: { width: innerWidth, height: innerHeight, dpr: devicePixelRatio },
      scroll: { clientWidth: document.documentElement.clientWidth, scrollWidth: document.documentElement.scrollWidth, scrollHeight: document.documentElement.scrollHeight },
      font: getComputedStyle(q('body')).fontFamily,
      h1: [...document.querySelectorAll('h1')].map(x => x.textContent.trim()),
      modules: [...document.querySelectorAll('main > section')].map(x => x.id),
      grades,
      gradesMatch: JSON.stringify(grades) === JSON.stringify(expected),
      controls,
      undersizedControls: controls.filter(x => x.width < 43.99 || x.height < 43.99),
      overflow,
      clipped,
      activeDesktop,
      activeMobile,
      accessibleSurfaceExpectation: innerWidth > 1100 ? { desktopVisible, mobileHidden: !mobileVisible } : { desktopHidden: !desktopVisible, mobileHiddenClosed: !mobileVisible },
      headerHeight: q('.header').getBoundingClientRect().height,
      footerWidth: q('footer').getBoundingClientRect().width,
      buyerGovernanceLeak: /DRAFT_FOR|GATE ?[0-9]|CURRENT|PENDING|EVIDENCE GAP|RELEASE BLOCKER/i.test(q('main').innerText),
      forbiddenGradeNames: ['M-2377','M-996','M-2196','M-108','M-52','CR-901'].filter(s => q('main').innerText.includes(s)),
      title: document.title,
      metaDescription: q('meta[name="description"]').content,
      canonical: q('link[rel="canonical"]').href,
      robots: q('meta[name="robots"]').content,
      networkAttempts: window.__networkAttempts || 0,
    };
  }, expectedGrades);

  const anchor = {};
  await page.locator('a[href="#explore-chloride-process-grades"]').click();
  anchor.hash = await page.evaluate(() => location.hash);
  anchor.focusId = await page.evaluate(() => document.activeElement && document.activeElement.id);
  anchor.targetTop = await page.locator('#explore-chloride-process-grades').evaluate(el => el.getBoundingClientRect().top);
  await page.keyboard.press('Tab');
  anchor.nextTab = await page.evaluate(() => document.activeElement && document.activeElement.textContent.trim());

  const downstream = {};
  await ready(page);
  await page.locator('#cl-05 a[href="/request-a-quote/"]').click();
  downstream.rfq = await page.evaluate(() => window.planningNavigation.at(-1));
  await page.locator('#cl-04 a[href="/request-documents/"]').click();
  downstream.documents = await page.evaluate(() => window.planningNavigation.at(-1));
  await page.locator('.cl-grade').first().locator('a').click();
  downstream.grade = await page.evaluate(() => window.planningNavigation.at(-1));

  let menu = { applicable: vp.width <= 1100 };
  if (menu.applicable) {
    await ready(page);
    const returnY = await page.evaluate(() => { window.scrollTo(0, 0); return scrollY; });
    await page.locator('.menuButton').click();
    menu.open = await page.evaluate(() => ({ expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'), hidden: document.querySelector('.mobileNav').hidden, active: document.activeElement.textContent.trim(), mainInert: document.querySelector('main').inert, footerInert: document.querySelector('footer').inert, bodyOverflow: document.body.style.overflow }));
    await page.locator('.mobileNav a').last().focus();
    await page.keyboard.press('Tab');
    menu.forwardWrap = await page.evaluate(() => document.activeElement.className);
    await page.keyboard.press('Shift+Tab');
    menu.backwardWrap = await page.evaluate(() => document.activeElement.textContent.trim());
    await page.keyboard.press('Escape');
    menu.escape = await page.evaluate((returnY) => ({ expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'), hidden: document.querySelector('.mobileNav').hidden, activeClass: document.activeElement.className, scrollY, returnY, mainInert: document.querySelector('main').inert, bodyOverflow: document.body.style.overflow }), returnY);
    await page.locator('.menuButton').click();
    await page.setViewportSize({ width: 1200, height: vp.height });
    menu.desktopRelease = await page.evaluate(() => ({ expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'), hidden: document.querySelector('.mobileNav').hidden, mainInert: document.querySelector('main').inert, bodyOverflow: document.body.style.overflow }));
    await page.setViewportSize({ width: vp.width, height: vp.height });
  }

  await ready(page);
  await page.locator('#cookie-trigger').scrollIntoViewIfNeeded();
  await page.locator('#cookie-trigger').click();
  const cookie = {};
  cookie.open = await page.evaluate(() => ({ open: document.querySelector('.cookie-layer').open, active: document.activeElement.textContent.trim() }));
  await page.locator('.cookie-layer a').focus();
  await page.keyboard.press('Tab');
  cookie.forwardWrap = await page.evaluate(() => document.activeElement.textContent.trim());
  await page.keyboard.press('Shift+Tab');
  cookie.backwardWrap = await page.evaluate(() => document.activeElement.textContent.trim());
  await page.keyboard.press('Escape');
  cookie.escape = await page.evaluate(() => ({ open: document.querySelector('.cookie-layer').open, activeId: document.activeElement.id }));

  return { base, anchor, downstream, menu, cookie };
}

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const captures = [];
  const observations = [];
  const pageErrors = [];
  const requests = [];
  try {
    for (const vp of widths) {
      const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: vp.dpr, colorScheme: 'light', reducedMotion: 'reduce' });
      const page = await context.newPage();
      page.on('pageerror', e => pageErrors.push({ viewport: vp.key, message: e.message }));
      page.on('request', req => { if (/^https?:/i.test(req.url())) requests.push({ viewport: vp.key, url: req.url() }); });
      observations.push({ viewport: vp, result: await inspectPage(page, vp) });
      await captureFull(page, vp, 'default-full', captures);
      await captureCookie(page, vp, captures);
      await captureAnchor(page, vp, captures);
      if (vp.width <= 1100) await captureMenu(page, vp, captures);
      if (vp.width >= 768) {
        await captureRegion(page, vp, '#cl-02', 'process-full-width', captures);
        await captureRegion(page, vp, '#cl-05', 'final-rfq-full-width', captures);
        await captureRegion(page, vp, 'footer', 'footer-full-width', captures);
      }
      if (vp.width === 1440) await captureHover(page, vp, captures);
      await context.close();
    }

    const noJsContext = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, javaScriptEnabled: false });
    const noJsPage = await noJsContext.newPage();
    await noJsPage.goto(pathToFileURL(entry).href + '#explore-chloride-process-grades');
    const noJs = await noJsPage.evaluate(() => ({ hash: location.hash, scrollY, targetTop: document.getElementById('explore-chloride-process-grades').getBoundingClientRect().top }));
    await noJsContext.close();

    const assertions = [];
    const add = (id, pass, actual) => assertions.push({ id, pass: !!pass, actual });
    for (const o of observations) {
      const { viewport: vp, result: r } = o;
      add(`${vp.key}-width`, r.base.scroll.clientWidth === vp.width && r.base.scroll.scrollWidth === vp.width, r.base.scroll);
      add(`${vp.key}-font`, /Inter/i.test(r.base.font), r.base.font);
      add(`${vp.key}-h1`, r.base.h1.length === 1 && r.base.h1[0] === 'Chloride Process Titanium Dioxide', r.base.h1);
      add(`${vp.key}-modules`, JSON.stringify(r.base.modules) === JSON.stringify(['cl-01','cl-02','cl-03','cl-04','cl-05']), r.base.modules);
      add(`${vp.key}-grades`, r.base.gradesMatch, r.base.grades);
      add(`${vp.key}-controls44`, r.base.undersizedControls.length === 0, r.base.undersizedControls);
      add(`${vp.key}-no-overflow`, r.base.overflow.length === 0 && r.base.clipped.length === 0, { overflow: r.base.overflow, clipped: r.base.clipped });
      add(`${vp.key}-header-height`, Math.abs(r.base.headerHeight - (vp.width > 1100 ? 84 : 64)) < 0.1, r.base.headerHeight);
      add(`${vp.key}-footer-width`, Math.abs(r.base.footerWidth - vp.width) < 0.1, r.base.footerWidth);
      add(`${vp.key}-chrome-current`, r.base.activeDesktop.length === 1 && r.base.activeDesktop[0] === 'Products' && r.base.activeMobile.length === 1 && r.base.activeMobile[0] === 'Products', { desktop: r.base.activeDesktop, mobile: r.base.activeMobile });
      add(`${vp.key}-buyer-clean`, !r.base.buyerGovernanceLeak && r.base.forbiddenGradeNames.length === 0, { buyerGovernanceLeak: r.base.buyerGovernanceLeak, forbiddenGradeNames: r.base.forbiddenGradeNames });
      add(`${vp.key}-metadata`, r.base.title === 'Chloride Process Titanium Dioxide | TiO2 Malaysia' && r.base.metaDescription.startsWith('Explore eight Malaysia-origin') && r.base.robots === 'noindex,nofollow', { title: r.base.title, description: r.base.metaDescription, robots: r.base.robots, canonical: r.base.canonical });
      add(`${vp.key}-anchor`, r.anchor.hash === '#explore-chloride-process-grades' && r.anchor.focusId === 'explore-chloride-process-grades' && r.anchor.nextTab === 'View M-350', r.anchor);
      add(`${vp.key}-downstream-context`, r.downstream.rfq.context?.source_page_id === 'PRODUCT-PROC-CL' && r.downstream.documents.context?.source_page_id === 'PRODUCT-PROC-CL' && !r.downstream.grade.context, r.downstream);
      if (r.menu.applicable) {
        add(`${vp.key}-menu-open`, r.menu.open.expanded === 'true' && !r.menu.open.hidden && r.menu.open.active === 'Home' && r.menu.open.mainInert && r.menu.open.footerInert && r.menu.open.bodyOverflow === 'hidden', r.menu.open);
        add(`${vp.key}-menu-loop`, r.menu.forwardWrap.includes('menuButton') && r.menu.backwardWrap === 'Request a Quote', { forward: r.menu.forwardWrap, backward: r.menu.backwardWrap });
        add(`${vp.key}-menu-escape`, r.menu.escape.expanded === 'false' && r.menu.escape.hidden && r.menu.escape.activeClass.includes('menuButton') && r.menu.escape.scrollY === r.menu.escape.returnY && !r.menu.escape.mainInert && r.menu.escape.bodyOverflow === '', r.menu.escape);
        add(`${vp.key}-menu-desktop-release`, r.menu.desktopRelease.expanded === 'false' && r.menu.desktopRelease.hidden && !r.menu.desktopRelease.mainInert && r.menu.desktopRelease.bodyOverflow === '', r.menu.desktopRelease);
      }
      add(`${vp.key}-cookie`, r.cookie.open.open && r.cookie.open.active === 'Close' && r.cookie.forwardWrap === 'Close' && r.cookie.backwardWrap === 'Read Cookie Policy' && !r.cookie.escape.open && r.cookie.escape.activeId === 'cookie-trigger', r.cookie);
    }
    add('no-js-fragment', noJs.hash === '#explore-chloride-process-grades' && noJs.scrollY > 0 && Math.abs(noJs.targetTop - 88) < 2, noJs);
    add('page-errors', pageErrors.length === 0, pageErrors);
    add('network-attempts', requests.length === 0, requests);

    const runtime = {
      pageId: 'PRODUCT-PROC-CL',
      mode,
      candidateStatus: 'DRAFT_FOR_PROJECT_CONTROL_REVIEW',
      renderer: { browser: 'Chrome', playwright: require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json').version, node: process.version, scheme: 'file', externalNetworkAllowed: false },
      observations,
      noJs,
      assertions,
      summary: { total: assertions.length, passed: assertions.filter(x => x.pass).length, failed: assertions.filter(x => !x.pass).length },
      pageErrors,
      httpRequests: requests,
      captures,
    };
    fs.writeFileSync(path.join(outputDir, 'runtime.json'), JSON.stringify(runtime, null, 2));
    console.log(JSON.stringify({ mode, summary: runtime.summary, captures: captures.length, runtime: path.join(outputDir, 'runtime.json') }, null, 2));
    if (runtime.summary.failed) process.exitCode = 2;
  } finally {
    await browser.close();
  }
})().catch(err => { console.error(err); process.exit(1); });
