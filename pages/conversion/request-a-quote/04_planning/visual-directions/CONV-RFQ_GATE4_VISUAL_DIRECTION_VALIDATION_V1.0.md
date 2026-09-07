# CONV-RFQ Gate 4 Visual Direction Validation V1.0

## 0. Control

| Field | Value |
|---|---|
| Review ID | `CONV-RFQ-G4-VD-01` |
| Specification | `CONV-RFQ_GATE4_VISUAL_DIRECTION_V1.0.md` |
| Specification bytes / SHA-256 | 10,091 / `75554A650D6DE897EDF233F3FD6A230452F2B7D37060C01262300E9E2857BD88` |
| Date | 2026-09-01 |
| Result | `PASS_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |

## 1. Visual evidence integrity

| PNG | Pixels / logical size | Bytes | SHA-256 |
|---|---:|---:|---|
| `gate4_v1.0/CONV-RFQ_GATE4_DESKTOP_KEY_COMPONENTS_1440_V1.0.png` | 1440 × 1860 | 192,085 | `63A7F129C5FF53897D660A80B4E46A23D3B2E4ED849BBB5B79803E769A94B592` |
| `gate4_v1.0/CONV-RFQ_GATE4_TABLET_KEY_COMPONENTS_768_V1.0.png` | 768 × 1660 | 122,543 | `4206637149395472EDF73DD57E8CA5DB810FEAA74BC2547ACB005CF1175444D9` |
| `gate4_v1.0/CONV-RFQ_GATE4_MOBILE_KEY_COMPONENTS_390_LOGICAL_AT2X_V1.0.png` | 780 × 3440 / 390 × 1720 logical | 221,946 | `09F65C4CBB18884A5B9339177BF11D24D43F529514F5E354B931BD688A20B64E` |
| `gate4_v1.0/CONV-RFQ_GATE4_FORM_STATE_BOARD_1440_V1.0.png` | 1440 × 1640 | 195,769 | `1E2AEBAFAA60C06296F7ADE120136F3F7F27C3AA185D10993587E476F7E61C69` |

All PNGs decode as sRGB with the registered dimensions. All four were visually inspected after the final export.

## 2. Editable planning-source integrity

| SVG | Bytes | SHA-256 |
|---|---:|---|
| `CONV-RFQ_GATE4_DESKTOP_KEY_COMPONENTS_1440_V1.0.svg` | 15,431 | `B8820F87B5250A818763C0B85630DB7CD36EC75B5C51F365C4933FD85467302B` |
| `CONV-RFQ_GATE4_TABLET_KEY_COMPONENTS_768_V1.0.svg` | 12,536 | `450271A14031A317F5C73073FE1625F9C7EFC4D4B78FBDBF36173FEEA0162BC4` |
| `CONV-RFQ_GATE4_MOBILE_KEY_COMPONENTS_390_LOGICAL_AT2X_V1.0.svg` | 13,240 | `F0507EB7F8781B0FE59E13817DFC961254C6998338D785C07459DF6300B76913` |
| `CONV-RFQ_GATE4_FORM_STATE_BOARD_1440_V1.0.svg` | 11,443 | `204F135F1221EC4F65C1B36358263D3C5C9EE672059599AD970166C145B2F57F` |

SVGs are editable planning sources only. They are not site code or Gate 5 complete visuals.

## 3. Gate 3 regression validation

| Locked item | Result |
|---|---|
| Original Hero copy appears in Desktop, Tablet and Mobile direction samples | PASS |
| Superseded `Tell us the grade you need...` copy | `0 / PASS` |
| Privacy Policy link visible in Desktop, Tablet and Mobile samples | PASS |
| Page-level left/right body composition | `0 / PASS` |
| Desktop two-column use limited to representative form fields | PASS |
| Tablet and Mobile one-field-column direction | PASS |
| Destination Country remains free text | PASS |
| Quantity remains paired with fixed `Metric tonnes (MT)` suffix | PASS |
| One solid page-body CTA | PASS |
| Shared Header order and permanent RFQ retained | PASS |
| Buyer-visible internal review/blocker/pending wording | `0 / PASS` |

The samples intentionally show representative components rather than every form field. No omission is proposed; the approved complete field set remains locked for Gate 5.

## 4. Brand and accessibility validation

| Check | Result |
|---|---|
| Inter-based hierarchy | PASS |
| White / Navy / Teal role continuity | PASS |
| Approved production primary Logo source embedded without modification | PASS |
| Header source hash remains `EEED3A758E7AE1B847238D1C88E86EEE7A8E67B863969AF4D286747E9A72487C` | PASS |
| No page-specific Logo, Header or Footer redesign | PASS |
| Primary button radius 7px; card radius 12px | PASS |
| Input/touch height 52px / ≥44px | PASS |
| Focus is visible and not colour-only | PASS |
| Error includes exact copy plus border/heading, not colour only | PASS |

Contrast checks against white:

| Pair | Ratio | Result |
|---|---:|---|
| White / Accessible Teal `#007F77` | 4.88:1 | PASS for normal button text |
| White / Teal Hover `#006B65` | 6.38:1 | PASS |
| White / Primary Navy `#062B5B` | 13.96:1 | PASS |
| Body Text `#334155` / White | 10.35:1 | PASS |
| Supporting Text `#526176` / White | 6.31:1 | PASS |
| Error `#B42318` / White | 6.57:1 | PASS |
| Success `#067647` / White | 5.69:1 | PASS |

## 5. State coverage

| State | Visual evidence | Result |
|---|---|---|
| Default control | Form State Board | PASS |
| Hover / focus | Form State Board and three responsive samples | PASS |
| Field error and validation summary | Form State Board | PASS |
| Submitting | Form State Board | PASS |
| Submission failure / retained values direction | Form State Board | PASS |
| Receipt-only success | Form State Board | PASS |
| Route/form unavailable Buyer Clean state | Form State Board | PASS |
| Privacy link | Three responsive samples | PASS |

The state board contains no commercial approval badge, quotation document metaphor, price, stock, MOQ, lead-time, shipment, sample, document or regulatory promise.

## 6. Reader-first and image validation

- No decorative photography or factual illustration is required.
- No factory, warehouse, port, laboratory, inventory, certification or shipment image appears.
- The no-image direction remains visually complete through typography, Logo, form hierarchy and state colour.
- Review-board labels sit outside the representative Buyer Clean component frames.
- No internal legal placeholder, route-readiness status or evidence annotation is used as buyer copy.

## 7. Scope boundary

| Boundary | Result |
|---|---|
| Gate 3 user approval recorded | PASS |
| Gate 4 self-approval claimed | NO / PASS |
| Gate 5 complete visuals started | NO / PASS |
| Shared Header/Footer modified | NO / PASS |
| D16, development, deployment or publication work | NONE / PASS |

This validation supports project-control review of `CONV-RFQ-G4-VD-01`; it is not Gate 4 approval.
