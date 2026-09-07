# TiO2 Malaysia Products 页面体系作业规范 V0.1

## 0. 文档控制

| 项目 | 内容 |
|---|---|
| 文档名称 | PRODUCT_PLAYBOOK_V0.1 |
| 页面体系 | Products |
| Playbook Key | `PRODUCT` |
| 版本 | V0.1 |
| 创建日期 | 2026-08-29 |
| 当前状态 | `APPROVED_FOR_DESIGN` |
| 用户批准记录 | 2026-08-29：用户在总控任务回复“继续”，总控记录为 PRODUCT_PLAYBOOK_V0.1 整体批准 |
| 批准范围 | 作为 Products 页面体系 Gate 1/2 及后续设计依据；不等于页面内容、视觉稿、开发交付或发布批准 |
| 本版变更摘要 | Gate 0 条件退回修订并通过复审；2026-08-29 用户整体批准 V0.1，进入 Gate 1/2 |
| 适用页面 | PRODUCT-000、2 个 Process 页面、14 个 Grade 页面 |
| 编制角色 | Products 页面执行任务 |
| 审核角色 | 项目总控与质量审查 |
| 最终批准人 | 用户 |
| 本项目范围 | 研究、内容架构、视觉、SEO、GEO、开发交付规格和只读质量验收 |
| 明确禁止 | WordPress、Next.js、CMS、组件、样式、测试、部署、发布或任何代码修改 |

本文件是已获用户整体批准的 Products 页面体系 V0.1 作业规范。它授权各页面依据独立任务卡进入相应设计 Gate，但不自动批准任何具体页面的内容、视觉稿、开发交付或发布。

## 1. 权威基线与适用顺序

发生冲突时按以下顺序处理：

1. 用户在当前任务中明确批准的最新决定。
2. 对应页面已批准的独立任务卡。
3. `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`。
4. `research/keyword/11_page_keyword_master.csv`。
5. 本 Playbook 的已批准版本。
6. 已批准的产品页统一模板、技术资料和证据。
7. 关键词研究、同行资料和历史版本。

当前必须读取的共同资料：

- `AGENTS.md`
- `00_PROJECT_STATUS.md`
- `01_PROJECT_INDEX.md`
- `02_DIRECTORY_GUIDE.md`
- `docs/architecture/PAGE_REGISTRY_V0.1.md`
- `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`
- `research/keyword/11_page_keyword_master.csv`
- `docs/page-briefs/PAGE_BRIEF_TEMPLATE.md`
- `docs/product-pages/01_Product_Page_Template_and_Content_Spec_V1.0.md`
- `docs/product-pages/03_Product_Page_Development_SOP_and_QA_V1.0.md`
- `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md`
- 已批准首页 V0.3 视觉与自检资料

历史文件中的迁移前路径按 `02_DIRECTORY_GUIDE.md` 映射，不回写历史版本。

## 2. Products 页面体系身份

Products 体系共 17 页：

| 页面类型 | 数量 | 核心职责 |
|---|---:|---|
| Product Hub | 1 | 承接泛产品、rutile、grades 和 grade-selection 意图，帮助买家进入应用、工艺或型号路径 |
| Process Aggregation | 2 | 分别承接 Chloride 和 Sulfate/Sulphate 工艺意图，聚合经过验证的工艺型号 |
| Grade Product Page | 14 | 每个型号一个稳定权威 URL，只承接该型号及同型号修饰词意图 |

### 2.1 Product Hub

| Page ID | URL | Primary Keyword | Mapping | Verification |
|---|---|---|---|---|
| PRODUCT-000 | `/products/` | `titanium dioxide pigment` | `APPROVED_PRD_V0.3` | `QUALITATIVE_KEYWORD_EVIDENCE` |

Hub 必须帮助买家完成选型判断，不能只是产品卡片列表。Hub 使用“应用优先、工艺辅助”的引导式路径，并保留全部 14 个型号的直接目录。

### 2.2 Process 页面

| Page ID | URL | Primary Keyword | 页面职责 |
|---|---|---|---|
| PRODUCT-PROC-CL | `/products/chloride-process-titanium-dioxide/` | `chloride process titanium dioxide` | 解释工艺选择范围并聚合已验证 Chloride 型号 |
| PRODUCT-PROC-SU | `/products/sulfate-process-titanium-dioxide/` | `sulfate process titanium dioxide` | 同时承接 sulfate/sulphate 拼写并聚合已验证 Sulfate 型号 |

Process 页面不得主攻 `chloride vs sulfate titanium dioxide`；比较意图属于 Resources 候选页面。不得把 M-2377 加入任一 Process 页面，直到其工艺得到技术确认。

### 2.3 Grade 页面

14 个型号 URL、主关键词和页面职责已经锁定。统一采用“一个型号、一个 URL、一个主关键词、一个共享模板”的策略，不按市场、应用或工艺复制页面。

## 3. 14 个型号基线与冻结边界

| 型号 | Page ID | 展示分组 | 已批准工艺 | URL | Verification |
|---|---|---|---|---|---|
| M-350 | GRADE-M350 | Coatings | Chloride | `/products/m-350/` | `PROVISIONAL_KEYWORD_NO_METRICS` |
| M-510 | GRADE-M510 | Coatings | Chloride | `/products/m-510/` | `PROVISIONAL_KEYWORD_NO_METRICS` |
| M-896 | GRADE-M896 | Coatings | Chloride | `/products/m-896/` | `PROVISIONAL_KEYWORD_NO_METRICS` |
| M-996 | GRADE-M996 | Coatings | Sulfate | `/products/m-996/` | `TECHNICAL_VERIFICATION_REQUIRED` |
| M-2196 | GRADE-M2196 | Coatings | Sulfate | `/products/m-2196/` | `TECHNICAL_VERIFICATION_REQUIRED` |
| M-895 | GRADE-M895 | Coatings | Chloride | `/products/m-895/` | `PROVISIONAL_KEYWORD_NO_METRICS` |
| M-200 | GRADE-M200 | Plastics & Masterbatch | Chloride | `/products/m-200/` | `PROVISIONAL_KEYWORD_NO_METRICS` |
| M-108 | GRADE-M108 | Plastics & Masterbatch | Sulfate | `/products/m-108/` | `PROVISIONAL_KEYWORD_NO_METRICS` |
| M-210 | GRADE-M210 | Plastics & Masterbatch | Chloride | `/products/m-210/` | `PROVISIONAL_KEYWORD_NO_METRICS` |
| M-340 | GRADE-M340 | Plastics & Masterbatch | Chloride | `/products/m-340/` | `PROVISIONAL_KEYWORD_NO_METRICS` |
| M-886 | GRADE-M886 | Plastics & Masterbatch | Chloride | `/products/m-886/` | `PROVISIONAL_KEYWORD_NO_METRICS` |
| M-52 | GRADE-M52 | Inks & Multi-Application | Sulfate | `/products/m-52/` | `PROVISIONAL_KEYWORD_NO_METRICS` |
| M-2377 | GRADE-M2377 | Inks & Multi-Application（仅内部行政分组，不作为公共应用声明） | 不公开 | `/products/m-2377/` | `TECHNICAL_VERIFICATION_REQUIRED` |
| CR-901 | GRADE-CR901 | Specialty | Vapor-phase oxidation | `/products/cr-901/` | `PROVISIONAL_KEYWORD_NO_METRICS` |

强制冻结：

- M-2377 的工艺、应用、推荐、不推荐、相关型号差异、应用型 Title/H1/Meta/ALT 和 Process 归属均不得公开。
- M-2377 只能出现在 All 14 Grades 完整目录，不进入应用选型结果或 Chloride/Sulfate 聚合。
- PRODUCT-000 公共目录中的 M-2377 只能中性显示 `M-2377` 名称和批准 URL；不得显示“技术待验证”“受限”“pending verification”等内部工作流文案或徽章，也不得显示工艺、应用、推荐、差异、空标签或行政分组含义。
- M-2377 的验证状态只用于内部渲染门禁与 QA，不形成独立公共视觉状态。All Grades 仍维持 6/5/2/1 的紧凑目录数量；包含 M-2377 的公共分组标题必须使用不暗示应用或工艺的中性名称。
- M-996 与 M-2196 可以分别建设并被中性列出，但未经证据不得发布性能、表面处理、分散、耐候、成本或选型差异。
- CR-901 不得为了二分工艺导航而被塞入 Chloride 或 Sulfate。

## 4. 页面职责与关键词防内耗

| 意图 | 唯一 owner | Products 页面允许行为 | 禁止行为 |
|---|---|---|---|
| 泛 titanium dioxide pigment / rutile / grades | PRODUCT-000 | 解释产品集合和选型入口 | 另建 Rutile 页面或把泛词分散到型号页 |
| Chloride Process | PRODUCT-PROC-CL | 工艺定义、选择范围、已验证型号聚合 | 抢型号词或 versus 比较词 |
| Sulfate/Sulphate Process | PRODUCT-PROC-SU | 同一页承接两种拼写 | 拆成两个拼写页面 |
| 精确型号 | 对应 Grade Page | 型号事实、文件、样品和 RFQ 路径 | 按国家或应用复制型号页 |
| 泛应用 | Applications | Products 页面简要导流 | 建立重复应用 SEO 正文 |
| 国家 supplier | Markets | 轻量市场支持入口 | 在 Products 页面优化国家供应商词 |
| 文件信息 | Documents | 提示型号相关文件申请路径 | 宣称未验证文件可用性或复制文件说明页 |
| 工艺比较 | Resources | 提供候选链接（获批并上线后） | 在 Process/Hub 发布完整 versus 内容 |
| 报价行动 | CONV-RFQ | CTA 与上下文预填 | 在 Product Hub 内嵌 RFQ 表单 |

每个可索引页面只有一个 Primary Keyword。Hub、Process 和 Grade 页面之间不得通过 H1、Title、首屏或重复正文互相侵占关键词。

## 5. 统一作业流程

### Gate 0：准入

- 确认 Page ID、URL、Page Type、Priority、Mapping Status 和 Verification Status。
- 从主表复制 Primary、Secondary、Excluded 和 Cannibalization Boundary。
- Playbook 未批准时，只允许研究和任务卡草案。

### Gate 1：研究与证据

- 核对买家搜索意图、SERP 类型和采购问题。
- 产品应用、工艺、指标、推荐、文件、原产地和运营事实必须建立 Claim Register。
- 缺少证据只冻结相关字段或模块。

### Gate 2：内容架构

- 每个模块必须帮助买家完成身份确认、选型、证据核对或行动。
- Hub 必须提供应用、工艺、全部型号和 RFQ 路径。
- Process 页面必须提供工艺 owner 内容和经过验证的型号集合。
- Grade 页面必须遵循批准的统一模块顺序。

### Gate 3–5：线框、视觉方向和完整视觉稿

- 分别提交桌面端和手机端。
- 使用真实长度内容和冻结/空状态。
- 未经任务卡批准不得进入此阶段。

### Gate 6–10：总控、交付、外部开发、只读 QA 和发布

- 本项目只提供批准规格，不进行开发。
- 开发完成后只读检查，问题交回开发项目。
- 发布必须获得用户单独授权。

## 6. Product Hub 标准

### 6.1 固定模块顺序

| 顺序 | Module ID | 模块 | 目的 | 主要规则 |
|---:|---|---|---|---|
| 0 | GLOBAL_HEADER | Header | 全站导航与 RFQ | 使用批准八项导航，Products 为当前项 |
| 1 | BREADCRUMB | Breadcrumb | 建立页面层级 | `Home > Products` |
| 2 | HERO | Product Hub Hero | 说明泛产品选型任务 | 主 CTA Find the Right Grade；次 CTA RFQ |
| 3 | GRADE_SELECTOR | Two-step Grade Selector | 按应用查看经过验证的候选型号 | 不输出最佳、评分或保证适用 |
| 4 | PROCESS_ROUTES | Process Routes | 提供 Chloride 与 Sulfate 辅助入口 | 不作完整对比；M-2377/CR-901 不强行归入 |
| 5 | ALL_GRADES | All 14 Grades | 给已知型号买家稳定入口并保证可抓取性 | 四组 6/5/2/1；全部 14 个 URL；M-2377 仅中性名称/链接 |
| 6 | EVALUATION_GUIDE | How to Evaluate a Grade | 解释采购核对步骤 | 不比较具体指标，不替代 TDS |
| 7 | SUPPORT_PATHS | Procurement Support Paths | 连接 Applications、Documents、Markets | 只作轻量导流 |
| 8 | BUYER_QUESTIONS | Buyer Questions | 形成可引用答案块 | 无证据不作答，不强行 FAQ Schema |
| 9 | FINAL_RFQ | Final RFQ | 收口采购需求 | 跳转独立 RFQ，不内嵌表单 |
| 10 | GLOBAL_FOOTER | Footer | 导航与实体收口 | 联系信息只使用已验证值 |

### 6.2 两步选型器

第一步应用选项：

- Coatings
- Plastics
- Masterbatch
- Printing Inks
- Paper
- Specialty Materials
- Not Sure

第二步显示 `Grades to Review`。每条结果最多包含：

- 型号 ID
- 已验证的应用方向
- 已验证的工艺标签
- 一句中性评估说明
- `View Grade`

选型结果不等于最佳型号、技术推荐、配方保证或供应承诺。

### 6.3 空状态与降级

| 状态 | 对外表现 |
|---|---|
| 未选择 | 显示操作提示，不默认推荐 |
| 有已验证结果 | 显示精简结果和型号链接 |
| 无已验证结果 | 说明当前没有可公开的已验证推荐，导向 Application 或 RFQ |
| 部分字段未获公开许可 | 只显示允许公开的已验证字段；不显示内部状态、空标签或占位 |
| 交互不可用 | All 14 Grades、Process 与 Application 直接链接保持可用 |
| 目标页未批准/未上线 | 对应链接不渲染，不硬编码暂定 URL |

### 6.4 选型映射规则

- 选型器从经过批准的应用—型号关系集合读取结果。
- 页面分组、PRD 角色或旧站描述不是自动公开推荐许可。
- Paper 没有已验证型号关系时必须进入诚实空状态。
- Specialty Materials 可以显示 CR-901，但不得因此创建新的 Application 页面。
- M-2377 永远不从当前公开选型关系集合返回。
- M-996 与 M-2196 可同时返回，但不显示差异或排序。

## 7. Process 页面标准

Process 页面至少包含：

1. Header 与 breadcrumb。
2. 工艺定义和适用的采购判断范围。
3. 选择时应核对的技术与应用因素。
4. 已验证工艺型号集合。
5. 指向 Applications、相关 Grade Pages、Documents 和 RFQ 的路径。
6. 证据边界与 Buyer Questions。
7. Footer。

Process 页面不得：

- 宣称某工艺普遍优于另一工艺。
- 抢占 `chloride vs sulfate titanium dioxide`。
- 从分类名称推断具体性能。
- 加入未经验证工艺的 M-2377。
- 将 CR-901 错当作 Chloride/Sulfate 常规聚合型号。

## 8. Grade 页面标准

Grade 页面沿用 `docs/product-pages/01_Product_Page_Template_and_Content_Spec_V1.0.md` 的固定模块顺序：

```text
Header
→ Breadcrumb
→ Product Hero
→ Product Positioning
→ Main Applications
→ Recommended / Not Recommended
→ Technical Specifications
→ Document Request
→ Malaysia-Origin Support
→ Market Support
→ Related Grades
→ Request a Sample
→ Footer
```

条件模块在证据不足时整体消失，不留下空标题、空白区、隐藏内容、结构化数据或公开 API 值。RFQ 是独立页面，不嵌入 Grade 页面尾部。

## 9. SEO 合同

### 9.1 Product Hub

| 字段 | 规则 |
|---|---|
| Primary Keyword | `titanium dioxide pigment` |
| Secondary | 主表中的 pigment、rutile、grades、grade selection 同意图词组 |
| Title 方向 | `Titanium Dioxide Pigment Grades | TiO2 Malaysia` |
| H1 方向 | `Titanium Dioxide Pigment Grades for Industrial Applications` |
| Canonical | `https://tio2malaysia.com/products/` |
| Robots | `INDEX, FOLLOW`；发布前复核 |
| Hreflang | 当前 `NOT_APPLICABLE` |
| Selector State | 不生成独立索引页，不改变 canonical |

### 9.2 Process 页面

- Title、H1 和首屏围绕各自唯一工艺主关键词。
- Sulfate 页面自然覆盖 `sulphate`，不复制页面。
- 不使用 exact grade 或 generic application 作为主要标题。

### 9.3 Grade 页面

- Title 以 `{Grade} titanium dioxide` 开始。
- H1 以 Grade 开始，只加入已验证类型或应用。
- M-2377 使用不含应用和工艺的回退 Title/H1。
- Canonical 使用批准的扁平 URL。

### 9.4 可抓取性

- Hub 的全部 14 个型号使用普通可跟随链接。
- 选型交互不是发现型号页的唯一方式。
- Sitemap 只包含批准 canonical。
- 暂定筛选参数、活动参数和交互状态不进入 sitemap。

## 10. GEO 与 Schema 合同

### 10.1 GEO

GEO 建立以下真实关系：

- TiO2 Malaysia → titanium dioxide pigment product collection。
- Product Hub → 14 个 Grade 页面。
- Product Hub → 2 个 Process 页面。
- 产品与 Applications 的关系必须经过验证。
- 产品与 Documents、Markets 和 Conversion 的关系必须与可见链接一致。

Hub 应提供简明答案：

1. 如何选择 titanium dioxide pigment grade？
2. 产品中心包含哪些型号？
3. 应用路径和工艺路径有什么不同？
4. 没有已验证推荐时如何继续？

答案必须可见、完整、有上下文，并标明证据边界。GEO 不得生成性能、制造、原产地、法规、文件或供应承诺。

### 10.2 Schema

Hub 建议：

- `CollectionPage`
- `ItemList`
- `BreadcrumbList`

不在 Hub 为 14 个列表项生成用于 Product rich result 的 14 组 Product 标记。Grade 页面才描述单一产品。Buyer Questions 默认不使用 `FAQPage` 或 `QAPage`，除非发布时的官方要求、页面形态和资格明确支持。

所有结构化数据必须来自同一份可见、已验证内容。

### 10.3 官方核对基线

以下资料于 2026-08-29 核对；它们只支持搜索呈现和结构化数据边界，不证明本公司的产品或业务事实：

- Google Search Central, Product snippet structured data：`https://developers.google.com/search/docs/appearance/structured-data/product-snippet`
- Google Search Central, Help Google understand your ecommerce site structure：`https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure`
- Google Search Central, Changes to HowTo and FAQ rich results：`https://developers.google.com/search/blog/2023/08/howto-faq-changes`
- Schema.org, CollectionPage：`https://schema.org/CollectionPage`
- Schema.org, ItemList：`https://schema.org/ItemList`

发布前必须重新核对当前官方要求；核对结果如改变 Schema、索引或页面职责，须进入变更控制。

## 11. 事实与证据合同

### 11.1 状态

| 状态 | 公共行为 |
|---|---|
| `verified` | 可以进入可见页面和一致的机器可读字段 |
| `pending_verification` | 不渲染，不暴露在公开 HTML、JSON、API 或 Schema |
| `not_public` | 不公开，不因已存在内部资料而渲染 |

Claim Register 的渲染决定使用：`RENDER`、`RENDER_WITH_QUALIFIER`、`CONTROLLED_REQUEST_ONLY`、`DO_NOT_RENDER`。

### 11.2 来源层级

1. 当前批准的 TDS/SDS/COA/COO 或公司一方证据。
2. 已批准技术、合规或运营决定。
3. 法规内容使用当前官方来源。
4. PRD 和页面主表只证明架构、URL、角色和关键词归属。
5. mytio2.com 仅作事实候选，不能复制正文或独立形成 verified 事实。

### 11.3 全体系禁止主张

- 完全等同、保证替代、最佳、最优、最低成本。
- 未验证库存、产能、MOQ、交期、包装、Incoterm、港口或运输。
- 未验证 Malaysia manufacturing、COO、traceability、REACH 或文件可用性。
- 规避、绕过或改变贸易措施适用性的暗示。
- 用图片证明未经核实的工厂、产品、仓库或装运事实。

## 12. CTA 与转化合同

| 位置 | CTA | 规则 |
|---|---|---|
| Header | Request a Quote | 全站固定主行动 |
| Hub Hero | Find the Right Grade | 滚动到选型器 |
| Hub Hero | Request a Quote | 次行动，进入独立 RFQ |
| Selector Result | View Grade | 不直接承诺推荐或报价 |
| Process | Explore Grades / View Grade | 只链接已验证关系 |
| Grade Hero | Request a Quote | 预填 grade 和 source |
| Grade Detail | Request Documents / Sample | 只有接收流程可用时渲染 |
| Hub Final | Request a Quote | 可传递明确选择的上下文 |

Hub 不设置 Sample 主入口。RFQ 预填必须区分：

- `source_page=PRODUCT-000`
- 用户主动选择的 application
- 用户主动确认的 grade

候选结果不得自动写成 selected grade。成功状态不暗示报价、样品或文件已批准。

## 13. 内链合同

### 13.1 Hub 入站

- Home Products 模块。
- Header 与 Footer。
- 14 个 Grade 页的 breadcrumb/back-to-products。
- 2 个 Process 页面。
- Applications、Documents、Markets 中与产品选择有关的上下文入口。

### 13.2 Hub 出站

- 14 个批准 Grade URL。
- 2 个批准 Process URL。
- Applications Hub 与获批准/上线的 Application 目标。
- Documents、Markets 和独立 RFQ 页面。

### 13.3 路由状态

- 使用 Page ID 或 route key 表达暂定下游目标。
- 目标未批准或未上线时不渲染链接。
- 不把 `PROVISIONAL_URL` 写成永久依赖。
- 不链接仍为 `NEW_PAGE_CANDIDATE` 的 Resources 页面。

## 14. 视觉与响应式合同

### 14.1 视觉方向

- 继承批准首页 Industrial Editorial 基底。
- 选型器、Process 和目录局部采用 Technical Editorial 的细线、编号和注释。
- 不采用 SaaS 仪表盘、KPI、筛选后台或电商价格卡气质。
- 白色为主，Navy 建立层级。
- `#007F77` 用于浅底小文字和实心 CTA；`#00A99D` 只作非文字强调。
- 图片不承担未经证实的企业或产品事实证明。

### 14.2 Desktop

- Hero 可使用双栏，但 H1、定位和 CTA 是第一视觉焦点。
- Selector 是全页最强功能模块。
- Process 使用两个编辑式入口。
- All 14 Grades 按四组紧凑呈现，不使用 14 张大型卡片。
- 信息密度中等偏高，不用装饰空白拉长页面。

### 14.3 Mobile

- Hero 单列，CTA 可全宽。
- 应用选项单列或两列，不依赖横向滑动。
- 结果紧随选项出现，当前状态清晰。
- 四组可采用可访问展开结构，但全部链接仍可抓取。
- 390px 无横向溢出，按钮后无无目的大空白。

### 14.4 必须交付状态

- 未选择。
- 已选择且有结果。
- 已选择但无已验证结果。
- M-2377 中性目录条目，以及内部门禁正确省略其他字段的 QA 证据；公共 UI 不显示独立受限状态。
- 组展开/收起。
- Hover、focus、selected。
- 无图片。
- Mobile menu open。

## 15. 可访问性合同

- 一个 H1，连续标题层级。
- 所有选型、展开和链接支持键盘。
- 状态不只靠颜色表达。
- 焦点清晰，触控目标足够。
- 200% 缩放可用。
- 尊重 reduced motion。
- 装饰图使用空 ALT；真实图片 ALT 描述实际内容。
- 无脚本或非关键交互失败时，核心目录和链接仍可使用。

## 16. 开发交付规格边界

本节只规定结果，不规定实现技术。

共同交付字段至少包括：

- 页面身份与 `site_scope=tio2-my`。
- SEO、Canonical、Robots、Open Graph。
- Hero 与 CTA。
- 应用—型号、工艺—型号和相关型号关系及状态。
- 页面模块内容和条件渲染。
- 空状态和冻结状态。
- 内链 route key。
- Schema 输入字段。
- 图片、ALT、授权与空值行为。
- RFQ、Sample 和 Documents 预填合同。

强制隔离：

- 只读取 `site_scope=tio2-my` 数据。
- 不从 TIOVAR、mytio2 或其他 scope 回退内容。
- 受限字段为空或未验证时不渲染。
- 内部验证状态不得作为公共徽章、标签或工作流文案输出。
- 共享组件影响由开发项目自行评估和实现。

## 17. 只读 QA

### 17.1 内容与证据

- 页面身份、型号、URL、分组和工艺映射正确。
- 没有复制 mytio2.com 正文。
- 冻结字段没有泄漏。
- 没有无证据推荐、比较或供应承诺。

### 17.2 SEO 与 GEO

- 每页 Primary Keyword 唯一。
- Hub、Process、Grade、Application、Market、Document 职责清楚。
- Hub 直接链接全部 14 个 Grade 页面。
- Schema 与可见内容一致。
- Buyer Questions 可引用但不越界。

### 17.3 视觉、响应式与无障碍

- Desktop、Tablet、Mobile 均通过。
- 状态完整，无横向溢出或空模块。
- 键盘、焦点、对比度、触控和缩放通过。
- 图片不制造事实误导。

### 17.4 转化

- CTA 目的清楚。
- 预填值只来自用户明确选择。
- 成功/失败状态不作未批准承诺。
- Hub 不内嵌 RFQ 表单。

### 17.5 隔离

- 无跨 `site_scope` 内容、媒体、菜单、SEO、缓存或表单上下文泄漏。
- 发现问题只提交给 `D:\16Wordpress_nextjs` 开发项目，本项目不直接修复代码。

## 18. 变更控制

以下变化必须先提交影响分析并获批准：

- 新增、删除、合并 Products 页面。
- 改变 17 页 URL、主关键词或页面职责。
- 改变 14 型号分组、工艺、应用或事实字段。
- 改变 M-2377、M-996/M-2196 冻结决定。
- 把筛选状态变成可索引页面。
- 改变 `site_scope`、共享数据或跨站回退边界。
- 新增价格、库存、Offer、rating、review 或产品等效声明。

## 19. Review 记录

### 19.1 当前草案决定来源

| Decision ID | 决定 | 状态 |
|---|---|---|
| D-001 | Product Hub 采用应用优先、工艺辅助 | 已纳入 2026-08-29 用户整体批准 |
| D-002 | 使用两步引导式选型 | 已纳入 2026-08-29 用户整体批准 |
| D-003 | Hero 主 CTA 为 Find the Right Grade | 已纳入 2026-08-29 用户整体批准 |
| D-004 | 结果采用精简决策摘要 | 已纳入 2026-08-29 用户整体批准 |
| D-005 | 整体采用引导式采购路径方案 | 已纳入 2026-08-29 用户整体批准 |
| D-006 | 页面职责与模块顺序 | 已纳入 2026-08-29 用户整体批准 |
| D-007 | SEO、GEO 与 Schema | 已纳入 2026-08-29 用户整体批准 |
| D-008 | 数据流、证据门禁与异常状态 | 已纳入 2026-08-29 用户整体批准 |
| D-009 | 视觉、响应式与无障碍合同 | 已纳入 2026-08-29 用户整体批准 |
| D-010 | CTA、内链、开发交付与 QA 边界 | 已纳入 2026-08-29 用户整体批准 |

### 19.2 问题记录

| Review ID | 级别 | 问题 | 当前处理 | 状态 |
|---|---|---|---|---|
| PR-001 | BLOCKING | Playbook 草案尚未完成总控与用户整体审查；Gate 0 当前为有条件退回修订 | 总控复审 PASS，用户 2026-08-29 整体批准 | CLOSED |
| PR-002 | IMPORTANT | 各应用公开型号映射仍需逐项技术证据 | 关系集合未 verified 时不渲染 | OPEN |
| PR-003 | IMPORTANT | 下游 Applications/Documents/Conversion 路由含暂定或规划状态 | 使用 Page ID/route key，未上线不渲染 | OPEN |
| PR-004 | IMPORTANT | M-2377、M-996/M-2196 技术事实受限 | M-2377 公共目录仅名称/链接；其余字段门禁；M-996/M-2196 差异不渲染 | OPEN |
| PR-005 | IMPORTANT | Gate 0 指出 PRODUCT-000 证据 ID 缺少唯一映射 | Brief 新增 Evidence Register 并映射 Claim ID；总控复验通过 | CLOSED |
| PR-006 | IMPORTANT | Gate 0 指出 M-2377 公共行为存在歧义 | 锁定中性名称/链接，内部状态不公开；总控复验通过 | CLOSED |
| PR-007 | IMPORTANT | Gate 0 指出 Footer 不得保留未登记 Legal/Privacy 入口 | PRODUCT-000 标记 NOT_IN_SCOPE，未登记/批准前不渲染；总控复验通过 | CLOSED |

## 20. 变更记录

| 版本 | 日期 | 变更类型 | 内容 | 批准状态 |
|---|---|---|---|---|
| V0.1 | 2026-08-29 | Gate 0 批准基线 | 建立 Products 体系规范；完成三项条件退回修订；总控复审 PASS；用户整体批准进入 Gate 1/2 | 用户批准；`APPROVED_FOR_DESIGN` |
