# Request Documents Page Brief V0.3 — Gate 1 Targeted Rebaseline

## 0. Document control

| Field | Value |
|---|---|
| Page ID | `CONV-DOC` |
| Page / URL | Request Documents / `/request-documents/` |
| Page type | Utility conversion page |
| Language | EN |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Priority | P0 |
| Review ID | `CONV-DOC-G1-V11-PCR-01` |
| Lifecycle | `BRIEF_IN_REVIEW` |
| Current Gate | `GATE_1_TARGETED_REBASELINE_ONLY` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION` |
| Gate ceiling | Gate 1 only; stop at project-control review |

This V0.3 Brief is the current CONV-DOC control document. It does not approve content intent and does not authorise Gate 2–5, visual production, development or release.

## 1. Gate status ledger

| Gate | Current rebased-version status | Validation / open issue | Approval source |
|---|---|---|---|
| Gate 0 | `CONFIRMED_FOR_GATE1_ADMISSION` | Registry identity, URL, page type, keyword and priority unchanged | Existing approved project registry and current correction instruction |
| Gate 1 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` | Intent, keyword, evidence, field and relationship boundaries audited; user confirmation still pending | `CONV-DOC-G1-V11-PCR-01` |
| Gate 2 | `NOT_STARTED_FOR_REBASED_VERSION` | Requires completed Gate 1 review and user confirmation | None |
| Gate 3 | `NOT_STARTED_FOR_REBASED_VERSION` | No current wireframe authority | None |
| Gate 4 | `NOT_STARTED_FOR_REBASED_VERSION` | No current visual-direction authority | None |
| Gate 5 | `NOT_STARTED_FOR_REBASED_VERSION` | No current complete-visual authority | None |
| Gate 6+ | `NOT_AUTHORIZED` | Out of current scope | None |

## 2. Page Intent Card — pending confirmation

| Intent field | Gate 1 proposed contract |
|---|---|
| Audience | B2B technical, quality, procurement, regulatory and supplier-qualification contacts who need to submit a controlled document request for a published Product Grade |
| Buyer problem | Provide enough non-confidential context for a human reviewer without being misled that a document is public, available, approved, applicable or immediately deliverable |
| Core message | Submit minimum contact, Product Grade and document-category context; successful submission records receipt for human review and later Business Email follow-up only |
| Must include | Eight minimum fields; six V1.1 Document Types; selector for all 14 published Grades; editable prefill; human-review, validation, failure, success and privacy boundaries |
| Must exclude | Brand story, product education, market content, Market/Destination request logic, public download, file inventory, SLA, approval/availability promise, RFQ fields and immediate success-to-RFQ push |
| Primary CTA | `Request Documents` |
| Secondary CTA | None in the active form; `View Products` is the V1.1 success-state candidate only |
| Ownership boundary | Products, Applications and Document Hub may pass editable context. Document pages own information intent; Markets own market content; CONV-RFQ owns commercial enquiry fields |

Checkpoint remains `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION`; this Card is not yet `CONTENT_INTENT_CONFIRMED`.

## 3. Minimum data contract

| Group | Field | Requirement | Gate 1 boundary |
|---|---|---|---|
| Your Details | Full Name | Required | Minimum contact identity |
| Your Details | Company | Required | Supplier/buyer business context |
| Your Details | Business Email | Required | Follow-up address; personal-domain advice may not hard block |
| Your Details | Country / Region | Required | Contact/company location only; never a document-version, applicability or scope input |
| Request Details | Product Grade | Required | All 14 published Grades; prefilled values remain editable |
| Request Details | Document Types | Required | Multi-select; at least one of six groups |
| Request Details | Application / Industry | Recommended | Optional context; no product or document inference |
| Request Details | Additional Requirements | Optional | Approximately 500 characters; non-confidential context only |

The page must not collect Annual Volume, Target Price, Expected Order Quantity, Purchase Timeline, WhatsApp or Existing Supplier.

## 4. Document Types

1. Technical Data & Product Documentation
2. Safety Documentation
3. Quality & COA Documentation
4. Regulatory & Compliance Documentation
5. Origin & Supplier Qualification Documentation
6. Other Documentation

The six labels identify request categories only. They do not establish an inventory, availability, approval, certification, current version, applicability, release, delivery or public-download right.

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
| Privacy copy and channel | `EVIDENCE_REQUIRED / FROZEN` | Later buyer-clean work blocked |
| Operational receiver/SLA | `EVIDENCE_REQUIRED / FROZEN` | No delivery or response-time claim |

## 9. Historical overreach boundary

The V0.2 Brief, Gate 2–5 documents, five V0.2 PNGs, V0.2 Gate 1–5 Manifest and V0.2 Gate 5 review submission are:

`OUT_OF_SCOPE_DRAFT / NOT_CURRENT_CONTROL / NOT_APPROVED / PRESERVED_FOR_PROVENANCE`.

They are excluded from the current authority and consumption order. Gate 2–5 for the rebased version remain `NOT_STARTED_FOR_REBASED_VERSION`.

## 10. Gate 1 stopping condition

This task stops at `DRAFT_FOR_PROJECT_CONTROL_REVIEW` with checkpoint `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION`. Project control may request correction or move the package to user confirmation; this page task may not self-declare pass, approval or closure.
