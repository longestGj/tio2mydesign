const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const project = 'D:/23MySec';
const norm = p => p.replace(/\\/g, '/');
const hash = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const identity = p => {
  const absolute = path.resolve(p);
  return { path: norm(absolute), bytes: fs.statSync(absolute).size, sha256: hash(absolute) };
};

const sourcePaths = [
  path.join(root, 'source', 'index.html'),
  path.join(root, 'source', 'visual-rules.css'),
  path.join(root, 'source', 'assets', 'shared-chrome-style.snapshot.css'),
  path.join(root, 'source', 'assets', 'Inter-Variable.ttf'),
  path.join(root, 'source', 'assets', 'Inter-OFL.txt'),
  path.join(root, 'source', 'assets', 'tio2-malaysia-primary-horizontal-v0.1.svg'),
  path.join(root, 'source', 'assets', 'tio2-malaysia-reverse-monochrome-v0.1.svg'),
];

const inputPaths = [
  `${project}/AGENTS.md`,
  `${project}/PROJECT_CONTEXT.md`,
  `${project}/02_DIRECTORY_GUIDE.md`,
  `${project}/docs/architecture/PAGE_GATE_1_5_STANDARD_V1.1.md`,
  `${project}/docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.0.md`,
  `${project}/docs/page-playbooks/PRODUCT_PLAYBOOK_V0.1.md`,
  `${project}/docs/page-playbooks/PRODUCT_PLAYBOOK_CURRENT_SOP_ADDENDUM_V0.1.md`,
  `${project}/docs/page-briefs/PRODUCT-PROC-CL_CHLORIDE_PROCESS_TITANIUM_DIOXIDE_BRIEF_V0.2.md`,
  `${project}/docs/architecture/PAGE_REGISTRY_V0.2.md`,
  `${project}/research/keyword/11_page_keyword_master.csv`,
  `${project}/pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`,
  `${project}/pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md`,
  `${project}/docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md`,
  `${project}/pages/products/chloride-process/PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.20.md`,
  `${project}/pages/products/chloride-process/PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.19.md`,
  `${project}/pages/products/chloride-process/PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.18.md`,
  `${project}/pages/products/chloride-process/PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.15.md`,
  `${project}/pages/products/chloride-process/PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.14.md`,
  `${project}/pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE5_USER_AUTHORIZATION_V0.1.md`,
  `${project}/pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE4_USER_APPROVAL_AND_CLOSURE_V0.1.md`,
  `${project}/pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE3_TO_GATE4_HANDOFF_V0.1.md`,
  `${project}/pages/products/chloride-process/04_planning/PRODUCT-PROC-CL_GATE2_CONTENT_SKELETON_V0.4.md`,
  `${project}/pages/products/chloride-process/04_planning/PRODUCT-PROC-CL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`,
  `${project}/pages/products/chloride-process/04_planning/PRODUCT-PROC-CL_GATE2_CONTENT_CONTRACT_V0.6.md`,
  `${project}/pages/products/chloride-process/04_planning/gate3-v0.1/PRODUCT-PROC-CL_GATE3_RESPONSIVE_WIREFRAME_V0.1.html`,
  `${project}/pages/products/chloride-process/04_planning/gate4-v0.1/PRODUCT-PROC-CL_GATE4_VISUAL_DIRECTION_AND_METHOD_REPORT_V0.1.md`,
  `${project}/pages/products/chloride-process/04_planning/gate4-v0.1/PRODUCT-PROC-CL_GATE4_VISUAL_SAMPLES_V0.1.html`,
  `${project}/pages/products/chloride-process/04_planning/gate4-v0.1/visual-rules.css`,
  `${project}/pages/products/chloride-process/04_planning/gate4-v0.1/approval_core/source-freeze.json`,
  `${project}/brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md`,
  `${project}/brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md`,
  `${project}/docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`,
  `${project}/docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.4.md`,
  `${project}/docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md`,
  `${project}/brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md`,
  `${project}/pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md`,
  `${project}/pages/legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md`,
  `${project}/agents/gate5-execution/agent.md`,
  `${project}/skills/full-page-visual-composition/SKILL.md`,
  `${project}/skills/layout-interaction-verification/SKILL.md`,
  `${project}/skills/layout-interaction-verification/references/core-risk-model.md`,
];

const sourceIdentity = sourcePaths.map(identity);
const inputIdentity = inputPaths.map(identity);
const precursorIdentity = [
  `${project}/pages/products/chloride-process/04_planning/gate4-v0.1/PRODUCT-PROC-CL_GATE4_VISUAL_SAMPLES_V0.1.html`,
  `${project}/pages/products/chloride-process/04_planning/gate4-v0.1/visual-rules.css`,
  `${project}/pages/products/chloride-process/04_planning/gate3-v0.1/dependencies/shared-chrome-style.snapshot.css`,
  `${project}/pages/products/chloride-process/04_planning/gate3-v0.1/dependencies/Inter-Variable.ttf`,
  `${project}/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg`,
  `${project}/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg`,
].map(identity);
const preflight = identity(path.join(root, 'diagnostic_support', 'preflight', 'runtime.json'));
const renderer = identity(path.join(root, 'diagnostic_support', 'verify-render.cjs'));
const combinationSha256 = crypto.createHash('sha256').update(JSON.stringify(sourceIdentity)).digest('hex');

const record = {
  freezeId: 'CL-G5-V01-SOURCE-01',
  date: '2026-09-07',
  pageId: 'PRODUCT-PROC-CL',
  url: '/products/chloride-process-titanium-dioxide/',
  siteScope: 'tio2-my',
  status: 'SOURCE_FROZEN_AFTER_PREFLIGHT / DRAFT_FOR_PROJECT_CONTROL_REVIEW',
  entry: 'source/index.html',
  sourceIdentity,
  sourceCombinationSha256: combinationSha256,
  inputIdentity,
  precursorIdentity,
  preflight,
  renderer,
  render: {
    browser: 'Chrome 152 channel',
    playwright: require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json').version,
    node: process.version,
    scheme: 'file',
    externalNetworkAllowed: false,
    logicalViewports: [
      { width: 1440, height: 1000, dpr: 1 },
      { width: 768, height: 1000, dpr: 1 },
      { width: 390, height: 844, dpr: 2, physicalWidth: 780 },
    ],
  },
  stageAuthority: {
    gate5: 'AUTHORIZED / IN EXECUTION',
    gate5Candidate: 'DRAFT_FOR_PROJECT_CONTROL_REVIEW',
    gate5UserApproval: 'NOT_YET_REQUESTED',
    actualGate6Authorization: 'NOT_AUTHORIZED',
    developmentDeploymentPublication: 'NOT_AUTHORIZED',
  },
};

const target = path.join(root, 'approval_core', 'source-freeze.json');
fs.writeFileSync(target, JSON.stringify(record, null, 2));
console.log(JSON.stringify({ target: norm(target), freezeId: record.freezeId, sourceCombinationSha256: combinationSha256, sources: sourceIdentity.length, inputs: inputIdentity.length }, null, 2));
