# MARKET-EU-ES Gate 4 独立审查报告 V0.1

2026-09-07；审查者 gate4_review_a；Spain，EN，`/markets/spain/`，`tio2-my`。候选 `ES-G4-V01-SOURCE-01`。

**独立结论：NO_REQUIRED_FINDING_IN_TESTED_SCOPE。** 本次 Gate 4 代表样例范围未发现必需返修项，视觉方向、适用交互及交付身份可供总控完成关闭决定。此结论不是执行者自批，不自动替代 root 按 G4-8PAGE-SERIAL-01 记录的预认可关闭，不授予 Gate 5、开发或发布。没有为了增加变化或缺陷数量提出偏好返修。

## 1. 对象、顺序和身份

原始输入准备见 [input-preparation.md](input-preparation.md) 与 [input-identities.json](input-identities.json)：独立读取 Brief V0.2、完整 A V0.2/B V0.2/C V0.4、Manifest V0.8→V0.7、G3交接与全源、登记/关键词相关归属、新 Shared Consumer V0.2，实际查看 G3 三端总览及五张共享状态。已读且未变的根/品牌/方法规范复用本轮阅读，不以作者解释代替合同。

正式审查先读冻结源/CSS、逐张查看全部正式 PNG、独立运行，再保存 [initial-observations.md](initial-observations.md)。其后才完整阅读作者方向报告与执行自检、核最终清单。未读取 root 的 controller 检查内容或依据其结论作判断；没有修改候选、上游、Manifest、状态或共享 owner。

| 身份对象 | 独立复算结果 |
|---|---|
| HTML | 17828 bytes；`cad80da87fc716826ac22fad4e35e2a663fc8b873f4086071fa398859445519c` |
| visual-direction.css | 1079 bytes；`5d09b11e4386ab6245106ea6c9d44c06743dbc15a93e6d3553fa57c1ce4877f2` |
| source-freeze.json | `adcecd1548951687945eab29d13d017f47ae6777d0554aa3002d2f892eeb81a5` |
| export-inventory.json | `ab9d5835db8641357b7ac1cbe16b90f7e09233ac5d494a312cf77d59b6cfa2d9` |
| 最终 asset-inventory.json | `06af88a5ef70296314c1759eed105500dd17964cc5bb7b65bda44bad2933d2eb` |
| 冻结与正式导出 | 6 源依赖、57 输入、28 正式图，共 91 条全部字节/哈希一致；28 图尺寸全部匹配 |
| 最终收尾核对 | 最终清单文件、自检及再次核对冻结/导出，共 146 条记录全部匹配（包含重复记录，非146独立资产）；冻结源和图未变 |

证据：[identity.json](identity.json)、[final-check.json](final-check.json)。正式图全在本页 `04_planning/gate4-v0.1/approval_core/`。字体和两个 Logo 实际成功显示；字体 CDP 确认为自定义 Inter。两份 SVG 相对依赖与冻结批准身份一致。

G3→G4 的 main、嵌入样式和交互脚本逐字相等。Header/Footer 初始原始比较为 false，进一步查明只因 Logo src 由批准上游的绝对文件路径改为本包 dependencies 相对路径；忽略这两个路径后二者完全相等。三端独立并行测量 Header、main、四模块、应用组、Footer、标题、段落与列表的几何/字号/颜色均与 G3 相等；不是用作者“未变”声明代替验证。

## 2. 实际图示与视觉判断

本次实际打开全部 28 张正式图，均以清晰可读尺寸展示；最长正式图为 390 Applications 的 1052 px，未用压缩长页总览替代内容检查。

| 正式图覆盖 | 独立观察 |
|---|---|
| 1440/768/390 Hero（3） | Navy 标题、白色阅读底、真实长段完整；首屏 RFQ 实色、Products 描边，主次明确；390 自然双按钮全宽，标题及面包屑不裁切 |
| 三端 Applications（3） | 1440 两组各572px，768各336px；同级标题、相同角色，无一组被误标推荐。390宽350px，Coatings在前，Plastics/Masterbatch两条提示及各自链接完整；共同Products位于两组后 |
| 三端 Documents（3） | 选择Grade/文件类型说明完整；COO原句的淡色左线保持说明性质，无勋章或认证含义；局部请求按钮与Hub链接可区分，手机自然堆叠 |
| 三端 RFQ（3） | 四项采购准备、未知Grade引导、实色RFQ及一次人工后续全保留；两个EU入口仍是15px辅助文字链接，手机分行不升级为主按钮 |
| 三端 Footer（3） | Deep Navy 与白色主体清楚分区；反白Logo和法律文字可读；窄屏两列导航、采购跨列、法律区自然换行，无重叠 |
| 768/390 Menu focus（2） | Markets当前状态和白色内焦点环清楚；当前标记未呈现买家可见CURRENT；完整菜单/RFQ可见 |
| 三端 Cookie focus（3） | 共享正文和两操作完整，Close外环可见；390操作全宽，标签及边环无裁切 |
| 三端 Document Hub hover（3） | 实际Soft浅底与Teal文字，主辅关系维持；无几何移动 |
| 1440 Primary hover、768 Application focus、390 Related hover、390 Hub focus、390 Footer focus（5） | 实色RFQ只增加下划线；Masterbatch用途路径焦点明确；EU依旧辅助；Hub外环及Footer白色外环与实际底色清楚分离 |

所有正文原始词句与目的已独立核对：三端 main 全文归一化空白后与 B 的 BUYER_COPY 内容一致，14 个链接的文字及 href 逐项完全对应。没有删字、缩短限定、将未知Grade引导变成产品适配保证，或把 COO 可请求命题扩为批次/税务承诺。未观察到横向溢出、被覆盖标签或省略截断；scrollWidth分别1440/768/390。

三端15张普通完整区域图，以同冻结源、同宽度、同clip独立截图，在内存中与正式文件逐字节一致，未复制整套重复PNG。13张正式状态图都实际查看，并对其涉及的控件/背景/状态独立实测；没有声称13张状态视口也逐字节重现。

视觉方向保守且成立：受控行宽与完整留白容纳长文，Navy标题维持层级，Teal用于操作识别；细线是正文分区而非可点击卡片边界。图像缺席符合本页采购说明任务，没有空媒体位。保留已批准G3普通外观是可接受的设计决定，不要求为表现Gate变化而造新图、卡片或色块。此判断仅针对Gate4角色及代表样例，不推导完整长页节奏已批准。

## 3. 浏览器、实际状态与行为

环境为本地 Chrome152.0.7977.82 headless、Playwright、DSF1；1440×900、768×900、390×844。资源通过file读取，HTTP(S)请求设为阻断；实际没有外网请求或pageerror。独立证据为 [verify.cjs](verify.cjs)、[runtime.json](runtime.json)、[summary.json](summary.json)、[final-check.cjs](final-check.cjs)。

所有可见 Header/main/Footer 操作，加适用菜单/弹窗操作，逐一测普通、真实鼠标 hover、键盘 Shift+Tab/Tab 返回目标的 focus。桌面37组状态对象、两窄屏各40组（含在不同状态重测的Menu切换器）；数目仅说明覆盖，不能作为质量评分。所有 hover 在读取时真实匹配 `:hover`，所有焦点目标实际为 `activeElement` 且 `:focus-visible`。

| 检查 | 实际结果与接受条件 |
|---|---|
| 触达尺寸 | 三端所测状态最小宽/高均44px，符合44×44；hover宽高不变 |
| 普通及主按钮文字 | Teal/白与白/Teal约4.81775:1；所有被测文字均≥4.5:1 |
| 非Primary正文hover | 包括面包屑、应用、两处Products、RequestDocuments、Hub及两EU路由；实际Teal/Soft为4.5200728131:1，≥4.5 |
| 焦点环 | 普通浅色区Teal外环，Footer白色外环，菜单白色内环；对实际承载/接触表面最低4.8177493718:1，≥3；不是将外圈与按钮自身填充误比 |
| 菜单键盘 | 768/390 Enter打开→Home；末项Tab→Close，Close反Tab→RFQ；Escape和Close返回Menu；Products选中关闭；主区/Footer/Logo/HeaderRFQ inert且锁滚动，尝试聚焦背景仍留菜单 |
| Cookie键盘 | Enter打开→Close；双向Tab循环于Close/Policy；背景不能获得焦点；Escape及Close返回CookieSettings |
| 跨桌面断点 | 菜单关闭、背景恢复、滚动恢复；实际焦点BODY，见下一节，不伪报返回隐藏Menu |
| 正文链接 | 三端所有14个main链接实际点击，与合同路径一致 |
| 共享链接补核 | 三端实际点击全部可见Header/Footer链接、适用全部8条菜单链接及CookiePolicy，记录21/22/22条本地导航意图；与源目标一致 |
| 无JS阅读 | 三端main正文及14个链接目标仍完整；不据此声称无JS菜单或Cookie可操作 |

RFQ实际记录 `source_page_id=MARKET-EU-ES`、`destination_country=Spain`、`destination_editable=true`。Documents只记录本页来源；没有国家、COO文档类型或Grade/Application预选。其余正文入口context=null。**这些是 LOCAL_NAVIGATION_INTENT_ONLY，不是生产表单接收证明**：Spain值真实可编辑、保留用户已有修改以及请求成功需接收owner的后续实现/验收；本地模拟没有越权表达成功、签收或文件可用性。

## 4. 缺陷、共享观察与真实限制

必需返修项：0。不存在待关闭的本页独立Finding，因此不编造接受条件或安排无依据的复验。

共享观察 ES-G4-OBS01（非本页阻断）：菜单打开时跨1101px进入桌面，实际focus落到BODY，Menu消失，背景和滚动恢复。该行为沿用已批准Consumer V0.2；普通Escape/Close返回Menu和Cookie返回触发器均成立。本页未分叉共享逻辑，作者也准确披露，建议由共享owner在后续完整交互阶段评估可见桌面焦点落点。本次不把它误写成回焦某个Desktop链接或无条件完美通过。

未测/不证明：真实手机及触摸系统、读屏、其他浏览器引擎、原生200%缩放、forced-colors、真实visited与持续按下active、生产路由/参数序列化/上下文持久化、目标表单保留已编辑Spain值、提交/重试/真实接收、CMP存储和发布索引。没有页内表单、FAQ、筛选、技术表格、库存、目录锚点或数据图表，不制造其状态。Gate5仍需完整三端整页连续节奏、全部最终实例和Footer连接验收。

审查工具事件保留：转换旧独立脚本时首次正文匹配误中PNG变量，引起SyntaxError；精确入口后修正。第一次裁切超出默认viewport产生screenshot错误，保留 [failure.txt](failure.txt)，改成fullPage+相同clip后15张图匹配。补充脚本曾用CommonJS保留名exports，启动失败，改为exportList后完成；这些都不是候选缺陷，没有将失败当作接受证据，也未动候选规避检查。

## 5. 作者规格核对与交接

保存独立观察后，完整读取 `MARKET-EU-ES_GATE4_VISUAL_DIRECTION_AND_METHOD_REPORT_V0.1.md` 和 `MARKET-EU-ES_GATE4_EXECUTION_SELF_CHECK_V0.1.md`。作者 V01–V05 的容器、字号/长文、分区与等权布局符合源、三端实际图及独立几何；V06–V09 的主辅动作、hover和焦点符合真实状态测量；V10 COO、V11准备流程、V12共享消费符合原始B/C与批准G3。四模块及共享的三端覆盖映射完整，无只在说明中存在的关键角色。无图分支、Gate5剩余工作、归因/生产边界和共享BODY焦点观察与独立结果一致。

作者自检的计数和零错误声明未充当独立证据；独立结果及脚本保存在本目录。最终资产清单的源、冻结、导出、自检和全部所列文件身份再次复算通过，未发现冻结后源/图变更。

可交总控依据既有预认可合同关闭Spain Gate4，并登记Gate5输入已准备。后续任何新增媒体含义、正文/结构或接收行为变化仍回对应owner和批准层；此报告不启动后续制作。
