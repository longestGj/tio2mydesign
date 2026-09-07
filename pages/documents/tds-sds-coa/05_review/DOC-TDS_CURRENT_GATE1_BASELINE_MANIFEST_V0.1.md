# DOC-TDS Current Gate 1 Baseline Manifest V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Manifest version / date | V0.1 / 2026-09-04 |
| Status | `CURRENT_GATE1_REVIEW_BASELINE / PROJECT_CONTROL_REVIEW_PENDING` |
| Page lifecycle | `BRIEF_IN_REVIEW` |
| Keyword / evidence state | `PROVISIONAL_URL` / `FACT_EVIDENCE_REQUIRED` |
| Gate 0 | `DRAFT_COMPLETE / PROJECT_CONTROL_REVIEW_PENDING` |
| Gate 1 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Content intent | `CONTENT_INTENT_CONFIRMED=NO / USER_DECISION_REQUIRED` |
| Gate 2–10 | `NOT_AUTHORIZED` |

## 1. Current authority set

| Role | File | Bytes | SHA-256 | State |
|---|---|---:|---|---|
| Page Brief | `docs/page-briefs/DOC-TDS_TDS_SDS_COA_BRIEF_V0.1.md` | 11072 | `35C5C8C5A06D28B167D8A49F68197681802CF958AEDDAFF2DFFBA47D53574C36` | `BRIEF_IN_REVIEW` |
| Gate 1 audit | `pages/documents/tds-sds-coa/01_research/DOC-TDS_GATE1_RESEARCH_EVIDENCE_AUDIT_V0.1.md` | 4478 | `47156CCC0777337A48DE8292A6149E92F53B58D45B12F55CC518A27A508ED2DB` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Claim Register | `pages/documents/tds-sds-coa/01_research/DOC-TDS_GATE1_CLAIM_REGISTER_V0.1.csv` | 3565 | `3FEE169E1F846FE363F758E82562D0B6CEE6F6A5895967043B2B960B8045EDD3` | `GATE1_CANDIDATE` |
| Shared source inventory | `pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_INVENTORY_V0.1.csv` | 9539 | `7AD76AB2D36AB9C6A7EA393650933AAD23F8C378C6095D70D8BE2A05B65AD83B` | `VERIFIED_INTERNAL_INVENTORY` |
| Shared source audit | `pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_AUDIT_V0.1.md` | 3163 | `8C43B2EAE91908263B2A50AC5C3ADCB3FA0B217D89038F73F87A49D76527DF06` | `VERIFIED_INTERNAL_AUDIT` |

## 2. Baseline disposition

- Fourteen grade identities and readable grade-matched TDS source presence are verified internal planning facts.
- Local source presence does not authorize a public inventory, download control, current-revision claim or Grade-to-document availability relationship.
- No approved first-party SDS or COA inventory was identified.
- TDS, SDS and COA purpose/scope guidance may be drafted only within the Claim Register dispositions.
- `Request Documents` remains a controlled, readiness-gated relationship to `CONV-DOC`.

Claim Register count: 2 `RENDER`, 3 `RENDER_WITH_QUALIFIER`, 1 `CONTROLLED_REQUEST_ONLY`, 4 `DO_NOT_RENDER`.

## 3. Open holds

- `TDS_PUBLIC_INVENTORY_AND_DOWNLOAD_HOLD=OPEN`
- `SDS_FIRST_PARTY_EVIDENCE_HOLD=OPEN`
- `COA_FIRST_PARTY_EVIDENCE_HOLD=OPEN`
- `MULTIPLE_TDS_VERSION_MERGE_PROHIBITED=ACTIVE`
- `CONV_DOC_ROUTE_READINESS_GATE=OPEN`
- `PROVISIONAL_URL_FORMAL_APPROVAL=OPEN`

## 4. Next-state rule

Gate 1 can close only after the user explicitly approves the proposed Page Intent Card. That approval would authorize preparation of Gate 2 content architecture and full copy for DOC-TDS only; it would not approve any frozen claim, URL publication state, visual design, development, deployment, publication or indexing.

## 5. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.1 | 2026-09-04 | Established the first Gate 1 review pointer for DOC-TDS | `CURRENT / PENDING USER DECISION` |
