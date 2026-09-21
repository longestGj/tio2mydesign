# Remaining 13 Product Detail Pages · D32 Next.js Current Gate Baseline Manifest V0.3

## Current state

| Field | Value |
|---|---|
| Manifest date | `2026-09-21` |
| Scope | `GRADE-M510`, `GRADE-M896`, `GRADE-M895`, `GRADE-M340`, `GRADE-M886`, `GRADE-M52`, `GRADE-M108`, `GRADE-M210`, `GRADE-M200`, `GRADE-M996`, `GRADE-M2196`, `GRADE-M2377`, `GRADE-CR901` |
| Gate 6 | `APPROVED / CLOSED` |
| Gate 8 | Exact candidate reviewed and returned to `04开发` for one shared-root repair |
| Gate 9 review scope | `INITIAL_REVIEW_COMPLETE / RETURN_REQUIRED` |
| Page Gate 9 | `READ_ONLY_QA_NOT_APPROVED / GATE8_RETURN_REQUIRED` |
| Integration | `NOT_READY / PAGE_GATE9_NOT_PASS_AND_EXTERNAL_DEPENDENCIES_OPEN` |
| Release | `NOT_AUTHORIZED` |
| Open Finding | `PD13-D32-G9-ROOT-F01` · Cookie Settings reverse focus escapes the open modal |

V0.3 supersedes V0.2 as the current stage pointer. It records the first independent Gate 9 result; it does not change the Gate 6 package, approved Grade content, Gate 10 authority or release boundary.

## Reviewed candidate

| Field | Identity |
|---|---|
| Repository / worktree | `D:\32NextJS` / `D:\32NextJS\.worktrees\product-detail-13-gate8` |
| Branch | `codex/product-detail-13-gate8` |
| Baseline | `53280559074eab582aecabea6e2593aaf9ccd8ed` |
| Implementation | `3a06b574d52dbf2f32f11f872dbaea63ca65aad3` |
| Evidence HEAD | `d75043ba5bf379b804d567db39871019dc778704` |
| Build ID | `7BGXY_4cV95ZiX1VdmTId` |
| Evidence Manifest SHA-256 | `A7FBB84FC860BEACEEEF63A826D2FA239E578F7C81E1BA235088CC5D8CBA5058` |

## Independent Gate 9 result

Authoritative report: `07_qa/PRODUCT-DETAIL-13-GRADE_D32_NEXTJS_GATE9_INDEPENDENT_ACCEPTANCE_V0.1.md`, SHA-256 `0C53DFF3BF48A8500134075278DAEE1DC88B46637902503F8C2CF217C2FED4AB`.

- Evidence Manifest validation: `85/85 PASS`.
- Two-round runtime preflight: `34/34 PASS`.
- Independent HTTP audit: `299/299 PASS`.
- Fourteen stable acceptance conditions: `12 PASS / 2 FAIL / 0 NOT_VERIFIED / 0 NOT_APPLICABLE`.
- Failed conditions: `PD13-D32-AC-A11Y` and `PD13-D32-AC-REGRESSION`, both caused by the same shared-root Finding.
- All thirteen Grade pages passed identity, content, technical facts, restrictions, SEO/social metadata, Schema, held actions, responsive layout, Hub readiness, isolation, preview controls and evidence identity for the reviewed candidate.

## Required targeted repair and recheck

`PD13-D32-G9-ROOT-F01` reproduces on the shared Cookie Settings dialog: with the modal open and focus on `Close`, `Shift+Tab` moves focus to `BODY` instead of wrapping to `Read Cookie Policy`. The dialog remains open.

Gate 8 must return a replacement exact candidate that keeps sequential focus inside the open Cookie Settings modal in both directions while preserving Escape, Close, backdrop behavior, trigger-focus restoration and current consent-state copy. Gate 9 will then recheck one Product Detail representative plus Home, Product Hub, M-350 and Applications, after re-running candidate identity and preflight. The twelve unaffected PASS conditions may be inherited only if the replacement Manifest and diff prove they are unchanged.

## Non-blocking user exceptions

The following remain `USER_EXCEPTED / NOT_TESTED / NON_BLOCKING`, not PASS:

- physical-device testing;
- manual named assistive-technology testing;
- native browser or operating-system 200% zoom evidence.

The 320 CSS-pixel result is responsive-layout evidence only and is not native 200% zoom evidence.

## Boundaries

The Gate 9 task has already returned the Finding to `04开发`. No additional controller supervision is required. Gate 10, merge, push, PR, deployment, publication, sitemap activation and indexing remain unauthorized. External contextual RFQ, Sample, Documents, Process, Application and Market dependencies remain open at Integration level.

