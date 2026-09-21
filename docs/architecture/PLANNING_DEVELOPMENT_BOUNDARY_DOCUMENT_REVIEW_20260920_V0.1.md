# 策划—开发边界文档审查 V0.1

日期：2026-09-20。性质：用户要求的分析与验证报告；不是批准的新架构、Gate 审查通过或修改授权。

审查对象：[ChatGPT - 01Mylasiya的对应.md](../ChatGPT%20-%2001Mylasiya的对应.md)，SHA-256：`7C6921706E4AC78F062ABCD38988992C263356C269D1EBEBC3394737B71CA0B9`。原文明确为不完整聊天摘录；其中的“继续”“上一节通过”不能证明缺失上下文中的完整批准范围。

## 1. 结论及验证范围

文档识别了一个真实问题：策划过程、审批和开发就绪状态不宜自动成为网站业务数据。优先原生 WordPress 字段、单一关系编辑源、派生目录、标准 GraphQL 字段、轻量内容模型插件，均是可采用的方向。

但它目前不够作为完整重建合同。主要问题是把“去除治理耦合”扩大成按字段名、文件夹名和技术机制一律禁止；未完整覆盖现有业务、内容更新生命周期和迁移边界。建议保留原则，修订下列问题后再决定采用范围。

本次通过全站入口、PRD、登记册、关键词实施表、治理细则、工作流、全站上线交付与生产验收记录，以及 Products 的完整 Brief、关系审计、交付映射和隔离合同建立项目全貌，并查阅 WordPress、ACF、WPGraphQL、Next.js 官方资料。没有逐份重审全部页面历史；没有读取或修改 D16 实现，没有运行新系统原型，没有重新验收当前生产网站。因此下列结论是文档/需求/官方技术语义验证，不是现有代码缺陷判定。

## 2. 项目真实基线

- 业务：TiO2 Malaysia，由 IKHLAS TITANIUM (MALAYSIA) SDN. BHD. 运营，面向 EU、UK、India、Brazil 的 B2B 采购询盘。主要行动为 RFQ、Sample、Documents Request。
- 架构：59 个登记对象，包含 Home 1、About/Contact 2、Markets 12、Products 17、Applications 6、Documents 4、Resources 9、Conversion 4、Legal 3、System 1。已对关键词实施表按 section 计数复核。
- 产品：14 个 Grade；四个展示组 6/5/2/1；工艺 8 Chloride、5 Sulfate、1 Vapor-phase oxidation。
- 应用：6 个筛选分类、30 条公开正向关系；数量分别为 Coatings 8、Plastics 8、Masterbatch 7、Printing Inks 4、Paper 2、Specialty Materials 1。已从 V0.3 CSV 重新分组计数。应用落地页只有前五类，另有 Applications Hub。
- 内容：企业事实、产品关系、技术参数、目录摘要、第三方来源和页面文案具有不同授权范围，不能从一项推导另一项。
- 多语言：Brazil EN/PT-BR、Privacy EN/BM；除 Title/Description 外还有语言关系、Canonical、robots、Sitemap、Schema 和来源日期要求。
- 运行行为：全站共享导航与 Hero、表单预填/验证/接收/成功、Thank You、404、Consent、GTM/GA4、站点隔离均属于现有需求。
- 项目分工：D23 负责策划与只读验收，D16 负责实现。`site_scope=tio2-my` 隔离覆盖查询、路由、缓存、菜单、媒体、表单、SEO 和分析事件。
- 上线事实：2026-09-14 生产验收记录已观察到 57 个标准页、Sitemap、真实 404 和 Thank You；这是有日期的项目证据，不声称已在本次重新验证生产状态。部分根入口仍并列保留更早的“未发布/未开发”快照，不能据此将整站视为从未上线。

依据：[PRD](../prd/TiO2_Malaysia_Website_PRD_V0.4.md)、[登记册](PAGE_REGISTRY_V0.2.md)、[当前全站交付](TIO2_MY_FULL_PUBLIC_SEO_GA4_GATE6_DELIVERY_V1.0.md)、[发布目标矩阵](TIO2_MY_59_OBJECT_PUBLICATION_TARGET_MATRIX_V1.0.csv)、[生产记录](TIO2_MY_PRODUCTION_SEO_GA4_READONLY_VERIFICATION_20260914_V1.0.md)、[关系审计](../../pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md)。

## 3. 需要修订的问题

### F01 — 高：没有明确新项目的隔离拓扑，不能直接删除隔离责任

原文位置：插件 §23、§25（约 2492、2538 行），禁止 Site scope engine / Multi-site Scope Engine。

当前项目明确要求无跨 scope fallback。禁止在 Content Model 插件里建通用多站平台可以成立，但这不等于隔离不再需要。若新 WordPress、数据库、媒体、凭据、前端部署都独立，部分逐条 scope 字段可能可以省去；若继续共享 CMS 或缓存，仅用 Product slug 和 published 查询就不足以保证隔离。

修订：先声明独立部署还是共享 CMS，逐项说明隔离由哪一层兑现，再删除确实冗余的机制。允许换机制，不默认取消隔离结果。依据：[根规则](../../AGENTS.md)、[隔离合同 §1–3](../../pages/products/06_handoff/PRODUCT-000_GATE7_SITE_SCOPE_ISOLATION_CONTRACT_V0.4.md)。这是一项适用前提缺失，不是要求永久保留旧 scope engine。

### F02 — 高：应用业务分类与应用页面被合并，现有 Specialty 分类无处表达

原文位置：ACF §4、§14–17（862、1386 行起）。Product 的 applications 全部引用 Application CPT，并按 Application slug 生成页面。

现有六类筛选中 Specialty Materials 关联 CR-901，但没有相应落地页。若每个关系都必须指向一篇可公开查询的 Application 页面，会面临丢失 Specialty、增加未经批准页面，或人为创建无正文的可路由记录。工艺同样有三个分类、只有两个工艺落地页；CR-901 必须是分类行，不能自动成为第三张工艺页面卡片。

修订：业务分类与可选落地页分开表达，或明确非页面实体的模型和查询方式。保留六类/三类事实及五个/两个页面的差异，不能把“有关系”推导成“有页面”。依据：[PRODUCT 完整 Brief §6–7](../page-briefs/PRODUCT-000_TITANIUM_DIOXIDE_PRODUCTS_BRIEF_V0.4.md)、[关系审计](../../pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md)。

### F03 — 高：模型遗漏独立的目录摘要，不能把全部摘要合并成 excerpt

原文位置：ACF §2、§10–13（761、1158 行起）。最终模型只有 Product excerpt 等字段，Hub 不保存产品目录。

派生目录是合理的；但当前 Hub 的十四句目录摘要有独立批准范围，并要求可见摘要与对应 Schema description 完全一致。隔离合同明确禁止退回 Grade excerpt。它们与详情页短简介不能未经核对就视为同一个字段。

修订：可把 `directory_summary` 作为 Product 的独立业务文案单一维护，Hub 查询并展示；无需保留整份目录副本。只有逐项确认两种文案语义、用途和更新规则一致，才可以合并。保留已批准的目录顺序及 6/5/2/1 分组，不能依数据库默认排序。依据：[摘要增补](../../pages/products/04_planning/PRODUCT-000_SEO_GEO_SCHEMA_CONTRACT_V0.3.md)、[隔离合同 §5](../../pages/products/06_handoff/PRODUCT-000_GATE7_SITE_SCOPE_ISOLATION_CONTRACT_V0.4.md)。

### F04 — 高：原生发布状态加发布前测试，未覆盖上线后的内容变更

原文位置：Handoff §5、§7–9；插件 §11、§13（165、279、2101、2167 行起）。

反例：版本上线时所有内链均通过，随后编辑者将 Coatings 改为 draft、改 slug 或调整 Product 关系；如果不重新运行检查，旧内链或不同缓存版本仍可能存在。这里发生的是内容发布变更，不一定发生代码部署。WP publish 能表示内容公开状态，不能独自保证全部反向链接、前端缓存、Sitemap 和翻译关系同步。

修订：定义新增、修改、改 slug、撤下、删除的最小操作流程，以及代码发布与内容发布各自的检查触发。可以采用受控人工流程、构建触发或简单 webhook；无需新建 ReleaseStateMachine。但不能以“仅使用 publish”声称闭环已经完成。

官方核验：WPGraphQL 权限判断同时考虑请求身份、对象状态及类型；Next.js ISR 的时间再验证会先返回旧缓存，重建出错还会保留上一次成功结果。[WPGraphQL Security](https://www.wpgraphql.com/docs/security)、[Next.js ISR](https://nextjs.org/docs/app/guides/incremental-static-regeneration)。

### F05 — 高：示例 URL 与当前正式 URL 不同，缺少迁移说明

原文位置：Handoff §9，ACF §14–15（400、1391、1438 行）：`/applications/coatings/`。

当前正式目标是 `/applications/titanium-dioxide-for-coatings/`。该路径已由 9 月 13 日发布合同确定，9 月 14 日的整站验收覆盖相应生产目标。将旧暂定标签视为“仍可随意改 URL”不成立。

修订：明确示例只是伪代码；实施沿用已批准路径。若确需换路径，另给旧→新映射、重定向、Canonical、内链和 Sitemap 迁移方案。简单路径 helper 足够时无需 Route Registry，但路径所有权和兼容责任不能省略。依据：[23 页发布合同 §7.1](TIO2_MY_23_PAGE_PUBLICATION_CONTRACT_FINALIZATION_V1.0.md)。

### F06 — 中：四类信息的规则没有容纳必要工程配置，按字段名称禁用会误伤

原文位置：Handoff §6、§12–13（231、508、558 行起），把 Page ID、Schema Version、Content Revision 等统一归为治理，要求状态必须是业务状态。

Gate/Review/Evidence 状态确实不应控制买家页面。但同名字段可以承担不同职责：稳定页面标识用于归因，技术版本用于持久化数据兼容，缓存命名空间用于隔离。这些不一定由买家操作，却属于运行正确性。当前 GA4 合同已允许 `page_id` 参数，并要求交付 Consent 存储值的 shape/version。

修订：按来源、用途和消费方分类，区分“策划修订版本”与“运行数据格式版本”。不把内部审批记录放入业务 payload，同时允许有具体需求的技术配置存在于适当代码/环境层。依据：[全站交付 §4.2、§5](TIO2_MY_FULL_PUBLIC_SEO_GA4_GATE6_DELIVERY_V1.0.md)。不意味着现在需要增加新的版本字段。

### F07 — 中：简化 ACF 清单尚未证明可以完整承载已批准页面

原文位置：ACF §10、§16、最终模型（1158、1443、1685 行起）。

模型重点是 Product 和 Application；未展示现有市场、工艺、贸易资源、文档说明、多语言法律页及转化内容的字段归属。普通 Page/Post 足以承载其中很多内容，不必为每类新建 CPT；但目前没有逐模块迁移映射。`content` 能存正文并不自动证明能保留表格、来源日期、采购步骤、文件申请语义、相关型号说明及已有精确文案。

修订：先选不同页面类型的实际批准内容做“源模块→唯一编辑位置→输出”的映射，验证有无遗漏，再宣布字段模型够用。特别区分公开文件附件与文件申请文案；没有附件不等于不能显示获批申请说明。原文的 label/file 可以用于公开附件集合，不能代表全部 Documents 业务。

### F08 — 中：SEO 生成责任合理，但仅 title/description 不能概括全站输入

原文位置：Handoff §11、ACF §9（470、1103 行起）。

Next.js 生成 SEO 输出合理；但全站还有语言配对、独立页路径、来源/审核日期、特定 Schema、Thank You noindex 与 Sitemap 排除、404 无 canonical 等要求。这些可以从内容和确定的代码配置派生，不一定增加 ACF 字段；必须明确归属和输入，不能只写“Next.js 自己知道”。产品示例的 `baseUrl + /products/ + slug` 不覆盖整个网站。

修订：补充每类 SEO 输入的唯一来源，验证 EN/PT-BR、EN/BM、404、Thank You 等实际例外。依据：[全站交付 §2](TIO2_MY_FULL_PUBLIC_SEO_GA4_GATE6_DELIVERY_V1.0.md)、[生产语言与元数据验收](TIO2_MY_PRODUCTION_ONPAGE_SOCIAL_METADATA_READONLY_VERIFICATION_20260914_V1.0.md)。

### F09 — 中：ACF required 和生成类型不能替代业务数据校验

原文位置：插件 §11、§21（2101、2428 行起）。

不在 WordPress 复制一套 Next.js 页面合同是合理的；但 `required` 只解决部分字段输入约束，不能证明引用对象有效、关系符合业务范围、数据组合正确。GraphQL 生成类型也不验证内容真实性或全部跨字段规则。

修订：允许靠近内容写入点的必要业务校验，使用 ACF/WordPress 原生能力与轻量校验扩展；在查询边界处理缺值、权限和错误。禁止治理引擎不应扩大成禁止数据完整性校验。[ACF 官方 validate_value](https://www.advancedcustomfields.com/resources/acf-validate_value/) 明确支持保存前自定义字段校验。

### F10 — 中：getProductsByApplication 与 products.length 只是伪代码，尚无完整查询合同

原文位置：ACF §17、插件 §9（1518、2073 行）。

单一关系编辑源值得保留，但正向 ACF Relationship 暴露并不等于文档已经证明目标安装支持所需的反向筛选。对 14 个产品，查询完整产品集后在 Next.js 筛选可以很简单；关键是明确完整集、分页、顺序、权限、空值与错误处理。`products.length` 只有在获取完整集合后才是全站产品数。

修订：选择并验证一种最小查询方案，保留 14 个实体和 30 条正向关系的迁移校验。不要仅凭这一缺口就增加自定义 resolver；本次也未断言标准栈不能实现。官方文档证实 Relationship 以 Connection 表达，WPGraphQL 使用 cursor pagination：[ACF 升级与关系说明](https://www.wpgraphql.com/docs/acf/upgrade-guide)、[分页说明](https://www.wpgraphql.com/docs/performance)。

### F11 — 中：notFound() 不能替代真实 HTTP 状态验收

原文位置：Handoff §4（110–154 行）。

“不存在的产品调用 notFound”是正常方向，但不能据此保证真实 HTTP 404。Next.js 官方明确：流式响应中的 not-found UI 可伴随 HTTP 200，非流式响应为 404。还应区分业务对象不存在与 CMS 超时、认证错误、GraphQL 部分错误；不能把查询失败全部变成“产品不存在”。

修订：把真实 HTTP 状态、robots 和错误分类写成验收结果，交给实际技术路径兑现。依据：[Next.js not-found](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)、[本项目发布交付 §2](TIO2_MY_FULL_PUBLIC_SEO_GA4_GATE6_DELIVERY_V1.0.md)。这是技术表述需补条件，不是反对使用框架的 notFound。

### F12 — 中：重建需要交付规格的迁移，不能只删除实现字段

原文位置：Handoff §1、§10、§13，插件多处关于旧系统的归因与删除方向。

在 D23 中已经查到旧交付映射明确要求 `relationship_version`、`content_revision`、`route_state` 和 readiness resolver；它们不是仅由开发方无依据添加。原文对治理耦合的批评有材料支撑，但没有逐项指出应被替代的旧合同及验收。

修订：建立有限的“旧要求→保留的业务结果→新的归属→作废的旧验收项”对照。否则新开发符合简化方案，却会被旧 Gate 9 条目要求补回原机制。保留精确内容、关系、隔离和真实链接验收，撤销已不适用的机制断言。依据：[旧 CMS/API 映射 §1–2](../../pages/products/06_handoff/PRODUCT-000_GATE7_CMS_API_COMPONENT_MAPPING_V0.3.md)、[当前工作流 §10](GATE_WORKFLOW_V3.2.md)。本次没有检查 D16，所以不能验证原文对具体插件体量、resolver 实现和代码复杂度的全部断言。

## 4. 次要但明确的修正

1. **UI 不等于无法版本化。** 插件方案表 A 的风险表述应限定为“不配导出/同步机制的纯数据库配置”。ACF Local JSON 已支持字段组、CPT、taxonomy、options page 的保存与版本控制；自定义插件有合理价值，但不能用“UI 无法进 Git”证明它必需。插件内 JSON 目录还需配置实际 save/load path。[ACF Local JSON](https://www.advancedcustomfields.com/resources/local-json/)。
2. **“一种关系一个主人”应解释为一个权威写入源。** 反向查询、缓存或自动派生索引并不天然构成第二个事实源；两个可独立编辑且会漂移的关系集合才是主要问题。
3. **四个 portfolio group 不宜未经说明称为 product_family。** 现有分组是导航/组合表达，不应推导为技术类别、优劣或适用性。可以维护受控分类，但需保留原业务含义。
4. **“网站重设计后还有意义”适合作为启发式。** Hero 文案、CTA 文案和应用推荐顺序也有编辑价值；不能只按字段名称判定是否属于展示。禁止任意页面搭建器与允许受控语义模块可同时成立。
5. **迁移脚本可退出运行时，但应保留。** 14 个产品导入不是全部迁移；页面、语言关系、媒体、摘要、来源、SEO 和内链同样需要映射与读回核对。无需通用 Seed Framework，但需要可复核、可回退的迁移记录。
6. **原生状态的精确键是 publish。** draft/published 可以作为说明性用语，但实现应使用原生状态和权限 API，不按伪代码拼写自行造状态。

## 5. 建议保留的原则与修订顺序

保留：治理记录不进入公开业务 payload；不因尚未开发而制造运行时进度字段；同一业务关系只有一个权威编辑源；目录和计数优先派生；优先原生 WordPress/标准 GraphQL；轻量插件仅承担有依据的内容模型责任；一次性导入与长期运行分离。

建议先处理四项：

1. 明确新项目部署拓扑、完整页面范围和既有 URL 保留范围。
2. 用真实 Product/Hub/Application/Process 内容验证实体、分类、页面、摘要的分离。
3. 定义 CMS 内容编辑、发布、撤下和缓存失效的最小闭环。
4. 形成旧交付要求的定向替代清单，再修订字段、查询和验收合同。

推荐的边界表述：开发接收已批准的业务内容、关系和行为，以及兑现这些结果所需的最小技术约束与验收条件；治理过程记录留在项目体系，具体运行机制按真实需求与部署条件选择。

## 6. 本次操作与局限

本次仅新增此分析报告，保留原摘录和全部现有批准源，未更新项目权威指针或页面状态。未执行 D16 操作、生产写入、表单提交、发布、共享知识库查询或独立审查派发。

外部资料核验日期为 2026-09-20。官方能力说明不等于目标安装已具备相同版本/配置；分页、反向查询、发布后更新、真实 404、访问隔离等仍需未来在获授权的开发环境验证。本报告不把未跑过的测试写为通过。
