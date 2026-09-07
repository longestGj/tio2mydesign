# Titanium Dioxide Products Page Brief V0.1

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| 文档名称 | Titanium Dioxide Products Page Brief |
| Page ID | `PRODUCT-000` |
| Brief 版本 | V0.1 |
| 创建日期 | 2026-08-29 |
| 最后更新日期 | 2026-08-29 |
| 页面负责人 | Products 页面执行任务 |
| 总控审核人 | 项目总控与质量审查 |
| 用户批准记录 | 2026-08-29：已确认应用优先、两步选型、选型优先 Hero、精简结果及五段设计方向；同日整体批准 Playbook/Brief；其后批准 Gate 1/2、Gate 3；同日明确批准 PRODUCT-000 Gate 4，授权进入 Gate 5 完整视觉设计 |
| 批准范围 | Gate 1/2/3/4 基线获批；仅授权制作并提交 Gate 5 Buyer Clean 完整视觉稿与批准合同要求的状态稿；不包含 Gate 5 成果批准、Gate 6/7、开发交付或发布授权 |
| 页面生命周期 | `DESIGN_IN_REVIEW` |
| Mapping Status | `APPROVED_PRD_V0.3` |
| Verification Status | `QUALITATIVE_KEYWORD_EVIDENCE` |
| 本版变更摘要 | Gate 4 总控复审与用户批准；G4-01/G4-02 关闭；Visual Direction 升级为批准基线；Gate 5 已授权并进行中；G5-02 至 G5-10 均已通过总控复审并待用户批准、均未 CLOSED；G5-01 与 R-002/R-003/R-004 保持 OPEN；Gate 5 仍为 `DRAFT_FOR_GATE_5_REVIEW` / `DESIGN_IN_REVIEW`，Gate 6/7 未授权 |

本任务卡只授权研究、内容架构、视觉、SEO、GEO、开发交付规格和开发完成后的只读质量验收。它不授权 WordPress、Next.js、CMS、组件、样式、测试、部署、发布或任何代码修改。

## 1. 页面身份

| 字段 | 记录值 |
|---|---|
| Page ID | `PRODUCT-000` |
| Section | `PRODUCTS` |
| Page Name | Titanium Dioxide Products |
| URL | `/products/`；已批准稳定 URL |
| Page Type | Product hub |
| Playbook Key | `PRODUCT` |
| Market | `GLOBAL` |
| Language | `EN` |
| Priority | `P0` |
| Planned Domain | `https://tio2malaysia.com` |
| Site Scope | `tio2-my` |
| External Development Workspace | `D:\16Wordpress_nextjs`；仅由外部开发项目负责 |
| Canonical URL | `https://tio2malaysia.com/products/` |
| Indexing Intent | `INDEX`；发布前复核 |

## 2. 权威输入

| 顺序 | 资料 | 路径或来源 | 本页用途 | 状态 |
|---:|---|---|---|---|
| 1 | 用户当前批准决定 | 本任务 2026-08-29 对话及总控批准记录 | 决定选型、模块、SEO/GEO、视觉与交付方向 | Gate 1/2/3/4 已批准；Gate 5 已授权 |
| 2 | 最新 PRD | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | Products 架构、14 型号、分组、工艺和冻结项 | 当前基线 |
| 3 | 页面—关键词主表 | `research/keyword/11_page_keyword_master.csv` | 页面身份、关键词和内耗边界 | 当前实施主表 |
| 4 | 页面登记册 | `docs/architecture/PAGE_REGISTRY_V0.1.md` | Page ID、URL、类型、状态和优先级 | 当前登记册 |
| 5 | Products Playbook | `docs/page-playbooks/PRODUCT_PLAYBOOK_V0.1.md` | Products 页面体系规范 | `APPROVED_FOR_DESIGN` |
| 6 | 产品页统一模板 | `docs/product-pages/01_Product_Page_Template_and_Content_Spec_V1.0.md` | 14 型号页模块、SEO、证据与内链边界 | 按用户当前指令作为批准输入 |
| 7 | 产品页 SOP | `docs/product-pages/03_Product_Page_Development_SOP_and_QA_V1.0.md` | 应用/工艺映射、冻结和 QA | 当前 V1.0 输入 |
| 8 | 视觉标准 | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md` | 品牌视觉基线 | Approved Visual Direction |
| 9 | 已批准首页 | `pages/home/04_planning/04_homepage_full_visual_design_v0.3.md` 及 V0.3 自检 | 当前品牌视觉、移动端和对比度继承 | 项目状态记录用户确认完成 |
| 10 | 官方 SEO 资料 | Google Search Central、Schema.org，2026-08-29 核对 | 分类页可抓取链接与 Schema 边界 | 需在发布前再次复核 |
| 11 | Gate 1 Evidence Audit | `pages/products/01_research/PRODUCT-000_GATE1_EVIDENCE_AUDIT_V0.1.md` | Selector 逐关系公开许可与冻结结论 | 总控复审 PASS；用户批准；R-002/R-004 门禁保持 |
| 12 | Route Audit | `pages/products/02_analysis/PRODUCT-000_ROUTE_AUDIT_V0.1.md` | Page ID/route key、mapping 和 live 状态 | 总控复审 PASS；用户批准为当前路由门禁基线；R-003 保持 |
| 13 | Gate 2 Content Architecture | `pages/products/04_planning/PRODUCT-000_CONTENT_ARCHITECTURE_V0.1.md` | 最终文案、状态、SEO/GEO 与证据边界 | 总控复审 PASS；用户批准；Gate 3 已授权 |
| 14 | Gate 3 Wireframe | `pages/products/04_planning/wireframes/PRODUCT-000_WIREFRAME_SPEC_V0.1.md` | Desktop、Tablet 响应逻辑、390px Mobile 与状态板 | 总控复审PASS；用户2026-08-29批准；`APPROVED_GATE_3_BASELINE` |
| 15 | Gate 4 Visual Direction | `pages/products/04_planning/visual-directions/PRODUCT-000_VISUAL_DIRECTION_V0.1.md` | 色彩、字体、页面节奏、模块视觉、图片边界与状态方向 | 总控复审 PASS；用户 2026-08-29 批准；`APPROVED_GATE_4_BASELINE` |
| 16 | Gate 5 Full Visual Design | `pages/products/04_planning/visual-designs/PRODUCT-000_FULL_VISUAL_DESIGN_V0.1.md` 及 `visual-designs/assets/` | Buyer Clean Desktop/390px、反向 route/viewport、组件状态与独立 Internal Review 附录 | `DRAFT_FOR_GATE_5_REVIEW`；待总控/用户 Gate 5 审查 |

### 2.1 输入冲突记录

| Conflict ID | 冲突内容 | 涉及资料 | 影响字段或模块 | 当前处理 | 决定人 | 决定日期 |
|---|---|---|---|---|---|---|
| C-001 | 登记册生命周期示例早于根章程当前状态词 | PAGE_REGISTRY V0.1、根 AGENTS.md | 页面生命周期 | 使用根 AGENTS.md 当前词汇；Gate 0 批准后为 `APPROVED_FOR_DESIGN` | 项目治理优先级 | 2026-08-29 |
| C-002 | 历史文档保留迁移前路径 | PRD、首页及产品页资料、目录说明 | 权威输入路径 | 按 `02_DIRECTORY_GUIDE.md` 映射，不回写历史版本 | 项目治理 | 2026-08-29 |
| C-003 | 产品模板主文档写“stakeholder review”，但当前任务明确称其为批准输入 | Product Template、README、项目状态、用户当前指令 | Grade 页继承边界 | 按当前用户明确决定使用 V1.0；不把 PRODUCT-000 草案本身写成批准 | 用户 | 2026-08-29 |
| C-004 | Visual Standard 的亮 Teal CTA 与首页 V0.3 对比度修正不同 | Visual Standard、Homepage V0.3 | CTA、小文字颜色 | 浅底小文字和实心 CTA 使用 `#007F77`；`#00A99D` 仅作非文字强调 | 最新批准页面基线 | 2026-08-29 |
| C-005 | PRD V0.4 将统一产品模板列为后续范围，之后已产生 V1.0 产品包 | PRD V0.4、Product Planning Pack V1.0 | Grade 页共用规则 | 视为 PRD 之后的已确认补充输入，不修改 PRD 历史版本 | 用户当前决定 | 2026-08-29 |

以上冲突均不改变 PRODUCT-000 的 Page ID、URL、主关键词或职责，不阻塞任务卡草案和不依赖受限事实的工作。

## 3. 页面策略

### 3.1 目标采购商

| 字段 | 记录值 |
|---|---|
| 主要买家角色 | 涂料、塑料、色母粒、油墨和工业材料企业的采购、技术采购、配方/应用评估人员 |
| 次要买家角色 | 进口商、分销商、供应链与合规/文件协调人员 |
| 所在市场 | European Union、United Kingdom、India、Brazil 及全球工业采购入口 |
| 行业与应用 | Coatings、Plastics、Masterbatch、Printing Inks、Paper、Specialty Materials |
| 采购阶段 | Supplier Search → Technical Evaluation → RFQ |
| 已知问题 | 可能知道应用但不知道型号；可能知道工艺或具体型号；需要快速识别下一页 |
| 主要顾虑 | 型号匹配、技术证据、工艺、文件、目的市场支持和如何发起询盘 |
| 需要完成的判断 | 从应用、工艺或型号三条路径选择正确的下游页面 |
| 页面访问后的理想下一步 | 查看合适型号详情、进入 Process/Application 页面，或带上下文进入 RFQ |

### 3.2 页面职责

| 项目 | 记录值 |
|---|---|
| 一句话页面职责 | 承接泛 titanium dioxide pigment 与 grade-selection 意图，通过应用优先、工艺辅助的引导路径，把采购商送到正确的型号或下游 owner 页面 |
| 必须解决的核心问题 | 有哪些型号；如何按应用开始；工艺路径在哪里；如何直接查看已知型号；证据不足时如何继续 |
| 对全站采购路径的贡献 | 连接 Home、14 个 Grade 页面、2 个 Process 页面、Applications、Documents、Markets 和 RFQ |
| 主转化目标 | 完成一次有效的产品路径选择并进入合适详情页 |
| 次转化目标 | 带已明确上下文进入独立 RFQ |
| 页面成功信号 | 选型器使用、Grade/Process/Application 点击、All Grades 点击、RFQ 点击；不以虚构推荐或停留时长代替成功 |

### 3.3 明确不负责

| 排除事项 | 原因 | 正确承接 Page ID | 正确承接 URL |
|---|---|---|---|
| 精确型号主词与完整技术详情 | 型号页拥有 exact model intent | 对应 GRADE-* | `/products/{grade}/` |
| Chloride 工艺全文 | Process 页面拥有工艺意图 | PRODUCT-PROC-CL | 使用 Page ID/route key；批准路径由登记册解析，live 前不渲染链接 |
| Sulfate/Sulphate 工艺全文 | Process 页面拥有工艺意图 | PRODUCT-PROC-SU | 使用 Page ID/route key；批准路径由登记册解析，live 前不渲染链接 |
| Chloride vs Sulfate 完整比较 | Resources 研究意图，当前仍为候选 | RES-PROC | `/resources/chloride-vs-sulfate-titanium-dioxide/`；候选未批准上线 |
| 泛 Coatings 内容 | Applications 拥有应用词 | APP-COAT | 使用 Page ID/route key；URL 当前暂定 |
| 泛 Plastics 内容 | Applications 拥有应用词 | APP-PLAS | 使用 Page ID/route key；URL 当前暂定 |
| 泛 Masterbatch 内容 | Applications 拥有应用词 | APP-MB | 使用 Page ID/route key；URL 当前暂定 |
| 泛 Printing Inks 内容 | Applications 拥有应用词 | APP-INK | 使用 Page ID/route key；URL 当前暂定 |
| 泛 Paper 内容 | Applications 拥有应用词 | APP-PAPER | 使用 Page ID/route key；URL 当前暂定 |
| 国家 supplier 内容 | Market 页面拥有目的市场采购词 | MARKET-* | 对应批准 Market URL |
| 制造、origin 和 traceability 证明 | About 是事实 owner | ABOUT-001 | `/about/` |
| TDS/SDS/COA/COO/REACH 解释与可用性 | Documents 是文件 owner | DOC-* / CONV-DOC | 使用批准 route key；未上线不渲染 |
| 报价表单 | 独立 RFQ 页面拥有行动意图 | CONV-RFQ | 使用 Page ID/route key；workflow 批准并 live 前不写成永久 URL |
| Sample 主入口 | 应先选定具体型号 | CONV-SAMPLE / Grade 页面 | 由具体 Grade 页面进入 |

## 4. SEO、GEO 与搜索意图合同

| 字段 | 记录值 |
|---|---|
| Primary Keyword | `titanium dioxide pigment` |
| Secondary Keywords | `tio2 pigment supplier | industrial titanium dioxide supplier | titanium white pigment | titanium dioxide grades | titanium dioxide grade selection | rutile titanium dioxide | rutile tio2 supplier | rutile titanium dioxide pigment` |
| Search Intent | `C`；泛产品供应与牌号选择 |
| Buyer Stage | Supplier Search |
| Source Cluster | `PRODUCT-01 | PRODUCT-02` |
| Excluded Keywords | `exact grade terms | generic application terms | country supplier terms` |
| Cannibalization Boundary | Product Hub owns generic product-family intent; Process pages own process terms; Grade pages own model terms; Applications owns use-case terms |
| H1 方向 | `Titanium Dioxide Pigment Grades for Industrial Applications` |
| Title 方向 | `Titanium Dioxide Pigment Grades | TiO2 Malaysia` |
| Full Meta Description 候选 | `Explore 14 titanium dioxide pigment grades by application, process, or model, then review product details or request a quote from TiO2 Malaysia.`；仅 `FULL_ROUTE_COPY=true` 时渲染 |
| Route-safe Meta Description 候选 | `Browse 14 titanium dioxide pigment grades and review model pages for product details and technical evaluation with TiO2 Malaysia.`；`FULL_ROUTE_COPY=false` 时渲染 |
| Slug | `/products/` |
| Canonical | `https://tio2malaysia.com/products/` |
| Hreflang | `NOT_APPLICABLE` |
| Robots | `INDEX, FOLLOW`；发布前复核 |

### 4.1 SEO 防内耗检查

- [x] `titanium dioxide pigment` 在当前 54 页主表中唯一。
- [x] Secondary Keywords 服务泛产品集合与选择意图。
- [x] H1、Title、Hero 和正文围绕同一页面职责。
- [x] Hub 不使用 Process、Grade、Application 或 Market 词作为独立 SEO 小节主目标。
- [x] 不建立独立 Rutile 页面。
- [x] Selector 状态不生成可索引页面，不改变 canonical。
- [x] All 14 Grades 为全部型号提供普通可抓取链接。

### 4.2 GEO 合同

| 字段 | 记录值 |
|---|---|
| Primary Entity | Titanium dioxide pigment product collection |
| Related Entities | TiO2 Malaysia、14 Grade entities、Chloride Process、Sulfate Process、Coatings、Plastics、Masterbatch、Printing Inks、Paper、Specialty Materials |
| Buyer Questions | 如何选 grade；有哪些型号；应用和工艺路径区别；没有 verified 推荐时如何继续 |
| Answer-ready Blocks | EVALUATION_GUIDE、BUYER_QUESTIONS、PROCESS_ROUTES、ALL_GRADES |
| Evidence and Attribution | 页面身份和型号清单来自登记册/PRD；技术关系来自批准技术证据；法规和时间敏感内容不在本页展开 |
| Freshness Requirement | 页面主表、产品分类、工艺或技术证据变化时复核；Schema 官方要求在发布前复核 |
| Machine-readable Relationships | `CollectionPage` + `ItemList` + `BreadcrumbList`；与可见顺序、名称和 URL 一致 |
| GEO Exclusions | 性能排名、最佳推荐、等效替代、制造/origin、文件可用性、法规、库存、价格、交期、运输和贸易规避主张 |

- [x] 品牌、产品集合、工艺、应用和型号关系清楚。
- [x] 关键问题均有计划中的可见答案模块。
- [x] 无时间敏感贸易内容。
- [x] 不在 Hub 使用 14 组 Product rich-result 标记。
- [x] Buyer Questions 默认不使用 FAQPage 或 QAPage。

### 4.3 官方 SEO 与 Schema 核对记录

| 来源 | 核对用途 | 核对日期 | 发布前动作 |
|---|---|---|---|
| `https://developers.google.com/search/docs/appearance/structured-data/product-snippet` | Product rich result 面向单一产品页的边界 | 2026-08-29 | 复核当前资格与标记要求 |
| `https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure` | 分类页直接链接全部产品、搜索框不能替代可抓取链接 | 2026-08-29 | 复核 All 14 Grades 初始链接 |
| `https://developers.google.com/search/blog/2023/08/howto-faq-changes` | FAQ rich result 展示限制背景 | 2026-08-29 | 不因问答模块自动添加 FAQPage |
| `https://schema.org/CollectionPage` | Product Hub 页面类型 | 2026-08-29 | 与可见页面身份一致 |
| `https://schema.org/ItemList` | 14 型号可见列表关系 | 2026-08-29 | 与可见顺序、名称和 URL 一致 |

上述来源只支持 SEO/Schema 决策，不证明 TiO2 Malaysia 的产品、制造、文件、库存或供应能力。

## 5. 本页必须回答的问题

| Question ID | 买家问题 | 采购判断 | 回答模块 ID | 所需证据 | 回答深度 |
|---|---|---|---|---|---|
| Q01 | What titanium dioxide pigment grades are available? | 是否存在可进一步评估的型号集合 | ALL_GRADES | PRD、登记册、主表 | 完整列出 14 型号和分组 |
| Q02 | How should I start selecting a grade for my application? | 应从哪个应用入口开始 | GRADE_SELECTOR | 已批准应用分类；公开结果另需技术关系证据 | 简明步骤与资格说明 |
| Q03 | Which grades should I review for my selected application? | 哪些型号可以进入技术评估 | GRADE_SELECTOR | verified 应用—型号关系 | 精简候选，不排名 |
| Q04 | Can I select by chloride or sulfate process? | 是否需要进入工艺路径 | PROCESS_ROUTES | 已批准 Process 页面与工艺映射 | 路由级概述 |
| Q05 | What is the difference between application and process selection? | 应先按用途还是生产工艺判断 | EVALUATION_GUIDE | 页面职责与批准架构 | 一段直接答案 |
| Q06 | What should I verify before choosing a grade? | 下一步需要核对哪些资料 | EVALUATION_GUIDE | 统一产品模板与技术/文件边界 | 步骤列表，不给性能结论 |
| Q07 | What if there is no verified grade recommendation? | 如何避免猜测并继续采购 | GRADE_SELECTOR / BUYER_QUESTIONS | 证据门禁规则 | 诚实空状态与下游路径 |
| Q08 | How can I request a quote after selecting a direction? | 如何提交有效询盘 | FINAL_RFQ | Conversion 架构与预填合同 | 仅 `RFQ_AVAILABLE=true` 时公开回答；否则问题、答案和行动均不渲染 |

## 6. 内容架构与模块顺序

### 6.1 页面叙事

| 项目 | 记录值 |
|---|---|
| 首屏承诺 | Full route 模式：从应用、工艺或型号开始评估；route-safe 模式：浏览 14 个型号并进入产品详情 |
| 主要证据链 | 批准的 14 型号集合 → verified 应用/工艺关系 → 独立 Grade 页面 → 文件/RFQ 路径 |
| 选择或比较逻辑 | 应用优先、工艺辅助、完整目录兜底；不提供参数比较和最佳排名 |
| 风险与边界说明 | 候选只表示可评估方向；最终适用性需基于 formulation、technical data 和 buyer requirements 核对 |
| 最终行动理由 | 买家已获得明确型号或评估方向并进入 Grade；仅 `RFQ_AVAILABLE=true` 时可带上下文进入 RFQ |

### 6.2 模块清单

| 顺序 | Module ID | 模块名称 | 买家问题 | 模块目的 | 必须内容 | 独有内容 | 证据 ID | CTA | 手机端处理 |
|---:|---|---|---|---|---|---|---|---|---|
| 0 | GLOBAL_HEADER | Global Header | 如何访问主要栏目？ | 全站导航 | 批准导航合同、Products 当前状态 | Home 文字入口不可由 Logo 代替；RFQ 项仅 `RFQ_AVAILABLE=true` 时渲染 | IA-001 | Request a Quote（条件） | Logo、Menu、条件 RFQ；完整菜单另有状态图 |
| 1 | BREADCRUMB | Breadcrumb | 我在网站什么位置？ | 建立层级 | Home > Products | 与 Schema 一致 | IA-002 | 无 | 单行可换行，不截断 |
| 2 | HERO | Product Hub Hero | 这是什么页面？下一步是什么？ | 建立主题和行动 | H1、full/route-safe Intro、主 CTA；RFQ CTA 条件渲染 | 选型优先定位；不可用行动不留承诺句 | SEO-001 | Find the Right Grade / Request a Quote（条件） | 单列；CTA 可全宽；无大空白 |
| 3 | GRADE_SELECTOR | Two-step Grade Selector | 哪些型号值得评估？ | 按应用导向 verified 结果 | 7 个入口、结果区、资格说明、route-safe 空状态 | 应用优先两步选型；RFQ 文句/CTA 同步条件渲染 | TECH-MAP | View Grade；Request a Quote（条件） | 单/双列选项；结果紧随；无横滑 |
| 4 | PROCESS_ROUTES | Select by Process | 我是否按工艺继续？ | 辅助工艺路径 | 每个 live route 对应完整卡片；无 live route 时整模块不渲染 | 不作 versus 对比；禁止无 CTA 卡片 | PROC-001 | Explore Grades | 仅呈现 1 或 2 张完整 live 卡片 |
| 5 | ALL_GRADES | All 14 Grades | 我已知型号，如何直接进入？ | 完整目录和抓取入口 | 四组、14 型号、URL；M-2377 仅中性名称/链接 | 6/5/2/1 完整集合 | PRODUCT-LIST | View Grade | 可访问展开组；全部链接仍可抓取 |
| 6 | EVALUATION_GUIDE | How to Evaluate a Grade | 选型前应核对什么？ | 教育采购判断 | 应用、工艺、技术资料、目的市场、文件和测试要求 | 不比较具体指标 | GUIDE-001 | View Applications / Documents | 步骤列表，不用复杂图表 |
| 7 | SUPPORT_PATHS | Procurement Support Paths | 从哪里继续核对应用、文件和市场？ | 连接 owner 页面 | Applications、Documents、Markets | 清楚说明各自职责 | ROUTE-001 | Explore 对应栏目 | 三项纵向或紧凑卡片 |
| 8 | BUYER_QUESTIONS | Buyer Questions | 常见选型问题是什么？ | 可引用 GEO 答案 | Q02、Q05、Q07；Q08 与 RFQ 依赖句仅 `RFQ_AVAILABLE=true` 时渲染 | 页面级直接答案，不描述内部审批/发布状态 | GEO-001 | 对应 live 上下文链接 | 可访问 accordion 或完整展开；不隐藏关键答案 |
| 9 | FINAL_RFQ | Final RFQ | 如何提交采购需求？ | 转化收口 | RFQ 说明、预填规则、无 SLA 承诺 | 整模块仅 `RFQ_AVAILABLE=true` 时渲染 | CONV-001 | Request a Quote | 单列，全宽 CTA，不内嵌表单；不可用时整模块缺席 |
| 10 | GLOBAL_FOOTER | Footer | 如何再次访问栏目或联系？ | 导航收口 | 已登记栏目、Contact、verified 主体信息；RFQ 条件渲染 | Legal/Privacy 为 `NOT_IN_SCOPE`，未登记/批准前不渲染 | IA-003 | Request a Quote（条件） | 两列或分组导航，无溢出 |

### 6.3 路由与公开内容唯一状态合同

- `PROCESS_CL_AVAILABLE=true`：`PRODUCT-PROC-CL` 已批准且在 `site_scope=tio2-my` 验证 live。
- `PROCESS_SU_AVAILABLE=true`：`PRODUCT-PROC-SU` 已批准且在 `site_scope=tio2-my` 验证 live。
- `PROCESS_AVAILABLE=true`：以上至少一个为 true。
- `RFQ_AVAILABLE=true`：仅当 `CONV-RFQ` workflow 已批准且验证 live。
- `RFQ_FALLBACK_AVAILABLE=true`：仅当总控另行批准精确的替代行动、目标及买家文案。V0.1 尚无批准 fallback；fallback 不会令 `RFQ_AVAILABLE` 变为 true，也不授权 `Request a Quote` 或 full-route metadata。
- `FULL_ROUTE_COPY=true`：`PROCESS_AVAILABLE=true` 且 `RFQ_AVAILABLE=true`。

确定行为：每个 Process card 的 title/body/CTA 同时渲染或同时不渲染；两个 Process route 都不可用时整个 `PROCESS_ROUTES` 不渲染。RFQ 不可用时，Header/Hero/Selector/Buyer Questions/Footer 的 RFQ CTA 与依赖行动文句、以及整个 `FINAL_RFQ` 同时不渲染；如未来批准 fallback，只能按该批准的精确 surface、目标和文案渲染，不能复用 RFQ 模块。Title/H1 始终使用 route-safe 候选；Full Meta 与 Full Hero intro 仅在 `FULL_ROUTE_COPY=true` 时使用，否则必须使用 route-safe fallback。

### 6.4 页面独有内容

| Unique ID | 必须独有的内容 | 为什么不能模板替换 | 证据来源 | 验收方式 |
|---|---|---|---|---|
| U-001 | 应用优先、工艺辅助的两步选型逻辑 | 这是 Product Hub 的核心决策功能 | 用户批准决定、产品架构 | 各状态与输出规则逐项核对 |
| U-002 | 14 型号完整 6/5/2/1 目录 | 代表已批准产品集合 | PRD、登记册、主表 | 数量、唯一性、URL 自动/人工复核 |
| U-003 | Hub、Process、Grade、Application 的职责解释 | 用于防内耗和买家导航 | 主表与 Playbook | 标题、正文和链接不越界 |
| U-004 | 无 verified 推荐时的诚实空状态 | 防止为了转化编造型号 | 证据门禁规则 | Paper、Not Sure 和字段省略后的自然布局验收 |
| U-005 | M-2377 中性目录呈现 | 该型号具有独有冻结边界 | PRD 与产品模板 | 公共 UI 只显示名称/链接；不显示内部状态、工艺、应用、推荐、差异或空标签 |

### 6.5 Buyer Questions

| FAQ ID | 问题 | 回答要点 | 证据 ID | 是否适合 FAQ Schema |
|---|---|---|---|---|
| BQ-01 | How do I choose a titanium dioxide pigment grade? | 从应用开始；核对工艺、技术资料、目的市场和文件；进入详情页确认 | GUIDE-001 | 否；作为可见答案块 |
| BQ-02 | Can I browse all TiO2 grades directly? | 可以；All 14 Grades 提供四组稳定链接 | PRODUCT-LIST | 否 |
| BQ-03 | What if no grade is shown for my application? | 浏览完整型号目录；Application/RFQ 仅在各自 route 可用时补充，不猜测型号 | TECH-MAP | 否 |
| BQ-04 | Does a listed grade guarantee suitability? | 不保证；列表仅是技术评估起点，需买家核对具体要求 | TECH-MAP | 否 |

## 7. 产品、应用、市场与文件关系

### 7.1 Product Hub 目录

| Product ID | 型号 | 展示场景 | 推荐依据 | 禁止声明 | 链接 Page ID |
|---|---|---|---|---|---|
| GRADE-M350 | M-350 | All Grades；Coatings / Printing Inks verified Selector result | 目录：PRD/登记册；Selector：Gate 1 Audit + M-350 approved example | 最佳、等效、保证适用 | GRADE-M350 |
| GRADE-M510 | M-510 | All Grades only in Gate 1 V0.1 | 目录：PRD/登记册；Selector 无当前产品级公开许可 | 最佳、等效、保证适用 | GRADE-M510 |
| GRADE-M896 | M-896 | All Grades only in Gate 1 V0.1 | 目录：PRD/登记册；Selector 无当前产品级公开许可 | 同上 | GRADE-M896 |
| GRADE-M996 | M-996 | All Grades only in Gate 1 V0.1 | 目录：PRD/登记册；Selector 无当前产品级公开许可 | 与 M-2196 无证据差异 | GRADE-M996 |
| GRADE-M2196 | M-2196 | All Grades only in Gate 1 V0.1 | 目录：PRD/登记册；Selector 无当前产品级公开许可 | 与 M-996 无证据差异 | GRADE-M2196 |
| GRADE-M895 | M-895 | All Grades only in Gate 1 V0.1 | 目录：PRD/登记册；Selector 无当前产品级公开许可 | 最佳、等效、保证适用 | GRADE-M895 |
| GRADE-M200 | M-200 | All Grades only in Gate 1 V0.1 | 目录：PRD/登记册；Selector 无当前产品级公开许可 | 同上 | GRADE-M200 |
| GRADE-M108 | M-108 | All Grades only in Gate 1 V0.1 | 目录：PRD/登记册；Selector 无当前产品级公开许可 | 同上 | GRADE-M108 |
| GRADE-M210 | M-210 | All Grades only in Gate 1 V0.1 | 目录：PRD/登记册；Selector 无当前产品级公开许可 | 同上 | GRADE-M210 |
| GRADE-M340 | M-340 | All Grades only in Gate 1 V0.1 | 目录：PRD/登记册；Selector 无当前产品级公开许可 | 同上 | GRADE-M340 |
| GRADE-M886 | M-886 | All Grades only in Gate 1 V0.1 | 目录：PRD/登记册；Selector 无当前产品级公开许可 | 同上 | GRADE-M886 |
| GRADE-M52 | M-52 | All Grades only in Gate 1 V0.1 | 目录：PRD/登记册；Selector 无当前产品级公开许可 | 同上 | GRADE-M52 |
| GRADE-M2377 | M-2377 | All Grades only；公共 UI 仅中性名称/链接 | 名称与批准 URL | 内部验证状态、行政分组含义、工艺、应用、推荐、差异、空标签 | GRADE-M2377 |
| GRADE-CR901 | CR-901 | All Grades only in Gate 1 V0.1 | PRD Specialty 角色；无当前产品级 Application 公开许可 | Chloride/Sulfate 归类或常规 pigment 等效 | GRADE-CR901 |

应用选型关系只有在对应 application mapping 为 `verified` 时才公开；本表不是自动推荐许可。

### 7.2 关系矩阵

| 关系类型 | 关联 Page ID | 为什么相关 | 本页如何呈现 | 对方页如何回链 |
|---|---|---|---|---|
| Home | HOME-001 | 首页把产品采购者送入 Hub | 入站，不重复首页定位 | Home Products 模块链接 PRODUCT-000 |
| Process | PRODUCT-PROC-CL / SU | 工艺辅助选型 | 两个中性入口 | Process breadcrumb/back-to-products |
| Product | 14 个 GRADE-* | 最终型号详情 owner | Selector 和 All Grades | Grade breadcrumb/back-to-products |
| Application | APP-000、APP-* | 泛应用内容和 broader selection owner | Selector 入口与 Support Paths | Application 只回链 verified 产品集合 |
| Market | MARKET-000、主要 Market 页 | 目的地采购、文件和市场上下文 | Support Paths，不写国家 supplier 正文 | Market 只推荐有依据型号或回 Hub |
| Document | DOC-000、CONV-DOC | 文件解释与受控申请 | Support Paths | Documents 通过 grade selection 回 Hub/Grade |
| Resource | RES-PROC 等 | 技术比较或研究意图 | 只有获批并上线才链接 | Resource 回到 Process/Hub/Grade |
| Conversion | CONV-RFQ | 独立报价行动 owner | Hero 和 Final RFQ | Back navigation 保留 source context |

## 8. 事实与证据登记

### 8.1 Evidence Register

Evidence ID 只作为模块表中的审计引用；每个 Evidence ID 必须唯一映射到一个已定义 Claim ID。需要组合多个基础事实时，由该 Claim 明确列出其组成和渲染门禁，不在引用处留下多义关系。

| Evidence ID | 证据定义 | 权威来源 | 资料日期 | 适用范围 | 验证状态 | 对应 Claim ID |
|---|---|---|---|---|---|---|
| IA-001 | 全站八项 Header、Products 当前项及 Home 可见文字入口 | 根 `AGENTS.md`；首页 V0.3 视觉稿与自检 | 2026-08-29 核对 | GLOBAL_HEADER | `verified_architecture` | CL-009 |
| IA-002 | PRODUCT-000 层级为 Home > Products | 页面登记册；页面—关键词主表 | 2026-08-29 核对 | BREADCRUMB、BreadcrumbList | `verified_architecture` | CL-010 |
| SEO-001 | PRODUCT-000 页面身份、主关键词、H1/Title 方向与 Hero CTA 层级 | 页面—关键词主表；当前用户设计决定 | 2026-08-29 | HERO、SEO 字段 | `design_direction_confirmed`；最终 copy 待 Gate 2 | CL-011 |
| TECH-MAP | 公开 Selector 结果必须来自逐项批准的应用—型号关系 | Gate 1 Evidence Audit；M-350 批准示例；Product SOP 候选矩阵 | 2026-08-29 逐关系审计 | GRADE_SELECTOR、BQ-03、BQ-04 | `PARTIALLY_VERIFIED`；只公开 Coatings→M-350、Printing Inks→M-350 | CL-004 |
| PROC-001 | 两个 Process Page ID、URL 与工艺 owner 边界 | 页面登记册；页面—关键词主表；PRD V0.4 | 2026-08-29 核对 | PROCESS_ROUTES | `verified_architecture` | CL-003 |
| PRODUCT-LIST | 14 个 Grade Page ID/URL、6/5/2/1 目录数量与 M-2377 中性公共行为的组合合同 | PRD V0.4；页面登记册；页面—关键词主表；Gate 0 审查决定 | 2026-08-29 核对 | ALL_GRADES、BQ-02 | `verified_architecture_with_internal_gate` | CL-017 |
| GUIDE-001 | 评估步骤只提示应核对的因素，不发布型号性能结论 | 产品页统一模板 V1.0；当前用户设计决定 | 2026-08-29 | EVALUATION_GUIDE、BQ-01 | `design_direction_confirmed`；最终 copy 待 Gate 2 | CL-012 |
| ROUTE-001 | Applications、Documents、Markets 作为各自 owner 路径；仅 route live 时渲染 | PRD V0.4；页面登记册；页面—关键词主表 | 2026-08-29 核对 | SUPPORT_PATHS | `route_status_required` | CL-013 |
| GEO-001 | Buyer Questions 仅回答本页选型、目录与下一步，不扩展技术事实 | PRODUCT-000 职责；当前用户设计决定；相关 Claim | 2026-08-29 | BUYER_QUESTIONS | `design_direction_confirmed`；最终答案待 Gate 2 | CL-014 |
| CONV-001 | RFQ 为独立行动 owner；只传递用户明确选择的上下文 | 当前用户设计决定；Conversion 架构 | 2026-08-29 | HERO、FINAL_RFQ、BQ-03、Q08 | `design_direction_confirmed`；接收页状态待复核 | CL-015 |
| IA-003 | Footer 仅使用已登记栏目、Contact、verified 主体信息与 RFQ；无已批准 Legal/Privacy Page ID | 根 `AGENTS.md`；54 页登记册；当前 Gate 0 审查决定 | 2026-08-29 | GLOBAL_FOOTER | `verified_architecture`；Legal/Privacy `NOT_IN_SCOPE` | CL-016 |

### 8.2 Claim Register

| Claim ID | 计划公开的事实或声明 | 类型 | 来源 | 资料日期 | 适用范围 | 验证状态 | 渲染决定 | 审核人 |
|---|---|---|---|---|---|---|---|---|
| CL-001 | Products Hub 有 14 个稳定 Grade 页面 | PRODUCT | PRD V0.4、登记册、主表 | 2026-08-29 | PRODUCT-000 | verified | RENDER | 总控待复核 |
| CL-002 | 14 型号按 6/5/2/1 四组展示 | PRODUCT | PRD V0.4 | 2026-08-29 | ALL_GRADES | verified | RENDER | 总控待复核 |
| CL-003 | Chloride 与 Sulfate 各有一个批准 Process 页面 | PRODUCT | 登记册、主表 | 2026-08-29 | PROCESS_ROUTES | verified | RENDER | 总控待复核 |
| CL-004 | 某应用下某型号可作为 evaluation direction | TECHNICAL | Gate 1 Evidence Audit；M-350 完整示例；Product SOP | 2026-08-29 | GRADE_SELECTOR | `PARTIALLY_VERIFIED` | 仅 SEL-COAT-M350、SEL-INK-M350 RENDER；其他候选 DO_NOT_RENDER | 技术 owner / 总控待复核 |
| CL-005 | PRODUCT-000 可在 All Grades 中公开 M-2377 名称与批准 URL；其他字段全部不得公开 | TECHNICAL / PRODUCT | PRD、项目状态、Gate 0 审查决定 | 2026-08-29 | PRODUCT-000 / M-2377 | verified internal restriction | `RENDER` 名称/链接；`DO_NOT_RENDER` 内部状态、行政分组含义、工艺、应用、推荐、差异和空标签 | 技术 owner / 总控 |
| CL-006 | M-996 与 M-2196 差异未确认 | TECHNICAL | PRD、项目状态 | 2026-08-29 | PRODUCT-000 / 两型号 | verified restriction | DO_NOT_RENDER 差异 | 技术 owner |
| CL-007 | Malaysia manufacturing/origin/traceability | ORIGIN | 当前本页无产品级批准证据 | 未提供 | PRODUCT-000 | `FACT_EVIDENCE_REQUIRED` | DO_NOT_RENDER | 合规 owner |
| CL-008 | 文件、样品、库存、价格或交付可用性 | DOCUMENT / LOGISTICS | 当前本页无批准业务证据 | 未提供 | PRODUCT-000 | `EVIDENCE_REQUIRED` | DO_NOT_RENDER 或 CONTROLLED_REQUEST_ONLY | 业务/合规 owner |
| CL-009 | Header 使用批准八项导航，Products 为当前项，Home 保留可见文字入口 | IA | 根 AGENTS.md、首页 V0.3 | 2026-08-29 | GLOBAL_HEADER | verified architecture | RENDER | 总控待复核 |
| CL-010 | Breadcrumb 为 Home > Products，并与可见层级及 Schema 一致 | IA / SEO | 登记册、主表 | 2026-08-29 | BREADCRUMB | verified architecture | RENDER | 总控待复核 |
| CL-011 | PRODUCT-000 Hero 围绕唯一主关键词，并使用 Find the Right Grade / Request a Quote 层级 | SEO / CONVERSION | 主表、当前用户设计决定 | 2026-08-29 | HERO | design direction confirmed | RENDER_AFTER_COPY_APPROVAL | 总控/用户 |
| CL-012 | 评估指南只说明应核对应用、工艺、技术资料、市场、文件与测试要求 | CONTENT | 产品页模板 V1.0、当前用户设计决定 | 2026-08-29 | EVALUATION_GUIDE | design direction confirmed | RENDER_AFTER_COPY_APPROVAL | 总控/用户 |
| CL-013 | Support Paths 只连接各自 owner 页面且仅在目标 route live 时渲染 | IA | PRD、登记册、主表 | 2026-08-29 | SUPPORT_PATHS | route status required | RENDER_IF_ROUTE_LIVE | 总控/开发项目复核 |
| CL-014 | Buyer Questions 只回答本页职责内的问题，不扩写无证据技术事实 | GEO / CONTENT | PRODUCT-000 职责、当前用户设计决定 | 2026-08-29 | BUYER_QUESTIONS | design direction confirmed | RENDER_AFTER_COPY_AND_EVIDENCE_APPROVAL | 总控/用户 |
| CL-015 | RFQ 为独立页面；预填只传递用户明确选择的 source/application/grade | CONVERSION | 当前用户设计决定、Conversion 架构 | 2026-08-29 | HERO / FINAL_RFQ | design direction confirmed | RENDER_IF_ROUTE_LIVE | 总控/Conversion owner |
| CL-016 | Footer 只渲染已登记/批准入口；Legal/Privacy 未登记，属于 PRODUCT-000 `NOT_IN_SCOPE` | IA / GOVERNANCE | 根 AGENTS.md、54 页登记册、Gate 0 审查决定 | 2026-08-29 | GLOBAL_FOOTER | verified architecture | Legal/Privacy DO_NOT_RENDER | 总控 |
| CL-017 | All Grades 由 14 个批准名称/URL 按 6/5/2/1 呈现；M-2377 仅中性名称/链接，其他字段按 CL-005 门禁 | PRODUCT / IA | CL-001、CL-002、CL-005 及其权威来源 | 2026-08-29 | ALL_GRADES | verified architecture with internal gate | 仅允许批准目录字段 RENDER | 总控 |

M-2377 的内部验证状态不得公开，只能用于内部渲染门禁与 QA。公共 UI 不得据此生成状态徽章、说明文案、空标签或独立视觉状态。

### 8.3 事实类别检查

- [x] 页面身份和产品数量已从批准架构核对。
- [x] M-2377、M-996/M-2196 冻结边界已登记。
- [x] Gate 1 已逐项审计当前候选；仅两条 M-350 关系具备现有公开许可，其他关系继续等待技术 owner 证据。
- [ ] 产品级制造、origin 和 traceability 未获证据；本页不渲染。
- [ ] 文件可用性、库存、产能、交期、运输和样品条件未获证据；本页不承诺。
- [x] 不使用竞品、搜索结果或旧站正文证明本公司能力。

### 8.4 不渲染字段

| 字段或模块 | 冻结原因 | Verification Status | 解冻所需证据 | 不阻塞的工作 |
|---|---|---|---|---|
| M-2377 internal status / administrative grouping / process / application / recommendation / differences / empty labels | 公开资料冲突；内部门禁不得成为公共文案 | TECHNICAL_VERIFICATION_REQUIRED | 最新批准 TDS 与技术决定 | 公共目录中性显示 `M-2377` 名称和批准 URL；Hub 其他内容 |
| M-996 vs M-2196 differences | 差异证据不足 | TECHNICAL_VERIFICATION_REQUIRED | 独立技术比较批准 | 两型号中性目录与独立链接 |
| Paper selector results | 当前没有已批准型号映射 | TECHNICAL_VERIFICATION_REQUIRED | Paper 应用—型号技术矩阵 | Paper 入口、空状态、Application/RFQ 路径 |
| origin/manufacturing/traceability claims | 公司/产品事实未核实 | FACT_EVIDENCE_REQUIRED | 已批准一方证据与公开措辞 | 整体页面结构与选型 |
| documents availability | 型号、市场和版本范围未核实 | FACT_EVIDENCE_REQUIRED | 当前文件目录和合规批准 | Documents 路由与受控申请说明 |
| stock/MOQ/lead time/price/shipping | 无运营批准资料 | EVIDENCE_REQUIRED | 运营和销售批准 | RFQ 入口 |

## 9. CTA 与转化合同

### 9.1 CTA 层级

| 层级 | CTA 文案方向 | 目标 URL | 触发位置 | 预填参数 | 成功定义 |
|---|---|---|---|---|---|
| Primary | Find the Right Grade | `#grade-selector` 页面内定位 | Hero | 无 | 买家到达并可操作 Selector |
| Secondary | Request a Quote | route key `CONV-RFQ` | Hero | `source_page=PRODUCT-000`；明确选择的 application/grade 才传递 | route approved/live 后到达独立 RFQ，显示可确认上下文 |
| Supporting | View Grade | 对应 Grade URL | Selector / All Grades | source page 可用于分析；不改 canonical | 到达正确型号页 |
| Supporting | Explore Chloride/Sulfate Grades | route key `PRODUCT-PROC-CL` / `PRODUCT-PROC-SU` | Process Routes | source page 可选 | route approved/live 后到达正确工艺页 |
| Supporting | Explore Applications/Documents/Markets | route key | Support Paths | source page 可选 | 到达已批准可用 owner 页面 |
| Final | Request a Quote | route key `CONV-RFQ` | Final RFQ | 同 Hero RFQ 规则 | route approved/live 后可提交；提交不表示批准 |

### 9.2 本页表单字段

`NOT_APPLICABLE`。PRODUCT-000 不内嵌 RFQ、Sample 或 Documents 表单。接收页面的字段与验证由对应 Conversion 任务卡定义。

### 9.3 接收流程状态要求

- [x] 预填只传递用户明确选择。
- [x] 候选结果不自动写成 selected grade。
- [x] 成功状态不得暗示报价、文件或样品已批准。
- [x] 服务失败必须提供经验证的替代联系路径。
- [x] 隐私和最少收集由 Conversion 页面负责。

## 10. 内部链接合同

### 10.1 入站链接

| 来源 Page ID | 来源模块 | 锚文本方向 | 传递的上下文 | 是否必须 |
|---|---|---|---|---|
| HOME-001 | Products | View All 14 Grades / Explore Products | 泛产品入口 | 是 |
| GLOBAL HEADER | Products | Products | 顶层导航 | 是 |
| GRADE-* | Breadcrumb / Back | Products / All titanium dioxide grades | 返回产品集合 | 是 |
| PRODUCT-PROC-CL / SU | Breadcrumb / Related | Products | 返回 Hub | 是 |
| APP-* | Product selection | Explore titanium dioxide grades | 应用上下文；仅已批准关系 | 条件 |
| MARKET-* | Product selection | Explore products / grades | 市场上下文 | 条件 |
| DOC-* | Grade selection | Choose a grade | 文件请求上下文 | 条件 |

### 10.2 出站链接

| 目标 Page ID | 目标 URL | 页面关系 | 锚文本方向 | 所在模块 | 用户下一步 |
|---|---|---|---|---|---|
| PRODUCT-PROC-CL | route key；登记册批准路径仅作解析来源 | Process child | Chloride process titanium dioxide | PROCESS_ROUTES | route live 后查看工艺和已验证型号 |
| PRODUCT-PROC-SU | route key；登记册批准路径仅作解析来源 | Process child | Sulfate process titanium dioxide | PROCESS_ROUTES | route live 后查看工艺和已验证型号 |
| GRADE-M350 | `/products/m-350/` | Grade child | M-350 | GRADE_SELECTOR / ALL_GRADES | 查看型号详情 |
| GRADE-M510 | `/products/m-510/` | Grade child | M-510 | 同上 | 同上 |
| GRADE-M896 | `/products/m-896/` | Grade child | M-896 | 同上 | 同上 |
| GRADE-M996 | `/products/m-996/` | Grade child | M-996 | 同上 | 同上 |
| GRADE-M2196 | `/products/m-2196/` | Grade child | M-2196 | 同上 | 同上 |
| GRADE-M895 | `/products/m-895/` | Grade child | M-895 | 同上 | 同上 |
| GRADE-M200 | `/products/m-200/` | Grade child | M-200 | 同上 | 同上 |
| GRADE-M108 | `/products/m-108/` | Grade child | M-108 | 同上 | 同上 |
| GRADE-M210 | `/products/m-210/` | Grade child | M-210 | 同上 | 同上 |
| GRADE-M340 | `/products/m-340/` | Grade child | M-340 | 同上 | 同上 |
| GRADE-M886 | `/products/m-886/` | Grade child | M-886 | 同上 | 同上 |
| GRADE-M52 | `/products/m-52/` | Grade child | M-52 | 同上 | 同上 |
| GRADE-M2377 | `/products/m-2377/` | Grade child | M-2377 | ALL_GRADES only | 通过中性名称/链接进入型号页；不附内部状态或其他字段 |
| GRADE-CR901 | `/products/cr-901/` | Grade child | CR-901 | ALL_GRADES only in Gate 1 V0.1 | 查看中性型号详情；Selector 关系无当前公开许可 |
| APP-000 / APP-* | route key | Application owner | Explore applications / specific application | SUPPORT_PATHS | 查看应用指导 |
| DOC-000 / CONV-DOC | route key | Document owner | View documents / Request documents | SUPPORT_PATHS | 查看或申请文件 |
| MARKET-000 | route key；不硬编码未验证 live 路径 | Market owner | Explore markets | SUPPORT_PATHS | route live 后选择目的市场 |
| CONV-RFQ | route key；不硬编码 planned conversion 路径 | Conversion | Request a Quote | HEADER / HERO / SELECTOR / BUYER_QUESTIONS / FINAL_RFQ / FOOTER | `RFQ_AVAILABLE=true` 后才渲染 CTA 与依赖行动文句；否则全部省略 |

### 10.3 导航

| 项目 | 记录值 |
|---|---|
| Header 状态 | 使用全站批准 Header，Products 为当前项，不自行修改 |
| Breadcrumb | `Home > Products` |
| Footer 入口 | 已登记顶层栏目、Contact、verified 主体信息、RFQ；Legal/Privacy 为 `NOT_IN_SCOPE`，未登记/批准前不渲染，PRODUCT-000 不新增页面或永久链接 |
| 上一层 Hub | `NOT_APPLICABLE`；本页即 Products Hub |
| 相关页面模块 | PROCESS_ROUTES、SUPPORT_PATHS、ALL_GRADES |

## 11. 视觉与响应式合同

### 11.1 视觉方向

| 字段 | 记录值 |
|---|---|
| 继承的视觉标准 | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md`，并采用首页 V0.3 的对比度修正 |
| 参考的已批准页面 | 首页 Industrial Editorial 基底；产品页 V1.0 信息层级 |
| 页面信息密度 | 中等偏高；选型和目录优先，不以大空白制造长度 |
| 图片策略 | 材料/应用氛围图；必须标明真实用途和授权；不作为实际产品、工厂或装运证明 |
| 图表或比较策略 | 使用步骤、细线和编辑式注释；不做参数对比、KPI、排名和 SaaS dashboard |
| 信任证据呈现 | 只在 verified 时出现；本页主要依靠清晰结构和证据边界建立信任 |
| 禁止使用的视觉暗示 | 价格卡、库存徽章、认证 badge、Malaysia 工厂/港口/仓库证明、旅游元素、巨大国旗、玻璃拟态 |

### 11.2 必须交付画面

- [ ] 桌面端完整页面。
- [ ] 手机端完整页面或连续关键帧。
- [ ] Header、Footer、breadcrumb。
- [ ] Hero 与两个 CTA。
- [ ] Selector 未选择、有结果、无结果，以及字段经内部门禁省略后的自然布局；公共 UI 不显示内部状态。
- [ ] All Grades 四组与 M-2377 中性名称/链接；无内部工作流徽章、工艺、应用、推荐、差异或空标签。
- [ ] 组展开/收起、hover、focus、selected。
- [ ] 无图片状态。
- [ ] Mobile menu open。
- [ ] 长标题、长说明和真实长度内容。

### 11.3 响应式检查

| 检查项 | Desktop | Tablet | Mobile | 通过标准 |
|---|---|---|---|---|
| Hero 信息和 CTA | 双栏可用 | 视宽度转单栏 | 单栏、CTA 可全宽 | 定位和行动不被视觉压制 |
| Header | 完整八项 | 可转折叠菜单 | Logo/Menu/RFQ + 完整菜单状态 | Home 可见，顺序正确 |
| Selector | 选项与结果同区 | 2–3 列调整 | 1–2 列，结果紧随 | 不横滑，不依赖 hover |
| Process Routes | 双列 | 双列/单列 | 单列 | 不表现性能胜负 |
| All Grades | 四组紧凑目录 | 两列组 | 可访问展开组 | 14 链接完整，无截断 |
| 字号与行长 | 宽容器内可读 | 合理换行 | Buyer Clean 可见文字原则上不低于 14px | 无拥挤或超长行 |
| 按钮后空白 | 受控 | 受控 | 无大段无目的空白 | 首屏后续内容自然进入 |
| 横向溢出 | 无 | 无 | 390px 无 | `scrollWidth` 不超过视口 |
| 固定 CTA | 非必需 | 非必需 | 如使用不得遮挡内容/UI | 可关闭或不使用 |

## 12. 开发交付合同

本节只定义交给 WordPress/Next.js 开发项目的内容与呈现结果；本项目不实施。

### 12.1 WordPress 内容需求

| 字段 Key | 字段名称 | 类型 | 是否必填 | 来源 | 验证状态 | 空值行为 |
|---|---|---|---|---|---|---|
| page_identity | 页面身份 | object | 是 | 登记册/主表 | verified | 页面不可交付 |
| seo | SEO 字段 | object | 是 | 任务卡 | draft → approved | 未批准不得发布 |
| hero | Hero 内容与 CTA | object | 是 | 页面内容 | draft → approved | 页面不可交付 |
| selector_options | 应用选项 | collection | 是 | 任务卡 | verified architecture | 缺失则隐藏 Selector 并保持目录 |
| selector_relations | 应用—型号关系 | relation collection | 条件 | 技术批准矩阵 | per relation status | 非 verified 关系不输出 |
| process_routes | 工艺入口 | route collection | 条件 | 登记册 | verified route | 只渲染完整 live 卡；两个目标均不可用则整模块不渲染 |
| grade_directory | 14 型号目录 | collection | 是 | PRD/登记册 | verified | 数量不等于 14 则阻塞交付 |
| evaluation_guide | 评估步骤 | rich text/list | 是 | 批准内容 | approved copy | 不渲染空模块 |
| support_paths | 下游 owner 路径 | route collection | 条件 | Route registry | route status | 未上线不渲染 |
| buyer_questions | 可见问答 | collection | 条件 | 批准内容/证据 | approved copy | 空则模块不渲染 |
| final_rfq | RFQ 收口内容 | object | 条件 | Conversion 合同 | approved live RFQ route | `RFQ_AVAILABLE=false` 时整模块及依赖文句不渲染；fallback 不复用该模块 |
| claim_status | 模块/关系状态 | enum map | 是 | Claim Register | verified/pending/not_public | 只输出 verified |
| schema_inputs | CollectionPage/ItemList/Breadcrumb | object | 是 | 可见内容 | verified | 不生成不一致 Schema |
| media | 图片和 ALT | asset collection | 条件 | 资产登记 | rights verified | 无图片时使用批准空状态，不跨站回退 |

所有数据必须属于 `site_scope=tio2-my`。具体数据模型由开发项目决定。

### 12.2 Next.js 呈现要求

| 模块 ID | 组件职责 | 输入字段 | 条件渲染 | 错误或空值状态 | 共享组件影响 |
|---|---|---|---|---|---|
| HERO | 展示主题和 CTA | hero、seo.h1、route states | 必填 | 按 `FULL_ROUTE_COPY` 选择 Intro/Meta；RFQ 不可用时 CTA 与依赖文句均省略 | 使用全站 Header/Button；开发项目评估 |
| GRADE_SELECTOR | 应用选择与结果 | options、verified relations | options 存在 | 无结果显示诚实空状态；交互失败保留目录 | 新交互职责；实现方式由开发决定 |
| PROCESS_ROUTES | 工艺入口 | approved routes | 每张卡对应 route approved + live | 1 个 live 渲染 1 张完整卡；0 个 live 整模块不渲染 | 可复用入口卡但不得改其他站行为 |
| ALL_GRADES | 四组 14 链接 | grade_directory | 必填 | 数量/URL 异常阻塞 | 可能复用产品卡；信息密度须符合本页 |
| EVALUATION_GUIDE | 展示评估步骤 | approved guide | 内容存在 | 空则不渲染 | 普通内容组件 |
| SUPPORT_PATHS | 下游导航 | route keys | route live | 全空则模块不渲染 | 路由解析不得跨 scope |
| BUYER_QUESTIONS | 可见答案块 | approved Q&A | 至少一项 | 全空则不渲染 | 不默认输出 FAQ/QAPage |
| FINAL_RFQ | RFQ 行动 | approved CTA + prefill | `RFQ_AVAILABLE=true` | false 时整模块不渲染；不得只隐藏按钮；fallback 需单独批准且不复用本模块 | 使用独立 Conversion 页面 |

### 12.3 SEO 与 GEO 机器可读字段

| 字段 | 记录值 |
|---|---|
| Title | `Titanium Dioxide Pigment Grades | TiO2 Malaysia`（草案方向，最终文案审查后锁定） |
| Full Meta Description | `Explore 14 titanium dioxide pigment grades by application, process, or model, then review product details or request a quote from TiO2 Malaysia.`（仅 `FULL_ROUTE_COPY=true`） |
| Route-safe Meta Description | `Browse 14 titanium dioxide pigment grades and review model pages for product details and technical evaluation with TiO2 Malaysia.`（`FULL_ROUTE_COPY=false`） |
| Canonical | `https://tio2malaysia.com/products/` |
| Robots | `index,follow`；发布前复核 |
| Open Graph | 与可见 Hero 一致；图片必须有使用权且不误导 |
| Hreflang | `NOT_APPLICABLE` |
| Sitemap | 包含唯一 canonical；不包含 selector 状态 URL |
| Breadcrumb Schema | Home → Products |
| Page-specific Schema | CollectionPage + ItemList；不使用列表页 Product rich-result 标记 |

### 12.4 非功能要求

- [ ] 页面不会读取或渲染其他 site scope 的内容。
- [ ] 14 个型号在初始可抓取内容中均有有效链接。
- [ ] Selector 不成为发现 Grade 页的唯一方式。
- [ ] 关系状态在公开输出前生效，受限值不泄漏到 HTML/JSON/API/Schema。
- [ ] 无脚本时核心目录和导航可用。
- [ ] 图片尺寸、格式、懒加载和首屏优先级由开发项目实现并验证。
- [ ] 页面无不可接受布局跳动、断链、失败请求或控制台错误。
- [ ] 交互状态和预填遵循最少数据原则。
- [ ] Process routes 的 2/1/0 状态分别为两张/一张/零张完整卡；零张时整模块缺席。
- [ ] RFQ 不可用时无 CTA、无 Final RFQ、无“分享需求”等依赖行动承诺；无批准 fallback 时不得自行生成替代链接。
- [ ] Metadata 与 Hero 按 `FULL_ROUTE_COPY` 唯一选择 full 或 route-safe 版本。

## 13. 可访问性合同

- [ ] 一个 H1，标题层级连续。
- [ ] Selector、组展开和所有链接可键盘操作。
- [ ] Focus 状态清晰且与首页视觉一致。
- [ ] 选中和无结果状态不只依赖颜色；内部受限状态不作为公共 UI 状态输出。
- [ ] 文本与 CTA 对比度达到适用要求；亮 Teal 不承载浅底小字。
- [ ] 图片有真实 ALT；装饰图空 ALT。
- [ ] 链接/按钮脱离上下文仍可理解。
- [ ] 动画尊重减少动态效果偏好。
- [ ] 触控目标和间距足够。
- [ ] 200% 缩放、390px 移动视口和长文本均保持可用。
- [ ] 任何技术图形都有文本等价表达。

## 14. 验收清单

### 14.1 策略与内容

- [ ] 页面职责和目标买家清楚。
- [ ] 模块顺序与批准设计一致。
- [ ] 页面不是 14 张产品卡片的简单列表。
- [ ] 两步选型器使用 verified 关系且不产生“最佳”结论。
- [ ] 14 型号、四组和 URL 完整唯一。
- [ ] M-2377、M-996/M-2196 边界正确。
- [ ] 没有复制 mytio2.com 正文。

### 14.2 SEO 与 GEO

- [ ] Primary Keyword、Title、H1、URL 和页面职责一致。
- [ ] 不侵占 Process、Grade、Application、Market 或 Documents。
- [ ] All Grades 提供 14 个可抓取链接。
- [ ] Canonical、Robots、Sitemap 和 selector 状态正确。
- [ ] CollectionPage、ItemList、Breadcrumb 与可见内容一致。
- [ ] Buyer Questions 有完整答案和证据边界。

### 14.3 视觉与移动端

- [ ] 延续批准首页 Industrial Editorial 体系。
- [ ] Selector 是最强功能模块但不是 SaaS dashboard。
- [ ] Desktop、Tablet、Mobile 均有验收依据。
- [ ] 默认、有结果、无结果、字段省略、展开和 focus 状态齐全；无内部工作流标签。
- [ ] 390px 无横向溢出或按钮后大空白。
- [ ] 无图片状态不破坏布局。

### 14.4 转化

- [ ] Hero 先选型、后 RFQ 的层级明确。
- [ ] Hub 不设置 Sample 主入口，不内嵌 RFQ 表单。
- [ ] source/application/grade 只传递用户明确选择。
- [ ] 成功、失败和隐私状态由独立 Conversion 页面完整处理。

### 14.5 开发交付与只读验收

- [ ] 交付包明确 `site_scope=tio2-my`。
- [ ] 字段、关系状态、条件渲染、route key 和空值行为完整。
- [ ] 本项目没有编写或修改开发代码。
- [ ] 外部开发提交可访问结果后，本项目只读检查视觉、移动端、内容、元数据、链接、Schema、SEO 和 GEO。
- [ ] 问题提交给开发项目处理，本项目不直接修代码。

## 15. 审核记录

### 15.1 问题记录

| Review ID | 级别 | 问题 | 影响 | 修正要求 | 责任人 | 状态 | 验证证据 |
|---|---|---|---|---|---|---|---|
| R-001 | BLOCKING | Products Playbook 与本任务卡草案尚未完成整体审查 | 不得进入正式内容架构/线框/视觉 | 总控复审 PASS，用户 2026-08-29 整体批准 | 总控/用户 | CLOSED | 本文档控制与 Gate 0 记录 |
| R-002 | IMPORTANT | 除 M-350 两条关系外，其他应用—型号候选缺少当前产品级公开证据 | 受影响 Selector 结果为空 | 保持 DO_NOT_RENDER；新证据到达后逐项复审 | 技术 owner | OPEN | Gate 1 Evidence Audit V0.1 |
| R-003 | IMPORTANT | Process、Applications、Documents、Markets、RFQ 目标未验证 live，且部分为 planned/provisional | 相关 CTA 条件渲染 | 使用 Page ID/route key；不硬编码；上线前复核 | 总控/开发项目 | OPEN | Route Audit V0.1 |
| R-004 | IMPORTANT | M-2377 工艺/应用与 M-996/M-2196 差异未解冻 | 内部门禁字段及差异文案 | M-2377 公共目录仅名称/链接；其他字段与 M-996/M-2196 差异保持不渲染 | 技术 owner | OPEN | 最新批准 TDS |
| R-005 | SUGGESTION | Title/H1/Meta 已在 Gate 2 V0.1 锁为审查候选，尚未获 Gate 2 批准 | 不阻塞草案审查 | 总控/用户审查候选文案 | SEO/content | RESOLVED_IN_DRAFT_PENDING_REVIEW | Content Architecture V0.1 |
| R-006 | IMPORTANT | 模块表和 Buyer Questions 的 Evidence ID 曾缺少唯一映射 | 证据不可审计 | 新增 Evidence Register；每个 Evidence ID 唯一映射一个 CL-001…CL-017 Claim | 页面执行任务 | CLOSED | 总控独立复验 PASS；8.1 / 8.2 |
| R-007 | IMPORTANT | M-2377 公共行为曾包含“受限状态”歧义 | 可能泄漏内部工作流或暗示应用 | 公共目录仅名称/批准 URL，其他字段不渲染 | 页面执行任务 | CLOSED | 总控独立复验 PASS；CL-005、U-005 |
| R-008 | IMPORTANT | Footer 曾包含未登记 Legal/Privacy 入口 | 可能新增未批准页面或永久链接 | 标记 PRODUCT-000 `NOT_IN_SCOPE`，未登记/批准前不渲染 | 页面执行任务 | CLOSED | 总控独立复验 PASS；CL-016 |
| R-009 | BLOCKING | Gate 1/2 草案尚未通过总控与用户审查 | Gate 3 不得开始 | 总控复审 PASS，用户批准 Gate 1/2 并授权 Gate 3 | 总控/用户 | CLOSED | 2026-08-29 Gate 1/2 批准记录 |
| G12-01 | IMPORTANT | Gate 2 买家可见英文曾泄漏内部 evidence/approval/publication 语言 | GEO/采购表达不自然 | 改为自然采购语言；Evidence ID 与状态只留非公开注释 | 页面执行任务 | CLOSED | 总控独立复验 PASS；用户 2026-08-29 批准 Gate 2 |
| G12-02 | IMPORTANT | Process/RFQ 不可用时的卡片、行动文句与 metadata 降级不唯一 | 可能留下无出口卡片或不可完成承诺 | 增加原子 Process 卡、RFQ 整体抑制和 full/route-safe Hero/Meta 合同 | 页面执行任务 | CLOSED | 总控独立复验 PASS；用户 2026-08-29 批准 Gate 2 |
| G3-01 | BLOCKING | Gate 3线框尚未获得总控与用户批准 | 不得进入Gate 4/5 | 总控复审PASS，用户2026-08-29批准Gate 3 | 总控/用户 | CLOSED | Gate 3批准记录 |
| G3-02 | IMPORTANT | 390px full-route 与 1440px strict route-safe 仅有文字状态合同，缺少实际反向组合线框 | 无法审查移动最大堆叠与桌面条件模块闭合 | 补390px full-route/Process 2+1/RFQ-on与1440px route-safe/Process 0/RFQ-off/Support 0 annotated delta frames | 页面执行任务 | CLOSED | 总控复审PASS；用户2026-08-29批准Gate 3 |
| G4-01 | BLOCKING | Gate 4视觉方向尚未获得总控与用户批准 | 不得进入Gate 5 | 总控复审 PASS，用户 2026-08-29 批准 Gate 4 并授权 Gate 5 | 总控/用户 | CLOSED | Gate 4 批准记录 |
| G4-02 | IMPORTANT | Gate 4 初稿先定义位置化 RFQ 样式，随后又要求单一通用 RFQ action style，合同相互矛盾 | Gate 5 可能抹平行动层级或让 Hero RFQ 超过选型主行动 | 两层 RFQ 合同经总控复审 PASS，用户 2026-08-29 批准 Gate 4 | 页面执行任务 | CLOSED | Visual Direction V0.1 approval record |
| G5-01 | BLOCKING | Gate 5 完整视觉稿尚未获得总控与用户批准 | 不得进入 Gate 6/7 或开发交付 | 审查 Buyer Clean Desktop/390px、route/viewport、组件状态、Internal Review 分离及全部硬门禁 | 总控/用户 | OPEN | Full Visual Design V0.1 待审 |
| G5-02 | IMPORTANT | 先前生成候选图出现或存在 standalone `Buy`、电商行动或 `Buyer Questions` 误绘风险 | 可能把 B2B 选型/RFQ 页面错误呈现为电商页面 | V0.3 继续执行批准 CTA allowlist、电商行动零命中和 Buyer Questions 精确文字检查 | 页面执行任务 | `PROJECT_CONTROL_REVIEW_PASS`；待用户批准，不 CLOSED | Full Visual Design V0.1 |
| G5-03 | BLOCKING | V0.2 主稿以灰色正文线替代 Gate 2 批准的真实 Buyer Clean 长文 | 无法审查真实字号、换行、信息密度和 GEO answer copy | V0.3/V0.4 以实际字体呈现批准的可见 Buyer Clean 原文 | 页面执行任务 | `PROJECT_CONTROL_REVIEW_PASS`；待用户批准，不 CLOSED | Full Visual Design V0.1 |
| G5-04 | BLOCKING | V0.2 Desktop 仅 864px 宽，Mobile 为三机合板而非可测量 390px 独立画布 | 无法可靠审查 1440 层级、390 字号、44px 触控区、横向溢出和 CTA 空白 | V0.4 提供实际 1440px Desktop；Mobile 为 780px 明确 2× 的 390px 连续长页，Manifest 记录真实尺寸 | 页面执行任务 | `PROJECT_CONTROL_REVIEW_PASS`；待用户批准，不 CLOSED | Full Visual Design V0.1 V0.4 manifest |
| G5-05 | IMPORTANT | 390px Full-route 反向状态缺少 compact Header RFQ，且公开标题曾使用审查缩写 | Full-route 七个 RFQ surface 不完整，Buyer Clean copy 与 Gate 2 不一致 | V0.4 保持 `Logo + Menu + RFQ`，使用 `Browse All 14 Titanium Dioxide Grades` 等精确标题 | 页面执行任务 | `PROJECT_CONTROL_REVIEW_PASS`；待用户批准，不 CLOSED | Mobile Full-route V0.4 |
| G5-06 | BLOCKING | 四张 V0.3 完整页面均遗漏 Breadcrumb | Header 与 Hero 之间缺少批准的导航层级与 BreadcrumbList 可见对应 | V0.4/V0.5 四张完整页均保留 `Home > Products`，顺序固定为 Header → Breadcrumb → Hero | 页面执行任务 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；不 CLOSED | Current full-page assets |
| G5-07 | BLOCKING | V0.3 1440px Desktop 退化为手机式单列构图 | 违反 Gate 3/4 的桌面响应与 Industrial Editorial Selection 基线 | Desktop V0.4 保留 Hero 7/5、Selector 左右工作区、Process 双卡、All Grades 2×2、Evaluation 3+2、Support 三卡和 BQ 1 展开 + 4 折叠 | 页面执行任务 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；不 CLOSED | Desktop Full-route/Route-safe V0.4 |
| G5-08 | IMPORTANT | Desktop Header 缺少 Products current state；Mobile Menu Open 也未明确当前栏目 | 当前栏目识别若只依赖颜色将违反批准导航与可访问性合同 | V0.4 使用 Products 粗体、显式 `CURRENT` 与结构性下划线/左标记；一级导航合同不变 | 页面执行任务 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；不 CLOSED | Desktop V0.4；Mobile Menu current-state board |
| G5-09 | BLOCKING | Mobile V0.4 把七个 Selector 选项压成普通内联文字 | 无法辨认独立控件或证明 44px logical 触控目标 | 两张 Mobile V0.5 均使用六个 2 列独立 chip + 全宽 Not Sure；每个 88px rendered = 44px logical，Coatings 含非纯颜色选中标记 | 页面执行任务 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；不 CLOSED | Two Mobile V0.5 assets |
| G5-10 | BLOCKING | Mobile Full-route V0.4 Final RFQ 主说明与限制说明视觉重叠 | Gate 2 文案不可读且 CTA 间距不可审查 | Mobile Full-route V0.5 使用实际测量的独立正文块；CTA 前后各 56px rendered = 28px logical，原文完整，Route-safe 仍 0px 缺席 | 页面执行任务 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；不 CLOSED | Mobile Full-route V0.5 |

### 15.2 Gate 批准记录

| Gate | 交付物 | 提交日期 | 总控结论 | 用户批准要求 | 批准日期 | 备注 |
|---|---|---|---|---|---|---|
| Gate 0 | 页面准入与任务卡 | 2026-08-29 | 总控复审 PASS；独立复验 21 PASS / 0 FAIL | 用户整体批准 Playbook V0.1 与 Brief V0.1，授权进入 Gate 1/2 | 2026-08-29 | 页面生命周期更新为 APPROVED_FOR_DESIGN；不含 Gate 2、线框、视觉或开发批准 |
| Gate 1 | Research/Evidence Audit V0.1 + Route Audit V0.1 | 2026-08-29 | 总控复审 PASS；25 PASS / 0 FAIL | 用户批准 Evidence Audit 与 Route Audit 当前门禁基线 | 2026-08-29 | R-002/R-003/R-004 保持 OPEN；不伪造解冻 |
| Gate 2 | PRODUCT-000 Content Architecture V0.1 | 2026-08-29 | 总控复审 PASS；G12-01/G12-02 通过独立复验 | 用户批准 Gate 2 基线 | 2026-08-29 | 仅授权进入 Gate 3，不含视觉或开发批准 |
| Gate 3 | `PRODUCT-000_WIREFRAME_SPEC_V0.1.md` | 2026-08-29 | 总控复审PASS；G3-02修订通过 | 用户批准Gate 3 | 2026-08-29 | `APPROVED_GATE_3_BASELINE`；G3-01/G3-02 CLOSED；仅授权进入Gate 4 |
| Gate 4 | `PRODUCT-000_VISUAL_DIRECTION_V0.1.md` | 2026-08-29 | G4-02 修订经总控复审 PASS | 用户批准 Gate 4 | 2026-08-29 | `APPROVED_GATE_4_BASELINE`；G4-01/G4-02 CLOSED；仅授权进入 Gate 5 |
| Gate 5 | `PRODUCT-000_FULL_VISUAL_DESIGN_V0.1.md` 及 7 张审查图 | 2026-08-29 | 总控复审 PASS；G5-02 至 G5-10 均为总控复审通过、待用户批准；Mobile V0.5 定向复验 54 PASS / 0 FAIL、两张新图 original-detail 2 PASS / 0 FAIL | Buyer Clean actual-1440 Desktop V0.4、390px@2× Mobile V0.5、七个 44px-logical Selector 控件、Final RFQ 无重叠、Breadcrumb 4/4、批准桌面构图、Products current state、真实 Gate 2 copy、条件闭合、组件状态、Internal Review 分离及电商行动零命中；仍需用户单独批准 Gate 5 |  | `DRAFT_FOR_GATE_5_REVIEW` / `DESIGN_IN_REVIEW`；G5-01、R-002/R-003/R-004 OPEN；G5-02 至 G5-10 均未 CLOSED；无 Gate 6/7 或开发授权 |
| Gate 6 | 总控审查 | 未开始 | 未审查 | 全部阻塞问题关闭 | 未批准 |  |
| Gate 7 | 开发交付 | 未开始 | 未审查 | 需完整交付包 | 未批准 | 本项目不执行开发 |
| Gate 8 | 外部开发 | 不属于本项目执行 | 外部状态 | 由开发项目管理 | 未授权 |  |
| Gate 9 | 只读视觉、SEO、GEO 验收 | 未开始 | 未审查 | 需可访问实现 | 未批准 | 本项目不直接修复 |
| Gate 10 | 发布授权 | 未授权 | 不适用 | 必须由用户单独授权 | 未授权 | 开发或 QA 完成不等于发布 |

## 16. 外部开发交付包

交给 `D:\16Wordpress_nextjs` 前必须具备：

- [ ] 已批准 PRODUCT_PLAYBOOK 路径。
- [ ] 已批准本任务卡路径。
- [ ] 已批准桌面端和手机端视觉稿路径。
- [ ] 最终可见文案和 Buyer Questions。
- [ ] 14 型号和关系矩阵的批准数据源。
- [ ] 图片、图标、授权和 ALT。
- [ ] WordPress 字段与示例数据。
- [ ] 呈现模块、条件渲染、空状态和错误状态说明。
- [ ] CTA、route key 和 RFQ 预填合同。
- [ ] SEO、GEO 与 Schema 字段。
- [ ] 内链和 breadcrumb 矩阵。
- [ ] 冻结和不渲染清单。
- [ ] 视口、状态、无障碍和只读 QA 清单。
- [ ] `site_scope=tio2-my` 及不得影响的其他站点边界。

## 17. 完成、只读验收与发布

Gate 1 Evidence Audit、Route Audit当前门禁基线、Gate 2 Content Architecture、Gate 3 Wireframe与Gate 4 Visual Direction已于2026-08-29经总控复审PASS并获用户批准。页面生命周期保持`DESIGN_IN_REVIEW`。当前仅授权Gate 5完整视觉设计；其成果在总控和用户单独批准前不得进入Gate 6/7或开发交付。

页面只有在内容、视觉、SEO、GEO、CTA、内链、Schema、响应式、无障碍和交付字段全部通过，且阻塞级问题关闭后，才能进入 `APPROVED_FOR_HANDOFF`。

外部开发完成后，本项目只读检查。只有批准交付包与可访问结果一致时，才可进入 `READ_ONLY_QA_APPROVED`。任何开发完成、合并、预览或只读 QA 通过都不等于发布授权。

## 18. 变更记录

| 版本 | 日期 | 变更类型 | 变更内容 | 批准来源 |
|---|---|---|---|---|
| V0.1 | 2026-08-29 | Gate 0 批准基线 | 建立 PRODUCT-000 页面合同；完成三项条件退回修订；总控复审 PASS；用户整体批准进入 Gate 1/2 | 用户批准；`APPROVED_FOR_DESIGN` |
| V0.1 / Gate 1–2 draft update | 2026-08-29 | Gate 1/2 草案登记 | 新增证据与 route 审计；CL-004 更新为部分 verified；登记 Content Architecture V0.1；Gate 1/2 仍待审 | 待总控/用户 Gate 1/2 审查 |
| V0.1 / Gate 1–2 review revision | 2026-08-29 | 条件退回修订 | 按 G12-01 移除买家可见内部治理语言；按 G12-02 锁定 Process/RFQ 原子条件渲染与 full/route-safe Hero/Meta；Gate 2 未批准，Gate 3 未开始 | 待总控 Gate 1/2 复审 |
| V0.1 / Gate 1–2 approval | 2026-08-29 | Gate 批准与生命周期同步 | 总控复审 PASS；用户批准 Gate 1/2；关闭 R-009、G12-01、G12-02；Gate 3 授权并进行中；R-002/R-003/R-004 保持 OPEN | 用户批准；`DESIGN_IN_REVIEW` |
| V0.1 / Gate 3 draft | 2026-08-29 | Gate 3 线框登记 | 新增桌面Full-route、390px route-safe、Tablet响应与Selector/Process/RFQ/菜单状态板；页面执行自检33 PASS / 0 FAIL | 待总控/用户 Gate 3 审查 |
| V0.1 / Gate 3 review revision | 2026-08-29 | G3-02 条件退回修订 | 补充390px full-route最大堆叠与Process单卡差异，以及1440px strict route-safe的Process/RFQ/Support零状态闭合；修订自检38 PASS / 0 FAIL；G3-02总控复审PASS，Gate 3仍未批准 | 待用户 Gate 3 最终批准 |
| V0.1 / Gate 3 approval | 2026-08-29 | Gate批准与下一阶段授权 | 用户批准Gate 3；关闭G3-01/G3-02；Wireframe升级为批准基线；Gate 4授权并进行中；Gate 5未授权 | 用户批准；`DESIGN_IN_REVIEW` |
| V0.1 / Gate 4 draft | 2026-08-29 | Gate 4视觉方向登记 | 新增Industrial Editorial Selection方向，覆盖品牌延续、可访问色彩、字体、Selector/目录/Process/Support/RFQ状态、图片边界与未来Gate 5画面合同；自检45 PASS / 0 FAIL | 待总控/用户Gate 4审查 |
| V0.1 / Gate 4 review revision | 2026-08-29 | G4-02 条件退回修订 | 将矛盾的单一 RFQ 样式要求改为两层视觉合同：Header/Final 使用 Teal solid，Hero/Selector/BQ 使用 secondary outline/text link；同层级交互一致，Hero RFQ 不得超过 Find the Right Grade；Gate 4 仍未批准 | 待总控 Gate 4复审；`DESIGN_IN_REVIEW` |
| V0.1 / Gate 4 re-review | 2026-08-29 | G4-02 总控复审记录 | 总控确认两层 RFQ 合同唯一且可执行，旧矛盾句已清除；品牌色、对比度、route/RFQ、390px、图片证据与冻结边界未改变 | G4-02 `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；Gate 4 未批准 |
| V0.1 / Gate 4 approval | 2026-08-29 | Gate批准与下一阶段授权 | 用户批准Gate 4；关闭G4-01/G4-02；Visual Direction升级为批准基线；Gate 5授权并进行中；Gate 6/7未授权 | 用户批准；`DESIGN_IN_REVIEW` |
| V0.1 / Gate 5 draft | 2026-08-29 | Gate 5 完整视觉稿登记 | 新增 Desktop Full-route、390px Route-safe、反向 route/viewport、Buyer Clean 组件状态及独立 Internal Review 附录；保持全部 Gate 2/3/4 合同 | 待总控/用户 Gate 5 审查；`DESIGN_IN_REVIEW` |
| V0.1 / Gate 5 copy-control revision | 2026-08-29 | G5-02 文案硬门禁修订 | 无效化存在 `Buy`/电商行动或关键文字误绘风险的候选图；登记 Desktop/Mobile V0.2；增加 Buyer Questions 精确文字、批准 CTA allowlist 和电商词零命中检查 | 待总控复审；Gate 5 未批准 |
| V0.1 / Gate 5 verification | 2026-08-29 | Gate 5 自检记录 | 治理/路径/合同验证 49 PASS / 0 FAIL；五张正式资产逐图复核 5 PASS / 0 FAIL；电商行动零命中；条件模块闭合与无大空白通过 | 提交总控 Gate 5 审查；Gate 5 未批准 |
| V0.1 / Gate 5 V0.3 targeted revision | 2026-08-29 | G5-03/G5-04/G5-05 条件退回修订 | 以实际 1440px Desktop 和 780px 明确 2× Mobile 连续长页替换旧主稿/反向板；全部主页面长文恢复为 Gate 2 真实文案；恢复 Mobile Full-route compact Header RFQ 与精确公开标题；G5-02 记录为总控复审 PASS | 提交总控定向复审；Gate 5 未批准，Gate 6/7 未授权 |
| V0.1 / Gate 5 V0.3 targeted verification | 2026-08-29 | Gate 5 定向复验 | 尺寸、Manifest、Gate 2 copy、route/RFQ、14 型号、冻结项、电商行动、占位禁令和 Markdown 共 54 PASS / 0 FAIL；六张正式资产 original-detail 逐图 6 PASS / 0 FAIL | 提交总控定向复审；Gate 5 未批准 |
| V0.1 / Gate 5 V0.4 baseline-restoration revision | 2026-08-29 | G5-06/G5-07/G5-08 条件退回修订 | 四张完整页恢复 `Home > Products`；Desktop 恢复 Gate 3/4 的 7/5、5/7、双卡、2×2、3+2、三卡和 BQ 1+4 构图；Desktop/Mobile Menu 恢复非纯颜色 Products current state；V0.3 主稿移出正式 Manifest | 提交总控复审；Gate 5 未批准，Gate 6/7 未授权 |
| V0.1 / Gate 5 V0.4 targeted verification | 2026-08-29 | Gate 5 定向复验 | 七张正式资产尺寸、Breadcrumb 4/4、桌面模块关系、Products current state、route/freeze/copy/ecommerce/Markdown 共 63 PASS / 0 FAIL；七张资产 original-detail 逐图 7 PASS / 0 FAIL | 提交总控复审；Gate 5 未批准 |
| V0.1 / Gate 5 Mobile V0.5 minimal revision | 2026-08-29 | G5-09/G5-10 条件退回修订 | 只替换两张 Mobile 主稿：Selector 改为 7 个独立 44px-logical 控件；Full-route Final RFQ 改为动态测量的正文块，CTA 前后 28px logical；Desktop V0.4 和状态板不重做 | 提交总控复审；Gate 5 未批准，Gate 6/7 未授权 |
| V0.1 / Gate 5 Mobile V0.5 targeted verification | 2026-08-29 | Gate 5 定向复验 | 七张正式资产尺寸、7/7 Selector 控件、44px logical 触控、Final RFQ 动态块/28px logical CTA 前后间距、route/freeze/ecommerce/Markdown 共 54 PASS / 0 FAIL；两张新 Mobile 资产 original-detail 逐图 2 PASS / 0 FAIL | 提交总控复审；Gate 5 未批准 |
| V0.1 / Gate 5 Mobile V0.5 project-control re-review | 2026-08-29 | Gate 5 总控复审记录 | 总控独立确认两张 Mobile V0.5 尺寸、G5-09 七个独立控件、G5-10 Final RFQ 无 overlap/crop、Route-safe 模块缺席，以及 Desktop/Breadcrumb/current-state/14 型号/冻结边界和七张正式资产目录继续通过 | G5-09/G5-10 `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；Gate 5 待用户最终批准，批准日期留空 |
