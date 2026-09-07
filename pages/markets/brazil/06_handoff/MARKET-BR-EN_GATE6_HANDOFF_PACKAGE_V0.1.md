# MARKET-BR-EN Gate 6 引用式开发交付包 V0.1

日期：2026-09-07。Package ID：`BR-EN-G6-HANDOFF-01`。状态：`DRAFT_FOR_PROJECT_CONTROL_REVIEW`。本包是开发接手的唯一入口草案，不是第二份正文或页面Manifest；用户未批准本包，未外发，Gate 8–10未授权。

## 1. 锁定组合

| 职责 | 当前来源 |
|---|---|
| 页面入口 | `pages/markets/brazil/MARKET-BR-EN_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md` |
| Brief/Playbook | 当前Index所指Market Brief与Market Playbook；Page ID、URL、关键词和市场页职责不变 |
| 正文B | `04_planning/MARKET-BR-EN_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`；只从该文件生成可见正文，不从PNG重录 |
| 行为C | `04_planning/MARKET-BR-EN_GATE2_CONTENT_CONTRACT_V0.1.md`；动作、事实边界、SEO/GEO/Schema权威 |
| 结构 | `04_planning/gate3-en-v0.1/MARKET-BR-EN_GATE3_RESPONSIVE_WIREFRAME_V0.1.html` |
| 完整视觉源 | `04_planning/gate4-en-v1.1/MARKET-BR-EN_GATE4_COMPLETE_VISUAL_V1.1.html`，26312 bytes，SHA-256 `6827066a38c28b5e3fe990e0d53b8582ca215a1d5b481ffeacf18c74e3ac7707` |
| 冻结/依赖/视觉图 | 同目录`MARKET-BR-EN_GATE4_FREEZE_RECORD_V1.1.json`、`MARKET-BR-EN_GATE4_DEPENDENCY_INDEX_V1.1.json`和`approval_core/export-inventory.json`；全部当前本地引用已定位 |
| Gate 4批准 | `05_review/MARKET-BR-EN_GATE4_USER_APPROVAL_AND_CLOSURE_V1.0.md`及最终独立复审report |
| Gate 6审查 | `05_review/MARKET-BR-EN_GATE6_CONTRACT_CONSISTENCY_REVIEW_V0.1.md`；`BR-EN-G6-F01`仅由本草案澄清，待独立复核 |

共享消费：Global Chrome V0.5及规划Consumer V0.2、Production SVG Logo Manifest V1.0、CTA Accessibility Addendum、Footer Legal Utility/No-Terms、当前Legal/Consent、CONV-RFQ V1.2当前Manifest及其receiver环境记录、CONV-DOC当前handoff/字段清单与Gate 9 V0.4运行记录、Malaysia-origin发布权威和决定登记V1.8。`site_scope`固定为`tio2-my`。

## 2. 页面模型与视觉

WordPress管理B中的页面语义；API完整传递同一语义；Next.js按B顺序呈现：共享Header → Breadcrumb/Hero → 三Application评估块 → Documents → Brazil Trade Update → RFQ准备 → 共享Footer/Cookie。具体post type、字段名、组件路径和缓存实现由Gate 8核对现有项目后决定。

必需内容不得为空或由占位补齐。页面无批准业务图、表单、筛选器、FAQ或页面内提交状态；无图是批准分支。正文中的Malaysia origin、COO、trade freshness、Application提示和after-submit预期必须保留原限定，内部Gate/Finding/证据状态不得公开。

三端完整视觉和菜单/Cookie/Document focus状态取`approval_core/export-inventory.json`。生产不追求固定截图总高度，但必须保持模块顺序、层级、邻接、文本可读、44px最低交互命中区及批准的focus/hover含义。冻结HTML可供开发检查布局、CSS和交互；Gate 8先核对现有组件再决定复用或改造，不承诺直接合并。冻结源中的Logo候选路径只作证据，生产使用共享Production SVG资产键。

## 3. 动作与接收

- 所有B中链接逐实例绑定准确Page ID/route；同一目标的重复CTA不能漏。Product Hub保持中立；三Application链接不传推荐或适配关系；Documents Hub不是文件库存。
- 两个RFQ入口：传内部source归因；Brazil可成为`destination_country`可见可改初值，不覆盖已修改值；不预填Grade、Application、specification、quantity、city/port。公开query不能成为可信事实。
- Request Documents：只传source；不预填Grade、`document_types`、Application或`country_region`。Grade和至少一个Document Type仍由receiver要求。
- 本页不拥有提交、receiver或持久化。RFQ只有明确正向接收确认才显示成功；DOC按当前Free-plan决定要求HTTP 200且JSON `success=true`，provider accepted与邮箱出现分开。失败保留输入并允许重试，不回退Contact、未验证邮箱或电话。

## 4. SEO/GEO/Schema

- 精确title：`Titanium Dioxide Supplier Brazil | TiO2 Malaysia`。
- 精确meta：`Explore Malaysia-origin industrial titanium dioxide Grades for coatings, plastics and masterbatch production in Brazil. Request documents or request a quote.`
- canonical：`https://tio2malaysia.com/markets/brazil/`；HTML lang `en`。query/source/fragment不产生canonical、Schema、sitemap或索引变体。
- 生产`WebPage.name`取可见H1 `Titanium Dioxide Supplier for Brazil`，description/url/inLanguage取C，引用同scope共享WebSite与IKHLAS Organization；breadcrumb关系指向可见三层BreadcrumbList。不得直接复制冻结原型中以SEO title作name且缺共享关系的JSON-LD。
- 不输出LocalBusiness、Product、Offer、FAQPage、价格、税率、证书/文件可用性、库存、运输或current trade outcome语义。
- 生产index、sitemap和alternate只在Gate 9验证后按Gate 10及用户发布/索引决定启用；预览保持不可索引。

## 5. 依赖和失败处置

| ID / owner | 当前要求 | 未满足时的处置 |
|---|---|---|
| `BR-EN-DEP-01` Routes / 各目标owner | Products、3 Applications、Documents、RFQ、RES-TRADE-BR及共享链接需同scope准确绑定并可达 | 阻断相应Gate 9路径和发布；不隐藏必需入口、不放占位或跨站fallback |
| `BR-EN-DEP-02` RFQ / CONV-RFQ | Brazil可见可改、来源保护、真实接收和失败恢复 | 阻断`BR-EN-G9-04/06`及RFQ路径发布；市场页不实现receiver |
| `BR-EN-DEP-03` DOC / CONV-DOC | source-only、字段/校验/成功语义；当前provider accepted但邮箱未确认 | 阻断`BR-EN-G9-05/06`相关判断；不把历史测试移挂本页 |
| `BR-EN-DEP-04` Trade / RES-TRADE-BR | 发布前刷新官方来源、review date及目标内容；市场页不导入结论 | 过期、错目标或越界结论阻断Trade模块及发布 |
| `BR-EN-DEP-05` Shared | Chrome、Brand、Legal/Consent按当前owner消费，无页面私有分叉 | 共享缺陷交owner；未满足阻`G9-02/08/11`和发布 |
| `BR-EN-DEP-06` Runtime/Release | 实际SSR、七面scope隔离、生产配置及单独发布/索引授权 | 没有实际证据则对应Gate 9不通过；Gate 10保持关闭 |

## 6. 稳定Gate 9接受条件

| ID | 输入与预期 | 必要证据 / 不通过条件 |
|---|---|---|
| `BR-EN-G9-01` | 指定实现完整渲染B，单H1、全部模块和逐实例动作，内部状态不公开 | CMS/API read-back、SSR初始HTML与渲染文本逐项对B；漏文、改意、图片文字或内部标签即失败 |
| `BR-EN-G9-02` | 1440/768/390及批准状态保持完整层级、邻接、可读与命中区 | 实际整页、必要测量和状态操作；裁切、溢出、错误层级、<44px、假图暗示即失败 |
| `BR-EN-G9-03` | 全部正文/共享链接到准确同scope Page ID，读者可返回 | 实际点击、最终URL/内容和owner绑定；死链、错页、跨scope或擅自隐藏即失败 |
| `BR-EN-G9-04` | 首次/返回/已修改/无效预填下，Brazil只作可改RFQ目的地初值 | 实际UI和脱敏传输；锁定、覆盖、写入公司country或推断其他字段即失败 |
| `BR-EN-G9-05` | Documents只传source，目标表单仍要求Grade与类型 | 实际UI、请求和校验；Brazil/company country/COO自动选择或source满足必填即失败 |
| `BR-EN-G9-06` | receiver有效、无效、超时、模糊响应和重试符合各owner合同 | 与精确实现绑定的脱敏业务证据；仅2xx、toast、自报PASS或provider accepted冒充邮箱即失败 |
| `BR-EN-G9-07` | clean/query/preview的title/meta/canonical/lang和WebPage/Breadcrumb正确 | 抓取实际SSR head/JSON-LD；name错误、缺共享关系、query变体、禁止节点或越权index即失败 |
| `BR-EN-G9-08` | Header/Menu/Footer/Cookie消费共享owner，Markets current和focus正确 | 键盘、焦点、可访问树及共享版本证据；隐藏面聚焦、重复current、Terms或Cookie不可重开即失败 |
| `BR-EN-G9-09` | 查询、路由、缓存、菜单、SEO、表单、媒体均限定`tio2-my` | 正确/错误/缺失scope回归；任何跨站数据、菜单、receiver、SEO或媒体fallback即失败 |
| `BR-EN-G9-10` | Malaysia origin、COO及三Application只表达B批准范围 | 可见/机器内容和数据源检查；当地实体、推荐、每票证书或文件库存推断即失败 |
| `BR-EN-G9-11` | Trade Resource在发布环境准确可达且日期/官方来源新鲜 | owner的当前来源记录、页面可见日期和目标点击；过期日期或把程序/措施写成确定当前结果即失败 |
| `BR-EN-G9-12` | Gate 8回执将同一ID绑定commit/ref、工作区、环境、数据映射、依赖、测试与未测 | 只给截图、无版本自报或无法对应实现的测试不接受；变化后按影响范围复验 |

## 7. 当前停止点

`BR-EN-G6-F01`只支持“交付映射已在草案澄清”，不证明原型或生产被修改。本包须经不同审查者复核并经用户批准后才可成为`APPROVED_FOR_HANDOFF`；实际发送和Gate 8另受授权控制。

