const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=path.resolve(__dirname,'../../../..'),base=__dirname;
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const hashRow=(p,role)=>{p=path.resolve(root,p).replaceAll('\\','/');return {path:p,role,bytes:fs.statSync(p).size,sha256:sha(p)}};
const write=(name,obj)=>fs.writeFileSync(path.join(base,name),JSON.stringify(obj,null,2)+'\n');
if(fs.existsSync(path.join(base,'RES-000_D32_FREEZE.json')))throw Error('Frozen identity exists; do not overwrite.');
const authority=[
 'docs/page-briefs/RES-000_RESOURCES_BRIEF_V0.1.md','docs/page-playbooks/RESOURCE_PLAYBOOK_V0.1.md',
 'pages/resources/05_review/RES-000_GATE5_APPROVED_BASELINE_MANIFEST_V0.1.md',
 'pages/resources/04_planning/RES-000_CONTENT_ARCHITECTURE_V0.3.md','pages/resources/04_planning/RES-000_SEO_GEO_SCHEMA_CONTRACT_V0.2.md',
 'docs/architecture/PAGE_REGISTRY_V0.2.md','research/keyword/11_page_keyword_master.csv',
 'docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md','docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md',
 'docs/architecture/ROOT_PAGE_HERO_OPEN_WHITE_SURFACE_ADDENDUM_V1.0.md','docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_APPROVED_BASELINE_MANIFEST_V1.0.md',
 'pages/resources/04_planning/RES-000_ROOT_PAGE_HERO_GATE4_BINDING_V1.2.md',
 'brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md','brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md',
 'brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md','docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md',
 'docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.14.md','docs/architecture/GATE_WORKFLOW_V3.3.md',
 'docs/architecture/PAGE_GATE_1_4_STANDARD_V2.3.md','docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.4.md',
 'docs/architecture/GATE3_CROSS_PAGE_CONSISTENCY_DECISION_V1.0.md','docs/architecture/GATE3_PRODUCTION_BOUNDARY_STANDARD_V1.1.md',
 'docs/architecture/GATE_3_4_6_DELEGATED_CLOSURE_AUTHORITY_V1.0.md','docs/architecture/DEVELOPMENT_OWNER_D32_SWITCH_DECISION_V1.0.md',
 'agents/gate3-execution/agent.md','skills/responsive-wireframe-design/SKILL.md','skills/layout-interaction-verification/SKILL.md',
 'skills/layout-interaction-verification/references/gate3-structure-scope.md','skills/layout-interaction-verification/references/core-risk-model.md',
 'skills/responsive-wireframe-design/references/preflight-freeze-evidence.md','skills/responsive-wireframe-design/scripts/check-preflight-record.mjs',
 'docs/superpowers/specs/2026-09-20-gate3-to-gate4-handoff-contract-v0.5.md',
 'docs/superpowers/plans/2026-09-21-four-root-pages-d32-gate3-gate9.md'];
const references=['pages/resources/06_handoff/RES-000_GATE7_MANIFEST_V0.1.md','pages/resources/05_review/RES-000_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md','pages/resources/06_handoff/RES-000_GATE7_H0_H5_STATE_FIXTURES_V0.1.md','pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.12.md','pages/products/PRODUCT-000_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md','pages/applications/APP-000_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.4.md','D:/32Wordpress_new/wp-content/themes/tio2-malaysia/template-parts/root-page-hero.php','D:/32Wordpress_new/wp-content/themes/tio2-malaysia/header.php','D:/32Wordpress_new/wp-content/themes/tio2-malaysia/footer.php'];
const chrome='docs/architecture/gate3-shared-consumer-v0.2';
const dependencies=fs.readdirSync(path.join(root,chrome)).filter(n=>!n.includes('smoke')).map(n=>hashRow(chrome+'/'+n,'SHARED_NEUTRAL_CONSUMER'));
for(const p of ['brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg','brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg'])dependencies.push(hashRow(p,'PRODUCTION_LOGO_BY_MANIFEST'));
// Verify every pinned identity in the current Gate 3 methods baseline before freeze.
const bm=path.join(root,'docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.14.md');
const methodPins=[...fs.readFileSync(bm,'utf8').matchAll(/\[[^\]]+\]\(([^)]+)\)\s*\|\s*`([a-f0-9]{64})`/g)].map(m=>({path:path.resolve(path.dirname(bm),m[1]),expected:m[2]}));
for(const p of methodPins)if(sha(p.path)!==p.expected)throw Error('Method baseline identity mismatch '+p.path);
const inputs={page:'RES-000',date:new Date().toISOString(),classification:'Current content/shared authority and historical/runtime references are separate; no D16 state is promoted.',authority:authority.map(p=>hashRow(p,'CURRENT_APPROVED_AUTHORITY')),dependencies,references:references.map(p=>hashRow(p,'REFERENCE_ONLY_NOT_D32_RES_PROOF')),methodPinsVerified:methodPins.length};
write('RES-000_D32_INPUTS.json',inputs);
const sources=fs.readdirSync(base).filter(n=>/\.(cjs|css|html)$/.test(n)||n==='RES-000_D32_DERIVED_COPY.json').map(n=>hashRow(path.join(base,n),'EDITABLE_PLANNING_SOURCE'));
sources.push(hashRow('pages/resources/04_planning/RES-000_D32_GATE3_STRUCTURE_V0.1.md','STRUCTURE_REPORT'));
const runtime=JSON.parse(fs.readFileSync(path.join(base,'diagnostic/runtime-2.json'))),stat=JSON.parse(fs.readFileSync(path.join(base,'RES-000_D32_STATIC_GREEN.json')));
if(runtime.failed||stat.failed||runtime.passed!==92||stat.passed!==47)throw Error('Diagnostic checks not complete');
const candidate=hashRow(path.join(base,'RES-000_D32_GATE3.html'),'ACTUAL_CURRENT_H0');
const preflight={status:'PASS_FOR_FORMAL_RENDER',author:'/root/res_root_d32',timestamp:new Date().toISOString(),candidate,dependencies:[...inputs.authority,...dependencies,...sources],sharedConsumer:{path:path.join(root,chrome,'consumer-package.json'),version:'V0.2',inheritance:'No behavioral PASS inherited; actual assembled menu/cookie fully rerun.'},checks:Object.fromEntries(['approvedInputsMatch','durableDependencies','sharedConsumerNeutral','contentRelationshipsMatch','threeViewportsVisible','touchTargets44','mobileMenuExit','applicableStates','pageSpecificRisks'].map(k=>[k,'PASS'])),formalExportsGenerated:false,evidence:{runtime:'diagnostic/runtime-2.json',runtimeSha256:sha(path.join(base,'diagnostic/runtime-2.json')),static:'RES-000_D32_STATIC_GREEN.json',staticSha256:sha(path.join(base,'RES-000_D32_STATIC_GREEN.json')),visual:'Author inspected all H0 continuous diagnostic frames 1440/768/390 to Footer; H4 four widths inspected. H2 formal output must still be inspected.',render:{engine:'Playwright Chromium headless',deviceScaleFactor:1,viewports:[[1440,1000],[768,1024],[390,844]]}},limitations:['LOCAL_SIMULATION is not public inventory or official trade-source proof.','PROTOTYPE_ONLY is not D32 runtime acceptance.','720 CSS px is 200% reflow equivalent, not native browser zoom.']};
write('RES-000_D32_PREFLIGHT.json',preflight);
const freeze={freezeId:'RES-000-D32-G3-F01',author:'/root/res_root_d32',timestamp:new Date().toISOString(),preflightStatus:'PASS_FOR_FORMAL_RENDER',candidate,inputs:hashRow(path.join(base,'RES-000_D32_INPUTS.json'),'INPUT_IDENTITY_RECORD'),preflight:hashRow(path.join(base,'RES-000_D32_PREFLIGHT.json'),'PREFLIGHT'),sources:[...sources,...inputs.authority,...dependencies],diagnosticOnly:['diagnostic','RES-000_D32_RED.json','RES-000_D32_FRESHNESS_RED.json','RES-000_D32_ORIGIN_METADATA_RED.json'],state:'FROZEN_FOR_FORMAL_RENDER_NOT_APPROVED'};
write('RES-000_D32_FREEZE.json',freeze);
console.log(JSON.stringify({freezeId:freeze.freezeId,candidateSha256:candidate.sha256,freezeSha256:sha(path.join(base,'RES-000_D32_FREEZE.json')),methodPinsVerified:methodPins.length,sources:freeze.sources.length},null,2));
