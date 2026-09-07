# DOC-REACH Gate 8/Gate 9 Controller Monitoring Mandate V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-REACH` / `/documents/reach/` |
| Decision ID | `DOC-REACH-G8-G9-CONTROLLER-MANDATE-01` |
| Date | 2026-09-05 |
| Decision source | User in current Controller task |
| Exact decision | `你负责跟踪开发的进度，并且审查Gate8 ，直到Gate9完成为止。` |
| State | `USER_AUTHORIZED / ACTIVE` |
| Gate 10 | `NOT_AUTHORIZED` |

## 1. Authorized continuing responsibility

Project control is authorized and required to continue until Gate 9 is genuinely completed by:

1. tracking external Gate 8 development and worktree/task readiness;
2. checking returned Gate 8 evidence against `REACH-G8-WP01` through `REACH-G8-WP11`;
3. performing D23 Gate 9 read-only QA after a reviewable implementation is returned;
4. issuing evidence-backed P0/P1/P2 findings to the D16 development task;
5. tracking corrections and repeating read-only review until all blocking findings are closed;
6. updating the D23 closure, current Manifest, status and index only after evidence supports the result.

## 2. Monitoring mechanism

| Field | Value |
|---|---|
| Automation ID | `doc-reach-gate-8-9` |
| Name | `继续 DOC-REACH Gate 8/9` |
| Status | `ACTIVE` |
| Frequency | Hourly |
| Quiet condition | No meaningful state change or no actionable evidence |
| Notify condition | Gate 8 completion, real blocker, user decision required, correction completion or Gate 9 approval |

Tracked execution surfaces:

- original development task `01a05595-2a2c-7ef0-9be4-f55a42043bb6`;
- same-directory recovery fork `01a0704f-d570-7a81-8d61-93eb0f0b5714`;
- newly authorized worktree task pending client ID `client-new-thread:5b6d8314-5831-41d7-8780-007e7642877b`, to be replaced by its formal task ID when setup completes.

## 3. Review boundary

- Gate 8 implementation remains owned by the D16 development project.
- D23 may inspect the returned implementation and evidence read-only but may not implement fixes.
- Gate 9 authorization does not pre-approve the outcome.
- Gate 9 closes only after all blocking findings are verified closed.
- Gate 10, deployment, production CMS writes, DNS, public release, production Canonical/robots activation and indexing remain unauthorized.

`DOC-REACH-G8-G9-CONTROLLER-MANDATE-01 = USER_AUTHORIZED / ACTIVE_UNTIL_GATE9_COMPLETION`.
