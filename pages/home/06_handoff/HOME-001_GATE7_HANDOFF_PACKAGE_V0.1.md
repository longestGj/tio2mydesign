# HOME-001 Gate 7 Development Handoff Package V0.1

## 0. Document control

| Field | Value |
|---|---|
| Package ID | `HOME-001-G7-HANDOFF-01` |
| Page | `HOME-001` / Home |
| Public URL | `/` |
| Site scope | `tio2-my` |
| Language | EN |
| Priority | P0 |
| User Gate 7 authorisation | Explicitly granted on 2026-08-31 |
| Current delivery lifecycle | `GATE7_HANDOFF_PACKAGE_IN_PREPARATION` |
| Submission state | `GATE7_HANDOFF_PACKAGE_SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` |
| Page lifecycle boundary | Not `APPROVED_FOR_HANDOFF`; not `HANDED_OFF` |
| External development | Not started and not authorised by this package submission |
| Production/release | Not authorised |

This package converts the Gate 6 approved HOME-001 content, visual, SEO and GEO decisions into an implementation-neutral delivery specification. It contains no WordPress, Next.js, CMS, component, styling or test code and does not access the external development project.

## 1. Authoritative inputs

Only the following approved/current records may be used to interpret this package:

1. `AGENTS.md`.
2. `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`.
3. `research/keyword/11_page_keyword_master.csv`, row `HOME-001` and linked target rows.
4. `docs/page-playbooks/HOME_PLAYBOOK_V0.1.md`.
5. `docs/page-briefs/HOME-001_HOME_BRIEF_V0.1.md`.
6. `pages/home/04_planning/01_homepage_content_architecture_v0.3.md`.
7. `pages/home/04_planning/HOME-001_SEO_GEO_SCHEMA_CONTRACT_V0.1.md`.
8. `pages/home/05_review/HOME-001_GATE6_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.2.md`.
9. `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` and its approved audit records.
10. `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.3.md` for Home's Procurement Footer treatment, together with the fixed-RFQ V0.2 baseline.
11. `pages/home/06_handoff/HOME-001_GATE7_MANIFEST_V0.1.md` as the only current Gate 7 asset/file manifest.

No historical draft, rejected visual or `mytio2.com` copy may override these inputs.

## 2. Page identity and keyword contract

| Field | Locked value |
|---|---|
| Page ID | `HOME-001` |
| URL | `/` |
| Primary keyword | `malaysia titanium dioxide` |
| Search intent | Commercial supplier search |
| Buyer stage | Supplier Search |
| Buyer | Industrial end-user procurement and technical-evaluation personnel |
| Target markets | European Union, United Kingdom, India, Brazil |
| Page role | Own the broad Malaysia TiO₂ commercial supplier proposition and route buyers to the correct canonical owner |
| Mapping status | `APPROVED_PRD_V0.3` |
| Evidence status | `QUALITATIVE_KEYWORD_EVIDENCE` |

### 2.1 Cannibalization boundary

- Home owns broad `malaysia titanium dioxide` and same-intent supplier semantics.
- About owns `malaysia titanium dioxide manufacturer`, manufacturing/origin proof, corporate evidence and traceability depth.
- Market pages own destination modifiers such as Europe, UK, India and Brazil supplier intent.
- Products Hub owns generic product-family intent; process pages own chloride/sulfate terms; grade pages own exact model terms.
- Application pages own generic coatings, plastics, masterbatch, printing-inks and paper intent.
- Documents pages own document explanation and controlled request intent.
- Resources own research, comparison, alternative-origin and dated trade-update intent.
- RFQ owns quotation and purchase-action intent.

Home must not expand into detailed country, grade, application, origin-proof, document, trade-policy or form-process content.

## 3. Approved responsive page order

### Desktop and Tablet

`Header → Hero → Start Here → Markets → Products → Applications → Company → Documents → Resources / Buyer Answers → Page RFQ → Footer`

### Mobile

`Mobile Header → Hero → Start Here → Markets → Products → Applications → Company → Documents → Resources / Buyer Answers → Footer`

Mobile intentionally omits the page-level RFQ Section. This is a user-approved responsive content difference, not missing data. Mobile retains RFQ in Header, Hero, Mobile Menu and Footer.

## 4. Locked buyer-visible copy

The following copy is the delivery source of truth. It must not be shortened, rewritten or replaced to make an implementation fit.

### 4.1 Header

Navigation order:

`Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`

### 4.2 Hero

- Eyebrow: `FOR INTERNATIONAL INDUSTRIAL BUYERS`
- H1: `Malaysia Titanium Dioxide for Industrial Buyers`
- Body: `For international industrial buyers sourcing titanium dioxide from Malaysia, explore product grades, destination markets, applications, procurement documents and quotation requirements from one clear starting point.`
- Primary CTA: `Request a Quote`
- Secondary CTA: `View Products`

### 4.3 Start Here

- Label: `START HERE`
- Intro: `Select a starting point based on your market, product or documentation needs.`
- Markets: `Destination markets`
- Products: `Fourteen grades`
- Documents: `Guidance and requests`

### 4.4 Markets

- Eyebrow: `MARKETS`
- H2: `Start with your destination market`
- Intro: `Select your destination market to review relevant sourcing, product and documentation considerations.`
- European Union: `Review product, sourcing and documentation considerations for the European Union market.`
- EU CTA: `European Union market →`
- United Kingdom: `Review product, sourcing and documentation considerations for the United Kingdom market.`
- UK CTA: `United Kingdom market →`
- India: `Review product, sourcing and quotation considerations for the India market.`
- India CTA: `India market →`
- Brazil: `Review product, sourcing and documentation considerations for the Brazil market.`
- Brazil CTA: `Brazil market →`
- Section CTA: `View All Markets →`

### 4.5 Products

- Eyebrow: `PRODUCTS`
- H2: `Four product groups. Fourteen grades.`
- Intro: `Compare grades by product group and intended use, then continue to the relevant product page for detailed information.`
- Count label: `14 GRADES ACROSS FOUR PRODUCT GROUPS`
- Coatings Grades description: `Grades grouped for coatings applications and product selection.`
- Coatings IDs: `M-350 | M-510 | M-896 | M-996 | M-2196 | M-895`
- Plastics & Masterbatch description: `Grades for plastics processing and masterbatch applications.`
- Plastics & Masterbatch IDs: `M-200 | M-108 | M-210 | M-340 | M-886`
- Inks & Multi-Application description: `Grades for printing inks and selected multi-application uses.`
- Inks & Multi-Application IDs: `M-52 | M-2377`
- Specialty Grade description: `A specialty grade for selected product and application requirements.`
- Specialty ID: `CR-901`
- Process links: `Chloride Process →` and `Sulfate Process →`
- Primary CTA: `View All 14 Grades`

### 4.6 Applications

- Eyebrow: `APPLICATIONS`
- H2: `Explore by use case`
- Intro: `Choose the application that best matches your product, formulation or processing requirements.`
- Coatings: `Review titanium dioxide for coatings and the key criteria used to compare suitable grades.`
- Coatings CTA: `Coatings information →`
- Plastics: `Review titanium dioxide for plastics processing and the factors used to compare suitable grades.`
- Plastics CTA: `Plastics information →`
- Masterbatch: `Review titanium dioxide for masterbatch production and relevant grade-selection factors. This refers to TiO₂ input, not finished masterbatch supply.`
- Masterbatch CTA: `Masterbatch information →`
- Printing Inks: `Review titanium dioxide for printing ink applications and related product options.`
- Printing Inks CTA: `Printing inks information →`
- Paper: `Review titanium dioxide for paper applications and relevant product information.`
- Paper CTA: `Paper information →`

### 4.7 Company

- Eyebrow: `COMPANY & SUPPLY`
- H2: `Know the company behind TiO₂ Malaysia`
- Body: `TiO₂ Malaysia is operated by IKHLAS TITANIUM (MALAYSIA) SDN. BHD., a titanium dioxide manufacturer. Visit the About section for company details, supply information, and available information on origin and documentation.`
- CTA: `About TiO₂ Malaysia →`
- Supply overview: `Understand the product, market and procurement scope.`
- Company information: `Review the operating entity and company details.`
- Origin & documentation: `Review available information on origin and related documentation.`

The manufacturer sentence does not authorise factory location, manufacture in Malaysia, product origin, COO, capacity, inventory, certification or traceability claims.

### 4.8 Documents

- Eyebrow: `DOCUMENTS`
- H2: `Access product and procurement documentation`
- Intro: `Use the Documents Hub to review document types and guidance, or submit a request when documentation is needed for a specific product or purchasing requirement.`
- Documents Hub: `Review guidance on product, sourcing and compliance documentation.`
- Hub CTA: `View Document Information →`
- Request Documents: `Request documentation for a specific product, application or purchasing requirement.`
- Request CTA: `Request Documents →`

This copy describes information and request paths; it does not guarantee that a file is available or applicable.

### 4.9 Resources and Buyer Answers

- Eyebrow: `RESOURCES & BUYER ANSWERS`
- H2: `Technical and sourcing topics for purchasing teams`
- Intro: `Use the short answers below for initial guidance, then open the relevant resource for detailed context and supporting evidence.`
- Alternative-origin topic: `Review the factors buyers may need to assess when comparing sourcing origins, including trade measures and documentation requirements.`
- Alternative-origin CTA: `Read sourcing considerations →`
- Process topic: `Understand chloride and sulfate process terminology before comparing relevant titanium dioxide grades.`
- Process CTA: `Read process overview →`
- Question: `Where should buyers start?`
- Answer: `Start with the destination market, then narrow the search by application or product group and confirm the documentation needed for purchasing.`
- CTA: `Market information →`
- Question: `How are the products organised?`
- Answer: `Fourteen grades are organised into four product groups: coatings, plastics & masterbatch, inks & multi-application, and specialty grades.`
- CTA: `View all 14 grades →`
- Question: `How can a quotation request be prepared?`
- Answer: `Include the destination market, application, preferred grade if known, quantity, packaging requirements and required documents.`
- CTA: `Request a Quote →`

### 4.10 Desktop-only page RFQ

- Eyebrow: `REQUEST A QUOTE`
- H2: `Prepare a structured quotation request`
- Body: `Provide the key purchasing details needed to structure your quotation request.`
- Field summaries: `Destination Market`; `Application`; `Grade / Product`; `Quantity`; `Packaging`; `Document Needs`
- CTA: `Request a Quote`

This Section is a structured field summary and link, not the RFQ form itself. It must not render on Mobile.

### 4.11 Footer

- Description: `Titanium dioxide product, market and procurement information for international industrial buyers.`
- Explore: `Home | Markets | Products | Applications`
- Information: `Documents | Resources | About`
- Procurement: `Request a Quote`
- Copyright: `© 2026 TiO2 Malaysia.`

## 5. Module rendering and empty-state contract

| Module | Required inputs | Desktop/Tablet | Mobile | Empty/restricted behaviour |
|---|---|---|---|---|
| Global Header | scoped menu, Logo reference, RFQ route | Always render full navigation | Always render Logo + RFQ + Menu | Missing scoped menu or RFQ route is a release blocker; never fall back to another site scope |
| Hero | exact copy, two CTAs, atmosphere asset | Render copy, CTAs and approved material composition | Render copy and CTAs; desktop composition may be hidden | Copy/CTA missing blocks release; no substitute claim or cross-scope media |
| Start Here | three exact items and page IDs | Render compact three-item bar | Render compact three-item bar | Missing destination route is a route blocker; do not invent an href |
| Markets | four exact items | Render four entries | Stack four entries | All four are required; missing scoped content blocks release |
| Products | four groups, 14 unique IDs, process targets | Display all 14 IDs in four groups | Default four collapsed groups; separate accessible expansion reveals IDs | Any missing/duplicate ID blocks release; do not substitute data from another scope |
| Applications | five exact items/page IDs | Render five entries | Stack five entries | Provisional hrefs must resolve through an approved scoped route map before release; otherwise block route, not fabricate URL |
| Company | exact copy and three summaries | Render text-led layout | Render stacked text-led layout | Verified proof image is not required; do not show internal pending labels or unsupported facility imagery |
| Documents | Hub and Request items | Render two entries | Stack two entries | Do not render file cards or availability claims; planned routes must pass route readiness |
| Resources | two topics + three answers | Render all text | Render all text | A resource CTA whose route is not approved must not use a guessed URL; unresolved required CTA is a release blocker |
| Page RFQ | exact summary fields and CTA | Render | Do not render | Desktop CTA remains visible; RFQ route/form readiness blocks release but never hides Global Chrome RFQ |
| Global Footer | scoped links, Procurement RFQ | Render | Render responsive Footer | Missing RFQ route blocks release; Contact must not replace RFQ |

No Buyer Clean output may show `pending`, `not live`, `route unavailable`, `evidence required`, `NO_PUBLIC_MAPPING`, `RELEASE_BLOCKER` or another internal status. Restricted content is omitted or the release is blocked according to this table.

## 6. CTA and link-target contract

| Visible action | Target page ID | Registered URL | Mapping state | Delivery behaviour |
|---|---|---|---|---|
| Home | `HOME-001` | `/` | Approved | Scoped internal link |
| Markets / View All Markets | `MARKET-000` | `/markets/` | Approved navigation hub | Scoped internal link |
| European Union market | `MARKET-EU-001` | `/markets/european-union/` | Approved | Scoped internal link |
| United Kingdom market | `MARKET-UK-001` | `/markets/united-kingdom/` | Approved | Scoped internal link |
| India market | `MARKET-IN-001` | `/markets/india/` | Approved | Scoped internal link |
| Brazil market | `MARKET-BR-EN` | `/markets/brazil/` | Approved | Scoped internal link; no PT-BR substitution |
| View Products / View All 14 Grades | `PRODUCT-000` | `/products/` | Approved | Scoped internal link |
| Chloride Process | `PRODUCT-PROC-CL` | `/products/chloride-process-titanium-dioxide/` | Approved | Scoped internal link |
| Sulfate Process | `PRODUCT-PROC-SU` | `/products/sulfate-process-titanium-dioxide/` | Approved | Scoped internal link |
| Applications footer/navigation | `APP-000` | `/applications/` | Planned architecture | Route readiness required before release |
| Five Application CTAs | `APP-COAT`, `APP-PLAS`, `APP-MB`, `APP-INK`, `APP-PAPER` | Registered provisional URLs | `PROVISIONAL_URL` | Resolve from scoped route registry only after approval; do not hard-code or guess |
| Documents | `DOC-000` | `/documents/` | Planned architecture | Route readiness required before release |
| Request Documents | `CONV-DOC` | `/request-documents/` | Planned conversion | Route/form readiness required; no file guarantee |
| Resources | `RES-000` | `/resources/` | Planned architecture | Route readiness required before release |
| Sourcing considerations | `RES-ORIGIN` | `/resources/non-china-titanium-dioxide/` | Approved | Scoped internal link |
| Process overview | `RES-PROC` | `/resources/chloride-vs-sulfate-titanium-dioxide/` | New-page candidate | Do not publish this href until page/route approval; unresolved CTA is a release blocker or requires a separate content decision |
| About | `ABOUT-001` | `/about/` | Approved | Scoped internal link; deeper facts remain gated |
| Request a Quote | `CONV-RFQ` | `/request-a-quote/` | Planned conversion | Always visible in approved positions; route/form readiness is a release blocker |

No visible action may fall back to TIOVAR, another `site_scope`, Contact or an external unapproved URL.

## 7. Candidate WordPress/CMS content model

These are semantic field candidates, not a required database or plugin implementation.

| Field key | Type | Required | Approved source | Validation | Empty/restricted behaviour |
|---|---|---:|---|---|---|
| `page_id` | identifier | yes | Registry | Exactly `HOME-001` | Block build/release |
| `site_scope` | identifier | yes | Project baseline | Exactly `tio2-my` | Block query/render; no fallback |
| `locale` | text/enum | yes | SEO contract | `en` | Block release |
| `path` | route | yes | Registry | Exactly `/` | Block release |
| `lifecycle` | workflow state | yes | Governance | Must not imply published/handed-off early | Do not expose to Buyer Clean |
| `seo` | structured object | yes | SEO/GEO contract | Exact Title, Meta, Canonical, robots and H1 | Block release |
| `schema_graph` | JSON-LD object | yes | SEO/GEO contract | Five nodes/five relations, valid references, prohibited scan | Block release; no generated enrichment |
| `global_chrome_ref` | reference | yes | Global Chrome V0.3 Home treatment | Correct scoped menu and fixed RFQ | Block release |
| `hero` | structured object | yes | Locked copy | Exact eyebrow, H1, body, two CTA refs, media ref | Block release |
| `start_here_items` | ordered list | yes | Locked copy | Exactly Markets/Products/Documents | Block release |
| `market_items` | ordered list | yes | Locked copy/registry | Exactly four approved markets | Block release |
| `product_groups` | ordered list | yes | PRODUCT V0.3 | 4 groups; counts 6/5/2/1; 14 unique IDs | Block release |
| `product_process_links` | ordered list | yes | Registry | Chloride then Sulfate | Block release |
| `application_items` | ordered list | yes | Locked copy | Five exact page IDs; route state separate | Block route/release if unresolved |
| `company_content` | structured object | yes | Locked copy | Exact public manufacturer sentence and summaries | Do not enrich with gated facts |
| `document_items` | ordered list | yes | Locked copy | Hub + Request only | No file availability fields |
| `resource_topics` | ordered list | yes | Locked copy | Two topics; target state retained | Unapproved target cannot receive guessed URL |
| `buyer_answers` | ordered list | yes | Locked copy | Three visible answers | Do not generate FAQPage automatically |
| `desktop_rfq_summary` | structured object | yes | Locked copy | Desktop/Tablet only; six labels | Mobile must not render it |
| `responsive_rules` | structured object | yes | Approved responsive difference | Mobile RFQ false; product default collapsed | Block release if violated |
| `media_refs` | scoped references | conditional | Gate 7 Manifest | Must resolve to approved/scoped asset record | No cross-scope or stock fallback |
| `route_refs` | page-ID references | yes | Keyword master/registry | Resolve only within `tio2-my` route map | Unresolved required route blocks release |

CMS editors must not be offered fields that can override `site_scope`, canonical, primary keyword ownership, Global RFQ visibility or the approved five Schema relationships without a separately approved change request.

## 8. Next.js rendering-field contract

This section defines output behaviour only; it does not prescribe component names, file structure or implementation technique.

| Rendering responsibility | Inputs | Required output | Conditional/error behaviour |
|---|---|---|---|
| Page shell | `page_id`, `site_scope`, `locale`, Global Chrome reference | Correct scoped Header/Footer and one Home main region | Reject mismatched scope; never fetch another scope as fallback |
| Metadata | `seo` | Exact Title, Meta, Canonical, robots and language | Missing/mismatch blocks release |
| Hero | `hero` | Exact H1/copy/CTA order and approved visual composition | Mobile hides desktop-only composition; copy remains exact |
| Content modules | ordered section data | Approved module order and semantics | Required module missing blocks release; restricted facts do not render |
| Products | PRODUCT V0.3 group data | Desktop all IDs; Mobile collapsed default plus accessible discovery | Count/duplicate/mapping mismatch blocks release |
| Route links | `route_refs` | Same-scope internal URLs | No guessed, external or cross-scope fallback; unresolved required link blocks release |
| RFQ | fixed Global CTA plus page-specific summary | Header/Hero/Footer/Mobile Menu fixed; Desktop page summary only | `rfq_route_ready=false` blocks release, never hides fixed RFQ |
| Schema | approved `schema_graph` | One valid JSON-LD graph matching visible content | Do not add inferred entities/fields |
| Media | scoped media reference and presentation role | Correct responsive crop/priority/alt treatment | Missing optional decor may omit without evidence claim; required composition/clearance failure blocks release decision |
| Error/empty states | scoped fetch/route status | No internal governance language in Buyer Clean | Fail closed; log internally; do not leak another site’s content |

## 9. Mandatory `site_scope=tio2-my` isolation

The external development result must meet all of the following:

### 9.1 Query and content isolation

- Every Home, menu, global setting, SEO, media and route query is explicitly scoped to `tio2-my`.
- Missing Malaysia content returns an empty/error result governed by this package; it never reads TIOVAR, a frozen site or any other site scope.
- Generic shared defaults may be used only if they are content-neutral technical defaults approved by the external project; they must not contain another brand’s copy, routes, media, SEO or form destination.

### 9.2 Route isolation

- Route lookup uses `site_scope + page_id + locale` or an equivalent scope-safe key.
- `/` resolves HOME-001 only for `tio2-my`.
- Planned/provisional destinations retain their page ID and governance state; no URL is inferred from another site.
- A cross-scope URL match is an error, not a fallback.

### 9.3 Cache isolation

- Page, query, route, menu, metadata, Schema and media cache keys include site scope and language.
- Invalidating TiO₂ Malaysia content must not invalidate or overwrite another site’s content, and vice versa.
- No cache-warming process may populate missing `tio2-my` entries from another scope.

### 9.4 Menu and Global Chrome isolation

- Menu content and current-page state are loaded from the Malaysia scope.
- Required order remains Home, Markets, Products, Applications, Documents, Resources, About, Request a Quote.
- Global RFQ always resolves to the Malaysia `/request-a-quote/` destination.
- Contact does not replace RFQ.

### 9.5 SEO and Schema isolation

- Metadata and JSON-LD are page/scope specific and never inherited from another site.
- Canonical remains `https://tio2malaysia.com/`.
- Schema `@id` values remain on `https://tio2malaysia.com/`.
- Sitemap/index outputs must not mix other domains or scopes.

### 9.6 Form isolation

- RFQ links and future form submissions identify `site_scope=tio2-my` and source page `HOME-001` internally.
- Submission storage, notification, consent text, success/error handling and analytics must not route to another site’s configuration.
- No PII is placed in URL parameters, page HTML, logs or analytics payloads beyond the external project’s approved privacy design.

### 9.7 Media isolation

- Media references resolve from Malaysia-assigned records only.
- No other site’s Logo, factory, product, document or company asset is used as fallback.
- The current Logo PNG remains a visual-direction asset, not a production SVG.

## 10. SEO / GEO / Schema delivery contract

| Field | Exact output |
|---|---|
| HTML Title | `Malaysia Titanium Dioxide Supplier | TiO₂ Malaysia` |
| Meta Description | `Explore titanium dioxide grades, applications, destination markets and document request paths through TiO₂ Malaysia for international industrial buyers.` |
| Canonical | `https://tio2malaysia.com/` |
| robots | `index, follow` |
| HTML language | `en` |
| H1 | `Malaysia Titanium Dioxide for Industrial Buyers` |

The JSON-LD graph must parse as JSON and use exactly these five stable nodes and five relationship groups:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://tio2malaysia.com/#website",
      "url": "https://tio2malaysia.com/",
      "name": "TiO₂ Malaysia",
      "inLanguage": "en",
      "publisher": {
        "@id": "https://tio2malaysia.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://tio2malaysia.com/#webpage",
      "url": "https://tio2malaysia.com/",
      "name": "Malaysia Titanium Dioxide for Industrial Buyers",
      "isPartOf": {
        "@id": "https://tio2malaysia.com/#website"
      },
      "about": [
        { "@id": "https://tio2malaysia.com/#brand" },
        { "@id": "https://tio2malaysia.com/#organization" },
        { "@id": "https://tio2malaysia.com/#titanium-dioxide" }
      ],
      "inLanguage": "en"
    },
    {
      "@type": "Organization",
      "@id": "https://tio2malaysia.com/#organization",
      "name": "IKHLAS TITANIUM (MALAYSIA) SDN. BHD."
    },
    {
      "@type": "Brand",
      "@id": "https://tio2malaysia.com/#brand",
      "name": "TiO₂ Malaysia"
    },
    {
      "@type": "Product",
      "@id": "https://tio2malaysia.com/#titanium-dioxide",
      "name": "Titanium Dioxide",
      "description": "Fourteen titanium dioxide grades organised into four product groups.",
      "brand": {
        "@id": "https://tio2malaysia.com/#brand"
      },
      "manufacturer": {
        "@id": "https://tio2malaysia.com/#organization"
      }
    }
  ]
}
```

Required relations:

1. WebPage `isPartOf` WebSite.
2. WebSite `publisher` Organization.
3. WebPage `about` Brand, Organization and Product.
4. Product `brand` Brand.
5. Product `manufacturer` Organization.

`Organization.brand` must not exist. `manufacturer` must occur only on Product. `publisher` means website content and operating responsibility only; it does not assert parent company, ownership, factory entity, production location, product origin or another control relationship.

Do not add Offer, ItemList, FAQPage, ContactPoint, PostalAddress, sameAs, ProductGroup, countryOfOrigin, COO, price, inventory, MOQ, lead time, availability, rating, GTIN, certification or unverified document fields.

## 11. Asset and evidence behaviour

- The unique Gate 7 Manifest records all visual/evidence files and SHA-256 values.
- The Hero material composition is atmosphere-only. Its alt treatment should be empty/decorative unless a later approved content decision gives it an informative role.
- It must never be labelled as company material, factory, laboratory, warehouse, shipment, origin or manufacturing evidence.
- The current Logo PNG is a visual-direction reference. Production SVG/clearance remains an external dependency and release blocker.
- No generated, stock or conceptual image may be used to prove factory, capacity, inventory, certification, origin, COO or traceability.
- If verified proof media is absent, use the approved text-led layout; never show buyer-facing pending labels or borrow media from another scope.

## 12. Change-control boundary

Any change to copy, page order, visual composition, URL, primary keyword, link owner, 14-grade data, responsive RFQ difference, metadata, Schema relation, Global RFQ visibility or evidence gate requires a new approved change record. External implementation constraints are not permission to shorten copy, hide required content, invent routes or relax isolation.

## 13. Package handoff boundary

This package is submitted for project-control review. It is not `APPROVED_FOR_HANDOFF`, `HANDED_OFF`, implemented or released. External development may begin only after the package receives the required project-control decision and the project records the next authorised state. The external project remains responsible for its own branch, worktree, implementation, tests, deployment and release governance.
