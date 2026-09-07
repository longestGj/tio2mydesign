# Spain Gate 6 引用式开发交付包 V0.1

2026-09-07。Package ID：`ES-G6-HANDOFF-01`。状态：`DRAFT_FOR_PROJECT_CONTROL_REVIEW`。新包自检不构成独立PASS；`ES-G6-F01=PENDING_ROOT_VERIFICATION`。用户尚未批准本包，未外发，Gate8–10未授权。本包是唯一开发交付入口，不是第二份当前Manifest或正文。

## 1. 组合与权威

路径以`D:/23MySec/`为根；本节标识别名供后文精确引用，逐文件当前字节/hash见[输入身份](../05_review/gate6-v0.1/current-input-identities.json)，包hash由[输出身份](../05_review/gate6-v0.1/output-identities.json)记录。

| 别名 | 原始来源 / 职责 |
|---|---|
| M | `pages/markets/spain/MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.12.md`，本轮接收Manifest；总控后续升版不改变本次输入历史 |
| Brief | `docs/page-briefs/MARKET-EU-ES_SPAIN_BRIEF_V0.2.md`，页面任务；G1研究及命题表在本页01_research |
| A | `pages/markets/spain/04_planning/MARKET-EU-ES_GATE2_CONTENT_SKELETON_V0.2.md`，模块顺序，非正文编辑源 |
| B | `pages/markets/spain/04_planning/MARKET-EU-ES_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`；SHA-256 `6cf3a3c91e24c4f36c189dcd37feb4d4487944f05513c8916ce61068db9738ed`；仅BUYER_COPY标记之间为唯一正文 |
| C | `pages/markets/spain/04_planning/MARKET-EU-ES_GATE2_CONTENT_CONTRACT_V0.4.md`；SHA-256 `1f82bfa4b394399a4bf04449390c149c7f0a569addb1c7e2f46453c5e56f7ced`；准确动作、元数据、Schema和条件 |
| G2批准 | `docs/architecture/GATE2_EIGHT_PAGE_USER_APPROVAL_AND_CLOSURE_V1.0.md`；覆盖A/B/C，不受源文档历史DRAFT状态影响 |
| G3 | `pages/markets/spain/04_planning/gate3-v0.1/MARKET-EU-ES_GATE3_RESPONSIVE_WIREFRAME_V0.1.html`；结构hash `d2fb26ae9ee230886d9cb31c401cc47d0deba3f030d578f16697c97a79a1ca64` |
| Visual | `pages/markets/spain/04_planning/gate5-v0.1/`；完整HTML、visual-direction.css、耐久dependencies、approval_core/source-freeze.json及export-inventory.json，14正式图 |
| Visual批准/审查 | 本页05_review的`MARKET-EU-ES_GATE5_USER_APPROVAL_AND_CLOSURE_V0.1.md`及`MARKET-EU-ES_GATE5_PROJECT_CONTROL_REVIEW_V0.1.md`；历史G5按工作流V3.1映射当前完整G4；F01限制明确见§5 |
| RFQ | `pages/conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_MANIFEST_V1.2.md`；字段/状态/预填取其继承的`CONV-RFQ_GATE7_CMS_API_COMPONENT_MAPPING_V1.0.md`，owner修订取`CONV-RFQ_GATE7_HANDOFF_PACKAGE_V1.1.md` |
| DOC | `pages/conversion/06_handoff/CONV-DOC_GATE7_CURRENT_HANDOFF_MANIFEST_V0.1.md`及`CONV-DOC_GATE7_CMS_API_COMPONENT_FIELD_INVENTORY_V0.1.md`；运行覆盖取`pages/conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.4.md`及其Free-plan runtime决定V0.1 |
| Chrome | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`（继承V0.4）；规划消费`docs/architecture/gate3-shared-consumer-v0.2/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md`，不是生产组件授权 |
| Brand | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md`、`TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md`及`brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` |
| Legal | `docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md`、`LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md`；`pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md`及`SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md` |
| Facts | `docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md`；决定登记V1.8 EG-001/002；`pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`及统一审计V0.3 |

本页身份：`MARKET-EU-ES`、EN/en、`/markets/spain/`、`site_scope=tio2-my`；主词`titanium dioxide supplier spain`，辅词与排除见C§2及实施主表。Europe/EU归EU页，泛用途归Applications，型号/选型归Products，详细贸易归RES-TRADE-EU。当前关键词状态与开发/发布状态分开。

## 2. 内容模型和呈现映射

WordPress需管理下面的内容语义与精确引用，API传达同一批准语义，Next.js按其正确呈现；不指定新post type、API键或组件路径。文本以B受控派生，不从PNG重录，不另建独立可编辑全文。内部批准/Finding/研究状态不进入公开内容。

| 顺序/对象 | 语义内容字段及来源 | 渲染/动作/条件空值 | Owner / 视觉 |
|---|---|---|---|
| Shared Header | Chrome导航与生产Logo引用，current=Markets | 固定RFQ；每表面至多一个aria-current，当前可访问表面一个，隐藏表面不聚焦；无CURRENT文字 | Home/Global Chrome；Visual全页/菜单 |
| Breadcrumb | B首行、C§3.2四项有序标签/URL | Home→Markets→European Union→Spain；Spain当前文字；不改物理URL | Spain消费；三端完整页 |
| ES-01 | B H1、Hero两句、两CTA标签/目标；C§2–3 | 单H1，主RFQ后次Products；RFQ见§3；无图最终分支，无媒体空框 | Spain；三端首屏 |
| ES-02 | B H2、两H3及全文、三应用路径、公共Products | D/T两组等权；390先Coatings后Plastics & Masterbatch；成品/色母两提示各邻接准确链接；普通导航，不产生选择事件 | Spain + Products/Applications；三端全页，768 application focus |
| ES-03 | B文件申请段、COO句、两入口 | COO保留为普通事实说明；已知Grade再选文档，申请与Hub区别保持；本页不存Grade/类型，不自动预选 | Spain + DOC/DOC-000；390 Hub hover/focus |
| ES-04 | B H2、四条有序准备项、未知Grade/联系句、RFQ、after-submit句、两EU链接 | 数量MT、交付Spain为准备语境；后续句一次；EU仅辅助文字；不新增表单/FAQ/样品主CTA | Spain + RFQ/EU/Trade；三端全页，390 related hover |
| Shared Footer/Cookie | Chrome/Legal全套owner引用 | 三法律链接及Cookie Settings功能；2026版权，无Terms；Cookie不是新SEO页面 | 共享owner；全页、Cookie/深色focus |

必需正文/标题/动作不得为空；内容配置缺项时记录实现缺陷并阻止相应验收/发布，不能生成占位、隐藏模块或跨scope回退。媒体/image alt/发布日期本页未有批准值，不输出占位或猜测；无图是批准正常分支。不得给B新增长度上限、必填表单、选择器、筛选/折叠状态、型号关系或比较表。

## 3. 行动及接收语义

全部14个main链接按C§3.1–3.2绑定，包含三条Breadcrumb、两RFQ、两Products、三个Application、Documents、Document Hub和两个EU路径；重复实例不可漏。规划href是登记/计划路径，永久绑定/真实可达仍由各owner确认；本页不私自改URL或抢owner职责。

**RFQ（两个正文入口）**：来源MARKET-EU-ES仅归因；明确目的国家Spain可作为Destination Country初值，可见、可改，不覆盖买家已修改值，不等于公司所在地。没有Grade/Application预填。技术query拼法、来源可信边界由接收owner按正式接口绑定；策划HTML的`__navigationIntents`、`destination_editable`不是新增生产query规范。公开可改参数不能作产品适配、文件资格或可信业务证明。

RFQ字段/类型/数量/必填/选项/长度/错误/状态完整继承RFQ映射§3–8，Spain不复制或更改它们：单Grade可选Not sure / Need help，单Application；quantity_mt必填有限正数，MT固定；destination_country必填1–100字符；Port/City可选；包装/时间/文件等使用既有Additional Requirements，不增加专门字段。空/无效预填按owner清除至中立状态、不首载报内部错误；有效/已改值保留，不能用隐藏归因满足必填。无效数量、空必填、错误及重试到目标页依owner处理。

**Request Documents（通用入口）**：只传source归因，不带Grade、Application、document_types或Spain公司国家；COO邻接不等于选择origin_supplier_qualification。目标country_region是公司所在地；一个Grade、至少一个Document Type；无未知Grade选项。TDS/SDS/COA/origin只是对technical_product/safety/quality_coa/origin_supplier_qualification的理解映射，不改名、不新taxonomy、不声称每Grade文件全备。DOC八字段、Other-only附加要求条件必填及500字符规则、预填review条件、失败/重试继承DOC清单§3–9。

本页无提交或持久化。真实receipt、失败与恢复由各Conversion owner处理；HTTP2xx/本地toast/视觉图不足以证明收到。RFQ需明确正向receiver acknowledgement；DOC当前Free-plan专门决定为HTTP200且JSON success=true，provider accepted与邮箱出现仍是不同证据。DOC历史清单的服务器校验描述不覆盖后来的browser-direct运行决定；不强加服务器代理、数据库持久化或新增endpoint。本包不触发真实表单测试。接收不可用按各owner既有状态保留输入，不发明Spain成功、Contact/email/phone替代。

## 4. 完整视觉和共享消费

完整批准Visual源HTML SHA-256 `26bbf086fddcacdb1b420ff65d5ed7a5ff3fb2699da1b358c33956d5519381ff`；freeze `6fec51baa3dfab072a9d93c394779389c1f1b1e74292c47d46b9b654be70d994`；export inventory `19e6c4c88d643786abcb9ce66b0a7d0f5d056c6107a4ce50a4e881e524e3bdeb`。三端正式full-page为1440×2673@1、768×2951@1、390 logical/780×7908@2；不是固定生产高度要求。

Visual目录approval_core保留3完整页、2菜单、3Cookie和6风险hover/focus；准确文件名及状态取export inventory。无因不重复整套视觉；开发仍须以实际实现验证1440/768/390的完整正文、邻接、命中区、菜单/对话框与焦点。Inter、Navy/白底、功能Teal #008078、首末实心RFQ、双应用关系、普通COO说明及低权重EU入口保持。生产Logo取Brand批准asset key；本地依赖副本为相同字节冻结证据，不创页面私有品牌。

Chrome/Cookie规划Consumer不等于生产实现。当前Consent为no_optional_analytics，若未来Google-active必须共享owner另获授权及专项验证。ES-G4-OBS01仍由Global Chrome owner评估跨桌面菜单关闭的焦点落点，Spain不分叉共享代码。原先未测的真实设备/触摸、辅助技术、其他引擎、原生200%缩放、forced-colors在Gate9实际适用范围验证；不把本轮静态继承写成完成。

## 5. SEO/GEO/Schema准确映射及F01处理

Title/meta description/OG/Twitter精确文本只取C§5；OG/title/description与Twitter同源；canonical为`https://tio2malaysia.com/markets/spain/`，lang=en，无ES语言alternate。预览noindex,nofollow；生产index,follow及clean sitemap仅在获Gate9/10验证与发布/索引授权后启用；所有query不生成机器语义或canonical/sitemap变体。无批准图像/日期不补社交图、datePublished或占位。

**C§6.2是生产Schema语义权威。** WebPage.name精确取B H1 `Titanium Dioxide Supplier for Spain`，不是SEO title；description/url/inLanguage取C；isPartOf引用本scope共享WebSite，publisher引用本scope共享Organization（IKHLAS TITANIUM (MALAYSIA) SDN. BHD.），具体ID由共享owner绑定，不猜@id；breadcrumb引用本页BreadcrumbList，后者四项name/order/item严格取C§3.2。不得创建Spain Organization/LocalBusiness，亦不输出Product/Offer/FAQPage或不存在的事实。

**ES-G6-F01差异不得移植**：批准Visual HTML head的WebPage.name多带` | TiO2 Malaysia`，且未输出isPartOf/publisher/breadcrumb三关联。保留原文件/原批准；其像素与本地状态仍是视觉证据，此处head不能作为生产Schema的完整payload直接复制。C原文不要求策划阶段生成JSON-LD代码，生产Schema本来待后续验证；旧ES-G5-PC-01的概括一致结论没有覆盖此精确偏差。本包以C准确映射纠正交付歧义，F01须root独立核对后关闭，不能由包自检关闭。

GEO可引用答案就是B四模块；Malaysia-origin与COO申请可提供继承有效用户批准，不扩大每票附证、关税/海关、当地库存/客户、型号排名/等效。无图/无FAQ不需为机器新增内容。EU Trade只是导流，不把其查询词变成本页现行政策结论。

## 6. site_scope七面及技术承接

| 面 | 实现结果要求 / Gate9反向输入 |
|---|---|
| 查询 | 先限定tio2-my再取页面/关系/共享数据；缺失或错误scope不能得到Malaysia或其他站fallback；错误scope请求不得返回本页数据 |
| 路由 | 注册Spain准确route/page/language；同slug其他scope不得串页，未知/缺失scope不跨站重定向补内容 |
| 缓存 | 页面、公共实体、metadata与失效作用域带scope；同slug/缓存命中/失效回归证据表明不混站 |
| 菜单 | 引用tio2-my的共享Chrome和Markets current；不从TIOVAR或冻结站取菜单，反向也不泄露Spain |
| SEO | SSR初始内容、canonical、OG、Schema、robots/sitemap读取同一scope语义；错误scope/query不污染 |
| 表单 | 目标RFQ/DOC保持本scope工作流和批准来源；跨scope/无效source不能选字段、改receiver或生成资格事实 |
| 媒体 | 只消费本scope批准生产Logo/字体等绑定；缺失无跨站资源替补，本页无业务图/社交占位 |

Gate8须先核对实际repo/workspace、已整合页面/共享组件/数据模型/API/缓存能力，再确定复用、扩展和必要新增；不能因陈旧checkout缺项另建平行系统。开发回执按同一ES-G9-ID绑定commit/ref、工作区状态、环境、CMS/API→Next实际映射、依赖版本、变更、回归/未测与回退。D23只定义结果和只读验收，不操作D16。

## 7. 依赖与处置

| ID | 来源 / Owner | 本页消费责任、当前证据及条件 | 接受条件 / 未满足处置 |
|---|---|---|---|
| ES-DEP-01 Routes | C§3–4；PRODUCT-000、APP-COAT/PLAS/MB、DOC-000、MARKET-000/EU、RES-TRADE-EU及共享链接各owner | 逐目标记录精确绑定/内容批准/环境可达；Application主表仍PROVISIONAL，Trade PLANNED；不得本页自行升永久URL。Trade owner需当前官方来源/更新时间 | ES-G9-03/10；保留正常最终入口，依赖未成立阻对应Gate9完整路径/发布；无隐藏、默认禁用、占位或Contact fallback |
| ES-DEP-02 RFQ | C§3.3；CONV-RFQ + verified receiver operational owner | 接受Spain可改值/来源并保护已有值、正常/无效/失败/重试；RFQ批准包提供语义，本轮没有实际实现证据 | ES-G9-04/06；owner实施与提供证据，未成立不放行路径/发布；Spain不实现RFQ |
| ES-DEP-03 DOC | C§3.4；CONV-DOC及receiver运营owner | 只来源归因；现有G9 V0.4记录browser-direct/provider accepted但邮箱未确认，本轮未重验且不可移挂Spain新集成 | ES-G9-05/06/10；区分provider与邮箱，保留原发布控制；不复制旧server-only模型 |
| ES-DEP-04 Chrome/Brand | Chrome/Brand；Home/Global Chrome/Brand | 共享Header/Footer/Menu/Logo消费，ES-G4-OBS01由该owner评估；规划字节相符不证明生产 | ES-G9-02/08/10；共享实现缺陷交owner，不页内分叉；观察本身不自动成为策划否决 |
| ES-DEP-05 Legal/Consent | Legal；Legal/Privacy及Shared Consent | Privacy EN/BM、Cookie Policy、Settings功能，No-Terms；消费当前no_optional_analytics及真实配置；保留法律限定审查、host/storage/network、retention、生产数据/账户等发布控制 | ES-G9-08/10；局部视觉不证明真实CMP/法律就绪，未就绪按原owner发布阻断，不能恢复Terms |
| ES-DEP-06 Runtime/Scope/Release | 工作流V3.1、C§5；Spain Gate8 + Global SEO/shared runtime + user | 精确实现/环境/数据链路、生产同scope实体ID、SEO输出与七面隔离；用户单独决定发布和索引 | ES-G9-01/07/09/11/12；实际未证即相应未通过，生产未授权保持关闭；无额外Spain数据库或存储需求 |

## 8. 稳定Gate9接受条件

同一ID由Gate8测试回执与Gate9独立只读证据继承；实现改变后按影响复验，旧证据需证明适用版本。各项均需真实指定实现证据；本包只是规格，不预签通过。

| ID / 来源 | 输入/前置状态与预期结果 | 必要实际证据 / 失败判定 | Owner / 阶段 |
|---|---|---|---|
| ES-G9-01 / B、C§2、M | 锁定实现、CMS/API源与clean Spain页；完整可提取正文、一个H1、四模块/两H3/四准备项、COO和after-submit各一次，14链接位置正确 | 实际初始HTML与渲染文本逐项对B、来源链/read-back；缺漏/改意/仅图片文本/内部标签泄漏即失败 | Spain G8，G9独立 |
| ES-G9-02 / G3、Visual、Brand | 1440/768/390完整页面和适用hover/focus；批准布局/顺序/全部邻接/无图分支与共享Logo成立 | 真实三端整页及必要可读片段、几何/命中区测量，必要状态实际操作；裁切、溢出、错误层级、控件宽高<44、假图暗示即失败；固定总页高非要求 | Spain + Chrome G8/9 |
| ES-G9-03 / C§3–4 | 从14个正文链接及共享入口走目标Page ID；Application/Trade owner批准绑定与当前内容 | 实际点击、最终URL/内容/返回阅读路径，owner批准及Trade日期/来源证据；死链/错scope/错目标/过时贸易目标或擅自隐藏失败 | 各route owner + Spain G8/9 |
| ES-G9-04 / C§3.3、RFQ§3–8 | 首次从两RFQ入口进入、目的地改为另一合法国家、返回再进入及无效/空/过期预填；Spain初值可改且不覆盖用户改值，无Grade/Application推断 | 真实UI操作、传输/接收映射的脱敏证据；只看query或LOCAL_NAVIGATION_INTENT_ONLY不算通过，锁Spain、写公司国家、覆盖已有值/隐藏填必填即失败 | RFQ owner + Spain G8/9 |
| ES-G9-05 / C§3.4、DOC§3–9 | 通用Documents进入；未选Grade/类型；选择一个Grade、多文件及Other-only | 实际可见字段、脱敏请求和验证/恢复证据；country_region不预填Spain、无COO自动选择；多Grade/未知Grade捷径、无类型通过、source决定文件范围即失败 | DOC owner + Spain G8/9 |
| ES-G9-06 / C§3.3–4、两receiver合同及DOC runtime决定 | 有效与无效目标请求、超时、模糊/非JSON/错误响应及重试；正向ack后才显示收到，失败保留输入/可恢复 | owner提供与精确实现绑定的真实接收语义及失败恢复证据；RFQ 2xx不足，DOC按200+success=true；provider accepted不等于邮箱出现；截图/自报PASS/本地模拟不能替代业务证据，虚假成功即失败 | 各receiver owner G8；G9；真实外发测试另依授权 |
| ES-G9-07 / C§5–6、F01 | clean及query URL、预览环境；生产配置审查在独立授权后；精确Title/Meta/OG/Twitter、canonical、lang、两Schema及共享实体引用 | 实际初始head/JSON-LD逐字段抓取、同scope实体绑定证据；name精确H1，isPartOf/publisher/breadcrumb不遗漏不猜ID；复制Visual错误name、缺关联、query变体、造图/日期/LocalBusiness或越权索引失败 | Spain + shared SEO G8/9；发布G10 |
| ES-G9-08 / Chrome/Legal/Consumer | 768/390菜单开关/Tab/ShiftTab/Escape/跨桌面、Cookie开关/焦点恢复；当页Markets语义 | 实际键盘/可访问树/焦点与共享引用证据；背景泄漏、隐藏表面可聚焦、重复current、Cookie不可重开/无焦点、Terms链接失败；ES-G4-OBS01定向记录owner处置，不假称已关闭 | Chrome/Consent owner G8/9 |
| ES-G9-09 / 根AGENTS、C§2 | 正确、错误、缺失scope与同slug/缓存暖冷/失效/跨站读取反向输入，覆盖§6七面 | 数据查询/API、渲染/网络、缓存键/失效及反向回归脱敏证据；只截图或仅正向页面不能证明隔离；任一跨scope内容/菜单/SEO/表单/媒体泄漏或fallback失败 | Spain/共享runtime G8，G9独立 |
| ES-G9-10 / §7依赖及owner批准源 | 六类依赖逐项核对owner、版本、readiness与接受证据；当前配置为no_optional_analytics | owner回执+集成证据+真实环境/配置；只有“ready”或历史别页PASS不能关闭Spain集成；发布控制开放不得标已发布，必需入口改隐藏失败 | 总控协调，owner G8/9，user G10 |
| ES-G9-11 / Market Playbook§12、Visual未测清单 | 真实设备/触摸、适用浏览器/辅助技术、200%缩放、forced-colors及reduced-motion按本页适用范围 | 实际设备/引擎/AT/状态记录；不能操作/看清、内容丢失或把Chrome静态证据说成已测失败；未测明确留项，不能暗转通过 | Spain/Chrome G8/9 |
| ES-G9-12 / 工作流V3.1§10 | 开发基线接手及变更/回退/共享既有页面影响确认 | commit/ref、工作区、环境、CMS→API→Next映射、逐AC测试、依赖版本/未测/回退与相邻跨scope回归；无法定位实际被验对象或用旧checkout另造系统即不接受回执 | 开发G8，总控/G9只读 |

## 9. 提交与停止

本次无B正文、事实、模块、URL、关键词或视觉改版；新增的是引用式开发映射、F01精确差异说明、六类依赖及12个接受条件。综合报告/方法报告/身份记录在05_review，作者自检单列。F01等待root独立核对处置，新包整体也等待root独立核对及用户批准。不存在已发送/已接收开发回执，不从包制作推导Gate8或发布授权。
