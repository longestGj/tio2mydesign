const fs = require('fs');
const crypto = require('crypto');

const base = 'D:/23MySec/pages/markets/belgium';
const oldDir = `${base}/04_planning/gate4-v1.0`;
const out = `${base}/04_planning/gate4-v1.1`;
const pageId = 'MARKET-EU-BE';
const worksetId = 'BE-G4-COMPLETE-20260907-02';
const freezeId = 'BE-G4-FREEZE-20260907-02';
const shaBuffer = buffer => crypto.createHash('sha256').update(buffer).digest('hex');
const identity = path => {
  const buffer = fs.readFileSync(path);
  return { path, bytes: buffer.length, sha256: shaBuffer(buffer) };
};
const writeJson = (path, value) => fs.writeFileSync(path, JSON.stringify(value, null, 2) + '\n');
const pngSize = path => {
  const buffer = fs.readFileSync(path);
  if (buffer.toString('ascii', 1, 4) !== 'PNG') throw new Error(`Not a PNG: ${path}`);
  return { physical_width: buffer.readUInt32BE(16), physical_height: buffer.readUInt32BE(20) };
};

const sourcePath = `${out}/${pageId}_GATE4_COMPLETE_VISUAL_V1.1.html`;
const inputPath = `${out}/${pageId}_GATE4_INPUT_INDEX_V1.1.json`;
const worksetPath = `${out}/${pageId}_GATE4_WORKSET_V1.1.json`;
const preflightPath = `${out}/${pageId}_GATE4_PREFLIGHT_RECORD_V1.1.json`;
const freezePath = `${out}/${pageId}_GATE4_FREEZE_RECORD_V1.1.json`;
const evidencePath = `${out}/${pageId}_GATE4_EVIDENCE_INDEX_V1.1.json`;
const revisionPath = `${out}/diagnostic_support/revision-admission-and-diff.json`;
const focusRuntimePath = `${out}/diagnostic_support/focus-repair-runtime.json`;
const regressionPath = `${out}/diagnostic_support/render-r1/runtime-checks.json`;
const visualReadbackPath = `${out}/diagnostic_support/visual-readback-and-identity.json`;
const revision = JSON.parse(fs.readFileSync(revisionPath, 'utf8'));
const focus = JSON.parse(fs.readFileSync(focusRuntimePath, 'utf8'));
const regression = JSON.parse(fs.readFileSync(regressionPath, 'utf8'));
const visual = JSON.parse(fs.readFileSync(visualReadbackPath, 'utf8'));
const input = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
if (!revision.unchangedAfterReversingLocalRule || revision.source.sha256 !== identity(sourcePath).sha256) throw new Error('Source delta is not the exact admitted BE-04 repair');
if (focus.status !== 'PASS_PENDING_STATIC_VISUAL_READBACK' || focus.failed.length || focus.errors.length) throw new Error('Focus repair runtime is not clear');
if (regression.status !== 'RUNTIME_PASS_PENDING_VISUAL' || regression.failed.length || regression.errors.length) throw new Error('Regression runtime is not clear');
if (!visual.result.startsWith('STATIC_VISUAL_PASS') || visual.opened_assets.total !== 40) throw new Error('Visual readback is incomplete');
if (input.workset_id !== worksetId || input.upstream.some(item => identity(item.path).sha256 !== item.sha256) || input.current_methods_and_contracts.some(item => identity(item.path).sha256 !== item.sha256)) throw new Error('Input identity changed');

const oldSource = identity(`${oldDir}/${pageId}_GATE4_COMPLETE_VISUAL_V1.0.html`);
const oldFreeze = identity(`${oldDir}/${pageId}_GATE4_FREEZE_RECORD_V1.0.json`);
const oldEvidencePath = `${oldDir}/${pageId}_GATE4_EVIDENCE_INDEX_V1.0.json`;
const oldEvidence = JSON.parse(fs.readFileSync(oldEvidencePath, 'utf8'));
const oldReview = identity(`${base}/05_review/gate4-complete-independent-v1.0/REVIEW.md`);

writeJson(worksetPath, {
  page_id: pageId,
  workset_id: worksetId,
  mode: 'FINDING_TARGETED_REPAIR',
  finding_id: 'BE-G4-IR-01',
  authority_manifest: `${base}/${pageId}_CURRENT_GATE_BASELINE_MANIFEST_V0.6.md`,
  prior_execution_manifest: `${base}/${pageId}_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md`,
  rejected_freeze: oldFreeze,
  independent_finding: oldReview,
  input_index: inputPath,
  design_source: sourcePath,
  evidence_index: evidencePath,
  allowed_write_scope: base,
  authorization_scope: 'Repair only the two BE-04 paragraph-link focus indicators and submit a new freeze for independent focused re-review. Preserve approved B, URLs, module structure, brand/shared contracts and all prior evidence. No Gate6, implementation or publishing.'
});

writeJson(preflightPath, {
  page_id: pageId,
  workset_id: worksetId,
  finding_id: 'BE-G4-IR-01',
  result: 'PASS_FOR_NEW_FREEZE_PENDING_INDEPENDENT_FOCUSED_REREVIEW',
  admitted_delta: "main [data-module='BE-04'] p:not(.action) a adds padding-inline:6px and page-local outline-offset:-3px; all other source bytes reverse exactly to V1.0.",
  upstream_identity_checks: revision.checks.length,
  upstream_identity_failures: revision.checks.filter(item => !item.matches).length,
  regression_runtime_checks: regression.checks.length,
  regression_runtime_failures: regression.failed.length,
  focused_runtime_checks: focus.checks.length,
  focused_runtime_failures: focus.failed.length,
  static_assets_opened: visual.opened_assets,
  focus_acceptance: {
    cases: focus.focus_states.length,
    self_label_collisions: focus.focus_states.reduce((sum, item) => sum + item.focus.selfHits.length, 0),
    neighboring_text_collisions: focus.focus_states.reduce((sum, item) => sum + item.focus.neighborHits.length, 0),
    minimum_target_height: Math.min(...focus.focus_states.map(item => item.focus.rect.height)),
    minimum_target_width: Math.min(...focus.focus_states.map(item => item.focus.rect.width)),
    minimum_focus_contrast: Math.min(...focus.focus_states.map(item => item.focus_contrast_against_white)),
    geometry_stable: focus.focus_states.every(item => item.geometry_stable)
  },
  full_page_heights: focus.full_pages.map(item => ({ width: item.logical_width, height: item.physical_height })),
  continuous_segments: focus.continuous_segments.length,
  retained_state_equivalence: focus.retained_state_equivalence.map(item => ({ width: item.width, state: item.state, pixel_identical: item.pixel_identical, sha256: item.rerendered_sha256 })),
  boundaries: ['No copy, URL, module, shared Chrome, brand, consent, form or behavior change.', 'Executor self-check cannot close the Finding or approve Gate 4.']
});

const dependencies = [
  `${out}/dependencies/Inter-Variable.ttf`,
  `${out}/dependencies/Inter-OFL.txt`,
  'D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg',
  'D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg'
].map(identity);
writeJson(freezePath, {
  page_id: pageId,
  workset_id: worksetId,
  freeze_id: freezeId,
  finding_id: 'BE-G4-IR-01',
  status: 'COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW',
  frozen_at: new Date().toISOString(),
  source: identity(sourcePath),
  input_index: identity(inputPath),
  workset: identity(worksetPath),
  preflight: identity(preflightPath),
  direction_carried_forward: identity(`${oldDir}/${pageId}_GATE4_VISUAL_DIRECTION_CHECK_V1.0.md`),
  previous_rejected_combination: { source: oldSource, freeze: oldFreeze, evidence_index: identity(oldEvidencePath), independent_review: oldReview },
  dependencies,
  renderer: { browser: focus.runtime.chrome, viewports: focus.full_pages.map(item => ({ width: item.logical_width, height: item.logical_width === 390 ? 844 : 900, fullHeight: item.physical_height })), dpr: 1, font: 'Inter Variable local', network: 'HTTP(S) blocked; local file rendering' },
  correction: { selector: "main [data-module='BE-04'] p:not(.action) a", added: ['padding-inline:6px', 'outline-offset:-3px'], normal_hover_focus_geometry_stable: true },
  note: 'Formal full pages and continuous segments were regenerated. Five unaffected Menu/Cookie assets remain under the immutable V1.0 path and were independently rerendered from V1.1 to byte-identical PNG hashes before carry-forward.'
});

const newImages = [];
for (const item of focus.full_pages) newImages.push({ ...identity(item.path), classification: 'STATIC_VISUAL', role: 'approval_core', logical_width: item.logical_width, physical_width: item.physical_width, physical_height: item.physical_height, dpr: 1, state: 'FULL', opened: true, regenerated_for_v1_1: true });
for (const item of focus.continuous_segments) newImages.push({ ...identity(item.path), classification: 'STATIC_VISUAL', role: 'diagnostic_support', logical_width: item.logical_width, physical_width: item.physical_width, physical_height: item.physical_height, dpr: 1, state: 'CONTINUOUS_SEGMENT', clip: item.clip, opened: true, regenerated_for_v1_1: true });
for (const state of focus.focus_states) for (const image of state.images) newImages.push({ ...identity(image.path), classification: 'STATIC_VISUAL', role: 'diagnostic_support', logical_width: state.width, ...pngSize(image.path), dpr: 1, state: image.path.match(/-(normal|hover|focus)\.png$/)[1].toUpperCase(), target: state.label, opened: true, regenerated_for_v1_1: true });
const retainedImages = focus.retained_state_equivalence.map(item => {
  const actual = identity(item.previous.path);
  if (!item.pixel_identical || actual.sha256 !== item.previous.sha256) throw new Error(`Retained ${item.width} ${item.state} identity failed`);
  return { ...actual, classification: 'STATIC_VISUAL', role: 'approval_core', logical_width: item.width, physical_width: item.previous.physical_width, physical_height: item.previous.physical_height, dpr: 1, state: item.state, opened: true, retained_from_freeze: 'BE-G4-FREEZE-20260907-01', v1_1_rerendered_sha256: item.rerendered_sha256, pixel_identical_under_v1_1: true };
});
const images = [...newImages, ...retainedImages].sort((a, b) => a.path.localeCompare(b.path));
writeJson(evidencePath, {
  page_id: pageId,
  workset_id: worksetId,
  freeze_id: freezeId,
  finding_id: 'BE-G4-IR-01',
  source: identity(sourcePath),
  freeze: identity(freezePath),
  previous_rejected_evidence_index: identity(oldEvidencePath),
  counts: { total_unique_images: images.length, new_full_pages: focus.full_pages.length, retained_menu_cookie_states: retainedImages.length, regenerated_continuous_segments: focus.continuous_segments.length, new_focus_state_images: focus.focus_states.flatMap(item => item.images).length, opened_new_images: visual.opened_assets.total },
  images,
  observations: [
    { ...identity(revisionPath), classification: 'SOURCE_INSPECTION' },
    { ...identity(regressionPath), classification: 'ACTUAL_RUNTIME', checks: regression.checks.length, failures: regression.failed.length },
    { ...identity(focusRuntimePath), classification: 'ACTUAL_RUNTIME', checks: focus.checks.length, failures: focus.failed.length },
    { ...identity(visualReadbackPath), classification: 'STATIC_VISUAL' }
  ],
  finding_acceptance: { status: 'EXECUTION_SELF_CHECK_PASS_PENDING_INDEPENDENT_FOCUSED_REREVIEW', focus_cases: focus.focus_states.length, self_label_collisions: 0, neighboring_text_collisions: 0, minimum_target: '>=44px width and height', focus_contrast: '4.8177:1 against white', normal_hover_focus_geometry_stable: true },
  unchanged_coverage: { direction: 'V1.0 direction remains valid and unchanged', menu_cookie: 'Five V1.0 formal state PNGs carried with byte-identical V1.1 rerender proof', shared_behavior: 'Re-executed in V1.1 regression; no failures' },
  not_applicable: oldEvidence.not_applicable,
  unverified: oldEvidence.unverified,
  boundary: 'Local planning evidence only. Navigation and receiver outcomes remain LOCAL_SIMULATION_NOT_RECEIVED. This index does not confer independent review PASS, user approval, Gate6 authorization, implementation or publication.'
});

const result = {
  workset: identity(worksetPath),
  preflight: identity(preflightPath),
  freeze: identity(freezePath),
  evidence: identity(evidencePath),
  source: identity(sourcePath),
  images: images.length,
  observations: 4,
  checks: { regression: regression.checks.length, focus: focus.checks.length, failures: regression.failed.length + focus.failed.length }
};
console.log(JSON.stringify(result));
