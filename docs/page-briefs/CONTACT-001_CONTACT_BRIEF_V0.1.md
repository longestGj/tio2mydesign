# Contact Page Brief V0.1

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| 文档名称 | Contact Page Brief |
| Page ID | `CONTACT-001` |
| Brief 版本 | `V0.1` |
| 创建日期 | `2026-08-30` |
| 最后更新日期 | `2026-08-30` |
| 页面负责人 | CONTACT-001 页面执行任务 |
| 总控审核人 | 项目总控与质量审查 |
| 用户批准记录 | 当前用户任务授权先完成 CONTACT-001 Gate 0/1 合规审计并提交审查；尚未批准 Gate 0、Gate 1 或后续 Gate |
| 页面生命周期 | `BRIEF_IN_REVIEW` |
| Mapping Status | `PLANNED_UTILITY` |
| Verification Status | `CONTACT_DETAILS_REQUIRED` |
| Playbook 状态 | `MISSING / REVIEW_REQUIRED`；登记册指定的 `docs/page-playbooks/ABOUT_CONTACT_PLAYBOOK_V0.1.md` 当前不存在 |
| 本版变更摘要 | 建立页面身份、SEO 边界、事实冻结、Global Chrome 继承、转化路径和 Gate 0/1 审查合同；未进入 Gate 2–5 |

本任务卡仅处理 CONTACT-001 `/contact/`。它不授权 About、RFQ、Sample、Request Documents 或其他页面成果，不授权 Gate 2–10，不授权开发交付、WordPress、Next.js、CMS、代码、测试、部署、DNS、索引或发布，也不得操作 `D:\16Wordpress_nextjs`。

## 1. 页面身份

| 字段 | 记录值 |
|---|---|
| Page ID | `CONTACT-001` |
| Section | `ABOUT` |
| Page Name | Contact |
| URL | `/contact/`；登记册与主表一致 |
| Page Type | `Utility contact page` |
| Playbook Key | `ABOUT_CONTACT` |
| Market | `GLOBAL` |
| Language | `EN` |
| Priority | `P1` |
| Planned Domain | `https://tio2malaysia.com` |
| Site Scope | `tio2-my`；仅作为未来外部开发隔离要求，本任务不实现 |
| External Development Workspace | `D:\16Wordpress_nextjs`；本任务禁止访问或操作 |
| Canonical URL | `https://tio2malaysia.com/contact/` 方向值；目标域名和 route 未验证 live，发布前必须复核 |
| Indexing Intent | `DECISION_REQUIRED`；工具页无主关键词，Gate 2 SEO 审查前不得自行锁定 INDEX/NOINDEX |

## 2. 权威输入

| 顺序 | 资料 | 路径或来源 | 本页用途 | 状态 |
|---:|---|---|---|---|
| 1 | 用户当前任务 | 2026-08-30 CONTACT-001 明确任务 | 页面范围、Gate 0/1 先审、事实冻结、状态覆盖、Global Chrome V0.2、禁止范围 | 当前最高页面执行输入 |
| 2 | 根项目治理 | `AGENTS.md`、`00_PROJECT_STATUS.md`、`01_PROJECT_INDEX.md` | 范围、Gate、事实、导航和发布边界 | 已核对；状态/索引仍引用 Global Chrome V0.1，见冲突记录 |
| 3 | 页面登记册 | `docs/architecture/PAGE_REGISTRY_V0.1.md` | Page ID、URL、Page Type、P1、Mapping、Verification、Playbook Key | 当前登记册 |
| 4 | 最新 PRD | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | Contact 工具页、无主关键词、导航与 Conversion owner 边界 | 已确认架构基线 |
| 5 | 页面—关键词主表 | `research/keyword/11_page_keyword_master.csv` 中 CONTACT-001 行 | SEO、搜索意图、页面角色、排除词和内耗边界 | 当前实施主表 |
| 6 | 页面类型 Playbook | `docs/page-playbooks/ABOUT_CONTACT_PLAYBOOK_V0.1.md` | About/Contact 同类页面标准 | `MISSING`；阻止把本草案描述为批准页面类型方案 |
| 7 | 页面任务卡模板 | `docs/page-briefs/PAGE_BRIEF_TEMPLATE.md` | 本任务卡结构与 Gate 记录 | V0.2 当前模板 |
| 8 | Global Chrome 书面基线 | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` | 固定导航、84/64px、Deep Navy Footer、固定 RFQ、route release blocker | `APPROVED_GLOBAL_CHROME_BASELINE` |
| 9 | Global Chrome 跨页复审 | `docs/architecture/GLOBAL_HEADER_FOOTER_CROSS_PAGE_REVIEW_V0.2.md` | V0.2 26 张资产及固定 RFQ 跨页批准结论 | `APPROVED / CLOSED` |
| 10 | Home shared V0.2 状态板 | `pages/home/04_planning/07_global_header_footer_component_states_v0.2.md` 及两张 V0.2 PNG | Desktop/Mobile Header、Menu、Footer、focus、44px 与当前项结构 | `APPROVED / CLOSED` |
| 11 | Home 完整视觉基线 | `pages/home/04_planning/05_homepage_full_visual_design_v0.5.md` | 品牌、全页节奏、Buyer Clean 与 fixed-RFQ Chrome | `APPROVED / CLOSED`；只作继承参考 |
| 12 | 视觉标准 | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md` | 品牌、色彩、字体、卡片、表单、图片和工业 B2B 方向 | Approved Visual Direction |
| 13 | CONTACT-001 Gate 1 审计 | `pages/contact/01_research/CONTACT-001_GATE0_GATE1_COMPLIANCE_EVIDENCE_AUDIT_V0.1.md` | 联系资料、route、事实和渲染门禁 | `SUBMITTED_FOR_GATE_0_GATE_1_REVIEW` |
| 14 | 当前一方公开站点候选资料 | `https://www.mytio2.com/contact/`；2026-08-30 抓取复核 | 运营主体、地址及角色邮箱候选交叉核对 | `CANDIDATE_ONLY / NOT_APPROVED_FOR_NEW_SITE_RENDER` |

### 2.1 输入冲突与审查问题

| Conflict / Review ID | 内容 | 影响 | 当前处理 | 决定要求 |
|---|---|---|---|---|
| `CONTACT-C001` | 登记册指定的 `ABOUT_CONTACT_PLAYBOOK_V0.1.md` 不存在 | 页面类型标准和正式设计准入 | Gate 0/1 仅提交草案；不得宣称 Playbook 或页面方案已批准 | 总控/用户需批准 Playbook 或明确页面专属例外后才能进入 Gate 2 |
| `CONTACT-C002` | `00_PROJECT_STATUS.md`、`01_PROJECT_INDEX.md` 仍引用 Global Chrome V0.1，而当前用户任务与 V0.2 规范明确要求 V0.2 | Header/Footer/RFQ 合同 | 本页按更高优先级当前用户决定和已批准 V0.2 执行；不修改全局文档 | 总控后续同步项目状态/索引；不阻塞本页 Gate 0/1 |
| `CONTACT-C003` | 规划邮箱 `contact@tio2malaysia.com` 尚未验证；当前一方站点仅公开 `@mytio2.com` 角色邮箱 | Email、mailto、success/error fallback | 所有邮箱 `DO_NOT_RENDER`；不跨域替换、不猜测 | 需域名邮箱所有权、收件、责任人与公开批准证据 |
| `CONTACT-C004` | 当前一方站点公开地址，但项目没有公司注册/内部批准证据证明其可用于 TiO2 Malaysia Contact 页 | 地址和地图 | `DO_NOT_RENDER`；不得把制造地点自动写成注册地址、办公室或访客地址 | 需一方公司文件或用户逐字批准公开地址及其类型 |
| `CONTACT-C005` | 没有经本项目验证的电话或 WhatsApp | 电话和即时通讯入口 | `DO_NOT_RENDER`；无空卡、占位或假格式 | 需号码所有权、用途、时区、负责人和公开批准 |
| `CONTACT-C006` | Contact 不在批准 Header 一级导航中，Mobile Menu 无 Contact 行，因此没有自然的一级 current item | Desktop/Mobile current state | Gate 0/1 暂记：不新增 Contact；Breadcrumb/页面 H1 负责身份；Header/Menu 不伪造 current 项 | Gate 3 前由总控确认“无一级 current 项”状态；不得把 About 标成 Contact current |
| `CONTACT-C007` | V0.2 Footer 只有 Contact route approved 且 live 才可把 Contact 作为普通 Information 链接；当前 route 未验证 live | Gate 5 Footer 视觉 | 继承当前批准 Footer，不新增 Contact；Contact 永不替代 RFQ | Gate 5 前复核 route 状态；若仍未验证，Footer 保持无 Contact |
| `CONTACT-C008` | 用户要求 Contact 表单状态，但收件目标、处理责任、隐私文案、保存与失败渠道未批准 | Gate 2 内容、Gate 5 表单状态 | Gate 0/1 只登记最少收集与状态合同；不声明 live 或响应时间 | Gate 2 前需批准字段、处理路径与最小隐私说明 |
| `CONTACT-C009` | `/request-a-quote/`、`/request-sample/`、`/request-documents/` 均在登记册中，但仍是 `PLANNED_CONVERSION`，未验证 live | Body 路径与发布 | 可作为已登记目标的视觉/信息架构方向；发布前逐 route 验证。RFQ 全局始终可见；false 只形成 `RELEASE_BLOCKER` | 后续独立 Conversion 任务与发布验收负责；Contact 不能成为 fallback |

## 3. Gate 0 页面策略合同

### 3.1 目标采购商

| 字段 | 记录值 |
|---|---|
| 主要买家角色 | 国际 B2B 采购、技术采购、供应链、质量/文件协调人员 |
| 次要买家角色 | 已有往来客户、合作伙伴、公司或媒体的一般联系人员 |
| 所在市场 | GLOBAL；重点服务 EU、UK、India、Brazil 的国际采购沟通 |
| 行业与应用 | TiO2 工业原材料采购相关；本页不负责应用选型 |
| 采购阶段 | Contact / Navigation；需要把商业、样品和文件意图转向各自 Conversion owner |
| 需要完成的判断 | 这是一般联系页；我的事项是否应转到 RFQ、Sample 或 Request Documents；当前可用且已核实的联系渠道是什么 |
| 页面访问后的理想下一步 | 使用已验证的一般联系入口，或进入正确的专用 Conversion 页面 |

### 3.2 页面职责

| 项目 | 记录值 |
|---|---|
| 一句话页面职责 | 为国际 B2B 访问者提供可核验的一般联系入口，并清楚区分一般联系、询价、样品和文件申请路径 |
| 必须解决的核心问题 | 联系主体是谁；哪些公开渠道已验证；不同请求应去哪里；受限字段缺失时页面如何保持清楚且诚实 |
| 对全站采购路径的贡献 | 承接一般联系，不接管 Conversion 页面；避免商业请求进入不完整的通用表单 |
| 主转化目标 | 提交最少必要信息的一般联系请求（仅在表单处理合同获批后） |
| 次转化目标 | 把 RFQ、Sample、Documents 意图导向各自稳定 URL |
| 页面成功信号 | 路径选择正确、表单最少收集、无无效联系方式、无 Contact-as-RFQ-fallback |

### 3.3 明确不负责

| 排除事项 | 原因 | 正确承接 Page ID | 正确承接 URL |
|---|---|---|---|
| Supplier / manufacturer 商业关键词 | Contact 是工具页，不能侵占 Home、About、Market | HOME-001 / ABOUT-001 / MARKET-* | 对应批准 URL |
| 产品或型号选型 | Product owner 职责 | PRODUCT-000 / GRADE-* | `/products/` 及批准型号 URL |
| 应用选择 | Application owner 职责 | APP-* | 对应批准/暂定 Application URL |
| 正式询价、价格、数量、包装 | RFQ owner 职责 | CONV-RFQ | `/request-a-quote/` |
| 样品资格与申请 | Sample owner 职责 | CONV-SAMPLE | `/request-sample/` |
| TDS/SDS/COA/COO 等文件申请 | Request Documents owner 职责 | CONV-DOC | `/request-documents/` |
| 文件/合规解释 | Documents owner 职责 | DOC-* | `/documents/` 及对应批准 URL |
| 公司制造、原产地、追溯的深层证明 | About/Documents owner 职责 | ABOUT-001 / DOC-COO | `/about/` / `/documents/certificate-of-origin/` |
| RFQ 失败回退 | V0.2 明确禁止 Contact fallback | CONV-RFQ | RFQ route 不可用即 `RELEASE_BLOCKER` |

## 4. SEO、GEO 与搜索意图合同

| 字段 | 记录值 |
|---|---|
| Primary Keyword | `NO_PRIMARY_KEYWORD` |
| Secondary Keywords | `contact TiO2 Malaysia | contact IKHLAS Titanium`；仅作导航语义，不升级为商业获取词 |
| Search Intent | `N`；Contact/navigation |
| Buyer Stage | `Contact` |
| Source Cluster | `N/A` |
| Page Role | `Provide verified company contact channels and route commercial users to RFQ.` |
| Excluded Keywords | `supplier | product | application | document primary terms` |
| Cannibalization Boundary | Contact 是工具页，不作为商业 supplier 落地页；RFQ/Sample/Documents 各自拥有专用转化职责 |
| H1 / Title / Meta | `PENDING_GATE_2`；必须保持一般联系工具意图，不堆砌 supplier/manufacturer/product/application/document 词 |
| Canonical | `https://tio2malaysia.com/contact/` 方向；route 与域名未验证 live |
| Hreflang | `NOT_APPLICABLE`；未来变化需变更控制 |
| Robots | `DECISION_REQUIRED`；Gate 2 SEO 审查与发布前复核 |

### 4.1 GEO / Schema 方向

- Primary Entity 仅可使用已批准品牌 `TiO2 Malaysia` 与已批准运营主体名称。
- 地址、电话、Email、Office/Factory/Registered Address 类型及 `ContactPoint` 关系只有通过 Claim Register 后才能进入可见内容、Meta、ALT、Open Graph 或 Schema。
- Gate 2 前不得锁定 `Organization`、`ContactPage`、`ContactPoint`、`PostalAddress` 或 telephone/email 字段。
- 不得因一方旧站公开值就推断新站的渠道所有权、响应时间、可访问地址或 24/7 服务。

## 5. Gate 1 事实与证据门禁

完整审计见：`pages/contact/01_research/CONTACT-001_GATE0_GATE1_COMPLIANCE_EVIDENCE_AUDIT_V0.1.md`。

| 字段/关系 | 当前状态 | Gate 1 渲染决定 | 不阻塞工作 |
|---|---|---|---|
| TiO2 Malaysia 品牌 | `VERIFIED_PROJECT_IDENTITY` | `RENDER` | Gate 2–5 草案（获准后） |
| 运营主体名称 | `VERIFIED_PROJECT_BASELINE` | `RENDER` | Gate 2–5 草案（获准后） |
| `/contact/` 页面身份 | `VERIFIED_ARCHITECTURE` | `RENDER_AS_DESIGN_IDENTITY`；不代表 route live | Gate 2–5 草案（获准后） |
| 地址 | `CONTACT_DETAILS_REQUIRED` | `DO_NOT_RENDER` | 无地址受限状态、表单和路径结构 |
| `contact@tio2malaysia.com` | `PLANNED / NOT_VERIFIED` | `DO_NOT_RENDER` | Email 缺失受限状态 |
| `@mytio2.com` 角色邮箱 | `CURRENT_PUBLIC_CANDIDATE / CROSS-DOMAIN_NOT_APPROVED` | `DO_NOT_RENDER` | 只作证据候选，不进入新站 |
| 电话 / WhatsApp | `NO_VERIFIED_VALUE` | `DO_NOT_RENDER` | 无电话受限状态 |
| 一般联系表单 | `PROCESS_AND_PRIVACY_APPROVAL_REQUIRED` | Gate 5 可在获准后设计为非生产视觉；不得声称 live | 表单状态规范草案 |
| RFQ 路径 | `REGISTERED / PLANNED_CONVERSION` | Global Chrome 始终显示；发布前 route false=`RELEASE_BLOCKER` | 视觉固定 RFQ |
| Sample / Request Documents 路径 | `REGISTERED / PLANNED_CONVERSION` | 后续视觉可作路径方向；发布前逐 route 验证 | 页面路径结构 |

## 6. 后续 Gate 占位（当前未进入）

| Gate | 本任务卡当前记录 | 准入条件 |
|---|---|---|
| Gate 2 | `NOT_STARTED / NOT_AUTHORIZED` | Gate 0/1 经总控复审与用户批准；解决 Playbook 准入；确认索引、表单字段/隐私、Chrome current-state 处理 |
| Gate 3 | `NOT_STARTED / NOT_AUTHORIZED` | Gate 2 批准；交付 Desktop 与 390px 线框及 Mobile Menu |
| Gate 4 | `NOT_STARTED / NOT_AUTHORIZED` | Gate 3 批准；继承 Visual Standard 与 Home shared V0.2 |
| Gate 5 | `NOT_STARTED / NOT_AUTHORIZED` | Gate 4 批准；覆盖 normal、focus、validation、error、success、long-copy、无电话/地址及 Mobile Menu |
| Gate 6–10 | `OUT_OF_SCOPE / PROHIBITED` | 当前任务明确禁止 |

## 7. CTA、表单与路径的 Gate 0/1 边界

### 7.1 路径合同

| 用户意图 | Owner | URL | 当前状态 | Contact 的责任 |
|---|---|---|---|---|
| 一般联系 | CONTACT-001 | `/contact/` | `PLANNED_UTILITY / NOT_VERIFIED_LIVE` | 仅收最少必要的一般信息；处理合同未批准前不声称可提交 |
| 正式询价 | CONV-RFQ | `/request-a-quote/` | `PLANNED_CONVERSION` | 清楚导向；永不 fallback 回 Contact |
| 样品申请 | CONV-SAMPLE | `/request-sample/` | `PLANNED_CONVERSION` | 清楚导向；不在 Contact 重复完整资格字段 |
| 文件申请 | CONV-DOC | `/request-documents/` | `PLANNED_CONVERSION` | 清楚导向；不在 Contact 重复文件申请工作流 |

### 7.2 最少收集候选（未批准）

Gate 2 只可从以下候选中确认最少必要字段：Name、Business Email、Company、Country/Region、Inquiry Type、Message、privacy acknowledgement。Phone 默认不收集；产品、数量、包装、样品和文件明细由专用 Conversion 页面收集。字段、必填性、验证、数据处理、隐私说明和失败渠道均为 `DECISION_REQUIRED`，本 Gate 不锁定。

### 7.3 必须覆盖的未来状态

- normal、hover、keyboard focus；
- required/format validation、字段级 error；
- submit loading；
- service error；失败处理不能把 Contact 变成 RFQ fallback；
- success；只能确认“请求已收到/已提交”，不得承诺回复时间或批准结果；
- long-copy 与长公司名/Email；
- 无可用电话、地址、Email 的受限状态；不显示空卡、横线或猜测值；
- Desktop、390px、Mobile Menu Open；390px 所有目标不小于 44px，无横向溢出。

## 8. Global Chrome 继承合同

| 表面 | CONTACT-001 合同 |
|---|---|
| Desktop Header | 84px；固定顺序 `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`；不新增 Contact；RFQ 永久显示并指向 `/request-a-quote/` |
| Mobile Header | 64px；`Logo | RFQ | Menu`；RFQ/Menu 逻辑触控目标 ≥44px |
| Mobile Menu | 七个普通一级项 + terminal RFQ，顺序与 Desktop 一致；不新增 Contact；current-state 见 `CONTACT-C006` |
| Desktop/Mobile Footer | 继承 Deep Navy Brand / Explore / Information / Conversion / Copyright；RFQ 永久显示；Contact 只有 route approved + live 才可作普通 Information 链接，当前不添加 |
| Route failure | `RFQ_ROUTE_READY=false = RELEASE_BLOCKER`；不隐藏、禁用、留空或改链 Contact |

## 9. 审核记录

### 9.1 Gate 状态

| Gate | 交付物 | 提交日期 | 当前结论 | 用户批准 | 备注 |
|---|---|---|---|---|---|
| Gate 0 | CONTACT-001 页面准入与 Brief V0.1 | 2026-08-30 | `SUBMITTED_FOR_GATE_0_REVIEW` | `PENDING` | 不自批；Playbook 缺失为正式推进阻塞 |
| Gate 1 | Gate 0/1 合规与证据审计 V0.1 | 2026-08-30 | `SUBMITTED_FOR_GATE_1_REVIEW` | `PENDING` | 运营主体可用；地址/邮箱/电话/渠道按字段冻结 |
| Gate 2 | 内容架构 | — | `NOT_STARTED / NOT_AUTHORIZED` | `PENDING` | 当前停止点之后 |
| Gate 3 | Desktop/390px 线框 | — | `NOT_STARTED / NOT_AUTHORIZED` | `PENDING` | 当前停止点之后 |
| Gate 4 | 视觉方向 | — | `NOT_STARTED / NOT_AUTHORIZED` | `PENDING` | 当前停止点之后 |
| Gate 5 | 完整视觉与状态 | — | `NOT_STARTED / NOT_AUTHORIZED` | `PENDING` | 当前停止点之后 |
| Gate 6–10 | Review/Handoff/Development/QA/Release | — | `OUT_OF_SCOPE / PROHIBITED` | `NOT_APPLICABLE` | 当前任务明确禁止 |

### 9.2 Gate 0/1 审查请求

总控/用户需要决定：

1. 是否批准 CONTACT-001 Gate 0 页面身份与边界草案。
2. 是否接受 Gate 1 的字段级冻结：仅品牌与运营主体可渲染；地址、全部 Email、电话和未批准渠道不渲染。
3. 是否先建立并批准 `ABOUT_CONTACT_PLAYBOOK_V0.1.md`，或为 CONTACT-001 明确批准页面专属准入例外。
4. 是否批准 Gate 2 前采用“Header/Menu 无一级 current 项 + Breadcrumb/H1 明示 Contact”的处理方向。
5. 是否授权后续 Gate 2–5 在受限字段不渲染前提下继续，并在 Gate 2 锁定最少表单字段与隐私说明。

