const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = 'D:/23MySec';
const page = root + '/pages/markets/germany';
const base = page + '/04_planning/gate4-v0.1';
const g3 = page + '/04_planning/gate3-v0.1';
const worksetId = 'DE-G4-COMPLETE-20260907-01';
const source = base + '/MARKET-EU-DE_GATE4_COMPLETE_VISUAL_V0.1.html';
const css = base + '/visual-direction.css';

const hash = buffer => crypto.createHash('sha256').update(buffer).digest('hex');
const identity = file => {
  const data = fs.readFileSync(file);
  return { path: file.replaceAll('\\', '/'), bytes: data.length, sha256: hash(data) };
};

const authorityPaths = [
  root + '/AGENTS.md',
  root + '/PROJECT_CONTEXT.md',
  root + '/01_PROJECT_INDEX.md',
  root + '/02_DIRECTORY_GUIDE.md',
  root + '/docs/architecture/GATE_WORKFLOW_V3.2.md',
  root + '/docs/architecture/PAGE_GATE_1_4_STANDARD_V2.2.md',
  root + '/docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.4.md',
  root + '/docs/architecture/GATE_3_4_6_DELEGATED_CLOSURE_AUTHORITY_V1.0.md',
  root + '/docs/architecture/GATE_3_4_6_DELEGATED_CLOSURE_IMPLEMENTATION_V1.0.md',
  root + '/docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.3.md',
  root + '/agents/gate4-complete-visual/agent.md',
  root + '/docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.1.md',
  root + '/skills/brand-applied-visual-design/SKILL.md',
  root + '/skills/full-page-visual-composition/SKILL.md',
  root + '/skills/layout-interaction-verification/SKILL.md',
  root + '/skills/layout-interaction-verification/references/core-risk-model.md',
  root + '/brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md',
  root + '/brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md',
  root + '/docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md',
  root + '/brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md',
  root + '/docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md',
  root + '/docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md',
  root + '/docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md',
  root + '/docs/architecture/PAGE_REGISTRY_V0.2.md',
  root + '/research/keyword/11_page_keyword_master.csv',
  root + '/docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md',
  root + '/docs/page-briefs/MARKET-EU-DE_GERMANY_BRIEF_V0.1.md'
];

const approvedPaths = [
  page + '/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md',
  page + '/04_planning/MARKET-EU-DE_GATE2_CONTENT_SKELETON_V0.1.md',
  page + '/04_planning/MARKET-EU-DE_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md',
  page + '/04_planning/MARKET-EU-DE_GATE2_CONTENT_CONTRACT_V0.2.md',
  root + '/docs/architecture/GATE2_REMAINING_SEVEN_USER_APPROVAL_AND_CLOSURE_V1.0.md',
  page + '/05_review/MARKET-EU-DE_GATE3_USER_APPROVAL_AND_CLOSURE_V0.1.md',
  page + '/05_review/MARKET-EU-DE_GATE3_TO_GATE4_HANDOFF_V0.1.md',
  g3 + '/MARKET-EU-DE_GATE3_WIREFRAME_V0.1.html',
  g3 + '/input-binding.json',
  g3 + '/preflight-record.json',
  g3 + '/freeze-record.json',
  g3 + '/asset-inventory.json',
  base + '/EXECUTION_AUTHORIZATION_AND_SCOPE_V0.1.md'
];

const sharedPaths = [
  root + '/docs/architecture/gate3-shared-consumer-v0.2/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md',
  root + '/docs/architecture/gate3-shared-consumer-v0.2/consumer-package.json',
  root + '/docs/architecture/gate3-shared-consumer-v0.2/render-shared-chrome.cjs',
  root + '/docs/architecture/gate3-shared-consumer-v0.2/shared-chrome-data.json',
  root + '/docs/architecture/gate3-shared-consumer-v0.2/shared-consent-data.json',
  root + '/docs/architecture/gate3-shared-consumer-v0.2/shared-chrome.css',
  root + '/docs/architecture/gate3-shared-consumer-v0.2/shared-chrome-behavior.js',
  root + '/docs/architecture/gate3-shared-consumer-v0.2/Inter-Variable.ttf',
  root + '/docs/architecture/gate3-shared-consumer-v0.2/Inter-OFL.txt'
];

for (const file of [...authorityPaths, ...approvedPaths, ...sharedPaths, css]) {
  if (!fs.existsSync(file)) throw new Error('Required input missing: ' + file);
}

const g3Source = fs.readFileSync(g3 + '/MARKET-EU-DE_GATE3_WIREFRAME_V0.1.html', 'utf8');
if (hash(Buffer.from(g3Source)) !== '355efe81188bc486825a2c97532fc63abb5912b089eab9671f930135449ab380') {
  throw new Error('Gate 3 source identity changed; stop and re-read');
}
const currentManifest = fs.readFileSync(page + '/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md', 'utf8');
if (!currentManifest.includes('DE-G3-APPROVAL-01') || !currentManifest.includes('Gate 3 is closed')) {
  throw new Error('Current Manifest no longer records the approved Gate 3 combination');
}

fs.mkdirSync(base + '/dependencies', { recursive: true });
fs.copyFileSync(g3 + '/dependencies/Inter-Variable.ttf', base + '/dependencies/Inter-Variable.ttf');
fs.copyFileSync(g3 + '/dependencies/Inter-OFL.txt', base + '/dependencies/Inter-OFL.txt');
fs.copyFileSync(root + '/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg', base + '/dependencies/tio2-malaysia-primary-horizontal-v0.1.svg');
fs.copyFileSync(root + '/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg', base + '/dependencies/tio2-malaysia-reverse-monochrome-v0.1.svg');

let candidate = g3Source
  .replace("file:///D:/23MySec/pages/markets/germany/04_planning/gate3-v0.1/dependencies/Inter-Variable.ttf", 'dependencies/Inter-Variable.ttf')
  .replace('file:///D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg', 'dependencies/tio2-malaysia-primary-horizontal-v0.1.svg')
  .replace('file:///D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg', 'dependencies/tio2-malaysia-reverse-monochrome-v0.1.svg')
  .replace('</head>', '<link rel="stylesheet" href="visual-direction.css"></head>');
if ((candidate.match(/visual-direction\.css/g) || []).length !== 1) throw new Error('Visual layer insertion failed');
fs.writeFileSync(source, candidate);

const dependencies = [
  base + '/dependencies/Inter-Variable.ttf',
  base + '/dependencies/Inter-OFL.txt',
  base + '/dependencies/tio2-malaysia-primary-horizontal-v0.1.svg',
  base + '/dependencies/tio2-malaysia-reverse-monochrome-v0.1.svg',
  css
].map(identity);

const inputIndex = {
  page_id: 'MARKET-EU-DE',
  url: '/markets/germany/',
  language: 'en',
  site_scope: 'tio2-my',
  workset_id: worksetId,
  authorization: 'User-authorized Gate 4 batch one; Germany execution only; standing closure requires separate independent review and project control.',
  authority_manifest: identity(page + '/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md'),
  authority_inputs: authorityPaths.map(identity),
  approved_inputs: approvedPaths.map(identity),
  shared_inputs: sharedPaths.map(identity),
  design_source: identity(source),
  dependencies
};
fs.writeFileSync(base + '/input_index.json', JSON.stringify(inputIndex, null, 2));

const workset = {
  page_id: 'MARKET-EU-DE',
  workset_id: worksetId,
  stage: 'GATE4_COMPLETE_VISUAL',
  status: 'IN_PROGRESS',
  authorization: 'Batch-one Germany Gate 4; G346-DELEGATED-CLOSURE-20260907 governs later closure after independent review.',
  allowed_write_scope: 'D:/23MySec/pages/markets/germany only',
  authority_manifest: inputIndex.authority_manifest,
  input_index: identity(base + '/input_index.json'),
  design_source: inputIndex.design_source,
  evidence_index: base + '/evidence_index.json',
  stop: 'COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW; no self-review, Gate 6, development or release.'
};
fs.writeFileSync(base + '/workset.json', JSON.stringify(workset, null, 2));
console.log(JSON.stringify({ workset: identity(base + '/workset.json'), inputIndex: identity(base + '/input_index.json'), source: identity(source), dependencies }, null, 2));
