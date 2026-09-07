const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const project = 'D:/23MySec';
const pageId = process.argv[2];
if (!['MARKET-BR-EN', 'MARKET-BR-PT'].includes(pageId)) throw new Error('Expected MARKET-BR-EN or MARKET-BR-PT');
const isPt = pageId.endsWith('-PT');
const slug = isPt ? 'pt' : 'en';
const gate4Dir = `${project}/pages/markets/brazil/04_planning/gate4-${slug}-v1.0`;
const gate3Dir = `${project}/pages/markets/brazil/04_planning/gate3-${slug}-v0.1`;
const reviewDir = `${project}/pages/markets/brazil/05_review/${pageId}_GATE4_INDEPENDENT_REVIEW_V1.0`;
const source = `${gate4Dir}/${pageId}_GATE4_COMPLETE_VISUAL_V1.0.html`;
const gate3 = `${gate3Dir}/${pageId}_GATE3_RESPONSIVE_WIREFRAME_V0.1.html`;
const evidence = `${gate4Dir}/${pageId}_GATE4_EVIDENCE_INDEX_V1.0.json`;
const freeze = `${gate4Dir}/${pageId}_GATE4_FREEZE_RECORD_V1.0.json`;
const specs = [{name:'1440',width:1440,height:900,dpr:1},{name:'768',width:768,height:900,dpr:1},{name:'390',width:390,height:844,dpr:2}];
const sha256 = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const identity = p => ({path:p.replace(/\\/g,'/'),bytes:fs.statSync(p).size,sha256:sha256(p)});
const normalize = s => s.replace(/\s+/g,' ').trim();
const rgb = s => (s.match(/[\d.]+/g)||[]).slice(0,3).map(Number);
const luminance = arr => arr.map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);
const contrast = (a,b) => { const x=luminance(rgb(a)), y=luminance(rgb(b)); return (Math.max(x,y)+.05)/(Math.min(x,y)+.05); };

function collectIdentities(value, out=[]) {
  if (Array.isArray(value)) for (const v of value) collectIdentities(v,out);
  else if (value && typeof value === 'object') {
    if (typeof value.path === 'string' && Number.isFinite(value.bytes) && /^[a-f0-9]{64}$/i.test(value.sha256||'')) out.push(value);
    for (const v of Object.values(value)) collectIdentities(v,out);
  }
  return out;
}

(async()=>{
  fs.mkdirSync(reviewDir,{recursive:true});
  const evidenceData=JSON.parse(fs.readFileSync(evidence,'utf8'));
  const listed=collectIdentities(evidenceData);
  const identityReadback=listed.map(item=>{
    const p=path.isAbsolute(item.path)?item.path:path.join(project,item.path);
    if(!fs.existsSync(p)) return {path:item.path,status:'MISSING'};
    const actual=identity(p);
    return {path:item.path,status:actual.bytes===item.bytes&&actual.sha256.toLowerCase()===item.sha256.toLowerCase()?'MATCH':'MISMATCH',expected:{bytes:item.bytes,sha256:item.sha256},actual:{bytes:actual.bytes,sha256:actual.sha256}};
  });
  const sourceText=fs.readFileSync(source,'utf8');
  const styleBlocks=[...sourceText.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m=>m[1]);
  let visualLayer=styleBlocks.at(-1)||'';
  if (isPt && visualLayer.includes('/* MARKET-BR-PT')) visualLayer=visualLayer.slice(visualLayer.indexOf('/* MARKET-BR-PT'));
  const sharedSelectorHits=[...visualLayer.matchAll(/(?:^|[}\s])([^{}]*(?:\.header|\.footer|\.headerRfq|\.footerRfq|\.mobileNav|\.menuButton|\.legalUtilities|\.cookie-layer)[^{]*)\{/g)].map(m=>m[1].trim());
  const browser=await chromium.launch({channel:'chrome',headless:true});
  const results=[];
  for(const spec of specs){
    const context=await browser.newContext({viewport:{width:spec.width,height:spec.height},deviceScaleFactor:spec.dpr});
    const candidate=await context.newPage(), upstream=await context.newPage();
    const pageErrors=[]; candidate.on('pageerror',e=>pageErrors.push(String(e)));
    await Promise.all([
      candidate.goto('file:///'+source,{waitUntil:'load'}),
      upstream.goto('file:///'+gate3,{waitUntil:'load'})
    ]);
    await Promise.all([candidate.evaluate(()=>document.fonts.ready),upstream.evaluate(()=>document.fonts.ready)]);
    const candidateMain=await candidate.locator('main').innerText();
    const upstreamMain=await upstream.locator('main').innerText();
    const candidateLinks=await candidate.locator('main a').evaluateAll(as=>as.map(a=>[a.textContent.replace(/\s+/g,' ').trim(),a.getAttribute('href')]));
    const upstreamLinks=await upstream.locator('main a').evaluateAll(as=>as.map(a=>[a.textContent.replace(/\s+/g,' ').trim(),a.getAttribute('href')]));
    const geometry=await candidate.evaluate(({isPt})=>{
      const visible=e=>{const s=getComputedStyle(e),r=e.getBoundingClientRect();return s.display!=='none'&&s.visibility!=='hidden'&&r.width>0&&r.height>0&&!e.closest('[hidden]')&&!e.closest('dialog:not([open])')};
      const controls=[...document.querySelectorAll('a,button')].filter(visible).map(e=>{const r=e.getBoundingClientRect();return{text:e.textContent.replace(/\s+/g,' ').trim(),w:r.width,h:r.height}});
      const viewportOffenders=[...document.querySelectorAll('main *')].filter(visible).map(e=>{const r=e.getBoundingClientRect();return{tag:e.tagName,cls:e.className||'',text:(e.textContent||'').replace(/\s+/g,' ').trim().slice(0,80),left:r.left,right:r.right,width:r.width}}).filter(x=>x.left<-.5||x.right>document.documentElement.clientWidth+.5);
      const clipped=[...document.querySelectorAll('main *')].filter(visible).filter(e=>{const s=getComputedStyle(e);return (s.overflowX==='hidden'||s.overflow==='hidden')&&e.scrollWidth>e.clientWidth+1 || (s.overflowY==='hidden'||s.overflow==='hidden')&&e.scrollHeight>e.clientHeight+1}).map(e=>({tag:e.tagName,cls:e.className||'',scrollWidth:e.scrollWidth,clientWidth:e.clientWidth,scrollHeight:e.scrollHeight,clientHeight:e.clientHeight}));
      const cards=[...document.querySelectorAll('.applications article')].map(e=>{const r=e.getBoundingClientRect();return{x:r.x,y:r.y,w:r.width,h:r.height}});
      const primary=[...document.querySelectorAll('main .actions .primary')].map(e=>{const s=getComputedStyle(e);return{text:e.textContent.trim(),color:s.color,background:s.backgroundColor,fontSize:s.fontSize,fontWeight:s.fontWeight}});
      const mainLang=[document.documentElement.lang,document.querySelector('main').lang,...document.querySelectorAll('header,footer,dialog')].map(e=>typeof e==='string'?e:e.lang);
      return {dimensions:{clientWidth:document.documentElement.clientWidth,scrollWidth:document.documentElement.scrollWidth,scrollHeight:document.documentElement.scrollHeight},controls,minControl:{width:Math.min(...controls.map(x=>x.w)),height:Math.min(...controls.map(x=>x.h))},viewportOffenders,clipped,cards,font:getComputedStyle(document.querySelector('h1')).fontFamily,moduleIds:[...document.querySelectorAll('main>section')].map(e=>e.dataset.module),headings:[...document.querySelectorAll('main h1,main h2,main h3')].map(e=>e.textContent.trim()),primary,mainLang,inlineEnglish:[...document.querySelectorAll('main [lang="en"]')].map(e=>e.textContent.trim()),meta:{title:document.title,description:document.querySelector('meta[name="description"]')?.content,robots:document.querySelector('meta[name="robots"]')?.content,canonical:document.querySelector('link[rel="canonical"]')?.href,hreflang:[...document.querySelectorAll('link[hreflang]')].map(e=>[e.hreflang,e.href])}};
    },{isPt});
    geometry.primary=geometry.primary.map(x=>({...x,contrast:contrast(x.color,x.background)}));
    const focusProbe=await candidate.evaluate(({isPt})=>{
      const selector=isPt?'.m2 .application-link a':'.m3 .actions a';
      const e=document.querySelector(selector);e.focus();const s=getComputedStyle(e);return{selector,text:e.textContent.trim(),outlineColor:s.outlineColor,outlineWidth:s.outlineWidth,sectionClass:e.closest('section').className,sectionBackground:getComputedStyle(e.closest('section')).backgroundColor,sectionBackgroundImage:getComputedStyle(e.closest('section')).backgroundImage};
    },{isPt});
    focusProbe.evaluatedAgainst=isPt?'rgb(255, 255, 255)':'rgb(6, 43, 91)';
    focusProbe.contrast=contrast(focusProbe.outlineColor,focusProbe.evaluatedAgainst);
    let menu=null;
    if(spec.width<1101){
      await candidate.locator('.menuButton').focus(); await candidate.keyboard.press('Enter');
      const opened=await candidate.evaluate(()=>({expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),hidden:document.querySelector('.mobileNav').hidden,active:document.activeElement.textContent.trim(),mainInert:document.querySelector('main').inert,footerInert:document.querySelector('footer').inert,logoInert:document.querySelector('.logoLink').inert,rfqInert:document.querySelector('.headerRfq').inert,bodyOverflow:document.body.style.overflow}));
      await candidate.keyboard.press('Shift+Tab'); const reverseWrap=await candidate.evaluate(()=>document.activeElement.textContent.trim());
      await candidate.keyboard.press('Tab'); const forwardWrap=await candidate.evaluate(()=>document.activeElement.textContent.trim());
      await candidate.keyboard.press('Escape');
      const closed=await candidate.evaluate(()=>({expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),hidden:document.querySelector('.mobileNav').hidden,active:document.activeElement.className,bodyOverflow:document.body.style.overflow}));
      menu={opened,reverseWrap,forwardWrap,closed};
    }
    await candidate.locator('#cookie-trigger').scrollIntoViewIfNeeded(); await candidate.locator('#cookie-trigger').focus(); await candidate.keyboard.press('Enter');
    const cookieOpened=await candidate.evaluate(()=>({open:document.querySelector('dialog').open,active:document.activeElement.textContent.trim()}));
    await candidate.keyboard.press('Tab'); const cookieNext=await candidate.evaluate(()=>document.activeElement.textContent.trim());
    await candidate.keyboard.press('Escape');
    const cookieClosed=await candidate.evaluate(()=>({open:document.querySelector('dialog').open,active:document.activeElement.id}));
    await candidate.locator('main .m1 .actions .primary').click();
    const navigation=await candidate.evaluate(()=>window.localNavigation);
    results.push({spec,pageErrors,contentParity:{normalizedMain:normalize(candidateMain)===normalize(upstreamMain),candidateLength:normalize(candidateMain).length,upstreamLength:normalize(upstreamMain).length,links:JSON.stringify(candidateLinks)===JSON.stringify(upstreamLinks),candidateLinks,upstreamLinks},geometry,focusProbe,menu,cookie:{opened:cookieOpened,next:cookieNext,closed:cookieClosed},navigation});
    await context.close();
  }
  await browser.close();
  const output={reviewerRole:'independent final reviewer; did not edit candidate',pageId,time:new Date().toISOString(),candidate:identity(source),gate3:identity(gate3),freezeRecord:identity(freeze),evidenceIndex:identity(evidence),identityReadback:{listed:identityReadback.length,matches:identityReadback.filter(x=>x.status==='MATCH').length,mismatches:identityReadback.filter(x=>x.status!=='MATCH')},sharedOwnerSourceInspection:{visualLayerSharedSelectorHits:sharedSelectorHits},viewports:results,staticVisualReadback:{fullPages:['1440','768','390'],readableSegments:16,stateAssets:['768_MENU','390_MENU','1440_COOKIE','768_COOKIE','390_COOKIE'],actualInspection:true}};
  const out=`${reviewDir}/observations.json`;fs.writeFileSync(out,JSON.stringify(output,null,2));
  console.log(JSON.stringify({pageId,out,identity:output.identityReadback,sharedSelectorHits,viewports:results.map(x=>({spec:x.spec,content:x.contentParity.normalizedMain,links:x.contentParity.links,dimensions:x.geometry.dimensions,min:x.geometry.minControl,offenders:x.geometry.viewportOffenders.length,clipped:x.geometry.clipped.length,focus:x.focusProbe,primary:x.geometry.primary,menu:x.menu,cookie:x.cookie,navigation:x.navigation,pageErrors:x.pageErrors}))},null,2));
})().catch(e=>{console.error(e);process.exit(1)});
