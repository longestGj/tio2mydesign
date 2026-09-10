# MARKET-EU-PL Current Gate Baseline Manifest V0.23

2026-09-07。本版接替 [V0.22](MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.22.md) 为唯一当前入口，登记 D16 V0.2 修复回执及 PL-G9-RECHECK-02 独立复验；不改历史批准内容。

| 项目 | 当前状态 |
|---|---|
| Page / URL / language / scope | `MARKET-EU-PL` / `/markets/poland/` / EN / `tio2-my` |
| Primary / mapping | `titanium dioxide supplier poland` / `APPROVED_PRD_V0.3` |
| Gate 1–4 / Gate 6 | **APPROVED / CLOSED**；原 Gate 5 按当前流程映射至 Gate 4；沿用 [PL-G6-APPROVAL-01](05_review/MARKET-EU-PL_GATE6_USER_APPROVAL_AND_CLOSURE_V0.1.md) |
| 唯一批准包 / 上游 | [PL-G6-DELIVERY-01 V0.1](06_handoff/MARKET-EU-PL_GATE6_HANDOFF_PACKAGE_V0.1.md)，SHA-256 `18f1f5f2fe1b30a5233b8be3836de6d9c94e70a298dbebe14f5089f065063fdc`；B V0.2 / C V0.4 / 原批准完整视觉，继承 V0.21 组合 |
| 事实 | 全站原产地、PL-D01/PL-D02、EG-002 保持，无新事实限制 |
| Gate 8 / 回执 | **IMPLEMENTATION_RECEIVED**；[接收记录](07_qa/MARKET-EU-PL_GATE9_INTAKE_REVIEW_V0.1.md)、[开发回执副本](07_qa/gate9-v0.1/developer-receipt.md)。原开发授权按回执声明引用，原始对话尚未由任务读取取得；不再沿用旧“尚无回执”作为现状 |
| 实现身份 | base `c2764e6138aa0dc37d1f6cab04bc1ae39f45aecb`＋未提交 51 文件快照；Build ID `GjJdupnweqs0MK5nxZvnV`；精确关联及采集时点见报告 |
| Gate 9 授权 | [PL-G9-START-01](05_review/MARKET-EU-PL_GATE9_USER_AUTHORIZATION_V0.1.md)，用户“同意下一步。Application的还在开发。” |
| Gate 9 结果 | [PL-G9-RECHECK-02](07_qa/MARKET-EU-PL_GATE9_TARGETED_RECHECK_V0.2.md)：**F01/F02 指定实现关闭；E01 定向补证完成；E02/E03及依赖开放，Gate 9 未通过/未关闭** |
| Findings / 依赖 | F01/F02 已复验关闭，E01 本地定向矩阵已补齐；E02 真实接收/环境关联、E03 缩放图像反证需补证；I01 Applications 为用户确认开发中依赖。PL-DEP-01–06 部分有局部证据，未整体关闭；可选 PL-G4-S01 保持 |
| Lifecycle | **READ_ONLY_QA_IN_REVIEW** |
| Gate 10 / 发布 | **NOT_AUTHORIZED / NOT_EXECUTED**；本地 noindex 保护已验，最终生产配置及原发布开放项保留 |

当前工作流由 Index 指向 V3.2；本版不新增真实提交或发布授权；反馈发送承接用户“需要发送D16任务”授权。旧 Manifest、批准源和接收记录原样保留。

本轮回执：[D16 修复交回](07_qa/gate9-v0.2/developer/GATE9_CORRECTION_RECEIPT.md)；原开发回执保留历史身份。
