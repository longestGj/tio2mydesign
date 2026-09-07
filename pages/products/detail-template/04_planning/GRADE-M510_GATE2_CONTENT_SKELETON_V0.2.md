# GRADE-M510 Gate 2 Content Skeleton V0.2

## 1. Control

| Field | Value |
|---|---|
| Document ID | `GRADE-M510-G2-SKELETON-01` |
| Page ID | `GRADE-M510` |
| URL | `/products/m-510/` |
| Date | `2026-09-02` |
| Status | `USER_APPROVED / CONTENT_SKELETON_CONFIRMED` |
| Gate 1 | `APPROVED / CLOSED_WITH_FIELD_FREEZES` |
| TDS validity amendment | `GRADE-M510-G1-TDS-AMD-01 = USER_APPROVED / CLOSED` |
| Gate 2 authority | `USER_AUTHORIZED` |
| Purpose | Confirm what the page will say and in what order before drafting complete buyer-visible copy |
| Development | `NOT_AUTHORIZED` |

The user approved this content skeleton on 2026-09-02 with the buyer-visible heading `What to Evaluate in Your Formulation`. `Evaluation Priorities` is not a buyer-visible title. Complete buyer-visible copy and `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` remain pending.

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
| Approved summary line | `A chloride-process, multi-application rutile titanium dioxide pigment with a bluish tone, high brightness and high durability.` |
| Supporting message | Architectural and automotive coating evaluation is the primary path. Plastics, masterbatch and printing-ink directions remain secondary evaluation routes. |
| Qualification | Review the M-510 technical data below and confirm final suitability through testing in your own formulation and application conditions. |
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
| 3 | `POSITIONING` | `Where M-510 Fits in Product Evaluation` | Understand why this Grade enters a shortlist | Chloride-process, surface-treated rutile pigment; coatings-first evaluation supported by its bluish tone, high brightness, high durability and multifunctional profile | Render from valid M-510 TDS with evaluation qualifier |
| 4 | `MAIN_APPLICATIONS` | `Application Directions to Evaluate` | Choose the relevant evaluation route | Primary: interior/exterior architectural coatings and automotive OEM/refinishing paints; supporting coating directions: coil, anticorrosion, decorating and powder coatings. Secondary: engineering plastics/masterbatch/profiles and letterpress/offset/intaglio printing inks | Render; retain Coatings as the primary SEO narrative |
| 5 | `FORMULATION_EVALUATION` | `What to Evaluate in Your Formulation` | Translate TDS features into buyer checks without promising outcomes | Two qualified cards: optical/appearance evaluation and durability/versatility review; all outcomes remain buyer-test dependent | Render; buyer-visible title approved |
| 6 | `TECHNICAL_SPECIFICATIONS` | `Typical Technical Data` | Review decision-relevant technical values | Show the 12 M-510 TDS rows below; state that values are typical properties, not a specification | Render from named valid TDS |
| 7 | `DOCUMENT_REQUEST` | `Request M-510 Documents` | Ask what documents can support evaluation | Offer a request path for the M-510 TDS and let the buyer identify other document requirements; do not promise availability or delivery of unverified documents | Conditional on receiver readiness |
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

The valid M-510 TDS supports the following detail while the approved relationship matrix continues to control page hierarchy:

- Primary Coatings narrative: interior and exterior architectural coatings; automotive OEM and refinishing paints.
- Supporting Coatings directions: coil coatings, anticorrosion paints, decorating coatings and powder coatings.
- Secondary Plastics/Masterbatch narrative: engineering plastics, masterbatch and profiles.
- Secondary Printing Inks narrative: letterpress, offset and intaglio printing inks.

These directions are evaluation contexts, not guaranteed-fit or best-use claims. Coatings remains the single primary application narrative and SEO hierarchy.

### 5.3 Excluded relationships

- Paper: do not render.
- Specialty Materials: do not render.
- Absence must not be rewritten as unsuitable or not recommended.

### 5.4 What to Evaluate in Your Formulation

| Card | Source-backed feature | Buyer-facing interpretation boundary |
|---|---|---|
| Optical and appearance evaluation | Bluish tone; High brightness | Review color direction, brightness and appearance in the buyer's own formulation. Do not promise a fixed finished-product result. |
| Durability and versatility review | High durability; Multifunctional | Review durability, compatibility, processing and final performance under the buyer's actual formulation and use conditions. Do not convert the TDS feature labels into a guarantee. |

No `Not Recommended` block renders because absence from the TDS is not evidence of unsuitability.

### 5.5 Typical Technical Data

| Property | Typical value |
|---|---|
| TiO2 content, % | 94.5 |
| Surface treatment | Zirconia, alumina, organic |
| Identification | ISO 591: R2; ASTM D 476-84: II(IV) |
| Rutile content, % | 99.9 |
| L* | 98.3 |
| b* | 1.65 |
| Specific gravity, g/cm³ | 4.1 |
| Tinting strength, % | 118 |
| pH | 7.5 |
| Oil absorption, g/100g | 17.5 |
| Mean particle size, μm | 0.27 |
| Carbon black undertone (CBU) | 14.0 |

Buyer-visible qualifier: `These values are typical properties and do not constitute a product specification. Confirm suitability in your own formulation and application conditions.`

## 6. Proposed answer-ready blocks

### A1. What is M-510 titanium dioxide?

Answer direction: identify M-510 as a chloride-process, specially surface-treated rutile titanium dioxide pigment, then explain its coatings-first evaluation path and secondary plastics/masterbatch/printing-ink paths.

### A2. Which application directions are shown for M-510?

Answer direction: name the TDS-supported detailed applications while keeping coatings primary and Plastics, Masterbatch and Printing Inks secondary. Do not promise formulation suitability.

### A3. What should a buyer confirm before selecting M-510?

Answer direction: review the visible typical technical data and evaluation priorities, request the M-510 TDS as needed, and validate appearance, durability, processing and final performance in the buyer's own formulation or process.

### A4. What can a buyer do next?

Answer direction: request document availability, request a sample for evaluation or submit an RFQ with Grade, application and destination context. Submission does not mean approval or availability.

These blocks are visible-content candidates. No `FAQPage` or `QAPage` Schema is proposed at this stage.

## 7. GEO and Schema direction

### 7.1 Visible entity relationships

- TiO2 Malaysia → M-510 product page.
- M-510 → architectural and automotive coating evaluation as primary page-role context.
- M-510 → Plastics, Masterbatch and Printing Inks as secondary neutral Application relationships.
- M-510 → Chloride as a neutral process classification.
- M-510 → 12 visible typical technical properties from the named M-510 TDS.
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

The 12 visible technical rows may be represented as `additionalProperty` entries only when labels, values and units match the visible table exactly. Omit `Offer`, price, availability, ratings, reviews, origin, manufacturer, certification and compliance identifiers.

### 7.3 Breadcrumb JSON-LD

`Home > Products > M-510`, matching the visible breadcrumb exactly.

## 8. Conditional and failure states

| Condition | Public behavior |
|---|---|
| Named source is withdrawn or an actual source conflict is found | Suppress only the affected values or claims until resolved; do not show an internal-status notice |
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
- Product-specific Malaysia origin/manufacturing, COO, traceability or compliance claims.
- Stock, capacity, price, MOQ, packaging, container loading, lead time, freight or delivery promises.
- The source document's legacy `mytio2.com` contact details or footer.
- Fake Offer, availability, rating or review Schema.

## 10. Gate 2 checkpoint

The user should confirm:

1. H1 and Hero direction.
2. Coatings-first module hierarchy.
3. Secondary placement of Plastics, Masterbatch and Printing Inks.
4. Addition of two qualified formulation-evaluation cards under the buyer-visible title `What to Evaluate in Your Formulation`, plus the 12-row Typical Technical Data table.
5. Continued omission of Not Recommended, Related Grades, product-specific Origin, packaging/loading and legacy contact details.
6. CTA and SEO/GEO/Schema direction.

Current checkpoint:

`GATE2_CONTENT_SKELETON_CONFIRMED = USER_APPROVED / CLOSED`

Gate 2 may now proceed to original full copy. `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` remains pending and is required before Gate 3.
