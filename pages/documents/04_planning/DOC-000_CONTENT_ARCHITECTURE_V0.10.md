# DOC-000 Normalized Content Architecture V0.10

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Page type | Navigation hub |
| Decision ID | `DOC-000-HUB-FAQ-GRADE-ALIGN-01` |
| Date | 2026-09-05 |
| Status | `USER_APPROVED_TARGETED_COPY_CORRECTION / PENDING_EXTERNAL_IMPLEMENTATION` |
| Visible-copy authority | Explicit user decision dated 2026-09-05, layered over approved V0.9 |
| Supersedes for current Buyer Clean consumption | V0.9; preserved as the approved pre-correction baseline |
| Scope | FAQ #2 answer only; page identity, module order, interaction, SEO/GEO, Schema and visual geometry are unchanged |

This document carries forward the complete approved V0.9 architecture and applies the user-approved cross-page clarification to Buyer Questions FAQ #2. The correction aligns the Hub with the direct Hero request path, the DOC-TDS optional-prefill behavior and the CONV-DOC requirement that Product Grade be selected before submission.

## 1. Page job and cross-page boundary

DOC-000 helps an international B2B buyer identify documentation purposes for product evaluation or supplier qualification and continue to `/request-documents/`. It offers two distinct paths:

```text
Hero direct request
→ /request-documents/
→ no preselected Grade

Valid selected Product Grade
→ /request-documents/?product={GRADE}
→ Product Grade is prefilled and remains editable
```

The Hub passes Grade only on the Grade-first path. It never passes scenario, documentation category, market, destination, language, availability, applicability, approval or delivery state. The Request Documents page owns document-type selection and request submission.

## 2. Current module order

1. Hero with breadcrumb, direct request CTA and evidence-controlled media region.
2. Product Grade Selector.
3. Lightweight `How It Works`.
4. `Supporting Your Review Process`.
5. `Documentation You Can Request`.
6. Full-width `Why Documents Are Provided on Request`.
7. Buyer Questions accordion.
8. Compact Closing CTA.
9. Shared Footer.

The Product Grade Selector is the first body module after the Hero. Shared Header remains outside the page body.

## 3. Buyer Clean copy and behavior

### 3.1 Hero

| Element | Copy / behavior |
|---|---|
| Breadcrumb | `Home / Documents`; Home → `/` |
| Eyebrow | `DOCUMENT HUB` |
| H1 | `Documents for Product & Supplier Qualification` |
| Body | `Request technical, safety, quality, COA, origin and supplier-qualification documentation for the titanium dioxide grade your team is evaluating.` |
| Note | `Requests are currently handled in English.` |
| CTA | `Start a Document Request` |
| CTA behavior | Native accessible link to `/request-documents/`; no query, fragment, Grade transfer, selector scroll or focus transfer |

The receiver opens with no preselected Grade. The Hero media is decorative/evidence-neutral and establishes no file, factory, certificate, origin or compliance fact.

### 3.2 Product Grade Selector

Heading: `Select a Product Grade`

Body: `Select the product grade the documents relate to. It will be prefilled on the request form and can be changed before submission.`

| Element | Copy / rule |
|---|---|
| Field label | `Product Grade` |
| Control type | One closed dropdown/select; not cards or a permanently visible list |
| Prompt | `Select a product grade` |
| Helper | `Choose one grade to continue.` |
| Validation | `Select a product grade to continue.` |
| Selected confirmation | `Selected product grade: {GRADE}` |
| Primary CTA | `Continue to Request Documents` |
| Assistance link | `Not sure which grade to select? Explore Products.` → `/products/` |

Allowed values, once each and with no default: `M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`.

#### Initial state

- The dropdown, helper and `Continue to Request Documents` are present in the initial DOM and visibly rendered.
- The Continue button is focusable and operable; it is not disabled or `aria-disabled`.
- No Grade is selected by default.
- A stable validation position exists under the helper so an error does not cause a disruptive layout jump.

#### No-selection validation

When the visible Continue button is activated without a Grade:

1. Do not navigate.
2. Render `Select a product grade to continue.` in the validation position.
3. Associate the error with the Product Grade field.
4. Move focus to the dropdown.
5. Do not clear unrelated page state.

#### Valid selected state

- The dropdown displays the selected Grade.
- Render `Selected product grade: {GRADE}`.
- The same Continue button remains in the same location.
- Activation continues to `/request-documents/?product={GRADE}` or the approved safe equivalent.
- The receiving Product Grade remains editable and removable.

### 3.3 How It Works

Heading: `How It Works`

1. `Identify Your Review Need` — `Choose product evaluation, quality and supplier qualification, or origin review.`
2. `Select a Product Grade` — `Choose the titanium dioxide grade the documents should relate to.`
3. `Request Documents` — `Continue with the grade prefilled, select the document types you need, and submit your request.`

This is a lightweight numbered sequence, not three cards.

### 3.4 Supporting Your Review Process

Heading: `Supporting Your Review Process`

Intro: `Start with the decision your team is preparing to make.`

| Scenario | Copy |
|---|---|
| `Product Evaluation` | `Review product data, specifications, safety and handling information for the selected grade.` |
| `Quality & Supplier Qualification` | `Support QA and supplier qualification with quality information, COA-related documentation and supplier details.` |
| `Origin & Supplier Qualification Review` | `Request origin and supplier-qualification information for purchasing and internal review.` |

These are the only three scenario cards and have no CTA, count or status badge.

### 3.5 Documentation You Can Request

Heading: `Documentation You Can Request`

Intro: `Choose the category that best matches your review.`

| Category | Copy |
|---|---|
| `Technical Data & Product Documentation` | `Technical product data and specifications for evaluating the selected grade.` |
| `Safety Documentation` | `Safety, handling and storage information for workplace and product review.` |
| `Quality & COA Documentation` | `Quality information and COA-related documentation for QA and purchasing checks.` |
| `Origin & Supplier Qualification Documentation` | `Origin and company documentation for supplier qualification and purchasing review.` |

The four cards remain informational. They have no action, count, badge or empty action slot. `Other Documentation` and REACH/compliance do not become a fifth Hub card.

### 3.6 Why Documents Are Provided on Request

Heading: `Why Documents Are Provided on Request`

Body: `Documentation can differ by product and review purpose. Submitting a request helps match the materials to the selected grade and the information your team needs. Availability and applicable scope are confirmed during review.`

This remains one continuous full-width information band.

### 3.7 Buyer Questions

The six question buttons are always visible. Answers are collapsed by default, remain in the initial HTML/DOM, and expand when their question is activated. One item may be expanded at a time.

| Question | Answer |
|---|---|
| `What documents can I request?` | `You can request technical/product, safety, quality/COA, and origin/supplier-qualification documentation.` |
| `Do I need to know the Product Grade?` | `You can start a document request without a preselected Grade, but a Product Grade is required before submission.` |
| `Can I request more than one document type?` | `Yes. On the Request Documents form, you can select the document types your team needs.` |
| `Can I change the prefilled Product Grade?` | `Yes. The selected Product Grade is prefilled on the request form and can be changed before submission.` |
| `Why are documents provided on request?` | `Documentation can differ by product and review purpose. A request helps match the materials to the selected Grade and your team's needs.` |
| `What language is used for document requests?` | `Requests are currently handled in English.` |

Each question is a native button or equivalent accessible disclosure with stable `aria-expanded` and `aria-controls` relationships. Enter and Space toggle the item without unexpected focus movement.

### 3.8 Closing CTA

| Element | Copy / behavior |
|---|---|
| Eyebrow | `DOCUMENT REQUEST` |
| Heading | `Ready to Request Documents?` |
| Body | `Select the product grade the documents relate to. We’ll carry it into the request form, where you can choose the document types you need.` |
| No-selection action | `Select a Product Grade`; visible, focuses the upper dropdown and does not navigate |
| Selected action | `Continue to Request Documents`; visible and uses the same selected Grade handoff |

The Closing CTA never renders an empty or missing action slot.

### 3.9 Shared Footer

Consume the approved Global Chrome Footer, persistent RFQ and final-site legal controls. Current legal controls are Privacy Policy, Dasar Privasi (BM), Cookie Policy and the non-page Cookie Settings button. There is no approved Terms page or `/terms-of-use/` route. Any earlier DOC-000 `Terms of Use` reference is historical and superseded by the user-approved no-Terms architecture.

## 4. SEO/GEO/Schema and initial-DOM boundary

- Visible and machine-readable relationships are limited to the page identity, visible breadcrumb and conditional exact FAQ parity.
- H1, Hero copy, selector labels/options, module copy, all FAQ questions/answers and real links are present in the initial HTML/DOM.
- No `ItemList`, `DigitalDocument`, file URL, inventory, file count, Download/View action, certification, registration, compliance coverage, Product-file or Grade-file relationship is created.
- No `potentialAction` is eligible until the Request Documents receiver and editable Grade prefill are verified for release.
- Social metadata uses the same approved SEO title/description source; a factual social image is prohibited without separate evidence and approval.

## 5. Shared ownership and legal authority

Global Chrome owns Header, Mobile Header, navigation, Mobile Menu, Production SVG Logo, persistent RFQ, Footer and legal utility controls. DOC-000 supplies only `current_navigation_key=Documents`.

Current legal authority chain:

1. `docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md`.
2. `docs/architecture/PAGE_REGISTRY_V0.2.md`.
3. `docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md`.

Gate 7 must not consume `/terms-of-use/` from an earlier DOC-000 file. The approved Privacy/Cookie routes and Cookie Settings behavior remain parallel release dependencies.

## 6. Frozen boundaries

- Page ID, URL, Navigation-hub role, `NO_PRIMARY_KEYWORD`, H1 and all Buyer Clean copy remain unchanged except the user-approved FAQ #2 answer.
- Exactly three scenarios, four documentation categories, 14 Grade identifiers and six FAQ items.
- No Finder, file inventory, file result, download/view action or fifth category.
- No universal applicability, availability, approval, timing or direct-download promise.
- Shared Chrome and evidence boundaries remain unchanged.
- Gate 5 PNG files remain immutable.
- No Gate 7, child page, implementation, D16, deployment or publication authority.

## 7. Version difference and authority

| V0.9 | V0.10 |
|---|---|
| FAQ #2 said the buyer must select a Product Grade before continuing | FAQ #2 distinguishes starting a request from the required Grade selection before submission |
| The Hub direct Hero path and FAQ wording could be read as inconsistent | The two-path Hub behavior, DOC-TDS optional prefill and CONV-DOC submission requirement are explicit and aligned |
| Approved pre-correction Buyer Clean baseline | Current user-approved Buyer Clean copy authority for DOC-000 |

The user explicitly approved this targeted correction in the project-control conversation on 2026-09-05. No other Buyer Clean sentence, module, control, route, SEO/GEO/Schema rule or evidence boundary changes.

The existing Gate 5 raster assets, Gate 8 implementation and Gate 9 closure remain immutable evidence of the previous wording. Before release, the external WordPress/Next.js project must implement this one-answer correction and return it for targeted read-only QA. This approval does not authorize D16 code changes, deployment, publication, DNS or indexing.

