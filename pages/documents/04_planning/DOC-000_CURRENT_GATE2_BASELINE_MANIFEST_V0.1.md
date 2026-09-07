# DOC-000 Current Gate 2 Baseline Manifest V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Page type | Navigation hub |
| Current Gate | Gate 2 — content architecture and complete copy |
| Review ID | `DOC-000-G2-V11-COPY-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED_PENDING_USER_CONFIRMATION` |
| Approved upstream | `DOC-000-G1-V11-TYPES-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 3 authorization | `NO` |

This is the sole current DOC-000 Gate 1–5 authority Manifest. It consumes the approved Gate 1 closure and establishes only a Gate 2 review candidate; it contains no current wireframe, visual or implementation authority.

## 1. Authority order

1. Current user Gate 1 approval and Gate 2 authorization.
2. `D:\23MySec\AGENTS.md` and `PAGE_GATE_1_5_STANDARD_V1.0.md`.
3. Approved Gate 1 Manifest V0.2 and its four-group contract.
4. PRD V0.4, Page Registry V0.1 and keyword master.
5. Current Gate 2 payload files in section 2.
6. Historical DOC-000 files for provenance only.

## 2. Current Gate 2 payload

| Role | Path | Bytes | SHA-256 | Status |
|---|---|---:|---|---|
| Content Architecture and complete English copy | `pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.5.md` | 16370 | `21B19B82D213B030CF85AC48702033B69D314EABDDA53DB35EEC06C50B1277C7` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| SEO/GEO/Schema candidate contract | `pages/documents/04_planning/DOC-000_SEO_GEO_SCHEMA_CONTRACT_V0.4.md` | 7140 | `0A939571806C7EA22F4969418E2AAD0782DAA8FF466273A6B5F1C78496C8C11D` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Gate 2 change-impact register | `pages/documents/04_planning/DOC-000_GATE2_V11_CHANGE_IMPACT_V0.1.md` | 5045 | `8E33D8611CB9A3DFD73FD44D4FA8D5AE6E60F3C271E9B6CEC8958EB66F5DF350` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Project-control review submission | `pages/documents/04_planning/DOC-000_GATE2_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md` | 3033 | `058DA9E4181399F16942C80CFFA2C21C9327973DB3B28D0A7A9EAFD00BCAFD77` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |

The Manifest self-hash is computed after final validation and is not self-embedded.

## 3. Approved upstream binding

| Upstream | Binding |
|---|---|
| Gate 1 Review | `DOC-000-G1-V11-TYPES-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 1 checkpoint | `CONTENT_INTENT_CONFIRMED / APPROVED` |
| Gate 1 closure Manifest | `pages/documents/01_research/DOC-000_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md`; 6877 bytes; SHA-256 `884438681D786736BD152CB9BE9746DEF572179737D860EBE2293C96E9A144F0` |
| Shared Global Chrome | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`; current key=`Documents`; Header/Footer consumed unchanged |
| Product identifiers | 14 approved Grade labels; identity only, no document relationship |

## 4. Current content contract

### Review scenarios — exactly three

1. `Product Evaluation`
2. `Quality & Supplier Qualification`
3. `Origin & Supplier Qualification Review`

### Public documentation groups — exactly four

1. `Technical Data & Product Documentation`
2. `Safety Documentation`
3. `Quality & COA Documentation`
4. `Origin & Supplier Qualification Documentation`

### Product Grade selector — 14 values, no default

`M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`.

### Conversion

One body conversion: valid selected Grade → `/request-documents/?product={GRADE}` or equivalent safe transfer → editable receiving field. No Grade means focus/validation on the selector, not navigation.

## 5. Negative capability and rendering gates

| Item | State | Current control |
|---|---|---|
| Regulatory & Compliance Documentation | `NOT_ESTABLISHED` | `DO_NOT_RENDER`; no card, category, count, CTA, prefill, public claim or Schema/GEO relationship |
| Other Documentation | `NOT_A_FORMAL_HUB_GROUP` | `DO_NOT_RENDER_AS_HUB_CARD`; total remains four |
| Public document inventory | `NOT_ESTABLISHED` | No result/file module and zero machine file entities |
| Request receiver readiness | `UNVERIFIED` | Contract only; route unavailable is a release blocker |
| Availability, suitability, approval, SLA, sending or delivery | `NOT_ESTABLISHED` | No positive claim or structured relation |

This table is internal governance metadata and is not Buyer Clean copy.

## 6. Gate authority matrix

| Gate | Authority | Status |
|---|---|---|
| Gate 0 | Registry/keyword identity | Retained |
| Gate 1 | Approved V0.5/V0.2 package | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 2 | Current payload in section 2 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Gate 2 checkpoint | Current payload | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED_PENDING_USER_CONFIRMATION` |
| Gate 3 | None | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 4 | None | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 5 | None; no current visual | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 6+ | None | `NOT_AUTHORIZED` |

## 7. Historical / non-current files

| Historical item | SHA-256 where recorded | Disposition |
|---|---|---|
| Content Architecture V0.4 | `F7A108B621E30AFA0F29EE06B873016FA00F79D36ABDDD702226D2D60014E67C` | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` |
| SEO/GEO/Schema Contract V0.3 | `36FB55401341C6690AA5A57FFE980E06A17A6CEB4F800A3A11627AF97C8DB8AA` | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` |
| All earlier Content/SEO files | Preserved at original paths | Same disposition |
| All Wireframes V0.1–V0.3 | Preserved at original paths | Same disposition |
| All Visual Directions V0.1–V0.4 | Preserved at original paths | Same disposition |
| Full Visuals/assets/submissions V0.1–V0.5 | Preserved at original paths | Same disposition |

The Gate 1 closure Manifest V0.2 is not discarded; it remains the approved upstream record and is superseded only as the current cross-Gate navigation root by this Gate 2 Manifest.

## 8. Open items

| ID | Item | State / boundary |
|---|---|---|
| DOC-G2-O01 | Complete copy and module-order decision | Pending project-control review, then user confirmation |
| DOC-G2-O02 | Request route and editable prefill readiness | Unverified; release blocker |
| DOC-G2-O03 | Public file inventory and per-Grade applicability | Not established; do not render |
| DOC-G2-O04 | Origin/supplier/COO/traceability/batch facts | Evidence required; purpose-level language only |
| DOC-G2-O05 | English-only operational readiness | Verify before publication |
| DOC-G2-O06 | Canonical, robots and index approval | Candidate only; later release decision |

## 9. Stop condition

This package stops at `DRAFT_FOR_PROJECT_CONTROL_REVIEW`. Submission is not approval. No Gate 3 wireframe, Gate 4 visual, Gate 5, child page, implementation, D16 access, deployment, publication or indexing is authorized.
