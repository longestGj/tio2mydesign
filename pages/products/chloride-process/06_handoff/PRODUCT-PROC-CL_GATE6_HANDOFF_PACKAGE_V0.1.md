# PRODUCT-PROC-CL Gate 6 引用式开发交付包 V0.1

日期：2026-09-07。Package ID：`CL-G6-HANDOFF-01`。状态：`DRAFT_FOR_PROJECT_CONTROL_REVIEW`。本包是唯一开发接手入口草案；用户未批准，未外发，Gate 8–10未授权。

## 1. 锁定组合

| 职责 | 当前来源 |
|---|---|
| 页面入口 | `pages/products/chloride-process/PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.22.md` |
| Brief/Playbook | 当前Index所指Chloride Process Brief及Product/Process Playbook；只聚合Process和八Grade |
| 正文B | `04_planning/PRODUCT-PROC-CL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`的Buyer Clean markers之间；唯一正文 |
| 行为C | `04_planning/PRODUCT-PROC-CL_GATE2_CONTENT_CONTRACT_V0.6.md`；行为、关系、SEO/GEO/Schema |
| 关系源 | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`及统一审计V0.3 |
| 结构/视觉 | 当前Gate 3和Gate 4 V0.1方向，由V0.22 Manifest继承 |
| 完整原型 | `04_planning/gate5-v0.1/source/index.html`，SHA-256 `ac4300f4c4301ef570428bef9e6bded5724f51263499c530fe84a935778aca8d`；组合SHA `fb13f68d7ebf96c6e58e8551c5071a74c2ebc662c359ba7087f6d549ee056f51` |
| 源依赖/视觉图 | `source/visual-rules.css`、`source/assets/`、`asset-inventory.json`、`approval_core/source-freeze.json`及`export-inventory.json`；18张正式图；当前引用均可取得 |
| Gate 4等价批准 | 历史`PRODUCT-PROC-CL_GATE5_USER_APPROVAL_AND_CLOSURE_V0.1.md`及项目控制审查，按工作流V3.1映射当前Gate 4 |
| Gate 6审查 | `05_review/PRODUCT-PROC-CL_GATE6_CONTRACT_CONSISTENCY_REVIEW_V0.1.md`；`CL-G6-F01`待独立复核 |

共享消费：Global Chrome/Production Logo/CTA/Legal/Consent、CONV-RFQ、CONV-DOC、PRODUCT-000/八Grade owner、APP-000、RES-PROC、Malaysia-origin authority；`site_scope=tio2-my`。

## 2. 内容与关系模型

按B准确顺序呈现：Breadcrumb → Hero → process解释/比较入口 → 连续八Grade列表 → 三步评估 → RFQ收尾。恰好八项且顺序固定：

`M-350`, `M-510`, `M-896`, `M-895`, `M-200`, `M-210`, `M-340`, `M-886`。

每项名称、摘要和URL逐项取B；列表是Process分类和导航，不是排名、推荐、等效、库存或Offer。五类Application只说明range层面存在相关场景及评估示例，不能推导每个Grade适用于每类Application。

Process解释保留“chloride route→TiCl4 intermediate→purification/oxidation→base pigment→finishing/treatment”的一般定义，同时保留“process label不能单独决定Grade表现”。详细chloride-versus-sulfate结论只在RES-PROC。

## 3. 动作与状态

- Hero锚点`#explore-chloride-process-grades`在JS可用时滚动并把focus移到可见B-03 heading；直接fragment和无JS时仍可用，不能依靠脚本生成内容。
- 八个Grade链接普通导航到准确Grade Page ID/route；点击不存选择、不预填RFQ/DOC。
- RFQ两个入口只传内部`source_page_id=PRODUCT-PROC-CL`，不填Grade、Application、quantity或destination。
- Documents只传相同source，不填Grade或document type；目标仍要求一个Grade和至少一个类型。
- APP-000和RES-PROC是普通导航，不传filter、推荐或比较结论。

本页没有表单、筛选、selector、loading、empty、validation、success或failure状态；这些状态属于目标owner。下游未就绪是发布依赖，不把批准入口隐藏、禁用或替换为Contact。

## 4. 完整视觉与适配

完整源由HTML、外置page visual CSS、共享Chrome样式snapshot、字体和两个Logo副本组成；freeze/inventory绑定身份。三端完整页、菜单、Cookie、anchor、CTA hover/focus等状态取18张正式图。生产高度可以随真实字体/内容自然变化，但模块顺序、八卡连续性、可读邻接、命中区和焦点语义必须保持。

Gate 8先核对现有Product卡、共享Chrome、SEO和route实现，再决定原型代码的复用/改造。`shared-chrome-style.snapshot.css`和Logo副本只作冻结证据；生产消费共享组件及Production SVG，不创建Process页面私有分叉。

## 5. SEO/GEO/Schema

- title：`Chloride Process Titanium Dioxide | TiO2 Malaysia`。
- meta：`Explore eight Malaysia-origin chloride-process titanium dioxide grades, understand what the process label means, and review product information or request a quote.`
- canonical：`https://tio2malaysia.com/products/chloride-process-titanium-dioxide/`；lang=`en`；无hreflang。
- WebPage：`@id=canonical#webpage`，name取H1，description/url/inLanguage取C，isPartOf/publisher引用同scope共享实体，breadcrumb引用BreadcrumbList，mainEntity引用ItemList。
- BreadcrumbList：Home、Products、current三项；ItemList：`@id=canonical#chloride-grade-list`、name取B-03、numberOfItems=8、ItemListUnordered、八项position/name/clean URL严格按可见顺序。position只是显示顺序，不是排名。
- 不输出Product、Offer、AggregateOffer、price、inventory、availability、rating、certification、plant/process superiority、Grade suitability、FAQPage或隐藏Application映射。

冻结原型没有JSON-LD；生产不能从卡片结构猜Schema。query/source/fragment不产生canonical、Schema或索引变体。生产index只在Gate 9和Gate 10/用户授权后启用。

## 6. 依赖

| ID | Owner / 要求 | 未满足时处置 |
|---|---|---|
| `CL-DEP-01` Grade routes | 八个Grade owner，精确Page ID、摘要关系、route和内容 | 任一错/死/跨scope阻`CL-G9-03/10`及发布；不删卡、不链接Hub代替 |
| `CL-DEP-02` RES-PROC/APP-000 | 比较Resource及Application Hub owner | 未就绪阻对应路径/发布；本页不接管全文或filter |
| `CL-DEP-03` RFQ/DOC | receiver owner；source-only及真实失败/成功 | 阻对应动作和receiver验收；不页内实现表单或Contact fallback |
| `CL-DEP-04` Product relation | Product关系owner；八项Process集合和摘要来源 | 未来变化需B/C/GEO/ItemList一并审查；未批准不动态增删/重排 |
| `CL-DEP-05` Shared | Chrome/Brand/Legal/Consent owner | 缺陷交owner；不复制snapshot；未满足阻共享/a11y/发布 |
| `CL-DEP-06` Runtime/Release | Gate 8/9与用户；SSR、scope七面、route、生产配置 | 无实际证据对应Gate 9不通过；Gate 10保持关闭 |

## 7. 稳定Gate 9接受条件

| ID | 输入与预期 | 必要证据 / 不通过条件 |
|---|---|---|
| `CL-G9-01` | 完整B、单H1、B-00至B-05、恰好八Grade及全部动作可提取 | CMS/API read-back、SSR和渲染文本逐项对B；漏项、改摘要/顺序、内部标记泄漏即失败 |
| `CL-G9-02` | 1440/768/390和批准状态保持层级、连续列表、可读/命中区 | 实际整页、状态和测量；裁切、重叠、错误卡关联、<44px或暗示性媒体即失败 |
| `CL-G9-03` | 八Grade分别到准确clean URL和内容owner，点击不存/预填 | 逐一实际点击及目标内容；错页、排名参数、隐藏选择或跨scope即失败 |
| `CL-G9-04` | 锚点在click/Enter/直接fragment/无JS下到可见B-03，适用时focus正确 | 浏览器操作及focus/URL证据；只滚动不让键盘用户定位、脚本关闭失效或隐藏target即失败 |
| `CL-G9-05` | RFQ/DOC只传source；目标保留中立可编辑字段和完整校验 | 实际首次/返回/无效query UI及脱敏请求；Grade/Application/类型自动预填或source满足必填即失败 |
| `CL-G9-06` | 目标receiver有效、无效、超时、模糊响应和重试遵守owner合同 | 与精确实现绑定的业务证据；2xx、自报PASS、本地toast或失败丢值即失败 |
| `CL-G9-07` | title/meta/canonical/lang和三节点Schema精确同源 | 抓取SSR head/JSON-LD；非8项、错序/URL、缺mainEntity/共享关系、Product/Offer或query变体即失败 |
| `CL-G9-08` | Chrome/Menu/Footer/Cookie共享消费，Products current及键盘/focus正确 | 实际键盘、可访问树和共享版本；复制私有Chrome、重复current、隐藏聚焦或Terms即失败 |
| `CL-G9-09` | 查询、路由、缓存、菜单、SEO、表单、媒体均限定`tio2-my` | 正确/错误/缺失scope和同slug缓存回归；跨站fallback或数据/媒体泄漏即失败 |
| `CL-G9-10` | 八Grade Process关系与五Application范围保持批准边界 | 可见、机器和数据源核对；增删/重排、隐藏映射、全Grade全Application或推荐推断即失败 |
| `CL-G9-11` | Malaysia origin和Process解释不扩张工厂、feedstock、优势、库存或证书事实 | 可见/Schema/社交检查；任一未批准关系或暗示性图像即失败 |
| `CL-G9-12` | Gate 8回执将ID绑定commit/ref、工作区、环境、数据关系、route、共享版本、测试/未测 | 无版本截图、自报PASS或只测happy path不接受；关系/Schema/共享变化按影响复验 |

## 8. 当前停止点

`CL-G6-F01`只表示本草案补齐生产机器语义映射；冻结原型未变，生产尚无本轮验证。不同审查者复核和用户批准前不进入`APPROVED_FOR_HANDOFF`，不实际发送Gate 8。

