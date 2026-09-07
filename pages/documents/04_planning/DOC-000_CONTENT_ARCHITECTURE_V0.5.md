# DOC-000 Content Architecture and Full Copy V0.5

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Page type | Navigation hub |
| Gate | Gate 2 — content architecture and complete copy |
| Review ID | `DOC-000-G2-V11-COPY-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED_PENDING_USER_CONFIRMATION` |
| Approved upstream | Gate 1 `DOC-000-G1-V11-TYPES-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Language | English only |
| Stop | No Gate 3 wireframe, Gate 4 visual, Gate 5, child page, development or release |

This file is the sole current Gate 2 content and copy candidate. Historical Content Architecture V0.1–V0.4 remains preserved as `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL`.

## 1. Page job and conversion boundary

DOC-000 helps a buyer identify the relevant documentation category, select one Product Grade and continue to the separate Request Documents workflow. It does not expose a file inventory, provide downloads, determine document eligibility or collect the application itself.

The only cross-page body conversion is:

```text
Selected Product Grade
→ /request-documents/?product={GRADE}
→ Product Grade is prefilled and remains editable
```

If no Grade is selected, the page must keep the buyer on DOC-000, move focus to the selector and show the approved inline prompt. It must not generate an empty or guessed parameter.

## 2. Approved content sequence

| Order | Module | Buyer decision supported | Required output |
|---:|---|---|---|
| 00 | Shared Global Header | Confirm location in the TiO2 Malaysia site | Consume shared Header unchanged; current key=`Documents` |
| 01 | Breadcrumb | Understand hierarchy and return to Home | `Home / Documents` |
| 02 | Hero | Understand what the Hub does and what it does not do | Eyebrow, H1, concise purpose, English-only note, primary CTA |
| 03 | How the Hub works | Understand the three-step path before acting | Choose review need → select Grade → submit request |
| 04 | Supporting Your Review Process | Choose one of three review scenarios | Three restrained scenario cards |
| 05 | Documentation You Can Request | Choose among exactly four documentation groups | Four informational cards; no card-level action |
| 06 | Select a Product Grade | Bind the request to one of 14 approved identifiers | Label, no-default selector, helper, validation and primary CTA |
| 07 | Why Documentation Is Provided on Request | Understand why there is no public file list | Context, version and controlled-sharing explanation plus explicit non-guarantee |
| 08 | Quick Answers | Resolve common scope and process questions | Three concise answer blocks |
| 09 | Buyer Questions | Resolve detailed objections without capability expansion | Six visible FAQs |
| 10 | Closing Request | Complete the Grade-first transition | Restate editable prefill and primary CTA |
| 11 | Shared Global Footer | Continue through approved site-wide navigation | Consume shared Footer unchanged |

No module may add a fifth documentation card, a catch-all card, market/language selector, file result, document counter, card-level CTA, download action or child-page action.

## 3. Complete Buyer Clean copy

### 3.1 Breadcrumb

| Element | Final copy / behavior |
|---|---|
| First item | `Home` → `/` |
| Current item | `Documents` |
| Accessible label | `Breadcrumb` |

### 3.2 Hero

| Element | Final English copy |
|---|---|
| Eyebrow | `DOCUMENT HUB` |
| H1 | `Documents for Product & Supplier Qualification` |
| Body | `Identify the documentation category that fits your review, select a titanium dioxide product grade, and continue to a controlled request. This Hub does not provide a public document library or confirm that a specific document is available.` |
| Service note | `Current documentation request service: English only.` |
| Primary CTA | `Request Documents` |
| CTA behavior without Grade | Move focus to Product Grade and show `Select a product grade to continue.` |
| CTA behavior with Grade | Continue through the approved Grade-first handoff |

### 3.3 How the Hub works

Heading: `How to Request Product Documentation`

Intro: `Use the Hub to prepare the request context before entering the application page.`

| Step | Label | Copy |
|---:|---|---|
| 1 | `Choose your review need` | `Use the review scenarios and documentation groups below to identify the information your team needs.` |
| 2 | `Select a product grade` | `Choose the relevant grade from the complete product list. No grade is selected by default.` |
| 3 | `Continue to Request Documents` | `Your selected grade is carried into the request page and can be changed before submission.` |

### 3.4 Supporting Your Review Process

Heading: `Supporting Your Review Process`

Intro: `Start with the decision your team needs to make. These scenarios describe request context; they do not confirm document availability, product suitability or supplier approval.`

| Scenario | Final English copy |
|---|---|
| `Product Evaluation` | `Identify technical, product, safety and handling information that may be relevant to product and application evaluation.` |
| `Quality & Supplier Qualification` | `Identify quality, COA-related and supplier information that may be relevant to QA and supplier-review requirements.` |
| `Origin & Supplier Qualification Review` | `Identify origin-review and supplier-qualification information that may be relevant to a scoped purchasing review.` |

The scenarios are informational and have no individual CTA, link, count or capability badge.

### 3.5 Documentation You Can Request

Heading: `Documentation You Can Request`

Intro: `Choose the category that best describes your review need. The relevant scope is checked against the selected product and request context.`

| Documentation group | Final English copy |
|---|---|
| `Technical Data & Product Documentation` | `Use this category when your team needs product data, specifications or other technical information for evaluation. The applicable material, if any, is determined after the request context is reviewed.` |
| `Safety Documentation` | `Use this category for safety, handling or storage information needed for internal review. Scope and availability are assessed after the request is submitted.` |
| `Quality & COA Documentation` | `Use this category when QA or procurement needs quality information or COA-related support. Batch-specific requests may require lot or order context.` |
| `Origin & Supplier Qualification Documentation` | `Use this category for origin-review or supplier-qualification information. The request scope is assessed against the selected product and purchasing context.` |

Card footer copy for all four cards: `Requested through the controlled document process.`

Card behavior: informational only. Do not render `View`, `Download`, `Access`, `Learn more`, a request button, file count, availability status or an empty action area.

### 3.6 Select a Product Grade

Heading: `Select a Product Grade`

Body: `Choose the grade related to your review. Your selection will be carried to Request Documents and will remain editable there.`

| Element | Final English copy / rule |
|---|---|
| Field label | `Product Grade` |
| Default prompt | `Select a product grade` |
| Helper | `Select one grade to continue. Choosing a grade does not confirm that a particular document is available.` |
| Primary CTA | `Request Documents` |
| Unselected validation | `Select a product grade to continue.` |
| Selected confirmation | `Selected product grade: {GRADE}. You can change this selection on the request page.` |
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

Handoff rules:

- Valid target: `/request-documents/?product={GRADE}` or an equivalent safe state-transfer mechanism.
- The receiving Product Grade field is prefilled and editable.
- Encode and validate the selected identifier against the approved 14-value set before handoff.
- Do not pass a document category, market, destination, language, availability or approval state from DOC-000.
- Route readiness is not claimed by this Gate 2 document and must be verified before release.

### 3.7 Why Documentation Is Provided on Request

Heading: `Why Documentation Is Provided on Request`

Body: `Documentation needs can differ by product, revision, order or batch context, and the purpose of the review. A request allows the relevant scope to be checked before any material is shared.`

| Point | Final English copy |
|---|---|
| `Product context` | `The selected grade helps the team understand which product the request concerns.` |
| `Review context` | `The documentation category and buyer requirement help define the scope that needs to be assessed.` |
| `Controlled sharing` | `Some requests may require additional product, order, batch or company context before sharing can be assessed.` |

Boundary statement: `Submitting a request does not confirm document availability, product or market suitability, approval, response time, sending or delivery.`

### 3.8 Quick Answers

Heading: `Document Request Essentials`

| Question | Concise visible answer |
|---|---|
| `What is the Documents Hub?` | `It is a selection page that helps you choose a documentation category and product grade before continuing to Request Documents.` |
| `How do I request documentation?` | `Select a Product Grade, choose Request Documents, then review or edit the prefilled grade on the request page before submitting your requirements.` |
| `Does every request result in documents?` | `No. A request is reviewed against the product and request context and does not guarantee availability, approval or delivery.` |

### 3.9 Buyer Questions

Heading: `Buyer Questions`

| Question | Final English answer |
|---|---|
| `Can I download documents from this page?` | `No. This Hub does not provide public downloads or a public file list. Use Request Documents after selecting the relevant Product Grade.` |
| `Are documents available for every product grade?` | `The Hub does not represent availability by grade. Scope and availability, if any, are assessed after the request context is submitted.` |
| `Which documentation category should I use?` | `Choose the category that best matches your review: technical/product, safety, quality/COA, or origin/supplier qualification. You can explain additional context on the request page.` |
| `Are documents available in languages other than English?` | `The current documentation request service is English only.` |
| `Can I change the Product Grade on the request page?` | `Yes. The selected grade is carried into Request Documents as an editable value.` |
| `Does submitting a request confirm approval or delivery?` | `No. Submission records the request for review; it does not confirm availability, suitability, approval, response time, sending or delivery.` |

Default expanded item: none. The content remains present in the document source; later interaction design must keep every question keyboard operable and its answer accessible.

### 3.10 Closing Request

Eyebrow: `DOCUMENT REQUEST`

Heading: `Request Documentation for the Product You Are Reviewing`

Body: `Select a Product Grade, then continue to Request Documents. Your selected grade will be carried into the request and can be changed before submission.`

Primary CTA: `Request Documents`

CTA behavior:

- With a valid selected Grade: use the approved Grade-first handoff.
- Without a selected Grade: return focus to the selector and show `Select a product grade to continue.`
- Do not add a secondary body CTA, contact fallback, response-time note or availability badge.

## 4. Required states and zero-state copy

| State | Buyer Clean output | Prohibited output |
|---|---|---|
| Normal / no Grade selected | Default prompt, helper and visible CTA; clicking CTA focuses selector and announces validation | Empty query parameter, guessed/default Grade, disabled-looking unexplained slot |
| Valid Grade selected | Selected confirmation and Grade-first request handoff | File list, availability indicator or category prefill |
| Product Grade data unavailable | `Product grade selection is temporarily unavailable. A document request cannot be started from this page right now.` | Fake Grade options, stale cached options or internal error codes |
| Request route unavailable | `Online document requests are temporarily unavailable from this page.` | Broken CTA, Contact substitution, SLA or implied offline fulfillment |
| No approved public inventory | No file/result module renders; the four category cards and request explanation remain | Empty file table, zero-results card, hidden download slot or invented record |
| Long translated or assistive text | Text wraps without truncating meaning; labels remain programmatically associated | Ellipsis that removes the category or field meaning |

Route unavailability is a release blocker. It is not a reason to silently reroute the body CTA or claim another channel can provide the request.

## 5. Internal-link contract

| Source location | Link | Purpose / boundary |
|---|---|---|
| Breadcrumb | `Home` → `/` | Hierarchy only |
| Product selector helper | `Explore Products` → `/products/` | Help buyers identify a Grade; text link, not competing body conversion |
| Hero, selector and closing request | `Request Documents` → selected-Grade handoff | Only body conversion; requires valid Grade |
| Shared Header/Footer | Inherited approved links | Global Chrome owner; DOC-000 declares current key only |

No DOC-REACH, DOC-TDS, DOC-COO, Market, Application, Contact or RFQ body link is introduced by this Gate 2 candidate.

## 6. Shared Global Chrome consumption

- Authority: `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` plus approved production Logo bindings.
- Current navigation key: `Documents`.
- Desktop Header, Mobile Header, Mobile Menu and Footer are consumed unchanged.
- The shared `Request a Quote` action remains globally visible and routes to `/request-a-quote/`; it is not a DOC-000 body CTA.
- DOC-000 does not redefine navigation order, dimensions, current-state styling, Logo, Footer columns or mobile-menu behavior.

## 7. Module-level evidence and rendering gates

| Module | Evidence dependency | Render rule |
|---|---|---|
| Review scenarios | Approved Gate 1 labels | Render exactly three; no badges or proof claims |
| Documentation groups | Approved Gate 1 taxonomy | Render exactly four; informational only |
| Product Grade selector | Approved 14-Grade identity set | Render only after all 14 unique values validate |
| Grade-first handoff | Receiver route and editable-prefill behavior | Candidate contract only; release-block if unverified |
| File inventory/results | No approved inventory | `DO_NOT_RENDER` |
| Independent fifth capability | `NOT_ESTABLISHED` | `DO_NOT_RENDER` |
| Other/catch-all Hub card | Not part of approved taxonomy | `DO_NOT_RENDER_AS_HUB_CARD` |
| FAQ and answer blocks | This approved copy candidate | Render only visible answers; no hidden machine-only expansion |

## 8. Gate 2 acceptance checklist

- H1, Hero, CTA, helper, four group cards, 14-Grade selector, request explanation, quick answers, FAQ, zero states, internal links and closing copy are complete.
- Public taxonomy is exactly four groups; the third scenario is exactly `Origin & Supplier Qualification Review`.
- No market/language selector, fifth/catch-all card, file inventory, direct download, availability, suitability, approval, SLA, sending or delivery promise appears.
- The only body conversion requires a valid selected Grade and preserves editability downstream.
- Global Chrome is referenced, not redesigned.
- Gate 3–5, child pages and development remain out of scope.

## 9. Review request

Project control is requested to review the module order and complete copy. Status remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW`; checkpoint remains `FULL_COPY_AND_MODULE_ORDER_CONFIRMED_PENDING_USER_CONFIRMATION`. Submission is not approval and does not authorize Gate 3.
