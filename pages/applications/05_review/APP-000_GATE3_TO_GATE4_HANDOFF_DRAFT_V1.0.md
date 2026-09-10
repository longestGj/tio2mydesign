# APP-000 Gate 3→4 交接导航草稿 V1.0

2026-09-08 · `/root/app000_gate3_author` · `DRAFT_PENDING_INDEPENDENT_REVIEW_AND_CONTROLLER_CLOSURE`。本草稿不是当前Manifest或批准记录；尚不可标记 `READY_FOR_GATE4_WHEN_AUTHORIZED`。

## A. 身份、授权与核心入口

APP-000 / Applications / EN / `/applications/` / `site_scope=tio2-my` / Navigation hub / `NO_PRIMARY_KEYWORD`。[APP000_GATE2_TO_GATE9_CONTROL_V1.0.md](D:/23MySec/docs/architecture/APP000_GATE2_TO_GATE9_CONTROL_V1.0.md)已授权有效上游后的连续阶段；当前作者只提交Gate 3。独立结构审查及总控关闭记录尚未产生，须由总控将实际Review和关闭记录绑定到唯一当前Manifest后派发Gate 4。本稿不得被视为已批准结构。

| 输入角色 | 精确路径 | SHA-256 |
|---|---|---|
| manifest | [APP-000_CURRENT_GATE_BASELINE_MANIFEST_V1.1.md](D:/23MySec/pages/applications/APP-000_CURRENT_GATE_BASELINE_MANIFEST_V1.1.md) | `de27777ca62854af0fd57f59452cbc34b5d4485b038ef2300eaece344fcc4e1f` |
| copy | [APP-000_GATE2_FULL_BUYER_CLEAN_COPY_V1.0.md](D:/23MySec/pages/applications/04_planning/APP-000_GATE2_FULL_BUYER_CLEAN_COPY_V1.0.md) | `c57db3f8e1afb9b4d33a1498843cf8228b7faddeccdaa79c7e6a6d76c1a234b1` |
| contract | [APP-000_GATE2_CONTENT_CONTRACT_V1.0.md](D:/23MySec/pages/applications/04_planning/APP-000_GATE2_CONTENT_CONTRACT_V1.0.md) | `6f7ef60c6bc6cbe5398f9f1cf4e2e713fcfb48ce65bc28fe49d699ca61b26f6e` |
| approval | [APP-000_GATE2_USER_APPROVAL_AND_CLOSURE_V1.0.md](D:/23MySec/pages/applications/05_review/APP-000_GATE2_USER_APPROVAL_AND_CLOSURE_V1.0.md) | `f8207754c8e52efe3a742c044b6b4c0300584eaaaa055876b4fc85eda00765b6` |

C §1即紧凑A；B是正文唯一编辑源。Brief、Playbook、关系矩阵、共享owner等额外身份见 [input-binding.json](D:/23MySec/pages/applications/04_planning/gate3-v1.0/input-binding.json)。上游用户内容批准与接下来Gate 3常设关闭分别记录。

冻结入口 [freeze-record.json](D:/23MySec/pages/applications/04_planning/gate3-v1.0/freeze-record.json)，SHA `573cbe9aa3f3335dab2653dcff5797b3a5fd75ee031415c0137e6b8ce9441429`；主结构源 [index.html](D:/23MySec/pages/applications/04_planning/gate3-v1.0/index.html)，SHA `ec5136bdb812751e341f16f06d86dd14e1eae790062ffdf9e068373bb653fcb5`。实际可编辑入口为 [build-structure.cjs](D:/23MySec/pages/applications/04_planning/gate3-v1.0/build-structure.cjs)＋[structure.css](D:/23MySec/pages/applications/04_planning/gate3-v1.0/structure.css)；条件HTML、只读B映射、正式依赖均在冻结清单。不要从PNG猜DOM关系，也不要直接改派生正文。正式资产与每张路径/尺寸/bytes/hash在 [evidence-index.json](D:/23MySec/pages/applications/04_planning/gate3-v1.0/evidence-index.json)。

## B. 待批准的结构约束与当前参数

| 对象 | 结构约束 | 当前参数，Gate 4可在不破坏约束下调整并复验 |
|---|---|---|
| 页面顺序 | Shared Header → Breadcrumb → M1 Hero/六同页路径 → M2六类集合 → M3三步 → M4三后续路径 → M5最终RFQ → Shared Footer。条件省略遵守C，不能重排保留模块 | 内容宽1200px、宽屏边距32px、390边距20px；具体字号/行高/间距来自structure.css，不是视觉批准 |
| Hero | 1440正文与六路径目录左右两区；768/390先正文/行动再目录；主行动到M2，次行动为独立RFQ | 1440两区1.5:1；目录1440两列、768三列、390一列；按钮尺寸细节可视觉化，但触点至少44×44 |
| 六类集合 | 连续类别行；每类标题/范围→Grade控制与完整列表→该类应用行动；全局原序8/8/7/4/2/1。1440三功能列；768范围与牌号两列、行动在牌号列下；390单列 | 宽屏范围280px、行动190px；768范围220px。宽度值可调整，必要列数/重排及归属不可自行改变 |
| 披露 | 390初始折叠，标题、范围、中性定义始终可见；可多组展开；全部30关系留在本DOM原序；不新增Show more/counts；同页跳转不自动选择/展开 | 原生details/summary；宽屏默认打开；>=561进入宽屏时全部打开，变窄保留已有展开状态；阈值可围绕结构稳定性优化后复验 |
| 阅读/行动 | 所有链接与普通牌号以语义及非颜色单一方式区分；折叠牌号不在Tab序；同页锚点落到可见标题；无RFQ选择状态 | 当前真实链接有下划线、plain为span，焦点outline；按钮/分隔线外观由Gate 4决定 |
| 后续M3/M4/M5 | 1440 M3三步与M4三个卡片各三列；768/390各一列，顺序不变；M5两段后单一RFQ，不是表单 | 当前为简单文本区块和分隔线，无装饰性媒体；可调整视觉表面但不能新增页面内容、步骤或承诺 |
| Shared Chrome | owner的Header/导航/Footer/Cookie、固定RFQ、Logo、法律文案；Applications current；不出现CURRENT | owner明确Header84/64px、Logo比例/最小约束及CTA要求不是自由参数；只消费owner，不建立APP变体 |

上述是候选结构约束，须经独立审查和总控关闭后生效。不是把所有CSS数值升级为永久要求。确需改正文/结构顺序/必要列数/CTA结果/owner边界时，定向交回相应责任方。

## C. 组件 × 视口 × 状态

表中 full/constrained 指 [evidence-index.json](D:/23MySec/pages/applications/04_planning/gate3-v1.0/evidence-index.json)里的同名三端正式图；expanded/mixed/menu为该清单的390状态图。九图全部本页实际渲染及阅读，行为结果来自实测日志。

| 区域 | 1440 | 768 | 390 | 必要状态及证据 | owner |
|---|---|---|---|---|---|
| Header/导航 | 完整横向导航 | Logo/RFQ/Menu | Logo/RFQ/Menu | full默认三端；390 menu正式图；768/390完整菜单运行日志 | 中立shared consumer V0.2 / Global Chrome V0.5 |
| M1路径 | 左正文右两列目录 | 单区＋三列目录 | 单列目录，所有6路径 | full/constrained三端；所有锚点三端实测，RFQ不存在时原子省略 | APP-000；RFQ接收方 |
| M2集合 | 连续三功能列，全部展开 | 范围/牌号两列＋牌号下行动，全部展开 | 单列原生披露 | full/constrained三端，full390 expanded；mixed390 expanded证明混合grade/link、应用行动缺失 | APP-000结构；矩阵关系；Application/Grade目的地owner |
| M3指南 | 三列有序步骤 | 单列有序步骤 | 单列有序步骤 | full/constrained三端；main字体200%诊断 | APP-000 B/C |
| M4路径 | Products/Documents/Markets三列 | 单列三卡 | 单列三卡 | full三端，mixed仅Products，constrained整块省略 | APP-000；各接收页owner |
| M5 RFQ | 段落＋RFQ | 同结构自然换行 | 段落＋整行RFQ | full三端；mixed/constrained整块省略；实际点击本地拦截，无提交 | APP-000 B/C；CONV-RFQ owner |
| Footer/法律 | owner四区 | owner重排 | owner重排 | full/constrained三端完整Footer；Cookie三端入口/开关/焦点循环实测；不加重复Cookie正式图 | Global Chrome/Legal/Consent |

所有情景入口：[full](D:/23MySec/pages/applications/04_planning/gate3-v1.0/index.html)、[mixed](D:/23MySec/pages/applications/04_planning/gate3-v1.0/mixed.html)、[constrained](D:/23MySec/pages/applications/04_planning/gate3-v1.0/constrained.html)、[grades-only](D:/23MySec/pages/applications/04_planning/gate3-v1.0/grades-only.html)、[apps-only](D:/23MySec/pages/applications/04_planning/gate3-v1.0/apps-only.html)。这五个文件只证明资格组合如何影响结构；其中的登记册路径不是生产批准。没有第六个Specialty应用路径，CR-901只按Grade规则处理。

## D. Gate 4视觉空间与代表样例

Gate 4可在现行品牌/CTA规范内决定颜色用途、字体层级、行高、间距、表面、真实链接/普通文字/披露状态的表达；自然换行与内容高度不是结构变化。没有必需媒体，也不需为本页发明图片。不能改变B文案、30关系、模块/类别顺序、动作区域、结果语义、RFQ单值接收合同、页面职责、关键词、共享owner或Schema事实边界。

| 真实风险 | 视觉阶段需证明 | 代表样例 |
|---|---|---|
| 最长的8条集合与范围文字 | 在分类扫描和完整阅读之间保持清晰层级，不造成推荐排序暗示 | Coatings/Plastics，1440/768默认及390展开 |
| 同一组里有链接和普通牌号 | 真实可操作性清楚，不能把不链接解释成负面适用性 | mixed390 Coatings/Plastics |
| 手机闭合披露 | heading/scope仍可扫描，控制状态明显，进入后完整列表可读 | full390默认/展开，Specialty单牌号 |
| 下游条件省略 | 不遗留空卡、行动字词或突兀空白；正文RFQ省略不侵入shared固定RFQ | constrained三端与mixed390 |
| 最终RFQ长段落与未知选项 | 完整保留内容与自然换行，清楚下一步是接收方的人工作业 | full390 M5以及200%字体诊断 |

目前没有需Gate 3先清零的纯视觉Finding。当前配色/描边仅作结构可读，不是Gate 4最终方向批准。

## E. Shared来源及后续责任

共享原始入口和SHA在input-binding.shared：中立consumer V0.2、GlobalChrome V0.5、Primary CTA增补V1.0、生产Logo Manifest V1.0、Footer Legal增补、Legal current V1.3与Consent current V1.1。本页未继承任何旧运行PASS；已对本页两窄屏菜单和三端Cookie完整实测。原始观测见 [runtime-observations.json](D:/23MySec/pages/applications/04_planning/gate3-v1.0/diagnostic_support/runtime-observations.json)，本页特殊交互见 [targeted-observations.json](D:/23MySec/pages/applications/04_planning/gate3-v1.0/diagnostic_support/targeted-observations.json)。Footer采用owner当前Documents/Resources/About，B read-only projection的Contact按C §4.3服从owner，未修改正文源；总控已获知。

RFQ owner为 [CONV-RFQ_GATE7_MANIFEST_V1.2.md](D:/23MySec/pages/conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_MANIFEST_V1.2.md)，读取其V1.0 exact mapping与V1.1 correction；Documents owner为 [DOC-000_CURRENT_GATE7_BASELINE_MANIFEST_V0.2.md](D:/23MySec/pages/documents/06_handoff/DOC-000_CURRENT_GATE7_BASELINE_MANIFEST_V0.2.md) 及其Route Prefill合同。APP没有复写这些接收合同。

Gate 6继续登记目的地的有效批准URL与资格、clean canonical/SEO/索引决定、scope、shared/legal/RFQ依赖。Gate 8接收方实现来源 `source_page_id=APP-000` 的既有支持传输，不从锚点/展开/历史选择推断牌号或应用；Gate 9验证实际路由/接收回执/状态及隔离。本地HTML的路由不构成实际生产存在、数据提交或部署证据。真实浏览器UI缩放、多浏览器/设备/读屏等尚未验证；已实测三端main字体200%以及720×450结构reflow，不把它们改写为真实UI缩放结果。

完整自检与冻结/正式阅读记录位于 [APP-000_GATE3_AUTHOR_SELF_CHECK_V1.0.md](D:/23MySec/pages/applications/05_review/APP-000_GATE3_AUTHOR_SELF_CHECK_V1.0.md) 和 [diagnostic_support](D:/23MySec/pages/applications/04_planning/gate3-v1.0/diagnostic_support)。诊断分段、失败attempt、逐项日志保留追溯，不是Gate 4默认逐项加载包。未进入Gate 4/D16/发布。独立审查和关闭通过后，由总控更新正式交接状态与唯一Manifest。
