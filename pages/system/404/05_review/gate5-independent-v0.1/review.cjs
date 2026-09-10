const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = 'D:/23MySec';
const base = `${root}/pages/system/404/04_planning/gate4-v0.1`;
const source = `${base}/SYS-404_GATE4_COMPLETE_VISUAL_V0.1.html`;
const evidencePath = `${base}/evidence-index.json`;
const output = `${root}/pages/system/404/05_review/gate5-independent-v0.1/independent-runtime-observation.json`;
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const id = p => ({ path: p, bytes: fs.statSync(p).size, sha256: sha(p) });
const pngSize = p => {
  const b = fs.readFileSync(p);
  if (b.toString('ascii', 1, 4) !== 'PNG') throw new Error(`Not PNG: ${p}`);
  return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
};
const expected = {
  copy: [
    '404 · PAGE NOT FOUND',
    'Let’s help you find what you need.',
    'The page you’re looking for may have moved or is no longer available. You can continue by exploring our titanium dioxide products, requesting technical documents, or contacting our team.'
  ],
  labels: ['Explore Products','Go to Homepage','Request Documents','Contact Our Team','Request a Quote'],
  hrefs: ['/products/','/','/request-documents/','/contact/','/request-a-quote/']
};
const checks = [];
const check = (name, ok, details = undefined, evidenceType = 'ACTUAL_RUNTIME') => {
  checks.push({ name, status: ok ? 'PASS' : 'FAIL', evidenceType, details });
};

(async () => {
  const evidence = JSON.parse(fs.readFileSync(evidencePath));
  check('source identity matches dispatch', sha(source) === 'a09c3e730d3abad910481607b880c265355c6bf394717d01fd78ab036a0ec6c0', id(source), 'SOURCE_INSPECTION');
  check('bundle identity matches dispatch', evidence.bundle_id === 'SYS-404-G4-BUNDLE-20260908-01', evidence.bundle_id, 'SOURCE_INSPECTION');
  const assetAudit = evidence.approval_core.map(a => {
    const exists = fs.existsSync(a.path);
    return { path: a.path, exists, bytes: exists ? fs.statSync(a.path).size : null, expectedBytes: a.bytes, sha256: exists ? sha(a.path) : null, expectedSha256: a.sha256 };
  });
  check('approval core paths, bytes and hashes', assetAudit.every(a => a.exists && a.bytes === a.expectedBytes && a.sha256 === a.expectedSha256), assetAudit, 'SOURCE_INSPECTION');
  const pngAudit = evidence.formal_assets.map(a => ({ path: a.path, ...pngSize(a.path), expectedWidth: a.physical_width, expectedHeight: a.physical_height }));
  check('formal PNG physical dimensions', pngAudit.every(a => a.width === a.expectedWidth && a.height === a.expectedHeight), pngAudit, 'SOURCE_INSPECTION');

  let browser;
  const network = [];
  try {
    browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
    for (const width of [1440, 768, 390]) {
      const height = width === 390 ? 844 : 900;
      const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1, reducedMotion: 'reduce', colorScheme: 'light' });
      await context.route(/^https?:/, route => { network.push(route.request().url()); route.abort(); });
      const page = await context.newPage();
      await page.goto(pathToFileURL(source).href);
      await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(i => i.decode())); });
      const snapshot = await page.evaluate(() => {
        const q = s => document.querySelector(s);
        const actionLinks = [...document.querySelectorAll('.recovery nav a')];
        const visibleTargets = [...document.querySelectorAll('a,button')].filter(e => e.getBoundingClientRect().width > 0).map(e => {
          const r = e.getBoundingClientRect(); return { text: e.textContent.trim(), width: r.width, height: r.height, left: r.left, right: r.right };
        });
        const mainRect = q('main').getBoundingClientRect();
        const recoveryRect = q('.recovery').getBoundingClientRect();
        return {
          copy: [q('.eyebrow').textContent, q('h1').textContent, q('.intro').textContent],
          labels: actionLinks.map(e => e.textContent), hrefs: actionLinks.map(e => e.getAttribute('href')),
          order: [...q('.recovery').children].map(e => e.className || e.tagName),
          primaryCount: q('.primary-actions').children.length, supportingCount: q('.supporting-actions').children.length,
          ariaCurrent: document.querySelectorAll('[aria-current]').length,
          forbidden: document.querySelectorAll('main form, main input, main details, main img, main video').length,
          scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth,
          scrollHeight: document.documentElement.scrollHeight, footerBottom: q('footer').getBoundingClientRect().bottom + scrollY,
          visibleTargets, mainRect: { top: mainRect.top, bottom: mainRect.bottom, height: mainRect.height },
          recoveryRect: { top: recoveryRect.top, bottom: recoveryRect.bottom, height: recoveryRect.height, width: recoveryRect.width },
          primaryColors: [...q('.primary-actions').children].map(e => ({ color: getComputedStyle(e).color, background: getComputedStyle(e).backgroundColor })),
          supportingColors: [...q('.supporting-actions').children].map(e => ({ color: getComputedStyle(e).color, background: getComputedStyle(e).backgroundColor })),
          footerLegalOrder: [...q('footer').children].map(e => e.className || e.tagName),
          fontReady: document.fonts.check('16px Inter')
        };
      });
      check(`${width} exact copy, labels and targets`, JSON.stringify([snapshot.copy,snapshot.labels,snapshot.hrefs]) === JSON.stringify([expected.copy,expected.labels,expected.hrefs]), snapshot);
      check(`${width} order, 2+3 hierarchy and exclusions`, JSON.stringify(snapshot.order) === JSON.stringify(['eyebrow','H1','intro','primary-actions','supporting-actions']) && snapshot.primaryCount === 2 && snapshot.supportingCount === 3 && snapshot.forbidden === 0 && snapshot.ariaCurrent === 0, snapshot);
      check(`${width} complete geometry and no overflow`, snapshot.scrollWidth === snapshot.clientWidth && Math.abs(snapshot.footerBottom - snapshot.scrollHeight) < 2 && snapshot.visibleTargets.every(t => t.width >= 44 && t.height >= 44 && t.left >= 0 && t.right <= width) && snapshot.fontReady, snapshot);
      check(`${width} primary/supporting visual hierarchy`, snapshot.primaryColors.every(c => c.background !== 'rgb(255, 255, 255)') && snapshot.supportingColors.every(c => c.background === 'rgb(255, 255, 255)'), {primary:snapshot.primaryColors,supporting:snapshot.supportingColors}, 'ACTUAL_RUNTIME');
      check(`${width} copyright-first legal utility order`, JSON.stringify(snapshot.footerLegalOrder) === JSON.stringify(['footerGrid','copyright','legalUtilities']), snapshot.footerLegalOrder);
      if (width === 1440) check('1440 short-page vertical balance', snapshot.recoveryRect.top - snapshot.mainRect.top > 70 && snapshot.mainRect.bottom - snapshot.recoveryRect.bottom > 70 && snapshot.recoveryRect.height < 700, snapshot);
      if (width === 390) {
        const rects = await page.locator('.recovery nav a').evaluateAll(es => es.map(e => { const r=e.getBoundingClientRect(); return {left:r.left,right:r.right,top:r.top,bottom:r.bottom,width:r.width,height:r.height}; }));
        check('390 five actions are an ordered full-width single column', rects.length === 5 && rects.every(r => r.width >= 299 && r.left >= 0 && r.right <= 390) && rects.every((r,i) => i===0 || r.top >= rects[i-1].bottom), rects);
      }
      // Independent keyboard focus visibility on one recovery control at every width.
      await page.locator('.primary-actions a').first().focus();
      const outline = await page.locator('.primary-actions a').first().evaluate(e => ({style:getComputedStyle(e).outlineStyle,width:getComputedStyle(e).outlineWidth,color:getComputedStyle(e).outlineColor}));
      check(`${width} visible recovery focus`, outline.style !== 'none' && parseFloat(outline.width) >= 3, outline);
      // All five local navigation intents are independently exercised; no network is allowed.
      for (let i=0;i<5;i++) {
        await page.locator('.recovery nav a').nth(i).click();
        const intent = await page.evaluate(() => window.localNavigationIntents.at(-1));
        check(`${width} action ${i+1} local intent`, intent?.href === expected.hrefs[i] && Object.keys(intent?.context || {}).length === 0, intent, 'LOCAL_SIMULATION');
      }
      if (width < 1101) {
        const toggle = page.locator('.menuButton');
        await toggle.click();
        check(`${width} menu opens with focus and inert background`, await page.evaluate(() => document.activeElement?.textContent.trim() === 'Home' && document.querySelector('main').inert && document.querySelector('footer').inert && document.body.style.overflow === 'hidden'));
        await page.keyboard.press('Shift+Tab');
        check(`${width} menu reverse focus loop`, await page.evaluate(() => document.activeElement?.classList.contains('menuButton')));
        await page.keyboard.press('Shift+Tab');
        check(`${width} menu loop reaches last item`, await page.evaluate(() => document.activeElement?.textContent.trim() === 'Request a Quote'));
        await page.keyboard.press('Tab');
        check(`${width} menu forward focus loop`, await page.evaluate(() => document.activeElement?.classList.contains('menuButton')));
        await page.keyboard.press('Escape');
        check(`${width} menu Escape restores focus and state`, await toggle.evaluate(e => e === document.activeElement) && await page.evaluate(() => document.querySelector('.mobileNav').hidden && !document.querySelector('main').inert && !document.querySelector('footer').inert && document.body.style.overflow === ''));
      }
      await page.locator('#cookie-trigger').click();
      check(`${width} cookie opens with first focus`, await page.locator('[data-cookie-close]').evaluate(e => e === document.activeElement));
      await page.keyboard.press('Shift+Tab');
      check(`${width} cookie reverse loop`, await page.locator('.cookie-layer a').evaluate(e => e === document.activeElement));
      await page.keyboard.press('Tab');
      check(`${width} cookie forward loop`, await page.locator('[data-cookie-close]').evaluate(e => e === document.activeElement));
      await page.keyboard.press('Escape');
      check(`${width} cookie Escape closes and restores focus`, await page.locator('#cookie-trigger').evaluate(e => e === document.activeElement) && await page.locator('.cookie-layer').evaluate(e => !e.open));
      await context.close();
    }
    const context = await browser.newContext({ viewport: { width: 720, height: 900 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
    const page = await context.newPage();
    await page.goto(pathToFileURL(source).href);
    const zoom = await page.evaluate(() => ({scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth,targets:[...document.querySelectorAll('a,button')].filter(e=>e.getBoundingClientRect().width>0).every(e=>e.getBoundingClientRect().width>=44&&e.getBoundingClientRect().height>=44)}));
    check('200 percent equivalent reflow at 1440 to 720 CSS pixels', zoom.scrollWidth === zoom.clientWidth && zoom.targets, zoom);
    await context.close();
    check('no external network', network.length === 0, network, 'ACTUAL_RUNTIME');
  } finally { if (browser) await browser.close(); }
  const failures = checks.filter(c => c.status === 'FAIL');
  const record = {
    dispatch_id:'G5-SYS404-REVIEW-20260908-01', page_id:'SYS-404', review_stage:'GATE5_INDEPENDENT_VISUAL_REVIEW',
    mode:'INDEPENDENT_REVIEW', reviewer:'/root/sys404_gate5_review', author:'/root/sys404_gate4_execute', independent:true,
    bundle_id:evidence.bundle_id, source_identity:id(source), browser:'Google Chrome 152.0.7977.82 via Playwright',
    formal_assets_opened_by_reviewer: evidence.formal_assets.map(a => a.path),
    new_persistent_screenshots:0, screenshot_trigger:'NONE',
    checks, failures:failures.length, result:failures.length ? 'CHANGES_REQUIRED' : 'REVIEW_PASS',
    limits:['Real HTTP 404, valid-route interception, live destination availability, production robots/sitemap, analytics sanitization and site-scope isolation remain downstream runtime checks.'],
    finished_at:new Date().toISOString()
  };
  fs.writeFileSync(output, JSON.stringify(record,null,2)+'\n');
  console.log(JSON.stringify({result:record.result,checks:checks.length,failures:failures.length,output}));
  if (failures.length) process.exitCode=1;
})().catch(error => { fs.writeFileSync(output, JSON.stringify({result:'FAILED',error:error.stack},null,2)+'\n'); console.error(error); process.exitCode=1; });
