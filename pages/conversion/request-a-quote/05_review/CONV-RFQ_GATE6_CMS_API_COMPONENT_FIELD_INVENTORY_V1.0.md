# CONV-RFQ Gate 6 CMS / API / Component Field Inventory V1.0

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Review ID | `CONV-RFQ-G6-PCR-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Purpose | Implementation-neutral Gate 7 readiness; not code or handoff authorization |

## 1. Scope isolation

Every page, content, form configuration, option list, route, metadata, media, cache, analytics and submission query must filter `site_scope=tio2-my` before relation or fallback resolution. Missing Malaysia content/configuration must not read from TIOVAR, a frozen site or another scope.

Minimum record identity:

```text
page_id = CONV-RFQ
site_scope = tio2-my
locale = en
route = /request-a-quote/
page_type = rfq_conversion
```

## 2. Page-content fields

| Key | Type | Required | Approved value/source |
|---|---|---:|---|
| `eyebrow` | text | yes | `B2B QUOTATION REQUEST` |
| `h1` | text | yes | `Request a Titanium Dioxide Quote` |
| `hero_body` | rich/plain text | yes | exact approved original Hero |
| `form_heading` | text | yes | `Quotation request details` |
| `form_intro` | text | yes | exact approved non-confidential-information notice |
| `privacy_notice` | text + link token | yes | exact approved quotation-request notice |
| `privacy_route_ref` | route reference | yes for final system | shared Privacy Policy; readiness gate outside Buyer Clean |
| `other_request_intro` | text | yes | exact approved sibling-workflow explanation |
| `sample_route_ref` | route reference | conditional | `/request-sample/` |
| `documents_route_ref` | route reference | conditional | `/request-documents/` |

Buyer-visible content fields do not carry evidence IDs, approval states or readiness flags.

## 3. Form field inventory

| Field key | Control | Required | Length/rule | Public label |
|---|---|---:|---|---|
| `grade_id` | single select | yes | one registered grade or `not_sure_need_help` | `Product / Grade` |
| `application_id` | single select | yes | approved visible taxonomy or `other_not_sure` | `Application` |
| `quantity_mt` | decimal number | yes | finite value greater than 0 | `Required Quantity` |
| `quantity_unit` | fixed system/display value | yes | `MT`; not buyer editable | `Metric tonnes (MT)` |
| `destination_country` | text | yes | trimmed 1–100 Unicode chars; no automatic country normalization | `Destination Country` |
| `destination_port_city` | text | no | maximum 120 chars | `Destination Port / City (optional)` |
| `company_name` | text | yes | trimmed 2–160 chars | `Company Name` |
| `contact_name` | text | yes | trimmed 2–100 chars | `Your Name` |
| `business_email` | email/text | yes | maximum 254; syntax only | `Business Email` |
| `phone_whatsapp` | text | no | maximum 40; preserve international `+` | `Phone / WhatsApp (optional)` |
| `website` | URL/text | no | complete URL or empty; maximum 2,048 | `Website (optional)` |
| `additional_requirements` | textarea | no | maximum 2,000 chars | `Additional Requirements (optional)` |

No initial upload, payment, password, government ID, residential address, current supplier, exact target price, confidential formulation, marketing consent or compulsory website/phone field is permitted.

## 4. Option inventory

### Product / Grade order

`M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`, `Not sure / Need help`.

### Application order

`Coatings`, `Plastics`, `Masterbatch`, `Printing Inks`, `Paper`, `Specialty Materials`, `Other / Not sure`.

Specialty Materials is a buyer-selectable generic Application context. It must not be automatically created as an M-2377 positive relation. Buyer field combinations do not update the PRODUCT relation matrix.

## 5. Prefill contract

| Input key | Allowed public projection | Invalid/stale behavior |
|---|---|---|
| `source_page_id` | attribution/analytics metadata only | ignore; never render internal ID |
| `grade_id` | matching visible editable select option | clear to neutral/unknown; no error on first load |
| `application_id` | matching visible editable Application option | clear to neutral/Other; never infer grade |
| `market_id` / explicit destination | explicit country text only | clear; broad region such as EU is not written automatically |
| `process_context` | approved neutral text in Additional Requirements | discard unsupported value; no fit claim |
| `document_needs[]` | approved public labels in editable Additional Requirements | remove unsupported values; no availability/version claim |
| `resource_context` | approved neutral public topic in editable Additional Requirements | ignore unsupported/stale value |

All meaningful prefill is visible and editable before submission. Hidden metadata cannot satisfy required fields. Query data is not persisted or submitted unless it remains in the visible form or is approved source attribution metadata.

## 6. Validation/error inventory

Each field has stable label, hint and error IDs in later implementation. The validation summary receives focus after an invalid submit and links to each invalid control. Exact field-error strings remain those approved in `CONV-RFQ_GATE2_FULL_COPY_V1.1.md`.

Required behavior:

- no first-load errors;
- trim for validation without silently rewriting buyer meaning;
- retain all other values after one field fails;
- syntax validation does not claim deliverability/company identity;
- unknown grade is valid;
- invalid quantity does not imply an MOQ or quote eligibility decision.

## 7. Submission request/response contract

### Request projection

Only the visible approved fields, stable workflow/page identity, locale, `site_scope`, and approved non-public operational metadata may be sent. Do not transmit unrelated analytics IDs as qualification facts.

### Response projection

```text
status = receipt_confirmed | validation_rejected | submission_unconfirmed | service_unavailable
receipt_confirmed requires explicit receiver acknowledgement
public_reference is absent unless a real approved reference contract later exists
field_errors map only to registered field keys
```

HTTP success alone does not authorize buyer-visible success if the receiver response is missing, malformed or ambiguous. Timeout/network/ambiguous responses use the failure/retry state and preserve values.

## 8. Component inventory

| Component | Ownership | Gate 6 contract |
|---|---|---|
| Global Desktop Header | shared | V0.5, 84px, fixed RFQ |
| Global Mobile Header | shared | V0.5, 64px, Logo/RFQ/Menu |
| Global Mobile Menu | shared | V0.5, focus-managed, fixed RFQ |
| Global responsive Footer | shared | Deep Navy; Global Chrome + approved legal/privacy framework |
| Breadcrumb | page/shared primitive | Home/current, semantic navigation |
| RFQ Hero | page | exact approved content; no Hero button |
| RFQ Form Surface | page | one semantic form; grouped fields |
| Validation Summary | form shared primitive | focusable, linked field errors |
| Submission Message | form shared primitive | failure/success/unavailable variants with text semantics |
| Other Request Types | page | low-weight conditional sibling route links |
| Cookie Banner/Settings | shared legal/privacy | actual CMP behavior; not page-specific implementation |

## 9. Internal readiness fields

`route_ready`, `form_receiver_ready`, `privacy_route_ready`, `sample_route_ready`, `documents_route_ready`, `canonical_equivalent`, `release_ready` and evidence/approval states are internal delivery fields only. They never appear in Buyer Clean, ALT, accessible names, URLs, analytics labels, metadata or Schema.

## 10. View-model invariants

1. Visible HTML, metadata, GEO and Schema use the same current `tio2-my` record.
2. Restricted/absent facts disappear atomically; no cross-scope fallback.
3. Product relations remain references to PRODUCT V0.3 and are never inferred from a submitted pair.
4. Global Chrome is referenced, not copied into a page-private content model.
5. Success is impossible without explicit positive receipt acknowledgement.
6. Operational unavailability blocks release; it does not hide or relink the global RFQ.

