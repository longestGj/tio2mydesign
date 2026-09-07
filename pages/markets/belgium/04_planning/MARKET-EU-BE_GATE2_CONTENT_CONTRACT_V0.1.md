# MARKET-EU-BE · Gate 2 Content and Operation Contract V0.1

Date: 2026-09-07. Status: `DRAFT_FOR_BUYER_REVIEW`. This is stable deliverable C for [Skeleton A V0.1](MARKET-EU-BE_GATE2_CONTENT_SKELETON_V0.1.md) and [Full Buyer Clean Copy B V0.1](MARKET-EU-BE_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md). B is the sole editable source for visible page copy.

## 1. Identity and stable content locations

- Page ID / language / type: `MARKET-EU-BE` / EN / Market procurement landing page.
- URL: `/markets/belgium/`.
- Primary keyword: `titanium dioxide supplier belgium`.
- Secondary keywords: `tio2 supplier belgium`; `malaysia titanium dioxide belgium`.
- Excluded ownership: generic application terms, exact Grade terms, Europe/EU supplier terms and detailed trade-update terms remain with their registered owners.
- Approved direction `BE-D01`: Belgium industrial procurement and technical evaluation; coatings and plastics prioritized, with importer/distributor procurement secondary; Malaysia-origin industrial TiO2; primary `Request a Quote`, secondary `Explore Products`.
- Approved fact `BE-D02`: `A Certificate of Origin is available upon request.` The exact sentence appears in B under `Request Documents for a Selected Grade`.
- B location identifiers: Hero; `Confirm the Product, Origin and Destination`; `Describe What You Need to Evaluate`; `Request Documents for a Selected Grade`; `Request a Quote for Delivery to Belgium`.

Current Gate 1 authority is [Manifest V0.2](../MARKET-EU-BE_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md), including Brief V0.2, Gate 1 Research V0.2 and Claim Register V0.2.

## 2. Page-specific actions and context

Shared receiver behavior remains with the current RFQ and Request Documents owner contracts. This table records only the Belgium-page context or restriction.

| B location | Target | Page-specific context and boundary |
|---|---|---|
| Hero and final quotation module | CONV-RFQ `/request-a-quote/` | Carry `Belgium` as explicit destination-country context. It must be visible and editable. Carry source-page attribution as system context. Do not infer Grade, product form, application, quantity, city, port or receiving point. The shared RFQ supports `Not sure / Need help`; additional candidate Grades use `Additional Requirements`. |
| Hero and evaluation module | PRODUCT-000 `/products/` | Open the neutral Product Hub with no Belgium suitability, Grade, form or application preselection. Product pages own Grade-specific facts and the current offered product forms. |
| Documents module | CONV-DOC `/request-documents/` | Carry source-page attribution only. No Grade, document type or company Country / Region is prefilled. The shared receiver accepts one structured Grade and one or more document types; additional Grades may be named in `Additional Requirements` but are not individually mapped to document types. |
| Documents module | DOC-000 `/documents/` | Open the Documents Hub as an information and navigation route, not a public file inventory. |
| Documents module | MARKET-EU-001 `/markets/european-union/` | Open the EU-level procurement context. The Belgium page does not reproduce current regulation, duty, customs or trade-update conclusions. |

Breadcrumb: `Home` → `/`; `Markets` → `/markets/`; `European Union` → `/markets/european-union/`; current `Belgium`. The flat registered page URL does not change.

## 3. SEO, GEO and Schema

| Item | Contract |
|---|---|
| SEO Title | `Titanium Dioxide Supplier Belgium | TiO2 Malaysia` |
| Meta Description | `Source Malaysia-origin industrial titanium dioxide for coatings and plastics projects in Belgium. Review product information and documents, or request a quote.` |
| Canonical | `https://tio2malaysia.com/markets/belgium/` without carried-context or tracking parameters |
| Language / indexing direction | English / `en`; INDEX candidate. Publication, sitemap and robots behavior remain later authorization and verification decisions. |
| Schema | Page-level `WebPage` + `BreadcrumbList`, with approved shared `WebSite` and `Organization` references. No `LocalBusiness`, `Product`, `Offer`, certification, availability, shipping, `FAQPage` or `HowTo` semantics. |

The visible GEO relationship is: `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.` → provides `Malaysia-origin industrial titanium dioxide` → for procurement and technical evaluation in `Belgium`. Belgium is the destination-market context and is not a Belgian manufacturing, warehouse, stock or product-suitability relation.

## 4. Facts, content range and open items

- Malaysia origin, IKHLAS operating identity and industrial TiO2 identity inherit approved project and BE Claim Register authority.
- The product-form passage is a qualification instruction. It does not claim that IKHLAS supplies every mentioned form or establish the absence of a capability outside the Product Hub's current listings.
- Coatings, plastics/masterbatch and import/distribution are buyer contexts under `BE-D01`, not market-share, demand, customer-list or Grade-suitability claims.
- The exact COO sentence inherits `BE-D02`. It does not imply provision for every shipment, customs acceptance, preferential treatment or a tariff outcome.
- No Belgian entity, factory, warehouse, stock, MOQ, response time, delivery time, port service, customs treatment or Grade-country recommendation is claimed.
- Independent Buyer Review, project-control review and batch user approval remain open. Route implementation, canonical output, indexing and publication remain later Gate dependencies and do not change Buyer Copy.
