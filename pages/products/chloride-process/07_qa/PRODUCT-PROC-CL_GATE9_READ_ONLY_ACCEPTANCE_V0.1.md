# PRODUCT-PROC-CL Gate 9 首轮独立只读验收 V0.1

日期：2026-09-08。Review ID：`PRODUCT-PROC-CL-G9-INITIAL-01`。

结论：**`DRAFT_FOR_BATCH_PROJECT_CONTROL_REVIEW / GATE9_NOT_PASS / CHANGES_AND_EVIDENCE_REQUIRED`**。

本轮对准确实现与3024运行对象完成了首轮独立只读验收。页面正文、八个Grade显式关系、三端默认视觉、fragment、共享菜单/Consent、SEO与社交元数据均在本地候选范围成立；但结构化数据存在确定实现偏差，`/applications/`为404，三类负向数据/缓存/scope证据及合同要求的非Chromium、原生200%缩放、真实触控和命名AT证据仍未完成。因此不能把本页标记为`READ_ONLY_QA_APPROVED`。

## 1. 接收对象与独立性

| 字段 | 本轮锁定对象 |
|---|---|
| Page / route / scope | `PRODUCT-PROC-CL` / `/products/chloride-process-titanium-dioxide/` / `tio2-my` |
| 当前Manifest | `../PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.26.md` |
| Gate 6批准包 | `../06_handoff/PRODUCT-PROC-CL_GATE6_HANDOFF_PACKAGE_V0.3.md`；`CL-G6-HANDOFF-03`；SHA-256 `f8962402e3d243bd9bdcf452a843ad1b0977a562d53ac474549be974b494061a` |
| Gate 8统一返回 | `../../../../docs/architecture/GATE8_BR_CL_COO_FOUR_PAGE_IMPLEMENTATION_RETURN_V1.0.md` |
| D16开发回执 | `D:/16Wordpress_nextjs/docs/verification/tio2-my/product-proc-cl/DEVELOPMENT_RECEIPT_2026-09-08.md` |
| D16实现 / 回执commit | `4ce8ecd121f5c4b7c89747d82d00aaff4a128b55` / `155fec8025c8fb679c9cbc90549e4533de8aca84` |
| Base / branch / worktree | `c2764e6138aa0dc37d1f6cab04bc1ae39f45aecb` / `codex/poland-development` / `D:/16Wordpress_nextjs`，本轮读回clean |
| 运行对象 | `http://127.0.0.1:3024`；local production build；`.next-document-coo-g8`；Build ID `VNjQyPGmNIKlIArsXDx9J` |
| 数据对象 | 本地WordPress `http://127.0.0.1:8080/graphql`，记录`product-proc-cl-18529` |
| 独立性 | 本Reviewer未参与D16实现或修复；未执行D16测试、构建、服务器启动、CMS写入或真实表单提交 |

运行响应HTML为46227 bytes、SHA-256 `b28bc155ba6851168cd8a63502c2b8b250ddc6f3aaca9050cd57fa68b8d411f6`，与上述Build目录的静态HTML逐字节相同。该证据把本轮页面观察绑定到声明Build；实现commit与Build生成链继续以D16返回包及回执为来源。

## 2. 关键运行观察

- WordPress GraphQL读回一个published、`tio2-my`记录，Page ID为`PRODUCT-PROC-CL`。八个关系的`registeredPageId / model / position / clean URL / exact summary`五元组逐项匹配Gate 6 §2，并与可见目录的八个`data-grade-page-id`、名称、顺序、摘要和链接一致。
- 原始SSR与运行DOM均只有一个H1，页面模块严格为`CL-01 → CL-02 → CL-03 → CL-04 → CL-05`；B V0.2正文和动作文字完整，没有页面自有表单、选择器、FAQ、媒体占位或内部治理文字。
- 1440、768、390三端均HTTP 200，无横向溢出；独立运行图已逐张打开并与`CL-G5-V01-SOURCE-01`相应原图及状态图对照。可见控件最小宽高均不少于44px。
- Explore通过点击到达并聚焦B-03 H2，下一次Tab到M-350；禁用JavaScript后原生fragment仍到达目标。主页面可见控件、Mobile Menu和Cookie Settings的正向/反向键盘覆盖、焦点环、循环和Escape恢复在Chromium 151成立。
- RFQ与Request Documents仅带`source_page_id=PRODUCT-PROC-CL`；两接收页的Grade、Application、quantity、destination、document type和country/region保持空白。本轮未提交表单。
- title、description、canonical、`lang=en`、无hreflang、preview `noindex,nofollow`、OG/X精确文本及无图分支符合合同；query、fragment及`site_scope=tio2-a`查询值没有改变页面scope与head。当前sitemap不含未发布页面，robots全站Disallow。
- `WebPage / BreadcrumbList / ItemList`三种Schema类型及八个ListItem的名称、位置和URL存在，且未发现Product、Offer、FAQ、rank、price或隐藏Grade关系；但必需字段/ID并不完整，见`CL-G9-F01`。

## 3. CL-G9-01…18覆盖

| ID | 判定 | 本轮依据与未验证边界 |
|---|---|---|
| `CL-G9-01` | `PASS` | 准确路由HTTP 200；运行根节点为`PRODUCT-PROC-CL / tio2-my`；GraphQL读回同一Page ID、scope与path；运行HTML与Build HTML逐字节相同。 |
| `CL-G9-02` | `PASS` | SSR/DOM与B V0.2双向核对：一个H1、B-00及五模块顺序、正文与动作完整一致。 |
| `CL-G9-03` | `PASS` | 独立GraphQL读回八个显式Page ID五元组；可见目录恰有八项、固定顺序且无额外Grade；按position/name/URL与Schema ListItem完成join。 |
| `CL-G9-04` | `PASS` | 点击/键盘到达可见B-03 H2，下一Tab为M-350；直接fragment及禁用JS原生fragment成立。 |
| `CL-G9-05` | `PASS` | 两类接收页只收到本页source，受禁预填均为空；八个Grade链接不携带选择上下文。未据此声称服务商接收。 |
| `CL-G9-06` | `PASS` | 页面完整无图；无broken/placeholder媒体；`og:image`、`twitter:card`和`twitter:image`均缺席。 |
| `CL-G9-07` | `NOT_VERIFIED` | 当前正确CMS payload正向路径成立，源码存在fail-closed校验；本轮不能只用Gate 8测试计数替代对缺失/error/wrong-scope及全部Page-ID/属性错误fixture的独立结果。见`CL-G9-F04`。 |
| `CL-G9-08` | `NOT_VERIFIED` | 当前响应为cache HIT且保留正确八元关系；排序和cache/tag源码已检查。有效permute、非法position、revalidation failure、invalid refresh、recovery及tuple-preservation未在本轮独立执行。见`CL-G9-F04`。 |
| `CL-G9-09` | `PASS` | 当前公开页面没有页面自有form/filter/selector/loading/result/error/success/FAQ/accordion/media state；源码把必需记录失败交给错误路径。 |
| `CL-G9-10` | `PASS` | 精确head、语言、preview robots及query/fragment/source变体稳定；sitemap保持未发布页面缺席。 |
| `CL-G9-11` | `PASS` | OG title/description/url/type与X title/description精确；当前无资产分支不输出OG/X image或X card。 |
| `CL-G9-12` | `FAIL` | ListItem主体正确，但WebPage与ItemList未满足C V0.6/Gate 6 §8的精确graph；见`CL-G9-F01`。 |
| `CL-G9-13` | `PASS` | JSON-LD及公开输出未出现Product、Offer、AggregateOffer、FAQ/QAPage、价格、库存、排名、评论、认证、工厂/生产或隐藏Grade–Application关系。 |
| `CL-G9-14` | `PASS` | 三端完整运行图、anchor、Menu、Cookie、hover/focus均与冻结视觉无实质偏差；无溢出/碰撞，全部可见控件宽高至少44px。该判定仅覆盖当前Chromium候选。 |
| `CL-G9-15` | `PASS` | 本页消费共享Header/Footer/Menu/Logo/legal/Consent；Products current成立，仅一个可见导航面；固定RFQ、三法律链接+Cookie Settings、无Terms/可见CURRENT、未见页面私有fork。 |
| `CL-G9-16` | `NOT_VERIFIED` | 当前Chromium及键盘证据成立；非Chromium、原生浏览器UI 200% zoom、真实触控设备及命名screen-reader/AT均缺。见`CL-G9-F03`。 |
| `CL-G9-17` | `FAIL` | Products、RES-PROC、RFQ、Documents、八Grade及法律路由可达；`/applications/`实际404。真实provider/接收端层未获授权执行，validation/failure/unavailable只有开发回执描述。见`CL-G9-F02`。 |
| `CL-G9-18` | `NOT_VERIFIED` | `site_scope=tio2-a`查询不能覆盖本页`tio2-my`身份，正向CMS/菜单/SEO/form context均为`tio2-my`；缺失/错误scope、同slug、缓存预热与失败前后、media及跨站矩阵未独立执行。见`CL-G9-F04`。 |

计数：`PASS 12 / FAIL 2 / NOT_VERIFIED 4 / NOT_APPLICABLE 0 = 18`。

## 4. 当前Finding台账

### `CL-G9-F01` — Schema graph未兑现批准的精确WebPage/ItemList合同

| 字段 | 内容 |
|---|---|
| Gate 9条件 | `CL-G9-12` |
| 版本/环境 | implementation `4ce8ecd…`；receipt `155fec8…`；Build `VNjQyPGmNIKlIArsXDx9J`；3024 local production runtime |
| 位置 | D16 `lib/seo/product-process-chloride-jsonld.ts`及页面SSR的`application/ld+json` |
| 预期 | WebPage `name`等于B-01 H1；带shared Organization `publisher`及指向Grade ItemList的`mainEntity`；ItemList `@id`为Canonical+`#chloride-grade-list`，且`name`等于B-03 heading。 |
| 实见 | WebPage `name`为SEO title（多出`| TiO2 Malaysia`）；`publisher`、`mainEntity`缺失；ItemList `@id`为`#grades`；ItemList `name`缺失。其余三节点类型、breadcrumb、八个ListItem及禁止扩张检查成立。 |
| 影响/严重度 | 明确机器合同偏差；本轮实现必修，阻止`CL-G9-12`及整页Gate 9通过。 |
| 责任方 | Gate 8页面Schema实现owner。 |
| 关闭条件 | 新commit输出C V0.6 §7.1和Gate 6 §8所列精确字段/ID；D16回执列明修复及对应测试；Gate 9绑定新Build独立读回SSR JSON-LD，并复核CMS五元组→可见目录→ItemList join和`CL-G9-13`相邻禁止项。 |

### `CL-G9-F02` — Applications目标404且receiver较后层级未完成

| 字段 | 内容 |
|---|---|
| Gate 9条件 | `CL-G9-17`；`CL-DEP-ROUTES/RFQ/DOC-01` |
| 实见 | 2026-09-08在同一3024候选访问`/applications/`最终返回404；其余本页要求的页面目标均可达。RFQ/Documents入口与空预填已独立验证，但本轮没有真实提交、provider接受或最终收件授权。 |
| 影响/严重度 | 完整买家路径有一个确认的死链；同时不能把入口层PASS升级为外部接收PASS。阻止`CL-G9-17`及完整站发布判断。 |
| 责任方 | `APP-000` route owner；CONV-RFQ/CONV-DOC receiver及release owner。Chloride页面owner仅在目标或source参数发生变化时参与。 |
| 关闭条件 | 同一release candidate中`/applications/`到达批准的APP-000页面；receiver owner提供与该候选关联的positive、validation/failure/unavailable及合同要求的provider/收件层证据。Gate 9只读复验链接和接收层级，不要求本页隐藏或改链。 |

### `CL-G9-F03` — 合同指定的四类可访问性环境证据缺失

| 字段 | 内容 |
|---|---|
| Gate 9条件 | `CL-G9-16`；四个`CL-DEP-A11Y-*` |
| 已验证 | Chromium 151、1440/768/390、页面键盘全序、anchor、Menu、Cookie及可见focus。 |
| 缺失 | 至少一个适用非Chromium引擎、真实浏览器UI 200% zoom、真实触控设备、命名screen-reader/AT与无障碍树/播报证据。当前主机没有可用Playwright Firefox executable。 |
| 责任方 | Gate 9/accessibility environment owner；需环境准备时由D16或设备owner提供准确候选。 |
| 关闭条件 | 四类证据都绑定同一候选，覆盖页面、anchor、当前导航面、Menu、Cookie、focus/reading order和长Grade列表，并清楚区分环境与替代限制。 |

### `CL-G9-F04` — 负向payload、缓存恢复和完整scope隔离仍缺独立可复核证据

| 字段 | 内容 |
|---|---|
| Gate 9条件 | `CL-G9-07`、`CL-G9-08`、`CL-G9-18` |
| 已验证 | 正确WordPress record→GraphQL→SSR链、显式Page ID五元组、cache HIT、query不能覆盖scope、源码校验/标签路径。 |
| 缺失 | missing/error/wrong-scope、缺失/额外/重复/未知Page ID、Page-ID各属性错配、合法permutation与非法position、revalidation/cache-origin failure、invalid refresh/recovery、同slug/跨scope缓存预热前后，以及query/route/cache/menu/SEO/form/media全矩阵的独立输出。开发回执的测试计数不替代这些结果。 |
| 责任方 | Gate 8 page/API/cache/platform owner提供可复核的commit-bound输出或安全隔离候选；Gate 9独立读回/运行获准的只读验证。 |
| 关闭条件 | 耐久证据逐项显示受禁输入fail closed、无partial/fallback/tuple repair/跨scope泄露，合法position排序且invalid refresh不污染last-known-good；证据绑定新或当前未变commit、Build、CMS/fixture模式及恢复结果。 |

## 5. 证据入口与边界

本轮结构化诊断：`gate9-v0.1/acceptance-diagnostics.json`。独立运行截图位于`gate9-v0.1/`，包括三端完整页、M-896 hover、anchor focus、390 Menu及Cookie状态；全部已按原始尺寸打开。三端独立运行图与D16正式三端原件的SHA-256逐一相同，支持两套图来自同一确定运行结果，但hash不替代上述目视与操作判断。

证据分类：HTTP/GraphQL/浏览器DOM、几何、键盘与接收页观察为`ACTUAL_RUNTIME`；D16源码/差异与Build静态HTML为`SOURCE_INSPECTION`；批准冻结图和D16交付图为`STATIC_VISUAL`。本轮没有`LOCAL_SIMULATION`、真实外部接收或生产环境证据。

Gate 9当前停止点：将`CL-G9-F01`定向退回Gate 8；`CL-G9-F02`按路由与receiver owner关闭；`CL-G9-F03/F04`补齐准确证据后复验。该结论不授权D16修复以外的范围、Gate 10、合并、部署、生产写入、DNS、sitemap发布或索引。
