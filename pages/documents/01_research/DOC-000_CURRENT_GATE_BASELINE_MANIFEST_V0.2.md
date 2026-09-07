# DOC-000 Current Gate Baseline Manifest V0.2

## 0. Control

| Field | Value |
|---|---|
| Page ID | `DOC-000` |
| Page name | Documents & Compliance Hub |
| URL / type | `/documents/` / Navigation hub |
| Lifecycle | `BRIEF_IN_REVIEW` |
| Current Gate | Gate 1 approved closure baseline |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Checkpoint | `CONTENT_INTENT_CONFIRMED / APPROVED` |
| Review ID | `DOC-000-G1-V11-TYPES-01` |
| Current public group count | `4` |
| Approval date / source | 2026-09-01 / project-control PASS plus explicit user confirmation |
| Gate 2 authorization | `USER_AUTHORIZED / STARTED_SEPARATELY` |

This is the approved Gate 1 closure Manifest. It becomes the immutable upstream authority when the separate Gate 2 Manifest is established; it contains no Gate 3–5 or visual authority.

## 1. Authority / consumption order

1. Current user decision for Review ID `DOC-000-G1-V11-TYPES-01`.
2. `D:\23MySec\AGENTS.md`.
3. `docs/architecture/PAGE_GATE_1_5_STANDARD_V1.0.md`.
4. Current approved PRD, Page Registry and keyword master.
5. Current DOC-000 Gate 1 payload files in section 2.
6. Historical DOC-000 files for provenance only; they cannot override this Manifest.

## 2. Current payload files

| Role | Path | Bytes | SHA-256 | Status |
|---|---|---:|---|---|
| Approved Brief / Page Intent Card | `docs/page-briefs/DOC-000_DOCUMENTS_COMPLIANCE_BRIEF_V0.5.md` | 11158 | `6180A2665A85D452365111369DD72D8785E9748CF4A5ABE7D016DA4F6CA97118` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 1 intent, keyword and evidence audit | `pages/documents/01_research/DOC-000_GATE1_INTENT_KEYWORD_EVIDENCE_REBASE_V0.2.md` | 9198 | `2FB1585AA24C8FCF206D7D2A4C55A0D548E75E19AF60CEB6ACE12959E0302319` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 1 change-impact register | `pages/documents/01_research/DOC-000_GATE1_V11_CHANGE_IMPACT_V0.2.md` | 5054 | `7181348BEB6F6AC5D0F1B85992BB6970BC512B10C7FA49669FE9B69C6F107A1E` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Project-control submission / closure record | `pages/documents/01_research/DOC-000_GATE1_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.2.md` | 3090 | `DEB7E47A8713CAD4AFB195ACBEB7E91E1F888CCDE2B5E167E73B478185B4C2E7` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |

The Manifest file's own SHA-256 is computed and reported after final payload and governance validation; it is not self-embedded.

## 3. Current input bindings

| Input | Binding |
|---|---|
| Product Grade master | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`; 14 unique Grade identifiers; selector identity only |
| Global Chrome | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`; SHA-256 `CC236F47018A68771856FDBAF5553517F63959774E0E8819130E66E2B1049F18`; current navigation key=`Documents` |
| Registered child identities | DOC-REACH, DOC-TDS and DOC-COO retained; no child page started, linked or modified |

## 4. Current public taxonomy and capability gate

### Public Buyer Clean groups — exactly four

1. `Technical Data & Product Documentation`
2. `Safety Documentation`
3. `Quality & COA Documentation`
4. `Origin & Supplier Qualification Documentation`

### Internal non-render controls

| Candidate capability / taxonomy | State | Control |
|---|---|---|
| Regulatory & Compliance Documentation | `NOT_ESTABLISHED` | `DO_NOT_RENDER`; no public card, category, count, CTA, prefill, claim or structured-data relation |
| Other Documentation | `NOT_A_FORMAL_HUB_GROUP` | `DO_NOT_RENDER_AS_HUB_CARD`; cannot increase public count above four |

The internal table is governance metadata only and is excluded from Buyer Clean candidate copy.

## 5. Gate authority matrix

| Gate | Current authority | Status |
|---|---|---|
| Gate 1 | Brief V0.5 plus the four V0.2 `01_research` files | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 1 checkpoint | Current package | `CONTENT_INTENT_CONFIRMED / APPROVED` |
| Gate 2 | Separate package under `DOC-000-G2-V11-COPY-01` | `USER_AUTHORIZED / IN_PROGRESS` |
| Gate 3 | None | `NOT_STARTED_FOR_REBASED_VERSION` |
| Gate 4 | None | `NOT_STARTED_FOR_REBASED_VERSION` |
| Gate 5 | None; no current visual asset | `NOT_STARTED_FOR_REBASED_VERSION` |
| Gate 6+ | None | `NOT_AUTHORIZED` |

## 6. Historical / superseded records

These files remain at their original paths and are not deleted, overwritten, approved or current:

| Historical role | Path | SHA-256 | Disposition |
|---|---|---|---|
| Five-group Brief | `docs/page-briefs/DOC-000_DOCUMENTS_COMPLIANCE_BRIEF_V0.4.md` | `14C7E7DDB74B87A3C324AD9D7FF143E4F34E645A79533652AB51BDFDBC10152C` | `HISTORICAL / SUPERSEDED_BY_TYPES_01 / NOT_CURRENT_CONTROL` |
| Five-group Gate 1 audit | `pages/documents/01_research/DOC-000_GATE1_INTENT_KEYWORD_EVIDENCE_REBASE_V0.1.md` | `FCA91A2A61CC95410E2B2A7F3A67A86B531DBFACD2EFE7A6F9E4B329A2E92B11` | `HISTORICAL / SUPERSEDED_BY_TYPES_01 / NOT_CURRENT_CONTROL` |
| Five-group impact register | `pages/documents/01_research/DOC-000_GATE1_V11_CHANGE_IMPACT_V0.1.md` | `5080C95F61227598D17ED78DE82E10FE1A2B46A19365CCC3EE8EF80102D708F9` | `HISTORICAL / SUPERSEDED_BY_TYPES_01 / NOT_CURRENT_CONTROL` |
| Previous current Manifest | `pages/documents/01_research/DOC-000_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md` | `BE102BF169E85D7070DD8D866EFDB249DA5F39B6F77632B7BED98364C371F784` | `HISTORICAL / SUPERSEDED_BY_TYPES_01 / NOT_CURRENT_CONTROL` |
| Previous submission | `pages/documents/01_research/DOC-000_GATE1_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md` | `5AB4690DDAFFDD6EB30CB776701E6343F9F6B89FCF1FA403B49C379E2C13BD9E` | `HISTORICAL / SUPERSEDED_BY_TYPES_01 / NOT_CURRENT_CONTROL` |

All earlier DOC-000 Gate 2 content/SEO documents, Gate 3 wireframes, Gate 4 visual directions, and Gate 5 visual specifications/assets through V0.5 also remain `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL`.

## 7. Locked and pending decisions

Locked for this resubmission:

- `/documents/`, Header `Documents`, eyebrow `DOCUMENT HUB`;
- exactly three review scenarios and four public documentation groups;
- 14 Grade identifiers, no default, Grade-first editable prefill to `/request-documents/`;
- English only, no market/language selector;
- no download, inventory, SLA, availability, delivery or approval promise;
- internal non-render capability state and no fifth/catch-all card.

Open downstream items:

- user confirmation or revision of the complete Page Intent Card at the named checkpoint;
- receiver readiness and safe parameter handling;
- per-Grade/per-group inventory, applicability, file facts and origin/supplier evidence;
- Canonical, robots and index state outside this targeted review.

## 8. Stop condition

Gate 1 is `PROJECT_CONTROL_REVIEW_PASS / CLOSED` and Gate 2 is separately authorized. This Manifest records no Gate 3+, current visual, child-page work, implementation, D16 access, deployment, publication or indexing.
