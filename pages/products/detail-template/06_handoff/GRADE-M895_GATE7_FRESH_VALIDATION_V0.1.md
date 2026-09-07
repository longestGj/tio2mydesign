# GRADE-M895 Gate 7 Fresh Validation V0.1

## 1. Control

| Field | Value |
|---|---|
| Validation ID | `GRADE-M895-G7-VALIDATION-01` |
| Date | `2026-09-02` |
| Status | `VALIDATED_CANDIDATE_PENDING_CONTROLLER_02_REVIEW` |
| Scope | D23 planning artifacts only |
| D16 operation/contact | None |

## 2. Source validation

| Check | Result |
|---|---|
| Current source | `TDS_M-895_IKHLAS_V1_2026.pdf` |
| Current SHA-256 | `5B7E11F6CB3E05FFD5212197FAAF43E14F10704BDEC5F6D258576E3BC17D40C5` |
| Current pages | 1 |
| Full-page render inspected | PASS |
| Text extraction | PASS |
| Visible identity / version | M-895 / V1 2026 |
| Identity conflict | None |
| Historical source | `TDS_M_895_.pdf` / 11/2024 |
| Historical SHA-256 | `CA05FABDFFE1382E86765EEB57BED1F2FA177FE0ED7548AA36EB3814018D794D` |
| Current/historical mixing | 0 current values sourced from legacy PDF |

## 3. Public contract shape

| Check | Result |
|---|---|
| JSON parse | PASS |
| Public top-level keys match M-896 and M-510 | PASS |
| Identity/release/module-status key sets match | PASS |
| `recordState` | `approved_for_preview` target state |
| Release controls | Exactly `indexingAuthorized=false`, `sitemapAuthorized=false` |
| Hero visual | 4 keys: `label,technicalFile,currentData,note` |
| Hero actions | 2 |
| Hero Documents/TDS actions | 0 |
| Applications | 3 |
| Applications with `category=Coatings` | 3/3 |
| Evaluation | 2 groups / 8 items |
| Technical | 3 columns / 11 rows |
| Technical non-empty `value` | 11/11 |
| Technical non-empty `testMethod` | 11/11 |
| Markets | 4 |
| Other Grade facts in JSON | 0 |

`approved_for_preview` describes the target record after approval; this candidate does not assert project-control approval.

## 4. Technical and Schema parity

The eleven ordered contract values were checked against the current TDS extraction:

`94%; Alumina, zirconia; Present; 0.5% max; 1.3 g/cm³; 16 g/100 g; 7.4; 4.1 g/cm³; ISO 591-1: R2; 13463-67-7; Pigment White 6`

| Check | Result |
|---|---|
| Eleven current-TDS values match | PASS |
| Explicit maximum preserved | PASS — `0.5% max` |
| Moisture 48-hour footnote retained | PASS |
| Methods present or `Not stated` | PASS |
| SEO Product parity table values | 11 |
| Ordered Schema values equal `row.value` | PASS |
| Method used as property value | 0 |

## 5. Buyer Clean and evidence boundaries

The buyer-visible section of the full-copy file contains no internal review status, legacy TITAN/mytio2 destination, product-origin claim, packaging/loading/storage claim, price/stock/MOQ/lead-time promise, or Related Grade/Not Recommended content.

Source feature language is rewritten as evaluation criteria and does not guarantee outcomes.

## 6. Serial and scope

| Check | Result |
|---|---|
| Active Grade | M-895 only |
| M-340 candidate artifacts | 0 |
| Later Grade started | No |
| D16 read/write/contact/handoff | None |
| Gate 8/development/deployment/publication/indexing | None |
| Candidate self-labelled project-control PASS | No |

## 7. Open freezes

Origin/manufacturing/COO/traceability, Related Grades, Not Recommended, packaging/loading/storage, Food Contact/regulatory, other-document availability, price/stock/MOQ/lead time and receiver/route readiness remain outside public release. Gate 10 remains closed.

## 8. Conclusion

`GRADE-M895 Gate 0–7 candidate = MECHANICALLY_CONSISTENT / READY_FOR_CONTROLLER_02_REVIEW`

This is a validation conclusion, not Controller 02 approval or Gate 8 authority.


