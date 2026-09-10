# 当前 3100 预发布内链运行审查 V1.0

## 0. 审查结论

| 字段 | 结论 |
|---|---|
| Review ID | `PRERELEASE-3100-IL-RR-20260910-01` |
| Work type / mode | `INTERNAL_LINK_REVIEW / RUNTIME_REVIEW` |
| Site scope | `tio2-my` |
| 允许来源 | 仅 `http://127.0.0.1:3100` |
| 当前运行入口 | `http://127.0.0.1:3100/` |
| 证据时间 | 2026-09-10 19:18–19:19（Asia/Shanghai） |
| 专项结果 | `CHANGES_REQUIRED` |
| Required Finding | 2：沿用 `SCT-G9-F02-CONTACT-TARGET`；新增 `ILR3100-F01-CANONICAL-REDIRECT-PARITY` |
| 停止点 | `READ_ONLY_REVIEW_COMPLETE / RETURN_TO_PROJECT_CONTROL` |

当前 58 个预发布对象均已实检：57 个具体页面路由返回正确页面的 `200`，`SYS-404` 以真实未知路径返回 `404` 并在 hydration 后显示批准恢复页；另对不在本轮完成集合内的 `CONTACT-001` 做了依赖探针。总共记录 2,494 个实际 DOM `a[href]` 实例、109 个唯一同源 query-aware 请求目标、123 个 fragment 实例和 0 个禁用伪链接。

专项不能通过，原因不是链接数量或孤立页，而是两项可复现的路径缺陷：About 两处与 SYS-404 一处 Contact 行动仍落到 `404`；另有 1,596 个链接实例先从登记的尾斜杠 URL `308` 到无尾斜杠地址，而最终页面仍声明尾斜杠 Canonical，构成全站共享 route/Canonical parity 偏差。

本结论不关闭页面 Gate，不启动 Gate 9/10，不批准合并、部署、发布、DNS 或索引。

## 1. 身份、继承与方法

本轮从当前 [59 页登记册](../../PAGE_REGISTRY_V0.2.md)、[页面—关键词主表](../../../../research/keyword/11_page_keyword_master.csv)、[项目状态](../../../../00_PROJECT_STATUS.md)、[Global Chrome V0.5](../../GLOBAL_HEADER_FOOTER_SPEC_V0.5.md)、[Footer Legal V1.0](../../GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md)及相关当前 Manifest/交付合同建立独立预期集。

当前运行身份只能绑定到可观察层：

| 证据 | 值 |
|---|---|
| Root ETag | `"12ltylxvzct1b2n"` |
| Root HTML SHA-256 | `8c66a0eaae2c07e988e046991a7349253859fe9df8aa5d222541f5be2d84f00e` |
| 59 对象 route/HTML fingerprint | `d42691c36fa52a5f54b47f7333dd5c00b72eb1587f6a2d79cee3edbb2204ad38` |
| Root `tio2-my` source marker | 36 次 |
| Root Next static asset | 45 个唯一引用；集合 fingerprint 见运行证据 JSON |
| 框架证据 | `X-Powered-By: Next.js`、`X-Nextjs-Prerender: 1` |
| 精确 commit / run / Build / CMS 身份 | `NOT_PROVEN`；运行响应不暴露可验证 Build ID，且本任务不读取 D16 实现目录 |

旧 [58 对象报告](../PRERELEASE_58_INTERNAL_LINK_RUNTIME_REVIEW_V1.0.md)只作 Finding 历史来源，未继承其 PASS。旧证据的 Home 为 50 个 anchor 加 6 个 disabled link role；当前 Home 为 56 个 anchor、0 个 disabled link role，已经证明 DOM/数据状态不同。旧固定 commit `98c2c573…`、run 与 Build 不能据当前响应再次证明。

采集采用单并发、GET-only、最多 8 跳重定向、15 秒超时。58 个具体路由按登记集逐一请求；浏览器逐页读取 hydration 后 DOM；唯一同源目标去重后以 GET 检查响应链、最终标题/H1/Canonical/robots；外链、`mailto:`、表单、Cookie Settings 和业务行动均未触发。移动端仅在 390×844 打开共享菜单读取 DOM/可访问树，没有提交或修改设置。

## 2. 预期集、发现集与索引状态

| 集合 | 对象/路由 | 实际结果 |
|---|---:|---|
| 当前登记对象 | 59 | 58 个具体 URL + 1 个 `RUNTIME_FALLBACK` |
| 当前授权本地预发布对象 | 58 | 原 56 页 + `CONV-THANK` + `SYS-404`；`CONTACT-001`按批准例外不计完成对象 |
| 预发布具体页面 | 57 | 57/57 正确身份 `200` |
| 系统恢复对象 | 1 | 真实未知路径 `404`；hydrated H1 与 5 个恢复行动存在 |
| 依赖探针 | 1 | `CONTACT-001 /contact/`：`308 /contact` 后 `404` |
| 从 Home 实际可达的 `200` 页面 | 56 | 除提交后 `CONV-THANK`外，所有应公开发现的具体页面均可达 |
| 故意无公共入链 | 2 个特殊对象 | `CONV-THANK` 是提交后结果页；`SYS-404` 只由未知请求触发 |
| 未预期孤立的内容页 | 0 | 没有从 Home crawl 代替登记集；以独立 59 对象清单交叉核对后判断 |

`CONTACT-001`是登记页面和买家可见目标，但不属于已批准的 58 对象完成集；它以三个断裂实例实际影响当前路径，见 Finding。`CONV-THANK`零正文入链符合提交后 utility 职责，未按“孤立页”判错。

当前是明确的私有预发布索引状态：`robots.txt`为`Disallow: /`，57 个 `200`页面均为`noindex, nofollow`，真实 404 为`noindex, follow`；`sitemap.xml`只有生产域 Home 一条 URL。该 sitemap 不能证明当前页面覆盖，也不代表完整发布集合。由于 Gate 10/索引未授权，本报告不把私有 noindex 状态列为本轮内链缺陷；发布候选必须另行重测 robots、sitemap、Canonical 与公共资格。

## 3. 实际链接清单摘要

| 项目 | 数量 | 结果 |
|---|---:|---|
| DOM `a[href]` 实例 | 2,494 | 58 个预发布对象 + Contact 空白依赖探针 |
| 同源页面链接 | 2,252 | 均在允许 origin 内请求 |
| 同页 fragment | 123 | 123/123 目标存在 |
| 外链 | 104 | 只识别，不请求外部域名 |
| `mailto:` | 15 | 只识别，不触发 |
| 禁用伪链接 | 0 | 旧 Home 6 个实例不再出现 |
| 唯一同源 query-aware 目标 | 109 | 108 个最终 `200`；Contact 1 个最终 `404` |
| 直接 PASS 实例 | 776 | 无断裂、无 route/Canonical 偏差 |
| `REDIRECT_CANONICAL_MISMATCH` | 1,596 | 47 个唯一 query-aware 请求目标 |
| `BROKEN_OR_NON_200` | 3 | 全部指向 Contact |
| 未请求外部/动作实例 | 119 | 104 外链 + 15 `mailto:` |

详细来源 URL、模块、上下文、锚文本/可访问名称、raw href、resolved URL、query/fragment、响应链、最终身份与结果在 [machine inventory](PRERELEASE_3100_INTERNAL_LINK_INVENTORY_V1.0.json)。

## 4. Required Findings

### 4.1 `SCT-G9-F02-CONTACT-TARGET` — OPEN / REQUIRED / RELEASE BLOCKING

本项沿用，不建立重复 ID。

| 来源对象 | 模块 / 锚文本 | 实见 |
|---|---|---|
| `ABOUT-001` | `Malaysia-Based Titanium Dioxide Supply for Global Markets` / `Contact Us` | `/contact/ → 308 /contact → 404` |
| `ABOUT-001` | `Discuss Your Titanium Dioxide Requirements` / `Contact Us` | 同上 |
| `SYS-404` | 恢复行动 / `Contact Our Team` | 同上 |

最终目标 title 是 `Page Not Found | TiO2 Malaysia`，无 Contact H1/Canonical。浏览器直接进入该重定向目标时观察到空 body，而真实未知 URL 能正常 hydration 为 SYS-404；因此买家从 About 或错误恢复页进入 Contact 的路径仍中断。

批准目标就是 `CONTACT-001 /contact/`，不能为消除 404 删除、隐藏或改指 RFQ。当前 [Contact Manifest V0.8](../../../../pages/contact/CONTACT-001_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md)证明独立 Contact 候选存在，但没有证据把它绑定到本次 3100 运行身份；问题分类为`INTEGRATION/DEPENDENCY GAP`，统一交 Project Control 协调当前 prerelease 集成与 Gate 8 route owner。

关闭条件：在同一个可识别的更新候选中，`/contact/`按批准 URL/语言/scope到达 Contact 页面；复验上述三个实例、响应/重定向/Canonical、Contact H1、404恢复页和共享消费者。预发布启动例外不构成发布豁免。

### 4.2 `ILR3100-F01-CANONICAL-REDIRECT-PARITY` — NEW / OPEN / REQUIRED

登记册与页面合同使用尾斜杠 URL。当前运行中有 29 个注册页面先把该 URL `308` 到无尾斜杠地址，最终 `200` 页面又声明尾斜杠 Canonical。例如：

- `/about/ → 308 /about → 200`，Canonical `/about/`；
- `/products/m-350/ → 308 /products/m-350 → 200`，Canonical `/products/m-350/`；
- `/request-a-quote/?… → 308 /request-a-quote?… → 200`，Canonical `/request-a-quote/`；
- `/privacy-policy/ → 308 /privacy-policy → 200`，Canonical `/privacy-policy/`。

所有 58 个预发布对象都包含至少一个受影响实例，合计 1,596 个成功但多跳的链接实例、47 个唯一 query-aware 请求目标；29 个页面本身存在最终 path 与 Canonical path 不一致。另有 3 个 Contact 实例走同类去斜杠 `308` 后落到 `404`，归前一 Finding。

这不是单纯性能建议。最终响应地址与自声明 Canonical相反，且内部链接指向会被服务器改写的版本，违反登记 URL、Grade 的批准尾斜杠 Canonical合同和既有 route/Canonical parity 判断。`MARKET-G9-P0-01`只对应先前 MARKET-000 修复；当前 `/markets/`自身没有该偏差，因此不重开或冒用该已关闭 ID。本项是首次覆盖其余共享消费者的新全站 Finding。

责任分类为`SHARED ROUTE IMPLEMENTATION DEFECT`，按角色边界交 Project Control协调 Gate 8共享 route/redirect owner。关闭条件是在同一更新 build 中选择并贯彻批准 URL方向：内部 href、直接响应、最终浏览器 URL、Canonical、hreflang/Schema/sitemap保持一致；query保留但不改变 Canonical identity；随后定向复验 29 页、47 个唯一变体及共享 Header/Footer消费者，不需要重扫未受影响外链。

## 5. 关系与买家路径判断

### 5.1 通过的语义关系

- 五个 Application detail 的实际 Grade 集合逐项匹配 PRODUCT V0.3：Coatings `8/8`、Plastics `8/8`、Masterbatch `7/7`、Printing Inks `4/4`、Paper `2/2`，无缺失或越界。
- Chloride `8/8` 与 Sulfate `5/5` Grade分类匹配 PRODUCT V0.3；没有从工艺链接推导适用性、排序或优劣。
- `APP-000`显示 30 个批准 Grade occurrence、14 个唯一 Grade目标、5 个 child Application目标与3个支持 Hub目标；均返回正确身份。
- `PRODUCT-000`显示 23 个 Grade链接实例、14个唯一 Grade目标、2个 Process目标和3个支持 Hub目标；`CR-901`已有正文入口。
- `RES-000`显示全部8个 Resource内容页入口；旧报告中的三个无正文入链 Resource候选已不再出现。
- Documents guides不再为零正文入链；旧`ILR58-O01`发现性建议的运行症状已消失，不据此声称其内容/发布已批准。

### 5.2 Shared Chrome、语言与utility路径

58/58预发布对象的 Desktop Header、隐藏 Mobile DOM、Footer与法律行使用同一顺序。50个有映射对象在Desktop/Mobile每个surface各1个`aria-current=page`；8个Conversion/Legal/SYS对象各0个。390×844打开菜单后可访问顺序为`Home → Markets → Products → Applications → Documents → Resources → About → Request a Quote`，隐藏Desktop surface为`display:none`。Footer法律顺序为`Privacy Policy → Dasar Privasi (BM) → Cookie Policy`，无 Terms链接。

`MARKET-BR-PT`实际`lang=pt-BR`，BM Privacy实际`lang=ms-MY`；未见同源链接落到错误语言或其他 scope。Contact例外之外，404恢复的Products/Home/Documents/RFQ四个行动均到正确身份；本任务未提交任何表单，Thank You只检查直接/负态导航关系。

### 5.3 仍须由 Controller维持的发布依赖

当前 runtime 已把旧 Home `P0-03`的6个伪链接变为真实链接，也实际激活了`PRODUCT-G6-B03`、`APP000-G6-D03/D04/D05`和`RES-R002–R005`对应的 Hub路径。技术目标和关系检查通过，但当前 Status仍把这些项目记为公共资格/发布集合依赖，且本轮无法证明精确 build、Gate 10或公共资格决定。

因此本报告不关闭这些既有 ID，也不把私有 prerelease 的可点击状态当成发布批准。Project Control应在发布前把当前目标资格决定与精确 build绑定；若资格获批，复用本轮关系清单做定向 route/Canonical复验；若资格未批，按原合同恢复对应 fail-closed状态。它们作为`OPEN RELEASE DEPENDENCIES / NOT CURRENT BROKEN-LINK INSTANCES`单列，不增加本轮 Required Finding 数。

## 6. 限制与交回

- 精确 commit、run、Build和CMS数据身份无法从当前响应证明；所以本轮观察可用于定位运行问题，但不能覆盖需要commit-bound证据的Gate验收。
- `robots.txt`阻止爬虫且sitemap只有Home；完整性来自独立登记/状态/Manifest预期集加实际全路由检查，不来自Home crawl或sitemap。
- 外部URL只记录，未请求；`mailto:`、Cookie Settings、表单、tel、下载及真实业务动作均未触发。
- 没有测试表单接收、provider/inbox、Consent持久化、真实设备、完整视觉、全部SEO/Schema或发布配置；它们不属于本专项结论。
- 没有修改代码、CMS、页面正文、共享导航、Manifest、Status或Index；没有向其他任务发消息。

`PRERELEASE-3100-IL-RR-20260910-01 = CHANGES_REQUIRED / 2 REQUIRED FINDINGS / RETURN_TO_PROJECT_CONTROL`

