# Spain Gate 5 — 完整页面视觉与方法报告 V0.1

2026-09-07。Page ID `MARKET-EU-ES`，EN，`/markets/spain/`，`site_scope=tio2-my`。状态：`DRAFT_FOR_PROJECT_CONTROL_REVIEW`。本报告是 Gate 5 作者制作与自检成果，不是独立审查、用户批准或 Gate 6 结论。

## 1. 输入卡与执行边界

| 对象 | 本次绑定 |
|---|---|
| 执行授权 | 当前 Manifest V0.10；`ES-G5-START-01`；串行合同 `G5-2PAGE-SERIAL-01` 第1页。Spain完成作者提交后停止，DOC-COO等待root检查 |
| 页面身份 | `MARKET-EU-ES`；`/markets/spain/`；EN；主词 `titanium dioxide supplier spain`；Markets当前 |
| 内容与行为 | Brief V0.2；A V0.2、B V0.2、C V0.4。B是唯一买家正文源；C控制CTA、Spain RFQ上下文、Documents来源边界、SEO/Schema和接收限制 |
| 结构 | Gate 3批准源 `d2fb26ae9ee230886d9cb31c401cc47d0deba3f030d578f16697c97a79a1ca64`；Hero → Applications → Documents → RFQ；共享Header/Footer/Menu/Cookie |
| 视觉 | Gate 4批准冻结 `ES-G4-V01-SOURCE-01`；HTML `cad80d…519c`、CSS `5d09b1…877f2`；无图方向；开放共享观察 `ES-G4-OBS01` |
| 共享来源 | Global Chrome V0.5（继承V0.4）、Consumer V0.2、Visual Standard V1.0、CTA增补V1.0、生产Logo、Footer法律区、Legal V1.3、Consent V1.1 |
| 方法 | Gate5 Agent V0.1；full-page-visual-composition V0.1；layout-interaction-verification V0.2及core risk model |
| 输出与停止点 | `pages/markets/spain/04_planning/gate5-v0.1/`；只到作者送审，不进入Gate6、DOC-COO、开发或发布 |

冻结 `ES-G5-V01-SOURCE-01` 含6项呈现源/依赖、45项正式输入和预检记录。HTML 18,857 bytes，SHA-256 `26bbf086fddcacdb1b420ff65d5ed7a5ff3fb2699da1b358c33956d5519381ff`；CSS继续是批准的 `5d09b11e4386ab6245106ea6c9d44c06743dbc15a93e6d3553fa57c1ce4877f2`。冻结文件 SHA-256 `6fec51baa3dfab072a9d93c394779389c1f1b1e74292c47d46b9b654be70d994`。

## 2. 上游差异与完整应用

候选的可见 `<body>` 与批准 Gate 4 HTML 逐字相等；完整正文、模块顺序、标签、链接、内联布局、共享组件和本地行为没有变化。字体、两份Logo和批准CSS复制到本页耐久依赖，字节与上游一致。没有使用另一业务页作为页面母版。

Gate 5只在`<head>`补入 C V0.4 已批准但Gate 4视觉样例未带入的 canonical，以及`WebPage + BreadcrumbList` JSON-LD；title、description、language、robots继续按C。该差异不改变买家可见内容，也不扩张企业事实。规划源保持`noindex,nofollow`。

| 模块 / 实例 | Gate 3关系 | Gate 4规则在完整页的应用 | 正式证据 |
|---|---|---|---|
| Header、Breadcrumb、ES-01 Hero | Markets当前；Malaysia-origin与Spain目的市场先出现；RFQ后Products | Navy标题、受控行宽、实心主CTA与描边次CTA；无图片/空媒体 | 三端完整页；1440 primary hover |
| ES-02 Applications | D/T两组等权；M为Coatings后Plastics & Masterbatch；共同Products在两组之后 | 真实长句自然换行；两条plastic/masterbatch用途路径分别邻接正确链接；无推荐卡片 | 三端完整页；768 application focus |
| ES-03 Documents | 文件选择说明→唯一COO句→Request Documents→Hub | COO只用轻左线；请求按钮与Hub文字入口保持层级；无下载库存或国家预选 | 三端完整页；390 Hub hover/focus |
| ES-04 RFQ | 四项准备→未知Grade→RFQ→一次人工后续→两条EU辅助入口 | 主CTA保持实心；EU入口15px辅助角色；Spain仅表达目的地上下文 | 三端完整页；390 related hover |
| Footer与共享状态 | Consumer V0.2，中立共享组件 | Deep Navy闭合；生产反白Logo；法律区和Cookie原样；无Terms | 三端完整页；390 Footer focus；三端Cookie |
| Mobile Menu | 768/390适用；Markets当前；背景隔离 | 真正打开状态、首链接键盘焦点、Close/RFQ与全部导航可见 | 768与390菜单图 |

无图分支是完整最终实例，不是缺图占位。本页主内容没有`img/picture/video`或空媒体容器；唯一媒体是共享Header/Footer的批准生产SVG Logo。未增加国旗、港口、工厂、证书图或社交大图。

## 3. 三端完整页面与视觉判断

正式完整页：1440×2673 physical（1440 logical，DPR1）、768×2951（768 logical，DPR1）、780×7908 physical（390 logical，DPR2）。390是原生2x渲染，不是1x放大。完整页从Header连续到Footer；分段读图共10张，覆盖每个模块、模块连接和Footer，保存在`diagnostic_support/segments/`。

- 1440：Hero主任务和双CTA清楚；两组应用在同一视野等权比较；Documents和RFQ形成连续采购路径；Footer四列闭合。正文区域没有过宽行长、突然密度变化或固定空洞。
- 768：独立平板排版仍保留应用双列；较长段落、COO和四项准备无碰撞。共享Header进入紧凑Menu/RFQ，Footer改为窄屏网格，阅读顺序完整。
- 390 logical @2x：Hero按钮全宽；应用变成单列并以细线分组；Documents动作自然堆叠；四条RFQ准备与未知Grade、提交后说明均完整；两个EU入口分行后仍是辅助文字。Footer两列导航与跨列Procurement、法律换行均可读。

实际读图未见裁切、遮挡、横向滚动、异常空白或未预期状态。三端`scrollWidth === clientWidth`；页面高度由真实内容自然决定。Inter实际加载；可见操作最小宽高均为44px。批准的Teal/Navy/白色角色及焦点环在对应表面清楚，不产生认证、库存、排名、推荐或等效含义。

## 4. 实际运行、状态与动作边界

环境：本地Chrome 152.0.7977.82、Playwright、file源；1440×900 DPR1、768×900 DPR1、390×844 DPR2。未向真实业务系统或外网发送请求；无pageerror。预检和正式结果分别见`diagnostic_support/preflight-runtime.json`与`formal-runtime-and-export.json`。

三端H1/H2/H3和四section顺序匹配，14个main链接文字与href逐项匹配；COO句与after-submit句各出现一次。title、description、lang、noindex、canonical和两种Schema类型实际从DOM读取。所有正文入口真实点击并只写入`LOCAL_NAVIGATION_INTENT_ONLY`：RFQ带`source_page_id=MARKET-EU-ES`、`destination_country=Spain`、`destination_editable=true`；Documents只带`source_page_id`，不预选country、COO document、grade或application。

768/390菜单用键盘Enter打开，首个Home获得焦点，main/Footer inert且body锁滚动；Escape关闭并回Menu，背景和滚动恢复。三端Cookie用Enter打开，Close获得焦点，Escape关闭并回Cookie Settings。风险状态图覆盖主CTA hover、应用链接focus、Hub hover/focus、EU辅助hover、Footer深色focus。

`ES-G4-OBS01`在Gate5两窄屏均复现：菜单打开后跨1101px进入桌面，菜单与锁定正确解除，但焦点落到BODY。它来自批准Consumer V0.2，仍是Global Chrome owner观察项；本页未分叉共享逻辑，也不声称已修复。

## 5. Finding、修复和限制

本页必修Finding：0。作者没有为凑数制造返修。

诊断事件`ES-G5-TOOL-01`：第一轮正常整页采集继承了链接核对后的hover。三张首轮全页均拒收；导出器增加指针移出和blur，冻结源不变，三端重导后全部重新打开并分段检查。`ES-G5-TOOL-02`：最终清单脚本首次使用CommonJS保留名导致SyntaxError，改名后重跑，最终冻结与导出身份全部匹配。详情在`diagnostic_support/failure-and-repair-history.md`。两项均是证据工具修复，不是页面改版。

未测/不证明：真实手机和触摸系统、读屏、其他浏览器引擎、原生200%浏览器缩放、forced-colors、真实visited/持续active、生产路由与参数序列化、Spain已有用户值保留、RFQ/Docs提交/接收/重试、CMP存储、生产爬虫读取Schema以及发布索引。没有页内表单、FAQ、目录锚点、筛选、长值选择、错误/提交中/成功状态；未制造这些不适用状态。

## 6. 资产与送审结论

正式图共14张，全部位于`approval_core/`：3张完整页、2张移动菜单、3张Cookie和6张风险状态。`export-inventory.json`记录逻辑/物理尺寸、DPR、状态、字节和SHA-256；其自身SHA-256为`19e6c4c88d643786abcb9ce66b0a7d0f5d056c6107a4ce50a4e881e524e3bdeb`。作者实际逐张打开最终14图，并以10张分段图可读检查三端全页。

最影响理解与行动的位置是从Hero直接询价与按应用继续评估的双路径；完整页维持RFQ主级，同时让Products、Applications和Documents逐步承接。最难的移动关系是两组应用及两条plastic/masterbatch链接，390分段确认相邻和顺序准确。最容易失效的共享状态是菜单跨桌面焦点，已准确复现`ES-G4-OBS01`并保留owner归属。

候选可交root进行独立Gate 5检查。作者提交不等于Gate5 PASS、用户批准或Gate6授权。
