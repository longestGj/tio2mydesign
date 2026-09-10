import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = 'D:/23MySec';
const base = path.join(root, 'pages/applications/paper/04_planning/gate3-v0.3');
const review = path.join(root, 'pages/applications/paper/05_review');
const output = path.join(base, 'APP-PAPER_GATE3_ASSET_INVENTORY_V0.4.json');
const sha256 = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const record = (role, file, extra = {}) => ({
  role,
  ...extra,
  path: file.replaceAll('\\', '/'),
  bytes: fs.statSync(file).size,
  sha256: sha256(file)
});
const png = (role, name, logicalWidth, state, extra = {}) => {
  const file = path.join(base, 'approval_core', name);
  const data = fs.readFileSync(file);
  return record(role, file, {
    viewport: { logicalWidth, physicalWidth: data.readUInt32BE(16), physicalHeight: data.readUInt32BE(20), scale: 1 },
    state,
    ...extra
  });
};

const approvalCore = [
  record('editable_source', path.join(base, 'APP-PAPER_GATE3_RESPONSIVE_WIREFRAME_V0.3.html')),
  record('input_card', path.join(base, 'APP-PAPER_GATE3_TASK_INPUT_CARD_V0.3.md')),
  record('reproduction_dependency', path.join(base, 'APP-PAPER_GATE3_BUILD_WIREFRAME_V0.3.mjs')),
  record('verification_dependency', path.join(base, 'APP-PAPER_GATE3_RENDER_VERIFY_V0.3.mjs')),
  record('chronology_correction_generator', path.join(base, 'APP-PAPER_GATE3_CORRECT_RECORD_CHAIN_V0.4.mjs')),
  record('chronology_correction_observations', path.join(base, 'APP-PAPER_GATE3_CHRONOLOGY_CORRECTION_OBSERVATIONS_V0.4.json')),
  record('corrected_preflight', path.join(base, 'APP-PAPER_GATE3_PREFLIGHT_RECORD_V0.4.json')),
  record('corrected_freeze', path.join(base, 'APP-PAPER_GATE3_FREEZE_RECORD_V0.4.json')),
  record('design_report', path.join(base, 'APP-PAPER_GATE3_DESIGN_METHOD_REPORT_V0.4.md')),
  record('formal_observations', path.join(base, 'approval_core/APP-PAPER_GATE3_FORMAL_OBSERVATIONS_V0.3.json')),
  record('execution_self_check', path.join(review, 'APP-PAPER_GATE3_EXECUTION_SELF_CHECK_V0.4.md')),
  record('finding_response', path.join(review, 'APP-PAPER_GATE3_F01_REVISION_RESPONSE_V0.1.md')),
  record('handoff_draft', path.join(review, 'APP-PAPER_GATE3_TO_GATE4_HANDOFF_DRAFT_V0.2.md')),
  png('full_page', 'APP-PAPER_GATE3_1440_FULL_V0.3.png', 1440, 'default'),
  png('full_page', 'APP-PAPER_GATE3_768_FULL_V0.3.png', 768, 'default'),
  png('full_page', 'APP-PAPER_GATE3_390_FULL_V0.3.png', 390, 'default'),
  png('state', 'APP-PAPER_GATE3_768_MENU_V0.3.png', 768, 'mobile_menu_open'),
  png('state', 'APP-PAPER_GATE3_390_MENU_V0.3.png', 390, 'mobile_menu_open'),
  png('page_specific_state', 'APP-PAPER_GATE3_390_OPTICAL_RECORDS_V0.3.png', 390, 'optical_method_records', { risk: 'method and context remain bound to each distinct optical property' }),
  png('page_specific_state', 'APP-PAPER_GATE3_390_GRADES_ANCHOR_V0.3.png', 390, 'grades_anchor_target', { risk: 'anchor lands on complete equal two-Grade set' }),
  png('page_specific_state', 'APP-PAPER_GATE3_390_SOURCES_V0.3.png', 390, 'technical_sources', { risk: 'seven source identities and links remain complete without overflow' })
];

const inventory = {
  inventoryId: 'APP-PAPER-G3-ASSETS-V0.4',
  pageId: 'APP-PAPER',
  freezeId: 'APP-PAPER-G3-FREEZE-V0.4',
  generatedAt: new Date().toISOString(),
  generatedBy: 'APP-PAPER_GATE3_BUILD_ASSET_INVENTORY_V0.4.mjs',
  candidateState: 'DRAFT_FOR_PROJECT_CONTROL_REREVIEW',
  correctionScope: 'APP-PAPER-G3-PCR-F01 record chronology and shared-evidence attribution; candidate and formal PNGs unchanged.',
  approvalCore,
  formalVisualEvidence: { count: 8, fullPageCount: 3, interactionStateCount: 2, pageSpecificStateCount: 3, retainedWithoutRerender: true },
  historicalRecords: [
    record('historical_preflight', path.join(base, 'APP-PAPER_GATE3_PREFLIGHT_RECORD_V0.3.json')),
    record('historical_freeze', path.join(base, 'APP-PAPER_GATE3_FREEZE_RECORD_V0.3.json')),
    record('historical_asset_inventory', path.join(base, 'APP-PAPER_GATE3_ASSET_INVENTORY_V0.3.json')),
    record('historical_execution_self_check', path.join(review, 'APP-PAPER_GATE3_EXECUTION_SELF_CHECK_V0.3.md')),
    record('historical_handoff_draft', path.join(review, 'APP-PAPER_GATE3_TO_GATE4_HANDOFF_DRAFT_V0.1.md'))
  ],
  independentReviewEvidence: {
    projectControlReview: record('project_control_review', path.join(review, 'APP-PAPER_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md')),
    observations: record('independent_observations', path.join(review, 'APP-PAPER_GATE3_INDEPENDENT_OBSERVATIONS_V0.1.json')),
    usage: 'Independent re-review input and current-page focus-loop supplement; not executor-authored approval evidence.'
  },
  diagnosticSupport: {
    directory: path.join(base, 'diagnostic_support').replaceAll('\\', '/'),
    observations: record('diagnostic_observations', path.join(base, 'diagnostic_support/APP-PAPER_GATE3_DIAGNOSTIC_OBSERVATIONS_V0.3.json')),
    contents: 'Historical diagnostic full pages, segments, Cookie state and observations; retained unchanged.',
    validFindings: []
  }
};
fs.writeFileSync(output, JSON.stringify(inventory, null, 2));
console.log(JSON.stringify(record('asset_inventory', output), null, 2));
