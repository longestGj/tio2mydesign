# CONV-RFQ Current Gate Baseline Manifest V2.2

## 0. Identity and status

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Version | V2.2 |
| Current gate | Gate 3 — responsive wireframe |
| Review ID | `CONV-RFQ-G3-WF-PCR-01` |
| Project-control review | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Current page outcome | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| User Gate 3 approval | `NOT_YET_RECORDED` |
| Gate 2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / APPROVED / CLOSED` |
| Gate 4 | `LOCKED / NOT_AUTHORIZED` |
| Development / release | `NO / OUT_OF_SCOPE` |

This is the only current Gate 1–5 Manifest. It records project-control PASS without claiming user approval or later-gate authority.

## 1. Current governance payload

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE3_PROJECT_CONTROL_CLOSURE_V1.0.md` | 2,599 | `0BD70AEC77C1315AD61AAE718EBDAA65013873D5D202054B4E1756F9873EE3C5` | Project-control PASS and user-approval boundary |
| `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE3_PROJECT_CONTROL_REVIEW_SUBMISSION_V1.1.md` | 4,193 | `0E0BC3C1CBFDEF463B74FD886D5B3C4C9F978BB32D6DCA60541EB76EBE841E6E` | Closed PCR-01 review payload |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE3_WIREFRAME_SPEC_V1.1.md` | 4,757 | `B30A1F7DB90D6B02115F4A3402A79CE2F4B05CA61B2F0C27435E660FF2341CAC` | Current responsive structure and frozen contract |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE3_WIREFRAME_VALIDATION_V1.1.md` | 4,529 | `2CC6A34C631404532F0BCEF28AA3CEFDDC1C36421D74CE19D97A4B0C2DF12E64` | Asset, copy, spacing and regression validation |
| `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE2_APPROVAL_CLOSURE_V1.0.md` | 3,168 | `E720C525C4BD0B1BA5B9C3E22978347714CE54348002B84A83AED63162531016` | Approved Gate 2 authority |

## 2. Current raster baseline pending user approval

| Asset | Pixels / logical size | Bytes | SHA-256 |
|---|---:|---:|---|
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_DESKTOP_1440_V1.1.png` | 1440 × 2540 | 171,035 | `B4B7850FA2EB8D106375DB36293A2709F4D5185769EEFCA654452F4F227CD5A0` |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_TABLET_768_V1.1.png` | 768 × 2609 | 152,616 | `37C4A553BD35AAEC7E1B598C7D94CDEB7EB991E0327CEC62C28FEF9FC11D344B` |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_MOBILE_390_LOGICAL_AT2X_V1.1.png` | 780 × 5358 / 390 × 2679 logical | 295,561 | `3F101FFE7224EAC4FEB8A7A446376754F969D3CFC060BF8387B661BABD2AFFEC` |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V1.0.png` | 780 × 1688 / 390 × 844 logical | 59,718 | `14129B54763224ECC4ABBFB5ED6695D9F842E607B091447C029CD2285B6592C0` |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_STATE_BOARD_1440_V1.0.png` | 1440 × 2220 | 197,290 | `28CF417B7F3926DBA47A00BDF13E1BE1C34F85206D093837730C826C4EA8F6B5` |

Desktop, Tablet and Mobile V1.1 passed project-control review. Mobile Menu open and State Board remain frozen V1.0 evidence. All current PNGs are grayscale.

## 3. Approved-for-user-decision contract

- One vertical page flow; no page-level left/right composition.
- Desktop two-column use is limited to related form fields; Tablet and Mobile are single-column.
- Original approved Hero copy is unchanged.
- Complete privacy sentence and visible `Privacy Policy` link remain inside the form submit area.
- Content-driven form and module spacing replace the returned fixed-height voids.
- Destination Country remains required free text.
- One solid page-body submit CTA remains.
- Global Chrome is consumed unchanged and Request a Quote remains permanently visible.
- All validation, failure, success, unavailable and long-value states remain covered by the frozen State Board.

## 4. Gate state

| Gate | State |
|---|---|
| Gate 1 | `APPROVED / CLOSED` |
| Gate 2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / APPROVED / CLOSED` |
| Gate 3 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 4 | `LOCKED / NOT_AUTHORIZED` |
| Gate 5 | `NOT_STARTED / NOT_AUTHORIZED` |

## 5. Historical control

| File / asset set | Disposition |
|---|---|
| `CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V2.1.md` | `HISTORICAL REVIEW-TIME MANIFEST / SUPERSEDED_BY_V2.2` |
| `CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V2.0.md` | `HISTORICAL / SUPERSEDED` |
| `CONV-RFQ-G3-WF-01` and full-page V1.0 assets | `HISTORICAL RETURNED REVIEW / SUPERSEDED_BY_PCR-01` |

No historical file was rewritten or deleted.

## 6. Next controlled action

Wait for the user's explicit Gate 3 decision. Do not begin Gate 4/5, create development specifications, operate D16, deploy, publish or index.
