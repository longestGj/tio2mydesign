# PRODUCT RELATION V0.2.1 CHANGELOG

## 0. Document Control

| Field | Value |
|---|---|
| Date | 2026-08-30 |
| Status | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
| Change scope | Data-governance and audit-field correction only |
| Historical baseline | V0.2 remains unchanged and approved |
| Matrix status | `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.1.csv` = `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
| Project-control approval | 2026-08-30; independent verification `14 PASS / 0 FAIL` |
| Excluded scope | Research, visual, pages, Gate 6/7, code, CMS, testing, deployment and publishing |

## 1. Required change summary

1. M-2377 remains fully frozen pending the latest approved TDS and dedicated technical review.
2. Current `mytio2.com` M-2377 page information was not used to unfreeze any relationship; it is future-review input only.
3. M-996/M-2196 comparison hold was removed from `application_conflict` and placed in `comparison_hold` and `comparison_hold_reason`.
4. All 25 verified Application mappings remain unchanged.
5. The Process matrix remains unchanged: Chloride 8, Sulfate 4, CR-901 Vapor-phase oxidation, M-2377 `CONFLICT_HOLD`.
6. No public Application mapping was added or deleted.

## 2. Matrix schema delta

V0.2.1 adds two fields to the 22-field V0.2 CSV:

| New field | Purpose |
|---|---|
| `comparison_hold` | Independent Grade ↔ Grade comparison gate |
| `comparison_hold_reason` | Human- and machine-readable reason for the comparison gate |

For M-996 and M-2196:

- `application_conflict` = `none`
- `comparison_hold` = `M996_VS_M2196_DIFFERENTIATION_FROZEN`
- `comparison_hold_reason` = `Base Grade–Application and Grade–Process mappings are approved, but differentiation, ranking, selection rationale and comparative positioning between M-996 and M-2196 remain unsupported and must not render.`

The two comparison fields are empty for every other grade.

## 3. M-2377 delta

- Coatings, Plastics, Printing Inks and Paper remain `CONFLICT_HOLD`.
- Masterbatch and Specialty Materials remain `NO_PUBLIC_MAPPING`.
- Process remains `CONFLICT_HOLD` and `UNRESOLVED`.
- All public behaviors remain `DO_NOT_RENDER`.
- Unified freeze reason: `Awaiting latest approved M-2377 TDS and dedicated technical review.`
- M-2377 does not enter Chloride or Sulfate aggregation.
- Open item `R-M2377-TDS` is `OPEN_HARD_GATE`.
- Required evidence: `Latest approved M-2377 TDS followed by dedicated Application / Process technical review.`

This hard gate does not block the other 13 grades or the approved 25 public Application mappings.

## 4. Unchanged relationship counts

| Item | V0.2 | V0.2.1 |
|---|---:|---:|
| Grade × Application rows | 84 | 84 |
| Application verified | 25 | 25 |
| Application conflict | 4 | 4 |
| Application no public mapping | 55 | 55 |
| Chloride grades | 8 | 8 |
| Sulfate grades | 4 | 4 |
| Vapor-phase oxidation grades | 1 | 1 |
| Process conflict grades | 1 | 1 |

## 5. Explicitly unchanged scope

- The exact 25 verified Application relation IDs and public behaviors.
- M-350 → Paper.
- All non-M-2377 Process classifications.
- M-2377 public catalogue behavior: neutral name and approved URL only.
- Route gates, PRODUCT-000 Gate 5 status, page lifecycle and all visual assets.
- Page count, URLs and child-page scope.
- Code, CMS, testing, development, deployment and `D:\16Wordpress_nextjs`.

## 6. Remaining hard gate

| Item | Status | Required evidence |
|---|---|---|
| `R-M2377-TDS` | `OPEN_HARD_GATE` | `Latest approved M-2377 TDS followed by dedicated Application / Process technical review.` |

V0.2.1 is the current approved relationship baseline. `R-M2377-TDS` remains an `OPEN_HARD_GATE`, but it does not block the other 13 grades or the approved 25 public Application mappings. This approval authorizes only the previously scoped PRODUCT-000 Gate 5 relationship-impact visual revision; it does not authorize Gate 6/7, child pages or development.
