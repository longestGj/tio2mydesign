# CONV-RFQ Current Gate Baseline Manifest V2.1

## 0. Identity and status

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Version | V2.1 |
| Current gate | Gate 3 — responsive wireframe targeted revision |
| Review ID | `CONV-RFQ-G3-WF-PCR-01` |
| Status | `TARGETED_REVISION_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / APPROVED / CLOSED` |
| Approval source | `USER_APPROVAL_2026-09-01 + PROJECT_CONTROL_REVIEW_PASS` |
| Gate 4–5 | `NOT_STARTED / NOT_AUTHORIZED` |
| Development / release | `NO / OUT_OF_SCOPE` |

This is the only current Gate 1–5 Manifest. It replaces V2.0 after project control returned `CONV-RFQ-G3-WF-01` for two targeted wireframe corrections. It does not claim Gate 3 approval.

## 1. Gate 2 authority consumed unchanged

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE2_APPROVAL_CLOSURE_V1.0.md` | 3,168 | `E720C525C4BD0B1BA5B9C3E22978347714CE54348002B84A83AED63162531016` | Gate 2 closure and Gate 3 authorization |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_FULL_COPY_V1.1.md` | 16,377 | `0D38C9ED1C3BEB4121BF4BA924D53E9B8E153A51F30EC9B87B7A74717272FDC2` | Approved complete copy |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_USER_CONFIRMED_DESTINATION_COUNTRY_TEXT_INPUT_OVERRIDE_V1.0.md` | 2,484 | `33E1613A4390EFADEBFEE4CAF5103E05A880D8DE3B6D36E9BD52CCC0A44C95D8` | Destination Country free-text authority |

The approved original Hero remains unchanged:

`Tell us the product, application, quantity and destination you are evaluating. Our team will review your requirements and prepare the appropriate commercial response.`

## 2. Current Gate 3 planning documents

| File | Bytes | SHA-256 |
|---|---:|---|
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE3_WIREFRAME_SPEC_V1.1.md` | 4,757 | `B30A1F7DB90D6B02115F4A3402A79CE2F4B05CA61B2F0C27435E660FF2341CAC` |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE3_WIREFRAME_VALIDATION_V1.1.md` | 4,529 | `2CC6A34C631404532F0BCEF28AA3CEFDDC1C36421D74CE19D97A4B0C2DF12E64` |

## 3. Current raster asset set

| Asset | Pixels / logical size | Bytes | SHA-256 |
|---|---:|---:|---|
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_DESKTOP_1440_V1.1.png` | 1440 × 2540 | 171,035 | `B4B7850FA2EB8D106375DB36293A2709F4D5185769EEFCA654452F4F227CD5A0` |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_TABLET_768_V1.1.png` | 768 × 2609 | 152,616 | `37C4A553BD35AAEC7E1B598C7D94CDEB7EB991E0327CEC62C28FEF9FC11D344B` |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_MOBILE_390_LOGICAL_AT2X_V1.1.png` | 780 × 5358 / 390 × 2679 logical | 295,561 | `3F101FFE7224EAC4FEB8A7A446376754F969D3CFC060BF8387B661BABD2AFFEC` |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V1.0.png` | 780 × 1688 / 390 × 844 logical | 59,718 | `14129B54763224ECC4ABBFB5ED6695D9F842E607B091447C029CD2285B6592C0` |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_STATE_BOARD_1440_V1.0.png` | 1440 × 2220 | 197,290 | `28CF417B7F3926DBA47A00BDF13E1BE1C34F85206D093837730C826C4EA8F6B5` |

The first three assets are the V1.1 targeted revisions. Mobile Menu open and State Board are frozen V1.0 evidence. All five current PNGs are grayscale.

## 4. Targeted revision disposition

| Returned item | Current disposition |
|---|---|
| P0 complete form-area Privacy Policy sentence and link | Corrected in Desktop / Tablet / Mobile V1.1; submitted for re-review |
| P1 content-driven height and removal of review annotation | Corrected in Desktop / Tablet / Mobile V1.1; submitted for re-review |
| All other full-page layout and copy | Frozen from the V1.0 Gate 3 contract |
| Mobile Menu open | Frozen V1.0 |
| State Board | Frozen V1.0 |

## 5. Gate state

| Gate | State |
|---|---|
| Gate 1 | `APPROVED / CLOSED` |
| Gate 2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / APPROVED / CLOSED` |
| Gate 3 | `TARGETED_REVISION_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 4 | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 5 | `NOT_STARTED / NOT_AUTHORIZED` |

## 6. Historical control

| File / asset set | Disposition |
|---|---|
| `CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V2.0.md` | `HISTORICAL / SUPERSEDED_BY_V2.1` |
| `CONV-RFQ_GATE3_PROJECT_CONTROL_REVIEW_SUBMISSION_V1.0.md` | `HISTORICAL RETURNED SUBMISSION / TARGETED_REVISION_REQUIRED` |
| Desktop / Tablet / Mobile full-page V1.0 PNG and SVG assets | `HISTORICAL RETURNED ASSETS / UNCHANGED` |
| Mobile Menu open V1.0 and State Board V1.0 | `CURRENT FROZEN EVIDENCE` |

No historical file was rewritten or deleted.

## 7. Next controlled action

Submit `CONV-RFQ-G3-WF-PCR-01` to project control. Stop at Gate 3; do not self-approve, begin Gate 4/5, create development specifications, operate D16, deploy, publish or index.
