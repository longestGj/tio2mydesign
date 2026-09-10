// Independent read-only review of the frozen planning candidate. No production navigation or submission.
const fs=require('fs'),crypto=require('crypto'),{pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root='D:/23MySec',base=root+'/pages/applications/04_planning/gate3-v1.0',out=__dirname;
const read=p=>fs.readFileSync(p,'utf8'),hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const results={reviewer:'/root/app000_gate3_review',startedAt:new Date().toISOString(),identity:[],runtime:[],visual:[],failures:[]};
const rec=(id,pass,data,type='ACTUAL_RUNTIME')=>{const r={id,pass:!!pass,type,data};results.runtime.push(r);if(!pass)results.failures.push(r)};
const identities=new Map();function scan(o){if(!o||typeof o!=='object')return;if(o.path&&o.sha256&&fs.existsSync(o.path))identities.set(o.path,o);for(const v of Object.values(o))if(v&&typeof v==='object')scan(v)}
for(const name of ['submission-inventory.json','freeze-record.json','input-binding.json','evidence-index.json'])scan(JSON.parse(read(base+'/'+name)));
identities.set(base+'/submission-inventory.json',{path:base+'/submission-inventory.json',sha256:'8e67ae98dc0adbb29dae9f03cdc62689db54a20edd4a5536daa9bd0a497e8fcd'});
for(const [p,o] of identities){const a={path:p,sha256:hash(p),bytes:fs.statSync(p).size};a.pass=a.sha256===o.sha256.toLowerCase()&&(!o.bytes||a.bytes===o.bytes);results.identity.push(a)}
rec('frozen-identities',results.identity.every(r=>r.pass),{count:results.identity.length,failed:results.identity.filter(r=>!r.pass)},'SOURCE_INSPECTION');
const expected={Coatings:['M-350','M-510','M-896','M-996','M-2196','M-895','M-52','M-2377'],Plastics:['M-350','M-510','M-200','M-108','M-210','M-340','M-886','M-2377'],Masterbatch:['M-510','M-200','M-108','M-210','M-340','M-886','M-2377'],'Printing Inks':['M-350','M-510','M-52','M-2377'],Paper:['M-350','M-2377'],'Specialty Materials':['CR-901']};
const B=read(root+'/pages/applications/04_planning/APP-000_GATE2_FULL_BUYER_CLEAN_COPY_V1.0.md').replace(/\r/g,'');
const norm=s=>s.replace(/\s+/g,' ').trim();
let expectedBody=B.slice(B.indexOf('Home › Applications'),B.indexOf('\n---\n')).replace(/<a[^>]*><\/a>/g,'').replace(/\[([^\]]+)\]\([^)]+\)/g,'$1').replace(/^#{1,3} /gm,'').replace(/\*\*/g,'').replace(/^[-\d.] +/gm,'').replace(/ · /g,' ');
expectedBody=norm(expectedBody);
const index=JSON.parse(read(base+'/evidence-index.json'));
for(const asset of index.assets){const buf=fs.readFileSync(asset.path);results.visual.push({path:asset.path,sha256:hash(asset.path),width:buf.readUInt32BE(16),height:buf.readUInt32BE(20),dimensionsPass:buf.readUInt32BE(16)===asset.physical.width&&buf.readUInt32BE(20)===asset.physical.height})}
const {renderSharedChrome}=require(root+'/docs/architecture/gate3-shared-consumer-v0.2/render-shared-chrome.cjs');
const shared=renderSharedChrome({currentPageId:'APP-000',primaryLogoSrc:pathToFileURL(root+'/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg').href,reverseLogoSrc:pathToFileURL(root+'/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg').href});
for(const s of ['index','constrained','mixed','grades-only','apps-only']){const html=read(base+'/'+s+'.html');rec(s+'-owner-assembly', ['header','footer','dialog','style','behavior'].every(k=>html.includes(shared[k])),{tested:['header','footer','dialog','style','behavior']},'SOURCE_INSPECTION')}
function geometry(){
 const vis=e=>e.checkVisibility({checkVisibilityCSS:true})&&(!e.closest('details:not([open])')||e.closest('summary'));
 const all=[...document.querySelectorAll('body *')].filter(vis);
 const controls=all.filter(e=>e.matches('a,button,summary')).map(e=>{let r=e.getBoundingClientRect();return {text:e.innerText.trim(),w:r.width,h:r.height,x:r.x,right:r.right}});
 const overflow=all.filter(e=>{let r=e.getBoundingClientRect();return r.x<-.6||r.right>innerWidth+.6}).map(e=>({tag:e.tagName,cls:e.className,text:e.innerText?.slice(0,80)}));
 const clip=all.filter(e=>{let s=getComputedStyle(e);return (/(hidden|clip)/.test(s.overflowX)||/(hidden|clip)/.test(s.overflowY)||s.textOverflow==='ellipsis')&&(e.scrollWidth>e.clientWidth+1||e.scrollHeight>e.clientHeight+1)}).map(e=>e.outerHTML.slice(0,150));
 return {width:innerWidth,scrollWidth:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight,header:document.querySelector('header').getBoundingClientRect().height,controls,overflow,clip,modules:[...document.querySelectorAll('[data-module]')].map(e=>e.dataset.module),groups:[...document.querySelectorAll('.app-collection')].map(e=>({name:e.querySelector('h3').textContent,grades:[...e.querySelectorAll('li')].map(l=>l.textContent),open:e.querySelector('details').open})),images:[...document.images].map(i=>i.complete&&i.naturalWidth>0),fonts:document.fonts.check('16px Inter')};
}
const geomPass=g=>g.scrollWidth===g.width&&!g.overflow.length&&!g.clip.length&&g.controls.every(c=>c.w>=43.99&&c.h>=43.99)&&g.images.every(Boolean)&&g.fonts;
const scenarioFile=s=>s==='full'?'index':s;
async function load(page,s){await page.goto(pathToFileURL(base+'/'+scenarioFile(s)+'.html').href);await page.evaluate(()=>document.fonts.ready);await page.evaluate(()=>Promise.all([...document.images].map(i=>i.decode())));await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))))}
async function expand(page){for(const d of await page.locator('.app-grades').all())if(!(await d.evaluate(e=>e.open)))await d.locator('summary').press('Enter')}
async function imageMatch(page,s,w,state='default'){
 const asset=index.assets.find(a=>a.scenario===s&&a.logicalViewport.width===w&&a.state===state);if(!asset)return;
 await page.evaluate(()=>scrollTo(0,0));await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
 const buf=await page.screenshot({fullPage:state!=='menu'}),actual=crypto.createHash('sha256').update(buf).digest('hex');
 rec(`render-match-${s}-${w}-${state}`,actual===asset.sha256,{expected:asset.sha256,actual,asset:asset.path},'LOCAL_SIMULATION');
}
(async()=>{const browser=await chromium.launch({headless:true});results.browser=browser.version();
try{
 for(const s of ['full','constrained','mixed','grades-only','apps-only'])for(const w of [1440,768,390]){
  const context=await browser.newContext({viewport:{width:w,height:900}}),p=await context.newPage();await load(p,s);
  const g=await p.evaluate(geometry);rec(`${s}-${w}-default-geometry`,geomPass(g)&&g.header===(w>1100?84:64),g);
  rec(`${s}-${w}-relationships`,g.groups.every(x=>JSON.stringify(x.grades)===JSON.stringify(expected[x.name])),g.groups);
  await imageMatch(p,s,w);
  const defaultOpen=g.groups.map(g=>g.open);rec(`${s}-${w}-initial-disclosure`,defaultOpen.every(x=>x===(w>560)),defaultOpen);
  await expand(p);const e=await p.evaluate(geometry);rec(`${s}-${w}-expanded-geometry`,geomPass(e),e);
  if(s==='full'){const actual=norm(await p.locator('main').innerText());rec(`full-${w}-all-copy`,actual===expectedBody,{expected:expectedBody,actual});}
  const targets=await p.locator('main a[href^="#"]').evaluateAll(es=>es.map(e=>e.getAttribute('href')));
  for(const target of targets){await p.locator(`main a[href="${target}"]`).focus();await p.keyboard.press('Enter');const o=await p.locator(target).evaluate(e=>{const r=e.getBoundingClientRect();return {hash:location.hash,top:r.top,heading:e.querySelector('h2,h3')?.textContent,rfq:[...document.querySelectorAll('.app-rfq')].map(a=>a.getAttribute('href'))}});rec(`${s}-${w}-anchor-${target}`,o.hash===target&&o.top>=0&&o.top<100&&o.rfq.every(a=>a==='/request-a-quote/'),o);}
  const actions=await p.locator('main').evaluate(e=>({gradeLinks:e.querySelectorAll('.app-grade-link').length,gradePlain:e.querySelectorAll('.app-grade-plain').length,plainAction:[...e.querySelectorAll('.app-grade-plain')].some(x=>x.hasAttribute('href')||x.hasAttribute('tabindex')||x.hasAttribute('role')),appCtas:[...e.querySelectorAll('.app-collection-action a')].map(a=>a.textContent),supports:[...e.querySelectorAll('.app-supports h3')].map(x=>x.textContent),rfq:e.querySelectorAll('.app-rfq').length,intro:e.querySelector('.app-intro').textContent,modules:[...e.querySelectorAll('[data-module]')].map(x=>x.dataset.module),schema:JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)}));
  const cfg={full:[30,5,3,2],constrained:[0,0,0,0],mixed:[11,2,1,0],'grades-only':[30,0,3,2],'apps-only':[0,5,3,2]}[s];
  rec(`${s}-${w}-conditional-actions`,actions.gradeLinks===cfg[0]&&actions.gradeLinks+actions.gradePlain===30&&actions.appCtas.length===cfg[1]&&actions.supports.length===cfg[2]&&actions.rfq===cfg[3]&&!actions.plainAction,actions);
  if(s==='full'&&w===390||s==='mixed'&&w===390)await imageMatch(p,s,w,'expanded');
  await context.close();
 }
 for(const w of [768,390]){
  const c=await browser.newContext({viewport:{width:w,height:900}}),p=await c.newPage();await load(p,'full');
  await p.locator('.menuButton').click();if(w===390)await imageMatch(p,'full',w,'menu');
  const opened=await p.evaluate(()=>({focus:document.activeElement.textContent,mainInert:document.querySelector('main').inert,footerInert:document.querySelector('footer').inert,bodyOverflow:document.body.style.overflow,expanded:document.querySelector('.menuButton').getAttribute('aria-expanded')}));
  rec(`menu-${w}-open`,opened.focus==='Home'&&opened.mainInert&&opened.footerInert&&opened.bodyOverflow==='hidden'&&opened.expanded==='true',opened);
  await p.keyboard.press('Shift+Tab');const back=await p.evaluate(()=>document.activeElement.textContent);await p.keyboard.press('Tab');const forward=await p.evaluate(()=>document.activeElement.textContent);rec(`menu-${w}-focus-loop`,back==='Close'&&forward==='Home',{back,forward});
  await p.keyboard.press('Escape');const closed=await p.evaluate(()=>({focus:document.activeElement.className,mainInert:document.querySelector('main').inert,overflow:document.body.style.overflow,hidden:document.querySelector('.mobileNav').hidden}));rec(`menu-${w}-escape`,closed.focus==='menuButton'&&!closed.mainInert&&closed.overflow===''&&closed.hidden,closed);
  await p.evaluate(()=>document.addEventListener('click',e=>{if(e.target.closest('.mobileNav a'))e.preventDefault()},true));await p.locator('.menuButton').click();await p.locator('.mobileNav a').nth(3).click();rec(`menu-${w}-select-close`,await p.locator('.mobileNav').evaluate(e=>e.hidden),{navigation:'preventDefault local simulation'},'LOCAL_SIMULATION');
  await p.locator('.menuButton').click();await p.setViewportSize({width:1440,height:900});await p.waitForFunction(()=>document.querySelector('.mobileNav').hidden);rec(`menu-${w}-desktop-transition`,await p.locator('main').evaluate(e=>!e.inert),{});
  await c.close();
 }
 for(const w of [1440,768,390]){
  const c=await browser.newContext({viewport:{width:w,height:900}}),p=await c.newPage();await load(p,'full');
  await p.locator('#cookie-trigger').click();const open=await p.evaluate(()=>({open:document.querySelector('dialog').open,focus:document.activeElement.textContent,rect:(()=>{let r=document.querySelector('dialog').getBoundingClientRect();return {x:r.x,right:r.right,y:r.y,bottom:r.bottom}})()}));rec(`cookie-${w}-open`,open.open&&open.focus==='Close'&&open.rect.x>=0&&open.rect.right<=w&&open.rect.y>=0&&open.rect.bottom<=900,open);
  await p.keyboard.press('Shift+Tab');const back=await p.evaluate(()=>document.activeElement.textContent);await p.keyboard.press('Tab');const forward=await p.evaluate(()=>document.activeElement.textContent);rec(`cookie-${w}-loop`,back==='Cookie Policy'&&forward==='Close',{back,forward});
  await p.keyboard.press('Escape');rec(`cookie-${w}-escape-return`,await p.evaluate(()=>!document.querySelector('dialog').open&&document.activeElement.id==='cookie-trigger'),{});
  await p.locator('#cookie-trigger').click();await p.locator('[data-cookie-close]').click();rec(`cookie-${w}-close-return`,await p.evaluate(()=>!document.querySelector('dialog').open&&document.activeElement.id==='cookie-trigger'),{});
  await c.close();
 }
 const c=await browser.newContext({viewport:{width:390,height:900}}),p=await c.newPage();await load(p,'full');
 const d=p.locator('.app-grades').first();await d.locator('summary').focus();await p.keyboard.press('Tab');rec('closed-skips-grade-links',await p.evaluate(()=>document.activeElement.textContent==='Explore Coatings'),await p.evaluate(()=>document.activeElement.outerHTML));
 await d.locator('summary').focus();await p.keyboard.press('Enter');const ax=await d.ariaSnapshot();await p.keyboard.press('Tab');rec('open-exposes-links-and-state',ax.includes('expanded')&&await p.evaluate(()=>document.activeElement.textContent==='M-350'),{ax,focus:await p.evaluate(()=>document.activeElement.outerHTML)});
 await p.locator('.app-grades').nth(1).locator('summary').press('Space');rec('independent-multiple-disclosures',await p.locator('.app-grades[open]').count()===2,{});
 await expand(p);await p.evaluate(()=>{for(const el of document.querySelectorAll('main *'))el.style.fontSize=2*parseFloat(getComputedStyle(el).fontSize)+'px'});const enlarged=await p.evaluate(geometry);rec('390-text-200-percent',geomPass(enlarged),enlarged,'LOCAL_SIMULATION');await c.close();
 for(const w of [1440,768,390]){const c=await browser.newContext({viewport:{width:w,height:900},javaScriptEnabled:false}),p=await c.newPage();await load(p,'full');const g=await p.evaluate(geometry);rec(`no-js-${w}`,geomPass(g)&&g.groups.every(x=>x.open&&JSON.stringify(x.grades)===JSON.stringify(expected[x.name])),g);await c.close();}
}finally{await browser.close();results.endedAt=new Date().toISOString();results.finalFrozenUnchanged=results.identity.every(o=>hash(o.path)===o.sha256);fs.writeFileSync(out+'/observations.json',JSON.stringify(results,null,2));console.log(JSON.stringify({identityCount:results.identity.length,checks:results.runtime.length,failures:results.failures.map(x=>({id:x.id,data:x.data})),finalFrozenUnchanged:results.finalFrozenUnchanged,report:out+'/observations.json'}));}
})().catch(e=>{console.error(e);process.exitCode=1});
