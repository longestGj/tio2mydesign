# DOC-000 Content Architecture and Full Copy V0.6

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Page type | Navigation hub |
| Gate | Gate 2 — targeted final-reader copy revision |
| Review ID | `DOC-000-G2-V11-COPY-02` |
| Status | `APPROVED / CLOSED` |
| Checkpoint | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / APPROVED` |
| Approval date | 2026-09-01 |
| Approval source | Explicit user confirmation: `确认 DOC-000 Gate 2 COPY-02。` |
| Approved upstream | Gate 1 `DOC-000-G1-V11-TYPES-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Governing principle | Root `AGENTS.md` §2.4 complete-site and final-reader experience |
| Language | English only |
| Stop | No Gate 3 wireframe, Gate 4 visual, Gate 5, child page, development or release |

V0.6 is the sole current Gate 2 content candidate. V0.5 remains preserved as `HISTORICAL / SUPERSEDED_BY_COPY_02 / NOT_CURRENT_CONTROL`.

## 1. Page job and conversion boundary

DOC-000 helps an international B2B buyer understand the documentation categories relevant to product evaluation and supplier qualification, select one Product Grade and continue to the separate Request Documents workflow.

The page provides selection and orientation. `/request-documents/` owns request capture. The only cross-page body contract remains:

```text
Valid selected Product Grade
→ /request-documents/?product={GRADE}
→ Product Grade is prefilled and remains editable
```

DOC-000 passes the Grade only. It does not pass market, destination, language, documentation category, availability or approval state.

## 2. Final module sequence

Shared Global Header is consumed before the page body and is not redesigned by DOC-000.

| Order | Module | Buyer decision supported | Required output |
|---:|---|---|---|
| 01 | Hero | Understand the Hub purpose and move to the Grade decision | Visible breadcrumb, eyebrow, H1, positive body, English note, selector anchor CTA |
| 02 | Compact three-step explanation | Understand the shortest path through the page | Choose review need → select Grade → continue to Request Documents |
| 03 | Review Scenarios | Identify the type of review being prepared | Exactly three approved scenarios |
| 04 | Documentation Categories | Identify the relevant information group | Exactly four approved informational cards |
| 05 | Product Grade Selector | Bind the request to one of 14 approved identifiers | No-default selector, selected state and Grade-first CTA |
| 06 | Request explanation | Understand why context is collected | Approved two-sentence explanation plus one scope sentence |
| 07 | Buyer Questions | Resolve selection and next-step questions without repetition | Six visible questions and answers |
| 08 | Closing CTA | Continue or return to the required Grade selection | State-aware CTA |
| 09 | Shared Footer | Continue through final site-wide navigation and legal links | Consume shared Footer with four approved legal links |

There is no standalone `Document Request Essentials`, `Quick Answers`, Finder, Document Index, result list, file inventory or additional documentation-card section.

## 3. Complete Buyer Clean copy

### 3.1 Hero

The breadcrumb is visible within the Hero region and is not a separate content module.

| Element | Final English copy / behavior |
|---|---|
| Breadcrumb | `Home / Documents`; `Home` → `/`; current item=`Documents` |
| Breadcrumb accessible label | `Breadcrumb` |
| Eyebrow | `DOCUMENT HUB` |
| H1 | `Documents for Product & Supplier Qualification` |
| Body | `Explore documentation categories for product evaluation and supplier qualification, select the relevant titanium dioxide grade, and continue to Request Documents.` |
| Note | `Requests are currently handled in English.` |
| CTA | `Select a Product Grade` |
| CTA destination | In-page anchor to the Product Grade Selector; move focus to the field label |

The Hero CTA is not a link to `/request-documents/`. It describes its actual behavior: moving the buyer to the required Grade selection.

### 3.2 Compact three-step explanation

Heading: `How It Works`

| Step | Label | Final English copy |
|---:|---|---|
| 1 | `Choose your review need` | `Use the review scenarios and documentation categories to identify the information your team needs.` |
| 2 | `Select a Product Grade` | `Choose the titanium dioxide grade connected to your review.` |
| 3 | `Continue to Request Documents` | `Carry the selected grade into the request page and add the details your team wants reviewed.` |

### 3.3 Review Scenarios

Heading: `Supporting Your Review Process`

Intro: `Start with the decision your team is preparing to make.`

| Scenario | Final English copy |
|---|---|
| `Product Evaluation` | `Technical, product, safety and handling information for product and application evaluation.` |
| `Quality & Supplier Qualification` | `Quality, COA-related and supplier information for quality assurance and supplier review.` |
| `Origin & Supplier Qualification Review` | `Origin-review and supplier-qualification information for a scoped purchasing review.` |

All three scenario cards are informational. They have no individual CTA, count or status badge.

### 3.4 Documentation Categories

Heading: `Documentation You Can Request`

Intro: `Choose the category that best matches your review.`

| Documentation group | Final English copy |
|---|---|
| `Technical Data & Product Documentation` | `Product data, specifications and technical information for evaluation.` |
| `Safety Documentation` | `Safety, handling and storage information for internal review.` |
| `Quality & COA Documentation` | `Quality information and COA-related support for QA and purchasing review.` |
| `Origin & Supplier Qualification Documentation` | `Origin-review and supplier-qualification information for purchasing context.` |

The four cards are category descriptions, not document records. They have no card-level link, button, count, badge or empty action area.

### 3.5 Product Grade Selector

Heading: `Select a Product Grade`

Body: `Choose the grade related to your review. Your selection will be carried into Request Documents and can be changed there.`

| Element | Final English copy / rule |
|---|---|
| Field label | `Product Grade` |
| Default prompt | `Select a product grade` |
| Helper | `Choose one grade to continue.` |
| Unselected validation | `Select a product grade to continue.` |
| Selected confirmation | `Selected product grade: {GRADE}` |
| Selected-state CTA | `Continue to Request Documents` |
| Contextual text link | `Not sure which grade to select? Explore Products.` → `/products/` |

Approved selector values, rendered once each and with no default:

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

Interaction contract:

- No Grade is selected by default.
- Before selection, the selector shows its prompt and helper; no empty or guessed request URL is generated.
- After a valid selection, show `Continue to Request Documents`.
- Target: `/request-documents/?product={GRADE}` or an equivalent safe state-transfer mechanism.
- Validate the Grade against the approved 14-value set before handoff.
- The Product Grade field on `/request-documents/` is prefilled and remains editable.

### 3.6 Request explanation

Heading: `Why Documentation Is Provided on Request`

Body: `Documentation requirements vary by product and review purpose. Submitting a request helps our team understand the scope and identify the relevant materials for review.`

Scope note: `Availability and applicable scope are confirmed during review.`

This scope note is the sole Buyer Clean limitation sentence.

### 3.7 Buyer Questions

Heading: `Buyer Questions`

| Question | Final English answer |
|---|---|
| `What is the Documents Hub?` | `It helps you choose a documentation category and Product Grade before continuing to Request Documents.` |
| `How do I request documentation?` | `Select a Product Grade, choose Continue to Request Documents, then add your documentation requirements on the request page.` |
| `Which documentation category should I choose?` | `Choose technical/product, safety, quality/COA, or origin/supplier qualification according to the review your team is preparing.` |
| `What if I am not sure which Product Grade applies?` | `Use Explore Products to review the available grades, then return to select the grade most relevant to your request.` |
| `Can I change the Product Grade on the request page?` | `Yes. The selected Grade is carried into Request Documents as an editable value.` |
| `What language is used for document requests?` | `Requests are currently handled in English.` |

There is no separate quick-answer module. These visible answers are the sole page-owned question-and-answer source for GEO and conditional FAQ Schema.

### 3.8 Closing CTA

Eyebrow: `DOCUMENT REQUEST`

Heading: `Continue with Your Product Grade`

Body: `Select the relevant Product Grade to carry it into Request Documents. You can review or change the Grade before submitting your request.`

| State | CTA | Behavior |
|---|---|---|
| No Grade selected | `Select a Product Grade` | Return to and focus the Product Grade Selector |
| Valid Grade selected | `Continue to Request Documents` | Use the approved Grade-first handoff |

No secondary body CTA or contact substitution is added.

### 3.9 Shared Footer

DOC-000 consumes the final shared Footer owned by Global Chrome. The Footer includes the shared site navigation and these final-reader legal controls:

- `Privacy Policy`
- `Terms of Use`
- `Cookie Policy`
- `Cookie Settings`

Footer ownership, routes, styling and implementation remain with Global Chrome. The four legal controls are final-site dependencies verified before release rather than Buyer Clean placeholders.

## 4. Internal dependencies and non-render gates

These controls belong to governance and later handoff/QA, not Buyer Clean copy:

| Dependency | State | Control |
|---|---|---|
| `/request-documents/` and editable Grade prefill | `REQUIRED_FINAL_SITE_DEPENDENCY` | Verify at Gate 7–10; block release if unavailable |
| Shared legal routes and Cookie Settings interaction | `REQUIRED_FINAL_SITE_DEPENDENCY` | Consume shared Footer; verify before release |
| Public file inventory | `NOT_ESTABLISHED` | No file/result module or structured file entity |
| Independent fifth capability | `NOT_ESTABLISHED` | `DO_NOT_RENDER` |
| Other/catch-all Hub card | Not part of approved taxonomy | `DO_NOT_RENDER_AS_HUB_CARD` |
| Market, destination or language selector | Outside approved Hub contract | `DO_NOT_RENDER` |

Complete-site dependencies do not insert `PENDING`, `RELEASE BLOCKER`, internal status labels, empty placeholders or fallback messages into the final Buyer Clean experience.

## 5. Internal-link and CTA contract

| Source | Link / action | Purpose |
|---|---|---|
| Breadcrumb | `Home` → `/` | Site hierarchy |
| Hero | `Select a Product Grade` → `#product-grade` | Move to the required selection |
| Selector helper | `Explore Products` → `/products/` | Help identify a Grade |
| Selected selector state | `Continue to Request Documents` → Grade-first handoff | Main cross-page conversion |
| Closing CTA without Grade | `Select a Product Grade` → `#product-grade` | Return to required selection |
| Closing CTA with Grade | `Continue to Request Documents` → Grade-first handoff | Main cross-page conversion |
| Shared Footer | Shared navigation plus four legal controls | Global Chrome-owned final-site navigation |

No child-document, Market, Application, Contact or RFQ body link is introduced.

## 6. Shared Global Chrome consumption

- Consume the latest approved shared Header, Mobile Header, Mobile Menu and Footer authority; DOC-000 current key=`Documents`.
- Keep the global `Request a Quote` action and `/request-a-quote/` route as defined by Global Chrome.
- Consume the shared final Footer legal links and Cookie Settings control.
- DOC-000 does not redefine Logo, navigation order, Header/Footer dimensions, current-state styling, Footer columns, legal copy or cookie behavior.

## 7. Gate 2 acceptance checklist

- Final body sequence is Hero → compact three-step explanation → three scenarios → four documentation groups → Product Grade Selector → request explanation → Buyer Questions → Closing CTA → Shared Footer.
- No standalone Quick Answers or Document Request Essentials module remains.
- Hero H1, Body, English note and selector-anchor CTA match the directed copy exactly.
- Selected-state CTA is `Continue to Request Documents`.
- Three scenario labels, four category labels and 14 Grade values match the approved Gate 1 contract.
- Availability/scope language appears once in Buyer Clean, in the request explanation only.
- Buyer Questions provide selection and next-step help without repeated disclaimers.
- Shared Footer consumes Privacy Policy, Terms of Use, Cookie Policy and Cookie Settings as final-site dependencies.
- No Gate 3, visual or implementation authority is created.

## 8. Review request

Project control passed and the user explicitly approved the revised final-reader module order and copy on 2026-09-01. Status=`APPROVED / CLOSED`; checkpoint=`FULL_COPY_AND_MODULE_ORDER_CONFIRMED / APPROVED`. Gate 3 remains separately gated and is not authorized by this approval.
