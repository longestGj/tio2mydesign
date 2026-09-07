const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=path.resolve(__dirname,'..'),repo=path.resolve(root,'../../../../..');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const recAbs=a=>{a=path.resolve(a);const b=fs.readFileSync(a);return{path:a.replace(/\\/g,'/'),relativePath:path.relative(root,a).replace(/\\/g,'/'),bytes:b.length,sha256:sha(b)}};
const recRel=p=>recAbs(path.resolve(repo,p));
const dependencies=[
 'pages/documents/certificate-of-origin/04_planning/gate5-v0.1/DOC-COO_GATE5_COMPLETE_VISUAL_V0.1.html',
 'pages/documents/certificate-of-origin/04_planning/gate5-v0.1/visual-direction.css',
 'pages/documents/certificate-of-origin/04_planning/gate5-v0.1/dependencies/Inter-Variable.ttf',
 'pages/documents/certificate-of-origin/04_planning/gate5-v0.1/dependencies/Inter-OFL.txt',
 'pages/documents/certificate-of-origin/04_planning/gate5-v0.1/dependencies/tio2-malaysia-primary-horizontal-v0.1.svg',
 'pages/documents/certificate-of-origin/04_planning/gate5-v0.1/dependencies/tio2-malaysia-reverse-monochrome-v0.1.svg'
];
const direct=[
 'AGENTS.md','PROJECT_CONTEXT.md','02_DIRECTORY_GUIDE.md','docs/architecture/GATE_WORKFLOW_V2.0.md',
 'docs/architecture/PAGE_GATE_1_5_STANDARD_V1.2.md','docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.1.md',
 'docs/architecture/GATE5_TWO_ELIGIBLE_PAGE_SERIAL_CONTROL_V1.0.md','agents/gate5-execution/agent.md',
 'skills/full-page-visual-composition/SKILL.md','skills/layout-interaction-verification/SKILL.md','skills/layout-interaction-verification/references/core-risk-model.md',
 'docs/page-briefs/DOC-COO_CERTIFICATE_OF_ORIGIN_BRIEF_V0.3.md','docs/page-playbooks/DOCUMENT_PLAYBOOK_V0.3.md',
 'docs/architecture/PAGE_REGISTRY_V0.2.md','research/keyword/11_page_keyword_master.csv',
 'docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md','docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md',
 'brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md','brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md',
 'docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md','docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.4.md','docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md',
 'brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md','pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md','pages/legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md',
 'pages/documents/certificate-of-origin/04_planning/DOC-COO_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md','pages/documents/certificate-of-origin/04_planning/DOC-COO_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md',
 'pages/documents/certificate-of-origin/04_planning/DOC-COO_GATE2_CONTENT_SKELETON_V0.1.md','pages/documents/certificate-of-origin/04_planning/DOC-COO_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md','pages/documents/certificate-of-origin/04_planning/DOC-COO_GATE2_CONTENT_CONTRACT_V0.1.md',
 'pages/documents/certificate-of-origin/04_planning/gate3-v0.1/DOC-COO_GATE3_RESPONSIVE_WIREFRAME_V0.1.html','pages/documents/certificate-of-origin/05_review/DOC-COO_GATE3_TO_GATE4_HANDOFF_V0.1.md',
 'pages/documents/certificate-of-origin/04_planning/gate4-v0.2/DOC-COO_GATE4_VISUAL_SAMPLES_V0.2.html','pages/documents/certificate-of-origin/04_planning/gate4-v0.2/visual-direction.css','pages/documents/certificate-of-origin/04_planning/gate4-v0.2/DOC-COO_GATE4_VISUAL_DIRECTION_AND_METHOD_REPORT_V0.2.md','pages/documents/certificate-of-origin/04_planning/gate4-v0.2/DOC-COO_GATE4_TARGETED_REVISION_RESPONSE_V0.2.md','pages/documents/certificate-of-origin/04_planning/gate4-v0.2/approval_core/source-freeze.json','pages/documents/certificate-of-origin/04_planning/gate4-v0.2/approval_core/export-inventory.json','pages/documents/certificate-of-origin/04_planning/gate4-v0.2/approval_core/asset-inventory.json',
 'pages/documents/certificate-of-origin/05_review/DOC-COO_GATE4_EXECUTION_SELF_CHECK_V0.2.md','pages/documents/certificate-of-origin/05_review/DOC-COO_GATE4_PROJECT_CONTROL_REVIEW_V0.1.md','pages/documents/certificate-of-origin/05_review/DOC-COO_GATE4_PREAUTHORIZED_APPROVAL_AND_CLOSURE_V0.1.md','pages/documents/certificate-of-origin/05_review/gate4-project-control-v0.2/independent-review/report.md','pages/documents/certificate-of-origin/05_review/DOC-COO_GATE5_USER_AUTHORIZATION_V0.1.md',
 'docs/architecture/gate3-shared-consumer-v0.2/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md','docs/architecture/gate3-shared-consumer-v0.2/consumer-package.json','docs/architecture/gate3-shared-consumer-v0.2/render-shared-chrome.cjs','docs/architecture/gate3-shared-consumer-v0.2/shared-chrome-data.json','docs/architecture/gate3-shared-consumer-v0.2/shared-consent-data.json','docs/architecture/gate3-shared-consumer-v0.2/shared-chrome.css','docs/architecture/gate3-shared-consumer-v0.2/shared-chrome-behavior.js'
];
const upstream=JSON.parse(fs.readFileSync(path.resolve(repo,'pages/documents/certificate-of-origin/04_planning/gate4-v0.2/approval_core/source-freeze.json')));
const abs=new Set(direct.map(p=>path.resolve(repo,p)));for(const x of upstream.inputs||[])abs.add(path.resolve(x.path));
const inputs=[...abs].sort().map(recAbs);
const preflight=recRel('pages/documents/certificate-of-origin/04_planning/gate5-v0.1/diagnostic_support/preflight-runtime.json');
const freeze={freezeId:'COO-G5-V01-SOURCE-01',date:new Date().toISOString(),status:'SOURCE_FROZEN_AFTER_AUTHOR_PREFLIGHT / DRAFT_FOR_PROJECT_CONTROL_REVIEW',entry:'DOC-COO_GATE5_COMPLETE_VISUAL_V0.1.html',render:{browser:'Chrome 152.0.7977.82',viewports:[{logical:'1440x900',dpr:1},{logical:'768x900',dpr:1},{logical:'390x844',dpr:2}],fullPage:true,network:'local file; no external requests'},dependencies:dependencies.map(recRel),inputs,preflight,scope:'DOC-COO Gate5 author candidate only. Visible body and visual CSS inherit approved COO-G4-V02-SOURCE-01; head adds only approved C V0.1 canonical and WebPage+BreadcrumbList/source-review metadata. No Gate6, Gate8, development or release.'};
const out=path.join(root,'approval_core/source-freeze.json');fs.writeFileSync(out,JSON.stringify(freeze,null,2));console.log(JSON.stringify({path:out.replace(/\\/g,'/'),freezeId:freeze.freezeId,dependencies:freeze.dependencies.length,inputs:freeze.inputs.length,sha256:sha(fs.readFileSync(out))},null,2));
