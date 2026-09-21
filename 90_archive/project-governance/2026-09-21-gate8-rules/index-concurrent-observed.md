# TiO2 Malaysia · 当前资料索引

2026-09-21：按[Gate 3/4合并决定](docs/architecture/GATE3_GATE4_MERGE_DECISION_V1.0.md)，Gate 4统一负责跨页一致性、结构、视觉和验证；Gate 5独立审查后总控关闭一次。新页从Gate 2批准组合进入，不要求单独Gate 3冻结。历史成果、仅旧Gate 3授权及暂停按原范围继承。

2026-09-21 剩余13个Product Detail页面Gate 9首轮独立验收已完成：Manifest 85/85、预检34/34、HTTP审计299/299通过；14项AC为12 PASS / 2 FAIL。共享Cookie Settings在反向键盘遍历时焦点逃逸到BODY，形成唯一根Finding `PD13-D32-G9-ROOT-F01`，同时使A11Y与REGRESSION失败；已正式退回04开发做定向修复。实体设备、人工命名AT和原生200%为用户例外、未测试且不阻塞。当前`READ_ONLY_QA_NOT_APPROVED / GATE8_RETURN_REQUIRED / INTEGRATION_NOT_READY / RELEASE_NOT_AUTHORIZED`。[当前13页Manifest V0.3](pages/products/detail-template/PRODUCT-DETAIL-13-GRADE_D32_NEXTJS_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md) / [首轮独立验收V0.1](pages/products/detail-template/07_qa/PRODUCT-DETAIL-13-GRADE_D32_NEXTJS_GATE9_INDEPENDENT_ACCEPTANCE_V0.1.md) / [Gate 9派发](pages/products/detail-template/07_qa/PRODUCT-DETAIL-13-GRADE_D32_NEXTJS_GATE9_AUTHORIZATION_AND_DISPATCH_V0.1.md)。

2026-09-20 CONV-RFQ已关闭D32 Gate 6并正式派发Gate 8给`01开发`：首审4项合同Finding在V0.2全部修订，定向复验`REVIEW_PASS`、新Finding 0；开发任务已把独立分支刷新到当时最新local `develop` `ce4147c...`，提交package-bound计划`b9f56c8...`并开始首个TDD模型测试。receiver限fake/mock，未授权真实提交；Gate9待交回，Gate10、PR/push/merge、部署、发布和索引未授权。[当前RFQ D32 Manifest V0.2](pages/conversion/request-a-quote/05_review/CONV-RFQ_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md) / [Gate6关闭](pages/conversion/request-a-quote/05_review/CONV-RFQ_D32_GATE6_CONTROLLER_CLOSURE_V0.1.md) / [Gate8派发回执V0.2](pages/conversion/request-a-quote/06_handoff/CONV-RFQ_D32_GATE8_DISPATCH_RECEIPT_V0.2.json)。

2026-09-20 M-350 D32已完成Gate 0–9：候选implementation `a13d270...`、evidence/clean HEAD `a96d850...`、build `wp-b6ac...`通过独立只读验收，16/16 AC PASS、新Finding 0。页面`READ_ONLY_QA_APPROVED / CLOSED`；Product Hub组合已关闭，七项外部依赖使Integration保持未就绪。实体设备、手工命名AT和原生200%缩放按用户决定不要求。Gate 8已确认停止返修与隔离preview并保留volumes/候选。Gate 10、合并、部署、发布和索引未授权。[当前M-350 Manifest V0.7](pages/products/detail-template/GRADE-M350_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md) / [Gate 9验收](pages/products/detail-template/07_qa/GRADE-M350_D32_GATE9_INDEPENDENT_ACCEPTANCE_V0.1.md)。

2026-09-20 PRODUCT-000 D32 Gate3→9已完成：替换候选implementation `95ed4c4...`、evidence HEAD `8a4e3f5...`、build `wp-9fcfb...`通过Gate9定向独立复核；首审F01/F02/VF01全部关闭，新Finding 0。页面PASS，外部Grade/Process/Support/RFQ依赖仍开放，Gate10/部署/发布/索引未授权。[当前Manifest V0.2](pages/products/PRODUCT-000_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md) / [Gate9关闭](pages/products/05_review/PRODUCT-000_D32_GATE9_PROJECT_CONTROL_CLOSEOUT_V0.1.md) / [定向复核](pages/products/05_review/PRODUCT-000_D32_GATE9_TARGETED_RECHECK_V0.1.md)。

2026-09-20 D32首页Gate9已按用户明确范围例外关闭：11项AC通过，A09浏览器部分通过，真实触控/读屏/原生200%三项USER_WAIVED且未测试；VF01关闭，实现必修0、待补证0。Integration NOT_READY（24目标依赖）、Release NOT_AUTHORIZED。[当前Home Manifest V1.12](pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.12.md) / [决定与关闭](pages/home/07_qa/HOME-001_D32_GATE9_USER_EXCEPTION_CLOSEOUT_V1.0.md)。

> 2026-09-20 当前开发归属：TiO2 Malaysia 全站后续开发统一由 `D:\32Wordpress_new`（D32）承接，不再使用 D16 开发。D23继续负责策划、交付规格和只读验收。旧D16代码、任务、运行与验收记录仅证明其原对象，不代表D32状态；页面启动与发布仍按各自授权。旧合同中的开发归属和技术栈解释统一见[开发归属切换决定V1.0](docs/architecture/DEVELOPMENT_OWNER_D32_SWITCH_DECISION_V1.0.md)。

2026-09-20 D32首页开发已交回；总控核对候选HEAD、clean工作区及34项证据SHA一致。开发方自检通过，独立Gate9尚未启动，待用户授权；24个外部目标和物理AT等保留。[当前Manifest V1.10](pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.10.md) / [开发交回接收](pages/home/06_handoff/HOME-001_D32_GATE8_COMPLETION_INTAKE_V1.0.md)。

2026-09-20 D32“00首页开发”已正式接收并启动Gate8；总控已读回接收文件，准确交付包与范围一致，HANDED_OFF=YES。开发完成、Gate9及发布尚未通过。[当前首页Manifest V1.9](pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.9.md) / [接收证据](pages/home/06_handoff/HOME-001_D32_GATE8_DISPATCH_RECEIPT_V1.1.json)。

首页开发当前入口：[HOME-001 Manifest V1.8](pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.8.md)。用户已指定D32“00首页开发”执行Gate8，正式包V0.2不变；[授权与派发](pages/home/06_handoff/HOME-001_D32_GATE8_AUTHORIZATION_AND_DISPATCH_V1.0.md)记录接收任务及范围。

首页当前入口（2026-09-20）：[HOME-001 Manifest V1.7](pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.7.md)统一导航D32 WordPress首批[Gate6包V0.2](pages/home/06_handoff/HOME-001_D32_GATE6_HANDOFF_PACKAGE_V0.2.md)、[独立复验](pages/home/05_review/HOME-001_D32_GATE6_TARGETED_RECHECK_V0.1.md)与[总控关闭](pages/home/05_review/HOME-001_D32_GATE6_PROJECT_CONTROL_CLOSEOUT_V1.0.md)。旧D16首页及全站运行记录保留历史，不表示D32已实现；本批Gate8未启动。

> 2026-09-07当前批准方式：Gate 3、4、6按[总控常设关闭授权](docs/architecture/GATE_3_4_6_DELEGATED_CLOSURE_AUTHORITY_V1.0.md)执行独立审查与总控关闭，不再等待逐页用户批准；Gate 1/2/9/10不变。本文历史“用户批准”表述只保留原记录语境，当前三关关闭由该授权解释；内容事实决定、明确暂停、下一阶段启动与外发/开发/发布权限分别保留。


> 更新：2026-09-07；角色：导航，不复制正文、不决定事实或Gate。先读根AGENTS与PROJECT_CONTEXT，再按任务查本索引。链接不会自动加载；任务所需规范必须实际读取。最高版本号不自动代表批准版本。

当前入口修订与验证：[收口记录](docs/architecture/WORKFLOW_ENTRY_ALIGNMENT_CHANGE_RECORD_V1.0.md)。当前规则与历史页面批准分别读取。

## 1. 全站入口与规则

总控编排当前入口：[角色V0.16](agents/project-orchestrator/agent.md)及[生效与身份V1.15](docs/architecture/PROJECT_ORCHESTRATOR_ACTIVATION_V1.15.md)。用于状态恢复、准入、派发、接收、异常及关闭；按当前交接合同派发新Gate 5审查与Gate 6差异路径。

| 要了解什么 | 当前入口 |
|---|---|
| 当前Gate职责与历史兼容 | [Gate工作流V3.5](docs/architecture/GATE_WORKFLOW_V3.5.md)保留合并Gate 4生命周期；当前制作/冻结→新Gate 5独立审查→总控关闭按[4→5合同](docs/architecture/GATE4_GATE5_VISUAL_HANDOFF_CONTRACT_V1.1.md)，后续凭独立启动授权按[5→6接收合同](docs/architecture/GATE5_GATE6_ACCEPTANCE_CONTRACT_V1.1.md)进入Gate 6。历史有效审查/关闭保持并可等价继承，原Gate 7职责并入Gate 6。 |
| 稳定规则/阅读路由 | [AGENTS](AGENTS.md) |
| 全站前四环节已有结论 | [PROJECT_CONTEXT](PROJECT_CONTEXT.md) |
| 页面进度、未决项与当前页面指针 | [PROJECT_STATUS](00_PROJECT_STATUS.md) |
| 文件放置、旧路径对应 | [DIRECTORY_GUIDE](02_DIRECTORY_GUIDE.md) |
| 詳细治理（保留原章编号） | [治理细则V1.6](docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.6.md) |
| Gate 1–4流程/质量标准 | [PAGE_GATE_1_4_STANDARD_V2.4](docs/architecture/PAGE_GATE_1_4_STANDARD_V2.4.md) |
| 全站Gate1责任与逐页确认 | [Gate1串行控制V1.0](docs/architecture/GATE1_SITE_WIDE_SERIAL_CONTROL_V1.0.md)：本controller只负责Gate1；子代理执行、总控独立审查、用户确认一页再启动下一页；Gate2由用户指定的其他controller负责。57页覆盖盘点不等于批量重做或全部已独立验收。 |
| Agent与Skill职责 | [分工标准V1.0](docs/architecture/AGENT_SKILL_SEPARATION_STANDARD_V1.0.md) |
| Gate 4页面设计Agent与方法 | [当前基线Manifest V1.11](docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.11.md)：一个[完整视觉执行Agent](agents/gate4-complete-visual/agent.md)，结构、品牌、完整制作与核验能力Skill及[共同工作合同](docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.4.md)。4A为内部方向检查，4B冻结后进入唯一最终独立审查环节；旧Gate 4/5角色与成果保留历史。Belgium仍暂停，本次设计批准不恢复页面执行。 |
| Gate 6策划总审与开发交付 | [当前基线V1.3](docs/architecture/GATE6_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.3.md)：Agent V0.9、一致性Skill V0.4、交付Skill V0.5；有效上游继承、触发式扩大检查、单一自检、新包独立复核、总控维护Manifest。 |
| 全站公开/SEO/GTM-GA4当前执行 | [生产GA4法律一致性当前Gate9 Manifest V1.1](docs/architecture/TIO2_MY_PRODUCTION_GA4_LEGAL_PARITY_CURRENT_GATE9_MANIFEST_V1.1.md) / [本地develop集成V1.0](docs/architecture/TIO2_MY_PRODUCTION_GA4_LEGAL_PARITY_LOCAL_DEVELOP_INTEGRATION_V1.0.md) / [Gate9定向复验V1.0](docs/architecture/TIO2_MY_PRODUCTION_GA4_LEGAL_PARITY_GATE9_TARGETED_RECHECK_V1.0.md) / [Google上线后状态V1.0](docs/architecture/TIO2_MY_GOOGLE_POSTLAUNCH_READONLY_STATUS_20260914_V1.0.md) / [On-page与社交元数据验收V1.0](docs/architecture/TIO2_MY_PRODUCTION_ONPAGE_SOCIAL_METADATA_READONLY_VERIFICATION_20260914_V1.0.md) / [生产SEO深度验收V1.0](docs/architecture/TIO2_MY_PRODUCTION_SEO_DEEP_READONLY_VERIFICATION_20260914_V1.0.md) / [生产只读验收V1.0](docs/architecture/TIO2_MY_PRODUCTION_SEO_GA4_READONLY_VERIFICATION_20260914_V1.0.md) / [原GA4 Gate9 Manifest V1.2](docs/architecture/TIO2_MY_GA4_ACTIVE_CURRENT_GATE9_MANIFEST_V1.2.md) / [Gate6交付包V1.0](docs/architecture/TIO2_MY_FULL_PUBLIC_SEO_GA4_GATE6_DELIVERY_V1.0.md)：三页GA4法律文案返修已通过Gate9并按用户后续授权合并到本地develop `fe1b64d5…`；`LOCAL_DEVELOP_INTEGRATION=COMPLETE`。整站develop/CMS组合仍为43/57，`INTEGRATION_ACCEPTANCE=NOT_READY`；`TIO2-MY-PROD-GA4-F01=RESOLVED_IN_ACCEPTED_CANDIDATE / OPEN_IN_PRODUCTION`。须另行授权发布并完成生产复验后才能关闭生产Finding；Gate10、push、deploy和发布未授权。 |
| Germany当前页面任务 | [当前Manifest V0.13](pages/markets/germany/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.13.md)：Gate 9 `READ_ONLY_QA_IN_REVIEW / NOT_PASS`；RFQ/Sample与设备/生产证据开放。 |
| Italy当前页面任务 | [当前Manifest V0.13](pages/markets/italy/MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.13.md)：Gate 9 `READ_ONLY_QA_IN_REVIEW / NOT_PASS`；RFQ/Sample、Documents接收及设备/生产证据开放。 |

| Gate 9 Agent与方法改进 | [当前基线V1.2](docs/architecture/GATE9_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.2.md)：Agent V0.6、运行Skill V0.6、证据合同V1.1；新增静态制品方式，保留V1.0兼容。D16队列只用于历史对象；当前开发在develop集成，页面/集成/发布结论分开。工具合成测试14项通过，未做真实页面V1.1试跑。 |
| 项目自有Skill | [方法源目录](skills/README.md)；[迁出与三方法拆分](docs/architecture/PROJECT_SKILL_DIRECTORY_AND_GATE1_SPLIT_V1.0.md) + [批准设计](docs/superpowers/specs/2026-09-06-search-intent-evidence-skill-design-v0.1.md) + [第一项方法源](skills/search-intent-evidence-analysis/SKILL.md) + [文件交接合同与验证V0.4](docs/superpowers/specs/2026-09-06-search-intent-evidence-skill-validation-v0.4.md)：先保存并读回，再返回路径/摘要/未完成事项；四条工具路径的方法验证保留于 V0.3；未安装/未正式启用 |
| Gate 1执行Agent角色 | 当前项目角色文件：[agent.md](agents/gate1-execution/agent.md)，由[已批准角色说明V0.7](docs/superpowers/specs/2026-09-06-gate1-execution-agent-design-v0.7.md)整理；未安装或运行平台注册。2026-09-06按用户要求由Italy子代理明确读取角色、执行Skill、保存方法报告并读回综合，四核心交付不变；[Italy当前记录V0.3](pages/markets/italy/MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md)已完成独立复审、用户内容批准及Gate 1正式关闭。[Germany当前记录V0.3](pages/markets/germany/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md)已补齐独立总控审查PASS并于2026-09-07正式关闭Gate 1，DE-D02可选事实未批准且不阻塞。两页后续Gate授权及进度由相应Controller管理；第二项问题驱动研究Skill暂缓，未创建。旧角色设计保留历史 |
| Gate 2执行Agent设计与交付 | 当前项目角色：[agent.md](agents/gate2-execution/agent.md) V0.7；[设计收束V0.7](docs/superpowers/specs/2026-09-06-gate2-execution-agent-design-v0.7.md)与[当前交付结构V0.6](docs/superpowers/specs/2026-09-08-gate2-delivery-structure-v0.6.md)。两步流程与用户批准保持；骨架限于方向判断、同轮集中返修，总控核对范围及跨合同；Buyer冷读必须扫描完整页面，外部公司/品牌/链接/事实触发第三方来源表达精度检查。C仅因动作、事实/来源范围、机器语义、模块职责或条件渲染变化升级；Manifest仅因实质阶段或权威组合变化升级。V0.4保存为Chemours测试基线，未建立Gate 2专属Skill。 |
| Gate 2 Review Agent | 当前项目角色：[agent.md](agents/gate2-review/agent.md) V0.7；[用户批准设计V0.1](docs/superpowers/specs/2026-09-06-gate2-review-agent-design-v0.1.md)与[当前交付结构V0.6](docs/superpowers/specs/2026-09-08-gate2-delivery-structure-v0.6.md)。与总控按V0.6分工，局部复验不重启完整链；Reviewer采用Discovery/Reporting两遍流程，找到一个问题后必须继续到页面末尾；条件性来源审查核对实体、谓词、范围、限定词/日期和链接标签。报告精简但保存全部实质Finding。Reviewer仍不改文案、不授予Gate批准。 |
| Gate 2串行Full Copy批次 | [历史12页总控合同V1.1](docs/architecture/GATE2_SERIAL_FULL_COPY_CONTROL_V1.1.md)已完成并登记用户结果；[七页串行控制V1.0](docs/architecture/GATE2_REMAINING_SEVEN_SERIAL_FULL_COPY_CONTROL_V1.0.md)已严格串行完成，用户随后批准Germany、Italy、Coatings、Plastics、Masterbatch、Printing Inks、Paper当前精确Full Copy与模块顺序，见[七页批准与关闭记录V1.0](docs/architecture/GATE2_REMAINING_SEVEN_USER_APPROVAL_AND_CLOSURE_V1.0.md)。七页Gate2均关闭；该Gate2批准记录本身不授权Gate3，Germany/Italy后续单独授权见本表Gate3并行任务。 |
| Spain当前页面任务 | Gate 9 route依赖定向复验完成，**ALL RECORDED FINDINGS CLOSED FOR EXACT CANDIDATE / UNVERIFIED LAYERS REMAIN / NOT_PASS**。[当前Manifest V0.20](pages/markets/spain/MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.20.md)；[route复验V0.3](pages/markets/07_qa/MARKET_FOUR_ROUTE_DEPENDENCY_TARGETED_RECHECK_V0.3.md)。F01/F02/F03/F04均已按精确候选关闭。 |
| India当前页面任务 | Gate 9 route依赖定向复验完成，**ALL RECORDED FINDINGS CLOSED FOR EXACT CANDIDATE / UNVERIFIED LAYERS REMAIN / NOT_PASS**。[当前Manifest V0.18](pages/markets/india/MARKET-IN-001_CURRENT_GATE_BASELINE_MANIFEST_V0.18.md)；[route复验V0.3](pages/markets/07_qa/MARKET_FOUR_ROUTE_DEPENDENCY_TARGETED_RECHECK_V0.3.md)。F01/F02/F03/F04均已按精确候选关闭。 |
| Brazil EN/PT当前页面任务 | Gate9定向复验已关闭EN完整视觉`BR-EN-G9-F01`及EN/PT共享RFQ history `BR-EN-G9-F03`、`BR-PT-G9-F02`；下游route Findings、`PROVISIONAL_ROUTE`及设备/接收/隔离依赖保持。[EN Manifest V0.16](pages/markets/brazil/MARKET-BR-EN_CURRENT_GATE_BASELINE_MANIFEST_V0.16.md) / [PT Manifest V0.15](pages/markets/brazil/MARKET-BR-PT_CURRENT_GATE_BASELINE_MANIFEST_V0.15.md) / [定向复验V1.1](docs/architecture/GATE9_BR_CL_COO_FOUR_PAGE_TARGETED_RECHECK_V1.1.md)。两页总体仍`GATE9_NOT_PASS`；Gate10、部署和发布未授权。 |
| DOC-COO当前页面任务 | Gate9首轮`NOT_PASS / REQUIRED_EVIDENCE_REMAINS`：[当前Manifest V0.17](pages/documents/certificate-of-origin/04_planning/DOC-COO_CURRENT_GATE_BASELINE_MANIFEST_V0.17.md) / [验收V0.1](pages/documents/certificate-of-origin/07_qa/DOC-COO_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md)。页面实现无确认缺陷；命名无障碍环境覆盖及强制身份/独立命令链两项开放。`PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED`保持；Gate10、部署和发布未授权。 |
| Netherlands当前页面任务 | Gate 9定向复验完成，**OTHER_LAYERS_REMAIN / NOT_PASS**。[当前Manifest V0.16](pages/markets/netherlands/MARKET-EU-NL_CURRENT_GATE_BASELINE_MANIFEST_V0.16.md)；[复验V0.2](pages/markets/07_qa/MARKET_FOUR_GATE9_TARGETED_RECHECK_V0.2.md)。NL-G9-F01关闭；VVVF、接收、设备和生产层仍开放。 |
| Belgium当前页面任务 | Gate 9定向复验完成，**OTHER_LAYERS_REMAIN / NOT_PASS**。[当前Manifest V0.16](pages/markets/belgium/MARKET-EU-BE_CURRENT_GATE_BASELINE_MANIFEST_V0.16.md)；[复验V0.2](pages/markets/07_qa/MARKET_FOUR_GATE9_TARGETED_RECHECK_V0.2.md)。F01/F03关闭，F02按准确运行入口范围关闭；接收、完整隔离矩阵、设备和生产层仍开放。 |
| Poland当前页面任务 | [当前Manifest V0.25](pages/markets/poland/MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.25.md)；[PL-G9-RECHECK-04](pages/markets/poland/07_qa/MARKET-EU-PL_GATE9_TARGETED_RECHECK_V0.4.md)：F01/F02/F03实现必修全部关闭；待E02外部账户/真实接收证据及Applications依赖。Gate1–4/6批准保持，Gate9未整体关闭，Gate10未授权。 |
| RES-CHEMOURS当前页面任务 | [当前Manifest V0.21](pages/resources/chemours-alternatives/RES-CHEMOURS_CURRENT_GATE_BASELINE_MANIFEST_V0.21.md)：Gate 9 `READ_ONLY_QA_IN_REVIEW / NOT_PASS`；RFQ、Documents receiver、设备/AT及route/canonical/Schema决定开放。 |
| Chloride Process当前页面任务 | Gate9定向复验已在精确Build输出中关闭Schema `CL-G9-F01`；[当前Manifest V0.29](pages/products/chloride-process/PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.29.md) / [定向复验V1.1](docs/architecture/GATE9_BR_CL_COO_FOUR_PAGE_TARGETED_RECHECK_V1.1.md)。Applications route、无障碍环境和负向数据/cache/scope `CL-G9-F02…F04`继续开放；八Grade关系和页面视觉保持通过。Gate10、部署和发布未授权。 |
| Sulfate Process当前页面任务 | [当前Manifest V0.13](pages/products/sulfate-process/PRODUCT-PROC-SU_CURRENT_GATE_BASELINE_MANIFEST_V0.13.md)：Gate 9 `READ_ONLY_QA_IN_REVIEW / NOT_PASS`；`/applications/` 404、RFQ与外部/设备依赖开放。 |
| Gate 3历史角色与方法 | 新任务由[合并Gate 4基线V1.11](docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.11.md)承接；[旧基线V1.14](docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.14.md)仅作历史。仅旧Gate 3授权不扩大，历史源快照及映射见[变更记录](docs/architecture/GATE3_GATE4_MERGE_CHANGE_RECORD_V1.0.md)。 |
| Gate 3八页串行批次 | [当前串行控制V1.8](docs/architecture/GATE3_EIGHT_PAGE_SERIAL_CONTROL_V1.8.md)：八页均已由子代理严格串行完成，并经总控独立审查按预授权关闭Gate3；[完成审计](docs/architecture/GATE3_EIGHT_PAGE_SERIAL_COMPLETION_V1.0.md)核对8个冻结源、64张正式图及全部审查/关闭/交接记录，身份差异0。本合同不授权Gate4–10。 |
| Gate 3五个Resource串行批次 | [当前串行控制V1.6](docs/architecture/GATE3_FIVE_RESOURCE_SERIAL_CONTROL_V1.6.md)：五页均已严格串行完成并按预授权关闭Gate3；[完成记录](docs/architecture/GATE3_FIVE_RESOURCE_SERIAL_COMPLETION_V1.0.md)与[机器审计](docs/architecture/GATE3_FIVE_RESOURCE_SERIAL_COMPLETION_AUDIT_V1.0.json)确认5个冻结源、40张正式图、身份差异0、失败页0。 |
| Gate 3 Application P1三页历史记录 | [控制V1.2](docs/architecture/GATE3_APPLICATION_P1_THREE_PARALLEL_CONTROL_V1.2.md)：Coatings、Plastics、Masterbatch已完成Gate3 V0.3执行及总控独立审查；用户明确批准当前全部Gate3待审对象，决定`APP-COAT-G3-APPROVAL-01`、`APP-PLAS-G3-APPROVAL-01`、`APP-MB-G3-APPROVAL-01`关闭三页Gate3，阻塞Finding 0。[Coatings V0.6](pages/applications/coatings/APP-COAT_CURRENT_GATE_BASELINE_MANIFEST_V0.6.md) / [Plastics V0.6](pages/applications/plastics/APP-PLAS_CURRENT_GATE_BASELINE_MANIFEST_V0.6.md) / [Masterbatch V0.8](pages/applications/masterbatch/APP-MB_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md)。三份Gate3→4交接已就绪；Gate4–10及开发发布未授权。 |
| Gate 3 Application P2两页历史记录 | Printing Inks与Paper由两个执行子代理完成Gate3冻结，再由两个不同审查子代理独立复核；全部Finding关闭、残留必修0。总控依据G346-DELEGATED-CLOSURE-20260907分别按APP-INK-G3-PC-CLOSURE-01和APP-PAPER-G3-PC-CLOSURE-01关闭Gate3。[Printing Inks V0.4](pages/applications/printing-inks/APP-INK_CURRENT_GATE_BASELINE_MANIFEST_V0.4.md) / [Paper V0.6](pages/applications/paper/APP-PAPER_CURRENT_GATE_BASELINE_MANIFEST_V0.6.md)。此行为历史Gate3记录，当前阶段以各页最新Manifest为准。 |
| Trade 4 + Application 5 Gate 8派发 | [授权与派发V1.0](docs/architecture/GATE8_TRADE4_APPLICATION5_AUTHORIZATION_AND_DISPATCH_V1.0.md) / [接收回执V1.0](docs/architecture/GATE8_TRADE4_APPLICATION5_DISPATCH_RECEIPT_V1.0.json) / [Gate 9返修授权与派发V1.0](docs/architecture/GATE9_TRADE4_APPLICATION5_REPAIR_AUTHORIZATION_AND_DISPATCH_V1.0.md)：九页Gate 9首审退回后已获用户返修授权，四项Required Finding正在Gate 8返修；Gate 9、Gate 10、合并、部署和发布未授权。 |
| Gate 3 Germany＋Italy并行任务 | [控制V1.2](docs/architecture/GATE3_GERMANY_ITALY_PARALLEL_CONTROL_V1.2.md)：两个执行子代理已分别完成Germany和Italy Gate3 V0.3；总控从精确冻结候选独立审查后，用户回复“批准。”，决定`DE-G3-APPROVAL-01`与`IT-G3-APPROVAL-01`关闭两页Gate3，阻塞Finding 0；[闭环审计](docs/architecture/GATE3_GERMANY_ITALY_USER_APPROVAL_CLOSURE_AUDIT_V1.0.json)为23项检查、0失败。[Germany当前Manifest V0.8](pages/markets/germany/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md) / [Italy当前Manifest V0.8](pages/markets/italy/MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md)。两份Gate3→4交接为`READY_FOR_GATE4_WHEN_AUTHORIZED`；Gate4及后续未授权。 |
| 本次入口重构记录 | [迁移与核验](docs/architecture/PROJECT_ENTRY_RESTRUCTURE_MIGRATION_V1.0.md) |

## 2. 定位、架构与事实权威

| 范围 | 当前入口 / 使用限制 |
|---|---|
| 网站需求 | [PRD V0.4](docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md)与后续明确批准增补共同使用 |
| 页面身份/URL | [登记册V0.2](docs/architecture/PAGE_REGISTRY_V0.2.md)，当前59页，不代表全部已上线 |
| 58对象本地预发布 / 404与共享Thank You Gate 9 | 固定候选为local main `98c2c573dd090048352fa12415a9cc8eeefc485b`、run `20260908T162630Z-98c2c573dd09`、Build `QmeAVzHgLILD56DVWgAww`、CMS SHA-256 `b1d425d...`。58对象页面/合同、81内部URL、31上下文CTA、27交互与174截图检查完成；14个editorial缺配置及Brazil对比度已迭代关闭。完整预发布仍`NOT_PASS`：三真实表单无provider/inbox确认，原生200%及设备/AT未补；`/contact/`仅为预发布启动例外。独立内链运行审查按相同身份进行。[预发布接收V1.0](docs/architecture/LOCAL_PRERELEASE_58_EXECUTION_INTAKE_V1.0.md)；[例外决定V1.0](docs/architecture/SYS404_CONTACT_DEPENDENCY_PRERELEASE_EXCEPTION_V1.0.md)；[404当前Manifest V0.16](pages/system/404/SYS-404_CURRENT_GATE_BASELINE_MANIFEST_V0.16.md) / [Thank You当前Manifest V0.16](pages/conversion/thank-you/CONV-THANK_CURRENT_GATE_BASELINE_MANIFEST_V0.16.md)。Gate 10及正式发布未授权。 |
| 关键词归属/内耗 | [实施主表](research/keyword/11_page_keyword_master.csv)，不是历史研究建议表 |
| 页面通用任务卡 | [Brief模板](docs/page-briefs/PAGE_BRIEF_TEMPLATE_V0.6.md) |
| 页面类型规则/任务合同 | [Playbooks当前流程入口](docs/page-playbooks/README.md) / [Briefs](docs/page-briefs/)，按本页Manifest选择完整Brief与适用增补 |
| 企业事实缺口/用户决定 | [Evidence Gap Decision Register](docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md) |
| CONTACT-001 Gate 9 | [Web3Forms轻量流决定](pages/contact/00_governance/CONTACT-001_WEB3FORMS_LIGHTWEIGHT_FLOW_USER_DECISION_2026-09-10.md)、[浏览器提交邮箱归属](pages/contact/00_governance/CONTACT-001_MAILBOX_RECEIPT_USER_CONFIRMATION_V1.2_2026-09-10.md)和[provider证据范围决定](docs/architecture/CONTACT-001_GATE9_PROVIDER_EVIDENCE_SCOPE_DECISION_V1.0.md)已生效。完整provider transaction、provider账户/config审计及自动监控/SLA为`NOT_COLLECTED / NO_LONGER_REQUIRED_BY_USER_DECISION`；运行边界为人工邮箱/表单检查，不宣称后台审计、自动告警或SLA。当前15 PASS/PASS_WITH_HOLD、1 PARTIAL、0 NOT_VERIFIED、0 FAIL，`CONTENT_PASS / PAGE_GATE9_PASS / INTEGRATION_READY / RELEASE_NOT_READY`。仅Contact-specific Privacy parity及sitemap发布步骤仍开放。[当前Manifest V0.14](pages/contact/CONTACT-001_CURRENT_GATE_BASELINE_MANIFEST_V0.14.md) / [当前判定V1.5](docs/architecture/CONTACT-001_GATE9_TARGETED_RECHECK_DISPOSITION_V1.5.md) |
| Malaysia-origin公开表达 | [全站授权V1.0](docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md) |
| 法律页架构增补 | [No-Terms决定V1.0](docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md) |
| 产品Application/Process关系 | [PRODUCT V0.3矩阵](pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv) + [统一审计](pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md) |
| TDS/应用指南原始资料 | [材料目录](<docs/7.27 马来全套TDS +应用指南/>)；具体型号以各自当前Manifest锁定资料为准 |
| Grade当前执行流程 | [SOP V2.4](docs/product-pages/03_Product_Detail_Template_Reuse_Development_SOP_V2.4.md)、[清单V1.4](docs/product-pages/04_Product_Detail_Single_Grade_Operational_Checklist_V1.4.md)、[Product Playbook增补V0.5](docs/page-playbooks/PRODUCT_PLAYBOOK_CURRENT_SOP_ADDENDUM_V0.5.md)；旧产品事实和已完成串行结果保持。 |
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
| 七个一级导航根页面Hero | [Root Page Hero V1.0](docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md) + [窄屏视觉与DOC反馈决定V1.0](docs/architecture/ROOT_PAGE_NARROW_VISUAL_AND_DOC_FEEDBACK_DECISION_V1.0.md)：`USER_APPROVED / ACTIVE`；统一骨架、三个受控变体、四页限定自然换行、`<=340px`共享单行Eyebrow及DOC稳定反馈区；页面内容和媒体保持差异 |
| 七页共享Hero当前Gate 9 | [当前Gate9 Manifest V1.2](docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_CURRENT_GATE9_MANIFEST_V1.2.md) / [Return-02定向复验V1.0](docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_GATE9_RETURN_02_TARGETED_RECHECK_V1.0.md) / [Return-01定向复验V1.0](docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_GATE9_RETURN_01_TARGETED_RECHECK_V1.0.md) / [首轮验收V1.0](docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_GATE9_INDEPENDENT_ACCEPTANCE_V1.0.md)：Return-02机器预检和内置浏览器复验PASS；F01–F05全部关闭，`PAGE_GATE9_STATUS=PASS / ROOT_HERO_SEVEN_WORKSET_ACCEPTED`，Integration可进入经授权的下一步，Gate10/发布未授权 |
| Home / Applications Hero开放白底增补 | [Open-White Addendum V1.0](docs/architecture/ROOT_PAGE_HERO_OPEN_WHITE_SURFACE_ADDENDUM_V1.0.md)：两页取消完整首屏大外框；内容、CTA、媒体及其他页面不改 |
| 七页Hero定向Gate 4控制 | [七页控制单V1.0](docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_TARGETED_GATE4_CONTROL_V1.0.md)：三批制作、一个共享母版任务、一次独立横向Gate 5审查；当前`PREPARED / NOT_DISPATCHED` |
| 生产SVG | [Production Logo Manifest V1.0](brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md) |
| 法律/隐私共享区 | [Footer Legal Utility Addendum](docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md)与§2 No-Terms更新一起使用 |
| 页面完整视觉与批准范围 | [状态中的页面指针](00_PROJECT_STATUS.md) → 本页当前Manifest → 其列出的规格/PNG/哈希 |

## 5. 各页面体系入口

| 页面体系 | 目录 |
|---|---|
| Home | [当前Manifest V1.12](pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.12.md)：D32 Gate9含用户范围例外通过并关闭；VF01关闭，三项未测不再要求补证；24目标依赖保留。D16历史见V1.6及全站专题源。 |
| Markets | [pages/markets](pages/markets/)；MARKET-EU-001的F03/原生200% zoom已关闭，RFQ/Sample/Documents可用性使A05通过并收窄F02；整页Gate 9因F01和A06剩余行为/receiver证据仍为`READ_ONLY_QA_COMPLETE / NOT_PASS`，由[当前Manifest V0.21](pages/markets/07_qa/MARKET-EU-001_CURRENT_GATE9_BASELINE_MANIFEST_V0.21.md)导航 |
| Products / Grades | [pages/products](pages/products/) / [detail-template](pages/products/detail-template/) |
| Applications | [pages/applications](pages/applications/)；五篇主Application文章的当前批准状态及后续选题Controller职责见[三篇批准与选题职责记录V0.1](pages/applications/02_analysis/APPLICATION_ARTICLE_TOPIC_CONTROLLER_MANDATE_AND_THREE_ARTICLE_USER_APPROVAL_V0.1.md)；42个候选题材与28个串行研究单元见[选题总计划V0.1](pages/applications/04_planning/APPLICATION_ARTICLE_TOPIC_MASTER_PLAN_V0.1.md)及[详细Backlog V0.1](pages/applications/04_planning/APPLICATION_ARTICLE_TOPIC_BACKLOG_V0.1.csv)；R04 PE/PP合并方向已获用户批准，冻结Brief SHA `8f94e4f8...cfbe`已派发给既有D22任务`00-Con-masterbatch`执行一篇完整受治理文章，见[R04冻结Brief V1.0](pages/applications/01_research/r04-pe-pp/R04_D22_ARTICLE_BRIEF_V1.0.md)、[派发记录V0.1](pages/applications/01_research/r04-pe-pp/R04_D22_DISPATCH_RECORD_V0.1.md)及[用户方向批准V0.1](pages/applications/01_research/r04-pe-pp/R04_USER_DIRECTION_APPROVAL_V0.1.md)；R05及后续未启动。R03正文已批准关闭，见[R03批准记录](pages/applications/02_analysis/R03_POWDER_COATINGS_ARTICLE_USER_APPROVAL_AND_CLOSURE_V0.1.md)；R01修订正文仍待用户批准，见[R01 D23验收](pages/applications/02_analysis/R01_PVC_UPVC_ARTICLE_D23_ACCEPTANCE_V0.2.md)；R02正文已批准关闭，见[R02批准记录](pages/applications/02_analysis/R02_PLASTIC_FILM_ARTICLE_USER_APPROVAL_AND_CLOSURE_V0.1.md) |
| Documents | [pages/documents](pages/documents/) |
| Resources | [pages/resources](pages/resources/)；RES-PROC候选一返修后Gate 9为28/28 PASS且已由用户选定，当前`INTEGRATION_READY / NOT_EXECUTED`；候选二保持隔离且不可按原样选择；由[Gate 9比较审查Manifest V0.16](pages/resources/05_review/RES-PROC_CURRENT_GATE9_COMPARATIVE_REVIEW_MANIFEST_V0.16.md)导航 |
| About / Contact | [pages/about-contact](pages/about-contact/) |
| Conversion | [pages/conversion](pages/conversion/)；CONV-RFQ D32页面Gate 9已按用户明确偏差接受关闭：固定候选不变，F01/F02无需返修，原生200%/实体触控/命名AT均USER_WAIVED，当前`READ_ONLY_QA_APPROVED / CLOSED`；AC-09因Products缺失保留Integration未验证，六项外部依赖不变，仅允许mock receiver。旧D16记录只作历史；当前由[RFQ D32 Manifest V0.4](pages/conversion/request-a-quote/05_review/CONV-RFQ_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.4.md)导航；Sample在[request-sample](pages/conversion/request-sample/) |
| Legal / Privacy | [pages/legal-privacy](pages/legal-privacy/) |

APP-000 D32当前入口：[D32 Manifest V0.4](pages/applications/APP-000_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.4.md)。Gate 3、Gate 4及Gate 6已关闭；Gate 5不同身份独立审查245/245通过，Gate 6不同身份独立审查388/388通过，均为必修0、建议0。Gate 6关闭包`sha256:723ba66bca86b5dd27a3151cfdb9910ea2469df46e9330567078b37fc188686d`包含22项验收和15项依赖，并按[Gate 6总控关闭](pages/applications/05_review/APP-000_D32_GATE6_CONTROLLER_CLOSURE_V0.1.md)登记`APPROVED_FOR_HANDOFF`。[Gate 8派发回执](pages/applications/06_handoff/APP-000_D32_GATE8_DISPATCH_RECEIPT_V0.1.json)已记录既有`03开发`接收：从`develop@1194cd641910a3dc9ad5ad7a0edd84e594765cc5`创建`codex/app-000-wordpress`隔离工作树，HOLD为0，Gate 8当前进行中、尚未交付。主控只编排、接收、协调和授权关闭，不重复独立审查。旧D32 Manifest V0.1–V0.3、[Manifest V1.12](pages/applications/APP-000_CURRENT_GATE_BASELINE_MANIFEST_V1.12.md)及D16 implementation/evidence/build仅作历史。Gate 9、Gate 10、部署、发布和索引未授权。

找具体页面：先用Page ID查登记册与Status，再打开页面当前Manifest；完整Brief、关系增补、设计、审查和handoff按Manifest的authority order组合。找不到/状态相冲突时登记，不凭文件名猜当前批准版本。

## 6. 历史与维护

- 原完整索引（含历次交付链接）已逐字节保留：[2026-09-06历史索引](90_archive/project-governance/2026-09-06-entry-restructure/01_PROJECT_INDEX.md)。只用于追溯，不作为当前版本表。
- [90_archive](90_archive/)保留历史；[99_workspace](99_workspace/)放临时预览与验证，不能是唯一正式证据。
- 新版被批准时：更新页面唯一Manifest及Status对应行；涉及全站权威入口再更新本索引。避免为同一页面追加多行“当前”。
- 新输入先标识资料/草案/批准范围；不因进入索引而自动批准。目录变化同步链接，重大入口重构先归档。

## 原Gate 4方向八页串行合同（2026-09-07，保留原授权范围）

[G4-8PAGE-SERIAL-01](docs/architecture/GATE4_EIGHT_PAGE_SERIAL_CONTROL_V1.0.md)记录用户授权与预认可、固定八页队列和完成条件；[动态进度](docs/architecture/GATE4_EIGHT_PAGE_SERIAL_PROGRESS.md)记录接手、在途、关闭及Gate 5接口。当前任务定时监控Gate 3，严格一页在途，不扩大到其他页面或Gate 5。











上述旧方向批次的Gate 5接口及停止点按当前工作流历史映射解释；不因阶段合并自动升级为完整Gate 4连续授权。实际进度回读对应页面Manifest，不能仅凭原合同中的在途描述启动。

常规Gate 3/4/6不再等待逐页用户审核，见[常设授权及关闭规则](docs/architecture/GATE_3_4_6_DELEGATED_CLOSURE_AUTHORITY_V1.0.md)与[实施核对](docs/architecture/GATE_3_4_6_DELEGATED_CLOSURE_IMPLEMENTATION_V1.0.md)。既有用户亲自批准保持原依据。

新Gate 5独立视觉审查角色：[agent.md](agents/gate5-independent-visual-review/agent.md)。角色与核验方法已按用户要求明确禁止默认重复截图；全流程编号切换及页面授权仍按联合方案另行落地。总控派发必须传入新增截图触发、原始证据和实际作者身份，不能用“完整重验”默许重新生产整套图。

Gate 5审查合同补全：Agent V0.2、核验Skill V0.6及独立审查参考V0.2，见[修订与Gate 4对比](docs/architecture/GATE5_REVIEW_CONTRACT_COMPLETION_V1.0.md)。新Gate 5正式编号路由尚未切换；现有获授权最终视觉审查可使用此角色，不能再追加同范围审查。

Gate 4自检当前规则：Agent V1.3、制作Skill V0.3、核验Skill V0.7及共同合同V1.2，见[自检效率修订](docs/architecture/GATE4_SELF_CHECK_EFFICIENCY_CHANGE_V1.0.md)。同一实际覆盖只检查一次，正式捕获与变化补验按范围执行；不减免独立审查。

此前三个视觉Skill方法边界记录：品牌应用V0.5、完整页面制作V0.5、核验V0.8，均集中列出允许与禁止做法，见[整理记录](docs/architecture/VISUAL_SKILL_METHOD_BOUNDARIES_CHANGE_V1.0.md)。

Gate 6当前执行与总控路由增补：[执行与复核合同V1.2](docs/architecture/GATE6_EXECUTION_REVIEW_CONTRACT_V1.2.md)，[修订记录](docs/architecture/GATE6_EFFICIENCY_CHANGE_V1.0.md)。启用FAST_PATH/ESCALATED_PATH规则；总控初版“尚未启用”仅为历史说明。共享一致性Skill当前V0.3，Gate 9不套用Gate 6精简路径；未实现统一validator或更改页面授权。

Gate 6四页实战关闭：[完成控制V1.0](docs/architecture/GATE6_FOUR_PAGE_V02_REPAIR_AND_CLOSURE_CONTROL_V1.0.md)。Brazil EN/PT、Chloride Process、DOC-COO均经页面隔离执行、不同身份复核和常设授权关闭；随后用户通过[G8-BR-CL-COO-FOUR-20260908-01](docs/architecture/GATE8_BR_CL_COO_FOUR_PAGE_AUTHORIZATION_AND_DISPATCH_V1.0.md)授权交给既有`00Con`，四页现已接收并进入Gate 8开发，状态以各页新版Manifest和[接收回执](docs/architecture/GATE8_BR_CL_COO_FOUR_PAGE_DISPATCH_RECEIPT_V1.0.json)为准。

Gate 4→新Gate 5当前交接：[共用合同V1.1](docs/architecture/GATE4_GATE5_VISUAL_HANDOFF_CONTRACT_V1.1.md)及[统一记录](docs/architecture/GATE4_GATE5_HANDOFF_ALIGNMENT_CHANGE_V1.0.md)。Gate 4 Agent V1.4与Gate 5 Agent V0.3共同消费；新Gate 5承担合并Gate 4唯一最终独立审查，明确映射现有生命周期。此前“交接/路由尚待统一”仅保留历史时点，不再作为当前阻塞。

Gate 5→6当前接收：[共用合同V1.1](docs/architecture/GATE5_GATE6_ACCEPTANCE_CONTRACT_V1.1.md)及[同步记录](docs/architecture/GATE5_GATE6_CONTROLLER_ALIGNMENT_CHANGE_V1.0.md)。Gate 5 V0.4、Gate 6 V0.7、Controller V0.2和路由V0.2直接引用当前交接定义。


新Gate 5九页独立审查：[控制V1.0](docs/architecture/GATE5_NINE_PAGE_REVIEW_CONTROL_V1.0.md)。用户授权子代理执行RES-R706、RES-CHEMOURS、四个Trade Resource与APP-MB/INK/PAPER；实际冻结候选按各页Gate 4→5交接读取，旧上游Manifest不代表尚无制作成果。仅审查及按有效权限关闭，不启动Gate 6。

- RES-R706当前基线：[RES-R706_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md](pages/resources/r706-alternative/RES-R706_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md)；Gate 9 `READ_ONLY_QA_IN_REVIEW / NOT_PASS`，Sample/RFQ、Documents receiver、设备/AT及route/canonical/Schema决定开放。

- RES-CHEMOURS当前基线：[RES-CHEMOURS_CURRENT_GATE_BASELINE_MANIFEST_V0.21.md](pages/resources/chemours-alternatives/RES-CHEMOURS_CURRENT_GATE_BASELINE_MANIFEST_V0.21.md)；Gate 9 `READ_ONLY_QA_IN_REVIEW / NOT_PASS`，RFQ、Documents receiver、设备/AT及route/canonical/Schema决定开放。

- RES-TRADE-EU当前基线：[RES-TRADE-EU_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md](pages/resources/eu-trade/RES-TRADE-EU_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md)；Gate 9定向复验完成，`F02 OPEN / NOT_PASS`。

- RES-TRADE-UK当前基线：[RES-TRADE-UK_CURRENT_GATE_BASELINE_MANIFEST_V0.11.md](pages/resources/uk-trade/RES-TRADE-UK_CURRENT_GATE_BASELINE_MANIFEST_V0.11.md)；`F04 CLOSED`，`F02 OPEN / NOT_PASS`。

- RES-TRADE-BR当前基线：[RES-TRADE-BR_CURRENT_GATE_BASELINE_MANIFEST_V0.12.md](pages/resources/brazil-trade/RES-TRADE-BR_CURRENT_GATE_BASELINE_MANIFEST_V0.12.md)；`F03 CLOSED`，`F02 OPEN / NOT_PASS`。

- RES-TRADE-IN当前基线：[RES-TRADE-IN_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md](pages/resources/india-trade/RES-TRADE-IN_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md)；Gate 9定向复验完成，`F02 OPEN / NOT_PASS`。

- APP-COAT当前基线：[APP-COAT_CURRENT_GATE_BASELINE_MANIFEST_V0.13.md](pages/applications/coatings/APP-COAT_CURRENT_GATE_BASELINE_MANIFEST_V0.13.md)；静态Next.js Gate 6已关闭并批准交接，旧D16 Gate 9仅作历史。

- APP-PLAS当前基线：[APP-PLAS_CURRENT_GATE_BASELINE_MANIFEST_V0.13.md](pages/applications/plastics/APP-PLAS_CURRENT_GATE_BASELINE_MANIFEST_V0.13.md)；静态Next.js Gate 6已关闭并批准交接，旧D16 Gate 9仅作历史。

- APP-MB当前基线：[APP-MB_CURRENT_GATE_BASELINE_MANIFEST_V0.14.md](pages/applications/masterbatch/APP-MB_CURRENT_GATE_BASELINE_MANIFEST_V0.14.md)；静态Next.js Gate 6已关闭并批准交接，旧D16 Gate 9仅作历史。

- APP-INK当前基线：[APP-INK_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md](pages/applications/printing-inks/APP-INK_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md)；静态Next.js Gate 6已关闭并批准交接，旧D16 Gate 9仅作历史。

- APP-PAPER当前基线：[APP-PAPER_CURRENT_GATE_BASELINE_MANIFEST_V0.12.md](pages/applications/paper/APP-PAPER_CURRENT_GATE_BASELINE_MANIFEST_V0.12.md)；静态Next.js Gate 6已关闭并批准交接，旧D16 Gate 9仅作历史。

Trade 4 + Application 5 Gate 9当前入口：[定向复验V1.0](docs/architecture/GATE9_TRADE4_APPLICATION5_TARGETED_RECHECK_V1.0.md) / [首轮独立验收V1.0](docs/architecture/GATE9_TRADE4_APPLICATION5_INITIAL_ACCEPTANCE_AND_RETURN_V1.0.md) / [121 AC + 66依赖机器审计V1.0](docs/architecture/GATE9_TRADE4_APPLICATION5_ACCEPTANCE_AUDIT_V1.0.json)。`F01/F03/F04 CLOSED`；`F02 OPEN`，九页均为`TARGETED_RECHECK_COMPLETE / NOT_PASS`。

九页新Gate 5结果：9/9独立通过并关闭，等待Gate 5为0；全部当前Manifest链接如上，Gate 6未启动。Gate 3历史记录中的当时启动边界不覆盖这些后续精确授权/关闭。

文章工作线：[D23↔D22交接与Gate 1承接合同V1.0](docs/architecture/ARTICLE_D23_D22_HANDOFF_CONTRACT_V1.0.md)。总控协调选题、派发、接收及内容批准；页面流程从Gate 1开始。

内链专项当前入口：[Agent V0.2](agents/internal-link-review/agent.md)＋[Skill V0.2](skills/internal-link-verification/SKILL.md)＋[生效与交接合同](docs/architecture/INTERNAL_LINK_REVIEW_ACTIVATION_V1.1.md)。3100预发布内链返修及不同身份定向复验已闭环：精确候选implementation `c18abbc5…`、evidence HEAD `de8128e…`、Build `ATKoXHh9g15QA-Y6c8Y2H`、runtime `4511`；29/29路径、47/47 query-aware目标、58/58共享消费者、3/3 Contact原入口及123/123 fragment通过，两个Finding均`CLOSED_FOR_EXACT_CANDIDATE`，`INTERNAL_LINK_REVIEW=PASS_FOR_EXACT_CANDIDATE`。[闭环记录V1.0](docs/architecture/internal-link-review/prerelease-3100-2026-09-10/PRERELEASE_3100_INTERNAL_LINK_REPAIR_AND_RECHECK_CLOSURE_V1.0.md) / [定向复验V1.0](docs/architecture/internal-link-review/prerelease-3100-2026-09-10/PRERELEASE_3100_INTERNAL_LINK_TARGETED_RECHECK_V1.0.md) / [机器证据V1.0](docs/architecture/internal-link-review/prerelease-3100-2026-09-10/PRERELEASE_3100_INTERNAL_LINK_TARGETED_RECHECK_EVIDENCE_V1.0.json)。页面整体Gate 9、Gate 10、部署、公开sitemap、索引和发布未授权；专项不新增Gate。

Gate 1当前执行：[三路径合同V1.0](docs/architecture/GATE1_THREE_PATH_EXECUTION_CONTRACT_V1.0.md)；Agent V0.2，搜索意图Skill V0.2，REUSE_CONFIRMATION / GAP_RESEARCH / FULL_RESEARCH。四类信息可引用映射、按缺口调用方法；旧四文件建设记录保留历史。本轮只改规则，未做页面回放。

Gate 2内容适配已按G2-ADAPTATION-20260908修订：两个Agent V0.7、交付结构V0.6，保留两步/独立冷读/用户批准；三种制作方式不映射G1路径，不新增Skill。当前总控生效增补为[ V1.14 ](docs/architecture/PROJECT_ORCHESTRATOR_ACTIVATION_V1.15.md)。

网站级准备已接入总控V0.14：[共同合同](docs/architecture/WEBSITE_PREPARATION_HANDOFF_CONTRACT_V1.6.md) / [最小模板](docs/architecture/WEBSITE_PREPARATION_HANDOFF_TEMPLATE_V1.6.md)。五工作包不新增Gate；W1–W5 Agent已建立，均未实战试跑，准备就绪与页面授权分开。

企业与产品事实基础：[Agent V0.1](agents/enterprise-product-facts/agent.md)。W1六部分、先读资料再集中补问；不制定战略，不新增Skill，未实战试跑。

市场、客户与竞争分析：[Agent V0.1](agents/market-customer-competition/agent.md)。W2六部分、四类信息和有界研究，为W3提供依据；不批准战略，不新增Skill，未实战试跑。

商业战略与网站定位：[Agent V0.1](agents/business-strategy-positioning/agent.md)。W3六部分、战略选择与网站职责分离，用户决定后交W4；不强造方案、不新增Skill，未实战试跑。

网站架构与采购旅程：[Agent V0.1](agents/site-architecture-buyer-journey/agent.md)。W4七部分、内链与异常旅程、架构批准边界；不新增Skill，未实战试跑。

生产准备与批次安排：[Agent V0.2](agents/production-preparation/agent.md)。W5六部分、三类交付、当前批准入与增量接口；只形成计划，不派发或关闭Gate，未实战试跑。


可复用项目当前目录投影：[0.2.1工具](workflow-tooling/v0.2.1/README.md)，统一W1–W5成果入口；[目录同步记录](docs/architecture/workflow-reuse/W1_W5_STORAGE_ALIGNMENT_V1.0.md)。D10已应用，D23既有业务成果/原角色历史基线不迁移。


独立模板库角色：[设计V0.1](docs/architecture/PAGE_TEMPLATE_LIBRARY_AGENT_DESIGN_V0.1.md) / [Agent](agents/page-template-library/agent.md) / [入库合同](agents/page-template-library/references/catalog-contract.md)。独立于W1–W5和Gate；尚未盘点、注册或加入通用发行。


模板库D16位置与首轮执行入口：[建库和候选盘点任务书](docs/architecture/TEMPLATE_LIBRARY_D16_INVENTORY_BRIEF_V0.1.md)。已准备、未派发；不改变W1–W5/Gate与页面授权。

2026-09-21 Gate 6当前职责按[边界决定V1.0](docs/architecture/GATE6_RESPONSIBILITY_BOUNDARY_DECISION_V1.0.md)及[基线V1.3](docs/architecture/GATE6_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.3.md)执行：交付批准依据、一致性、依赖责任及验收条件；开发决定技术实现，Gate 9负责实际验收。此前候选/旧版本说明保留历史语境。

Gate 8当前规则：[统一入口V1.0](docs/architecture/GATE8_CURRENT_RULES_V1.0.md)；不建立独立Agent。开发规范由当前静态仓库维护，交回按证据合同V1.1执行。
