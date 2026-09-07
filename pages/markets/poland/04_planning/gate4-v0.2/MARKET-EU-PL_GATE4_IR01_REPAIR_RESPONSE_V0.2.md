# Poland Gate 4 · PL-G4-IR01 repair response V0.2

2026-09-07. DRAFT_FOR_PROJECT_CONTROL_REVIEW. **FIX_IMPLEMENTED_PENDING_INDEPENDENT_REINSPECTION**. This is the executor's response, not independent closure or user approval.

Initial review: `../../05_review/gate4-project-control-v0.1/independent-review/report.md`. Initial finding IMPORTANT: PL-04 View Document Hub and PL-05 European Union Procurement Overview inherited #E8EEF3 hover behind #008078 16px text, yielding 4.119218891986719:1. V0.1's author checked primary hover and stronger default pairs, missing these two actual combinations. All V0.1 files, self-check and independent failure evidence remain unchanged.

## Exact change

Append only this rule to the unchanged V0.1 CSS:

```css
#pl-04 .body-action+.body-action a:hover,
#pl-05 .body-action+.body-action a:hover{background:var(--pl-soft)}
```

`--pl-soft` is the existing #F5F8FB. Normal states, labels, targets, geometry, typography, hierarchy, content, structure and shared behavior are retained. HTML SHA256 is byte-identical to V0.1. S01 is outside this repair; no new shared package or Gate3 change.

## Actual acceptance evidence

Chrome152.0.7977.82, file URLs, DPR1, logical1440/768/390×1000. Each affected link was actually hovered at all three widths; foreground #008078/background #F5F8FB yielded **4.5200728131076575:1**, above4.5. Hover was checked again after screenshot. Full label, href and width/height remained equal between normal/hover/focus. All controls meet44px; these two links retain48px height. Normal geometry/font/asset record is exactly equal to V0.1 at every width (`diagnostic_support/v01-v02-geometry-comparison.json`).

Each affected link received real Tab then Shift+Tab keyboard focus after pointer removal. All six observations report focus-visible=true, activeElement=target, 3px #008078 outline with4px offset. Mobile focus viewport images prove the shown complete hit area. The 1440/768 EU-hover viewports also show the previously focused Document Hub; that is a real simultaneous focus/hover combination, not a drawn focus class. Hover captures are state evidence and may cut surrounding modules at the viewport boundary; full-content representative exports remain separate.

| Adjacent role tested at all three widths | Actual hover foreground/background | Ratio | Keyboard result |
|---|---|---|---|
| Hero/final RFQ and Request Documents | White / #062B5B |13.959:1|Actual focus-visible retained, geometry unchanged|
| Hero supporting Products | #008078 / #F5F8FB |4.520:1|Actual focus-visible retained|
| PL-03 outlined Products | #062B5B / #F5F8FB |13.097:1|Actual focus-visible retained|
| Cookie Policy | #008078 / #F5F8FB |4.520:1|Actual focus-visible retained inside modal|

The runner also reran B exact-copy and G3 main-DOM equality, normal controls/font/assets/scroll width, local href interception, compact menu isolation/loops/Escape/selection/breakpoint release, and Cookie entry/loops/background isolation/Escape/Close. The optional S01 breakpoint focus detail is unchanged and not represented as fixed. No HTTP(S) attempts or page errors occurred. These are local observations, not destination/CMP or assistive-technology proof.

## New frozen combination and exports

Freeze: **PL-G4-V02-SOURCE-01**. Source `MARKET-EU-PL_GATE4_VISUAL_SAMPLES_V0.2.html`, SHA256 `d87fb01ea6c1fd3c1f93002b71c5c86222db38a6a15bb26d7a8319503aac53c9`. CSS SHA256 `8d1299c9072b0413f242d4568cc62ed99cb6865a0938a7320c6f7ee5b4400785`.

`approval_core/source-freeze.json` binds nine source/dependencies and21 inputs, including initial independent review. `approval_core/export-inventory.json` binds26 newly rendered PNGs:18 representative regions/shared states, six affected-hover viewports and two390 affected-focus viewports. Each record contains source freeze, dimensions, scale, size and hash. No V0.1 PNG was copied as a new render.

Stable presentation paths: `approval_core/1440-hero.png`, `approval_core/768-product-review.png`, `approval_core/390-documents.png`. All26 formal images were actually opened with tools.view_image(detail=original); all shown text/control regions were read. All four corrected preflight images were inspected before export. The earlier four preflight images were also opened and preserved under `diagnostic_support/preflight-attempt1/` because normal Product Review retained test focus. Clearing test state in the runner corrected that capture setup without changing source.

Formal evidence is new representative/state PNGs, source/identity files and direction/repair/self-check reports. Diagnostic support is the raw runtime measurements, runner, comparison, preflight attempts and visual/readback records. Runtime assertions are authored checks; recorded computed values and keyboard results are actual observations; PNGs prove displayed state only. There is no evidence solely in temporary workspace.

Retained limits: no real devices, other browser engines, screen-reader announcement, real browser200% UI zoom, exhaustive intermediate widths/pointer edges, actual visited history, destination/prefill/receiver, production CMP/storage or Gate5 whole-page rhythm. Independent reviewer must recheck IR01 and adjacent regression before root presents the direction for approval.
