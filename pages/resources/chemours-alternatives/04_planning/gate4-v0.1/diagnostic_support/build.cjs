const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root='D:/23MySec',base=path.resolve(__dirname,'..');
const id=p=>({path:p.replaceAll('\\','/'),bytes:fs.statSync(p).size,sha256:crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')});
const g3=root+'/pages/resources/chemours-alternatives/04_planning/gate3-v0.1/RES-CHEMOURS_GATE3_RESPONSIVE_WIREFRAME_V0.2.html';
fs.mkdirSync(base+'/dependencies',{recursive:true});fs.mkdirSync(base+'/approval_core',{recursive:true});
for(const f of ['Inter-Variable.ttf','Inter-OFL.txt'])fs.copyFileSync(root+'/docs/architecture/gate3-shared-consumer-v0.2/'+f,base+'/dependencies/'+f);
const inputPaths=[
'AGENTS.md','PROJECT_CONTEXT.md','02_DIRECTORY_GUIDE.md',
'docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.7.md','agents/gate4-complete-visual/agent.md','docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.2.md',
'skills/brand-applied-visual-design/SKILL.md','skills/full-page-visual-composition/SKILL.md','skills/layout-interaction-verification/SKILL.md','skills/layout-interaction-verification/references/gate4-self-check.md','skills/layout-interaction-verification/references/core-risk-model.md',
'docs/architecture/GATE_WORKFLOW_V3.2.md','docs/architecture/PAGE_GATE_1_4_STANDARD_V2.2.md','docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.4.md','docs/architecture/GATE_3_4_6_DELEGATED_CLOSURE_AUTHORITY_V1.0.md',
'docs/page-briefs/RES-CHEMOURS_CHEMOURS_TITANIUM_DIOXIDE_ALTERNATIVES_BRIEF_V0.1.md','docs/page-playbooks/RESOURCE_PLAYBOOK_V0.1.md','docs/architecture/PAGE_REGISTRY_V0.2.md','research/keyword/11_page_keyword_master.csv','docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md',
'brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md','brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md','brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md','docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md','docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md','docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md',
'pages/legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md','pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md',
'docs/architecture/gate3-shared-consumer-v0.2/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md','docs/architecture/gate3-shared-consumer-v0.2/consumer-package.json'];
const page='pages/resources/chemours-alternatives/';
inputPaths.push(page+'RES-CHEMOURS_CURRENT_GATE_BASELINE_MANIFEST_V0.17.md',...['RES-CHEMOURS_GATE2_CONTENT_SKELETON_V0.3.md','RES-CHEMOURS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md','RES-CHEMOURS_GATE2_CONTENT_CONTRACT_V0.7.md'].map(f=>page+'04_planning/'+f),...['RES-CHEMOURS_GATE2_FINAL_USER_CONFIRMATION_V0.1.md','RES-CHEMOURS_GATE3_USER_APPROVAL_AND_CLOSURE_V0.1.md','RES-CHEMOURS_GATE3_TO_GATE4_HANDOFF_V0.1.md'].map(f=>page+'05_review/'+f));
const auth=root+'/docs/architecture/GATE4_REMAINING_EIGHT_EXECUTION_CONTROL_V1.0.md';fs.copyFileSync(auth,base+'/dependencies/authorization-at-start.md');
const inputIndex={workset_id:'RESCH-G4-WS-01',page_id:'RES-CHEMOURS',actual_author:'/root/gate4_chemours_execute',authority_manifest:root+'/'+page+'RES-CHEMOURS_CURRENT_GATE_BASELINE_MANIFEST_V0.17.md',authorization:{original:auth,snapshot:id(base+'/dependencies/authorization-at-start.md'),scope:'Gate4 only; stop READY_FOR_GATE5_REVIEW; no independent review, closure or Gate6'},navigation_only:['01_PROJECT_INDEX.md','00_PROJECT_STATUS.md'],allowed_write_scope:[base,root+'/'+page+'05_review/RES-CHEMOURS_GATE4_EXECUTION_SELF_CHECK_V0.1.md',root+'/'+page+'05_review/RES-CHEMOURS_GATE4_TO_GATE5_HANDOFF_V0.1.md'],inputs:inputPaths.map(p=>id(root+'/'+p)),gate3_source:id(g3)};
fs.writeFileSync(base+'/input_index.json',JSON.stringify(inputIndex,null,2)+'\n');
let html=fs.readFileSync(g3,'utf8');
const visual=`
/* Gate 4 page-only visual rules. Shared Chrome is byte-identical to approved Gate 3 consumption. */
main{padding-bottom:60px}
.hero{padding-top:40px;padding-bottom:56px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#008078}
.eyebrow:before{content:'';width:28px;height:3px;background:#008078;flex:none}
main h1{max-width:970px}
.hero p{max-width:830px}
.article-section{padding-top:48px;padding-bottom:48px}
.sectionNumber-3{background:#f5f8fb;padding:40px;border:1px solid #d9e2ec;border-radius:12px;margin:0 0 48px}
.brief-list{max-width:none;column-gap:52px;row-gap:30px;margin-top:28px}
.brief-list li{padding:0 0 0 4px}
.brief-list li::marker{color:#008078;font-weight:700}
.sectionNumber-4{padding-top:0;border-top:0}
.sectionNumber-4 h3{border-left:3px solid #008078;padding-left:18px;margin-top:32px}
.sectionNumber-4 h3+p{padding-left:21px}
.sectionNumber-5{padding-top:44px;padding-bottom:44px}
.sectionNumber-5>h3{font-size:24px}
.sectionNumber-6{padding-bottom:0}
main .primary:hover{background:#062b5b;border-color:#008078}
main .secondary:hover{background:#f5f8fb}
@media(max-width:1100px){.sectionNumber-3{padding:30px}.brief-list{column-gap:36px}.article-section{padding-top:40px;padding-bottom:40px}.sectionNumber-4{padding-top:0}.sectionNumber-6{padding-bottom:0}}
@media(max-width:650px){main{padding-bottom:44px}.hero{padding:30px 0 36px}.article-section{padding:34px 0}.sectionNumber-3{padding:28px 20px;margin-bottom:34px}.brief-list{padding-left:24px}.sectionNumber-4{padding-top:0}.sectionNumber-4 h3{padding-left:14px}.sectionNumber-4 h3+p{padding-left:17px}.sectionNumber-6{padding-bottom:0}}
`;
html=html.replace('</style>',visual+'</style>');
fs.writeFileSync(base+'/RES-CHEMOURS_GATE4_COMPLETE_VISUAL_V0.1.html',html);
console.log(JSON.stringify({source:id(base+'/RES-CHEMOURS_GATE4_COMPLETE_VISUAL_V0.1.html'),input_index:id(base+'/input_index.json')},null,2));
