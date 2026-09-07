# MARKET-EU-ES · Gate 2 内容与操作合同 V0.1

日期：2026-09-06。状态：`DRAFT_FOR_PROJECT_CONTROL_REVIEW`。本文件是第一步C，只定义影响骨架判断的内容/操作/机器表达；与[A骨架](MARKET-EU-ES_GATE2_CONTENT_SKELETON_V0.1.md)配合。完整Buyer Clean Copy尚未制作，后续B是可见正文唯一编辑源。

## 1. 身份与继承

- Page ID：MARKET-EU-ES；EN；Market procurement landing page；URL `/markets/spain/`；`site_scope=tio2-my`。
- Primary：`titanium dioxide supplier spain`。Secondary：`tio2 supplier spain | malaysia titanium dioxide spain`。不转移EU、Grade、泛Application或Trade关键词。
- 上游：[当前Gate 1 Manifest V0.2](../MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md)、[Brief V0.2](../../../../docs/page-briefs/MARKET-EU-ES_SPAIN_BRIEF_V0.2.md)、[研究V0.2](../01_research/MARKET-EU-ES_GATE1_RESEARCH_REPORT_V0.2.md)、[命题CSV V0.2](../01_research/MARKET-EU-ES_GATE1_CLAIM_EVIDENCE_REGISTER_V0.2.csv)。
- ES-D01方向/主次CTA、ES-D02 Spain COO申请可提供均已批准；[最新决定登记V1.3](../../../../docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.3.md)延续同一Spain范围。此次任务授权见A文档头，Manifest/Status/Index由总控维护。

## 2. 行动和接收页上下文

### 2.1 当前入口合同

表中“目标URL”用于页面路由职责；未声称已上线。只消费本页需要的接收语义，字段单/多值、长度及提交状态由接收页owner维护。

| 位置 / 标签 | 目标 | 本页传递的意图 / 上下文 | 接收行为 |
|---|---|---|---|
| ES-01、ES-04 / Request a Quote | CONV-RFQ `/request-a-quote/` | Spain页面明确目的市场；允许按已批准country语义提供Spain作为可见可改的Destination Country，保留本页来源归因 | Grade/Application/Quantity及联系信息由买家输入；不从阅读提示自动推断。未定Grade可选`Not sure / Need help` |
| ES-01、ES-02 / Explore Products | PRODUCT-000 `/products/` | 浏览产品目录；不携带虚构的筛选、选中Grade或市场适用性 | Products负责目录、Grade和技术内容；本页不承诺点击即完成匹配 |
| ES-02 / TiO2 for Coatings | APP-COAT | 进一步了解涂料应用，普通页面导航，无预填 | 当前Page ID责任引用；不得将主表PROVISIONAL URL自行写成已批准永久合同 |
| ES-02 / TiO2 for Plastics；TiO2 for Masterbatch | APP-PLAS；APP-MB | 进一步了解用途，普通页面导航，无预填 | 同上；不把两类阅读提示转换成已选应用或Grade关系 |
| ES-03 / Request Documents | CONV-DOC `/request-documents/` | 通用文件申请，来源为Spain页；本页没有Grade或文件选择控件，故不预填Grade、文件类型、Application或Country/Region | 接收页选一个Grade及一个或多个文件类型；Spain仅作内部来源，不能决定文件版本/适用性/可用性 |
| ES-03 / Review Documents | DOC-000 `/documents/` | 了解文件种类与解释 | 普通导航；不暗示公开文件库存或下载 |
| ES-04辅助 / EU Procurement Overview | MARKET-EU-001 `/markets/european-union/` | EU共同采购背景 | 不复制EU内容，不转为Spain主叙事 |
| ES-04辅助 / EU TiO2 Trade Update | RES-TRADE-EU | 政策详情owner；主表计划路径`/resources/eu-titanium-dioxide-anti-dumping-duty/` | 后续按owner批准URL绑定；本页不提前发布政策结论或宣称目标已是最新 |

本页不添加独立Sample按钮。RFQ现有、批准的`Request a Sample` → `/request-sample/`低权重入口是该下游流程的职责；Spain不自行收集样品数量、运费或新增样品承诺。

### 2.2 RFQ精确语义与实现边界

依据[RFQ Gate 7 Manifest V1.2](../../../conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_MANIFEST_V1.2.md) §2沿用的[字段映射V1.0](../../../conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_CMS_API_COMPONENT_MAPPING_V1.0.md) §3/7，以及[责任修订V1.1](../../../conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_HANDOFF_PACKAGE_V1.1.md)：

- 正式字段语义是`destination_country` / `Destination Country`；Spain是交付国家，不是联系人公司所在地。允许预填且必须可见可改，不能覆盖买家已有修改。
- 来源语义是`source_page_id`，仅内部归因。Gate 1建议中的`source_page`不是本页新批准的URL键。
- 本骨架采用的交接值是“来自MARKET-EU-ES、交付国家初始Spain”；没有锁定URL query序列化、参数别名或存储结构。接收合同本身是实现中立语义，外部开发负责绑定；不得凭本文拼造`?country=ES`等链接。
- 现有RFQ的一Grade/一Application、MT数量、Destination Country及可选Port/City、Additional Requirements是接收页已批准合同，本页不重定基数。买家可在已有Additional Requirements补充其他Grade/需求，不暗示独立多行报价已经实现。
- 包装、期望时间、规格或文件要求只作为已知时可填写的信息；不新增上游字段，不把建议变成必填，不索要机密配方。
- 成功仅代表已收到并由团队回复；A的ES-04后续句依据接收页已批准成功语义，未承诺自动价格/库存/交期。

### 2.3 Documents精确语义与实际取舍

依据[CONV-DOC Gate 7批准Manifest](../../../conversion/06_handoff/CONV-DOC_GATE7_CURRENT_HANDOFF_MANIFEST_V0.1.md)及[字段清单](../../../conversion/06_handoff/CONV-DOC_GATE7_CMS_API_COMPONENT_FIELD_INVENTORY_V0.1.md) §3–6，结合[当前Gate 9入口V0.4](../../../conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.4.md)：

- `country_region`表示公司所在地；绝不因为来自Spain页填为Spain。Market来源仅可用`source_context.page_id/market_id`归因。
- 本页通用`Request Documents`没有选择COO，不能因相邻COO事实句自动预选`origin_supplier_qualification`。未来若要增加专属COO动作，须单独核对和批准具体动作/接收合同，不在本次暗加。
- 现有接收页要求选择Grade，未提供未知Grade选项。ES-03的文案须说明已知Grade后申请资料；未定Grade读者可继续Products或使用RFQ的`Not sure / Need help`。不能向他承诺在文件表单跳过Grade。
- TDS/SDS/COA/原产地资料只作为申请需求种类；选项不是文件已存在的证明。COO申请可提供事实继续采用ES-D02，不因通用接收页的review状态重新冻结。
- 本页没有提交行为，因此不再复制完整表单、错误、失败或成功状态。由接收页维护值保留、校验及receipt-only语义。

### 2.4 共享内容与状态

- Breadcrumb候选：`Home` → `/`；`Markets` → `/markets/`；`European Union` → `/markets/european-union/`；当前`Spain`。物理URL仍为平级`/markets/spain/`。
- 按[Global Chrome V0.5](../../../../docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md)：Markets为current navigation key；可见无CURRENT；固定RFQ；Header/Footer/Menu与法律区均引用owner，不复制设计或重写法律正文。Logo按[生产Manifest V1.0](../../../../brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md)。
- Spain本页只有阅读与导航，正常/键盘focus/移动菜单及可选无图状态留给Gate 3–5；没有空库存、文件availability hold或表单提交状态模块。
- 完整网站设计保留必要入口；owner尚未完成或未live是Gate 7登记、Gate 8实施、Gate 9验证和发布前解决的依赖，不能将它变成买家可见“待就绪”、空卡或默认隐藏入口。

## 3. SEO、GEO和Schema方向

这是本次骨架审阅候选，准确值由C维护；后续与批准B全文再核对，不改变主表归属。

| 项目 | 候选方向 / 值 |
|---|---|
| SEO Title | `Titanium Dioxide Supplier for Spain \| TiO2 Malaysia` |
| Meta Description | `Explore Malaysia-origin titanium dioxide for your project in Spain. Review product grades and document needs, then request a quote for your requirements.` |
| Canonical | `https://tio2malaysia.com/markets/spain/`，不含预填/追踪query |
| 语言 / hreflang | EN / `en`；当前无ES语言页，不新增语言URL或alternate |
| 索引方向 | 延续Brief的INDEX候选；生产index/follow和sitemap仅在Gate 9/10通过并获授权后生效；测试环境不开放索引 |
| 社交方向 | 与本页Title/Meta同义；图像和alt由视觉阶段明确，不能用当地仓库/客户图制造新事实 |
| Schema类型 | `WebPage` + `BreadcrumbList`；引用既有WebSite/Organization，不另造Spain LocalBusiness |
| 字段来源 | name/description来自批准标题与C元数据；url为clean canonical；inLanguage为en；breadcrumb与可见四级路径一致；publisher/isPartOf引用共享实体 |
| 实体关系 | TiO2 Malaysia / IKHLAS运营主体；Malaysia-origin TiO2；Spain采购目的市场；Products/Applications/文件/RFQ入口。没有国家专属Grade适用关系、库存、当地机构或贸易待遇关系 |

本版不使用FAQPage、HowTo、Product/Offer、证书认证节点、价格、availability或Shipping节点。COO批准可用于同义description或可见答案，但不把“按申请提供COO”编码成认证、每批附证或海关待遇。具体Schema实现不属于本步。

可引用答案直接嵌入现有模块，避免第二份FAQ：

| 买家问题 | 现有答案位置 | 回答边界 |
|---|---|---|
| 产品是什么、哪里原产？ | A ES-01 | 工业TiO2、Malaysia-origin、Spain采购目的市场 |
| 还没有Grade，应说明什么？ | A ES-02 + ES-04 | 涂料体系或树脂/加工/最终制品；可用RFQ未知Grade选项 |
| 原产地证书如何获取？ | A ES-03 | 已批准COO按申请提供；通用文件申请需Grade与文件需求，不承诺下载 |
| Spain询价还需哪些信息、之后怎样？ | A ES-04 | 数量、目的地及已知需求；收到后团队审阅并联系，不是报价自动批准 |
| EU政策细节去哪里？ | A ES-04辅助链接 | owner路径；不在Spain公布当前法律结论 |

## 4. 内容取舍的来源和事实边界

| 本页具体位置 / 命题 | 已实际读取的来源 | 采用方式 |
|---|---|---|
| ES-01工业供应/Spain方向/CTA | Brief V0.2 §3、研究V0.2 §3、ES-D01、主表Spain及相邻owner行 | 直接继承批准方向；不声称SERP量化最优 |
| ES-01 Malaysia-origin | [全站原产地授权V1.0](../../../../docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md)；ES-CL03 | 同义公开使用，不重启缺证Hold |
| ES-02涂料体系提示 | 研究V0.2 §3.2–3.3、[方法支持报告](../01_research/MARKET-EU-ES_SEARCH_INTENT_EVIDENCE_V0.1.md) S02；ES-CL08/14对应EMSA P02与Massó P08 | 用作买家应描述什么的研究推断；不转移竞品性能/服务能力 |
| ES-02包装膜/袋、建筑型材 | 方法S03与ANAIP P03b L52–116；ES-CL09 | 采用Spain研究所选择的最终制品示例；不声称独有/市场份额/所有制品均用TiO2 |
| ES-03 COO实际句 | ES-D02、ES-CL04、决定登记V1.3 EG-002 | Spain具体企业事实已批准；不扩每票附证或海关接受 |
| 文件类型和接收条件 | 上述CONV-DOC批准字段清单 §3–6 | 申请意图/实际操作，不是全量文件inventory |
| ES-04目的地、数量、包装/时间 | 研究Q04；RFQ批准字段及帮助语 | 买家需求提示，不是我方包装/运输/交期承诺 |
| 品牌/主体 | [PRD V0.4](../../../../docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md) §2 | 使用共享实体，不编造Spain分支 |
| Grade/Application/Process边界 | [PRODUCT V0.3矩阵](../../../products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv)及[统一审计](../../../products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md) | 本页没有行级推荐、性能或工艺比较；不从技术矩阵推导Spain适用性 |

未新增外部事实或实时法规结论，故没有为凑内容重跑Gate 1或重新搜索。外部来源是2026-09-06上游采集、经批准的定性研究输入，不冒称本执行再次访问原网站。全文阶段若增加行业事实句、法规/税率或具体技术指标，须针对新增命题读取/核验相应来源。

## 5. 已解决的规则冲突与后续项

| 项目 | 本次处理 | 影响与下一责任 |
|---|---|---|
| 旧Playbook无证据即不渲染、旧origin冻结 | 按根§2.6和最新决定继承Malaysia-origin及Spain COO批准 | 无新增企业事实问题；不回写历史 |
| 旧Playbook route不live自动隐藏；PRD早期内嵌询价模块 | 采用根完整网站原则及Spain批准Brief的独立RFQ路径 | 本页无内嵌表单；保留正常入口，后续验证跨页依赖 |
| 把研究source_page建议当URL协议 | 采用当前接收合同的语义字段；不锁未确认的URL键 | RFQ owner/外部开发在Gate 7–9绑定并验证可见可改Spain上下文 |
| Application/Trade路径仍有暂定标记 | 以既有Page ID建立内容关系，不提升为永久URL批准 | 总控/相应owner在准确链接合同交付前核对批准URL；不新增页面、不阻止本步内容判断 |
| 两类国家字段混淆风险 | RFQ交付国家可初始Spain；CONV-DOC公司所在地不预填 | 作为跨页验收点；不需要用户再次确认已存在的字段含义 |

本步唯一必需用户决定是A所示骨架和本C的方向。没有因库内未找到证据而禁止新的企业事实，没有虚构真实用户测试结果。完整B/C、外部路由与预填运行验证、后续Gate不在本次完成范围；自检和独立审查分开。
