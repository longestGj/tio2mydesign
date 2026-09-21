const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const {pathToFileURL} = require('url');
const {chromium} = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const dir = __dirname;
if(fs.existsSync(path.join(dir,'freeze.json')))throw Error('Frozen bundle: use finalize.cjs --verify; do not overwrite observations');
const baseline = path.resolve(dir, '../d32-gate3-v0.2/application-planning.html');
const source = process.argv.includes('--red') ? baseline : path.join(dir,'application-visual.html');
const red = process.argv.includes('--red');
const hash = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const result = {workset_id:'APP-000-D32-G4-V0.1',mode:red?'RED_BASELINE':'INITIAL',source,source_sha256:hash(source),checks:[],viewports:[],operations:[],limitations:['LOCAL_PLANNING_SIMULATION_ONLY; target readiness and receipt are not tested.','Logical viewport/text enlargement/reflow stress tests are not physical devices, assistive technology or native browser UI zoom.']};
function check(name,ok,actual){result.checks.push({name,pass:!!ok,...(actual===undefined?{}:{actual})});}
const visible = el => !!(el.getBoundingClientRect().width && el.getBoundingClientRect().height) && !el.closest('[hidden]');
(async()=>{const browser=await chromium.launch({headless:true}); result.browser=browser.version();
try {
 const before=fs.readFileSync(baseline,'utf8'), after=fs.readFileSync(source,'utf8');
 check('Approved main content, attributes and operation structure preserved byte-for-byte',before.match(/<main[\s\S]*?<\/main>/)[0]===after.match(/<main[\s\S]*?<\/main>/)[0]);
 check('Shared Header/Footer/dialog and scripts unchanged', ['<header','<footer','<dialog'].every(tag=>before.slice(before.indexOf(tag),before.indexOf('</'+tag.slice(1)+'>')+tag.length+3)===after.slice(after.indexOf(tag),after.indexOf('</'+tag.slice(1)+'>')+tag.length+3)) && before.match(/<script>[\s\S]*$/)[0].trimEnd()===after.match(/<script>[\s\S]*$/)[0].trimEnd());
 for(const width of [1440,1024,768,390,320]){
  const p=await browser.newPage({viewport:{width,height:1000},deviceScaleFactor:1,reducedMotion:'reduce'});
  await p.goto(pathToFileURL(source).href); await p.evaluate(()=>document.fonts.ready);
  const m=await p.evaluate(()=>{
   const q=s=>document.querySelector(s),css=s=>getComputedStyle(q(s));
   const shown=e=>!!(e.getBoundingClientRect().width&&e.getBoundingClientRect().height)&&!e.closest('[hidden]');
   const range=document.createRange();range.selectNodeContents(q('h1'));
   const clips=[...document.querySelectorAll('main p,main h1,main h2,main h3,main a')].filter(shown).filter(e=>e.scrollWidth>e.clientWidth+1||(e.scrollHeight>e.clientHeight+1&&['hidden','clip'].includes(getComputedStyle(e).overflowY))).map(e=>e.textContent.trim());
   return {width:innerWidth,height:document.documentElement.scrollHeight,overflow:document.documentElement.scrollWidth-innerWidth,h1:{size:css('h1').fontSize,weight:css('h1').fontWeight,lines:new Set([...range.getClientRects()].map(r=>Math.round(r.y))).size},columns:Object.fromEntries(['.rootHero','.applicationGrid','.steps','.procurementGrid'].map(s=>[s,css(s).gridTemplateColumns.split(' ').length])),hero:{border:css('.rootHero').borderTopWidth,shadow:css('.rootHero').boxShadow,background:css('.rootHero').backgroundColor},radius:css('.gradeChip').borderRadius,cardRadius:css('.applicationCard').borderRadius,finalBackground:css('.finalBand').backgroundColor,finalHeading:css('.finalCta h2').color,clips,fontLoaded:document.fonts.check('16px Inter'),brokenImages:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),smallTargets:[...document.querySelectorAll('a,button')].filter(shown).filter(e=>!e.classList.contains('skip')).map(e=>({text:e.textContent.trim(),width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height})).filter(r=>r.width<44||r.height<44),modules:[...document.querySelectorAll('main [data-module]')].map(e=>e.dataset.module),relations:[...document.querySelectorAll('[data-collection]')].map(e=>e.querySelectorAll('[data-grade]').length),steps:document.querySelectorAll('[data-evaluation-step]').length,faq:document.querySelectorAll('details,[data-faq-item]').length,process:document.querySelectorAll('[data-process-row]').length,links:[...document.querySelectorAll('main a')].filter(shown).filter(e=>!e.classList.contains('primary')).map(e=>getComputedStyle(e).color)};
  }); result.viewports.push(m);
  check(width+' complete module/relationship set',m.modules.length===5&&m.relations.join('/')==='8/8/7/4/2/1'&&m.steps===3&&m.faq===0&&m.process===0);
  check(width+' H1 tokens and three-line maximum',m.h1.size===(width>=1024?'56px':width>=768?'44px':'36px')&&m.h1.weight==='700'&&m.h1.lines<=3,m.h1);
  check(width+' layout columns',m.columns['.rootHero']===(width>=1024?2:1)&&m.columns['.applicationGrid']===(width>=768?2:1)&&m.columns['.steps']===(width>=768?3:1)&&m.columns['.procurementGrid']===(width>=768?3:1),m.columns);
  check(width+' open white hero',m.hero.border==='0px'&&m.hero.shadow==='none'&&['rgba(0, 0, 0, 0)','rgb(255, 255, 255)'].includes(m.hero.background));
  check(width+' restrained action/card shapes and separate final band',m.radius==='6px'&&m.cardRadius==='10px'&&m.finalBackground==='rgb(255, 255, 255)'&&m.finalHeading==='rgb(6, 43, 91)');
  check(width+' no overflow/clipping and 44px controls',m.overflow===0&&m.clips.length===0&&m.smallTargets.length===0,{overflow:m.overflow,clips:m.clips,smallTargets:m.smallTargets});
  check(width+' actual Inter and production Logos',m.fontLoaded&&m.brokenImages.length===0);
  check(width+' functional Teal page links',m.links.every(c=>c==='rgb(0, 128, 120)'));
  for(const state of ['full','grade-only','application-only','none']){
   await p.evaluate(s=>window.appPlanning.setScenario(s),state);
   const s=await p.evaluate(()=>{const v=e=>!!e.getBoundingClientRect().height;return {state:window.appPlanning.getScenario(),grades:[...document.querySelectorAll('[data-grade-link]')].filter(v).length,plain:[...document.querySelectorAll('[data-grade-plain]')].filter(v).length,apps:[...document.querySelectorAll('[data-application-action]')].filter(v).length,procurement:[...document.querySelectorAll('[data-procurement-card]')].filter(v).length,rfq:[...document.querySelectorAll('[data-body-rfq]')].filter(v).length,collections:document.querySelectorAll('[data-collection]').length,sentence:document.querySelector('[data-route-sentence]').textContent,overflow:document.documentElement.scrollWidth-innerWidth,plainNeutral:[...document.querySelectorAll('[data-grade-plain]')].every(e=>e.tagName==='SPAN'&&e.tabIndex===-1&&!e.hasAttribute('href')&&getComputedStyle(e).borderTopWidth==='0px'&&getComputedStyle(e).backgroundColor==='rgba(0, 0, 0, 0)'&&getComputedStyle(e).pointerEvents==='none')};});
   const expect={full:[30,0,5,3,2],'grade-only':[30,0,0,3,2],'application-only':[0,30,5,3,2],none:[0,30,0,0,0]}[state];
   check(width+' '+state+' atomic state',JSON.stringify([s.grades,s.plain,s.apps,s.procurement,s.rfq])===JSON.stringify(expect)&&s.collections===6&&s.overflow===0&&s.plainNeutral,s);
   result.operations.push({width,type:'LOCAL_SIMULATION',...s});
  }
  await p.evaluate(()=>window.appPlanning.setScenario('full'));
  if(width<1101){
   await p.locator('.menuButton').focus();await p.keyboard.press('Enter');
   check(width+' menu focus entry and inert',await p.evaluate(()=>document.activeElement.textContent==='Home'&&document.querySelector('main').inert&&document.querySelector('footer').inert));
   await p.locator('.mobileNav a').last().focus();await p.keyboard.press('Tab');
   check(width+' menu forward trap',await p.locator('.menuButton').evaluate(e=>e===document.activeElement));
   await p.keyboard.press('Shift+Tab');check(width+' menu backward trap',await p.locator('.mobileNav a').last().evaluate(e=>e===document.activeElement));
   await p.keyboard.press('Escape');check(width+' menu Escape returns focus',await p.locator('.menuButton').evaluate(e=>e===document.activeElement&&e.getAttribute('aria-expanded')==='false'));
   await p.locator('.menuButton').click();await p.locator('.menuButton').click();check(width+' menu Close returns focus',await p.locator('.menuButton').evaluate(e=>e===document.activeElement&&!document.querySelector('main').inert));
  }
  await p.locator('#cookie-trigger').click();check(width+' cookie entry',await p.locator('[data-cookie-close]').evaluate(e=>e===document.activeElement));
  await p.keyboard.press('Shift+Tab');check(width+' cookie reverse trap',await p.locator('.cookie-actions a').evaluate(e=>e===document.activeElement));
  await p.keyboard.press('Tab');check(width+' cookie forward trap',await p.locator('[data-cookie-close]').evaluate(e=>e===document.activeElement));
  await p.keyboard.press('Escape');await p.waitForFunction(()=>document.activeElement.id==='cookie-trigger');
  check(width+' cookie Escape return',await p.locator('#cookie-trigger').evaluate(e=>e===document.activeElement));
  await p.locator('#cookie-trigger').click();await p.locator('[data-cookie-close]').click();await p.waitForFunction(()=>document.activeElement.id==='cookie-trigger');
  check(width+' cookie Close return',await p.locator('#cookie-trigger').evaluate(e=>e===document.activeElement));
  await p.locator('.heroLinks a').last().click();check(width+' anchor actual navigation',await p.evaluate(()=>location.hash==='#application-specialty-materials'&&document.querySelector('#application-specialty-materials').getBoundingClientRect().top>=0));
  await p.keyboard.press('Tab');await p.locator('[data-grade-link]').first().focus();const focus=await p.locator('[data-grade-link]').first().evaluate(e=>({visible:e.matches(':focus-visible'),width:getComputedStyle(e).outlineWidth,color:getComputedStyle(e).outlineColor}));
  check(width+' visible focus',focus.visible&&parseFloat(focus.width)>=3&&focus.color==='rgb(0, 128, 120)',focus);
  result.operations.push({width,type:'ACTUAL_RUNTIME',menu:width<1101?'entry/trap/escape/close PASS':'desktop navigation',cookie:'entry/trap/escape/close PASS',anchor:'Specialty Materials PASS',focus});await p.close();
 }
 const p=await browser.newPage({viewport:{width:720,height:900},deviceScaleFactor:2,reducedMotion:'reduce'});await p.goto(pathToFileURL(source).href);await p.evaluate(()=>document.fonts.ready);
 check('200 percent desktop reflow equivalent:720 logical DPR2',await p.evaluate(()=>document.documentElement.scrollWidth===innerWidth));
 await p.setViewportSize({width:390,height:1000});await p.evaluate(()=>{document.querySelectorAll('main p,main h1,main h2,main h3,main a').forEach(e=>{e.style.fontSize=(parseFloat(getComputedStyle(e).fontSize)*2)+'px';});});
 const enlarged=await p.evaluate(()=>({overflow:document.documentElement.scrollWidth-innerWidth,clipped:[...document.querySelectorAll('main p,main h1,main h2,main h3,main a')].filter(e=>e.getBoundingClientRect().height>0&&(e.scrollWidth>e.clientWidth+1||(e.scrollHeight>e.clientHeight+1&&['hidden','clip'].includes(getComputedStyle(e).overflowY)))).map(e=>e.textContent.trim())}));check('200 percent page text enlargement preserves content',enlarged.overflow===0&&enlarged.clipped.length===0,enlarged);await p.close();
 const nojs=await browser.newPage({javaScriptEnabled:false,viewport:{width:390,height:1000}});await nojs.goto(pathToFileURL(source).href);check('No JavaScript core content',await nojs.locator('[data-grade-link]').count()===30&&await nojs.locator('[data-evaluation-step]').count()===3);await nojs.close();
}finally{await browser.close();}
result.failed=result.checks.filter(x=>!x.pass);result.status=result.failed.length?'CHANGES_REQUIRED':'PASS';fs.writeFileSync(path.join(dir,red?'assertions-red.json':'runtime-observations.json'),JSON.stringify(result,null,2));console.log(JSON.stringify({status:result.status,checks:result.checks.length,failures:result.failed},null,2));process.exitCode=result.failed.length?1:0;
})().catch(e=>{console.error(e);process.exit(1)});
