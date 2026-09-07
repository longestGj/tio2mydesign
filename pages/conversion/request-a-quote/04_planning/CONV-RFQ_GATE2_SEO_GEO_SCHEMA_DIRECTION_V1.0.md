# CONV-RFQ Gate 2 SEO / GEO / Schema Direction V1.0

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Gate | Gate 2 — content-skeleton checkpoint |
| Review ID | `CONV-RFQ-G2-SKELETON-01` |
| Date | 2026-09-01 |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Primary keyword | `titanium dioxide quote supplier` |
| Search intent | Transactional quotation / purchase action |
| Buyer stage | RFQ / Purchase |
| Evidence status | `QUALITATIVE_KEYWORD_EVIDENCE`; volume, KD, CPC and trend unavailable |
| Visible-content source | `CONV-RFQ_GATE2_CONTENT_SKELETON_V1.0.md` |

This direction is submitted with the content skeleton. Metadata, indexation and Schema are not activated by this file.

## 1. Search ownership and cannibalization

| Adjacent owner | RFQ boundary |
|---|---|
| Home | Broad Malaysia titanium dioxide and supplier proposition remain with Home |
| Markets | Destination supplier and local procurement content remain with Market pages |
| Products / Grades | Product selection, process and model facts remain with their page owners |
| Applications | Application education and evidenced grade guidance remain with Application pages |
| Documents / CONV-DOC | Document information and controlled document requests remain separate |
| CONV-SAMPLE | Sample-request intent remains separate |
| Resources | Research, equivalence/alternative research and trade analysis remain separate |
| About / Contact | Company/manufacturer/origin proof and general contact remain separate |

CONV-RFQ owns only the quotation-request action and the minimum information needed to submit that request for human review.

## 2. Metadata direction for skeleton confirmation

| Element | Proposed value | Boundary |
|---|---|---|
| SEO Title | `Titanium Dioxide Quote Supplier | TiO2 Malaysia` | Locked primary keyword used once; no price, stock or manufacturer claim |
| Meta Description | `Request a titanium dioxide quotation by sharing your grade, application, quantity in metric tonnes and destination for human review by TiO2 Malaysia.` | No response time, availability or commercial outcome |
| H1 | `Request a Titanium Dioxide Quote` | One action-led H1 |
| Canonical | `https://tio2malaysia.com/request-a-quote/` | Self-reference after later route/canonical equivalence verification |
| Robots | `index, follow` recommendation | Not activated here; route, form, privacy and final-copy readiness remain later gates |
| Language | `en` | Global English page |
| Hreflang | None | No approved language alternative for this route |
| Breadcrumb | `Home / Request a Quote` | Home plus current item; no false navigation parent |

Query parameters used for editable prefill do not create canonical variants. The clean registered URL remains the only canonical candidate.

## 3. Visible keyword use

| Surface | Direction |
|---|---|
| Title | Exact primary keyword once |
| H1 | Natural quotation-action wording |
| Hero | One natural use of grade/application/quantity/destination language; no synonym stuffing |
| Form | Plain task labels rather than SEO variants |
| Internal anchors | `Request a Quote` or another natural action label; no exact-match requirement |

Secondary terms from Gate 1 may be used only when naturally required by full copy. The skeleton does not force `buy titanium dioxide bulk`, `wholesaler`, `distributor` or `sourcing supplier` into Buyer Clean text.

## 4. GEO entity and relationship direction

### 4.1 Primary entity

`TiO2 Malaysia quotation request workflow`

### 4.2 Related entities

- TiO2 Malaysia website/brand.
- Titanium dioxide quotation request.
- Buyer-selected registered Product / Grade.
- Buyer-selected Application.
- Buyer-entered quantity in metric tonnes.
- Buyer-selected destination country.
- Buyer-entered company and contact context.
- Human review after receipt.

An option in a form does not create a Grade–Application, Grade–Market, availability, document, sample or commercial relationship. PRODUCT V0.3 remains the only positive Grade relationship source.

### 4.3 Extractable answers from visible copy

| Buyer question | Visible source | Answer direction |
|---|---|---|
| What information is needed for a titanium dioxide quotation request? | Hero plus required field labels | Grade or Need help, Application, quantity in metric tonnes, destination country, company, name and business email |
| Can a buyer continue without knowing the grade? | Hero and Product / Grade selector | Yes; choose `Not sure / Need help` and add non-confidential context when useful |
| What does prefill mean? | Visible editable field values | Explicit carried context only; it can be changed and does not imply recommendation or availability |
| What happens after submission? | Exact success state | The request is received, reviewed and followed up using the supplied information; no quotation or outcome is approved by receipt |

These answers are distributed through task copy and states. No separate FAQ module is proposed.

## 5. Schema direction

### 5.1 Allowed nodes

| Node | Visible basis | Allowed direction |
|---|---|---|
| `WebPage` | Published RFQ page | Stable `@id`, URL, approved name/description, `inLanguage`, site reference, breadcrumb and real `dateModified` only |
| `BreadcrumbList` | Visible `Home / Request a Quote` | Two real items with exact live URLs |
| Existing `WebSite` | Approved site-wide graph | Reference stable `@id`; do not duplicate |
| Existing `Organization` | Approved site-wide graph and visible brand context | Reference only; add no manufacturing, origin, certification or location fact |

### 5.2 Prohibited nodes and properties

- `Product`, `Offer`, `AggregateOffer`, price, currency, availability, inventory, shipping or order facts.
- `ContactPage` or a Contact fallback relationship.
- `FAQPage`, `QAPage` or `HowTo`.
- Rating, review, certification, regulatory, sample or document availability facts.
- Hidden buyer data, form values, internal statuses, release blockers or Page IDs.
- Unsupported Grade–Application, equivalence, substitution, market or process relationships.

## 6. Conceptual visible/machine parity

The eventual `WebPage.name` must equal the approved SEO Title or an approved equivalent, and `description` must use the approved Meta Description. Breadcrumb names and URLs must match the visible breadcrumb. Schema must not say that a request was submitted, received or approved on an initial page view.

No form input, query-string context, validation error or success-state buyer data enters canonical metadata, social metadata or JSON-LD.

## 7. Social and crawler direction

- Open Graph title and description may mirror the approved SEO Title and Meta Description after Gate 2 approval.
- No Gate 2 OG image is required. A later image cannot imply factory, stock, port, shipment, certificate, packaging or approval facts without evidence.
- Robots and Canonical are recommendations only until external implementation and later QA.
- A non-ready route must not be published as a broken indexable form or hidden behind a Contact fallback.

## 8. Freshness triggers

Re-review this contract when any of the following changes:

- approved form fields or validation logic;
- PRODUCT relationship baseline;
- privacy/controller or production receiver/data flow;
- route/form readiness;
- price, supply, sample, document, logistics or regulation policy;
- Global Chrome current-state mapping;
- Canonical, indexing, language or site-graph decisions.

## 9. Gate 2 direction decision

This SEO/GEO/Schema direction is `DRAFT_FOR_PROJECT_CONTROL_REVIEW` under Review ID `CONV-RFQ-G2-SKELETON-01`. Requested decision: confirm Title, Meta, H1, Canonical/robots recommendation, GEO answer direction and WebPage/BreadcrumbList-only Schema scope before complete Gate 2 copy.

It does not activate metadata, indexing or Schema and does not authorize Gate 3 or development.
