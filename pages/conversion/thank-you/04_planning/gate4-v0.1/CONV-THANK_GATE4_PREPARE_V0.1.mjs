import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';

const root='D:/23MySec';
const out=`${root}/pages/conversion/thank-you/04_planning/gate4-v0.1`;
const workset='CONV-THANK-G4-WORKSET-20260908-01';
const sha=f=>crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
const item=f=>({path:path.win32.normalize(f),bytes:fs.statSync(f).size,sha256:sha(f)});
const inputs=[
 'AGENTS.md','PROJECT_CONTEXT.md','02_DIRECTORY_GUIDE.md',
 'docs/architecture/GATE_WORKFLOW_V3.2.md','docs/architecture/PAGE_GATE_1_4_STANDARD_V2.2.md','docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.4.md',
 'docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.9.md','agents/gate4-complete-visual/agent.md',
 'docs/architecture/GATE4_SYS404_CONVTHANK_PARALLEL_CONTROL_V1.0.md','docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.2.md','docs/architecture/GATE4_GATE5_VISUAL_HANDOFF_CONTRACT_V1.0.md',
 'skills/brand-applied-visual-design/SKILL.md','skills/full-page-visual-composition/SKILL.md','skills/layout-interaction-verification/SKILL.md','skills/layout-interaction-verification/references/gate4-self-check.md','skills/layout-interaction-verification/references/core-risk-model.md',
 'pages/conversion/thank-you/CONV-THANK_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md','docs/page-briefs/CONV-THANK_SHARED_FORM_SUCCESS_BRIEF_V0.1.md','docs/page-playbooks/CONVERSION_PLAYBOOK_V0.1.md',
 'docs/architecture/PAGE_REGISTRY_V0.2.md','research/keyword/11_page_keyword_master.csv','docs/superpowers/specs/2026-09-08-404-thank-you-pages-design-v0.1.md',
 'pages/conversion/thank-you/05_review/CONV-THANK_GATE3_TO_GATE4_HANDOFF_V0.1.md','pages/conversion/thank-you/04_planning/CONV-THANK_GATE2_CONTENT_SKELETON_AND_INHERITANCE_MAP_V0.1.md','pages/conversion/thank-you/04_planning/CONV-THANK_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md','pages/conversion/thank-you/04_planning/CONV-THANK_GATE2_STABLE_PAGE_CONTRACT_V0.1.md','pages/conversion/thank-you/02_analysis/CONV-THANK_THREE_FORM_SUCCESS_CONTRACT_IMPACT_AUDIT_V0.1.md',
 'pages/conversion/thank-you/04_planning/gate3-v0.2/CONV-THANK_GATE3_RESPONSIVE_WIREFRAME_V0.2.html','pages/conversion/thank-you/04_planning/gate3-v0.2/asset-inventory.json','pages/conversion/thank-you/04_planning/gate3-v0.2/freeze-record.json',
 'brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md','brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md','docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md','brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md','docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md','docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md'
].map(f=>item(`${root}/${f}`));
const depNames=['consumer-package.json','render-shared-chrome.cjs','shared-chrome-behavior.js','shared-chrome-data.json','shared-chrome.css','shared-consent-data.json','Inter-Variable.ttf','Inter-OFL.txt'];
const dependencies=depNames.map(n=>item(`${root}/docs/architecture/gate3-shared-consumer-v0.2/${n}`));
for(const f of ['brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg','brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg'])dependencies.push(item(`${root}/${f}`));
fs.writeFileSync(`${out}/CONV-THANK_GATE4_INPUT_INDEX_V0.1.json`,JSON.stringify({workset_id:workset,executor:'/root/conv_thank_gate4_execute',inputs,dependencies,informational_navigation_only:['01_PROJECT_INDEX.md','00_PROJECT_STATUS.md']},null,2));
const source=item(`${out}/CONV-THANK_GATE4_EDITABLE_SOURCE_V0.1.html`);
fs.writeFileSync(`${out}/CONV-THANK_GATE4_DESIGN_SOURCE_V0.1.json`,JSON.stringify({workset_id:workset,status:'VISUAL_DIRECTION_CHECKED',source,derived_from:item(`${root}/pages/conversion/thank-you/04_planning/gate3-v0.2/CONV-THANK_GATE3_RESPONSIVE_WIREFRAME_V0.2.html`),direction:{tone:'restrained B2B result utility',hierarchy:'navy message hierarchy, teal receipt signal, quiet light environment',allowed_changes:['typography','line height','spacing','panel surface','action appearance'],locked:['exact copy','four mutually exclusive states','module order','approved request key','state eligibility','action labels and targets','shared owner markup and behavior','navigation NONE']},media:'NO_MEDIA_INTENDED',decision:'VISUAL_DIRECTION_CHECKED / CONTINUE_TO_4B'},null,2));
console.log(JSON.stringify({workset,inputCount:inputs.length,dependencyCount:dependencies.length,source},null,2));
