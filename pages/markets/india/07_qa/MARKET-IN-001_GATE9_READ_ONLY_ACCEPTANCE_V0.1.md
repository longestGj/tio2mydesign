# MARKET-IN-001 Gate 9 独立只读验收 V0.1

日期：2026-09-08。Review ID：`IN-G9-REVIEW-01`。控制：`G9-MARKET-FOUR-20260908-01`。

结论：**`CHANGES_OR_EVIDENCE_REQUIRED / GATE9_NOT_PASS`**。批准正文、页面视觉原图及静态实现未发现语义偏离，但一个必需Trade目标在Gate 8环境明确为404；本轮也未取得绑定commit `2c97fe19b56f14e12c6e27daa7fd3c9a49207570`的可访问运行入口，且该commit包含未在交回中取得原共享owner确认和受影响消费者回归处置的Global Chrome、Consent及EN/BM布局修改，无法独立完成实际操作、接收、七面隔离和Consent核验。

## 1. 对象、独立性与证据范围

页面：`MARKET-IN-001 / /markets/india/ / en / tio2-my`。批准基线为当前Manifest V0.15导航的`IN-G6-PACKAGE-01 V0.1`、B V0.1、C V0.2及Gate 4 V1.1。Gate 8对象为D16 worktree `C:/Users/longe/.codex/worktrees/bfe8/16Wordpress_nextjs`、branch `codex/market-four-gate8`、clean commit `2c97fe1`；root独立读取该commit、开发回执、源文件、运行矩阵、`.next`构建产物和四张India原图，没有修改D16或执行开发测试/构建/CMS。现存构建ID为`XBEHSP2PDZYbuwb3U-kf3`，India初始HTML SHA-256为`a71d08bf74bcc2103b7c414277c09dc4b48b20052e37d41624c8aa04e6ec12e2`。

证据类别：D16源为`SOURCE_INSPECTION`；D16截图和运行矩阵是开发方`ACTUAL_RUNTIME`原件的独立读回；本轮端口探测是只读网络观察。3015、3017、3018、3021、3022均有服务监听，但四页目标路径跟随重定向后均404，未识别出本批Build，不能将其他进程写成当前实现。

开发原件hash与`runtime-matrix.json`匹配：1440 `c6b6fbf8…589e`、768 `80d2fc20…542a`、390 `1d054ba7…0166`；390菜单图 `ba976145…0896`。四图已按原始细节打开：五个正文模块、Header/Footer、三端重排、document index和无图状态完整可读，未见明显裁切、横向溢出或Buyer Clean污染。

## 2. Findings

### IN-G9-F01 — 必需India Trade目标在Gate 8环境为404

- 关联：`IN-G6-AC08`、`IN-G6-D04`。
- 预期：`/resources/india-titanium-dioxide-anti-dumping-duty/`到达owner批准且freshness有效的页面。
- 实见：Gate 8最终回执明确把该目标列为本地404，同时India页面保留可爬链接。此处不把404隐藏或替换成其他目标。
- 影响：买家从“Review the India Titanium Dioxide Trade Update”进入死链；AC08不能通过，完整网站发布被阻断。
- 责任：`RES-TRADE-IN`开发/内容freshness owner；India只需在依赖就绪后复验原链接和返回路径。
- 关闭：同一验收环境中目标返回正确Page ID、批准内容与当前官方来源/freshness记录；Gate 9实际打开并核对，不以HTTP 200单独关闭。

### IN-G9-F02 — Gate 8交回缺少当前可访问运行入口

- 关联：本轮需要实际运行的`AC01–10、AC12`，尤其AC03–07、09、10、12。
- 预期：可访问URL、Build/环境身份与commit、CMS/配置状态对应。
- 实见：开发回执提供commit及历史自检结果，但未给可访问URL或Build ID。独立源检查找到了该clean worktree现存Build `XBEHSP2PDZYbuwb3U-kf3`及四页静态HTML；当前发现的本地服务均不承载四页，因此仍不能操作该Build。
- 影响：可以核对源与开发原件，不能把本轮结论写成独立实际操作通过。
- 责任：Gate 8运行交回负责人。
- 关闭：提供绑定`2c97fe1`或精确后续修复快照的可访问只读环境、Build ID、CMS记录/配置关联及有效时段；不要求重新运行无关全仓测试。

### IN-G9-F03 — 焦点与键盘证据覆盖不足

- 关联：`IN-G6-AC03/04`。
- 预期：遍历Header、全部不同视觉类型的main链接、compact menu首尾/正反向/退出恢复及Footer；焦点到达、可见且不被裁切。
- 实见：开发测试记录菜单打开后Close获得焦点、Markets marker、Escape恢复，并有菜单图；没有逐控件或等价分组的可见焦点证据，不能由Close状态推导全部main/末端RFQ通过。源中存在`:focus-visible`样式不足以证明实际可见。
- 责任：Gate 8补运行证据；Gate 9在可访问实例独立操作。
- 关闭：按对象/视觉类型提供未聚焦与键盘聚焦对照、首尾及正反向轨迹和裁切观察，绑定实际Build；发现实现问题再沿本ID定向修复。

### IN-G9-F04 — 共享owner改动随页面批次交回，但缺少授权来源与受影响消费者闭环

- 关联：`IN-G6-AC11/12`，并限制`IN-G6-AC04`的共享Menu结论。
- 预期：本页消费既有Global Chrome、Consent和EN/BM共享布局；如Gate 8发现共享缺陷，应由原owner协调，并在交回中登记准确差异、批准来源、受影响消费者和回归结果。
- 实见：准确commit把compact breakpoint从900px改为1101px、重做compact menu并加入RFQ、把Cookie Settings改为原生`dialog`并调整焦点/滚动、修改共享Header/Footer和EN/BM字体绑定；统一回执只写复用共享能力，没有原owner决定、偏差台账或EN/BM及其他Malaysia消费者处置。
- 影响：India静态图本身看起来正常，不能据此批准共享范围，也不能推导其他消费者、Cookie焦点/恢复或断点行为无回归。
- 责任：Global Chrome / Consent / EN-BM布局原owner与Gate 8。
- 关闭：原owner接受绑定准确commit的共享diff并提供受影响消费者与定向回归；或Gate 8拆除/分离未经批准的共享变化，交回新的准确commit。复验沿用本Finding ID。

## 3. 接受条件覆盖

| 条件 | 本轮结论 | 已验证及缺口 |
|---|---|---|
| `IN-G6-AC01` | `PASS`（指定Build的初始输出/静态呈现） | 配置payload与B逐字对应；Build HTML有一个H1、五模块全部内容和三处RFQ上下文，图片显示完整三端；不扩张为交互通过 |
| `IN-G6-AC02` | `PASS`（源码＋静态范围） | 可见与metadata配置保持批准Malaysia→India范围、颜料/成品母粒区分，无价格/当地实体扩张；运行机器输出并入AC09缺口 |
| `IN-G6-AC03` | `NOT_VERIFIED`（静态视觉局部通过） | 三端原图完整且hash匹配；无独立几何、200% native zoom、reduced motion及完整可见焦点覆盖，见F03 |
| `IN-G6-AC04` | `NOT_VERIFIED` | 开发材料支持menu打开、Close焦点及Escape；缺独立正反向遍历、背景隔离和全部焦点可见性，见F03 |
| `IN-G6-AC05` | `NOT_VERIFIED` | 源中三处RFQ均传India/source，Products中性；开发只报告代表入口，缺本轮逐出口、改值/保护已有值及返回重进 |
| `IN-G6-AC06` | `NOT_VERIFIED` | source-only query与空Country开发断言存在；缺无Grade、单Grade多类型、Other-only、错误恢复及normalized request实际证据 |
| `IN-G6-AC07` | `NOT_VERIFIED` | 没有获授权真实接收；RFQ正向、异常/重试、DOC provider与邮箱分层仍开放，不自行发送 |
| `IN-G6-AC08` | `FAIL` | 目标在Gate 8环境为404，且source/freshness尚未由owner关闭，见F01 |
| `IN-G6-AC09` | `NOT_VERIFIED`（源码一致） | 源配置Title/Meta/canonical/en及两节点Schema符合C，noindex符合未发布状态；缺独立SSR/head/query运行捕获 |
| `IN-G6-AC10` | `NOT_VERIFIED` | DTO源码对scope/status/path/payload fail-closed；未获得同Build七面正反向、缓存与跨站实际证据 |
| `IN-G6-AC11` | `FAIL` | commit、clean worktree、CMS→GraphQL→DTO→route位置和单commit回退可定位；但交回把实质共享修改写为复用，缺owner决定、准确偏差与受影响消费者回归，见F04 |
| `IN-G6-AC12` | `NOT_VERIFIED` | 三个法律链接/no Terms和共享源码可定位；缺本Build Cookie Settings实际模式、存储/网络失败与焦点恢复证据，且共享Consent改动需按F04闭环 |

汇总：`PASS=2`（AC01、AC02），`FAIL=2`（AC08、AC11），`NOT_VERIFIED=8`（AC03–07、AC09、AC10、AC12），`NOT_APPLICABLE=0`。两个FAIL分别来自Trade目标依赖和共享交回问题。

## 4. 当前台账与停止点

实现/依赖必修：F01由Trade owner完成目标；F02由Gate 8补准确运行交回；F03在该环境补焦点覆盖，若出现缺陷再修复；F04由共享owner与Gate 8补授权/偏差和受影响消费者闭环，或拆分共享修改。接收依赖继续按AC06/07分层：现有本地接线不等于provider或邮箱，且本轮没有真实提交授权。生产配置、真机/非Chromium/AT、forced-colors、native 200%、隐私和索引保持原责任，不改名为已通过。

当前不批准/关闭India Gate 9，也不授权Gate 10、合并、部署、发布、DNS或索引。补齐准确运行入口并处理共享差异后，定向复验F01–F04及本表`NOT_VERIFIED`条件；已核对且身份/影响未变的B/C、静态图和commit映射可以引用，不机械重做。
