// Read-only Gate 6 inspection of the approved local planning source; no receiver traffic.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const base = 'D:/23MySec/pages/markets/poland';
const visual = base + '/04_planning/gate5-v0.1';
const hash = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const freeze = JSON.parse(fs.readFileSync(visual + '/approval_core/source-freeze.json', 'utf8'));
const inventory = JSON.parse(fs.readFileSync(visual + '/approval_core/export-inventory.json', 'utf8'));
const report = {date:new Date().toISOString(), freezeId:freeze.freezeId, identity:[], viewports:[], network:[], errors:[], boundary:'Local frozen planning source only; navigation is intercepted by the planning source; no receiver or production verification.'};
for (const item of [...freeze.dependencies, ...freeze.inputs, ...inventory.captures]) {
  const exists = fs.existsSync(item.path);
  report.identity.push({path:item.path, expected:item.sha256, actual:exists ? hash(item.path):null, match:exists && hash(item.path)===item.sha256});
}
const copy = fs.readFileSync(base+'/04_planning/MARKET-EU-PL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md','utf8').replace(/<!--[\s\S]*?-->/g,'');
const lines = copy.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
const expected = {headings:lines.filter(x=>x.startsWith('#')).map(x=>x.replace(/^#+\s+/,'')), paragraphs:lines.filter(x=>!x.startsWith('#')&&!x.startsWith('[')), links:[...copy.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)].map(m=>({text:m[1],href:m[2]}))};
(async()=>{
  const browser = await chromium.launch({channel:'chrome',headless:true});
  report.browser = browser.version();
  for (const width of [1440,768,390]) {
    const context = await browser.newContext({viewport:{width,height:width===390?844:1000},deviceScaleFactor:width===390?2:1,reducedMotion:'reduce'});
    const page = await context.newPage();
    await page.route(/^https?:/i,r=>{report.network.push(r.request().url());r.abort();});
    page.on('pageerror',e=>report.errors.push(e.message));
    await page.goto(pathToFileURL(freeze.entry.path).href);
    await page.evaluate(()=>document.fonts.ready);
    const result = await page.evaluate(()=>{
      const text = sel=>[...document.querySelectorAll(sel)].map(n=>n.textContent.trim());
      const visible = n=>n.getBoundingClientRect().width>0&&n.getBoundingClientRect().height>0;
      return {width:innerWidth,scrollWidth:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight,
        headings:text('main h1,main h2,main h3'),paragraphs:text('main p'),links:[...document.querySelectorAll('main a')].map(n=>({text:n.textContent.trim(),href:n.getAttribute('href')})),modules:[...document.querySelectorAll('main section')].map(n=>n.id),
        controls:[...document.querySelectorAll('a,button')].filter(visible).map(n=>({text:n.textContent.trim(),width:n.getBoundingClientRect().width,height:n.getBoundingClientRect().height})),
        clipping:[...document.querySelectorAll('main h1,main h2,main h3,main p,main a')].filter(n=>n.scrollWidth>n.clientWidth+1||n.scrollHeight>n.clientHeight+1).map(n=>n.textContent.trim()),
        title:document.title,description:document.querySelector('meta[name=description]').content,canonical:document.querySelector('link[rel=canonical]').href,robots:document.querySelector('meta[name=robots]').content,
        images:[...document.images].map(n=>({src:n.getAttribute('src'),loaded:n.complete&&n.naturalWidth>0})),font:document.fonts.check('17px Inter'),applicationColumns:getComputedStyle(document.querySelector('.application-paths')).gridTemplateColumns,
        sharedLinks:[...document.querySelectorAll('header a,footer a')].map(n=>({text:n.textContent.trim(),href:n.getAttribute('href')})),current:[...document.querySelectorAll('[aria-current=page]')].map(n=>n.textContent.trim())};
    });
    result.copyEquality = Object.fromEntries(['headings','paragraphs','links'].map(k=>[k,JSON.stringify(result[k])===JSON.stringify(expected[k])]));
    result.actions=[];
    for(const link of await page.locator('main a').all()) {const href=await link.getAttribute('href');await link.click();result.actions.push({expected:href,observed:await page.evaluate(()=>window.planningNavigation.at(-1)),type:'LOCAL_SIMULATION'});}
    if(width<1101){
      const toggle=page.locator('.menuButton');await toggle.focus();await page.keyboard.press('Enter');
      result.menuOpen=await page.evaluate(()=>({expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),focus:document.activeElement.textContent,backgroundInert:document.querySelector('main').inert&&document.querySelector('footer').inert,links:[...document.querySelectorAll('.mobileNav a')].map(n=>({label:n.textContent.trim(),width:n.getBoundingClientRect().width,height:n.getBoundingClientRect().height,current:n.getAttribute('aria-current')}))}));
      await toggle.focus();await page.keyboard.press('Shift+Tab');result.menuReverse=await page.locator('.mobileNav a').last().evaluate(n=>document.activeElement===n);
      await page.keyboard.press('Tab');result.menuForward=await toggle.evaluate(n=>document.activeElement===n);
      await page.keyboard.press('Escape');result.menuReturn=await toggle.evaluate(n=>document.activeElement===n&&n.getAttribute('aria-expanded')==='false');
    }
    await page.locator('#cookie-trigger').focus();await page.keyboard.press('Enter');
    result.cookieOpen=await page.locator('.cookie-layer').evaluate(n=>({open:n.open,focusClose:document.activeElement===n.querySelector('button'),fits:n.scrollHeight<=n.clientHeight+1}));
    await page.keyboard.press('Shift+Tab');result.cookieReverse=await page.locator('.cookie-actions a').evaluate(n=>document.activeElement===n);
    await page.keyboard.press('Tab');result.cookieForward=await page.locator('.cookie-actions button').evaluate(n=>document.activeElement===n);
    await page.keyboard.press('Escape');result.cookieReturn=await page.locator('#cookie-trigger').evaluate(n=>document.activeElement===n);
    report.viewports.push(result);await context.close();
  }
  await browser.close();
  report.sourceStillMatches = hash(freeze.entry.path)===freeze.entry.sha256;
  fs.writeFileSync(path.join(__dirname,'runtime-and-identity.json'),JSON.stringify(report,null,2));
  console.log(JSON.stringify({identity:report.identity.length,mismatches:report.identity.filter(x=>!x.match),viewports:report.viewports.map(v=>({width:v.width,height:v.height,copy:v.copyEquality,clipping:v.clipping,smallControls:v.controls.filter(c=>c.width<44||c.height<44),menuReturn:v.menuReturn,cookieReturn:v.cookieReturn})),network:report.network,errors:report.errors}));
})().catch(e=>{report.errors.push(e.stack);fs.writeFileSync(path.join(__dirname,'runtime-and-identity-failure.json'),JSON.stringify(report,null,2));console.error(e);process.exitCode=1;});
