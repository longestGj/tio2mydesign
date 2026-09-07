# GRADE-M510 Gate 2 Content Skeleton V0.1

## 1. Control

| Field | Value |
|---|---|
| Document ID | `GRADE-M510-G2-SKELETON-01` |
| Page ID | `GRADE-M510` |
| URL | `/products/m-510/` |
| Date | `2026-09-02` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / PENDING_USER_CONFIRMATION` |
| Gate 1 | `APPROVED / CLOSED_WITH_FIELD_FREEZES` |
| Gate 2 authority | `USER_AUTHORIZED` |
| Purpose | Confirm what the page will say and in what order before drafting complete buyer-visible copy |
| Development | `NOT_AUTHORIZED` |

This content skeleton is not final copy. Buyer-visible wording, module completion and `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` remain pending.

## 2. Proposed SEO frame

| Field | Proposed Gate 2 direction |
|---|---|
| Title | `M-510 Titanium Dioxide for Coatings | TiO2 Malaysia` |
| Meta Description | `Evaluate M-510 titanium dioxide for architectural and automotive coatings, then review secondary application paths or request documents, a sample or RFQ.` |
| H1 | `M-510 Titanium Dioxide for Coating Evaluation` |
| Canonical | `https://tio2malaysia.com/products/m-510/` |
| Language | English |
| Robots | Preview/non-indexed until a later Gate 10 release decision |
| Breadcrumb | `Home > Products > M-510` |

The exact primary keyword starts the Title and H1. Application language remains subordinate to M-510 model intent.

## 3. Proposed Hero

| Element | Proposed content direction |
|---|---|
| Eyebrow | `M-510 · Chloride Process` |
| H1 | `M-510 Titanium Dioxide for Coating Evaluation` |
| Approved summary line | `TMP/TME-free multi-application grade with high brightness and durability.` |
| Supporting message | Architectural and automotive coating evaluation is the primary path. Plastics, masterbatch and printing-ink directions remain secondary evaluation routes. |
| Qualification | Final formulation suitability should be confirmed through current technical documents and the buyer's own evaluation. |
| Primary CTA | `Request a Quote` |
| Secondary CTA | `Request a Sample` |
| Supporting action | `Request Document Availability` |

CTA route keys and prefill:

- Quote → `request_quote`, `grade=M-510`, `source_page=GRADE-M510`.
- Sample → `request_sample`, same Grade/source.
- Documents → `request_documents`, same Grade/source plus user-selected document type.

No CTA renders as a working public link until its receiving route is independently approved and available.

## 4. Module sequence

| Order | Module ID | Proposed heading | Buyer decision served | Content direction | Current rendering state |
|---:|---|---|---|---|---|
| 0 | `GLOBAL_HEADER` | Shared Global Chrome | Navigate or start RFQ | Reuse approved Header; Products current state | Required shared component |
| 1 | `BREADCRUMB` | `Home > Products > M-510` | Confirm page identity and hierarchy | Flat Grade path; no Process/Application parent | Required |
| 2 | `PRODUCT_HERO` | H1 above | Confirm exact Grade and immediate next action | Approved summary, coatings-first hierarchy and qualified CTA set | Content skeleton proposed |
| 3 | `POSITIONING` | `Where M-510 Fits in Product Evaluation` | Understand why this Grade enters a shortlist | Architectural and automotive coatings first; neutral Chloride classification; three secondary paths; no generic process education | Draft direction; detailed TDS claims frozen |
| 4 | `MAIN_APPLICATIONS` | `Application Directions to Evaluate` | Choose the relevant evaluation route | Primary block: architectural and automotive coatings. Secondary block: Plastics, Masterbatch, Printing Inks. No equal SEO weighting | Relationship names allowed; TDS-derived performance reasons frozen |
| 5 | `RECOMMENDATIONS` | Not rendered | Avoid unsupported selection claims | No Recommended/Not Recommended reasons are approved | `OMIT` |
| 6 | `TECHNICAL_SPECIFICATIONS` | Not rendered until source confirmation | Review decision-relevant technical values | Candidate property labels exist, but values remain frozen pending TDS currentness | `OMIT_UNTIL_M510-D02` |
| 7 | `DOCUMENT_REQUEST` | `Request M-510 Document Availability` | Ask what current documents can support evaluation | Explain that buyers may request availability of relevant M-510 technical documents without promising a specific document or delivery | Conditional on receiver readiness |
| 8 | `ORIGIN_SUPPORT` | Not rendered as a product claim | Avoid unsupported origin inference | No M-510-specific Malaysia origin/manufacturing/COO claim | `OMIT`; optional neutral site-level route only after approval |
| 9 | `MARKET_SUPPORT` | `Plan Evaluation for Your Destination Market` | Continue to destination procurement guidance | Neutral links to EU, UK, India and Brazil only when those routes are approved/live; no local availability or compliance claim | Conditional |
| 10 | `RELATED_GRADES` | Not rendered | Avoid unsupported comparison | No public comparison reason approved | `OMIT` |
| 11 | `REQUEST_SAMPLE` | `Request M-510 for Your Own Evaluation` | Begin controlled formulation/process testing | Collect application, destination, objective and relevant requirements; submission does not mean sample approval | Conditional on receiver readiness |
| 12 | `GLOBAL_FOOTER` | Shared Footer | Complete navigation and trust path | Reuse current Global Chrome authority | Required shared component |

## 5. Application hierarchy

### 5.1 Primary narrative

- Architectural coatings evaluation.
- Automotive coatings evaluation.

These are content contexts within the approved Coatings relationship. They do not create separate M-510 application pages or transfer generic coatings keyword ownership from the Applications section.

### 5.2 Secondary neutral paths

- Plastics.
- Masterbatch.
- Printing Inks.

Secondary paths may be named and routed only as neutral PRODUCT V0.3 relationships. They must not be described as equal primary SEO themes, guaranteed fits, best uses or recommendations until independent technical evidence supports more specific wording.

### 5.3 Excluded relationships

- Paper: do not render.
- Specialty Materials: do not render.
- Absence must not be rewritten as unsuitable or not recommended.

## 6. Proposed answer-ready blocks

### A1. What is M-510 titanium dioxide?

Answer direction: identify M-510 with the exact approved summary, then explain that this page centers on architectural and automotive coating evaluation while preserving secondary neutral paths.

### A2. Which application directions are shown for M-510?

Answer direction: coatings are primary; Plastics, Masterbatch and Printing Inks are secondary neutral evaluation paths. Do not rank them or promise suitability.

### A3. What should a buyer confirm before selecting M-510?

Answer direction: request current product documents, compare the buyer's required properties and processing conditions, and validate performance in the buyer's own formulation or process. Do not expose frozen technical values.

### A4. What can a buyer do next?

Answer direction: request document availability, request a sample for evaluation or submit an RFQ with Grade, application and destination context. Submission does not mean approval or availability.

These blocks are visible-content candidates. No `FAQPage` or `QAPage` Schema is proposed at this stage.

## 7. GEO and Schema direction

### 7.1 Visible entity relationships

- TiO2 Malaysia → M-510 product page.
- M-510 → architectural and automotive coating evaluation as primary page-role context.
- M-510 → Plastics, Masterbatch and Printing Inks as secondary neutral Application relationships.
- M-510 → Chloride as a neutral process classification.
- M-510 page → conditional document, sample and RFQ actions.

### 7.2 Product JSON-LD

Proposed visible-source fields only:

- `@type: Product`
- `@id`
- `name: M-510 Titanium Dioxide`
- `sku: M-510`
- visible approved description
- canonical URL
- approved visible image only if a Grade-specific asset is later approved
- category wording only if identical to visible approved content

Omit `Offer`, price, availability, ratings, reviews, origin, manufacturer, certification, compliance identifiers and technical `additionalProperty` values while their visible facts are absent or frozen.

### 7.3 Breadcrumb JSON-LD

`Home > Products > M-510`, matching the visible breadcrumb exactly.

## 8. Conditional and failure states

| Condition | Public behavior |
|---|---|
| TDS currentness unresolved | Omit Technical Specifications and all derived values/reasons; do not show a pending notice |
| Document receiver not ready | Omit the action/link; do not hard-code a provisional URL |
| Sample receiver not ready | Omit Sample module/CTA; keep RFQ only if its receiver is ready |
| RFQ receiver not ready | Omit working CTA or keep route preview-only according to later delivery contract; do not use a broken link |
| Application destination not live | Show approved visible context without a dead link, or omit the link only |
| Market destination not live | Omit that route/card |
| No approved Grade media | Use safe abstract/omission behavior; do not imply an actual package, factory or shipment |
| Related-grade reason absent | Omit Related Grades entirely |

No internal terms such as `pending`, `frozen`, `verification required`, `release blocker` or `preview only` appear in Buyer Clean content.

## 9. Explicit exclusions

- M-350 wording, values, image claims or Schema description.
- Equal weighting of all four Application families.
- Generic coatings/process education that belongs to Applications or Process pages.
- Paper and Specialty Materials relationships.
- Best, superior-to, equivalent, substitute, replacement or guaranteed-fit language.
- Technical values from the unconfirmed V3 2023 TDS.
- Product-specific Malaysia origin/manufacturing, COO, traceability or compliance claims.
- Stock, capacity, price, MOQ, packaging, container loading, lead time, freight or delivery promises.
- Fake Offer, availability, rating or review Schema.

## 10. Gate 2 checkpoint

The user should confirm:

1. H1 and Hero direction.
2. Coatings-first module hierarchy.
3. Secondary placement of Plastics, Masterbatch and Printing Inks.
4. Omission of Technical Specifications, Recommendations, Related Grades and product-specific Origin until evidence is approved.
5. CTA and SEO/GEO/Schema direction.

Current checkpoint:

`GATE2_CONTENT_SKELETON_CONFIRMED = PENDING_USER_CONFIRMATION`

After confirmation, Gate 2 may proceed to original full copy. `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` remains pending and is required before Gate 3.
