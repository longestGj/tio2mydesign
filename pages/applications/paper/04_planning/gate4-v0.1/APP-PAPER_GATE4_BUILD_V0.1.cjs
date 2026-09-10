const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root='D:/23MySec',dir=__dirname;
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const identity=p=>{const b=fs.readFileSync(p);return {path:p.replaceAll('\\','/'),bytes:b.length,sha256:crypto.createHash('sha256').update(b).digest('hex')}};
const upstream='pages/applications/paper/04_planning/gate3-v0.3/APP-PAPER_GATE3_RESPONSIVE_WIREFRAME_V0.3.html';
let html=read(upstream);
const css=`
/* Gate 4 page-only visual parameters. Shared Chrome payload remains unchanged. */
body{font-size:17px;line-height:1.68}
.hero{background:#062b5b;padding:72px 32px 76px}
.hero h1{font-size:60px;line-height:1.08;letter-spacing:-.035em;max-width:900px}
.hero>.heroInner>p{max-width:900px;font-size:19px;line-height:1.65}
.hero>.heroInner>p+p{font-size:17px;line-height:1.7;color:#e2eaf3}
.heroActions a{font-size:16px;font-weight:600;min-height:50px}
.contentSection{padding:68px 32px;border-top-color:#d9e2ec}
.sectionInner>h2{font-size:38px;line-height:1.2;max-width:900px;margin-bottom:26px}
.sectionInner>p{max-width:900px}
.sectionInner p:last-child{margin-bottom:0}
.system-definition>.sectionInner>ul{padding:24px 28px 24px 48px;border:1px solid #d9e2ec;border-radius:12px;background:#fff}
.system-definition li::marker,.laboratory-screen li::marker{color:#008078;font-weight:700}
.laboratory-screen ol{border-radius:0 12px 12px 0;padding-block:26px}
.next-evidence>.sectionInner>p:first-of-type{border-radius:12px;padding:26px 28px}
main table{font-size:16px;line-height:1.62;margin:30px 0}
main th,main td{padding:20px 18px}
main th{background:#062b5b;color:#fff;font-size:15px}
.optical-methods td:first-child,.evidence-roles td:first-child{font-weight:600;color:#062b5b}
.grades td:first-child{font-size:21px}
.grades a{font-weight:600}
.request-paths>.sectionInner>ul>li{border-radius:12px;padding:24px;box-shadow:0 2px 8px rgb(3 27 58 / 3%)}
.request-paths>.sectionInner>ul>li>a{width:100%;font-size:16px;line-height:1.4;min-height:50px;font-weight:600}
.request-paths code{font-family:inherit;font-weight:600}
.sources{background:#fff!important}
.sources ol{font-size:15px;line-height:1.7}
.sources li{padding-bottom:18px;border-bottom:1px solid #d9e2ec}
.sources li:last-child{border-bottom:0;padding-bottom:0}
main a:focus-visible{outline:3px solid #008078;outline-offset:4px;border-radius:3px}
.hero a:focus-visible{outline-color:#fff}
main a:hover{color:#00645e}
.heroActions a:hover{color:#fff;background:#00645e;border-color:#00645e}
.request-paths a:hover{background:#f5f8fb}
@media(max-width:1100px){body{font-size:16px}.hero{padding:56px 24px 60px}.hero h1{font-size:48px}.hero>.heroInner>p{font-size:18px}.hero>.heroInner>p+p{font-size:16px}.contentSection{padding:56px 24px}.sectionInner>h2{font-size:34px}.optical-methods tr,.evidence-roles tr,.grades tr{padding:20px;border-radius:12px}.optical-methods td::before,.evidence-roles td::before,.grades td::before{font-size:14px;line-height:1.5;letter-spacing:.025em;color:#5d6b7d}.optical-methods td,.evidence-roles td,.grades td{padding:12px 0}.request-paths>.sectionInner>ul>li>a{width:auto}}
@media(max-width:560px){.hero{padding:44px 20px 48px}.hero h1{font-size:40px;line-height:1.1}.hero>.heroInner>p{font-size:18px}.contentSection{padding:46px 20px}.sectionInner>h2{font-size:30px;line-height:1.22}.system-definition>.sectionInner>ul{padding:18px 20px 18px 38px}.optical-methods tr,.evidence-roles tr,.grades tr{padding:18px}.next-evidence>.sectionInner>p:first-of-type{padding:22px}.request-paths>.sectionInner>ul>li{padding:22px}.request-paths>.sectionInner>ul>li>a{width:100%}.sources ol{font-size:15px}}
`;
html=html.replace('</style>',css+'\n</style>').replace('data-gate="3"','data-gate="4" data-workset-id="APP-PAPER-G4-WORKSET-V0.1"');
fs.mkdirSync(path.join(dir,'approval_core'),{recursive:true});fs.mkdirSync(path.join(dir,'diagnostic_support'),{recursive:true});
const source=path.join(dir,'APP-PAPER_GATE4_COMPLETE_VISUAL_V0.1.html');fs.writeFileSync(source,html);
const inputs=[
'AGENTS.md','PROJECT_CONTEXT.md','docs/architecture/GATE4_REMAINING_EIGHT_EXECUTION_CONTROL_V1.0.md','docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.9.md','docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.8.md','agents/gate4-complete-visual/agent.md','skills/brand-applied-visual-design/SKILL.md','skills/full-page-visual-composition/SKILL.md','skills/layout-interaction-verification/SKILL.md','skills/layout-interaction-verification/references/gate4-self-check.md','skills/layout-interaction-verification/references/core-risk-model.md','docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.2.md','docs/architecture/GATE4_GATE5_VISUAL_HANDOFF_CONTRACT_V1.0.md','docs/architecture/GATE_WORKFLOW_V3.2.md','docs/architecture/PAGE_GATE_1_4_STANDARD_V2.2.md','docs/architecture/GATE_3_4_6_DELEGATED_CLOSURE_AUTHORITY_V1.0.md','docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.4.md','docs/architecture/PAGE_REGISTRY_V0.2.md','research/keyword/11_page_keyword_master.csv','docs/page-playbooks/APPLICATION_PLAYBOOK_V0.1.md','docs/page-briefs/APP-PAPER_PAPER_BRIEF_V0.1.md','pages/applications/paper/APP-PAPER_CURRENT_GATE_BASELINE_MANIFEST_V0.6.md','pages/applications/paper/04_planning/APP-PAPER_GATE2_CONTENT_SKELETON_V0.1.md','pages/applications/paper/04_planning/APP-PAPER_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md','pages/applications/paper/04_planning/APP-PAPER_GATE2_CONTENT_CONTRACT_V0.2.md','docs/architecture/GATE2_REMAINING_SEVEN_USER_APPROVAL_AND_CLOSURE_V1.0.md',upstream,'pages/applications/paper/04_planning/gate3-v0.3/APP-PAPER_GATE3_FREEZE_RECORD_V0.4.json','pages/applications/paper/05_review/APP-PAPER_GATE3_PROJECT_CONTROL_CLOSURE_V0.1.md','pages/applications/paper/05_review/APP-PAPER_GATE3_PROJECT_CONTROL_REREVIEW_V0.1.md','pages/applications/paper/05_review/APP-PAPER_GATE3_TO_GATE4_HANDOFF_V0.1.md','brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md','brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md','brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md','docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md','docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md','docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md','docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md','docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md','pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv','pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md','pages/legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md','pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md','docs/architecture/gate3-shared-consumer-v0.2/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md','docs/architecture/gate3-shared-consumer-v0.2/consumer-package.json'];
const deps=['docs/architecture/gate3-shared-consumer-v0.2/Inter-Variable.ttf','docs/architecture/gate3-shared-consumer-v0.2/Inter-OFL.txt','docs/architecture/gate3-shared-consumer-v0.2/shared-chrome.css','docs/architecture/gate3-shared-consumer-v0.2/shared-chrome-behavior.js','docs/architecture/gate3-shared-consumer-v0.2/shared-chrome-data.json','docs/architecture/gate3-shared-consumer-v0.2/shared-consent-data.json','docs/architecture/gate3-shared-consumer-v0.2/render-shared-chrome.cjs','brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg','brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg'];
fs.writeFileSync(path.join(dir,'APP-PAPER_GATE4_INPUT_INDEX_V0.1.json'),JSON.stringify({page_id:'APP-PAPER',workset_id:'APP-PAPER-G4-WORKSET-V0.1',created_at:new Date().toISOString(),actual_author:'/root/gate4_paper_execute',dispatch_id:'G4-REMAINING-8-EXEC-01::APP-PAPER::/root/gate4_paper_execute',authority_manifest:inputs[21],authorization:'Parent dispatch bound to G4-REMAINING-8-EXEC-01; Gate4 execution only',stop:'GATE4_EXECUTION_COMPLETE_FROZEN / READY_FOR_GATE5_REVIEW',design_source:source,inputs:inputs.map(p=>identity(path.join(root,p))),dependencies:deps.map(p=>identity(path.join(root,p))),baseline_note:'V1.9 selected by current Index and confirmed by Controller; Gate4 role and three method identities are unchanged from dispatched V1.8. V1.8 retained as dispatch provenance.'},null,2));
console.log(JSON.stringify(identity(source)));
