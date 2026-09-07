import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = 'D:/23MySec';
const out = `${root}/pages/markets/germany/04_planning/gate3-v0.1`;
const now = new Date().toISOString();
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const item = (file, role) => ({ ...(role ? { role } : {}), path: file, bytes: fs.statSync(file).size, sha256: hash(file) });
const assert = (condition, message) => { if (!condition) throw new Error(message); };

const approvedInputs = [
  item(`${root}/pages/markets/germany/04_planning/MARKET-EU-DE_GATE2_CONTENT_SKELETON_V0.1.md`, 'A'),
  item(`${root}/pages/markets/germany/04_planning/MARKET-EU-DE_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`, 'B'),
  item(`${root}/pages/markets/germany/04_planning/MARKET-EU-DE_GATE2_CONTENT_CONTRACT_V0.2.md`, 'C'),
  item(`${root}/docs/architecture/GATE2_REMAINING_SEVEN_USER_APPROVAL_AND_CLOSURE_V1.0.md`, 'user_approval')
];
const expected = {
  A: 'f42dc446fbe95be7728d55580fc4e5bc4b7e2c6a19e915ae81b32631e33579d0',
  B: 'f95f338b4b966d48e0a10c0ad81b6fd7ffd21e552cee780bc9597d2e67b6c4d8',
  C: 'a2a5d629258e1d24aff03d6a3b3a24f194d89c5c6c1f5e6b68bb8eaef5faa187'
};
for (const input of approvedInputs.filter(entry => expected[entry.role])) assert(input.sha256 === expected[input.role], `${input.role} input identity changed`);

const authorityPaths = [
  'AGENTS.md', 'PROJECT_CONTEXT.md', '01_PROJECT_INDEX.md', '02_DIRECTORY_GUIDE.md',
  'docs/architecture/GATE3_GERMANY_ITALY_PARALLEL_CONTROL_V1.0.md',
  'docs/architecture/GATE_WORKFLOW_V3.1.md',
  'docs/architecture/PAGE_GATE_1_4_STANDARD_V2.1.md',
  'docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.3.md',
  'docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.5.md',
  'agents/gate3-execution/agent.md',
  'skills/responsive-wireframe-design/SKILL.md',
  'skills/responsive-wireframe-design/references/preflight-freeze-evidence.md',
  'skills/layout-interaction-verification/SKILL.md',
  'skills/layout-interaction-verification/references/core-risk-model.md',
  'skills/layout-interaction-verification/references/gate3-structure-scope.md',
  'docs/superpowers/specs/2026-09-07-gate3-to-gate4-handoff-contract-v0.2.md',
  'pages/markets/germany/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md',
  'docs/page-briefs/MARKET-EU-DE_GERMANY_BRIEF_V0.1.md',
  'docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md',
  'docs/architecture/PAGE_REGISTRY_V0.2.md',
  'research/keyword/11_page_keyword_master.csv',
  'docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md',
  'brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md',
  'brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md',
  'docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md',
  'brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md',
  'docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md'
];
const authorityInputs = authorityPaths.map(relative => item(`${root}/${relative}`));

const sharedDir = `${root}/docs/architecture/gate3-shared-consumer-v0.2`;
const sharedManifest = item(`${sharedDir}/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md`);
const sharedConsumer = { ...item(`${sharedDir}/consumer-package.json`), packageId: 'TIO2MY-GATE3-SHARED-CONSUMER-002', version: 'V0.2' };
assert(sharedConsumer.sha256 === '1148a05fa12fdbf038f456a1cf40d3c1cf3f1c967fae1384616342faaa2fdf50', 'shared consumer identity changed');
const packageJson = JSON.parse(fs.readFileSync(sharedConsumer.path, 'utf8'));
const sharedFiles = packageJson.files.map(entry => {
  const actual = item(`${sharedDir}/${entry.path}`, entry.role);
  assert(actual.sha256 === entry.sha256, `shared file identity changed: ${entry.path}`);
  return actual;
});
const sharedReport = item(`${root}/99_workspace/gate3-v02-validation/shared-consumer-v0.2/shared-consumer-validation.json`);
assert(sharedReport.sha256 === '373993fb476f86d454600c75d0a4b99ae4f9a9fa7547a6eb8ed099b05f477683', 'shared validation report identity changed');
assert(JSON.parse(fs.readFileSync(sharedReport.path, 'utf8')).failures.length === 0, 'shared validation has failures');

const dependencies = [
  item(`${root}/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg`),
  item(`${root}/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg`),
  item(`${out}/dependencies/Inter-Variable.ttf`),
  item(`${out}/dependencies/Inter-OFL.txt`)
];
const source = item(`${out}/MARKET-EU-DE_GATE3_WIREFRAME_V0.1.html`);
const runtime = item(`${out}/diagnostic_support/runtime.json`);
const runtimeData = JSON.parse(fs.readFileSync(runtime.path, 'utf8'));
assert(runtimeData.status === 'PASS' && runtimeData.checks.every(check => check.status === 'PASS'), 'diagnostic runtime did not pass');
assert(runtimeData.source.sha256 === source.sha256, 'runtime source identity mismatch');
assert(fs.readdirSync(`${out}/approval_core`).length === 0, 'formal exports already exist before preflight');

const visualObservation = {
  status: 'PASS',
  pageId: 'MARKET-EU-DE',
  evidenceType: 'STATIC_VISUAL',
  source,
  inspected: [
    `${out}/diagnostic_support/render/diagnostic-1440-full.png`,
    `${out}/diagnostic_support/render/diagnostic-768-full.png`,
    `${out}/diagnostic_support/render/diagnostic-390-full.png`,
    `${out}/diagnostic_support/render/diagnostic-390-menu.png`,
    `${out}/diagnostic_support/render/diagnostic-390-cookie.png`,
    `${out}/diagnostic_support/render/390-segment-00.png`,
    `${out}/diagnostic_support/render/390-segment-04.png`,
    `${out}/diagnostic_support/render/390-segment-08.png`,
    `${out}/diagnostic_support/render/768-segment-04.png`
  ].map(file => item(file)),
  observations: [
    'All seven approved modules are visible in order from Hero through references and the shared Footer.',
    'Desktop keeps the three application paths comparable and pairs destination prose with its five-item checklist.',
    'Tablet independently stacks the application paths and destination checklist without using a shrunken desktop grid.',
    'Mobile presents a complete single-column reading order; long headings, links, source labels and the destination checklist wrap without clipping.',
    'The 390 menu and Cookie dialog preserve the current Markets mapping, readable controls and an unobscured exit path.',
    'No visible governance label, placeholder, page-specific media, Germany-local capability implication or abnormal fixed blank area appears.'
  ],
  unresolvedFindings: [],
  inspectedAt: now
};
fs.writeFileSync(`${out}/diagnostic_support/visual-observation.json`, JSON.stringify(visualObservation, null, 2));
const visual = item(`${out}/diagnostic_support/visual-observation.json`);

const inputBinding = {
  status: 'BOUND_FOR_GATE3_EXECUTION',
  pageId: 'MARKET-EU-DE',
  url: '/markets/germany/',
  language: 'en',
  siteScope: 'tio2-my',
  authorization: { controlId: 'G3-DE-IT-PARALLEL-01', pageScope: 'MARKET-EU-DE Gate 3 only', stop: 'DRAFT_FOR_PROJECT_CONTROL_REVIEW' },
  currentManifest: item(`${root}/pages/markets/germany/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md`),
  approvedInputs,
  authorityInputs,
  shared: { manifest: sharedManifest, consumer: sharedConsumer, files: sharedFiles, originalValidation: sharedReport },
  dependencies,
  output: { source: source.path, planningDirectory: out, reviewDirectory: `${root}/pages/markets/germany/05_review` },
  boundAt: now
};
fs.writeFileSync(`${out}/input-binding.json`, JSON.stringify(inputBinding, null, 2));
const binding = item(`${out}/input-binding.json`);

const preflight = {
  status: 'PASS_FOR_FORMAL_RENDER',
  pageId: 'MARKET-EU-DE',
  candidate: source,
  approvedInputs,
  authorityInputs,
  inputBinding: binding,
  sharedConsumer,
  sharedManifest,
  sharedFiles,
  sharedEvidenceInheritance: [
    {
      component: 'Header and responsive primary navigation',
      ownerContract: authorityInputs.find(entry => entry.path.endsWith('/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md')),
      source: sharedConsumer,
      originalReport: sharedReport,
      inheritedCoverage: 'Shared source identity, seven current-navigation mappings, 1440/768/390 base geometry and focus model.',
      noImpactOverrideBasis: 'Candidate embeds generator output unchanged; page CSS does not target Header or navigation classes.',
      pageActualRuntime: 'Current Markets mapping checked at 1440/768/390; menu open, selection close, Escape, focus loop, background isolation, scroll lock and breakpoint close checked at 768 and 390.',
      gaps: []
    },
    {
      component: 'Footer and legal utilities',
      ownerContract: authorityInputs.find(entry => entry.path.endsWith('/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md')),
      source: sharedConsumer,
      originalReport: sharedReport,
      inheritedCoverage: 'Footer order, legal labels, current-year copy and shared component identity.',
      noImpactOverrideBasis: 'Candidate embeds generator output unchanged; page CSS does not target Footer or legal utility classes.',
      pageActualRuntime: 'Footer closure, visible control geometry and Cookie Settings entry checked at 1440/768/390.',
      gaps: []
    },
    {
      component: 'Cookie Settings dialog',
      ownerContract: item(`${root}/pages/legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md`),
      source: sharedConsumer,
      originalReport: sharedReport,
      inheritedCoverage: 'Shared no_optional_analytics content and full two-control focus model.',
      noImpactOverrideBasis: 'Candidate embeds dialog markup, styles and behavior unchanged; page CSS does not target Cookie classes.',
      pageActualRuntime: 'Entry focus, forward/reverse loop, Close and focus return checked at 1440/768/390; 390 diagnostic state visually inspected.',
      gaps: []
    }
  ],
  dependencies,
  formalExportsGenerated: false,
  checks: {
    approvedInputsMatch: 'PASS',
    durableDependencies: 'PASS',
    sharedConsumerNeutral: 'PASS',
    contentRelationshipsMatch: 'PASS',
    threeViewportsVisible: 'PASS',
    touchTargets44: 'PASS',
    mobileMenuExit: 'PASS',
    applicableStates: 'PASS',
    pageSpecificRisks: 'PASS'
  },
  evidence: { runtime, visual },
  evidenceTypes: ['SOURCE_INSPECTION', 'ACTUAL_RUNTIME', 'STATIC_VISUAL', 'LOCAL_SIMULATION', 'REFERENCED_SHARED_VALIDATION'],
  browser: runtimeData.browser,
  viewports: runtimeData.viewports,
  executor: 'Gate 3 execution subagent / germany_gate3_v03',
  recordedAt: now,
  unresolvedFindings: [],
  notApplicable: 'No page form, selector, FAQ, accordion, page-specific media, error/result workflow or data table exists in approved B/C. Downstream route liveness and production receiving remain Gate 8/9 dependencies; no production result is simulated.'
};
fs.writeFileSync(`${out}/preflight-record.json`, JSON.stringify(preflight, null, 2));
console.log(JSON.stringify({ status: preflight.status, source, inputBinding: binding, runtime, visual }, null, 2));
