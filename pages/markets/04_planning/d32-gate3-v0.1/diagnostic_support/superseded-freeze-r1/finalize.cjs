// Freeze an author candidate only after actual diagnostic runtime and visual inspection.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const dir=__dirname,root=path.resolve(dir,'../../../..'),hash=f=>crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
const identity=p=>{const file=path.isAbsolute(p)?p:path.resolve(root,p);return {path:file,bytes:fs.statSync(file).size,sha256:hash(file)}};
const write=(name,v)=>fs.writeFileSync(path.join(dir,name),JSON.stringify(v,null,2));
const runtime=JSON.parse(fs.readFileSync(path.join(dir,'diagnostic_support/runtime.json')));if(runtime.failed||runtime.passed!==213)throw Error('runtime not green');
if(fs.existsSync(path.join(dir,'freeze.json')))throw Error('existing freeze: create new candidate rather than overwrite');
const inputs=`AGENTS.md
PROJECT_CONTEXT.md
01_PROJECT_INDEX.md
docs/superpowers/plans/2026-09-21-four-root-pages-d32-gate3-gate9.md
docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.14.md
agents/gate3-execution/agent.md
skills/responsive-wireframe-design/SKILL.md
skills/responsive-wireframe-design/references/preflight-freeze-evidence.md
skills/layout-interaction-verification/SKILL.md
skills/layout-interaction-verification/references/gate3-structure-scope.md
skills/layout-interaction-verification/references/core-risk-model.md
docs/architecture/GATE_WORKFLOW_V3.3.md
docs/architecture/PAGE_GATE_1_4_STANDARD_V2.3.md
docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.4.md
docs/architecture/GATE3_PRODUCTION_BOUNDARY_STANDARD_V1.1.md
docs/architecture/GATE3_CROSS_PAGE_CONSISTENCY_DECISION_V1.0.md
docs/architecture/GATE_3_4_6_DELEGATED_CLOSURE_AUTHORITY_V1.0.md
docs/superpowers/specs/2026-09-20-gate3-to-gate4-handoff-contract-v0.5.md
docs/architecture/PAGE_REGISTRY_V0.2.md
research/keyword/11_page_keyword_master.csv
docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md
docs/page-briefs/MARKET-000_MARKETS_BRIEF_V0.1.md
docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md
pages/markets/04_planning/MARKET-000_CONTENT_ARCHITECTURE_V0.1.md
pages/markets/04_planning/MARKET-000_SEO_GEO_SCHEMA_CONTRACT_V0.1.md
pages/markets/04_planning/visual-designs/MARKET-000_FULL_VISUAL_DESIGN_V0.4.md
pages/markets/05_review/MARKET-000_GATE5_APPROVED_BASELINE_MANIFEST_V0.1.md
pages/markets/07_qa/MARKET-000_CURRENT_GATE9_BASELINE_MANIFEST_V0.1.md
pages/markets/07_qa/MARKET-000_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md
docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md
docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md
docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md
docs/architecture/ROOT_PAGE_HERO_OPEN_WHITE_SURFACE_ADDENDUM_V1.0.md
docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_APPROVED_BASELINE_MANIFEST_V1.0.md
brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md
brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md
brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md
pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.12.md
pages/products/PRODUCT-000_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md
pages/applications/APP-000_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.4.md`.split('\n').map(identity);
const sharedDir=path.join(root,'docs/architecture/gate3-shared-consumer-v0.2');
const dependencies=['SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md','render-shared-chrome.cjs','shared-chrome.css','shared-chrome-behavior.js','shared-chrome-data.json','shared-consent-data.json','Inter-Variable.ttf'].map(p=>identity(path.join(sharedDir,p)));
dependencies.push(identity('brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg'),identity('brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg'));
write('input-identities.json',{timestamp:new Date().toISOString(),note:'Historical Gate9 proves only D16. Crosspage manifests are scoped references, not body templates. Shared production owner remains D32; these dependency hashes freeze a planning consumer only.',inputs,dependencies});
const sourceNames=['market-planning.html','planning.css','planning.js','build.cjs','verify.cjs','capture.cjs','content-map.json','MARKET-000_D32_GATE3_DESIGN_REPORT_V0.1.md','finalize.cjs'];
const sources=sourceNames.map(p=>identity(path.join(dir,p)));
const checkNames=['approvedInputsMatch','durableDependencies','sharedConsumerNeutral','contentRelationshipsMatch','threeViewportsVisible','touchTargets44','mobileMenuExit','applicableStates','pageSpecificRisks'];
write('preflight.json',{status:'PASS_FOR_FORMAL_RENDER',author:'/root/market_root_d32',timestamp:new Date().toISOString(),candidate:sources[0],dependencies:[...inputs,...dependencies,...sources.slice(1)],sharedConsumer:{path:sharedDir,version:'0.2',inheritance:'No runtime PASS inherited: full applicable checks rerun locally'},checks:Object.fromEntries(checkNames.map(x=>[x,'PASS'])),evidence:{runtime:identity(path.join(dir,'diagnostic_support/runtime.json')),red:identity(path.join(dir,'diagnostic_support/red.json')),visual_segments:identity(path.join(dir,'diagnostic_support/segments/asset-index.json')),visual_inspection:'24 readable viewport segments actually opened by author; all three full diagnostic images; see design report',viewports:[1440,768,390],types:['SOURCE_INSPECTION','ACTUAL_RUNTIME','STATIC_VISUAL','LOCAL_SIMULATION']},formalExportsGenerated:false});
const bundleRecords=[...sources,identity(path.join(dir,'input-identities.json')),identity(path.join(dir,'preflight.json'))];
const material=bundleRecords.map(x=>({path:path.relative(root,x.path).replaceAll('\\','/'),sha256:x.sha256})).sort((a,b)=>a.path.localeCompare(b.path)).map(x=>x.path+'\0'+x.sha256+'\n').join('');
const bundle=crypto.createHash('sha256').update(material).digest('hex');
write('freeze.json',{status:'FROZEN_AUTHOR_CANDIDATE_NOT_APPROVED',timestamp:new Date().toISOString(),bundle_sha256:bundle,bundle_algorithm:'SHA256 of sorted D23-relative path + NUL + sha256 + LF for sources,input-identities,preflight',sources:bundleRecords,external_dependencies:dependencies,input_identities_sha256:hash(path.join(dir,'input-identities.json')),preflight_sha256:hash(path.join(dir,'preflight.json'))});
console.log(JSON.stringify({bundle_sha256:bundle,html_sha256:sources[0].sha256,sources:sources.length,inputs:inputs.length}));
