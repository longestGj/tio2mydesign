# CONV-RFQ Current Gate Baseline Manifest V1.2

## 0. Identity and status

| Field | Value |
|---|---|
| Page ID | `CONV-RFQ` |
| Page | Request a Quote |
| URL | `/request-a-quote/` |
| Page type | RFQ conversion page |
| Version | V1.2 |
| Review ID | `CONV-RFQ-G1-V12-REBASE-01` |
| Current gate | Gate 1 |
| Gate status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION` |
| Lifecycle | `BRIEF_IN_REVIEW` |
| Mapping / verification | `PLANNED_CONVERSION` / `QUALITATIVE_KEYWORD_EVIDENCE` |
| Gate 2 authorization | `NO / NOT_AUTHORIZED` |
| Development / release | `NO / OUT_OF_SCOPE` |

This is the only current Gate 1–5 control Manifest for CONV-RFQ. It controls authority selection while in draft; it does not claim project-control PASS or user approval.

## 1. Current authoritative payload

| Priority | File | Bytes | SHA-256 | Authority role |
|---:|---|---:|---|---|
| 1 | `pages/conversion/request-a-quote/01_research/source/REQUEST_QUOTE_PAGE_DESIGN_SPEC_V1.2_USER_INPUT.md` | 15,407 | `825E989EA777649AD06C85D6DC54654F847FAC198E639B85AC9C67B2C87CDDD6` | Exact user-supplied change-input evidence; conflicts require normalization |
| 2 | `docs/page-briefs/CONV-RFQ_REQUEST_A_QUOTE_BRIEF_V1.2.md` | 15,289 | `644EE88A8A76EF9C159A018A8FD8E3890B06FE1CE5AC3EAEF9C94B96E1072EBD` | Page Intent Card, page identity, field and ownership contract |
| 3 | `pages/conversion/request-a-quote/01_research/CONV-RFQ_GATE1_INTENT_FIELD_EVIDENCE_REBASE_V1.2.md` | 10,520 | `345380AE0EBE1841E60D0C3169F64D61B9BF613A2F5778621DD226E3C47C73A2` | Keyword, buyer, field, evidence, GEO and privacy audit |
| 4 | `pages/conversion/request-a-quote/01_research/CONV-RFQ_GATE1_V12_CHANGE_IMPACT_V1.2.md` | 6,554 | `C3E0457FCC7DFEDDF874845F32B088F6B69CB6F81A28FE6786347EFFCAE81843` | Historical Gate 2–5 disposition and rework impact |

The project-control review submission is a review wrapper generated from this payload; it does not supersede these files.

## 2. Authority and consumption order

1. Current user/project-control corrections in Review ID `CONV-RFQ-G1-V12-REBASE-01`.
2. Root `AGENTS.md` and `PAGE_GATE_1_5_STANDARD_V1.0.md`.
3. Page Registry V0.1, PRD V0.4 and `11_page_keyword_master.csv`.
4. Brief V1.2.
5. Gate 1 intent/field/evidence audit V1.2.
6. V1.2 change-impact analysis.
7. PRODUCT V0.3 and Global Chrome V0.5 for their owned boundaries.
8. Historical V0.x RFQ artifacts for traceability only.

The user-supplied file is evidence of the change request, not a standalone visual or development authority. Its internal conflicting statements are normalized by Brief V1.2 and the Gate 1 audit.

## 3. Current Gate 1–5 baseline

| Gate | Current file/asset | State |
|---|---|---|
| Gate 1 | Brief V1.2, Gate 1 audit V1.2, change impact V1.2 and this Manifest | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Gate 2 | NONE | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 3 | NONE | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 4 | NONE | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 5 | NONE | `NOT_STARTED / NOT_AUTHORIZED` |

### Current visual assets

`NONE`. No RFQ PNG, wireframe or visual specification is current under V1.2 Gate 1.

## 4. Shared Global Chrome reference

| Item | Current authority |
|---|---|
| Header/Footer specification | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` |
| Production Logo Manifest | `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` |
| Header asset key | `brand_logo_primary_horizontal` |
| Footer asset key | `brand_logo_reverse_monochrome` |
| Current navigation key | None for Conversion routes under current mapping |
| Fixed RFQ | Retained and points to `/request-a-quote/` |

CONV-RFQ does not modify or duplicate any shared Chrome asset, token, component, link order or Footer item. The separately approved future Privacy Policy/Footer change is an external project-control dependency and is not created here.

## 5. Historical and superseded assets

| Historical family | Retained path | Disposition |
|---|---|---|
| Brief V0.1 | `docs/page-briefs/CONV-RFQ_REQUEST_A_QUOTE_BRIEF_V0.1.md` | `HISTORICAL / SUPERSEDED_BY_V1.2 / NOT_CURRENT_CONTROL` |
| Gate 2 contracts V0.1 | `pages/conversion/request-a-quote/04_planning/` | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` |
| Gate 3 wireframe V0.1 | `pages/conversion/request-a-quote/04_planning/wireframes/` | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` |
| Gate 4 directions V0.1/V0.2 | `pages/conversion/request-a-quote/04_planning/visual-directions/` | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` |
| Gate 5 specs V0.1/V0.2 | `pages/conversion/request-a-quote/04_planning/visual-designs/` | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` |
| Gate 5 PNGs | `pages/conversion/request-a-quote/04_planning/visual-designs/assets/` | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT CONTROL` |
| Gate 4/5 submissions V0.x | `pages/conversion/request-a-quote/05_review/` | `HISTORICAL SUBMISSION RECORD / NOT_CURRENT_CONTROL` |

Historical files remain byte-for-byte preserved. Their old internal statuses do not override this Manifest.

## 6. User decisions and approval scope

| Date | Decision | Manifest interpretation |
|---|---|---|
| 2026-09-01 | V1.2 change direction approved for Gate 1 rebase | The new skeleton, field direction, CTA direction, concise state copy direction and Privacy external dependency may be drafted in Gate 1 |
| 2026-09-01 | Independent Privacy Policy page approved | External dependency only; no Privacy page or Footer work in CONV-RFQ |
| 2026-09-01 | Gate 1 only | No Gate 2, visual, development or release authority |

The Page Intent Card and Gate 1 package still require project-control review and user confirmation before checkpoint closure.

## 7. Open issues and dependencies

| ID | Item | Status | Gate/release effect |
|---|---|---|---|
| O01 | Project-control review | OPEN | Blocks user confirmation request |
| O02 | User confirmation of content intent | OPEN | Checkpoint remains pending |
| O03 | Privacy Policy page registration, approved copy, route and Footer governance | EXTERNAL / OPEN | Blocks Buyer Clean release; does not authorize RFQ page work |
| O04 | RFQ receiver, owner and positive-receipt semantics | OPEN | Blocks operational release |
| O05 | Sample/Documents route readiness | INDEPENDENT / OPEN | Alternative links hidden until ready |
| O06 | Unit vocabulary | GATE 2 DECISION REQUIRED | No Gate 1 blocker |
| O07 | Phone/WhatsApp validation and privacy acknowledgement mechanism | GATE 2 + PRIVACY DECISION REQUIRED | Blocks final field contract |
| O08 | SEO title/meta/canonical/robots and Schema | GATE 2 DECISION REQUIRED | No activation authorized |
| O09 | Required 1440/768/390/Mobile Menu visual evidence | FUTURE GATE 3–5 | No current visual authority |

## 8. Next action

Submit Review ID `CONV-RFQ-G1-V12-REBASE-01` to project control. Stop after submission. Do not begin Gate 2 unless a separate authorization is recorded after project-control and user decisions.
