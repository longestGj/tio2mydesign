# CONV-DOC Gate 9 Targeted Finding Closure V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Finding | `DOC-G9-P1-01` |
| Target commit | `bc695d291109a685ab85950d3b42d85d6e8ebcfa` |
| Date | 2026-09-04 |
| Record status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Finding recommendation | `VERIFIED_FIXED_PENDING_PROJECT_CONTROL_REVIEW` |
| Gate 9 | `READ_ONLY_QA_IN_REVIEW / NOT_APPROVED` |
| Gate 10 | `NOT_AUTHORIZED` |

## 1. Closure criteria

| Required correction | Fresh evidence | Page-task result |
|---|---|---|
| Preserve manual buyer free text | Optimized-build browser submission retained exact arbitrary text through same-origin API and receiver | PASS |
| Allow only PRODUCT V0.3 trusted URL relations | Code-to-CSV comparison: 30/54 Application matrix and 8/5/1 Process distribution match | PASS |
| M-2377 six positive contexts | Six named unit cases plus production-browser loop | PASS |
| Reject Specialty Materials | Named unit and production-browser negative cases | PASS |
| Reject Rubber | Named unit and production-browser negative cases | PASS |
| Reject arbitrary URL value | Named unit and production-browser negative cases | PASS |
| Reject mismatched source attribution | Grade, five APP sources and two Process sources tested; receiver revalidation tested | PASS |
| Keep source/Grade/Application/Process coherent | 61 focused tests and direct code inspection | PASS |
| No page/shared/site-scope regression | Six-file commit scope; 97-test suite; 15-browser suite; 35/35 build; real `tio2-my` receiver payload | PASS |

## 2. Finding disposition recommendation

The original defect was that URL parameters were accepted independently and could make an unsupported relationship appear to come from a trusted upstream selection. The new resolver validates the relationship as a unit, and the receiver repeats attribution validation after buyer edits.

Manual text remains buyer-controlled. It is submitted as text, but it does not preserve a source attribution that no longer matches the visible relationship.

Page-task recommendation:

`DOC-G9-P1-01 = VERIFIED_FIXED_PENDING_PROJECT_CONTROL_REVIEW`.

This file does not mark the finding `CLOSED`. Only project control may accept the evidence and close the finding.

## 3. Preserved blockers and stop

The correction does not resolve or weaken the existing release blockers:

- production receiver ownership/configuration and positive acknowledgement;
- Privacy/data-flow parity with the actual receiver;
- authorized WordPress singleton migration;
- separate Gate 10 release, robots, sitemap and indexing authorization.

Stop: `CONV-DOC Gate 9 = NOT_APPROVED / PROJECT_CONTROL_REVIEW_REQUIRED`.

