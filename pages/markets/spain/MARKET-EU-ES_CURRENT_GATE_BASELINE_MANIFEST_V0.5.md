# MARKET-EU-ES · 当前 Gate 组合 Manifest V0.5

日期：2026-09-06。取代V0.4为当前唯一入口；旧文件原样保留。Gate2总控维护；同一`spain_gate2`子代理按Gate2角色执行本次小修。

## 1. 状态与用户决定

- Page ID：MARKET-EU-ES；EN；`/markets/spain/`；`site_scope=tio2-my`。页面身份、关键词、四模块与主次行动不变。
- Gate1：`APPROVED / CLOSED`；骨架A/C V0.2：`USER_CONFIRMED`，对应用户条件确认及全文执行授权继续有效。
- 本轮来源：2026-09-06当前对话用户对B V0.1全文的审核，判定`PASS_WITH_MINOR_BUYER_COPY_REVISIONS`，要求四处必改及两处建议；Hero、Plastics两路径、COO、after-submit及四模块明确认可并保持。
- 本轮已完成：B V0.2、C V0.4和小修执行自检；父级逐项独立复核已通过，见[全文复核V0.2](05_review/MARKET-EU-ES_GATE2_FULL_COPY_PROJECT_CONTROL_REVIEW_V0.2.md)。
- 当前：`FULL_BUYER_CLEAN_COPY = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；Review ID=`MARKET-EU-ES-G2-F02`。
- 全文整体确认仍为`PENDING_USER_APPROVAL`，`FULL_COPY_AND_MODULE_ORDER_CONFIRMED=NOT_YET_CONFIRMED`；Gate2未关闭。用户本轮明确要求小修后再确认全文，不自动视为整体批准。
- Gate3与后续、开发、部署、发布和索引未启动/未获本次授权。

## 2. 当前组合

批准G1仍为Brief V0.2、研究V0.2、命题CSV V0.2和原捕获，路径及批准哈希见[Gate1 Manifest V0.2](MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md)。批准骨架继续为A/C V0.2，具体用户决定及锁定哈希见[骨架条件确认记录](05_review/MARKET-EU-ES_GATE2_SKELETON_PROJECT_CONTROL_REVIEW_V0.2.md)。本轮不回写这些输入。

路径以`D:/23MySec/`为根；本Manifest不记录自身哈希。

| 当前角色 | 文件 | SHA-256 |
|---|---|---|
| 候选B全文 | pages/markets/spain/04_planning/MARKET-EU-ES_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md | 6CF3A3C91E24C4F36C189DCD37FEB4D4487944F05513C8916CE61068DB9738ED |
| 候选完整C | pages/markets/spain/04_planning/MARKET-EU-ES_GATE2_CONTENT_CONTRACT_V0.4.md | 1F82BFA4B394399A4BF04449390C149C7F0A569ADDB1C7E2F46453C5E56F7CED |
| 小修执行自检 | pages/markets/spain/05_review/MARKET-EU-ES_GATE2_FULL_COPY_EXECUTION_SELF_CHECK_V0.2.md | F43C1875906A09227A598A7F16EDCF9D84CEFE86CE3546135C24DD636DBC56CA |
| 独立全文复核 | pages/markets/spain/05_review/MARKET-EU-ES_GATE2_FULL_COPY_PROJECT_CONTROL_REVIEW_V0.2.md | 7E347E10F8BE7924F0F611ACFC57DFA70211803F05C8F4124B59F29C5F12A489 |

直接阅读：[全文V0.2](04_planning/MARKET-EU-ES_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md) · [合同V0.4](04_planning/MARKET-EU-ES_GATE2_CONTENT_CONTRACT_V0.4.md) · [独立复核](05_review/MARKET-EU-ES_GATE2_FULL_COPY_PROJECT_CONTROL_REVIEW_V0.2.md)。

B的Buyer Copy是当前候选正文唯一源，C维护操作和机器表达。A保留批准骨架，不因微调全文重做；执行文件DRAFT头保留提交状态，独立审查与用户状态由本Manifest承接。

## 3. 小修与接收合同

只改变六处实际文字：Coatings首句/体系术语、TDS/SDS/COA申请段、实际或预估MT数量、Spain城市/港口/收货点、公司及业务联系信息。保留全部链接、Hero、Plastics两路径和COO/after-submit原句；不增加模块、字段或FAQ。

预估数量仍填RFQ原有必填正数MT字段；Spain地点是页面提示，RFQ交付国家可见可改；CONV-DOC公司国家不从Spain填入。文件简称对应现有请求类别，不修改taxonomy值或暗示全量文件库存。Title/Meta/社交/Schema范围保持与正文同义。

最新决定登记V1.5新增Belgium，Spain事实范围不变。无新增企业事实需要用户重答；不重启原产地或COO历史Hold。

## 4. 历史、核验与下一步

原B V0.1/C V0.3/自检/独立审查及[Manifest V0.4](MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.4.md)保留，前期真实反馈和审查漏项记录不改。新旧正文实际比较、当前文件读回/引用和组合哈希已核验；运行时表单/URL/买家测试未进行。

下一步只提交本版全文和模块顺序给用户确认，不继续扩内容。Application/Trade永久URL、RFQ参数绑定、共享组装、图像/断点与运行验证继续由原owner及相应后续阶段负责；不据小修通过关闭这些依赖或启动Gate3。

本次未调用探索Skill、未修改Agent/Skill源；根Status/Index仅定向同步Spain，保留其他任务并行更新。
