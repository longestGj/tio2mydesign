# CONV-RFQ Current Gate Baseline Manifest V2.4

## 0. Identity and status

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Page type | RFQ conversion page |
| Primary keyword | `titanium dioxide quote supplier` |
| Version | V2.4 |
| Current gate | Gate 4 — visual direction |
| Review ID | `CONV-RFQ-G4-VD-01` |
| Gate 3 | `USER_APPROVED / CLOSED` |
| Gate 4 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 5 | `LOCKED / NOT_AUTHORIZED` |
| Development / release | `NO / OUT_OF_SCOPE` |

This is the only current Gate 1–5 Manifest. It advances V2.3 from Gate 4 in-progress governance to an actual project-control review package without claiming Gate 4 approval.

## 1. Current authority order

1. User's explicit Gate 3 approval and Gate 4 authorization recorded in `CONV-RFQ_GATE3_USER_APPROVAL_CLOSURE_V1.0.md`.
2. Approved Gate 2 full copy and Gate 3 responsive wireframe baseline.
3. `CONV-RFQ_GATE4_VISUAL_DIRECTION_V1.0.md` for current Gate 4 colour, typography, form, state, responsive and imagery direction.
4. Global Chrome V0.5 and Production SVG Logo Manifest V1.0 for shared Header/Mobile Menu/Footer and Logo assets.
5. PRODUCT V0.3 relationship boundary.

## 2. Gate 4 planning payload

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `04_planning/visual-directions/CONV-RFQ_GATE4_VISUAL_DIRECTION_V1.0.md` | 10,091 | `75554A650D6DE897EDF233F3FD6A230452F2B7D37060C01262300E9E2857BD88` | Current visual direction specification |
| `04_planning/visual-directions/CONV-RFQ_GATE4_VISUAL_DIRECTION_VALIDATION_V1.0.md` | 5,627 | `C0D8DFC4F4D1A9D1374E1D921B6ED2A7FE89083AC41A066713A8C5ADB7ACAC42` | Visual, contrast, state and regression validation |

## 3. Current Gate 4 visual evidence

| Asset | Pixels / logical size | Bytes | SHA-256 |
|---|---:|---:|---|
| `visual-directions/gate4_v1.0/CONV-RFQ_GATE4_DESKTOP_KEY_COMPONENTS_1440_V1.0.png` | 1440 × 1860 | 192,085 | `63A7F129C5FF53897D660A80B4E46A23D3B2E4ED849BBB5B79803E769A94B592` |
| `visual-directions/gate4_v1.0/CONV-RFQ_GATE4_TABLET_KEY_COMPONENTS_768_V1.0.png` | 768 × 1660 | 122,543 | `4206637149395472EDF73DD57E8CA5DB810FEAA74BC2547ACB005CF1175444D9` |
| `visual-directions/gate4_v1.0/CONV-RFQ_GATE4_MOBILE_KEY_COMPONENTS_390_LOGICAL_AT2X_V1.0.png` | 780 × 3440 / 390 × 1720 logical | 221,946 | `09F65C4CBB18884A5B9339177BF11D24D43F529514F5E354B931BD688A20B64E` |
| `visual-directions/gate4_v1.0/CONV-RFQ_GATE4_FORM_STATE_BOARD_1440_V1.0.png` | 1440 × 1640 | 195,769 | `1E2AEBAFAA60C06296F7ADE120136F3F7F27C3AA185D10993587E476F7E61C69` |

Matching SVG planning sources are retained in the same dedicated `gate4_v1.0/` folder with hashes recorded in the validation file. These boards are component/direction samples, not Gate 5 complete pages.

## 4. Approved upstream baseline retained

| Upstream | State |
|---|---|
| Gate 2 full copy | `APPROVED / CLOSED` |
| Gate 3 Desktop 1440 V1.1 | `USER_APPROVED / CLOSED` |
| Gate 3 Tablet 768 V1.1 | `USER_APPROVED / CLOSED` |
| Gate 3 Mobile 390 logical @2x V1.1 | `USER_APPROVED / CLOSED` |
| Gate 3 Mobile Menu open V1.0 | `USER_APPROVED / FROZEN` |
| Gate 3 State Board V1.0 | `USER_APPROVED / FROZEN` |
| Global Chrome V0.5 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED / CONSUMED_UNCHANGED` |
| Production SVG Logo V1.0 | `APPROVED_PRODUCTION_SVG_BASELINE / ACTIVE` |

## 5. Current visual decision

- Direction: `Procurement Form Editorial`.
- White-led canvas, Navy hierarchy, Accessible Deep Teal CTA and restrained industrial form surface.
- No page-specific photography; no-image is the default complete direction.
- Desktop stays one page-level column; only related form fields pair internally.
- Tablet and Mobile remain one field column.
- Complete privacy link and exact form/state copy remain at point of use.
- Semantic error, failure, success and unavailable states remain visually distinct without commercial implications.

## 6. Open items and dependencies

| Item | Current status / effect |
|---|---|
| Gate 4 project-control decision | OPEN; blocks user Gate 4 decision |
| User Gate 4 decision | NOT_REQUESTED_UNTIL_PROJECT_CONTROL_PASS |
| Privacy Policy final route/content availability | Complete-site dependency; register for Gate 7/9/10, does not insert placeholder in Gate 4 |
| RFQ receiver/form operational readiness | Release dependency; does not change Buyer Clean visual direction |
| Gate 5 authority | LOCKED until explicit later authorization |

## 7. Historical disposition

| Prior file/set | Disposition |
|---|---|
| `CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V2.3.md` | `HISTORICAL GATE4-IN-PROGRESS MANIFEST / SUPERSEDED_BY_V2.4` |
| `CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V2.2.md` | `HISTORICAL PRE-USER-G3-APPROVAL MANIFEST` |
| Gate 4/5 V0.x files | `HISTORICAL / NOT_CURRENT_CONTROL` |

No historical file was rewritten or deleted.

## 8. Next controlled action

Submit `CONV-RFQ-G4-VD-01` to project control and stop. Do not self-approve Gate 4, request user approval before project-control PASS, enter Gate 5, modify shared Chrome or operate D16.
