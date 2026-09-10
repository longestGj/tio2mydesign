# MARKET-BR-EN Gate 6 Handoff Package V0.2

日期：2026-09-08。Package ID：`BR-EN-G6-HANDOFF-02`。状态：**`READY_FOR_REVIEW / NOT_INDEPENDENTLY_APPROVED / NOT_SENT`**。

本文件是V0.2唯一开发交付入口候选。它引用批准正文、结构、视觉和共享owner，不是第二份正文或页面Manifest。作者为`/root/execute_brazil_en_gate6_v02`；实际派发追溯键同任务名。独立Reviewer尚未复核，Gate 6尚未关闭，Gate 8、外发、部署、发布及索引均未授权。

## 1. 权威组合与适用顺序

| Role | Exact authority |
|---|---|
| Current page pointer | `pages/markets/brazil/MARKET-BR-EN_CURRENT_GATE_BASELINE_MANIFEST_V0.11.md` / SHA-256 `FF81BD9274E5EB5DF2C0D70186A41352EB39990195E526F16FCC265313DE4A08` |
| Identity/keyword | `docs/architecture/PAGE_REGISTRY_V0.2.md`与`research/keyword/11_page_keyword_master.csv`的`MARKET-BR-EN`行 |
| Market contract / Brief | `docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md`；`docs/page-briefs/MARKET-BR-EN_BRAZIL_ENGLISH_BRIEF_V0.2.md` |
| Visible copy | `pages/markets/brazil/04_planning/MARKET-BR-EN_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` / `28F505FBD2CB5E77EA8BE0B6A12B03A94C68D057E97B7DB431AAA1635765A216`；唯一正文源 |
| Behavior / machine meaning | `pages/markets/brazil/04_planning/MARKET-BR-EN_GATE2_CONTENT_CONTRACT_V0.1.md` / `E686BD11BBE5C8ECDD2A2FA5DEAA05A2987F018CC8DBBB8E2CF022542A299D5B` |
| Gate 3 structure | `pages/markets/brazil/04_planning/gate3-en-v0.1/MARKET-BR-EN_GATE3_RESPONSIVE_WIREFRAME_V0.1.html` / `B1FEF66A5AD84D17B2FF32B8A1660232157883C0A410CBFE0E9B15CA752248E8` |
| Gate 4 visual source | `pages/markets/brazil/04_planning/gate4-en-v1.1/MARKET-BR-EN_GATE4_COMPLETE_VISUAL_V1.1.html` / 26312 bytes / `6827066A38C28B5E3FE990E0D53B8582CA215A1D5B481FFEACF18C74E3AC7707` |
| Freeze / evidence | `MARKET-BR-EN_GATE4_FREEZE_RECORD_V1.1.json`，freeze `BR-EN-G4-V11-SOURCE-01`；evidence index `9EC978F4E98B792250CA0EFDCB0BF7F7B617B68064A811B32B2E47B09E94C34D`；`approval_core/export-inventory.json` |
| Gate 4 review chain | 首审 `05_review/MARKET-BR-EN_GATE4_INDEPENDENT_REVIEW_V1.0/report.md` → V1.1响应 → 正确复审 `05_review/MARKET-BR-EN_GATE4_INDEPENDENT_REREVIEW_V1.1/report.md` / `01D24AB...F8D8A` → `MARKET-BR-EN_GATE4_PROJECT_CONTROL_REVIEW_V1.0.md` → `MARKET-BR-EN_GATE4_USER_APPROVAL_AND_CLOSURE_V1.0.md` |
| Gate 6 execution | `05_review/MARKET-BR-EN_GATE6_EXECUTION_REPORT_V0.2.md`；`BR-EN-G6-IR-01…05`作者接受条件已落实，待不同身份复核 |

较后用户决定覆盖同对象旧状态；B/C文件内旧draft标签不撤销`G2-8PAGE-APPROVAL-01`。V0.1 Gate 6包与自检只作历史候选/差异，不进入本包权威组合。

## 2. 准确共享与receiver owner引用

| Owner / dependency | Exact source consumed | Binding for this page |
|---|---|---|
| Global Chrome | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` / `GLOBAL-CHROME-005` / SHA-256 `CC236F...9F18`；Footer Legal Utility Addendum V1.0；No-Terms V1.0 | 共享Header/Footer/Menu；Markets current；固定RFQ；无可见`CURRENT`；无Terms；Cookie Settings为功能按钮 |
| Brand / Production SVG | `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` / SHA-256 `81B73A...E894` | Header使用`brand_logo_primary_horizontal`；Footer使用`brand_logo_reverse_monochrome`；由共享owner绑定，不建本页副本 |
| RFQ | `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE6_CURRENT_BASELINE_MANIFEST_V1.2.md`、`CONV-RFQ_GATE6_CMS_API_COMPONENT_FIELD_INVENTORY_V1.1.md`；较后实际hand-off由`CONV-RFQ_GATE8_USER_AUTHORIZATION_AND_HANDOFF_RECORD_V1.0.md`锁定V1.1包；receiver开放原ID见`CONV-RFQ_GATE8_RECEIVER_ENVIRONMENT_BLOCKER_RECORD_V1.0.md` | 本页只提供批准上下文并消费receiver；不实施表单/receiver |
| Request Documents | `pages/conversion/06_handoff/CONV-DOC_GATE7_CURRENT_HANDOFF_MANIFEST_V0.1.md`及`CONV-DOC_GATE7_CMS_API_COMPONENT_FIELD_INVENTORY_V0.1.md`；较后运行由`pages/conversion/05_review/CONV-DOC_WEB3FORMS_FREE_PLAN_RUNTIME_DECISION_V0.1.md`和`CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.4.md`覆盖旧server-only描述 | source-only，隐藏market不得填`Country / Region`；Grade和document type仍由buyer选择 |
| Legal / Privacy | `pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md`；三页架构按No-Terms V1.0 | 本页消费准确Privacy/Cookie routes；不生成页面私有policy或Terms |
| Shared Consent | `pages/legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md`；`pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_CONSENT_CMP_DATA_FLOW_CONTRACT_V0.1.md` | 当前release state严格为`no_optional_analytics`；本页只消费共享UI/state，不选择analytics-active分支 |
| Brazil Trade | `pages/resources/brazil-trade/RES-TRADE-BR_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md` | owner维护官方来源和新鲜度；Market只显示批准的dated handoff并链接 |

## 3. 原型、依赖与Production Logo语义

V1.1原型是可本地读取的单HTML源，CSS和JS内嵌；字体来自`../gate3-en-v0.1/dependencies/Inter-Variable.ttf`并附OFL。原型用绝对`file:///D:/23MySec/`引用两枚Logo；在开发环境必须换成共享资产解析，不保留本机路径。

Production SVG Manifest明确：`brand/logo/candidates/v0.1/`只是历史来源目录名，以下文件本身已晋升为批准生产payload，并非“仅供证据”的候选：

| Asset key | Approved path | SHA-256 | Production use |
|---|---|---|---|
| `brand_logo_primary_horizontal` | `brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg` | `EEED3A758E7AE1B847238D1C88E86EEE7A8E67B863969AF4D286747E9A72487C` | white/light Header；180×60 desktop，120×40 mobile minimum validated |
| `brand_logo_reverse_monochrome` | `brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg` | `7CFAEAFA02AC8469A006C9489DB2F92B15B2621E4151B04EFE1B30FC734C1B5E` | Deep Navy Footer；180×60 proof |

禁止重新绘制、转换成历史PNG、修改路径内容、压缩比例、把Logo解释为原产地/公司所有权/认证证据，或建立页面私有asset key。

原型中的Menu/Cookie脚本是可操作本地行为；末尾脚本拦截所有`a[href]`并把点击写入`window.localNavigation`，标记`LOCAL_SIMULATION`。因此原型不会真实导航或提交；本地记录不证明route、receiver、network、storage、privacy或生产Consent。Gate 8先核对现有共享实现，再评估复用或改造。

## 4. 内容、模块与层映射

### 4.1 模块顺序

WordPress管理B的语义内容；公开API/view model完整传递同一批准记录；Next.js SSR及hydrated结果依次呈现：

1. Shared Header。
2. Breadcrumb `Home / Markets / Brazil`。
3. `BR-EN-01` Hero。
4. `BR-EN-02` Review Products for Your Application，按Coatings → Plastics → Masterbatch及中性Product Hub说明。
5. `BR-EN-03` Documents for Product Review。
6. `BR-EN-04` Check Current Brazil Trade Information。
7. `BR-EN-05` Prepare a Quotation Request for Brazil。
8. Shared Footer和Cookie Settings shared control。

页面无批准业务图片、表单、筛选、FAQ、页面内提交/成功状态或Brazil当地实体模块；空缺不得用占位、假图、内部状态或从其他scope回退补齐。

### 4.2 逐实例动作

| Instance | Target / production context |
|---|---|
| Header fixed RFQ、Mobile Menu RFQ、Footer RFQ | `/request-a-quote/`；共享Global Chrome owner动作，本页不得私自添加Brazil prefill |
| Hero `Request a Quote` | `/request-a-quote/`；内部`source_page_id=MARKET-BR-EN`；`destination_country=Brazil`为可见可改初值 |
| Hero `Explore Products`、module 2 `Explore Product Grades` | `/products/`；中性Product Hub，无Brazil suitability/Grade/Application预选 |
| Coatings / Plastics / Masterbatch | `/applications/titanium-dioxide-for-coatings/`、`/applications/titanium-dioxide-for-plastics/`、`/applications/titanium-dioxide-for-masterbatch/`；只建立评估路径，不创建Brazil推荐、优先级或适配事实 |
| Documents内联`Product Hub` | `/products/`；中性 |
| Documents内联`quotation request` | `/request-a-quote/`；只携带批准的source归因；C没有为此实例批准Brazil destination预填，不从原型的全局点击模拟扩张 |
| `Request Documents` | `/request-documents/`；只携带内部source归因 |
| `View Document Hub` | `/documents/`；信息/导航页，不是公开文件库存 |
| Brazil Trade Update | `/resources/brazil-titanium-dioxide-anti-dumping-duty/`；owner/日期导流，不导入当前措施结论 |
| Final `Request a Quote` | 与Hero页面CTA相同：source＋可见可改Brazil目的地初值 |
| Footer Privacy EN/BM、Cookie Policy、Cookie Settings | 三个批准route＋一个共享功能按钮；无Terms |

### 4.3 响应、视觉与可访问性

1440、768、390完整页面及Documents focus、768/390 Menu和三端Cookie状态以V1.1 evidence index/export inventory为批准视觉依据。生产高度可随实现变化，但模块顺序、邻接、层级、三卡到单列关系、可读性、44×44 CSS px最低命中区、批准的hover/focus含义和shared-owner样式不得改变。

上游实际证明限于Chrome本地原型和指定截图/操作。native 200% zoom、reduced-motion生产行为、真实设备、屏幕阅读器、non-Chromium、实际Cookie技术均留给Gate 8/9，不能被上游PASS或截图静默消除。

### 4.4 CMS/API/Next.js与scope

Gate 8核对现有架构后决定post type、字段名、API shape、组件路径和缓存实现；本包不指定这些技术选择。必须管理/呈现页面身份、B的完整语义、C的metadata/Schema与动作上下文、同scope关系和共享owner引用。查询、路由、缓存、菜单、SEO、表单、媒体、receiver上下文及共享状态都先过滤`site_scope=tio2-my`；缺失/错误/外国scope不从TIOVAR、冻结站点或其他scope回退。

## 5. 动作、receiver与失败语义

### 5.1 RFQ

- Hero和Final RFQ CTA传`source_page_id=MARKET-BR-EN`及可见可改`destination_country=Brazil`初值；返回或buyer修改后不得覆盖。
- 不推断Grade、Application、specification、quantity、city/port、receiving point。Product / Grade允许`Not sure / Need help`，Application允许`Other / Not sure`；其他候选Grade可作为非机密文本进入Additional Requirements。
- Documents内联RFQ链接不因共享href自动获得Hero/Final的destination prefill；shared Chrome RFQ也不由本页添加页面私有context。
- 当前原ID `CONV-RFQ-G8-RECEIVER-ENV-BLOCKER-01`保持OPEN：历史HTTP 200只证明route响应，receiver环境不可用；只有明确正向receiver receipt可显示成功。timeout、network/server、malformed/ambiguous为未确认/失败，保留值并允许重试；不回退Contact、未验证邮箱或电话。

### 5.2 Request Documents

- 只传`source_context.page_id=MARKET-BR-EN`；不填`source_context.market_id`到可见字段，不预选Grade、document types、Application或公司`Country / Region`。
- receiver要求一个可见Grade和至少一个Document Type；隐藏source不能满足必填。补充Grade只能写入Additional Requirements，不能单独绑定document types；需独立绑定时另交请求。
- 当前Web3Forms Free/browser-direct是较后运行决定。Provider accepted与邮箱出现分开；`CONV_DOC_MAILBOX_RECEIPT_USER_CONFIRMATION=OPEN`。正向成功必须按当前owner合同解析，timeout/ambiguous不能冒充成功。

### 5.3 本页职责

本页只生成导航和批准上下文，不拥有任何表单、receiver、凭证、持久化、dedup、邮箱或共享CMP。Gate 8不得为满足本页而复制RFQ/DOC/Legal/Consent实现。

## 6. SEO、GEO、Schema与BR-EN-G6-F01

| Surface | Production requirement |
|---|---|
| Title | `Titanium Dioxide Supplier Brazil | TiO2 Malaysia` |
| Meta description | `Explore Malaysia-origin industrial titanium dioxide Grades for coatings, plastics and masterbatch production in Brazil. Request documents or request a quote.` |
| Canonical | `https://tio2malaysia.com/markets/brazil/`；query、source、tracking、fragment不产生变体 |
| Language | `en` |
| Visible H1 / WebPage name | `Titanium Dioxide Supplier for Brazil`；生产`WebPage.name`与可见H1同义，不直接复制原型SEO Title作为name |
| Schema | `WebPage`＋`BreadcrumbList`，并引用同scope共享`WebSite`与IKHLAS `Organization`；WebPage的breadcrumb关系指向可见三层BreadcrumbList |
| Prohibited | `LocalBusiness`、`Product`、`Offer`、`FAQPage`、`HowTo`、价格、税率、认证、文件库存/可用性、运输、库存、Brazil实体或current trade outcome |

可见GEO关系仅为：IKHLAS TITANIUM (MALAYSIA) SDN. BHD.提供Malaysia-origin industrial titanium dioxide，供Brazil采购与技术评估；三Application是评估上下文，不是Brazil推荐。`A Certificate of Origin is available upon request.`不扩张为每票提供、海关接受、优惠待遇或税率结果。

`BR-EN-G6-F01 = DELIVERY_MAPPING_CLARIFICATION_SATISFIED_IN_V0.2`：生产映射已纠正原型示例head的name/共享关系不足；原型未改、生产未验证，`BR-EN-G9-07`仍须检查实际SSR/JSON-LD。该关闭对象只限交付合同澄清。

Index/sitemap/alternate/robots production activation只在Gate 9验证并获Gate 10/发布索引授权后进行。PT-BR route/hreflang不由本包批准或推断。

## 7. 依赖、原ID与失败位置

| ID | Source / original control | Owner / current state | Failure boundary and mapped AC |
|---|---|---|---|
| `BR-EN-DEP-01` | B/C全部目标route及Global Chrome legal routes | 各Page ID/Global Chrome owner | 死链、错页、跨scope、隐藏或fallback阻断对应路径及发布；`G9-03/08/09` |
| `BR-EN-DEP-02` | `CONV-RFQ-G8-RECEIVER-ENV-BLOCKER-01`；RFQ V1.2/V1.1＋Gate8 handoff record | CONV-RFQ；receiver环境阻塞OPEN | Brazil上下文、真实receipt及失败恢复未证实则`G9-04/06`不通过；本页不修receiver |
| `BR-EN-DEP-03` | CONV-DOC handoff inventory；Free-plan decision；Gate9 Manifest V0.4；`CONV_DOC_MAILBOX_RECEIPT_USER_CONFIRMATION=OPEN` | CONV-DOC；provider accepted，邮箱确认/生产控制OPEN | source-only、校验、正向receipt或Privacy parity错误则`G9-05/06/09`不通过 |
| `BR-EN-DEP-04` | RES-TRADE-BR V0.7及B/C的`6 September 2026` handoff | RES-TRADE-BR owner；发布时freshness待验证 | 目标、日期或当前官方来源不一致阻断Trade模块/发布；`G9-11`；开发不得静默把日期改成今天 |
| `BR-EN-DEP-05` | Global Chrome V0.5、Footer Legal V1.0、No-Terms V1.0、Legal V1.3、SHARED-CONSENT Gate9 V1.1、CMP V0.1、Production SVG V1.0 | shared owners；current consent state=`no_optional_analytics` | 共享分叉、Terms、Logo误绑、Cookie不可重开、optional analytics tag/network/storage或privacy泄漏使`G9-08/09`不通过并阻发布 |
| `BR-EN-DEP-06` | Gate工作流/Gate6合同/独立开发回执 | Gate8实现、Gate9只读验收、Gate10发布owner | 无精确commit/ref、环境、数据链或scope证据则`G9-12`及关联AC不通过；未授权不得外发/实现/发布 |

## 8. 稳定 Gate 9 接受条件

以下ID贯穿Gate 6→8→9。Gate 8回执必须绑定指定commit/ref、工作区状态、环境、实现/数据来源、实际证据、差异和未测；Gate 9读取同一实现独立判断。

| ID | Input / state → observable result | Required evidence | Failure |
|---|---|---|---|
| `BR-EN-G9-01` | 指定实现以B为唯一正文，SSR/渲染含单H1、五模块、逐实例动作，无内部治理字样 | CMS/API readback、SSR初始HTML、渲染文本及B双向diff | 漏文、改意、图片文字代替、内部状态、第二正文源 |
| `BR-EN-G9-02` | 1440/768/390及中间宽度、native 200% zoom、`prefers-reduced-motion: reduce`下，层级/邻接/重排/可读性稳定；无水平溢出、裁切、遮挡或隐藏面focus leak；命中区≥44×44 CSS px，文字与焦点/控件对比满足批准标准 | 实际浏览器几何/样式、整页与受影响状态、键盘focus测量；记录浏览器、zoom、DPR、OS和motion preference。至少一台真实touch设备验证操作/裁切；至少一套非Chromium环境做关联回归 | 只交三张规划图、缩放溢出、动效未禁、对比/焦点不可见、触控/非Chromium缺陷；必要环境未测则本AC保持`NOT_VERIFIED` |
| `BR-EN-G9-03` | 所有正文及共享链接逐实例到准确同scope owner，browser back/return可用 | 点击每个实例、最终URL/Page ID/content、无跨scope网络/数据证据 | 死链、错页、错误context、隐藏/禁用/Contact fallback、共享和页面实例混为同一测试 |
| `BR-EN-G9-04` | fresh/return/已修改/无效输入下，Hero/Final的Brazil仅为可见可改目的地初值；Documents内联及shared RFQ不被本页扩张prefill | 脱敏UI/query/view-model/receiver request；分别测试四类RFQ实例及修改后返回 | 锁定/覆盖buyer值、把Brazil写公司country、推断Grade/Application/quantity/port、全href统一注入未批准context |
| `BR-EN-G9-05` | Request Documents只接收source attribution；可见Grade和至少一个type仍必填；Country/Application不预填 | 目标UI、prefill normalization、client/server validation及脱敏request | source满足必填、Brazil填company country、自动选COO/type/Grade、隐藏市场改变scope/applicability |
| `BR-EN-G9-06` | RFQ/DOC对validation、正向receipt、timeout、network/server、malformed/ambiguous、retry按各owner当前合同分层 | 与指定实现绑定的脱敏receiver证据；provider、邮箱和UI层次分别记录 | 仅2xx/toast/self-report当成功；provider accepted冒充邮箱；失败丢值或回退未验证Contact/邮箱/电话 |
| `BR-EN-G9-07` | clean/query/preview的title/meta/canonical/lang和JSON-LD满足§6；预览不可索引；同scope共享关系完整 | 抓取SSR head、hydrated DOM和JSON-LD逐字段；canonical/query及禁止类型扫描 | `WebPage.name`错误、缺breadcrumb/WebSite/Organization关系、Schema强于可见内容、query变体、HowTo/FAQ/Offer等禁用节点、越权index |
| `BR-EN-G9-08` | Header/Menu/Footer/Legal/Cookie/Logo消费共享owner：Markets current、每可访问surface一处`aria-current`、无可见CURRENT、固定RFQ、无Terms、正确生产SVG；Cookie Settings在current state打开最小对话框、命名/描述/focus trap/Escape/return正确；200% zoom和真实辅助技术可操作 | 共享版本/readback、DOM与accessibility tree、键盘与实际screen-reader/browser组合、focus顺序、Logo路径/hash、200% zoom操作；记录实际AT/OS/browser | 页面私有fork、隐藏surface可聚焦/被宣读、重复current、错Logo、Terms、Cookie不可重开/焦点丢失；无实际AT证据则AT部分`NOT_VERIFIED` |
| `BR-EN-G9-09` | 正确/错误/缺失scope下，query/route/cache/menu/SEO/form/media/receiver/Consent均限定`tio2-my`。当前`no_optional_analytics`时无首访Analytics请求、无GA4/GTM/Google Ads/Vercel Analytics脚本或网络、无页面可选analytics事件/存储；Settings仅最小状态。不得把source、浏览历史或RFQ/DOC值/错误送analytics/log/ad；不得读取TITAN或外scope存储fallback | 网络HAR/request inventory、script/resource DOM、cookie/local/session storage前后快照、shared consent snapshot、dataLayer/event/log检查、Privacy/technology inventory parity；fresh profile＋既有/invalid/foreign-scope storage cases | 任一optional analytics请求/tag、未批准选择、`tio2_my_consent_v1`或其他可选记录被本页错误写入、跨scope/TITAN读取、source/form数据进入analytics、Privacy披露不一致。未来Google-active不能用本包通过，须另有授权及完整重验 |
| `BR-EN-G9-10` | 可见、metadata、Schema、ALT及API只表达批准Malaysia origin、精确COO和中性三Application关系 | 页面/API/Schema/媒体扫描与批准决定对照 | Brazil实体/库存/office、Grade推荐、每票COO、文件库存/认证、海关/税率/运输结论 |
| `BR-EN-G9-11` | 发布候选的Trade link可达同scope owner，Market显示日期与owner当前批准源一致，正式发布前由owner完成当前官方来源检查 | RES-TRADE-BR当前Manifest/来源记录、页面日期、点击目标及检查日期 | 过期/错目标、开发静默改日期、Market导入措施结果或把历史检查当当前法律结论 |
| `BR-EN-G9-12` | 开发回执逐ID绑定准确实现、scope、数据链、依赖和未测；改动后按影响复验本页及共享相邻面 | commit/ref＋dirty state、环境/config、实现位置、测试日志、依赖版本、差异、rollback和未测清单 | 无版本自报、只给截图、历史共享测试移挂本页、缺未测/环境、无法重现；任何关联AC未验证不得整体PASS |

真实设备与辅助技术不规定固定品牌/型号或截图配额；执行者须记录所选代表性环境及覆盖理由。必要环境不可用时如实保持相应AC未验证并交Controller裁决，不能用模拟或规划截图代替。

## 9. 来源—交付—验收双向覆盖

| Source family | Delivery sections | Stable AC |
|---|---|---|
| Registry / keyword / Brief | §1、§4、§6 | G9-01、03、07、10 |
| B V0.2 | §4、§5、§6 | G9-01、03、04、05、10、11 |
| C V0.1 | §5、§6 | G9-04、05、06、07、10、11 |
| Gate 3/4 freeze and review chain | §1、§3、§4.3 | G9-02、08、12 |
| Global Chrome / Legal / Logo | §2、§3 | G9-03、08、09 |
| RFQ / DOC owner | §2、§5、§7 | G9-04、05、06、09 |
| Shared Consent current state | §2、§7 | G9-08、09、12 |
| Trade owner | §2、§7 | G9-03、11 |
| Site-scope/workflow | §4.4、§7、§10 | G9-03、07、09、12 |

反向检查：G9-01至G9-12均可沿上表和各行owner回到批准来源；六个DEP均映射至少一个可观察AC与失败位置。没有无来源的新功能、业务承诺或实现技术绑定。

## 10. Finding状态、机器检查与停止

| Finding | V0.2 author status |
|---|---|
| `BR-EN-G6-IR-01` | `ACCEPTANCE_IMPLEMENTED / PENDING_INDEPENDENT_TARGETED_RECHECK` |
| `BR-EN-G6-IR-02` | `ACCEPTANCE_IMPLEMENTED / PENDING_INDEPENDENT_TARGETED_RECHECK` |
| `BR-EN-G6-IR-03` | `ACCEPTANCE_IMPLEMENTED / PENDING_INDEPENDENT_TARGETED_RECHECK` |
| `BR-EN-G6-IR-04` | `ACCEPTANCE_IMPLEMENTED / PENDING_INDEPENDENT_TARGETED_RECHECK` |
| `BR-EN-G6-IR-05` | `ACCEPTANCE_IMPLEMENTED / PENDING_INDEPENDENT_TARGETED_RECHECK` |
| `BR-EN-G6-F01` | `DELIVERY_MAPPING_CLARIFICATION_SATISFIED_IN_V0.2`；原型未改、生产未验证、G9-07保持OPEN |

作者机器自检覆盖路径存在、关键bytes/hash、12个G9定义ID、6个DEP定义ID、Finding响应、Production Logo keys、错误复审路径移除及必需a11y/Consent词面；实际命令、结果和局限记录在V0.2 Execution Report。文件检查不预签语义、运行或独立复核。

未测：D16、CMS/API/SSR、真实receiver/邮箱、生产Consent网络和存储、Privacy实际配置、本页analytics、真实设备、screen reader、非Chromium、native 200% zoom、生产Schema、Trade发布时新鲜度、部署/索引。当前结论仅为**`READY_FOR_REVIEW`**。不同身份Reviewer须对V0.2全部新增/修改实质合同、IR-01…05接受条件及相邻影响做定向复核；通过后由Controller按常设授权处理Gate 6关闭与Manifest。未实际外发且无回执不得记录`HANDED_OFF=YES`。
