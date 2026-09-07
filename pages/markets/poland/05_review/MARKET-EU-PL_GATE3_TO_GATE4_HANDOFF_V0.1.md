# MARKET-EU-PL Gate 3 → Gate 4 Handoff V0.1

## 1. 身份与权限

| 字段 | 当前值 |
|---|---|
| 状态 | `READY_FOR_GATE4_WHEN_AUTHORIZED` |
| Page ID / 页面 / 语言 | `MARKET-EU-PL` / Poland市场页 / EN |
| URL / site_scope | `/markets/poland/` / `tio2-my` |
| 当前导航 | `Markets`（`MARKET-000`）；Footer不显示当前项 |
| 当前阶段入口 | [Manifest V0.13](../MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.13.md) |
| Gate 3批准 | [用户批准与关闭V0.1](MARKET-EU-PL_GATE3_USER_APPROVAL_AND_CLOSURE_V0.1.md)，决定`PL-G3-APPROVAL-01`，2026-09-07 |
| Gate 4状态 | `NOT_AUTHORIZED`；本文件只让批准组合可被直接接收，不启动视觉方向 |

本交接表执行[Gate 3→Gate 4成果交接合同V0.1](../../../../docs/superpowers/specs/2026-09-07-gate3-to-gate4-handoff-contract-v0.1.md)。它不复制Buyer Copy、不改变Gate 3批准组合，也不建立第二个阶段权威。

## 2. 批准核心入口

| 对象 | 当前身份与用途 |
|---|---|
| Brief | [MARKET-EU-PL Poland Brief V0.2](../../../../docs/page-briefs/MARKET-EU-PL_POLAND_BRIEF_V0.2.md)，`776911ed…152c9`；页面意图、读者与职责边界 |
| A：内容骨架 | [Gate 2 Skeleton V0.2](../04_planning/MARKET-EU-PL_GATE2_CONTENT_SKELETON_V0.2.md)，`9dc1d04d…7c9a`；五模块顺序和任务 |
| B：唯一可见正文源 | [Full Buyer Clean Copy V0.2](../04_planning/MARKET-EU-PL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md)，`ef55a67f…15aa`；Gate 4不得从本表重建或改写正文 |
| C：内容/行为合同 | [Content Contract V0.4](../04_planning/MARKET-EU-PL_GATE2_CONTENT_CONTRACT_V0.4.md)，`77976a11…0b30`；动作目标、接收边界、SEO/GEO/Schema边界 |
| Gate 3冻结源 | [响应式HTML V0.1](../04_planning/gate3-v0.1/MARKET-EU-PL_GATE3_RESPONSIVE_WIREFRAME_V0.1.html)，16,354 bytes，`2828406c99e52a3cd3990a06014284b18242f71ae7913d17925df474b9fe160a` |
| 资产清单 | [asset-inventory.json](../04_planning/gate3-v0.1/asset-inventory.json)，`08a3d6fa…a21d`；绑定8张正式图及冻结依赖 |
| Gate 3核验 | [执行自检](MARKET-EU-PL_GATE3_EXECUTION_SELF_CHECK_V0.1.md)与[总控独立审查](MARKET-EU-PL_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md)；PL-G3-D01/D02均已修复复验 |

## 3. 已锁定结构

模块顺序固定为：Hero → Confirm the Material You Need → Prepare Your Product Review → Documents for Product and Supplier Review → Request a Quote for Delivery to Poland。

| 模块 | 已锁定的读者任务、内容关系与行动 |
|---|---|
| Hero | 识别Malaysia-origin工业TiO2原料与Poland采购语境；主行动进入`/request-a-quote/`，次行动进入`/products/` |
| Confirm the Material You Need | TiO2原料与成品white masterbatch保持同段解释，不把二者视觉上混成同一商品 |
| Prepare Your Product Review | Coatings与Plastics and masterbatch是两类并列的自助评估语境，共同导向中性Products入口；不形成牌号推荐或适用性排名 |
| Documents for Product and Supplier Review | 三段说明保持连续：已知Grade时请求TDS/SDS/COA/origin documentation、COO可请求、未知Grade时转Products或RFQ；行动为`/request-documents/`和`/documents/` |
| Request a Quote for Delivery to Poland | application、required/estimated quantity、Poland delivery location、未知/多Grade路径和人工联系预期保持完整；主行动为`/request-a-quote/`，次行动为`/markets/european-union/` |
| Shared Chrome / Footer | Header、Mobile Menu、固定RFQ、Footer法律与Cookie Settings由共享owner控制；本页只声明Markets当前项并证明页面闭合 |

本页没有页面内表单、FAQ、表格、选择器、媒体、空值或提交状态。Gate 4不得为展示组件而新增这些结构。

## 4. 组件、视口与状态矩阵

| 区域 | 1440结构 | 768结构 | 390结构 | 必要状态与正式证据 | owner |
|---|---|---|---|---|---|
| Shared Header | 84px；Desktop导航显示Markets当前项 | 64px；紧凑Header | 64px；紧凑Header | [768 Menu](../04_planning/gate3-v0.1/MARKET-EU-PL_G3_MENU_768_V0.1.png)、[390 Menu](../04_planning/gate3-v0.1/MARKET-EU-PL_G3_MENU_390_V0.1.png) | Global Chrome |
| Hero | H1 54px；内容最大宽约930；两行动 | H1 44px；内容自然换行 | H1 36px；行动单列、主行动全宽 | 三端全页首屏 | 页面结构＋接收页owner |
| Confirm material | 标题约340px与正文左右分区 | 标题先于正文 | 单列 | 三端全页 | 页面 |
| Product review | Coatings与Plastics/masterbatch并列 | 两类仍并列，间距32px | 两类按标题—说明完整单列 | 768与390全页最能证明关系 | 页面＋PRODUCT-000 |
| Documents | 标题/内容及两行动分区 | 自然流单列 | 三段说明和两行动完整单列 | 390全页最能证明长内容 | 页面＋CONV-DOC/DOC-000 |
| Final RFQ | 标题/正文分区；两行动 | 单列 | 主行动全宽；EU长链接自然换行 | 390全页末段 | 页面＋CONV-RFQ/MARKET-EU-001 |
| Footer / Cookie | Footer闭合 | Footer闭合 | Footer闭合 | [1440 Cookie](../04_planning/gate3-v0.1/MARKET-EU-PL_G3_COOKIE_1440_V0.1.png)、[768 Cookie](../04_planning/gate3-v0.1/MARKET-EU-PL_G3_COOKIE_768_V0.1.png)、[390 Cookie](../04_planning/gate3-v0.1/MARKET-EU-PL_G3_COOKIE_390_V0.1.png) | Footer法律／Consent owner |

正式完整线框：[1440，1440×2387](../04_planning/gate3-v0.1/MARKET-EU-PL_G3_FULL_1440_V0.1.png)、[768，768×2854](../04_planning/gate3-v0.1/MARKET-EU-PL_G3_FULL_768_V0.1.png)、[390，390×3810](../04_planning/gate3-v0.1/MARKET-EU-PL_G3_FULL_390_V0.1.png)，均为对应logical width @1x。

## 5. Gate 4可决定与不得改变

Gate 4可以在批准品牌系统内决定颜色用途、字体层级、间距、表面层级、行动外观、两类应用关系的视觉区分、文件说明区的阅读节奏、焦点/悬停方向，以及有证据媒体和无图片回退的方向。若媒体会增加新区块或改变内容关系，应交回结构owner，不直接加入。

Gate 4不得改变B正文、五模块顺序、三端重排关系、CTA标签和目标、RFQ/Document字段或预填、TiO2原料与white masterbatch边界、COO限定、Markets当前项、共享Chrome/法律合同，也不得暗示Poland办公室、库存、MOQ、交期、物流能力、贸易待遇、牌号适用性或认证。

## 6. 页面专属视觉风险与代表样例

| 风险位置 | Gate 4需要证明的问题 | 建议代表视口 |
|---|---|---|
| Hero | Malaysia-origin原料、Poland采购语境与两行动的层级清楚，不制造本地经营暗示 | 1440＋390 |
| Product review | Coatings和Plastics/masterbatch既可比较又不混淆；Tablet并列、Mobile对应关系不丢失 | 768＋390 |
| Documents | 三段限定和两条行动在高密度文本中仍易扫读；COO句不被视觉放大成普遍证书承诺 | 390 |
| Final RFQ | 未知Grade、多Grade和人工联系预期保持顺序；长EU链接完整、不过度抢主行动 | 390 |
| Shared states | Menu、Cookie及深浅背景焦点方向与当前共享owner一致 | 768 Menu＋390 Cookie |

## 7. 共享来源与后续边界

共享权威为[Global Chrome V0.5](../../../../docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md)、[CTA增补V1.0](../../../../brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md)、[生产Logo Manifest V1.0](../../../../brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md)、[Footer法律增补V1.0](../../../../docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md)、[法律当前Manifest V1.3](../../../legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md)和[Consent V1.1](../../../legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md)。[页面中立Gate 3消费包](../../../../docs/architecture/gate3-shared-consumer-v0.1/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.1.md)是后续规划消费入口，不反向改变本页已批准快照。

Gate 5仍需完成1440/768/390完整视觉及适用状态。生产路由、RFQ/Document接收和可编辑预填、真实提交、生产Cookie、真实设备、读屏、浏览器UI缩放及开发验收分别留给Gate 7–9及对应owner。本交接就绪不授权其中任何工作。

## 8. 诊断支持证据

需要追溯时再读取[执行证据目录](MARKET-EU-PL_GATE3_EXECUTION_EVIDENCE_V0.1/)和[总控证据目录](gate3-project-control-v0.1/)，其中保留分段图、测量JSON、已修复attempt和重复独立证据。当前有效Gate 3 Finding为零；PL-G3-D01/D02仅作为已关闭历史，不是Gate 4待修视觉项。

