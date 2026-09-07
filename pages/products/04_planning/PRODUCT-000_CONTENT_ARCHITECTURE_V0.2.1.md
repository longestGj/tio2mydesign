# PRODUCT-000 Content Architecture V0.2.1 — Relationship Impact Revision

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-000` |
| URL | `/products/` |
| Date | 2026-08-30 |
| Status | `APPROVED_GATE_5_BASELINE` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Gate 5 | `APPROVED`, user approval 2026-08-30 |
| Supersedes | V0.1 Selector and Process relationship-state sections only |
| Unchanged baseline | All other Gate 2 content, module order, Buyer Clean copy, route logic, RFQ logic, SEO/GEO and evidence boundaries |
| Relationship source | `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.1.csv` — `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
| Relationship audit | `PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.2.1.md`; `PRODUCT-000_GATE1_EVIDENCE_AUDIT_V0.2.1.md` |
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
- `R-M2377-TDS=OPEN_HARD_GATE`; required evidence is the latest approved TDS followed by dedicated Application / Process technical review. This does not block the other 13 grades or the 25 public mappings.

### M-996 and M-2196

- Both may appear under Coatings and Sulfate.
- Their row/card structure, visual weight and action are identical.
- No difference, ranking, selection reason or comparative positioning renders.
- `application_conflict=none`; the independent comparison hold must not suppress either base mapping.

## 5. SEO / GEO / Schema Boundary

### 5.1 SEO state

- The primary keyword, H1, Title, Meta candidates, canonical and page responsibility remain unchanged.
- Selector selections are non-indexable UI states and create no new URL, canonical, facet page or crawlable parameter.
- The six Application labels are navigation entities, not new PRODUCT-000 primary keywords; their approved Application pages retain their own keyword ownership.
- Process classifications do not transfer Chloride/Sulfate primary-keyword ownership from the two Process pages.

### 5.2 GEO entity relations

- TiO2 Malaysia product hub → contains 14 Grade entities.
- Grade → Application may mirror only the 25 visible neutral mappings.
- Grade → Process may mirror only the 13 approved classifications: 8 Chloride, 4 Sulfate and CR-901 Vapor-phase oxidation.
- M-2377 exposes no Application, Process or recommendation relation.
- M-996 and M-2196 may each expose Coatings and Sulfate base relations, but no Grade ↔ Grade comparison relation.

### 5.3 Schema boundary

Machine-readable relationships must match visible Buyer Clean content and must not convert `Grade to Review` into `recommended`, `best`, `suitableFor`, equivalent-to, replacement-for or performance assertions. The 55 `NO_PUBLIC_MAPPING` rows emit no public relationship and must never be restated as unsuitable or not recommended.

## 6. Gate 5 Visual Impact

Gate 5 relationship-dependent visuals must now prove:

- all six application result families across explicit Desktop and 390px relationship-state proofs;
- a retained no-result state;
- M-2377 absent from Selector/Process and neutral in All Grades;
- M-996/M-2196 shown without difference or ranking;
- Process classification sets without changing route 2/1/0 behavior;
- no regression to Buyer Clean copy, CTA allowlist, 44px logical touch targets or conditional closure.
- existing complete-page Desktop and 390px composition, copy and route-state assets remain the approved visual baseline; relation boards are additive state proof, not a redesign.

The relationship-impact visuals passed project-control review as `PRODUCT-G5-REL-021 = PASS` and received user Gate 5 approval on 2026-08-30. This V0.2.1 relationship-impact contract is part of the `APPROVED_GATE_5_BASELINE`. Work stops at Gate 5; no Gate 6/7, child-page or development authorization is granted.

## 7. Acceptance

- [x] Relationship-state scope only; module order and page architecture unchanged.
- [x] Six application result sets match the approved 25-relation matrix.
- [x] Process sets match the approved 13-grade classification matrix.
- [x] No-result, Not Sure and failure states remain available.
- [x] M-2377 and M-996/M-2196 freeze contracts are explicit.
- [x] Route/RFQ conditional behavior remains unchanged.
- [x] No new page, route, claim, visual direction or development authorization added.
- [x] SEO keyword ownership and non-indexable Selector-state rules remain unchanged.
- [x] GEO/Schema relationship output is limited to visible V0.2.1 relations.

## 8. Version Record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-08-29 | Approved Gate 2 content architecture | Historical approved baseline retained |
| V0.2 | 2026-08-30 | Relationship-impact revision for approved 25 Application / 13 Process baseline | `DRAFT_FOR_RELATION_IMPACT_REVIEW` |
| V0.2.1 | 2026-08-30 | Synced approved V0.2.1 source; separated Comparison governance; added M-2377 hard gate and SEO/GEO entity-output rules; relationship sets unchanged | `DRAFT_FOR_RELATION_IMPACT_REVIEW` |
