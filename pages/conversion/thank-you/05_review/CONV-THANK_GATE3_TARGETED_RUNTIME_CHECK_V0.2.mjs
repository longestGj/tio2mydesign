import fs from 'node:fs';
import crypto from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { chromium } from 'file:///C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';

const source = 'D:/23MySec/pages/conversion/thank-you/04_planning/gate3-v0.2/CONV-THANK_GATE3_RESPONSIVE_WIREFRAME_V0.2.html';
const output = 'D:/23MySec/pages/conversion/thank-you/05_review/CONV-THANK_GATE3_TARGETED_RUNTIME_RESULT_V0.2.json';
const markerKey = 'tio2my_thankyou_gate3_marker';
const sha256 = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const expected = {
  quote: { h1: 'Thank you. We’ve received your quotation request.', body: 'Our team will review the details and contact you using the information provided.', actions: [['Explore Products', '/products/'], ['Go to Homepage', '/']] },
  documents: { h1: 'Thank you. We’ve received your document request.', body: 'Our team will review the requested documents and contact you using the information provided.', actions: [['Return to Documents', '/documents/'], ['Explore Products', '/products/']] },
  sample: { h1: 'Thank you. We’ve received your sample request.', body: 'Our team will review your application and sample requirements and contact you using the information provided.', actions: [['Explore Products', '/products/'], ['View Applications', '/applications/']] }
};
const checks = [];
const add = (id, pass, actual) => checks.push({ id, status: pass ? 'PASS' : 'FAIL', actual });
const marker = (type, changes = {}) => ({ type, acknowledged: true, session: 'gate3-local-simulation', successTimestamp: Date.now(), stale: false, ...changes });

const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
try {
  for (const width of [1440, 768, 390]) {
    for (const [state, exp] of Object.entries(expected)) {
      const context = await browser.newContext({ viewport: { width, height: width === 390 ? 844 : 900 }, reducedMotion: 'reduce' });
      await context.route(/^https?:/, route => route.abort());
      const page = await context.newPage();
      await page.addInitScript(([key, value]) => sessionStorage.setItem(key, value), [markerKey, JSON.stringify(marker(state))]);
      await page.goto(pathToFileURL(source).href + `?request=${state}`);
      const actual = await page.evaluate(() => {
        const panel = document.querySelector('[data-result-state]:not([hidden])');
        const visibleTargets = [...document.querySelectorAll('a,button')].filter(el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; });
        return {
          state: document.documentElement.dataset.resolvedState,
          panelCount: document.querySelectorAll('[data-result-state]:not([hidden])').length,
          h1: panel?.querySelector('h1')?.innerText.trim(),
          body: panel?.querySelector('p')?.innerText.trim(),
          cueText: panel?.querySelector('.successCue span:last-child')?.innerText.trim(),
          iconCount: panel?.querySelectorAll('.successIcon').length || 0,
          actions: [...(panel?.querySelectorAll('.resultAction') || [])].map(a => [a.innerText.trim(), a.getAttribute('href')]),
          currentCount: document.querySelectorAll('[aria-current="page"]').length,
          visibleCurrent: document.body.innerText.includes('CURRENT'),
          mainText: document.querySelector('main').innerText,
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          footerDelta: Math.abs(document.documentElement.scrollHeight - (document.querySelector('footer').getBoundingClientRect().bottom + scrollY)),
          undersizedCount: visibleTargets.filter(el => { const r = el.getBoundingClientRect(); return r.width < 44 || r.height < 44; }).length,
          boundary: window.gate3ResultState
        };
      });
      const noSensitiveProjection = !/(john@|email address|phone number|company name|request reference|marker value)/i.test(actual.mainText);
      add(`approved-request-${state}-${width}`, actual.state === state && actual.panelCount === 1 && actual.h1 === exp.h1 && actual.body === exp.body && actual.cueText === 'REQUEST RECEIVED' && actual.iconCount === 1 && JSON.stringify(actual.actions) === JSON.stringify(exp.actions) && actual.currentCount === 0 && !actual.visibleCurrent && noSensitiveProjection && actual.scrollWidth === actual.clientWidth && actual.footerDelta < 2 && actual.undersizedCount === 0 && actual.boundary?.evidenceType === 'LOCAL_SIMULATION' && actual.boundary?.productionReceiptProven === false, actual);
      await context.close();
    }
  }

  const negatives = [
    ['missing', '', marker('quote')],
    ['unsupported', '?request=other', marker('other')],
    ['query-only-no-marker', '?request=quote', null],
    ['mismatch', '?request=documents', marker('quote')],
    ['stale', '?request=sample', marker('sample', { successTimestamp: Date.now() - 86400000, stale: true })],
    ['new-session', '?request=quote', marker('quote', { session: 'different-session' })],
    ['ack-false', '?request=documents', marker('documents', { acknowledged: false })],
    ['wrong-type-key', '?type=quote', marker('quote')]
  ];
  for (const [name, query, storedMarker] of negatives) {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
    await context.route(/^https?:/, route => route.abort());
    const page = await context.newPage();
    if (storedMarker) await page.addInitScript(([key, value]) => sessionStorage.setItem(key, value), [markerKey, JSON.stringify(storedMarker)]);
    await page.goto(pathToFileURL(source).href + query);
    const actual = await page.evaluate(() => ({
      state: document.documentElement.dataset.resolvedState,
      panelCount: document.querySelectorAll('[data-result-state]:not([hidden])').length,
      h1: document.querySelector('[data-result-state]:not([hidden]) h1')?.innerText.trim(),
      cueCount: document.querySelector('[data-result-state]:not([hidden])')?.querySelectorAll('.successCue').length || 0,
      receiptText: document.querySelector('main').innerText.includes('REQUEST RECEIVED'),
      boundary: window.gate3ResultState
    }));
    add(`fallback-${name}`, actual.state === 'direct' && actual.panelCount === 1 && actual.h1 === 'How can we help?' && actual.cueCount === 0 && !actual.receiptText && actual.boundary?.evidenceType === 'LOCAL_SIMULATION' && actual.boundary?.productionReceiptProven === false, actual);
    await context.close();
  }
} finally {
  await browser.close();
}

const sourceText = fs.readFileSync(source, 'utf8');
add('source-query-key-and-whitelist', sourceText.includes("get('request')") && !sourceText.includes("get('type')") && sourceText.includes("const allowed=['quote','documents','sample']"), { readsRequest: sourceText.includes("get('request')"), readsType: sourceText.includes("get('type')"), exactWhitelist: sourceText.includes("const allowed=['quote','documents','sample']") });
const result = {
  reviewId: 'CONVTHANK-G3-IR-20260908-01-TARGETED-01',
  reviewer: '/root/conv_thank_gate3_review',
  source: { path: source, bytes: fs.statSync(source).size, sha256: sha256(source) },
  environment: 'Chrome headless via Playwright; local file; network blocked; no screenshots exported',
  checks,
  totals: { total: checks.length, pass: checks.filter(x => x.status === 'PASS').length, fail: checks.filter(x => x.status === 'FAIL').length },
  createdAt: new Date().toISOString()
};
fs.writeFileSync(output, JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result.totals));
