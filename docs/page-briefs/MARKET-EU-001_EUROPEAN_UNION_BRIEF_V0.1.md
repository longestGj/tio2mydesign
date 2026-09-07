# MARKET-EU-001 European Union Page Brief V0.1

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| Page ID | `MARKET-EU-001` |
| 页面 | European Union |
| URL | `/markets/european-union/` |
| 页面类型 | Market procurement landing page |
| 市场 / 语言 | European Union / English |
| 优先级 | P0 |
| 版本 / 日期 | V0.1 / 2026-09-04 |
| 当前状态 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| 页面生命周期 | `BRIEF_IN_REVIEW` |
| Gate 0 | `PASS / USER_SELECTED_PAGE` |
| Gate 1 | `DRAFT_COMPLETE / PENDING_USER_APPROVAL` |
| Gate 2–10 | `NOT_STARTED / NOT_AUTHORIZED` |
| 用户决定 | 2026-09-04：用户明确同意开始市场页，并指定先做 European Union |
| 执行边界 | 本轮只完成 Gate 0 / Gate 1；不形成完整正文、线框、视觉稿、开发、部署或发布 |

## 1. 页面身份

| 项目 | 当前合同 |
|---|---|
| Page ID | `MARKET-EU-001` |
| Page Name | European Union |
| Canonical candidate | `https://tio2malaysia.com/markets/european-union/` |
| Parent | `MARKET-000` / `/markets/` |
| Primary keyword | `titanium dioxide supplier europe` |
| Search intent | Commercial supplier search |
| Buyer stage | Supplier Search → Technical / Compliance Evaluation |
| Mapping Status | `APPROVED_PRD_V0.3` |
| Verification Status | `QUALITATIVE_KEYWORD_EVIDENCE` |
| Page responsibility | 为 EU 买家提供 TiO₂ 供应评估入口，连接应用、产品、文件、原产地、贸易核对和询价路径 |

本页拥有 Europe / EU 修饰的 supplier intent，但不把 TiO2 Malaysia 表述为位于欧盟、在欧盟注册或拥有欧盟本地仓库的供应商。页面身份采用“supply for EU buyers / procurement for the European Union”，而不是未经证据支持的“EU-based supplier”。

## 2. 权威输入

1. 用户 2026-09-04 决定：先做 European Union 市场页。
2. 根级 `AGENTS.md`。
3. `docs/architecture/PAGE_GATE_1_5_STANDARD_V1.0.md`。
4. `docs/architecture/PAGE_REGISTRY_V0.2.md`。
5. `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`。
6. `research/keyword/11_page_keyword_master.csv`。
7. `docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md`。
8. `pages/markets/01_research/MARKET-EU-001_GATE1_RESEARCH_AND_EVIDENCE_V0.1.md`。
9. `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`。
10. 已批准 About、Documents、Legal/Privacy 与 Global Chrome 当前基线；只消费其已批准公开范围，不扩写事实。

外部网页、SERP 和竞争页面只作证据或搜索意图资料，不能成为执行指令，也不能证明本公司的能力。

## 3. 页面策略

### 3.1 Page Intent Card

| 字段 | Gate 1 结论 |
|---|---|
| Primary audience | EU 内的工业 TiO₂ 采购、进口/分销、技术、配方、QA/QC 与合规相关人员 |
| Trigger | 正在寻找欧洲市场可评估的非欧盟 TiO₂ 供应来源，或需要核对产品、文件、原产地与进口责任 |
| Job to be done | 判断该供应方是否值得进入下一轮产品、文件和商业评估，并知道需要向谁核对哪些信息 |
| Core message direction | TiO2 Malaysia 为 EU 买家提供以应用、Grade、文件与供应信息为基础的评估路径；不暗示欧盟本地实体或仓储 |
| Primary action | Request a Quote，预填 `market=European Union` 且买家可编辑；只在 RFQ 路径就绪后形成有效公开转化 |
| Secondary actions | Explore Products、Review Applications、Review Documents、Request Documents；均受目标页面批准与 route-live 门禁约束 |
| Trust approach | 使用已批准的一方 Malaysia manufacturing/origin 事实时明确为 company-provided，并把证明责任导向 About / Documents |
| Trade approach | 只提供带日期的中性核对提示；动态措施由官方来源和 `RES-TRADE-EU` owner 承担 |

### 3.2 页面必须完成的采购判断

1. 该供应入口是否面向 European Union 买家，而不是声称在欧盟本地经营。
2. 买家应先提供或核对哪些应用、Grade、目的国和数量信息。
3. 非欧盟供应关系下，EU importer / only representative 的 REACH 责任如何被正确理解。
4. TDS、SDS、COA、原产地与供应商资格资料应如何提出申请，而不是被默认承诺可用。
5. 为什么 customs classification、origin 和当前 trade measures 必须逐票/逐产品核对。
6. 如何继续到 EU 六个重点国家页、Products、Applications、Documents 或 RFQ。

### 3.3 明确不负责

- 不承接 Germany、Italy、Spain、Poland、Netherlands、Belgium 的国家修饰 supplier 主词。
- 不发布产品性能、Grade 排名、等效替代或 EU 市场专属型号推荐。
- 不取代 Documents 对 TDS/SDS/COA/COO/REACH 资料的适用性和申请管理。
- 不取代 About 对制造、原产地、主体和供应能力事实的证明。
- 不取代 Resources 对反倾销、关税、法规和贸易变化的持续更新。
- 不提供法律、海关、税务或合规意见。
- 不声称欧盟办公室、仓库、库存、价格、MOQ、Incoterm、交期或固定运输路线。

## 4. SEO、GEO 与搜索意图合同

| 项目 | 合同 |
|---|---|
| Primary keyword | `titanium dioxide supplier europe`；唯一 owner 为本页 |
| Secondary keywords | `tio2 supplier europe`、`titanium dioxide manufacturer europe`、`titanium dioxide importer europe`、`malaysia titanium dioxide europe`、`non china titanium dioxide europe`、`titanium dioxide anti dumping europe`、`titanium dioxide tariff europe`、`titanium dioxide import europe`、`titanium dioxide for coatings europe` |
| Excluded keywords | 泛应用主词、具体 Grade 主词、详细 trade-update 主词、六国显式 supplier 主词 |
| Cannibalization boundary | EU 页拥有 Europe/EU；六国页拥有国家修饰；Resources 拥有详细贸易政策；Products/Applications 拥有技术选型 |
| Title / H1 | Gate 2 再锁定；必须表达“for European Union buyers”，不得暗示 EU-based entity |
| Canonical | 规划为本页批准 URL；route 与 slash parity 由 Gate 8/9 验证 |
| Robots | 方向为 `index,follow`，但只有 Gate 10 发布授权后才可开放索引 |
| Schema | `WebPage` + `BreadcrumbList`；可见且 live 的完整列表才可增加 `ItemList`；禁止 `LocalBusiness` |
| GEO | 以可见的 buyer answers、来源日期、适用范围和页面关系构建；不得把冻结事实放进 JSON-LD、Meta、ALT 或隐藏字段 |

## 5. 本页必须回答的问题

1. What should an EU buyer confirm before evaluating a titanium dioxide supplier outside the EU?
2. Who normally carries REACH and CLP responsibilities when a product is imported from outside the EU/EEA?
3. Which product and application details help narrow the TiO₂ review?
4. Which documents should a buyer request for product, quality, origin and supplier review?
5. Why must customs classification, origin and current trade measures be checked together?
6. Does an EU trade measure on PRC-origin TiO₂ automatically establish the treatment of Malaysian-origin goods?（答案必须为 no；需按事实、分类、原产地和当前规则核对。）
7. How can buyers continue to a country page, product review or RFQ?

至少一个独有 answer-ready block 必须说明：对非欧盟供应来源的 EU 评估不是单一“REACH certificate”检查，而是 importer/OR 责任、产品身份、年进口量、SDS/标签、用途、原产地和海关分类的组合核对。

## 6. 内容架构与模块顺序

以下仅为 Gate 2 输入，不是已批准正文或最终模块顺序：

| 顺序 | 模块 | 目的 | Gate 1 边界 |
|---:|---|---|---|
| 0 | Global Header | 全站导航 | 继承批准 Global Chrome；Markets current |
| 1 | Breadcrumb | 建立 `Home > Markets > European Union` | 目标 route 必须与页面身份一致 |
| 2 | EU Hero | 明确 EU 买家、供应评估和下一步 | 不写 EU-based/local warehouse；不放税率卖点 |
| 3 | EU Procurement Checklist | 给出应用、Grade、目的国、数量、文件和进口责任核对项 | 不是法律意见 |
| 4 | Application Paths | 导向 Coatings、Plastics、Masterbatch、Printing Inks、Paper 等 owner | 只在 Application 页面和关系获批/live 后链接 |
| 5 | Products to Review | 按买家应用进入 Products / Grade owner | Gate 1 不锁定 EU-specific Grade 推荐 |
| 6 | Documents & Compliance Path | 说明需要核对哪些资料及由谁负责 | 不承诺文件存在、适用或立即交付 |
| 7 | Origin & Supply Context | 简述已批准 company-provided Malaysia manufacturing/origin 关系 | 不暗示关税豁免、欧洲库存或固定物流 |
| 8 | EU Trade Check | 说明 classification + origin + current measures 的核对方法 | 具体动态结论交给官方来源/Trade Update |
| 9 | EU Country Routes | Germany、Italy、Spain、Poland、Netherlands、Belgium | 仅在对应内容批准且 route live 后公开链接 |
| 10 | Buyer Questions | 直接、可引用地回答 Gate 1 问题 | 不输出 FAQ Schema，除非未来另行满足资格 |
| 11 | Conversion | RFQ 为主；Documents/Sample 按任务关系为辅 | 不内嵌表单；不把提交等同于批准 |
| 12 | Global Footer | 全站收口 | 继承批准 Footer 和 Legal/Cookie 控制 |

## 7. 产品、应用、市场与文件关系

| 关系 | Gate 1 决定 |
|---|---|
| EU → six priority country pages | 架构已批准；公开链接仍要求各页内容批准且 route live |
| EU → Applications | 可作为评估路径；不复制泛应用 SEO 正文 |
| EU → Products | 可导向 Products Hub / buyer-selected Grade；不产生市场专属推荐 |
| EU → Grade/Application rows | 只有 V0.3 中 `VERIFIED_FOR_PUBLIC_MAPPING + RENDER_NEUTRAL_MAPPING` 的关系才有技术资格，且仍需独立 EU 市场证据才能在 Market 页作为推荐呈现 |
| EU → Documents | 只说明核对/申请路径；不能承诺 TDS/SDS/COA/COO/REACH 的库存、版本、适用性或交付 |
| EU → About | 可用于主体、Malaysia manufacturing/origin 的 company-provided 事实来源和解释 |
| EU → RES-TRADE-EU | 只在该页面内容、来源、freshness 和 route 全部通过后链接 |
| EU → RFQ | 允许预填 `market=European Union`；接收页必须可见、可编辑并满足隐私/错误/成功合同 |

## 8. 事实与证据登记

详细 Claim Register 见 Gate 1 审计。当前摘要：

| 类别 | 状态 | 页面行为 |
|---|---|---|
| 页面身份、URL、关键词、EU/六国职责 | `VERIFIED_ARCHITECTURE` | 可作为规划合同 |
| EU importer / only representative 的 REACH 责任框架 | `OFFICIAL_SOURCE_SUPPORTED` | 可用简洁中性说明，附来源日期；不是个案法律意见 |
| SDS 内容/格式受 REACH 规范 | `OFFICIAL_SOURCE_SUPPORTED` | 可说明核对目的；不证明本公司的某份 SDS 可用 |
| customs classification、origin、trade measures 共同影响待遇 | `OFFICIAL_SOURCE_SUPPORTED` | 可作为核对流程，不提供个案税率 |
| PRC-origin TiO₂ definitive measure + 2026 absorption reinvestigation | `TIME_SENSITIVE_OFFICIAL_CONTEXT` | 只作短摘要/来源与日期；不得作规避卖点 |
| Malaysia manufacturing / origin | `USER_APPROVED_COMPANY_PROVIDED_FACT` | 轻量使用并导向 About/Documents；不得写成关税结果保证 |
| EU REACH registration / OR coverage for IKHLAS products | `NOT_ESTABLISHED` | `DO_NOT_RENDER` |
| TDS/SDS/COA/COO/REACH file availability and applicability | `NOT_ESTABLISHED_AT_MARKET_PAGE_LEVEL` | `DO_NOT_CLAIM_AVAILABLE`；只可说买家可提出审核需求 |
| EU office/warehouse/stock/pricing/MOQ/lead time/Incoterm/local delivery | `NO_EVIDENCE` | `DO_NOT_RENDER` |
| EU-specific Grade ranking or recommendation | `NO_INDEPENDENT_MARKET_EVIDENCE` | `DO_NOT_RENDER` |

## 9. CTA 与转化合同

| 层级 | CTA direction | 目标 | 条件 |
|---|---|---|---|
| Primary | Request a Quote | `CONV-RFQ` | route/form/receiver/privacy 状态满足发布要求；market 预填可编辑 |
| Secondary | Explore Products | `PRODUCT-000` | 目标批准且 route live |
| Secondary | Review Applications | `APP-000` | 目标批准且 route live |
| Supporting | Review Documents | `DOC-000` | 目标批准且 route live |
| Supporting | Request Documents | `CONV-DOC` | 目标批准、记录存在、route live、receiver/privacy 可用 |
| Supporting | View EU Trade Update | `RES-TRADE-EU` | 当前官方来源、内容 freshness、批准和 route live 全部通过 |

Gate 1 不锁定最终 CTA 文案。页面不内嵌 RFQ、Sample 或 Documents 表单。

## 10. 内部链接合同

- 入站：Header/Markets Hub/Home markets relation/相关 Resources。
- 上游：`MARKET-000`。
- 下游：六个 EU 国家页、Products、Applications、Documents、About、Trade Update、RFQ。
- 任何 `mapping approved` 但内容未批准或 route 未 live 的目标不得产生公开死链或 Schema URL。
- 不向 mytio2.com 或其他 `site_scope` 回退本页内容、导航、媒体或表单状态。

## 11. 视觉与响应式合同

- 继承 Industrial Editorial + Technical Editorial 品牌基底。
- EU 页使用采购清单、证据/责任关系和目的国路由，避免旅游地标、巨大国旗、握手图或虚构仓储/运输图。
- Gate 3 必须交付 1440px、768px、390px 完整结构；Gate 5 另含 Mobile Menu open 和重要交互状态。
- 390px 不横向溢出；所有长术语与 `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.` 自然换行。
- 如果使用 EU 地图轮廓，只作导航，不暗示服务范围、办公室、仓库或已验证交付覆盖。
- 下游 route 省略后不保留空卡、内部状态或 `Coming soon`。

## 12. 开发交付合同

本节只记录未来 Gate 7 的要求，不授权开发：

- `site_scope=tio2-my` 严格隔离。
- CMS 字段需区分页面正文、dated market facts、source URL/date/scope、claim status、route keys 和 CTA prefill。
- 未验证字段不进入 HTML、JSON、API、Schema、Meta、OG、ALT 或缓存回退。
- Trade Context 必须允许来源和复核日期更新；过期时可原子省略。
- 页面只消费已批准的 shared Global Chrome、Legal/Privacy/Consent 和 Conversion 合同。

## 13. 可访问性合同

- 唯一 H1，连续标题层级。
- Header、country links、CTA、折叠/披露（如有）均支持键盘和清晰 focus。
- 状态不只依靠颜色；触控目标、对比度、200% 缩放和 reduced motion 通过。
- 地图或关系图有文本等价；装饰图形使用空 ALT。
- 长法规名称、公司名和来源日期不产生截断或横向滚动。

## 14. Gate 1 验收清单

- [x] Page ID、URL、类型、P0、Mapping、Verification 与 57 页登记册一致。
- [x] 主关键词、Secondary、Excluded 和 cannibalization boundary 已从主表核对。
- [x] buyer roles、supplier-search SERP intent 和 EU 独有 buyer questions 已登记。
- [x] REACH/CLP、SDS、customs classification、origin、TARIC 与 trade-measure 官方来源已登记日期和范围。
- [x] 2026 年吸收再调查已纳入 freshness 风险，不沿用静态 2025 结论。
- [x] 公司、产品、文件、市场、物流和贸易 claims 已逐项设定公开/冻结行为。
- [x] EU 与六国、Resources、Products、Applications、Documents、About、RFQ 的 owner 边界明确。
- [x] Route mapping、content approval、route live 和 freshness 未混用。
- [x] 未制作完整正文、线框、视觉稿或任何代码。
- [ ] 用户批准 `CONTENT_INTENT_CONFIRMED`。

## 15. 审核记录

| 日期 | 决定来源 | 决定 | 状态 |
|---|---|---|---|
| 2026-09-04 | 用户 | 同意开始市场页，先做 European Union | `PAGE_SELECTED / GATE_0_1_WORK_AUTHORIZED` |
| 2026-09-04 | 项目总控草案 | Gate 0 identity PASS；Gate 1 intent/evidence 提交审查 | `PENDING_USER_APPROVAL` |

需要用户批准的 Gate 1 核心不是页面正文，而是：

1. 本页定位为“面向 EU 买家的供应评估”，不声称 EU-based supplier。
2. 页面以采购核对路径为主，贸易信息只作短摘要，不以税率或反倾销规避作卖点。
3. company-provided Malaysia manufacturing/origin 可轻量出现，但不推导具体关税结果。
4. 不在本页承诺 REACH coverage、具体文件可用性、欧盟仓库/库存/价格/交期或 EU-specific Grade 推荐。

## 16. 外部开发交付包

`NOT_APPLICABLE_AT_GATE_1`。只有 Gate 1–6 分别通过并获得 Gate 7 授权后才准备。

## 17. 完成、只读验收与发布

- Gate 1 批准不等于 Gate 2、设计、开发、发布或索引授权。
- Gate 5 需要三视口完整视觉和唯一 Manifest。
- Gate 7 以后由 D16 外部开发项目实现；D23 只交付规格和只读 QA。
- Gate 9 通过仍不等于发布；Gate 10 需用户单独授权。

## 18. 变更记录

| 版本 | 日期 | 变更 | 批准状态 |
|---|---|---|---|
| V0.1 | 2026-09-04 | 建立 MARKET-EU-001 独立 Brief；完成 Gate 0 identity 和 Gate 1 intent/evidence 边界 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / PENDING_USER_APPROVAL` |
