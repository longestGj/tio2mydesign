# RES-CHEMOURS Current Gate Baseline Manifest V0.15

2026-09-07。本版接替V0.14成为本页唯一当前阶段入口；V0.14及此前版本保留历史。

## 当前阶段

| 字段 | 当前值 |
|---|---|
| Page ID / candidate URL | `RES-CHEMOURS` / `/resources/chemours-titanium-dioxide-alternatives/` |
| Page type / language / site_scope | Technical brand-alternative evaluation guide / EN / `tio2-my` |
| Mapping / indexing | `NEW_PAGE_CANDIDATE` / `DECISION_REQUIRED`；无实现授权 |
| Gate 1 / Gate 2 | `APPROVED / CLOSED` |
| Gate 3 | `AUTHORIZED / IN_PROGRESS`；测试Agent/Skills V0.2；首个候选因共享层预检Finding未冻结，等待从修正包重建 |
| Gate 4–10 | `NOT_AUTHORIZED` |
| Previous Manifest | [V0.14](RES-CHEMOURS_CURRENT_GATE_BASELINE_MANIFEST_V0.14.md) |

[Gate 3 V0.2用户授权](05_review/RES-CHEMOURS_GATE3_V0.2_USER_AUTHORIZATION_V0.1.md)记录用户原话“我们测试gate3的V0.2”，SHA-256 `5703c03b70897f2c36a224e593f7cda9a2cd6f51dd02ab49143d6001c425a131`。本轮停止于冻结候选的执行、自检和总控独立审查后提交用户决定；提交和总控PASS均不自动关闭Gate 3。

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
| Current Gate 3 baseline | [V1.1](../../../docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.1.md)，`3f62b4e01bfecfcfd388d278c0c5020a185dc77347b66bfc2164f3ed8a57f04c` |
| Gate 3 Agent | [V0.2](../../../agents/gate3-execution/agent.md)，`c9b703b5a2e1e68927f9357e2565a1affbe0624cfaa8353fc810e991b80a815b` |
| Design Skill | [responsive-wireframe-design V0.2](../../../skills/responsive-wireframe-design/SKILL.md)，`0506605299245dce91ff4f26a05696aad76e62bc281867b7b3794464bdf5791b` |
| Verification Skill | [layout-interaction-verification V0.2](../../../skills/layout-interaction-verification/SKILL.md)，`86d1b6cda29ca2213607e6b5be1f48f3a449105b1385659200584498fb541aa4` |
| Shared consumer | [consumer-package.json](../../../docs/architecture/gate3-shared-consumer-v0.2/consumer-package.json)，`1148a05fa12fdbf038f456a1cf40d3c1cf3f1c967fae1384616342faaa2fdf50`；本页传`RES-000` |
| 正式设计目录 | `D:\23MySec\pages\resources\chemours-alternatives\04_planning\gate3-v0.1\` |
| 正式审查目录 | `D:\23MySec\pages\resources\chemours-alternatives\05_review\` |

执行必须先生成任务输入卡和诊断候选，完成硬预检并记录`PASS_FOR_FORMAL_RENDER`，再冻结源和导出正式三端/适用状态。证据分为`approval_core`和`diagnostic_support`；总控正式独立审查只能从冻结候选开始。

首个V0.1共享包候选SHA-256为`ec44a759a77a258a53444a560854ba99dc6812b837b423e292e5d3da34e48e9f`。预检Finding `RESCH-PF-SHARED-01`发现Cookie动作及Menu按钮的浅色表面交互色与CTA增补不一致，正确阻断冻结且正式导出为0。该候选与失败记录保留在`diagnostic_support`，不得升级为批准核心证据。执行必须用共享包V0.2重建新候选并完整重跑预检；旧候选任何单项PASS均不得继承为新冻结结论。

## 页面专属风险与停止边界

- 两个Chemours/Ti-Pure一方外链必须与支持的portfolio/application命题相邻，不被视觉处理成授权、推荐或合作关系。
- 四部分evaluation brief和三步qualification必须保持对象/步骤关系；不得改成Chemours→IKHLAS配对、比较表、推荐器或Grade选择器。
- Products与Documents两条路径保持先后，均无Chemours或IKHLAS Grade预填。
- Sources and Independence、`Last reviewed: 6 September 2026`和公司独立关系必须完整可见；不把治理状态或mapping/indexing状态渲染给买家。
- 页面无表单、FAQ、筛选、提交、空结果或动态推荐状态；除共享Mobile Menu与Cookie外不制造额外状态。

Gate 3候选完成后必须建立下一版Manifest绑定冻结源、正式资产、自检和总控独立审查。用户批准前保持`DESIGN_IN_REVIEW`，不得生成Gate 3→4正式就绪状态或启动后续Gate。
