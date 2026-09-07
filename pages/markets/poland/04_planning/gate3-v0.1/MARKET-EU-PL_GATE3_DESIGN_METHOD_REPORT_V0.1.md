# MARKET-EU-PL · Gate 3 设计方法报告 V0.1

2026-09-07 · DRAFT_FOR_PROJECT_CONTROL_REVIEW · 执行 Agent，自检不是独立批准。

本次是实际波兰市场页首次 Gate 3。用户授权及当前组合为 [MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.11.md](D:/23MySec/pages/markets/poland/MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.11.md) 与 [MARKET-EU-PL_GATE3_USER_AUTHORIZATION_V0.1.md](D:/23MySec/pages/markets/poland/05_review/MARKET-EU-PL_GATE3_USER_AUTHORIZATION_V0.1.md)；完整 Brief V0.2、A V0.2、B V0.2、C V0.4 的精确路径、字节数及实算 SHA-256 见 [asset-inventory.json](D:/23MySec/pages/markets/poland/04_planning/gate3-v0.1/asset-inventory.json) 的 inputs。B 是唯一可见正文源，生成器直接读取并按批准块序映射；没有编辑 A/B/C、Brief、当前 Manifest 或共享源。

已按 [agent.md](D:/23MySec/agents/gate3-execution/agent.md) 启动并读取适用根规则、Context、登记/关键词本页及竞争归属、Market Playbook、治理与 Gate 标准、批准上游和当前共享合同。设计实际使用 [SKILL.md](D:/23MySec/skills/responsive-wireframe-design/SKILL.md)：映射内容、三端重排、离线渲染、整页及重叠分段查看、修正后重导。核验实际使用 [SKILL.md](D:/23MySec/skills/layout-interaction-verification/SKILL.md)，输出单独的执行自检，不借方法名称提升审查身份。

## 内容至布局

| B 的模块位置 | 读者判断与保留关系 | 三端结构 |
|---|---|---|
| PL01 / H1、Hero、面包屑 | 确认波兰工业采购范围，进入报价或产品 | 1440 H1 54px、内容最大宽930；768 H1 44px；390 H1 36px、行动单列 |
| PL02 / Confirm the Material You Need | 原料 TiO2 与成品白色母粒区分，完整限定仍在同段 | Desktop 标题340px＋正文；Tablet/Mobile 标题先于正文 |
| PL03 / Prepare Your Product Review | 不知道牌号也可开始；Coatings 与 Plastics and masterbatch 各自解释不混合 | 1440 两列；768 独立采用两列、32px间距；390 按标题和解释完整单列 |
| PL04 / Documents for Product and Supplier Review | 文件类型、COO 可请求、未定牌号下一步及两条行动相邻 | Desktop 两区；768/390 自然流单列，三段及限定不折叠 |
| PL05 / Request a Quote for Delivery to Poland | 需求信息、多个牌号在 Additional Requirements、团队回复承诺和EU上级入口 | 完整三段后两行动；390 主行动全宽、上级链接自然换行 |

正文7个标题、11段正文、10个正文/面包屑链接保留准确文字和目标，五模块顺序不变。本页没有表单、FAQ、表格、条件选择、图片或提交状态；未添加以演示为目的的控件。B 中未知牌号与多牌号说明属于接收页合同，不转造本页表单。C 的 SEO/Schema 边界继续由批准合同控制，本规划稿不是 SEO/Schema 实现。

## 共享消费与结构取舍

优先复用 D23 CONV-DOC 只读共享组装源（路径及 hashes 在 source-binding.json 与 inventory.dependencies）。正式 HTML 读取随交付保存的 CSS/Inter，不依赖临时目录作为唯一显示依赖。JSON/CSS/字体及OFL五个快照与原文件逐字节 hash 一致；快照只是复现证据，不成为共享新权威。原组件 TSX 是行为/组装参考，未复制或改写 owner 实现；生产SVG仍直接引用批准正式资产路径，身份见 inventory.logos。

| 当前合同依据 | 对旧共享快照的本地正确消费 |
|---|---|
| GLOBAL_HEADER_FOOTER_SPEC_V0.5.md 及未替代的 V0.1 基线；固定 RFQ 与 Procurement 后续决定 | Markets 为当前导航，视觉粗体＋下划线/左线，不显示 CURRENT；固定RFQ，移动标签RFQ，Menu展开后Close；Footer中性原句与Procurement |
| brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md、品牌标准 | 功能色#008078；Inter；Header84/64；Logo180×60/120×40；控件实际命中区至少44×44；正文上下文行动采用描边/文本层级 |
| GLOBAL_HEADER_FOOTER_LOGO_ASSET_ADDENDUM_V1.0.md、PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md | 正版彩色与反白SVG，保留原路径、形状、比例，不另制Logo |
| GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md、LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md | Privacy Policy、Dasar Privasi (BM)、Cookie Policy、Cookie Settings及版权；BM准确路径/ms/privacy-policy/；不恢复Terms |
| LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md、SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md及其合同 | no_optional_analytics，沿用当前共享Cookie settings标题、正文和两操作；无可选分析开关或首访Banner |

上述依据位于 D:/23MySec/docs/architecture、D:/23MySec/brand 和 D:/23MySec/pages/legal-privacy/05_review 的对应正式文件，原文件已实际读取。最高版本号没有单独取代继承判断：V0.1未替代的尺寸/文字仍有效；旧CURRENT、RFQ-OFF、Conversion和无法律链接规则被后续批准覆盖。Market Playbook旧两端/Hub限制服从当前Brief、B/C与完整三端要求。

## 资产与复现

当前可编辑源：[MARKET-EU-PL_GATE3_RESPONSIVE_WIREFRAME_V0.1.html](D:/23MySec/pages/markets/poland/04_planning/gate3-v0.1/MARKET-EU-PL_GATE3_RESPONSIVE_WIREFRAME_V0.1.html)，SHA-256 2828406c99e52a3cd3990a06014284b18242f71ae7913d17925df474b9fe160a。生成与渲染辅助脚本位于同目录 build-pl-wireframe.cjs、render-design.cjs；打开HTML只需正式依赖目录与原生产SVG。重新生成另需批准B和source-binding列出的只读溯源文件。已有PNG无需脚本即可查看。

三张全页：1440×2387、768×2854、390×3810，均对应逻辑宽1440/768/390、DPR1。菜单768/390及Cookie1440/768/390五张状态均为逻辑高1000、DPR1。完整绝对路径、角色、逻辑视口、物理尺寸、比例、状态、字节和SHA-256在 [render-evidence.json](D:/23MySec/pages/markets/poland/04_planning/gate3-v0.1/render-evidence.json) 与 [asset-inventory.json](D:/23MySec/pages/markets/poland/04_planning/gate3-v0.1/asset-inventory.json)；后者也列正式依赖、Logo、辅助脚本及自检证据身份，不登记自身hash、不替代页面Manifest。

使用已提供 Node/Playwright 与本地Chrome 152.0.7977.82，在字体ready及SVGdecode后导出。执行命令为提供的node.exe加相应cjs绝对路径；具体node/playwright/Chrome路径保存在render-design.cjs与verify-layout.cjs。没有网络请求、表单发送、生产访问、D16操作或付费工具。

## 实际查看、修正和限制

实际打开三端全页检查结构，并逐张看重叠分段（1440四张、768四张、390六张），覆盖正文全部、行动和Footer；菜单两端、Cookie三端、CTA focus/hover三端及200%等效reflow状态也已实际打开。最新Footer法律行与相邻区域复验，三端图和适用状态均重导且身份一致。

保留 attempt-1 和 attempt-2 的前版HTML/source-binding/render-evidence，以及自检目录的前轮测量和 before-legal-row-alignment.png。前版缺陷不是最终结果：PL-G3-D01临时唯一依赖已随正式快照修复；PL-G3-D02菜单链接只记录意图未关闭，已改为选择后关闭并复原背景；PL-G3-SC01法律button与链接纵向对齐不统一，已统一44px内垂直居中。菜单左对齐与展开背景滚动锁定也完成。旧记录未覆盖，旧PNG未全部另存，不能据旧记录重建每张旧图。

本地实际操作与精确结果在 [measurements-and-actions.json](D:/23MySec/pages/markets/poland/05_review/MARKET-EU-PL_GATE3_EXECUTION_EVIDENCE_V0.1/measurements-and-actions.json)，结论及四项风险在 [MARKET-EU-PL_GATE3_EXECUTION_SELF_CHECK_V0.1.md](D:/23MySec/pages/markets/poland/05_review/MARKET-EU-PL_GATE3_EXECUTION_SELF_CHECK_V0.1.md)。所有链接准确保留href，但点击仅在本地记录导航意图；未证明目的页、预填、提交、收件、生产Cookie运行或法律合规。200%证据是CSS720×500、DPR2模拟1440×1000物理画面的reflow，不是浏览器UI缩放或真实设备。没有语音读屏/真实触屏检验。

已完成本授权范围内交付，没有已知未解决的Gate3布局缺陷；需总控独立审查和用户决定，本执行方不予批准、不进入Gate4。
