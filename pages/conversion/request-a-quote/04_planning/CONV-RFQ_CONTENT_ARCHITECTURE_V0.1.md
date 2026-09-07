# CONV-RFQ Content Architecture and Form Contract V0.1

## 0. Document control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` — Request a Quote |
| URL | `/request-a-quote/` |
| Page type | RFQ conversion page |
| Primary keyword | `titanium dioxide quote supplier` |
| Gate | Gate 2 |
| Date | 2026-09-01 |
| Status | `COMPLETED_FOR_GATE_4_SUBMISSION / NOT_USER_APPROVED` |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Authorization | User instruction dated 2026-09-01 to proceed through Gate 4 |
| Shared Playbook | `docs/page-playbooks/CONVERSION_PLAYBOOK_V0.1.md` |
| Relationship baseline | PRODUCT V0.3 |
| Global Chrome | Formal V0.5 + approved Production SVG Logo bindings |
| Stop boundary | Gate 4 review; Gate 5, development and release prohibited |

## 1. Page job and conversion definition

The page receives explicit product, grade, application, market, document and resource context from upstream pages, collects the minimum additional B2B requirement information needed for a person to review a quotation request, and acknowledges receipt without implying any outcome.

### 1.1 Target buyer

- Industrial titanium dioxide procurement and sourcing staff.
- Technical procurement or supplier-qualification staff with a real formulation/application context.
- Distributor/importer procurement coordinators representing a B2B need.
- Buyers who know a registered grade, buyers reviewing multiple grades, and buyers who need human help because the grade is unknown.

### 1.2 Success definition

`Submit RFQ for Review` is the only page-body submit action. Success means only:

> Your quotation request has been received for human review.

It does not mean a quotation, price, stock, MOQ, lead time, shipping, sample, document, order or any approval has been confirmed.

## 2. Final Gate 2 module order

| Order | Module ID | Visible heading / label | Buyer job | Evidence and CTA boundary |
|---:|---|---|---|---|
| 0 | `GLOBAL_HEADER` | Approved shared Header | Navigate or reach the registered RFQ route | Fixed Global RFQ remains; Conversion route has zero current links and zero visible `CURRENT` labels |
| 1 | `BREADCRUMB` | `Home / Request a Quote` | Confirm destination | Home link only; no false parent item |
| 2 | `RFQ_INTRO_AND_FORM` | `Request a Titanium Dioxide Quote` | Understand the task and submit one qualified RFQ | One form; page submit label differs from Global RFQ |
| 3 | `HUMAN_REVIEW_PROCESS` | `What happens after you submit` | Understand receipt and review sequence | No SLA, price, availability or approval implication |
| 4 | `BUYER_QUESTIONS` | `Questions before you submit` | Resolve unknown-grade, prefill and receipt concerns | Visible answer blocks; no `FAQPage` Schema |
| 5 | `GLOBAL_FOOTER` | Approved shared Deep Navy Footer | Global navigation and terminal RFQ | No page-local links, Privacy route or Contact fallback added |

The form is the dominant page-body object. There is no decorative pre-form CTA, sticky submit bar, quote calculator, price table, product recommendation carousel or second RFQ form.

## 3. Exact buyer-facing copy direction

### 3.1 Breadcrumb

`Home / Request a Quote`

### 3.2 Intro

- Eyebrow: `B2B QUOTATION REQUEST`
- H1: `Request a Titanium Dioxide Quote`
- Supporting paragraph:

> Share the minimum business and requirement context needed for human quotation review. You can continue if the exact grade is unknown, and any product, application, market or document context carried from another page remains visible and editable.

- Mandatory receipt boundary directly under the supporting paragraph:

> Submission confirms receipt for review only. It does not confirm a quotation, price, stock, MOQ, lead time, shipping, sample, document, order or approval.

### 3.3 Intro-side decision aids

These are short, non-clickable rows rather than cards or CTAs:

| Label | Copy |
|---|---|
| `WHAT TO PREPARE` | `Company and business email, destination, application, grade or non-confidential requirement, and an estimated purchase quantity.` |
| `GRADE UNKNOWN?` | `Choose “Unknown / need help” and add the current grade or target requirement that a reviewer can assess.` |
| `HUMAN REVIEW` | `A person reviews the submitted context. Clarification and any commercial outcome are communicated separately.` |

### 3.4 Form heading and prefill notice

- Form H2: `Quotation request details`
- Form intro: `Required fields are marked. Use non-confidential business information only.`
- Valid prefill notice: `Context carried from [source page name] is shown below. Review or change it before submitting.`
- Invalid/stale prefill notice: `Some previous context could not be used. Review the fields below and continue with the information you know.`

The source name renders only when the source page has an approved public label. Internal Page IDs never render.

## 4. Form information architecture

The form uses four labeled groups in one `<form>` reading order. Visual panels may separate groups but cannot create four forms.

### 4.1 Group A — Business contact

| Field ID | Visible label | Requirement | Length / value contract | Hint / error direction |
|---|---|---|---|---|
| `contact_name` | `Contact name` | Required | 2–100 Unicode characters after trimming | `Enter the name of the person we may reply to.` |
| `company_name` | `Company / organization` | Required | 2–160 Unicode characters after trimming | `Enter your company or organization.` |
| `business_email` | `Business email` | Required | Up to 254 characters; standard email syntax only | `Enter a business email in the format name@company.com.` Syntax does not prove deliverability |

### 4.2 Group B — Destination and product context

| Field ID | Visible label | Requirement | Length / value contract | Hint / conditional behavior |
|---|---|---|---|---|
| `destination_country` | `Destination country / market` | Required | Approved country/market selector; `Other` allows 2–100 characters | `Choose where the material would be used or delivered. This does not confirm serviceability or shipping.` |
| `destination_city_port` | `Destination city or port (optional)` | Optional | Up to 120 characters | `Add this only if it is already known.` |
| `grade_path` | `Product / grade` | Required | One of `Known grade`, `Multiple grades`, `Unknown / need help` | This branch controls the next field; unknown is valid |
| `grade_ids[]` | `Select grade` / `Select grades` | Required for known/multiple path | Registered neutral set of 14; no ranking; one or more values | Multiple values display in registry order, not recommendation order |
| `target_requirement` | `Current grade or target non-confidential requirement` | Required for unknown path; optional otherwise | 20–500 characters when required; maximum 500 | `Do not include a confidential formulation. Describe the current grade, required documentable characteristic or review context.` |
| `application_id` | `Application` | Required | Coatings; Plastics; Masterbatch; Printing Inks; Paper; Specialty Materials; Other / Not sure | Application selection does not recommend a grade |
| `application_other` | `Describe the application` | Required only when Other is selected | 2–160 characters | Buyer-entered Rubber may remain unclassified here; it does not create a taxonomy relation |

### 4.3 Group C — Purchase requirement

| Field ID | Visible label | Requirement | Length / value contract | Boundary |
|---|---|---|---|---|
| `estimated_quantity` | `Estimated purchase quantity` | Required | Positive decimal; up to 9 integer digits and 3 decimal places | Estimate only; not an MOQ, availability or quote promise |
| `quantity_unit` | `Unit` | Required | `kg`, `metric tonnes`, `Other` | Other description up to 40 characters |
| `packaging_preference` | `Packaging preference (optional)` | Optional | `No preference / Not sure` or buyer-entered text up to 160 characters | No packaging option, pack size or availability is offered by the page |
| `document_needs[]` | `Documents needed for review (optional)` | Optional multi-select | TDS; SDS; COA; COO / Origin; Traceability; Other | Selection does not confirm existence, applicability, current version or release |
| `document_other` | `Describe the document need` | Required only when Other selected | 2–160 characters | No upload or public download |
| `sample_interest` | `Is sample evaluation also of interest? (optional)` | Optional | Yes; No; Not sure | This does not submit or approve a Sample request |

### 4.4 Group D — Additional context and acknowledgement

| Field ID | Visible label | Requirement | Length / value contract | Boundary |
|---|---|---|---|---|
| `additional_notes` | `Additional non-confidential notes (optional)` | Optional | Up to 2,000 characters; character count shown after 1,600 | No confidential formulation, credentials, payment data or sensitive personal data |
| `review_acknowledgement` | Receipt/review acknowledgement | Required | One unchecked checkbox | `I understand that submission sends a request for human review and does not confirm a quotation or any commercial outcome.` |
| `privacy_notice_slot` | Approved data-handling notice | Required before Gate 5/release | Internal annotated slot only at Gate 2–4 | Must later state approved controller, purpose, information categories, retention criterion, recipients/transfer, rights and privacy contact; no invented text |

### 4.5 Submit row

- Primary button: `Submit RFQ for Review`
- Progress label: `Submitting request…`
- Button is not disabled merely because optional context is missing.
- During an active valid submission, only the page-body submit is protected from duplicate activation. The Global Chrome RFQ remains visible and functions as navigation.
- Supporting line under the button: `A submitted request is reviewed separately from any quotation, supply, sample, document or order decision.`

## 5. PRODUCT V0.3 and grade behavior

### 5.1 Registered neutral grade values

`M-350, M-510, M-896, M-996, M-2196, M-895, M-200, M-108, M-210, M-340, M-886, M-52, M-2377, CR-901`

The values use registry order, not quality, suitability, popularity or commercial priority.

### 5.2 M-2377

- Explicit or approved-source M-2377 may carry Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate as visible editable neutral context.
- Sulfate appears only as an upstream context chip. Direct visitors do not receive a process selector.
- M-2377 → Specialty Materials is never generated as a public relationship. If a buyer independently selects M-2377 and Specialty Materials, retain it only as buyer-supplied review context and do not describe it as suitable, unsuitable or approved.
- Rubber is accepted only as buyer-entered text under `Other`; it does not become an Application option, relationship, URL, keyword, navigation item or Schema entity.

### 5.3 M-996 / M-2196

Both can be selected independently or together under `Multiple grades`. The form and every state must not provide differences, ranking, better/worse language, equivalence, replacement, substitution, relative position, comparative performance or comparison-led selection rationale.

### 5.4 Unsupported relationship

Unsupported/system-generated relationships are discarded without a negative message. `NO_PUBLIC_MAPPING` is never rewritten as not applicable, unsuitable, unsupported, impossible, unavailable or prohibited.

## 6. Upstream prefill acceptance

| Source family | Allowed visible context | RFQ behavior | Prohibited inference |
|---|---|---|---|
| Products Hub | Explicit selected grade(s), application/process context only when V0.3-approved, source label | Populate editable context | No recommended grade or application fit |
| Grade page | Exact registered grade and approved explicit context | Known-grade path; visible grade | No stock, price, document or market promise |
| Applications | Application; grade only if the buyer explicitly selected it under an approved path | Populate editable application and explicit grade | No automatic grade recommendation |
| Markets | Destination country/market and source label | Populate editable destination | No serviceability, regulatory, trade, route or logistics outcome |
| Documents | Explicit document categories and source label | Populate optional editable needs | No availability, applicability, current-version or approval statement |
| Resources | Explicit neutral resource topic and source label | Add removable context to notes/source area | No equivalence, substitution, trade outcome or technical selection inference |

Every received value is revalidated against current registered values. Empty/invalid prefill leaves the complete form usable and produces no first-load error.

## 7. Validation, focus and status copy

### 7.1 Error summary

Heading: `Review the highlighted information`

Intro: `We could not submit the request yet. Correct the fields listed below; your other entries have been kept.`

The summary receives focus after a failed submit. Links use the exact field label and move focus to the related control.

### 7.2 Insufficient unknown-grade context

Field error:

> Add a non-confidential current grade or target requirement so the unknown-grade request can be reviewed.

This is an information-sufficiency error, not a technical suitability decision.

### 7.3 Submission failure without an approved alternate channel

Heading: `We could not confirm receipt`

Body:

> We could not confirm that your request was received. Your entries are still on this page. Please try again.

Action: `Try again`

No Contact link, email, phone, ticket number or receipt implication renders. A verified channel can be added only after separate approval.

### 7.4 Success

Heading: `Quotation request received`

Body:

> Your quotation request has been received for human review. We may ask for clarification if more context is needed. This receipt is not a quotation and does not confirm price, stock, MOQ, lead time, shipping, sample or document availability, order acceptance or any approval.

Supporting action: `Return to Products` may render as a text link only if `/products/` is approved and route-live. The form does not immediately reset behind the receipt state.

### 7.5 Form/route unavailable review states

- Form service unavailable review copy: `This form is unavailable. No request has been received.` This is an internal Gate 3–4 restricted-state proof, not a publishable alternative page.
- Route unavailable is internal only: `RFQ_ROUTE_READY=false = RELEASE_BLOCKER`.
- Neither state changes Desktop Header, Mobile Header, Mobile Menu or Footer RFQ visibility/URL.

## 8. Human-review content

### Heading

`What happens after you submit`

### Four-step copy

| Step | Heading | Copy |
|---:|---|---|
| 1 | `Request received` | `The form confirms only that the request reached the review workflow.` |
| 2 | `Context reviewed` | `A person reviews the company, destination, grade or requirement, application and estimated quantity context.` |
| 3 | `Clarification if needed` | `Additional non-confidential information may be requested when the submitted context is not enough for review.` |
| 4 | `Outcome communicated separately` | `Any quotation, supply, sample, document or order decision is made and communicated separately from form receipt.` |

No durations, response targets, availability signals or automatic qualification badges render.

## 9. Questions before submission

These are visible answer blocks, not navigation cards and not Schema FAQ entities.

| Question | Exact answer |
|---|---|
| `What information is needed to request a titanium dioxide quotation?` | `Provide a company and business email, destination, application, a known grade or non-confidential target requirement, and an estimated purchase quantity with its unit. Packaging, document and sample context can be added when already known.` |
| `Can I submit an RFQ if I do not know the grade?` | `Yes. Choose “Unknown / need help” and add the current grade or a non-confidential target requirement. The request can then be reviewed by a person without forcing a product guess.` |
| `Will selected product, application or market context be retained?` | `Explicit context from an approved upstream page can be shown in the form when it is valid. You can review, change or remove it before submitting. Prefill does not mean the product is recommended or available.` |
| `Does submission confirm a quotation or supply?` | `No. Submission confirms receipt for human review only. Price, stock, MOQ, lead time, shipping, samples, documents, orders and any approval remain separate decisions.` |

## 10. CTA and internal-link contract

### 10.1 Inbound

- Home and commercial landing pages link with action language such as `Request a Quote`.
- Product/Grade links may pass the exact explicit grade.
- Application links may pass the Application and only an explicitly selected approved grade context.
- Market links may pass the destination only.
- Document and Resource links may pass explicit neutral needs/context only.

### 10.2 Outbound

| Destination | Treatment | Gate |
|---|---|---|
| Products Hub | Descriptive text link after success or in unknown-grade support | Render only when route-live |
| Applications Hub | Descriptive text link outside the form if needed | Render only when route-live; no grade recommendation |
| Request Documents | Optional task-specific text link after the form | Render only when route-live; never a failure fallback |
| Request Sample | Optional task-specific text link after the form | Render only when route-live; sample-interest field remains distinct |
| Contact | No fallback or substitute link | Prohibited in failure/unavailable states |

There is no second Teal solid page-body CTA. The Header/Footer RFQ is not removed or transformed into a submit action.

## 11. Global Chrome V0.5 consumption

- Desktop Header 84px and Mobile Header 64px remain exact shared components.
- Production horizontal SVG is used in light Header contexts; reverse monochrome SVG is used in the Deep Navy Footer.
- Navigation order remains `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`.
- CONV-RFQ has no approved current navigation parent: `aria-current="page"` count per Desktop/Mobile navigation surface is 0.
- Buyer-visible `CURRENT` text, badge or suffix count is 0.
- The RFQ terminal action remains visually Teal and always points to `/request-a-quote/`; it does not receive a false current marker.
- Desktop Header, Mobile Header, Mobile Menu, Desktop Footer and Mobile Footer keep RFQ visible in default, validation, failure, success and restricted review states.

## 12. Privacy and release gates

Gate 2 approves no final privacy/legal text. The wireframe and visual direction must reserve a clearly annotated slot without showing invented Buyer Clean claims.

| Gate | Current status | Required closure |
|---|---|---|
| Privacy/controller/purpose/retention/recipients/rights/contact | `OPEN / BLOCKS_GATE_5_AND_RELEASE` | Approved data-handling wording and owner |
| Receiver/inbox/human owner | `NOT_VERIFIED / BLOCKS_OPERATIONAL_RELEASE` | Verified RFQ receiver, responsibility and handling path |
| Alternate failure channel | `NOT_VERIFIED` | Optional branch only after workflow-specific verification; no Contact fallback |
| Route/form readiness | `NOT_TESTED / RELEASE_BLOCKER` | External implementation and release QA |
| Index/canonical/robots | Gate 2 recommendation submitted separately | User/project-control review |

## 13. Gate 2 validation

- [x] Page identity, URL, type and primary keyword remain unchanged.
- [x] One content hierarchy and one page-body form are defined.
- [x] Real buyer-facing copy uses receipt-only and no-approval language.
- [x] Minimum fields, conditions and realistic maximum lengths are specified.
- [x] Products, Grade, Applications, Markets, Documents and Resources prefill rules are explicit.
- [x] Unknown, multiple-grade, stale-context and insufficient-information behavior is defined.
- [x] PRODUCT V0.3, M-2377 and M-996/M-2196 restrictions are preserved.
- [x] Global Chrome V0.5 current-link count 0 and fixed RFQ are preserved.
- [x] No privacy, contact, email, SLA, price, stock, MOQ, lead-time, logistics, sample, file or order claim was invented.
- [x] Gate 5, development and publication remain outside scope.

## 14. Gate status

`CONV-RFQ-G2-01 = COMPLETED_FOR_GATE_4_SUBMISSION / NOT_USER_APPROVED`

This Gate 2 artifact is submitted as part of the Gate 4 review package. It does not authorize Gate 5, implementation, indexing activation or publication.
