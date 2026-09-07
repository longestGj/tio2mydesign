# CONV-RFQ SEO / GEO / Schema Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Gate | Gate 2 |
| Date | 2026-09-01 |
| Status | `COMPLETED_FOR_GATE_4_SUBMISSION / INDEX_DECISION_PENDING_REVIEW` |
| Primary keyword | `titanium dioxide quote supplier` |
| Search intent | Transactional — quotation / purchase action |
| Buyer stage | RFQ / Purchase |
| Evidence status | `QUALITATIVE_KEYWORD_EVIDENCE`; volume, KD, CPC and trend remain Unavailable |
| Content source | `CONV-RFQ_CONTENT_ARCHITECTURE_V0.1.md` |

## 1. Search ownership

CONV-RFQ owns the quotation and purchase-action workflow. It does not own broad Malaysia supplier, market supplier, generic product, exact grade, generic application, informational document, sample-action, alternative/equivalence, trade-update, origin-proof or general Contact intent.

| Adjacent owner | Boundary on RFQ |
|---|---|
| Home | Broad `malaysia titanium dioxide` and supplier proposition remain with Home |
| Markets | Destination supplier and local procurement intent remain with Market pages |
| Products / Grade | Product choice, process and model facts remain with their owner pages |
| Applications | Application education and grade-to-application guidance remain with Application pages |
| Documents / CONV-DOC | Informational documents and controlled document workflow remain separate |
| CONV-SAMPLE | Sample-action intent remains separate |
| Resources | Research, alternatives/equivalence and trade analysis remain separate |
| About / Contact | Manufacturer/origin/company proof and general contact remain separate |

## 2. Metadata recommendation for review

| Element | Proposed value | Status / boundary |
|---|---|---|
| Title | `Titanium Dioxide Quote Supplier | TiO2 Malaysia RFQ` | Uses the locked keyword once; no manufacturer, stock, price or market claim |
| Meta description | `Request a titanium dioxide quotation with grade, application, destination and estimated quantity context. Submission is received for human review only.` | Receipt-only; no SLA or commercial outcome |
| H1 | `Request a Titanium Dioxide Quote` | One action-led H1; no keyword stuffing |
| Canonical | `https://tio2malaysia.com/request-a-quote/` | Self-referencing recommendation if INDEX is approved and the route is live |
| Robots | `index, follow` | `RECOMMENDED_FOR_USER/PROJECT_CONTROL_REVIEW`; not activated by this artifact |
| Language | `en` | Global English page |
| Hreflang | None | No approved language alternatives |
| Breadcrumb | `Home / Request a Quote` | Home + current item; no false navigation parent |

### 2.1 Index recommendation rationale

- The registry assigns one unique transactional primary keyword to CONV-RFQ.
- The page provides unique, substantial quotation-task content rather than a blank form.
- The title/H1/body keep supplier/quotation intent on this page while commercial landing pages retain their own intent.
- A released indexable page still requires route/form readiness, approved privacy text, a verified receiver, content acceptance and canonical equivalence checks.

If those release prerequisites are not met, the route remains release-blocked. This document does not prescribe publishing a broken `noindex` placeholder as a workaround.

## 3. Visible keyword use

| Location | Contract |
|---|---|
| Title | Exact primary phrase once |
| H1 | Natural quotation-action variant |
| Intro | Use `titanium dioxide quotation` once in natural context; do not repeat `supplier` as a capability claim |
| Form | Use task labels, not SEO synonyms |
| Buyer questions | One question may use `titanium dioxide quotation`; answers prioritize clarity |
| Internal anchors | Upstream commercial pages may use `Request a Quote`; no exact-match anchor requirement |

Secondary phrases may appear only when natural: `titanium dioxide quotation`, `buy titanium dioxide bulk`, `titanium dioxide wholesaler`, `titanium dioxide distributor`, `titanium dioxide sourcing supplier`. Do not force all secondary phrases into visible copy.

## 4. GEO answer contract

### 4.1 Primary entity

`TiO2 Malaysia quotation request workflow`

### 4.2 Related entities

- TiO2 Malaysia website/brand.
- Titanium dioxide quotation request.
- Buyer-selected registered grade(s).
- Buyer-selected Application.
- Buyer-selected destination country/market.
- Buyer-selected document and sample-interest context.
- Human review.

No relation is generated merely because a form option exists. PRODUCT V0.3 governs Grade/Application/Process context; unsupported relations remain absent rather than negative.

### 4.3 Extractable answer blocks

| Question | Answer contract |
|---|---|
| What information is needed? | Company/business email, destination, application, grade or non-confidential requirement, quantity and unit |
| Can the grade be unknown? | Yes, with sufficient non-confidential current/target requirement context for human review |
| What does prefill mean? | Explicit editable context only; not suitability, availability or recommendation |
| What does submission mean? | Receipt for human review only; not a quotation or approval |

Answers in the content architecture are the visible source of truth. Schema cannot add hidden details.

### 4.4 Freshness triggers

Re-review metadata, answers and entity relationships whenever any of the following changes:

- form fields or required/conditional logic;
- PRODUCT relationship baseline;
- privacy/controller or receiver workflow;
- route/form readiness;
- price, supply, sample, document or logistics policy;
- Global Chrome current-state mapping;
- canonical, indexing or language decision.

## 5. Schema contract

### 5.1 Allowed graph

| Node | Required visible basis | Allowed properties |
|---|---|---|
| `WebPage` | Published RFQ page | `@id`, `url`, `name`, `description`, `inLanguage`, `isPartOf`, `breadcrumb`, `dateModified` only when real |
| `BreadcrumbList` | Visible `Home / Request a Quote` | Two real list items with exact live URLs |
| Existing `WebSite` reference | Approved site-wide graph | Reference by stable `@id`; do not duplicate conflicting site facts |
| Existing `Organization` reference | Approved site-wide graph and visible brand/company context | Reference only; no new manufacturing, origin, certification or location facts on this page |

### 5.2 Prohibited graph

- `Product`, `Offer`, `AggregateOffer`, price, currency, availability, inventory or shipping details.
- `Order`, order acceptance or purchase completion.
- `ContactPage` or a Contact fallback relationship.
- `FAQPage` or `QAPage`; visible questions remain ordinary page content.
- `HowTo`; the review sequence is not a guaranteed operational procedure or eligible how-to claim.
- Certification, regulatory status, document availability, sample availability, rating or review data.
- Grade–Application, equivalence or substitution relations not visibly and positively approved by PRODUCT V0.3.
- Hidden form values, internal statuses, release blockers, Page IDs or comparison holds.

### 5.3 Conceptual JSON-LD shape

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tio2malaysia.com/request-a-quote/#webpage",
      "url": "https://tio2malaysia.com/request-a-quote/",
      "name": "Titanium Dioxide Quote Supplier | TiO2 Malaysia RFQ",
      "description": "Request a titanium dioxide quotation with grade, application, destination and estimated quantity context. Submission is received for human review only.",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://tio2malaysia.com/#website" },
      "breadcrumb": { "@id": "https://tio2malaysia.com/request-a-quote/#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tio2malaysia.com/request-a-quote/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tio2malaysia.com/" },
        { "@type": "ListItem", "position": 2, "name": "Request a Quote", "item": "https://tio2malaysia.com/request-a-quote/" }
      ]
    }
  ]
}
```

This is a conceptual delivery contract, not implementation code and not authorization to access or modify the development project.

## 6. Social and crawler surfaces

- Open Graph title/description may mirror the approved Title and Meta after review.
- No OG image is required for Gate 2–4. If later supplied, it cannot show prices, product packs, inventory, factory, port, certificates or approval badges without evidence.
- Form inputs, buyer data, error details and success state must not appear in canonical metadata, social metadata or structured data.
- Query parameters carrying prefill context do not create canonical variants; the canonical candidate remains the clean registered URL after approval.

## 7. Acceptance

- [x] Primary keyword, URL, intent and buyer stage match the implementation master.
- [x] Title/H1/Meta support one transactional task without taking adjacent-page intent.
- [x] Search metrics remain Unavailable.
- [x] INDEX/FOLLOW is explicitly a recommendation pending review, not an activated decision.
- [x] Canonical is conditional on live-route and release readiness.
- [x] GEO answers use only visible receipt/review and buyer-selected context.
- [x] Schema is limited to WebPage/BreadcrumbList and references existing site graph nodes.
- [x] No Product, Offer, price, stock, shipping, FAQ, HowTo, sample, document, regulatory, order or approval fact is added.
- [x] PRODUCT V0.3 and unsupported-relation semantics remain intact.

## 8. Gate status

`CONV-RFQ-G2-SEO-01 = COMPLETED_FOR_GATE_4_SUBMISSION / INDEX_DECISION_PENDING_REVIEW`

Activation of metadata, robots, Canonical or Schema is outside this task and requires later approval and external implementation.
