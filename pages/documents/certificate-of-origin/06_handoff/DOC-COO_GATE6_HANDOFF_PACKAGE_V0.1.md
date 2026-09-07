# DOC-COO Gate 6 引用式开发交付包 V0.1

日期：2026-09-07。Package ID：`COO-G6-HANDOFF-01`。状态：`DRAFT_FOR_PROJECT_CONTROL_REVIEW`。本包不改变`PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED`；用户未批准、未外发，Gate 8、发布和索引均未授权。

## 1. 锁定组合

| 职责 | 当前来源 |
|---|---|
| 页面入口 | `pages/documents/certificate-of-origin/04_planning/DOC-COO_CURRENT_GATE_BASELINE_MANIFEST_V0.12.md` |
| Brief/Playbook | 当前Index所指DOC-COO Brief和Document Playbook；页面只解释origin evidence并引导申请 |
| 正文B | `04_planning/DOC-COO_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`；唯一可见正文源 |
| 行为C | `04_planning/DOC-COO_GATE2_CONTENT_CONTRACT_V0.1.md`；动作、预填、事实、SEO/GEO/Schema |
| 结构/视觉方向 | 当前Gate 3结构和Gate 4 V0.2视觉方向，均由V0.12 Manifest精确继承 |
| 完整原型入口 | `04_planning/gate5-v0.1/DOC-COO_GATE5_COMPLETE_VISUAL_V0.1.html`，SHA-256 `c4f9b788619afa7d1ef6ebf8f43be0c89d1bf177ffbe68326d3399f8db028b31` |
| 样式/依赖/图 | 同目录`visual-direction.css`、`dependencies/`、`approval_core/source-freeze.json`、`asset-inventory.json`和`export-inventory.json`；16张正式图；引用依赖当前可取得 |
| Gate 4等价批准 | 历史`DOC-COO_GATE5_USER_APPROVAL_AND_CLOSURE_V0.1.md`及项目控制审查；按工作流V3.1映射当前完整视觉Gate 4 |
| Gate 6审查 | `05_review/DOC-COO_GATE6_CONTRACT_CONSISTENCY_REVIEW_V0.1.md`；`COO-G6-F01`待独立复核 |

共享消费：Global Chrome V0.5、Production SVG Logo、CTA/Legal/No-Terms/Consent、CONV-DOC当前handoff/字段清单和Gate 9 V0.4运行决定、PRODUCT-000、DOC-000，以及Malaysia-origin决定（本页正文未建立具体商品/交易关系）。`site_scope=tio2-my`。

## 2. 页面内容模型

WordPress管理B的准确语义，Next.js按顺序呈现：共享Header → 三层Breadcrumb → Hero direct answer/Grade提示/Request → 三类origin evidence比较 → 四项决定信息 → origin evidence与traceability区别 → 请求准备/第二Request/提交边界/Document Hub → Official Source → 共享Footer/Cookie。

表格和有序列表必须保持行列标题、项目与限定的语义关联；窄屏可按批准视觉重排，但不能使“when relevant”和“what to verify”脱离对应evidence type。Official Source、source update date、page update date、Last reviewed和限定句必须可见可提取。

本页没有下载、公开文件清单、页面内表单、FAQ、Product/Offer或业务图。无图是批准分支；不得添加证书扫描、印章、海关或工厂图暗示具体交易事实。

## 3. Request Documents动作

两处`Request Origin Documentation`传递：

- 可见且可编辑/移除的`prefill.document_types[]=origin_supplier_qualification`；
- 隐藏的`source_context.page_id=DOC-COO`；
- 不传Grade、destination、scheme、order/shipment reference、application或company `country_region`。

目标CONV-DOC仍要求一个allowlisted Grade和至少一个Document Type。Additional Requirements用于买家自行提供destination、intended use、scheme/requested form及合适的非机密交易参考；Gate 6不创建新字段或把这些内容拆成必填项。

prefill必须经过allowlist规范化，不能由公开query获得可信资格。无效/陈旧值被丢弃到中立可编辑状态。提交、校验、500字符规则、Other-only条件、失败/重试和成功文案完全继承CONV-DOC owner。本页的“submission does not confirm certificate issuance or a customs outcome”在目标成功状态中继续由“availability and applicable scope are confirmed during review”保持。

## 4. 事实、外部来源与机器语义

页面只表达一般关系：Certificate/Proof of Origin识别货物来源；具体evidence及使用取决于destination、rules/procedure和transaction documents；traceability回答另一问题。不得推导IKHLAS对某Grade、订单、批次或shipment的证书关系。

Official Source固定为Royal Malaysian Customs Department FAQ Rules of Origin。当前正文准确显示“information updated through 10 October 2025”“page update date 5 January 2026”“Last reviewed: 7 September 2026”。发布前source owner必须重新验证页面可达、可支持的命题及可见日期；若官方内容改变，按事实/文案变更流程处理，不能只更新隐藏Schema。

- title：`Certificate of Origin for Titanium Dioxide | TiO2 Malaysia`。
- meta：`Understand when a titanium dioxide country of origin certificate or other proof may be relevant and what details to provide with a document request.`
- candidate canonical：`https://tio2malaysia.com/documents/certificate-of-origin/`；EN。
- WebPage.name取H1 `Certificate of Origin for Titanium Dioxide: What Buyers Should Verify`；description/url/source/review date与可见B一致，引用同scope共享WebSite/Organization和可见BreadcrumbList。具体共享`@id`由owner绑定，不猜值。
- 禁止FAQPage、Product、Offer、DigitalDocument、file inventory、availability、issuance、customs/tariff outcome或IKHLAS traceability关系。

## 5. 原型适配和共享消费

HTML可直接打开，CSS外置，必要脚本按实际源内嵌/引用；完整依赖见freeze和asset inventory。Gate 8先检查现有页面、表格/列表、共享Chrome、接收器和SEO组件，再决定复用或改造。不承诺原型直接合并。

原型head的WebPage.name与共享关系不是生产权威；按§4和`COO-G9-07`实现。`COO-G4-SHARED-OBS-01`记录桌面菜单断点恢复后focus落到BODY的共享观察，交Global Chrome owner定向评估；DOC-COO不复制/修补共享组件。生产Logo只消费批准asset key。

## 6. 依赖

| ID | Owner / 当前要求 | 未满足时处置 |
|---|---|---|
| `COO-DEP-01` URL/SEO | DOC-COO + route/SEO owner；URL仍PROVISIONAL | 阻canonical/index/sitemap和发布；不得跨scope或用临时URL作canonical |
| `COO-DEP-02` Official Source | DOC-COO fact/source owner | 来源不可达、内容/日期变化或命题失配时阻事实验收/发布，提交决定后定向修订 |
| `COO-DEP-03` CONV-DOC | form/receiver owner；当前provider accepted，邮箱确认开放，生产配置开放 | 阻动作/接收相应验收和发布；不把provider结果写成邮箱或证书结果 |
| `COO-DEP-04` Product/DOC routes | PRODUCT-000、DOC-000 owner | 死链/错scope阻完整路径；不隐藏或回退Contact |
| `COO-DEP-05` Shared | Chrome/Brand/Legal/Consent owner；共享focus观察开放 | 共享缺陷交owner；阻适用a11y/法律/发布条件，不页内分叉 |
| `COO-DEP-06` Runtime/Release | Gate 8/9及用户；SSR、scope隔离、真实receiver、生产配置 | 无实际证据则Gate 9不通过；Gate 10和索引保持关闭 |

## 7. 稳定Gate 9接受条件

| ID | 输入与预期 | 必要证据 / 不通过条件 |
|---|---|---|
| `COO-G9-01` | 指定实现完整呈现B、单H1、三类比较、四项输入、traceability、准备、两Request和Official Source | CMS/API read-back、SSR和可见文本对B；漏文、改限定、只在图片、内部状态泄漏即失败 |
| `COO-G9-02` | 1440/768/390保持表格/列表关联、模块顺序、可读与44px命中区 | 实际整页、段落/表格检查、测量和状态；错列、裁切、横溢、重叠或假图即失败 |
| `COO-G9-03` | Home/Documents/Product Hub/Request/外部FAQ到准确目标 | 实际点击、最终响应和owner绑定；死链、错scope、外链冒充IKHLAS事实或擅自隐藏即失败 |
| `COO-G9-04` | 两Request均显示可编辑/可移除origin类型，source隐藏，不预填其他值 | 首次/返回/修改/清除/无效query实际UI和脱敏请求；隐藏满足必填、锁定、Grade/country/scheme预填即失败 |
| `COO-G9-05` | CONV-DOC仍要求Grade和类型，Other-only/长度/错误恢复正确 | 实际字段、校验、错误summary和保值重试；无Grade提交、多Grade或source决定资格即失败 |
| `COO-G9-06` | 只有当前owner定义的明确receipt才成功，availability/scope仍待review | 有效/无效/超时/模糊响应业务证据；2xx或provider accepted冒充邮箱/证书签发、失败丢值即失败 |
| `COO-G9-07` | title/meta/canonical/lang及WebPage/Breadcrumb source/date/name完全与可见B一致 | 抓取SSR head/JSON-LD；SEO title作Schema name、缺source/date/共享关系、禁止节点或query变体即失败 |
| `COO-G9-08` | 官方FAQ当前仍支持一般命题，四个日期/来源显示相符 | 发布前带日期的官方source记录与可见read-back；过期、不可达、扩大到交易结果即失败 |
| `COO-G9-09` | Header/Menu/Footer/Cookie消费共享owner，Documents current和焦点恢复正确 | 键盘/可访问树/共享版本；重复current、隐藏面聚焦、观察未处置且影响实际使用、Terms即失败 |
| `COO-G9-10` | 查询、路由、缓存、菜单、SEO、表单、媒体严格`tio2-my` | 正确/错误/缺失scope回归；跨站fallback、receiver或媒体泄漏即失败 |
| `COO-G9-11` | 可见与机器语义均无特定Grade/order/shipment可用性、签发、优惠/海关结果 | 文本、JSON-LD、payload及日志检查；自动资格、文件库存、隐藏transaction关系即失败 |
| `COO-G9-12` | Gate 8回执绑定ID、commit/ref、环境、内容/Schema/form映射、依赖和未测 | 无版本截图、自报PASS或静态模拟不接受；官方source、receiver或Schema变化后定向复验 |

## 8. 当前停止点

`COO-G6-F01`仅由本草案澄清生产映射，原型未改、生产未验证。不同审查者复核和用户批准前不进入`APPROVED_FOR_HANDOFF`；不得以页面内容批准替代URL、receiver、发布或索引授权。
