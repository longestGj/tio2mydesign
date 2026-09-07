# MARKET-IN-001 Current Gate Baseline Manifest V0.1

## 1. 当前状态与范围

| 字段 | 当前值 |
|---|---|
| Page ID / Page root | MARKET-IN-001 / pages/markets/india/ |
| Identity | India / EN / /markets/india/ / P0 / site_scope=tio2-my |
| Primary keyword | titanium dioxide supplier india |
| Date / Version | 2026-09-06 / V0.1 |
| Lifecycle | BRIEF_IN_REVIEW |
| Review ID / Status | MARKET-IN-001-G1-01 / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL |
| Current Gate | Gate 1 research and intent confirmation |
| Content checkpoint | CONTENT_INTENT_CONFIRMED=PENDING_USER_CONFIRMATION |
| User approval date | Not granted; no date recorded |
| Next Gate | Gate 2 NOT_STARTED / NOT_AUTHORIZED; a separate Controller owns Gate 2 |

执行授权为用户逐页完成Gate1、一个确认一个，以及本轮确认Belgium后“继续”的India派发。执行子代理使用项目Agent与真实Skill，自检提交不等于总控复审或用户批准。当前本页没有第二份Manifest；首次检索未发现独立India旧Brief/单页Gate1包。既有2026-08-29全站研究是上游资料，不是本页已批准成果。

以下路径均相对 `D:/23MySec/`。Manifest不记录自身哈希，避免循环。

## 2. 四项核心交付

| Role | 当前文件 | Bytes | SHA-256 |
|---|---|---:|---|
| Complete Brief | docs/page-briefs/MARKET-IN-001_INDIA_BRIEF_V0.1.md | 11343 | 3F4E43E83FEBFA0C19C786FB51457E23D280738D75D096689A56171F656A91DC |
| Agent synthesis | pages/markets/india/01_research/MARKET-IN-001_GATE1_RESEARCH_REPORT_V0.1.md | 13126 | 63B16342175FDEBBFE5EBEA5C8899752D82E84718F2192DE98D2ADF95AB502BA |
| Claim / evidence register | pages/markets/india/01_research/MARKET-IN-001_GATE1_CLAIM_EVIDENCE_REGISTER_V0.1.csv | 10182 | FC09E14A146A77473E0C43FE0A13AEBB5B2F52B9C9A5531562E85053CD5C05DB |
| Current combination / governance | pages/markets/india/MARKET-IN-001_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md | self | no self-hash |

Brief §2是八项页面意图卡，§6是两项待确认；研究负责复用/缺口、发现与反例、优先级、owner和后续输入；CSV共有20个稳定命题ID，区分项目事实、观察、推论、待确认和外部实时结论。此包没有最终整页文案或模块序，不替代Gate2。

## 3. 方法及原始支持资料

| Role | 文件 | Bytes | SHA-256 |
|---|---|---:|---|
| Skill method report | pages/markets/india/01_research/MARKET-IN-001_SEARCH_INTENT_EVIDENCE_V0.1.md | 11115 | E0187995B40791D9E6E318A9255A16C8102505E9FA5EA49803EC5DD3E95F7C80 |
| Raw index | pages/markets/india/01_research/evidence/MARKET-IN-001_RAW_EVIDENCE_INDEX_V0.1.csv | 1437 | 2AF546264D9953C3C25F16E2980AE9661FF1D4313AC5D9A741C40A34A874562B |
| Independent project-control review | pages/markets/india/05_review/MARKET-IN-001_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md | 6090 | 4FDC0F2D2BA7BF9E195B03D7C1345C69336A56D4783CC49E0AB091822564443E |

方法是支持报告而非第五项核心。原始索引列出IN-Q01–Q03与IN-P01–P05的实际args/result JSON、字节及SHA，共8份：原词独立调用一次；两次按缺口扩展；四份成功正文和一份保留的timeout。Q02/Q03不是原词结果；search标识不是Google本地排名，编号也不一定是保存顺序。平台、商家品牌、同机构跨年文件及同作者推广分别去重，不把25或31条工具记录当独立市场样本。

实际执行顺序：完整读 `agents/gate1-execution/agent.md` → 完整读并使用 `skills/search-intent-evidence-analysis/SKILL.md` → 保存actual args/result → 来源分层/正文与反例 → 保存方法MD并全文读回 → Agent综合四核心。执行Agent负责判断；Skill不自行决定页面架构或用户事实。

历史指标复用：`research/keyword/raw/semrush/2026-08-29/in/semrush_in_market_001/manifest.json`及其六份归档文件。in/desktop/11词；原词KD8、price KD22为2026-08-29有限历史观察；Volume/CPC/trend Unavailable。六份文件的bytes/hash已与旧Manifest核对；未声称本轮Semrush更新，也未因有旧数据虚构当前流量。逐词值见方法§4；六份哈希见本段所列历史Semrush manifest.json，方法仅记录核验结果。旧资料未修改。

## 4. 上游权威和消费边界

消费顺序依根AGENTS：最新明确用户决定 → 已批准具体页面合同 → 当前PRD及增补 → 实施关键词主表 → Playbook → 有效证据 → 研究 → 历史。此草案不是新批准；Context/Index仅导航。主要来源：

- `AGENTS.md`、`PROJECT_CONTEXT.md`、`docs/architecture/PAGE_GATE_1_5_STANDARD_V1.1.md`；治理细则适用部分。
- `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`；`docs/architecture/PAGE_REGISTRY_V0.2.md`；`research/keyword/11_page_keyword_master.csv`的India、Markets、RES-TRADE-IN与相关owner行。
- `docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md`；旧conditional RFQ、自动缺证Hold和旧研究栏目的冲突按当前根/批准源解释，不回写历史。
- `docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md`；`docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.5.md`。Malaysia-origin全站授权直接继承；V1.5没有替India批准COO。
- `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`，SHA-256 `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406`；配套 `PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md`。仅中性关系，不制造India专用推荐。
- `pages/conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_MANIFEST_V1.2.md`与 `CONV-RFQ_GATE7_CMS_API_COMPONENT_MAPPING_V1.0.md` §3/7：消费既有single Grade/Application、数量MT、Destination Country等字段；不新增表单。
- `docs/page-briefs/CONV-DOC_REQUEST_DOCUMENTS_BRIEF_V0.4.md` §3：Country / Region仅为联系方/公司所在地，不是文件适用性输入；不以其历史治理文字重开owner状态。

该Manifest没有复制或升级共享关系矩阵。84行×24字段，Application 30 verified / 0 conflict / 54 no-public；唯一Process grade分布8 Chloride / 5 Sulfate / 1 Vapor-phase oxidation。M-2377五类应用+Sulfate中性关系；Specialty不公开，Rubber不建taxonomy；M-996/M-2196 comparison hold 12/12保持。内部计数不是买家文案。

## 5. 两项待用户决定与外部结论边界

| ID | 精确待决定对象 | 当前状态 |
|---|---|---|
| IN-D01 | 面向印度工业TiO2采购/进口和技术评估人员，重点照顾涂料、塑料、母粒制造；以Malaysia-origin供应与产品评估为先，用型号、用途、MT数量和目的地准备可比较询价；主CTA Request a Quote，次CTA Explore Products；贸易细节转RES-TRADE-IN | PENDING_USER_DIRECTION_CONFIRMATION |
| IN-D02 | “A Certificate of Origin is available upon request.”（可按申请提供原产地证书）用于India正文及语义一致的SEO/GEO/social/Schema | PENDING_USER_FACT_CONFIRMATION |

不要重复询问已批准的origin或企业身份。IN-D02是本页新事实范围待确认，不表示企业不能提供COO，也不构成设计停止或永久禁止。用户批准不能扩张成每批自动附证、具体海关待遇或税率结论。

DGTR现行网页只核对案例索引与条目日期，未核读新Final Findings附件及财政实施文件，故不宣称当前税率、豁免或裁定结果；不把历史“财政未核实”当成今天“没有实施”。详细政策研究属RES-TRADE-IN；India页面不变成贸易文章。

## 6. 交付与停止边界

自检包括四核心/支持资料读回、CSV结构及来源、raw哈希、矩阵统计/哈希、状态一致、冲突标记和行尾空白。总控已按§3独立审查记录于2026-09-06授予PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL；执行者仅同步决定，不以自检自授PASS。

当前不得进入Gate2；总控已通过，仍需用户确认IN-D01/IN-D02及后续阶段授权。Gate1未APPROVED/CLOSED，BRIEF_IN_REVIEW保持。即使确认方向，也不授权开发/上线。未建立Brazil、子页、脚本、代码或测试；未修改共享入口/主表/矩阵；未操作 `D:/16Wordpress_nextjs`。

## 7. 版本记录

| Date | Version | Change | Governance |
|---|---|---|---|
| 2026-09-06 | V0.1 | India Gate1首轮四核心及方法/raw交接；继承既有身份/事实，记录两项待决定 | DRAFT_FOR_PROJECT_CONTROL_REVIEW |
| 2026-09-06 | V0.1治理同步 | 引用独立总控审查，更新Brief/研究hash；命题、raw和事实不改 | PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL |
