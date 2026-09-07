# Independent initial review — design-v1

Date: 2026-09-07. Disposition: **NO_REQUIRED_FINDING_IN_TESTED_SCOPE**. This is a bounded synthetic Gate 4 method evaluation, not project-control PASS, user approval, a production-page review or a Gate advancement.

## Identity and isolation

Candidate: `D:/23MySec/99_workspace/gate4-method-validation-2026-09-07/design-v1/`. Inspected `index.html`, `styles.css`, `app.js`, bundled Inter font and every one of the 24 supplied PNGs. Read the raw exercise input, review contract, two referenced brand standards, project entry/context, applicable Gate 4 standards and the layout-interaction-verification / brand-applied-visual-design methods. The exercise explicitly supplies a neutral shell and fixed synthetic content, so real-page registry, production Chrome assembly and factual publication approvals are not applicable evidence for this sample.

No designer report, designer evidence JSON, candidate build scripts, controller plans/mutations, other candidate or other review was read before saving this initial report. The asset inventory was used only to identify assets and declared source identities; source, font and PNG bytes/hashes were recomputed independently. No candidate file was changed. All reviewer artifacts reside in `review-a/`.

Source SHA-256:

- `index.html`: `f62c4e4e7157f0fbd780f77350a98f16b71ef9ac02d5ad75b58c3fccd3716640`
- `styles.css`: `ffdf0a105c938ada917a78bb7b27456ec0904a2f57bda4927c3eb8147a2ad83e`
- `app.js`: `5345815539e498ae262da6a976db9f16d11ebd90e6cd4bbff3e94c6f5f9654ff`
- `assets/Inter-Variable.ttf`: `29160a80ff49ddcab2c97711247e08b1fab27a484a329ce8b813d820dc559031`

Full asset dimensions, sizes and identities: `observations.json` → `identities`. All 28 source/font/PNG identities matched the supplied inventory. The 1440 viewport exports are 1296-pixel-wide section crops at 1x, not full-width page screenshots; 768 and 390 crops match their viewport widths. This is appropriate region evidence, not evidence of a complete production page.

## Coverage and results

Opened all 24 delivered PNGs at readable scale, including the complete 390 comparison card stack. At each logical width (1440, 768, 390), reviewed Orientation, Comparison and Request initial; missing-record error with nonempty question and focus; open list with Beta focus; Beta selected; Beta success; and media absent. Checked supplied text against source and visible images, including all three record names, values, units, conditions and associated notes.

Independently exercised the unmodified source using bundled Playwright and Chrome 152.0.7977.82, file URLs, 1x, viewport height 1000. HTTP(S) routes were blocked; no such requests or page errors occurred. The reviewer script is `verify.cjs`; raw observations are `observations.json`.

- Anchor links went to their specified local targets. Single selection was maintained. Invalid preview kept the question, showed the exact error next to the record control and focused that control.
- Beta selection exposed its full name and cleared prior feedback. Successful preview preserved both inputs and showed the exact success sentence, prefix and selected full name after the actions. Selecting Gamma then removed the previous result/summary.
- Clear after both success and error removed selection/feedback/summary while preserving the question. Alpha with a blank question successfully previewed, confirming optional behavior.
- Actual keyboard coverage: focus on Preview followed by Enter; record opening and option movement with ArrowDown; option selection with Enter; Tab from record to question and then Preview; Home/End to first/last option; Escape closed and returned focus; Space opened and Tab dismissed to the question. This is limited keyboard coverage, not an exhaustive assistive-technology audit.
- Body/help/labels/controls use at least 16px. Inter loaded at all widths, with a loaded Inter font face recorded. All measured visible links/buttons/options/textarea exceeded 44px in both axes; smallest observed height was 50.390625px, smallest width 158.90625px (mobile minimum including options: 334px).
- No page horizontal overflow occurred in exercised states. Visual review additionally found no truncation, clipped required text, displaced notes or value/condition collisions. The densest area is the 768 table, especially Beta's six-line name; it remains readable and associated with its row. The most sensitive transformation is the 390 table-to-card change, which retains all four labeled fields and A/B/C order.
- Functional teal is actually `#008078` for controls and focus. Computed contrasts: white on teal 4.82:1; teal on soft background 4.52:1; navy on white 13.96:1; body on white 10.35:1 and soft background 9.71:1; error on white 8.66:1. These satisfy the exercise thresholds. The primary hover styling uses navy with white; secondary/option hover uses the soft surface with navy. Noninteractive card separators are not treated as functional control boundaries.
- Media absent hides the whole illustration figure/title/caption, retains both actions, and expands the desktop copy area from 780.375px to 1200px. Tablet/mobile keep the prescribed single column without an empty panel. The inline diagram is aria-hidden and contains only Value, Unit, Condition; its visible outside caption carries the explanation.

Re-rendered all 24 supplied region/state combinations independently. **23 were byte-identical.** The remaining 390 open-list image differs only within the Alpha option at x28–361/y380–456: the reviewer render has the declared soft hover background where the supplied render is white. Beta focus, text and geometry are unchanged. Both images were visually inspected. This is a pointer-hover difference, not evidence of stale content. See `export-correspondence.json`, `pixel-difference.json` and `pixel-check.cjs`.

## Strengths to preserve

The restrained navy headings, Inter hierarchy, white/soft surfaces and differentiated filled/outlined actions implement the supplied technical-reading direction. Real long content determines height; no shortening is used. Tables clearly pair value, unit, condition and note, while mobile cards make the same relationships explicit. Request feedback is close to its source and success does not imply transmission. Keep the full-width wrapping selected-name control, actual focus treatment and complete media-absent branch.

Most useful visual evidence: supplied `768-comparison-initial.png`, `390-comparison-initial.png`, `390-request-beta-selected.png`, `390-request-missing-record-focus.png`, `390-request-beta-success.png`, and `1440-orientation-media-absent.png`, together with the independent matching images under this review directory.

## Required findings

None discovered in the tested contract. No Finding ID or acceptance criterion is invented in order to meet a quota. This conclusion is limited to the source and identities listed above.

## Suggestions and unverified scope

No visual change is required by this review. As a nonblocking handoff improvement, future sample inventories could record pointer hover state as well as focus to make exact screenshot reproduction easier.

The method report and designer self-check were deliberately excluded; therefore their claimed token mapping, completeness, read-back or methodology has not been audited here. The source itself exposes concrete CSS values, breakpoints and state rules. The custom combobox was operated locally but not tested with screen readers, mobile devices/OS virtual keyboards, browser engines other than Chrome, forced colors, zoom, or every possible keyboard sequence. No form delivery, production content/Chrome, backend, deployment or accessibility certification is established. Additional regression-state PNGs were captured to accompany runtime observations; no broader production claim is inferred from them.

Next responsible party: the coordinating review owner should consolidate this independent result with the separate method/report assessment and decide whether further bounded validation is needed. The user retains approval; this review does not authorize another Gate or production action.
