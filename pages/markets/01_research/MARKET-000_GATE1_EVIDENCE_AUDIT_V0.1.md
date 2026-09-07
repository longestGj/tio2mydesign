# MARKET-000 Gate 1 Research and Evidence Audit V0.1

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| Page ID | `MARKET-000` |
| 页面 | Markets |
| URL | `/markets/` |
| Gate | Gate 1 — Research and Evidence Audit |
| 版本 | V0.1 |
| 日期 | 2026-08-29 |
| 状态 | `APPROVED_GATE_1_BASELINE` |
| 页面生命周期 | `APPROVED_FOR_DESIGN` |
| 授权来源 | 2026-08-29 用户批准 MARKET-000 Gate 0，仅授权本页进入 Gate 1 |
| 审计范围 | MARKET-000 的页面身份、搜索意图、买家问题、可公开架构关系、证据门禁和 Claim Register 建议 |
| 排除范围 | Market 子页内容研究、Gate 2 正文、线框、视觉、开发、测试、部署、发布及 `D:\16Wordpress_nextjs` |
| 审核人 | 项目总控与质量审查 |
| 最终批准人 | 用户 |
| 批准记录 | 2026-08-29：总控复审 PASS；用户最终批准本审计为 MARKET-000 Gate 1 Evidence baseline，并授权 Gate 2 Content Architecture |

本审计只决定哪些信息具备进入 MARKET-000 Gate 2 内容架构的证据资格，不批准最终文案、链接、Schema 输出或页面发布。

## 1. 审计结论摘要

1. MARKET-000 的 Page ID、URL、Navigation hub 类型、`NO_PRIMARY_KEYWORD`、P1、`APPROVED_NAVIGATION_HUB` 和 `NO_DIRECT_KEYWORD_TARGET` 已由登记册与页面—关键词主表一致证明。
2. EU、United Kingdom、India、Brazil 四个第一层市场体系，以及 EU 总页与 Germany、Italy、Spain、Poland、Netherlands、Belgium 六个国家入口，属于已批准的信息架构关系。
3. 国家/区域 supplier 查询继续由对应 Market landing page 独占；MARKET-000 只承担导航和下一步选择，不增加商业主关键词。
4. 本项目尚无一套经批准、专供 MARKET-000 发布的公司能力、市场供货、文件可用性、物流或贸易时效事实包。相关公开声明继续冻结。
5. MARKET-000 可以在 Gate 2 编写页面职责、选择逻辑、owner 关系和贸易信息边界；所有出站链接仍受 Route Audit 控制。
6. Brazil PT-BR 关系继续 `DO_NOT_RENDER`，由独立 Localization Audit 控制。
7. MKT-R002、MKT-R003、MKT-R004、MKT-R005 继续 `OPEN`。本审计不关闭这些问题。

## 2. 证据规则

### 2.1 证据用途分层

| 证据类型 | 可以证明 | 不能证明 |
|---|---|---|
| 根治理、PRD、登记册、关键词主表 | 页面身份、页面数量、URL 规划、页面职责、关键词归属和内耗边界 | 公司供应能力、库存、交期、文件可用性、法规适用性或贸易结论 |
| 已批准 Gate 0 Playbook/Brief | 页面模块方向、买家选择逻辑、SEO/GEO/Schema 边界 | 最终文案已批准、链接已上线、市场事实已验证 |
| 已落盘关键词与 SERP 研究 | 查询意图和结果类型的定性背景 | 搜索量推断、TiO2 Malaysia 能力、竞争者声明真实性 |
| 当前一方公司/技术/运营证据 | 在适用范围内支持对应事实 | 超出来源范围的市场、产品或运营承诺 |
| 当前官方法规/贸易来源 | 在明确日期、产品、原产地和法律范围内支持政策事实 | 永久结论、其他司法辖区结论或规避建议 |

### 2.2 公共行为

| 决定 | 公共行为 |
|---|---|
| `RENDER` | 证据资格允许进入 Gate 2；最终文案仍需 Gate 2 审批 |
| `RENDER_WITH_QUALIFIER` | 只允许带明确范围/边界的表述进入 Gate 2 |
| `CONTROLLED_REQUEST_ONLY` | 仅可导向受控申请流程，不公开文件或能力承诺 |
| `DO_NOT_RENDER` | 不进入可见 HTML、JSON、API、Schema、Meta、OG 或 ALT |

链接资格与事实资格分开。事实可以具备 `RENDER` 资格，但对应 CTA 在 route 未批准并验证 live 前仍不公开。

## 3. 输入与可追溯性

| 输入 | 路径 | 本审计用途 | 结论 |
|---|---|---|---|
| 项目治理 | `AGENTS.md`、`00_PROJECT_STATUS.md`、`01_PROJECT_INDEX.md`、`02_DIRECTORY_GUIDE.md` | 范围、证据、状态、非开发边界 | Binding |
| Page Registry | `docs/architecture/PAGE_REGISTRY_V0.1.md` | 12 个 Markets Page ID、URL、类型和状态 | Architecture evidence |
| PRD V0.4 | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | Hub、EU 总页与国家页职责 | Architecture/content-boundary evidence |
| Keyword Master | `research/keyword/11_page_keyword_master.csv` | 主关键词、搜索意图、owner 和 cannibalization | SEO architecture evidence |
| Markets Playbook | `docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md` | Gate、Claim、route、freshness 和视觉边界 | Approved Gate 0 baseline |
| MARKET-000 Brief | `docs/page-briefs/MARKET-000_MARKETS_BRIEF_V0.1.md` | 页面合同与 Claim ID | Approved Gate 0 baseline |
| Market opportunity | `research/keyword/06_market_opportunity.csv` | 市场级定性背景 | Supporting only; cannot override master or prove company capability |
| SERP evidence | `research/keyword/07_serp_evidence.csv` | 国家/区域 supplier 查询的结果类型背景 | Supporting only; research summary仍有人工复核状态 |
| Keyword QA | `research/keyword/09_qa_report.md` | 研究限制、Unavailable 与 VERIFY_REQUIRED 边界 | Supporting limitation record |

2026-08-29 Gate 1 开始前清点 `D:\23MySec` 共 362 个文件，`pages/markets` 内无既有页面成果。清点未发现一套已批准且明确授权 MARKET-000 发布的公司能力、市场供货、文件可用性或物流事实包。

本次工作中出现过的临时在线搜索结果未按关键词专项规则形成完整本地 raw capture 和 manifest，因此全部排除，不用于本审计结论。本文只引用现有已落盘项目资料。

## 4. 搜索意图与买家问题审计

### 4.1 页面意图

| 项目 | 审计结果 |
|---|---|
| Primary Keyword | `NO_PRIMARY_KEYWORD`；保持不变 |
| Search Intent | `N` — Navigation |
| Buyer Stage | Navigation |
| Secondary labels | EU、United Kingdom、India、Brazil；只作为目的市场实体标签 |
| 排除词 | `all country-level supplier keywords` |
| 内耗边界 | Hub 不与任何 Market landing page 竞争 supplier 查询 |

既有本地 SERP 研究显示 supplier 查询通常由供应商、分销商、目录或产品/市场落地页承接。该研究只支持“supplier 意图应留在子页”的方向，不构成给 MARKET-000 增加 supplier 主词的理由。

### 4.2 Buyer Question 资格

| Question ID | 问题类型 | Gate 1 证据资格 | Gate 2 边界 |
|---|---|---|---|
| Q01 | 有哪些目的市场体系？ | `VERIFIED_ARCHITECTURE` | 列出四个体系，不声明覆盖能力 |
| Q02 | EU 总页还是国家页？ | `VERIFIED_PAGE_ROLE` | 解释页面职责，不写法规结论 |
| Q03 | 有哪些 EU 国家入口？ | `VERIFIED_ARCHITECTURE` | 列出六国；链接受 route gate |
| Q04 | Market page 帮助核对什么？ | `VERIFIED_PAGE_ROLE` | 只说明产品、应用、文件、贸易、RFQ owner 关系 |
| Q05 | 在哪里查看当前贸易政策？ | `VERIFIED_OWNER_BOUNDARY` | 指向 Resources owner；不得给政策结论 |
| Q06 | 不知道型号从哪里开始？ | `VERIFIED_OWNER_RELATION` | Products/Applications 关系；链接受 route gate |
| Q07 | 在哪里申请技术或原产地文件？ | `VERIFIED_OWNER_RELATION` | Documents/Request Documents；不承诺可用性 |
| Q08 | 如何按目的市场询价？ | `VERIFIED_CONVERSION_RELATION` | RFQ 独立；workflow/route 未批准前不公开 CTA |

## 5. Evidence Register 审计结果

| Evidence ID | 结论 | 状态 | 适用范围 |
|---|---|---|---|
| IA-001 | 固定八项 Header、Markets 当前项、Home 可见 | `VERIFIED_ARCHITECTURE` | GLOBAL_HEADER |
| IA-002 | `/markets/` 与 `Home > Markets` | `VERIFIED_ARCHITECTURE` | Page identity / Breadcrumb |
| IA-003 | 四市场体系、EU 总页与六国关系 | `VERIFIED_ARCHITECTURE` | DESTINATION_SELECTOR |
| IA-004 | Footer 只使用登记入口和已验证主体信息 | `VERIFIED_GOVERNANCE` | GLOBAL_FOOTER |
| SEO-001 | Hub 无主关键词、可索引导航角色 | `VERIFIED_SEO_ARCHITECTURE` | SEO/HERO；最终 copy 待 Gate 2 |
| ROUTE-001 | 11 个 Market Page ID/规划 URL 可作为关系键 | `VERIFIED_MAPPING_ONLY` | 链接仍待 Route Audit/live 验证 |
| ROUTE-002 | Products、Applications、Documents 等 owner 关系存在 | `VERIFIED_ARCHITECTURE` | 链接仍待 Route Audit/live 验证 |
| LOC-001 | Brazil PT-BR 为暂定路由和待本地化关系 | `LOCALIZATION_REVIEW_REQUIRED` | 不公开 |
| CONTENT-001 | EU 总页与国家页职责不同 | `VERIFIED_PAGE_ROLE` | MARKET_CHOICE_GUIDE |
| FRESH-001 | Trade Update 由 Resources 承接并需 freshness | `VERIFIED_OWNER_BOUNDARY` | 不证明任何政策事实 |
| GEO-001 | Hub 只回答导航、owner 与下一步 | `VERIFIED_CONTENT_BOUNDARY` | BUYER_QUESTIONS |
| CONV-001 | RFQ 独立，只有明确选择才传 market | `VERIFIED_CONVERSION_CONTRACT` | CTA 仍待 workflow/route |
| VIS-001 | Industrial Editorial、EU 非对称、Mobile A1 | `APPROVED_INTERNAL_DIRECTION` | Gate 3–5；不是公共事实 |

## 6. Claim Register 建议

| Claim ID | Gate 1 结论 | 事实渲染资格 | 链接/机器可读行为 |
|---|---|---|---|
| CL-001 | MARKET-000 身份和 Breadcrumb 已验证 | `RENDER` | Canonical/Schema 最终在交付前复核 |
| CL-002 | 四市场体系与 EU 六国关系已验证 | `RENDER` | 目的地链接逐项 route gated；ItemList 只列可见关系 |
| CL-003 | 无主关键词、可索引导航职责已验证 | `RENDER` | Title/H1/Meta 最终 copy 待 Gate 2 |
| CL-004 | 11 个目的地只验证了 mapping/规划 URL | `DO_NOT_RENDER`（作为“可访问”声明） | 仅 live 后输出链接；不得声称页面可用 |
| CL-005 | Brazil PT-BR 未获 URL/语言/本地化批准 | `DO_NOT_RENDER` | 不进入链接、hreflang、Schema、sitemap 或菜单 |
| CL-006 | Products、Applications、Documents owner 关系已验证 | `RENDER`（关系说明） | CTA 逐目标 route gated |
| CL-007 | Resources 是 Trade Update owner | `RENDER_WITH_QUALIFIER`（只写边界） | 政策结论与 Trade Update 链接继续 `DO_NOT_RENDER`，直到官方来源、freshness、content、route 全部通过 |
| CL-008 | RFQ 是独立 Conversion owner | `DO_NOT_RENDER`（行动承诺） | workflow 与 route live 前不输出 CTA 或预填 |
| CL-009 | Header 八项、Markets 当前、Home 可见 | `RENDER` | 与批准全站 Header 一致 |
| CL-010 | Footer 只用登记入口/验证主体 | `RENDER` | 未登记入口不输出 |
| CL-011 | EU 总页与国家页承担不同职责 | `RENDER` | 只解释选择逻辑，不写当地事实 |
| CL-012 | Buyer Questions 的导航范围已验证 | `RENDER`（内容类型） | 最终答案待 Gate 2；默认无 FAQ/QAPage |
| CL-013 | 视觉方向是内部合同 | `DO_NOT_RENDER` | 仅供 Gate 3–5 |
| CL-014 | 供应、制造、认证、文件可用性、库存、价格、MOQ、交期、物流、法规或贸易具体事实无 MARKET-000 发布证据 | `DO_NOT_RENDER` | 不进入任何公开或机器可读表面 |

## 7. 可继续与冻结范围

| 范围 | 当前决定 | 对下一 Gate 的影响 |
|---|---|---|
| 页面身份、四市场关系、EU 选择逻辑 | 可进入 Gate 2 候选 | 仍需 Gate 1 总控/用户批准后才可开始 Gate 2 |
| Owner 关系和下一步解释 | 可进入 Gate 2 候选 | CTA 由 Route Audit 独立控制 |
| Trade owner 边界 | 可进入 Gate 2 候选 | 不得写任何政策结论 |
| Brazil PT-BR | 冻结 | Localization Audit 通过前完全省略 |
| 市场级应用/产品推荐 | 冻结 | 需要逐关系技术/市场批准证据 |
| 公司供应/制造/origin/traceability | 冻结 | 需要当前一方证据和公开措辞批准 |
| 文件/认证可用性 | 冻结 | 需要文件 owner、版本、范围和受控流程批准 |
| 库存、价格、MOQ、包装、港口、交期、运输 | 冻结 | 需要运营/销售/物流批准证据 |
| 贸易、关税、反倾销、法规 | 冻结 | 需要当前官方来源、适用范围和 freshness 审计 |

## 8. Gate 1 验收自检

- [x] MARKET-000 的唯一身份与 SEO owner 已核对。
- [x] 12 个 Markets 关系没有被改成 12 个已上线页面。
- [x] Hub 与 Market landing page 的 supplier 关键词边界保持不变。
- [x] 买家问题均有证据类型和 Gate 2 边界。
- [x] 架构关系与公司/市场能力事实已分离。
- [x] Route、Localization、freshness 与 content approval 已分离。
- [x] 未使用临时在线结果形成结论。
- [x] MKT-R002/R003/R004/R005 保持 OPEN。
- [x] 未编写 Gate 2 正文、线框或视觉稿。
- [x] 未启动任何 Market 子页。

## 9. Open Items

| Review ID | 级别 | 问题 | 当前控制 | 关闭条件 | 状态 |
|---|---|---|---|---|---|
| MKT-R002 | IMPORTANT | 市场应用、产品、文件、物流和供应差异缺少完整证据 | CL-014 全部不渲染 | 逐事实的一方/技术/运营批准证据 | OPEN |
| MKT-R003 | IMPORTANT | Brazil PT-BR URL 和本地化未批准 | LOC-001/CL-005 不渲染 | URL、语言、本地化、Canonical/hreflang 与用户批准 | OPEN |
| MKT-R004 | IMPORTANT | 下游 route 未验证 live | 所有链接使用 Page ID/route key 并条件渲染 | 对应 route 获批准并在 `tio2-my` 验证 live | OPEN |
| MKT-R005 | IMPORTANT | Trade Update 官方来源和 freshness 未审 | Hub 只保留 owner 边界，不给政策结论 | 对应 Resources 内容、官方来源、日期、freshness 与 route 全部批准 | OPEN |

## 10. 版本记录

| 版本 | 日期 | 变更 | 批准状态 |
|---|---|---|---|
| V0.1 | 2026-08-29 | 初始 MARKET-000 Gate 1 Research/Evidence Audit；核验架构关系并冻结所有无证据市场事实 | `DRAFT_FOR_GATE_1_REVIEW`；待总控与用户审查 |
| V0.1 approval record | 2026-08-29 | 总控复审 PASS、G1-01 修订通过并获用户最终批准；MKT-R002–005 与所有事实门禁不变 | `APPROVED_GATE_1_BASELINE`；授权 MARKET-000 Gate 2 |
