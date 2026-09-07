# CONV-DOC Gate 3–5 Visual Redesign Difference Audit V0.1

## 0. Control

| Field | Value |
|---|---|
| Review ID | `CONV-DOC-G3-G5-VISUAL-REDESIGN-01` |
| Comparison | V0.4 withdrawn candidate vs V0.5 redesign candidate |
| Status | `USER_APPROVED / PROJECT_CONTROL_REVIEW_PENDING / NOT_CLOSED` |
| Scope | Visual density, hierarchy, responsive structure and CTA depth only |

Gate 1 and Gate 2 are not reopened. The five document types, eight fields, 14 Grades, copy boundaries, evidence gates, PRODUCT V0.3 relationships and Global Chrome remain unchanged.

## 1. Quantified full-page difference

| Proof | V0.4 | V0.5 | Reduction | Result |
|---|---:|---:|---:|---|
| Desktop 1440 | 3720px | 2357px | 1363px / 36.6% | Materially earlier completion and CTA |
| Tablet 768 | 4312px | 2676px | 1636px / 37.9% | True tablet density, not enlarged mobile |
| Mobile 390 logical | 4865px | 3383px | 1482px / 30.5% | Below 3800px logical target |
| Interaction state board | 3710px | 2536px | 1174px / 31.6% | States remain complete with less repetition |

Mobile PNGs are exported at 2×; logical heights are calculated from their rendered pixel heights.

## 2. Structural difference

| Item | V0.4 | V0.5 |
|---|---|---|
| Hero | Deep Navy band | Compact white Hero integrated with page hierarchy |
| Process cue | Three bordered step cards plus repeated explanatory treatments | One horizontal three-node stepper; process explained once |
| Main form | Primary card containing additional bordered panels/cards | One primary surface with section dividers |
| Prefill | Nested bordered panel | Compact inline row and removable chips; no empty panel |
| Buyer/request fields | Predominantly single-column, including wide view | Paired two-column Desktop/Tablet layout; one column only on Mobile |
| Document choices | Five tall full-width cards | Five compact choices in two columns on Desktop/Tablet |
| Review | Separate bordered review panel | Compact divider rows within the primary surface |
| Terminal action | CTA visually deep after stacked panels | CTA immediately follows compact review rows |
| Mobile stepper | Vertical/card-stack impression | Horizontal compact stepper retained at 390px |

## 3. Module-level card reduction

The audit counts module-level bordered containers, not the five required selectable document choices:

| Container type | V0.4 | V0.5 |
|---|---:|---:|
| Step cards | 3 | 0 |
| Nested prefill panels | 1 | 0 |
| Separate review panel | 1 | 0 |
| Repeated process/minimum-information strips | 2 | 0 |
| Primary form surface | 1 | 1 |
| Total module-level surfaces | 8 | 1 |

The five document choices remain because they are required controls; V0.5 changes their density and grid placement without changing type count.

## 4. Repeated explanation reduction

V0.5 removes the separate Hero warning, top minimum-information bar, Human Review process bar and standalone review disclaimer. Human review is stated in the third step, helper text where necessary, and the success boundary. This retains the legal/operational meaning without repeating the same process at every scroll stage.

## 5. CTA and conversion hierarchy

- Request Documents is the only page-local primary action.
- It sits in the terminal row immediately after the review values.
- The shared RFQ remains permanently visible in approved Chrome but does not compete inside the form.
- No Contact fallback, document-download action or secondary submit action appears.
- The Footer follows directly after the completed form, so no informational module pushes the CTA deeper.

## 6. Reference-boundary audit

The reference image/spec influenced only density, stepper direction, field pairing and single-surface composition. It did not introduce:

- a sixth public type;
- a Market/Destination field;
- turnaround or delivery timing;
- public download;
- availability or approval claims;
- additional personal-data fields;
- changed Header/Footer navigation.

## 7. Decision

`V0.4 = REVISION_REQUIRED / SUPERSEDED_FOR_VISUAL_QUALITY_REWORK / NOT_CURRENT_CONTROL`.

`V0.5 = USER_APPROVED / PROJECT_CONTROL_REVIEW_PENDING / NOT_CLOSED`.

The user approved the V0.5 version on 2026-09-01. This audit still does not record a project-control pass, close Gate 5 or authorize Gate 6+.
