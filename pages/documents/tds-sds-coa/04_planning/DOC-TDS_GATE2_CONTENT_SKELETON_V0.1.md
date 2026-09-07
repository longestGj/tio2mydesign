# DOC-TDS Gate 2 Content Skeleton V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Version / date | V0.1 / 2026-09-04 |
| Gate 1 | `CONTENT_INTENT_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 2 | `USER_AUTHORIZED / CONTENT_SKELETON_PENDING_USER_CONFIRMATION` |
| Full copy | `NOT_STARTED` |
| Gate 3–10 | `NOT_AUTHORIZED` |
| Review purpose | Confirm visible content architecture before complete Buyer Clean copy |

## 1. Above-the-fold candidate

| Element | Proposed visible English copy / behavior |
|---|---|
| Eyebrow | `TECHNICAL DOCUMENTS` |
| H1 | `Titanium Dioxide TDS, SDS & COA: What to Request` |
| Hero support | `Choose the document types and product context your team needs for technical, safety or batch-quality review, then send one controlled request.` |
| Primary CTA | `Request TDS, SDS or COA` → `/request-documents/` |
| Secondary CTA | `View Document Hub` → `/documents/` |
| Breadcrumb | `Home` → `Documents` → `TDS, SDS & COA` |

The primary CTA is route/readiness-gated. If `/request-documents/` is not eligible, the action and its Schema relationship are removed together; Contact is not substituted.

## 2. Direct Answer candidate

**Question:** `What is the difference between a TDS, SDS and COA?`

**Proposed answer:**

> Choose a TDS for Grade-specific technical information, an SDS for safety and handling information tied to the relevant product, jurisdiction, language and revision, and a COA for lot- or batch-specific quality results. You can request one or more document types and add the relevant Grade or order context for review. A request records what you need; it does not confirm that a document is available, approved or guaranteed for delivery.

This answer follows the approved Claim Register qualifiers. It is visible page copy, not a hidden Schema-only claim.

## 3. Quick Document Choice candidate

| Buyer decision | Card label | One-line guidance | Request selection |
|---|---|---|---|
| Evaluate Grade-level technical information | `Technical evaluation` | `Choose a TDS and identify the relevant Grade and revision context.` | TDS → `technical_product` |
| Review safety and handling information | `Safety and handling` | `Choose an SDS and provide the product, jurisdiction, language and revision context.` | SDS → `safety` |
| Review lot- or batch-specific quality results | `Batch quality review` | `Choose a COA and provide the available lot, batch or order context.` | COA → `quality_coa` |
| Cover more than one review need | `Multiple document needs` | `Select one or more document types and submit them in one request.` | one or more allowlisted values |

Cards are decision aids, not availability badges or download actions.

## 4. Proposed module order and buyer decision

| # | Module / candidate heading | One-sentence purpose | Buyer decision enabled |
|---:|---|---|---|
| 1 | Breadcrumb | Establish the Documents hierarchy and return paths. | Confirm location in the site. |
| 2 | Hero | State the technical-document choice task and offer the two approved routes. | Request now or return to the Hub. |
| 3 | Direct Answer | Explain the functional difference between TDS, SDS and COA before any marketing copy. | Identify the likely document type. |
| 4 | `Choose the Document That Matches Your Review` | Map technical, safety and batch-quality decisions to one or more document types. | Select one or several needs. |
| 5 | `Find Documents by Product Grade` | Let the buyer add one approved Grade identity as editable request context. | Attach the relevant Grade without assuming availability. |
| 6 | `Compare TDS, SDS and COA` | Show document purpose, controlling context and useful buyer input in one comparison. | Check whether the initial choice is appropriate. |
| 7 | `What a TDS Helps You Review` | Define the qualified Grade/revision scope. | Prepare Grade and revision context. |
| 8 | `What an SDS Helps You Review` | Define the qualified product/jurisdiction/language/revision scope. | Prepare safety-document context. |
| 9 | `What a COA Helps You Review` | Define the qualified lot/batch/order scope. | Prepare batch-quality context. |
| 10 | `What to Include in Your Request` | List the minimum useful buyer-supplied identifiers without promising fulfilment. | Gather Grade, product, market, language, lot/batch/order and requirements as applicable. |
| 11 | `How the Request Process Works` | Explain select → add context → submit → review in four concise steps. | Understand what happens after submission. |
| 12 | `Questions Buyers Ask` | Answer recurring choice and request-process questions within the Claim Register. | Resolve remaining uncertainty. |
| 13 | `Related Document Paths` | Link to DOC-REACH, DOC-COO and DOC-000 without absorbing their page ownership. | Continue to another document task. |
| 14 | Final CTA | Repeat the controlled request action after the decision content. | Start the request with context. |

## 5. Grade selector and request-context contract

- The selector may display the approved 14 Grade identities solely as request context; it does not display document availability.
- Default state: no Grade selected. Selecting a Grade passes buyer-editable `prefill.product_grade` through the approved allowlist.
- The buyer may select TDS, SDS, COA and/or Other through `prefill.document_types[]` with cardinality `one_or_more`.
- Semantic mapping: TDS → `technical_product`; SDS → `safety`; COA → `quality_coa`; Other → `other`.
- The buyer may edit or remove valid prefilled document types and Grade context before submission.
- `source_page=DOC-TDS` is normalized to internal `source_context.page_id`; it stays hidden, system-controlled and non-editable.
- Hidden source metadata cannot satisfy a required buyer field, change applicability, or appear in visible copy, metadata or Schema.

## 6. Comparison scope for full-copy drafting

The later full-copy table will use only these approved comparison dimensions:

| Dimension | TDS | SDS | COA |
|---|---|---|---|
| Primary buyer use | Technical evaluation | Safety and handling review | Lot- or batch-specific quality review |
| Controlling context | Grade + revision | Product + jurisdiction/language + revision | Lot/batch/order |
| Useful request input | Grade and requested revision context | Product, destination/jurisdiction, language and revision context | Grade/product plus lot, batch or order reference when available |

No row may claim currentness, availability, regulatory approval, conformity, release or guaranteed delivery.

## 7. FAQ architecture

Questions proposed for the full-copy stage:

1. `What is the difference between a TDS, SDS and COA?`
2. `Can I request more than one document type?`
3. `What information should I include in a document request?`
4. `Does selecting a Grade mean its documents are available?`
5. `What happens after I submit a request?`

Answers remain `NOT_DRAFTED` except for the approved-scope Direct Answer candidate in Section 2. `FAQPage` Schema remains disabled until complete visible answers and current-policy approval exist.

## 8. SEO, canonical, GEO and Schema direction

| Element | Candidate / rule |
|---|---|
| Primary keyword | `titanium dioxide tds` |
| SEO Title | `Titanium Dioxide TDS, SDS & COA: What to Request | TiO2 Malaysia` |
| Meta Description | `Compare titanium dioxide TDS, SDS and COA requirements by technical, safety and batch context, then request documents for the relevant product Grade.` |
| Canonical | `https://tio2malaysia.com/documents/tds-sds-coa/` as a candidate only; production activation requires later Gate authority |
| Indexing | Candidate INDEX/FOLLOW; Gate 10 and live indexing remain unauthorized |
| Language | English |
| GEO primary entity | Titanium dioxide technical, safety and batch documentation |
| GEO relationships | document type → buyer decision → controlling context → buyer-editable controlled request |
| Schema | `WebPage` + `BreadcrumbList`; no `FAQPage` yet; no downloadable `DigitalDocument`, Offer, certification or availability relationship |

The Meta Description communicates buyer value only. Claim restrictions remain in visible qualified copy, Claim Control and fail-closed rendering rather than being copied into the Meta Description.

## 9. Related-page ownership

| Page | This page may say/link | This page must not absorb |
|---|---|---|
| DOC-000 `/documents/` | Document Hub navigation and return route | Hub category ownership |
| Product pages | Grade identity as request context | Grade specifications, application claims or technical authority |
| DOC-REACH `/documents/reach/` | Related route for EU REACH verification | REACH scope, registration or compliance claims |
| DOC-COO `/documents/certificate-of-origin/` | Related route for origin-document verification | COO/origin/customs claims |
| CONV-DOC `/request-documents/` | Controlled request target and approved prefills | Form validation, submission, success or failure ownership |

## 10. Restricted and conditional behavior

- Do not render public inventory, filenames, file previews, direct downloads, disabled pseudo-download controls or Grade-document availability matrices.
- Do not infer an SDS or COA from local TDS presence; do not merge multiple TDS versions.
- Do not claim universal coverage, currentness, compliance, approval, response time, approval after request or guaranteed delivery.
- If a route, relationship or claim is not eligible, hide the visible element and corresponding Schema relationship together.
- Empty or unverified fields do not render and are not replaced by buyer-visible governance placeholders.
- Future long-copy and visual states must support no selection, one document, multiple documents, Grade selected, no Grade selected, long labels and route unavailable.

## 11. Confirmation requested

The user is asked to confirm these seven decisions:

1. H1 and Hero support line.
2. The three-sentence Direct Answer.
3. Four Quick Document Choice cards, including multi-select.
4. Fourteen-module narrative order.
5. Grade selector and hidden-source request contract.
6. SEO Title, buyer-value-only Meta Description, Canonical and Schema direction.
7. The five FAQ questions and fail-closed restrictions.

Approval of this skeleton authorizes preparation of the complete Buyer Clean copy within Gate 2 only. It does not approve that future copy and does not authorize Gate 3 or later stages.

## 12. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.1 | 2026-09-04 | First Gate 2 content skeleton after Gate 1 approval and Gate 2 authorization | `PENDING_USER_CONFIRMATION` |

