const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const dir=__dirname, source=path.join(dir,'market-planning.html'), diagnostic=path.join(dir,'diagnostic_support');
fs.mkdirSync(diagnostic,{recursive:true});
const checks=[];function check(id,pass,actual){checks.push({id,pass:!!pass,actual});}
const hash=f=>crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
if(!fs.existsSync(source)){fs.writeFileSync(path.join(diagnostic,'red.json'),JSON.stringify({timestamp:new Date().toISOString(),result:'EXPECTED_RED',reason:'Missing complete MARKET D32 Gate3 planning source',verifier_sha256:hash(__filename)},null,2));console.error('EXPECTED RED: complete MARKET D32 Gate3 source does not exist');process.exit(1);}
(async()=>{const browser=await chromium.launch({headless:true});const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
const approved=fs.readFileSync(path.resolve(dir,'../MARKET-000_CONTENT_ARCHITECTURE_V0.1.md'),'utf8');const blocks=[...approved.split('## 5.')[0].matchAll(/```text\s*\n([\s\S]*?)```/g)].map(x=>x[1].trim());
const retained=[0,1,2,3,5,6,7,8,9,10,11,12,14,15,16,17,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,38,39,40,41,42,43,44];
const normalized=s=>s.replace(/\s+/g,' ').trim().toLowerCase(); // CSS uppercase eyebrow is approved; preserve source strings separately.
for(const width of [1440,768,390]){
 await page.setViewportSize({width,height:1000});await page.goto(pathToFileURL(source).href);await page.evaluate(()=>document.fonts.ready);
 if(width===390)await page.locator('#eu-toggle').click();
 const text=await page.locator('main').innerText();for(const i of retained)check(`${width}:copy:${i}`,normalized(text).includes(normalized(blocks[i])));
 check(`${width}:Brazil approved delta`,text.includes('Brazil-specific market context'));
 check(`${width}:no retired content`,!text.includes('How is quotation handled?')&&!text.includes('Ready to discuss a destination market?'));
 check(`${width}:six answers`,await page.locator('[data-question]').count()===6);
 check(`${width}:one H1`,await page.locator('h1').count()===1);
 check(`${width}:module order`,JSON.stringify(await page.locator('[data-module]').evaluateAll(n=>n.map(e=>e.dataset.module)))===JSON.stringify(['HERO','DESTINATION_SELECTOR','MARKET_CHOICE_GUIDE','PROCUREMENT_PATHS','TRADE_BOUNDARY','BUYER_QUESTIONS']));
 check(`${width}:single hero action`,await page.locator('.rootHero .actions a').count()===1);
 check(`${width}:ten destination anchors`,await page.locator('#destination-selector a').count()===10);
 check(`${width}:no identities in public body`,!(/MARKET-000|Gate\s?3|NOT_VERIFIED|DO_NOT_RENDER|LOCALIZATION_HOLD|PT-BR|Portugu[eê]s/.test(text)));
 check(`${width}:no navigation status label`,!(await page.locator('header').innerText()).includes('CURRENT'));
 check(`${width}:no forms or unauthorized schema`,await page.locator('form,script[type="application/ld+json"],link[hreflang]').count()===0);
 const geo=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,small:[...document.querySelectorAll('a,button')].filter(e=>e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden').filter(e=>{const r=e.getBoundingClientRect();return r.width<44||r.height<44}).map(e=>({text:e.textContent,w:e.getBoundingClientRect().width,h:e.getBoundingClientRect().height})),clip:[...document.querySelectorAll('main h1,main h2,main h3,main p')].filter(e=>e.getClientRects().length&&e.scrollHeight>e.clientHeight+2&&getComputedStyle(e).overflow!=='visible').map(e=>e.textContent)}));
 check(`${width}:geometry`,geo.scroll<=width&&geo.small.length===0&&geo.clip.length===0,geo);
 check(`${width}:informative media`,await page.locator('.heroIndex').isVisible());
 check(`${width}:header geometry`,Math.round(await page.locator('.header').evaluate(e=>e.getBoundingClientRect().height))===(width===1440?84:64));
 await page.screenshot({path:path.join(diagnostic,`full-${width}.png`),fullPage:true});
 if(width!==1440){
  await page.locator('.menuButton').click();check(`${width}:menu focus`,await page.evaluate(()=>document.activeElement.textContent==='Home'));check(`${width}:menu background`,await page.locator('main').evaluate(e=>e.inert));
  await page.locator('.mobileNav a').last().focus();await page.keyboard.press('Tab');check(`${width}:menu wrap`,await page.locator('.menuButton').evaluate(e=>e===document.activeElement));await page.keyboard.press('Shift+Tab');check(`${width}:menu reverse wrap`,await page.locator('.mobileNav a').last().evaluate(e=>e===document.activeElement));
  await page.keyboard.press('Escape');check(`${width}:menu exit`,await page.locator('.menuButton').evaluate(e=>e===document.activeElement)&&await page.locator('main').evaluate(e=>!e.inert));
  await page.locator('.menuButton').click();await page.evaluate(()=>document.querySelector('.mobileNav').addEventListener('click',e=>e.preventDefault(),{once:true}));await page.locator('.mobileNav a').first().click();check(`${width}:menu selection exit`,await page.locator('.mobileNav').evaluate(e=>e.hidden)&&await page.locator('main').evaluate(e=>!e.inert));
  await page.locator('.menuButton').click();await page.setViewportSize({width:1440,height:1000});check(`${width}:menu breakpoint closes`,await page.locator('.mobileNav').evaluate(e=>e.hidden));await page.setViewportSize({width,height:1000});
 }
 await page.locator('#cookie-trigger').click();check(`${width}:cookie initial focus`,await page.locator('[data-cookie-close]').evaluate(e=>document.activeElement===e));await page.keyboard.press('Shift+Tab');check(`${width}:cookie reverse wrap`,await page.locator('.cookie-layer a').evaluate(e=>document.activeElement===e));await page.keyboard.press('Tab');check(`${width}:cookie wrap`,await page.locator('[data-cookie-close]').evaluate(e=>document.activeElement===e));await page.keyboard.press('Escape');check(`${width}:cookie return`,await page.locator('#cookie-trigger').evaluate(e=>document.activeElement===e));
}
await page.setViewportSize({width:390,height:1000});
for(const [state,count] of [['none',0],['eu-only',1],['support-only',0],['full',10]]){await page.goto(pathToFileURL(source).href+'?state='+state);await page.evaluate(()=>document.fonts.ready);await page.locator('#eu-toggle').click();check(`state:${state}:market`,await page.locator('#destination-selector a').count()===count);check(`state:${state}:fixed RFQ`,await page.locator('.headerRfq').isVisible());check(`state:${state}:no hidden destination URL`,state!=='none'||!(await page.locator('#destination-selector').innerHTML()).includes('href='));check(`state:${state}:support`,await page.locator('.supportAction').count()===(['full','support-only'].includes(state)?4:0));check(`state:${state}:content remains`,(await page.locator('main').innerText()).includes('Use the United Kingdom path'));await page.screenshot({path:path.join(diagnostic,`state-${state}-390.png`),fullPage:true});}
await page.goto(pathToFileURL(source).href);check('mobile EU initial collapsed',await page.locator('#eu-toggle').getAttribute('aria-expanded')==='false');await page.locator('#eu-toggle').focus();await page.keyboard.press('Enter');check('EU keyboard opens six countries',await page.locator('#eu-countries').isVisible()&&await page.locator('#eu-countries li').count()===6);await page.keyboard.press('Space');check('EU keyboard closes',await page.locator('#eu-toggle').getAttribute('aria-expanded')==='false');
const nojs=await browser.newPage({javaScriptEnabled:false,viewport:{width:390,height:1000}});await nojs.goto(pathToFileURL(source).href);check('noJS six country fallback',await nojs.locator('#eu-countries').isVisible());await nojs.close();check('no browser errors',errors.length===0,errors);
const report={timestamp:new Date().toISOString(),source_sha256:hash(source),verifier_sha256:hash(__filename),evidence_type:'ACTUAL_RUNTIME + LOCAL_SIMULATION',passed:checks.filter(c=>c.pass).length,failed:checks.filter(c=>!c.pass).length,checks};fs.writeFileSync(path.join(diagnostic,'runtime.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({passed:report.passed,failed:report.failed,failures:checks.filter(c=>!c.pass)},null,2));await browser.close();process.exitCode=report.failed?1:0;})().catch(e=>{console.error(e);process.exit(1)});
