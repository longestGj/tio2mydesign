# Gate 2 Remaining Seven Serial Full Copy Control V1.0

## 1. Authorization and scope

- Date: `2026-09-07`.
- User instruction: execute the next batch serially; finish one page before starting the next.
- Status: `USER_AUTHORIZED / ACTIVE`.
- Scope: the seven registered pages whose Gate 1 is closed and whose Gate 2 was not closed at authorization time.
- User review point: after all seven pages have completed Full Copy, independent Buyer Review and project-control review, submit the complete batch for the user's final Full Copy review.
- Stop boundary: this control does not approve or close Gate 2, and does not authorize Gate 3–10, development, deployment, publication, DNS or indexing.

The prior 12-page batch remains complete under `GATE2_SERIAL_FULL_COPY_CONTROL_V1.1.md`. This document is a new authorization record and does not rewrite that historical fixed queue.

## 2. Fixed serial queue

| Order | Page ID | Page type | Starting state |
|---:|---|---|---|
| 1 | `MARKET-EU-DE` | Market / EN | Gate 1 approved and closed; Gate 2 not started |
| 2 | `MARKET-EU-IT` | Market / EN | Gate 1 approved and closed; Gate 2 not started |
| 3 | `APP-COAT` | Application / EN | Gate 1 approved and closed; Gate 2 not started |
| 4 | `APP-PLAS` | Application / EN | Gate 1 approved and closed; Gate 2 not started |
| 5 | `APP-MB` | Application / EN | Gate 1 approved and closed; existing Gate 2 Skeleton is a working input, not a user-approved stopping point |
| 6 | `APP-INK` | Application / EN | Gate 1 approved and closed; Gate 2 not started |
| 7 | `APP-PAPER` | Application / EN | Gate 1 approved and closed; Gate 2 not started |

`CONTACT-001` is excluded because its Gate 1 is still in review.

## 3. Per-page cycle

1. Project control verifies the current Manifest, Brief, Gate 1 approval, page keyword row, applicable Playbook, fact decisions and CTA/shared-owner contracts.
2. A sub-agent acting as Gate 2 Execution Agent reads `agents/gate2-execution/agent.md` and produces the current A/B/C set required for Full Copy review. It performs the complete Buyer cold read and source-fidelity checks required by the role.
3. A different sub-agent acting as Gate 2 Review Agent reads `agents/gate2-review/agent.md`, reviews the actual Buyer Copy from first visible element to last, and saves an independent report.
4. The Execution Agent resolves every required Finding. The Review Agent verifies the actual revised copy and adjacent regressions.
5. Project control reads the full Buyer Copy, Review report, relevant sources and current combination, then records its independent verdict.
6. The page stops at `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL`. Gate 2 remains open.
7. Only after the current page reaches that state may the next page start.

The project currently has no approved dedicated Gate 2 Skill. `skills/buyer-task-content-design/SKILL.md` remains an exploratory draft and is not an execution authority. The Agents use the approved Gate 2 delivery structure V0.4 and applicable approved project methods only.

## 4. Version and evidence rules

- A is the reviewable content skeleton; B is the single Buyer Copy editing authority; C contains stable page-specific contracts only.
- C changes version only when action behavior, fact/source scope, SEO/GEO/Schema meaning, module responsibility or conditional rendering changes.
- A page Manifest changes version only when stage authority, permission or the current authoritative combination changes.
- Findings, revisions and re-reviews are saved in versioned review records without overwriting history.
- Page artifacts belong in the page's formal `04_planning` and `05_review` directories.

## 5. Progress

| Order | Page ID | Current state |
|---:|---|---|
| 1 | `MARKET-EU-DE` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| 2 | `MARKET-EU-IT` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| 3 | `APP-COAT` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| 4 | `APP-PLAS` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| 5 | `APP-MB` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| 6 | `APP-INK` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| 7 | `APP-PAPER` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |

All seven pages completed the serial execution, independent Buyer Review, required revision/re-review and Project Control review cycle. The batch now stops for the user's Full Copy approval decision in `GATE2_REMAINING_SEVEN_FULL_COPY_USER_REVIEW_SUBMISSION_V1.0.md`. Gate 2 remains open for all seven pages.
