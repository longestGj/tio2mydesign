# SYS-404 Current Gate Baseline Manifest V0.1

日期：2026-09-08。唯一当前权威入口；V0.1由首次准入更新为首次Gate 1提交，批准内容范围未变。Gate 0初始入口保留于提交`4905854dfce72950d1078a82074e950cff298441`及原intake；本Manifest导航批准组合，不取代原决定或精确正文来源。

| 字段 | 当前值 |
|---|---|
| Page / route / scope | `SYS-404` / `RUNTIME_FALLBACK`（全站未知URL；无独立可索引`/404/`） / `tio2-my` |
| Directory / type | `pages/system/404/` / Global system recovery page |
| Language / market | `EN` / `GLOBAL` |
| Lifecycle | `BRIEF_IN_REVIEW`；`GATE0_REGISTERED`（准入完成） |
| Gate 1 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_CLOSED`；执行者`/root/sys404_gate1_execute`，2026-09-08提交；设计批准不等于Gate 1关闭 |
| Mapping / keyword | `APPROVED_USER_PAGE_ADDITION` / `NO_PRIMARY_KEYWORD` |
| Fact / runtime status | 批准设计中的文案与行为已获用户确认；运行时履行`NOT_TESTED` |
| SEO | 真正HTTP `404`；`noindex, follow`；sitemap excluded；无可索引canonical合同及页面专属Schema要求 |
| Design authority | [设计V0.1](../../../docs/superpowers/specs/2026-09-08-404-thank-you-pages-design-v0.1.md)，SHA-256 `04328e2379d679de7b9f9e4dcc365e42391034f051503635e1e42919b1e5b7a6` |
| Architecture / PRD addendum | [新增决定V1.0](../../../docs/architecture/SYS_404_CONV_THANK_PAGE_ADDITION_DECISION_V1.0.md)，`SYS404-CONVTHANK-ADDITION-20260908`；与PRD V0.4及既有增补组合使用 |
| Intake | [Gate 0 V0.1](00_intake/SYS-404_GATE0_INTAKE_V0.1.md) |
| Registry / keyword ownership | [Registry V0.2](../../../docs/architecture/PAGE_REGISTRY_V0.2.md) / [关键词主表本页行](../../../research/keyword/11_page_keyword_master.csv) |
| Full Brief / Gate 1 outputs | [Brief V0.1](../../../docs/page-briefs/SYS-404_PAGE_NOT_FOUND_BRIEF_V0.1.md)、[Research V0.1](01_research/SYS-404_GATE1_RESEARCH_REPORT_V0.1.md)、[Claim Register V0.1](01_research/SYS-404_GATE1_CLAIM_EVIDENCE_REGISTER_V0.1.csv)及本Manifest构成四核心；[执行提交](05_review/SYS-404_GATE1_EXECUTION_SUBMISSION_V0.1.md)为自检支持件 |
| Method applicability / support | `NOT_APPLICABLE_SYSTEM_UTILITY_PAGE`；已读取搜索意图Skill，未运行查询研究；无方法支持报告，原因见Research §3 |
| Content intent / review | 设计恢复任务、精确copy和CTA已有用户批准；本轮完整研究综合`CONTENT_INTENT_CONFIRMED=PENDING_USER_GATE1_CONFIRMATION`；独立审查`PENDING`；无本轮新事实问卷 |
| Workflow | [Gate Workflow V3.2](../../../docs/architecture/GATE_WORKFLOW_V3.2.md)；SYS专属准入以批准设计＋新增决定为准，不新建通用Playbook或角色 |
| Shared owner | Home / Global Chrome owner；[Chrome V0.5](../../../docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md)、[Logo Manifest V1.0](../../../brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md)、[Footer Legal V1.0](../../../docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md)及[No-Terms决定](../../../docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md)；页面仅消费；各surface current为零 |
| Execution authority | [Gate 0–1计划](../../../docs/superpowers/plans/2026-09-08-404-thank-you-gate0-gate1.md)，2026-09-08用户授权；plan SHA-256 `c28bbcd1cfb88328880ad6ea060c0ad01a32b2f24bd328df6edd16fc09c0744c` |
| Gate 2+ / external | `NOT_AUTHORIZED_BY_THIS_TASK`；`HANDED_OFF=NO`；未开发、部署或发布 |

## 四核心身份及消费顺序

| 核心 | SHA-256 |
|---|---|
| Brief V0.1（上表路径） | `c3f4852c747b4822a94a4ae20f081f2fdf7ff0e667ec813c9b28dfc9018c20c8` |
| Research Report V0.1（上表路径） | `64bca3c0f6595e95627119e253beb60243bec9564e1e0504ccca459c49268b63` |
| Claim Evidence Register V0.1（上表路径） | `fefd1b8cf84c4e1d1388fa4b22182be9afac7cb50cfe206505eda2a4ba15a282` |
| 本Manifest | 唯一当前导航；不记录自身hash |

先按根规则、Gate Workflow V3.2、统一标准V2.2及Gate 1 Agent解释阶段；再依批准设计/新增决定→PRD及批准增补→当前登记/关键词归属→共享owner合同→本轮Brief/研究/命题表消费。精确copy编辑权威仍为设计§4.1，Brief为受控抄录。没有Gate 2–4成果、视觉资产或运行证据，不用不适用字段制造待补图要求。

## 开放项与下一动作

本轮四核心已提交，执行者止于Task 2。下一步按计划Task 3由不同身份独立审查，需要时定向返修，再由用户确认本轮Gate 1；只有本页关闭后才启动CONV-THANK Gate 1。Gate 2及后续没有因本提交获得授权。

Brief §8的DEP01–DEP07登记404真实状态、已知路由不被拦截、五个恢复链接实际可访问、共享Chrome/法律、sitemap/robots、三端可访问性、scope隔离和分析路径净化，均`NOT_TESTED`。Gate 3/4按批准设计形成结构/视觉；Gate 6整理跨合同，Gate 8实现，Gate 9验证。依赖有owner及接受条件，不自动否决Gate 1，也不表示运行已兑现。设计、准入、研究审查、Gate关闭、下一阶段授权与发布各自独立记录。
