# RES-PROC Current Gate 8 Review Manifest V0.11

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-PROC` / Chloride vs Sulfate Titanium Dioxide |
| URL | `/resources/chloride-vs-sulfate-titanium-dioxide/` |
| Page type / priority | Buying guide / P2 |
| Date | 2026-09-06 |
| Manifest status | `HISTORICAL / SUPERSEDED` |
| Lifecycle | `GATE8_EXTERNAL_PROVISIONING / GATE9_REVIEW_AUTHORIZED` |
| Gate 0/1–6 | `USER_APPROVED / CLOSED` |
| Gate 7 | `USER_CONFIRMED / PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 8 | `USER_AUTHORIZED / EXTERNAL_TASK_PROVISIONING_PENDING / PROJECT_CONTROL_REVIEW_OWNER_ASSIGNED` |
| Gate 9 | `USER_AUTHORIZED / READ_ONLY_QA_PENDING_GATE8_RECEIPT` |
| Gate 10 | Not authorized |
| Public state | Not live, not indexed, not in RES-000 inventory or sitemap |
| Supersedes | `RES-PROC_CURRENT_GATE8_AUTHORIZATION_MANIFEST_V0.10.md` |
| Superseded by | `RES-PROC_CURRENT_DUAL_GATE8_COMPARISON_MANIFEST_V0.12.md` |

## 1. Current User Decision

User decision on 2026-09-06: `你负责审查Gate8，直到Gate9完成。`

Project control owns the continuous Gate 8 review and Gate 9 correction loop for the already approved RES-PROC contract. It may send reproducible findings back to the effective D16 task and repeat verification without requesting permission for each normal correction round. It may not expand the page contract or cross the Gate 10/release boundary.

## 2. Current Decision and Coordination Authority

| Role | File | Bytes | SHA-256 | State |
|---|---|---:|---|---|
| Gate 7 approval / Gate 8 authorization | `pages/resources/05_review/RES-PROC_GATE7_APPROVAL_GATE8_AUTHORIZATION_DECISION_V0.1.md` | 2434 | `6F6DD82E3B76961C78E11D5D7633954A82A9041EEE7DF9F63BBC522BCB8AEDEE` | `USER_CONFIRMED / USER_AUTHORIZED` |
| Initial external dispatch | `pages/resources/05_review/RES-PROC_GATE8_EXTERNAL_TASK_DISPATCH_V0.1.md` | 2672 | `863DFB1499637C8D383FE47F8871E7F09163793801D7C5CE4AA1A1520858C696` | Client receipt accepted; no formal task ID |
| Gate 8 review / Gate 9 authorization | `pages/resources/05_review/RES-PROC_GATE8_REVIEW_GATE9_AUTHORIZATION_DECISION_V0.1.md` | 2413 | `3144C8A80E822E8B93CB2692C33A3565E29D018E90F863FBBA18B57BA5E7ADC3` | `USER_AUTHORIZED / CONTINUOUS_REVIEW_LOOP` |
| Worktree provisioning recovery | `pages/resources/05_review/RES-PROC_GATE8_EXTERNAL_TASK_PROVISIONING_RECOVERY_V0.1.md` | 2023 | `7742E4BF24EF8FB49BC64D224DE021CB18BDAB3C40A422A76E2910D13D207283` | One recovery creation accepted; formal task ID pending |
| Historical V0.10 Manifest | `pages/resources/05_review/RES-PROC_CURRENT_GATE8_AUTHORIZATION_MANIFEST_V0.10.md` | 5765 | `D968670A7E701182494977C4BF9AC114E956D4E30DB5AF933F1B59FF8A9DDE85` | `HISTORICAL / SUPERSEDED` |

## 3. Sealed Review Baseline

Package ID: `RES-PROC-G7-HANDOFF-01`. Manifest ID: `RES-PROC-G7-MANIFEST-01`. Gate 7 review result: `45 PASS / 0 FAIL`.

| File | Bytes | SHA-256 |
|---|---:|---|
| `RES-PROC_GATE7_HANDOFF_PACKAGE_V0.1.md` | 14798 | `DE34076915CD52296A28DE6EF8D26482D50F88D49BEB79E2B0DBBD309682FF2E` |
| `RES-PROC_GATE7_CMS_API_COMPONENT_MAPPING_V0.1.md` | 13682 | `EF2AB98E5D5534C056D533EECFBBFB8658DD148CDCFEF0639C5EF0585747539C` |
| `RES-PROC_GATE7_IMPLEMENTATION_NEUTRAL_PLAN_V0.1.md` | 15312 | `377B78292415D9E62FC8451FE891DFFEBA8E30D32A387E0A260B67C1CDA0F9AD` |
| `RES-PROC_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md` | 9395 | `3A73CD768125F07A0449301E506B231415BCBBD31EDECD488E35524768FF0D20` |
| `RES-PROC_GATE7_MANIFEST_V0.1.md` | 6987 | `18480B2E7F88A636E366826FCF50D60AA8FB172C8FED49B3DCBB7A2DF58E2446` |
| `RES-PROC_GATE7_FRESH_VALIDATION_V0.1.md` | 3658 | `92579A45C88FA2759EB51101DF27D9C764750AEBEE994414EC2EBE582B53ADF6` |
| `RES-PROC_GATE7_PROJECT_CONTROL_CLOSURE_V0.2.md` | 3522 | `00A03E3A301492302DB9C94DE0612DB7C395A01847DA3626644D0D64525B7FA1` |

## 4. External Task Provisioning State

| Field | Value |
|---|---|
| Saved D16 project | `16Wordpress_nextjs` / `06f6b163-d8ce-4fca-a599-baf36a8caa1e` |
| Intended task title | `Implement RES-PROC Gate 8` |
| Environment | Independent Git worktree |
| Initial client receipt | `client-new-thread:a73ca4af-f352-4634-8c2c-01357983aa27` |
| Recovery client receipt | `client-new-thread:ab3a05ad-42cd-44ec-b327-18e1001c5059` |
| Formal task ID | Pending; neither client receipt may be used as a task ID |
| Effective task rule | First readable task with the correct RES-PROC prompt and sealed D23 authorities; all duplicates are non-authoritative |

## 5. Persistent Review Mechanism

| Field | Value |
|---|---|
| Heartbeat ID | `res-proc-gate-8-9-review-loop` |
| Status | `ACTIVE` |
| Frequency | Every 15 minutes |
| Notification behavior | Quiet on unchanged state; report task readiness, delivery, findings, correction receipts, failure/user action or Gate 9 closure |
| Stop condition | Gate 9 formal closure |

The heartbeat is bound to this current task. Once the formal D16 task appears, coordination must use its real task ID, wait for delivery, perform independent read-only review, return findings to that same task and repeat fresh verification until the closure condition is met.

## 6. Gate 9 Closure Conditions

Gate 9 may close only after project control independently verifies the complete receipt and all contracted evidence, including:

- immutable code ref and accessible result;
- query, route, cache, menu, SEO, form and media behavior;
- exact Buyer Clean content, metadata, Article Schema, sources and relation semantics;
- `site_scope=tio2-my` isolation with no cross-scope fallback or leakage;
- approved desktop, tablet, mobile, interactive, responsive and accessibility states;
- all required test results, screenshots and runtime evidence;
- zero open in-scope P0/P1/P2 findings and release blockers.

## 7. Boundary

D23 remains read-only with respect to D16 code. Gate 10, deployment, publication, production writes, DNS, RES-000 inventory/sitemap changes and indexing remain unauthorized. Material changes to content, URL, keyword ownership, page duty, architecture or brand require a separate user decision rather than being treated as ordinary bug fixes.
