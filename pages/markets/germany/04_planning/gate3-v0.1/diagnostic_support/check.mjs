import fs from 'node:fs';
import crypto from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { chromium } from 'file:///C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';

const out = 'D:/23MySec/pages/markets/germany/04_planning/gate3-v0.1';
const source = `${out}/MARKET-EU-DE_GATE3_WIREFRAME_V0.1.html`;
const formal = process.argv.includes('--formal');
const dest = formal ? `${out}/approval_core` : `${out}/diagnostic_support/render`;
const resultPath = formal ? `${out}/diagnostic_support/formal-runtime.json` : `${out}/diagnostic_support/runtime.json`;
const expectedHtml = fs.readFileSync(`${out}/diagnostic_support/derived-buyer-copy.html`, 'utf8');
const sha = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const identity = file => ({ path: file, bytes: fs.statSync(file).size, sha256: sha(file) });
const normalize = text => text.replace(/\s+/g, ' ').trim();
const checks = [];
const assets = [];
const blockedNetwork = [];
const check = (name, ok, detail = '') => {
  checks.push({ name, status: ok ? 'PASS' : 'FAIL', detail });
  if (!ok) throw new Error(`${name}: ${JSON.stringify(detail)}`);
};
const ready = async page => page.evaluate(async () => {
  await document.fonts.ready;
  await Promise.all([...document.images].map(image => image.decode()));
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
});
const screenshot = async (page, name, fullPage = false) => {
  const file = `${dest}/${name}.png`;
  await ready(page);
  await page.screenshot({ path: file, fullPage, animations: 'disabled' });
  const size = await page.viewportSize();
  assets.push({ ...identity(file), width: size.width, state: name });
};
const menuRestored = page => page.evaluate(() =>
  document.querySelector('.mobileNav').hidden &&
  !document.querySelector('main').inert &&
  !document.querySelector('footer').inert &&
  !document.querySelector('.logoLink').inert &&
  !document.querySelector('.headerRfq').inert &&
  document.body.style.overflow === ''
);

let browser;
try {
  if (formal) {
    const freeze = JSON.parse(fs.readFileSync(`${out}/freeze-record.json`, 'utf8'));
    check('frozen source identity', freeze.source.sha256 === sha(source), freeze.source);
    check('formal export directory empty before first export', fs.readdirSync(dest).length === 0, fs.readdirSync(dest));
  }
  browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
  const expectedContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const expectedPage = await expectedContext.newPage();
  await expectedPage.setContent(`<main>${expectedHtml}</main>`);
  const expectedText = normalize(await expectedPage.locator('main').innerText());
  const expectedLinks = await expectedPage.locator('main a').evaluateAll(links => links.map(link => ({ text: link.textContent.trim(), href: link.getAttribute('href') })));
  await expectedContext.close();

  for (const width of [1440, 768, 390]) {
    const height = width === 390 ? 844 : 900;
    const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
    await context.route(/^https?:/, route => { blockedNetwork.push(route.request().url()); return route.abort(); });
    const page = await context.newPage();
    await page.goto(pathToFileURL(source).href);
    await ready(page);

    check(`${width} exact Buyer Copy text`, normalize(await page.locator('main').innerText()) === expectedText, { expectedLength: expectedText.length, actualLength: normalize(await page.locator('main').innerText()).length });
    const actualLinks = await page.locator('main a').evaluateAll(links => links.map(link => ({ text: link.textContent.trim(), href: link.getAttribute('href') })));
    check(`${width} exact Buyer Copy links`, JSON.stringify(actualLinks) === JSON.stringify(expectedLinks), actualLinks);
    const structure = await page.evaluate(() => ({
      h1: document.querySelectorAll('main h1').length,
      h2: document.querySelectorAll('main h2').length,
      h3: document.querySelectorAll('main h3').length,
      sections: document.querySelectorAll('main > section').length,
      forms: document.querySelectorAll('main form,input,select,textarea').length,
      pageImages: document.querySelectorAll('main img').length,
      visibleCurrentWord: /(^|\s)CURRENT($|\s)/.test(document.body.innerText)
    }));
    check(`${width} approved structure only`, structure.h1 === 1 && structure.h2 === 6 && structure.h3 === 4 && structure.sections === 7 && structure.forms === 0 && structure.pageImages === 0 && !structure.visibleCurrentWord, structure);

    const geometry = await page.evaluate(() => {
      const doc = document.documentElement;
      const footer = document.querySelector('footer');
      const visible = [...document.querySelectorAll('main h1,main h2,main h3,main p,main li,main a')].map(node => {
        const rect = node.getBoundingClientRect();
        return { text: node.textContent.trim().slice(0, 80), left: rect.left, right: rect.right, top: rect.top + scrollY, bottom: rect.bottom + scrollY, width: rect.width, height: rect.height };
      });
      const targets = [...document.querySelectorAll('a,button')].filter(node => {
        const rect = node.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      }).map(node => {
        const rect = node.getBoundingClientRect();
        return { text: node.textContent.trim(), width: rect.width, height: rect.height };
      });
      return {
        clientWidth: doc.clientWidth,
        scrollWidth: doc.scrollWidth,
        scrollHeight: doc.scrollHeight,
        footerBottom: footer.getBoundingClientRect().bottom + scrollY,
        bodyMargin: getComputedStyle(document.body).margin,
        fontLoaded: document.fonts.check('16px Inter'),
        bodyFont: getComputedStyle(document.body).fontFamily,
        visible,
        targets,
        appColumns: getComputedStyle(document.querySelector('.applicationGrid')).gridTemplateColumns.split(' ').length,
        destinationColumns: getComputedStyle(document.querySelector('.destinationGrid')).gridTemplateColumns.split(' ').length,
        reducedMotion: getComputedStyle(document.documentElement).scrollBehavior
      };
    });
    check(`${width} Footer closes page and no horizontal overflow`, geometry.scrollWidth === width && Math.abs(geometry.scrollHeight - geometry.footerBottom) < 2 && geometry.bodyMargin === '0px' && geometry.fontLoaded && geometry.bodyFont.startsWith('Inter'), geometry);
    check(`${width} all Buyer Copy blocks visibly bounded`, geometry.visible.every(item => item.width > 0 && item.height > 0 && item.left >= -0.5 && item.right <= width + 0.5), geometry.visible.filter(item => item.width <= 0 || item.height <= 0 || item.left < -0.5 || item.right > width + 0.5));
    check(`${width} visible controls at least 44 by 44`, geometry.targets.every(item => item.width >= 44 && item.height >= 44), geometry.targets.filter(item => item.width < 44 || item.height < 44));
    check(`${width} reduced motion applied`, geometry.reducedMotion === 'auto', geometry.reducedMotion);
    if (width === 1440) check('1440 editorial structures', geometry.appColumns === 3 && geometry.destinationColumns === 2, geometry);
    else check(`${width} narrow structures stack`, geometry.appColumns === 1 && geometry.destinationColumns === 1, geometry);

    const nav = await page.evaluate(() => ({
      desktopVisible: getComputedStyle(document.querySelector('.desktopNav')).display !== 'none',
      mobileVisible: getComputedStyle(document.querySelector('.menuButton')).display !== 'none',
      desktopCurrent: document.querySelector('.desktopNav [aria-current="page"]')?.textContent.trim(),
      mobileCurrent: document.querySelector('.mobileNav [aria-current="page"]')?.textContent.trim(),
      activeSurfaces: [...document.querySelectorAll('.desktopNav,.mobileNav')].filter(node => getComputedStyle(node).display !== 'none' && !node.hidden).length
    }));
    check(`${width} Markets current navigation mapping`, nav.desktopCurrent === 'Markets' && nav.mobileCurrent === 'Markets' && (width > 1100 ? nav.activeSurfaces === 1 && nav.desktopVisible && !nav.mobileVisible : nav.activeSurfaces === 0 && !nav.desktopVisible && nav.mobileVisible), nav);

    const pageRisk = await page.evaluate(() => ({
      applicationHeadings: [...document.querySelectorAll('.applicationCard h3')].map(node => node.textContent.trim()),
      applicationHrefs: [...document.querySelectorAll('.applicationCard a')].map(node => node.getAttribute('href')),
      checklistItems: document.querySelectorAll('.checklist li').length,
      sourceHrefs: [...document.querySelectorAll('.references a')].map(node => node.getAttribute('href')),
      tradeHref: document.querySelector('#de-06 a[href="/resources/eu-titanium-dioxide-anti-dumping-duty/"]')?.getAttribute('href'),
      forbidden: /German (office|warehouse|inventory|language support)|Germany-specific Certificate of Origin|fixed lead time/i.test(document.querySelector('main').innerText)
    }));
    check(`${width} Germany application relationships`, JSON.stringify(pageRisk.applicationHeadings) === JSON.stringify(['Coatings','Plastics','Masterbatch']) && JSON.stringify(pageRisk.applicationHrefs) === JSON.stringify(['/applications/titanium-dioxide-for-coatings/','/applications/titanium-dioxide-for-plastics/','/applications/titanium-dioxide-for-masterbatch/']), pageRisk);
    check(`${width} Germany destination and sources`, pageRisk.checklistItems === 5 && pageRisk.sourceHrefs.length === 3 && pageRisk.tradeHref === '/resources/eu-titanium-dioxide-anti-dumping-duty/' && !pageRisk.forbidden, pageRisk);

    if (!formal) {
      await screenshot(page, `diagnostic-${width}-full`, true);
      const positions = [...new Set([...Array(Math.ceil(geometry.scrollHeight / 760)).keys()].map(index => Math.min(index * 760, Math.max(0, geometry.scrollHeight - height))))];
      for (let index = 0; index < positions.length; index++) {
        const y = positions[index];
        const file = `${dest}/${width}-segment-${String(index).padStart(2, '0')}.png`;
        await page.evaluate(position => scrollTo(0, position), y);
        await page.screenshot({ path: file, animations: 'disabled' });
        assets.push({ ...identity(file), width, state: 'readable-segment', y });
      }
    } else {
      await screenshot(page, `MARKET-EU-DE_G3_${width}-full`, true);
    }

    for (let index = 0; index < actualLinks.length; index++) {
      await page.locator('main a').nth(index).click();
      const intent = await page.evaluate(() => window.localNavigationIntents.at(-1));
      const isRfq = actualLinks[index].href === '/request-a-quote/';
      const expectedContext = isRfq ? { destinationCountry: 'Germany', sourcePage: 'MARKET-EU-DE' } : {};
      check(`${width} local action ${index + 1}`, intent.href === actualLinks[index].href && JSON.stringify(intent.context) === JSON.stringify(expectedContext), intent);
    }

    if (width < 1101) {
      const toggle = page.locator('.menuButton');
      const menu = page.locator('.mobileNav');
      await toggle.click();
      check(`${width} menu opens with first focus and background isolation`, await page.evaluate(() => document.activeElement.textContent.trim() === 'Home' && document.querySelector('main').inert && document.querySelector('footer').inert && document.body.style.overflow === 'hidden' && document.querySelector('.menuButton').textContent === 'Close'));
      if (!formal || width === 390) await screenshot(page, formal ? 'MARKET-EU-DE_G3_390-menu' : `diagnostic-${width}-menu`);
      await menu.locator('a').last().focus();
      await page.keyboard.press('Tab');
      check(`${width} menu forward focus loop`, await toggle.evaluate(node => node === document.activeElement));
      await page.keyboard.press('Shift+Tab');
      check(`${width} menu reverse focus loop`, await menu.locator('a').last().evaluate(node => node === document.activeElement));
      await page.keyboard.press('Escape');
      check(`${width} menu Escape restores focus and background`, await menuRestored(page) && await toggle.evaluate(node => node === document.activeElement));
      await toggle.click();
      await menu.locator('a').nth(1).click();
      check(`${width} menu selection closes and restores`, await menuRestored(page) && (await page.evaluate(() => window.localNavigationIntents.at(-1).href)) === '/markets/');
      await toggle.click();
      const before = await page.evaluate(() => scrollY);
      await page.mouse.wheel(0, 600);
      await page.waitForTimeout(80);
      check(`${width} menu locks background scroll`, await page.evaluate(() => scrollY) === before);
      if (width === 768) {
        await page.setViewportSize({ width: 1200, height });
        check('768 menu closes across desktop breakpoint', await menuRestored(page));
        await page.setViewportSize({ width, height });
      } else {
        await page.keyboard.press('Escape');
      }
    }

    await page.locator('#cookie-trigger').click();
    check(`${width} Cookie entry focus`, await page.locator('[data-cookie-close]').evaluate(node => node === document.activeElement));
    if (!formal && width === 390) await screenshot(page, 'diagnostic-390-cookie');
    const cookieGeometry = await page.locator('.cookie-actions > *').evaluateAll(nodes => nodes.map(node => {
      const rect = node.getBoundingClientRect();
      return { width: rect.width, height: rect.height, color: getComputedStyle(node).color, border: getComputedStyle(node).borderTopColor };
    }));
    check(`${width} Cookie controls and functional teal`, cookieGeometry.every(item => item.width >= 44 && item.height >= 44 && item.color === 'rgb(0, 128, 120)' && item.border === 'rgb(0, 128, 120)'), cookieGeometry);
    await page.keyboard.press('Shift+Tab');
    check(`${width} Cookie reverse focus loop`, await page.locator('.cookie-layer a').evaluate(node => node === document.activeElement));
    await page.keyboard.press('Tab');
    check(`${width} Cookie forward focus loop`, await page.locator('[data-cookie-close]').evaluate(node => node === document.activeElement));
    await page.locator('[data-cookie-close]').click();
    check(`${width} Cookie close returns trigger focus`, await page.locator('#cookie-trigger').evaluate(node => node === document.activeElement));

    await context.close();
  }

  const zoomContext = await browser.newContext({ viewport: { width: 720, height: 900 }, deviceScaleFactor: 1 });
  const zoomPage = await zoomContext.newPage();
  await zoomPage.goto(pathToFileURL(source).href);
  await ready(zoomPage);
  check('1440 desktop at 200 percent equivalent reflows without overflow', await zoomPage.evaluate(() => document.documentElement.scrollWidth === 720 && document.querySelectorAll('main > section').length === 7));
  await zoomContext.close();
  check('no network requests', blockedNetwork.length === 0, blockedNetwork);
  const result = {
    status: 'PASS',
    pageId: 'MARKET-EU-DE',
    evidenceType: ['ACTUAL_RUNTIME', 'STATIC_VISUAL', 'SOURCE_INSPECTION', 'LOCAL_SIMULATION'],
    source: identity(source),
    browser: 'Chrome 152 / Playwright 1.62.1, DPR 1',
    formal,
    viewports: [{ width: 1440, height: 900 }, { width: 768, height: 900 }, { width: 390, height: 844 }],
    checks,
    assets,
    blockedNetwork,
    endedAt: new Date().toISOString()
  };
  fs.writeFileSync(resultPath, JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ status: result.status, formal, checks: checks.length, assets: assets.length }, null, 2));
} catch (error) {
  const failure = { status: 'FAIL', formal, source: fs.existsSync(source) ? identity(source) : { path: source }, checks, assets, blockedNetwork, error: String(error.stack || error), endedAt: new Date().toISOString() };
  fs.writeFileSync(`${out}/diagnostic_support/failure-${Date.now()}.json`, JSON.stringify(failure, null, 2));
  console.error(error);
  process.exitCode = 1;
} finally {
  if (browser) await browser.close();
}
