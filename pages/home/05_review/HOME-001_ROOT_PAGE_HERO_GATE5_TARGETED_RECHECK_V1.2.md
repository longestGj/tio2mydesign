# HOME-001 Root Page Hero — Gate 5 第二次定向复审 V1.2

## 独立结论

| 字段 | 值 |
|---|---|
| 日期 / Review ID | 2026-09-11 / `HOME-ROOT-HERO-G5-IVR-01` |
| Page / route | `HOME-001` / `/` |
| Workset / bundle | `ROOT-HERO-G4-7P-V1` / `HOME-ROOT-HERO-G4-CANDIDATE-04` |
| 冻结提交 | `ed10dd73cae90974fbf5b990ff0e05f4635ed9a7` |
| 制作/派发任务 | `01a04b7e-5fed-7171-ae92-e946cfd7bdae` |
| 独立 Reviewer 任务 | `01a07b5b-2d0f-7f40-82d5-ae855ec08856` |
| 角色 / 方法 | Gate 5 Reviewer V0.4；layout-interaction-verification V0.8；TARGETED / INDEPENDENT_REVIEW |
| 结论 | **`PROJECT_CONTROL_REVIEW_PASS`** |
| Finding | **`HOME-ROOT-HERO-G5-F01 = CLOSED`** |
| 剩余必修 / 建议项 | **0 / 0** |

V1.3满足F01的全部接受条件。此结论关闭本次独立审查Finding，供总控接收；不等于总控已关闭Gate 4，不更新Manifest、不启动Gate6/8或授权发布。

## 输入与有效审查链

实际读取V1.3 candidate、targeted repair V1.1、V1.3冻结记录、HTML差异及正式捕获脚本/runtime。适用角色、方法、共享Hero母合同及开放白底增补身份未变，复用前轮实际阅读。

本报告与以下两份原报告共同组成同一审查环节的完整有效链：

1. `HOME-001_ROOT_PAGE_HERO_GATE5_INDEPENDENT_VISUAL_REVIEW_V1.0.md`：完整定向Hero首审、批准内容保留及F01。
2. `HOME-001_ROOT_PAGE_HERO_GATE5_TARGETED_RECHECK_V1.1.md`：V1.2已满足的标题参数、三端视觉、捕获记录，以及A/B两处残留差异。

本轮只核查A/B修正、源与证据身份和相邻回归；未重做已通过的全文、事实、SEO或其他模块审查，未接受作者66 PASS作为独立结论。

## F01接受条件核验

**A — Hero与正文边距分离：满足。** V1.3将≤767的新宽度选择器限定为`.hero-shell`，恢复一般`.shell`原有≤560规则。八个宽度分别加载V1.1与V1.3，逐个核对所有非Hero正文容器的x、width、height，差异数为0；允许Hero高度变化造成的自然纵向位移。Start Here及后续模块未被新Hero网格规则改变。

**B — ≤350的Hero边距：满足。** 最后一个≤350规则明确覆盖Hero宽度，350实际Hero310px、左右20px；普通正文容器仍为318px、左右16px，保留原行为。

| 视口宽 | Hero宽 | Start Here宽（与V1.1相同） | H1字号 / 字重 | H1行数 | Hero列数 |
|---:|---:|---:|---|---:|---:|
| 1440 | 1200 | 1200 | 61.92px / 750，保留用户精确视觉批准 | 2 | 2 |
| 1024 | 960 | 960 | 56px / 700 | 3 | 2 |
| 1023 | 959 | 959 | 44px / 700 | 1 | 1 |
| 768 | 704 | 704 | 44px / 700 | 2 | 1 |
| 767 | 727 | 703 | 36px / 700 | 1 | 1 |
| 561 | 521 | 497 | 36px / 700 | 2 | 1 |
| 390 | 350 | 350 | 36px / 700 | 3 | 1 |
| 350 | 310 | 318 | 36px / 700 | 3 | 1 |

**内容保留：满足。** V1.3完整`<body>…</body>`与V1.1和原批准Home来源字节相同，SHA-256为 `768344ED43879CA8D1BCC54E4DC8AEEEF6C07B2701044C1BF6CA0D97E83E4BF0`。正文、CTA标签/目标、照片、Header、Start Here、后续模块及脚本均未改变。相对V1.2，源差异仅为本地预览版本title及上述三条边距修正；标题token保持。

## 视觉与独立运行证据

**STATIC_VISUAL**：已按original detail实际打开新的767×1400正式图，检查Hero和Start Here/Markets连接。标题、intro、两个CTA及原材料照片清晰，无裁切、重叠、隐藏CTA、异常空白、整体外框或左装饰线。Hero20px边距与下方保留的32px正文边距为本次明确的局部修正边界，未作额外全页网格更改。

1440、768、390三张V1.3图均与上一组合PNG字节一致；768/390继承前轮original-detail视觉结果，1440继承用户精确批准及原独立审图结果。独立运行V1.3，在内存渲染1440/768/767/390四张PNG，四张均与各自正式冻结PNG字节一致，证明新源与复用/新捕获证据对应。Reviewer新增持久截图为0。

**ACTUAL_RUNTIME（本地原型）**：Chromium151.0.7922.34、Node v24.19.0、DPR1、light、reduce，等待字体就绪。八个宽度的文档/body宽度均等于viewport，逐元素水平越界为0，加载失败为0，标题均不超过三行。两个Hero CTA保持48.25px高，全部触控盒不小于44×44px，照片加载成功；整体Hero border/radius/shadow均为0/none，装饰伪元素不显示。

每宽度实际执行Tab/Shift+Tab和Enter，两CTA共16次键盘激活命中原目标，焦点可见。监听器阻止实际导航，只证明原型中的本地激活；不声称真实路由或RFQ接收通过。

## 冻结与捕获来源

独立复算8个冻结文件bytes/SHA、4张PNG物理尺寸，全部与freeze-record和提交ed10dd7一致。字体及3个外部媒体/Logo依赖亦匹配；未改V1.1/V1.2历史源或正式图。

| 关键对象 | SHA-256 |
|---|---|
| V1.3 HTML（32670 bytes） | `95AB855FB16C318707D0C0F3E4399B24B443BDAB448BE4B07D78652072DF37A5` |
| 新767 PNG（767×1400，372008 bytes） | `0C0AC3C8C31D007BC9068385EFCCC4A5EEC982B39B74D4D766BCA759735B2B60` |
| 正式捕获脚本 | `3E87E6A3A4B7CB0BAC79F26F2B4D0545A03C42B5AE47E514C9555B79660F504D` |
| 作者正式runtime记录 | `69BBE38774FD51E525E34F182039399C7B28D7F6E1E26D4DC96932A075AB1B5C` |

freeze、脚本与runtime共同绑定Chromium151.0.7922.34、Playwright1.62.1、实际viewport、DPR1、headless、light、reduce、fonts.ready后200ms、fullPage=false及animations=disabled。runtime区分一次767新捕获与八宽度检查；freeze注明其变化触发及其他三图复用来源。脚本与runtime SHA均实际复算一致，捕获来源接受条件保持满足。

## 交回与文件变化

本轮只新增本报告及同目录 `HOME-ROOT-HERO-G5-IVR-01-recheck-v1.2-audit.cjs`、`HOME-ROOT-HERO-G5-IVR-01-recheck-v1.2-runtime.json`。前者为独立可复跑核验，后者保存实际文件与浏览器观察；未运行作者捕获脚本或回写冻结文件。

**最终独立结论：`PROJECT_CONTROL_REVIEW_PASS`；`HOME-ROOT-HERO-G5-F01=CLOSED`；剩余必修Finding=0。** 当前Manifest、共享状态、Gate6/Gate8及D16均未操作。生产层已有Gate9、真实设备/读屏、路由/业务接收和发布边界继续由原有效记录承担，本报告不将其升级为通过。
