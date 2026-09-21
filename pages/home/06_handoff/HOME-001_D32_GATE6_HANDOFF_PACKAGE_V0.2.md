# HOME-001 + Global Chrome：D32 WordPress Gate 6 交付包 V0.2

## 0. 身份、授权与状态

| 项目 | 值 |
|---|---|
| 日期 | 2026-09-20 |
| Package / Handoff ID | `HOME-001-D32-G6-PACKAGE-V0.2` / `HOME-001-D32-G6-HANDOFF-01` |
| 对象 | HOME-001 `/`；Home/Global Chrome owner 的共享 Header、Footer、Mobile Menu，以及 Footer 所消费的 Cookie Settings |
| 接收项目 | `D:/32Wordpress_new`；WordPress 直接管理内容并生成页面 |
| 本轮授权 | 用户先授权输入/交付包整理，后明确“进行独立复核，启动子代理”；本版响应首轮复核 |
| 制作模式 | `EXECUTE / TARGETED_ADAPTATION`；仅 D23 文档；作者自检，不是独立复核 |
| 当前状态 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED / NOT_HANDED_OFF` |
| 独立复核、关闭、派发 | 首轮独立复核已完成，本版等待定向复验；关闭由总控另记，未派发 D32 |
| 开发与发布状态 | 本包未实施开发；不授予部署、生产修改、DNS、索引或发布权限 |

本文件沿用现有 Gate 6→8→9，不增设关卡。它是 D32 适配候选的唯一阅读入口，附属 JSON 只记录来源与自检证据，不是第二份 Manifest。旧包、旧批准、首页当前 Manifest 与 D16 状态均不改写；本包经独立复核及总控关闭后才成为本批开发依据。

用户当前确定：先首页及 Header/Footer，后产品集合页；固定设计，后台编辑内容。故本次不是旧 D16 presentation-only 返修，也不是重做全站策划。现有有效研究、正文、结构、视觉及审查在未变范围继承；新增 CMS 映射、共享实现范围和证据映射需要独立复核。

## 1. 来源与消费顺序

路径相对本文件；每个实际输入的大小和 SHA-256 见 [输入与自检证据](HOME-001_D32_GATE6_INPUT_VERIFICATION_V0.2.json)。哈希用于本次交接身份，不进入网站内容读取条件。

| 来源 | 本包消费范围 |
|---|---|
| [首页当前入口 V1.6](../HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.6.md)、[V1.1 批准组合](../HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.1.md) | 既有页面身份、批准来源和审查链；历史运行状态不继承给 D32 |
| [完整 Brief](../../../docs/page-briefs/HOME-001_HOME_BRIEF_V0.1.md)、[Home Playbook](../../../docs/page-playbooks/HOME_PLAYBOOK_V0.1.md)、[关键词主表](../../../research/keyword/11_page_keyword_master.csv)、[登记册](../../../docs/architecture/PAGE_REGISTRY_V0.2.md) | 页面任务、URL、主关键词、内容归属；过期状态/限制按下列后续决定解释 |
| [原 Gate 6 包](HOME-001_APPLICATIONS_ALIGNED_GATE6_HANDOFF_PACKAGE_V1.0.md)、[原 A01–A12](HOME-001_APPLICATIONS_ALIGNED_GATE6_ACCEPTANCE_AND_BLOCKERS_V1.0.md)、[原关闭记录](../05_review/HOME-001_APPLICATIONS_ALIGNED_GATE6_PROJECT_CONTROL_CLOSEOUT_V1.0.md) | 继承接受条件身份和未变结果；本包明确替换 D16 技术与“只能改视觉”条款 |
| [内容交付源](HOME-001_GATE7_HANDOFF_PACKAGE_V0.1.md)、[整页视觉 HTML](../04_planning/visual-designs/home-applications-aligned-v1.1/homepage-applications-aligned-preview-v1.1.html)、[整页冻结记录](../04_planning/visual-designs/home-applications-aligned-v1.1/freeze-record.json) | 完整正文、链接、模块及非 Hero 整页对照；不是可直接部署的程序 |
| [视觉关闭](../05_review/HOME-001_APPLICATIONS_ALIGNED_GATE4_CLOSEOUT_V1.0.md) | 原首审和定向复审的身份及覆盖继承 |
| [七页批准组合](../../../docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_APPROVED_BASELINE_MANIFEST_V1.0.md)、[首页 Hero 绑定 V1.4](../04_planning/HOME-001_ROOT_PAGE_HERO_GATE4_BINDING_V1.4.md)、[Hero 候选 V1.4](../04_planning/HOME-001_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.4.md) | **覆盖旧整页稿 Hero**；候选内历史 DRAFT 由七页批准组合解释，不仅凭文件内状态判断 |
| [Hero 定向复审](../../../docs/architecture/ROOT_HERO_G5_SEVEN_PAGE_CROSS_PAGE_INDEPENDENT_REVIEW_V1.1.md)、[七页最终复审](../../../docs/architecture/ROOT_HERO_G5_SEVEN_PAGE_CROSS_PAGE_INDEPENDENT_REVIEW_V1.2.md) | 首页 F01 在准确 V1.4 候选已关闭；最后一轮其他页复审不替代首页实际复审覆盖 |
| [共享 Hero](../../../docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md)、[开放白底增补](../../../docs/architecture/ROOT_PAGE_HERO_OPEN_WHITE_SURFACE_ADDENDUM_V1.0.md)、[Hero 冻结记录](../04_planning/visual-designs/home-root-page-hero-v1.4/freeze-record.json) | 唯一共享骨架、Home 变体、字重/字号/断点、照片与无外框例外 |
| [Global Chrome V0.5](../../../docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md)、[Footer 法律区](../../../docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md)、[菜单背景决定](../07_qa/HOME-001_GATE9_MOBILE_MENU_BACKDROP_USER_DECISION_V1.0.md) | 导航、页脚、共享功能、透明 backdrop 和实际无障碍行为 |
| [视觉标准](../../../brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md)、[CTA 增补](../../../brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md)、[Logo Manifest](../../../brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md) | 品牌和生产素材；功能 Teal 使用增补的 `#008078`，不从旧 CSS 反推替代值 |
| [首页 SEO 合同](../04_planning/HOME-001_SEO_GEO_SCHEMA_CONTRACT_V0.1.md)、[后续 SEO 总表](../../../docs/architecture/TIO2_MY_57_INDEXABLE_PAGE_SEO_DELIVERY_V1.0.csv)、[总表交付](../../../docs/architecture/TIO2_MY_FULL_PUBLIC_SEO_GA4_GATE6_DELIVERY_V1.0.md) | 首页字段、生产索引方向和实体语义；Schema 清单差异按 §5.2 显式处置 |
| [原产地授权](../../../docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md)、[决定登记册](../../../docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md) | 不恢复旧 Brief 的全站原产地 Hold；不因此自行增加首页文案或额外事实 |
| [共享 Consent Brief](../../../docs/page-briefs/SHARED-CONSENT_ADVANCED_COOKIE_SETTINGS_BRIEF_V0.1.md)、[Consent 数据合同](../../legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_CONSENT_CMP_DATA_FLOW_CONTRACT_V0.1.md)、[Cookie 正文 §3](../../legal-privacy/04_planning/LEGAL-COOKIE-EN_GATE2_FULL_COPY_V0.2.md)、[Consent 视觉](../../legal-privacy/04_planning/SHARED-CONSENT_CURRENT_GATE5_BASELINE_MANIFEST_V0.6.md) | Cookie Settings 两种互斥状态、文案、存储及操作，不使用“空按钮”替代 |
| [GA4 法律增补](../../../docs/architecture/TIO2_MY_GA4_LEGAL_CONTENT_DELIVERY_V1.0.md)、[GA4 后续状态](../../../docs/architecture/TIO2_MY_PRODUCTION_GA4_LEGAL_PARITY_CURRENT_GATE9_MANIFEST_V1.1.md) | 启用态的更新文案及原子切换要求；不把 D16 曾通过/生产待修状态当成 D32 状态 |
| [Gate 6 执行合同](../../../docs/architecture/GATE6_EXECUTION_REVIEW_CONTRACT_V1.1.md)、[Gate 8→9 合同](../../../docs/architecture/GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md)、[证据 Schema](../../../docs/architecture/GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json) | 同一接受条件、独立复核、实际版本和回执闭环 |

### 1.1 定向覆盖与历史限制

- 旧“只能修改 D16 Home renderer/CSS，CMS JSON、SEO、Chrome 文件必须字节不变”由本次新架构范围替换。保留内容与行为语义，不要求保留旧程序文件。
- 旧“不得开发 Header/Footer”改为本批建立 D32 唯一共享实现。后续产品集合页消费它，不另做副本。
- 旧 Brief 的 Tablet Start Here 待决已被后续包明确为所有验收宽度保留；旧 Mobile Hero 省图描述由最新 Hero 绑定覆盖。
- 旧整页 Hero 外框、字号和并列布局只作历史，不覆盖共享 Hero 绑定。768px 按共享规则单列，不恢复旧双列。
- 不从旧 Brief 恢复已解除的 Malaysia-origin 限制。批准事实可以使用，不等于本批获准添加未指定的新段落或 Schema 属性。
- 原 D16 任务、commit、Build、端口、回滚版本及 PASS 都只作历史。不得作为 D32 实现或验收身份。

## 2. 首批范围和后台编辑合同

### 2.1 实现与职责

D23交付结果要求；Gate 8 在 D32 选择 WordPress 主题、内容模型、字段存放与必要功能实现。不得从本包推导必须安装 ACF、页面构建器、SEO 插件、GraphQL 或任何特定插件。没有独立 Next.js 前端要求，不创建对应数据同步链。

首页使用固定模块和共享模板。后台可维护下表内容；普通内容修改不要求开发改代码、重新打包整份批准 JSON 或修改批准编号。后台可编辑不是任意事实、导航架构或发布授权：现有业务批准流程继续有效，审批证据留在交接/发布记录，页面读取不重新比较历史文案。

| 对象 | 后台应可维护的内容语义 | 设计和业务边界 |
|---|---|---|
| Hero | Eyebrow、H1、简介、两个 CTA 标签/链接、照片和替代文本语义 | 初始值引用批准源；照片当前为装饰性 `alt=""`；固定共享布局 |
| Start Here | 模块引导语；三个入口标签、说明和目标 | Markets→Products→Documents；本批不开放任意重排模块 |
| Markets | 标题/简介、四卡标题/说明/标签/链接及总入口 | EU、UK、India、Brazil 的批准顺序；不能因未来市场方向自行换页 |
| Products | 标题/说明、四组标题/说明、型号显示名（非链接标签）；既有 Hub/工艺入口标签与目标 | 初始四组 6/5/2/1、14 型号完整唯一；不增加逐型号目标字段或链接/CTA；首页清单不自动产生14详情页或产品集合页 |
| Applications | 模块说明、五卡内容与目标 | Coatings、Plastics、Masterbatch、Printing Inks、Paper；Masterbatch 指 TiO₂ input |
| Company | 标题、企业说明、三个信息项、About 链接 | 保留可见 manufacturer 句；不推导工厂/产能/证书事实 |
| Documents | 模块说明、两个卡片和动作 | Documents Hub 与 Request Documents 分工；不是公开文件下载承诺 |
| Resources / Buyer Answers | 两个资源摘要、三个问答及链接 | 保留批准语义和完整可读正文；不自动追加 FAQPage |
| 页面 RFQ | 标题、说明、六个标签、按钮内容 | 为引导模块，不是可提交表单；响应式显示规则固定 |
| Header/Footer | 共享导航标签/目标、Footer 简介、栏目及链接、版权文字、Logo 绑定 | 同一共享来源；首版顺序/目标/品牌资产按批准值；后台编辑不自动批准新增 URL/替换 Logo |
| SEO | 首页 Title、Description 及受支持的分享文案 | canonical、索引环境、Schema 类型/关系由技术和批准合同控制；不要求编辑者录入任意 JSON-LD |

固定设计不意味着必须锁死所有字符串或照搬现有字段名。必填项、类型、安全限制等由 Gate 8 映射为技术验证；缺少关键已批准内容应在保存/预览/交付时暴露，禁止通过跨站回退或静默隐藏完整模块伪装成功。未批准的空值业务行为返回 Gate 6 澄清。

### 2.2 首次导入与编辑验证分开

1. 首次候选按批准源完整导入，Gate 9 比对正文、链接、数字与关系。
2. Gate 8 在隔离测试内容副本中演示修改标题/说明、CTA、图片、列表项和 SEO 后保存并实际生效，不改变主题代码；无效输入被合理拒绝，不影响其他内容。
3. 编辑测试后恢复批准内容，再冻结最终供 Gate 9 审核的内容版本。保存编辑前后/恢复证据，不将测试文字公开发布。
4. 不要求全局任意拖拽、随意改变版式；增加模块/关系类型属于后续开发，不为此建立通用低代码平台。

## 3. 页面、共享设计与素材

### 3.1 页面顺序与响应式

`Header → Hero → Start Here → Markets → Products → Applications → Company & Supply → Documents → Resources & Buyer Answers → 页面 RFQ → Footer`。

1440/1024/768 显示页面 RFQ；390/320 从布局与辅助技术树中去除，但 Header/Hero/Menu/Footer 固定 RFQ 保留。全页以原五宽度验证；1440/768/390 的 Hero 另按 V1.4 对照。Home 不加 Breadcrumb。

Home Hero：开放白底、无整体边框/底色卡片/圆角外壳/阴影/绿色竖线；保留媒体内部边界及原图。H1 字重700；Desktop≥1024 为56px，Tablet768–1023为44px，Mobile≤767为36px。1440/768/390 的批准行数为2/2/3；其他边界宽度按完整可读和无溢出核验，不通过裁切/隐藏正文实现。共享骨架在 WordPress 中实现一次，不照搬 React 组件名为技术要求。

### 3.2 Header、Footer、菜单

- Desktop 84px；移动导航模式64px，Logo / RFQ / Menu；1024及以下按原首页共享证据采用移动 Header，注意 Header 与 Hero 的断点职责不同。
- 顺序：Home、Markets、Products、Applications、Documents、Resources、About、Request a Quote；Home 文字链接与 Logo 同时保留。
- 当前栏目使用桌面粗体+3px Teal 下划线、移动粗体+4px左标记；每个导航面最多一个 `aria-current="page"`，当前视口只暴露活动导航面；不显示 CURRENT 字样。
- Mobile Menu 为 Deep Navy 导航面，透明 backdrop 是批准外观；模态隔离、滚动锁定、Escape、焦点约束与关闭后返回必须实际工作。
- Footer 为 Deep Navy；桌面四列、响应式两列/一列；Brand 简介、Explore、Information、Procurement及固定 RFQ 按整页源。版权初始值保留 `© 2026 TiO2 Malaysia.`，不自动改成动态年份。
- 法律区依次为 Privacy Policy `/privacy-policy/`、Dasar Privasi (BM) `/ms/privacy-policy/`、Cookie Policy `/cookie-policy/`、Cookie Settings。最后一项是无路由按钮，不新增Terms页。

### 3.3 可取得素材与代码身份

| 素材/源 | 本地来源 | 使用边界 |
|---|---|---|
| Hero 照片 | [原 PNG](../04_planning/visual-designs/assets/homepage-hero-tio2-material-v0.6.png) | 冻结 SHA `7308472E4E633584FE4D7761AFD7ED9EA4EA4C622576E2D7736C105F13CF50A5`；仅材料氛围，不证明工厂/原产地；交付映射记录生产路径，源不变 |
| Header Logo | [横向 SVG](../../../brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg) | 白底；桌面180×60、移动120×40，保比例 |
| Footer Logo | [反白 SVG](../../../brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg) | 深底；遵守生产 Manifest |
| Symbol / favicon | [Symbol](../../../brand/logo/candidates/v0.1/tio2-malaysia-symbol-v0.1.svg)、[favicon](../../../brand/logo/candidates/v0.1/tio2-malaysia-favicon-safe-v0.1.svg) | 不替换横向 Logo，不改 SVG 内容；统一生产资产映射，不逐页复制 |
| Inter 原型字体 | [整页字体](../04_planning/visual-designs/home-applications-aligned-v1.1/dependencies/Inter-Variable.ttf) | 字节身份及实际存在性已纳入检查；原型依赖不等于生产字体打包授权/工具链。Gate 8 记录实际 Inter 字体来源、许可及字重，验证换行，不默认新增字体族 |
| 整页与 Hero 原型 | §1 两份 HTML/冻结记录 | `PROTOTYPE_ONLY` 代码；可研究/适配，不直接作为 CMS、同意管理或生产共享组件 |
| 正式截图 | 两份 freeze-record 中的七张整页/状态图与三张 Hero 图；Consent Manifest 的两张状态图 | `STATIC_VISUAL` 预期；旧全页 Hero 区由新 Hero 图覆盖；无重新渲染要求 |

批准文案、行为和视觉结果为 `APPROVED_CONTRACT` 输入；D16 代码最多为 `REFERENCE_IMPLEMENTATION`，新站不可在运行时依赖 D16 文件系统。复制批准资产到 D32 统一目录属于受控实施映射，保留来源和哈希，不修改 D23 原文件。

## 4. Cookie Settings：继承共享功能，不额外启用分析

本批 D32 从空目录建立本地候选，不搬运 D16 生产 Analytics 启用状态。后续站点 GA4 上线目标保留，但本批不启动 Google 账号、GTM 配置或生产标识迁移。

### 4.1 本批可验证状态：no_optional_analytics

取 Cookie 正文 V0.2 §3.1 的准确批准值：

- Title：`Cookie settings`
- Body：`No optional Analytics or advertising technology is currently active on this site. Necessary functions may use browser storage to operate the site and remember an available privacy setting.`
- Actions：`Close`、`Read Cookie Policy`（`/cookie-policy/`）。

不显示首访 Analytics banner，不显示不存在的 Analytics/Advertising 开关。Footer 按钮打开真实的共享界面，打开移入焦点、关闭/Escape返回触发按钮，不修改未保存选择。按钮与文字可访问、触控至少44px，390px无溢出，200%及读屏按实际证据报告。

本状态不伪造接受记录；不为“看似完整”加入 Cookie。若实际保存必要的设置版本，Gate 8 列明键、内容、存续方式，必须与法律库存一致；没有保存则记录“不产生该项”。

### 4.2 后续 verified_google_analytics_active 的已批准边界

未来启用态取 GA4 法律增补 §5.4，替代 Cookie V0.2 §3.2 的旧文案。GTM 前先四项 denied；仅 Analytics 可 granted；Necessary only/撤回立即 denied；广告三项永远 denied；不把拒绝描述为零Google信号。接受与拒绝同等显著，关闭不保存，Local Storage受限不宣称持久化；存储版本、choice、decided_at及站点归属按既有共享合同。

GA4标签、Cookie Settings、EN/BM Privacy及Cookie Policy必须按已验证状态原子一致。旧键迁移、实际Cookie期限和网络清单由后续实施提供，不能把旧站观察值冒充新站实测。该分支是保留依赖，不计作本批已实现/已通过；法律页开发不由首页任务自动承包。CMP既有方向为共享定制实现，不默许换第三方供应商。

## 5. SEO / GEO 与环境

### 5.1 首页确定值

| 字段 | 首次导入值/结果 |
|---|---|
| Title | Malaysia Titanium Dioxide Supplier \| TiO₂ Malaysia |
| Description | Explore titanium dioxide grades, applications, destination markets and document request paths through TiO₂ Malaysia for international industrial buyers. |
| H1 | Malaysia Titanium Dioxide for Industrial Buyers |
| Canonical | `https://tio2malaysia.com/`，唯一 |
| HTML language | `en` |
| Primary keyword | `malaysia titanium dioxide` |
| 生产目标 | 真实200、index/follow、自引用canonical、进入实际已批准生产sitemap；本批不授予发布 |

在本地/隔离预览候选中明确 noindex，并避免提交开发地址到公开 Sitemap/GSC；这属于本包新增环境映射，供独立复核，不改变生产目标。canonical保留生产批准身份；本地不把域名指向测试地址。Gate 9 对生产目标与隔离环境分别判断，不因本地 noindex 错判内容失败，也不因本地通过就宣称可索引上线。

重要正文和导航在服务端 HTML 中可读。SEO主题/插件/自定义输出由Gate 8指定唯一负责方，避免重复title、canonical和Schema；分享文案与批准SEO语义一致，不凭空新增社交图片或事实。后台SEO编辑应映射同一数据源。

### 5.2 Schema 清单差异的明确处置

发现：后续 SEO CSV 的 HOME-001 schema_type 只列 WebSite/WebPage/Organization/Brand；首页专属合同及用户明确批准的实体方案另有 generic Product 及 manufacturer。后续总包同时要求保留页面专属批准合同，未找到明确撤销 Product 的决定。

**本包继承用户已批准的五节点完整图谱**：WebSite、WebPage、Organization、Brand、generic Product；按专属合同 §2/§5 的具体属性、七条关系与稳定 ID 核验。此为 `HOME-D32-G6-F01` 的非扩张处置，已由[首轮独立复核 §4](../05_review/HOME-001_D32_GATE6_INDEPENDENT_REVIEW_V0.1.md)确认来源依据；本版待定向复验和总控关闭。后续 CSV 未列 Product 不作为撤销既有具体批准的依据；不改 CSV、不新增企业事实。

禁止额外扩张到14个Product、Offer、ItemList或FAQPage；可见manufacturer句与机器表达一致。后续原产地授权不恢复旧Hold，也不自动新增本批未指定的countryOfOrigin或证书属性。

## 6. 沿用 HOME-VU-A01..A12 的 D32 接受条件

下表是原条件的定向修订，不是新编号体系。默认前置为准确D32代码/内容版本、隔离环境、批准首版内容已恢复。每项Gate 8提供自检证据，Gate 9独立核验。截图不代替功能，编辑测试不代替批准内容比对。

| ID | 预期结果 | 必需证据与失败判断 |
|---|---|---|
| A01 | §2完整首次导入；一个H1，正文/链接/顺序完整；受支持内容可后台维护 | 来源→后台→HTML映射；编辑前后及恢复证据。漏文、重复、改目标、内部标签泄露、改字需改代码均失败 |
| A02 | 批准品牌、1200px网格、模块层级；功能Teal按增补；共享Hero例外按§3 | 计算样式和五宽度整页对照；新增私有风格、错误颜色、删内容凑布局失败 |
| A03 | V1.4开放白底Hero，56/44/36与700，原图/alt/双CTA/Start Here过渡 | 源和资产映射、三主宽度+五宽度观察；恢复外框/装饰线、错图/隐图/越界失败 |
| A04 | 所有五宽度保留Start Here三入口，紧随Hero；桌面/平板三列，移动单列 | DOM顺序、计算布局及截图；省略平板入口/改顺序失败 |
| A05 | 四组14型号以非链接标签完整唯一呈现，顺序/工艺表达保留；移动默认折叠并能访问全部型号 | 数据/DOM清单、键盘展开收起、aria-expanded和390展开图；重复/漏项/隐藏后不可达、擅改为逐型号链接/CTA或推导推荐失败 |
| A06 | 页面RFQ在1440/1024/768可见、390/320布局与a11y树无此模块；其他RFQ保留 | 五宽度DOM/a11y及六标签/链接；变表单/漏共享CTA/移动重复RFQ失败 |
| A07 | D32唯一共享Header/Footer/Menu，准确导航/Logo/法律区；§4未启用态Cookie Settings可用 | 共享组装源码、生产资产映射、打开/关闭/焦点返回/无分析网络请求证据；私有分叉、空按钮、错误状态文案、擅启用标签失败 |
| A08 | 1440/1024/768/390/320无溢出/遮挡；非Hero布局继承原A08，Hero按最新绑定 | 五整页图与几何/网格观察；不能用裁切、缩成不可读字或删模块规避 |
| A09 | 菜单/焦点/键盘/展开/触控满足原合同；透明backdrop与模态隔离并存；Cookie Settings亦覆盖 | 实际键盘轨迹、可访问树、触控尺寸和自动检查；物理读屏/触控/原生200%未测必须NOT_VERIFIED，不沿用D16历史通过 |
| A10 | §5元数据、环境指令、可见与机器语义一致；一个输出owner | 原始响应/head/JSON-LD解析、实体引用、后台SEO编辑/恢复；重复输出、事实扩张、生产目标错乱失败；F01未关闭前不签整体PASS |
| A11 | 当前网站数据/媒体/菜单/SEO/缓存及同意存储只属于tio2-my | 正向和缺失/错误站点来源负例、配置与输出核验；不要求逐字段复制D16多站框架，任何跨站fallback失败 |
| A12 | 同一代码、内容、环境和运行对象可追溯，回执与证据一致，保持至通过/退回通知 | §7既有Manifest及预检、真实WordPress版本/主题插件清单/制品与内容快照标识、恢复说明；伪造Next标识、旧证据冒充新站、身份漂移失败 |

## 7. Gate 8 回执与 Gate 9 身份适配

仍交 `gate8_evidence_manifest.json`、已提交回执、接受条件映射、证据SHA-256和可访问运行地址，使用既有schema字段、错误分类及hold_until规则。实际任务ID由正式派发填入，不能编造。

当前工具读回发现：validator要求build.directory内的BUILD_ID；preflight默认查找Next静态路径/RSC标识。WordPress不能伪装Next。**本包提出在原接口内适配**：build记录实际可复核的WordPress主题/必要功能/资产交付制品及对应实现commit；BUILD_ID必须是真实制品身份，不是任意通过测试的占位值。runtime.require_build_marker=false只停用Next专属识别，runtime.checks.contains必须改为同一真实候选的非个人运行指纹，并结合代码/内容/环境证据确认实际加载版本，不能只检查首页标题。

候选指纹是验收环境的构建/交付身份，不是批准编号，不进入买家文案；不要求生产运行时读取D23或新增审批服务。Gate 8记录如何生成/验证该身份，Gate 9在首次候选上实际运行原Manifest校验及两轮预检，防止串错运行环境。内容快照、WordPress/主题/插件版本、非秘密环境摘要及恢复步骤作为现有evidence条目，不新增一套交接格式。

这是文档层映射，**未修改、未运行验证脚本，尚未证明WordPress实战兼容**。如原工具仍不能核验真实对象，按原接口owner定向修订后再交回，不能省略预检或将关闭Next检查等同身份已证实；记录在DEP-01。新包独立复核须审查此映射是否维持原证据强度。

## 8. 依赖、问题与停止条件

| 原ID/问题 | 本批处置与owner | 关闭证据/阻断位置 |
|---|---|---|
| HOME-VU-DEP-01 | Gate 8核对D32仓库、初始提交、环境和实际身份；接口owner核对§7适配 | 正式开发回执/候选预检；缺失阻断准确候选验收，不虚填旧D16值 |
| HOME-VU-DEP-02 | D23固定内容/设计输入；Gate 8建立映射及编辑测试恢复 | 源哈希、首次导入比对、恢复后内容身份；不是旧程序文件字节冻结 |
| HOME-VU-DEP-03 | 外部页面owner实现批准链接目标；首页保持真实href及既有业务行为 | 开发逐目标记录实际结果；本批不创建假页面、不擅自隐藏/改链接；缺目标影响相应AC/集成或发布，不自动阻止首页制作 |
| HOME-VU-DEP-04 | 独立Gate 9验收D32新候选 | 同一ID、版本及证据下的独立结论；旧D16PASS不替代 |
| HOME-VU-DEP-05 | 发布owner/用户；保留法律页、表单接收及后续完整站点发布条件 | 无明确发布授权不部署/切域名/索引；本批完成不代表全站就绪 |
| HOME-D32-G6-F01 | Schema总表与专属合同差异；§5.2继承五节点已获首轮独立依据确认 | 本版明确落地；待定向复验/总控登记关闭，不改原CSV；整包未关闭前不标APPROVED_FOR_HANDOFF |

Cookie Settings 的未启用态交互属于A07本批可验证功能；三法律目标页面仍归其owner，缺页不得将链接伪造成功。启用Analytics的完整状态/法律/网络验证属于后续实际启用范围，本批不以未做该分支签启用态PASS。

原Home物理设备/AT未测和其他页面历史404是旧环境记录，D32需重新列明当前事实，不能声称仍然404或已修复。四层验收状态沿用RECHECK_SCOPE_STATUS、PAGE_GATE9_STATUS、INTEGRATION_STATUS、RELEASE_STATUS，不混用。

## 9. 变更影响、回退与自检

本候选影响：首页Gate6交付技术映射、共享Chrome首次实施范围、后台编辑验收、Hero来源覆盖、Cookie Settings消费、环境SEO和运行证据。未新增页面/URL/关键词或修改批准正文。新增/修改合同需独立复核，原视觉未变覆盖不重新制作截图。

回退：本包尚未启用，撤回候选即可；原批准包和Manifest保持原件。未来D32回退由Gate8按其实际制品、数据库/内容、配置及媒体提供并演示，不使用D16 commit作为D32回滚。

后续需同步的唯一入口由总控在关闭时处理：首页当前Manifest与Status相关行、D32派发/回执；如§7需要变更共用接口则定向升级其合同/工具，不批量改全站AGENTS或其他页面状态。定向复验通过后由总控依常设授权另记关闭；本版自身不宣布关闭或派发。

自检范围：来源、覆盖关系、原12项AC及5项DEP映射、实际文件可读与资产冻结哈希、链接存在性；结果见附属JSON。35项冻结输入中34项原始字节哈希相符；Hero的 `verification-runtime-v1.4.json` 当前为LF，原记录为CRLF：仅在内存转换为CRLF后的SHA-256与冻结值完全一致。保留实际文件及两种身份，不改历史记录、不称原始字节全部相同；源码、PNG和实际媒体无此差异。

没有运行浏览器、WordPress、构建或开发测试；没有重做独立视觉审查。V0.1已独立复核并因F02退回；本版响应F01/F02，等待定向复验，Gate6尚未关闭。本文档编制完成不等于开发就绪批准。

## 10. V0.2 定向返修记录

原 V0.1 与自检原件保留；变化依据为首轮独立复核，不新增页面或视觉范围。

- F01：将五节点继承从待决定提议明确为有原始批准和独立核对依据的交付要求；最终关闭仍待总控。
- F02：Products 后台映射明确14型号为非链接标签，不增加逐型号目标字段；A05同步失败条件。现有 Hub/工艺链接与所有批准 href 保持。
- 版本/自检附件与本轮授权描述同步；其余合同与资产未变。没有修改历史批准源、SEO总表或原型。
- 状态仍为 DRAFT_FOR_PROJECT_CONTROL_REVIEW；由原独立 Reviewer 定向复验 Products、A01/A05、Schema处置、相邻链接边界及新身份。不得以作者修订声明代替独立 PASS。