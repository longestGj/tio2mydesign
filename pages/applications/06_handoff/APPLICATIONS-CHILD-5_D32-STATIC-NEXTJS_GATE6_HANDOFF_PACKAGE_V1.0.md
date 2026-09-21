# Applications 五个子页面 D32 静态 Next.js Gate 6 交付包 V1.0

日期：2026-09-21  
Package ID：`APP5-D32-STATIC-G6-V1.0`  
页面：`APP-COAT`、`APP-PLAS`、`APP-MB`、`APP-INK`、`APP-PAPER`  
目标开发仓库：`D:/32NextJS`  
状态：`DRAFT_FOR_INDEPENDENT_REVIEW`  

本包把五个页面已经批准的文案、结构、视觉及机器语义转成 D32 的结果合同。Gate 6 只确认“最终必须成立什么”和“Gate 9 用什么结果判断”；组件拆分、数据文件结构、CSS 组织、复用方式、测试实现和具体代码路径由 D32 决定。

本包不要求 WordPress、CMS、数据库、API 服务、管理后台或运行时内容同步。旧 Gate 6 包中的 WordPress、CMS、API、缓存键、服务端接收和 D16 实现描述不再适用于本次 D32 实现。其经批准的页面身份、正文、模块关系、视觉结果、CTA 边界、SEO/GEO/Schema 语义及既有独立审查结论继续有效。

2026-09-21用户进一步明确：静态单站不再存在原多站 `tio2-my` 隔离问题；所有开发完成并正式发布的页面都要进入Google收录流程。执行依据为 `docs/architecture/STATIC_NEXTJS_SINGLE_SITE_AND_GOOGLE_INDEXING_DECISION_V1.0.md`，覆盖旧包中冲突的scope隔离、`noindex, nofollow`和无sitemap要求。

## 1. Gate 6 本次只确认十件事

1. **页面身份正确**：Page ID、英文路径、H1、主关键词归属和Application页面职责一致。
2. **批准内容完整**：以每页 Buyer Clean Copy 为唯一可见正文来源，以 Content Contract 约束顺序、事实、来源、CTA、SEO/GEO/Schema；不删限定语，不加入内部治理文本。
3. **视觉水平一致**：实际页面达到本页已批准 Gate 4 的信息层级、密度、版式和交互状态，并与当前首页、Products、M-350、Applications Hub 的共享视觉系统一致。
4. **响应式结果成立**：1440、768、390 CSS 像素宽度下，内容完整、无横向页面溢出、遮挡、截断或失去表格/记录关联；菜单、Cookie 和页内锚点在适用状态下可用。
5. **产品关系不扩张**：只呈现本页批准的 Grade 集合与顺序，保持中立，不生成推荐、排名、等效、保证适用或性能推断。
6. **链接按真实就绪状态输出**：目标页面在同一候选中真实存在并正确时才输出链接；未就绪目标保留批准的中立文本或按原合同整体省略 CTA，不输出死链、空卡、伪按钮或跨站替代。
7. **SEO、GEO 与 Schema 同义**：可见内容、metadata、canonical、Open Graph 和 JSON-LD 不互相加强；页面级只允许原合同批准的 `WebPage`、`BreadcrumbList` 及已批准共享实体引用。
8. **共享区域统一**：复用 D32 当前 Header、Footer、菜单、Cookie、Logo 和固定 RFQ；Applications 为当前导航项，不显示买家可见 `CURRENT`，不恢复 Terms。
9. **公开输出干净**：静态导出包含五条可访问路由及语义初始 HTML，不向公开页面、HTML、JSON-LD 或客户端数据暴露 Gate、Finding、内部 Page ID、来源哈希、私有路径或就绪标记。
10. **交回证据可验收**：D32 返回确切提交 SHA、分支/工作树、构建与测试结果、五页截图、metadata/JSON-LD/链接检查、共享页回归结果及未完成项；D23据此进入 Gate 9，只读验收。

## 2. 五页身份与批准输入

以下路径均为已确定发布路径；正式 origin 按当前 D32 基线使用 `https://tio2products.com`。本次不改变 Page ID、路径、关键词或正文。

| Page ID | 路径 | 唯一正文来源 | 内容/机器语义来源 | 完整视觉来源 |
|---|---|---|---|---|
| `APP-COAT` | `/applications/titanium-dioxide-for-coatings/` | `pages/applications/coatings/04_planning/APP-COAT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` · `e5c9ffa7bcd7ae0375e45e27ba9bc26b95d00d317ff19c243e7e931b17706531` | `pages/applications/coatings/04_planning/APP-COAT_GATE2_CONTENT_CONTRACT_V0.1.md` · `ab5fd1d67eae464193d6e20b3f80a94afd36e29383ffb5a2c99db8e7103de400` | `pages/applications/coatings/04_planning/gate4-v0.1/APP-COAT_GATE4_COMPLETE_VISUAL_V0.1.html` · `a1e8c4153831aa829698f62e0c30c1fc7a77ec5bbb1f23ce264dede5d61443d2` |
| `APP-PLAS` | `/applications/titanium-dioxide-for-plastics/` | `pages/applications/plastics/04_planning/APP-PLAS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md` · `8db6d6fa979831e1e5c5930bdfe3ec261bb74d252304658251a37932bbea4f92` | `pages/applications/plastics/04_planning/APP-PLAS_GATE2_CONTENT_CONTRACT_V0.3.md` · `646cc89f7c331d22c77d1d71abf2f605c44d1cd2eb4fd633f8a0f72ded5aa204` | `pages/applications/plastics/04_planning/gate4-v0.1/APP-PLAS_GATE4_COMPLETE_VISUAL_V0.1.html` · `fd61a0b74f81c094af4193dcd323cb6f4965321ff453039e0b7bd58c6891e6f9` |
| `APP-MB` | `/applications/titanium-dioxide-for-masterbatch/` | `pages/applications/masterbatch/04_planning/APP-MB_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md` · `06bdd245d1722223c415e0c4cecc7248f64d938cc37f936ae160b240faa9343f` | `pages/applications/masterbatch/04_planning/APP-MB_GATE2_CONTENT_CONTRACT_V0.3.md` · `944fee912e10fa2ddf9a5700d2d925e584b07edb998af7b6b13194d8143ad168` | `pages/applications/masterbatch/04_planning/gate4-v0.1/APP-MB_GATE4_EDITABLE_SOURCE_V0.1.html` · `96ef54b24f4121dbd79ce4975f9e7c48ff0d6de0a270a82f93652f76525b9c1e` |
| `APP-INK` | `/applications/titanium-dioxide-for-printing-inks/` | `pages/applications/printing-inks/04_planning/APP-INK_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` · `b5a92976f526fcfee74fdf088ec9ea3ef21456e5ba66965f79c50ec4dd5c938d` | `pages/applications/printing-inks/04_planning/APP-INK_GATE2_CONTENT_CONTRACT_V0.2.md` · `11883e118e017e7886d91a3a6400150fcc92e3972b56847aafecc9250e960dc3` | `pages/applications/printing-inks/04_planning/gate4-v0.1/APP-INK_GATE4_COMPLETE_VISUAL_V0.1.html` · `148baf534aae5beaf66f2b776f2741dccb5f5b2fe458761d2193fa83eb65ae98` |
| `APP-PAPER` | `/applications/titanium-dioxide-for-paper/` | `pages/applications/paper/04_planning/APP-PAPER_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` · `14a77a04347e78b7ad080cd9d8b7f6251692450380216506e6e0745724012542` | `pages/applications/paper/04_planning/APP-PAPER_GATE2_CONTENT_CONTRACT_V0.2.md` · `12ac65fd35f9b48fd5aabfb7085f443f4e94a57b9aead4b1e8b951d2bf1ca244` | `pages/applications/paper/04_planning/gate4-v0.1/APP-PAPER_GATE4_COMPLETE_VISUAL_V0.1.html` · `e3d7907131d98b987328bf084ba80ed90476363e3caa9936252c5558784bac9f` |

现有页面级 Gate 6 包仍是详细语义索引：

- `pages/applications/coatings/06_handoff/APP-COAT_GATE6_HANDOFF_PACKAGE_V0.1.md`
- `pages/applications/plastics/06_handoff/APP-PLAS_GATE6_HANDOFF_PACKAGE_V0.1.md`
- `pages/applications/masterbatch/06_handoff/APP-MB_GATE6_HANDOFF_PACKAGE_V0.1.md`
- `pages/applications/printing-inks/06_handoff/APP-INK_GATE6_HANDOFF_PACKAGE_V0.1.md`
- `pages/applications/paper/06_handoff/APP-PAPER_GATE6_HANDOFF_PACKAGE_V0.1.md`

读取规则：从旧包继承页面专属内容、关系、CTA、SEO/GEO/Schema 和视觉结果；若旧包要求 WordPress/CMS/API/D16、可编辑后台、运行时内容同步、物理设备、人工读屏或原生浏览器缩放，则以本包为准，不作为 D32 开发或 Gate 9 通过条件。

## 3. 页面专属不可变结果

| Page ID | 模块与证据规模 | Grade 关系，顺序不可变 | 页面专属边界 |
|---|---|---|---|
| `APP-COAT` | 10个正文模块；5类评价端点；6条完整技术来源 | M-350、M-510、M-896、M-996、M-2196、M-895、M-52、M-2377 | 涂料体系、制样/测量、分散、耐候与成本边界保持分离；不把体系标签变成型号选择结论。 |
| `APP-PLAS` | 12个正文模块；13条完整来源 | M-350、M-510、M-200、M-108、M-210、M-340、M-886、M-2377 | 最终塑料制品评价与 Masterbatch 浓缩加工职责分开；不生成树脂适用性、阈值或通用性能结论。 |
| `APP-MB` | 11个正文模块；4条完整来源 | M-510、M-200、M-108、M-210、M-340、M-886、M-2377 | 浓缩料加工证据与最终制品证据分开；不把加工观察扩张成最终制品保证。 |
| `APP-INK` | 11个正文模块；9项体系定义；4项文件角色；6条完整来源 | M-350、M-510、M-52、M-2377 | 油墨体系、印刷过程和测量条件保持限定；M-2377不新增工艺分类。 |
| `APP-PAPER` | 11个正文模块；4项光学记录；4项证据角色；7条完整来源 | M-350、M-2377 | 实验室步骤、方法匹配、下一步证据与接受端点成本保持限定；不生成配方、阈值、纸机结果或胜者。 |

上述数量是验收校验值，不作为买家可见徽章或内部说明显示。

## 4. 链接和未就绪目标

- 五个子页面完成并通过同一候选的路由检查后，`/applications/` 才可把对应五个集合动作从未就绪状态变成真实链接；Specialty Materials 继续没有子页面。
- 当前已就绪的 `/products/m-350/` 可以按本页批准关系链接。其余 Grade 只有在 D32 同一候选中已有正确详情页时才链接；否则保留批准的中立型号文本，不生成 href、焦点目标或隐藏 URL。
- `/products/` 当前可用，按原合同保留中立探索动作。
- Documents、Sample、RFQ 的**可操作控件**只有在对应页面、owner合同和接收结果于同一候选中真实就绪时才显示。未就绪时保留 Buyer Clean Copy 中的批准解释和准备信息，只省略无法证明就绪的链接、按钮或其他操作控件；只有原 Content Contract 明确规定整个模块为条件模块时才可整体省略。固定共享 RFQ 按 Global Chrome 现状处理。本批不开发接收页，也不以查询参数、HTTP 2xx、本地模拟或假成功代替接收能力。
- 五页共36条外部技术来源必须保留完整标题、机构、日期/版本和用途对应，并指向批准来源所指的准确公开资源；链接使用安全的 `https` 目标，不得使用脚本、数据链接或把重定向后的无关页面当作正确来源。若选择新标签页，必须使用安全的 opener 隔离。外部资源后续发生变化时，D32记录开放项，不自行改写事实或替换来源。

## 5. SEO、GEO、Schema 与索引结果

- 五页 title、description、H1、直接回答、来源和实体关系使用各自 Content Contract 的批准含义。
- Canonical 为正式 origin `https://tio2products.com` 加本包登记路径，且不带查询参数。
- `lang="en"`；面包屑与可见层级一致。
- JSON-LD 只表达可见且已批准的含义。五页均允许 `WebPage`、`BreadcrumbList` 及已批准共享实体引用；仅 `APP-MB` 可选择输出 `ItemList`，且必须与当时实际可见的合格 Grade 链接及顺序完全一致。禁止 `Product`、`ProductGroup`、`Offer`、`FAQPage`、`QAPage`、价格、库存、评级、推荐、等效、保证适用或接收成功。
- 五页开发候选必须具备正式收录条件：输出 `index, follow`，使用本包登记的正式canonical，进入站点sitemap，且robots不得阻止页面或其必要资源。D32当前全站 `noindex, nofollow` 和无sitemap只是旧基线，不能保留到这五页完成候选。
- Gate 9验证技术可收录性，不把它表述为Google已经收录。正式发布后，发布/SEO责任方必须通过Google Search Console的sitemap和URL索引状态逐页跟踪；未收录、抓取异常、重复canonical或被排除的页面进入修复与复查，直至实际收录或形成经用户接受的明确外部原因。

## 6. 视觉、交互与可访问性验收范围

D32 需要达到批准视觉的层级和质量，不要求像素逐点复制原型，也不要求沿用原型 HTML/CSS/JS。五页应形成同一 Applications 页面家族，同时保留各页表格、记录卡和内容密度上的必要差异。

Gate 8 与 Gate 9 使用桌面浏览器的 1440、768、390 三个视口完成：整页视觉、关键局部、菜单、Cookie、页内锚点、键盘顺序、可见焦点、语义标题、表格/记录关联、链接目标和自动化可访问性检查。用户已明确豁免真实物理设备、人工读屏和原生浏览器缩放证据；这些不列为阻塞项，也不得据此给出“已在真实设备/读屏/缩放通过”的结论。

## 7. D32 自主决定的事项

D32 自行决定并在代码审查中负责：

- 五页共用一个页面组件、多个组件或其他合理复用方式；
- 本地内容使用 JSON、TypeScript、Markdown 或其他仓库内版本化形式；
- CSS 文件、样式作用域、响应式实现、构建测试和截图工具；
- 是否抽取页面家族数据结构，以及字段名称和代码目录；
- 如何在不破坏现有页面的前提下更新 Applications Hub 的五个就绪链接。

Gate 6 不规定上述实现方式。只要结果满足本包、仓库自身规则和批准来源，即可进入验收。

## 8. 稳定 Gate 9 接受条件

| ID | 必须成立的结果 | 最低证据 | 失败示例 |
|---|---|---|---|
| `APP5-G9-01` | 五条登记路由均生成静态目录页面，实质正文在静态初始 HTML 中可用，直接访问和刷新成功；构建和浏览器运行不依赖 WordPress、CMS、数据库、D16 私有路径或远程内容 API | `out/` 路由与初始 HTML、构建输入、浏览器网络请求及直接访问检查 | 缺页、客户端占位/加载后取正文、远程内容依赖、错误路由或重定向到别页 |
| `APP5-G9-02` | 每页可见正文、顺序、限定语、36条来源及专属规模和 Buyer Clean Copy 一致；未就绪转换目的地只省略§4定义的可操作控件，不删除周围批准解释 | 初始 HTML/DOM 对比、完整人读及条件状态对比 | 丢段、重排、缩写限定语、把控件省略误作删正文、内部文本公开 |
| `APP5-G9-03` | 五页 Grade 集合、顺序、标签和中立关系准确；Grade、Documents、Sample、RFQ 控件均按§4真实就绪状态输出，目标与owner边界正确且无假成功 | 页面级关系矩阵；就绪/未就绪状态的控件清单、实际目标和同候选就绪证据 | 排名、推荐、死链、隐藏 URL、跨站替代、未就绪转换控件、错误接收目标或模拟成功 |
| `APP5-G9-04` | 1440/768/390 的完整视觉达到批准层级且构成统一页面家族 | 每页三张整页图及关键状态图 | 页面视觉降级、溢出、遮挡、表格关联丢失 |
| `APP5-G9-05` | 菜单、Cookie、锚点、键盘顺序、焦点和语义结构在桌面浏览器中成立；36条外部来源保持准确资源对应和§4安全链接行为 | 自动化浏览器、键盘记录、a11y结果及逐条来源目标/安全属性清单 | 焦点丢失、重复可访问导航、锚点遮挡、来源错配、无关重定向或不安全链接 |
| `APP5-G9-06` | title、description、canonical、lang、OG、Breadcrumb与JSON-LD和可见含义一致；五页允许 `index, follow`，robots不阻止，且五个正式canonical都进入有效sitemap | 五页head/JSON-LD/robots快照，sitemap文件与可访问结果，逐URL canonical/robots/sitemap一致性检查 | 错误origin、查询canonical、强于可见内容的Schema、`noindex`/`nofollow`、robots阻止、sitemap漏页或非canonical URL |
| `APP5-G9-07` | Header/Footer/Menu/Cookie/Logo/固定 RFQ 复用当前共享 owner，Applications 状态正确 | DOM、视觉与交互检查 | 页面私有分叉、`CURRENT`、Terms、错误 Logo |
| `APP5-G9-08` | `/applications/` 只把本批已真实就绪的五个子页面动作启用，并保持其余条件行为 | Hub 与五页同候选链接测试 | 只改测试期望、链接到未生成页或改变 Specialty Materials |
| `APP5-G9-09` | 首页、Products、M-350、Applications Hub 无非预期回归 | 既有测试与四页截图/关键断言 | 共享样式、导航、SEO 或条件链接被破坏 |
| `APP5-G9-10` | 公开输出无内部治理、Page ID、hash、私有路径和readiness状态；正文、内部链接、canonical、共享实体和媒体属于当前静态网站且相互一致 | `out/` 文本/链接/实体/媒体扫描和浏览器检查 | Gate/Finding/内部标识公开、错误站点内容、错误链接/entity/media或canonical不一致 |
| `APP5-G9-11` | `npm run typecheck`、`npm run build`、`npm test` 对同一提交通过 | 命令结果、提交 SHA、干净工作树 | 测试绑定不同 SHA、只测开发服务器或忽略失败 |
| `APP5-G9-12` | Gate 8回执说明实际变更、复用点、已测/未测、开放依赖、回退方法及五页索引就绪清单；发布后另由发布/SEO责任方返回Search Console逐URL跟踪结果 | 交付回执、证据清单、索引就绪矩阵；发布后提供sitemap提交与URL索引状态记录 | 只有“完成”声明、没有候选身份/证据，或把技术可收录冒充Google已收录 |

## 9. Gate 8 返回要求和停止边界

03开发返回：仓库与基线 SHA、功能分支、实现提交、合入 `develop` 后的候选 SHA、工作树状态、变更文件、五页路由、12项接受条件结果、截图/测试证据路径、未就绪链接清单、已知限制和回退方式。Gate 8 可以自主修复实现问题并重复测试。

本次授权止于五页开发、同候选Applications Hub就绪链接更新、必要共享复用、本地验证和索引就绪实现。不得据此推送远端`main`、部署、发布、修改自定义域名/DNS、操作旧WordPress、向Google声明已收录或声称Gate 9已通过；实际发布、sitemap提交和Google侧收录跟踪由对应后续授权执行。
