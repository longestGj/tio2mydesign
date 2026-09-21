# RES-000 Gate6 静态单站交付包 V0.2

日期：2026-09-21。派发：`RES000-D32-G6-EXEC-20260921-01`。Page：`RES-000`；语言：EN；路径：`/resources/`；canonical：`https://tio2malaysia.com/resources/`；主关键词：`NO_PRIMARY_KEYWORD`。

模式：`EXECUTE / TARGETED_REPAIR / CHANGES_READY_FOR_TARGETED_REVIEW`，生命周期候选：`DRAFT_FOR_PROJECT_CONTROL_REVIEW`。本包作者：`/root/about_root_d32`。本包尚未独立复核；独立复核者由 Controller 指定，必须不同于本包作者。本包不是当前 Manifest，不是 Gate6 关闭、已外发或 Gate8 启动回执。

当前实现目标唯一为 **`D:/32NextJS` 的 Next.js 静态导出与仓库内版本化内容**。D23 不进入该仓库、不提供生产代码。开发方在获授权后核对既有页面及共享能力，自主选择实现、内容组织、组件拆分、构建和测试方式；不得改变本包继承的批准结果。旧技术架构与多站字段不构成本次开发或验收义务。

本版仅定向响应 [Gate6 独审 V0.1](D:/23MySec/pages/resources/06_handoff/RES-000_D32_GATE6_INDEPENDENT_REVIEW_V0.1.md) 的 `RES-D32-G6-R01`（报告 SHA-256 `d0a2a90db78508439d99b9204372adac688caf4c89385c0e33030cf593d09115`）。原 V0.1 SHA-256 `86696dde0053a2c35269035b9d1b349b4a55f27fbac59d15d39e64aceaee2972` 保留历史。新增§3文档发现映射、AC-18、§5三个依赖及§5.1接受条件；AC-01–17、原六行依赖与批准冻结不变。R01为定向扩大范围的触发，不宣称本包已通过复验。

## 1. 六项准入与继承

`accepted_visual_input`：以下 Manifest → Controller 关闭 → Gate5 审查 → 原 Gate4 handoff/freeze 的引用组合；无另建接收 Gate。

| 接收对象 | 本次核对 |
|---|---|
| 批准组合 | [当前 Manifest V0.3](D:/23MySec/pages/resources/RES-000_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md)，SHA-256 `fe9118c43d71832ccb315b6ba40b0efd697666b52d2cdc112baf332f47490c6f` |
| 有效审查 | [Gate5 首审 V0.1](D:/23MySec/pages/resources/05_review/RES-000_D32_GATE5_INDEPENDENT_REVIEW_V0.1.md)，SHA-256 `fc74d2f9876ee013edbb055cb37c8a25e647667bac3c5d17e068fb0f1c45562d`；569/569，必修0；作者 `/root/res_root_d32`、Reviewer `/root/about_root_d32`，独立性有效 |
| 总控关闭 | [关闭 V0.1](D:/23MySec/pages/resources/05_review/RES-000_D32_GATE4_GATE5_CONTROLLER_CLOSURE_V0.1.md)，SHA-256 `cb3849414f24086c65163247dd7fad7f16689bb87515823cbb707d2174d2b95e`；`RES000-D32-G45-PC-CLOSURE-20260921-01`，常设授权 `G346-DELEGATED-CLOSURE-20260907` |
| 本阶段授权 | 上述关闭明确 `GATE6_AUTHORIZED`；本次派发仅专业制作，范围为本 RES 交付包和指定任务报告；停止 `READY_FOR_REVIEW` |
| 开放项 | `RES-D32-G6-DATE-01` 必须形成严格真实日历验收；其他资源资格、共享、路由与生产条件见§5，不把它们写成已实现 |
| 关闭后变化 | 本次未改变内容/视觉源。关闭记录明确 canonical 采用 B/C 原批准域名，覆盖先前 D32 原型/审查中的旧 origin 说明；当前静态站规则解释旧技术措辞。无未解决视觉冲突，不重渲染、不重复完整交互 |

采用 FAST_PATH 的依据：准确冻结组合、有效不同作者 Gate5 全量审查和总控关闭成立，CARRY-01/02 已满足，无未关闭本阶段视觉必修。Gate3 已关闭结构/家族成果作为合并 Gate4 的4A覆盖继承；本次只整理新增交付接口与验收，不重新决定内容或签发自身独立 PASS。

方法组合：[Gate6 基线 V1.3](D:/23MySec/docs/architecture/GATE6_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.3.md)，Agent V0.9、一致性方法 V0.4、交付方法 V0.5；[执行合同 V1.2](D:/23MySec/docs/architecture/GATE6_EXECUTION_REVIEW_CONTRACT_V1.2.md)、[接收合同 V1.1](D:/23MySec/docs/architecture/GATE5_GATE6_ACCEPTANCE_CONTRACT_V1.1.md)、[职责边界 V1.0](D:/23MySec/docs/architecture/GATE6_RESPONSIBILITY_BOUNDARY_DECISION_V1.0.md)。现行[工作流 V3.6](D:/23MySec/docs/architecture/GATE_WORKFLOW_V3.6.md)、[治理细则 V1.7](D:/23MySec/docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.7.md)及[静态站/索引决定](D:/23MySec/docs/architecture/STATIC_NEXTJS_SINGLE_SITE_AND_GOOGLE_INDEXING_DECISION_V1.0.md)优先解释历史文字。开发稳定规则直接引用 [D32 AGENTS.md](D:/32NextJS/AGENTS.md)，开发流程引用 [CONTRIBUTING.md](D:/32NextJS/CONTRIBUTING.md)，运行说明引用 [README.md](D:/32NextJS/README.md)。这些是给开发方的直接承接入口；本次遵守“不进入开发仓库”，未读取或验证其实际字节。旧独立Gate8规则入口已撤出现行地位，不作为本包权威。

## 2. 唯一批准源、可编辑原型与证据

正文唯一编辑源为 [B V0.3](D:/23MySec/pages/resources/04_planning/RES-000_CONTENT_ARCHITECTURE_V0.3.md)，SHA-256 `b039e4e08740c7edffe33cdfc6b52ec5a094cefa0346e9833f30712fd2b99e93`。SEO/GEO/机器语义源为 [C V0.2](D:/23MySec/pages/resources/04_planning/RES-000_SEO_GEO_SCHEMA_CONTRACT_V0.2.md)，SHA-256 `9df3f05a340bc0b58da98cc2e7afa8d11327cbf3151489372e703595ab2d2280`。不再抄一套全文或新 payload；开发从批准源受控派生，逐项保持文本和关系。

[Brief V0.1](D:/23MySec/docs/page-briefs/RES-000_RESOURCES_BRIEF_V0.1.md)及[Resource Playbook V0.1](D:/23MySec/docs/page-playbooks/RESOURCE_PLAYBOOK_V0.1.md)的有效事实/子页资格/维护要求继续适用；被 B/C、最新共享合同及当前决定覆盖的旧模块、旧 CTA、旧技术措辞不恢复。登记册和关键词主表仍控制页面身份、URL及意图；Hub 不接管子页或商业页主词。当前 Manifest 明确 H0 公共合格资源数为0；别页获内容/发布目标批准不自动等于本候选有合格可用条目。

原型根：`D:/23MySec/pages/resources/04_planning/d32-gate4-v0.2/`。

| 对象 | 入口及身份 |
|---|---|
| 原 handoff | [Gate4 handoff V0.2](D:/23MySec/pages/resources/04_planning/d32-gate4-v0.2/RES-000_D32_GATE4_GATE5_HANDOFF_V0.2.md)，SHA-256 `b2eda6698f553c4e100a4f0b2c1af01f16e95264d7db5ea3c78539fe9d1cf647` |
| H0 HTML | [RES-000_D32_GATE4.html](D:/23MySec/pages/resources/04_planning/d32-gate4-v0.2/RES-000_D32_GATE4.html)，SHA-256 `e40e582538b8411d2dbf1347d3faf939c472d95cbed90137d06399d4ee7e60ec` |
| 页面样式 | [RES-000_D32_GATE4.css](D:/23MySec/pages/resources/04_planning/d32-gate4-v0.2/RES-000_D32_GATE4.css)，SHA-256 `6a7d4ff38820400db1b6c91be171b8a1c77d96816f76d6685c81bad50bcd8974` |
| 源/依赖清单 | [INPUTS.json](D:/23MySec/pages/resources/04_planning/d32-gate4-v0.2/RES-000_D32_GATE4_INPUTS.json)，SHA-256 `95099bab53a7b4bcf71af31c3268431d9439df79fe8f8379be4bd77d7e0705f5` |
| 完整冻结 | [FREEZE.json](D:/23MySec/pages/resources/04_planning/d32-gate4-v0.2/RES-000_D32_GATE4_FREEZE.json)，SHA-256 `396ebb33bbaa7053571f32bd6d40d6dc2e3fbcad38cb10e19bbff212388433b3`；67文件，bundle `f43aa865e50c2b8fe0ba422692c3a4c26552478433397e4362675357ddc611b0` |
| 正式证据 | [EVIDENCE_INDEX.json](D:/23MySec/pages/resources/04_planning/d32-gate4-v0.2/RES-000_D32_GATE4_EVIDENCE_INDEX.json)，SHA-256 `c537fa9b72d621d16467be4b90bfa3766f014b4e06cc04f183a6dde183fea2b4`；20正式、16有效可读支持；2被拒绝辅助尾帧不得用于通过证明 |
| 视觉/状态规则 | [WORKSET.md](D:/23MySec/pages/resources/04_planning/d32-gate4-v0.2/RES-000_D32_GATE4_WORKSET.md)、同目录 H2/H4 `LOCAL_SIMULATION.html`及 Gate5 报告的逐图/运行范围 |

源类型为 `PROTOTYPE_ONLY`。本地 HTML 可直接通过绝对 file URI 在允许本地依赖的 Chromium 打开，外置页面 CSS、内嵌共享 Chrome CSS/JS与内嵌 SVG 图；字体和 Logo 引用下述耐久依赖。它不是可直接发布的代码或待复制的生产文件结构。开发方先核对既有共享能力，再判断合适代码的复用/改造；原型含共享投影不授予页面创建生产分叉的权限。

依赖清单已锁定以下实际原件及字节：`D:/23MySec/docs/architecture/gate3-shared-consumer-v0.2/` 的 Inter-Variable.ttf/OFL、共享 renderer/data/CSS/behavior/consent；生产 Logo Manifest 所指 primary-horizontal 和 reverse-monochrome SVG。完整精确路径与 SHA 见 INPUTS/冻结清单，不另复制一套资产。实际开发必须转换本地 file URI 为静态站可取得的媒体/字体地址；不能将 D23 绝对磁盘路径交给访问者。图表是装饰性 SVG，无新增照片需求。

共享权威：RootPageHero V1.0 + 七根页批准基线 + RES binding V1.2 + [ROOT-NARROW-VISUAL-20260921](D:/23MySec/docs/architecture/ROOT_PAGE_NARROW_VISUAL_AND_DOC_FEEDBACK_DECISION_V1.0.md)；Global Chrome V0.5；品牌/生产 SVG/主 CTA 可访问性增补；Footer legal utility及当前共享 consent。以上精确源已列在 INPUTS；不得从他页复制业务正文或把 Home 的 open-white/photo 例外转移到 RES。

## 3. 内容、状态与生产映射

| 来源/对象 | 必须实现的结果 | AC |
|---|---|---|
| B§3–4 / H0 | 顺序为共享 Header、Home/Resources 面包屑、Hero、三研究路径、证据原则、五完整可见 FAQ、共享 Footer；零资源时 Featured/Latest 全部原子省略，无空标题/分隔/余留空间/假条目 | AC-01/02/14 |
| B§4.2 / Hero | 全文保留，H0 CTA `Explore Procurement Resources` → `#research-paths`；有 Featured 才→`#featured-resources`。路径卡片为指导内容，不是隐含筛选器、导航或虚构链接 | AC-01/02/07/10 |
| B§2/4.3/4.5 / 条件资源 | 资格是已批准映射/URL/内容/Claim/公开与实际同站路由、当前来源/维护条件的合取，不因一个标志或原型卡片放行。H2单条 Featured不复制进 Latest；H3最多3 Featured，其余按真实发布时间或复核时间排序、去重；H4完整来源/范围/日期/状态与事实/分析含义；H5撤回可见与机器关系 | AC-03/04/05/13 |
| Brief§9 / Playbook§6 | 类型上限为 Buying180天、Technical/Alternative90天、active/provisional Trade30天、stable/definitive Trade90天；事件优先，不按周期自动判当前。技术、比较、来源与声明边界不放宽 | AC-04/05/16 |
| B§4.6–4.7 / C | 三证据原则和五完整问答以文本呈现；无型号/工艺/应用关系行、保证等效、制造/合规/贸易结果扩张；不新增 FAQPage/QAPage | AC-01/13/16 |
| B/C + 当前关闭 | 唯一正式 canonical 和生产索引目标见§4；原型预览 head、旧 origin 默认值、内嵌治理/模拟数据不得照搬。旧规划资格代码只说明关系，不规定生产模型或字段；不存在迁移旧多站运行机制的要求 | AC-11/12/13/14 |

H2/H4 文件是有明显标签的合成测试与设计状态，不是待公开资源数据；H4 的官方机构名、日期和链接不能作为真实官方结论。当前生产交付起点是 H0。后续加入条目必须取得该条目当前批准与就绪依据，再按同一资格集合驱动可见卡片、动作和 ItemList；不得用未来资源的空壳页面、跨站页面或未经核验的来源补足数量。

日期和维护事实属于内容 owner，而非浏览器自动推断。当前无真实条目，因此不需为了交付新编官方调查资料或上网核验未展示的政策。首次真实发布条目前，由对应 owner 在发布窗口内复核官方原文、范围、日期、Claim 和状态；不能把本包日期或原型日期当作 Last reviewed。

文档必需发现接口另来自 [23-page publication Finalization V1.0](D:/23MySec/docs/architecture/TIO2_MY_23_PAGE_PUBLICATION_CONTRACT_FINALIZATION_V1.0.md) §1.3、§4，源 SHA-256 `e28de105ba35628365c0c0dc3dac272c5f6fe2b19589f6888cade0a26ab09213`：RES-000必须可见发现DOC-REACH、DOC-TDS、DOC-COO，精确目标和责任见§5。该批准是发现责任，不证明入口已经存在或批准了本页新增文案/卡片/落位；当前H0及冻结组合保持。三条关系不属于“无合格资源则省略”的可选条目，不把关系写成仅机器实体，也不改变AC-13的Schema边界。旧overlay的运行架构措辞仍由当前静态单站决定解释。以AC-18补齐AC-11未显式覆盖的接口。

## 4. 稳定接受条件：Gate8 自检与 Gate9 独立验收共用

ID完整形式为 `RES-D32-AC-01` 至 `RES-D32-AC-18`；下表缩写不重编继承 Finding。每项证据绑定指定实现/静态制品/可访问候选；默认实施 owner 为 Gate8 RES，独立验收为 Gate9。共享或事实 owner 见§5。表中“通过”指未来实际满足，非本包已实测。

| ID / 来源 | 输入/前置及预期可观察结果 | 必要实际证据与不通过条件 |
|---|---|---|
| AC-01 / B§3–4、批准视觉 | `/resources/` EN 用唯一批准全文、一个 H1、正确顺序、三路径/三原则/五完整答案；无省略、乱序、旧模块或竞争正文 | 指定制品初始 HTML 文本/结构与 B 的映射及运行页面；任一正文缺失、隐藏、缩写或未经批准改义不通过 |
| AC-02 / B§2 H0、Manifest V0.3 | 真实初始合格集合0：Featured/Latest 根、标题、卡、divider、padding、关系/ItemList原子为0；CTA实际到 research-paths | 空集合制品/DOM/Schema、五宽实际页面和锚点操作；出现占位、残留空白或隐藏机器项不通过 |
| AC-03 / B§2/4.3/4.5、C条件 | 隔离测试输入0/1/多条/资格缺失；仅完整批准且目标有效的条目展示；单条无 Latest重复，多条最多3 Featured、排序来自真实元数据且各条唯一。缺少任一必要资格不得出现在摘要/动作/机器关系 | 标明测试数据的状态/负例证据和合格集合→可见/机器结果对应；不得把测试条目编入公共交付。只测正常条目、用非本网站资源回填或宣称未核验路由已就绪不通过 |
| AC-04 / Brief§9、Playbook§6、B H4/H5 | 真正 Trade 条目含官方来源、适用范围、来源日期、人工复核、owner、批准自然语言状态及事实/分析说明；首次发布窗口复核。达到期限、事件待复核、REVIEW_DUE/STALE_HOLD/WITHDRAWN或资格撤回时，全部表面同步移除 | 类型期限与边界/事件/撤回测试、实际来源批准记录；不得静态发布后任由过期条目继续公开。维护 owner须确保在期限/事件条件生效时更新或撤回静态发布结果；具体运行方式开发/运营决定。假日期、自动 CURRENT、只删卡保留 SEO/Schema不通过 |
| AC-05 / `RES-D32-G6-DATE-01` | 所有用于资格、排序、展示或机器语义的日期（存在时）须是真实日历日期，不可依赖解析器归一化纠错；2026-02-30、2026-04-31、非闰年02-29均拒绝；真实闰年02-29应被正确识别但仍受其余资格约束。不得接受未来复核/来源日期；next-review已到期不得继续当前。不得用当前时间填缺失值 | Gate8提供有效/非法月日、闰年、缺失、未来/到期边界负例及可见/机器同步结果；无效必填日期令该条目不合格，并保留内部可诊断结果而不向买家泄露治理信息。日期格式/实现由开发选择，展示与机器含义一致；只通过正例或2026-02-30被改成03-02不通过 |
| AC-06 / Chrome V0.5、法律共享 | 消费唯一共享 Header/Footer；七根导航、Resources粗体/结构色标、固定RFQ、EN/BM Privacy/Cookie Policy/Settings；无买家CURRENT、Footer当前标记、Terms新增页或本页共享分叉。当前 consent=no_optional_analytics | 共享消费映射、实际各导航/法律目标与Cookie状态；错误隐藏必需全站入口、页面私自启用跟踪或替代共享owner不通过 |
| AC-07 / Hero V1.0、binding、narrow决定 | 唯一RootPageHero的hub-dark投影；统一几何/字体，完整H1；1440/1024/768/390/320自然3/4/2/4/5行；1024/320及已有390例外不外推。≤340 eyebrow11px/700/.08em；341–374为12px；≥375恢复RES14px；颜色#59c1bb、文字不变。图表>900显示、≤900零空间隐藏；无左装饰线 | 五宽与340/341/374/375边界的真实排版/样式证据；裁切、缩字、强制断行、横溢或改Hero几何去凑行数不通过 |
| AC-08 / B§8、CARRY-01/02、冻结workset | body84px上/76px下；390/320正文16px外边距，Hero20px外/24px内；指导/证据卡≥1024三列、以下一列；Featured桌面2.15/.85和36px间隙、<1024堆叠；metadata<768 label/value堆叠。长页连接、全文和状态均可读 | 1440/1024/768/390/320完整页面及必要可读分段、压力状态；不得拿全页缩略图代替长文本可读证据。横滑卡轨、固定高度吞字、空模块余距不通过 |
| AC-09 / 品牌、Brief a11y、Gate5 | 可见文字正常对比≥4.5:1，适用大字≥3:1；焦点清晰，目标≥44×44，语义顺序与阅读顺序一致；长标题/机构名/葡语完整换行。200%缩放与适用键盘/辅助访问保持内容及操作可达，装饰图aria-hidden、Logo具有正确可访问名称 | 实际样式对比、几何、键盘/焦点和缩放/辅助访问证据；不可将模拟720px宽度单独冒充原生200%缩放。裁切、焦点不可见、不可达或图像携带未批准事实不通过 |
| AC-10 / 共享行为、B CTA | H0与有Featured的主动作分别到正确存在的锚点；移动Menu首焦点、背景隔离、正反Tab边界、Escape/Close/选导航/跨桌面退出及焦点恢复有效。Cookie打开、循环、关闭/ESC回触发者；五问答无JS仍可读 | Reviewer可复现的真实浏览器步骤及结果，不能只给截图；错误目标、焦点逃逸/丢失、退出仍锁背景、把问答改为未批准accordion不通过 |
| AC-11 / B§6、C内链、当前domain | 全站导航/法律/RFQ使用批准本网站目标；条件资源只链接合格实际目标。禁止以mytio2.com、旧origin、外站同名页或Contact兜底替代本网站缺失路由。未批准query不产生推荐/预填/新页面 | 制品href、请求目标及实际可达结果；不要求本页制作兄弟页，但必需入口缺失阻断该项/发布。真正官方source_url可按批准来源外链，不能混淆成允许跨站资源fallback |
| AC-12 / B§4.1、C、当前索引决定 | title与description精确沿用B/C，canonical=`https://tio2malaysia.com/resources/`；EN-only，无新增hreflang。正式发布目标成功可访问、index/follow、robots不阻挡、sitemap含唯一正式URL；不以预览地址、参数URL或file路径生成canonical。社交元数据如输出，不超过相同批准语义，不虚构照片/作者/日期 | 实际响应/head/robots/sitemap/实质HTML证据。受保护预览与正式发布目标分开标识；预览限制须有发布前解除接受条件，不能把noindex设计源原样发布；技术可收录不等于Google已收录 |
| AC-13 / C机器合同、B§5 | CollectionPage/WebPage身份及Home→Resources Breadcrumb正确；组织/品牌仅引用批准全局实体。H0不输出ItemList；有资源时位置/名称/正式URL与可见顺序一一对应，撤回同一发布原子去除。无Product/Offer/Review/AggregateRating/Article/NewsArticle/FAQPage/QAPage、隐形条目或关系扩张 | 制品初始JSON-LD与可见集合比对及0/1/多条/撤回测试；只检查JSON合法、隐藏强语义或错canonical实体不通过 |
| AC-14 / 静态决定、B/C | 内容在静态制品实质初始HTML可提取；不依赖访问者远程取内容才展示关键文字。无JS下批准正文/FAQ和普通路由仍可读可用；交互增强不改变事实 | 构建制品、原始HTTP和禁JS读取证据；空壳/仅图片文字、错误站点内容或客户端加载失败导致正文消失不通过 |
| AC-15 / 生产SVG、品牌、原型依赖 | 正确获准主/反白Logo、Inter及许可、装饰SVG；生产可取得、本地盘路径不泄露、不新增未经批准工厂/认证/库存照片 | 实际媒体/字体请求与来源对应、失败检查和布局证据；破图、替换Logo、丢字体造成设计失配或挪用他页媒体不通过 |
| AC-16 / B/C职责、Brief/Playbook | 无主商业关键词/型号推荐/保证等效/规避贸易措施/新增能力或当前政策结论；H0不输出模拟资源、内部IDs/审批/伪作者日期。无本页表单；RFQ只是进入目标，不等于收到请求或报价批准；不暗加推断预填、跟踪或存储 | 初始HTML/机器/链接/页面行为审查；文字可见与机器语义同时守界。涉及新真实Trade内容必须另有来源和批准，本包不提供或批准 |
| AC-17 / Gate8→9 V1.2 | 开发交回准确指定实现、完整静态制品、可访问候选、共用证据Manifest、AC证据和未测/开放项；保持该候选可验至Gate9通过/退回/释放 | 按§6唯一共用协议预检及Gate9实测；漏绑定、响应与制品不符、服务不可达或用另一提交/环境证据替代均按协议失败分类，工具PASS不等于页面通过 |
| AC-18 / Finalization§1.3、§4、R01 | 输入为三条关系各自已批准的RES可见入口文案/落位组合与对应目标就绪证据。在同一验收候选的RES页面，三条入口均按批准设计可见、键盘与指针可操作，分别实际到达本网站 `/documents/reach/`、`/documents/tds-sds-coa/`、`/documents/certificate-of-origin/`；目标返回HTTP 200，页面身份/主要内容对应DOC-REACH、DOC-TDS、DOC-COO而非通用壳或错页 | Gate8逐依赖ID交回入口批准引用、渲染位置/实际href、可见及键盘/指针操作、最终响应URL/状态和目标身份；Gate9只读独立复现，证据绑定§6候选。缺任一批准落位：不授权Gate8自行设计该入口，阻断该关系实施及集成验收/相应发布判断；目标未就绪或任一路径失败：阻断该关系集成验收及相关发布。隐藏/仅机器关系、假链接、只到Documents总页、跨站或Contact fallback均不通过；H0=0不豁免。共享检查及完整处置见§5.1 |

## 5. 开放依赖、责任与失败处置

本表是当前交付映射，不另建事实台账，不伪造历史开放项关闭。未来依赖不阻止本包接受独立复核；没有得到其接受证据时不能标相应 Gate9/发布项通过。

| 原ID或本包依赖ID | 责任 / 当前状态 / 接受与阻断 |
|---|---|
| `RES-R002`、`RES-R003`、`RES-R005` | Resource内容owner与对应路由owner提供当前批准/实际目标，Gate8本页消费资格集合。当前Manifest公共集合0；旧“候选”措辞不推翻较后内容批准，但未满足完整资格仍不得添加。AC-02/03/11/13控制；失败只阻止相应条目出现，不阻断有用的H0 Hub，不造占位或跨站fallback |
| `RES-R004`、`RES-R006`、`RES-R007` | Trade/技术/内容维护owner负责真实官方来源、比较范围和复核责任。现无当前政策资格声明；复核周期、事件触发、公开前核查及静态发布撤回必须有执行责任。AC-03/04/16；不满足不得发布受影响资源/含其关系的版本，不能因本包而恢复旧结论 |
| `RES-D32-G6-DATE-01` | 本包完成合同映射，**实现验证仍OPEN**。Gate8实现真实日历校验/负例，Gate9验AC-05及相关AC-03/04/13；未经证据不得把规划解析器移植成已通过验证。保留原ID，不宣称生产问题已修复 |
| `RES-D32-DEP-CHROME` | Home/Global Chrome、Hero、法律及consent共享owner负责当前实现；RES只消费。D23未核对开发仓库，不能声称组件已可用。AC-06/07/09/10/15；缺必需共享行为阻断该实现验收及发布。当前无可选分析；未来激活须共享owner完整法律/行为原子切换，不由RES私有代码补齐 |
| `RES-D32-DEP-GLOBAL-ROUTES` | 全站路由/RFQ/法律owner负责固定入口真实就绪，RES负责正确链接与当前状态。AC-06/11；不得套用“条件资源省略”规则隐藏固定全站导航/RFQ/法律入口。未就绪阻断对应实际验收/发布，不自动授权本页开发其他页 |
| `RES-D32-DEP-PUBLICATION` | 发布/索引责任方在独立授权后完成正式环境索引条件与Google侧跟踪，Gate9验AC-12技术条件；实际Google是否收录由发布后Search Console/URL Inspection证明。尚无开发、发布、DNS或提交授权；页面可收录不写成已收录 |
| `RES-D32-DEP-DOC-REACH` | 必需发现 `RES-000 → DOC-REACH`，目标 `/documents/reach/`。来源Finalization§4；当前仅证明关系已批准，独审R01确认本交付缺映射，未证明入口落位批准/运行路径已完成。原RES内容owner与Gate4设计owner负责入口文案/落位批准输入；DOC-REACH页面内容owner与该目标路由owner负责目标批准和正确响应；Gate8 RES仅消费获批组合；Gate9按AC-18逐条实测。状态OPEN；依§5.1分别阻断，不能降为optional |
| `RES-D32-DEP-DOC-TDS` | 必需发现 `RES-000 → DOC-TDS`，目标 `/documents/tds-sds-coa/`。来源Finalization§4；当前仅证明关系已批准，独审R01确认本交付缺映射，未证明入口落位批准/运行路径已完成。原RES内容owner与Gate4设计owner负责入口文案/落位批准输入；DOC-TDS页面内容owner与该目标路由owner负责目标批准和正确响应；Gate8 RES仅消费获批组合；Gate9按AC-18逐条实测。状态OPEN；依§5.1分别阻断，不能降为optional |
| `RES-D32-DEP-DOC-COO` | 必需发现 `RES-000 → DOC-COO`，目标 `/documents/certificate-of-origin/`。来源Finalization§4；当前仅证明关系已批准，独审R01确认本交付缺映射，未证明入口落位批准/运行路径已完成。原RES内容owner与Gate4设计owner负责入口文案/落位批准输入；DOC-COO页面内容owner与该目标路由owner负责目标批准和正确响应；Gate8 RES仅消费获批组合；Gate9按AC-18逐条实测。状态OPEN；依§5.1分别阻断，不能降为optional |

内容缺失、合格资源为空、固定全站路由未完成和错误日期是四种不同情况，按各自上述规则处理；本包不统一发明禁用卡、Contact兜底或成功消息。

### 5.1 R01三条必需发现路径的责任与阻断

三条依赖均由Controller协调返回原RES内容/设计owner，取得或定位**对应当前组合**的可见入口文案、落位和适用响应式批准；不能用Finalization中的目标页Title/H1自动充当本页链接文案。若确需改正文/布局，按原内容/设计权限和受影响审查链处理，保留原冻结；本Gate6作者不代定新卡片、段落、模块或共享导航，Gate8不承担这类产品/设计决定。目标页内容/路由owner分别提供该目标的当前批准身份与实际同站就绪证据；不能以历史验收或仅URL批准替代当前实现。

每条接受链均为：批准来源与稳定ID → RES入口获批组合 → 对应目标获批且就绪 → Gate8实现与交证 → Gate9按AC-18验可见/操作/响应/身份 → Controller及发布owner据实际结果判断集成/发布。允许并行进行不受影响工作，但不能把三条缺失归为H0正常零项而签全量集成或发布通过。

- 入口文案/落位批准未取得：状态 `OPEN / APPROVAL_DEPENDENCY`，回RES原内容/设计owner；该关系不可凭本包自行进入实现，AC-18该项不能通过，RES相关发布及目标页“以RES为必需来源”的发布判断仍被阻断。
- 已获入口批准但目标未就绪：状态 `OPEN / TARGET_DEPENDENCY`，回相应DOC页面/路由owner；可以在受控未发布候选实现获批入口，不得以死链/占位/隐藏/外站兜底交付通过。该关系集成验收与相关发布仍被阻断。
- 双方输入具备后：Gate8仅实现获批结果；Gate9对三个ID分别记录可见位置、完整目标、HTTP响应与内容身份，并核对鼠标/键盘可达和适用五宽可见性。缺任何一条不能宣称Required discovery paths全部满足；不得只用DOM中隐藏href、Schema、截图或HTTP 200单项替代整条证据。
- 后续若取消任何必需关系，必须取得明确批准取消决定；当前没有此决定，本包不取消或降级。三条OPEN依赖不等于R01映射仍遗漏：本版仅提交其交付映射修复，R01是否关闭由不同身份Reviewer判断，生产关系另按实证关闭。

## 6. 开发交回与后续边界

仅引用一次当前 [Gate8→9 证据交接合同 V1.2](D:/23MySec/docs/architecture/GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.2.md)及其仍有效的 [Schema V1.1](D:/23MySec/docs/architecture/GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.1.json)。合同V1.2不改变既有静态机器格式`gate8-evidence-manifest-v1.1`；格式版本不等于退回旧合同。使用共用静态制品身份/实际响应绑定，不另造页面证据协议、测试框架、命名配额或构建步骤；实现提交、证据提交、制品完整文件哈希、访问方式、AC与回执的相互绑定遵守原合同。构建方式与技术工作流由开发项目规范维护。

Gate8应提供实际版本和结果，不把本包自检、旧D23图、H2/H4模拟或先前旧开发仓库通过当作本次生产证据。对H0实际交付与隔离测试状态分开记录；本包不授权把模拟fixture变成公开路由。保持指定候选可验而非锁定开发者日常工作区。替换候选说明差异并重新绑定。

Gate9按同一AC独立只读验收，并分别记录页面、集成、发布状态；实现问题交Gate8，不在D23修代码。本包经不同作者复核及Controller关闭前仍只是候选；获批也不等于已交出。外发、Gate8启动、merge/push、部署、DNS、真实请求和索引提交仍按具体授权。

## 7. 单一作者自检与本轮变化

本轮变化仅是：准入引用、当前canonical/静态架构解释、来源→语义→AC映射、日期严格校验条件、依赖责任及共用证据接口。没有新文案/事实、源文件修改、图重导或浏览器重审。原型预览head、旧origin默认值和模拟字段是交付适配事项，不是要求改写已冻结历史。旧B§8泛称accordion不覆盖B§4.7及当前批准的五问答完整可见设计；旧Brief条件RFQ/旧Footer限制由当前共享固定RFQ/法律合同覆盖。

作者共用一次双向自检：B§2–7/C的全部适用状态、文案、动作、内链/机器边界→§3及AC-01–05/11–14/16；批准视觉/共享/可访问性→AC-06–10/15；Brief§9/Playbook§6和DATE-01→AC-03–05与依赖；当前静态/索引与证据规则→AC-11–14/17。每个新AC均列具体来源；未增加无来源业务字段、强制生产数据模型或服务。旧开放ID与所有新依赖均有接受条件、责任和失败位置。

实际机器自检：2026-09-21在D23以Node只读运行作者包 `verify`，67/67冻结文件与bundle/source/freeze一致；PowerShell SHA-256复核当前Manifest/关闭/独审/输入/证据/方法身份，均与本包引用相符。派发后的入口修订已按Controller通知切换工作流V3.6/治理V1.7/证据合同V1.2，不扩大页面范围。V0.1的引用检查为24个D23链接、17个AC及6个依赖表项；V0.2新增R01源与三条依赖，保存后定向检查D23链接、18个AC唯一且引用闭合、9个依赖表项有去向；三个D32规则入口仅声明、不进入核验。结果记录在本次执行报告。机器检查仅证明身份/引用结构，不代替语义自检或新增合同的独立复核。

未测：开发代码/构建/路由、生产共享组件、真实资源资格/官方政策、原生设备/200%缩放/辅助技术、生产响应/Schema/索引、真实服务或发布结果。有效Gate5覆盖按原身份继承，不将本轮整理误写成重新实测。本版R01新增映射已按批准Finalization和独审四项接受条件逐项自检；实际身份/引用与未变AC相邻回归记录在作者报告追加段。返回 `CHANGES_READY_FOR_TARGETED_REVIEW`，不自签独立审查、不更新Manifest/Status/Index、不关闭Gate。
