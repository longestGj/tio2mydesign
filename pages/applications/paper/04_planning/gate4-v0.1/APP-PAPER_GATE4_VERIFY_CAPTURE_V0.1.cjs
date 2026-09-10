const fs=require('fs'),path=require('path'),crypto=require('crypto');
const mods='C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/';
const {chromium}=require(mods+'playwright'),{marked}=require(mods+'marked'),sharp=require(mods+'sharp');
const {pathToFileURL}=require('url');
const dir=__dirname,source=path.join(dir,'APP-PAPER_GATE4_COMPLETE_VISUAL_V0.1.html'),mode=process.argv[2]||'initial';
const identity=p=>{const b=fs.readFileSync(p);return {path:p.replaceAll('\\','/'),bytes:b.length,sha256:crypto.createHash('sha256').update(b).digest('hex')}};
const save=(n,v)=>fs.writeFileSync(path.join(dir,n),JSON.stringify(v,null,2));
const result={mode,started_at:new Date().toISOString(),source_identity:identity(source),actual_author:'/root/gate4_paper_execute',renderer:'Microsoft Edge via Playwright',viewports:[],checks:[],images:[],evidence_class:'ACTUAL_RUNTIME'};
const check=(name,pass,observed)=>result.checks.push({name,pass,observed});
const approved=fs.readFileSync(path.join(dir,'../APP-PAPER_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md'),'utf8').match(/BUYER_COPY_START -->([\s\S]*?)<!-- BUYER_COPY_END/)[1];
const shared=require('D:/23MySec/docs/architecture/gate3-shared-consumer-v0.2/render-shared-chrome.cjs').renderSharedChrome({currentPageId:'APP-000',primaryLogoSrc:'file:///D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg',reverseLogoSrc:'file:///D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg'});
const sourceText=fs.readFileSync(source,'utf8');
async function capture(page,vp,state,full=false){
 const file=path.join(dir,mode==='formal'?'approval_core':'diagnostic_support',`APP-PAPER_GATE4_${vp.width}_${state}_${mode.toUpperCase()}_V0.1.png`);
 await page.mouse.move(vp.width-1,0);if(state==='FULL')await page.evaluate(()=>{document.activeElement?.blur();scrollTo(0,0)});
 await page.screenshot({path:file,fullPage:full,animations:'disabled'});
 const m=await sharp(file).metadata();result.images.push({...identity(file),logical_viewport:{width:vp.width,height:vp.height},physical:{width:m.width,height:m.height},dpr:await page.evaluate(()=>devicePixelRatio),state,full_page:full,source_sha256:result.source_identity.sha256});
}
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});result.browser_version=browser.version();
 if(mode==='initial')for(const key of ['header','footer','dialog','style','behavior'])check('shared_payload_'+key,sourceText.includes(shared[key]),'Exact owner-rendered payload embedded');
 if(mode==='formal'){
  const pre=JSON.parse(fs.readFileSync(path.join(dir,'APP-PAPER_GATE4_PREFLIGHT_V0.1.json')));if(pre.status!=='PASS_FOR_FORMAL_RENDER'||pre.source_identity.sha256!==identity(source).sha256)throw Error('Preflight/source mismatch');
  result.source_lock=identity(path.join(dir,'APP-PAPER_GATE4_PREFLIGHT_V0.1.json'));
 }
 for(const vp of [{width:1440,height:1000},{width:768,height:1024},{width:390,height:844}]){
 const page=await browser.newPage({viewport:vp,deviceScaleFactor:1,reducedMotion:'reduce'});await page.goto(pathToFileURL(source).href);await page.evaluate(()=>document.fonts.ready);
 if(mode==='initial'){
 const g=await page.evaluate(()=>{
 const visible=e=>{const r=e.getBoundingClientRect(),s=getComputedStyle(e);return r.width>0&&r.height>0&&s.visibility!=='hidden'&&s.display!=='none'&&!e.closest('dialog:not([open]),[hidden]')};
 const controls=[...document.querySelectorAll('a,button')].filter(visible).map(e=>{const r=e.getBoundingClientRect();return {text:e.textContent.trim(),width:r.width,height:r.height}});
 const rectOverflow=[...document.querySelectorAll('main *')].filter(e=>visible(e)&&!e.closest('thead')).filter(e=>{const r=e.getBoundingClientRect();return r.left<-.5||r.right>innerWidth+.5}).map(e=>e.tagName+':'+e.textContent.slice(0,70));
 const clips=[...document.querySelectorAll('main *')].filter(e=>visible(e)&&!e.closest('thead')).filter(e=>{const s=getComputedStyle(e);return ['hidden','clip'].includes(s.overflowY)&&e.scrollHeight>e.clientHeight+1}).map(e=>e.tagName);
 const cells=sel=>[...document.querySelectorAll(sel+' tbody tr')].map(r=>[...r.querySelectorAll('td')].map(c=>({label:c.dataset.label,text:c.textContent.trim(),display:getComputedStyle(c).display})));
 const links=[...document.querySelectorAll('main a')].map(e=>({text:e.textContent.trim(),href:e.getAttribute('href')}));
 return {width:innerWidth,dpr:devicePixelRatio,scrollWidth:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight,controls,rectOverflow,clips,modules:[...document.querySelectorAll('main section')].map(e=>e.dataset.module),optical:cells('.optical-methods'),evidence:cells('.evidence-roles'),grades:cells('.grades'),sources:document.querySelectorAll('.sources li').length,links,fonts:document.fonts.check('17px Inter'),images:[...document.images].map(e=>({src:e.getAttribute('src'),loaded:e.complete&&e.naturalWidth>0})),headerHeight:document.querySelector('header').getBoundingClientRect().height,grid:getComputedStyle(document.querySelector('.optical-methods tbody')).gridTemplateColumns,requestGrid:getComputedStyle(document.querySelector('.request-paths ul')).gridTemplateColumns,forms:document.querySelectorAll('main form').length,mainImages:document.querySelectorAll('main img').length,sourceClamps:[...document.querySelectorAll('main *')].filter(e=>getComputedStyle(e).webkitLineClamp!=='none').length,minimumBodyFont:Math.min(...[...document.querySelectorAll('main p,main li,main td,main a')].map(e=>parseFloat(getComputedStyle(e).fontSize)))};
 });result.viewports.push(g);
 const content=await page.evaluate(h=>{const e=document.createElement('div');e.innerHTML=h;const n=s=>s.replace(/\s+/g,' ').trim();return {equal:n(e.textContent)===n(document.querySelector('main').textContent),links:[...e.querySelectorAll('a')].map(a=>({text:a.textContent.trim(),href:a.getAttribute('href')}))}},marked.parse(approved));
 check(vp.width+'_copy_exact',content.equal);check(vp.width+'_links_exact',JSON.stringify(content.links)===JSON.stringify(g.links));check(vp.width+'_11_modules',g.modules.join(',')===Array.from({length:11},(_,i)=>'PAPER-'+String(i+1).padStart(2,'0')).join(','));
 check(vp.width+'_geometry',g.scrollWidth===vp.width&&!g.rectOverflow.length&&!g.clips.length,{overflow:g.rectOverflow,clips:g.clips});check(vp.width+'_44px',g.controls.every(c=>c.width>=43.9&&c.height>=43.9),g.controls.filter(c=>c.width<43.9||c.height<43.9));check(vp.width+'_font_assets',g.fonts&&g.images.every(i=>i.loaded));check(vp.width+'_header',g.headerHeight===(vp.width===1440?84:64));
 check(vp.width+'_optical_evidence',g.optical.length===4&&g.evidence.length===4&&[...g.optical,...g.evidence].every(r=>r.length===3&&r.every(c=>c.label&&c.text)));
 check(vp.width+'_grade_order',g.grades.map(r=>r[0].text).join('|')==='M-350|M-2377');check(vp.width+'_source_count',g.sources===7);check(vp.width+'_no_invented_features',!g.forms&&!g.mainImages&&!g.sourceClamps);check(vp.width+'_readable_font',g.minimumBodyFont>=14,g.minimumBodyFont);
 check(vp.width+'_record_conversion',vp.width===1440?g.grid==='none':g.grid.split(' ').length===(vp.width===768?2:1),g.grid);
 const gradeStyle=await page.locator('.grades tbody tr').evaluateAll(rows=>rows.map(r=>{const s=getComputedStyle(r),c=getComputedStyle(r.cells[0]);return [s.backgroundColor,s.borderColor,c.fontSize,c.fontWeight]}));check(vp.width+'_equal_grade_style',JSON.stringify(gradeStyle[0])===JSON.stringify(gradeStyle[1]),gradeStyle);
 }
 await capture(page,vp,'FULL',true);
 if(vp.width!==1440){await page.evaluate(()=>scrollTo(0,0));await page.locator('.menuButton').click();
 if(mode==='initial'){
 const open=await page.evaluate(()=>({open:!document.querySelector('.mobileNav').hidden,focus:document.activeElement.textContent.trim(),inert:document.querySelector('main').inert&&document.querySelector('footer').inert&&document.querySelector('.logoLink').inert&&document.querySelector('.headerRfq').inert,locked:document.body.style.overflow==='hidden'}));check(vp.width+'_menu_open',open.open&&open.focus==='Home'&&open.inert&&open.locked,open);
 await page.locator('.mobileNav a').last().focus();await page.keyboard.press('Tab');check(vp.width+'_menu_forward_loop',await page.locator('.menuButton').evaluate(e=>e===document.activeElement));await page.keyboard.press('Shift+Tab');check(vp.width+'_menu_reverse_loop',await page.locator('.mobileNav a').last().evaluate(e=>e===document.activeElement));
 await page.keyboard.press('Escape');check(vp.width+'_menu_escape_restore',await page.evaluate(()=>document.querySelector('.mobileNav').hidden&&!document.querySelector('main').inert&&document.activeElement===document.querySelector('.menuButton')));await page.locator('.menuButton').click();
 }
 await capture(page,vp,'MENU');
 if(mode==='initial'){await page.locator('.mobileNav a[href="/applications/"]').evaluate(e=>e.addEventListener('click',ev=>ev.preventDefault(),{once:true,capture:true}));await page.locator('.mobileNav a[href="/applications/"]').click();check(vp.width+'_menu_selection_restore',await page.evaluate(()=>document.querySelector('.mobileNav').hidden&&document.activeElement===document.querySelector('.menuButton')&&!document.querySelector('main').inert));await page.locator('.menuButton').click();await page.setViewportSize({width:1440,height:1000});check(vp.width+'_breakpoint_close',await page.locator('.mobileNav').evaluate(e=>e.hidden));await page.setViewportSize(vp);}else await page.keyboard.press('Escape');
 }
 await page.locator('#cookie-trigger').click();
 if(mode==='initial'){
 check(vp.width+'_cookie_open_focus',await page.evaluate(()=>document.querySelector('dialog').open&&document.activeElement===document.querySelector('[data-cookie-close]')));
 await page.keyboard.press('Shift+Tab');check(vp.width+'_cookie_reverse_loop',await page.locator('.cookie-actions a').evaluate(e=>e===document.activeElement));await page.keyboard.press('Tab');check(vp.width+'_cookie_forward_loop',await page.locator('[data-cookie-close]').evaluate(e=>e===document.activeElement));
 const bg=await page.evaluate(()=>{document.querySelector('main a').focus();return document.activeElement===document.querySelector('main a')});check(vp.width+'_cookie_background_blocked',!bg);
 await page.keyboard.press('Escape');check(vp.width+'_cookie_escape_restore',await page.evaluate(()=>!document.querySelector('dialog').open&&document.activeElement===document.querySelector('#cookie-trigger')));await page.locator('#cookie-trigger').click();
 }
 await capture(page,vp,'COOKIE');await page.locator('[data-cookie-close]').click();if(mode==='initial')check(vp.width+'_cookie_close_restore',await page.evaluate(()=>!document.querySelector('dialog').open&&document.activeElement===document.querySelector('#cookie-trigger')));
 if(vp.width===390){
 for(const [href,sel,state] of [['#define-the-paper-result-and-system','.system-definition','DEFINITION_ANCHOR'],['#grades-to-review','.grades','GRADES_ANCHOR']]){await page.locator('.heroActions a[href="'+href+'"]').click();if(mode==='initial')check('390_'+state,await page.evaluate(hash=>location.hash===hash,href));if(state==='GRADES_ANCHOR')await capture(page,vp,state);}
 for(const [sel,state] of [['.optical-methods','OPTICAL_RECORDS'],['.sources','SOURCES']]){await page.locator(sel).evaluate(e=>e.scrollIntoView({block:'start',behavior:'instant'}));await capture(page,vp,state);}
 }
 await page.close();
 }
 if(mode==='initial'){
 const page=await browser.newPage({viewport:{width:720,height:500},reducedMotion:'reduce'});await page.goto(pathToFileURL(source).href);check('200_percent_effective_reflow',await page.evaluate(()=>document.documentElement.scrollWidth===innerWidth));await page.close();
 const nojs=await browser.newPage({viewport:{width:390,height:844},javaScriptEnabled:false});await nojs.goto(pathToFileURL(source).href);check('nojs_core_content',await nojs.locator('main section').count()===11&&await nojs.locator('main a').count()===14);await nojs.close();
 const lum=h=>{const rgb=h.match(/\w\w/g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return .2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2]};
 for(const [fg,bg,min] of [['008078','ffffff',4.5],['008078','f5f8fb',4.5],['334155','f5f8fb',4.5],['5d6b7d','ffffff',4.5],['ffffff','062b5b',4.5],['e2eaf3','062b5b',4.5],['00645e','ffffff',4.5],['ffffff','008078',4.5],['ffffff','00645e',4.5]]){const a=lum(fg),b=lum(bg),ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05);check('contrast_'+fg+'_'+bg,ratio>=min,{ratio,threshold:min});}
 }
 await browser.close();result.completed_at=new Date().toISOString();result.pass=result.checks.every(c=>c.pass);save(`APP-PAPER_GATE4_${mode.toUpperCase()}_OBSERVATIONS_V0.1.json`,result);console.log(JSON.stringify({mode,checks:result.checks.length,failures:result.checks.filter(c=>!c.pass),images:result.images.length,heights:result.viewports.map(v=>[v.width,v.height])}));
})().catch(e=>{console.error(e);process.exit(1)});
