# DOC-000 Normalized Content Architecture V0.9

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Page type | Navigation hub |
| Review input | `DOC-000-G6-PCR-02` |
| Date | 2026-09-02 |
| Status | `CURRENT_NORMALIZED_GATE6_INPUT / NOT_GATE6_APPROVED` |
| Visible-copy authority | Approved Gate 5 baseline, including `DOC-000-G4-HERO-CTA-02` |
| Supersedes for current consumption | V0.8; preserved as historical approved Gate 2/3 input |
| Scope | Current complete Buyer Clean copy, module order and interaction contract; no copy or visual change |

This document incorporates the later approved Hero direct-link decision into the complete content architecture. Gate 7 must consume this file directly and must not reconstruct Hero behavior from V0.8 plus an override.

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
| `Do I need to know the Product Grade?` | `Yes. Select the Product Grade the documents should relate to. If you are not sure, explore Products before continuing.` |
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

- Page ID, URL, Navigation-hub role, `NO_PRIMARY_KEYWORD`, H1 and all Buyer Clean copy remain unchanged.
- Exactly three scenarios, four documentation categories, 14 Grade identifiers and six FAQ items.
- No Finder, file inventory, file result, download/view action or fifth category.
- No universal applicability, availability, approval, timing or direct-download promise.
- Shared Chrome and evidence boundaries remain unchanged.
- Gate 5 PNG files remain immutable.
- No Gate 7, child page, implementation, D16, deployment or publication authority.

## 7. Version difference and authority

| V0.8 | V0.9 |
|---|---|
| Hero CTA described selector scroll/focus | Hero CTA is the approved native direct link `Start a Document Request` → `/request-documents/` |
| Needed a later override to reconstruct current behavior | Incorporates the approved Hero decision into one current complete input |
| Gate 3-era status text | Records Gate 5 `APPROVED / CLOSED` and Gate 6 PCR-02 review state |
| Generic final-site legal controls | Directly binds the approved no-Terms authority chain |

V0.9 changes no visible copy, module or Gate 5 visual. It is the current normalized content input for `DOC-000-G6-PCR-02`, whose status remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`. Gate 7 and development remain unauthorized.
