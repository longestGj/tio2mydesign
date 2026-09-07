const fs=require('fs');
const path=require('path');
const crypto=require('crypto');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=path.resolve(__dirname,'..');
const htmlPath=path.join(root,'MARKET-BR-EN_GATE4_COMPLETE_VISUAL_V1.1.html');
const upstreamPath=path.resolve(root,'../gate3-en-v0.1/MARKET-BR-EN_GATE3_RESPONSIVE_WIREFRAME_V0.1.html');
const outDir=path.join(root,'approval_core');
const formal=process.argv.includes('--formal');
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const specs=[{n:'1440',w:1440,h:900,dpr:1},{n:'768',w:768,h:900,dpr:1},{n:'390',w:390,h:844,dpr:2}];
const expectedModules=['BR-EN-01','BR-EN-02','BR-EN-03','BR-EN-04','BR-EN-05'];
const normal=s=>s.replace(/\s+/g,' ').trim();
const rgb=s=>(s.match(/\d+/g)||[]).slice(0,3).map(Number);
const lum=c=>{const a=c.map(v=>{v/=255;return v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*a[0]+.7152*a[1]+.0722*a[2]};
const contrast=(a,b)=>{const x=lum(rgb(a)),y=lum(rgb(b));return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
(async()=>{
 fs.mkdirSync(outDir,{recursive:true});
 const browser=await chromium.launch({channel:'chrome',headless:true});
 const baseContext=await browser.newContext({viewport:{width:1440,height:900}});
 const base=await baseContext.newPage();
 await base.goto('file:///'+upstreamPath.replace(/\\/g,'/')); await base.evaluate(()=>document.fonts.ready);
 const approved=await base.evaluate(()=>({text:document.querySelector('main').innerText,links:[...document.querySelectorAll('main a')].map(a=>[a.textContent.trim(),a.getAttribute('href')])}));
 await baseContext.close();
 const visualCss=fs.readFileSync(htmlPath,'utf8').match(/<style id="gate4-complete-visual">([\s\S]*?)<\/style>/)?.[1]||'';
 const sharedSelectorHits=[...visualCss.matchAll(/\.(header|footer|menuButton|mobileNav|cookie-layer)\b/g)].map(x=>x[0]);
 const result={time:new Date().toISOString(),mode:formal?'FORMAL':'PREFLIGHT',browser:await browser.version(),worksetId:'BR-EN-G4-WS-02',freezeId:'BR-EN-G4-V11-SOURCE-01',source:{path:htmlPath.replace(/\\/g,'/'),bytes:fs.statSync(htmlPath).size,sha256:sha(htmlPath)},approvedUpstream:{path:upstreamPath.replace(/\\/g,'/'),bytes:fs.statSync(upstreamPath).size,sha256:sha(upstreamPath)},sharedVisualSelectorHits:sharedSelectorHits,viewports:[],assets:[],findings:[]};
 for(const s of specs){
  const context=await browser.newContext({viewport:{width:s.w,height:s.h},deviceScaleFactor:s.dpr});
  const page=await context.newPage(); const errors=[]; page.on('pageerror',e=>errors.push(String(e)));
  await page.goto('file:///'+htmlPath.replace(/\\/g,'/'),{waitUntil:'load'}); await page.evaluate(()=>document.fonts.ready);
  const m=await page.evaluate(({expectedModules})=>{
   const visible=[...document.querySelectorAll('a,button')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&r.height>0&&!e.closest('[hidden]')&&!e.closest('dialog:not([open])')}).map(e=>{const r=e.getBoundingClientRect();return {text:e.textContent.trim(),w:r.width,h:r.height}});
   const main=document.querySelector('main'); const ids=[...main.querySelectorAll(':scope>section')].map(x=>x.dataset.module);
   const clipped=[...main.querySelectorAll('h1,h2,h3,p,li,a')].filter(e=>e.scrollWidth>e.clientWidth+5||e.scrollHeight>e.clientHeight+5).map(e=>({tag:e.tagName,text:e.textContent.trim().slice(0,80),client:[e.clientWidth,e.clientHeight],scroll:[e.scrollWidth,e.scrollHeight]}));
   let schema=[]; try{schema=[...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(x=>JSON.parse(x.textContent)['@graph']||[]).map(x=>x['@type'])}catch(e){schema=['PARSE_ERROR']}
   return {text:main.innerText,links:[...main.querySelectorAll('a')].map(a=>[a.textContent.trim(),a.getAttribute('href')]),ids,orderOk:JSON.stringify(ids)===JSON.stringify(expectedModules),dimensions:{scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth,scrollHeight:document.documentElement.scrollHeight},minControl:{w:Math.min(...visible.map(x=>x.w)),h:Math.min(...visible.map(x=>x.h))},clipped,font:getComputedStyle(document.querySelector('h1')).fontFamily,coo:(main.innerText.match(/A Certificate of Origin is available upon request\./g)||[]).length,date:(main.innerText.match(/6 September 2026/g)||[]).length,afterSubmit:(main.innerText.match(/After you submit your quotation request, our team will review your requirements and contact you using the information provided\./g)||[]).length,canonical:document.querySelector('link[rel=canonical]')?.href,meta:document.querySelector('meta[name=description]')?.content,schema};
  },{expectedModules});
  const contentExact=normal(m.text)===normal(approved.text); const linksExact=JSON.stringify(m.links)===JSON.stringify(approved.links);
  const rec={logical:{width:s.w,height:s.h},dpr:s.dpr,metrics:{...m,text:undefined,links:undefined},contentExact,linksExact,pageErrors:errors};
  if(formal){const file=`MARKET-BR-EN_GATE4_${s.n}_FULL_V1.1${s.dpr===2?'@2x':''}.png`;await page.screenshot({path:path.join(outDir,file),fullPage:true});result.assets.push({file,state:'NORMAL_FULL_PAGE',logical:[s.w,s.h],dpr:s.dpr,bytes:fs.statSync(path.join(outDir,file)).size,sha256:sha(path.join(outDir,file))});}
  const focusLink=page.locator('.m3 .actions a').first(); await focusLink.scrollIntoViewIfNeeded(); await focusLink.focus();
  rec.documentFocus=await focusLink.evaluate(e=>{const c=getComputedStyle(e),section=getComputedStyle(e.closest('.m3'));return {text:e.textContent.trim(),outlineColor:c.outlineColor,outlineWidth:c.outlineWidth,outlineStyle:c.outlineStyle,outlineOffset:c.outlineOffset,adjacentSurface:section.backgroundColor}});
  rec.documentFocus.contrast=contrast(rec.documentFocus.outlineColor,rec.documentFocus.adjacentSurface);
  if(formal){const file=`MARKET-BR-EN_GATE4_${s.n}_DOCUMENT_FOCUS_V1.1${s.dpr===2?'@2x':''}.png`;await page.screenshot({path:path.join(outDir,file)});result.assets.push({file,state:'DOCUMENT_ACTION_KEYBOARD_FOCUS',logical:[s.w,s.h],dpr:s.dpr,bytes:fs.statSync(path.join(outDir,file)).size,sha256:sha(path.join(outDir,file))});}
  if(s.w<1101){await page.locator('.menuButton').focus();await page.keyboard.press('Enter');rec.menuOpen=await page.evaluate(()=>({expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),active:document.activeElement.textContent.trim(),mainInert:document.querySelector('main').inert,footerInert:document.querySelector('footer').inert,overflow:document.body.style.overflow}));if(formal){const file=`MARKET-BR-EN_GATE4_${s.n}_MENU_V1.1${s.dpr===2?'@2x':''}.png`;await page.screenshot({path:path.join(outDir,file)});result.assets.push({file,state:'MENU_OPEN_FIRST_FOCUS',logical:[s.w,s.h],dpr:s.dpr,bytes:fs.statSync(path.join(outDir,file)).size,sha256:sha(path.join(outDir,file))});}await page.keyboard.press('Escape');rec.menuClosed=await page.evaluate(()=>({hidden:document.querySelector('.mobileNav').hidden,active:document.activeElement.className,overflow:document.body.style.overflow}));}
  await page.locator('#cookie-trigger').scrollIntoViewIfNeeded();await page.locator('#cookie-trigger').focus();await page.keyboard.press('Enter');rec.cookieOpen=await page.evaluate(()=>({open:document.querySelector('dialog').open,active:document.activeElement.textContent.trim()}));if(formal){const file=`MARKET-BR-EN_GATE4_${s.n}_COOKIE_V1.1${s.dpr===2?'@2x':''}.png`;await page.screenshot({path:path.join(outDir,file)});result.assets.push({file,state:'COOKIE_OPEN_CLOSE_FOCUS',logical:[s.w,s.h],dpr:s.dpr,bytes:fs.statSync(path.join(outDir,file)).size,sha256:sha(path.join(outDir,file))});}await page.keyboard.press('Escape');rec.cookieClosed=await page.evaluate(()=>({open:document.querySelector('dialog').open,active:document.activeElement.id}));
  const ok=sharedSelectorHits.length===0&&rec.documentFocus.outlineStyle==='solid'&&parseFloat(rec.documentFocus.outlineWidth)>=3&&rec.documentFocus.contrast>=3&&m.orderOk&&contentExact&&linksExact&&m.dimensions.scrollWidth===m.dimensions.clientWidth&&m.minControl.w>=44&&m.minControl.h>=44&&m.clipped.length===0&&m.font.includes('Inter')&&m.coo===1&&m.date===1&&m.afterSubmit===1&&m.canonical==='https://tio2malaysia.com/markets/brazil/'&&m.meta.startsWith('Explore Malaysia-origin')&&m.schema.includes('WebPage')&&m.schema.includes('BreadcrumbList')&&errors.length===0&&(!rec.menuOpen||(rec.menuOpen.expanded==='true'&&rec.menuOpen.active==='Home'&&rec.menuOpen.mainInert&&rec.menuOpen.footerInert&&rec.menuClosed.hidden&&rec.menuClosed.overflow===''))&&rec.cookieOpen.open&&rec.cookieOpen.active==='Close'&&!rec.cookieClosed.open&&rec.cookieClosed.active==='cookie-trigger';
  if(!ok)result.findings.push({id:`BR-EN-G4-${s.n}`,severity:'BLOCKER',rec});
  result.viewports.push(rec); await context.close();
 }
 result.status=result.findings.length?'FAIL':'PASS';
 const recPath=path.join(__dirname,formal?'formal-runtime-and-export.json':'preflight-runtime.json');fs.writeFileSync(recPath,JSON.stringify(result,null,2));
 if(formal)fs.writeFileSync(path.join(outDir,'export-inventory.json'),JSON.stringify({worksetId:result.worksetId,freezeId:result.freezeId,source:result.source,upstream:result.approvedUpstream,assets:result.assets},null,2));
 await browser.close(); console.log(JSON.stringify({status:result.status,source:result.source,sharedVisualSelectorHits:result.sharedVisualSelectorHits,viewports:result.viewports.map(x=>({logical:x.logical,dpr:x.dpr,height:x.metrics.dimensions.scrollHeight,minControl:x.metrics.minControl,clipped:x.metrics.clipped.length,contentExact:x.contentExact,linksExact:x.linksExact,documentFocus:x.documentFocus,errors:x.pageErrors.length})),assets:result.assets.length,findings:result.findings},null,2));if(result.findings.length)process.exitCode=2;
})().catch(e=>{console.error(e);process.exit(1)});

