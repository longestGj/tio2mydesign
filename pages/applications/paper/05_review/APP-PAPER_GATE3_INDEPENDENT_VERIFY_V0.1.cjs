const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const {marked}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/marked');
const root='D:/23MySec',base=root+'/pages/applications/paper/04_planning/gate3-v0.3',out=root+'/pages/applications/paper/05_review';
const read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p)),hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const result={reviewer:'/root/paper_gate3_review',createdAt:new Date().toISOString(),type:'diagnostic_support',identities:[],runtime:[],shared:{},failures:[]};
const freeze=json(base+'/APP-PAPER_GATE3_FREEZE_RECORD_V0.3.json'),inv=json(base+'/APP-PAPER_GATE3_ASSET_INVENTORY_V0.3.json'),pre=json(base+'/APP-PAPER_GATE3_PREFLIGHT_RECORD_V0.3.json');
function identity(p,sha,bytes){const b=fs.readFileSync(p),o={path:p,bytes:b.length,sha256:hash(b),expectedSha256:sha,expectedBytes:bytes};o.match=(!sha||sha.toLowerCase()===o.sha256)&&(bytes===undefined||bytes===o.bytes);result.identities.push(o);if(!o.match)result.failures.push('identity:'+p);return o;}
function collect(o){if(!o||typeof o!=='object')return;if(o.path&&o.sha256)identity(o.path,o.sha256,o.bytes);Object.values(o).forEach(collect);}
collect(freeze);collect(pre);collect(inv);
const sharedDir=root+'/docs/architecture/gate3-shared-consumer-v0.2';
for(const f of json(sharedDir+'/consumer-package.json').files)identity(sharedDir+'/'+f.path,f.sha256);
identity(pre.sharedInheritance.originalReport,pre.sharedInheritance.originalReportSha256);
for(const p of [base+'/APP-PAPER_GATE3_ASSET_INVENTORY_V0.3.json',root+'/pages/applications/paper/APP-PAPER_CURRENT_GATE_BASELINE_MANIFEST_V0.4.md',out+'/APP-PAPER_GATE3_TO_GATE4_HANDOFF_DRAFT_V0.1.md'])identity(p);
const source=read(freeze.candidate.path),{renderSharedChrome}=require(sharedDir+'/render-shared-chrome.cjs');
const shared=renderSharedChrome({currentPageId:'APP-000',primaryLogoSrc:pathToFileURL(root+'/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg').href,reverseLogoSrc:pathToFileURL(root+'/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg').href});
for(const k of ['header','footer','dialog','style','behavior']){result.shared[k]=source.includes(shared[k]);if(!result.shared[k])result.failures.push('shared:'+k);}
const approved=read(pre.approvedInputs.find(x=>x.role==='B').path).split('<!-- BUYER_COPY_START -->')[1].split('<!-- BUYER_COPY_END -->')[0];
(async()=>{const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
for(const [width,height] of [[1440,1000],[768,1024],[390,844]]){
const page=await browser.newPage({viewport:{width,height}});await page.goto(pathToFileURL(freeze.candidate.path).href);await page.evaluate(()=>document.fonts.ready);
const r=await page.evaluate(html=>{
const expected=document.createElement('div');expected.innerHTML=html;const norm=s=>s.replace(/\s+/g,' ').trim();
const visible=e=>{const b=e.getBoundingClientRect(),s=getComputedStyle(e);return b.width>0&&b.height>0&&s.display!=='none'&&s.visibility!=='hidden';};
const controls=[...document.querySelectorAll('a,button')].filter(visible).map(e=>{const b=e.getBoundingClientRect();return {text:e.textContent.trim(),width:b.width,height:b.height,href:e.getAttribute('href')};});
const data=sel=>[...document.querySelectorAll(sel)].map(e=>e.textContent.trim());
const links=n=>[...n.querySelectorAll('a')].map(e=>[e.textContent,e.getAttribute('href')]);
const tables=n=>[...n.querySelectorAll('table')].map(t=>[...t.querySelectorAll('tr')].map(r=>[...r.children].map(c=>c.textContent)));
const main=document.querySelector('main');
const clipped=[];for(const e of main.querySelectorAll('*')){const b=e.getBoundingClientRect(),s=getComputedStyle(e);if(visible(e)&&!e.closest('thead')&&((['hidden','clip'].includes(s.overflowY)&&e.scrollHeight>e.clientHeight+1)||(['hidden','clip'].includes(s.overflowX)&&e.scrollWidth>e.clientWidth+1)))clipped.push({tag:e.tagName,text:e.textContent.slice(0,70)});}
return {width:innerWidth,height:document.documentElement.scrollHeight,scrollWidth:document.documentElement.scrollWidth,exactText:norm(main.textContent)===norm(expected.textContent),exactLinks:JSON.stringify(links(main))===JSON.stringify(links(expected)),exactTables:JSON.stringify(tables(main))===JSON.stringify(tables(expected)),h1:data('main h1'),h2:data('main h2'),modules:main.querySelectorAll('section').length,under44:controls.filter(c=>c.width<44||c.height<44),clipped,gradeSet:data('.grades tbody tr td:first-child'),sources:data('.sources li'),controlCount:controls.length,labels:[...document.querySelectorAll('main td')].map(e=>e.dataset.label),headerHeight:document.querySelector('header').getBoundingClientRect().height,requestColumns:getComputedStyle(document.querySelector('.request-paths ul')).gridTemplateColumns,recordColumns:getComputedStyle(document.querySelector('.optical-methods tbody')).gridTemplateColumns};
},marked.parse(approved));
const actualPng=await page.screenshot({fullPage:true});const formal=inv.approvalCore.find(x=>x.role==='full_page'&&x.viewport.logicalWidth===width);r.rerenderSha256=hash(actualPng);r.formalImageExact=r.rerenderSha256===formal.sha256;
await page.locator('.heroActions a').first().focus();await page.keyboard.press('Tab');r.heroFocus=await page.evaluate(()=>{const e=document.activeElement,s=getComputedStyle(e);return {text:e.textContent,outline:s.outline,offset:s.outlineOffset,color:s.color,background:s.backgroundColor};});
if(width===390)await page.screenshot({path:out+'/APP-PAPER_GATE3_FOCUS_OBSERVATION_390_V0.1.png'});
if(width<1100){
await page.locator('.menuButton').click();r.menuOpen=await page.evaluate(()=>({focus:document.activeElement.textContent,mainInert:document.querySelector('main').inert,footerInert:document.querySelector('footer').inert,locked:document.body.style.overflow,current:document.querySelector('.mobileNav [aria-current]').textContent}));
await page.locator('.mobileNav a').last().focus();await page.keyboard.press('Tab');r.menuLoopForward=await page.locator('.menuButton').evaluate(e=>e===document.activeElement);await page.keyboard.press('Shift+Tab');r.menuLoopBack=await page.locator('.mobileNav a').last().evaluate(e=>e===document.activeElement);await page.keyboard.press('Escape');r.menuEscape=await page.locator('.menuButton').evaluate(e=>e===document.activeElement&&e.getAttribute('aria-expanded')==='false'&&!document.querySelector('main').inert);
await page.locator('.menuButton').click();await page.locator('.mobileNav a[href="/applications/"]').evaluate(e=>e.addEventListener('click',ev=>ev.preventDefault(),{once:true}));await page.locator('.mobileNav a[href="/applications/"]').click();r.menuSelected=await page.locator('.menuButton').evaluate(e=>e===document.activeElement&&e.getAttribute('aria-expanded')==='false'&&!document.querySelector('main').inert&&document.body.style.overflow==='');
await page.locator('.menuButton').click();await page.setViewportSize({width:1440,height});await page.waitForTimeout(80);r.breakpointClosed=await page.locator('.mobileNav').evaluate(e=>e.hidden&&!document.querySelector('main').inert);await page.setViewportSize({width,height});}
await page.locator('#cookie-trigger').click();r.cookieOpen=await page.locator('[data-cookie-close]').evaluate(e=>e===document.activeElement&&document.querySelector('.cookie-layer').open);await page.keyboard.press('Shift+Tab');r.cookieBack=await page.locator('.cookie-layer a').evaluate(e=>e===document.activeElement);await page.keyboard.press('Tab');r.cookieForward=await page.locator('[data-cookie-close]').evaluate(e=>e===document.activeElement);await page.keyboard.press('Escape');await page.waitForTimeout(50);r.cookieEscape=await page.locator('#cookie-trigger').evaluate(e=>e===document.activeElement&&!document.querySelector('.cookie-layer').open);
await page.evaluate(()=>document.documentElement.style.scrollBehavior='auto');r.anchors=[];for(const anchor of ['#define-the-paper-result-and-system','#grades-to-review']){await page.locator('.heroActions a[href="'+anchor+'"]').click();r.anchors.push(await page.evaluate(a=>({target:a,hash:location.hash,top:document.querySelector(a).getBoundingClientRect().top}),anchor));}
if(!r.exactText||!r.exactLinks||!r.exactTables||r.scrollWidth!==width||r.under44.length||r.clipped.length)result.failures.push('content/geometry:'+width);
result.runtime.push(r);await page.close();}
await browser.close();fs.writeFileSync(out+'/APP-PAPER_GATE3_INDEPENDENT_OBSERVATIONS_V0.1.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));})().catch(e=>{console.error(e);process.exitCode=1});
