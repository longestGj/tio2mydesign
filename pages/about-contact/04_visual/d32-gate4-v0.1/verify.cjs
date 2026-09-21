// Gate4 SELF_CHECK delta over the exact independently closed Gate3 semantic source.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const out=__dirname,root=path.resolve(out,'../../../..'),phase=process.argv[2]||'initial',checks=[],measurements=[];
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const file=path.join(out,'ABOUT-001_D32_GATE4.html'),uri=require('url').pathToFileURL(file).href;
function check(id,ok,detail){checks.push({id,status:ok?'PASS':'FAIL',detail});}
function save(){fs.mkdirSync(path.join(out,'diagnostic'),{recursive:true});let r={phase,actor:'/root/about_root_d32',mode:'SELF_CHECK',checks,measurements,sourceSha256:hash(file),time:new Date().toISOString()};fs.writeFileSync(path.join(out,'diagnostic',phase+'.json'),JSON.stringify(r,null,2));console.log(JSON.stringify({phase,total:checks.length,passed:checks.filter(x=>x.status==='PASS').length,failures:checks.filter(x=>x.status==='FAIL')}));process.exitCode=checks.some(x=>x.status==='FAIL')?1:0;}
async function ready(p){await p.evaluate(()=>document.fonts.ready);await p.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));}
(async()=>{
 check('inherited-semantic-source-byte-identical',hash(file)==='33cdf52b03854f2d2fdda502e2c472141a3de0a8cc4ed560e2bd4f2d507d8351');
 for(const n of ['about.js','shared-snapshot.css','shared-snapshot.js','media-projection.css'])check('inherited-unmodified:'+n,hash(path.join(out,n))===hash(path.join(root,'pages/about-contact/04_planning/d32-gate3-v0.2',n)));
 const browser=await chromium.launch(),context=await browser.newContext(),page=await context.newPage();
 const errors=[];page.on('pageerror',e=>errors.push(String(e)));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 for(const width of [1440,1024,768,390,320]){
  await page.setViewportSize({width,height:960});await page.goto(uri);await ready(page);
  const m=await page.evaluate(()=>{
   const vis=e=>e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden';const rect=e=>{let r=e.getBoundingClientRect();return{x:r.x,y:r.y,w:r.width,h:r.height,bottom:r.bottom}};
   const h=document.querySelector('h1'),hs=getComputedStyle(h),shell=document.querySelector('.about-hero'),hero=document.querySelector('.about-hero-layout');
   const targets=[...document.querySelectorAll('a,button')].filter(vis).map(e=>({text:e.textContent.trim(),...rect(e)}));
   const clipped=[...document.querySelectorAll('main p,main h1,main h2,main h3,main dt,main dd')].filter(vis).filter(e=>e.scrollWidth>e.clientWidth+1||(['hidden','clip'].includes(getComputedStyle(e).overflowY)&&e.scrollHeight>e.clientHeight+1)).map(e=>e.textContent);
   const outside=[...document.querySelectorAll('main *')].filter(vis).filter(e=>{let r=e.getBoundingClientRect();return !e.closest('svg,.about-composite')&&(r.left<-.5||r.right>innerWidth+.5)}).map(e=>e.tagName+'.'+e.className);
   const sections=[...document.querySelectorAll('main>section')].map(e=>({id:e.id||'hero',...rect(e)}));
   const css=e=>{let s=getComputedStyle(e);return{color:s.color,background:s.backgroundColor,border:s.borderColor,padding:s.padding,outline:s.outlineColor}};
   return{width:innerWidth,scroll:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight,shell:rect(shell),heroPadding:getComputedStyle(hero).padding,heroColumns:getComputedStyle(hero).gridTemplateColumns,h1:{...rect(h),font:hs.fontSize,weight:hs.fontWeight,tracking:hs.letterSpacing,lines:Math.round(h.getBoundingClientRect().height/parseFloat(hs.lineHeight))},gridColumns:getComputedStyle(document.querySelector('.about-grid')).gridTemplateColumns.split(' ').length,factColumns:getComputedStyle(document.querySelector('.about-facts')).gridTemplateColumns.split(' ').length,targets,clipped,outside,sections,footer:rect(document.querySelector('.footer')),primary:css(document.querySelector('.about-button')),secondary:css(document.querySelector('.about-button.secondary')),fontLoaded:document.fonts.check('16px Inter'),media:[...document.querySelectorAll('.about-crop')].map(e=>({key:e.dataset.assetKey,...rect(e)}))};
  });measurements.push(m);
  check(`${width}:horizontal-bounds`,m.scroll===width&&m.outside.length===0,m.outside);
  check(`${width}:no-text-clipping`,m.clipped.length===0,m.clipped);
  check(`${width}:all-targets44`,m.targets.every(t=>t.w>=44&&t.h>=44),m.targets.filter(t=>t.w<44||t.h<44));
  check(`${width}:loaded-font`,m.fontLoaded);
  check(`${width}:full-flow`,m.sections.every((s,i)=>!i||s.y>=m.sections[i-1].bottom)&&m.footer.y>=m.sections.at(-1).bottom);
  check(`${width}:columns`,m.gridColumns===(width>1100?4:width>=768?2:1),m.gridColumns);
  check(`${width}:facts-columns`,m.factColumns===(width>1100?2:1),m.factColumns);
  check(`${width}:hero-padding`,m.heroPadding===(width>=1024?'56px':width>=768?'40px':'24px'),m.heroPadding);
  check(`${width}:hero-font`,m.h1.font===(width>=1024?'56px':width>=768?'44px':'36px')&&m.h1.weight==='700'&&m.h1.tracking==='normal',m.h1);
  if(width===768)check('768:shared-shell-gutter32',m.shell.x===32,m.shell);
  if(width===390)check('390:approved-natural-four-lines',m.h1.lines===4,m.h1);
  if(width===1024)check('1024:user-approved-natural-four-lines',m.h1.lines===4,m.h1);
  if(width===320)check('320:user-approved-natural-seven-lines',m.h1.lines===7,m.h1);
  check(`${width}:all-media-positive`,m.media.length===10&&m.media.every(x=>x.w>0&&x.h>0),m.media.length);
  check(`${width}:loaded-logo`,await page.locator('img').evaluateAll(xs=>xs.every(e=>e.complete&&e.naturalWidth>0)));
  check(`${width}:current-nav`,await page.locator('.desktopNav [aria-current="page"]').innerText()==='About');
  const primary=page.locator('.about-button').first();await primary.focus();check(`${width}:page-focus-visible`,await primary.evaluate(e=>{let s=getComputedStyle(e);return s.outlineStyle!=='none'&&parseFloat(s.outlineWidth)>=3}));
  await page.mouse.move(0,0);await page.evaluate(()=>document.activeElement.blur());
  if(width<=1100){
   await page.locator('.menuButton').click();check(`${width}:menu-open-first-focus`,await page.locator('.mobileNav').isVisible()&&await page.locator('.mobileNav a').first().evaluate(e=>e===document.activeElement));
   check(`${width}:menu-background-isolated`,await page.locator('main').evaluate(e=>e.inert)&&await page.locator('.footer').evaluate(e=>e.inert));
   await page.locator('.mobileNav a').last().focus();await page.keyboard.press('Tab');check(`${width}:menu-forward-cycle`,await page.locator('.menuButton').evaluate(e=>e===document.activeElement));
   await page.keyboard.press('Shift+Tab');check(`${width}:menu-reverse-cycle`,await page.locator('.mobileNav a').last().evaluate(e=>e===document.activeElement));
   check(`${width}:menu-targets`,await page.locator('.mobileNav a').evaluateAll(xs=>xs.every(e=>{let r=e.getBoundingClientRect();return r.width>=44&&r.height>=44})));
   await page.keyboard.press('Escape');check(`${width}:menu-escape-return`,await page.locator('.mobileNav').isHidden()&&await page.locator('.menuButton').evaluate(e=>e===document.activeElement));
   await page.locator('.menuButton').click();await page.evaluate(()=>document.querySelector('.mobileNav').addEventListener('click',e=>e.preventDefault(),{once:true}));await page.locator('.mobileNav a').nth(6).click();check(`${width}:menu-selection-exit`,await page.locator('.mobileNav').isHidden()&&!(await page.locator('main').evaluate(e=>e.inert)));
   await page.locator('.menuButton').click();await page.setViewportSize({width:1440,height:960});await page.waitForFunction(()=>document.querySelector('.mobileNav').hidden&&!document.querySelector('main').inert);check(`${width}:breakpoint-exit`,await page.locator('.mobileNav').isHidden());await page.setViewportSize({width,height:960});
  }
  await page.locator('#cookie-trigger').click();check(`${width}:cookie-open-focus`,await page.locator('.cookie-layer').isVisible()&&await page.locator('[data-cookie-close]').evaluate(e=>e===document.activeElement));
  check(`${width}:cookie-dialog-bounds`,await page.locator('.cookie-layer').evaluate(e=>{let r=e.getBoundingClientRect();return r.x>=0&&r.y>=0&&r.right<=innerWidth&&r.bottom<=innerHeight}));
  await page.keyboard.press('Shift+Tab');check(`${width}:cookie-reverse-cycle`,await page.locator('.cookie-layer a').evaluate(e=>e===document.activeElement));await page.keyboard.press('Tab');check(`${width}:cookie-forward-cycle`,await page.locator('[data-cookie-close]').evaluate(e=>e===document.activeElement));
  await page.keyboard.press('Escape');check(`${width}:cookie-escape-return`,await page.locator('.cookie-layer').isHidden()&&await page.locator('#cookie-trigger').evaluate(e=>e===document.activeElement));
  await page.locator('#cookie-trigger').click();await page.locator('[data-cookie-close]').click();check(`${width}:cookie-close-return`,await page.locator('#cookie-trigger').evaluate(e=>e===document.activeElement));
 }
 for(const state of ['partial','restricted']){await page.setViewportSize({width:390,height:960});await page.goto(uri+'?evidence='+state);await ready(page);check(`${state}:no-empty-fact-rows`,await page.locator('.about-facts>div').evaluateAll(xs=>xs.every(e=>e.textContent.trim().length>0)));check(`${state}:responsive-no-overflow`,await page.evaluate(()=>document.documentElement.scrollWidth===innerWidth));check(`${state}:natural-footer-flow`,await page.evaluate(()=>document.querySelector('.footer').getBoundingClientRect().top>document.querySelector('#final').getBoundingClientRect().bottom));}
 for(const width of [320,340,341,374,375,390]){await page.setViewportSize({width,height:960});await page.goto(uri);await ready(page);const e=await page.locator('.about-eyebrow').evaluate(e=>{const s=getComputedStyle(e);return{font:s.fontSize,weight:s.fontWeight,tracking:s.letterSpacing,lines:Math.round(e.getBoundingClientRect().height/parseFloat(s.lineHeight))}});check(`${width}:shared-eyebrow-font`,e.font===(width<=340?'11px':'12px'),e);check(`${width}:shared-eyebrow-weight`,e.weight==='700',e);check(`${width}:shared-eyebrow-tracking`,Math.abs(parseFloat(e.tracking)-parseFloat(e.font)*.08)<.001,e);check(`${width}:shared-eyebrow-single-line`,e.lines===1,e);}
 check('no-runtime-errors',errors.length===0,errors);check('no-visitor-cookies',(await context.cookies()).length===0);await browser.close();save();
})().catch(e=>{check('runtime-complete',false,String(e.stack));save()});
