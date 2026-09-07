# CONV-RFQ Gate 6 SEO / GEO / Schema Contract V1.0

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Review ID | `CONV-RFQ-G6-PCR-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Primary keyword | `titanium dioxide quote supplier` |
| Search intent | Transactional — quotation / purchase action |
| Evidence | `QUALITATIVE_KEYWORD_EVIDENCE`; numeric volume/KD/CPC unavailable |

## 1. Exact metadata contract

| Element | Gate 6 candidate |
|---|---|
| SEO Title | `Request a Titanium Dioxide Quote | TiO2 Malaysia` |
| Meta Description | `Request a titanium dioxide quotation from TiO2 Malaysia by providing your grade, application, quantity in metric tonnes and destination for review.` |
| H1 | `Request a Titanium Dioxide Quote` |
| Canonical candidate | `https://tio2malaysia.com/request-a-quote/` |
| Robots candidate | `index, follow` only after route/form/privacy/canonical readiness passes later gates |
| Language | `en` |
| Hreflang | none; no approved alternative language URL |
| Breadcrumb | `Home / Request a Quote` |
| Open Graph | title/description mirror approved SEO values; no image required |

The natural approved Title supersedes the early exact-match candidate. The primary keyword remains uniquely assigned to CONV-RFQ; exact phrase repetition is not required.

## 2. Cannibalization boundary

- Home owns broad Malaysia/supplier positioning.
- Markets own country/region supplier and local procurement intent.
- Products/Grade own generic product, process and model facts.
- Applications own application guidance.
- Documents and CONV-DOC own document information/request intent.
- CONV-SAMPLE owns sample-action intent.
- Resources own research, comparison, alternatives/equivalence and trade updates.
- About owns identity/manufacturing/origin trust; Contact remains a utility page.

RFQ owns the quotation/purchase-action workflow and must not add product selection advice, price pages, availability copy or general Contact intent.

## 3. Visible-source GEO answers

| Buyer question | Approved answer boundary |
|---|---|
| What information is needed? | Product/grade, application, estimated quantity in MT, destination country, company/name/business email; optional port, phone, website and non-confidential context. |
| Can the grade be unknown? | Yes. Choose `Not sure / Need help` and provide non-confidential context; the request remains for human review. |
| What does prefill mean? | Visible editable context supplied by an explicit upstream action; not a recommendation, fit or availability decision. |
| What happens after submission? | The team reviews the received details and contacts the buyer using the information supplied. |
| Is submission a quotation or approval? | No. It records receipt for review only and does not approve any commercial, supply, sample, document, order or regulatory outcome. |

These answer blocks may be extracted from visible page copy/field/state semantics. They do not authorize a new visible FAQ module or FAQPage Schema.

## 4. Schema graph

### Allowed

- `WebPage` for the registered RFQ page.
- `BreadcrumbList` matching the visible breadcrumb and real URLs.
- stable references to the existing site-wide `WebSite` and approved `Organization` nodes; do not duplicate or extend their facts.
- `dateModified` only when a real published-content modification date exists.

Required WebPage parity:

- `name` equals the approved SEO Title;
- `description` equals the approved Meta Description;
- `url` and `@id` use the clean canonical candidate;
- `inLanguage` is `en`;
- `breadcrumb` references the exact two-item BreadcrumbList.

### Prohibited

No `Product`, `Offer`, `AggregateOffer`, price, currency, availability, inventory, MOQ, shipping, delivery, Order, ContactPage, FAQPage, QAPage, HowTo, rating, review, certification, regulatory status, sample availability, document availability or grade-comparison relation.

Buyer-entered values, prefill query values, error text, success state, receiver response, internal readiness flags and release blockers never enter metadata or JSON-LD.

## 5. Canonical and query behavior

- Prefill/query URLs never create canonical variants; canonical remains the clean registered URL.
- Invalid/stale query context is discarded without metadata change or public status leakage.
- If the production route, form, privacy system or canonical equivalence is not ready, release/indexing is blocked rather than publishing a broken placeholder as an SEO workaround.
- Robots/indexing activation is a later release decision, not Gate 6 implementation.

## 6. Visible/machine parity invariant

HTML, Title/Meta, GEO answers and Schema derive from the same `site_scope=tio2-my` approved page record. A removed/restricted fact is removed atomically from every surface. No other site scope supplies a fallback value.

## 7. Freshness triggers

Re-review this contract after any change to fields/required logic, PRODUCT baseline, privacy/receiver workflow, route readiness, outcome copy, Global Chrome mapping, canonical/indexing/language or actual data-processing technology.

