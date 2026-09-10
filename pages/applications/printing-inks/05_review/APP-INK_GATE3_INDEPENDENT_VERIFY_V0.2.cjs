const fs=require('fs'),crypto=require('crypto'),path=require('path');
const {pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const {marked}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/marked');
const base='D:/23MySec/pages/applications/printing-inks/04_planning/gate3-v0.2';
const out='D:/23MySec/pages/applications/printing-inks/05_review/APP-INK_GATE3_INDEPENDENT_OBSERVATIONS_V0.2.json';
const read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p)),hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const freeze=json(base+'/APP-INK_GATE3_FREEZE_RECORD_V0.2.json'),inventory=json(base+'/APP-INK_GATE3_ASSET_INVENTORY_V0.2.json');
const result={reviewer:'/root/printing_inks_gate3_review',date:new Date().toISOString(),identity:[],runtime:[],shared:{},evidenceRole:'diagnostic_support',failures:[]};
const unique=new Map();
function collect(o){if(!o||typeof o!=='object')return;if(o.path&&o.sha256&&o.bytes!==undefined)unique.set(o.path,o);Object.values(o).forEach(collect)}
collect(freeze);collect(inventory);collect(json(base+'/APP-INK_GATE3_PREFLIGHT_RECORD_V0.2.json'));
for(const o of unique.values()){const b=fs.readFileSync(o.path),a={path:o.path,expectedBytes:o.bytes,actualBytes:b.length,expectedSha256:o.sha256,actualSha256:hash(b)};a.match=a.expectedBytes===a.actualBytes&&a.expectedSha256.toLowerCase()===a.actualSha256;result.identity.push(a);if(!a.match)result.failures.push('identity:'+o.path)}
for(const p of ['APP-INK_GATE3_FREEZE_RECORD_V0.2.json','APP-INK_GATE3_ASSET_INVENTORY_V0.2.json']){const b=fs.readFileSync(base+'/'+p);result[p]={bytes:b.length,sha256:hash(b)}}
const src=read(freeze.source.path),sharedDir='D:/23MySec/docs/architecture/gate3-shared-consumer-v0.2';
const {renderSharedChrome}=require(sharedDir+'/render-shared-chrome.cjs');
const shared=renderSharedChrome({currentPageId:'APP-000',primaryLogoSrc:pathToFileURL(freeze.dependencies[0].path).href,reverseLogoSrc:pathToFileURL(freeze.dependencies[1].path).href});
for(const key of ['header','footer','dialog','style','behavior'])result.shared[key+'ExactEmbedded']=src.includes(shared[key]);
result.shared.ownerCoverageLimitation='Original owner JSON/script does not test Tab/Shift+Tab loops; those are independently run here. Page global body/a/:root rules mean identity alone is not sufficient; shared checks are rerun.';
const b=read(freeze.inputs.B.path).match(/<!-- BUYER_COPY_START -->([\s\S]*?)<!-- BUYER_COPY_END -->/)[1],expected=marked.parse(b);
const focus=page=>page.evaluate(()=>({text:document.activeElement.textContent.trim(),cls:document.activeElement.className,tag:document.activeElement.tagName}));
(async()=>{
const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
for(const width of [1440,768,390]){
 const height=width===1440?1000:width===768?1024:844,page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1});
 await page.goto(pathToFileURL(freeze.source.path).href);await page.evaluate(()=>document.fonts.ready);
 const r={width,height,browser:browser.version(),evidence:'ACTUAL_RUNTIME'};
 r.content=await page.evaluate(expected=>{
  const norm=s=>s.replace(/\s+/g,' ').trim();const box=document.createElement('div');box.innerHTML=expected;
  const tokens=(node,skip)=>{const w=document.createTreeWalker(node,NodeFilter.SHOW_TEXT),t=[];while(w.nextNode()){if(skip&&w.currentNode.parentElement.closest('.breadcrumb,.eyebrow'))continue;const x=norm(w.currentNode.nodeValue);if(x)t.push(x)}return t.join(' ')};
  const main=document.querySelector('main');const links=n=>[...n.querySelectorAll('a')].map(a=>({label:norm(a.textContent),href:a.getAttribute('href')}));
  const clone=main.cloneNode(true);clone.querySelectorAll('.breadcrumb,.eyebrow').forEach(e=>e.remove());
  return {exactTokens:tokens(main,true)===tokens(box,false),exactLinks:JSON.stringify(links(clone))===JSON.stringify(links(box)),moduleOrder:[...main.querySelectorAll('section')].map(e=>e.dataset.module),headings:[...main.querySelectorAll('h1,h2')].map(e=>e.textContent),tables:[...main.querySelectorAll('table')].map(t=>({headers:[...t.querySelectorAll('th')].map(x=>x.textContent),records:[...t.querySelectorAll('tbody tr')].map(tr=>[...tr.querySelectorAll('td')].map(x=>({value:x.textContent,label:x.dataset.label})))})),paragraphCounts:[...main.querySelectorAll('section')].map(e=>({module:e.dataset.module,count:e.querySelectorAll('p').length}))};
 },expected);
 r.geometry=await page.evaluate(()=>{
 const vis=e=>e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden';const under=[...document.querySelectorAll('a,button')].filter(vis).map(e=>{const b=e.getBoundingClientRect();return {text:e.textContent.trim(),width:b.width,height:b.height}}).filter(e=>e.width<44||e.height<44);
 const clipped=[];for(const e of document.querySelectorAll('main *')){const s=getComputedStyle(e),b=e.getBoundingClientRect();if(e.tagName==='THEAD'||e.closest('thead'))continue;if(vis(e)&&(b.left<-.5||b.right>innerWidth+.5||((s.overflowY==='hidden'||s.overflowY==='clip')&&e.scrollHeight>e.clientHeight+1)))clipped.push({tag:e.tagName,cls:e.className,text:e.textContent.slice(0,80)})}
 return {scrollWidth:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight,under44:under,clipped,headerHeight:document.querySelector('header').getBoundingClientRect().height,bodyFont:getComputedStyle(document.body).fontSize,styleFocus:[...document.styleSheets].flatMap(s=>[...s.cssRules].map(r=>r.cssText)).filter(x=>x.includes('focus-visible'))};
 });
 const png=await page.screenshot({fullPage:true});r.reRenderSha256=hash(png);r.formalPixelFileMatch=r.reRenderSha256===inventory.formalAssets.find(a=>a.state==='full'&&a.logicalViewport.width===width).sha256;
 await page.locator('.breadcrumb a').first().focus();await page.keyboard.press('Tab');r.bodyFocus=await page.evaluate(()=>{const e=document.activeElement,s=getComputedStyle(e);return {text:e.textContent,outline:s.outline,outlineColor:s.outlineColor,focusVisible:e.matches(':focus-visible'),expected:'rgb(0, 128, 120)'}});
 await page.keyboard.press('Shift+Tab');r.allMainFocus=[];
 for(let i=0;i<18;i++){
   r.allMainFocus.push(await page.evaluate(()=>{const e=document.activeElement,s=getComputedStyle(e),r=e.getBoundingClientRect();return {label:e.textContent.trim(),href:e.getAttribute('href'),main:!!e.closest('main'),visible:e.matches(':focus-visible'),outline:s.outline,offset:s.outlineOffset,left:r.left-6,right:r.right+6,withinHorizontal:r.left-6>=0&&r.right+6<=innerWidth,top:r.top,bottom:r.bottom}}));
   await page.keyboard.press('Tab');
 }
 await page.evaluate(()=>scrollTo(0,0));
 if(width!==1440){
  await page.locator('.menuButton').click();r.menu={opened:await focus(page),background:await page.evaluate(()=>({main:document.querySelector('main').inert,footer:document.querySelector('footer').inert,logo:document.querySelector('.logoLink').inert,rfq:document.querySelector('.headerRfq').inert,lock:document.body.style.overflow}))};
  await page.keyboard.press('Shift+Tab');r.menu.firstBack=await focus(page);await page.keyboard.press('Shift+Tab');r.menu.backwardWrap=await focus(page);await page.keyboard.press('Tab');r.menu.forwardWrap=await focus(page);
  await page.keyboard.press('Escape');r.menu.escape=await page.evaluate(()=>({hidden:document.querySelector('.mobileNav').hidden,focus:document.activeElement.className,main:document.querySelector('main').inert,lock:document.body.style.overflow}));
  await page.locator('.menuButton').click();await page.locator('.mobileNav a[href="/applications/"]').evaluate(e=>e.addEventListener('click',x=>x.preventDefault(),{once:true}));await page.locator('.mobileNav a[href="/applications/"]').click();r.menu.selectClose=await page.evaluate(()=>({hidden:document.querySelector('.mobileNav').hidden,focus:document.activeElement.className,main:document.querySelector('main').inert,lock:document.body.style.overflow}));
  await page.locator('.menuButton').click();await page.setViewportSize({width:1200,height});await page.waitForFunction(()=>document.querySelector('.mobileNav').hidden);r.menu.breakpoint=await page.evaluate(()=>({hidden:document.querySelector('.mobileNav').hidden,main:document.querySelector('main').inert,lock:document.body.style.overflow}));await page.setViewportSize({width,height});
 }
 await page.locator('#cookie-trigger').click();r.cookie={opened:await focus(page)};await page.keyboard.press('Shift+Tab');r.cookie.backwardWrap=await focus(page);await page.keyboard.press('Tab');r.cookie.forwardWrap=await focus(page);await page.keyboard.press('Escape');r.cookie.escape=await page.evaluate(()=>({open:document.querySelector('.cookie-layer').open,focus:document.activeElement.id}));await page.locator('#cookie-trigger').click();await page.locator('[data-cookie-close]').click();r.cookie.clickClose=await page.evaluate(()=>({open:document.querySelector('.cookie-layer').open,focus:document.activeElement.id}));
 r.anchors=[];for(const id of ['define-the-ink-and-print-system','grades-to-review']){await page.evaluate(()=>document.documentElement.style.scrollBehavior='auto');await page.locator('.heroActions a[href="#'+id+'"]').click();r.anchors.push(await page.evaluate(id=>({id,hash:location.hash,top:document.getElementById(id).getBoundingClientRect().top}),id))}
 result.runtime.push(r);await page.close();
}
await browser.close();
result.summary={identityCount:result.identity.length,identityFailures:result.identity.filter(x=>!x.match).length,exactContentAll:result.runtime.every(x=>x.content.exactTokens&&x.content.exactLinks),geometryAll:result.runtime.every(x=>x.geometry.scrollWidth===x.width&&!x.geometry.under44.length&&!x.geometry.clipped.length),formalReRenderAll:result.runtime.every(x=>x.formalPixelFileMatch)};
fs.writeFileSync(out,JSON.stringify(result,null,2));console.log(JSON.stringify({out,summary:result.summary,runtime:result.runtime.map(({content,...r})=>r)},null,2));
})().catch(e=>{console.error(e);process.exit(1)});

