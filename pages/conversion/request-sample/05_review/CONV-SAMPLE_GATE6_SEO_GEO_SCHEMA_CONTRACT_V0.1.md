# CONV-SAMPLE Gate 6 SEO / GEO / Schema Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-SAMPLE` / `/request-sample/` |
| Review ID | `CONV-SAMPLE-G6-PCR-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Primary keyword | `titanium dioxide sample supplier` |
| Search intent | Transactional technical-evaluation sample request |
| Evidence level | `QUALITATIVE_KEYWORD_EVIDENCE`; no unsupported numeric volume, KD or CPC claim |

## 1. Metadata Candidate

| Element | Gate 6 candidate |
|---|---|
| SEO Title | `Request a Titanium Dioxide Sample | TiO2 Malaysia` |
| Meta Description | `Request a Malaysia-origin titanium dioxide sample for technical evaluation by sharing the grade, application, destination and test objective for human review.` |
| H1 | `Request a Titanium Dioxide Sample for Technical Evaluation` |
| Canonical candidate | `https://tio2malaysia.com/request-sample/` |
| Robots candidate | `index, follow` only after Gate 9 route/canonical/privacy/receiver verification and Gate 10 release authorization |
| Language | `en` |
| Hreflang | none; no approved alternate-language URL |
| Breadcrumb | `Home / Request a Sample` |
| Open Graph | Title and description mirror approved SEO values; no dedicated image required |

The metadata is a Gate 6 contract candidate for project-control review. It must not be published or activated in this task.

## 2. Ownership and Cannibalization Boundary

- Home owns broad Malaysia titanium dioxide supplier positioning.
- Markets own region/country supplier and destination-specific procurement intent.
- Products and Grade pages own product, process and individual model facts.
- Applications own generic application guidance and product-selection factors.
- Documents and Request Documents own document information and controlled document request intent.
- Request a Quote owns quotation and commercial purchase-action intent.
- Resources own research, comparison, equivalence/alternative and trade-update intent.
- About owns company identity, Malaysia manufacturing/origin and traceability trust.
- Contact remains a utility page.

CONV-SAMPLE owns the sample-request action and human-review workflow. It must not add comparison, product-ranking, pricing, inventory, logistics, document-release or general-contact content.

## 3. Visible-source GEO Answers

| Buyer question | Answer boundary |
|---|---|
| What information is needed? | Contact name, company, business email, destination, application, product grade or unknown-grade choice, and test objective; optional non-confidential trial context may assist review. |
| Can the grade be unknown? | Yes. The buyer may choose `I do not know the grade` and describe the application and test objective for human review. |
| What does prefill mean? | Visible, editable context supplied by an explicit approved upstream action; it is not a recommendation, suitability determination, availability statement or approval. |
| What happens after submission? | After explicit receipt confirmation, a person reviews the information and may request clarification. Any sample arrangement is confirmed separately. |
| Does submission approve a sample? | No. Submission starts human review and does not approve a sample or confirm a sample arrangement. |
| What if receipt cannot be confirmed? | The page retains the entered values, states that receipt could not be confirmed and offers a retry without implying success. |

These answers are grounded in visible approved page copy, fields, FAQ and state semantics. They do not authorize hidden SEO text or additional claims.

## 4. Schema Graph

### Allowed

- one `WebPage` node for `/request-sample/`;
- one `BreadcrumbList` matching the visible `Home / Request a Sample` breadcrumb and real URLs;
- references by stable `@id` to the approved site-wide `WebSite` and `Organization` nodes without duplicating or extending facts;
- `dateModified` only when a real published-content modification date exists.

Required parity:

- `WebPage.name` equals the approved SEO Title;
- `WebPage.description` equals the approved Meta Description;
- `url` and `@id` use the clean canonical URL;
- `inLanguage` is `en`;
- `breadcrumb` references the exact two-item `BreadcrumbList`.

### Prohibited

No `Product`, `Offer`, `AggregateOffer`, price, currency, inventory, availability, MOQ, sample quantity, free-sample, shipping, delivery, Order, ContactPage, FAQPage, QAPage, HowTo, rating, review, certification, compliance, regulatory eligibility, recommendation, equivalence, substitution or grade-comparison data.

Buyer-entered values, query/prefill values, validation text, receiver responses, internal state tokens and readiness flags never enter metadata or JSON-LD.

## 5. Canonical, Query and Site-scope Rules

- Prefill/query URLs never create canonical variants; canonical remains the clean registered URL.
- Invalid or stale public values are discarded without changing metadata or emitting internal-status text.
- All visible content, metadata, Schema, routing and form configuration use `site_scope=tio2-my`.
- No value may fall back from TIOVAR, another site scope or a frozen site.
- Missing route, privacy, receiver or canonical readiness blocks release rather than producing a placeholder page or altered Schema.
- Robots, sitemap and indexing activation are Gate 9/10 decisions, not Gate 6 actions.

## 6. Re-review Triggers

Re-review this contract after any change to the page identity, primary keyword, H1/body copy, fields or required logic, PRODUCT baseline, privacy/receiver workflow, success semantics, Global Chrome mapping, language, canonical behavior or actual data-processing technology.

