# DOC-TDS Gate 2 Content Skeleton V0.2

## 1. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Version / date | V0.2 / 2026-09-04 |
| Supersedes | `DOC-TDS_GATE2_CONTENT_SKELETON_V0.1.md` as the current review candidate; V0.1 remains historical |
| Gate 1 | `CONTENT_INTENT_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 2 | `GATE2_CONTENT_SKELETON / PENDING_USER_CONFIRMATION` |
| Complete Buyer Clean Copy | `NOT_STARTED` |
| Gate 3–10 | `NOT_AUTHORIZED` |
| Review purpose | Confirm the revised visible content architecture before complete Buyer Clean copy |

This document is a content-skeleton candidate. Buyer-visible candidate wording is identified explicitly; internal behavior and control language is not page copy.

## 2. Above-the-fold candidate

| Element | Proposed visible English copy / behavior |
|---|---|
| Eyebrow | `TECHNICAL DOCUMENTS` |
| H1 | `Titanium Dioxide TDS, SDS & COA: What to Request` |
| Hero support | `Choose the document types and product context your team needs for technical, safety or batch-quality review, then submit them in one request.` |
| Primary CTA | `Request TDS, SDS or COA` → `/request-documents/` |
| Secondary CTA | `View Document Hub` → `/documents/` |
| Breadcrumb | `Home` → `Documents` → `TDS, SDS & COA` |

**Internal behavior:** The primary CTA is shown only when the CONV-DOC route and action are eligible. If unavailable, remove the visible action and corresponding Schema relationship together; do not substitute Contact automatically.

## 3. Direct Answer candidate

**Visible question:** `What is the difference between a TDS, SDS and COA?`

**Proposed visible answer:**

> A TDS supports Grade-level technical evaluation, an SDS provides safety and handling information for the relevant product and market or language context, and a COA reports results for a specific lot or batch. Select one or more document types and add the product, Grade, revision, language, lot, batch or order details relevant to your review.

The Direct Answer contains no availability or delivery disclaimer. That boundary appears later in the request-process microcopy, where it is relevant to the buyer's next action.

## 4. Quick Document Choice candidate

**Visible section heading:** `Choose the Documents That Match Your Review`

| Buyer decision | Visible card label | Proposed visible guidance | Internal request mapping |
|---|---|---|---|
| Evaluate Grade-level technical information | `Technical evaluation` | `Choose a TDS and add the relevant product Grade. Include a specific revision only if your review requires one.` | TDS → `technical_product` |
| Review safety and handling information | `Safety and handling` | `Choose an SDS and add the relevant product, market or jurisdiction, and language. Include a specific revision if required.` | SDS → `safety` |
| Review lot- or batch-specific quality results | `Batch quality review` | `Choose a COA and add any available lot, batch or order reference.` | COA → `quality_coa` |
| Cover more than one document need | `Multiple document needs` | `Select one or more document types and include the relevant product or transaction context in one request.` | one or more approved document-type values |

**Internal behavior:** Cards support buyer decisions only. They are not availability badges, document listings or download actions. Actual required fields remain owned by CONV-DOC.

## 5. Proposed module order and buyer decision

| # | Major module / proposed visible heading | One-sentence purpose | Buyer decision enabled |
|---:|---|---|---|
| 1 | Breadcrumb + Hero | Establish the task, hierarchy and two approved next actions. | Request documents or return to the Hub. |
| 2 | Direct Answer | Explain the functional difference between TDS, SDS and COA before promotional content. | Identify the likely document type. |
| 3 | `Choose the Documents That Match Your Review` | Map technical, safety, batch-quality and multiple-document needs to document choices. | Select one or more document types. |
| 4 | `Add Product Grade Details to Your Request` | Help the buyer attach useful Grade context without implying a document exists for that Grade. | Identify relevant product context. |
| 5 | `Compare TDS, SDS and COA` | Combine purpose, timing, typical scope and useful request context in one concise comparison. | Validate the document choice and prepare useful context. |
| 6 | `What to Include in Your Request` | Summarize helpful product, market, language, revision and transaction details without making every item mandatory. | Decide which known details to provide. |
| 7 | `How Document Requests Work` | Explain choose → add context → submit → review and place the submission-boundary microcopy beside the process. | Understand what happens after submission. |
| 8 | `Questions Buyers Ask` | Address multi-document, Grade-context, availability and post-submission questions without repeating the Direct Answer. | Resolve remaining objections or uncertainty. |
| 9 | `Related Document Paths` | Link to REACH, origin-document and Hub paths while preserving their separate ownership. | Continue to another document task. |
| 10 | Final CTA | Repeat the two approved actions with request-boundary microcopy. | Start a request or return to the Hub. |

The former separate `What a TDS Helps You Review`, `What an SDS Helps You Review` and `What a COA Helps You Review` modules are absorbed into Module 5. They are not separate major sections in V0.2.

## 6. Grade selector and request-context contract

### 6.1 Buyer-facing content model

- Proposed visible heading: `Add Product Grade Details to Your Request`.
- The content model does not assume that every buyer request concerns only one Grade.
- One or more approved Grade identities may be relevant to a buyer's need where supported by the final CONV-DOC form contract.
- Grade identity is request context only. A selected or mentioned Grade does not mean a document exists, is current, is available or will be delivered.

### 6.2 Current authoritative transport

Current CONV-DOC Gate 7 authority defines `product_grade` as a required single selector and accepts `prefill.product_grade` as one allowlisted visible value. DOC-TDS V0.2 does not override that contract.

| Context | Current transport / behavior | Editability |
|---|---|---|
| Source page | `source_page=DOC-TDS` as a semantic alias normalized to internal `source_context.page_id` | Hidden / system-controlled / non-editable / not buyer-visible |
| Product Grade | `prefill.product_grade` with one approved Grade identity under the current CONV-DOC contract | Buyer-visible / editable / removable |
| Document types | `prefill.document_types[]`; one or more approved values | Buyer-visible / multi-select / editable / removable |
| Other request context | Fields and validation defined by CONV-DOC, including buyer-provided additional context where supported | Buyer-visible / editable according to CONV-DOC |

`prefill.product_grades[]` with `cardinality=one_or_more` is a **conditional future contract candidate**, not an active field. It may be used only after an independently approved CONV-DOC change updates the content, field, validation, receiver, analytics and handoff contracts. Until then, DOC-TDS may prefill no more than one Grade and must not present a multi-Grade selector as available functionality.

Hidden source attribution:

- cannot be edited by the buyer;
- cannot be shown in page copy, form labels, Meta content or Schema;
- cannot satisfy any required buyer field;
- cannot change document scope or applicability;
- must be ignored if unsupported or stale without breaking the buyer journey.

## 7. Comparison scope for full-copy drafting

The later full-copy comparison will retain TDS, SDS and COA columns and use these dimensions:

| Dimension | TDS | SDS | COA |
|---|---|---|---|
| Primary buyer use | Technical evaluation | Safety and handling review | Lot- or batch-specific quality review |
| When to request | When reviewing Grade-level technical information | When reviewing safety and handling information for the relevant product and market context | When reviewing results tied to a specific lot, batch or order context |
| Typical scope | Grade + revision | Product + jurisdiction/language + revision | Lot/batch/order |
| Useful request context | Product Grade; revision if relevant | Product; market/jurisdiction; language; revision if relevant | Product/Grade plus available lot, batch or order reference |

The table describes useful request context, not a mandatory buyer-evidence list. Required fields and validation remain owned by CONV-DOC.

The comparison must not add availability, currentness, universal coverage, compliance approval, conformity, release, response-time or guaranteed-delivery claims.

## 8. FAQ architecture

Visible FAQ content remains part of the page for buyer decision support, long-tail search, GEO, LLM understanding and conversion-objection handling. It will not repeat the Direct Answer question.

Questions proposed for the complete-copy stage:

1. `Can I request more than one document type?`
2. `How should I identify more than one relevant product Grade?`
3. `What information should I include in a document request?`
4. `Does selecting a Grade mean its documents are available?`
5. `What happens after I submit a request?`

FAQ answers remain `NOT_DRAFTED` in this skeleton. Question 2 is deliberately phrased around identifying context rather than claiming a multi-Grade selector exists; its later answer must follow the then-current CONV-DOC contract.

Visible FAQ content may be retained for buyer support and GEO; no `FAQPage` rich-result strategy is planned.

## 9. SEO, canonical, GEO and Schema direction

| Element | Candidate / rule |
|---|---|
| Primary keyword | `titanium dioxide tds` |
| SEO Title | `Titanium Dioxide TDS, SDS & COA: What to Request | TiO2 Malaysia` |
| Meta Description | `Understand the difference between titanium dioxide TDS, SDS and COA, add the relevant product or batch context, and request the documents needed for review.` |
| Canonical | `https://tio2malaysia.com/documents/tds-sds-coa/` as a candidate only; production activation requires later Gate authority |
| Indexing | Candidate INDEX/FOLLOW; Gate 10 and live indexing remain unauthorized |
| Language | English |
| GEO primary entity | Titanium dioxide technical, safety and batch documentation |
| GEO relationships | document type → buyer decision → useful product/transaction context → buyer-editable document request |
| Schema | `WebPage` + `BreadcrumbList` only for this direction; visible FAQ may support buyers and GEO, but no `FAQPage` rich-result strategy is planned |

The Meta Description communicates buyer value only. It does not use `requirements`, internal evidence restrictions, availability or download language.

## 10. Related-page ownership

| Page | This page may say/link | This page must not absorb |
|---|---|---|
| DOC-000 `/documents/` | Document Hub navigation and return route | Hub category ownership |
| Product pages | Approved Grade identities as request context | Grade specifications, applications or technical authority |
| DOC-REACH `/documents/reach/` | Related route for EU REACH verification | REACH scope, registration or compliance claims |
| DOC-COO `/documents/certificate-of-origin/` | Related route for origin-document verification | COO, origin, customs or duty claims |
| CONV-DOC `/request-documents/` | Document-request target and approved prefills | Form fields, validation, submission, success, failure and receiver ownership |

## 11. Restricted and conditional behavior

### 11.1 Buyer-visible request microcopy

Place this near `How Document Requests Work` and/or the Final CTA, not in the Direct Answer:

> Document requests are reviewed after submission; submission itself does not confirm availability or delivery.

### 11.2 Internal controls

- No public inventory, filenames, file previews, direct downloads, pseudo-download actions or Grade-document availability matrix.
- Do not infer SDS or COA availability from TDS evidence and do not merge multiple TDS versions.
- No availability, currentness, universal-coverage, compliance-approval, conformity, request-approval, response-time or guaranteed-delivery claim.
- Grade and document selections remain request context only and do not establish a Grade-document relationship.
- If the request route is unavailable, remove the action and corresponding Schema relation together; Contact is not an automatic fallback.
- Empty or unverified fields do not render and are not replaced by buyer-visible governance placeholders.
- Any future multi-Grade selector requires an independently approved CONV-DOC contract change before it may render or accept prefills.

### 11.3 Buyer Clean language separation

The following terms may appear in this internal contract but must not appear in H1, Hero, Direct Answer, card guidance, visible section headings, CTA labels, FAQ questions or Meta Description: `controlled request`, `route/readiness-gated`, `fail-closed`, `allowlist`, `normalized`, `source context`, `eligibility`, `Gate`, `approval state`, `Schema parity`, `Claim Register`, `evidence hold`.

## 12. Confirmation requested

The user is asked to confirm these seven revised decisions:

1. H1 and the revised Hero support line.
2. The revised two-sentence Direct Answer plus the separate request microcopy.
3. Four Quick Document Choice cards and multi-document selection.
4. The condensed ten-module narrative order.
5. The Product Grade request-context model: multi-Grade buyer need is not excluded, but current transport remains single Grade until CONV-DOC formally supports more.
6. SEO Title, revised Meta Description, Canonical and `WebPage + BreadcrumbList` Schema direction.
7. The revised five-question FAQ architecture and preserved restricted/conditional controls.

Approval means only `AUTHORIZE_COMPLETE_BUYER_CLEAN_COPY_WITHIN_GATE2`. It does not approve the future complete copy and does not authorize Gate 3, design, implementation, development, deployment, publication, DNS or indexing.

## 13. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.1 | 2026-09-04 | First Gate 2 content skeleton | `HISTORICAL / SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE` |
| V0.2 | 2026-09-04 | Removed buyer-visible `controlled request`; shortened Direct Answer and moved request disclaimer; replaced Find-by-Grade with request-context wording; removed premature content-level single-Grade assumption while preserving current CONV-DOC single-Grade authority; condensed 14 modules to 10; merged TDS/SDS/COA detail modules into comparison; softened Quick Choice inputs; corrected Meta Description; removed FAQPage rich-result strategy; removed duplicate FAQ question; retained hidden non-editable source contract and all fail-closed controls | `GATE2_CONTENT_SKELETON / PENDING_USER_CONFIRMATION` |

