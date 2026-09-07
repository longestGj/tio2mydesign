# PRODUCT-000 Gate 7 CMS / API / Component Mapping V0.2

## 0. Control

| Field | Value |
|---|---|
| Page | `PRODUCT-000` / `/products/` |
| Date | `2026-08-31` |
| Review ID | `PRODUCT-000-G7-PCR-02` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Purpose | Implementation-neutral content, API and rendering contract |

Field names below are semantic keys. The external implementation may map them to different storage names only if the observable contract and traceability remain exact.

## 1. Page-level fields

| Semantic field | Type | Required | Public | Contract |
|---|---|---:|---:|---|
| `page_id` | string | Yes | No | Fixed `PRODUCT-000` |
| `site_scope` | string | Yes | No | Fixed `tio2-my`; immutable at page level |
| `language` | string | Yes | Machine | `en` |
| `route_key` | string | Yes | No | `PRODUCT-000` |
| `canonical_url` | URL | Yes | Machine | `https://tio2malaysia.com/products/` |
| `breadcrumb` | ordered relation | Yes | Yes | Home → Products |
| `modules` | ordered collection | Yes | No | Exact module order in master package |
| `relationship_version` | string | Yes | No | `PRODUCT_V0.3` |
| `content_revision` | string | Yes | No | `PRODUCT-000_GATE5_V0.13` |

## 2. Component map

| Component key | Data source | Rendering contract | Empty/failure behavior |
|---|---|---|---|
| `global_header` | Shared Global Chrome configuration | Products current; fixed RFQ; approved Logo keys | Missing required nav/RFQ is Gate 9 blocker, not page-level fallback |
| `breadcrumb` | Page/route registry | Home → Products | Unresolved Home or current canonical blocks release |
| `hero` | Page content | Exact V0.13 copy; primary local selector action; contextual RFQ | Never infer route claims or hide Global Chrome RFQ |
| `application_selector` | PRODUCT V0.3 relations | Six controls + Not Sure; neutral Grades to Review | Failure preserves complete directory; no guessed result |
| `process_routes` | Page registry + route health | Atomic 2/1/0 cards | Zero routes = complete module 0px |
| `special_process_row` | PRODUCT V0.3 + Grade identity | CR-901 / Vapor-phase oxidation / View Grade | Grade route failure blocks release |
| `grade_directory` | Approved fourteen-grade collection | Four groups, fourteen unique rows, exact summary and action | Missing, duplicate or mismatched row blocks release |
| `evaluation_steps` | Ordered page content | Five exact steps | No partial list or inferred copy |
| `support_paths` | Page registry + route health | Atomic 3/2/1/0 cards | Zero routes = complete module 0px |
| `buyer_questions` | Ordered FAQ content | Five exact Q/A; all answers initial DOM | JS failure must not remove answer text from DOM |
| `final_rfq` | Page content + `CONV-RFQ` | Exact lightweight CTA copy | Route health false blocks release; no Contact fallback |
| `global_footer` | Shared Global Chrome configuration | Deep Navy; `PROCUREMENT`; fixed RFQ; reverse Logo | Missing required RFQ/Logo blocks release |

## 3. Hero mapping

| Field | Exact value / rule |
|---|---|
| `kicker` | `TITANIUM DIOXIDE PRODUCTS` |
| `h1` | `Titanium Dioxide Pigment Grades for Industrial Applications` |
| `intro` | `Explore 14 titanium dioxide pigment grades using the application selector, production-process categories or complete grade directory, then continue to individual grade pages for technical evaluation.` |
| `rutile_statement` | `The portfolio includes rutile titanium dioxide pigment grades for multiple industrial applications.` |
| `qualification` | `Listed grades are starting points for technical evaluation and do not guarantee suitability for a specific formulation or operating condition.` |
| `primary_cta.label` | `Start Grade Selection` |
| `primary_cta.target` | Local `#grade-selector` |
| `secondary_cta.label` | `Request a Quote` |
| `secondary_cta.route_key` | `CONV-RFQ` |
| `summary.title` | `14 grades. Four portfolio groups.` |
| `summary.body` | `Browse the complete directory by product family.` |
| `summary.items` | 6 Coatings Grades; 5 Plastics & Masterbatch; 2 Inks & Multi-Application; 1 Specialty Grade |

## 4. Application Selector

### 4.1 Controls and state

| Field | Contract |
|---|---|
| `anchor_id` | `grade-selector` |
| `heading` | `Start with Your Application` |
| `intro` | `Choose the closest application to view the grades listed for that use case.` |
| `controls` | Coatings; Plastics; Masterbatch; Printing Inks; Paper; Specialty Materials |
| `not_sure.label` | `Not Sure` |
| `result_heading` | `Grades to Review — {count}` |
| `result_cta` | `View Grade` |
| `disclaimer` | Exact Hero qualification sentence |
| `no_result` | `No grade is listed for this application. Browse all grades or share your requirements for technical review.` |
| `failure` | Announce that selection is unavailable and direct the user to the complete directory; do not expose internal error details |
| `URL behavior` | Client interaction only; no crawlable parameter, facet URL, Canonical or sitemap entry |

### 4.2 Exact public result sets

| Application | Count | Grade IDs in public order |
|---|---:|---|
| Coatings | 8 | M-350, M-510, M-896, M-996, M-2196, M-895, M-52, M-2377 |
| Plastics | 8 | M-350, M-510, M-200, M-108, M-210, M-340, M-886, M-2377 |
| Masterbatch | 7 | M-510, M-200, M-108, M-210, M-340, M-886, M-2377 |
| Printing Inks | 4 | M-350, M-510, M-52, M-2377 |
| Paper | 2 | M-350, M-2377 |
| Specialty Materials | 1 | CR-901 |

Only rows with `application_status=VERIFIED_FOR_PUBLIC_MAPPING` and `application_public_behavior=RENDER_NEUTRAL_MAPPING` may enter these sets. `NO_PUBLIC_MAPPING` rows never render and never become negative suitability.

## 5. Process mapping

| Process | Count | Exact Grade set | Route behavior |
|---|---:|---|---|
| Chloride | 8 | M-350, M-510, M-896, M-895, M-200, M-210, M-340, M-886 | Card route key `PRODUCT-PROC-CL` |
| Sulfate | 5 | M-996, M-2196, M-108, M-52, M-2377 | Card route key `PRODUCT-PROC-SU` |
| Vapor-phase oxidation | 1 | CR-901 | Grade row only; route key `GRADE-CR901` |

Process card fields: `route_key`, `title`, `body`, `cta_label`, `route_state`. A card is atomic; its fields render together only after Malaysia-scope resolution. Process membership does not depend on route state.

## 6. Fourteen-grade directory

`grade_directory[].summary` is the single server-side source for each visible directory summary and any optional Product Schema `description`. Both outputs must match character-for-character.

### 6.1 Public and internal fields

| Field | Public | Contract |
|---|---:|---|
| `grade_id` | Yes | Exact model name |
| `page_id` | No | Stable Page ID below |
| `route_key` | No | Same as Page ID |
| `registered_url` | Link target after implementation | Exact registered URL below |
| `portfolio_group` | Yes as group heading | One of four navigation groups; not technical suitability |
| `summary` | Yes | Exact approved string; single server-side source |
| `cta_label` | Yes | `View Grade` |
| `summary_source_id` | No | `SRC-USER-TDS-DIRECTORY-SUMMARY-20260831` |
| `summary_source_date` | No | `2026-08-31` |
| `summary_scope` | No | `DIRECTORY_SUMMARY_ONLY` |
| `summary_verification_status` | No | Value from Gate 6 TDS impact audit |

### 6.2 Exact rows

| Order | Grade | Page ID | Registered URL | Group | Exact `summary` |
|---:|---|---|---|---|---|
| 1 | M-350 | `GRADE-M350` | `/products/m-350/` | Coatings Grades | `Excellent hue and high gloss with strong hiding power.` |
| 2 | M-510 | `GRADE-M510` | `/products/m-510/` | Coatings Grades | `TMP/TME-free multi-application grade with high brightness and durability.` |
| 3 | M-896 | `GRADE-M896` | `/products/m-896/` | Coatings Grades | `Superior weather resistance with high gloss and excellent opacity for demanding exterior coatings.` |
| 4 | M-996 | `GRADE-M996` | `/products/m-996/` | Coatings Grades | `High-durability coatings grade with high opacity and good gloss.` |
| 5 | M-2196 | `GRADE-M2196` | `/products/m-2196/` | Coatings Grades | `Highly durable coatings pigment with high opacity and easy dispersion.` |
| 6 | M-895 | `GRADE-M895` | `/products/m-895/` | Coatings Grades | `High-opacity, high-gloss coatings grade with good weather resistance.` |
| 7 | M-200 | `GRADE-M200` | `/products/m-200/` | Plastics & Masterbatch Grades | `High-durability exterior plastics grade with strong anti-chalking performance.` |
| 8 | M-108 | `GRADE-M108` | `/products/m-108/` | Plastics & Masterbatch Grades | `High-heat-stability plastics grade with low oil absorption and rapid dispersion.` |
| 9 | M-210 | `GRADE-M210` | `/products/m-210/` | Plastics & Masterbatch Grades | `High hiding power and easy dispersion for polyolefin masterbatch.` |
| 10 | M-340 | `GRADE-M340` | `/products/m-340/` | Plastics & Masterbatch Grades | `High whiteness with strong high-temperature anti-yellowing performance.` |
| 11 | M-886 | `GRADE-M886` | `/products/m-886/` | Plastics & Masterbatch Grades | `Bright-white plastics grade with excellent dispersion and processability.` |
| 12 | M-52 | `GRADE-M52` | `/products/m-52/` | Inks & Multi-Application Grades | `Very high gloss, high opacity and low abrasivity for printing inks.` |
| 13 | M-2377 | `GRADE-M2377` | `/products/m-2377/` | Inks & Multi-Application Grades | `High gloss and brightness with good opacity and easy dispersion.` |
| 14 | CR-901 | `GRADE-CR901` | `/products/cr-901/` | Specialty Grade | `High-purity grade with low impurities and stable batch-to-batch quality.` |

Missing or duplicated rows, changed order, changed string, cross-grade source borrowing or cross-scope route fallback are release defects.

## 7. Evaluation steps

| Order | Title | Exact body |
|---:|---|---|
| 1 | Define the application | `Record the resin or material system, end use, processing conditions and performance targets that the grade must be evaluated against.` |
| 2 | Confirm whether process matters | `Identify whether chloride or sulfate production-process classification is a required sourcing parameter. Process classification does not determine application suitability.` |
| 3 | Review applicable technical data | `Review information issued for the grade you are evaluating. Do not infer missing values from another grade, an older source or an unrelated TDS.` |
| 4 | Identify destination and document needs | `Confirm the destination market and the technical, quality, compliance or origin documents required for the applicable request.` |
| 5 | Validate in the buyer's system | `Confirm final suitability through the buyer's own formulation, processing conditions, performance requirements and qualification process.` |

## 8. Procurement paths

| Order | Route key | Title | Body | CTA |
|---:|---|---|---|---|
| 1 | `APP-000` | Review by Application | `Review grades listed for each application and continue to detailed application guidance.` | Explore Applications |
| 2 | `DOC-000` | Identify Required Documents | `Review technical, quality, compliance and origin-document pathways for the applicable request.` | Explore Documents |
| 3 | `MARKET-000` | Review Destination Context | `Review destination-market procurement context without assuming local availability, registration or regulatory acceptance.` | Explore Markets |

Render only complete cards whose Malaysia-scope route is resolved. Zero cards means the entire module is absent.

## 9. Buyer Questions

All answers must be present in initial server-rendered DOM.

1. **How do I choose a titanium dioxide pigment grade?**
   `Start with the intended application, then use production-process classification if it is a required sourcing parameter. Review the relevant grade page and confirm the available product information against the formulation, processing conditions, destination and documentation requirements. A listed result is a starting point for evaluation, not a suitability guarantee.`
2. **Which grades are listed in this product center?**
   `The product center lists 14 grades: M-350, M-510, M-896, M-996, M-2196, M-895, M-200, M-108, M-210, M-340, M-886, M-52, M-2377 and CR-901.`
3. **What is the difference between application and process selection?**
   `Application selection groups grades by listed use-case relationships, while process selection groups grades by their production-process classification. A process classification does not determine application suitability on its own.`
4. **What if no grade is shown for my application?**
   `A missing result means that the selector has no listed grade for that application. It should not automatically be interpreted as a technical rejection of every grade. Buyers can contact the team when a requirement is not represented in the selector.`
5. **Does a listed grade guarantee suitability?**
   `No. A listed grade is a starting point for technical evaluation. Final suitability should be confirmed against the buyer's formulation, processing conditions, performance requirements, destination requirements and applicable documentation.`

## 10. RFQ and Global Chrome fields

| Field | Contract |
|---|---|
| `rfq_visibility` | Constant `ALWAYS_VISIBLE` for Global Header, Mobile Header, Mobile Menu and Footer |
| `rfq_route_key` | `CONV-RFQ` |
| `rfq_registered_url` | `/request-a-quote/`; not represented as live until Gate 9 verification |
| `rfq_route_ready` | Release health gate; false never hides/disables RFQ or changes it to Contact |
| `final_rfq.heading` | `Request a Quote for Your Requirements` |
| `final_rfq.body` | `Share your application, destination market, expected quantity and any grade you are evaluating.` |
| `final_rfq.note` | `Quotation, availability and documentation remain subject to review.` |
| `final_rfq.cta` | `Request a Quote` |
| `footer.section_title` | `PROCUREMENT` |
| `products_current` | Required in Desktop nav and Mobile Menu; not colour-only |

## 11. Production Logo binding

| Context | Asset key | Required target |
|---|---|---|
| Desktop Header | `brand_logo_primary_horizontal` | 180×60 box, preserve aspect ratio |
| Mobile Header | `brand_logo_primary_horizontal` | 120×40 box, preserve aspect ratio |
| Deep Navy Footer | `brand_logo_reverse_monochrome` | 180×60 proof target |
| Favicon | `brand_favicon_safe` | 32×32 and 48×48 |

Resolve exact paths and hashes through Production SVG Logo Manifest V1.0. Do not copy files, use historical PNG, modify SVGs or fall back to another site scope.

## 12. Validation responsibility

- Gate 8: map these semantic fields into implementation and preserve server-rendered public content.
- Gate 9: inspect rendered DOM/API output and verify every exact value, relation, route state, Schema property and scope boundary.
- Gate 10: separate user release and indexing authorization.
