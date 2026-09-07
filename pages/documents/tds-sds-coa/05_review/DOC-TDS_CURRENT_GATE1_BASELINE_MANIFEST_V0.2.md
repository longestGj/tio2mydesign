# DOC-TDS Current Gate 1 Baseline Manifest V0.2

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Manifest version / date | V0.2 / 2026-09-04 |
| Status | `REVISED_GATE1_SUBMISSION / PENDING_USER_APPROVAL` |
| Project Control | `PROJECT_CONTROL_REVIEW_COMPLETE / USER_DECISION_PENDING` |
| Page lifecycle | `BRIEF_IN_REVIEW` |
| Keyword / evidence state | `PROVISIONAL_URL` / `FACT_EVIDENCE_REQUIRED` |
| Gate 1 | `PENDING_USER_APPROVAL / NOT_CLOSED` |
| Content intent | `CONTENT_INTENT_CONFIRMED=NO` |
| Gate 2–10 | `NOT_AUTHORIZED` |

## 1. Current authority set

| Role | File | Bytes | SHA-256 | State |
|---|---|---:|---|---|
| Revised Page Brief | `docs/page-briefs/DOC-TDS_TDS_SDS_COA_BRIEF_V0.2.md` | 8923 | `75A2F1D0023305D5F4D595701C808CB2DB9EEA4370D04FD834E6D7558D19CBE8` | `REVISED / PENDING_USER_APPROVAL` |
| Gate 1 audit | `pages/documents/tds-sds-coa/01_research/DOC-TDS_GATE1_RESEARCH_EVIDENCE_AUDIT_V0.1.md` | 4478 | `47156CCC0777337A48DE8292A6149E92F53B58D45B12F55CC518A27A508ED2DB` | `RETAINED RESEARCH` |
| Claim Register | `pages/documents/tds-sds-coa/01_research/DOC-TDS_GATE1_CLAIM_REGISTER_V0.1.csv` | 3565 | `3FEE169E1F846FE363F758E82562D0B6CEE6F6A5895967043B2B960B8045EDD3` | `RETAINED / FAIL_CLOSED` |
| Shared source inventory | `pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_INVENTORY_V0.1.csv` | 9539 | `7AD76AB2D36AB9C6A7EA393650933AAD23F8C378C6095D70D8BE2A05B65AD83B` | `RETAINED / VERIFIED` |
| Shared source audit | `pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_AUDIT_V0.1.md` | 3163 | `8C43B2EAE91908263B2A50AC5C3ADCB3FA0B217D89038F73F87A49D76527DF06` | `RETAINED / VERIFIED` |

## 2. Revised decision baseline

- Buyer flow: Direct Answer → Quick Document Choice → Find Documents by Product Grade → document scope → request.
- Contextual CTA: `Request TDS, SDS or COA`; secondary CTA: `View Document Hub`.
- Grade selection may pass editable request context to CONV-DOC but never establishes Grade-document availability.
- TDS/SDS/COA purpose and controlling context remain governed by the unchanged Claim Register.

Claim Register count remains 2 `RENDER`, 3 `RENDER_WITH_QUALIFIER`, 1 `CONTROLLED_REQUEST_ONLY`, 4 `DO_NOT_RENDER`.

## 3. Holds and next-state rule

`TDS_PUBLIC_INVENTORY_AND_DOWNLOAD_HOLD`, `SDS_FIRST_PARTY_EVIDENCE_HOLD`, `COA_FIRST_PARTY_EVIDENCE_HOLD`, `NO_INFERRED_GRADE_DOCUMENT_AVAILABILITY`, `CONV_DOC_ROUTE_READINESS_GATE` and `PROVISIONAL_URL_FORMAL_APPROVAL` remain open.

Gate 1 can close only after explicit user approval of the revised Page Intent. Approval would allow later Gate 2 work for this page while preserving every hold. It would not authorize Gate 3–10, development, deployment, publication or indexing.

## 4. Supersession

V0.2 supersedes `DOC-TDS_CURRENT_GATE1_BASELINE_MANIFEST_V0.1.md` as the current review pointer. V0.1 remains historical and its research/evidence records are not deleted or rewritten.

## 5. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.1 | 2026-09-04 | Initial Gate 1 review pointer | `HISTORICAL / SUPERSEDED` |
| V0.2 | 2026-09-04 | Bound revised buyer intent, Grade-to-request context, contextual CTA and Direct Answer requirement | `CURRENT / PENDING_USER_APPROVAL` |
