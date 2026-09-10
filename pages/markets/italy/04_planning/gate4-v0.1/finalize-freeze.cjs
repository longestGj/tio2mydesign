const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = 'D:/23MySec';
const PAGE = `${ROOT}/pages/markets/italy`;
const DIR = `${PAGE}/04_planning/gate4-v0.1`;
const REVIEW = `${PAGE}/05_review`;
const WORKSET_ID = 'IT-G4-COMPLETE-20260907-01';
const FREEZE_ID = 'IT-G4-FREEZE-20260907-01';
const DATE = '2026-09-07';

const slash = p => p.replace(/\\/g, '/');
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const identity = p => ({ path: slash(p), bytes: fs.statSync(p).size, sha256: sha(p) });
const writeJson = (p, value) => fs.writeFileSync(p, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
const writeText = (p, value) => fs.writeFileSync(p, value.replace(/^\n/, ''), 'utf8');

const sourcePath = `${DIR}/MARKET-EU-IT_GATE4_COMPLETE_VISUAL_V0.1.html`;
const inputPath = `${DIR}/MARKET-EU-IT_GATE4_INPUT_INDEX_V0.1.json`;
const worksetPath = `${DIR}/MARKET-EU-IT_GATE4_WORKSET_V0.1.json`;
const directionPath = `${DIR}/MARKET-EU-IT_GATE4_VISUAL_DIRECTION_CHECK_V0.1.md`;
const preflightPath = `${DIR}/MARKET-EU-IT_GATE4_PREFLIGHT_RECORD_V0.1.json`;
const runtimePath = `${DIR}/diagnostic_support/runtime-verification.json`;
const readbackPath = `${DIR}/diagnostic_support/visual-readback.json`;
const freezePath = `${DIR}/MARKET-EU-IT_GATE4_FREEZE_RECORD_V0.1.json`;
const evidencePath = `${DIR}/MARKET-EU-IT_GATE4_EVIDENCE_INDEX_V0.1.json`;
const reportPath = `${DIR}/MARKET-EU-IT_GATE4_COMPLETE_VISUAL_COMPOSITION_REPORT_V0.1.md`;
const selfCheckPath = `${REVIEW}/MARKET-EU-IT_GATE4_EXECUTION_SELF_CHECK_V0.1.md`;
const submissionPath = `${REVIEW}/MARKET-EU-IT_GATE4_REVIEW_SUBMISSION_V0.1.md`;
const manifestPath = `${PAGE}/MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md`;
const independentReviewPath = `${REVIEW}/gate4-complete-independent-v0.1/REVIEW.md`;

const runtime = JSON.parse(fs.readFileSync(runtimePath, 'utf8'));
if (runtime.status !== 'PASS_PENDING_STATIC_VISUAL_READBACK' || runtime.failed.length || runtime.errors.length) {
  throw new Error('Runtime record is not eligible for freeze');
}
if (runtime.images.length !== 56) throw new Error(`Expected 56 images, found ${runtime.images.length}`);
for (const item of runtime.images) {
  if (!fs.existsSync(item.path) || sha(item.path) !== item.sha256 || fs.statSync(item.path).size !== item.bytes) {
    throw new Error(`Image identity mismatch: ${item.path}`);
  }
}

const readback = {
  page_id: 'MARKET-EU-IT',
  workset_id: WORKSET_ID,
  freeze_id: FREEZE_ID,
  role: 'EXECUTION_STATIC_VISUAL_READBACK',
  date: DATE,
  status: 'STATIC_VISUAL_PASS',
  method: 'All generated images were opened through the Codex image viewer. Full-page overviews were inspected for whole-page rhythm and closure; every overlapping segment was opened at original detail for readable continuity; all Menu, Cookie, direction and normal/hover/focus assets were opened.',
  counts: {
    total_opened: 56,
    full_pages: 3,
    continuous_segments: 27,
    direction_samples: 3,
    menu_states: 2,
    cookie_states: 3,
    normal_states: 6,
    hover_states: 6,
    focus_states: 6
  },
  findings: [],
  observations: [
    'All approved B content remains readable at 1440, 768 and 390 with the seven modules in the approved order.',
    'No clipping, horizontal overflow, abnormal void, broken section connection or Footer closure defect is visible in the full pages or continuous segments.',
    'The COO statement remains directly adjacent to its every-shipment/customs limitation; it is visually prominent without becoming a customs result.',
    'Product review stays neutral and retains the Not sure / Need help path; no Italy Grade recommendation, ranking or suitability implication is introduced.',
    'Italy destination guidance remains prose, not an invented form. Country, optional Port / City and Additional Requirements mapping stay legible at all widths.',
    'The Italy RFQ surface keeps the approved request boundary and post-submission human-review outcome.',
    'Menu and Cookie surfaces are fully visible at applicable widths; focus states are visible and do not collide with labels, punctuation, neighboring text or adjacent lines.',
    'The restrained route-ring motif reads as decorative hierarchy and does not depict a map, flag, port, warehouse, factory or service range.'
  ],
  images: runtime.images.map(item => ({ ...item, opened: true })),
  boundary: 'Executor visual readback only. It is not independent review, user approval, Gate 6 authorization, implementation, deployment or publication.'
};
writeJson(readbackPath, readback);

const workset = JSON.parse(fs.readFileSync(worksetPath, 'utf8'));
workset.status = 'COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW';
workset.checkpoints.complete = 'COMPLETE_AFTER_ACTUAL_RUNTIME_AND_STATIC_VISUAL_READBACK';
workset.freeze_id = FREEZE_ID;
workset.independent_review_entry = slash(independentReviewPath);
writeJson(worksetPath, workset);

const preflight = JSON.parse(fs.readFileSync(preflightPath, 'utf8'));
preflight.status = 'PASS_FOR_FREEZE_AFTER_STATIC_VISUAL_READBACK';
preflight.workset = identity(worksetPath);
preflight.static_visual_readback = identity(readbackPath);
preflight.checks.opened_images = 56;
preflight.boundary = 'Execution freeze is eligible for independent review. This record is not independent review, user approval, Gate 6 authorization, implementation or publication.';
writeJson(preflightPath, preflight);

const input = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
if (input.inputs.length !== 51) throw new Error(`Expected 51 frozen inputs, found ${input.inputs.length}`);
for (const item of input.inputs) {
  if (!fs.existsSync(item.path) || sha(item.path) !== item.sha256 || fs.statSync(item.path).size !== item.bytes) {
    throw new Error(`Input identity mismatch: ${item.path}`);
  }
}

const freeze = {
  page_id: 'MARKET-EU-IT',
  workset_id: WORKSET_ID,
  freeze_id: FREEZE_ID,
  status: 'COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW',
  frozen_at: new Date().toISOString(),
  source: identity(sourcePath),
  input_index: identity(inputPath),
  workset: identity(worksetPath),
  preflight: identity(preflightPath),
  direction_check: identity(directionPath),
  runtime_verification: identity(runtimePath),
  static_visual_readback: identity(readbackPath),
  dependencies: [
    identity(`${DIR}/dependencies/Inter-Variable.ttf`),
    identity(`${DIR}/dependencies/Inter-OFL.txt`),
    identity(`${ROOT}/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg`),
    identity(`${ROOT}/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg`)
  ],
  renderer: {
    browser: runtime.runtime.chrome,
    node: runtime.runtime.node,
    headless: runtime.runtime.headless,
    dpr: runtime.runtime.dpr,
    network: 'HTTP(S) blocked; local file rendering',
    font: 'Inter Variable local',
    viewports: [
      { width: 1440, height: 900, fullHeight: 5050 },
      { width: 768, height: 900, fullHeight: 6114 },
      { width: 390, height: 844, fullHeight: 7698 }
    ]
  },
  scope_facts: {
    url: '/markets/italy/',
    site_scope: 'tio2-my',
    language: 'EN',
    primary_keyword: 'titanium dioxide supplier italy',
    approved_modules: ['IT-01', 'IT-02', 'IT-03', 'IT-04', 'IT-05', 'IT-06', 'IT-07'],
    approved_visible_copy: 'MARKET-EU-IT Gate 2 Buyer Clean B V0.2 exact visible copy',
    rfq_context: { destinationCountry: 'Italy', sourcePage: 'MARKET-EU-IT' },
    document_context: { sourcePage: 'MARKET-EU-IT' },
    sample_context: {}
  },
  boundary: 'The executor freezes this page-local planning candidate for separate independent review. It does not claim independent PASS, user approval, closure, Gate 6 authorization, development, deployment or publication.'
};
writeJson(freezePath, freeze);

const stateCounts = runtime.images.reduce((acc, item) => {
  acc[item.state] = (acc[item.state] || 0) + 1;
  return acc;
}, {});
const evidence = {
  page_id: 'MARKET-EU-IT',
  workset_id: WORKSET_ID,
  freeze_id: FREEZE_ID,
  status: 'DRAFT_FOR_PROJECT_CONTROL_REVIEW',
  source: identity(sourcePath),
  freeze: identity(freezePath),
  input_index: identity(inputPath),
  counts: {
    frozen_inputs: input.inputs.length,
    total_unique_images: runtime.images.length,
    opened_images: readback.counts.total_opened,
    full_pages: stateCounts.FULL,
    continuous_segments: stateCounts.CONTINUOUS_SEGMENT,
    direction_samples: stateCounts.DIRECTION_SAMPLE,
    menu_states: stateCounts.MENU,
    cookie_states: stateCounts.COOKIE,
    normal_states: stateCounts.NORMAL,
    hover_states: stateCounts.HOVER,
    focus_states: stateCounts.FOCUS,
    runtime_checks: runtime.checks.length,
    runtime_failures: runtime.failed.length,
    page_errors: runtime.errors.length,
    focus_cases: runtime.focus_cases.length,
    executor_required_findings: 0
  },
  images: readback.images,
  observations: [
    { ...identity(runtimePath), classification: 'ACTUAL_RUNTIME', checks: runtime.checks.length, failures: runtime.failed.length, errors: runtime.errors.length },
    { ...identity(preflightPath), classification: 'SOURCE_AND_RUNTIME_PREFLIGHT' },
    { ...identity(directionPath), classification: 'GATE4_4A_DIRECTION_CHECK' },
    { ...identity(readbackPath), classification: 'STATIC_VISUAL', opened: readback.counts.total_opened },
    { ...identity(`${DIR}/build-and-verify.cjs`), classification: 'REPRODUCTION_SCRIPT' }
  ],
  acceptance: {
    approved_B_exact_and_link_order: 'PASS at 1440/768/390; exact main text, link, Header and Footer DOM match Gate 3 source',
    seven_module_order: 'PASS',
    coo_and_limitation_adjacency: 'PASS',
    neutral_grade_and_unknown_path: 'PASS',
    destination_and_rfq_boundary: 'PASS',
    eu_owner_boundary: 'PASS',
    shared_chrome_and_legal: 'PASS',
    geometry_and_overflow: 'PASS at 1440/768/390',
    interactive_target_size: 'PASS; all visible controls at least 44x44 CSS px',
    high_risk_focus: '6/6 PASS; 3px #008078 outline, 4.8177:1 against white, no self-label or neighboring-text collision, normal/hover/focus geometry stable',
    menu_cookie: 'PASS for open, focus cycle, isolation and return at applicable widths',
    local_action_context: 'PASS; RFQ carries Italy plus MARKET-EU-IT, documents carries only MARKET-EU-IT, sample carries no inferred context',
    static_visual_readback: 'PASS; 56/56 images opened'
  },
  not_applicable: [
    'No page form, input, select, table, accordion, FAQ, request-result or media branch is approved; these states are not invented.'
  ],
  unverified: [
    'Production routes and receiver acceptance',
    'Real devices and non-Chrome browser engines',
    'Native browser zoom UI and screen-reader speech',
    'Actual tracking/Cookie inventory and consent persistence',
    'Live source freshness beyond the approved B source note'
  ],
  boundary: 'Local planning evidence only. Navigation and receiver outcomes remain LOCAL_SIMULATION_NOT_RECEIVED. This index does not confer independent review PASS, user approval, Gate closure, Gate 6 authorization, implementation or publication.'
};
writeJson(evidencePath, evidence);

const src = identity(sourcePath);
const frz = identity(freezePath);
const ev = identity(evidencePath);
const rt = identity(runtimePath);

writeText(reportPath, `
# MARKET-EU-IT complete visual composition V0.1

${DATE}. Workset \`${WORKSET_ID}\`; freeze \`${FREEZE_ID}\`. Status \`COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW\`.

The 4A checkpoint retained the approved Industrial Editorial direction and advanced the same workset into 4B. Navy establishes hierarchy, accessible Functional Teal is reserved for links, actions and focus, and white/soft surfaces separate the seven reading stages. A restrained route-ring motif appears only in the Hero and RFQ surface; it does not depict a map, flag, port, warehouse, factory or service-range claim. The approved no-image branch is complete and contains no empty placeholder.

The candidate preserves the exact Gate 3 main-copy text, link order, Header DOM and Footer DOM at 1440, 768 and 390. The seven modules remain \`IT-01 → IT-02 → IT-03 → IT-04 → IT-05 → IT-06 → IT-07\`. The COO statement remains adjacent to the limitation on every-shipment issuance and customs treatment. Product review stays neutral, preserves \`Not sure / Need help\`, and makes no Italy Grade recommendation. Destination guidance remains prose; RFQ context carries editable Italy and internal \`MARKET-EU-IT\`, Request Documents carries only \`MARKET-EU-IT\`, and Request Sample adds no inferred value. EU-wide checks remain with the approved EU owner pages.

Actual local Chromium execution produced full heights 5050/6114/7698px at 1440/768/390. It recorded 35 checks, zero failures and zero page errors. All visible controls meet 44×44 CSS px. Six high-risk focus cases use a 3px \`#008078\` outline with 4.8177:1 contrast against white, show no self-label or neighboring-text collision, and retain stable normal/hover/focus geometry. Mobile Menu and Cookie open, isolation, focus loop, Escape/close and focus return passed at applicable widths.

All 56 generated images were opened: 3 full pages, 27 overlapping readable segments, 3 direction samples, 2 Menu states, 3 Cookie states and 18 normal/hover/focus images. No clipping, horizontal overflow, abnormal void, broken section connection or Footer closure defect was found.

Current source: ${src.bytes.toLocaleString('en-US')} bytes, SHA-256 \`${src.sha256}\`. Freeze: SHA-256 \`${frz.sha256}\`. Evidence index: SHA-256 \`${ev.sha256}\`. Runtime record: SHA-256 \`${rt.sha256}\`.

Executor unresolved required Findings: 0. Separate independent review remains required at [${slash(independentReviewPath)}](${slash(independentReviewPath)}). This execution does not claim independent PASS, user approval or closure and does not authorize Gate 6, implementation, deployment or publication.
`);

writeText(selfCheckPath, `
# MARKET-EU-IT Gate 4 execution self-check V0.1

${DATE}. \`EXECUTION_SELF_CHECK_PASS / READY_FOR_INDEPENDENT_REVIEW\`; not independent approval. Workset \`${WORKSET_ID}\`; freeze \`${FREEZE_ID}\`.

The same workset completed 4A direction confirmation and 4B full composition. The frozen source preserves Buyer Clean B V0.2 exactly in visible main content, preserves all 19 page-body links and the Gate 3 Header/Footer DOM, and retains the seven approved modules in order. No URL, Page ID, primary keyword, product relationship, source predicate, action owner or shared contract changed.

Italy-specific boundaries pass: the Malaysia-origin statement remains a project-evaluation context; the Certificate of Origin sentence stays adjacent to its no-every-shipment/no-customs-result limitation; Product Hub remains neutral; \`Not sure / Need help\` remains available; destination guidance maps Italy, optional Port / City and other receiving/handover detail without guessing; and the final RFQ states human review without confirming Grade, price, stock, supply, transport or timing. Local action inspection records Italy plus \`MARKET-EU-IT\` for RFQ, only \`MARKET-EU-IT\` for documents and no inferred sample context.

Actual runtime at 1440/768/390 records 35 checks, zero failures and zero page errors. Full heights are 5050/6114/7698px. Geometry, horizontal overflow, content signature, module order, current navigation, visible target size, Menu and Cookie behavior all pass. Six high-risk focus cases pass visibility, ≥44px target size, 4.8177:1 focus contrast, zero label/neighbor collision and stable normal/hover/focus geometry.

All 56 evidence images were opened: 3 full pages, 27 continuous segments, 3 direction samples, 2 Menu, 3 Cookie and 18 targeted normal/hover/focus images. Static readback found no clipping, abnormal void, broken connection or Footer closure defect. The input index binds 51 consumed identities; all were rechecked before freeze.

Source SHA-256: \`${src.sha256}\`. Freeze SHA-256: \`${frz.sha256}\`. Evidence-index SHA-256: \`${ev.sha256}\`.

Unresolved executor required Findings: **0**. Independent review must start from the freeze and evidence index and write only to [${slash(independentReviewPath)}](${slash(independentReviewPath)}). Production receivers/routes, real-device and non-Chrome behavior, native zoom, screen-reader speech and actual Cookie inventory/persistence remain later-owner checks. Gate 6, development, deployment and publication are outside this execution.
`);

writeText(submissionPath, `
# MARKET-EU-IT Gate 4 independent review submission V0.1

Status: \`DRAFT_FOR_PROJECT_CONTROL_REVIEW\`. Review target: \`${FREEZE_ID}\`; workset: \`${WORKSET_ID}\`.

Start with [Manifest V0.9](../MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md), then verify the [freeze](../04_planning/gate4-v0.1/MARKET-EU-IT_GATE4_FREEZE_RECORD_V0.1.json), [evidence index](../04_planning/gate4-v0.1/MARKET-EU-IT_GATE4_EVIDENCE_INDEX_V0.1.json), [composition report](../04_planning/gate4-v0.1/MARKET-EU-IT_GATE4_COMPLETE_VISUAL_COMPOSITION_REPORT_V0.1.md), [runtime record](../04_planning/gate4-v0.1/diagnostic_support/runtime-verification.json), [visual readback](../04_planning/gate4-v0.1/diagnostic_support/visual-readback.json) and [executor self-check](MARKET-EU-IT_GATE4_EXECUTION_SELF_CHECK_V0.1.md).

Independently recompute all 51 frozen input identities, source/freeze/evidence identities and all 56 image identities. Open the three full pages and all 27 readable segments at 1440/768/390. Operate and inspect Menu/Cookie at applicable widths. Inspect both high-risk inline links—\`Request Documents\` and \`Federchimica AVISA — association sectors\`—in normal, hover and actual keyboard focus at all three widths; verify 6/6 focus visibility, ≥44px targets, contrast, zero collision and stable geometry.

Check exact Buyer Clean B and link order, seven modules, shared Header/Footer, Markets current state without visible \`CURRENT\`, fixed RFQ, COO limitation adjacency, neutral Grade path, Italy destination-field guidance, EU-owner exit and RFQ/document/sample context boundaries. Confirm the page adds no map/flag/port/warehouse/factory/service-range claim and invents no form, FAQ, result or media branch.

Write the independent result only to [${slash(independentReviewPath)}](${slash(independentReviewPath)}). Required Finding format applies; a PASS must state required Finding count 0 and \`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL\`. The executor makes no independent decision and claims no user approval, closure, Gate 6 authorization, implementation or publication.
`);

const selfId = identity(selfCheckPath);
const submissionId = identity(submissionPath);
const reportId = identity(reportPath);
const manifestPrev = identity(`${PAGE}/MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md`);

writeText(manifestPath, `
# MARKET-EU-IT Current Gate Baseline Manifest V0.9

## 0. Current state

| Field | Value |
|---|---|
| Page ID / URL | \`MARKET-EU-IT\` / \`/markets/italy/\` |
| Page type / language | Market procurement landing page / EN |
| Site scope | \`tio2-my\` |
| Manifest date | ${DATE} |
| Lifecycle | \`GATE4_COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW\` |
| Gate 1 | \`APPROVED / CLOSED\` |
| Gate 2 | \`FULL_COPY_AND_MODULE_ORDER_CONFIRMED / USER_APPROVED / CLOSED\` |
| Gate 3 | \`IT-G3-APPROVAL-01 / USER_APPROVED / CLOSED\` |
| Gate 4 authorization | Current batch-1 user instruction / \`USER_AUTHORIZED\` |
| Gate 4 execution | \`4A CHECKED / 4B COMPLETE / FROZEN / SELF_CHECK_PASS\` |
| Gate 4 independent review | \`PENDING\` |
| Gate 4 user approval / closure | \`NOT_CLAIMED_BY_EXECUTOR\` |
| Gate 6–10 | \`NOT_STARTED / NOT_AUTHORIZED_BY_THIS EXECUTION\` |
| Previous Manifest | \`${path.basename(manifestPrev.path)}\` / \`${manifestPrev.sha256}\` |

V0.9 is the current Italy execution pointer. It retains the user-approved Gate 2 A/B/C and Gate 3 combination and binds the new Gate 4 freeze for separate independent review. It is not an independent PASS, user approval or Gate closure.

## 1. Approved page contract retained

| Role | Current file | SHA-256 | State |
|---|---|---|---|
| A — Content Skeleton | \`pages/markets/italy/04_planning/MARKET-EU-IT_GATE2_CONTENT_SKELETON_V0.1.md\` | \`8e18340cdae14cbb36991fd56b8ba7b33bdcda0fee1fd0fd0ba3a8181e151751\` | \`USER_APPROVED / CLOSED\` |
| B — sole visible Buyer Copy | \`pages/markets/italy/04_planning/MARKET-EU-IT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md\` | \`a7d047af04b5127cc54f97938e4d622b1e1b496691747516322924f6e0b44208\` | \`USER_APPROVED / CLOSED / SOLE_VISIBLE_COPY_SOURCE\` |
| C — stable content contract | \`pages/markets/italy/04_planning/MARKET-EU-IT_GATE2_CONTENT_CONTRACT_V0.2.md\` | \`ac49b66055bf36b87583e3919005ccbf87919a9900d9a9103aaa7d39936a6e19\` | \`USER_APPROVED / CLOSED\` |
| Gate 3 frozen source | \`pages/markets/italy/04_planning/gate3-v0.1/MARKET-EU-IT_GATE3_WIREFRAME_V0.1.html\` | \`910d8199ca4094b4b56d854b5292c6eb115a6eabd29ff35d9515850d76a1b752\` | \`USER_APPROVED / CLOSED\` |
| Gate 3→4 handoff | \`pages/markets/italy/05_review/MARKET-EU-IT_GATE3_TO_GATE4_HANDOFF_V0.1.md\` | \`c9a799e1e5408b7ffec78c6bed82c0195788abadc3a6aab77a6a26cc15fac0dd\` | \`READY_FOR_GATE4_WHEN_AUTHORIZED\` |

The approved URL, keyword, seven modules, complete B, link order, source predicates, product neutrality, COO limitation, Italy destination/RFQ boundary and shared-owner exits are unchanged.

## 2. Gate 4 method and authority

The input index binds 51 consumed identities, including workflow V3.2, unified standard V2.2, Gate 4 baseline Manifest V1.3, Agent V0.2, Brand Applied Visual Design V0.2, Full-page Visual Composition V0.2, Layout & Interaction Verification V0.4, governance V1.4 and the approved brand, CTA, Global Chrome, Logo and legal contracts. Root Status and Index were read only for routing and are intentionally excluded from the freeze.

Current user instruction authorizes Italy Gate 4 in batch 1. \`G346-DELEGATED-CLOSURE-20260907\` permits later controller closure only after executor, separate independent review and controller conditions are satisfied. This executor stops at review submission and does not exercise closure authority.

## 3. Frozen Gate 4 candidate

| Role | Path | Bytes | SHA-256 / status |
|---|---|---:|---|
| Complete visual source | \`${slash(sourcePath)}\` | ${src.bytes} | \`${src.sha256}\` |
| Input index | \`${slash(inputPath)}\` | ${identity(inputPath).bytes} | \`${identity(inputPath).sha256}\` / 51 inputs |
| Workset | \`${slash(worksetPath)}\` | ${identity(worksetPath).bytes} | \`${identity(worksetPath).sha256}\` / \`${WORKSET_ID}\` |
| Preflight | \`${slash(preflightPath)}\` | ${identity(preflightPath).bytes} | \`${identity(preflightPath).sha256}\` / PASS |
| Freeze | \`${slash(freezePath)}\` | ${frz.bytes} | \`${frz.sha256}\` / \`${FREEZE_ID}\` |
| Evidence index | \`${slash(evidencePath)}\` | ${ev.bytes} | \`${ev.sha256}\` / 56 images |
| Runtime verification | \`${slash(runtimePath)}\` | ${rt.bytes} | \`${rt.sha256}\` / 35 checks, 0 failures, 0 errors |
| Static visual readback | \`${slash(readbackPath)}\` | ${identity(readbackPath).bytes} | \`${identity(readbackPath).sha256}\` / 56 opened |
| Composition report | \`${slash(reportPath)}\` | ${reportId.bytes} | \`${reportId.sha256}\` |
| Execution self-check | \`${slash(selfCheckPath)}\` | ${selfId.bytes} | \`${selfId.sha256}\` / 0 unresolved Findings |
| Review submission | \`${slash(submissionPath)}\` | ${submissionId.bytes} | \`${submissionId.sha256}\` |

Any change to the frozen source ends this identity and requires a new freeze and affected evidence.

## 4. Evidence coverage and execution result

- Approval core: three complete pages and five applicable Menu/Cookie states.
- Continuous readability: 27 overlapping segments, all opened at original detail.
- Direction: three representative 4A samples.
- High-risk inline links: two targets × three widths × normal/hover/focus = 18 images; 6/6 focus cases pass.
- Runtime: 35 checks, zero failures, zero page errors; exact content/shared DOM parity, geometry, 44px targets, action contexts, Menu and Cookie behavior passed.
- Static visual readback: 56/56 images opened; no blocking defect found.
- Executor unresolved required Findings: 0.

This is executor evidence. Separate independent review must recompute identities, operate the candidate and inspect the evidence before any project-control PASS.

## 5. Open items and stop boundary

| Item | State |
|---|---|
| Independent review | \`PENDING\`; output only at \`${slash(independentReviewPath)}\` |
| Gate 4 project-control state | \`DRAFT_FOR_PROJECT_CONTROL_REVIEW\` |
| User approval / delegated closure | Pending independent review and controller conditions; not claimed here |
| Production route/receiver/CMS/device/runtime isolation | Later owner / Gate 6, 8 or 9 verification |
| Gate 6 / development / deployment / publication | Outside this execution |

No file outside \`D:/23MySec/pages/markets/italy\` was edited by this execution.

## 6. Manifest version record

| Version | Date | Meaning |
|---|---|---|
| V0.8 | ${DATE} | Gate 3 user-approved/closed combination; Gate 3→4 handoff ready when authorized |
| V0.9 | ${DATE} | Gate 4 4A→4B execution completed and frozen for separate independent review; no independent PASS, user approval or closure claimed |
`);

const summary = {
  workset_id: WORKSET_ID,
  freeze_id: FREEZE_ID,
  source: identity(sourcePath),
  freeze: identity(freezePath),
  evidence_index: identity(evidencePath),
  manifest: identity(manifestPath),
  self_check: identity(selfCheckPath),
  review_submission: identity(submissionPath),
  independent_review_entry: slash(independentReviewPath),
  counts: evidence.counts
};
console.log(JSON.stringify(summary, null, 2));
