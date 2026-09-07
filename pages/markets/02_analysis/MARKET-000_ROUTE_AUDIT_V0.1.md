# MARKET-000 Route and Availability Audit V0.1

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| Page ID | `MARKET-000` |
| 页面 | Markets |
| URL | `/markets/` |
| Gate | Gate 1 — Route Audit |
| 版本 | V0.1 |
| 日期 | 2026-08-29 |
| 状态 | `APPROVED_ROUTE_GATE_BASELINE` |
| 页面生命周期 | `APPROVED_FOR_DESIGN` |
| 授权来源 | 2026-08-29 用户批准 MARKET-000 Gate 0，仅授权本页 Gate 1 |
| Source of truth | `PAGE_REGISTRY_V0.1.md`、`11_page_keyword_master.csv`、`00_PROJECT_STATUS.md`、批准 Playbook/Brief |
| 审计范围 | MARKET-000 的出站 Page ID/route key、URL 状态、内容状态、live/freshness 条件和公开降级行为 |
| 排除范围 | 创建/修改任何目标页、Market 子页内容、Gate 2、线框、视觉、开发或 `D:\16Wordpress_nextjs` |
| 审核人 | 项目总控与质量审查 |
| 批准记录 | 2026-08-29：总控复审 PASS；用户最终批准本审计为 MARKET-000 当前 route-gate baseline；22 个受审外部单元仍为 `NOT_VERIFIED_LIVE` |

本审计只记录路由意图和公开条件。登记册中存在 Page ID 或 URL，不等于目标页面已完成、已上线或可以公开链接。

## 1. 路由状态模型

每个目标必须分别记录以下状态：

| 状态 | 含义 |
|---|---|
| `mapping_status` | 页面与关键词/职责映射状态 |
| `url_approval_status` | URL 是稳定登记、规划，还是 provisional |
| `content_approval_status` | 目标页面内容是否达到允许公开的 Gate |
| `route_live_status` | `site_scope=tio2-my` 中目标是否已由外部开发项目验证可访问 |
| `freshness_status` | 仅对时间敏感 Resources 内容适用 |
| `localization_status` | 仅对语言关系适用 |

在当前项目资料中，没有外部开发项目提交的 live-route 验证记录。因此本审计对所有外部目标使用 `NOT_VERIFIED_LIVE`，不把它改写成“路由不存在”或“路由已上线”。

## 2. 统一公开规则

1. 页面规格和内容模型只使用 Page ID/route key 关联目标。
2. `APPROVED_*` mapping 不等于 `route_live=true`。
3. 只有 URL、内容和 `site_scope=tio2-my` route 均通过时，对应链接/CTA 才公开。
4. `PROVISIONAL_URL` 不写入永久组件依赖、Canonical、hreflang、sitemap 或 Schema URL。
5. 目标缺失、未批准、重定向到非批准 Canonical、跨 scope 或不可访问时，完整行动单元不渲染；不得留下空卡、空标题、箭头、标点或隐藏链接。
6. 页面可以在策划阶段显示已批准的市场关系名称；这不等于声明目标页面已开放。公开行动链接仍逐项门禁。
7. 不从 TIOVAR、mytio2 或其他 `site_scope` 回退内容、菜单、媒体、SEO、缓存、路由或表单上下文。
8. 本审计不启动或批准任何 Market 子页。

## 3. Market 目的地矩阵

| Page ID | 关系 | 规划 URL | Mapping | URL 状态 | Content 状态 | Live 状态 | MARKET-000 公开行为 |
|---|---|---|---|---|---|---|---|
| `MARKET-EU-001` | EU 总页 | `/markets/european-union/` | `APPROVED_PRD_V0.3` | `REGISTERED_STABLE` | `NOT_STARTED` | `NOT_VERIFIED_LIVE` | EU 名称/职责可进入 Gate 2；Explore 链接不渲染 |
| `MARKET-EU-DE` | Germany | `/markets/germany/` | `APPROVED_PRD_V0.3` | `REGISTERED_STABLE` | `NOT_STARTED` | `NOT_VERIFIED_LIVE` | 国家名称可显示；链接不渲染 |
| `MARKET-EU-IT` | Italy | `/markets/italy/` | `APPROVED_PRD_V0.3` | `REGISTERED_STABLE` | `NOT_STARTED` | `NOT_VERIFIED_LIVE` | 国家名称可显示；链接不渲染 |
| `MARKET-EU-ES` | Spain | `/markets/spain/` | `APPROVED_PRD_V0.3` | `REGISTERED_STABLE` | `NOT_STARTED` | `NOT_VERIFIED_LIVE` | 国家名称可显示；链接不渲染 |
| `MARKET-EU-PL` | Poland | `/markets/poland/` | `APPROVED_PRD_V0.3` | `REGISTERED_STABLE` | `NOT_STARTED` | `NOT_VERIFIED_LIVE` | 国家名称可显示；链接不渲染 |
| `MARKET-EU-NL` | Netherlands | `/markets/netherlands/` | `APPROVED_PRD_V0.3` | `REGISTERED_STABLE` | `NOT_STARTED` | `NOT_VERIFIED_LIVE` | 国家名称可显示；链接不渲染 |
| `MARKET-EU-BE` | Belgium | `/markets/belgium/` | `APPROVED_PRD_V0.3` | `REGISTERED_STABLE` | `NOT_STARTED` | `NOT_VERIFIED_LIVE` | 国家名称可显示；链接不渲染 |
| `MARKET-UK-001` | United Kingdom | `/markets/united-kingdom/` | `APPROVED_PRD_V0.3` | `REGISTERED_STABLE` | `NOT_STARTED` | `NOT_VERIFIED_LIVE` | 名称/职责可进入 Gate 2；Explore 链接不渲染 |
| `MARKET-IN-001` | India | `/markets/india/` | `APPROVED_PRD_V0.3` | `REGISTERED_STABLE` | `NOT_STARTED` | `NOT_VERIFIED_LIVE` | 名称/职责可进入 Gate 2；Explore 链接不渲染 |
| `MARKET-BR-EN` | Brazil English | `/markets/brazil/` | `APPROVED_PRD_V0.3` | `REGISTERED_STABLE` | `NOT_STARTED` | `NOT_VERIFIED_LIVE` | 名称/职责可进入 Gate 2；Explore 链接不渲染 |
| `MARKET-BR-PT` | Brazil Portuguese | `/pt-br/markets/brazil/` | `PROVISIONAL_URL` | `PROVISIONAL` | `NOT_STARTED` | `NOT_VERIFIED_LIVE` | 整个语言关系不渲染；交由 Localization Audit |

`NOT_STARTED` 只记录目标内容尚未获页面级批准；本审计没有为这些目标建立任务卡、正文、研究或设计成果。

## 4. Supporting 目的地矩阵

| 目的 | Page ID / route key | 规划 URL | Mapping | Content/Workflow 状态 | Live 状态 | MARKET-000 规划用途 | 公开条件 |
|---|---|---|---|---|---|---|---|
| Products Hub | `PRODUCT-000` | `/products/` | `APPROVED_PRD_V0.3` | 由 Products 任务独立治理 | `NOT_VERIFIED_LIVE` | PROCUREMENT_PATHS | URL/content/live 全部通过 |
| Applications Hub | `APP-000` | `/applications/` | `PLANNED_ARCHITECTURE` | `NOT_APPROVED_FOR_PUBLIC_LINK` | `NOT_VERIFIED_LIVE` | PROCUREMENT_PATHS | URL approval + content approval + live |
| Documents Hub | `DOC-000` | `/documents/` | `PLANNED_ARCHITECTURE` | `NOT_APPROVED_FOR_PUBLIC_LINK` | `NOT_VERIFIED_LIVE` | PROCUREMENT_PATHS | URL approval + content approval + live |
| Resources Hub | `RES-000` | `/resources/` | `PLANNED_ARCHITECTURE` | `NOT_APPROVED_FOR_PUBLIC_LINK` | `NOT_VERIFIED_LIVE` | TRADE_BOUNDARY 的通用 owner | URL approval + content approval + live |
| About | `ABOUT-001` | `/about/` | `APPROVED_PRD_V0.3` | 事实证据仍受独立任务控制 | `NOT_VERIFIED_LIVE` | 可选信任 owner 关系 | content approval + live；不把关系改写成制造事实 |
| Request Documents | `CONV-DOC` | `/request-documents/` | `PLANNED_CONVERSION` | `WORKFLOW_NOT_APPROVED` | `NOT_VERIFIED_LIVE` | 文件申请路径 | workflow + route live；不得承诺文件可用 |
| Request a Quote | `CONV-RFQ` | `/request-a-quote/` | `PLANNED_CONVERSION` | `WORKFLOW_NOT_APPROVED` | `NOT_VERIFIED_LIVE` | Hero/Final RFQ | workflow + route live；明确选择才传 market |

## 5. Trade Update 路由与 freshness

| Page ID | Market | Mapping | Verification | Content 状态 | Freshness | Live | 当前行为 |
|---|---|---|---|---|---|---|---|
| `RES-TRADE-EU` | EU | `PLANNED_CONTENT` | `OFFICIAL_SOURCE_UPDATE_REQUIRED` | `NOT_APPROVED` | `NOT_AUDITED` | `NOT_VERIFIED_LIVE` | 不渲染链接或政策摘要 |
| `RES-TRADE-UK` | UK | `PLANNED_CONTENT` | `OFFICIAL_SOURCE_UPDATE_REQUIRED` | `NOT_APPROVED` | `NOT_AUDITED` | `NOT_VERIFIED_LIVE` | 不渲染链接或政策摘要 |
| `RES-TRADE-IN` | India | `PLANNED_CONTENT` | `OFFICIAL_SOURCE_UPDATE_REQUIRED` | `NOT_APPROVED` | `NOT_AUDITED` | `NOT_VERIFIED_LIVE` | 不渲染链接或政策摘要 |
| `RES-TRADE-BR` | Brazil | `PLANNED_CONTENT` | `OFFICIAL_SOURCE_UPDATE_REQUIRED` | `NOT_APPROVED` | `NOT_AUDITED` | `NOT_VERIFIED_LIVE` | 不渲染链接或政策摘要 |

TRADE_BOUNDARY 可以在没有链接时独立解释：“详细且时效性的贸易信息由 Resources 更新页负责”。它不得引用措施状态、税率、适用原产地、日期或规避结论。

## 6. 模块路由合同

| Module | 目标 | 规划行为 | 当前 route-safe 行为 |
|---|---|---|---|
| GLOBAL_HEADER | 顶层 Page ID + `CONV-RFQ` | 保持批准导航顺序 | 每个目标按全站 route 状态处理；不得跨 scope 回退 |
| BREADCRUMB | `HOME-001` | `Home > Markets` | Home 关系保留；实际 href 在发布前验证 |
| HERO | `#destination-selector`、条件 `CONV-RFQ` | 本地锚点为主 CTA | 本地锚点可用；RFQ CTA/相关句子全部省略 |
| DESTINATION_SELECTOR | 10 个 EN Market route + PT-BR 条件关系 | 显示四市场与 EU 六国结构 | 结构名称可进入 Gate 2；每个 Explore/国家链接原子门禁；PT-BR 整体省略 |
| PROCUREMENT_PATHS | `PRODUCT-000`、`APP-000`、`DOC-000` | 解释 owner 并提供条件 CTA | Owner 说明可独立；未 live CTA 省略；全无 CTA 时不得留下空操作区 |
| TRADE_BOUNDARY | `RES-TRADE-*` 或 `RES-000` | 解释时效性内容归属 | 边界答案可独立；政策摘要和链接全部省略 |
| BUYER_QUESTIONS | Local anchor + 条件 route | 回答导航问题 | 答案必须在无链接时完整，不出现“点击不可用入口”的句子 |
| FINAL_RFQ | `CONV-RFQ` | 独立行动模块 | workflow/route 未通过时整个模块和 RFQ 依赖句子省略 |

## 7. 确定性状态

- `MARKET_ROUTE_AVAILABLE[page_id]=true`：目标 URL 已批准、目标内容可公开、`site_scope=tio2-my` route 已验证 live，且 Canonical 未偏离登记值。
- `PTBR_RELATION_AVAILABLE=true`：Localization Audit 的 URL、语言、文案、Canonical、hreflang、Schema、sitemap 与 route 条件全部批准。
- `SUPPORT_ROUTE_AVAILABLE[page_id]=true`：目标 Page ID、URL、内容和 live 状态全部通过。
- `TRADE_ROUTE_AVAILABLE[page_id]=true`：目标内容已批准、官方来源仍有效、`freshness_status=CURRENT` 且 route live。
- `RFQ_AVAILABLE=true`：`CONV-RFQ` workflow 与 route 在 `tio2-my` 中均已批准并验证。

任何状态不满足时，不使用默认 `true`，也不从其他站点推断。

## 8. SEO、GEO 与 Schema 路由规则

1. MARKET-000 Canonical 固定为 `https://tio2malaysia.com/markets/`；发布前仍需验证实际响应和唯一性。
2. ItemList 只能反映 Buyer Clean 中实际可见的市场关系。
3. 只有 live 目标才可写入 item URL；不得把 provisional、未批准或死链写入 Schema。
4. BreadcrumbList 的 Home/Markets URL 在发布前验证，不因规划路径自动视为 live。
5. PT-BR 未批准前不进入 `hreflang`、`inLanguage` 关系、ItemList、sitemap、菜单或 alternate URL。
6. Schema 不创建当地办公室、仓库、库存、服务范围或物流事实。
7. 目标链接省略后，Title、H1、Meta 和 GEO answer 仍不得声称“可进入全部市场页”。

## 9. Handoff 与发布阻塞规则

本审计允许继续进行页面内容规划，但不把 route 未验证视为已经解决。进入最终开发交付前，所有批准视觉中可点击的目标必须有确定 route 结果；公开页面不得包含死链或跨 scope 回退。核心 Hub 若无法提供批准设计所需的目的地行动，应阻塞对应交付/发布状态，而不是伪造 live 状态。

## 10. Gate 1 自检

- [x] 11 个 Market 目标逐项记录 mapping、URL、content 和 live 状态。
- [x] Brazil PT-BR 保持 provisional 且完全不渲染。
- [x] Products、Applications、Documents、Resources、About 与 Conversion route 分开控制。
- [x] Trade Update 同时要求 content、official source、freshness 和 route。
- [x] 本地锚点与外部 Page ID route 已区分。
- [x] CTA 省略包含依赖句子、卡片和 Schema URL。
- [x] 没有把 `NOT_VERIFIED_LIVE` 写成已上线或永久不可用。
- [x] 没有创建或启动任何目标页面。
- [x] 没有进入 Gate 2、线框、视觉或开发。

## 11. Open Items

| Review ID | 级别 | 问题 | 当前控制 | 关闭条件 | 状态 |
|---|---|---|---|---|---|
| MKT-R003 | IMPORTANT | Brazil PT-BR URL/语言/本地化未批准 | 整个 localized relation 不渲染 | Localization Audit 获最终批准，且 route 条件满足 | OPEN |
| MKT-R004 | IMPORTANT | 所有下游 route 缺少 `tio2-my` live 验证，部分目标仍 planned/provisional | Page ID/route key + 原子条件渲染 | 对应目标 URL/content/live 逐项通过 | OPEN |
| MKT-R005 | IMPORTANT | Trade Update 未完成官方来源和 freshness 审计 | 无摘要、无链接、只保留 owner 边界 | Resources owner 完成官方来源、日期、freshness、内容和 route 批准 | OPEN |

## 12. 版本记录

| 版本 | 日期 | 变更 | 批准状态 |
|---|---|---|---|
| V0.1 | 2026-08-29 | 初始 MARKET-000 Route Audit；建立 11 个 Market 目标与 supporting/trade/CTA 的确定性门禁 | `DRAFT_FOR_GATE_1_REVIEW`；待总控与用户审查 |
| V0.1 approval record | 2026-08-29 | 总控复审 PASS并获用户最终批准；保留 22 个 `NOT_VERIFIED_LIVE`、MKT-R003/R004/R005 OPEN 和全部条件渲染 | `APPROVED_ROUTE_GATE_BASELINE`；授权 MARKET-000 Gate 2 |
