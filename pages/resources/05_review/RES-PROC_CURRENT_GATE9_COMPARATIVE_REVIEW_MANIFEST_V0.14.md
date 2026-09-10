# RES-PROC Current Gate 9 Comparative Review Manifest V0.14

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-PROC` / Chloride vs Sulfate Titanium Dioxide |
| URL | `/resources/chloride-vs-sulfate-titanium-dioxide/` |
| Date | 2026-09-08 |
| Manifest status | `CURRENT` |
| Lifecycle | `GATE9_COMPARISON_COMPLETE / CANDIDATE_ONE_RETURNED_TO_GATE8` |
| Gate 0/1–7 | `CLOSED` under existing approved authority |
| Gate 8 | Candidate one returned for bounded repair; candidate two not selectable as-is |
| Gate 9 | `OPEN / NOT_PASS` |
| Gate 10 | Not authorized |
| Public state | Not live, not indexed, not in RES-000 inventory or sitemap |
| Supersedes | `RES-PROC_CURRENT_GATE9_COMPARATIVE_REVIEW_MANIFEST_V0.13.md` |

## 1. Current Authority and Evidence

| Role | File | Bytes | SHA-256 | State |
|---|---|---:|---|---|
| Final comparative Gate 9 report | `pages/resources/07_qa/RES-PROC_GATE9_COMPARATIVE_REVIEW_REPORT_V1.0.md` | 13844 | `5A812EF55D5370A5290560B153C92DF8C18C3B7A17D9251243608CB917ECB331` | `CURRENT / COMPARISON_COMPLETE / NO_CANDIDATE_PASSES_GATE9` |
| Candidate-one return notice | `pages/resources/06_handoff/RES-PROC_GATE9_RETURN_NOTICE_V1.0.md` | 2159 | `E6825953C48DD545E5522220DAA366A7BEC5D6CA736B33D32F51E0483281268D` | `ISSUED / REPAIR_REQUIRED` |
| Candidate-two preliminary finding | `pages/resources/07_qa/RES-PROC_GATE9_PRELIMINARY_SCOPE_DIVERGENCE_FINDING_V0.1.md` | 4213 | `3DCDB8A1B865E44B6AAD6EBA2CC83FE9073E50CD8E1C37A53305959654825BEF` | `INCORPORATED_IN_FINAL_COMPARISON` |
| Prior current Manifest | `pages/resources/05_review/RES-PROC_CURRENT_GATE9_COMPARATIVE_REVIEW_MANIFEST_V0.13.md` | 4458 | `40B1A005551EAF86B9AD2B6DD3A367D49816BDB825BD0925FD567C631DF2FCE3` | `HISTORICAL / SUPERSEDED` |

The sealed Gate 7 package and all approved Gate 0/1–6 authorities remain unchanged.

## 2. Candidate Conclusions

| Candidate | Exact identity | Gate 9 result | Condition tally | Disposition |
|---|---|---|---|---|
| One | task `01a07406-9447-77b2-b44e-e32e1cfee617`; implementation `a0a1253a25959fa704e9b2a23ffa69287c61f2c7`; evidence HEAD `1928a2a9276cec8a07901b5d2802fa106178b931`; Build ID `YdJaIk7sxHg5-cqRGbdWK` | `RETURN_FOR_REPAIR` | 23 PASS / 4 FAIL / 1 NOT_VERIFIED | Recommended repair base; three P1 findings must close before fresh Gate 9 recheck |
| Two | task `01a07432-d148-7013-a516-0af87f4fe233`; last observed ref `818a3ef3587fbf5ea755150bafa804a92bb0454e` | `NOT_PASS / NOT_SELECTABLE_AS_IS` | 8 FAIL / 20 NOT_VERIFIED | Preserve as isolated historical candidate; no merge/copy/integration authorization |

Candidate two's former preview currently returns HTTP 502, its detached worktree is absent, and its commit is not available from the current D16 object database. Candidate one's exact runtime remains available for the issued return notice.

## 3. Open Findings

| ID | Severity | Owner | Conditions | Closure |
|---|---|---|---|---|
| `RES-PROC-G9-C1-F01` | P1 | Candidate-one Gate 8 developer | `PROC-A08`, `PROC-A19` | Remove the unapproved evidence-gap sentence and prove clean atomic source withdrawal without orphan layout. |
| `RES-PROC-G9-C1-F02` | P1 | Global Chrome owner + Candidate-one Gate 8 developer | `PROC-A21`, `PROC-A28` | Supply owner-approved shared baseline and all-consumer regression evidence, or remove the shared-component change and use the approved shared implementation. |
| `RES-PROC-G9-C1-F03` | P1 evidence blocker | Candidate-one Gate 8 developer | `PROC-A23` | Prove actual browser UI zoom at 200% with zoom/viewport/DPR and usability measurements. |
| `G9-P0-01` | P0 | Candidate-two implementation owner | `PROC-A01`, `PROC-A21`, `PROC-A27`, `PROC-A28` | Existing candidate is not repair-ready; any future attempt must start from the current D16 architecture. |
| `G9-P0-02` | P0 | Candidate-two implementation owner | `PROC-A03`, `PROC-A13`, `PROC-A19`, `PROC-A25` | Implement the current WordPress/CMS contract on a current approved baseline before it could be re-admitted. |
| `G9-P1-01` | P1 | Candidate-two implementation owner | shared regression boundary | Remove the parallel shared architecture and prove current-baseline regression safety. |
| `G9-P1-02` | P1 | Candidate-two implementation owner | Gate 9 receipt | Supply a complete exact-candidate Gate 8→Gate 9 handoff if the user ever reauthorizes this path. |
| `RES-PROC-G9-RF-01` | P1 shared root | Shared owner and selected candidate | `PROC-A21`, `PROC-A28` | Close current Malaysia chrome/architecture ownership across all registered consumers. |

## 4. Four-Layer Status

| Layer | Status | Meaning |
|---|---|---|
| `RECHECK_SCOPE` | Candidate one `PASS`; candidate two `FAIL` | Only candidate one has a fresh exact-candidate evidence package and accessible runtime. |
| `PAGE_GATE9` | `OPEN / RETURN_FOR_REPAIR` | No Gate 9 pass notice exists. Candidate one must close three P1 findings and return for independent recheck. |
| `INTEGRATION` | `NOT_SELECTED` | The user retains final selection; no merge or cross-candidate code transfer is authorized. |
| `RELEASE` | `NOT_AUTHORIZED` | Gate 10, deployment, publication, production WordPress writes, DNS and indexing remain prohibited. |

## 5. Next Admissible Event

The next admissible event is a fresh candidate-one Gate 8 handoff that includes a new implementation commit, evidence HEAD, Build ID, clean-state disclosure, manifest, accessible local-production runtime and closure evidence for `RES-PROC-G9-C1-F01` through `F03`. Gate 9 will then recheck the five directly affected conditions and confirm regression stability for the remaining 23 conditions.

Candidate two remains unselected and does not need further work unless the user explicitly reauthorizes a fresh current-baseline implementation.

## 6. Boundary

D23 performed read-only review only. No D16 code, branch, worktree or runtime data was modified, merged, deleted or cleaned. This Manifest does not authorize Gate 10, deployment, publication, production writes, DNS, inventory/sitemap change or indexing.
