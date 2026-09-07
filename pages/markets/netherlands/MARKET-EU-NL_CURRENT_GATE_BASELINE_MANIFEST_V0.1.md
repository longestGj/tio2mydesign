# MARKET-EU-NL · Current Gate Baseline Manifest V0.1

## 1. 控制与范围

- 唯一 Page ID：MARKET-EU-NL；Netherlands / EN / `/markets/netherlands/`。
- 日期：2026-09-06；Review ID：`MARKET-EU-NL-G1-01`。
- 当前生命周期：`BRIEF_IN_REVIEW`；当前交付状态：`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`。
- 用户已授权本 Controller 按“做一页确认一页”执行 Gate 1；该授权不是本页内容或 Gate 1 批准。
- NL-D01 方向/CTA 与 NL-D02 COO-on-request 仍待用户决定；用户批准日期 `NOT_YET_APPROVED`。
- Gate 2–10 本任务 `NOT_STARTED / NOT_AUTHORIZED`；不代另一 Controller 授权。没有 handoff 或开发。
- 本文件是本页当前组合索引，不替代上游事实权威，也不记录自身哈希。

## 2. 四项核心与支持报告

路径均为相对 `D:\23MySec`；当前只有本组合，不另造第二份完整 Brief。SHA 用于本次提交完整性，不表示批准。

| 角色 | 路径 | SHA-256 |
|---|---|---|
| 核心1：完整 Gate 1 Brief | docs/page-briefs/MARKET-EU-NL_NETHERLANDS_BRIEF_V0.1.md | 8C5A0BEB538EEB394C18EE1242C5973ACAF693A3D260D1D4948E30AAF460D50A |
| 核心2：Agent 综合研究 | pages/markets/netherlands/01_research/MARKET-EU-NL_GATE1_RESEARCH_REPORT_V0.1.md | 51CD36BDEAD20CDA7B04CEC3020740C616A24BC04193AE748F1C6DA7C08A8BB3 |
| 核心3：19条命题证据 CSV | pages/markets/netherlands/01_research/MARKET-EU-NL_GATE1_CLAIM_EVIDENCE_REGISTER_V0.1.csv | 3CEC1AD6AC63BF91B5EF84176D0B21ABCE3412DFF26D363D16B04CFF9F7B4E05 |
| 核心4：当前组合 Manifest | pages/markets/netherlands/MARKET-EU-NL_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md | NOT_RECORDED_SELF_HASH |
| 支持：Skill 方法报告，已保存并全文读回后供 Agent 综合 | pages/markets/netherlands/01_research/MARKET-EU-NL_SEARCH_INTENT_EVIDENCE_V0.1.md | 8E02240EC65F05CDC8D828BEBCE34FAC80ABE6B29B8FA9D15F7026E58C9B5719 |
| 支持：raw最小索引，含各原始文件SHA | pages/markets/netherlands/01_research/evidence/MARKET-EU-NL_RAW_EVIDENCE_INDEX_V0.1.csv | 6E08E2F735950D9AC8BE8B837D61BB28786326ADFEBB6F4A9AB8ADD9E5B874BE |
| 支持：总控独立审查结论 | pages/markets/netherlands/05_review/MARKET-EU-NL_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md | 022AD77025AD8CEA70DEAC34D4C3F3DE8AE81287AAD6FC0959383CDD1B8ADA03 |

Raw index 对应 10份 JSON：NL-Q01–Q04 为4次实际独立检索；NL-P01–P05 为5次完整文本返回；NL-P06 为1次Timeout原文。每份保留实际args/result，未把错误改成成功；raw不因后续意见改写。它们都是支持证据，不新增四核心之外的阶段合同。

## 3. 消费顺序与批准源

最新明确用户决定 → 根规则/当前批准事实 → Brief方向（本版待确认） → Agent研究与命题CSV → Skill方法 → 原始采集。

| 权威 | 当前用途 |
|---|---|
| docs/architecture/PAGE_REGISTRY_V0.2.md；research/keyword/11_page_keyword_master.csv | NL 已登记身份/主词，EU owner MARKET-EU-001 /markets/european-union/ |
| docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md；docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md | 网站主体/市场职责，历史范围冲突按Brief CF01–CF05处理 |
| docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.3.md；MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md（同目录） | Malaysia-origin全站批准；COO各页范围不得越界，NL-D02尚待用户 |
| pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv | 唯一产品关系源；SHA 8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406 |
| pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md | 关系解释、M-2377/Specialty/Rubber、M-996/M-2196 comparison hold |
| docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md；GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md（同目录）；brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md | Home/Global Chrome共享owner，后续组装；本页不重新开发 |

旧 NL 关键词行与共享聚类保留历史，不覆盖或迁移；此前未找到独立已批准本页 Manifest。没有把最高文件版本号当新批准。

## 4. 事实、决定和阶段状态分离

| 对象 | 当前状态 | 含义 |
|---|---|---|
| 页面身份/关键词 | EXISTING_APPROVED_MAPPING | 不等于研究/页面已批准或route live |
| Malaysia-origin | INHERITED_SITEWIDE_USER_APPROVAL | 本页可继承同义正文/SEO/GEO/Schema，不重启缺证Hold |
| NL-D01 | PENDING_USER_DIRECTION_CONFIRMATION | 拟采用产品/来源优先，涂料油墨语境、塑料支持；主询价/次产品 |
| NL-D02 | PENDING_USER_FACT_CONFIRMATION | “A Certificate of Origin is available upon request.”仅NL范围待决定 |
| MARKET-EU-NL-G1-01 | PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL | 总控独立研究审查通过，用户尚未批准/关闭Gate1 |
| 内容意图 | PENDING_USER_CONFIRMATION | 获用户确认后才作为批准Gate2方向 |
| Gate 2及之后 | NOT_STARTED / NOT_AUTHORIZED | 无模块/文案/视觉/代码/发布授权 |

未提出本地库存、仓库、交期等我方事实，不自动判其不真实或制造用户问卷。若后续需新增具体命题，按根规则呈现并确认。运行时外部依赖后续Gate7登记、Gate8实现、Gate9验证，不倒挂为Gate1否决。

## 5. 本次执行自检记录

2026-09-06实际只读检查：命题CSV可解析且19个稳定ID唯一；raw索引10行，10份JSON均可解析、ID/args/result存在，10/10 SHA一致。主表本页身份、主词和URL读取核对；PRODUCT矩阵84行、24字段，30 verified/0 conflict/54 no-public，去重grade Process 8 Chloride/5 Sulfate/1 Vapor-phase oxidation，M996/M2196 hold 12行，M2377五类+Sulfate/Specialty no-public，矩阵SHA不变。

方法报告回读后形成Agent研究；四核心和支持路径可追溯。研究报告§8提供五项质量自检与位置；这不是总控独立PASS。没有额外测试脚本或开发文件；只在本页目录和本页Brief写入。

提交前补验：Manifest所列5个外部成果文件路径存在且SHA 5/5一致；本页身份/URL/主词在实施主表各1行。16个交付文件（本页目录15份+Brief1份）扫描0 conflict marker、0 trailing whitespace、0代码/脚本文件；命题CSV为19行×11字段。实际引用的角色/Skill、V1.3决定源、origin、Global Chrome、法律共享区、production Logo路径均存在。已读回四核心与方法报告，未把来源完整性当批准结果。

## 6. 后续与停止

总控独立审查已通过，权威结论为 `pages/markets/netherlands/05_review/MARKET-EU-NL_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md`。现在向用户直接呈现NL-D01方向/CTA和NL-D02英文命题及中文解释，不能只给文件要求用户阅读。用户确认仍不自动授予Gate2；下一页按串行Controller决定执行，本执行子代理不启动。停止等待用户决定。

| 版本 | 日期 | 变化 |
|---|---|---|
| V0.1 | 2026-09-06 | 首个NL Gate1草案组合；保存raw、方法、四核心，未覆盖旧源，无后续阶段授权 |
| V0.1 总控状态同步 | 2026-09-06 | 引用独立总控审查，通过待用户；仅同步Brief/研究/Manifest及受影响SHA，方法/raw/命题事实不变 |
