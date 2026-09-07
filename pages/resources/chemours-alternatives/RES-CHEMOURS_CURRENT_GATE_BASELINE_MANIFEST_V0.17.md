# RES-CHEMOURS Current Gate Baseline Manifest V0.17

2026-09-07。本版接替V0.16成为本页唯一当前阶段入口；V0.16及此前版本保留历史。

## 当前阶段

| 字段 | 当前值 |
|---|---|
| Page ID / candidate URL | `RES-CHEMOURS` / `/resources/chemours-titanium-dioxide-alternatives/` |
| Page type / language / site_scope | Technical brand-alternative evaluation guide / EN / `tio2-my` |
| Mapping / indexing | `NEW_PAGE_CANDIDATE` / `DECISION_REQUIRED`；无实现授权 |
| Gate 1 / Gate 2 | `APPROVED / CLOSED` |
| Gate 3 | `APPROVED / CLOSED`；用户批准当前冻结候选及八张正式图 |
| Gate 4–10 | `NOT_AUTHORIZED` |
| User decision | 2026-09-07：“通过。”；`RESCH-G3-APPROVAL-01` |
| Previous Manifest | [V0.16](RES-CHEMOURS_CURRENT_GATE_BASELINE_MANIFEST_V0.16.md) |

[Gate 3 V0.2用户授权](05_review/RES-CHEMOURS_GATE3_V0.2_USER_AUTHORIZATION_V0.1.md)启动本轮；[用户批准与关闭记录](05_review/RES-CHEMOURS_GATE3_USER_APPROVAL_AND_CLOSURE_V0.1.md)登记用户在收到三端线框、V0.2实测结果和总控审查提交后回复“通过。”，SHA-256 `7420d9351f58fd332ae8a0ee741fa51c3a09e062f40ca70a039cf04e477e519c`。Gate 3现已关闭。

## 当前批准输入

| 角色 | 当前文件 | SHA-256 | 状态 |
|---|---|---|---|
| Brief | [Brief V0.1](../../../docs/page-briefs/RES-CHEMOURS_CHEMOURS_TITANIUM_DIOXIDE_ALTERNATIVES_BRIEF_V0.1.md) | `8d3f68ff119c6bd65fe8bd5524f0c8bf50351bfba4b8bb79e93fb25208effc69` | `APPROVED / CLOSED` |
| A | [Skeleton V0.3](04_planning/RES-CHEMOURS_GATE2_CONTENT_SKELETON_V0.3.md) | `e4786e732ff75ae250d3e659e95a1d5eb37e42889402ae65f25b724c9f7d817f` | `USER_APPROVED / CLOSED` |
| B | [Full Buyer Clean Copy V0.3](04_planning/RES-CHEMOURS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md) | `91ae0f0c13701dd9be8f8cdb68fe81781ebd7ad5f6e460ab022ac3466561e5f6` | `USER_APPROVED / CLOSED`；唯一可见正文源 |
| C | [Content Contract V0.7](04_planning/RES-CHEMOURS_GATE2_CONTENT_CONTRACT_V0.7.md) | `ab5ba6f7db66dd411974251dbfcb7201ea9bbf92928f638d2619cfc173ffaea4` | `USER_APPROVED / CLOSED` |
| Gate 2决定 | [最终用户确认](05_review/RES-CHEMOURS_GATE2_FINAL_USER_CONFIRMATION_V0.1.md) | `6c8b3b9870b32d5906d5207496981ee862fc2dd445971e0eb25ac5123a4d982e` | `确认合格 / CLOSED` |

六模块顺序、Products-first/Documents-second、两个Chemours一方链接、review日期和independence表达均继承V0.13，不因线框阶段改变。

## Gate 3执行基线与输出位置

| 对象 | 当前身份 |
|---|---|
| Frozen execution baseline | [V1.1](../../../docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.1.md)，`3f62b4e01bfecfcfd388d278c0c5020a185dc77347b66bfc2164f3ed8a57f04c`；保持批准组合身份 |
| Current project method baseline | [V1.2](../../../docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.2.md)，`2fe2d5d131d72878d9cf5f507938568610f41d20a89893c367837e78e54a3341`；记录第三页测试已完成，不反向改变冻结输入 |
| Gate 3 Agent | [V0.2](../../../agents/gate3-execution/agent.md)，`c9b703b5a2e1e68927f9357e2565a1affbe0624cfaa8353fc810e991b80a815b` |
| Design Skill | [responsive-wireframe-design V0.2](../../../skills/responsive-wireframe-design/SKILL.md)，`0506605299245dce91ff4f26a05696aad76e62bc281867b7b3794464bdf5791b` |
| Verification Skill | [layout-interaction-verification V0.2](../../../skills/layout-interaction-verification/SKILL.md)，`86d1b6cda29ca2213607e6b5be1f48f3a449105b1385659200584498fb541aa4` |
| Shared consumer | [consumer-package.json](../../../docs/architecture/gate3-shared-consumer-v0.2/consumer-package.json)，`1148a05fa12fdbf038f456a1cf40d3c1cf3f1c967fae1384616342faaa2fdf50`；本页传`RES-000` |
| 正式设计目录 | `D:\23MySec\pages\resources\chemours-alternatives\04_planning\gate3-v0.1\` |
| 正式审查目录 | `D:\23MySec\pages\resources\chemours-alternatives\05_review\` |

执行必须先生成任务输入卡和诊断候选，完成硬预检并记录`PASS_FOR_FORMAL_RENDER`，再冻结源和导出正式三端/适用状态。证据分为`approval_core`和`diagnostic_support`；总控正式独立审查只能从冻结候选开始。

首个V0.1共享包候选SHA-256为`ec44a759a77a258a53444a560854ba99dc6812b837b423e292e5d3da34e48e9f`。预检Finding `RESCH-PF-SHARED-01`发现Cookie动作及Menu按钮的浅色表面交互色与CTA增补不一致，正确阻断冻结且正式导出为0。该候选与失败记录保留在`diagnostic_support`，不得升级为批准核心证据。新候选从共享包V0.2重建、完整预检PASS后冻结；旧候选PASS未被继承。

## 当前冻结组合与独立审查

| 对象 | 当前身份 |
|---|---|
| 冻结HTML | [Responsive Wireframe V0.2](04_planning/gate3-v0.1/RES-CHEMOURS_GATE3_RESPONSIVE_WIREFRAME_V0.2.html)，18,831 bytes，SHA-256 `e63db62904fbf72b0b7bcaa4be84e43617dfd82ad377dca3fbe0b4a2a209f74b` |
| 预检记录 | [Preflight](04_planning/gate3-v0.1/RES-CHEMOURS_GATE3_PREFLIGHT_RECORD_V0.1.json)，`PASS_FOR_FORMAL_RENDER`，SHA-256 `d3ab5c8172d206259b02c011378305931d79a45a1447a6bca0d0b9e61430bd0b` |
| 冻结记录 | [Freeze](04_planning/gate3-v0.1/RES-CHEMOURS_GATE3_FREEZE_RECORD_V0.1.json)，SHA-256 `ecceab47cecef3932ca70ad3537441898b0dba5e59d8736d8bb31aeab034a207` |
| 正式资产 | 1440/768/390全页，768/390 Menu，1440/768/390 Cookie，共8图；[资产清单](04_planning/gate3-v0.1/RES-CHEMOURS_GATE3_ASSET_INVENTORY_V0.1.json) SHA-256 `dca573e036f98b69651903cc8acbf1f227aa97fd2251ac35152850519668a30a` |
| 执行自检 | [Self Check V0.1](05_review/RES-CHEMOURS_GATE3_EXECUTION_SELF_CHECK_V0.1.md)，`DRAFT_FOR_PROJECT_CONTROL_REVIEW`，SHA-256 `8c115d4b28a769471af15dbca0f4792b95973ec578395963bc5264fc75c3f75d` |
| 总控独立审查 | [Project Control Review V0.1](05_review/RES-CHEMOURS_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md)，`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；未解决页面Finding 0 |
| 用户批准 | [Approval and Closure V0.1](05_review/RES-CHEMOURS_GATE3_USER_APPROVAL_AND_CLOSURE_V0.1.md)，`USER_APPROVED / GATE3_CLOSED` |
| Gate 3→4交接 | [Handoff V0.1](05_review/RES-CHEMOURS_GATE3_TO_GATE4_HANDOFF_V0.1.md)，SHA-256 `4228bb0e972fb8b183f51981184bdfb50f586be9f615430f10aaa6be3ae44d50`；`READY_FOR_GATE4_WHEN_AUTHORIZED` |

总控审查从冻结候选开始，独立打开全部8张正式图与6张390可读分段，并运行15项固定核心＋本页风险检查，失败0。断言数仅说明本页覆盖，不与其他页面比较。用户已批准该组合；V0.2第三页最终测试结果见[实测记录V0.2](../../../docs/superpowers/specs/2026-09-07-gate3-v0.2-live-test-result-v0.2.md)。

## 页面专属风险与停止边界

- 两个Chemours/Ti-Pure一方外链必须与支持的portfolio/application命题相邻，不被视觉处理成授权、推荐或合作关系。
- 四部分evaluation brief和三步qualification必须保持对象/步骤关系；不得改成Chemours→IKHLAS配对、比较表、推荐器或Grade选择器。
- Products与Documents两条路径保持先后，均无Chemours或IKHLAS Grade预填。
- Sources and Independence、`Last reviewed: 6 September 2026`和公司独立关系必须完整可见；不把治理状态或mapping/indexing状态渲染给买家。
- 页面无表单、FAQ、筛选、提交、空结果或动态推荐状态；除共享Mobile Menu与Cookie外不制造额外状态。

Gate 3结构无未关闭批准项，`RESCH-PF-SHARED-01`已作为冻结前共享缺陷关闭。Gate 3→4交接表已就绪；Gate 4仍须用户另行授权。Mapping/indexing、Schema实现、开发与发布继续独立未授权。
