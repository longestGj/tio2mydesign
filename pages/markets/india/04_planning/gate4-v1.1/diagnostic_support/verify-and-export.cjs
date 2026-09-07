const fs=require('fs');
const path=require('path');
const crypto=require('crypto');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=path.resolve(__dirname,'..');
const htmlPath=path.join(root,'MARKET-IN-001_GATE4_COMPLETE_VISUAL_V1.1.html');
const outDir=path.join(root,'approval_core');
const formal=process.argv.includes('--formal');
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const expectedModules=['IN-01','IN-02','IN-03','IN-04','IN-05'];
const specs=[{n:'1440',w:1440,h:900,dpr:1},{n:'768',w:768,h:900,dpr:1},{n:'390',w:390,h:844,dpr:2}];
const project=path.resolve(root,'../../../../..');
const inputPaths=[
 'AGENTS.md','PROJECT_CONTEXT.md','docs/architecture/GATE4_MERGED_FIRST_LIVE_TEST_CONTROL_V1.0.md','docs/architecture/PAGE_GATE_1_4_STANDARD_V2.1.md','docs/architecture/GATE_WORKFLOW_V3.1.md','docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.3.md','docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.0.md','agents/gate4-complete-visual/agent.md','skills/brand-applied-visual-design/SKILL.md','skills/full-page-visual-composition/SKILL.md','skills/layout-interaction-verification/SKILL.md','skills/layout-interaction-verification/references/core-risk-model.md','docs/page-briefs/MARKET-IN-001_INDIA_BRIEF_V0.2.md','docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md','brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md','brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md','pages/markets/india/MARKET-IN-001_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md','pages/markets/india/04_planning/MARKET-IN-001_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md','pages/markets/india/04_planning/MARKET-IN-001_GATE2_CONTENT_CONTRACT_V0.2.md','pages/markets/india/05_review/MARKET-IN-001_GATE3_TO_GATE4_HANDOFF_V0.1.md','pages/markets/india/04_planning/gate3-v0.1/MARKET-IN-001_GATE3_RESPONSIVE_WIREFRAME_V0.1.html'];
const dependencyNames=['Inter-OFL.txt','Inter-Variable.ttf','tio2-malaysia-primary-horizontal-v0.1.svg','tio2-malaysia-reverse-monochrome-v0.1.svg'];
const ident=p=>({path:p.replace(/\\/g,'/'),bytes:fs.statSync(p).size,sha256:sha(p)});
(async()=>{
 fs.mkdirSync(outDir,{recursive:true});
 const browser=await chromium.launch({channel:'chrome',headless:true});
 const result={time:new Date().toISOString(),mode:formal?'FORMAL':'PREFLIGHT',browser:await browser.version(),source:{path:htmlPath.replace(/\\/g,'/'),bytes:fs.statSync(htmlPath).size,sha256:sha(htmlPath)},viewports:[],assets:[],findings:[]};
 for(const s of specs){
  const context=await browser.newContext({viewport:{width:s.w,height:s.h},deviceScaleFactor:s.dpr});
  const page=await context.newPage(); const errors=[]; page.on('pageerror',e=>errors.push(String(e)));
  await page.goto('file:///'+htmlPath.replace(/\\/g,'/'),{waitUntil:'load'}); await page.evaluate(()=>document.fonts.ready);
  const m=await page.evaluate(expected=>{
   const visible=[...document.querySelectorAll('a,button')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&r.height>0&&!e.closest('[hidden]')&&!e.closest('dialog:not([open])')}).map(e=>{const r=e.getBoundingClientRect();return {t:e.textContent.trim(),w:r.width,h:r.height}});
   const main=document.querySelector('main'); const ids=[...main.querySelectorAll(':scope>section')].map(x=>x.dataset.module);
   return {ids,orderOk:JSON.stringify(ids)===JSON.stringify(expected),dimensions:{scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth,scrollHeight:document.documentElement.scrollHeight},minControl:{w:Math.min(...visible.map(x=>x.w)),h:Math.min(...visible.map(x=>x.h))},font:getComputedStyle(document.querySelector('h1')).fontFamily,coo:(main.innerText.match(/A Certificate of Origin is available upon request\./g)||[]).length,afterSubmit:(main.innerText.match(/After you submit your quotation request, our team will review your requirements and contact you using the information provided\./g)||[]).length,headings:[...main.querySelectorAll('h1,h2,h3')].map(x=>x.textContent.trim()),canonical:document.querySelector('link[rel=canonical]')?.href,schema:[...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(x=>JSON.parse(x.textContent)['@graph']||[]).map(x=>x['@type'])};
  },expectedModules);
  const rec={logical:{width:s.w,height:s.h},dpr:s.dpr,metrics:m,pageErrors:errors};
  if(formal){const file=`MARKET-IN-001_GATE4_${s.n}_FULL_V1.1${s.dpr===2?'@2x':''}.png`;await page.screenshot({path:path.join(outDir,file),fullPage:true});result.assets.push({file,state:'NORMAL_FULL_PAGE',bytes:fs.statSync(path.join(outDir,file)).size,sha256:sha(path.join(outDir,file))});}
  if(s.w<1101){await page.locator('.menuButton').focus();await page.keyboard.press('Enter');rec.menuOpen=await page.evaluate(()=>({expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),active:document.activeElement.textContent.trim(),mainInert:document.querySelector('main').inert,footerInert:document.querySelector('footer').inert,overflow:document.body.style.overflow}));if(formal){const file=`MARKET-IN-001_GATE4_${s.n}_MENU_V1.1${s.dpr===2?'@2x':''}.png`;await page.screenshot({path:path.join(outDir,file)});result.assets.push({file,state:'MENU_OPEN_FIRST_FOCUS',bytes:fs.statSync(path.join(outDir,file)).size,sha256:sha(path.join(outDir,file))});}await page.keyboard.press('Escape');rec.menuClosed=await page.evaluate(()=>({hidden:document.querySelector('.mobileNav').hidden,active:document.activeElement.className,overflow:document.body.style.overflow}));}
  await page.locator('#cookie-trigger').scrollIntoViewIfNeeded();await page.locator('#cookie-trigger').focus();await page.keyboard.press('Enter');rec.cookieOpen=await page.evaluate(()=>({open:document.querySelector('dialog').open,active:document.activeElement.textContent.trim()}));if(formal){const file=`MARKET-IN-001_GATE4_${s.n}_COOKIE_V1.1${s.dpr===2?'@2x':''}.png`;await page.screenshot({path:path.join(outDir,file)});result.assets.push({file,state:'COOKIE_OPEN_CLOSE_FOCUS',bytes:fs.statSync(path.join(outDir,file)).size,sha256:sha(path.join(outDir,file))});}await page.keyboard.press('Escape');rec.cookieClosed=await page.evaluate(()=>({open:document.querySelector('dialog').open,active:document.activeElement.id}));
  const ok=m.orderOk&&m.dimensions.scrollWidth===m.dimensions.clientWidth&&m.minControl.w>=44&&m.minControl.h>=44&&m.font.includes('Inter')&&m.coo===1&&m.afterSubmit===1&&m.canonical.endsWith('/markets/india/')&&m.schema.includes('WebPage')&&m.schema.includes('BreadcrumbList')&&errors.length===0&&(!rec.menuOpen||(rec.menuOpen.expanded==='true'&&rec.menuOpen.active==='Home'&&rec.menuOpen.mainInert&&rec.menuOpen.footerInert))&&rec.cookieOpen.open&&rec.cookieOpen.active==='Close';
  if(!ok)result.findings.push({id:`IN-G4-${s.n}`,severity:'BLOCKER',metrics:m,rec});
  result.viewports.push(rec);await context.close();
 }
 result.status=result.findings.length?'FAIL':'PASS';
 const file=path.join(__dirname,formal?'formal-runtime-and-export.json':'preflight-runtime.json');fs.writeFileSync(file,JSON.stringify(result,null,2));
 if(formal)fs.writeFileSync(path.join(outDir,'export-inventory.json'),JSON.stringify({worksetId:'IN-G4-WORKSET-V11R2',freezeId:'IN-G4-V11R2-SOURCE-01',inputIndex:inputPaths.map(x=>ident(path.join(project,x))),source:result.source,dependencies:dependencyNames.map(x=>ident(path.join(root,'dependencies',x))),renderConditions:{browser:result.browser,viewports:specs,network:'OFFLINE_FILE_SOURCE',fonts:'document.fonts.ready',evidenceTypes:['SOURCE_INSPECTION','ACTUAL_RUNTIME','STATIC_VISUAL','LOCAL_SIMULATION']},assets:result.assets,readback:{status:'BOUND_AFTER_FORMAL_EXPORT',path:'diagnostic_support/readable-segments/segments.json'},findings:{resolvedTargets:['IN-G4-IR01','IN-G4-IR02','IN-G4-IR03','IN-G4-IR04','IN-G4-IR05'],independentRereview:'PENDING'}},null,2));
 await browser.close(); console.log(JSON.stringify({status:result.status,source:result.source,viewports:result.viewports.map(x=>({logical:x.logical,dpr:x.dpr,height:x.metrics.dimensions.scrollHeight,minControl:x.metrics.minControl,errors:x.pageErrors.length})),assets:result.assets.length,findings:result.findings},null,2));if(result.findings.length)process.exitCode=2;
})().catch(e=>{console.error(e);process.exit(1)});

