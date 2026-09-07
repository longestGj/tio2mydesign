# ABOUT-001 Gate 6 SEO / GEO / Schema Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / `/about/` |
| Date | 2026-09-01 |
| Review ID | `ABOUT-001-G6-PCR-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Scope | Implementation-neutral metadata, entity and structured-data contract |

## 1. Fixed Page Identity

| Field | Required value |
|---|---|
| `page_id` | `ABOUT-001` |
| `site_scope` | `tio2-my` |
| `language` | `en` |
| `page_type` | Trust / company page; Schema `AboutPage` |
| `slug` | `about` |
| `path` | `/about/` |
| `canonical_url` | `https://tio2malaysia.com/about/` |
| Primary Keyword | `malaysia titanium dioxide manufacturer` |
| H1 | `Malaysia-Based Titanium Dioxide Supply for Global Markets` |
| Breadcrumb | Home → About |
| Production robots intent | `index, follow` only after separate release readiness; staging is `noindex, nofollow` |

Proposed metadata for project-control review:

- SEO title: `Malaysia Titanium Dioxide Manufacturer | TiO2 Malaysia`
- Meta description: `Learn about TiO2 Malaysia and IKHLAS TITANIUM (MALAYSIA) SDN. BHD., including company-provided information on Malaysia manufacturing, rutile TiO2 supply, documentation and export coordination.`

Excluded ownership remains broad supplier search, destination-market supplier terms and RFQ terms.

## 2. Visible Entity Graph

```text
TiO2 Malaysia (Brand)
  presented by → IKHLAS TITANIUM (MALAYSIA) SDN. BHD. (Organization name; company-provided)
  offers → Rutile titanium dioxide (Product category, not individual Product offers)
  supports → Approved Applications overview
  targets website content to → EU / UK / India / Brazil procurement audiences
  provides navigation to → Documents Hub / Request Documents / RFQ / Contact

IKHLAS TITANIUM (MALAYSIA) SDN. BHD.
  states manufacturing site at → Taiping, Perak, Malaysia (Place; company-provided)
  states manufacturing/origin and supply/export-support claims → source-qualified visible claim blocks
```

The graph must never convert the four target markets into proven customers, exports or `areaServed`.

## 3. Stable Schema IDs

| Node | Stable ID |
|---|---|
| WebSite | `https://tio2malaysia.com/#website` |
| Brand | `https://tio2malaysia.com/#brand` |
| Organization | `https://tio2malaysia.com/#organization` |
| AboutPage | `https://tio2malaysia.com/about/#webpage` |
| BreadcrumbList | `https://tio2malaysia.com/about/#breadcrumb` |
| Taiping manufacturing site, conditional | `https://tio2malaysia.com/about/#taiping-manufacturing-site` |

## 4. Permitted Schema

- One `AboutPage` matching the visible page, canonical, title and language.
- One `BreadcrumbList` matching visible Home → About.
- Shared `WebSite`, `Brand` and `Organization` references under the global entity authority.
- `Organization.name` may use the visible company name; do not use `legalName` while SSM evidence is absent.
- One conditional `Place` for the visible, company-stated Taiping manufacturing site. If the location block is withheld, the `Place` node is also absent.
- `mainEntity` / `about` relations only when they reflect visible, source-qualified content.

## 5. Prohibited or Frozen Schema

Do not output:

- Organization `legalName`, registered address, registration/tax ID, founding date or legal status;
- Organization `address` derived from the manufacturing-site address;
- `areaServed` for EU, UK, India, Brazil or 30+ countries;
- employee count, certification, ISO, award, `sameAs` or unverified `contactPoint`;
- production capacity, batch traceability, guaranteed availability, lead time or route claims;
- `Product`, `Offer`, `Review`, `AggregateRating`, `FAQPage` or `QAPage` for this page;
- hidden facts, restricted fields, media-derived claims or information not visible in the same state.

## 6. GEO Answer Blocks

The page may expose concise, attributable answers to:

1. Who operates TiO2 Malaysia?
2. What rutile TiO2 applications are supported?
3. What does Malaysia-based manufacturing/origin mean in this company-provided context?
4. Which documents may be available by grade, transaction and destination?
5. How are export and logistics requests coordinated?

Each answer must preserve source, review date, scope and any transaction-dependent qualifier. No answer may state independent verification, certification, guaranteed compliance or route readiness.

## 7. Evidence-State Schema Matrix

| State | Visible behavior | Schema behavior |
|---|---|---|
| `EVIDENCE_SUFFICIENT` | Render approved, source-qualified fields | Reflect only the same visible entities and claims |
| `EVIDENCE_PARTIAL` | Omit affected fact rows/cards and collapse spacing atomically | Omit corresponding property/node/relation |
| `EVIDENCE_RESTRICTED` | Remove manufacturer/origin/location specifics; use neutral `About TiO2 Malaysia` page identity while retaining allowed navigation and CTAs | Retain only AboutPage, BreadcrumbList and safe shared entity references; no Place or restricted claims |

Global RFQ stays visible in all three states. Restricted evidence never creates `RFQ OFF`, hidden, disabled, empty slot or Contact fallback.

## 8. Open Graph and Media

Open Graph title, description and canonical must match this contract. `og:image` requires an approved, rights-cleared brand/share graphic. The current unverified port/factory/product imagery may not become `og:image` or Schema `image` merely because it appears in a Gate 5 raster.

## 9. Approval Boundary

This is a proposed Gate 6 contract. It becomes authoritative only after project-control approval. It does not authorize implementation, indexing or publication.
