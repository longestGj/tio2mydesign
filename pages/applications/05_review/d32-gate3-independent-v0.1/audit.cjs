// Independent read-only Gate 3 audit. Writes no candidate or evidence files.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const {execFileSync} = require('child_process');
const {pathToFileURL} = require('url');
const {chromium} = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root = 'D:/23MySec';
const dir = root + '/pages/applications/04_planning/d32-gate3-v0.1';
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const read = p => JSON.parse(fs.readFileSync(p,'utf8'));
const norm = s => s.replace(/\s+/g,' ').trim();
const checks = [];
const check = (name,pass,details) => checks.push({name,pass:!!pass,...(details===undefined?{}:{details})});
const id = p => { const b=fs.readFileSync(p); return {path:p.replaceAll('\\','/'),bytes:b.length,sha256:sha(b)}; };
const freeze = read(dir+'/freeze.json');
const members = freeze.members.map(m=>id(m.path));
check('freeze members',JSON.stringify(members)===JSON.stringify(freeze.members),members.length);
const bundle='sha256:'+sha(JSON.stringify(members));
check('bundle identity',bundle==='sha256:64592411f67a5e69dd0fa18db1195abde26e2b873d037db93985e1fa45430297',bundle);
const inputs=read(dir+'/input-identities.json').inputs;
check('all approved inputs',inputs.every(x=>{const a=id(root+'/'+x.path);return a.sha256===x.sha256&&a.bytes===x.bytes;}),inputs.length);
const assets=read(dir+'/asset-index.json');
check('asset dependencies',assets.dependencies.every(x=>{const a=id(x.path);return a.sha256===x.sha256&&a.bytes===x.bytes;}),assets.dependencies.length);
const images=assets.approval_core.map(x=>{const b=fs.readFileSync(x.path);return {file:path.basename(x.path),sha256:sha(b),width:b.readUInt32BE(16),height:b.readUInt32BE(20)};});
check('formal PNG dimensions',images.every((x,i)=>x.width===assets.approval_core[i].physical_width&&x.height===assets.approval_core[i].physical_height),images);
// Run the author verifier unchanged in a separate process, intercepting its sole
// report write in memory. This preserves every frozen byte while rerunning tests.
const harness = `const fs=require('fs'); const original=fs.writeFileSync; fs.writeFileSync=(p,data)=>{if(String(p).replaceAll('\\\\','/').endsWith('/runtime-observations.json'))console.log('INDEPENDENT_RERUN_RECORD='+data);else throw Error('Unexpected write: '+p);};require(${JSON.stringify(dir+'/verify.cjs')});`;
let authorOutput;
try { authorOutput=execFileSync(process.execPath,['-e',harness],{encoding:'utf8',timeout:120000});check('author validator independent rerun',true); }
catch(e){authorOutput=String(e.stdout)+String(e.stderr);check('author validator independent rerun',false,authorOutput);}
const marker='INDEPENDENT_RERUN_RECORD=';
let authorRuntime;
if(authorOutput.includes(marker)){ const from=authorOutput.indexOf(marker)+marker.length; const end=authorOutput.indexOf('\n{\n  "result"',from);authorRuntime=JSON.parse(authorOutput.slice(from,end)); }
const preflight=execFileSync(process.execPath,[root+'/skills/responsive-wireframe-design/scripts/check-preflight-record.mjs',dir+'/preflight.json'],{encoding:'utf8'});
check('current preflight checker',preflight.includes('PASS_FOR_FORMAL_RENDER'),preflight.trim());
const B=fs.readFileSync(root+'/pages/applications/04_planning/APP-000_GATE2_FULL_BUYER_CLEAN_COPY_V1.0.md','utf8');
const registry=fs.readFileSync(root+'/docs/architecture/PAGE_REGISTRY_V0.2.md','utf8');
const appOwnerIds=['APP-COAT','APP-PLAS','APP-MB','APP-INK','APP-PAPER'];
const expectedAppRoutes=appOwnerIds.map(owner=>({owner,route:registry.split('\n').find(l=>l.startsWith('| '+owner+' |')).split('|')[3].trim().replaceAll('`','')}));
const {renderSharedChrome}=require(root+'/docs/architecture/gate3-shared-consumer-v0.2/render-shared-chrome.cjs');
const chrome=renderSharedChrome({currentPageId:'APP-000',primaryLogoSrc:'../../../../brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg',reverseLogoSrc:'../../../../brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg',fontSrc:'../../../../docs/architecture/gate3-shared-consumer-v0.2/Inter-Variable.ttf'});
const html=fs.readFileSync(dir+'/application-planning.html','utf8');
const sharedParts=['header','footer','dialog','style','behavior'];
check('shared chrome page-neutral generator exact assembly',sharedParts.every(key=>html.includes(chrome[key])),sharedParts);
const body=B.slice(B.indexOf('Home › Applications'),B.indexOf('\n---'));
const approved=norm(body.replace(/<[^>]*>/g,'').replace(/\[([^\]]+)\]\([^)]*\)/g,'$1').replace(/^#{1,6}\s+/gm,'').replace(/^\d+\.\s+/gm,'').replace(/^- /gm,'').replace(/\*\*/g,'').replace(/ · /g,' '));
const observations={reviewer:'/root/app_gate3_independent_review',type:'INDEPENDENT_REVIEW',bundle_id:bundle,source:id(dir+'/application-planning.html'),checks,authorRuntime,viewports:[],scenarios:[],interactions:[],images};
(async()=>{
 const browser=await chromium.launch({headless:true});
 observations.browser=browser.version();
 try{
  for(const width of [1440,768,390]){
   const page=await browser.newPage({viewport:{width,height:1000},deviceScaleFactor:1});
   await page.goto(pathToFileURL(dir+'/application-planning.html').href);await page.evaluate(()=>document.fonts.ready);
   const v=await page.evaluate(()=>{
    const visible=e=>!!(e.getClientRects().length)&&!e.closest('[hidden]');
    const main=document.querySelector('main');const walker=document.createTreeWalker(main,NodeFilter.SHOW_TEXT);const text=[];let n;
    while(n=walker.nextNode())if(visible(n.parentElement)&&!n.parentElement.closest('.eyebrow,.stepNumber'))text.push(n.textContent);
    const extras=[...main.querySelectorAll('.eyebrow')].filter(e=>!e.closest('.rootHero')).map(e=>e.textContent.trim());
    const textClips=[];
    for(const el of main.querySelectorAll('h1,h2,h3,p,a,span')){if(!visible(el))continue;const r=document.createRange();r.selectNodeContents(el);const box=el.getBoundingClientRect();for(const a of r.getClientRects())if(a.left< -0.5||a.right>innerWidth+.5)textClips.push({text:el.textContent.trim(),left:a.left,right:a.right});if(getComputedStyle(el).textOverflow==='ellipsis'||getComputedStyle(el).webkitLineClamp!=='none')textClips.push({text:el.textContent.trim(),clamp:true});}
    const computed=sel=>{const e=document.querySelector(sel),s=getComputedStyle(e),r=e.getBoundingClientRect();return{selector:sel,color:s.color,border:s.borderColor,background:s.backgroundColor,fontSize:s.fontSize,fontWeight:s.fontWeight,width:r.width,height:r.height};};
    return {width:innerWidth,bodyText:text.join(' ').replace(/\s+/g,' ').trim(),extras,textClips,overflow:document.documentElement.scrollWidth-innerWidth,grid:computed('.rootHero'),heading:computed('h1'),colors:['.breadcrumb a','.heroLinks a','[data-grade-link]','.primary'].map(computed),h1Count:document.querySelectorAll('h1').length,modules:[...main.querySelectorAll('[data-module]')].map(e=>e.dataset.module),links:[...main.querySelectorAll('a')].map(e=>({text:e.textContent.trim(),href:e.getAttribute('href')})),footerContact:!!document.querySelector('footer a[href="/contact/"]')};
   });
   check(width+' exact approved body after separately auditing eyebrow/ordinal decoration',v.bodyText===approved,v.bodyText===approved?undefined:{expected:approved,actual:v.bodyText});
   check(width+' no text overflow/clamp',v.overflow===0&&v.textClips.length===0,v.textClips);
   check(width+' no added editorial copy',v.extras.length===0,v.extras);
   check(width+' functional links match approved teal',v.colors.slice(0,3).every(x=>x.color==='rgb(0, 128, 120)'&& (x.selector!=='.heroLinks a'||x.border==='rgb(0, 128, 120)')),v.colors);
   delete v.bodyText;observations.viewports.push(v);
   if(width===1440){const actual=await page.locator('[data-application-action]').evaluateAll(es=>es.map(e=>e.getAttribute('href')));check('application action owner route binding',actual.every((href,i)=>href===expectedAppRoutes[i].route),expectedAppRoutes.map((x,i)=>({...x,actual:actual[i]})));}
   for(const scenario of ['full','grade-only','application-only','none']){
    await page.evaluate(s=>window.appPlanning.setScenario(s),scenario);
    const state=await page.evaluate(()=>{const vis=e=>!!e.getClientRects().length&&!e.closest('[hidden]');return {scenario:window.appPlanning.getScenario(),collections:document.querySelectorAll('[data-collection]').length,relations:[...document.querySelectorAll('[data-collection]')].map(e=>[...e.querySelectorAll('[data-grade]')].map(n=>n.dataset.grade)),appLinks:[...document.querySelectorAll('[data-application-action]')].filter(vis).length,gradeLinks:[...document.querySelectorAll('[data-grade-link]')].filter(vis).length,plain:[...document.querySelectorAll('[data-grade-plain]')].filter(vis).length,steps:document.querySelectorAll('[data-evaluation-step]').length,sentence:document.querySelector('[data-route-sentence]').textContent,hiddenFocusable:[...document.querySelectorAll('[hidden] a,[hidden] button,a[hidden]')].filter(e=>e.getClientRects().length).length,modules:[...document.querySelectorAll('[data-module]')].filter(vis).map(e=>e.dataset.module),overflow:document.documentElement.scrollWidth-innerWidth};});
    observations.scenarios.push({width,...state});check(width+' '+scenario+' preserves core and no hidden focus/overflow',state.collections===6&&state.steps===3&&state.hiddenFocusable===0&&state.overflow===0);
   }
   await page.evaluate(()=>window.appPlanning.setScenario('none'));
   const plain=page.locator('[data-grade-plain]').first();
   await page.mouse.move(0,0);
   const style=()=>plain.evaluate(e=>{const s=getComputedStyle(e);return{tag:e.tagName,tabIndex:e.tabIndex,href:e.getAttribute('href'),color:s.color,background:s.backgroundColor,border:s.borderColor,cursor:s.cursor};});
   const before=await style();await plain.hover();const after=await style();
   observations.interactions.push({width,plainGradeHover:{before,after}});
   check(width+' plain unavailable grade has no hover affordance',before.background===after.background&&before.color===after.color,{before,after});
   await page.reload();
   if(width<1101){
    await page.locator('.menuButton').focus();await page.keyboard.press('Enter');
    const cycle=[];for(let i=0;i<12;i++){cycle.push(await page.evaluate(()=>({text:document.activeElement.textContent.trim(),class:document.activeElement.className,inMenu:!!document.activeElement.closest('.mobileNav')||document.activeElement.classList.contains('menuButton')})));await page.keyboard.press('Tab');}
    check(width+' menu focus remains inside menu/close',cycle.every(x=>x.inMenu),cycle);observations.interactions.push({width,menuFocusCycle:cycle});
    await page.keyboard.press('Escape');
    check(width+' menu restores background and trigger',await page.evaluate(()=>!document.querySelector('main').inert&&document.activeElement===document.querySelector('.menuButton')&&document.body.style.overflow===''));
   }
   for(const selector of ['.actions .primary','.heroLinks a','[data-grade-link]','.applicationAction']){
    await page.locator(selector).first().focus();const f=await page.locator(selector).first().evaluate(e=>{const s=getComputedStyle(e);return{outline:s.outlineStyle,width:s.outlineWidth,color:s.outlineColor};});check(width+' visible keyboard focus '+selector,f.outline!=='none'&&parseFloat(f.width)>=2,f);
   }
   // Anchor actions are real local navigation, without overriding event handlers.
   for(const index of [0,5]){await page.locator('.heroLinks a').nth(index).click();await page.waitForTimeout(650);const a=await page.evaluate(()=>{const target=document.querySelector(location.hash);return{hash:location.hash,top:target.getBoundingClientRect().top,headerBottom:document.querySelector('header').getBoundingClientRect().bottom};});check(width+' local anchor '+index,a.top>=a.headerBottom-1,a);}
   await page.close();
  }
 }finally{await browser.close();}
 check('freeze unchanged after audit',freeze.members.every(m=>id(m.path).sha256===m.sha256));
 observations.checked_at=new Date().toISOString();observations.failed_checks=checks.filter(x=>!x.pass).map(x=>x.name);
 console.log(JSON.stringify(observations,null,2));
})().catch(e=>{console.error(e.stack);process.exitCode=1;});
