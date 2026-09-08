# SYS-404 Page Not Found Brief V0.1

## 0. 控制、身份与权限

| 字段 | 当前值 |
|---|---|
| Date / author | 2026-09-08 / `/root/sys404_gate1_execute` |
| Page ID / name / section | `SYS-404` / Page Not Found / `SYSTEM` |
| Route / type | `RUNTIME_FALLBACK`；仅`tio2-my`未知URL；无独立可索引`/404/` / Global system recovery page |
| Market / language / priority | `GLOBAL` / `EN` / `P1` |
| Planned domain / site_scope | `https://tio2malaysia.com` / `tio2-my` |
| Lifecycle / Gate 1 | `APPROVED_FOR_DESIGN`（仅Gate 1研究/方向批准，无后续执行权） / `APPROVED / CLOSED` |
| Mapping / verification | `APPROVED_USER_PAGE_ADDITION` / `NO_DIRECT_KEYWORD_TARGET` |
| Fact / runtime | 精确文案和目标行为`USER_APPROVED_DESIGN`；运行履行`NOT_TESTED` |
| Content intent checkpoint | `CONTENT_INTENT_CONFIRMED=YES`；用户于2026-09-08对已直接呈现的SYS-404 Gate 1具体决定包回复“确认。”；原设计精确文案授权保持 |
| Controller / independent review | `/root`总控接收；`/root/sys404_gate1_project_review`独立审查`SYS404-G1-PC-20260908-01`通过，必修0 |
| User approval / closure | `SYS404-G1-USER-20260908-01`；`approval_basis=EXPLICIT_USER_CONFIRMATION`；2026-09-08批准本轮研究综合、Page Intent Card、职责/CTA/机器语义边界及Gate 1关闭；[批准记录](../../pages/system/404/05_review/SYS-404_GATE1_USER_APPROVAL_AND_CLOSURE_V0.1.md) |
| Next Gate / external | Gate 2+ `NOT_AUTHORIZED_BY_THIS_TASK`；`HANDED_OFF=NO`；本任务没有开发、部署或发布权限 |
| Change | 首次Gate 1批准落档；仅同步当前控制字段和决定记录，研究正文及2026-09-08设计全部精确内容不变；审查前草案保留于提交`a8d76b7e3d4e8fa086d8d804eacc646af37e63ac` |

## 1. 权威输入与消费顺序

先按根AGENTS/现行工作流解释阶段，再按最新用户决定及精确对象范围消费事实；本Brief为用户确认的Gate 1研究/方向合同，精确copy权威仍是批准设计，不能扩大该源的事实或授权。

| 来源 | 版本 / 用途 |
|---|---|
| [批准设计](../superpowers/specs/2026-09-08-404-thank-you-pages-design-v0.1.md) | V0.1，2026-09-08；§3–4、7–10、12锁定本页身份、精确文案、行为与批准 |
| [新增决定](../architecture/SYS_404_CONV_THANK_PAGE_ADDITION_DECISION_V1.0.md) | V1.0，`SYS404-CONVTHANK-ADDITION-20260908`；59页架构增补、Page ID与范围 |
| [执行计划](../superpowers/plans/2026-09-08-404-thank-you-gate0-gate1.md) | 2026-09-08；Task 2允许本页Gate 1，Task 3保留独立审查及用户确认 |
| [PRD](../prd/TiO2_Malaysia_Website_PRD_V0.4.md) | V0.4与No-Terms及新增决定组合；旧54/57数量以批准增补合成59，不回写历史源 |
| [登记册](../architecture/PAGE_REGISTRY_V0.2.md) / [关键词主表](../../research/keyword/11_page_keyword_master.csv) | SYS-404及五个目标完整归属；本页无获客主词 |
| [Gate 0 intake](../../pages/system/404/00_intake/SYS-404_GATE0_INTAKE_V0.1.md) | V0.1准入；无通用SYSTEM Playbook，设计＋新增决定作为专属合同 |
| [Global Chrome](../architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md) | V0.5；共享owner、fixed RFQ、未映射导航语义 |
| [法律共享区](../architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md) / [No-Terms决定](../architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md) | V1.0；Privacy EN/BM、Cookie Policy、Cookie Settings；不新增Terms |
| [证据决定册](../architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md) | V1.8 §1–3；继承已批准事实，本页不增加COO、注册、贸易或产品关系命题 |
| [研究报告](../../pages/system/404/01_research/SYS-404_GATE1_RESEARCH_REPORT_V0.1.md) / [命题登记册](../../pages/system/404/01_research/SYS-404_GATE1_CLAIM_EVIDENCE_REGISTER_V0.1.csv) | V0.1，本轮研究综合及逐项证据；不是新的原文案批准源 |

2026-09-08核对：`NO_UNRESOLVED_PAGE_CONFLICT_FOUND`。旧串行合同§6默认不让子代理修改共享入口，本次用户批准执行计划Task 2明确指定Status定向修改；仅改SYS-404一行，不能延伸为全局维护权限。设计中“Gate 1未启动”是批准时点，当前执行启动来自计划，不将历史状态改写。

## 2. Page Intent Card

| 项目 | 本页方向 |
|---|---|
| Audience | 访问了不存在URL的访客，包括采购、技术评估、文件申请或既有联系上下文中的访客；不按未知URL推定具体身份、国家、产品或购买意愿 |
| Buyer problem | 原来要访问的内容没有出现；需要迅速知道自己遇到什么情况，并选一条继续路径 |
| Core message | 当前页面无法提供；可继续浏览产品、返回首页或前往文件申请、联系、询价入口。这是内部意图说明，页面逐字采用§3批准文案 |
| Must include | 批准eyebrow/H1/body、两项Primary和三项Supporting动作；共享Chrome、生产Logo、fixed RFQ与法律功能 |
| Must exclude | 站内搜索、常见问答、表单、长SEO正文、动态推荐、帮助中心、访客归责语气、内部治理文字、特定型号/证书/交期承诺 |
| Primary CTA | `Explore Products` → `/products/`；`Go to Homepage` → `/`，保留两项原层级 |
| Secondary CTA | 无另设Secondary层级；批准Supporting为Request Documents、Contact Our Team、Request a Quote |
| Ownership boundary | 只解释未找到并提供恢复出口；不取代Home定位、Products选型、Documents说明/申请、Contact联络或RFQ提交 |

采购阶段按主表为`Navigation recovery`，可发生于任意采购阶段。目标是读者选择有效目的地；本页没有提交、receiver或表单成功状态。导航点击不等于已获得报价、文件或已产生询盘。

## 3. 已批准精确内容：受控抄录，禁止独立改写

本节逐字继承批准设计§4.1；它保存外部内容授权，不是Gate 1新增的完整文案或模块设计。以后变更回到原内容owner并升版。

<!-- BUYER_COPY_START -->
Eyebrow: `404 · PAGE NOT FOUND`

H1: `Let’s help you find what you need.`

Body: `The page you’re looking for may have moved or is no longer available. You can continue by exploring our titanium dioxide products, requesting technical documents, or contacting our team.`

| 层级 | Exact CTA | URL |
|---|---|---|
| Primary | Explore Products | `/products/` |
| Primary | Go to Homepage | `/` |
| Supporting | Request Documents | `/request-documents/` |
| Supporting | Contact Our Team | `/contact/` |
| Supporting | Request a Quote | `/request-a-quote/` |
<!-- BUYER_COPY_END -->

`may have moved`是可能性，不是已核实迁移；`is no longer available`保留原文，不推导永久删除、删除日期、重定向地址或故障原因。页面不存在这一呈现须由真实未知路由触发，不能把有效页面误标为不存在。

## 4. 问题优先级、深度与职责

| ID / 优先级 | 读者问题 | 回答深度及依据 | 原责任方 |
|---|---|---|---|
| Q01 / 必须 | 为什么没有打开我想看的页面？ | 404识别＋批准可能性说明，不诊断具体原因；C01–C03 | SYS-404 |
| Q02 / 必须 | 我还能继续看产品或重新选择入口吗？ | 两个Primary动作；不自动跳转或替访客选择；C04–C05 | SYS-404出口；PRODUCT-000 / HOME-001目标 |
| Q03 / 必须 | 我是来找文件、联系团队或询价的，去哪里？ | 三个Supporting动作直接去登记页；不在404收集数据；C06–C08 | CONV-DOC / CONTACT-001 / CONV-RFQ |
| Q04 / 辅助 | 网站导航和隐私设置在哪里？ | 消费共享Header/Footer及法律功能；正文不重复政策；C13–C15 | Home / Global Chrome / Legal owner |
| Q05 / 他页负责 | 哪个型号适合我，哪些文件可提供，报价如何处理？ | 不在404展开；进入目标页后依该页当前批准合同判断 | Products、Documents、RFQ等各页owner |

这是回答优先级，不是最终模块顺序。Gate 2组织内容/机器语义，Gate 3安排完整三端结构，Gate 4完成视觉；本轮不创建模块ID或最终视觉方案。

## 5. 关键词、SEO与GEO边界

| 字段 | 合同 |
|---|---|
| Primary / secondary / source cluster | `NO_PRIMARY_KEYWORD` / `N/A` / `N/A` |
| Search intent / stage | `N` / `Navigation recovery`；描述站内恢复任务，不是SERP主导意图观察 |
| Excluded keywords（原值） | `supplier \| product \| market \| application \| document \| RFQ \| sample \| help commercial terms` |
| Cannibalization boundary（原值） | `No search ownership; existing commercial and utility pages retain their intent; no separate indexable /404/ route.` |
| HTTP / Robots / sitemap | 真正HTTP `404` / `noindex, follow` / excluded；批准目标，不宣称部署生效 |
| Canonical / slug | 不为任意未知URL建立可索引canonical合同；无独立获客slug或`/404/`页面 |
| Title方向 | `Page Not Found \| TiO2 Malaysia`，继承设计中的suggested title，最终字段由Gate 2确认，不新增商业词 |
| Meta / Open Graph | 本轮不新增独立推广文案或社交获客目标；如后续共享模板输出，只能表达相同未找到与恢复语义，由Gate 2/6明确 |
| Hreflang | `NOT_APPLICABLE`：当前仅EN、无批准404语言配对，不造多语言URL |
| GEO entities / relationships | TiO2 Malaysia站内恢复上下文及五个已登记目的地；无型号推荐、企业能力或文件可交付关系 |
| Answer-ready blocks / page-specific Schema | `NOT_APPLICABLE_SYSTEM_UTILITY_PAGE`；无GEO答案目标；不要求页面专属Schema，不把不存在页面表达成商品、文章、报价或文件交付 |
| Freshness | 无实时监管/税率事实；路由、共享owner、批准内容或索引合同变化时复核；未知路径真实状态需运行验证 |
| Method applicability | `NOT_APPLICABLE_SYSTEM_UTILITY_PAGE`；已读取搜索意图Skill范围，未执行检索、Google或Semrush；无搜索量/KD/CPC结论 |

索引策略在本任务中的理由：本页是错误恢复响应，不提供独立可索引主题；sitemap列出正式目的页而非任意未知路径。`follow`与批准的恢复链接方向一致，不构成搜索引擎必定抓取、传权或保留索引的保证。

## 6. 导航与内链合同

| Exact CTA | Page ID / URL | 进入后由目标页完成的任务 |
|---|---|---|
| Explore Products | `PRODUCT-000` / `/products/` | 产品家族与型号选择；404不复制目录或推荐型号 |
| Go to Homepage | `HOME-001` / `/` | 从全站定位和导航重新选择 |
| Request Documents | `CONV-DOC` / `/request-documents/` | 发起受控文件申请；不等于文件已提供或可直接下载 |
| Contact Our Team | `CONTACT-001` / `/contact/` | 使用该页核实的公司联系渠道；404不新增邮箱、电话或服务承诺 |
| Request a Quote | `CONV-RFQ` / `/request-a-quote/` | 提交采购上下文以供询价；404不拥有报价表单或receiver |

五个目标均为已登记顶层路径；这里只核对身份，不声称实际可访问。参数与预填：`NONE`；不从未知URL推定产品/市场或传递query/fragment。入站来源为未知运行时请求，没有新增菜单入口、站内索引链接或要求他页故意链接404。上层Hub/面包屑：`NOT_APPLICABLE`，未映射路由不虚构父级。

Header与Mobile Menu各surface的current为零（`current_navigation_key=NONE`）；无买家可见`CURRENT`词。共享导航顺序及fixed RFQ保持；Footer无current标记。共享法律区使用Privacy Policy → `/privacy-policy/`、Dasar Privasi (BM) → `/ms/privacy-policy/`、Cookie Policy → `/cookie-policy/`、Cookie Settings共享按钮；没有Terms或新帮助中心。

## 7. 证据、条件与未决事实

逐项证据唯一表为[CSV](../../pages/system/404/01_research/SYS-404_GATE1_CLAIM_EVIDENCE_REGISTER_V0.1.csv)，C01–C17；来源日期与本次读取日期分开。用户批准文案可按批准范围对外使用，运行契约未验不把已批准文案降为内部候选。

本页未提出新的企业事实，`PENDING_USER_FACT_CONFIRMATION=NONE_FOR_THIS_SCOPE`。具体迁移/删除原因未知且不尝试填补；保留批准可能性措辞。新增型号、产地、证书、交期或监管命题不属于本页，亦不重启决定册中历史Hold。

明确不呈现项来自批准设计的功能/内容排除，理由为用户批准范围；并非以缺证为由禁止内容。全体未来运行条件记作`NOT_TESTED / GATE8_9_DEPENDENCY`，不伪装为已实现，也不自动阻塞Gate 1研究。

## 8. 后续结构、视觉及开发接受条件

品牌消费[Visual Standard V1.0](../../brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md)、[CTA增补V1.0](../../brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md)、[生产SVG Manifest V1.0](../../brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md)。Logo沿用`brand_logo_primary_horizontal`、`brand_logo_reverse_monochrome`及共享favicon绑定，页面无分叉或新增资产。

| Dependency ID | 批准接受条件与可验证结果 | 责任与阶段 | 当前状态 |
|---|---|---|---|
| DEP01 | 代表性未知路由真实HTTP 404；代表性已知路由不被截获；可见精确文案一致 | Gate 6整理，Gate 8实现，Gate 9状态/正文实测；设计§10.2.1–3 | NOT_TESTED |
| DEP02 | 五个恢复目标实际可达、指向正确scope；点击只导航；缺失目标交原页面owner解决 | 目标页owner＋Gate 8，Gate 9逐链接验证；设计§10.2.2 | NOT_TESTED |
| DEP03 | robots准确、sitemap排除、不建立任意未知URL可索引canonical或页面专属Schema要求 | Gate 6/8 SEO owner，Gate 9响应/DOM/sitemap证据；设计§7.1、10.3.3–4 | NOT_TESTED |
| DEP04 | Desktop/Mobile Header、Menu、Footer、production Logo及fixed RFQ共享；各导航surface current为零；法律链接/设置有效 | Global Chrome / Legal owner；Gate 3/4组装，Gate 8实现，Gate 9验证；设计§10.2.4、10.3.1–2 | NOT_TESTED |
| DEP05 | 1440、768、390完整页面；键盘可达、可见focus、390逻辑目标至少44×44px、200%缩放、无横向溢出；换行增长不丢恢复动作，H1为初始landmark | Gate 3结构、Gate 4完整视觉、Gate 9真实证据；设计§9、10.3.6 | NOT_TESTED |
| DEP06 | 查询、路由、缓存、菜单、SEO、表单出口、媒体、共享组件和分析均限制`tio2-my`，无跨scope fallback | Gate 6合同、Gate 8映射及隔离实现、Gate 9只读验证；根AGENTS及设计§10.3.5 | NOT_TESTED |
| DEP07 | 若记录404事件，路径净化移除可能含敏感信息的query/fragment；遵循批准GA4/GTM consent；无再营销，无新增验证服务；导航或404 page view不作为表单成功证据 | Analytics/Consent owner，Gate 6明确、Gate 8实现、Gate 9payload证据；设计§8 | NOT_TESTED |

表单字段、提交中/成功/失败、文件交付：`NOT_APPLICABLE`，404没有表单。共享Cookie状态与移动菜单仍按共享合同验证，不因无本页表单省略。WordPress语义需求为批准文案、链接与站点范围；具体内容模型、API、组件及not-found机制归Gate 8，本Brief不发明绑定。

## 9. Gate 2输入、验收与决定记录

Gate 2获独立授权后，消费§2读者任务、§3精确内容、§4问题优先级、§5机器语义边界和§6出口。可组织完整内容合同及元数据，但不得改写已批准正文、增加转化功能或把依赖说明塞进buyer copy。仍保留Gate 2完整独立Buyer Review；本轮没有骨架或Full Copy阶段批准。

| 日期 / 对象 | 来源 / 范围 | 状态 |
|---|---|---|
| 2026-09-08 / 页面设计 | 设计§12及新增决定；身份、精确文案、动作与行为 | USER_APPROVED_DESIGN |
| 2026-09-08 / 本轮Gate 1执行（历史） | 执行计划Task 2；四核心与执行提交，原提交状态保留 | DRAFT_FOR_PROJECT_CONTROL_REVIEW（历史时点） |
| 2026-09-08 / 独立审查 | `SYS404-G1-PC-20260908-01`；不同身份审查通过，必修0，原报告保留当时待用户确认状态 | PROJECT_CONTROL_REVIEW_PASS |
| 2026-09-08 / Gate 1用户确认及关闭 | 用户对具体决定包回复“确认。”；`SYS404-G1-USER-20260908-01`，仅本页研究/方向及阶段批准 | APPROVED / CLOSED；CONTENT_INTENT_CONFIRMED=YES |
| 未发生 / Gate 2+及发布 | 本任务无对应授权 | NOT_AUTHORIZED_BY_THIS_TASK |

执行验收以[提交](../../pages/system/404/05_review/SYS-404_GATE1_EXECUTION_SUBMISSION_V0.1.md)记录：方向、必要问题、精确证据、Gate 2可用性和可行动依赖逐项核对。独立审查及用户Gate 1确认现已完成；Research、Execution Submission和原独立审查中的草案/PENDING仅保留历史时点，不控制当前批准状态。按原串行计划，下一允许动作是总控启动CONV-THANK Gate 1，本次同步未启动；SYS-404 Gate 2+、开发及发布仍未授权。DEP01–DEP07继续NOT_TESTED。唯一当前入口为[Manifest](../../pages/system/404/SYS-404_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md)。
