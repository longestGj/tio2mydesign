# ABOUT-001 Gate 6 CMS / API / Component Field Inventory V0.2

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / `/about/` |
| Review ID | `ABOUT-001-G6-PCR-02` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Purpose | Gate 7-readiness inventory only; not a handoff package |

## 1. Scope Isolation

Every content, menu, media, route, cache, metadata, Schema and form-prefill query must filter `site_scope=tio2-my` before resolving relations. A missing Malaysia record returns no Malaysia page data and never falls back to TIOVAR, a frozen site or another scope.

## 2. Required Fields

| Group | Fields | PCR-02 rule |
|---|---|---|
| Identity | `page_id`, `site_scope`, `language`, `page_type`, `slug`, `path`, `canonical_url` | Fixed ABOUT-001 values |
| Metadata | `seo_title`, `meta_description`, `robots_by_environment`, OG fields | Follow SEO/GEO/Schema V0.2 |
| Hero | `eyebrow`, `h1`, approved rich text, two CTAs, retained media reference | No buyer-visible source block |
| Who We Are | ordered fact records | First label is `Operating Company`; no buyer-visible source block |
| Body modules | Why Malaysia, What We Do, Markets, Applications, How We Work, Documents, Company Facts, final CTA | Preserve Gate 5 visible copy and order |
| Links | target Page ID, approved path, route status | TDS/SDS → `/documents/`; Other Documents → `/request-documents/` |
| Evidence | internal `source_records[]`, claim status, evidence status | Internal governance only; never buyer-visible status text |
| Media | source, rights/authorization, usage, neutral ALT, decorative flag | Retained visuals do not establish facts or Schema |
| Governance | content version, baseline ID, user-exception IDs | Internal only |

## 3. Fact Record

```text
FactRecord
  key
  public_label
  public_value
  internal_evidence_status
  internal_source_ref
  schema_mapping
```

For the company-name record:

- `public_label = Operating Company`;
- `schema_mapping = Organization.name`;
- Organization `legalName = absent`.

For Taiping location:

- `schema_mapping = conditional Place`;
- Organization registered `address = absent`.

Frozen records are absent from public HTML/API/Schema and consume no layout space.

## 4. Media Record

```text
MediaRecord
  asset_id
  site_scope
  source_and_rights_internal
  approved_visual_usage
  neutral_alt
  decorative
  schema_image_eligible = false unless separately approved
```

Neutral ALT must not identify a retained visual as an IKHLAS factory, warehouse, inventory, customer shipment or actual Port Klang movement.

## 5. Body Link Contract

| Relation | Target |
|---|---|
| Breadcrumb Home | `/` |
| Product references / View grades | `/products/` |
| Broad Malaysia supplier link | `/` |
| Markets Hub | `/markets/` |
| Applications Hub | `/applications/` |
| TDS / SDS | `/documents/` |
| Other Documents | `/request-documents/` |
| Request a Quote | `/request-a-quote/` |
| Contact Us | `/contact/` |

Registered child paths remain route-gated. Route readiness is implemented at Gate 8 and checked at Gate 9; a false required route blocks release rather than hiding the shared RFQ.

## 6. Component Contract

- Header, Mobile Header/Menu, Footer, RFQ and Logo consume shared Global Chrome V0.5.
- Old ABOUT state boards are excluded from current authority.
- No buyer-visible `CURRENT` text.
- No page-local Header/Footer fork.
- Evidence-restricted fields omit atomically without placeholder, guessed value or hidden Schema.
- Internal source/evidence status is not rendered because the user removed the public source block.

This inventory is not implementation authorization.
