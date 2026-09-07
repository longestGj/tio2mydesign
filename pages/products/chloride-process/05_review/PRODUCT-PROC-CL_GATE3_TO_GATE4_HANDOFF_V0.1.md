# PRODUCT-PROC-CL Gate 3 → Gate 4 Handoff V0.1

## 1. 身份与权限

| 字段 | 当前值 |
|---|---|
| 状态 | `READY_FOR_GATE4_WHEN_AUTHORIZED` |
| Page ID / 页面 / 语言 | `PRODUCT-PROC-CL` / Chloride Process产品聚合页 / EN |
| URL / site_scope | `/products/chloride-process-titanium-dioxide/` / `tio2-my` |
| 当前导航 | `Products`（`PRODUCT-000`）；Footer不显示当前项 |
| 当前阶段入口 | [Manifest V0.15](../PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.15.md) |
| Gate 3批准 | [用户批准与关闭V0.1](PRODUCT-PROC-CL_GATE3_USER_APPROVAL_AND_CLOSURE_V0.1.md)，2026-09-07用户回复“批准。” |
| Gate 4状态 | `NOT_AUTHORIZED`；本文件只让批准组合可被直接接收，不启动视觉方向 |

本交接表执行[Gate 3→Gate 4成果交接合同V0.1](../../../../docs/superpowers/specs/2026-09-07-gate3-to-gate4-handoff-contract-v0.1.md)。它不复制Buyer Copy、不改变Gate 3批准组合，也不建立第二个阶段权威。

## 2. 批准核心入口

| 对象 | 当前身份与用途 |
|---|---|
| Brief | [PRODUCT-PROC-CL Brief V0.2](../../../../docs/page-briefs/PRODUCT-PROC-CL_CHLORIDE_PROCESS_TITANIUM_DIOXIDE_BRIEF_V0.2.md)，`601cef82…8da7`；页面意图、读者与产品关系边界 |
| A：内容骨架 | [Gate 2 Skeleton V0.4](../04_planning/PRODUCT-PROC-CL_GATE2_CONTENT_SKELETON_V0.4.md)，`56acf80c…c90d`；五模块和八牌号顺序 |
| B：唯一可见正文源 | [Full Buyer Clean Copy V0.2](../04_planning/PRODUCT-PROC-CL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md)，`b4314b4b…3a0d`；Gate 4不得从本表重建或改写正文 |
| C：内容/行为合同 | [Content Contract V0.6](../04_planning/PRODUCT-PROC-CL_GATE2_CONTENT_CONTRACT_V0.6.md)，`c0a4554d…87c0`；锚点、Grade入口、接收归因与事实边界 |
| Gate 3冻结源 | [响应式HTML V0.1](../04_planning/gate3-v0.1/PRODUCT-PROC-CL_GATE3_RESPONSIVE_WIREFRAME_V0.1.html)，22,064 bytes，`2887150f659ceec3de26feb9a41fa961da22e0fcc705cb538f085d0615ae2f91` |
| 资产清单 | [asset-inventory.json](../04_planning/gate3-v0.1/asset-inventory.json)，50,693 bytes，`a95cf289…773b`；绑定11张正式图及冻结依赖 |
| Gate 3核验 | [执行自检](PRODUCT-PROC-CL_GATE3_EXECUTION_SELF_CHECK_V0.1.md)与[总控独立审查](PRODUCT-PROC-CL_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md)；当前有效Finding为零 |

## 3. 已锁定结构

模块顺序固定为：Hero → What the Chloride Process Tells You → Explore Chloride-Process Grades → How to Evaluate a Chloride-Process Grade → Discuss Your Chloride-Process TiO2 Requirement。

| 模块 | 已锁定的读者任务、内容关系与行动 |
|---|---|
| Hero | 识别八个Malaysia-origin chloride-process grades、应用范围和下一步；主行动滚动至`#explore-chloride-process-grades`，次行动进入`/request-a-quote/` |
| Process explanation | 工艺高层解释与“process label不单独决定Grade表现”的限制同模块保留；链接进入`/resources/chloride-vs-sulfate-titanium-dioxide/` |
| Eight-Grade directory | 一个连续、无排名的列表，顺序固定为M-350、M-510、M-896、M-895、M-200、M-210、M-340、M-886；每项名称、完整摘要和专属URL保持绑定 |
| Three-step evaluation | Define intended system → Review the exact Grade → Validate and collect information；五类应用例子不扩张成Grade矩阵；行动为`/applications/`和`/request-documents/` |
| Final RFQ | 已知Grade或`Not sure / Need help`、application、quantity、destination与人工联系预期保持完整；行动进入`/request-a-quote/` |
| Shared Chrome / Footer | Header、Mobile Menu、固定RFQ、Footer法律与Cookie Settings由共享owner控制；本页只声明Products当前项并证明页面闭合 |

本页没有页面内表单、筛选器、选择器、FAQ、技术表、动态推荐、媒体、空结果或提交状态。Grade入口是普通导航，不隐式选择RFQ或Documents字段。

## 4. 组件、视口与状态矩阵

| 区域 | 1440结构 | 768结构 | 390结构 | 必要状态与正式证据 | owner |
|---|---|---|---|---|---|
| Shared Header | 84px；Desktop导航显示Products当前项 | 64px；紧凑Header | 64px；紧凑Header | [768 Menu](../04_planning/gate3-v0.1/PRODUCT-PROC-CL_G3_MENU_768_V0.1.png)、[390 Menu](../04_planning/gate3-v0.1/PRODUCT-PROC-CL_G3_MENU_390_V0.1.png) | Global Chrome |
| Hero | H1 54px；两行动 | H1 44px | H1 36px；主行动全宽 | 三端全页首屏 | 页面＋CONV-RFQ |
| Process explanation | 标题约340px与正文分区 | 标题先于正文 | 单列 | 三端全页 | 页面＋RES-PROC |
| Eight-Grade directory | 名称约160px／摘要弹性／入口约150px三列 | 每项名称＋入口在左约116px，完整摘要在右 | 每项名称→完整摘要→入口单列 | [1440 Anchor](../04_planning/gate3-v0.1/PRODUCT-PROC-CL_G3_ANCHOR_1440_V0.1.png)、[768 Anchor](../04_planning/gate3-v0.1/PRODUCT-PROC-CL_G3_ANCHOR_768_V0.1.png)、[390 Anchor](../04_planning/gate3-v0.1/PRODUCT-PROC-CL_G3_ANCHOR_390_V0.1.png) | 页面＋八个Grade owner |
| Three-step evaluation | 步骤标题与解释分区 | 三步连续自然流 | 三步完整单列 | 三端全页 | 页面＋APP-000/CONV-DOC |
| Final RFQ | 标题/正文分区 | 单列 | 主行动全宽 | 三端全页末段 | 页面＋CONV-RFQ |
| Footer / Cookie | Footer闭合 | Footer闭合 | Footer闭合 | [1440 Cookie](../04_planning/gate3-v0.1/PRODUCT-PROC-CL_G3_COOKIE_1440_V0.1.png)、[768 Cookie](../04_planning/gate3-v0.1/PRODUCT-PROC-CL_G3_COOKIE_768_V0.1.png)、[390 Cookie](../04_planning/gate3-v0.1/PRODUCT-PROC-CL_G3_COOKIE_390_V0.1.png) | Footer法律／Consent owner |

正式完整线框：[1440，1440×3301](../04_planning/gate3-v0.1/PRODUCT-PROC-CL_G3_FULL_1440_V0.1.png)、[768，768×4238](../04_planning/gate3-v0.1/PRODUCT-PROC-CL_G3_FULL_768_V0.1.png)、[390，390×5781](../04_planning/gate3-v0.1/PRODUCT-PROC-CL_G3_FULL_390_V0.1.png)，均为对应logical width @1x。

## 5. Gate 4可决定与不得改变

Gate 4可以在批准品牌系统内决定颜色用途、字体层级、间距、表面层级、八条Grade目录的可扫读视觉规律、步骤表达、行动外观、焦点/悬停方向，以及有证据媒体和无图片回退的方向。若媒体会增加新区块、改变目录列关系或造成Grade性能比较，应交回结构/事实owner。

Gate 4不得改变B正文、五模块顺序、八个Grade的数量/顺序/名称/摘要/URL、三端目录重排、锚点目标和移焦语义、CTA标签和目标、source-only归因、RFQ/Document预填规则、Products当前项或共享Chrome/法律合同。不得以颜色、徽章、排序或图片制造Grade排名、推荐、等价、替代、比较优势、认证或超出批准摘要的性能结论。

## 6. 页面专属视觉风险与代表样例

| 风险位置 | Gate 4需要证明的问题 | 建议代表视口 |
|---|---|---|
| Hero | 八Grade范围、应用语境和锚点/RFQ行动层级清楚；首行动确实被理解为页内浏览 | 1440＋390 |
| Eight-Grade directory | 八项有稳定扫描规律但不呈现排名；最长M-896摘要不被截短或显得更受推荐 | 1440＋768＋390 |
| Tablet目录 | 左侧名称＋入口与右侧摘要仍属于同一Grade，连续八项不会错配 | 768 |
| Mobile目录 | 名称→摘要→入口的单条边界明确，长页面仍易定位和返回阅读 | 390＋Anchor状态 |
| Three-step evaluation | 三步顺序和解释保持连续，五类应用例子不被视觉重组为Grade适用矩阵 | 768＋390 |
| Shared states | Menu、Cookie、锚点焦点及深浅背景焦点方向一致 | 768 Menu＋390 Cookie＋390 Anchor |

## 7. 共享来源与后续边界

共享权威为[Global Chrome V0.5](../../../../docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md)、[CTA增补V1.0](../../../../brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md)、[生产Logo Manifest V1.0](../../../../brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md)、[Footer法律增补V1.0](../../../../docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md)、[法律当前Manifest V1.3](../../../legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md)和[Consent V1.1](../../../legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md)。[页面中立Gate 3消费包](../../../../docs/architecture/gate3-shared-consumer-v0.1/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.1.md)是后续规划消费入口，不反向改变本页已批准快照或以Poland作为母版。

Gate 5仍需完成1440/768/390完整视觉及适用状态。生产路由、八个Grade页可达性、RFQ/DOC接收与`source_page_id=PRODUCT-PROC-CL`归因、真实提交、生产Cookie、真实设备、读屏、浏览器UI缩放及开发验收分别留给Gate 7–9及对应owner。本交接就绪不授权其中任何工作。

## 8. 诊断支持证据

需要追溯时再读取[执行证据目录](PRODUCT-PROC-CL_GATE3_EXECUTION_EVIDENCE_V0.1/)和[总控证据目录](gate3-project-control-v0.1/)，其中保留分段图、测量JSON、完整交互观察、身份复算和重复独立证据。本页冻结候选首版通过，当前有效Gate 3 Finding为零。

