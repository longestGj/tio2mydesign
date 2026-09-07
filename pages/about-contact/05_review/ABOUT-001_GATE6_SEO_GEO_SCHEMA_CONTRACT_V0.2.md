# ABOUT-001 Gate 6 SEO / GEO / Schema Contract V0.2

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / `/about/` |
| Review ID | `ABOUT-001-G6-PCR-02` |
| Date | 2026-09-01 |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |

## 1. Fixed SEO Identity

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
| Proposed title | `Malaysia Titanium Dioxide Manufacturer | TiO2 Malaysia` |
| Production robots intent | `index, follow` only after release authorization; staging `noindex, nofollow` |

Proposed meta description:

`Learn about TiO2 Malaysia and IKHLAS TITANIUM (MALAYSIA) SDN. BHD., including Malaysia manufacturing, rutile TiO2 supply, documentation and export coordination.`

The removed buyer-visible source block must not be reintroduced through metadata.

## 2. Visible and Machine-Readable Boundary

- `Operating Company` is the visible label. Organization may use `name`; never `legalName`.
- Taiping may be a conditional `Place` only when the corresponding visible location remains. It is never Organization registered `address`.
- Retained port/product/application/flag/map imagery creates no Schema `image` claim about factory, inventory, warehouse or shipment and creates no entity relation.
- Retained EU/UK/India/Brazil card wording creates no Organization `areaServed`, customer, export or destination relation.
- Retained reliable/continuity/global-standards/compliant-delivery wording creates no guarantee, certification or machine-readable capability property.
- Internal evidence status remains company-provided even though the visible source block has been removed by the user.

## 3. Stable IDs

| Node | ID |
|---|---|
| WebSite | `https://tio2malaysia.com/#website` |
| Brand | `https://tio2malaysia.com/#brand` |
| Organization | `https://tio2malaysia.com/#organization` |
| AboutPage | `https://tio2malaysia.com/about/#webpage` |
| BreadcrumbList | `https://tio2malaysia.com/about/#breadcrumb` |
| Conditional Taiping Place | `https://tio2malaysia.com/about/#taiping-manufacturing-site` |

## 4. Permitted Schema

- `AboutPage` matching the visible page and canonical.
- `BreadcrumbList` matching visible Home → About.
- Shared `WebSite`, `Brand` and Organization references.
- Organization `name` using the visible company name.
- Conditional `Place` for visible Taiping location, without mapping it as a registered office.

## 5. Prohibited Schema

Do not emit:

- `legalName`, registration/tax ID, incorporation date, legal status or registered address;
- Organization `areaServed` from the four cards or 30+ countries copy;
- customer, export-destination, stock, warehouse, shipment or factory relations derived from images;
- ISO, certified-QMS, certification, award, review, rating or batch-traceability facts;
- guaranteed capacity, route, availability, lead time, compliance or delivery;
- `Product`, `Offer`, `Review`, `AggregateRating`, `FAQPage` or `QAPage` for this page;
- hidden facts or properties absent from the same visible evidence state.

## 6. State Atomicity

Schema and visible factual fields remain atomic. If a permitted visible field is removed or restricted, its Schema property/node is removed in the same state. The fixed shared RFQ remains visible in every evidence state; false route readiness creates a release blocker, not hidden/disabled/fallback UI.

## 7. Scope and Media

All records are filtered by `site_scope=tio2-my` before resolution, with no cross-scope fallback. Open Graph and Schema images require a separately approved, rights-cleared asset and neutral meaning; current body-image retention alone does not grant that use.

This contract remains submitted and not approved.
