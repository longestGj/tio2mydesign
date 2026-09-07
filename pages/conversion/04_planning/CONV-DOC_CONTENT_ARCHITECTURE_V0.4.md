# CONV-DOC Request Documents — Gate 2 Buyer Clean Content Architecture V0.4

> Historical-status note — 2026-09-03: V0.4 is preserved for provenance but is no longer a current authority input. Its Country / Region helper/error row is superseded by `CONV-DOC_CONTENT_ARCHITECTURE_V0.5.md`. Status: `HISTORICAL / SUPERSEDED_FOR_COUNTRY_PRIVACY_BINDING`.

## 0. Document control

| Field | Value |
|---|---|
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Page type | Utility conversion page |
| Language | EN |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Review ID | `CONV-DOC-G5-BUYER-CLEAN-20260901-02` |
| Status | `HISTORICAL / SUPERSEDED_FOR_COUNTRY_PRIVACY_BINDING` |
| Gate scope | Historical Gate 2 evidence; not part of the current authority set |
| Parent | V0.3 five-type content architecture |
| Gate ceiling | Gate 5 review only; no Gate 6/7 or implementation |

This version implements the 2026-09-01 project-control direction and user decisions for the final reader experience. V0.3 remains historical. The revision does not change the five request types, eight fields, 14-Grade selector, Country / Region boundary, URL, keyword ownership or development boundary.

## 1. Final page responsibility

Request Documents collects the Product Grade, document categories and minimum business context needed for a person to review and respond to a controlled document request.

The page does not become a document catalogue or public download page. Evidence and release limits stay in governance records; the buyer-facing page uses concise process language rather than repeated disclaimers.

## 2. Final module order and buyer purpose

| Order | Module | Buyer purpose |
|---:|---|---|
| 1 | Shared Header | Use global navigation and permanent RFQ |
| 2 | Breadcrumb | Confirm current page |
| 3 | Hero | Understand the task immediately |
| 4 | Three-step cue | Understand the input and human-review sequence |
| 5 | Minimum-information note | Avoid submitting sensitive or confidential information |
| 6 | Conditional prefill review | Check, edit or remove upstream context |
| 7 | Your Details | Provide minimum business contact information |
| 8 | Request Details | Select one Grade, one or more document types and optional context |
| 9 | Review | Check only the values entered |
| 10 | Privacy statement and submit | Understand data use, open Privacy Policy and submit |
| 11 | Submission state | Correct, retry or confirm receipt |
| 12 | Shared Footer | Use global, legal and procurement links |

There is no Hero warning card, internal privacy placeholder, educational FAQ, file inventory, market selector, destination logic, RFQ field group or page-body RFQ promotion.

## 3. Complete Buyer Clean English copy

### 3.1 Breadcrumb

`Home / Request Documents`

### 3.2 Hero

**Eyebrow**  
`Controlled document request`

**H1**  
`Request Documents`

**Body**  
`Select a product grade and the documentation your team needs, then provide the business details required for review.`

### 3.3 Three-step cue

1. **Your Details** — `Provide your business contact information.`
2. **Request Details** — `Choose one Product Grade and at least one document type.`
3. **Human Review** — `Our team reviews the details and follows up when needed.`

**Minimum-information note**  
`Please do not include passwords, payment details, personal identification numbers or confidential formulations.`

### 3.4 Form introduction

**Eyebrow**  
`Document request`

**H2**  
`Tell us what your team needs`

**Instruction**  
`Fields marked with an asterisk are required.`

### 3.5 Prefill — conditional

**Heading**  
`Review your prefilled context`

**Body**  
`These values came from your previous selection or a supported link. You can change or remove them before submitting.`

Omit the entire module when there is no valid prefill.

### 3.6 Review

**Group heading**  
`Review`

**Panel heading**  
`Check your request before submitting`

Rows show only the supplied values:

- Product Grade
- Document Types
- Application / Industry, only when supplied
- Country / Region

No availability, approval or applicability disclaimer appears in Review.

### 3.7 Privacy and submit

**Privacy statement**  
`We use the information you provide to review and respond to your document request. Learn more in our Privacy Policy.`

`Privacy Policy` is a visible final link contract to `/privacy-policy/`. Route delivery and validation are Gate 7–9 dependencies, not a Gate 5 visual blocker.

**Primary button**  
`Request Documents`

## 4. Eight-field contract

| # | Field | Requirement | Label | Helper / validation |
|---:|---|---|---|---|
| 1 | `full_name` | Required | `Full Name *` | Empty: `Enter your full name.` |
| 2 | `company` | Required | `Company *` | Empty: `Enter your company name.` |
| 3 | `business_email` | Required | `Business Email *` | `Use the business email where our team can follow up.` Invalid: `Enter an email in the format name@company.com.` |
| 4 | `country_region` | Required | `Country / Region *` | `Use your contact or company location. Document scope is reviewed separately.` Empty: `Select your contact or company location.` |
| 5 | `product_grade` | Required | `Product Grade *` | `Choose the Grade connected to this request. A prefilled value can be changed.` Empty: `Select a Product Grade.` |
| 6 | `document_types` | Required, one or more | `Document Types *` | `Select at least one request type.` Empty: `Select at least one Document Type.` |
| 7 | `application_industry` | Optional | `Application / Industry (optional)` | `Add context to help the reviewer understand your request.` |
| 8 | `additional_requirements` | Conditional / optional; maximum 500 characters | Default: `Additional Requirements (optional)`; Other-only: `Additional Requirements *` | `Required when Other Documentation is your only selection. Otherwise optional. Do not include confidential information.` |

### 4.1 Other-only conditional validation

- If `Other Documentation` is the only selected type, `Additional Requirements` is required.
- If Other is selected with at least one named type, `Additional Requirements` remains optional.
- Changing from mixed selection to Other-only updates the visible label and helper without clearing text.
- Changing from Other-only to mixed removes the required state without clearing text or reporting an error.
- Empty Other-only error: `Describe the document you need.`
- Over-limit error: `Keep Additional Requirements to 500 characters or fewer.`
- No field is added.

### 4.2 Business-email advisory

Non-blocking copy:

`If possible, use your company email to help us verify the business context. You can still continue.`

## 5. Product Grade and prefill

Product Grade contains exactly:

`M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`.

Allowed editable prefill:

| Source | Context |
|---|---|
| Product page | Product Grade |
| Application page | Application / Industry |
| Documents page or selector | Product Grade and/or one of the five document types |
| Supported link | `product`, `application`, `docs` values only |

No prefill shows no empty shell. Unsupported values are discarded and the corresponding control remains unselected. Country / Region is never used as a Market/Destination document selector.

M-2377 may neutrally carry Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate from approved upstream context. Specialty Materials stays `DO_NOT_RENDER`; Rubber remains evidence-only; M-996/M-2196 comparison and substitution remain frozen.

## 6. Five request types

| Public label | Value | Buyer-visible description |
|---|---|---|
| Technical Data & Product Documentation | `technical_product` | `Request technical data or product documentation for the selected Product Grade.` |
| Safety Documentation | `safety` | `Request safety documentation for the selected Product Grade.` |
| Quality & COA Documentation | `quality_coa` | `Request quality information or COA-related documentation for the selected Product Grade.` |
| Origin & Supplier Qualification Documentation | `origin_supplier_qualification` | `Request origin-review or supplier-qualification documentation for the selected Product Grade.` |
| Other Documentation | `other` | `Use this option for another document-related need.` |

`Other Documentation` is a neutral buyer-entered fallback and does not establish an independent regulatory/compliance capability.

## 7. Validation and accessibility

**Error-summary heading**  
`Review the highlighted fields`

The focusable summary contains only current errors. Conditional example when Other is the only selected type:

- `Describe the document you need.`

The summary link moves focus to Additional Requirements. The field retains its value, label, helper and adjacent error. Required state is conveyed in visible text and programmatic semantics, not colour alone.

All controls retain persistent labels, keyboard operation and visible focus. Error, failure and success use structure and text in addition to colour. Logical interactive targets are at least 44×44px at 390px.

## 8. Submission states

### Normal

Button: `Request Documents`

### Submitting

Button: `Submitting…`

Helper: `Keep this page open while we submit your request.`

Values remain visible and duplicate page-body submission is prevented.

### Client invalid

No request is sent. Focus moves to the error summary and all entered values remain.

### Failure

**Heading**  
`Something went wrong`

**Body**  
`Your information is still here. Please try submitting again.`

**Action**  
`Try again`

### Retry

Retry uses the preserved values and returns to `Submitting…`.

### Success

**Heading**  
`Document Request Received`

**Body**  
`Thank you. We’ve received your document request. Our team will review the details and contact you at the business email provided if additional information is needed.`

**Boundary**  
`Document availability and applicable scope are confirmed during review.`

**Secondary action**  
`Return to Documents`

Destination contract: `/documents/`.

## 9. Shared Footer legal contract

The page consumes, without redesigning, the final shared Footer state containing:

- `Privacy Policy` → `/privacy-policy/`
- `Terms of Use` → `/terms-of-use/`
- `Cookie Policy` → `/cookie-policy/`
- `Cookie Settings` → opens the shared consent-settings control

These shared legal routes and controls are parallel site-delivery dependencies. Their current completion does not block Gate 5 visual approval; they must be delivered and verified at Gate 7–9 and before release.

## 10. SEO, GEO and Schema

| Element | Contract |
|---|---|
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Title | `Request Documents | TiO2 Malaysia` |
| Meta description | `Submit a controlled request for titanium dioxide product, safety, quality, COA, origin or supplier-qualification documentation for human review.` |
| H1 | `Request Documents` |
| Canonical candidate | `https://tio2malaysia.com/request-documents/` |
| Robots | `noindex, follow` remains a registry/project-control candidate only |
| Schema | `WebPage` and `BreadcrumbList` only |

**What is Request Documents?**  
`Request Documents is a controlled form for submitting a Product Grade and document-type request for human review.`

**What happens after submission?**  
`The team reviews the submitted details and contacts the business email provided if additional information is needed. Document availability and applicable scope are confirmed during review.`

Do not create a document inventory, `DownloadAction`, `Offer`, certification property, availability relation or market-specific service relation.

## 11. Gate status and stop

| Gate | State |
|---|---|
| Gate 1 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 2 V0.4 | `HISTORICAL / SUPERSEDED_FOR_COUNTRY_PRIVACY_BINDING` |
| Gate 3–5 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` under `CONV-DOC-G3-G5-VISUAL-REDESIGN-01` |
| Gate 6+ | `NOT_AUTHORIZED` |

Visual-package override: `CONV-DOC-G5-BUYER-CLEAN-20260901-02 = REVISION_REQUIRED / SUPERSEDED_FOR_VISUAL_QUALITY_REWORK`. The current targeted successor is V0.5; this V0.4 file is retained only as historical evidence.

Current visual stop: `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED / NOT_CLOSED`.

## 12. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.3 | 2026-09-01 | Five-type copy with repeated negative boundaries and internal privacy slot | `SUPERSEDED_BY_V0.4 / PRESERVED` |
| V0.4 | 2026-09-01 | Buyer Clean copy, Privacy Policy link, shared legal Footer contract, concise Hero/Review/states and Other-only conditional requirement; project-control review passed | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| V0.4 historical marker | 2026-09-03 | Country / Region helper/error binding superseded by V0.5 without reopening unrelated Gate 2 content | `HISTORICAL / SUPERSEDED_FOR_COUNTRY_PRIVACY_BINDING` |
