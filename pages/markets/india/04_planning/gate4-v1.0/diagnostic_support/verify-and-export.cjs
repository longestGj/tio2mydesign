const fs=require('fs');
const path=require('path');
const crypto=require('crypto');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=path.resolve(__dirname,'..');
const htmlPath=path.join(root,'MARKET-IN-001_GATE4_COMPLETE_VISUAL_V1.0.html');
const outDir=path.join(root,'approval_core');
const formal=process.argv.includes('--formal');
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const expectedModules=['IN-01','IN-02','IN-03','IN-04','IN-05'];
const specs=[{n:'1440',w:1440,h:900,dpr:1},{n:'768',w:768,h:900,dpr:1},{n:'390',w:390,h:844,dpr:2}];
(async()=>{
 fs.mkdirSync(outDir,{recursive:true});
 const browser=await chromium.launch({channel:'chrome',headless:true});
 const result={time:new Date().toISOString(),mode:formal?'FORMAL':'PREFLIGHT',browser:await browser.version(),source:{path:htmlPath.replace(/\\/g,'/'),bytes:fs.statSync(htmlPath).size,sha256:sha(htmlPath)},viewports:[],assets:[],findings:[]};
 for(const s of specs){
  const context=await browser.newContext({viewport:{width:s.w,height:s.h},deviceScaleFactor:s.dpr});
  const page=await context.newPage(); const errors=[]; page.on('pageerror',e=>errors.push(String(e)));
  await page.goto('file:///'+htmlPath.replace(/\\/g,'/'),{waitUntil:'load'}); await page.evaluate(()=>document.fonts.ready);
  const m=await page.evaluate(expected=>{
   const visible=[...document.querySelectorAll('a,button')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&r.height>0&&!e.closest('[hidden]')&&!e.closest('dialog:not([open])')}).map(e=>{const r=e.getBoundingClientRect();return {t:e.textContent.trim(),w:r.width,h:r.height}});
   const main=document.querySelector('main'); const ids=[...main.querySelectorAll(':scope>section')].map(x=>x.dataset.module);
   return {ids,orderOk:JSON.stringify(ids)===JSON.stringify(expected),dimensions:{scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth,scrollHeight:document.documentElement.scrollHeight},minControl:{w:Math.min(...visible.map(x=>x.w)),h:Math.min(...visible.map(x=>x.h))},font:getComputedStyle(document.querySelector('h1')).fontFamily,coo:(main.innerText.match(/A Certificate of Origin is available upon request\./g)||[]).length,afterSubmit:(main.innerText.match(/After you submit your quotation request, our team will review your requirements and contact you using the information provided\./g)||[]).length,headings:[...main.querySelectorAll('h1,h2,h3')].map(x=>x.textContent.trim()),canonical:document.querySelector('link[rel=canonical]')?.href,schema:[...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(x=>JSON.parse(x.textContent)['@graph']||[]).map(x=>x['@type'])};
  },expectedModules);
  const rec={logical:{width:s.w,height:s.h},dpr:s.dpr,metrics:m,pageErrors:errors};
  if(formal){const file=`MARKET-IN-001_GATE4_${s.n}_FULL_V1.0${s.dpr===2?'@2x':''}.png`;await page.screenshot({path:path.join(outDir,file),fullPage:true});result.assets.push({file,state:'NORMAL_FULL_PAGE',bytes:fs.statSync(path.join(outDir,file)).size,sha256:sha(path.join(outDir,file))});}
  if(s.w<1101){await page.locator('.menuButton').focus();await page.keyboard.press('Enter');rec.menuOpen=await page.evaluate(()=>({expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),active:document.activeElement.textContent.trim(),mainInert:document.querySelector('main').inert,footerInert:document.querySelector('footer').inert,overflow:document.body.style.overflow}));if(formal){const file=`MARKET-IN-001_GATE4_${s.n}_MENU_V1.0${s.dpr===2?'@2x':''}.png`;await page.screenshot({path:path.join(outDir,file)});result.assets.push({file,state:'MENU_OPEN_FIRST_FOCUS',bytes:fs.statSync(path.join(outDir,file)).size,sha256:sha(path.join(outDir,file))});}await page.keyboard.press('Escape');rec.menuClosed=await page.evaluate(()=>({hidden:document.querySelector('.mobileNav').hidden,active:document.activeElement.className,overflow:document.body.style.overflow}));}
  await page.locator('#cookie-trigger').scrollIntoViewIfNeeded();await page.locator('#cookie-trigger').focus();await page.keyboard.press('Enter');rec.cookieOpen=await page.evaluate(()=>({open:document.querySelector('dialog').open,active:document.activeElement.textContent.trim()}));if(formal){const file=`MARKET-IN-001_GATE4_${s.n}_COOKIE_V1.0${s.dpr===2?'@2x':''}.png`;await page.screenshot({path:path.join(outDir,file)});result.assets.push({file,state:'COOKIE_OPEN_CLOSE_FOCUS',bytes:fs.statSync(path.join(outDir,file)).size,sha256:sha(path.join(outDir,file))});}await page.keyboard.press('Escape');rec.cookieClosed=await page.evaluate(()=>({open:document.querySelector('dialog').open,active:document.activeElement.id}));
  const ok=m.orderOk&&m.dimensions.scrollWidth===m.dimensions.clientWidth&&m.minControl.w>=44&&m.minControl.h>=44&&m.font.includes('Inter')&&m.coo===1&&m.afterSubmit===1&&m.canonical.endsWith('/markets/india/')&&m.schema.includes('WebPage')&&m.schema.includes('BreadcrumbList')&&errors.length===0&&(!rec.menuOpen||(rec.menuOpen.expanded==='true'&&rec.menuOpen.active==='Home'&&rec.menuOpen.mainInert&&rec.menuOpen.footerInert))&&rec.cookieOpen.open&&rec.cookieOpen.active==='Close';
  if(!ok)result.findings.push({id:`IN-G4-${s.n}`,severity:'BLOCKER',metrics:m,rec});
  result.viewports.push(rec);await context.close();
 }
 result.status=result.findings.length?'FAIL':'PASS';
 const file=path.join(__dirname,formal?'formal-runtime-and-export.json':'preflight-runtime.json');fs.writeFileSync(file,JSON.stringify(result,null,2));
 if(formal)fs.writeFileSync(path.join(outDir,'export-inventory.json'),JSON.stringify({freezeId:'IN-G4-V10-SOURCE-01',source:result.source,assets:result.assets},null,2));
 await browser.close(); console.log(JSON.stringify({status:result.status,source:result.source,viewports:result.viewports.map(x=>({logical:x.logical,dpr:x.dpr,height:x.metrics.dimensions.scrollHeight,minControl:x.metrics.minControl,errors:x.pageErrors.length})),assets:result.assets.length,findings:result.findings},null,2));if(result.findings.length)process.exitCode=2;
})().catch(e=>{console.error(e);process.exit(1)});
