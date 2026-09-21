# PRODUCT-000 D32 Gate6交付包 V0.1

2026-09-20；作者`/root`，dispatch `PRODUCT-D32-G6-EXEC-01`。**READY_FOR_INDEPENDENT_REVIEW / NOT_YET_APPROVED_FOR_HANDOFF**。Gate4/5已关闭，本新增交付包仍须不同作者独立复核及总控关闭，不能凭草稿启动Gate8。唯一当前状态见`../PRODUCT-000_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md`。

## 1. 对象与授权

PRODUCT-000，EN，`/products/`，`site_scope=tio2-my`。用户授权Gate3→4→5→6→8→9，指定D32任务“01开发”（`01a0bd3a-a7ba-7632-bda0-fad444f654db`）实施；控制及最新决定见`../05_review/PRODUCT-000_D32_GATE3_GATE9_CONTROL_V0.1.md`。D23只作策划/只读QA。D16代码与旧验收不是D32通过证据。不授权建立Grade、Process、Application、Documents、Market或RFQ子页。

## 2. 内容与旧合同承接

完整Brief `../../../docs/page-briefs/PRODUCT-000_TITANIUM_DIOXIDE_PRODUCTS_BRIEF_V0.4.md`及同目录`PRODUCT-000_GATE7_HANDOFF_MANIFEST_V0.4.md`绑定的批准内容继续作为原件。旧交付的CMS/API/component V0.3、SEO/GEO V0.3、responsive/a11y V0.3、acceptance/blockers V0.3及site_scope V0.4按其语义承接；本轮新版仅覆盖开发归属、正式域名、明确预览Schema状态及当前共享Hero/Chrome。批准全文不在本包复制成竞争正文。

Gate5→6六项准入入口：`../05_review/PRODUCT-000_D32_GATE4_GATE5_CONTROLLER_CLOSURE_V0.1.md`，已核对原始授权、关闭、完整独立链、开放依赖及无源变化。视觉唯一入口`../05_review/PRODUCT-000_D32_GATE4_GATE5_HANDOFF_V0.1.md`；批准源`../04_planning/d32-gate4-v0.1/product-visual.html`，39881 bytes，SHA256 `bde34207290f7e6ed9064587af76bc6492df02f55b3b84c6b7991bfe68f4d235`，bundle `sha256:f76f37c6428d320dbb7f05db6976e4544bf55fcc6a639fc050bce26ed9db54ae`。该目录freeze/source-freeze/input-index/evidence-index提供原型依赖、品牌/共享输入、三端及状态图精确身份；直接浏览器打开HTML并保留D23相对目录即可查看。

有效审查链为Gate3首审V0.1/F01复验V0.2以及`../05_review/PRODUCT-000_D32_GATE5_INDEPENDENT_REVIEW_V0.1.md`完整内容/视觉首审；对应总控关闭记录均已成立。选择FAST_PATH：没有源变化或上游必修，不重新审图；本轮完整核对新增迁移、域名、预览Schema、共享实现和验收/依赖接口。域名与Schema差异已有明确用户决定，不另推定新事实。

## 3. D32接入差异与约束

开发先核对实际仓库和并行首页owner变化，再评估原型复用；具体CMS存储、路由、缓存和迁移方案由D32选择。本包不强制Next.js/API层。准备回执所见main `15759d5d596da9d7ef6b678ddbb192d38ac636e8`只是当时观察，不能替代开工前新基线。

| 条目 | 来源与要求 | 验收证据 |
|---|---|---|
| 数据迁移 | 01开发回执指出现有schema_version=1严格字段集；扩展产品内容不得使已有首页数据失效、覆盖CMS编辑或依赖重跑bootstrap | 既有数据升级、重复执行、失败/恢复的开发证据；首页内容前后及实际HTTP回归 |
| CMS编辑 | 旧CMS映射§1/6：管理批准语义内容；初始14摘要逐字相符，后续正文正常可编辑；不得用硬编码批准字串作为运行校验锁死编辑 | 后台字段/预览、受控编辑与恢复证据；正文和机器描述同源 |
| 唯一共享实现 | 当前Global Chrome、RootPageHero及Home owner；Products声明current，固定RFQ、生产Logo、菜单与Cookie共用 | 代码归属与真实首页/Products组装回归；不另建页面Header/Footer分叉 |
| 正式域名 | 最新用户决定`tio2products.com`覆盖旧绝对域名；正式canonical `https://tio2products.com/products/`，OG/Schema同源 | 共享站点URL配置、首页及Products机器输出；本地运行地址不能成为正式canonical，新旧域名不得混用 |
| 可见动作 | 14目录行及摘要始终保留，未就绪Grade仅省略动作；CR901分类独立于动作；Process2/1/0仅控制路由卡，Support3/2/1/0原子处理 | 就绪/未就绪的真实实现状态证据，无空壳/假目标；不能将规划模拟充作真实resolver |
| RFQ归因 | 固定干净`/request-a-quote/`；内部Page ID不进入公开URL/HTML/DOM/脚本状态。只有用户明确应用/型号选择才可成为预填；默认Coatings不是选择 | 默认态与主动选择态、干净URL、公开泄漏检查；接收端依赖单列，Hub不实现RFQ表单 |
| Schema预览过渡 | 用户决定PRODUCT-D32-SCHEMA-20260920：保留14有序身份，仅就绪项输出详情URL；不得通过@id绕过未就绪URL限制 | 零/部分/全就绪JSON-LD与可见动作一致；正式发布前完整URL再验收 |
| 独立证据 | 新Products证据独立保存，旧首页证据保留；旧/products/404断言在新组合变为200，其余目标保持真实状态 | 精确commit、工作区、数据/环境、Evidence Manifest、测试和可访问结果；不能沿用旧D16 PASS |

## 4. 沿用依赖与新增验收映射

旧稳定ID不重编：`PRODUCT-G6-B02`保留RFQ真实接收/发布依赖；`PRODUCT-G6-B03`保留14Grade及条件目标；`PRODUCT-G6-TDS-I02`摘要同源；`PRODUCT-G7-B05`robots/sitemap；`PRODUCT-G7-B06`scope隔离；`PRODUCT-G7-B07`响应/交互。D32实现本页的消费和失败行为，目标页仍归其owner；缺目标不自动否决策划或本页实现质量，但发布依赖不因本页通过而关闭。

本轮新增ID：`PRODUCT-D32-AC-MIGRATION`（兼容/幂等/恢复/保留编辑）、`PRODUCT-D32-AC-DOMAIN`（共享正式域名与首页回归）、`PRODUCT-D32-AC-SCHEMA-PREVIEW`（用户批准过渡状态）、`PRODUCT-D32-AC-CHROME-REGRESSION`（共享组装及首页回归）。完整可观察映射见§5；来源为§2原合同、§3开发准备回执及控制记录中用户决定。

响应运行按原合同1440/1024/768/390、键盘/焦点/44px/无裁切验证；不新增原合同未要求的实体设备、读屏软件或原生200%证据门槛。相应未测工具范围如实记录，不能写成实测。

## 5. 实际验收覆盖

以下条件均由Gate8提供精确候选证据、Gate9独立核验；失败交D32修复。外部目标依赖分别记录，不把Hub测试当作目标页已通过。

| ID | 前置/检查范围及预期 | 所需证据/失败边界 |
|---|---|---|
| PRODUCT-D32-AC-CONTENT | 正常/products/200；批准模块顺序、单H1、全部14目录及精确摘要、6/5/2/1组、五步骤/五FAQ、最终RFQ；30正向关系、六集8/8/7/4/2/1；无比较/扩张事实 | HTTP初始正文及真实DOM/交互与CMS mapping逐项核对；漏内容、错误关系、治理字段公开均不通过 |
| PRODUCT-G7-B07 | 四宽度1440/1024/768/390、完整长内容、至少44×44目标、键盘焦点、live结果、FAQ初始HTML/noJS、菜单/Cookie隔离及返回、Grade带型号可访问名称；390H1 36/700零字距自然四行 | 实际浏览器图、几何/可访问性树与操作证据；仅截图或零scrollWidth不能证明无裁切/可操作 |
| PRODUCT-G6-B03 | 未就绪Grade保留14行仅省略动作；Process2/1/0保留标题/引言/CR901分类，CR动作单独门禁；Support3/2/1/0无空壳 | 产品真实实现受控状态及route/scope证据；跨站fallback、删型号、假页、错误目标不通过；未建目标保留发布依赖 |
| PRODUCT-G6-B02 | 各处固定RFQ干净URL、无Contact替代；默认Coatings无推定预填，明确选择才传批准上下文 | 本页动作与负例；目标receiver未完成时标NOT_READY，不宣称真实接收已测/不隐去RFQ；发布依赖保留 |
| PRODUCT-G6-TDS-I02 | 初值精确14摘要，可见与可选Product.description同源 | HTML/JSON-LD/CMS字段映射；任何机器描述扩张或分叉不通过 |
| PRODUCT-D32-AC-SEO | 原SEO合同的精确Title/Meta/language、单H1；CollectionPage/BreadcrumbList/14项ItemList，optional FAQ/Product遵守原允许属性/关系；无未批准社交图 | 真实head/JSON-LD解析与可见内容比对；不得发Offer、库存/价格、比较等禁止项。域名与预览URL按新决定覆盖 |
| PRODUCT-D32-AC-SCHEMA-PREVIEW | 零/部分就绪时14身份/顺序保持，只输出已验证详情URL，无未就绪URI绕过；全就绪再恢复完整URL | 对照ready目标、JSON-LD和可见动作，独立状态负例；正式发布仍验证全部目标 |
| PRODUCT-G7-B05 | 当前候选noindex,nofollow、生产sitemap排除；query/选择不生成索引面 | HTML/header/robots/sitemap实际结果；上线/索引另按用户具体授权及依赖就绪处理 |
| PRODUCT-G7-B06 | 查询、关系、路由、媒体、菜单、SEO、缓存、表单消费在tio2-my；客户端scope不可越权，无另站fallback | 正/错/缺scope证据，冷暖缓存/失效按实际架构检验；不存在的服务不虚造，未实现能力如实列依赖；现有analytics隔离回归，不增设新跟踪系统 |
| PRODUCT-D32-AC-MIGRATION | 保留首页及CMS编辑；迁移兼容、幂等、失败可恢复；产品后台字段/预览可辨识，普通编辑后前台和机器字段同步 | 开发方受控数据测试与实际后台/HTTP证据；D23只读消费，不替开发修改CMS |
| PRODUCT-D32-AC-DOMAIN | 共享正式配置https://tio2products.com；首页与/products/的canonical/OG/Schema/绝对站内URL同源，无本地地址/旧域名混用 | 两页真实输出、配置/负例及测试证据；源域名变化不是品牌或scope变更 |
| PRODUCT-D32-AC-CHROME-REGRESSION | 单一共享Header/Footer/Menu/Cookie/RootPageHero；Home current与Products current各自正确，首页文字/结构/既有编辑完整 | 两页四宽度相关组装回归、共享实现归属；不要求重复验收未变首页全文，变化范围须明确 |

代码身份：最终规划HTML/CSS/JS及模拟状态为`PROTOTYPE_ONLY`，可供评估复用而非生产安全实现；批准正文、动作、关系、结构与最终视觉结果为`APPROVED_CONTRACT`。最终源/依赖精确冻结入口见§2，不得直接复制规划DATA中的内部Page ID/治理信息到公共payload。

Gate8交回遵守`../../../docs/architecture/GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md`及Schema V1.0：Evidence Manifest、实现/evidence/observed commit与工作区状态、WordPress构建/运行身份、准确scope/page/runtime、全部证据hash及接受条件映射；保持同一runtime直到Gate9 PASS或RETURN通知。旧合同中的Next build字段按WordPress等价身份如实填写，不伪造Next产物。D23运行validator及两轮preflight，工具局限单独记录，不能冒报PASS。

## 6. 自检、独立复核与交回边界

作者已双向核对§3–5新增要求来源及适用旧合同覆盖：内容/关系由原件消费、最终视觉精确引用、动作/依赖与机器过渡状态有来源、CMS/域名共享迁移由开发回执及用户决定支持。没有新增企业事实、子页或后台实现技术。预览缺目标及设备方法范围按准备审计与用户决定处理，不冒称运行通过。机器身份/链接检查存`PRODUCT-000_D32_GATE6_PACKAGE_CHECK_V0.1.json`；自检不代替独立复核。当前等待不同作者新包审查及本批内链规划核对，**未经关闭不得交开发**。

正式就绪后遵守Gate8→9机器交接合同，Gate9对真实D32候选执行。部署流程由“00首页开发”负责，其方案/环境以实际批准回执为准，不把建议写成已部署；本任务不自行启动Gate10。接收端未完成时分别报告本页实现质量、integration readiness和release，不让页面PASS掩盖RFQ/Grade发布依赖；也不把旧D16阻塞状态自动当作D32缺陷。
