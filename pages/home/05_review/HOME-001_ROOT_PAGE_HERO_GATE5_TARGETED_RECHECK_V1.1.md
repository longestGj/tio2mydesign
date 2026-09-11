# HOME-001 Root Page Hero — Gate 5 定向复审 V1.1

## 控制与结论

| 字段 | 值 |
|---|---|
| 日期 / 原 Review ID | 2026-09-11 / `HOME-ROOT-HERO-G5-IVR-01` |
| 复审对象 | `HOME-ROOT-HERO-G5-F01`，同一次独立审查环节 |
| Page / bundle | `HOME-001` / `HOME-ROOT-HERO-G4-CANDIDATE-03` |
| 返修提交 | `2492cb0` |
| 制作/派发任务 | `01a04b7e-5fed-7171-ae92-e946cfd7bdae` |
| 独立 Reviewer 任务 | `01a07b5b-2d0f-7f40-82d5-ae855ec08856` |
| 方法 | Gate 5 Reviewer V0.4；layout-interaction-verification V0.8；TARGETED / INDEPENDENT_REVIEW |
| 结论 | **`REVISE_BEFORE_PROJECT_CONTROL_REVIEW`** |
| F01 状态 | **`OPEN — TWO PRECISE RESIDUAL DIFFERENCES`** |
| 必修 Finding | **1**，沿用 F01，不新增独立 Finding；建议项 0 |

指定六个宽度的标题参数、布局和正式捕获记录已经修正。F01 尚不能关闭：767边距修改影响了原应保持的后续模块，且350边界仍未应用20px Hero边距。

## 输入与继承范围

实际读取 V1.2 candidate、Gate 4 targeted repair V1.0、V1.2 freeze-record、正式捕获脚本和运行记录，并与原独立审查报告 `HOME-001_ROOT_PAGE_HERO_GATE5_INDEPENDENT_VISUAL_REVIEW_V1.0.md` 的五项接受条件对照。前轮已读且未变的角色、方法、共享母合同及开放白底增补继续适用；不重开全文、事实、SEO或其他模块设计。

输入目录：`D:/23MySec/pages/home/04_planning/visual-designs/home-root-page-hero-v1.2/`。

独立机器核对：8个冻结文件的bytes/SHA及PNG尺寸全部匹配，且与2492cb0逐字节相同；3个外部图片/Logo依赖的bytes/SHA匹配。freeze-record及旧V1.1目录未改变。当前源SHA为 `952BB8EEFF6B98902B0B3475F0C0932EB80383BD1BC58E60CDD2485C8CE6977E`。

完整 `<body>…</body>` 与V1.1及原批准Home来源完全一致，SHA为 `768344ED43879CA8D1BCC54E4DC8AEEEF6C07B2701044C1BF6CA0D97E83E4BF0`。H1、intro、CTA标签/目标、材料照片、Header、Start Here及后续模块的DOM、文字与脚本均保留。此检查证明内容保留，不把DOM相同误作CSS几何未变。

## 本轮实际通过的范围

**STATIC_VISUAL**：768×1400、767×1400、390×1500三张新正式PNG均以original detail打开。已检查Hero及Start Here连接：无外框、左装饰线、裁切、重叠、隐藏CTA、异常空白或可见横向溢出。照片与两项CTA保留，标题可读；767只有一行标题属于真实可用宽度下的正常排布。

1440复用PNG与V1.1原批准图字节一致，SHA保持 `FC3177BB1E4ED7F11E1E30C823184FA773CB90106647098A39311025B4027B2A`。此外Reviewer独立运行V1.2并在内存重新渲染1440×900，输出PNG也与原图字节一致，证明复用图对应新源，而不只是复制了旧文件。此图沿用原报告的实际视觉审查；本轮未新增持久截图。

**ACTUAL_RUNTIME（本地原型）**：独立Chromium151.0.7922.34、DPR1、light/reduce、字体就绪；六个指定视口加源码触发的350边界。结果如下：

| 视口宽 | H1字号/字重 | 行数 | Hero内容宽 / 左右边距 | 列数 |
|---:|---|---:|---|---:|
| 1440 | 61.92px / 750 | 2 | 1200 / 120px | 2 |
| 1024 | 56px / 700 | 3 | 960 / 32px | 2 |
| 1023 | 44px / 700 | 1 | 959 / 32px | 1 |
| 768 | 44px / 700 | 2 | 704 / 32px | 1 |
| 767 | 36px / 700 | 1 | 727 / 20px | 1 |
| 390 | 36px / 700 | 3 | 350 / 20px | 1 |
| 350（补查） | 36px / 700 | 3 | **318 / 16px** | 1 |

七个宽度均无文档或元素横向溢出，资源加载失败为0，Hero两CTA高度48.25px。每宽度独立执行Tab/Shift+Tab及Enter，两CTA共14次激活命中原目标，焦点轮廓可见；监听器阻止真实导航，不声称RFQ接收或目标路由通过。

**捕获来源已补齐**：正式脚本与runtime输出分别匹配冻结SHA `6BD2E5FD62D4A96BCDA7DFD1441A8D3F8832095B1901E10104DFC52F3FB22187`、`46A403363836C60CD1A1DA8A9B99AC30A2C8C5485E0BA4B802FF35C70F339027`。两者与freeze记录一致表达Chromium151.0.7922.34、Playwright1.62.1、headless、实际viewport、DPR1、light、reduce、fonts.ready后200ms、fullPage=false与animations=disabled。三次新捕获及1440旧图复用被分别标识；767有Finding触发说明。该部分接受条件满足，不需重建捕获平台。

## F01剩余精确差异与接受条件

### A. 新边距规则扩散到后续模块

V1.2 HTML第125行新增 `@media(max-width:767px){.shell{width:calc(100% - 40px)}…}`，作用于所有`.shell`。在767独立对比V1.1/V1.2时，Start Here、Markets、Products、Applications、Company、Documents、Resources及页面RFQ容器均从703px宽/左32px变为727px宽/左20px。该差异来自横向布局规则，不能解释为Hero高度改变引起的自然纵向位移。

原F01接受条件及本次派发均要求只修Hero、保持其他模块；完整body字节相同不能关闭此项。影响区间为561–767，新规则改变了原有正文网格和潜在换行。

**接受条件**：将新移动端20px规则限定于Hero；恢复普通正文容器此前≤560才使用20px的规则。767时Hero应为727px/20px，后续模块继续703px/32px；390时后续模块维持既有350px/20px。Header、正文、CTA、照片及脚本不改。

### B. 旧350断点覆盖Hero的20px要求

V1.2 HTML第137行保留 `@media(max-width:350px){.shell{width:calc(100% - 32px)}…}`，其顺序和相同选择器优先级覆盖第125行。350实测Hero宽318px、左右16px；与母合同及candidate声明的“≤767左右20px”不一致。此补查由修订源码中的显式覆盖规则触发，属于同一响应式Finding，不扩大为整页新审查。

**接受条件**：保证Hero专用20px规则在≤350仍生效；350应为310px内容宽、左右20px。普通正文容器的既有窄屏规则继续保持。检查标题最多三行、CTA不裁切、无溢出。

由Gate 4制作方在新版本源/组合中完成以上两处定向修正并重新冻结。仅补实际受影响的视觉/运行证据，未变1440/768/390等证据在确认呈现未变后可以复用；绑定新源、脚本、runtime与复用依据，保留V1.2原件。下一轮只复核A/B、新身份及相邻回归，继承本报告已满足的参数、内容和捕获记录范围。

## 输出与边界

本轮新增：本报告、`HOME-ROOT-HERO-G5-IVR-01-recheck-v1.1-audit.cjs`、`HOME-ROOT-HERO-G5-IVR-01-recheck-v1.1-runtime.json`，均在独立报告目录。未运行作者捕获脚本，未改冻结候选、作者记录、旧报告或当前Manifest，未操作D16或启动Gate6/8。

生产设备/读屏、共享组件实现、真实路由/业务接收及发布仍不在本轮范围。独立结论为 **`REVISE_BEFORE_PROJECT_CONTROL_REVIEW`；F01保持OPEN；必修Finding数量1**。
