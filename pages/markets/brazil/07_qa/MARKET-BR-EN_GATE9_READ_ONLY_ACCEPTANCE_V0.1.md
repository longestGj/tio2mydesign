# MARKET-BR-EN Gate 9 独立只读验收 V0.1

日期：2026-09-08。Review ID：`BR-EN-G9-ACCEPTANCE-01`。对象：`MARKET-BR-EN` / `/markets/brazil/` / `site_scope=tio2-my`。

## 1. 结论与精确身份

**`CHANGES_AND_DEPENDENCIES_REQUIRED / GATE9_NOT_PASS`**

| Field | Independently read back |
|---|---|
| Gate 6 package | `BR-EN-G6-HANDOFF-02` V0.2；SHA-256 `d8b7c2e759d9952d7b94a09bc397a2837dbf6f80c0b3d968c2b0324a3ad6b18a` |
| D16 implementation / receipt | `4ce8ecd121f5c4b7c89747d82d00aaff4a128b55` / `155fec8025c8fb679c9cbc90549e4533de8aca84` |
| D16 HEAD / status | `155fec8025c8fb679c9cbc90549e4533de8aca84` / clean |
| Runtime | `http://127.0.0.1:3024/markets/brazil/` 返回 HTTP 200 |
| Production build | `.next-document-coo-g8` / Build ID `VNjQyPGmNIKlIArsXDx9J` / `SITE_ID=tio2-my` |
| CMS/API | WordPress GraphQL `market-br-en-18525`，`publish`，`siteScopes=tio2-my`，`publicPath=/markets/brazil`，payload SHA-256 `d035bf2459c4271e8086cd91a35c0a5433530253583042e90d0b95f7f6b474ca` |

D16单页回执中的`current HEAD=c2764e6`/dirty/3021/`t5J...`是串行开发时的历史现场；本轮用D23四页统一返回V1.0和实际读回的final HEAD/clean/3024/`VNj...`绑定验收。本轮未运行D16测试、build或server，未写入D16，未发送真实表单。

## 2. Gate 9逐项判定

| ID | Result | Independent evidence and boundary |
|---|---|---|
| `BR-EN-G9-01` | **PASS** | CMS GraphQL、SSR初始HTML和hydrated DOM均是单H1、五模块、完整正文和逐实例动作；未出现Gate/CURRENT/占位字样。 |
| `BR-EN-G9-02` | **FAIL** | 1440/768/390截图已打开，实际页可读且无水平溢出，逐控件实际键盘focus可见、命中区均≥44 CSS px；但页面没有实现Gate 4 V1.1冻结的完整视觉组合，见`BR-EN-G9-F01`。真实touch、non-Chromium、native 200%仍未验证。 |
| `BR-EN-G9-03` | **FAIL** | Product/Document/RFQ/DOC/Legal目标可达；三个Application与Brazil Trade目标在3024实际返回404，见`BR-EN-G9-F02`。 |
| `BR-EN-G9-04` | **FAIL** | fresh Hero/Final可见初值为Brazil，内联和shared RFQ不预填；但buyer把目的国改为Chile后离开并browser back，字段被重置为Brazil，见`BR-EN-G9-F03`。 |
| `BR-EN-G9-05` | **PASS** | Request Documents实际到达仅带`source_page_id=MARKET-BR-EN`；Country/Application/Grade/document types均空。在拦截POST的无外发检查中，空表单同时报Grade与Document Types可见校验错误。 |
| `BR-EN-G9-06` | **NOT_VERIFIED** | 本轮按边界不真实提交；RFQ/DOC正向receipt、provider/邮箱分层及timeout/network/server/malformed/ambiguous/retry仍缺该准确实现的脱敏证据。 |
| `BR-EN-G9-07` | **PASS** | clean/query/preview读回一致；Title、Meta、Canonical、`lang=en`、`noindex,nofollow`正确。JSON-LD仅`WebPage`+`BreadcrumbList`，`WebPage.name`=H1，并引用同scope `WebSite`/`Organization`。 |
| `BR-EN-G9-08` | **NOT_VERIFIED** | Markets current、生产Logo、无可见CURRENT/无Terms、Menu focus/Escape/return/scroll lock和Cookie对话框命名、trap、Escape/return均在Chromium实操成立；真实AT和native 200%未运行。 |
| `BR-EN-G9-09` | **NOT_VERIFIED** | fresh profile未观察到optional analytics request、cookie/local/session storage；源码和CMS读回表明`tio2-my`限定。错误/缺失/外国scope、全HAR/storage/dataLayer/log/Privacy parity矩阵未独立运行。 |
| `BR-EN-G9-10` | **PASS** | 可见正文、CMS/API、metadata和Schema扫描仅表达批准的Malaysia origin、精确COO句子和中性Application路径；未见Brazil实体/库存/推荐/税率/运输扩张。 |
| `BR-EN-G9-11` | **FAIL** | Market显示批准的`6 September 2026`和精确owner route，但目标实际404，且当前RES-TRADE-BR V0.10仍为Gate 8开发中；无可达页和发布前官方来源新鲜度读回。 |
| `BR-EN-G9-12` | **PASS** | 统一返回、Git、Build ID、CMS payload、runtime和回执提供的实现/数据链/差异/回滚/未测项可重现地绑定同一对象。其他AC中的FAIL/NOT_VERIFIED仍阻断整体PASS。 |

计数：`PASS=5 / FAIL=4 / NOT_VERIFIED=3 / N/A=0`。

## 3. Required Findings

### `BR-EN-G9-F01` — 批准的Gate 4完整视觉组合未实现

- Severity / mapped AC：`REQUIRED / BR-EN-G9-02`.
- 实见：D16实际CSS基本是Gate 3风格。它缺少V1.1冻结中的Hero market badge/几何网格/竖向标记，带编号和阴影的三张Application卡，深蓝Documents区、COO强调块和TDS/SDS/COA/COO视觉，Trade的绿色交接带，以及RFQ编号清单/摘要块。H1/段落尺寸和区块节奏也不同。Secondary CTA hover无V1.1的aqua background/border/translate，Primary hover仅变色而缺少批准阴影/translate。
- Responsibility：Gate 8 / D16 `MARKET-BR-EN` page visual implementation；不需重开正文或Gate 4。
- Closure：按`BR-EN-G4-V11-SOURCE-01`的责任和批准三端组合实现；交付新commit/build的1440/768/390、focus/hover/reduced-motion证据，并由Gate 9对该Finding及共享Chrome相邻面做定向复验。

### `BR-EN-G9-F02` — 四个批准页面动作在准确运行入口为404

- Severity / mapped AC：`REQUIRED_DEPENDENCY / BR-EN-G9-03, BR-EN-G9-11`.
- 实见：`APP-COAT`、`APP-PLAS`、`APP-MB`和`RES-TRADE-BR`的精确route均HTTP 404；页面本身的href没有改错。
- Responsibility：各Application owner与`RES-TRADE-BR` Gate 8 owner；Brazil EN页只负责在owner完成后重验链接。
- Closure：四条route在同一`tio2-my`发布候选Build返回正确Page ID/内容，无跨scope/fallback；Trade owner同时附当日有效官方源时效检查。

### `BR-EN-G9-F03` — RFQ在browser return时覆盖buyer已修改的目的国

- Severity / mapped AC：`REQUIRED / BR-EN-G9-04`.
- 实见：从Hero RFQ进入后Brazil正确显示为可编辑初值；buyer改为`Chile`，离开RFQ再browser back，字段恢复为`Brazil`。
- Responsibility：`CONV-RFQ` shared owner / Gate 8 implementation。
- Closure：fresh navigation仅初始化一次；return/history restoration保留buyer值。用Hero、Final、Documents inline、shared RFQ分实例提交新的fresh/modified/return/invalid脱敏证据，并复验其他消费该共享RFQ prefill的页。

## 4. 保留依赖与停止边界

- `BR-EN-DEP-02/03`：真实RFQ/DOC receiver、provider/邮箱和失败恢复未验，本页不实施receiver。
- `BR-EN-DEP-04`：Trade route未完成，时效复核不能由Market页替代。
- `BR-EN-DEP-05/06`：真实AT、non-Chromium、touch、native 200%、完整scope/analytics/storage矩阵及Preview/Production环境仍待后续绑定。

本结论不否定Gate 1–4/6既有批准，不代表Gate 10、合并、部署、生产WordPress写入、DNS、sitemap或索引获准。
