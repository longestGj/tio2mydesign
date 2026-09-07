# RES-PROC Dual D16 Task Comparative Review Decision V0.1

## 0. Decision Record

| Field | Value |
|---|---|
| Page | `RES-PROC` / `/resources/chloride-vs-sulfate-titanium-dioxide/` |
| Decision date | 2026-09-06 |
| Decision source | Current user instruction: `等第二次任务完成以后，进行检查，然后再做决定。` |
| First D16 task | `01a07406-9447-77b2-b44e-e32e1cfee617` / completed |
| Second D16 task | `01a07432-d148-7013-a516-0af87f4fe233` / in progress |
| Current authority selection | Deferred pending comparative review |
| Gate 9 | Authorized but cannot close before comparison and later user decision |
| Gate 10 | Not authorized |

## 1. User Decision

The second D16 task must not be stopped merely because the first task completed. Project control must wait for the second task to finish, then review both implementations against the same sealed Gate 7 package and Gate 9 evidence contract.

Project control must present the comparison, risks and recommendation to the user. It must not designate either implementation as final authority, merge them, delete a branch/worktree or start a corrective implementation before the user makes the later selection decision.

## 2. Required Comparison

The comparison must cover at least:

- starting base, commit history, clean state and merge/integration risk;
- exact Buyer Clean copy, fourteen-module order and collection cardinalities;
- CMS/API/ViewModel/component contracts and `site_scope=tio2-my` isolation;
- source identity, source withdrawal and statement-family fail-closed behavior;
- Products independence and atomic chloride/sulfate Process-pair behavior;
- metadata, robots, canonical, JSON-LD and Article visibility parity;
- cache/revalidation and RES-000 inventory/sitemap release boundaries;
- focused and repository-wide test evidence, known failures and reproducibility;
- live preview, required viewport/state fixtures, visual comparison and accessibility;
- rollback, maintainability and compatibility with the current D16 integration baseline.

Developer self-checks are evidence inputs, not the comparative decision.

## 3. Monitoring

The existing heartbeat `res-proc-gate-8-9-review-loop` is updated to track formal task `01a07432-d148-7013-a516-0af87f4fe233`, remain quiet while unchanged and trigger the comparative review when the task completes.

## 4. Boundary

No D16 code, branch or worktree is modified by this decision. Deployment, publication, production writes, DNS, RES-000 public inventory/sitemap changes, indexing and Gate 10 remain unauthorized.

