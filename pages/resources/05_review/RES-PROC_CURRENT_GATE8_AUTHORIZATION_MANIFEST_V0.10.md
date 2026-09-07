# RES-PROC Current Gate 8 Authorization Manifest V0.10

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-PROC` / Chloride vs Sulfate Titanium Dioxide |
| URL | `/resources/chloride-vs-sulfate-titanium-dioxide/` |
| Page type / priority | Buying guide / P2 |
| Date | 2026-09-06 |
| Manifest status | `HISTORICAL / SUPERSEDED` |
| Lifecycle | `HANDOFF_DISPATCHED / DESTINATION_PROVISIONING` |
| Gate 0/1–6 | `USER_APPROVED / CLOSED` |
| Gate 7 | `USER_CONFIRMED / PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 8 | `USER_AUTHORIZED / EXTERNAL_TASK_CREATION_ACCEPTED` |
| `HANDED_OFF` | `DISPATCH_ACCEPTED`; real destination task ID pending worktree provisioning |
| Gate 9–10 | Not authorized |
| Public state | Not live, not indexed, not in RES-000 inventory or sitemap |
| Supersedes | `RES-PROC_CURRENT_GATE7_HANDOFF_MANIFEST_V0.9.md` |
| Superseded by | `RES-PROC_CURRENT_GATE8_REVIEW_MANIFEST_V0.11.md` |

## 1. Current User Decision

User decision on 2026-09-06: `确认移交，授权 RES-PROC Gate 8，并创建独立 D16 外部开发任务。`

This closes the Gate 7 handoff decision, authorizes Gate 8 implementation and authorizes creation of a separate D16 task. It does not approve any future implementation result or authorize Gate 9, Gate 10, deployment or publication.

## 2. Gate 7 and Gate 8 Authority

| Role | File | Bytes | SHA-256 | Current state |
|---|---|---:|---|---|
| Gate 7 corrected closure | `pages/resources/05_review/RES-PROC_GATE7_PROJECT_CONTROL_CLOSURE_V0.2.md` | 3522 | `00A03E3A301492302DB9C94DE0612DB7C395A01847DA3626644D0D64525B7FA1` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED`; current closure overlay |
| Gate 7 approval / Gate 8 authorization | `pages/resources/05_review/RES-PROC_GATE7_APPROVAL_GATE8_AUTHORIZATION_DECISION_V0.1.md` | 2434 | `6F6DD82E3B76961C78E11D5D7633954A82A9041EEE7DF9F63BBC522BCB8AEDEE` | `USER_CONFIRMED / USER_AUTHORIZED` |
| Gate 8 external dispatch | `pages/resources/05_review/RES-PROC_GATE8_EXTERNAL_TASK_DISPATCH_V0.1.md` | 2672 | `863DFB1499637C8D383FE47F8871E7F09163793801D7C5CE4AA1A1520858C696` | Task creation accepted; isolated worktree provisioning |
| Historical Gate 7 current Manifest | `pages/resources/05_review/RES-PROC_CURRENT_GATE7_HANDOFF_MANIFEST_V0.9.md` | 6884 | `50169914FF41E7A5FE3C705551A27F969F0F079983C4E1DCC8E02E370AA5391A` | `HISTORICAL / SUPERSEDED` |

## 3. Sealed Gate 7 Package Delivered

Package ID: `RES-PROC-G7-HANDOFF-01`. Manifest ID: `RES-PROC-G7-MANIFEST-01`.

| File | Bytes | SHA-256 | Governed role |
|---|---:|---|---|
| `RES-PROC_GATE7_HANDOFF_PACKAGE_V0.1.md` | 14798 | `DE34076915CD52296A28DE6EF8D26482D50F88D49BEB79E2B0DBBD309682FF2E` | Approved handoff contract |
| `RES-PROC_GATE7_CMS_API_COMPONENT_MAPPING_V0.1.md` | 13682 | `EF2AB98E5D5534C056D533EECFBBFB8658DD148CDCFEF0639C5EF0585747539C` | Approved fields and mapping contract |
| `RES-PROC_GATE7_IMPLEMENTATION_NEUTRAL_PLAN_V0.1.md` | 15312 | `377B78292415D9E62FC8451FE891DFFEBA8E30D32A387E0A260B67C1CDA0F9AD` | Approved nine-task implementation plan |
| `RES-PROC_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md` | 9395 | `3A73CD768125F07A0449301E506B231415BCBBD31EDECD488E35524768FF0D20` | Approved 28-criterion acceptance and rollback contract |
| `RES-PROC_GATE7_MANIFEST_V0.1.md` | 6987 | `18480B2E7F88A636E366826FCF50D60AA8FB172C8FED49B3DCBB7A2DF58E2446` | Sealed Gate 7 Manifest |
| `RES-PROC_GATE7_FRESH_VALIDATION_V0.1.md` | 3658 | `92579A45C88FA2759EB51101DF27D9C764750AEBEE994414EC2EBE582B53ADF6` | `45 PASS / 0 FAIL` evidence |

## 4. External Development Destination

| Field | Value |
|---|---|
| Saved project | `16Wordpress_nextjs` |
| Project ID | `06f6b163-d8ce-4fca-a599-baf36a8caa1e` |
| Repository | `D:\16Wordpress_nextjs` |
| Environment | Independent Git worktree |
| Task title | `Implement RES-PROC Gate 8` |
| Host | `local` |
| Creation receipt | `client-new-thread:a73ca4af-f352-4634-8c2c-01357983aa27` |
| Real task ID | Pending provisioning; do not use the client receipt as a task ID |
| Current state | `TASK_CREATION_ACCEPTED / WORKTREE_PROVISIONING` |

The external prompt binds the task to its own repository rules, the sealed Gate 7 package, test-first implementation, `site_scope=tio2-my` isolation and a complete Gate 9 evidence receipt.

## 5. Gate 8 Acceptance Boundary

The external task must implement the sealed package without changing the approved Buyer Clean content, metadata, sources, conditional relation semantics, shared-template/content boundaries, responsive states or accessibility behavior. Gate 8 completion is not established until it supplies the required immutable code reference, preview, runtime evidence, screenshots and test results.

D23 remains planning, handoff and read-only QA only. No D16 code was modified by this task.

## 6. Open Dependencies and Release Controls

- Real Article author, publisher, publication/review dates and maintenance owner remain required for Article output.
- Products remains conditional; both Process owner routes require joint eligibility.
- All seven exact source links require runtime verification; affected claims fail closed on withdrawal or scope change.
- RES-000 inventory/sitemap remains unchanged until separate eligibility and release predicates pass.
- Route activation, production CMS writes, deployment, publication, DNS and indexing remain unauthorized.
- Gate 9 may start only after an accessible implementation receipt and separate user authorization.

## 7. Next Authorized Action

The D16 task may finish worktree provisioning and execute Gate 8 within the dispatched scope. On delivery, it must return the Gate 9 evidence receipt to this D23 project. Project control may then present that receipt for a separate Gate 9 authorization; it may not silently advance the page.
