const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = 'D:/23MySec';
const PAGE = `${ROOT}/pages/applications/plastics`;
const DIR = `${PAGE}/04_planning/gate4-v0.1`;
const REVIEW = `${PAGE}/05_review`;
const WORKSET_ID = 'APP-PLAS-G4-COMPLETE-20260907-01';
const FREEZE_ID = 'APP-PLAS-G4-FREEZE-20260907-01';
const DATE = '2026-09-07';

const slash = p => p.replace(/\\/g, '/');
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const identity = p => ({ path: slash(p), bytes: fs.statSync(p).size, sha256: sha(p) });
const writeJson = (p, value) => fs.writeFileSync(p, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
const writeText = (p, value) => fs.writeFileSync(p, value.replace(/^\n/, ''), 'utf8');

const sourcePath = `${DIR}/APP-PLAS_GATE4_COMPLETE_VISUAL_V0.1.html`;
const inputPath = `${DIR}/APP-PLAS_GATE4_INPUT_INDEX_V0.1.json`;
const worksetPath = `${DIR}/APP-PLAS_GATE4_WORKSET_V0.1.json`;
const directionPath = `${DIR}/APP-PLAS_GATE4_VISUAL_DIRECTION_CHECK_V0.1.md`;
const preflightPath = `${DIR}/APP-PLAS_GATE4_PREFLIGHT_RECORD_V0.1.json`;
const runtimePath = `${DIR}/diagnostic_support/runtime-verification.json`;
const readbackPath = `${DIR}/diagnostic_support/visual-readback.json`;
const freezePath = `${DIR}/APP-PLAS_GATE4_FREEZE_RECORD_V0.1.json`;
const evidencePath = `${DIR}/APP-PLAS_GATE4_EVIDENCE_INDEX_V0.1.json`;
const reportPath = `${DIR}/APP-PLAS_GATE4_COMPLETE_VISUAL_COMPOSITION_REPORT_V0.1.md`;
const selfCheckPath = `${REVIEW}/APP-PLAS_GATE4_EXECUTION_SELF_CHECK_V0.1.md`;
const submissionPath = `${REVIEW}/APP-PLAS_GATE4_REVIEW_SUBMISSION_V0.1.md`;
const manifestPath = `${PAGE}/APP-PLAS_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md`;
const independentReviewPath = `${REVIEW}/gate4-complete-independent-v0.1/REVIEW.md`;

fs.mkdirSync(path.dirname(independentReviewPath), { recursive: true });

const runtime = JSON.parse(fs.readFileSync(runtimePath, 'utf8'));
if (runtime.status !== 'PASS_PENDING_STATIC_VISUAL_READBACK' || runtime.failed.length || runtime.errors.length) {
  throw new Error('Runtime record is not eligible for freeze');
}
if (runtime.images.length !== 92) throw new Error(`Expected 92 images, found ${runtime.images.length}`);
for (const item of runtime.images) {
  if (!fs.existsSync(item.path) || sha(item.path) !== item.sha256 || fs.statSync(item.path).size !== item.bytes) {
    throw new Error(`Image identity mismatch: ${item.path}`);
  }
}

const readback = {
  page_id: 'APP-PLAS',
  workset_id: WORKSET_ID,
  freeze_id: FREEZE_ID,
  role: 'EXECUTION_STATIC_VISUAL_READBACK',
  date: DATE,
  status: 'STATIC_VISUAL_PASS',
  method: 'Every generated image was opened through the Codex image viewer. Full-page overviews were inspected for whole-page rhythm and closure; every overlapping segment was opened at original detail for readable continuity; all direction, Grade-path, Menu, Cookie and normal/hover/focus assets were opened.',
  counts: {
    total_opened: 92,
    full_pages: 3,
    continuous_segments: 51,
    direction_samples: 3,
    grade_path_context: 3,
    menu_states: 2,
    cookie_states: 3,
    normal_states: 9,
    hover_states: 9,
    focus_states: 9
  },
  findings: [],
  observations: [
    'All approved B V0.3 content remains readable at 1440, 768 and 390 with the twelve modules in the approved order.',
    'No clipping, horizontal overflow, abnormal void, broken section connection or Footer closure defect is visible in the full pages or continuous segments.',
    'The eight Grades remain equal-weight and in approved order; the presentation does not rank, recommend, equate or imply resin suitability.',
    'The one-candidate, several-candidate and unknown-Grade paths remain legible and separate, including the keep-results-separate instruction.',
    'The APP-MB handoff remains visually distinct and preserves its high-concentration masterbatch production/qualification ownership without displacing the final-plastic scope.',
    'Request Documents remains one-known-Grade based, Request Sample preserves known or unknown Grade, and RFQ preserves known lead or Not sure / Need help plus Additional Requirements for other candidates.',
    'Menu and Cookie surfaces are fully visible at applicable widths; all nine focus cases are visible and do not collide with labels, punctuation, neighboring text or adjacent lines.',
    'The restrained technical ring and fieldbook styling adds hierarchy without inventing a product image, process diagram, performance claim or Grade preference.'
  ],
  images: runtime.images.map(item => ({ ...item, opened: true })),
  boundary: 'Executor visual readback only. It is not independent review, user approval, Gate closure, Gate 6 authorization, implementation, deployment or publication.'
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
preflight.checks.opened_images = 92;
preflight.boundary = 'Execution freeze is eligible for independent review. This record is not independent review, user approval, Gate closure, Gate 6 authorization, implementation or publication.';
writeJson(preflightPath, preflight);

const input = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
if (input.inputs.length !== 52) throw new Error(`Expected 52 frozen inputs, found ${input.inputs.length}`);
for (const item of input.inputs) {
  if (!fs.existsSync(item.path) || sha(item.path) !== item.sha256 || fs.statSync(item.path).size !== item.bytes) {
    throw new Error(`Input identity mismatch: ${item.path}`);
  }
}

const freeze = {
  page_id: 'APP-PLAS',
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
      { width: 1440, height: 900, fullHeight: 9299 },
      { width: 768, height: 900, fullHeight: 11310 },
      { width: 390, height: 844, fullHeight: 16131 }
    ]
  },
  scope_facts: {
    url: '/applications/titanium-dioxide-for-plastics/',
    url_state: 'PROVISIONAL_URL',
    site_scope: 'tio2-my',
    language: 'EN',
    primary_keyword: 'titanium dioxide for plastics',
    approved_modules: ['PLAS-01', 'PLAS-02', 'PLAS-03', 'PLAS-04', 'PLAS-05', 'PLAS-06', 'PLAS-07', 'PLAS-08', 'PLAS-09', 'PLAS-10', 'PLAS-11', 'PLAS-12'],
    approved_visible_copy: 'APP-PLAS Gate 2 Buyer Clean B V0.3 exact visible copy',
    grades: ['M-350', 'M-510', 'M-200', 'M-108', 'M-210', 'M-340', 'M-886', 'M-2377'],
    document_context: { sourcePage: 'APP-PLAS' },
    sample_context: { application: 'Plastics', gradeMode: 'KNOWN_OR_UNKNOWN' },
    rfq_context: { application: 'Plastics', gradeMode: 'KNOWN_LEAD_OR_NOT_SURE', additionalCandidates: 'Additional Requirements' }
  },
  boundary: 'The executor freezes this page-local planning candidate for separate independent review. It does not claim independent PASS, user approval, closure, Gate 6 authorization, development, deployment or publication.'
};
writeJson(freezePath, freeze);

const stateCounts = runtime.images.reduce((acc, item) => {
  acc[item.state] = (acc[item.state] || 0) + 1;
  return acc;
}, {});
const evidence = {
  page_id: 'APP-PLAS',
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
    grade_path_context: stateCounts.GRADE_PATH_CONTEXT,
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
    approved_B_exact_and_link_order: 'PASS at 1440/768/390; exact main text, links, Header and Footer DOM match Gate 3 source',
    twelve_module_order: 'PASS',
    three_tables_and_thirteen_sources: 'PASS',
    eight_neutral_grades: 'PASS; exact list and order, equal visual weight, no rank/recommend/equivalence/resin-fit claim',
    one_several_unknown_grade_routes: 'PASS',
    app_plas_app_mb_owner_boundary: 'PASS',
    request_owner_boundaries: 'PASS',
    provisional_url_boundary: 'PASS; no canonical or Schema added',
    shared_chrome_and_legal: 'PASS',
    geometry_and_overflow: 'PASS at 1440/768/390',
    interactive_target_size: 'PASS; all visible controls at least 44x44 CSS px',
    high_risk_focus: '9/9 PASS; 3px #008078 outline, 4.8177:1 against white, no self-label or neighboring-text collision, normal/hover/focus geometry stable',
    menu_cookie: 'PASS for open, focus cycle, isolation and return at applicable widths',
    local_action_context: 'PASS; Documents, Sample and RFQ preserve their approved distinct Grade modes without network receipt',
    static_visual_readback: 'PASS; 92/92 images opened'
  },
  not_applicable: [
    'No page form, input, select, accordion, FAQ, request-result or media branch is approved; these states are not invented.'
  ],
  unverified: [
    'Final canonical route decision while URL remains PROVISIONAL_URL',
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
# APP-PLAS complete visual composition V0.1

${DATE}. Workset \`${WORKSET_ID}\`; freeze \`${FREEZE_ID}\`. Status \`COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW\`.

The 4A checkpoint established a technical evaluation fieldbook direction and advanced the same workset into 4B. Deep navy establishes hierarchy, Functional Teal is reserved for links, actions and focus, and white/soft surfaces separate the twelve reading stages. The restrained ring motif remains decorative. The approved no-image branch is complete and contains no empty placeholder or invented product/process image.

The candidate preserves the exact Gate 3 main-copy text, all 28 links, Header DOM and Footer DOM at 1440, 768 and 390. The twelve modules remain \`PLAS-01 → PLAS-02 → PLAS-03 → PLAS-04 → PLAS-05 → PLAS-06 → PLAS-07 → PLAS-08 → PLAS-09 → PLAS-10 → PLAS-11 → PLAS-12\`. Three tables and thirteen technical sources remain present. The eight Grades remain in approved order and equal visual weight, without ranking, recommendation, equivalence, resin fit, performance or availability implication.

The one-candidate, several-candidate and unknown-Grade routes stay explicit. APP-PLAS retains final-plastic scope; APP-MB retains high-concentration colour-masterbatch production and qualification. Request Documents asks for one known Grade, Request Sample permits known or unknown Grade, and RFQ permits a known lead Grade or \`Not sure / Need help\`, with other candidates in \`Additional Requirements\`.

Actual local Chromium execution produced full heights 9299/11310/16131px at 1440/768/390. It recorded 38 checks, zero failures and zero page errors. All visible controls meet 44×44 CSS px. Nine high-risk focus cases use a 3px \`#008078\` outline with 4.8177:1 contrast against white, show no self-label or neighboring-text collision, and retain stable normal/hover/focus geometry. Mobile Menu and Cookie open, isolation, focus loop, Escape/close and focus return passed at applicable widths.

All 92 generated images were opened: 3 full pages, 51 overlapping readable segments, 3 direction samples, 3 Grade-path context assets, 2 Menu states, 3 Cookie states and 27 normal/hover/focus images. No clipping, horizontal overflow, abnormal void, broken section connection or Footer closure defect was found.

The page URL remains \`PROVISIONAL_URL\`; this Gate 4 source does not add a canonical tag or Schema. Current source: ${src.bytes.toLocaleString('en-US')} bytes, SHA-256 \`${src.sha256}\`. Freeze: SHA-256 \`${frz.sha256}\`. Evidence index: SHA-256 \`${ev.sha256}\`. Runtime record: SHA-256 \`${rt.sha256}\`.

Executor unresolved required Findings: 0. Separate independent review remains required at [${slash(independentReviewPath)}](${slash(independentReviewPath)}). This execution does not claim independent PASS, user approval or closure and does not authorize Gate 6, implementation, deployment or publication.
`);

writeText(selfCheckPath, `
# APP-PLAS Gate 4 execution self-check V0.1

${DATE}. \`EXECUTION_SELF_CHECK_PASS / READY_FOR_INDEPENDENT_REVIEW\`; not independent approval. Workset \`${WORKSET_ID}\`; freeze \`${FREEZE_ID}\`.

The same workset completed 4A direction confirmation and 4B full composition. The frozen source preserves Buyer Clean B V0.3 exactly in visible main content, preserves all 28 links and the Gate 3 Header/Footer DOM, and retains the twelve approved modules in order. No Page ID, provisional URL state, primary keyword, source predicate, Grade relation, action owner or shared contract changed.

APP-PLAS boundaries pass: all eight Grades remain neutral and equal-weight; no rank, recommendation, equivalence, resin-fit, performance or availability claim appears. One candidate routes to its Grade page, several candidates remain separate comparisons, and an unknown Grade continues with known application context. APP-MB retains high-concentration masterbatch production/qualification. Documents uses one known Grade, Sample permits known or unknown Grade, and RFQ uses a known lead or \`Not sure / Need help\` with other candidates in Additional Requirements.

Actual runtime at 1440/768/390 records 38 checks, zero failures and zero page errors. Full heights are 9299/11310/16131px. Geometry, horizontal overflow, exact content/shared DOM parity, 12-module order, three tables, thirteen sources, current Applications navigation, visible target size, Menu and Cookie behavior all pass. Nine high-risk focus cases pass visibility, ≥44px target size, 4.8177:1 focus contrast, zero label/neighbor collision and stable normal/hover/focus geometry.

All 92 evidence images were opened: 3 full pages, 51 continuous segments, 3 direction samples, 3 Grade-path context assets, 2 Menu, 3 Cookie and 27 targeted normal/hover/focus images. Static readback found no clipping, abnormal void, broken connection or Footer closure defect. The input index binds 52 consumed identities; all were rechecked before freeze.

Source SHA-256: \`${src.sha256}\`. Freeze SHA-256: \`${frz.sha256}\`. Evidence-index SHA-256: \`${ev.sha256}\`.

Unresolved executor required Findings: **0**. Independent review must start from the freeze and evidence index and write only to [${slash(independentReviewPath)}](${slash(independentReviewPath)}). The final canonical route, production receivers, real-device and non-Chrome behavior, native zoom, screen-reader speech and actual Cookie inventory/persistence remain later-owner checks. Gate 6, development, deployment and publication are outside this execution.
`);

writeText(submissionPath, `
# APP-PLAS Gate 4 independent review submission V0.1

Status: \`DRAFT_FOR_PROJECT_CONTROL_REVIEW\`. Review target: \`${FREEZE_ID}\`; workset: \`${WORKSET_ID}\`.

Start with [Manifest V0.7](../APP-PLAS_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md), then verify the [freeze](../04_planning/gate4-v0.1/APP-PLAS_GATE4_FREEZE_RECORD_V0.1.json), [evidence index](../04_planning/gate4-v0.1/APP-PLAS_GATE4_EVIDENCE_INDEX_V0.1.json), [composition report](../04_planning/gate4-v0.1/APP-PLAS_GATE4_COMPLETE_VISUAL_COMPOSITION_REPORT_V0.1.md), [runtime record](../04_planning/gate4-v0.1/diagnostic_support/runtime-verification.json), [visual readback](../04_planning/gate4-v0.1/diagnostic_support/visual-readback.json) and [executor self-check](APP-PLAS_GATE4_EXECUTION_SELF_CHECK_V0.1.md).

Independently recompute all 52 frozen input identities, source/freeze/evidence identities and all 92 image identities. Open the three full pages and all 51 readable segments at 1440/768/390. Operate and inspect Menu/Cookie at applicable widths. Inspect \`Titanium Dioxide for Masterbatch\`, \`View M-2377\` and \`Request Documents\` in normal, hover and actual keyboard focus at all three widths; verify 9/9 focus visibility, ≥44px targets, contrast, zero collision and stable geometry.

Check exact Buyer Clean B V0.3 and link order, twelve modules, three tables, thirteen sources, shared Header/Footer, Applications current state without visible \`CURRENT\`, fixed RFQ, the exact eight-Grade list/order and neutral treatment. Check one/several/unknown Grade paths, APP-PLAS/APP-MB ownership, Documents/Sample/RFQ Grade-mode boundaries and \`PROVISIONAL_URL\` without canonical or Schema expansion. Confirm no form, FAQ, result or media branch is invented.

Write the independent result only to [${slash(independentReviewPath)}](${slash(independentReviewPath)}). Required Finding format applies; a PASS must state required Finding count 0 and \`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL\`. The executor makes no independent decision and claims no user approval, closure, Gate 6 authorization, implementation or publication.
`);

const selfId = identity(selfCheckPath);
const submissionId = identity(submissionPath);
const reportId = identity(reportPath);
const manifestPrev = identity(`${PAGE}/APP-PLAS_CURRENT_GATE_BASELINE_MANIFEST_V0.6.md`);

writeText(manifestPath, `
# APP-PLAS Current Gate Baseline Manifest V0.7

## 0. Current state

| Field | Value |
|---|---|
| Page ID / URL | \`APP-PLAS\` / \`/applications/titanium-dioxide-for-plastics/\` (\`PROVISIONAL_URL\`) |
| Page type / language | Application landing page / EN |
| Site scope | \`tio2-my\` |
| Manifest date | ${DATE} |
| Manifest role | \`UNIQUE_CURRENT_MANIFEST\` |
| Lifecycle | \`GATE4_COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW\` |
| Gate 1 | \`APPROVED / CLOSED\` |
| Gate 2 | \`FULL_COPY_AND_MODULE_ORDER_CONFIRMED / USER_APPROVED / CLOSED\` |
| Gate 3 | \`APP-PLAS-G3-APPROVAL-01 / USER_APPROVED / CLOSED\` |
| Gate 4 authorization | \`G4-13PAGE-BATCH4-01 / USER_AUTHORIZED\` |
| Gate 4 execution | \`4A CHECKED / 4B COMPLETE / FROZEN / SELF_CHECK_PASS\` |
| Gate 4 independent review | \`PENDING\` |
| Gate 4 user approval / delegated closure | \`NOT_CLAIMED_BY_EXECUTOR\` |
| Gate 6–10 | \`NOT_STARTED / NOT_AUTHORIZED_BY_THIS_EXECUTION\` |
| Previous Manifest | \`${path.basename(manifestPrev.path)}\` / \`${manifestPrev.sha256}\` |

V0.7 is the current APP-PLAS execution pointer. It retains the user-approved Gate 2 A/B/C and Gate 3 combination and binds the new Gate 4 freeze for separate independent review. It is not an independent PASS, user approval or Gate closure.

## 1. Approved page contract retained

| Role | Current file | SHA-256 | State |
|---|---|---|---|
| A — Content Skeleton | \`pages/applications/plastics/04_planning/APP-PLAS_GATE2_CONTENT_SKELETON_V0.2.md\` | \`370cefbd64f9146aaa5146989fad25312f7eb6ec0051c4a445ece74650365128\` | \`USER_APPROVED / CLOSED\` |
| B — sole visible Buyer Copy | \`pages/applications/plastics/04_planning/APP-PLAS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md\` | \`8db6d6fa979831e1e5c5930bdfe3ec261bb74d252304658251a37932bbea4f92\` | \`USER_APPROVED / CLOSED / SOLE_VISIBLE_COPY_SOURCE\` |
| C — stable content contract | \`pages/applications/plastics/04_planning/APP-PLAS_GATE2_CONTENT_CONTRACT_V0.3.md\` | \`646cc89f7c331d22c77d1d71abf2f605c44d1cd2eb4fd633f8a0f72ded5aa204\` | \`USER_APPROVED / CLOSED\` |
| Gate 3 frozen source | \`pages/applications/plastics/04_planning/gate3-v0.1/APP-PLAS_GATE3_WIREFRAME_V0.1.html\` | \`252bc39147933465c91ad9d506dabd8b57e99e8f9122198c9af0da0c733ec55e\` | \`USER_APPROVED / CLOSED\` |
| Gate 3→4 handoff | \`pages/applications/plastics/05_review/APP-PLAS_GATE3_TO_GATE4_HANDOFF_V0.1.md\` | \`cacacb833f90433fe9bb83f8334b94cd77e024246bb0e16e3decde66b623d260\` | \`READY_FOR_GATE4_WHEN_AUTHORIZED\` |

The approved provisional URL, keyword, twelve modules, complete B, link order, source predicates, eight neutral Grade relations, one/several/unknown Grade routes, APP-MB exit and request-owner boundaries are unchanged.

## 2. Gate 4 method and authority

The input index binds 52 consumed identities, including workflow V3.2, unified standard V2.2, Gate 4 baseline Manifest V1.3, Agent V0.2, Brand Applied Visual Design V0.2, Full-page Visual Composition V0.2, Layout & Interaction Verification V0.4, Application Playbook, governance and the approved brand, CTA, Global Chrome, Logo and legal contracts. Root Status and Index were read only for routing and are intentionally excluded from the freeze.

\`G4-13PAGE-BATCH4-01\` authorizes APP-PLAS Gate 4 in batch 1. \`G346-DELEGATED-CLOSURE-20260907\` permits later controller closure only after executor, separate independent review and controller conditions are satisfied. This executor stops at review submission and does not exercise closure authority.

## 3. Frozen Gate 4 candidate

| Role | Path | Bytes | SHA-256 / status |
|---|---|---:|---|
| Complete visual source | \`${slash(sourcePath)}\` | ${src.bytes} | \`${src.sha256}\` |
| Input index | \`${slash(inputPath)}\` | ${identity(inputPath).bytes} | \`${identity(inputPath).sha256}\` / 52 inputs |
| Workset | \`${slash(worksetPath)}\` | ${identity(worksetPath).bytes} | \`${identity(worksetPath).sha256}\` / \`${WORKSET_ID}\` |
| Preflight | \`${slash(preflightPath)}\` | ${identity(preflightPath).bytes} | \`${identity(preflightPath).sha256}\` / PASS |
| Freeze | \`${slash(freezePath)}\` | ${frz.bytes} | \`${frz.sha256}\` / \`${FREEZE_ID}\` |
| Evidence index | \`${slash(evidencePath)}\` | ${ev.bytes} | \`${ev.sha256}\` / 92 images |
| Runtime verification | \`${slash(runtimePath)}\` | ${rt.bytes} | \`${rt.sha256}\` / 38 checks, 0 failures, 0 errors |
| Static visual readback | \`${slash(readbackPath)}\` | ${identity(readbackPath).bytes} | \`${identity(readbackPath).sha256}\` / 92 opened |
| Composition report | \`${slash(reportPath)}\` | ${reportId.bytes} | \`${reportId.sha256}\` |
| Execution self-check | \`${slash(selfCheckPath)}\` | ${selfId.bytes} | \`${selfId.sha256}\` / 0 unresolved Findings |
| Review submission | \`${slash(submissionPath)}\` | ${submissionId.bytes} | \`${submissionId.sha256}\` |

Any change to the frozen source ends this identity and requires a new freeze and affected evidence.

## 4. Evidence coverage and execution result

- Approval core: three complete pages and five applicable Menu/Cookie states.
- Continuous readability: 51 overlapping segments, all opened at original detail.
- Direction and Grade path: three representative 4A samples and three Grade-path context assets.
- High-risk controls/links: three targets × three widths × normal/hover/focus = 27 images; 9/9 focus cases pass.
- Runtime: 38 checks, zero failures, zero page errors; exact content/shared DOM parity, geometry, 44px targets, action contexts, Menu and Cookie behavior passed.
- Static visual readback: 92/92 images opened; no blocking defect found.
- Executor unresolved required Findings: 0.

This is executor evidence. Separate independent review must recompute identities, operate the candidate and inspect the evidence before any project-control PASS.

## 5. Open items and stop boundary

| Item | State |
|---|---|
| Independent review | \`PENDING\`; output only at \`${slash(independentReviewPath)}\` |
| Gate 4 project-control state | \`DRAFT_FOR_PROJECT_CONTROL_REVIEW\` |
| User approval / delegated closure | Pending independent review and controller conditions; not claimed here |
| Final canonical route while URL is provisional | Later authorized owner; no canonical/Schema added here |
| Production route/receiver/CMS/device/runtime isolation | Later owner / Gate 6, 8 or 9 verification |
| Gate 6 / development / deployment / publication | Outside this execution |

No file outside \`D:/23MySec/pages/applications/plastics\` was edited by this execution.

## 6. Manifest version record

| Version | Date | Meaning |
|---|---|---|
| V0.6 | ${DATE} | Gate 3 user-approved/closed combination; Gate 3→4 handoff ready when authorized |
| V0.7 | ${DATE} | Gate 4 4A→4B execution completed and frozen for separate independent review; no independent PASS, user approval or closure claimed |
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
