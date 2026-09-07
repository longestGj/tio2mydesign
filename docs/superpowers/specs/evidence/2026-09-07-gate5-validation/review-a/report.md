# Independent review — G5-LAB-01 Candidate A

2026-09-07. First independent synthetic Gate 5 review using `skills/layout-interaction-verification/SKILL.md` V0.2 and the fixed exercise content/layout/visual rules. **No material candidate defect found within the required local scope.** This is a review observation, not project-control PASS, user page approval, actual Gate 6, production accessibility certification or publication authority.

Reviewed freeze: **G5-LAB-01-CANDIDATE-A-F1**, combined source SHA-256 `320230f713e39ed5b296c5cfe6e220ab45f6d414f689f44a6d83079d687c2c74`. Candidate root: `../candidate-a/`. Four source/dependency files independently rehashed against freeze; 23 formal PNG bytes, hashes and dimensions independently checked. Export runtime source identity equals freeze. Source was unchanged at the end of testing.

## Basis and evidence

The reviewer read root rules/context, the [raw brief](../input/brief.md), archived input's Exact visible content O/C/R, precursor report's concrete visual-rule table, brand standard/CTA addendum, current Gate 5 standard, design approval and relevant methods **before author self-check**. Production Page Registry, business keyword/Brief/Global Chrome contracts are not applicable: the raw brief explicitly owns this synthetic identity and neutral shell. No business content or authority was inferred.

`approval_core`: [freeze](../candidate-a/freeze.json), [editable source](../candidate-a/source/index.html), the 23 PNGs under [formal exports](../candidate-a/exports/), and this independent conclusion. Exact asset paths/identities and capture states are in [observations.json](observations.json). `diagnostic_support`: that observation file, [supplementary.json](supplementary.json), [state-colors.json](state-colors.json), reproducible local reviewer scripts and overlapping `*-segment-*.png` reading crops. Crops derive from formal files; no duplicate independent full-page raster set was saved.

## Complete visual and runtime scope

**STATIC_VISUAL:** Opened and read all 23 formal assets. All six default/media-absent full pages were inspected through overlapping readable segments from Header through Footer; all 17 other state PNGs were opened directly. Widths are 1440/768 logical at 1x and 390 logical at native 2x (780 physical). Required error, full Beta selection/preview, FAQ2 keyboard focus and both compact menus are actually visible. Local independent default captures are pixel-identical to all three formal default full pages; state evidence agrees with recorded capture state and tested source behavior.

The hardest comparison remains the 768 table: Beta's long name, `0.001 g/L`, dilute preparation condition and B note retain their row association. Gamma's unbroken value ends 6.203px before the next cell boundary (and 18.203px before that cell's text start), so the tight column is still readable without collision. Mobile cards retain all four labels, exact values/units/conditions/notes and Alpha→Beta→Gamma order. Full Beta fits as three lines in the mobile selected control and wraps fully in the result. O/C/N/R/F order, action hierarchy, captions, field context and Footer closure match raw input. No missing text, new business claim, clipped content, anomalous fixed spacer or changed structure was observed. The absent branch removes figure/title/caption together and leaves a complete page.

**ACTUAL_RUNTIME:** Independently operated Chrome 152.0.7977.82 at all required widths: invalid keyboard preview and focus return; Arrow/Home/End selection, Escape cancellation; Beta preview, selection-change feedback reset, Clear preserving question, optional blank-question preview; both FAQs independently toggled using Enter/Space and reclosed; compact Menu focus entry, forward/reverse loop, Escape focus/scroll restoration, link close and Desktop-resize close. An attempted focus into inert background remained on Overview. Body style and scroll restoration were also checked using nonempty pre-existing inline height/overflow values. All measured state geometries fit the viewport and every visible link/button/textarea/open option met 44px in both axes. FAQ2 moved Footer naturally by 47/73/99px (integer offsetTop measurements) at 1440/768/390.

**SOURCE_INSPECTION + ACTUAL_RUNTIME:** Raw literal text matched; table/card fields match; local anchors, exact title/description, noindex, absent Canonical/JSON-LD match brief. Inter loaded; CDP confirmed actual Inter glyphs for H1 and body text. Fixed palette/type/spacing rules are retained. Lowest measured default text contrast was 4.8177:1. Actual normal/hover/error/selected/success/focus surfaces were sampled: functional teal focus is separated by a 4px white/soft gap (minimum 4.52:1), error uses #8C2532 on white, and Footer focus is white on #031B3A. No photographic/transparent composite was involved.

**LOCAL_SIMULATION:** Preview only; no real receiving service or send. The independent run observed zero external requests and zero page errors.

## Findings and existing correction

No new material Finding. No preference-only redesign recommendation is needed.

**SELF-01 — independent acceptance satisfied for F1.** Original acceptance: Escape must restore prior scroll while returning toggle focus. At both compact widths the independent run opened/closed the actual menu from 400px, restored 400px and returned focus to toggle; adjacent loop, background, link and Desktop-resize paths also worked. This accepts the local correction only, not a Gate approval.

Two raw reviewer assertions (`resize restore 768`, `resize restore 390`) incorrectly required `style === null`; actual restored empty-string style had no active lock and inert was false. Raw failures remain in observations.json. supplementary.json preserves the corrected substantive test: pre-existing `height: auto; overflow: auto;` and 250px scroll restored exactly, position static, inert false. These are reviewer-harness observations, not candidate defects. Author preflight/self-check were read afterward and independently report the same serialization distinction as TOOL-02.

## Limits and handback

No-JS behavior, browser UI zoom, other engines/physical devices, exhaustive touch-edge hit testing, assistive-technology announcements, actual production receiving, shared production Chrome/Consent, WordPress/CMS, server metadata/indexing or site_scope runtime were not tested. These are declared scope limits, not hidden failures of the required local states. Full receiving-package contract evaluation belongs to root's separate review.

Report and linked evidence were saved and read back from this directory. Candidate source, formal assets, project records and development project were not edited.

