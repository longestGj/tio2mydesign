# HOME-001 Root Page Hero — Gate 5 独立视觉审查 V1.0

## 审查控制与结论

| 字段 | 值 |
|---|---|
| 日期 / Review ID | 2026-09-11 / `HOME-ROOT-HERO-G5-IVR-01` |
| Page / route | `HOME-001` / `/` |
| 范围 | `TARGETED`：开放白底 Hero；Header、Start Here、后续模块仅检查不退化 |
| Workset / bundle | `ROOT-HERO-G4-7P-V1` / `HOME-ROOT-HERO-G4-CANDIDATE-02` |
| 冻结提交 | `0257c5452e88934ff51550ce9f90e05654b33686` |
| 制作/派发身份 | 总控任务 `01a04b7e-5fed-7171-ae92-e946cfd7bdae` |
| 独立 Reviewer | 本任务 `01a07b5b-2d0f-7f40-82d5-ae855ec08856`，未参与本候选制作 |
| 角色 / 方法 | `gate5-independent-visual-review V0.4` / `layout-interaction-verification V0.8`，`INDEPENDENT_REVIEW` |
| 结论 | **`REVISE_BEFORE_PROJECT_CONTROL_REVIEW`** |
| 必修 Finding | **1**，`HOME-ROOT-HERO-G5-F01`，P1；建议项 0 |

开放白底视觉方向成立，冻结身份及正文保留核验通过；但响应式参数仍与共享 Hero 合同不一致，不能登记本候选审查通过。本报告不关闭 Gate 4、不更新当前 Manifest，也不启动 Gate 6、Gate 8 或发布。

## 输入、权限与证据身份

已读取根 AGENTS、PROJECT_CONTEXT、Index 当前入口、Home 登记与关键词归属、完整 Brief/Playbook、当前 Manifest V1.6 及其批准组合、适用治理章节、当前 Gate 工作流、Gate 4→5 合同、常设关闭授权、Gate 5 角色及核验方法。视觉依据为共享 Hero 母合同 `ROOT-PAGE-HERO-001`、开放白底增补 `ROOT-PAGE-HERO-OPEN-WHITE-01`，以及用户对精确 1440 开放白底图“可以。就这个。”的决定。

本次输入为 `pages/home/04_planning/HOME-001_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.1.md`、其 `home-root-page-hero-v1.1/freeze-record.json`、HTML、三张 PNG，以及作者自检 V1.0。作者自检只作为输入，未替代独立检查。

独立复算结果：HTML 与三张 PNG 的 bytes、SHA-256、PNG 物理尺寸全部匹配冻结记录；全部文件及 freeze-record 与指定提交逐字节相同。Inter 字体、材料图、两个 Logo 的实际依赖均可读取且与该提交相同。详细身份见同目录 `HOME-ROOT-HERO-G5-IVR-01-runtime.json`。

| 正式 PNG | 尺寸 | bytes | SHA-256 |
|---|---:|---:|---|
| Desktop V1.1 | 1440×900 | 394336 | `FC3177BB1E4ED7F11E1E30C823184FA773CB90106647098A39311025B4027B2A` |
| Tablet V1.1 | 768×1400 | 369339 | `0D414EE88551A596A826AC6EC8074655EF0C6163F6909101F45559D9E75C0EDE` |
| Mobile V1.1 | 390×1500 | 174695 | `E1FC8309624BA6E10695BDC0BF9E791F56556E9765061D34F454AC28F6E2153C` |

三图均直接以 original detail 打开，不以缩略图或作者结论代替。它们属于本次 Hero 与连接段证据，不冒充整页重新验收。未新增持久截图。

## 实际覆盖及保留结果

**STATIC_VISUAL**：三端已检查完整 Hero、首屏层级、标题/说明可读性、CTA、原材料照片、空白和 Start Here 连接。整体 Hero 无大外框、背景卡片、圆角容器、阴影或左竖线；照片自己的容器保持，不属于被禁止的整体外框。Desktop 双列，Tablet/Mobile 单列、照片在动作后；未见裁切、重叠、隐藏 CTA 或异常空白。1440 图仅显示 Start Here 开头；其三入口另由运行检查确认。768、390 原图均显示三入口，390 依次为 Markets、Products、Documents。

**SOURCE_INSPECTION**：独立提取完整 `<body>…</body>`，当前 V1.1、被拒绝的 Root Hero V1.0、原批准 Applications-aligned V1.1 三者完全相同，统一 SHA-256：

`768344ED43879CA8D1BCC54E4DC8AEEEF6C07B2701044C1BF6CA0D97E83E4BF0`

因此 H1、intro、两项 CTA 标签/目标、图片引用、Header、Start Here、后续模块及脚本均未改写。相对原批准来源，CSS 差异限于 Hero，另有本地预览 title 标识变化。相对 Root Hero V1.0，V1.1 除外框外还恢复了旧 Home 字号、列宽等参数；正文相同不代表这些参数自动满足新共享合同。

未变整页覆盖继承 `HOME-001_APPLICATIONS_ALIGNED_GATE5_INDEPENDENT_VISUAL_REVIEW_V1.0.md` 加 `HOME-001_APPLICATIONS_ALIGNED_GATE5_TARGETED_RECHECK_V1.1.md` 的有效链；当前生产层既有 Gate 9 开放项不由本次审查重新处置。

**ACTUAL_RUNTIME（本地原型）**：独立运行 Chromium `151.0.7922.34`、Node `v24.19.0`，本地 file URL、DPR 1，等待字体就绪。检查正式三个视口并补查共享边界 767、1023、1024。所有六个宽度 document/body 宽度等于 viewport；额外逐元素越界检查为 0，字体与照片加载成功，失败资源请求为 0。

三正式视口 Hero 内容宽分别为 1200、704、350px；所有 CTA 高度为 48.25px，390 两按钮均宽350px。Header 高度为84/64/64px。两 CTA 标签/目标为 Request a Quote → `/request-a-quote/`、View Products → `/products/`。

每个实测宽度执行聚焦第一个 Hero CTA → Tab 到第二个 → Enter → Shift+Tab → Enter，共12次键盘激活均命中正确目标，焦点样式为3px Teal outline、offset 3px。测试监听器阻止实际导航，只验证本地链接激活；未发真实业务请求，不声称目标路由或 RFQ 接收成功。

## 集中必修 Finding

### HOME-ROOT-HERO-G5-F01 — P1 — 共享响应式参数未落实，返修冻结需补齐捕获来源

**依据与实际差异**

共享 Hero 母合同 §4.2 规定 Mobile ≤767 左右20px；§4.3 规定 Desktop56、Tablet44、Mobile36px，字重700。开放白底增补 §4 明确只覆盖整体卡片外壳，其他共享几何及响应结构继续适用。总控在本 Review ID 的补充答复中确认：没有将旧 Home 字号/字重作为本次响应式例外的批准记录；保留用户精确确认的1440视觉，其余受影响参数须按母合同修正。

| 宽度 | 当前独立实测 | 应用依据 |
|---:|---|---|
| 1440 | H1 61.92px / 750；Hero 1200px | 保留最新用户精确视觉批准，不要求退回56px |
| 768 / 1023 | H1 44px / 750；单列 | Tablet 应为44px / 700 |
| 767 | H1 44px / 750；左右32px，内容703px | Mobile 应为36px / 700；左右20px，内容727px |
| 390 | H1 38px / 750；左右20px，内容350px | Mobile 应为36px / 700；已正确的350px内容宽保持 |
| 1024 | H1 44.032px / 750；双列 | 本宽度已属于 Desktop；不能把精确1440批准自动扩成所有Desktop的参数例外 |

源码定位：候选 HTML 第17–18行通用标题规则、第115–126行响应式规则。Mobile 样式目前在560px才切换，不能完整执行母合同的≤767约束。影响是同一 RootPageHero 在共享断点仍有字号、字重及网格偏差；并非文字内容错误，也不是单纯审美偏好。

另经总控提供并独立读取作者临时脚本：`99_workspace/HOME-001_root_page_hero_v1_1/capture_home_root_page_hero_v1_1.cjs`，实际SHA-256为 `F05C9CD7EDCF2A0891B25E5D05F7C5FC92F4F70ADDA42732E7F2D37D293E8F6C`。脚本明确三组逻辑 viewport、DPR1、light、reduce、字体就绪后200ms、headless Chromium、fullPage=false及animations=disabled；总控提供当前环境查询 Chromium151.0.7922.34 / Playwright1.62.1。现有正式冻结记录未引用这些来源；当前环境查询也不能追溯证明历史捕获版本。此交接缺口合并在同一返修项处理，不独立增加一轮审查。

**责任与接受条件**

1. Gate 4 制作方保留精确1440用户批准视觉；按母合同修正Tablet/Mobile字号、字重、≤767左右20px，覆盖768/767/390及同规则区间。1023/1024边界一并验证；1024属于Desktop，其参数须与母合同或明确的有效批准依据一致，不静默外推1440例外。
2. 仅修正本 Finding 影响的 Hero 参数及交接记录。完整 body 文本、DOM、CTA目标、照片、Header、Start Here和后续模块保持；不重开正文审查、不改变共享 Chrome。
3. 产生新版本源及冻结组合，保留V1.1原件。仅重捕获实际受影响视口，767若新增图注明响应式变化触发；未变1440可在证明源差异不改变其呈现后复用原图。记录图片与新源的对应及未变复用依据。
4. 新冻结交接正式记录实际捕获工具/版本、逻辑viewport、DPR、颜色/动态偏好、字体等待、截图模式、脚本路径与SHA；重新核对PNG尺寸/bytes/SHA、源与依赖身份。不得仅依赖99_workspace临时脚本或用PNG物理尺寸反推DPR。
5. 独立定向复审新组合：核对受影响字号/字重/边距、三端标题不超过三行且无裁切重叠、CTA与媒体可见、无横向溢出及相邻连接；继承本报告已验证且未变的正文与其他模块范围。

## 工具、限制与交回

可复跑记录：同目录 `HOME-ROOT-HERO-G5-IVR-01-audit.cjs`；原始输出：`HOME-ROOT-HERO-G5-IVR-01-runtime.json`。脚本只读取冻结文件，并写本独立运行记录；未运行会覆盖作者原件的捕获脚本。

本次未测试生产共享组件实现、真实设备/读屏、完整菜单焦点循环、真实路由/提交、SEO/Schema、跨站scope或发布。原Manifest里的生产层开放项照旧；这不影响本次确认冻结、正文保留和局部视觉，也不能用来豁免上面的共享合同差异。

**交回：`REVISE_BEFORE_PROJECT_CONTROL_REVIEW`；集中必修Finding 1。** Reviewer仅新增本报告、审查脚本及运行JSON，冻结候选、作者索引、当前Manifest和其他共享状态文件未修改。
