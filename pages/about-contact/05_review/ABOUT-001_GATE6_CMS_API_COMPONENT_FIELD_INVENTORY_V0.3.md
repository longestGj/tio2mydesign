# ABOUT-001 Gate 6 CMS / API / Component Field Inventory V0.3

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / `/about/` |
| Review ID | `ABOUT-001-G6-PCR-03` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Purpose | Implementation-neutral field readiness; not a Gate 7 handoff package |
| Gate 6 outcome | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE7_AUTHORIZATION` |
| Gate 7 | `LOCKED / NOT_AUTHORIZED` |

Public authorization semantics follow root `D:\23MySec\AGENTS.md` §2.3.

## 1. Scope Isolation

All page, navigation, media, route, cache, metadata, Schema and form-prefill queries filter `site_scope=tio2-my` before relation resolution. Missing Malaysia data never falls back to another scope.

## 2. Public-Authorization Model

```text
ContentFact
  fact_key
  visible_label
  visible_value
  public_authorization_status: user_approved_public | restricted | not_public
  source_ref_internal
  seo_usage: allowed | disallowed
  geo_usage: allowed | disallowed
  schema_mapping: exact property path | description_only | none
```

`user_approved_public` permits SEO/GEO/Schema use only when the output matches the visible fact and the property semantics are exact. It is not a general permission to derive related facts.

## 3. Core Mapping

| CMS fact | Public field | SEO/GEO | Schema |
|---|---|---|---|
| Operating company | `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.` | Allowed | Organization `name` |
| Company summary | Visible About/Hero text | Allowed | Organization `description` |
| Taiping location | Visible fact row and Hero | Allowed | Organization `location` → Place → PostalAddress |
| EU / UK / India / Brazil | Four visible market cards | Allowed | Organization `areaServed` |
| Annual supply >35,000 metric tons | Visible fact row | Allowed | `description_only` |
| 30+ countries | Visible fact row | Allowed | `description_only` |
| 200+ factory customers | Visible fact row | Allowed | `description_only` |
| Port Klang coordination | Visible Hero/fact row | Allowed | `description_only` |
| FCL/LCL | Only if present in the same rendered page | Conditional | `description_only`; otherwise absent |

## 4. Organization and Place Fields

```text
OrganizationRecord
  name
  description
  brand_ref
  location_ref
  area_served_refs[]
  url

PlaceRecord
  place_name
  street_address
  postal_code
  address_locality
  address_region
  address_country
  location_context = manufacturing_site
```

Do not create Organization `legalName` or registered-address fields from these records. Customer counts are not employee counts; market areas are not customer entities.

## 5. Media Fields

```text
MediaRecord
  asset_id
  site_scope
  source
  rights_or_authorization
  approved_usage
  neutral_alt
  schema_image_eligible
  og_image_eligible
```

Body visibility does not automatically set either eligibility flag to true. An exact rights/usage decision is required.

## 6. Page and Link Fields

- Hero, Who We Are and all body modules retain approved visible copy/order.
- Visible company label is `Operating Company`.
- The removed two-line source block is not a public field.
- SEO and social fields include approved title, Meta description, `og:title`, `og:description`, canonical URL and environment robots; social image fields remain conditional on media eligibility.
- TDS/SDS → `/documents/`; Other Documents → `/request-documents/`.
- RFQ → `/request-a-quote/`; Contact → `/contact/`.
- Application/Market child routes remain registry and route-status gated.

## 7. View-Model Invariants

1. HTML, metadata, GEO answer blocks and Schema derive from the same current `tio2-my` fact record.
2. A restricted or absent fact is removed from all four outputs atomically.
3. `description_only` facts are not forced into unrelated numeric, rating, employee, Offer or certification properties.
4. No individual customer/export relation is fabricated from aggregate visible wording.
5. Global Chrome V0.5 remains a shared reference; ABOUT-001 does not fork Header/Footer.
6. Route false states block release when required; fixed RFQ is not hidden or replaced.

## 8. Frozen Fields

SSM/registration, Organization `legalName`, legal status, incorporation, registered office, ISO/certified-QMS, batch traceability, ratings, Offers and hidden facts remain absent from public HTML/API/Schema.

Project control approved and closed this inventory under `ABOUT-001-G6-PCR-03`. It is not a Gate 7 package or implementation authorization; Gate 7 remains locked pending separate user authorization.
