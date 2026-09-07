# CONV-DOC Gate 7 CMS / API / Component / Field Inventory V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `CONV-DOC-G7-HANDOFF-01` |
| Review ID | `CONV-DOC-G7-PCR-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 8 | `LOCKED / NOT_AUTHORIZED` |

Names below define semantic contracts, not a required framework, database table or endpoint implementation.

## 1. Page record

| Field | Type | Required | Fixed/validation |
|---|---|---:|---|
| `site_scope` | enum/internal | yes | exactly `tio2-my` |
| `page_id` | string/internal | yes | `CONV-DOC` |
| `route` | route | yes | `/request-documents/` |
| `language` | locale | yes | `en` |
| `page_type` | enum | yes | Utility conversion page |
| `primary_keyword_status` | enum/internal | yes | `NO_PRIMARY_KEYWORD`; never Buyer Clean |
| `seo_title` | string | yes | `Request Documents | TiO2 Malaysia` |
| `meta_description` | string | yes | Exact Gate 7 SEO contract value |
| `canonical_url` | URL | yes | clean registered URL; query-free |
| `robots_policy` | controlled enum | yes | Gate 10 controlled; Gate 6 `noindex, follow` is candidate only |

## 2. Buyer-visible content fields

| Field | Exact value/behavior |
|---|---|
| `breadcrumb_home_label` | `Home` |
| `breadcrumb_current_label` | `Request Documents` |
| `hero_eyebrow` | `Controlled document request` |
| `hero_h1` | `Request Documents` |
| `hero_body` | `Select a product grade and the documentation your team needs, then provide the business details required for review.` |
| `step_1_title` | `Your Details` |
| `step_1_body` | `Provide your business contact information.` |
| `step_2_title` | `Request Details` |
| `step_2_body` | `Choose one Product Grade and at least one document type.` |
| `step_3_title` | `Human Review` |
| `step_3_body` | `Our team reviews the details and follows up when needed.` |
| `minimum_information_note` | `Please do not include passwords, payment details, personal identification numbers or confidential formulations.` |
| `prefill_heading` | `Review your prefilled context` |
| `prefill_body` | `These values came from your previous selection or a supported link. You can change or remove them before submitting.` |
| `review_heading` | `Check your request before submitting` |
| `privacy_notice` | `We use the information you provide to review and respond to your document request. Learn more in our Privacy Policy.` |
| `privacy_route_ref` | `/privacy-policy/` |
| `submit_label` | `Request Documents` |

## 3. Eight-field form contract

| # | Key | Control | Required | Helper / error |
|---:|---|---|---|---|
| 1 | `full_name` | single-line text | yes | Empty: `Enter your full name.` |
| 2 | `company` | single-line text | yes | Empty: `Enter your company name.` |
| 3 | `business_email` | email/text | yes | Helper: `Use the business email where our team can follow up.` Invalid: `Enter an email in the format name@company.com.` |
| 4 | `country_region` | single-line text | yes | Placeholder: `Enter your country or region`; helper: `Enter the country or region where your company is based.`; empty: `Enter your country or region.` |
| 5 | `product_grade` | single select | yes | Empty: `Select a Product Grade.` |
| 6 | `document_types` | multi-select group | yes, ≥1 | Empty: `Select at least one Document Type.` |
| 7 | `application_industry` | single-line visible context | no | `Add context to help the reviewer understand your request.` |
| 8 | `additional_requirements` | multiline text, max 500 | conditional | Other-only empty: `Describe the document you need.` Over limit: `Keep Additional Requirements to 500 characters or fewer.` |

`additional_requirements` is required only when `other` is the sole document type. Switching selection never clears entered text.

## 4. Product Grade options

Ordered allowlist:

`M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`.

No extra, inferred, deprecated or cross-scope option may appear. The selected value never creates fit, availability, document or comparison claims.

## 5. Document Type options

| Value | Public label | Description |
|---|---|---|
| `technical_product` | `Technical Data & Product Documentation` | Technical data and product information |
| `safety` | `Safety Documentation` | Safety and handling information |
| `quality_coa` | `Quality & COA Documentation` | Quality and COA-related information |
| `origin_supplier_qualification` | `Origin & Supplier Qualification Documentation` | Origin and supplier-qualification information |
| `other` | `Other Documentation` | Another document-related need |

Do not add a sixth regulatory/compliance option. The values route requests only and never prove a file exists.

## 6. Prefill normalization

| Semantic input | Public behavior | Invalid/stale behavior |
|---|---|---|
| `prefill.product_grade` | Populate allowlisted Grade visibly; editable/removable | Discard and leave unselected |
| `prefill.application_industry` | Populate supported visible optional context; editable/removable | Discard or leave blank |
| `prefill.document_types[]` | Populate allowlisted types visibly; editable/removable | Remove unsupported values |
| `source_context.page_id` | Internal attribution only | Ignore |
| `source_context.market_id` | Internal attribution only; never fills buyer fields | Ignore |

Hidden metadata cannot satisfy a visible required field. No Market value populates Country / Region, selects a document or changes scope/applicability. Prefill values never alter canonical, robots, metadata or Schema.

## 7. Request and receiver contract

The receiver accepts the eight normalized public fields plus internal `site_scope`, page identity and approved source attribution. Server-side validation repeats all required, allowlist, conditional and length rules.

Required receiver outcomes:

| Semantic response | UI state |
|---|---|
| Explicit positive receipt acknowledgement | `RECEIPT_CONFIRMED` |
| Validation rejection | `VALIDATION_FAILED`; preserve values and map safe field errors |
| Timeout/network/server/ambiguous response | `SUBMISSION_UNCONFIRMED`; preserve values and allow retry |
| Receiver/configuration unavailable | Internal release blocker; do not knowingly release broken form |

Do not expose raw server errors, endpoint details, internal IDs or fabricated ticket numbers. A transport success without explicit receipt acknowledgement is not success.

Failure must not claim receipt or fall back to Contact, an unverified email/phone or another workflow.

## 8. State copy

| State | Exact/required copy |
|---|---|
| Error summary heading | `Review the highlighted fields` |
| Submitting button | `Submitting…` |
| Submitting helper | `Keep this page open while we submit your request.` |
| Failure heading | `Something went wrong` |
| Failure body | `Your information is still here. Please try submitting again.` |
| Retry action | `Try again` |
| Success heading | `Document Request Received` |
| Success body | `Thank you. We’ve received your document request. Our team will review the details and contact you at the business email provided if additional information is needed.` |
| Success boundary | `Document availability and applicable scope are confirmed during review.` |
| Success secondary action | `Return to Documents` → `/documents/` |

## 9. Component mapping

| Component | Ownership/behavior |
|---|---|
| Header/Mobile Header/Mobile Menu/Footer | Shared Global Chrome reference; page-local fork prohibited |
| Breadcrumb/Hero/Stepper | Page-local semantic content |
| Prefill review | Conditional; omit without valid visible context |
| Form | One semantic form; eight fields; one page-body submit |
| Error summary | Focusable; links to invalid fields |
| Review rows | Show only supplied values; no approval/applicability claims |
| Outcome panel | Mutually exclusive submitting/failure/success states |

## 10. Analytics and logging

Analytics is optional and subordinate to the shared consent contract. If implemented, attempt, failure and receipt-confirmed events remain distinct; only explicit receipt acknowledgement may count as success.

No form value, field error, Grade, document type, country, email, company or free text may enter analytics parameters, advertising audiences, URLs or client-visible logs.
