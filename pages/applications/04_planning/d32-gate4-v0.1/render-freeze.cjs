const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const dir=__dirname,root=path.resolve(dir,'../../../..');
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const id=p=>({path:path.relative(root,p).replaceAll('\\','/'),bytes:fs.statSync(p).size,sha256:sha(p)});
const json=(name,data)=>fs.writeFileSync(path.join(dir,name),JSON.stringify(data,null,2));
if(fs.existsSync(path.join(dir,'freeze.json')))throw Error('Immutable bundle exists; do not overwrite');
const runtime=JSON.parse(fs.readFileSync(path.join(dir,'runtime-observations.json')));
if(runtime.status!=='PASS'||runtime.failed.length||runtime.viewports.length!==5)throw Error('Passing five-width INITIAL required');
const inputs=[
 'AGENTS.md','PROJECT_CONTEXT.md','02_DIRECTORY_GUIDE.md',
 'pages/applications/APP-000_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md',
 'pages/applications/05_review/APP-000_D32_GATE3_TO_GATE4_HANDOFF_V0.1.md',
 'pages/applications/05_review/APP-000_D32_GATE3_CONTROLLER_CLOSURE_V0.1.md',
 'pages/applications/04_planning/d32-gate3-v0.2/application-planning.html',
 'pages/applications/04_planning/d32-gate3-v0.2/freeze.json',
 'pages/applications/04_planning/APP-000_GATE2_FULL_BUYER_CLEAN_COPY_V1.0.md',
 'pages/applications/04_planning/APP-000_GATE2_CONTENT_CONTRACT_V1.0.md',
 'pages/applications/04_planning/APP-000_PRODUCT_V0.3_RELATION_CONTENT_DELTA_V0.1.md',
 'docs/page-briefs/APP-000_APPLICATIONS_BRIEF_V0.1.md','docs/page-playbooks/APPLICATION_PLAYBOOK_V0.1.md',
 'docs/architecture/PAGE_REGISTRY_V0.2.md','research/keyword/11_page_keyword_master.csv',
 'pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.12.md',
 'pages/home/07_qa/HOME-001_D32_GATE9_VISUAL_INTERACTION_REVIEW_V0.1.md',
 'pages/home/07_qa/d32-gate9-v0.1/visual/runtime-1440.png',
 'pages/home/07_qa/d32-gate9-v0.1/visual/runtime-1024-segment-0.png',
 'docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.10.md',
 'docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.3.md',
 'agents/gate4-complete-visual/agent.md','skills/brand-applied-visual-design/SKILL.md','skills/full-page-visual-composition/SKILL.md','skills/layout-interaction-verification/SKILL.md','skills/layout-interaction-verification/references/gate4-self-check.md',
 'docs/architecture/GATE4_GATE5_VISUAL_HANDOFF_CONTRACT_V1.0.md','docs/superpowers/specs/2026-09-20-gate3-to-gate4-handoff-contract-v0.5.md',
 'docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md','docs/architecture/ROOT_PAGE_HERO_OPEN_WHITE_SURFACE_ADDENDUM_V1.0.md',
 'brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md','brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md',
 'brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md','docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md','docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md'
].map(p=>id(path.join(root,p)));
const dependencies=['docs/architecture/gate3-shared-consumer-v0.2/consumer-package.json','docs/architecture/gate3-shared-consumer-v0.2/render-shared-chrome.cjs','docs/architecture/gate3-shared-consumer-v0.2/shared-chrome.css','docs/architecture/gate3-shared-consumer-v0.2/shared-chrome-behavior.js','docs/architecture/gate3-shared-consumer-v0.2/shared-chrome-data.json','docs/architecture/gate3-shared-consumer-v0.2/shared-consent-data.json','docs/architecture/gate3-shared-consumer-v0.2/Inter-Variable.ttf','docs/architecture/gate3-shared-consumer-v0.2/Inter-OFL.txt','brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg','brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg'].map(p=>id(path.join(root,p)));
const source=['application-visual.html','visual.css'].map(p=>id(path.join(dir,p)));
if(runtime.source_sha256!==source[0].sha256)throw Error('INITIAL source drift');
const workset='APP-000-D32-G4-V0.1';
json('input-index.json',{workset_id:workset,authority_manifest:inputs[3],inputs,dependencies});
json('source-lock.json',{workset_id:workset,locked_at:new Date().toISOString(),source,dependencies,inputs,renderer:'Playwright Chromium; native DPR1; local file; Inter actual font',widths:[1440,1024,768,390,320]});
json('preflight.json',{workset_id:workset,status:'PASS_FOR_FORMAL_RENDER',initial:id(path.join(dir,'runtime-observations.json')),direction:id(path.join(dir,'4A-direction.md')),source_lock:id(path.join(dir,'source-lock.json')),checks:runtime.checks.length,mandatory_findings:[],formal_generated:false});
(async()=>{const b=await chromium.launch({headless:true});const captures=[];
const fresh=async width=>{const p=await b.newPage({viewport:{width,height:1000},deviceScaleFactor:1,reducedMotion:'reduce'});await p.goto(pathToFileURL(path.join(dir,'application-visual.html')).href);await p.evaluate(()=>document.fonts.ready);return p;};
const capture=async(p,name,state,full=true)=>{await p.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));if(full){await p.evaluate(()=>{document.activeElement.blur();scrollTo(0,0);});await p.mouse.move(0,0);await p.locator('html').screenshot({path:path.join(dir,name)});}else await p.screenshot({path:path.join(dir,name)});const data=fs.readFileSync(path.join(dir,name));captures.push({...id(path.join(dir,name)),state,logical_width:p.viewportSize().width,logical_viewport_height:1000,dpr:1,physical_width:data.readUInt32BE(16),physical_height:data.readUInt32BE(20),full_document:full,type:state.startsWith('route')?'STATIC_VISUAL/LOCAL_SIMULATION':'STATIC_VISUAL'});};
try{
 for(const width of [1440,1024,768,390,320]){const p=await fresh(width);await capture(p,`APP-000_G4_FULL_${width}.png`,'full');await p.close();}
 for(const width of [390,320]){const p=await fresh(width);await p.locator('#cookie-trigger').click();await capture(p,`APP-000_G4_COOKIE_${width}.png`,'cookie-open',false);await p.close();}
 const p=await fresh(390);await p.locator('.menuButton').click();await capture(p,'APP-000_G4_MENU_390.png','menu-open',false);await p.keyboard.press('Escape');
 for(const state of ['grade-only','application-only','none']){await p.evaluate(s=>window.appPlanning.setScenario(s),state);await capture(p,`APP-000_G4_ROUTE_${state.toUpperCase().replaceAll('-','_')}_390.png`,'route-'+state);}
 await p.evaluate(()=>window.appPlanning.setScenario('full'));await p.keyboard.press('Tab');await p.locator('.actions .primary').focus();await capture(p,'APP-000_G4_PRIMARY_FOCUS_390.png','primary-focus',false);await p.close();
 const t=await fresh(768);await t.keyboard.press('Tab');await t.locator('[data-grade-link]').first().focus();await capture(t,'APP-000_G4_GRADE_FOCUS_768.png','grade-focus',false);await t.close();
 const d=await fresh(1440);await d.locator('.heroLinks a').last().hover();await capture(d,'APP-000_G4_NAV_HOVER_1440.png','navigation-hover',false);await d.close();
 for(const record of [...source,...dependencies,...inputs])if(sha(path.join(root,record.path))!==record.sha256)throw Error('Source/input/dependency drift: '+record.path);
 json('formal-render.json',{workset_id:workset,source_lock:id(path.join(dir,'source-lock.json')),browser:b.version(),dpr:1,captured_at:new Date().toISOString(),captures,full_route_evidence:'APP-000_G4_FULL_390.png reused for full state; no duplicate raster',identity_check:'PASS',capture_check:'PENDING_ACTUAL_IMAGE_VIEW'});
 console.log(JSON.stringify({status:'FORMAL_RENDER_COMPLETE',formal_assets:captures.length,source},null,2));
}finally{await b.close();}})().catch(e=>{console.error(e);process.exit(1)});
