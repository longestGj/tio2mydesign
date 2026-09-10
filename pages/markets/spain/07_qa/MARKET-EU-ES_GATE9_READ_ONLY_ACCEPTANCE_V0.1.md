# MARKET-EU-ES Gate 9 独立只读验收 V0.1

日期：2026-09-08。Review ID：`MARKET-EU-ES-G9-ROQA-01`。状态：`PROJECT_CONTROL_REVIEWED / TARGETED_GATE8_REPAIR_REQUIRED / NOT_READY_FOR_READ_ONLY_QA_APPROVAL`。

## 1. 对象、授权与结论

本次按`G9-MARKET-FOUR-20260908-01`验收`MARKET-EU-ES`、`/markets/spain/`、EN、`site_scope=tio2-my`。被审开发对象是只读worktree `C:/Users/longe/.codex/worktrees/bfe8/16Wordpress_nextjs`、branch `codex/market-four-gate8`、精确commit `2c97fe19b56f14e12c6e27daa7fd3c9a49207570`（base `c2764e6138aa0dc37d1f6cab04bc1ae39f45aecb`）；验收时`HEAD`相符且工作树为空。

**总体结论：不通过本轮Gate 9。** 静态构建中的Spain正文、14个主内容链接、模块顺序、SEO和两节点Schema与批准合同相符，三端整页没有发现裁切、横向越界、内容缺失或错误Logo。但是候选CSS偏离Spain已批准的hover/focus、标题字重、手机正文字号和行动几何；本提交还实质改动Global Chrome、Cookie Settings与EN/BM根布局字体，却没有交回共享owner决定、准确偏差说明和受影响消费者回归；四个Spain正文目标当前已知跟随重定向后为404；CMS实读、表单边界/接收、共享交互、七面运行隔离及设备/AT仍缺本轮独立运行证据。

本轮只读取D16源、既有构建产物、开发回执、运行矩阵及原图；没有运行开发测试、构建或服务，没有修改D16代码/CMS，也没有真实提交表单。控制记录在启动时对3015、3017、3018、3021、3022的四条country route探测均为404，未识别本批可访问实例；正文目标404则来自Gate 8开发验证报告第80行。本报告不把开发自检写成Gate 9亲测。

## 2. 基线与证据范围

批准入口为[Manifest V0.16](../MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.16.md)、[Gate 6包](../06_handoff/MARKET-EU-ES_GATE6_HANDOFF_PACKAGE_V0.1.md)（SHA-256 `5957e5a1...9e70ed`）、B V0.2（`6cf3a3c9...738ed`）、C V0.4（`1f82bfa4...f7ced`）及冻结完整视觉。开发输入包hash与回执登记相符；既有build ID为`XBEHSP2PDZYbuwb3U-kf3`。

本轮实际打开开发的`spain-1440.png`、`spain-768.png`、`spain-390.png`、`spain-390-menu-open.png`原图，并打开批准的1440/768/390整页、390菜单focus、Cookie focus及Document Hub focus原图作对照。三张开发整页图hash逐一等于`runtime-matrix.json`；菜单图未在矩阵登记hash，已独立计算为`6bdd0b37...21824d`。证据身份、尺寸和局限见[evidence-index.json](gate9-v0.1/evidence-index.json)，静态内容/机器输出见[static-contract-observation.json](gate9-v0.1/static-contract-observation.json)，视觉源码差异见[visual-source-observation.json](gate9-v0.1/visual-source-observation.json)，共享交回差异见[shared-handoff-observation.json](gate9-v0.1/shared-handoff-observation.json)。

开发回执报告190/190 targeted tests、17/17 Playwright、ESLint、TypeScript、GraphQL codegen、PHP syntax、43/43 build和diff check通过。这些结果是同一commit的开发自检输入；本Reviewer未重跑，不能替代以下本轮独立未验证项。

## 3. 十二项接受条件

| 条件 | 本轮结论 | 本轮实际依据与边界 |
|---|---|---|
| `ES-G9-01` | `NOT_VERIFIED` | 既有构建HTML逐项提取：一个H1、四正文模块、两H3、四准备项、COO/after-submit各一次、14链接，批准内容缺失0；commit中的WordPress JSON与DTO是严格payload parity/fail-closed。开发回执给出local post 18517及payload hash，但没有保存原始resolver响应供独立重放，因此CMS→API实际read-back层仍未独立验证。 |
| `ES-G9-02` | `FAIL` | 三端整页原图均完整、hash匹配、无可见裁切/横溢/假图；但候选CSS存在`ES-G9-F01/F02`，未兑现批准的hover/focus和精确标题/手机正文/行动几何。开发矩阵的高度差和44px断言不能关闭这些精确视觉差异。 |
| `ES-G9-03` | `FAIL` | Spain保留全部14个正确href；但Gate 8开发验证报告第80行登记`/applications/titanium-dioxide-for-coatings/`、`.../plastics/`、`.../masterbatch/`及`/resources/eu-titanium-dioxide-anti-dumping-duty/`当前local 404。该结果不是本Reviewer本轮live探测；仍足以表明完整买家路径当前未成立。 |
| `ES-G9-04` | `NOT_VERIFIED` | 源和既有构建确认两个RFQ入口仅传`destination_country=Spain`与`source_page_id=MARKET-EU-ES`；开发自测称Spain可改。首次/返回再进入、保护买家已修改值、空/无效/过期预填、无Grade/Application推断及实际接收映射未由本轮独立操作。 |
| `ES-G9-05` | `NOT_VERIFIED` | Documents入口静态值仅含source/market，未预填country/COO/Grade；开发自测称8字段且Country/Region为空。选择一个Grade、多文件、Other-only、必填/恢复和请求语义未由本轮独立操作。 |
| `ES-G9-06` | `NOT_VERIFIED` | 本轮无真实提交授权。有效/无效目标、超时、模糊/非JSON/错误响应、重试、输入保留、provider接受及最终收件均未由当前候选的可关联原件证明。RFQ与DOC原有receiver发布控制继续开放。 |
| `ES-G9-07` | `PASS` | 既有构建HTML独立提取确认精确Title、Meta、OG/Twitter、canonical、`lang=en`、`noindex,nofollow`及仅WebPage/BreadcrumbList；WebPage.name精确H1，isPartOf/publisher/breadcrumb均存在，无图/日期/LocalBusiness。静态观察绑定同一干净commit工作树和build ID；生产索引仍属Gate 10。 |
| `ES-G9-08` | `NOT_VERIFIED` | 源实现使用modal dialog、inert、focus contain、Escape/恢复和responsive close；390菜单图显示正确顺序与Markets标记。开发E2E只在报告层支持打开、Close获焦、Escape恢复；本轮未独立执行Tab/ShiftTab、跨桌面、Cookie打开/循环/恢复或逐控件可见focus，`ES-G4-OBS01`仍开放。另见`ES-G9-F04`：本提交实质改动共享Chrome/Cookie实现，交回却没有准确披露和受影响消费者回归，现有Spain局部证据不能关闭共享面。 |
| `ES-G9-09` | `NOT_VERIFIED` | 源码对错误site、缺失/重复记录、wrong scope/path/status/page ID/payload采取fail-closed，查询/route/cache tag/SEO/RFQ/Documents/Logo路径均显式`tio2-my`。但本轮没有实际执行正确、错误、缺失scope、同slug、缓存暖冷/失效及反向三站运行输入，不能从源码与开发测试声称七面运行隔离全部通过。 |
| `ES-G9-10` | `FAIL` | 六类owner和版本可追溯；Spain静态集成成立。`ES-DEP-01`已有四个目标404，`ES-DEP-02/03`接收层、`ES-DEP-04/05`共享交互/法律运行层、`ES-DEP-06`生产scope/release及Gate 10继续开放；同时`ES-G9-F04`表明Gate 8共享改动交回不完整，不能签完整依赖ready。 |
| `ES-G9-11` | `NOT_VERIFIED` | 开发证据仅Chromium视口和`reducedMotion=reduce`模拟；其回执也明确native device/touch、非Chromium、AT、native 200% zoom、forced-colors未测。本轮未获得这些实际状态证据。 |
| `ES-G9-12` | `FAIL` | 精确commit、base、branch、干净worktree、文件组、CMS/API→Next映射、开发检查摘要、开放项及单commit回退均可定位；但`ES-G9-F04`证明回执把Global Chrome、Cookie Settings与EN/BM根布局字体的实质变化写成“复用”，未交回共享owner决定、准确差异、受影响消费者和回归。版本可定位不能弥补handoff语义不准确。 |

汇总：`PASS=1`（07），`FAIL=4`（02、03、10、12），`NOT_VERIFIED=7`（01、04、05、06、08、09、11），`NOT_APPLICABLE=0`。

## 4. Findings

### `ES-G9-F01` — 主内容hover/focus状态不符合批准视觉（P1，本轮Gate 8必修）

- 关联：`ES-G9-02`；影响所有Spain main行动/文字入口。
- 预期：批准视觉V08要求所有非Primary主内容链接使用`#008078`文字、`#F5F8FB`背景和2px下划线；Primary hover保持白字/`#008078`并增加2px下划线。V09要求主内容3px Teal外环、offset 3px。
- 实见：候选`malaysia-country-market-page.module.css`第31行把全部`.actions a:hover`改为白字/`#062b5b`深蓝底，第32行把text hover改为深蓝字/透明底；第10行focus offset为4px。开发证据没有逐类hover/focus状态图，三端普通图和Axe=0无法覆盖此差异。
- 影响：批准的行动层级和状态反馈被改写，辅助文字入口在hover时不再保持规定角色；准确视觉状态不可验收。
- Owner / 关闭：Gate 8在Spain作用域或获准共享实现中恢复V08/V09，保持normal几何；以同一新commit实际操作面包屑、Primary、Secondary、text入口的pointer hover与键盘focus，记录1440/768/390适用代表状态并打开原图复核。

### `ES-G9-F02` — Spain精确排版与行动几何未完整映射（P2，本轮Gate 8必修）

- 关联：`ES-G9-02`。
- 预期：批准V02为H1/H2 `font-weight:650`；V03手机普通正文/列表16px；V06行动`padding:13px 24px`、`min-height:50px`（批准运行约55.1875px）。
- 实见：候选Spain H1/H2规则只指定字号，未指定650字重，最终继承浏览器标题bold；手机`.main`保持17px；行动使用`11px 20px`和`min-height:48px`。开发1440原图中H1在“Spain”前换行且标题明显重于批准1440原图，和源码缺项相互印证。
- 影响：首屏标题行数、阅读密度和按钮比例偏离冻结视觉；仅总页高差<5%不能证明精确token兑现。
- Owner / 关闭：Gate 8按Spain冻结V02/V03/V06恢复精确值，交回新commit的computed-style记录和1440/768/390整页原图；核对H1/H2、手机正文/列表和主次行动实际尺寸，无裁切或相邻回归。

### `ES-G9-F03` — 四个批准目标当前不可达（P1，目标route owner必修；Spain页不得隐藏或改fallback）

- 关联：`ES-G9-03/10`、`ES-DEP-01`。
- 实见：Gate 8开发验证报告第80行登记三条Application目标和EU Trade Update目标当前local 404；本Reviewer没有可访问本批运行实例，因此未冒称亲测。批次控制记录的端口探测只覆盖四条country route，不能作为这些正文目标404的来源。
- 影响：Spain页本身呈现正确入口，但买家无法完成应用深读和贸易更新路径，完整网站路径与发布条件不成立。
- Owner / 关闭：APP-COAT、APP-PLAS、APP-MB与RES-TRADE-EU owner完成其批准route和内容；保持Spain现有href。以可访问的新版本逐个真实点击，确认最终Page ID/scope、返回阅读路径，以及Trade当前官方来源/更新时间。

### `ES-G9-F04` — 共享组件与根布局发生实质变化，但Gate 8交回写成复用（P1，批次共同根因）

- 关联：`ES-G9-08/10/12`、共享handoff/owner AC；该Finding为Spain与本批其他Market页共同根因，不按单页局部问题关闭。
- 预期：Gate 8若实质改动Global Chrome、Cookie Settings或根布局共享字体，交回须给出原共享owner决定、相对批准基线的准确变化/偏差、全部受影响消费者及跨消费者回归；“复用”只能用于未改变的批准共享实现。
- 实见：base→candidate改动`malaysia-global-chrome.tsx/.module.css`、`malaysia-cookie-settings.tsx/.module.css`及EN/BM两个root layout；包含Chrome断点/几何/颜色/菜单结构、Cookie原生dialog与样式、两根布局字体变量接入等实质变化。Gate 8回执第30行仅称复用已接受的Header、Mobile Menu、Footer、consent和font，第26行仅说明未新增替代Chrome，没有登记共享owner决定、准确差异或受影响消费者清单/回归。
- 影响：Spain截图只能证明本页有限视口，不能证明共享Chrome、Consent和字体在其他EN/BM消费者上的批准一致性；交回语义也无法让Gate 9区分复用与变更，形成批次级追溯与回归盲区。
- Owner / 关闭：Gate 8按共享owner合同补交同一变更集的决定来源、base→candidate准确差异、受影响EN/BM消费者清单和代表性跨消费者回归；若无批准则回退共享改动。以新commit/修订回执及原件证明Header、Mobile Menu、Footer、Cookie Settings和字体在批准断点/交互状态无回归。

## 5. 当前问题台账与停止点

| ID | 状态 | 责任方 | 足以关闭的证据 |
|---|---|---|---|
| `ES-G9-F01` | `OPEN / REPAIR_REQUIRED` | Gate 8（Spain/获准共享实现） | 新commit上的逐类型hover/focus实际证据及三端相邻回归 |
| `ES-G9-F02` | `OPEN / REPAIR_REQUIRED` | Gate 8（Spain page body） | 精确computed styles、三端新整页原图及内容/几何复验 |
| `ES-G9-F03` | `OPEN / ROUTE_DEPENDENCY` | 三Application与EU Trade route owner | 四目标实际200、准确内容/scope、点击与返回路径；Trade来源/日期 |
| `ES-G9-F04` | `OPEN / SHARED_HANDOFF_REPAIR_REQUIRED` | Gate 8 + Global Chrome/Consent/font共享owner | owner决定、准确diff、受影响消费者清单、跨EN/BM消费者回归；无批准则回退 |
| `ES-G9-01`运行层 | `NOT_VERIFIED` | Gate 8/环境owner | 当前候选的脱敏原始CMS resolver/API→SSR关联记录 |
| `ES-G9-04–06` | `NOT_VERIFIED` | RFQ/DOC/receiver owner | 合同所列交互分支、失败恢复、provider及最终接收的分层证据；真实外发另需授权 |
| `ES-G9-08/09/11` | `NOT_VERIFIED` | Chrome/Consent/runtime/设备owner | 独立可访问运行的键盘/Cookie、七面隔离和设备/AT/200%/forced-colors证据 |

本轮有两个明确的Spain实现必修，Gate 8应定向修复F01/F02；F03由目标route owner关闭，不能要求Spain隐藏批准入口或改成Contact fallback；F04作为批次共同根因由Gate 8与共享owner统一关闭，不能用Spain局部截图代替共享交回与消费者回归。修复交回须沿用Finding ID，绑定新commit、变化说明和受影响三端/交互证据。未变的正文、14个href、SEO/Schema静态覆盖可在证明版本影响范围后继承。

在F01/F02/F04完成前停止Gate 9通过；修复后先复验02、08、10及相邻共享/三端与跨消费者回归，再根据可访问环境补01、04–06、08–11。即便这些条件后来通过，仍不自动授权Gate 10、合并、部署、发布、DNS或索引。
