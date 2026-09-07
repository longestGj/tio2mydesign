# Request Documents Page Brief V0.4 — Gate 1 Five-Type Revision

## 0. Document control

| Field | Value |
|---|---|
| Page ID | `CONV-DOC` |
| Page / URL | Request Documents / `/request-documents/` |
| Page type | Utility conversion page |
| Language | EN |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Priority | P0 |
| Review ID | `CONV-DOC-G1-V11-TYPES-01` |
| Lifecycle | `APPROVED_FOR_DESIGN` |
| Current Gate | `GATE_7_PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Status | `GATE_7_DELIVERY_BASELINE_APPROVED / DEVELOPMENT_TASK_RECEIPT_NOT_RECORDED` |
| Checkpoint | `CONTENT_INTENT_CONFIRMED / APPROVED` |
| Approval date | 2026-09-01 |
| Approval source | User confirmed the five request types, removal of independent regulatory/compliance capability, Country / Region contact-only, and authorised Gate 2 after Gate 1 review |
| Current Gate 5 Review ID | `CONV-DOC-G5-DIRECTED-REPAIR-PCR-01` |
| Gate 5 approval date | 2026-09-03 |
| Gate 5 approval source | User explicitly approved Request Documents V0.6 Gate 5 in the current project-control conversation after PCR-01 passed |
| Gate 6 Review ID | `CONV-DOC-G6-PCR-01` |
| Gate 6 authorization | User authorized Gate 6 on 2026-09-03 |
| Gate 7 authorization | Conditional: may start only after Gate 6 project-control pass; currently not started |
| Gate 6 approval | `CONV-DOC-G6-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`; 2026-09-03 |
| Gate 7 Review ID | `CONV-DOC-G7-PCR-01` |
| Gate 7 approval | `PROJECT_CONTROL_REVIEW_PASS / CLOSED`; 2026-09-03; no P0/P1 |
| Development-task receipt | `NOT_RECORDED`; do not mark `APPROVED_FOR_HANDOFF` or `HANDED_OFF` |
| Gate ceiling | Gate 1 is closed; Gate 2 requires its own current control package |

This V0.4 Brief is the approved CONV-DOC Gate 1 intent authority. It authorises Gate 2 content work only and does not authorise Gate 3–5, visual production, development or release.

## 1. Gate status ledger

| Gate | Current rebased-version status | Validation / open issue | Approval source |
|---|---|---|---|
| Gate 0 | `CONFIRMED_FOR_GATE1_ADMISSION` | Registry identity, URL, page type, keyword and priority unchanged | Existing approved project registry and current correction instruction |
| Gate 1 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` | Five-type intent, keyword, evidence, field and relationship boundaries approved | `CONV-DOC-G1-V11-TYPES-01`; user approval dated 2026-09-01 |
| Gate 2 | `V0.5 CURRENT_GATE_5_AUTHORITY / APPROVED_AS_GATE_5_INPUT` | Minimal binding successor controls Country/privacy terms; unrelated content was not reopened | PCR-01 project-control pass; V0.6 Gate 5 user approval dated 2026-09-03 |
| Gate 3 | `V0.6 CURRENT_GATE_5_AUTHORITY / APPROVED_AS_GATE_5_INPUT` | Minimal binding successor controls responsive terminal order | PCR-01 project-control pass; V0.6 Gate 5 user approval dated 2026-09-03 |
| Gate 4 | `V0.5 CURRENT_GATE_5_AUTHORITY / APPROVED_AS_GATE_5_INPUT` | Visual direction embodied in approved V0.6 assets | V0.6 Gate 5 user approval dated 2026-09-03 |
| Gate 5 | `APPROVED / CLOSED` | V0.6 Desktop, Tablet, Mobile, Mobile Menu and Interaction States form the active approved baseline | PCR-01 `PROJECT_CONTROL_REVIEW_PASS / CLOSED`; current user explicit decision dated 2026-09-03 |
| Gate 6 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` | Total-control audit passed with no P0/P1 return; no Gate 5 content or asset reopened | Project-control decision dated 2026-09-03 under `CONV-DOC-G6-PCR-01` |
| Gate 7 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` | `CONV-DOC-G7-HANDOFF-01` is the sole Gate 8 development baseline; development-task receipt not recorded | Project-control decision dated 2026-09-03 under `CONV-DOC-G7-PCR-01` |
| Gate 6+ | `NOT_AUTHORIZED` | Out of current scope | None |

## 2. Page Intent Card — approved

| Intent field | Gate 1 proposed contract |
|---|---|
| Audience | B2B technical, quality, procurement, regulatory and supplier-qualification contacts who need to submit a controlled document request for a published Product Grade |
| Buyer problem | Provide enough non-confidential context for a human reviewer without being misled that a document is public, available, approved, applicable or immediately deliverable |
| Core message | Submit minimum contact, Product Grade and document-category context; successful submission records receipt for human review and later Business Email follow-up only |
| Must include | Eight minimum fields; five confirmed Document Types; selector for all 14 published Grades; editable prefill; human-review, validation, failure, success and privacy boundaries |
| Must exclude | Brand story, product education, market content, Market/Destination request logic, public download, file inventory, SLA, approval/availability promise, RFQ fields and immediate success-to-RFQ push |
| Primary CTA | `Request Documents` |
| Secondary CTA | None in the active form; `View Products` is the V1.1 success-state candidate only |
| Ownership boundary | Products, Applications and Document Hub may pass editable context. Document pages own information intent; Markets own market content; CONV-RFQ owns commercial enquiry fields |

Checkpoint is `CONTENT_INTENT_CONFIRMED / APPROVED`.

## 3. Minimum data contract

| Group | Field | Requirement | Gate 1 boundary |
|---|---|---|---|
| Your Details | Full Name | Required | Minimum contact identity |
| Your Details | Company | Required | Supplier/buyer business context |
| Your Details | Business Email | Required | Follow-up address; personal-domain advice may not hard block |
| Your Details | Country / Region | Required | Contact/company location only; never a document-version, applicability or scope input |
| Request Details | Product Grade | Required | All 14 published Grades; prefilled values remain editable |
| Request Details | Document Types | Required | Multi-select; at least one of five groups |
| Request Details | Application / Industry | Recommended | Optional context; no product or document inference |
| Request Details | Additional Requirements | Optional | Approximately 500 characters; non-confidential context only |

The page must not collect Annual Volume, Target Price, Expected Order Quantity, Purchase Timeline, WhatsApp or Existing Supplier.

## 4. Document Types

1. Technical Data & Product Documentation
2. Safety Documentation
3. Quality & COA Documentation
4. Origin & Supplier Qualification Documentation
5. Other Documentation

The five labels identify request categories only. They do not establish an inventory, availability, approval, certification, current version, applicability, release, delivery or public-download right.

`Other Documentation` is a neutral catch-all for buyer-entered needs. It is not a proxy for, or evidence of, an independent regulatory/compliance document capability. The system must not predefine that capability through option labels, parameters, analytics values or request claims.

## 5. Prefill boundary

- Product page → Product Grade.
- Application page → Application / Industry.
- Document Hub Product Selector → selected Product Grade.
- Supported URL parameters are prefill conveniences only and must remain editable/removable.
- Empty prefill shows no empty shell. Unsupported values fail closed without negative suitability language.
- No market or destination value may prefill, filter, allocate or select a document.

Product V0.3 permits neutral M-2377 request context with Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate. Specialty Materials remains `DO_NOT_RENDER`; Rubber remains evidence-only; `NO_PUBLIC_MAPPING` cannot be rewritten as not applicable. M-996/M-2196 comparison, ranking, equivalence, substitution and advantage remain frozen.

## 6. Submission and privacy boundary

Candidate success heading: `Document Request Received`.

Candidate success body: `Thank you. Our team will review your request and follow up using the business email you provided.`

Receipt is not approval or delivery. No response SLA is shown. Failure must not claim receipt; it preserves entered data and provides retry without inventing an unverified contact channel. Exact privacy wording, controller, purpose, retention rule, rights wording, privacy channel and operational receiver remain evidence-gated for later Gates.

## 7. Keyword and ownership boundary

- `NO_PRIMARY_KEYWORD` remains fixed.
- Transactional utility intent only; no attempt to rank for informational document terms.
- Document information pages own TDS/SDS/COA/origin education.
- Markets own market-specific content. Country / Region in this form has no search or document-routing meaning.
- Request Documents is not added to first-level navigation.
- Global Chrome is not modified; permanent RFQ remains shared and separate from the page-primary action.

## 8. Evidence and frozen controls

| Control | Gate 1 status | Consequence |
|---|---|---|
| V1.1 field and document-group direction | `USER_DIRECTED_INPUT / UNDER_GATE1_REVIEW` | May define the proposed intent; not a Gate 2 copy approval |
| Keyword-master targeted CONV-DOC row | `AUTHORIZED_CHANGE_RETAINED` | Current row is evidence for intent boundary |
| 14 Product Grades | `PRODUCT_MASTER_BOUNDARY` | Selector concept allowed; no document inventory inference |
| Document inventory/version/applicability/release | `NOT_ESTABLISHED / FROZEN` | Do not promise or publish |
| Compliance/certification status | `NOT_ESTABLISHED / FROZEN` | Do not infer |
| Independent regulatory/compliance document capability | `NOT_ESTABLISHED / DO_NOT_RENDER` | No public option, category, preset, analytics value or request claim |
| Privacy copy and channel | `EVIDENCE_REQUIRED / FROZEN` | Later buyer-clean work blocked |
| Operational receiver/SLA | `EVIDENCE_REQUIRED / FROZEN` | No delivery or response-time claim |

## 9. Historical overreach boundary

The V0.2 Brief, Gate 2–5 documents, five V0.2 PNGs, V0.2 Gate 1–5 Manifest and V0.2 Gate 5 review submission are:

`OUT_OF_SCOPE_DRAFT / NOT_CURRENT_CONTROL / NOT_APPROVED / PRESERVED_FOR_PROVENANCE`.

They are excluded from the current authority and consumption order. Gate 2–5 for the rebased version remain `NOT_STARTED_FOR_REBASED_VERSION`.

## 10. Gate 1 closure record

`CONV-DOC-G1-V11-TYPES-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`. The Gate 1 checkpoint remains `CONTENT_INTENT_CONFIRMED / APPROVED`.

`CONV-DOC-G5-DIRECTED-REPAIR-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`. Request Documents V0.6 Gate 5 is `APPROVED / CLOSED` by the user's explicit decision dated 2026-09-03. That Gate 5 decision did not by itself authorize later stages.

Gate 6 is `PROJECT_CONTROL_REVIEW_PASS / CLOSED` under `CONV-DOC-G6-PCR-01`. Gate 7 is `PROJECT_CONTROL_REVIEW_PASS / CLOSED` under `CONV-DOC-G7-PCR-01`, and `CONV-DOC-G7-HANDOFF-01` is the sole approved development-delivery baseline. No development-task receipt exists, so lifecycle is not `APPROVED_FOR_HANDOFF` or `HANDED_OFF`; Gate 8, development, deployment, publication and indexing remain unauthorized.

## 11. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.3 | 2026-09-01 | Initial Gate 1 targeted V1.1 rebaseline with a superseded provisional type set | `HISTORICAL / SUPERSEDED_BY_FIVE_TYPE_REVISION` |
| V0.4 | 2026-09-01 | Removed the unconfirmed independent regulatory/compliance category; established five types and `NOT_ESTABLISHED / DO_NOT_RENDER`; closed Gate 1 after project-control and user approval | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| V0.4 Gate 5 status overlay | 2026-09-03 | Synchronized the approved V0.6 Gate 5 baseline without changing the approved Gate 1 content contract | `APPROVED_GATE_5_BASELINE / ACTIVE` |
| V0.4 Gate 6 status overlay | 2026-09-03 | Recorded Gate 6 authorization/review and conditional post-pass Gate 7 authorization | `GATE_6_DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| V0.4 Gate 7 status overlay | 2026-09-03 | Recorded Gate 6 pass/closure and activated authorized Gate 7 specification review | `GATE_7_DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| V0.4 Gate 7 closure overlay | 2026-09-03 | Recorded Gate 7 pass/closure and sole development-delivery baseline; receipt remains open | `GATE_7_PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
