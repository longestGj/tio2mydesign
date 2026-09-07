# CONV-SAMPLE Gate 7 CMS / API / Component Mapping V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `CONV-SAMPLE-G7-HANDOFF-01` |
| Review ID | `CONV-SAMPLE-G7-PCR-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Nature | Implementation contract; no implementation performed |

## 1. Page Record

```text
SampleRequestPage {
  site_scope: "tio2-my"
  page_id: "CONV-SAMPLE"
  route: "/request-sample/"
  language: "en"
  title
  meta_description
  canonical
  breadcrumb
  hero
  prefill_context
  form_sections[]
  privacy_notice
  human_review_steps[]
  faq_items[]
  state_messages
  global_chrome_ref
}
```

The record is fetched only with `site_scope=tio2-my`. Missing local content is an error/release blocker, never permission for cross-scope fallback.

## 2. Form Field Mapping

| Payload key | UI label | Type | Requirement | Gate 7 maximum | Notes |
|---|---|---|---|---:|---|
| `grade_id` | Product grade | enum | required | — | 14 registered grades or `unknown`; unknown is valid |
| `application_id` | Application | enum | required | — | six public categories, `other`, `not_sure` |
| `application_other` | Describe the application | string | required when `application_id=other` | 500 | Buyer-entered unclassified context only |
| `test_objective` | What do you need to evaluate? | string | required | 2000 | Trim for validation; preserve entered value on errors |
| `current_grade_or_target` | Current grade or target requirement | string | optional | 1000 | No technical interpretation |
| `contact_name` | Contact name | string | required | 120 | Trim outer whitespace; do not alter internal name text |
| `company_organisation` | Company or organisation | string | required | 200 | Must support long legal names |
| `business_email` | Business email | email string | required | 254 | Syntax validation only; no deliverability promise |
| `destination_country_market` | Destination country or market | string | required | 120 | Free text; no eligibility/shipping inference |
| `expected_project_annual_use` | Expected project or annual use | string | optional | 500 | Never parse as requested sample quantity |
| `documents_needed[]` | Documents needed for the trial | enum array | optional | 5 values | `tds`, `sds`, `coa`, `coo`, `other_not_sure`; no availability promise |
| `additional_context` | Additional non-confidential context | string | optional | 2000 | Do not request a confidential formulation |

Maximums are Gate 7 storage/validation candidates for project-control review. They must use visible, accessible validation messages and must not silently truncate.

## 3. Grade and Application Enums

```text
grade_id:
  M-350 | M-510 | M-896 | M-996 | M-2196 | M-895 | M-200 |
  M-108 | M-210 | M-340 | M-886 | M-52 | M-2377 | CR-901 | unknown

application_id:
  coatings | plastics | masterbatch | printing_inks | paper |
  specialty_materials | other | not_sure
```

Enum availability does not create a Grade–Application relation. M-2377 is never automatically paired with `specialty_materials`; Rubber is never an enum value.

## 4. Validation Message Mapping

| Condition | Message |
|---|---|
| Invalid full submit | `Check the information you entered.` |
| Grade missing/invalid | `Choose a product grade or select “I do not know the grade”.` |
| Application missing/invalid | `Choose an application, Other or Not sure.` |
| Other description missing | `Describe the application or choose a different option.` |
| Test objective missing | `Describe what you need to evaluate.` |
| Contact name missing | `Enter your contact name.` |
| Company missing | `Enter your company or organisation.` |
| Business email invalid | `Enter a business email address in a valid format.` |
| Destination missing | `Enter your destination country or market.` |
| Any string exceeds maximum | State the field label and allowed character count; preserve the value for correction |

No error may state that a Grade, Application, Destination or document is unsuitable, unavailable or ineligible.

## 5. Prefill Mapping

```text
SamplePrefillInput {
  source_page_id?: allowlisted registered Page ID
  grade_id?: registered grade enum
  application_id?: approved public application enum
  process_context?: approved neutral process enum
  market_id?: allowlisted market Page ID
  destination?: string
  document_needs?: approved document enum[]
  resource_context?: allowlisted non-personal source reference
}
```

Processing order:

1. parse and length-limit public inputs;
2. validate source/value allowlists under `site_scope=tio2-my`;
3. apply PRODUCT V0.3 relationship restrictions;
4. discard invalid values without first-load errors;
5. render accepted context visibly with Change/Remove;
6. let the buyer edit or remove every accepted value;
7. use clean canonical and exclude query values from Schema/metadata/analytics.

## 6. Submission Payload

```text
SampleRequestSubmission {
  site_scope: "tio2-my"
  request_type: "sample_request"
  idempotency_key: opaque per logical request
  form_version: approved implementation version
  privacy_notice_version: approved notice reference
  fields: {
    grade_id
    application_id
    application_other?
    test_objective
    current_grade_or_target?
    contact_name
    company_organisation
    business_email
    destination_country_market
    expected_project_annual_use?
    documents_needed[]
    additional_context?
  }
  source_context?: validated non-personal provenance
}
```

Server-managed metadata such as timestamps and internal audit identifiers must be generated server-side. Do not trust public `site_scope`, timestamps, recipient or receiver values supplied by the browser.

## 7. Receiver Response Contract

```text
ReceiptConfirmed {
  ok: true
  receipt_confirmed: true
  request_reference?: real receiver-generated value
}

SubmissionUnconfirmed {
  ok: false
  receipt_confirmed: false
  error_code: validation | unavailable | timeout | server | ambiguous
  retryable: boolean
}
```

- `RECEIPT_CONFIRMED` requires `ok=true` and `receipt_confirmed=true` from the verified receiver.
- HTTP status, client timer or optimistic UI alone cannot confirm receipt.
- Public errors remain generic and non-sensitive; detailed diagnostics stay protected.
- Retry reuses the logical request's idempotency key until a definitive result or material field change.
- A real request reference may be displayed only if the verified receiver returns it.

## 8. Component Mapping

| Component | Owner | Contract |
|---|---|---|
| Header / Mobile Header / Mobile Menu / Footer | Global Chrome owner | Consume shared V0.5 component and production SVG; no local fork |
| Breadcrumb | CONV-SAMPLE | `Home / Request a Sample`; Home links to `/` |
| Hero | CONV-SAMPLE | Approved eyebrow, H1, support copy and three-stage overview |
| PrefillContext | CONV-SAMPLE | Conditional, editable, removable, neutral and allowlisted |
| SampleRequestForm | CONV-SAMPLE | Exact field order, labels, helpers, validation and privacy notice |
| FormStatePanel | CONV-SAMPLE | Validation, submitting, failure, success and unavailable semantics |
| HumanReview | CONV-SAMPLE | Four descriptive steps; not a live tracker |
| FAQ | CONV-SAMPLE | Four approved questions with accessible disclosure buttons |
| Privacy Policy page/body | Legal/Privacy owner | CONV-SAMPLE renders exact short notice/link and consumes readiness |
| Shared consent/Cookie controls | Shared Legal/Consent owner | Consume shared behavior; no page-private clone |

The internal Interaction State Board is design/review evidence and must not render on the production route.

## 9. State/View-model Invariants

- exactly one primary form state is active;
- first load never shows validation or outcome state;
- values survive validation and unconfirmed submission;
- `Other` detail visibility derives only from Application = Other;
- success content replaces or disables the form only after confirmed receipt;
- service-unavailable state cannot imply request creation;
- shared navigation remains operable in every form state;
- internal readiness values never enter Buyer Clean HTML, accessible names, metadata or Schema.

## 10. Ownership and Dependency Readiness

```text
DependencyReadiness {
  dependency_key
  owner_key
  status: not_implemented | implemented_not_verified | verified_public | revoked
  evidence_ref_internal
  checked_at
}
```

Relevant dependencies:

- `privacy_policy` — Legal/Privacy owner;
- `global_chrome` — Global Chrome owner;
- `shared_consent` — Legal/Consent owner;
- `request_quote_route` — CONV-RFQ owner/shared Chrome consumer;
- `products_prefill`, `grade_prefill`, `applications_prefill`, `markets_prefill` — respective page owners plus CONV-SAMPLE input validation.

Readiness can block Gate 9 or release. It cannot hide, disable, relink, placeholder or clone an approved final-reader surface.

## 11. Boundary

This mapping is `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`. It does not choose a concrete framework, endpoint URL, database, CRM, email recipient or processor and does not authorize implementation.

