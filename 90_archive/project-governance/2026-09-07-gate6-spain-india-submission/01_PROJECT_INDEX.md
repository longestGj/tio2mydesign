# TiO2 Malaysia · 当前资料索引

> 更新：2026-09-07；角色：导航，不复制正文、不决定事实或Gate。先读根AGENTS与PROJECT_CONTEXT，再按任务查本索引。链接不会自动加载；任务所需规范必须实际读取。最高版本号不自动代表批准版本。

当前入口修订与验证：[收口记录](docs/architecture/WORKFLOW_ENTRY_ALIGNMENT_CHANGE_RECORD_V1.0.md)。当前规则与历史页面批准分别读取。

## 1. 全站入口与规则

| 要了解什么 | 当前入口 |
|---|---|
| 当前Gate职责与历史兼容 | [Gate工作流V3.1](docs/architecture/GATE_WORKFLOW_V3.1.md)：原Gate 4/5合并为完整视觉Gate 4，原Gate 7职责并入Gate 6；5/7保留历史编号，8/9/10保持；[合并审计与变更记录](docs/architecture/GATE4_GATE5_CONSOLIDATION_AUDIT_AND_CHANGE_RECORD_V1.0.md)。不改变下列页面批准与授权。 |
| 稳定规则/阅读路由 | [AGENTS](AGENTS.md) |
| 全站前四环节已有结论 | [PROJECT_CONTEXT](PROJECT_CONTEXT.md) |
| 页面进度、未决项与当前页面指针 | [PROJECT_STATUS](00_PROJECT_STATUS.md) |
| 文件放置、旧路径对应 | [DIRECTORY_GUIDE](02_DIRECTORY_GUIDE.md) |
| 詳细治理（保留原章编号） | [治理细则V1.3](docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.3.md) |
| Gate 1–4流程/质量标准 | [PAGE_GATE_1_4_STANDARD_V2.1](docs/architecture/PAGE_GATE_1_4_STANDARD_V2.1.md) |
| 全站Gate1责任与逐页确认 | [Gate1串行控制V1.0](docs/architecture/GATE1_SITE_WIDE_SERIAL_CONTROL_V1.0.md)：本controller只负责Gate1；子代理执行、总控独立审查、用户确认一页再启动下一页；Gate2由用户指定的其他controller负责。57页覆盖盘点不等于批量重做或全部已独立验收。 |
| Agent与Skill职责 | [分工标准V1.0](docs/architecture/AGENT_SKILL_SEPARATION_STANDARD_V1.0.md) |
| Gate 4完整视觉Agent与方法 | [当前基线Manifest V1.2](docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.2.md)：一个[完整视觉执行Agent](agents/gate4-complete-visual/agent.md)，三项能力Skill及[共同工作合同](docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.0.md)。4A为内部方向检查，4B冻结后进入唯一最终独立审查环节；旧Gate 4/5角色与成果保留历史。Belgium仍暂停，本次设计批准不恢复页面执行。 |
| Gate 6 Agent与方法设计 | [当前角色V0.3](agents/gate6-review-delivery/agent.md)引用有效Gate 4最终审查证据，只复核变化、缺口和合同冲突；继续负责整体策划一致性、问题闭环、唯一开发交付包及Gate 9接受条件。[历史设计V0.1](docs/superpowers/specs/2026-09-07-gate6-agent-skill-design-v0.1.md)及验证记录保留；角色源不授权具体页面、外发或开发。 |
| 项目自有Skill | [方法源目录](skills/README.md)；[迁出与三方法拆分](docs/architecture/PROJECT_SKILL_DIRECTORY_AND_GATE1_SPLIT_V1.0.md) + [批准设计](docs/superpowers/specs/2026-09-06-search-intent-evidence-skill-design-v0.1.md) + [第一项方法源](skills/search-intent-evidence-analysis/SKILL.md) + [文件交接合同与验证V0.4](docs/superpowers/specs/2026-09-06-search-intent-evidence-skill-validation-v0.4.md)：先保存并读回，再返回路径/摘要/未完成事项；四条工具路径的方法验证保留于 V0.3；未安装/未正式启用 |
| Gate 1执行Agent角色 | 当前项目角色文件：[agent.md](agents/gate1-execution/agent.md)，由[已批准角色说明V0.7](docs/superpowers/specs/2026-09-06-gate1-execution-agent-design-v0.7.md)整理；未安装或运行平台注册。2026-09-06按用户要求由Italy子代理明确读取角色、执行Skill、保存方法报告并读回综合，四核心交付不变；[Italy当前记录V0.3](pages/markets/italy/MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md)已完成独立复审、用户内容批准及Gate 1正式关闭。[Germany当前记录V0.3](pages/markets/germany/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md)已补齐独立总控审查PASS并于2026-09-07正式关闭Gate 1，DE-D02可选事实未批准且不阻塞。两页后续Gate授权及进度由相应Controller管理；第二项问题驱动研究Skill暂缓，未创建。旧角色设计保留历史 |
| Gate 2执行Agent设计与交付 | 当前项目角色：[agent.md](agents/gate2-execution/agent.md) V0.5；[设计收束V0.7](docs/superpowers/specs/2026-09-06-gate2-execution-agent-design-v0.7.md)与[当前交付结构V0.4](docs/superpowers/specs/2026-09-07-gate2-delivery-structure-v0.4.md)。两步流程保持；Buyer冷读必须扫描完整页面，外部公司/品牌/链接/事实触发第三方来源表达精度检查。C仅因动作、事实/来源范围、机器语义、模块职责或条件渲染变化升级；Manifest仅因实质阶段或权威组合变化升级。V0.4保存为Chemours测试基线，未建立Gate 2专属Skill。 |
| Gate 2 Review Agent | 当前项目角色：[agent.md](agents/gate2-review/agent.md) V0.5；[用户批准设计V0.1](docs/superpowers/specs/2026-09-06-gate2-review-agent-design-v0.1.md)与[当前交付结构V0.4](docs/superpowers/specs/2026-09-07-gate2-delivery-structure-v0.4.md)。Reviewer采用Discovery/Reporting两遍流程，找到一个问题后必须继续到页面末尾；条件性来源审查核对实体、谓词、范围、限定词/日期和链接标签。报告精简但保存全部实质Finding。Reviewer仍不改文案、不授予Gate批准。 |
| Gate 2串行Full Copy批次 | [历史12页总控合同V1.1](docs/architecture/GATE2_SERIAL_FULL_COPY_CONTROL_V1.1.md)已完成并登记用户结果；[七页串行控制V1.0](docs/architecture/GATE2_REMAINING_SEVEN_SERIAL_FULL_COPY_CONTROL_V1.0.md)已严格串行完成，用户随后批准Germany、Italy、Coatings、Plastics、Masterbatch、Printing Inks、Paper当前精确Full Copy与模块顺序，见[七页批准与关闭记录V1.0](docs/architecture/GATE2_REMAINING_SEVEN_USER_APPROVAL_AND_CLOSURE_V1.0.md)。七页Gate2均关闭；该Gate2批准记录本身不授权Gate3，Germany/Italy后续单独授权见本表Gate3并行任务。 |
| Spain当前页面任务 | [当前Manifest V0.12](pages/markets/spain/MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.12.md)：Gate1–5已`APPROVED / CLOSED`；[ES-G5-APPROVAL-01](pages/markets/spain/05_review/MARKET-EU-ES_GATE5_USER_APPROVAL_AND_CLOSURE_V0.1.md)。[Gate 5→6正式接收](pages/markets/spain/05_review/MARKET-EU-ES_GATE5_TO_GATE6_HANDOFF_V0.1.md)已就绪，Gate6及后续未授权。 |
| DOC-COO当前页面任务 | [当前Manifest V0.12](pages/documents/certificate-of-origin/04_planning/DOC-COO_CURRENT_GATE_BASELINE_MANIFEST_V0.12.md)：Gate1–5已`APPROVED / CLOSED`；[COO-G5-APPROVAL-01](pages/documents/certificate-of-origin/05_review/DOC-COO_GATE5_USER_APPROVAL_AND_CLOSURE_V0.1.md)。六模块、文档预选合同及事实边界保持；[Gate 5→6正式接收](pages/documents/certificate-of-origin/05_review/DOC-COO_GATE5_TO_GATE6_HANDOFF_V0.1.md)已就绪，Gate6及后续未授权。 |
| Netherlands当前页面任务 | [当前Manifest V0.7](pages/markets/netherlands/MARKET-EU-NL_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md)：旧Gate4方向关闭；已批准方向和42张证据继续有效。当前完整Gate4只补实际4B缺口，尚未授权继续执行。 |
| Belgium当前页面任务 | [当前Manifest V0.6](pages/markets/belgium/MARKET-EU-BE_CURRENT_GATE_BASELINE_MANIFEST_V0.6.md)：Gate1–3关闭，旧Gate4执行暂停。合并决定不自动恢复，也不把原方向授权扩展为完整视觉；恢复范围须另行明确。 |
| Poland当前页面任务 | [当前Manifest V0.21](pages/markets/poland/MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.21.md)：用户“批准Poland。”，Gate6 **APPROVED / CLOSED**，生命周期 **APPROVED_FOR_HANDOFF**；[批准与关闭](pages/markets/poland/05_review/MARKET-EU-PL_GATE6_USER_APPROVAL_AND_CLOSURE_V0.1.md)锁定原包及12项Gate9接受条件，6类后续依赖保持。尚未外发，Gate8–10及开发发布未授权。 |
| RES-CHEMOURS当前页面任务 | [当前Manifest V0.17](pages/resources/chemours-alternatives/RES-CHEMOURS_CURRENT_GATE_BASELINE_MANIFEST_V0.17.md)；Gate 1–3已`APPROVED / CLOSED`。用户2026-09-07回复“通过。”批准Gate 3 V0.2冻结组合；[批准与关闭记录](pages/resources/chemours-alternatives/05_review/RES-CHEMOURS_GATE3_USER_APPROVAL_AND_CLOSURE_V0.1.md)和[Gate 3→4交接表](pages/resources/chemours-alternatives/05_review/RES-CHEMOURS_GATE3_TO_GATE4_HANDOFF_V0.1.md)已完成，后者为`READY_FOR_GATE4_WHEN_AUTHORIZED`。Mapping/indexing继续独立待决，Gate 4未授权。 |
| Chloride Process当前页面任务 | [当前Manifest V0.22](pages/products/chloride-process/PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.22.md)：Gate 1–5已`APPROVED / CLOSED`；[CL-G5-APPROVAL-01](pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE5_USER_APPROVAL_AND_CLOSURE_V0.1.md)。Gate 5→6接收已就绪，Gate 6–10未授权。 |
| Gate 3 Agent与方法 | [当前基线Manifest V1.5](docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.5.md)：[执行角色V0.3](agents/gate3-execution/agent.md)、[线框设计V0.3](skills/responsive-wireframe-design/SKILL.md)、[布局核验V0.4](skills/layout-interaction-verification/SKILL.md)及[交接合同V0.2](docs/superpowers/specs/2026-09-07-gate3-to-gate4-handoff-contract-v0.2.md)。用户授权范围控制定向修订，标准§4.3为准；[修订与校验记录](docs/superpowers/specs/2026-09-07-gate3-v0.3-scope-targeted-revision.md)。V0.3已在Germany和Italy两个新真实页面完成执行、总控独立审查及用户批准关闭，两页均无阻塞Finding；不扩大其他页面授权。 |
| Gate 3八页串行批次 | [当前串行控制V1.8](docs/architecture/GATE3_EIGHT_PAGE_SERIAL_CONTROL_V1.8.md)：八页均已由子代理严格串行完成，并经总控独立审查按预授权关闭Gate3；[完成审计](docs/architecture/GATE3_EIGHT_PAGE_SERIAL_COMPLETION_V1.0.md)核对8个冻结源、64张正式图及全部审查/关闭/交接记录，身份差异0。本合同不授权Gate4–10。 |
| Gate 3五个Resource串行批次 | [当前串行控制V1.6](docs/architecture/GATE3_FIVE_RESOURCE_SERIAL_CONTROL_V1.6.md)：五页均已严格串行完成并按预授权关闭Gate3；[完成记录](docs/architecture/GATE3_FIVE_RESOURCE_SERIAL_COMPLETION_V1.0.md)与[机器审计](docs/architecture/GATE3_FIVE_RESOURCE_SERIAL_COMPLETION_AUDIT_V1.0.json)确认5个冻结源、40张正式图、身份差异0、失败页0。 |
| Gate 3 Germany＋Italy并行任务 | [控制V1.2](docs/architecture/GATE3_GERMANY_ITALY_PARALLEL_CONTROL_V1.2.md)：两个执行子代理已分别完成Germany和Italy Gate3 V0.3；总控从精确冻结候选独立审查后，用户回复“批准。”，决定`DE-G3-APPROVAL-01`与`IT-G3-APPROVAL-01`关闭两页Gate3，阻塞Finding 0；[闭环审计](docs/architecture/GATE3_GERMANY_ITALY_USER_APPROVAL_CLOSURE_AUDIT_V1.0.json)为23项检查、0失败。[Germany当前Manifest V0.8](pages/markets/germany/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md) / [Italy当前Manifest V0.8](pages/markets/italy/MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md)。两份Gate3→4交接为`READY_FOR_GATE4_WHEN_AUTHORIZED`；Gate4及后续未授权。 |
| 本次入口重构记录 | [迁移与核验](docs/architecture/PROJECT_ENTRY_RESTRUCTURE_MIGRATION_V1.0.md) |

## 2. 定位、架构与事实权威

| 范围 | 当前入口 / 使用限制 |
|---|---|
| 网站需求 | [PRD V0.4](docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md)与后续明确批准增补共同使用 |
| 页面身份/URL | [登记册V0.2](docs/architecture/PAGE_REGISTRY_V0.2.md)，当前57页，不代表全部已上线 |
| 关键词归属/内耗 | [实施主表](research/keyword/11_page_keyword_master.csv)，不是历史研究建议表 |
| 页面通用任务卡 | [Brief模板](docs/page-briefs/PAGE_BRIEF_TEMPLATE_V0.4.md) |
| 页面类型规则/任务合同 | [Playbooks当前流程入口](docs/page-playbooks/README.md) / [Briefs](docs/page-briefs/)，按本页Manifest选择完整Brief与适用增补 |
| 企业事实缺口/用户决定 | [Evidence Gap Decision Register](docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md) |
| Malaysia-origin公开表达 | [全站授权V1.0](docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md) |
| 法律页架构增补 | [No-Terms决定V1.0](docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md) |
| 产品Application/Process关系 | [PRODUCT V0.3矩阵](pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv) + [统一审计](pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md) |
| TDS/应用指南原始资料 | [材料目录](<docs/7.27 马来全套TDS +应用指南/>)；具体型号以各自当前Manifest锁定资料为准 |
| Grade当前执行流程 | [SOP V2.2](docs/product-pages/03_Product_Detail_Template_Reuse_Development_SOP_V2.2.md)、[清单V1.2](docs/product-pages/04_Product_Detail_Single_Grade_Operational_Checklist_V1.2.md)、[Product Playbook增补V0.3](docs/page-playbooks/PRODUCT_PLAYBOOK_CURRENT_SOP_ADDENDUM_V0.3.md)；旧产品事实和已完成串行结果保持。 |
| Grade执行与既有串行结果 | [产品页规范目录](docs/product-pages/)；[串行关闭Manifest V0.16](docs/product-pages/29_Product_Detail_Development_SOP_V2_Autonomous_Serial_Manifest_V0.16.md)，不自动授权新页面 |

## 3. 研究资料：按问题读取，不重做全站研究

- [关键词研究专项规则](research/keyword/AGENTS.md)。
- [研究总结](research/keyword/08_research_summary.md)：研究范围/意图/方法与资料日期。
- [研究目录](research/keyword/)：主表、聚类、SERP、竞品/国家与QA，按所需问题查找。
- [早期网站定位材料](docs/strategy/TiO2_Malaysia_Website_Positioning_2026-08-29.md)：历史讨论来源，不是必读启动文件，也不是所有提案都获批准。

研究输出有自己的审查状态；当前网站架构以§2批准源为准。旧 `03_keyword_architecture_map.csv` 不覆盖当前实施主表。动态法规/贸易需读取当前官方证据，缺少搜索量不伪造。

## 4. 视觉与共享组件

| 范围 | 当前入口 |
|---|---|
| 品牌视觉 | [Visual Standard V1.0](brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md) |
| 主CTA无障碍增补 | [CTA Addendum V1.0](brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md) |
| Header / Menu / Footer | [Global Chrome V0.5](docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md)：固定RFQ、共享维护、无可见CURRENT |
| 生产SVG | [Production Logo Manifest V1.0](brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md) |
| 法律/隐私共享区 | [Footer Legal Utility Addendum](docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md)与§2 No-Terms更新一起使用 |
| 页面完整视觉与批准范围 | [状态中的页面指针](00_PROJECT_STATUS.md) → 本页当前Manifest → 其列出的规格/PNG/哈希 |

## 5. 各页面体系入口

| 页面体系 | 目录 |
|---|---|
| Home | [pages/home](pages/home/) |
| Markets | [pages/markets](pages/markets/) |
| Products / Grades | [pages/products](pages/products/) / [detail-template](pages/products/detail-template/) |
| Applications | [pages/applications](pages/applications/)；五篇主Application文章的当前批准状态及后续选题Controller职责见[三篇批准与选题职责记录V0.1](pages/applications/02_analysis/APPLICATION_ARTICLE_TOPIC_CONTROLLER_MANDATE_AND_THREE_ARTICLE_USER_APPROVAL_V0.1.md)；42个候选题材与28个串行研究单元见[选题总计划V0.1](pages/applications/04_planning/APPLICATION_ARTICLE_TOPIC_MASTER_PLAN_V0.1.md)、[详细Backlog V0.1](pages/applications/04_planning/APPLICATION_ARTICLE_TOPIC_BACKLOG_V0.1.csv)及[R01 PVC/uPVC研究决定V0.1](pages/applications/01_research/r01-pvc-upvc/R01_RESEARCH_DECISION_V0.1.md)；R01首版经用户评审后完成读者质量定向修订，当前等待用户批准修订正文，见[R01修订正文D23验收V0.2](pages/applications/02_analysis/R01_PVC_UPVC_ARTICLE_D23_ACCEPTANCE_V0.2.md)及[R01读者向修订指令V0.1](pages/applications/02_analysis/R01_PVC_UPVC_READER_FACING_REVISION_DIRECTIVE_V0.1.md) |
| Documents | [pages/documents](pages/documents/) |
| Resources | [pages/resources](pages/resources/)；RES-PROC 当前由 [Gate 9比较审查Manifest V0.13](pages/resources/05_review/RES-PROC_CURRENT_GATE9_COMPARATIVE_REVIEW_MANIFEST_V0.13.md) 导航 |
| About / Contact | [pages/about-contact](pages/about-contact/) |
| Conversion | [pages/conversion](pages/conversion/)；RFQ在[request-a-quote](pages/conversion/request-a-quote/)，Sample在[request-sample](pages/conversion/request-sample/) |
| Legal / Privacy | [pages/legal-privacy](pages/legal-privacy/) |

找具体页面：先用Page ID查登记册与Status，再打开页面当前Manifest；完整Brief、关系增补、设计、审查和handoff按Manifest的authority order组合。找不到/状态相冲突时登记，不凭文件名猜当前批准版本。

## 6. 历史与维护

- 原完整索引（含历次交付链接）已逐字节保留：[2026-09-06历史索引](90_archive/project-governance/2026-09-06-entry-restructure/01_PROJECT_INDEX.md)。只用于追溯，不作为当前版本表。
- [90_archive](90_archive/)保留历史；[99_workspace](99_workspace/)放临时预览与验证，不能是唯一正式证据。
- 新版被批准时：更新页面唯一Manifest及Status对应行；涉及全站权威入口再更新本索引。避免为同一页面追加多行“当前”。
- 新输入先标识资料/草案/批准范围；不因进入索引而自动批准。目录变化同步链接，重大入口重构先归档。

## 原Gate 4方向八页串行合同（2026-09-07，保留原授权范围）

[G4-8PAGE-SERIAL-01](docs/architecture/GATE4_EIGHT_PAGE_SERIAL_CONTROL_V1.0.md)记录用户授权与预认可、固定八页队列和完成条件；[动态进度](docs/architecture/GATE4_EIGHT_PAGE_SERIAL_PROGRESS.md)记录接手、在途、关闭及Gate 5接口。当前任务定时监控Gate 3，严格一页在途，不扩大到其他页面或Gate 5。











上述旧方向批次的Gate 5接口及停止点按当前工作流历史映射解释；不因阶段合并自动升级为完整Gate 4连续授权。实际进度回读对应页面Manifest，不能仅凭原合同中的在途描述启动。
