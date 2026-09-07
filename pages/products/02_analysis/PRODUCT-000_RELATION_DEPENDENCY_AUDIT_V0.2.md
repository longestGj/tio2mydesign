# PRODUCT-000 Relation Dependency Audit V0.2

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-000` |
| URL | `/products/` |
| Date | 2026-08-30 |
| Status | `APPROVED_RELATION_DEPENDENCY_BASELINE` |
| Relationship source | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.csv` |
| Source status | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
| Approval source | User's 2026-08-30 V0.2 command and explicit clarification; project-control re-review PASS |
| Scope | PRODUCT-000 Selector and Process relationship dependencies only |
| Excluded | Page redesign, new routes/pages, performance claims, Gate 6/7, code, CMS, testing, deployment and publishing |

## 1. Dependency Change

The historical Gate 1 V0.1 public relationship baseline of 2 visible M-350 relations is superseded by the approved V0.2 relationship matrix. PRODUCT-000 now consumes one shared 84-row source of truth for Application and Process mapping.

This changes relationship data only. Hero, All Grades, Evaluation Guide, Support Paths, Buyer Questions, RFQ route gating, SEO/GEO boundaries and responsive composition remain governed by their approved baselines.

## 2. Selector Dependencies

| Application | Current neutral Grade-to-Review set | Count |
|---|---|---:|
| Coatings | M-350, M-510, M-896, M-996, M-2196, M-895, M-52 | 7 |
| Plastics | M-350, M-510, M-200, M-108, M-210, M-340, M-886 | 7 |
| Masterbatch | M-510, M-200, M-108, M-210, M-340, M-886 | 6 |
| Printing Inks | M-350, M-510, M-52 | 3 |
| Paper | M-350 | 1 |
| Specialty Materials | CR-901 | 1 |

Rules:

- Use `Grade to Review`; never use best, recommended, ideal, equivalent or ranking language.
- Stable display order may follow the existing product-directory order; it is not a performance ranking.
- M-2377 never appears in Selector output.
- M-996 and M-2196 may both appear under Coatings with identical structure and no difference or selection reason.
- A verified relationship does not authorize a new Application page or a live link.

## 3. Process Dependencies

| Classification | Current grade set | Count | Route dependency |
|---|---|---:|---|
| Chloride | M-350, M-510, M-896, M-895, M-200, M-210, M-340, M-886 | 8 | `PRODUCT-PROC-CL`; card only when approved + live |
| Sulfate | M-996, M-2196, M-108, M-52 | 4 | `PRODUCT-PROC-SU`; card only when approved + live |
| Vapor-phase oxidation | CR-901 | 1 | Classification may appear in grade context; do not force into Chloride/Sulfate routes |
| Unresolved | M-2377 | 1 | `DO_NOT_RENDER`; exclude from all Process aggregation |

The existing Process 2/1/0 rendering contract remains unchanged. Relationship approval does not make a route live.

## 4. Required Component States

| State | Required evidence behavior |
|---|---|
| Default | No grade result until an application is selected |
| Six application results | Return exactly the sets in section 2 |
| No listed grade | Retain the approved neutral fallback component; do not invent a grade |
| Not Sure | Retain approved guidance and route/RFQ gating |
| Interaction failure | Retain approved error behavior; expose no internal status |
| M-2377 | Name and approved URL only in All Grades; absent from Selector and Process |
| M-996 / M-2196 | Identical Buyer Clean treatment; no comparison, ranking or selection reason |

## 5. Downstream Impact

| Consumer | Required action | Current authorization |
|---|---|---|
| PRODUCT-000 Content Architecture | Replace 2-render relationship state with approved 25-relation state contract | Authorized for specification update |
| PRODUCT-000 Gate 5 visuals | Re-render relationship-dependent Desktop and 390px states | Authorized for Gate 5 revision only |
| APP-000 / Application pages | May reference this baseline only after their own task authorization | No page work authorized here |
| Process pages | May reference classification baseline only after their own task authorization | No child-page work authorized here |
| Development | Consume only after future approved handoff | Not authorized |

## 6. Acceptance

- [x] One shared relation matrix; no second mapping table.
- [x] 25 neutral Application relations and 13 verified Process classifications.
- [x] Route/live gating remains separate.
- [x] M-2377 and M-996/M-2196 freeze boundaries remain intact.
- [x] Six taxonomies do not create six pages.
- [x] No performance, equivalence, ranking, suitability or supply claim added.
- [x] No Gate 6/7, child-page or development authorization added.

## 7. Review Record

| Date | Record | Status |
|---|---|---|
| 2026-08-30 | V0.2 dependency audit established from the project-control-approved relationship baseline | `APPROVED_RELATION_DEPENDENCY_BASELINE` |
