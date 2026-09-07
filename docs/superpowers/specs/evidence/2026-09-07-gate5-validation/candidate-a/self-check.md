# Candidate A — actual execution self-check

2026-09-07. Subject: G5-LAB-01-CANDIDATE-A-F1, exact identity in [freeze.json](freeze.json). Result: local required scope complete for independent exercise review. This is the author's self-check using layout-interaction-verification V0.2, not an independent PASS, user page approval or Gate 6 conclusion.

## Core invariants

| Check | Evidence type and actual result | Evidence |
|---|---|---|
| Identity / authority | SOURCE_INSPECTION + hashes: original task/content/rules/methods recorded; synthetic authority and real design approval separated; four source files frozen before formal export | freeze.json; diagnostic/identity-check.json |
| Full content / relationships | SOURCE_INSPECTION + ACTUAL_RUNTIME + STATIC_VISUAL: O/C/R exact strings found from raw input; table and card records match field-for-field; N/F/shell read against brief; all complete on three widths | exports/runtime.json fixedStrings; diagnostic/supplementary.json relationships; default pages and crops |
| Geometry / targets | ACTUAL_RUNTIME + STATIC_VISUAL: all measured states have viewport-equal width, no measured horizontal outliers or overflowing clipped containers; all visible controls >=44×44; no observed collision or abnormal empty spacer | runtime geometry; supplementary center hits; formal images |
| Shared assembly | SOURCE_INSPECTION: neutral shell owned by current brief, production Chrome/Logo/Consent intentionally not applicable; Header heights 84/64/64 | current brief, source and runtime |
| Overlay operation | ACTUAL_RUNTIME: compact menu focus entry/loop/exit, inert refusal, style/scroll restoration, link close, desktop resize close | runtime behaviors, supplementary backgroundFocus, two menu PNGs |
| Actions / boundary | ACTUAL_RUNTIME + LOCAL_SIMULATION: href values are local anchors; preview sends nothing and preserves required input; network listener saw zero external requests | runtime metadata/behaviors/externalRequests |
| Full visual examination | STATIC_VISUAL: every formal PNG opened; full default pages examined through overlapping readable crops and exact raster identity match; absent transition and all key-state visuals inspected | final-visual-report.md; inventory; diagnostic/preflight-reading-crops |

## Specific risks and observed outcomes

- 768 comparison: all four columns remain. Beta's long record name and its dilute-dispersion condition remain in the same row; no dry percentage is substituted. At 390 each card repeats all field labels and retains the correct note. Alpha's 94.5 %, Beta's 0.001 g/L and Gamma's 12–18 µm remain distinct. Source equality and visual reading were both used.
- Long selection: full Beta name is visible in every selected control and preview. The 390 control expands to three lines; no ellipsis or tooltip substitute. Actual ArrowDown/Enter changes selection, clears feedback and keeps question text. Escape cancels the popup without committing the focused Beta item.
- Invalid preview: keyboard submission with question text returns actual focus to record, exposes exact error and leaves textarea intact. The error expands flow; actions and following heading remain visible in contextual evidence.
- Success: local simulation retains inputs, shows exact success and full prefixed selected name only after Preview. Clear removes record and result while preserving the question. A separate Alpha preview accepts a blank optional question.
- FAQ: both initially closed; question 2 opened with Enter and actual focus-visible. Question 1 toggled with Space while question 2 stayed open. Closing restored flow. Footer moved by the answer's actual height plus margin. Full answers remain readable.
- Media absent: actual query branch hides the whole figure, title and caption, expands O text width to 1200/704/350px and preserves actions. Default/absent full-page exports are separate.
- Menu: current freeze restores scroll and focus after Escape, removes inert and body lock, and closes on local link selection and desktop resize. Inert background refused a direct focus attempt on record. This demonstrates Chrome-local behavior, not assistive-technology output.

## Findings and retest

| ID / class | Expected / observed before fix | Change and acceptance result |
|---|---|---|
| SELF-01 / source behavior, important | Escape must restore prior scroll while returning toggle focus. In preflight-02, focus scrolled back to the offscreen header after restoring 500px scroll | source/app.js now uses menuToggle.focus({preventScroll:true}). Prior JS saved at diagnostic/app-before-scroll-fix.js. preflight-05/06 and formal run passed 500px restoration at 768/390 plus adjacent menu paths. Author retest complete, independent review pending |
| TOOL-01 / evidence capture | preflight-01 requested a document-coordinate clip with viewport-only screenshot; Chrome rejected clipped area | Renderer fixed to use full-page coordinate range. Failure and first image retained. Not a page defect |
| TOOL-02 / evidence assertion | preflight-03/04 required style=null while actual restored styles were empty string, inactive lock and inert false; hash reached #comparison | Assertion accepts absent or empty inactive style. No page change. Later actual checks pass; not a page defect |

No remaining author-observed required local defect at submission. Independent reviewer may find additional issues. Capture boundaries were refined before freeze to include whole surrounding heading/actions. No frozen source or formal asset was altered after capture.

## Evidence limits

Actual runtime is Chrome 152.0.7977.82, three supplied logical widths, native mobile 2x, local file. Actual glyph inspection covers H1 and FontFace status, not every SVG glyph. Center hits are sampled center points, not exhaustive edge/corner touch testing. Contrast uses opaque fixed/computed colors; no photographic composite is present. No-JS behavior, other browsers/devices, true browser UI zoom and assistive-technology announcements were not verified. No live request, production receiver, CMS, production Chrome/Consent, real indexing delivery or future site_scope runtime was tested. These exclusions are explicitly supplied by the lab brief and do not hide a missing mandatory local state.

This report, final specification, freeze, runtime, source and required assets were saved and read back. Asset inventory and identity check confirm presence, byte counts and hashes. The independent report and receiving evaluation belong to root and are not authored or edited here.
