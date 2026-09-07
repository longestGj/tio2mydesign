# TiO2 Malaysia Applications 页面体系作业规范 V0.1

## 0. 文档控制

| 项目 | 内容 |
|---|---|
| 文档名称 | `APPLICATION_PLAYBOOK_V0.1` |
| 页面体系 | Applications |
| Playbook Key | `APPLICATION` |
| 版本 | V0.1 |
| 创建日期 | 2026-08-29 |
| 当前状态 | `APPROVED_FOR_DESIGN` |
| Gate 0 状态 | `APPROVED` |
| 用户批准记录 | 2026-08-30：用户明确批准 APP-000 Gate 0 当前审批点 |
| 当前授权范围 | Gate 0 基线保持；用户于 2026-08-30 进一步授权 APP-000 使用 PRODUCT V0.2.1 完成 Gate 1–5 草案并逐 Gate 提交总控审查；不授权 Gate 6/7、开发、发布或五个 Application 子页启动 |
| 本版变更摘要 | APP-000 Gate 0 获用户批准；关闭 APP-R001，保留产品—应用、route、技术事实和其他门禁 |
| 适用页面 | `APP-000`、`APP-COAT`、`APP-PLAS`、`APP-MB`、`APP-INK`、`APP-PAPER` |
| 本轮实际执行页面 | 仅 `APP-000` |
| 编制角色 | Applications 页面执行任务 |
| 审核角色 | 项目总控与质量审查 |
| 最终批准人 | 用户 |
| 本项目范围 | 视觉策划、SEO、GEO、内容架构、开发交付规格和外部实现后的只读质量验收 |
| 明确禁止 | WordPress、Next.js、CMS、组件、样式、测试、部署、DNS、索引、发布或任何代码修改 |

本文件仍是用户批准的 APP-000 Gate 0 基线。用户后续明确授权 APP-000 按 PRODUCT V0.2.1 推进 Gate 1–5 草案并逐 Gate 提交总控审查；该授权允许产出，不等于各 Gate 已批准。五个 Application 子页、Gate 6/7、开发交付和发布仍未授权。

## 1. 权威基线与适用顺序

发生冲突时按以下顺序处理：

1. 用户在当前任务中明确批准的最新决定。
2. 对应页面已批准的独立任务卡。
3. `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`。
4. `research/keyword/11_page_keyword_master.csv`。
5. 本 Playbook 的当前 Gate 0 获批基线；其批准范围不得扩展到未获批 Gate 或子页。
6. 已验证的产品、应用、公司、文件、市场和运营证据。
7. 关键词研究、SERP、同行资料、旧站和历史版本。

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
- 已批准首页 V0.3 视觉与自检资料
- 已批准 `PRODUCT_PLAYBOOK_V0.1.md`、`PRODUCT-000` Brief，仅复用证据门禁、route key、Buyer Clean 和品牌规则
- 已批准 `MARKET_PLAYBOOK_V0.1.md`、`MARKET-000` Brief，仅复用 Navigation Hub、状态隔离和 390px 规则

历史资料中的迁移前路径按 `02_DIRECTORY_GUIDE.md` 解析，不回写历史批准版本。mytio2.com、竞品、搜索结果和图片都只是候选资料，不能证明 TiO2 Malaysia 的产品能力或应用适用性。

## 2. Applications 页面体系身份

Applications 体系共 6 页。以下字段逐项复制自页面登记册与页面—关键词主表，不构成状态升级：

| Page ID | Page Name | 当前登记 URL | Page Type | Primary Keyword | Priority | Mapping Status | Verification Status |
|---|---|---|---|---|---|---|---|
| APP-000 | Applications | `/applications/` | Navigation hub | `NO_PRIMARY_KEYWORD` | P1 | `PLANNED_ARCHITECTURE` | `NO_DIRECT_KEYWORD_TARGET` |
| APP-COAT | TiO2 for Coatings | `/applications/titanium-dioxide-for-coatings/` | Application landing page | `titanium dioxide for coatings` | P1 | `PROVISIONAL_URL` | `QUALITATIVE_KEYWORD_EVIDENCE` |
| APP-PLAS | TiO2 for Plastics | `/applications/titanium-dioxide-for-plastics/` | Application landing page | `titanium dioxide for plastics` | P1 | `PROVISIONAL_URL` | `QUALITATIVE_KEYWORD_EVIDENCE` |
| APP-MB | TiO2 for Masterbatch | `/applications/titanium-dioxide-for-masterbatch/` | Application landing page | `titanium dioxide for masterbatch` | P1 | `PROVISIONAL_URL` | `QUALITATIVE_KEYWORD_EVIDENCE` |
| APP-INK | TiO2 for Printing Inks | `/applications/titanium-dioxide-for-printing-inks/` | Application landing page | `titanium dioxide for printing inks` | P2 | `PROVISIONAL_URL` | `QUALITATIVE_KEYWORD_EVIDENCE` |
| APP-PAPER | TiO2 for Paper | `/applications/titanium-dioxide-for-paper/` | Application landing page | `titanium dioxide for paper` | P2 | `PROVISIONAL_URL` | `QUALITATIVE_KEYWORD_EVIDENCE` |

### 2.1 状态解释

- `APP-000` 已进入规划，但详细页面方案和公开路由合同仍未获批准。
- 五个子页的页面职责和关键词 owner 关系可以用于边界设计；`PROVISIONAL_URL` 不得写成最终 href、Canonical、Sitemap、Schema、菜单或跨组件永久依赖。
- `QUALITATIVE_KEYWORD_EVIDENCE` 只支持子页搜索意图方向，不证明任何具体型号适用于相应应用。
- 本轮不得为五个子页建立 Brief、研究审计、内容架构、线框、视觉稿或其他正式成果。

## 3. 页面类型与职责

### 3.1 APP-000 Navigation Hub

APP-000 是按应用帮助买家选择正确下游页面的导航中心。它必须：

- 清楚呈现 Coatings、Plastics、Masterbatch、Printing Inks、Paper 五个批准的应用分类。
- 解释每个 Application 子页帮助买家完成哪类采购判断，但不替子页撰写泛应用 SEO 正文。
- 区分 Plastics 与 Masterbatch 的页面入口；Masterbatch 指 TiO2 作为色母粒配方输入的评估方向，不把网站产品描述为 finished masterbatch。
- 在没有技术证据时，不输出任何型号推荐、评分、最佳选项、性能比较或“适合/不适合”结论。
- 连接 Products、Documents、Markets 和 RFQ owner 页面，但仅在目标获得批准且 route live 后渲染链接。
- 在下游 URL、内容或 route 未批准时保持自然降级，不显示死链、空卡、`Coming soon` 或内部审核状态。

APP-000 不是产品推荐器，不拥有五个泛应用主关键词，也不是五张卡片组成的薄页。

### 3.2 Application Landing Pages

五个子页在后续分别承接自身唯一的泛应用意图。每页应在独立任务卡获批后，使用应用体系、选择指标、技术证据和采购路径帮助买家评估 TiO2；不得：

- 抢具体型号关键词、国家 supplier 词或 chloride/sulfate 工艺主词。
- 根据 PRD 分组、产品名称、旧站分类或关键词标签推断产品推荐。
- 把一个应用页简单替换名称生成另一个应用页。
- 在没有技术证据时发布具体性能、配方、推荐、不推荐或型号差异。
- 在 URL 仍为 `PROVISIONAL_URL` 时把当前登记路径当作最终路由。

### 3.3 五个子页的最小独有内容要求

此节只定义未来准入要求，不启动子页成果：

| Page ID | 必须解决的独有采购判断 | 不得由其他页面代答 |
|---|---|---|
| APP-COAT | 涂料体系应核对的 TiO2 选择因素、已证实的应用差异和证据支持的型号路径 | 不用 paint/coatings 泛词抢型号页或国家页 |
| APP-PLAS | 塑料材料/加工场景的选择因素及已证实的体系差异 | 不把 Masterbatch 输入场景全部吞并 |
| APP-MB | TiO2 作为 masterbatch pigment input 的采购与技术评估 | 不把 TiO2 产品描述为成品 masterbatch |
| APP-INK | Printing Inks 的体系问题、磨蚀/分散等任何具体因素仅在证据支持时说明 | 不复制 M-52 型号详情 |
| APP-PAPER | Paper 应用的真实选择问题和证据支持关系 | 没有技术证据时不得为了填页推荐型号 |

## 4. 关键词与防内耗合同

| 搜索意图 | 唯一 Owner | APP-000 允许行为 | 禁止行为 |
|---|---|---|---|
| Applications 导航 | APP-000 | 使用五个应用名称作导航实体 | 为 Hub 创造商业主关键词 |
| Coatings 泛应用 | APP-COAT | 使用 `Coatings` 作为分类标签和 route key | H1、Title、正文主攻 `titanium dioxide for coatings` |
| Plastics 泛应用 | APP-PLAS | 使用 `Plastics` 作为分类标签和 route key | 展开 plastics 技术 SEO 正文 |
| Masterbatch 泛应用 | APP-MB | 使用 `Masterbatch` 作为分类标签和 route key | 优化该主词或混淆 finished masterbatch |
| Printing Inks 泛应用 | APP-INK | 使用 `Printing Inks` 作为分类标签和 route key | 展开 ink 技术正文或抢 M-52 型号词 |
| Paper 泛应用 | APP-PAPER | 使用 `Paper` 作为分类标签和 route key | 无证据推荐型号或扩写应用主词 |
| 泛产品、rutile、grades | PRODUCT-000 | 轻量导向产品集合 | 复制产品目录、工艺或选型器 |
| 精确型号 | 对应 GRADE-* | 只在有批准关系时链接 | 在 Hub 使用型号词做标题或推荐 |
| Chloride/Sulfate | PRODUCT-PROC-* | 说明 Products 提供工艺入口 | 在 Applications 抢工艺词或作工艺比较 |
| 国家 supplier | MARKET-* | 轻量 market-support 入口 | 在 Application Hub 优化国家供应商词 |
| 文件/合规 | DOC-* / CONV-DOC | 说明文件核对由 Documents 负责 | 宣称文件 available 或复制文件页 |
| 制造、原产地、追溯 | ABOUT-001 / DOC-COO | 必要时导向事实 owner | 把应用页写成 origin 证明页 |
| 报价、样品、文件申请 | CONV-* | 条件 CTA 与上下文预填 | 在 APP-000 内嵌表单 |

APP-000 的硬边界原样继承主表：

- Primary Keyword：`NO_PRIMARY_KEYWORD`
- Secondary Keywords：`coatings | plastics | masterbatch | printing inks | paper`，仅作导航实体标签
- Excluded Keywords：`all generic application primary keywords`
- Cannibalization Boundary：`Hub does not own application primary terms; each child application page owns one use-case cluster.`

## 5. 统一 Gate 流程

### Gate 0：任务准入

- 核对 Page ID、URL、Page Type、Priority、Mapping 和 Verification。
- 从主表原样复制 Primary、Secondary、Search Intent、Buyer Stage、Source Cluster、Excluded 和 Cannibalization Boundary。
- 建立 Playbook 草案和独立页面 Brief 草案。
- 2026-08-30 用户批准 APP-000 Gate 0，Playbook/Brief 进入 `APPROVED_FOR_DESIGN` 基线。
- 后续用户统一指令已把 APP-000 产出范围扩展至 Gate 5；Gate 1–5 仍分别保持草案/待总控审查，不得启动子页或进入 Gate 6/7。

### Gate 1：研究、证据与 route 审计

- 逐应用核对买家问题、搜索意图、SERP 类型和真实体系差异。
- 产品—应用关系必须逐条建立 Claim/Evidence Register，并由当前批准技术资料支持。
- Applications 的产品关系只读取全站当前有效 `APPROVED_RELATION_BASELINE`：`PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.1.csv` 与两份 V0.2.1 审计；V0.2 仅作历史追溯，不得作为并行或当前关系源。
- 25 条 `VERIFIED_FOR_PUBLIC_MAPPING` 只允许使用 `Grade to Review` 等中性列示；不构成推荐、排名、性能、适用保证、等效或选择理由。
- 55 条 `NO_PUBLIC_MAPPING` 只是不公开正向映射，不得改写成“不适用”“不推荐”或负面结论。
- `Specialty Materials` 的 1 条中性关系只作为 taxonomy / 产品路径输入，不创建第六个 Application 页面、Page ID 或 route。
- Grade → Application、Grade → Process 与 Grade ↔ Grade Comparison 必须分域读取；`comparison_hold` 不得被误判为 Application mapping conflict。
- 同时审计 Page ID、URL approval、content approval 与 route live；不得合并为一个“可用”状态。
- 缺证据只冻结具体字段或关系，不阻塞不依赖该事实的结构。

### Gate 2：内容架构

- 锁定 H1、模块、答案块、CTA、内链和可见文案。
- Hub 必须提供选择逻辑和下一步，不得退化为卡片列表。
- 子页必须有真实独有内容，不得名称替换。

### Gate 3–5：线框、视觉方向和完整视觉稿

- 逐 Gate 批准，不并行越 Gate。
- 每阶段同时提交 Desktop、Tablet 规则和 390px Mobile。
- 覆盖 route 省略、无图片、无已验证推荐、长文本、focus 和 menu open 状态。

### Gate 6–10

- 本项目只审查和交付批准规格，不进行开发。
- 外部实现后只读验收并提交问题清单，不直接修复代码。
- 部署、DNS、生产写入、索引和发布必须由用户另行授权。

## 6. APP-000 Hub 模块方向

以下是 Gate 0 的模块职责方向，不是 Gate 2 最终内容架构或线框：

| 顺序 | Module ID | 模块 | 买家判断 | Gate 0 核心规则 |
|---:|---|---|---|---|
| 0 | GLOBAL_HEADER | Header | 如何访问主要栏目？ | 固定八项顺序；Applications 当前项；Home 为可见第一项 |
| 1 | BREADCRUMB | Breadcrumb | 当前处于什么层级？ | `Home > Applications`，与未来 Schema 一致 |
| 2 | HERO | Applications Hub Hero | 此页如何帮助我开始？ | 说明按应用选择正确页面；不使用子页主关键词作 Hub acquisition target |
| 3 | APPLICATION_SELECTOR | Choose by Application | 应进入哪个 Application owner 页面？ | 五个应用分类；只提供页面职责摘要，不显示型号建议 |
| 4 | CHOICE_GUIDE | How to Choose an Application Path | Plastics 与 Masterbatch 等入口有何差别？ | 只解释页面范围与买家问题，不作产品性能结论 |
| 5 | TECHNICAL_EVALUATION_BOUNDARY | What Happens on an Application Page | 下一页会核对什么？ | 说明需要体系、技术资料和买家要求；不暗示已有推荐 |
| 6 | PROCUREMENT_PATHS | Continue Your Procurement Review | 还应核对产品、市场或文件吗？ | Products、Markets、Documents 条件路径 |
| 7 | BUYER_QUESTIONS | Buyer Questions | 没有明确应用或型号时如何继续？ | 提供导航型、可引用答案，不扩写无证据技术事实 |
| 8 | FINAL_RFQ | Final RFQ | 如何带应用上下文提交询价？ | 条件 route；不内嵌表单；只传递用户明确选择 |
| 9 | GLOBAL_FOOTER | Footer | 如何返回栏目或联系？ | 只使用登记/批准入口和 verified 主体信息；不新增 Legal/Privacy 占位页 |

### 6.1 应用选择逻辑

- 第一层固定为 Coatings、Plastics、Masterbatch、Printing Inks、Paper。
- 顺序表示信息架构与 P1/P2 优先级，不表示行业价值、产品性能或商业优先级排名。
- 每个入口只包含应用名称、该子页帮助核对的采购问题和条件 CTA。
- 不列出型号、工艺、文件可用性、认证、库存、价格、MOQ、交期或物流信息。
- 五个子页 URL 均为 provisional；规格使用 Page ID/route key，URL 获批且 route live 前不输出链接。
- 如果没有任何子页满足公开 route 条件，Selector 不得生成五个死卡片；Gate 2 必须定义 route-safe 完整降级文案，且 APP-000 不得因此伪造替代 URL。

### 6.2 APP-000 不是产品推荐器

- APP-000 不读取或展示未批准的 application-to-grade recommendation 集合。
- 后续内容架构如需展示型号，只能读取 `APPROVED_RELATION_BASELINE` 中的中性 `Grade to Review` 集合；具体模块、位置和文案仍需 Gate 2 独立批准。
- `Grade to Review` 不等于产品推荐器：不得添加 Best、Recommended、Ideal、Equivalent、排序理由、性能优势或适用保证。
- M-2377 的 4 条 `CONFLICT_HOLD`、2 条 `NO_PUBLIC_MAPPING` 及 Process `CONFLICT_HOLD` 全部继续 `DO_NOT_RENDER`；`R-M2377-TDS=OPEN_HARD_GATE`，不得进入任何 Applications 推荐、Meta、ALT、Schema 或可见标签。
- M-996 与 M-2196 的 Coatings/Sulfate 基础关系继续为 verified 中性输入，`application_conflict=none`；两者差异、排序和选择理由由独立 `comparison_hold=M996_VS_M2196_DIFFERENTIATION_FROZEN` 控制，不得误判为 Application mapping conflict。
- Paper 没有当前产品级证据时不得为了避免空白推荐型号。

## 7. SEO 合同

### 7.1 APP-000

| 字段 | Gate 0 方向 |
|---|---|
| Primary Keyword | `NO_PRIMARY_KEYWORD` |
| Search Intent | `N`；Navigation |
| Buyer Stage | Navigation |
| Title | `Applications | TiO2 Malaysia`；Gate 2 草案锁定，待总控审查 |
| H1 | `Explore Titanium Dioxide by Application`；Gate 2 草案锁定，待总控审查 |
| Meta Description 方向 | 说明按 Coatings、Plastics、Masterbatch、Printing Inks、Paper 进入正确应用页面；不含具体型号或能力承诺 |
| Current URL | `/applications/`；登记值，Mapping 仍为 `PLANNED_ARCHITECTURE` |
| Canonical 方向 | `https://tio2malaysia.com/applications/`；需在后续 Gate 与路由批准中复核，不代表当前发布授权 |
| Robots 方向 | `index,follow`；发布前复核，Gate 0 不改变索引状态 |
| Hreflang | `NOT_APPLICABLE` |

H1、Title、Meta、Hero 和正文不得把五个子页主关键词作为 Hub 的独立获取目标。应用卡片名称是导航标签，不是关键词段落。

### 7.2 Application Landing Pages

- 每页只使用主表中的一个唯一主关键词。
- 辅助词必须服务同一个应用意图。
- 不抢 exact grade、country supplier 或 process-category 主词。
- URL、Canonical 和 Hreflang 在独立任务卡和 URL 批准前保持暂定。
- 子页不得因本 Playbook 草案而进入 sitemap 或导航。

## 8. GEO 与 Schema 合同

### 8.1 APP-000 GEO

APP-000 只建立以下真实、可见关系：

- TiO2 Malaysia → Applications navigation hub。
- Applications Hub → Coatings、Plastics、Masterbatch、Printing Inks、Paper application page entities。
- Applications Hub → Products、Markets、Documents、Conversion owner pages，仅在公开链接存在时表达。

建议 Answer-ready Blocks：

1. 应该从哪个 application page 开始？
2. Plastics 与 Masterbatch 页面解决的采购问题有什么不同？
3. Application page 是否会直接保证某个 grade 适用？
4. 已知型号或尚不确定应用时应去哪里？

答案必须说明 Application 页面是技术评估入口，不是适用性保证；不得生成型号推荐、性能、制造、原产地、文件、法规或供应能力事实。

### 8.2 Schema

APP-000 的 Gate 0 方向：

- `CollectionPage`
- `ItemList`
- `BreadcrumbList`

规则：

- `ItemList` 只包含页面可见、URL 已批准且 route live 的 Application links。
- 五个 provisional URL 不得因为存在于登记册就自动进入 Schema。
- 不在 Hub 为应用分类生成 `Product`、`Offer`、rating、review 或 `LocalBusiness`。
- Buyer Questions 默认不使用 `FAQPage` 或 `QAPage`；只有发布时资格、页面形态和当前官方要求均满足才另行评估。
- Schema、Meta、OG、ALT 和页面可见内容使用同一事实门禁。

## 9. 事实与证据合同

### 9.1 公共状态

| 状态 | 公共行为 |
|---|---|
| `verified` | 在页面内容和相同的机器可读字段中按批准范围渲染 |
| `pending_verification` | 不渲染，不进入 HTML、JSON、API、Schema、Meta、OG 或 ALT |
| `not_public` | 不公开，不因内部资料存在而输出 |

Claim Register 的渲染决定只使用 `RENDER`、`RENDER_WITH_QUALIFIER`、`CONTROLLED_REQUEST_ONLY`、`DO_NOT_RENDER`。

### 9.2 来源层级

1. 当前批准 TDS、SDS、COA 或内部技术资料。
2. 已批准技术、合规、公司或运营决定。
3. 当前官方法规或监管来源。
4. PRD、登记册和主表只证明页面架构、关键词、Page ID 和状态。
5. 搜索结果和同行内容只证明表达或意图，不能证明本公司能力。
6. mytio2.com 仅作事实候选，不复制正文，不自动形成 verified 关系。

### 9.3 强制冻结声明

- 所有超出 `APPROVED_RELATION_BASELINE` 的产品—应用关系，以及任何推荐、排名、比较、适用保证或不适用结论。
- M-2377 的工艺、应用、推荐和相关关系。
- M-996 与 M-2196 的未验证差异。
- 未验证的产品性能、体系适配、技术指标、表面处理或配方结论。
- 未验证的 Malaysia manufacturing、origin、COO 和 traceability。
- 未验证的 REACH、TDS、SDS、COA、COO 或其他文件可用性。
- 未验证的库存、价格、MOQ、产能、交期、包装、Incoterm、港口、物流或样品条件。
- 完全等同、保证替代、最佳、最优、最低成本、保证适用或规避贸易措施的表达。

## 10. Route、CTA 与表单上下文合同

### 10.1 Route 状态分离

每个目标分别记录：

- `mapping_status`
- `url_approval_status`
- `content_approval_status`
- `route_live_status`
- `claim_approval_status`，适用于技术关系

其中任何一个状态不得推导另一个状态。`PROVISIONAL_URL` 不形成永久组件依赖。

### 10.2 APP-000 CTA

| 层级 | CTA | 目标 | Gate 0 规则 |
|---|---|---|---|
| Primary | Explore Applications | `#application-selector` | 页面内定位，不依赖外部 route |
| Secondary | Request a Quote | `CONV-RFQ` route key | workflow 批准且 route live 后才渲染 |
| Application | Explore Coatings / Plastics / Masterbatch / Printing Inks / Paper | 对应 APP-* Page ID | URL approved + content approved + route live 后才渲染 |
| Supporting | Explore Products / Markets / Review Documents | 对应 owner Page ID | 目标批准且 route live 后渲染 |
| Final | Request a Quote | `CONV-RFQ` | 预填 `source_page=APP-000`；只在用户明确选择后附加 application |

APP-000 不内嵌 RFQ、Sample 或 Documents 表单。候选 application 卡片不能自动写入 selected grade。提交成功不表示报价、样品、文件或技术适用性已获批准。

### 10.3 省略规则

- CTA 不可用时，相关按钮、行动句、图标和空容器同时省略。
- 不显示 `Coming soon`、`Pending verification`、`Provisional URL` 或内部 Evidence ID。
- 不创建未登记 Contact、Legal、Privacy 或其他 fallback 页面。
- 如果未来批准 fallback，必须明确目标、文案、表面和证据；不得自行复用 RFQ CTA。

## 11. 内链合同

### 11.1 Hub 入站

- Header、Footer。
- Home Applications 模块。
- 五个 Application 子页未来的 breadcrumb/back-to-applications。
- Product、Market、Document 或 Resource 页面中与应用选择有关的上下文入口。

### 11.2 Hub 出站

- 五个 APP-* Page ID；只在 URL/content/route 全部获批后公开链接。
- PRODUCT-000、MARKET-000、DOC-000、CONV-RFQ；只在目标满足公开条件时链接。
- 不链接 `NEW_PAGE_CANDIDATE`。
- 不把五个 provisional URL 写成永久 href、Schema 或缓存键。

### 11.3 Breadcrumb

- APP-000：`Home > Applications`。
- 子页方向：`Home > Applications > {Application}`；只在对应页面任务卡获批后锁定。
- 可见 Breadcrumb、Canonical 与 `BreadcrumbList` 必须一致。

## 12. 视觉与响应式合同

### 12.1 品牌方向

- 继承批准首页 Industrial Editorial 基底。
- 在选择说明和技术边界局部使用 Technical Editorial 的细线、编号和注释。
- 不复制首页、Products Hub 或 Markets Hub 的模块结构。
- 白色为主、Navy 建立层级；浅底小文字和实心 CTA 使用 `#007F77`，`#00A99D` 只作非文字强调。
- 信息密度中等，不用装饰性空白制造页面长度。
- 禁止 SaaS dashboard、筛选后台、电商价格卡、KPI、评分或“recommended/best”徽章。

### 12.2 图片策略

- 可使用中性的应用材料或加工场景图片，但必须确认来源、授权和真实内容。
- 图片只帮助识别应用，不证明本公司产品适用、工厂、产能、库存、实验室或客户案例。
- 禁止用 AI/库存图暗示真实客户配方、生产线、涂层性能、塑料性能或认证。
- 没有合格图片时采用完整无图片布局，不使用跨站媒体 fallback。

### 12.3 Desktop

- 内容容器 1200–1320px。
- Hero 可双栏，但 H1、导航任务和 CTA 是第一视觉焦点。
- 五个应用入口避免五张同质大卡；可以用 2+3 编辑式分组或一张主清单与职责摘要。
- 不展示型号推荐面板、参数比较表或应用评分。
- 后续 owner 路径保持轻量，不做门户看板。

### 12.4 Tablet

- 应用入口根据内容长度转为两列或单列。
- 不依赖 hover，不把核心入口放入横向滑动。
- 长标题和说明自然换行，不截断。

### 12.5 Mobile 与 390px

- Header 为 Logo、Menu 和条件 RFQ；menu open 后完整显示八项固定顺序，Home 为第一项。
- Hero 单列；CTA 可全宽；按钮后不出现无目的大空白。
- 五个应用按 Coatings → Plastics → Masterbatch → Printing Inks → Paper 纵向排列或可访问分组。
- 390px 不出现横向溢出；买家可见文字原则上不低于 14px。
- 不使用横向 carousel 作为唯一访问方式。
- 触控目标与间距足够；固定 CTA 如使用不得遮挡正文或系统 UI。
- 无图片、route 省略和长英文标签状态必须保持自然闭合。

### 12.6 后续 Gate 必须交付状态

- Desktop 默认。
- Mobile 390px 默认。
- Mobile menu open。
- Hover、keyboard focus 和 current-page 状态。
- 五个子页 route 全可用、部分可用、全部不可用的自然降级。
- RFQ 可用/不可用。
- 无图片。
- 长标题、长说明、200% 缩放和 reduced motion。

这些只是未来画面合同；本轮不得制作线框或视觉稿。

## 13. 可访问性合同

- 一个 H1，标题层级连续。
- 所有链接、菜单、选择入口和 CTA 支持键盘。
- Focus 清晰，当前状态不只依赖颜色。
- 链接和按钮名称脱离上下文仍可理解。
- 触控目标和间距满足适用要求。
- 图片 ALT 描述实际图像用途；装饰图使用空 ALT。
- 应用关系图有等价文本；不能只靠图片或颜色区分应用。
- 200% 缩放、390px、长文本和系统字体放大后仍可用。
- 动效尊重 `prefers-reduced-motion`。
- 无脚本时核心可见内容与批准的普通链接仍可使用；不可用 route 不生成死链。

## 14. 开发交付规格边界

本节只定义未来交给 `D:\16Wordpress_nextjs` 外部开发项目的结果，不规定实现技术，也不授权当前开发。

共同交付字段至少包括：

- Page identity、language、Canonical candidate、indexing direction 和 `site_scope=tio2-my`。
- SEO、Open Graph、Robots、Sitemap、hreflang 和 Schema 输入。
- Hero、五个 Application entities、Page ID/route key 和条件 CTA。
- Application page responsibility summary；不得混入产品推荐。
- Claim status、source、date、scope 和渲染决定。
- Products、Markets、Documents、Conversion route keys。
- 空状态、无图片、route 不可用和 RFQ 不可用行为。
- 图片、ALT、授权与媒体空值行为。
- RFQ 预填合同。

强制隔离：

- 只读取 `site_scope=tio2-my` 数据。
- 不从 TIOVAR、mytio2 或其他 scope 回退内容、媒体、菜单、SEO、缓存、路由或表单上下文。
- 未验证字段不进入 HTML、JSON、API、Schema、Meta、OG 或 ALT。
- 内部状态不得成为公共标签、徽章或说明。
- 共享组件影响由外部开发项目评估和实现；本项目只验收结果。

## 15. 只读 QA

### 15.1 页面身份与内容

- 6 个 Page ID、页面名、URL 状态、关键词、优先级、Mapping 和 Verification 正确。
- APP-000 只做导航，不抢五个子页主词。
- 五个子页不是名称替换稿。
- 没有产品—应用无证据推荐或技术主张。
- 没有复制 mytio2.com 正文。

### 15.2 SEO 与 GEO

- APP-000 保持 `NO_PRIMARY_KEYWORD`。
- 五个子页主关键词唯一，Hub 只使用导航标签。
- Product、Process、Market、Document、Resource 与 Conversion owner 边界清楚。
- Schema 与可见内容及 route 状态一致。
- Answer-ready Blocks 有上下文，但不扩展无证据事实。

### 15.3 视觉、响应式与无障碍

- Desktop、Tablet、390px Mobile 均通过。
- menu、focus、route 省略、无图片和长文本状态完整。
- 无横向溢出、空卡、按钮后大空白或被遮挡内容。
- 键盘、对比度、触控、200% 缩放和 reduced motion 通过。

### 15.4 事实与转化

- 无型号推荐、性能、制造、origin、文件、法规、价格、库存、交期或物流声明泄漏。
- 预填只使用用户明确选择的 application。
- 提交状态不作未批准承诺。

### 15.5 隔离

- 无跨 `site_scope` 内容、媒体、菜单、SEO、缓存、路由或表单泄漏。
- 问题只提交给 `D:\16Wordpress_nextjs` 外部开发项目；本项目不直接修复代码。

## 16. 变更控制

以下变化必须先提交影响分析并获得批准：

- 新增、删除、合并或拆分 6 个 Applications 页面。
- 改变 URL、Canonical、语言目录、hreflang 或索引策略。
- 改变主关键词、页面职责或五应用集合。
- 把任何 `PROVISIONAL_URL` 写成最终 URL。
- 新增或改变产品—应用推荐、应用差异或技术事实。
- 改变 Header 顺序、site scope 或跨站回退边界。
- 创建新页面、Legal/Privacy 占位、代码、部署、DNS 或发布操作。

## 17. Gate 0 决定与问题记录

### 17.1 当前获批基线方向

| Decision ID | 决定 | 当前状态 |
|---|---|---|
| APP-D001 | APP-000 只做五应用 owner 页导航，不做产品推荐器 | `PROPOSED_FOR_GATE_0_REVIEW` |
| APP-D002 | 五个应用名称可作导航实体，但主关键词归各子页 | `PROPOSED_FOR_GATE_0_REVIEW` |
| APP-D003 | 所有子页使用 Page ID/route key，provisional URL 不永久化 | `PROPOSED_FOR_GATE_0_REVIEW` |
| APP-D004 | Hub 采用 CollectionPage、ItemList、BreadcrumbList 方向 | `PROPOSED_FOR_GATE_0_REVIEW`；发布前复核 |
| APP-D005 | 主 CTA 为页面内 Explore Applications，RFQ 为条件次 CTA | `PROPOSED_FOR_GATE_0_REVIEW` |
| APP-D006 | Industrial Editorial 基底 + 局部 Technical Editorial | `PROPOSED_FOR_GATE_0_REVIEW`；不等于 Gate 4 批准 |
| APP-D007 | Mobile 按五应用纵向处理，390px 无溢出 | `PROPOSED_FOR_GATE_0_REVIEW` |
| APP-D008 | APP-000 只推进至 Gate 5 草案；不启动五个 Application 子页或 Gate 6/7 | 用户当前任务的强制停止点 |
| APP-D009 | PRODUCT V0.2.1 为全站当前有效 `APPROVED_RELATION_BASELINE` | 25 条 Application 与 13 个 Process 集合不变；比较冻结使用独立字段；未来内容位置仍待 Gate 2 |

### 17.2 当前问题

| Review ID | 级别 | 问题 | 当前控制 | 状态 |
|---|---|---|---|---|
| APP-R001 | BLOCKING | Playbook 与 APP-000 Brief 的 Gate 0 总控复审及用户最终批准已完成 | Gate 0 基线已锁定；后续用户另行授权 APP-000 产出 Gate 1–5 草案 | CLOSED |
| APP-R002 | IMPORTANT | 五个子页 URL 均为 provisional | 只用 Page ID/route key；不进入公开链接/Schema | OPEN |
| APP-R003 | IMPORTANT | 产品—应用基础映射证据门禁 | PRODUCT V0.2.1 是当前有效全站中性关系基线；推荐/排名/保证仍禁止 | CLOSED |
| APP-R004 | IMPORTANT | M-996/M-2196 比较、差异与选择理由受限 | 两型号 Coatings/Sulfate 基础关系保持 verified；独立 `comparison_hold` 禁止差异、排序、选择理由、等效或替代表达，不得记为 Application conflict | OPEN |
| R-M2377-TDS | HARD_GATE | M-2377 缺少最新批准 TDS 与专项 Application / Process 技术审查 | 4 conflict + 2 no-public 与 Process conflict 全部 `DO_NOT_RENDER`；只阻塞 M-2377，不阻塞其余 13 型号或 25 条已批准关系 | OPEN_HARD_GATE |
| APP-R005 | IMPORTANT | Documents、RFQ 等下游 route 为 planned/provisional 或 live 未知 | 条件 CTA；不硬编码，不建 fallback 页面 | OPEN |
| APP-R006 | IMPORTANT | Footer 不得增加登记册外的 Legal/Privacy 入口 | 只使用已登记/批准入口 | CONTROLLED_IN_APPROVED_BASELINE |
| APP-DEP-001 | BLOCKING_DEPENDENCY | 14 型号技术关系当前基线已更新并通过总控复审 | 全站只读取 PRODUCT V0.2.1 `APPROVED_RELATION_BASELINE`；V0.2 仅作历史记录，禁止并行来源 | CLOSED |

## 18. Gate 0 验收清单

- [x] 6 个 Page ID、页面名、URL、类型、关键词、优先级、Mapping 和 Verification 已核对。
- [x] APP-000 的 `NO_PRIMARY_KEYWORD`、Navigation 和子页关键词 owner 已分离。
- [x] 五个子页保持 `PROVISIONAL_URL`，没有状态升级。
- [x] Hub、Application、Product、Process、Market、Document、Resource、About 和 Conversion 边界已定义。
- [x] 产品—应用证据门禁、M-2377 与 M-996/M-2196 冻结已定义。
- [x] 模块、SEO、GEO、Schema、CTA、内链、Desktop、Tablet、390px 和无障碍方向已定义。
- [x] `site_scope=tio2-my` 与无跨站 fallback 已定义。
- [x] 本轮未启动五个子页，未创建 Gate 1、内容架构、线框或视觉稿。
- [x] 本轮未修改 `D:\16Wordpress_nextjs` 或编写任何代码。
- [x] 项目总控 Gate 0 审查通过。
- [x] 用户于 2026-08-30 最终批准 Gate 0。

## 19. Gate 记录

| Gate | 交付物 | 提交日期 | 总控结论 | 用户批准要求 | 批准日期 | 备注 |
|---|---|---|---|---|---|---|
| Gate 0 | 本 Playbook + `APP-000_APPLICATIONS_BRIEF_V0.1.md` | 2026-08-29 | PASS / CLOSED | 用户已明确批准 | 2026-08-30 | `APPROVED`；`PROJECT_CONTROL_REVIEW=CLOSED`；批准来源为用户当前明确决定 |
| Gate 1 | `pages/applications/01_research/APP-000_GATE1_EVIDENCE_AUDIT_V0.1.md` | 2026-08-30 | 完整审计草案，提交总控审查 | 需独立批准 | 未批准 | `DRAFT_FOR_GATE_1_REVIEW`；PRODUCT V0.2.1 当前关系输入 |
| Gate 2 | `pages/applications/04_planning/APP-000_CONTENT_ARCHITECTURE_V0.1.md` | 2026-08-30 | 完整草案，提交总控审查 | 需独立批准 | 未批准 | `DRAFT_FOR_GATE_2_REVIEW`；完整 25/13 关系输入 |
| Gate 3 | `pages/applications/04_planning/wireframes/APP-000_WIREFRAME_SPEC_V0.1.md` | 2026-08-30 | Desktop/Tablet/390px 草案，提交总控审查 | 需独立批准 | 未批准 | `DRAFT_FOR_GATE_3_REVIEW` |
| Gate 4 | `pages/applications/04_planning/visual-directions/APP-000_VISUAL_DIRECTION_V0.1.md` | 2026-08-30 | Industrial Editorial Application Atlas 草案，提交总控审查 | 需独立批准 | 未批准 | `DRAFT_FOR_GATE_4_REVIEW` |
| Gate 5 | `pages/applications/04_planning/visual-designs/APP-000_FULL_VISUAL_DESIGN_V0.1.md` + 4 assets | 2026-08-30 | 完整 Desktop/390px 视觉与状态草案，提交总控审查 | 需独立批准 | 未批准 | `DRAFT_FOR_GATE_5_REVIEW`；self-check pass |
| Gate 6 | 总控审查 | 未开始 | 未审查 | 全部阻塞问题关闭 | 未批准 |  |
| Gate 7 | 开发交付 | 未开始 | 未审查 | 需完整批准交付包 | 未批准 | 本项目不执行开发 |
| Gate 8 | 外部开发 | 不属于本项目执行 | 外部状态 | 由开发项目管理 | 未授权 |  |
| Gate 9 | 只读视觉、SEO、GEO 验收 | 未开始 | 未审查 | 需可访问实现 | 未批准 | 本项目不直接修复 |
| Gate 10 | 发布授权 | 未授权 | 不适用 | 必须由用户单独授权 | 未授权 | QA 完成不等于发布 |

## 20. 变更记录

| 版本 | 日期 | 变更类型 | 内容 | 批准状态 |
|---|---|---|---|---|
| V0.1 | 2026-08-29 | Gate 0 草案 | 建立 Applications Hub 与五个 Application landing pages 的作业规范；只提交 APP-000 Gate 0 审查 | `DRAFT_FOR_GATE_0_REVIEW`；未批准 |
| V0.1 approval record | 2026-08-30 | Gate 0 批准 | 用户批准 APP-000 Gate 0；APP-R001 关闭，APP-R002–R005 与其他门禁保持原状态 | `APPROVED_FOR_DESIGN`；仅授权 APP-000 Gate 1 |
| V0.1 dependency update | 2026-08-30 | Gate 1 依赖 | 用户确认 14 型号统一关系矩阵方案；登记 APP-DEP-001，矩阵内容获批前不锁定推荐或完成产品映射结论 | Gate 1 继续部分研究；Gate 2 禁止 |
| V0.1 relation baseline update | 2026-08-30 | Gate 1 证据（历史） | 用户授权 PRODUCT V0.2 且总控独立复验 18 PASS / 0 FAIL；关闭 APP-DEP-001 与 APP-R003，登记 25 条中性映射和持续冻结边界 | 已由 V0.2.1 取代为当前基线；保留历史追溯 |
| V0.1 relation governance update | 2026-08-30 | Gate 1 证据 | 总控复审通过 PRODUCT V0.2.1；25 条 Application 与 13 个 Process 集合不变，新增 `R-M2377-TDS` 硬门禁并将 M-996/M-2196 比较冻结拆入独立 `comparison_hold` | 当前 `APPROVED_RELATION_BASELINE`；Gate 1 草案待总控审查 |
| V0.1 design production authorization | 2026-08-30 | Gate 2–5 产出 | 用户要求 04–07 一级页面共同使用 PRODUCT V0.2.1，并授权 APP-000 完成 Gate 2 内容架构、Gate 3 线框、Gate 4 视觉方向和 Gate 5 Desktop/390px 完整视觉稿 | 四个 Gate 均已形成草案并逐 Gate提交总控审查；未获批准，不进入 Gate 6/7 |
