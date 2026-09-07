# MARKET-EU-NL · Gate 2 Content and Operation Contract V0.1

Date: 2026-09-07. Status: `DRAFT_FOR_BUYER_REVIEW`. This is stable deliverable C for [Skeleton A V0.1](MARKET-EU-NL_GATE2_CONTENT_SKELETON_V0.1.md) and [Full Buyer Clean Copy B V0.1](MARKET-EU-NL_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md). B is the sole editable source for visible page copy.

## 1. Identity and stable content locations

- Page ID / language / type: `MARKET-EU-NL` / EN / Market procurement landing page.
- URL: `/markets/netherlands/`.
- Primary keyword: `titanium dioxide supplier netherlands`.
- Secondary keywords: `tio2 supplier netherlands`; `malaysia titanium dioxide netherlands`.
- Excluded ownership: generic application terms, exact Grade terms, Europe/EU supplier terms and detailed trade-update terms remain with their registered owners.
- Approved direction `NL-D01`: Netherlands industrial procurement and technical/formulation evaluation; Malaysia-origin industrial TiO2; coatings and printing inks prioritized, with plastics and masterbatch supported; primary `Request a Quote`, secondary `Explore Products`.
- Approved fact `NL-D02`: `A Certificate of Origin is available upon request.` The exact sentence appears in B under `Documents for Product and Supplier Review`.
- B location identifiers: Hero; `Start with Your Application and Evaluation Requirements`; `Review Products Against Your Requirements`; `Documents for Product and Supplier Review`; `Request a Quote for Delivery to the Netherlands`.

Current Gate 1 authority is [Manifest V0.2](../MARKET-EU-NL_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md), including Brief V0.2, Gate 1 Research V0.2 and Claim Register V0.2.

## 2. Page-specific actions and context

Shared receiver behavior remains with the current RFQ and Request Documents owner contracts. This table records only the Netherlands-page context or restriction.

| B location | Target | Page-specific context and boundary |
|---|---|---|
| Hero and final quotation module | CONV-RFQ `/request-a-quote/` | Carry `Netherlands` as explicit destination-country context. It must be visible and editable. Carry source-page attribution as system context. Do not infer Grade, application, quantity, city or port. The shared RFQ supports `Not sure / Need help`; additional candidate Grades use `Additional Requirements`. |
| Hero and product-review module | PRODUCT-000 `/products/` | Open the neutral Product Hub with no Netherlands suitability, Grade or application preselection. Product pages own product-specific facts. |
| Documents module | CONV-DOC `/request-documents/` | Carry source-page attribution only. No Grade, document type or company Country / Region is prefilled. The shared receiver accepts one structured Grade and one or more document types; additional Grades may be named in `Additional Requirements` but are not individually mapped to document types. |
| Documents module | DOC-000 `/documents/` | Open the Documents Hub as an information and navigation route, not a public file inventory. |
| Application module | External VVVF source `https://www.vvvf.nl/brancheorganisatie` | Link label identifies the Vereniging van Verf- en Drukinktfabrikanten. Its member-company market segments and section list are used only to help a buyer describe a Netherlands project; they do not prove demand, share, Grade suitability or IKHLAS capability. |

Breadcrumb: `Home` → `/`; `Markets` → `/markets/`; `European Union` → `/markets/european-union/`; current `Netherlands`. The flat registered page URL does not change.

## 3. SEO, GEO and Schema

| Item | Contract |
|---|---|
| SEO Title | `Titanium Dioxide Supplier Netherlands | TiO2 Malaysia` |
| Meta Description | `Explore Malaysia-origin titanium dioxide for coatings, printing inks, plastics and masterbatch projects in the Netherlands, then request documents or a quote.` |
| Canonical | `https://tio2malaysia.com/markets/netherlands/` without carried-context or tracking parameters |
| Language / indexing direction | English / `en`; INDEX candidate. Publication, sitemap and robots behavior remain later authorization and verification decisions. |
| Schema | Page-level `WebPage` + `BreadcrumbList`, with approved shared `WebSite` and `Organization` references. No `LocalBusiness`, `Product`, `Offer`, certification, availability, shipping, `FAQPage` or `HowTo` semantics. |

The visible GEO relationship is: `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.` → provides `Malaysia-origin titanium dioxide` → for industrial procurement and technical evaluation in `the Netherlands`. Coatings, printing inks, plastics and masterbatch are evaluation contexts, not automatic Grade relationships or country-specific suitability claims.

## 4. Facts, source range and open items

- Malaysia origin and the IKHLAS operating entity inherit approved site-wide and NL Claim Register authority.
- The exact COO sentence inherits `NL-D02`. It does not imply provision for every shipment, customs acceptance, preferential treatment or a tariff outcome.
- The VVVF page was reviewed on 2026-09-07. It supports the statement that the market segments in which its member companies are active are clustered into sections for construction, printing inks, automotive refinish, marine, protective coatings, fire-resistant coatings and roads/road marking. No percentage, ranking or demand claim is used. Source-expression result: `SUPPORTED_AS_WRITTEN`.
- No Dutch warehouse, office, stock, MOQ, response time, delivery time, port service, customs treatment or Grade-country recommendation is claimed.
- Independent Buyer Review, project-control review and batch user approval remain open. Route implementation, canonical output, indexing and publication remain later Gate dependencies and do not change Buyer Copy.
