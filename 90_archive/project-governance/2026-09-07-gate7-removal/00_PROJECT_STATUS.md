# TiO2 Malaysia · 当前项目状态

> 快照：2026-09-07 / V0.246。用户授权Gate 2 Controller对12个Gate1已关闭、Gate2未开始页面按DOC-COO起始的固定队列串行完成Full Copy、独立Buyer Review与总控复核；中间不逐页提交用户，全部完成后统一由用户审核；该Gate2合同本身不授权Gate3，后续八页Gate3串行授权见第二段。批次合同见 `docs/architecture/GATE2_SERIAL_FULL_COPY_CONTROL_V1.1.md`；12页固定串行队列已完成；前七页及RES-R706、EU/UK/India/Brazil五个Resource页均已获用户批准并关闭Gate2，五页批准记录为`G2-5RESOURCE-APPROVAL-01`；用户现已授权这五页按`G3-5RESOURCE-SERIAL-01`使用子代理严格串行执行Gate3。PRODUCT-PROC-CL Gate2全文与模块顺序、Gate3三端线框与关键状态均已获用户批准并关闭，当前Manifest V0.19，Poland与本页Gate4方向均已获用户批准关闭；PRODUCT-PROC-SU、RES-TRADE-EU、RES-TRADE-UK、RES-TRADE-IN与RES-TRADE-BR Gate1均已获用户批准并关闭，其他Gate2由相应controller负责。用户明确“APP都不要”，因此本Gate1串行任务跳过所有Applications页面且不改其现有成果/owner状态；该范围不取消独立的Application文章工作。RES-TRADE-BR的802/2025最终措施、850/2026名单修订、四档税额、Ex-001及公共利益程序边界已经Agent→项目Skill→总控独立复核，并获用户2026-09-06回复“同意”批准`BR-TRADE-D01`；Gate2由其他controller负责。APP-PLAS与APP-INK此前的根目录直出稿均不构成受治理D22成稿，用户要求两篇重新按流程制作；两篇受治理流程均已完成。用户现已批准APP-MB、APP-INK与APP-PAPER三个当前精确成稿作为正式对外内容输入；连同此前获批的APP-COAT与APP-PLAS，五个已登记Application主类目均已有用户批准文章。Application文章Controller后续专责持续发现、评估、排序和派发二级应用文章主题；D22只负责获批题目的文章研究与写作。当前选题总计划已整理5篇已批准主文章、42个候选题材及28个逐题研究单元；用户已批准R01 WRITE方向；首版D22流程虽已关闭并经D23核对，但用户评审要求读者质量定向修订，当前按A05优先路线剥离后半篇治理/SOP语言，并须重新完成A06/RQR、独立A00及Controller closure；R02及后续单元未启动。所有文章内容批准均不授权页面Gate、HTML、开发或发布。Spain、DOC-COO、Netherlands、Belgium、India、Brazil EN/PT及Sulfate Process的当前Full Copy与模块顺序已获用户批量批准，八页Gate2均关闭；批准组合见G2-8PAGE-APPROVAL-01。Brazil English与Brazil Portuguese Gate1均已批准关闭；PT-BR D01方向/CTA、D02葡语COO和D03规划路径已获用户“批准。”确认，V0.2批准组合及决定登记V1.8已完成。由本Controller负责的新Market页面Gate1串行队列至此全部完成。Belgium、India、Netherlands、Poland、Italy既有决定保持。RES-PROC既有比较审查及其他任务状态不在本轮改写，没有新增开发或发布授权。“已通过”均指已有记录；运行时依赖须在发布前新鲜复验，历史探针不是今天的结果。

2026-09-07用户已授权新的七页Gate 2 Full Copy批次，固定顺序为Germany、Italy、Coatings、Plastics、Masterbatch、Printing Inks、Paper；必须完成一页的执行、独立Buyer Review、返修复核与总控复核后才启动下一页，全部完成后统一交用户审核。当前Germany已启动，其余排队；详见[七页串行控制V1.0](docs/architecture/GATE2_REMAINING_SEVEN_SERIAL_FULL_COPY_CONTROL_V1.0.md)。本授权不关闭Gate 2，不授权Gate 3–10或开发发布。

八页Gate 2批准事件已登记于 [G2-8PAGE-APPROVAL-01](docs/architecture/GATE2_EIGHT_PAGE_USER_APPROVAL_AND_CLOSURE_V1.0.md)。该决定只覆盖用户列出的八页；RES-R706、RES-TRADE-EU及其他页面继承原状态。`G3-8PAGE-SERIAL-01`已完成：同一八页由子代理严格串行执行Gate 3，每页通过硬预检、冻结、正式证据、自检及总控独立审查后按用户预授权关闭；最终审计确认8个冻结源、64张正式图及全部审查/关闭/交接记录，身份差异0。用户另已授权[G4-8PAGE-SERIAL-01](docs/architecture/GATE4_EIGHT_PAGE_SERIAL_CONTROL_V1.0.md)：Gate 4按相同顺序连续逐页执行，审查完成后按预认可关闭；原定时监控已依用户新指示删除。[批次进度](docs/architecture/GATE4_EIGHT_PAGE_SERIAL_PROGRESS.md)。Gate 5未由此授权。用户随后授权[G3-5RESOURCE-SERIAL-01](docs/architecture/GATE3_FIVE_RESOURCE_SERIAL_CONTROL_V1.0.md)，对新盘点出的RES-R706、EU/UK/India/Brazil五个Gate2已关闭Resource页按同一预授权关闭规则严格串行执行Gate3；当前仅RES-R706进行中。

## 1. 总体状态

- 全站架构、PRD、产品资料与研究已存在，见 [PROJECT_CONTEXT](PROJECT_CONTEXT.md)；当前登记册57页，产品14个型号。
- 项目仍是策划/交付/只读验收空间，外部开发由独立开发任务负责。
- Gate 3 Agent/Skill标准化已收口，[当前基线Manifest V1.2](docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.2.md)统一导航V0.2执行角色、两项方法、页面中立共享消费V0.2、独立审查和Gate 3→4交接；[RES-CHEMOURS第三页实测V0.2](docs/superpowers/specs/2026-09-07-gate3-v0.2-live-test-result-v0.2.md)已获用户批准关闭。未授权任何Gate 4。
- 已关闭Gate 9的页面仍可能有生产环境、跨页、表单、隐私或索引验收项；**不等于已上线**。本次没有Gate 10、部署、生产写入、发布、DNS或索引授权。
- 全站原产地旧Hold已由用户批准关闭；事实范围看[决定登记册](docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md)，不能从历史状态恢复限制。
- 原逐次commit/验证数字/阶段过程完整保留在[迁移前V0.157快照](90_archive/project-governance/2026-09-06-entry-restructure/00_PROJECT_STATUS.md)。该历史快照不覆盖下方当前页面指针。

## 2. 页面当前阶段与下一步

Gate1串行controller自2026-09-06起只负责Gate1，用户每确认一页再做下一页；[全站Gate1串行合同与覆盖清单](docs/architecture/GATE1_SITE_WIDE_SERIAL_CONTROL_V1.0.md)。已有后续Gate记录不重做；Gate2由独立controller负责，其定向同步的当前状态以各页Manifest为准。

| 页面 | 已登记阶段 | 下一步 / 当前记录 |
|---|---|---|
| HOME-001 | Gate 9通过，保留release blockers | Tablet Start Here用户决定及全站运行依赖未在本次关闭；[Gate 9关闭记录](pages/home/07_qa/HOME-001_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) |
| MARKET-000 | Gate 9通过，Canonical/308自身P0关闭 | 子市场、APP、转化/Trade等依赖按发布合同复核；[当前Manifest](pages/markets/07_qa/MARKET-000_CURRENT_GATE9_BASELINE_MANIFEST_V0.1.md) |
| MARKET-EU-001 | HANDED_OFF；Gate 8外部进行中（原登记） | 等外部完成与后续授权；[当前授权Manifest V0.18](pages/markets/06_handoff/MARKET-EU-001_CURRENT_GATE8_AUTHORIZATION_MANIFEST_V0.18.md) |
| MARKET-UK-001 | Gate 8完成；Gate 9条件退回/发布阻塞，生命周期READ_ONLY_QA_IN_REVIEW | 已有记录的五类发布阻塞尚未由本次关闭；[当前Manifest V0.7](pages/markets/06_handoff/MARKET-UK-001_CURRENT_GATE8_AUTHORIZATION_MANIFEST_V0.7.md) |
| MARKET-EU-DE | Gate 1 `APPROVED / CLOSED`；`CONTENT_INTENT_CONFIRMED`；独立总控审查PASS | 2026-09-07用户条件批准完成闭环；DE-D02可选企业事实未批准且不阻塞；Gate 2授权及进度由Gate 2 Controller管理；[当前Manifest V0.3](pages/markets/germany/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md) / [独立复审](pages/markets/germany/05_review/MARKET-EU-DE_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md) |
| MARKET-EU-IT | Gate 1 `APPROVED / CLOSED`；方向/CTA与COO事实已批准；`CONTENT_INTENT_CONFIRMED` | 2026-09-07用户条件批准完成阶段闭环；Gate 2授权及进度由Gate 2 Controller管理；[当前Manifest V0.3](pages/markets/italy/MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md) / [关闭记录](pages/markets/italy/05_review/MARKET-EU-IT_GATE1_USER_APPROVAL_AND_CLOSURE_V0.1.md) |
| MARKET-EU-ES | Gate 1–4 `APPROVED / CLOSED`；Gate 5 `AUTHORIZED / IN_PROGRESS` | 当前两个已就绪页面Gate 5串行的第1页；由子代理执行、根任务独立检查。[当前Manifest V0.10](pages/markets/spain/MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md) / [ES-G5-START-01](pages/markets/spain/05_review/MARKET-EU-ES_GATE5_USER_AUTHORIZATION_V0.1.md) / [G5-2PAGE-SERIAL-01](docs/architecture/GATE5_TWO_ELIGIBLE_PAGE_SERIAL_CONTROL_V1.0.md)。结果未预批，Gate 6–10未授权。 |
| MARKET-EU-PL | Gate 1–5 `APPROVED / CLOSED` | 用户认可真实Gate 5精确组合；[当前Manifest V0.19](pages/markets/poland/MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.19.md) / [PL-G5-APPROVAL-01](pages/markets/poland/05_review/MARKET-EU-PL_GATE5_USER_APPROVAL_AND_CLOSURE_V0.1.md) / [Gate 5→6接收](pages/markets/poland/05_review/MARKET-EU-PL_GATE5_TO_GATE6_HANDOFF_V0.1.md)。Gate 6–10及开发发布未授权。 |
| MARKET-EU-NL | Gate 1–3 `APPROVED / CLOSED`；Gate4 `USER_AUTHORIZED / IN_PROGRESS` | DOC-COO关闭后按G4-8PAGE-SERIAL-01串行接手；69项上游身份核对通过。[当前Manifest V0.6](pages/markets/netherlands/MARKET-EU-NL_CURRENT_GATE_BASELINE_MANIFEST_V0.6.md)；保留VVVF归属、三类应用及Netherlands询价上下文 |
| MARKET-EU-BE | Gate 1–3 `APPROVED / CLOSED` | 子代理执行及总控独立审查完成，未解决页面Finding 0；[当前Manifest V0.5](pages/markets/belgium/MARKET-EU-BE_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md)。Gate4未授权 |
| MARKET-IN-001 | Gate 1–3 `APPROVED / CLOSED` | 子代理执行及总控独立审查完成，五模块与贸易边界通过，未解决页面Finding 0；[当前Manifest V0.7](pages/markets/india/MARKET-IN-001_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md)。V0.4模块计数及V0.5哈希转录错误仅为已纠正的治理记录 |
| MARKET-BR-EN | Gate 1–3 `APPROVED / CLOSED` | 子代理执行及总控独立审查完成，五模块与贸易日期边界通过，未解决页面Finding 0；[当前Manifest V0.5](pages/markets/brazil/MARKET-BR-EN_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md) |
| MARKET-BR-PT | Gate 1–3 `APPROVED / CLOSED` | 子代理执行及总控独立审查完成，葡语/英文目标提示、贸易日期与规划路径边界通过，未解决页面Finding 0；[当前Manifest V0.5](pages/markets/brazil/MARKET-BR-PT_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md)。规划路径不等于路由已实现 |
| 其他Market子页 | 各自规划/Gate，未因Hub完成获得开发授权 | [Markets目录](pages/markets/)；Brazil PT-BR保持本地化审查边界 |
| PRODUCT-000 | Gate 9通过，保留release blockers | 外部目标/生产RFQ/索引按合同验收；[关闭记录](pages/products/05_review/PRODUCT-000_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) |
| PRODUCT-PROC-CL | Gate 1–5 `APPROVED / CLOSED` | 用户认可真实Gate 5精确组合；[当前Manifest V0.22](pages/products/chloride-process/PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.22.md) / [CL-G5-APPROVAL-01](pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE5_USER_APPROVAL_AND_CLOSURE_V0.1.md) / [Gate 5→6接收](pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE5_TO_GATE6_HANDOFF_V0.1.md)。Gate 6–10及开发发布未授权。 |
| PRODUCT-PROC-SU | Gate 1–3 `APPROVED / CLOSED` | 子代理返修并关闭字体Finding后完成，总控独立审查通过，未解决页面Finding 0；[当前Manifest V0.6](pages/products/sulfate-process/PRODUCT-PROC-SU_CURRENT_GATE_BASELINE_MANIFEST_V0.6.md)。Gate2复核中的six-module计数已按批准A/B纠正为五个正文模块，批准文件不变 |
| 全部14个Grade（含M-350模板、M-510 pilot及后续12个） | 各自Gate 9通过；PREVIEW_ONLY；Active Grade=NONE | 十二型号串行已结束，不再启动下一型号；[串行Manifest V0.16](docs/product-pages/29_Product_Detail_Development_SOP_V2_Autonomous_Serial_Manifest_V0.16.md) / [完成摘要](docs/product-pages/30_Product_Detail_12_Grade_Serial_Completion_Summary_V0.1.md) |
| 2个Process页 | 未开发（原登记） | 独立内容/证据/Gate；不得由Products Hub越权实现 |
| APP-000 | Gate 5 V0.12候选，未获最终批准（原登记） | 完成本页批准；历史404仅为当时探针；[Applications目录](pages/applications/) |
| APP-COAT | 当前精确文章内容`APPROVED / CLOSED`；页面Gate 1 `APPROVED / CLOSED` | 2026-09-07用户确认Coatings Page Intent、职责/不新建子页及“neutral Grade review first，Documents/Sample/RFQ second”方向，`CONTENT_INTENT_CONFIRMED / CLOSED`。Gate 2仍`NOT_STARTED / NOT_AUTHORIZED`；[Gate 1总控审查](pages/applications/coatings/05_review/APP-COAT_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md) |
| APP-MB | Gate 1 `USER_APPROVED / CLOSED`；Gate 2内容骨架总控通过待用户确认；文章内容`APPROVED / CLOSED`；APPROVED_FOR_DESIGN / PROVISIONAL_URL | 用户批准R04精确正文SHA `7a40744f...77cfc`作为正式对外内容输入；该决定不批准H1/Hero、14模块、CTA、SEO/GEO/Schema骨架或完整页面文案，Gate 3–10未授权；[三篇批准与职责记录](pages/applications/02_analysis/APPLICATION_ARTICLE_TOPIC_CONTROLLER_MANDATE_AND_THREE_ARTICLE_USER_APPROVAL_V0.1.md) / [当前Manifest V0.3](pages/applications/masterbatch/APP-MB_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md) |
| APP-PLAS | D22完整流程`CLOSED / RELEASE CANDIDATE DESIGNATED / NOT PUBLISHED`；D23内容决定`APPROVED / CLOSED`；页面Gate 1 `APPROVED / CLOSED` | 用户2026-09-06批准精确正文SHA `e7d45216...b079`作为正式对外内容输入；2026-09-07确认Page Intent、APP-PLAS/APP-MB边界及“neutral Grade review first，Documents/Sample/RFQ second”方向，`CONTENT_INTENT_CONFIRMED / CLOSED`。Gate 2仍`NOT_STARTED / NOT_AUTHORIZED`；[Gate 1总控审查](pages/applications/plastics/05_review/APP-PLAS_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md) |
| APP-INK | D22 `WORKFLOW COMPLETE / RELEASE CANDIDATE DESIGNATED / PUBLICATION NOT AUTHORIZED`；D23内容决定`APPROVED / CLOSED`；页面Gate 1 `APPROVED / CLOSED` | 2026-09-07用户确认Printing Inks Page Intent、职责/不新建工艺子页及“neutral Grade review first，Documents/Sample/RFQ second”方向，`CONTENT_INTENT_CONFIRMED / CLOSED`；M-2377仅获Printing Inks关系公开权限。Gate 2仍`NOT_STARTED / NOT_AUTHORIZED`；[Gate 1总控审查](pages/applications/printing-inks/05_review/APP-INK_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md) |
| APP-PAPER | 当前定向修订精确文章内容`APPROVED / CLOSED`；页面Gate 1 `APPROVED / CLOSED` | 用户批准精确正文SHA `1b36a183...9da77`作为正式对外内容输入；2026-09-07确认通用Paper Page Intent、装饰纸/轻量纸技术核心边界、不新建Paper子页及“两项neutral Grades first，Documents/Sample/RFQ second”方向，`CONTENT_INTENT_CONFIRMED / CLOSED`。Gate 2仍`NOT_STARTED / NOT_AUTHORIZED`；[Gate 1总控审查](pages/applications/paper/05_review/APP-PAPER_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md) |
| Application后续专题文章 | R01用户评审要求读者质量定向修订；D22重开A05 | 首版技术论证成立，但Section 3–8特别是5–8被qualification architecture、evidence governance及SOP语言主导。Controller已派发reader-facing governance stripping：保留PVC-U/PVC-P、weathering关系、endpoint及pipe authority等技术内容，压缩gate/owner/route/package状态机语言；完成后须新跑A06/RQR、独立A00和Controller closure。仅当A05证明不能编辑修正时才回退A03。R02及后续未启动；[修订指令](pages/applications/02_analysis/R01_PVC_UPVC_READER_FACING_REVISION_DIRECTIVE_V0.1.md) / [派发记录](pages/applications/01_research/r01-pvc-upvc/R01_D22_DISPATCH_RECORD_V0.1.md) |
| RES-000 | Gate 9通过，H0公共inventory=0 | 不自动把新文章加到公共inventory/sitemap；[Resources目录](pages/resources/) |
| RES-ORIGIN | Gate 9通过，保留release blockers | 当前Article metadata=null，不自动进入Hub/sitemap；[当前Manifest V0.11](pages/resources/07_qa/RES-ORIGIN_CURRENT_GATE9_BASELINE_MANIFEST_V0.11.md) |
| RES-PROC | 两个Gate 8候选均已结束；Gate 9比较审查进行中 | 第二候选已确认存在错误基线、缺少WordPress/CMS实现、共享面风险及回执不完整的初步阻塞偏离；第一候选正在按同一28项合同独立复验，最终选择待比较报告和用户决定；Gate 10未授权；[当前Manifest V0.13](pages/resources/05_review/RES-PROC_CURRENT_GATE9_COMPARATIVE_REVIEW_MANIFEST_V0.13.md) |
| 其他Resources | 候选/规划，各自独立内容Gate | 仅共享实现能力，不照搬RES-ORIGIN的Hero/模块/正文；[共享边界决定](pages/resources/05_review/RESOURCE_SHARED_TEMPLATE_NOT_SHARED_CONTENT_DECISION_V0.1.md) |
| RES-CHEMOURS | Gate 1–3 `APPROVED / CLOSED` | 用户2026-09-07回复“通过。”批准Gate 3冻结组合；[当前Manifest V0.17](pages/resources/chemours-alternatives/RES-CHEMOURS_CURRENT_GATE_BASELINE_MANIFEST_V0.17.md) / [批准与关闭](pages/resources/chemours-alternatives/05_review/RES-CHEMOURS_GATE3_USER_APPROVAL_AND_CLOSURE_V0.1.md) / [Gate 3→4交接](pages/resources/chemours-alternatives/05_review/RES-CHEMOURS_GATE3_TO_GATE4_HANDOFF_V0.1.md)。未解决页面Finding 0；Mapping/indexing仍独立待决，Gate 4未授权。 |
| RES-R706 | Gate 2 `USER_APPROVED / CLOSED`；Gate 3 `IN_PROGRESS` | 按G3-5RESOURCE-SERIAL-01仅释放本页由子代理执行；[当前Manifest V0.4](pages/resources/r706-alternative/RES-R706_CURRENT_GATE_BASELINE_MANIFEST_V0.4.md)。页面映射、最终URL、索引及发布仍另行决定 |
| RES-TRADE-EU | Gate 2 `USER_APPROVED / CLOSED` | 用户批准A V0.1 / B V0.2 / C V0.2完整组合与模块顺序；[当前Manifest V0.3](pages/resources/eu-trade/RES-TRADE-EU_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md)。时效事实继续受30天/事件触发复核约束；Gate3 `AUTHORIZED / QUEUED` |
| RES-TRADE-UK | Gate 2 `USER_APPROVED / CLOSED` | 用户批准A V0.1 / B V0.3 / C V0.3完整组合与模块顺序；[当前Manifest V0.3](pages/resources/uk-trade/RES-TRADE-UK_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md)。时效事实继续受30天/事件触发复核约束；Gate3 `AUTHORIZED / QUEUED` |
| RES-TRADE-IN | Gate 2 `USER_APPROVED / CLOSED` | 用户批准A V0.1 / B V0.2 / C V0.1完整组合与模块顺序；[当前Manifest V0.3](pages/resources/india-trade/RES-TRADE-IN_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md)。建议税率非已核实生效税率，时效事实继续受30天/事件触发复核约束；Gate3 `AUTHORIZED / QUEUED` |
| RES-TRADE-BR | Gate 2 `USER_APPROVED / CLOSED` | 用户批准A V0.1 / B V0.2 / C V0.2完整组合与模块顺序；[当前Manifest V0.3](pages/resources/brazil-trade/RES-TRADE-BR_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md)。802/850链及公共利益程序等时效事实继续受30天/事件触发复核约束；Gate3 `AUTHORIZED / QUEUED` |
| DOC-000 | 原Gate 9关闭；FAQ #2定向实现/复验OPEN | 已批准“可先开始申请，但提交前必须选Grade”；[决定记录](pages/documents/05_review/DOC-000_POST_GATE9_FAQ_GRADE_ALIGNMENT_DECISION_V0.1.md) |
| DOC-TDS | Gate 9通过，四项finding关闭 | 保留Gate 10发布条件；[当前Manifest V0.3](pages/documents/tds-sds-coa/05_review/DOC-TDS_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md) |
| DOC-REACH | Gate 9通过，指定八项依赖已验收 | APP/生产环境与EG-006内容范围继续按合同；[当前Manifest V0.17](pages/documents/reach/06_handoff/DOC-REACH_CURRENT_GATE9_BASELINE_MANIFEST_V0.17.md) |
| DOC-COO | Gate 1–4 `APPROVED / CLOSED`；Gate 5 `AUTHORIZED / QUEUED` | 当前两个已就绪页面Gate 5串行的第2页；必须等待Spain完成根检查后再启动。[当前Manifest V0.9及Gate5接口](pages/documents/certificate-of-origin/04_planning/DOC-COO_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md) / [G5-2PAGE-SERIAL-01](docs/architecture/GATE5_TWO_ELIGIBLE_PAGE_SERIAL_CONTROL_V1.0.md)。结果未预批，Gate 6–10未授权。 |
| ABOUT-001 | Gate 9通过，保留release blockers | 当时五个下游路由须在发布前重新验证，不能仅凭旧探针继续断言404；[关闭记录](pages/about-contact/05_review/ABOUT-001_GATE9_PROJECT_CONTROL_CLOSURE_V0.1.md) |
| CONTACT-001 | 规划中（原登记） | 由用户/owner处理公司联络资料与独立Gate；[目录](pages/about-contact/) |
| CONV-DOC | Gate 9通过；Web3Forms browser-direct接线/provider accepted与Privacy parity已验证 | 邮箱实际收到待用户确认；生产WordPress读回、账户/Key/收件绑定与Gate 10开放；[当前Manifest V0.4](pages/conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.4.md) |
| CONV-SAMPLE | Gate 9通过，四项P1/P2关闭 | 生产receiver/persistence/dedup/ack、seed、Privacy与共享依赖仍需发布验收；[当前Manifest V0.3](pages/conversion/request-sample/05_review/CONV-SAMPLE_GATE9_CURRENT_BASELINE_MANIFEST_V0.3.md) |
| CONV-RFQ | HANDED_OFF；Gate 8外部进行中；receiver环境阻塞OPEN（原登记） | Gate 9等待production-equivalent结果；[receiver记录](pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE8_RECEIVER_ENVIRONMENT_BLOCKER_RECORD_V1.0.md) |
| Legal / Privacy三页 | 原Gate 9关闭；Privacy EN/BM runtime parity关闭 | 生产实际数据流/主机清单、保留期、WordPress读回、收件、BM审校及最终法律确认仍按已有记录；[Privacy当前共享Manifest V1.3](pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md) / [Cookie V1.1](pages/legal-privacy/05_review/LEGAL-COOKIE-EN_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md) |

本表是导航性状态，不替代页面Manifest的具体Review ID、哈希、证据日期及开放项。页面owner出现新提交时先核对该页最新批准记录再更新本行；不依靠旧总表自动批准或关闭。

## 3. 全站开放项的处理方式

- **事实**：Malaysia-origin已获全站公开授权；PRODUCT V0.3中M-2377关系已更新。M-996/M-2196比较限制、Specialty/Rubber、REACH等按当前批准源；缺证按用户确认规则，不再用旧“About原产地全局未证”一行覆盖最新决定。
- **共享组件**：生产SVG和Global Chrome V0.5已正式通过；早期全站重导计划只保留历史，不在此继续标为正在执行。具体新页面组装/运行时QA仍各自核对。
- **依赖**：Grade预览验收不等于live；Process、Application、市场子页、表单、CMS、Privacy、sitemap/robots、Article等依赖按当前页面发布合同逐项验证。不同日期的旧404/receiver结果不混成新鲜全站结论。
- **收件与隐私**：provider accepted不等于用户邮箱实际收到；生产账户/配置、实际数据流和用户确认仍需分别登记。
- **授权**：优先级调整不改变Page ID/URL/关键词；只有已有明确连续授权范围内才能顺序执行。本次入口整理不启动任务或定时监督。

## 4. 维护方式

每次状态改变，替换本页对应行并更新其当前Manifest链接；事实变更写原事实/决定记录，索引只更新导航。大量测试数字、commit、聊天回执留在页面审查/证据文件，不继续累积到根状态。

如入口与页面源冲突：先保留原授权边界，登记冲突并核对批准来源；不得把“文件更新日期更近”当作批准。历史完整状态已归档，不删除；迁移记录见 [PROJECT_ENTRY_RESTRUCTURE_MIGRATION_V1.0](docs/architecture/PROJECT_ENTRY_RESTRUCTURE_MIGRATION_V1.0.md)。















