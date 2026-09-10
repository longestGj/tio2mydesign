# RES-PROC Gate 9 Return Notice V1.0

## Control

| Field | Value |
|---|---|
| Notice ID | `RES-PROC-G9-RETURN-20260908-01` |
| Date | 2026-09-08 |
| Returned candidate | Gate 8 task `01a07406-9447-77b2-b44e-e32e1cfee617` |
| Reviewed implementation | `a0a1253a25959fa704e9b2a23ffa69287c61f2c7` |
| Reviewed evidence HEAD | `1928a2a9276cec8a07901b5d2802fa106178b931` |
| Result | `GATE8_RETURN_NOTICE / REPAIR_REQUIRED` |
| Gate 9 | Open |
| Gate 10 | Not authorized |

Candidate one is the recommended repair base, but it does not pass Gate 9. Repair only the following bounded findings and return fresh exact-candidate evidence:

1. `RES-PROC-G9-C1-F01` (`PROC-A08`, `PROC-A19`): remove the unapproved buyer-visible evidence-gap sentence from revoked-source states; preserve approved atomic claim/citation/action removal, module order and compact layout; add a server-HTML regression assertion for every revoked-source combination.
2. `RES-PROC-G9-C1-F02` (`PROC-A21`, `PROC-A28`): resolve the shared `malaysia-global-chrome.tsx` change through the Global Chrome owner with an approved shared baseline and complete registered-consumer regression evidence, or remove the shared change from the page candidate and use the approved shared implementation. Do not create a page-specific chrome fork.
3. `RES-PROC-G9-C1-F03` (`PROC-A23`): replace the CDP page-scale claim with auditable actual browser UI zoom at 200%, recording zoom state, viewport/DPR and usability/overflow results.

The repair receipt must include a new implementation commit, evidence HEAD, Build ID, clean-state disclosure, machine-readable evidence manifest, accessible local-production runtime, affected-condition tests and regression confirmation for the remaining 23 conditions. The evidence package must remain bound to `site_scope=tio2-my` and the existing approved route.

Do not merge, copy from candidate two, deploy, publish, write production WordPress data, change RES-000 inventory/sitemap or enable indexing. Return the new handoff to D23 Gate 9 for independent recheck.

The full comparative basis is `pages/resources/07_qa/RES-PROC_GATE9_COMPARATIVE_REVIEW_REPORT_V1.0.md`.
