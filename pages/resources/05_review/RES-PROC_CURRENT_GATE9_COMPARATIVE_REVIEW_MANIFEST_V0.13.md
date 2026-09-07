# RES-PROC Current Gate 9 Comparative Review Manifest V0.13

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-PROC` / Chloride vs Sulfate Titanium Dioxide |
| URL | `/resources/chloride-vs-sulfate-titanium-dioxide/` |
| Date | 2026-09-06 |
| Manifest status | `CURRENT` |
| Lifecycle | `GATE9_COMPARATIVE_READ_ONLY_QA_IN_PROGRESS` |
| Gate 0/1–7 | `CLOSED` under existing approved authority |
| Gate 8 | Two completed candidate implementations; neither selected as final |
| Gate 9 | `USER_AUTHORIZED / PRELIMINARY_FINDINGS_OPEN` |
| Gate 10 | Not authorized |
| Public state | Not live, not indexed, not in RES-000 inventory or sitemap |
| Supersedes | `RES-PROC_CURRENT_DUAL_GATE8_COMPARISON_MANIFEST_V0.12.md` |

## 1. Current Review Interpretation

Project control is the Gate 9 reviewer. Gate 8 developer self-checks, previews and receipts are inputs only and cannot close Gate 9.

The user's report that the second Gate 8 task had departed from the target has been verified at the architecture and delivery-contract level. The second task is complete/idle, so the review has moved from waiting to comparative assessment.

## 2. Current Authority

| Role | File | Bytes | SHA-256 | State |
|---|---|---:|---|---|
| Dual-candidate wait/compare decision | `pages/resources/05_review/RES-PROC_DUAL_D16_TASK_COMPARATIVE_REVIEW_DECISION_V0.1.md` | 2568 | `6BFECB793EF2C82EC869378E32BB1A3D7D4099350276E884F5085EC4B9220BCC` | User decision remains applicable to comparison and later selection |
| Preliminary scope-divergence finding | `pages/resources/07_qa/RES-PROC_GATE9_PRELIMINARY_SCOPE_DIVERGENCE_FINDING_V0.1.md` | 4213 | `3DCDB8A1B865E44B6AAD6EBA2CC83FE9073E50CD8E1C37A53305959654825BEF` | `PRELIMINARY_BLOCKING_DIVERGENCE / OPEN` |
| Historical comparison-wait Manifest | `pages/resources/05_review/RES-PROC_CURRENT_DUAL_GATE8_COMPARISON_MANIFEST_V0.12.md` | 4267 | `DD4A4758AF3EA48A4BE8BD1070400FC55685126AEDADB23979846983FD151853` | `HISTORICAL / SUPERSEDED` |

The sealed Gate 7 package and all approved Gate 0/1–6 authorities remain unchanged.

## 3. Candidate States

| Candidate | Formal task | State | Code boundary | Current Gate 9 interpretation |
|---|---|---|---|---|
| First | `01a07406-9447-77b2-b44e-e32e1cfee617` | Completed; branch/worktree clean | implementation `a0a1253…`; receipt HEAD `d43b8b4…` | Built on the existing RES-ORIGIN/Malaysia buying-guide base; full independent verification pending |
| Second | `01a07432-d148-7013-a516-0af87f4fe233` | Completed/idle; detached worktree clean | latest reported code ref `818a3ef3587fbf5ea755150bafa804a92bb0454e` | Preliminary P0/P1 divergence findings open; no complete Gate 9 receipt |

## 4. Open Preliminary Findings on Candidate Two

| ID | Severity | Finding |
|---|---|---|
| `G9-P0-01` | P0 | Started from stale D16 `c811622…` baseline and re-created parallel Malaysia shell/chrome/routing/data layers instead of reusing the current architecture. |
| `G9-P0-02` | P0 | No WordPress implementation/config/seed/resolver/GraphQL change exists in the observed candidate diff; required CMS/runtime contract is absent. |
| `G9-P1-01` | P1 | Generic shared route/layout/SEO/query surfaces were changed without the current integrated Malaysia baseline, creating cross-page regression and merge risk. |
| `G9-P1-02` | P1 | Task stopped at page preview and focused tests; the complete contracted Gate 9 evidence receipt was not delivered. |

These findings block selection of candidate two as-is. They do not yet select candidate one or authorize copying code between candidates.

## 5. Next Review Work

Project control will now independently verify candidate one against all 28 Gate 8/Gate 9 criteria and compare any useful isolated behaviors from candidate two as requirements rather than code. The final comparison will identify:

- criteria passed/failed by each candidate;
- P0/P1/P2 findings and reproducible evidence;
- integration and rollback risk;
- whether candidate one should be corrected, candidate two rejected, or another user decision is required.

The user retains the implementation-selection decision. Gate 9 cannot close until the selected candidate is corrected and freshly reverified.

## 6. Boundary

D23 performs read-only review only. No D16 code, branch or worktree is modified, merged, deleted or cleaned here. Gate 10, deployment, publication, production writes, DNS, RES-000 inventory/sitemap changes and indexing remain unauthorized.

