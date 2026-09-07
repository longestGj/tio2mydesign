# DOC-TDS Current Gate 1 Baseline Manifest V0.3

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Manifest version / date | V0.3 / 2026-09-04 |
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
| Revised Page Brief | `docs/page-briefs/DOC-TDS_TDS_SDS_COA_BRIEF_V0.3.md` | 10147 | `8501B091F85ABE4749AF9584B55BB7500831711AE545C8B474D4ACAC176009B9` | `REVISED / PENDING_USER_APPROVAL` |
| Gate 1 audit | `pages/documents/tds-sds-coa/01_research/DOC-TDS_GATE1_RESEARCH_EVIDENCE_AUDIT_V0.1.md` | 4478 | `47156CCC0777337A48DE8292A6149E92F53B58D45B12F55CC518A27A508ED2DB` | `RETAINED RESEARCH` |
| Claim Register | `pages/documents/tds-sds-coa/01_research/DOC-TDS_GATE1_CLAIM_REGISTER_V0.1.csv` | 3565 | `3FEE169E1F846FE363F758E82562D0B6CEE6F6A5895967043B2B960B8045EDD3` | `RETAINED / FAIL_CLOSED` |
| Shared source inventory | `pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_INVENTORY_V0.1.csv` | 9539 | `7AD76AB2D36AB9C6A7EA393650933AAD23F8C378C6095D70D8BE2A05B65AD83B` | `RETAINED / VERIFIED` |
| Shared source audit | `pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_AUDIT_V0.1.md` | 3163 | `8C43B2EAE91908263B2A50AC5C3ADCB3FA0B217D89038F73F87A49D76527DF06` | `RETAINED / VERIFIED` |

## 2. V0.3 delta

- Page type is `Technical-document decision page`.
- `document_types[]` is an editable multi-select with `one_or_more` cardinality, aligned to the existing CONV-DOC allowlist.
- `source_page=DOC-TDS` is hidden/system/non-editable and normalizes to internal `source_context.page_id`.
- Product Grade, document types and supported buyer-entered context remain editable.
- Meta direction communicates buyer/search value; evidence restrictions remain in Claim Control and do not enter future meta copy.

## 3. Holds and next-state

All V0.2 Evidence Holds remain open, including no public inventory/download, no SDS/COA availability inference, no Grade-document availability inference and route-readiness control. Claim Register disposition remains 2 `RENDER`, 3 `RENDER_WITH_QUALIFIER`, 1 `CONTROLLED_REQUEST_ONLY`, 4 `DO_NOT_RENDER`.

Gate 1 can close only after explicit user approval. V0.3 does not authorize Gate 2–10, development, deployment, publication or indexing.

## 4. Supersession

V0.3 supersedes the V0.2 Manifest as the current review pointer. V0.1 and V0.2 remain historical; their research and evidence records are retained.

## 5. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.2 | 2026-09-04 | Revised buyer-intent baseline | `HISTORICAL / SUPERSEDED` |
| V0.3 | 2026-09-04 | Six-item targeted request-context and SEO refinement | `CURRENT / PENDING_USER_APPROVAL` |
