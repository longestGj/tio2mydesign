# Gate 3 Application P1 Three-Page Parallel Control V1.0

Date: 2026-09-07  
Control ID: `G3-APP-P1-THREE-PARALLEL-01`  
Status: `AUTHORIZED / THREE_EXECUTION_SUBAGENTS_RUNNING`

## Authorization and scope

After Project Control identified the remaining Gate 2-approved pages, the user instructed: “三个一批吧，启动三个子代理。” The selected first batch follows the previously presented priority order and contains exactly Coatings, Plastics and Masterbatch. This authorizes one execution subagent per page to perform Gate 3 only.

| Workstream | Page / registered URL | Approved Gate 2 combination | Execution owner | State |
|---|---|---|---|---|
| COAT | `APP-COAT` / `/applications/titanium-dioxide-for-coatings/` | Current Manifest V0.3; A V0.1 / B V0.2 / C V0.1 | `coatings_gate3_v03` | `GATE3_EXECUTION_IN_PROGRESS` |
| PLAS | `APP-PLAS` / `/applications/titanium-dioxide-for-plastics/` | Current Manifest V0.3; A V0.2 / B V0.3 / C V0.3 | `plastics_gate3_v03` | `GATE3_EXECUTION_IN_PROGRESS` |
| MB | `APP-MB` / `/applications/titanium-dioxide-for-masterbatch/` | Current Manifest V0.5; A V0.2 / B V0.3 / C V0.3 | `masterbatch_gate3_v03` | `GATE3_EXECUTION_IN_PROGRESS` |

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
