# MARKET-IN-001 · Gate 2 Content and Operation Contract V0.2

Date: 2026-09-07. Status: `DRAFT_FOR_BUYER_REVIEW`. This is stable deliverable C for [Skeleton A V0.1](MARKET-IN-001_GATE2_CONTENT_SKELETON_V0.1.md) and [Full Buyer Clean Copy B V0.1](MARKET-IN-001_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md). B is the sole editable source for visible page copy.

## 1. Identity and stable content locations

- Page ID / language / type: `MARKET-IN-001` / EN / Market procurement landing page.
- URL: `/markets/india/`.
- Primary keyword: `titanium dioxide supplier india`.
- Secondary keyword scope remains the registered India supplier, import, price, paint, plastics and masterbatch cluster. Exact Grade and detailed trade-update terms remain with their owners.
- Approved direction `IN-D01`: India industrial TiO2 procurement/import and technical evaluation; coatings, plastics and masterbatch; Malaysia-origin; quotation preparation using Grade/use, MT quantity and destination; primary `Request a Quote`, secondary `Explore Products`; detailed trade content belongs to `RES-TRADE-IN`.
- Approved fact `IN-D02`: `A Certificate of Origin is available upon request.` The exact sentence appears in B under `Product, Origin and Import Information`.
- B location identifiers: Hero; `Confirm the Material You Are Buying`; `Review Products for the Intended Application`; `Product, Origin and Import Information`; `Prepare a Clear Quotation Request`.

Current Gate 1 authority is [Manifest V0.2](../MARKET-IN-001_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md), including Brief V0.2, Gate 1 Research V0.2 and Claim Register V0.2.

## 2. Page-specific actions and context

Shared receiver behavior remains with the current RFQ and Request Documents owner contracts. This table records only the India-page context or restriction.

| B location | Target | Page-specific context and boundary |
|---|---|---|
| Hero and final quotation module | CONV-RFQ `/request-a-quote/` | Carry `India` as explicit destination-country context. It must be visible and editable. Carry source-page attribution as system context. Do not infer Grade, application, direct-use/masterbatch context, specification, quantity, city, port or receiving point. The shared RFQ supports `Not sure / Need help`; additional candidate Grades use `Additional Requirements`. |
| Hero and product-review module | PRODUCT-000 `/products/` | Open the neutral Product Hub with no India suitability, Grade or application preselection. Product pages own Grade-specific facts. |
| Documents module | CONV-DOC `/request-documents/` | Carry source-page attribution only. No Grade, document type or company Country / Region is prefilled. The shared receiver accepts one structured Grade and one or more document types; additional Grades may be named in `Additional Requirements` but are not individually mapped to document types. |
| Documents module | DOC-000 `/documents/` | Open the Documents Hub as an information and navigation route, not a public file inventory. |
| Import-information passage | RES-TRADE-IN `/resources/india-titanium-dioxide-anti-dumping-duty/` | Open the dated trade-update owner. MARKET-IN-001 states no current duty, rate, exemption, scope, tariff, customs treatment or shipment result. Resource content and freshness remain owner-controlled. |

Breadcrumb: `Home` → `/`; `Markets` → `/markets/`; current `India`. India is not placed under the European Union path.

## 3. SEO, GEO and Schema

| Item | Contract |
|---|---|
| SEO Title | `Titanium Dioxide Supplier India | TiO2 Malaysia` |
| Meta Description | `Explore Malaysia-origin industrial titanium dioxide Grades for coatings, plastics and masterbatch production in India. Request documents or request a quote.` |
| Canonical | `https://tio2malaysia.com/markets/india/` without carried-context or tracking parameters |
| Language / indexing direction | English / `en`; INDEX candidate. Publication, sitemap and robots behavior remain later authorization and verification decisions. |
| Schema | Page-level `WebPage` + `BreadcrumbList`, with approved shared `WebSite` and `Organization` references. No `LocalBusiness`, `Product`, `Offer`, price, duty, certification, availability, shipping, `FAQPage` or `HowTo` semantics. |

The visible GEO relationship is: `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.` → provides `Malaysia-origin industrial titanium dioxide` → for procurement and technical evaluation in `India`. Coatings, plastics and masterbatch production are evaluation contexts, not India-specific Grade recommendations. The trade-resource link is an ownership relationship and does not import its dated legal conclusions into this page or its Schema.

## 4. Facts, content range and open items

- Malaysia origin, IKHLAS operating identity and industrial TiO2 identity inherit approved project and India Claim Register authority.
- TiO2 pigment as an input to masterbatch production and finished white masterbatch as a different purchase implement the approved India buying-object distinction. No finished masterbatch offer is created.
- The consistent quotation-basis guidance implements `IN-D01` and the approved India price-intent response. It does not state a price, MOQ, landed cost, quotation comparability guarantee or commercial result.
- The exact COO sentence inherits `IN-D02`. It does not imply provision for every shipment, customs acceptance, preferential treatment or a tariff outcome.
- No Indian entity, factory, warehouse, stock, MOQ, response time, delivery time, duty, tax, customs treatment or Grade-country recommendation is claimed.
- Independent Buyer Review, project-control review and batch user approval remain open. Route implementation, RES-TRADE-IN freshness, canonical output, indexing and publication remain later Gate dependencies and do not change Buyer Copy.
