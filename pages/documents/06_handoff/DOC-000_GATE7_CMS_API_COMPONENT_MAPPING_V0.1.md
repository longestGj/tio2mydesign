# DOC-000 Gate 7 CMS / API / Component Mapping V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Package ID | `DOC-000-G7-HANDOFF-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Source | Brief V0.6 → Content Architecture V0.9 |
| Site scope | `tio2-my` |

## 1. Root entity

| Field | Type | Cardinality | Exact rule |
|---|---|---:|---|
| `site_scope` | enum/string | 1 | exact `tio2-my`; required and immutable for this record |
| `page_id` | string | 1 | exact `DOC-000` |
| `route` | route key/path | 1 | exact `/documents/` |
| `locale` | locale | 1 | exact `en` |
| `page_type` | enum | 1 | `navigation_hub` |
| `primary_keyword` | governance string | 1 | `NO_PRIMARY_KEYWORD`; never Buyer Clean copy |
| `current_navigation_key` | enum | 1 | `Documents`; passed to shared Chrome only |

Missing or mismatched root identity fails closed and blocks rendering/release. No other scope may supply a fallback.

## 2. Breadcrumb and Hero

| Field | Type | Cardinality | Exact value / rule |
|---|---|---:|---|
| `breadcrumb.items` | ordered objects | 2 | Home then Documents |
| `breadcrumb.items[0].label` | string | 1 | `Home` |
| `breadcrumb.items[0].href` | route | 1 | `/` |
| `breadcrumb.items[1].label` | string | 1 | `Documents` |
| `breadcrumb.items[1].current` | boolean | 1 | true; no self-link required |
| `hero.eyebrow` | string | 1 | `DOCUMENT HUB` |
| `hero.h1` | string | 1 | `Documents for Product & Supplier Qualification` |
| `hero.body` | text | 1 | `Request technical, safety, quality, COA, origin and supplier-qualification documentation for the titanium dioxide grade your team is evaluating.` |
| `hero.language_note` | string | 1 | `Requests are currently handled in English.` |
| `hero.cta.label` | string | 1 | `Start a Document Request` |
| `hero.cta.route_key` | enum | 1 | `REQUEST_DOCUMENTS` |
| `hero.cta.href` | resolved route | 1 | `/request-documents/`; no query or fragment |
| `hero.media_asset_key` | shared asset reference | 0..1 | evidence-neutral only; no foreign-scope fallback |

If Hero media is absent, collapse the media region according to the approved responsive contract. Do not create placeholder copy or a fact-bearing fallback. Missing required Hero copy or route blocks release.

## 3. Product Grade Selector

| Field | Type | Cardinality | Exact value / rule |
|---|---|---:|---|
| `selector.heading` | string | 1 | `Select a Product Grade` |
| `selector.body` | text | 1 | `Select the product grade the documents relate to. It will be prefilled on the request form and can be changed before submission.` |
| `selector.field_id` | stable ID | 1 | page-unique ID used by label, error and Closing focus action |
| `selector.label` | string | 1 | `Product Grade` |
| `selector.prompt` | string | 1 | `Select a product grade` |
| `selector.helper` | string | 1 | `Choose one grade to continue.` |
| `selector.error` | string | 1 | `Select a product grade to continue.` |
| `selector.selected_template` | string template | 1 | `Selected product grade: {GRADE}` |
| `selector.continue_label` | string | 1 | `Continue to Request Documents` |
| `selector.products_help_label` | string | 1 | `Not sure which grade to select? Explore Products.` |
| `selector.products_href` | route | 1 | `/products/` |
| `selector.grade_options` | ordered identifiers | exactly 14 | exact allowlist below; no default |

Ordered Grade allowlist:

`M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`.

The list must be unique, complete and in this order. Partial, duplicate, empty or foreign-scope lists fail closed and block release. Do not silently borrow another site's product list.

## 4. How It Works

`how_it_works.heading` = `How It Works`.

`how_it_works.items` has exactly three ordered objects:

| Order | Title | Body |
|---:|---|---|
| 1 | `Identify Your Review Need` | `Choose product evaluation, quality and supplier qualification, or origin review.` |
| 2 | `Select a Product Grade` | `Choose the titanium dioxide grade the documents should relate to.` |
| 3 | `Request Documents` | `Continue with the grade prefilled, select the document types you need, and submit your request.` |

Each object requires `stable_id`, `order`, `title` and `body`. Missing or extra objects block release. This is a numbered sequence, not three independent CTA cards.

## 5. Review scenarios

| Field | Exact value |
|---|---|
| `review_scenarios.heading` | `Supporting Your Review Process` |
| `review_scenarios.intro` | `Start with the decision your team is preparing to make.` |

`review_scenarios.items` has exactly three ordered informational objects:

| Order | Title | Body |
|---:|---|---|
| 1 | `Product Evaluation` | `Review product data, specifications, safety and handling information for the selected grade.` |
| 2 | `Quality & Supplier Qualification` | `Support QA and supplier qualification with quality information, COA-related documentation and supplier details.` |
| 3 | `Origin & Supplier Qualification Review` | `Request origin and supplier-qualification information for purchasing and internal review.` |

Optional icons are decorative keys only. Scenario objects have no route, CTA, status, count, availability or schema entity.

## 6. Documentation categories

| Field | Exact value |
|---|---|
| `document_categories.heading` | `Documentation You Can Request` |
| `document_categories.intro` | `Choose the category that best matches your review.` |

`document_categories.items` has exactly four ordered informational objects:

| Order | Title | Body |
|---:|---|---|
| 1 | `Technical Data & Product Documentation` | `Technical product data and specifications for evaluating the selected grade.` |
| 2 | `Safety Documentation` | `Safety, handling and storage information for workplace and product review.` |
| 3 | `Quality & COA Documentation` | `Quality information and COA-related documentation for QA and purchasing checks.` |
| 4 | `Origin & Supplier Qualification Documentation` | `Origin and company documentation for supplier qualification and purchasing review.` |

Category objects have no route, CTA, status, count, file relation or empty action slot. Do not create a fifth category.

## 7. Why on Request band

| Field | Exact value |
|---|---|
| `why_on_request.heading` | `Why Documents Are Provided on Request` |
| `why_on_request.body` | `Documentation can differ by product and review purpose. Submitting a request helps match the materials to the selected grade and the information your team needs. Availability and applicable scope are confirmed during review.` |

Both fields are required. Render as one continuous full-width information band.

## 8. Buyer Questions

`faq.heading` = `Buyer Questions`; `faq.items` has exactly six ordered objects. Each object requires a stable ID, question, answer and order.

| Order | Question | Answer |
|---:|---|---|
| 1 | `What documents can I request?` | `You can request technical/product, safety, quality/COA, and origin/supplier-qualification documentation.` |
| 2 | `Do I need to know the Product Grade?` | `Yes. Select the Product Grade the documents should relate to. If you are not sure, explore Products before continuing.` |
| 3 | `Can I request more than one document type?` | `Yes. On the Request Documents form, you can select the document types your team needs.` |
| 4 | `Can I change the prefilled Product Grade?` | `Yes. The selected Product Grade is prefilled on the request form and can be changed before submission.` |
| 5 | `Why are documents provided on request?` | `Documentation can differ by product and review purpose. A request helps match the materials to the selected Grade and your team's needs.` |
| 6 | `What language is used for document requests?` | `Requests are currently handled in English.` |

If any answer is missing or differs from visible content, omit FAQ Schema and block release until all six visible pairs are restored. No answer is fetched only after activation.

## 9. Closing CTA

| Field | Exact value / rule |
|---|---|
| `closing.eyebrow` | `DOCUMENT REQUEST` |
| `closing.heading` | `Ready to Request Documents?` |
| `closing.body` | `Select the product grade the documents relate to. We’ll carry it into the request form, where you can choose the document types you need.` |
| `closing.unselected_label` | `Select a Product Grade` |
| `closing.selected_label` | `Continue to Request Documents` |
| `closing.selector_target_id` | exact stable ID of the upper select |

Without a selected Grade, the action focuses the upper select and does not navigate. With a valid selected Grade, it uses the same handoff as Selector Continue. The action is never omitted or shown as an empty/disabled slot.

## 10. Component mapping

| Content group | Component responsibility |
|---|---|
| Breadcrumb | shared/local breadcrumb primitive with visible current page |
| Hero | page Hero; direct native link; optional decorative media |
| Selector | labelled select, validation region, selected confirmation, Continue button and Products native link |
| How It Works | ordered semantic list |
| Scenarios | three informational cards |
| Categories | four informational cards |
| Why band | full-width information region |
| FAQ | accessible single-open disclosure group |
| Closing | state-aware action region linked to the same selector state |
| Chrome | shared owner components only |

## 11. Global fail-closed rules

- Missing required singleton content blocks release; do not fill from another scope.
- Invalid repeated object is omitted atomically and cardinality failure blocks release.
- Missing route never falls back to Contact or RFQ.
- Missing media omits media without placeholder claims.
- Missing FAQ answer disables FAQ Schema and blocks complete release.
- No internal token, file placeholder, fake Download/View control or unverified claim renders publicly.

## 12. Boundary

Status remains `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`. This mapping is a specification only and does not authorize Gate 8 or implementation.
