# Gate 3 Agent与Skill当前基线 Manifest V1.14

日期：2026-09-20。状态：USER_APPROVED_SOURCE_SYNC / ACTIVE_CURRENT_BASELINE。

依据[跨页一致性决定V1.0](GATE3_CROSS_PAGE_CONSISTENCY_DECISION_V1.0.md)及用户“进行同步”要求，将已批准边界落实到角色、方法与交接正文。继承[GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.13](GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.13.md)，旧组合保留历史。

| 组成 | 当前源 | SHA-256 |
|---|---|---|
| 工作流V3.3 | [GATE_WORKFLOW_V3.3.md](GATE_WORKFLOW_V3.3.md) | `b00f404ef3c24e394194c7dd4f85e40c56b1fb6e33b723290e1a8f3af50ac1f1` |
| 统一标准V2.3 | [PAGE_GATE_1_4_STANDARD_V2.3.md](PAGE_GATE_1_4_STANDARD_V2.3.md) | `2cc10e4951ec110742e977d1d45e07c9dc1cece7b5012c168600125408eda87b` |
| 批准决定 | [GATE3_CROSS_PAGE_CONSISTENCY_DECISION_V1.0.md](GATE3_CROSS_PAGE_CONSISTENCY_DECISION_V1.0.md) | `0c78278b9898e3a52ed048e0bcd3cd338f6f490e1dd56fa3085b7b83fc86c95c` |
| 交接V0.5 | [2026-09-20-gate3-to-gate4-handoff-contract-v0.5.md](../superpowers/specs/2026-09-20-gate3-to-gate4-handoff-contract-v0.5.md) | `e1867d8841c49d67629ac4b1eead9ff1005b1a0ddce7a0fb624b8f54d41465ca` |
| Gate 3 Agent V0.7 | [agent.md](../../agents/gate3-execution/agent.md) | `a5f7c6a421ae7454497ef464d2cfe51d48812e2a0eeb04a1fa5649a1bb26bbeb` |
| 线框Skill V0.6 | [SKILL.md](../../skills/responsive-wireframe-design/SKILL.md) | `c27c7b1348a88f91be10cc07a8b1a45a08711c13ad82686ea777bf64c6f69339` |
| 核验通用Skill V0.8（未改） | [SKILL.md](../../skills/layout-interaction-verification/SKILL.md) | `27dbcf7a2815af08543f3579f4e0eb93de73bfe41246e6d9879793cdde725884` |
| Gate 3核验专项V0.4 | [gate3-structure-scope.md](../../skills/layout-interaction-verification/references/gate3-structure-scope.md) | `5d511125408211655bd201a3f0d2ee7b2db349324f563faff24ecafe1b7d7ba6` |
| 预检与冻结方法 | [preflight-freeze-evidence.md](../../skills/responsive-wireframe-design/references/preflight-freeze-evidence.md) | `40f7f9ddaaf54981e6dc35714c9976579ed3e4ef09b96ac7184dca57546498e8` |
| 核心风险模型（未改） | [core-risk-model.md](../../skills/layout-interaction-verification/references/core-risk-model.md) | `5f0f45e5b8015ce331c95506c1cd264b8ada01f6e2b42f35fafd6d444f920609` |
| 预检检查器（未改） | [check-preflight-record.mjs](../../skills/responsive-wireframe-design/scripts/check-preflight-record.mjs) | `6cd67439a2d867e07a2f63d0be79a2a7163683591daee4f835d3888939424c34` |
| 共享消费包（未改） | [SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md](gate3-shared-consumer-v0.2/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md) | `eacb20113a0bad1c9022c5d618178ef6482aa8913fcd1197443dc7b596548eeb` |
| 制作边界V1.1 | [GATE3_PRODUCTION_BOUNDARY_STANDARD_V1.1.md](GATE3_PRODUCTION_BOUNDARY_STANDARD_V1.1.md) | `86ff91f577bd4fba1173699637a41ee549ce18df1553a178e0bd3245a59a6da1` |

Gate 3负责跨页复用、差异依据和内容/操作关系；线框列数是当前验证方案，Gate 4决定完整视觉布局并复验。正文已同步，不再仅依靠增补优先级覆盖相反条款。

本次不注册运行入口，不启动页面、开发或发布，不迁移历史页面Manifest。完整内容、三端证据、必要操作、冻结、自检和独立审查保持。验证范围与回退见[正文同步记录](GATE3_CONSISTENCY_SOURCE_SYNC_V1.0.md)。
