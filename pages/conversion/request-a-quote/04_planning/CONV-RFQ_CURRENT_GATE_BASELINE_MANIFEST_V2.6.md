# CONV-RFQ Current Gate Baseline Manifest V2.6

## 0. Identity and status

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Version | V2.6 |
| Current gate | Gate 5 — complete visual design |
| Gate 4 | `USER_APPROVED / CLOSED` |
| Gate 4 approval | 2026-09-01 / user's explicit current decision |
| Gate 5 | `AUTHORIZED / IN_PROGRESS` |
| Gate 6 | `LOCKED / NOT_AUTHORIZED` |
| Development / release | `NO / OUT_OF_SCOPE` |

This is the only current Gate 1–5 Manifest while Gate 5 is in progress.

## 1. Gate 5 authority

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `05_review/CONV-RFQ_GATE4_USER_APPROVAL_CLOSURE_V1.0.md` | 2,327 | `EF3DD7B0948BBB1BA9987045BF20317B82020099EA1A713EF345427D25E0F058` | Gate 4 approval and Gate 5 authorization |
| `04_planning/visual-directions/CONV-RFQ_GATE4_VISUAL_DIRECTION_V1.0.md` | 10,091 | `75554A650D6DE897EDF233F3FD6A230452F2B7D37060C01262300E9E2857BD88` | Approved visual language |
| `05_review/CONV-RFQ_GATE3_USER_APPROVAL_CLOSURE_V1.0.md` | 2,927 | `ECB1C3BAFDD2981ACFAA137BB8AB7B47C0E5C84229C6AC1B7B24D9AFA281459B` | Approved responsive structure |

## 2. Gate 5 lock

Gate 5 may render complete visuals and states only. Hero, field/data contract, Privacy Policy link, state semantics, PRODUCT V0.3, Global Chrome V0.5 and SEO/GEO/Schema facts remain frozen.

## 3. Required output

- Complete Buyer Clean: 1440 Desktop, 768 Tablet and 390px Mobile.
- Mobile Menu open.
- State evidence: initial, prefill, validation/focus/error, submitting/duplicate prevention, system failure/retry, receipt-only success, unavailable, long value/long copy.
- Asset dimensions, bytes, SHA-256, responsive/no-overflow validation and current Manifest.

## 4. Historical disposition

`CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V2.5.md` is `HISTORICAL PRE-GATE5-AUTHORIZATION / SUPERSEDED_BY_V2.6`. Earlier Manifests and V0.x Gate 4/5 files remain historical and do not control current work.

## 5. Next action

Complete Gate 5, submit to project control and stop. Do not self-approve Gate 5 or enter Gate 6/development.
