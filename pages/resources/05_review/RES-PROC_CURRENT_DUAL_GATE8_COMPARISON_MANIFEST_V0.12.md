# RES-PROC Current Dual Gate 8 Comparison Manifest V0.12

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-PROC` / Chloride vs Sulfate Titanium Dioxide |
| URL | `/resources/chloride-vs-sulfate-titanium-dioxide/` |
| Date | 2026-09-06 |
| Manifest status | `HISTORICAL / SUPERSEDED` |
| Lifecycle | `DUAL_GATE8_IMPLEMENTATIONS / SECOND_TASK_IN_PROGRESS / COMPARISON_PENDING` |
| Gate 0/1–7 | `CLOSED` under existing approved authority |
| Gate 8 | First implementation submitted; second implementation still running |
| Gate 9 | `USER_AUTHORIZED / COMPARATIVE_READ_ONLY_QA_PENDING_SECOND_TASK` |
| Final implementation authority | Not selected; later user decision required |
| Gate 10 | Not authorized |
| Public state | Not live, not indexed, not in RES-000 inventory or sitemap |
| Supersedes | `RES-PROC_CURRENT_GATE8_REVIEW_MANIFEST_V0.11.md` |
| Superseded by | `RES-PROC_CURRENT_GATE9_COMPARATIVE_REVIEW_MANIFEST_V0.13.md` |

## 1. Current User Decision

User decision on 2026-09-06: `等第二次任务完成以后，进行检查，然后再做决定。`

The second task remains active. Project control must wait for its completion, review both implementations against the same sealed authority and submit the comparison to the user. No implementation becomes final solely because it completed first.

## 2. Decision Authority

| Role | File | Bytes | SHA-256 | State |
|---|---|---:|---|---|
| Dual-task comparison decision | `pages/resources/05_review/RES-PROC_DUAL_D16_TASK_COMPARATIVE_REVIEW_DECISION_V0.1.md` | 2568 | `6BFECB793EF2C82EC869378E32BB1A3D7D4099350276E884F5085EC4B9220BCC` | `USER_DECIDED / WAIT_AND_COMPARE` |
| Historical review Manifest | `pages/resources/05_review/RES-PROC_CURRENT_GATE8_REVIEW_MANIFEST_V0.11.md` | 6088 | `090F501B6F519216F7ECB608485C01FADAA2C031B571AE6F3C9A61CB3F524FAC` | `HISTORICAL / SUPERSEDED` |

All Gate 7 package hashes and Gate 0/1–6 authorities remain those sealed by V0.11 and its predecessors; this version changes coordination and decision timing only.

## 3. First D16 Implementation

| Field | Value |
|---|---|
| Formal task ID | `01a07406-9447-77b2-b44e-e32e1cfee617` |
| Status | `COMPLETED` |
| Worktree | `C:\Users\longe\.codex\worktrees\5a34\16Wordpress_nextjs` |
| Branch | `codex/res-proc-gate8` |
| Implementation commit | `a0a1253a25959fa704e9b2a23ffa69287c61f2c7` |
| Receipt commit / HEAD | `d43b8b4d04da5ce918b9c85409de9adff65ac7ee` |
| Receipt | `docs/verification/res-proc/GATE8_RECEIPT_2026-09-06.md` |
| Receipt SHA-256 | `FEF35F5C5EC956BB67E91106453592BB0C6C6E656AA3F80A14376ECEB8A3107D` |
| Worktree state at intake | Clean |

The first result is a comparison candidate, not the selected final authority.

## 4. Second D16 Implementation

| Field | Value |
|---|---|
| Formal task ID | `01a07432-d148-7013-a516-0af87f4fe233` |
| Status | `IN_PROGRESS` |
| Worktree | `C:\Users\longe\.codex\worktrees\e49b\16Wordpress_nextjs` |
| Git state | Detached HEAD, clean at latest check |
| Latest observed commit | `d2da379787d2220e3e6273260dc438df1b3a5f84` |
| Latest observed work | Source revocation fix after review identified combined-JRC-role leakage |

The latest commit is an observation only and is not a sealed completion ref. The final task response and receipt must define the second candidate's immutable comparison boundary.

## 5. Comparative Review Control

The review heartbeat `res-proc-gate-8-9-review-loop` is active every 15 minutes and now targets the second formal task. It remains quiet while state is unchanged. When the second task completes, it triggers an independent comparison covering the sealed 28 criteria, test and runtime evidence, responsive/visual/accessibility evidence, branch integration risk, rollback and maintainability.

Project control will submit one comparison report with findings and a recommendation. The user will then decide whether to select candidate one, candidate two, combine explicitly identified corrections or return both.

## 6. Boundary

No branch/worktree is stopped, modified, merged, deleted or cleaned by this decision. Gate 9 cannot close before the comparison and later user selection. Gate 10, deployment, production writes, publication, DNS, RES-000 inventory/sitemap changes and indexing remain unauthorized.
