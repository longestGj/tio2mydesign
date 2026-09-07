# DOC-REACH Current Gate 1 Baseline Manifest V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-REACH` / `/documents/reach/` |
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
| Page Brief | `docs/page-briefs/DOC-REACH_TITANIUM_DIOXIDE_REACH_BRIEF_V0.1.md` | 10736 | `55A383AE0AADEB275882091B38DBF039C5BB2AD91FB7F9EAD0CFF7235C7F5EE4` | `BRIEF_IN_REVIEW` |
| Gate 1 audit | `pages/documents/reach/01_research/DOC-REACH_GATE1_RESEARCH_EVIDENCE_AUDIT_V0.1.md` | 4556 | `69399244CAC837F933B851F92214511AADB79A818145F7279B2F81FDD4E3BA60` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Claim Register | `pages/documents/reach/01_research/DOC-REACH_GATE1_CLAIM_REGISTER_V0.1.csv` | 3685 | `162D5E600B47AD83F64D8C7069F90247AB281D4B9BEE6C81A41103192C0B0AE5` | `GATE1_CANDIDATE` |
| Official source manifest | `pages/documents/reach/01_research/raw/00_source_manifest.csv` | 1442 | `18C670ED1BE03F2D4B827ECD31CF212BE407E43927E3BB4D1898432B2E077389` | `2 COMPLETE / 1 FAILED_CAPTURE_RECORD` |
| Shared source inventory | `pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_INVENTORY_V0.1.csv` | 9539 | `7AD76AB2D36AB9C6A7EA393650933AAD23F8C378C6095D70D8BE2A05B65AD83B` | `VERIFIED_INTERNAL_INVENTORY` |
| Shared source audit | `pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_AUDIT_V0.1.md` | 3163 | `8C43B2EAE91908263B2A50AC5C3ADCB3FA0B217D89038F73F87A49D76527DF06` | `VERIFIED_INTERNAL_AUDIT` |

## 2. Baseline disposition

- Two complete European Commission official pages are locally captured and hash-bound for general REACH scope and industry-responsibility guidance.
- Direct ECHA page/PDF captures returned HTTP 403; their search summaries are discovery-only and cannot support final claims.
- No approved first-party evidence was identified for IKHLAS/TiO2 Malaysia registration, only-representative relationship, registration number, tonnage band or Grade/use coverage.
- Generic substance information cannot be presented as company or Grade coverage.
- `Request Documents` remains a controlled, readiness-gated relationship to `CONV-DOC`.

Claim Register count: 1 `RENDER`, 4 `RENDER_WITH_QUALIFIER`, 1 `CONTROLLED_REQUEST_ONLY`, 4 `DO_NOT_RENDER`.

## 3. Open holds

- `ECHA_COMPLETE_CAPTURE_DETAIL_HOLD=OPEN`
- `COMPANY_REACH_REGISTRATION_EVIDENCE_HOLD=OPEN`
- `GRADE_OR_USE_COVERAGE_EVIDENCE_HOLD=OPEN`
- `UNQUALIFIED_REACH_COMPLIANT_LANGUAGE=PROHIBITED`
- `CONV_DOC_ROUTE_READINESS_GATE=OPEN`
- `PROVISIONAL_URL_FORMAL_APPROVAL=OPEN`

## 4. Next-state rule

Gate 1 can close only after the user explicitly approves the proposed Page Intent Card. That approval would authorize preparation of Gate 2 content architecture and full copy for DOC-REACH only, using the eligible Commission sources and retaining every open hold. It would not approve company/Grade REACH coverage, URL publication state, visual design, development, deployment, publication or indexing.

## 5. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.1 | 2026-09-04 | Established the first Gate 1 review pointer for DOC-REACH | `CURRENT / PENDING USER DECISION` |
