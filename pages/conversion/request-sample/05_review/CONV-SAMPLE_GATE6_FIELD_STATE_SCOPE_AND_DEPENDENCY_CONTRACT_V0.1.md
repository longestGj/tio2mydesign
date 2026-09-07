# CONV-SAMPLE Gate 6 Field, State, Scope and Dependency Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-SAMPLE` / `/request-sample/` |
| Review ID | `CONV-SAMPLE-G6-PCR-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Nature | Implementation-neutral Gate 6 contract; not CMS, API or code delivery |

## 1. Final Field Inventory

### Always required

| Field | Control | Acceptance |
|---|---|---|
| Product grade | Select | Registered grade or `I do not know the grade`; unknown is valid and must not trigger automatic recommendation |
| Application | Select | Approved visible option, `Other` or `Not sure` |
| What do you need to evaluate? | Multiline text | Buyer-written non-confidential test objective |
| Contact name | Single-line text | Required person name for review follow-up |
| Company or organisation | Single-line text | Required B2B identity |
| Business email | Email | Required syntactically valid business contact; no deliverability promise |
| Destination country or market | Single-line text | Placeholder `Enter your destination country or market`; helper `Enter the country or market relevant to this evaluation.` |

### Conditionally required

| Field | Trigger | Acceptance |
|---|---|---|
| Describe the application | Application = `Other` | Required non-empty buyer text; remains unclassified context and creates no public taxonomy or product relation |

### Optional

| Field/group | Acceptance |
|---|---|
| Current grade or target requirement | Non-confidential reference context only |
| Expected project or annual use | Project context, never interpreted as requested sample quantity |
| Documents needed for the trial | `TDS`, `SDS`, `COA`, `COO`, `Other / Not sure`; selection does not confirm availability or release |
| Additional non-confidential context | Only information needed to understand the evaluation; no confidential formulation |

No optional field becomes silently required. Do not add sample quantity, payment, identity-document, residential-address, file-upload, marketing-consent or qualification-proof fields.

## 2. Privacy and Data-minimization Contract

The exact final-reader notice appears immediately above the submit action in every submittable state:

`We use the information you provide to review and respond to your sample request. Learn more in our Privacy Policy.`

- `Privacy Policy` links to `/privacy-policy/`.
- There is no mandatory consent or acknowledgement checkbox.
- The form requests non-confidential information only and retains the approved warnings against complete formulations, payment details and unnecessary sensitive information.
- Legal basis, retention, processors, transfers, recipients and other full-policy disclosures are not invented in the form notice; they belong to the shared Privacy Policy implementation and later verification.

## 3. Prefill Contract

Allowed explicit upstream sources: Products, Grade, Applications and Markets.

Allowed visible keys:

- registered `grade_id` → Product grade;
- approved public `application_id` → Application;
- approved `process_id` → neutral Process Context only;
- explicit `market_id` or destination value → Destination country or market.

Rules:

- every meaningful prefill is visible, editable and removable;
- hidden source metadata never satisfies a visible required field;
- invalid, stale or unrecognized values clear to the neutral state without first-load error;
- source browsing history alone never creates a product/application mapping;
- prefill is context, not recommendation, suitability, availability, regulatory qualification or approval;
- M-2377 relationships, Rubber and M-996/M-2196 behavior follow the PRODUCT V0.3 restrictions in the Gate 6 audit.

## 4. State Machine

```text
FORM_READY_UNPREFILLED
FORM_READY_PREFILLED
UNKNOWN_GRADE_VALID
OTHER_APPLICATION_REQUIRES_DETAIL
  → VALIDATION_FAILED (values retained; focus error summary)
  → SUBMITTING (one active browser attempt; submit disabled)
      → RECEIPT_CONFIRMED (explicit positive receiver acknowledgement only)
      → SUBMISSION_UNCONFIRMED (timeout/network/server/ambiguous response; values retained; retry)

FORM_SERVICE_UNAVAILABLE
  → no request implied
  → no unverified Contact, email, telephone or response-time fallback
```

Exact outcome copy:

- Failure heading: `We could not confirm that your request was received.`
- Failure body: `Your entries are still on this page. Please try again.`
- Success heading: `Your sample request has been received.`
- Success body: `Our team will review the information provided and contact you if clarification is needed. Any sample arrangement will be confirmed separately.`

## 5. Submission and Persistence Boundary

- Success is impossible without an explicit positive receiver acknowledgement that the request was accepted or persisted.
- Client-only timers, optimistic state changes and assumed HTTP success are prohibited.
- During submission, the primary control is disabled and repeat activation is prevented.
- Failure and ambiguous responses preserve all form values and provide a retry.
- The future receiver must define idempotency or deduplication behavior for retries after an ambiguous response.
- No request reference is shown unless a real receiver generates and returns one.
- No personal or form value appears in URL parameters, page metadata, Schema, analytics labels or client-visible diagnostic logs.

## 6. Site-scope and Shared-component Contract

- `site_scope=tio2-my` applies to page content, form configuration, receiver routing, persistence, metadata, Schema, cache, menus and media.
- No other site scope supplies fallback content, recipient, form endpoint, legal copy or media.
- Header, Mobile Header, Mobile Menu and Footer consume Global Chrome V0.5 and the production logo manifest. They are not page-owned components.
- Request a Sample is absent from first-level navigation. Global RFQ remains visible in all shared surfaces and points to `/request-a-quote/`.
- Shared Chrome readiness flags may block release but never produce RFQ OFF, hidden, disabled, empty-slot or Contact-fallback states.

## 7. Dependency Phasing

### Gate 8 implementation

- build the route and semantic form;
- connect the real receiver, persistence and positive acknowledgement;
- implement validation, focus, value retention, retry, duplicate protection and unavailable behavior;
- implement upstream prefill sanitization and allowlisting;
- consume shared Privacy Policy and Global Chrome routes/components under `site_scope=tio2-my`.

### Gate 9 read-only QA

- verify exact visual/copy/field/state parity;
- verify the Privacy link and shared legal route;
- exercise positive, validation, timeout, ambiguous, server-failure, retry and duplicate scenarios;
- verify persistence, receiver ownership, fallback truth, data leakage prevention and cross-scope isolation;
- verify responsive, accessibility, canonical, robots and Schema output.

### Gate 10 release control

- block release if the route, receiver, Privacy Policy, persistence/idempotency, fallback, shared Chrome, canonical or indexing conditions fail;
- require explicit deployment/publication/indexing authorization.

These later items do not block Gate 6 contract review and do not authorize implementation in this project.

