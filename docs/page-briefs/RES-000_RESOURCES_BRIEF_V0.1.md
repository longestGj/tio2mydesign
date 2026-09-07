# Resources Page Brief V0.1

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| 文档名称 | Resources Page Brief |
| Page ID | `RES-000` |
| Brief 版本 | V0.1 |
| 创建日期 | 2026-08-29 |
| 最后更新日期 | 2026-09-01 |
| 页面负责人 | Resources 页面执行任务 |
| 总控审核人 | 项目总控与质量审查 |
| 用户批准记录 | 2026-08-30：Gate 0；2026-09-01：Gate 2–5、Gate 7 规格及 Gate 8 外部开发就绪授权；PRODUCT V0.3 继续为唯一关系源 |
| 批准范围 | Gate 0、Gate 2–7 已形成当前治理基线；Gate 8 外部开发就绪获授权；不授权本任务开发、Resource 子页、部署、发布或索引 |
| Gate 0 状态 | `APPROVED`；RES-R001=`CLOSED`；RES-G0-01=`CLOSED` |
| 页面生命周期 | `APPROVED_FOR_HANDOFF`; `HANDED_OFF=NO` |
| Gate 1–5 总控审查 | Gate 1 继续 `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；Gate 2–5 当前成果由用户于 2026-09-01 批准；`RES-HUB-FINAL-01=APPROVED / CLOSED` |
| Mapping Status | `PLANNED_ARCHITECTURE` |
| Verification Status | `NO_DIRECT_KEYWORD_TARGET` |
| Playbook 状态 | `APPROVED_FOR_DESIGN`；Gate 0 批准基线 |
| 本版变更摘要 | `RES-000-G7-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`; 生命周期 `APPROVED_FOR_HANDOFF`; Gate 8=`USER_AUTHORIZED / READY_FOR_EXTERNAL_DEVELOPMENT`; 未交付、未部署、未发布、未开放索引，Resource children 与所有事实门禁保持 |

本任务卡只定义视觉策划、SEO、GEO、内容架构、开发交付规格和外部实现后的只读 QA。Gate 8 外部开发已获用户就绪授权，但本任务仍不得编写或修改 WordPress、Next.js、CMS、组件、样式、测试、部署、DNS、索引、发布或任何代码，也不授权启动八个 Resources 子页。

## 1. 页面身份

| 字段 | 记录值 |
|---|---|
| Page ID | `RES-000` |
| Section | `RESOURCES` |
| Page Name | Resources |
| URL | `/resources/`；登记册/主表一致，当前 Mapping 仍为 `PLANNED_ARCHITECTURE` |
| Page Type | Navigation hub |
| Playbook Key | `RESOURCE` |
| Market | `GLOBAL` |
| Language | `EN` |
| Priority | `P2` |
| Planned Domain | `https://tio2malaysia.com` |
| Site Scope | `tio2-my` |
| External Development Workspace | `D:\16Wordpress_nextjs`；仅由外部开发项目负责 |
| Canonical URL | `https://tio2malaysia.com/resources/`；Gate 0 已批准方向，发布前仍需复核和批准 |
| Indexing Intent | `INDEX, FOLLOW` 方向；无独立主关键词的导航中心，仍需后续 SEO、route 与发布审核 |

### 1.1 本轮子页边界

以下八页后续仍由同一 Resources 页面执行任务负责，但本轮不得建立它们的 Brief、研究、内容架构、线框、视觉或其他正式成果：

- `RES-ORIGIN`
- `RES-PROC`
- `RES-CHEMOURS`
- `RES-R706`
- `RES-TRADE-EU`
- `RES-TRADE-UK`
- `RES-TRADE-IN`
- `RES-TRADE-BR`

它们在本任务卡中仅作为 RES-000 的状态、owner、内链和条件渲染对象。

## 2. 权威输入

| 顺序 | 资料 | 路径或来源 | 本页用途 | 状态 |
|---:|---|---|---|---|
| 1 | 用户当前任务 | 2026-08-30 当前明确决定 | Gate 0 已批准；PRODUCT V0.3 为当前唯一关系源；RES-000 不渲染行级推荐；禁止子页、Gate 6+ 和开发 | 当前最高页面执行输入 |
| 2 | 根项目治理 | `AGENTS.md`、`00_PROJECT_STATUS.md`、`01_PROJECT_INDEX.md`、`02_DIRECTORY_GUIDE.md` | 范围、状态、Gate、目录和开发边界 | 当前基线 |
| 3 | 页面登记册 | `docs/architecture/PAGE_REGISTRY_V0.1.md` | 9 个 Resources Page ID、URL、类型和状态 | 当前登记册 |
| 4 | 最新 PRD | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | Resources 角色、页面架构、trade owner 和防内耗 | 已确认架构基线 |
| 5 | 页面—关键词主表 | `research/keyword/11_page_keyword_master.csv` | RES-000 完整 SEO 行和九页 mapping/verification | 当前实施主表 |
| 6 | 关键词专项治理 | `research/keyword/AGENTS.md` | 官方贸易来源层级、原始证据、替代/等效边界 | 研究规则；不自动形成页面事实 |
| 7 | Resources Playbook | `docs/page-playbooks/RESOURCE_PLAYBOOK_V0.1.md` | Resources 共同 Gate、freshness、Claim、SEO/GEO 和交付规则 | `APPROVED_FOR_DESIGN / GATE_0_APPROVED_BASELINE` |
| 8 | 页面任务卡模板 | `docs/page-briefs/PAGE_BRIEF_TEMPLATE.md` | 本任务卡结构 | V0.2 当前模板 |
| 9 | 视觉标准 | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md` | 品牌、图片、色彩、字体和工业 B2B 基线 | Approved Visual Direction |
| 10 | 已批准首页 | `pages/home/04_planning/04_homepage_full_visual_design_v0.3.md` 与 V0.3 自检 | Header、对比度、Buyer Clean、390px 和空白控制 | 项目状态记录用户确认完成 |
| 11 | 已批准 Hub 治理参考 | `docs/page-playbooks/PRODUCT_PLAYBOOK_V0.1.md`、`docs/page-briefs/PRODUCT-000_TITANIUM_DIOXIDE_PRODUCTS_BRIEF_V0.1.md`、`docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md`、`docs/page-briefs/MARKET-000_MARKETS_BRIEF_V0.1.md` | Evidence/Claim、route 原子门禁、无主词 Hub、Buyer Clean 和 390px | 只作治理与品牌参考，不复制页面结构 |
| 12 | RES-000 Gate 1 综合审计 | `pages/resources/01_research/RES-000_GATE1_RESEARCH_EVIDENCE_ROUTE_FRESHNESS_AUDIT_V0.1.md` | 页面身份、搜索意图、Evidence/Claim、route、官方抓取和 freshness 资格 | `RES-000-G15-PCR-01 / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| 13 | PRODUCT V0.3 关系源与 RES-000 影响审计 | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`、`PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md`、`pages/resources/02_analysis/RES-000_PRODUCT_RELATION_V0.3_IMPACT_AUDIT_V0.2.md` | 30 verified / 0 conflict / 54 no-public、14 Process、M-2377 已批准中性关系、M-996/M-2196 comparison hold 与全表面关系门禁 | PRODUCT V0.3 已获用户批准；RES-000 同步草案待总控审查 |

### 2.1 输入冲突记录

| Conflict ID | 冲突内容 | 涉及资料 | 影响字段或模块 | 当前处理 | 决定人 | 决定日期 |
|---|---|---|---|---|---|---|
| RES-C001 | PRD V0.4 把 Resources 栏目和发布节奏列为后续范围，而用户已批准 RES-000 Gate 0 并授权执行至 Gate 5 草案 | PRD、当前用户决定 | Playbook/Brief 与 Gate 1–5 可否继续 | Gate 0 维持批准基线；只开展 RES-000 Gate 1–5 草案，子页与 Gate 6+ 仍冻结 | 用户当前决定 | 2026-08-30 |
| RES-C002 | RES-ORIGIN 为批准映射，但其内容、route、Claim 和 live 状态未在本轮核验 | 登记册、主表、项目状态 | RESOURCE_PATHS、ItemList、内链 | Mapping 保持 approved；Hub 仍不把它视为公开 live 条目 | 项目治理 | 2026-08-29 |
| RES-C003 | 三个比较/替代页面有登记 URL 和主关键词，但 Mapping 为候选 | 登记册、主表 | Hub 条目、Meta、Schema | 保持 `NEW_PAGE_CANDIDATE`；不进入公共链接、摘要、Schema 或 Meta | 项目治理 | 2026-08-29 |
| RES-C004 | 四个 Trade Update 有计划 URL/关键词，但无本轮当前官方来源与 freshness 审计 | 登记册、主表、项目状态 | CURRENT_UPDATES、GEO、Schema | 保持 `PLANNED_CONTENT` / `OFFICIAL_SOURCE_UPDATE_REQUIRED`；不渲染结论、链接或摘要 | 项目治理 | 2026-08-29 |
| RES-C005 | Visual Standard 的亮 Teal CTA 与首页 V0.3 的对比度修正不同 | Visual Standard、Homepage V0.3 | CTA、小字、来源日期 | 浅底小文字和实心 CTA 使用 `#007F77`；`#00A99D` 只作非文字强调 | 较新批准首页基线 | 2026-08-29 |
| RES-C006 | 首页视觉历史画面曾出现 Legal/Privacy 入口，但 54 页登记册无对应页面 | 首页参考、登记册、根治理 | Footer | 不新增或占位；只渲染登记/批准入口 | 根治理 | 2026-08-29 |
| RES-C007 | 关键词中出现 `alternative equivalent`，但项目禁止无证据等效结论 | 主表、根/关键词治理 | RES-R706/品牌替代边界 | 关键词证明搜索意图，不证明等效；候选不公开，未来逐 Claim 技术审核 | 项目治理 | 2026-08-29 |
| RES-C008 | Resources 的比较/选型语言必须采用 PRODUCT V0.3 唯一关系源 | 用户统一决定、PRODUCT V0.3 | Gate 1–5 copy、SEO/GEO、Schema、内链和视觉 | 公共 Hub 不列型号关系；30/0/54 与 14 Process 仅作内部证据基线；M-2377 已批准关系不转化为 Hub 推荐；M-996/M-2196 comparison hold 保持 | 用户当前决定 / approved relationship baseline | 2026-08-30 |

以上冲突均未改变 Page ID、URL、主关键词、页面职责、Mapping 或 Verification。受影响内容保持冻结，不阻塞 Gate 0 草案审查。

## 3. 页面策略

### 3.1 目标采购商

| 字段 | 记录值 |
|---|---|
| 主要买家角色 | TiO2 采购、技术采购、进口/分销采购、供应链和采购研究人员 |
| 次要买家角色 | 配方/应用评估、质量、合规、文件和市场协调人员 |
| 所在市场 | European Union、United Kingdom、India、Brazil，以及进入全站的全球研究型买家 |
| 行业与应用 | Coatings、Plastics、Masterbatch、Printing Inks、Paper 和有证据的专业材料场景 |
| 采购阶段 | Navigation → Awareness → Technical Evaluation → owner page / RFQ |
| 已知问题 | 买家可能在研究来源多元化、工艺差异、竞品牌号替代方向或特定市场贸易状态 |
| 主要顾虑 | 内容是否有来源、是否仍然当前、比较是否夸大、政策适用范围是否明确、下一步 owner 是否正确 |
| 需要完成的判断 | 选择正确资源类型，并知道何时转向 Product、Market、Application、Document、About 或 RFQ |
| 页面访问后的理想下一步 | 阅读一个已批准且当前的资源，或进入正确 owner 页面；不因候选/过期内容进入死链 |

### 3.2 页面职责

| 项目 | 记录值 |
|---|---|
| 一句话页面职责 | 按采购问题把买家导向有来源、日期和范围的 TiO2 教育、比较、替代来源研究或当前 Trade Update，并连接到正确采购 owner 页面 |
| 必须解决的核心问题 | 有哪些资源类型；如何选择；如何判断内容日期/来源；比较与产品推荐如何分开；当前贸易内容在哪里；下一步 owner 是谁 |
| 对全站采购路径的贡献 | 连接 Home、合格 Resource 子页、Products、Markets、Applications、Documents、About 和 RFQ |
| 主转化目标 | 完成一次正确的资源或 owner 路径选择 |
| 次转化目标 | 在明确上下文后进入独立 RFQ |
| 页面成功信号 | 合格资源点击、owner 路径点击、来源/日期信息可理解、有效 RFQ 点击；不以卡片数或过期内容曝光代替成功 |

### 3.3 明确不负责

| 排除事项 | 原因 | 正确承接 Page ID | 正确承接 URL/方式 |
|---|---|---|---|
| `non china titanium dioxide` 深度内容 | 子页 owner，Hub 只导航 | RES-ORIGIN | 内容/route/Claim 通过独立 Gate 后使用批准 route |
| Chloride vs Sulfate 完整比较 | 候选子页 owner，未批准 | RES-PROC | `NEW_PAGE_CANDIDATE`；当前不公开 |
| Chemours 或其他品牌替代全文 | 候选子页 owner，且需商标/技术审核 | RES-CHEMOURS | `NEW_PAGE_CANDIDATE`；当前不公开 |
| R-706 等效/替代结论 | 候选子页 owner；等效不可由关键词证明 | RES-R706 | `NEW_PAGE_CANDIDATE`；当前不公开 |
| EU/UK/India/Brazil 贸易政策详情 | 对应 Trade Update owner；Hub 不能保存易过期结论 | RES-TRADE-* | 只有 approved + official + CURRENT + live 后链接 |
| 国家 supplier / procurement 内容 | Market 页拥有商业搜索意图 | 对应 MARKET-* | 批准 Market URL/route key |
| 泛产品、工艺、型号技术详情 | Products/Grade 是 owner | PRODUCT-* / GRADE-* | Page ID/route key |
| 泛应用内容 | Applications 是 owner | APP-* | Page ID/route key；route 状态另审 |
| 文件与合规解释/申请 | Documents/Conversion 是 owner | DOC-* / CONV-DOC | Page ID/route key；不承诺可用性 |
| 制造、origin、COO 和 traceability 事实证明 | About/Documents 是 owner | ABOUT-001 / DOC-COO | 已验证后由 owner 承接 |
| 报价表单 | Conversion 是 owner | CONV-RFQ | 独立页面；Hub 不内嵌 |
| 未登记 Legal/Privacy 页面 | 超出 54 页架构和当前任务 | `NOT_IN_SCOPE` | 不渲染占位链接 |

## 4. SEO、GEO 与搜索意图合同

| 字段 | 记录值 |
|---|---|
| Primary Keyword | `NO_PRIMARY_KEYWORD` |
| Secondary Keywords | `buying guides | technical guides | market trade updates` |
| Search Intent | `N`；按资源类型和采购问题导航 |
| Buyer Stage | Navigation |
| Source Cluster | `PRODUCT-05 | BRAND-01 | BRAND-02 | TRADE-*` |
| Page Role | `Route buyers to technical, sourcing, alternative-origin, and trade-update content.` |
| Excluded Keywords | `all child-guide primary terms` |
| Cannibalization Boundary | `Hub does not own child-guide primary terms.` |
| H1 方向 | `Resources for Titanium Dioxide Procurement Decisions`；Gate 2 才可锁定最终英文 copy |
| Title 方向 | `Titanium Dioxide Resources | TiO2 Malaysia`；Gate 2 才可锁定最终 copy |
| Meta Description 方向 | 说明按采购问题浏览有来源、日期和范围的指南/当前更新并继续 owner 页面；不得加入子页主词、政策结论、等效、制造或供应承诺 |
| Slug | `/resources/` |
| Canonical | `https://tio2malaysia.com/resources/`；后续 Gate 与发布前复核 |
| Hreflang | `NOT_APPLICABLE`；任何未来本地化需变更控制 |
| Robots | `INDEX, FOLLOW` 方向；Gate 0 不构成索引或发布授权 |

### 4.1 SEO 防内耗检查

- [x] `RES-000` 原样保持 `NO_PRIMARY_KEYWORD`。
- [x] Secondary Keywords 只作内容类型导航，不升级为商业获取词。
- [x] Hub 不在 H1、Title、Hero、Meta 或主要 H2 抢占八个子页主关键词。
- [x] Research/comparison/update intent 与 Market、Product、Application、Document 和 RFQ owner 分开。
- [x] 三个候选不进入公共 Meta、导航、摘要、ItemList 或 sitemap。
- [x] 四个 Trade Update 在 freshness/官方来源未通过时不进入公共输出。
- [x] 交互分类、过滤和 freshness 状态不形成可索引参数页。

### 4.2 GEO 合同

| 字段 | 记录值 |
|---|---|
| Primary Entity | TiO2 Malaysia Resources navigation hub |
| Related Entities | 仅限页面可见、已批准、Claim 通过、route live 且时间敏感内容为 CURRENT 的 Resource item；以及 Products、Markets、Applications、Documents、About、RFQ owner pages |
| Buyer Questions | 资源类型如何选择；技术比较与产品推荐如何区分；如何判断 Trade Update 的日期/范围；如何继续产品、市场、文件或报价 |
| Answer-ready Blocks | RESOURCE_PATHS、EVIDENCE_STANDARD、PROCUREMENT_PATHS、BUYER_QUESTIONS |
| Evidence and Attribution | 页面身份和状态来自登记册/主表；公共事实必须有来源、日期、范围、Claim 与审核人；Gate 0 批准基线不批准任何贸易或技术事实 |
| Freshness Requirement | Buying Guide 180 天、Technical/Alternative 90 天、active Trade 30 天、definitive/stable Trade 90 天的最大内部间隔，并受官方事件即时触发；首次发布前必须当前复核 |
| Machine-readable Relationships | `CollectionPage` + 条件 `ItemList` + `BreadcrumbList`；仅输出页面可见合格条目 |
| GEO Exclusions | 候选页、过期 Trade Update、等效/保证替代、规避、制造/origin、文件、价格、库存、交期、物流和其他无证据关系 |

- [x] 主要实体和导航职责清楚。
- [x] 关键问题均映射到计划中的可见答案模块。
- [x] 时间敏感内容要求显示来源日期和最后复核日期。
- [x] Schema 不制造隐藏、候选、过期或不存在的关系。
- [x] Buyer Questions 默认不使用 `FAQPage` / `QAPage`。

### 4.3 Schema 方向

| Schema | Gate 0 已批准方向 | 强制条件 |
|---|---|---|
| CollectionPage | RES-000 页面类型 | 页面可见内容与导航职责一致 |
| ItemList | 合格 Resource 条目列表 | 只包含 visible + approved + claim-verified + route-live + current（如适用）条目 |
| BreadcrumbList | Home → Resources | 与可见 breadcrumb 和批准 URL 一致 |
| Article / NewsArticle | `NOT_APPROVED_FOR_HUB` | 子页未来独立审核；Hub 不代理输出 |
| FAQPage / QAPage | `NOT_APPROVED` | Buyer Questions 不自动触发 |
| Product / Offer / Review | `NOT_APPLICABLE` | Hub 不描述单一产品、价格或评价 |

Schema 官方要求须在发布前重新核对；本轮没有把任何候选或计划页面写入公共机器可读关系。

## 5. 本页必须回答的问题

| Question ID | 买家问题 | 采购判断 | 回答模块 ID | 所需证据 | 回答深度 |
|---|---|---|---|---|---|
| Q01 | Which type of resource should I use for a sourcing, technical, or trade-policy question? | 应进入哪个内容族 | RESOURCE_PATHS | 批准的信息架构与合格条目关系 | 一段选择逻辑；不重复子页正文 |
| Q02 | How are buying guides different from technical comparison guides? | 需要采购教育还是技术比较框架 | RESOURCE_PATHS / BUYER_QUESTIONS | 页面类型职责 | 直接边界答案，不作性能结论 |
| Q03 | How are technical comparisons separated from product recommendations? | 是否应转入 Products/Application owner | EVIDENCE_STANDARD / PROCUREMENT_PATHS | owner 架构、技术 Claim 规则 | 解释比较是评估框架，不是等效/保证推荐 |
| Q04 | How can I tell when a trade update was last reviewed? | 内容是否仍适合当前决策 | EVIDENCE_STANDARD / CURRENT_UPDATES | official source/date/freshness 合同 | 解释可见来源日期、范围和 Last reviewed；不提供政策结论 |
| Q05 | Why might a resource not appear on this hub? | 如何理解没有链接的情况 | BUYER_QUESTIONS | 公开资格合同 | 使用自然语言说明只展示当前且已审内容；不泄漏内部状态码或候选名 |
| Q06 | Where should I continue for grade selection or process details? | 是否进入 Products | PROCUREMENT_PATHS | Products owner 和 route 状态 | 路由级答案 |
| Q07 | Where should I review market procurement and document requirements? | 是否进入 Markets/Documents | PROCUREMENT_PATHS | Market/Document owner 和 route 状态 | 路由级答案，不承诺能力/文件 |
| Q08 | How can I request a quotation after my research? | 是否进入 RFQ | FINAL_ACTION | Conversion workflow 和 route | 独立页面；只有 route/workflow approved + live 才公开回答和 CTA |

## 6. 内容架构与模块顺序

### 6.1 页面叙事

| 项目 | 记录值 |
|---|---|
| 首屏承诺 | 按采购问题选择合适的 TiO2 研究资源，并看清来源、日期和下一步 owner |
| 主要证据链 | 资源类型职责 → 合格可见条目 → 来源/日期/范围 → 正确 owner page |
| 选择或比较逻辑 | 先判断问题类型，再选择当前且经审的内容；Hub 不进行品牌、工艺或国家优劣排名 |
| 风险与边界说明 | 候选、未批准、无官方来源、过期或 route 不可用的内容不进入公共 Hub；比较不等于推荐或等效 |
| 最终行动理由 | 买家已获得一个合格资源或明确 owner 路径，必要时带已明确上下文进入 RFQ |

### 6.2 模块清单

| 顺序 | Module ID | 模块名称 | 买家问题 | 模块目的 | 必须内容 | 独有内容 | Evidence ID | CTA | 手机端处理 |
|---:|---|---|---|---|---|---|---|---|---|
| 0 | GLOBAL_HEADER | Global Header | 如何访问主要栏目？ | 全站导航 | 固定八项顺序、Resources 当前项、Home 可见 | Home 文字入口不可由 Logo 代替 | E-IA-001 | Request a Quote 条件 CTA | Logo、Menu、条件 RFQ；menu open 单独状态 |
| 1 | BREADCRUMB | Breadcrumb | 我在什么位置？ | 建立层级 | Home > Resources | 与 Schema 一致 | E-IA-001 | 无 | 自然换行，不截断 |
| 2 | HERO | Resources Hub Hero | 这是什么页面？如何开始？ | 建立导航任务 | H1、简介、来源/日期方向、主 CTA、条件 RFQ | 无主关键词的采购研究导航定位 | E-SEO-001 / E-PRD-001 | Browse Resources / Request a Quote（条件） | 单列；CTA 可全宽；无大空白 |
| 3 | RESOURCE_PATHS | Browse by Procurement Question | 我应使用哪类资源？ | 核心路径选择 | Buying/Sourcing、Technical Comparison、Current Trade Updates 三类；只含合格条目 | 按决策问题而不是发布时间或卡片墙组织 | E-PRD-001 / E-ROUTE-001 | Read Guide / View Current Update（条件） | 内容族纵向；无横滑；0 条内容族原子省略 |
| 4 | EVIDENCE_STANDARD | Sources, Scope and Review Dates | 如何判断证据和时效？ | 建立内容透明度 | 来源机构、source date、scope、last reviewed、事实/分析区分 | 对 Trade 与 comparison 共同适用的买家语言 | E-GOV-001 / E-FRESH-001 | 无或本地锚点 | 元数据与条目保持关联，不做密集 badge |
| 5 | CURRENT_UPDATES | Current Trade Updates | 哪些更新仍适合当前决策？ | 展示通过官方/freshness 门禁的更新 | 仅 CURRENT + approved + route live 条目 | 0 条时整模块不渲染 | E-FRESH-001 / E-ROUTE-001 | View Current Update | 纵向列表；长机构名/日期换行 |
| 6 | PROCUREMENT_PATHS | Continue Your Procurement Review | 下一步去产品、市场、应用还是文件？ | 连接 owner 页面 | Products、Markets、Applications、Documents、About | 每个入口解释 owner 职责，不复制正文 | E-PRD-001 / E-ROUTE-001 | Explore owner page（条件） | 单列或紧凑卡片；无空卡 |
| 7 | BUYER_QUESTIONS | Buyer Questions | 常见边界问题是什么？ | GEO 可引用答案 | Q01–Q07 中获批答案 | 不泄漏 candidate、approval、CURRENT 等内部工作流术语 | E-GOV-001 | 条件 owner route | 完整展开或可访问 accordion |
| 8 | FINAL_ACTION | Continue with a Procurement Request | 如何询价？ | 行动收口 | 独立 RFQ、预填边界、无承诺说明 | 只传用户明确上下文 | E-CTA-001 / E-ROUTE-001 | Request a Quote（条件） | 单列，不内嵌表单；省略后 section 自然闭合 |
| 9 | GLOBAL_FOOTER | Footer | 如何再次访问栏目或联系？ | 导航收口 | 登记顶层栏目、Contact、verified 主体信息和条件 RFQ | 不新增未登记 Legal/Privacy | E-IA-001 / E-GOV-001 | 条件 CTA | 分组导航；390px 无溢出 |

### 6.3 页面独有内容

| Unique ID | 必须独有的内容 | 为什么不能模板替换 | 证据来源 | 验收方式 |
|---|---|---|---|---|
| U-001 | 按 sourcing/technical/trade procurement question 组织资源 | RES-000 的核心导航职责，不是普通博客列表 | 主表 Page Role、PRD | 首屏和 RESOURCE_PATHS 核对 |
| U-002 | 来源、资料日期、适用范围和 Last reviewed 的统一阅读顺序 | Resources 必须让买家判断内容是否可用 | 根治理、关键词研究证据规则 | EVIDENCE_STANDARD 与条目元数据核对 |
| U-003 | 候选/计划/过期内容的原子公共省略 | 防止未批准或 stale 内容进入获客路径 | Mapping/Verification/freshness 合同 | DOM、JSON、Schema、Meta 和 Hub 列表一致检查 |
| U-004 | 比较框架与 Product 推荐/等效结论分离 | 防止竞品和牌号替代越界 | 根/关键词治理 | Buyer Questions、摘要、CTA 和 Schema 文本扫描 |
| U-005 | Trade Update 官方来源与 freshness 双门禁 | 防止旧政策继续被链接或引用 | 项目状态、研究治理 | CURRENT_UPDATES 资格测试和撤回状态测试 |
| U-006 | Resources → Products/Markets/Applications/Documents/About/RFQ 的 owner 路径 | Hub 不能只是内容卡片集合 | PRD/登记册 | PROCUREMENT_PATHS 每项职责和 route 条件核对 |

### 6.4 Buyer Questions 候选

| FAQ ID | 问题 | 回答要点 | Evidence ID | FAQ Schema |
|---|---|---|---|---|
| BQ-01 | Which resource type should I use? | 按 sourcing、technical comparison 或 current trade question 选择；只显示合格内容 | E-PRD-001 / E-ROUTE-001 | 否；可见答案块 |
| BQ-02 | Does a technical comparison mean two grades are equivalent? | 否；比较是核对框架，适用性需技术资料和测试，不能保证替代 | E-GOV-001 | 否 |
| BQ-03 | How do I know whether a trade update is current? | 查看官方来源、适用范围、source date 和 Last reviewed；Hub 省略待复核内容 | E-FRESH-001 | 否 |
| BQ-04 | Where should I go for product or market procurement? | 分别进入 Products 或 Markets owner；Resources 不取代商业落地页 | E-PRD-001 | 否 |
| BQ-05 | Where should I request documents or a quotation? | 进入独立 Documents/Conversion owner；不承诺请求批准 | E-CTA-001 / E-PRD-001 | 否 |

这些是 Gate 0 问题方向，不是最终英文文案。Gate 2 前不得作为已批准页面 copy 使用。

## 7. 页面关系

### 7.1 产品推荐

`NOT_APPLICABLE_FOR_RES-000`。RES-000 是导航 Hub，不推荐具体型号。任何未来资源子页的产品、工艺或应用关系必须有独立技术证据和 Claim，不能从主表分类、搜索词或竞品描述推断。

### 7.2 关系矩阵

| 关系类型 | 关联 Page ID | 为什么相关 | 本页如何呈现 | 对方页如何回链 |
|---|---|---|---|---|
| Resource | RES-ORIGIN | Alternative-origin research owner | 独立内容/Claim/route 通过后作为条件条目 | Breadcrumb / Back to Resources |
| Resource candidate | RES-PROC / RES-CHEMOURS / RES-R706 | 研究支持候选意图 | 当前完全不公开 | 未启动，不定义回链 |
| Trade Resource | RES-TRADE-EU/UK/IN/BR | 特定市场时效性 update owner | approved + official + CURRENT + live 后条件条目 | 回链 RES-000 和对应 Market page |
| Product | PRODUCT-000 / PRODUCT-PROC-* / GRADE-* | 产品、工艺和型号 owner | PROCUREMENT_PATHS 条件导流 | Resources 入口仅在有研究上下文时 |
| Market | MARKET-000 / MARKET-* | 商业 procurement owner | PROCUREMENT_PATHS 条件导流；Trade Update 回链相应市场 | Trade/Resources 入口只链接合格内容 |
| Application | APP-000 / APP-* | 泛应用 owner | PROCUREMENT_PATHS 条件导流 | 有研究需要时回链 |
| Document | DOC-000 / DOC-* / CONV-DOC | 文件说明/申请 owner | 条件导流，不承诺可用性 | Resources 入口只在相关时 |
| About | ABOUT-001 | 制造、origin、traceability 事实 owner | 有已验证关系且 route live 后导流 | 可回链 Alternative-origin resource |
| Conversion | CONV-RFQ | 报价行动 owner | 条件 CTA；不内嵌表单 | 可记录 `source_page=RES-000` |

## 8. 事实与证据登记

### 8.1 Evidence Register

| Evidence ID | 来源 | 支持范围 | 不支持范围 | 当前状态 |
|---|---|---|---|---|
| E-IA-001 | `docs/architecture/PAGE_REGISTRY_V0.1.md` | 9 个 Resources Page ID、名称、URL、类型、Priority、Mapping、Verification；Header/页面层级需结合根治理 | 页面 live、内容批准、事实、性能、贸易当前状态 | `VERIFIED_ARCHITECTURE` |
| E-SEO-001 | `research/keyword/11_page_keyword_master.csv` 的 RES-000 行 | Primary、Secondary、Intent、Buyer Stage、Source Cluster、Page Role、Excluded、Cannibalization | 精确量化需求、内容 live、公司能力 | `VERIFIED_IMPLEMENTATION_MAPPING` |
| E-PRD-001 | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | Resources 角色、trade detail owner、全站 owner 边界 | Resources 最终栏目/节奏、当前事实、页面发布 | `VERIFIED_ARCHITECTURE` |
| E-GOV-001 | 根 `AGENTS.md`、项目状态、关键词 `AGENTS.md` | Evidence/Claim、竞品、等效、贸易、事实、Gate 和非开发边界 | 任一具体事实为真或当前 | `VERIFIED_GOVERNANCE` |
| E-ROUTE-001 | 登记册、主表、已批准 Hub route 门禁模式 | Mapping/URL/content/live/freshness 必须分离 | 当前任一 Resource route live | `ROUTE_AUDIT_REQUIRED` |
| E-FRESH-001 | 根治理、项目状态、关键词官方来源层级、本 Playbook Gate 0 机制 | 官方来源类别、日期/范围字段和复核门禁方向 | EU/UK/India/Brazil 当前措施或税率 | `OFFICIAL_SOURCE_AUDIT_REQUIRED` |
| E-BRAND-001 | Visual Standard V1.0、首页 V0.3 与自检 | Industrial Editorial、Navy/Teal、对比度、Buyer Clean、390px | 具体 Resources 线框或视觉稿已批准 | `VERIFIED_BRAND_BASELINE` |
| E-CTA-001 | PRD、主表 Conversion 记录、根治理 | RFQ/Documents/Sample 是独立 owner，成功不等于批准 | Conversion workflow 或 route 已批准/live | `CONVERSION_AUDIT_REQUIRED` |

### 8.2 Claim Register

| Claim ID | 计划公开的事实或关系 | 类型 | Evidence ID | 资料日期 | 适用范围 | 验证状态 | 渲染决定 | 审核人 |
|---|---|---|---|---|---|---|---|---|
| CL-001 | 页面名称为 Resources，URL 为 `/resources/`，角色为 Navigation hub | ARCHITECTURE | E-IA-001 / E-SEO-001 | 2026-08-29 | RES-000 页面身份 | verified architecture | `RENDER`；内部状态 token 不公开 | 总控待审 |
| CL-002 | RES-000 不拥有独立 Primary Keyword，负责导航 | SEO | E-SEO-001 | 2026-08-29 | Title/H1/模块职责 | verified mapping | `RENDER` 为自然导航文案；不公开 `NO_PRIMARY_KEYWORD` token | 总控待审 |
| CL-003 | Resources 体系登记 9 条记录 | ARCHITECTURE | E-IA-001 | 2026-08-29 | 内部审计 | verified architecture | `DO_NOT_RENDER` 为九页公共列表；只输出合格可见条目 | 总控待审 |
| CL-004 | Hub 可按 buying/sourcing、technical comparison、trade update 三类解释内容用途 | CONTENT_TYPE | E-PRD-001 / E-SEO-001 | 2026-08-29 | RES-000 导航 | Gate 0 direction only | `DO_NOT_RENDER` 直到 Gate 2 copy 批准且至少一项合格条目支持对应内容族 | 总控/用户待审 |
| CL-005 | RES-ORIGIN 是批准映射的 alternative-origin guide | ARCHITECTURE | E-IA-001 | 2026-08-29 | 内部 route 关系 | mapping verified; content/live unknown | `DO_NOT_RENDER` 直到独立内容、Claim、URL/route 审核通过 | 总控待审 |
| CL-006 | RES-PROC、RES-CHEMOURS、RES-R706 是候选 | ARCHITECTURE | E-IA-001 | 2026-08-29 | 内部门禁 | verified candidate state | `DO_NOT_RENDER`；不进入链接、摘要、Meta、Schema | 总控待审 |
| CL-007 | 四个 Trade Update 是计划内容且需官方来源更新 | TRADE | E-IA-001 / E-FRESH-001 | 2026-08-29 | 内部门禁 | official/current evidence missing | `DO_NOT_RENDER` 直到 approved + official + scoped + CURRENT + live | 合规/总控待审 |
| CL-008 | Hub 公开内容会显示 source date、scope 和 Last reviewed | EDITORIAL_PROCESS | E-GOV-001 / E-FRESH-001 | 2026-08-29 | EVIDENCE_STANDARD 和条目元数据 | operational implementation unverified | `DO_NOT_RENDER` 直到流程 owner、字段和维护责任获批并实际可执行 | 总控/内容 owner 待审 |
| CL-009 | 竞品或牌号是等同/保证替代关系 | TECHNICAL | E-GOV-001 | 不适用 | 全体系 | prohibited / no evidence | `DO_NOT_RENDER` | 技术 owner |
| CL-010 | Malaysia origin 可规避、绕过或自动不受贸易措施影响 | TRADE / ORIGIN | E-GOV-001 | 不适用 | 全体系 | prohibited | `DO_NOT_RENDER` | 合规 owner |
| CL-011 | Resources 可连接 Products、Markets、Applications、Documents、About | ARCHITECTURE / ROUTE | E-PRD-001 / E-ROUTE-001 | 2026-08-29 | PROCUREMENT_PATHS | owner relation verified; live unknown | `RENDER` 仅对 URL approved + content approved + route live 的目标 | 总控/开发项目待审 |
| CL-012 | 全站 Header 顺序固定，Home 为可见文字入口 | ARCHITECTURE | E-GOV-001 / E-BRAND-001 | 2026-08-29 | GLOBAL_HEADER | verified governance | `RENDER`；RFQ 项另受 route 条件 | 总控待审 |
| CL-013 | 页面数据必须属于 `site_scope=tio2-my`，不得跨站 fallback | SYSTEM_BOUNDARY | E-GOV-001 | 2026-08-29 | 开发交付/只读 QA | verified governance | `DO_NOT_RENDER` 为买家文案；作为交付和 QA 硬门禁 | 总控/开发项目 |
| CL-014 | 制造、origin、COO、traceability、文件、库存、价格、交期或物流能力 | COMPANY / ORIGIN / DOCUMENT / LOGISTICS | E-GOV-001 | 未提供 | RES-000 | evidence missing | `DO_NOT_RENDER` | 对应事实 owner |
| CL-015 | ItemList 表示当前可见 Resource 条目 | SCHEMA | E-IA-001 / E-ROUTE-001 / E-FRESH-001 | 发布时复核 | JSON-LD | conditional | 只为 visible + approved + Claim verified + live + CURRENT 条目 `RENDER` | SEO/总控待审 |
| CL-016 | Hub 可进入独立 RFQ | CONVERSION / ROUTE | E-CTA-001 / E-ROUTE-001 | 2026-08-29 | HERO / FINAL_ACTION | workflow/live unknown | `DO_NOT_RENDER` 直到 workflow approved + route live；仅传明确上下文 | Conversion owner 待审 |

### 8.3 Evidence/Claim 一致性检查

- [x] CL-001–CL-016 每条都有明确 Evidence ID。
- [x] 架构证据没有被扩展为公司、技术、贸易或 live 证据。
- [x] `NEW_PAGE_CANDIDATE` 没有被写成 approved 或 public。
- [x] `PLANNED_CONTENT` 没有被写成 current 或 live。
- [x] 所有无证据能力和贸易结论为 `DO_NOT_RENDER`。
- [x] Schema、Meta、OG、ALT、HTML、JSON 和 API 使用同一 Claim 门禁。
- [ ] Gate 0 总控独立复审 Claim/Evidence 一致性。

### 8.4 不渲染字段

| 字段或模块 | 冻结原因 | Verification Status | 解冻所需证据 | 不阻塞的工作 |
|---|---|---|---|---|
| Candidate resource items | Mapping 未批准 | `NEW_PAGE_CANDIDATE` | 正式变更批准、独立 Brief/Gates、route live | RES-000 Gate 0 结构和门禁 |
| Trade Update links/summaries | 无当前官方来源和 freshness 审计 | `OFFICIAL_SOURCE_UPDATE_REQUIRED` | 官方原文、日期、范围、Claim、内容批准、CURRENT、route live | Hub 静态导航结构 |
| Competitor/equivalence claims | 无逐项技术证据且项目禁止保证等效 | `TECHNICAL_EVIDENCE_REQUIRED` | 批准技术资料与人工技术审核；仍不得保证替代 | 非竞品模块和 owner 路径 |
| Company/origin/document claims | 本轮未提供一方事实包 | `FACT_EVIDENCE_REQUIRED` | 当前批准一方证据与适用范围 | 页面身份、导航和视觉方向 |
| RFQ CTA | Conversion workflow/live 未核验 | `ROUTE_AUDIT_REQUIRED` | workflow approved + route live +接收状态合同 | Browse Resources 主路径 |
| ItemList items | 可见条目资格未满足 | `CONTENT_ROUTE_FRESHNESS_REQUIRED` | visible/approved/verified/live/current 全部满足 | CollectionPage/Breadcrumb 方向 |

## 9. 内容 freshness 和撤回合同

### 9.1 条目必填字段

| 字段 | 要求 | 公共可见性 |
|---|---|---|
| resource_page_id | 与登记册一致 | 不显示内部 ID；用于关联 |
| resource_type | Buying Guide / Technical Guide / Trade Update | 使用自然语言标签 |
| title | 批准标题 | 可见 |
| summary | 只含 approved Claim | 可见；无合格摘要则条目不渲染 |
| source_name | 官方或批准来源名称 | Trade/事实内容可见 |
| source_url_or_file | 原始来源标识 | 按公开策略可见；内部证据必须完整 |
| source_published_date | 来源显示日期或明确无日期状态 | 页面需给出可理解日期 |
| effective_or_procedure_date | 有关时必填 | 仅在范围明确时可见 |
| jurisdiction_scope | EU/UK/India/Brazil/Global 等准确范围 | 有关时可见 |
| product_origin_scope | 产品和原产地适用范围 | 只有 verified 时可见 |
| last_reviewed | 最后人工复核日期 | 可见 |
| next_review_due | 内部维护日期 | 默认不公开 |
| freshness_status | CURRENT/REVIEW_DUE/STALE_HOLD/WITHDRAWN | 不显示内部 token；控制渲染 |
| fact_analysis_label | 事实/分析分类 | Trade Update 必须让买家可理解 |
| claim_ids | 支持摘要和元数据的 Claim | 内部，不公开 ID |
| reviewer_owner | 责任角色 | 内部；发布治理必填 |

### 9.2 复核和撤回

- Buying Guide 最大 180 天复核；产品、来源地、文件或市场基线变化立即触发。
- Technical/Alternative Guide 最大 90 天复核；TDS、竞品牌号、应用或技术结论变化立即触发。
- Active/provisional Trade Update 最大 30 天复核；新官方 notice 后 2 个工作日内触发。
- Definitive/stable Trade Update 最大 90 天复核；复审、暂停、终止或官方状态变化后 2 个工作日内触发。
- 首次公开前必须在发布窗口内重新核对官方来源。
- `REVIEW_DUE`、`STALE_HOLD`、`WITHDRAWN` 均不得进入 Hub 链接、摘要、ItemList、Meta 或 GEO answer。
- 撤回是原子操作：卡片/列表项、摘要、结构化数据、相关 CTA 和机器可读关系同时移除，不保留隐藏旧文案作为 fallback。

这些周期是 Gate 0 内部治理草案，不是任何政策当前状态的声明。

## 10. CTA 与转化合同

### 10.1 CTA 层级

| 层级 | CTA 文案方向 | 目标 | 触发位置 | 预填参数 | 成功定义 |
|---|---|---|---|---|---|
| Primary | Browse Resources | `#resource-paths` | HERO | 无 | 买家到达资源路径选择区 |
| Resource | Read Guide / View Current Update | 合格 Resource Page ID | RESOURCE_PATHS / CURRENT_UPDATES | `source_page=RES-000` 可作分析上下文，不传候选状态 | 打开合格且 live 的资源页 |
| Supporting | Explore Products / Markets / Applications / Documents | 对应 owner Page ID/route key | PROCUREMENT_PATHS | 只传用户明确选择的类型 | 打开正确 owner 页面 |
| Secondary / Final | Request a Quote | CONV-RFQ route key | HERO / FINAL_ACTION | `source_page=RES-000`；其他字段仅来自用户明确选择 | 到达可修改的独立 RFQ；不等于报价批准 |

### 10.2 表单

RES-000 不内嵌表单。表单字段、验证、隐私、错误、成功和失败回退由 `CONV-RFQ` 独立任务卡负责。本页只定义：

- RFQ route/workflow 未批准或不可用时，CTA 和依赖行动文案原子省略。
- 不自动把候选资源、推断产品、推断市场或搜索词写入预填。
- 接收页必须让买家查看和修改所有预填值。
- 成功状态不得暗示报价、样品、文件、价格、库存、交期或合规已批准。

## 11. 内部链接合同

### 11.1 入站链接

| 来源 Page ID | 来源模块 | 锚文本方向 | 传递上下文 | 是否必须 |
|---|---|---|---|---|
| HOME-001 | Resources | Explore Resources / Procurement Guides | 泛资源入口 | 是；按 Home 批准实现 |
| GLOBAL_HEADER | Resources | Resources | 顶层导航 | 是 |
| RES-* | Breadcrumb / Back | Resources / All resources | 返回 Hub | 子页未来启动后必须 |
| PRODUCT-* | Evaluation / research path | Review procurement resources | 产品/工艺研究上下文 | 条件 |
| MARKET-* | Trade/resource path | Review current trade information | 目的市场上下文 | 仅合格 Trade Update 存在时 |
| APP-* / DOC-* / ABOUT-001 | Related resources | Review related resources | 应用/文件/origin 研究上下文 | 条件 |

### 11.2 出站链接

| 目标 Page ID | 页面关系 | 锚文本方向 | 所在模块 | 用户下一步 | 渲染条件 |
|---|---|---|---|---|---|
| RES-ORIGIN | Approved mapping resource | 由 Gate 2 批准标题决定 | RESOURCE_PATHS | 研究 alternative-origin | 独立 content/Claim/URL/route 全部通过 |
| RES-PROC | Candidate comparison | 不公开 | 不渲染 | 无 | `NEW_PAGE_CANDIDATE` 不满足 |
| RES-CHEMOURS | Candidate brand alternative | 不公开 | 不渲染 | 无 | `NEW_PAGE_CANDIDATE` 不满足 |
| RES-R706 | Candidate grade alternative | 不公开 | 不渲染 | 无 | `NEW_PAGE_CANDIDATE` 不满足 |
| RES-TRADE-EU | Planned trade owner | Gate 2/子页批准标题 | CURRENT_UPDATES | 查看 EU 当前官方信息 | content approved + official scope/date + CURRENT + route live |
| RES-TRADE-UK | Planned trade owner | Gate 2/子页批准标题 | CURRENT_UPDATES | 查看 UK 当前官方信息 | 同上 |
| RES-TRADE-IN | Planned trade owner | Gate 2/子页批准标题 | CURRENT_UPDATES | 查看 India 当前官方信息 | 同上 |
| RES-TRADE-BR | Planned trade owner | Gate 2/子页批准标题 | CURRENT_UPDATES | 查看 Brazil 当前官方信息 | 同上；葡语原文证据另审 |
| PRODUCT-000 / PRODUCT-PROC-* | Product/process owner | Explore Products / Process Details | PROCUREMENT_PATHS | 进入产品或工艺 owner | URL approved + content approved + route live |
| MARKET-000 / MARKET-* | Market owner | Explore Markets / {Market} Procurement | PROCUREMENT_PATHS | 进入商业市场页 | route live；不传政策结论 |
| APP-000 / APP-* | Application owner | Explore Applications | PROCUREMENT_PATHS | 按应用核对 | URL/content approved + route live |
| DOC-000 / DOC-* | Document owner | Review Documents | PROCUREMENT_PATHS | 核对文件类别 | URL/content approved + route live |
| ABOUT-001 | Fact owner | About TiO2 Malaysia | PROCUREMENT_PATHS | 核对平台/origin owner 内容 | content approved + route live |
| CONV-RFQ | Conversion owner | Request a Quote | HERO / FINAL_ACTION | 提交采购需求 | workflow approved + route live |

### 11.3 导航

| 项目 | 记录值 |
|---|---|
| Header 状态 | `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`；Resources 当前项；Home 必须为可见文字入口 |
| Breadcrumb | `Home > Resources` |
| Footer 入口 | 已登记/批准顶层栏目、Contact、verified 主体信息和条件 RFQ；不新增 Legal/Privacy 占位页 |
| 上一层 Hub | `NOT_APPLICABLE`；本页即 Resources Hub |
| 相关页面模块 | RESOURCE_PATHS、CURRENT_UPDATES、PROCUREMENT_PATHS |

## 12. 视觉与响应式合同

### 12.1 视觉方向

| 字段 | 记录值 |
|---|---|
| 继承的视觉标准 | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md`，采用首页 V0.3 的对比度修正 |
| 参考的已批准页面 | 首页 Industrial Editorial；Products/Markets 只作 Technical Editorial、route 和 Buyer Clean 颗粒度参考 |
| 页面信息密度 | 中等偏高；来源、日期、范围和路径优先，不以大空白制造长度 |
| 图片策略 | 来源文件、抽象材料、编辑式流程、中性工业应用；有授权、不证明公司能力 |
| 图表/比较策略 | 细线、编号、内容类型、来源和日期；不做品牌排名、国家优劣、KPI 或 SaaS dashboard |
| 信任证据呈现 | 依靠 source、scope、date、last reviewed 和事实/分析区分；不使用无证据认证 badge |
| 禁止视觉暗示 | 竞品 Logo 合作、等效章、巨大国旗、法槌/钱币关税图、虚构工厂/仓库/港口、库存、认证或贸易优势 |

### 12.2 Desktop 方向

- 1200–1320px 内容容器。
- Hero 可双栏，H1、职责和 Browse Resources 为第一焦点。
- RESOURCE_PATHS 使用三个编辑式内容族，不使用九张同尺寸文章卡。
- EVIDENCE_STANDARD 以可读的来源/日期/范围层级呈现，不做标签云。
- CURRENT_UPDATES 只有合格条目才出现，列表紧凑、不制造新闻门户感。

### 12.3 Tablet 方向

- 3 列可转 2+1 或单列。
- 长标题、来源机构、日期和 CTA 自然换行。
- 触控状态完整，不依赖 hover。

### 12.4 Mobile / 390px 方向

- Hero 单列；CTA 可全宽。
- 内容族和条目纵向排列，不横向滑动。
- 条目阅读顺序固定为 Type → Title → Scope/Date → Summary → CTA。
- Buyer Clean 可见文字原则上不低于 14px。
- 长品牌名、官方机构名、葡语名称和日期不截断。
- 390px `scrollWidth` 不超过视口。
- 按钮后无大段无目的空白。
- 条目或整个内容族省略后，上下 section 自然闭合；不留空卡、分隔线或内部状态。
- Mobile menu open 显示完整八项顺序，Home 为可见文字入口。

### 12.5 后续 Gate 必须交付画面

- [ ] Desktop 完整页面。
- [ ] Tablet 响应依据。
- [ ] 390px Mobile 完整页面或连续关键帧。
- [ ] Header、Footer、breadcrumb、Hero 和 CTA。
- [ ] Mobile menu open。
- [ ] Resource item hover 和 keyboard focus。
- [ ] Route-safe：候选全省略、Trade 全省略、仅合格静态 guide 的组合。
- [ ] Full eligible：多条 CURRENT Trade Update 的最大堆叠组合。
- [ ] Freshness removal：条目到期后卡片/摘要/Schema 原子省略。
- [ ] 内容族 0 条时整个模块省略。
- [ ] 无图片、长标题、长来源名、长日期和 200% 缩放。

这些是未来 Gate 3–5 的合同，不表示相应成果已创建或获批。

## 13. 开发交付合同

本节只定义未来交给 `D:\16Wordpress_nextjs` 的结果字段；本项目不实现、不测试、不修改代码。

### 13.1 WordPress 内容需求

| 字段 Key | 字段名称 | 类型 | 是否必填 | 来源 | 验证状态 | 空值行为 |
|---|---|---|---|---|---|---|
| page_identity | 页面身份 | object | 是 | 登记册/主表 | verified architecture | 缺失阻塞交付 |
| seo | Title/H1/Meta/Canonical/Robots/OG | object | 是 | 批准任务卡 | draft → approved | 未批准不得发布 |
| hero | Hero 内容和 CTA | object | 是 | Gate 2 | draft → approved | 缺失阻塞交付 |
| resource_families | 内容族 | collection | 条件 | Gate 2 | approved copy | 0 个合格条目时对应族不输出 |
| resource_items | Hub 条目 | relation collection | 条件 | 子页/route/Claim registry | per-item gate | 任一资格失败则整条不输出 |
| source_metadata | source/scope/date/review | object per item | Trade/事实条目必填 | Evidence Register | verified | 不完整则条目不输出 |
| freshness | status/review dates/trigger | object per item | 时间敏感条目必填 | Freshness audit | CURRENT only public | 非 CURRENT 不输出 |
| evidence_standard | 可见来源/日期说明 | rich text/list | 条件 | Gate 2 + operational approval | approved copy | 流程未落地则不渲染承诺 |
| procurement_paths | owner routes | route collection | 条件 | Route registry | route status | 未满足条件目标不输出 |
| buyer_questions | 可见答案 | collection | 条件 | Gate 2/Claim | approved copy | 空则模块不渲染 |
| final_action | RFQ 收口 | object | 条件 | Conversion contract | workflow/live | 不可用则整模块和依赖文案不输出 |
| claim_status | Claim/关系状态 | enum map | 是 | Claim Register | verified/pending/not_public | 只输出 verified |
| schema_inputs | CollectionPage/ItemList/Breadcrumb | object | 是 | 可见内容 | verified | 不生成隐藏/过期关系 |
| media | 图片、ALT、授权 | asset collection | 条件 | 资产登记 | rights verified | 无图使用批准空状态，不跨站回退 |

所有数据必须属于 `site_scope=tio2-my`。具体数据模型和实现方式由外部开发项目决定。

### 13.2 Next.js 呈现要求

| Module ID | 组件职责 | 输入字段 | 条件渲染 | 错误或空值状态 | 共享组件影响 |
|---|---|---|---|---|---|
| HERO | 页面身份和 CTA | hero、seo.h1、route state | 必填 | RFQ 可独立省略；Browse Resources 保持有效 | 使用全站 Header/Button；外部开发评估 |
| RESOURCE_PATHS | 按内容族导航 | approved families/items | 每族至少一条合格 item | 0 条整族省略；不得空卡/Coming soon | 新 Resources 列表职责；不得影响其他 scope |
| EVIDENCE_STANDARD | 来源/日期/范围说明 | approved copy/process state | operational process approved | 未获维护责任批准则不渲染承诺 | 普通内容组件 |
| CURRENT_UPDATES | 当前 Trade 列表 | approved/current items | 至少一条 CURRENT item | 0 条整模块不渲染；stale 原子移除 | 缓存不得继续提供过期项 |
| PROCUREMENT_PATHS | owner route | route keys/status | target approved + live | 全空则整模块不渲染 | route 解析不得跨 scope |
| BUYER_QUESTIONS | 可见答案块 | approved Q&A/claims | 至少一项 | 全空则不渲染 | 默认不输出 FAQ/QAPage |
| FINAL_ACTION | RFQ 行动 | approved CTA/prefill | workflow approved + live | false 时整模块不渲染；无自行 fallback | 独立 Conversion 页面 |

### 13.3 SEO/GEO 机器可读字段

| 字段 | Gate 0 记录值 |
|---|---|
| Title | `Titanium Dioxide Resources | TiO2 Malaysia`；方向，Gate 2 锁定 |
| Meta Description | Gate 2 根据 approved visible inventory 锁定；不得含子页主词堆砌或无证据主张 |
| Canonical | `https://tio2malaysia.com/resources/`；后续复核 |
| Robots | `index,follow` 方向；发布前复核 |
| Open Graph | 与可见 Hero/条目资格一致；图片有授权且不暗示事实 |
| Hreflang | `NOT_APPLICABLE` |
| Sitemap | 只含批准 Canonical；不含候选、过滤或 freshness 参数 |
| Breadcrumb Schema | Home → Resources |
| Page-specific Schema | CollectionPage + 条件 ItemList；ItemList 只含合格可见条目 |

### 13.4 非功能要求

- [ ] 页面不读取或渲染其他 site scope 的内容。
- [ ] 条目资格在公共输出前生效，候选/未批准/stale 值不进入 HTML、JSON、API、Meta、OG、ALT 或 Schema。
- [ ] 缓存失效和 freshness 撤回能够同步移除可见条目与机器可读关系；具体实现由开发项目决定。
- [ ] 无脚本时核心普通链接和可见来源/日期仍可用；无法降级时写明原因。
- [ ] 图片尺寸、格式、懒加载和首屏优先级由开发项目实现并验证。
- [ ] 页面无不可接受布局跳动、断链、失败请求或控制台错误。
- [ ] CTA 和预填遵循最少数据原则。
- [ ] 内部状态不作为 Buyer Clean 文案、徽章或 CSS 隐藏内容输出。

## 14. 可访问性合同

- [ ] 一个 H1，标题层级连续。
- [ ] Header、资源条目、内容族、accordion 和 CTA 可键盘操作。
- [ ] Focus 清晰，状态不只依赖颜色。
- [ ] 链接名脱离上下文可理解，不连续使用模糊 `Read more`。
- [ ] 来源、范围、日期和 Last reviewed 与对应条目程序化关联。
- [ ] 对比度采用首页 V0.3 修正；亮 Teal 不承载浅底小字或白字实心 CTA。
- [ ] 装饰图空 ALT；信息图、地图和文档图有文本等价。
- [ ] 动画尊重 reduced motion；不使用自动滚动新闻条。
- [ ] 触控目标和间距足够。
- [ ] 200% 缩放、390px、长标题、长官方机构名和葡语文本保持可用。

## 15. 验收清单

### 15.1 策略和状态

- [x] RES-000 Page ID、URL、Page Type、P2、Mapping 和 Verification 与登记册/主表一致。
- [x] 页面生命周期为 `APPROVED_FOR_HANDOFF`；Gate 6/7 已关闭，Gate 8 外部开发就绪已授权；子页、部署、发布和索引未获批。
- [x] Playbook 已升级为 `APPROVED_FOR_DESIGN / GATE_0_APPROVED_BASELINE`。
- [x] `RES-R001–RES-R009` 在 Playbook 与 Brief 中一一对应；RES-R001 与 RES-G0-01 已随用户 Gate 0 批准关闭。
- [x] 8 个子页没有启动或生成正式成果。
- [x] 3 个候选、4 个计划内容、1 个批准映射和 1 个计划 Hub 没有混用。

### 15.2 内容、证据和 freshness

- [x] 每个模块映射买家判断和 Evidence ID。
- [x] Claim Register 没有把架构/关键词证据扩展为公司或贸易事实。
- [x] Candidate 不进入 public links、summary、Meta 或 Schema。
- [x] Trade Update 的官方来源、日期、范围、review、CURRENT 和 route 门禁完整。
- [x] 竞品、等效、保证替代和贸易规避红线明确。
- [x] 无制造、origin、文件、库存、价格、交期或物流承诺。

### 15.3 SEO 与 GEO

- [x] `NO_PRIMARY_KEYWORD`、导航职责、H1/Title 方向一致。
- [x] 不侵占八个子页或其他栏目 owner 词。
- [x] CollectionPage/ItemList/Breadcrumb 方向与可见条件一致。
- [x] Buyer Questions 只提供导航/证据边界，不作政策或等效结论。
- [x] 时间敏感条目要求可见来源日期与 Last reviewed。

### 15.4 视觉和移动端

- [x] 继承 Industrial Editorial 和最新对比度规则。
- [x] 不使用新闻门户、SaaS、KPI、电商、竞品 Logo 合作或夸张贸易视觉。
- [x] Desktop、Tablet、390px、菜单、focus、route-safe、freshness removal、无图和长文本状态已定义为后续验收合同。
- [x] 390px 无横向溢出、按钮后空白和 ≥14px Buyer Clean 原则已定义。

### 15.5 转化和开发边界

- [x] Hub 不内嵌表单，不设置 Sample/Request Documents 为主 CTA。
- [x] RFQ 仅传明确上下文，成功不等于批准。
- [x] `site_scope=tio2-my` 和无跨站 fallback 为硬边界。
- [x] 本轮没有修改 `D:\16Wordpress_nextjs` 或编写任何开发/测试/部署代码。
- [x] 外部实现后只读 QA，问题交回开发项目。

- [x] 项目总控 Gate 0 定向复审 PASS。
- [x] 用户于 2026-08-30 最终批准 Gate 0，并随后授权 RES-000 执行至 Gate 5 草案；两次决定已分开记录。

## 16. 审核记录

### 16.1 问题记录

| Review ID | 级别 | 问题 | 影响 | 修正/控制 | 责任人 | 状态 | 验证证据 |
|---|---|---|---|---|---|---|---|
| RES-R001 | BLOCKING | 本 Playbook 和 RES-000 Brief 尚未获得总控与用户 Gate 0 批准 | 不得进入 Gate 1 | 总控定向复审 PASS；用户 2026-08-30 最终批准 Gate 0 | 总控/用户 | CLOSED | 2026-08-30 Gate 0 批准记录 |
| RES-R002 | IMPORTANT | RES-ORIGIN 虽映射已批准，但内容、Claim、route 和公开资格未审 | 不得作为 Hub live 条目 | Hub 不视为 live；未来独立 Gate 审核 | Resources owner | OPEN | CL-005 |
| RES-R003 | IMPORTANT | RES-PROC、RES-CHEMOURS、RES-R706 仍为候选 | 不得公开或进 Schema | 不进入公共链接、摘要、Schema 或 Meta | 总控/用户 | OPEN | CL-006 |
| RES-R004 | IMPORTANT | 四个 Trade Update 无本轮当前官方来源、适用范围和 freshness 审计 | 不得公开政策或链接 | 不显示链接、摘要或政策结论 | 合规/市场 owner | OPEN | CL-007 / E-FRESH-001 |
| RES-R005 | IMPORTANT | Resources 下游 owner route 可能 planned/provisional/live 未知 | CTA/链接可能不可用 | 只使用 Page ID/route key；满足条件后渲染 | 总控/开发项目 | OPEN | E-ROUTE-001 / CL-011 / CL-016 |
| RES-R006 | IMPORTANT | 竞品与牌号替代可能被搜索词中的 `equivalent` 误导 | 技术/品牌风险 | 关键词不作为等效事实；逐 Claim 技术审核 | 技术/总控 | OPEN | CL-009 |
| RES-R007 | IMPORTANT | 可见“来源/复核”承诺尚未对应实际维护责任 | 可能发布无法履行的流程承诺 | 运营责任、字段和审核流程获批后才渲染 | 总控/内容 owner | OPEN | CL-008 |
| RES-R008 | IMPORTANT | Visual Standard 与首页 V0.3 Teal 对比度规则不同 | 可能造成浅底小字或实心 CTA 对比度不足 | 使用首页较新批准的 `#007F77` 修正 | 视觉/总控 | CONTROLLED_IN_DRAFT | RES-C005 / E-BRAND-001 |
| RES-R009 | IMPORTANT | Footer 不得增加登记册外 Legal/Privacy 占位页 | 可能形成未批准 route | 只渲染登记/批准入口 | 总控 | CONTROLLED_IN_DRAFT | RES-C006 |
| RES-G0-01 | IMPORTANT | Playbook 与 Brief 曾复用 `RES-R007` 表示不同问题 | Review ID 无法可靠关闭或追溯 | ID 已唯一统一；总控定向复审 PASS；用户 2026-08-30 批准 Gate 0 | 页面执行任务/总控 | CLOSED | 两份文档问题表、Gate 0 验收和批准记录 |
| RES-G1-01 | BLOCKING | Gate 1 总控 PASS、用户未批准 | 不得冒充用户批准 | `RES-000-G15-PCR-01`；等待用户决定 | 总控/用户 | OPEN_USER_APPROVAL / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL | Gate 1 audit |
| RES-G1-REL-01 | IMPORTANT | PRODUCT V0.3 关系影响一致性 | 关系门禁 | 当前基线为 84=30/0/54、14 Process；Hub 行级渲染为 0；M-996/M-2196 comparison hold 保持；`RES-REL-V03-PCR-01` 已关闭 | 总控 | PROJECT_CONTROL_REVIEW_PASS / CLOSED | V0.3 impact audit |
| RES-G2-01 | BLOCKING | Gate 2 用户审批点 | 当前 V0.3 Content Architecture 与 V0.2 SEO/GEO/Schema 已批准 | `RES-HUB-FINAL-01`；2026-09-01 | 用户 | APPROVED / CLOSED | Gate 2 artifacts |
| RES-G3-01 | BLOCKING | Gate 3 用户审批点 | 当前 Wireframe V0.3 已批准 | `RES-HUB-FINAL-01`；2026-09-01 | 用户 | APPROVED / CLOSED | Gate 3 artifact |
| RES-G4-01 | BLOCKING | Gate 4 用户审批点 | 当前 Visual Direction V0.3 已批准 | `RES-HUB-FINAL-01`；2026-09-01 | 用户 | APPROVED / CLOSED | Gate 4 artifact |
| RES-G5-01 | BLOCKING | Gate 5 用户审批点 | Full Visual V0.5 与三张资产已批准 | `RES-HUB-FINAL-01`；2026-09-01 | 用户 | APPROVED / CLOSED | Gate 5 artifact |
| RES-G15-01 | BLOCKING | Buyer Clean 泄露内部治理语言 | 买家可读性/治理泄漏 | 修订已进入用户批准的 Gate 2–5 当前基线 | 页面执行/总控/用户 | APPROVED / CLOSED；2026-09-01 | targeted scan + visual |
| RES-G15-02 | IMPORTANT | 正式 visual-designs 目录混入临时 HTML | 正式交付边界 | planning HTML 保留在 `99_workspace`；正式目录边界已进入批准基线 | 页面执行/总控/用户 | APPROVED / CLOSED；2026-09-01 | directory audit |

### 16.2 Gate 记录

| Gate | 交付物 | 提交日期 | 总控结论 | 用户批准要求 | 批准日期 | 备注 |
|---|---|---|---|---|---|---|
| Gate 0 | RESOURCE_PLAYBOOK_V0.1 + 本 Brief V0.1 | 2026-08-29 | 项目总控定向复审 PASS | 用户最终批准 Gate 0；后续另行授权执行至 Gate 5 草案 | 2026-08-30 | `APPROVED`；Gate 0 基线不变；RES-R001/RES-G0-01 CLOSED |
| Gate 1 | Gate 1 audit + relationship impact audit | 2026-08-30 | `RES-000-G15-PCR-01` PASS | 需用户批准 | 未批准 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 2 | Content Architecture V0.3 + SEO/GEO/Schema V0.2 | 2026-08-31 | 总控 PASS | 用户最终批准 | 2026-09-01 | `APPROVED_GATE_2_BASELINE` |
| Gate 3 | Wireframe V0.3 | 2026-08-31 | 总控 PASS | 用户最终批准 | 2026-09-01 | `APPROVED_GATE_3_BASELINE` |
| Gate 4 | Visual Direction V0.3 | 2026-08-31 | 总控 PASS | 用户最终批准 | 2026-09-01 | `APPROVED_GATE_4_BASELINE` |
| Gate 5 | Full Visual V0.5 + 3 images | 2026-08-31 | 总控 PASS | 用户最终批准 | 2026-09-01 | `APPROVED_GATE_5_BASELINE`; `RES-HUB-FINAL-01=CLOSED` |
| Gate 6 | 总控审查包 | 2026-09-01 | 项目总控 PASS | 已关闭 | 2026-09-01 | `RES-000-G6-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`; `PROJECT_CONTROL_GATE_6_PASS` |
| Gate 7 | 开发交付规格包 | 2026-09-01 | 项目总控 PASS | 已关闭 | 2026-09-01 | `RES-000-G7-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`; lifecycle=`APPROVED_FOR_HANDOFF` |
| Gate 8 | 外部 WordPress/Next.js 开发 | 尚未记录外部接收 | 外部状态 | 用户已授权开发就绪 | 2026-09-01 | `USER_AUTHORIZED / READY_FOR_EXTERNAL_DEVELOPMENT`; `HANDED_OFF=NO` |
| Gate 9 | 只读视觉、SEO、GEO QA | 未开始 | 未审查 | 需可访问实现 | 未批准 | 本项目不直接修复 |
| Gate 10 | 发布授权 | 未授权 | 不适用 | 必须由用户单独授权 | 未授权 | 开发或 QA 完成不等于发布 |

## 17. 外部开发交付包

在未来交给 `D:\16Wordpress_nextjs` 前，必须具备：

- [x] 已批准 Resources Playbook Gate 0 基线。
- [x] 已批准 RES-000 Brief Gate 0 基线。
- [ ] 已批准 Gate 1 Evidence/Route/Freshness Audit。
- [x] 已批准 Gate 2 内容架构、SEO/GEO/Schema 和最终 Buyer Clean 文案。
- [x] 已批准 Desktop/390px 完整视觉稿及菜单状态稿；其他运行时状态按合同验收。
- [ ] 合格 Resource inventory、Page ID/route key 和公开资格数据源。
- [ ] 官方来源、日期、范围、Claim、freshness、撤回和责任人字段。
- [ ] 图片、图标、授权和 ALT。
- [ ] 内容字段、条件渲染、空状态、route-safe 和 freshness removal。
- [ ] CTA 与 RFQ 预填合同。
- [ ] SEO、GEO、Schema、Canonical、Robots 和 Sitemap 字段。
- [ ] 内链和 breadcrumb 矩阵。
- [ ] 冻结、不渲染和 Candidate 清单。
- [ ] 视口、键盘、focus、缩放、reduced motion 和只读 QA 清单。
- [ ] `site_scope=tio2-my` 及不得影响的其他站点边界。

本清单的 Gate 7 规格已通过总控，Gate 8 外部开发就绪已获用户授权，但 Gate 1 保持原状态，运行时实现尚未记录，部署、发布和索引均未批准。当前 inventory=0、route/public/freshness 未就绪决定条件模块不渲染，并在 Gate 8/9 构成实现与发布门禁。本清单不授权本策划任务开发。

## 18. 完成、只读验收与发布

本任务卡已于 2026-08-30 获用户批准 Gate 0，Gate 2–5 当前成果于 2026-09-01 获批，Gate 6 与 Gate 7 已通过并关闭；页面生命周期为 `APPROVED_FOR_HANDOFF`，但 `HANDED_OFF=NO`。当前唯一关系源为用户批准的 PRODUCT V0.3。Gate 8 已获外部开发就绪授权；本任务不执行开发，且不授权 Resource 子页、部署、发布或索引。

当前 RES-000 Gate 7 规格已通过总控并进入 `APPROVED_FOR_HANDOFF`。任何后续内容、视觉、SEO/GEO、Schema、freshness、响应式、无障碍或交付字段变更都必须重新走相应审查，不能借当前状态自动批准。

外部开发完成后，本项目只读检查。只有批准交付包与可访问结果一致时，才可进入 `READ_ONLY_QA_APPROVED`。开发完成、预览可访问、只读 QA 通过或自检 PASS 都不构成发布授权。

## 19. 变更记录

| 版本 | 日期 | 变更类型 | 变更内容 | 批准来源 |
|---|---|---|---|---|
| V0.1 | 2026-08-29 | Gate 0 初始草案 | 建立 RES-000 页面身份、九页状态、职责、防内耗、Evidence/Claim、freshness、模块、SEO/GEO/Schema、CTA、内链、视觉、390px、可访问性、site scope、外部交付和 Gate 合同 | `BRIEF_IN_REVIEW`；待总控和用户审查 |
| V0.1 / Gate 0 conditional-return revision | 2026-08-29 | RES-G0-01 定向修订 | 保留 RES-R001–R006；统一 RES-R007 为来源/复核维护责任、RES-R008 为 Teal 对比度、RES-R009 为 Footer；总控定向复审 PASS；未修改页面范围或后续 Gate | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；Gate 0 未批准 |
| V0.1 / Gate 0 approval | 2026-08-30 | Gate 批准与下一阶段授权 | 用户最终批准 Gate 0；关闭 RES-R001 与 RES-G0-01；Brief/Playbook 升级为 `APPROVED_FOR_DESIGN`；仅授权 RES-000 Gate 1 | 用户批准；事实、route、freshness、官方来源及其他未决门禁不变 |
| V0.1 / Gate 1–5 execution authorization | 2026-08-30 | PRODUCT V0.2.1 影响与设计执行范围 | 用户授权建立 Gate 1–5 草案并提交总控；页面生命周期为 `DESIGN_IN_REVIEW` | 各 Gate 未批准；事实、route、freshness、关系和子页门禁保持 |
| V0.1 / RES-000-G15-PCR-01 targeted revision | 2026-08-30 | Buyer Clean 内部治理语言和临时 HTML 目录修订 | RES-G15-01/02 已在草案中解决；仅重导出 Desktop/390px | `RESOLVED_IN_DRAFT_PENDING_REVIEW`；Gate 2–5 保持未批准 |
| V0.1 / RES-000-G15-PCR-01 targeted review PASS | 2026-08-30 | Gate 1–5 总控定向复审状态同步 | RES-G15-01/02 通过定向复审；Gate 1–5 均等待用户最终决定；事实与关系门禁不变 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；各 Gate 用户审批项保持 OPEN |
| V0.1 / PRODUCT V0.3 relationship-source sync | 2026-08-30 | 当前关系源与 M-2377 门禁同步 | 当前唯一关系源改为 PRODUCT V0.3；30/0/54、14 Process；M-2377 五个 Application 与 Sulfate 已批准、Specialty Materials 不公开、Rubber 仅证据登记；过时的 M-2377 TDS 活跃硬门禁不再保留；Hub 行级渲染仍为 0，M-996/M-2196 comparison hold 保持 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW`；Gate 1–5、页面生命周期、子页和开发边界不变 |
| V0.1 / Gate 2–5 user approval and Gate 6 start | 2026-09-01 | 当前成果批准与下一关提交 | `RES-HUB-FINAL-01=APPROVED / CLOSED`; Gate 2–5 当前成果锁定；创建 Gate 6 Manifest、delivery contract 和总控提交 | Gate 6=`SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`; Gate 7 未启动 |
| V0.1 / Gate 6 close and Gate 7 authorization | 2026-09-01 | 总控结论与交付规格准备 | `RES-000-G6-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`; 用户授权 Gate 7；创建并提交 `RES-000-G7-HANDOFF-01` | Gate 7=`SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`; Gate 8 未授权 |
| V0.1 / Gate 7 closure and Gate 8 readiness | 2026-09-01 | 总控关闭与用户开发指令 | `RES-000-G7-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`; 生命周期升级为 `APPROVED_FOR_HANDOFF`; Gate 8 就绪授权 | `HANDED_OFF=NO`; 未部署、未发布、未开放索引；sealed payload 不变 |
