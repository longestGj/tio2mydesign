# CONV-DOC Gate 6 SEO / GEO / Schema Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Review ID | `CONV-DOC-G6-PCR-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Search role | Utility conversion workflow; no acquisition keyword ownership |

## 1. Exact candidate metadata

| Element | Gate 6 contract |
|---|---|
| SEO Title | `Request Documents | TiO2 Malaysia` |
| Meta Description | `Submit a controlled request for titanium dioxide product, safety, quality, COA, origin or supplier-qualification documentation for human review.` |
| H1 | `Request Documents` |
| Canonical | `https://tio2malaysia.com/request-documents/` |
| Robots | `noindex, follow` candidate; final activation belongs to Gate 10 |
| Language | `en` |
| Hreflang | None; no approved alternate-language route |
| Breadcrumb | `Home / Request Documents` |
| Open Graph | Title and description mirror the approved utility metadata; no separate claim or image required |

Prefill/query variants never create alternate canonicals or metadata. Invalid values are discarded without changing the Title, Meta, Schema or public status.

## 2. Cannibalization boundary

- Documents Hub and document information pages own informational TDS, SDS, COA, COO/origin, REACH and traceability intent.
- Products and Grade pages own product/model intent.
- Applications own application guidance.
- Markets own market-specific procurement content.
- RFQ owns quotation intent; Sample owns sample-request intent.
- Request Documents owns only the controlled request action and must not become a public download catalogue or commercial supplier landing page.

No commercial primary keyword is introduced.

## 3. GEO answer boundaries

| Buyer question | Approved answer boundary |
|---|---|
| What is Request Documents? | A controlled form for submitting one Product Grade and document-category request for human review. |
| What information is required? | Full Name, Company, Business Email, Country / Region, Product Grade and at least one Document Type; application is optional and request context is conditional for Other-only. |
| What happens after submission? | The team reviews the received details and may contact the supplied business email if clarification is needed. |
| Does submission approve or deliver a document? | No. It records receipt only; availability and applicable scope are confirmed during human review. |
| What does prefill mean? | Visible, editable context from a supported upstream action; not a suitability, availability or applicability decision. |

These answers may be derived from visible content but do not authorize a separate FAQ module or `FAQPage` Schema.

## 4. Schema graph

Allowed page-level nodes:

- `WebPage` using the clean canonical URL and `inLanguage: en`;
- `BreadcrumbList` matching the visible Home/current-page breadcrumb;
- references to existing approved site-wide `WebSite` and `Organization` nodes without duplicating or extending their facts.

Prohibited nodes/properties include `Product`, `Offer`, price, availability, inventory, download action, certification, regulatory status, shipping, order, rating, review, `FAQPage`, `QAPage` and `HowTo`.

Buyer-entered values, source parameters, document selections, validation errors, receiver responses, readiness flags and internal evidence statuses never enter metadata or JSON-LD.

## 5. Scope isolation and freshness

Visible content, Title/Meta, canonical, robots and JSON-LD must derive from the same `site_scope=tio2-my` record. No TIOVAR, frozen site or other scope may supply fallback content.

Re-review is required after any change to URL, index policy, fields, outcome copy, privacy route, PRODUCT baseline, document categories, language, Global Chrome mapping or actual production data flow.

Gate 8 implements the approved metadata/schema fields; Gate 9 verifies rendered parity and clean canonical behavior; Gate 10 controls robots/indexing and release authorization.
