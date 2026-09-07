# CONV-RFQ Gate 6 CMS / API / Component Field Inventory V1.1

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Review ID | `CONV-RFQ-G6-PCR-02` |
| Status | `TARGETED_REVISION / DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Supersedes | V1.0 |
| Sole revision | complete-site Sample/Documents route/link classification |

## 1. Scope isolation

All page, form, options, route, metadata, media, cache, analytics and submission queries filter `site_scope=tio2-my` before relation/fallback resolution. No other site scope supplies missing content or configuration.

```text
page_id = CONV-RFQ
site_scope = tio2-my
locale = en
route = /request-a-quote/
page_type = rfq_conversion
```

## 2. Page-content and route fields

| Key | Required in final system | Approved value/behavior |
|---|---:|---|
| `eyebrow` | yes | `B2B QUOTATION REQUEST` |
| `h1` | yes | `Request a Titanium Dioxide Quote` |
| `hero_body` | yes | exact approved original Hero |
| `form_heading` / `form_intro` | yes | approved copy |
| `privacy_notice` | yes | approved quotation-request notice |
| `privacy_route_ref` | yes | shared Privacy Policy; route readiness later release gate |
| `other_request_intro` | yes | approved sibling-workflow explanation |
| `sample_route_ref` | **yes** | `/request-sample/`; required final-system route/link |
| `documents_route_ref` | **yes** | `/request-documents/`; required final-system route/link |

Neither sibling route reference is conditional. A not-ready route produces an implementation/release blocker and does not remove, disable or relink its approved Buyer Clean entry.

## 3. Form fields

| Key | Control | Required | Rule |
|---|---|---:|---|
| `grade_id` | single select | yes | one registered grade or `not_sure_need_help` |
| `application_id` | single select | yes | visible taxonomy or `other_not_sure` |
| `quantity_mt` | decimal number | yes | finite > 0 |
| `quantity_unit` | fixed value | yes | `MT`, not editable |
| `destination_country` | text | yes | trimmed 1–100 Unicode chars; no automatic normalization |
| `destination_port_city` | text | no | max 120 |
| `company_name` | text | yes | trimmed 2–160 |
| `contact_name` | text | yes | trimmed 2–100 |
| `business_email` | text/email | yes | syntax, max 254 |
| `phone_whatsapp` | text | no | max 40; preserve `+` |
| `website` | URL/text | no | complete URL or empty; max 2,048 |
| `additional_requirements` | textarea | no | max 2,000 |

Option order, validation strings and prohibited initial collection remain defined by the approved Gate 2/5 contract and Inventory V1.0 without change.

## 4. Prefill and response contracts retained

- Visible/editable grade, application, explicit country text and neutral Additional Requirements context only.
- Invalid/stale input clears without first-load error/internal status.
- Broad region does not automatically populate Destination Country.
- Hidden source metadata does not satisfy visible required fields.
- Success requires explicit positive receiver acknowledgement; timeout/network/server/ambiguous response remains failure and preserves values.

## 5. Component inventory

| Component | Ownership | Required behavior |
|---|---|---|
| Desktop/Mobile Header and Mobile Menu | shared | Global Chrome V0.5; fixed RFQ |
| Responsive Footer | shared | Deep Navy plus approved legal/privacy system |
| Breadcrumb/Hero/RFQ Form | page/shared primitives | exact approved structure/copy |
| Validation Summary/Submission Message | form primitives | accessible focus/errors and receipt-only states |
| `Other Request Types` | page | **required module containing both required low-weight sibling links** |
| Cookie Banner/Settings | shared legal/privacy | actual CMP/consent behavior later implemented/verified |

## 6. Sibling link invariants

```text
other_request_types.required = true
sample_link.required = true
sample_link.href = /request-sample/
documents_link.required = true
documents_link.href = /request-documents/
```

Readiness fields are internal release controls only. They cannot drive a public hide/disable/Contact-fallback branch for these approved links. Before complete-site release both routes must resolve to their separate approved workflows.

Removing either link requires user-approved page change control; a CMS null, missing relation or feature flag cannot silently change the approved page.

## 7. View-model invariants

1. Visible HTML, metadata, GEO and Schema use the same `tio2-my` record.
2. No cross-scope fallback.
3. Product relations are not inferred from buyer-selected combinations.
4. Global Chrome is referenced, never copied into a page-local fork.
5. Success requires explicit receipt acknowledgement.
6. Global RFQ and both required sibling links retain their approved destinations; readiness false blocks later release rather than changing Buyer Clean.

## 8. Boundary

This remains an implementation-neutral Gate 6 inventory. It is not Gate 7 handoff or development authorization.

