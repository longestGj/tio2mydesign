# CONTACT-001 Gate 0 / Gate 1 Compliance and Evidence Audit V0.1

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| Page ID | `CONTACT-001` |
| 页面 | Contact |
| URL | `/contact/` |
| 版本 | `V0.1` |
| 日期 | `2026-08-30` |
| 范围 | Gate 0 页面准入、Gate 1 研究/关键词/证据、事实冻结、Global Chrome 与 route 依赖 |
| 当前状态 | `SUBMITTED_FOR_GATE_0_GATE_1_REVIEW` |
| 页面生命周期 | `BRIEF_IN_REVIEW` |
| Mapping Status | `PLANNED_UTILITY` |
| Verification Status | `CONTACT_DETAILS_REQUIRED` |
| 执行边界 | 仅 CONTACT-001；未进入 Gate 2–5；Gate 6–10 与开发/发布禁止 |

## 1. 审计结论

Gate 0 与 Gate 1 草案已完成并提交审查，但没有被本执行任务自行批准。

- Page ID、URL、Page Type、P1、`NO_PRIMARY_KEYWORD`、Mapping 与 Verification 在登记册、PRD 和主表之间一致。
- 当前已批准项目资料与用户任务足以确认前台品牌 `TiO2 Malaysia` 和运营主体 `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.`。
- 地址、电话、目标域名 Email 和其他公开联系渠道没有达到本项目“可发布且可核验”的门槛；全部逐字段冻结，页面不得用空卡、猜测、旧站替换值或占位文案补齐。
- 当前公开 `mytio2.com/contact/` 提供地址和四个 `@mytio2.com` 角色邮箱，可作为最新一方候选资料交叉核对，但依根项目规则不得自动转成 TiO2 Malaysia 新站可发布事实，也不得复制其页面结构或正文。
- `tio2malaysia.com` 在 2026-08-30 本地诊断中未获得 DNS 响应，HTTPS route 也未建立可验证响应。此结果只证明“未验证 live”，不证明域名所有权或未来 route 状态。
- CONTACT-001 可在字段冻结前提下继续结构和 restricted-state 设计，但正式 Gate 2 准入仍受缺失 `ABOUT_CONTACT_PLAYBOOK_V0.1.md`、表单/隐私合同和 Global Chrome current-state 决定约束。

建议审查结论：`CONDITIONAL_PROGRESSION_RECOMMENDED_PENDING_PROJECT_CONTROL_AND_USER_APPROVAL`。这不是批准状态。

## 2. Gate 0 页面身份核对

| 字段 | 登记册 | 主表 | PRD / 用户任务 | 结论 |
|---|---|---|---|---|
| Page ID | CONTACT-001 | CONTACT-001 | CONTACT-001 | `MATCH` |
| Page Name | Contact | Contact | Contact | `MATCH` |
| URL | `/contact/` | `/contact/` | `/contact/` | `MATCH` |
| Page Type | Utility contact page | Utility contact page | Utility contact page | `MATCH` |
| Section | About / Contact | ABOUT | 仅 Contact 页面 | `MATCH / NORMALIZED_SECTION_LABEL` |
| Market / Language | 由主表补全 | GLOBAL / EN | 国际 B2B | `MATCH` |
| Priority | P1 | P1 | 未改变 | `MATCH` |
| Primary Keyword | NO_PRIMARY_KEYWORD | NO_PRIMARY_KEYWORD | 明确要求 | `MATCH` |
| Mapping Status | PLANNED_UTILITY | PLANNED_UTILITY | 不升级 | `MATCH` |
| Verification Status | CONTACT_DETAILS_REQUIRED | CONTACT_DETAILS_REQUIRED | 明确要求 | `MATCH` |
| Playbook Key | ABOUT_CONTACT | 由登记册决定 | 适用 Playbook 要求 | `MATCH_KEY / FILE_MISSING` |

### Gate 0 准入判断

| 检查项 | 结果 | 说明 |
|---|---|---|
| 页面存在于 54 页登记册 | PASS | 不新增页面 |
| URL、页面类型、优先级一致 | PASS | 不变更 `/contact/` |
| 主关键词与内耗边界明确 | PASS | `NO_PRIMARY_KEYWORD`；商业词排除 |
| Verification 状态明确 | PASS | `CONTACT_DETAILS_REQUIRED` |
| 页面类型 Playbook 可用 | BLOCKING FOR FORMAL GATE 2 | 计划文件不存在；仅允许 Brief/研究草案 |
| 任务卡已建立 | PASS FOR SUBMISSION | `docs/page-briefs/CONTACT-001_CONTACT_BRIEF_V0.1.md`；仍待审 |
| 导航边界 | PASS WITH REVIEW ITEM | Contact 不加入 Header；current-state 需 Gate 3 前确认 |

Gate 0 状态：`DRAFT_COMPLETE / SUBMITTED_FOR_GATE_0_REVIEW / NOT_APPROVED`。

## 3. 关键词、搜索意图与内耗审计

CONTACT-001 主表原始合同：

| 字段 | 值 | 审计结论 |
|---|---|---|
| Primary Keyword | `NO_PRIMARY_KEYWORD` | 保持，不创造商业词 |
| Secondary Keywords | `contact TiO2 Malaysia | contact IKHLAS Titanium` | 只作品牌/主体导航语义，不作获取词 |
| Search Intent | `N` | Contact/navigation |
| Buyer Stage | `Contact` | 与工具页一致 |
| Page Role | `Provide verified company contact channels and route commercial users to RFQ.` | 与当前任务一致；RFQ 是 owner，不是 Contact fallback |
| Excluded Keywords | `supplier | product | application | document primary terms` | 硬边界 |
| Cannibalization Boundary | `Contact is a utility page and must not be optimized as a commercial supplier landing page.` | 硬边界 |

### Owner 分离

| 意图 | Owner | Contact 不得做的事 |
|---|---|---|
| Malaysia supplier | HOME-001 | 不以 supplier/manufacturer 词写 Hero、Title 或主体 |
| 制造/原产地/追溯证明 | ABOUT-001 | 不在 Contact 展开公司证明叙事 |
| 产品/型号 | PRODUCT-000 / GRADE-* | 不做产品目录或推荐 |
| 应用 | APP-* | 不做选型或推荐 |
| 文件说明 | DOC-* | 不解释合规能力或公开未验证文件承诺 |
| 正式询价 | CONV-RFQ | 不复制 RFQ 字段；不在 RFQ 失败时接管 |
| 样品 | CONV-SAMPLE | 不复制样品资格流程 |
| 文件申请 | CONV-DOC | 不复制文件选择/审批流程 |

SEO/GEO Gate 1 结论：`PASS_FOR_BOUNDARY_ONLY`。Title/H1/Meta/Robots/Schema 留给 Gate 2 审查，不在本轮锁定。

## 4. 证据来源与资格

| Evidence ID | 来源 | 日期 | 观察内容 | 资格 | 使用限制 |
|---|---|---|---|---|---|
| `CONTACT-E001` | 当前用户任务 | 2026-08-30 | 页面身份、事实门禁、状态覆盖、Global Chrome 与禁止范围 | `AUTHORITATIVE_TASK_INPUT` | 不等于逐字段证明地址/电话/Email |
| `CONTACT-E002` | `AGENTS.md` | 2026-08-30 核对 | 前台品牌、运营主体、规划域名、规划 Email 且上线前验证 | `APPROVED_PROJECT_GOVERNANCE` | 规划 Email 不可发布 |
| `CONTACT-E003` | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | 2026-08-29 | 前台品牌和运营主体；Contact 工具页无主词 | `APPROVED_ARCHITECTURE_BASELINE` | 不提供地址、电话、Email |
| `CONTACT-E004` | Registry + `11_page_keyword_master.csv` | 2026-08-29 | CONTACT-001 identity、NO_PRIMARY、PLANNED_UTILITY、CONTACT_DETAILS_REQUIRED | `IMPLEMENTATION_MAPPING_BASELINE` | 不证明联系资料 |
| `CONTACT-E005` | `https://www.mytio2.com/contact/` | 2026-08-30 抓取复核 | 公开运营主体、制造地点和 `sales/info/technical/logistics@mytio2.com` | `CURRENT_FIRST_PARTY_CANDIDATE` | 根规则下不能自动作为新站最终事实；跨域渠道未批准；不可复制正文/结构 |
| `CONTACT-E006` | `https://www.mytio2.com/` | 2026-08-30 抓取复核 | 与 Contact 页相同主体、地址和角色邮箱 | `CURRENT_FIRST_PARTY_CANDIDATE_CROSS_CHECK` | 同上 |
| `CONTACT-E007` | 本地 `Resolve-DnsName tio2malaysia.com` | 2026-08-30 | 未返回 DNS 记录 | `DIAGNOSTIC_ONLY / NOT_VERIFIED_LIVE` | 不证明所有权，不执行 DNS 改动 |
| `CONTACT-E008` | 本地 HTTPS HEAD 对计划 routes | 2026-08-30 | TLS 握手未形成可验证站点响应 | `DIAGNOSTIC_ONLY / NOT_VERIFIED_LIVE` | 不证明最终部署状态，不进入发布结论 |
| `CONTACT-E009` | Global Chrome V0.2 Spec / Cross-page Review / Home shared state board | 2026-08-30 | 固定 Header/Menu/Footer RFQ、84/64px、44px、Deep Navy、禁止 Contact fallback | `APPROVED_VISUAL_AND_GOVERNANCE_BASELINE` | 不证明 RFQ route live |

## 5. 联系资料 Claim Register

| Claim ID | 字段/关系 | 候选值 | 当前验证状态 | 渲染决定 | 解冻要求 |
|---|---|---|---|---|---|
| `CONTACT-CL001` | 前台品牌 | TiO2 Malaysia | `VERIFIED_PROJECT_IDENTITY` | `RENDER` | 保持批准命名与视觉 |
| `CONTACT-CL002` | 运营主体 | IKHLAS TITANIUM (MALAYSIA) SDN. BHD. | `VERIFIED_PROJECT_BASELINE` | `RENDER` | 不扩大为未证实注册地址/工厂/服务承诺 |
| `CONTACT-CL003` | 品牌—运营主体关系 | TiO2 Malaysia operated by the above entity | `APPROVED_PROJECT_RELATIONSHIP` | `RENDER_WITH_APPROVED_WORDING` | Gate 2 锁定简洁表达 |
| `CONTACT-CL004` | Contact URL identity | `/contact/` | `VERIFIED_ARCHITECTURE / NOT_VERIFIED_LIVE` | `RENDER_AS_DESIGN_IDENTITY` | 发布前 route health 验证 |
| `CONTACT-CL005` | 地址 | NO.33 Industrial Perusahaan Ringan Tupai, 34000 Taiping, Perak, Malaysia | `CANDIDATE_ONLY` | `DO_NOT_RENDER` | 公司文件或用户逐字批准；明确地址类型和公众访问边界 |
| `CONTACT-CL006` | 规划一般 Email | contact@tio2malaysia.com | `PLANNED / NOT_VERIFIED` | `DO_NOT_RENDER` | DNS/MX、收发、负责人、公开使用批准 |
| `CONTACT-CL007` | 旧站 Sales Email | sales@mytio2.com | `CURRENT_PUBLIC / CROSS-DOMAIN_NOT_APPROVED` | `DO_NOT_RENDER` | 用户/公司批准用于 TiO2 Malaysia，且确认责任和目的 |
| `CONTACT-CL008` | 旧站 General Email | info@mytio2.com | `CURRENT_PUBLIC / CROSS-DOMAIN_NOT_APPROVED` | `DO_NOT_RENDER` | 同上 |
| `CONTACT-CL009` | 旧站 Technical Email | technical@mytio2.com | `CURRENT_PUBLIC / CROSS-DOMAIN_NOT_APPROVED` | `DO_NOT_RENDER` | 同上 |
| `CONTACT-CL010` | 旧站 Logistics Email | logistics@mytio2.com | `CURRENT_PUBLIC / CROSS-DOMAIN_NOT_APPROVED` | `DO_NOT_RENDER` | 同上 |
| `CONTACT-CL011` | 电话 | 无候选 | `NO_VERIFIED_VALUE` | `DO_NOT_RENDER` | 号码、所有权、用途、时区、负责人和公开批准 |
| `CONTACT-CL012` | WhatsApp / Messaging | 无候选 | `NO_VERIFIED_VALUE` | `DO_NOT_RENDER` | 渠道所有权、用途、合规和公开批准 |
| `CONTACT-CL013` | 一般联系表单可用性 | 尚无 live workflow | `PROCESS_APPROVAL_REQUIRED` | `DO_NOT_CLAIM_LIVE` | 字段、收件/处理、错误、隐私、成功语义和 fallback 获批 |
| `CONTACT-CL014` | 回复时间 | 无候选 | `NO_VERIFIED_VALUE` | `DO_NOT_RENDER` | 服务责任与可验证 SLA |
| `CONTACT-CL015` | 办公时间 | 无候选 | `NO_VERIFIED_VALUE` | `DO_NOT_RENDER` | 时区、工作日、责任人和公开批准 |

### 受限状态原子规则

1. 单个字段未验证，只移除该字段及其图标、link、Schema 和关联文案。
2. 电话缺失时不显示 `Phone coming soon`、空卡、禁用拨号或虚假号码。
3. 地址缺失时不显示地图、地图 pin、方向按钮、`Visit us` 或把制造地称为 office/registered address。
4. Email 缺失时不显示猜测 mailto、通用占位或把 `@mytio2.com` 自动替代为 `@tio2malaysia.com`。
5. 全部联系细节缺失时，页面可保留已批准品牌/运营主体、路径说明和经批准的表单视觉；不得用装饰性空白掩盖缺失。
6. Schema、Meta、ALT、Open Graph、结构化数据和隐藏 DOM 必须同步省略冻结字段。

## 6. Conversion route 审计

| Route ID | URL | Registry 状态 | Contact 呈现合同 | 发布门禁 |
|---|---|---|---|---|
| CONTACT-001 | `/contact/` | `PLANNED_UTILITY` | 一般联系 owner；不接管专用请求 | route、表单、隐私、错误/成功处理必须可用 |
| CONV-RFQ | `/request-a-quote/` | `PLANNED_CONVERSION` | Header/Mobile Header/Menu/Footer 永久显示；body 可清楚导向 | `RFQ_ROUTE_READY=false = RELEASE_BLOCKER`；绝不隐藏/禁用/改链 Contact |
| CONV-SAMPLE | `/request-sample/` | `PLANNED_CONVERSION` | Sample owner；Contact 不重复资格流程 | route live、表单和状态需独立验证 |
| CONV-DOC | `/request-documents/` | `PLANNED_CONVERSION` | Documents request owner；Contact 不重复文件申请 | route live、表单和状态需独立验证 |

## 7. Global Chrome 审计

| 检查 | 结论 |
|---|---|
| 固定 Header 顺序 | PASS；不含 Contact，不得新增 |
| Desktop Header | 84px；RFQ 固定，指向 `/request-a-quote/` |
| Mobile Header | 64px；`Logo | RFQ | Menu`；目标 ≥44px |
| Mobile Menu | 与 Desktop 同序；terminal RFQ；不加 Contact row |
| Footer | Deep Navy；Brand/Explore/Information/Conversion/Copyright；RFQ 固定 |
| Contact Footer link | 当前不满足 route approved + live；正式 visual 继续省略，待 Gate 5 前复核 |
| Contact current state | 无 Header/Menu Contact item；不得把 About 标为 Contact current。建议 Breadcrumb/H1 明示，Header/Menu 无一级 current 项，待批准 |
| Contact fallback | 0；任何场景禁止 |
| Public RFQ OFF/hidden/disabled/empty slot | 0；任何场景禁止 |

## 8. 表单最少收集与隐私审计

当前仅形成 Gate 2 输入，不锁定字段：

| 候选字段 | Gate 1 判断 | 原因 |
|---|---|---|
| Name | 候选必要 | 便于回复 |
| Business Email | 候选必要 | 一般联系回复渠道；须验证格式 |
| Company | 候选必要或可选，待审 | B2B 上下文；不应强制微型企业/顾问提供无意义值 |
| Country/Region | 候选必要或可选，待审 | 国际路由与隐私语境；不收详细地址 |
| Inquiry Type | 候选必要 | 一般、RFQ、Sample、Documents 分流；专用意图应跳转 owner |
| Message | 候选必要 | 收集一般问题；需真实长文案和字符边界 |
| Phone | 默认不收集 | 没有必要性证明，且页面本身无已验证电话渠道 |
| Product/Quantity/Packaging/Documents detail | 不在 Contact 收集 | 由专用 Conversion 页面负责 |
| Privacy acknowledgement | 候选必要，文案待审 | 必须说明数据仅用于回应请求；不得编造保留期、第三方或法律依据 |

仍需决定：数据控制者表述、收件责任、保存/删除规则、spam/abuse 处理、失败后的已验证一般渠道、是否需要 checkbox、成功语义。没有这些决定时不能把表单描述为 live。

## 9. Gate 1 未决问题与阻塞级别

| Review ID | 级别 | 问题 | 阻塞范围 | 当前处理 |
|---|---|---|---|---|
| `CONTACT-R001` | BLOCKING | ABOUT_CONTACT Playbook 缺失 | 正式 Gate 2 准入 | 需创建/批准 Playbook 或用户批准页面专属例外 |
| `CONTACT-R002` | BLOCKING | 表单处理和隐私合同未批准 | Gate 2 最终内容与 Gate 5 success/error | Gate 2 前决定；当前不声称 live |
| `CONTACT-R003` | IMPORTANT | Header/Menu 无 Contact current 项的表现未获批准 | Gate 3–5 Global Chrome 状态 | 建议无一级 current，Breadcrumb/H1 明示；待审 |
| `CONTACT-R004` | IMPORTANT | Indexing intent 未决定 | Gate 2 SEO | `DECISION_REQUIRED` |
| `CONTACT-R005` | IMPORTANT | 地址、目标域名 Email、电话均未验证 | 联系资料模块 | 全部 `DO_NOT_RENDER`；不阻塞 restricted-state 设计 |
| `CONTACT-R006` | IMPORTANT | Contact Footer link 需 route approved + live | Gate 5 Footer | 当前继承无 Contact 的批准 Footer |
| `CONTACT-R007` | RELEASE_BLOCKER ONLY | 计划域名与 Conversion routes 未验证 live | Gate 10 发布 | 不改变 Gate 2–5 视觉；RFQ 始终显示 |
| `CONTACT-R008` | SUGGESTION | 当前公开旧站角色邮箱是否可临时作为跨域联系渠道 | 未来可选渠道 | 默认不使用；只有明确公司/用户批准才能解冻 |

## 10. Gate 状态与批准来源

| Gate | 状态 | 验证 | 未决问题 | 批准来源 |
|---|---|---|---|---|
| Gate 0 | `DRAFT_COMPLETE / SUBMITTED_FOR_GATE_0_REVIEW` | 身份、URL、Page Type、P1、Mapping、Verification、SEO 边界已交叉核对 | R001、R003、R004 | 尚无；等待总控/用户 |
| Gate 1 | `DRAFT_COMPLETE / SUBMITTED_FOR_GATE_1_REVIEW` | 证据源、Claim Register、联系字段、routes、Chrome、表单最少收集已审计 | R002、R005、R006；R007 为发布门禁 | 尚无；等待总控/用户 |
| Gate 2 | `NOT_STARTED / NOT_AUTHORIZED` | — | 依赖 Gate 0/1 批准边界 | 当前用户要求先停在 Gate 0/1 审查 |
| Gate 3 | `NOT_STARTED / NOT_AUTHORIZED` | — | 依赖 Gate 2 | 当前未授权 |
| Gate 4 | `NOT_STARTED / NOT_AUTHORIZED` | — | 依赖 Gate 3 | 当前未授权 |
| Gate 5 | `NOT_STARTED / NOT_AUTHORIZED` | — | 依赖 Gate 4 | 当前未授权 |

## 11. 审查请求

建议总控/用户按以下边界批准或退回：

1. 批准页面身份与 SEO/Conversion owner 边界，不升级 Mapping 或 Verification。
2. 接受品牌与运营主体可渲染；地址、全部 Email、电话、WhatsApp、回复时间、办公时间均继续冻结。
3. 决定 Playbook 准入方式。
4. 决定 Contact 在 Global Chrome 中使用“无一级 current 项”的方向。
5. 授权或不授权下一步 Gate 2–5；若授权，仍不得解冻联系资料或进入 Gate 6+。

