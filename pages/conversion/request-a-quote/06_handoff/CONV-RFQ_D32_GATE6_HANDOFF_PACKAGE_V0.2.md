# CONV-RFQ D32 Gate 6 开发交付包 V0.2

2026-09-20；作者/Controller：`/root`；执行对象：D32 既有任务“01开发” (`01a0bd3a-a7ba-7632-bda0-fad444f654db`)。状态：`TARGETED_REVISION / READY_FOR_TARGETED_RECHECK / NOT_YET_DISPATCHABLE`。用户已明确同意由01开发执行 Gate 8；但本包仍须不同身份独立复核并由总控关闭 Gate 6，之后才可形成正式派发。

V0.2完整继承V0.1未变条款，并定向修复独立审查 `CONV-RFQ_D32_GATE6_INDEPENDENT_REVIEW_V0.1.md` 的F01–F04：旧控制ID映射、11+1字段/placeholder、receiver结果分支和Privacy readiness优先级。V0.1及其原hash作为历史审查对象保留。

## 1. 页面身份、授权与边界

| 项目 | 当前合同 |
|---|---|
| Page ID / route | `CONV-RFQ` / `/request-a-quote/` |
| 页面类型 / 优先级 | EN RFQ conversion / P0 |
| Site scope | `tio2-my` |
| 主关键词 | `titanium dioxide quote supplier` |
| D32 正式 canonical | `https://tio2products.com/request-a-quote/` |
| Gate 1–5 内容/视觉 | 已批准，按§2原件承接；本轮不重开 |
| Gate 6 | 本 D32 适配包待独立复核与总控关闭 |
| Gate 8 | 用户已授权并指定01开发；待 Gate 6 正式关闭后派发 |
| Gate 9 | 只读验收，尚未启动 |
| Gate 10 / merge / PR / push / deploy / publish / DNS / index | `NOT_AUTHORIZED` |

本轮只实现 D32 WordPress 中的 RFQ 页面、表单控制器、可编辑内容模型和本页机器输出。D23只负责合同、协调和后续只读 QA，不在 D32 写代码。旧 D16/Next.js 实现、构建与 Gate 9 记录只证明历史对象，不能作为 D32 代码或通过证据。

本页不得顺带实现或复制：`/request-sample/`、`/request-documents/`、Privacy/Cookie 页面、Consent Manager、共享 Header/Footer/Menu、另一个站点 scope，或任何 Grade/Application/Market 页面。它们只能作为共享实现或外部 owner 依赖被消费。

## 2. 当前批准组合与优先级

1. 当前用户决定：由01开发执行 D32 Gate 8；不包含真实业务提交、合并、部署或发布。
2. `../../../../docs/architecture/DEVELOPMENT_OWNER_D32_SWITCH_DECISION_V1.0.md`：网站后续开发归 D32，D16 证据仅保留历史身份。
3. `../05_review/CONV-RFQ_CURRENT_GATE9_BASELINE_MANIFEST_V1.6.md`：旧对象的当前事实、外部 receiver 根依赖和无自动重试边界。
4. `CONV-RFQ_GATE7_MANIFEST_V1.2.md`：批准 Gate 7 组合；V1.1 负责 owner/scope，V1.0 精确字段、状态和机器合同继续有效。
5. `CONV-RFQ_GATE7_HANDOFF_PACKAGE_V1.0.md`、`CONV-RFQ_GATE7_CMS_API_COMPONENT_MAPPING_V1.0.md`、`CONV-RFQ_GATE7_ACCEPTANCE_AND_BLOCKERS_V1.0.md`：精确内容、字段、选项、校验、错误、状态、prefill、SEO/Schema、响应与验收。
6. 同名 V1.1 三件套：覆盖跨页 owner 与 readiness 责任，不改 Buyer Clean 值。
7. `CONV-RFQ_LEGAL_PRIVACY_DEPENDENCY_OVERRIDE_V1.0.md`：Privacy 路径为 `/privacy-policy/`；无 `/legal/privacy-policy/`、无 Terms 依赖。
8. `../05_review/CONV-RFQ_GATE5_APPROVED_BASELINE_MANIFEST_V1.0.md`及其六组设计资产：完整视觉与状态证据。
9. `../04_planning/CONV-RFQ_GATE2_FULL_COPY_V1.1.md`及其关闭记录：精确 Buyer Clean 文案和交互文案。
10. `../../../../docs/architecture/TIO2_MY_23_PAGE_PUBLICATION_CONTRACT_FINALIZATION_V1.0.md`：路径、页面角色、最终索引目标；只作目标合同，不授予当前索引/发布。
11. `../../../products/05_review/PRODUCT-000_D32_GATE3_GATE9_CONTROL_V0.1.md`所记录的最新正式域名决定：`tio2products.com`定向覆盖旧绝对域名，但不改 Page ID、路径、品牌和 scope。

冲突解释：最新用户决定和 D32 owner/domain 覆盖旧 D16 技术归属与旧绝对域名；批准内容、字段、状态、视觉和外部 owner 边界不变。旧文档中的 Gate 5/7 编号按历史语义保留；当前流程在本轮将该批准组合映射为 D32 Gate 6→8→9。

## 3. 冻结的 Buyer Clean 页面合同

语义顺序固定为：

`Shared Header → Breadcrumb → Hero → RFQ Form → Other request types → Shared Footer`

Hero：

- Eyebrow：`B2B QUOTATION REQUEST`
- H1：`Request a Titanium Dioxide Quote`
- Paragraph：`Tell us the product, application, quantity and destination you are evaluating. Our team will review your requirements and prepare the appropriate commercial response.`
- Hero 无按钮；`REQUEST QUOTE`是唯一 solid page-body CTA。

Form：

- H2：`Quotation request details`
- Intro：`Required fields are marked. Please use business information and avoid confidential formulations, account credentials, payment details or sensitive personal information.`
- 三组标题依次为 `Your requirement`、`Company details`、`Additional requirements`。
- Privacy：`We use the information you provide to review and respond to your quotation request. Learn more in our Privacy Policy.`，其中 `Privacy Policy`链接 `/privacy-policy/`。
- Other requests H2：`Other request types`
- Intro：`Use the separate request form when you need a sample review or controlled document request instead of a quotation.`
- 两个低权重链接必须始终可见：`Request a Sample`→`/request-sample/`；`Request Documents`→`/request-documents/`。目标未就绪时登记依赖，不隐藏、禁用、改链或用 Contact/RFQ 代替。

完整Buyer Clean逐字权威是 `../04_planning/CONV-RFQ_GATE2_FULL_COPY_V1.1.md`及其批准关闭；`CONV-RFQ_GATE7_CMS_API_COMPONENT_MAPPING_V1.0.md` §3–8承接字段、选项、校验、状态和prefill映射，但不替代Gate 2中未重复枚举的已批准值。实现不得另写同义文案。`Destination Country` placeholder必须是 `Enter the destination country`。重点边界：

- 12个语义字段：11个可编辑控件为 `grade_id`、`application_id`、`quantity_mt`、`destination_country`、`destination_port_city`、`company_name`、`contact_name`、`business_email`、`phone_whatsapp`、`website`、`additional_requirements`；第12项 `quantity_unit=MT`只是固定显示/系统值，不是input、select、radio或其他可编辑控件。
- Product / Grade 按原件顺序显示14个型号和 `Not sure / Need help`；Application按原件顺序显示6类和 `Other / Not sure`。
- `Destination Country`是自由文本，不变成国家数据集/select；`Metric tonnes (MT)`固定不可编辑。
- 不增加上传、付款/证件、住址、期望价格、现供应商、机密配方、营销同意、必填电话/网站、consent checkbox、包装/文档/样品额外字段。
- 初次加载无错误；无效提交后焦点进入可聚焦错误摘要，摘要条目可回到字段，其余值保留。
- Normal `REQUEST QUOTE`；pending `SUBMITTING…`且防重复；失败和成功文案逐字使用批准原件。
- `receipt_confirmed`只允许由 receiver 明确肯定应答触发；成功只是“收到并进入人工审阅”，不是报价、价格、库存、MOQ、交期、运输、样品、文档、订单或监管结论。

## 4. D32 WordPress 接入合同

### 4.1 存储、编辑与迁移

- 页面结构、样式和交互放在现有 `wp-content/themes/tio2-malaysia/`；内容模型、服务端校验、后台编辑和 receiver adapter 放在 `wp-content/plugins/tio2-content/`。具体文件名由 D32 依现有架构选择。
- 普通文案、链接、字段选项/消息及 SEO 必须由当前 `tio2-my` 内容记录管理；模板不得把可编辑批准正文重新写死，也不得用批准字符串作为运行时锁阻止正常编辑。
- `content/`只作首次导入；结构升级须兼容现有 schema、幂等、失败可恢复、不会覆盖已有后台编辑。编辑测试须在隔离数据环境运行并恢复快照。
- `site_scope=tio2-my`必须先于所有内容、配置、缓存、媒体、路由、菜单、表单和 receiver 查找；缺失/错 scope fail closed，不得跨站 fallback。
- 页面不得依赖 D23 文件路径、批准号、开发机目录或旧 D16 构建才能运行。

### 4.2 页面与共享组件

- 复用 D32 唯一 Header/Footer/Menu/Cookie Settings/生产 Logo；本页不建立私有 fork。RFQ 导航在本页仍可见，不显示 Buyer Clean `CURRENT`字样。
- Desktop 页面保持一个居中纵向流；仅表单相关字段可两列。Tablet/Mobile 所有字段按语义顺序单列。
- 视觉结果以 Gate 5批准资产为准，不复制其 SVG/PNG 为运行时页面，不引入页面专属摄影、徽章、工厂/库存暗示或第二个 solid CTA。
- D32 Gate 8隔离预览必须始终渲染准确的 `/privacy-policy/`、`/request-sample/`和`/request-documents/`最终链接；目标未就绪只形成集成/发布依赖，不能形成条件隐藏/改链分支。该D32解释由当前根 `AGENTS.md` §2.4“完整网站与最终读者体验原则”（2026-09-20，优先于页面旧附录）明确覆盖 `CONV-RFQ_LEGAL_PRIVACY_DEPENDENCY_OVERRIDE_V1.0.md` §3中“ready才显示Privacy链接”的旧条件句；旧附录的批准路径、无Terms和发布阻断继续有效。生产发布时三目标必须真实就绪；隔离预览可显示准确目标并如实记录404/NOT_READY。

### 4.3 表单端点、校验与安全

- 提交由 WordPress 同源服务端入口接收；客户端和服务端都执行同一字段合同，最终以服务端校验为准。只接受预期方法、字段和类型；按上下文 normalize、sanitize、escape。
- 使用适合现有公开表单架构的 nonce/请求来源检查、防机器人 honeypot、合理速率与请求体限制；不得加入 Turnstile、reCAPTCHA、remarketing 或 audience 功能。
- receiver/Web3Forms 访问密钥、批准收件人、账户绑定和其他 secret 只来自被忽略的环境/运行配置；不得进入 Git、HTML、JS、REST公开响应、日志、截图或证据。批准收件人值按现有 `DO_NOT_RENDER`记录消费，本包不重复公开。
- provider adapter 必须可在测试中替换。Gate 8 使用 deterministic fake/mock 覆盖肯定应答、业务拒绝、registered field error、configured unavailable、HTTP error、timeout、网络异常、畸形/歧义响应；不得为本轮测试发送真实表单或邮件。
- 结果分支按批准Gate7 Mapping §8执行，且HTTP状态只作输入、不能单独决定成功：
  - HTTP 2xx且解析后存在明确肯定接受标志（当前adapter合同为 `success === true`）→ `receipt_confirmed`；message文字不能替代该标志。
  - 已注册字段错误→`validation_failed`，只映射已知字段并保留其余值。
  - receiver配置/服务已知不可用→`service_unavailable`，不得伪装已提交。
  - `success === false`但无可映射字段错误、HTTP 2xx+empty/malformed/ambiguous、非2xx、timeout、network/parse failure→`submission_unconfirmed`，保留值并允许人工重试。
  - 不自动重试，不以HTTP 2xx或任意message单独触发成功。
- pending期间只阻止表单重复激活，不禁用共享 RFQ 导航。可使用隐私安全的 attempt/idempotency token，但不得把它显示为已收件证明。
- 日志和错误不得含表单值、邮箱、电话、网址、自由文本、secret或完整 provider payload；Analytics/dataLayer 同样不得包含这些值或校验错误。

### 4.4 Prefill 与公开输出

- `grade_id`、`application_id`、明确的实际 destination country 及批准公开上下文只投影到可见、可编辑字段；无效/过期值静默清空，不产生首屏错误。
- `source_page_id`、`market_id`等内部归因不进入公开 URL、HTML、DOM、JS 状态、accessible name、analytics、metadata或Schema；隐藏值不能满足必填字段。
- broad region（如 European Union）不得自动写入 Destination Country；Application不得推导 Grade；用户选择不得建立 Product 关系。
- query/prefill 不能产生新的 canonical、metadata或Schema 变体；干净 canonical 始终是 `https://tio2products.com/request-a-quote/`。

### 4.5 SEO、Schema、robots 与 Analytics

- Title：`Request a Titanium Dioxide Quote | TiO2 Malaysia`
- Meta：`Request a titanium dioxide quotation from TiO2 Malaysia by providing your grade, application, quantity in metric tonnes and destination for review.`
- Language `en`；Breadcrumb `Home / Request a Quote`；canonical、OG URL和JSON-LD绝对URL共用正式 base `https://tio2products.com`，不得混入本地地址或旧域名。
- JSON-LD仅 `WebPage` + `BreadcrumbList`，可引用稳定共享 `WebSite`/`Organization`；禁止 `Product`、`Offer`、`AggregateOffer`、`FAQPage`、`QAPage`、`HowTo`、`ContactPage`及任何买家数据。
- 本地/预览始终 `noindex, nofollow`并排除公开 sitemap；`index, follow`只是批准的最终目标，必须等 Gate 9、Gate 10和发布明确授权。
- 当前 D32 无 analytics 时不新增一套。若消费现有 GA4/GTM，只能在同 scope批准 Analytics consent 后发送隐私安全事件；attempt/failure不得计为 conversion，success只在 `receipt_confirmed`后；form values/errors永不进入事件。

## 5. 可观察验收条件

Gate 8须逐项交证，Gate 9对精确 D32候选独立核验：

| ID | 必须观察的结果 | 失败边界 / 证据 |
|---|---|---|
| `RFQ-D32-AC-01-IDENTITY-CONTENT` | `/request-a-quote/` 200；单H1、批准模块顺序和§3逐字文案 | 真实HTTP/DOM；内部治理文字、第二表单/CTA、正文缺失均FAIL |
| `RFQ-D32-AC-02-FIELDS-OPTIONS` | 12语义字段=11个可编辑控件+1个固定MT显示/系统值；Destination Country placeholder逐字；requiredness、14+unknown Grade和6+other Application顺序、全部limits/helpers精确 | DOM、server schema和正负样例；新增Unit控件、placeholder遗漏、增加/删改字段或选项均FAIL |
| `RFQ-D32-AC-03-VALIDATION-A11Y` | 初屏无错；15条件精确错误；summary可聚焦/链接；label、required、invalid、described-by、live state正确，键盘可操作 | 浏览器交互和可访问性检查；仅截图不足 |
| `RFQ-D32-AC-04-STATE-ACK` | normal/pending/failure/unavailable/success逐字；防重复、失败保值；2xx+明确 `success===true`才成功；registered field errors→validation_failed；configured unavailable→service_unavailable；其余无确认结果→submission_unconfirmed | fake adapter全分支、请求计数和DOM状态；仅凭2xx/message或歧义结果成功为P0 FAIL |
| `RFQ-D32-AC-05-PREFILL` | 允许上下文可见可编辑；invalid/stale安全清空；broad market不注入country；query canonical不变；无内部ID公开 | 正/负query矩阵、DOM/URL/head检查 |
| `RFQ-D32-AC-06-SERVER-SECURITY` | 服务端再校验、转义、nonce/source/size/rate/honeypot策略；敏感值不进URL/log/analytics；无 CAPTCHA/remarketing | 自动测试、静态审查、日志/网络负例；任何secret/PII泄漏FAIL |
| `RFQ-D32-AC-07-CMS-MIGRATION` | 可编辑内容前后台同源；现有编辑保留；迁移兼容/幂等/可恢复；测试恢复快照 | 隔离数据库、后台编辑/还原、重复运行和失败恢复证据 |
| `RFQ-D32-AC-08-SCOPE-ISOLATION` | 内容/路由/cache/menu/media/form/receiver严格 `tio2-my`；错/缺scope fail closed | 正、错、缺scope与冷暖缓存证据；跨站fallback FAIL |
| `RFQ-D32-AC-09-SHARED-CHROME` | 复用唯一共享Chrome/Logo/Cookie；RFQ导航常驻；Home/Products不因新增页面回归 | 代码owner、三页关键HTTP/DOM和多宽度回归 |
| `RFQ-D32-AC-10-SEO-SCHEMA` | 精确Title/Meta/lang/canonical/OG；WebPage+BreadcrumbList；无买家/治理数据；本地noindex | head/JSON-LD解析、query负例、旧域名/本地地址扫描 |
| `RFQ-D32-AC-11-RESPONSIVE-VISUAL` | 1440/1280/1024/768/430/390/375/320无横滑/裁切；Desktop仅表单两列，Tablet/Mobile单列；目标≥44px、200%浏览器缩放可用 | 浏览器图、几何和交互证据；Gate5资产作视觉对照 |
| `RFQ-D32-AC-12-EXTERNAL-ROUTES` | Privacy/Sample/Documents准确链接可见；未就绪不隐藏/改链；本页不实现这些目标 | DOM与route readiness报告；目标404可记依赖但公开fallback/克隆FAIL |
| `RFQ-D32-AC-13-ANALYTICS` | 无现有系统则不新增；存在时遵守scope/consent，只有receipt-confirmed可成功计数且无PII/error | dataLayer/network/config正负证据；attempt/failure conversion FAIL |
| `RFQ-D32-AC-14-RECEIVER-CONFIG` | secret仅运行配置；provider adapter fail-closed；批准收件人不公开；不宣称生产binding/receipt已验证 | source/build/DOM/log scan和配置键说明（值打码）；真实发送为越权 |
| `RFQ-D32-AC-15-EVIDENCE-HANDOFF` | 精确commit、worktree、base、数据/runtime/build、Manifest/hash、每项AC的PASS/FAIL/NOT_TESTED映射 | 缺身份、旧D16证据代替或把未测写PASS均RETURN |

### 5.1 新验收ID的来源映射

| 新ID | 主要来源（均叠加Gate7 V1.1 owner修正） |
|---|---|
| `AC-01` | Gate2 Full Copy §1；Gate7 Package V1.0 §2–4 |
| `AC-02` | Gate2 §1.4/§3；Gate7 Mapping V1.0 §3–5 |
| `AC-03` | Gate2 §3–4；Gate7 Package §14；Gate7 Acceptance §4 |
| `AC-04` | Gate7 Mapping §6/§8；Gate7 Package §6–7 |
| `AC-05` | Gate2 §2/§8；Gate7 Mapping §7–8 |
| `AC-06` | Gate7 Package §7/§11；Gate7 Acceptance §4；D32 AGENTS安全规则 |
| `AC-07` | D32 AGENTS内容/迁移规则；D32 owner切换决定 §3 |
| `AC-08` | Gate7 Package §11；Gate7 Mapping §9/§12 |
| `AC-09` | Gate7 Package §10/§14；Gate7 V1.1 owner矩阵；D32 AGENTS共享实现规则 |
| `AC-10` | Gate2 §7；Gate7 Package §12；出版合同 §6；最新D32正式域名决定 |
| `AC-11` | Gate2 §9；Gate5批准组合；Gate7 Package §14 |
| `AC-12` | Gate7 V1.1最终入口/owner；Privacy override路径条款；当前根AGENTS §2.4的D32显示优先级 |
| `AC-13` | Gate7 Package §8；Gate7 Mapping V1.1 §6 |
| `AC-14` | Gate7 Package §7；Gate9 V1.6 external-root；D32 AGENTS secret规则 |
| `AC-15` | Gate8→9机器交接合同；D32 owner切换决定 §2–3 |

## 6. 外部依赖与发布分层

以下不阻止 Gate 8 在隔离环境完成页面代码，但在相应证据未齐时保持 `INTEGRATION_NOT_READY / RELEASE_BLOCKED`：

| ID | Owner | 当前开放项 |
|---|---|---|
| `RFQ-D32-DEP-01-PROVIDER` | RFQ operational owner | 生产Web3Forms账户/Key、批准收件绑定、accountable owner、provider-positive acceptance、相关邮箱实收 |
| `RFQ-D32-DEP-02-PRIVACY-OPS` | Legal/Privacy + RFQ operational owner | 实际controller/contact/purpose/categories/retention/processors/transfers/rights与provider/DPA parity |
| `RFQ-D32-DEP-03-PRIVACY-ROUTE` | Legal/Privacy page owner | `/privacy-policy/`真实页面与RFQ数据流一致；Footer Privacy EN/BM和Cookie Policy共享就绪 |
| `RFQ-D32-DEP-04-SIBLING-ROUTES` | CONV-SAMPLE / CONV-DOC | `/request-sample/`与`/request-documents/`真实工作流就绪 |
| `RFQ-D32-DEP-05-COOKIE-CMP` | shared consent owner | Cookie Banner、Cookie Settings、Consent Manager及Cookie/storage inventory真实就绪；不因本页未启用analytics而豁免共享系统的后置集成/发布检查 |
| `RFQ-D32-DEP-06-ANALYTICS-CONSENT` | shared consent + analytics owner | 仅当站点实际启用GA4/GTM时，验证同scope Analytics consent、firing与事件隐私；未启用时记录NOT_APPLICABLE，不借此关闭DEP-05 |

### 6.1 旧控制ID到D32控制的交叉映射

旧ID继续保留来源身份和开放状态；新AC/DEP只提供D32实现与证据入口，不自动关闭旧控制。

| 原控制 | 原状态 | D32去向 | Gate8证据 / 阻断层级 |
|---|---|---|---|
| `RFQ-G7-B01` route/scope | OPEN | AC-01、AC-08 | D32 HTTP/scope证据；失败阻断Page Gate9/发布 |
| `RFQ-G7-B02` receiver/owner | OPEN | AC-04、AC-14、DEP-01 | mock证明代码分支；生产owner/收件证据仍阻断Integration/Release |
| `RFQ-G7-B03` provider data flow/DPA | OPEN | AC-06、AC-14、DEP-01/02 | adapter/config打码证据；运营DPA/处理链后置阻断Release |
| `RFQ-G7-B04` explicit receipt | OPEN | AC-04、DEP-01 | fake明确true可验代码；不得关闭生产receiver root |
| `RFQ-G7-B05` Privacy route/disclosure | OPEN | AC-12、DEP-03 | 预览链接常显；真实页面/parity未就绪阻断Integration/Release |
| `RFQ-G7-B06` retention/processors/transfers/rights | OPEN | DEP-02 | Legal/operational evidence；阻断Release |
| `RFQ-G7-B07` CMP/Cookie/storage | OPEN | AC-09、DEP-05 | 共享系统owner证据；无analytics也保持后置检查 |
| `RFQ-G7-B08` GA4/GTM consent/privacy | OPEN | AC-13、DEP-06 | 启用时验证；未启用记NOT_APPLICABLE，不关闭B07 |
| `RFQ-G7-B09` no remarketing/CAPTCHA | CONTROLLED | AC-06、AC-13 | DOM/network/config负例；出现即Page Gate9 FAIL |
| `RFQ-G7-B10` Sample route | OPEN / REQUIRED | AC-12、DEP-04 | 链接常显；目标工作流未就绪阻断Integration/Release |
| `RFQ-G7-B11` Documents route | OPEN / REQUIRED | AC-12、DEP-04 | 同上 |
| `RFQ-G7-B12` canonical/robots/index | OPEN | AC-10 | 预览noindex；Gate10/发布前另验，阻断Release |
| `RFQ-G7-B13` Global Chrome/legal Footer | OPEN shared | AC-09、DEP-03/05 | 复用和回归；共享目标未就绪阻断Integration/Release |
| `RFQ-EXTERNAL-RECEIVER-ROOT` | OPEN | AC-04、AC-14、DEP-01/02 | D32 mock PASS不能关闭；须生产绑定、明确provider acceptance、相关实收及运营Privacy证据 |

所有15个新AC的“PASS”只评价精确D32候选的对应页面/adapter行为；任何旧DEP/root是否关闭必须按本表所列owner和生产证据另行决定。

历史一次合成提交为旧 D16对象且结果不确定；它不授权 D32 再试。01开发和 Gate 9在未取得新的明确授权前只能使用 fake/mock receiver，不得发送真实业务或合成表单、不得触发邮件。

## 7. Gate 8 执行与交回要求

- 01开发先重新读取 D32 `AGENTS.md`、`README.md`、`CONTRIBUTING.md`，从开工时最新且干净的 `develop`创建独立分支和 worktree；建议分支 `codex/conv-rfq-gate8`，worktree `D:\32Wordpress_new\.worktrees\conv-rfq-gate8`。如名称占用，使用等价唯一名称并在回执记录。
- 使用独立 Compose project、ports、volumes和测试数据；不得复用或破坏首页、Products、M-350等并行候选环境。
- 一个完成并验证的工作项一个commit；暂存仅本任务文件。Gate 8完成后停在功能分支，不自行 push、开 PR、merge 到 develop/main、部署或发布。
- 遵守 `../../../../docs/architecture/GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md`：提交 Evidence Manifest、implementation/evidence/observed commit与dirty状态、WordPress/PHP/数据库/runtime身份、artifact/build identity、全部证据hash和AC映射。
- 最少交回：实现摘要；文件/迁移清单；mock receiver状态测试；PHP/JS/HTTP/identity/negative测试；CMS编辑与恢复证据；1440/768/390全页与initial/validation/pending/failure/mock-success状态；head/JSON-LD；scope/PII/secret扫描；Home/Products共享回归；开放依赖和未测试项。
- 保持候选runtime和数据不变，直到 Gate 9给出 PASS或RETURN。开发自测不是独立 Gate 9；旧 D16 PASS、规划原型或Gate5截图不能代替 D32真实证据。

## 8. 回滚与停止条件

若实现无法保证服务端校验、明确肯定应答、保值重试、scope隔离或secret/PII安全，则保持未合并并返回，不做降级成功。receiver不可用时可显示批准的 unavailable/failure 状态，但不得改用 Contact、公开邮箱/电话、另一站receiver、旧静态配置或跨scope fallback。

Gate 8停止点是“D32功能分支实现及证据已交回”。Gate 9、真实provider测试、PR/merge、部署、发布、索引和Gate 10均等待后续独立授权/流程。

## 9. 本包自检边界

作者已把批准原件双向映射到 D32 owner、WordPress层、CMS迁移、receiver安全、外部依赖和15项可观察验收；§5.1及§6.1明确新旧ID、来源、owner、证据和阻断层级。V0.1独立审查F01–F04均已按接受条件定向修订，没有新增企业能力、页面、公开承诺或收件事实。机器身份检查另存 `CONV-RFQ_D32_GATE6_PACKAGE_CHECK_V0.2.json`。作者自检不代替不同身份定向复核。


