# G5-LAB-01 receiving revision B — independent assessment

Date: 2026-09-07. Scope: bounded synthetic receiving-package exercise; not an actual page Gate 6 review. Initial assessment made from raw requirements and source authority, then reconciled with A's supporting records. No other reviewer report or controller plan was read. No source or receiving-package file was edited.

**Result: RETURN_FOR_RECEIVING_METADATA_CORRECTION.** Revision B is inspectable, but its current manifest is not coherent enough to accept as the receiving package. Three required corrections are below. All required underlying visual assets were found; the tablet default defect is an inventory omission, not a missing image or request for new rendering.

| Independent status dimension | Assessment |
|---|---|
| Underlying material availability | COMPLETE_FOR_BOUNDED_RECEIVING_INSPECTION: editable source, local dependency, inputs, freeze/preflight, reports, runtime and all required width/state assets are present and independently hash-checked |
| Current B manifest coherence | NEEDS_CORRECTION: incorrect source hash and missing mandatory default-full entry |
| Page Gate 5 approval | NONE; design approval is not approval of this synthetic page |
| Actual Gate 6 authorization | NOT_AUTHORIZED |
| Authorized activity | Isolated validation, independent review and receiving rehearsal under G5-DESIGN-APPROVAL-01 |
| Visual/runtime acceptance | Not decided by this review; separate complete visual audit owns that judgment |

## Stable findings

### G5-RCV-001 — Current source identity does not match the delivered HTML

Status: OPEN / required before accepting B. Location: `../receiving-b/catalog.json`, `sourceIdentity[0].sha256`.

The current catalog declares 5325 bytes and an all-zero SHA-256 for `../candidate-a/source/index.html`. Independent file hashing finds 5325 bytes and SHA-256 `3ec171570aec364981e9d7c1309bdfbb29ef7e9022efc00db4e45966d2bc35b5`. A's freeze and formal runtime declare the latter identity and match the file. The other three B source records match their files.

The recomputed actual source combination, using the freeze's ordered candidate-relative records and stated JSON algorithm, is `320230f713e39ed5b296c5cfe6e220ab45f6d414f689f44a6d83079d687c2c74`, matching the B combined hash. B's own source declarations, normalized to those same candidate-relative paths, instead yield `f1d88ed5c7270d13b3dc72569316b70578b8ce789ce3afe92e1c2d8283e95304`. Thus B does not give the receiver one internally consistent source identity even though the underlying frozen source is intact.

Required correction: receiving-metadata owner corrects the HTML record to its verified identity in a preserved successor revision; verify all source records and their relation to the declared freeze/combination. No page-source edit or render is indicated by this finding. Basis: approved Gate 5 design §5.2 visual combination and §5.3 source/image consistency. Raw evidence: `verification-b.json` → `catalogSourceChecks[0]`, `freezeSourceChecks`, `runtimeSourceChecks`, `combined`.

### G5-RCV-002 — Mandatory 768 default full-page evidence is omitted from the current inventory

Status: OPEN / required before accepting B. Location: `../receiving-b/catalog.json`, `assets` and `coverageClaim`.

B lists 22 assets and claims full-page default coverage at 1440, 768 and 390 logical widths. It contains no asset with `viewportWidth: 768` and `state: default-full`. The raw brief explicitly requires a full default page at all three widths; the 768 media-absent page cannot replace the default media-present composition.

The required file does exist at `../candidate-a/exports/768-default-full.png`: independently read dimensions 768 × 3277 pixels, 287012 bytes, SHA-256 `ad351441cc8c1eede7bbe093422787bce60b6ed56ef929a2a395e7078aec7166`. A's inventory and formal runtime agree. The runtime records a 768 × 1000 viewport, DPR 1, a full-page capture with no clip, default empty question/placeholder selection, closed menu and FAQs, and no error/result. Therefore this is a current-manifest omission with recoverable supporting evidence, not loss of an asset.

Required correction: receiving-metadata owner adds the verified default-full pointer and its state/viewport/DPR/dimensions/bytes/hash to the successor current catalog, then recalculates coverage against the raw brief. Preserve the image. Basis: brief “State scope and receiving contracts”; approved design §5.2 three-width/state identities and §5.3 required assets. Raw evidence: `verification-b.json` → `coverage` row 768/default-full, `inventoryAllChecks`, `runtimeCaptureSummary`.

### G5-RCV-003 — Design-validation authority is incorrectly promoted to page approval and actual Gate 6 authorization

Status: OPEN / required authority correction; no actual Gate 6 may start. Location: `../receiving-b/catalog.json`, `pageApproval`, `actualGate6Authorization`, `authority`.

B declares `pageApproval: USER_APPROVED` and `actualGate6Authorization: AUTHORIZED` while citing G5-DESIGN-APPROVAL-01. The original decision expressly approves the Agent/Skill design and limited isolated validation; it expressly does not start any registered page Gate 5/6 or approve isolated output as a real website page. The raw brief independently says the synthetic page has no user Gate 5 approval and actual Gate 6 is not authorized. A's freeze/manifest/handoff correctly separate these dimensions. No later or broader approval source is supplied by B.

Required correction: receiving-metadata owner records page approval as NONE (or an equivalently explicit synthetic-unapproved status), actual Gate 6 authorization as NOT_AUTHORIZED, and retains a separate exercise-authorization field referring to the decision's real scope. Package completeness must remain a distinct dimension and must not confer approval. Basis: original decision; raw brief; approved design §5.1, §5.3 and §5.4; root AGENTS §2.3 and §3. Raw evidence: the independently read decision at `../../../2026-09-07-gate5-design-user-approval-v0.1.md`; its verified 1836 bytes / SHA-256 `e3f7d904a2587258de3e2b1e85a356bff8a604dc399dbd249a4b6fac8dac65a5` in `verification-b.json` → `freezeInputChecks` and `authorityRefs`.

## Remaining receiving contract assessment

The raw brief is the current synthetic task authority for complete order, N/F/shell, states and metadata. The archived input's Exact visible content / Regions O–R remains the unique O/C/R editorial authority; only the archived report's concrete visual rule table applies as visual input. Exact input and precursor hashes match their freeze records. Real Page Registry, commercial URL/keyword, company fact approval, production brand/chrome and registered-page Brief are deliberately N/A under the authorized isolated exercise; no real identity was inferred.

The actual four source/dependency files match A's freeze, runtime source records and A inventory. All 22 B-listed PNGs match actual bytes, SHA-256 and PNG dimensions. A's complete inventory has 23 formal PNGs, including the omitted tablet default; all source and asset entries checked there match. Its preflight records, renderer and prerequisite input/precursor identities are readable and match declared hashes. Supporting A records are evidence, not a substitute current receiving manifest; B's entry explicitly declares B current, so A's historical “current” wording is interpreted in that hierarchy rather than treated as a second current revision.

Required defaults, media-absent composition, missing-record error with a nonempty question, long Beta selected, Beta preview, FAQ2 expanded/focused at all three widths and compact menus at 768/390 have actual supporting files and recorded capture states. Mobile PNGs are 780 physical pixels at declared 390 logical/DPR 2; Desktop/Tablet are DPR 1. Recorded before/after state flags agree; four mobile request captures change scrollY only, not selection/question/error/result/focus/menu/FAQ flags. This review checks receiving traceability, not a fresh visual/readability or keyboard execution verdict.

The source and original action authority retain local anchor targets, single record/optional question, exact missing-record and preview language, clearing/selection reset semantics and no sending. HTML title, description and noindex match the brief; Canonical and JSON-LD are absent. Formal runtime metadata supports those observations at all widths; its logged failures, page errors and external HTTP(S) requests are empty. The runtime PASS is author-run evidence and does not replace independent runtime review. No network action was executed by this receiver.

Neutral shell ownership is the exercise brief. Production Chrome/Logo/Consent are correctly out of scope, not undeclared substitutes. A's handoff supplies a usable dependency table: future receiver owner for delivery, Global Chrome/legal/consent owners for production shared assembly, development owner for CMS/scoped route/robots/Canonical, and runtime/accessibility QA owner for platforms/assistive technology. Applicable future Gate 7 contract, Gate 8 implementation, Gate 9 verification and separate Gate 10 publication are identified. Local preview limitations do not justify hiding Preview or blocking synthetic visual work. `site_scope=tio2-my` remains a future real-project contract, not an implemented lab route claim.

The report, preflight and self-check are secondary supporting evidence. The initial reading and findings above were not derived from the author's PASS language. This receiver does not close source finding SELF-01, grant page approval or author a Gate 6 verdict.

## Verification record and reinspection

Independent verifier: [verify-b.cjs](verify-b.cjs). Raw results: [verification-b.json](verification-b.json). The verifier reads only declared receiving/source/authority/evidence records and writes inside receiving-review. Reviewed B catalog identity: 9053 bytes / SHA-256 `08cd68b8a67b2db2078027ee5274faedf4e336a004def6ab394da7b5c1ec1672`.

Reinspect a distinct corrected receiving revision using the same Finding IDs. Required acceptance: matching source identities, required tablet default included, full required coverage reconciled, accurate separate page/exercise/Gate 6 status fields, and unchanged valid underlying source/evidence or an explicitly declared new freeze. Do not overwrite B history. This finite synthetic exercise makes no general detection-rate or production-readiness claim.
