const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const ROOT = 'D:/23MySec';
const PAGE = `${ROOT}/pages/applications/plastics`;
const OLD = `${PAGE}/04_planning/gate4-v0.1`;
const OUT = `${PAGE}/04_planning/gate4-v0.2`;
const SUPPORT = `${OUT}/diagnostic_support`;
const REGRESSION = `${SUPPORT}/regression-full`;
const SNAPSHOTS = `${OUT}/snapshots`;
const WORKSET_ID = 'APP-PLAS-G4-COMPLETE-20260907-02';
const FREEZE_ID = 'APP-PLAS-G4-FREEZE-20260907-02';
const FINDING_ID = 'APP-PLAS-G4-R01';

for (const dir of [OUT, SUPPORT, REGRESSION, SNAPSHOTS]) fs.mkdirSync(dir, { recursive: true });

const oldSource = `${OLD}/APP-PLAS_GATE4_COMPLETE_VISUAL_V0.1.html`;
const oldInputPath = `${OLD}/APP-PLAS_GATE4_INPUT_INDEX_V0.1.json`;
const oldFreezePath = `${OLD}/APP-PLAS_GATE4_FREEZE_RECORD_V0.1.json`;
const oldEvidencePath = `${OLD}/APP-PLAS_GATE4_EVIDENCE_INDEX_V0.1.json`;
const oldRuntimePath = `${OLD}/diagnostic_support/runtime-verification.json`;
const oldReadbackPath = `${OLD}/diagnostic_support/visual-readback.json`;
const oldReviewPath = `${PAGE}/05_review/gate4-complete-independent-v0.1/REVIEW.md`;
const oldAuditPath = `${PAGE}/05_review/gate4-complete-independent-v0.1/identity-audit.json`;
const liveBatchControlPath = `${ROOT}/docs/architecture/GATE4_THIRTEEN_PAGE_BATCH4_CONTROL_V1.0.md`;
const batchControlSnapshotPath = `${SNAPSHOTS}/GATE4_THIRTEEN_PAGE_BATCH4_CONTROL_V1.0.frozen.md`;
const inputPath = `${OUT}/APP-PLAS_GATE4_INPUT_INDEX_V0.2.json`;
const worksetPath = `${OUT}/APP-PLAS_GATE4_WORKSET_V0.2.json`;
const regressionPath = `${SUPPORT}/three-viewport-regression.json`;
const metadataReadbackPath = `${SUPPORT}/image-metadata-readback.json`;
const preflightPath = `${OUT}/APP-PLAS_GATE4_PREFLIGHT_RECORD_V0.2.json`;
const freezePath = `${OUT}/APP-PLAS_GATE4_FREEZE_RECORD_V0.2.json`;
const evidencePath = `${OUT}/APP-PLAS_GATE4_EVIDENCE_INDEX_V0.2.json`;

const slash = p => p.replace(/\\/g, '/');
const shaBytes = b => crypto.createHash('sha256').update(b).digest('hex');
const identity = p => {
  const b = fs.readFileSync(p);
  return { path: slash(p), bytes: b.length, sha256: shaBytes(b) };
};
const writeJson = (p, value) => fs.writeFileSync(p, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
const readJson = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const sameIdentity = (declared, p = declared.path) => {
  const actual = identity(p);
  return actual.bytes === declared.bytes && actual.sha256 === declared.sha256;
};
const pngSize = p => {
  const b = fs.readFileSync(p);
  assert(b.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])), `Not PNG: ${p}`);
  return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
};
const settle = page => page.evaluate(async () => {
  await document.fonts.ready;
  await Promise.all([...document.images].map(image => image.decode()));
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
});

async function main() {
  const oldInput = readJson(oldInputPath);
  const oldFreeze = readJson(oldFreezePath);
  const oldEvidence = readJson(oldEvidencePath);
  const oldRuntime = readJson(oldRuntimePath);
  const oldAudit = readJson(oldAuditPath);

  assert(oldInput.inputs.length === 52, 'Expected 52 original frozen inputs');
  const oldInputDrift = oldInput.inputs.filter(item => !sameIdentity(item));
  assert(oldInputDrift.length === 1 && oldInputDrift[0].path === liveBatchControlPath, `Unexpected predecessor input drift: ${oldInputDrift.map(item => item.path).join(', ')}`);
  fs.copyFileSync(liveBatchControlPath, batchControlSnapshotPath);
  const frozenInputs = oldInput.inputs.map(item => item.path === liveBatchControlPath ? identity(batchControlSnapshotPath) : item);
  for (const item of frozenInputs) assert(sameIdentity(item), `V0.2 frozen input drift: ${item.path}`);
  assert(oldEvidence.images.length === 92, 'Expected 92 original evidence images');
  assert(identity(oldSource).sha256 === 'fd61a0b74f81c094af4193dcd323cb6f4965321ff453039e0b7bd58c6891e6f9', 'Candidate source changed');
  assert(identity(oldFreezePath).sha256 === 'd685eaf70e4bf781924a19c11e28751e26b2c7c2805476eab9e195a2304faa89', 'Old freeze changed');
  assert(identity(oldEvidencePath).sha256 === '5239d64dcf6db4ece3b8647c7247ca209688eec8443037e330293db002746ecd', 'Old evidence index changed');
  assert(identity(oldReviewPath).sha256 === '77462b8743744fbe1a1386192264638398bd6b6aa7715fdce78887176a6074ca', 'Failed independent review changed');

  const correctedImages = oldEvidence.images.map(item => {
    assert(sameIdentity(item), `Evidence image drift: ${item.path}`);
    const size = pngSize(item.path);
    return { ...item, physical_width: size.width, physical_height: size.height, dpr: 1 };
  });
  const states = correctedImages.filter(item => ['NORMAL', 'HOVER', 'FOCUS'].includes(item.state));
  const grades = correctedImages.filter(item => item.state === 'GRADE_PATH_CONTEXT');
  assert(states.length === 27, `Expected 27 target-state images, found ${states.length}`);
  assert(grades.length === 3, `Expected 3 Grade-path images, found ${grades.length}`);

  const expectedGrades = new Map([[1440, [1440, 727]], [768, [768, 747]], [390, [390, 269]]]);
  for (const item of grades) {
    const expected = expectedGrades.get(item.logical_width);
    assert(expected && item.physical_width === expected[0] && item.physical_height === expected[1], `Grade dimensions incorrect: ${item.path}`);
  }
  const expectedStates = {
    1440: { 'Titanium Dioxide for Masterbatch': [1004, 124], 'View M-2377': [742, 124], 'Request Documents': [410, 127] },
    768: { 'Titanium Dioxide for Masterbatch': [649, 124], 'View M-2377': [445, 124], 'Request Documents': [728, 127] },
    390: { 'Titanium Dioxide for Masterbatch': [323, 124], 'View M-2377': [370, 124], 'Request Documents': [374, 125] }
  };
  for (const item of states) {
    const expected = expectedStates[item.logical_width]?.[item.target];
    assert(expected && item.physical_width === expected[0] && item.physical_height === expected[1] && item.dpr === 1, `State dimensions incorrect: ${item.path}`);
  }

  const input = {
    page_id: 'APP-PLAS', workset_id: WORKSET_ID, status: 'INPUTS_BOUND_FOR_TARGETED_METADATA_REPAIR', generated_at: new Date().toISOString(),
    counts: { frozen_inputs: frozenInputs.length, predecessor_inputs_retained_exact: 51, refreshed_current_authority_snapshots: 1, repair_sources: 6 }, inputs: frozenInputs,
    repair_sources: [identity(`${PAGE}/APP-PLAS_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md`), identity(oldFreezePath), identity(oldEvidencePath), identity(oldReviewPath), identity(oldAuditPath), identity(oldRuntimePath)],
    dynamic_navigation_excluded: oldInput.dynamic_navigation_excluded,
    note: `${FINDING_ID} repair only. Fifty-one predecessor inputs remain byte-identical. The changed shared batch-control file is refreshed from the current authority and frozen as a page-local snapshot; its change only stops later batches and does not alter APP-PLAS scope. The candidate source and 92 image bytes remain unchanged.`
  };
  writeJson(inputPath, input);

  const workset = {
    page_id: 'APP-PLAS', workset_id: WORKSET_ID, predecessor_workset_id: oldEvidence.workset_id,
    mode: 'TARGETED_GATE4_EVIDENCE_AND_FREEZE_METADATA_REPAIR', finding_id: FINDING_ID,
    source: identity(oldSource), input_index: identity(inputPath), predecessor_freeze: identity(oldFreezePath), predecessor_evidence_index: identity(oldEvidencePath),
    evidence_index: slash(evidencePath), allowed_write_scope: PAGE,
    immutable_visual_scope: { candidate_source_sha256: identity(oldSource).sha256, evidence_image_count: 92, evidence_image_bytes_must_remain_exact: true },
    correction_scope: ['390 renderer viewport height', 'three Grade-path physical heights', 'physical_width/physical_height/dpr for 27 target-state images', 'dependent metadata identities'],
    freeze_id: FREEZE_ID,
    independent_rereview_entry: `${PAGE}/05_review/gate4-complete-independent-v0.2/REVIEW.md`,
    status: 'TARGETED_METADATA_REPAIR_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REREVIEW',
    boundary: 'Executor repair only; no independent review, Gate closure, Gate 6, development, deployment or publication.'
  };
  writeJson(worksetPath, workset);

  const checks = [];
  const check = (name, pass, detail) => checks.push({ name, status: pass ? 'PASS' : 'FAIL', detail });
  const rerenders = [];
  let browser;
  try {
    browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--disable-background-networking'] });
    for (const width of [1440, 768, 390]) {
      const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
      await context.route(/^https?:/, route => route.abort());
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto(pathToFileURL(oldSource).href);
      await settle(page);
      const layout = await page.evaluate(() => ({
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        fullHeight: document.documentElement.scrollHeight,
        modules: [...document.querySelectorAll('[data-module-id]')].map(node => node.dataset.moduleId),
        grades: [...document.querySelectorAll('.module-plas-10 tbody tr td:first-child .cell-value')].map(node => node.textContent.trim()),
        canonical: document.querySelectorAll('link[rel="canonical"]').length,
        jsonLd: document.querySelectorAll('script[type="application/ld+json"]').length,
        contentSignature: (() => {
          const clone = document.querySelector('main').cloneNode(true);
          clone.querySelectorAll('.cell-label').forEach(node => node.remove());
          return { textLength: clone.textContent.replace(/\s+/g, ' ').trim().length, links: [...document.querySelectorAll('main a')].map(a => ({ text: a.innerText.trim(), href: a.getAttribute('href') })) };
        })()
      }));
      const screenshot = `${REGRESSION}/${width}-full.png`;
      await page.screenshot({ path: screenshot, fullPage: true });
      const official = `${OLD}/approval_core/APP-PLAS_GATE4_${width}_FULL_V0.1.png`;
      rerenders.push({ width, viewport: { width, height: 900, dpr: 1 }, full_height: layout.fullHeight, content_signature: layout.contentSignature, rerender: identity(screenshot), frozen: identity(official), pixel_exact: identity(screenshot).sha256 === identity(official).sha256 });
      check(`${width}/viewport and overflow`, layout.clientWidth === width && layout.scrollWidth === width, layout);
      check(`${width}/module and Grade invariants`, layout.modules.length === 12 && layout.grades.join('|') === 'M-350|M-510|M-200|M-108|M-210|M-340|M-886|M-2377', { modules: layout.modules, grades: layout.grades });
      check(`${width}/provisional URL boundary`, layout.canonical === 0 && layout.jsonLd === 0, { canonical: layout.canonical, jsonLd: layout.jsonLd });
      check(`${width}/runtime errors`, errors.length === 0, errors);
      check(`${width}/full-page pixel identity`, rerenders.at(-1).pixel_exact, rerenders.at(-1));
      await context.close();
    }
  } finally {
    if (browser) await browser.close();
  }
  check('content signature stable against original runtime', rerenders.every(item => {
    const original = oldRuntime.content_signatures.find(candidate => candidate.width === item.width);
    return original && original.textLength === item.content_signature.textLength && JSON.stringify(original.links) === JSON.stringify(item.content_signature.links);
  }), rerenders.map(item => ({ width: item.width, current: item.content_signature, original: oldRuntime.content_signatures.find(candidate => candidate.width === item.width) })));
  const failed = checks.filter(item => item.status === 'FAIL');
  const regression = {
    page_id: 'APP-PLAS', workset_id: WORKSET_ID, freeze_id: FREEZE_ID, role: 'EXECUTOR_TARGETED_METADATA_REPAIR_REGRESSION', generated_at: new Date().toISOString(),
    source: identity(oldSource), renderer: { browser: oldRuntime.runtime.chrome, node: process.version, headless: true, dpr: 1, network: 'HTTP(S) blocked; local file rendering', viewports: [{ width: 1440, height: 900 }, { width: 768, height: 900 }, { width: 390, height: 900 }] },
    checks, summary: { total: checks.length, passed: checks.length - failed.length, failed: failed.length }, rerenders,
    unchanged_visual_result: failed.length ? 'FAIL' : 'PASS_THREE_FULL_PAGES_PIXEL_EXACT',
    boundary: 'Targeted regression for metadata repair; not independent review or Gate approval.'
  };
  writeJson(regressionPath, regression);
  assert(failed.length === 0, `Regression failures: ${failed.map(item => item.name).join(', ')}`);

  const metadataReadback = {
    page_id: 'APP-PLAS', workset_id: WORKSET_ID, freeze_id: FREEZE_ID, role: 'EXECUTOR_DIRECT_PNG_METADATA_READBACK', generated_at: new Date().toISOString(), status: 'PASS',
    counts: { frozen_inputs_exact: 52, evidence_images_exact_identity: 92, evidence_images_exact_dimensions: 92, grade_path_context_corrected: 3, target_states_completed: 27 },
    renderer_correction: { predecessor_declared: { width: 390, height: 844 }, actual_and_current: { width: 390, height: 900, dpr: 1 } },
    grade_path_actual_dimensions: grades.map(item => ({ path: item.path, logical_width: item.logical_width, physical_width: item.physical_width, physical_height: item.physical_height, dpr: item.dpr, sha256: item.sha256 })),
    state_actual_dimensions: states.map(item => ({ path: item.path, logical_width: item.logical_width, state: item.state, target: item.target, physical_width: item.physical_width, physical_height: item.physical_height, dpr: item.dpr, sha256: item.sha256 })),
    images: correctedImages.map(item => ({ path: item.path, bytes: item.bytes, sha256: item.sha256, physical_width: item.physical_width, physical_height: item.physical_height, dpr: item.dpr, exact: true }))
  };
  writeJson(metadataReadbackPath, metadataReadback);

  const preflight = {
    page_id: 'APP-PLAS', workset_id: WORKSET_ID, freeze_id: FREEZE_ID, finding_id: FINDING_ID, status: 'PASS_FOR_TARGETED_INDEPENDENT_REREVIEW',
    source: identity(oldSource), input_index: identity(inputPath), workset: identity(worksetPath), regression: identity(regressionPath), metadata_readback: identity(metadataReadbackPath),
    checks: { frozen_inputs: '52/52', evidence_images_identity_and_dimensions: '92/92', grade_paths: '3/3', target_states: '27/27', three_viewport_regression: `${regression.summary.passed}/${regression.summary.total}`, full_page_pixel_identity: '3/3' },
    content_visual_url_module_contract_drift: 'NONE', boundary: 'Metadata-only executor preflight; separate independent re-review is required.'
  };
  writeJson(preflightPath, preflight);

  const freeze = {
    page_id: 'APP-PLAS', workset_id: WORKSET_ID, freeze_id: FREEZE_ID, predecessor_freeze_id: oldFreeze.freeze_id, finding_id: FINDING_ID,
    status: 'TARGETED_METADATA_REPAIR_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REREVIEW', frozen_at: new Date().toISOString(),
    source: identity(oldSource), input_index: identity(inputPath), workset: identity(worksetPath), preflight: identity(preflightPath), regression: identity(regressionPath), metadata_readback: identity(metadataReadbackPath),
    predecessor_freeze: identity(oldFreezePath), predecessor_evidence_index: identity(oldEvidencePath), predecessor_failed_review: identity(oldReviewPath),
    renderer: { browser: oldRuntime.runtime.chrome, node: process.version, headless: true, dpr: 1, network: 'HTTP(S) blocked; local file rendering', font: 'Inter Variable local', viewports: rerenders.map(item => ({ width: item.width, height: 900, fullHeight: item.full_height })) },
    scope_facts: oldFreeze.scope_facts,
    repair_result: { candidate_source_changed: false, evidence_image_bytes_changed: false, evidence_images: 92, physical_dimensions_and_dpr_complete: 92, finding_response: FINDING_ID },
    boundary: 'New metadata-only freeze for targeted independent re-review; no independent PASS, Gate closure, Gate 6, development, deployment or publication.'
  };
  writeJson(freezePath, freeze);

  const stateCounts = correctedImages.reduce((acc, item) => { acc[item.state] = (acc[item.state] || 0) + 1; return acc; }, {});
  const evidence = {
    ...oldEvidence,
    workset_id: WORKSET_ID,
    freeze_id: FREEZE_ID,
    status: 'DRAFT_FOR_TARGETED_PROJECT_CONTROL_REREVIEW',
    source: identity(oldSource),
    freeze: identity(freezePath),
    input_index: identity(inputPath),
    counts: { ...oldEvidence.counts, frozen_inputs: 52, total_unique_images: 92, opened_images: 92, grade_path_context: stateCounts.GRADE_PATH_CONTEXT, normal_states: stateCounts.NORMAL, hover_states: stateCounts.HOVER, focus_states: stateCounts.FOCUS, executor_required_findings: 0 },
    images: correctedImages,
    observations: [
      { ...identity(regressionPath), classification: 'TARGETED_THREE_VIEWPORT_RUNTIME_REGRESSION', checks: regression.summary.total, failures: regression.summary.failed, full_page_pixel_exact: 3 },
      { ...identity(metadataReadbackPath), classification: 'DIRECT_PNG_IDENTITY_AND_DIMENSION_READBACK', images: 92, exact: 92 },
      { ...identity(preflightPath), classification: 'TARGETED_REPAIR_PREFLIGHT' },
      { ...identity(oldRuntimePath), classification: 'UNCHANGED_ORIGINAL_ACTUAL_RUNTIME' },
      { ...identity(oldReadbackPath), classification: 'UNCHANGED_ORIGINAL_STATIC_VISUAL_READBACK' },
      { ...identity(`${OUT}/verify-and-rebuild-metadata.cjs`), classification: 'V0.2_REPRODUCTION_SCRIPT' }
    ],
    repair: { finding_id: FINDING_ID, predecessor_workset_id: oldEvidence.workset_id, predecessor_freeze_id: oldEvidence.freeze_id, source_sha_unchanged: true, all_92_image_identities_unchanged: true, corrected_grade_path_records: 3, completed_target_state_records: 27, physical_dimensions_and_dpr_complete: 92, three_viewport_full_page_pixel_exact: 3 },
    boundary: 'Metadata-only repair evidence for separate targeted independent re-review. It does not confer independent review PASS, Gate closure, Gate 6 authorization, implementation or publication.'
  };
  writeJson(evidencePath, evidence);

  console.log(JSON.stringify({
    status: 'PASS_FOR_TARGETED_INDEPENDENT_REREVIEW', workset_id: WORKSET_ID, freeze_id: FREEZE_ID,
    source: identity(oldSource), input_index: identity(inputPath), workset: identity(worksetPath), regression: identity(regressionPath), metadata_readback: identity(metadataReadbackPath), preflight: identity(preflightPath), freeze: identity(freezePath), evidence_index: identity(evidencePath),
    counts: { frozen_inputs: 52, evidence_images: 92, dimensions_exact: 92, state_records_completed: 27, grade_records_corrected: 3, regression_checks: regression.summary, full_pages_pixel_exact: 3 }
  }, null, 2));
}

main().catch(error => { console.error(error.stack || error); process.exitCode = 1; });
