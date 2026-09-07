# MARKET-000 Brazil PT-BR Localization Relationship Audit V0.1

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| Parent Page ID | `MARKET-000` |
| 被审计关系 | `MARKET-BR-PT` localized relation |
| Provisional URL | `/pt-br/markets/brazil/` |
| Gate | Gate 1 — Brazil PT-BR Localization Audit |
| 版本 | V0.1 |
| 日期 | 2026-08-29 |
| 状态 | `APPROVED_LOCALIZATION_GATE_BASELINE` |
| Parent 生命周期 | `APPROVED_FOR_DESIGN` |
| 当前结论 | `LOCALIZATION_HOLD` / `DO_NOT_RENDER` |
| 授权来源 | 2026-08-29 用户批准 MARKET-000 Gate 0，仅授权审计本页与 PT-BR 关系门禁 |
| 审计范围 | MARKET-000 是否可显示 PT-BR 入口，以及未来语言关系必须满足的 URL、文案、Canonical、hreflang、Schema、sitemap 和 route 条件 |
| 排除范围 | 启动 `MARKET-BR-PT` 子页、撰写/翻译 PT-BR 正文、批准 URL、Gate 2、线框、视觉、开发或 `D:\16Wordpress_nextjs` |
| 审核人 | 项目总控与质量审查 |
| 最终批准人 | 用户 |
| 批准记录 | 2026-08-29：总控复审 PASS；用户批准本审计作为 MARKET-000 localization-gate baseline；该批准不批准 PT-BR URL、文案或子页，`LOCALIZATION_HOLD / DO_NOT_RENDER` 继续生效 |

本审计不是 Brazil PT-BR 页面任务卡，也不批准该子页。它只为 MARKET-000 的 localized relation 给出确定性省略规则和未来关闭条件。

## 1. 当前结论

| 检查项 | 当前状态 | MARKET-000 行为 |
|---|---|---|
| Page ID | `MARKET-BR-PT` 已登记 | 仅作内部 relation key |
| URL | `PROVISIONAL_URL` | 不硬编码，不作为永久路由 |
| Language | `PT-BR` 规划值 | 不等于文案已本地化 |
| Verification | `LOCALIZATION_REVIEW_REQUIRED` | localized relation 不公开 |
| Keyword | `fornecedor de dióxido de titânio` 已映射 | 不把关键词映射当作翻译或页面批准 |
| PT-BR copy | 未建立/未批准 | 不撰写、不渲染 |
| Native review | 未提供 | 不渲染 |
| Canonical | 未批准 | 不输出 |
| Hreflang | 未批准 | 不输出 |
| Schema/inLanguage | 未批准 | 不输出 PT-BR 关系 |
| Sitemap/menu | 未批准 | 不输出 |
| `tio2-my` live route | `NOT_VERIFIED_LIVE` | 不输出入口 |

结论：MARKET-000 的 Brazil 区块只能保留 English Brazil 关系。PT-BR 入口、语言切换、`Português` 标签、alternate URL、hreflang、Schema relation 和 sitemap 项全部省略，且不得显示 “coming soon”、`provisional` 或其他内部状态。

## 2. 权威输入

| 输入 | 路径 | 证明范围 |
|---|---|---|
| Page Registry | `docs/architecture/PAGE_REGISTRY_V0.1.md` | Page ID、provisional URL、页面类型 |
| Keyword Master | `research/keyword/11_page_keyword_master.csv` | PT-BR keyword owner、语言与 cannibalization 边界 |
| Project Status | `00_PROJECT_STATUS.md` | Brazil PT-BR 可做研究/结构，但 URL、语言和本地化文案仍需批准 |
| PRD V0.4 | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | Brazil EN/PT 页面职责与本地化门禁 |
| Markets Playbook | `docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md` | localized relation、route、hreflang、Schema 与 Buyer Clean 规则 |
| MARKET-000 Brief | `docs/page-briefs/MARKET-000_MARKETS_BRIEF_V0.1.md` | LOC-001 / CL-005 与 Hub `hreflang=NOT_APPLICABLE` |
| Keyword market opportunity | `research/keyword/06_market_opportunity.csv` | PT-BR 值得后续人工审查的定性研究背景；不批准语言架构 |

## 3. 页面与语言关系边界

| Page | 规划语言 | 规划 URL | 当前关系 |
|---|---|---|---|
| `MARKET-000` | EN / GLOBAL | `/markets/` | 全球英文导航 Hub；没有 PT-BR 对应 Hub |
| `MARKET-BR-EN` | EN / BRAZIL | `/markets/brazil/` | English Brazil Market landing page |
| `MARKET-BR-PT` | PT-BR / BRAZIL | `/pt-br/markets/brazil/` | 暂定 localized Market landing page；未批准 |

`MARKET-BR-PT` 即使未来获批，也只可能与 `MARKET-BR-EN` 建立经审核的语言关系；它不会自动成为 `MARKET-000` 的 PT-BR alternate。MARKET-000 当前继续 `hreflang=NOT_APPLICABLE`。

## 4. 未来本地化审查要求

以下条件用于未来关闭 MKT-R003，不表示当前已满足：

### 4.1 语言与内容

- 由 Brazilian Portuguese 母语、熟悉 B2B 化工采购语境的 reviewer 审核。
- 从买家任务重新写作，不做英文 Brazil 页逐句机器翻译。
- `fornecedor`、`fabricante`、`importador`、`distribuidor` 等角色词必须与可验证主体身份一致。
- 行业、产品、文件、法规和贸易术语必须在上下文中自然，不用关键词堆砌。
- 数值、单位、日期、标点和大小写遵循批准的 PT-BR 编辑规范；不得擅自换算或改写技术数据。
- 表单字段、验证、错误、成功、隐私和替代联系路径必须一并本地化，不只翻译正文。
- 长文本必须通过 Mobile、200% zoom、按钮和折叠控件压力测试。

### 4.2 事实与合规

- 不得声称 Brazil 当地办公室、仓库、库存、生产、经销网络、港口、交期或本地支持，除非有当前一方证据和公开批准。
- 不得把 Malaysia origin 写成规避、绕过、改变关税/贸易措施适用性的方式。
- 任何贸易、反倾销、关税、进口或法规结论必须使用当前 Brazil 官方来源，记录产品/原产地范围、日期和 freshness。
- 文件、认证、REACH、COO、TDS/SDS/COA 可用性必须由 Documents owner 与当前资料证明。
- 产品—应用—市场关系必须有技术和市场证据，不从英文分类直接推断。

### 4.3 SEO 与语言架构

- URL 是否采用 `/pt-br/markets/brazil/` 必须由用户明确批准；当前值保持 provisional。
- `MARKET-BR-EN` 与 `MARKET-BR-PT` 各自使用 self-canonical；准确 URL 以最终批准为准。
- 只有两页内容均获批准且 live 后，才评估互相的 `hreflang="en"` / `hreflang="pt-BR"` 关系。
- `x-default` 不自动添加；需独立决定其目标与用户意图。
- MARKET-000 不因 Brazil PT-BR 子页存在而获得 PT-BR alternate。
- Title、H1、Meta、Open Graph、Schema visible copy 与正文必须由本地化 reviewer 一致审核。
- `inLanguage`、ItemList、Breadcrumb、sitemap 与 menu 只能反映真实可见且 live 的语言关系。
- English Brazil supplier 词留在 `MARKET-BR-EN`；Portuguese supplier 词留在 `MARKET-BR-PT`，避免语言内耗。

## 5. MARKET-000 条件渲染合同

`PTBR_RELATION_AVAILABLE=true` 仅在以下所有条件同时满足时成立：

1. `MARKET-BR-PT` URL 获用户最终批准。
2. 独立子页任务卡获批准。
3. PT-BR 正文、SEO、GEO、CTA、文件与表单语言由合格 reviewer 审核通过。
4. 事实与受限声明满足证据门禁。
5. Canonical、hreflang、Schema、sitemap 与 menu 关系获批准。
6. `site_scope=tio2-my` 中目标 route 和正确 Canonical 已验证 live。
7. English/PT-BR 页面不存在明显意图冲突或不完整语言体验。

否则 `PTBR_RELATION_AVAILABLE=false`，并执行以下原子省略：

- 不显示 PT-BR 标签、按钮、链接、语言切换或 teaser。
- 不输出 alternate/hreflang、PT-BR URL、Schema relation 或 sitemap entry。
- 不保留空分隔符、空语言区、禁用按钮或内部状态。
- Brazil English 区块自然闭合，Mobile/desktop 布局不留空位。

## 6. 未来 QA 状态矩阵

| 状态 | 预期行为 |
|---|---|
| URL provisional | PT-BR 关系完全省略 |
| URL approved，但 copy 未审 | 完全省略 |
| Copy approved，但 route 未 live | 完全省略 |
| Route live，但 Canonical/hreflang 不一致 | 完全省略并阻塞发布 |
| 语言关系全部批准且 live | 显示经批准的 localized relation；可见内容与机器可读关系一致 |
| PT-BR 目标跨 scope 回退 | 禁止；完全省略并登记问题 |
| PT-BR 长文本造成溢出 | 阻塞对应视觉/交付批准 |
| 翻译出现未验证能力或贸易声明 | 删除受影响声明并保持 Claim gate；不得以语言批准覆盖事实门禁 |

## 7. Gate 1 自检

- [x] Page ID、provisional URL、language 和 verification 状态已核对。
- [x] MARKET-000 与 Brazil EN/PT-BR 的语言关系没有混写。
- [x] MARKET-000 继续 `hreflang=NOT_APPLICABLE`。
- [x] PT-BR 入口、Schema、sitemap 和 menu 当前均为 `DO_NOT_RENDER`。
- [x] 未撰写或翻译任何 PT-BR 页面正文。
- [x] 未批准 URL、Canonical、hreflang 或 `x-default`。
- [x] 未启动 `MARKET-BR-PT` 或其他 Market 子页。
- [x] 未进入 Gate 2、线框、视觉或开发。

## 8. Open Item

| Review ID | 级别 | 问题 | 当前控制 | 关闭条件 | 状态 |
|---|---|---|---|---|---|
| MKT-R003 | IMPORTANT | Brazil PT-BR URL、语言、本地化内容与机器可读关系未批准 | `LOCALIZATION_HOLD`；localized relation 原子省略 | URL、独立任务卡、本地化内容、事实、Canonical/hreflang/Schema/sitemap/menu 和 `tio2-my` live route 全部获批 | OPEN |

## 9. 版本记录

| 版本 | 日期 | 变更 | 批准状态 |
|---|---|---|---|
| V0.1 | 2026-08-29 | 初始 MARKET-000 Brazil PT-BR localized-relation audit；保持 URL 和关系冻结并定义未来关闭条件 | `DRAFT_FOR_GATE_1_REVIEW`；待总控与用户审查 |
| V0.1 approval record | 2026-08-29 | 总控复审 PASS并获用户最终批准为 localization-gate baseline；MKT-R003、provisional URL 与原子省略不变 | `APPROVED_LOCALIZATION_GATE_BASELINE`；PT-BR 关系仍未批准 |
