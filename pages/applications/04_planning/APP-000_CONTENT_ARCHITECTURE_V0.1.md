# APP-000 Content Architecture V0.1

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `APP-000` |
| Page name | Applications |
| URL | `/applications/` |
| Gate | Gate 2 — Content Architecture |
| Version | V0.1 |
| Date | 2026-08-30 |
| Status | `DRAFT_FOR_GATE_2_REVIEW` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Gate 2 authorization | User explicitly authorized APP-000 design production through Gate 5 using PRODUCT V0.2.1 |
| Relationship source | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.1.csv` and V0.2.1 audits — `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Mapping / verification | `PLANNED_ARCHITECTURE` / `NO_DIRECT_KEYWORD_TARGET` — unchanged |
| Review owner | Project control and quality review; user final approval |
| Excluded | Five Application child pages, development, code, CMS, testing, deployment, publishing and `D:\16Wordpress_nextjs` |

`GATE 2 DRAFT / SUBMITTED FOR PROJECT-CONTROL REVIEW / NOT APPROVED FOR DEVELOPMENT`

### 0.1 Current user-directed overlays — updated 2026-09-01

This V0.1 document preserves the original Gate 2 review history. The current visual/content candidate applies five controlled overlays:

1. `APP-000_FINAL_RFQ_COPY_DELTA_V0.1.md` removes the separate Final RFQ qualification sentence.
2. `APP-000_PRODUCT_DIRECTORY_CONTENT_DELTA_V0.1.md` records the historical V0.9 directory exception and is now superseded.
3. `APP-000_APPLICATION_HUB_SIMPLIFICATION_DELTA_V0.1.md` controls V0.10: it removes the complete directory, rewrites the Hero for application navigation, merges the two guidance sections and restores a compact PRODUCT V0.3 Process table.
4. `APP-000_FINAL_POLISH_DELTA_V0.1.md` controls the inherited V0.11 body copy polish, 390px stacked Process presentation and Tablet proof without changing module order or relationship facts; its unapproved shared Chrome proposal is superseded.
5. `APP-000_GLOBAL_CHROME_REALIGNMENT_DELTA_V0.1.md` controls V0.12 and restores the sole `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` authority while preserving every APP body pixel.

These overlays do not approve Gate 2 or Gate 5 as a whole. V0.10 controls the Application-first architecture; V0.11 supplies the protected body refinement; V0.12 is the current Gate 5 review candidate and changes only Global Chrome.

## 1. Page Job

APP-000 is a navigation and evaluation hub. It helps a buyer:

1. identify the closest application category;
2. see the complete approved neutral `Grade to Review` set for that category;
3. understand that Application and Process are separate classification dimensions;
4. continue to an approved Application, Grade, Document, Market or RFQ route when that route is available.

It does not choose a grade, rank products, guarantee fit, publish formulation guidance or replace the five Application child pages.

## 2. Buyer Clean Principle

Public wording must use these meanings:

> **Grade to Review** means a grade with an approved neutral relationship to the selected application. It is a starting point for technical evaluation, not a recommendation, ranking or suitability guarantee.

> **Process classification** identifies the approved production-process category of a grade. It does not prove application fit or performance.

Public content must never show internal states such as `NO_PUBLIC_MAPPING`, `CONFLICT_HOLD`, `comparison_hold`, `R-M2377-TDS`, `pending`, `provisional` or Evidence IDs.

## 3. Fixed Relationship Sets

### 3.1 Application collections

| Application | Exact neutral Grade to Review set | Count | Public route behavior |
|---|---|---:|---|
| Coatings | M-350, M-510, M-896, M-996, M-2196, M-895, M-52 | 7 | `Explore Coatings` only when APP-COAT content/URL/route are approved and live |
| Plastics | M-350, M-510, M-200, M-108, M-210, M-340, M-886 | 7 | `Explore Plastics` only when APP-PLAS content/URL/route are approved and live |
| Masterbatch | M-510, M-200, M-108, M-210, M-340, M-886 | 6 | `Explore Masterbatch` only when APP-MB content/URL/route are approved and live |
| Printing Inks | M-350, M-510, M-52 | 3 | `Explore Printing Inks` only when APP-INK content/URL/route are approved and live |
| Paper | M-350 | 1 | `Explore Paper` only when APP-PAPER content/URL/route are approved and live |
| Specialty Materials | CR-901 | 1 | No sixth Application page; `View CR-901` only when the Grade route is approved and live |

Total: 25 `VERIFIED_FOR_PUBLIC_MAPPING` relationships. Display order follows the approved matrix and is not a performance ranking.

### 3.2 Process collections

| Process | Exact neutral grade set | Count |
|---|---|---:|
| Chloride | M-350, M-510, M-896, M-895, M-200, M-210, M-340, M-886 | 8 |
| Sulfate | M-996, M-2196, M-108, M-52 | 4 |
| Vapor-phase oxidation | CR-901 | 1 |

M-2377 is absent from every Application and Process collection. Its hard gate blocks only M-2377.

### 3.3 Comparison separation

M-996 and M-2196 may both appear under Coatings and Sulfate with identical visual weight. Their base mappings are verified and `application_conflict=none`. The independent comparison hold forbids differences, rankings, selection reasons, comparative positioning, equivalence and replacement logic.

## 4. Module Order and Exact Buyer Decision

| Order | Module ID | Public heading | Buyer decision supported | Evidence / route behavior |
|---:|---|---|---|---|
| 1 | GLOBAL_HEADER | Fixed global navigation | Where am I and where can I go? | `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`; Home visible; Applications current |
| 2 | BREADCRUMB | `Home > Applications` | Confirm page hierarchy | Visible on all full-page states |
| 3 | HERO | `Explore Titanium Dioxide by Application` | Is this the right starting point? | Navigation language only; no child-page keyword expansion |
| 4 | APPLICATION_DIRECTORY | `Choose an Application Path` | Which category is closest, and which grades can I review? | Six complete application cards; all 25 relationships represented once per applicable card |
| 5 | USE_GUIDE | `Use the Hub as a Starting Point` | How should I interpret the lists? | Three-step evaluation guidance; no progress/completion metaphor |
| 6 | PROCESS_CONTEXT | `Review Process Classification Separately` | Is process another application recommendation? | Three complete neutral process groups; no process superiority or fit claim |
| 7 | EVALUATION_NOTE | `Before You Select a Grade` | What still requires validation? | Current technical data, buyer system and destination/document context |
| 8 | SUPPORT_PATHS | `Continue Your Procurement Review` | Where do I go next? | Products, Documents and Markets are atomic route-gated cards |
| 9 | BUYER_QUESTIONS | `Buyer Questions` | Can I quote the page’s definitions and limits? | One answer open + four collapsed in baseline |
| 10 | FINAL_RFQ | `Share Your Application Requirements` | How do I request a technical/commercial review? | Entire module 0px when RFQ route/workflow unavailable |
| 11 | GLOBAL_FOOTER | Approved navigation only | Continue or close | No invented Legal/Privacy page |

## 5. Exact Buyer Clean Copy Deck

### 5.1 Hero

- Eyebrow: `APPLICATIONS HUB`
- H1: `Explore Titanium Dioxide by Application`
- Body: `Start with how the material will be used. Review current neutral grade relationships, then continue to the relevant application or product page for technical evaluation.`
- Qualification: `A Grade to Review is an evaluation starting point, not a recommendation or guarantee of suitability.`
- Primary CTA: `Explore Applications`
- Conditional contextual CTA: `Request a Quote`

### 5.2 Application directory intro

- Eyebrow: `APPLICATION-FIRST NAVIGATION`
- H2: `Choose an Application Path`
- Body: `Each collection shows the complete current Grade to Review set from the approved relationship baseline. Grade order does not indicate preference or performance.`

Card labels are exactly the six Application names in section 3.1. Each card uses `Grades to Review — N`, exact grade chips/rows and at most one qualified route CTA.

### 5.3 Use guide

1. `Choose the closest application` — `Start with the category that best describes the buyer’s intended use. Category labels are navigation paths, not formulation guidance.`
2. `Review the neutral grade set` — `Open the relevant grade pages and compare current technical data against the buyer’s requirements.`
3. `Validate before specification` — `Confirm performance in the buyer’s system and review destination, document and commercial requirements separately.`

### 5.4 Process context

- Eyebrow: `SEPARATE CLASSIFICATION`
- H2: `Review Process Classification Separately`
- Body: `Application mapping and production process answer different questions. A process label does not establish application fit or performance.`

### 5.5 Evaluation note

- Eyebrow: `BUYER CLEAN CHECK`
- H2: `Before You Select a Grade`
- Checks: `Define the application requirements`; `Review current technical data`; `Confirm in the buyer’s system`; `Check destination and document needs`.

### 5.6 Support paths

| Card | Body | Conditional CTA |
|---|---|---|
| Review All Products | `Open the complete product directory when the model is already known or a wider review is needed.` | `Explore Products` |
| Identify Required Documents | `Review the applicable technical, quality and origin-document request paths separately.` | `Explore Documents` |
| Review Destination Context | `Check the relevant market page for destination-level procurement context.` | `Explore Markets` |

### 5.7 Buyer Questions

1. `What does Grade to Review mean?`
   - `It identifies an approved neutral relationship between a grade and an application. It is a starting point for technical evaluation, not a recommendation, ranking or suitability guarantee.`
2. `Does the order of grades show a ranking?`
   - `No. The order follows a stable directory sequence and does not indicate preference, performance or suitability.`
3. `Why might a grade not appear in an application collection?`
   - `The hub shows only current approved public relationships. Absence from a collection is not a statement that the grade is unsuitable.`
4. `Are application and process classifications the same?`
   - `No. Application and process are separate relationship domains and must be evaluated independently.`
5. `Can this hub choose between two grades?`
   - `No. Review current technical data and validate candidates in the buyer’s system before making a selection.`

### 5.8 Final RFQ

- Eyebrow: `SHARE YOUR REQUIREMENTS`
- H2: `Share Your Application Requirements`
- Body: `Provide the intended application, destination, estimated quantity and any grades already under review.`
- Qualification: none in the current public module; removed by the user's 2026-08-31 decision recorded in `APP-000_FINAL_RFQ_COPY_DELTA_V0.1.md`
- CTA: `Request a Quote`

## 6. Conditional Rendering Contract

| Condition | Public behavior |
|---|---|
| Application child route live | Render the card CTA; preserve the neutral list |
| Application child route not live | Omit CTA and dependent sentence; keep the complete neutral card with no empty action slot |
| Grade route live | Grade name may be a link with an accessible name |
| Grade route not live | Grade name remains plain text; do not create fallback |
| Process route live | Optional route CTA may appear under the complete classification card |
| Process route not live | Classification remains neutral text if approved for this page; omit CTA only |
| Support path 3/2/1 | Render only complete live cards; grid closes |
| Support path 0 | Entire module 0px |
| RFQ ON | Header, Hero contextual action and Final RFQ appear in synchronized approved tiers |
| RFQ OFF | All RFQ surfaces and reserved gaps disappear together |

## 7. SEO Contract

- Title direction: `Applications | TiO2 Malaysia`
- H1: `Explore Titanium Dioxide by Application`
- Meta direction: `Review titanium dioxide application categories and neutral Grade to Review paths for coatings, plastics, masterbatch, printing inks, paper and specialty materials.`
- Canonical: `https://tio2malaysia.com/applications/` only after route verification.
- Indexing: follow registry and publication approval; this draft does not authorize indexation.
- Do not repeat the five child-page primary keywords in Title, H1, metadata headings or dense body copy.
- Application names are navigation/entity labels. Their cards must not become mini landing pages.

## 8. GEO and Schema Contract

### GEO entity statements

- TiO2 Malaysia → has Applications navigation hub → APP-000.
- APP-000 → organizes six approved application taxonomies → five future child-page owners plus Specialty Materials product path.
- Application taxonomy → has neutral Grade to Review relationships → exact V0.2.1 set.
- Grade → has independent Process classification → exact V0.2.1 set.
- Grade to Review → is not → recommendation, rank or suitability guarantee.
- Process classification → is not → application-fit or performance claim.

### Schema

- Baseline: `CollectionPage` + `BreadcrumbList`.
- Optional `ItemList`: only route-qualified, visible Application paths; omit URL when a target is not approved/live, or omit the ItemList when no qualified item remains.
- Visible neutral grade collections may be represented only as names in the same on-page context; never use `recommendedFor`, `best`, rating, `suitableFor`, equivalent or replacement relations.
- M-2377 has no Application/Process machine-readable relation.
- M-996/M-2196 have no comparative machine-readable relation.
- No `FAQPage` or `QAPage` by default; future use requires visible-answer parity and separate approval.

## 9. Accessibility and 390px Content Rules

- Semantic order follows section 4; one H1 only.
- Each Application card heading precedes its count and grade list.
- Grade chips are real text, never text baked into decorative imagery in implementation.
- Focus, selected/expanded and current states use structure plus text/icon, not color alone.
- Minimum logical touch target 44×44px.
- 390px uses 16px outer margin, one-column cards, no carousel and no horizontal grade-chip overflow.
- Long labels wrap: `Specialty Materials`, `Vapor-phase oxidation`, `Printing Inks`.
- Conditional removal leaves one normal adjacent-section gap and no empty shell.

## 10. Gate 2 Self-check

- [x] All 25 neutral Application relationships are present in exact sets.
- [x] All 13 verified Process classifications are present in exact sets.
- [x] M-2377 is absent and its hard gate remains open.
- [x] M-996/M-2196 base mappings are preserved without comparison.
- [x] `NO_PUBLIC_MAPPING` is not described as unsuitability.
- [x] No performance, recommendation, equivalence, rank or guarantee is introduced.
- [x] Five child-page keyword owners remain protected.
- [x] Specialty Materials does not create a sixth child page.
- [x] Desktop/Mobile copy lengths are real, not placeholders.
- [x] Route, RFQ, Schema and empty-state conditions are explicit.
- [x] Gate 2 remains a draft for project-control review.

## 11. Open Items

| ID | Issue | Current control | Status |
|---|---|---|---|
| APP-R002 | Five Application URLs/content/live routes remain provisional or unverified | Route-safe CTA omission | OPEN |
| APP-R004 | M-996/M-2196 comparison evidence unavailable | Independent `comparison_hold`; base mappings stay visible | OPEN |
| R-M2377-TDS | Latest approved M-2377 TDS and dedicated review unavailable | All M-2377 Application/Process relationships hidden | OPEN_HARD_GATE |
| APP-R005 | Supporting routes and RFQ workflow not verified live | Atomic omission and synchronized RFQ removal | OPEN |
| G2-01 | Gate 2 has not received project-control approval | Prevents claiming an approved content baseline | OPEN |

## 12. Version Record

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.1 | 2026-08-30 | Initial APP-000 Gate 2 architecture using the complete PRODUCT V0.2.1 relationship baseline | `DRAFT_FOR_GATE_2_REVIEW`; submitted for project-control review |
