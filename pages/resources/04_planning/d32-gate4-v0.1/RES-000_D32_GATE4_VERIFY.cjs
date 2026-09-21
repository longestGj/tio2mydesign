// One continuous Gate4 self-check. Formal mode only captures locked sources, not a second full test.
const fs=require('fs'),path=require('path'),crypto=require('crypto'),{pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const base=__dirname,old=path.resolve(base,'../d32-gate3-v0.1'),mode=process.argv[2]||'initial';
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const out=path.join(base,mode==='formal'?'formal':'diagnostic');fs.mkdirSync(out,{recursive:true});
const checks=[],observations=[],assets=[];const check=(id,pass,actual)=>checks.push({id,pass:!!pass,actual});
const copy=JSON.parse(fs.readFileSync(path.join(old,'RES-000_D32_DERIVED_COPY.json')));
const widths=[1440,1024,768,390,320],height=w=>w===390?844:w===320?812:w===768?1024:1000;
const source='RES-000_D32_GATE4.html';
async function snap(p,name,fullPage=true){const f=path.join(out,name);await p.screenshot({path:f,fullPage});const png=fs.readFileSync(f);assets.push({path:f.replaceAll('\\','/'),bytes:png.length,sha256:sha(f),width:png.readUInt32BE(16),height:png.readUInt32BE(20),viewport:p.viewportSize(),DPR:1,fullPage});}
async function clean(p){await p.mouse.move(0,0);await p.evaluate(()=>{document.activeElement.blur();scrollTo(0,0)});}
(async()=>{
 if(mode==='formal'){const lock=JSON.parse(fs.readFileSync(path.join(base,'RES-000_D32_GATE4_PREFLIGHT.json')));if(lock.status!=='PASS_FOR_FORMAL_RENDER')throw Error('Preflight absent');for(const r of lock.lockedSources)if(sha(r.path)!==r.sha256)throw Error('Locked source drift '+r.path);}
 const browser=await chromium.launch({headless:true});
 const pageFor=async(w,f)=>{const p=await browser.newPage({viewport:{width:w,height:height(w)},deviceScaleFactor:1});await p.goto(pathToFileURL(path.join(base,f)).href);await p.evaluate(()=>document.fonts.ready);return p};
 if(mode==='samples'){for(const w of [1440,390]){const p=await pageFor(w,source);await snap(p,'4A-hero-'+w+'.png',false);await p.locator('#research-paths').scrollIntoViewIfNeeded();await snap(p,'4A-paths-'+w+'.png',false);await p.close()}await browser.close();fs.writeFileSync(path.join(out,'4A-samples.json'),JSON.stringify({mode,assets},null,2));return;}
 for(const w of widths){
  const p=await pageFor(w,source),errors=[];p.on('pageerror',e=>errors.push(e.message));
  if(mode!=='formal'){
   const o=await p.evaluate(()=>{const rect=e=>{const r=e.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,right:r.right,bottom:r.bottom}},vis=e=>{const r=rect(e);return r.width>0&&r.height>0&&getComputedStyle(e).visibility!=='hidden'},h=document.querySelector('h1'),hs=getComputedStyle(h),hero=document.querySelector('[data-component="RootPageHero"]');return {width:innerWidth,scrollWidth:document.documentElement.scrollWidth,bodyHeight:document.documentElement.scrollHeight,mainText:document.querySelector('main').innerText,mainChildren:[...document.querySelector('main').children].map(e=>e.id||e.className),h1Count:document.querySelectorAll('h1').length,h1:{...rect(h),font:hs.fontSize,weight:hs.fontWeight,lines:Math.round(h.getBoundingClientRect().height/parseFloat(hs.lineHeight)),transform:hs.transform,spacing:hs.letterSpacing},hero:{...rect(hero),padding:getComputedStyle(hero).padding},action:rect(document.querySelector('.hero-action')),media:rect(document.querySelector('.res-hero-media')),sections:[...document.querySelectorAll('.res-section')].map(e=>({paddingTop:getComputedStyle(e).paddingTop,paddingBottom:getComputedStyle(e).paddingBottom,gutter:e.firstElementChild.getBoundingClientRect().x})),columns:[...document.querySelectorAll('.res-grid')].map(e=>getComputedStyle(e).gridTemplateColumns),controls:[...document.querySelectorAll('a,button')].filter(vis).map(e=>({text:e.textContent.trim()||e.ariaLabel,...rect(e)})),leaves:[...document.querySelectorAll('main h1,main h2,main h3,main p,main a,main li')].map(e=>({text:e.textContent,...rect(e),visible:vis(e),overflow:getComputedStyle(e).overflow,textOverflow:getComputedStyle(e).textOverflow})),images:[...document.images].map(e=>({loaded:e.complete&&e.naturalWidth>0,src:e.src})),fonts:document.fonts.check('16px Inter'),header:rect(document.querySelector('header')),footer:rect(document.querySelector('footer'))}});
   observations.push(o);
   check(w+'_full_copy',copy.hero.every(t=>o.mainText.includes(t))&&copy.paths.flat().every(t=>o.mainText.includes(t))&&copy.evidence.flat().every(t=>o.mainText.includes(t))&&copy.faqs.every(r=>o.mainText.includes(r[1])&&o.mainText.includes(r[2]))&&o.mainText.includes(copy.sectionIntro)&&o.mainText.includes(copy.evidenceIntro));
   check(w+'_one_h1',o.h1Count===1);check(w+'_no_overflow',o.scrollWidth===w);
   check(w+'_complete_visible_no_ellipsis',o.leaves.every(e=>e.visible&&e.x>=0&&e.right<=w+1&&e.textOverflow!=='ellipsis'),o.leaves.filter(e=>!e.visible||e.x<0||e.right>w+1));
   check(w+'_44_targets',o.controls.every(e=>e.width>=44&&e.height>=44),o.controls.filter(e=>e.width<44||e.height<44));
   check(w+'_font_images',o.fonts&&o.images.every(e=>e.loaded));
   check(w+'_header_owner',o.header.height===(w>1100?84:64));
   check(w+'_CARRY01',o.sections.every(e=>e.paddingTop==='84px'&&e.paddingBottom==='76px'));
   if(w<=390)check(w+'_CARRY02',o.sections.every(e=>e.gutter===16)&&o.hero.x===20&&o.hero.padding==='24px');
   check(w+'_H0_atomic_zero',await p.locator('#featured-resources,#latest-research').count()===0&&!(await p.content()).includes('ItemList'));
   check(w+'_buyer_clean',!/(H0_|H1_|FIXTURE|Gate\s*\d|PROTOTYPE|CURRENT|Coming soon|N\/A|Non-China Titanium Dioxide Supply Guide)/.test(o.mainText));
   const expectedLines={1440:3,1024:4,768:2,390:4,320:5};
   check(w+'_unchanged_Hero_tokens',o.h1.font===(w>=1024?'56px':w>=768?'44px':'36px')&&o.h1.weight==='700'&&o.h1.lines===expectedLines[w]&&o.h1.transform==='none',o.h1);
   check(w+'_media_zero_space',w>900?o.media.height>0:o.media.height===0);
   check(w+'_CTA_initial_visible',o.action.bottom<=height(w)&&o.action.y>0,o.action);
   check(w+'_FAQ_always_visible',await p.locator('.res-faq article').count()===5&&await p.locator('.res-faq article p:visible').count()===5);
   await p.locator('.hero-action').click();check(w+'_H0_anchor',new URL(p.url()).hash==='#research-paths');await clean(p);
   if(w<=1100){
    await p.locator('.menuButton').click();check(w+'_menu_enter',await p.evaluate(()=>document.activeElement.textContent.trim()==='Home'&&document.querySelector('main').inert&&document.querySelector('footer').inert&&document.body.style.overflow==='hidden'));
    check(w+'_menu_current',await p.locator('.mobileNav [aria-current="page"]').innerText()==='Resources');
    await p.locator('.mobileNav a').last().focus();await p.keyboard.press('Tab');check(w+'_menu_forward_loop',await p.evaluate(()=>document.activeElement.classList.contains('menuButton')));await p.keyboard.press('Shift+Tab');check(w+'_menu_reverse_loop',await p.evaluate(()=>document.activeElement.textContent==='Request a Quote'));
    await p.keyboard.press('Escape');check(w+'_menu_escape_restore',await p.evaluate(()=>document.querySelector('.mobileNav').hidden&&!document.querySelector('main').inert&&document.body.style.overflow===''&&document.activeElement.classList.contains('menuButton')));
    await p.locator('.menuButton').click();await p.evaluate(()=>document.querySelector('.mobileNav a[href="/resources/"]').addEventListener('click',e=>e.preventDefault(),{once:true}));await p.locator('.mobileNav a[href="/resources/"]').click();check(w+'_menu_select_restore',await p.evaluate(()=>document.querySelector('.mobileNav').hidden&&!document.querySelector('main').inert&&document.activeElement.classList.contains('menuButton')));
    await p.locator('.menuButton').click();await p.setViewportSize({width:1440,height:height(w)});await p.waitForFunction(()=>document.querySelector('.mobileNav').hidden);check(w+'_menu_breakpoint_restore',await p.evaluate(()=>!document.querySelector('main').inert&&document.body.style.overflow===''));await p.setViewportSize({width:w,height:height(w)});
   }
   await p.locator('#cookie-trigger').click();check(w+'_cookie_first',await p.evaluate(()=>document.activeElement.hasAttribute('data-cookie-close')));await p.keyboard.press('Shift+Tab');check(w+'_cookie_reverse',await p.evaluate(()=>document.activeElement.getAttribute('href')==='/cookie-policy/'));await p.keyboard.press('Tab');check(w+'_cookie_forward',await p.evaluate(()=>document.activeElement.hasAttribute('data-cookie-close')));await p.keyboard.press('Escape');check(w+'_cookie_restore',await p.evaluate(()=>!document.querySelector('dialog').open&&document.activeElement.id==='cookie-trigger'));
   check(w+'_error_free',errors.length===0,errors);await clean(p);
   // Readable continuous frames support inspection, not duplicate formal approval assets.
   for(let y=0,n=1;y<o.bodyHeight;y+=height(w)-140,n++){await p.evaluate(t=>scrollTo(0,t),y);await snap(p,`H0-${w}-part-${n}.png`,false)}
  }else{await clean(p);await snap(p,`RES-000_D32_GATE4_H0_${w}.png`);if(w===390||w===320){await p.locator('.menuButton').click();await snap(p,`RES-000_D32_GATE4_MENU_${w}.png`,false);await p.keyboard.press('Escape')}if(w===390){await p.locator('#cookie-trigger').click();await snap(p,'RES-000_D32_GATE4_COOKIE_390.png',false);await p.keyboard.press('Escape')}}
  await p.close();
 }
 for(const state of ['H2','H4'])for(const w of (state==='H2'?[1440,390,320]:widths)){
  const p=await pageFor(w,`RES-000_D32_${state}_LOCAL_SIMULATION.html`);
  if(mode!=='formal'){
   check(`${state}_${w}_banner`,(await p.locator('.res-fixture-banner').innerText()).includes('LOCAL SIMULATION'));
   check(`${state}_${w}_overflow`,await p.evaluate(()=>document.documentElement.scrollWidth===innerWidth));
   check(`${state}_${w}_conditional_anchor`,await p.locator('.hero-action').getAttribute('href')==='#featured-resources');
   check(`${state}_${w}_conditional_sections_spacing`,await p.locator('.res-section').evaluateAll(a=>a.every(e=>getComputedStyle(e).paddingTop==='84px'&&getComputedStyle(e).paddingBottom==='76px')));
   check(`${state}_${w}_leaf_geometry`,await p.locator('.res-resource h3,.res-resource p,.res-resource dt,.res-resource dd,.res-resource a,.res-featured li').evaluateAll(a=>a.every(e=>{const r=e.getBoundingClientRect();return r.width>0&&r.height>0&&r.x>=0&&r.right<=innerWidth+1&&getComputedStyle(e).textOverflow!=='ellipsis'})));
   await p.locator('.res-resource a').first().focus();check(`${state}_${w}_focus_visible`,await p.evaluate(()=>getComputedStyle(document.activeElement).outlineStyle!=='none'));
   if(state==='H2')check(`${state}_${w}_one_no_latest`,await p.locator('.res-resource').count()===1&&await p.locator('#latest-research').count()===0);
   else check(`${state}_${w}_metadata_pairs_no_image`,await p.locator('[data-fixture="trade"] dt').count()===8&&await p.locator('[data-fixture="trade"] dd').count()===8&&await p.locator('[data-fixture="trade"] img').count()===0);
   await p.locator(state==='H2'?'#featured-resources':'[data-fixture="trade"]').scrollIntoViewIfNeeded();await snap(p,`${state}-${w}-pressure.png`,false);
  }else{await clean(p);await snap(p,`RES-000_D32_GATE4_${state}_${w}_LOCAL_SIMULATION.png`)}await p.close();
 }
 if(mode!=='formal'){
  const nojs=await browser.newPage({javaScriptEnabled:false,viewport:{width:320,height:812}});await nojs.goto(pathToFileURL(path.join(base,source)).href);check('nojs_FAQ_all_five',await nojs.locator('.res-faq article p:visible').count()===5);await nojs.close();
  for(const f of [source,'RES-000_D32_H2_LOCAL_SIMULATION.html','RES-000_D32_H4_LOCAL_SIMULATION.html']){const oldFile=f===source?'RES-000_D32_GATE3.html':f;check('unchanged_full_markup_'+f,fs.readFileSync(path.join(base,f),'utf8').replace('RES-000_D32_GATE4.css','RES-000_D32_GATE3.css')===fs.readFileSync(path.join(old,oldFile),'utf8'))}
 }
 await browser.close();const r={workset_id:'RES-000-D32-G4-001',author:'/root/res_root_d32',mode,evidenceTypes:['ACTUAL_RUNTIME','SOURCE_INSPECTION','LOCAL_SIMULATION'],source:sha(path.join(base,source)),browser:'Playwright Chromium headless',DPR:1,checks,observations,assets,passed:checks.filter(c=>c.pass).length,failed:checks.filter(c=>!c.pass).length};
 const file=path.join(out,mode==='formal'?'capture.json':'self-check.json');if(fs.existsSync(file))throw Error('Result exists: keep history and choose additive result version');fs.writeFileSync(file,JSON.stringify(r,null,2)+'\n');console.log(JSON.stringify({mode,passed:r.passed,failed:r.failed,failures:checks.filter(c=>!c.pass),assets:assets.length,file},null,2));process.exitCode=r.failed?1:0;
})().catch(e=>{console.error(e.stack);process.exit(2)});
