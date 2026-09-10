# Germany / Italy / Sulfate / R-706 / Chemours Gate 9 独立只读审查 V1.0

日期：2026-09-08  
任务：`G8-DE-IT-SU-R706-CHEMOURS-20260908-01`  
审查结论：`CHANGES_AND_EVIDENCE_REQUIRED / PAGE_GATE9_NOT_PASS`（5/5）

69项AC汇总：`39 PASS / 10 FAIL / 20 NOT_VERIFIED`。

## 1. 锁定候选与审查边界

| 项 | 锁定值 / 实测值 |
|---|---|
| Site / pages | `tio2-my`; `MARKET-EU-DE`, `MARKET-EU-IT`, `PRODUCT-PROC-SU`, `RES-R706`, `RES-CHEMOURS` |
| Branch / base | `codex/de-it-su-r706-chemours-gate8` / `84db14ee35fe118415bff8327f202ee712e7599c` |
| Implementation / evidence | `3cb56f4ed3afe0e938aed4f2fe311a35c4c63f28` / `fcd4992e7d12e9024c57c0fbb9538c1b927b978c` |
| Read-back HEAD | 运行取证时`17dab81b8bcb515c12da7df4e091919d3b84c9c7`；implementation/evidence均为祖先；工作树干净。Finding回交后开发任务新增test-only commit `a4c8c26e26a01a017351080ed396da9da6386382`，未纳入本轮已审候选，Build仍为锁定值。 |
| Build / runtime | `D5YP7Z4w9KYNlOMkUVr63`; `127.0.0.1:3236`, PID `49532`; CMS `127.0.0.1:8187/graphql` |
| Authorization | Gate 9独立只读审查；无Gate 10、merge、push、部署、发布、DNS、sitemap或索引授权 |

本审查没有写回D16，没有修改D23批准源，没有提交RFQ/Documents/Sample，没有调用服务商或检查邮箱。`HTTP 200`仅表示锁定本地候选可访问，不代表发布批准。

## 2. 独立证据与结果摘要

- 五个批准B正文的SHA与D16 contract source绑定一致；五个CMS记录均为唯一`publish`记录，Page ID、public path、`tio2-my`单一scope及完整contract JSON一致。
- 五页均返回当前Build，SSR正文、模块顺序、标题、Meta、H1、语言、链接清单与批准包一致；DE/IT/Sulfate有批准canonical和Schema，R706/Chemours按未决owner决定不输出canonical/Schema；五页均`noindex,nofollow`且不在本地sitemap。
- 1440/768/390三档共15张完整页面截图已逐张阅读；无横向溢出、裁切、重叠、空占位或Footer脱离。桌面/紧凑导航当前项、Menu与Cookie焦点循环/返回、正文链接焦点均通过脚本检查。
- 15/15个错误scope CMS请求被明确拒绝；缺失Page ID被拒绝。定向Vitest为8/8文件、172通过、1跳过；五页及相关共享路由未见新增回归。
- 内部目标结果：除`PRODUCT-PROC-SU`指向的`/applications/`为404外，其余本轮正文内部目标均返回正确`tio2-my`页面。Germany/Italy五个行业来源及Sulfate FTC PDF直接返回200；R706/Chemours官方Ti-Pure HTML在无浏览器Node请求中受Cloudflare返回403，但浏览器检索可到达并确认目标身份；R706 PDF及Chemours公告直接返回200。
- Documents入口可用且从DE、IT、SU进入时公司国家、Grade与文档类型保持中性；R706/Chemours为clean入口。RFQ当前显示`temporarily unavailable`，Sample当前显示`not available`，因此依赖这些表单可编辑态、验证、重试及接收回执的AC未通过。

证据目录：[独立证据](gate9-de-it-su-r706-chemours-v1.0/)；核心记录为`fresh-runtime-cms-browser-readback.json`、`fresh-external-link-readback.json`、`fresh-targeted-vitest.txt`和15张`*-independent-full.png`。

## 3. Findings

| Finding | Page ID / AC | 严重度 | 当前结果与复现 | 关闭条件 |
|---|---|---:|---|---|
| `G9-FIVE-F01` | `PRODUCT-PROC-SU` / `SU-G9-09`; `SU-DEP-01` | P1 | 打开锁定Build的Sulfate页 → `Explore Applications`；`GET /applications/`返回404。 | APP-000 owner提供获批并集成的正确scope目标，锁定新commit/build后重验点击、返回、canonical和scope。 |
| `G9-FIVE-F02` | 五页共享RFQ；DE `AC07`、IT `AC04/AC07`、SU `AC10`、R706 `AC09`、Chemours `AC09` | P1 | 从页面正文或固定RFQ进入`/request-a-quote/`；页面显示表单暂不可用且无字段。无法验证Germany/Italy可编辑destination、验证、保值、失败/重试或正向接收。 | 共享RFQ owner恢复锁定候选可用表单，并提供生产等价正向确认、失败/超时/歧义、保值和安全重试证据。 |
| `G9-FIVE-F03` | `MARKET-EU-DE` `AC08`; `MARKET-EU-IT` `AC06/AC07`; `RES-R706` `AC08` | P1 | 点击各页Sample入口；`/request-sample/`显示表单不可用，无法执行中性上下文、验证、持久化、去重与授权确认。 | 共享Sample owner恢复可用表单，绑定新候选并补齐规定的成功/失败/恢复证据。 |
| `G9-FIVE-E01` | 涉及Documents的五页AC；DE `AC08`、IT `AC05/AC07`、SU `AC11`、R706 `AC07`、Chemours `AC06` | Evidence blocker | Documents UI、中性初态与静态验证合同可见；未执行真实外发，当前provider/account/key/recipient、服务商确认与邮箱收件没有本轮证据。 | 由CONV-DOC/运营owner提供当前实现绑定的授权接收、失败和所声称邮箱/业务层回执；不得以2xx或provider acceptance替代邮箱收件。 |
| `G9-FIVE-E02` | 五页响应式/无障碍AC；DE `AC04/AC05`、IT `AC02/AC09`、SU `AC08/AC16`、R706 `AC03/AC12`、Chemours `AC03/AC11` | Evidence blocker | Chromium三档、键盘、焦点和开发方Firefox证据存在；未覆盖原生200%、真实设备/触摸、读屏与forced-colors。 | 按各包要求补齐实际设备/AT/浏览器矩阵并绑定同一commit/build；失败须修复后复验。 |
| `G9-FIVE-E03` | `RES-R706` `AC10/AC14`; `RES-CHEMOURS` `AC08/AC13` | Authority blocker | 当前候选路由本地200、noindex且不进sitemap；因候选route mapping、canonical及关联Schema仍待owner决定，当前保守不输出canonical/Schema。 | Controller、route/SEO owner明确批准实际route/canonical/Schema组合；锁定新候选后核对head/social/JSON-LD/robots/sitemap。 |

`PRODUCT-PROC-SU`的`SU-DEP-02`亦保持开放：RES-PROC目标本地200，但当前D23状态仍在两个Gate 8候选的Gate 9比较选择中；本地可达不能替代owner选择和发布资格。

## 4. 逐项AC裁定

状态：`PASS`为锁定本地候选已具独立可观察证据；`FAIL`为当前锁定运行态出现规定失败；`NOT_VERIFIED`为合同要求的外部、设备、生产或授权证据未完成。

### MARKET-EU-DE

| AC | 状态 | 依据 / 开放项 |
|---|---|---|
| `DE-G9-AC01` | PASS | 唯一CMS身份、scope、route、Markets状态与DOM正确。 |
| `DE-G9-AC02` | PASS | 七模块、正文、输入提示、链接与三条reference逐字绑定批准B。 |
| `DE-G9-AC03` | PASS | 可见/head/Schema语义一致，禁用事实未出现。 |
| `DE-G9-AC04` | NOT_VERIFIED | 三档视觉通过；原生200%与真实设备未测。 |
| `DE-G9-AC05` | NOT_VERIFIED | 键盘、焦点、Menu/Cookie通过；读屏/forced-colors未测。 |
| `DE-G9-AC06` | PASS | Product、三Application、EU owner均为正确scope 200。 |
| `DE-G9-AC07` | FAIL | RFQ入口可达但表单当前不可用；可编辑Germany及接收/恢复未实现证。 |
| `DE-G9-AC08` | FAIL | Documents中性UI可用；Sample不可用，且两者真实接收证据缺失。 |
| `DE-G9-AC09` | PASS | EU Trade目标在锁定集成候选为正确scope 200，Germany未输出关税结论；release资格仍独立开放。 |
| `DE-G9-AC10` | PASS | 精确Title/Meta/canonical/en及WebPage+BreadcrumbList；query不污染。 |
| `DE-G9-AC11` | NOT_VERIFIED | 本地preview noindex/sitemap absent正确；生产robots/sitemap与Gate10未授权。 |
| `DE-G9-AC12` | PASS | 共享Chrome/logo/legal/Cookie本地组装与焦点行为通过。 |
| `DE-G9-AC13` | PASS | CMS负向、route/query/cache/revalidation及共享回归证据一致，无fallback。 |
| `DE-G9-AC14` | PASS | package、commit、build、CMS、差异、测试、回退及未测范围均可定位。 |

依赖：`DE-G6-D01`已由锁定实现/映射证据满足；`D02/D03/D04/D08`开放；`D05/D06/D07`仅本地集成部分通过，生产/release与设备层仍开放。

### MARKET-EU-IT

| AC | 状态 | 依据 / 开放项 |
|---|---|---|
| `MARKET-EU-IT-G9-AC01` | PASS | 七模块、完整正文、19个链接 occurrence与限制语义一致。 |
| `MARKET-EU-IT-G9-AC02` | NOT_VERIFIED | 三档完整视觉通过；原生200%/设备未测。 |
| `MARKET-EU-IT-G9-AC03` | PASS | Breadcrumb、Products、四Application、EU/Trade、三转化与两外部source目标均核对。 |
| `MARKET-EU-IT-G9-AC04` | FAIL | 三个RFQ入口均到不可用状态，无法观察/编辑Italy或执行历史/错误态。 |
| `MARKET-EU-IT-G9-AC05` | NOT_VERIFIED | Documents为neutral初态；未做真实receiver成功/失败/重试。 |
| `MARKET-EU-IT-G9-AC06` | FAIL | Sample入口可达但表单不可用。 |
| `MARKET-EU-IT-G9-AC07` | FAIL | RFQ/Sample无可用receiver；Documents也无本轮真实接收证据。 |
| `MARKET-EU-IT-G9-AC08` | NOT_VERIFIED | 本地clean/query/preview head与Schema正确；授权生产配置/索引未测。 |
| `MARKET-EU-IT-G9-AC09` | PASS | Chrome/Legal/Cookie current/focus/isolation本地通过。 |
| `MARKET-EU-IT-G9-AC10` | PASS | 七surface代码测试、15个错误scope读回及回归无泄漏。 |
| `MARKET-EU-IT-G9-AC11` | NOT_VERIFIED | 事实语义正确；receiver、设备和release依赖开放。 |
| `MARKET-EU-IT-G9-AC12` | PASS | 精确Package、repository/ref/build、测试与回退可定位。 |

依赖：`MARKET-EU-IT-G6-D01/D06`的本地实现部分通过；`D02`目标均可达但release资格仍开放；`D03/D04/D05/D07`开放。

### PRODUCT-PROC-SU

| AC | 状态 | 依据 / 开放项 |
|---|---|---|
| `SU-G9-01` | PASS | 正确scope记录与无fallback负向证据。 |
| `SU-G9-02` | PASS | route/head/canonical/query归一正确。 |
| `SU-G9-03` | PASS | 五模块、正文、动作与目标精确一致。 |
| `SU-G9-04` | PASS | 五Grade顺序、描述和route精确；无CR-901/Chloride。 |
| `SU-G9-05` | PASS | 无隐藏适用性、排名、替代/等同语义。 |
| `SU-G9-06` | PASS | 三档完整视觉无溢出/裁切/错序。 |
| `SU-G9-07` | PASS | 共享Chrome/logo/legal/Products current正确。 |
| `SU-G9-08` | NOT_VERIFIED | 键盘/焦点/目标与Menu/Cookie通过；原生200%未测。 |
| `SU-G9-09` | FAIL | `/applications/`为404；RES-PROC owner选择仍开放。 |
| `SU-G9-10` | FAIL | RFQ表单不可用且无真实receiver证据。 |
| `SU-G9-11` | NOT_VERIFIED | Documents中性初态通过；receiver/account/key/recipient/readback未证。 |
| `SU-G9-12` | PASS | 当前Cookie dialog/focus/return及无未批准外部请求通过。 |
| `SU-G9-13` | PASS | CollectionPage+BreadcrumbList+五项ItemList与可见顺序一致。 |
| `SU-G9-14` | PASS | Inter、SVG、页面资源无失败请求；cache/revalidation定向测试通过。 |
| `SU-G9-15` | PASS | missing/wrong/foreign scope与contract负向矩阵不渲染伪成功。 |
| `SU-G9-16` | NOT_VERIFIED | Chromium/开发方Firefox、FTC freshness、回归通过；真实设备/AT仍缺。 |

依赖：`SU-DEP-06/08`本地目标与freshness通过；`SU-DEP-01/02/03/04/07`开放；`SU-DEP-05`本地状态通过但release复验仍开放。

### RES-R706

| AC | 状态 | 依据 / 开放项 |
|---|---|---|
| `RES-R706-G9-AC01` | PASS | 六模块、限定语、动作与B精确。 |
| `RES-R706-G9-AC02` | PASS | R-706与TS-6706来源边界一致，无IKHLAS配对/替代机器语义。 |
| `RES-R706-G9-AC03` | NOT_VERIFIED | 三档视觉通过；原生200%未测。 |
| `RES-R706-G9-AC04` | PASS | Resources current、Menu/键盘/focus return与固定RFQ正确。 |
| `RES-R706-G9-AC05` | PASS | 锚点及三个官方目标身份核对；Ti-Pure HTML的非浏览器403属Cloudflare，浏览器目标可达。 |
| `RES-R706-G9-AC06` | PASS | Products clean/context均中性，无R-706 relation/prefill。 |
| `RES-R706-G9-AC07` | NOT_VERIFIED | Documents clean入口通过；完整规则与真实receiver未证。 |
| `RES-R706-G9-AC08` | FAIL | Sample页当前不可用。 |
| `RES-R706-G9-AC09` | FAIL | 固定RFQ到达不可用表单，接收规则未证。 |
| `RES-R706-G9-AC10` | NOT_VERIFIED | noindex/sitemap absent且当前保守无canonical/Schema；owner authority未决定。 |
| `RES-R706-G9-AC11` | PASS | 2026-09-08复核R-706页/PDF与2025-02-19 Chemours公告，当前可见日期/命题一致。 |
| `RES-R706-G9-AC12` | NOT_VERIFIED | 共享Chrome本地通过；native 200%/AT/device未测。 |
| `RES-R706-G9-AC13` | PASS | CMS/DTO/route/cache负向矩阵及WP→Next单一映射通过。 |
| `RES-R706-G9-AC14` | NOT_VERIFIED | 候选身份已绑定；route/canonical/Schema与release authority未闭合。 |

依赖：`RES-R706-G6-D02/D03`通过；`D01/D04/D05/D06/D08`开放；`D07`本地部分通过；`D09`实现身份已满足但release authority开放。

### RES-CHEMOURS

| AC | 状态 | 依据 / 开放项 |
|---|---|---|
| `RES-CHEMOURS-G9-AC01` | PASS | 六模块、限定语、动作与B精确。 |
| `RES-CHEMOURS-G9-AC02` | PASS | exact-grade-first、source/independence语义一致，无配对/等同/结果/关联。 |
| `RES-CHEMOURS-G9-AC03` | NOT_VERIFIED | 三档视觉通过；原生200%未测。 |
| `RES-CHEMOURS-G9-AC04` | PASS | Resources current、Menu/键盘/focus return与固定RFQ正确。 |
| `RES-CHEMOURS-G9-AC05` | PASS | Products clean/context中性，无Chemours relation/prefill。 |
| `RES-CHEMOURS-G9-AC06` | NOT_VERIFIED | Documents clean入口中性；完整验证与真实receiver未证。 |
| `RES-CHEMOURS-G9-AC07` | PASS | 两个Ti-Pure官方目标身份及当前支持命题已复核。 |
| `RES-CHEMOURS-G9-AC08` | NOT_VERIFIED | 当前保守无canonical/Schema且noindex/sitemap absent；owner authority未决定。 |
| `RES-CHEMOURS-G9-AC09` | FAIL | Chrome/Consent本地通过，但固定RFQ表单不可用且无授权接收。 |
| `RES-CHEMOURS-G9-AC10` | PASS | 七surface负向测试及错误scope读回无泄漏。 |
| `RES-CHEMOURS-G9-AC11` | NOT_VERIFIED | 键盘/焦点/三档通过；native 200%/AT/device/forced-colors未测。 |
| `RES-CHEMOURS-G9-AC12` | PASS | 唯一WordPress→delivery→Next来源及commit/build/差异/回退可定位。 |
| `RES-CHEMOURS-G9-AC13` | NOT_VERIFIED | exact candidate已绑定；route/canonical/Schema/release authority开放。 |

依赖：`RES-CHEMOURS-G6-D02/D03`通过；`D01/D04/D05/D07`开放；`D06`本地部分通过；`D08`实现身份已满足但release authority开放。

## 5. 既有开发证据的准确解释

交接所报全仓`npm test`为2588通过、22失败：20项因本工作树无Site A私有`wordpress/.env`，2项因Node原生测试被Vitest当空suite；因此不得称全仓测试通过。五页定向证据与本轮独立8文件/172测试通过可用于其明确覆盖面，不能覆盖真实receiver、邮箱、原生200%、真实设备、读屏、forced-colors或生产发布。

结论保持`GATE9_NOT_PASS`。需要先处理`G9-FIVE-F01/F02/F03`，由owner补齐`E01/E02/E03`及其余开放依赖，再绑定新的精确commit/build执行定向复验。未merge、push或部署。
