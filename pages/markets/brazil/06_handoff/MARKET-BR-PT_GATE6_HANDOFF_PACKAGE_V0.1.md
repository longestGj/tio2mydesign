# MARKET-BR-PT Gate 6 引用式开发交付包 V0.1

日期：2026-09-07。Package ID：`BR-PT-G6-HANDOFF-01`。状态：`DRAFT_FOR_PROJECT_CONTROL_REVIEW`。用户未批准本包，规划路径不等于生产路由，未外发，Gate 8–10未授权。

## 1. 锁定组合

| 职责 | 当前来源 |
|---|---|
| 页面入口 | `pages/markets/brazil/MARKET-BR-PT_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md` |
| 正文B | `04_planning/MARKET-BR-PT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`；唯一PT-BR正文源 |
| 行为C | `04_planning/MARKET-BR-PT_GATE2_CONTENT_CONTRACT_V0.2.md`；本地化、动作、SEO/GEO/Schema权威 |
| 结构 | `04_planning/gate3-pt-v0.1/MARKET-BR-PT_GATE3_RESPONSIVE_WIREFRAME_V0.1.html` |
| 完整视觉源 | `04_planning/gate4-pt-v1.1/MARKET-BR-PT_GATE4_COMPLETE_VISUAL_V1.1.html`，25092 bytes，SHA-256 `1159f03eb5018f73ba497cca77ed4d9903c10d2bb3a6c2612c51da89757a0357` |
| 冻结/依赖/图 | 同目录`MARKET-BR-PT_GATE4_FREEZE_RECORD_V1.1.json`和`approval_core/export-inventory.json`；59项递归身份及当前本地引用可取得 |
| Gate 4批准 | `05_review/MARKET-BR-PT_GATE4_USER_APPROVAL_AND_CLOSURE_V1.0.md`和最终独立复审report |
| Gate 6审查 | `05_review/MARKET-BR-PT_GATE6_CONTRACT_CONSISTENCY_REVIEW_V0.1.md`；`BR-PT-G6-F01`待独立复核 |

共享owner、receiver、fact和`site_scope=tio2-my`引用与English Brazil包相同；本页不复制English正文。对应关系仅用于事实/alternate核对。

## 2. 内容、本地化与视觉

Next.js按B顺序呈现PT-BR Breadcrumb/Hero、English目标提示、三Application、Documents、Trade、RFQ准备及共享Chrome。正文语言为`pt-BR`；当前目标页、表单与共享Chrome可保持English，必须保留可见提示“Os links desta página levam a conteúdos e formulários disponíveis em inglês.”，不能混合成未经批准的局部翻译。

`para o Brasil`和交付地点语境必须保留，不能生成Brazil本地公司/库存含义。字段名`Product / Grade`、`Not sure / Need help`、`Application`、`Other / Not sure`和`Additional Requirements`在B中为帮助买家识别English receiver控件的批准引用。

完整视觉、三端、菜单/Cookie及focus状态取冻结清单。无业务图为正常分支。原型可以辅助复用，但生产使用共享Chrome/Logo/Legal/Consent owner，不复制页面局部快照形成分叉。

## 3. 动作和语言切换边界

- 葡语CTA打开当前English目标；标签语言不改变目标owner、字段或成功语义。
- RFQ：Brazil为可见可改`destination_country`初值，source内部归因；不覆盖已修改值，不预填其他字段。
- Documents：source-only，不填Grade、文件类型或公司`Country / Region`，不因邻接COO句自动选择origin类型。
- Product/Application/Trade均是普通导航；不传推荐、适配、贸易结论或语言已本地化的机器关系。
- 页面没有表单或提交状态；接收成功/失败按RFQ和DOC当前合同及运行记录验证。

## 4. SEO/GEO/Schema及alternate

- title：`Fornecedor de dióxido de titânio para o Brasil | TiO2 Malaysia`。
- meta：`Dióxido de titânio originário da Malásia para compradores no Brasil. Conheça grades para tintas, plásticos e masterbatch. Solicite documentos ou uma cotação.`
- planning canonical：`https://tio2malaysia.com/pt-br/markets/brazil/`；lang=`pt-BR`。
- WebPage.name取H1 `Dióxido de titânio originário da Malásia para compradores no Brasil`，并带同scope共享WebSite/Organization、可见PT-BR BreadcrumbList关系。
- reciprocal `en↔pt-BR` hreflang只能在两页的生产route、canonical、批准内容及live响应均成立后同时输出；任一不成立时不得输出指向不存在/未批准页面的alternate。本合同没有批准`x-default`，不得自行增加。
- 不创建Brazil LocalBusiness、Product/Offer、trade status、证书可用性、FAQ或隐藏English机器正文。索引仍由Gate 10控制。

## 5. 依赖

| ID | Owner / 要求 | 未满足时处置 |
|---|---|---|
| `BR-PT-DEP-01` | PT route、canonical及English counterpart owner | 阻`BR-PT-G9-03/07/11`和发布；不得用EN route作为canonical fallback |
| `BR-PT-DEP-02` | RFQ/DOC receiver与English目标提示 | 阻对应行动路径；不在本页翻译或分叉receiver |
| `BR-PT-DEP-03` | Product/Application/Document/Trade routes | 死链或错scope阻相关路径/发布；不隐藏必需入口 |
| `BR-PT-DEP-04` | RES-TRADE-BR官方来源和06/09/2026显示日期 | owner发布前刷新；不把市场页升级成贸易结论页 |
| `BR-PT-DEP-05` | Chrome/Brand/Legal/Consent共享消费 | 共享问题交owner；页面不建PT私有Chrome |
| `BR-PT-DEP-06` | SSR、七面scope隔离、生产配置、用户发布/索引决定 | 无实际证据则对应Gate 9不通过；Gate 10关闭 |

## 6. 稳定Gate 9接受条件

| ID | 输入与预期 | 必要证据 / 不通过条件 |
|---|---|---|
| `BR-PT-G9-01` | 指定实现完整渲染PT-BR B、单H1、模块/动作/English提示 | CMS/API read-back、SSR和可见文本对B；漏文、再翻译、内部标签或English提示缺失即失败 |
| `BR-PT-G9-02` | 1440/768/390在葡语长词下保持批准层级、换行、命中区与焦点 | 实际整页/状态/测量；裁切、横向溢出、重叠、<44px或语义错位即失败 |
| `BR-PT-G9-03` | 规划route在生产准确绑定，不跨scope/语言fallback | clean/query/错误scope请求及点击证据；错页、假live、EN canonical替代即失败 |
| `BR-PT-G9-04` | RFQ Brazil初值可见可改，保留买家修改，无其他推断 | 实际UI和脱敏传输；锁定/覆盖、company country或Grade/Application预填即失败 |
| `BR-PT-G9-05` | Documents只传source，Grade/类型仍由买家选择 | 实际UI/请求/校验；Brazil、COO或Grade自动选择即失败 |
| `BR-PT-G9-06` | English receivers的成功、失败和恢复遵守owner合同 | 与精确实现绑定的业务证据；仅2xx、toast、翻译标签或自报PASS即失败 |
| `BR-PT-G9-07` | title/meta/canonical/lang/WebPage/Breadcrumb精确，query不变体 | 实际SSR head/JSON-LD；缺共享关系、隐藏English语义、禁止节点或越权index即失败 |
| `BR-PT-G9-08` | 仅在两页同时live时输出双向`en`/`pt-BR`，无未批准x-default | 同时抓取双方head和最终响应；单向、错误URL/locale、未live仍输出即失败 |
| `BR-PT-G9-09` | Chrome/Menu/Footer/Cookie共享English状态与PT页焦点/current正确 | 实际键盘/可访问树/共享版本；重复current、隐藏面聚焦、Terms或伪PT组件即失败 |
| `BR-PT-G9-10` | 七面均严格`tio2-my`，PT/EN缓存和SEO不串页 | 正确/错误/缺失scope及两语言缓存回归；跨站或跨语言污染即失败 |
| `BR-PT-G9-11` | COO、Malaysia origin、Applications及Trade保持批准限定和日期 | 可见/机器检查与owner当前来源；当地实体、推荐、每票证书、确定贸易结果即失败 |
| `BR-PT-G9-12` | Gate 8回执绑定ID、commit/ref、环境、内容源、共享版本、测试/未测 | 截图或无版本PASS不接受；语言/route/head变化按影响复验 |

## 7. 当前停止点

本草案只澄清生产canonical/hreflang/Schema要求，不证明它们已实现。不同审查者复核及用户批准前保持草案；实际外发、Gate 8、部署和索引未授权。

