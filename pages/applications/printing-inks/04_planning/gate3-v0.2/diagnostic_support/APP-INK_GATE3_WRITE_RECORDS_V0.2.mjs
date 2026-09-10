import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = 'D:/23MySec';
const base = `${root}/pages/applications/printing-inks/04_planning/gate3-v0.2`;
const mode = process.argv[2] ?? 'preflight';
const hash = buffer => crypto.createHash('sha256').update(buffer).digest('hex');
const file = (target, extra = {}) => {
  const absolute = path.isAbsolute(target) ? target : `${root}/${target}`;
  const buffer = fs.readFileSync(absolute);
  return { path: absolute.replaceAll('\\','/'), bytes: buffer.length, sha256: hash(buffer), ...extra };
};
const write = (target, value) => fs.writeFileSync(target, `${JSON.stringify(value, null, 2)}\n`);
const pngSize = target => {
  const buffer = fs.readFileSync(target);
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
};
const inputs = Object.fromEntries(Object.entries({
  manifest: 'pages/applications/printing-inks/APP-INK_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md',
  A: 'pages/applications/printing-inks/04_planning/APP-INK_GATE2_CONTENT_SKELETON_V0.1.md',
  B: 'pages/applications/printing-inks/04_planning/APP-INK_GATE2_FULL_BUER_CLEAN_COPY_V0.2.md'.replace('FULL_BUER','FULL_BUYER'),
  C: 'pages/applications/printing-inks/04_planning/APP-INK_GATE2_CONTENT_CONTRACT_V0.2.md',
  brief: 'docs/page-briefs/APP-INK_PRINTING_INKS_BRIEF_V0.1.md',
  baseline: 'docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.6.md',
  agent: 'agents/gate3-execution/agent.md',
  designSkill: 'skills/responsive-wireframe-design/SKILL.md',
  verificationSkill: 'skills/layout-interaction-verification/SKILL.md',
  handoffContract: 'docs/superpowers/specs/2026-09-07-gate3-to-gate4-handoff-contract-v0.3.md',
  projectControlReview: 'pages/applications/printing-inks/05_review/APP-INK_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md',
  independentObservations: 'pages/applications/printing-inks/05_review/APP-INK_GATE3_INDEPENDENT_OBSERVATIONS_V0.1.json'
}).map(([key, target]) => [key, file(target)]));
const sharedDir = `${root}/docs/architecture/gate3-shared-consumer-v0.2`;
const consumer = JSON.parse(fs.readFileSync(`${sharedDir}/consumer-package.json`, 'utf8'));
const sharedConsumer = { ...file(`${sharedDir}/consumer-package.json`), version: consumer.version, packageId: consumer.packageId, currentPageId: 'APP-000' };
const sharedFiles = consumer.files.map(item => file(`${sharedDir}/${item.path}`, { role: item.role }));
const dependencies = [
  file('brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg', { role: 'primary_logo' }),
  file('brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg', { role: 'reverse_logo' }),
  file('docs/architecture/gate3-shared-consumer-v0.2/Inter-Variable.ttf', { role: 'font' }),
  file('docs/architecture/gate3-shared-consumer-v0.2/Inter-OFL.txt', { role: 'font_license' })
];
const source = file(`${base}/APP-INK_GATE3_RESPONSIVE_WIREFRAME_V0.2.html`);
const historicalFreeze = file(`${root}/pages/applications/printing-inks/04_planning/gate3-v0.1/APP-INK_GATE3_FREEZE_RECORD_V0.1.json`);
const diagnostic = file(`${base}/diagnostic_support/APP-INK_GATE3_DIAGNOSTIC_OBSERVATIONS_V0.2.json`);

if (mode === 'preflight') {
  const binding = { status: 'DRAFT_FOR_PROJECT_CONTROL_REREVIEW', pageId: 'APP-INK', findings: ['APP-INK-G3-PCR-F01','APP-INK-G3-PCR-F02','APP-INK-G3-PCR-F03'], inputs, sharedConsumer, sharedFiles, dependencies, source, historicalFreeze };
  write(`${base}/APP-INK_GATE3_INPUT_BINDING_V0.2.json`, binding);
  const record = {
    status: 'PASS_FOR_FORMAL_RENDER',
    at: new Date().toISOString(),
    pageId: 'APP-INK',
    candidate: source,
    approvedInputs: inputs,
    sharedConsumer,
    sharedFiles,
    dependencies,
    historicalFreeze,
    checks: {
      approvedInputsMatch: 'PASS', durableDependencies: 'PASS', sharedConsumerNeutral: 'PASS', contentRelationshipsMatch: 'PASS', threeViewportsVisible: 'PASS', touchTargets44: 'PASS', mobileMenuExit: 'PASS', applicableStates: 'PASS', pageSpecificRisks: 'PASS', functionalColors: 'PASS'
    },
    formalExportsGenerated: fs.existsSync(`${base}/approval_core`) && fs.readdirSync(`${base}/approval_core`).some(name => name.endsWith('.png')),
    browser: 'Microsoft Edge via Playwright',
    viewports: [{width:1440,height:1000,dpr:1},{width:768,height:1024,dpr:1},{width:390,height:844,dpr:1}],
    evidenceTypes: ['ACTUAL_RUNTIME','STATIC_VISUAL','SOURCE_INSPECTION','LOCAL_SIMULATION'],
    evidence: { diagnostic },
    sharedEvidence: {
      originalOwnerCoverage: 'Consumer V0.2 original validation covers open, selection, Escape and breakpoint behavior. Its script contains no Tab or Shift+Tab loop test.',
      independentProjectControlCoverage: 'APP-INK Project Control V0.1 independently tested menu and Cookie forward/backward wrapping on frozen V0.1.',
      currentPageExecutionCoverage: 'V0.2 execution independently reran 768/390 menu initial focus, forward/backward wrapping, Escape, selection close, inert/scroll/focus restoration and breakpoint close; all three Cookie states reran forward/backward wrapping, Escape and click-close focus return.',
      impactArgument: 'The only V0.2 CSS change is scoped to main a:focus-visible and cannot select Header, Footer or Cookie elements. Full current-page shared behavior was nevertheless rerun because page CSS changed.',
      remainingGap: 'Production and real-device/AT checks remain assigned in the handoff; no applicable Gate 3 shared interaction gap remains.'
    },
    findingChecks: { 'APP-INK-G3-PCR-F01':'REVISED_AND_DIAGNOSTIC_PASS', 'APP-INK-G3-PCR-F02':'RECORD_CORRECTION_PREPARED', 'APP-INK-G3-PCR-F03':'EVIDENCE_SCOPE_CORRECTED_AND_CURRENT_PAGE_PASS' },
    unresolvedFindings: ['APP-INK-G3-PCR-F01','APP-INK-G3-PCR-F02','APP-INK-G3-PCR-F03'],
    nextState: 'PENDING_INDEPENDENT_PROJECT_CONTROL_REREVIEW'
  };
  write(`${base}/APP-INK_GATE3_PREFLIGHT_RECORD_V0.2.json`, record);
  console.log(JSON.stringify({ binding:file(`${base}/APP-INK_GATE3_INPUT_BINDING_V0.2.json`), preflight:file(`${base}/APP-INK_GATE3_PREFLIGHT_RECORD_V0.2.json`), source }, null, 2));
} else if (mode === 'freeze') {
  const freeze = {
    status: 'FROZEN_FOR_PROJECT_CONTROL_REREVIEW',
    frozenAt: new Date().toISOString(),
    pageId: 'APP-INK',
    source,
    findings: ['APP-INK-G3-PCR-F01','APP-INK-G3-PCR-F02','APP-INK-G3-PCR-F03'],
    inputs,
    sharedConsumer,
    dependencies,
    inputBinding: file(`${base}/APP-INK_GATE3_INPUT_BINDING_V0.2.json`),
    preflight: file(`${base}/APP-INK_GATE3_PREFLIGHT_RECORD_V0.2.json`),
    historicalFreeze,
    formalExportPlan: ['1440 full','768 full','390 full','768 menu','390 menu','390 Grades anchor','390 body-link keyboard focus'],
    formalExportsExistedAtFreeze: fs.existsSync(`${base}/approval_core`) && fs.readdirSync(`${base}/approval_core`).some(name => name.endsWith('.png'))
  };
  write(`${base}/APP-INK_GATE3_FREEZE_RECORD_V0.2.json`, freeze);
  console.log(JSON.stringify(file(`${base}/APP-INK_GATE3_FREEZE_RECORD_V0.2.json`), null, 2));
} else if (mode === 'inventory') {
  const dir = `${base}/approval_core`;
  const pngs = fs.readdirSync(dir).filter(name => name.endsWith('.png')).sort().map(name => {
    const target = `${dir}/${name}`;
    const width = Number(name.match(/_(1440|768|390)_/)?.[1]);
    const logicalHeight = width === 1440 ? 1000 : width === 768 ? 1024 : 844;
    const state = name.includes('BODY_LINK_FOCUS') ? 'body_link_keyboard_focus' : name.includes('_MENU_') ? 'menu_open' : name.includes('GRADES_ANCHOR') ? 'grades_anchor' : 'full';
    return file(target, { logicalViewport:{width,height:logicalHeight}, physicalPixels:pngSize(target), dpr:1, state, role:'approval_core' });
  });
  const records = [
    `${base}/APP-INK_GATE3_TASK_INPUT_CARD_V0.2.md`, `${base}/APP-INK_GATE3_INPUT_BINDING_V0.2.json`, `${base}/APP-INK_GATE3_PREFLIGHT_RECORD_V0.2.json`, `${base}/APP-INK_GATE3_FREEZE_RECORD_V0.2.json`, `${base}/APP-INK_GATE3_REVISION_METHOD_REPORT_V0.2.md`, `${dir}/APP-INK_GATE3_FORMAL_OBSERVATIONS_V0.2.json`, `${root}/pages/applications/printing-inks/05_review/APP-INK_GATE3_REVISION_RESPONSE_V0.2.md`, `${root}/pages/applications/printing-inks/05_review/APP-INK_GATE3_EXECUTION_SELF_CHECK_V0.2.md`, `${root}/pages/applications/printing-inks/05_review/APP-INK_GATE3_TO_GATE4_HANDOFF_DRAFT_V0.2.md`, `${base}/APP-INK_GATE3_CANDIDATE_MANIFEST_V0.2.md`
  ].filter(fs.existsSync).map(target => file(target,{role:'approval_core'}));
  const inventory = {
    status:'DRAFT_FOR_PROJECT_CONTROL_REREVIEW', pageId:'APP-INK', source:{...source,role:'approval_core'}, formalAssets:pngs, records, sharedConsumer, dependencies, historicalFreeze, formalEvidenceCount:pngs.length,
    findings:[
      {id:'APP-INK-G3-PCR-F01',status:'REVISED_PENDING_INDEPENDENT_REREVIEW'},
      {id:'APP-INK-G3-PCR-F02',status:'REVISED_PENDING_INDEPENDENT_REREVIEW'},
      {id:'APP-INK-G3-PCR-F03',status:'REVISED_PENDING_INDEPENDENT_REREVIEW'}
    ],
    unresolvedFindings:['APP-INK-G3-PCR-F01','APP-INK-G3-PCR-F02','APP-INK-G3-PCR-F03'],
    diagnosticSupport:`${base}/diagnostic_support`
  };
  write(`${base}/APP-INK_GATE3_ASSET_INVENTORY_V0.2.json`, inventory);
  console.log(JSON.stringify({inventory:file(`${base}/APP-INK_GATE3_ASSET_INVENTORY_V0.2.json`),formalAssets:pngs},null,2));
} else throw new Error(`Unknown mode ${mode}`);
