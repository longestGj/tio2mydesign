# About TiO2 Malaysia Page Brief V0.2

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| 文档名称 | About TiO2 Malaysia Page Brief |
| Page ID | `ABOUT-001` |
| Brief 版本 | `V0.2` |
| 创建日期 | `2026-08-30` |
| 最后更新日期 | `2026-09-01` |
| 页面负责人 | ABOUT-001 页面执行任务 |
| 总控审核人 | 项目总控与质量审查 |
| 用户批准记录 | 2026-09-01 用户批准：ABOUT-001 可将 `mytio2.com` 作为指定公司、制造、原产地、规模、包装、质量、文件与出口能力的一方事实来源；不需要工厂、生产线、仓库、装柜、证书或团队图片。批准不等于 SSM/第三方独立核验，也未授权 Gate 2–5。 |
| 页面生命周期 | `BRIEF_IN_REVIEW` |
| Mapping Status | `APPROVED_PRD_V0.3` |
| Verification Status | `FACT_EVIDENCE_REQUIRED` |
| Playbook 状态 | `MISSING / REVIEW_REQUIRED`；登记册指定的 `docs/page-playbooks/ABOUT_CONTACT_PLAYBOOK_V0.1.md` 当前不存在 |
| 本版变更摘要 | 继承 V0.1；登记 2026-09-01 用户批准，将 `mytio2.com` 升级为 ABOUT-001 可用的一方来源；按站内实际可见字段解冻，保留限定语、来源和更新时间；站内未出现的法定字段、ISO 与批次追溯仍冻结；视觉固定采用无工厂图片方案；未进入 Gate 2–5。 |

本任务卡只覆盖 ABOUT-001 `/about/`。它不授权 Contact、Documents、Home、Markets、Products、Applications、Resources、Conversion 或其他页面成果；不授权 Gate 6–10、开发交付、WordPress、Next.js、CMS、代码、测试、分支、部署、DNS、索引或发布；不得操作 `D:\16Wordpress_nextjs`。

## 1. 页面身份

| 字段 | 记录值 |
|---|---|
| Page ID | `ABOUT-001` |
| Section | `ABOUT` |
| Page Name | About TiO2 Malaysia |
| URL | `/about/`；登记册与主表一致，非 provisional |
| Page Type | `Trust / company page` |
| Playbook Key | `ABOUT_CONTACT` |
| Market | `GLOBAL` |
| Language | `EN` |
| Priority | `P1` |
| Planned Domain | `https://tio2malaysia.com` |
| Site Scope | `tio2-my`；仅作为未来外部开发隔离要求，本任务不实现 |
| External Development Workspace | `D:\16Wordpress_nextjs`；本任务禁止访问或操作 |
| Canonical URL | `https://tio2malaysia.com/about/` 方向值；目标域名和 route 未验证 live，发布前必须复核 |
| Indexing Intent | `DECISION_REQUIRED`；Gate 2 建议方向可评估 `INDEX, FOLLOW`，但在事实密度和独有内容足够前不得锁定 |

## 2. 权威输入

| 顺序 | 资料 | 路径或来源 | 本页用途 | 状态 |
|---:|---|---|---|---|
| 1 | 当前来源任务 | 2026-08-30 ABOUT-001 明确任务 | 页面范围、Gate 0/1 先审、逐项事实核验、Global Chrome V0.2、状态覆盖与禁止范围 | 当前最高页面执行输入 |
| 2 | 根项目治理 | `AGENTS.md`、`00_PROJECT_STATUS.md`、`01_PROJECT_INDEX.md` | 范围、Gate、事实、页面 owner 和发布边界 | 已核对；状态/索引仍有 V0.1 Global Chrome 旧引用，见审查问题 |
| 3 | 页面登记册 | `docs/architecture/PAGE_REGISTRY_V0.1.md` | Page ID、URL、Page Type、P1、Mapping、Verification、Playbook Key | 当前登记册 |
| 4 | 最新 PRD | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | About 内容最低要求、Origin 归属、导航与 owner 边界 | 当前已确认架构基线 |
| 5 | 页面—关键词主表 | `research/keyword/11_page_keyword_master.csv` 中 ABOUT-001 行 | Primary、Secondary、Intent、Buyer Stage、Role、Excluded、Cannibalization | 当前实施主表 |
| 6 | 页面类型 Playbook | `docs/page-playbooks/ABOUT_CONTACT_PLAYBOOK_V0.1.md` | About/Contact 同类页面标准 | `MISSING`；阻止正式 Gate 2 准入 |
| 7 | 页面任务卡模板 | `docs/page-briefs/PAGE_BRIEF_TEMPLATE.md` | 本任务卡结构与 Gate 记录 | V0.2 当前模板 |
| 8 | Global Chrome V0.2 | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.2.md`、`GLOBAL_HEADER_FOOTER_CROSS_PAGE_REVIEW_V0.2.md` | 固定导航、84/64px、Deep Navy Footer、固定 RFQ、发布阻塞合同 | `APPROVED_GLOBAL_CHROME_BASELINE` / `APPROVED / CLOSED` |
| 9 | Home shared V0.2 状态板 | `pages/home/04_planning/07_global_header_footer_component_states_v0.2.md` 及 V0.2 PNG | Desktop/Mobile Header、Mobile Menu、Footer、focus、44px、current 状态 | `APPROVED / CLOSED` |
| 10 | 视觉标准 | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md` | 品牌、色彩、字体、卡片、图片、证据视觉和工业 B2B 方向 | Approved Visual Direction |
| 11 | 本页 Gate 0/1 审计 | `pages/about-contact/01_research/ABOUT-001_GATE0_GATE1_COMPLIANCE_EVIDENCE_AUDIT_V0.2.md` | 公司、制造、origin、质量、追溯、出口、Schema 和渲染门禁 | `SUBMITTED_FOR_GATE_0_GATE_1_REVIEW` |
| 12 | 用户批准的一方公开站点 | `mytio2.com` 的 Home/About/Documents/Contact；2026-09-01 复核 | 主体、Taiping manufacturing site、Malaysia manufacturing/origin、年度供应、出口覆盖、客户数、包装、质量控制、REACH/FDA-related documents、Port Klang 与 FCL/LCL | `USER_APPROVED_FIRST_PARTY_SOURCE_FOR_ABOUT`；必须改写、标注 company-provided/来源日期/适用范围，不得声称独立核验，不得复制正文或结构 |
| 13 | SSM 官方公司资料说明 | `ssm.com.my` e-Info / Company Information；2026-08-30 核对 | 定义公司名称、注册号、状态、地址、业务性质的合格核验路径 | `AUTHORITATIVE_VERIFICATION_ROUTE_IDENTIFIED`；未取得本公司的正式档案 |
| 14 | 本地关键词原始证据 | `research/keyword/01_keyword_master.csv` 与 `raw/serp/.../malaysia_titanium_dioxide_supplier/` | 证明 manufacturer/origin/traceability 词组的定性意图与数字缺口 | `QUALITATIVE_KEYWORD_EVIDENCE`；不证明公司事实 |

### 2.1 输入冲突与审查问题

| Review ID | 内容 | 影响 | 当前处理 | 关闭要求 |
|---|---|---|---|---|
| `ABOUT-R001` | `ABOUT_CONTACT_PLAYBOOK_V0.1.md` 不存在 | 正式 Gate 2 准入 | Gate 0/1 仅提交草案；不宣称页面类型方案获批 | 总控/用户批准 Playbook，或明确批准 ABOUT-001 页面专属例外 |
| `ABOUT-R002` | 未取得 SSM Company Profile/ACGS，且 `mytio2.com` 未公开注册号、公司状态、成立日期、业务性质或明确的注册地址类型 | Organization/法定公司事实 | 运营主体全称可按项目基线与用户批准的一方来源呈现；缺失法定字段继续 `DO_NOT_RENDER`，不得声称 SSM/第三方已核验 | 未来如需发布这些法定字段，仍须提供包含实际值的批准资料 |
| `ABOUT-R003` | 用户于 2026-09-01 批准 `mytio2.com` 作为 ABOUT-001 指定能力的一方来源 | 本页核心信任叙事 | 站内实际可见的 Taiping manufacturing site、Malaysia manufacturing/origin、年度供应、30+ 国家、200+ 客户、包装、质量控制、REACH/FDA-related documents、Port Klang 与 FCL/LCL 可带一方来源限定呈现；不得改写为独立认证、保证或未经站内支持的事实 | `CLOSED_FOR_APPROVED_FIRST_PARTY_USE`；具体措辞仍须 Gate 2 审查 |
| `ABOUT-R004` | `mytio2.com` 将 Taiping 地址标为 Manufacturing Site，但未说明其为 SSM registered address、office 或 visitor address | 地址、地图、Organization Schema | 可按一方来源呈现为 Taiping manufacturing site；不得标为 registered office/visitor address，不提供 directions 或地图推断 | 如需改变地址类型，须提供相应批准资料 |
| `ABOUT-R005` | 用户明确不需要工厂、生产线、仓库、装柜、证书或团队图片 | Gate 3–5 视觉 | `RESOLVED_BY_SCOPE`；全页采用无此类图片的文字、数据、来源行与实体关系设计；仍禁止生成图、图库图、工厂图标和认证徽章暗示能力 | 无需补图；若未来新增图片，另行核验来源与授权 |
| `ABOUT-R006` | `00_PROJECT_STATUS.md`、`01_PROJECT_INDEX.md` 仍有 Global Chrome V0.1 旧引用 | Header/Footer/RFQ | 本页按更高优先级当前任务和已批准 V0.2 执行；不修改全局文档 | 总控在独立治理任务同步；不阻塞本页 Gate 0/1 |
| `ABOUT-R007` | `/request-a-quote/`、Documents、Contact 等 route 未验证 live | CTA 与发布 | Global Chrome RFQ 永久显示；false 只形成 `RELEASE_BLOCKER`。Body links 后续逐 route 验证 | 独立 owner 页面/工作流与 route health 通过 |

## 3. Gate 0 页面策略合同

### 3.1 目标采购商

| 字段 | 记录值 |
|---|---|
| 主要买家角色 | 国际 B2B 采购、技术采购、供应链、质量、合规与供应商审核人员 |
| 次要买家角色 | 经销/进口合作方、现有客户、管理层与风险审查人员 |
| 所在市场 | GLOBAL；重点服务 EU、UK、India、Brazil 的采购评估 |
| 行业与应用 | 工业 TiO2 原材料采购；本页不负责型号或应用选型 |
| 采购阶段 | Technical Evaluation / Supplier Due Diligence |
| 主要顾虑 | 品牌与运营主体是否真实；制造与原产地是否可证明；批次和文件是否可追溯；质量与出口支持是否有边界；页面是否把营销声明伪装成证据 |
| 需要完成的判断 | 哪些实体关系已确认、哪些能力有证据、哪些字段仍受限，以及下一步应向 Documents、Contact 或 RFQ owner 核验什么 |
| 页面访问后的理想下一步 | 进入 Documents 了解受控文件路径、进入 Contact 核实一般公司事项，或进入 RFQ 提交采购上下文；均受对应 route 状态约束 |

### 3.2 页面职责

| 项目 | 记录值 |
|---|---|
| 一句话页面职责 | 用可追溯、可限定、可更新的事实说明 TiO2 Malaysia、运营主体及 Malaysia origin/制造/质量/批次/出口协作关系，并清楚标出尚未证实的边界 |
| 必须解决的核心问题 | TiO2 Malaysia 是什么；谁在运营；manufacturer/origin 主张如何核验；质量、批次和出口协作证据如何理解；文件与联系下一步在哪里 |
| 对全站采购路径的贡献 | 承接 manufacturer/origin/traceability 的信任与证明意图，连接 Home 的商业定位、Documents 的文件管理、Contact 的联系工具和 RFQ 的采购行动 |
| 主转化目标 | 让买家完成公司与来源信任评估，并进入正确的证据或询价 owner |
| 次转化目标 | 在有证据时查看来源/更新时间；在受限时理解未渲染原因而不被误导 |
| 页面成功信号 | 事实块有来源/日期/范围；冻结字段零泄漏；Documents/Contact/RFQ 路径正确；无 Home/Contact/Documents 内耗 |

### 3.3 明确不负责

| 排除事项 | 原因 | 正确承接 Page ID | 正确承接 URL |
|---|---|---|---|
| broad Malaysia supplier proposition | Home 是广泛 supplier owner | HOME-001 | `/` |
| destination-market supplier intent | Market 页面按国家/区域承接 | MARKET-* | 对应批准 Market URL |
| TDS/SDS/COA/COO/REACH 详细说明、下载或申请 | Documents/Request Documents 是 owner | DOC-* / CONV-DOC | `/documents/` / `/request-documents/` |
| 一般公司联系方式与渠道 | Contact 是工具页 owner | CONTACT-001 | `/contact/` |
| 报价、数量、价格、包装条件、交期 | RFQ 是行动 owner | CONV-RFQ | `/request-a-quote/` |
| 产品指标、型号比较和应用推荐 | Products/Applications 是 owner | PRODUCT-* / APP-* | 对应批准 URL |
| Trade/anti-dumping 事实与分析 | Resources 是 owner | RES-TRADE-* | 对应批准/规划 URL |
| “规避关税”“完全合规”“完全等同”“保证交期” | 违反项目事实和表达边界 | `NOT_ALLOWED` | 不建设、不渲染 |

## 4. SEO、GEO 与搜索意图合同

| 字段 | 记录值 |
|---|---|
| Primary Keyword | `malaysia titanium dioxide manufacturer` |
| Secondary Keywords | `malaysia origin titanium dioxide | malaysia-origin titanium dioxide | made in malaysia titanium dioxide | titanium dioxide manufactured in malaysia | malaysia titanium dioxide country of origin | titanium dioxide traceability malaysia` |
| Search Intent | 主表为 `I`；Technical Evaluation。原关键词研究把 exact manufacturer 词记为 `C`，本页实施映射以主表/PRD 为准，见审计限定 |
| Buyer Stage | `Technical Evaluation` |
| Source Cluster | `ORIGIN-01` |
| Page Role | `Prove operating entity, Malaysia manufacturing/origin, quality, traceability, and export support.`；其中 prove 只允许由逐项证据完成 |
| Excluded Keywords | `broad supplier search | destination-market supplier terms | RFQ terms` |
| Cannibalization Boundary | About owns evidence and corporate trust; Home owns broad commercial Malaysia supply intent; Documents owns document requests. |
| H1 / Title / Meta | `PENDING_GATE_2`；不得在证据不足时把 primary keyword 写成无条件制造商事实 |
| Canonical | `https://tio2malaysia.com/about/` 方向；route 未验证 live |
| Hreflang | `NOT_APPLICABLE`；未来变化需变更控制 |
| Robots | `DECISION_REQUIRED`；事实密度和独有内容不足时不得为了主关键词强制 INDEX |

### 4.1 GEO / Organization Schema 边界

- Primary Entity：`TiO2 Malaysia` 品牌；Related Entity 候选为 `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.`，只表达项目批准的运营关系。
- `Organization` Schema 的名称、URL、logo、legalName、address、foundingDate、location、sameAs、contactPoint、certification、numberOfEmployees 等字段必须逐项与可见内容一致；不存在“Schema 可先写、页面暂不写”的例外。
- 运营主体全称及品牌—运营关系可进入可见文本。`legalName` 是否进入 Schema 留待 Gate 2 做可见一致性复核；注册号、公司状态、成立日期、业务性质和“注册地址”仍不渲染，因为 `mytio2.com` 没有提供这些实际字段。
- 用户批准的一方站点实际公开的 manufacturing location、Malaysia manufacturing/origin、年度供应、包装、质量控制、REACH/FDA-related documents、出口覆盖、客户数、Port Klang 与 FCL/LCL 可作为 company-provided claims 使用；必须限定来源、抓取日期与适用范围，不得暗示独立验证。
- `>35,000 metric tons` 优先写为站内一致支持的“annual supply / supplied annually”，不得擅自升级为经审计生产 capacity；质量控制不得扩写为认证 QMS；REACH/FDA 不得显示公司认证 badge；ISO 与 batch traceability 因站内未找到支持内容而继续冻结。
- Answer-ready Blocks 必须携带来源、资料日期、适用范围和验证状态；仍受限的事实单元省略，不显示假 badge。

## 5. Gate 1 事实与证据门禁

完整审计见 `pages/about-contact/01_research/ABOUT-001_GATE0_GATE1_COMPLIANCE_EVIDENCE_AUDIT_V0.2.md`。

| 字段/关系 | 当前状态 | Gate 1 渲染决定 | 不阻塞工作 |
|---|---|---|---|
| TiO2 Malaysia 品牌 | `VERIFIED_PROJECT_IDENTITY` | `RENDER` | 获准后的内容架构与受限视觉 |
| 运营主体完整名称 | `VERIFIED_PROJECT_BASELINE / OFFICIAL_REGISTRY_PENDING` | `RENDER_WITH_QUALIFIER`；只表达运营关系 | 长公司名称布局、实体关系说明 |
| SSM 注册号、状态、注册地址、成立日期、业务性质 | `NOT_PRESENT_ON_APPROVED_SOURCE / NO_OFFICIAL_PROFILE_OBTAINED` | `DO_NOT_RENDER` | 无注册事实状态 |
| Taiping 地址/制造地点 | `USER_APPROVED_FIRST_PARTY_CLAIM` | `RENDER_WITH_SOURCE_QUALIFIER`；仅称 Taiping manufacturing site | 无地图、访客或注册地址推断 |
| Malaysia manufacturing / made in Malaysia | `USER_APPROVED_FIRST_PARTY_CLAIM` | `RENDER_WITH_SOURCE_QUALIFIER` | 不暗示独立核验 |
| Malaysia country of origin / COO | `USER_APPROVED_FIRST_PARTY_CLAIM / DOCUMENTS_OWNER` | 可表达 company-stated Malaysia origin；COO 文件详情和申请仍交给 Documents | Documents 关系设计 |
| >35,000 t/y annual supply、30+ 国家、200+ 客户 | `USER_APPROVED_FIRST_PARTY_SCALE_CLAIMS` | `RENDER_WITH_SOURCE_DATE_AND_METRIC_LABEL` | 不写经审计产能；保留 `more than`/`30+`/`200+` 口径 |
| 25kg / pallet / big bag | `USER_APPROVED_FIRST_PARTY_CLAIM` | `RENDER_WITH_APPLICABILITY_QUALIFIER`；依 grade/shipment requirements | 不作为所有订单保证 |
| 质量控制/质量体系 | `USER_APPROVED_FIRST_PARTY_QUALITY_CONTROL_CLAIM / QMS_NOT_PROVEN` | 可限定呈现 quality control；不得写 audited/certified QMS | 中性质量证据框架 |
| ISO/REACH/FDA | `ISO_NOT_PRESENT / REACH_FDA_RELATED_DOCUMENTS_USER_APPROVED` | ISO `DO_NOT_RENDER`；REACH/FDA 只可作为按 grade/market 适用的文件支持说明，禁止认证 badge | 文件详情和申请移交 Documents owner |
| 批次追溯 | `NOT_FOUND_ON_APPROVED_SOURCE` | `DO_NOT_RENDER` | 中性买家核验框架，不声称已有追溯系统 |
| Port Klang / FCL / LCL /出口市场 | `USER_APPROVED_FIRST_PARTY_CLAIM` | `RENDER_WITH_SCOPE_QUALIFIER`；仅表达出口协调/装运方式能力，不保证路线、舱位或交期 | 无港口/集装箱图片 |
| 工厂/生产线/仓库/装柜/证书/团队图片 | `NOT_REQUIRED_BY_USER` | `DO_NOT_RENDER / NO_EMPTY_MEDIA_SLOT` | 采用文字、数据、来源和实体关系布局 |

## 6. 后续 Gate 覆盖要求（当前未进入）

| Gate | 本任务卡当前记录 | 获准后必须覆盖 |
|---|---|---|
| Gate 2 | `NOT_STARTED / NOT_AUTHORIZED` | 使用用户批准的一方事实建立分级叙事、H1/Title/Meta、Answer-ready Blocks、来源/更新时间、CTA/内链、Organization Schema 可见一致性；站内未出现字段不得补写 |
| Gate 3 | `NOT_STARTED / NOT_AUTHORIZED` | Desktop 与 390px 线框、Header 当前态、Mobile Menu、证据充足/部分/受限三种内容状态、长公司名称、无工厂图片、时间线或流程、focus 顺序 |
| Gate 4 | `NOT_STARTED / NOT_AUTHORIZED` | 继承 Visual Standard 与 Home shared V0.2；优先证据卡、来源行和克制的流程表达；禁用工厂/认证/港口暗示性视觉 |
| Gate 5 | `NOT_STARTED / NOT_AUTHORIZED` | Desktop/390px Buyer Clean、Mobile Menu Open、hover/focus、Desktop/Mobile Footer、受限状态、长内容、来源/更新时间、无横向溢出、≥44px |
| Gate 6–10 | `OUT_OF_SCOPE / PROHIBITED` | 当前任务明确禁止 |

### 6.1 证据状态模型

| 状态 | 公开呈现规则 |
|---|---|
| `EVIDENCE_SUFFICIENT` | 事实块显示批准事实、来源、资料日期、适用范围和必要限定；Schema 与可见内容一致 |
| `EVIDENCE_PARTIAL` | 只显示已验证子字段，并显式限定范围；不补全缺失数字、地点、能力或证书 |
| `EVIDENCE_RESTRICTED` | 删除事实、图标、图片、ALT、Meta、Schema 与依赖 CTA；可保留不作能力暗示的“how evidence is reviewed”中性流程或整块省略 |

## 7. CTA、内链与 Global Chrome 边界

| 关系 | Owner | URL | ABOUT-001 当前合同 |
|---|---|---|---|
| broad Malaysia supplier | HOME-001 | `/` | About 不复制商业 Hero；可从 Home 入站 |
| company documents / origin records | DOC-000 / DOC-COO / CONV-DOC | `/documents/` 等 | 只说明正确 owner；route/内容/事实未通过时不承诺文件或下载 |
| general contact | CONTACT-001 | `/contact/` | 只作一般联系路径；Contact 事实字段独立受限 |
| quotation | CONV-RFQ | `/request-a-quote/` | Global Chrome 永久显示；Body CTA 获准后可使用明确采购上下文 |
| products / applications / markets | 对应 owner | 对应登记 URL | 只在相关叙事需要且 route 可用时链接，不扩写其事实 |

Global Chrome 必须直接继承：Desktop Header 84px；Mobile Header 64px，`Logo | RFQ | Menu`；导航顺序固定；About 使用 Bold + `CURRENT` + Teal underline/左侧结构标记；Desktop/Mobile Header、Mobile Menu、Desktop/Mobile Footer 的 RFQ 永久显示并统一指向 `/request-a-quote/`；Footer 为 Deep Navy；390px 触控目标不低于 44px。`RFQ_ROUTE_READY=false` 只能形成 `RELEASE_BLOCKER`，不得出现 RFQ OFF、hidden、disabled、empty slot 或 Contact fallback。

## 8. Gate 状态与审查请求

| Gate | 交付物 | 提交日期 | 当前结论 | 用户批准 | 备注 |
|---|---|---|---|---|---|
| Gate 0 | ABOUT-001 Brief V0.2 | 2026-09-01 | `SUBMITTED_FOR_GATE_0_REVIEW` | `PENDING` | 页面身份与边界一致；Playbook 缺失仍阻塞正式 Gate 2 |
| Gate 1 | Gate 0/1 合规与证据审计 V0.2 | 2026-09-01 | `SUBMITTED_FOR_GATE_1_REVIEW` | `PARTIAL_USER_DECISION_RECORDED` | 用户批准 `mytio2.com` 作为指定一方事实来源并确认无需能力图片；Gate 1 整体仍待总控/用户批准 |
| Gate 2–5 | 内容架构、线框、视觉方向、完整视觉 | — | `NOT_STARTED / NOT_AUTHORIZED` | `PENDING` | 等待明确批准边界 |
| Gate 6–10 | Review/Handoff/Development/QA/Release | — | `OUT_OF_SCOPE / PROHIBITED` | `NOT_APPLICABLE` | 当前任务明确禁止 |

总控/用户需要决定：

1. 是否批准 ABOUT-001 Gate 0 页面身份、SEO owner 和邻页边界。
2. 是否批准 Gate 1 V0.2 的分级：`mytio2.com` 实际公开且在用户列举范围内的事实可作 company-provided claim；站内未出现的法定字段、ISO 和批次追溯继续冻结。
3. 是否先建立并批准 `ABOUT_CONTACT_PLAYBOOK_V0.1.md`，或为 ABOUT-001 明确批准页面专属准入例外。
4. 是否授权 Gate 2–5 在上述一方事实限定、冻结字段不渲染、固定无能力图片与三种证据状态覆盖的前提下继续。
5. 如需补充当前来源未出现的注册号、公司状态、成立日期、业务性质、registered address、ISO 或 batch traceability，谁负责提供并批准相应资料。
