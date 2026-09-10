# Gate 4 Complete Visual Agent / Skill 当前基线 Manifest V1.7

> 2026-09-07当前批准方式：Gate 3、4、6按[总控常设关闭授权](GATE_3_4_6_DELEGATED_CLOSURE_AUTHORITY_V1.0.md)执行独立审查与总控关闭，不再等待逐页用户批准；Gate 1/2/9/10不变。本文历史“用户批准”表述只保留原记录语境，当前三关关闭由该授权解释；内容事实决定、明确暂停、下一阶段启动与外发/开发/发布权限分别保留。


## 1. 当前组合

| 对象 | 当前入口 | SHA-256 | 状态 |
|---|---|---|---|
| 工作流 | [Gate工作流V3.2](GATE_WORKFLOW_V3.2.md) | `5476e9ef47c0e8632c741745233f8d0e8984360cb639d9de2b69e6e7c81ea3a0` | `APPROVED / ACTIVE` |
| Gate标准 | [页面Gate 1–4统一标准V2.2](PAGE_GATE_1_4_STANDARD_V2.2.md) | `7b14c96e8515fdaeaeee12f23e9e7c8ffb815f8a00643d2bc0998f667efff64a` | `APPROVED / ACTIVE` |
| 执行Agent | [Gate 4完整视觉设计与验证Agent](../../agents/gate4-complete-visual/agent.md) V1.3 | `7c90c3e62e4d341f9a61b8d4f8c8e02cd52dd23ae032cf713679ecaf959ca7e3` | `APPROVED_ROLE_SOURCE / NOT_RUNTIME_REGISTERED` |
| 共同工作合同 | [Agent / Skill共同工作合同V1.2](GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.2.md) | `4339c7b3163a96f442860407f547dde3ad4638d8064b12bb4e0d0097eb9a1822` | `APPROVED / ACTIVE` |
| 视觉方向方法 | [brand-applied-visual-design](../../skills/brand-applied-visual-design/SKILL.md) V0.4 | `770ed434423de2fb1abfd4c7f9f8fe536f3ba1a3c78c75b27fb3e783b9751132` | `APPROVED_METHOD_SOURCE` |
| 完整视觉方法 | [full-page-visual-composition](../../skills/full-page-visual-composition/SKILL.md) V0.4 | `6c0bbbb12eb3ac727f0f1a1e52e5106a18ece0987f980a36d0b28d38f5bbb29f` | `APPROVED_METHOD_SOURCE` |
| 布局与交互核验 | [layout-interaction-verification](../../skills/layout-interaction-verification/SKILL.md) V0.8 | `27dbcf7a2815af08543f3579f4e0eb93de73bfe41246e6d9879793cdde725884` | `APPROVED_METHOD_SOURCE` |

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

## 独立视觉审查方法同步

2026-09-07用户确认将避免重复审查写入Agent/Skill；本版只绑定共享核验V0.5。其他阶段权限、制作及历史页面关闭不变，新Gate 5编号切换与授权仍按后续联合流程生效文件。专属参考：[独立审查方法](../../skills/layout-interaction-verification/references/independent-visual-review.md)，SHA-256 `a5816b700851f19df9604a5eebc7c94917b50fc25678bfbed8c73740c1530208`。

## 审查合同补全同步

本版绑定核验Skill V0.6与独立审查参考V0.2；前文版本沿革保留历史语境。Gate 3专属范围与Gate 4制作职责不变，首审/复审和索引写权限按新方法区分。详见[修订及对比](GATE5_REVIEW_CONTRACT_COMPLETION_V1.0.md)。不迁移页面状态或正式Gate编号。

## Gate 4自检增量同步

本版当前核验入口为V0.7；前文保留版本沿革。详细变更见[自检效率修订](GATE4_SELF_CHECK_EFFICIENCY_CHANGE_V1.0.md)。其他阶段范围、独立审查及页面授权保持。

自检参考：[gate4-self-check.md](../../skills/layout-interaction-verification/references/gate4-self-check.md)，SHA-256 `4aea55976c95e49370deeba440218e35c24fc299f3b726be06c8300ed38babc9`。

## 方法边界整理

本版当前身份以上表为准；沿革保留历史语境。详见[方法边界整理](VISUAL_SKILL_METHOD_BOUNDARIES_CHANGE_V1.0.md)。仅集中呈现既有允许/禁止规则，阶段范围与权限保持。
