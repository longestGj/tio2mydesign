# PRODUCT RELATION V0.2 CHANGELOG

## 0. Document Control

| Field | Value |
|---|---|
| Date | 2026-08-30 |
| Status | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
| Change scope | Grade–Application–Process evidence and data governance only |
| Historical baseline | All V0.1 files remain unchanged |
| Excluded scope | Visual, child pages, Gate 6/7, code, CMS, testing, deployment and publishing |
| Approval source | User's 2026-08-30 V0.2 command and explicit clarification `刚才是我给你的命令，做V0.2` |
| Project-control review | 2026-08-30 PASS; `18 PASS / 0 FAIL` |
| Matrix status | `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.csv` = `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |

## 1. V0.1 → V0.2 Summary

- The user approved current `www.mytio2.com` first-party product content as the governing baseline for neutral Grade–Application and Grade–Process relationships.
- The V0.1 `candidate source → TDS/application test/technical owner approval → verified` rule is superseded for these base relationships.
- V0.2 uses separate `application_status` and `process_status` fields; the ambiguous `current_status` field is removed.
- The 23 former pending Application relations are now `VERIFIED_FOR_PUBLIC_MAPPING`.
- Public wording remains neutral: `Grade to Review`; no best, recommended, equivalent, ranking or performance claim is created.
- V0.1 is retained as the historical audit record and is not overwritten.

## 2. Current Counts

| Item | V0.1 | V0.2 |
|---|---:|---:|
| Application verified | 2 | 25 |
| Application pending | 23 | 0 |
| Application conflict | 4 | 4 |
| Application no public mapping | 55 | 55 |
| Process verified grades | 1 | 13 |
| Process conflict grades | 1 | 1 |

Process verified breakdown: Chloride 8, Sulfate 4, Vapor-phase oxidation 1.

## 3. Rules Superseded

Superseded for base Application / Process mapping:

- `mytio2.com` as legacy candidate-only evidence.
- mandatory current TDS, application test or separate technical-owner approval before neutral mapping.
- `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` as a normal V0.2 relationship state.

Not superseded:

- evidence requirements for performance, ranking, comparison, equivalence, formulation compatibility, regulatory, supply, origin or manufacturing claims;
- route/live gating;
- M-2377 and M-996/M-2196 frozen-claim controls;
- page registry, URL and development authorization boundaries.

## 4. Special Cases

### M-2377

- Coatings, Plastics, Printing Inks and Paper remain `CONFLICT_HOLD`.
- Masterbatch and Specialty Materials remain `NO_PUBLIC_MAPPING`.
- Process remains `CONFLICT_HOLD`.
- Public behavior remains name plus approved URL only.
- Conflict reason is `mytio2.com internal source conflict`.

### M-996 / M-2196

- Both grades may publicly map to Coatings and Sulfate.
- Difference, ranking, selection reason and performance comparison remain frozen.

## 5. Relation Crosswalk

- 2 relations: `V01_VERIFIED_RETAINED`.
- 17 relations: `V01_PENDING_TO_VERIFIED`.
- 6 relations: `NEW_RELATION_FROM_MYTIO2_BASELINE`.
- 4 M-2377 relations: aggregate hold split and retained.
- 2 M-2377 relations: aggregate hold split to no public mapping.
- 53 relations: no public mapping retained.

M-350 → Paper is explicitly `NEW_RELATION_FROM_MYTIO2_BASELINE`; V0.1 `SEL-PAPER-ANY` was generic and not an independent direct relation.

## 6. Remaining Conflict / Blocker

| Item | Status | Impact |
|---|---|---|
| M-2377 Application / Process | `CONFLICT_HOLD` | Blocks only M-2377 application and process exposure |
| M-996 / M-2196 difference | `OPEN_FREEZE` | Blocks comparison and selection-reason copy, not base mapping |
| Normal 25 Application mappings | No technical blocker | May serve as neutral shared relation baseline after project-control review |
| 13 verified Process mappings | No technical blocker | May serve as neutral shared relation baseline after project-control review |
| Route, visual, development and publication | Separate gates | Not authorized by V0.2 |
