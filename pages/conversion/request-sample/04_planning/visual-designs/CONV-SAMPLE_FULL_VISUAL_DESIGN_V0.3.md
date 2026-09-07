# CONV-SAMPLE Full Visual Design V0.3 — Desktop Single-column Revision

> Superseded for current visual review by `CONV-SAMPLE_FULL_VISUAL_DESIGN_V0.4.md`, which keeps the single-column correction but places Sample Request before Human Review. V0.3 is retained as version history.

## 0. Document Control

| Field | Value |
|---|---|
| Page | `CONV-SAMPLE` / `/request-sample/` |
| Gate | Gate 5 directed Desktop revision |
| Date | 2026-09-01 |
| Parent | V0.2 Buyer-clean revision |
| Status | `GATE_5_V0.3_REVISION_SUBMITTED / NOT_APPROVED / RELEASE_BLOCKED` |
| Revision reason | User identified persistent right-side whitespace caused by the long 8/4 form/sidebar layout |
| Development boundary | Planning and visual evidence only; no production implementation or Gate 6/7 work |

V0.3 replaces the Desktop form/sidebar split with a single-column task flow. It does not change the page identity, fields, claims, PRODUCT V0.3 relationships, Global Chrome or release blockers.

## 1. Desktop Layout Correction

### Removed

- Long-form 8/4 split.
- Short sticky Human Review sidebar.
- The resulting empty right rail through the lower form groups.

### New structure

1. Hero and full request/non-approval boundary.
2. Full-width horizontal Human Review band.
3. Full-width Sample Request form card.
4. FAQ.
5. Footer.

The Human Review band uses a compact left heading, four equal-width process steps and a two-part boundary/help footer. The form then occupies the same full content width. This creates one continuous reading path and balanced whitespace throughout the long form.

### Desktop form behavior

- Two-column field pairs remain where comparison and completion benefit from them.
- Full-width objectives, destination, document selection and notes remain aligned to the same card grid.
- Human Review is descriptive and static; it is not a progress tracker.
- No decorative content, testimonial, trust badge or promotional filler was added to occupy space.

## 2. 390px Continuity

The 390px composition remains intentionally different from Desktop:

1. Form first.
2. Human Review card after the form.
3. FAQ and Footer.

Fields remain single-column, Human Review remains static, interactive targets remain at least 44px and horizontal overflow remains prohibited.

## 3. Content and Governance Continuity

V0.3 retains the V0.2 Buyer-clean contract:

- zero Buyer-facing internal/legal placeholder terms;
- one neutral `Malaysia-origin titanium dioxide` Hero reference;
- success means receipt for human review only;
- no sample approval, availability, free sample, quantity, timing, freight, dispatch, delivery or regulatory promise;
- M-2377 prefill remains neutral and editable;
- M-996/M-2196 comparison remains frozen;
- `NO_PUBLIC_MAPPING` is not interpreted as unsuitable;
- Request a Sample remains absent from first-level Header navigation;
- permanent RFQ remains `/request-a-quote/` on all approved Chrome surfaces.

Privacy, receiver, route, idempotency and verified fallback remain release blockers.

## 4. V0.3 Formal Assets

| Asset | Purpose |
|---|---|
| `assets/CONV-SAMPLE_G5_DESKTOP_1440_UNPREFILLED_BUYER_CLEAN_V0.3.png` | Revised Desktop empty form |
| `assets/CONV-SAMPLE_G5_DESKTOP_1440_PREFILLED_BUYER_CLEAN_V0.3.png` | Revised Desktop prefilled context |
| `assets/CONV-SAMPLE_G5_DESKTOP_1440_SUCCESS_BUYER_CLEAN_V0.3.png` | Revised Desktop receipt-confirmed state |
| `assets/CONV-SAMPLE_G5_MOBILE_390_UNPREFILLED_BUYER_CLEAN_V0.3.png` | 390px empty form |
| `assets/CONV-SAMPLE_G5_MOBILE_390_PREFILLED_BUYER_CLEAN_V0.3.png` | 390px prefilled context |
| `assets/CONV-SAMPLE_G5_MOBILE_390_UNKNOWN_GRADE_V0.3.png` | Unknown Grade |
| `assets/CONV-SAMPLE_G5_MOBILE_390_OTHER_APPLICATION_V0.3.png` | Other Application |
| `assets/CONV-SAMPLE_G5_MOBILE_390_VALIDATION_FOCUS_ERROR_V0.3.png` | Validation/focus/error |
| `assets/CONV-SAMPLE_G5_MOBILE_390_SUBMITTING_V0.3.png` | Submitting/disabled |
| `assets/CONV-SAMPLE_G5_MOBILE_390_SUBMISSION_FAILURE_V0.3.png` | Submission unconfirmed |
| `assets/CONV-SAMPLE_G5_MOBILE_390_SUCCESS_V0.3.png` | Receipt confirmed |
| `assets/CONV-SAMPLE_G5_MOBILE_390_SERVICE_UNAVAILABLE_V0.3.png` | Form unavailable |
| `assets/CONV-SAMPLE_G5_MOBILE_390_MENU_OPEN_V0.3.png` | Mobile Menu |
| `assets/CONV-SAMPLE_G5_DESKTOP_INTERACTION_STATE_BOARD_V0.3.png` | Desktop internal state board |
| `assets/CONV-SAMPLE_G5_MOBILE_390_INTERACTION_STATE_BOARD_V0.3.png` | Mobile internal state board |

## 5. Verification

| Check | Result |
|---|---|
| V0.3 assets rendered | PASS — 15/15 |
| Desktop review band appears before form | PASS |
| Desktop review band/form width delta | PASS — 0px |
| Desktop review component positioning | PASS — static |
| Desktop right empty rail caused by sidebar | PASS — removed |
| 1440px and 390px horizontal overflow | PASS — none |
| 390px minimum target | PASS — 44px |
| Buyer-facing internal terms | PASS — 0 |
| Malaysia-origin body count | PASS — exactly 1 per non-menu Buyer-facing frame |
| RFQ / CURRENT contract | PASS — RFQ retained; CURRENT and visible `aria-current=page` remain 0 |

## 6. Gate Decision

The Desktop composition issue is resolved in V0.3. This is the current Gate 5 review candidate and supersedes V0.2 for visual review.

Overall release remains `FAIL / BLOCKED` because approved Privacy wording and verified submission infrastructure evidence are still absent. Submission is not approval, and this revision is not user or project-control approval.

## 7. Version Record

| Version | Date | Change | Approval source |
|---|---|---|---|
| V0.3 | 2026-09-01 | Replaced Desktop long-form/sidebar split with full-width horizontal review band followed by full-width form; preserved 390px order and all content/evidence boundaries | User-directed visual revision; submitted, not approved |
