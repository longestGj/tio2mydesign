# Poland Gate 6 开发交付包 V0.1

日期：2026-09-07；Package ID：`PL-G6-DELIVERY-01`。状态：`DRAFT_FOR_PROJECT_CONTROL_REVIEW`，编制完成，待独立包复核及用户批准。未发送开发任务，Gate 8–10 未获本次授权。

## 1. 接手入口与有效组合

本包定义必须兑现的内容、呈现、行为及验收结果。具体 WordPress 模型/API、Next.js 组件、分支和缓存实现由 Gate 8 核对现有集成基线后决定。目录 `06_handoff` 是交付资料目录；不建立 Gate 7。

| 来源 | 权威位置与职责 |
|---|---|
| S01 身份/上游批准 | [Manifest V0.19](../MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.19.md)锁定 Gate 1–5；本轮授权[PL-G6-START-01](../05_review/MARKET-EU-PL_GATE6_USER_AUTHORIZATION_V0.1.md)。页面唯一当前入口由后续同系列 Manifest 接替，本包不是第二份当前 Manifest |
| S02 任务/归属 | [Brief V0.2](../../../../docs/page-briefs/MARKET-EU-PL_POLAND_BRIEF_V0.2.md)、[Market Playbook](../../../../docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md)、[登记册](../../../../docs/architecture/PAGE_REGISTRY_V0.2.md) MARKET-EU-PL 行、[关键词主表](../../../../research/keyword/11_page_keyword_master.csv) Poland/EU/相邻国家/Products/Applications/Documents/Resources 行 |
| S03 结构与唯一正文 | [A V0.2](../04_planning/MARKET-EU-PL_GATE2_CONTENT_SKELETON_V0.2.md)仅控制确认的结构；[B V0.2](../04_planning/MARKET-EU-PL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md)是唯一正文编辑源；[C V0.4](../04_planning/MARKET-EU-PL_GATE2_CONTENT_CONTRACT_V0.4.md)控制行为与机器语义；[Gate 2批准](../05_review/MARKET-EU-PL_GATE2_FULL_COPY_USER_APPROVAL_AND_CLOSURE_V0.1.md)覆盖 B/C 内历史草稿状态。A 中较早 PL-05 示例不得覆盖 B 的最终句子 |
| S04 结构/视觉 | [Gate 3→4结构合同](../05_review/MARKET-EU-PL_GATE3_TO_GATE4_HANDOFF_V0.1.md)、[Gate 4 V0.2方向](../04_planning/gate4-v0.2/MARKET-EU-PL_GATE4_VISUAL_DIRECTION_AND_METHOD_REPORT_V0.2.md)、[Gate 5完整规格](../04_planning/gate5-v0.1/MARKET-EU-PL_GATE5_FULL_VISUAL_SPECIFICATION_V0.1.md)、[可执行策划源](../04_planning/gate5-v0.1/source/MARKET-EU-PL_GATE5_FULL_VISUAL_V0.1.html)、[正式图清单](../04_planning/gate5-v0.1/approval_core/export-inventory.json)、[Gate 5批准](../05_review/MARKET-EU-PL_GATE5_USER_APPROVAL_AND_CLOSURE_V0.1.md) |
| S05 品牌与共享 | [视觉标准](../../../../brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md)及[功能CTA增补](../../../../brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md)、[Chrome V0.5](../../../../docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md)、[生产Logo](../../../../brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md)、[Footer法律区](../../../../docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md)、[No-Terms决定](../../../../docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md) |
| S06 事实 | [原产地全站授权](../../../../docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md)、[决定登记V1.8](../../../../docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md) EG-001/002、[本页命题登记](../01_research/MARKET-EU-PL_GATE1_CLAIM_EVIDENCE_REGISTER_V0.2.csv) |
| S07 RFQ接收方 | [RFQ批准合同组合](../../../conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_MANIFEST_V1.2.md)、[精确字段/状态/预填](../../../conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_CMS_API_COMPONENT_MAPPING_V1.0.md)通过该组合继承；[较后receiver开放记录](../../../conversion/request-a-quote/05_review/CONV-RFQ_GATE8_RECEIVER_ENVIRONMENT_BLOCKER_RECORD_V1.0.md)说明历史包内 NOT_STARTED 不再代表当前进度 |
| S08 文件接收方 | [原批准合同组合](../../../conversion/06_handoff/CONV-DOC_GATE7_CURRENT_HANDOFF_MANIFEST_V0.1.md)、[字段合同](../../../conversion/06_handoff/CONV-DOC_GATE7_CMS_API_COMPONENT_FIELD_INVENTORY_V0.1.md)、[当前V0.4](../../../conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.4.md)。运行模型采用较后的 Free/browser-direct 决定；不恢复旧 server-only 描述 |
| S09 法律/Consent当前状态 | [Legal/Privacy V1.3](../../../legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md)、[Consent V1.1](../../../legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md)，保持 no_optional_analytics 与各自开放项 |
| S10 当前流程 | [Gate工作流V2.0](../../../../docs/architecture/GATE_WORKFLOW_V2.0.md)、[治理细则V1.1](../../../../docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.1.md)；只覆盖旧阶段解释，不改变 S03/S04 的批准成果 |

源身份见[本轮接收与身份记录](../05_review/gate6-v0.1/intake-baseline.json)。旧 Gate 5 冻结 `PL-G5-V01-SOURCE-01` 的源码、依赖和图不变；根规则/Context 已被流程负责人更新。本轮将当前治理作为明确覆盖层，不声称旧冻结50项全部相同，不改旧冻结 JSON。

页面：`MARKET-EU-PL`、EN、`/markets/poland/`、`site_scope=tio2-my`；唯一主词 `titanium dioxide supplier poland`。不新增 Polish 页面、URL、FAQ、型号推荐或国家适用关系。

## 2. 内容管理与呈现映射

下表是语义需求，不指定开发数据库字段名。WordPress 必须能够管理当前页面的完整批准内容、顺序、链接和元数据；Next.js 从同一有效 scoped 内容来源呈现可提取正文与机器语义。不得只交图片重录文字、硬编码另一套正文或因短字段限制截断 B。现有模型不能完整表示时由 Gate 8 提交兼容映射；改变内容须回到原批准流程。

| 位置 | 内容语义/来源 | 必须呈现的结果与空值处理 |
|---|---|---|
| 页面身份与面包屑 | S01–03：Page ID、语言、路径及 Home→Markets→European Union→Poland | 登记路径保持平级；四级内容关系不改变 URL。身份/必需面包屑缺失是数据缺口，不以别站内容回填 |
| PL-01 Hero | B 的 H1、一段正文、两项动作 | 保留工业原料、Malaysia origin、Poland采购语境；主 Request a Quote、次 Explore Products。必需内容缺失不得公开空壳或占位 |
| PL-02 Material | B 对应 H2 与正文 | 保留原料与含聚合物载体的成品白色母粒区别，不变成成品SKU |
| PL-03 Product Review | B 的 H2/引导、两个 H3/各自正文、一项 Products动作 | Coatings、Plastics and masterbatch 同层级；1440/768双列，390按批准顺序单列。阅读某段不自动选型号或用途 |
| PL-04 Documents | B 的 H2、三段、两个动作 | 已知型号申请→COO句→型号未知的替代路径保持上下文；不得遗漏任一限定句或改成公开下载 |
| PL-05 RFQ | B 的 H2、三段、两项动作 | 当前需求、型号未知、多型号说明及人工联系含义完整。不能采用A早期示例替换B最终句子 |
| 页面 metadata | C §5 的 Title、Description、Canonical、EN、索引方向、WebPage/BreadcrumbList | 完整字串/语义由C读取；正文与机器表达来自同一批准版本，具体字段名由开发决定 |
| 共享引用 | S05/S09；Markets导航键、全局Header/Footer/Logo、法律和Cookie功能 | 引用当前共享owner，不在Poland复制一套可独立编辑的共享正文或组件 |

本页没有表单、输入字段、技术表、FAQ/accordion、选择器或独立媒体。无对应字段长度/枚举/错误状态需要在本包新定。已批准无图方向完整成立，不增加工厂、波兰仓库、物流地图或证书图。公开内容数据不含 Gate/Finding/审批状态；内部 Page ID 与 site_scope 仅用于管理/正确隔离，不打印给买家。

## 3. 动作与接收结果

所有正文链接标签和目标以 B/C 为准；共享链接以 S05 为准。必需最终入口不得因目标尚未完成而隐藏、禁用、改到 Contact 或显示内部 readiness。

| 动作 | 目标与上下文 | 接收方边界 |
|---|---|---|
| 两处 Request a Quote | `/request-a-quote/`；从Poland启动报价。若实际传递Poland目的国，必须在接收页可见且可编辑；本包不创造query键、不把预填升级为必需功能 | CONV-RFQ：一个 Product / Grade，支持 `Not sure / Need help`；多型号信息进入已有 Additional Requirements；数量仍按接收方正数MT字段。Poland不是公司所在地或交付能力保证 |
| 两处 Explore Products | `/products/`，中性浏览 | PRODUCT-000负责型号事实；不带自动型号/应用/工艺或国别适用判断 |
| Request Documents | `/request-documents/`；不预选型号或文件类别 | CONV-DOC：一个 Product Grade、至少一个文件类型。Poland不填公司 Country / Region；COO句不自动选择文件。申请不代表文件获准/已提供 |
| View Document Hub | `/documents/` | DOC-000解释与导航，不变成文件下载库存 |
| 面包屑与最终 EU 链接 | `/`、`/markets/`、`/markets/european-union/` | 相应owner承接；本页不复制EU法规正文 |

页内无提交成功/错误状态。接收方失败/重试/不可用按 S07/S08；RFQ界面成功需要明确正向接收确认，HTTP 2xx 或模拟不能代替。Poland 的人工 review/contact 句不承诺报价、库存、响应时限、文件放行或订单接受。文件接收方已记录 provider accepted 与未确认邮箱收件，不能将两者合并为已实际收到。

## 4. 视觉、共享与机器语义

S04 的完整1440、768及390 logical @2x全页和全部适用状态是还原基准。容器1200/704/350px、H1 54/44/36px、自然长文高度、52/42/34px章节间距按批准规格；不把截图总高度当所有环境固定像素要求。Inter、Navy标题、`#334155`正文、Soft Hero、白色阅读区、`#008078`功能色及Deep Navy Footer按S04/S05。

Header 84/64px，Logo使用生产Manifest绑定SVG，compact Header为 Logo | RFQ | Menu；Markets当前状态、固定RFQ、无买家可见CURRENT。桌面与菜单各自最多一个current；关闭的compact菜单没有可访问导航，不为满足“恰好一个”暴露隐藏链接；菜单打开时活动导航按共享合同暴露唯一Markets。Header/Footer/法律/CMP由共享owner实现，Poland负责消费并证明组装。

全部正文、菜单、Cookie Settings、Hero键盘焦点和Documents辅助hover应完整可读、可操作；控制宽高至少44px，无碰撞/裁切/横向越界。菜单和Cookie界面键盘进入、循环、Escape与焦点返回须实际运行验证。共享行为跨断点的既有建议 `PL-G4-S01`仍为可选观察，不作为本轮新增硬门槛。

C §5精确Title/Description/Canonical，语言en，INDEX是目标方向。策划HTML的noindex,nofollow不等于生产索引要求；预览保护与最终robots/sitemap按环境、Gate9及Gate10分别控制。Social可直接复用C的Title/Description，不引入新图像能力声明；未批准页面专属社交图不从任意图片补齐。

Schema仅WebPage + BreadcrumbList，引用当前共享WebSite/Organization身份；不猜共享实体@id。不得生成LocalBusiness/Product/Offer/AggregateOffer/FAQPage/QAPage/HowTo及仓库、库存、认证、shipping节点。Malaysia-origin和COO按S06有效批准，不恢复旧Hold，也不扩展成每批证书、指定海关认可或税率结果。页面query、用户输入、内部审批信息不得进入metadata/Schema、公开日志或未经批准分析数据。

## 5. Gate 9 接受合同

Gate 8回执必须标明实现commit/ref及工作区状态、可访问环境、WordPress/API数据来源、语义至实际模型/组件的映射、适用测试/三端状态证据、差异、未测及回退。Gate 9锁定批准包与该实现组合后只读验收。表中G9-01等完整ID均为`PL-G9-xx`。

| ID / 来源 | 前置输入/状态 | 预期结果与所需证据 | 不通过条件 / owner |
|---|---|---|---|
| PL-G9-01 / S01–03,S10 | 可访问的准确实现版本及对应WordPress记录/API | 证明tio2-my的正确页面记录→API→初始HTML正文/页面；标题、全部段落、链接、5模块与B一致，完整需求可追溯。提供实际数据读取及DOM/渲染证据 | 本地JSON/截图替代WordPress链、错误版本、缺文案、额外承诺或硬编码分叉不能通过；Poland开发 |
| PL-G9-02 / S03,S04 | 1440/768/390，真实完整内容 | 全页可读图与实际几何检查覆盖至Footer；应用双列→单列、长Docs/RFQ限定与按钮关系正确；字体/Logo加载、无裁切/重叠/横向越界；触控宽高均≥44px | 只看Hero、把780物理宽当移动视口、DOM存在但文字不可见、截图未覆盖长内容不能通过；Poland开发 |
| PL-G9-03 / S04,S05 | 键盘、compact菜单和Cookie开/关、焦点/hover | 实际键盘记录与状态图，验证进入/循环/关闭/恢复、背景隔离、功能对比；200% UI zoom以及适用设备/辅助技术检查说明方法和未测，按共享合同验收 | 静态展开图不能代替操作；焦点丢失或不可达不能通过；Poland消费＋共享owner |
| PL-G9-04 / S03,S07 | 两个RFQ入口，型号未知/已知/多型号语境 | 真实导航抵达正确owner；如实现目的国预填需可见可改且不污染公司地点；未知型号可走现有选项，多型号用Additional Requirements。接收方适用状态证据按其合同 | 隐藏/改路/强迫已知型号、静默推定型号、假预填或界面成功冒充接收不能通过；Poland入口＋CONV-RFQ |
| PL-G9-05 / S03,S08 | 文件与Hub入口，known grade与多文件、未知grade路径 | 真实导航与接收方字段/基数证据；不带Poland公司位置或自动COO/型号。文件申请和公开下载语义区分 | 已知单型号要求被改成多型号、未知型号绕过必需字段、误称已有文件/邮箱收到不能通过；Poland入口＋CONV-DOC/DOC-000 |
| PL-G9-06 / S02,S03 | 正文所有导航、面包屑、共享导航 | 每个实际目标身份与内容匹配；Poland保留country supplier职责，EU/Products等各自承接；路由身份与HTTP结果一起核对 | 200页面其实错误owner/空壳、死链、别站fallback或重复国家路径不能通过；页面及目标owner |
| PL-G9-07 / S03,S06 | 初始HTML/head及渲染后JSON-LD，干净URL与query变体 | C中精确Title/Description、自引用Canonical、en；正确WebPage/BreadcrumbList及共享实体引用，机器和可见含义一致；变体不生成私密或错误Canonical/实体 | Schema比正文强、虚构本地企业/报价/库存、旧Hold删除批准事实、query泄漏不能通过；Poland＋共享SEO |
| PL-G9-08 / S03,S10 | preview与拟生产索引配置分别检查 | 预览受保护；最终robots、Canonical、sitemap候选一致且受Gate10控制。提供环境配置/响应头/head/sitemap的实际证据 | 将策划noindex直接当最终上线决定，或无授权开放索引不能通过；开发＋发布owner |
| PL-G9-09 / S05,S09 | 正确共享版本组装；法律链接/Cookie动作 | 共享Header/Footer/Logo映射与实际组装证据；固定RFQ、当前Markets、3法律链接、Cookie功能、无Terms/CURRENT。Consent及Privacy使用当前有效模型 | 页面自建分叉、漏法律/无效Cookie、恢复过时server-only说明不能通过；共享owner＋Poland消费 |
| PL-G9-10 / S10,根§3 | 正确/缺失/错误scope以及跨站访问、查询与缓存场景 | 实际配置/数据/响应及针对性负向证据覆盖查询、路由、缓存、菜单、SEO、表单、媒体；仅tio2-my有效内容，不向TIOVAR/冻结站泄露，不跨scope回退 | 只检HTML标记、只正向页面通过，或任一跨scope读取/泄露不能通过；开发集成owner |
| PL-G9-11 / S07–09 | 接收方及共享的准确当前版本/授权测试证据 | 明确路由可达、receiver可用、正向接收、实际邮箱、Privacy数据流/生产配置各自范围；可继承身份未变且仍适用的owner证据，不无故重做对外发送 | 用历史HTTP200、provider accepted、本地模拟或未经许可真实提交补齐缺口不能通过；接收/shared owner，G9独立核对 |
| PL-G9-12 / S10 | 本页集成改变的共享/同族面、所有开放项 | 开发方列影响范围，提供对应回归/差异证据和DEP关闭位置；没有改变的上游内容可按身份继承 | 必测核心未测却全面PASS、只自报测试通过、旧证据挂新commit不能通过；开发＋G9 |

PL-G9-01–10及本次集成适用的11–12是实际页面验收范围；缺少关键行为或数据链证据不能签全面通过。接收方当前合同允许后置的真实生产账户/法律复核/用户邮箱确认等，按下表单列发布控制，可保留已验证局部结论；不得把它们一律升级成所有页面G9阻塞，也不得写成已完成。

## 6. 开放项与责任矩阵

截至本包日期，以下当前状态来自D23记录；没有新探测外部系统。它们不否定已批准G1–5，也不是Poland内容禁令。

| ID | 未完成依赖与当前证据 | 实施owner / Poland责任 | 关闭依据与阶段 / 失败处置 |
|---|---|---|---|
| PL-DEP-01 | 正文和共享目标的当前运行组合未在本轮验证 | 各目标Page ID及Home/Global Chrome；Poland保留准确入口和组装 | PL-G9-04–06/09；Gate8集成、Gate9实际导航。必需目标不就绪不得完整发布，不隐藏或Contact回退 |
| PL-DEP-02 | RFQ receiver原记录环境阻塞OPEN；历史200不证明现在接收 | CONV-RFQ；Poland不建设receiver | S07 receiver证据＋PL-G9-04/11。失败按RFQ当前合同，缺必要receiver证据保持相关验收/发布阻塞 |
| PL-DEP-03 | CONV-DOC历史provider accepted；邮箱实际收件、生产WordPress及账户/Key绑定仍OPEN | CONV-DOC/运营owner；Poland仅入口与语义一致 | S08当前V0.4＋PL-G9-05/11，已通过局部结果保留；其生产发布控制到Gate10前关闭，不假称收件 |
| PL-DEP-04 | 共享法律/Consent生产配置、qualified法律/BM复核等依S09保持OPEN | Legal/Privacy、Consent、Home/Global Chrome各owner；Poland引用和集成 | PL-G9-03/09/11验证组装与实际数据流；S09允许后置项保留发布阻塞，未准可选analytics不启用 |
| PL-DEP-05 | Poland WordPress/API/Next.js、metadata/Schema/scope尚无本轮实现回执 | 授权后的Poland开发与共享集成owner | PL-G9-01/07/08/10/12；缺真实数据链或隔离证据保持相关验收不通过，不用策划HTML代替 |
| PL-DEP-06 | 真实设备、其他引擎、screen reader及UI zoom不在G5/本轮本地证据范围 | 开发提供适用验证，G9独立判断；shared owner处理共性问题 | PL-G9-02/03/12按批准a11y合同及实际实现风险确定必要覆盖；未测明确记录，不称跨设备全面通过 |
| PL-OBS-01 | 既有PL-G4-S01跨断点focus观察为可选建议 | shared owner评估；无新增批准要求 | 保留观察，不制造本页必修或阻断G6 |

本包没有新的企业事实待用户确认，也没有把receiver开放项宣布关闭。若出现内容/行为/共享要求变化，保留本包及原批准源，出新版本与影响说明后复核；仅普通技术绑定由Gate8决定。Gate9发现实现问题交开发修复，D23不改实现。

## 7. 交付状态与用户审阅对象

本轮拟请用户审阅：沿用已批准五模块、B V0.2/C V0.4、Gate5完整视觉；采用本包的来源与职责映射、PL-G9-01–12接受条件、PL-DEP-01–06和既有建议边界。没有新文案、视觉或页面架构变更。

独立包复核与最终总控结论保存于同页05_review；用户批准后才记录Gate6 APPROVED/CLOSED及APPROVED_FOR_HANDOFF。实际发往哪个开发任务、何时授权Gate8与回执另行记录，不把包文件存在视为已经交出。
