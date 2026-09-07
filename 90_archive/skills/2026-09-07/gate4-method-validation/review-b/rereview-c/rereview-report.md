# Candidate C — targeted re-review of B-01–B-03

2026-09-07. Disposition: **NO_REQUIRED_FINDING_IN_TESTED_SCOPE**. All three original acceptance conditions are met by C in the tested scope. This is an artifact-repair outcome, not Gate closure, project-control approval or production acceptance. [The initial B report](../initial-discovery-report.md) remains unchanged.

## Candidate and evidence

Reviewed `D:/23MySec/99_workspace/gate4-method-validation-2026-09-07/candidate-c/` against the original input.md, B findings and candidate-c-revision-response.md. The brand addendum and two review methods used for initial discovery remain the criteria. No controller mutation plan, original designer files or other reviews were read; the response was treated as a claim to verify. C and B were read-only. New review artifacts are confined to this rereview-c directory.

Independent [inventory.json](inventory.json) records bytes, SHA-256 and dimensions for C source/font and all 18 supplied PNGs. Current source identity:

- index.html: `e44f1fd6d757cc3d94ae5e2da11ecf7cca86ea1ba8d96a9e2826127d967392c3`
- styles.css: `5fd72b0afea19934d89cf9dee03830a385c8a2a1698225d1a353d7b25f83a794`
- app.js: `5345815539e498ae262da6a976db9f16d11ebd90e6cd4bbff3e94c6f5f9654ff`

Independent source comparison confirms C changes only the added badge markup and the three offending CSS rules; app.js is identical to B. Font SHA-256 remains identical to the supplied Inter asset. CDP again identifies custom Inter rendering at all three widths.

All 15 refreshed full state images and 3 focused-option images were opened in complete readable overlapping slices. Each width (1440/768/390 logical at 1×) includes initial, error with nonempty question, Beta selected, successful Beta preview, media absent and focused options. Desktop/tablet slices are 900px high with 50px overlap; mobile slices retain 390px width. Gray padding in reviewer sheets is outside the sample.

Bundled Playwright/Chrome 152.0.7977.82 ran C locally at the three widths, height 900, scale 1. Scripts and raw independent measurements: [runtime.cjs](runtime.cjs), [runtime-observations.json](runtime-observations.json), [acceptance.cjs](acceptance.cjs), [acceptance-observations.json](acceptance-observations.json), [compare.cjs](compare.cjs), [source-export-check.json](source-export-check.json). No external requests or page errors were observed; external network access was blocked in the browser. No real submission was performed.

## Original finding outcomes

| Original ID | Acceptance outcome | Actual evidence and adjacent checks |
|---|---|---|
| **B-01** | **Met in C** | Certified supplier and `.authority-mark` are removed from markup/styles. All media-present/absent states at all three widths show exact supplied H1/intro/actions without an added certification cue. Orientation → Comparison → Request order is intact. Desktop media absence expands copy from 780.38px to 1200px; figure/title/caption disappear together. No badge-sized placeholder remains. See [1440 initial](evidence/supplied-1440-initial-0.png), [1440 absent](evidence/supplied-1440-media-absent-0.png), [390 absent](evidence/supplied-390-media-absent.png). |
| **B-02** | **Met in C** | Computed functional color is now #008078 for default filled primary controls, functional borders/chevrons and actual 3px keyboard outlines. White labels are **4.818:1**. Functional border/focus versus white/soft is **4.818/4.520:1**, exceeding the applicable thresholds. Actual primary hover is navy #062B5B with white text (**13.959:1**); secondary hover has navy text on soft background and the functional teal border. Open unselected/selected options use white/soft backgrounds with navy text; focused option retains the teal outline. Keyboard-triggered invalid preview retains a teal focus outline and #8C2532 error border/text (white contrast **8.657:1**). The SVG and unrelated visual assets remain unchanged. See [contrast.json](contrast.json), acceptance-observations.json, [1440 focused option](evidence/supplied-1440-focus-options-2.png), [768 focused option](evidence/supplied-768-focus-options-2.png), [390 focused option](evidence/supplied-390-focus-options.png). |
| **B-03** | **Met in C** | Beta's card now visibly contains Note and the exact full sentence: “B — Preserve the unit and preparation condition when copying this result into an evaluation note.” All five mobile states retain it. All three ordered cards preserve their four label/value/condition/note pairs and correct associations; heights follow content. The 768/1440 tables retain all four columns, complete rows, values and associated notes. See [390 initial](evidence/supplied-390-initial.png), [390 success](evidence/supplied-390-success.png), [768 comparison](evidence/supplied-768-initial-1.png) and runtime visible-card text. |

The retained design strengths are the legible technical table/card hierarchy, restrained diagram, content-driven long selected value and clear request action. No extra design change is recommended from this re-review.

## Three-width adjacent regression

At every width, invalid preview preserves the question, reveals the exact adjacent error and focuses the selector; selection clears error. Beta's entire long name remains readable, including mobile line wrapping. Success keeps inputs, shows the exact selected name and success text after actions. Changing selection clears previous feedback/summary. Clear resets the record/error/success/summary and keeps the question. A selected record with blank optional question succeeds. Both anchors still land on their intended IDs.

Keyboard checks repeated Tab order through both anchors, record, question, preview and clear; Enter/arrows/Home/End selection, Escape closing and focus return, and Tab exit from the popup. Selection remains single. These observations cover the exercised interactions, not every possible keyboard or assistive-technology pattern.

All tested states retain document scrollWidth equal to viewport width with no off-viewport element detected. Body and control text remain at least 16px. Actual controls including open options remain at least 158.91px wide (334px mobile) and 50.39px high, above the required 44×44px. Visual inspection found no clipping of long names/notes, unwanted content gaps, changed field order or broken media fallback. The tablet table is dense but retains readable complete relationships.

All 15 re-rendered state dimensions match the supplied C state images. Nine are pixel-identical; remaining differences are localized to interaction state outlines/hover and small control/result edge rendering. The source, observed content and layout correspond; exact byte equality is not claimed for those interaction captures. Focus screenshots supplied by C show the actual focused option; independent keyboard operation reproduced the corresponding real outline and computed color, so this conclusion does not rest on a drawn state.

## Limits and handback

No new required finding in this tested scope. Prior limits persist: no screen-reader/assistive-technology verification, non-Chrome browser testing, physical touch hardware, extra widths/zoom, font-failure simulation, production Global Chrome, backend/site-scope or publishing verification. The original author's full method report and process provenance remain outside this review; C passing these corrections does not establish all-method completeness or a production Gate decision.

Next responsible party: **exercise controller** should retain B, C, the initial findings and this re-review as the controlled validation record, then assess the method exercise separately. There is no remaining candidate-author correction requested for B-01–B-03. User/project authority remains responsible for any later scope or Gate decision.

Report read back and referenced evidence checked before return. All saved paths are under `D:/23MySec/99_workspace/gate4-method-validation-2026-09-07/review-b/rereview-c/`; earlier evidence is preserved.
