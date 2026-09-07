# PRODUCT-000 Gate 1 Research and Evidence Audit V0.2

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-000` |
| Page | Titanium Dioxide Products |
| URL | `/products/` |
| Gate | Gate 1 — Research and Evidence |
| Version | V0.2 |
| Date | 2026-08-30 |
| Document status | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
| Governing decision status | `APPROVED_RELATION_BASELINE` |
| Page lifecycle | `DESIGN_IN_REVIEW` — unchanged by this evidence revision |
| Supersedes | V0.1 evidence rule for Grade–Application and Grade–Process baseline mapping only |
| Historical record | `PRODUCT-000_GATE1_EVIDENCE_AUDIT_V0.1.md` remains unchanged |
| Authoring scope | Product relationship data governance, evidence gating and Selector data contract only |
| Excluded scope | Visual changes, child-page creation, Gate 6/7, code, CMS, testing, deployment, publishing and `D:\16Wordpress_nextjs` |
| Review owner | Project control and quality review |
| Final decision owner | User |
| Decision record | 2026-08-30: user directed that current `www.mytio2.com` first-party product content govern TiO2 Malaysia Grade–Application and Grade–Process baseline relationships |
| Approval source | User's 2026-08-30 V0.2 command plus the explicit clarification: `刚才是我给你的命令，做V0.2` |
| Project-control review | 2026-08-30 PASS; independent verification `18 PASS / 0 FAIL` |

This V0.2 records a governing evidence decision. It does not rewrite or erase the historical V0.1 decision and does not authorize implementation or publication.

## 1. Governance Decision Superseding V0.1

> On 2026-08-30, the user approved `www.mytio2.com` current first-party product content as the governing baseline for Grade–Application and Grade–Process relationships for the TiO2 Malaysia website.

The V0.1 rule that `mytio2.com` could only be treated as candidate evidence is superseded for these two relationship types. A relationship explicitly present in current first-party content may now be classified `VERIFIED_FOR_PUBLIC_MAPPING` and rendered as a neutral mapping without a separate TDS, application test or technical-owner approval.

The decision is narrowly scoped. It does not convert first-party page content into proof of:

- performance advantages, best-grade or recommended-grade status;
- equivalence, ranking, comparison or formulation compatibility;
- weatherability, dispersion superiority or regulatory compliance;
- stock, MOQ, price, lead time or country availability;
- origin or manufacturing location;
- any fact not expressly present in the governing source.

## 2. Current Evidence and Public Behavior Rules

### 2.1 Application relationship states

| State | Meaning | Public behavior |
|---|---|---|
| `VERIFIED_FOR_PUBLIC_MAPPING` | Current approved first-party baseline explicitly supports the Grade–Application relation | `RENDER_NEUTRAL_MAPPING`; use `Grade to Review` or equivalent neutral wording |
| `CONFLICT_HOLD` | The governing first-party source is internally inconsistent | `DO_NOT_RENDER` |
| `NO_PUBLIC_MAPPING` | The current baseline does not positively map the grade to the application | `DO_NOT_RENDER`; never restate as unsuitable, not recommended or cannot be used |

### 2.2 Process relationship states

| State | Meaning | Public behavior |
|---|---|---|
| `VERIFIED_FOR_PUBLIC_MAPPING` | Current approved first-party baseline explicitly states the process | Render a neutral process classification only |
| `CONFLICT_HOLD` | Current first-party content does not provide a consistent publishable process | `DO_NOT_RENDER`; do not infer Chloride or Sulfate |

All route links remain separately route-gated. A verified relationship does not mean its destination route is approved or live.

## 3. Application Matrix Approved by the Governing Decision

The six application taxonomy categories are complete and contain 25 neutral public mappings.

| Selector option | Grade to Review set | Count |
|---|---|---:|
| Coatings | M-350, M-510, M-896, M-996, M-2196, M-895, M-52 | 7 |
| Plastics | M-350, M-510, M-200, M-108, M-210, M-340, M-886 | 7 |
| Masterbatch | M-510, M-200, M-108, M-210, M-340, M-886 | 6 |
| Printing Inks | M-350, M-510, M-52 | 3 |
| Paper | M-350 | 1 |
| Specialty Materials | CR-901 | 1 |

Selector display order is not a performance ranking. If a deterministic order is required, use the approved product-directory order or a stable model-number order and record: `display order is not a performance ranking`.

## 4. Selector Relationship Contract

### 4.1 Current result behavior

| Selector state | Public result |
|---|---|
| Coatings selected | Show the seven verified grades in section 3 as neutral `Grade to Review` results |
| Plastics selected | Show the seven verified grades in section 3 as neutral `Grade to Review` results |
| Masterbatch selected | Show the six verified grades in section 3 as neutral `Grade to Review` results |
| Printing Inks selected | Show the three verified grades in section 3 as neutral `Grade to Review` results |
| Paper selected | Show M-350 as a neutral `Grade to Review` result |
| Specialty Materials selected | Show CR-901 as a neutral `Grade to Review` result |
| Not Sure | Continue the approved guidance behavior; do not invent a technical recommendation |
| Data or interaction failure | Use the approved failure state; do not expose internal evidence or approval language |

### 4.2 Allowed and forbidden result wording

Allowed:

- `Grade to Review`
- `View Grade`
- neutral application and process labels supported by the baseline

Forbidden without separate evidence:

- `Best Grade`, `Recommended Grade`, `Ideal Grade`, `Best Choice`
- `Equivalent To`, performance ranking or comparison
- formulation-specific recommendation or suitability guarantee

## 5. Process Matrix

| Process | Verified grades | Count | Public rule |
|---|---|---:|---|
| Chloride | M-350, M-510, M-896, M-895, M-200, M-210, M-340, M-886 | 8 | Neutral classification; process route remains route-gated |
| Sulfate | M-996, M-2196, M-108, M-52 | 4 | Neutral classification; process route remains route-gated |
| Vapor-phase oxidation | CR-901 | 1 | Specialty process only; do not include in Chloride or Sulfate aggregation |
| Unresolved | M-2377 | 1 | `CONFLICT_HOLD`; no process label or aggregation |

Process classification does not prove application superiority or a formulation match.

## 6. Frozen Relationships

### 6.1 M-2377

The governing source contains an internal conflict. V0.2 therefore retains:

| Relationship | Status | Public behavior |
|---|---|---|
| M-2377 → Coatings | `CONFLICT_HOLD` | `DO_NOT_RENDER` |
| M-2377 → Plastics | `CONFLICT_HOLD` | `DO_NOT_RENDER` |
| M-2377 → Printing Inks | `CONFLICT_HOLD` | `DO_NOT_RENDER` |
| M-2377 → Paper | `CONFLICT_HOLD` | `DO_NOT_RENDER` |
| M-2377 → Masterbatch | `NO_PUBLIC_MAPPING` | `DO_NOT_RENDER` |
| M-2377 → Specialty Materials | `NO_PUBLIC_MAPPING` | `DO_NOT_RENDER` |
| M-2377 → Process | `CONFLICT_HOLD` | `DO_NOT_RENDER`; exclude from Chloride and Sulfate aggregation |

Public All Grades behavior remains name plus approved URL only. The reason is `mytio2.com internal source conflict`, not absence of an external TDS.

### 6.2 M-996 and M-2196

The following base relationships are verified:

- M-996 → Coatings; M-996 → Sulfate.
- M-2196 → Coatings; M-2196 → Sulfate.

The following remain frozen and must not render:

- M-996 versus M-2196 difference or comparative positioning;
- which grade is better or how to choose between them;
- ranking, performance advantage or formulation-specific recommendation.

## 7. Six Taxonomies Do Not Create Six Pages

`Specialty Materials` is an approved application taxonomy and Selector mapping. It does not automatically authorize or require a standalone Application page. The current route/page registry governs page count; V0.2 creates no new route, URL or page.

## 8. V0.1 → V0.2 Relation Crosswalk

| Crosswalk action | Count | Meaning |
|---|---:|---|
| `V01_VERIFIED_RETAINED` | 2 | M-350 Coatings and Printing Inks remain verified |
| `V01_PENDING_TO_VERIFIED` | 17 | Direct V0.1 candidate relations become verified under the user-approved baseline |
| `NEW_RELATION_FROM_MYTIO2_BASELINE` | 6 | Direct relations not independently represented in Gate 1 V0.1 are added from the governing baseline |
| `V01_AGGREGATE_HOLD_SPLIT_AND_RETAINED` | 4 | M-2377 aggregate hold is represented as four independent application conflicts |
| `V01_AGGREGATE_HOLD_SPLIT_TO_NO_PUBLIC_MAPPING` | 2 | M-2377 Masterbatch and Specialty Materials remain absent as positive mappings |
| `V01_NO_PUBLIC_MAPPING_RETAINED` | 53 | No new positive mapping is introduced |

The six new direct relations are:

- M-350 → Plastics.
- M-350 → Paper. Gate 1 V0.1 used generic `SEL-PAPER-ANY`; this is a new direct grade relation.
- M-510 → Plastics.
- M-510 → Masterbatch.
- M-510 → Printing Inks.
- M-200 → Masterbatch.

The unique row-level crosswalk is stored in `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.csv`.

## 9. Claim Register Impact

| Claim / gate item | V0.2 result | Status |
|---|---|---|
| CL-004 / Selector mapping evidence | 25 application relations are verified for neutral mapping | `VERIFIED_FOR_PUBLIC_MAPPING` within the scope of this decision |
| CL-005 / M-2377 public behavior | Name and approved URL only; application and process remain frozen | `VERIFIED_INTERNAL_RESTRICTION` |
| CL-006 / M-996 vs M-2196 difference | Base relations verified; difference remains unresolved | `TECHNICAL_VERIFICATION_REQUIRED` |
| R-002 / base application mapping evidence | Prior evidence requirement is superseded by the 2026-08-30 user decision | `RESOLVED_BY_USER_GOVERNANCE_DECISION` for neutral mapping only |
| R-003 / route availability | Not changed by V0.2 | `OPEN` |
| R-004 / frozen technical differences | M-2377 mapping conflict and M-996/M-2196 difference remain frozen | `OPEN` |

## 10. Acceptance Check

- [x] All 14 grades and all six application taxonomies are represented.
- [x] The authoritative matrix contains 84 unique Grade × Application rows.
- [x] Application and Process statuses are separate fields.
- [x] Exactly 25 Application relations are `VERIFIED_FOR_PUBLIC_MAPPING`.
- [x] No normal first-party-supported relation remains pending TDS approval.
- [x] Selector output is neutral and contains no ranking or recommendation claim.
- [x] Chloride has 8 grades; Sulfate has 4; CR-901 has one independent specialty process.
- [x] M-2377 retains four application conflicts and one process conflict.
- [x] M-996/M-2196 base mappings may render; their difference remains frozen.
- [x] Six taxonomies do not automatically create six Application pages.
- [x] V0.1 remains unchanged and traceable.
- [x] PRODUCT-000 Gate 5 and page lifecycle were not advanced.
- [x] No visual, child-page, code, CMS, test, deployment or publication work was performed.

## 11. Version Record

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.1 | 2026-08-29 | Historical Gate 1 baseline: 2 render and 19 do-not-render Selector decisions | Historical approved baseline; retained unchanged |
| V0.2 | 2026-08-30 | Records the user-approved first-party relationship baseline; expands Selector to 25 neutral mappings; separates application and process governance; retains frozen conflicts | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
