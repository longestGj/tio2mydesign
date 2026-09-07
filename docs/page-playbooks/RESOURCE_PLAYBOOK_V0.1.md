# TiO2 Malaysia Resources 页面体系作业规范 V0.1

## 0. 文档控制

| 项目 | 内容 |
|---|---|
| 文档名称 | `RESOURCE_PLAYBOOK_V0.1` |
| 页面体系 | Resources |
| Playbook Key | `RESOURCE` |
| 版本 | V0.1 |
| 创建日期 | 2026-08-29 |
| 最后更新日期 | 2026-09-01 |
| 当前状态 | `APPROVED_FOR_DESIGN`；Gate 0 批准基线 |
| Gate 1–5 总控审查 | Gate 1 继续待用户批准；Gate 2–5 当前成果由用户于 2026-09-01 批准；`RES-HUB-FINAL-01=APPROVED / CLOSED` |
| Gate 0 状态 | `APPROVED`；RES-R001=`CLOSED`；RES-G0-01=`CLOSED` |
| 用户批准记录 | 2026-08-30：Gate 0；2026-09-01：RES-000 Gate 2–5、Gate 7 规格及 Gate 8 外部开发就绪授权；PRODUCT V0.3 继续为唯一关系源 |
| 当前执行页面 | `RES-000` Resources Hub |
| 后续仍由本任务负责但本轮不得启动的子页 | `RES-ORIGIN`、`RES-PROC`、`RES-CHEMOURS`、`RES-R706`、`RES-TRADE-EU`、`RES-TRADE-UK`、`RES-TRADE-IN`、`RES-TRADE-BR` |
| 批准范围 | Gate 0、Gate 2–7 已形成当前治理基线；Gate 8 外部开发就绪获授权；不授权本任务开发、Resource 子页、部署、发布或索引 |
| 编制角色 | Resources 页面执行任务 |
| 审核角色 | 项目总控与质量审查 |
| 最终批准人 | 用户 |
| 本项目范围 | 视觉策划、SEO、GEO、内容架构、开发交付规格和外部实现后的只读 QA |
| 明确禁止 | WordPress、Next.js、CMS、组件、样式、测试、开发、部署、DNS、索引、发布或任何代码修改 |

本文件是用户于 2026-08-30 批准的 Resources 页面体系 Gate 0 基线。`RES-000` 当前只采用已批准 PRODUCT V0.3 共同关系标准；该关系源更新不批准任何 Gate 1–5 成果、Resource 子页、公开链接、Trade Update、比较结论、开发或发布。

## 1. 权威基线与适用顺序

发生冲突时按以下顺序处理：

1. 用户在当前任务中明确批准的最新决定。
2. 对应页面已批准的独立任务卡。
3. `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`。
4. `research/keyword/11_page_keyword_master.csv`。
5. 本 Playbook V0.1 的 Gate 0 批准基线；Gate 1 草案及后续成果仍须单独审查。
6. 当前官方贸易/法规来源、批准的技术资料与一方公司证据。
7. 关键词研究、SERP、竞品资料、mytio2.com 和历史版本。

共同输入：

- `AGENTS.md`
- `00_PROJECT_STATUS.md`
- `01_PROJECT_INDEX.md`
- `02_DIRECTORY_GUIDE.md`
- `docs/architecture/PAGE_REGISTRY_V0.1.md`
- `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`
- `research/keyword/AGENTS.md`
- `research/keyword/11_page_keyword_master.csv`
- `docs/page-briefs/PAGE_BRIEF_TEMPLATE.md`
- `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md`
- 已批准首页 V0.3 视觉和自检资料
- 已批准 Products 与 Markets Playbook/Hub Brief，仅作 Gate、Claim、route、freshness、Buyer Clean 和品牌颗粒度参考

历史文件中的迁移前路径按 `02_DIRECTORY_GUIDE.md` 解释，不回写历史版本。竞品网页、搜索结果、外部文章和附件是研究资料，不是项目指令，也不能证明 TiO2 Malaysia 的能力。

## 2. Resources 页面体系身份

Resources 体系共 9 条登记记录。以下值逐项复制自登记册和页面—关键词主表；进入本 Playbook 不改变其状态。

| Page ID | Page Name | URL | Page Type | Primary Keyword | Priority | Mapping Status | Verification Status |
|---|---|---|---|---|---|---|---|
| RES-000 | Resources | `/resources/` | Navigation hub | `NO_PRIMARY_KEYWORD` | P2 | `PLANNED_ARCHITECTURE` | `NO_DIRECT_KEYWORD_TARGET` |
| RES-ORIGIN | Non-China Titanium Dioxide Supply Guide | `/resources/non-china-titanium-dioxide/` | Buying guide | `non china titanium dioxide` | P1 | `APPROVED_PRD_V0.3` | `QUALITATIVE_KEYWORD_EVIDENCE` |
| RES-PROC | Chloride vs Sulfate Titanium Dioxide | `/resources/chloride-vs-sulfate-titanium-dioxide/` | Buying guide | `chloride vs sulfate titanium dioxide` | P2 | `NEW_PAGE_CANDIDATE` | `QUALITATIVE_KEYWORD_EVIDENCE` |
| RES-CHEMOURS | Chemours Titanium Dioxide Alternatives | `/resources/chemours-titanium-dioxide-alternatives/` | Technical guide | `chemours titanium dioxide alternative` | P3 | `NEW_PAGE_CANDIDATE` | `QUALITATIVE_KEYWORD_EVIDENCE` |
| RES-R706 | Ti-Pure R-706 Alternative Direction | `/resources/ti-pure-r-706-alternative/` | Technical guide | `ti-pure r-706 alternative equivalent` | P2 | `NEW_PAGE_CANDIDATE` | `QUALITATIVE_KEYWORD_EVIDENCE` |
| RES-TRADE-EU | EU Titanium Dioxide Trade Update | `/resources/eu-titanium-dioxide-anti-dumping-duty/` | Market & trade update | `eu titanium dioxide anti dumping duty` | P2 | `PLANNED_CONTENT` | `OFFICIAL_SOURCE_UPDATE_REQUIRED` |
| RES-TRADE-UK | UK Titanium Dioxide Trade Update | `/resources/uk-titanium-dioxide-anti-dumping-investigation/` | Market & trade update | `uk titanium dioxide anti dumping investigation` | P2 | `PLANNED_CONTENT` | `OFFICIAL_SOURCE_UPDATE_REQUIRED` |
| RES-TRADE-IN | India Titanium Dioxide Trade Update | `/resources/india-titanium-dioxide-anti-dumping-duty/` | Market & trade update | `india titanium dioxide anti dumping duty` | P2 | `PLANNED_CONTENT` | `OFFICIAL_SOURCE_UPDATE_REQUIRED` |
| RES-TRADE-BR | Brazil Titanium Dioxide Trade Update | `/resources/brazil-titanium-dioxide-anti-dumping-duty/` | Market & trade update | `brazil titanium dioxide anti dumping duty` | P2 | `PLANNED_CONTENT` | `OFFICIAL_SOURCE_UPDATE_REQUIRED` |

### 2.1 状态不能合并或升级

- `APPROVED_PRD_V0.3` 只表示页面映射已批准，不表示内容、route、链接、事实或发布已批准。
- `PLANNED_ARCHITECTURE` 只表示 Hub 已进入架构规划，不得改写成 `APPROVED_NAVIGATION_HUB`。
- `PLANNED_CONTENT` 不表示 Trade Update 已研究、已核实、已上线或仍然新鲜。
- `NEW_PAGE_CANDIDATE` 只是候选。候选页不得进入公共链接、摘要、面包屑、导航、站点地图或 Schema，也不得被描述为已批准、即将上线或 live。
- `OFFICIAL_SOURCE_UPDATE_REQUIRED` 是强制事实门禁；旧官方资料不能自动证明当前状态。
- 页面生命周期、Mapping Status、Verification Status、内容批准状态、URL 批准状态、route live 状态和 freshness 状态必须分开记录。

### 2.2 当前 Gate 1–5 执行边界

- `RES-000` 在所有关系表面只采用 PRODUCT V0.3 唯一关系源；Hub 继续不渲染行级推荐或型号映射。
- 八个子页只允许作为 RES-000 的登记、owner、证据门禁、route/freshness 资格对象出现。
- 不建立八个子页的 Brief、研究审计、内容架构、线框、视觉稿或公开文案。
- 不新增 Resources 列表外页面，不建立 Legal/Privacy 占位页，也不改变 54 页登记册。
- Gate 2–7 当前治理基线已锁定；Gate 1 仍保持原状态。Gate 7 已 `PROJECT_CONTROL_REVIEW_PASS / CLOSED`，页面 `APPROVED_FOR_HANDOFF`；Gate 8 外部开发就绪已授权，但本任务不得开发、部署或发布。

## 3. 页面类型和内容职责

### 3.1 Resources Hub

`RES-000` 是计划中的可索引导航中心，不拥有独立商业主关键词。它负责：

- 按采购问题把买家导向教育、工艺比较、替代来源研究和当前贸易更新。
- 解释 Buying Guide、Technical Guide 和 Trade Update 的用途差异。
- 说明内容来源、日期、适用范围、事实/分析区分和复核机制。
- 连接 Resources 与 Products、Markets、Applications、Documents、About 和 Conversion owner 页面。
- 在候选、计划、未批准、过期或 route 不可用时保持无死链、无空卡、无内部状态泄漏的自然布局。

Hub 不得成为文章卡片墙、新闻聚合页、品牌对比页、关税资讯站或商业 supplier 落地页。

### 3.2 Buying Guide

Buying Guide 负责采购教育和研究判断，例如来源多元化或工艺选择框架。它可以：

- 定义买家需要比较的因素。
- 解释进一步核对技术资料、市场、文件或报价的步骤。
- 在有证据时连接到对应 owner 页面。

它不得：

- 取代 Market 页的 supplier intent。
- 取代 Product/Process 页的产品或工艺 owner 内容。
- 把替代来源写成关税或贸易措施规避方案。
- 从关键词、分类名或竞品页面推断 TiO2 Malaysia 的产品性能或供应能力。

### 3.3 Technical / Brand Alternative Guide

品牌或牌号替代方向只能服务“如何评估替代方案”的研究意图。未来若候选页获批，必须：

- 区分搜索意图、比较框架、技术数据和商业推荐。
- 把竞品商标作为识别对象，而不是暗示隶属、授权、认可或合作。
- 按指标、应用、配方、工艺、测试和文件逐项核对。
- 对每项可比较主张建立技术证据和 Claim ID。

不得使用或暗示：`identical`、`same as`、`drop-in replacement`、`one-to-one equivalent`、`guaranteed replacement`、保证适用或保证结果。关键词中出现 `equivalent` 不构成发布等效结论的许可。

### 3.4 Market & Trade Update

Trade Update 负责特定市场的政策、调查、措施或相关贸易状态更新。它必须：

- 以当前官方来源为首要依据。
- 明确管辖区、产品范围、原产地范围、程序阶段、有效日期、资料日期和最后复核日期。
- 区分调查、登记、临时措施、最终措施、复审、暂停、终止和到期。
- 区分事实、官方原文摘要和 TiO2 Malaysia 的分析。
- 链接回对应 Market procurement page，而不是取代商业落地页。

Trade Update 不得：

- 暗示规避、绕过、转运、改变原产地或自动不适用。
- 用标题或摘要夸大调查阶段为已生效措施。
- 用非官方文章证明当前法律状态。
- 在过期、待复核或适用范围不明时继续进入 Hub、Schema 或 GEO answer block。

## 4. 关键词与防内耗合同

| 意图 | 唯一 Owner | Resources 允许行为 | 禁止行为 |
|---|---|---|---|
| Resources 导航 | RES-000 | 使用内容类型和采购问题帮助选择 | 为 Hub 创造商业主关键词 |
| Non-China / alternative origin research | RES-ORIGIN | 研究合法来源多元化 | 抢 Home/About/Market supplier、制造或 origin proof 意图 |
| Chloride vs Sulfate 比较 | RES-PROC（仍为候选） | 获批后比较采购核对因素 | 在 Hub 或 Process 页展开 versus SEO 正文 |
| Chemours alternative research | RES-CHEMOURS（仍为候选） | 获批后提供证据门禁比较框架 | 声称品牌/产品等同、授权或保证替代 |
| R-706 alternative intent | RES-R706（仍为候选） | 获批后处理牌号比较研究 | 把关键词中的 `equivalent` 写成事实 |
| EU/UK/India/Brazil trade update | 对应 RES-TRADE-* | 使用当前官方来源说明详细政策意图 | 抢 Market supplier 词或暗示规避 |
| 国家 supplier / procurement | 对应 MARKET-* | 轻量回链 | 把 Resources 写成商业 supplier 落地页 |
| 泛产品、工艺和型号 | PRODUCT-* / GRADE-* | 解释 owner 关系并导流 | 复制产品详情或抢型号词 |
| 泛应用 | APP-* | 导流到应用 owner | 发布通用应用 SEO 正文 |
| 文件与合规申请 | DOC-* / CONV-DOC | 说明进一步核对路径 | 承诺文件、合规或注册可用性 |
| 制造、原产地、追溯事实 | ABOUT-001 / DOC-COO | 只在已验证时做轻量关系 | 取代事实 owner 或自行证明 |
| 报价行动 | CONV-RFQ | 条件 CTA 和上下文预填 | 在 Hub 内嵌 RFQ 表单 |

所有 Resources 子页各自只有一个主关键词。`RES-000` 明确使用 `NO_PRIMARY_KEYWORD`；子页名称可作为可见导航标签，但不得被 Hub 的 Title、H1、首屏、Meta、摘要或大段正文重复优化。

## 5. 统一 Gate 流程

### Gate 0：任务准入（2026-08-30 已批准基线）

- 核对 Page ID、URL、Page Type、Priority、Mapping Status 和 Verification Status。
- 从主表原样复制 Primary、Secondary、Search Intent、Buyer Stage、Source Cluster、Page Role、Excluded 和 Cannibalization Boundary。
- 建立 Playbook 草案和一个具体页面的 Brief 草案。
- Playbook 的 Gate 0 基线保持 `APPROVED_FOR_DESIGN`；RES-000 Gate 2–5 当前成果已于 2026-09-01 获批，但这不批准任何子页、Gate 6/7、开发或发布。

### Gate 1：研究、证据、route 与 freshness 审计

- 核对搜索意图、买家问题、现有 owner 页面和内部链接关系。
- 建立 Evidence Register、Claim Register 和逐 Claim 渲染决定。
- 对品牌/牌号替代内容独立执行商标、技术证据和非等效边界审计。
- 对 Trade Update 独立执行官方来源、适用范围、日期、程序状态、route 和 freshness 审计。
- 缺少证据只冻结受影响事实、关系、摘要、链接或 Schema，不用占位内容填满页面。

### Gate 2：内容架构

- 锁定页面叙事、H1、模块、CTA、内链、GEO answer blocks 和公开文案候选。
- Hub 必须提供内容类型选择逻辑和证据透明度，不能只是卡片列表。
- 子页必须提供独有研究价值；不得模板替换品牌、国家或牌号。
- 每个买家可见事实必须映射唯一 Claim ID；内部状态不得进入 Buyer Clean。

### Gate 3–5：线框、视觉方向和完整视觉稿

- 每个 Gate 单独批准，不并行越 Gate。
- 同时覆盖 Desktop、Tablet、Mobile 和 390px。
- 使用真实长度标题、来源名称、日期、长 URL 标识、条件省略、无图片、无当前内容和 route-safe 状态。

### Gate 6–10

- 本项目只审查并交付批准规格，不进行开发、测试或部署。
- 外部开发完成后，本项目只读验收并提交问题清单。
- 只读 QA 通过不等于发布；发布、DNS、生产数据和开放索引必须另获用户授权。

## 6. 内容类型与 freshness 合同

### 6.1 共同来源字段

每条可公开事实至少记录：

- `claim_id`
- `source_id`
- 来源名称与发布机构
- 官方或一方原始 URL / 文件标识
- 原始发布日期；无显示值时记 `DATE_NOT_PUBLISHED_BY_SOURCE`
- 生效日期、到期日期或程序日期；不适用时明确 `NOT_APPLICABLE`
- 抓取/获取日期
- 最后人工复核日期
- 下次复核截止日期
- 管辖区、产品、牌号、原产地、市场和时间适用范围
- 事实、引述摘要、分析或推断分类
- 审核人和验证状态
- 渲染决定

日期不得只写“recent”“current”或“latest”。公开页面至少显示可理解的来源日期和 `Last reviewed` 日期；机器可读日期必须与可见日期一致。

### 6.2 内容类型复核机制

| 内容类型 | 最低复核门禁 | 周期上限 | 触发式复核 | 过期行为 |
|---|---|---|---|---|
| Buying Guide | 关键事实有批准证据，结构与 owner 关系仍有效 | 每 180 天 | PRD、产品、来源地、文件或市场基线变化时立即复核 | 受影响事实、摘要和链接不渲染；其余静态教育内容可独立复核 |
| Technical / Alternative Guide | 每项比较有当前技术证据和人工技术审核 | 每 90 天 | TDS、竞品牌号、应用、产品事实或技术 owner 结论变化时立即复核 | 比较结论及相关 CTA/Schema 停止公开；不得用旧比较继续获客 |
| Active investigation / provisional Trade Update | 当前官方来源、程序状态和适用范围完整 | 每 30 天 | 新官方 notice、法规、调查决定、税率、产品/原产地范围或期限变化后 2 个工作日内复核 | 整条 Hub 链接、摘要、ItemList 和 GEO 引用停止公开 |
| Definitive/stable Trade Update | 当前官方来源、措施状态和期限完整 | 每 90 天 | 复审、暂停、终止、法院/监管决定或官方数据库变化后 2 个工作日内复核 | 同上；旧结论不作为 fallback |

周期是内部最大间隔，不替代事件触发。任何页面在首次公开前都必须做一次当日或发布窗口内的官方来源复核。若官方来源本身没有明确日期、范围或当前状态，使用 `VERIFY_REQUIRED` / `DO_NOT_RENDER`，不得按周期自动解冻。

### 6.3 Trade Update 官方来源层级

| 市场 | 首选官方来源类别 | 允许用途 | 禁止替代 |
|---|---|---|---|
| EU | European Commission、EUR-Lex、ECHA、Access2Markets 或其他官方 EU customs/trade-remedy 来源 | 法律文本、调查/措施状态、适用范围、日期 | 媒体、律所、供应商文章不能作为最终权威 |
| UK | GOV.UK、Trade Remedies Authority、UK Trade Tariff、HMRC | 英国调查、措施、海关和日期 | 不得把 EU 状态复制为 UK 当前事实 |
| India | DGTR、CBIC、Department of Revenue、Ministry of Commerce and Industry | 调查、通知、税则和适用范围 | 行业文章只能作线索 |
| Brazil | MDIC、SECEX、CAMEX/GECEX、Receita Federal、Diário Oficial da União | 巴西官方程序、措施、税则和日期 | 英语二手摘要不能取代葡语官方原文 |

官方资料必须保存可复核的完整原始记录。翻译或内部摘要是派生资料，不能取代原文。正式研究捕获应进入 `research/` 体系；当前 RES-000 Gate 1 只审计已有本地抓取资格，不新建任何 Trade 子页证据包。

### 6.4 freshness 状态和公开行为

| 内部状态 | 定义 | Hub 公共行为 |
|---|---|---|
| `CURRENT` | 官方来源、范围、Claim、内容批准和复核日期全部有效 | 在 route live 时可进入可见链接、摘要和一致 Schema |
| `REVIEW_DUE` | 到达复核期限或触发事件尚未完成复核 | 不进入 Hub 链接、摘要、排序、Schema、Meta 或 GEO answer |
| `STALE_HOLD` | 已知过期、冲突、范围不明或旧结论可能误导 | 完全停止公开；不显示“旧版仅供参考”获客卡 |
| `WITHDRAWN` | 内容被撤回、终止或不再适合公开 | 从 Hub 和机器可读关系移除；保留内部审计记录 |

`CURRENT` 不是人工文本标签。公开页面不显示 `CURRENT`、`REVIEW_DUE`、`STALE_HOLD` 或 `WITHDRAWN` 等工作流术语；Buyer Clean 只显示自然语言来源、范围和日期。

## 7. 证据、Claim 与渲染合同

### 7.1 公共验证状态

| 内部状态 | 公共行为 |
|---|---|
| `verified` | 可进入可见页面和一致的 HTML、JSON、API、Meta、OG、ALT 与 Schema |
| `pending_verification` | 不渲染，不通过任何公共输出泄漏 |
| `not_public` | 不公开，不因内部存在资料而输出 |

Claim Register 的渲染决定只使用：

- `RENDER`
- `RENDER_WITH_QUALIFIER`
- `CONTROLLED_REQUEST_ONLY`
- `DO_NOT_RENDER`

### 7.2 Evidence 与 Claim 一致性

- 每个公开 Claim 必须有唯一 Claim ID。
- 每个 Claim ID 必须关联至少一个明确 Evidence ID；Evidence 需要来源、日期、范围和验证状态。
- 一个 Evidence ID 可以支持多个明确受限的 Claim，但不得把搜索意图证据扩展成公司能力证据。
- 页面登记册、PRD 和关键词主表只能证明页面身份、URL、职责、关键词和状态。
- 关键词与 SERP 只能证明需求和表达方式，不能证明性能、等效、制造、原产地、文件、库存、价格、交期、物流或贸易状态。
- mytio2.com 只作事实候选；不得复制正文或独立形成 `verified` Claim。
- 任一 Claim 的证据过期或适用范围不匹配时，只冻结该 Claim、相关摘要、CTA 或关系，不扩散成整页虚假事实。

### 7.3 全体系禁止主张

- 完全等同、保证替代、一比一替代、drop-in replacement、最佳、最优或最低成本。
- 未验证的 Malaysia manufacturing、origin、COO、traceability 或运营主体关系。
- 未验证的产品应用、工艺、指标、文件、认证、注册或合规状态。
- 未验证的库存、产能、MOQ、价格、交期、包装、Incoterm、港口、仓库、运输或样品条件。
- 规避、绕过、转运、改变原产地或自动免受贸易措施的暗示。
- 把调查、进口登记或临时措施写成最终措施。
- 用图片、图标、地图、徽章或 Schema 制造上述主张。

## 8. RES-000 Hub 标准

### 8.1 模块顺序方向

| 顺序 | Module ID | 模块 | 目的 | Gate 0 核心规则 |
|---:|---|---|---|---|
| 0 | GLOBAL_HEADER | Header | 全站导航和 RFQ | 固定为 `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`；Resources 为当前项，Home 是可见文字入口 |
| 1 | BREADCRUMB | Breadcrumb | 建立层级 | `Home > Resources`；与可见 Schema 一致 |
| 2 | HERO | Resources Hub Hero | 说明按采购问题选择资料 | 不使用任一子页主关键词；主 CTA 定位到资源路径 |
| 3 | RESOURCE_PATHS | Resource Path Selector | 区分 sourcing/buying、technical comparison、current trade updates | 每个内容族至少有一个满足公开门禁的条目才渲染；不是卡片墙 |
| 4 | EVIDENCE_STANDARD | How We Source and Review Information | 解释来源、范围、日期、事实/分析和复核 | 使用自然买家语言，不公开内部状态码 |
| 5 | CURRENT_UPDATES | Current Trade Updates | 展示满足官方来源和 freshness 门禁的 Trade Update | 0 条时整模块不渲染；不得显示旧卡、空卡或 Coming soon |
| 6 | PROCUREMENT_PATHS | Continue Your Procurement Review | 连接 Products、Markets、Applications、Documents | 只解释 owner 职责；route 满足条件后才链接 |
| 7 | BUYER_QUESTIONS | Buyer Questions | 提供可引用导航和证据边界答案 | 不回答具体政策、等效或公司能力事实 |
| 8 | FINAL_ACTION | Final Action | 条件进入 RFQ 或合适 owner 页面 | 不内嵌表单；只传递用户明确选择的上下文 |
| 9 | GLOBAL_FOOTER | Footer | 导航和实体收口 | 只使用登记页和已验证主体信息；不新增 Legal/Privacy 页面 |

### 8.2 条目公开资格

Hub 中每个子页条目必须同时满足：

1. 页面 Mapping Status 允许进入当前阶段；`NEW_PAGE_CANDIDATE` 永远不满足。
2. URL 已批准；暂定或未经变更控制的 URL 不满足。
3. 页面独立 Brief、内容和公开 Claim 已批准。
4. `route_live_status=true`，且 Canonical 与批准 URL 一致。
5. 对 Trade Update，`freshness_status=CURRENT` 且官方来源/范围/日期审计通过。
6. 对比较/替代内容，技术和非等效审计通过。
7. 标题、摘要、图片、ALT、Meta 和 Schema 都只包含 verified 内容。

任一条件失败时，该条目不得进入公共链接、摘要、卡片、排序、站点地图关系、ItemList、GEO answer、Meta 或 OG。CTA 省略后不得留下空卡、空标题、标点、隐藏链接或内部状态。

### 8.3 当前九页的 Hub 行为

| Page ID | 当前状态解释 | Gate 0 Hub 规则 |
|---|---|---|
| RES-ORIGIN | 映射已批准；内容、route 与公开事实未在本轮核验 | 未来通过独立 Gate 后才可成为公开条目；本轮不视为 live |
| RES-PROC | `NEW_PAGE_CANDIDATE` | 不进入公共链接、摘要或 Schema |
| RES-CHEMOURS | `NEW_PAGE_CANDIDATE` | 不进入公共链接、摘要或 Schema；不在 Hub Meta/H1 使用竞品名 |
| RES-R706 | `NEW_PAGE_CANDIDATE` | 不进入公共链接、摘要或 Schema；不输出等效暗示 |
| RES-TRADE-EU/UK/IN/BR | `PLANNED_CONTENT` + `OFFICIAL_SOURCE_UPDATE_REQUIRED` | 只有独立内容批准、官方审计、CURRENT freshness 和 route live 后才进入 Hub |

## 9. SEO 合同

### 9.1 RES-000

| 字段 | Gate 0 已批准方向；Gate 2 前不得锁定最终文案 |
|---|---|
| Primary Keyword | `NO_PRIMARY_KEYWORD` |
| Secondary Keywords | `buying guides | technical guides | market trade updates`；仅作导航分类，不作为获取词 |
| Search Intent | `N`；Navigation |
| Buyer Stage | Navigation |
| Source Cluster | `PRODUCT-05 | BRAND-01 | BRAND-02 | TRADE-*` |
| Excluded Keywords | `all child-guide primary terms` |
| Cannibalization Boundary | `Hub does not own child-guide primary terms.` |
| Title 方向 | `Titanium Dioxide Resources | TiO2 Malaysia`；Gate 2 锁定最终文案 |
| H1 方向 | `Resources for Titanium Dioxide Procurement Decisions`；Gate 2 锁定最终文案 |
| Meta 方向 | 说明按采购问题浏览有来源和日期的指南与当前更新，不包含子页主关键词、政策结论、等效或供应承诺 |
| Canonical | `https://tio2malaysia.com/resources/` |
| Robots | `index,follow` 方向；仅为 Gate 0 规划，发布前须单独复核和批准 |
| Hreflang | `NOT_APPLICABLE`；未来本地化需变更控制 |

Hub 不得在 Title、H1、Hero、Meta、主要 H2 或重复摘要中主动优化 `non china titanium dioxide`、process comparison、Chemours/R-706 alternative 或四个 Trade Update 主关键词。

### 9.2 子页共同 SEO 边界

- 每个子页只承接主表中的唯一研究/比较/更新意图。
- Market、Product、Application 和 Document 商业 owner 词不得成为 Resources 主标题。
- 候选 URL 不进入 sitemap、Canonical 依赖、Hub 链接或 hreflang。
- 交互过滤、内容类型、freshness 状态和排序参数不生成可索引页面。
- Trade Update 标题必须准确反映官方程序状态；不得为了搜索点击率夸大。

## 10. GEO 与 Schema 合同

### 10.1 GEO

Hub 可以建立的关系仅限：

- TiO2 Malaysia → Resources navigation hub。
- Resources Hub → 当前可见、已批准且 live 的指南/更新。
- 可见 Resource item → 对应 Products、Markets、Applications、Documents 或 Conversion owner 页面。
- Trade Update → 官方来源、管辖区、资料日期和最后复核日期；仅在内容当前时。

建议回答的导航问题：

1. Which resource type should I use for a sourcing, technical, or trade-policy question?
2. How are technical comparisons separated from product recommendations?
3. How can I tell when a trade update was last reviewed?
4. Where should I continue for product selection, market procurement, documents, or a quotation?

答案必须在页面可见、上下文完整，并解释边界；不得用 GEO 生成等效结论、政策结论或公司能力主张。

### 10.2 Schema

RES-000 建议方向：

- `CollectionPage`
- `ItemList`
- `BreadcrumbList`

约束：

- `ItemList` 只包含与页面可见顺序一致、已批准、内容当前且 route live 的条目。
- `NEW_PAGE_CANDIDATE`、过期 Trade Update、未批准内容和隐藏条目不得进入 JSON-LD。
- Hub 不为子页生成 `Article`、`NewsArticle`、`Product`、`Offer`、`Review`、`FAQPage` 或 `QAPage` 标记。
- 子页未来如使用 `Article`，`datePublished`、`dateModified`、author/publisher、source 和可见日期必须一致；当前不为任何子页预先批准 Schema。
- Schema 官方要求在发布前重新核对；变化如影响页面职责或索引须进入变更控制。

## 11. Route、CTA 和内部链接合同

### 11.1 Route 状态分离

每个目标独立记录：

- `mapping_status`
- `url_approval_status`
- `content_approval_status`
- `claim_gate_status`
- `route_live_status`
- `freshness_status`（时间敏感内容）
- `localization_status`（存在本地化时）

Mapping approved 不等于 content approved；URL 记录不等于 route live；route live 不等于内容当前。

### 11.2 CTA

| 位置 | CTA 方向 | 规则 |
|---|---|---|
| Header | Request a Quote | 全站固定行动；Conversion workflow/route 未批准或不可用时按全站 route 规则省略 |
| Hub Hero | Browse Resources | 页面内定位到 `#resource-paths` |
| Resource item | Read Guide / View Current Update | 仅对满足全部公开资格的条目渲染 |
| Procurement Paths | Explore Products / Markets / Applications / Documents | 目标 URL 批准且 route live 后渲染 |
| Final Action | Request a Quote | 跳转独立 RFQ；不内嵌表单；预填 `source_page=RES-000` |

Hub 不设置 Sample 或 Request Documents 为主 CTA。只有买家明确选择具体资源、市场、产品或应用时才传递对应上下文；候选或系统推断不得成为预填值。提交成功不暗示报价、文件、样品、价格、库存或交期已批准。

### 11.3 入站与出站

Hub 入站方向：Header、Footer、Home Resources 模块、子页 breadcrumb/back-to-resources、Products/Markets/Applications/Documents 的研究入口。

Hub 出站方向：满足资格的 Resource 子页，以及 route 安全的 Products、Markets、Applications、Documents、About 和 RFQ owner 页面。

- 规格使用 Page ID 或 route key，不把候选或未批准 URL 写成永久组件依赖。
- 不从 TIOVAR、mytio2 或其他 `site_scope` 回退链接、菜单、内容、媒体或表单上下文。
- Footer 只使用登记册中的已批准入口；未登记 Legal/Privacy 页面不得作为占位永久链接。

## 12. 视觉与响应式合同

### 12.1 品牌方向

- 继承批准首页的 Industrial Editorial 基底。
- 使用轻量 Technical Editorial 的细线、编号、来源/日期元数据和编辑式列表。
- 白色为主、Navy 建立层级；浅底小文字和实心 CTA 使用 `#007F77`，`#00A99D` 只作非文字强调。
- 页面信息密度中等偏高，不用装饰性空白制造长度。
- 不复制 Products Selector 或 Markets 的 EU 非对称布局；Resources 应以“内容类型 + 来源透明度 + 时间状态”形成独有视觉逻辑。
- 不采用新闻门户、博客瀑布流、SaaS dashboard、KPI、价格卡或电商推荐气质。

### 12.2 图片与图形

- 首选来源文档、抽象材料、编辑式流程、简洁数据/时间标记和中性工业应用视觉。
- 不使用竞品 Logo 作为装饰或暗示合作。
- 不用法槌、钱币、关税盾牌、警告红章等夸张法律/贸易视觉。
- 地图只说明内容适用管辖区，不暗示当地办公室、仓库、覆盖、库存或运输能力。
- 图片必须有来源和使用权；无图时使用批准的文本/图形空状态，不跨站回退。

### 12.3 Desktop

- 内容容器 1200–1320px。
- Hero 可双栏，但 H1、页面职责和 Browse Resources 是第一焦点。
- Resource Paths 使用三个编辑式内容族，不使用九张同尺寸卡。
- Source/date/scope 元数据有清晰层级，不做拥挤标签云。
- Current Updates 只在有合格条目时出现，并保持紧凑。

### 12.4 Tablet

- 双栏平稳转为单栏或 2+1 布局。
- 标题、来源名称、长日期和 CTA 自然换行。
- 不依赖 hover 才能理解条目状态。

### 12.5 Mobile / 390px

- Hero 单列，CTA 可全宽。
- 内容族纵向排列；不横向滑动。
- 条目元数据按 `Type → Title → Scope/Date → Summary → CTA` 顺序阅读。
- Buyer Clean 可见文字原则上不低于 14px。
- 触控目标和条目间距足够，完整 CTA 不被截断。
- 390px 下 `scrollWidth` 不超过视口；长品牌名、官方机构名、标题和 URL 标识可换行。
- 按钮后无大段无目的空白；条件模块省略后相邻 section 自然闭合。
- Mobile menu open 必须显示完整 Header 顺序，Home 是可见文字入口。

### 12.6 后续 Gate 必须交付的状态

- Desktop 默认和 390px Mobile 默认。
- Mobile menu open。
- 条目 hover 与 keyboard focus。
- 只有 RES-ORIGIN 合格、候选全省略、Trade Update 全省略的 route-safe 组合。
- 多条 CURRENT Trade Updates 的最大堆叠组合。
- Trade Update 在 `REVIEW_DUE` 后从 Hub 原子省略的组合。
- 某内容族 0 条时整模块省略。
- 无图片、长来源名、长标题、长日期和 200% 缩放。

以上是未来 Gate 3–5 的验收合同，不授权现在制作线框或视觉稿。

## 13. 可访问性合同

- 页面只有一个 H1，标题层级连续。
- Header、内容族、展开、链接和 CTA 均可键盘操作。
- Focus 清晰，状态不只依赖颜色。
- 链接名称脱离上下文仍可理解；不得连续使用含义不明的 `Read more`。
- 来源、日期和适用范围在阅读顺序中与对应条目关联。
- 装饰图空 ALT；信息图、地图和图表有文本等价表达。
- 颜色对比度遵循首页 V0.3 修正；亮 Teal 不承载浅底小文字或白字 CTA。
- 触控目标和间距满足适用要求。
- 200% 缩放、390px、长英文和葡语来源名称下仍可用。
- 动效尊重 reduced motion。
- 自动更新时间、轮播或滚动新闻条不允许干扰阅读。

## 14. 开发交付规格边界

本节只定义未来交给 `D:\16Wordpress_nextjs` 外部开发项目的结果字段，不规定实现技术，本项目不实施。

共同交付至少包括：

- Page identity、language、Canonical、indexing intent 和 `site_scope=tio2-my`。
- SEO、Open Graph、Robots、Sitemap 和 Schema 输入。
- Resource type、title、summary、scope、source、source date、last reviewed 和 next review。
- Page ID/route key、Mapping、URL approval、content approval、claim gate、route live 和 freshness。
- Evidence/Claim 关系、事实/分析分类和渲染决定。
- 条件渲染、空状态、stale removal、无图片和错误状态。
- 图片、ALT、授权和不跨站回退要求。
- CTA 与 RFQ 上下文合同。

强制隔离：

- 只读取 `site_scope=tio2-my` 数据。
- 不从 TIOVAR、mytio2 或其他 scope 回退内容、媒体、菜单、SEO、缓存、route、Schema 或表单上下文。
- 未验证、候选、未批准或过期字段不进入 HTML、JSON、API、Meta、OG、ALT 或 Schema。
- 内部状态不得成为 Buyer Clean 徽章、标签或解释。
- 共享组件影响由外部开发项目评估和实现，本项目不修改代码。

## 15. 只读 QA

### 15.1 身份与状态

- 9 个 Resources Page ID、URL、关键词、Mapping 和 Verification 与主表/登记册一致。
- `RES-000` 保持 `PLANNED_ARCHITECTURE` / `NO_DIRECT_KEYWORD_TARGET`。
- 三个候选没有进入公共输出。
- 四个 Trade Update 没有在缺少 current official evidence 时进入公共输出。

### 15.2 内容与证据

- 每个公开 Claim 可追溯到来源、日期和范围。
- 事实与分析清楚区分。
- 没有等效、保证替代、规避或未经证实的公司/产品/供应主张。
- 过期内容、旧摘要和旧 Schema 已原子移除。

### 15.3 SEO、GEO 与 Schema

- Hub 保持无主关键词导航职责，不侵占子页主词。
- ItemList 与可见、批准、CURRENT、live 条目一致。
- 候选和 stale 条目不在 sitemap、JSON-LD 或 GEO answers。
- Buyer Questions 可引用但不越界。

### 15.4 视觉、响应式和无障碍

- Desktop、Tablet、390px Mobile 和状态组合均通过。
- 无横向溢出、空卡、死链、按钮后大空白或内部状态泄漏。
- 键盘、focus、对比度、触控、缩放、reduced motion 和文本等价通过。

### 15.5 隔离与外部开发边界

- 无跨 `site_scope` 内容、媒体、菜单、SEO、缓存、route、Schema 或表单泄漏。
- 本项目只读检查；问题提交给 `D:\16Wordpress_nextjs` 开发项目，本项目不直接修复代码。

## 16. 变更控制

以下变化必须先提交影响分析并获得批准：

- 新增、删除、合并或拆分 9 个 Resources 页面。
- 改变 Page ID、URL、Canonical、语言、索引、主关键词或页面职责。
- 把 `NEW_PAGE_CANDIDATE`、`PLANNED_CONTENT` 或 `PLANNED_ARCHITECTURE` 升级为批准状态。
- 改变品牌/牌号替代的非等效边界。
- 改变 Trade Update 官方来源、适用范围、freshness、复核或撤回机制。
- 发布法规、关税、调查、反倾销、制造、原产地、文件、库存、价格、交期或技术主张。
- 改变 Header、`site_scope`、跨站回退或共享数据边界。
- 进入 Gate 2、线框、视觉、开发、部署、DNS、索引或发布；RES-000 Gate 1 已由用户单独授权。

## 17. Gate 0 决定与问题记录

### 17.1 Gate 0 草案方向

| Decision ID | 草案方向 | 当前状态 |
|---|---|---|
| RES-D001 | Hub 按采购问题和内容类型导航，不设置主关键词 | `APPROVED_GATE_0_BASELINE` |
| RES-D002 | 资源分为 Buying/Sourcing、Technical Comparison、Current Trade Updates 三类 | `APPROVED_GATE_0_BASELINE` |
| RES-D003 | 候选页不进入公共链接、摘要或 Schema | `APPROVED_GATE_0_BASELINE` |
| RES-D004 | Trade Update 只有官方来源、明确范围、CURRENT freshness、内容批准和 route live 全部满足时进入 Hub | `APPROVED_GATE_0_BASELINE` |
| RES-D005 | 品牌/牌号替代只允许证据门禁的评估框架，不允许等效或保证替代 | `APPROVED_GATE_0_BASELINE` |
| RES-D006 | Industrial Editorial + Technical Editorial，突出来源/日期/范围而不是新闻门户 | `APPROVED_GATE_0_BASELINE` |
| RES-D007 | Hub 使用 CollectionPage、ItemList、BreadcrumbList 方向；只输出可见合格条目 | `APPROVED_GATE_0_BASELINE` |
| RES-D008 | Desktop/Tablet/390px、Buyer Clean、route-safe、stale removal 和无图片状态均须后续 Gate 验收 | `APPROVED_GATE_0_BASELINE` |

### 17.2 当前问题

| Review ID | 级别 | 问题 | 当前控制 | 状态 |
|---|---|---|---|---|
| RES-R001 | BLOCKING | 本 Playbook 和 RES-000 Brief 尚未获得总控与用户 Gate 0 批准 | 总控定向复审 PASS；用户 2026-08-30 最终批准 Gate 0 | CLOSED |
| RES-R002 | IMPORTANT | RES-ORIGIN 虽映射已批准，但内容、Claim、route 和公开资格未审 | Hub 不视为 live；未来独立 Gate 审核 | OPEN |
| RES-R003 | IMPORTANT | RES-PROC、RES-CHEMOURS、RES-R706 仍为候选 | 不进入公共链接、摘要、Schema 或 Meta | OPEN |
| RES-R004 | IMPORTANT | 四个 Trade Update 无本轮当前官方来源、适用范围和 freshness 审计 | 不显示链接、摘要或政策结论 | OPEN |
| RES-R005 | IMPORTANT | Resources 下游 owner route 可能 planned/provisional/live 未知 | 只使用 Page ID/route key；满足条件后渲染 | OPEN |
| RES-R006 | IMPORTANT | 竞品与牌号替代可能被搜索词中的 `equivalent` 误导 | 关键词不作为等效事实；逐 Claim 技术审核 | OPEN |
| RES-R007 | IMPORTANT | 可见“来源/复核”承诺尚未对应实际维护责任 | 运营责任、字段和审核流程获批后才渲染 | OPEN |
| RES-R008 | IMPORTANT | Visual Standard 与首页 V0.3 Teal 对比度规则不同 | 使用首页较新批准的 `#007F77` 修正 | CONTROLLED_IN_DRAFT |
| RES-R009 | IMPORTANT | Footer 不得增加登记册外 Legal/Privacy 占位页 | 只渲染登记/批准入口 | CONTROLLED_IN_DRAFT |
| RES-G0-01 | IMPORTANT | Playbook 与 Brief 曾复用 `RES-R007` 表示不同问题 | ID 已唯一统一；总控定向复审 PASS；用户 2026-08-30 批准 Gate 0 | CLOSED |
| RES-G1-01 | BLOCKING | Gate 1 总控复审 PASS，但用户尚未批准 | `RES-000-G15-PCR-01`；不得冒充用户批准 | OPEN_USER_APPROVAL / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL |
| RES-G1-REL-01 | IMPORTANT | PRODUCT V0.3 关系影响需与 Gate 1–5 全表面一致 | 当前基线为 84=30/0/54、14 Process；Hub 不渲染行级关系；M-996/M-2196 comparison hold 保持；定向复审 `RES-REL-V03-PCR-01` 已关闭 | PROJECT_CONTROL_REVIEW_PASS / CLOSED |
| RES-G2-01 | BLOCKING | Gate 2 用户审批点 | 当前 Gate 2 基线获用户批准，2026-09-01 | APPROVED / CLOSED |
| RES-G3-01 | BLOCKING | Gate 3 用户审批点 | 当前 Gate 3 基线获用户批准，2026-09-01 | APPROVED / CLOSED |
| RES-G4-01 | BLOCKING | Gate 4 用户审批点 | 当前 Gate 4 基线获用户批准，2026-09-01 | APPROVED / CLOSED |
| RES-G5-01 | BLOCKING | Gate 5 用户审批点 | 当前 Gate 5 V0.5 与三图获用户批准，2026-09-01 | APPROVED / CLOSED |
| RES-G15-01 | BLOCKING | Buyer Clean 泄露 Gate/route/workflow/approval/publication/structured-data/internal-owner 语言 | 修订已进入用户批准的 Gate 2–5 当前基线 | APPROVED / CLOSED；2026-09-01 |
| RES-G15-02 | IMPORTANT | 正式 visual-designs 目录混入临时 HTML | HTML 保留在 `99_workspace/RES-000/visual-preview`；正式目录边界已进入批准基线 | APPROVED / CLOSED；2026-09-01 |

## 18. Gate 0 验收清单

- [x] 9 个 Page ID、URL、Page Type、Primary、Priority、Mapping 和 Verification 已与登记册/主表逐项核对。
- [x] `RES-000` 保持 `PLANNED_ARCHITECTURE`，没有升级为 approved。
- [x] 1 个 approved mapping、3 个 candidate、4 个 planned Trade Update 和 1 个 planned Hub 已分开。
- [x] Hub、Buying Guide、Technical Guide 和 Trade Update 的职责已区分。
- [x] Hub 与 Market、Product、Application、Document、About 和 Conversion 的关键词边界已定义。
- [x] 竞品、等效、替代和贸易规避红线已定义。
- [x] 官方来源、日期、范围、复核周期、事件触发和 stale removal 机制已定义。
- [x] SEO、GEO、Schema、CTA、内链、Desktop/Tablet/390px、可访问性和 `site_scope=tio2-my` 已定义。
- [x] `RES-R001–RES-R009` 在 Playbook 与 Brief 中一一对应；RES-R001 与 RES-G0-01 已随用户 Gate 0 批准关闭。
- [x] 未创建任何子页正式成果或代码；仅按用户授权建立 RES-000 Gate 1–5 审查草案。
- [x] 项目总控 Gate 0 定向复审通过。
- [x] 用户于 2026-08-30 最终批准 Gate 0，并随后授权 RES-000 执行至 Gate 5 草案；两次决定已分开记录。

## 19. Gate 记录

| Gate | 交付物 | 提交日期 | 总控结论 | 用户批准要求 | 批准日期 | 备注 |
|---|---|---|---|---|---|---|
| Gate 0 | `RESOURCE_PLAYBOOK_V0.1.md` + `RES-000_RESOURCES_BRIEF_V0.1.md` | 2026-08-29 | 项目总控定向复审 PASS | 用户最终批准 Gate 0；后续另行授权执行至 Gate 5 草案 | 2026-08-30 | `APPROVED`；Gate 0 基线不变；RES-R001/RES-G0-01 CLOSED |
| Gate 1 | Gate 1 audit + relationship impact audit | 2026-08-30 | `RES-000-G15-PCR-01` PASS | 需用户批准 Gate 1 | 未批准 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 2 | Content Architecture V0.3 + SEO/GEO/Schema V0.2 | 2026-08-31 | 总控 PASS | 用户最终批准 | 2026-09-01 | `APPROVED_GATE_2_BASELINE` |
| Gate 3 | Wireframe V0.3 | 2026-08-31 | 总控 PASS | 用户最终批准 | 2026-09-01 | `APPROVED_GATE_3_BASELINE` |
| Gate 4 | Visual Direction V0.3 | 2026-08-31 | 总控 PASS | 用户最终批准 | 2026-09-01 | `APPROVED_GATE_4_BASELINE` |
| Gate 5 | Full Visual V0.5 + 3 images | 2026-08-31 | 总控 PASS | 用户最终批准 | 2026-09-01 | `APPROVED_GATE_5_BASELINE`; `RES-HUB-FINAL-01=CLOSED` |
| Gate 6 | 总控审查包 | 2026-09-01 | 项目总控 PASS | 已关闭 | 2026-09-01 | `RES-000-G6-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`; `PROJECT_CONTROL_GATE_6_PASS` |
| Gate 7 | 开发交付规格包 | 2026-09-01 | 项目总控 PASS | 已关闭 | 2026-09-01 | `RES-000-G7-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`; lifecycle=`APPROVED_FOR_HANDOFF` |
| Gate 8 | 外部 WordPress/Next.js 开发 | 尚未记录外部接收 | 外部状态 | 用户已授权开发就绪 | 2026-09-01 | `USER_AUTHORIZED / READY_FOR_EXTERNAL_DEVELOPMENT`; `HANDED_OFF=NO` |
| Gate 9 | 只读视觉、SEO、GEO QA | 未开始 | 未审查 | 需可访问实现 | 未批准 | 本项目不直接修复 |
| Gate 10 | 发布授权 | 未授权 | 不适用 | 必须由用户单独授权 | 未授权 | QA 或开发完成不等于发布 |

## 20. 变更记录

| 版本 | 日期 | 变更类型 | 内容 | 批准状态 |
|---|---|---|---|---|
| V0.1 | 2026-08-29 | Gate 0 初始草案 | 建立 9 页身份、内容类型、关键词、Evidence/Claim、freshness、竞品/贸易、Hub、SEO/GEO/Schema、CTA、视觉、响应式、交付和 QA 共同规则 | `DRAFT_FOR_GATE_0_REVIEW`；未批准 |
| V0.1 / Gate 0 conditional-return revision | 2026-08-29 | RES-G0-01 定向修订 | 保留 RES-R001–R006；统一 RES-R007 为来源/复核维护责任、RES-R008 为 Teal 对比度、RES-R009 为 Footer；总控定向复审 PASS；未修改页面范围或后续 Gate | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；Gate 0 未批准 |
| V0.1 / Gate 0 approval | 2026-08-30 | Gate 批准与下一阶段授权 | 用户最终批准 Gate 0；关闭 RES-R001 与 RES-G0-01；Playbook 升级为 `APPROVED_FOR_DESIGN`；仅授权 RES-000 Gate 1 | 用户批准；事实、route、freshness、官方来源及其他未决门禁不变 |
| V0.1 / Gate 1–5 execution authorization | 2026-08-30 | 执行范围与 PRODUCT V0.2.1 关系基线 | 用户授权 RES-000 建立 Gate 1–5 草案并提交总控；未批准各 Gate，未启动子页或开发 | `DESIGN_IN_REVIEW`；所有未决门禁保持 |
| V0.1 / RES-000-G15-PCR-01 targeted revision | 2026-08-30 | Buyer Clean 语言与临时 HTML 目录修订 | RES-G15-01/02 已在草案中修复；只重导出 Desktop/390px，菜单/内部状态板不变 | `RESOLVED_IN_DRAFT_PENDING_REVIEW`；Gate 2–5 未批准 |
| V0.1 / RES-000-G15-PCR-01 targeted review PASS | 2026-08-30 | Gate 1–5 总控定向复审状态同步 | RES-G15-01/02 通过定向复审；Gate 1–5 均等待用户最终决定；事实与关系门禁不变 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；各 Gate 用户审批项保持 OPEN |
| V0.1 / PRODUCT V0.3 relationship-source sync | 2026-08-30 | 当前关系源与 M-2377 门禁同步 | 当前唯一关系源改为 PRODUCT V0.3；30/0/54、14 Process；M-2377 五个 Application 与 Sulfate 已批准、Specialty Materials 不公开、Rubber 仅证据登记；移除过时的 M-2377 TDS 活跃硬门禁；不改变 Hub 零行级渲染与 M-996/M-2196 comparison hold | `DRAFT_FOR_PROJECT_CONTROL_REVIEW`；Gate 1–5、子页、开发边界不变 |
| V0.1 / Gate 2–5 user approval and Gate 6 start | 2026-09-01 | 当前成果批准与下一关提交 | `RES-HUB-FINAL-01=APPROVED / CLOSED`; Gate 2–5 当前成果锁定；Gate 6 包提交总控 | `RES-000-G6-PCR-01=SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`; Gate 7 未启动 |
| V0.1 / Gate 6 close and Gate 7 authorization | 2026-09-01 | 总控结论与交付规格准备 | `RES-000-G6-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`; 用户授权 Gate 7；创建并提交 `RES-000-G7-HANDOFF-01` | Gate 7=`SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`; Gate 8 未授权 |
| V0.1 / Gate 7 closure and Gate 8 readiness | 2026-09-01 | 总控关闭与用户开发指令 | `RES-000-G7-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`; 生命周期 `APPROVED_FOR_HANDOFF`; Gate 8 就绪授权 | `HANDED_OFF=NO`; sealed payload、视觉和开放门禁不变 |
