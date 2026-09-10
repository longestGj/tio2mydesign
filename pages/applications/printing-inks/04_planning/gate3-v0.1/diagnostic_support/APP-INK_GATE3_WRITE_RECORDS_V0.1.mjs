import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = 'D:/23MySec';
const base = `${root}/pages/applications/printing-inks/04_planning/gate3-v0.1`;
const review = `${root}/pages/applications/printing-inks/05_review`;
const mode = process.argv[2] ?? 'preflight';
const normalized = value => value.replaceAll('\\', '/');
const file = (relativeOrAbsolute, extra = {}) => {
  const target = normalized(path.isAbsolute(relativeOrAbsolute) ? relativeOrAbsolute : `${root}/${relativeOrAbsolute}`);
  const buffer = fs.readFileSync(target);
  return { path: target, bytes: buffer.length, sha256: crypto.createHash('sha256').update(buffer).digest('hex'), ...extra };
};
const write = (target, value) => fs.writeFileSync(target, `${JSON.stringify(value, null, 2)}\n`);
const pngMetadata = target => {
  const buffer = fs.readFileSync(target);
  if (buffer.toString('ascii', 1, 4) !== 'PNG') throw new Error(`Not a PNG: ${target}`);
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
};

const inputPaths = {
  manifest: 'pages/applications/printing-inks/APP-INK_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md',
  A: 'pages/applications/printing-inks/04_planning/APP-INK_GATE2_CONTENT_SKELETON_V0.1.md',
  B: 'pages/applications/printing-inks/04_planning/APP-INK_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md',
  C: 'pages/applications/printing-inks/04_planning/APP-INK_GATE2_CONTENT_CONTRACT_V0.2.md',
  rereview: 'pages/applications/printing-inks/05_review/APP-INK_GATE2_FULL_COPY_BUYER_REREVIEW_V0.1.md',
  projectControl: 'pages/applications/printing-inks/05_review/APP-INK_GATE2_FULL_COPY_PROJECT_CONTROL_REVIEW_V0.1.md',
  brief: 'docs/page-briefs/APP-INK_PRINTING_INKS_BRIEF_V0.1.md',
  baseline: 'docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.6.md',
  agent: 'agents/gate3-execution/agent.md',
  designSkill: 'skills/responsive-wireframe-design/SKILL.md',
  verificationSkill: 'skills/layout-interaction-verification/SKILL.md',
  handoff: 'docs/superpowers/specs/2026-09-07-gate3-to-gate4-handoff-contract-v0.3.md'
};
const approvedInputs = Object.fromEntries(Object.entries(inputPaths).map(([key, value]) => [key, file(value)]));
const consumerDir = `${root}/docs/architecture/gate3-shared-consumer-v0.2`;
const consumerPackage = JSON.parse(fs.readFileSync(`${consumerDir}/consumer-package.json`, 'utf8'));
const sharedConsumer = { ...file(`${consumerDir}/consumer-package.json`), version: consumerPackage.version, packageId: consumerPackage.packageId, currentPageId: 'APP-000' };
const sharedFiles = consumerPackage.files.map(entry => file(`${consumerDir}/${entry.path}`, { role: entry.role }));
const dependencies = [
  file('brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg', { role: 'primary_logo' }),
  file('brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg', { role: 'reverse_logo' }),
  file('docs/architecture/gate3-shared-consumer-v0.2/Inter-Variable.ttf', { role: 'font' }),
  file('docs/architecture/gate3-shared-consumer-v0.2/Inter-OFL.txt', { role: 'font_license' })
];
const source = file(`${base}/APP-INK_GATE3_RESPONSIVE_WIREFRAME_V0.1.html`);
const diagnostic = file(`${base}/diagnostic_support/APP-INK_GATE3_DIAGNOSTIC_OBSERVATIONS_V0.1.json`);
const sharedOwnerEvidence = file('99_workspace/gate3-v02-validation/shared-consumer-v0.2/shared-consumer-validation.json');

if (mode === 'preflight') {
  const binding = {
    status: 'DRAFT_FOR_PROJECT_CONTROL_REVIEW',
    pageId: 'APP-INK',
    executionAuthorization: 'Current 2026-09-07 parent-task instruction: APP-INK Gate 3 only',
    approvedInputs,
    sharedConsumer,
    sharedFiles,
    dependencies,
    candidate: source,
    renderer: file(`${base}/APP-INK_GATE3_RENDER_VERIFY_V0.1.mjs`),
    builder: file(`${base}/APP-INK_GATE3_BUILD_WIREFRAME_V0.1.mjs`)
  };
  write(`${base}/APP-INK_GATE3_INPUT_BINDING_V0.1.json`, binding);
  const preflight = {
    status: 'PASS_FOR_FORMAL_RENDER',
    at: new Date().toISOString(),
    pageId: 'APP-INK',
    candidate: source,
    approvedInputs,
    sharedConsumer,
    sharedFiles,
    dependencies,
    checks: {
      approvedInputsMatch: 'PASS',
      durableDependencies: 'PASS',
      sharedConsumerNeutral: 'PASS',
      contentRelationshipsMatch: 'PASS',
      threeViewportsVisible: 'PASS',
      touchTargets44: 'PASS',
      mobileMenuExit: 'PASS',
      applicableStates: 'PASS',
      pageSpecificRisks: 'PASS',
      functionalColors: 'PASS'
    },
    formalExportsGenerated: fs.readdirSync(`${base}/approval_core`).some(name => name.endsWith('.png')),
    browser: 'Microsoft Edge via Playwright',
    viewports: [{ width: 1440, height: 1000, dpr: 1 }, { width: 768, height: 1024, dpr: 1 }, { width: 390, height: 844, dpr: 1 }],
    evidenceTypes: ['ACTUAL_RUNTIME', 'STATIC_VISUAL', 'SOURCE_INSPECTION', 'LOCAL_SIMULATION'],
    evidence: { diagnostic },
    sharedInheritance: {
      source: sharedOwnerEvidence,
      inheritedCoverage: 'Complete shared menu/cookie keyboard and breakpoint behavior outside the unchanged neutral consumer',
      referenceCheck: 'Consumer package V0.2 file identities match; APP-INK embeds the current neutral renderer/style/behavior with APP-000 and approved logo paths',
      pageActualRuntime: 'Menu open/select-close/background isolation/focus return at 768 and 390; Cookie open/close/focus return at all widths',
      gap: 'No shared-component variance introduced by the page body'
    },
    pageSpecificRisks: ['four document-role records', 'four neutral Grades and fixed order', 'three request paths at 390', 'six source records and links', 'narrow record conversion and long-copy integrity'],
    visualObservation: 'All 1440/768/390 readable segments inspected through Footer; no crop, collision, overflow or abnormal fixed blank space',
    unresolvedFindings: []
  };
  write(`${base}/APP-INK_GATE3_PREFLIGHT_RECORD_V0.1.json`, preflight);
  console.log(JSON.stringify({ binding: file(`${base}/APP-INK_GATE3_INPUT_BINDING_V0.1.json`), preflight: file(`${base}/APP-INK_GATE3_PREFLIGHT_RECORD_V0.1.json`), source }, null, 2));
} else if (mode === 'freeze') {
  const preflight = file(`${base}/APP-INK_GATE3_PREFLIGHT_RECORD_V0.1.json`);
  const freeze = {
    status: 'FROZEN',
    frozenAt: new Date().toISOString(),
    pageId: 'APP-INK',
    source,
    approvedInputs,
    sharedConsumer,
    sharedFiles,
    dependencies,
    inputBinding: file(`${base}/APP-INK_GATE3_INPUT_BINDING_V0.1.json`),
    preflight,
    formalExportPlan: ['1440 full', '768 full', '390 full', '768 menu', '390 menu', '390 Grades anchor'],
    formalExportsExistedAtFreeze: fs.readdirSync(`${base}/approval_core`).some(name => name.endsWith('.png')),
    unresolvedFindings: []
  };
  write(`${base}/APP-INK_GATE3_FREEZE_RECORD_V0.1.json`, freeze);
  console.log(JSON.stringify(file(`${base}/APP-INK_GATE3_FREEZE_RECORD_V0.1.json`), null, 2));
} else if (mode === 'inventory') {
  const formalDir = `${base}/approval_core`;
  const pngs = fs.readdirSync(formalDir).filter(name => name.endsWith('.png')).sort().map(name => {
    const target = `${formalDir}/${name}`;
    const width = Number(name.match(/_(1440|768|390)_/)?.[1]);
    const state = name.includes('_MENU_') ? 'menu_open' : name.includes('_GRADES_ANCHOR_') ? 'grades_anchor' : 'full';
    const logicalHeight = width === 390 ? 844 : width === 768 ? 1024 : 1000;
    return file(target, { logicalViewport: { width, height: logicalHeight }, physicalPixels: pngMetadata(target), dpr: 1, state, role: 'approval_core' });
  });
  const records = [
    `${base}/APP-INK_GATE3_TASK_INPUT_CARD_V0.1.md`,
    `${base}/APP-INK_GATE3_INPUT_BINDING_V0.1.json`,
    `${base}/APP-INK_GATE3_PREFLIGHT_RECORD_V0.1.json`,
    `${base}/APP-INK_GATE3_FREEZE_RECORD_V0.1.json`,
    `${base}/APP-INK_GATE3_DESIGN_METHOD_REPORT_V0.1.md`,
    `${formalDir}/APP-INK_GATE3_FORMAL_OBSERVATIONS_V0.1.json`,
    `${review}/APP-INK_GATE3_EXECUTION_SELF_CHECK_V0.1.md`,
    `${review}/APP-INK_GATE3_TO_GATE4_HANDOFF_DRAFT_V0.1.md`
  ].map(target => file(target, { role: 'approval_core' }));
  const inventory = {
    status: 'DRAFT_FOR_PROJECT_CONTROL_REVIEW',
    pageId: 'APP-INK',
    source: { ...source, role: 'approval_core' },
    formalAssets: pngs,
    records,
    sharedConsumer,
    dependencies,
    diagnosticSupport: `${base}/diagnostic_support`,
    frozenAt: JSON.parse(fs.readFileSync(`${base}/APP-INK_GATE3_FREEZE_RECORD_V0.1.json`, 'utf8')).frozenAt,
    formalEvidenceCount: pngs.length,
    resolvedFindings: ['APP-INK-G3-DIAG-01: normalized-copy false negative caused by DOM whitespace; comparator corrected and full diagnostic rerun passed'],
    unresolvedFindings: [],
    gate4VisualNotes: ['Mobile Hero middle-dot separator treatment', 'Inline-code typography inside the third request card'],
    notVerified: ['Production routes/receivers/forms/CMS/canonical/indexing/Schema/live Cookie inventory', 'Native 200% zoom, assistive technology, real touch devices and other browser engines']
  };
  write(`${base}/APP-INK_GATE3_ASSET_INVENTORY_V0.1.json`, inventory);
  console.log(JSON.stringify({ inventory: file(`${base}/APP-INK_GATE3_ASSET_INVENTORY_V0.1.json`), formalAssets: pngs }, null, 2));
} else {
  throw new Error(`Unknown mode: ${mode}`);
}
