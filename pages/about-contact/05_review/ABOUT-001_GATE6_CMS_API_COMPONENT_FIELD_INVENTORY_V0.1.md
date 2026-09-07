# ABOUT-001 Gate 6 CMS / API / Component Field Inventory V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / `/about/` |
| Date | 2026-09-01 |
| Review ID | `ABOUT-001-G6-PCR-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Purpose | Gate 7-readiness inventory only; not a handoff package or implementation |

## 1. Scope Isolation

Every page, menu, relation, media, route, metadata, Schema, cache key and form-prefill query must be filtered by `site_scope=tio2-my` before resolution. If the Malaysia record is absent, return no Malaysia page data. Never fall back to TIOVAR, a frozen site or any other `site_scope`.

## 2. Page Singleton Fields

| Group | Fields | Rules |
|---|---|---|
| Identity | `page_id`, `site_scope`, `language`, `page_type`, `slug`, `path`, `canonical_url` | Fixed to the SEO/GEO contract |
| Metadata | `seo_title`, `meta_description`, `robots_by_environment`, `og_title`, `og_description`, `og_image_asset_id` | OG image conditional on approved media |
| Breadcrumb | ordered `label`, `path` | Home → About |
| Hero | `eyebrow`, `h1`, `paragraphs_richtext`, `primary_cta`, `secondary_cta`, `source_ref_id`, `reviewed_at`, `media_asset_id` | Inline links use Page IDs/routes; media conditional |
| Who We Are | `intro`, ordered `fact_rows[]`, `source_ref_id`, `reviewed_at`, `independent_audit_status` | Per-row evidence gating |
| Why Malaysia | ordered `items[]` with `title`, `body`, `claim_status` | Neutral, approved wording only |
| What We Do | ordered `items[]` with `title`, `body`, `claim_status` | No delivery/compliance guarantee |
| Markets | `intro`, ordered `market_cards[]`, `hub_link` | Four priority website markets; do not infer customer presence |
| Applications | ordered `application_cards[]`, `hub_link` | Child route eligibility required |
| How We Work | ordered `steps[]` | Process principles, not certified controls |
| Documents | `intro`, ordered `document_links[]` | TDS/SDS → Documents Hub; Other Documents → Request Documents |
| Company Facts | ordered `fact_rows[]` | Must share evidence status with Who We Are, not duplicate uncontrolled text |
| Final CTA | `heading`, `body`, `primary_cta`, `secondary_cta`, `media_asset_id` | Media conditional; body CTAs fixed |
| Governance | `content_version`, `approved_baseline_id`, `evidence_state`, `source_records[]` | Internal status never buyer-visible |

## 3. Reusable Record Types

### 3.1 Evidence-aware fact

```text
FactRecord
  key
  label
  value_richtext
  evidence_status: verified_project | company_provided | restricted | not_public
  source_ref_id
  source_date
  reviewed_at
  qualifier
  schema_mapping: none | organization_name | place_name | place_address
```

`restricted` and `not_public` records are excluded from public HTML, API and Schema and consume 0px.

### 3.2 Internal link

```text
LinkRecord
  label
  target_page_id
  approved_path
  route_status
  link_context
```

No public link emits unless its registered path and route status satisfy the relevant release rule. Shared Global RFQ is the exception in visibility: it remains present and a false route state becomes `RELEASE_BLOCKER`.

### 3.3 Media asset

```text
MediaRecord
  asset_id
  site_scope
  source
  license_or_authorization
  rights_owner
  approved_usage
  claim_neutrality_status
  alt_text
  decorative
  review_status
```

Missing or unapproved media records render no image and collapse the media region. Images do not provide claim evidence.

## 4. Body Link Contract

| Context | Label / relation | Target |
|---|---|---|
| Breadcrumb | Home | `/` |
| Hero copy | Malaysia-based rutile titanium dioxide manufacturer and supplier | `/products/` |
| Hero copy | Paints and coatings | `/applications/titanium-dioxide-for-coatings/` |
| Hero copy | Plastics | `/applications/titanium-dioxide-for-plastics/` |
| Hero copy | Masterbatch | `/applications/titanium-dioxide-for-masterbatch/` |
| Hero copy | Printing inks | `/applications/titanium-dioxide-for-printing-inks/` |
| Hero copy | Paper | `/applications/titanium-dioxide-for-paper/` |
| Hero copy | Titanium dioxide supplier in Malaysia | `/` |
| Who We Are | Rutile titanium dioxide grades / view grades | `/products/` |
| Markets | EU / UK / India / Brazil | Registered Market child paths; route-gated |
| Markets | View All Markets | `/markets/` |
| Applications | five application cards | Registered Application child paths; route-gated |
| Applications | View All Applications | `/applications/` |
| Documents | TDS | `/documents/` |
| Documents | SDS | `/documents/` |
| Documents | Other Documents | `/request-documents/` |
| Body CTAs | Request a Quote | `/request-a-quote/` |
| Body CTAs | Contact Us | `/contact/` |

Application child paths remain `PROVISIONAL_URL` in the current keyword master. Their route verification is a release blocker; this inventory does not promote them to approved public routes.

## 5. Component and State Mapping

| Component | Source | Conditional behavior |
|---|---|---|
| Global Header / Mobile Menu / Footer | Shared Global Chrome V0.5 and Production SVG | Never locally fork; permanent RFQ; About active marker without visible `CURRENT` |
| Breadcrumb | Page singleton | Always visible when page renders |
| Hero | Approved copy + evidence state | Source-qualified fields; media independently gated |
| Fact rows | Evidence-aware records | Remove row, divider and spacing atomically when unavailable |
| Four-card modules | Approved content records | Remove unsupported item atomically; no disabled placeholder |
| Markets / Applications | Page relations | Route-gated; no broken card or hidden Schema link |
| Documents | Fixed link decision | No legacy `/documents/tds-sds-coa/` route |
| CTA band | Approved body CTA labels | Media optional; CTAs stay usable and route-correct |

## 6. Public View Model

```text
AboutPageViewModel
  page: identity + metadata
  chrome: shared_global_chrome_reference
  evidence_state
  hero
  who_we_are
  why_malaysia
  what_we_do
  markets
  applications
  how_we_work
  documents
  company_facts
  final_cta
  visible_source_notes
  schema_graph
```

Public payload invariants:

1. No internal gate, evidence or release status is buyer-visible.
2. Restricted fields are absent, not null-labelled, disabled or replaced with guesses.
3. Visible facts and Schema change atomically.
4. Media has independent rights/claim gating and cannot unlock a fact.
5. Duplicate company facts resolve from one evidence-aware source record.
6. No cross-scope content, navigation, cache or form-prefill fallback.

## 7. Gate Boundary

This is an inventory for project-control review. It is not a Gate 7 manifest, CMS design, API implementation, component specification or development instruction. No code or external repository work is authorized.
