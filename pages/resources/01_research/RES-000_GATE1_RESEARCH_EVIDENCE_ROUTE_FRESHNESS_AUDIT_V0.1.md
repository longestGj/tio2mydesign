# RES-000 Gate 1 Research, Evidence, Route and Freshness Audit V0.1

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| Page ID | `RES-000` |
| Page Name | Resources |
| URL | `/resources/` |
| Page Type | Navigation hub |
| Gate | Gate 1 — Research/Evidence + Route/Freshness Audit |
| 版本 | V0.1 |
| 日期 | 2026-08-30 |
| 状态 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| 页面生命周期 | `DESIGN_IN_REVIEW`；仅表示用户已授权执行至 Gate 5 草案，不表示 Gate 1–5 获批 |
| Gate 0 基线 | `RESOURCE_PLAYBOOK_V0.1.md` + `RES-000_RESOURCES_BRIEF_V0.1.md`；用户 2026-08-30 批准 |
| Gate 1 授权来源 | 用户 2026-08-30 统一决定；授权 `RES-000` 关系影响审计并执行至 Gate 5 草案，之后提交总控 |
| 审计范围 | RES-000 页面身份、搜索意图、买家问题、Evidence/Claim 资格、Hub inventory、owner route、官方来源捕获资格、freshness 公共门禁和 PRODUCT V0.3 关系影响 |
| 排除范围 | 八个 Resource 子页的独立研究/Brief/内容、任何政策结论、Gate 6+、开发、测试、部署、发布及 `D:\16Wordpress_nextjs` |
| 审核人 | 项目总控与质量审查 |
| 最终批准人 | 用户 |
| 当前批准记录 | `RES-000-G15-PCR-01 / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；用户尚未批准 Gate 1 |

本审计只决定哪些 RES-000 信息具备进入 Gate 2–5 草案的证据资格。用户已授权连续执行至 Gate 5 草案，但没有以此批准 Gate 1–5 成果。它不批准 Resource 子页、公开链接、Trade Update、比较结论、开发或发布；自检通过不构成 Gate 1 批准。

## 1. 审计结论摘要

1. `RES-000` 的 Page ID、`/resources/`、Navigation hub、`NO_PRIMARY_KEYWORD`、P2、`PLANNED_ARCHITECTURE` 和 `NO_DIRECT_KEYWORD_TARGET` 已由登记册与页面—关键词主表一致证明；Mapping/Verification 未升级。
2. RES-000 的唯一搜索职责是导航。`buying guides`、`technical guides`、`market trade updates` 只作为内容类型标签，不是新的主关键词。
3. 现有落盘关键词研究可以证明 alternative-origin、process comparison、brand/grade alternative 和四市场 trade-update 的研究意图，但不能证明 TiO2 Malaysia 的能力、技术等效、政策当前状态或页面可公开。
4. `RES-ORIGIN` 仅有批准的 mapping；内容、Claim、route 和 live 资格均未获本任务证明，因此不得进入 Hub 公共条目。
5. `RES-PROC`、`RES-CHEMOURS`、`RES-R706` 继续是 `NEW_PAGE_CANDIDATE`，不得进入链接、摘要、Meta、ItemList、Schema、sitemap 或 GEO answer。
6. 本地存在 EU、UK、India、Brazil 共 7 份官方来源抓取，2026-08-30 重新核验文件哈希为 7 PASS / 0 FAIL。该结果只证明落盘文件完整，不等于四个 Trade Update 已完成子页审计、内容批准、发布窗口复核或 `CURRENT` 判定。
7. 项目没有提供 `site_scope=tio2-my` 的外部 live-route 验证记录。所有外部 Resource/owner/Conversion 目标继续 `NOT_VERIFIED_LIVE`；本页唯一无外部依赖的行动是页面内锚点 `#resource-paths`。
8. Gate 1 当前公共 Resource inventory 为 0。获授权的 Gate 2–5 草案只能处理页面身份、选择逻辑、证据边界和 route-safe 状态，不能把任何子页或 Trade Update 写成当前、可访问或公开。
9. PRODUCT V0.3 已作为唯一关系源纳入：30 条 verified Application、14 个明确 Process、0 conflict、54 条 `NO_PUBLIC_MAPPING`。M-2377 五个 Application 与 Sulfate 已批准，但 Hub 仍不渲染行级关系；Specialty Materials 不公开、Rubber 仅证据登记；M-996/M-2196 comparison hold 保持。
10. `RES-R002–RES-R007` 继续 `OPEN`；`RES-R008–RES-R009` 继续 `CONTROLLED_IN_DRAFT`；`RES-G1-01` 保持 `OPEN_USER_APPROVAL`，`RES-G1-REL-01` 已获总控 PASS、等待用户批准；两者均不得提前 CLOSED。

## 2. 审计方法与证据规则

### 2.1 证据用途分层

| 证据类型 | 可以证明 | 不能证明 |
|---|---|---|
| 用户决定、根治理、批准 Gate 0 Playbook/Brief | 执行范围、Gate、页面职责、非开发边界和公开门禁 | 具体贸易、技术、公司、route-live 或 freshness 事实 |
| PRD、登记册、页面—关键词主表 | Page ID、页面名、规划 URL、类型、关键词、owner、Mapping、Verification 和内耗边界 | 页面已完成、已上线、政策当前、公司能力或技术性能 |
| 已落盘关键词、cluster、SERP 与 cannibalization 研究 | 查询语言、搜索意图、竞争页面类型和高风险边界 | 搜索量推断、产品等效、TiO2 Malaysia 能力或当前法律状态 |
| 完整官方来源本地抓取 | 抓取时点的官方原文可供后续子页审计 | 当前仍有效、完整产品/原产地适用性、当前税率、发布许可或 Hub 条目资格 |
| 外部开发 live-route 证据 | 指定 Page ID 在 `tio2-my` 的批准 Canonical 可访问 | 内容事实正确、freshness 当前或跨站 fallback 许可 |

### 2.2 渲染决定

| 决定 | Gate 1 含义 |
|---|---|
| `RENDER` | 证据资格允许进入 Gate 2；最终 Buyer Clean 文案仍需 Gate 2 批准 |
| `RENDER_WITH_QUALIFIER` | 只允许带明确范围或边界的表达进入 Gate 2 |
| `CONTROLLED_REQUEST_ONLY` | 只能导向获批的受控申请流程，不公开能力或文件承诺 |
| `DO_NOT_RENDER` | 不进入 HTML、JSON、API、Meta、OG、ALT、Schema、sitemap、GEO answer 或公开链接 |

事实资格、内容批准、route live 和 freshness 分开判断。任一条未通过，不得把完整行动单元公开。

## 3. 输入与可追溯性

| 输入 | 路径 | 本审计用途 | 资格 |
|---|---|---|---|
| 项目治理 | `AGENTS.md`、`00_PROJECT_STATUS.md`、`01_PROJECT_INDEX.md`、`02_DIRECTORY_GUIDE.md` | 范围、Gate、事实、目录和非开发边界 | Binding |
| Page Registry | `docs/architecture/PAGE_REGISTRY_V0.1.md` | 9 个 Resources 页面身份和状态 | Architecture evidence |
| PRD V0.4 | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | Resources owner、贸易详情归属和全站边界 | Architecture/content-boundary evidence |
| Keyword Master | `research/keyword/11_page_keyword_master.csv` | RES-000 完整 SEO 行和九页 mapping/verification | Current implementation mapping |
| Resources Playbook | `docs/page-playbooks/RESOURCE_PLAYBOOK_V0.1.md` | Claim、route、freshness、竞品和 Trade 门禁 | Approved Gate 0 baseline |
| RES-000 Brief | `docs/page-briefs/RES-000_RESOURCES_BRIEF_V0.1.md` | 页面合同、Evidence/Claim ID 和公开行为 | Approved Gate 0 baseline |
| Keyword clusters/map/candidates | `research/keyword/02_keyword_clusters.csv`、`03_keyword_architecture_map.csv`、`04_new_page_candidates.csv` | Research intent、candidate 和人审状态 | Supporting only |
| Cannibalization review | `research/keyword/05_cannibalization_review.csv` | brand alternative、process、owner 内耗风险 | Supporting boundary evidence |
| SERP evidence | `research/keyword/07_serp_evidence.csv` | 查询结果类型背景 | Supporting only；不证明等效或能力 |
| Research summary/QA | `research/keyword/08_research_summary.md`、`09_qa_report.md` | 数据限制、`Unavailable`、`VERIFY_REQUIRED`、候选待审 | Limitation record；自身仍写明等待人审，不覆盖 11 主表 |
| Raw source manifest | `research/keyword/raw/00_source_manifest.csv` 与对应 `manifest.json` | 官方抓取身份、日期、完整性和 hash | Local capture evidence only |

旧 raw manifest 中的 `D:/23MySec/keyword-research/...` 路径按 `02_DIRECTORY_GUIDE.md` 映射至 `research/keyword/...`；本审计不回写历史 manifest。

本轮没有使用临时浏览结果、搜索摘要或未落盘网页作为结论依据，也没有新增在线官方来源抓取。这样避免在 RES-000 审计中越界启动四个 Trade 子页研究。

## 4. 九页身份与 Hub inventory 审计

| Page ID | URL | Primary Keyword | Mapping | Verification | Gate 1 Hub 结论 |
|---|---|---|---|---|---|
| RES-000 | `/resources/` | `NO_PRIMARY_KEYWORD` | `PLANNED_ARCHITECTURE` | `NO_DIRECT_KEYWORD_TARGET` | 页面身份/导航职责可进入 Gate 2 候选；状态不升级 |
| RES-ORIGIN | `/resources/non-china-titanium-dioxide/` | `non china titanium dioxide` | `APPROVED_PRD_V0.3` | `QUALITATIVE_KEYWORD_EVIDENCE` | `DO_NOT_RENDER` 为 Hub item；内容、Claim、route/live 未审 |
| RES-PROC | `/resources/chloride-vs-sulfate-titanium-dioxide/` | `chloride vs sulfate titanium dioxide` | `NEW_PAGE_CANDIDATE` | `QUALITATIVE_KEYWORD_EVIDENCE` | `DO_NOT_RENDER`；候选未批准 |
| RES-CHEMOURS | `/resources/chemours-titanium-dioxide-alternatives/` | `chemours titanium dioxide alternative` | `NEW_PAGE_CANDIDATE` | `QUALITATIVE_KEYWORD_EVIDENCE` | `DO_NOT_RENDER`；候选与竞品边界未批准 |
| RES-R706 | `/resources/ti-pure-r-706-alternative/` | `ti-pure r-706 alternative equivalent` | `NEW_PAGE_CANDIDATE` | `QUALITATIVE_KEYWORD_EVIDENCE` | `DO_NOT_RENDER`；关键词不证明等效 |
| RES-TRADE-EU | `/resources/eu-titanium-dioxide-anti-dumping-duty/` | `eu titanium dioxide anti dumping duty` | `PLANNED_CONTENT` | `OFFICIAL_SOURCE_UPDATE_REQUIRED` | `DO_NOT_RENDER`；子页内容/范围/freshness/route 未审 |
| RES-TRADE-UK | `/resources/uk-titanium-dioxide-anti-dumping-investigation/` | `uk titanium dioxide anti dumping investigation` | `PLANNED_CONTENT` | `OFFICIAL_SOURCE_UPDATE_REQUIRED` | `DO_NOT_RENDER`；子页内容/范围/freshness/route 未审 |
| RES-TRADE-IN | `/resources/india-titanium-dioxide-anti-dumping-duty/` | `india titanium dioxide anti dumping duty` | `PLANNED_CONTENT` | `OFFICIAL_SOURCE_UPDATE_REQUIRED` | `DO_NOT_RENDER`；子页内容/范围/freshness/route 未审 |
| RES-TRADE-BR | `/resources/brazil-titanium-dioxide-anti-dumping-duty/` | `brazil titanium dioxide anti dumping duty` | `PLANNED_CONTENT` | `OFFICIAL_SOURCE_UPDATE_REQUIRED` | `DO_NOT_RENDER`；子页内容/范围/freshness/route 未审 |

审计总数：9/9。当前可公开 Resource item：0；当前可生成 ItemList item：0。

## 5. 搜索意图、买家问题与防内耗

### 5.1 RES-000 搜索合同

| 字段 | 审计结果 |
|---|---|
| Primary Keyword | `NO_PRIMARY_KEYWORD`；保持不变 |
| Secondary labels | `buying guides | technical guides | market trade updates`；仅作分类语言 |
| Search Intent | `N` — Navigation |
| Buyer Stage | Navigation |
| Source Cluster | `PRODUCT-05 | BRAND-01 | BRAND-02 | TRADE-*` |
| Excluded Keywords | `all child-guide primary terms` |
| Cannibalization Boundary | `Hub does not own child-guide primary terms.` |

关键词研究对 Resources 的有效贡献是证明“存在研究/比较/更新意图”和“某些方向需独立 owner”；它不授权 Hub 重复这些子页主词，也不批准候选页。

### 5.2 硬边界

| 意图 | Owner | RES-000 允许进入 Gate 2 的内容 | 禁止进入 Gate 2 的内容 |
|---|---|---|---|
| Alternative-origin research | RES-ORIGIN | 解释该内容类型的用途 | 子页主词优化、Malaysia 能力或规避暗示 |
| Process comparison | RES-PROC candidate | 解释 comparison 与 process/product owner 的区别 | 过程优劣、性能结论或候选链接 |
| Brand/grade alternative | RES-CHEMOURS / RES-R706 candidates | 解释比较不等于推荐/等效 | 竞品名 Meta、等效、授权、保证替代 |
| Trade update | RES-TRADE-* | 解释来源、范围、日期和复核要求 | 任何当前政策结论、税率、适用性或可访问链接 |
| Supplier/procurement | MARKET-* / HOME-001 | 说明应转向 Market/Home owner | supplier 商业落地正文 |
| Product/process/grade | PRODUCT-* / GRADE-* | owner 路径说明 | 产品详情、型号主词或性能推荐 |
| Application | APP-* | owner 路径说明 | 泛应用 SEO 正文 |
| Documents/origin proof | DOC-* / ABOUT-001 | owner 路径说明 | 文件可用性、制造、origin 或 traceability 事实 |
| RFQ | CONV-RFQ | 独立 owner 关系 | workflow/live 未通过时的 CTA 或行动承诺 |

### 5.3 Buyer Question 资格

| Question ID | 问题 | Gate 1 资格 | Gate 2 边界 |
|---|---|---|---|
| Q01 | Which type of resource should I use? | `VERIFIED_PAGE_ROLE` | 可解释 sourcing/technical/trade 三种问题；不得列未合格 item |
| Q02 | How are buying guides different from technical comparisons? | `VERIFIED_CONTENT_BOUNDARY` | 可解释用途；不得输出性能结论 |
| Q03 | Does a technical comparison mean two grades are equivalent? | `VERIFIED_PROHIBITION_BOUNDARY` | 可明确否定保证等效；不得给具体替代关系 |
| Q04 | How can I tell whether a trade update is current? | `RENDER_WITH_QUALIFIER` | 可解释所需字段；维护责任未批准前不得承诺正在执行固定复核 |
| Q05 | Why might a resource not appear? | `VERIFIED_PUBLIC_GATE` | 用自然语言说明仅展示已审且当前内容；不泄漏内部 token/候选名 |
| Q06 | Where should I continue for product or process details? | `VERIFIED_OWNER_RELATION` | 关系说明可写；链接受 route gate |
| Q07 | Where should I review market procurement or documents? | `VERIFIED_OWNER_RELATION` | 关系说明可写；不得承诺能力/文件 |
| Q08 | How can I request a quotation? | `VERIFIED_CONVERSION_OWNER` | workflow/live 未验证前不得输出 CTA 或行动承诺 |

## 6. Evidence Register 审计结果

| Evidence ID | 审计结论 | 状态 | 支持范围 |
|---|---|---|---|
| E-IA-001 | RES-000 和九页身份与登记状态一致 | `VERIFIED_ARCHITECTURE` | Page identity / internal inventory |
| E-SEO-001 | RES-000 无主关键词、N intent 和 owner 边界一致 | `VERIFIED_IMPLEMENTATION_MAPPING` | SEO/GEO content boundary |
| E-PRD-001 | Resources 是指南/技术/贸易详情 owner，Hub 为导航 | `VERIFIED_ARCHITECTURE` | Page role / owner relationships |
| E-GOV-001 | Evidence/Claim、candidate、等效、贸易和非开发红线有效 | `VERIFIED_GOVERNANCE` | 全页公开门禁 |
| E-KEY-001 | 已落盘 cluster/candidate/SERP 证明研究意图与限制 | `QUALITATIVE_INTENT_EVIDENCE` | 不证明需求量、能力、等效或 current policy |
| E-ROUTE-001 | Page ID/规划 URL 存在，但无外部 live 证明 | `NOT_VERIFIED_LIVE` | 只允许 route key 规划，不允许公共链接 |
| E-FRESH-001 | 四个 Trade owner 均要求当前官方来源和 freshness | `OFFICIAL_SOURCE_UPDATE_REQUIRED` | 不证明任一条目 CURRENT |
| E-OFFICIAL-001 | 7 个官方本地抓取均完整且 2026-08-30 hash 复验通过 | `LOCAL_CAPTURE_INTEGRITY_VERIFIED` | 后续子页官方审计输入；不授予 Hub 渲染资格 |
| E-BRAND-001 | Visual Standard、首页/Hub 基线支持品牌与对比度规则 | `VERIFIED_BRAND_BASELINE` | 后续 Gate 3–5；非公共事实 |
| E-CTA-001 | RFQ 为独立 Conversion owner | `CONVERSION_RELATION_VERIFIED_ROUTE_UNKNOWN` | CTA 仍需 workflow/content/live |
| E-REL-001 | PRODUCT V0.3 为唯一产品关系源：30 verified Application、14 explicit Process、0 conflict、54 no-public；M-2377 已批准关系与 M-996/M-2196 comparison hold 分域有效 | `APPROVED_PRODUCT_V0.3 / RES_SYNC_PENDING_PROJECT_CONTROL_REVIEW` | RES-000 只能使用中性通用边界；不得构造型号、选择或比较结论 |

## 7. 官方来源与 freshness 资格审计

### 7.1 本地官方抓取清单

| 市场 | Source ID | 来源日期 | 抓取日期 | 完整性/Hash | RES-000 公共结论 |
|---|---|---|---|---|---|
| EU | `OFFICIAL-EU-EURLEX-2025-4` | 2025-01-09 | 2026-08-29 | COMPLETE；2026-08-30 PASS | `DO_NOT_RENDER`；仅作未来子页审计输入 |
| EU | `OFFICIAL-EU-EC-TRADE-TIO2-2025` | 2025-01-09 | 2026-08-29 | COMPLETE；2026-08-30 PASS | 同上 |
| UK | `OFFICIAL-UK-TRA-TIO2-INVESTIGATION-2026` | 2026-03-03 | 2026-08-29 | COMPLETE；2026-08-30 PASS | `DO_NOT_RENDER`；不推断当前程序状态 |
| UK | `OFFICIAL-UK-TRN-2026-14` | 2026-03-26 | 2026-08-29 | COMPLETE；2026-08-30 PASS | 同上 |
| India | `OFFICIAL-INDIA-DGTR-TIO2-CASE` | 2026-08-03 | 2026-08-29 | COMPLETE；2026-08-30 PASS | `DO_NOT_RENDER`；现有 QA 仍保留实施核验限制 |
| Brazil | `OFFICIAL-BRAZIL-MDIC-TIO2-MEASURE` | 2025-10-24 | 2026-08-29 | COMPLETE；2026-08-30 PASS | `DO_NOT_RENDER`；需葡语原文逐范围审计 |
| Brazil | `OFFICIAL-BRAZIL-MDIC-TIO2-PUBLIC-INTEREST` | 2026-03-27 | 2026-08-29 | COMPLETE；2026-08-30 PASS | 同上 |

### 7.2 为什么仍不授予 `CURRENT`

本地文件完整性只回答“抓取是否可复核”。进入 Hub 还缺少：

1. 对应 Trade 子页独立 Gate 0/1 与内容批准。
2. 对产品范围、原产地范围、管辖区、程序阶段、日期和当前适用性的逐 Claim 审计。
3. 发布窗口内重新核对官方来源及任何后续 notice/决定。
4. 已批准的内容维护责任人、最后复核日期和下次复核机制。
5. `site_scope=tio2-my` 中批准 Canonical 的 live-route 验证。
6. 标题、摘要、visible source/date/scope、Meta、OG 和 Schema 的一致批准。

因此四条 Trade Update 当前统一为：

- `freshness_status=FRESHNESS_NOT_GRANTED`
- `claim_gate_status=DO_NOT_RENDER`
- `route_live_status=NOT_VERIFIED_LIVE`
- `hub_inventory_status=EXCLUDED`

这些内部 token 不得作为 Buyer Clean 文案公开。

### 7.3 复核机制资格

| 内容类型 | Gate 0 周期上限 | Gate 1 结论 |
|---|---:|---|
| Buying Guide | 180 天 | 周期方向可进入 Gate 2 维护规格；RES-ORIGIN 内容/owner/live 未审 |
| Technical/Alternative Guide | 90 天 | 候选未批准，周期不构成页面授权 |
| Active/provisional Trade Update | 30 天 | 只有未来子页逐 Claim 审计后才可赋值；当前未授予 CURRENT |
| Definitive/stable Trade Update | 90 天 | 同上；事件触发仍优先于周期 |

`RES-R007` 继续 OPEN：在实际维护责任、字段 owner 和审核流程获批前，EVIDENCE_STANDARD 不得公开承诺固定复核服务。

## 8. Route 与 availability 审计

### 8.1 Resource 条目 route

| Page ID | URL 状态 | Content/Claim 状态 | Live 状态 | Hub 行为 |
|---|---|---|---|---|
| RES-ORIGIN | Registered stable mapping | `NOT_APPROVED_FOR_PUBLIC_ITEM` | `NOT_VERIFIED_LIVE` | 完整条目不渲染 |
| RES-PROC | Candidate | `NEW_PAGE_CANDIDATE` | `NOT_VERIFIED_LIVE` | 完全不渲染 |
| RES-CHEMOURS | Candidate | `NEW_PAGE_CANDIDATE` | `NOT_VERIFIED_LIVE` | 完全不渲染 |
| RES-R706 | Candidate | `NEW_PAGE_CANDIDATE` | `NOT_VERIFIED_LIVE` | 完全不渲染 |
| RES-TRADE-EU | Planned | `OFFICIAL_SOURCE_UPDATE_REQUIRED` | `NOT_VERIFIED_LIVE` | 完全不渲染 |
| RES-TRADE-UK | Planned | `OFFICIAL_SOURCE_UPDATE_REQUIRED` | `NOT_VERIFIED_LIVE` | 完全不渲染 |
| RES-TRADE-IN | Planned | `OFFICIAL_SOURCE_UPDATE_REQUIRED` | `NOT_VERIFIED_LIVE` | 完全不渲染 |
| RES-TRADE-BR | Planned | `OFFICIAL_SOURCE_UPDATE_REQUIRED` | `NOT_VERIFIED_LIVE` | 完全不渲染 |

### 8.2 Supporting owner routes

| 目的 | Page ID | Mapping/Lifecycle evidence | Live 状态 | Gate 2 允许行为 |
|---|---|---|---|---|
| Products | PRODUCT-000 / PRODUCT-PROC-* | Mapping 已批准；独立任务治理中 | `NOT_VERIFIED_LIVE` | 可解释 owner；公共链接待 live |
| Markets | MARKET-000 / MARKET-* | Hub mapping 已批准；子页状态各自独立 | `NOT_VERIFIED_LIVE` | 可解释 owner；公共链接逐项门禁 |
| Applications | APP-000 / APP-* | Planned/provisional | `NOT_VERIFIED_LIVE` | 可解释 owner；不得硬编码 URL |
| Documents | DOC-000 / DOC-* | Planned/provisional；事实受限 | `NOT_VERIFIED_LIVE` | 可解释 owner；不承诺文件 |
| About | ABOUT-001 | Mapping 已批准；事实证据受限 | `NOT_VERIFIED_LIVE` | 可解释事实 owner；不公开能力主张 |
| RFQ | CONV-RFQ | `PLANNED_CONVERSION` | `NOT_VERIFIED_LIVE` | CTA 与依赖文案不渲染 |
| Local resource anchor | `#resource-paths` | RES-000 同页锚点 | `LOCAL_ANCHOR_ELIGIBLE` | 可作为唯一无外部依赖 Primary CTA |

### 8.3 原子省略规则

若目标未满足 URL approval、content approval、Claim、route live 和 freshness（如适用），必须同时省略：标题/卡片、摘要、source/date、CTA、隐藏链接、ItemList、Meta/OG 关系、GEO answer 引用和 sitemap 关系。不得留下 Coming soon、空卡、标点、箭头或跨站 fallback。

## 9. Claim Register Gate 1 建议

| Claim ID | Gate 1 结论 | 事实资格 | 公共/机器可读行为 |
|---|---|---|---|
| CL-001 | RES-000 身份、URL 和 Navigation hub 已验证 | `RENDER` | Canonical/Schema 仍在交付前复核 |
| CL-002 | 无主关键词与导航职责已验证 | `RENDER` | 用自然文案表达，不公开 token |
| CL-003 | Resources 体系有 9 条登记记录 | `DO_NOT_RENDER` 为公共九页列表 | 只用于内部审计 |
| CL-004 | 三类内容用途具有架构资格 | `RENDER_WITH_QUALIFIER` | 最终 copy 待 Gate 2；0 个合格 item 的内容族不输出 |
| CL-005 | RES-ORIGIN 只有 mapping 资格 | `DO_NOT_RENDER` 为 item | 内容/Claim/live 全部通过后重审 |
| CL-006 | 三个 comparison/alternative 页面是候选 | `DO_NOT_RENDER` | 不进入任何公共或机器可读表面 |
| CL-007 | 四个 Trade 页面为 planned + official-source-required | `DO_NOT_RENDER` | 不输出政策、链接、摘要或 Schema |
| CL-008 | Hub 将执行来源/复核维护承诺 | `DO_NOT_RENDER` | `RES-R007` 关闭前不公开承诺 |
| CL-009 | 竞品/牌号为等同或保证替代 | `DO_NOT_RENDER` | 永久禁止无证据等效/保证替代 |
| CL-010 | Malaysia origin 可规避或自动不受措施影响 | `DO_NOT_RENDER` | 禁止规避、转运或自动不适用暗示 |
| CL-011 | Products/Markets/Applications/Documents/About 是 owner | `RENDER` 关系说明 | CTA/链接逐项 route gated |
| CL-012 | 固定 Header 顺序与 Home 可见 | `RENDER` | RFQ 项仍受 workflow/live gate |
| CL-013 | `site_scope=tio2-my` 且无跨站 fallback | 内部硬门禁 | `DO_NOT_RENDER` 为 Buyer Clean 事实 |
| CL-014 | 制造、origin、文件、库存、价格、交期、物流等能力 | `DO_NOT_RENDER` | 无一方证据，不进入任何表面 |
| CL-015 | ItemList 表示当前可见 Resource items | Conditional | 当前 0 item，因此不输出 ItemList items |
| CL-016 | Hub 可进入 RFQ | `DO_NOT_RENDER` 行动承诺 | workflow approved + live 前无 CTA/依赖文案 |
| CL-017 | 现有 7 份官方抓取完整 | 内部 `RENDER_WITH_QUALIFIER` | 只写入审计；不转化为政策或 CURRENT 声明 |

## 10. Gate 2 准入边界建议

用户已授权本页连续执行 Gate 2–5 草案。以下内容只获得“进入草案”的资格，仍须总控和用户分别审查，不构成 Gate 批准：

- RES-000 页面身份、Breadcrumb、无主关键词导航职责。
- sourcing / technical comparison / trade-update 三类问题的用途解释。
- 比较不等于推荐、等效或保证替代的边界答案。
- 未显示的 Grade → Application 关系不等于技术不适用；不得公开 `NO_PUBLIC_MAPPING` token 或负面适用性结论。
- Products、Markets、Applications、Documents、About、RFQ 的 owner 关系说明。
- route-safe、inventory=0、ItemList=0、无 Trade Update 的内容架构状态。
- 来源、范围、日期和 Last reviewed 所需字段的解释方向；不得承诺尚无 owner 的维护流程。
- `CollectionPage` 与 `BreadcrumbList` 方向；`ItemList` 仅在未来有合格可见条目时输出。

下列内容不得进入 Gate 2 公共文案候选：

- 任一 Resource 子页标题、摘要、链接或内容结论。
- 任何 candidate 名称或主关键词的主动曝光。
- 任何贸易措施、调查、税率、产品/原产地适用性或“当前状态”结论。
- 任何竞品/牌号等效、保证替代、授权、合作或推荐。
- 任何命名型号的 Application/Process/选择关系（包括已批准的 M-2377 中性关系），以及 M-996/M-2196 的差异、排序、等效、替代和选择理由。
- 未验证的制造、origin、COO、traceability、文件、库存、价格、MOQ、交期、包装、港口、物流或样品能力。
- RFQ、Documents 或其他未验证 live route 的 CTA/行动承诺。

## 11. Open Items 与 Gate 记录

| Review ID | 级别 | 问题 | 当前控制 | 关闭条件 | 状态 |
|---|---|---|---|---|---|
| RES-R002 | IMPORTANT | RES-ORIGIN 内容、Claim、route 和公开资格未审 | 不作为 Hub item | 独立子页 Gate、内容、Claim、URL/route/live 全部批准 | OPEN |
| RES-R003 | IMPORTANT | RES-PROC、RES-CHEMOURS、RES-R706 仍为候选 | 完全不公开 | 用户批准变更、独立 Brief/Gates 和技术/品牌审核 | OPEN |
| RES-R004 | IMPORTANT | 四个 Trade Update 缺少子页级当前官方来源/范围/freshness 审计 | 全部 `DO_NOT_RENDER` | 逐子页 official/范围/Claim/content/CURRENT/live 批准 | OPEN |
| RES-R005 | IMPORTANT | 下游 owner route 未验证 live | Page ID/route key + 原子省略 | 对应内容批准并在 `tio2-my` 验证 live | OPEN |
| RES-R006 | IMPORTANT | 竞品/牌号 `equivalent` 搜索词可能误导 | 无等效/保证替代 Claim | 当前技术资料、测试与人工技术/法律审核；仍不得保证替代 | OPEN |
| RES-R007 | IMPORTANT | 来源/复核承诺缺少已批准维护责任 | EVIDENCE_STANDARD 不承诺运营流程 | 责任角色、字段 owner、审核流程和发布维护机制获批 | OPEN |
| RES-R008 | IMPORTANT | Teal 对比度冲突 | 使用首页 V0.3 `#007F77` 修正 | 后续视觉 Gate 验收 | CONTROLLED_IN_DRAFT |
| RES-R009 | IMPORTANT | Footer 不得加入未登记 Legal/Privacy | 只用登记/批准入口 | 页面变更控制或持续省略 | CONTROLLED_IN_DRAFT |
| RES-G1-01 | BLOCKING | Gate 1 已获总控复审 PASS，但尚未获用户批准 | 不把总控 PASS 写成用户批准；后续 Gate 仍为草案 | 用户单独批准 Gate 1 | OPEN_USER_APPROVAL / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL |
| RES-G1-REL-01 | IMPORTANT | PRODUCT V0.3 关系影响需与 Gate 2–5 全表面一致 | 当前基线 84=30/0/54、14 Process；M-2377 已批准关系不进入 Hub 行级渲染；M-996/M-2196 comparison hold 保持 | 项目总控复核本次关系源同步 | PRODUCT_V0.3_SYNC_DRAFT_PENDING_PROJECT_CONTROL_REVIEW |

已关闭且不得重新解释：`RES-R001=CLOSED`、`RES-G0-01=CLOSED`，关闭依据为用户 2026-08-30 Gate 0 批准。

## 12. Gate 1 验收自检

- [x] 9/9 Resources Page ID、URL、Primary、Mapping 和 Verification 与登记册/主表一致。
- [x] RES-000 保持 `PLANNED_ARCHITECTURE` / `NO_DIRECT_KEYWORD_TARGET`，未升级 mapping。
- [x] Hub 保持 `NO_PRIMARY_KEYWORD`，未侵占任何子页主关键词。
- [x] 1 个 approved mapping、3 个 candidates、4 个 planned Trade pages 和 1 个 planned Hub 分开处理。
- [x] 现有关键词/SERP 只用于搜索意图和边界，不用于能力、等效或 current-policy 事实。
- [x] 7/7 官方本地抓取 hash 复验通过，但没有授予 CURRENT 或公共资格。
- [x] 所有外部 route 均保持 `NOT_VERIFIED_LIVE`；无跨 `site_scope` fallback。
- [x] 当前 Hub Resource inventory=0，ItemList item=0。
- [x] PRODUCT V0.3 的 30/0/54 与 14 Process 已纳入；M-2377 已批准关系、Specialty Materials/Rubber 边界和 M-996/M-2196 comparison hold 已正确分域。
- [x] RES-R002–R007 保持 OPEN；RES-R008–R009 状态未升级。
- [x] 未启动或创建任何 Resource 子页成果。
- [x] 仅按用户授权建立 Gate 2–5 审查草案；未进入 Gate 6、开发、测试、部署或发布。
- [x] 未访问或修改 `D:\16Wordpress_nextjs`。
- [x] 项目总控以 `RES-000-G15-PCR-01` 复审 Gate 1 并判定 PASS。
- [x] 用户授权执行至 Gate 5 草案；该授权不等于批准 Gate 1–5。
- [ ] 用户在总控审查后决定 Gate 1–5 是否批准。

## 13. 版本记录

| 版本 | 日期 | 变更 | 批准状态 |
|---|---|---|---|
| V0.1 | 2026-08-30 | 初始 RES-000 Gate 1 综合审计；核验身份、搜索意图、Evidence/Claim、7 个官方抓取完整性、route/freshness 资格和 inventory=0；保留全部事实/route/freshness 门禁 | `DRAFT_FOR_GATE_1_REVIEW`；待总控与用户审查 |
| V0.1 relation-impact revision | 2026-08-30 | 纳入 PRODUCT V0.2.1 唯一关系源和 25/13/55、M-2377、M-996/M-2196 门禁；记录用户授权执行 Gate 2–5 草案但未批准各 Gate | `DRAFT_FOR_GATE_1_REVIEW`；提交总控定向复核 |
| V0.1 / RES-000-G15-PCR-01 review record | 2026-08-30 | 总控核验 Resources 9/9、NO_PRIMARY_KEYWORD、PRODUCT V0.2.1、M-2377、M-996/M-2196 与 Trade freshness 门禁 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；不得冒充用户批准 |
| V0.1 / PRODUCT V0.3 relationship-source sync | 2026-08-30 | 当前唯一关系源改为 PRODUCT V0.3；记录 30/0/54、14 Process、M-2377 五个 Application 与 Sulfate、Specialty Materials 不公开、Rubber 仅证据登记；移除过时的 M-2377 TDS 活跃硬门禁 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW`；页面主体、视觉、Gate、route/freshness 与 M-996/M-2196 hold 不变 |
