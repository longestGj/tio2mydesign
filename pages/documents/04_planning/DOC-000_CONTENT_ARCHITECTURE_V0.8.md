# DOC-000 Selector-CTA Content Architecture V0.8

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Page type | Navigation hub |
| Decision ID | `DOC-000-G2-G3-SELECTOR-CTA-01` |
| Decision date | 2026-09-02 |
| Decision source | Explicit user confirmation in the current project-control conversation |
| Status | `APPROVED / CLOSED` |
| Superseded candidate | Content Architecture V0.7; preserved, not overwritten |
| Scope | Selector location, persistent Continue action and affected module order only |

All reader-focused copy approved for the previous candidate is retained unless this document explicitly changes its placement or interaction. Gate 1 is not reopened.

## 1. Page job and cross-page boundary

DOC-000 helps an international B2B buyer identify the documentation needed for product evaluation or supplier qualification, select one Product Grade and continue to `/request-documents/`. The Request Documents page owns document-type selection and request submission.

```text
Valid selected Product Grade
→ /request-documents/?product={GRADE}
→ Product Grade is prefilled and remains editable
```

The Hub passes Grade only. It does not pass scenario, documentation category, market, destination, language, availability or approval state.

## 2. Revised module order

1. Hero with breadcrumb and evidence-controlled media region
2. Product Grade Selector
3. Lightweight `How It Works`
4. `Supporting Your Review Process`
5. `Documentation You Can Request`
6. Full-width `Why Documents Are Provided on Request`
7. Buyer Questions accordion
8. Compact Closing CTA
9. Shared Footer

The Product Grade Selector is the first body module after the Hero. Shared Header remains outside the page body.

## 3. Buyer Clean copy

### 3.1 Hero

| Element | Copy / behavior |
|---|---|
| Breadcrumb | `Home / Documents`; Home → `/` |
| Eyebrow | `DOCUMENT HUB` |
| H1 | `Documents for Product & Supplier Qualification` |
| Body | `Request technical, safety, quality, COA, origin and supplier-qualification documentation for the titanium dioxide grade your team is evaluating.` |
| Note | `Requests are currently handled in English.` |
| CTA | `Select a Product Grade` |
| CTA behavior | Scroll to the immediately following selector with sticky-Header offset and focus the Product Grade field |

The Hero CTA is not the final Request Documents action. The right-side media region remains geometry only at Gate 3; it approves no image or factual implication.

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
- The receiving Product Grade remains editable.

### 3.3 How It Works

Heading: `How It Works`

1. `Identify Your Review Need` — `Choose product evaluation, quality and supplier qualification, or origin review.`
2. `Select a Product Grade` — `Choose the titanium dioxide grade the documents should relate to.`
3. `Request Documents` — `Continue with the grade prefilled, select the document types you need, and submit your request.`

This remains a lightweight numbered sequence, not three cards.

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

The four cards remain informational. They have no action, count, badge or empty action slot.

### 3.6 Why Documents Are Provided on Request

Heading: `Why Documents Are Provided on Request`

Body: `Documentation can differ by product and review purpose. Submitting a request helps match the materials to the selected grade and the information your team needs. Availability and applicable scope are confirmed during review.`

This remains one continuous full-width information band.

### 3.7 Buyer Questions

The six question buttons are always visible. Answers are collapsed by default and expand when their question is activated. One expanded item may be shown in Gate 3 as interaction evidence.

| Question | Answer |
|---|---|
| `What documents can I request?` | `You can request technical/product, safety, quality/COA, and origin/supplier-qualification documentation.` |
| `Do I need to know the Product Grade?` | `Yes. Select the Product Grade the documents should relate to. If you are not sure, explore Products before continuing.` |
| `Can I request more than one document type?` | `Yes. On the Request Documents form, you can select the document types your team needs.` |
| `Can I change the prefilled Product Grade?` | `Yes. The selected Product Grade is prefilled on the request form and can be changed before submission.` |
| `Why are documents provided on request?` | `Documentation can differ by product and review purpose. A request helps match the materials to the selected Grade and your team's needs.` |
| `What language is used for document requests?` | `Requests are currently handled in English.` |

### 3.8 Closing CTA

| Element | Copy / behavior |
|---|---|
| Eyebrow | `DOCUMENT REQUEST` |
| Heading | `Ready to Request Documents?` |
| Body | `Select the product grade the documents relate to. We’ll carry it into the request form, where you can choose the document types you need.` |
| No-selection action | `Select a Product Grade`; visible and focuses the upper dropdown |
| Selected action | `Continue to Request Documents`; visible and uses the same selected Grade handoff |

The Closing CTA never renders an empty or missing action slot.

### 3.9 Shared Footer

Consume the approved Global Chrome Footer, persistent RFQ and final-site legal controls. The Footer shown in a DOC-000 wireframe is assembly evidence, not DOC-000-owned Footer design or copy.

## 4. SEO/GEO/Schema impact

SEO/GEO/Schema Contract V0.6 is inherited unchanged. Selector movement and persistent button visibility create no new structured entity, file relation or `potentialAction`. `potentialAction` remains blocked until the Request Documents receiver and editable prefill are verified for release.

## 5. Frozen boundaries

- Page ID, URL, Navigation-hub role, `NO_PRIMARY_KEYWORD`, H1 and reader-focused body copy remain unchanged.
- Exactly four documentation categories and 14 Grade identifiers.
- No Finder, file inventory, file result, download/view action or fifth category.
- No universal applicability, availability, approval, timing or direct-download promise.
- Shared Header/Footer/Menu, persistent RFQ, legal controls and evidence boundaries remain unchanged.
- No Gate 4/5, child page, implementation, D16, deployment or publication authority.

## 6. Version difference

| V0.7 | V0.8 |
|---|---|
| Selector followed categories | Selector is directly below Hero |
| Continue state was described but initial visual used an internal review note | Continue is visibly rendered from initial state |
| Initial error/selected behavior lived mainly in prose | Exact initial, validation and selected-state contract is explicit |
| Previous asset package held the current baseline | New V0.8 feeds Decision `DOC-000-G2-G3-SELECTOR-CTA-01` and new Gate 3 assets |

## 7. Gate boundary

Status=`APPROVED / CLOSED`. The user approved the complete Gate 3 candidate and separately authorized Gate 4 on 2026-09-02. This approval does not authorize Gate 5, child pages, development, D16, deployment or publication.
