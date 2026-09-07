# Spain Gate 4 — 视觉方向与方法报告 V0.1

2026-09-07。Page ID `MARKET-EU-ES`，EN，`/markets/spain/`，`site_scope=tio2-my`。执行状态 `DRAFT_FOR_PROJECT_CONTROL_REVIEW`；这是作者制作与自检结论，独立审查和总控关闭待完成。用户的批次预授权由总控按合同记录，不等于执行者自行批准。

## 1. 推荐与实际变化

推荐保留 Spain 已批准 Gate 3 的无图阅读方向：Navy 标题、Inter、白色阅读表面、细分隔线、两组等权应用，以及首末实心 RFQ。读者可以直接询价，也可以先说明体系或制品、查看产品、申请文件，再准备采购信息。视觉重点必须跟随这个任务，不把政策入口或 COO 提升为主叙事。

本页上游已有可用的视觉基础。Gate 4 保留其字号、行高、列数、行文宽度、区块间距、CTA位置和所有普通状态几何；明确保留本身是本次判断。新增的页面样式仅是状态反馈：所有非 Primary 正文链接/描边行动 hover 使用 `#008078` 字配明确 `#F5F8FB` 底和 2px 下划线；两处实心 RFQ hover 保持白字/`#008078`，使用 2px 下划线提示反馈。既有 3px 外侧焦点环保持。

新增规则解决两件具体事：让不同职责的入口在交互时仍保留主次；避免从某个通过的色值推断所有背景都合格。Poland 初审 IR01 曾漏掉辅助链接的灰底组合，本页逐个核对普通、hover 和键盘状态，包括 Doc Hub、两个 EU 链接及共享控件。没有把 Poland 的源当母版，也没有为显出变化而增加图片、卡片、表格、表单或模块。

Gate 5 可直接复用下述全部角色与模块映射，保持已确认的结构并展开整页连接与全部最终实例。因此交付不只是按钮色说明；普通状态的完整排版、阅读密度、文案关系、共享消费及状态规则均有明确落点。

## 2. 有效输入与来源

完整身份见 [source-freeze.json](approval_core/source-freeze.json)：57 项稳定输入，6 项样例源/运行依赖，每项包含绝对路径、相对路径、字节数与 SHA-256。动态 Status、Index、队列 Progress 未纳入冻结。

| 权威对象 | 本次使用 |
|---|---|
| 当前执行授权 | Spain Manifest V0.8；`GATE4_EIGHT_PAGE_SERIAL_CONTROL_V1.0.md` / G4-8PAGE-SERIAL-01。只执行 Spain Gate 4 |
| 上游批准组合 | Manifest V0.7、G3→4交接、G3总控审查及预授权关闭；保留其精确源和八张原图 |
| 本页内容 | Brief V0.2；A V0.2/B V0.2/C V0.4；B的 BUYER_COPY 标记之间是唯一正文编辑源；按 C 保持 URL、来源/目的地及接收边界 |
| 任务与归属 | 根 AGENTS/Context、治理细则适用章节、Gate1–5标准、Markets Playbook、登记册与关键词主表本页/相邻 owner 行。旧 Playbook 的缺证禁止、旧色值、Hub专属结构及早期授权状态不覆盖本页较新批准 |
| 品牌 | Visual Standard V1.0 + Primary CTA Addendum V1.0；旧 `#007F77` 不覆盖当前 `#008078`，Logo自身配色不被功能色增补改写 |
| 共享 | Global Chrome V0.5/继承V0.4、生产Logo Manifest、Footer法律增补、法律当前 Manifest V1.3、Shared Consent V1.1；本页实际消费中立 Consumer V0.2 |
| 视觉参考 | 已读取的 Home/Products 品牌基线与已批准 Poland V0.2 无图市场方向，仅作品牌和方法参考；具体页面结构来自 Spain 自己的 G3 |
| 方法 | Gate4 Agent V0.1、brand-applied-visual-design V0.1、layout-interaction-verification V0.2及 core-risk-model；两页复盘用于吸收实测经验，不把复盘当新授权 |

已读未变的共同输入复用本轮记录，冻结预检重新计算其身份；本页新增的 A/B/C、Brief、Manifest、交接、原源、相关正式图、共享 Consumer V0.2 Manifest/package/data/生成器/行为均实际读取。G3原图先看三端整体，再以可读比例查看长内容和共享状态；正式 Gate4 图全部逐张用 `view_image` original 打开。

样例直接由 `../gate3-v0.1/MARKET-EU-ES_GATE3_RESPONSIVE_WIREFRAME_V0.1.html` 派生。上游源 SHA-256 为 `d2fb26ae9ee230886d9cb31c401cc47d0deba3f030d578f16697c97a79a1ca64`。只将两个 Logo 引用改为本包相对依赖，并追加 `visual-direction.css` 链接；反向替换后与上游逐字一致，见 [source-derivation.json](diagnostic_support/source-derivation.json)。未改内联 CSS、共享行为或本地导航记录器；未重新生成一份共享包替换上游。

## 3. 可执行视觉规则

以下 D/T/M 分别为 1440/768/390 逻辑宽度、1×导出。断点保持上游：内容在 900px 调整密度，在 600px 进入单列；共享导航 1101px 进入 Desktop。实际测量见 [visual-role-measurements.json](diagnostic_support/visual-role-measurements.json)。

| 规则 | 精确应用与三端取值 | 用途 / 继承判断 |
|---|---|---|
| V01 表面与容器 | 主阅读底 `#FFFFFF`；main max-width1200px；D/T/M实际宽1200/704/350，左右120/32/20px；main底部80/80/52px | 宽容器配受控行宽；不用彩色大块抢占应用或询价内容 |
| V02 标题 | Inter；H1 D/T/M56/46/36px，650，line-height1.1/1.1/1.15，max-width870px；H2 34/30/28px，650，1.2；H3 24/24/23px，600，1.3；全为 `#062B5B`，letter-spacing−.025em | 保留G3已成立的标题强度与自然换行；H1底间距24px，H2 28px，H3 18px。品牌字号范围为指导，本页精确取值继承已批准布局 |
| V03 正文与长文 | Inter400，`#334155`；普通段落/列表17/17/16px，1.7；段落max800px、底间距20px；Hero20/20/18px，1.65，max850px、底28px | 完整保留长文，不做省略、固定高度、摘要改写或行数限制 |
| V04 分区节奏 | 普通section上下56/44/38px，顶部1px `#D9E2EC`；Hero无顶部线，上42/34/34、下56/44/44px | 细线表达正文分区，非交互边界；无需3:1交互阈值，不把其颜色用于按钮边框 |
| V05 双应用 | D/T两列等宽，gap56/32px；M单列，Coatings后Plastics & Masterbatch，gap30px，第二组另有padding-top30px及1px分隔；组内段落底18px；共同Products margin-top14px | 两组相同标题/正文/链接角色，无推荐高亮或整组可点击外观。两个Plastics/Masterbatch提示与各自链接同段、原顺序保留 |
| V06 行动层级 | 首末RFQ实心 `#008078`/白字；HeroProducts及RequestDocuments白底/Teal字边；16px/600，padding13px24px，1px边，radius6px，min-height50px；实际55.1875px高；M Hero两按钮350px全宽，其余自然宽 | RFQ为全页主行动；Products是首屏次行动；Documents是局部请求；Hub/应用/末尾EU为文字入口。无禁用或成功态 |
| V07 普通链接 | 主文链接 `#008078`、600、下划线offset4px、inline-flex、min44×44px；普通字号继承段落，EU15px，面包屑14px/500 | 所有普通文字链接可识别；末尾EU保持15px辅助角色，不升级到并列按钮 |
| V08 hover | 所有main非Primary链接：Teal字、明确 `#F5F8FB`底、2px下划线；Primary：白字/Teal不变，增加2px下划线。无移动、缩放、padding、边宽变化 | 新增；同规则覆盖面包屑、所有应用与Products、两个Documents入口和两条EU路由。`#F5F8FB`不能随意换成近似灰底再沿用对比结论 |
| V09 键盘focus | main、浅色Header/Cookie：3px `#008078`外环、offset3px；Footer3px白色外环offset3px；菜单链接3px白色内环offset−4px | 保留共享及上游实现；外环对周边表面、内环对控件本身表面计算。Tab/Shift+Tab真实进入，不画伪状态类 |
| V10 COO说明 | 普通正文角色；左3px `#D9E2EC`、padding-left20px；位于文件选择段之后、两个入口之前 | 轻边线维持说明关系，不画证书、勋章或已认证标签；“upon request”与命题保持完整 |
| V11 采购准备 | ul max800px、padding-left24px、底24px；li padding-left5px、底10px；四条完整内容；未知Grade段 → RFQ → 人工后续 → EU入口 | 没有选择器、采集区或提交成功；提示仅描述目标表单填写准备。相关段落margin-top24px、line-height1.6 |
| V12 共享外观 | Header84/64/64px；Logo180×60 / 120×40 / 120×40；固定RFQ至少48/44/44px；Deep Navy Footer；共享字14px；Menu52px行，当前Markets字体加粗+Teal标记；无CURRENT | 继承本页 Consumer V0.2，不新增共享hover效果。Cookie/Policy文字边框与Menu边框已是当前Teal；不是旧Poland共享快照 |

共享 Footer、Menu、Cookie 的完整数值由冻结源第一段共享style及冻结 Consumer V0.2确定。Footer D四列，窄屏Explore/Information两列、Brand/Procurement跨列；法律区换行；无页内active标记。Cookie白底，最大560px/视口减32px，radius8px，padding32px（≤560时26px20px），正文16px/1.65，标题30px（M26px）；≤560px两个操作全宽。没有动画，保留 reduced-motion 规则。

无图分支为本页最终推荐。运行媒体仅为批准生产Logo的两份SVG与Inter字体/许可证，均从批准引用字节复制到相对依赖。没有素材检索、生成图、国旗、工厂或港口背景、文档封面、社交大图。无空媒体容器，无图片失败占位；Logo alt 保持TiO2 Malaysia，不增加国家或能力关键词。若Gate5需要新增媒体含义，另交内容/品牌owner决定，不能用此无图方向授权照片事实。

## 4. 全模块与样例覆盖

核心目录为 [approval_core](approval_core/)。`{w}`表示1440/768/390；每个列出的三端文件均已存在。正常区域裁切保留该完整模块和边界，状态图为真实视口，旁边模块可以只露出连接部分；状态图不替代完整区域图。

| 原位置 / 风险 | 规则 | 正式样例 |
|---|---|---|
| Header、面包屑、ES-01长Hero及主次CTA | V01–04、V06–09、V12 | `{w}-hero.png`；`1440-primary-hover.png` |
| ES-02两等权组；T长段；M两条独立用途路径与共同Products | V02–05、V07–09 | `{w}-applications.png`；`768-application-focus.png` |
| ES-03完整文件选择/COO限定/局部请求及Hub | V02–04、V06–10 | `{w}-documents.png`；`{w}-document-hub-hover.png`；`390-document-hub-focus.png` |
| ES-04四准备项、未知Grade、人工后续与两条低权重EU入口 | V02–04、V06–09、V11 | `{w}-rfq.png`；`390-related-hover.png` |
| 共享Footer完整普通外观与深色焦点表面 | V09、V12 | `{w}-footer.png`；`390-footer-focus.png` |
| 菜单当前Markets、窄屏导航及实际focus | V09、V12 | `768-menu-focus.png`、`390-menu-focus.png` |
| Cookie完整共享文案、两操作及白底focus | V09、V12 | `{w}-cookie-focus.png` |

合计28张正式图：15张完整代表区域、13张状态图；另保留4张预检图。数量由本页真实风险产生，不是质量分数或未来页面配额。所有四模块和共享普通区域都有直接三端图示，没有未映射的本页独有组件。同一角色的其余实例（例如Breadcrumb每条、Coatings/Plastics、共同Products、第二RFQ、EU Overview、Cookie Policy和共享导航各条）复用上述精确规则，且已逐实例实测normal/hover/focus；未为每条单独增加相同截图。

建议用户展示的稳定路径：`approval_core/1440-hero.png`、`approval_core/768-applications.png`、`approval_core/390-documents.png`，再辅以 `390-rfq.png` 和所需状态图。文件仅追溯，决定内容由总控直接展示。

## 5. 实际执行与结果

| 证据类型 | 本次观察及界限 |
|---|---|
| SOURCE_INSPECTION | 反向派生逐字相等；main、所有script和内联style与Spain G3一致；Neutral Consumer V0.2生成的Header/Footer/Dialog/style/behavior全部原样嵌入匹配；唯一新CSS只命中main |
| ACTUAL_RUNTIME | 本地Chrome152.0.7977.82、Playwright1.62.1、Node24.16.0；1440×900、768×900、390×844，DPR1。CDP确认H1实际使用自定义Inter，两个SVG加载成功；B全文规范化空白后逐字一致 |
| ACTUAL_RUNTIME | 三端scrollWidth分别1440/768/390；无main隐藏裁切/ellipsis/line-clamp规则；四模块/两组关系/四bullet/单COO成立。与G3原源并行测量的Header、四section、Footer几何逐项相等；总高度仍2673/2951/3954 |
| ACTUAL_RUNTIME | 全部可见页面/共享控件的normal、真实pointer hover、真实Tab/Shift+Tab focus；351条控件状态测量。最小宽高44×44px，hover几何不变，文字最低4.5200728131:1；焦点最低4.8177493718:1。文字按4.5:1、focus按3:1核对 |
| ACTUAL_RUNTIME | 所有非Primary页面hover实际字底为Teal/Soft Background；普通白底Teal及Primary白字Teal为4.8177493718:1。每张状态图截图后重新确认实际:hover或:focus-visible，未用截图文件名证明状态 |
| ACTUAL_RUNTIME | 768/390菜单进入Home、当前Markets、循环、Escape返回、选择关闭、背景inert/锁滚动及跨Desktop关闭恢复；Cookie首焦Close、循环、背景原生modal隔离、Escape/Close返回Footer触发器 |
| LOCAL_SIMULATION | 点击全部main入口使用上游本地导航记录器。RFQ保留source_page_id及Spain可编辑目的地语义；Documents只有本页来源，不自动Grade/文件/公司国家。普通href不变；不能证明目标页真正接收 |
| STATIC_VISUAL | 全部28张正式图和4张预检图逐图打开。完整长文、边界、COO限定和关联路径均可读；M两应用和完整RFQ自然纵向延伸，没有为画面短而删除条件；焦点环完整且不遮标签 |

完整原始数据见 [formal-runtime-checks.json](diagnostic_support/formal-runtime-checks.json)、[visual-role-measurements.json](diagnostic_support/visual-role-measurements.json)及逐图 [visual-readback.json](diagnostic_support/visual-readback.json)。正式运行516条记录含输入身份核对和采集确认，错误0；此数值只说明复现范围，不是跨页PASS评分。

## 6. 发现、保留历史与未测项

本次作者范围没有未解决页面缺陷；没有改动冻结源后的返修。独立审查仍须从原输入和正式样例判断。此前Poland IR01作为经验引用，未当成本页Finding，也未删除其历史。

菜单跨Desktop断点后实际焦点落在BODY，菜单关闭、背景恢复均成立。这是继承共享行为的既有观察，保持公开记录，交共享owner后续评估；本页没有私自分叉组件或声称焦点落到某个可见Desktop控件。源读取中一次误用旧页freeze路径，定位到其真实approval_core路径后完成读取；属文件查找工具事件，无候选视觉失败，见诊断记录。预检输出和G3原始失败历史都保留，未将其替换为正式证据。

不适用：本页没有表单、FAQ、搜索/筛选、目录锚点、技术比较、产品库存、排名、媒体或数据图表；不制造空结果、错误/成功或选择状态。

未测：真实设备/触摸系统、其他浏览器引擎、读屏、原生200%浏览器缩放、真实visited/按住active、强制颜色模式；生产路由、上下文序列化和接收、Destination值保留、表单提交/错误/重试、CMP技术与存储、发布/索引。这些不从本地截图或模拟推定通过。

## 7. Gate 5接口与提交边界

Gate5在获得授权后，以B/C和G3结构为正文/行为依据，将本报告V01–V12应用于完整1440/768/390页面及全部实际实例；核对模块间连续节奏、完整长页面滚动、RFQ末端到Footer的留白闭合、所有邻接组合以及最终资源加载。这里的区域图包括完整内容，但不是整页Gate5批准，也不能免去整页长文与共享状态复核。

沿用无图分支、等权应用、单次COO说明、四项准备和一次人工后续；保留所有辅助入口层级。新视觉规则定向回到Gate4，新列数/结构回Gate3，新正文/事实/行为回相应owner。Application/Trade最终URL、RFQ来源/可编辑Spain接收、CONV-DOC来源但不预选等由Gate7登记/Gate8实现/Gate9验收。

最难的代表样例是768应用区和390采购区：前者同时容纳两组完整决策段，后者必须保留四条、未知Grade及人工后续。实际图证明继承的自然高度能够成立，无需缩字或移动行动。未见新增误导性强调；唯一需要传递的共享焦点观察如§6。

冻结身份 `ES-G4-V01-SOURCE-01`。可编辑源为 [MARKET-EU-ES_GATE4_VISUAL_SAMPLES_V0.1.html](MARKET-EU-ES_GATE4_VISUAL_SAMPLES_V0.1.html)，17828 bytes，SHA-256 `cad80da87fc716826ac22fad4e35e2a663fc8b873f4086071fa398859445519c`。源、依赖及28图的身份由[source-freeze](approval_core/source-freeze.json)与[export-inventory](approval_core/export-inventory.json)绑定；最终交付清单见[asset-inventory.json](approval_core/asset-inventory.json)。已保存读回后提交总控独立审查，执行者停止写入，不自批、不接下一页、不进入Gate5。
