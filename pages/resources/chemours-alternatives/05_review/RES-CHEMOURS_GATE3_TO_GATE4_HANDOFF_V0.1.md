# RES-CHEMOURS Gate 3 → Gate 4 Handoff V0.1

## 1. 身份与权限

| 字段 | 当前值 |
|---|---|
| 状态 | `READY_FOR_GATE4_WHEN_AUTHORIZED` |
| Page ID / 页面 / 语言 | `RES-CHEMOURS` / Chemours titanium dioxide alternatives evaluation guide / EN |
| URL / site_scope | `/resources/chemours-titanium-dioxide-alternatives/`（candidate） / `tio2-my` |
| 当前导航 | `Resources`（`RES-000`）；Footer不显示当前项 |
| 当前阶段入口 | [Manifest V0.17](../RES-CHEMOURS_CURRENT_GATE_BASELINE_MANIFEST_V0.17.md) |
| Gate 3批准 | [用户批准与关闭V0.1](RES-CHEMOURS_GATE3_USER_APPROVAL_AND_CLOSURE_V0.1.md)，决定`RESCH-G3-APPROVAL-01`，2026-09-07 |
| Gate 4状态 | `NOT_AUTHORIZED`；本文件只让批准组合可被直接接收 |

本交接表执行[Gate 3→Gate 4成果交接合同V0.1](../../../../docs/superpowers/specs/2026-09-07-gate3-to-gate4-handoff-contract-v0.1.md)。它不复制Buyer Copy、不改变Gate 3批准组合，也不建立第二个阶段权威。

## 2. 批准核心入口

| 对象 | 当前身份与用途 |
|---|---|
| Brief | [RES-CHEMOURS Brief V0.1](../../../../docs/page-briefs/RES-CHEMOURS_CHEMOURS_TITANIUM_DIOXIDE_ALTERNATIVES_BRIEF_V0.1.md)，`8d3f68ff…fc69`；读者、意图、职责和品牌替代边界 |
| A：内容骨架 | [Gate 2 Skeleton V0.3](../04_planning/RES-CHEMOURS_GATE2_CONTENT_SKELETON_V0.3.md)，`e4786e73…817f`；六模块顺序与读者任务 |
| B：唯一可见正文源 | [Full Buyer Clean Copy V0.3](../04_planning/RES-CHEMOURS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md)，`91ae0f0c…e5f6`；Gate 4不得从本表重建或改写正文 |
| C：内容/行为合同 | [Content Contract V0.7](../04_planning/RES-CHEMOURS_GATE2_CONTENT_CONTRACT_V0.7.md)，`ab5ba6f7…aea4`；来源、行动、映射禁止和接收边界 |
| Gate 3冻结源 | [Responsive Wireframe V0.2](../04_planning/gate3-v0.1/RES-CHEMOURS_GATE3_RESPONSIVE_WIREFRAME_V0.2.html)，18,831 bytes，`e63db62904fbf72b0b7bcaa4be84e43617dfd82ad377dca3fbe0b4a2a209f74b` |
| 资产清单 | [Asset Inventory V0.1](../04_planning/gate3-v0.1/RES-CHEMOURS_GATE3_ASSET_INVENTORY_V0.1.json)，`dca573e0…a30a`；绑定8张正式图、冻结记录及依赖 |
| Gate 3核验 | [执行自检](RES-CHEMOURS_GATE3_EXECUTION_SELF_CHECK_V0.1.md)与[总控独立审查](RES-CHEMOURS_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md)；当前有效页面Finding为0 |

## 3. 已锁定结构

模块顺序固定为：Hero → Why the Exact Ti-Pure Grade Matters → Prepare Your Evaluation Brief → Compare Documented Facts, Then Qualify the Grade → Continue Your Evaluation → Sources and Independence。

| 模块 | 已锁定的读者任务、内容关系与行动 |
|---|---|
| Hero | 从准确Ti-Pure Grade、application与qualification requirements开始；主行动进入`/products/`，不承诺直接替代 |
| Exact Grade | 两个Chemours/Ti-Pure一方链接只支持portfolio与application guidance命题；链接与解释保持同段，不视觉化成合作/授权 |
| Evaluation Brief | 四项固定为Current reference and use、Process and handling constraints、Performance and acceptance criteria、Documents required for review；它们是准备清单，不是表单 |
| Qualification | Build a shortlist → Compare product-specific information → Validate in your own system；保持三步连续，不加入比较表、Grade映射或推荐器 |
| Continue | Products路径在先并为主行动，Documents路径在后并为次行动；无Chemours或IKHLAS Grade预填 |
| Sources / Independence | 来源归属、`Last reviewed: 6 September 2026`和IKHLAS独立性声明完整可见，不折叠为脚注或隐藏免责声明 |
| Shared Chrome / Footer | Header、Mobile Menu、固定RFQ、Footer法律与Cookie Settings由共享owner控制；本页只声明Resources当前项并证明页面闭合 |

本页没有页面内表单、FAQ、筛选器、选择器、比较表、媒体、空结果、错误/成功或动态推荐状态。Gate 4不得为展示组件而新增这些结构。

## 4. 组件、视口与状态矩阵

| 区域 | 1440结构 | 768结构 | 390结构 | 必要状态与正式证据 | owner |
|---|---|---|---|---|---|
| Shared Header | 84px；Desktop显示Resources当前项 | 64px紧凑Header | 64px紧凑Header | [768 Menu](../04_planning/gate3-v0.1/RES-CHEMOURS_GATE3_768_MENU_V0.1.png)、[390 Menu](../04_planning/gate3-v0.1/RES-CHEMOURS_GATE3_390_MENU_V0.1.png) | Global Chrome |
| Hero | H1 52px；单主行动 | H1 44px | H1 36px；行动全宽 | 三端全页首屏 | 页面＋PRODUCT-000 |
| Exact Grade | 来源链接与两段解释连续 | 限制行长，自然换行 | 单列，链接保持命题邻接 | 三端全页 | 页面＋外部来源 |
| Four-part brief | 2×2关系 | 2×2关系 | 1–4单列 | 768＋390全页证明重排 | 页面 |
| Qualification | 三步纵向 | 三步纵向 | 三步纵向 | 三端全页 | 页面＋PRODUCT-000 |
| Continue | Products/Documents左右两栏 | 两栏 | Products→Documents单列 | 390全页证明顺序 | 页面＋PRODUCT-000/CONV-DOC |
| Sources / Footer / Cookie | 来源正文后接Footer | 同关系 | 同关系 | [1440 Cookie](../04_planning/gate3-v0.1/RES-CHEMOURS_GATE3_1440_COOKIE_V0.1.png)、[768 Cookie](../04_planning/gate3-v0.1/RES-CHEMOURS_GATE3_768_COOKIE_V0.1.png)、[390 Cookie](../04_planning/gate3-v0.1/RES-CHEMOURS_GATE3_390_COOKIE_V0.1.png) | 页面＋Footer法律／Consent owner |

正式完整线框：[1440，1440×3082](../04_planning/gate3-v0.1/RES-CHEMOURS_GATE3_1440_FULL_V0.1.png)、[768，768×3648](../04_planning/gate3-v0.1/RES-CHEMOURS_GATE3_768_FULL_V0.1.png)、[390，390×4464](../04_planning/gate3-v0.1/RES-CHEMOURS_GATE3_390_FULL_V0.1.png)，均为对应logical width @1x。

## 5. Gate 4可决定与不得改变

Gate 4可以在批准品牌系统内决定颜色用途、字体层级、间距、表面层级、清单与步骤的视觉节奏、行动外观、焦点/悬停方向，以及有证据媒体和无图片回退的方向。若媒体会增加新区块、制造品牌配对或改变内容关系，应交回结构/事实owner。

Gate 4不得改变B正文、六模块顺序、四项brief、三步qualification、三端重排关系、CTA标签/目标/先后、两个外链归属、review日期、independence声明、Resources当前项或共享Chrome/法律合同。不得以颜色、徽章、表格、排序、图标或图片制造Chemours→IKHLAS对应、等价、direct replacement、推荐、排名、授权、合作或超出批准文案的性能结论。

## 6. 页面专属视觉风险与代表样例

| 风险位置 | Gate 4需要证明的问题 | 建议代表视口 |
|---|---|---|
| Hero | “从准确Grade开始”的评估定位和Products行动清楚，不被视觉语言变成替代承诺 | 1440＋390 |
| Exact Grade | 两个第三方链接的来源归属清楚，既可发现又不呈现为合作/背书 | 1440＋390 |
| Four-part brief | 2×2到单列时，编号、强调引导和说明不会错配或看成可提交字段 | 768＋390 |
| Continue | Products主路径与Documents次路径层级清楚；390顺序不丢失 | 1440＋390 |
| Sources / Independence | 来源、review日期和独立性声明易读，但不被装饰成机械免责或弱化隐藏 | 390 |
| Shared states | Menu/Cookie浅色交互边框与链接使用Functional Teal；深浅背景焦点保持owner合同 | 768 Menu＋390 Cookie |

## 7. 共享来源与后续边界

共享权威为[Global Chrome V0.5](../../../../docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md)、[CTA增补V1.0](../../../../brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md)、[生产Logo Manifest V1.0](../../../../brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md)、[Footer法律增补V1.0](../../../../docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md)、[法律当前Manifest V1.3](../../../legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md)和[Consent V1.1](../../../legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md)。本页冻结组合实际消费[页面中立共享包V0.2](../../../../docs/architecture/gate3-shared-consumer-v0.2/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md)，不从其他业务页复制。

Gate 5仍需完成1440/768/390完整视觉及适用状态。候选URL mapping/indexing、Products/Documents接收、外链即时可用性、生产Cookie、真实设备、读屏、浏览器UI缩放及开发验收分别留给后续获授权Gate和对应owner。本交接就绪不授权其中任何工作。

## 8. 诊断支持证据

需要追溯时再读取[执行证据目录](RES-CHEMOURS_GATE3_EXECUTION_EVIDENCE_V0.1/)，其中保留旧候选、分段图、测量JSON、共享色Finding、helper失败和独立运行结果。`RESCH-PF-SHARED-01`已在冻结前通过共享包V0.2关闭；当前有效页面Finding为0。
