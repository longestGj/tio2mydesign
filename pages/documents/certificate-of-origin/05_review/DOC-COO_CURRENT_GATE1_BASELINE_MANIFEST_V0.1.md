# DOC-COO Current Gate 1 Baseline Manifest V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-COO` / `/documents/certificate-of-origin/` |
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
| Page Brief | `docs/page-briefs/DOC-COO_CERTIFICATE_OF_ORIGIN_BRIEF_V0.1.md` | 10951 | `411690A5C555AA7DC150A0D403C9C4C728CACC5FBDEE378BAFFC8E8DCB81C965` | `BRIEF_IN_REVIEW` |
| Gate 1 audit | `pages/documents/certificate-of-origin/01_research/DOC-COO_GATE1_RESEARCH_EVIDENCE_AUDIT_V0.1.md` | 4421 | `1DB55C7397EC07240E3B15314ECE1E05655E4E569C43879A2615A06A42A19201` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Claim Register | `pages/documents/certificate-of-origin/01_research/DOC-COO_GATE1_CLAIM_REGISTER_V0.1.csv` | 3608 | `73CBE4F1A77CD1C7D05753BB8C74F9C0A1DE01EC6D3779B85395B0FF1E56D633` | `GATE1_CANDIDATE` |
| Official source manifest | `pages/documents/certificate-of-origin/01_research/raw/00_source_manifest.csv` | 1177 | `81A31F8DD2DF7054B7888193B6B5262033C23A2B918B40A217329E453CC47610` | `2 COMPLETE` |
| Shared source inventory | `pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_INVENTORY_V0.1.csv` | 9539 | `7AD76AB2D36AB9C6A7EA393650933AAD23F8C378C6095D70D8BE2A05B65AD83B` | `VERIFIED_INTERNAL_INVENTORY` |
| Shared source audit | `pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_AUDIT_V0.1.md` | 3163 | `8C43B2EAE91908263B2A50AC5C3ADCB3FA0B217D89038F73F87A49D76527DF06` | `VERIFIED_INTERNAL_AUDIT` |

## 2. Baseline disposition

- Complete Royal Malaysian Customs and MITI pages are locally captured and hash-bound for general origin-document guidance.
- The Customs FAQ is the current lead source; the MITI material is older, ATIGA-focused supporting context and must remain date/scope-qualified.
- General official guidance does not prove IKHLAS/TiO2 Malaysia product or shipment origin, an issued COO, a particular issuing path, customs outcome or traceability capability.
- COO, origin substantiation, traceability and trade outcomes remain separate concepts.
- `Request Documents` remains a controlled, readiness-gated relationship to `CONV-DOC`.

Claim Register count: 5 `RENDER_WITH_QUALIFIER`, 1 `CONTROLLED_REQUEST_ONLY`, 4 `DO_NOT_RENDER`.

## 3. Open holds

- `COMPANY_PRODUCT_SHIPMENT_ORIGIN_EVIDENCE_HOLD=OPEN`
- `ISSUED_COO_OR_ISSUING_PATH_EVIDENCE_HOLD=OPEN`
- `TRACEABILITY_CAPABILITY_EVIDENCE_HOLD=OPEN`
- `CUSTOMS_OR_DUTY_OUTCOME_GUARANTEE=PROHIBITED`
- `TRADE_MEASURE_CIRCUMVENTION_FRAMING=PROHIBITED`
- `CONV_DOC_ROUTE_READINESS_GATE=OPEN`
- `PROVISIONAL_URL_FORMAL_APPROVAL=OPEN`

## 4. Next-state rule

Gate 1 can close only after the user explicitly approves the proposed Page Intent Card. That approval would authorize preparation of Gate 2 content architecture and full copy for DOC-COO only, using qualified general guidance while retaining every company/origin/traceability hold. It would not approve Malaysia-origin claims, URL publication state, visual design, development, deployment, publication or indexing.

## 5. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.1 | 2026-09-04 | Established the first Gate 1 review pointer for DOC-COO | `CURRENT / PENDING USER DECISION` |
