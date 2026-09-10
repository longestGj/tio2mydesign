const { chromium, firefox } = require('D:/16Wordpress_nextjs/.worktrees/sys404-convthank-gate8/node_modules/playwright');
const fs = require('node:fs');
const path = require('node:path');

const baseURL = 'http://127.0.0.1:4381';
const outDir = __dirname;
const markerKey = 'tio2-my:thank-you:receipt:v1';
const viewports = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'tablet-768', width: 768, height: 900 },
  { name: 'mobile-390', width: 390, height: 844 },
];
const states = {
  direct: { query: '', heading: 'How can we help?', actions: ['Request a Quote', 'Request Documents', 'Request a Sample'] },
  quote: { query: '?request=quote', heading: 'Thank you. We\u2019ve received your quotation request.', actions: ['Explore Products', 'Go to Homepage'] },
  documents: { query: '?request=documents', heading: 'Thank you. We\u2019ve received your document request.', actions: ['Return to Documents', 'Explore Products'] },
  sample: { query: '?request=sample', heading: 'Thank you. We\u2019ve received your sample request.', actions: ['Explore Products', 'View Applications'] },
};

function pickHead(html) {
  return {
    title: html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? null,
    robots: [...html.matchAll(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']*)/gi)].map((m) => m[1]),
    canonical: html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)/i)?.[1] ?? null,
    jsonLdCount: (html.match(/application\/ld\+json/gi) ?? []).length,
  };
}

async function inspectPage(page) {
  return page.evaluate(() => {
    const main = document.querySelector('main');
    const panel = document.querySelector('[data-system-404-panel],[data-thank-you-panel]');
    const footer = document.querySelector('footer');
    const allCurrent = [...document.querySelectorAll('[aria-current="page"]')];
    const actions = panel ? [...panel.querySelectorAll('a')].map((a) => ({text: a.textContent.trim(), href: a.getAttribute('href'), box: a.getBoundingClientRect().toJSON()})) : [];
    const bodyText = document.body.innerText;
    return {
      pageId: document.querySelector('[data-page-id]')?.getAttribute('data-page-id') ?? null,
      scope: document.querySelector('[data-site-scope]')?.getAttribute('data-site-scope') ?? null,
      mainCount: document.querySelectorAll('main').length,
      h1: document.querySelector('h1')?.textContent?.trim() ?? null,
      panelCount: document.querySelectorAll('[data-system-404-panel],[data-thank-you-panel]').length,
      thankState: document.querySelector('[data-thank-you-panel]')?.getAttribute('data-thank-you-panel') ?? null,
      bodyText,
      actions,
      currentCount: allCurrent.length,
      visibleCurrentTextCount: (bodyText.match(/CURRENT/g) ?? []).length,
      formCount: document.querySelectorAll('form').length,
      breadcrumbCount: document.querySelectorAll('[aria-label*="breadcrumb" i], .breadcrumb').length,
      jsonLdCount: document.querySelectorAll('script[type="application/ld+json"]').length,
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? null,
      robots: [...document.querySelectorAll('meta[name="robots"]')].map((n) => n.getAttribute('content')),
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') ?? null,
      overflow: document.documentElement.scrollWidth > window.innerWidth,
      viewport: {width: window.innerWidth, height: window.innerHeight, dpr: window.devicePixelRatio},
      footerText: footer?.innerText ?? null,
      footerOrder: footer ? [...footer.children].map((n) => `${n.tagName}:${n.textContent.trim().slice(0,80)}`) : [],
      mainRole: main?.getAttribute('role') ?? 'implicit-main',
      receiptCueCount: document.querySelectorAll('[data-receipt-icon]').length,
      externalScripts: [...document.scripts].map((s) => s.src).filter(Boolean).filter((u) => !u.startsWith(location.origin)),
    };
  });
}

async function inspectDialogs(page) {
  const result = {};
  if (await page.getByRole('button', {name: 'Open primary navigation'}).count()) {
    await page.getByRole('button', {name: 'Open primary navigation'}).click();
    result.menu = await page.evaluate(() => ({
      active: document.activeElement?.textContent?.trim() ?? document.activeElement?.getAttribute('aria-label') ?? null,
      currentCount: document.querySelectorAll('nav[aria-label="Mobile navigation"] [aria-current="page"]').length,
      backgroundInert: document.querySelector('main')?.hasAttribute('inert') ?? false,
      menuVisible: !!document.querySelector('nav[aria-label="Mobile navigation"]'),
    }));
    await page.keyboard.press('Shift+Tab');
    result.menu.reverseTab = await page.evaluate(() => document.activeElement?.getAttribute('aria-label') ?? document.activeElement?.textContent?.trim() ?? null);
    await page.keyboard.press('Escape');
    result.menu.escapeReturn = await page.evaluate(() => document.activeElement?.getAttribute('aria-label') ?? null);
  }
  const cookie = page.getByRole('button', {name: 'Cookie Settings'});
  if (await cookie.count()) {
    await cookie.click();
    result.cookie = await page.evaluate(() => ({
      dialogs: document.querySelectorAll('[role="dialog"]').length,
      active: document.activeElement?.textContent?.trim() ?? null,
      controls: [...document.querySelectorAll('[role="dialog"] a,[role="dialog"] button')].map((n) => n.textContent.trim()),
      backgroundInert: document.querySelector('main')?.hasAttribute('inert') ?? false,
    }));
    await page.keyboard.press('Shift+Tab');
    result.cookie.reverseTab = await page.evaluate(() => document.activeElement?.textContent?.trim() ?? null);
    await page.keyboard.press('Escape');
    result.cookie.escapeReturn = await page.evaluate(() => document.activeElement?.textContent?.trim() ?? null);
  }
  return result;
}

async function runBrowser(name, browserType) {
  const browser = await browserType.launch({headless: true});
  const browserResult = {name, viewports: [], smoke: []};
  try {
    for (const viewport of viewports) {
      const context = await browser.newContext({viewport: {width: viewport.width, height: viewport.height}, deviceScaleFactor: 1, reducedMotion: 'reduce'});
      const page = await context.newPage();
      const external = [];
      const consoleMessages = [];
      page.on('request', (request) => {
        const url = new URL(request.url());
        if (!['127.0.0.1', 'localhost'].includes(url.hostname)) external.push({method: request.method(), url: request.url(), type: request.resourceType()});
      });
      page.on('console', (msg) => consoleMessages.push({type: msg.type(), text: msg.text()}));
      const res = await page.goto(`${baseURL}/gate9-independent/unmatched?email=qa-sentinel%40example.test#private`, {waitUntil: 'networkidle'});
      const notFound = await inspectPage(page);
      notFound.status = res?.status() ?? null;
      notFound.url = page.url();
      notFound.title = await page.title();
      notFound.dialogs = await inspectDialogs(page);
      notFound.externalRequests = external;
      notFound.consoleMessages = consoleMessages;
      if (name === 'chromium') await page.screenshot({path: path.join(outDir, `independent-sys404-${viewport.name}.png`), fullPage: true});

      const thank = {};
      for (const [state, spec] of Object.entries(states)) {
        await page.goto(`${baseURL}/thank-you/`, {waitUntil: 'domcontentloaded'});
        await page.evaluate((key) => sessionStorage.clear(), markerKey);
        if (state !== 'direct') {
          await page.evaluate(({key, request}) => sessionStorage.setItem(key, JSON.stringify({version:1, request, succeededAt:Date.now(), flowId:'gate9-independent'})), {key: markerKey, request: state});
        }
        const response = await page.goto(`${baseURL}/thank-you/${spec.query}`, {waitUntil: 'networkidle'});
        const observation = await inspectPage(page);
        observation.status = response?.status() ?? null;
        observation.url = page.url();
        observation.title = await page.title();
        observation.marker = await page.evaluate((key) => sessionStorage.getItem(key), markerKey);
        observation.dialogs = await inspectDialogs(page);
        thank[state] = observation;
        if (name === 'chromium') await page.screenshot({path: path.join(outDir, `independent-thank-${state}-${viewport.name}.png`), fullPage: true});
      }

      browserResult.viewports.push({viewport, notFound, thank});
      await context.close();
    }

    const context = await browser.newContext();
    const page = await context.newPage();
    const cases = [];
    const negative = [
      {name:'missing', query:'', marker:null},
      {name:'unsupported', query:'?request=other', marker:null},
      {name:'markerless', query:'?request=quote', marker:null},
      {name:'mismatch', query:'?request=sample', marker:{request:'quote', succeededAt:Date.now()}},
      {name:'stale', query:'?request=quote', marker:{request:'quote', succeededAt:Date.now()-600001}},
      {name:'future', query:'?request=quote', marker:{request:'quote', succeededAt:Date.now()+60000}},
      {name:'legacy', query:'?type=quote', marker:{request:'quote', succeededAt:Date.now()}},
      {name:'legacy-plus-request', query:'?type=quote&request=quote', marker:{request:'quote', succeededAt:Date.now()}},
      {name:'duplicate-request', query:'?request=quote&request=quote', marker:{request:'quote', succeededAt:Date.now()}},
      {name:'extra-query', query:'?request=quote&email=qa-sentinel%40example.test', marker:{request:'quote', succeededAt:Date.now()}},
      {name:'extra-marker-field', query:'?request=quote', marker:{request:'quote', succeededAt:Date.now(), email:'qa-sentinel@example.test'}},
    ];
    for (const item of negative) {
      await page.goto(`${baseURL}/thank-you/`, {waitUntil:'domcontentloaded'});
      await page.evaluate(({key, marker}) => { sessionStorage.clear(); if (marker) sessionStorage.setItem(key, JSON.stringify({version:1, ...marker, flowId:'gate9-negative'})); }, {key:markerKey, marker:item.marker});
      const response = await page.goto(`${baseURL}/thank-you/${item.query}`, {waitUntil:'networkidle'});
      cases.push({name:item.name, status:response?.status()??null, url:page.url(), ...(await inspectPage(page)), marker:await page.evaluate((key)=>sessionStorage.getItem(key), markerKey)});
    }
    const routes = [];
    for (const route of ['/gate9-root-unmatched','/gate9/nested/unmatched','/products/','/','/request-documents/','/contact/','/request-a-quote/','/request-sample/','/documents/','/applications/','/privacy-policy/','/ms/privacy-policy/','/cookie-policy/','/thank-you/','/404/','/sitemap.xml']) {
      const response = await context.request.get(`${baseURL}${route}`);
      const body = await response.text();
      routes.push({route,status:response.status(),bytes:body.length,head:pickHead(body),pageId:body.match(/data-page-id=["']([^"']+)/i)?.[1]??null,hasThankYou:body.includes('/thank-you/'),hasUnknown:body.includes('/gate9-root-unmatched')});
    }
    browserResult.smoke.push({negative:cases,routes});
    await context.close();
  } finally {
    await browser.close();
  }
  return browserResult;
}

(async () => {
  const startedAt = new Date().toISOString();
  const result = {startedAt, baseURL, candidate:{implementation:'1571a67da57d5dd6f2b358ba20508ba46c76f581',evidenceHead:'7fa0b1026c80c4b12bc1725fff1ad7ef1492a676',buildId:'2z5DYuzAHx0An8WWlUsz2'}, browsers:[]};
  result.browsers.push(await runBrowser('chromium', chromium));
  result.browsers.push(await runBrowser('firefox', firefox));
  result.completedAt = new Date().toISOString();
  fs.writeFileSync(path.join(outDir, 'independent-runtime-observation.json'), JSON.stringify(result, null, 2));
})().catch((error) => { console.error(error); process.exitCode = 1; });
