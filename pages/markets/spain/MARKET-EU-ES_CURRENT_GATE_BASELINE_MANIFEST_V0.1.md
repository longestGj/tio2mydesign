# MARKET-EU-ES Current Gate Baseline Manifest V0.1

## 1. 唯一当前组合与权限

日期：2026-09-06；Page ID：MARKET-EU-ES；Spain；EN；`/markets/spain/`。
Review ID：`MARKET-EU-ES-G1-01`；提交状态：`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；生命周期：`BRIEF_IN_REVIEW`。
本页首次Gate1研究，无历史Spain批准基线被覆盖。根Status/Index由总控维护，本执行任务不修改。

用户仅授权本Controller逐页完成Gate1、每页确认一次；执行子代理仅承担Spain。Gate0身份准入已核对但Brief未获用户正式批准；Gate1已获总控独立审查通过、待用户批准，未CLOSED，`CONTENT_INTENT_CONFIRMED=NOT_YET_CONFIRMED`。Gate2由另一Controller在取得对应授权后执行，本任务及Gate3–10均无新增授权。

## 2. 四核心与支持成果

所有路径以 `D:/23MySec/` 为根；以下哈希为总控结论治理同步后的快照，不等于用户批准。Manifest不登记自身哈希。

| 角色 | 当前文件 | SHA-256 |
|---|---|---|
| 核心1 Brief | docs/page-briefs/MARKET-EU-ES_SPAIN_BRIEF_V0.1.md | 71E5BEB664FC1FDDABA68AA110D0A4F36C3688920BBF62273B3390EE4514A834 |
| 核心2 Agent研究 | pages/markets/spain/01_research/MARKET-EU-ES_GATE1_RESEARCH_REPORT_V0.1.md | 8E5A630106E3E41E445C3C322E0FBF681F74A6EBFD99FEC4C6E2EBA533A260D4 |
| 核心3 CSV命题表 | pages/markets/spain/01_research/MARKET-EU-ES_GATE1_CLAIM_EVIDENCE_REGISTER_V0.1.csv | D559D3306328D5BDC8FEF9C521122330444A7970767A34AC787AA30B1CB5B5B3 |
| 核心4 唯一组合入口 | pages/markets/spain/MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md | 不记录自身哈希 |
| 支持 Skill方法报告 | pages/markets/spain/01_research/MARKET-EU-ES_SEARCH_INTENT_EVIDENCE_V0.1.md | B88090B93C8CD259C94ED6057A28F0C4145D00DC1D97210C5D56D70B3E151B42 |
| 支持 捕获索引 | pages/markets/spain/01_research/evidence/EVIDENCE_CAPTURE_INDEX_V0.1.md | AC6B6355CB49BAC31B995BD5E8F35FC6DD2D970ECEFF3AF9C800D17DB4A49E7E |

索引映射12份JSON请求/返回捕获，各自bytes/SHA已列。3次search包含4条query（Q01原词独立先查；Q03–04混合不可归属），9次open包括7份可用正文与2次失败。Sigma P07工具标称648行，本次实际返回L0–445，引用范围L61–147包含于捕获。不是原站完整HTML，不宣称Google Spain本地排名或Semrush指标；两者本次未采集。

## 3. 上游权威消费顺序与范围

当前用户决定/根AGENTS → 已批准具体事实范围 → PRD及增补 → 页面主表/登记 → Playbook → 证据/研究。完整路径及旧规则冲突处理见Brief§2，不以研究或Manifest自创批准。

- 身份：PAGE_REGISTRY_V0.2 + 11_page_keyword_master本页行；主词 `titanium dioxide supplier spain` 唯一，EU/其他国家/泛应用/产品/贸易职责不变。
- 事实：EVIDENCE_GAP_USER_DECISION_REGISTER_V1.1 + MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0。Malaysia-origin全站已准；COO当前UK/Italy范围不能自动扩至Spain；不重问原产地、不整页Hold。
- 产品：PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv + UNIFIED_AUDIT_V0.3，同目录当前关系源。矩阵SHA：`8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406`；84行、30 verified/0 conflict/54 no-public，Process8/5/1；M-996/M-2196 hold12行。M-2377五类+Sulfate、Specialty不公开、Rubber不扩taxonomy。
- 共用组件：Global Header/Footer V0.5与production SVG ManifestV1.0，由Home owner维护；固定RFQ、无买家CURRENT；本页仅声明Markets active，无组件制作。
- 执行方法：agents/gate1-execution/agent.md + skills/search-intent-evidence-analysis/SKILL.md。实际执行、保存方法报告、读回后Agent综合；支持报告不是第五核心，也不是独立运行服务。

## 4. 待决定、限制及交接

| ID | 具体对象/影响 | 状态/责任人 |
|---|---|---|
| ES-D01 | 为西班牙生产项目采购工业TiO2的采购/技术读者；涂料体系与塑料/色母最终用途；主Request a Quote，次Explore Products | PENDING_USER_DIRECTION_CONFIRMATION / 用户 |
| ES-D02 | Spain页可写“A Certificate of Origin is available upon request.”；只覆盖可按申请提供COO及同义SEO/GEO/Schema，不混入每票必附或税率结果 | PENDING_USER_FACT_CONFIRMATION / 用户 |
| MARKET-EU-ES-G1-01 | 四核心+支持证据的独立审查 | PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL / 总控 |

未提出Spain库存/仓库/客户/固定交期营销命题，不将缺证判为不存在或永久禁止。当前税率/海关接受等不作事实结论；有具体拟用结论时查当前官方源。方法证据是有限定性样本；不推断需求量/市场排名/用户职业比例。

交接读取顺序：本Manifest → Brief → Agent研究 → CSV → 需要追溯时方法/捕获。Gate2在其Controller另获授权后写完整文案与模块顺序，本包不替代该阶段。

## 5. 执行自检与修订留痕

内容自检五项及依据见研究§6；不等于总控PASS。提交前只读核对范围：四核心存在/读回；CSV22条命题与11字段、ID唯一；12个JSON可解析且有实际args/result；5份成果及12份捕获哈希与清单相符；来源路径存在；主表身份与矩阵计数；Markdown/CSV冲突标记与行尾空格；状态不冒称用户批准。

2026-09-06预审精确修订：P07源标称行数和实际返回分开；Brief/研究读者改为“为西班牙生产项目采购”，消除采购来源歧义。未重抓无关网页或增加第三主应用群。
2026-09-06总控独立结论来源：`pages/markets/spain/05_review/MARKET-EU-ES_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md`。仅同步本Manifest、Brief和研究的总控状态及受影响哈希；CSV、方法、捕获与事实未改，用户批准日期未填，ES-D01/ES-D02仍待定。
最终只读核验结果由提交消息报告；状态为总控审查通过、待用户批准。执行任务停止，不操作共享规则、其他页面或开发项目。
