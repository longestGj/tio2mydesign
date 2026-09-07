const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root='D:/23MySec',out=path.resolve(__dirname,'..').replaceAll('\\','/'),page=root+'/pages/markets/spain';
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const id=p=>({path:p,relativePath:path.relative(out,p).replaceAll('\\','/'),bytes:fs.statSync(p).size,sha256:sha(p)});
const dest=out+'/approval_core/source-freeze.json';if(fs.existsSync(dest))throw Error('Already frozen');
const runtime=JSON.parse(fs.readFileSync(out+'/diagnostic_support/preflight-runtime-checks.json'));
if(runtime.errors.length)throw Error('Preflight failed');
const common=JSON.parse(fs.readFileSync(root+'/pages/products/chloride-process/04_planning/gate4-v0.1/approval_core/source-freeze.json')).inputs.filter(x=>['/AGENTS.md','/PROJECT_CONTEXT.md','/docs/architecture/PAGE_REGISTRY_V0.2.md','/research/keyword/11_page_keyword_master.csv','/brand/visual/','/docs/architecture/GLOBAL_','/brand/logo/production/','/pages/legal-privacy/','/skills/brand-applied-visual-design/','/skills/layout-interaction-verification/','/agents/gate4-execution/','/pages/products/04_planning/visual-designs/PRODUCT-000_FULL_VISUAL_DESIGN_V0.13.md','/pages/markets/poland/05_review/MARKET-EU-PL_GATE4_USER_APPROVAL','/pages/markets/poland/04_planning/gate4-v0.2/MARKET-EU-PL_GATE4_VISUAL_DIRECTION'].some(s=>x.path.includes(s)));
const commonIdentity=common.map(x=>({path:x.path,unchangedSincePriorRead:sha(x.path)===x.sha256}));if(commonIdentity.some(x=>!x.unchangedSincePriorRead))throw Error('Common source changed; reread needed');
const newInputs=[
 root+'/02_DIRECTORY_GUIDE.md',root+'/docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.0.md',root+'/docs/architecture/PAGE_GATE_1_5_STANDARD_V1.1.md',root+'/docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md',
 root+'/docs/architecture/GATE4_EIGHT_PAGE_SERIAL_CONTROL_V1.0.md',root+'/docs/superpowers/specs/2026-09-07-gate4-two-page-process-retrospective-v0.1.md',
 root+'/docs/page-briefs/MARKET-EU-ES_SPAIN_BRIEF_V0.2.md',page+'/MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md',page+'/MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md',
 page+'/04_planning/MARKET-EU-ES_GATE2_CONTENT_SKELETON_V0.2.md',page+'/04_planning/MARKET-EU-ES_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md',page+'/04_planning/MARKET-EU-ES_GATE2_CONTENT_CONTRACT_V0.4.md',
 page+'/05_review/MARKET-EU-ES_GATE3_TO_GATE4_HANDOFF_V0.1.md',page+'/05_review/MARKET-EU-ES_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md',page+'/05_review/MARKET-EU-ES_GATE3_PREAUTHORIZED_APPROVAL_AND_CLOSURE_V0.1.md',
 root+'/docs/architecture/GATE2_EIGHT_PAGE_USER_APPROVAL_AND_CLOSURE_V1.0.md',
 page+'/04_planning/gate3-v0.1/MARKET-EU-ES_GATE3_RESPONSIVE_WIREFRAME_V0.1.html',page+'/04_planning/gate3-v0.1/MARKET-EU-ES_GATE3_FREEZE_RECORD_V0.1.json',page+'/04_planning/gate3-v0.1/MARKET-EU-ES_GATE3_ASSET_INVENTORY_V0.1.json',page+'/04_planning/gate3-v0.1/MARKET-EU-ES_GATE3_INPUT_BINDING_V0.1.json',
 root+'/docs/architecture/gate3-shared-consumer-v0.2/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md',root+'/docs/architecture/gate3-shared-consumer-v0.2/consumer-package.json'
 ];
const shared=JSON.parse(fs.readFileSync(root+'/docs/architecture/gate3-shared-consumer-v0.2/consumer-package.json'));newInputs.push(...shared.files.map(f=>root+'/docs/architecture/gate3-shared-consumer-v0.2/'+f.path));
newInputs.push(...JSON.parse(fs.readFileSync(page+'/04_planning/gate3-v0.1/MARKET-EU-ES_GATE3_ASSET_INVENTORY_V0.1.json')).approval_core.assets.map(x=>x.path));
const inputs=[...new Set([...common.map(x=>x.path),...newInputs])].map(id);
const dependencies=['MARKET-EU-ES_GATE4_VISUAL_SAMPLES_V0.1.html','visual-direction.css',...fs.readdirSync(out+'/dependencies').map(x=>'dependencies/'+x)].map(x=>id(out+'/'+x));
const preflight={date:new Date().toISOString(),source:runtime.source,status:'AUTHOR_PREFLIGHT_PASS_NOT_INDEPENDENT_REVIEW',checks:id(out+'/diagnostic_support/preflight-runtime-checks.json'),sourceDerivation:id(out+'/diagnostic_support/source-derivation.json'),sourceUnchangedSinceChecks:runtime.source.sha256===sha(runtime.source.path),commonIdentity,observations:[
 {path:'preflight/1440-hero.png',type:'STATIC_VISUAL',observation:'Opened with view_image original. Full Header/Breadcrumb/Hero and both CTA preserved, no clipped text. Primary filled, secondary outline.'},
 {path:'preflight/768-applications.png',type:'STATIC_VISUAL',observation:'Opened original. Both peer groups and complete long prose visible; Plastics and Masterbatch links remain under their own prompt; common Products follows both.'},
 {path:'preflight/390-documents.png',type:'STATIC_VISUAL',observation:'Opened original. Complete grade-selection paragraph, COO limitation, outline request and supporting Hub visible. No badge/image implication.'},
 {path:'preflight/390-rfq.png',type:'STATIC_VISUAL',observation:'Opened original. Four complete bullets, unknown Grade paragraph, RFQ, complete human follow-up and subordinate EU links visible. Height960 from content, no truncation.'}
 ]};
if(!preflight.sourceUnchangedSinceChecks)throw Error('Source drift');fs.writeFileSync(out+'/approval_core/preflight-record.json',JSON.stringify(preflight,null,2));
fs.writeFileSync(dest,JSON.stringify({freezeId:'ES-G4-V01-SOURCE-01',date:new Date().toISOString(),status:'SOURCE_FROZEN_AFTER_AUTHOR_PREFLIGHT / DRAFT_FOR_PROJECT_CONTROL_REVIEW',entry:'MARKET-EU-ES_GATE4_VISUAL_SAMPLES_V0.1.html',dependencies,inputs,preflight:id(out+'/approval_core/preflight-record.json'),scope:'Spain Gate4 only; no Gate5; no production. Source and runtime dependencies must not change after this freeze. Formal PNGs are produced next and bound in export-inventory.json. Dynamic Status/Index/Progress excluded.'},null,2));
console.log(JSON.stringify({freeze:id(dest),source:dependencies[0],dependencies:dependencies.length,inputs:inputs.length}));
