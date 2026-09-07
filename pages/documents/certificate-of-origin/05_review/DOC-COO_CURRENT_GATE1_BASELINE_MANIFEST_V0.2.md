# DOC-COO Current Gate 1 Baseline Manifest V0.2

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-COO` / `/documents/certificate-of-origin/` |
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
| Revised Page Brief | `docs/page-briefs/DOC-COO_CERTIFICATE_OF_ORIGIN_BRIEF_V0.2.md` | 10429 | `715629C05EA5C8BBED881F18004CB3F6D0C289EAB031BD498D0A4B58D54BB012` | `REVISED / PENDING_USER_APPROVAL` |
| Gate 1 audit | `pages/documents/certificate-of-origin/01_research/DOC-COO_GATE1_RESEARCH_EVIDENCE_AUDIT_V0.1.md` | 4421 | `1DB55C7397EC07240E3B15314ECE1E05655E4E569C43879A2615A06A42A19201` | `RETAINED RESEARCH` |
| Claim Register | `pages/documents/certificate-of-origin/01_research/DOC-COO_GATE1_CLAIM_REGISTER_V0.1.csv` | 3608 | `73CBE4F1A77CD1C7D05753BB8C74F9C0A1DE01EC6D3779B85395B0FF1E56D633` | `RETAINED / FAIL_CLOSED` |
| Official source manifest | `pages/documents/certificate-of-origin/01_research/raw/00_source_manifest.csv` | 1177 | `81A31F8DD2DF7054B7888193B6B5262033C23A2B918B40A217329E453CC47610` | `RETAINED / 2 COMPLETE` |
| Shared source inventory | `pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_INVENTORY_V0.1.csv` | 9539 | `7AD76AB2D36AB9C6A7EA393650933AAD23F8C378C6095D70D8BE2A05B65AD83B` | `RETAINED / VERIFIED` |
| Shared source audit | `pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_AUDIT_V0.1.md` | 3163 | `8C43B2EAE91908263B2A50AC5C3ADCB3FA0B217D89038F73F87A49D76527DF06` | `RETAINED / VERIFIED` |

## 2. Revised decision baseline

- Buyer flow distinguishes preferential Certificate/Proof of Origin, non-preferential COO and other proof/declaration where applicable before discussing traceability.
- Decision model: destination/scheme → rules of origin → origin qualification → appropriate proof/certificate → transaction documentation.
- Contextual CTA: `Request Origin Documentation`; secondary CTA: `View Document Hub`.
- Strategic Malaysia-origin positioning remains separate from evidence; no company/product/shipment origin claim is released.

Claim Register count remains 5 `RENDER_WITH_QUALIFIER`, 1 `CONTROLLED_REQUEST_ONLY`, 4 `DO_NOT_RENDER`.

## 3. Holds and next-state rule

`COMPANY_PRODUCT_MALAYSIA_ORIGIN_PUBLICATION_HOLD`, `SHIPMENT_LEVEL_ORIGIN_HOLD`, `ISSUED_COO_AND_ISSUING_PATH_HOLD`, `TRACEABILITY_CAPABILITY_HOLD`, `CUSTOMS_OR_DUTY_GUARANTEE_PROHIBITED`, `CIRCUMVENTION_FRAMING_PROHIBITED`, `CONV_DOC_ROUTE_READINESS_GATE` and `PROVISIONAL_URL_FORMAL_APPROVAL` remain open.

Gate 1 can close only after explicit user approval of the revised Page Intent. Approval would allow later Gate 2 architecture/copy work while preserving every hold. It would not authorize Gate 3–10, development, deployment, publication or indexing.

## 4. Supersession

V0.2 supersedes `DOC-COO_CURRENT_GATE1_BASELINE_MANIFEST_V0.1.md` as the current review pointer. V0.1 remains historical; official captures, audit and Claim Register are retained unchanged.

## 5. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.1 | 2026-09-04 | Initial Gate 1 review pointer | `HISTORICAL / SUPERSEDED` |
| V0.2 | 2026-09-04 | Bound preferential/non-preferential origin decision model, explicit Malaysia-origin publication hold, contextual CTA and Direct Answer | `CURRENT / PENDING_USER_APPROVAL` |
