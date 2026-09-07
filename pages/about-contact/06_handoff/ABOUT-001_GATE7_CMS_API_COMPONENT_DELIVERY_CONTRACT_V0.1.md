# ABOUT-001 Gate 7 CMS / API / Component Delivery Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / `/about/` |
| Review ID | `ABOUT-001-G7-PCR-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Implementation | External Gate 8 only; not authorized by this package |

## 1. Singleton Content Model

```text
AboutPageRecord
  page_id = ABOUT-001
  site_scope = tio2-my
  language = en
  slug = about
  canonical_url
  metadata
  breadcrumb
  hero
  who_we_are_facts[]
  why_malaysia_items[]
  what_we_do_items[]
  market_relations[]
  application_relations[]
  how_we_work_items[]
  document_links[]
  company_facts[]
  final_cta
  evidence_state
  internal_source_records[]
  approved_baseline_id
```

Exact public strings and mappings come from the Gate 7 Source Map, not from OCR, an older draft or another site scope.

## 2. Field Types

| Record | Required fields | Rules |
|---|---|---|
| Metadata | title, Meta description, canonical, robots by environment, OG/Twitter fields | Same visible-fact scope; image conditional |
| Rich text | ordered paragraph nodes and inline link marks | No raw unscoped external URL in CMS copy; use Page ID/route relation |
| Fact | key, label, value, authorization status, Schema mapping | `Operating Company`; no `legalName` |
| Card | key, title, body, icon/media ref, target relation, display order | Preserve exact order and copy |
| CTA | label, target Page ID/path, visual role | Body CTAs fixed to RFQ and Contact |
| Market relation | Page ID, approved path, route status, fallback Hub | Four approved markets only |
| Application relation | Page ID, approved/provisional path, route status, fallback Hub | No broken provisional child link |
| Document relation | document type, label, path, route status | TDS/SDS Hub; Other Documents request route |
| Media | asset ID, source, rights, approved usage, neutral ALT, decorative flag, Schema/OG eligibility | Absence of rights blocks that media usage |
| Internal evidence | source, source date, review date, authorization state | Not buyer-visible unless separately approved |

## 3. Public Authorization and State Model

```text
public_authorization_status:
  user_approved_public
  restricted
  not_public

evidence_state:
  sufficient
  partial
  restricted
```

- `user_approved_public` permits visible, SEO, GEO, social and Schema use within the exact fact scope.
- `restricted` and `not_public` facts are absent from all public outputs.
- A removed field collapses its row, divider and spacing; no dash, `N/A`, pending badge or hidden Schema.
- Shared Header/Footer/RFQ remain outside page evidence-state suppression.

## 4. Public View Model

```text
AboutPageViewModel
  page_identity
  metadata
  chrome_reference
  breadcrumb
  body_modules[]
  visible_links[]
  media[]
  schema_graph
```

Invariants:

1. Query `site_scope=tio2-my` before resolving the page or any relation.
2. Missing Malaysia data returns no Malaysia body and never falls back across scope.
3. HTML, metadata and JSON-LD are server-rendered from the same versioned record.
4. Body modules preserve Source Map order; no client-only reordering.
5. Restricted facts and their Schema fragments change atomically.
6. Internal statuses, review IDs and evidence notes never enter the public payload.

## 5. Component Mapping

| Surface | Component responsibility | Empty/restricted behavior |
|---|---|---|
| Global Header | Consume Global Chrome V0.5; About active underline/weight; fixed RFQ | Never locally fork or hide RFQ |
| Mobile Header/Menu | Consume shared 64px surface, fixed order and Production SVG | Inactive surface inaccessible/unfocusable |
| Breadcrumb | Home → About | Always present with semantic current item |
| Hero | Approved long rich text, inline links, media composition and CTA pair | If media rights fail, release is blocked unless a later approved visual fallback exists |
| Fact table | Evidence-aware rows | Omit restricted row atomically |
| Four-card modules | Ordered records | No invented filler or disabled placeholder |
| Markets | Four approved cards plus Hub action | Child route or approved Hub fallback |
| Applications | Four visible cards plus Hub action | Child route or Applications Hub fallback |
| Documentation | TDS, SDS, Other Documents | Exact route decision; no legacy TDS/SDS/COA path |
| Final CTA | Request a Quote / Contact Us | Route readiness release-gated |
| Global Footer | Consume shared Deep Navy Footer and fixed RFQ | No page-local footer schema or link fork |

## 6. Media Contract

The frozen full-page PNGs are not media-library source files. Each visible body image must have a separate MediaRecord. Required fields:

- source and rights/authorization;
- permitted website placement;
- neutral ALT or decorative status;
- whether OG/Schema image use is permitted.

ALT must not identify an image as an IKHLAS factory, warehouse, stock or actual shipment unless that exact identity is separately authorized. Body approval alone does not set `schema_image_eligible` or `og_image_eligible` to true.

## 7. Schema Output Contract

Generate one coherent graph with stable IDs from Gate 6 SEO/GEO/Schema V0.3. Use:

- AboutPage;
- Brand;
- Organization `name`, `description`, `brand`, `location`, `areaServed`;
- Place/PostalAddress;
- four AdministrativeArea nodes;
- BreadcrumbList.

Do not emit `legalName`, registered address, SSM/tax ID, employee count, Review, AggregateRating, Offer, certification, ISO/QMS, traceability or hidden facts.

## 8. Cache and Version Isolation

Cache keys, API cache tags, preview queries, page invalidation and metadata/Schema caching include `site_scope=tio2-my` plus Page ID/slug and content version. An invalidation for another site scope must not populate or evict Malaysia content as a fallback source.

## 9. Gate Boundary

This is a development-ready specification submitted for review, not implementation authority. Gate 8 remains not authorized and `HANDED_OFF=NO`.
