# CONV-RFQ Current Gate Baseline Manifest V2.3

## 0. Identity and status

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Page type | RFQ conversion page |
| Primary keyword | `titanium dioxide quote supplier` |
| Version | V2.3 |
| Current gate | Gate 4 — visual direction |
| Gate 3 | `USER_APPROVED / CLOSED` |
| Gate 3 approval date/source | 2026-09-01 / user's explicit current decision after project-control PASS |
| Gate 4 | `AUTHORIZED / IN_PROGRESS` |
| Gate 5 | `LOCKED / NOT_AUTHORIZED` |
| Development / release | `NO / OUT_OF_SCOPE` |

This is the only current Gate 1–5 Manifest while Gate 4 is in progress. It replaces V2.2 without rewriting any historical file.

## 1. Gate 3 approval authority

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE3_USER_APPROVAL_CLOSURE_V1.0.md` | 2,927 | `ECB1C3BAFDD2981ACFAA137BB8AB7B47C0E5C84229C6AC1B7B24D9AFA281459B` | User approval and Gate 4 authorization |
| `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE3_PROJECT_CONTROL_CLOSURE_V1.0.md` | 2,599 | `0BD70AEC77C1315AD61AAE718EBDAA65013873D5D202054B4E1756F9873EE3C5` | Project-control precursor |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE3_WIREFRAME_SPEC_V1.1.md` | 4,757 | `B30A1F7DB90D6B02115F4A3402A79CE2F4B05CA61B2F0C27435E660FF2341CAC` | Approved responsive structure |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE3_WIREFRAME_VALIDATION_V1.1.md` | 4,529 | `2CC6A34C631404532F0BCEF28AA3CEFDDC1C36421D74CE19D97A4B0C2DF12E64` | Approved asset and regression validation |

## 2. Approved Gate 3 raster baseline

| Asset | Pixels / logical size | SHA-256 |
|---|---:|---|
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_DESKTOP_1440_V1.1.png` | 1440 × 2540 | `B4B7850FA2EB8D106375DB36293A2709F4D5185769EEFCA654452F4F227CD5A0` |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_TABLET_768_V1.1.png` | 768 × 2609 | `37C4A553BD35AAEC7E1B598C7D94CDEB7EB991E0327CEC62C28FEF9FC11D344B` |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_MOBILE_390_LOGICAL_AT2X_V1.1.png` | 780 × 5358 / 390 × 2679 logical | `3F101FFE7224EAC4FEB8A7A446376754F969D3CFC060BF8387B661BABD2AFFEC` |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V1.0.png` | 780 × 1688 / 390 × 844 logical | `14129B54763224ECC4ABBFB5ED6695D9F842E607B091447C029CD2285B6592C0` |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_STATE_BOARD_1440_V1.0.png` | 1440 × 2220 | `28CF417B7F3926DBA47A00BDF13E1BE1C34F85206D093837730C826C4EA8F6B5` |

## 3. Gate 4 authority and lock

Gate 4 may apply the approved visual system to the locked Gate 3 structure. The following remain immutable:

- approved Hero, field copy, privacy sentence, errors, failure, success and unavailable copy;
- field/data contract and semantic order;
- single page-level vertical flow and content-driven closure;
- Global Chrome V0.5 and production SVG Logo bindings;
- PRODUCT V0.3 relationship restrictions;
- receipt-only human-review outcome.

Gate 4 must remain reader-first and Buyer Clean. Internal governance terms may appear only in planning documents, never in buyer-visible samples.

## 4. Historical disposition

| Prior baseline | Disposition |
|---|---|
| `CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V2.2.md` | `HISTORICAL PRE-USER-APPROVAL MANIFEST / SUPERSEDED_BY_V2.3` |
| `CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V2.1.md` | `HISTORICAL REVIEW-TIME MANIFEST` |
| `CONV-RFQ-G3-WF-01` full-page V1.0 assets | `HISTORICAL RETURNED REVIEW` |
| Gate 4/5 V0.x files created before the current Gate 1–3 rebaseline | `HISTORICAL / NOT_CURRENT_CONTROL` |

## 5. Next controlled action

Complete Gate 4 visual direction, self-check it, submit it to project control and stop. Do not self-approve Gate 4 or enter Gate 5.
