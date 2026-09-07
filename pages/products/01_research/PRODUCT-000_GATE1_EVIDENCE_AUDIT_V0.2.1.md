# PRODUCT-000 Gate 1 Evidence Audit V0.2.1

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-000` |
| Page | Titanium Dioxide Products |
| URL | `/products/` |
| Gate | Gate 1 — evidence-governance delta only |
| Version | V0.2.1 |
| Date | 2026-08-30 |
| Document status | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
| Page lifecycle | `DESIGN_IN_REVIEW` — unchanged |
| Governing matrix | `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.1.csv` |
| Baseline inherited | V0.2 approved 25 Grade → Application mappings and 13 Grade → Process classifications |
| Historical records | V0.1 and V0.2 remain unchanged |
| Governing matrix status | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
| Project-control approval | 2026-08-30; independent verification `14 PASS / 0 FAIL` |
| Approval scope | Governance-only correction; the approved 25 Application and 13 Process relationship sets are unchanged and require no new user technical-relationship approval |
| Excluded scope | New product research, visual changes, pages, Gate 6/7, code, CMS, testing, deployment, publishing and `D:\16Wordpress_nextjs` |

## 1. Purpose

This minor revision corrects governance fields without changing the approved relationship baseline. It makes three evidence domains explicit:

1. Grade → Application;
2. Grade → Process;
3. Grade ↔ Grade Comparison.

Application status and comparison status must never be inferred from one another.

## 2. Grade → Application baseline

The approved neutral Selector sets remain unchanged:

| Application | Grade to Review set | Count |
|---|---|---:|
| Coatings | M-350, M-510, M-896, M-996, M-2196, M-895, M-52 | 7 |
| Plastics | M-350, M-510, M-200, M-108, M-210, M-340, M-886 | 7 |
| Masterbatch | M-510, M-200, M-108, M-210, M-340, M-886 | 6 |
| Printing Inks | M-350, M-510, M-52 | 3 |
| Paper | M-350 | 1 |
| Specialty Materials | CR-901 | 1 |

Total: 25 `VERIFIED_FOR_PUBLIC_MAPPING`, 4 `CONFLICT_HOLD`, 55 `NO_PUBLIC_MAPPING`. Verified results remain `RENDER_NEUTRAL_MAPPING`; no ranking, recommendation, equivalence or performance claim is authorized.

## 3. Grade → Process baseline

| Process | Grades | Count | Status |
|---|---|---:|---|
| Chloride | M-350, M-510, M-896, M-895, M-200, M-210, M-340, M-886 | 8 | verified |
| Sulfate | M-996, M-2196, M-108, M-52 | 4 | verified |
| Vapor-phase oxidation | CR-901 | 1 | verified specialty process |
| Unresolved | M-2377 | 1 | `CONFLICT_HOLD` |

M-2377 must not be inferred into Chloride or Sulfate. Route availability remains a separate gate.

## 4. M-2377 product-level evidence hold

| Relationship | Status | Public behavior |
|---|---|---|
| Coatings | `CONFLICT_HOLD` | `DO_NOT_RENDER` |
| Plastics | `CONFLICT_HOLD` | `DO_NOT_RENDER` |
| Printing Inks | `CONFLICT_HOLD` | `DO_NOT_RENDER` |
| Paper | `CONFLICT_HOLD` | `DO_NOT_RENDER` |
| Masterbatch | `NO_PUBLIC_MAPPING` | `DO_NOT_RENDER` |
| Specialty Materials | `NO_PUBLIC_MAPPING` | `DO_NOT_RENDER` |
| Process | `CONFLICT_HOLD` | `DO_NOT_RENDER`; exclude from process aggregation |

Unified reason:

`Awaiting latest approved M-2377 TDS and dedicated technical review.`

The current `mytio2.com` M-2377 page is retained only as an input to a future dedicated review and is not an unfreeze basis.

| Open item | Status | Required evidence | Scope |
|---|---|---|---|
| `R-M2377-TDS` | `OPEN_HARD_GATE` | `Latest approved M-2377 TDS followed by dedicated Application / Process technical review.` | M-2377 only; does not block the other 13 grades or the approved 25 public Application mappings |

## 5. M-996 / M-2196 comparison hold

Base mappings remain verified:

- M-996 → Coatings and M-996 → Sulfate.
- M-2196 → Coatings and M-2196 → Sulfate.

Their `application_conflict` fields are `none`. The independent Comparison governance fields are:

- `comparison_hold`: `M996_VS_M2196_DIFFERENTIATION_FROZEN`
- `comparison_hold_reason`: `Base Grade–Application and Grade–Process mappings are approved, but differentiation, ranking, selection rationale and comparative positioning between M-996 and M-2196 remain unsupported and must not render.`

The hold forbids technical differentiation, better/worse claims, selection logic, ranking, formulation-specific rationale, performance comparison, equivalence and replacement logic. It does not invalidate either grade's Application or Process mapping.

## 6. Gate impact

| Item | V0.2.1 result |
|---|---|
| R-002 | V0.2 base mapping decision remains in force; not reopened |
| R-003 | `OPEN`; route/live gating unchanged |
| R-004 | `OPEN`; now separated into product-level and comparison-level controls |
| R-M2377-TDS | `OPEN_HARD_GATE` |
| Gate 5 | Status and visual assets unchanged |
| Gate 6 / Gate 7 | Not entered |

## 7. Acceptance Check

- [x] 84 unique Grade × Application rows remain present.
- [x] Application counts remain 25 verified / 4 conflict / 55 no-public.
- [x] The exact 25 verified mappings are unchanged from V0.2.
- [x] Chloride 8, Sulfate 4 and CR-901 Vapor-phase oxidation are unchanged.
- [x] M-2377 retains four Application conflicts, two no-public mappings and one Process conflict.
- [x] M-2377 is excluded from Chloride and Sulfate aggregation.
- [x] M-996/M-2196 base mappings remain verified.
- [x] M-996/M-2196 comparison governance is independent from Application conflict.
- [x] V0.2 files remain unchanged.
- [x] No code, CMS, page, visual, development or deployment work was performed.

## 8. Version Record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.2 | 2026-08-30 | Approved relationship baseline | Historical approved baseline retained unchanged |
| V0.2.1 | 2026-08-30 | Governance-only correction for M-2377 evidence hold and M-996/M-2196 comparison hold | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
