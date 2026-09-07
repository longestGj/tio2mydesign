const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=path.resolve(__dirname,'..');
const repo=path.resolve(root,'../../../../..');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const rec=p=>{const a=path.resolve(repo,p),b=fs.readFileSync(a);return{path:a.replace(/\\/g,'/'),relativePath:path.relative(root,a).replace(/\\/g,'/'),bytes:b.length,sha256:sha(b)}};
const dependencies=[
  'pages/markets/spain/04_planning/gate5-v0.1/MARKET-EU-ES_GATE5_COMPLETE_VISUAL_V0.1.html',
  'pages/markets/spain/04_planning/gate5-v0.1/visual-direction.css',
  'pages/markets/spain/04_planning/gate5-v0.1/dependencies/Inter-Variable.ttf',
  'pages/markets/spain/04_planning/gate5-v0.1/dependencies/Inter-OFL.txt',
  'pages/markets/spain/04_planning/gate5-v0.1/dependencies/tio2-malaysia-primary-horizontal-v0.1.svg',
  'pages/markets/spain/04_planning/gate5-v0.1/dependencies/tio2-malaysia-reverse-monochrome-v0.1.svg',
];
const inputs=[
  'AGENTS.md','PROJECT_CONTEXT.md','02_DIRECTORY_GUIDE.md',
  'docs/architecture/GATE5_TWO_ELIGIBLE_PAGE_SERIAL_CONTROL_V1.0.md',
  'docs/architecture/PAGE_GATE_1_5_STANDARD_V1.1.md','docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.0.md',
  'agents/gate5-execution/agent.md','skills/full-page-visual-composition/SKILL.md',
  'skills/layout-interaction-verification/SKILL.md','skills/layout-interaction-verification/references/core-risk-model.md',
  'docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md','docs/page-briefs/MARKET-EU-ES_SPAIN_BRIEF_V0.2.md',
  'docs/architecture/PAGE_REGISTRY_V0.2.md','research/keyword/11_page_keyword_master.csv',
  'brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md','brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md',
  'docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md','docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.4.md',
  'docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md','brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md',
  'pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md',
  'pages/legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md',
  'pages/markets/spain/MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md',
  'pages/markets/spain/MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md',
  'pages/markets/spain/MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md',
  'pages/markets/spain/04_planning/MARKET-EU-ES_GATE2_CONTENT_SKELETON_V0.2.md',
  'pages/markets/spain/04_planning/MARKET-EU-ES_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md',
  'pages/markets/spain/04_planning/MARKET-EU-ES_GATE2_CONTENT_CONTRACT_V0.4.md',
  'pages/markets/spain/04_planning/gate3-v0.1/MARKET-EU-ES_GATE3_RESPONSIVE_WIREFRAME_V0.1.html',
  'pages/markets/spain/05_review/MARKET-EU-ES_GATE3_TO_GATE4_HANDOFF_V0.1.md',
  'pages/markets/spain/04_planning/gate4-v0.1/MARKET-EU-ES_GATE4_VISUAL_SAMPLES_V0.1.html',
  'pages/markets/spain/04_planning/gate4-v0.1/visual-direction.css',
  'pages/markets/spain/04_planning/gate4-v0.1/MARKET-EU-ES_GATE4_VISUAL_DIRECTION_AND_METHOD_REPORT_V0.1.md',
  'pages/markets/spain/04_planning/gate4-v0.1/approval_core/source-freeze.json',
  'pages/markets/spain/04_planning/gate4-v0.1/approval_core/export-inventory.json',
  'pages/markets/spain/05_review/MARKET-EU-ES_GATE4_PROJECT_CONTROL_REVIEW_V0.1.md',
  'pages/markets/spain/05_review/MARKET-EU-ES_GATE4_PREAUTHORIZED_APPROVAL_AND_CLOSURE_V0.1.md',
  'pages/markets/spain/05_review/MARKET-EU-ES_GATE5_USER_AUTHORIZATION_V0.1.md',
  'docs/architecture/gate3-shared-consumer-v0.2/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md',
  'docs/architecture/gate3-shared-consumer-v0.2/consumer-package.json',
  'docs/architecture/gate3-shared-consumer-v0.2/render-shared-chrome.cjs',
  'docs/architecture/gate3-shared-consumer-v0.2/shared-chrome-data.json',
  'docs/architecture/gate3-shared-consumer-v0.2/shared-consent-data.json',
  'docs/architecture/gate3-shared-consumer-v0.2/shared-chrome.css',
  'docs/architecture/gate3-shared-consumer-v0.2/shared-chrome-behavior.js',
];
const preflight=rec('pages/markets/spain/04_planning/gate5-v0.1/diagnostic_support/preflight-runtime.json');
const freeze={freezeId:'ES-G5-V01-SOURCE-01',date:new Date().toISOString(),status:'SOURCE_FROZEN_AFTER_AUTHOR_PREFLIGHT / DRAFT_FOR_PROJECT_CONTROL_REVIEW',entry:'MARKET-EU-ES_GATE5_COMPLETE_VISUAL_V0.1.html',render:{browser:'Chrome 152.0.7977.82',viewports:[{logical:'1440x900',dpr:1},{logical:'768x900',dpr:1},{logical:'390x844',dpr:2}],fullPage:true,network:'file local; no external requests'},dependencies:dependencies.map(rec),inputs:inputs.map(rec),preflight,scope:'Spain Gate5 author candidate only. Visible body and visual-direction CSS inherit approved ES-G4-V01-SOURCE-01; head adds only approved C V0.4 canonical and WebPage+BreadcrumbList. No Gate6, development or publication.'};
const out=path.join(root,'approval_core','source-freeze.json');fs.writeFileSync(out,JSON.stringify(freeze,null,2));
console.log(JSON.stringify({path:out.replace(/\\/g,'/'),freezeId:freeze.freezeId,dependencies:freeze.dependencies.length,inputs:freeze.inputs.length,sha256:sha(fs.readFileSync(out))},null,2));
