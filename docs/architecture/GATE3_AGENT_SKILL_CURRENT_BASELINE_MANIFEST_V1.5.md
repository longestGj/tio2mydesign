# Gate 3 Agent与Skill当前基线 Manifest V1.5

日期：2026-09-07。状态：`USER_AUTHORIZED_TARGETED_REVISION / ACTIVE_CURRENT_BASELINE`。

用户来源：在核对当前Agent/Skill已有与缺失控制后，用户明确要求“现在开始定向修订”。本版继承V1.4全部Gate 3定向修订及合并接口，按用户“按照你的方案，开始修正。”同步入口并重核身份；文件核验不等于独立行为验证或具体页面批准。[V1.3](GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.3.md)保留合并前当前截面；[V1.2](GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.2.md)保留此前V0.2批准与实测截面。

## 当前组合

| 组成 | 当前文件 | SHA-256 |
|---|---|---|
| Gate标准 | [PAGE_GATE_1_4_STANDARD_V2.1.md](PAGE_GATE_1_4_STANDARD_V2.1.md) | `a7223f7345277d73ea0937c22eae86b6482d806871273faaf06117072bc795dd` |
| Gate 3执行Agent V0.3 | [agent.md](../../agents/gate3-execution/agent.md) | `325da3e8256a88b7282c8e1b46d7a3453934641acac1ee8612c18312c0cc9fba` |
| 线框设计Skill V0.3 | [SKILL.md](../../skills/responsive-wireframe-design/SKILL.md) | `51bc57513176534de2a89a15e86dbef82aafd4491735f956ae918913ace4ea10` |
| 布局核验Skill V0.4 | [SKILL.md](../../skills/layout-interaction-verification/SKILL.md) | `24b1a8500ce374fe759e26a51b08fd8b1d95a2590d561fb0bc41cfc538aa349e` |
| Gate 3核验范围 | [gate3-structure-scope.md](../../skills/layout-interaction-verification/references/gate3-structure-scope.md) | `8cfd4763ad9b6dd94749b7fbaef826dde58d5bf9ba54b11c916a9b79575d2ae0` |
| 预检与冻结方法 | [preflight-freeze-evidence.md](../../skills/responsive-wireframe-design/references/preflight-freeze-evidence.md) | `d7a095adf522e45d9b82dac2dab909de9fed83296c8d86e0105ad5214cafcd9f` |
| 核心与风险模型 | [core-risk-model.md](../../skills/layout-interaction-verification/references/core-risk-model.md) | `5f0f45e5b8015ce331c95506c1cd264b8ada01f6e2b42f35fafd6d444f920609` |
| 预检检查器（未修改） | [check-preflight-record.mjs](../../skills/responsive-wireframe-design/scripts/check-preflight-record.mjs) | `6cd67439a2d867e07a2f63d0be79a2a7163683591daee4f835d3888939424c34` |
| 共享消费（未修改） | [SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md](gate3-shared-consumer-v0.2/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md) | `eacb20113a0bad1c9022c5d618178ef6482aa8913fcd1197443dc7b596548eeb` |
| Gate 3→4交接V0.2 | [2026-09-07-gate3-to-gate4-handoff-contract-v0.2.md](../superpowers/specs/2026-09-07-gate3-to-gate4-handoff-contract-v0.2.md) | `4b512788bcdc782bef7e980289a4d2acda6fe429239722a3f645c0980d9fa80c` |

根AGENTS通过Index按阶段路由读取本入口及标准V2.1 §4.3；旧治理/标准对Gate 3范围、共享逐页全量验证或状态图的冲突按最新用户修订解释。其他阶段按已并行批准的[Gate工作流V3.1](GATE_WORKFLOW_V3.1.md)，完整视觉归Gate 4；本次继承合并结果，不覆盖另一任务的角色与方法设计。

## 使用顺序

1. 继承有效页面授权与批准输入，在已有输入卡写本页结构问题和验证位置。
2. 使用有效基础样式和共享来源，逐组件判定可引用的共享验证，并保留本页实际组装/操作检查。
3. 完成1440/768/390完整内容及必要状态；每份额外状态证据对应实际风险。
4. 内容、关系、结构、操作及合同满足后预检、冻结、导出和自检，不以纯视觉偏好追加迭代。
5. 不同审查者从原批准输入与冻结组合独立审查，核对共享继承和本页实测；视觉建议交下一视觉阶段。
6. 按有效用户决定关闭Gate 3，交接区分结构约束与当前实现参数。当前Manifest不另建竞争入口。

## 历史、验证与限制

- 修订前Agent/线框V0.2与并行核验V0.3逐字节快照及预检/风险模型/入口备份见[修订记录](../superpowers/specs/2026-09-07-gate3-v0.3-scope-targeted-revision.md)和[变更映射](gate3-scope-revision-2026-09-07/CHANGE_MAP.json)。旧批准源hash按历史路径读取，不把更新后的内容当成原冻结版本。
- 历史Poland、Chloride、Chemours和批次批准保持，未重画、重导或回写页面Manifest。既有显式结构锁定不因本版自动解除。
- 本轮检查结构、引用、身份、旧脚本兼容和规则案例，详见修订记录；未运行独立子代理或真实新页面试跑，不宣称已验证工作量下降或所有组件覆盖。
- 两项Skill不新增安装/注册，不自动派发；不授予任何页面Gate、开发、部署或发布权限。共享核验精简只适用于Gate 3，不能据此减免最终视觉或Gate 9生产验收。






## V1.5来源同步

[V1.4](GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.4.md)原文保留。Agent仍为V0.3，本次仅改当前Manifest导航，修改前精确源见[快照](../../agents/gate3-execution/history/agent-v0.3-before-workflow-alignment.md)；两项Skill及其方法未修改。新基线核对实际内容和完整身份，不将旧页面验证结论迁移为新方法的行为通过。当前流程另按[工作流V3.1](GATE_WORKFLOW_V3.1.md)消费。
