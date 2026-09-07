# CONV-RFQ Gate 5 Project-control Review Submission V1.0

## 0. Submission status

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Review ID | `CONV-RFQ-G5-VIS-01` |
| Date | 2026-09-01 |
| Submitted status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 4 | `USER_APPROVED / CLOSED` |
| Gate 5 authority | `AUTHORIZED / IN_REVIEW` |
| Stop boundary | Gate 5 |
| Gate 6 / development | `LOCKED / NOT_AUTHORIZED` |

## 1. Decision requested from project control

Review the complete Gate 5 responsive visual package and decide whether it can move to `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`.

The review must not be recorded as user approval, Gate 5 closure, Gate 6 authorization or development authorization.

## 2. Exact review set

1. `04_planning/visual-designs/CONV-RFQ_GATE5_FULL_VISUAL_SPEC_V1.0.md`
2. `04_planning/visual-designs/CONV-RFQ_GATE5_FULL_VISUAL_VALIDATION_V1.0.md`
3. `04_planning/visual-designs/gate5_v1.0/CONV-RFQ_GATE5_DESKTOP_1440_BUYER_CLEAN_V1.0.png`
4. `04_planning/visual-designs/gate5_v1.0/CONV-RFQ_GATE5_TABLET_768_BUYER_CLEAN_V1.0.png`
5. `04_planning/visual-designs/gate5_v1.0/CONV-RFQ_GATE5_MOBILE_390_LOGICAL_AT2X_BUYER_CLEAN_V1.0.png`
6. `04_planning/visual-designs/gate5_v1.0/CONV-RFQ_GATE5_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V1.0.png`
7. `04_planning/visual-designs/gate5_v1.0/CONV-RFQ_GATE5_STATE_BOARD_1440_V1.0.png`
8. `04_planning/visual-designs/gate5_v1.0/CONV-RFQ_GATE5_MOBILE_STATE_BOARD_390_LOGICAL_AT2X_V1.0.png`
9. `04_planning/CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V2.7.md`

Matching SVGs are included for all six visual assets and are frozen by the validation/Manifest hashes.

## 3. Changes from the user-approved Gate 4 direction

- Expanded representative component direction into complete 1440 Desktop, 768 Tablet and 390px Mobile pages.
- Added complete Desktop/Tablet/Mobile Footer assembly and Mobile Menu open.
- Added Desktop and 390px state evidence for prefill, focus, validation, error, submitting, failure/retry, success, unavailable and long-value behavior.
- Removed the historical page-level Desktop left/right split; the form remains one centred page-level column.
- Preserved the user-confirmed original Hero body exactly. The rejected `Tell us the grade you need...` replacement is absent.
- Did not change fields, Product V0.3 relationships, SEO/GEO facts, Privacy Policy link, CTA destinations or state semantics.

## 4. Review checklist

| Decision | Pass condition |
|---|---|
| G5-D01 Complete responsive pages | 1440/768/390 are complete, readable and free of page-level overflow |
| G5-D02 Desktop composition | one centred page-body form; no left/right page layout |
| G5-D03 Global Chrome | fixed RFQ is present in all required surfaces; Footer is complete and unchanged |
| G5-D04 Copy and minimum data | original Hero, approved copy and all required/optional fields are present |
| G5-D05 States | all required states are unambiguous, preserve values as required and do not imply commercial approval |
| G5-D06 Buyer Clean | no internal blocker, review, readiness or fallback language appears in buyer-facing assets |
| G5-D07 PRODUCT V0.3 | neutral M-2377 prefill only; frozen mappings/comparisons remain frozen |

## 5. Known release dependencies

The final site still must provide an operational `/request-a-quote/` route/form and Privacy Policy route. These are release dependencies, not Buyer Clean placeholders and not reasons to hide or disable RFQ navigation in Gate 5.

No external manual failure channel is invented. The approved failure state retains values and offers `TRY AGAIN`; the page does not change Contact.

## 6. Self-check outcome

- Six PNG assets and six matching SVGs generated and hashed.
- Buyer-facing internal-language scan: 4 clean / 0 match.
- Desktop/Tablet/Mobile and both state proofs visually inspected.
- Mobile H1, Tablet Footer and Mobile long-state wrapping were corrected before freezing hashes.
- Gate 6, development and release remain untouched.

## 7. Recommended disposition

`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` if G5-D01–D07 all pass; otherwise return only the affected Gate 5 asset/spec for revision.

