const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const phase = process.argv[2] || 'preflight';
if (!['direction', 'preflight', 'formal'].includes(phase)) throw new Error('phase must be direction, preflight or formal');
const root = 'D:/23MySec';
const base = root + '/pages/markets/germany/04_planning/gate4-v0.1';
const g3Path = root + '/pages/markets/germany/04_planning/gate3-v0.1/MARKET-EU-DE_GATE3_WIREFRAME_V0.1.html';
const source = base + '/MARKET-EU-DE_GATE4_COMPLETE_VISUAL_V0.1.html';
const inputIndexPath = base + '/input_index.json';
const out = phase === 'direction' ? base + '/diagnostic_support/4a-r1' : phase === 'formal' ? base + '/approval_core' : base + '/diagnostic_support/preflight-r1';
const resultPath = base + `/diagnostic_support/${phase}-r1-checks.json`;
fs.mkdirSync(out, { recursive: true });

const sha = buffer => crypto.createHash('sha256').update(buffer).digest('hex');
const identity = file => { const data = fs.readFileSync(file); return { path: file.replaceAll('\\', '/'), bytes: data.length, sha256: sha(data) }; };
const pngSize = file => { const data = fs.readFileSync(file); return { pixelWidth: data.readUInt32BE(16), pixelHeight: data.readUInt32BE(20) }; };
const normalize = value => value.replace(/\s+/g, ' ').trim();
const records = [];
const failures = [];
const assets = [];
const check = (name, pass, data = null, evidenceType = 'ACTUAL_RUNTIME') => {
  const record = { name, pass: Boolean(pass), evidenceType, data };
  records.push(record);
  if (!record.pass) failures.push(name);
  return record.pass;
};

const rgb = value => (value.match(/[\d.]+/g) || []).slice(0, 3).map(Number);
const luminance = value => rgb(value).map(v => { v /= 255; return v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }).reduce((s, v, i) => s + v * [.2126, .7152, .0722][i], 0);
const contrast = (a, b) => { const x = luminance(a), y = luminance(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); };

function expectedCandidate() {
  return fs.readFileSync(g3Path, 'utf8')
    .replace("file:///D:/23MySec/pages/markets/germany/04_planning/gate3-v0.1/dependencies/Inter-Variable.ttf", 'dependencies/Inter-Variable.ttf')
    .replace('file:///D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg', 'dependencies/tio2-malaysia-primary-horizontal-v0.1.svg')
    .replace('file:///D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg', 'dependencies/tio2-malaysia-reverse-monochrome-v0.1.svg')
    .replace('</head>', '<link rel="stylesheet" href="visual-direction.css"></head>');
}

async function ready(page) {
  await page.waitForLoadState('load');
  await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(img => img.complete ? null : new Promise(resolve => { img.onload = img.onerror = resolve; }))); });
}

async function saveScreenshot(page, file, options, meta) {
  await page.screenshot({ path: file, animations: 'disabled', ...options });
  const item = { ...identity(file), ...pngSize(file), ...meta, evidenceType: 'STATIC_VISUAL', sourceSha256: identity(source).sha256, cssSha256: identity(base + '/visual-direction.css').sha256 };
  assets.push(item);
  return item;
}

async function saveLocatorScreenshot(locator, file, meta) {
  await locator.screenshot({ path: file, animations: 'disabled' });
  const item = { ...identity(file), ...pngSize(file), ...meta, evidenceType: 'STATIC_VISUAL', sourceSha256: identity(source).sha256, cssSha256: identity(base + '/visual-direction.css').sha256 };
  assets.push(item);
  return item;
}

async function clearState(page) {
  await page.evaluate(() => { if (document.activeElement && document.activeElement.blur) document.activeElement.blur(); scrollTo(0, 0); });
  await page.mouse.move(1, 1);
  await page.waitForTimeout(60);
}

async function run() {
  if (phase === 'formal') {
    const freezePath = base + '/approval_core/source-freeze.json';
    if (!fs.existsSync(freezePath)) throw new Error('formal run requires approval_core/source-freeze.json');
    const freeze = JSON.parse(fs.readFileSync(freezePath, 'utf8'));
    if (freeze.freeze_id !== 'DE-G4-COMPLETE-20260907-01-F01') throw new Error('unexpected source freeze id');
    for (const item of freeze.frozen_files) {
      const current = identity(item.path);
      if (current.bytes !== item.bytes || current.sha256 !== item.sha256) throw new Error(`frozen identity mismatch: ${item.path}`);
    }
  }
  const candidateText = fs.readFileSync(source, 'utf8');
  const inputIndex = JSON.parse(fs.readFileSync(inputIndexPath, 'utf8'));
  check('candidate exact derivation from approved Gate 3 source', candidateText === expectedCandidate(), { source: identity(source), g3: identity(g3Path) }, 'SOURCE_INSPECTION');
  check('input index binds current design source', inputIndex.design_source.sha256 === identity(source).sha256 && inputIndex.dependencies.every(item => fs.existsSync(item.path) && identity(item.path).sha256 === item.sha256), { inputDesign: inputIndex.design_source, actual: identity(source) }, 'SOURCE_INSPECTION');
  check('exact Germany identity and metadata', candidateText.includes('<title>Titanium Dioxide Supplier for Germany | TiO2 Malaysia</title>') && candidateText.includes('<link rel="canonical" href="https://tio2malaysia.com/markets/germany/">') && candidateText.includes('<html lang="en">'), null, 'SOURCE_INSPECTION');
  check('seven approved body modules only', (candidateText.match(/<main><section|<section class="module/g) || []).length === 7 && ['de-02','de-03','de-04','de-05','de-06','de-07'].every(id => candidateText.includes(`id="${id}"`)), null, 'SOURCE_INSPECTION');
  check('forbidden Germany claims absent', !/German (office|warehouse|inventory|language support)|Germany-specific Certificate of Origin|fixed lead time/i.test(candidateText), null, 'SOURCE_INSPECTION');

  const browser = await chromium.launch({ headless: true });
  const blockedNetwork = [];
  const viewports = [{ width: 1440, height: 900 }, { width: 768, height: 900 }, { width: 390, height: 844 }];
  try {
    for (const viewport of viewports) {
      const { width, height } = viewport;
      const context = await browser.newContext({ viewport, deviceScaleFactor: 1, reducedMotion: 'reduce' });
      await context.route(/^https?:/, route => { blockedNetwork.push(route.request().url()); route.abort(); });
      const page = await context.newPage();
      const pageErrors = [];
      page.on('pageerror', error => pageErrors.push(String(error)));
      await page.goto(pathToFileURL(source).href);
      await ready(page);

      const structure = await page.evaluate(() => ({
        headings: [...document.querySelectorAll('main > section h1,main > section h2')].map(n => n.textContent.trim()),
        modules: [...document.querySelectorAll('main > section')].map(n => n.id || 'de-01'),
        apps: [...document.querySelectorAll('.applicationCard h3')].map(n => n.textContent.trim()),
        appHrefs: [...document.querySelectorAll('.applicationCard a')].map(n => n.getAttribute('href')),
        checklist: document.querySelectorAll('.checklist li').length,
        references: [...document.querySelectorAll('.references a')].map(n => ({ text: n.textContent.trim(), href: n.getAttribute('href') })),
        currentDesktop: [...document.querySelectorAll('.desktopNav [aria-current="page"]')].map(n => n.textContent.trim()),
        currentMobile: [...document.querySelectorAll('.mobileNav [aria-current="page"]')].map(n => n.textContent.trim()),
        buyerCurrent: /\bCURRENT\b/.test(document.body.innerText),
        terms: [...document.querySelectorAll('a')].some(n => /terms/i.test(n.textContent) || n.getAttribute('href') === '/terms-of-use/')
      }));
      check(`${width}/approved module order and headings`, JSON.stringify(structure.modules) === JSON.stringify(['de-01','de-02','de-03','de-04','de-05','de-06','de-07']) && JSON.stringify(structure.headings) === JSON.stringify(['Titanium Dioxide Supplier for Germany','Start with the German Industrial Use You Need to Serve','Choose the Right Evaluation Path','Use Documents and Samples for the Review You Are Planning','Describe the German Destination Beyond a Country Label','Keep EU-Wide Checks with the EU Owners','Send a Germany Destination Request']), structure);
      check(`${width}/application and destination relationships`, JSON.stringify(structure.apps) === JSON.stringify(['Coatings','Plastics','Masterbatch']) && JSON.stringify(structure.appHrefs) === JSON.stringify(['/applications/titanium-dioxide-for-coatings/','/applications/titanium-dioxide-for-plastics/','/applications/titanium-dioxide-for-masterbatch/']) && structure.checklist === 5, structure);
      check(`${width}/source labels and targets`, structure.references.length === 3 && structure.references[0].text === 'VdL — German coatings market 2025' && structure.references[1].text === 'GKV — German plastics-processing industry statement' && structure.references[2].text === 'Hamburg Port Authority — Port Railway', structure.references);
      check(`${width}/shared current and legal contract`, JSON.stringify(structure.currentDesktop) === JSON.stringify(['Markets']) && JSON.stringify(structure.currentMobile) === JSON.stringify(['Markets']) && !structure.buyerCurrent && !structure.terms, structure);

      const geometry = await page.evaluate(() => {
        const doc = document.documentElement, footer = document.querySelector('footer');
        const visible = [...document.querySelectorAll('main h1,main h2,main h3,main p,main li,main article,main aside')].map(node => { const r = node.getBoundingClientRect(), s = getComputedStyle(node); return { tag: node.tagName, text: node.textContent.trim().slice(0, 70), left: r.left, right: r.right, top: r.top + scrollY, bottom: r.bottom + scrollY, width: r.width, height: r.height, overflowX: s.overflowX, overflowY: s.overflowY, lineClamp: s.webkitLineClamp, textOverflow: s.textOverflow }; });
        const targets = [...document.querySelectorAll('a,button')].filter(node => { const r = node.getBoundingClientRect(); return r.width > 0 && r.height > 0; }).map(node => { const r = node.getBoundingClientRect(); return { text: node.textContent.trim(), width: r.width, height: r.height }; });
        const style = sel => { const s = getComputedStyle(document.querySelector(sel)); return { display: s.display, color: s.color, background: s.backgroundColor, font: s.fontFamily, size: s.fontSize, line: s.lineHeight, columns: s.gridTemplateColumns.split(' ').filter(Boolean).length }; };
        return { clientWidth: doc.clientWidth, scrollWidth: doc.scrollWidth, scrollHeight: doc.scrollHeight, footerBottom: footer.getBoundingClientRect().bottom + scrollY, fontLoaded: document.fonts.check('16px Inter'), visible, targets, body: style('body'), h1: style('h1'), app: style('.applicationGrid'), destination: style('.destinationGrid'), references: style('.references'), primary: style('.primaryAction') };
      });
      check(`${width}/complete page closure and no horizontal overflow`, geometry.scrollWidth === width && Math.abs(geometry.scrollHeight - geometry.footerBottom) < 2 && geometry.fontLoaded && geometry.body.font.startsWith('Inter'), geometry);
      check(`${width}/all approved content visibly bounded and unclipped`, geometry.visible.every(x => x.width > 0 && x.height > 0 && x.left >= -.5 && x.right <= width + .5 && !['hidden','clip'].includes(x.overflowX) && !['hidden','clip'].includes(x.overflowY) && (x.lineClamp === 'none' || x.lineClamp === '') && x.textOverflow !== 'ellipsis'), geometry.visible.filter(x => !(x.width > 0 && x.height > 0 && x.left >= -.5 && x.right <= width + .5 && !['hidden','clip'].includes(x.overflowX) && !['hidden','clip'].includes(x.overflowY) && (x.lineClamp === 'none' || x.lineClamp === '') && x.textOverflow !== 'ellipsis')));
      check(`${width}/all visible controls at least 44 by 44`, geometry.targets.every(x => x.width >= 44 && x.height >= 44), geometry.targets.filter(x => x.width < 44 || x.height < 44));
      check(`${width}/responsive relationship`, width === 1440 ? geometry.app.columns === 3 && geometry.destination.columns === 2 && geometry.references.display === 'grid' && geometry.references.columns === 2 : geometry.app.columns === 1 && geometry.destination.columns === 1 && geometry.references.display === 'block', { app: geometry.app.columns, destination: geometry.destination.columns, references: geometry.references });
      check(`${width}/core contrast pairings`, contrast('rgb(51,65,85)', 'rgb(255,255,255)') >= 4.5 && contrast('rgb(0,128,120)', 'rgb(255,255,255)') >= 4.5 && contrast('rgb(255,255,255)', 'rgb(0,128,120)') >= 4.5, null, 'SOURCE_INSPECTION');
      check(`${width}/runtime errors`, pageErrors.length === 0, pageErrors);

      const mainLinks = page.locator('main a');
      const count = await mainLinks.count();
      for (let i = 0; i < count; i++) {
        const link = mainLinks.nth(i);
        const label = (await link.textContent()).trim();
        const before = await link.boundingBox();
        await link.hover();
        const hover = await link.evaluate(n => { const s = getComputedStyle(n); return { color: s.color, background: s.backgroundColor, decoration: s.textDecorationLine }; });
        const afterHover = await link.boundingBox();
        check(`${width}/hover/${i + 1}/${label}`, before && afterHover && Math.abs(before.width - afterHover.width) < .5 && Math.abs(before.height - afterHover.height) < .5 && (hover.decoration.includes('underline') || hover.background !== 'rgba(0, 0, 0, 0)'), { before, afterHover, hover });
        await link.focus();
        const focus = await link.evaluate(n => { const s = getComputedStyle(n); const r = n.getBoundingClientRect(); return { active: document.activeElement === n, outlineWidth: parseFloat(s.outlineWidth), outlineStyle: s.outlineStyle, outlineOffset: parseFloat(s.outlineOffset), rect: { left: r.left, right: r.right, top: r.top, bottom: r.bottom } }; });
        check(`${width}/focus/${i + 1}/${label}`, focus.active && focus.outlineStyle !== 'none' && focus.outlineWidth >= 3, focus);
      }

      const refFocus = await page.locator('.references a').nth(1).evaluate(n => { n.focus(); const s = getComputedStyle(n), r = n.getBoundingClientRect(), range = document.createRange(); const next = n.nextSibling; let nextRect = null; if (next && next.nodeType === Node.TEXT_NODE && next.textContent.trim()) { range.setStart(next, 0); range.setEnd(next, Math.min(next.textContent.length, 3)); const q = range.getBoundingClientRect(); nextRect = { left: q.left, right: q.right, top: q.top, bottom: q.bottom }; } return { outlineOffset: parseFloat(s.outlineOffset), paddingLeft: parseFloat(s.paddingLeft), paddingRight: parseFloat(s.paddingRight), anchor: { left: r.left, right: r.right, top: r.top, bottom: r.bottom }, nextRect }; });
      check(`${width}/reference focus remains inset from adjacent prose`, refFocus.outlineOffset < 0 && refFocus.paddingLeft >= 3 && refFocus.paddingRight >= 3, refFocus);

      for (let i = 0; i < count; i++) {
        const link = mainLinks.nth(i), href = await link.getAttribute('href');
        await link.click();
        const intent = await page.evaluate(() => window.localNavigationIntents.at(-1));
        const expectedContext = href === '/request-a-quote/' ? { destinationCountry: 'Germany', sourcePage: 'MARKET-EU-DE' } : {};
        check(`${width}/local navigation intent/${i + 1}`, intent && intent.href === href && JSON.stringify(intent.context) === JSON.stringify(expectedContext), { href, intent, expectedContext }, 'LOCAL_SIMULATION');
      }

      if (phase === 'formal') {
        await clearState(page);
        await saveScreenshot(page, out + `/${width}-full.png`, { fullPage: true }, { logicalViewport: viewport, state: 'normal', region: 'full page' });
        const docHeight = await page.evaluate(() => document.documentElement.scrollHeight);
        const segmentHeight = 900, step = 800;
        const positions = [];
        for (let y = 0; y < docHeight; y += step) positions.push(Math.min(y, Math.max(0, docHeight - segmentHeight)));
        for (const y of [...new Set(positions)]) {
          const actualY = await page.evaluate(targetY => { scrollTo(0, targetY); return scrollY; }, y);
          await page.waitForTimeout(60);
          await saveScreenshot(page, out + `/readable-${width}-${String([...new Set(positions)].indexOf(y) + 1).padStart(2, '0')}.png`, { fullPage: false }, { logicalViewport: viewport, state: 'normal', region: `continuous readable viewport requested-y=${y}; actual-y=${actualY}` });
        }
        await page.locator('.hero .primaryAction').focus();
        await saveLocatorScreenshot(page.locator('.hero'), out + `/${width}-hero-primary-focus.png`, { logicalViewport: viewport, state: 'keyboard focus', region: 'Hero and primary action' });
        await page.locator('.applicationCard').first().locator('a').hover();
        await saveLocatorScreenshot(page.locator('.applicationCard').first(), out + `/${width}-application-hover.png`, { logicalViewport: viewport, state: 'actual hover', region: 'Coatings application object' });
        await page.locator('.references a').nth(1).focus();
        await saveLocatorScreenshot(page.locator('.references'), out + `/${width}-reference-focus.png`, { logicalViewport: viewport, state: 'keyboard focus', region: 'Germany source list and adjacent predicates' });
      }

      if (width < 1101) {
        await clearState(page);
        const toggle = page.locator('.menuButton');
        const menu = page.locator('.mobileNav');
        await toggle.click();
        const opened = await page.evaluate(() => ({ first: document.activeElement?.textContent.trim(), expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'), menuHidden: document.querySelector('.mobileNav').hidden, mainInert: document.querySelector('main').inert, footerInert: document.querySelector('footer').inert, overflow: document.body.style.overflow, current: [...document.querySelectorAll('.mobileNav [aria-current="page"]')].map(n => n.textContent.trim()) }));
        check(`${width}/menu opens with focus isolation`, opened.first === 'Home' && opened.expanded === 'true' && !opened.menuHidden && opened.mainInert && opened.footerInert && opened.overflow === 'hidden' && JSON.stringify(opened.current) === JSON.stringify(['Markets']), opened);
        if (phase === 'formal') await saveScreenshot(page, out + `/${width}-menu.png`, { fullPage: false }, { logicalViewport: viewport, state: 'menu open', region: 'shared Mobile Menu' });
        await menu.locator('a').last().focus(); await page.keyboard.press('Tab');
        check(`${width}/menu forward focus loop`, await toggle.evaluate(n => document.activeElement === n));
        await page.keyboard.press('Shift+Tab');
        check(`${width}/menu reverse focus loop`, await menu.locator('a').last().evaluate(n => document.activeElement === n));
        await page.keyboard.press('Escape');
        check(`${width}/menu Escape restores`, await page.evaluate(() => document.querySelector('.mobileNav').hidden && !document.querySelector('main').inert && !document.querySelector('footer').inert && document.body.style.overflow === '' && document.activeElement === document.querySelector('.menuButton')));
        await toggle.click(); await menu.locator('a').nth(1).click();
        check(`${width}/menu selection closes`, await page.evaluate(() => document.querySelector('.mobileNav').hidden && window.localNavigationIntents.at(-1).href === '/markets/'));
        if (width === 768) { await toggle.click(); await page.setViewportSize({ width: 1200, height }); await page.waitForFunction(() => document.querySelector('.mobileNav').hidden); check('768/menu closes across desktop breakpoint', await page.evaluate(() => document.querySelector('.mobileNav').hidden && !document.querySelector('main').inert)); await page.setViewportSize(viewport); }
      }

      await page.locator('#cookie-trigger').click();
      const cookie = await page.evaluate(() => ({ open: document.querySelector('.cookie-layer').open, active: document.activeElement?.textContent.trim(), modal: document.querySelector('.cookie-layer').matches(':modal') }));
      check(`${width}/Cookie opens as modal with first focus`, cookie.open && cookie.active === 'Close' && cookie.modal, cookie);
      if (phase === 'formal') await saveScreenshot(page, out + `/${width}-cookie.png`, { fullPage: false }, { logicalViewport: viewport, state: 'Cookie modal open', region: 'shared Cookie Settings' });
      await page.keyboard.press('Shift+Tab'); check(`${width}/Cookie reverse focus loop`, await page.locator('.cookie-layer a').evaluate(n => document.activeElement === n));
      await page.keyboard.press('Tab'); check(`${width}/Cookie forward focus loop`, await page.locator('[data-cookie-close]').evaluate(n => document.activeElement === n));
      await page.keyboard.press('Escape'); check(`${width}/Cookie Escape returns trigger`, await page.evaluate(() => !document.querySelector('.cookie-layer').open && document.activeElement === document.querySelector('#cookie-trigger')));
      await page.locator('#cookie-trigger').click(); await page.locator('[data-cookie-close]').click(); check(`${width}/Cookie Close returns trigger`, await page.evaluate(() => !document.querySelector('.cookie-layer').open && document.activeElement === document.querySelector('#cookie-trigger')));

      if (phase === 'direction') {
        await clearState(page);
        await saveLocatorScreenshot(page.locator('.useContext'), out + `/${width}-application-direction.png`, { logicalViewport: viewport, state: 'normal', region: 'German industrial context and three application objects' });
        await saveLocatorScreenshot(page.locator('.destination'), out + `/${width}-destination-direction.png`, { logicalViewport: viewport, state: 'normal', region: 'destination prose and five-item checklist relationship' });
      }
      if (phase === 'preflight') {
        await clearState(page);
        await saveScreenshot(page, out + `/${width}-full.png`, { fullPage: true }, { logicalViewport: viewport, state: 'normal', region: 'diagnostic full page' });
      }
      await context.close();
    }

    const zoomContext = await browser.newContext({ viewport: { width: 720, height: 900 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
    const zoomPage = await zoomContext.newPage(); await zoomPage.goto(pathToFileURL(source).href); await ready(zoomPage);
    const zoom = await zoomPage.evaluate(() => ({ client: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth, modules: document.querySelectorAll('main > section').length, hiddenDesktopFocus: [...document.querySelectorAll('.desktopNav a')].some(a => { const r = a.getBoundingClientRect(); return r.width > 0 && r.height > 0; }) }));
    check('200 percent equivalent reflow has no overflow or hidden desktop focus surface', zoom.client === 720 && zoom.scroll === 720 && zoom.modules === 7 && !zoom.hiddenDesktopFocus, zoom);
    await zoomContext.close();
    check('no external network requests', blockedNetwork.length === 0, blockedNetwork);
  } finally {
    await browser.close();
  }

  const result = {
    phase,
    page_id: 'MARKET-EU-DE',
    workset_id: 'DE-G4-COMPLETE-20260907-01',
    status: failures.length ? 'FAIL' : phase === 'direction' ? 'VISUAL_DIRECTION_CHECKED' : phase === 'preflight' ? 'PASS_FOR_FORMAL_RENDER' : 'FORMAL_EXECUTION_SELF_CHECK_PASS',
    runtime: { node: process.version, chrome: '152.0.7977.82', playwright: '1.62.1', headless: true, deviceScaleFactor: 1 },
    source: identity(source),
    css: identity(base + '/visual-direction.css'),
    viewports,
    records,
    assets,
    summary: { checks: records.length, passed: records.filter(x => x.pass).length, failed: failures.length, assets: assets.length },
    failures,
    limitations: ['Local headless Chrome planning runtime; no production receiver, CMS/API/Schema, route liveness, real device, assistive technology or release check.'],
    ended_at: new Date().toISOString()
  };
  fs.writeFileSync(resultPath, JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ phase, status: result.status, summary: result.summary, source: result.source, css: result.css }, null, 2));
  if (failures.length) process.exitCode = 1;
}

run().catch(error => { fs.writeFileSync(base + `/diagnostic_support/${phase}-failure-${Date.now()}.json`, JSON.stringify({ phase, error: String(error.stack || error), records, assets }, null, 2)); console.error(error); process.exitCode = 1; });
