# Markets Page Brief V0.1

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| 文档名称 | Markets Page Brief |
| Page ID | `MARKET-000` |
| Brief 版本 | V0.1 |
| 创建日期 | 2026-08-29 |
| 最后更新日期 | 2026-09-04 |
| 页面负责人 | Markets 页面执行任务 |
| 总控审核人 | 项目总控与质量审查 |
| 用户批准记录 | 2026-08-29：用户批准 MARKET-000 Gate 0、Gate 1 与 Gate 2；2026-08-30：用户明确批准 Gate 3 与 Gate 4；同日批准 PRODUCT 关系 V0.3、`GLOBAL_HEADER_FOOTER_SPEC_V0.2` 与 fixed-RFQ 视觉包；2026-08-31：用户批准 MARKET-000 Gate 5、授权 Gate 6、批准 production SVG Logo 品牌方向并确认使用权，随后授权 MARKET-000 进入 Gate 7；2026-09-04：用户要求基于实际 D16 实现执行正式 Gate 9 只读 QA |
| 批准范围 | Gate 0–5 基线获批；Gate 6、Gate 7 与 Gate 9 已获项目总控 PASS。Gate 9 disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；Gate 10、发布、索引及任何 Market 子页均未获授权 |
| Gate 0 状态 | `APPROVED` |
| 页面生命周期 | `READ_ONLY_QA_APPROVED`；Gate 9 disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS` |
| Mapping Status | `APPROVED_NAVIGATION_HUB` |
| Verification Status | `NO_DIRECT_KEYWORD_TARGET` |
| 本版变更摘要 | 2026-09-04 项目总控接受 `616193f3…` 的 Gate 9 定向复验：Canonical/308 自身 P0 CLOSED，`MARKET-000-G9-ROQA-02=PROJECT_CONTROL_REVIEW_PASS / CLOSED`，生命周期升级为 `READ_ONLY_QA_APPROVED`。子页/APP/RFQ 与全站 route cleanliness 仍为外部依赖/发布门禁，未解冻；Gate 10 未授权 |

本任务卡只授权视觉、SEO、GEO、页面内容架构、开发交付规格和开发完成后的只读质量验收。它不授权 WordPress、Next.js、CMS、组件、样式、测试、部署、DNS、索引、发布或任何代码修改。

## 1. 页面身份

| 字段 | 记录值 |
|---|---|
| Page ID | `MARKET-000` |
| Section | `MARKETS` |
| Page Name | Markets |
| URL | `/markets/`；当前批准稳定 URL |
| Page Type | Navigation hub |
| Playbook Key | `MARKET` |
| Market | `GLOBAL` |
| Language | `EN` |
| Priority | `P1` |
| Planned Domain | `https://tio2malaysia.com` |
| Site Scope | `tio2-my` |
| External Development Workspace | `D:\16Wordpress_nextjs`；仅由外部开发项目负责 |
| Canonical URL | `https://tio2malaysia.com/markets/` |
| Indexing Intent | `INDEX, FOLLOW`；无独立主关键词但作为可索引导航中心，发布前复核 |

## 2. 权威输入

| 顺序 | 资料 | 路径或来源 | 本页用途 | 状态 |
|---:|---|---|---|---|
| 1 | 用户当前批准决定 | 本任务 2026-08-29 对话 | 四市场、EU 展开、信息架构、SEO/GEO/CTA 和视觉方向 | 已纳入 2026-08-29 Gate 0 批准基线 |
| 2 | 根项目治理 | `AGENTS.md`、`00_PROJECT_STATUS.md`、`01_PROJECT_INDEX.md`、`02_DIRECTORY_GUIDE.md` | 范围、状态、目录和 Gate 规则 | 当前基线 |
| 3 | 页面登记册 | `docs/architecture/PAGE_REGISTRY_V0.1.md` | Page ID、URL、类型、状态、12 页体系 | 当前登记册 |
| 4 | 最新 PRD | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | Markets 层级、职责、Market 页面标准和边界 | 当前批准基线 |
| 5 | 页面—关键词主表 | `research/keyword/11_page_keyword_master.csv` | SEO、搜索意图、排除词和内耗边界 | 当前实施主表 |
| 6 | Markets Playbook | `docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md` | Hub 与 Market landing page 共用规则 | `APPROVED_FOR_DESIGN / GATE_0_APPROVED_BASELINE` |
| 7 | 页面任务卡模板 | `docs/page-briefs/PAGE_BRIEF_TEMPLATE.md` | 本任务卡字段与审核结构 | V0.2 当前模板 |
| 8 | 视觉标准 | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md` | 品牌视觉基线 | Approved Visual Direction |
| 9 | 已批准首页 | `pages/home/04_planning/04_homepage_full_visual_design_v0.3.md` 及 V0.3 自检和视觉图 | Industrial Editorial、对比度、手机端和状态继承 | 项目状态和用户当前指令确认 |
| 10 | Products 治理参考 | `docs/page-playbooks/PRODUCT_PLAYBOOK_V0.1.md`、PRODUCT-000 Brief 及 Gate 1/2 草案 | Gate 颗粒度、证据 ID、route 门禁和 Buyer Clean 边界 | 只作治理参考，不复制结构 |
| 11 | 产品页统一模板 | `docs/product-pages/01_Product_Page_Template_and_Content_Spec_V1.0.md` | Market 与 Product 的职责、route key 和事实门禁 | 按用户当前指令作为参考输入 |
| 12 | MARKET-000 Gate 1 批准基线 | `pages/markets/01_research/`、`pages/markets/02_analysis/` | 市场事实、route、localization 与 freshness 门禁 | `APPROVED_GATE_1_BASELINE`；MKT-R002–005 继续 OPEN |
| 13 | MARKET-000 Gate 2 Content Architecture | `pages/markets/04_planning/MARKET-000_CONTENT_ARCHITECTURE_V0.1.md` | 最终模块叙事、英文文案、SEO/GEO、CTA/内链和状态矩阵 | `APPROVED_GATE_2_BASELINE`；仅授权 Gate 3 |
| 14 | MARKET-000 Gate 3 Wireframe | `pages/markets/04_planning/wireframes/MARKET-000_WIREFRAME_SPEC_V0.1.md` | Desktop、Tablet 响应逻辑、390px Mobile 与 S0–S6 条件状态 | `APPROVED_GATE_3_BASELINE`；用户 2026-08-30 批准；仅授权 Gate 4 |
| 15 | MARKET-000 Gate 4 Visual Direction | `pages/markets/04_planning/visual-directions/MARKET-000_VISUAL_DIRECTION_V0.1.md` | 色彩、字体、页面节奏、模块视觉、状态、图片边界与 Gate 5 画面合同 | `APPROVED_GATE_4_BASELINE`；用户 2026-08-30 批准；仅授权 Gate 5 |
| 16 | PRODUCT 关系 V0.3 与 MARKET-000 影响审计 | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`；`pages/markets/02_analysis/MARKET-000_PRODUCT_RELATION_IMPACT_AUDIT_V0.3.md` | 当前唯一 Product/Application/Process 关系源、Markets 零行级渲染边界、M-2377 更新、M-996/M-2196 comparison hold、GEO/Schema | 源=`APPROVED_RELATION_BASELINE / USER_APPROVED`；影响审计=`PROJECT_CONTROL_REVIEW_PASS / CLOSED`；V0.2.1 仅作历史 |
| 17 | MARKET-000 Gate 5 Full Visual Design | `pages/markets/04_planning/visual-designs/MARKET-000_FULL_VISUAL_DESIGN_V0.4.md` | Desktop/390px/768px、EU disclosure、menu/focus、long copy、fixed RFQ、route/PT-BR/Trade 与关系清洁验证 | `APPROVED_GATE_5_BASELINE`；用户 2026-08-31 批准；`G5-01=CLOSED` |
| 18 | 全站唯一 Header / Mobile Menu / Footer 基线与 Task 2 公共状态板 | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.1.md`；`pages/home/04_planning/06_global_header_footer_component_states_v0.1.md`；`pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_DESKTOP_STATES_V0.1.png`；`pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_MOBILE_STATES_V0.1.png` | 仅约束全局 Header、Mobile Menu、Footer 的品牌、结构、状态、响应与可访问性；不得改变 MARKET-000 正文 | Global Chrome=`APPROVED_GLOBAL_CHROME_BASELINE`；Task 2 公共状态板已获总控复审 PASS；Task 5 已解锁 |
| 19 | MARKET-000 Global Chrome Task 5 Full Visual Design | `pages/markets/04_planning/visual-designs/MARKET-000_FULL_VISUAL_DESIGN_V0.2.md` | 四张 V0.3 完整页、Responsive Component States V0.2、正文像素冻结及 Header/Footer 条件状态证明 | `DRAFT_FOR_GLOBAL_CHROME_REVIEW`；GHC-MARKET-01=`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；不改变 Gate 5 正文审批状态 |
| 20 | Fixed-RFQ Global Chrome V0.2、Home Task 2 共享基线与 MARKET Task 5 | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.2.md`；`pages/home/04_planning/07_global_header_footer_component_states_v0.2.md`；`pages/home/04_planning/05_homepage_full_visual_design_v0.5.md`；两张 `GLOBAL_CHROME_*_STATES_V0.2.png`；`pages/markets/04_planning/visual-designs/MARKET-000_FULL_VISUAL_DESIGN_V0.3.md` | S0–S6 固定 Global Chrome RFQ、共享 Header/Footer、四段正文像素保护、V0.4/V0.3 正式资产和独立审查项 | Global Spec=`APPROVED_GLOBAL_CHROME_BASELINE`；MARKET V0.3/V0.4=`APPROVED_FIXED_RFQ_VISUAL_BASELINE`；GHF-FIXED-RFQ-MARKET-01=`APPROVED / CLOSED`；用户批准 2026-08-30 |
| 21 | MARKET-000 Gate 5 Final-Review Baseline | `pages/markets/04_planning/visual-designs/MARKET-000_FULL_VISUAL_DESIGN_V0.4.md`；Desktop/Mobile/Tablet V0.5 与 Responsive States V0.4 | 受控删除正文重复 RFQ、强化目的市场链接形态、收敛 FAQ、补齐 390px/768px 完整响应证据 | `APPROVED_GATE_5_BASELINE`；`MARKET-000-G5-FRC-01=APPROVED / CLOSED`；用户批准 2026-08-31 |
| 22 | MARKET-000 Gate 5 Approved Baseline Manifest | `pages/markets/05_review/MARKET-000_GATE5_APPROVED_BASELINE_MANIFEST_V0.1.md` | 当前 V0.4 规格与四张批准资产的尺寸、字节数、SHA-256 和锁定内容 | `APPROVED_GATE_5_BASELINE`；四张 PNG 不变 |
| 23 | MARKET-000 Gate 6 SEO/GEO/Schema Contract | `pages/markets/04_planning/MARKET-000_SEO_GEO_SCHEMA_CONTRACT_V0.1.md` | Metadata、GEO、Schema、10 Market actions、22 route 分期、PT-BR/Trade/PRODUCT 边界、Logo dependency 和 Gate 7 字段库存 | `GATE6_PROJECT_CONTROL_REVIEW_PASS / USER_GATE7_AUTHORIZED` |
| 24 | MARKET-000 Gate 6 Audit and Submission | `pages/markets/05_review/MARKET-000_GATE6_AUDIT_AND_ACCEPTANCE_V0.1.md`；`pages/markets/05_review/MARKET-000_GATE6_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md` | 完整 Gate 6 审查与总控提交入口 | `MARKET-000-G6-PCR-02=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；Gate 7 已授权编制但未批准 handoff |
| 25 | Production SVG Logo authority | `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md`；`docs/architecture/GLOBAL_HEADER_FOOTER_LOGO_ASSET_ADDENDUM_V1.0.md`；`docs/architecture/GLOBAL_LOGO_CROSS_PAGE_REGISTRY_V1.0.md` | 全站 production asset keys、路径/hash 权威、Global Chrome 绑定与 Markets 跨页登记 | `APPROVED_PRODUCTION_SVG_BASELINE / ACTIVE`；B04/B05 CLOSED |
| 26 | MARKET-000 Gate 7 package | `pages/markets/06_handoff/MARKET-000_GATE7_HANDOFF_PACKAGE_V0.1.md`；CMS/API/Component Mapping；Acceptance and Blockers；Manifest | 页面、内容、route、SEO/GEO/Schema、视觉、a11y、字段、scope 与 Gate 8/9 合同 | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_GATE_7_HANDOFF_BASELINE`；未 handoff |
| 27 | MARKET-000 Gate 7 project-control submission | `pages/markets/06_handoff/MARKET-000_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md` | Gate 7 总控审查入口 | `MARKET-000-G7-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；Gate 8 锁定 |
| 28 | MARKET-000 Gate 9 review package | `pages/markets/07_qa/MARKET-000_GATE9_READ_ONLY_QA_EVIDENCE_V0.1.md`；Findings；Submission；Current Manifest | 实际实现身份、fresh tests/build/browser、22-route、SEO/GEO/Schema、a11y 与 release blocker 证据 | 历史 conditional return 已由定向复验关闭；Gate 10 锁定 |
| 29 | MARKET-000 Gate 9 targeted re-review | `pages/markets/07_qa/MARKET-000_GATE9_TARGETED_REREVIEW_EVIDENCE_V0.1.md`；Targeted Closure Submission | `616193f3…` 的 Canonical/308 修复、proxy/API 回归、四视口与外部门禁复验 | `PROJECT_CONTROL_REVIEW_PASS`；P0-01 CLOSED；Gate 10 锁定 |
| 30 | MARKET-000 Gate 9 closure | `pages/markets/07_qa/MARKET-000_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md` | 项目总控最终 Gate 9 决定、生命周期、开放发布门禁与 Gate 10 边界 | `MARKET-000-G9-ROQA-02=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS` |

### 2.1 输入冲突记录

| Conflict ID | 冲突内容 | 涉及资料 | 影响字段或模块 | 当前处理 | 决定人 | 决定日期 |
|---|---|---|---|---|---|---|
| MKT-C001 | 登记册生命周期示例早于根章程当前词汇 | PAGE_REGISTRY V0.1、根 AGENTS.md | 页面生命周期 | 使用根章程当前状态；Gate 0 批准后为 `APPROVED_FOR_DESIGN` | 项目治理优先级 | 2026-08-29 |
| MKT-C002 | Visual Standard 的亮 Teal CTA 与首页 V0.3 对比度修正不同 | Visual Standard、Homepage V0.3 | CTA、小文字颜色 | 使用 `#007F77` 承载浅底文字/实心 CTA；`#00A99D` 只作非文字强调 | 最新批准页面基线 | 2026-08-29 |
| MKT-C003 | 首页 V0.3 文件仍写“等待复审”，项目状态和用户当前指令称首页已批准 | 首页文档、项目状态、当前用户指令 | 视觉参考状态 | 以较高优先级的当前状态和用户指令为准；只继承品牌，不复制结构 | 用户/项目状态 | 2026-08-29 |
| MKT-C004 | EU 在内容上为父级，六国 URL 与 EU 页同属 `/markets/` 平级 | PRD、登记册、主表 | IA、内链、Breadcrumb/Schema | 保持 URL；用可见分组、内链和实体关系表达 EU 父子关系 | 用户已批准 A/A1 方向 | 2026-08-29 |
| MKT-C005 | PRD 要求 Hub 说明市场应用、文件和供应关注点，但缺少当前事实证据包 | PRD、项目状态 | MARKET_CHOICE_GUIDE、市场摘要 | Gate 0 定义字段；Gate 1 核验后才形成公开事实 | 项目治理 | 2026-08-29 |
| MKT-C006 | Brazil PT-BR URL 和语言策略暂定 | 登记册、主表、项目状态 | Brazil 入口、Canonical、hreflang、Schema | 使用 Page ID/route key；未批准不公开、不进入 Schema/hreflang | 项目治理 | 2026-08-29 |
| MKT-C007 | 下游 Applications、Documents、Resources、Conversion 存在 planned/provisional/live 未知状态 | 登记册、主表、项目状态 | PROCUREMENT_PATHS、TRADE_BOUNDARY、RFQ | 只记录 Page ID/route key；满足批准、freshness 和 live 条件后渲染 | 项目治理 | 2026-08-29 |

以上冲突不改变 MARKET-000 的 Page ID、URL、页面类型、主关键词状态或职责。MKT-C005–C007 在 Gate 0 批准后继续冻结相关事实、语言或链接，并由 Gate 1 草案保持对应门禁。

## 3. 页面策略

### 3.1 目标采购商

| 字段 | 记录值 |
|---|---|
| 主要买家角色 | TiO2 采购、技术采购、进口/分销采购和供应链负责人 |
| 次要买家角色 | 配方/应用评估、质量、合规、文件和出口协调人员 |
| 所在市场 | European Union、United Kingdom、India、Brazil；EU 内重点为 Germany、Italy、Spain、Poland、Netherlands、Belgium |
| 行业与应用 | Coatings、Plastics、Masterbatch、Printing Inks、Paper 及有证据的 Specialty 采购场景 |
| 采购阶段 | Navigation → Supplier Search → Technical Evaluation → RFQ |
| 已知问题 | 可能只知道目的市场；可能需要在 EU 总页与国家页之间选择；可能尚未确定产品或文件路径 |
| 主要顾虑 | 进入错误市场页、重复法规信息、市场事实是否当前、产品/文件/询价下一步是否清楚 |
| 需要完成的判断 | 选择正确 Market page，并理解之后应核对 Products、Applications、Documents、Resources 或 RFQ |
| 页面访问后的理想下一步 | 进入正确目的市场页；或进入 Products/Documents；或在明确上下文后进入 RFQ |

### 3.2 页面职责

| 项目 | 记录值 |
|---|---|
| 一句话页面职责 | 按目的市场把采购商导向 EU、UK、India 或 Brazil 的正确采购页面，并解释 EU 总页与六个国家页的选择关系以及后续产品、文件、贸易信息和询价路径 |
| 必须解决的核心问题 | 有哪些市场体系；何时进入 EU 总页或国家页；市场页能帮助核对什么；时效性贸易信息在哪里；如何继续产品、文件或询价 |
| 对全站采购路径的贡献 | 连接 Home、11 个 Market landing pages、Products、Applications、Documents、Resources 与 RFQ |
| 主转化目标 | 完成一次正确的目的市场路径选择 |
| 次转化目标 | 进入合适的采购核对 owner 页面或带明确市场上下文进入 RFQ |
| 页面成功信号 | 四市场点击、EU 六国点击、Products/Documents/Resources 路径点击、有效 RFQ 点击；不以停留时长或虚构“推荐”代替成功 |

### 3.3 明确不负责

| 排除事项 | 原因 | 正确承接 Page ID | 正确承接 URL/方式 |
|---|---|---|---|
| Europe/EU supplier 商业主词 | EU 页面是唯一 owner | MARKET-EU-001 | `/markets/european-union/` |
| 六个 EU 国家 supplier 主词 | 各国家页独占显式国家意图 | 对应 MARKET-EU-* | 登记册批准 URL |
| UK、India、Brazil supplier 主词 | 对应 Market landing page 独占 | MARKET-UK-001 / MARKET-IN-001 / MARKET-BR-EN / MARKET-BR-PT | 对应批准或暂定路由 |
| 泛产品、工艺和型号详情 | Products 是产品 owner | PRODUCT-000 / PRODUCT-PROC-* / GRADE-* | Page ID/route key |
| 泛应用选型正文 | Applications 是应用 owner | APP-000 / APP-* | Page ID/route key；部分 URL 暂定 |
| REACH、TDS/SDS/COA、COO 解释与可用性 | Documents 是文件 owner | DOC-* / CONV-DOC | Page ID/route key；受证据和流程门禁 |
| 制造、Malaysia origin 和 traceability 证明 | About/COO Documents 是事实 owner | ABOUT-001 / DOC-COO | `/about/` 或批准 route key |
| 贸易政策详细结论 | Resources Trade Update 是时效性 owner | RES-TRADE-EU/UK/IN/BR | 仅在内容当前且 route live 后链接 |
| 报价表单 | Conversion 是行动 owner | CONV-RFQ | route key；本页不内嵌表单 |
| Sample 或 Documents 申请 | 独立 Conversion 流程负责 | CONV-SAMPLE / CONV-DOC | 仅在相关采购上下文中导流 |
| 当地办公室、仓库、库存、港口和物流能力 | 无当前证据且不属于导航职责 | EVIDENCE_REQUIRED | 未验证不渲染 |

## 4. SEO、GEO 与搜索意图合同

| 字段 | 记录值 |
|---|---|
| Primary Keyword | `NO_PRIMARY_KEYWORD` |
| Secondary Keywords | `EU \| United Kingdom \| India \| Brazil`；只作导航实体标签 |
| Search Intent | `N`；按目的市场导航 |
| Buyer Stage | Navigation |
| Source Cluster | `MARKET-EU-01 \| MARKET-UK-01 \| MARKET-IN-01 \| MARKET-BR-EN` |
| Excluded Keywords | `all country-level supplier keywords` |
| Cannibalization Boundary | This hub must not compete with individual market pages |
| H1 方向 | `Choose Your Destination Market` |
| Title 方向 | `Markets for Titanium Dioxide Procurement \| TiO2 Malaysia` |
| Meta Description 方向 | 说明按 EU、UK、India、Brazil 选择采购页面，并继续核对产品、文件或报价；不包含供应、法规、物流或可用性承诺 |
| Slug | `/markets/` |
| Canonical | `https://tio2malaysia.com/markets/` |
| Hreflang | MARKET-000 始终 `NOT_APPLICABLE`；Brazil EN/pt-BR hreflang 仅属于两张 Brazil child page，并由其独立任务批准和处理 |
| Robots | `INDEX, FOLLOW`；发布前复核 |

### 4.1 SEO 防内耗检查

- [x] 本页明确使用 `NO_PRIMARY_KEYWORD`。
- [x] 市场名称只服务导航意图。
- [x] H1、Title、Hero 不主攻子页 supplier 关键词。
- [x] EU 总页、EU 国家页、UK、India、Brazil EN/PT-BR 的主关键词边界清楚。
- [x] Trade Update 查询归 Resources，不在 Hub 发布政策正文。
- [x] 泛产品、应用、文件、制造和询价意图均有正确 owner。
- [x] Hub 的可索引状态不依赖创造商业关键词。

### 4.2 GEO 合同

| 字段 | 记录值 |
|---|---|
| Primary Entity | TiO2 Malaysia Markets navigation hub |
| Related Entities | European Union、United Kingdom、India、Brazil、Germany、Italy、Spain、Poland、Netherlands、Belgium；以及 Products、Applications、Documents、Resources、RFQ owner pages |
| Buyer Questions | EU 总页与国家页如何选择；Market 页面用于核对什么；贸易更新在哪里；选定市场后如何继续 |
| Answer-ready Blocks | MARKET_CHOICE_GUIDE、TRADE_BOUNDARY、BUYER_QUESTIONS、PROCUREMENT_PATHS |
| Evidence and Attribution | 页面身份和关系来自登记册/PRD/主表；市场事实、法规和贸易内容在 Gate 1 使用当前权威证据 |
| Freshness Requirement | 页面登记册、路由、语言策略或 Trade Update 状态变化时复核；Hub 不保存易过期政策结论 |
| Machine-readable Relationships | `CollectionPage` + `ItemList` + `BreadcrumbList`；与可见四市场和 EU 六国关系一致；不加入 Grade/Application/Process 隐藏关系 |
| GEO Exclusions | 未验证供应、制造、原产地、文件、法规、库存、价格、交期、物流、关税和规避关系；不输出国家→型号/应用/工艺推断，不添加任何行级型号/应用/工艺实体关系，也不把 `NO_PUBLIC_MAPPING` 改写为负面结论 |

- [x] 品牌、Hub、四市场和 EU 六国关系清楚。
- [x] 关键问题均映射到计划中的可见答案模块。
- [x] 时间敏感政策不在 Hub 形成独立事实块。
- [x] Schema 方向不制造本地办公室、库存或服务能力。
- [x] Brazil PT-BR 未批准前不进入可见关系或机器可读关系。
- [x] Buyer Questions 默认不使用 FAQPage/QAPage。

## 5. 本页必须回答的问题

| Question ID | 买家问题 | 采购判断 | 回答模块 ID | 所需证据 | 回答深度 |
|---|---|---|---|---|---|
| Q01 | Which destination markets are covered by this website architecture? | 应从哪个第一层市场体系开始 | DESTINATION_SELECTOR | PRD、登记册、主表 | 完整列出四个体系，不声称服务能力 |
| Q02 | Should I choose the European Union page or a country page? | 是否需要 EU 统一背景或具体国家采购入口 | MARKET_CHOICE_GUIDE / BUYER_QUESTIONS | 批准页面职责 | 一段直接导航答案 |
| Q03 | Which EU country pages are available? | 是否存在对应目的国入口 | DESTINATION_SELECTOR | 登记册/主表；route live 另审 | 列出六个 Page ID/名称 |
| Q04 | What can a market page help me review? | 后续可核对哪些采购维度 | MARKET_CHOICE_GUIDE | 页面职责；事实另需 Gate 1 | 说明产品、应用、文件、贸易和 RFQ 路径 |
| Q05 | Where should I check current trade-policy information? | 是否进入 Resources | TRADE_BOUNDARY / BUYER_QUESTIONS | Resources owner 边界；live/freshness 状态 | 简明边界答案，不给政策结论 |
| Q06 | Where should I start if I do not know the grade? | 是否先进入 Products/Applications | PROCUREMENT_PATHS | 全站 owner 关系 | 路由级答案 |
| Q07 | Where should I request technical or origin documents? | 是否进入 Documents/Request Documents | PROCUREMENT_PATHS | Documents/Conversion 架构 | 路由级答案，不承诺可用性 |
| Q08 | How do I request a quotation for a destination market? | 如何带正确上下文进入 RFQ | FINAL_RFQ | Conversion 架构和预填合同 | 说明独立页面和提交边界 |

## 6. 内容架构与模块顺序

### 6.1 页面叙事

| 项目 | 记录值 |
|---|---|
| 首屏承诺 | 按目的市场进入正确的 TiO2 采购页面 |
| 主要证据链 | 批准的四市场体系 → EU 六国关系 → 正确 owner 页面 → 条件可用的下一步 |
| 选择或比较逻辑 | 目的市场优先；EU 统一背景与具体国家入口分开；不进行国家优劣排名 |
| 风险与边界说明 | 页面关系不等于当地库存、合规、供应或物流能力；时效性结论进入 Resources |
| 最终行动理由 | 买家已选择正确市场或核对路径，可进入相应落地页或带上下文进入 RFQ |

### 6.2 模块清单

| 顺序 | Module ID | 模块名称 | 买家问题 | 模块目的 | 必须内容 | 独有内容 | Evidence ID | CTA | 手机端处理 |
|---:|---|---|---|---|---|---|---|---|---|
| 0 | GLOBAL_HEADER | Global Header | 如何访问主要栏目？ | 全站导航 | 固定八项顺序、Markets 当前项、Home 可见 | Home 文字入口不可由 Logo 代替 | IA-001 | Request a Quote 条件 CTA | Logo、Menu、RFQ；另交 menu open |
| 1 | BREADCRUMB | Breadcrumb | 我在网站什么位置？ | 建立层级 | Home > Markets | 与 Schema 一致 | IA-002 | 无 | 单行或自然换行 |
| 2 | HERO | Markets Hub Hero | 这是什么页面？如何开始？ | 建立导航任务 | H1、简介、资格说明、主 CTA、条件 RFQ | 无主关键词的目的地选择定位 | SEO-001 | Choose Your Market / Request a Quote | 单列；CTA 可全宽；无大空白 |
| 3 | DESTINATION_SELECTOR | Choose a Destination Market | 有哪些市场体系和 EU 国家入口？ | 核心市场选择 | EU、UK、India、Brazil；EU 六国；PT-BR 门禁 | 四体系 + EU 关系，不是十卡墙 | IA-003 / ROUTE-001 / LOC-001 | Explore Market | EU 六国默认折叠、纵向展开 |
| 4 | MARKET_CHOICE_GUIDE | How to Choose the Right Market Page | EU 总页还是国家页？ | 解释职责 | EU/国家页/UK/India/Brazil 的选择原则 | 页面职责而非市场事实 | CONTENT-001 | 对应 owner 路径 | 简明步骤/文本，不做复杂图表 |
| 5 | PROCUREMENT_PATHS | Continue Your Procurement Review | 之后核对产品、应用或文件？ | 连接 owner 页面 | Products、Applications、Documents | 清楚说明各自职责 | ROUTE-002 | Explore 对应栏目 | 单列或紧凑卡片；无横滑 |
| 6 | TRADE_BOUNDARY | Current Trade Information | 时效性政策在哪里？ | 安全导流 | Resources owner、来源/更新时间边界 | 不在 Hub 发布结论 | FRESH-001 | View Trade Updates 条件 CTA | 目标不可用时保留完整边界说明 |
| 7 | BUYER_QUESTIONS | Buyer Questions | 常见导航问题是什么？ | 可引用 GEO 答案 | Q02、Q04、Q05、Q08 | 导航型直接答案 | GEO-001 | 本地锚点或条件 route | 完整展开或可访问 accordion |
| 8 | FINAL_RFQ | Final RFQ | 如何提交目的市场询价？ | 行动收口 | source/market 预填规则、无承诺说明 | 明确选择才传 market | CONV-001 | Request a Quote | 单列；不内嵌表单 |
| 9 | GLOBAL_FOOTER | Footer | 如何再次访问栏目或联系？ | 导航收口 | 已登记栏目、Contact、verified 主体信息和 RFQ | 不新增未登记页面 | IA-004 | Request a Quote 条件 CTA | 分组导航，无溢出 |

### 6.3 页面独有内容

| Unique ID | 必须独有的内容 | 为什么不能模板替换 | 证据来源 | 验收方式 |
|---|---|---|---|---|
| U-001 | 四大市场体系优先的选择逻辑 | MARKET-000 的核心导航职责 | 用户批准决定、PRD、登记册 | 首层只有 EU/UK/India/Brazil |
| U-002 | EU 总页与六国入口的职责解释 | 解决 EU 统一背景与本地采购入口选择 | PRD、主表 | Desktop/Mobile 与答案块核对 |
| U-003 | Desktop EU 直接六国、Mobile 默认折叠 | 兼顾可发现性和移动长度 | 用户批准 A1 | 状态画面和无障碍核对 |
| U-004 | Brazil PT-BR 的条件省略 | 防止暂定 URL 被永久化 | 登记册、主表、项目状态 | 未批准时 DOM/Schema/菜单均无入口 |
| U-005 | Market → Products/Documents/Resources/RFQ 的职责路径 | Hub 不能只是国家列表 | 全站页面 owner 架构 | 每个入口说明判断任务，不复制正文 |
| U-006 | Trade Update 时效性边界 | 防止 Hub 保存过期政策 | 根治理、Resources owner | Hub 无政策结论；链接受 freshness gate |

### 6.4 Buyer Questions 候选

| FAQ ID | 问题 | 回答要点 | Evidence ID | 是否适合 FAQ Schema |
|---|---|---|---|---|
| BQ-01 | Should I use the European Union page or a country page? | EU 总页用于共同 EU 背景；明确目的国时进入对应国家页；不重复法规全文 | CONTENT-001 | 否；作为可见答案块 |
| BQ-02 | What does a market page help a buyer review? | 目的市场采购背景、产品/应用路径、文件核对和下一步；具体事实需证据 | GEO-001 | 否 |
| BQ-03 | Where can I find current trade information? | Resources Trade Update 是 owner；页面需显示来源和更新时间 | FRESH-001 | 否 |
| BQ-04 | How can I request a quote for my destination? | 进入独立 RFQ；页面或明确选择可预填市场；提交不表示批准 | CONV-001 | 否 |

上述仅为 Gate 0 答案方向，不是 Gate 2 最终英文正文。

## 7. 产品、应用、市场与文件关系

### 7.1 产品推荐

`NOT_APPLICABLE`。MARKET-000 不推荐具体型号。产品选择由 PRODUCT-000、Application 页面和有证据的 Market landing page 共同完成。Hub 只能链接 Products owner 页面。

PRODUCT 关系 V0.3 是当前唯一 Product/Application/Process 关系源，但 MARKET-000 不渲染其 30 条 verified Application 或 14 个 grade-level Process 关系。该矩阵没有目的市场维度，不得用于推断国家适用性、库存、注册或供应可用性。M-2377 已在源中批准 Coatings、Plastics、Masterbatch、Printing Inks、Paper 与 Sulfate；其未出现在本 Hub 是页面职责和零行级渲染规则，不是“全局隐藏”。M-2377 Specialty Materials 仍不公开，Rubber 只作证据登记；M-996/M-2196 不在 Hub 出现差异、排名、选择理由或比较定位；54 条 `NO_PUBLIC_MAPPING` 不得改写为不适用。

### 7.2 市场入口矩阵

| Page ID | 公共名称 | 当前 URL 状态 | Hub Desktop | Hub Mobile | 公共链接条件 |
|---|---|---|---|---|---|
| MARKET-EU-001 | European Union | 批准 | EU 主区块 | 主入口 | route live |
| MARKET-EU-DE | Germany | 批准 | EU 六国直接显示 | EU 展开后显示 | route live |
| MARKET-EU-IT | Italy | 批准 | 同上 | 同上 | route live |
| MARKET-EU-ES | Spain | 批准 | 同上 | 同上 | route live |
| MARKET-EU-PL | Poland | 批准 | 同上 | 同上 | route live |
| MARKET-EU-NL | Netherlands | 批准 | 同上 | 同上 | route live |
| MARKET-EU-BE | Belgium | 批准 | 同上 | 同上 | route live |
| MARKET-UK-001 | United Kingdom | 批准 | 同级入口 | EU 之后 | route live |
| MARKET-IN-001 | India | 批准 | 同级入口 | UK 之后 | route live |
| MARKET-BR-EN | Brazil | 批准 | 同级入口 | India 之后 | route live |
| MARKET-BR-PT | Portuguese | `PROVISIONAL_URL` | 只可能作为经批准的 Brazil EN→PT-BR 可见关系/链接；永不成为 Hub alternate | 未批准前不渲染 | 可见关系获批 + child page URL/content/hreflang + route live 全部通过 |

### 7.3 关系矩阵

| 关系类型 | 关联 Page ID | 为什么相关 | 本页如何呈现 | 对方页如何回链 |
|---|---|---|---|---|
| Home | HOME-001 | 首页把买家送入 Markets | 入站，不重复首页定位 | Home Markets 模块链接 MARKET-000 |
| Market | 11 个 Market landing pages | MARKET-000 的核心下游 | Destination Selector | 子页 breadcrumb/back-to-markets |
| Product | PRODUCT-000 | 不知道型号时进入产品选择 | Procurement Path | Product Hub 可提供市场支持入口 |
| Application | APP-000 | 需要按用途评估时进入 | route live 后轻量入口 | Application 根据证据回链相关 Market |
| Document | DOC-000 / CONV-DOC | 文件类别和受控申请 owner | route live 后轻量入口 | Documents 可要求选择目的市场 |
| Resource | RES-000 / RES-TRADE-* | 研究和时效性贸易 owner | Trade Boundary；freshness gate | Trade Update 回到对应 Market page |
| About | ABOUT-001 | 制造、origin、traceability 事实 owner | 只在需要时提供信任路径 | About 可回 Markets 采购入口 |
| Conversion | CONV-RFQ | 独立报价 owner | Hero/Final 条件 CTA | Back navigation 保留 source/market |

## 8. 事实与证据登记

### 8.1 Evidence Register

每个 Evidence ID 唯一映射一个 Claim ID；它只用于内部审计，不出现在公共页面。

| Evidence ID | 证据定义 | 权威来源 | 资料日期 | 适用范围 | 验证状态 | 对应 Claim ID |
|---|---|---|---|---|---|---|
| IA-001 | 固定八项 Header、Markets 当前项和 Home 可见文字入口 | 根 AGENTS.md、批准首页 V0.3 | 2026-08-29 | GLOBAL_HEADER | `verified_architecture` | CL-009 |
| IA-002 | MARKET-000 身份及 Home > Markets 层级 | 登记册、主表 | 2026-08-29 | BREADCRUMB | `verified_architecture` | CL-001 |
| IA-003 | 四市场体系与 EU 六国关系 | PRD、登记册、主表、用户 A/A1 决定 | 2026-08-29 | DESTINATION_SELECTOR | `verified_architecture` | CL-002 |
| IA-004 | Footer 只使用已登记入口和已验证主体信息 | 根 AGENTS.md、54 页登记册 | 2026-08-29 | GLOBAL_FOOTER | `verified_architecture` | CL-010 |
| SEO-001 | MARKET-000 无主关键词、可索引导航职责与 metadata 方向 | 主表、Gate 1 Evidence baseline | 2026-08-29 | HERO、SEO | `verified_seo_architecture`；最终 copy 待 Gate 2 | CL-003 |
| ROUTE-001 | 11 个 Market destination Page ID、mapping 和 URL 状态 | 登记册、主表、批准 Route baseline | 2026-08-29 | DESTINATION_SELECTOR | `verified_mapping_only`；22 个外部单元仍 `NOT_VERIFIED_LIVE` | CL-004 |
| ROUTE-002 | Products、Applications、Documents owner 关系 | PRD、登记册、主表、批准 Route baseline | 2026-08-29 | PROCUREMENT_PATHS | `verified_architecture`；route status required | CL-006 |
| LOC-001 | Brazil PT-BR 暂定 URL 与本地化门禁 | 登记册、主表、项目状态 | 2026-08-29 | Brazil 语言入口、hreflang、Schema | `LOCALIZATION_REVIEW_REQUIRED` | CL-005 |
| CONTENT-001 | EU 总页与 EU 国家页的职责选择逻辑 | PRD、主表、Gate 1 Evidence baseline | 2026-08-29 | MARKET_CHOICE_GUIDE | `verified_page_role`；最终 copy 待 Gate 2 | CL-011 |
| FRESH-001 | Trade Update 由 Resources 承接且需官方来源/更新时间 | 根 AGENTS.md、PRD、主表、批准 Gate 1 baselines | 2026-08-29 | TRADE_BOUNDARY | `verified_owner_boundary`；freshness and route required | CL-007 |
| GEO-001 | Hub 只回答导航、页面职责和下一步问题 | MARKET-000 职责、Gate 1 Evidence baseline | 2026-08-29 | BUYER_QUESTIONS | `verified_content_boundary`；最终答案待 Gate 2 | CL-012 |
| CONV-001 | RFQ 独立，Hub 仅传递明确选择的市场 | 用户 CTA 决定、Gate 1 Route baseline | 2026-08-29 | HERO / FINAL_RFQ | `verified_conversion_contract`；workflow and route required | CL-008 |
| VIS-001 | Industrial Editorial、EU 非对称布局和 A1 Mobile 状态 | Visual Standard、首页 V0.3、用户视觉批准 | 2026-08-29 | Gate 3–5 视觉合同 | `design_direction_confirmed` | CL-013 |

### 8.2 Claim Register

| Claim ID | 计划公开的事实或声明 | 类型 | 来源 | 资料日期 | 适用范围 | 验证状态 | 渲染决定 | 审核人 |
|---|---|---|---|---|---|---|---|---|
| CL-001 | MARKET-000 是 `/markets/` 导航中心，层级为 Home > Markets | IA / SEO | 登记册、主表 | 2026-08-29 | 页面身份/Breadcrumb | verified architecture | RENDER | 总控待复核 |
| CL-002 | Hub 第一层为 EU、UK、India、Brazil，EU 下有六国入口 | IA | PRD、登记册、主表、Gate 1 Evidence baseline | 2026-08-29 | DESTINATION_SELECTOR | verified architecture；links route-gated | RENDER | 总控/用户 |
| CL-003 | Hub 无独立主关键词但可索引，Title/H1 为导航方向 | SEO | 主表、Gate 1 Evidence baseline | 2026-08-29 | HERO/SEO | verified SEO architecture；最终 copy 待 Gate 2 | RENDER | 总控/用户 |
| CL-004 | 11 个 Market destination 可作为 Hub 路由目标 | IA / ROUTE | 登记册、主表 | 2026-08-29 | Destination links | mapping verified；route live unknown | DO_NOT_RENDER | 总控/开发项目复核 |
| CL-005 | Brazil EN→PT-BR 可见关系/链接及两张 child page 的 URL、hreflang 和 Schema 可公开 | LOCALIZATION | 当前未获本地化批准 | 未批准 | Brazil relation；不改变 Hub hreflang | `LOCALIZATION_REVIEW_REQUIRED` | DO_NOT_RENDER | 本地化 owner/用户 |
| CL-006 | Products、Applications、Documents 路径可作为 Hub 下游 | IA | PRD、登记册、主表、Gate 1 baselines | 2026-08-29 | PROCUREMENT_PATHS | verified owner relations；links route-gated | RENDER | 总控/开发项目复核 |
| CL-007 | Trade Update owner 边界可解释；链接和政策摘要仍受限 | TRADE | Gate 1 Evidence/Route baselines | 2026-08-29 | TRADE_BOUNDARY | verified owner boundary；official source/freshness/content/route required | RENDER_WITH_QUALIFIER | 合规/市场 owner |
| CL-008 | RFQ CTA 和市场预填可公开 | CONVERSION | 用户 CTA 方向、Conversion 架构 | 2026-08-29 | HERO/FINAL_RFQ | workflow/route required | DO_NOT_RENDER | Conversion owner/总控 |
| CL-009 | Header 使用批准八项导航，Markets 当前，Home 可见 | IA | 根 AGENTS.md、首页 V0.3 | 2026-08-29 | GLOBAL_HEADER | verified architecture | RENDER | 总控 |
| CL-010 | Footer 只使用已登记入口和已验证主体信息 | IA / GOVERNANCE | 根 AGENTS.md、登记册 | 2026-08-29 | GLOBAL_FOOTER | verified architecture | RENDER | 总控 |
| CL-011 | EU 总页处理统一 EU 背景，国家页处理当地采购入口 | CONTENT / IA | PRD、主表、Gate 1 Evidence baseline | 2026-08-29 | MARKET_CHOICE_GUIDE | verified page role；最终 copy 待 Gate 2 | RENDER | 总控/用户 |
| CL-012 | Buyer Questions 只回答导航、owner 和下一步 | GEO / CONTENT | MARKET-000 职责、Gate 1 Evidence baseline | 2026-08-29 | BUYER_QUESTIONS | verified content boundary；最终答案待 Gate 2 | RENDER | 总控/用户 |
| CL-013 | 页面使用 Industrial Editorial、EU 非对称布局和 Mobile A1 状态 | VISUAL | Visual Standard、首页 V0.3、用户决定 | 2026-08-29 | Gate 3–5 | internal design contract；不是公共事实 | DO_NOT_RENDER | 总控/用户 |
| CL-014 | 各市场的供应、应用、产品、文件、法规、物流或贸易具体事实 | MARKET / PRODUCT / DOCUMENT / REGULATORY / LOGISTICS / TRADE | Gate 1 Evidence Audit 草案未发现获准供 MARKET-000 发布的完整事实包 | 2026-08-29 | Hub 及子页摘要 | EVIDENCE_REQUIRED | DO_NOT_RENDER | 对应事实 owner |

### 8.3 事实类别检查

- [x] 页面身份、市场体系和 URL 已从批准架构核对。
- [x] Brazil PT-BR 门禁已登记。
- [x] Hub 不承担 supplier 主关键词或时效性政策结论。
- [x] Gate 1 Evidence Audit 已批准；仅架构、职责和 owner 边界获得证据资格，未形成可发布的市场应用、产品或采购差异事实。
- [ ] 制造、origin、traceability 和文件可用性尚未在本页证实；本页不承诺。
- [ ] Trade Update 官方来源与更新时间尚未复核；Hub 不发布结论。
- [ ] 库存、价格、MOQ、交期、包装、港口、物流和样品条件无证据；本页不承诺。
- [x] 竞品、SERP、旧站和图片不能证明本公司能力。

### 8.4 不渲染字段

| 字段或模块 | 冻结原因 | Verification Status | 解冻所需证据 | 不阻塞的工作 |
|---|---|---|---|---|
| Brazil EN→PT-BR visible link / child page canonical / child page hreflang / Schema relation | URL 与本地化未批准 | LOCALIZATION_REVIEW_REQUIRED | 用户批准可见关系、child page 语言架构、本地化审核和 live route；Hub hreflang 不变 | Brazil EN、四市场布局、条件省略状态 |
| Market-specific applications/products | 无市场级技术关系证据 | EVIDENCE_REQUIRED | 市场研究 + 产品/应用技术批准 | Hub 导航和 owner 路径 |
| origin/manufacturing/traceability claims | 事实 owner 证据未核实 | FACT_EVIDENCE_REQUIRED | 已批准一方证据和公开措辞 | Hub 信息架构和 About/Documents 路径 |
| document/compliance availability | 范围、版本和市场适用性未核实 | FACT_EVIDENCE_REQUIRED | 当前文件目录和合规批准 | Documents owner 路径 |
| trade-policy summaries and links | 未完成当前官方来源与 freshness 审计 | OFFICIAL_SOURCE_UPDATE_REQUIRED | 对应官方来源、适用范围、日期和批准 Resources 页面 | Trade owner 边界说明 |
| stock/price/MOQ/lead time/packaging/port/shipping | 无运营批准资料 | EVIDENCE_REQUIRED | 销售、运营和物流批准 | RFQ 入口与字段规划 |

## 9. CTA 与转化合同

### 9.1 CTA 层级

| 层级 | CTA 文案方向 | 目标 URL | 触发位置 | 预填参数 | 成功定义 |
|---|---|---|---|---|---|
| Primary | Choose Your Market | `#destination-selector` | Hero | 无 | 到达并可操作市场选择模块 |
| Secondary | Request a Quote | route key `CONV-RFQ` | Hero | `source_page=MARKET-000`；未选择市场时不传 market | workflow/route live 后到达独立 RFQ |
| Market | Explore European Union / United Kingdom / India / Brazil | 对应 Market Page ID | Destination Selector | source_page；只有用户点击后传明确 market | 到达正确 Market landing page |
| EU country | Germany / Italy / Spain / Poland / Netherlands / Belgium | 对应 EU country Page ID | EU 区块 | source_page + explicit market | 到达正确国家页 |
| Supporting | Explore Products / Applications / Documents | 对应 Page ID/route key | Procurement Paths | source_page 可选 | 到达已批准可用 owner 页面 |
| Supporting | View Trade Updates | 对应 Resources route | Trade Boundary | market context 可选 | 仅在内容当前且 route live 后到达正确页面 |
| Final | Request a Quote | route key `CONV-RFQ` | Final RFQ | `source_page=MARKET-000`；明确选择才传 market | 可提交请求；提交不表示批准 |

### 9.2 本页表单字段

`NOT_APPLICABLE`。MARKET-000 不内嵌 RFQ、Sample 或 Documents 表单。接收页面的字段、验证、隐私和状态由对应 Conversion 任务卡定义。

### 9.3 接收流程状态要求

- [x] Hub 未选择市场时不预填 market。
- [x] 只有买家明确点击或确认市场才传 market。
- [x] Market landing page 的页面上下文可预填，但接收页必须可见、可修改。
- [x] 成功状态不得暗示报价、文件、样品、价格、库存或交期已批准。
- [x] 服务失败必须提供经过验证的替代联系路径。
- [x] 隐私和最少收集由 Conversion 页面负责。

## 10. 内部链接合同

### 10.1 入站链接

| 来源 Page ID | 来源模块 | 锚文本方向 | 传递的上下文 | 是否必须 |
|---|---|---|---|---|
| HOME-001 | Markets | Explore Markets / Choose a Destination Market | 泛市场入口 | 是 |
| GLOBAL HEADER | Markets | Markets | 顶层导航 | 是 |
| MARKET-* | Breadcrumb / Back | Markets / All destination markets | 返回 Hub | 是 |
| PRODUCT-000 / Grade pages | Market Support | Review destination markets | 产品或型号上下文；只在有意义时 | 条件 |
| APP-* | Market support | Review market context | 应用上下文；只在有证据关系时 | 条件 |
| DOC-* | Market selection | Choose destination market | 文件适用范围上下文 | 条件 |
| RES-TRADE-* | Procurement page | Review {Market} procurement | 从贸易研究回商业落地页 | 条件 |

### 10.2 出站链接

| 目标 Page ID | 页面关系 | 锚文本方向 | 所在模块 | 用户下一步 | 渲染条件 |
|---|---|---|---|---|---|
| MARKET-EU-001 | Market system | European Union | DESTINATION_SELECTOR | 进入 EU 总页 | route live |
| MARKET-EU-DE/IT/ES/PL/NL/BE | EU country children | 国家名称 | DESTINATION_SELECTOR | 进入具体国家页 | route live |
| MARKET-UK-001 | Market system | United Kingdom | DESTINATION_SELECTOR | 进入 UK 页 | route live |
| MARKET-IN-001 | Market system | India | DESTINATION_SELECTOR | 进入 India 页 | route live |
| MARKET-BR-EN | Market system | Brazil | DESTINATION_SELECTOR | 进入 Brazil EN 页 | route live |
| MARKET-BR-PT | Localized relation | Portuguese / Português | Brazil relation | 进入 PT-BR 页 | localization + URL + hreflang + route live |
| PRODUCT-000 | Product owner | Explore Products | PROCUREMENT_PATHS | 选择型号/产品路径 | route live |
| APP-000 | Application owner | Explore Applications | PROCUREMENT_PATHS | 按应用核对 | URL approved + route live |
| DOC-000 | Document owner | Review Documents | PROCUREMENT_PATHS | 核对文件类别 | URL approved + route live |
| RES-TRADE-* | Trade owner | View Trade Updates | TRADE_BOUNDARY | 查看当前官方来源内容 | content approved + fresh + route live |
| CONV-RFQ | Conversion owner | Request a Quote | HERO / FINAL_RFQ | 提交采购需求 | workflow approved + route live |

### 10.3 导航

| 项目 | 记录值 |
|---|---|
| Header 状态 | 使用全站批准 Header，Markets 为当前项，不自行修改 |
| Breadcrumb | `Home > Markets` |
| Footer 入口 | 已登记顶层栏目、Contact、verified 主体信息和 RFQ；不新增未登记永久页面 |
| 上一层 Hub | `NOT_APPLICABLE`；本页即 Markets Hub |
| 相关页面模块 | DESTINATION_SELECTOR、PROCUREMENT_PATHS、TRADE_BOUNDARY |

## 11. 视觉与响应式合同

### 11.1 视觉方向

| 字段 | 记录值 |
|---|---|
| 继承的视觉标准 | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md`，并采用首页 V0.3 的对比度修正 |
| 参考的已批准页面 | 首页 Industrial Editorial 基底；Products 仅作 Technical Editorial 和治理颗粒度参考 |
| 页面信息密度 | 中等；市场选择和采购路径优先，不以大空白制造长度 |
| 图片策略 | 抽象目的地路线、简化地图或中性工业供应视觉；必须有授权且不得作为覆盖/物流能力证明 |
| 图表或比较策略 | 使用编辑式关系、细线、编号和文本说明；不做国家排名、KPI 或 SaaS dashboard |
| 信任证据呈现 | Hub 主要依靠清晰 owner 关系和证据边界；事实 badge 只有 verified 才出现 |
| 禁止使用的视觉暗示 | 巨大国旗、旅游地标、国家换肤、当地办公室/仓库/港口、库存、认证、交期、贸易优势徽章 |

### 11.2 Desktop 方向

- Hero 可双栏；文字、H1 和 CTA 是第一视觉焦点。
- Destination Selector 使用非对称编辑式布局。
- EU 为宽区块，直接显示 EU 总页和六国文字链接。
- UK、India、Brazil 是三个紧凑但同等级入口。
- 不使用十个同尺寸国家卡片。
- 1200–1320px 内容容器，白底和 Navy 主导。

### 11.3 Mobile 方向

- Hero 单列；CTA 可全宽。
- 顺序固定 EU → UK → India → Brazil。
- EU 六国默认折叠；`View EU destinations` 控件可键盘/触控操作并报告展开状态。
- 展开后六国纵向排列，不横向滑动。
- Brazil PT-BR 未批准时自然省略，不显示空入口或内部状态。
- 390px 无横向溢出；Buyer Clean 可见文字原则上不低于 14px。
- 按钮后无大段无目的空白。

### 11.4 必须交付画面

- [ ] Desktop 完整页面。
- [ ] Mobile 完整页面或连续关键帧。
- [ ] Header、Footer、breadcrumb。
- [ ] Hero 与 CTA。
- [ ] EU Desktop 六国直接状态。
- [ ] Mobile EU 收起与展开状态。
- [ ] Market 入口 hover 与 keyboard focus。
- [ ] Mobile menu open。
- [ ] Brazil PT-BR 条件省略后的自然布局。
- [ ] 下游 route 不可用时的 CTA 省略。
- [ ] 无图片状态。
- [ ] 长国家名、长说明和 PT-BR 长度压力状态。

### 11.5 响应式检查

| 检查项 | Desktop | Tablet | Mobile | 通过标准 |
|---|---|---|---|---|
| Hero 信息和 CTA | 双栏可用 | 视宽度转单栏 | 单栏、CTA 可全宽 | 定位和行动不被视觉压制 |
| Header | 完整八项 | 可转折叠菜单 | Logo/Menu/RFQ + 完整菜单状态 | Home 可见、顺序正确 |
| EU 主区块 | 直接六国 | 可两列/折叠 | 默认折叠、纵向展开 | 不依赖 hover，不横滑 |
| UK/India/Brazil | 紧凑同级 | 合理换行 | 纵向排列 | 无国家优劣暗示 |
| 长文字 | 宽容器内可读 | 自然换行 | ≥14px 原则、长国名不截断 | 无拥挤或超长行 |
| 按钮后空白 | 受控 | 受控 | 无大段无目的空白 | 下一模块自然进入 |
| 横向溢出 | 无 | 无 | 390px 无 | `scrollWidth` 不超过视口 |
| 固定 CTA | 非必需 | 非必需 | 如使用不得遮挡内容/UI | 可关闭或不使用 |

## 12. 开发交付合同

本节只定义交给 WordPress/Next.js 开发项目的内容与呈现结果；本项目不实施。

### 12.1 WordPress 内容需求

| 字段 Key | 字段名称 | 类型 | 是否必填 | 来源 | 验证状态 | 空值行为 |
|---|---|---|---|---|---|---|
| page_identity | 页面身份 | object | 是 | 登记册/主表 | verified | 页面不可交付 |
| seo | SEO 字段 | object | 是 | 任务卡 | draft → approved | 未批准不得发布 |
| hero | Hero 内容与 CTA | object | 是 | Gate 2 内容 | draft → approved | 页面不可交付 |
| market_systems | 四市场体系 | collection | 是 | PRD/登记册 | verified architecture | 数量/身份异常阻塞交付 |
| eu_country_relations | EU 六国关系 | relation collection | 是 | 登记册/主表 | verified architecture + route status | 非 live 链接不输出 |
| localized_relations | Brazil PT-BR 关系 | relation collection | 条件 | localization approval | provisional | 未批准不输出 |
| choice_guide | 市场选择说明 | rich text/list | 是 | Gate 2 内容 | approved copy | 空则不渲染 |
| procurement_paths | Products/Applications/Documents 路径 | route collection | 条件 | Route registry | route status | 未满足条件的目标不输出 |
| trade_paths | Trade Update 路径 | route collection | 条件 | Resources + official-source audit | freshness + route status | 过期/未批准不输出 |
| buyer_questions | 可见问答 | collection | 条件 | Gate 2 内容/证据 | approved copy | 空则模块不渲染 |
| final_rfq | RFQ 收口 | object | 条件 | Conversion 合同 | workflow/route status | 不可用则不输出 CTA |
| claim_status | 模块/关系状态 | enum map | 是 | Claim Register | verified/pending/not_public | 只输出 verified |
| schema_inputs | CollectionPage/ItemList/Breadcrumb | object | 是 | 可见内容 | verified | 不生成不一致 Schema |
| media | 图片与 ALT | asset collection | 条件 | 资产登记 | rights verified | 无图片使用批准空状态，不跨站回退 |

所有数据必须属于 `site_scope=tio2-my`。具体数据模型由外部开发项目决定。

### 12.2 Next.js 呈现要求

| Module ID | 组件职责 | 输入字段 | 条件渲染 | 错误或空值状态 | 共享组件影响 |
|---|---|---|---|---|---|
| HERO | 页面身份与 CTA | hero、seo.h1 | 必填 | 缺失阻塞页面；RFQ 可独立省略 | 使用全站 Header/Button；开发项目评估 |
| DESTINATION_SELECTOR | 四市场和 EU 六国选择 | market systems、relations、route status | 必填结构 | 无 live link 时保留非点击说明或按批准策略省略；不得死链 | 新市场选择职责；实现方式由开发决定 |
| MARKET_CHOICE_GUIDE | 解释页面职责 | approved copy | 内容存在 | 空则不渲染 | 普通内容组件 |
| PROCUREMENT_PATHS | 下游 owner 路由 | route keys | route live | 全空则模块不渲染 | route 解析不得跨 scope |
| TRADE_BOUNDARY | Trade owner 与 freshness | copy、trade route、freshness | 边界文案可独立；链接条件渲染 | 无链接时答案仍完整 | 不得缓存过期政策值 |
| BUYER_QUESTIONS | 可见答案块 | approved Q&A | 至少一项 | 全空则不渲染 | 默认不输出 FAQ/QAPage |
| FINAL_RFQ | RFQ 行动 | approved CTA、prefill | workflow/route live | 不可用则省略或使用另行批准的 verified 联系路径 | 使用独立 Conversion 页面 |

### 12.3 SEO 与 GEO 机器可读字段

| 字段 | 记录值 |
|---|---|
| Title | `Markets for Titanium Dioxide Procurement \| TiO2 Malaysia`（方向，Gate 2 锁定最终 copy） |
| Meta Description | Gate 2 根据批准方向锁定；不得含未经验证的供应/法规/物流承诺 |
| Canonical | `https://tio2malaysia.com/markets/` |
| Robots | `index,follow`；发布前复核 |
| Open Graph | 与可见 Hero 一致；图片有授权且不误导覆盖/物流 |
| Hreflang | MARKET-000 始终 `NOT_APPLICABLE`；Brazil EN/pt-BR hreflang 仅属于两张 Brazil child page，并由其独立任务批准和处理 |
| Sitemap | 包含唯一 canonical；不包含折叠状态或交互参数 |
| Breadcrumb Schema | Home → Markets |
| Page-specific Schema | CollectionPage + ItemList；只包含可见、批准、live 的市场关系 |

### 12.4 非功能要求

- [ ] 页面不会读取或渲染其他 site scope 的内容。
- [ ] 四市场和 EU 六国关系与可见/Schema 内容一致。
- [ ] Brazil PT-BR 门禁在 HTML、JSON、API、Schema、菜单和 hreflang 同时生效。
- [ ] 无脚本时核心市场关系和普通链接可用；EU 六国有合理降级。
- [ ] 受限值不泄漏到 HTML、JSON、API、Schema、Meta、OG 或 ALT。
- [ ] 图片尺寸、格式、懒加载和首屏优先级由开发项目实现并验证。
- [ ] 页面无不可接受布局跳动、断链、失败请求或控制台错误。
- [ ] Trade Update freshness 能阻止过期链接或结论继续公开。
- [ ] 交互状态和预填遵循最少数据原则。

## 13. 可访问性合同

- [ ] 一个 H1，标题层级连续。
- [ ] Header、EU 折叠、市场入口和所有 CTA 可键盘操作。
- [ ] Focus 清晰且与首页视觉一致。
- [ ] EU 展开状态具有程序化名称、控制关系和 expanded 状态。
- [ ] 状态不只靠颜色；内部审核状态不作为公共 UI。
- [ ] 文本和 CTA 对比度达到适用要求；亮 Teal 不承载浅底小字。
- [ ] 图片有真实 ALT；装饰路线/形状空 ALT。
- [ ] 地图或关系图有文本等价表达。
- [ ] 链接/按钮脱离上下文仍可理解。
- [ ] 动画尊重 reduced motion。
- [ ] 触控目标和间距足够。
- [ ] 200% 缩放、390px 视口、长国家名和 PT-BR 长度均可用。

## 14. 验收清单

### 14.1 策略与内容

- [ ] 页面职责和目标买家清楚。
- [ ] 模块顺序与批准 Brief 一致。
- [ ] 页面不是国家卡片列表或十国卡片墙。
- [ ] EU 总页和六国选择关系清楚。
- [ ] Products、Applications、Documents、Resources、RFQ 的下一步明确。
- [ ] Brazil PT-BR 门禁正确。
- [ ] 没有市场事实、供应能力或贸易结论越权。
- [ ] 没有复制 mytio2.com 正文。

### 14.2 SEO 与 GEO

- [ ] `NO_PRIMARY_KEYWORD`、Title、H1、URL 和导航职责一致。
- [ ] 不侵占 EU、六国、UK、India、Brazil supplier 主词。
- [ ] 不侵占 Products、Applications、Documents 或 Trade Update。
- [ ] Canonical、Robots、Sitemap 和交互状态正确。
- [ ] CollectionPage、ItemList、Breadcrumb 与可见内容一致。
- [ ] Buyer Questions 有完整答案和证据边界。
- [ ] Buyer Clean 代码块与 GEO 简明答案列不含 `owner`、`conversion task`、`route`、`workflow` 或 `Gate` 等内部 IA 术语。
- [ ] GEO-A09 只在 `RFQ_AVAILABLE=true` 时渲染；S0 只输出 Q7 route-safe base，不声明选择信息会被传递。
- [ ] 时间敏感事实不留在 Hub。

### 14.3 视觉与移动端

- [ ] 延续批准首页 Industrial Editorial 体系。
- [ ] EU 是主区块但不压低 UK、India、Brazil 的语义等级。
- [ ] Desktop、Tablet、Mobile 均有验收依据。
- [ ] EU 收起/展开、menu、focus、route 省略和无图片状态齐全。
- [ ] 390px 无横向溢出或按钮后大空白。
- [ ] Mobile Body 与 Buyer Question answer 使用 16px/约25px行高，Mobile kicker/path label≥14px；Desktop Buyer Clean 导航、标签与行动文字均≥14px。
- [ ] 390px H1/H2/CTA 以真实字体像素宽度复核，批准原文自然换行且不裁切；右侧安全区无被截内容。
- [ ] 巨大国旗、旅游视觉、覆盖/物流能力暗示均不存在。

### 14.4 转化

- [ ] Hero 先市场选择、后 RFQ 的层级明确。
- [ ] Hub 不内嵌表单。
- [ ] market 只来自页面上下文或用户明确选择。
- [ ] 成功、失败、隐私和最少收集由 Conversion 页面处理。

### 14.5 开发交付与只读验收

- [ ] 交付包明确 `site_scope=tio2-my`。
- [ ] 字段、关系状态、条件渲染、route key、freshness 和空值行为完整。
- [ ] 本项目没有编写或修改开发代码。
- [ ] 外部开发提交可访问结果后，本项目只读检查视觉、移动端、内容、元数据、链接、Schema、SEO 和 GEO。
- [ ] 问题提交给开发项目处理，本项目不直接修代码。

## 15. 审核记录

### 15.1 问题记录

| Review ID | 级别 | 问题 | 影响 | 修正要求 | 责任人 | 状态 | 验证证据 |
|---|---|---|---|---|---|---|---|
| MKT-R001 | BLOCKING | Markets Playbook 与本 Brief 尚未完成总控和用户整体 Gate 0 审查 | Gate 0 未批准时不得进入 Gate 1 | 总控重新复审 PASS；用户最终批准 | 总控/用户 | CLOSED | 2026-08-29 Gate 0 批准记录 |
| MKT-R002 | IMPORTANT | 市场应用、产品、文件、物流和供应差异缺少完整证据 | 相关事实不公开 | PRODUCT 关系 V0.3 只提供中性技术关系且无市场维度；CL-014 继续 `DO_NOT_RENDER`；需独立市场证据 | 市场/技术/合规 owner | OPEN | Gate 1 Evidence Audit；V0.3 Impact Audit |
| MKT-R003 | IMPORTANT | Brazil PT-BR URL 和本地化未批准 | 不得渲染语言入口/hreflang/Schema | 批准 Localization baseline 保持 `LOCALIZATION_HOLD`；需完成独立本地化批准 | 本地化 owner/用户 | OPEN | `MARKET-000_BRAZIL_PTBR_LOCALIZATION_AUDIT_V0.1.md` |
| MKT-R004 | IMPORTANT | 下游 route 含 planned/provisional/live 未知状态 | CTA 条件渲染 | 批准 Route baseline 按 Page ID 原子门禁；22 个单元仍 `NOT_VERIFIED_LIVE` | 总控/开发项目 | OPEN | `MARKET-000_ROUTE_AUDIT_V0.1.md` |
| MKT-R005 | IMPORTANT | Trade Update 官方来源和 freshness 未审 | 不得显示政策结论或过期链接 | 批准 Gate 1 baselines 只保留 owner 边界；Resources owner 仍需官方来源/freshness 审计 | 合规/市场 owner | OPEN | FRESH-001 / CL-007 / Route Audit |
| MKT-R006 | IMPORTANT | Footer 不得增加 54 页登记册外的永久入口 | 可能形成未批准页面 | 只渲染登记/批准入口 | 总控 | CONTROLLED_IN_DRAFT | CL-010 |
| MKT-REL-V03-01 | IMPORTANT | PRODUCT 关系权威源已由用户批准升级至 V0.3，Markets 当前引用及 M-2377 治理措辞需同步 | 若继续使用 V0.2.1 当前时态，会错误保留已废止的 M-2377 全局隐藏/冲突结论 | 已仅同步权威源、计数和治理说明；MARKET-000 继续零行级型号/Application/Process 渲染，正文、视觉与 route/PT-BR/Trade 门禁不变 | Markets 页面执行任务/总控 | PROJECT_CONTROL_REVIEW_PASS / CLOSED | 2026-08-30；approval source=`USER_APPROVED_PRODUCT_V0.3 + PROJECT_CONTROL_TARGETED_REVIEW`；V0.3 Impact Audit；资产哈希复验 |
| G1-01 | IMPORTANT | 权威输入表将已批准的 `MARKET_PLAYBOOK_V0.1.md` 误标为 `DRAFT_FOR_GATE_0_REVIEW` | 与 Playbook=`APPROVED_FOR_DESIGN`、Brief Gate 0=`APPROVED`、MKT-R001=`CLOSED` 冲突 | 已改为 `APPROVED_FOR_DESIGN / GATE_0_APPROVED_BASELINE`；总控复审 PASS；用户批准 Gate 1 | Markets 页面执行任务 | CLOSED | 2026-08-29 总控与用户 Gate 1 批准记录 |
| G2-01 | IMPORTANT | Buyer Clean 与 GEO answer 泄漏 `owner`、`conversion task`、`route`、`workflow`、`Gate` 等内部 IA 术语 | 公开内容不符合自然采购语言要求 | 已改写相关 Buyer Clean/GEO 文案，并增加公开代码块与 GEO answer 列定向扫描验收 | Markets 页面执行任务 | CLOSED | 总控复审 PASS；用户于 2026-08-29 批准 Gate 2 |
| G2-02 | IMPORTANT | PT-BR Hub 可见关系、Hub hreflang 与 Brazil child hreflang 条件存在歧义；GEO-A09 未明确 RFQ 条件 | 可能错误生成 Hub alternate 或在 S0 声明未启用的预填行为 | 已明确 Hub hreflang 始终 `NOT_APPLICABLE`、child hreflang 独立审批；GEO-A09 仅 `RFQ_AVAILABLE=true` 渲染，S0 仅保留 Q7 base | Markets 页面执行任务 | CLOSED | 总控复审 PASS；用户于 2026-08-29 批准 Gate 2 |
| G3-01 | BLOCKING | MARKET-000 Gate 3 低保真线框尚未完成总控和用户批准 | 未批准前不得进入 Gate 4/5 | 总控复审 PASS；用户于 2026-08-30 批准 Gate 3 | 总控/用户 | CLOSED | `APPROVED_GATE_3_BASELINE` |
| G3-02 | IMPORTANT | 390px 主线框使用省略与缩写占位，未证明完整文案累计高度 | 无法验证七组答案、Choice、Destination、CTA 后空白和模块闭合 | Appendix A 完整原文测量经总控复审 PASS；用户于 2026-08-30 批准 Gate 3 | Markets 页面执行任务 | CLOSED | Wireframe Appendix A；Gate 3 批准记录 |
| G3-03 | IMPORTANT | Footer RFQ 多出未在 Gate 2 定义的额外条件 | 可能导致六个 RFQ surface 不同步 | `RFQ_AVAILABLE` 唯一六表面合同经总控复审 PASS；用户于 2026-08-30 批准 Gate 3 | Markets 页面执行任务 | CLOSED | Wireframe 8.5/13/16；Gate 3 批准记录 |
| G4-01 | BLOCKING | MARKET-000 Gate 4 视觉方向尚未完成总控和用户批准 | 未批准前不得进入 Gate 5 | 总控复审 PASS；用户于 2026-08-30 批准 Gate 4 | 总控/用户 | CLOSED | `APPROVED_GATE_4_BASELINE` |
| G4-02 | IMPORTANT | Gate 4 与 Gate 5 必须采用当前批准 PRODUCT 关系共同标准 | 防止 Markets 按国家推断型号、应用或工艺，并防止 NO_PUBLIC_MAPPING 被负面解释 | Gate 4 原按 V0.2.1 关闭；当前唯一源已由 `MKT-REL-V03-01` 同步为 V0.3，页面零行级渲染规则不变 | Markets 页面执行任务 | CLOSED | V0.2.1 历史审计；V0.3 Impact Audit；Visual Direction V0.1 |
| G4-03 | IMPORTANT | Content Architecture 第 12.4 节阶段时态曾与当前授权冲突 | 造成 Gate 4 治理状态不一致 | 已改为历史快照并同步 Gate 4 用户批准与当前仅授权 Gate 5 草案 | Markets 页面执行任务 | CLOSED | Content Architecture 12.4；2026-08-30 用户批准 Gate 4 |
| G5-01 | BLOCKING | MARKET-000 Gate 5 完整视觉稿需要总控和用户批准 | 用户批准前不得进入 Gate 6/7 或开发交付 | V0.4 final-review baseline 已通过总控复审并由用户于 2026-08-31 批准 | 总控/用户 | CLOSED | `MARKET-000_FULL_VISUAL_DESIGN_V0.4.md`；V0.1–V0.3 保留历史 |
| G5-02 | BLOCKING | V0.1 两张 390px 主稿的 Destination Market H2 右侧裁切 | 390px 无横滑/裁切自检不成立 | V0.2 起改为经真实像素测量的三行自然换行；最终 V0.5 Mobile 经用户 Gate 5 批准 | Markets 页面执行任务 | CLOSED | `MARKET-000-G5-PCR-01` 总控 PASS；2026-08-31 用户 Gate 5 批准 |
| G5-03 | BLOCKING | V0.1 四张 Buyer Clean 主稿多处字号低于 Gate 4 合同 | 可读性与既定视觉基线冲突 | V0.2 起恢复批准字号合同；最终 V0.5 Desktop/Mobile 经用户 Gate 5 批准 | Markets 页面执行任务 | CLOSED | 总控字号与 original-detail 复核；2026-08-31 用户 Gate 5 批准 |
| G5-04 | IMPORTANT | Desktop S6 六个 EU 国家项新增未批准的 `Explore market` | 公开 CTA 文案超出 Gate 2 matrix | V0.2 起删除该短语；最终 V0.5 仅使用国家名与结构性 affordance | Markets 页面执行任务 | CLOSED | 总控 Buyer Clean 扫描；2026-08-31 用户 Gate 5 批准 |
| GHC-MARKET-01 | BLOCKING | MARKET-000 全站唯一 Header / Mobile Menu / Footer Task 5 已通过总控复审，等待用户统一批准 | 只影响全局组件替换结果；不重开 Gate 2/3/4，也不改变已通过总控复审的 Gate 5 正文 | 保持 V0.2 规格、四张 V0.3 完整页、Responsive Component States V0.2、正文像素哈希、RFQ ON/OFF 与 Mobile Menu 状态不变 | 用户 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` | 总控独立核对 PASS；用户批准日期留空 |
| GHF-FIXED-RFQ-MARKET-01 | BLOCKING | MARKET-000 fixed-RFQ Global Chrome 已通过总控复审和用户统一批准 | 只替换 Header、Mobile Header、Mobile Menu 与 Footer；不得改变 Gate 5 正文、市场事实或任何门禁 | V0.3 规格、四张 V0.4 完整页与 Responsive States V0.3 保留为正式 fixed-RFQ 视觉基线 | 用户 | `APPROVED / CLOSED` | 用户批准日期 2026-08-30；视觉终点硬停止 |
| MARKET-000-G5-FRC-01 | BLOCKING | 用户要求将 MARKET-000 修订为 final-review candidate | 候选稿调整 Gate 5 正文视觉与 CTA/FAQ 关系，但不改变页面身份、关键词、Global Chrome 或事实门禁 | 总控复审 PASS；用户于 2026-08-31 批准并将 V0.4/V0.5 设为当前 Gate 5 baseline | 用户 | APPROVED / CLOSED | 42 PASS / 0 FAIL；四张批准资产 SHA/尺寸一致；五张 rollback 未变 |
| MARKET-000-G6-PCR-01 | BLOCKING REVIEW | 用户已授权开始 MARKET-000 Gate 6；完整审查包需项目总控独立复审 | 未经总控结论不得批准 Gate 6 或进入 Gate 7 | 初次提交 SEO/GEO/Schema Contract、Audit and Acceptance、Project-Control Submission 与 Gate 5 Manifest | 项目总控 | SUPERSEDED_BY_MARKET-000-G6-PCR-02 | 初次 fresh validation=`78 PASS / 0 FAIL` |
| MARKET-000-G6-PCR-02 | BLOCKING REVIEW | 项目总控条件退回：Gate 6 包缺少全站 production SVG Logo 当前依赖 | 仅补充 Logo 依赖；其余内容/视觉/SEO/GEO/Schema/route 分期已通过 | 已在四处登记 B04，并通过项目总控定向复审 | 项目总控 | PROJECT_CONTROL_REVIEW_PASS / CLOSED | targeted validation=`33 PASS / 0 FAIL`；四张 PNG 不变；用户后续已授权 Gate 7 编制 |
| MARKET-G6-B04 | EXTERNAL BRAND ASSET | 四个 production-capable SVG candidates 已通过 `TIO2MY-LOGO-SVG-PCR-01`；用户已批准品牌方向并确认使用权 | 关闭品牌/权利决定；实际 production 引用仍由 Home/Global Chrome owner 的晋升 Manifest 控制 | 旧 PNG Logo 继续只作为 Gate 5 静态视觉证据 | 用户 | APPROVED / CLOSED | 用户批准日期 2026-08-31 |
| MARKET-G7-B05 | SHARED OWNER MANIFEST | Gate 7 需要 Home/Global Chrome owner 晋升后的正式 production Logo Manifest | 已同步 Production Manifest V1.0、Logo Asset Addendum V1.0 与 Cross-Page Registry V1.0；Markets 已登记 | Gate 7 仅引用全局 asset keys，不复制/改写 SVG，不使用旧 PNG 作为 production asset | Home/Global Chrome owner | APPROVED / CLOSED | `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` |
| MARKET-000-G7-PCR-01 | BLOCKING REVIEW | MARKET-000 Gate 7 包需项目总控复审 | 未通过前不得标记 `APPROVED_FOR_HANDOFF`、handoff 或进入 Gate 8 | 五份 Gate 7 文件已通过独立项目总控复审 | 项目总控 | PROJECT_CONTROL_REVIEW_PASS / CLOSED | Gate 7 outcome=`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE8_AUTHORIZATION`；未 handoff；Gate 8 锁定 |
| MARKET-G6-I01 | IMPORTANT | Gate 1/2 历史文档保留 fixed-RFQ V0.2 之前的 Global Chrome 条件显示语言 | Gate 7 若误用会违反用户批准的全站固定 RFQ | 后续 Gate 7 必须以 `GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` 为较新控制，不回写批准的历史文件 | Gate 7 package owner | OPEN_CARRY_FORWARD / NON_BLOCKING_FOR_GATE_6 | Gate 8 实现、Gate 9 验证；RFQ route 不需在 Gate 7 前 live |
| MARKET-G6-I02 | IMPORTANT | Responsive States V0.4 PNG 内嵌制作时的 `DRAFT_FOR_FINAL_REVIEW` 标签 | 可能被误读为当前治理状态 | 不修改批准 PNG；Gate 5 Manifest、V0.4 规格批准行和 Gate 6 package 为当前权威 | Gate 7 package owner | OPEN_CARRY_FORWARD / NON_BLOCKING_FOR_GATE_6 | 资产 SHA 必须保持；不得因标签重导批准图 |
| MARKET-000-G9-ROQA-01 | GATE 9 PRIOR RETURN | 早期只读 QA 发现 shared Chrome 字体泄漏、Footer heading geometry 与 CMS fail-closed 三项问题 | 需在正式 Gate 9 重新验证 | 四视口、Playwright、基础设施测试与 PHP resolver harness 均已通过 | 项目总控 | VERIFIED_FIXED / CLOSED | `MARKET-000_GATE9_READ_ONLY_QA_EVIDENCE_V0.1.md` 第 7 节；2026-09-04 总控确认 |
| MARKET-G9-P0-01 | BLOCKING | `/markets/` 308 到 `/markets`，但 Canonical 仍指向尾斜杠 URL | 不是 self-Canonical；Gate 9/发布不能通过 | `616193f3…` 已令 `/markets/` 直接 200、`/markets` 308 到批准 Canonical，并通过 proxy/API/Schema/sitemap 回归 | 共享开发；Markets 自身 P0 | VERIFIED_FIXED / CLOSED | `MARKET-000_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md` |
| MARKET-G9-P0-02 | BLOCKING | 10 个可见 Market action 与 `APP-000` 最终返回 404 | 公开链接与 10-item ItemList 指向不可用目标 | 子页/Applications owner 获授权后实现并逐项验证；不得猜测内容或替换 URL | 总控协调各页面 owner；外部依赖/发布门禁 | PROJECT_CONTROL_CONFIRMED / OPEN | 22-route runtime probe；十个 Market 子页发布门禁继续 OPEN |
| MARKET-G9-P0-03 | BLOCKING | 固定 RFQ route 200 但表单显示暂不可用、无提交控件 | 无法完成表单 E2E；违反 fixed RFQ release acceptance | 经授权配置 receiver/access key，并复验 validation/privacy/failure/retry/success；不得隐藏 RFQ | CONV-RFQ/environment owner；外部依赖/发布门禁 | PROJECT_CONTROL_CONFIRMED / OPEN | RFQ production-browser evidence |
| MARKET-G9-P1-04 | IMPORTANT | `CONV-DOC` 与四个 hold Trade URL 直接请求返回 500 | 未解析记录未 clean fail-closed；但 Hub 当前零暴露 | 由各 owner/shared route layer 处理；Trade 继续不渲染 | 对应页面 owner/共享开发；全站路由洁净度 P1 | PROJECT_CONTROL_CONFIRMED / OPEN | 22-route runtime probe |

### 15.2 Gate 批准记录

| Gate | 交付物 | 提交日期 | 总控结论 | 用户批准要求 | 批准日期 | 备注 |
|---|---|---|---|---|---|---|
| Gate 0 | MARKET_PLAYBOOK_V0.1 + 本 Brief V0.1 | 2026-08-29 | PASS | 用户最终批准 Playbook/Brief | 2026-08-29 | `APPROVED`；页面生命周期 `APPROVED_FOR_DESIGN` |
| Gate 1 | Research/Evidence Audit + Route Audit + Localization Audit | 2026-08-29 | PASS | 用户最终批准三项审计与 Gate 1 | 2026-08-29 | `APPROVED`；G1-01=`CLOSED`；三项审计为批准基线 |
| Gate 2 | MARKET-000 Content Architecture | 2026-08-29 | PASS | 用户最终批准模块文案、状态和 GEO answers | 2026-08-29 | `APPROVED`；G2-01/G2-02=`CLOSED`；Content Architecture 为批准 baseline |
| Gate 3 | Desktop/Tablet/Mobile Wireframe | 2026-08-29 | PASS | 用户明确批准完整线框、响应逻辑及 A1/条件状态 | 2026-08-30 | `APPROVED`；G3-01/G3-02/G3-03=`CLOSED`；Wireframe=`APPROVED_GATE_3_BASELINE` |
| Gate 4 | Visual Direction + PRODUCT V0.2.1 Impact Audit | 2026-08-30 | PASS | 用户已明确批准视觉方向稿与关系影响边界 | 2026-08-30 | `APPROVED`；Visual Direction=`APPROVED_GATE_4_BASELINE`；G4-01/G4-02/G4-03=`CLOSED` |
| Gate 5 | Full Visual Design | 2026-08-31 | PASS | 用户最终批准 final-review candidate 与 Gate 5 | 2026-08-31 | `APPROVED_GATE_5_BASELINE`；`MARKET-000-G5-FRC-01`、G5-01/G5-02/G5-03/G5-04=`CLOSED`；四张批准资产保持不变 |
| Gate 6 | SEO/GEO/Schema Contract + Audit and Acceptance + Project-Control Submission | 2026-08-31 | `PROJECT_CONTROL_REVIEW_PASS` | 用户已授权 Gate 7 | 2026-08-31 | `MARKET-000-G6-PCR-02=CLOSED`；B04 已获用户批准并关闭；Gate 6 PASS 保持 |
| Gate 7 | 开发交付包 | 2026-08-31 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE8_AUTHORIZATION` | 项目总控独立复审 PASS | 2026-08-31 | `MARKET-000-G7-PCR-01=CLOSED`；`APPROVED_FOR_HANDOFF`，但未 handoff |
| Gate 8 | 外部开发 | 不属于本项目执行 | 实际候选实现已提供；由开发项目管理 | 不由本 Brief 批准 | 不适用 | 本项目未修改 D16；实现身份见 Gate 9 evidence |
| Gate 9 | 只读视觉、SEO、GEO 验收 | 2026-09-04 | `READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS` | 项目总控定向复审 PASS | 2026-09-04 | `MARKET-000-G9-ROQA-02=CLOSED`；旧 `ROQA-01` 三项与 P0-01 CLOSED；外部 P0-02/P0-03 与 P1-04 保持 OPEN |
| Gate 10 | 发布授权 | 未授权 | 不适用 | 必须由用户单独授权 | 未授权 | 开发或 QA 完成不等于发布 |

## 16. 外部开发交付包

交给 `D:\16Wordpress_nextjs` 前必须具备：

- [x] 已批准 MARKET_PLAYBOOK 路径。
- [x] 已批准本任务卡路径。
- [x] 已批准 Desktop/Mobile/Tablet 视觉稿及 Responsive States。
- [x] 最终可见文案和 Buyer Questions Q1–Q6。
- [x] 12 页 Markets identity 与完整 22-route 状态/分期数据源。
- [x] 市场事实、官方来源、日期、freshness 和不渲染清单。
- [x] Production Logo Manifest、全局 asset keys、授权、历史 PNG 边界和 accessible name。
- [x] CMS/API semantic 字段与精确 Buyer Clean 数据。
- [x] 呈现模块、条件渲染、空状态和错误/发布阻塞行为。
- [x] CTA、route key 和 fixed RFQ 合同；本页不声明 Market prefill。
- [x] SEO、GEO、Schema、Canonical 和 hreflang 字段。
- [x] 内链和 breadcrumb 矩阵。
- [x] Brazil PT-BR 本地化 hold/DO_NOT_RENDER 记录；不伪装成已批准 localized page。
- [x] 视口、状态、无障碍和 Gate 9 只读 QA 清单。
- [x] `site_scope=tio2-my` 及不得影响的其他站点边界。

## 17. 完成、只读验收与发布

本任务卡已获用户批准 Gate 0–5，Gate 6、Gate 7 与 Gate 9 已获项目总控 PASS。外部候选实现的 Canonical/308 自身 P0 已关闭，页面 lifecycle=`READ_ONLY_QA_APPROVED`，Gate 9 disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`。十个 Market 子页、APP、RFQ 与 route-cleanliness 发布门禁保持开放；Gate 10、部署、发布和索引未授权。`MARKET-G6-B04` 与 `MARKET-G7-B05` 均已关闭，生产 Logo 仅引用共享 owner Manifest。

页面只有在内容、视觉、SEO、GEO、CTA、内链、Schema、响应式、无障碍和交付字段全部通过，且阻塞级问题关闭后，才能进入 `APPROVED_FOR_HANDOFF`。

外部开发完成后，本项目只读检查。只有批准交付包与可访问结果一致时，才可进入 `READ_ONLY_QA_APPROVED`。任何开发完成、合并、预览或只读 QA 通过都不等于发布授权。

## 18. 变更记录

| 版本 | 日期 | 变更类型 | 变更内容 | 批准来源 |
|---|---|---|---|---|
| V0.1 | 2026-08-29 | Gate 0 批准基线 | 建立 MARKET-000 页面合同；总控重新复审 PASS；用户最终批准 Gate 0；关闭 MKT-R001；仅授权 MARKET-000 进入 Gate 1 三项审计 | 用户批准；`APPROVED_FOR_DESIGN` |
| V0.1 / Gate 1 draft | 2026-08-29 | Gate 1 草案登记 | 新增 Research/Evidence、Route 与 Brazil PT-BR Localization Relationship Audit；MKT-R002/R003/R004/R005 保持 OPEN；Gate 2 未开始 | 待总控与用户 Gate 1 审查 |
| V0.1 / Gate 1 review revision | 2026-08-29 | G1-01 条件退回修订与总控复审 | 修正权威输入中的 Markets Playbook 状态为 `APPROVED_FOR_DESIGN / GATE_0_APPROVED_BASELINE`；三项审计结论不变；总控复审 PASS | 用户批准 Gate 1；G1-01=`CLOSED` |
| V0.1 / Gate 1 approval | 2026-08-29 | Gate 批准与下一阶段授权 | 用户最终批准三项 Gate 1 审计；升级为批准基线；授权 MARKET-000 Gate 2 Content Architecture；MKT-R002–005 保持 OPEN | 用户批准；页面生命周期保持 `APPROVED_FOR_DESIGN` |
| V0.1 / Gate 2 draft | 2026-08-29 | Gate 2 草案登记 | 新增最终模块叙事、英文 Buyer Clean 文案、SEO/GEO answers、CTA/内链与确定性 route-safe 状态矩阵；Gate 3 未开始 | `DRAFT_FOR_GATE_2_REVIEW`；待总控与用户审查 |
| V0.1 / Gate 2 review revision | 2026-08-29 | G2-01/G2-02 条件退回修订与总控复审 | 清理 Buyer Clean/GEO 内部术语；拆分 Hub PT-BR 可见关系与 Brazil child hreflang；GEO-A09 仅 RFQ true，S0 仅 Q7 base；总控复审 PASS；MKT-R002–005 保持 OPEN | `DRAFT_FOR_GATE_2_REVIEW`；待用户最终批准 |
| V0.1 / Gate 2 approval | 2026-08-29 | Gate 批准与下一阶段授权 | 用户最终批准 Gate 2；Content Architecture 升级为批准 baseline；G2-01/G2-02 关闭；生命周期升级为 `DESIGN_IN_REVIEW`；仅授权 Gate 3 | 用户批准；Gate 4/5 未授权 |
| V0.1 / Gate 3 draft | 2026-08-29 | Gate 3 草案登记 | 新增 Desktop S0、Tablet 响应逻辑、390px Mobile EU 收起/展开、S1–S6、menu、focus、长文案、无图片、无横滑和条件模块闭合线框；MKT-R002–005 保持 OPEN | `DRAFT_FOR_GATE_3_REVIEW`；待总控与用户审查 |
| V0.1 / Gate 3 review revision | 2026-08-29 | G3-02/G3-03 条件退回修订与总控复审 | 清除主画面省略和缩写占位；新增完整文案 390px 测量附录、S0/S6 高度范围与 CTA 后空白结论；RFQ 六个 surface 仅受 `RFQ_AVAILABLE` 控制；总控复审 PASS | `DRAFT_FOR_GATE_3_REVIEW`；待用户最终批准 |
| V0.1 / Gate 3 approval | 2026-08-30 | Gate 批准与下一阶段授权 | 用户最终批准 Gate 3；关闭 G3-01/G3-02/G3-03；Wireframe 升级为批准 baseline；仅授权 Gate 4 | 用户批准；`DESIGN_IN_REVIEW`；Gate 5 未授权 |
| V0.1 / Gate 4 draft | 2026-08-30 | Gate 4 视觉方向登记 | 新增 Industrial Editorial Market Navigator 方向，覆盖品牌延续、EU 非对称层级、颜色/字体、S0–S6、RFQ、PT-BR hold、390px、图片边界和 Gate 5 画面合同 | `APPROVED_GATE_4_BASELINE`；总控复审 PASS；用户批准 |
| V0.1 / PRODUCT relation V0.2.1 impact | 2026-08-30 | Gate 4 关系影响修订 | 注册唯一 V0.2.1 矩阵；确认 MARKET-000 无公开型号/工艺关系；补充 M-2377、M-996/M-2196、NO_PUBLIC_MAPPING、国家推断、GEO/Schema 与 Gate 5 视觉边界 | G4-02=`CLOSED`；用户批准 Gate 4 |
| V0.1 / Gate 4 governance consistency revision | 2026-08-30 | 治理一致性定向修订 | 将 Content Architecture 12.4 的阶段句改为历史快照；同步 Gate 4 用户批准与当前仅授权 Gate 5 草案 | G4-03=`CLOSED`；用户批准 Gate 4 |
| V0.1 / Gate 4 approval | 2026-08-30 | Gate 批准与下一阶段授权 | 用户明确批准 MARKET-000 Gate 4；Visual Direction 升级为批准 baseline；关闭 G4-01/G4-02/G4-03；仅授权 Gate 5 完整视觉稿 | 用户批准；`DESIGN_IN_REVIEW`；Gate 6/7 未授权 |
| V0.1 / Gate 5 draft | 2026-08-30 | Gate 5 完整视觉稿登记 | 新增 Desktop S0/S6、390px S0/S6、响应式/组件状态板、独立 Internal Review overlay、V0.2.1 关系与条件门禁验证 | `DRAFT_FOR_GATE_5_REVIEW`；G5-01=`OPEN`；待总控与用户审查 |
| V0.1 / Gate 5 `MARKET-000-G5-PCR-01` revision | 2026-08-30 | Gate 5 条件退回定向修订 | 保存四张 V0.1 主稿为 `SUPERSEDED`；导出 V0.2 Desktop/Mobile S0/S6；修复 Mobile H2 裁切、恢复 Gate 4 字号合同、删除 Desktop S6 `Explore market`；重新登记 Manifest、尺寸、390px 高度与 fresh validation | G5-02/G5-03/G5-04=`RESOLVED_IN_DRAFT_PENDING_REVIEW`；G5-01=`OPEN`；Gate 5 未批准 |
| V0.1 / Gate 5 project-control re-review | 2026-08-30 | Gate 5 总控定向复审 | V0.2 Mobile 右侧安全区、字号合同、四张主稿 original-detail、Desktop S6 国家行动、六图 Manifest 与全部既有门禁通过独立复核 | Gate 5 与 G5-02/G5-03/G5-04=`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；用户批准日期空白；G5-01=`OPEN` |
| V0.1 / Global Chrome Task 5 draft | 2026-08-30 | 全站唯一 Header / Mobile Menu / Footer 跨页修订 | 消费批准的 Global Chrome baseline 与 Home Task 2 公共状态板；新增 Full Visual Design V0.2、四张完整页 V0.3 和 Responsive Component States V0.2；以像素哈希锁定四张主稿正文零变化 | GHC-MARKET-01=`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；用户批准日期留空；Gate 5 正文状态不变；Gate 6/7、子页与开发未授权 |
| V0.1 / Fixed-RFQ Global Chrome Task 5 project-control review | 2026-08-30 | RFQ 全站固定规则跨页修订总控复审 | 总控独立确认 V0.3 规格、Brief、五张资产、尺寸/SHA、四段正文 RAW hashes、固定 RFQ、390px、Footer closing gap 与全部门禁 | GHF-FIXED-RFQ-MARKET-01=`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；未 CLOSED；Gate 5 正文状态不变；Gate 6/7、子页与开发未授权 |
| V0.1 / Fixed-RFQ Global Chrome unified user approval | 2026-08-30 | Home 与 03–07 fixed-RFQ 视觉包统一批准 | 将 MARKET-000 Full Visual Design V0.3、四张完整页 V0.4 与 Responsive Component States V0.3 固定为正式视觉基线；正文 hashes 与全部门禁不变 | GHF-FIXED-RFQ-MARKET-01=`APPROVED / CLOSED`；视觉终点硬停止；Gate 6/7、子页、开发、交付和发布未授权 |
| V0.1 / PRODUCT relation V0.3 source sync | 2026-08-30 | 当前关系源与治理文字同步 | 将唯一关系源切换为用户批准的 V0.3；登记 30/0/54、M-2377 五 Application + Sulfate、Specialty no-public、Rubber evidence-only 与 M-996/M-2196 comparison hold；MARKET-000 继续零行级渲染 | `MKT-REL-V03-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；approval source=`USER_APPROVED_PRODUCT_V0.3 + PROJECT_CONTROL_TARGETED_REVIEW`；正文、PNG、route/PT-BR/Trade 和 Gate 状态不变 |
| V0.1 / Gate 5 final-review candidate | 2026-08-31 | 用户要求的受控正文视觉修订 | 新增 V0.4 规格、Desktop/390px/768px V0.5 与 Responsive States V0.4；Hero 仅保留 Choose a Market；移除 quotation FAQ 与终端 body RFQ；强化十个 EN 市场入口；Global Chrome RFQ 保持 | `MARKET-000-G5-FRC-01=PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；G5-01、MKT-R002–005 与 Gate 6/7 边界不变 |
| V0.1 / Gate 5 final-review user approval | 2026-08-31 | Gate 5 批准与 Gate 6 授权 | 用户批准 V0.4/V0.5 final-review baseline；关闭 `MARKET-000-G5-FRC-01` 与 G5-01/G5-02/G5-03/G5-04；随后仅授权开始 Gate 6 审查 | 用户批准；`APPROVED_GATE_5_BASELINE`；Gate 7/子页/开发未授权 |
| V0.1 / Gate 6 draft submission | 2026-08-31 | 完整总控审查包 | 新增 Gate 5 Manifest、SEO/GEO/Schema Contract、Gate 6 Audit and Acceptance 与 Project-Control Submission；把 route/site_scope/Canonical/RFQ runtime 归入 Gate 8 实现和 Gate 9 只读 QA/发布门禁 | `MARKET-000-G6-PCR-01=SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`；Gate 7 未授权 |
| V0.1 / Gate 6 `MARKET-000-G6-PCR-02` targeted revision | 2026-08-31 | 唯一条件退回项修订 | 在 Submission、Audit、SEO/GEO/Schema Gate 7 field inventory 与 Brief 登记 `MARKET-G6-B04`；四个 SVG 仅为 production-capable candidates，批准 PNG 仍是静态证据；不修改其他 Gate 6 结论 | `RESOLVED_IN_DRAFT_PENDING_TARGETED_PROJECT_CONTROL_REVIEW / NOT_APPROVED`；Gate 7 未授权 |
| V0.1 / Gate 6 project-control pass | 2026-08-31 | Gate 6 定向复审通过 | 项目总控确认 B04 四处登记及全部边界，关闭 `MARKET-000-G6-PCR-02`；B01–B03、I01/I02、MKT-R002–005 保持 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE7_AUTHORIZATION`；Gate 7 仍 LOCKED |
| V0.1 / Gate 7 authorization | 2026-08-31 | 用户品牌与下一阶段决定 | 用户批准 production SVG Logo 品牌方向并确认使用权，关闭 B04；授权 MARKET-000 编制 Gate 7 包；共享 owner production Manifest 尚待同步 | Gate 7 IN PREPARATION；`MARKET-G7-B05=OPEN`；Gate 8 未授权 |
| V0.1 / Gate 7 shared Logo resolution | 2026-08-31 | 全局生产资产同步 | 消费 Production SVG Logo Manifest V1.0、Logo Asset Addendum 与 Cross-Page Registry；关闭 B05；不复制 SVG 或改用旧 PNG | B04/B05=`APPROVED / CLOSED`；implementation 未开始 |
| V0.1 / Gate 7 project-control submission | 2026-08-31 | 开发交付包草案 | 新增 Hand-off Package、CMS/API/Component Mapping、Acceptance and Blockers、Manifest 与 Submission；覆盖10 Market actions、22 routes、PT-BR/Trade/PRODUCT、fixed RFQ、responsive/a11y、scope 和 Gate 8/9 | `MARKET-000-G7-PCR-01=SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`；Gate 8 未授权 |
| V0.1 / Gate 7 project-control pass | 2026-08-31 | 独立总控复审通过 | 五份 Gate 7 文件、批准 PNG、production SVG owner authority、10/22 route、门禁、fixed RFQ、SEO/GEO/Schema、响应式、a11y、字段与 scope 全部通过 | `MARKET-000-G7-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；生命周期=`APPROVED_FOR_HANDOFF`；未 handoff；Gate 8 锁定 |
| V0.1 / Gate 9 fresh read-only QA submission | 2026-09-04 | 实际实现只读验收与总控提交 | 核对 commit chain、Gate 7 authority、22 routes、PT-BR/Trade/PRODUCT、Global Chrome、1440/768/390/320、SEO/GEO/Schema、a11y、tests/typecheck/build/browser；旧 ROQA-01 三项均建议关闭；新增三项阻塞与一项 important | `MARKET-000-G9-ROQA-02=SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`；生命周期=`READ_ONLY_QA_IN_REVIEW`；Gate 10 未授权 |
| V0.1 / Gate 9 project-control conditional return | 2026-09-04 | 总控接受结论与责任拆分 | 旧 ROQA-01 三项全部 `VERIFIED_FIXED / CLOSED`；Canonical/308 为 Markets 自身 P0；10 child routes、APP 与 RFQ 为外部依赖/发布门禁；CONV-DOC/Trade 500 为全站 route cleanliness P1 | `MARKET-000-G9-ROQA-02=PROJECT_CONTROL_REVIEW_ACCEPTED / CONDITIONAL_RETURN / NOT_APPROVED`；Gate 10 未授权 |
| V0.1 / Gate 9 targeted closure submission | 2026-09-04 | Canonical/308 定向复验 | `616193f3…` 已通过 24 files/159 tests、typecheck、build、13/13 Playwright、四视口/Axe、targeted ESLint 与截图 hash 复核；P0-01 建议关闭，外部门禁不变 | `TARGETED_REREVIEW_PASS / PROJECT_CONTROL_CLOSURE_REVIEW_PENDING`；Gate 10 未授权 |
| V0.1 / Gate 9 project-control closure | 2026-09-04 | 项目总控定向复审 PASS | `MARKET-G9-P0-01=VERIFIED_FIXED / CLOSED`；外部 P0-02/P0-03、P1-04、十个 Market 子页及 MKT-R002–005 继续 OPEN | `MARKET-000-G9-ROQA-02=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；lifecycle=`READ_ONLY_QA_APPROVED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；Gate 10 未授权 |
