# HOME-001 SEO / GEO / Schema Contract V0.1

## 0. Document control

| Field | Value |
|---|---|
| Page | `HOME-001` / Home / `/` |
| Version | V0.1 |
| Date | 2026-08-31 |
| Review ID | `HOME-G6-SEO-GEO-PCR-02` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| SEO/GEO P0 state | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Approval source | User authorised the final Home entity-relation scheme and explicitly approved public use of `manufacturer` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Gate 6 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE7_AUTHORISATION` |
| Gate 7 | `LOCKED / NOT AUTHORISED` |
| Development status | Contract only; no code, CMS, deployment or release authority |

Project control independently verified and closed Review ID `HOME-G6-SEO-GEO-PCR-02`. This closes the relation-contract review only; it does not authorise Gate 7, implementation or publication.

## 1. Locked SEO fields

| Field | Locked value | Validation |
|---|---|---|
| HTML Title | `Malaysia Titanium Dioxide Supplier | TiO₂ Malaysia` | 50 characters; primary topic first; supplier intent and brand present |
| Meta Description | `Explore titanium dioxide grades, applications, destination markets and document request paths through TiO₂ Malaysia for international industrial buyers.` | 152 characters; matches visible page routes; no unsupported claim |
| Canonical | `https://tio2malaysia.com/` | Absolute HTTPS root URL; self-referencing for Home |
| Robots / index | `index, follow` | Publication intent only; release still requires Gate 10 |
| Language | `EN` | HTML implementation direction: `lang="en"` |
| Primary Keyword | `malaysia titanium dioxide` | Unchanged from approved keyword master |
| H1 | `Malaysia Titanium Dioxide for Industrial Buyers` | Existing Gate 5 approved visible H1; no visual rewrite authorised |

### 1.1 Search-intent boundary

- Home owns broad commercial Malaysia TiO₂ supplier intent.
- About owns company, manufacturing, origin proof and traceability depth.
- Markets own destination-specific supplier intent.
- Products own generic product, process and exact-grade intent.
- Documents own document information and request-process depth.
- Resources own alternative-origin, comparison and time-sensitive trade research.

## 2. Minimum GEO entity graph

Stable IDs:

| Entity | `@id` | Role |
|---|---|---|
| WebSite | `https://tio2malaysia.com/#website` | TiO₂ Malaysia website |
| WebPage | `https://tio2malaysia.com/#webpage` | Home page |
| Organization | `https://tio2malaysia.com/#organization` | IKHLAS TITANIUM (MALAYSIA) SDN. BHD. |
| Brand | `https://tio2malaysia.com/#brand` | TiO₂ Malaysia |
| Product | `https://tio2malaysia.com/#titanium-dioxide` | Generic titanium-dioxide product entity matching the visible Products module |

Required relationships:

```text
WebPage → isPartOf → WebSite
WebSite → publisher → Organization
WebPage → about → Brand
WebPage → about → Organization
WebPage → about → Product
Product → brand → Brand
Product → manufacturer → Organization
```

`publisher` means IKHLAS is responsible for the website content and operation. It does not mean parent company, ownership, factory entity, manufacturing location, product origin or any other corporate-control relationship.

`manufacturer` is used only on `Product`, where Schema.org permits it. It must not be attached to `WebPage`, `WebSite` or `Organization`. The graph must not add `Organization.brand`; the approved brand relation is `Product.brand → Brand`.

### 2.1 Official Schema.org scope check

Checked on 2026-08-31 against Schema.org V30.0:

- `https://schema.org/manufacturer` defines the property as “the manufacturer of the product”, expects an `Organization` value and lists `Product` as its used-on type.
- `https://schema.org/Brand` defines Brand as the name used for labelling a product or similar item; this contract uses it only through `Product.brand` and the WebPage `about` reference.
- `https://schema.org/Product` provides an official Product example in which `manufacturer` points to an Organization.

This official type/property check confirms the contract placement. It does not validate the business fact itself; the user’s explicit approval is the fact-authorisation source.

## 3. Visible manufacturer wording

The Company module must contain this minimum public sentence:

> TiO₂ Malaysia is operated by IKHLAS TITANIUM (MALAYSIA) SDN. BHD., a titanium dioxide manufacturer.

It may continue with the existing About direction:

> Visit the About section for company details, supply information, and available information on origin and documentation.

This wording does not authorise or imply:

- a factory location;
- manufacturing capacity;
- product origin or country of origin;
- COO availability;
- certifications;
- inventory, MOQ, lead time, packaging or delivery capability;
- the manufacturing location of any of the 14 grades.

## 4. Visible-copy to Schema evidence map

| Visible copy / module | Entity | Schema field | Approval or evidence source | Boundary |
|---|---|---|---|---|
| TiO₂ Malaysia | WebSite / Brand / Product | `WebSite.name`; `Brand.name`; `Product.brand` | Approved project identity and user-approved final relation scheme | Product-to-brand identification only; no ownership inference |
| Site is operated by IKHLAS TITANIUM (MALAYSIA) SDN. BHD. | WebSite / Organization / WebPage | `WebSite.publisher`; `Organization.name`; WebPage `about` reference | Approved operating-entity baseline and user-approved final relation scheme | Publisher means website content and operating responsibility only; no parent, ownership, factory, location, origin or corporate-control inference |
| `a titanium dioxide manufacturer` | Product → Organization | `Product.manufacturer` | User explicit approval dated 2026-08-31 | Product-only legal placement; no location/origin inference |
| Malaysia Titanium Dioxide for Industrial Buyers | WebPage | `WebPage.name`; `WebPage.about` | Gate 5 approved H1 | No origin-proof claim |
| Four product groups. Fourteen grades. | Product | `Product.name`; `Product.description` | Visible Products module + PRODUCT V0.3 | Generic Product only; no ProductGroup |
| EU, UK, India, Brazil market entries | WebPage content | No separate country entities in minimum graph | Visible Markets module | No market-availability or trade claim |
| Documents Hub / Request Documents | WebPage content | No document availability Schema | Visible Documents module | No file availability guarantee |

Every structured fact must remain supported by Buyer Clean visible copy. Internal review notes, route states and evidence statuses are not Schema inputs.

## 5. JSON-LD delivery example

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
        {
          "@id": "https://tio2malaysia.com/#brand"
        },
        {
          "@id": "https://tio2malaysia.com/#organization"
        },
        {
          "@id": "https://tio2malaysia.com/#titanium-dioxide"
        }
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

## 6. Explicitly prohibited fields and types

Do not add:

- `Offer`, `AggregateOffer`, price, currency or availability.
- `ItemList`.
- `FAQPage` or `QAPage`.
- `ContactPoint`, `PostalAddress` or `sameAs`.
- `ProductGroup` for the four current Homepage display groups.
- GTIN, SKU, MPN, rating or review fields.
- inventory, MOQ, lead time, capacity, packaging or delivery commitments.
- certification, REACH, COO, `countryOfOrigin` or traceability fields.
- factory, warehouse, laboratory, port or manufacturing-location data.
- market/trade advantages.
- M-996/M-2196 comparison or any `NO_PUBLIC_MAPPING` relation.
- internal page IDs, verification states, release blockers or workflow labels.

The generic Product entity must not be expanded into 14 Product entities on Home. Individual Grade pages own exact-grade structured data after their own evidence and implementation contracts are approved.

## 7. Later opening conditions

| Candidate field or entity | Opening condition |
|---|---|
| Address / ContactPoint | Verified public company/contact evidence and approved Contact page |
| sameAs | Approved official profiles controlled by the entity |
| countryOfOrigin / COO | Product-level origin evidence, exact scope and legal approval |
| Offers | Approved price/availability policy, product scope, currency and release governance |
| 14 Product entities | Individual Grade pages, visible grade facts and approved product Schema contract |
| FAQPage | Eligible visible FAQ form and current search-engine policy review |
| ProductGroup | Proof that represented items are valid variants of one ProductGroup definition |
| Certifications | Verified certificate, issuer, number, scope, validity and public-use approval |

## 8. Validation checklist

- [ ] Title equals the locked 50-character string.
- [ ] Meta Description equals the locked 152-character string.
- [ ] Canonical is exactly `https://tio2malaysia.com/`.
- [ ] robots intent is `index, follow`; publication remains separately gated.
- [ ] HTML language is EN / `lang="en"`.
- [ ] Buyer Clean contains exactly one H1 with the approved wording.
- [ ] Company module contains the approved manufacturer sentence.
- [ ] JSON-LD parses as valid JSON.
- [ ] `@id` values are stable HTTPS fragment IDs.
- [ ] Five nodes use the locked `@id` values and every `@id` reference resolves to an existing node.
- [ ] Required relations are exactly: WebPage `isPartOf` WebSite; WebSite `publisher` Organization; WebPage `about` Brand/Organization/Product; Product `brand` Brand; Product `manufacturer` Organization.
- [ ] `Organization.brand` does not occur.
- [ ] `manufacturer` occurs only on Product.
- [ ] No prohibited types or fields occur.
- [ ] Every graph fact maps to visible Buyer Clean content.
- [ ] Schema does not expand PRODUCT V0.3 relations or expose `NO_PUBLIC_MAPPING`.
- [ ] Desktop, 390px and Tablet visuals show no overflow caused by the new sentence.
- [x] Gate 6 project-control review passed; Gate 7 remains locked pending explicit user authorisation.

## 9. Status boundary

`HOME-G6-SEO-GEO-PCR-02=PROJECT_CONTROL_REVIEW_PASS / CLOSED`

`HOME-SEO-GEO-P0=PROJECT_CONTROL_REVIEW_PASS / CLOSED`

This status records project-control approval of the contract. It does not mean user-authorised Gate 7, implementation, indexing, publication or search-engine eligibility.
