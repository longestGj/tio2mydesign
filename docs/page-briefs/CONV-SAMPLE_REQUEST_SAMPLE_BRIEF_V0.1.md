# Request a Sample Page Brief V0.1

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| 文档名称 | Request a Sample Page Brief |
| Page ID | `CONV-SAMPLE` |
| Brief 版本 | V0.1 |
| 创建日期 | 2026-08-30 |
| 最后更新日期 | 2026-09-03 |
| 页面负责人 | CONV-SAMPLE 页面执行任务 |
| 总控审核人 | 项目总控与质量审查 |
| 用户批准记录 | 用户于 2026-08-30 指定仅处理 CONV-SAMPLE；2026-09-01 授权推进至 Gate 4 并执行 Gate 5；2026-09-03 明确批准 V0.5 Gate 5，随后授权 Gate 6，并预先授权 Gate 6 总控通过后进入 Gate 7。Gate 6 与 Gate 7 均于 2026-09-03 经项目总控通过并关闭；用户现已授权 Gate 8，实际开发任务 `01My首页开发`（`01a05595-2a2c-7ef0-9be4-f55a42043bb6`）已接收 Package `CONV-SAMPLE-G7-HANDOFF-01`，排期在 Request Documents 之后实施；部署、发布与索引仍未授权 |
| 页面生命周期 | `HANDED_OFF` |
| Mapping Status | `PLANNED_CONVERSION` |
| Verification Status | `QUALITATIVE_KEYWORD_EVIDENCE` |
| Brief 状态 | `GATE_8 / AUTHORIZED / QUEUED_AFTER_CONV-DOC` |
| 本版变更摘要 | V0.5 Gate 5、Gate 6 与 Gate 7 均保持关闭；Package `CONV-SAMPLE-G7-HANDOFF-01` 已由开发任务 `01My首页开发` 接收。页面生命周期更新为 `HANDED_OFF`，Gate 8 为 `AUTHORIZED / QUEUED_AFTER_CONV-DOC`；D23 不执行开发 |

Request a Sample V0.5 Gate 5 已获用户批准并关闭；Gate 6 与 Gate 7 已分别通过项目总控 Review `CONV-SAMPLE-G6-PCR-01`、`CONV-SAMPLE-G7-PCR-01` 并关闭。共享 `docs/page-playbooks/CONVERSION_PLAYBOOK_V0.1.md` 仍是唯一 Conversion 工作基线。Package `CONV-SAMPLE-G7-HANDOFF-01` 已由开发任务 `01My首页开发` 接收，页面现为 `HANDED_OFF`；Gate 8 已授权并排在 CONV-DOC 之后，D23 仅等待外部开发结果。

## 1. 页面身份

| 字段 | 记录值 |
|---|---|
| Page ID | `CONV-SAMPLE` |
| Section | `CONVERSION` |
| Page Name | Request a Sample |
| URL | `/request-sample/`；用户本轮指定的登记 URL，保留结尾斜杠 |
| Page Type | Sample conversion page |
| Playbook Key | `CONVERSION` |
| Playbook 状态 | V0.1 `USER_AUTHORIZED_WORKING_BASELINE / SUBMITTED_FOR_PROJECT_CONTROL_REVIEW`；本页唯一共享基线 |
| Market | `GLOBAL` |
| Language | `EN` |
| Priority | `P1` |
| Planned Domain | `https://tio2malaysia.com` |
| Site Scope | `tio2-my`；仅作为未来外部开发隔离要求，本任务不实施 |
| External Development Workspace | `D:\16Wordpress_nextjs`；本任务禁止访问或操作 |
| Canonical URL | `DECISION_REQUIRED`；若后续批准 INDEX，候选为 `https://tio2malaysia.com/request-sample/` |
| Indexing Intent | `DECISION_REQUIRED`；主关键词已登记，但 Mapping Status 仍为 `PLANNED_CONVERSION` |
| Header 一级导航 | 不加入；固定导航仍为 `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote` |

## 2. 权威输入

| 顺序 | 资料 | 路径或来源 | 本页用途 | 状态 |
|---:|---|---|---|---|
| 1 | 用户当前明确要求 | 当前任务输入，2026-08-30；继续授权 2026-09-01 | 页面范围、字段、状态覆盖、禁止承诺、产品关系与 Gate 4 停止边界 | `CURRENT_USER_AUTHORITY` |
| 2 | 根治理与动态入口 | `AGENTS.md`、`00_PROJECT_STATUS.md`、`01_PROJECT_INDEX.md`、`02_DIRECTORY_GUIDE.md` | 生命周期、准入、目录、证据、视觉与禁止范围 | `VERIFIED` |
| 3 | 最新 PRD | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | 54 页架构、Conversion 职责、产品与转化边界 | `VERIFIED_BASELINE` |
| 4 | 页面登记册 | `docs/architecture/PAGE_REGISTRY_V0.1.md` | Page ID、URL、类型、关键词、优先级与状态 | `VERIFIED_BASELINE` |
| 5 | 页面—关键词主表 | `research/keyword/11_page_keyword_master.csv` | SEO、搜索意图、页面职责与防内耗边界 | `VERIFIED_BASELINE` |
| 6 | 页面类型 Playbook | `docs/page-playbooks/CONVERSION_PLAYBOOK_V0.1.md` | Conversion 最少字段、预填、状态、隐私、失败/成功、Global Chrome 与 fail-closed 合同 | `USER_AUTHORIZED_WORKING_BASELINE / CONSUMED` |
| 7 | 页面任务卡模板 | `docs/page-briefs/PAGE_BRIEF_TEMPLATE.md` | 本草案字段与 Gate 记录结构 | `VERIFIED` |
| 8 | Global Chrome | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`、生产 SVG Manifest；V0.2 交叉审计与 Home shared V0.2 为来源历史 | 固定 Header、Mobile Menu、Footer、RFQ、零 buyer-visible CURRENT 与生产 Logo 合同 | `V0.5 PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| 9 | 产品关系 | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`、`PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md`、`PRODUCT-000_GATE1_EVIDENCE_AUDIT_V0.3.md`、`pages/products/02_analysis/PRODUCT-000_RELATION_DEPENDENCY_AUDIT_V0.3.md` | 当前唯一型号—应用—工艺—比较关系基线；CONV-SAMPLE 影响 | `APPROVED_RELATION_BASELINE / USER_APPROVED` |
| 10 | 产品样品入口基线 | `docs/product-pages/01_Product_Page_Template_and_Content_Spec_V1.0.md` §5.11；M-350 example §3.11 | 上游 Grade 预填、合格样品请求字段与禁止承诺 | `APPROVED_PRODUCT_TEMPLATE_INPUT` |
| 11 | 视觉标准 | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md` | 品牌、排版、颜色、表单与工业 B2B 视觉方向 | `APPROVED_VISUAL_DIRECTION` |
| 12 | 本地 SERP 原始证据 | `research/keyword/raw/serp/2026-08-29/REVISION/EN/titanium_dioxide_sample_supplier/` | 定性搜索意图与常见请求字段参考 | `COMPLETE / ANALYSIS_ELIGIBLE` |

### 输入冲突与缺口记录

| Conflict ID | 内容 | 影响字段或模块 | 当前处理 | 决定人 |
|---|---|---|---|---|
| CONV-S-C001 | 初始 Gate 0/1 时 Conversion Playbook 不存在 | Gate 2–5 | 已由共享 Conversion Playbook V0.1 落盘及用户 2026-09-01 明确继续授权解除；不建立第二套 Playbook | 项目总控 / 用户 |
| CONV-S-C002 | PRD V0.4 明确将样品表单字段及流程留给后续版本；用户本轮提供了最低字段和状态边界 | 表单字段、流程 | 仅把用户明确要求写入草案；其余字段不自行扩张 | 项目总控 / 用户 |
| CONV-S-C003 | `contact@tio2malaysia.com` 是规划邮箱且上线前待验证；Contact 为 `CONTACT_DETAILS_REQUIRED` | 提交失败替代联系、表单接收与可见联系方式 | 不公开邮箱、不声称邮箱可接收；替代人工渠道保持冻结 | 项目总控 / 运营责任人 |
| CONV-S-C004 | 早期登记册未包含 Legal/Privacy 页面；完整网站隐私架构后续已建立 | Privacy | `RESOLVED_BY_CROSS_PAGE_AUTHORITY`：本表单显示项目总控指定的简明目的说明并链接 `/privacy-policy/`；不增加 acknowledgement checkbox。路由真实可用性在 Gate 8/9/10 控制 | 项目总控 / 用户 |

## 3. 页面策略

### 3.1 目标采购商

| 字段 | 记录值 |
|---|---|
| 主要买家角色 | 工业 TiO2 采购、配方/应用技术人员、产品评估负责人 |
| 次要买家角色 | 分销或采购协调人员，前提是代表真实 B2B 技术评估需求 |
| 所在市场 | Global；重点服务 EU、UK、India、Brazil，但不把其他国家自动判为不适用 |
| 行业与应用 | Coatings、Plastics、Masterbatch、Printing Inks、Paper、Specialty Materials，以及 `Other / Not sure` |
| 采购阶段 | Technical Evaluation |
| 已知问题 | 已知型号但需安排测试；只知道应用或测试目标；来自 Market/Products/Application 上游且需要保留上下文 |
| 主要顾虑 | 请求是否需要明确型号、需要提供哪些最少信息、提交是否等于样品获批、数据如何使用 |
| 需要完成的判断 | 是否能提交一份足够人工审核的 B2B 技术评估请求，同时不被迫接受无证据供应承诺 |
| 页面访问后的理想下一步 | 提交完整但最小化的请求，进入人工审核；或在资料不足时保留输入并补齐必要字段 |

### 3.2 页面职责

| 项目 | 记录值 |
|---|---|
| 一句话页面职责 | Capture qualified titanium dioxide sample requests with grade, application, destination and test context for human review. |
| 必须解决的核心问题 | 买家需要提供哪些最少信息；不知道型号能否继续；上游上下文如何预填；提交之后发生什么 |
| 对全站采购路径的贡献 | 接收 Products、Grade、Applications、Markets 的技术评估上下文，并把请求交给人工审核 |
| 主转化目标 | `Submit Sample Request for Review`，成功仅表示已收到并待审核 |
| 次转化目标 | 在型号未知时继续提交 `I need help identifying a grade`；不在本页生成产品推荐 |
| 页面成功信号 | 必填字段有效、上下文清楚、用户理解提交不等于批准/发货 |

### 3.3 明确不负责

| 排除事项 | 原因 | 正确承接 |
|---|---|---|
| 报价、价格、采购条款或批量订单 | 属于 RFQ 意图 | `CONV-RFQ` `/request-a-quote/` |
| TDS/SDS/COA/COO 独立申请流程 | 属于文件申请 | `CONV-DOC` `/request-documents/` |
| 泛供应商、市场供应商搜索 | 防止抢 Home / Market 页面职责 | Home 与相应 Market 页面 |
| 具体型号的 SEO 主词与产品事实 | Grade 页拥有型号意图 | 14 个 Grade 页面 |
| 泛应用选型与应用事实 | Application 页拥有应用意图 | 对应 Application 页面 |
| 产品推荐、排名、等效或替代判断 | 本页是请求工具，不是产品选择引擎；且需技术证据 | Products / Applications / 技术人工审核 |
| 库存、样品批准、免费、样品数量、交期、运输、运费、法规资格或成功即发货 | 没有已批准证据且用户明确禁止 | `DO_NOT_RENDER` |

## 4. SEO、GEO 与搜索意图合同

| 字段 | 记录值 |
|---|---|
| Primary Keyword | `titanium dioxide sample supplier` |
| Secondary Keywords | `request titanium dioxide sample | TiO2 sample request` |
| Search Intent | `T` — submit a sample request for technical evaluation |
| Buyer Stage | `Technical Evaluation` |
| Source Cluster | `BUYER-01` |
| Page Role | Capture qualified sample requests and application context. |
| Excluded Keywords | `generic supplier terms | exact grade primary terms` |
| Cannibalization Boundary | Sample page owns sample-action intent; grade pages own model intent and pass the selected grade into this workflow. |
| H1 方向 | `Request a Titanium Dioxide Sample for Technical Evaluation`；Gate 2 待审，不机械堆砌主词 |
| Title 方向 | Sample request action + TiO2 Malaysia brand；Gate 2 待审 |
| Meta Description 方向 | 说明提供型号/未知型号、应用、目的市场与测试目标；提交进入审核，不承诺批准或发货 |
| Slug | `/request-sample/` |
| Canonical | `DECISION_REQUIRED` |
| Hreflang | `NOT_APPLICABLE`，除非未来语言策略获批 |
| Robots | `DECISION_REQUIRED`；不得在本草案写成已批准 INDEX |

### SEO 防内耗核验

- [x] 54 行主表中 Page ID、URL 与非 `NO_PRIMARY_KEYWORD` 主关键词无重复。
- [x] 本页只拥有 sample-action intent。
- [x] 不把具体型号 + sample 变成本页独立主关键词；Grade 页继续拥有型号词。
- [x] 不把泛 supplier、application、market 或 quote 意图移入本页。
- [ ] Title、H1、Meta、Canonical 与 Robots 待 Gate 2 和总控决定。

### GEO 合同

| 字段 | 记录值 |
|---|---|
| Primary Entity | TiO2 Malaysia sample request workflow |
| Related Entities | IKHLAS TITANIUM (MALAYSIA) SDN. BHD.、已登记 Grade、Application、destination market；只表达已批准关系 |
| Buyer Questions | What information is needed? Can I request a review without knowing the grade? What does submission mean? |
| Answer-ready Blocks | Gate 2 候选：required-information summary、unknown-grade answer、review-status explanation、FAQ；当前未批准模块顺序 |
| Evidence and Attribution | 流程边界来自用户当前要求、根治理、PRD、产品页 V1.0；产品关系唯一使用 PRODUCT V0.3 矩阵及三份配套审计 |
| Freshness Requirement | 表单字段、人工审核责任、邮箱、隐私处理、样品政策或 route 状态变化时立即复核 |
| Machine-readable Relationships | 候选 `WebPage` + `BreadcrumbList`；不得把请求表单生成 `Product/Offer`、库存、价格或已批准样品事实 |
| GEO Exclusions | 不生成样品可用性、资格、数量、免费、运费、交期、运输、法规、批准、发货、性能、等效或推荐事实 |

## 5. 本页必须回答的问题

| Question ID | 买家问题 | 采购判断 | 所需证据 | Gate 2 状态 |
|---|---|---|---|---|
| Q01 | What do I need to provide for a sample review? | 能否以最少信息启动审核 | 用户字段要求、产品页 V1.0 | `ANSWER_ARCHITECTURE_PENDING` |
| Q02 | Can I continue if I do not know the grade? | 是否需要先自行选型 | 用户要求、手工审核边界 | `ANSWER_ARCHITECTURE_PENDING` |
| Q03 | Will the selected grade, application or market be prefilled? | 上下文是否保留且可修改 | 用户当前要求 | `ANSWER_ARCHITECTURE_PENDING` |
| Q04 | Does submission mean my sample is approved or will be shipped? | 避免错误预期 | 用户明确禁止、根治理 | `ANSWER_ARCHITECTURE_PENDING` |
| Q05 | How will the information be used? | 是否愿意提交业务资料 | 最少收集原则；正式隐私处理待批准 | `PRIVACY_DECISION_REQUIRED` |
| Q06 | What happens if the form cannot be submitted? | 是否丢失输入、如何恢复 | 用户要求；替代联系渠道待验证 | `FAILURE_STATE_DECISION_REQUIRED` |

## 6. Gate 2–5 执行边界与成果路径

以下成果已按用户 2026-09-01 授权完成到 Gate 4，并一并提交审查；完成不等于批准：

- Gate 2：`pages/conversion/request-sample/04_planning/CONV-SAMPLE_CONTENT_ARCHITECTURE_V0.1.md`，覆盖内容、SEO、GEO、Schema、CTA、内链、最少字段、预填和状态合同。
- Gate 3：`pages/conversion/request-sample/04_planning/wireframes/CONV-SAMPLE_WIREFRAME_SPEC_V0.1.md`，覆盖 Desktop 1440px、Tablet 834px、Mobile 390px、Mobile Menu 和关键状态，使用真实长文案级别测试。
- Gate 4：`pages/conversion/request-sample/04_planning/visual-directions/CONV-SAMPLE_VISUAL_DIRECTION_V0.1.md`，方向为 `Technical Review Desk`，继承 Visual Standard V1.0、Global Chrome V0.5 与生产 SVG。
- Gate 5 当前唯一批准基线：`pages/conversion/request-sample/04_planning/visual-designs/CONV-SAMPLE_FULL_VISUAL_DESIGN_V0.5.md`、`pages/conversion/request-sample/02_analysis/CONV-SAMPLE_GATE5_DIRECTED_REVISION_AUDIT_V0.5.md`、`pages/conversion/request-sample/04_planning/CONV-SAMPLE_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md` 及十六张 V0.5 资产；`APPROVED / CLOSED`。V0.1–V0.4 均为 `SUPERSEDED / HISTORICAL`。
- V0.5 在 Desktop、768px 与 390px 统一保持单列任务流：全宽 Sample Request 表单在前，全宽 Human Review 在后；不恢复右侧栏或 sticky。
- V0.2 Buyer-facing 页面不再显示 internal review、placeholder legal 或 release-state 术语；缺失的隐私与接收端证据没有被伪造，仍只在内部状态板与审计中登记为阻塞项。
- Header 一级导航未新增 Request a Sample；Global Chrome 的 Request a Quote 在 Desktop Header、Mobile Header、Mobile Menu、Desktop/Mobile Footer 永久显示并统一指向 `/request-a-quote/`。
- `RFQ_ROUTE_READY=false` 只能形成 `RELEASE_BLOCKER`，不得产生 RFQ OFF、hidden、disabled、empty slot 或 Contact fallback。

## 7. 产品、应用、市场与预填关系

### 7.1 公开推荐行为

本页不生成产品推荐列表。它只接收买家已选择或上游传入的上下文，并允许 `Unknown grade / I need help identifying a grade`。这样避免把 Conversion 页变成未经批准的推荐引擎。

| 关系 | 允许行为 | 禁止行为 |
|---|---|---|
| Grade prefill | 显示并允许修改已登记型号名称 | 根据型号推断应用、性能、可用性或样品资格 |
| Application prefill | 显示并允许修改应用类别 | 自动推荐、排序或筛掉型号 |
| Market prefill | 显示目的市场/国家并允许修改 | 暗示当地库存、运输、法规资格或样品可用 |
| Unknown grade | 接受未知状态并依赖测试目标、应用与人工审核 | 把未知型号当验证错误 |
| Unrecognized grade value | 安全降级为 `Unknown / needs review`，保留源上下文用于人工核对 | 显示“not suitable”“not available”或暴露内部状态 |

### 7.2 PRODUCT V0.3 硬边界

- 当前唯一关系源为 `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`：30 `VERIFIED_FOR_PUBLIC_MAPPING`、0 `CONFLICT_HOLD`、54 `NO_PUBLIC_MAPPING`；Process 为 8 Chloride、5 Sulfate、1 Vapor-phase oxidation。
- M-2377 可与 Coatings、Plastics、Masterbatch、Printing Inks、Paper 五个批准 Application 进行中性选择/预填，并可使用 Sulfate 中性工艺分类；这些关系只说明已批准的上下文映射，不表示样品获批、库存、适用性、性能或供应保证。
- M-2377 → Specialty Materials 仍为 `NO_PUBLIC_MAPPING / DO_NOT_RENDER`。不得自动预填、推荐或将该组合描述为已批准关系；如果买家独立填写该组合，只作为买家提交的待审核上下文，不转写为适用或不适用结论。
- Rubber 只保留证据登记：不新增 selector 分类、Application、页面、URL、关键词、导航或 Schema 关系。买家可在 `Other` 自由文本中自行提供 Rubber 测试背景，但页面不得把它提升为 TiO2 Malaysia 的公开分类或推荐。
- M-996 与 M-2196 可以作为独立已登记型号被选择；各自事实仅可引用各自已批准附件。两者之间的差异、排名、优劣、等效、替代、相对定位和比较型选择理由继续冻结。
- `NO_PUBLIC_MAPPING` 只表示当前没有批准的正向公开关系；页面不得把它改写为“不适用”“不适合”或“不可用”。
- `NO_PUBLIC_MAPPING`、`DO_NOT_RENDER` 与 comparison hold 等内部状态不得出现在 Buyer Clean 文案或辅助技术隐藏内容中。

### 7.3 上游预填来源

| 来源 | 允许传递的可见上下文 | 当前状态 |
|---|---|---|
| Products Hub | source page；已选择型号（若有） | `DEFINED_IN_GATE_2 / SUBMITTED_NOT_APPROVED` |
| Grade page | exact registered grade + source page | `DEFINED_IN_GATE_2 / SUBMITTED_NOT_APPROVED` |
| Application page | application + source page；grade 仅在上游已合法选择时传递 | `DEFINED_IN_GATE_2 / SUBMITTED_NOT_APPROVED` |
| Market page | market/destination + source page；不传递供应承诺 | `DEFINED_IN_GATE_2 / SUBMITTED_NOT_APPROVED` |

所有预填值必须对用户可见、可修改，并经过允许值验证；不得用隐藏参数制造产品推荐或资格结论。

## 8. 事实与证据登记

### 8.1 Claim Register

| Claim ID | 计划公开的声明 | 来源 | 验证状态 | 渲染决定 |
|---|---|---|---|---|
| CLM-S01 | This form collects a sample request for human review. | 用户当前明确要求 | `AUTHORIZED_SCOPE` | `RENDER_WITH_QUALIFIER` |
| CLM-S02 | A confirmed success state means the request was received and will be reviewed. | 项目总控 V0.5 精确文案；用户原始成功边界 | `DIRECTED_GATE5_COPY` | `RENDER_ON_SUCCESS` |
| CLM-S03 | Submission does not approve a sample or confirm an arrangement. | 用户当前明确要求、根治理 | `AUTHORIZED_BOUNDARY` | `RENDER_IN_RELEVANT_FAQ_ONLY` |
| CLM-S04 | A buyer may continue without knowing the exact grade. | 用户当前明确要求 | `AUTHORIZED_SCOPE` | `RENDER` |
| CLM-S05 | A specific sample quantity, free sample, freight, lead time, shipping or regulatory eligibility is available. | 无批准证据且用户禁止 | `EVIDENCE_NOT_AVAILABLE` | `DO_NOT_RENDER` |
| CLM-S06 | A visible fallback email or contact channel can receive failed submissions. | 规划邮箱待验证；Contact 未 live | `CONTACT_DETAILS_REQUIRED` | `DO_NOT_RENDER` |
| CLM-S07 | We use the information provided to review and respond to the sample request. | 项目总控 V0.5 精确文案与完整网站 Privacy 架构 | `DIRECTED_GATE5_COPY` | `RENDER_ABOVE_SUBMIT_WITH_PRIVACY_LINK` |
| CLM-S08 | Detailed retention, sharing, transfer, rights and legal-basis terms | Shared Privacy Policy | `CROSS_PAGE_OWNERSHIP` | `LINK_TO_/privacy-policy/; DO_NOT_DUPLICATE_IN_FORM` |

### 8.2 不渲染字段与模块

| 字段或模块 | 冻结原因 | 解冻所需证据 | 不阻塞的工作 |
|---|---|---|---|
| Sample inventory/availability | 无证据且明确禁止承诺 | 批准的运营与发布证据 | 表单结构与审核状态设计 |
| Sample quantity/size | 规则未批准 | 样品政策与审核批准 | 测试目标字段 |
| Free sample / freight | 商务与物流规则未批准 | 书面政策与责任人批准 | 申请审核文案 |
| Dispatch/lead time/shipping | 运营能力与 SLA 未验证 | 运营和发布证据 | 成功状态只写 pending review |
| Regulatory eligibility | 需具体产品、用途、市场与文件证据 | 对应法规/文件批准 | 收集目的市场与应用 |
| Visible fallback email | 规划域名邮箱未验证 | 联系方式与收件流程验证 | Retry + retain entered data 的失败状态 |
| M-2377 → Specialty Materials | PRODUCT V0.3 无批准正向关系 | 未来经批准的专项关系更新 | M-2377 与五个批准 Application 的中性选择/预填 |
| Rubber public taxonomy / selector option | 仅为 TDS 证据登记，不属于六组批准 Application taxonomy | 正式架构变更与用户批准；当前不得创建 | `Other` 自由文本可接收买家自述背景 |
| M-996/M-2196 comparison | 比较证据不足 | 专项技术批准 | 两个型号独立选择，不作比较 |

## 9. CTA 与表单合同（Gate 1 候选，待 Gate 2 批准）

### 9.1 CTA 边界

| 层级 | 文案方向 | 成功定义 | 状态 |
|---|---|---|---|
| Primary | `Submit Sample Request for Review` | 请求已收到并待人工审核 | `DEFINED_IN_GATE_2 / SUBMITTED_NOT_APPROVED` |
| Secondary | `I do not know the grade` 作为型号选项/流程分支，不是第二张表单或 CTA | 允许未知型号继续 | `DEFINED_IN_GATE_2 / SUBMITTED_NOT_APPROVED` |
| Global terminal | `Request a Quote` | 固定指向 `/request-a-quote/` | `APPROVED_GLOBAL_CHROME_BASELINE` |

### 9.2 最少必要字段候选

| 字段 | 候选必填性 | 预填来源 | Gate 1 依据 |
|---|---|---|---|
| Contact name | Required | 不预填或浏览器辅助 | Approved product template sample input |
| Company | Required | 不预填或可信账户上下文 | 用户要求、B2B qualification |
| Business email | Required | 不预填或可信账户上下文 | 用户要求；邮箱接收流程仍待验证 |
| Destination country / market | Required | Market page | 用户要求、产品模板 |
| Application | Required；允许 `Other / Not sure` | Application page | 用户要求、技术评估上下文 |
| Grade | Required choice；允许 `Unknown / need help` | Products / Grade / Application 上游合法选择 | 用户要求、Grade prefill 基线 |
| Current grade or target requirement | Optional | Product/Grade context | 产品模板；不要求披露保密配方 |
| Test objective | Required | 不自动推断 | 用户要求 |
| Expected project or annual use | Optional | 不预填 | 合格 B2B 背景；不得误写为样品数量承诺 |
| Documents needed for the trial | Optional | Grade/Product context | 产品模板；不承诺文件可用 |
| Additional non-confidential sample needs | Optional | 不预填 | 用户要求的必要样品需求信息 |
| Privacy purpose notice + Privacy Policy link | Required display element；不是输入字段 | 不预填 | 项目总控指定精确文案；链接 `/privacy-policy/`；不得增加强制 acknowledgement checkbox |

明确不在初次请求中收集：电话、详细收货地址、港口、Incoterm、包装、样品数量、付款信息、完整配方或其他非必要敏感资料。人工审核通过前若确需补充，应在后续受控沟通中另行收集。

### 9.3 必须覆盖的表单状态

- Default / unprefilled。
- Valid prefilled from Products、Grade、Applications、Markets。
- Unknown grade。
- Unrecognized/invalid prefill safe fallback。
- Insufficient information。
- Field validation、keyboard focus、field-level error。
- Submission in progress。
- Submission failure with retained inputs and retry；外部替代联系仅在 verified 后显示。
- Success: request received and pending review；不表示批准、免费、库存、数量、交期、运输、法规资格或已发货。
- Privacy / consent explanation。
- Human review / restricted state。

## 10. 内部链接与导航合同

| 项目 | 记录值 |
|---|---|
| 入站 | Products Hub、14 Grade、Applications、Markets；实际 route 与锚文本在 Gate 2 核对 |
| 出站 | 仅登记且获准的 Products/Applications/Markets/RFQ/Document 页面；不创建新页面 |
| Header | 继承 Global Chrome V0.5；不增加 Request a Sample 一级项；本 Conversion route 为零 buyer-visible CURRENT / 零 aria-current 映射 |
| Breadcrumb | `Home / Request a Sample` 候选；Gate 2 审核 |
| Footer | 仅消费 Deep Navy Global Footer 当前共享基线；固定 Procurement / Request a Quote；表单内独立显示 `/privacy-policy/` 链接，不分叉 Footer |
| Global RFQ | Desktop Header、Mobile Header、Mobile Menu、Desktop/Mobile Footer 永久显示，统一 `/request-a-quote/` |

## 11. 视觉与响应式合同

| 字段 | 记录值 |
|---|---|
| 继承标准 | Visual Standard V1.0、Global Chrome V0.5、生产 SVG Manifest；Home shared V0.2 为来源基线 |
| Desktop Header | 84px；固定八项导航；RFQ 永久显示 |
| Mobile Header | 64px；`Logo | RFQ | Menu` |
| Tablet width | 768px 完整页面；不得以 834px 线框或 Desktop 缩放代替；触控目标至少 44px；不得横向溢出 |
| Mobile width | 390px logical @2x；逻辑触控目标至少 44px；不得横向溢出 |
| Footer | Deep Navy；Brand / Explore / Information / Conversion / Copyright |
| 图片策略 | 表单任务优先；不得用工厂、库存、实验室、运输、认证图片暗示未验证能力 |
| 真实长度测试 | 必须使用真实长公司名、长业务邮箱、长目标描述、长错误与成功文案 |
| 视觉状态 | Gate 5 V0.5 Desktop 1440、Tablet 768、Mobile 390、Mobile Menu 与关键状态完整视觉已通过项目总控复审，并由用户于 2026-09-03 批准；`APPROVED / CLOSED` |

## 12. 开发交付边界

`HANDED_OFF / GATE_8_AUTHORIZED / QUEUED_AFTER_CONV-DOC / D23_IMPLEMENTATION_PROHIBITED`。

Gate 7 implementation-neutral development-delivery specification is approved as Package `CONV-SAMPLE-G7-HANDOFF-01` and has been received by development task `01My首页开发` (`01a05595-2a2c-7ef0-9be4-f55a42043bb6`). Gate 8 is authorized and queued after CONV-DOC. D23 does not implement or modify `D:\16Wordpress_nextjs`; external development must use `site_scope=tio2-my` and must not fall back to another site scope. Deployment, publication, DNS and indexing remain separately unauthorized.

## 13. 可访问性合同

- 单一清晰 H1 与连续标题层级。
- 标签、必填、说明、错误、成功与字段关系可被辅助技术识别。
- 键盘可完成全部流程；focus 不只依赖颜色。
- 错误摘要与字段级错误均可定位。
- Success 与 failure 使用文本、图标和结构，不只使用绿色/红色。
- Mobile 390px 的 RFQ、Menu、菜单行、字段控制与按钮逻辑目标不小于 44px。
- 预填值对用户可见、可修改；隐藏 source metadata 不承担关键语义。

## 14. Gate 0/1 验收摘要

| 检查项 | 结果 |
|---|---|
| 页面存在于 54 页登记册 | PASS |
| Page ID / URL / Page Type / Keyword / Priority 一致 | PASS |
| CSV Page ID / URL / 非空 SEO 主词唯一 | PASS |
| Mapping / Verification 状态原样保留 | PASS |
| Local SERP 原始证据 finalized manifest 与哈希 | PASS |
| PRODUCT V0.3 关系边界 | PASS — 30/0/54；Process 8/5/1；M-2377 五项中性关系 |
| Global Chrome V0.5 固定 RFQ、零 CURRENT 与生产 SVG | PASS |
| Conversion Playbook | PASS — V0.1 唯一共享工作基线已消费；其项目总控状态仍为 submitted for review |
| 本页 Brief 批准 | `APPROVED / CLOSED` — 用户于 2026-09-03 明确批准 Gate 5 V0.5 |
| Buyer-visible Privacy notice | PASS — exact project-control-directed copy and `/privacy-policy/` link; no acknowledgement checkbox |
| Privacy route / receiver / route / idempotency / alternate manual channel | GATE_8_IMPLEMENTATION / GATE_9_READ_ONLY_QA / GATE_10_RELEASE_CONTROL |
| Gate 2–4 执行授权 | USER AUTHORIZED；成果仍待审 |
| Gate 5 执行授权 | USER AUTHORIZED；V0.5 定向返修通过总控 Review `CONV-SAMPLE-G5-RR-05`，用户于 2026-09-03 明确批准；`APPROVED / CLOSED` |

## 15. 审核记录

### 15.1 问题记录

| Review ID | 级别 | 问题 | 修正要求 | 状态 |
|---|---|---|---|---|
| CONV-S-R001 | RESOLVED_INPUT | 初始 Conversion Playbook 不存在 | 已消费唯一共享 V0.1；不建立第二套 Playbook | CLOSED_FOR_GATE_2_4_PROGRESSION / PLAYBOOK_REVIEW_STATUS_UNCHANGED |
| CONV-S-R002 | REVIEW | 本 Brief 与 Gate 2–4 成果尚未获用户/总控结果批准 | 审核身份、字段、流程、线框、视觉方向与产品关系边界 | OPEN |
| CONV-S-R003 | IMPORTANT | Indexing、Canonical 与最终 SEO 元数据未批准 | Gate 2 决定，不在 Gate 0 冒充批准 | OPEN |
| CONV-S-R004 | GATE_8_9_10_CONTROL | Receiver、收件路由、人工审核责任与失败替代渠道须在完整网站实现并验证 | Gate 8 实施；Gate 9 只读 QA；Gate 10 前不可缺失 | OPEN_EXTERNAL_DEPENDENCY / NOT_GATE5_BLOCKER |
| CONV-S-R005 | RESOLVED_IN_V0.5 / APPROVED | Buyer Clean 需要最终隐私说明 | V0.5 已在提交按钮正上方显示精确用途文案与 `/privacy-policy/` 链接，无 acknowledgement checkbox；总控复审及用户批准完成 | `CLOSED` |
| CONV-S-R008 | GATE_8_9_10_CONTROL | Receiver-side idempotency、deduplication 与 positive acknowledgement 仍需实现证据 | Gate 8 实施；Gate 9 验证 ambiguous response 和重复风险；Gate 10 发布门禁 | OPEN_EXTERNAL_DEPENDENCY / NOT_GATE5_BLOCKER |
| CONV-S-R009 | RESOLVED_IN_V0.3 / REVIEW_PENDING | V0.2 Desktop 8/4 长表单与短侧栏造成后半段右侧大面积空白 | V0.3 改为横向 Human Review 流程带后接全宽表单；15/15 规划渲染通过，待用户/总控审查 | CLOSED_IN_CANDIDATE / NOT_APPROVED |
| CONV-S-R010 | RESOLVED_IN_V0.5 / APPROVED | Gate 5 缺少独立 768px 完整视觉证据 | 新增 768×4802 完整 Buyer Clean 页面并验证 overflow=0、Header=64px、min target=44px；总控复审及用户批准完成 | `CLOSED` |
| CONV-S-R011 | RESOLVED_IN_V0.5 / APPROVED | Destination 依赖有限下拉列表 | 改为必填单行文本输入，使用项目总控指定 label/placeholder/helper；总控复审及用户批准完成 | `CLOSED` |
| CONV-S-R006 | CONTROLLED | 样品库存、批准、免费、数量、交期、运输、法规资格与成功即发货均无证据 | 全部 `DO_NOT_RENDER` | CONTROLLED_IN_DRAFT |
| CONV-S-R007 | CONTROLLED | M-2377、Rubber、M-996/M-2196 与 NO_PUBLIC_MAPPING 误读风险 | 按 PRODUCT V0.3 执行：只消费批准的中性映射，不生成适用性承诺、Rubber 分类或比较 | CONTROLLED_IN_DRAFT |

### 15.2 Gate 记录

| Gate | 交付物 | 提交日期 | 当前结论 | 用户批准要求 | 批准日期 |
|---|---|---|---|---|---|
| Gate 0 | 页面准入与 Brief 草案 | 2026-08-30 | `USER_AUTHORIZED_TO_PROCEED / NOT_CLOSED_AS_FINAL` | 用户已授权推进到 Gate 4；最终页面批准仍需审查 | 2026-09-01（推进授权） |
| Gate 1 | 研究与证据审计 | 2026-08-30；V0.3 refresh 2026-08-30 | `USER_AUTHORIZED_TO_PROCEED / NOT_CLOSED_AS_FINAL` | 用户已授权消费证据推进；事实边界保持 | 2026-09-01（推进授权） |
| Gate 2 | 内容架构、SEO/GEO/Schema、字段与预填 | 2026-09-01 | `SUBMITTED_WITH_GATE_4_PACKAGE / NOT_APPROVED` | 需要用户/总控审查 | — |
| Gate 3 | Desktop 1440 / Tablet 834 / Mobile 390 / Mobile Menu 与状态线框 | 2026-09-01 | `SUBMITTED_WITH_GATE_4_PACKAGE / NOT_APPROVED` | 需要用户/总控审查 | — |
| Gate 4 | `Technical Review Desk` 视觉方向 | 2026-09-01 | `SUBMITTED_FOR_USER_REVIEW / NOT_APPROVED` | 需要用户决定批准、修订或否决 | — |
| Gate 5 | Desktop 1440 / Tablet 768 / Mobile 390 / Mobile Menu / 完整状态视觉；V0.5 定向返修 16 张资产与单一 Manifest | 2026-09-03 | `APPROVED / CLOSED` | 用户已批准；不得据此推断 Gate 6+ 授权 | 2026-09-03 |
| Gate 6 | 总控审查、SEO/GEO/Schema、字段/状态、响应式/a11y、site_scope 与分期合同 | 2026-09-03 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` | 用户已授权；总控 `S-G6-D01`–`S-G6-D12` 全部通过 | 2026-09-03 |
| Gate 7 | Package `CONV-SAMPLE-G7-HANDOFF-01`；开发交付、CMS/API/组件映射、Gate 8/9 验收及 Manifest | 2026-09-03 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` | 条件授权已生效；总控 `S-G7-D01`–`S-G7-D10` 全部通过；`HANDED_OFF=NO` | 2026-09-03 |
| Gate 8 | 外部开发实现 | 2026-09-03 | `AUTHORIZED / QUEUED_AFTER_CONV-DOC` | 已由 `01My首页开发` task `01a05595-2a2c-7ef0-9be4-f55a42043bb6` 接收 | 2026-09-03 |
| Gate 9 | 只读质量验收 | — | `WAITING_FOR_PRODUCTION_EQUIVALENT_RESULT` | 开发返回结果后开始；D23 只读 | — |
| Gate 10 | 发布、部署与索引 | — | `LOCKED / NOT_AUTHORIZED` | 需要单独明确授权 | — |

## 16. 当前停止条件

当前 Gate 7 已获项目总控批准并关闭，Package 已由开发任务接收，页面生命周期为 `HANDED_OFF`。Gate 8 已授权并处于 `QUEUED_AFTER_CONV-DOC`。外部开发返回 production-equivalent result 前：

- D23 不执行 Gate 8 开发，只等待已接收任务按排期实施并返回结果；
- 不把 V0.5 Buyer-clean review raster 当作生产实现或发布资产；Privacy route、receiver、route、idempotency 与 fallback 由 Gate 8/9/10 控制；
- 不修改共享 Conversion Playbook、Global Chrome、Header、Footer、URL、页面身份或关键词归属；
- 不进行任何开发、CMS、代码、测试、部署、发布、DNS 或索引操作；
- 不访问或操作 `D:\16Wordpress_nextjs`。

## 17. 变更记录

| 版本 | 日期 | 变更类型 | 变更内容 | 批准来源 |
|---|---|---|---|---|
| V0.1 | 2026-08-30 | Initial draft | 建立 CONV-SAMPLE Gate 0/1 页面任务卡草案 | 用户当前任务授权创建并提交审查；未批准 |
| V0.1 relationship refresh | 2026-08-30 | Evidence baseline update | 消费用户批准的 PRODUCT V0.3；更新 M-2377 五个 Application 与 Sulfate 中性关系、Rubber 边界及 M-996/M-2196 证据/比较边界；Gate 不变 | PRODUCT V0.3 用户批准；CONV-SAMPLE 仍待审 |
| V0.1 Gate 2–4 update | 2026-09-01 | Shared playbook consumption and design progression | 消费 Conversion Playbook V0.1、Global Chrome V0.5 与生产 SVG；完成并提交 Gate 2、3、4；停止于 Gate 4 | 用户明确授权推进到 Gate 4；成果未批准 |
| V0.1 Gate 5 update | 2026-09-01 | Full visual execution | 完成 Desktop/390px/Mobile Menu、预填/未预填、未知型号、Other、validation/focus/error、failure/success、privacy、human review 与 restricted 视觉；因隐私文案缺失保持阻塞 | 用户明确授权执行 Gate 5；成果未批准 |
| V0.2 Gate 5 Buyer-clean revision | 2026-09-01 | Directed visual and state revision | 移除 Buyer-facing internal/legal placeholder 术语；加入一次中性 Malaysia-origin 语境；完成 Desktop sticky review card、390px submitting/unavailable 等 15 张资产与 V0.2 审计；隐私、receiver、route、idempotency 与 fallback 继续 fail-closed | 用户附件明确要求修订；提交审查，未批准 |
| V0.3 Gate 5 Desktop layout revision | 2026-09-01 | User-directed Desktop composition correction | 确认 V0.2 右栏长期空白问题；移除 8/4 长表单/短侧栏结构，改为全宽横向 Human Review 流程带后接全宽表单；390px 保持原顺序；15/15 V0.3 资产通过规划断言 | 用户明确反馈 PC 排版问题；提交修订审查，未批准 |
| V0.4 Gate 5 module-order revision | 2026-09-01 | User-directed module order correction | 保留单列全宽结构，交换 Desktop 模块顺序为 Sample Request → Human Review；390px 已是该顺序，保持不变；15/15 V0.4 资产通过规划断言 | 用户明确要求调整 Human Review 与 Sample Request 位置；提交修订审查，未批准 |
| V0.5 Gate 5 directed revision | 2026-09-03 | Privacy / Tablet / field / copy / Manifest correction | 加入精确 Privacy Policy 说明与链接；补 768px 完整证据；Destination 改必填文本；移除 Hero 枚举免责并采用正向 submit/success 文案；建立当前唯一 Manifest；外部依赖转 Gate 8/9/10 控制 | Review ID `CONV-SAMPLE-G5-RR-05` 项目总控通过；用户于 2026-09-03 明确批准；`APPROVED / CLOSED` |
| V0.1 Gate 6 review and closure | 2026-09-03 | Review contracts and staged acceptance | 完成身份/字段/状态/SEO/GEO/Schema/响应式/a11y/Global Chrome/site_scope/依赖分期审查 | `CONV-SAMPLE-G6-PCR-01`：`S-G6-D01`–`S-G6-D12` 全部 PASS；`PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| V0.1 Gate 7 delivery contract and closure | 2026-09-03 | Development-delivery specification | 建立 Package `CONV-SAMPLE-G7-HANDOFF-01`、字段上限、receiver/prefill/privacy/shared-owner、Gate 8/9 验收与唯一 Manifest | `CONV-SAMPLE-G7-PCR-01`：`S-G7-D01`–`S-G7-D10` 全部 PASS；`PROJECT_CONTROL_REVIEW_PASS / CLOSED`；`HANDED_OFF=NO` |
| V0.1 Gate 8 authorization and handoff | 2026-09-03 | External development intake | Package `CONV-SAMPLE-G7-HANDOFF-01` 由 `01My首页开发` task `01a05595-2a2c-7ef0-9be4-f55a42043bb6` 接收；实施顺序在 CONV-DOC 之后 | 用户授权 Gate 8；页面 `HANDED_OFF`；Gate 8 `AUTHORIZED / QUEUED_AFTER_CONV-DOC`；等待开发结果 |
