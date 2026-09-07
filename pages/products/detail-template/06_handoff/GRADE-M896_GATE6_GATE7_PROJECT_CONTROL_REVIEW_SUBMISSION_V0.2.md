# GRADE-M896 Gate 6–7 Project-Control Re-review Submission V0.2

## 1. Submission control

| Field | Value |
|---|---|
| Submission ID | `GRADE-M896-G7-PCR-SUBMISSION-02` |
| Requested Review ID | `GRADE-M896-G7-PCR-01` targeted re-review |
| Date | `2026-09-02` |
| Submitted by | `03产品页统一模板` |
| Reviewer | Controller 02 / `00Con-02-产品` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Handoff | `NO` |
| Next Grade | M-895 remains locked |

## 2. Targeted-return response

| Controller item | V0.2 response |
|---|---|
| P1-01 | Added evidence-safe four-key Hero visual. No filename-only version/date or origin/factory/packaging implication. |
| P1-02 | Added exact `category: "Coatings"` to all six application items. |
| P1-03 | Kept M-896 `value/testMethod` semantics and made shared technical-row generalization an explicit Gate 8 unit/integration/E2E and regression requirement. |
| Public shape | Removed governance-only top-level fields and matched M-510 top-level, identity, release and module-status property sets. |

## 3. Revised candidate summary

| Area | Candidate conclusion |
|---|---|
| Hero | Four-key neutral visual; Quote + Sample only |
| Applications | Six items; 6/6 `category=Coatings` |
| Technical | 11 rows; 11 values; 11 methods including `Not stated` |
| Schema | All 11 Product property values map from `row.value`; method never substitutes |
| Compatibility | M-350/M-510 legacy `typical` mapping must remain visually and semantically unchanged |
| Machine shape | Same public key sets as the verified M-510 contract |
| Release | Content contract exposes only index/sitemap false; lifecycle authority stays outside public payload |
| Serial scope | M-896 only; M-895 artifact count 0 |

## 4. Required Controller 02 re-review

- Verify the V0.2 machine contract against M-510 public property sets.
- Verify all four Hero visual strings are Buyer Clean and evidence safe.
- Verify six application categories and exact application content.
- Verify all 11 M-896 values and methods and the Product Schema value-source rule.
- Verify the Gate 8 one-time backward-compatible DTO/renderer/JSON-LD requirement and its unit/integration/E2E acceptance.
- Verify M-350/M-510 visual, HTML, JSON-LD and screenshot regression protection.
- Verify omitted modules are `not_public` or absent exactly as contracted.
- Verify no other Grade facts, M-895 artifact or D16 activity exists.

## 5. Requested disposition

Controller 02 is requested to independently decide whether the targeted return is closed and whether Gate 0–7 may pass under `PRODUCT-DETAIL-12-GRADE-AUTO-SERIAL-01`.

This submission does not pre-write `PROJECT_CONTROL_REVIEW_PASS`, does not authorize Gate 8, does not contact D16 and does not start M-895.
