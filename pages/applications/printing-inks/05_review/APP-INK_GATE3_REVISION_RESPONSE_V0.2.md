# APP-INK Gate 3 Project Control revision response V0.2

## Control

| Field | Value |
|---|---|
| Review | [`APP-INK_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md`](APP-INK_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md) |
| Review ID | `APP-INK-G3-PCR-01` |
| Review SHA-256 | `090c2f4cd13b6f3d18e3e971bdbfc4e93f8c5ae33a308ff469962b9789c243ee` |
| Response scope | `APP-INK-G3-PCR-F01`–`F03` only |
| Response status | `REVISED / DRAFT_FOR_PROJECT_CONTROL_REREVIEW` |
| Gate state | `GATE_3_OPEN`; no self-approval or closure |

The reviewed V0.1 freeze and all V0.1 evidence remain unchanged historical objects. V0.2 is a new candidate and freeze. Approved Gate 2 A/B/C, visible copy, facts, URL, primary keyword, module order and shared contracts are unchanged.

## `APP-INK-G3-PCR-F01` — `REVISED_PENDING_INDEPENDENT_REREVIEW`

The V0.2 candidate adds one scoped rule: `main a:focus-visible { outline: 3px solid #008078; outline-offset: 3px; }`. It consumes the existing CTA Accessibility Addendum V1.0 functional-color requirement on white/light surfaces. It does not change default link color, shared components or visual direction.

Actual keyboard Tab traversal reached all 18 visible `main` links at each of 1440, 768 and 390. Every breadcrumb, Hero, Grade, request and source link reported `:focus-visible=true`, `outline-color: rgb(0,128,120)`, `outline-style: solid`, `outline-width: 3px`, and no horizontal clipping. The 390 Applications breadcrumb state is captured in `approval_core/APP-INK_GATE3_390_BODY_LINK_FOCUS_V0.2.png`. All three full-page layouts and all previous page/shared actions were rerun.

## `APP-INK-G3-PCR-F02` — `REVISED_PENDING_INDEPENDENT_REREVIEW`

The V0.2 handoff removes the conflicting counts and states the actual approved relationships:

- INK-02: one introduction, nine context items, one following caution paragraph;
- INK-05: two paragraphs;
- INK-06: four document records × three fields, followed by one explanatory paragraph;
- visual-risk description: four records and three fields.

The candidate HTML was not changed for F02 because its B-derived DOM was already correct. The handoff now uses resolvable links to Manifest/A/B/C and the V0.2 source/freeze/inventory.

## `APP-INK-G3-PCR-F03` — `REVISED_PENDING_INDEPENDENT_REREVIEW`

Preflight, method report, self-check, candidate Manifest and handoff now distinguish three evidence sources precisely:

1. Consumer V0.2 original validation covers open, selection, Escape and breakpoint behavior; its script does not test Tab/Shift+Tab loops.
2. Project Control V0.1 independently tested full loops on V0.1.
3. This V0.2 execution independently reran full menu loops at 768/390 and full Cookie loops at 1440/768/390, plus isolation, exit, focus/scroll restoration and breakpoint closure.

The F01 selector is limited to `main`, so it cannot match Header, Footer or Cookie. Current-page shared checks were still rerun because the page source changed. The handoff dependency table now supplies existing owner, receiving phase and measurable acceptance conditions for canonical/route eligibility, Grade/conversion destinations, Global Chrome/legal/Cookie, Gate 8 integration and Gate 9 actual-runtime/device/accessibility verification.

## Response disposition

All three Finding acceptance conditions have an execution response and current evidence. Their IDs remain open for the independent reviewer to close. Status is `DRAFT_FOR_PROJECT_CONTROL_REREVIEW`; this response does not approve or close Gate 3.
