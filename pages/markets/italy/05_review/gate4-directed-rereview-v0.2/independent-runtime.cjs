const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = 'D:/23MySec';
const reviewDir = path.join(root, 'pages/markets/italy/05_review/gate4-directed-rereview-v0.2');
const renderDir = path.join(reviewDir, 'independent-renders');
const candidate = path.join(root, 'pages/markets/italy/04_planning/gate4-v0.1/MARKET-EU-IT_GATE4_COMPLETE_VISUAL_V0.1.html');
fs.mkdirSync(renderDir, { recursive: true });

function id(p) {
  const b = fs.readFileSync(p);
  return { path: p.replaceAll('\\', '/'), bytes: b.length, sha256: crypto.createHash('sha256').update(b).digest('hex') };
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const result = {
    page_id: 'MARKET-EU-IT', review_id: 'IT-G4-DIRECTED-REREVIEW-20260907-02',
    workset_id: 'IT-G4-COMPLETE-20260907-02', freeze_id: 'IT-G4-FREEZE-20260907-02',
    candidate: id(candidate), generated_at: new Date().toISOString(), widths: {}, errors: []
  };
  for (const viewport of [{width:1440,height:900},{width:768,height:900},{width:390,height:844}]) {
    const context = await browser.newContext({ viewport, deviceScaleFactor: 1 });
    const page = await context.newPage();
    const pageErrors = [], consoleErrors = [], externalRequests = [];
    page.on('pageerror', e => pageErrors.push(e.message));
    page.on('console', m => { if (m.type() === 'error') consoleErrors.push(m.text()); });
    await page.route(/^https?:\/\//, route => { externalRequests.push(route.request().url()); route.abort(); });
    await page.goto(pathToFileURL(candidate).href, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const state = await page.evaluate(() => {
      const visible = el => { const s=getComputedStyle(el), r=el.getBoundingClientRect(); return s.display!=='none' && s.visibility!=='hidden' && r.width>0 && r.height>0; };
      const controls = [...document.querySelectorAll('a,button,input,select,textarea')].filter(visible);
      const below44 = controls.filter(el => { const r=el.getBoundingClientRect(); return r.width < 44 || r.height < 44; }).map(el => ({tag:el.tagName,text:el.textContent.trim(),w:el.getBoundingClientRect().width,h:el.getBoundingClientRect().height}));
      const clipped = [...document.querySelectorAll('main h1,main h2,main h3,main p,main li,footer a,footer button')].filter(visible).filter(el => {
        const s=getComputedStyle(el); return ((s.overflowX==='hidden'||s.overflowX==='clip') && el.scrollWidth>el.clientWidth+1) || ((s.overflowY==='hidden'||s.overflowY==='clip') && el.scrollHeight>el.clientHeight+1);
      }).map(el => el.textContent.trim().slice(0,80));
      const mainText = document.querySelector('main').innerText.replace(/\s+/g,' ').trim();
      const coo = [...document.querySelectorAll('main p')].find(p => p.textContent.includes('A Certificate of Origin is available upon request.'));
      return {
        documentHeight: document.documentElement.scrollHeight,
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        bodyScrollWidth: document.body.scrollWidth,
        moduleOrder: [...document.querySelectorAll('main section[data-module]')].map(s => s.dataset.module),
        h1Count: document.querySelectorAll('main h1').length,
        bodyLinks: document.querySelectorAll('main a').length,
        below44, clipped,
        cooAdjacent: !!coo && coo.children.length === 1,
        neutralGrade: mainText.includes('this page does not rank Grades for Italy') && mainText.includes('Not sure / Need help'),
        destinationFields: ['Italy','Destination Country','Destination Port / City','Additional Requirements'].every(x=>mainText.includes(x)),
        euBoundary: mainText.includes('It does not calculate duty or tax, decide customs origin or classification, or provide a shipment-specific import result.'),
        rfqBoundary: mainText.includes('The request does not select a Grade or confirm price, stock, supply, transport or delivery timing.'),
        currentVisible: [...document.querySelectorAll('body *')].filter(visible).some(e => [...e.childNodes].some(n => n.nodeType===Node.TEXT_NODE && /\bCURRENT\b/.test(n.textContent))),
        footerBottom: Math.round(document.querySelector('footer').getBoundingClientRect().bottom + scrollY),
      };
    });
    const out = path.join(renderDir, `${viewport.width}-full.png`);
    await page.locator('html').screenshot({ path: out });
    const checks = {
      extent: state.scrollWidth === state.clientWidth && state.bodyScrollWidth <= state.clientWidth && Math.abs(state.footerBottom-state.documentHeight)<=1,
      structure: JSON.stringify(state.moduleOrder) === JSON.stringify(['IT-01','IT-02','IT-03','IT-04','IT-05','IT-06','IT-07']) && state.h1Count===1 && state.bodyLinks===19,
      controls: state.below44.length===0,
      clipping: state.clipped.length===0,
      boundaries: state.cooAdjacent && state.neutralGrade && state.destinationFields && state.euBoundary && state.rfqBoundary && !state.currentVisible,
      runtime: pageErrors.length===0 && consoleErrors.length===0 && externalRequests.length===0,
    };
    result.widths[viewport.width] = { viewport, state, pageErrors, consoleErrors, externalRequests, checks, image:id(out) };
    await context.close();
  }
  await browser.close();
  const checks = Object.values(result.widths).flatMap(w => Object.entries(w.checks).map(([name,pass]) => ({id:`IT-RR-${w.viewport.width}-${name.toUpperCase()}`,pass})));
  result.summary = { checks: checks.length, passed: checks.filter(x=>x.pass).length, failed:checks.filter(x=>!x.pass).length, failed_ids:checks.filter(x=>!x.pass).map(x=>x.id), independent_full_page_renders:3 };
  result.checks = checks;
  fs.writeFileSync(path.join(reviewDir, 'independent-runtime.json'), JSON.stringify(result,null,2)+'\n');
  console.log(JSON.stringify(result.summary));
})().catch(err => { console.error(err); process.exit(1); });
