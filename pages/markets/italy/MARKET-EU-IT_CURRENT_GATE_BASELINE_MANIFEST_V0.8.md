# MARKET-EU-IT Current Gate Baseline Manifest V0.8

## 0. Current state

| Field | Value |
|---|---|
| Page ID / URL | `MARKET-EU-IT` / `/markets/italy/` |
| Page type / language | Market procurement landing page / EN |
| Site scope | `tio2-my` |
| Manifest date | 2026-09-07 |
| Lifecycle | `GATE3_USER_APPROVED_CLOSED` |
| Gate 1 | `APPROVED / CLOSED` |
| Gate 2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 3 authorization | `G3-DE-IT-PARALLEL-01 / USER_AUTHORIZED` |
| Gate 3 candidate | `PREFLIGHT_PASS / FROZEN / EXECUTION_SELF_CHECK_PASS / PROJECT_CONTROL_REVIEW_PASS` |
| Gate 3 independent review / user approval | `PASS / IT-G3-APPROVAL-01 / USER_APPROVED / CLOSED` |
| Gate 4–10 | `NOT_STARTED / NOT_AUTHORIZED` |
| Previous Manifest | `MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md` / `4ed8a6042fce168b07085ea79dc67a651eb6062ccfe956fb7e5a19f613b68086` |

V0.8 is the current approved Italy pointer. It retains the user-approved Gate 2 combination and the exact frozen Gate 3 V0.3 source/evidence reviewed by Project Control. The user approved that combination under `IT-G3-APPROVAL-01`; Gate 3 is closed. Gate 4 and later work remain unauthorized.

## 1. Approved upstream combination retained

| Role | Current file | SHA-256 | State |
|---|---|---|---|
| A — Content Skeleton | `pages/markets/italy/04_planning/MARKET-EU-IT_GATE2_CONTENT_SKELETON_V0.1.md` | `8e18340cdae14cbb36991fd56b8ba7b33bdcda0fee1fd0fd0ba3a8181e151751` | `USER_APPROVED / CLOSED` |
| B — sole visible Buyer Copy | `pages/markets/italy/04_planning/MARKET-EU-IT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` | `a7d047af04b5127cc54f97938e4d622b1e1b496691747516322924f6e0b44208` | `USER_APPROVED / CLOSED / SOLE_VISIBLE_COPY_SOURCE` |
| C — stable content contract | `pages/markets/italy/04_planning/MARKET-EU-IT_GATE2_CONTENT_CONTRACT_V0.2.md` | `ac49b66055bf36b87583e3919005ccbf87919a9900d9a9103aaa7d39936a6e19` | `USER_APPROVED / CLOSED` |
| Gate 2 approval | `docs/architecture/GATE2_REMAINING_SEVEN_USER_APPROVAL_AND_CLOSURE_V1.0.md` | `8ed9810a96d1bde005f1d7e756995d494b13932fa386a79bbf177062997c3372` | `G2-7PAGE-APPROVAL-01 / USER_APPROVED` |
| Gate 3 authorization and closure | `docs/architecture/GATE3_GERMANY_ITALY_PARALLEL_CONTROL_V1.2.md` | `9f022074d730f2bf2201174fb7054924ab95e142f51c7fc842902b381e9a2156` | `USER_APPROVED / COMPLETE / CLOSED` |

The approved seven-module order, actions, facts, source predicates, owner boundaries and machine-readable limits remain unchanged from V0.5.

## 2. Current Gate 3 method baseline and shared source

| Item | Current identity |
|---|---|
| Gate 3 Agent/Skill baseline | `docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.5.md` / actual input-binding identity |
| Gate 3 standard | `PAGE_GATE_1_4_STANDARD_V2.1.md`, §4.3 |
| Execution Agent | `agents/gate3-execution/agent.md` V0.3 |
| Responsive design method | `skills/responsive-wireframe-design/SKILL.md` V0.3 |
| Verification method | `skills/layout-interaction-verification/SKILL.md` V0.4, Gate 3 structure scope |
| Shared planning consumer | `TIO2MY-GATE3-SHARED-CONSUMER-002` / V0.2 / `consumer-package.json` SHA-256 `1148a05fa12fdbf038f456a1cf40d3c1cf3f1c967fae1384616342faaa2fdf50` |
| Current navigation mapping | `MARKET-000` → Markets |
| Gate 3→4 contract | `2026-09-07-gate3-to-gate4-handoff-contract-v0.2.md` |

`input-binding.json` records the actual paths, byte sizes and hashes for every consumed method, owner and page input. Shared full-behaviour evidence is referenced only where its identity and scope qualify; current page assembly was actually tested.

## 3. Frozen Gate 3 candidate

| Role | Path | Bytes | SHA-256 / status |
|---|---|---:|---|
| Editable frozen source | `pages/markets/italy/04_planning/gate3-v0.1/MARKET-EU-IT_GATE3_WIREFRAME_V0.1.html` | 24,182 | `910d8199ca4094b4b56d854b5292c6eb115a6eabd29ff35d9515850d76a1b752` |
| Input binding | `pages/markets/italy/04_planning/gate3-v0.1/input-binding.json` | 10,996 | `ba3bf43e564df600b8eb512955418ab0ce69dff9c089e95d9d96828a9ad7c62a` |
| Hard preflight | `pages/markets/italy/04_planning/gate3-v0.1/preflight-record.json` | 6,132 | `26758604597f2356894508047c36cbcdc81e7d3db64c1c45c77cadc53f8e8e2c / PASS_FOR_FORMAL_RENDER` |
| Freeze record | `pages/markets/italy/04_planning/gate3-v0.1/freeze-record.json` | 11,753 | `c88defeb308580f19a5bb72e7f8066c4bf2484fe2e59d3fff014d107f413d803` |
| Asset inventory | `pages/markets/italy/04_planning/gate3-v0.1/asset-inventory.json` | 7,858 | `1aa555fa6dd471119ec798b65813143f10534c16a14378d93940187f3487923b` |
| Design report | `pages/markets/italy/04_planning/gate3-v0.1/design-report.md` | 2,090 | `9fcc21046201bed42b4bc4c3ba272168feae4dcb265698167edb2136015722ad` |
| Execution self-check | `pages/markets/italy/05_review/MARKET-EU-IT_GATE3_EXECUTION_SELF_CHECK_V0.1.md` | 3,764 | `834b9fb0accece3f455dfcbaecddf4d6c057b2304c6d24d90d8b0e72bb3a331f / SELF_CHECK_PASS` |
| Execution submission | `pages/markets/italy/05_review/MARKET-EU-IT_GATE3_EXECUTION_SUBMISSION_V0.1.md` | 2,469 | `95e7ab4b171b847fd2082101106d626df26b3bb3908cb200030d91f5ff2fb066` |
| Project Control review | `pages/markets/italy/05_review/MARKET-EU-IT_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md` | 5,416 | `e9fdd00f0256c711a31745a172696bacbb1a36b85279e942e47f9e27b8846ebd / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| User approval and closure | `pages/markets/italy/05_review/MARKET-EU-IT_GATE3_USER_APPROVAL_AND_CLOSURE_V0.1.md` | 2,266 | `f67c677fdf4da600b7db9c9fe483230c6f60c03c6a1c0280098ad9f14cd8ab4e / USER_APPROVED / CLOSED` |
| Formal Gate 3→4 handoff | `pages/markets/italy/05_review/MARKET-EU-IT_GATE3_TO_GATE4_HANDOFF_V0.1.md` | 6,372 | `c9a799e1e5408b7ffec78c6bed82c0195788abadc3a6aab77a6a26cc15fac0dd / READY_FOR_GATE4_WHEN_AUTHORIZED` |

Any change to the frozen source ends this identity and requires a new freeze and affected evidence.

## 4. Approval-core formal assets

| View/state | Dimensions | SHA-256 |
|---|---:|---|
| 1440 full | 1440 × 5021 | `d4ed8d49f804681a031ca68a9ef86fe6ae8b38e189c94f0426dc552ab565bf82` |
| 768 full | 768 × 5690 | `bd460ef8811b0f1a69890e46f5246b97ebf3015717bdcae04efdc48adc3d1562` |
| 390 full | 390 × 7431 | `b36dad51c515d06bc11ae50e1638636f0d455d3c3c5737975a97c9211902b6c1` |
| 768 Mobile Menu | 768 × 900 | `eab190b2ea781b55987096819c8454a05d71a2bd38d1aa696bf0056795f6158d` |
| 390 Mobile Menu | 390 × 844 | `11510a038daf91cdf8b2702a5a894af3aa7cb3f8b49b61a4f22dc96a65e2f653` |
| 390 Cookie Settings | 390 × 844 | `b6d1e427a9e2e337f5c8d0a201a8db3fc155b152f1bcdf7c260cb8d3c5f4eafb` |

All six images were opened by the execution subagent and are pixel-identical to their corresponding diagnostic renders from the frozen source. Cookie entry/exit/focus was actually checked at all three widths; only the tightest Cookie state was retained as a formal image because unchanged shared full coverage qualifies for inheritance.

## 5. Execution and independent-review result

- Execution unresolved required Findings: `0`.
- Exact B block and link matching passed in both directions at all three widths.
- Formal runtime ran 109 checks with 0 failures. This count is reproducibility information, not a quality score or cross-page comparison.
- Three complete pages, 768/390 menu states and the 390 Cookie state form the approval-core image set. Readable segments, detailed runtime actions and early diagnostic images remain in `diagnostic_support`.
- Project Control independently started from this freeze, read the approved inputs, opened the six formal images, read the high-risk 390 segments and verified shared inheritance and Italy-specific risks. No blocking Finding was confirmed.
- User decision: `IT-G3-APPROVAL-01 / USER_APPROVED / CLOSED`.

## 6. Open items and stop boundary

| Item | State |
|---|---|
| Project Control independent review | `PASS / MARKET-EU-IT_GATE3_PROJECT_CONTROL_REVIEW_V0.1` |
| Gate 3 user approval / closure | `IT-G3-APPROVAL-01 / USER_APPROVED / CLOSED` |
| Gate 3→4 handoff | `READY_FOR_GATE4_WHEN_AUTHORIZED` |
| Production route/receiver/CMS/source-freshness/device/runtime isolation | Later owner / Gate 6, 8 or 9 verification |
| Gate 4–10 / development / publication | `NOT_AUTHORIZED / NOT_STARTED` |

This approved combination stops at `GATE3_USER_APPROVED_CLOSED`. Gate 4 still requires separate authorization. No file in `D:\16Wordpress_nextjs` was accessed or modified.

## 7. Manifest version record

| Version | Date | Meaning |
|---|---|---|
| V0.5 | 2026-09-07 | User-approved Gate 2 A/B/C combination and module order; Gate 2 closed |
| V0.6 | 2026-09-07 | Gate 3 V0.3 frozen execution candidate submitted for independent Project Control review; Gate 3 remains open |
| V0.7 | 2026-09-07 | Project Control independently passed the exact frozen Gate 3 candidate; user approval and closure remain pending |
| V0.8 | 2026-09-07 | User approved the exact frozen Gate 3 combination under IT-G3-APPROVAL-01; Gate 3 closed and formal Gate 3→4 handoff ready when separately authorized |
