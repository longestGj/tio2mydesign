# DOC-000 Reader-Focused Content Architecture V0.7

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Page type | Navigation hub |
| Rework ID | `DOC-000-G2-G3-READER-COPY-WF-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_CONFIRMATION / NOT_APPROVED` |
| Trigger | User-approved project-control reader-focused revision |
| Preserved upstream | Gate 1 page identity, four-category taxonomy and evidence boundaries |
| Supersedes if approved | Gate 2 Content Architecture V0.6 |
| Boundary | Targeted Buyer Clean copy and Gate 3 structural rework only |

V0.6 remains preserved as approved historical input. V0.7 is the only current rework candidate and is not approved until project-control review and user confirmation are recorded.

## 1. Page job

DOC-000 helps an international B2B buyer identify the documentation needed for product evaluation or supplier qualification, bind the request to one Product Grade and continue to `/request-documents/`. The separate Request Documents page owns document-type selection and request submission.

The Hub passes Grade only:

```text
Valid selected Product Grade
→ /request-documents/?product={GRADE}
→ Product Grade is prefilled and remains editable
```

## 2. Final-reader module order

1. Hero with visible breadcrumb and a formal evidence-controlled media region
2. Lightweight horizontal `How It Works` sequence
3. `Supporting Your Review Process` scenario cards
4. `Documentation You Can Request` category cards
5. Product Grade Selector
6. Full-width `Why Documents Are Provided on Request` information band
7. Buyer Questions accordion
8. Compact Closing CTA
9. Shared Footer

Shared Header precedes the body and remains owned by Global Chrome.

## 3. Buyer Clean copy

### 3.1 Hero

| Element | Copy / behavior |
|---|---|
| Breadcrumb | `Home / Documents`; Home → `/` |
| Eyebrow | `DOCUMENT HUB` |
| H1 | `Documents for Product & Supplier Qualification` |
| Body | `Request technical, safety, quality, COA, origin and supplier-qualification documentation for the titanium dioxide grade your team is evaluating.` |
| Note | `Requests are currently handled in English.` |
| CTA | `Select a Product Grade` → `#product-grade`; focus the selector |

The Desktop Hero reserves a real right-side visual/media region. Gate 3 defines its geometry and crop-safe boundary only. No image fact, factory, stock, certification, capacity, file-availability or market-coverage claim is approved here.

### 3.2 How It Works

Heading: `How It Works`

| Step | Label | Copy |
|---:|---|---|
| 1 | `Identify Your Review Need` | `Choose product evaluation, quality and supplier qualification, or origin review.` |
| 2 | `Select a Product Grade` | `Choose the titanium dioxide grade the documents should relate to.` |
| 3 | `Request Documents` | `Continue with the grade prefilled, select the document types you need, and submit your request.` |

This is a lightweight numbered sequence, not three large cards.

### 3.3 Supporting Your Review Process

Heading: `Supporting Your Review Process`

Intro: `Start with the decision your team is preparing to make.`

| Scenario | Copy |
|---|---|
| `Product Evaluation` | `Review product data, specifications, safety and handling information for the selected grade.` |
| `Quality & Supplier Qualification` | `Support QA and supplier qualification with quality information, COA-related documentation and supplier details.` |
| `Origin & Supplier Qualification Review` | `Request origin and supplier-qualification information for purchasing and internal review.` |

These are the only three scenario cards. They have no action, count or status badge.

### 3.4 Documentation You Can Request

Heading: `Documentation You Can Request`

Intro: `Choose the category that best matches your review.`

| Category | Copy |
|---|---|
| `Technical Data & Product Documentation` | `Technical product data and specifications for evaluating the selected grade.` |
| `Safety Documentation` | `Safety, handling and storage information for workplace and product review.` |
| `Quality & COA Documentation` | `Quality information and COA-related documentation for QA and purchasing checks.` |
| `Origin & Supplier Qualification Documentation` | `Origin and company documentation for supplier qualification and purchasing review.` |

The category cards are descriptions of request types, not evidence that a specific file exists or is available. They have no individual action, count, badge or empty action slot.

### 3.5 Product Grade Selector

Heading: `Select a Product Grade`

Body: `Select the product grade the documents relate to. It will be prefilled on the request form and can be changed before submission.`

| Element | Copy / rule |
|---|---|
| Field label | `Product Grade` |
| Prompt | `Select a product grade` |
| Helper | `Choose one grade to continue.` |
| Validation | `Select a product grade to continue.` |
| Selected confirmation | `Selected product grade: {GRADE}` |
| Selected CTA | `Continue to Request Documents` |
| Assistance link | `Not sure which grade to select? Explore Products.` → `/products/` |

Allowed values, once each and with no default: `M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`.

The valid handoff remains `/request-documents/?product={GRADE}` or a safe equivalent. The Hub passes Grade only; the receiving field remains editable.

### 3.6 Why Documents Are Provided on Request

Heading: `Why Documents Are Provided on Request`

Body: `Documentation can differ by product and review purpose. Submitting a request helps match the materials to the selected grade and the information your team needs. Availability and applicable scope are confirmed during review.`

This renders as one continuous full-width information band. The final sentence is the only Buyer Clean availability/scope limitation.

### 3.7 Buyer Questions

Heading: `Buyer Questions`

| Question | Answer |
|---|---|
| `What documents can I request?` | `You can request technical/product, safety, quality/COA, and origin/supplier-qualification documentation.` |
| `Do I need to know the Product Grade?` | `Yes. Select the Product Grade the documents should relate to. If you are not sure, explore Products before continuing.` |
| `Can I request more than one document type?` | `Yes. On the Request Documents form, you can select the document types your team needs.` |
| `Can I change the prefilled Product Grade?` | `Yes. The selected Product Grade is prefilled on the request form and can be changed before submission.` |
| `Why are documents provided on request?` | `Documentation can differ by product and review purpose. A request helps match the materials to the selected Grade and your team's needs.` |
| `What language is used for document requests?` | `Requests are currently handled in English.` |

The accordion is collapsed by default. Gate 3 shows one expanded item as interaction proof. These six visible Q&A pairs are the sole page-owned FAQ/GEO source.

### 3.8 Closing CTA

| Element | Copy / behavior |
|---|---|
| Eyebrow | `DOCUMENT REQUEST` |
| Heading | `Ready to Request Documents?` |
| Body | `Select the product grade the documents relate to. We’ll carry it into the request form, where you can choose the document types you need.` |
| No-selection CTA | `Select a Product Grade` → selector |
| Selected CTA | `Continue to Request Documents` → Grade-only handoff |

Desktop and Tablet use a compact horizontal closing band. Mobile reflows to a single column.

### 3.9 Shared Footer

Consume the approved shared Footer and its final-site controls: `Privacy Policy`, `Terms of Use`, `Cookie Policy`, `Cookie Settings`, and the permanent `Request a Quote` route. DOC-000 does not redefine their wording, routes, styling or behavior.

## 4. Frozen boundaries

- Page identity=`DOC-000`; URL=`/documents/`; type=`Navigation hub`; keyword=`NO_PRIMARY_KEYWORD`.
- Exactly four documentation categories and 14 Grade identifiers.
- No Finder, Document Index, public inventory, file row, count, download/view action, fifth category or catch-all card.
- No statement that a file exists, applies to all Grades/markets, is approved, is immediately available or can be directly downloaded.
- No Grade-to-file, market-to-file, availability or approval relation.
- Global Header/Footer, current Documents state, persistent RFQ and legal controls remain shared-owner authority.
- No Document child page, Gate 4/5, implementation or release authority.

## 5. Reader-focused change rationale

| Previous issue | Reader-focused revision |
|---|---|
| Hero described exploring the Hub rather than the buyer's request | Hero now names the six practical documentation needs and the evaluated Grade |
| Steps described page mechanics in abstract terms | Steps now state the buyer's review choice, Grade decision and request-page action |
| Scenario/category copy used generic “information for review” language | Copy now identifies the decision, document family and selected-Grade context |
| Request explanation split into sparse content and a separate limitation rail | One full-width paragraph explains why request context is needed and states the single limitation once |
| FAQ explained the Hub itself | FAQ now answers document types, Grade requirement, multi-select, editable prefill, request rationale and language |
| Closing repeated the navigation mechanic | Closing now tells the buyer what is carried forward and what can be chosen on the request form |

## 6. Gate boundary

Status=`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_CONFIRMATION / NOT_APPROVED`. This targeted candidate does not reopen Gate 1 and does not authorize Gate 4, Gate 5, child pages, development, D16 access, deployment, publication or indexing.
