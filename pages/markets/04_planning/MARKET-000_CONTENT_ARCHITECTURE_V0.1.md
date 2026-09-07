# MARKET-000 Content Architecture V0.1

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| Page ID | `MARKET-000` |
| Page | Markets |
| URL | `/markets/` |
| Gate | Gate 2 — Content Architecture |
| 版本 | V0.1 |
| 日期 | 2026-08-29 |
| 状态 | `APPROVED_GATE_2_BASELINE` |
| 页面生命周期 | `DESIGN_IN_REVIEW` |
| 授权来源 | 2026-08-29 用户最终批准 MARKET-000 Gate 2，仅授权本页进入 Gate 3 Wireframe |
| 当前 route baseline | 22 个受审外部单元均为 `NOT_VERIFIED_LIVE` |
| 当前 localization baseline | `MARKET-BR-PT`=`LOCALIZATION_HOLD / DO_NOT_RENDER` |
| 审核人 | 项目总控与质量审查 |
| 最终批准人 | 用户 |
| 用户批准记录 | 2026-08-29：用户批准本 Content Architecture 为 MARKET-000 Gate 2 baseline；G2-01/G2-02 关闭；仅授权 Gate 3 线框 |
| 排除范围 | Gate 4/5 视觉方向与完整视觉稿、Market 子页、开发、测试、部署、发布及 `D:\16Wordpress_nextjs` |

本文是 MARKET-000 获用户批准的 Gate 2 Content Architecture baseline，定义最终模块叙事、英文 Buyer Clean 文案、SEO/GEO answer blocks、CTA/内链和确定性状态。Gate 3 Wireframe 与 Gate 4 Visual Direction 已于 2026-08-30 获用户批准，现只授权 Gate 5 完整视觉稿草案；不批准 Gate 6/7、链接上线或任何受限事实。

## 1. 批准基线与硬边界

| Baseline | 路径 | 本文使用方式 |
|---|---|---|
| Markets Playbook | `docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md` | 模块、SEO/GEO、证据、route、视觉和非开发边界 |
| MARKET-000 Brief | `docs/page-briefs/MARKET-000_MARKETS_BRIEF_V0.1.md` | 页面合同、Question/Claim/CTA/内链 ID |
| Evidence baseline | `pages/markets/01_research/MARKET-000_GATE1_EVIDENCE_AUDIT_V0.1.md` | 只写已验证架构、页面职责和 owner 边界 |
| Route baseline | `pages/markets/02_analysis/MARKET-000_ROUTE_AUDIT_V0.1.md` | 所有外部行动逐项条件渲染 |
| Localization baseline | `pages/markets/02_analysis/MARKET-000_BRAZIL_PTBR_LOCALIZATION_AUDIT_V0.1.md` | PT-BR 关系完整省略 |

继续生效的 Open Items：

- `MKT-R002`：不写具体市场、产品、应用、文件、供应或物流事实。
- `MKT-R003`：不显示 Brazil PT-BR 入口、URL、hreflang、Schema 或语言切换。
- `MKT-R004`：22 个外部 route 未验证 live，公开行动逐项省略。
- `MKT-R005`：不写贸易政策结论、税率、措施状态、适用原产地或规避建议。

## 2. 页面叙事

### 2.1 一句话叙事

帮助采购商先选择目的市场所需的页面层级，再理解产品、应用、文件、时效性贸易信息和报价分别由哪个页面体系承接。

### 2.2 叙事顺序

1. **Identify the task**：这是按目的市场选择采购信息路径的 Hub，不是 supplier 落地页。
2. **Choose the market level**：先选 EU、UK、India 或 Brazil；EU 再区分区域总览与六个国家目的地。
3. **Understand the choice**：解释何时选 EU 总页、国家页或 standalone market path。
4. **Continue the procurement check**：把产品、应用和文件问题送回正确 owner。
5. **Separate time-sensitive information**：贸易更新由 Resources 承接，Hub 不保存政策结论。
6. **Answer navigation questions**：用可引用答案解决常见选择问题。
7. **Take a qualified action**：只有 RFQ workflow 和 route 均可用时，显示独立询价行动。

### 2.3 页面成功定义

- 买家能说明应从哪个市场体系或 EU 层级开始。
- 买家理解 Market page 与 Products、Applications、Documents、Resources、RFQ 的职责差异。
- 页面没有发布任何未经验证的供应、制造、文件、库存、交期、物流或贸易事实。
- route 不可用时页面仍给出完整选择逻辑，不出现死链或空行动单元。

## 3. 模块总表

| 顺序 | Module ID | H2 / 可见角色 | 买家判断 | 当前 route-safe 状态 |
|---:|---|---|---|---|
| 0 | GLOBAL_HEADER | 固定全站导航 | 访问其他一级栏目 | Header 结构保留；外部 href 发布前验证；RFQ 项受 workflow/route gate |
| 1 | BREADCRUMB | Home > Markets | 确认页面层级 | 关系保留；href 发布前验证 |
| 2 | HERO | Choose Your Destination Market | 知道本页任务并进入选择区 | 完整渲染；仅本地锚点 CTA |
| 3 | DESTINATION_SELECTOR | Start with the market tied to your procurement requirements | 选择四市场体系与 EU 六国层级 | 名称/说明渲染；22 个外部行动不渲染；PT-BR 完全省略 |
| 4 | MARKET_CHOICE_GUIDE | Choose the level of market context you need | 判断 EU 总页、国家页或 standalone path | 完整渲染，无外部依赖 |
| 5 | PROCUREMENT_PATHS | Continue with the next procurement check | 选择 Products、Applications 或 Documents owner | 说明可渲染；CTA 逐 route gate |
| 6 | TRADE_BOUNDARY | Keep time-sensitive trade information separate | 知道贸易信息归属与 freshness 边界 | 边界文案渲染；政策摘要/链接不渲染 |
| 7 | BUYER_QUESTIONS | Questions buyers ask before choosing a market page | 获得简明可引用答案 | route-safe answers 渲染；默认无 FAQ/QAPage |
| 8 | FINAL_RFQ | Ready to discuss a destination market? | 进入独立询价 | 当前整个模块不渲染 |
| 9 | GLOBAL_FOOTER | 全站已登记入口 | 继续导航 | 只使用登记入口和已验证主体信息 |

## 4. Buyer Clean 英文文案

以下是 Gate 2 最终候选文案。内部状态、Evidence ID、route flag 和审核语言不得进入 Buyer Clean。

### 4.1 GLOBAL_HEADER

固定可见顺序：

`Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`

- `Home` 必须是可见文字链接，不能只由 Logo 代替。
- `Markets` 为当前项。
- `Request a Quote` 仅在 `RFQ_AVAILABLE=true` 时成为可见行动；不可用时不得留下空导航位或替代性承诺。

### 4.2 BREADCRUMB

`Home / Markets`

### 4.3 HERO

**Eyebrow**

```text
Destination market navigation
```

**H1**

```text
Choose Your Destination Market
```

**Intro — unconditional route-safe copy**

```text
Start with the region or country where your procurement requirements need to be reviewed. This hub explains which market path to choose and where product, application, document, trade-update, and quotation questions belong.
```

**Primary CTA — local anchor**

```text
Choose a Market
```

Target: `#destination-selector`

**Secondary CTA — only when RFQ_AVAILABLE=true**

```text
Request a Quote
```

Hero 不使用 supplier、manufacturer、stock、delivery、compliance-ready 或 market coverage 声明。

### 4.4 DESTINATION_SELECTOR

**Eyebrow**

```text
Destination market
```

**H2**

```text
Start with the market tied to your procurement requirements
```

**Intro**

```text
Use the European Union overview for shared regional context, choose an EU country destination when local context matters, or start directly with the United Kingdom, India, or Brazil.
```

#### European Union

**Label**

```text
European Union
```

**Description**

```text
Start with the European Union overview when you need the shared regional procurement context. Choose a country destination when the next step depends on local market context.
```

**Conditional CTA**

```text
Explore the European Union
```

**Country group label**

```text
EU country destinations
```

Country labels, in approved order:

```text
Germany
Italy
Spain
Poland
Netherlands
Belgium
```

Mobile disclosure copy:

```text
View EU country destinations
Hide EU country destinations
```

#### United Kingdom

**Description**

```text
Use the United Kingdom path when your next procurement questions need a UK-specific context.
```

**Conditional CTA**

```text
Explore the United Kingdom
```

#### India

**Description**

```text
Use the India path when your next procurement questions need an India-specific context.
```

**Conditional CTA**

```text
Explore India
```

#### Brazil

**Description**

```text
Use the Brazil path when your next procurement questions need an English-language Brazil context.
```

**Conditional CTA**

```text
Explore Brazil
```

当前不提供 PT-BR Buyer Clean copy、标签或语言入口。

### 4.5 MARKET_CHOICE_GUIDE

**Eyebrow**

```text
How to choose
```

**H2**

```text
Choose the level of market context you need
```

**Intro**

```text
The right starting point depends on whether your question is regional, destination-specific, or outside the European Union.
```

**Choice 1**

```text
Start with the EU overview
Use the European Union path for shared regional procurement context and to understand how the EU country destinations relate to the wider market structure.
```

**Choice 2**

```text
Choose an EU country destination
Use a country path when your next question depends on the destination market. Country pages provide local procurement context; they do not replace the EU overview.
```

**Choice 3**

```text
Use a standalone market path
Choose the United Kingdom, India, or Brazil when that destination is the primary context for the next procurement check.
```

**Direct answer block**

```text
Choose the European Union overview for shared regional context. Choose a country destination for local procurement context. Use the United Kingdom, India, or Brazil paths when those markets are the destination.
```

### 4.6 PROCUREMENT_PATHS

**Eyebrow**

```text
Next procurement check
```

**H2**

```text
Continue with the next procurement check
```

**Intro**

```text
Choosing a destination is one part of the review. Continue with the section that addresses your next question.
```

#### Product path

```text
Review pigment grades
Use Products when you need to review grade pages or begin from product requirements. Product suitability still depends on technical evaluation.
```

Conditional CTA: `Explore Products`

#### Application path

```text
Start from the application
Use Applications when the first known input is coatings, plastics, masterbatch, printing inks, or paper. Product relationships appear only where technical evidence permits.
```

Conditional CTA: `Explore Applications`

#### Document path

```text
Plan document review
Use Documents to understand document categories and controlled request paths. A page or request does not promise that a document is available for every product or market.
```

Conditional CTA: `Review Documents`

当前三个 CTA 均不公开；说明文本可以独立成立。若所有 CTA 不可用，模块表现为三项清晰的职责指南，不显示空按钮区域。

### 4.7 TRADE_BOUNDARY

**Eyebrow**

```text
Current information
```

**H2**

```text
Keep time-sensitive trade information separate
```

**Body — unconditional qualified copy**

```text
Market pages organize procurement context. Detailed trade-policy information belongs in Resources, where official sources, scope, and update dates can be reviewed. This hub does not state current duties, measures, or customs outcomes.
```

**Conditional CTA — only when a matching Trade Update is content-approved, current, and live**

```text
View Current Trade Updates
```

### 4.8 BUYER_QUESTIONS

**Eyebrow**

```text
Buyer questions
```

**H2**

```text
Questions buyers ask before choosing a market page
```

#### Q1. How is the market navigation organized?

```text
The market navigation is organized around the European Union, United Kingdom, India, and Brazil. Within the EU structure, Germany, Italy, Spain, Poland, the Netherlands, and Belgium are separate country destinations.
```

#### Q2. Should I start with the European Union overview or a country destination?

```text
Start with the European Union overview for shared regional context. Choose a country destination when the next procurement question depends on local market context.
```

#### Q3. What does a market page help me review?

```text
A market page organizes destination-specific procurement context and directs you to the relevant Products, Applications, Documents, Resources, or quotation path. It does not replace technical evaluation or document confirmation.
```

#### Q4. Where should I check current trade-policy information?

```text
Detailed, time-sensitive trade information belongs in Resources and must be checked against current official sources. This hub does not state policy outcomes.
```

#### Q5. Where should I start if I do not know the grade?

```text
Product selection is handled by Products and Applications. Start with Products when you have a grade or technical requirement, or with Applications when the end use is the first known input.
```

#### Q6. Where are technical and origin documents handled?

```text
Document explanations and controlled request paths belong in Documents. Availability, version, and market applicability must be confirmed through the relevant document process.
```

#### Q7. How is quotation handled?

**Route-safe answer**

```text
Quotation requests are handled separately. This hub does not contain a quotation form or treat a request as an approved price, stock position, document, or delivery commitment.
```

**Additional sentence only when RFQ_AVAILABLE=true**

```text
After you explicitly choose a market, that selection can be carried into the separate quotation request and remains visible for review.
```

Buyer Questions 默认使用普通内容结构，不输出 FAQPage 或 QAPage Schema。

### 4.9 FINAL_RFQ

整个模块仅在 `RFQ_AVAILABLE=true` 时渲染。

**Eyebrow**

```text
Request review
```

**H2**

```text
Ready to discuss a destination market?
```

**Body**

```text
Share the destination market, intended application, grade or specification if known, quantity context, and document needs. Submission starts a review; it does not confirm price, stock, documents, delivery, or acceptance.
```

**CTA**

```text
Request a Quote
```

Prefill：`source_page=MARKET-000`；只有买家明确选择后才传 `market`，接收页必须可见且可修改。

### 4.10 GLOBAL_FOOTER

- 只使用 54 页登记册中的批准入口。
- 只显示已验证的主体和联系信息。
- 不自行增加 Legal、Privacy、当地办公室、仓库、认证或物流入口。
- RFQ 入口仍受 `RFQ_AVAILABLE` 控制。

## 5. SEO 内容合同

| 字段 | Gate 2 候选 | 状态/条件 |
|---|---|---|
| Primary Keyword | `NO_PRIMARY_KEYWORD` | 不改变 |
| Search Intent | Navigation | 不改变 |
| Title | `Markets for Titanium Dioxide Procurement \| TiO2 Malaysia` | Unconditional；不使用子页 supplier 词 |
| H1 | `Choose Your Destination Market` | Unconditional |
| Route-safe Meta | `Navigate titanium dioxide procurement information for the European Union, United Kingdom, India, and Brazil, with clear guidance on the next review step.` | 当前默认候选 |
| Full-route Meta | `Choose a destination market for titanium dioxide procurement in the European Union, United Kingdom, India, or Brazil, then continue to the relevant market page.` | 仅四个第一层 Market 行动均 live 时 |
| Canonical | `https://tio2malaysia.com/markets/` | 发布前验证唯一响应 |
| Robots | `index,follow` | 发布前复核 |
| Hreflang | `NOT_APPLICABLE` | Hub 始终不设置 alternate；Brazil child pages 的 en/pt-BR hreflang 由其独立任务批准和处理 |
| Sitemap | 唯一 Canonical | 不包含交互参数或 provisional URL |
| Open Graph | 与当前可见 Hero 一致 | 图片需授权且不得暗示覆盖/物流能力 |

### 5.1 SEO 防内耗检查

- Title、H1、Meta 不使用 `supplier Europe/UK/India/Brazil` 主攻结构。
- 不使用 Germany/Italy/Spain/Poland/Netherlands/Belgium supplier 词。
- 不使用泛产品、工艺、型号或 application 主关键词。
- 不使用 Trade Update 的 anti-dumping/duty 主查询作为 Hub acquisition copy。
- `NO_PRIMARY_KEYWORD` 不等于 noindex；可索引理由是稳定导航与实体关系。

## 6. GEO Answer Blocks

### 6.1 实体关系

```text
TiO2 Malaysia
  → has navigation hub → Markets (MARKET-000)
  → organizes destination context → European Union, United Kingdom, India, Brazil
European Union
  → relates to country destinations → Germany, Italy, Spain, Poland, Netherlands, Belgium
Markets
  → directs procurement questions to relevant sections → Products, Applications, Documents, Resources, Request a Quote
```

以上关系是页面架构，不是供应覆盖、当地存在或服务能力声明。

### 6.2 可引用答案矩阵

| Answer ID | 问题 | 简明答案 | Source IDs | 时间敏感性 |
|---|---|---|---|---|
| GEO-A01 | What is the Markets page? | The Markets page is a navigation hub that organizes destination-market paths and explains which section addresses the next procurement question. | IA-002, GEO-001 | Stable architecture |
| GEO-A02 | Which market systems are represented? | The navigation is organized around the European Union, United Kingdom, India, and Brazil. | IA-003, CL-002 | Stable architecture |
| GEO-A03 | How do EU and country destinations differ? | The EU overview provides shared regional context; country destinations provide local procurement context. | CONTENT-001, CL-011 | Stable page-role boundary |
| GEO-A04 | Which EU country destinations are listed? | Germany, Italy, Spain, Poland, the Netherlands, and Belgium. | IA-003, ROUTE-001 | Stable labels; links route-gated |
| GEO-A05 | Where do product-selection questions belong? | Product and application questions belong in Products or Applications, subject to technical evidence. | ROUTE-002, CL-006 | Route-gated |
| GEO-A06 | Where do document questions belong? | Document explanations and controlled requests belong in Documents; availability and applicability require confirmation. | ROUTE-002, CL-006 | Route/workflow-gated |
| GEO-A07 | Where do current trade questions belong? | Time-sensitive trade information belongs in Resources and must use current official sources, scope, and update dates. | FRESH-001, CL-007 | Time-sensitive; link fresh/live gated |
| GEO-A08 | Does the Hub publish current duties or customs outcomes? | No. The Hub explains where time-sensitive information is handled and does not state current duties, measures, or customs outcomes. | FRESH-001, CL-007 | Stable boundary |
| GEO-A09 | How can a market selection be used in a quotation request? | After a buyer explicitly chooses a market, that selection can be carried into a separate quotation request and remains visible for review. | CONV-001, CL-008 | Render only when `RFQ_AVAILABLE=true`; absent in `S0_CURRENT_ROUTE_SAFE` |

### 6.3 Schema 合同

| Schema | 当前行为 | Future condition |
|---|---|---|
| `CollectionPage` | 可输出页面身份和可见内容关系 | 必须与 Buyer Clean 一致 |
| `BreadcrumbList` | Home → Markets | 两个 URL 发布前验证 |
| `ItemList` | 当前 strict route-safe 状态省略，避免把不可操作目标写成 live destination list | 只列可见且批准的 destination actions；URL 仅在对应 route live 时输出 |
| `FAQPage` / `QAPage` | 不输出 | 只有可见内容、资格与官方要求均重新审核后才考虑 |
| `LocalBusiness` | 禁止 | 不得暗示当地办公室、仓库或实体存在 |

当前 PT-BR 关系维持 `LOCALIZATION_HOLD / DO_NOT_RENDER`，不进入 Hub 的可见内容、`inLanguage`、ItemList、sitemap 或 menu。即使未来 Brazil EN→PT-BR 可见关系获独立批准，MARKET-000 自身的 hreflang 仍始终为 `NOT_APPLICABLE`；`MARKET-BR-EN` 与 `MARKET-BR-PT` 之间的 en/pt-BR hreflang 只由两张 Brazil child page 的独立任务处理。

### 6.4 PRODUCT 关系 V0.3 影响边界

- `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` 是当前唯一 Product/Application/Process 关系源，但 MARKET-000 只表达 Markets → Products / Applications 的页面级导航关系，不渲染任何行级型号、Application 或 Process 关系。
- Buyer Clean、GEO entity graph 与 Schema 均不输出 Market → Grade、Market → Application priority、Market → Process、Grade → Application、Grade → Process 或 Grade ↔ Grade Comparison。
- `CollectionPage`、`BreadcrumbList` 和 destination `ItemList` 不加入产品、型号、应用或工艺项目。
- M-2377 的 Coatings、Plastics、Masterbatch、Printing Inks、Paper 与 Sulfate 已在 V0.3 获批，但本 Hub 因页面职责而不渲染这些行级关系，不得再称为“全局隐藏”或冲突。M-2377 Specialty Materials 与其余 54 条 `NO_PUBLIC_MAPPING` 不产生公开关系；`NO_PUBLIC_MAPPING` 不等于不适用。Rubber 只登记证据，不创建 taxonomy、页面或导航。
- M-996/M-2196 的 Coatings/Sulfate 基础关系不在本 Hub 渲染；两者差异、排序、选择理由和比较定位继续禁止。
- V0.3 无市场维度，不能推断任何国家的产品适用性、注册、库存或供应可用性。
- 本影响审计不修改 Gate 2 Buyer Clean 文案或 Gate 3 测量基线。

## 7. CTA 合同

| CTA ID | Label | Target | 参数 | Render 条件 | 当前状态 |
|---|---|---|---|---|---|
| CTA-HERO-LOCAL | Choose a Market | `#destination-selector` | None | Always | RENDER |
| CTA-EU | Explore the European Union | `MARKET-EU-001` | `source_page=MARKET-000` | `MARKET_ROUTE_AVAILABLE[MARKET-EU-001]` | DO_NOT_RENDER |
| CTA-UK | Explore the United Kingdom | `MARKET-UK-001` | source page + explicit market | 对应 route available | DO_NOT_RENDER |
| CTA-IN | Explore India | `MARKET-IN-001` | source page + explicit market | 对应 route available | DO_NOT_RENDER |
| CTA-BR | Explore Brazil | `MARKET-BR-EN` | source page + explicit market | 对应 route available | DO_NOT_RENDER |
| CTA-EU-COUNTRY | Country name | 对应六国 Page ID | source page + explicit market | 对应 route available | DO_NOT_RENDER |
| CTA-PRODUCT | Explore Products | `PRODUCT-000` | optional source page | 对应 support route available | DO_NOT_RENDER |
| CTA-APP | Explore Applications | `APP-000` | optional source page | 对应 support route available | DO_NOT_RENDER |
| CTA-DOC | Review Documents | `DOC-000` | optional source page | 对应 support route available | DO_NOT_RENDER |
| CTA-TRADE | View Current Trade Updates | matching `RES-TRADE-*` / approved Resources route | explicit market only | content approved + official source current + freshness current + route live | DO_NOT_RENDER |
| CTA-RFQ | Request a Quote | `CONV-RFQ` | source page; explicit market only | workflow approved + route live | DO_NOT_RENDER |
| CTA-PTBR | No current label | `MARKET-BR-PT` | None | 仅在 Brazil EN→PT-BR 可见关系/链接获独立批准且目标 live 后；不改变 Hub hreflang | DO_NOT_RENDER |

行动单元必须原子渲染：Label、body 依赖句、href、图标、analytics label 和 Schema URL 同时出现或同时省略。

## 8. 内链合同

### 8.1 出站

| Relation | Page IDs | Anchor direction | 当前行为 |
|---|---|---|---|
| Market system | `MARKET-EU-001`, `MARKET-UK-001`, `MARKET-IN-001`, `MARKET-BR-EN` | Exact market name / Explore {Market} | 关系名可见；href 逐项省略 |
| EU country | `MARKET-EU-DE/IT/ES/PL/NL/BE` | Exact country name | 名称可见；href 逐项省略 |
| PT-BR | `MARKET-BR-PT` | None | 整个关系省略 |
| Product section | `PRODUCT-000` | Explore Products | 职责说明可见；href 省略 |
| Application section | `APP-000` | Explore Applications | 职责说明可见；href 省略 |
| Document section | `DOC-000` | Review Documents | 职责说明可见；href 省略 |
| Trade section | `RES-000`, `RES-TRADE-*` | View Current Trade Updates | 职责边界可见；href/摘要省略 |
| Quotation path | `CONV-RFQ` | Request a Quote | 整个行动省略 |

### 8.2 入站合同

- Header `Markets` → MARKET-000。
- Home Markets 模块 → MARKET-000。
- 未来 Market landing pages 使用 Breadcrumb/Back → MARKET-000；本 Gate 2 不启动这些页面。
- Products、Applications、Documents、Resources 仅在各自批准关系中回链。

## 9. 确定性状态矩阵

### 9.1 输入 flags

| Flag | 当前值 | True 条件 |
|---|---|---|
| `MARKET_ROUTE_AVAILABLE[10 EN targets]` | false × 10 | URL/content/canonical/`tio2-my` live 全部通过 |
| `PTBR_RELATION_AVAILABLE` | false | 仅表示 Hub 获准显示已批准且 live 的 Brazil EN→PT-BR 可见关系/链接；不改变 MARKET-000 hreflang，亦不代替两张 Brazil child page 的独立 hreflang 审批 |
| `PRODUCT_ROUTE_AVAILABLE` | false | PRODUCT-000 content + route live |
| `APPLICATION_ROUTE_AVAILABLE` | false | APP-000 URL/content + route live |
| `DOCUMENT_ROUTE_AVAILABLE` | false | DOC-000 URL/content + route live |
| `TRADE_ROUTE_AVAILABLE[4]` | false × 4 | official source + scope + date + freshness + content + route live |
| `RFQ_AVAILABLE` | false | workflow + route live in `tio2-my` |

22 个受审外部单元维持 `NOT_VERIFIED_LIVE`；本表不把 false 当作永久不可用。

### 9.2 Public state

| State | 条件 | 可见结果 |
|---|---|---|
| `S0_CURRENT_ROUTE_SAFE` | 所有外部 flags=false | Header/hero/local CTA、市场结构名称、Choice Guide、职责指南、Trade Boundary、route-safe Buyer Questions；Q7 只输出 route-safe base；GEO-A09 不渲染；无外部 CTA、ItemList URL、PT-BR、Final RFQ |
| `S1_PARTIAL_MARKET` | 任一 EN Market route=true | 只为该目标渲染完整 Explore/国家链接；其他目标保持说明无行动 |
| `S2_PARTIAL_SUPPORT` | 任一 Product/Application/Document route=true | 只为对应栏目渲染 CTA；模块不出现空按钮槽 |
| `S3_TRADE_CURRENT` | 某 Trade route 全条件=true | 只为该市场显示 Current Trade Update CTA；不在 Hub 复制政策摘要 |
| `S4_RFQ_READY` | RFQ=true | Header RFQ、Hero secondary、Q7 additional sentence、Final RFQ 同时启用 |
| `S5_PTBR_READY` | PTBR=true | Hub 只显示经批准且 live 的 Brazil EN→PT-BR 可见关系/链接；MARKET-000 hreflang 始终保持 `NOT_APPLICABLE`；两张 Brazil child page 的 en/pt-BR hreflang 由其独立任务批准和处理 |
| `S6_FULL_EN_ACTION` | 10 EN Market + 3 support + RFQ=true | 使用 Full-route Meta；所有 EN 行动可用；Trade 仍逐市场 freshness gate；PT-BR 独立 |

### 9.3 原子省略

- CTA 不可用时，同时移除依赖句、图标、箭头、href、analytics label 和 Schema URL。
- 一个 destination route 不可用，不影响其他 route 的独立行动。
- 全部 supporting CTA 不可用时，保留职责指南，但不渲染空操作区。
- RFQ 不可用时，移除 Header 行动、Hero secondary、Q7 附加句、GEO-A09 和 Final RFQ 全模块；S0 只保留 Q7 route-safe base，不声明选择信息会被传递。
- PT-BR 不可用时，Brazil EN 区块自然闭合，不出现空分隔符或语言提示。
- Trade link 不可用时，Trade Boundary 答案仍完整。

## 10. 内容长度与响应式文字合同

| 模块 | 目标长度 | Mobile 规则 |
|---|---|---|
| Hero intro | 28–42 words | 不截断；CTA 后立即进入 Selector |
| Destination descriptions | 16–35 words each | 自然换行；国家名不截断，不横滑 |
| Choice Guide item | 24–38 words | 三项纵向排列；标题与正文不合并成小字 |
| Procurement path item | 24–40 words | 无 CTA 时不留空白槽 |
| Trade Boundary | 32–48 words | 来源边界保持完整，不用 tooltip 隐藏 |
| Buyer answer | 20–45 words | 问答标题可换行；不截成省略号 |
| Final RFQ body | 28–45 words | 仅 route ready；按钮可全宽 |

Mobile EU disclosure 使用 `View EU country destinations` / `Hide EU country destinations`；控件需有程序化名称、controls 关系和 expanded 状态。此处只批准文案候选，不构成 Gate 3 线框。

## 11. 禁止表达与替换规则

| 禁止或受限表达 | 原因 | 可用替换方向 |
|---|---|---|
| We supply / serve all four markets | 无覆盖证据 | The market navigation is organized around… |
| Local stock / warehouse / office | 无运营证据 | 不表达 |
| Fast delivery / reliable logistics | 无运营证据 | 不表达 |
| Fully compliant / REACH registered | 无文件/范围证据 | Documents responsibility + confirmation boundary |
| Available documents | 无可用性证据 | Document categories and controlled requests |
| Avoid / bypass duties | 禁止规避主张 | Current official-source trade information belongs in Resources |
| Best / equivalent / replacement | 无技术证据 | Technical evaluation is required |
| Portuguese version available | PT-BR hold | 不表达、不显示入口 |
| Click below / visit this page | route 可能不可用 | 使用在无链接时仍完整的职责说明 |

## 12. Gate 2 验收清单

### 12.1 内容与职责

- [x] 页面不是国家卡片列表；选择逻辑、栏目职责和下一步完整。
- [x] EU 总页、EU 六国、UK、India、Brazil 职责没有互换。
- [x] 没有写 Market 子页正文或用国家名替换生成内容。
- [x] MKT-R002 受限市场事实全部未进入文案。
- [x] Trade Boundary 不包含政策结论。

### 12.2 SEO/GEO

- [x] `NO_PRIMARY_KEYWORD` 保持不变。
- [x] Title/H1/Meta 不抢子页 supplier 词。
- [x] 九个 GEO answers 均有 Source ID 和时间边界。
- [x] Buyer Clean 代码块和九个 GEO 简明答案不含 `owner`、`conversion task`、`route`、`workflow` 或 `Gate` 等内部 IA 术语。
- [x] GEO-A09 明确只在 `RFQ_AVAILABLE=true` 时渲染；S0 不输出信息传递行为声明。
- [x] Schema 与 visible/live 状态一致。
- [x] 默认不使用 FAQPage/QAPage。

### 12.3 Route/Localization

- [x] 当前 22 个外部单元均按 `NOT_VERIFIED_LIVE` 处理。
- [x] 只有 local anchor 当前为可执行 CTA。
- [x] RFQ 依赖内容原子省略。
- [x] PT-BR 在 visible、Canonical、hreflang、Schema、sitemap、menu、route 全面省略。
- [x] Hub hreflang 始终为 `NOT_APPLICABLE`；未来 Brazil EN/pt-BR hreflang 仅属于两张 Brazil child page 的独立任务。
- [x] route-safe copy 在无外链时仍完整可读。

### 12.4 阶段边界

- [x] 文件状态为 `APPROVED_GATE_2_BASELINE`，用户批准日期与范围已记录。
- [x] Gate 2 批准检查点：当时仅授权 Gate 3；后续 Gate 3 于 2026-08-30 获用户批准并只授权 Gate 4 草案；再后续 Gate 4 于 2026-08-30 获用户批准，现只授权 Gate 5 草案。
- [x] 没有启动任何 Market 子页。
- [x] 没有修改 WordPress、Next.js、CMS、测试、部署或 `D:\16Wordpress_nextjs`。

### 12.5 Buyer Clean 定向扫描合同

- 扫描范围一：第 4 节所有 fenced `text` 代码块，即可见英文候选。
- 扫描范围二：第 6.2 节九行 `GEO-A01`–`GEO-A09` 的“简明答案”列。
- 禁止词按不区分大小写检查：`owner`、`conversion task`、`route`、`workflow`、`Gate`。
- 内部治理标题、flag、状态矩阵、审核记录和验证说明不属于公开文案，可以保留必要的控制术语。
- Gate 2 复审前两项扫描必须均为 0 命中；否则 G2-01 不得提交复审。

## 13. Open Items

| Review ID | 级别 | Gate 2 控制 | 状态 |
|---|---|---|---|
| MKT-R002 | IMPORTANT | 只使用架构/职责文案；CL-014 继续 `DO_NOT_RENDER` | OPEN |
| MKT-R003 | IMPORTANT | PT-BR 关系在所有表面完整省略 | OPEN |
| MKT-R004 | IMPORTANT | 22 个 route 逐项条件渲染；当前仅 local anchor 可执行 | OPEN |
| MKT-R005 | IMPORTANT | Trade Boundary 可见；政策摘要/链接继续受 official source/freshness/content/live 门禁 | OPEN |
| G2-01 | IMPORTANT | 公开英文与 GEO answer 改用自然采购语言；Buyer Clean 定向扫描不得出现内部 IA 术语 | `CLOSED` |
| G2-02 | IMPORTANT | Hub PT-BR 可见关系与 child hreflang 分离；GEO-A09 仅 RFQ true 渲染，S0 仅保留 Q7 base | `CLOSED` |
| G4-03 | IMPORTANT | 将第 12.4 节阶段边界明确为 Gate 2 批准时的历史快照，并同步后续 Gate 3/Gate 4 批准与当前仅授权 Gate 5 草案 | `CLOSED` |

## 14. 版本记录

| 版本 | 日期 | 变更 | 批准状态 |
|---|---|---|---|
| V0.1 | 2026-08-29 | 初始 MARKET-000 Gate 2 Content Architecture；建立英文 Buyer Clean copy、SEO/GEO answers、CTA/内链与确定性 route-safe 状态 | `DRAFT_FOR_GATE_2_REVIEW`；待总控与用户审查 |
| V0.1 / Gate 2 review revision | 2026-08-29 | 修订 G2-01 Buyer Clean 术语与 G2-02 PT-BR/hreflang/RFQ 条件唯一性；总控复审 PASS；不改变 Gate 1 基线或 MKT-R002–005 | `DRAFT_FOR_GATE_2_REVIEW`；G2-01/G2-02=`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| V0.1 / Gate 2 approval | 2026-08-29 | 用户最终批准 Content Architecture；G2-01/G2-02 关闭；页面进入 `DESIGN_IN_REVIEW`；仅授权 Gate 3 | `APPROVED_GATE_2_BASELINE`；Gate 4/5 未授权 |
| V0.1 / downstream Gate 3 approval | 2026-08-30 | Gate 3 Wireframe 经总控复审 PASS 并获用户批准；G3-01/G3-02/G3-03 关闭；只授权 Gate 4 Visual Direction | Gate 2 baseline 保持 `APPROVED_GATE_2_BASELINE`；Gate 5 未授权 |
| V0.1 / PRODUCT relation V0.2.1 impact | 2026-08-30 | 审计 Product/Application/Process 文案、CTA、GEO 与 Schema；确认 Hub 仅保留页面级路径且无需修改 Buyer Clean copy 或 Gate 3 几何 | Gate 2 baseline 保持批准；G4-02=`CLOSED` |
| V0.1 / PRODUCT relation V0.3 source sync | 2026-08-30 | 将当前唯一关系源更新为 V0.3；删除当前 M-2377 全局隐藏/冲突描述；保留 Hub 零行级渲染、市场证据独立和 M-996/M-2196 comparison hold | Gate 2 模块、Buyer Clean、CTA、GEO/Schema 与几何不变；`MKT-REL-V03-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；approval source=`USER_APPROVED_PRODUCT_V0.3 + PROJECT_CONTROL_TARGETED_REVIEW` |
| V0.1 / Gate 4 governance consistency revision | 2026-08-30 | 将第 12.4 节过时的当前时态改为 Gate 2 批准历史快照；同步后续 Gate 3/Gate 4 批准与当前仅授权 Gate 5 草案 | G4-03=`CLOSED`；用户批准 Gate 4 |
