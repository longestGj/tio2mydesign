# DOC-REACH Current Gate 1 Baseline Manifest V0.2

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-REACH` / `/documents/reach/` |
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
| Revised Page Brief | `docs/page-briefs/DOC-REACH_TITANIUM_DIOXIDE_REACH_BRIEF_V0.2.md` | 9384 | `BD671E55C1D3993998182DA4D18A0DE740E8367C979C0806A046B54E147B4D90` | `REVISED / PENDING_USER_APPROVAL` |
| Gate 1 audit | `pages/documents/reach/01_research/DOC-REACH_GATE1_RESEARCH_EVIDENCE_AUDIT_V0.1.md` | 4556 | `69399244CAC837F933B851F92214511AADB79A818145F7279B2F81FDD4E3BA60` | `RETAINED RESEARCH` |
| Claim Register | `pages/documents/reach/01_research/DOC-REACH_GATE1_CLAIM_REGISTER_V0.1.csv` | 3685 | `162D5E600B47AD83F64D8C7069F90247AB281D4B9BEE6C81A41103192C0B0AE5` | `RETAINED / FAIL_CLOSED` |
| Official source manifest | `pages/documents/reach/01_research/raw/00_source_manifest.csv` | 1442 | `18C670ED1BE03F2D4B827ECD31CF212BE407E43927E3BB4D1898432B2E077389` | `RETAINED / 2 COMPLETE + 1 FAILED CAPTURE` |
| Shared source inventory | `pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_INVENTORY_V0.1.csv` | 9539 | `7AD76AB2D36AB9C6A7EA393650933AAD23F8C378C6095D70D8BE2A05B65AD83B` | `RETAINED / VERIFIED` |
| Shared source audit | `pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_AUDIT_V0.1.md` | 3163 | `8C43B2EAE91908263B2A50AC5C3ADCB3FA0B217D89038F73F87A49D76527DF06` | `RETAINED / VERIFIED` |

## 2. Revised decision baseline

- Top Direct Answer addresses `Is titanium dioxide REACH registered?` without inferring supplier or supply-chain coverage.
- Registration language is based on substance identity, legal actor, manufacturer/importer/Only Representative role where applicable, supply arrangement, use/market and evidence date; a commercial Grade is not the registrant.
- Contextual CTA: `Request REACH Documentation`; secondary CTA: `View Document Hub`.
- Gate 2 architecture may proceed only after approval; substance-specific visible claims remain held until eligible ECHA evidence exists.

Claim Register count remains 1 `RENDER`, 4 `RENDER_WITH_QUALIFIER`, 1 `CONTROLLED_REQUEST_ONLY`, 4 `DO_NOT_RENDER`.

## 3. Holds and next-state rule

`ECHA_TITANIUM_DIOXIDE_SPECIFIC_COMPLETE_CAPTURE_HOLD`, `COMPANY_OR_LEGAL_ENTITY_REACH_COVERAGE_HOLD`, `IMPORTER_OR_ONLY_REPRESENTATIVE_RELATIONSHIP_HOLD`, `REGISTRATION_NUMBER_AND_TONNAGE_HOLD`, `UNQUALIFIED_REACH_COMPLIANT_LANGUAGE_PROHIBITED`, `CONV_DOC_ROUTE_READINESS_GATE` and `PROVISIONAL_URL_FORMAL_APPROVAL` remain open.

Gate 1 can close only after explicit user approval of the revised Page Intent. Approval would allow later Gate 2 architecture/copy work while preserving every hold. It would not authorize Gate 3–10, development, deployment, publication or indexing.

## 4. Supersession

V0.2 supersedes `DOC-REACH_CURRENT_GATE1_BASELINE_MANIFEST_V0.1.md` as the current review pointer. V0.1 remains historical; the source captures, audit and Claim Register remain unchanged.

## 5. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.1 | 2026-09-04 | Initial Gate 1 review pointer | `HISTORICAL / SUPERSEDED` |
| V0.2 | 2026-09-04 | Bound legal-actor/supply-chain registration scope, Direct Answer, contextual CTA and titanium-dioxide-specific ECHA hold | `CURRENT / PENDING_USER_APPROVAL` |
