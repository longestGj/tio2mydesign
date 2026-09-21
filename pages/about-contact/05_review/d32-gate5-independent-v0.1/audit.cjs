// Independent ABOUT Gate5 audit. Candidate and dependencies are read-only.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root='D:/23MySec',base=root+'/pages/about-contact/04_visual/d32-gate4-v0.1',old=root+'/pages/about-contact/04_planning/d32-gate3-v0.2';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')),hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const digest=es=>crypto.createHash('sha256').update(es.map(e=>e.relativePath+' '+e.sha256+'\n').sort().join('')).digest('hex');
const checks=[],measurements=[],states=[],errors=[],network=[];
function check(id,ok,details){checks.push({id,status:ok?'PASS':'FAIL',details});}
function entryCheck(prefix,e){check(prefix+e.relativePath,fs.existsSync(e.path)&&hash(e.path)===e.sha256&&fs.statSync(e.path).size===e.bytes);}
const b=read(base+'/bundle.json'),f=read(base+'/freeze.json'),l=read(base+'/source-lock.json'),ei=read(base+'/evidence-index.json');
for(const e of f.core)entryCheck('core:',e);
for(const e of l.dependencies)entryCheck('dependency:',e);
entryCheck('freeze:',b.freeze);entryCheck('evidence:',b.evidenceIndex);
check('aggregate:bundle',digest(f.core)===b.bundleSha256&&b.bundleSha256==='bde5d8c53d582f8ab181629baf0de5e19190e94adc9ad42ac9b0e18d4e8952d9');
check('aggregate:source',digest(l.sources)===b.sourceIdentity&&b.sourceIdentity==='bc128e2e690174cf6dced1389e4572d5d1ab6ec2ed82b0bfcec1ed3c2c84bb0b');
for(const e of ei.images){const p=fs.readFileSync(e.path);check('PNG:'+path.basename(e.path),p.readUInt32BE(16)===e.width&&p.readUInt32BE(20)===e.height&&e.width===e.viewport.width*e.dpr&&e.dpr===1&&e.browser==='151.0.7922.34');}
check('formal-count',ei.images.length===15);
const oldb=read(old+'/bundle-manifest.json');for(const e of oldb.approvalCore)entryCheck('inherited-core:',e);
check('inherited-aggregate',digest(oldb.approvalCore)==='9cf732bd510f78e0f74edd7b6725baad9391fdb609e17a1a009e79baa3925883');
for(const n of ['about.js','shared-snapshot.css','shared-snapshot.js','media-projection.css'])check('unchanged:'+n,hash(base+'/'+n)===hash(old+'/'+n));
check('HTML-unchanged',hash(base+'/ABOUT-001_D32_GATE4.html')==='33cdf52b03854f2d2fdda502e2c472141a3de0a8cc4ed560e2bd4f2d507d8351');
for(const n of ['FULL_1440','FULL_390','PARTIAL_390','RESTRICTED_390'])check('inherited-pixels:'+n,hash(base+'/formal/ABOUT-001_D32_GATE4_'+n+'.png')===hash(old+'/formal/ABOUT-001_D32_GATE3_'+n+'.png'));
function luminance(rgb){return rgb.map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0)}
function contrast(a,b){const x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)}
function color(s){return s.match(/[\d.]+/g).slice(0,3).map(Number)}
async function ready(p){await p.evaluate(()=>document.fonts.ready);await p.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));}
async function focus(p,sel){return p.locator(sel).evaluate(e=>e===document.activeElement)}
(async()=>{
 const browser=await chromium.launch(),context=await browser.newContext({deviceScaleFactor:1}),p=await context.newPage();
 p.on('pageerror',e=>errors.push(String(e)));p.on('console',m=>{if(m.type()==='error')errors.push(m.text())});p.on('request',r=>{if(/^https?:/.test(r.url()))network.push(r.url())});
 const uri=require('url').pathToFileURL(base+'/ABOUT-001_D32_GATE4.html').href;
 for(const w of [1440,1024,768,390,320]){
  await p.setViewportSize({width:w,height:960});await p.goto(uri);await ready(p);
  const m=await p.evaluate(()=>{
   const rect=e=>{const r=e.getBoundingClientRect();return{x:r.x,y:r.y,w:r.width,h:r.height,right:r.right,bottom:r.bottom}},visible=e=>e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden';
   const h=document.querySelector('h1'),s=getComputedStyle(h),hero=document.querySelector('.about-hero-layout');
   return {width:innerWidth,dpr:devicePixelRatio,scroll:document.documentElement.scrollWidth,fontLoaded:document.fonts.check('16px Inter'),h1:{text:h.innerText,lines:Math.round(h.offsetHeight/parseFloat(s.lineHeight)),font:s.fontSize,weight:s.fontWeight,tracking:s.letterSpacing},heroPadding:getComputedStyle(hero).padding,gutter:document.querySelector('main').getBoundingClientRect().x,variant:document.querySelector('[data-component]').dataset.variant,ownership:document.querySelector('[data-component]').dataset.ownership,
    h2:[...document.querySelectorAll('main h2')].map(e=>e.innerText),allText:document.querySelector('main').innerText,links:[...document.querySelectorAll('a')].map(e=>({text:e.textContent.trim(),href:e.getAttribute('href')})),
    columns:[...document.querySelectorAll('.about-grid,.about-facts')].map(e=>({class:e.className,columns:getComputedStyle(e).gridTemplateColumns.split(' ').length})),
    clips:[...document.querySelectorAll('main p,main h1,main h2,main h3,main dt,main dd')].filter(visible).filter(e=>e.scrollWidth>e.clientWidth+1||(['hidden','clip'].includes(getComputedStyle(e).overflowY)&&e.scrollHeight>e.clientHeight+1)).map(e=>e.innerText),
    outside:[...document.querySelectorAll('main *')].filter(visible).filter(e=>!e.closest('svg,.about-composite')).filter(e=>{let r=rect(e);return r.x<-.5||r.right>innerWidth+.5}).map(e=>e.className),
    targets:[...document.querySelectorAll('a,button')].filter(visible).map(e=>({text:e.textContent.trim(),...rect(e)})),sections:[...document.querySelectorAll('main>section')].map(e=>({id:e.id,...rect(e)})),footer:rect(document.querySelector('footer')),
    media:[...document.querySelectorAll('.about-crop')].map(e=>({key:e.dataset.assetKey,...rect(e)})),logos:[...document.querySelectorAll('img')].every(e=>e.complete&&e.naturalWidth>0),metadata:{title:document.title,description:document.querySelector('meta[name="description"]').content,canonical:document.querySelector('[rel="canonical"]').getAttribute('href'),schema:document.querySelectorAll('script[type="application/ld+json"]').length}};
  });measurements.push(m);
  check(w+':overflow',m.scroll===w&&m.outside.length===0,m.outside);check(w+':clipping',m.clips.length===0,m.clips);
  check(w+':hit-targets',m.targets.every(x=>x.w>=44&&x.h>=44),m.targets.filter(x=>x.w<44||x.h<44));
  check(w+':font-media',m.fontLoaded&&m.logos&&m.media.length===10&&m.media.every(x=>x.w>0&&x.h>0));
  check(w+':complete-order',JSON.stringify(m.h2)===JSON.stringify(['Who We Are','Why Malaysia Matters','What We Do','Markets We Serve','Applications We Support','How We Work','Documentation & Transparency','Company Facts','Discuss Your Titanium Dioxide Requirements']));
  check(w+':content-no-disclosure',!/(company.provided|source disclosure|review disclosure|pending approval)/i.test(m.allText));
  check(w+':approved-full-title',m.h1.text==='Malaysia-Based Titanium Dioxide Supply for Global Markets');
  check(w+':H1',m.h1.lines===({1440:3,1024:4,768:3,390:4,320:7})[w]&&m.h1.font===(w>=1024?'56px':w>=768?'44px':'36px')&&m.h1.weight==='700'&&m.h1.tracking==='normal',m.h1);
  check(w+':shared-hero',m.heroPadding===(w>=1024?'56px':w>=768?'40px':'24px')&&m.variant==='corporate-light'&&m.ownership==='PROTOTYPE_ONLY');
  check(w+':gutter',m.gutter===({1440:120,1024:24,768:32,390:20,320:20})[w],m.gutter);
  check(w+':body-columns',m.columns.every(x=>x.columns===(x.class.includes('facts')?(w>1100?2:1):x.class.includes('documents')?(w>1100?3:w>=768?2:1):(w>1100?4:w>=768?2:1))),m.columns);
  check(w+':natural-flow',m.sections.every((s,i)=>!i||s.y>=m.sections[i-1].bottom)&&m.footer.y>=m.sections.at(-1).bottom);
  check(w+':all-route-instances',m.links.every(x=>['/','/markets/','/products/','/applications/','/documents/','/resources/','/about/','/request-a-quote/','/contact/','/request-documents/','/privacy-policy/','/ms/privacy-policy/','/cookie-policy/'].includes(x.href)));
  check(w+':active-nav',await p.locator('.desktopNav [aria-current="page"]').textContent()==='About');
  for(const sel of ['.about-actions .about-button:not(.secondary)','.about-actions .secondary','#who a','#final .about-button:not(.secondary)']){
   const el=p.locator(sel).first();await el.hover();let c=await el.evaluate(e=>{const s=getComputedStyle(e);return{color:s.color,bg:s.backgroundColor}});check(w+':hover-contrast:'+sel,contrast(color(c.color),c.bg==='rgba(0, 0, 0, 0)'?[255,255,255]:color(c.bg))>=4.5,c);
   await el.focus();const outline=await el.evaluate(e=>{const s=getComputedStyle(e);return {width:s.outlineWidth,style:s.outlineStyle,color:s.outlineColor}});check(w+':focus-visible:'+sel,parseFloat(outline.width)>=3&&outline.style!=='none',outline);
  }
  if(w<=1100){
   await p.locator('.menuButton').click();check(w+':menu-entry',await p.locator('.mobileNav').isVisible()&&await focus(p,'.mobileNav a:first-child'));
   check(w+':menu-isolation',await p.evaluate(()=>document.querySelector('main').inert&&document.querySelector('footer').inert&&document.body.style.overflow==='hidden'));
   await p.locator('.mobileNav a').last().focus();await p.keyboard.press('Tab');check(w+':menu-forward',await focus(p,'.menuButton'));await p.keyboard.press('Shift+Tab');check(w+':menu-reverse',await focus(p,'.mobileNav a:last-child'));
   await p.keyboard.press('Escape');check(w+':menu-escape',await p.locator('.mobileNav').isHidden()&&await focus(p,'.menuButton'));
   await p.locator('.menuButton').click();await p.evaluate(()=>document.querySelector('.mobileNav').addEventListener('click',e=>e.preventDefault(),{once:true}));await p.locator('.mobileNav [aria-current]').click();check(w+':menu-selection-local-interception',await p.locator('.mobileNav').isHidden()&&await p.locator('main').evaluate(e=>!e.inert));
   await p.locator('.menuButton').click();await p.setViewportSize({width:1440,height:960});await p.waitForFunction(()=>document.querySelector('.mobileNav').hidden&&!document.querySelector('main').inert);check(w+':menu-resize-release',await p.evaluate(()=>document.body.style.overflow===''));await p.setViewportSize({width:w,height:960});await ready(p);
  }
  await p.locator('#cookie-trigger').click();check(w+':cookie-entry',await p.locator('.cookie-layer').isVisible()&&await focus(p,'[data-cookie-close]'));
  check(w+':cookie-bounds',await p.locator('.cookie-layer').evaluate(e=>{const r=e.getBoundingClientRect();return r.left>=0&&r.top>=0&&r.right<=innerWidth&&r.bottom<=innerHeight&&e.matches(':modal')}));
  await p.keyboard.press('Shift+Tab');check(w+':cookie-reverse',await focus(p,'.cookie-layer a'));await p.keyboard.press('Tab');check(w+':cookie-forward',await focus(p,'[data-cookie-close]'));
  await p.keyboard.press('Escape');check(w+':cookie-Escape-return',await p.locator('.cookie-layer').isHidden()&&await focus(p,'#cookie-trigger'));
  await p.locator('#cookie-trigger').click();await p.locator('[data-cookie-close]').click();check(w+':cookie-button-return',await p.locator('.cookie-layer').isHidden()&&await focus(p,'#cookie-trigger'));
 }
 for(const w of [320,340,341,374,375,390]){
  await p.setViewportSize({width:w,height:960});await p.goto(uri);await ready(p);const e=await p.locator('.about-eyebrow').evaluate(e=>{const s=getComputedStyle(e),r=document.createRange();r.selectNodeContents(e);return {text:e.innerText,font:s.fontSize,weight:s.fontWeight,tracking:s.letterSpacing,color:s.color,width:e.clientWidth,rects:[...r.getClientRects()].map(r=>({x:r.x,right:r.right,y:r.y})),left:e.getBoundingClientRect().left,right:e.getBoundingClientRect().right}});states.push({width:w,eyebrow:e});
  check(w+':eyebrow-token',e.font===(w<=340?'11px':'12px')&&e.weight==='700'&&Math.abs(parseFloat(e.tracking)-parseFloat(e.font)*.08)<.001,e);
  check(w+':eyebrow-complete-singleline',e.text==='ABOUT IKHLAS TITANIUM'&&new Set(e.rects.map(x=>x.y)).size===1&&e.rects.every(x=>x.x>=e.left-.5&&x.right<=e.right+.5)&&e.color==='rgb(0, 128, 120)',e);
 }
 for(const state of ['partial','restricted']){
  await p.setViewportSize({width:390,height:960});await p.goto(uri+'?evidence='+state);await ready(p);const m=await p.evaluate(()=>({scales:document.querySelectorAll('[data-scale]').length,claims:document.querySelectorAll('.claim').length,desc:!!document.querySelector('meta[name="description"]'),title:document.title,rows:[...document.querySelectorAll('.about-facts>div')].map(e=>e.innerText),scroll:document.documentElement.scrollWidth,footer:document.querySelector('footer').getBoundingClientRect().top,last:document.querySelector('#final').getBoundingClientRect().bottom}));states.push({state,m});
  check(state+':atomic-omission',m.scales===0&&(state!=='restricted'||m.claims===0&&!m.desc&&m.title==='About TiO2 Malaysia'));
  check(state+':flow-complete',m.rows.every(x=>x.trim())&&m.scroll===390&&m.footer>=m.last);
 }
 check('runtime-errors',errors.length===0,errors);check('no-external-requests',network.length===0,network);check('no-cookie-storage',(await context.cookies()).length===0&&await p.evaluate(()=>localStorage.length===0&&sessionStorage.length===0));
 for(const e of [...f.core,...l.dependencies])entryCheck('post-run:',e);
 await browser.close();
 const report={actor:'/root/market_root_d32',mode:'INDEPENDENT_REVIEW',scope:'INITIAL',time:new Date().toISOString(),bundle:b.bundleSha256,source:b.sourceIdentity,freeze:hash(base+'/freeze.json'),browser:'151.0.7922.34',readiness:'fonts.ready + two animation frames; observed breakpoint predicate',checks,measurements,states,summary:{total:checks.length,pass:checks.filter(x=>x.status==='PASS').length,fail:checks.filter(x=>x.status==='FAIL').length},limitations:'D23 local projection only; menu click default prevented locally; production route/receiver/device/indexing not tested; no candidate writes'};
 fs.writeFileSync(path.join(__dirname,'results.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({summary:report.summary,failures:checks.filter(x=>x.status==='FAIL')}));process.exitCode=report.summary.fail?1:0;
})().catch(e=>{console.error(e);process.exitCode=1});
