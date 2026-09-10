# TiO2 Malaysia · 当前项目状态

> 2026-09-07当前批准方式：Gate 3、4、6按[总控常设关闭授权](docs/architecture/GATE_3_4_6_DELEGATED_CLOSURE_AUTHORITY_V1.0.md)执行独立审查与总控关闭，不再等待逐页用户批准；Gate 1/2/9/10不变。本文历史“用户批准”表述只保留原记录语境，当前三关关闭由该授权解释；内容事实决定、明确暂停、下一阶段启动与外发/开发/发布权限分别保留。


> 流程解释更新（2026-09-07）：按[Gate工作流V3.2](docs/architecture/GATE_WORKFLOW_V3.2.md)，原Gate 4/5合并为当前Gate 4，4A为内部方向检查、4B为唯一正式关闭；原Gate 7职责继续并入Gate 6。历史页面状态、文件名、批准和权限保持，成果映射不等于继续执行授权。

2026-09-07用户授权按四页一批使用子代理完成当前13个未完成Gate 4的页面；控制`G4-13PAGE-BATCH4-01`已启动，首批Germany、Italy、Coatings执行中，Plastics为同批首个空闲槽立即接续。当前运行上限为root加3个子代理，因此批次大小4采用3并发+1同批队列。Printing Inks与Paper先完成Gate 3前置流程，不跳Gate；[批次控制V1.0](docs/architecture/GATE4_THIRTEEN_PAGE_BATCH4_CONTROL_V1.0.md)。本授权不启动Gate 6或外部开发发布。

用户随后指示“不要启动新的了，完成第一批四个以后就停下来。”；当前仅收尾Germany、Italy、Coatings与Plastics。Masterbatch的第二批派发已立即中止且未写入文件，其他后续页面不启动；第一批四页全部按独立审查与常设关闭授权完成后停止。

`G4-13PAGE-BATCH4-01`第一批现已完成并停止：Germany、Italy、Coatings与Plastics均完成4A→4B、冻结、独立审查、Finding返修/复审（如适用）及总控关闭，四页Required Finding均为0；[完成记录V1.0](docs/architecture/GATE4_BATCH4_FIRST_BATCH_COMPLETION_V1.0.md)。后续批次未启动，Gate 6未启动。

2026-09-07用户授权使用三个子代理完成Netherlands、Belgium与Sulfate Process的Gate 6。三页执行稿均经不同身份的root独立审查，全部必修Finding关闭；总控依据`G346-DELEGATED-CLOSURE-20260907`分别按`NL-G6-DELEGATED-CLOSE-01`、`BE-G6-DELEGATED-CLOSE-01`与`SU-G6-DELEGATED-CLOSE-01`关闭Gate 6。三页均为`APPROVED_FOR_HANDOFF / HANDED_OFF=NO`，实际外发、Gate 8、D16、Gate 9/10及发布未授权。

2026-09-07用户说明“现在需要我审核的Gate4的页面，都审核通过。”；核对时当前Gate 4待用户审核队列为0，最近三页已由上一条“批准”在`G4-REMAINING-THREE-APPROVAL-01`下关闭。本次决定确认既有三页批准，不重复生成页面决定，也不预批准尚未形成的Gate 4候选；范围见[核对记录V1.0](docs/architecture/GATE4_CURRENT_USER_REVIEW_QUEUE_APPROVAL_RECONCILIATION_V1.0.md)。

2026-09-07用户说明“现在需要我审核的Gate6，都审核通过。”；当时达到总控通过并等待用户审核的对象为Spain和India，两页分别按`ES-G6-APPROVAL-01`和`IN-G6-APPROVAL-01`关闭Gate6并进入`APPROVED_FOR_HANDOFF`。Poland此前已批准；仍待独立复核的Gate6草案不越级纳入。范围见[批量批准记录](docs/architecture/GATE6_PENDING_USER_REVIEW_BATCH_APPROVAL_2026-09-07.md)。本决定不表示已外发或授权Gate8–10。

> 快照：2026-09-07 / V0.271。用户授权Gate 2 Controller对12个Gate1已关闭、Gate2未开始页面按DOC-COO起始的固定队列串行完成Full Copy、独立Buyer Review与总控复核；中间不逐页提交用户，全部完成后统一由用户审核；该Gate2合同本身不授权Gate3，后续八页Gate3串行授权见第二段。批次合同见 `docs/architecture/GATE2_SERIAL_FULL_COPY_CONTROL_V1.1.md`；12页固定串行队列已完成；前七页及RES-R706、EU/UK/India/Brazil五个Resource页均已获用户批准并关闭Gate2，五页批准记录为`G2-5RESOURCE-APPROVAL-01`；用户现已授权这五页按`G3-5RESOURCE-SERIAL-01`使用子代理严格串行执行Gate3。PRODUCT-PROC-CL Gate2全文与模块顺序、Gate3三端线框与关键状态均已获用户批准并关闭，当前Manifest V0.19，Poland与本页Gate4方向均已获用户批准关闭；PRODUCT-PROC-SU、RES-TRADE-EU、RES-TRADE-UK、RES-TRADE-IN与RES-TRADE-BR Gate1均已获用户批准并关闭，其他Gate2由相应controller负责。用户明确“APP都不要”，因此本Gate1串行任务跳过所有Applications页面且不改其现有成果/owner状态；该范围不取消独立的Application文章工作。RES-TRADE-BR的802/2025最终措施、850/2026名单修订、四档税额、Ex-001及公共利益程序边界已经Agent→项目Skill→总控独立复核，并获用户2026-09-06回复“同意”批准`BR-TRADE-D01`；Gate2由其他controller负责。APP-PLAS与APP-INK此前的根目录直出稿均不构成受治理D22成稿，用户要求两篇重新按流程制作；两篇受治理流程均已完成。用户现已批准APP-MB、APP-INK与APP-PAPER三个当前精确成稿作为正式对外内容输入；连同此前获批的APP-COAT与APP-PLAS，五个已登记Application主类目均已有用户批准文章。Application文章Controller后续专责持续发现、评估、排序和派发二级应用文章主题；D22只负责获批题目的文章研究与写作。当前选题总计划已整理5篇已批准主文章、42个候选题材及28个逐题研究单元；R01读者质量定向修订已完成并经D23通过，仍等待用户单独批准精确修订正文；R02 Plastic Film已由D22完成完整受治理流程，A06/RQR为`READER_READY`、A00为`ACCEPTED`且C/I/M `0/0/0`，D23已核验六项精确交付身份并通过，当前等待用户批准精确正文；R03及后续单元未启动。所有文章内容批准均不授权页面Gate、HTML、开发或发布。Spain、DOC-COO、Netherlands、Belgium、India、Brazil EN/PT及Sulfate Process的当前Full Copy与模块顺序已获用户批量批准，八页Gate2均关闭；批准组合见G2-8PAGE-APPROVAL-01。Germany、Italy、Coatings、Plastics、Masterbatch、Printing Inks与Paper的当前Full Copy、模块顺序及对应A/C组合已获用户批量批准，七页Gate2均关闭；批准组合见G2-7PAGE-APPROVAL-01。Germany与Italy已由两个执行子代理并行完成Gate3 V0.3的硬预检、冻结、正式证据和自检，并经总控独立审查；用户现已回复“批准。”，决定`DE-G3-APPROVAL-01`与`IT-G3-APPROVAL-01`关闭两页Gate3，控制`G3-DE-IT-PARALLEL-01`见V1.2；两份Gate3→4交接已就绪但Gate4及后续未授权。Brazil English与Brazil Portuguese Gate1均已批准关闭；PT-BR D01方向/CTA、D02葡语COO和D03规划路径已获用户“批准。”确认，V0.2批准组合及决定登记V1.8已完成。由本Controller负责的新Market页面Gate1串行队列至此全部完成。Belgium、India、Netherlands、Poland、Italy既有决定保持。用户授权`G6-4PAGE-PRACTICE-01`对Brazil EN/PT、DOC-COO和Chloride Process形成Gate6实战草案；四包与稳定Gate9条件已经整理，均待不同审查者复核，未批准或外发。RES-PROC既有比较审查及其他任务状态不在本轮改写，没有新增开发或发布授权。“已通过”均指已有记录；运行时依赖须在发布前新鲜复验，历史探针不是今天的结果。

2026-09-07用户明确回复“批准这7页。”，批准Germany、Italy、Coatings、Plastics、Masterbatch、Printing Inks与Paper的当前精确Full Buyer Clean Copy、模块顺序及对应A/C组合；决定`G2-7PAGE-APPROVAL-01`已登记于[七页批准与关闭记录V1.0](docs/architecture/GATE2_REMAINING_SEVEN_USER_APPROVAL_AND_CLOSURE_V1.0.md)。七页均为`FULL_COPY_AND_MODULE_ORDER_CONFIRMED / USER_APPROVED / CLOSED`，19/19项Required Finding保持关闭。本决定不授权Gate 3–10或开发发布。

2026-09-07用户明确“现在Gate3需要我审核的，都审核通过。”；当前呈交的Coatings、Plastics与Masterbatch三个精确冻结组合分别按`APP-COAT-G3-APPROVAL-01`、`APP-PLAS-G3-APPROVAL-01`与`APP-MB-G3-APPROVAL-01`批准并关闭Gate3。[G3-APP-P1-THREE-PARALLEL-01 V1.2](docs/architecture/GATE3_APPLICATION_P1_THREE_PARALLEL_CONTROL_V1.2.md)记录三页冻结源、总控审查与正式交接；三份交接均为`READY_FOR_GATE4_WHEN_AUTHORIZED`。三个`PROVISIONAL_URL`保持，Gate4–10及开发发布未授权。

2026-09-07用户授权启动Printing Inks与Paper两页Gate3并要求子代理完成；两个执行子代理分别形成冻结候选，两个不同审查子代理完成独立审查及定向复验。APP-INK三项Finding与APP-PAPER一项记录Finding均已关闭，残留必修0；总控依据G346-DELEGATED-CLOSURE-20260907分别登记APP-INK-G3-PC-CLOSURE-01与APP-PAPER-G3-PC-CLOSURE-01，两页Gate3均APPROVED / CLOSED，正式交接为READY_FOR_GATE4_WHEN_AUTHORIZED。本轮未启动Gate4，两个PROVISIONAL_URL及后续开发/发布边界保持。

2026-09-07用户批准Germany和Italy两个精确Gate3冻结组合；决定`DE-G3-APPROVAL-01`与`IT-G3-APPROVAL-01`已按[G3-DE-IT-PARALLEL-01 V1.2](docs/architecture/GATE3_GERMANY_ITALY_PARALLEL_CONTROL_V1.2.md)登记，两页Gate3均`APPROVED / CLOSED`。正式Gate3→4交接仅为`READY_FOR_GATE4_WHEN_AUTHORIZED`；当前授权不包含Gate4–10、开发或发布。

2026-09-07用户对Spain与DOC-COO两个当前冻结Gate 5候选明确回复“批准”。两页Gate 5均已`APPROVED / CLOSED`，决定分别为[ES-G5-APPROVAL-01](pages/markets/spain/05_review/MARKET-EU-ES_GATE5_USER_APPROVAL_AND_CLOSURE_V0.1.md)与[COO-G5-APPROVAL-01](pages/documents/certificate-of-origin/05_review/DOC-COO_GATE5_USER_APPROVAL_AND_CLOSURE_V0.1.md)；正式Gate 5→6接收文件只标记`READY_FOR_GATE6_WHEN_AUTHORIZED`，不启动Gate 6，不授权开发、派发、部署、发布或索引。

八页Gate 2批准事件已登记于 [G2-8PAGE-APPROVAL-01](docs/architecture/GATE2_EIGHT_PAGE_USER_APPROVAL_AND_CLOSURE_V1.0.md)。该决定只覆盖用户列出的八页；RES-R706、RES-TRADE-EU及其他页面继承原状态。`G3-8PAGE-SERIAL-01`已完成：同一八页由子代理严格串行执行Gate 3，每页通过硬预检、冻结、正式证据、自检及总控独立审查后按用户预授权关闭；最终审计确认8个冻结源、64张正式图及全部审查/关闭/交接记录，身份差异0。原[G4-8PAGE-SERIAL-01](docs/architecture/GATE4_EIGHT_PAGE_SERIAL_CONTROL_V1.0.md)只授权旧Gate 4方向范围。Gate 4/5合并决定不把它扩展为完整视觉授权；Belgium及后续已暂停，恢复范围须另行明确。[批次进度](docs/architecture/GATE4_EIGHT_PAGE_SERIAL_PROGRESS.md)保留历史执行状态。用户随后授权[G3-5RESOURCE-SERIAL-01](docs/architecture/GATE3_FIVE_RESOURCE_SERIAL_CONTROL_V1.6.md)已完成：R706、EU、UK、India与Brazil五页均由子代理严格串行执行并经总控独立审查关闭Gate3；[完成记录](docs/architecture/GATE3_FIVE_RESOURCE_SERIAL_COMPLETION_V1.0.md)与[机器审计](docs/architecture/GATE3_FIVE_RESOURCE_SERIAL_COMPLETION_AUDIT_V1.0.json)确认5个冻结源、40张正式图、身份差异0、失败页0。Brazil的B哈希转录错误在候选生成前被输入守卫阻断并纠正，正文与批准范围未变。

## 1. 总体状态

- 全站架构、PRD、产品资料与研究已存在，见 [PROJECT_CONTEXT](PROJECT_CONTEXT.md)；当前登记册57页，产品14个型号。
- 项目仍是策划/交付/只读验收空间，外部开发由独立开发任务负责。
- Gate 3范围控制定向修订已按用户“现在开始定向修订”完成，[当前基线Manifest V1.6](docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.6.md)导航Agent/线框V0.3、共用布局核验V0.4及交接V0.2。校验与限制见[修订记录](docs/superpowers/specs/2026-09-07-gate3-v0.3-scope-targeted-revision.md)；V0.3已在Germany与Italy两个新真实页面完成执行、总控独立审查和用户批准关闭，两页均无阻塞Finding。该试跑不新增其他页面或开发授权。
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
| MARKET-EU-DE | Gate 1–4 `APPROVED / CLOSED`；`READY_FOR_GATE6_WHEN_AUTHORIZED` | 常设授权关闭`DE-G4-CLOSURE-20260907-01`；51图、237/237正式与154/154独立检查通过，Required Finding 0；[当前Manifest V0.9](pages/markets/germany/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md)。Gate 6–10未授权。 |
| MARKET-EU-IT | Gate 1–4 `APPROVED / CLOSED`；`READY_FOR_GATE6_WHEN_AUTHORIZED` | 常设授权关闭`IT-G4-CLOSURE-20260907-02`；`IT-G4-PC-R01`元数据Finding关闭，56/56图及定向复审通过，Required Finding 0；[当前Manifest V0.10](pages/markets/italy/MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md)。Gate 6–10未授权。 |
| MARKET-EU-ES | Gate 1–4、Gate6 **APPROVED / CLOSED**；**APPROVED_FOR_HANDOFF** | 用户批准当前待审Gate6；[当前Manifest V0.14](pages/markets/spain/MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.14.md) / [ES-G6-APPROVAL-01](pages/markets/spain/05_review/MARKET-EU-ES_GATE6_USER_APPROVAL_AND_CLOSURE_V0.1.md)。`ES-G6-HANDOFF-01 V0.1`、12条Gate9接受条件和6类依赖锁定；`HANDED_OFF=NO`，Gate8–10未授权。 |
| MARKET-EU-PL | **READ_ONLY_QA_IN_REVIEW** | [当前Manifest V0.25](pages/markets/poland/MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.25.md)；[PL-G9-RECHECK-04](pages/markets/poland/07_qa/MARKET-EU-PL_GATE9_TARGETED_RECHECK_V0.4.md)：F01/F02/F03实现必修全部关闭；待E02外部账户/真实接收证据及Applications依赖。Gate1–4/6批准保持，Gate9未整体关闭，Gate10未授权。 |
| MARKET-EU-NL | Gate 1–4、6 **APPROVED / CLOSED**；**APPROVED_FOR_HANDOFF** | [当前Manifest V0.12](pages/markets/netherlands/MARKET-EU-NL_CURRENT_GATE_BASELINE_MANIFEST_V0.12.md) / [独立审查](pages/markets/netherlands/05_review/MARKET-EU-NL_GATE6_DELIVERY_INDEPENDENT_REVIEW_V0.1.md) / [关闭记录](pages/markets/netherlands/05_review/MARKET-EU-NL_GATE6_DELEGATED_APPROVAL_AND_CLOSURE_V0.1.md)。`NL-G6-HANDOFF-01`锁定12条Gate9条件与6类依赖；`HANDED_OFF=NO`，Gate8–10未授权。 |
| MARKET-EU-BE | Gate 1–4、6 **APPROVED / CLOSED**；**APPROVED_FOR_HANDOFF** | [当前Manifest V0.12](pages/markets/belgium/MARKET-EU-BE_CURRENT_GATE_BASELINE_MANIFEST_V0.12.md) / [独立审查](pages/markets/belgium/05_review/MARKET-EU-BE_GATE6_DELIVERY_INDEPENDENT_REVIEW_V0.1.md) / [关闭记录](pages/markets/belgium/05_review/MARKET-EU-BE_GATE6_DELEGATED_APPROVAL_AND_CLOSURE_V0.1.md)。`BE-G6-F02`按冻结后治理源升级关闭；12条Gate9条件与6类依赖锁定；`HANDED_OFF=NO`，Gate8–10未授权。 |
| MARKET-IN-001 | Gate 1–4、Gate6 **APPROVED / CLOSED**；**APPROVED_FOR_HANDOFF** | 用户批准当前待审Gate6；[当前Manifest V0.13](pages/markets/india/MARKET-IN-001_CURRENT_GATE_BASELINE_MANIFEST_V0.13.md) / [IN-G6-APPROVAL-01](pages/markets/india/05_review/MARKET-IN-001_GATE6_USER_APPROVAL_AND_CLOSURE_V0.1.md)。`IN-G6-PACKAGE-01 V0.1`、12条稳定接受条件和6组依赖锁定；`HANDED_OFF=NO`，Gate8–10未授权。 |
| MARKET-BR-EN | Gate 1–4 `USER_APPROVED / CLOSED`；Gate6 `DRAFT_FOR_PROJECT_CONTROL_REVIEW` | [当前Manifest V0.10](pages/markets/brazil/MARKET-BR-EN_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md)；[审查V0.1](pages/markets/brazil/05_review/MARKET-BR-EN_GATE6_CONTRACT_CONSISTENCY_REVIEW_V0.1.md)与[交付包V0.1](pages/markets/brazil/06_handoff/MARKET-BR-EN_GATE6_HANDOFF_PACKAGE_V0.1.md)已自检，`BR-EN-G6-F01`在交付映射中澄清但待独立复核。未获用户批准或外发，Gate8–10未授权。 |
| MARKET-BR-PT | Gate 1–4 `USER_APPROVED / CLOSED`；Gate6 `DRAFT_FOR_PROJECT_CONTROL_REVIEW` | [当前Manifest V0.10](pages/markets/brazil/MARKET-BR-PT_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md)；[审查V0.1](pages/markets/brazil/05_review/MARKET-BR-PT_GATE6_CONTRACT_CONSISTENCY_REVIEW_V0.1.md)与[交付包V0.1](pages/markets/brazil/06_handoff/MARKET-BR-PT_GATE6_HANDOFF_PACKAGE_V0.1.md)已自检，canonical/hreflang/Schema生产条件待独立复核。规划路径不等于生产route；未批准或外发，Gate8–10未授权。 |
| 其他Market子页 | 各自规划/Gate，未因Hub完成获得开发授权 | [Markets目录](pages/markets/)；Brazil PT-BR保持本地化审查边界 |
| PRODUCT-000 | Gate 9通过，保留release blockers | 外部目标/生产RFQ/索引按合同验收；[关闭记录](pages/products/05_review/PRODUCT-000_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) |
| PRODUCT-PROC-CL | 当前Gate 1–4 `USER_APPROVED / CLOSED`；Gate6 `DRAFT_FOR_PROJECT_CONTROL_REVIEW` | [当前Manifest V0.23](pages/products/chloride-process/PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.23.md)；[审查V0.1](pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE6_CONTRACT_CONSISTENCY_REVIEW_V0.1.md)与[交付包V0.1](pages/products/chloride-process/06_handoff/PRODUCT-PROC-CL_GATE6_HANDOFF_PACKAGE_V0.1.md)已自检，八Grade和Gate4冻结不变，ItemList生产映射待独立复核。未批准或外发，Gate8–10未授权。 |
| PRODUCT-PROC-SU | Gate 1–4、6 **APPROVED / CLOSED**；**APPROVED_FOR_HANDOFF** | [当前Manifest V0.11](pages/products/sulfate-process/PRODUCT-PROC-SU_CURRENT_GATE_BASELINE_MANIFEST_V0.11.md) / [独立审查](pages/products/sulfate-process/05_review/PRODUCT-PROC-SU_GATE6_DELIVERY_INDEPENDENT_REVIEW_V0.1.md) / [关闭记录](pages/products/sulfate-process/05_review/PRODUCT-PROC-SU_GATE6_DELEGATED_APPROVAL_AND_CLOSURE_V0.1.md)。五模块、五Grade固定顺序、16条Gate9条件与8类依赖锁定；`HANDED_OFF=NO`，Gate8–10未授权。 |
| 全部14个Grade（含M-350模板、M-510 pilot及后续12个） | 各自Gate 9通过；PREVIEW_ONLY；Active Grade=NONE | 十二型号串行已结束，不再启动下一型号；[串行Manifest V0.16](docs/product-pages/29_Product_Detail_Development_SOP_V2_Autonomous_Serial_Manifest_V0.16.md) / [完成摘要](docs/product-pages/30_Product_Detail_12_Grade_Serial_Completion_Summary_V0.1.md) |
| 2个Process页 | 未开发（原登记） | 独立内容/证据/Gate；不得由Products Hub越权实现 |
| APP-000 | Gate 5 V0.12候选，未获最终批准（原登记） | 完成本页批准；历史404仅为当时探针；[Applications目录](pages/applications/) |
| APP-COAT | Gate 1–4 `APPROVED / CLOSED`；`READY_FOR_GATE6_WHEN_AUTHORIZED` | 常设授权关闭`COAT-G4-CLOSURE-20260907-02`；`COAT-G4-IR-01`证据声明Finding关闭，最终hover与记录一致，Required Finding 0；[当前Manifest V0.8](pages/applications/coatings/APP-COAT_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md)。Gate 6–10未授权。 |
| APP-MB | Gate 1–3已关闭；Gate 4制作已冻结；新Gate 5 `QUEUED`，尚未关闭视觉阶段 | [Gate 4→5交接](pages/applications/masterbatch/05_review/APP-MB_GATE4_TO_GATE5_HANDOFF_V0.1.md)锁定待审组合及原上游Manifest；[九页审查控制](docs/architecture/GATE5_NINE_PAGE_REVIEW_CONTROL_V1.0.md)。原事实、URL/mapping/indexing边界保持；Gate 6–10未启动。 |
| APP-PLAS | D22流程关闭；Gate 1–4 `APPROVED / CLOSED`；`READY_FOR_GATE6_WHEN_AUTHORIZED`；PROVISIONAL_URL | 常设授权关闭`APP-PLAS-G4-CLOSURE-20260907-02`；`APP-PLAS-G4-R01`元数据Finding关闭，92/92图与39/39复审通过，Required Finding 0；[当前Manifest V0.8](pages/applications/plastics/APP-PLAS_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md)。Gate 6–10未授权。 |
| APP-INK | Gate 1–3已关闭；Gate 4制作已冻结；新Gate 5 `QUEUED`，尚未关闭视觉阶段 | [Gate 4→5交接](pages/applications/printing-inks/05_review/APP-INK_GATE4_TO_GATE5_HANDOFF_V0.1.md)锁定待审组合及原上游Manifest；[九页审查控制](docs/architecture/GATE5_NINE_PAGE_REVIEW_CONTROL_V1.0.md)。原事实、URL/mapping/indexing边界保持；Gate 6–10未启动。 |
| APP-PAPER | Gate 1–3已关闭；Gate 4制作已冻结；新Gate 5 `QUEUED`，尚未关闭视觉阶段 | [Gate 4→5交接](pages/applications/paper/05_review/APP-PAPER_GATE4_TO_GATE5_HANDOFF_V0.1.md)锁定待审组合及原上游Manifest；[九页审查控制](docs/architecture/GATE5_NINE_PAGE_REVIEW_CONTROL_V1.0.md)。原事实、URL/mapping/indexing边界保持；Gate 6–10未启动。 |
| Application后续专题文章 | R02 D22完整流程已完成；D23通过，待用户批准正文 | R02精确成稿题为“Titanium Dioxide for Plastic Film: How to Compare Opacity, Dispersion, and Processing at a Defined Film Thickness”；A06/RQR `READER_READY`，A00 `ACCEPTED`、C/I/M `0/0/0`，六项交付身份经D23重算匹配。文章保持finished-film归属，PVC/calendered film仅为非转移边界；无命名牌号、配方、阈值、等效、保证或合规结论。R01修订正文批准仍独立待定；R03及后续未启动；[D23验收](pages/applications/02_analysis/R02_PLASTIC_FILM_ARTICLE_D23_ACCEPTANCE_V0.1.md) / [最终正文](../22文案写作分析/projects/titanium-dioxide-for-plastic-film/a05-editing-production/run-01-v1/article-edited.md) / [派发与完成记录](pages/applications/01_research/r02-plastic-film/R02_D22_DISPATCH_RECORD_V0.1.md) |
| RES-000 | Gate 9通过，H0公共inventory=0 | 不自动把新文章加到公共inventory/sitemap；[Resources目录](pages/resources/) |
| RES-ORIGIN | Gate 9通过，保留release blockers | 当前Article metadata=null，不自动进入Hub/sitemap；[当前Manifest V0.11](pages/resources/07_qa/RES-ORIGIN_CURRENT_GATE9_BASELINE_MANIFEST_V0.11.md) |
| RES-PROC | 两个Gate 8候选均已结束；Gate 9比较审查进行中 | 第二候选已确认存在错误基线、缺少WordPress/CMS实现、共享面风险及回执不完整的初步阻塞偏离；第一候选正在按同一28项合同独立复验，最终选择待比较报告和用户决定；Gate 10未授权；[当前Manifest V0.13](pages/resources/05_review/RES-PROC_CURRENT_GATE9_COMPARATIVE_REVIEW_MANIFEST_V0.13.md) |
| 其他Resources | 候选/规划，各自独立内容Gate | 仅共享实现能力，不照搬RES-ORIGIN的Hero/模块/正文；[共享边界决定](pages/resources/05_review/RESOURCE_SHARED_TEMPLATE_NOT_SHARED_CONTENT_DECISION_V0.1.md) |
| RES-CHEMOURS | Gate 1–3已关闭；Gate 4制作已冻结；新Gate 5 `IN_PROGRESS`，尚未关闭视觉阶段 | [Gate 4→5交接](pages/resources/chemours-alternatives/05_review/RES-CHEMOURS_GATE4_TO_GATE5_HANDOFF_V0.1.md)锁定待审组合及原上游Manifest；[九页审查控制](docs/architecture/GATE5_NINE_PAGE_REVIEW_CONTROL_V1.0.md)。原事实、URL/mapping/indexing边界保持；Gate 6–10未启动。 |
| RES-R706 | Gate 1–3已关闭；Gate 4制作已冻结；新Gate 5 `IN_PROGRESS`，尚未关闭视觉阶段 | [Gate 4→5交接](pages/resources/r706-alternative/05_review/RES-R706_GATE4_TO_GATE5_HANDOFF_V0.1.md)锁定待审组合及原上游Manifest；[九页审查控制](docs/architecture/GATE5_NINE_PAGE_REVIEW_CONTROL_V1.0.md)。原事实、URL/mapping/indexing边界保持；Gate 6–10未启动。 |
| RES-TRADE-EU | Gate 1–3已关闭；Gate 4制作已冻结；新Gate 5 `IN_PROGRESS`，尚未关闭视觉阶段 | [Gate 4→5交接](pages/resources/eu-trade/05_review/RES-TRADE-EU_GATE4_TO_GATE5_HANDOFF_V0.1.md)锁定待审组合及原上游Manifest；[九页审查控制](docs/architecture/GATE5_NINE_PAGE_REVIEW_CONTROL_V1.0.md)。原事实、URL/mapping/indexing边界保持；Gate 6–10未启动。 |
| RES-TRADE-UK | Gate 1–3已关闭；Gate 4制作已冻结；新Gate 5 `QUEUED`，尚未关闭视觉阶段 | [Gate 4→5交接](pages/resources/uk-trade/05_review/RES-TRADE-UK_GATE4_TO_GATE5_HANDOFF_V0.1.md)锁定待审组合及原上游Manifest；[九页审查控制](docs/architecture/GATE5_NINE_PAGE_REVIEW_CONTROL_V1.0.md)。原事实、URL/mapping/indexing边界保持；Gate 6–10未启动。 |
| RES-TRADE-IN | Gate 1–3已关闭；Gate 4制作已冻结；新Gate 5 `QUEUED`，尚未关闭视觉阶段 | [Gate 4→5交接](pages/resources/india-trade/05_review/RES-TRADE-IN_GATE4_TO_GATE5_HANDOFF_V0.1.md)锁定待审组合及原上游Manifest；[九页审查控制](docs/architecture/GATE5_NINE_PAGE_REVIEW_CONTROL_V1.0.md)。原事实、URL/mapping/indexing边界保持；Gate 6–10未启动。 |
| RES-TRADE-BR | Gate 1–3已关闭；Gate 4制作已冻结；新Gate 5 `QUEUED`，尚未关闭视觉阶段 | [Gate 4→5交接](pages/resources/brazil-trade/05_review/RES-TRADE-BR_GATE4_TO_GATE5_HANDOFF_V0.1.md)锁定待审组合及原上游Manifest；[九页审查控制](docs/architecture/GATE5_NINE_PAGE_REVIEW_CONTROL_V1.0.md)。原事实、URL/mapping/indexing边界保持；Gate 6–10未启动。 |
| DOC-000 | 原Gate 9关闭；FAQ #2定向实现/复验OPEN | 已批准“可先开始申请，但提交前必须选Grade”；[决定记录](pages/documents/05_review/DOC-000_POST_GATE9_FAQ_GRADE_ALIGNMENT_DECISION_V0.1.md) |
| DOC-TDS | Gate 9通过，四项finding关闭 | 保留Gate 10发布条件；[当前Manifest V0.3](pages/documents/tds-sds-coa/05_review/DOC-TDS_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md) |
| DOC-REACH | Gate 9通过，指定八项依赖已验收 | APP/生产环境与EG-006内容范围继续按合同；[当前Manifest V0.17](pages/documents/reach/06_handoff/DOC-REACH_CURRENT_GATE9_BASELINE_MANIFEST_V0.17.md) |
| DOC-COO | 当前Gate 1–4 `USER_APPROVED / CLOSED`；Gate6 `DRAFT_FOR_PROJECT_CONTROL_REVIEW` | [当前Manifest V0.13](pages/documents/certificate-of-origin/04_planning/DOC-COO_CURRENT_GATE_BASELINE_MANIFEST_V0.13.md)；[审查V0.1](pages/documents/certificate-of-origin/05_review/DOC-COO_GATE6_CONTRACT_CONSISTENCY_REVIEW_V0.1.md)与[交付包V0.1](pages/documents/certificate-of-origin/06_handoff/DOC-COO_GATE6_HANDOFF_PACKAGE_V0.1.md)已自检；Official Source、origin预填和Schema映射待独立复核。`PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED`保持；未批准或外发，Gate8–10未授权。 |
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
