# GRADE-M340 Gate 7 Acceptance Matrix V0.1

## 1. Control

| Field | Value |
|---|---|
| Matrix ID | `GRADE-M340-G7-ACCEPTANCE-01` |
| Date / status | 2026-09-02 / `CANDIDATE_VALIDATED_PENDING_CONTROLLER_02_REVIEW` |
| Gate 8 | `NOT_STARTED` |

## 2. Candidate acceptance

| Area | Requirement | Result |
|---|---|---|
| Identity | Registry/CSV/PRD/Brief match | PASS |
| Serial | M-340 only; M-886+ locked | PASS |
| Evidence | One readable Grade-matched current TDS | PASS |
| Relationships | Plastics/Masterbatch/Chloride approved | PASS |
| Rubber | Evidence-only/not_public; zero public contract references | PASS |
| Technical | 14 exact Standard/Typical rows | PASS |
| Schema rule | Typical-first, meaningful Standard fallback, placeholder omission | PASS candidate |
| Buyer Clean | No internal/frozen/legacy text in public section | PASS |
| Template | Existing shell/row shapes, no new component | PASS candidate |
| JSON | Parses and matches shared public shape | PASS |
| Release | Index/sitemap only, both false | PASS |
| Handoff | Not handed off | PASS |

## 3. Exact counts

| Item | Expected |
|---|---:|
| Breadcrumb | 3 |
| Hero visual / facts / actions | 4 / 5 / 2 |
| Hero Documents | 0 |
| Applications | 5 |
| Categories | Plastics 4 / Masterbatch 1 / Rubber 0 |
| Evaluation | 2 groups / 8 items |
| Technical | 3 columns / 14 rows |
| Standard / Typical fields | 14 / 14 |
| Product properties | 14 meaningful / 0 placeholder |
| Documents / Markets | 2 options / 4 destinations |
| Origin / Related / Not Recommended | absent |

## 4. Schema acceptance

- Visible table remains source-faithful.
- Schema value selection is grade-generic: non-placeholder `value`; otherwise non-placeholder `typical`; otherwise non-placeholder `standard`; otherwise omit.
- For M-340, 12 values come from Typical and 2 treatment values from Standard.
- `--` must never be a Product property value.
- Unit/integration/E2E and fail-closed tests are mandatory.
- M-350/M-510/M-896/M-895 visual, HTML, JSON-LD and screenshots must remain unchanged.

## 5. Later Gate 8/9

Independent WP record/hash, registry/404/no-fallback, exact copy/metadata/Schema, receiver states, responsive widths, accessibility, test/typecheck/lint, clean worktree and release controls.

## 6. Freezes

Rubber, origin/manufacturing/COO/traceability, Related Grades, Not Recommended, logistics/storage/packaging/loading, compliance, other-document availability and commerce claims remain non-public. Gate 10 closed.


