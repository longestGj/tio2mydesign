import fs from 'node:fs';
import crypto from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { chromium } from 'file:///C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';

const source = 'D:/23MySec/pages/conversion/thank-you/04_planning/gate3-v0.1/CONV-THANK_GATE3_RESPONSIVE_WIREFRAME_V0.1.html';
const output = 'D:/23MySec/pages/conversion/thank-you/05_review/CONV-THANK_GATE3_INDEPENDENT_RUNTIME_RESULT_V0.1.json';
const markerKey = 'tio2my_thankyou_gate3_marker';
const checks = [];
const add = (id, pass, actual) => checks.push({ id, status: pass ? 'PASS' : 'FAIL', actual });
const sha256 = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const expected = {
  quote: ['Thank you. We’ve received your quotation request.', ['/products/', '/']],
  documents: ['Thank you. We’ve received your document request.', ['/documents/', '/products/']],
  sample: ['Thank you. We’ve received your sample request.', ['/products/', '/applications/']]
};

const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
try {
  for (const width of [1440, 768, 390]) {
    const context = await browser.newContext({ viewport: { width, height: width === 390 ? 844 : 900 }, reducedMotion: 'reduce' });
    await context.route(/^https?:/, route => route.abort());
    for (const state of Object.keys(expected)) {
      const page = await context.newPage();
      await page.addInitScript(([key, value]) => sessionStorage.setItem(key, value), [markerKey, JSON.stringify({ type: state, acknowledged: true, session: 'gate3-local-simulation' })]);
      await page.goto(pathToFileURL(source).href + `?request=${state}`);
      const observed = await page.evaluate(() => {
        const panel = document.querySelector('[data-result-state]:not([hidden])');
        return {
          resolvedState: document.documentElement.dataset.resolvedState,
          h1: panel?.querySelector('h1')?.innerText.trim(),
          actions: [...(panel?.querySelectorAll('.resultAction') || [])].map(a => a.getAttribute('href')),
          receiptCueCount: panel?.querySelectorAll('.successCue').length || 0
        };
      });
      add(`approved-request-query-${state}-${width}`, observed.resolvedState === state && observed.h1 === expected[state][0] && JSON.stringify(observed.actions) === JSON.stringify(expected[state][1]) && observed.receiptCueCount === 1, observed);
      await page.close();

      const implementedPage = await context.newPage();
      await implementedPage.addInitScript(([key, value]) => sessionStorage.setItem(key, value), [markerKey, JSON.stringify({ type: state, acknowledged: true, session: 'gate3-local-simulation' })]);
      await implementedPage.goto(pathToFileURL(source).href + `?type=${state}`);
      const implemented = await implementedPage.evaluate(() => {
        const panel = document.querySelector('[data-result-state]:not([hidden])');
        const targets = [...document.querySelectorAll('a,button')].filter(el => {
          const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0;
        });
        return {
          resolvedState: document.documentElement.dataset.resolvedState,
          h1: panel?.querySelector('h1')?.innerText.trim(),
          actions: [...(panel?.querySelectorAll('.resultAction') || [])].map(a => a.getAttribute('href')),
          receiptCueCount: panel?.querySelectorAll('.successCue').length || 0,
          currentCount: document.querySelectorAll('[aria-current="page"]').length,
          visibleCurrentText: document.body.innerText.includes('CURRENT'),
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          footerDelta: Math.abs(document.documentElement.scrollHeight - (document.querySelector('footer').getBoundingClientRect().bottom + scrollY)),
          undersizedCount: targets.filter(el => { const r = el.getBoundingClientRect(); return r.width < 44 || r.height < 44; }).length
        };
      });
      add(`implemented-type-query-${state}-${width}`, implemented.resolvedState === state && implemented.h1 === expected[state][0] && JSON.stringify(implemented.actions) === JSON.stringify(expected[state][1]) && implemented.receiptCueCount === 1 && implemented.currentCount === 0 && !implemented.visibleCurrentText && implemented.scrollWidth === implemented.clientWidth && implemented.footerDelta < 2 && implemented.undersizedCount === 0, implemented);
      await implementedPage.close();
    }

    const page = await context.newPage();
    await page.goto(pathToFileURL(source).href);
    const geometry = await page.evaluate(() => ({
      resolvedState: document.documentElement.dataset.resolvedState,
      h1: document.querySelector('[data-result-state]:not([hidden]) h1')?.innerText.trim(),
      currentCount: document.querySelectorAll('[aria-current="page"]').length,
      visibleCurrentText: document.body.innerText.includes('CURRENT'),
      receiptCueCount: document.querySelector('[data-result-state]:not([hidden])')?.querySelectorAll('.successCue').length || 0,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      footerDelta: Math.abs(document.documentElement.scrollHeight - (document.querySelector('footer').getBoundingClientRect().bottom + scrollY)),
      undersized: [...document.querySelectorAll('a,button')].filter(el => {
        const r = el.getBoundingClientRect();
        return r.width > 0 && r.height > 0 && (r.width < 44 || r.height < 44);
      }).map(el => ({ text: el.textContent.trim(), width: el.getBoundingClientRect().width, height: el.getBoundingClientRect().height }))
    }));
    add(`direct-core-${width}`, geometry.resolvedState === 'direct' && geometry.h1 === 'How can we help?' && geometry.receiptCueCount === 0 && geometry.currentCount === 0 && !geometry.visibleCurrentText && geometry.scrollWidth === geometry.clientWidth && geometry.footerDelta < 2 && geometry.undersized.length === 0, geometry);

    if (width < 1101) {
      const toggle = page.locator('.menuButton');
      await toggle.click();
      const opened = await page.evaluate(() => ({ active: document.activeElement?.textContent.trim(), mainInert: document.querySelector('main').inert, footerInert: document.querySelector('footer').inert, overflow: document.body.style.overflow }));
      add(`menu-open-${width}`, opened.active === 'Home' && opened.mainInert && opened.footerInert && opened.overflow === 'hidden', opened);
      await page.keyboard.press('Escape');
      const escaped = await page.evaluate(() => ({ active: document.activeElement?.textContent.trim(), hidden: document.querySelector('.mobileNav').hidden, mainInert: document.querySelector('main').inert, footerInert: document.querySelector('footer').inert, overflow: document.body.style.overflow }));
      add(`menu-escape-${width}`, escaped.active === 'Menu' && escaped.hidden && !escaped.mainInert && !escaped.footerInert && escaped.overflow === '', escaped);
    }

    await page.locator('#cookie-trigger').click();
    const cookieOpen = await page.evaluate(() => ({ open: document.querySelector('.cookie-layer').open, active: document.activeElement?.textContent.trim() }));
    add(`cookie-open-${width}`, cookieOpen.open && cookieOpen.active === 'Close', cookieOpen);
    await page.keyboard.press('Shift+Tab');
    const reverseFocus = await page.evaluate(() => document.activeElement?.textContent.trim());
    add(`cookie-loop-${width}`, reverseFocus === 'Read Cookie Policy', reverseFocus);
    await page.keyboard.press('Tab');
    await page.locator('[data-cookie-close]').click();
    const returned = await page.evaluate(() => ({ open: document.querySelector('.cookie-layer').open, active: document.activeElement?.textContent.trim() }));
    add(`cookie-return-${width}`, !returned.open && returned.active === 'Cookie Settings', returned);
    await page.close();
    await context.close();
  }

  const zoomContext = await browser.newContext({ viewport: { width: 720, height: 900 }, reducedMotion: 'reduce' });
  const zoomPage = await zoomContext.newPage();
  await zoomPage.goto(pathToFileURL(source).href);
  const zoom = await zoomPage.evaluate(() => ({ scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth, h1: document.querySelector('[data-result-state]:not([hidden]) h1')?.innerText.trim() }));
  add('200-percent-equivalent-reflow', zoom.scrollWidth === zoom.clientWidth && zoom.h1 === 'How can we help?', zoom);
  await zoomContext.close();
} finally {
  await browser.close();
}

const result = {
  reviewId: 'CONVTHANK-G3-IR-20260908-01',
  reviewer: '/root/conv_thank_gate3_review',
  source: { path: source, bytes: fs.statSync(source).size, sha256: sha256(source) },
  environment: 'Chrome headless via Playwright; local file; network blocked; no screenshots exported',
  checks,
  totals: { total: checks.length, pass: checks.filter(x => x.status === 'PASS').length, fail: checks.filter(x => x.status === 'FAIL').length },
  createdAt: new Date().toISOString()
};
fs.writeFileSync(output, JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result.totals));
