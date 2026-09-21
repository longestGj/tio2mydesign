// D23 delivery-document checks only; not a production test or Gate approval.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=path.resolve(__dirname,'../../..'),hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const rel=p=>path.relative(root,p).replaceAll('\\','/');
const inputs=[
'AGENTS.md','PROJECT_CONTEXT.md','01_PROJECT_INDEX.md','02_DIRECTORY_GUIDE.md',
'docs/architecture/GATE_WORKFLOW_V3.5.md','docs/architecture/GATE5_GATE6_ACCEPTANCE_CONTRACT_V1.1.md',
'docs/architecture/GATE6_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.3.md','agents/gate6-review-delivery/agent.md',
'skills/page-contract-consistency-review/SKILL.md','skills/development-delivery-specification/SKILL.md',
'docs/architecture/GATE6_EXECUTION_REVIEW_CONTRACT_V1.2.md','docs/architecture/GATE6_RESPONSIBILITY_BOUNDARY_DECISION_V1.0.md',
'docs/architecture/GATE8_CURRENT_RULES_V1.0.md','docs/architecture/GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.1.md',
'docs/architecture/STATIC_NEXTJS_SINGLE_SITE_AND_GOOGLE_INDEXING_DECISION_V1.0.md',
'docs/architecture/ROOT_PAGE_NARROW_VISUAL_AND_DOC_FEEDBACK_DECISION_V1.0.md',
'docs/architecture/PAGE_REGISTRY_V0.2.md','research/keyword/11_page_keyword_master.csv',
'docs/page-briefs/MARKET-000_MARKETS_BRIEF_V0.1.md','docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md',
'pages/markets/04_planning/MARKET-000_CONTENT_ARCHITECTURE_V0.1.md',
'pages/markets/04_planning/MARKET-000_SEO_GEO_SCHEMA_CONTRACT_V0.1.md',
'pages/markets/04_planning/visual-designs/MARKET-000_FULL_VISUAL_DESIGN_V0.4.md',
'pages/markets/05_review/MARKET-000_GATE5_APPROVED_BASELINE_MANIFEST_V0.1.md',
'pages/markets/MARKET-000_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md',
'pages/markets/05_review/MARKET-000_D32_GATE4_GATE5_HANDOFF_V0.2.md',
'pages/markets/05_review/MARKET-000_D32_GATE4_GATE5_CONTROLLER_CLOSURE_V0.1.md',
'pages/markets/05_review/MARKET-000_D32_GATE5_INDEPENDENT_REVIEW_V0.1.md',
'pages/markets/05_review/MARKET-000_D32_GATE5_TARGETED_RECHECK_R01_V0.1.md',
'docs/architecture/TIO2_MY_23_PAGE_PUBLICATION_CONTRACT_FINALIZATION_V1.0.md',
'pages/markets/brazil/MARKET-BR-PT_CURRENT_GATE_BASELINE_MANIFEST_V0.15.md',
'docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md',
'docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md',
'docs/architecture/ROOT_PAGE_HERO_OPEN_WHITE_SURFACE_ADDENDUM_V1.0.md',
'docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_APPROVED_BASELINE_MANIFEST_V1.0.md',
'brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md',
'brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md',
'brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md',
'docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md',
'docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md',
'pages/markets/06_handoff/MARKET-000_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md'
];
const records=inputs.map(p=>({path:p,exists:fs.existsSync(path.join(root,p)),sha256:fs.existsSync(path.join(root,p))?hash(path.join(root,p)):null}));
const fp=path.join(root,'pages/markets/04_planning/d32-gate4-v0.2/freeze.json'),f=JSON.parse(fs.readFileSync(fp));
const aggregate=crypto.createHash('sha256').update(f.files.map(x=>({p:rel(x.path),h:x.sha256})).sort((a,b)=>a.p.localeCompare(b.p)).map(x=>x.p+'\0'+x.h+'\n').join('')).digest('hex');
const identities=[...f.files,f.evidence_index].map(x=>({path:rel(x.path),expected:x.sha256,actual:hash(x.path),match:hash(x.path)===x.sha256}));
const html=fs.readFileSync(path.join(root,'pages/markets/04_planning/d32-gate4-v0.2/market-visual.html'),'utf8');
const fileRefs=[...html.matchAll(/(?:src|href)=["']([^"']+)["']/g)].map(x=>x[1]).concat([...html.matchAll(/url\(['"]?([^)'" ]+)/g)].map(x=>x[1])).filter(x=>!x.startsWith('/')&&!x.startsWith('#')&&!/^[a-z]+:/i.test(x));
const dependencies=[...new Set(fileRefs)].map(x=>{const p=path.resolve(path.dirname(fp),x);return {reference:x,path:rel(p),exists:fs.existsSync(p),sha256:fs.existsSync(p)?hash(p):null};});
const packagePath=path.join(__dirname,'MARKET-000_D32_GATE6_HANDOFF_PACKAGE_V0.1.md');
const checks=[];const check=(id,pass,detail)=>checks.push({id,pass,detail});
check('input_paths',records.every(x=>x.exists),records.filter(x=>!x.exists));
check('frozen_bundle_recomputed',aggregate===f.bundle_id&&f.bundle_id==='811d352708f175ec47058ba2d043bfd5a9fc92492b7675a1609d2846d9051ca1',aggregate);
const permitted='docs/architecture/ROOT_PAGE_NARROW_VISUAL_AND_DOC_FEEDBACK_DECISION_V1.0.md';
check('all_non_governance_bytes_unchanged',identities.filter(x=>x.path!==permitted).every(x=>x.match),identities.filter(x=>!x.match));
check('prototype_referenced_assets_exist',dependencies.every(x=>x.exists),dependencies.length);
if(fs.existsSync(packagePath)){
 const body=fs.readFileSync(packagePath,'utf8');
 const ac=[...body.matchAll(/^\| `(MKT-D32-AC-\d+)` \|/gm)].map(x=>x[1]);
 const dep=[...body.matchAll(/^\| `((?:MARKET-G6-B\d+|MKT-R\d+|MKT-D32-DEP-\d+))` \|/gm)].map(x=>x[1]);
 check('AC_unique',ac.length===new Set(ac).size,{count:ac.length,ids:ac});
 check('dependencies_unique',dep.length===new Set(dep).size,{count:dep.length,ids:dep});
 check('all_AC_references_defined',[...body.matchAll(/MKT-D32-AC-\d+/g)].every(x=>ac.includes(x[0])),'Definitions/references');
 check('canonical_current',body.includes('https://tio2malaysia.com/markets/'),'Current approved origin');
 check('scope_not_production_contract',!body.includes('site_scope='),'No obsolete multisite contract');
 check('not_self_approved',body.includes('独立审查未执行')&&body.includes('HANDED_OFF=NO'),'Author-only boundary');
}
const result={checkedAt:new Date().toISOString(),kind:'D23_CONTRACT_MACHINE_SELF_CHECK_NOT_PRODUCTION',checks,passed:checks.filter(x=>x.pass).length,failed:checks.filter(x=>!x.pass).length,freeze:{path:rel(fp),sha256:hash(fp),declaredBundle:f.bundle_id,recomputedBundle:aggregate,records:identities.length,exact:identities.filter(x=>x.match).length,drift:identities.filter(x=>!x.match)},inputs:records,prototypeDependencies:dependencies,package:fs.existsSync(packagePath)?{path:rel(packagePath),sha256:hash(packagePath)}:null,limitations:'Existence/bytes/ID checks only; semantic author check is in package; no browser/render/runtime or independent review.'};
fs.writeFileSync(path.join(__dirname,'MARKET-000_D32_GATE6_CONTRACT_SELF_CHECK_V0.1.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({passed:result.passed,failed:result.failed,freeze:result.freeze,missing:records.filter(x=>!x.exists),dependencies,package:result.package},null,2));
process.exitCode=result.failed?1:0;
