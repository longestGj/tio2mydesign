# MARKET-EU-NL · Current Gate Baseline Manifest V0.2

## 1. 当前状态与批准

- Page ID：MARKET-EU-NL；Netherlands / EN / `/markets/netherlands/`；主词 `titanium dioxide supplier netherlands`。
- Review ID：`MARKET-EU-NL-G1-01 = APPROVED / CLOSED`。
- 用户批准日期：2026-09-06；来源：用户对总控直接呈现的NL-D01方向/CTA与NL-D02 COO按申请提供回复“同意。下一步”。
- `NL-D01=USER_APPROVED`；`NL-D02=USER_APPROVED`；`CONTENT_INTENT_CONFIRMED=CONFIRMED`。
- 生命周期 `APPROVED_FOR_DESIGN` 仅表示Gate1成果可供后续使用，不构成Gate2或其他设计阶段授权。
- 本任务Gate2–10：`NOT_STARTED / NOT_AUTHORIZED`。Gate2由另一Controller负责；本执行子代理不启动下一页。
- 用户“下一步”由总控按既有串行合同安排下一个Gate1页面，不扩大本页阶段权限。

## 2. 当前唯一四核心组合

路径相对 `D:\23MySec`。V0.2为当前批准Gate1组合；V0.1全部保留为历史，不覆盖。Manifest不记录自身哈希。

| 角色 | 路径 | SHA-256 |
|---|---|---|
| 核心1：完整Brief | docs/page-briefs/MARKET-EU-NL_NETHERLANDS_BRIEF_V0.2.md | C1DCF4C0D35F4EB06B8E7B0E11090014837C316465A631194CA52AE5A98FA3B8 |
| 核心2：研究报告 | pages/markets/netherlands/01_research/MARKET-EU-NL_GATE1_RESEARCH_REPORT_V0.2.md | C83EAEBDE769BF2BAE54342828FA739595CA0970CE10802C1751E595C23F7583 |
| 核心3：命题CSV | pages/markets/netherlands/01_research/MARKET-EU-NL_GATE1_CLAIM_EVIDENCE_REGISTER_V0.2.csv | 84BB289F18996C3C4CBA6D3B2A3269804ABCA405D41AC7BBBBD2577AF998693D |
| 核心4：当前Manifest | pages/markets/netherlands/MARKET-EU-NL_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md | NOT_RECORDED_SELF_HASH |
| 支持：方法报告，原始研究日期保持 | pages/markets/netherlands/01_research/MARKET-EU-NL_SEARCH_INTENT_EVIDENCE_V0.1.md | 8E02240EC65F05CDC8D828BEBCE34FAC80ABE6B29B8FA9D15F7026E58C9B5719 |
| 支持：raw索引 | pages/markets/netherlands/01_research/evidence/MARKET-EU-NL_RAW_EVIDENCE_INDEX_V0.1.csv | 6E08E2F735950D9AC8BE8B837D61BB28786326ADFEBB6F4A9AB8ADD9E5B874BE |
| 支持：用户批准前的总控独立审查 | pages/markets/netherlands/05_review/MARKET-EU-NL_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md | 022AD77025AD8CEA70DEAC34D4C3F3DE8AE81287AAD6FC0959383CDD1B8ADA03 |

方法/raw/独立审查的历史状态不改写为事后用户批准；当前用户决定由本Manifest、Brief/研究V0.2及共享决定登记V1.4承担。19条命题ID保持，CSV只更新NL-D01/D02批准、来源和适用范围，不更改外部来源观察。

## 3. 批准对象与事实范围

NL-D01：面向荷兰工业采购和技术评估人员，以Malaysia-origin工业TiO₂为核心，重点帮助涂料/油墨项目评估，兼顾塑料/masterbatch；主按钮Request a Quote → `/request-a-quote/`，次按钮Explore Products → `/products/`。这是页面方向/CTA，不是Gate2整页文案、模块或视觉。

NL-D02：Netherlands页可公开“A Certificate of Origin is available upon request.”（可按申请提供原产地证书），覆盖同义正文、SEO、GEO、社交元数据与Schema。来源为本页用户明确批准，不从别国推定；不扩成每批文件、税率或海关待遇。

原产地沿用全站批准；PRODUCT V0.3仍为唯一关系源，矩阵SHA `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406`。M-2377、Rubber、M996/M2196 comparison hold均未变。没有新增本地仓库/现货/交期命题，也不把未研究能力判断为不存在。

## 4. 上游与消费顺序

最新明确用户决定 → 根规则与批准事实 → 本页完整Brief V0.2 → 研究/命题V0.2 → 方法V0.1 → 原始采集。当前源：

- `docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.4.md` EG-002，明确纳入Netherlands；V1.3保留历史。
- `docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md`。
- `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`、`docs/architecture/PAGE_REGISTRY_V0.2.md`、`research/keyword/11_page_keyword_master.csv`；身份与关键词不改。
- `docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md`、根规则与Gate1–5标准；旧冲突按Brief CF01–CF05处理。
- `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`及`PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md`。
- `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`、`GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md`（同目录）与`brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md`：共享owner不分叉。

EU父级owner保持MARKET-EU-001 `/markets/european-union/`；产品/应用/文件/请求/贸易专题归属不变。无跨scope fallback，完整网站依赖在后续正确Gate实现/验证，不变成Gate1 Hold。

## 5. 保留的历史四核心

| 历史路径 | SHA-256 |
|---|---|
| docs/page-briefs/MARKET-EU-NL_NETHERLANDS_BRIEF_V0.1.md | 8C5A0BEB538EEB394C18EE1242C5973ACAF693A3D260D1D4948E30AAF460D50A |
| pages/markets/netherlands/01_research/MARKET-EU-NL_GATE1_RESEARCH_REPORT_V0.1.md | 51CD36BDEAD20CDA7B04CEC3020740C616A24BC04193AE748F1C6DA7C08A8BB3 |
| pages/markets/netherlands/01_research/MARKET-EU-NL_GATE1_CLAIM_EVIDENCE_REGISTER_V0.1.csv | 3CEC1AD6AC63BF91B5EF84176D0B21ABCE3412DFF26D363D16B04CFF9F7B4E05 |
| pages/markets/netherlands/MARKET-EU-NL_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md | C2FCC72790C6AA40019909F5B5CC418E024BECB9571E90A3F3661500BC852A90 |

## 6. 研究局限与后续

实际研究4个独立query、5个成功正文、1个失败正文；raw 10份保留完整args/result与索引SHA。未采集Google当地/Semrush指标，不补零；下载/表单未测试，历史PDF未作当前经营证据。用户批准没有消除这些方法局限，也没有把同行自述变成我方事实。

本页Gate1方向与COO未决已关闭，没有待用户重复回答的NL-D01/D02。后续完整文案、模块顺序、FAQ、metadata属于Gate2，由另一Controller按其授权办理。本任务没有创建handoff、视觉、代码或发布资料。

## 7. 版本记录

| 版本 | 日期 | 内容 |
|---|---|---|
| V0.1 | 2026-09-06 | Gate1研究提交及总控通过待用户；四核心/方法/raw保留 |
| V0.2 | 2026-09-06 | 用户“同意。下一步”批准NL-D01/D02与Gate1；引用V1.4，保存新四核心，历史及方法证据不改，Gate2未启动 |
