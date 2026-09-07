# CONV-DOC Gate 7 SEO / GEO / Schema Delivery Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `CONV-DOC-G7-HANDOFF-01` |
| Review ID | `CONV-DOC-G7-PCR-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |

## 1. Exact page metadata

| Element | Required value |
|---|---|
| Title | `Request Documents | TiO2 Malaysia` |
| Meta description | `Submit a controlled request for titanium dioxide product, safety, quality, COA, origin or supplier-qualification documentation for human review.` |
| H1 | `Request Documents` |
| Canonical | `https://tio2malaysia.com/request-documents/` |
| Language | `en` |
| Hreflang | None |
| Breadcrumb | `Home / Request Documents` |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Robots | Gate 10 controlled; `noindex, follow` remains a candidate, not a Gate 7 activation instruction |

Query/prefill variants use the same clean canonical and do not change metadata.

## 2. Schema delivery

Render only:

- one `WebPage` for the registered page;
- one `BreadcrumbList` matching the visible breadcrumb;
- references to existing approved site-wide `WebSite` and `Organization` identities without extending their facts.

`WebPage.name`, `description`, `url`, `@id`, `inLanguage` and breadcrumb reference must match visible metadata and canonical values.

Do not render `Product`, `Offer`, availability, download action, price, shipping, certification, regulatory status, rating, review, `FAQPage`, `QAPage` or `HowTo`. Buyer-entered values, request selections, prefill, errors, receiver output and internal statuses never enter JSON-LD.

## 3. GEO and cannibalization

Answer-ready meaning is limited to the form purpose, minimum information, editable prefill, human review and receipt-only success. It does not authorize a new FAQ module.

Documents information pages own informational document intent; Products own Grade intent; Applications own application guidance; Markets own market content; RFQ owns quotation intent; Sample owns sample intent. CONV-DOC owns only controlled document-request action.

## 4. Gate 8/9/10 contract

- Gate 8: implement metadata and Schema from the `tio2-my` page record with no cross-scope fallback.
- Gate 9: inspect rendered HTML, canonical/query behavior, visible/machine parity and prohibited nodes.
- Gate 10: user decides production robots/indexing and release. Do not hardcode Gate 6's candidate as final authorization.
