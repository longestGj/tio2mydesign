const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const project = 'D:/23MySec';
const pageId = process.argv[2];
if (!['MARKET-BR-EN', 'MARKET-BR-PT'].includes(pageId)) throw new Error('Expected MARKET-BR-EN or MARKET-BR-PT');
const isPt = pageId.endsWith('-PT');
const slug = isPt ? 'pt' : 'en';
const gate4Dir = `${project}/pages/markets/brazil/04_planning/gate4-${slug}-v1.1`;
const gate3Dir = `${project}/pages/markets/brazil/04_planning/gate3-${slug}-v0.1`;
const reviewDir = `${project}/pages/markets/brazil/05_review/${pageId}_GATE4_INDEPENDENT_REREVIEW_V1.1`;
const source = `${gate4Dir}/${pageId}_GATE4_COMPLETE_VISUAL_V1.1.html`;
const priorSource = `${project}/pages/markets/brazil/04_planning/gate4-${slug}-v1.0/${pageId}_GATE4_COMPLETE_VISUAL_V1.0.html`;
const gate3 = `${gate3Dir}/${pageId}_GATE3_RESPONSIVE_WIREFRAME_V0.1.html`;
const evidence = `${gate4Dir}/${pageId}_GATE4_EVIDENCE_INDEX_V1.1.json`;
const freeze = `${gate4Dir}/${pageId}_GATE4_FREEZE_RECORD_V1.1.json`;
const expectedSourceSha = isPt ? '1159f03eb5018f73ba497cca77ed4d9903c10d2bb3a6c2612c51da89757a0357' : '6827066a38c28b5e3fe990e0d53b8582ca215a1d5b481ffeacf18c74e3ac7707';
const expectedEvidenceSha = isPt ? '445336a8aec5a4cf276eb7377192d0e2c675fa8bac0544fea67d51e1b9e42b13' : '9ec978f4e98b792250ca0efdcb0bf7f7b617b68064a811b32b2e47b09e94c34d';
const expectedFreezeId = isPt ? 'BRPT-G4-V11R1-SOURCE-01' : 'BR-EN-G4-V11-SOURCE-01';
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

function freezeIds(value, out=[]) {
  if (Array.isArray(value)) for (const v of value) freezeIds(v,out);
  else if (value && typeof value === 'object') for (const [k,v] of Object.entries(value)) {
    if (/freeze.*id|source.*id/i.test(k) && typeof v === 'string') out.push(v);
    freezeIds(v,out);
  }
  return out;
}

(async()=>{
  fs.mkdirSync(reviewDir,{recursive:true});
  const evidenceData=JSON.parse(fs.readFileSync(evidence,'utf8'));
  const freezeData=JSON.parse(fs.readFileSync(freeze,'utf8'));
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
    await Promise.all([candidate.goto('file:///'+source,{waitUntil:'load'}),upstream.goto('file:///'+gate3,{waitUntil:'load'})]);
    await Promise.all([candidate.evaluate(()=>document.fonts.ready),upstream.evaluate(()=>document.fonts.ready)]);
    const [candidateMain, upstreamMain, candidateLinks, upstreamLinks] = await Promise.all([
      candidate.locator('main').innerText(), upstream.locator('main').innerText(),
      candidate.locator('main a').evaluateAll(as=>as.map(a=>[a.textContent.replace(/\s+/g,' ').trim(),a.getAttribute('href')])),
      upstream.locator('main a').evaluateAll(as=>as.map(a=>[a.textContent.replace(/\s+/g,' ').trim(),a.getAttribute('href')]))
    ]);
    const inspect = p => p.evaluate(()=>{
      const visible=e=>{const s=getComputedStyle(e),r=e.getBoundingClientRect();return s.display!=='none'&&s.visibility!=='hidden'&&r.width>0&&r.height>0&&!e.closest('[hidden]')&&!e.closest('dialog:not([open])')};
      const controls=[...document.querySelectorAll('a,button')].filter(visible).map(e=>{const r=e.getBoundingClientRect();return{text:e.textContent.replace(/\s+/g,' ').trim(),w:r.width,h:r.height}});
      const viewportOffenders=[...document.querySelectorAll('main *')].filter(visible).map(e=>{const r=e.getBoundingClientRect();return{tag:e.tagName,cls:e.className||'',text:(e.textContent||'').replace(/\s+/g,' ').trim().slice(0,80),left:r.left,right:r.right,width:r.width}}).filter(x=>x.left<-.5||x.right>document.documentElement.clientWidth+.5);
      const clipped=[...document.querySelectorAll('main *')].filter(visible).filter(e=>{const s=getComputedStyle(e);return ((s.overflowX==='hidden'||s.overflow==='hidden')&&e.scrollWidth>e.clientWidth+1)||((s.overflowY==='hidden'||s.overflow==='hidden')&&e.scrollHeight>e.clientHeight+1)}).map(e=>({tag:e.tagName,cls:e.className||'',scrollWidth:e.scrollWidth,clientWidth:e.clientWidth,scrollHeight:e.scrollHeight,clientHeight:e.clientHeight}));
      const style=(sel,props)=>{const e=document.querySelector(sel);if(!e)return null;const s=getComputedStyle(e);return Object.fromEntries(props.map(k=>[k,s[k]]))};
      const shared={
        header:style('.header',['height','backgroundColor','color','borderBottomWidth','boxShadow']),
        headerRfq:style('.headerRfq',['minWidth','minHeight','padding','border','borderRadius','color','backgroundColor','transition','transform','boxShadow']),
        footerRfq:style('.footerRfq',['minWidth','minHeight','padding','border','borderRadius','color','backgroundColor','transition','transform','boxShadow']),
        legalUtilities:style('.legalUtilities',['display','gap','marginTop','paddingTop','borderTopWidth']),
        menuButton:style('.menuButton',['display','minWidth','minHeight','padding','border','color','backgroundColor'])
      };
      return {dimensions:{clientWidth:document.documentElement.clientWidth,scrollWidth:document.documentElement.scrollWidth,scrollHeight:document.documentElement.scrollHeight},controls,minControl:{width:Math.min(...controls.map(x=>x.w)),height:Math.min(...controls.map(x=>x.h))},viewportOffenders,clipped,font:getComputedStyle(document.querySelector('h1')).fontFamily,moduleIds:[...document.querySelectorAll('main>section')].map(e=>e.dataset.module),headings:[...document.querySelectorAll('main h1,main h2,main h3')].map(e=>e.textContent.trim()),mainLang:{html:document.documentElement.lang,main:document.querySelector('main').lang,header:document.querySelector('header').lang,footer:document.querySelector('footer').lang,dialog:document.querySelector('dialog').lang},inlineEnglish:[...document.querySelectorAll('main [lang="en"]')].map(e=>e.textContent.trim()),shared};
    });
    const [geometry, upstreamGeometry]=await Promise.all([inspect(candidate),inspect(upstream)]);
    const sharedParity=JSON.stringify(geometry.shared)===JSON.stringify(upstreamGeometry.shared);
    const focusSelectors=isPt?[
      {name:'hero',selector:'.m1 .actions .primary',adjacent:'rgb(6, 43, 91)'},
      {name:'application',selector:'.m2 .application-link a',adjacent:'rgb(255, 255, 255)'},
      {name:'documents',selector:'.m3 .actions a',adjacent:'rgb(243, 247, 250)'},
      {name:'trade',selector:'.m4 .actions a',adjacent:'rgb(6, 43, 91)'},
      {name:'rfq',selector:'.m5 .actions .primary',adjacent:'rgb(247, 243, 234)'}
    ]:[{name:'documents',selector:'.m3 .actions a',adjacent:'rgb(6, 43, 91)'}];
    const focusProbes=[];
    for(const probe of focusSelectors){
      const result=await candidate.evaluate(({selector})=>{const e=document.querySelector(selector);e.focus();const s=getComputedStyle(e);return{text:e.textContent.trim(),outlineColor:s.outlineColor,outlineWidth:s.outlineWidth,outlineStyle:s.outlineStyle,background:s.backgroundColor,color:s.color}},probe);
      result.name=probe.name; result.selector=probe.selector; result.evaluatedAgainst=probe.adjacent; result.contrast=contrast(result.outlineColor,probe.adjacent); focusProbes.push(result);
    }
    const heroPrimary=await candidate.evaluate(()=>{const e=document.querySelector('.m1 .actions .primary');const s=getComputedStyle(e);return{color:s.color,background:s.backgroundColor,borderColor:s.borderColor}});
    heroPrimary.contrast=contrast(heroPrimary.color,heroPrimary.background);
    await candidate.hover('.m1 .actions .primary');
    await candidate.waitForTimeout(300);
    const heroHover=await candidate.evaluate(()=>{const e=document.querySelector('.m1 .actions .primary');const s=getComputedStyle(e);return{color:s.color,background:s.backgroundColor,borderColor:s.borderColor}});
    heroHover.contrast=contrast(heroHover.color,heroHover.background);
    let menu=null;
    if(spec.width<1101){
      await candidate.locator('.menuButton').focus(); await candidate.keyboard.press('Enter');
      const opened=await candidate.evaluate(()=>({expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),hidden:document.querySelector('.mobileNav').hidden,active:document.activeElement.textContent.trim(),mainInert:document.querySelector('main').inert,footerInert:document.querySelector('footer').inert,bodyOverflow:document.body.style.overflow}));
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
    results.push({spec,pageErrors,contentParity:{normalizedMain:normalize(candidateMain)===normalize(upstreamMain),candidateLength:normalize(candidateMain).length,upstreamLength:normalize(upstreamMain).length,links:JSON.stringify(candidateLinks)===JSON.stringify(upstreamLinks),candidateLinks,upstreamLinks},geometry,sharedParity,focusProbes,heroPrimary,heroHover,menu,cookie:{opened:cookieOpened,next:cookieNext,closed:cookieClosed}});
    await context.close();
  }
  await browser.close();
  const output={
    reviewerRole:'independent targeted rereviewer; did not edit candidate',pageId,time:new Date().toISOString(),scope:isPt?['BR-PT-G4-IR-01','BR-PT-G4-IR-02','BR-PT-G4-IR-03']:['BR-EN-G4-IR-01','BR-EN-G4-IR-02'],
    candidate:identity(source),priorCandidate:identity(priorSource),gate3:identity(gate3),freezeRecord:identity(freeze),evidenceIndex:identity(evidence),
    expectedIdentity:{sourceSha256:expectedSourceSha,evidenceIndexSha256:expectedEvidenceSha,freezeId:expectedFreezeId},
    identityAssertions:{source:sha256(source)===expectedSourceSha,evidenceIndex:sha256(evidence)===expectedEvidenceSha,freezeId:freezeIds(freezeData).includes(expectedFreezeId),freezeIdsFound:freezeIds(freezeData)},
    identityReadback:{listed:identityReadback.length,matches:identityReadback.filter(x=>x.status==='MATCH').length,mismatches:identityReadback.filter(x=>x.status!=='MATCH'),items:identityReadback},
    sharedOwnerSourceInspection:{visualLayerSharedSelectorHits:sharedSelectorHits},viewports:results,
    targetedVisualReadback:{fullPages:['1440','768','390'],readableSegments:16,stateAssets:isPt?['768_MENU','390_MENU','1440_COOKIE','768_COOKIE','390_COOKIE']:['1440_DOCUMENT_FOCUS','768_DOCUMENT_FOCUS','390_DOCUMENT_FOCUS','768_MENU','390_MENU','1440_COOKIE','768_COOKIE','390_COOKIE'],actualInspection:true}
  };
  const out=`${reviewDir}/observations.json`;fs.writeFileSync(out,JSON.stringify(output,null,2));
  console.log(JSON.stringify({pageId,out,identityAssertions:output.identityAssertions,identityReadback:{listed:output.identityReadback.listed,matches:output.identityReadback.matches,mismatches:output.identityReadback.mismatches},sharedSelectorHits,viewports:results.map(x=>({spec:x.spec,content:x.contentParity.normalizedMain,links:x.contentParity.links,dimensions:x.geometry.dimensions,min:x.geometry.minControl,offenders:x.geometry.viewportOffenders.length,clipped:x.geometry.clipped.length,sharedParity:x.sharedParity,focus:x.focusProbes,heroPrimary:x.heroPrimary,heroHover:x.heroHover,menu:x.menu,cookie:x.cookie,pageErrors:x.pageErrors,mainLang:x.geometry.mainLang}))},null,2));
})().catch(e=>{console.error(e);process.exit(1)});
