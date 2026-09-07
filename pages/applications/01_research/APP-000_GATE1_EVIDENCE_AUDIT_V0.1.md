# APP-000 Gate 1 Research and Evidence Audit V0.1

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| Page ID | `APP-000` |
| 页面 | Applications |
| URL | `/applications/` |
| Page Type | Navigation hub |
| Gate | Gate 1 — Research and Evidence Audit |
| 版本 | V0.1 |
| 日期 | 2026-08-30 |
| 状态 | `DRAFT_FOR_GATE_1_REVIEW` |
| 页面生命周期 | `DESIGN_IN_REVIEW` |
| Gate 1 完整度 | `COMPLETE_FOR_PROJECT_CONTROL_REVIEW`；PRODUCT V0.2.1 当前关系基线已同步 |
| 产品关系基线 | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` — PRODUCT V0.2.1 CSV 与两份 V0.2.1 审计 |
| Gate 0 授权来源 | 2026-08-30 用户明确批准 APP-000 Gate 0，仅授权本页进入 Gate 1 |
| 审计范围 | APP-000 页面身份、搜索意图、买家问题、五应用关系、产品—应用证据边界、route 依赖及 Claim Register 建议 |
| 排除范围 | 本审计不批准 Gate 2–5 草案；五个 Application 子页、Gate 6/7、开发、测试、部署、发布及 `D:\16Wordpress_nextjs` 均排除 |
| 审核人 | 项目总控与质量审查 |
| 最终批准人 | 用户 |
| 批准记录 | 未批准；本文件仅提交 Gate 1 总控审查 |

本审计只决定哪些信息具备进入 APP-000 Gate 2–5 草案的证据资格。用户已另行授权制作这些草案，但本审计不批准最终文案、视觉、Application 子页、具体型号推荐、公开链接、Schema 输出、开发交付或发布。

## 1. 审计结论摘要

1. APP-000 的 `APP-000`、`/applications/`、Navigation hub、`NO_PRIMARY_KEYWORD`、P1、`PLANNED_ARCHITECTURE` 和 `NO_DIRECT_KEYWORD_TARGET` 与登记册及页面—关键词主表一致；Gate 0 批准没有改变 Mapping 或 Verification。
2. Coatings、Plastics、Masterbatch、Printing Inks、Paper 五个 Application owner 关系具备架构证据，可以作为以后 Gate 2 的选择标签候选；五个 URL 仍为 `PROVISIONAL_URL`，不具备公开链接资格。
3. APP-000 继续只做“按用途进入正确 owner”的导航，不拥有五个子页的泛应用主关键词；可完整列示 V0.2.1 的中性 Grade-to-Review 集合，但不输出推荐、排序、比较定位或适用保证。
4. 本地关键词资料为 Coatings、Plastics、Masterbatch 保留了直接 Top-10 SERP 结果类型证据；Printing Inks 与 Paper 没有同等的直接本地 Top-10 记录。所有五个子页仍保持主表中的 `QUALITATIVE_KEYWORD_EVIDENCE`，本审计不升级其状态。
5. PRODUCT V0.2.1 已通过总控复审，其 CSV 与两份审计现在作为全站唯一当前 `APPROVED_RELATION_BASELINE`；V0.2 只保留历史追溯。APP-DEP-001 与 APP-R003 对中性基础映射的门禁继续关闭。
6. 基线包含 25 条中性 Grade-to-Review：Coatings 7、Plastics 7、Masterbatch 6、Printing Inks 3、Paper 1、Specialty Materials 1。只能中性列示，不得扩展为推荐、排名、性能、适用保证、等效或选择理由。
7. 55 条 `NO_PUBLIC_MAPPING` 和 4 条 `CONFLICT_HOLD` 均为 `DO_NOT_RENDER`；前者不能改写成“不适用”“不推荐”或负面能力结论。
8. M-2377 的 4 条 `CONFLICT_HOLD`、2 条 `NO_PUBLIC_MAPPING` 与 Process `CONFLICT_HOLD` 全部隐藏，新增 `R-M2377-TDS=OPEN_HARD_GATE`。M-996/M-2196 的 Coatings/Sulfate 基础关系保持 verified 且 `application_conflict=none`；差异、排序、选择理由和比较定位由独立 `comparison_hold` 冻结，APP-R004 保持 `OPEN`。
9. 所有五个 Application route 及 Products、Markets、Documents、Resources、About、RFQ 等出站 route 均缺少 `site_scope=tio2-my` live 验证；APP-R002、APP-R004、APP-R005 保持 `OPEN`，APP-R006 继续受控。
10. Gate 1 研究/证据草案现已完整并提交总控审查。用户后续统一指令已授权 APP-000 同步产出 Gate 2–5 草案；该授权不等于 Gate 1–5 获批，也不允许建立子页、进入 Gate 6/7 或开发。

## 2. 证据规则

### 2.1 证据用途分层

| 证据类型 | 可以证明 | 不能证明 |
|---|---|---|
| 根治理、PRD、登记册、关键词主表 | Page ID、URL 规划、页面职责、关键词 owner、页面关系和状态 | 型号适用性、性能、文件可用性、制造/原产地、库存或交期 |
| 已批准 APP-000 Gate 0 Playbook/Brief | Hub 模块职责、证据门禁、CTA/route 条件、SEO/GEO/Schema 边界 | Gate 1 已批准、最终文案、链接已上线或事实已解冻 |
| 本地关键词聚类和 SERP 证据 | 查询意图、结果类型及页面边界的定性背景 | 搜索量、型号适用性、竞争者声明真实性或本公司能力 |
| 已批准 Product/Grade 记录 | 在来源明确范围内支持某个产品 owner 的关系 | 自动授权 APP-000 推荐、排名或扩展到其他型号/应用 |
| 当前批准 TDS、应用测试或技术 owner 决定 | 在明确产品、应用、日期和措辞范围内支持技术关系 | 超出来源范围的“最佳”“等同”“保证适用”等结论 |
| 当前一方公司、文件、销售或物流证据 | 在适用范围内支持对应运营事实 | 未记录的市场、库存、价格、MOQ、包装、运输或交付承诺 |

### 2.2 公共行为

| 决定 | 公共行为 |
|---|---|
| `RENDER` | 证据资格允许进入 Gate 2 候选；最终文案仍需 Gate 2 批准 |
| `RENDER_WITH_QUALIFIER` | 只允许带明确角色或限制条件的表述进入 Gate 2 |
| `ROUTE_GATED` | 关系可规划，但链接、CTA 和 Schema URL 只在 URL/content/live 全部通过后输出 |
| `CONTROLLED_REQUEST_ONLY` | 只可导向获批的受控流程，不公开文件或能力承诺 |
| `DO_NOT_RENDER` | 不进入可见 HTML、页面数据、Meta、OG、ALT、Schema、analytics label 或 selector output |

事实资格、内容批准和 route 资格必须分别记录。某个应用名称可进入 Gate 2 候选，不表示其 URL 已批准、页面已完成或 route 已上线。

## 3. 输入与可追溯性

| 输入 | 路径 | 本审计用途 | 结论 |
|---|---|---|---|
| 项目治理 | `AGENTS.md`、`00_PROJECT_STATUS.md`、`01_PROJECT_INDEX.md`、`02_DIRECTORY_GUIDE.md` | 范围、证据、状态和非开发边界 | Binding |
| Page Registry | `docs/architecture/PAGE_REGISTRY_V0.1.md` | 6 个 Application Page ID、URL、类型和状态 | Architecture evidence |
| PRD V0.4 | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | Applications 栏目职责、五应用体系和跨栏目 owner | Architecture/content-boundary evidence；不是技术证据 |
| Keyword Master | `research/keyword/11_page_keyword_master.csv` | 主词、意图、owner、excluded keyword 和 cannibalization | SEO architecture evidence |
| Keyword clusters | `research/keyword/02_keyword_clusters.csv` | 五应用聚类及 Plastics/Masterbatch 意图区分 | Supporting qualitative evidence |
| SERP evidence | `research/keyword/07_serp_evidence.csv` | Coatings、Plastics、Masterbatch 的结果类型；finished-masterbatch 混合意图 | Supporting only；不能证明型号关系 |
| Keyword summary/QA | `research/keyword/08_research_summary.md`、`09_qa_report.md` | Unavailable 指标、SERP 只证明意图的限制 | Supporting limitation record |
| Applications Playbook | `docs/page-playbooks/APPLICATION_PLAYBOOK_V0.1.md` | Gate、事实、route、视觉和子页停止点 | Approved Gate 0 baseline |
| APP-000 Brief | `docs/page-briefs/APP-000_APPLICATIONS_BRIEF_V0.1.md` | 页面合同、Evidence ID 与 Claim ID | Approved Gate 0 baseline |
| PRODUCT V0.2.1 Matrix | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.1.csv` | 84 条 Grade×Application 行、Application/Process 状态、独立 comparison hold 和公开行为 | `APPROVED_RELATION_BASELINE`；唯一当前行级关系输入 |
| PRODUCT V0.2.1 Unified Audit | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.2.1.md` | 25/4/55、13 Process、M-2377 hard gate 与比较治理 | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
| PRODUCT-000 Gate 1 V0.2.1 Audit | `pages/products/01_research/PRODUCT-000_GATE1_EVIDENCE_AUDIT_V0.2.1.md` | 三类关系分域合同和公共措辞边界 | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
| PRODUCT V0.2.1 Changelog | `pages/products/01_research/PRODUCT_RELATION_V0.2.1_CHANGELOG.md` | V0.2 → V0.2.1 字段修正与未变化关系集合 | Supporting approval/change record |
| V0.2 / M-350 example / V0.1 audit | 历史来源记录 | 追溯既有关系和批准路径 | 已被 PRODUCT V0.2.1 取代为当前输入；不得并行读取 |

PRODUCT V0.2.1 两份审计均记录 `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS`。APP-000 只读取 V0.2.1 作为当前关系源；V0.2 文件保持历史批准记录，不回写、不删除，也不得继续作为当前或并行关系源。

本审计不使用临时在线结果，不从 mytio2.com 或竞争者页面复制正文，也不把搜索结果中的第三方关系改写成 TiO2 Malaysia 的能力事实。

## 4. 搜索意图与关键词边界审计

### 4.1 APP-000 页面意图

| 字段 | 审计结果 |
|---|---|
| Primary Keyword | `NO_PRIMARY_KEYWORD`；保持不变 |
| Secondary labels | coatings、plastics、masterbatch、printing inks、paper；只作导航实体，不作 Hub 主词 |
| Search Intent | `N` — Navigation |
| Buyer Stage | Navigation |
| Source clusters | `APP-01` 至 `APP-05`；用于子页 owner 关系，不把五个主词转给 Hub |
| Excluded Keywords | `all generic application primary keywords` |
| Cannibalization boundary | 每个子页独占一个泛应用词簇；APP-000 只解释选择和下一步 |

### 4.2 五个子页关键词证据

| Page ID | Primary owner | 本地研究证据 | Gate 1 结论 |
|---|---|---|---|
| `APP-COAT` | `titanium dioxide for coatings` | APP-01 聚类；一组直接 Top-10 结果类型记录 | owner 关系可进入 Hub Gate 2 候选；子页仍未启动，URL 仍 provisional |
| `APP-PLAS` | `titanium dioxide for plastics` | APP-02 聚类；一组直接 Top-10 结果类型记录 | 同上；聚合 polymer variants，不在 Hub 展开技术体系 |
| `APP-MB` | `titanium dioxide for masterbatch` | APP-03 聚类；supplier 查询与 finished-masterbatch 混合意图各一组 Top-10 | 允许解释“TiO2 pigment input”边界；不得把 TiO2 写成 finished masterbatch |
| `APP-INK` | `titanium dioxide for printing inks` | APP-04 定性聚类；无同等直接本地 Top-10 记录 | 名称/owner 关系可用；不声称直接 SERP 或量化需求已验证 |
| `APP-PAPER` | `titanium dioxide for paper` | APP-05 定性聚类；无同等直接本地 Top-10 记录 | 名称/owner 关系可用；不声称直接 SERP 或量化需求已验证 |

所有搜索量、KD、CPC 和趋势均按研究资料保持 `Unavailable`；不得用 SERP 存在推断需求规模。

## 5. Buyer Question 资格

| Question ID | 问题 | Gate 1 证据资格 | Gate 2 边界 |
|---|---|---|---|
| BQ-01 | Which TiO2 application page should I use? | `VERIFIED_ARCHITECTURE` | 只列五个 owner 和选择任务；不列型号 |
| BQ-02 | Is the Masterbatch page about a finished masterbatch product? | `VERIFIED_INTENT_BOUNDARY` | 只说明 TiO2 pigment input 与 finished masterbatch 不同；不写配方或性能 |
| BQ-03 | Does choosing an application guarantee grade suitability? | `VERIFIED_GOVERNANCE_BOUNDARY` | 明确不保证；需要当前技术资料、体系条件和买家要求 |
| BQ-04 | What if I already know the grade? | `VERIFIED_OWNER_RELATION` | Products/Grade owner；链接受 route gate |
| BQ-05 | What if I am unsure of the application? | `VERIFIED_OWNER_RELATION` | Products 或条件 RFQ；不得猜测推荐 |
| BQ-06 | Where do market and document questions belong? | `VERIFIED_OWNER_RELATION` | Markets/Documents owner；不承诺支持或文件可用性 |

这些答案只获得进入 Gate 2 候选的资格，不是最终英文正文。默认不使用 FAQPage 或 QAPage Schema。

## 6. 产品—应用证据审计

### 6.1 统一关系基线

PRODUCT V0.2.1 是 APP-000 唯一当前产品关系输入。它批准的是基础中性 mapping/classification，不是“推荐”。APP-000 当前 Gate 1 把 25 条 Application 与 13 个 Process 关系登记为 Gate 2–5 输入，并把 Grade → Application、Grade → Process、Grade ↔ Grade Comparison 分域治理；最终模块、位置、信息密度和英文文案仍由后续 Gate 分别审查。

### 6.2 正式 Application Matrix

| Application taxonomy | Neutral Grade to Review | 数量 | APP-000 后续内容输入 |
|---|---|---:|---|
| Coatings | M-350、M-510、M-896、M-996、M-2196、M-895、M-52 | 7 | 可作为中性集合；不解释排序或差异 |
| Plastics | M-350、M-510、M-200、M-108、M-210、M-340、M-886 | 7 | 可作为中性集合；不作配方适用保证 |
| Masterbatch | M-510、M-200、M-108、M-210、M-340、M-886 | 6 | 继续区分 TiO2 pigment input 与 finished masterbatch |
| Printing Inks | M-350、M-510、M-52 | 3 | 可作为中性集合；不作油墨体系性能结论 |
| Paper | M-350 | 1 | 可作为中性集合；不延伸纸种或性能声明 |
| Specialty Materials | CR-901 | 1 | taxonomy/Selector mapping；不创建第六个 Application 页面或 route |

总计 25 条 `VERIFIED_FOR_PUBLIC_MAPPING`。显示顺序只能采用批准目录顺序或稳定型号顺序，并在内容合同中保留 `display order is not a performance ranking`。

### 6.3 后续内容架构输入合同

| 输入项 | Gate 1 结论 | Gate 2 前停止点 |
|---|---|---|
| 五个 Application owner 页面 | 仍是 APP-000 的五个主导航路径 | 子页 URL/content/live 未通过时不输出 href 或 CTA |
| 25 条 Grade-to-Review | 只从 V0.2.1 CSV 中筛选 `VERIFIED_FOR_PUBLIC_MAPPING` + `RENDER_NEUTRAL_MAPPING` | 模块、位置、数量密度和文案由 Gate 2–5 审查 |
| Grade 页面链接 | 关系与目标 Page ID 分开处理 | 只有对应产品 route 在 `tio2-my` live 后才可链接 |
| Process 标签 | 可读取 V0.2.1 的 8 Chloride、4 Sulfate、CR-901 Vapor-phase oxidation 作为中性分类候选 | APP-000 是否展示及位置由 Gate 2 审查；不暗示工艺优劣 |
| Comparison 字段 | 只读取独立 `comparison_hold` 作为禁止比较的机器门禁 | 不得反向修改或否定 verified Application/Process 基础关系 |
| Specialty Materials | 可作为 taxonomy/产品路径信息 | 不增加 Page ID、Application 子页或 provisional route |
| 55 条 NO_PUBLIC_MAPPING | 不输出正向映射 | 不改写成“不适用”“不推荐”“不能使用” |
| 4 条 CONFLICT_HOLD | 不输出 | 不披露内部证据语言，不推断替代关系 |

### 6.4 强制冻结

| 冻结项 | 当前行为 | 关闭条件 |
|---|---|---|
| M-2377 process/application/recommendation | 4 conflict + 2 no-public 与 Process conflict 继续 `DO_NOT_RENDER`；`R-M2377-TDS=OPEN_HARD_GATE` | 最新批准 M-2377 TDS，随后完成独立 Application / Process 技术审查 |
| M-996 vs M-2196 difference | Coatings/Sulfate 基础关系 verified 且 `application_conflict=none`；独立 `comparison_hold` 禁止比较、排序、选择理由和比较定位 | 独立批准的技术比较资料与公开措辞 |
| 性能、最佳、推荐、理想、等效、配方适配保证 | 全部禁止 | 需要独立证据与页面级批准；基础 mapping 不解冻 |
| NO_PUBLIC_MAPPING 的负面解释 | 禁止 | 该状态只表示没有正向公开 mapping，不能证明不适用 |

## 7. Route 与公开可用性审计

### 7.1 状态模型

- `mapping_status`：页面与关键词/职责映射状态。
- `url_approval_status`：URL 是否 stable、planned 或 provisional。
- `content_approval_status`：目标内容是否达到允许公开的 Gate。
- `route_live_status`：目标是否已由外部开发项目在 `site_scope=tio2-my` 验证可访问。

当前没有外部开发项目提供 APP-000 出站目标的 live-route 记录。因此所有目标使用 `NOT_VERIFIED_LIVE`，不把它改写成“已上线”或“永久不存在”。

### 7.2 五个 Application 目标

| Page ID | 公共标签 | Mapping | URL 状态 | Content 状态 | Live 状态 | APP-000 当前行为 |
|---|---|---|---|---|---|---|
| `APP-COAT` | Coatings | `PROVISIONAL_URL` | `PROVISIONAL` | `NOT_STARTED` | `NOT_VERIFIED_LIVE` | 标签/owner 可进入 Gate 2 候选；href、CTA、ItemList URL 不渲染 |
| `APP-PLAS` | Plastics | `PROVISIONAL_URL` | `PROVISIONAL` | `NOT_STARTED` | `NOT_VERIFIED_LIVE` | 同上 |
| `APP-MB` | Masterbatch | `PROVISIONAL_URL` | `PROVISIONAL` | `NOT_STARTED` | `NOT_VERIFIED_LIVE` | 同上 |
| `APP-INK` | Printing Inks | `PROVISIONAL_URL` | `PROVISIONAL` | `NOT_STARTED` | `NOT_VERIFIED_LIVE` | 同上 |
| `APP-PAPER` | Paper | `PROVISIONAL_URL` | `PROVISIONAL` | `NOT_STARTED` | `NOT_VERIFIED_LIVE` | 同上 |

`NOT_STARTED` 只描述目标内容没有独立页面成果。本审计没有为五个子页建立 Brief、研究、正文、线框或视觉稿。

### 7.3 Supporting 目标

| 目的 | Page ID | Mapping | 当前内容/Workflow 判断 | Live 状态 | APP-000 行为 |
|---|---|---|---|---|---|
| Home/Breadcrumb | `HOME-001` | `APPROVED_PRD_V0.3` | 页面关系已批准 | `NOT_VERIFIED_LIVE` | 关系保留；实际 href 发布前验证 |
| Products owner | `PRODUCT-000` | `APPROVED_PRD_V0.3` | 独立 Products 任务治理 | `NOT_VERIFIED_LIVE` | 可解释 owner；CTA route gated |
| Markets owner | `MARKET-000` | `APPROVED_NAVIGATION_HUB` | 独立 Markets 任务治理 | `NOT_VERIFIED_LIVE` | 可解释 owner；CTA route gated |
| Documents owner | `DOC-000` | `PLANNED_ARCHITECTURE` | `NOT_APPROVED_FOR_PUBLIC_LINK` | `NOT_VERIFIED_LIVE` | 不承诺文件；CTA 不渲染 |
| Resources owner | `RES-000` | `PLANNED_ARCHITECTURE` | `NOT_APPROVED_FOR_PUBLIC_LINK` | `NOT_VERIFIED_LIVE` | 非必需关系；未获批/live 不渲染 |
| About owner | `ABOUT-001` | `APPROVED_PRD_V0.3` | 事实仍受独立证据治理 | `NOT_VERIFIED_LIVE` | 不在本页声明制造/origin/traceability |
| Request a Quote | `CONV-RFQ` | `PLANNED_CONVERSION` | `WORKFLOW_NOT_APPROVED` | `NOT_VERIFIED_LIVE` | Hero/Final RFQ 及依赖句子整单元不渲染 |

### 7.4 确定性公开条件

- `APPLICATION_ROUTE_AVAILABLE[page_id]=true`：目标 URL、目标内容和 `tio2-my` live route 全部批准，Canonical 与登记值一致。
- `SUPPORT_ROUTE_AVAILABLE[page_id]=true`：目标 Page ID、内容和 live route 全部通过。
- `RFQ_AVAILABLE=true`：`CONV-RFQ` workflow 和 `tio2-my` route 均获批准并验证。
- 任一条件不满足时，不默认 `true`，不硬编码 provisional URL，不从 TIOVAR、mytio2 或其他 `site_scope` 回退。

## 8. Evidence Register 审计结果

| Evidence ID | Gate 1 结论 | 状态 | 适用范围 |
|---|---|---|---|
| IA-001 | APP-000 身份、`/applications/` 登记值和 Breadcrumb 关系一致 | `VERIFIED_ARCHITECTURE`；Mapping 仍 planned | Page identity/Breadcrumb |
| IA-002 | 五个 Application Page ID、名称和关键词 owner 一致；URL 均 provisional | `VERIFIED_ARCHITECTURE_WITH_PROVISIONAL_ROUTES` | APPLICATION_SELECTOR |
| IA-003 | 固定八项 Header、Applications 当前和 Home 可见 | `VERIFIED_ARCHITECTURE` | GLOBAL_HEADER |
| SEO-001 | `NO_PRIMARY_KEYWORD`、Navigation intent 和防内耗边界一致 | `VERIFIED_SEO_ARCHITECTURE`；最终 copy 待 Gate 2 | HERO/SEO |
| ROUTE-001 | 五个子页 mapping 存在，但 URL/content/live 未通过 | `ROUTE_APPROVAL_REQUIRED` | Application href/CTA/ItemList URL |
| CONTENT-001 | 五个 owner 范围已验证；Plastics/Masterbatch 高层意图区分有本地研究支持 | `VERIFIED_PAGE_ROLE_WITH_COPY_REVIEW_REQUIRED` | CHOICE_GUIDE/Buyer Questions |
| EVID-001 | PRODUCT V0.2.1 是唯一当前关系输入；25 verified、4 conflict、55 no-public、13 verified Process | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` | Gate 2–5 中性内容/视觉输入；禁止推荐、比较误判与负面推断 |
| ROUTE-002 | Products、Markets、Documents 等 owner 关系存在；公开链接未验证 | `VERIFIED_ARCHITECTURE_ROUTE_GATED` | PROCUREMENT_PATHS |
| CONV-001 | RFQ 是独立 owner，只能传用户明确选择 | `WORKFLOW_AND_ROUTE_REQUIRED` | HERO/FINAL_RFQ |
| VIS-001 | 视觉与 390px 规则是内部合同 | `APPROVED_INTERNAL_DIRECTION` | Gate 3–5；非公共事实 |
| SCOPE-001 | `site_scope=tio2-my` 和禁止跨站 fallback | `VERIFIED_GOVERNANCE` | 开发交付/QA |
| GOV-001 | Footer 只使用登记/批准入口，不新增 Legal/Privacy 页面 | `VERIFIED_GOVERNANCE` | GLOBAL_FOOTER |

## 9. Claim Register 建议

| Claim ID | Gate 1 结论 | 事实渲染资格 | 链接/机器可读行为 |
|---|---|---|---|
| CL-001 | APP-000 身份和 Breadcrumb 已验证；Mapping 仍 planned | `RENDER_WITH_QUALIFIER` | Canonical/Breadcrumb URL 发布前复核 |
| CL-002 | 五个 Application owner 名称与关键词边界已验证 | `RENDER`（关系名称） | href、CTA、ItemList URL 继续 `DO_NOT_RENDER` |
| CL-003 | Hub 无独立主关键词、只做 Navigation | `RENDER`（职责方向） | Title/H1/Meta 最终 copy 待 Gate 2 |
| CL-004 | Header 八项、Applications 当前、Home 可见 | `RENDER` | 各目标仍需 route 可用性核验 |
| CL-005 | 五个子页尚不具备公开链接资格 | `DO_NOT_RENDER`（可访问声明） | 逐项 URL/content/live 通过后再审 |
| CL-006 | 五个 owner 的高层职责与 Masterbatch 非成品边界有资格进入 Gate 2 | `RENDER_WITH_QUALIFIER` | 不写配方、性能、型号或适用保证 |
| CL-007 | 25 条 Grade–Application 基础关系具备中性映射资格 | `RENDER_WITH_QUALIFIER`；仅限 Grade to Review | 模块/位置/文案待 Gate 2；route 未 live 不链接；不得排名、保证或等效 |
| CL-008 | Products、Markets、Documents 等 owner 关系存在 | `RENDER`（owner 说明） | 对应 CTA 逐目标 route gated |
| CL-009 | RFQ 是独立 Conversion owner | `DO_NOT_RENDER`（行动承诺） | workflow/live 前省略完整 CTA 单元及依赖句子 |
| CL-010 | 视觉方向是内部设计合同 | `DO_NOT_RENDER` | 仅供未来 Gate 3–5 |
| CL-011 | `tio2-my` 隔离与无 fallback 是交付门禁 | `DO_NOT_RENDER` | 仅供交付/QA；不作为营销声明 |
| CL-012 | Footer 只用登记/批准入口 | `RENDER`（治理行为） | 未登记入口不输出 |

## 10. SEO、GEO 与 Schema 边界

1. Primary Keyword 继续为 `NO_PRIMARY_KEYWORD`；不把五个 Application 主词堆入 Title、H1 或 Meta。
2. 五个 owner 名称可服务买家导航，但每个子页的泛应用主词仍由该子页独占。
3. GEO 只回答“选择哪个 owner、为何不等于型号适用、下一步去哪里”；不生成型号比较、性能结论或市场支持事实。
4. Schema 方向仍为 `CollectionPage`、条件 `ItemList` 和 `BreadcrumbList`。五个目标未满足公开条件时，不输出其 URL；如果没有合格的可见行动单元，则省略 ItemList。
5. BreadcrumbList 的 Home/Applications URL、APP-000 Canonical 和实际响应必须在交付/发布前复核；Gate 0/1 文档不证明 route live。
6. 默认不使用 FAQPage 或 QAPage；未来如采用，Schema 文本必须与可见答案完全一致。
7. Schema、Meta、OG、ALT 和 JSON 不得出现 M-2377 应用/工艺、M-996/M-2196 差异或任何未批准 application-to-grade 关系。
8. 如 Gate 2 采用 Grade-to-Review ItemList，结构化数据只能反映同屏可见的 V0.2.1 verified 中性集合；不得使用 `recommended`, `best`, rating、equivalent、replacement 或比较定位字段。

## 11. 可继续与冻结范围

| 范围 | Gate 1 草案决定 | 后续影响 |
|---|---|---|
| APP-000 身份、五应用名称、关键词 owner | 可作为 Gate 2 候选 | 仍需 Gate 1 总控和用户批准 |
| 五个 owner 的高层选择逻辑 | 可作为 Gate 2 候选 | 最终文案不得扩写技术事实 |
| Masterbatch 非 finished-masterbatch 边界 | 可带限定进入 Gate 2 候选 | 不写配方、产品构成或性能 |
| 五个子页 href/CTA/Schema URL | 冻结 | APP-R002/route 条件逐项关闭前不渲染 |
| 25 条 Grade-to-Review 中性映射 | 可作为 Gate 2 输入 | APP-DEP-001/APP-R003 已关闭；公开位置和文案仍需 Gate 2 |
| 推荐、排名、性能、保证、等效与选择理由 | 冻结 | PRODUCT V0.2.1 不授权；需要独立证据和页面级批准 |
| 55 条 NO_PUBLIC_MAPPING | 不公开且不作负面推断 | 不能写成不适用或不推荐 |
| M-2377 | 全部应用/工艺关系冻结 | `R-M2377-TDS=OPEN_HARD_GATE`；只阻塞该型号 |
| M-996/M-2196 | 基础关系可见，比较定位冻结 | APP-R004 保持 OPEN；使用独立 `comparison_hold`，不得记为 Application conflict |
| Documents/RFQ 等 supporting CTA | 冻结或 route gated | APP-R005 保持 OPEN |
| manufacturing/origin/traceability | 冻结 | 交给 About/Documents owner，需一方证据 |
| 文件可用性、库存、价格、MOQ、包装、交期、运输、样品 | 冻结 | 需对应 owner 与当前批准证据 |
| Footer 登记入口规则 | 继续受控 | APP-R006 不因 Gate 0 自动关闭 |

## 12. Open Items

| Review ID | 级别 | 问题 | 当前控制 | 关闭条件 | 状态 |
|---|---|---|---|---|---|
| APP-R001 | BLOCKING | Gate 0 总控复审与用户批准 | Gate 0 基线已锁定；用户后续另行授权 APP-000 产出 Gate 1–5 草案 | 已满足 | CLOSED |
| APP-R002 | IMPORTANT | 五个子页 URL 均为 provisional，内容未启动且 route 未验证 | 只使用 Page ID/route key；不输出 href、CTA 或 ItemList URL | 逐页 URL、内容和 `tio2-my` live route 批准 | OPEN |
| APP-R003 | IMPORTANT | 产品—应用基础映射证据门禁 | PRODUCT V0.2.1 是当前全站中性关系基线 | 已满足；继续禁止推荐、排名、保证和等效 | CLOSED |
| APP-R004 | IMPORTANT | M-996/M-2196 比较、差异与选择理由未解冻 | Coatings/Sulfate 基础关系保持 verified；独立 `comparison_hold` 禁止比较定位，不得误判为 Application conflict | 独立比较证据与公开措辞获批 | OPEN |
| R-M2377-TDS | HARD_GATE | M-2377 缺少最新批准 TDS 与专项 Application / Process 技术审查 | 4 conflict + 2 no-public 与 Process conflict 全部 `DO_NOT_RENDER` | 最新批准 TDS + 专项技术审查 | OPEN_HARD_GATE |
| APP-R005 | IMPORTANT | Documents、RFQ 等 supporting route/workflow 未批准或未验证 live | 条件单元整体省略；不硬编码、不 fallback | 对应内容/workflow/route 在 `tio2-my` 逐项通过 | OPEN |
| APP-R006 | IMPORTANT | Footer 不得增加登记册外的 Legal/Privacy 入口 | 只使用登记/批准入口 | 持续治理控制，不由 Gate 0 自动关闭 | CONTROLLED_IN_APPROVED_BASELINE |
| APP-DEP-001 | BLOCKING_DEPENDENCY | PRODUCT V0.2.1 已通过总控复审并成为当前有效基线 | 全站只使用 V0.2.1 CSV 与两份审计；V0.2/V0.1/M-350 不作为并行当前输入 | 已满足；持续执行单一来源检查 | CLOSED |

## 13. Gate 1 验收自检

- [x] APP-000 唯一身份、Mapping、Verification、关键词 owner 和 Navigation intent 已核对。
- [x] 五个子页保持 `PROVISIONAL_URL` 和 `QUALITATIVE_KEYWORD_EVIDENCE`，没有状态升级。
- [x] 直接 SERP 证据与纯定性聚类已区分，没有伪造搜索量。
- [x] APP-000 继续不推荐、排序、比较或列出具体型号。
- [x] M-350 跨页证据没有被扩展成 Hub 推荐权限。
- [x] PRODUCT V0.2.1 的 84 行、25 verified、4 conflict、55 no-public 与 13 verified Process 已纳入。
- [x] Coatings 7、Plastics 7、Masterbatch 6、Printing Inks 3、Paper 1、Specialty Materials 1 与 CSV 一致。
- [x] 25 条关系只获得中性 Grade-to-Review 资格，没有扩展为推荐、排名、性能、保证或等效。
- [x] 55 条 NO_PUBLIC_MAPPING 没有被改写成不适用或不推荐。
- [x] M-2377 `R-M2377-TDS` 硬门禁未解开；M-996/M-2196 基础关系与独立 `comparison_hold` 已正确分域。
- [x] Route、content、workflow、live 和事实资格已分开记录。
- [x] APP-DEP-001 与 APP-R003 已关闭；APP-R002、APP-R004、APP-R005 保持 OPEN。
- [x] Gate 1 研究/证据草案完整，可提交总控审查。
- [x] APP-R002–R005 保持 OPEN，APP-R006 继续受控。
- [x] 未创建或启动任何 Application 子页。
- [x] Gate 2–5 仅按用户后续授权形成独立草案；未把草案当作 Gate 批准，未进入 Gate 6/7 或开发。
- [x] 未修改 `D:\16Wordpress_nextjs`，未编写代码。

## 14. 提交与版本记录

### 14.1 Gate 1 提交状态

| 项目 | 状态 |
|---|---|
| Gate 0 | `APPROVED`；2026-08-30 用户明确批准 |
| Gate 1 Evidence Audit | `DRAFT_FOR_GATE_1_REVIEW` |
| Gate 1 完整度 | `COMPLETE_FOR_PROJECT_CONTROL_REVIEW` |
| 产品关系基线 | `APPROVED_RELATION_BASELINE`；APP-DEP-001 `CLOSED` |
| 总控结论 | 待审查 |
| 用户批准 | 未批准 |
| Gate 2–5 | 用户已授权产出；四个独立草案已形成并提交总控审查，均未批准 |
| Application 子页 | `NOT_STARTED`；禁止启动 |

### 14.2 版本记录

| 版本 | 日期 | 变更 | 批准状态 |
|---|---|---|---|
| V0.1 | 2026-08-30 | 初始 APP-000 Gate 1 Research and Evidence Audit；核验五应用 owner、搜索意图、产品—应用证据和 route 门禁 | `DRAFT_FOR_GATE_1_REVIEW`；待总控与用户审查 |
| V0.1 dependency update | 2026-08-30 | 用户确认 14 型号统一关系矩阵方案；登记 APP-DEP-001，完成不依赖最终型号映射的研究，保留 M-350 当前基线 | `PARTIAL_PENDING_APPROVED_14_GRADE_MATRIX`；Gate 2 禁止 |
| V0.1 relation baseline update | 2026-08-30 | 用户授权 PRODUCT V0.2 且总控独立复验 18 PASS / 0 FAIL；同步 25/4/55 关系、Process 基础关系及冻结边界 | 历史批准基线；已由 V0.2.1 取代为当前关系源 |
| V0.1 relation governance update | 2026-08-30 | 总控复审通过 PRODUCT V0.2.1；关系集合不变，新增 `R-M2377-TDS` 并将 M-996/M-2196 比较冻结拆入独立 `comparison_hold` | `COMPLETE_FOR_PROJECT_CONTROL_REVIEW`；作为 Gate 2–5 当前输入 |
| V0.1 downstream design authorization | 2026-08-30 | 用户统一要求四个一级页面按 PRODUCT V0.2.1 完成设计；APP-000 使用本审计输入形成 Gate 2–5 草案 | Gate 1–5 分别提交总控审查；无 Gate 状态自动升级 |
