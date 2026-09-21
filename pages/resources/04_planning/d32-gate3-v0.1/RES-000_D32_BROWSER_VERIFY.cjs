const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const base=__dirname,formal=process.argv.includes('--formal');
const out=path.join(base,formal?'formal':'diagnostic');fs.mkdirSync(out,{recursive:true});
const sha=f=>crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
const copy=JSON.parse(fs.readFileSync(path.join(base,'RES-000_D32_DERIVED_COPY.json')));
const source='RES-000_D32_GATE3.html';
const checks=[],observations=[];function check(id,pass,actual){checks.push({id,pass:!!pass,actual});}
if(formal){const freeze=JSON.parse(fs.readFileSync(path.join(base,'RES-000_D32_FREEZE.json')));for(const f of freeze.sources){if(sha(f.path)!==f.sha256)throw Error('Freeze mismatch: '+f.path)}if(freeze.preflightStatus!=='PASS_FOR_FORMAL_RENDER')throw Error('Missing preflight');}
(async()=>{
 const browser=await chromium.launch({headless:true});
 for(const [width,height] of [[1440,1000],[768,1024],[390,844]]){
  const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1});const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(pathToFileURL(path.join(base,source)).href);await page.evaluate(()=>document.fonts.ready);
  const d=await page.evaluate(()=>{
   const visible=e=>e.getBoundingClientRect().width>0&&e.getBoundingClientRect().height>0&&getComputedStyle(e).visibility!=='hidden';
   const controls=[...document.querySelectorAll('a,button')].filter(visible).map(e=>({text:e.textContent.trim()||e.getAttribute('aria-label'),width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height}));
   const h=document.querySelector('h1'),hs=getComputedStyle(h),hero=document.querySelector('[data-component="RootPageHero"]'),media=document.querySelector('.res-hero-media');
   const leaves=[...document.querySelectorAll('main h1,main h2,main h3,main p,main a,main li')].map(e=>({text:e.textContent.trim(),visible:visible(e),box:{x:e.getBoundingClientRect().x,width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height},overflow:getComputedStyle(e).overflow,textOverflow:getComputedStyle(e).textOverflow}));
   return {width:innerWidth,scrollWidth:document.documentElement.scrollWidth,header:document.querySelector('header').getBoundingClientRect().height,h1: {size:hs.fontSize,weight:hs.fontWeight,lines:Math.round(h.getBoundingClientRect().height/parseFloat(hs.lineHeight)),spacing:hs.letterSpacing,transform:hs.transform},hero:{width:hero.getBoundingClientRect().width,padding:getComputedStyle(hero).padding,variant:hero.dataset.variant},media:{visible:visible(media),height:media.getBoundingClientRect().height,ariaHidden:media.getAttribute('aria-hidden')},controls,leaves,mainText:document.querySelector('main').innerText,h1Count:document.querySelectorAll('h1').length,images:[...document.images].map(i=>({src:i.src,loaded:i.complete&&i.naturalWidth>0})),bodyHeight:document.documentElement.scrollHeight};
  });
  observations.push(d);check(width+'_no_overflow',d.scrollWidth===width,d.scrollWidth);check(width+'_one_h1',d.h1Count===1);check(width+'_header',d.header===(width>1100?84:64),d.header);
  check(width+'_44_targets',d.controls.every(c=>c.width>=44&&c.height>=44),d.controls.filter(c=>c.width<44||c.height<44));
  check(width+'_copy',copy.hero.every(t=>d.mainText.includes(t))&&copy.paths.flat().every(t=>d.mainText.includes(t))&&copy.evidence.flat().every(t=>d.mainText.includes(t))&&copy.faqs.every(r=>d.mainText.includes(r[1])&&d.mainText.includes(r[2]))&&d.mainText.includes(copy.sectionIntro)&&d.mainText.includes(copy.evidenceIntro));
  check(width+'_visible_leaf_content',d.leaves.every(l=>l.visible&&l.box.x>=0&&l.box.x+l.box.width<=width+1&&l.textOverflow!=='ellipsis'),d.leaves.filter(l=>!l.visible||l.box.x<0||l.box.x+l.box.width>width+1));
  check(width+'_buyer_clean',!/(H0_|H1_|FIXTURE|Gate\s*\d|PROTOTYPE|CURRENT|Coming soon|N\/A|Non-China Titanium Dioxide Supply Guide)/.test(d.mainText));
  check(width+'_font_images',d.images.every(i=>i.loaded)&&await page.evaluate(()=>document.fonts.check('16px Inter')));
  check(width+'_hero_typography',d.h1.size===(width===1440?'56px':width===768?'44px':'36px')&&d.h1.weight==='700'&&(width===390?d.h1.lines===4:d.h1.lines<=3),d.h1);
  check(width+'_media',d.media.visible===(width>900)&&(width>900||d.media.height===0)&&d.media.ariaHidden==='true',d.media);
  check(width+'_H0_no_roots',await page.locator('#featured-resources,#latest-research').count()===0);
  await page.locator('.hero-action').click();check(width+'_anchor',new URL(page.url()).hash==='#research-paths');await page.evaluate(()=>scrollTo(0,0));
  if(!formal){for(let top=0,n=1;top<d.bodyHeight;top+=height-120,n++){await page.evaluate(y=>scrollTo(0,y),top);await page.screenshot({path:path.join(out,`${width}-part-${n}.png`)});}await page.evaluate(()=>scrollTo(0,0));}
  if(formal)await page.screenshot({path:path.join(out,`RES-000_D32_GATE3_${width}.png`),fullPage:true});
  if(width<1101){
   await page.locator('.menuButton').click();check(width+'_menu_first_focus',await page.evaluate(()=>document.activeElement.textContent.trim()==='Home'));check(width+'_menu_background_inert',await page.evaluate(()=>document.querySelector('main').inert&&document.querySelector('footer').inert&&document.body.style.overflow==='hidden'));
   check(width+'_menu_active',await page.locator('.mobileNav [aria-current="page"]').innerText()==='Resources');
   await page.locator('.mobileNav a').last().focus();await page.keyboard.press('Tab');check(width+'_menu_tab_loop',await page.evaluate(()=>document.activeElement.classList.contains('menuButton')));
   await page.keyboard.press('Shift+Tab');check(width+'_menu_reverse_loop',await page.evaluate(()=>document.activeElement.textContent==='Request a Quote'));
   if(formal&&width===390)await page.screenshot({path:path.join(out,'RES-000_D32_GATE3_390_MENU.png')});
   await page.keyboard.press('Escape');check(width+'_menu_escape',await page.evaluate(()=>document.querySelector('.mobileNav').hidden&&!document.querySelector('main').inert&&document.body.style.overflow===''&&document.activeElement.classList.contains('menuButton')));
   await page.locator('.menuButton').click();await page.evaluate(()=>document.querySelector('.mobileNav a[href="/resources/"]').addEventListener('click',e=>e.preventDefault(),{once:true}));await page.locator('.mobileNav a[href="/resources/"]').click();check(width+'_menu_choose_restore',await page.evaluate(()=>document.querySelector('.mobileNav').hidden&&!document.querySelector('main').inert&&document.activeElement.classList.contains('menuButton')));
   await page.locator('.menuButton').click();await page.setViewportSize({width:1440,height});await page.waitForFunction(()=>document.querySelector('.mobileNav').hidden);check(width+'_breakpoint_restore',await page.evaluate(()=>!document.querySelector('main').inert&&document.body.style.overflow===''));await page.setViewportSize({width,height});
  }
  await page.locator('#cookie-trigger').click();check(width+'_cookie_first',await page.evaluate(()=>document.activeElement.hasAttribute('data-cookie-close')));await page.keyboard.press('Shift+Tab');check(width+'_cookie_reverse',await page.evaluate(()=>document.activeElement.getAttribute('href')==='/cookie-policy/'));await page.keyboard.press('Tab');check(width+'_cookie_loop',await page.evaluate(()=>document.activeElement.hasAttribute('data-cookie-close')));await page.keyboard.press('Escape');check(width+'_cookie_return',await page.evaluate(()=>!document.querySelector('dialog').open&&document.activeElement.id==='cookie-trigger'));check(width+'_no_console_error',errors.length===0,errors);
  await page.close();
 }
 // Isolated H2 fixture: proves the approved conditional card's content/relationship, not eligibility.
 for(const width of [1440,390]){const p=await browser.newPage({viewport:{width,height:900}});await p.goto(pathToFileURL(path.join(base,'RES-000_D32_H2_LOCAL_SIMULATION.html')).href);await p.evaluate(()=>document.fonts.ready);check('H2_'+width+'_single',await p.locator('.res-resource').count()===1&&await p.locator('#latest-research').count()===0);check('H2_'+width+'_anchor',await p.locator('.hero-action').getAttribute('href')==='#featured-resources');check('H2_'+width+'_no_overflow',await p.evaluate(()=>document.documentElement.scrollWidth===innerWidth));await p.locator('.res-resource a').focus();check('H2_'+width+'_focus',await p.evaluate(()=>getComputedStyle(document.activeElement).outlineStyle!=='none'));if(formal)await p.screenshot({path:path.join(out,`RES-000_D32_GATE3_H2_${width}_LOCAL_SIMULATION.png`),fullPage:true});await p.close();}
 // H4 long-title, Portuguese agency name, no-thumbnail and 200% reflow-equivalent fixture.
 // 720 CSS px represents a 1440 px browser at 200%; native zoom itself is not asserted.
 for(const width of [1440,768,390,720]){const p=await browser.newPage({viewport:{width,height:900}});await p.goto(pathToFileURL(path.join(base,'RES-000_D32_H4_LOCAL_SIMULATION.html')).href);await p.evaluate(()=>document.fonts.ready);check('H4_'+width+'_metadata_complete',await p.locator('[data-fixture="trade"] dt').count()===8);check('H4_'+width+'_no_overflow',await p.evaluate(()=>document.documentElement.scrollWidth===innerWidth));check('H4_'+width+'_metadata_not_clipped',await p.locator('[data-fixture="trade"]').evaluate(el=>[...el.querySelectorAll('h3,p,dt,dd,a')].every(e=>{const r=e.getBoundingClientRect();return r.width>0&&r.height>0&&r.x>=0&&r.right<=innerWidth+1&&getComputedStyle(e).textOverflow!=='ellipsis'})));check('H4_'+width+'_no_thumbnail',await p.locator('[data-fixture="trade"] img').count()===0);await p.locator('[data-fixture="trade"]').scrollIntoViewIfNeeded();await p.screenshot({path:path.join(out,`RES-000_D32_GATE3_H4_${width}_LOCAL_SIMULATION.png`),fullPage:formal});await p.close();}
 const nojs=await browser.newPage({javaScriptEnabled:false,viewport:{width:390,height:844}});await nojs.goto(pathToFileURL(path.join(base,source)).href);check('nojs_all_faq',await nojs.locator('.res-faq article').count()===5);await nojs.close();
 await browser.close();
 const result={author:'/root/res_root_d32',mode:'AUTHOR_SELF_CHECK',evidenceType:'ACTUAL_RUNTIME for planning source only; H2 LOCAL_SIMULATION',time:new Date().toISOString(),formal,candidateSha256:sha(path.join(base,source)),browser:'Playwright Chromium headless',checks,observations,passed:checks.filter(c=>c.pass).length,failed:checks.filter(c=>!c.pass).length};
 const attempt=fs.readdirSync(out).filter(n=>/^runtime-\d+\.json$/.test(n)).length+1;fs.writeFileSync(path.join(out,`runtime-${attempt}.json`),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({passed:result.passed,failed:result.failed,failures:checks.filter(c=>!c.pass),report:path.join(out,`runtime-${attempt}.json`)},null,2));process.exitCode=result.failed?1:0;
})().catch(e=>{console.error(e.stack);process.exit(2)});
