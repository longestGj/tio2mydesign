# Applications Page Brief V0.1

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| 文档名称 | Applications Page Brief |
| Page ID | `APP-000` |
| Brief 版本 | V0.1 |
| 创建日期 | 2026-08-29 |
| 最后更新日期 | 2026-08-31 |
| 页面负责人 | Applications 页面执行任务 |
| 总控审核人 | 项目总控与质量审查 |
| 用户批准记录 | 2026-08-30：用户明确批准 APP-000 Gate 0 当前审批点 |
| 当前授权范围 | Gate 0 基线保持；项目总控于 2026-09-01 定向退回 V0.11 的 APP-only Chrome 变体；当前统一视觉审查包为 V0.12，唯一 Global Chrome authority 为 `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`；不授权 Gate 6/7、开发、发布或五个 Application 子页启动 |
| Gate 0 状态 | `APPROVED` |
| 页面生命周期 | `DESIGN_IN_REVIEW` |
| Mapping Status | `PLANNED_ARCHITECTURE` |
| Verification Status | `NO_DIRECT_KEYWORD_TARGET` |
| 本版变更摘要 | Gate 0 与既有 Gate 状态保持；V0.12 完整保护 V0.11 APP body，仅恢复 84/64px、Logo｜RFQ｜Menu、无可见 CURRENT、Production SVG 和批准 Footer；V0.11 `Quote`/Footer entity 提案关闭且未获批准；实际 DOM/ARIA/live route 仍是 release blocker |

本任务卡只覆盖视觉策划、SEO、GEO、内容架构、开发交付规格和外部实现后的只读质量验收。它不授权 WordPress、Next.js、CMS、组件、样式、测试、部署、DNS、索引、发布或任何代码修改。2026-08-30 用户先批准 Gate 0，随后另行授权 APP-000 产出 Gate 1–5 草案；该产出授权不构成任一 Gate 的审查批准。

## 1. 页面身份

| 字段 | 记录值 |
|---|---|
| Page ID | `APP-000` |
| Section | `APPLICATIONS` |
| Page Name | Applications |
| URL | `/applications/`；登记册与主表当前值，Mapping 仍为 `PLANNED_ARCHITECTURE`，不构成发布路由批准 |
| Page Type | Navigation hub |
| Playbook Key | `APPLICATION` |
| Market | `GLOBAL` |
| Language | `EN` |
| Priority | `P1` |
| Planned Domain | `https://tio2malaysia.com` |
| Site Scope | `tio2-my` |
| External Development Workspace | `D:\16Wordpress_nextjs`；仅由外部开发项目负责 |
| Canonical URL | `https://tio2malaysia.com/applications/`；Gate 0 方向，需后续路由与发布复核，不代表已批准发布 |
| Indexing Intent | `DECISION_REQUIRED`；Gate 0 建议方向为 `INDEX, FOLLOW`，发布前复核；本获批基线不改变索引状态 |

## 2. 权威输入

| 顺序 | 资料 | 路径或来源 | 本页用途 | 状态 |
|---:|---|---|---|---|
| 1 | 用户当前任务 | 2026-08-29 APP-000 委派 + 2026-08-30 统一 V0.2.1 设计指令 | 页面身份、Gate 0 基线、Gate 1–5 产出范围和停止点 | 当前最高页面指令；授权草案产出，不等于 Gate 批准 |
| 2 | 根项目治理 | `AGENTS.md`、`00_PROJECT_STATUS.md`、`01_PROJECT_INDEX.md`、`02_DIRECTORY_GUIDE.md` | 范围、Gate、目录、事实和外部开发边界 | 当前基线 |
| 3 | 页面登记册 | `docs/architecture/PAGE_REGISTRY_V0.1.md` | Page ID、URL、Page Type、Priority、Mapping、Verification 和六页体系 | 当前登记册 |
| 4 | 最新 PRD | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | 顶层架构、Applications 责任、产品与应用边界 | 当前已确认架构基线 |
| 5 | 页面—关键词主表 | `research/keyword/11_page_keyword_master.csv` | Primary、Secondary、Intent、Buyer Stage、Source Cluster、Excluded、Cannibalization | 当前实施主表 |
| 6 | Applications Playbook | `docs/page-playbooks/APPLICATION_PLAYBOOK_V0.1.md` | Applications 页面体系 Gate 0 规范 | `APPROVED_FOR_DESIGN`；2026-08-30 用户批准 Gate 0 |
| 7 | 页面任务卡模板 | `docs/page-briefs/PAGE_BRIEF_TEMPLATE.md` | 本任务卡字段与审核结构 | V0.2 当前模板 |
| 8 | 视觉标准 | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md` | 品牌视觉基线 | Approved Visual Direction |
| 9 | 已批准首页 | `pages/home/04_planning/04_homepage_full_visual_design_v0.3.md` 与 `05_homepage_full_visual_self_check_v0.3.md` | Industrial Editorial、色彩对比度、移动端和 Buyer Clean 规则 | 项目状态记录用户确认完成 |
| 10 | Products 治理参考 | `docs/page-playbooks/PRODUCT_PLAYBOOK_V0.1.md` 与 `PRODUCT-000` Brief | 产品—应用证据门禁、route key、M-2377 和推荐边界 | 已批准参考；不复制 Products 结构 |
| 11 | Markets 治理参考 | `docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md` 与 `MARKET-000` Brief | Navigation Hub、条件 route、Schema 和 390px 规则 | 已批准参考；不复制 Markets 结构 |
| 12 | 页面专属技术事实 | PRODUCT V0.3 当前全站共用关系基线 | 决定哪些 Grade–Application / Grade–Process 基础关系可作为中性输入，并独立治理 Grade ↔ Grade Comparison | `APPROVED_RELATION_BASELINE / USER_APPROVED`；不授权推荐、排名、保证或选择理由 |
| 13 | 14 型号统一关系矩阵 | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` 与三份 V0.3 审计 | Applications 产品关系的唯一当前输入；84 行、30 verified、0 conflict、54 no-public、14 verified Process | `APP-DEP-001=CLOSED`；V0.2.1 及更早版本只作历史追溯 |

### 2.1 输入冲突记录

| Conflict ID | 冲突内容 | 涉及资料 | 影响字段或模块 | 当前处理 | 决定人 | 决定日期 |
|---|---|---|---|---|---|---|
| `NO_CONFLICT_FOUND` | APP-000 的 Page ID、URL、类型、Primary、Priority、Mapping 和 Verification 在登记册、主表与用户当前指令中一致 | 当前权威输入 | 页面准入 | Gate 0 已批准；用户后续授权 APP-000 产出 Gate 1–5 草案，但不得升级 Mapping/Verification、启动子页或进入 Gate 6/7 | 2026-08-30 用户批准 Gate 0 并授权设计产出；各 Gate 待总控复核 | 2026-08-30 |

以下是状态限制，不是资料冲突：五个子页均为 `PROVISIONAL_URL`；PRODUCT V0.3 只授权 30 条中性 Grade-to-Review 映射与 14 个中性 Process classification，不授权推荐或适用保证；Rubber 只登记证据，不形成分类、页面、URL 或关键词；下游 Documents/Conversion route 仍为 planned 或 live 未知。

### 2.2 PRODUCT V0.3 当前关系覆盖层

`APP-000_PRODUCT_V0.3_RELATION_IMPACT_AUDIT_V0.1.md` 是 APP-000 对当前关系的增量控制记录。它只取代本 Brief 和 Gate 1–5 既有文档中关于“PRODUCT V0.2.1 为当前源、M-2377 全部隐藏、25/13 计数”的现行判断；历史审查与批准记录不回写。当前呈现计数为 Coatings 8、Plastics 8、Masterbatch 7、Printing Inks 4、Paper 2、Specialty Materials 1；Process 为 Chloride 8、Sulfate 5、Vapor-phase oxidation 1。M-2377 只作五个 Application 与 Sulfate 的中性关系，Specialty Materials 继续 `DO_NOT_RENDER`。M-996/M-2196 比较冻结保持 `OPEN`。

统一视觉合并后，`APP-000-PRODUCT-V03-REL-01=RETAINED_IN_V0.12`，Final RFQ copy delta、V0.10 Application-first 架构与 V0.11 body polish 继续生效。`APP-000_GLOBAL_CHROME_REALIGNMENT_DELTA_V0.1.md` 控制 V0.12；`GLOBAL_HEADER_FOOTER_APP_V11_CHANGE_IMPACT_V0.1.md` 已 `CLOSED_WITHOUT_APPROVAL`。当前完整视觉审查入口为 `APP-000-G5-V12-GLOBAL-CHROME-REALIGN-01=REVISION_SUBMITTED_FOR_PROJECT_CONTROL_REVIEW`。V0.11 及更早版本保留历史。实际 DOM/ARIA 与 live route 未完成，所以不得标记 Release Candidate 或 Gate 5 批准。

## 3. 页面策略

### 3.1 目标采购商

| 字段 | 记录值 |
|---|---|
| 主要买家角色 | 涂料、塑料、色母粒、油墨、造纸企业的采购、技术采购、配方/应用评估人员 |
| 次要买家角色 | 进口商、分销商、质量、文件与供应链协调人员 |
| 所在市场 | European Union、United Kingdom、India、Brazil 及全球英文采购入口 |
| 行业与应用 | Coatings、Plastics、Masterbatch、Printing Inks、Paper |
| 采购阶段 | Navigation → Technical Evaluation → Product Review / RFQ |
| 已知问题 | 知道使用场景但不知道该进入哪个页面；可能混淆 Plastics 与 Masterbatch；可能尚未知道具体型号 |
| 主要顾虑 | 进入错误应用页、看到无证据推荐、应用说明与产品详情重复、下一步不清楚 |
| 需要完成的判断 | 选择正确 Application owner 页面，并理解后续需要核对 Products、Documents、Markets 或 RFQ |
| 页面访问后的理想下一步 | 进入获批且 live 的 Application 子页；或进入 Products；或带明确 application 上下文进入 RFQ |

### 3.2 页面职责

| 项目 | 记录值 |
|---|---|
| 一句话页面职责 | 按 Coatings、Plastics、Masterbatch、Printing Inks、Paper 五个使用场景，把买家导向正确的 Application owner 页面，并说明后续技术评估路径，但不在 Hub 推荐具体型号 |
| 必须解决的核心问题 | 有哪些应用路径；每个子页解决什么问题；Plastics 与 Masterbatch 如何区分；没有明确应用或型号时去哪；如何继续产品、文件、市场或询价 |
| 对全站采购路径的贡献 | 连接 Home、五个 Application 子页、PRODUCT-000、MARKET-000、DOC-000 和 CONV-RFQ |
| 主转化目标 | 完成一次正确的应用路径选择 |
| 次转化目标 | 进入正确 owner 页面或带用户明确选择的 application 上下文进入 RFQ |
| 页面成功信号 | Application 路径点击、Products/Markets/Documents owner 路径点击、有效 RFQ 点击；不以型号推荐数量、虚构匹配或停留时长代替成功 |

### 3.3 明确不负责

| 排除事项 | 原因 | 正确承接 Page ID | 正确承接 URL/方式 |
|---|---|---|---|
| `titanium dioxide for coatings` 及完整 Coatings 正文 | APP-COAT 是唯一 owner | APP-COAT | Page ID/route key；当前 URL provisional |
| `titanium dioxide for plastics` 及完整 Plastics 正文 | APP-PLAS 是唯一 owner | APP-PLAS | Page ID/route key；当前 URL provisional |
| `titanium dioxide for masterbatch` 及完整 Masterbatch 正文 | APP-MB 是唯一 owner | APP-MB | Page ID/route key；当前 URL provisional |
| `titanium dioxide for printing inks` 及完整 Inks 正文 | APP-INK 是唯一 owner | APP-INK | Page ID/route key；当前 URL provisional |
| `titanium dioxide for paper` 及完整 Paper 正文 | APP-PAPER 是唯一 owner | APP-PAPER | Page ID/route key；当前 URL provisional |
| 泛产品、rutile、grade-selection | Products Hub 是 owner | PRODUCT-000 | `/products/`；公开 route 另审 |
| 精确型号事实、指标、TDS 和型号词 | Grade pages 是 owner | 对应 GRADE-* | `/products/{grade}/` |
| Chloride/Sulfate 工艺意图 | Process pages 是 owner | PRODUCT-PROC-CL / SU | 对应批准 route key |
| 国家 supplier 意图 | Market pages 是 owner | MARKET-* | 对应批准 Market URL |
| 文件、REACH、TDS/SDS/COA、COO 解释与申请 | Documents/Conversion 是 owner | DOC-* / CONV-DOC | Page ID/route key；证据与流程门禁 |
| Malaysia manufacturing、origin、traceability 证明 | About/Documents 是事实 owner | ABOUT-001 / DOC-COO | `/about/` 或批准 route key |
| Trade Update 和工艺比较研究 | Resources 是研究 owner | RES-* | 仅获批、fresh 且 live 后链接 |
| 报价、样品、文件申请表单 | Conversion pages 是行动 owner | CONV-RFQ / CONV-SAMPLE / CONV-DOC | APP-000 不内嵌表单 |
| Legal/Privacy 占位页 | 不在 54 页登记册，本轮无创建授权 | `NOT_IN_SCOPE` | 不创建、不渲染永久入口 |

## 4. SEO、GEO 与搜索意图合同

| 字段 | 记录值 |
|---|---|
| Primary Keyword | `NO_PRIMARY_KEYWORD` |
| Secondary Keywords | `coatings | plastics | masterbatch | printing inks | paper`；只作导航实体标签 |
| Search Intent | `N`；按应用导航 |
| Buyer Stage | Navigation |
| Source Cluster | `APP-01 | APP-02 | APP-03 | APP-04 | APP-05` |
| Page Role | `Route buyers from use case to application pages and suitable grades.`；Hub 只完成页面导航，具体 grade 关系需证据且本轮不公开 |
| Excluded Keywords | `all generic application primary keywords` |
| Cannibalization Boundary | `Hub does not own application primary terms; each child application page owns one use-case cluster.` |
| H1 | `Explore Titanium Dioxide by Application`；Gate 2 草案锁定，待总控审查 |
| Title | `Applications | TiO2 Malaysia`；Gate 2 草案锁定，待总控审查 |
| Meta Description 方向 | 按五个应用进入正确 owner 页面，并继续核对产品或询价；不得出现具体型号、性能或供应承诺 |
| Slug | `/applications/`；当前登记值，Mapping 仍为 planned |
| Canonical | `https://tio2malaysia.com/applications/`；方向值，后续 Gate 和发布前复核 |
| Hreflang | `NOT_APPLICABLE` |
| Robots | `DECISION_REQUIRED`；Gate 0 建议方向为 `INDEX, FOLLOW`，发布前复核 |

### 4.1 SEO 防内耗检查

- [x] APP-000 保持 `NO_PRIMARY_KEYWORD`，未强行创造商业主词。
- [x] 五个应用名称仅服务导航意图。
- [x] H1、Title 和 Hero 方向不把五个子页主关键词作为 Hub 获取目标。
- [x] 五个子页各拥有唯一泛应用主词。
- [x] Exact grade、process、country supplier、documents 和 conversion 意图已分开。
- [x] 五个 provisional URL 未写成最终 href、Canonical 或 Schema 关系。

### 4.2 GEO 合同

| 字段 | 记录值 |
|---|---|
| Primary Entity | TiO2 Malaysia Applications navigation hub |
| Related Entities | Coatings、Plastics、Masterbatch、Printing Inks、Paper application page entities；Products、Markets、Documents、Conversion owner pages |
| Buyer Questions | 应进入哪个 Application page；Plastics 与 Masterbatch 路径如何区分；Application page 是否保证型号适用；已知型号或不确定应用时去哪 |
| Answer-ready Blocks | `APPLICATION_SELECTOR`、`CHOICE_GUIDE`、`TECHNICAL_EVALUATION_BOUNDARY`、`BUYER_QUESTIONS` |
| Evidence and Attribution | 页面身份与关系来自 PRD/登记册/主表；具体技术关系必须来自批准技术证据，当前不在 Hub 公开 |
| Freshness Requirement | 登记册、主表、URL approval、route、产品—应用证据或 Schema 官方要求变化时复核 |
| Machine-readable Relationships | `CollectionPage` + `ItemList` + `BreadcrumbList`；仅使用可见、获批且 live 的关系 |
| GEO Exclusions | 型号推荐、性能、配方、制造、origin、文件、法规、库存、价格、MOQ、交期、物流、认证和贸易规避关系 |

- [x] Hub、五个应用实体与 owner 页面关系清楚。
- [x] 关键问题映射到计划中的可见答案模块。
- [x] GEO 不把关键词标签扩写成产品能力事实。
- [x] Schema 方向不包含 provisional 或不可见关系。
- [x] Buyer Questions 默认不使用 FAQPage/QAPage。

## 5. 本页必须回答的问题

| Question ID | 买家问题 | 采购判断 | 回答模块 ID | 所需证据 | 回答深度 |
|---|---|---|---|---|---|
| Q01 | Which application path should I choose? | 应进入五个 Application owner 中的哪一个 | APPLICATION_SELECTOR | 登记册、主表的页面职责 | 五个路径的导航级摘要，不写技术结论 |
| Q02 | What is the difference between the Plastics and Masterbatch paths? | 是评估塑料应用还是 TiO2 作为色母粒输入 | CHOICE_GUIDE | 首页批准的职责边界、主表 | 一段范围答案；不作性能比较 |
| Q03 | Does an application page guarantee that a grade will work in my formulation? | 是否把页面关系当成适用保证 | TECHNICAL_EVALUATION_BOUNDARY / BUYER_QUESTIONS | 事实门禁与技术评估规则 | 明确否；需核对当前技术资料和买家要求 |
| Q04 | Where should I go if I already know the grade? | 是否直接进入 Products/Grade page | PROCUREMENT_PATHS | 全站 owner 关系 | 路由级答案 |
| Q05 | Where should I start if I am not sure about the application? | 是否进入 Products 或 RFQ | BUYER_QUESTIONS / PROCUREMENT_PATHS | owner 关系和 Conversion 门禁 | 不猜应用；给条件路径 |
| Q06 | Where can I review technical or origin documents? | 是否进入 Documents owner | PROCUREMENT_PATHS | Documents 架构 | 路由级答案，不承诺可用性 |
| Q07 | How can I request a quotation with an application context? | 如何传递明确应用上下文 | FINAL_RFQ | Conversion 架构与预填合同 | 仅 workflow approved/live 后公开；提交不表示批准 |

## 6. 内容架构与模块顺序

### 6.1 页面叙事

| 项目 | 记录值 |
|---|---|
| 首屏承诺 | 按使用场景找到正确的 TiO2 Application owner 页面 |
| 主要证据链 | 批准的五应用页面关系 → 正确 owner 页面 → 技术证据核对 → 产品或独立 RFQ 路径 |
| 选择或比较逻辑 | 先按用途选择页面；只解释页面范围，不做国家、型号、工艺或性能优劣排名 |
| 风险与边界说明 | 页面分类和关键词关系不等于某型号已验证适用；具体关系需批准技术证据 |
| 最终行动理由 | 买家已选择应用路径，或明确需要进入 Products/Documents/Markets/RFQ owner |

### 6.2 模块清单

| 顺序 | Module ID | 模块名称 | 买家问题 | 模块目的 | 必须内容 | 独有内容 | Evidence ID | CTA | 手机端处理 |
|---:|---|---|---|---|---|---|---|---|---|
| 0 | GLOBAL_HEADER | Global Header | 如何访问主要栏目？ | 全站导航 | 固定八项顺序、Applications 当前项、Home 可见 | Home 文字入口不可由 Logo 代替 | IA-003 | Request a Quote 固定 Global CTA | Desktop 84px；Mobile 64px `Logo｜RFQ｜Menu`；menu open 末项固定 RFQ |
| 1 | BREADCRUMB | Breadcrumb | 当前处于什么层级？ | 建立层级 | Home > Applications | 与未来 Schema 一致 | IA-001 | 无 | 单行或自然换行，不截断 |
| 2 | HERO | Applications Hub Hero | 这是什么页面？如何开始？ | 建立导航任务 | H1、简介、主 CTA、条件 RFQ | 无主关键词的应用选择定位 | SEO-001 | Explore Applications / Request a Quote 条件 | 单列；CTA 可全宽；无大空白 |
| 3 | APPLICATION_SELECTOR | Choose by Application | 有哪些应用路径？ | 核心导航 | 五个应用实体、职责摘要、条件 route | 不显示型号推荐或 provisional URL | IA-002 / ROUTE-001 | Explore {Application} 条件 CTA | 五项纵向或可访问分组；无横滑 |
| 4 | CHOICE_GUIDE | Choose the Right Application Path | Plastics 与 Masterbatch 等路径怎样区分？ | 解释页面 owner | 五页各自解决的问题 | 只解释范围，不比较性能 | CONTENT-001 | 对应 live Application route | 简洁文本/步骤，不做复杂图表 |
| 5 | TECHNICAL_EVALUATION_BOUNDARY | Application Evaluation Boundary | 页面关系是否等于适用保证？ | 建立证据边界 | 技术资料、买家要求、无保证说明 | Hub 不输出产品推荐 | EVID-001 | Explore Products 条件 | 完整答案，不隐藏关键限制 |
| 6 | PROCUREMENT_PATHS | Continue Your Procurement Review | 还应核对产品、市场或文件吗？ | 连接 owner 页面 | Products、Markets、Documents | 清楚说明职责，目标条件渲染 | ROUTE-002 | Explore Products / Markets / Documents | 单列或紧凑入口；无空卡 |
| 7 | BUYER_QUESTIONS | Buyer Questions | 不确定应用或已知型号时去哪？ | 可引用 GEO 答案 | Q02、Q03、Q04、Q05 | 导航答案，不扩写技术事实 | EVID-001 / CONTENT-001 | 本地锚点或条件 route | 完整展开或可访问 accordion |
| 8 | FINAL_RFQ | Final RFQ | 如何提交带应用上下文的询价？ | 转化收口 | source/application 预填规则、无批准承诺 | 只传用户明确选择 | CONV-001 | Request a Quote 条件 | 单列；不内嵌表单；不可用则整模块省略 |
| 9 | GLOBAL_FOOTER | Footer | 如何返回栏目或联系？ | 导航收口 | 批准 Brand / Explore / Information / Procurement / fixed RFQ / Copyright | APP-000 不新增 operating entity、Contact fallback 或 Legal/Privacy 页面 | GOV-001 | Request a Quote 固定 Global CTA | 分组导航，无溢出 |

以上只是 Gate 0 模块职责方向，不是 Gate 2 最终内容架构、文案、线框或视觉稿。

### 6.3 页面独有内容

| Unique ID | 必须独有的内容 | 为什么不能模板替换 | 证据来源 | 验收方式 |
|---|---|---|---|---|
| U-001 | 五个 Application owner 页的选择逻辑 | APP-000 的核心导航职责 | 用户当前指令、PRD、登记册、主表 | 五个实体完整且不出现第六个新页面 |
| U-002 | Plastics 与 Masterbatch 的页面职责区分 | 防止将 TiO2 input 与 finished masterbatch 混淆 | 首页批准内容架构、主表 | 买家可理解范围，未写性能结论 |
| U-003 | Application page 不等于 grade suitability guarantee 的答案 | 防止分类关系变成技术承诺 | 事实门禁、Products 批准规则 | 完整中性 Grade-to-Review 列表可见，但无推荐、排名或保证 |
| U-004 | 五个 provisional URL 的条件省略 | 防止暂定路由永久化 | 登记册、主表 | 未批准 route 不在链接、Schema、Sitemap 或菜单 |
| U-005 | Application → Products/Markets/Documents/RFQ 的 owner 路径 | Hub 不能只是卡片列表 | 全站架构 | 每个入口解释采购判断，不复制下游正文 |

### 6.4 Buyer Questions 候选

| FAQ ID | 问题 | 回答要点 | Evidence ID | 是否适合 FAQ Schema |
|---|---|---|---|---|
| BQ-01 | Which TiO2 application page should I use? | 按 Coatings、Plastics、Masterbatch、Printing Inks 或 Paper 选择；每页处理对应应用评估 | CONTENT-001 | 否；作为可见答案块 |
| BQ-02 | Is the Masterbatch page about a finished masterbatch product? | 否；该路径用于评估 TiO2 作为 masterbatch pigment input，不把 TiO2 描述为成品 masterbatch | CONTENT-001 | 否 |
| BQ-03 | Does an application page guarantee grade suitability? | 否；最终判断需要当前技术资料、配方/加工条件与买家要求 | EVID-001 | 否 |
| BQ-04 | What if I already know the grade or am unsure of the application? | 已知型号进入 Products/Grade；不确定时进入 Products 或条件 RFQ，不猜测推荐 | ROUTE-002 / CONV-001 | 否 |

上述只是 Gate 0 答案方向，不是 Gate 2 最终英文正文。

## 7. 产品、应用、市场与文件关系

### 7.1 产品推荐

“产品推荐”仍为 `NOT_APPLICABLE`：APP-000 不使用 Best、Recommended、Ideal、Equivalent，不给性能排名、适用保证或选择理由。PRODUCT V0.2.1 是唯一当前关系输入；Gate 2 草案已把 25 条 Application 与 13 个 Process 关系锁定为中性内容输入，最终公开仍需逐 Gate 审批与 route 条件。

| Product ID | 型号 | 推荐场景 | 推荐依据 | 禁止声明 | 链接 Page ID |
|---|---|---|---|---|---|
| `NO_PRODUCT_RECOMMENDATION` | `NOT_APPLICABLE` | APP-000 Navigation Hub | PRODUCT V0.2.1 只批准中性 mapping/classification，不授权“推荐” | 最佳、适合、等效、保证适用、具体性能或无证据型号关系 | PRODUCT-000 与获批 Grade Page 仅作条件 owner 路径 |

PRODUCT V0.2.1 内容架构输入：Coatings 7、Plastics 7、Masterbatch 6、Printing Inks 3、Paper 1、Specialty Materials 1，共 25 条中性关系；13 个已验证 Process 集合不变。Specialty Materials 只是一项 taxonomy/Selector mapping，不新增第六个 Application 页面。M-2377 的 4 条 conflict、2 条 no-public 与 Process conflict 全部隐藏，`R-M2377-TDS=OPEN_HARD_GATE`。M-996 与 M-2196 的 Coatings/Sulfate 基础关系保持 verified 且 `application_conflict=none`；差异、排序和选择理由只由独立 `comparison_hold` 冻结。

### 7.2 Application 入口矩阵

| Page ID | 公共名称 | Primary Keyword Owner | 当前 URL 状态 | APP-000 公共链接条件 |
|---|---|---|---|---|
| APP-COAT | Coatings | `titanium dioxide for coatings` | `PROVISIONAL_URL` | URL approved + content approved + route live |
| APP-PLAS | Plastics | `titanium dioxide for plastics` | `PROVISIONAL_URL` | 同上 |
| APP-MB | Masterbatch | `titanium dioxide for masterbatch` | `PROVISIONAL_URL` | 同上 |
| APP-INK | Printing Inks | `titanium dioxide for printing inks` | `PROVISIONAL_URL` | 同上 |
| APP-PAPER | Paper | `titanium dioxide for paper` | `PROVISIONAL_URL` | 同上 |

### 7.3 关系矩阵

| 关系类型 | 关联 Page ID | 为什么相关 | 本页如何呈现 | 对方页如何回链 |
|---|---|---|---|---|
| Home | HOME-001 | 首页把买家送入 Applications | 入站，不重复首页定位 | Home Applications 模块链接 APP-000 |
| Application | APP-COAT / PLAS / MB / INK / PAPER | APP-000 核心下游 owner | Application Selector；条件 route | 子页未来 breadcrumb/back-to-applications |
| Product | PRODUCT-000 | 已知型号或需要产品集合时进入 | Procurement Path；不显示推荐 | Product Hub 轻量回 Applications |
| Market | MARKET-000 | 目的市场采购上下文 | 条件 Procurement Path | Markets 根据证据回链应用 owner |
| Document | DOC-000 / CONV-DOC | 文件信息和受控申请 owner | 条件 Procurement Path | Documents 可要求 application context |
| Resource | RES-000 / RES-* | 研究和比较 owner | 本版无必需链接；仅获批/live 后 | Resource 回对应 Application/Products |
| About | ABOUT-001 | manufacturing/origin/traceability 事实 owner | APP-000 不承担证明；必要时 Footer/全站路径 | About 可回 Applications 导航 |
| Conversion | CONV-RFQ | 独立报价 owner | Hero/Final 条件 CTA | Back navigation 保留 source/application |

## 8. 事实与证据登记

### 8.1 Evidence Register

每个 Evidence ID 唯一映射一个 Claim ID，仅用于内部审计，不出现在 Buyer Clean。

| Evidence ID | 证据定义 | 权威来源 | 资料日期 | 适用范围 | 验证状态 | 对应 Claim ID |
|---|---|---|---|---|---|---|
| IA-001 | APP-000 页面身份、`/applications/` 登记值和 Home > Applications 层级 | 登记册、主表 | 2026-08-29 | 页面身份/Breadcrumb | `verified_architecture`；Mapping 仍 planned | CL-001 |
| IA-002 | 五个 Application Page ID、名称、主词 owner 和 provisional URL 状态 | 登记册、主表 | 2026-08-29 | APPLICATION_SELECTOR | `verified_architecture_with_provisional_routes` | CL-002 |
| IA-003 | 固定八项 Header、Applications 当前项和 Home 可见文字入口 | 根 AGENTS.md、批准首页 V0.3 | 2026-08-29 | GLOBAL_HEADER | `verified_architecture` | CL-004 |
| SEO-001 | APP-000 `NO_PRIMARY_KEYWORD`、Navigation intent 和 metadata 方向 | 主表、本 Gate 0 获批基线 | 2026-08-30 | HERO/SEO | 页面身份 verified；最终 copy 待 Gate 2 | CL-003 |
| ROUTE-001 | 五个子页分别需要 URL/content/route approval | 登记册、主表、根治理 | 2026-08-29 | Application links/ItemList | `route_status_required` | CL-005 |
| CONTENT-001 | 五个页面 owner 范围及 Plastics/Masterbatch 区分方向 | 主表、批准首页内容架构 | 2026-08-29 | CHOICE_GUIDE/Buyer Questions | `design_direction_for_review` | CL-006 |
| EVID-001 | PRODUCT V0.2.1 是 Applications 唯一当前产品关系输入；25 条仅作中性 Grade-to-Review，13 个 Process 仅作中性分类 | 用户当前指令、PRODUCT V0.2.1 CSV、两份审计与 Changelog | 2026-08-30 | 技术边界/未来内容架构输入 | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` | CL-007 |
| ROUTE-002 | Products、Markets、Documents 为对应 owner 路径 | PRD、登记册、主表 | 2026-08-29 | PROCUREMENT_PATHS | `route_status_required` | CL-008 |
| CONV-001 | RFQ 为独立 owner，预填只传用户明确选择 | 根治理、Conversion 架构 | 2026-08-29 | HERO/FINAL_RFQ | `workflow_and_route_required` | CL-009 |
| VIS-001 | Industrial Editorial、对比度与 390px Buyer Clean 基线 | Visual Standard、首页 V0.3 | 2026-08-29 | 视觉/响应式合同 | `approved_brand_reference`；非公共事实 | CL-010 |
| SCOPE-001 | 数据限定 `site_scope=tio2-my` 且无跨站 fallback | 根 AGENTS.md、用户当前指令 | 2026-08-29 | 开发交付边界 | `verified_governance` | CL-011 |
| GOV-001 | Footer 只使用登记/批准入口，不新增 Legal/Privacy 占位页 | 根 AGENTS.md、54 页登记册、用户当前指令 | 2026-08-29 | GLOBAL_FOOTER | `verified_governance` | CL-012 |

### 8.2 Claim Register

| Claim ID | 计划公开的事实或声明 | 类型 | 来源 | 资料日期 | 适用范围 | 验证状态 | 渲染决定 | 审核人 |
|---|---|---|---|---|---|---|---|---|
| CL-001 | APP-000 是 Applications Navigation Hub，当前登记 URL 为 `/applications/`，层级为 Home > Applications | IA / SEO | 登记册、主表 | 2026-08-29 | 页面身份/Breadcrumb | verified architecture；Mapping planned | `RENDER_WITH_QUALIFIER`；仅表示页面身份，不表示已发布 | Gate 0 已批准；Gate 1 待总控审查 |
| CL-002 | Applications 体系包含 Coatings、Plastics、Masterbatch、Printing Inks、Paper 五个子页 owner，URL 均 provisional | IA / SEO | 登记册、主表 | 2026-08-29 | Selector/内部关系 | verified architecture / provisional route | 名称可在后续批准内容中 `RENDER`；当前 links `DO_NOT_RENDER` | Gate 0 已批准；Gate 1 待总控审查 |
| CL-003 | APP-000 无独立主关键词，Title/H1 采用导航方向 | SEO | 主表、本草案 | 2026-08-29 | HERO/Metadata | identity verified；copy 未批准 | `DO_NOT_RENDER` | 总控/用户 |
| CL-004 | Header 使用固定八项顺序，Applications 当前，Home 为可见第一项 | IA | 根 AGENTS.md、首页 V0.3 | 2026-08-29 | GLOBAL_HEADER | verified architecture | `RENDER`；后续实现仍需 route 可用性核验 | 总控 |
| CL-005 | 五个 Application 子页可以作为 APP-000 公开链接 | IA / ROUTE | 当前 route approval/live 未提供 | 未提供 | Selector/ItemList | URL/content/route approval required | `DO_NOT_RENDER` | 总控/外部开发项目复核 |
| CL-006 | 五个入口的职责摘要和 Plastics/Masterbatch 区分文案 | CONTENT / GEO | 主表、首页批准架构 | 2026-08-29 | CHOICE_GUIDE | Gate 0/2 copy approval required | `DO_NOT_RENDER` | 总控/用户 |
| CL-007 | 某 grade 与某 Application/Process 的基础中性关系 | TECHNICAL / PRODUCT | PRODUCT V0.2.1 `APPROVED_RELATION_BASELINE` | 2026-08-30 | Gate 2–5 内容与视觉输入 | 25 条 Application 与 13 个 Process `VERIFIED_FOR_PUBLIC_MAPPING` | `RENDER_WITH_QUALIFIER`；仅限 Grade to Review/中性 classification；route 仍独立门禁 | 总控/用户 |
| CL-008 | Products、Markets、Documents 可作为公开下游链接 | IA / ROUTE | PRD、登记册、主表 | 2026-08-29 | PROCUREMENT_PATHS | route status required | `DO_NOT_RENDER` | 总控/外部开发项目复核 |
| CL-009 | RFQ CTA 和 application 预填可以公开 | CONVERSION | Conversion 架构 | 2026-08-29 | HERO/FINAL_RFQ | workflow/route required | `DO_NOT_RENDER` | Conversion owner/总控 |
| CL-010 | 页面使用 Industrial Editorial、深 Teal 文本 CTA 和 390px 规则 | VISUAL | Visual Standard、首页 V0.3 | 2026-08-29 | Gate 3–5 合同 | internal design contract | `DO_NOT_RENDER` | 总控/用户 |
| CL-011 | APP-000 数据和媒体只来自 `site_scope=tio2-my`，无跨站 fallback | GOVERNANCE | 根 AGENTS.md、用户当前指令 | 2026-08-29 | 开发交付/QA | verified governance | `DO_NOT_RENDER`；作为交付门禁 | 总控 |
| CL-012 | Footer 只使用登记/批准入口，不新增 Legal/Privacy 占位页 | IA / GOVERNANCE | 根 AGENTS.md、登记册、用户当前指令 | 2026-08-29 | GLOBAL_FOOTER | verified governance | 未登记入口 `DO_NOT_RENDER` | 总控 |

### 8.3 Claim 一致性规则

- 模块表中的每个 Evidence ID 都在 8.1 唯一定义并映射到 8.2 的单一 Claim ID。
- `CL-002` 允许以后公开五个应用名称，不自动允许链接、关键词正文或技术主张。
- `CL-005` 独立控制 link/Schema/ItemList，避免把页面存在误写成 route live。
- `CL-007` 控制所有具体产品—应用/工艺基础关系；只读取 PRODUCT V0.2.1，不维护 V0.2、M-350 或其他并行当前关系表。25 条只允许中性 `Grade to Review`，13 个 Process 只允许中性 classification；55 条 `NO_PUBLIC_MAPPING` 不得改写成不适用或不推荐。
- Gate 0 文档中的 `RENDER` 表示证据资格方向，不是页面发布授权；未通过后续内容、视觉、交付和发布 Gate 时不得实现。

### 8.4 事实类别检查

- [x] 页面身份、五应用实体和关键词 owner 已从登记册/主表核对。
- [x] 五个 provisional URL 没有被写成最终公开 route。
- [x] APP-000 不承担具体型号推荐。
- [x] M-2377 与 M-996/M-2196 冻结边界已登记。
- [x] 14 型号 PRODUCT V0.2.1 是当前全站中性关系基线；推荐、排名、保证和选择理由仍禁止。
- [ ] manufacturing、origin、traceability 和文件可用性未在本页证实；不渲染。
- [ ] 库存、价格、MOQ、交期、物流、样品和 RFQ workflow 未在本页证实；不承诺。
- [x] 竞品、SERP、旧站和图片不能证明本公司能力。

### 8.5 不渲染字段

| 字段或模块 | 冻结原因 | Verification Status | 解冻所需证据 | 不阻塞的工作 |
|---|---|---|---|---|
| 五个 Application public href / Canonical / ItemList URL | `PROVISIONAL_URL`，route 未验证 | URL/ROUTE APPROVAL REQUIRED | 用户批准 URL、内容和 live route | Gate 0 页面关系、模块职责和省略状态 |
| application-to-grade neutral mappings | PRODUCT V0.2.1 为当前批准基线，公开强度仅限中性关系 | APPROVED RELATION BASELINE / GATE 2–5 REVIEW PENDING | Gate 2–5 独立批准模块、位置、文案和 route-safe 行为 | 已形成 25 条关系的内容与视觉草案；不等于公开批准 |
| M-2377 process/application/recommendation | 最新批准 TDS 与专项技术审查缺失 | `R-M2377-TDS=OPEN_HARD_GATE` | 最新批准 M-2377 TDS，随后完成独立 Application / Process 技术审查 | 4 conflict + 2 no-public 与 Process conflict 全部不显示；只阻塞 M-2377 |
| M-996 vs M-2196 differences | 基础 mapping verified，但比较证据不足 | `comparison_hold=M996_VS_M2196_DIFFERENTIATION_FROZEN` | 独立技术比较批准 | `application_conflict=none`；不显示差异、排序或选择理由，不阻塞基础关系 |
| origin/manufacturing/traceability claims | APP-000 无事实 owner 证据 | FACT_EVIDENCE_REQUIRED | 批准一方证据和公开措辞 | About/Documents 条件路径 |
| document availability | 型号、市场和版本范围未核实 | FACT_EVIDENCE_REQUIRED | 当前文件目录和合规批准 | Documents owner 路径 |
| price/stock/MOQ/lead time/packaging/shipping/sample | 无运营批准资料 | EVIDENCE_REQUIRED | 销售/运营/物流批准 | RFQ 条件入口 |

## 9. CTA 与转化合同

### 9.1 CTA 层级

| 层级 | CTA 文案方向 | 目标 URL | 触发位置 | 预填参数 | 成功定义 |
|---|---|---|---|---|---|
| Primary | Explore Applications | `#application-selector` | Hero | 无 | 到达并可理解五个应用路径 |
| Secondary | Request a Quote | route key `CONV-RFQ` | Hero | `source_page=APP-000`；未选择应用时不传 application | workflow/route live 后到达独立 RFQ |
| Application | Explore Coatings / Plastics / Masterbatch / Printing Inks / Paper | 对应 APP-* Page ID | Application Selector / Choice Guide | `source_page=APP-000`；用户点击后传明确 application | URL/content/route 均获批后到达正确子页 |
| Supporting | Explore Products | PRODUCT-000 | Technical Boundary / Procurement Paths | `source_page=APP-000` | route live 后进入产品集合 |
| Supporting | Explore Markets / Review Documents | MARKET-000 / DOC-000 | Procurement Paths | source 可选 | 目标满足公开条件后到达 owner 页面 |
| Final | Request a Quote | route key `CONV-RFQ` | Final RFQ | `source_page=APP-000`；仅用户明确选择后附加 application | 可提交请求；提交不表示报价、适用性、样品或文件获批 |

### 9.2 本页表单字段

`NOT_APPLICABLE`。APP-000 不内嵌 RFQ、Sample 或 Documents 表单。接收页面的字段、验证、隐私、错误、提交中、成功和失败状态由对应 Conversion 任务卡定义。

### 9.3 接收流程状态要求

- [x] 未选择应用时不预填 application。
- [x] 只有用户明确点击或确认时才传 application。
- [x] application 预填在接收页可见、可修改。
- [x] 不传 selected grade；APP-000 没有 grade recommendation。
- [x] 成功状态不得暗示报价、适用性、文件或样品已经批准。
- [x] 服务失败只能使用已验证的替代联系路径。
- [x] 隐私和最少收集由 Conversion 页面负责。

## 10. 内部链接合同

### 10.1 入站链接

| 来源 Page ID | 来源模块 | 锚文本方向 | 传递的上下文 | 是否必须 |
|---|---|---|---|---|
| HOME-001 | Applications | Explore Applications | 泛应用入口 | 是 |
| GLOBAL HEADER | Applications | Applications | 顶层导航 | 是 |
| APP-* | Breadcrumb / Back | Applications / All applications | 返回 Hub | 未来条件；子页未启动 |
| PRODUCT-000 / GRADE-* | Application context | Explore application guidance | 产品/型号上下文；需证据关系 | 条件 |
| MARKET-* | Applications | Review application paths | 市场上下文；不自动推荐型号 | 条件 |
| DOC-* | Application context | Choose an application | 文件适用范围上下文 | 条件 |

### 10.2 出站链接

| 目标 Page ID | 页面关系 | 锚文本方向 | 所在模块 | 用户下一步 | 渲染条件 |
|---|---|---|---|---|---|
| APP-COAT | Application child | Coatings | APPLICATION_SELECTOR / CHOICE_GUIDE | 进入 Coatings owner | URL + content approved + route live |
| APP-PLAS | Application child | Plastics | 同上 | 进入 Plastics owner | 同上 |
| APP-MB | Application child | Masterbatch | 同上 | 进入 Masterbatch owner | 同上 |
| APP-INK | Application child | Printing Inks | 同上 | 进入 Inks owner | 同上 |
| APP-PAPER | Application child | Paper | 同上 | 进入 Paper owner | 同上 |
| PRODUCT-000 | Product owner | Explore Products | TECHNICAL_EVALUATION_BOUNDARY / PROCUREMENT_PATHS | 进入产品集合 | route live |
| MARKET-000 | Market owner | Explore Markets | PROCUREMENT_PATHS | 选择目的市场 | route live |
| DOC-000 | Document owner | Review Documents | PROCUREMENT_PATHS | 核对文件类别 | URL/content approved + route live |
| CONV-RFQ | Conversion owner | Request a Quote | HERO / FINAL_RFQ | 提交采购需求 | workflow approved + route live |

### 10.3 导航

| 项目 | 记录值 |
|---|---|
| Header 状态 | 严格消费 Global Chrome V0.5：Desktop 84px；Applications Bold + 3px Teal underline；buyer-visible `CURRENT=0`；Mobile 64px `Logo｜RFQ｜Menu`；Home 为可见第一项 |
| Breadcrumb | `Home > Applications` |
| Footer 入口 | 严格消费批准 Deep Navy Brand / Explore / Information / Procurement / fixed RFQ / Copyright；APP-000 不新增 operating entity、Contact fallback、Legal/Privacy 或页面内锚点 |
| 上一层 Hub | `NOT_APPLICABLE`；本页即 Applications Hub |
| 相关页面模块 | APPLICATION_SELECTOR、PROCUREMENT_PATHS、TECHNICAL_EVALUATION_BOUNDARY |

## 11. 视觉与响应式合同

### 11.1 视觉方向

| 字段 | 记录值 |
|---|---|
| 继承的视觉标准 | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md`，并采用首页 V0.3 的 `#007F77` 对比度修正 |
| 参考的已批准页面 | 首页 Industrial Editorial 基底；Products/Markets 仅作 Technical Editorial、route 和状态治理参考 |
| 页面信息密度 | 中等；应用选择和 owner 说明优先，不以大空白制造长度 |
| 图片策略 | 中性应用材料或加工场景；需来源、授权和准确 ALT；不作为本公司产品适用或客户案例证明 |
| 图表或比较策略 | 编辑式关系、细线、编号和文本说明；不做参数比较、推荐评分、KPI 或 dashboard |
| 信任证据呈现 | 主要依靠清楚页面职责和证据边界；事实 badge 只有 verified 且获批才出现 |
| 禁止使用的视觉暗示 | 推荐/最佳徽章、价格卡、库存、认证、工厂、实验室、客户案例、性能保证、巨大国旗、旅游视觉、玻璃拟态 |

### 11.2 Desktop 方向

- 1200–1320px 内容容器。
- Hero 可双栏；H1、应用选择任务和 CTA 为第一视觉焦点。
- 五应用避免五张同质大卡；可使用 2+3 编辑式分组或主清单与职责摘要。
- 不出现型号推荐区、参数表或应用评分。
- Procurement Paths 为轻量 owner 入口，不做企业门户看板。

### 11.3 Tablet 方向

- 应用入口按真实内容长度转为两列或单列。
- 不依赖 hover，不使用核心横向 carousel。
- 长标题、说明和按钮自然换行，不截断。

### 11.4 Mobile 390px 方向

- Header 严格消费 V0.5：Mobile 为 `Logo｜RFQ｜Menu` 且 RFQ 固定；menu open 后按固定八项顺序显示，Home 第一、Request a Quote 最后。
- Hero 单列；CTA 可全宽；按钮后无大段无目的空白。
- 五应用按 Coatings → Plastics → Masterbatch → Printing Inks → Paper 纵向排列或可访问分组。
- 不使用横向滑动作为唯一访问方式。
- 390px 无横向溢出；买家可见文字原则上不低于 14px。
- route 不可用时整个 CTA surface 自然省略，不留空卡或内部状态。
- 无图片状态不改变信息层级。
- 触控目标与间距足够；固定 CTA 如使用不得遮挡正文或系统 UI。

### 11.5 未来 Gate 必须交付画面

- [ ] Desktop 完整页面。
- [ ] Tablet 响应说明。
- [ ] 390px Mobile 完整页面或连续关键帧。
- [ ] Header、Footer、breadcrumb、Hero 和 CTA。
- [ ] Mobile menu open。
- [ ] Application 入口 hover、keyboard focus 和 current state。
- [ ] 子页 route 全可用、部分可用、全部不可用的自然降级。
- [ ] RFQ available/unavailable。
- [ ] 无图片。
- [ ] 长标题、长说明、200% 缩放和 reduced motion。

本轮不得制作上述线框或视觉画面。

### 11.6 响应式检查

| 检查项 | Desktop | Tablet | Mobile 390px | 通过标准 |
|---|---|---|---|---|
| Hero 信息和 CTA | 双栏可用 | 视宽度转单栏 | 单栏、CTA 可全宽 | 导航任务与行动不被视觉压制 |
| Header | 完整八项 + 固定 RFQ | 可转折叠菜单 | `Logo｜RFQ｜Menu` + menu open fixed RFQ | Home 可见、顺序正确、buyer-visible CURRENT=0 |
| 五应用入口 | 编辑式分组 | 两列/单列 | 纵向或可访问分组 | 不横滑、不依赖 hover |
| 长文字 | 宽容器可读 | 自然换行 | ≥14px 原则、不截断 | 无拥挤或超长行 |
| CTA 省略 | 自然闭合 | 自然闭合 | 无空卡/空白 | 不显示内部 route 状态 |
| 按钮后空白 | 受控 | 受控 | 无大段无目的空白 | 下一模块自然进入 |
| 横向溢出 | 无 | 无 | `scrollWidth` 不超过 390px | 无横向滚动 |
| 固定 CTA | 非必需 | 非必需 | 如使用不得遮挡正文/UI | 可关闭或不使用 |

## 12. 开发交付合同

本节只定义未来交给 WordPress/Next.js 外部开发项目的结果；本项目不实施，也未授权 Gate 7。

### 12.1 WordPress 内容需求

| 字段 Key | 字段名称 | 类型 | 是否必填 | 来源 | 验证状态 | 空值行为 |
|---|---|---|---|---|---|---|
| page_identity | 页面身份 | object | 是 | 登记册/主表 | verified architecture / mapping planned | 身份异常阻塞交付 |
| seo | SEO 方向 | object | 是 | 未来批准任务卡 | draft → approved | 未批准不得发布 |
| hero | Hero 内容与 CTA | object | 是 | Gate 2 草案 | draft → approved | 缺失阻塞交付 |
| application_entities | 五应用实体 | collection | 是 | 登记册/主表 | verified architecture | 数量或身份异常阻塞交付 |
| application_routes | 五子页 route keys | relation collection | 条件 | URL/content/route registry | provisional / per-route status | 不满足条件的链接不输出 |
| choice_guide | 页面职责说明 | rich text/list | 是 | Gate 2 草案 | approved copy | 空则模块不渲染 |
| technical_boundary | 技术评估与无保证说明 | rich text | 是 | Gate 2 草案 / evidence policy | approved copy | 缺失阻塞公开选择模块 |
| product_relations | Application-to-grade 关系 | relation collection | 否；APP-000 默认不使用 | 技术批准矩阵 | per-relation | V0.1 全部不输出 |
| procurement_paths | Products/Markets/Documents route keys | route collection | 条件 | route registry | per-route status | 全空则模块不渲染 |
| buyer_questions | 可见答案 | collection | 条件 | Gate 2 草案 | approved copy | 空则模块不渲染 |
| final_rfq | RFQ 收口 | object | 条件 | Conversion 合同 | workflow/route status | 不可用则整模块不输出 |
| claim_status | 模块/关系状态 | enum map | 是 | Claim Register | verified/pending/not_public | 只输出允许公开字段 |
| schema_inputs | CollectionPage/ItemList/Breadcrumb | object | 是 | 可见内容 | verified | 不生成不一致 Schema |
| media | 图片、ALT 与授权 | asset collection | 条件 | 资产登记 | rights verified | 无图片使用批准布局；不跨站回退 |

所有数据必须属于 `site_scope=tio2-my`。具体数据模型由外部开发项目决定。

### 12.2 Next.js 呈现要求

| Module ID | 组件职责 | 输入字段 | 条件渲染 | 错误或空值状态 | 共享组件影响 |
|---|---|---|---|---|---|
| HERO | 页面身份与 CTA | hero、seo.h1、RFQ route status | 必填 | RFQ 不可用时 CTA 与依赖行动句同步省略 | 使用全站 Header/Button；开发项目评估 |
| APPLICATION_SELECTOR | 五应用页面导航 | entities、route status | 必填实体；链接条件 | route 不可用不生成死链、空 CTA 或 internal badge | 新导航职责；实现方式由开发决定 |
| CHOICE_GUIDE | 页面职责解释 | approved copy、visible relations | 内容存在 | 空则不渲染 | 普通内容组件 |
| TECHNICAL_EVALUATION_BOUNDARY | 无推荐/无保证边界 | approved copy | Selector 公开时必需 | 缺失阻塞该选择模块 | 普通内容组件 |
| PROCUREMENT_PATHS | 下游 owner 路由 | route keys | route live | 全空则模块不渲染 | route 解析不得跨 scope |
| BUYER_QUESTIONS | 可见答案块 | approved Q&A | 至少一项 | 全空则不渲染 | 默认不输出 FAQ/QAPage |
| FINAL_RFQ | RFQ 行动 | approved CTA、prefill | workflow approved + route live | 不可用则整模块省略；无自行 fallback | 使用独立 Conversion 页面 |

### 12.3 SEO 与 GEO 机器可读字段

| 字段 | 记录值 |
|---|---|
| Title | `Applications | TiO2 Malaysia`（Gate 2 草案；待总控审查） |
| Meta Description | `Review titanium dioxide application categories and neutral Grade to Review paths for coatings, plastics, masterbatch, printing inks, paper and specialty materials.`；待总控审查 |
| Canonical | `https://tio2malaysia.com/applications/`；后续 route 与发布前复核 |
| Robots | `DECISION_REQUIRED`；Gate 0 建议方向为 `INDEX, FOLLOW`，发布前复核 |
| Open Graph | 与可见 Hero 一致；图片有授权且不暗示产品适用 |
| Hreflang | `NOT_APPLICABLE` |
| Sitemap | 仅在页面最终获批并上线时包含唯一 canonical；不包含交互状态 |
| Breadcrumb Schema | Home → Applications |
| Page-specific Schema | CollectionPage + ItemList；只包含可见、URL 已批准且 live 的 Application links |

### 12.4 非功能要求

- [ ] 页面只读取 `site_scope=tio2-my` 内容、媒体、SEO、菜单、缓存、route 和表单上下文。
- [ ] 不从 TIOVAR、mytio2 或其他 scope 回退。
- [ ] provisional、pending 或 not_public 值不进入 HTML、JSON、API、Schema、Meta、OG 或 ALT。
- [ ] 五应用关系与可见内容/Schema 一致。
- [ ] 无脚本时核心文本和获批普通链接可用；不可用 route 不生成死链。
- [ ] 图片尺寸、格式、懒加载和首屏优先级由外部开发项目实现并验证。
- [ ] 页面无不可接受布局跳动、断链、失败请求或控制台错误。
- [ ] 预填遵循最少数据原则，且只来自用户明确选择。

## 13. 可访问性合同

- [ ] 一个 H1，标题层级连续。
- [ ] Header、应用入口、链接和 CTA 可键盘操作。
- [ ] Focus 清晰且与批准首页视觉一致。
- [ ] 当前、hover、focus 和不可用状态不只靠颜色。
- [ ] 文本和 CTA 对比度达到适用要求；亮 `#00A99D` 不承载浅底小字。
- [ ] 图片有真实 ALT；装饰图空 ALT。
- [ ] 应用关系图有文本等价表达。
- [ ] 链接/按钮脱离上下文仍可理解。
- [ ] 动画尊重 reduced motion。
- [ ] 触控目标和间距足够。
- [ ] 200% 缩放、390px、长标题和系统字体放大后仍可用。

## 14. 验收清单

### 14.1 策略与内容

- [x] 页面职责和目标买家清楚。
- [x] 五个应用 owner 与 APP-000 导航职责分离。
- [x] 页面不能只是五张同质卡片。
- [x] Plastics 与 Masterbatch 路径范围已定义，不混淆 finished masterbatch。
- [x] APP-000 不推荐具体型号。
- [x] 受限事实和 routes 正确冻结。
- [x] 没有复制 mytio2.com 正文。

### 14.2 SEO 与 GEO

- [x] `NO_PRIMARY_KEYWORD`、URL、Search Intent、Buyer Stage 和职责与主表一致。
- [x] 不侵占五个子页、Grade、Process、Market、Document 或 Conversion 主词。
- [x] Canonical、Robots 和 Schema 只记录方向，不造成状态升级。
- [x] CollectionPage、ItemList、Breadcrumb 方向与可见内容门禁一致。
- [x] Buyer Questions 有完整答案方向和证据边界。

### 14.3 视觉与移动端

- [x] 延续批准首页 Industrial Editorial 与对比度规则。
- [x] Desktop、Tablet、390px Mobile 方向完整。
- [x] menu、focus、route 省略、无图片和长文本状态已列为未来必交。
- [x] 390px 无横向溢出或按钮后大空白是硬标准。
- [x] 无推荐徽章、价格、库存、工厂或客户案例暗示。

### 14.4 转化

- [x] Hero 先应用选择、后条件 RFQ。
- [x] Hub 不内嵌表单。
- [x] application 只来自用户明确选择，绝不传 selected grade。
- [x] 成功、失败、隐私和最少收集由 Conversion 页面负责。

### 14.5 开发交付与只读验收

- [x] 未来交付明确 `site_scope=tio2-my` 和无跨站 fallback。
- [x] 字段、条件渲染、route key、Claim 状态和空值行为已定义为方向。
- [x] 本项目没有编写或修改开发代码。
- [x] 外部实现后本项目只读检查视觉、移动端、内容、元数据、链接、Schema、SEO 和 GEO。
- [x] 问题提交给开发项目，本项目不直接修代码。

## 15. 审核记录

### 15.1 问题记录

| Review ID | 级别 | 问题 | 影响 | 修正要求 | 责任人 | 状态 | 验证证据 |
|---|---|---|---|---|---|---|---|
| APP-R001 | BLOCKING | Applications Playbook 与本 Brief 的 Gate 0 总控复审及用户最终批准已完成 | Gate 0 基线已锁定；用户后续另行授权 APP-000 产出 Gate 1–5 草案 | 无；保留批准记录 | 用户 | CLOSED | Gate 0 与设计产出授权记录，2026-08-30 |
| APP-R002 | IMPORTANT | 五个子页 URL 均为 provisional | 不得生成永久 href、Canonical、Schema 或 sitemap 关系 | 后续独立 URL 批准和 route audit | 总控/用户 | OPEN | 登记册、主表 |
| APP-R003 | IMPORTANT | 产品—应用基础映射证据门禁 | PRODUCT V0.3 是当前中性全站关系基线 | 只允许 Grade to Review/中性 Process；推荐、排名和保证仍禁止 | 总控/用户 | CLOSED | PRODUCT V0.3 matrix 与三份 V0.3 审计 |
| APP-R004 | IMPORTANT | M-996/M-2196 比较、差异与选择理由未解冻 | 两型号个体 Coatings/Sulfate 事实可按各自附件引用；比较冻结由独立 `comparison_hold` 控制 | 等待独立比较证据与公开措辞批准 | 技术 owner | OPEN | PRODUCT V0.3 comparison fields |
| R-M2377-TDS | SUPERSEDED LEGACY GATE | PRODUCT V0.3 已拆分并解决 M-2377 Process、Application 与 Document Freshness 三项门禁 | 五个中性 Application 映射与 Sulfate 可进入当前关系影响视觉；Specialty Materials 仍不显示 | 不得恢复为活动硬门禁；继续遵守中性关系边界 | 技术 owner | RESOLVED / SUPERSEDED_BY_SPLIT_GATES | PRODUCT V0.3 unified audit |
| APP-R005 | IMPORTANT | Documents、RFQ 等下游 route 为 planned/provisional 或 live 未知 | 条件 CTA，不得死链 | Gate 1 审计草案确认门禁；后续逐 route live 验证 | 总控/外部开发项目 | OPEN | ROUTE-002 / CONV-001 |
| APP-R006 | IMPORTANT | Footer 不得增加登记册外的 Legal/Privacy 入口 | 防止创造新页面 | 只使用登记/批准入口 | 总控 | CONTROLLED_IN_APPROVED_BASELINE | GOV-001 / CL-012 |
| APP-DEP-001 | BLOCKING_DEPENDENCY | PRODUCT V0.3 已获用户批准并成为当前唯一关系基线 | 全站仅使用 V0.3 CSV 与三份 V0.3 审计；V0.2.1 及更早版本只作历史追溯 | 已满足；持续执行单一来源检查 | Products 任务/总控/用户 | CLOSED | PRODUCT V0.3 / APP-000 PRODUCT V0.3 impact audit |
| APP-000-PRODUCT-V03-REL-01 | IMPORTANT REVIEW | APP-000 按 PRODUCT V0.3 更新五个既有 Application 集合、Sulfate 与计数 | 关系证据与差量原样保留至 V0.12；原两张证明保留历史 | 不再单独审查，随当前 V0.12 完整包复审 | 项目总控 | RETAINED_IN_V0.12 | V0.3 impact audit、content delta 与历史两张 PNG |
| APP-000-G5-V06-UNIFIED-01 | BLOCKING VISUAL REVIEW | V0.5 fixed-RFQ 与 PRODUCT V0.3 关系影响此前分属两个视觉包 | 建立首个统一 Desktop/Mobile × Full-route/Route-safe 与 Global Chrome states 审查包 | V0.6 保留历史；当前审查改为 V0.7 | 项目总控/用户 | SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.7 | `APP-000_FULL_VISUAL_DESIGN_V0.6.md` 与五张 V0.6 PNG |
| APP-000-G5-V07-RFQ-COPY-01 | BLOCKING VISUAL REVIEW | 用户认为 Final RFQ 的独立 qualification 句不需要公开展示并明确要求移除 | 仅 Desktop/390px Full-route Final RFQ 文案及其内容驱动高度变化；copy delta 原样保留至 V0.8 | V0.7 保留历史；当前审查改为 V0.8 | 项目总控/用户 | SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.8 | `APP-000_FULL_VISUAL_DESIGN_V0.7.md` 与五张 V0.7 PNG |
| APP-000-G5-V08-PROCESS-LAYOUT-01 | BLOCKING VISUAL REVIEW | 用户指出 Process 三张等高卡导致明显空白，并要求学习分组行式布局 | V0.8 建立 Process 分组行式布局，但用户随后要求直接放入完整产品目录内容 | V0.8 保留历史；当前审查改为 V0.9 | 项目总控/用户 | SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.9 | `APP-000_FULL_VISUAL_DESIGN_V0.8.md` 与五张 V0.8 PNG |
| APP-000-G5-V09-DIRECTORY-CONTENT-01 | BLOCKING VISUAL / SEO REVIEW | 用户曾明确要求把参考模块的完整产品目录内容放入 Applications，而非只借布局 | V0.9 形成四组 14 型号目录；用户随后重新收紧 APP-000 为 Application Navigation Hub | V0.9 保留历史；当前审查改为 V0.10 | 项目总控/用户 | SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.10 | `APP-000_FULL_VISUAL_DESIGN_V0.9.md` 与五张 V0.9 PNG |
| APP-000-G5-V10-HUB-SIMPLIFICATION-01 | BLOCKING VISUAL / SEO REVIEW | 用户将 APP-000 明确收紧为 Application Navigation Hub，并要求删除 V0.9 完整型号目录、合并重复指导、恢复紧凑 Process 表 | V0.10 建立六项 Application-first 视觉；用户随后要求 V0.11 最终精修 | V0.10 保留历史；当前审查改为 V0.11 | 项目总控/用户 | SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.11 | `APP-000_FULL_VISUAL_DESIGN_V0.10.md` 与六张 V0.10 PNG |
| APP-000-G5-V11-FINAL-POLISH-01 | BLOCKING VISUAL / SHARED CHROME / DOM REVIEW | V0.11 完成 body polish，但错误形成 APP-only Mobile `Quote` 与 Footer entity 变体 | V0.11 body 作为 V0.12 保护父级；错误 Chrome 不再作为当前审查资产 | 当前审查改为 V0.12 | 项目总控/用户 | SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.12 | `APP-000_FULL_VISUAL_DESIGN_V0.11.md`、历史八张 V0.11 PNG |
| GHF-APP-V11-ENTITY-QUOTE-01 | BLOCKING GLOBAL DEPENDENCY | V0.11 曾提出 Mobile `Quote` 与页面级 Footer entity | 项目总控确认唯一 authority 为 V0.5，APP-000 不得形成共享组件变体 | 提案关闭；不得用于视觉、交付或开发 | 项目总控 | CLOSED_WITHOUT_APPROVAL / SUPERSEDED_BY_GLOBAL_HEADER_FOOTER_SPEC_V0.5 | `GLOBAL_HEADER_FOOTER_APP_V11_CHANGE_IMPACT_V0.1.md` |
| APP-000-G5-V12-GLOBAL-CHROME-REALIGN-01 | BLOCKING DIRECTED REVISION | V0.11 Chrome 与全站 V0.5 authority 冲突 | 新增七项 V0.12 资产；恢复 RFQ、84/64px、无可见 CURRENT、Production SVG 与批准 Footer；六段 APP body RAW hashes 全相等 | 项目总控复审 V0.12；不得自批或进入后续 Gate | 项目总控 | REVISION_SUBMITTED_FOR_PROJECT_CONTROL_REVIEW | `APP-000_FULL_VISUAL_DESIGN_V0.12.md`、`APP-000_GLOBAL_CHROME_REALIGNMENT_DELTA_V0.1.md` |
| APP-000-V11-LIVE-DOM-01 | BLOCKING QA DEPENDENCY | 未提供 APP-000 实际 DOM、浏览器结果或 live route | 无法验证真实 anchors、accordion ARIA、keyboard、运行时 heading、共享 Footer DOM 与链接响应 | 外部开发完成后执行 Gate 9 只读 QA | 外部开发项目/总控 | NOT_TESTABLE / RELEASE_BLOCKER | `APP-000_V0.11_DOM_LINK_ACCESSIBILITY_AUDIT_V0.1.md` |
| APP-000-G15-QA-001 | BLOCKING REVIEW | Gate 5 首轮总控审查为 `CONDITIONAL RETURN` | 只允许返修 Gate 5；禁止 Gate 6/7、子页与开发 | V0.2 已完成定向修订并接受后续总控复审 | APP-000 页面任务 | SUPERSEDED_BY_APP-000-G5-PCR-02 | `APP-000_FULL_VISUAL_DESIGN_V0.2.md`；保留历史追溯 |
| APP-000-G5-PCR-02 | BLOCKING REVIEW | Gate 5 V0.3 总控定向复审 PASS；G5-02…G5-08 均已通过总控复核 | Gate 5 仍需用户最终批准；禁止 Gate 6/7、子页与开发 | 等待用户最终决定 | 用户 | PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL | `APP-000_FULL_VISUAL_DESIGN_V0.3.md`；用户批准日期留空 |
| G5-01 | BLOCKING | Gate 5 尚未获得用户最终批准 | 不得进入任何后续 Gate、子页或开发 | 等待用户明确批准或要求修订 | 用户 | OPEN | Gate 5 用户批准记录 |
| G5-02 | IMPORTANT | 390px Buyer Clean 文案漂移 | 长文测试与 Gate 2 Section 5 不一致 | V0.2 已恢复完整精确文案；V0.3 保持不变 | APP-000 页面任务 | PROJECT_CONTROL_REVIEW_PASS | V0.3 Mobile Route-safe / Full-route 原图；不得 CLOSED |
| G5-03 | IMPORTANT | 390px Route-safe 卡片残留固定高度空白 | CTA 移除后卡片尾部出现大段空白 | 内容驱动高度；最后 chip 后保持 30px logical spacing | APP-000 页面任务 | PROJECT_CONTROL_REVIEW_PASS | V0.3 Route-safe cards；不得 CLOSED |
| G5-04 | BLOCKING | Desktop Check 标题裁切且展开项被覆盖 | 关键内容不可读 | 标题换行、accordion 动态高度并原图复核 | APP-000 页面任务 | PROJECT_CONTROL_REVIEW_PASS | V0.3 Desktop Full/Route-safe 原图与局部 1:1 复核；不得 CLOSED |
| G5-05 | IMPORTANT / HISTORICAL | Support 曾泄漏内部 route 语言，且当时的 RFQ 责任边界被缩短 | 历史 V0.3 返修恢复 Gate 2 5.6/5.8 全文并获总控 PASS；用户现于 2026-08-31 单独决定移除其中 qualification 句 | Support 三条买家文案继续保持；Final RFQ 当前文案按批准的 copy delta，不把历史 PASS 改写为当前用户批准或 CLOSED | APP-000 页面任务 | PROJECT_CONTROL_REVIEW_PASS / CURRENT_COPY_OVERRIDDEN_BY_USER_DELTA | V0.3 历史原图 + `APP-000_FINAL_RFQ_COPY_DELTA_V0.1.md` + V0.7 Full-route |
| G5-06 | IMPORTANT | 缺少反向完整页状态 | 无法验证 Desktop 0px 闭合与 Mobile 完整堆叠 | 保持 Desktop Route-safe 与 390px Full-route 完整页 | APP-000 页面任务 | PROJECT_CONTROL_REVIEW_PASS | V0.3 六资产 Manifest；不得 CLOSED |
| G5-07 | BLOCKING | Buyer Clean 正文与问答字号低于 Gate 4 合同 | 长正文可读性、视觉层级与已批准方向不一致 | Desktop 正文/答案恢复 17–18px、count 14px；390px 正文/答案 16px、count 13px；内容驱动高度 | APP-000 页面任务 | PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL | V0.3 四张完整 Buyer Clean 原图、组件板与字号审计；不得 CLOSED |
| G5-08 | IMPORTANT | 正式 Buyer Clean 使用 Segoe UI/Arial 而非 Gate 4 锁定的 Inter | 品牌字体基线不一致 | 四张完整 Buyer Clean 与 Buyer Clean component board 使用实际 Inter；记录字体来源与真实尺寸 | APP-000 页面任务 | PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL | V0.3 Manifest、Inter 字体来源与独立 weight render probe；不得 CLOSED |
| GHF-APP-01 | BLOCKING REVIEW | Task 7 首次 V0.4 的 Desktop/Mobile Header 与 Footer Logo 位为空白 | 违反全站同一 Symbol + Wordmark Logo 可见及 Mobile `Logo | RFQ | Menu` 合同 | 仅以 Task 2 同一 `brand_logo_primary_horizontal` PNG 修复最终栅格合成；完成 Logo 区非背景像素检查与逐张 original-detail 复核 | APP-000 页面任务 | PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL | `APP-000_FULL_VISUAL_DESIGN_V0.4.md` 与五项 V0.4 当前资产；总控定向复审 PASS，用户批准日期留空，不得 CLOSED |
| GHF-FIXED-RFQ-APP-01 | BLOCKING REVIEW | 用户批准 Global Chrome V0.2 后，APP-000 route-safe 正式视觉也必须固定显示全站 RFQ | 只重导 Header、Mobile Header/Menu、Footer 与画布边界；V0.4 正文、页面身份、关键词、关系和 Gate 状态不得改变 | 消费 Home Task 2 V0.2 总控 PASS 共享状态板；提交五项 APP V0.5 正式资产、正文 RAW hash、Logo/RFQ 像素和 original-detail 证据 | APP-000 页面任务 | APPROVED / CLOSED | 用户于 2026-08-30 统一批准 fixed-RFQ 视觉包；V0.5 为 APP-000 正式 fixed-RFQ 视觉基线 |

### 15.2 Gate 批准记录

| Gate | 交付物 | 提交日期 | 总控结论 | 用户批准要求 | 批准日期 | 备注 |
|---|---|---|---|---|---|---|
| Gate 0 | `APPLICATION_PLAYBOOK_V0.1.md` + 本 Brief V0.1 | 2026-08-29 | PASS / CLOSED | 用户已明确批准 | 2026-08-30 | `APPROVED`；`PROJECT_CONTROL_REVIEW=CLOSED`；批准来源为用户当前明确决定 |
| Gate 1 | `pages/applications/01_research/APP-000_GATE1_EVIDENCE_AUDIT_V0.1.md` + `APP-000_PRODUCT_V0.3_RELATION_IMPACT_AUDIT_V0.1.md` | 2026-08-30 | 既有 `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；V0.3 增量待总控复审 | 需用户批准 | 未批准 | PRODUCT V0.3 为当前输入；不得擅自 CLOSED |
| Gate 2 | `pages/applications/04_planning/APP-000_CONTENT_ARCHITECTURE_V0.1.md` + `APP-000_FINAL_RFQ_COPY_DELTA_V0.1.md` | 2026-08-30；copy delta 2026-08-31 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；局部 copy delta 来自用户明确决定 | 其余 Gate 2 仍需用户批准 | 未批准 | 当前 Final RFQ 不显示被移除的 qualification 句；其余内容架构状态不得擅自 CLOSED |
| Gate 3 | `pages/applications/04_planning/wireframes/APP-000_WIREFRAME_SPEC_V0.1.md` | 2026-08-30 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` | 需用户批准 | 未批准 | 结构方向通过；不得擅自 CLOSED |
| Gate 4 | `pages/applications/04_planning/visual-directions/APP-000_VISUAL_DIRECTION_V0.1.md` | 2026-08-30 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` | 需用户批准 | 未批准 | 视觉方向通过；不得擅自 CLOSED |
| Gate 5 | 历史 V0.3 总控 PASS 基线 + 当前 `APP-000_FULL_VISUAL_DESIGN_V0.12.md` 七项新资产和一项继承 interaction board | 当前候选 2026-09-01 | V0.12=`REVISION_SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` | 需项目总控复审，之后仍需用户最终批准 |  | G5-01=`OPEN`；actual DOM/live route 阻塞 Release Candidate，不进入后续 Gate |
| Gate 6 | 总控审查 | 未开始 | 未审查 | 全部阻塞问题关闭 | 未批准 |  |
| Gate 7 | 开发交付 | 未开始 | 未审查 | 需完整批准交付包 | 未批准 | 本项目不执行开发 |
| Gate 8 | 外部开发 | 不属于本项目执行 | 外部状态 | 由开发项目管理 | 未授权 |  |
| Gate 9 | 只读视觉、SEO、GEO 验收 | 未开始 | 未审查 | 需可访问实现 | 未批准 | 本项目不直接修复 |
| Gate 10 | 发布授权 | 未授权 | 不适用 | 必须由用户单独授权 | 未授权 | 开发或 QA 完成不等于发布 |

## 16. 外部开发交付包

交给 `D:\16Wordpress_nextjs` 前必须具备；当前全部未到 Gate：

- [ ] 已批准 Applications Playbook。
- [ ] 已批准本任务卡。
- [ ] 已批准 Desktop、Tablet 规则和 390px Mobile 视觉稿/状态图。
- [ ] 最终可见文案和 Buyer Questions。
- [ ] 五个 Application URL、内容和 route 批准记录。
- [ ] 技术事实、Claim、来源、日期和不渲染清单。
- [ ] 图片、图标、授权和 ALT。
- [ ] WordPress 字段与示例数据。
- [ ] 呈现模块、条件渲染、空状态和错误状态。
- [ ] CTA、route key 和 RFQ 预填合同。
- [ ] SEO、GEO、Schema、Canonical 和 sitemap 字段。
- [ ] 内链和 breadcrumb 矩阵。
- [ ] 视口、无障碍和只读 QA 清单。
- [ ] `site_scope=tio2-my` 及不得影响的其他站点边界。

## 17. 完成、只读验收与发布

本任务卡与 `APPLICATION_PLAYBOOK_V0.1.md` 已于 2026-08-30 获用户批准为 APP-000 Gate 0 基线，状态均为 `APPROVED_FOR_DESIGN`。APP-DEP-001 继续由当前 PRODUCT V0.3 基线保持关闭。Gate 1–4 既有状态不变；V0.12 Global Chrome 定向修订不自动批准 Gate 2 或 Gate 5。当前 V0.12 完整视觉候选为 `REVISION_SUBMITTED_FOR_PROJECT_CONTROL_REVIEW`；G5-01 与 actual DOM/live route 门禁继续 `OPEN`。页面生命周期保持 `DESIGN_IN_REVIEW`，不得标记 Release Candidate、启动子页、进入 Gate 6/7 或开发。

页面只有在内容、视觉、SEO、GEO、CTA、内链、Schema、响应式、无障碍和交付字段全部通过，且阻塞级问题关闭后，才能进入 `APPROVED_FOR_HANDOFF`。

外部开发完成后，本项目只读检查。只有批准交付包与可访问结果一致时，才可进入 `READ_ONLY_QA_APPROVED`。任何开发完成、合并、预览或只读 QA 通过都不等于发布授权。

## 18. 变更记录

| 版本 | 日期 | 变更类型 | 变更内容 | 批准来源 |
|---|---|---|---|---|
| V0.1 | 2026-08-29 | Gate 0 草案 | 建立 APP-000 页面合同；保持 planned/provisional 与事实门禁；提交总控审查，不启动后续 Gate 或子页 | 未批准；`BRIEF_IN_REVIEW` |
| V0.1 approval record | 2026-08-30 | Gate 0 批准 | 用户批准 APP-000 Gate 0；APP-R001 关闭，产品—应用、route 与其他门禁保持；只授权 APP-000 Gate 1 | `APPROVED_FOR_DESIGN` |
| V0.1 dependency update | 2026-08-30 | Gate 1 依赖 | 用户确认 14 型号统一关系矩阵方案；矩阵内容获批前不锁定推荐或完成依赖型号映射的结论 | APP-DEP-001 `WAITING_FOR_APPROVED_14_GRADE_MATRIX` |
| V0.1 relation baseline update | 2026-08-30 | Gate 1 证据（历史） | 用户授权 PRODUCT V0.2 且总控独立复验 18 PASS / 0 FAIL；同步 25 条中性关系、55 条 no-public 边界和冻结项 | 已由 V0.2.1 取代为当前基线；保留历史追溯 |
| V0.1 relation governance update | 2026-08-30 | Gate 1 证据 | 总控复审通过 PRODUCT V0.2.1；关系集合不变，新增 `R-M2377-TDS`，并将 M-996/M-2196 比较冻结拆入独立 `comparison_hold` | 当前 `APPROVED_RELATION_BASELINE`；Gate 1 草案待总控审查 |
| V0.1 design production authorization | 2026-08-30 | Gate 2–5 产出 | 用户要求四个一级页面共同使用 PRODUCT V0.2.1，并授权 APP-000 完成内容架构、线框、视觉方向和 Desktop/390px 完整视觉稿 | Gate 2–5 草案均已提交总控审查；未批准，不进入 Gate 6/7 |
| V0.1 Gate 1–4 review sync | 2026-08-30 | 总控审查 | Gate 1 证据、Gate 2 内容架构、Gate 3 结构方向和 Gate 4 视觉方向通过总控审查 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；未 CLOSED、未获用户批准 |
| V0.1 Gate 5 conditional-return revision | 2026-08-30 | Gate 5-only 返修 | 新增 Full Visual Design V0.2 与六项当前资产；修复 G5-02…G5-06；旧 V0.1 图片转存 99_workspace 并标记 superseded | Gate 5 仍为 `DRAFT_FOR_GATE_5_REVIEW`；返修已提交总控复审，未批准 |
| V0.1 Gate 5 PCR-02 revision sync | 2026-08-30 | Gate 5-only 字号/字体返修 | 总控将 G5-02…G5-06 登记为 `PROJECT_CONTROL_REVIEW_PASS`（不得 CLOSED），新增 G5-07/G5-08；新增 Full Visual Design V0.3 与六项 Inter 当前资产，恢复 Desktop 17–18px/Mobile 16px 正文及 14px/13px count；V0.2 图片转存 99_workspace 并标记 superseded | Gate 5 仍为 `DRAFT_FOR_GATE_5_REVIEW`；G5-07/G5-08=`REVISION_SUBMITTED_FOR_PROJECT_CONTROL_REVIEW`，未批准 |
| V0.1 Gate 5 V0.3 project-control pass sync | 2026-08-30 | 治理状态同步 | APP-000-G5-PCR-02 定向复审 PASS；G5-07/G5-08 更新为 `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；G5-01 保持 OPEN；不修改六项视觉资产 | Gate 5=`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；用户批准日期留空；页面仍 `DESIGN_IN_REVIEW`，不进入 Gate 6/7 |
| V0.1 Task 7 GHF-APP-01 revision | 2026-08-30 | Global Chrome Logo-only 返修 | 首次 V0.4 缺失 Logo 的五张图保留至 `99_workspace`；以 Task 2 同一 Logo PNG 重新合成四张完整页和 Global Chrome states，正文像素差异 0，Logo 区机器检查与 original-detail 复核通过 | `GHF-APP-01=OPEN / REVISION_REQUIRED`；修订提交项目总控复审，不改变 Gate 1–5、G5-01 或页面生命周期 |
| V0.1 Task 7 GHF-APP-01 project-control pass sync | 2026-08-30 | 治理状态同步 | 总控定向复审确认 V0.4 五张正式资产的 Logo、Applications current、RFQ ON/OFF、390px 顺序、Deep Navy Footer、正文零差异与关系门禁保持 | `GHF-APP-01=PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；未获用户批准、不得 CLOSED；Gate 1–5、G5-01、Gate 6/7、子页和开发边界不变 |
| V0.1 Task 7 fixed-RFQ V0.5 submission | 2026-08-30 | Global Chrome 固定 RFQ 重导 | 消费 `GLOBAL_HEADER_FOOTER_SPEC_V0.2` 与 Home Task 2 V0.2 总控 PASS 共享状态板；新增 V0.5 规格及五项资产，Full-route/route-safe 均固定 Global Chrome RFQ；四组 V0.4 正文 RAW hash 完全一致 | `GHF-FIXED-RFQ-APP-01=DRAFT_FOR_PROJECT_CONTROL_REVIEW`；提交总控，不改变 Gate 1–5、G5-01、生命周期、子页或开发边界 |
| V0.1 Task 7 fixed-RFQ project-control pass sync | 2026-08-30 | 治理状态同步 | 总控独立复核 V0.5 Manifest、正文 hashes、固定 RFQ、Applications CURRENT、Logo、focus/hover、390px、Footer closure、PRODUCT V0.2.1 与关键词边界并判定 PASS | `GHF-FIXED-RFQ-APP-01=PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；用户批准日期留空；Gate 1–5、G5-01、Gate 6/7、子页和开发边界不变 |
| V0.1 Task 7 fixed-RFQ user approval sync | 2026-08-30 | 用户统一视觉批准 | 用户统一批准 Home 与 03–07 全站 fixed-RFQ 视觉包；APP-000 V0.5 锁定为正式 fixed-RFQ 视觉基线 | `GHF-FIXED-RFQ-APP-01=APPROVED / CLOSED`；仅关闭专项视觉审查，任务硬停止在视觉终点，不进入 Gate 6/7、子页、开发、交付或发布 |
| V0.1 PRODUCT V0.3 relation impact submission | 2026-08-30 | 关系影响增量 | PRODUCT V0.3 取代 V0.2.1 为唯一当前关系源；五个既有 Application 集合加入 M-2377，计数更新为 8/8/7/4/2/1，Sulfate 更新为 5；Specialty Materials、Rubber 与比较冻结边界保持 | `APP-000-PRODUCT-V03-REL-01=DRAFT_FOR_PROJECT_CONTROL_REVIEW`；新增 Desktop/390px 完整页证明，不改变 V0.5 fixed-RFQ chrome、既有 Gate 状态、子页或开发边界 |
| V0.1 unified V0.6 visual submission | 2026-08-31 | 完整视觉合并 | 将 V0.5 fixed-RFQ Chrome 与 PRODUCT V0.3 关系合并为 V0.6；新增 Desktop/Mobile × Full-route/Route-safe 四张完整页和一张 Global Chrome states，原关系影响两图转为历史证据 | `APP-000-G5-V06-UNIFIED-01=DRAFT_FOR_PROJECT_CONTROL_REVIEW`；V0.6 是唯一当前完整视觉审查候选，不升级 Gate 5、生命周期或开发权限 |
| V0.1 Final RFQ copy delta / V0.7 submission | 2026-08-31 | 用户文案决定 + 完整视觉定向重导 | 用户明确移除 `It does not confirm price, availability, documents, sample approval or delivery timing.`；V0.7 仅重排 Desktop/390px Full-route Final RFQ 高度，Route-safe 文件与 V0.6 字节相同，其他正文、关系与 Global Chrome 受保护 | `APP-000-G5-V07-RFQ-COPY-01=DRAFT_FOR_PROJECT_CONTROL_REVIEW`；V0.6 保留历史；不升级 Gate 5、生命周期或开发权限 |
| V0.1 Process layout delta / V0.8 submission | 2026-08-31 | 用户视觉方向 + Process 模块重排 | 用户指出三张等高 Process 卡片布局不佳；V0.8 学习分组面板与紧凑数据行原则，Desktop 改为左 8 行、右 5+1 行，390px 三组内容驱动堆叠；不复制参考图内容或 View Grade 动作 | `APP-000-G5-V08-PROCESS-LAYOUT-01=DRAFT_FOR_PROJECT_CONTROL_REVIEW`；V0.7 保留历史且 copy delta 继续生效；不升级 Gate 5、生命周期或开发权限 |
| V0.1 Product directory content / V0.9 submission | 2026-08-31 | 用户定向内容复用 | 用户明确要求把参考模块内容放入 APP-000；V0.9 移除 Process-only 模块并插入 PRODUCT-000 V0.12 完整目录：四组、14 型号、精确中性说明和条件 View Grade；登记跨页 SEO/职责复核 | `APP-000-G5-V09-DIRECTORY-CONTENT-01=DRAFT_FOR_PROJECT_CONTROL_REVIEW`；V0.8 保留历史；不升级 Gate 5、生命周期或开发权限 |
| V0.1 Application-first simplification / V0.10 submission | 2026-08-31 | 用户定向页面职责修正 | 用户明确 APP-000 是 Application Navigation Hub；V0.10 删除 V0.9 完整型号目录，Hero 改为六个应用锚点，六卡补范围文案，合并五步指导，恢复紧凑 Process 表，并保留 Support/FAQ/正向 RFQ | `APP-000-G5-V10-HUB-SIMPLIFICATION-01=DRAFT_FOR_PROJECT_CONTROL_REVIEW`；V0.9 保留历史；不升级 Gate 5、生命周期或开发权限 |
| V0.1 final polish / V0.11 submission | 2026-08-31 | 用户定向最终精修 | V0.11 精修 Specialty/Procurement copy、390px stacked Process、1024px Tablet、Mobile Quote 与 Footer operating entity；新增 DOM/link/a11y 合同与 shared-Chrome impact | `APP-000-G5-V11-FINAL-POLISH-01=DRAFT_FOR_PROJECT_CONTROL_REVIEW`；共享 Chrome 和 live DOM/route 阻塞 Release Candidate，不升级 Gate 或开发权限 |
| V0.1 Global Chrome authority realignment / V0.12 submission | 2026-09-01 | 项目总控定向 Gate 5 返修 | 以 V0.5 为唯一 authority，恢复 84/64px、Logo｜RFQ｜Menu、无可见 CURRENT、Production SVG 与批准 Footer；关闭未获批 Quote/entity 提案；六段正文 RAW hash 完全相等 | `APP-000-G5-V12-GLOBAL-CHROME-REALIGN-01=REVISION_SUBMITTED_FOR_PROJECT_CONTROL_REVIEW`；G5-01 保持 OPEN，不进入 Gate 6/7、子页或开发 |
