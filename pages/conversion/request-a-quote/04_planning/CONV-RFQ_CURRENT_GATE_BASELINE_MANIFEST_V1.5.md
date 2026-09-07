# CONV-RFQ Current Gate Baseline Manifest V1.5

## 0. Identity and status

| Field | Value |
|---|---|
| Page ID | `CONV-RFQ` |
| Page | Request a Quote |
| URL | `/request-a-quote/` |
| Page type | RFQ conversion page |
| Version | V1.5 |
| Directed review | `CONV-RFQ-G2-SKELETON-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Parent review | `CONV-RFQ-G2-SKELETON-01 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_CONFIRMATION` |
| Current gate | Gate 2 — content-skeleton checkpoint |
| Gate status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_CONFIRMATION` |
| Checkpoint | `CONTENT_SKELETON_PENDING_USER_CONFIRMATION` |
| User confirmation | `OPEN / NOT_RECORDED` |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Mapping / verification | `PLANNED_CONVERSION` / `QUALITATIVE_KEYWORD_EVIDENCE` |
| Gate 2 authorization | `YES / USER_AUTHORIZED_2026-09-01` |
| Gate 3 / development / release | `NOT_AUTHORIZED / OUT_OF_SCOPE` |

This is the only current Gate 1–5 control Manifest for CONV-RFQ. Gate 1 remains `APPROVED / CLOSED`. Project control has passed the Gate 2 skeleton, but the user has not yet confirmed it. Complete Gate 2 copy and Gate 3 remain blocked.

## 1. Current authoritative payload

| Priority | File | Bytes | SHA-256 | Authority role |
|---:|---|---:|---|---|
| 1 | `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE2_SKELETON_PROJECT_CONTROL_CLOSURE_V1.0.md` | 4,422 | `2735336AE5F4057D841D0C707554B66343C2547558441E0E6EFC3DC99D85795E` | Project-control PASS and current pending-user-confirmation disposition |
| 2 | `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_CONTENT_SKELETON_V1.1.md` | 15,535 | `016E8241AAF4A3C31ED0C8D52504E52AD64D60BA6CAA1173029A548F8B844DEE` | Reviewed Gate 2 content skeleton; exact Hero and fixed MT suffix |
| 3 | `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_SEO_GEO_SCHEMA_DIRECTION_V1.1.md` | 8,256 | `43582BD39200D12CD2E27F232737F4C5BA6197C544C22AC103823D5AFF5D08F2` | Reviewed SEO Title/Meta and GEO/Schema direction |
| 4 | `docs/page-briefs/CONV-RFQ_REQUEST_A_QUOTE_BRIEF_V1.2.2.md` | 16,624 | `D0EB8C435616B5EE5DEC43F573D4F0C792421284F836E2D8B6DF4EFEF4A0722F` | Approved Gate 1 page contract |
| 5 | `pages/conversion/request-a-quote/01_research/CONV-RFQ_GATE1_INTENT_FIELD_EVIDENCE_REBASE_V1.2.2.md` | 12,293 | `22F6228DB5589A3A6587A813CE464FB05FB8363B799101E85F52FF7403F7087D` | Approved Gate 1 evidence and relationship audit |
| 6 | `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE1_PROJECT_CONTROL_REVIEW_SUBMISSION_V1.2.2.md` | 7,091 | `1E5650103A0579B84C96E4E52121CAF45B137E420C07C2F2C054577E697137D1` | Gate 1 approval and user-confirmed closure |
| 7 | `pages/conversion/request-a-quote/01_research/source/REQUEST_QUOTE_PAGE_DESIGN_SPEC_V1.2_USER_INPUT.md` | 15,407 | `825E989EA777649AD06C85D6DC54654F847FAC198E639B85AC9C67B2C87CDDD6` | Exact user-input evidence; current normalization controls conflicts |

The V1.1 review submission is retained as a traceability wrapper. The closure record controls its disposition without rewriting the reviewed payload.

## 2. Current Gate 1–5 baseline

| Gate | Current file/asset | State |
|---|---|---|
| Gate 1 | Brief V1.2.2, Audit V1.2.2 and closure record V1.2.2 | `APPROVED / CLOSED` |
| Gate 2 | Skeleton V1.1, SEO/GEO/Schema V1.1, project-control closure V1.0 and this Manifest | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_CONFIRMATION / SKELETON_CHECKPOINT` |
| Gate 3 | NONE | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 4 | NONE | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 5 | NONE | `NOT_STARTED / NOT_AUTHORIZED` |

Current visual assets: `NONE`. No current RFQ wireframe, visual direction or complete visual exists.

## 3. Approved skeleton contract pending user confirmation

- Page order: shared Header → Breadcrumb → Hero → one RFQ Form → Alternative Requests → shared Footer.
- H1: `Request a Titanium Dioxide Quote`.
- Exact Hero: `Tell us the grade you need—or choose “Not sure / Need help”—then provide your application, required quantity in metric tonnes and destination. Our team will review the submitted details and contact you using the information provided.`
- SEO Title: `Request a Titanium Dioxide Quote | TiO2 Malaysia`.
- Meta Description: `Request a titanium dioxide quotation from TiO2 Malaysia by providing your grade, application, quantity in metric tonnes and destination for review.`
- Quantity: `Required Quantity [input] + Metric tonnes (MT) [fixed suffix]`; no separate Unit control and no kg/Other.
- Form: three groups, one Grade selector, approved minimum required/optional information, exact validation/focus/error/failure/success/privacy contracts.
- Layout boundary: one Desktop page flow with only a form-internal two-column Grid; Tablet and Mobile single-column.
- Links: low-weight Sample/Documents task switches; no Contact fallback.
- Evidence: PRODUCT V0.3 only; no comparison, suitability, availability, commercial, logistics, regulatory or approval promise.
- Global Chrome: V0.5 remains shared and all RFQ links remain visible at `/request-a-quote/`.
- Schema: `WebPage` + `BreadcrumbList` only, with stable site references and visible/machine parity.

## 4. Shared dependencies and release boundary

| Item | Current treatment |
|---|---|
| Global Chrome | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`; no page-level fork |
| Privacy/legal/cookie routes | Included in the final target; parallel delivery and Gate 7–9 verification |
| Request a Sample / Request Documents | Retained as low-weight final links; later route verification |
| RFQ receiver and workflow owner | Not verified; operational release blocker |
| Route/form readiness | Not tested; unavailability is a release blocker, never a reason to hide or disable Buyer Clean RFQ |
| Canonical/robots/Schema activation | Not authorized by Gate 2 planning |

## 5. Historical control manifests

| File | Bytes | SHA-256 | Disposition |
|---|---:|---|---|
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V1.4.md` | 13,363 | `C1E8A1194F322B394E82CCD5D22C89504FE84C49E3BF91CDAA26748D309A305D` | `HISTORICAL SUBMISSION-TIME MANIFEST / SUPERSEDED_BY_V1.5` |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V1.3.md` | 11,996 | `72B89CAA6507CC120DF88FDC0593B2628D91BD5A77DF45646A031B47AA695D07` | `HISTORICAL / SUPERSEDED_BY_V1.4` |
| `pages/conversion/request-a-quote/01_research/CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V1.2.2.md` | 9,973 | `20A4240AFBBA03E6398E769B6AA3D394F18373A6C9EF69BD43924B9AC6E8890E` | `HISTORICAL / SUPERSEDED_BY_V1.3`; Gate 1 approval remains inherited |

All earlier V1.2.1, V1.2 and V0.x files retain the dispositions and hashes recorded in V1.4. No historical artifact is rewritten or deleted.

## 6. Open issues and next action

| ID | Item | Status | Effect |
|---|---|---|---|
| O02A | Gate 2 skeleton project-control review | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` | No longer blocks user presentation |
| O02B | User confirmation of Hero, metadata, page order, fields and states | `OPEN / NOT_RECORDED` | Blocks complete Gate 2 copy |
| O03 | Privacy/legal/cookie shared delivery | `PARALLEL / OPEN` | Later release dependency |
| O04 | RFQ receiver and positive-receipt semantics | `OPEN` | Operational release blocker |
| O05 | Sample/Documents route functionality | `PARALLEL / OPEN` | Verify Gate 7–9 |
| O06 | Metadata/Schema activation | `NOT_AUTHORIZED` | Planning only |
| O07 | 1440/768/390/Mobile Menu evidence | `FUTURE GATE 3–5` | Not started |

Next action: project control presents the reviewed skeleton to the user and records an explicit decision. Stop at `CONTENT_SKELETON_PENDING_USER_CONFIRMATION`; do not complete full Gate 2 copy or begin Gate 3.
