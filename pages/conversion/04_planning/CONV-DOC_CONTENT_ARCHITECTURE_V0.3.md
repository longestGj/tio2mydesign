# CONV-DOC Request Documents — Gate 2 Content Architecture and Full Copy V0.3

## 0. Document control

| Field | Value |
|---|---|
| Page / URL | CONV-DOC / `/request-documents/` |
| Page type | Utility conversion page |
| Language | EN |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Gate | Gate 2 — content architecture, full copy, SEO/GEO/Schema, CTA and state contract |
| Review ID | `CONV-DOC-G2-V11-COPY-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED_PENDING_USER_CONFIRMATION` |
| Gate ceiling | Gate 2 only; no wireframe, visual direction, complete visual, development or release |

## 1. Approved input and non-consumption boundary

This Gate 2 package consumes the approved Gate 1 authority:

- `CONV-DOC-G1-V11-TYPES-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`;
- checkpoint `CONTENT_INTENT_CONFIRMED / APPROVED`;
- five request types;
- eight minimum fields;
- all 14 published Product Grades;
- Country / Region as contact/company location only;
- no Market/Destination document logic or RFQ fields;
- receipt-only success;
- independent regulatory/compliance document capability = `NOT_ESTABLISHED / DO_NOT_RENDER`.

The historical V0.2 Gate 2–5 files and PNGs remain `OUT_OF_SCOPE_DRAFT / NOT_CURRENT_CONTROL / NOT_APPROVED / PRESERVED_FOR_PROVENANCE`. They are not content inputs for V0.3.

## 2. Page responsibility and buyer decision sequence

### One-sentence responsibility

Request Documents collects the minimum business and Product Grade context needed to receive a controlled document request for human review; it does not publish a document inventory or decide availability, approval, applicability, sending or delivery.

### Buyer decision sequence

1. Confirm this is a controlled request, not a download or approval workflow.
2. Review or choose the Product Grade and optional application context.
3. Provide minimum contact/company details.
4. Select at least one of the five request types.
5. Add optional non-confidential requirements.
6. Review the request summary and submit.
7. Receive either validation guidance, an unconfirmed-submission retry state, or a receipt-only confirmation.

### Explicit non-responsibilities

- No brand story, product education, market content or document-category education hub.
- No Market/Destination field, routing, version selection, applicability filter or analytics dimension.
- No independent regulatory/compliance request category, synonym, preset, analytics value or capability claim.
- No Annual Volume, Target Price, Expected Order Quantity, Purchase Timeline, WhatsApp or Existing Supplier.
- No public download, file inventory, certificate inventory, availability badge, SLA or automatic-approval language.

## 3. Approved-for-review module order

| Order | Module | Buyer decision purpose | Content responsibility |
|---:|---|---|---|
| 1 | Breadcrumb | Confirm location in the site | `Home / Request Documents` |
| 2 | Hero and receipt boundary | Understand the task and its limits before entering data | H1, concise intro, receipt-only statement |
| 3 | Compact process cue | Understand what submission starts without a complex wizard | Your Details → Request Details → Human Review |
| 4 | Prefill review — conditional | Verify and edit context carried from an approved upstream source | Valid editable chips only; omit when absent |
| 5 | Your Details | Provide minimum identity and follow-up context | Four required fields |
| 6 | Request Details | Identify one Grade, request types and optional technical context | Four request fields |
| 7 | Review | Check the entered request and contact-only country meaning | Read-only summary linked back to editable controls |
| 8 | Privacy evidence slot | Prevent unapproved data-handling claims | Fail-closed internal annotation until approved copy exists |
| 9 | Submit action | Send one controlled request | Receipt-only helper plus `Request Documents` |
| 10 | Validation / failure / success | Know whether correction, retry or receipt occurred | State-specific copy in Section 9 |
| 11 | Shared Footer | Continue using approved site navigation | Shared component only; permanent RFQ unchanged |

There is no FAQ, category-education section, market module or immediate RFQ promotion in the page body.

## 4. Complete buyer-visible English copy

### 4.1 Breadcrumb

`Home / Request Documents`

### 4.2 Hero

**Eyebrow**  
`Controlled document request`

**H1**  
`Request Documents`

**Intro**  
`Tell us which Product Grade and document types your team needs. We’ll use the information below to review your request and follow up using the business email you provide.`

**Receipt boundary heading**  
`Submission confirms receipt only.`

**Receipt boundary body**  
`It does not confirm that a document exists, is approved, applies to your situation, or can be sent or delivered.`

### 4.3 Compact process cue

1. **Your Details** — `Provide the minimum contact and company context.`
2. **Request Details** — `Choose one Product Grade and at least one request type.`
3. **Human Review** — `Our team reviews the received request before any document outcome.`

**Minimum-information note**  
`Please do not include passwords, payment details, personal identification numbers or confidential formulations.`

### 4.4 Form introduction

**Eyebrow**  
`Document request`

**H2**  
`Tell us what your team needs`

**Instruction**  
`Fields marked with an asterisk are required.`

### 4.5 Valid prefill review — conditional

**Heading**  
`Review your prefilled context`

**Body**  
`These values came from your previous selection or a supported link. You can change or remove them before submitting.`

This entire module is omitted when no valid prefill exists.

### 4.6 Your Details group

**Group heading**  
`Your Details`

Field labels and help text are defined in Section 5.

### 4.7 Request Details group

**Group heading**  
`Request Details`

Field labels, five type descriptions and help text are defined in Sections 5–7.

### 4.8 Review group

**Group heading**  
`Review`

**Panel heading**  
`Check your request before submitting`

**Summary rows**

- `Product Grade`
- `Document Types`
- `Application / Industry` — render only when supplied
- `Country / Region` — append `contact/company location only`

**Review reminder**  
`The summary reflects your entries only. It does not confirm document availability, approval or applicability.`

### 4.9 Submit action

**Helper**  
`A successful submission means that your request was received for human review. It does not mean that any document is approved or will be provided.`

**Primary button**  
`Request Documents`

No page-body secondary CTA appears before submission.

## 5. Eight-field content contract

| # | Field | Requirement | Label | Placeholder / option prompt | Helper | Empty / invalid copy |
|---:|---|---|---|---|---|---|
| 1 | `full_name` | Required | `Full Name *` | `Enter your full name` | None | `Enter your full name.` |
| 2 | `company` | Required | `Company *` | `Enter your company name` | None | `Enter your company name.` |
| 3 | `business_email` | Required | `Business Email *` | `name@company.com` | `Use the business email where our team can follow up.` | Empty: `Enter your business email.` Invalid: `Enter an email in the format name@company.com.` |
| 4 | `country_region` | Required | `Country / Region *` | `Select your contact or company location` | `Contact or company location only. This field does not determine document version, availability, applicability or scope.` | `Select your contact or company location.` |
| 5 | `product_grade` | Required | `Product Grade *` | `Select a Product Grade` | `Choose the Grade connected to this request. A prefilled value can be changed.` | `Select a Product Grade.` |
| 6 | `document_types` | Required; at least one | `Document Types *` | Five selectable options | `Select at least one request type. A selection does not confirm that a document exists or can be provided.` | `Select at least one Document Type.` |
| 7 | `application_industry` | Optional / recommended | `Application / Industry (optional)` | `e.g. Coatings, Plastics or another industry` | `Add optional context to help the reviewer understand your request. It does not select a Product Grade or document scope.` | None |
| 8 | `additional_requirements` | Optional; approximately 500 characters | `Additional Requirements (optional)` | `Add non-confidential context for the reviewer` | `Up to 500 characters. Do not include confidential formulations or personal identification data.` | `Keep Additional Requirements to 500 characters or fewer.` |

### Business Email non-blocking advice

If a common personal-email domain is detected, show this advisory without blocking submission:

`If possible, use your company email to help us verify the business context. You can still continue.`

This advice is not an error and must not be included in the error summary.

## 6. Product Grade selector and prefill contract

### 6.1 Product Grade options

The selector contains exactly these 14 published Grades:

`M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`.

There is no `Not sure`, multiple-grade or unpublished-product option in the current contract.

### 6.2 Approved prefill sources

| Source | Accepted context | Buyer control |
|---|---|---|
| Product page | Product Grade | Editable/removable |
| Application page | Application / Industry | Editable/removable |
| Document Hub Product Selector | Product Grade | Editable/removable |
| Supported URL parameters | `product`, `application`, `docs` | Prefill only; editable/removable |

Country / Region is never accepted as a market/destination prefill for document selection. No `market`, `destination`, route, certification or language parameter controls this form.

### 6.3 Prefill state copy

**Valid prefill** — show the module and copy in Section 4.5.

**No prefill** — do not render an empty module, placeholder chip or empty shell.

**Unsupported or stale prefill** — discard the value, leave the corresponding editable form field unselected, and do not show “not applicable,” “unsuitable” or another negative Product inference.

**M-2377 context** — Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate may be carried neutrally when present in an approved upstream context. This does not freeze a recommendation or document outcome.

**Frozen contexts** — Specialty Materials is not rendered; Rubber is evidence-only; `NO_PUBLIC_MAPPING` is not converted into a suitability statement; M-996/M-2196 comparison, ranking, equivalence, substitution and advantage remain frozen.

## 7. Five request types

| Public label | Allowed value | Buyer-visible description |
|---|---|---|
| Technical Data & Product Documentation | `technical_product` | `Request technical data or product documentation for the selected Product Grade.` |
| Safety Documentation | `safety` | `Request safety documentation for the selected Product Grade.` |
| Quality & COA Documentation | `quality_coa` | `Request quality information or COA-related documentation for the selected Product Grade.` |
| Origin & Supplier Qualification Documentation | `origin_supplier_qualification` | `Request origin-review or supplier-qualification documentation for the selected Product Grade.` |
| Other Documentation | `other` | `Use this neutral option for another document-related need. Add context below if it would help the reviewer.` |

`Other Documentation` is not a synonym, proxy, hidden route or analytics substitute for an independent regulatory/compliance capability. That capability remains `NOT_ESTABLISHED / DO_NOT_RENDER`.

There is no sixth public value and no hidden value that expands the five-type set.

## 8. Review, validation and accessibility content

### 8.1 Error summary

**Heading**  
`Review the highlighted fields`

The summary lists only current errors and links to their labelled controls. Example links:

- `Enter your full name.`
- `Enter your company name.`
- `Enter your business email.`
- `Select your contact or company location.`
- `Select a Product Grade.`
- `Select at least one Document Type.`
- `Keep Additional Requirements to 500 characters or fewer.`

After an invalid submit, keyboard focus moves to the error-summary heading; the next Tab action reaches the first linked error. Each field keeps its persistent visible label and adjacent error message. Error meaning cannot rely on colour alone.

### 8.2 Keyboard focus

Focus copy does not change. Every input, select, checkbox card, removable prefill chip, error-summary link, primary action and retry action must have a visible focus indicator. Document-type cards retain an explicit checkbox state in addition to colour.

### 8.3 Required-language rule

Required status is communicated in the visible label, the form instruction and programmatic required semantics. Placeholder text never substitutes for a label.

## 9. Submission state content contract

### 9.1 Normal / ready

Button: `Request Documents`

The button is enabled only when all required fields are valid and at least one Document Type is selected. Optional fields remain optional, including Additional Requirements when `Other Documentation` is selected.

### 9.2 Submitting

Button: `Submitting…`

Helper: `Keep this page open while we send your request.`

All entered values remain visible. Duplicate submission is disabled until a response or failure occurs.

### 9.3 Client-side invalid

No request is sent. Show the error summary and adjacent messages from Section 8. Preserve every entered value.

### 9.4 Server failure / receipt unconfirmed

**Heading**  
`We could not confirm receipt.`

**Body**  
`Your request has not been confirmed. Your entries are still on this page. Please try again.`

**Action**  
`Try again`

Do not show the success heading, a reference number, a contact fallback, an SLA or any statement that the request reached a person.

### 9.5 Retry

Retry reuses the preserved entries and returns to `Submitting…`. It does not clear the form or create a second visual request record before receipt is confirmed.

### 9.6 Receipt-only success

**Heading**  
`Document Request Received`

**Body**  
`Thank you. Our team will review your request and follow up using the business email you provided.`

**Boundary**  
`This confirmation does not mean that any document exists, is approved, applies to your situation, or is ready to send or deliver.`

**Secondary action**  
`View Products`

No response time, file-delivery promise, download, approval status or immediate Request a Quote prompt appears.

## 10. Privacy and operational evidence boundary

Exact buyer-visible privacy text is not drafted because the controller, processing purpose, retention rule, rights wording and privacy channel are not verified. The Gate 2 content model reserves a privacy-notice position but marks it:

`INTERNAL ONLY — APPROVED PRIVACY COPY REQUIRED BEFORE BUYER-CLEAN APPROVAL`

Fail-closed rules:

- do not publish the internal annotation;
- do not invent a controller, legal basis, retention period, rights process, privacy URL, email address or other contact channel;
- do not add a consent checkbox merely to fill the reserved position;
- do not allow a later Gate to label the page Buyer Clean while the approved privacy content is absent;
- do not convert receiver uncertainty into a Contact fallback.

The operational receiver and form service remain release blockers. Their absence does not authorise fabricated failure or follow-up copy.

## 11. CTA and internal-link contract

| Context | Action | Destination / rule |
|---|---|---|
| Form | `Request Documents` | Page-primary submit action |
| Success | `View Products` | `/products/` candidate; route must be verified before handoff |
| Breadcrumb | `Home` | `/` |
| Shared Header/Footer | `Request a Quote` | Permanently visible shared link to `/request-a-quote/` |

Request Documents is not added to first-level navigation. The shared RFQ is not removed, disabled or replaced, but it remains visually and semantically separate from the page-primary task. Global Header/Footer are referenced, not redesigned.

## 12. SEO candidate contract

| Element | Gate 2 candidate / rule |
|---|---|
| Primary keyword | `NO_PRIMARY_KEYWORD` — unchanged |
| Title | `Request Documents | TiO2 Malaysia` |
| Meta description | `Submit a controlled request for titanium dioxide product, safety, quality, COA, origin or supplier-qualification documentation for human review.` |
| H1 | `Request Documents` |
| Slug | `/request-documents/` — unchanged |
| Canonical candidate | `https://tio2malaysia.com/request-documents/` |
| Robots recommendation | `noindex, follow` candidate for project-control/registry decision only |
| Language | `en` |

The registry currently establishes `NO_DIRECT_KEYWORD_TARGET`, not a final robots decision. No `noindex`, canonical, sitemap or indexing change may be implemented unless the page registry and project control approve it. If indexed, the page must remain a utility transaction page and must not compete for informational document terms.

Excluded SEO intent includes direct download, market-specific document request, destination-based document filtering, Product Grade comparison and document-availability terms.

## 13. GEO and answer-ready contract

The visible copy already supplies two concise, attributable answers without adding an educational module:

**What is Request Documents?**  
`Request Documents is a controlled form for submitting a Product Grade and document-type request for human review.`

**What does submission confirmation mean?**  
`It means the request was received for review. It does not confirm that a document exists, is approved, applies to the buyer’s situation, or can be sent or delivered.`

Entity relations allowed in visible and machine-readable content:

- TiO2 Malaysia → offers a controlled document-request workflow.
- Request Documents → receives a request associated with one selected Product Grade.
- Request → may include one or more of the five request types.
- Country / Region → describes contact/company location only.
- Business Email → is the stated follow-up address after receipt.

No relation may connect Country / Region to document version, availability, applicability, route, certification or release. No Product Grade → document-availability relation is created.

## 14. Schema candidate contract

Permitted candidate types:

1. `WebPage`
2. `BreadcrumbList`

Candidate `WebPage` properties:

- `name`: `Request Documents`
- `url`: canonical candidate above
- `description`: match the visible utility purpose and receipt-only boundary
- `inLanguage`: `en`
- `isPartOf`: the TiO2 Malaysia `WebSite` entity when that site entity is approved
- `breadcrumb`: reference the visible Home / Request Documents trail

Do not add `Product`, `Offer`, `DigitalDocument`, `ItemList` of documents, `DownloadAction`, `RegisterAction`, certification properties or a market-specific service area. Omit `potentialAction` until the form endpoint, receiver and action semantics are verified. Structured data must not imply document inventory, availability, approval, applicability or delivery.

## 15. Analytics candidate values

Candidate events, subject to later analytics governance:

- `request_documents_start`
- `request_documents_validation_error`
- `request_documents_submit`
- `request_documents_received`
- `request_documents_failure`

Allowed `document_type` values are exactly the five values in Section 7. `product_grade` may carry one of the 14 selector values. `application` may carry user-entered or approved prefilled context. Do not record `market`, `destination`, a hidden capability value or confidential Additional Requirements text in analytics.

## 16. Gate 2 open controls and review questions

| Item | Current state | Gate effect |
|---|---|---|
| Module order and full copy | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` | Requires project-control review and user confirmation |
| Robots recommendation | `PENDING_REGISTRY_AND_PROJECT_CONTROL_DECISION` | No implementation or index change |
| Canonical candidate | `PENDING_RELEASE_VERIFICATION` | No implementation |
| Privacy copy/channel | `EVIDENCE_REQUIRED / FAIL_CLOSED` | Buyer Clean and later handoff blocked |
| Operational receiver/service | `EVIDENCE_REQUIRED / RELEASE_BLOCKER` | No SLA, fallback or delivery claim |
| Product/document inventory | `NOT_ESTABLISHED / DO_NOT_RENDER` | No availability claim |
| Independent regulatory/compliance capability | `NOT_ESTABLISHED / DO_NOT_RENDER` | No option, value, claim or inference |

Project control is asked to review the complete module order, every buyer-visible string, field/state behaviour, SEO/GEO/Schema candidates and the evidence freezes. No Gate 3 work begins from this draft.

## 17. Gate 2 stopping condition

Current status: `DRAFT_FOR_PROJECT_CONTROL_REVIEW`.

Current checkpoint: `FULL_COPY_AND_MODULE_ORDER_CONFIRMED_PENDING_USER_CONFIRMATION`.

Stop here. Do not self-declare `FULL_COPY_AND_MODULE_ORDER_CONFIRMED`, `PROJECT_CONTROL_REVIEW_PASS`, `APPROVED` or `CLOSED`; do not enter Gate 3, visual work, development or release.

## 18. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-01 | Historical pre-rebaseline content architecture | `HISTORICAL / NOT_CURRENT_CONTROL` |
| V0.2 | 2026-09-01 | Overreach draft produced before Gate 1 approval | `OUT_OF_SCOPE_DRAFT / NOT_CURRENT_CONTROL / PRESERVED_FOR_PROVENANCE` |
| V0.3 | 2026-09-01 | First current Gate 2 architecture and complete copy based on approved five-type Gate 1 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
