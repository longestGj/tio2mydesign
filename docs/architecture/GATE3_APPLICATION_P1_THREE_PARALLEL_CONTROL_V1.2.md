# Gate 3 Application P1 Three-Page Parallel Control V1.2

Date: 2026-09-07  
Control ID: `G3-APP-P1-THREE-PARALLEL-01`  
Status: `USER_APPROVED / COMPLETE / CLOSED`

Previous control: `GATE3_APPLICATION_P1_THREE_PARALLEL_CONTROL_V1.1.md` / `6455915179f94716975bd8962a075b32cc79a86119499fb407ca6200db3cc3ed`

## Authorization and scope

After Project Control identified the remaining Gate 2-approved pages, the user instructed: “三个一批吧，启动三个子代理。” The selected first batch follows the previously presented priority order and contains exactly Coatings, Plastics and Masterbatch. This authorizes one execution subagent per page to perform Gate 3 only.

| Workstream | Page / registered URL | Approved Gate 2 combination | Execution owner | State |
|---|---|---|---|---|
| COAT | `APP-COAT` / `/applications/titanium-dioxide-for-coatings/` | Gate 2 Manifest V0.3; A V0.1 / B V0.2 / C V0.1 | `coatings_gate3_v03` | `USER_APPROVED / GATE3_APPROVED / CLOSED` |
| PLAS | `APP-PLAS` / `/applications/titanium-dioxide-for-plastics/` | Gate 2 Manifest V0.3; A V0.2 / B V0.3 / C V0.3 | `plastics_gate3_v03` | `USER_APPROVED / GATE3_APPROVED / CLOSED` |
| MB | `APP-MB` / `/applications/titanium-dioxide-for-masterbatch/` | Gate 2 Manifest V0.5; A V0.2 / B V0.3 / C V0.3 | `masterbatch_gate3_v03` | `USER_APPROVED / GATE3_APPROVED / CLOSED` |

All three registered URLs retain `PROVISIONAL_URL`. That lifecycle state does not block Gate 3 structure work and is not promoted to a final canonical or production route by this control.

## Fixed execution baseline

All three workstreams use [Gate 3 current baseline V1.5](GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.5.md), including Execution Agent V0.3, responsive wireframe Skill V0.3, layout and interaction verification Skill V0.4, hard preflight, candidate freeze, two-layer evidence, page-neutral shared consumer V0.2 and Gate 3→4 handoff contract V0.2.

Each execution subagent must:

1. Recalculate and match the exact approved A/B/C identities before design work.
2. Consume the page-neutral shared source rather than copying any completed business page.
3. Work only in its assigned page planning/review directories and candidate Manifest.
4. Produce a traceable input card, `PASS_FOR_FORMAL_RENDER` hard preflight, frozen editable source, 1440/768/390 full-page evidence, applicable mobile-menu evidence and only risk-driven page states.
5. Separate `approval_core` from `diagnostic_support`, then self-check the fixed core plus page-specific risks.
6. Submit only as `DRAFT_FOR_PROJECT_CONTROL_REVIEW`; execution self-check cannot approve or close Gate 3.

## Parallel isolation and shared files

The page directories are independent. Execution subagents cannot modify `00_PROJECT_STATUS.md`, `01_PROJECT_INDEX.md`, this control, Gate 3 methods, shared contracts, other pages or `D:\16Wordpress_nextjs`. Project Control alone maintains shared navigation records after reading back current files and checking for concurrent changes.

## Review and completion rule

Project Control independently starts from each exact frozen candidate and reads the approved inputs, frozen source, all approval-core images, applicable diagnostic segments, shared-evidence inheritance and page-specific risks. A clean result may advance the candidate only to `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`. The user has authorized execution but has not preauthorized automatic Gate 3 closure for this batch; therefore `APPROVED / CLOSED` still requires the user's later decision.

Gate 4–10, development, deployment, publication, DNS and indexing remain outside this control.

## Completed frozen combinations and independent review

| Page | Frozen source | Formal approval evidence | Project Control result | Current Manifest |
|---|---|---|---|---|
| Coatings | 34,063 bytes / `44eaa4f1e7c263e9f824e0d3d9325fc6effdbd8327625a4b9511f9f87f5d5861` | 1440/768/390 full + 768/390 menu + 390 Grade anchor; 6 PNGs | [Review V0.1](../../pages/applications/coatings/05_review/APP-COAT_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md) / blocking Findings `0` | [V0.5](../../pages/applications/coatings/APP-COAT_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md) |
| Plastics | 36,573 bytes / `252bc39147933465c91ad9d506dabd8b57e99e8f9122198c9af0da0c733ec55e` | 1440/768/390 full + 768/390 menu + 390 Grade/action path; 6 PNGs | [Review V0.1](../../pages/applications/plastics/05_review/APP-PLAS_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md) / blocking Findings `0` | [V0.5](../../pages/applications/plastics/APP-PLAS_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md) |
| Masterbatch | 31,200 bytes / `43a70d7c13a387c09a7d07138880f97340890c807a285217d090109b6a65f937` | 1440/768/390 full + 768/390 menu + 3 risk views + runtime record; 9 objects | [Review V0.1](../../pages/applications/masterbatch/05_review/APP-MB_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md) / blocking Findings `0` | [V0.7](../../pages/applications/masterbatch/APP-MB_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md) |

Project Control recalculated each frozen source and approval-core inventory, opened every formal PNG, read the applicable runtime/diagnostic records and independently checked the fixed core plus page-specific risks. All three approved A/B/C combinations remained exact. Assertion counts were retained only for reproduction and were not compared between pages.

Fresh batch verification is recorded in [completion audit V1.0](GATE3_APPLICATION_P1_THREE_PARALLEL_COMPLETION_AUDIT_V1.0.json), SHA-256 `56bc96a9c6839f316c05e24b30a7f00d0f3021a5ceb04b6a19e3351f9f20e0ce`: 9 approved inputs, 28 indexed core objects, 105 checks and 0 failures.

The Coatings executor discovered an internal HTML title issue after an earlier freeze and correctly invalidated it. The old source and incomplete smooth-scroll capture remain only as labeled diagnostic history; the final `44eaa4f1…` source went through a new preflight, freeze and formal export chain before Project Control review. Plastics corrected a 390 diagnostic false positive that measured a visually hidden table header while retaining checks for all derived mobile field labels. Neither correction changed approved content or owner boundaries.

## User approval and closure

On 2026-09-07 the user stated: “现在Gate3需要我审核的，都审核通过。” This approves the three exact frozen combinations presented in the active batch.

| Page | Decision | Approval record | Formal handoff | Current Manifest |
|---|---|---|---|---|
| Coatings | `APP-COAT-G3-APPROVAL-01` | [Approval V0.1](../../pages/applications/coatings/05_review/APP-COAT_GATE3_USER_APPROVAL_AND_CLOSURE_V0.1.md) | [Handoff V0.1](../../pages/applications/coatings/05_review/APP-COAT_GATE3_TO_GATE4_HANDOFF_V0.1.md) | [V0.6](../../pages/applications/coatings/APP-COAT_CURRENT_GATE_BASELINE_MANIFEST_V0.6.md) |
| Plastics | `APP-PLAS-G3-APPROVAL-01` | [Approval V0.1](../../pages/applications/plastics/05_review/APP-PLAS_GATE3_USER_APPROVAL_AND_CLOSURE_V0.1.md) | [Handoff V0.1](../../pages/applications/plastics/05_review/APP-PLAS_GATE3_TO_GATE4_HANDOFF_V0.1.md) | [V0.6](../../pages/applications/plastics/APP-PLAS_CURRENT_GATE_BASELINE_MANIFEST_V0.6.md) |
| Masterbatch | `APP-MB-G3-APPROVAL-01` | [Approval V0.1](../../pages/applications/masterbatch/05_review/APP-MB_GATE3_USER_APPROVAL_AND_CLOSURE_V0.1.md) | [Handoff V0.1](../../pages/applications/masterbatch/05_review/APP-MB_GATE3_TO_GATE4_HANDOFF_V0.1.md) | [V0.8](../../pages/applications/masterbatch/APP-MB_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md) |

All three Gate 3 stages are `APPROVED / CLOSED`. Each formal handoff is `READY_FOR_GATE4_WHEN_AUTHORIZED`; no Gate 4 or later-stage execution is started by this closure.
