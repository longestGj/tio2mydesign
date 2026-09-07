# MARKET-EU-001 Gate 2 Content Architecture V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `MARKET-EU-001` / `/markets/european-union/` |
| Version / date | V0.1 / 2026-09-04 |
| Gate 1 | `CONTENT_INTENT_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 2 authority | `USER_AUTHORIZED` |
| Current Gate 2 state | `CONTENT_SKELETON_COMPLETE / PENDING_USER_CONFIRMATION` |
| Full copy | `NOT_STARTED / REQUIRES_SKELETON_CONFIRMATION` |
| Gate 3–10 | `NOT_AUTHORIZED` |
| Buyer Clean language | English |

## 1. Gate 2 objective

This document submits the first Gate 2 checkpoint: actual H1, Hero, module order, concise answer blocks, CTA hierarchy and SEO/GEO/Schema direction.

It is not the complete page copy. After the user confirms this skeleton, a new version will provide the full Buyer Clean English copy and close `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` before Gate 3 can be requested.

## 2. Recommended page narrative

```text
EU buyer intent
→ application and Grade review inputs
→ importer / document / origin checks
→ current customs and trade verification
→ destination-country path
→ RFQ or document request
```

The page remains a commercial procurement landing page. Compliance and trade content answer buying questions but do not turn the page into a legal or policy article.

## 3. SEO and page identity

| Element | Proposed Buyer Clean value / rule |
|---|---|
| URL | `/markets/european-union/` |
| Canonical | `https://tio2malaysia.com/markets/european-union/` |
| Primary keyword | `titanium dioxide supplier europe` |
| SEO Title | `Titanium Dioxide Supplier for Europe | TiO2 Malaysia` |
| Meta description | `Evaluate titanium dioxide supply for EU procurement by application, grade, documents, origin and import requirements. Request a quote from TiO2 Malaysia.` |
| Eyebrow | `EUROPEAN UNION PROCUREMENT` |
| H1 | `Titanium Dioxide Supply for European Union Buyers` |
| Breadcrumb | `Home / Markets / European Union` |
| Robots direction | `index,follow` only after Gate 10 authorization; non-production remains blocked from indexing |
| Language | English |
| Current navigation | Markets |

### 3.1 Keyword wording decision

The SEO Title uses “Supplier for Europe” to serve the approved supplier-search intent. The H1 uses “Supply for European Union Buyers” to prevent an incorrect implication that the operating company is established in the EU.

The exact primary keyword does not need to appear as an awkward sentence in the H1. It can be supported naturally by Title, introductory copy, internal anchors and the overall page context.

## 4. Module order and Buyer Clean skeleton

### Module 0 — Global Header

Purpose: shared navigation and persistent RFQ access.

Contract:

- use the approved Global Chrome;
- set `current_navigation_key=Markets`;
- do not add a separate EU top-level navigation item;
- do not change the persistent RFQ behavior.

### Module 1 — Breadcrumb

Visible value:

`Home / Markets / European Union`

Purpose: make the parent Hub and current market relationship clear.

### Module 2 — Hero

| Element | Proposed copy |
|---|---|
| Eyebrow | `EUROPEAN UNION PROCUREMENT` |
| H1 | `Titanium Dioxide Supply for European Union Buyers` |
| Body | `Review application paths, grade information, document requirements and import considerations before requesting a quote for your EU destination.` |
| Primary CTA | `Request a Quote` |
| Secondary CTA | `Review Applications` |
| Supporting link | `Review Documents` |

Hero restrictions:

- no EU-local entity, office, warehouse or stock claim;
- no fixed duty rate;
- no “avoid anti-dumping” message;
- no REACH badge or “EU certified” claim;
- no unverified factory, warehouse, truck, port or EU-delivery image.

### Module 3 — Direct Answer: EU Procurement Check

Heading:

`What should EU buyers check first?`

Proposed concise answer:

`Start with the intended application and grade, then confirm the EU importing entity, relevant REACH and CLP responsibilities, current product and safety documentation, customs classification, origin and destination requirements.`

Purpose: answer the main procurement question immediately and create an AI-citable, reader-useful block without making a legal conclusion.

### Module 4 — Procurement Checklist

Heading:

`Build the Review Around Your Import`

Intro:

`A useful supplier review starts with the product and transaction, not a generic compliance label.`

| Step | Heading | Skeleton copy |
|---:|---|---|
| 1 | `Define the application` | State whether the TiO₂ will be reviewed for coatings, plastics, masterbatch, printing inks or paper. |
| 2 | `Identify grades to review` | Share a known grade, or use the application paths to narrow the technical review. |
| 3 | `Confirm the importing role` | Establish the EU importer and whether an only-representative arrangement is relevant to the substance and volume. |
| 4 | `Request the review information` | Identify the technical, safety, quality/COA, origin and supplier-qualification information your team needs. |
| 5 | `Check classification and origin` | Verify the current CN/TARIC classification, origin basis and measures that apply to the transaction. |
| 6 | `Prepare the commercial request` | Provide the destination country, estimated quantity, timing and packaging requirements for quotation review. |

Boundary note direction:

`Requirements vary by product, importer role and transaction. Confirm the current position with the responsible EU importer and qualified advisers where needed.`

### Module 5 — Application Paths

Heading:

`Start With the Intended Application`

Intro:

`Use the application path to identify the performance questions and grades that should enter technical review.`

| Card | Short purpose | Target owner |
|---|---|---|
| `Coatings` | Review TiO₂ for coating and paint formulation needs. | `APP-COAT` |
| `Plastics` | Review requirements for plastics processing and end use. | `APP-PLAS` |
| `Masterbatch` | Review pigment selection for masterbatch production. | `APP-MB` |
| `Printing Inks` | Review TiO₂ for printing-ink applications. | `APP-INK` |
| `Paper` | Review TiO₂ for paper-related applications. | `APP-PAPER` |

CTA:

`Explore All Applications`

Content rule: no Grade name or EU-market recommendation appears in this module. Application pages own detailed suitability and verified Grade relationships.

### Module 6 — Product Review Path

Heading:

`Move From Application to Grade Review`

Proposed body:

`TiO₂ grades should be evaluated against the formulation, process and documentation needs of the intended use. Review the product range, then include the relevant grade in your technical or commercial request.`

Primary action:

`Explore Titanium Dioxide Grades`

Supporting action:

`Request Product Information`

Content rule: V0.1 intentionally contains no “recommended for Europe” Grade list. A later version may only name examples if each relation passes both the approved Product matrix and an independent EU-page evidence review.

### Module 7 — Documents and Import Responsibilities

Heading:

`Prepare the Information Your EU Review Requires`

Intro:

`Document needs depend on the selected grade, intended use, importing entity and review purpose. Identify what your team needs and confirm applicability during the request.`

The four rows must match the approved Documents taxonomy:

| Review group | EU-page explanation |
|---|---|
| `Technical Data & Product Documentation` | Product data and specifications used to evaluate the selected grade. |
| `Safety Documentation` | Safety, handling and storage information used in workplace and product review. |
| `Quality & COA Documentation` | Quality and COA-related information used in QA and purchasing checks. |
| `Origin & Supplier Qualification Documentation` | Origin and company information used in supplier qualification and purchasing review. |

Responsibilities answer:

`For imports from outside the EU/EEA, REACH and CLP responsibilities generally sit with the EU importer or, for applicable REACH obligations, an EU-established only representative. The non-EU supplier supports the review with the relevant product and supply-chain information.`

Actions:

- Primary: `Request Documents`
- Secondary: `Review the Documents Process`

Restrictions:

- no fifth “Regulatory & Compliance Documentation” category;
- no universal TDS/SDS/COA/COO/REACH availability claim;
- no response-time or approval promise;
- no “REACH certified” wording.

### Module 8 — Malaysia Manufacturing and Origin

Heading:

`Malaysia Manufacturing and Origin Information`

Proposed body:

`TiO2 Malaysia is operated by IKHLAS TITANIUM (MALAYSIA) SDN. BHD. The company identifies Taiping, Malaysia as its manufacturing site and Malaysia as the origin of its titanium dioxide. Confirm the origin evidence and document scope required for the selected product and transaction.`

Source label direction:

`Company-provided information. Review the About and Documents pages for scope and request paths.`

Actions:

- `About TiO2 Malaysia`
- `Request Origin & Supplier Information`

Restrictions:

- do not call the Taiping address a registered office or visitor location;
- do not infer preferential origin, duty-free status or exemption from trade measures;
- do not use certification, customs or independent-verification badges.

### Module 9 — EU Customs and Trade Check

Heading:

`Check Current EU Import Requirements`

Evergreen answer:

`EU customs treatment depends on the product's classification, origin and the measures in force at the time of import. Verify the current TARIC position and applicable official rules for the specific product and transaction.`

Dated context candidate:

`Trade context checked 4 September 2026: the EU has definitive measures concerning defined titanium dioxide imports originating in China, and an absorption reinvestigation was opened on 25 August 2026. The investigation is ongoing; do not rely on a fixed rate or scope without a current official check.`

Source links displayed with the dated context:

- `Commission Implementing Regulation (EU) 2025/4`
- `Notice C/2026/4533`
- `EU TARIC`

CTA direction:

`Review the EU Trade Update`

Release rule: recheck the dated sentence at Gate 2 full-copy approval and before Gate 10. If freshness cannot be established, omit the dated sentence and retain the evergreen answer plus official links.

### Module 10 — EU Destination Paths

Heading:

`Continue by EU Destination`

Intro:

`Use a country page when the purchasing question depends on a specific destination, local industry context or delivery information.`

Visible destination labels, in this order:

1. Germany
2. Italy
3. Spain
4. Poland
5. Netherlands
6. Belgium

Helper line:

`For EU-wide import, documentation and trade context, remain on this European Union page.`

Final-site rule: Gate 3–5 should show the planned complete-site experience. Gate 9/10 must block release if any visible destination remains unavailable, unapproved or inconsistent with its registered Canonical.

### Module 11 — Buyer Questions

Heading:

`Questions From EU Procurement Teams`

The following answers are proposed skeleton copy, not yet the final prose pass.

| Question | Concise answer |
|---|---|
| `Is TiO2 Malaysia an EU-based supplier?` | `No EU establishment is claimed. This page is for EU buyers evaluating a Malaysia-based titanium dioxide supply option.` |
| `Who handles REACH and CLP responsibilities for an EU import?` | `Responsibility generally sits with the EU importer or, for applicable REACH obligations, an EU-established only representative. Confirm the exact role, substance and volume for the transaction.` |
| `What documents can our team request?` | `Requests can cover technical/product, safety, quality/COA, and origin/supplier-qualification information. Availability and applicable scope are confirmed during review.` |
| `How should we select a grade?` | `Start with the intended application and evaluation criteria, review the relevant product information, and identify the grade in your request when known.` |
| `Do EU measures on Chinese titanium dioxide determine the treatment of Malaysian-origin goods?` | `No. Treatment must be assessed using the specific product classification, substantiated origin and measures in force for the transaction.` |
| `What should we include in a quotation request?` | `Include the application, grade if known, destination country, estimated quantity, required timing, packaging needs and the documents your team wants to review.` |

Interaction direction: visible question controls with answers available in the initial semantic content; progressive disclosure may be decided at Gate 3. Default Schema remains no `FAQPage`.

### Module 12 — Final Conversion

Heading:

`Prepare Your European Union Supply Request`

Body:

`Share the application, grade if known, EU destination and estimated requirement so the request can be reviewed in the right product and market context.`

CTA hierarchy:

1. Primary: `Request a Quote`
2. Secondary: `Request Documents`
3. Supporting text link: `Request a Sample`

RFQ prefill contract:

- `market=European Union`
- `source_page=MARKET-EU-001`
- prefilled market remains visible and editable;
- do not prefill Grade unless the buyer selected one;
- submission acknowledgement cannot imply quote, stock, delivery, document or sample approval.

### Module 13 — Global Footer

Consume the approved shared Footer:

- copyright year remains visible;
- Privacy Policy EN, Privacy BM and Cookie Policy links remain;
- Cookie Settings remains a non-page control;
- no Terms of Use link or route;
- shared RFQ remains present.

## 5. CTA hierarchy summary

| Priority | CTA | Context | Target owner |
|---|---|---|---|
| 1 | Request a Quote | Hero and final conversion | CONV-RFQ |
| 2 | Review Applications | Hero / application selection | APP-000 |
| 2 | Explore Titanium Dioxide Grades | Product review path | PRODUCT-000 |
| 2 | Request Documents | Document block / final conversion | CONV-DOC |
| 3 | About TiO2 Malaysia | Origin and entity context | ABOUT-001 |
| 3 | Review the EU Trade Update | Time-sensitive trade detail | RES-TRADE-EU |
| 3 | Request a Sample | Final supporting action | CONV-SAMPLE |

No form is embedded on the EU page.

## 6. GEO answer-block contract

The page will expose these visible answer relationships:

1. EU buyer → product/application/Grade review inputs.
2. Non-EU supply → EU importer or only-representative responsibility check.
3. Document request → four approved review groups, with availability/applicability confirmed during review.
4. Malaysia manufacturing/origin → company-provided fact with About/Documents proof path.
5. Customs treatment → classification + substantiated origin + current measures.
6. EU page → six priority destination pages and downstream procurement actions.

Every machine-readable relation must be present in visible content and obey the same evidence status.

## 7. Schema direction

| Type | Gate 2 direction | Conditions |
|---|---|---|
| `WebPage` | Use | Name, description, URL, language and publisher only where visible/approved |
| `BreadcrumbList` | Use | Home → Markets → European Union; all URLs must be live and Canonical-consistent at release |
| `ItemList` | Conditional | May represent the six visible destination links only when all six are approved and live |
| `FAQPage` | Do not use in current baseline | Buyer Questions remain visible content without FAQ rich-result targeting |
| `LocalBusiness` | Prohibited | Would incorrectly imply an EU local business/location |
| Product or regulatory entities | Not in current page-level Schema | Avoid hidden product recommendations, certifications or trade conclusions |

## 8. Internal-link contract

Final Buyer Clean architecture includes:

- parent: Markets Hub;
- application paths: five registered Application pages;
- product path: Products Hub;
- documents: Documents Hub and Request Documents;
- trust: About TiO2 Malaysia;
- trade: EU Trade Update;
- destinations: Germany, Italy, Spain, Poland, Netherlands, Belgium;
- conversion: RFQ and Sample.

These are cross-page delivery dependencies, not optional internal placeholders. Gate 7 must register them; Gate 9/10 must verify the routes, content, Canonicals, accessibility and `site_scope=tio2-my` isolation before release.

## 9. Visual-content direction for later Gates

This does not authorize Gate 3 or Gate 4. It records the content needs that future visuals must support:

- Hero prioritizes H1, explanation and CTA; any map is secondary and evidence-neutral.
- Procurement Checklist should read as six clear steps, not a dense legal table.
- Applications and destinations use distinct visual systems so the page does not become a generic card wall.
- Origin block uses typography/source treatment, not factory/certificate imagery as proof.
- Trade block visibly separates evergreen guidance from the dated update.
- Mobile preserves reading order and avoids horizontally scrolling cards.

## 10. Full-copy work after skeleton confirmation

If this skeleton is approved, the next Gate 2 version will:

1. write complete English copy for every module;
2. remove internal drafting notes and restrictions from Buyer Clean output;
3. normalize tone and repeated wording;
4. verify all public factual sentences against the Gate 1 Claim Register;
5. recheck the 2026 trade status;
6. finalize Title, Meta, CTA labels, Buyer Questions and source labels;
7. submit `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` for user approval.

## 11. Decision requested

Approve or revise these six visible decisions before full copy begins:

1. H1: `Titanium Dioxide Supply for European Union Buyers`.
2. Hero positions the page around application, Grade, documents and import considerations.
3. No EU-specific Grade list; buyers move from application to product review.
4. Documents use the approved four-group taxonomy.
5. Malaysia manufacturing/origin appears in a dedicated company-provided block.
6. Trade content uses an evergreen check plus a separately dated 2026 context note.

## 12. Change record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-04 | First Gate 2 content skeleton with actual English H1/Hero, 14-module order, CTA, buyer answers and SEO/GEO/Schema direction | `PENDING_USER_CONFIRMATION` |
