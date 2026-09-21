const fs=require('fs'),path=require('path'),crypto=require('crypto'),{pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const dir=__dirname,repo=path.resolve(dir,'../../../..'),prior=path.resolve(dir,'../d32-gate3-v0.2'),widths=[1440,1024,768,390,320];
const sha=f=>crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
const record=f=>({path:f.replaceAll('\\','/'),bytes:fs.statSync(f).size,sha256:sha(f)});
const json=(name,data)=>fs.writeFileSync(path.join(dir,name),JSON.stringify(data,null,2)+'\n');
const read=name=>JSON.parse(fs.readFileSync(path.join(dir,name),'utf8'));
const settle=p=>p.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
const file=path.join(dir,'DOC-000_D32_structure.html'),sourceId=()=>sha(file);
const check=(list,id,ok,actual,criteria)=>list.push({check_id:id,category:id.split('.')[0],criterion:criteria||id,actual,result:ok?'PASS':'FAIL'});
async function open(browser,width){const p=await browser.newPage({viewport:{width,height:1000},deviceScaleFactor:1,reducedMotion:'reduce'});await p.goto(pathToFileURL(file).href);await p.evaluate(()=>document.fonts.ready);await settle(p);return p;}
function assertLock(){const lock=read('source-lock.json');for(const f of [...lock.sources,...lock.dependencies])if(sha(f.path)!==f.sha256)throw Error('Lock changed: '+f.path);return lock;}
async function main(){
 const mode=process.argv[2];if(!['preflight','capture','freeze'].includes(mode))throw Error('Specify preflight/capture/freeze');
 if(mode==='preflight'){
  if(fs.existsSync(path.join(dir,'source-lock.json')))throw Error('Already locked; no overwrite');
  const old=JSON.parse(fs.readFileSync(path.join(prior,'DOC-000_D32_INPUT_BINDING_V0.2.json'),'utf8'));
  const extra=['docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.10.md','docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.3.md','docs/architecture/GATE4_GATE5_VISUAL_HANDOFF_CONTRACT_V1.0.md','docs/architecture/PAGE_GATE_1_4_STANDARD_V2.3.md','docs/architecture/GATE_WORKFLOW_V3.3.md','agents/gate4-complete-visual/agent.md','skills/brand-applied-visual-design/SKILL.md','skills/full-page-visual-composition/SKILL.md','skills/layout-interaction-verification/SKILL.md','skills/layout-interaction-verification/references/gate4-self-check.md','pages/documents/05_review/DOC-000_D32_GATE3_CONTROLLER_CLOSURE_V0.1.md','pages/documents/05_review/DOC-000_D32_GATE3_TO_GATE4_HANDOFF_V0.1.md','pages/documents/05_review/DOC-000_D32_GATE3_TARGETED_RECHECK_V0.1.md','pages/documents/DOC-000_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md'];
  const inputs=[...new Set([...old.inputs.map(x=>x.path).filter(x=>!x.endsWith('01_PROJECT_INDEX.md')), ...extra.map(x=>path.join(repo,x))])].map(record);
  const dependencies=old.shared.map(x=>record(x.path));
  json('input-index.json',{workset_id:'DOC000-D32-G4-20260921-V01',mode:'PROTOTYPE_ONLY',authority_manifest:'pages/documents/DOC-000_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md',approved_gate3_bundle:'fa05968ccd064909e8c74fa32a54c5ef28d4fd9ff6bc065ec229cb3d0d8abbf2',approved_gate3_source:'2fa09d30d87870645752cde4f085d5113b63c97ef333534d184416d8cb6f0723',inputs,dependencies,source_authority:old.source_authority,owner_boundary:'Page slots only; RootPageHero/Chrome/CTA/legal shared owners unchanged'});
  const checks=[];for(const name of ['structure.html','structure.css','behavior.js'])check(checks,'parity.'+name,sha(path.join(dir,'DOC-000_D32_'+name))===sha(path.join(prior,'DOC-000_D32_'+name)),sha(path.join(dir,'DOC-000_D32_'+name)),'Exact bytes equal approved Gate3 V0.2');
  const runtime=JSON.parse(fs.readFileSync(path.join(dir,'diagnostic_support/GREEN.json'),'utf8'));check(checks,'runtime.complete',runtime.status==='PASS'&&runtime.candidate_sha256===sourceId(),runtime.results.length,'All existing author coverage passes for this source and five widths');
  const browser=await chromium.launch({headless:true});const rendering={browser:browser.version(),engine:'Chromium',OS:process.platform,node:process.version,viewport_height:1000,widths,device_scale_factor:1,reduced_motion:'reduce',font_wait:'document.fonts.ready plus two animation frames',font:'shared Inter Variable local TTF',actual_runtime:'file:// local complete HTML/CSS/JS consumer'};
  for(const width of widths){
   const p=await open(browser,width);
   const actual=await p.evaluate(()=>{
    const h=document.querySelector('h1'),hs=getComputedStyle(h),rect=h.getBoundingClientRect();
    const cols=s=>getComputedStyle(document.querySelector(s)).gridTemplateColumns.split(' ').length;
    const controls=[...document.querySelectorAll('a,button,select')].filter(e=>e.checkVisibility()).map(e=>({text:e.textContent.trim(),...e.getBoundingClientRect().toJSON()}));
    const bad=controls.filter(e=>e.width<44||e.height<44);
    const lum=s=>{let a=s.match(/[\d.]+/g).slice(0,3).map(Number).map(n=>{n/=255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4});return a[0]*.2126+a[1]*.7152+a[2]*.0722};
    const bg=e=>{for(let n=e;n;n=n.parentElement){let c=getComputedStyle(n).backgroundColor;if(c!=='rgba(0, 0, 0, 0)'&&c!=='transparent')return c}return 'rgb(255, 255, 255)'};
    const contrasts=[...document.querySelectorAll('body *')].filter(e=>e.checkVisibility()&&[...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim())).map(e=>{let s=getComputedStyle(e),a=lum(s.color),b=lum(bg(e)),ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05),size=parseFloat(s.fontSize),large=size>=24||(size>=18.66&&parseInt(s.fontWeight)>=700);return {tag:e.tagName,text:e.textContent.trim().slice(0,60),ratio,minimum:large?3:4.5}}).filter(x=>Number.isFinite(x.ratio));
    return {scrollWidth:document.documentElement.scrollWidth,width:innerWidth,dpr:devicePixelRatio,fonts:document.fonts.status,inter:document.fonts.check('16px Inter'),imageFailures:[...document.images].filter(e=>!e.complete||!e.naturalWidth).map(e=>e.src),h1Lines:Math.round(rect.height/parseFloat(hs.lineHeight)),h1Size:hs.fontSize,heroColumns:cols('.root-hero'),scenarioColumns:cols('.doc-scenarios'),groupColumns:cols('.doc-groups'),selectorColumns:cols('.doc-selector'),smallTargets:bad,contrastFailures:contrasts.filter(x=>x.ratio+.005<x.minimum),contrastPairCount:contrasts.length};
   });
   check(checks,'layout.'+width+'.overflow',actual.scrollWidth===width,actual.scrollWidth,'No horizontal overflow');
   check(checks,'render.'+width+'.DPR',actual.dpr===1,actual.dpr,'Actual window.devicePixelRatio=1');
   check(checks,'render.'+width+'.fonts',actual.fonts==='loaded'&&actual.inter,actual,'Inter loaded; not fallback');
   check(checks,'render.'+width+'.images',actual.imageFailures.length===0,actual.imageFailures,'All referenced images decoded');
   check(checks,'layout.'+width+'.columns',actual.heroColumns===(width>=1024?2:1)&&actual.scenarioColumns===(width>=1024?3:1)&&actual.groupColumns===(width>=768?2:1)&&actual.selectorColumns===(width>=1024?2:1),actual,'Matches final design-rules column table');
   check(checks,'layout.'+width+'.h1',actual.h1Lines===(width===1440?2:width===1024?3:width===768?2:width===390?3:4),{lines:actual.h1Lines,exception:width===320?'PROPOSED_CONTROLLED_NARROW_WIDTH_EXCEPTION':null},'Approved shared H1 tokens; 320 candidate exception separately reviewed');
   check(checks,'a11y.'+width+'.targets',!actual.smallTargets.length,actual.smallTargets,'All visible interactive boxes at least44x44');
   check(checks,'a11y.'+width+'.contrast',!actual.contrastFailures.length,{pairs:actual.contrastPairCount,failures:actual.contrastFailures},'Visible text >=4.5; large >=3; computed solid background ancestry');
   await p.locator('[data-hero-action]').hover();
   const hover=await p.locator('[data-hero-action]').evaluate(e=>({color:getComputedStyle(e).color,background:getComputedStyle(e).backgroundColor}));
   check(checks,'a11y.'+width+'.hover',hover.color==='rgb(255, 255, 255)'&&hover.background==='rgb(0, 128, 120)',hover,'Hover keeps approved accessible white/teal');
   await p.locator('[data-hero-action]').focus();const focus=await p.locator('[data-hero-action]').evaluate(e=>({width:getComputedStyle(e).outlineWidth,style:getComputedStyle(e).outlineStyle,offset:getComputedStyle(e).outlineOffset}));
   check(checks,'a11y.'+width+'.focus',focus.width==='3px'&&focus.style==='solid'&&focus.offset==='4px',focus,'Visible3px outline offset4');
   await p.locator('#continue-request').click();const error=await p.locator('#grade-error').evaluate(e=>({text:e.textContent,color:getComputedStyle(e).color,overflow:e.scrollWidth>e.clientWidth}));
   check(checks,'a11y.'+width+'.error',error.text==='Select a product grade to continue.'&&error.color==='rgb(180, 35, 24)'&&!error.overflow,error,'Visible associated text error; no clipping; approved error color contrast');
   await p.close();
  }
  await browser.close();
  const report={status:checks.every(x=>x.result==='PASS')?'PASS':'FAIL',mode:'AUTHOR_PREFLIGHT',source_identity:sourceId(),runtime_check_count:runtime.results.length,checks,rendering};json('preflight.json',report);console.log(JSON.stringify({status:report.status,runtime_checks:runtime.results.length,visual_checks:checks.length,failed:checks.filter(x=>x.result==='FAIL')},null,2));if(report.status!=='PASS')process.exitCode=1;
  else {const names=['DOC-000_D32_structure.html','DOC-000_D32_structure.css','DOC-000_D32_behavior.js','DOC-000_D32_build.cjs','DOC-000_D32_verify.cjs','visual-evidence.cjs','design-rules.md','input-index.json','preflight.json','diagnostic_support/GREEN.json'];json('source-lock.json',{locked_at:new Date().toISOString(),source_identity:sourceId(),sources:names.map(n=>record(path.join(dir,n))),dependencies,rendering});}
 }
 if(mode==='capture'){
  const lock=assertLock();if(fs.existsSync(path.join(dir,'evidence-index.json')))throw Error('Formal already exists; no overwrite');
  fs.mkdirSync(path.join(dir,'formal'),{recursive:true});fs.mkdirSync(path.join(dir,'readable'),{recursive:true});
  const browser=await chromium.launch({headless:true}),evidence=[];
  async function shot(p,name,state,selector,full=false,role='FORMAL'){await settle(p);const out=path.join(dir,name);if(selector)await p.locator(selector).screenshot({path:out});else await p.screenshot({path:out,fullPage:full});const buf=fs.readFileSync(out);evidence.push({...record(out),width:buf.readUInt32BE(16),height:buf.readUInt32BE(20),viewport:p.viewportSize(),dpr:await p.evaluate(()=>devicePixelRatio),source_identity:lock.source_identity,state,role,scrollY:await p.evaluate(()=>scrollY)});}
  for(const width of widths){
   const p=await open(browser,width);
   await shot(p,'formal/FULL_'+width+'.png','default',null,true);
   const height=await p.evaluate(()=>document.documentElement.scrollHeight);let last=-1;
   for(let y=0;y<height;y+=900){await p.evaluate(y=>scrollTo(0,y),y);await settle(p);const actual=await p.evaluate(()=>scrollY);if(actual===last)break;last=actual;await shot(p,'readable/READ_'+width+'_'+actual+'.png','default-readable-scroll',null,false,'READABLE_SUPPORT');}
   await p.close();
  }
  for(const width of [768,390,320]){const p=await open(browser,width);await p.locator('.menuButton').click();await shot(p,'formal/MENU_'+width+'.png','mobile-menu-open',null,false);await p.close();}
  for(const width of [390,320]){
   const p=await open(browser,width);await p.locator('#cookie-trigger').click();await shot(p,'formal/COOKIE_'+width+'.png','cookie-dialog-open',null,false);await p.keyboard.press('Escape');
   await p.locator('#continue-request').click();await shot(p,'formal/ERROR_'+width+'.png','empty-grade-error','#grade-selector');
   await p.locator('#product-grade').selectOption('M-2196');await shot(p,'formal/SELECTED_'+width+'.png','selected-M-2196','#grade-selector');
   await p.locator('.faq-question').nth(1).click();await shot(p,'formal/FAQ_'+width+'.png','faq-2-open','.doc-faq');await p.close();
  }
  {const p=await open(browser,390);await p.locator('[data-hero-action]').focus();await shot(p,'formal/FOCUS_390.png','primary-keyboard-focus','.root-hero');await p.close();}
  {const p=await open(browser,1440);await p.locator('[data-hero-action]').hover();await shot(p,'formal/HOVER_1440.png','primary-hover','.root-hero');await p.close();}
  await browser.close();assertLock();json('evidence-index.json',{captured_at:new Date().toISOString(),source_identity:lock.source_identity,source_lock:record(path.join(dir,'source-lock.json')),rendering:lock.rendering,evidence});console.log(JSON.stringify({formal:evidence.filter(e=>e.role==='FORMAL').length,readable:evidence.filter(e=>e.role==='READABLE_SUPPORT').length,source:lock.source_identity}));
 }
 if(mode==='freeze'){
  const lock=assertLock(),index=read('evidence-index.json');if(fs.existsSync(path.join(dir,'freeze.json')))throw Error('Already frozen');
  const checks=[];for(const e of index.evidence){const b=fs.readFileSync(e.path);check(checks,'asset.'+path.basename(e.path),sha(e.path)===e.sha256&&b.length===e.bytes&&b.readUInt32BE(16)===e.width&&b.readUInt32BE(20)===e.height&&e.dpr===1&&e.source_identity===lock.source_identity,{sha256:sha(e.path),width:b.readUInt32BE(16),height:b.readUInt32BE(20)},'File identity/dimensions/DPR/source correspondence');}
  if(!fs.existsSync(path.join(dir,'capture-check.md')))throw Error('Actual author capture check required');
  json('machine-check.json',{status:checks.every(c=>c.result==='PASS')?'PASS':'FAIL',checks});
  if(checks.some(c=>c.result!=='PASS'))throw Error('Machine failure');
  const files=[...lock.sources,...lock.dependencies,record(path.join(dir,'source-lock.json')),record(path.join(dir,'evidence-index.json')),record(path.join(dir,'capture-check.md')),record(path.join(dir,'machine-check.json')),...index.evidence.map(e=>record(e.path))].sort((a,b)=>a.path.localeCompare(b.path));
  const bundle_id=crypto.createHash('sha256').update(JSON.stringify(files)).digest('hex');
  json('freeze.json',{freeze_id:'DOC000-D32-G4-V01',status:'COMPLETE_VISUAL_FROZEN / READY_FOR_GATE5_INDEPENDENT_REVIEW',author:'/root/doc_root_d32',source_identity:lock.source_identity,bundle_id,bundle_algorithm:'SHA256(UTF8(JSON.stringify(files))); files sorted path.localeCompare, each {path,bytes,sha256}, forward-slash absolute paths',files,formal_count:index.evidence.filter(e=>e.role==='FORMAL').length,readable_count:index.evidence.filter(e=>e.role==='READABLE_SUPPORT').length,runtime_checks:read('preflight.json').runtime_check_count,preflight_checks:read('preflight.json').checks.length,machine_checks:checks.length,review_required:'320px PROPOSED_CONTROLLED_NARROW_WIDTH_EXCEPTION; author does not approve it',frozen_at:new Date().toISOString()});
  console.log(JSON.stringify({bundle_id,source:lock.source_identity,freeze:record(path.join(dir,'freeze.json')),machine_checks:checks.length}));
 }
}
main().catch(e=>{console.error(e);process.exitCode=2});
