# CONV-RFQ Current Gate Baseline Manifest V1.2.1

## 0. Identity and status

| Field | Value |
|---|---|
| Page ID | `CONV-RFQ` |
| Page | Request a Quote |
| URL | `/request-a-quote/` |
| Page type | RFQ conversion page |
| Version | V1.2.1 |
| Review ID | `CONV-RFQ-G1-V12-DIRECTED-02` |
| Current gate | Gate 1 |
| Gate status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION` |
| Lifecycle | `BRIEF_IN_REVIEW` |
| Mapping / verification | `PLANNED_CONVERSION` / `QUALITATIVE_KEYWORD_EVIDENCE` |
| Gate 2 authorization | `NO / NOT_AUTHORIZED` |
| Development / release | `NO / OUT_OF_SCOPE` |

This is the only current Gate 1–5 control Manifest for CONV-RFQ. It controls authority selection while in draft; it is not project-control PASS or user approval.

## 1. Current authoritative payload

| Priority | File | Bytes | SHA-256 | Authority role |
|---:|---|---:|---|---|
| 1 | `pages/conversion/request-a-quote/01_research/source/REQUEST_QUOTE_PAGE_DESIGN_SPEC_V1.2_USER_INPUT.md` | 15,407 | `825E989EA777649AD06C85D6DC54654F847FAC198E639B85AC9C67B2C87CDDD6` | Exact user-input evidence; conflicts require current normalization |
| 2 | `docs/page-briefs/CONV-RFQ_REQUEST_A_QUOTE_BRIEF_V1.2.1.md` | 15,855 | `14C761743C9A493755448023C784D02E1B4A17389C95FE2F03A6CFA3DFEDFC46` | Page Intent Card, page identity, field, state, responsive and dependency contract |
| 3 | `pages/conversion/request-a-quote/01_research/CONV-RFQ_GATE1_INTENT_FIELD_EVIDENCE_REBASE_V1.2.1.md` | 11,764 | `20C2387F60C36B318767E3A6911B68CB94C6BD30B09F5C3E2B42DDEBE1914BCC` | Keyword, buyer, field, evidence, interaction and privacy audit |
| 4 | `pages/conversion/request-a-quote/01_research/CONV-RFQ_GATE1_V12_CHANGE_IMPACT_V1.2.1.md` | 7,379 | `1CD045DF76852044E7E64BC533EA5145175951880CE0AC82F5EC4E48C965EF92` | V1.2/V0.x disposition and rework impact |

The project-control review submission is a wrapper generated from this payload and does not supersede it.

## 2. Authority and consumption order

1. Directed corrections in Review ID `CONV-RFQ-G1-V12-DIRECTED-02`.
2. Root `AGENTS.md`, including §2.4, and `PAGE_GATE_1_5_STANDARD_V1.0.md`.
3. Page Registry V0.1, PRD V0.4 and `11_page_keyword_master.csv`.
4. Brief V1.2.1.
5. Gate 1 intent/field/evidence audit V1.2.1.
6. V1.2.1 change-impact analysis.
7. PRODUCT V0.3 and Global Chrome V0.5 within their owned boundaries.
8. Historical V1.2 and V0.x artifacts for traceability only.

## 3. Current Gate 1–5 baseline

| Gate | Current file/asset | State |
|---|---|---|
| Gate 1 | Brief V1.2.1, Gate 1 audit V1.2.1, change impact V1.2.1 and this Manifest | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Gate 2 | NONE | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 3 | NONE | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 4 | NONE | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 5 | NONE | `NOT_STARTED / NOT_AUTHORIZED` |

Current visual assets: `NONE`. No RFQ PNG, wireframe or visual specification is current.

## 4. Shared Global Chrome and complete-site dependency reference

| Item | Current authority / treatment |
|---|---|
| Header/Footer specification | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` |
| Header asset | `brand_logo_primary_horizontal` |
| Footer asset | `brand_logo_reverse_monochrome` |
| Current navigation key | None for Conversion routes under current mapping |
| Fixed RFQ Global Chrome | Desktop Header, Mobile Header, Mobile Menu and Desktop/Mobile Footer retain Request a Quote → `/request-a-quote/` |
| Privacy Policy | Final RFQ notice includes the visible link; route owned in parallel and verified Gate 7–9 |
| Terms of Use / Cookie Policy / Cookie Settings | Whole-site parallel shared dependencies; remain part of the final shared experience where applicable |
| Request a Sample / Request Documents | Low-weight final-state links; route functionality verified Gate 7–9 |

CONV-RFQ does not modify shared Chrome, create legal/conversion routes, or implement Footer/cookie controls. Unavailable required dependencies at Gate 7–9 block release; they do not remove these elements from the Gate 1–5 target or create buyer-visible internal status labels.

## 5. Historical and superseded assets

### V1.2 files preserved byte-for-byte

| File | Bytes | SHA-256 | Disposition |
|---|---:|---|---|
| `docs/page-briefs/CONV-RFQ_REQUEST_A_QUOTE_BRIEF_V1.2.md` | 15,289 | `644EE88A8A76EF9C159A018A8FD8E3890B06FE1CE5AC3EAEF9C94B96E1072EBD` | `HISTORICAL / SUPERSEDED_BY_V1.2.1 / NOT_CURRENT_CONTROL` |
| `pages/conversion/request-a-quote/01_research/CONV-RFQ_GATE1_INTENT_FIELD_EVIDENCE_REBASE_V1.2.md` | 10,520 | `345380AE0EBE1841E60D0C3169F64D61B9BF613A2F5778621DD226E3C47C73A2` | `HISTORICAL / SUPERSEDED_BY_V1.2.1 / NOT_CURRENT_CONTROL` |
| `pages/conversion/request-a-quote/01_research/CONV-RFQ_GATE1_V12_CHANGE_IMPACT_V1.2.md` | 6,554 | `C3E0457FCC7DFEDDF874845F32B088F6B69CB6F81A28FE6786347EFFCAE81843` | `HISTORICAL / SUPERSEDED_BY_V1.2.1 / NOT_CURRENT_CONTROL` |
| `pages/conversion/request-a-quote/01_research/CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V1.2.md` | 7,092 | `78A8F964BD2EC6A80F758C4B56036BF10E39CA4D693D77F0716EA02943537186` | `HISTORICAL / SUPERSEDED_BY_V1.2.1 / NOT_CURRENT_CONTROL` |
| `pages/conversion/request-a-quote/01_research/CONV-RFQ_GATE1_PROJECT_CONTROL_REVIEW_SUBMISSION_V1.2.md` | 6,037 | `41C525BD24F67A07213AD4472CED25FD819AE56CDECCD843A74D7833175C26C0` | `HISTORICAL / SUPERSEDED_BY_V1.2.1 / NOT_CURRENT_CONTROL` |

### Earlier families

| Historical family | Retained path | Disposition |
|---|---|---|
| Brief V0.1 | `docs/page-briefs/CONV-RFQ_REQUEST_A_QUOTE_BRIEF_V0.1.md` | `HISTORICAL / SUPERSEDED / NOT_CURRENT_CONTROL` |
| Gate 2 contracts V0.1 | `pages/conversion/request-a-quote/04_planning/` | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` |
| Gate 3 wireframe V0.1 | `pages/conversion/request-a-quote/04_planning/wireframes/` | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` |
| Gate 4 directions V0.1/V0.2 | `pages/conversion/request-a-quote/04_planning/visual-directions/` | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` |
| Gate 5 specs and PNGs V0.x | `pages/conversion/request-a-quote/04_planning/visual-designs/` | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` |
| Gate 4/5 submissions V0.x | `pages/conversion/request-a-quote/05_review/` | `HISTORICAL SUBMISSION RECORD / NOT_CURRENT_CONTROL` |

## 6. Directed decisions and approval scope

| Date | Decision | Manifest interpretation |
|---|---|---|
| 2026-09-01 | PC/Desktop left-right layout rejected | 1440, 768 and 390 use one vertical form order |
| 2026-09-01 | Quantity unit fixed | Only `Metric tonnes (MT)` is public |
| 2026-09-01 | Phone treatment fixed | `Phone / WhatsApp (optional)`; no helper copy and no consent checkbox |
| 2026-09-01 | Success/failure/privacy wording fixed | Exact V1.2.1 copy contract recorded in Brief and audit |
| 2026-09-01 | Complete final-state dependencies retained | Privacy/legal/cookie and Sample/Documents links are not omitted from Gate 1–5; verify Gate 7–9 |
| 2026-09-01 | Gate 1 only | No Gate 2, visual, implementation, development or release authority |

The package still requires project-control review and user confirmation before checkpoint closure.

## 7. Open issues and dependencies

| ID | Item | Status | Gate/release effect |
|---|---|---|---|
| O01 | Project-control review | OPEN | Blocks user-confirmation request |
| O02 | User confirmation of content intent | OPEN | Checkpoint remains pending |
| O03 | Privacy Policy, Terms of Use, Cookie Policy, Cookie Settings and shared Footer delivery | PARALLEL / OPEN | Verify Gate 7–9; blocks release if unavailable |
| O04 | RFQ receiver, owner and positive-receipt semantics | OPEN | Blocks operational release |
| O05 | Request a Sample and Request Documents route functionality | PARALLEL / OPEN | Included in later visuals; verify Gate 7–9 |
| O06 | SEO title/meta/canonical/robots and Schema | GATE 2 DECISION REQUIRED | No activation authorized |
| O07 | Required 1440/768/390/Mobile Menu visual evidence | FUTURE GATE 3–5 | Must follow single-column direction when authorized |

Quantity unit and phone checkbox/helper questions are no longer open.

## 8. Next action

Submit Review ID `CONV-RFQ-G1-V12-DIRECTED-02` to project control and stop. Do not begin Gate 2 without separate authorization after project-control and user decisions.
