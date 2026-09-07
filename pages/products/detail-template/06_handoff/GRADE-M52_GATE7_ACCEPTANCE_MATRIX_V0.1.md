# GRADE-M52 Gate 7 Acceptance Matrix V0.1

## 1. Control

| Field | Value |
|---|---|
| Matrix ID | `GRADE-M52-G7-ACCEPTANCE-01` |
| Date / status | 2026-09-02 / `CANDIDATE_VALIDATED_PENDING_CONTROLLER_02_REVIEW` |
| Gate 8 | `NOT_STARTED` |

## 2. Candidate acceptance

| Area | Requirement | Result |
|---|---|---|
| Identity | Registry/CSV/PRD/Brief match | PASS |
| Serial | M-52 only; M-108+ locked | PASS |
| Evidence | One readable Grade-matched V3 2023 TDS | PASS |
| Relationships | Printing Inks/Coatings/Sulfate approved | PASS |
| Unsupported applications | Zero public JSON categories/routes | PASS |
| Technical | 11 exact Typical/Test Method rows | PASS |
| Buyer Clean | No internal/frozen/legacy text in public JSON | PASS |
| Template | Existing shell/row shapes, no new component | PASS candidate |
| JSON | Parses and matches shared public shape | PASS |
| Release | Index/sitemap false | PASS |
| Handoff | Not handed off | PASS |

## 3. Exact counts

| Item | Expected |
|---|---:|
| Breadcrumb | 3 |
| Hero visual / facts / actions | 4 / 5 / 2 |
| Hero Documents | 0 |
| Applications | 3 |
| Categories | Printing Inks 1 / Coatings 2 |
| Evaluation | 2 groups / 8 items |
| Technical | 3 columns / 11 rows |
| Product properties | 11 meaningful |
| Documents / Markets | 2 options / 4 destinations |
| Origin / Related / Not Recommended | absent |

## 4. Schema and source acceptance

- Product Schema reads visible `row.value` from all 11 rows.
- `testMethod` never replaces a value.
- The current `V3 2023` label is visible.
- The moisture value remains `0.3% max`, with the within-48-hours note.
- Unit/integration/E2E and fail-closed tests are mandatory after separate Gate 8 authority.
- Completed Grade visuals, HTML, JSON-LD and screenshots must remain unchanged.

## 5. Freezes

Plastics, Masterbatch, Paper, Specialty, origin/manufacturing/COO/traceability, Related Grades, Not Recommended, logistics/storage/packaging/loading, safety, compliance, other-document availability and commerce claims remain non-public. Gate 10 remains closed.

