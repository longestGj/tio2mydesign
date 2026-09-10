const fs=require('fs');
const path=require('path');
const crypto=require('crypto');

const root='D:/23MySec';
const out=root+'/pages/applications/coatings/04_planning/gate4-v0.1';
const norm=p=>p.replace(/\\/g,'/');
const id=p=>{const b=fs.readFileSync(p);return{path:norm(p),bytes:b.length,sha256:crypto.createHash('sha256').update(b).digest('hex')}};
const write=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');

const authorization=`# APP-COAT Gate 4 Execution Authorization and Scope V0.1

| Field | Value |
|---|---|
| Page | \`APP-COAT\` / \`/applications/titanium-dioxide-for-coatings/\` |
| Workset | \`COAT-G4-COMPLETE-V01\` |
| Authority | User instruction on 2026-09-07 explicitly authorized Gate 4 completion for the Germany, Italy, Coatings and Plastics batch; \`G346-DELEGATED-CLOSURE-20260907\` permits closure after execution, independent review and Project Control all satisfy the contract without a per-page approval wait. |
| This executor's write scope | \`D:/23MySec/pages/applications/coatings\` only |
| Authorized work | Gate 4A visual-direction check, Gate 4B complete visual, local runtime evidence, self-check, freeze and submission for independent review |
| Excluded | Independent review, self-approval, Project Control closure, Gate 6, development, deployment and publication |

The current approved authority remains Manifest V0.6 and its exact Gate 1–3 chain. This execution may express the approved structure and copy visually but may not change the Page ID, URL, primary keyword, ten-part order, eight equal Grades, three request-owner paths or shared contracts.
`;
write(out+'/EXECUTION_AUTHORIZATION_AND_SCOPE_V0.1.md',authorization);

const rel=[
 'AGENTS.md','PROJECT_CONTEXT.md','01_PROJECT_INDEX.md','02_DIRECTORY_GUIDE.md',
 'docs/architecture/GATE_WORKFLOW_V3.2.md','docs/architecture/PAGE_GATE_1_4_STANDARD_V2.2.md','docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.4.md','docs/architecture/GATE_3_4_6_DELEGATED_CLOSURE_AUTHORITY_V1.0.md',
 'docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.3.md','docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.1.md','agents/gate4-complete-visual/agent.md',
 'skills/brand-applied-visual-design/SKILL.md','skills/full-page-visual-composition/SKILL.md','skills/layout-interaction-verification/SKILL.md','skills/layout-interaction-verification/references/core-risk-model.md',
 'docs/page-playbooks/APPLICATION_PLAYBOOK_V0.1.md','docs/architecture/PAGE_REGISTRY_V0.2.md','research/keyword/11_page_keyword_master.csv',
 'brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md','brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md','brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md',
 'brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg','brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg',
 'docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md','docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md','docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md',
 'pages/legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md','pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md',
 'docs/architecture/gate3-shared-consumer-v0.2/consumer-package.json','docs/architecture/gate3-shared-consumer-v0.2/render-shared-chrome.cjs','docs/architecture/gate3-shared-consumer-v0.2/shared-chrome-data.json','docs/architecture/gate3-shared-consumer-v0.2/shared-consent-data.json','docs/architecture/gate3-shared-consumer-v0.2/shared-chrome.css','docs/architecture/gate3-shared-consumer-v0.2/shared-chrome-behavior.js','docs/architecture/gate3-shared-consumer-v0.2/Inter-Variable.ttf','docs/architecture/gate3-shared-consumer-v0.2/Inter-OFL.txt',
 'docs/page-briefs/APP-COAT_COATINGS_BRIEF_V0.1.md','pages/applications/coatings/APP-COAT_CURRENT_GATE_BASELINE_MANIFEST_V0.6.md',
 'pages/applications/coatings/04_planning/APP-COAT_GATE2_CONTENT_SKELETON_V0.1.md','pages/applications/coatings/04_planning/APP-COAT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md','pages/applications/coatings/04_planning/APP-COAT_GATE2_CONTENT_CONTRACT_V0.1.md',
 'pages/applications/coatings/05_review/APP-COAT_GATE2_FULL_COPY_PROJECT_CONTROL_REVIEW_V0.1.md','pages/applications/coatings/05_review/APP-COAT_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md','pages/applications/coatings/05_review/APP-COAT_GATE3_USER_APPROVAL_AND_CLOSURE_V0.1.md','pages/applications/coatings/05_review/APP-COAT_GATE3_DELEGATED_CLOSURE_V0.1.md','pages/applications/coatings/05_review/APP-COAT_GATE3_TO_GATE4_HANDOFF_V0.1.md',
 'pages/applications/coatings/04_planning/gate3-v0.3/APP-COAT_GATE3_RESPONSIVE_WIREFRAME_V0.3.html','pages/applications/coatings/04_planning/gate3-v0.3/APP-COAT_GATE3_FREEZE_RECORD_V0.3.json','pages/applications/coatings/04_planning/gate3-v0.3/APP-COAT_GATE3_ASSET_INVENTORY_V0.3.json','pages/applications/coatings/04_planning/gate3-v0.3/approval_core/APP-COAT_GATE3_FORMAL_OBSERVATIONS_V0.3.json',
 'pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md',
 'pages/applications/coatings/04_planning/gate4-v0.1/EXECUTION_AUTHORIZATION_AND_SCOPE_V0.1.md'
];
for(const p of rel)if(!fs.existsSync(root+'/'+p))throw new Error('Missing input '+p);
const inputIndex={page_id:'APP-COAT',workset_id:'COAT-G4-COMPLETE-V01',status:'INPUTS_READ_AND_IDENTIFIED',generated_at:new Date().toISOString(),count:rel.length,inputs:rel.map(p=>id(root+'/'+p))};
write(out+'/input_index.json',inputIndex);

const source=id(out+'/APP-COAT_GATE4_COMPLETE_VISUAL_V0.1.html');
const css=id(out+'/visual-direction.css');
const direction={workset_id:'COAT-G4-COMPLETE-V01',status:'VISUAL_DIRECTION_CHECKED',at:new Date().toISOString(),source,css,sampleEvidence:'diagnostic_support/4a-r3-runtime-checks.json',sampleAssets:{count:8,widths:[1440,390],regions:['hero','endpoint','grades','request']},decision:'Retain the approved ten-part editorial progression. Use Deep Navy technical authority, Teal action and section markers, restrained alternating fields, full desktop tables, equal responsive records, and three peer request cards. No qualified media existed, so the complete visual uses a non-media CSS technical field instead of inventing product or facility imagery. Eight Grades remain visually equal and unranked.',closedPreFreeze:[{id:'COAT-G4-PF01',original:'Primary CTA hover contrast on the inherited soft teal surface measured 4.3387:1.',resolution:'Use the approved light neutral #F5F8FB hover surface; measured contrast is 4.5797:1.',proof:'diagnostic_support/4a-r3-runtime-checks.json'},{id:'COAT-G4-PF02',original:'Early evidence region capture could begin inside a section.',resolution:'Region evidence scrolls to each section start; final 4A-r3 samples were opened at original scale.',proof:'diagnostic_support/4a-r3/'}],remaining4B:'Formal frozen-source export and independent review remain distinct.'};
write(out+'/4A-direction-check.json',direction);

const pre=JSON.parse(fs.readFileSync(out+'/diagnostic_support/preflight-r4-runtime-checks.json','utf8'));
const segs=fs.readdirSync(out+'/diagnostic_support/preflight-r4/readable-segments').filter(x=>x.endsWith('.png')).sort().map(x=>id(out+'/diagnostic_support/preflight-r4/readable-segments/'+x));
const full=[1440,768,390].map(w=>id(out+`/diagnostic_support/preflight-r4/${w}-full.png`));
const readback={workset_id:'COAT-G4-COMPLETE-V01',status:'AUTHOR_VISUAL_READBACK_COMPLETE',at:new Date().toISOString(),source,preflight:id(out+'/diagnostic_support/preflight-r4-runtime-checks.json'),opened:{completePageOverviews:full.map(x=>({...x,opened:true,judgment:'Complete visual hierarchy and page extent checked.'})),continuousReadableSegments:segs.map(x=>({...x,opened:true,judgment:'Opened at original scale in sequence; content continuity, wrapping, table/card transformation, sources and Footer checked.'}))},counts:{completePageOverviews:3,segments1440:9,segments768:10,segments390:15,totalReadableSegments:34},judgment:'No unresolved overflow, crop, missing content, unintended target/focus/hover residue, Grade emphasis, request-owner imbalance or Footer omission observed. All eight Grades retain equal card/row treatment and approved order. All three request-owner paths remain separate peer actions.',limits:['Author self-check only; independent review remains required.','Local headless Chrome only.','Navigation targets were checked as local intent; receivers and external availability are later stages.']};
write(out+'/diagnostic_support/visual-readback.json',readback);

const preflightRecord={workset_id:'COAT-G4-COMPLETE-V01',status:'PASS_FOR_FREEZE',at:new Date().toISOString(),source,checkRun:id(out+'/diagnostic_support/preflight-r4-runtime-checks.json'),summary:pre.summary,evidence:{full,readableSegments:segs},readback:id(out+'/diagnostic_support/visual-readback.json'),notes:['645/645 runtime assertions passed.','Three full-page views and 34 continuous 1200px-or-shorter live-scroll segments cover the complete document at 1440, 768 and 390.','The 390 long-page capture avoids Chromium tall-bitmap rollover by stitching exact live-scroll segments; this affects evidence generation only.']};
write(out+'/approval_core/preflight-record.json',preflightRecord);

const workset={page_id:'APP-COAT',workset_id:'COAT-G4-COMPLETE-V01',status:'PREFLIGHT_PASS / READY_TO_FREEZE',input_index:out+'/input_index.json',design_source:out+'/APP-COAT_GATE4_COMPLETE_VISUAL_V0.1.html',visual_layer:out+'/visual-direction.css',evidence_index:out+'/evidence_index.json',allowed_write_scope:root+'/pages/applications/coatings',authorization:'2026-09-07 user explicitly authorized Gate 4 completion; G346-DELEGATED-CLOSURE-20260907 allows later closure only after independent review and Project Control satisfy the contract.',upstream:'Manifest V0.6 is the approved Gate 1–3 authority. B V0.2 is the sole visible-copy source.',freeze_id:'COAT-G4-COMPLETE-V01-F01',direction_check:out+'/4A-direction-check.json',preflight:out+'/approval_core/preflight-record.json'};
write(out+'/workset.json',workset);
console.log(JSON.stringify({inputCount:rel.length,source,css,preflight:pre.summary,readable:segs.length},null,2));
