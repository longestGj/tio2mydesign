# ABOUT-001 Gate 0 / Gate 1 Compliance and Evidence Audit V0.2

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| Page ID | `ABOUT-001` |
| 页面 | About TiO2 Malaysia |
| URL | `/about/` |
| 版本 | `V0.2` |
| 日期 | `2026-09-01` |
| 范围 | Gate 0 页面准入、Gate 1 研究/关键词/证据、公司事实冻结、SEO/GEO、Organization Schema、Global Chrome 与 route 依赖 |
| 当前状态 | `SUBMITTED_FOR_GATE_0_GATE_1_REVIEW / PARTIAL_USER_DECISION_RECORDED` |
| 页面生命周期 | `BRIEF_IN_REVIEW` |
| Mapping Status | `APPROVED_PRD_V0.3` |
| Verification Status | `FACT_EVIDENCE_REQUIRED` |
| 执行边界 | 仅 ABOUT-001；未进入 Gate 2–5；Gate 6–10 与开发/发布禁止 |

## 1. 审计结论

Gate 0 与 Gate 1 V0.2 已完成并提交审查，但没有被本执行任务自行批准。2026-09-01 用户明确批准 ABOUT-001 可采用 `mytio2.com` 作为所列公司与能力字段的一方事实来源，并明确不需要工厂、生产线、仓库、装柜、证书或团队图片；该决定只改变来源资格与视觉资产范围，不等于 SSM/第三方独立核验，也未授权 Gate 2–5。

- ABOUT-001 的 Page ID、`/about/`、Page Type、P1、主关键词、Mapping 与 Verification 在登记册、PRD、主表和当前任务之间一致。
- Primary keyword `malaysia titanium dioxide manufacturer` 的页面归属成立；数字搜索量、CPC 与趋势均为 `Unavailable`，不能虚构。原关键词表把 exact manufacturer 词记为 `C / Supplier Search`，实施主表把页面整体记为 `I / Technical Evaluation`；两者可解释为“搜索词有商业色彩、页面职责是证据评估”，但 Gate 2 必须避免写成 Home 式 supplier Hero。
- 前台品牌 `TiO2 Malaysia` 和运营主体全称是已批准项目基线。用户批准后，运营主体全称可同时由 `mytio2.com` 一方来源支持；但该站没有提供注册号、经营状态、成立日期、业务性质或明确的 registered address，这些字段仍不得补写或标成 SSM-verified。
- `mytio2.com` 的 Home/About/Documents 页面公开 Taiping manufacturing site、Malaysia manufacturing/origin、年度供应超过 35,000 metric tons、30+ 国家、200+ factory customers、25kg/pallet/big bag、Port Klang、FCL/LCL、quality control 和 REACH/FDA-related documents。2026-09-01 用户批准将这些站内实际可见内容用于 ABOUT-001 的 company-provided claims；必须重新写作并保留来源、日期、适用范围及一方声明限定。
- 站内一致支持的是 annual supply/supplied annually；不得擅自升级成经审计 production capacity。quality control 不等于认证 QMS；REACH/FDA-related documents 不等于公司认证；ISO 和 batch traceability 未在本轮批准来源中找到支持内容，继续 `DO_NOT_RENDER`。
- 用户明确不需要工厂、生产线、仓库、装柜、证书或团队图片。后续视觉固定采用无此类图片方案，不保留空媒体槽，也不以生成图、图库照片、factory icon 或 certificate badge 替代。
- SSM 官方资料页确认 Company Profile/ACGS 可提供公司名称、注册号、状态/地址等正式核验信息，但本轮没有取得 IKHLAS TITANIUM 的具体档案。官方核验路径已找到，事实仍未解冻。
- 登记册指定的 `ABOUT_CONTACT_PLAYBOOK_V0.1.md` 不存在。按登记册规则，只能完成 Brief 与证据研究草案；在 Playbook 获批或用户明确批准页面专属例外前，正式 Gate 2 准入阻塞。

建议审查结论：`CONDITIONAL_PROGRESSION_RECOMMENDED_AFTER_PLAYBOOK_DECISION_WITH_USER_APPROVED_FIRST_PARTY_CLAIMS_AND_RESIDUAL_RESTRICTIONS`。这不是 Gate 批准状态。

## 2. Gate 0 页面身份核对

| 字段 | 登记册 | 主表 | PRD / 当前任务 | 结论 |
|---|---|---|---|---|
| Page ID | ABOUT-001 | ABOUT-001 | ABOUT-001 | `MATCH` |
| Page Name | About TiO2 Malaysia | About TiO2 Malaysia | About TiO2 Malaysia | `MATCH` |
| URL | `/about/` | `/about/` | `/about/` | `MATCH` |
| Page Type | Trust / company page | Trust / company page | Trust/company page | `MATCH` |
| Section | About / Contact | ABOUT | 仅 About 页面 | `MATCH / NORMALIZED_SECTION_LABEL` |
| Market / Language | 由主表补全 | GLOBAL / EN | 国际 B2B | `MATCH` |
| Priority | P1 | P1 | 未改变 | `MATCH` |
| Primary Keyword | malaysia titanium dioxide manufacturer | 同左 | 明确要求 | `MATCH` |
| Mapping Status | APPROVED_PRD_V0.3 | APPROVED_PRD_V0.3 | 不升级 | `MATCH` |
| Verification Status | FACT_EVIDENCE_REQUIRED | FACT_EVIDENCE_REQUIRED | 明确要求逐项核验 | `MATCH` |
| Playbook Key | ABOUT_CONTACT | 由登记册决定 | 适用 Playbook 要求 | `MATCH_KEY / FILE_MISSING` |

### Gate 0 准入判断

| 检查项 | 结果 | 说明 |
|---|---|---|
| 页面存在于 54 页登记册 | PASS | 不新增页面 |
| URL、页面类型、优先级一致 | PASS | 不变更 `/about/` |
| 主关键词、排除词与内耗边界明确 | PASS | About 负责 evidence/company trust；Home/Documents/Contact 分离 |
| Verification 状态明确 | PASS | `FACT_EVIDENCE_REQUIRED` |
| 页面类型 Playbook 可用 | BLOCKING FOR FORMAL GATE 2 | 计划文件不存在；仅允许 Brief/研究草案 |
| 页面任务卡已建立 | PASS FOR SUBMISSION | `docs/page-briefs/ABOUT-001_ABOUT_TIO2_MALAYSIA_BRIEF_V0.2.md`；仍待审 |
| Global Chrome 继承 | PASS | V0.2 current-state/固定 RFQ 合同明确 |

Gate 0 状态：`DRAFT_COMPLETE / SUBMITTED_FOR_GATE_0_REVIEW / NOT_APPROVED`。

## 3. 关键词、搜索意图与内耗审计

| 字段 | 主表值 | 审计结论 |
|---|---|---|
| Primary Keyword | `malaysia titanium dioxide manufacturer` | ABOUT-001 唯一 owner；不可因事实缺失转给 Home |
| Secondary Keywords | malaysia origin / made in Malaysia / manufactured in Malaysia / country of origin / traceability | 均为事实型辅助意图；没有证据时不能仅为覆盖关键词写成断言 |
| Search Intent | `I` | 页面整体为 Technical Evaluation；不写成 Home 式 Supplier Search |
| Buyer Stage | `Technical Evaluation` | 与 Trust/company page 一致 |
| Source Cluster | `ORIGIN-01` | 原独立 Origin 页面已由 PRD V0.3 删除并并入 About |
| Page Role | Prove entity, manufacturing/origin, quality, traceability, export support | “Prove” 是证据门槛，不是允许自我声明 |
| Excluded Keywords | broad supplier search / destination-market supplier terms / RFQ terms | 硬边界 |
| Cannibalization Boundary | About=证据和企业信任；Home=广泛商业；Documents=文件申请 | 硬边界 |

本地关键词资料显示：exact manufacturer 词及多数 origin/traceability 变体没有 Search Volume、CPC 或 Trend；`malaysia origin titanium dioxide` 的 KD=14，其他数字多为 `Unavailable`。这些值只说明定性意图与有限难度信号，不证明 IKHLAS 的任何制造或原产地事实。

### Owner 分离

| 意图 | Owner | About 不得做的事 |
|---|---|---|
| broad Malaysia supplier | HOME-001 | 不以 supplier/price/quote 为主要 Hero 或正文 |
| destination supplier | MARKET-* | 不复制国家采购和贸易背景 |
| COO、TDS/SDS/COA/REACH 详细说明与申请 | DOC-* / CONV-DOC | 不展示文件下载、适用范围或申请管理细节 |
| general contact details | CONTACT-001 | 不把 About 变成 Contact directory |
| RFQ | CONV-RFQ | 不内嵌或接管完整 RFQ 表单 |
| exact grades/applications | PRODUCT-* / APP-* | 不做选型、指标或型号推荐 |
| trade updates | RES-TRADE-* | 不解释关税或暗示规避 |

SEO/GEO Gate 1 结论：`PASS_FOR_OWNER_AND_EVIDENCE_BOUNDARY_ONLY`。H1、Title、Meta、最终 Answer blocks 与 Schema 留给 Gate 2 审查。

## 4. 证据来源与资格

| Evidence ID | 来源 | 日期 | 观察内容 | 资格 | 使用限制 |
|---|---|---|---|---|---|
| `ABOUT-E001` | 当前来源任务 | 2026-08-30 | 页面身份、逐项核验、状态覆盖、Global Chrome 与禁止范围 | `AUTHORITATIVE_TASK_INPUT` | 不证明公司事实 |
| `ABOUT-E002` | `AGENTS.md` / `00_PROJECT_STATUS.md` | 2026-08-30 核对 | 前台品牌、运营主体、规划域名、About owner 与事实冻结 | `APPROVED_PROJECT_GOVERNANCE` | 运营主体是项目基线；不等于 SSM 注册/制造证据 |
| `ABOUT-E003` | PRD V0.4 | 2026-08-29 | 品牌关系、About 最低模块、Origin 关键词重新归属 | `APPROVED_ARCHITECTURE_BASELINE` | PRD 是需求，不是制造/产能/认证证明 |
| `ABOUT-E004` | Registry + `11_page_keyword_master.csv` | 2026-08-29 | ABOUT-001 identity、primary、intent、role、Mapping、Verification | `IMPLEMENTATION_MAPPING_BASELINE` | 不证明公司能力 |
| `ABOUT-E005` | 本地关键词 master/raw SERP | 2026-08-29 | manufacturer/origin/traceability 定性搜索意图，数字缺口 | `QUALITATIVE_KEYWORD_EVIDENCE` | 不证明事实，不虚构量化需求 |
| `ABOUT-E006` | `mytio2.com/` | 2026-09-01 复核 | 主体、Taiping manufacturing site、Malaysia-origin supply、Port Klang、文件与包装声明 | `USER_APPROVED_FIRST_PARTY_SOURCE_FOR_ABOUT` | 可作 company-provided claim；不得复制正文/结构，不得声称独立核验 |
| `ABOUT-E007` | `mytio2.com/about/` | 2026-09-01 复核 | 年度供应超过 35,000 t、30+ 国家、200+ 客户、制造、质量控制、包装、Port Klang、FCL/LCL 与文件声明 | `USER_APPROVED_FIRST_PARTY_SOURCE_FOR_ABOUT` | 保留指标原始口径、范围和抓取日期；不得升级为审计产能、保证或认证 |
| `ABOUT-E008` | `mytio2.com/documents/` | 2026-09-01 复核 | SDS/REACH/TDS 索引、REACH 编号与日期声明 | `USER_APPROVED_FIRST_PARTY_DOCUMENT_INDEX` | About 只说明按 grade/market 适用的文件支持；详细文件、申请和适用性仍由 Documents owner 管理；禁止认证 badge |
| `ABOUT-E009` | `mytio2.com/contact/` | 2026-09-01 复核 | 同一主体、Taiping 地址、Port Klang、旧域名邮箱 | `USER_APPROVED_FIRST_PARTY_CROSS_CHECK` | 地址仅按站内标签称 manufacturing site；不推断 registered office/visitor address；新站联系方式归 Contact owner |
| `ABOUT-E016` | 2026-09-01 用户批准决定 | 2026-09-01 | 明确允许所列公司与能力字段按 `mytio2.com` 使用，并明确不需要能力图片 | `AUTHORITATIVE_USER_DECISION` | 只批准来源资格/无图范围；不能创造站内没有的值，不能冒充独立核验或批准 Gate 2–5 |
| `ABOUT-E010` | SSM 官方 e-Info / Company Information 页面 | 2026-08-30 | 官方 Company Profile/ACGS 可核验名称、注册号、地址、状态等 | `AUTHORITATIVE_VERIFICATION_ROUTE` | 未取得 IKHLAS 的具体档案，不能据此解冻 |
| `ABOUT-E011` | SSM Search 门户只读检查 | 2026-08-30 | 官方供应门户可按名称/注册号检索；本轮未取得特定公司结果或已购档案 | `DIAGNOSTIC_ONLY / NO_ENTITY_RESULT_OBTAINED` | 不可写成“SSM 已验证” |
| `ABOUT-E012` | LinkedIn 公司页 | 2026-08-30 | Malaysia-based TiO2 供应、Taiping、51–200、2021 等自报信息 | `FIRST_PARTY_SOCIAL_CANDIDATE` | 非 SSM、主体名称/类型表达不完全一致；不用于员工/成立/制造事实 |
| `ABOUT-E013` | Eximpedia/Volza 等贸易聚合 | 2026-08-30 | `Ikhlas Industry Venture` 出口记录候选 | `THIRD_PARTY_ENTITY_MISMATCH_LEAD` | 不是相同法定名称，不能归因于 ABOUT-001 运营主体 |
| `ABOUT-E014` | `nslookup tio2malaysia.com` / HTTPS HEAD | 2026-08-30 | A/AAAA 未返回；HTTPS `/about/` 无可验证响应 | `DIAGNOSTIC_ONLY / NOT_VERIFIED_LIVE` | 不证明域名所有权或未来发布状态 |
| `ABOUT-E015` | Global Chrome V0.2 Spec / Cross-page Review / Home shared state | 2026-08-30 | 固定 Header/Menu/Footer RFQ、84/64px、44px、Deep Navy、current state | `APPROVED_VISUAL_AND_GOVERNANCE_BASELINE` | 不证明 RFQ route live；false 只为发布阻塞 |

## 5. 逐项 Claim Register

| Claim ID | 字段/关系 | 候选值或声明 | 当前验证状态 | 渲染决定 | 解冻要求 |
|---|---|---|---|---|---|
| `ABOUT-CL001` | 前台品牌 | TiO2 Malaysia | `VERIFIED_PROJECT_IDENTITY` | `RENDER` | 保持批准命名与视觉 |
| `ABOUT-CL002` | 运营主体全称 | IKHLAS TITANIUM (MALAYSIA) SDN. BHD. | `VERIFIED_PROJECT_BASELINE / USER_APPROVED_FIRST_PARTY_SOURCE / SSM_PENDING` | `RENDER_WITH_QUALIFIER`；表达品牌运营关系 | SSM 档案只用于当前来源未提供的法定字段；不扩写注册状态 |
| `ABOUT-CL003` | 品牌—运营主体关系 | TiO2 Malaysia operated by the entity | `APPROVED_PROJECT_RELATIONSHIP` | `RENDER_WITH_APPROVED_WORDING` | Gate 2 锁定简洁表达 |
| `ABOUT-CL004` | SSM 注册号/公司状态/成立日期/业务性质/registered address | 批准来源未提供实际值 | `NOT_PRESENT_ON_APPROVED_SOURCE / NO_OFFICIAL_PROFILE_OBTAINED` | `DO_NOT_RENDER` | 如未来需要发布，提供包含实际值的批准资料 |
| `ABOUT-CL005` | 地址 | NO.33 Industrial Perusahaan Ringan Tupai, 34000 Taiping, Perak, Malaysia | `USER_APPROVED_FIRST_PARTY_CLAIM` | `RENDER_WITH_SOURCE_QUALIFIER`；仅标为 Taiping manufacturing site | 不推断 registered office、visitor address、directions 或地图事实 |
| `ABOUT-CL006` | Malaysia 制造 | Taiping manufacturing site / production in Taiping | `USER_APPROVED_FIRST_PARTY_CLAIM` | `RENDER_WITH_SOURCE_AND_DATE` | 不声称第三方/监管核验 |
| `ABOUT-CL007` | Malaysia 原产地 | Malaysia-origin / made in Malaysia | `USER_APPROVED_FIRST_PARTY_CLAIM` | `RENDER_WITH_SOURCE_AND_SCOPE_QUALIFIER` | COO 文件详情与申请由 Documents owner 管理 |
| `ABOUT-CL008` | 年度供应 | more than 35,000 metric tons supplied annually | `USER_APPROVED_FIRST_PARTY_SCALE_CLAIM` | `RENDER_WITH_METRIC_LABEL_SOURCE_AND_DATE` | 不改写为经审计 production capacity；若使用 capacity 需另行一致性批准 |
| `ABOUT-CL009` | 出口覆盖 | 30+ countries | `USER_APPROVED_FIRST_PARTY_SCALE_CLAIM` | `RENDER_WITH_SOURCE_AND_DATE` | 不列举站内未提供的国家，不保证当前目的地可服务 |
| `ABOUT-CL010` | 客户数量 | 200+ factory customers | `USER_APPROVED_FIRST_PARTY_SCALE_CLAIM` | `RENDER_WITH_SOURCE_AND_DATE` | 不暗示客户背书、名单或独立去重审计 |
| `ABOUT-CL011` | 包装 | 25 kg bags / palletized packing / big bags or other options | `USER_APPROVED_FIRST_PARTY_CLAIM` | `RENDER_WITH_APPLICABILITY_QUALIFIER`；依 grade/shipment requirements | 不作为所有产品或订单保证；不需要照片证据 |
| `ABOUT-CL012` | 质量控制 | quality control | `USER_APPROVED_FIRST_PARTY_CLAIM / QMS_NOT_PROVEN` | `RENDER_WITH_LIMITED_WORDING` | 不写 audited/certified QMS、stable quality guarantee 或未经来源支持的流程细节 |
| `ABOUT-CL013` | 公司认证 | ISO 或其他 company/facility certification | `NO_CANDIDATE / NO_EVIDENCE` | `DO_NOT_RENDER` | 有效证书、主体、范围、编号、有效期和核验链接 |
| `ABOUT-CL014` | REACH/FDA 等 | 一方站点列出 REACH/FDA-related documents | `USER_APPROVED_FIRST_PARTY_DOCUMENT_SUPPORT_CLAIM` | About 可概述按 grade/market 适用的文件支持；禁止 certification badge，详情和申请交给 Documents owner | 不把 document availability 写成公司/全产品认证，不抢 Documents 职责 |
| `ABOUT-CL015` | 批次追溯 | batch traceability | `NOT_FOUND_ON_USER_APPROVED_SOURCE` | `DO_NOT_RENDER` | 需可见的一方来源或另行批准的批次编码、COA/COO/packing list 链路资料 |
| `ABOUT-CL016` | Port Klang | export coordination through Port Klang | `USER_APPROVED_FIRST_PARTY_CLAIM` | `RENDER_WITH_SOURCE_AND_SCOPE_QUALIFIER` | 不保证路线、船期、舱位、价格或交期 |
| `ABOUT-CL017` | FCL/LCL/export destinations | FCL/LCL coordination and export support | `USER_APPROVED_FIRST_PARTY_CLAIM` | `RENDER_WITH_SOURCE_AND_SCOPE_QUALIFIER` | 不扩写未列目的地、承运人、时效或保证 |
| `ABOUT-CL018` | 工厂/生产线/仓库/装柜/证书/团队图片 | 用户明确不需要 | `NOT_REQUIRED_BY_USER` | `DO_NOT_RENDER / NO_EMPTY_MEDIA_SLOT` | 采用文字、数据、来源和实体关系布局；未来新增资产需另行核验 |
| `ABOUT-CL019` | Organization Schema | Organization relation | `PENDING_GATE_2` | 仅允许可见且已验证字段 | 每个字段通过本 Claim Register；Schema 与可见内容一致 |
| `ABOUT-CL020` | About route | `/about/` | `VERIFIED_ARCHITECTURE / NOT_VERIFIED_LIVE` | `RENDER_AS_DESIGN_IDENTITY` | 发布前 route health 验证 |

## 6. 原子冻结与视觉规则

1. 用户批准的一方事实只能按站内实际字段呈现，并显示 company-provided 来源、抓取/更新时间和适用范围；不得扩写为独立审计、监管核验、保证或站内没有的细节。
2. Taiping 地址只能标为批准来源所称的 manufacturing site；不显示 registered office、visitor invitation、directions 或地图推断。
3. 即使制造、原产地、Port Klang 与 FCL/LCL 文案已获一方来源资格，也不使用工厂、生产线、烟囱、粉体生产、Malaysia flag+factory、港口或装柜图片作为证据替代。
4. 年度供应、国家数与客户数可以显示，但必须保留 `more than`/`30+`/`200+` 和指标标签；不使用夸张动画、独立验证徽章或把 annual supply 改成 audited production capacity。
5. 不显示 ISO/REACH/FDA/COO badge、盾牌、证书缩略图或“certified quality”文案。REACH/FDA 只作为按 grade/market 适用的文件支持关系，并由 Documents owner 管理详情和申请。
6. 批次追溯未在批准来源中找到，不能用流程图暗示现有系统。只可呈现不归因于公司的买家核验框架，或整个模块省略。
7. 用户确认不需要工厂、生产线、仓库、装柜、证书或团队图片；模块固定重排为文字、数据、实体关系与来源卡，不保留空图框，也不用图库、生成图、工厂图标或认证徽章补位。
8. 长公司名必须在 Desktop 与 390px 自然换行，不缩小到不可读、不截断、不水平滚动。

## 7. SEO、GEO 与 Organization Schema 审计

- About 可拥有 `malaysia titanium dioxide manufacturer`；Gate 2 可用用户批准的一方 manufacturing/origin claim 承接，但必须让可见来源/日期与限定语邻近，不能写成第三方认证结论。
- Secondary keywords 不是自动 claim 清单。`made in Malaysia`、`manufactured in Malaysia` 已有用户批准的一方来源资格；`traceability` 因批准来源未出现而继续冻结。
- Answer-ready Blocks 可回答品牌—运营主体、Taiping manufacturing、Malaysia origin、年度供应、包装、quality control、文件支持和出口协调，但每项必须限定为 company-provided。ISO、批次追溯及缺失法定字段不得写入答案块。
- 每个公开事实块必须显示来源/资料日期/适用范围；第一方来源需明确标注为 company-provided，不伪装成 independent verification。
- `Organization` Schema 可评估可见的品牌/组织名称、批准 URL、批准 Logo，以及与可见文案一致的 Taiping manufacturing-site location；`foundingDate`、注册号、业务性质、registered address、employee、ISO/certification、sameAs、contactPoint 等未有对应可见批准值时不锁定。Schema 不得把一方 claim 转成独立验证语义。
- 默认不使用 FAQPage/QAPage；未来如采用，Schema 只能复述同屏可见且已验证的答案。

## 8. Route 与 Global Chrome 审计

| 检查 | 结论 |
|---|---|
| 固定 Header 顺序 | PASS；`Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote` |
| About current | PASS；Desktop Bold + `CURRENT` + Teal underline；Mobile Menu Bold + `CURRENT` + 左侧标记 |
| Desktop Header | 84px；RFQ 固定，指向 `/request-a-quote/` |
| Mobile Header | 64px；`Logo | RFQ | Menu`；目标 ≥44px |
| Mobile Menu | 与 Desktop 同序；About current；terminal RFQ 固定 |
| Footer | Deep Navy；Brand/Explore/Information/Conversion/Copyright；RFQ 固定 |
| Contact / Documents Body link | 只在 owner 内容和 route 条件满足时公开；不承诺文件或联系方式 |
| Contact fallback | 0；任何场景禁止 |
| Public RFQ OFF/hidden/disabled/empty slot | 0；任何场景禁止 |
| RFQ route failure | `RFQ_ROUTE_READY=false = RELEASE_BLOCKER`；不改变公开视觉 |
| 计划域名/About route | `NOT_VERIFIED_LIVE`；只影响发布，不把视觉 RFQ 关闭 |

## 9. Gate 1 未决问题与阻塞级别

| Review ID | 级别 | 问题 | 阻塞范围 | 当前处理 |
|---|---|---|---|---|
| `ABOUT-R001` | BLOCKING | ABOUT_CONTACT Playbook 缺失 | 正式 Gate 2 准入 | 需批准 Playbook 或页面专属例外 |
| `ABOUT-R002` | RESIDUAL RESTRICTION | 无 SSM Company Profile/ACGS，批准来源也未提供注册号、状态、成立日期、业务性质或 registered address | 法定公司事实与 Organization Schema | 缺失法定字段继续 `DO_NOT_RENDER`；不阻塞已批准的一方运营主体关系 |
| `ABOUT-R003` | CLOSED BY USER DECISION | 制造/原产地原先只有一方来源 | manufacturer/origin 核心叙事 | 2026-09-01 用户批准 `mytio2.com` 用于 company-provided claim；保留来源限定 |
| `ABOUT-R004` | PARTIAL / CONTROLLED | 地址类型只支持 manufacturing site | 地址/地图/Schema/图片 | 可称 Taiping manufacturing site；不得称 registered office/visitor address，不用地图推断 |
| `ABOUT-R005` | CLOSED BY USER DECISION | 年度供应、客户、国家、包装只有一方来源 | KPI/scale/packaging | 可按站内原始口径、日期和适用范围呈现 |
| `ABOUT-R006` | PARTIAL / RESIDUAL RESTRICTION | quality control 与 REACH/FDA document support 有一方来源；ISO、认证 QMS、批次追溯无支持 | Quality/Certification/Traceability | 仅解冻站内可见子项；ISO、badge、QMS 与 traceability 继续 `DO_NOT_RENDER` |
| `ABOUT-R007` | CLOSED BY USER DECISION | 出口/Port Klang/FCL/LCL 只有一方来源 | Export support | 可按 company-provided export coordination 呈现；不得保证路线/时效/舱位 |
| `ABOUT-R008` | RESOLVED BY SCOPE | 用户明确不需要能力图片 | Gate 3–5 视觉 | 固定无此类图片设计；无空槽、无生成/图库替代、无工厂图标/认证徽章 |
| `ABOUT-R009` | IMPORTANT | Indexing intent 尚未由 Gate 2 决定；用户批准的一方事实已改善独有内容基础 | Gate 2 SEO | `DECISION_REQUIRED`；在完整内容架构与可见来源设计后评估 `INDEX, FOLLOW` |
| `ABOUT-R010` | RELEASE_BLOCKER ONLY | 计划域名、About、RFQ、Documents、Contact route 未验证 live | Gate 10 发布 | 不改变 Gate 2–5 视觉；Global RFQ 固定 |
| `ABOUT-R011` | GOVERNANCE | 状态/索引文档仍有 Global Chrome V0.1 旧引用 | 全局文档一致性 | 本页按 V0.2；由总控另行同步 |

## 10. Gate 状态、验证与批准来源

| Gate | 状态 | 验证 | 未决问题 | 批准来源 |
|---|---|---|---|---|
| Gate 0 | `DRAFT_COMPLETE / SUBMITTED_FOR_GATE_0_REVIEW` | 身份、URL、类型、P1、Mapping、Verification、主关键词与 owner 边界已交叉核对 | R001、R009 | 尚无；等待总控/用户 |
| Gate 1 | `DRAFT_COMPLETE / SUBMITTED_FOR_GATE_1_REVIEW / PARTIAL_USER_DECISION_RECORDED` | 关键词证据、来源资格、20 项 Claim Register、Schema、Chrome、route、受限状态及 2026-09-01 用户决定已审计 | R002/R004/R006 residual；R001/R009；R010 发布门禁；R011 治理同步 | 用户已批准 `mytio2.com` 的指定一方来源资格与无能力图片范围；Gate 1 整体仍待批准 |
| Gate 2 | `NOT_STARTED / NOT_AUTHORIZED` | — | 依赖 Gate 0/1 审查与 Playbook 决定 | 当前要求先停在 Gate 0/1 |
| Gate 3 | `NOT_STARTED / NOT_AUTHORIZED` | — | 依赖 Gate 2 | 当前未授权 |
| Gate 4 | `NOT_STARTED / NOT_AUTHORIZED` | — | 依赖 Gate 3 | 当前未授权 |
| Gate 5 | `NOT_STARTED / NOT_AUTHORIZED` | — | 依赖 Gate 4 | 当前未授权 |
| Gate 6–10 | `OUT_OF_SCOPE / PROHIBITED` | — | 当前任务明确禁止 | 不适用 |

## 11. Gate 0/1 自检

- [x] ABOUT-001 唯一身份、URL、Page Type、P1、Mapping 与 Verification 已核对。
- [x] Primary、Secondary、Intent、Buyer Stage、Excluded 与 Cannibalization Boundary 已从主表核对。
- [x] keyword evidence 与 company fact evidence 已分开；没有把关键词当成能力证明。
- [x] SSM 官方核验路径已识别，但没有伪称取得公司档案或注册结果。
- [x] IKHLAS 全称、地址、制造、origin、产能、包装、质量、认证、追溯与出口已逐项登记。
- [x] 用户批准的一方来源中实际可见的制造、origin、年度供应、规模、包装、quality control、文件支持与出口子项已解冻并限定；缺失法定字段、ISO、认证 QMS 与 traceability 仍冻结。
- [x] `mytio2.com` 已按用户决定升级为 ABOUT-001 的可用一方来源；仍不得复制正文/结构或伪装成独立核验。
- [x] 用户明确不需要能力图片；无空媒体槽、无生成/图库替代、无工厂图标/认证徽章已成为后续 Gate 强制视觉合同。
- [x] Organization Schema 不包含页面不可见或未验证事实。
- [x] Global Chrome V0.2、About current、84/64px、390px ≥44px、固定 RFQ 与 Deep Navy Footer 已继承。
- [x] 未创建其他页面、Playbook、Gate 2–5 成果、开发交付或代码。
- [x] 未访问或操作 `D:\16Wordpress_nextjs`。

## 12. 审查请求

建议总控/用户按以下边界批准或退回：

1. 批准 ABOUT-001 Gate 0 页面身份、主关键词与 Home/Documents/Contact/RFQ owner 分离。
2. 批准 Gate 1 V0.2 的证据分级：用户指定的一方来源实际可见字段可以 company-provided 方式呈现；注册号、公司状态、成立日期、业务性质、registered address、ISO、认证 QMS 与 batch traceability 继续冻结。
3. 决定 Playbook 准入方式。
4. 如需补充批准来源未出现的法定字段、ISO、认证 QMS 或批次追溯，指定相应资料的提供/审核责任人。
5. 若授权 Gate 2–5，按一方来源限定、残余字段不渲染、固定无能力图片和三种证据状态推进；仍不授权 Gate 6+、开发或发布。
