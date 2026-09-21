# DOC-000 D32 Gate6 Handoff Package V0.2

2026-09-21 · `DOC000-D32-G6-EXEC-20260921-01` · `EXECUTE / FAST_PATH` · `CHANGES_READY_FOR_TARGETED_REVIEW / DRAFT_FOR_PROJECT_CONTROL_REVIEW`.

本版仅处理 `DOC-D32-G6-R01` / `DOC-D32-G6-R02`，替代 V0.1 作为本轮待审入口，V0.1 原字节保留历史。原独审 `pages/documents/06_handoff/DOC-000_D32_GATE6_INDEPENDENT_REVIEW_V0.1.md` SHA `ad4c630001d70f8832cba9a0ef2183d0fe4f2c1e21424f66847d0d1357e0098b`；V0.1 SHA `5999de30457ef123bcc7538c80531b05fdd71394e1fab6538887c643ca863c44`。Finding 是否关闭由指定独立复验判断，本作者仅提交修订。

这是 DOC-000 本轮唯一交付入口，不是新的页面 Current Manifest、独立审查或批准。`D32` 是保留的本批 lineage 名称；实施目标为 `D:/32NextJS` 的 Next.js 静态导出、仓库内版本化内容。本文不派发开发，不进入开发仓库，不授权真实请求、合并、部署、DNS、发布或索引提交。02开发在收到另外的有效 Gate8 派发后决定技术实现。

## 1. 批准依据与准入

### 1.1 六项输入与有效上游

以下路径均相对 `D:/23MySec/`。身份是原字节 SHA-256。

| 输入 | 唯一对象及判断 |
|---|---|
| Accepted visual input | `pages/documents/04_planning/d32-gate4-v0.2/DOC-000_D32_GATE4_GATE5_HANDOFF_V0.2.1.md`；SHA `41526ee07a463b4017600c5440f385b28a0bf7775e166c5d18e85d5d3c41ee9f` |
| 冻结组合 | 同目录 `freeze-return.json`；SHA `5db8a438c1f60776d53e243a9223075415e07b50c7965582ad5dff325b76f722`；freeze ID `DOC000-D32-G4-V02-RETURN`；bundle `bd12263d164a68b97f0095b311f2dc092f5662342d7c4ebc7f4a53589c010ed9`；79 个记录本轮逐一复算相符 |
| 有效独立审查链 | `pages/documents/05_review/DOC-000_D32_GATE5_INDEPENDENT_REVIEW_V0.1.md`，SHA `642db2d758bab2f1be43728562f84f0ba5b7391546605c2c39bdcc6b9a0edd82`；首审 412 项、410 PASS、2 必修。`pages/documents/05_review/DOC-000_D32_GATE5_TARGETED_RECHECK_V0.1.md`，SHA `d9071231fd179ff8a9852fa9d033eec9bb35a034a3714ce3d3859717e7ff8f93`；指定不同身份审查者 `/root/res_root_d32` 226/226，R01/R02 已处理，最终 TARGETED_REVIEW_PASS |
| 总控关闭 | `pages/documents/05_review/DOC-000_D32_GATE4_GATE5_CONTROLLER_CLOSURE_V0.1.md`；SHA `6a9f8cc104515cde7bd19b450240e7f7ece6090404d86e7f3024adb65fc7e379`；决定 `DOC000-D32-G45-PC-CLOSURE-20260921-01` |
| 当前页面 Manifest | `pages/documents/DOC-000_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md`；SHA `884e29249cd13830cff06aa1774e6a0bf5fee3faf9777b83a01ef0e42ce90de6`；Gate4 closed、Gate5 pass、Gate6 authorized。本文不修改它 |
| 授权及关闭后变化 | 用户四页连续授权、总控常设关闭授权与本次 dispatch。关闭后只有静态单站/Gate8 治理映射更新，页面冻结不变。继承已有效的内容、结构、视觉、交互覆盖，不重新渲染或执行 Gate4 审查 |

### 1.2 源角色与优先覆盖

| Source ID | 精确源与适用范围 |
|---|---|
| S01 | `docs/page-briefs/DOC-000_DOCUMENTS_COMPLIANCE_BRIEF_V0.6.md`；SHA `561438171421419adfa50a20ebcaf26ebf4691ec85ac32a824cb2b2e81b4693f`；页面职责、动作、排除项。其历史阶段状态不覆盖当前关闭 |
| S02 | `pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.10.md`；SHA `019881f75517f87b75283a4a14fa7bea3163b740db6196b3b5f3778b84164326`；完整正文编辑源和交互语义；FAQ #2 最新批准纠正优先于 V0.9 |
| S03 | §1.1 最终视觉组合及其 `source-lock.json`、`evidence-index.json`、`design-change.md`；完整布局、状态、可编辑原型和证据入口 |
| S04 | `docs/architecture/ROOT_PAGE_NARROW_VISUAL_AND_DOC_FEEDBACK_DECISION_V1.0.md`；SHA `6ff4253b56936ccf9838f27d7532053a501de82aec99b9ab1518b38de667f1a9`；`ROOT-NARROW-VISUAL-20260921`，320 H1 与反馈稳定性。共同 Eyebrow 数值协调由 S03 V0.2.1 绑定 |
| S05 | `pages/documents/06_handoff/DOC-000_GATE7_ROUTE_PREFILL_CONTRACT_V0.1.md`；SHA `9a370364a545dccddfa2fc1c60d8200c80fa9e629ee117fce6a61c621d57dda5`；动作/接收/失败合同，静态决定覆盖旧技术隔离措辞 |
| S06 | `pages/documents/06_handoff/DOC-000_GATE7_SEO_GEO_SCHEMA_SOCIAL_CONTRACT_V0.1.md`；SHA `de02f9f9962c651694afcf53eda40d9cbae68fbc58b48004716442293b5644ff`；精确 SEO 与机器语义 |
| S07 | `docs/architecture/TIO2_MY_23_PAGE_PUBLICATION_CONTRACT_FINALIZATION_V1.0.md` §§1、4、7.1；SHA `e28de105ba35628365c0c0dc3dac272c5f6fe2b19589f6888cade0a26ab09213`；正式 URL、标题、描述、canonical、index/follow、sitemap 与内部发现路径 |
| S08 | `pages/documents/06_handoff/DOC-000_GATE7_GATE8_GATE9_ACCEPTANCE_AND_BLOCKERS_V0.1.md`；SHA `c9370aeb220fd6b6d5b802941a73d2cca742fba4f1e616883c9deb48452b7af1`；保留 G8/RB 稳定 ID，按下文明确更新适用性 |
| S09 | `docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md`、`docs/architecture/ROOT_PAGE_HERO_OPEN_WHITE_SURFACE_ADDENDUM_V1.0.md`、`docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_APPROVED_BASELINE_MANIFEST_V1.0.md`；共享 Hero owner、hub-light、slots。Open-White 仅其批准页面，不将 DOC 改成新变体 |
| S10 | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`、`brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md`、`brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md`、`brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md`；共享 Chrome/品牌/CTA/资产 |
| S11 | `docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md`、`docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md`；最终法律共享区 |
| S12 | `pages/conversion/06_handoff/CONV-DOC_GATE7_CURRENT_HANDOFF_MANIFEST_V0.1.md` 及其批准接收包；`pages/conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.4.md`；已批准接收语义及历史运行证据的边界 |
| S13 | `docs/architecture/STATIC_NEXTJS_SINGLE_SITE_AND_GOOGLE_INDEXING_DECISION_V1.0.md`；SHA `da69c0806cb8c545aa47329cc36f79a8b897a04cc637020654a8ef24ebe3d68e`；当前静态单站、技术可收录与实际 Google 索引的区别 |
| S14 | 开发方直接读取 `D:/32NextJS/AGENTS.md`（稳定规则）、`D:/32NextJS/CONTRIBUTING.md`（开发/测试/集成/发布流程）、`D:/32NextJS/README.md`（运行说明）。此职责映射来自当前根 AGENTS 与 Workflow V3.6；本轮不访问开发仓库，不复制其规范或声称核验其文件身份。原独立 Gate8 入口已撤出现行权威 |
| S15 | `docs/architecture/GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.2.md`；SHA `e66c90f03e50a5d62741d9ade7637c764444b906818ccaccc7a08de480ddeadc`；当前 D23 验收证据交换合同，机器格式仍为 `gate8-evidence-manifest-v1.1` / Schema V1.1，并保留旧格式 v1.0 的兼容边界 |

历史 Gate7 文件的批准由 `pages/documents/06_handoff/DOC-000_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md` 和 `pages/documents/06_handoff/DOC-000_CURRENT_GATE7_BASELINE_MANIFEST_V0.2.md` 追溯；不以其原文 SUBMITTED 标签否定后续批准。DOCUMENT_PLAYBOOK_V0.3 的 Finder/Results、旧五类/三 FAQ 及接收字段构想不是当前实现源；由具体批准 S01/S02 排除。正文、SEO、视觉分别按对应源，不由最高版本号决定全部维度。

治理使用 `docs/architecture/GATE_WORKFLOW_V3.6.md`（SHA `a52f795c8dae292eac0c96c389ba83eb009b497f1d14efa1c4cca5f78bb93b60`）、`docs/architecture/GATE5_GATE6_ACCEPTANCE_CONTRACT_V1.1.md`、`docs/architecture/GATE6_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.3.md`、`agents/gate6-review-delivery/agent.md` V0.9、`skills/page-contract-consistency-review/SKILL.md` V0.4、`skills/development-delivery-specification/SKILL.md` V0.5、`docs/architecture/GATE6_EXECUTION_REVIEW_CONTRACT_V1.2.md`、`docs/architecture/GATE6_RESPONSIBILITY_BOUNDARY_DECISION_V1.0.md`。Index 旧段中一致性 Skill V0.3 不取代当前基线 V1.3 指定的 V0.4。

## 2. 交付一致性及实现结果

### 2.1 页面与可编辑输入

DOC-000 / `/documents/` / English / Navigation hub / `NO_PRIMARY_KEYWORD`。目的为理解文件请求用途、可选地传递一个 Grade 并进入受控请求。不是公共下载库、合规百科、RFQ 或表单接收页；不取得 DOC-REACH、DOC-TDS、DOC-COO 或型号详情的关键词职责。

完整正文从 S02 提取，不从图片重录。原型目录为 `pages/documents/04_planning/d32-gate4-v0.2/`：

| 输入 | SHA-256 / 角色 |
|---|---|
| `DOC-000_D32_structure.html` | `2fa09d30d87870645752cde4f085d5113b63c97ef333534d184416d8cb6f0723`；PROTOTYPE_ONLY；包含内嵌共享 Chrome 投影样式、装饰 SVG 及页面 HTML |
| `DOC-000_D32_structure.css` | `cffdd929cffb9446319ab3ca39426e4fc1659be993cfff76f01e4a72d0d2ce03`；PROTOTYPE_ONLY；页面与共享 Hero 呈现投影 |
| `DOC-000_D32_behavior.js` | `c689d037e2592ba2d743972856bc4f6ae0d76783c1eda9d01f92ac492df1674e`；PROTOTYPE_ONLY；本地 selector/FAQ 状态投影 |

原型为可直接打开的 D23 `file://` HTML；引用同目录 CSS/JS，以及 `docs/architecture/gate3-shared-consumer-v0.2/` 的共享行为、Inter 字体/许可、两枚品牌 SVG。精确原件和 SHA 在 S03 freeze/source-lock，可访问性及 79 文件身份本轮核对；无外部下载依赖。原型查看不是实际路由/receiver 测试，浏览器渲染本轮未重跑。其 `file:///D:/23MySec/` 资产地址与 `noindex,nofollow` 示例 head 不得成为正式生产输出。装饰文件图不是可点击 PDF，不表示认证或文件存在。

Gate8 先核对现有项目及已集成共享能力，再决定复用、适配或必要新增；允许评估原型代码，不承诺直接合并、不一概禁止复用。不规定生产组件层级、文件名、存储模型、表单 provider、CSS 写法或测试框架。静态站实现不需要 WordPress、CMS、数据库、多站 runtime 或 `site_scope` 字段/隔离测试。

### 2.2 源到模块/状态/AC 映射

| 批准模块/语义 | 实现结果与条件 | 来源 → AC |
|---|---|---|
| Chrome / Breadcrumb | 共享 owner 的 Header/Menu/Footer/Logo/RFQ；只声明 Documents current，不显示 CURRENT 标签。Home `/`；Home / Documents 位于 Hero 前 | S01/S02/S09–11 → G8-02、12 |
| RootPageHero | 唯一共享骨架，hub-light，DOCUMENT HUB、完整 H1/intro/English note、原直接 CTA、装饰文档插画 slots；不取得骨架 ownership | S02 §3.1、S03/S09 → G8-01、03、11 |
| Grade Selector | Hero 后第一个主体模块；一个 closed select、空初值、14 唯一有序值、始终可操作 Continue、helper/error/confirmation 和 Products assistance | S02 §3.2、S04 → G8-04、05 |
| How It Works | 3 项轻量编号序列，不变成三个信息卡 | S02 §3.3、S03 → G8-07、11 |
| Review scenarios | Product Evaluation；Quality & Supplier Qualification；Origin & Supplier Qualification Review；3 张仅说明卡，无 CTA/count/status | S02 §3.4 → G8-01、07 |
| Documentation groups | Technical Data & Product Documentation；Safety Documentation；Quality & COA Documentation；Origin & Supplier Qualification Documentation；仅 4 张信息卡，不增加第五类 | S02 §3.5 → G8-01、07、10 |
| Why on Request | 一个完整连续信息带；availability/applicable scope 由后续 review 确认，不承诺时效/交付 | S02 §3.6 → G8-01、07 |
| Buyer Questions | 6 对原文；全部答案在初始 HTML，默认折叠、同一时刻至多一项展开；button 的 Enter/Space、aria-expanded/controls/labelledby 与焦点稳定 | S02 §3.7 → G8-07、08、10、11 |
| Closing CTA | 空选 Select a Product Grade 聚焦上方；已选 Continue to Request Documents 传同一 Grade；不出现空动作位 | S02 §3.8 → G8-04、05 |

### 2.3 14-Grade 与请求边界

唯一有序 allowlist：`M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`。无默认选择，不增删型号或暗示推荐/适配。

| 输入状态/动作 | 可观察结果 |
|---|---|
| 任意 selector 状态下激活 Hero `Start a Document Request` | native link `/request-documents/`；无 query/fragment/Grade、无 selector 聚焦或滚动。接收页空 Grade 可编辑；Grade 仍须在提交前选择 |
| 初始/清空 | prompt `Select a product grade`；helper `Choose one grade to continue.`；Continue 可见、可聚焦、可操作，非 disabled/aria-disabled；无旧错误/旧确认 |
| 空选激活 Continue | 留在本页；显示 `Select a product grade to continue.`；错误与 select 关联/可感知，焦点转 select；FAQ 等无关状态不清除 |
| 有效选择 | 显示 `Selected product grade: {GRADE}`；不自动导航；原 Continue 位置保持。选择变更更新唯一 Grade，清空恢复空状态 |
| 有效 Continue / 已选 Closing | `/request-documents/?product={GRADE}`；只一个 `product`；标识符大小写敏感精确匹配，编码一次、接收端解码一次后比较；接收端规范化后仍可编辑/移除，不在 Hub 上提交表单 |
| 空选 Closing | `Select a Product Grade`；聚焦上方 select，可滚动到可见，不导航，不发起请求 |
| 非法公开 query 到 receiver | 无值、空、未知、重复、多值/逗号、数组式、畸形编码或注入值安全丢弃为未选择、可编辑状态；不回显危险内容、不据此推定文件/适用性/批准 |

本页不传 scenario、documentation group/type、market、destination、language、inventory、availability、approval 或 delivery；接收端拥有文件类型多选、联系人/公司及其批准字段、privacy、submission/错误/receipt。国家字段若存在表达公司地点，不由 Hub 变为目的市场。Receiver 的字段数量、长度等继续由其当前批准合同维护，本包不重造表单。

无效预填不是产品不适用或文件不存在；不显示负向 suitability、file-not-found、内部验证 token 或 availability 暗示，买家仍可正常选择 Grade。

浏览器返回 Hub 后状态应一致，不残留错误导航、虚假发送/下载成功；直接进入 Hub 不以 query 生成公共文件记录。S05 的有效/无效输入矩阵由接收 owner 与本页共同验证。

### 2.4 视觉继承、共享与响应式结果

继承 S03 的 1440/1024/768/390/320 五宽及关键状态，不重做 Gate4。当前证据为 20 张正式、23 张可读支持图；其中新 6 正式/1 可读加继承 14 正式/22 可读，角色以 evidence-index 为准，不能将 superseded 320 坐标证明当作新状态证据。首审 410 已通过断言和定向 226 断言是不同覆盖，不相加冒充新测试。

桌面 Hero 两列、selector 两列、steps/scenarios 三列、groups 两列；768 Hero/selector/steps/scenarios 单列、groups 两列；390/320 groups 也单列。标题字号 56/44/36、700 与共享 shell/padding 保持；具体间距、密度、呈现 tokens 和媒体使用 S03，不从旧稿恢复五类结构。菜单/法律弹层/固定 RFQ 按共享 owner，不随 body 栅格另做分叉。

仅 DOC 320px H1 自然四行获 S04 批准；390px 继续三行，1024px 三行。不能删标题、缩字体、改 shared padding 或把例外扩至其他宽度。≤340px 错误反馈预留两行，初始/空选报错/有效选择/清空四态 Continue 位置稳定；保留文案、字号、焦点、顺序与目标。原型具体 CSS 只是设计表达，不指定生产实现。

共同 Eyebrow 协调结果：≤340px 为 11px/700/.08em，341–374px 为 12px/700/.08em，≥375px 恢复各页既有批准值。DOC 已冻结候选 Eyebrow 本来单行，V0.2.1 明确未加本页私有覆盖；Gate8 由共享 owner 实现共同窄屏结果并证明完整 DOCUMENT HUB 单行、无裁切/横溢，不能误报原型已经应用该数值。共享改变按受影响七页回归；不因 DOC 可读而建立私有 Hero。

键盘顺序、select label/error/live feedback、FAQ 与菜单/弹层的焦点、≥44px 逻辑操作目标、hover/焦点可见、正常/200% 下无裁切横溢继续有效。未测试的真实设备/AT/浏览器原生缩放不能由静态图代签，按实际证据交回。

### 2.5 SEO / GEO / Schema / 正式发布差异

| 字段 | 精确结果（S06/S07） |
|---|---|
| Title / OG title / Twitter title | `Documents for Product Qualification \| TiO2 Malaysia`（实际值只有普通竖线，不含反斜线） |
| Description / OG description / Twitter description | `Request technical, safety, quality, COA, origin and supplier-qualification documentation for a selected titanium dioxide grade.` |
| H1 | `Documents for Product & Supplier Qualification`；仅 H1 含 `& Supplier`，不得传播进 SEO title |
| Language | `en` |
| Production canonical / og:url | `https://tio2malaysia.com/documents/`；不是预览 origin，也不是旧 `tio2products.com` 示例 |
| OG type | `website` |
| Production index target | HTTP 200、`index, follow`、robots 不阻断、有实质初始 HTML、sitemap 包含上述正式 URL；NO_PRIMARY_KEYWORD 不等于 noindex |
| 内部发现 | Home 与 Global Chrome 的 Documents 原生有效链接；由对应 owner 提供，不靠 sitemap 代替可见导航 |
| Optional social image | 批准共享 Brand/SEO 默认资产或有意完整省略 image tags；不新增事实性图、预览/错误图片回退 |

H1、全部正文、14 options、6 FAQ 答案及真实链接需在初始 HTML 可提取，不只存在客户端点击结果或空壳 hydration 后。机器含义不强于可见语义：仅 page identity、Home/Documents breadcrumb，若输出 WebSite/isPartOf 须为验证的共享实体。FAQPage 可选且仅在 6 对问答与可访问 DOM 完全一致时输出；否则省略 FAQPage，不省略可见答案。对既有 FAQPage 的不一致必须修正，不能冒充已验收。

不输出公共库存 CollectionPage/ItemList、DigitalDocument、MediaObject/file URL/version/date/count/language availability、DownloadAction/ViewAction/Offer、认证/注册/合规覆盖、Product-file/Grade-file/market-document 关系或装饰媒体的事实性 ImageObject。当前交付不要求新增 potentialAction；其资格继续受 S02/S06 的 receiver 与 editable prefill 生产验证条件约束，不由原型可点击自动生成。无批准其他语言页面时不造 hreflang。

本地 file 原型的 `noindex,nofollow` 仅防索引预览标签，缺失 production meta/canonical/schema 不是 Gate4 漏交正文；由本节明确生产结果。受控预览可使用获准防索引配置，须在回执标明环境与解除条件。不能把预览 noindex/无 sitemap 验证为正式可收录 PASS；也不能为了验证正式目标提前公开预览。Gate9 对其指定候选核对实际适用配置；正式发布前由发布 owner 在获授权环境验证 robots/canonical/sitemap。Google 实际收录仅在发布后通过 Search Console/URL Inspection 跟踪，技术可收录不等于已收录。

## 3. 依赖、责任与失败处置

继承 S08 的 RB-01–14，新增 S07 必需 discovery 关系 RB-15–17；当前 16 条有效，RB-11 因 S13 退休，不复用其编号。RB-01–14 有效项的当前环境状态为 `NOT_VERIFIED_IN_CURRENT_STATIC_TARGET`；RB-15–17 为 `OPEN / APPROVED_REQUIRED_RELATION / PLACEMENT_APPROVAL_PENDING / CURRENT_RUNTIME_UNVERIFIED`。这些不是 16 个已发现运行失败；新三项明确另有原内容/设计 owner 的可见落位批准依赖。设计证据/历史验证与当前运行分别记录；Gate8 实现、Gate9 实际核验，生产/运营项由发布 owner 在 Gate10 前关闭。未满足时阻断表中对应接受/发布判断，不自动阻断本 Gate6 交付整理。

| 原 ID / 来源 | 责任、当前证据范围 | 失败处置与关闭条件 / AC |
|---|---|---|
| RB-01 / S02、05 | CONV-DOC route owner；DOC 消费 direct request。D23 仅证明目标规格，无当前 route 证据 | Gate8 建立目标、Gate9 验证 200 正确页及 Hero 无 query；不换 Contact/RFQ、不隐藏必需 CTA；未就绪阻断该动作验收与发布 / G8-03 |
| RB-02 / S02、05、12 | CONV-DOC form owner + DOC；14-grade 编辑语义已批准，当前静态 receiver 未验 | 全 14 有效 Grade 预填且可编辑/移除；空路径无默认；不得锁死或把 Grade 视为推荐 / G8-05 |
| RB-03 / S05、12 | CONV-DOC owner；公开可改 query 不可信 | Gate9 负向输入矩阵安全丢弃，无危险 echo/虚构上下文；失败交 receiver 修复 / G8-06 |
| RB-04 / S05、10 | Products owner、Chrome/RFQ owner；本页仅消费 | Gate9 验证 `/products/` 与全 Chrome RFQ `/request-a-quote/`。S05 明确 Products 不可用时整条 assistance 可原子省略，但仍是发布 blocker；不推广成所有必需入口可隐藏，不降级为 Contact / G8-02、05 |
| RB-05 / S02、12 | CONV-DOC/运营/Legal owner；2026-09-05 旧环境曾 provider accepted 一次、mailbox confirmation OPEN；不是当前静态站收件凭据 | 运营 English request 流程、实际接收路径及隐私一致性需当前证据；provider positive receipt 与 mailbox 到达分别标明，不以模拟/2xx/本地成功替代。真实发送另获授权；错误/超时不得虚假成功。未关闭不声称完整请求链可发布 / G8-05、12 |
| RB-06 / S06、07、13 | DOC metadata +发布/SEO owner；批准 canonical/index 目标已确定，当前生产输出未验 | Gate9/发布前正确 host/200/self-canonical/robots 和 sitemap；预览防索引不等于正式 PASS / G8-09、15 |
| RB-07 / S11、12 | Legal/Consent/Chrome owner；DOC 仅消费三政策链接及 Cookie Settings | `/privacy-policy/`、`/ms/privacy-policy/`、`/cookie-policy/` 正确内容；Cookie Settings 为可操作非页面 button，焦点与状态符合共享合同；不造占位政策 / G8-12 |
| RB-08 / S02、11 | Chrome/Legal owner + DOC；no-Terms 决定有效 | 当前输出、链接、sitemap、Schema 中旧 Terms route 为零；若残留交 owner 修复 / G8-12 |
| RB-09 / S02、06 | DOC +共享 SEO owner；机器语义合同已批准 | 检查实际 DOM/JSON-LD parity 与禁用实体零；有差异阻断相关 AC/发布 / G8-10 |
| RB-10 / S06、10 | Brand/SEO owner；可选 image 不强制 | 有批准共享 image 身份且无事实扩张，或完整省略对应 image tags。省略是合格分支，不是开放必修 / G8-14 |
| RB-11 / S13 | RETIRED_NOT_APPLICABLE；历史多站隔离要求 | 不再要求 scope 数据/查询/缓存证明，不复用 ID。错误内容/媒体/域名仍按 G8-01、02、09、14 验收 |
| RB-12 / S03、04、09、10 | DOC实现 +共享 owner；五宽设计/两 Finding 定向复验已通过 | Gate9 实际五宽、窄屏四态稳定、H1限定例外、完整 Eyebrow、菜单/法律/FAQ/键盘/触控/缩放；共享更改连带回归。失败回原 owner，不能修改批准文案规避 / G8-04、11 |
| RB-13 / S01、02、03 | DOC owner；正文与模块已批准并冻结 | 初始/渲染 DOM 比较完整文案和 14/3/4/6；不恢复旧 Finder/fifth group；差异阻断 / G8-01、07、08 |
| RB-14 / S01、02 | DOC +接收 owner；zero-public-inventory Buyer Clean | 无内部状态、占位、fake download/approval/availability/SLA。请求只代表后续 review，不能误写成文件交付 / G8-01、03、05、07、10 |
| RB-15 / S07 §1.3、§4 | 总控协调、DOC-000 原内容/设计 owner 批准可见落位；DOC 实施方消费获批结果；DOC-REACH owner 提供目标。必需关系已批准，落位/当前运行未证 | DOC-000 → `/documents/reach/`；按下述共同关闭条件，缺批准落位不实施新链接，缺可见原生路径/正确目标不得通过 G8-16，阻断受影响 discovery 集成与完整发布 |
| RB-16 / S07 §1.3、§4 | 总控协调、DOC-000 原内容/设计 owner、DOC 实施方、DOC-TDS owner；状态同 RB-15 | DOC-000 → `/documents/tds-sds-coa/`；缺批准落位不实施新链接，缺可见原生路径/正确目标不得通过 G8-17，阻断受影响 discovery 集成与完整发布 |
| RB-17 / S07 §1.3、§4 | 总控协调、DOC-000 原内容/设计 owner、DOC 实施方、DOC-COO owner；状态同 RB-15 | DOC-000 → `/documents/certificate-of-origin/`；缺批准落位不实施新链接，缺可见原生路径/正确目标不得通过 G8-18，阻断受影响 discovery 集成与完整发布 |

### 3.1 三条必需 discovery 关系与尚待批准的可见落位

S07 §1.3、§4 已将 DOC-000 指定为 DOC-REACH、DOC-TDS、DOC-COO 三页的必需 discovery 来源；这是现有批准要求，不是可选建议或未来可能需求。RES-000 也是来源并不替代 DOC-000 责任。当前冻结原型没有三条子页链接，本包不将其标为已实现，也不因这一事实自行取消来源。

关系批准与具体可见落位批准分开：RB-15–17 共同缺少 DOC-000 原内容/设计 owner 与总控登记的可见落位/文案及必要设计增量批准。该协调项保持 OPEN。原 owner 应在获授权范围内定向解决，若涉及冻结内容/视觉改变，走受影响的内容/设计审查并由总控绑定新批准源后，Gate6 只补对应映射；不重开无关内容或整套视觉。02开发只实现收到的获批结果，不能猜链接标签/位置、新卡、正文或给四组信息卡添加按钮；四组卡非操作属性与现有冻结保持，除非后续有效决定明确改变。

三项共同关闭证据分两层：(1) 总控记录原内容/设计 owner 的批准落位及其精确版本/适用组合，足以由开发无须猜测地实施；(2) Gate8 交回指定当前静态候选，Gate9 对每条验证 DOC-000 实际可见、可键盘操作、可提取的原生 href，目标分别为下表 AC 的精确 URL、返回 HTTP 200 与对应已批准页面内容/canonical；链接不是文件下载、不可用占位或未经批准的能力声明。只有两层都具备才能关闭相应依赖。仅有 sitemap、Schema、隐形链接、RES-000 上的替代来源或旧环境截图均不满足。

未批准落位只阻断这三项实施，不阻断无关已批准模块的准备；三项任一未满足时相应 G8-16/17/18 不得 PASS，DOC discovery 集成不完整，DOC及受影响子页的完整发布条件不得标为满足。取消或改派 DOC 来源须有有效后续决定，不能由作者/开发自行降为可选；必需关系不能用原子隐藏/fallback规避。当前包修正的是交付表达，不关闭该设计/运行依赖。

其他兄弟页面仍由其 owner 建设：Home/Markets/Products/Applications/Resources/About 和 Footer 原生路由属于共享导航实际就绪。本页开发没有实现其他页面或 receiver 的授权。

## 4. 稳定 AC 与 Gate8→9 验收

### 4.1 AC 表

沿用 S08 的 DOC-000 上下文 `G8-01` 至 `G8-14`，不因当前 Gate 名称重编号；`G8-15` 表达当前正式索引/预览差异；新增 `G8-16`–`G8-18` 精确承接 S07 三条必需 discovery 关系。共 18 个登记 ID，17 条 active、1 条 retired。每行来源可逆追溯至 §1.2，前置/结果细节见 §2，依赖见 §3。

| AC ID | 前置/输入 → 必须可观察的结果；不通过条件 | 来源 / 实际证据要求 / 责任 |
|---|---|---|
| G8-01 | 初始 `/documents/` → 单一 H1、正确完整 S02 copy/顺序、无公共库存/虚假承诺；任何漏字/新事实/旧结构不通过 | S01、02、03；初始 HTML +渲染内容比较；DOC Gate8→9 |
| G8-02 | Desktop/Menu/Footer → 共享 Chrome、批准生产 Logo、Documents current、固定 RFQ 及有效 native links；私有 clone/错误 current/死路由不通过 | S09、10；共享消费说明与实际 DOM/操作/路由证据；DOC/Chrome Gate8→9 |
| G8-03 | 空选及已选激活 Hero → 同一 `/request-documents/` 无 query/fragment，非 selector scroll；目标错误/默认 Grade 不通过 | S02、05；真实导航及 receiver 初态；DOC/CONV-DOC Gate8→9 |
| G8-04 | 空初值→空选报错→有效→清空及 Closing 空态 → §2.3 正确文案/ARIA/焦点/无自动导航；≤340 四态 Continue 不跳；错误残留/disabled/无关状态重置不通过 | S02、03、04；四态几何+键盘/触控 trace；DOC Gate8→9 |
| G8-05 | 逐一14 Grade与两种已选 Continue → 仅单 product 参数，正确 receiver 可编辑/可移除；返回 Hub 无伪成功；锁值/多参数/假接收不通过 | S02、05、12；全14真实路径/接收字段证据，运营就绪另记 RB-05；DOC/receiver Gate8→9 |
| G8-06 | §2.3 非法 query 矩阵 → 安全未选择且可编辑，无危险回显/业务推断；错选、注入或多值接受不通过 | S05、12；实际 receiver 负向矩阵；CONV-DOC Gate8→9 |
| G8-07 | 全主体 → 3 steps、3 scenarios、4 groups、1 band、6 FAQ、完整条件 Closing；卡片无 action/count/badge，FAQ原文/单开正确；数量/语义或状态变化不通过 | S02、03；DOM +FAQ与Closing操作证据；DOC Gate8→9 |
| G8-08 | 未交互初始响应 → 全部正文、14 options、6答案和原生链接可提取；仅客户端空壳/点击后取文不通过 | S02、06、13；静态响应/制品检查与渲染对照；DOC Gate8→9 |
| G8-09 | 当前候选 head → §2.5精确 title/description/lang/canonical/OG/Twitter；不把H1的 & Supplier 加入title，不用预览/旧域名；错误值不通过 | S06、07；实际 head 与最终环境标注；DOC/SEO Gate8→9 |
| G8-10 | 实际 JSON-LD 与可见正文 → 合格 WebPage/Breadcrumb，FAQPage若有则6对精确一致，禁用实体/关系为零；语义更强或伪库存不通过 | S02、06；DOM/JSON-LD 对照；DOC/SEO Gate8→9 |
| G8-11 | 1440/1024/768/390/320及关键状态 → S03布局/columns/tokens，320限定四行、390三行、单行完整Eyebrow、CTA/媒体层级、≥44px、无横溢/裁切，键盘/焦点/200%合同；未记录例外不得当PASS | S03、04、09、10；实际视觉/交互及未测项记录；DOC/共享 Gate8→9 |
| G8-12 | 共享法律及 receiver接收边界 → 三政策正确、Cookie Settings 可用、无 Terms、实际数据流/接收意义与批准合同一致；伪政策/伪成功/失焦不通过 | S02、11、12；链接/共享控件与实际接收证据，真实发送需另授权；相关 owners Gate8→9/发布前 |
| G8-13 | RETIRED_NOT_APPLICABLE；仅保留旧编号，不承担当前实现/验收条件 | S13；不用旧scope要求补出生产数据模型 |
| G8-14 | 若输出 social image →批准共享资产及身份；否则有意完整省略相关tags；未批准事实图/错误回退不通过 | S06、10；实际tags/资产身份或省略证据；Brand/SEO Gate8→9 |
| G8-15 | 正式发布候选 → 200、正式canonical、index/follow、robots允许、sitemap与初始内容可抓取、Home/Chrome可发现；预览防索引明确环境/解除条件，不冒充正式PASS；实际Google收录另行追踪 | S07、13、14；授权环境HTTP/head/robots/sitemap/内链证据；DOC/SEO Gate9，发布owner Gate10后Google跟踪 |
| G8-16 | 获批可见落位后，指定候选 DOC-000 → 可见可操作原生链接 `/documents/reach/`，目标 200、DOC-REACH 正确内容与 `https://tio2malaysia.com/documents/reach/` canonical；无批准落位、缺链接、错目标/隐藏/下载暗示不通过 | S07 §1.3、§4；RB-15，落位批准记录 +实际 DOM/键盘/HTTP/canonical 证据；总控/原内容设计 owner → DOC 与 DOC-REACH Gate8 → Gate9 |
| G8-17 | 同上前置，DOC-000 → 可见可操作原生链接 `/documents/tds-sds-coa/`，目标 200、DOC-TDS 正确内容与 `https://tio2malaysia.com/documents/tds-sds-coa/` canonical；缺批准/缺链接/错目标/隐藏/下载暗示不通过 | S07 §1.3、§4；RB-16，同一批准/DOM/键盘/HTTP/canonical证据链；总控/原内容设计 owner → DOC 与 DOC-TDS Gate8 → Gate9 |
| G8-18 | 同上前置，DOC-000 → 可见可操作原生链接 `/documents/certificate-of-origin/`，目标 200、DOC-COO 正确内容与 `https://tio2malaysia.com/documents/certificate-of-origin/` canonical；缺批准/缺链接/错目标/隐藏/下载暗示不通过 | S07 §1.3、§4；RB-17，同一批准/DOM/键盘/HTTP/canonical证据链；总控/原内容设计 owner → DOC 与 DOC-COO Gate8 → Gate9 |

### 4.2 证据交回与停止

统一引用 S15（Gate8→9 证据交换合同 V1.2），本页不另建 Manifest schema、构建脚本、测试框架或截图配额。Gate8 用唯一交回入口关联本包身份、DOC-000、原派发、各 active AC、指定实现/制品/可访问环境、实际测试证据、依赖/未测/开放项；当前机器格式仍是 `gate8-evidence-manifest-v1.1`，由 `docs/architecture/GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.1.json` 解释；合同 V1.2 不产生 manifest/schema v1.2。静态制品与 Git blob 身份按共用合同，历史机器格式 V1.0 仅按其兼容边界。原型/截图不能替代实际 HTTP、receiver、SEO 或接收成功证明。

02开发依当前开发项目规范选择技术方案，保持指定候选可验；替换候选重新绑定。Gate9 只读验收实际结果，失败交实施 owner；不得用本包自检代签页面运行 PASS。Gate9、集成、生产发布及 Google 已收录分别记录。Gate6独立复核及总控关闭尚待完成，本次不外发、不启动 Gate8。

### 4.3 本轮单一自检 / 覆盖结论

使用一致性 V0.4 与交付 V0.5 共用本节，不另造一轮完整上游审查。实际核对：六项准入、79 冻结记录、精确 title/H1/说明/两个CTA路径、14选择值、receiver责任、公开参数负向语义、零库存机器边界、当前正式域名/索引规则、共享消费及生产差异、全部 AC/RB 的来源与去向。V0.1 独审提出 R01/R02，本版只修其交付映射与治理入口；R01 的三项可见落位批准明确返回原内容/设计 owner 协调，关系本身不是待决定。作者修订不等于独立复验通过或依赖关闭。

已处置跨合同差异：旧 Finder/五类结构由 S01/S02 排除；FAQ V0.10 覆盖旧答案；原型防索引/file地址与正式 S06/S07/S13 区分；旧生产 origin 示例不用；G8-13/RB-11 退休；原型私有投影不变成生产共享 owner；共享窄屏数值协调与 DOC 原型未应用数值如实区分。不得用这些映射改写原 frozen source。

继承：有效 Gate5 视觉与交互审查及总控关闭。未执行：新浏览器渲染、生产/开发仓库访问、当前 HTTP、receiver 提交、实际收件、生产SEO或Google索引。当前有 1 个可见落位协调事项覆盖 3 条必需 discovery 关系，保持 OPEN；有效依赖控制 16（包括原13条及新增3条，可选 social image 仍有合格省略分支）；Gate6 独立复核/关闭及后续授权未完成。具体读回校验、命令与本包 SHA 在本轮 SDD 报告，避免本文自引用 hash。



## 5. R01/R02 定向返修映射

| Finding | 本版修订与供原审查者复验的位置 | 未关闭对象 |
|---|---|---|
| DOC-D32-G6-R01 | §3 RB-15–17、§3.1 将三条已批准关系与未批准落位分开；§4.1 G8-16–18 给出精确目标、来源、owner、实际证据与集成/发布阻断 | 原内容/设计落位批准及当前运行证明仍 OPEN；本包不新增可见内容或改 Gate4 freeze |
| DOC-D32-G6-R02 | S14改为开发方三个现有文档职责，S15/§4.2切换合同V1.2，治理使用WorkflowV3.6及精确SHA；机器格式保持v1.1 | 未访问开发仓库；接手开发方按其规则读取并执行。Gate6仍待独立复验/总控关闭 |

V0.1 的旧 Gate8 入口与旧证据合同引用仅在保留的历史版本中存在，不是本版现行权威。正文/metadata/既有行为/共享consumer/冻结源未改；原独审其余覆盖按同一身份继承。R01/R02 修订接受与否交原独审，停止于 `CHANGES_READY_FOR_TARGETED_REVIEW`。
