# PRODUCT-000 SEO / GEO / Schema Contract V0.3 — Directory Summary Addendum

## 0. Control

| Field | Value |
|---|---|
| Page | `PRODUCT-000` / Titanium Dioxide Products |
| URL | `/products/` |
| Date | `2026-08-31` |
| Review ID | `PRODUCT-G6-TDS-DIRECTORY-IMPACT-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Baseline role | `CURRENT_TARGETED_GATE_6_ADDENDUM_BASELINE` |
| Targeted outcome | `PROJECT_CONTROL_GATE_6_TARGETED_IMPACT_PASS_WITH_RECORDED_SOURCE_LIMITATION` |
| Base contract | `PRODUCT-000_SEO_GEO_SCHEMA_CONTRACT_V0.2.md = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Current Gate 5 source | `PRODUCT-000_FULL_VISUAL_DESIGN_V0.13.md` via `PRODUCT-000_GATE5_APPROVED_BASELINE_MANIFEST_V0.2.md` |
| Relationship source | `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`; unchanged |
| Scope | Addendum for fourteen exact public directory summaries only; all unmodified V0.2 clauses remain in force |
| Gate 7 | `LOCKED / NOT_AUTHORIZED` |

## 1. Unchanged SEO contract

The following remain exactly as V0.2:

- Primary keyword: `titanium dioxide pigment`.
- H1: `Titanium Dioxide Pigment Grades for Industrial Applications`.
- Title: `Titanium Dioxide Pigment Grades | TiO2 Malaysia`.
- Meta Description: `Explore 14 titanium dioxide pigment grades by application, production process and portfolio group, then continue to grade pages for technical evaluation.`
- Canonical: `https://tio2malaysia.com/products/`.
- Robots staging/release phasing, cannibalization boundaries and exact-grade ownership.

The summaries improve grade-entity clarity inside the Hub. They do not transfer exact-grade keyword ownership from Grade pages and must not be copied into metadata without separate approval.

## 2. GEO summary attribute contract

Each existing grade entity receives one exact, source-bound `directory_summary` attribute. Authority and exact strings are defined by:

- `PRODUCT-000_GATE6_TDS_DIRECTORY_IMPACT_AUDIT_V0.1.md`, Section 2.
- `SRC-USER-TDS-DIRECTORY-SUMMARY-20260831`.
- User approval dated `2026-08-31`.

Allowed answer pattern: identify the grade and repeat its exact visible summary. The attribute must not be used to infer ranking, recommendation, suitability, hidden Application/Process relations, numeric properties or comparisons.

Application and Process relations remain separate graph edges sourced only from PRODUCT V0.3. `NO_PUBLIC_MAPPING` remains absent, not negative.

## 3. ItemList and Product Schema delta

The fourteen-item order, grade URLs and ItemList uniqueness remain unchanged from V0.2.

An optional minimal Product node may add:

| Property | Rule |
|---|---|
| `description` | Exact directory summary for the same grade, only when visibly rendered; character-for-character parity required |

`description` must use the same server-side field as the visible directory. It must not be generated from keywords, Application/Process relations, another grade, AI output or a cross-scope fallback.

All V0.2 prohibitions remain, including Offers, ratings, certification, origin, inventory, availability, hidden relations, negative suitability, comparison, equivalence, substitution and unapproved URLs.

## 4. M-996, M-2196 and M-2377 boundary

- M-996 and M-2196 may each expose only their own exact summary. Do not join, contrast, rank or derive a choice rule from the two descriptions.
- `M996_VS_M2196_DIFFERENTIATION_FROZEN` remains controlling for all 12 matrix rows.
- M-2377 retains five public Applications and Sulfate from PRODUCT V0.3; its directory summary does not create Specialty Materials or Rubber Schema relations.
- Rubber remains evidence-only with no taxonomy, page, URL, keyword block or machine-readable relation.

## 5. Development-field delta

If Gate 7 is later authorized, extend the V0.2 `grade_directory` contract with:

| Field | Public | Required behavior |
|---|---:|---|
| `summary` | Yes | Exact approved sentence for the same grade |
| `summary_source_id` | No | `SRC-USER-TDS-DIRECTORY-SUMMARY-20260831` |
| `summary_source_date` | No | `2026-08-31` |
| `summary_scope` | No | `DIRECTORY_SUMMARY_ONLY` |
| `summary_verification_status` | No | Exact audit status for that grade |

These fields remain a contract candidate, not implementation. Every query and cache key remains isolated by `site_scope=tio2-my`. Missing data must not fall back to another site scope or another grade.

## 6. Current baseline and historical boundary

- V0.2 remains the approved historical Gate 6 contract for all unchanged topics.
- V0.3 is the current project-control-passed targeted Gate 6 addendum baseline.
- Historical `PRODUCT-000-G6-PCR-01` did not review these later summaries.
- `PRODUCT-G6-TDS-DIRECTORY-IMPACT-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`; this addendum is now the controlling delta for the fourteen directory summaries.
- Gate 7 remains `LOCKED / NOT_AUTHORIZED`.

## 7. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.2 | 2026-08-31 | Historical approved full SEO/GEO/Schema Gate 6 contract | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| V0.3 | 2026-08-31 | Targeted fourteen-summary GEO attribute, optional Product description and development-field addendum | `PROJECT_CONTROL_REVIEW_PASS / CLOSED`; current targeted Gate 6 addendum baseline |
