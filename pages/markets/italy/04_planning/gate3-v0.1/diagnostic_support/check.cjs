const fs = require('fs');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const out = 'D:/23MySec/pages/markets/italy/04_planning/gate3-v0.1';
const source = `${out}/MARKET-EU-IT_GATE3_WIREFRAME_V0.1.html`;
const formal = process.argv.includes('--formal');
const destination = formal ? `${out}/approval_core` : `${out}/diagnostic_support/render`;
const expected = JSON.parse(fs.readFileSync(`${out}/diagnostic_support/expected-copy.json`, 'utf8'));
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const identity = p => ({ path: p, bytes: fs.statSync(p).size, sha256: sha(p) });
const normalize = s => s.replace(/\s+/g, ' ').trim();
const results = [];
const images = [];
const network = [];
const check = (name, pass, details = undefined) => {
  results.push({ name, status: pass ? 'PASS' : 'FAIL', details });
  if (!pass) throw new Error(`${name}: ${JSON.stringify(details)}`);
};
const ready = page => page.evaluate(async () => {
  await document.fonts.ready;
  await Promise.all([...document.images].map(img => img.decode()));
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
});
const screenshot = async (page, width, state, fullPage = false) => {
  await ready(page);
  const name = formal ? `MARKET-EU-IT_G3_${width}-${state}.png` : `diagnostic-${width}-${state}.png`;
  const file = `${destination}/${name}`;
  await page.screenshot({ path: file, fullPage, animations: 'disabled' });
  images.push({ ...identity(file), width, state, evidenceLayer: formal ? 'approval_core' : 'diagnostic_support' });
};
const restored = page => page.evaluate(() => document.querySelector('.mobileNav').hidden && document.body.style.overflow === '' && ['main', 'footer', '.logoLink', '.headerRfq'].every(sel => !document.querySelector(sel).inert));

(async () => {
  if (formal) {
    const freeze = JSON.parse(fs.readFileSync(`${out}/freeze-record.json`, 'utf8'));
    check('frozen source identity', freeze.source.sha256 === sha(source), freeze.source);
    check('formal directory starts empty', fs.readdirSync(destination).length === 0, fs.readdirSync(destination));
  }
  const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
  try {
    for (const width of [1440, 768, 390]) {
      const height = width === 390 ? 844 : 900;
      const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
      await context.route(/^https?:/, route => { network.push(route.request().url()); return route.abort(); });
      const page = await context.newPage();
      await page.goto(pathToFileURL(source).href);
      await ready(page);

      const blocks = await page.locator('main').evaluate(root => [...root.querySelectorAll('h1,h2,h3,p,li')].map(node => ({ tag: node.tagName.toLowerCase(), text: node.textContent.replace(/\s+/g, ' ').trim() })));
      const expectedBlocks = expected.blocks.map(block => ({ ...block, text: normalize(block.text) }));
      check(`${width} exact B visible blocks both directions`, JSON.stringify(blocks) === JSON.stringify(expectedBlocks), { actual: blocks.length, expected: expectedBlocks.length });

      const links = await page.locator('main a').evaluateAll(nodes => nodes.map(a => ({ text: a.textContent, href: a.getAttribute('href') })));
      check(`${width} exact B links`, JSON.stringify(links) === JSON.stringify(expected.links), links);

      const geometry = await page.evaluate(viewportWidth => {
        const visibleTargets = [...document.querySelectorAll('a,button')].filter(node => { const r = node.getBoundingClientRect(); return r.width > 0 && r.height > 0; });
        const contentNodes = [...document.querySelectorAll('main,main *')];
        return {
          scrollWidth: document.documentElement.scrollWidth,
          scrollHeight: document.documentElement.scrollHeight,
          footerBottom: document.querySelector('footer').getBoundingClientRect().bottom + scrollY,
          font: getComputedStyle(document.body).fontFamily,
          fontLoaded: document.fonts.check('16px Inter'),
          targets: visibleTargets.map(node => ({ text: node.textContent.trim(), width: node.getBoundingClientRect().width, height: node.getBoundingClientRect().height })),
          overflow: contentNodes.filter(node => node.scrollWidth > node.clientWidth + 1).map(node => ({ tag: node.tagName, cls: node.className, sw: node.scrollWidth, cw: node.clientWidth })),
          clipping: contentNodes.filter(node => ['ellipsis'].includes(getComputedStyle(node).textOverflow) || (['hidden', 'clip'].includes(getComputedStyle(node).overflowY) && node.scrollHeight > node.clientHeight + 1)).map(node => ({ tag: node.tagName, cls: node.className })),
          contextColumns: getComputedStyle(document.querySelector('.context-grid')).gridTemplateColumns.split(' ').length,
          lastContextSpan: getComputedStyle(document.querySelector('.context-grid article:last-child')).gridColumn,
          navCurrent: document.querySelector(viewportWidth > 1100 ? '.desktopNav [aria-current=page]' : '.mobileNav [aria-current=page]').textContent,
          h1: document.querySelectorAll('main h1').length,
          modules: document.querySelectorAll('main section[data-module]').length,
          forms: document.querySelectorAll('main form,main input,main select,main textarea').length,
          sourceItems: document.querySelectorAll('.sources li').length,
          destinationItems: document.querySelectorAll('.module-4 li').length,
          contextCards: document.querySelectorAll('.context-grid article').length,
          text: document.querySelector('main').textContent
        };
      }, width);
      check(`${width} full page reaches Footer`, geometry.scrollWidth === width && Math.abs(geometry.scrollHeight - geometry.footerBottom) < 2, geometry);
      check(`${width} Inter loaded`, geometry.font.startsWith('Inter') && geometry.fontLoaded, geometry.font);
      check(`${width} all visible targets at least 44x44`, geometry.targets.every(t => t.width >= 44 && t.height >= 44), geometry.targets.filter(t => t.width < 44 || t.height < 44));
      check(`${width} no content overflow or clipping`, geometry.overflow.length === 0 && geometry.clipping.length === 0, { overflow: geometry.overflow, clipping: geometry.clipping });
      check(`${width} page identity and module structure`, geometry.h1 === 1 && geometry.modules === 7 && geometry.forms === 0 && geometry.navCurrent === 'Markets', geometry);
      check(`${width} Italy content relationships`, geometry.contextCards === 3 && geometry.destinationItems === 5 && geometry.sourceItems === 2 && geometry.text.includes('A Certificate of Origin is available upon request.') && geometry.text.includes('does not promise that a certificate is issued for every shipment') && geometry.text.includes('do not guess a port, route or receiving site') && geometry.text.includes('This page does not determine packaging compliance.'), geometry);
      const expectedColumns = width === 1440 ? 3 : width === 768 ? 2 : 1;
      check(`${width} application-context responsive relationship`, geometry.contextColumns === expectedColumns, { actual: geometry.contextColumns, expected: expectedColumns, last: geometry.lastContextSpan });

      await screenshot(page, width, 'full', true);

      for (let i = 0; i < links.length; i++) {
        await page.locator('main a').nth(i).click();
        const intent = await page.evaluate(() => window.localNavigationIntents.at(-1));
        const expectedContext = links[i].href === '/request-a-quote/' ? { destinationCountry: 'Italy', sourcePage: 'MARKET-EU-IT' } : links[i].href === '/request-documents/' ? { sourcePage: 'MARKET-EU-IT' } : {};
        check(`${width} body action ${i}`, intent.href === links[i].href && JSON.stringify(intent.context) === JSON.stringify(expectedContext), intent);
      }

      if (width < 1101) {
        const button = page.locator('.menuButton');
        const menu = page.locator('.mobileNav');
        await button.click();
        check(`${width} menu opens with first focus and background isolation`, await page.evaluate(() => document.activeElement.textContent === 'Home' && document.querySelector('main').inert && document.querySelector('footer').inert && document.body.style.overflow === 'hidden'));
        await screenshot(page, width, 'menu');
        await menu.locator('a').last().focus();
        await page.keyboard.press('Tab');
        check(`${width} menu forward focus cycle`, await button.evaluate(node => document.activeElement === node));
        await page.keyboard.press('Shift+Tab');
        check(`${width} menu reverse focus cycle`, await menu.locator('a').last().evaluate(node => document.activeElement === node));
        await page.keyboard.press('Escape');
        check(`${width} menu Escape restores page and focus`, await restored(page) && await button.evaluate(node => document.activeElement === node));
        await button.click();
        const currentLink = menu.locator('a[aria-current=page]');
        await currentLink.click();
        check(`${width} menu selection closes and restores page`, await restored(page));
      }

      const cookieTrigger = page.locator('#cookie-trigger');
      await cookieTrigger.scrollIntoViewIfNeeded();
      await cookieTrigger.click();
      check(`${width} Cookie opens with Close focused`, await page.evaluate(() => document.querySelector('.cookie-layer').open && document.activeElement.matches('[data-cookie-close]')));
      const close = page.locator('[data-cookie-close]');
      const policy = page.locator('.cookie-layer a');
      await close.focus();
      await page.keyboard.press('Shift+Tab');
      check(`${width} Cookie reverse focus cycle`, await policy.evaluate(node => document.activeElement === node));
      await page.keyboard.press('Tab');
      check(`${width} Cookie forward focus cycle`, await close.evaluate(node => document.activeElement === node));
      if (width === 390) await screenshot(page, width, 'cookie');
      await close.click();
      check(`${width} Cookie close restores Footer trigger focus`, await page.evaluate(() => !document.querySelector('.cookie-layer').open && document.activeElement.id === 'cookie-trigger'));
      await context.close();
    }
  } finally { await browser.close(); }

  check('no external network dependency', network.length === 0, network);
  const record = { pageId: 'MARKET-EU-IT', mode: formal ? 'FORMAL_FROM_FROZEN_SOURCE' : 'PREFLIGHT_DIAGNOSTIC', source: identity(source), checkedAt: new Date().toISOString(), renderer: 'Playwright Chromium with local Google Chrome', evidenceTypes: ['SOURCE_INSPECTION', 'ACTUAL_RUNTIME', 'STATIC_VISUAL', 'LOCAL_NAVIGATION_SIMULATION'], results, images, network };
  const output = formal ? 'D:/23MySec/pages/markets/italy/05_review/MARKET-EU-IT_GATE3_EXECUTION_EVIDENCE_V0.1/formal-runtime.json' : `${out}/diagnostic_support/visual-preflight.json`;
  fs.mkdirSync(require('path').dirname(output), { recursive: true });
  fs.writeFileSync(output, `${JSON.stringify(record, null, 2)}\n`);
  console.log(JSON.stringify({ output, checks: results.length, failed: results.filter(r => r.status === 'FAIL').length, images: images.length, source: identity(source) }, null, 2));
})().catch(error => { console.error(error.stack); process.exit(1); });
