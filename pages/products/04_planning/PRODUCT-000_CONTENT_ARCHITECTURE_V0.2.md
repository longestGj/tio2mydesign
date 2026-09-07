# PRODUCT-000 Content Architecture V0.2 — Relationship Impact Revision

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-000` |
| URL | `/products/` |
| Date | 2026-08-30 |
| Status | `DRAFT_FOR_RELATION_IMPACT_REVIEW` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Supersedes | V0.1 Selector and Process relationship-state sections only |
| Unchanged baseline | All other Gate 2 content, module order, Buyer Clean copy, route logic, RFQ logic, SEO/GEO and evidence boundaries |
| Relationship source | `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.csv` — `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
| Excluded | New modules, new pages/routes, copy expansion, development, Gate 6/7 and publishing |

## 1. Content-state Principle

The Selector is an application-first navigation aid. Results are neutral `Grades to Review`, not recommendations, rankings, equivalence claims or suitability guarantees. The Process module remains route-atomic and route-gated; classification approval does not make a Process route live.

## 2. Selector State Contract

### 2.1 Default

Buyer Clean copy remains:

> Select an application to view available evaluation paths.

No grade result is rendered before selection.

### 2.2 Application results

| Selected application | Result rows | Count |
|---|---|---:|
| Coatings | M-350, M-510, M-896, M-996, M-2196, M-895, M-52 | 7 |
| Plastics | M-350, M-510, M-200, M-108, M-210, M-340, M-886 | 7 |
| Masterbatch | M-510, M-200, M-108, M-210, M-340, M-886 | 6 |
| Printing Inks | M-350, M-510, M-52 | 3 |
| Paper | M-350 | 1 |
| Specialty Materials | CR-901 | 1 |

Each result row contains only:

- exact grade name;
- selected application label;
- verified neutral process label when relevant and allowed by the component context;
- approved `View Grade` / grade-name link pattern.

No row contains a performance reason, best/recommended badge, equivalence, ranking, formulation match or availability promise.

### 2.3 Ordering

Use the stable directory order reflected in the approved relationship matrix. Display order is not a performance ranking. Do not number results as first, second or best.

### 2.4 No-result state

Retain the approved fallback for any state with no public result:

> No grade is listed for this application. Browse all grades or share your requirements for technical review.

If RFQ is unavailable, remove the dependent second clause and all RFQ actions, leaving the approved route-safe fallback:

> No grade is listed for this application. Browse all grades.

### 2.5 Not Sure and failure

Not Sure and interaction-failure behavior remain unchanged from V0.1. Route-dependent sentences and CTA surfaces remain synchronized with route availability.

## 3. Process State Contract

### 3.1 Classification source

- Chloride: M-350, M-510, M-896, M-895, M-200, M-210, M-340, M-886.
- Sulfate: M-996, M-2196, M-108, M-52.
- CR-901: Vapor-phase oxidation; never placed in Chloride/Sulfate aggregation.
- M-2377: unresolved; never placed in Process aggregation.

### 3.2 Route rendering

| Live state | Public module behavior |
|---|---|
| Both Process routes approved + live | Render two complete equal Process cards |
| One Process route approved + live | Render one restrained complete card; no empty partner |
| No Process route approved + live | Entire Process module is 0px; no heading, shell, divider or reserved gap |

Card copy remains the approved Gate 2 Buyer Clean copy. No process card claims superiority, performance or application fit.

## 4. Freeze Contract

### M-2377

- All Grades: neutral name and approved URL only.
- Selector: absent for all six application states.
- Process: absent.
- No badge, qualifier, internal status, application, process, recommendation or difference.

### M-996 and M-2196

- Both may appear under Coatings and Sulfate.
- Their row/card structure, visual weight and action are identical.
- No difference, ranking, selection reason or comparative positioning renders.

## 5. GEO / Schema Boundary

Machine-readable relationships may mirror only visible, approved neutral mappings. They must not convert `Grade to Review` into `recommended`, `best`, `suitableFor`, equivalent-to or performance assertions. M-2377 exposes no Application/Process relation. M-996/M-2196 expose no comparative relation.

## 6. Gate 5 Visual Impact

Gate 5 relationship-dependent visuals must now prove:

- all six application result families on Desktop and 390px;
- a retained no-result state;
- M-2377 absent from Selector/Process and neutral in All Grades;
- M-996/M-2196 shown without difference or ranking;
- Process classification sets without changing route 2/1/0 behavior;
- no regression to Buyer Clean copy, CTA allowlist, 44px logical touch targets or conditional closure.

Gate 5 remains `DRAFT_FOR_GATE_5_REVIEW` until the revised visuals pass project-control and user review.

## 7. Acceptance

- [x] Relationship-state scope only; module order and page architecture unchanged.
- [x] Six application result sets match the approved 25-relation matrix.
- [x] Process sets match the approved 13-grade classification matrix.
- [x] No-result, Not Sure and failure states remain available.
- [x] M-2377 and M-996/M-2196 freeze contracts are explicit.
- [x] Route/RFQ conditional behavior remains unchanged.
- [x] No new page, route, claim, visual direction or development authorization added.

## 8. Version Record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-08-29 | Approved Gate 2 content architecture | Historical approved baseline retained |
| V0.2 | 2026-08-30 | Relationship-impact revision for approved 25 Application / 13 Process baseline | `DRAFT_FOR_RELATION_IMPACT_REVIEW` |
