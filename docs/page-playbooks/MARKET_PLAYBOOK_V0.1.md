# TiO2 Malaysia Markets 页面体系作业规范 V0.1

## 0. 文档控制

| 项目 | 内容 |
|---|---|
| 文档名称 | `MARKET_PLAYBOOK_V0.1` |
| 页面体系 | Markets |
| Playbook Key | `MARKET` |
| 版本 | V0.1 |
| 创建日期 | 2026-08-29 |
| 当前状态 | `APPROVED_FOR_DESIGN` |
| Gate 0 状态 | `APPROVED` |
| 用户批准记录 | 2026-08-29：用户明确批准 MARKET-000 Gate 0，包括 `MARKET_PLAYBOOK_V0.1` 与 `MARKET-000` Brief V0.1 作为本页 Gate 1 工作基线 |
| 批准范围 | 仅授权 `MARKET-000` 进入 Gate 1 Research/Evidence、Route 与 Brazil PT-BR Localization Audit；不批准 Gate 1 成果、Gate 2、线框、视觉稿、开发交付、发布或任何 Market 子页启动 |
| 本版变更摘要 | 总控复审 PASS；用户于 2026-08-29 最终批准 Gate 0；状态升级为 `APPROVED_FOR_DESIGN`，MKT-R001 关闭 |
| 适用页面 | `MARKET-000`、`MARKET-EU-001`、六个 EU 国家页、`MARKET-UK-001`、`MARKET-IN-001`、`MARKET-BR-EN`、`MARKET-BR-PT` |
| 编制角色 | Markets 页面执行任务 |
| 审核角色 | 项目总控与质量审查 |
| 最终批准人 | 用户 |
| 本项目范围 | 市场研究、内容架构、视觉、SEO、GEO、开发交付规格和只读质量验收 |
| 明确禁止 | WordPress、Next.js、CMS、组件、样式、测试、部署、发布、DNS、索引或任何代码修改 |

本文件是已获用户批准的 Markets 页面体系 V0.1 作业规范。当前批准只授权 `MARKET-000` 依据其独立任务卡进入 Gate 1 审计；不自动批准 Gate 1 成果，也不授权任何 Market 子页、Gate 2、正式页面设计或开发。

## 1. 权威基线与适用顺序

发生冲突时按以下顺序处理：

1. 用户在当前任务中明确批准的最新决定。
2. 对应页面已批准的独立任务卡。
3. `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`。
4. `research/keyword/11_page_keyword_master.csv`。
5. 本 Playbook 的已批准版本。
6. 已验证的公司、市场、法规、产品、文件和运营证据。
7. 关键词研究、SERP、同行资料和历史版本。

共同输入：

- `AGENTS.md`
- `00_PROJECT_STATUS.md`
- `01_PROJECT_INDEX.md`
- `02_DIRECTORY_GUIDE.md`
- `docs/architecture/PAGE_REGISTRY_V0.1.md`
- `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`
- `research/keyword/11_page_keyword_master.csv`
- `docs/page-briefs/PAGE_BRIEF_TEMPLATE.md`
- `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md`
- 已批准首页 V0.3 视觉与自检资料
- 已批准 Products Playbook、PRODUCT-000 Brief 及其 Gate 1/2 草案，仅作治理、证据门禁和品牌颗粒度参考
- `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` 及 V0.3 统一审计；这是 Product/Application/Process 关系的当前唯一有效源，V0.2.1 仅保留历史追溯
- 14 个产品详情页统一模板，仅作跨页面关系和事实门禁参考

历史资料中的迁移前路径按 `02_DIRECTORY_GUIDE.md` 解析，不回写历史批准版本。

## 2. Markets 页面体系身份

Markets 体系共 12 页：

| Page ID | Page Name | URL | Page Type | Primary Keyword | Priority | Mapping Status | Verification Status |
|---|---|---|---|---|---|---|---|
| MARKET-000 | Markets | `/markets/` | Navigation hub | `NO_PRIMARY_KEYWORD` | P1 | `APPROVED_NAVIGATION_HUB` | `NO_DIRECT_KEYWORD_TARGET` |
| MARKET-EU-001 | European Union | `/markets/european-union/` | Market procurement landing page | `titanium dioxide supplier europe` | P0 | `APPROVED_PRD_V0.3` | `QUALITATIVE_KEYWORD_EVIDENCE` |
| MARKET-EU-DE | Germany | `/markets/germany/` | Market procurement landing page | `titanium dioxide supplier germany` | P1 | `APPROVED_PRD_V0.3` | `QUALITATIVE_KEYWORD_EVIDENCE` |
| MARKET-EU-IT | Italy | `/markets/italy/` | Market procurement landing page | `titanium dioxide supplier italy` | P2 | `APPROVED_PRD_V0.3` | `QUALITATIVE_KEYWORD_EVIDENCE` |
| MARKET-EU-ES | Spain | `/markets/spain/` | Market procurement landing page | `titanium dioxide supplier spain` | P2 | `APPROVED_PRD_V0.3` | `QUALITATIVE_KEYWORD_EVIDENCE` |
| MARKET-EU-PL | Poland | `/markets/poland/` | Market procurement landing page | `titanium dioxide supplier poland` | P2 | `APPROVED_PRD_V0.3` | `QUALITATIVE_KEYWORD_EVIDENCE` |
| MARKET-EU-NL | Netherlands | `/markets/netherlands/` | Market procurement landing page | `titanium dioxide supplier netherlands` | P2 | `APPROVED_PRD_V0.3` | `QUALITATIVE_KEYWORD_EVIDENCE` |
| MARKET-EU-BE | Belgium | `/markets/belgium/` | Market procurement landing page | `titanium dioxide supplier belgium` | P2 | `APPROVED_PRD_V0.3` | `QUALITATIVE_KEYWORD_EVIDENCE` |
| MARKET-UK-001 | United Kingdom | `/markets/united-kingdom/` | Market procurement landing page | `titanium dioxide supplier uk` | P0 | `APPROVED_PRD_V0.3` | `QUALITATIVE_KEYWORD_EVIDENCE` |
| MARKET-IN-001 | India | `/markets/india/` | Market procurement landing page | `titanium dioxide supplier india` | P0 | `APPROVED_PRD_V0.3` | `QUALITATIVE_KEYWORD_EVIDENCE` |
| MARKET-BR-EN | Brazil | `/markets/brazil/` | Market procurement landing page | `titanium dioxide supplier brazil` | P1 | `APPROVED_PRD_V0.3` | `QUALITATIVE_KEYWORD_EVIDENCE` |
| MARKET-BR-PT | Brazil Portuguese | `/pt-br/markets/brazil/` | Localized market procurement landing page | `fornecedor de dióxido de titânio` | P1 | `PROVISIONAL_URL` | `LOCALIZATION_REVIEW_REQUIRED` |

### 2.1 URL 与层级规则

- 当前 12 页数量、Page ID、URL、主关键词和职责不得由执行任务自行改变。
- EU 是内容和采购关系上的父级；六个 EU 国家页保持登记册中的平级 `/markets/{country}/` URL，不改成嵌套路径。
- EU 父子关系通过 Markets Hub 分组、EU 页面国家入口、正文内链和机器可理解关系表达，不依靠 URL 嵌套制造。
- Brazil PT-BR 的职责可研究，URL、语言实现、Canonical 和 hreflang 在本地化批准前保持暂定。
- Mapping 批准不代表 route 已开发或可访问；最终公开链接仍需外部开发项目确认 `route_live`。

## 3. 页面类型与职责

### 3.1 Markets Hub

MARKET-000 是可索引的导航中心，但不拥有独立商业主关键词。它必须：

- 按 European Union、United Kingdom、India、Brazil 四个市场体系帮助买家选择目的地。
- 说明 EU 总页与六个 EU 国家页的选择差异。
- 把市场选择连接到 Products、Applications、Documents、Resources 和 RFQ owner 页面。
- 为时效性贸易信息提供安全导流，不在 Hub 发布政策结论。
- 在下游页面或 route 不可用时保持完整、无死链的导航说明。

Hub 不得成为十个国家同权卡片墙，也不得使用子页 supplier 主词获取流量。

### 3.2 European Union 总页

MARKET-EU-001 负责：

- Europe/EU supplier intent。
- EU 层面的采购环境、适用的文件与合规核对路径。
- EU 层面的原产地与贸易背景摘要，且只使用当前官方来源。
- 向 Germany、Italy、Spain、Poland、Netherlands、Belgium 六个国家页分流。
- 把详细贸易政策查询导向 `RES-TRADE-EU`。

EU 总页不得机械复制六国的本地应用、采购特点和物流目的地内容。

### 3.3 EU 国家页

六个国家页分别拥有显式国家修饰的 supplier intent。每页必须提供真实的独有内容，至少覆盖其中三类：

- 当地工业或应用重点。
- 当地采购流程、买家角色或评估关注点。
- 目的地、物流节点或交付信息需求；任何能力声明必须有证据。
- 与 EU 总页共用但不重复展开的法规、文件和贸易背景入口。
- 有证据支持的产品或应用关系。

统一 EU 法规和贸易全文由 EU 总页或 Resources owner 页面承担。不得通过替换国家名批量生成正文。

### 3.4 United Kingdom

MARKET-UK-001 独立于 EU 页面处理英国 supplier intent、英国采购环境、文件核对、应用与 Trade Update 路由。不得复用 EU 法规措辞作为英国现行事实。

### 3.5 India

MARKET-IN-001 处理 India supplier intent，并可在证据支持下覆盖 paints、plastics、masterbatch 和 price-related evaluation。页面不得公布无批准来源的价格、MOQ、库存或交期。

### 3.6 Brazil English 与 PT-BR

- MARKET-BR-EN 拥有英语 Brazil supplier/importer intent。
- MARKET-BR-PT 拥有葡萄牙语采购意图，但在本地化审核前不得进入最终路由、hreflang 或永久导航合同。
- PT-BR 必须经过本地语言、术语、Title、Meta、CTA、表单、日期/数字格式和合规表达审核。
- 英语页与葡语页不得互相 Canonical；获批后应建立双向、准确的 hreflang 关系。
- 本地化不是逐句翻译，也不得把英语证据直接当作葡语市场事实。

## 4. 关键词与防内耗合同

| 意图 | 唯一 Owner | Markets 允许行为 | 禁止行为 |
|---|---|---|---|
| Markets 导航 | MARKET-000 | 使用市场名称帮助选择 | 为 Hub 创造 supplier 主关键词 |
| Europe/EU supplier | MARKET-EU-001 | EU 层采购落地 | 六国页或 Hub 重复主攻 Europe/EU 词 |
| 具体 EU 国家 supplier | 对应 EU 国家页 | 当地采购内容 | EU 总页批量覆盖全部国家主词 |
| UK supplier | MARKET-UK-001 | 英国采购落地 | 复用 EU 现行法规作为英国事实 |
| India supplier | MARKET-IN-001 | 印度采购落地 | 把泛 price 词写成公开价格承诺 |
| Brazil English supplier | MARKET-BR-EN | 英语采购落地 | 抢葡语主词 |
| Brazil Portuguese supplier | MARKET-BR-PT | 本地化批准后承接葡语意图 | 未批准前永久化 URL/hreflang |
| 泛产品、工艺、型号 | Products | 简要路由 | Markets 复制技术详情或抢型号词 |
| 泛应用 | Applications | 说明与当地采购关系后导流 | Markets 建立通用应用 SEO 正文 |
| 文件与合规解释 | Documents | 说明买家应核对的文件类别 | 宣称未验证文件可用性 |
| 制造、原产地、追溯证明 | About / Documents | 轻量关系说明和链接 | Markets 取代事实 owner |
| 贸易政策详情 | Resources Trade Update | 当前官方来源支持的摘要与导流 | 发布易过期结论或规避暗示 |
| 报价行动 | CONV-RFQ | CTA 与市场上下文预填 | 在 Market Hub 内嵌 RFQ 表单 |

所有 Market procurement landing pages 各有且只有一个主关键词；MARKET-000 是明确例外，使用 `NO_PRIMARY_KEYWORD`。Secondary Keywords 必须服务对应页面同一意图。

## 5. 统一 Gate 流程

### Gate 0：任务准入

- 核对 Page ID、URL、Page Type、Priority、Mapping 和 Verification。
- 从主表复制 Primary、Secondary、Excluded 和 Cannibalization Boundary。
- 建立 Playbook 草案与独立页面任务卡。
- 草案保持 `DRAFT_FOR_GATE_0_REVIEW` / `BRIEF_IN_REVIEW`，不得写成已批准。

### Gate 1：研究、证据与路由审计

- 分市场核对 buyer questions、SERP intent、当地采购差异和内部页面关系。
- 公司、制造、原产地、产品、文件、法规、贸易、价格、库存、交期、物流和样品声明进入 Claim Register。
- 法规和贸易必须使用当前官方来源，记录适用范围、资料日期和复核日期。
- 为 Page ID/route key 记录 mapping、URL approval 和 route live 三种不同状态。
- Brazil PT-BR 独立做本地化与语言路由审计。
- 缺证据只冻结受影响字段或关系。

### Gate 2：内容架构

- 锁定每页叙事、H1、模块、CTA、内链、GEO answer blocks 和公开文案候选。
- 每个 Market 页面必须通过独有内容检查；国家名替换稿直接退回。
- Hub 不得退化为卡片列表；Market landing page 不得退化为贸易政策文章。

### Gate 3–5：线框、视觉方向和完整视觉稿

- 依次批准，不并行越 Gate。
- 每阶段同时提交 Desktop 与 Mobile。
- 使用真实长度内容、条件省略状态、长国名和 PT-BR 长度测试。

### Gate 6–10

- 本项目只审查和交付批准规格，不进行开发。
- 外部开发完成后，本项目只读验收并提交问题清单。
- 部署、DNS、生产数据、索引和发布仍需用户单独授权。

## 6. MARKET-000 Hub 标准

### 6.1 模块顺序

| 顺序 | Module ID | 模块 | 目的 | 核心规则 |
|---:|---|---|---|---|
| 0 | GLOBAL_HEADER | Header | 全站导航与 RFQ | 固定八项导航，Markets 为当前项，Home 可见 |
| 1 | BREADCRUMB | Breadcrumb | 建立层级 | `Home > Markets` |
| 2 | HERO | Markets Hub Hero | 说明按目的市场选择 | 不使用国家 supplier 主词；主 CTA 滚动到选择模块 |
| 3 | DESTINATION_SELECTOR | Destination Market Selector | 选择四个市场体系 | EU 为主要区块；UK、India、Brazil 同级入口 |
| 4 | MARKET_CHOICE_GUIDE | How to Choose | 解释 EU 总页、EU 国家页和其他市场页差异 | 只解释页面职责，不写市场事实结论 |
| 5 | PROCUREMENT_PATHS | Procurement Paths | 连接 Products、Applications、Documents | 目标批准且 live 后才渲染链接 |
| 6 | TRADE_BOUNDARY | Trade Information Boundary | 把时效性查询导向 Resources | 不发布政策结论；Trade Update live 且最新才链接 |
| 7 | BUYER_QUESTIONS | Buyer Questions | 提供可引用导航答案 | 不扩写 supplier、法规或能力事实 |
| 8 | FINAL_RFQ | Final RFQ | 独立询价行动 | 不内嵌表单；只传递明确选择的市场 |
| 9 | GLOBAL_FOOTER | Footer | 导航与实体收口 | 只使用登记页和已验证主体信息 |

### 6.2 四市场选择逻辑

第一层固定为：

1. European Union
2. United Kingdom
3. India
4. Brazil

Desktop：

- EU 使用较宽的编辑式区块，直接显示 EU 总页和六国文字入口。
- UK、India、Brazil 使用三个紧凑但同等级入口。
- 不使用十张同尺寸国家卡片。

Mobile：

- 顺序保持 EU → UK → India → Brazil。
- EU 六国默认收起，使用可访问的 `View EU destinations` 控件展开。
- 展开后六国纵向排列，不使用横向滑动。
- 折叠状态必须有程序化名称、展开状态和键盘/触控支持。

Brazil PT-BR：

- 未批准时不渲染入口、空卡、`Coming soon` 或内部状态。
- 获批后在 Brazil 关系内增加明确语言入口，不把它提升为第五个市场体系。

### 6.3 Hub SEO

| 字段 | 规则 |
|---|---|
| Primary Keyword | `NO_PRIMARY_KEYWORD` |
| Search Intent | `N`；Navigation |
| Title 方向 | `Markets for Titanium Dioxide Procurement \| TiO2 Malaysia` |
| H1 方向 | `Choose Your Destination Market` |
| Canonical | `https://tio2malaysia.com/markets/` |
| Robots | `index,follow`；发布前复核 |
| Hreflang | 当前 `NOT_APPLICABLE`；PT-BR child 不自动产生 Hub 语言对应页 |
| Child terms | 只作为导航标签，不作为 Hub acquisition keywords |

Title、H1、Meta 和首屏不得把 `titanium dioxide supplier europe/uk/india/brazil` 或六国 supplier 词设为 Hub 目标。

### 6.4 Hub GEO 与 Schema

真实可见关系：

- TiO2 Malaysia → Markets navigation hub。
- Markets Hub → European Union、United Kingdom、India、Brazil。
- European Union → Germany、Italy、Spain、Poland、Netherlands、Belgium。
- Market pages → Products、Applications、Documents、Resources、RFQ owner pages。

建议可见答案块：

1. 应选择 EU 总页还是 EU 国家页？
2. Market 页面帮助采购商核对哪些事项？
3. 时效性贸易政策应在哪里查看？
4. 选定市场后如何继续产品、文件或报价流程？

建议页面级 Schema：

- `CollectionPage`
- `ItemList`
- `BreadcrumbList`

ItemList 与可见层级一致，只输出批准且 live 的链接。Brazil PT-BR 未获批准时不得出现在可见链接或 Schema。Buyer Questions 默认不输出 `FAQPage` 或 `QAPage`。

### 6.5 Hub CTA

| 层级 | CTA | 目标 | 规则 |
|---|---|---|---|
| Primary | Choose Your Market | `#destination-selector` | 页面内定位 |
| Secondary | Request a Quote | `CONV-RFQ` route key | 目标批准且 live 后渲染 |
| Market | Explore {Market} | 对应 MARKET Page ID | 目标 route live 后渲染 |
| EU country | 国家名称文字链接 | 对应 EU country Page ID | 不使用 supplier 词堆砌 |
| Supporting | Explore Products / Review Documents / View Trade Updates | 对应 Page ID/route key | 分别受 mapping、approval、freshness 和 live 状态控制 |
| Final | Request a Quote | `CONV-RFQ` | 预填 `source_page=MARKET-000`；只有买家明确选择时附加 market |

MARKET-000 不内嵌 RFQ、Sample 或 Documents 表单。

## 7. Market Procurement Landing Page 标准

### 7.1 共用模块框架

Market landing page 可共享模块职责，但不得共享国家替换正文。建议框架：

1. Global Header。
2. Breadcrumb。
3. Market-specific Hero：目的市场、采购问题和行动；只使用已验证主张。
4. Procurement Context：该市场的采购判断和来源多元化背景。
5. Application Priorities：当地有证据的重点应用及 Application owner 链接。
6. Products to Review：有技术和市场关系证据的产品；无证据时不推荐。
7. Documents and Compliance Path：需核对的文件类别、适用范围和受控申请路径。
8. Origin and Supply Coordination：只使用已验证公司、原产地、追溯、包装或出口协作事实。
9. Trade Context Summary：短摘要、官方来源和日期；详细内容链接 Resources。
10. Market-specific Buyer Questions。
11. RFQ / Documents / Sample 行动；根据页面任务卡设层级。
12. Global Footer。

### 7.2 独有内容门槛

每个 Market landing page 必须登记：

- 独有买家角色。
- 独有采购问题。
- 独有应用或工业背景。
- 独有文件/合规核对点。
- 独有目的地或供应协调信息；只在有证据时发布。
- 与 EU 总页、Resources、Products、Applications 的明确边界。
- 至少一个不能通过替换国家名得到的 answer-ready block。

如果证据不足，允许完成结构和问题清单；不允许用模板化通用段落冒充当地差异。

### 7.3 Market 页面 SEO

- 每页使用主表中唯一 Primary Keyword。
- H1、Title、Hero 和正文围绕同一目的市场 supplier/procurement intent。
- EU 总页拥有 Europe/EU modifier；六国页拥有具体国家 modifier。
- Market 页面不得主攻泛应用、具体型号、工艺、文件或 trade-update 主关键词。
- 贸易词只可作为经过官方核验的上下文，不得超过 supplier/procurement 主意图。
- PT-BR 独立完成本地化关键词、Title、H1 和 Meta 审核。

### 7.4 Market 页面 GEO 与 Schema

Market 页面应建立：

- 品牌/运营主体与目标市场的事实关系；只在有证据时表达。
- 市场与应用、产品、文件、资源和转化页面的可见关系。
- 对采购问题的直接答案、来源、资料日期和适用范围。
- 事实与分析的明确区分。

默认使用 `WebPage` 与 `BreadcrumbList`。存在可见、完整列表时可增加与内容一致的 `ItemList`。不得使用 `LocalBusiness` 暗示当地办公室、仓库或实体存在。FAQ Schema 仅在发布时资格、可见内容和官方要求均满足时考虑。

## 8. 事实与证据合同

### 8.1 公共状态

| 状态 | 公共行为 |
|---|---|
| `verified` | 可以进入可见页面和一致的机器可读字段 |
| `pending_verification` | 不渲染，不暴露在公开 HTML、JSON、API、Schema、Meta 或 ALT 中 |
| `not_public` | 不公开，不因内部持有资料而输出 |

Claim Register 的渲染决定使用：`RENDER`、`RENDER_WITH_QUALIFIER`、`CONTROLLED_REQUEST_ONLY`、`DO_NOT_RENDER`。

### 8.2 证据来源

1. 当前一方公司、产品、原产地、文件和运营证据。
2. 当前官方法规、贸易、海关或监管来源。
3. 已批准技术、合规、市场或运营决定。
4. PRD、登记册和关键词主表只证明架构、URL、职责和关键词归属。
5. 关键词与 SERP 证据可证明搜索意图，不能证明本公司的能力。
6. mytio2.com 仅作事实候选，不能复制正文或独立形成 verified 事实。

### 8.3 强制冻结声明

- 未验证的 Malaysia manufacturing、origin、COO 和 traceability。
- 未验证的产品—市场、产品—应用推荐关系。
- 未验证的 REACH、TDS、SDS、COA、COO 或其他文件可用性。
- 未验证的当地库存、仓库、产能、MOQ、价格、交期、包装、Incoterm、港口或运输能力。
- 未使用当前官方来源确认的法规、贸易、关税和反倾销结论。
- 规避、绕过或改变贸易措施适用性的任何表达。
- 完全等同、保证替代、最佳、最低成本或保证适用。

### 8.4 PRODUCT 关系 V0.3 共同标准

- Markets Hub 不渲染 Grade → Application、Grade → Process 或 Grade ↔ Grade Comparison 关系；Products/Applications 只作为职责清楚的下游路径。
- Market landing page 未来如需显示 Product/Application/Process 关系，唯一行级来源是 `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`，并且仍须具备独立的目的市场证据；不得从技术关系推断国家适用性、注册、库存或供应可用性。
- Application 只允许 `application_status=VERIFIED_FOR_PUBLIC_MAPPING` 且公共行为为中性映射的关系；30 条 verified 不等于推荐、排名、最佳、等效、替代或性能保证。
- Process 只允许 14 个已验证 grade-level 分类的中性表达：Chloride 8、Sulfate 5、Vapor-phase oxidation 1；不得把工艺分类改写成性能或市场优势。
- M-2377 的 Coatings、Plastics、Masterbatch、Printing Inks、Paper 与 Sulfate 已在 V0.3 获批为中性关系；不得再写成“全局隐藏”或未解决冲突。Market 页面仍需独立目的市场证据；MARKET-000 Hub 本身不渲染任何行级关系。M-2377 Specialty Materials 仍为 `NO_PUBLIC_MAPPING / DO_NOT_RENDER`，Rubber 只作证据登记，不新增 taxonomy、页面、URL、关键词或导航。
- M-996 与 M-2196 只允许各自的 Coatings/Sulfate 基础关系；不得生成差异、排序、选择理由、比较定位、等效或替代关系。
- 54 条 `NO_PUBLIC_MAPPING` 贡献零公开关系，不得改写为不适用、不兼容、不推荐或不可用。
- GEO、Schema、ALT、图标、卡片和 CTA 必须服从同一关系门禁；不可见关系不得为了机器可读性写入隐藏字段。

## 9. Route、CTA 与表单上下文合同

### 9.1 Route 状态分离

每个目的地分别记录：

- `mapping_status`
- `url_approval_status`
- `route_live_status`
- `content_approval_status`
- `freshness_status`，仅适用于时效性页面

Mapping approved 不等于 URL live；URL 存在不等于内容批准；Trade Update live 不等于内容仍然最新。

### 9.2 Route key 规则

- 页面规格使用 Page ID 或 route key。
- `PROVISIONAL_URL` 不写成永久组件依赖、Schema 或 hreflang。
- 目标缺失、未批准、重定向到非批准 Canonical 或不可访问时，公开 CTA 不渲染。
- 不从 TIOVAR、mytio2 或其他 `site_scope` 回退内容、菜单、媒体或路由。
- CTA 省略后不得留下空卡、空标题、标点或隐藏链接。

### 9.3 RFQ 预填

Market landing page 可以预填其页面市场上下文，但接收页必须允许买家查看和修改。MARKET-000 只有在买家明确选择市场后才传递 market。提交成功不得暗示报价、文件、样品、价格或交期已批准。

## 10. 内链合同

### 10.1 Hub 入站

- Header、Footer。
- Home Markets 模块。
- 各 Market landing page 的 breadcrumb/back-to-markets。
- Products、Applications、Documents、Resources 中的市场选择入口。

### 10.2 Hub 出站

- 四个市场体系 Page ID。
- 六个 EU 国家 Page ID。
- Brazil PT-BR 仅在本地化与 URL 获批后。
- Products、Applications、Documents、Resources 和 RFQ owner 页面，仅在目标允许时。

### 10.3 Market landing page 内链

- 返回 MARKET-000。
- EU 国家页链接 MARKET-EU-001；EU 总页链接六国。
- 只链接有证据关系的 Product/Application 页面。
- Documents 与 Conversion 使用受控 route key。
- Trade Update 仅在内容最新且 route live 时链接。
- 不链接仍为 `NEW_PAGE_CANDIDATE` 的资源页面。

## 11. 视觉与响应式合同

### 11.1 品牌方向

- 继承批准首页的 Industrial Editorial 基底。
- 使用轻量 Technical Editorial 的细线、编号和路由注释表达关系。
- 白色为主、Navy 建立层级；浅底小文字和实心 CTA 使用 `#007F77`，`#00A99D` 仅作非文字强调。
- 信息密度中等，不用装饰性空白制造页面长度。
- 不复制首页或 Products Hub 的模块结构。

### 11.2 图片与地域表达

- Hero 可使用抽象目的地路线、简化地图轮廓或中性工业供应视觉。
- 地图、路线和照片不得暗示已验证服务范围、办公室、仓库、港口、库存或运输能力。
- 国旗只作小面积识别辅助，不作为页面主视觉。
- 禁止巨大国旗、旅游地标、国家主题换肤、握手图、客服图和虚构工厂/装运照片。

### 11.3 Desktop

- 1200–1320px 内容容器。
- Hero 可双栏，文字和 CTA 优先。
- EU 为较宽编辑式区块；UK、India、Brazil 紧凑同级呈现。
- Products、Documents、Resources 关系使用职责清楚的轻量入口，不做 SaaS dashboard。

### 11.4 Mobile

- Hero 单列，CTA 可全宽。
- EU → UK → India → Brazil 顺序固定。
- EU 六国默认折叠、纵向展开，不横向滑动。
- 390px 无横向溢出。
- Buyer Clean 可见文字原则上不低于 14px。
- 按钮后无大段无目的空白。
- 固定 CTA 如使用不得遮挡正文或系统 UI。

### 11.5 必须交付状态

- Desktop 默认。
- Hover、keyboard focus。
- Mobile EU 收起与展开。
- Mobile menu open。
- Brazil PT-BR 条件省略。
- 下游 route 不可用时的 CTA 省略。
- 无图片。
- 长国家名、长说明和 PT-BR 长度压力。
- Reduced motion、200% 缩放和触控尺寸检查。

内部 `PROVISIONAL`、`NOT_VERIFIED_LIVE`、证据 ID、审核角色和门禁状态不得出现在 Buyer Clean。

## 12. 可访问性合同

- 一个 H1，标题层级连续。
- 所有链接、折叠、CTA 和菜单支持键盘。
- Focus 清晰，状态不只依赖颜色。
- EU 展开控件具有正确名称、控制关系和 expanded 状态。
- 触控目标至少满足适用尺寸和间距要求。
- 图片 ALT 描述实际图像；装饰路线和形状使用空 ALT。
- 地图和关系图有文本等价表达。
- 200% 缩放、长文本和 PT-BR 变长后仍可用。
- 动效尊重 reduced motion。

## 13. 开发交付规格边界

本节只定义最终需要交给外部开发项目的结果字段，不规定实现技术。

共同交付内容至少包括：

- Page identity、language、market、Canonical 和 `site_scope=tio2-my`。
- SEO、Open Graph、Robots、Sitemap、hreflang 和 Schema 输入。
- Hero、市场选择关系、EU 国家关系和 CTA。
- Market facts、claim status、source date 和 freshness。
- Product/Application/Document/Resource/Conversion route keys。
- 条件渲染、空状态、Brazil PT-BR 门禁和 route live 行为。
- 图片、ALT、授权与无图片状态。
- RFQ/Document/Sample 的预填合同。

强制隔离：

- 只读取 `site_scope=tio2-my` 数据。
- 不从其他 scope 回退内容、媒体、SEO、菜单、缓存或表单上下文。
- 未验证字段不渲染，也不进入 HTML、JSON、API、Schema、Meta、OG 或 ALT。
- 内部状态不得成为公共徽章或说明。
- 共享组件影响由外部开发项目评估和实现。

## 14. 只读 QA

### 14.1 页面身份与内容

- 12 页 Page ID、URL、language、market 和职责正确。
- Hub 四市场体系与 EU 六国关系正确。
- Market landing page 具有真实独有内容，不是国家名替换。
- Brazil PT-BR 未越过本地化门禁。
- 没有复制 mytio2.com 正文。

### 14.2 SEO 与 GEO

- MARKET-000 无商业主关键词但可索引。
- 子页主关键词唯一，Hub、EU、六国、UK、India、Brazil 互不侵占。
- Trade Update 与 Market supplier intent 分离。
- Schema 与可见内容、路由和语言状态一致。
- GEO answers 有完整上下文、证据、日期和边界。

### 14.3 视觉、响应式与无障碍

- Desktop、Tablet、Mobile 均通过。
- EU 展开、菜单、route 省略、无图片和长文本状态完整。
- 无横向溢出、空卡、按钮后大空白或被遮挡内容。
- 键盘、focus、对比度、触控、缩放和 reduced motion 通过。

### 14.4 事实与转化

- 无制造、原产地、文件、法规、贸易、价格、库存、交期或物流声明泄漏。
- Trade Update 来源和更新时间符合要求。
- RFQ 预填只使用明确页面或用户选择的上下文。
- 成功/失败状态不作未批准承诺。

### 14.5 隔离

- 无跨 `site_scope` 内容、媒体、菜单、SEO、缓存、路由或表单泄漏。
- 发现问题只提交给 `D:\16Wordpress_nextjs` 开发项目，本项目不直接修复代码。

## 15. 变更控制

以下变化必须先提交影响分析并获得批准：

- 新增、删除、合并或拆分 12 个 Markets 页面。
- 改变 URL、Canonical、语言目录、hreflang 或索引策略。
- 改变主关键词、页面职责或 EU 父子归属。
- 把 Brazil PT-BR 暂定路由写成永久路由。
- 改变 Header、四市场顺序或 EU 六国集合。
- 新增市场、应用、产品、文件、法规、贸易或物流事实。
- 改变 `site_scope`、跨站回退或共享数据边界。
- 发布、部署、DNS、生产数据或开放索引。

## 16. Gate 0 决定与问题记录

### 16.1 已批准方向

| Decision ID | 决定 | 状态 |
|---|---|---|
| D-001 | 第一层采用 EU、UK、India、Brazil 四大市场体系 | 已纳入 2026-08-29 用户 Gate 0 批准 |
| D-002 | Desktop 直接显示 EU 六国；Mobile 默认折叠 | 已纳入 2026-08-29 用户 Gate 0 批准 |
| D-003 | 页面路径为目的市场选择 → 采购核对路径 → 独立行动 | 已纳入 2026-08-29 用户 Gate 0 批准 |
| D-004 | MARKET-000 无主关键词但可索引，严格保护子页 supplier 词 | 已纳入 2026-08-29 用户 Gate 0 批准 |
| D-005 | Hub 使用 CollectionPage、ItemList、BreadcrumbList 方向 | 已纳入 2026-08-29 用户 Gate 0 批准；发布前仍须与可见内容复核 |
| D-006 | CTA 只传递明确选择，RFQ 不内嵌 | 已纳入 2026-08-29 用户 Gate 0 批准；接收流程仍待 Conversion 任务批准 |
| D-007 | Industrial Editorial + Technical Editorial，EU 非对称主区块 | 已纳入 2026-08-29 用户 Gate 0 批准；不等于 Gate 4 视觉稿批准 |
| D-008 | Mobile EU 折叠、390px 无溢出、内部状态不公开 | 已纳入 2026-08-29 用户 Gate 0 批准；待 Gate 3–5 详细验收 |

### 16.2 当前问题

| Review ID | 级别 | 问题 | 当前控制 | 状态 |
|---|---|---|---|---|
| MKT-R001 | BLOCKING | 本 Playbook 与 MARKET-000 Brief 尚未完成总控和用户整体 Gate 0 审查 | 总控重新复审 PASS；用户 2026-08-29 最终批准 Gate 0 | CLOSED |
| MKT-R002 | IMPORTANT | 目标市场应用、产品、文件、物流和供应差异尚无完整批准证据 | PRODUCT 关系 V0.3 只证明中性技术关系，不含市场维度；CL-014 继续不渲染 | OPEN |
| MKT-R003 | IMPORTANT | Brazil PT-BR URL、语言和本地化未批准 | 批准 Localization baseline 保持 `LOCALIZATION_HOLD`；不进入 hreflang/Schema | OPEN |
| MKT-R004 | IMPORTANT | 下游 Applications、Documents、Resources、Conversion 目标含 planned/provisional/live 未知状态 | 批准 Route baseline 使用 Page ID/route key；22 个单元仍 `NOT_VERIFIED_LIVE` | OPEN |
| MKT-R005 | IMPORTANT | Trade Update 内容时效性与官方来源尚未复核 | Gate 1 baselines 只批准 owner 边界；Hub 不发布结论 | OPEN |
| MKT-R006 | IMPORTANT | Visual Standard 与首页 V0.3 的 Teal 对比度规则不同 | 使用较新批准首页的 `#007F77` 修正 | RESOLVED_FOR_DRAFT |
| MKT-REL-V03-01 | IMPORTANT | PRODUCT 关系权威源升级为 V0.3，需清除当前治理中的 M-2377 全局隐藏/冲突旧结论 | 已仅同步 V0.3 来源、30/0/54、14 Process 与 M-2377/Specialty/Rubber 边界；Markets 仍不渲染行级推荐，其他门禁不变 | PROJECT_CONTROL_REVIEW_PASS / CLOSED |

## 17. Gate 0 验收清单

- [x] 12 个 Page ID、URL、类型、关键词、Mapping 和 Verification 已核对。
- [x] MARKET-000 的 `NO_PRIMARY_KEYWORD` 与可索引导航职责已分离。
- [x] EU 总页、六国、UK、India、Brazil EN/PT-BR 职责已区分。
- [x] Brazil PT-BR 保持 `PROVISIONAL_URL` / `LOCALIZATION_REVIEW_REQUIRED`。
- [x] Market、Product、Application、Document、Resource、About 和 Conversion 边界已定义。
- [x] Hub 的信息架构、SEO/GEO、CTA、视觉与响应式方向记录了用户决定。
- [x] 事实、贸易、路由和本地化门禁已定义。
- [x] `site_scope=tio2-my` 和外部开发边界已定义。
- [x] 未创建线框、视觉稿、代码、测试、部署或发布操作。
- [x] 项目总控完成 Gate 0 复审并判定 PASS。
- [x] 用户于 2026-08-29 整体批准本 Playbook V0.1 与 MARKET-000 Brief V0.1。

## 18. 变更记录

| 版本 | 日期 | 变更类型 | 内容 | 批准状态 |
|---|---|---|---|---|
| V0.1 | 2026-08-29 | Gate 0 批准基线 | 建立 Markets Hub 与 Market procurement landing pages 的共同规范；总控重新复审 PASS；用户最终批准 MARKET-000 进入 Gate 1 | 用户批准；`APPROVED_FOR_DESIGN`；仅授权 MARKET-000 Gate 1 |
| V0.1 / PRODUCT relation V0.2.1 impact | 2026-08-30 | 共用关系治理修订 | 记录当时 V0.2.1 关系边界；该关系源和 M-2377 旧结论已由下一行 V0.3 同步取代 | 历史记录；不用于当前关系判断 |
| V0.1 / PRODUCT relation V0.3 source sync | 2026-08-30 | 当前关系治理同步 | V0.3 取代 V0.2.1 作为当前唯一关系源；更新 30/0/54、14 Process、M-2377 已批准中性关系、Specialty no-public、Rubber evidence-only 与 M-996/M-2196 comparison hold；Markets 仍需独立市场证据 | `MKT-REL-V03-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；approval source=`USER_APPROVED_PRODUCT_V0.3 + PROJECT_CONTROL_TARGETED_REVIEW`；页面结构与视觉不变 |
