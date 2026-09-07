# CONV-DOC Gate 3 Buyer Clean Wireframe Specification V0.4 — Superseded

> Governance override — 2026-09-01: `CONV-DOC-G5-BUYER-CLEAN-20260901-02 = REVISION_REQUIRED / SUPERSEDED_FOR_VISUAL_QUALITY_REWORK`. This file is historical, is not a current Gate 3/5 candidate, and is replaced by `CONV-DOC_WIREFRAME_SPEC_V0.5.md`. The recorded earlier pass is withdrawn for current consumption.

## 0. Control

| Field | Value |
|---|---|
| Review ID | `CONV-DOC-G5-BUYER-CLEAN-20260901-02` |
| Page | `/request-documents/` |
| Status | `REVISION_REQUIRED / SUPERSEDED_FOR_VISUAL_QUALITY_REWORK / HISTORICAL` |
| Parent | V0.3 responsive wireframe |
| Input | Gate 2 Buyer Clean copy V0.4 |

## 1. Responsive structure

The 1440px, 768px and 390px structures retain the V0.3 single-column transaction flow with these required revisions:

1. Remove the visual review ribbon.
2. Hero becomes one concise content column; remove the receipt-only warning card.
3. Keep the three-step cue and minimum-information note.
4. Keep the conditional editable prefill block.
5. Keep exactly eight fields and five request-type cards.
6. Replace the controlled-request disclaimer with one concise review-process note.
7. Review displays entered values only.
8. Remove the internal privacy annotation block.
9. Put the final privacy sentence and linked `Privacy Policy` directly beside/above the primary submit action.
10. Consume the shared Footer with the four final legal links/settings controls.

At 768px and 390px, the Hero, steps, form, review, privacy statement and submit action stack in that order. At 390px, all controls remain at least 44px logical height and no content forces horizontal overflow.

## 2. Conditional Other layout

- Default and mixed selection: label `Additional Requirements (optional)`.
- Other-only: label `Additional Requirements *`; helper explains why and the control is programmatically required.
- The error summary links to the field with `Describe the document you need.`
- The state board shows Other-only and Other-plus-named-type side by side at Desktop review width and stacked at Mobile logical width.

## 3. State structures

Normal, valid prefill, absent/invalid prefill, 14-Grade capacity, keyboard focus, field validation, conditional error summary, restricted request, personal-email advice, submitting, success, failure, retry, Other-only/mixed behavior, privacy link and long-content stress remain covered.

Success uses `Return to Documents`; failure uses `Something went wrong`; no internal governance or release labels appear in Buyer Clean visuals.

## 4. Shared Chrome

Header and Mobile Menu remain unchanged. Request Documents is not a first-level item. The Footer is consumed as the final shared state and includes Privacy Policy, Terms of Use, Cookie Policy and Cookie Settings without page-local redesign.

## 5. Status

`Gate 3 V0.4 = REVISION_REQUIRED / SUPERSEDED_FOR_VISUAL_QUALITY_REWORK / NOT_CURRENT_CONTROL`. Gate 6 is not authorized.
