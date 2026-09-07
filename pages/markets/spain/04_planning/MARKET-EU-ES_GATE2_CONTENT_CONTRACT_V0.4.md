# MARKET-EU-ES · Gate 2 完整内容与操作合同 V0.4

日期：2026-09-06。状态：`DRAFT_FOR_PROJECT_CONTROL_REVIEW`。本版为第二步C，与[B全文V0.2](MARKET-EU-ES_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md)共同提交独立审查；不自行批准全文或关闭Gate 2。

## 1. 当前输入与编辑责任

- 骨架：[A V0.2](MARKET-EU-ES_GATE2_CONTENT_SKELETON_V0.2.md)及第一步[C V0.2](MARKET-EU-ES_GATE2_CONTENT_CONTRACT_V0.2.md)，已按[父级条件确认记录V0.2](../05_review/MARKET-EU-ES_GATE2_SKELETON_PROJECT_CONTROL_REVIEW_V0.2.md)登记`CONTENT_SKELETON=USER_CONFIRMED`、`PROCEED_TO_GATE2_FULL_COPY=AUTHORIZED`。记录已实际读取。
- 上游事实：[Brief V0.2](../../../../docs/page-briefs/MARKET-EU-ES_SPAIN_BRIEF_V0.2.md)、[Gate 1批准组合V0.2](../MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md)、[研究V0.2](../01_research/MARKET-EU-ES_GATE1_RESEARCH_REPORT_V0.2.md)、[命题表V0.2](../01_research/MARKET-EU-ES_GATE1_CLAIM_EVIDENCE_REGISTER_V0.2.csv)。
- 骨架阶段用户反馈：[原文V0.1](../05_review/MARKET-EU-ES_GATE2_USER_FEEDBACK_V0.1.md)。四模块、ES-02实际决策内容、View Document Hub、自然Hero、COO、after-submit原句及无FAQ的方向继续有效。本次全文小修来源是2026-09-06当前对话用户对B V0.1的全文审核，见§9，不能误指为该骨架附件。
- B的`BUYER_COPY_START`与`BUYER_COPY_END`之间是页面专有可见文案唯一编辑源；文档控制和标记不渲染。C维护准确元数据和操作规则，以B标题/段落定位，不再复制全文。A保留骨架历史，不变成第二份正文。
- Header/Footer/Menu与法律内容引用共享owner，不在B重复维护。角色、C和B均不改变已批准上游事实、页面职责或阶段权限。

## 2. 页面身份及完整模块映射

| 项目 | 值 / 范围 |
|---|---|
| Page ID / 类型 | MARKET-EU-ES / Market procurement landing page |
| 语言 / 路由 | EN / `/markets/spain/` |
| Scope | `tio2-my`，所有内容/路由/查询/缓存/表单/媒体/SEO引用均遵守，不跨scope fallback |
| Primary | `titanium dioxide supplier spain` |
| Secondary | `tio2 supplier spain`；`malaysia titanium dioxide spain` |
| 排除与归属 | EU词归MARKET-EU-001；泛应用归Applications；Grade及产品选型归Products；详细政策归RES-TRADE-EU；本页只拥有Spain supplier/procurement |

| ID / 顺序 | B中的唯一位置 | 内容职责 |
|---|---|---|
| ES-01 / 1 | H1及Hero、其后两条CTA | 立即交代工业TiO2、Malaysia-origin、Spain采购目的市场；直接询价或看产品 |
| ES-02 / 2 | H2 `Review TiO2 for Your Application` | Coatings体系/最终用途；Plastics & Masterbatch的树脂/加工/制品和两条不同路径；让研究成为下一步决策 |
| ES-03 / 3 | H2 `Documents for Your Product Review` | 已知Grade后选择文件需求；COO申请可提供；申请与文件Hub解释入口分开 |
| ES-04 / 4 | H2 `Request a Quote for Delivery to Spain` | 采购准备、未知Grade选项、询价入口、一次after-submit说明及低权重EU链接 |

共享Header → B面包屑 → ES-01至ES-04 → 共享Footer。B只有一个页面H1；两个应用H3归于ES-02，不是新增模块或表单。无FAQ、国家行业概览、独立贸易/原产地模块、产品推荐表或内嵌申请。

## 3. 全部链接与行动合同

### 3.1 B中行动、准确目标与上下文

标记为“计划路径”的href用于完整网站稿表达正常导航，来自已登记Page ID；不是永久URL批准或live声明。最终绑定由对应owner批准合同控制，后续交付登记其确认，不向买家显示该内部标记。

| B位置 / 实际标签 | Page ID / 目标路径 | 行为与上下文 | 当前绑定范围 |
|---|---|---|---|
| ES-01、ES-04 / Request a Quote | CONV-RFQ `/request-a-quote/` | 进入RFQ；Spain交付国家可见可改，保留本页来源，不选择Grade/Application | 已批准接收语义；query格式由owner绑定，见§3.3 |
| ES-01、ES-02 / Explore Products | PRODUCT-000 `/products/` | 普通目录导航，无自动筛选、Grade或国家适用性 | 登记路由；无新参数 |
| ES-02 / TiO2 for Coatings | APP-COAT `/applications/titanium-dioxide-for-coatings/` | 普通用途深读，无预填 | 当前主表计划路径/PROVISIONAL_URL；相应owner确认永久绑定 |
| ES-02 / TiO2 for Plastics | APP-PLAS `/applications/titanium-dioxide-for-plastics/` | 与“直接在塑料成品中评估TiO2”相邻，无预填 | 当前主表计划路径/PROVISIONAL_URL；相应owner确认永久绑定 |
| ES-02 / TiO2 for Masterbatch | APP-MB `/applications/titanium-dioxide-for-masterbatch/` | 与“生产TiO2色母”相邻，无预填 | 当前主表计划路径/PROVISIONAL_URL；相应owner确认永久绑定 |
| ES-03 / Request Documents | CONV-DOC `/request-documents/` | 通用申请；买家选择Grade/文件类型。本页只有来源归因，不预选COO或其他字段 | 已批准接收语义，见§3.4 |
| ES-03 / View Document Hub | DOC-000 `/documents/` | 文件解释与导航，不是公开文件库存或下载 | 已登记Hub职责/路径；不附加文件筛选 |
| ES-04 / EU Procurement Overview | MARKET-EU-001 `/markets/european-union/` | 共同采购背景，低权重文字链接 | 已登记路由，无地区表单预填 |
| ES-04 / EU TiO2 Trade Update | RES-TRADE-EU `/resources/eu-titanium-dioxide-anti-dumping-duty/` | 政策详情，低权重文字链接 | 主表PLANNED_CONTENT路径；owner确认准确URL/当前内容后交付，不在本页声明政策结论 |

ES-01主Request a Quote、次Explore Products；ES-02产品/应用为文字链接；ES-03Request Documents是该需求下的局部行动，Hub为辅助；ES-04以Request a Quote收尾，EU文字不升级为并列主CTA。按钮/文字的视觉样式由Gate 3–5确定，但此行动层级不可被视觉稿改变。

本页不采集任何输入，亦无提交按钮；两处RFQ入口均导航到同一个接收页。查看某段文字不构成应用选择；点击文档通用入口不等于选择原产地文件。未新增Sample主/次行动，现有RFQ的低权重Sample链接继续归RFQ owner。

### 3.2 面包屑及共享导航

| 顺序 | B可见标签 | 路径 / 类型 |
|---|---|---|
| 1 | Home | `/`，链接 |
| 2 | Markets | `/markets/`，链接 |
| 3 | European Union | `/markets/european-union/`，链接 |
| 4 | Spain | 当前页文字，canonical为`https://tio2malaysia.com/markets/spain/` |

逻辑EU父级不改变Spain物理URL。Shared navigation key为Markets，按[Global Chrome V0.5](../../../../docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md)提供active和可访问语义；可见无CURRENT。共享固定RFQ、Header/Mobile Menu/Footer/法律区和[生产Logo](../../../../brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md)均引用owner基线。

### 3.3 RFQ精确接收语义

来源：[RFQ Gate 7 Manifest V1.2](../../../conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_MANIFEST_V1.2.md)沿用的[字段映射V1.0](../../../conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_CMS_API_COMPONENT_MAPPING_V1.0.md) §3、5–7及[责任修订V1.1](../../../conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_HANDOFF_PACKAGE_V1.1.md)。

- 本页语义输入是来源MARKET-EU-ES与明确页面目的国家Spain。接收`destination_country` / Destination Country可初始Spain，必须可见、可改；不能覆盖已修改值，不能当公司所在地。B的Delivery location in Spain提示本页采购场景，不把接收页交付国家锁死，也不新增“Spain only”限制。
- 来源`source_page_id`仅归因；不把研究中的source_page建议、payload字段名或market_id自动当URL query键。本C不创造任何query拼法。交付owner按其正式接口绑定，Gate 9核对实际接收和可编辑性。
- 本页没有Grade、Application或制品选择控件，不提供这类预填。RFQ现有单Grade、单Application、正数MT数量、Destination Country及可选Port/City、Additional Requirements合同继续有效。未知Grade的`Not sure / Need help`来自接收页真实选项。
- B的采购准备是填写建议；包装、时间、文件需求是已知时提供，不新增必填字段。其他Grade/需求可写已有Additional Requirements，不暗示多行报价或新增单/多值设计。
- B的Required or estimated quantity允许买家填实际或估算的数值；接收页仍使用既有`quantity_mt`、必填、有限数值且大于0、固定MT单位的同一输入。没有允许空值、非数值“unknown”、范围文本、新估算字段或放松校验，也不构成保证报价。
- B的after-submit原句只出现一次，准确表示提交请求后的人工审阅/联系；它不是接收成功状态实现，也不保证价格、供货、库存、配送或响应时限。
- 校验、失败、重试、服务不可用和值保留由RFQ owner实施，success只在明确收到请求后出现；本页不复制其全部状态文案，不改接收页隐私与联系字段。

### 3.4 Documents精确接收语义

来源：[CONV-DOC Gate 7 Manifest](../../../conversion/06_handoff/CONV-DOC_GATE7_CURRENT_HANDOFF_MANIFEST_V0.1.md)及[字段清单V0.1](../../../conversion/06_handoff/CONV-DOC_GATE7_CMS_API_COMPONENT_FIELD_INVENTORY_V0.1.md) §3–8，当前运行/阶段导航为[Gate 9 Manifest V0.4](../../../conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.4.md)。

- `country_region`为公司所在地；从Spain页进入不预填Spain。`source_context.page_id/market_id`只能归因，不能选择文件、判断适用范围或控制版本/可用性。
- 通用链接不预填Grade、Application或document_types，也不因相邻COO句预选`origin_supplier_qualification`。买家在目标页选择一个Grade与至少一个文件类型；单/多值是owner已有合同，本页不重新设计。
- B ES-03实际写明“a grade you are evaluating”和接收页选Grade/文件的步骤。目标页没有未知Grade选项；未知Grade可按ES-02/ES-04继续Products或RFQ，不承诺跳过必填。
- TDS、SDS、COA与origin是买家熟悉的请求类型简称，不是全量文件已存在的inventory。TDS对应既有technical_product类别，SDS对应safety，COA对应quality_coa，origin对应origin_supplier_qualification；这些是理解映射，不把表单选项改名为缩写、不新增taxonomy value，也不产生自动预选。已批准COO申请可提供正常呈现，不加内部hold或每票附证推论。
- 目标页收到请求仅供人工处理，不等于已批准/已发出/已下载；失败/重试保留输入由CONV-DOC维护，不把其状态复制到Spain页面。

## 4. 非表单状态、共享与后续依赖

| 情形 | 本页最终读者体验 / 文案来源 | 责任与验证 |
|---|---|---|
| 正常阅读/导航 | B完整四模块、正文和所有入口可用 | Gate 3–5按真实文案设计；Gate 9核对目标和返回路径 |
| 买家未定Grade | ES-02看产品或ES-04使用RFQ未知Grade选项；不强制先申请文件 | 本页已有正常文案，不新增错误提示/条件模块 |
| 只想了解文件类别 | View Document Hub进入解释导航 | 文档Hub负责类别解释；不声称公开下载 |
| 预填无效/过期或买家修改 | 接收页安全丢弃无效输入、保留有效/修改信息，不初次显示内部错误 | 各Conversion合同；本页无本地采集和持久化 |
| 下游未完成/未live | 设计保留完整网站正常入口，内部登记owner与验证依赖 | Gate 7登记、Gate 8实现、Gate 9/10验证；不公开“待就绪”、空卡或默认禁用按钮 |
| 目标表单提交失败/未确认 | 留在目标页依其真实失败/重试语义处理 | Conversion owner；不在Spain制造成功、Contact替代或客服电话 |
| 键盘focus/移动菜单 | 文案/链接标签不变；菜单使用共享名称、开关及focus规则 | Global Chrome + Gate 3–5；不复制页面私有菜单 |
| 无图片/图片尚未选定 | B全文和所有行动成立，无图片占位文字或空模块 | 图像由Gate 4–5决定；无媒体不删采购内容 |

本页没有库存表、搜索、筛选、折叠问答、表单或选择器，因此没有此类空结果/展开/提交状态文案。必要状态由已有页面行为决定，不为模板增造。

## 5. SEO与社交准确候选值

以下为本次全文候选精确值，审批结果由父级及用户记录。Markdown中的转义竖线只供表格显示；实际字符串为单个`|`。

| 字段 | 精确值 / 行为 | B可见依据 |
|---|---|---|
| title | `Titanium Dioxide Supplier for Spain \| TiO2 Malaysia` | ES-01 H1及共享品牌 |
| meta description | `Explore Malaysia-origin titanium dioxide for your project in Spain. Review product grades and document needs, then request a quote for your requirements.` | ES-01原产地/目的市场、ES-02产品、ES-03文件、ES-04询价 |
| canonical | `https://tio2malaysia.com/markets/spain/` | 登记URL及四级面包屑当前页 |
| html lang | `en` | B英文全文 |
| hreflang | 本页当前无alternate，不输出虚构ES版本 | 原Brief为EN单页 |
| og:title | 与本表title精确相同 | 同title，不另增营销主张 |
| og:description | 与本表meta description精确相同 | 同description |
| og:url | 与canonical精确相同 | clean URL |
| og:type | `website` | 页面为网站采购落地页 |
| og:site_name | `TiO2 Malaysia` | 共享品牌 |
| twitter:title | 与本表title精确相同 | 同title |
| twitter:description | 与本表meta description精确相同 | 同description |
| twitter:card | `summary`；如后续有批准大图，另按视觉/社交交付确认对应卡片 | 当前不制造图像存在事实 |
| og:image / twitter:image / image alt | 当前没有本页获准图像，字段不填占位值；Gate 4–5选择真实批准资产后补充 | 不借图片暗示Spain仓库、办公室或客户 |

索引合同：沿用批准骨架的INDEX方向，生产候选`index, follow`及clean canonical sitemap条目只在Gate 9/10验证且获发布/索引授权后启用；staging/预览使用`noindex, nofollow`。本次不修改robots、sitemap或公开索引。所有query/prefill/追踪值不生成Title、Meta、社交、Schema或canonical变体，也不进入sitemap。

## 6. GEO与Schema对应

### 6.1 可引用答案留在B，不另做FAQ

| 买家问题 | B唯一答案位置 | 机器表达上限 |
|---|---|---|
| 产品/原产地/目的市场是什么？ | ES-01 H1/Hero | 工业TiO2、Malaysia-origin、Spain采购；没有当地实体或库存 |
| 看产品前要说清什么？ | ES-02 Coatings、Plastics & Masterbatch | 体系/最终用途或树脂/加工/制品；普通产品/应用路径，不造型号适用关系 |
| 如何申请文件/原产地证书？ | ES-03完整段落、COO句、两条链接 | 已知Grade后选择所需文档；COO可按申请提供，不转化为认证/每票附证 |
| 如何询价、提交之后怎样？ | ES-04准备清单、未知Grade句、after-submit原句 | 数量/目的地/需求和人工回复；不是现货、报价/配送保证 |
| EU共性/政策详情在哪里？ | ES-04最后两条文字链接 | 指向owner；无本页当前税率/法规结论 |

### 6.2 页面级Schema字段来源

只采用`WebPage`与`BreadcrumbList`，不要求在本轮生成JSON-LD代码。GEO关系以可见正文和内链为准，不为了让机器“看懂”而添加正文不存在的事实。

| 节点 / 字段 | 准确来源与语义 |
|---|---|
| WebPage.name | B ES-01的H1；不把运营主体或关键词标签拼作页面标题 |
| WebPage.url | C §5 canonical |
| WebPage.description | C §5 meta description，与B四模块同义 |
| WebPage.inLanguage | `en` |
| WebPage.isPartOf | 引用本scope共享WebSite实体；既有ID由共享owner绑定，不在本页另造同名实体 |
| WebPage.publisher | 引用本scope共享Organization：IKHLAS TITANIUM (MALAYSIA) SDN. BHD.，按共享品牌/运营关系；不创建Spain组织 |
| WebPage.breadcrumb | 对应本页BreadcrumbList |
| BreadcrumbList.itemListElement | C §3.2四行，position 1–4；name与B逐字相同，item使用对应完整canonical URL |
| 日期 / 图像字段 | 未有发布日期或批准图像则不伪造；后续以真实批准内容和发布记录填值，不用G2制作日期假装datePublished |

可见语义中的Malaysia-origin不硬塞进WebPage不存在或含义不符的产地/认证字段；Spain不是Organization所在地。应用入口关系不变成Grade的适用性、适合性或排名边。COO可以同义表达在描述中，但本次精确description未包含该命题，不额外堆积。

不输出Product、Offer、AggregateOffer、availability、price、shipping、LocalBusiness、认证/海关待遇节点、FAQPage、QAPage或HowTo；也不输出表单值、市场预填、内部状态/来源ID。可见与机器文本引用同一内容源，避免互相扩张。

## 7. 事实、研究与本轮文案增补核对

| B位置 / 表达 | 权威来源 | 本轮采用与边界 |
|---|---|---|
| Hero工业产品、Spain采购/CTA | ES-D01、Brief V0.2 §3、主表 | 已批准方向及用户自然化首选句，不宣称量化转化最优 |
| Malaysia-origin | [全站授权V1.0](../../../../docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md) | 直接公开、机器同义；不重开Hold |
| Coatings体系和最终用途 | G1研究§3、用户反馈及已确认A ES-02 | V0.2全文按用户候选改为your coating system and end use及waterborne/solvent-borne表达；体系与用途不变，不增加行业或性能事实 |
| film/bag/profile/compound/masterbatch | G1 ANAIP原捕获P03b L61/92/112/116、用户候选及已确认A | 研究转成描述项目的例子；不是Spain份额、TiO2用量或型号保证 |
| 产品属性核对 | 已确认A、[PRODUCT V0.3审计](../../../products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md) | 引导各页查看批准属性；本页没有Grade列表、性能值、M-996/M-2196比较或新增taxonomy |
| 文件类别与选择要求 | CONV-DOC批准字段清单 §3–6 | 使用用户候选TDS/SDS/COA简称；不改变接收页taxonomy，不承诺每个Grade全部文件都有 |
| COO句 | ES-D02、[最新决定登记V1.5](../../../../docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.5.md) EG-002 | 原句不变，Spain范围；不扩每票附证、关税或海关接受 |
| 数量MT、公司/联系和未知Grade选项 | RFQ批准字段映射 §3–5 | 用户候选允许填写估算MT数量，并将交付地点提示聚焦Spain；正数必填校验与国家可编辑合同不变，联系信息措辞不新增字段 |
| after-submit | 用户反馈明确认可、A原句与RFQ人工回复语义 | 逐字保留，一次出现，避免多处重复解释 |
| 品牌/运营主体 | [PRD V0.4](../../../../docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md) §2与共享Chrome | 共享实体引用；无Spain本地机构/客户/仓库主张 |

本轮没有新增需用户确认的企业事实、当前法律/税率、库存、交期、价格或产品指标。没有重新抓取网页，不将上游研究日期或父级来源核查冒称为本轮独立研究。买家正文不复制来源台账；后续如新增事实或时效结论，另核准确命题。

## 8. 交付、未决项与停止

- 当前提交B V0.2 + C V0.4及全文执行自检，待父级独立审查和用户全文确认。`FULL_COPY_AND_MODULE_ORDER_CONFIRMED`尚未形成；Gate 2未关闭，Gate 3未授权。
- A/C V0.2保留为已确认骨架。C V0.4是完整合同候选，不通过文件名自动覆盖用户确认状态；当前Manifest由总控维护组合。
- Application/Trade的永久URL绑定、RFQ上下文序列化及运行效果是后续owner交付/实现/验收项；B href对应已登记计划路径，不升级其批准状态，也不向买家显示占位或隐藏正常导航。
- 图像/社交图、完整断点、focus/menu等在Gate 3–5按真实全文完成；本轮无图像或视觉占位。共享实体ID与Chrome实际组装由其owner合同绑定。
- 本页资料保存于Spain规划/审查目录；不改上游Brief、研究、旧版本、共享文件或开发项目。没有页面外发、发布或索引操作。

## 9. V0.4用户全文小修记录

日期：2026-09-06。来源：当前对话用户对B V0.1的全文审核，由父级逐字派发。用户结论为`PASS_WITH_MINOR_BUYER_COPY_REVISIONS`，明确本次修好后仅到`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`，不自动形成全文批准或Gate 2关闭。

| 修订对象 | 采用内容 / 结果 | 不改变的合同 |
|---|---|---|
| Coatings两句 | 按用户逐字候选写your coating system and end use、waterborne/solvent-borne及室内/户外需求 | 已确认应用方向、Grade核对路径不变 |
| Documents申请段 | 按用户候选使用TDS、SDS、COA或origin，保留目标表单选择Grade/文件的实际步骤 | 现有文件类型taxonomy、单Grade/多文件和无自动预选不变 |
| RFQ quantity | Required or estimated quantity in metric tonnes (MT). | 实际或估算均填现有正数MT字段；必填/数值校验/单位不变 |
| RFQ delivery | Delivery location in Spain, with a city, port or receiving point if known. | 说明本页目的地，国家仍可见可改；port/city仍为已知时提供，不向CONV-DOC公司国家传Spain |
| 联系信息 | 采用用户可选句company details and business contact information | 同一目标表单和联系用途，不新增联系字段或回应时限 |

四模块、Hero、Plastics两路径、View Document Hub、COO和after-submit原句、EU低权重链接均保留；B无FAQ或新表单。C的Title/Meta/OG/Twitter精确文本仍与当前B同义，不因局部润色改关键词、Schema范围或页面身份。

执行方提交B V0.2/C V0.4后停止，父级独立复核再决定是否达到待用户批准状态；不得把用户本次带修订的认可或执行自检当最终全文批准。旧B V0.1/C V0.3/自检V0.1及既有审查、Manifest完整保留，不回写。
