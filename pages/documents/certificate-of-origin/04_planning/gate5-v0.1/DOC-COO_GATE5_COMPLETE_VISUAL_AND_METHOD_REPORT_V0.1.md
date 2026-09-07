# DOC-COO Gate 5 — 完整页面视觉与方法报告 V0.1

2026-09-07。Page ID `DOC-COO`，EN，`/documents/certificate-of-origin/`，`site_scope=tio2-my`。状态：`DRAFT_FOR_PROJECT_CONTROL_REVIEW`。本报告是Gate 5作者制作与自检成果，不是独立审查、用户批准或Gate 6结论。

## 1. 输入卡与执行边界

| 对象 | 本次绑定 |
|---|---|
| 执行授权 | 当前Manifest V0.10；`COO-G5-START-01`；串行合同`G5-2PAGE-SERIAL-01`第2页。作者提交后停止 |
| 页面身份 | `DOC-COO`；`/documents/certificate-of-origin/`；EN；主词`titanium dioxide country of origin certificate`；Documents当前；`PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED`保持 |
| 内容与行为 | Brief V0.3；A V0.1、B V0.2、C V0.1。B是唯一买家正文源；C控制CTA、Documents intent、SEO/Schema与接收边界 |
| 结构 | Gate 3批准源；六模块：Hero → evidence comparison → context → origin/traceability → preparation → official source；共享Header/Footer/Menu/Cookie |
| 视觉 | Gate 4批准冻结`COO-G4-V02-SOURCE-01`；HTML `6d5a03…ba43`、CSS `134474…df43`；无图方向；开放共享观察`COO-G4-SHARED-OBS-01` |
| 共享来源 | Global Chrome、Consumer V0.2、品牌标准、CTA增补、生产Logo、Footer法律区、Legal与Consent当前合同 |
| 方法 | Gate5 Agent；full-page-visual-composition；layout-interaction-verification及core risk model |
| 输出与停止点 | `pages/documents/certificate-of-origin/04_planning/gate5-v0.1/`；只到作者送审，不进入Gate 6、开发或发布 |

冻结`COO-G5-V01-SOURCE-01`含6项呈现源/依赖、89项正式输入和预检记录。HTML 23,929 bytes，SHA-256 `c4f9b788619afa7d1ef6ebf8f43be0c89d1bf177ffbe68326d3399f8db028b31`；CSS继续是Gate 4批准的`134474dbba6d9b4719422d95fe78012b1c3ba1f109411043d1d977028895df43`。冻结文件SHA-256 `6bdc6d117ae688e1d0a0143ec79b33311d7421fd112962b1bec4e6969191b7a2`。

## 2. 上游差异与完整应用

候选可见`<body>`与批准Gate 4 V0.2 HTML逐字相等；完整正文、模块顺序、标签、链接、响应式比较、共享组件和本地行为没有变化。字体、两份Logo和批准CSS复制到本页耐久依赖，字节与上游一致。没有使用另一业务页作为母版。

Gate 5只在`<head>`补入C V0.1已批准但Gate 4视觉样例未带入的canonical，以及`WebPage + BreadcrumbList` JSON-LD；title、description、language、robots继续按C。Schema引用与可见Official Source相同的Royal Malaysian Customs Department来源，并使用可见`Last reviewed: 7 September 2026`。该差异不改变买家正文，也不扩张证书可得性、批次、待遇、税率或海关结果。规划源保持`noindex,nofollow`。

| 模块 / 实例 | 保留的页面合同 | 完整视觉应用与正式证据 |
|---|---|---|
| Hero | 定义证书用途边界；未预选Grade也可开始；首个Request动作 | Navy标题、受控行宽、主CTA；三端完整页与1440 primary hover |
| Which Origin Evidence Is Relevant? | 三种evidence need、相关性与核验内容；一般海关结果限制；源链接 | 1440桌面表；768每条记录有Evidence need上行和两个并排字段；390三个标签字段纵向堆叠；comparison source focus |
| What Determines the Right Evidence? | Destination、intended use、arrangement/procedure、transaction context四项；Additional Requirements；company Country / Region区别 | 1440/768两列，390顺序单列；三端分段实际读回 |
| Origin Evidence and Traceability | origin evidence与traceability回答不同问题，一个不自动建立另一个 | 独立正文区，不用卡片暗示等价；三端分段实际读回 |
| Prepare Your Request | 五条准备事项、不完整context帮助、一次提交一个Grade、第二个Request、提交后说明与Hub | 真实长文案完整；390按钮全宽；Hub focus状态；三端分段实际读回 |
| Official Source | 准确来源标签、information date 2025-10-10、page update 2026-01-05、review date 2026-09-07、一般指导限制及标点 | 两个Official Source入口仍指同一批准URL；链接末句号在anchor内；390链接为350×70.375；hover/focus证据 |
| Footer与共享状态 | Consumer V0.2、生产反白Logo、法律区、Cookie；正常Footer与focus分开 | 三端完整页、390 Footer normal/focus、三端Cookie |
| Mobile Menu | 768/390适用；Documents current；背景隔离 | 键盘真实打开、首链接focus、Close/RFQ与完整导航可见；768与390菜单图 |

无图方向是完整最终实例，不是缺图占位。主内容没有`img`、`picture`、`video`或空媒体容器；唯一媒体是共享Header/Footer的批准生产SVG Logo。

## 3. 三端完整页面与视觉判断

正式完整页：1440×4371 physical（1440 logical，DPR1）、768×5257（768 logical，DPR1）、780×13730 physical（390 logical，6865 logical高，DPR2）。390是原生2x渲染。完整页从Header连续到Footer；因内容长度与比较结构的可读性风险，另生成19张分段读图：1440为5张、768为6张、390@2x为8张，保存在`diagnostic_support/segments/`。

- 1440：Hero和请求动作先建立任务；完整三行比较表可横向扫读；四项context及origin/traceability分界明确；准备清单、第二个请求动作、Official Source和Footer连续闭合。
- 768：比较表转为三条记录，每条上方保留Evidence need，下方两个带标签字段并排；四项context仍双列；长句、清单、来源与Footer没有碰撞或遗漏。
- 390 logical @2x：三条证据记录全部改为标签字段纵向堆叠；四项context、origin/traceability、五项准备、提交后说明与来源按批准顺序完整；按钮与长Official Source链接在可视宽度内；Footer两列导航和法律区可读。

实际读图未见裁切、遮挡、横向滚动、异常空白或未预期状态。三端`scrollWidth === clientWidth`；页面高度由真实内容自然决定。Inter实际加载；可见操作最小宽高均为44px。批准的Teal/Navy/白色角色、浅色字段分隔与深浅表面焦点环都清楚。

## 4. 实际运行、状态与动作边界

环境：本地Chrome 152.0.7977.82、Playwright、file源；1440×900 DPR1、768×900 DPR1、390×844 DPR2。预检和冻结后正式运行分别见`diagnostic_support/preflight-runtime.json`与`formal-runtime-and-export.json`。未向真实业务系统或外网发送请求；无pageerror或http请求。

三端H1/H2与六个section顺序匹配；三种evidence记录和九个响应式标签匹配。准确次数核对包括两个Request动作、两处Additional Requirements、一次Country / Region、一次Last reviewed以及两项来源日期；被禁止的`A Certificate of Origin is available upon request.`和Grade预填均未出现。title、description、lang、noindex、canonical和两种Schema类型从DOM读取。

页面全部正文入口真实点击并只写入`LOCAL_SIMULATION`。两个`Request Origin Documentation`都产生`document_types=['origin_supplier_qualification']`与隐藏`source_context.page_id=DOC-COO`，不带grade、destination或scheme；`receiverExecuted:false`。这只证明规划源intent，不证明生产receiver的可编辑、可移除、持久化或提交处理。

768/390菜单用键盘Enter打开，Home获得焦点，Documents保持current，main/Footer inert且body锁滚动；Escape关闭并回Menu，背景和滚动恢复。三端Cookie用Enter打开，Close获得焦点，Escape关闭并回Cookie Settings。风险状态图还覆盖主CTA hover、comparison source focus、Official Source hover/focus、Document Hub focus、Footer正常与深色focus。

`COO-G4-SHARED-OBS-01`在Gate5两窄屏均复现：菜单打开后跨1101px进入桌面，菜单与滚动锁定正确解除，但焦点落到BODY。它来自批准Consumer V0.2，仍是Global Chrome owner观察项；本页未分叉共享逻辑，也不声称已修复。

## 5. Finding、修复与限制

本页必修Finding：0。作者没有为凑数制造返修。

诊断事件`COO-G5-TOOL-01`：首次冻结脚本少一个右括号，freezer在写入Gate5冻结前以SyntaxError停止；同一shell后续仍导出16图。该批图即使视觉干净也因不存在有效前置冻结而全部拒收，连同旧export inventory完整移入`diagnostic_support/rejected-pre-freeze/`。修复脚本后先成功创建冻结，再顺序重跑正式运行与16图导出；HTML、CSS和依赖未变。详情保存在`diagnostic_support/failure-and-repair-history.md`。

未测/不证明：生产receiver的document type可编辑/可移除、隐藏source接收与服务器提交；生产路由、重试和持久化；CMP存储；当前外部Official Source新鲜度（本轮未联网刷新）；真实设备/触摸；读屏和表格叙述；非Chrome；原生200%缩放；forced-colors；生产Schema抓取与索引发布。页面没有表单、FAQ、筛选器、错误/提交中/成功状态，因此未制造不适用状态。

## 6. 资产与送审结论

正式图共16张，全部位于`approval_core/`：3张完整页、2张移动菜单、3张Cookie和8张风险状态。`export-inventory.json`记录逻辑/物理尺寸、DPR、状态、字节和SHA-256；其自身SHA-256为`d95e7339e13bb1cab07d70adcb02fa5cc5cd16dc389cbc7bfc532b900dba9248`。作者实际逐张打开最终16图，并以19张可读分段检查三端全部模块、模块连接与Footer。

最影响理解与行动的位置是evidence比较如何接到四项context及准备清单；完整页面保留“先判断需要什么证据，再带足上下文发起请求”的顺序。最难的响应关系是同一比较内容在桌面表、平板双字段记录和移动标签字段之间变化，三端分段确认全部文字与关系仍可读。最容易失效的共享状态是菜单跨桌面焦点，已准确复现并保留Global Chrome owner归属。

候选可交root进行独立Gate 5检查。作者提交不等于Gate5 PASS、用户批准或Gate6授权。
