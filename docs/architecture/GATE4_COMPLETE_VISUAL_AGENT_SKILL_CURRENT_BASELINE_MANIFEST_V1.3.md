# Gate 4 Complete Visual Agent / Skill 当前基线 Manifest V1.3

> 2026-09-07当前批准方式：Gate 3、4、6按[总控常设关闭授权](GATE_3_4_6_DELEGATED_CLOSURE_AUTHORITY_V1.0.md)执行独立审查与总控关闭，不再等待逐页用户批准；Gate 1/2/9/10不变。本文历史“用户批准”表述只保留原记录语境，当前三关关闭由该授权解释；内容事实决定、明确暂停、下一阶段启动与外发/开发/发布权限分别保留。


## 1. 当前组合

| 对象 | 当前入口 | SHA-256 | 状态 |
|---|---|---|---|
| 工作流 | [Gate工作流V3.2](GATE_WORKFLOW_V3.2.md) | `5476e9ef47c0e8632c741745233f8d0e8984360cb639d9de2b69e6e7c81ea3a0` | `APPROVED / ACTIVE` |
| Gate标准 | [页面Gate 1–4统一标准V2.2](PAGE_GATE_1_4_STANDARD_V2.2.md) | `7b14c96e8515fdaeaeee12f23e9e7c8ffb815f8a00643d2bc0998f667efff64a` | `APPROVED / ACTIVE` |
| 执行Agent | [Gate 4完整视觉设计与验证Agent](../../agents/gate4-complete-visual/agent.md) V1.2 | `87d42c73f5da6a65505b31edd7fbf6382155ea55e144577006763194925ae674` | `APPROVED_ROLE_SOURCE / NOT_RUNTIME_REGISTERED` |
| 共同工作合同 | [Agent / Skill共同工作合同V1.1](GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.1.md) | `94b21e4581267880082e10c7dbe7c52941d71bd933cda74fb03d7e75d109ffde` | `APPROVED / ACTIVE` |
| 视觉方向方法 | [brand-applied-visual-design](../../skills/brand-applied-visual-design/SKILL.md) V0.2 | `477c280b8bdc5657632ee26635f4e94a642495482cb3a3ab6dcf0ea27e103bbd` | `APPROVED_METHOD_SOURCE` |
| 完整视觉方法 | [full-page-visual-composition](../../skills/full-page-visual-composition/SKILL.md) V0.2 | `708fec10a70ec15df62f0d3f8b94e7c7150fecefa6f891d43130a0f099740220` | `APPROVED_METHOD_SOURCE` |
| 布局与交互核验 | [layout-interaction-verification](../../skills/layout-interaction-verification/SKILL.md) V0.4 | `24b1a8500ce374fe759e26a51b08fd8b1d95a2590d561fb0bc41cfc538aa349e` | `APPROVED_METHOD_SOURCE` |

## 2. 角色和方法关系

一个执行Agent负责端到端结果。三个Skill共用同一工作集、输入清单、设计源和证据索引，只维护各自方法与增量结果。4A为`VISUAL_DIRECTION_CHECKED`内部检查；4B完成冻结并进入唯一最终独立审查环节，该环节允许Finding、返修和复审。独立审查通过后，总控依常设授权确认4B冻结组合与必修关闭后，Gate 4登记`APPROVED / CLOSED`。

## 3. 历史来源

- 原[Gate 4视觉方向Agent](../../agents/gate4-execution/agent.md)和原[Gate 5完整视觉Agent](../../agents/gate5-execution/agent.md)保持历史原文。
- 三项Skill的被替代源保存在各自`history/`目录，不回写。
- 旧Gate 5已批准成果按工作流V3.1核对映射；旧Gate 4已批准成果只补实际缺口。
- Belgium仍暂停；本基线不构成恢复或扩大执行授权。

## 4. 权限

本Manifest批准当前角色与方法组合，不自动注册Codex运行Skill，不创建常驻Agent，不授权任何页面执行、恢复、Gate 6、开发、派发、部署、发布、DNS或索引。

## 5. 决定

2026-09-07用户明确同意该方案并要求开始修改。当前组合取代原Gate 4→Gate 5双Agent流程作为未来执行入口；历史页面的事实、批准对象、文件名与hash保持。

## 6. 共用方法兼容更新

V1.1只承接用户授权Gate 3定向修订对共用核验Skill的V0.4更新及标准V2.1指针；Gate 4共同工作集、4A/4B和完整检查不变，不新增Gate 4授权。[V1.0](GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.0.md)及核验[并行V0.3](../../skills/layout-interaction-verification/history/SKILL-v0.3-before-gate3-scope.md)保留。精确当前共用方法hash由本Manifest§1独立绑定，不依赖Gate 3的Manifest；本次文件自检不代替真实页面验证。



## 7. V1.2入口与身份同步

2026-09-07用户“按照你的方案，开始修正。”授权入口收口。本版继承[V1.1](GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.1.md)，独立核对本阶段消费的方法身份；Agent V1.1只更新当前工作流导航，三项Skill及共同工作合同均未改方法。Gate 3范围精简不能减免4B完整视觉核验。文件自检不是独立页面验证。
