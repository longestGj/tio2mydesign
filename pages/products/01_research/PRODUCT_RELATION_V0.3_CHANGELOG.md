# PRODUCT Relationship V0.3 Changelog

## Version record

| Field | Value |
|---|---|
| Date | 2026-08-30 |
| Status | `APPROVED_RELATION_BASELINE / USER_APPROVED` |
| Previous baseline | V0.2.1 |
| Current baseline | V0.3 |

## Changes from V0.2.1

1. M-2377 Process changed from `UNRESOLVED / CONFLICT_HOLD` to `Sulfate / VERIFIED_FOR_PUBLIC_MAPPING` on all six rows.
2. M-2377 Coatings, Plastics, Masterbatch, Printing Inks and Paper changed to `VERIFIED_FOR_PUBLIC_MAPPING / RENDER_NEUTRAL_MAPPING`.
3. M-2377 Specialty Materials remains `NO_PUBLIC_MAPPING / DO_NOT_RENDER` but its obsolete conflict language was removed.
4. M-2377 aggregate hard gate was split and resolved: Process, Application and document freshness.
5. M-996 and M-2196 Coatings/Process source fields now cite the current-valid user attachments.
6. The M-996/M-2196 comparison hold remains unchanged on all 12 rows.
7. Rubber was added only to the evidence registry; no taxonomy, page, URL, keyword or navigation change was made.

## Count change

| Metric | V0.2.1 | V0.3 |
|---|---:|---:|
| Verified Application | 25 | 30 |
| Conflict Application | 4 | 0 |
| No-public Application | 55 | 54 |
| Chloride grades | 8 | 8 |
| Sulfate grades | 4 | 5 |
| Vapor-phase oxidation grades | 1 | 1 |
| Unresolved Process grades | 1 | 0 |

V0.2.1 remains preserved and unchanged for audit traceability.

