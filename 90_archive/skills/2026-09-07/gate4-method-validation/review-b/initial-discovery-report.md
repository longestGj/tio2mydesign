# Candidate B — independent initial discovery

Date: 2026-09-07. Disposition: **REVISE**. This is an isolated Gate 4 method exercise review, not project-control PASS, user approval, production-page acceptance or publishing authorization.

## Identity, authority and complete tested scope

Reviewed only `D:/23MySec/99_workspace/gate4-method-validation-2026-09-07/candidate-b/`: index.html, styles.css, app.js, assets/Inter-Variable.ttf and all 15 supplied evidence PNGs. Candidate identity is independently calculated in [inventory.json](inventory.json), including bytes, SHA-256 and physical dimensions. Core hashes:

- index.html: `5fc8a718f81003b1fdf29ee2ffeb13c9f95f4a8c3576d52a06519e275cf0c4c6`
- styles.css: `a11ad5627b3b855c66accfa4a9a38ba84844e1974874b19ae2b62f134dd33b92`
- app.js: `5345815539e498ae262da6a976db9f16d11ebd90e6cd4bbff3e94c6f5f9654ff`

Authority read: root AGENTS.md and PROJECT_CONTEXT.md; exercise input.md and review-contract.md; Visual Standard V1.0 and Primary CTA Accessibility Addendum V1.0; Gate 1–5 Standard V1.1 (Gate 4 and common rules); governance §§9/13; Directory Guide; layout-interaction-verification and brand-applied-visual-design SKILL.md. The synthetic exercise explicitly fixes content/structure and excludes production brand identity/Global Chrome, so no real Page ID, keyword ownership or page Brief approval is inferred.

Before saving this report, I did not read controller files, mutation records, other reviews, designer reports, design-v1, supplied observations.json or build scripts. Candidate/source files were not edited. Review scripts/evidence are confined to review-b.

| Logical viewport, scale | Supplied PNG states visually inspected in full | Independent live checks |
|---|---|---|
| 1440, 1× | Initial, missing-record error with question, Beta selected, Beta success, media absent | All five states; keyboard focus/options; selection change; clear; optional empty question; both anchors |
| 768, 1× | Same five | Same checks |
| 390, 1× | Same five | Same checks |

PNG physical widths are respectively 1440/768/390; this is not 780px imagery mistaken for tablet. Every supplied long PNG was opened at readable scale: desktop/tablet in overlapping 900px-height crops, mobile in 390px-wide slices arranged for inspection. Crops retain 50px vertical overlap; gray canvas in mobile inspection sheets is reviewer padding, not candidate UI. The required source assets and all PNGs have independent hashes.

Local testing used bundled Playwright with headless Chrome, file URLs, 900px viewport height and deviceScaleFactor=1; [runtime.cjs](runtime.cjs), [runtime-observations.json](runtime-observations.json), [compare.cjs](compare.cjs) and [source-export-check.json](source-export-check.json) preserve reproduction and measurements. External requests were blocked; none were attempted and no page errors were observed. No actual request was sent.

## Strengths and method application to preserve

The navy headings, body color, white/soft surfaces, moderate 8px control and 12px panel/card radii, and restrained original diagram support calm technical reading. There is one responsive visual system: H1 56/44/36px, H2 38/34/28px, body at least 16px; section padding changes 64×48 → 48×32 → 40×20px. Main container is 1296px with 1200px desktop content; comparison proportions are 25/15/30/30; request fields are a single column capped at 800px. These are actual source rules, not proof that a separate author report correctly documents them.

Inter loaded locally in every tested state. CDP identified custom Inter as the font actually rendering the intro at each width; the candidate font SHA-256 equals input-assets/Inter-Variable.ttf. No visible text item measured below the exercise's 16px minimum. Visible controls including open options measured at least 158.91px wide (334px on mobile) and 50.39px high, exceeding both 44px target dimensions. No horizontal document overflow or off-viewport element was measured in the tested states. This does not excuse the deliberately hidden note below.

The hardest comparison is the 768px four-column table: Beta's long name/condition wrap over multiple lines but remain associated with the correct 0.001 g/L value and Note B. All three table rows and four columns are retained. At 390, record ordering and value/unit pairings remain clear, but Beta loses its note (B-03).

The most failure-prone request path passed local behavior checks: invalid preview retains the nonempty question, displays exact error next to the selector and focuses #record; choosing Beta clears the error and displays its full name (including three lines on mobile); success preserves inputs, shows the exact success sentence and selected-name prefix after actions. Selection change clears the previous success/summary. Clear selection resets record, errors, success and summary while preserving question. A blank optional question succeeds with a selected record. Tab reaches anchors → record → textarea → preview → clear; Enter/arrows choose a single option, Home/End navigate, Escape closes with focus returned to record, and Tab exits the popup to question. Both local anchor destinations were observed.

The redundant SVG is aria-hidden and contains only Value/Unit/Condition. Caption sits outside the SVG. Media absence removes the full figure/title/caption without a placeholder and preserves heading/intro/actions; desktop orientation copy expands from 780.38px to 1200px. No real imagery or external asset was used.

Source/export correspondence: all 15 rerenders have exactly matching dimensions; nine are pixel-identical to supplied exports. Six differ only in tested control hover/focus areas caused by actual keyboard/mouse operation; bounding boxes are logged. There is no evidence of stale exports. Three separately opened [focus-options-1440.png](evidence/focus-options-1440.png), [focus-options-768.png](evidence/focus-options-768.png), [focus-options-390.png](evidence/focus-options-390.png) record real keyboard focus, which exposes B-02. Supplied five-state exports alone did not demonstrate a distinct focus outline; reviewer-operated evidence supplements that limited state record.

## Required findings

### B-01 — Added certification claim changes the fixed content and meaning

Severity: **阻塞 / blocking**. Location: index.html, Region O `.authority-mark`; all widths and all supplied states, including media absent.

Expected: the exact neutral shell and supplied Orientation content, without invented authority/trust claims. Actual: a prominent outlined `Certified supplier` badge appears before H1. It is not in the raw input and implies certified supplier status in a fictional reference-material interface. Its action-like outline also competes with the actual actions. This is a content/visual-meaning defect, not missing evidence to be silently cured by inventing certification.

Evidence: [desktop initial top](evidence/supplied-1440-initial-0.png), [mobile initial full slices](evidence/supplied-390-initial.png), source `.authority-mark` markup and style.

Acceptance: remove the unrequested badge/claim and its reserved spacing; retain exact H1, intro and both actions. Re-export all widths and media branches and verify no certification cue or new copy appears. Candidate author owns correction; reviewer rechecks the adjacent heading/media geometry.

### B-02 — Late teal override violates the approved functional color and contrast requirements

Severity: **阻塞 / blocking**. Location: styles.css late `:root{--teal:#00A99D}`; filled primary controls, light-surface borders/chevrons and focus outlines, all widths. Expected: functional teal #008078 from the later addendum; normal text ≥4.5:1 and meaningful non-text boundaries/focus ≥3:1.

Actual: the late rule overrides the earlier correct #008078 token. Computed control styles use #00A99D. White 16px primary labels on that fill measure **2.932:1** (<4.5); #00A99D boundaries/focus against white measure **2.932:1**, and against soft #F5F8FB **2.751:1** (<3). Hovering a primary changes it to navy, but the compliant hover does not repair the initial/default state. Error text #8C2532 on white is 8.657:1; body #334155 on white/soft is 10.355/9.715:1, so this finding concerns the functional teal role rather than all text.

Evidence: [contrast.json](contrast.json), computed styles in runtime-observations.json, [desktop initial controls](evidence/supplied-1440-initial-2.png), [real mobile focused option](evidence/focus-options-390.png).

Acceptance: restore #008078 to functional controls on light surfaces and verify computed default, hover, selected/open, invalid and focus combinations. At #008078, white contrast is 4.818:1 and soft-surface contrast is 4.520:1. Preserve the scoped distinction between functional teal and decorative/brand teal rather than globally changing unrelated assets. Re-render relevant controls/focus at all widths and calculate actual color pairs. Candidate author owns correction.

### B-03 — Mobile Beta card hides its associated Note

Severity: **阻塞 / blocking**. Location: styles.css final mobile rule `.record-card:nth-child(2) .pair:last-child{display:none}` at max-width 600px; Region C, 390px, all five states.

Expected: every mobile card contains Record, Measured value, Measurement condition and associated Note in full. Actual: Beta ends after its condition; `Note` and `B — Preserve the unit and preparation condition when copying this result into an evaluation note.` are absent. They exist in source and desktop/tablet table but are display:none on mobile. No overflow measurement can detect this completeness failure.

Impact: a mobile reader loses the record-specific preservation instruction and encounters asymmetric comparison information precisely where careful unit/condition reading is the purpose of the exercise.

Evidence: [390 initial full slices, third column](evidence/supplied-390-initial.png), [390 media absent](evidence/supplied-390-media-absent.png), runtime cards' visible text in runtime-observations.json. Expected text is present in app.js and raw input.md.

Acceptance: show Beta's exact Note label and text within its card at 390 with content-driven height, no truncation/tooltip/scroll substitute; keep A/B/C associations and order. Check all five 390 states plus unchanged complete tables at 768/1440. Candidate author owns correction.

## Suggestions and unverified scope

No additional design suggestion is needed before these three corrections. The 768px table is dense but readable; density alone is not a defect. The open list overlays following form content as a transient popup; it closes by selection/Escape/Tab, so that conventional behavior is not reported as lost form content.

The full method handoff/report, author's rule-to-evidence mapping, original rendering provenance and author self-check process were intentionally outside initial blinded review; their completeness cannot be certified from these candidate files. The supplied image set cannot alone prove keyboard operation; the live observations above cover the listed paths only. Screen-reader announcements, accessibility tree semantics across assistive technologies, touch hardware, non-Chrome engines, zoom/reflow beyond supplied widths, font-failure simulation, and all possible keyboard sequences were not tested. No claim is made about production Global Chrome, real company facts, CMS/backend, real submission, site scope isolation, deployment or publication.

Next responsible party: **the candidate author/exercise controller** should address B-01–B-03 in a new isolated candidate version, keep this initial report immutable and submit source plus refreshed full-width/state exports. An independent re-review should retain these IDs, verify their acceptance criteria and inspect adjacent layout/interaction regression; only the user/project controller can make later stage decisions.

Saved review evidence remains under `D:/23MySec/99_workspace/gate4-method-validation-2026-09-07/review-b/`. The report was read back and referenced evidence existence checked before return.
