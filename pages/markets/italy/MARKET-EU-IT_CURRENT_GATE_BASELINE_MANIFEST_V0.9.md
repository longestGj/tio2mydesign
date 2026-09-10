# MARKET-EU-IT Current Gate Baseline Manifest V0.9

## 0. Current state

| Field | Value |
|---|---|
| Page ID / URL | `MARKET-EU-IT` / `/markets/italy/` |
| Page type / language | Market procurement landing page / EN |
| Site scope | `tio2-my` |
| Manifest date | 2026-09-07 |
| Lifecycle | `GATE4_COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Gate 1 | `APPROVED / CLOSED` |
| Gate 2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 3 | `IT-G3-APPROVAL-01 / USER_APPROVED / CLOSED` |
| Gate 4 authorization | Current batch-1 user instruction / `USER_AUTHORIZED` |
| Gate 4 execution | `4A CHECKED / 4B COMPLETE / FROZEN / SELF_CHECK_PASS` |
| Gate 4 independent review | `PENDING` |
| Gate 4 user approval / closure | `NOT_CLAIMED_BY_EXECUTOR` |
| Gate 6–10 | `NOT_STARTED / NOT_AUTHORIZED_BY_THIS EXECUTION` |
| Previous Manifest | `MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md` / `b670bb458f06d430c26e1c70eea1b3ab8216534207e265aba7433d9a123a9bc9` |

V0.9 is the current Italy execution pointer. It retains the user-approved Gate 2 A/B/C and Gate 3 combination and binds the new Gate 4 freeze for separate independent review. It is not an independent PASS, user approval or Gate closure.

## 1. Approved page contract retained

| Role | Current file | SHA-256 | State |
|---|---|---|---|
| A — Content Skeleton | `pages/markets/italy/04_planning/MARKET-EU-IT_GATE2_CONTENT_SKELETON_V0.1.md` | `8e18340cdae14cbb36991fd56b8ba7b33bdcda0fee1fd0fd0ba3a8181e151751` | `USER_APPROVED / CLOSED` |
| B — sole visible Buyer Copy | `pages/markets/italy/04_planning/MARKET-EU-IT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` | `a7d047af04b5127cc54f97938e4d622b1e1b496691747516322924f6e0b44208` | `USER_APPROVED / CLOSED / SOLE_VISIBLE_COPY_SOURCE` |
| C — stable content contract | `pages/markets/italy/04_planning/MARKET-EU-IT_GATE2_CONTENT_CONTRACT_V0.2.md` | `ac49b66055bf36b87583e3919005ccbf87919a9900d9a9103aaa7d39936a6e19` | `USER_APPROVED / CLOSED` |
| Gate 3 frozen source | `pages/markets/italy/04_planning/gate3-v0.1/MARKET-EU-IT_GATE3_WIREFRAME_V0.1.html` | `910d8199ca4094b4b56d854b5292c6eb115a6eabd29ff35d9515850d76a1b752` | `USER_APPROVED / CLOSED` |
| Gate 3→4 handoff | `pages/markets/italy/05_review/MARKET-EU-IT_GATE3_TO_GATE4_HANDOFF_V0.1.md` | `c9a799e1e5408b7ffec78c6bed82c0195788abadc3a6aab77a6a26cc15fac0dd` | `READY_FOR_GATE4_WHEN_AUTHORIZED` |

The approved URL, keyword, seven modules, complete B, link order, source predicates, product neutrality, COO limitation, Italy destination/RFQ boundary and shared-owner exits are unchanged.

## 2. Gate 4 method and authority

The input index binds 51 consumed identities, including workflow V3.2, unified standard V2.2, Gate 4 baseline Manifest V1.3, Agent V0.2, Brand Applied Visual Design V0.2, Full-page Visual Composition V0.2, Layout & Interaction Verification V0.4, governance V1.4 and the approved brand, CTA, Global Chrome, Logo and legal contracts. Root Status and Index were read only for routing and are intentionally excluded from the freeze.

Current user instruction authorizes Italy Gate 4 in batch 1. `G346-DELEGATED-CLOSURE-20260907` permits later controller closure only after executor, separate independent review and controller conditions are satisfied. This executor stops at review submission and does not exercise closure authority.

## 3. Frozen Gate 4 candidate

| Role | Path | Bytes | SHA-256 / status |
|---|---|---:|---|
| Complete visual source | `D:/23MySec/pages/markets/italy/04_planning/gate4-v0.1/MARKET-EU-IT_GATE4_COMPLETE_VISUAL_V0.1.html` | 28199 | `ed7d54648e058fee6ee4d6ff7ca76d3fe3f440eda0e5d0d7b8871b6da0f15615` |
| Input index | `D:/23MySec/pages/markets/italy/04_planning/gate4-v0.1/MARKET-EU-IT_GATE4_INPUT_INDEX_V0.1.json` | 11197 | `91b5500232b45cd275548ed00b59544240999fcac15432c5cd18c74d8ea75eb9` / 51 inputs |
| Workset | `D:/23MySec/pages/markets/italy/04_planning/gate4-v0.1/MARKET-EU-IT_GATE4_WORKSET_V0.1.json` | 1750 | `ffbd469edbab464eecfd4857b0b95713fd5100007bc9f873fa1a4c1e159e91e9` / `IT-G4-COMPLETE-20260907-01` |
| Preflight | `D:/23MySec/pages/markets/italy/04_planning/gate4-v0.1/MARKET-EU-IT_GATE4_PREFLIGHT_RECORD_V0.1.json` | 1727 | `91ab5c439bb964319164cd9abdc8d0a38dc2565eb27a0682f7fee587f926db1d` / PASS |
| Freeze | `D:/23MySec/pages/markets/italy/04_planning/gate4-v0.1/MARKET-EU-IT_GATE4_FREEZE_RECORD_V0.1.json` | 4106 | `46f9177205856a282c58288754e3a893495971432b7ca96a1c25942bd2d14a64` / `IT-G4-FREEZE-20260907-01` |
| Evidence index | `D:/23MySec/pages/markets/italy/04_planning/gate4-v0.1/MARKET-EU-IT_GATE4_EVIDENCE_INDEX_V0.1.json` | 33541 | `133b34f47946b0061ae0977854e1b1ec479c2e1dad4a5c09ae9f44f8bed86b82` / 56 images |
| Runtime verification | `D:/23MySec/pages/markets/italy/04_planning/gate4-v0.1/diagnostic_support/runtime-verification.json` | 57007 | `b5aa15ea63be33516a20cd8e250e2fb5ca63293668ee5b259f09418516520b9a` / 35 checks, 0 failures, 0 errors |
| Static visual readback | `D:/23MySec/pages/markets/italy/04_planning/gate4-v0.1/diagnostic_support/visual-readback.json` | 31202 | `79a38d701704217c1045202d979f1d5702242671fb48be7d8dc68b64f3af9508` / 56 opened |
| Composition report | `D:/23MySec/pages/markets/italy/04_planning/gate4-v0.1/MARKET-EU-IT_GATE4_COMPLETE_VISUAL_COMPOSITION_REPORT_V0.1.md` | 2919 | `10bc5c9f8e3562d4432258046ac3929f7e1b1bb0c628fbedd239a23c3343481b` |
| Execution self-check | `D:/23MySec/pages/markets/italy/05_review/MARKET-EU-IT_GATE4_EXECUTION_SELF_CHECK_V0.1.md` | 2790 | `316acb46e68b274f506d60bb4a1711107b37af2a8030fafd0d27c0da7767c986` / 0 unresolved Findings |
| Review submission | `D:/23MySec/pages/markets/italy/05_review/MARKET-EU-IT_GATE4_REVIEW_SUBMISSION_V0.1.md` | 2207 | `9c3cc09b47d5ed57ffc6fb74972cb4782512d902e9d7d912dd1d500e9c52d26d` |

Any change to the frozen source ends this identity and requires a new freeze and affected evidence.

## 4. Evidence coverage and execution result

- Approval core: three complete pages and five applicable Menu/Cookie states.
- Continuous readability: 27 overlapping segments, all opened at original detail.
- Direction: three representative 4A samples.
- High-risk inline links: two targets × three widths × normal/hover/focus = 18 images; 6/6 focus cases pass.
- Runtime: 35 checks, zero failures, zero page errors; exact content/shared DOM parity, geometry, 44px targets, action contexts, Menu and Cookie behavior passed.
- Static visual readback: 56/56 images opened; no blocking defect found.
- Executor unresolved required Findings: 0.

This is executor evidence. Separate independent review must recompute identities, operate the candidate and inspect the evidence before any project-control PASS.

## 5. Open items and stop boundary

| Item | State |
|---|---|
| Independent review | `PENDING`; output only at `D:/23MySec/pages/markets/italy/05_review/gate4-complete-independent-v0.1/REVIEW.md` |
| Gate 4 project-control state | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| User approval / delegated closure | Pending independent review and controller conditions; not claimed here |
| Production route/receiver/CMS/device/runtime isolation | Later owner / Gate 6, 8 or 9 verification |
| Gate 6 / development / deployment / publication | Outside this execution |

No file outside `D:/23MySec/pages/markets/italy` was edited by this execution.

## 6. Manifest version record

| Version | Date | Meaning |
|---|---|---|
| V0.8 | 2026-09-07 | Gate 3 user-approved/closed combination; Gate 3→4 handoff ready when authorized |
| V0.9 | 2026-09-07 | Gate 4 4A→4B execution completed and frozen for separate independent review; no independent PASS, user approval or closure claimed |
