# CONV-SAMPLE Gate 7 Development Handoff Package V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `CONV-SAMPLE-G7-HANDOFF-01` |
| Review ID | `CONV-SAMPLE-G7-PCR-01` |
| Page | `CONV-SAMPLE` / `/request-sample/` |
| Date | 2026-09-03 |
| Gate 6 | `CONV-SAMPLE-G6-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 7 | `AUTHORIZED / DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Handoff | `NO` |
| Gate 8 / development | `LOCKED / NOT_AUTHORIZED` |

This document converts the approved Gate 5 visual/content baseline and approved Gate 6 contracts into an implementation-executable specification. It is not an actual handoff and does not authorize development.

## 1. Immutable Product Contract

| Item | Required value |
|---|---|
| Page ID | `CONV-SAMPLE` |
| Route | `/request-sample/` |
| Page type | Sample conversion page |
| Priority | P1 |
| Language | `en` |
| Site scope | `tio2-my` |
| Primary keyword | `titanium dioxide sample supplier` |
| H1 | `Request a Titanium Dioxide Sample for Technical Evaluation` |
| Primary action | `Submit Sample Request for Review` |
| Outcome | Receipt for human review only; any sample arrangement is separate |

The page must not become a quote form, product-comparison page, recommendation engine, document-release flow, inventory check, shipping request or automatic approval workflow.

## 2. Approved Page Composition

Required Buyer Clean order:

1. shared Header;
2. breadcrumb `Home / Request a Sample`;
3. Hero;
4. Prefill Context only when meaningful valid upstream context exists;
5. full-width Sample Request form;
6. full-width Human Review band;
7. FAQ;
8. shared Footer.

The Desktop composition remains a single main page flow. Do not reintroduce a short right sidebar, sticky review card or decorative filler. Tablet and Mobile retain the same task order with one-column form reflow.

## 3. Exact Critical Copy

### Hero support

`Share the Malaysia-origin titanium dioxide grade you are considering—or tell us if you are not sure—together with your application, destination and test objective. We will use this context to review the request.`

### Privacy notice

`We use the information you provide to review and respond to your sample request. Learn more in our Privacy Policy.`

`Privacy Policy` links to `/privacy-policy/`. Do not add a mandatory acknowledgement checkbox.

### Submit helper

`Submitting starts a human review. Any sample arrangement will be confirmed separately.`

### Failure

- Heading: `We could not confirm that your request was received.`
- Body: `Your entries are still on this page. Please try again.`
- Action: `Try again`.

### Success

- Heading: `Your sample request has been received.`
- Body: `Our team will review the information provided and contact you if clarification is needed. Any sample arrangement will be confirmed separately.`

### Service unavailable

- Heading: `We cannot confirm sample requests right now.`
- Body: `The sample request form is not available. No request has been confirmed. Please try again later.`

No unverified email, phone, response time or Contact fallback may be added.

## 4. Human Review and FAQ

Human Review sequence:

1. `Request received` — the request and provided context are received.
2. `Human review` — a person reviews Grade, Application, Destination and test objective.
3. `Clarification if needed` — clarification may be requested when information is insufficient.
4. `Separate outcome` — any outcome is communicated separately after review.

Required FAQ questions:

1. `What information is needed for a sample request?`
2. `Can I submit if I do not know the grade?`
3. `Does submission mean a sample is approved?`
4. `What happens if more information is needed?`

The detailed approval explanation remains only in the relevant FAQ. Do not repeat an enumerated disclaimer in Hero, submit helper, Human Review or Success.

## 5. Field Contract

### Required

- Product grade;
- Application;
- What do you need to evaluate?;
- Contact name;
- Company or organisation;
- Business email;
- Destination country or market — required single-line free text.

### Conditionally required

- Describe the application, only when Application = `Other`.

### Optional

- Current grade or target requirement;
- Expected project or annual use;
- Documents needed for the trial: `TDS`, `SDS`, `COA`, `COO`, `Other / Not sure`;
- Additional non-confidential context.

Do not add sample quantity, payment, residential address, identity document, file upload, port, Incoterm, packaging, detailed delivery address or marketing-consent fields.

## 6. Grade, Application and Product Boundaries

Grade choices remain the registered 14-grade set plus `I do not know the grade`. Application choices remain Coatings, Plastics, Masterbatch, Printing Inks, Paper, Specialty Materials, Other and Not sure.

- M-2377 may be neutrally selected or prefilled with Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate context only from an approved explicit upstream source.
- M-2377 → Specialty Materials remains `DO_NOT_RENDER` as a public relationship.
- Rubber is accepted only as buyer-entered Other text and creates no taxonomy or mapping.
- M-996 and M-2196 remain independent choices with no comparison, ranking, superiority, equivalence, alternative or substitution statement.
- `NO_PUBLIC_MAPPING` never becomes `not applicable`, `not suitable` or another negative conclusion.

No field combination creates an automated product recommendation or technical approval.

## 7. Prefill and Query Contract

Allowed upstream owners: Products Hub, Grade pages, Applications pages and Markets pages.

Allowed inputs:

```text
source_page_id
grade_id
application_id
process_context
market_id
destination
document_needs[]
resource_context
```

- allowlist source page IDs and public values;
- surface every meaningful buyer-relevant prefill in the editable context module;
- invalid or stale values clear to a neutral field without first-load validation;
- hidden source metadata cannot satisfy a visible required field;
- browsing history alone cannot create a relation;
- query values never enter metadata, Schema, analytics or logs containing personal data;
- clean canonical remains `/request-sample/` regardless of query.

## 8. Submission Interface and State Machine

```text
FORM_READY_UNPREFILLED | FORM_READY_PREFILLED
UNKNOWN_GRADE_VALID | OTHER_APPLICATION_REQUIRES_DETAIL
  → VALIDATION_FAILED
  → SUBMITTING
      → RECEIPT_CONFIRMED
      → SUBMISSION_UNCONFIRMED

FORM_SERVICE_UNAVAILABLE
```

Rules:

- first load is neutral;
- submit validates the complete form and focuses the error summary when invalid;
- submitting disables repeat activation and exposes a busy state;
- only an explicit positive receiver acknowledgement may enter `RECEIPT_CONFIRMED`;
- timeout, network failure, server error or ambiguous response enters `SUBMISSION_UNCONFIRMED`;
- failure retains all entries and retry reuses the same request token/idempotency context;
- success clears or archives client state only after positive acknowledgement;
- no request reference is shown unless returned by a real receiver.

An HTTP 2xx status alone is insufficient unless the agreed response contract also confirms receipt.

## 9. SEO, GEO and Schema

| Element | Required Gate 7 contract |
|---|---|
| SEO Title | `Request a Titanium Dioxide Sample | TiO2 Malaysia` |
| Meta Description | `Request a Malaysia-origin titanium dioxide sample for technical evaluation by sharing the grade, application, destination and test objective for human review.` |
| Canonical candidate | `https://tio2malaysia.com/request-sample/` |
| Robots | Activate `index, follow` only after Gate 9 verification and Gate 10 authorization |
| Schema | `WebPage` + `BreadcrumbList` only; stable references to shared `WebSite` and `Organization` allowed |

Do not emit `Product`, `Offer`, price, availability, sample quantity, shipping, `FAQPage`, `HowTo`, certification, regulatory, recommendation, equivalence or comparison data.

## 10. Responsive and Accessibility Contract

- reproduce the approved 1440 Desktop, dedicated 768 Tablet and 390 Mobile compositions, Mobile Menu and critical states;
- verify 1440, 1280, 1024, 768, 430, 390, 375 and 320px without page-level horizontal scroll;
- preserve 84px Desktop Header and 64px responsive Header;
- maintain at least 44 × 44 logical px targets at 768px and below;
- use one semantic form, persistent labels, programmatic Required state, `aria-invalid`, `aria-describedby`, focusable error summary and visible focus rings;
- announce success/failure/unavailable states appropriately without premature or duplicate speech;
- Mobile Menu must trap focus, close on Escape and restore focus;
- FAQ buttons use `aria-expanded` and keyboard operation;
- no state relies on colour alone.

Static Gate 5 PNGs are visual references, not runtime accessibility proof.

## 11. Global Chrome and Shared-owner Contract

- consume Global Chrome V0.5 and approved production logo assets; do not create page-private Header/Footer/Menu copies;
- Desktop order remains `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`;
- Request a Sample is not a first-level navigation item and current navigation key remains `NONE`;
- Request a Quote remains visible in Desktop Header, Mobile Header, Mobile Menu and Footer and points to `/request-a-quote/`;
- false RFQ readiness blocks release and never hides, disables, removes or reroutes RFQ;
- shared Privacy Policy, Footer legal links and Cookie controls remain owned by their shared page/component owners.

## 12. Site-scope and Isolation

Every page-content, form-configuration, endpoint lookup, receiver mapping, persistence record, cache key, media query, menu reference, metadata and Schema query must include `site_scope=tio2-my`.

No fallback may read content, endpoints, recipients, forms, legal text, media or metadata from TIOVAR, a frozen site or another site scope.

## 13. Claim Prohibitions

Never display or infer free sample, stock, availability, requested sample quantity, approval, dispatch, lead time, freight, shipping, delivery, response time, certification or regulatory eligibility. Any sample arrangement remains a separate outcome after human review.

## 14. Boundary

This package is `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`. It authorizes no actual handoff, Gate 8, development, code, CMS implementation, testing, deployment, publication, DNS or indexing, and no work in `D:\16Wordpress_nextjs`.

