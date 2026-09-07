# DOC-REACH Current Gate 1 Baseline Manifest V0.3

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-REACH` / `/documents/reach/` |
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
| Revised Page Brief | `docs/page-briefs/DOC-REACH_TITANIUM_DIOXIDE_REACH_BRIEF_V0.3.md` | 11937 | `51DCEAA495D72497DCC056A1A5CBC8C623923071950949F2F5825D2AD6EA9866` | `REVISED / PENDING_USER_APPROVAL` |
| Gate 1 audit | `pages/documents/reach/01_research/DOC-REACH_GATE1_RESEARCH_EVIDENCE_AUDIT_V0.1.md` | 4556 | `69399244CAC837F933B851F92214511AADB79A818145F7279B2F81FDD4E3BA60` | `RETAINED RESEARCH` |
| Claim Register | `pages/documents/reach/01_research/DOC-REACH_GATE1_CLAIM_REGISTER_V0.1.csv` | 3685 | `162D5E600B47AD83F64D8C7069F90247AB281D4B9BEE6C81A41103192C0B0AE5` | `RETAINED / FAIL_CLOSED` |
| Official source manifest | `pages/documents/reach/01_research/raw/00_source_manifest.csv` | 1442 | `18C670ED1BE03F2D4B827ECD31CF212BE407E43927E3BB4D1898432B2E077389` | `RETAINED / 2 COMPLETE + 1 FAILED CAPTURE` |
| Shared source inventory | `pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_INVENTORY_V0.1.csv` | 9539 | `7AD76AB2D36AB9C6A7EA393650933AAD23F8C378C6095D70D8BE2A05B65AD83B` | `RETAINED / VERIFIED` |
| Shared source audit | `pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_AUDIT_V0.1.md` | 3163 | `8C43B2EAE91908263B2A50AC5C3ADCB3FA0B217D89038F73F87A49D76527DF06` | `RETAINED / VERIFIED` |

## 2. V0.3 delta

- Global audience is separated from the page's EU REACH regulatory subject.
- EU REACH evidence cannot be represented as UK REACH registration, compliance or coverage.
- `ECHA_TIO2_DIRECT_ANSWER_PUBLICATION_BLOCKER=OPEN` replaces the ordinary substance-specific evidence hold.
- `reach compliant titanium dioxide` is explicitly `QUERY_LANGUAGE_ONLY`.
- `source_page=DOC-REACH` is hidden/system/non-editable; only buyer context is editable.
- Meta direction communicates buyer/search value; evidence restrictions remain in Claim Control.

## 3. Holds and next-state

All company/legal-entity, importer/Only Representative, registration-number, tonnage and unqualified compliance holds remain open. Claim Register disposition remains 1 `RENDER`, 4 `RENDER_WITH_QUALIFIER`, 1 `CONTROLLED_REQUEST_ONLY`, 4 `DO_NOT_RENDER`.

The Direct Answer cannot be published until complete approved titanium-dioxide-specific ECHA evidence closes its blocker. Gate 1 can close only after explicit user approval. V0.3 does not authorize Gate 2–10, development, deployment, publication or indexing.

## 4. Supersession

V0.3 supersedes the V0.2 Manifest as the current review pointer. V0.1 and V0.2 remain historical; source captures, audits and Claim Registers are retained unchanged.

## 5. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.2 | 2026-09-04 | Revised registration-scope baseline | `HISTORICAL / SUPERSEDED` |
| V0.3 | 2026-09-04 | Six-item targeted audience, scope, blocker, request-context and SEO refinement | `CURRENT / PENDING_USER_APPROVAL` |
