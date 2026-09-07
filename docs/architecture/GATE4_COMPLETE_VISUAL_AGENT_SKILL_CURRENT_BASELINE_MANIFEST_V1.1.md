# Gate 4 Complete Visual Agent / Skill 当前基线 Manifest V1.1

## 1. 当前组合

| 对象 | 当前入口 | SHA-256 | 状态 |
|---|---|---|---|
| 工作流 | [Gate工作流V3.0](GATE_WORKFLOW_V3.0.md) | `b5a959a9d52431c30c6a31b7cbfad2dae8775fde69ecd317c2fc5939b7f3c292` | `APPROVED / ACTIVE` |
| Gate标准 | [页面Gate 1–4统一标准V2.1](PAGE_GATE_1_4_STANDARD_V2.1.md) | `a7223f7345277d73ea0937c22eae86b6482d806871273faaf06117072bc795dd` | `APPROVED / ACTIVE` |
| 执行Agent | [Gate 4完整视觉设计与验证Agent](../../agents/gate4-complete-visual/agent.md) V1.0 | `5d7528574fc72d07820c7a0768a5e72be4fbddcfb8b5888a09d43e2a9e089aaf` | `APPROVED_ROLE_SOURCE / NOT_RUNTIME_REGISTERED` |
| 共同工作合同 | [Agent / Skill共同工作合同V1.0](GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.0.md) | `a70753077aa921956506f0a7def9e55b6513829de7e995c8134a7557254cb7f6` | `APPROVED / ACTIVE` |
| 视觉方向方法 | [brand-applied-visual-design](../../skills/brand-applied-visual-design/SKILL.md) V0.2 | `477c280b8bdc5657632ee26635f4e94a642495482cb3a3ab6dcf0ea27e103bbd` | `APPROVED_METHOD_SOURCE` |
| 完整视觉方法 | [full-page-visual-composition](../../skills/full-page-visual-composition/SKILL.md) V0.2 | `708fec10a70ec15df62f0d3f8b94e7c7150fecefa6f891d43130a0f099740220` | `APPROVED_METHOD_SOURCE` |
| 布局与交互核验 | [layout-interaction-verification](../../skills/layout-interaction-verification/SKILL.md) V0.4 | `24b1a8500ce374fe759e26a51b08fd8b1d95a2590d561fb0bc41cfc538aa349e` | `APPROVED_METHOD_SOURCE` |

## 2. 角色和方法关系

一个执行Agent负责端到端结果。三个Skill共用同一工作集、输入清单、设计源和证据索引，只维护各自方法与增量结果。4A为`VISUAL_DIRECTION_CHECKED`内部检查；4B完成冻结并进入唯一最终独立审查环节，该环节允许Finding、返修和复审。用户批准4B冻结组合后，Gate 4才`APPROVED / CLOSED`。

## 3. 历史来源

- 原[Gate 4视觉方向Agent](../../agents/gate4-execution/agent.md)和原[Gate 5完整视觉Agent](../../agents/gate5-execution/agent.md)保持历史原文。
- 三项Skill的被替代源保存在各自`history/`目录，不回写。
- 旧Gate 5已批准成果按工作流V3.0核对映射；旧Gate 4已批准成果只补实际缺口。
- Belgium仍暂停；本基线不构成恢复或扩大执行授权。

## 4. 权限

本Manifest批准当前角色与方法组合，不自动注册Codex运行Skill，不创建常驻Agent，不授权任何页面执行、恢复、Gate 6、开发、派发、部署、发布、DNS或索引。

## 5. 决定

2026-09-07用户明确同意该方案并要求开始修改。当前组合取代原Gate 4→Gate 5双Agent流程作为未来执行入口；历史页面的事实、批准对象、文件名与hash保持。

## 6. 共用方法兼容更新

V1.1只承接用户授权Gate 3定向修订对共用核验Skill的V0.4更新及标准V2.1指针；Gate 4共同工作集、4A/4B和完整检查不变，不新增Gate 4授权。[V1.0](GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.0.md)及核验[并行V0.3](../../skills/layout-interaction-verification/history/SKILL-v0.3-before-gate3-scope.md)保留。精确当前共用方法hash见[Gate 3当前组合V1.4](GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.4.md)；本次文件自检不代替真实页面验证。


