# CONV-RFQ Gate 7 CMS / API / Component Mapping V1.0

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Package | `CONV-RFQ-G7-HANDOFF-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Implementation | not started; semantic mapping only |

Field names are implementation-neutral. Gate 8 may bind them to the authorized development project's existing architecture without changing public values, requiredness, state semantics, isolation or acceptance.

## 1. Core enums and identities

| Type | Allowed value/rule |
|---|---|
| `SiteScope` | exact `tio2-my` |
| `PageId` | `CONV-RFQ` |
| `Locale` | `en` |
| `WorkflowType` | `rfq` |
| `RouteStatus` | internal `not_implemented`, `implemented_not_verified`, `verified_public`, `revoked` |
| `SubmissionState` | `form_ready`, `validation_failed`, `submitting`, `receipt_confirmed`, `submission_unconfirmed`, `service_unavailable` |
| `GradeId` | 14 registered grades or `not_sure_need_help` |
| `ApplicationId` | six public Application labels or `other_not_sure` |
| `QuantityUnit` | fixed `MT` |

Internal enum/status tokens are never Buyer Clean, accessible names, URLs, analytics labels, metadata or Schema.

## 2. Page singleton fields

| Field | Required | Locked value/behavior | Public projection |
|---|---:|---|---|
| `page_id` | yes | `CONV-RFQ` | internal/API identity |
| `site_scope` | yes | `tio2-my` | never printed |
| `locale` | yes | `en` | HTML language |
| `route` | yes | `/request-a-quote/` | route/canonical |
| `page_type` | yes | `rfq_conversion` | internal/API |
| `primary_keyword` | yes | `titanium dioxide quote supplier` | internal SEO ownership only |
| `seo_title` | yes | `Request a Titanium Dioxide Quote | TiO2 Malaysia` | title/OG |
| `meta_description` | yes | exact Gate 7 package value | head/OG/Schema description |
| `canonical_url` | yes | clean registered absolute URL | head/Schema |
| `robots_staging` | yes | `noindex, nofollow` | environment head |
| `robots_production` | yes | `index, follow` only after Gate 9/Gate 10 | environment head |
| `breadcrumb` | yes | Home + current Request a Quote | HTML/Schema |
| `eyebrow` | yes | `B2B QUOTATION REQUEST` | HTML |
| `h1` | yes | `Request a Titanium Dioxide Quote` | HTML |
| `hero_body` | yes | exact approved original Hero | HTML |
| `form_heading` | yes | `Quotation request details` | HTML |
| `form_intro` | yes | exact approved non-confidential notice | HTML |
| `privacy_notice` | yes | exact approved quotation-request notice | HTML |
| `privacy_route_ref` | yes | shared Privacy Policy | HTML link; readiness release-gated |
| `other_request_intro` | yes | exact approved text | HTML |
| `sample_link_label` | yes | `Request a Sample` | required low-weight link label |
| `sample_route_ref` | yes | `/request-sample/` / `REQUIRED_FINAL_SYSTEM` | required low-weight link |
| `documents_link_label` | yes | `Request Documents` | required low-weight link label |
| `documents_route_ref` | yes | `/request-documents/` / `REQUIRED_FINAL_SYSTEM` | required low-weight link |

## 3. Exact form field contract

| Key | Control | Required | Validation/length | Public label |
|---|---|---:|---|---|
| `grade_id` | single select | yes | registered option | `Product / Grade` |
| `application_id` | single select | yes | registered option | `Application` |
| `quantity_mt` | decimal number | yes | finite > 0 | `Required Quantity` |
| `quantity_unit` | fixed display/system | yes | exact `MT`, not editable | `Metric tonnes (MT)` |
| `destination_country` | text | yes | trimmed 1–100 Unicode chars | `Destination Country` |
| `destination_port_city` | text | no | max 120 | `Destination Port / City (optional)` |
| `company_name` | text | yes | trimmed 2–160 | `Company Name` |
| `contact_name` | text | yes | trimmed 2–100 | `Your Name` |
| `business_email` | email/text | yes | syntax, max 254 | `Business Email` |
| `phone_whatsapp` | text | no | max 40; preserve international `+` | `Phone / WhatsApp (optional)` |
| `website` | URL/text | no | complete URL or empty; max 2,048 | `Website (optional)` |
| `additional_requirements` | textarea | no | max 2,000 | `Additional Requirements (optional)` |

No upload, password, payment/card, government ID, residential address, current supplier, exact desired price, confidential formulation, marketing consent, mandatory phone or mandatory website field may be added.

## 4. Exact option order

### Product / Grade

1. `M-350`
2. `M-510`
3. `M-896`
4. `M-996`
5. `M-2196`
6. `M-895`
7. `M-200`
8. `M-108`
9. `M-210`
10. `M-340`
11. `M-886`
12. `M-52`
13. `M-2377`
14. `CR-901`
15. `Not sure / Need help`

Empty option: `Select a product or grade`.

### Application

1. `Coatings`
2. `Plastics`
3. `Masterbatch`
4. `Printing Inks`
5. `Paper`
6. `Specialty Materials`
7. `Other / Not sure`

Empty option: `Select an application`.

Specialty Materials is generic buyer-entered Application context and must not become an automatic M-2377 positive mapping.

## 5. Exact helpers and field errors

### Helpers

| Field | Helper |
|---|---|
| Destination Port / City | `Add this only if it is already known.` |
| Business Email | `Use the business email where we can respond to this request.` |
| Additional Requirements | `Add any non-confidential specification, packaging, schedule, document or other context that may help us review the request.` |

### Validation summary

- Heading: `Please review the highlighted fields.`
- Body: `Correct the information below and try again. Your other entries are still here.`

### Field errors

| Condition | Exact error |
|---|---|
| Grade empty | `Select a product or grade, or choose “Not sure / Need help.”` |
| Application empty | `Select an application.` |
| Quantity empty/non-numeric/not >0 | `Enter a quantity greater than 0.` |
| Destination Country empty | `Enter a destination country.` |
| Destination Country >100 | `Keep the destination country to 100 characters or fewer.` |
| Port/City >120 | `Keep the destination port or city to 120 characters or fewer.` |
| Company Name missing/<2 | `Enter your company name.` |
| Company Name >160 | `Keep your company name to 160 characters or fewer.` |
| Your Name missing/<2 | `Enter your name.` |
| Your Name >100 | `Keep your name to 100 characters or fewer.` |
| Business Email empty | `Enter your business email.` |
| Business Email invalid/>254 | `Enter a business email in the format name@company.com.` |
| Phone/WhatsApp >40 | `Keep the phone or WhatsApp number to 40 characters or fewer.` |
| Website invalid/>2,048 | `Enter a complete website address or remove this optional value.` |
| Additional Requirements >2,000 | `Keep additional requirements to 2,000 characters or fewer.` |

First load shows no errors. Summary focuses after invalid submit; summary links focus controls; other values remain.

## 6. Exact submission messages

| State | Exact public content/action |
|---|---|
| Submit normal | `REQUEST QUOTE` |
| Submitting | `SUBMITTING…`; prevent duplicate activation; values visible |
| Failure heading | `Something went wrong while submitting your request.` |
| Failure body | `Your information is still here. Please try again.` |
| Failure action | `TRY AGAIN` |
| Success heading | `Thank you. We’ve received your quotation request.` |
| Success body | `Our team will review the details and contact you using the information provided.` |
| Unavailable heading | `The quotation request form is temporarily unavailable.` |
| Unavailable body | `No request has been submitted. Please return later and try again.` |

`receipt_confirmed` is valid only after explicit positive receiver acknowledgement. Failure/unavailable never adds Contact/email/phone/reference/SLA. Success never becomes a quotation/order/approval.

## 7. Prefill mapping

| Input | Public projection | Invalid/stale behavior |
|---|---|---|
| `source_page_id` | internal attribution only | ignore; never render ID/status |
| `grade_id` | matching visible editable option | clear to neutral/unknown |
| `application_id` | matching visible editable option | clear to neutral/Other; never infer grade |
| explicit destination country | visible editable text | clear if invalid/over 100; no first-load error |
| `market_id` broad region | attribution only | never automatically write EU/region into country field |
| `process_context` | approved neutral editable Additional Requirements text | discard unsupported value |
| `document_needs[]` | approved public labels in editable Additional Requirements | remove unsupported; no availability claim |
| `resource_context` | approved neutral public topic in editable Additional Requirements | ignore unsupported/stale |

All meaningful prefill remains visible/editable. Hidden metadata cannot satisfy required fields. Query values do not create canonical/metadata/Schema variants.

## 8. Submission request and response mapping

### Permitted request payload

- exact visible approved fields;
- `page_id`, `site_scope`, `workflow_type`, `locale`;
- approved source attribution metadata that is not used as a public qualification claim;
- an implementation-generated request/idempotency token only when privacy-safe and not presented as proof of receipt.

### Prohibited payload expansion

- page browsing history beyond approved source attribution;
- analytics/ad identifiers as qualification facts;
- payment, credentials, uploads or hidden inferred product/market relations;
- unrelated fields from another `site_scope`.

### Response mapping

| Receiver outcome | Public state |
|---|---|
| explicit positive acknowledgement | `receipt_confirmed` |
| registered field errors | `validation_failed`; retain values and map only known keys |
| timeout/network/server/malformed/ambiguous response | `submission_unconfirmed`; retain values; retry |
| configured service unavailable | `service_unavailable`; release blocked until readiness |

HTTP 2xx alone does not override an absent/ambiguous receiver acknowledgement.

## 9. Layer mapping

| Layer | Contract |
|---|---|
| CMS/content | one `tio2-my` singleton plus governed form configuration/options/messages/routes; approved values not editor-invented |
| Public API/view model | returns only current scoped approved page/form data; internal evidence/readiness states excluded from Buyer Clean projection |
| Route/rendering | clean `/request-a-quote/`; semantic server-rendered content; query-prefill safely projected client/server without canonical change |
| Form controller | exact validation/state/receiver mapping; explicit receipt; duplicate prevention/value retention |
| Components | shared Header/Footer/Menu; Breadcrumb; Hero; Form Surface; Field Groups; Validation Summary; State Message; required Other Request Types |
| Metadata/Schema | exact Title/Meta/canonical/robots by environment; WebPage + BreadcrumbList only |
| Cache | keys/tags include `tio2-my`, Page ID, route, content/config revision; no cross-scope invalidation/fallback |
| Analytics | page identity and privacy-safe events only; success only on receipt-confirmed; no form values/errors |

## 10. Required route/component invariants

```text
other_request_types.required = true
sample_link.required = true
sample_link.href = /request-sample/
documents_link.required = true
documents_link.href = /request-documents/
```

Readiness false is internal and cannot hide/disable/relink these links. Global Chrome fixed RFQ is also invariant and never disabled with form submission.

## 11. Privacy/analytics configuration fields

Later implemented configuration must identify and expose for Gate 9 audit:

- receiver/controller/operational owner;
- Web3Forms plan, endpoint class, DPA/data flow, subprocessors/integrations and native security processing;
- retention period or criterion;
- privacy contact and rights workflow;
- transfer mechanism/regions where applicable;
- CMP vendor/configuration and Cookie/storage inventory;
- GA4/GTM identifiers and consent-mode/firing behavior;
- explicit `remarketing_enabled=false`;
- explicit `turnstile_enabled=false`, `recaptcha_enabled=false`.

These are governed operational fields, never default Buyer Clean body text.

## 12. View-model invariants

1. `site_scope=tio2-my` precedes all lookup/fallback resolution.
2. HTML, metadata, GEO and Schema share one approved page record.
3. Buyer selections never update the PRODUCT relation matrix.
4. Success requires explicit receiver receipt acknowledgement.
5. Shared Chrome is referenced, not copied.
6. Required sibling links and fixed RFQ never enter a conditional hide/Contact-fallback branch.
7. Restricted/internal fields never enter public HTML, accessible names, URL, analytics, metadata or Schema.
