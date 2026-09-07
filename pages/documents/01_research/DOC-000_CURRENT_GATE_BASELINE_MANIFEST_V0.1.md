# DOC-000 Current Gate Baseline Manifest V0.1

## 0. Control

| Field | Value |
|---|---|
| Page ID | `DOC-000` |
| Page name | Documents & Compliance Hub |
| URL / type | `/documents/` / Navigation hub |
| Lifecycle | `BRIEF_IN_REVIEW` |
| Current Gate | Gate 1 targeted rebaseline |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION` |
| Review ID | `DOC-000-G1-V11-REB-01` |
| Next-Gate authorization | `NO` |

This is the sole current Gate 1–5 authority manifest for the rebased DOC-000 version. It does not approve Gate 1 and contains no current Gate 2–5 or visual baseline.

## 1. Authority / consumption order

1. Current user instructions and the three confirmed conflict decisions.
2. `D:\23MySec\AGENTS.md`.
3. `docs/architecture/PAGE_GATE_1_5_STANDARD_V1.0.md`.
4. Current approved PRD, Page Registry and keyword master.
5. Current DOC-000 Gate 1 files listed in section 2.
6. `IKHLAS_Document_Hub_Request_Documents_Design_Spec_V1.1.md` as the supplied rebaseline input after applying the confirmed URL/navigation/precedence decisions.
7. Historical DOC-000 files only for provenance and change comparison; they cannot override this manifest.

## 2. Current files

| Role | Path | Bytes | SHA-256 | Status |
|---|---|---:|---|---|
| Current Brief / Page Intent Card | `docs/page-briefs/DOC-000_DOCUMENTS_COMPLIANCE_BRIEF_V0.4.md` | 10360 | `14C7E7DDB74B87A3C324AD9D7FF143E4F34E645A79533652AB51BDFDBC10152C` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Gate 1 intent, keyword and evidence audit | `pages/documents/01_research/DOC-000_GATE1_INTENT_KEYWORD_EVIDENCE_REBASE_V0.1.md` | 12223 | `FCA91A2A61CC95410E2B2A7F3A67A86B531DBFACD2EFE7A6F9E4B329A2E92B11` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Gate 2–5 change-impact register | `pages/documents/01_research/DOC-000_GATE1_V11_CHANGE_IMPACT_V0.1.md` | 5198 | `5080C95F61227598D17ED78DE82E10FE1A2B46A19365CCC3EE8EF80102D708F9` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Project-control submission | `pages/documents/01_research/DOC-000_GATE1_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md` | 2292 | `5AB4690DDAFFDD6EB30CB776701E6343F9F6B89FCF1FA403B49C379E2C13BD9E` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |

## 3. Current input bindings

| Input | Binding |
|---|---|
| V1.1 specification | `C:\Users\longe\Downloads\IKHLAS_Document_Hub_Request_Documents_Design_Spec_V1.1.md`; 23179 bytes; SHA-256 `3E303D2700A0ADEE87750D4AD2E91675F535F71124239B58A5EDA1B2A2ED0D30` |
| Product Grade master | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`; 14 unique Grade identifiers; SHA-256 `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406` |
| Global Chrome | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`; consume shared Header/Mobile Header/Mobile Menu/Footer unchanged; current navigation key=`Documents` |

## 4. Gate authority matrix

| Gate | Current rebased authority | Status |
|---|---|---|
| Gate 1 | Brief V0.4 + three `01_research` documents in section 2 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Gate 2 | None | `NOT_STARTED_FOR_REBASED_VERSION` |
| Gate 3 | None | `NOT_STARTED_FOR_REBASED_VERSION` |
| Gate 4 | None | `NOT_STARTED_FOR_REBASED_VERSION` |
| Gate 5 | None; no current visual asset | `NOT_STARTED_FOR_REBASED_VERSION` |

## 5. Historical / superseded pending rework

The following remain at their original paths and are not deleted, overwritten or approved by this manifest:

- `docs/page-briefs/DOC-000_DOCUMENTS_COMPLIANCE_BRIEF_V0.1.md` through `V0.3.md`;
- `docs/page-playbooks/DOCUMENT_PLAYBOOK_V0.1.md` through `V0.3.md`;
- all DOC-000 Gate 2 content/SEO documents under `pages/documents/04_planning/`;
- all DOC-000 Gate 3 wireframes;
- all DOC-000 Gate 4 visual directions;
- all DOC-000 Gate 5 full-visual specifications, manifests, PNGs and interactive companions through V0.5.

Disposition: `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL`.

The old files remain useful for provenance and may inform a future redesign only where they do not conflict with the approved Gate 1 intent.

## 6. User-decision record

Already confirmed for this rebaseline:

- route remains `/documents/`;
- shared Header label remains `Documents`, while page eyebrow may use `DOCUMENT HUB`;
- V1.1 controls over conflicting image fields, workflow and copy.

Pending user confirmation after project-control review:

- the complete Page Intent Card;
- the three review processes;
- the five documentation groups;
- the 14-Grade selector and Grade-first request handoff;
- the exclusion set and evidence freezes.

No item in this manifest authorizes Gate 2, child-page work, development, D16 access, deployment, publication or indexing.

## 7. Open issues and freezes

| ID | Open item | Boundary |
|---|---|---|
| DOC-G1-O01 | Page Intent Card user decision | Checkpoint remains pending |
| DOC-G1-O02 | `/request-documents/` receiver/prefill readiness | Contract only; no live claim or implementation |
| DOC-G1-O03 | Per-Grade/per-group document applicability and public inventory | Frozen; taxonomy is not availability evidence |
| DOC-G1-O04 | REACH, origin, COO, traceability and supplier-qualification facts | Frozen to review-purpose semantics until approved evidence exists |
| DOC-G1-O05 | English-only operational scope | User-supplied current-stage intent; confirm before publication |
| DOC-G1-O06 | Canonical, robots and index state | Not decided in this Gate 1 rebaseline |

## 8. Stop condition

The package stops at `DRAFT_FOR_PROJECT_CONTROL_REVIEW`. Project-control PASS would still require the user to confirm or revise the content intent. Gate 2 cannot start without separate authorization.
