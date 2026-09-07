# ABOUT-001 Gate 6 SEO / GEO / Schema Contract V0.3

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / `/about/` |
| Review ID | `ABOUT-001-G6-PCR-03` |
| Date | 2026-09-01 |
| Parent | SEO/GEO/Schema V0.2; superseded for current authorization meaning |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 6 outcome | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE7_AUTHORIZATION` |
| Gate 7 | `LOCKED / NOT_AUTHORIZED` |

Authorization authority: root `D:\23MySec\AGENTS.md` §2.3. Content authorization does not authorize Gate progression, implementation, deployment, publication or indexing.

## 1. SEO Contract

| Field | Required value |
|---|---|
| `page_id` | `ABOUT-001` |
| `site_scope` | `tio2-my` |
| `page_type` | Trust / company page; `AboutPage` |
| `path` | `/about/` |
| `canonical_url` | `https://tio2malaysia.com/about/` |
| Primary Keyword | `malaysia titanium dioxide manufacturer` |
| H1 | `Malaysia-Based Titanium Dioxide Supply for Global Markets` |
| Breadcrumb | Home → About |
| SEO title | `Malaysia Titanium Dioxide Manufacturer | TiO2 Malaysia` |
| Meta description | `Learn about IKHLAS TITANIUM (MALAYSIA) SDN. BHD., a Malaysia-based rutile TiO2 manufacturer with product documentation and export coordination through Port Klang.` |
| Production robots intent | `index, follow` only after release authorization; staging `noindex, nofollow` |

Title and description use only facts visible in the current approved page. They do not state registered legal status, certification, guaranteed compliance or audited capacity.

### 1.1 Social metadata

| Field | Required value / rule |
|---|---|
| `og:type` | `website` |
| `og:url` | Canonical About URL |
| `og:title` | `Malaysia-Based Titanium Dioxide Supply for Global Markets | TiO2 Malaysia` |
| `og:description` | Same approved fact scope as the Meta description |
| `twitter:card` | `summary_large_image` only when an eligible image exists; otherwise use the approved non-image social fallback supported by the platform |
| `og:image` / `twitter:image` | Omit until an exact asset passes the rights-and-usage gate in §9 |

Social metadata may express the same authorized visible facts and must not add a hidden certification, guarantee, customer or shipment claim.

## 2. Entity Graph

```text
AboutPage
  mainEntity → Organization
  about → Brand and Organization

Organization
  name → IKHLAS TITANIUM (MALAYSIA) SDN. BHD.
  brand → TiO2 Malaysia
  location → Taiping manufacturing-site Place
  areaServed → European Union / United Kingdom / India / Brazil
  description → visible business, application, annual-supply, market-reach,
                customer-base, documentation and Port Klang facts
```

## 3. Stable IDs

| Node | ID |
|---|---|
| WebSite | `https://tio2malaysia.com/#website` |
| Brand | `https://tio2malaysia.com/#brand` |
| Organization | `https://tio2malaysia.com/#organization` |
| AboutPage | `https://tio2malaysia.com/about/#webpage` |
| BreadcrumbList | `https://tio2malaysia.com/about/#breadcrumb` |
| Taiping Place | `https://tio2malaysia.com/about/#taiping-manufacturing-site` |
| EU area | `https://tio2malaysia.com/about/#market-european-union` |
| UK area | `https://tio2malaysia.com/about/#market-united-kingdom` |
| India area | `https://tio2malaysia.com/about/#market-india` |
| Brazil area | `https://tio2malaysia.com/about/#market-brazil` |

## 4. Organization Contract

Permitted properties:

| Property | Required / conditional value |
|---|---|
| `@type` | `Organization` |
| `@id` | Organization stable ID |
| `name` | `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.` |
| `brand` | Brand stable-ID reference |
| `description` | Faithful synthesis of the same visible facts; see approved description below |
| `location` | Taiping Place stable-ID reference |
| `areaServed` | Four approved market nodes only |
| `url` | Canonical site URL when approved by shared entity authority |

Approved Organization description:

`IKHLAS TITANIUM (MALAYSIA) SDN. BHD. is a Malaysia-based rutile TiO2 manufacturer located in Taiping, Perak. It supplies rutile TiO2 grades for paints and coatings, plastics, masterbatch, printing inks and paper, with product documentation and export coordination through Port Klang. The page states annual supply of more than 35,000 metric tons, customers in over 30 countries and long-term cooperation with more than 200 factory customers.`

This description is authorized because every material fact appears visibly on the same page. Do not append FCL/LCL unless the same page state visibly contains that wording.

## 5. Place and PostalAddress Contract

```text
Place
  @id: https://tio2malaysia.com/about/#taiping-manufacturing-site
  name: Taiping manufacturing site
  address:
    @type: PostalAddress
    streetAddress: NO.33 Industrial Perusahaan Ringan Tupai
    postalCode: 34000
    addressLocality: Taiping
    addressRegion: Perak
    addressCountry: MY
```

Organization points to this node through `location`. Do not use Organization `address` or call this a registered office.

## 6. Area-Served Contract

Organization `areaServed` may reference four named `AdministrativeArea` nodes:

- `European Union`
- `United Kingdom`
- `India`
- `Brazil`

The property records the four authorized visible market cards. It does not list unnamed additional countries, identify customers or prove a shipment.

## 7. AboutPage and Breadcrumb

- `AboutPage.mainEntity` references the Organization.
- `AboutPage.about` references the Organization and Brand.
- `BreadcrumbList` exactly matches visible Home → About.
- Shared WebSite/Brand/Organization identities reuse the stable IDs above and do not fork entities.

## 8. Prohibited Schema and Unsupported Inference

Do not emit:

- Organization `legalName`, registered address, registration/tax ID, incorporation date or legal status;
- `numberOfEmployees` from the 200+ customer statement;
- `AggregateRating`, `Review`, `Offer`, `Product`, certification, award or ISO/QMS property;
- fabricated named customer, export-event or shipment nodes;
- audited capacity, guaranteed availability, lead time, compliance or route claims;
- FCL/LCL, packaging, traceability or other facts absent from the same visible page state;
- hidden or restricted facts not displayed on the page.

## 9. Image and Open Graph Gate

Visible copy authorization does not establish image rights. `Organization.image`, AboutPage `primaryImageOfPage`, Schema `ImageObject` and `og:image` remain conditional on an exact asset record containing source, rights/authorization and approved usage. Images must not independently introduce hidden factory, inventory, warehouse, stock or shipment claims.

## 10. Atomicity and Scope

Visible facts, metadata and Schema must change atomically. If a visible fact is withheld in a restricted state, its description fragment/property/node is also withheld. Every record is resolved under `site_scope=tio2-my` with no cross-scope fallback.

Project control approved and closed this contract under `ABOUT-001-G6-PCR-03`. Gate 7 remains locked pending separate user authorization; implementation, deployment, publication and indexing remain unauthorized.
