# HOME-001 D32 Gate 6 定向独立复验 V0.1

## 身份与结论

| 字段 | 值 |
|---|---|
| 日期 / 派发 | 2026-09-20 / `HOME-D32-G6-INDEPENDENT-REVIEW-20260920-01` |
| 模式 / 审查者 | `TARGETED_RECHECK` / `/root/d32_gate6_independent_review` |
| 修订作者 | `/root`，与审查者不同 |
| 被审包 | [D32 Gate 6 V0.2](../06_handoff/HOME-001_D32_GATE6_HANDOFF_PACKAGE_V0.2.md) |
| 包 SHA-256 | `EEB70B4D48753BBAF02D9CBEA1B6ADAD65B18D90CD6C6123A0F63C6063065A3A` |
| 作者核验 JSON SHA-256 | `2C8DC65F51829CB6120E05F4395B2956435DA004EAA043ECED28EDD3FF7F892F` |
| 首轮 | [独立复核 V0.1](HOME-001_D32_GATE6_INDEPENDENT_REVIEW_V0.1.md)，SHA `B44F8E9C31758AC8495F276070A6FB5CBD7E28AEBCFC343FD7FBB5C15EB69552` |
| 独立结论 | **`REVIEW_PASS / PROJECT_CONTROL_REVIEW_PASS`** |
| 本阶段必修 | **0；F01、F02 均 `CLOSED_FOR_PACKAGE_V0.2`** |

此结论是交付合同复验通过，由总控办理 Gate 6 关闭；不是开发、运行验收、交付已送达或发布。V0.1 的 RETURN 保留历史。本次没有修改包、作者证据、Manifest、Status、批准源或 D16/D32。

## 变化及 Finding 关闭

实际运行 `git diff --no-index` 比较 V0.1 与 V0.2，并读回 Products 字段、A01/A05、Schema 段及相邻边界。差异限版本/授权状态、首轮引用、F01/F02处置和返修说明；其他完整合同覆盖按首轮有效结论继承。

| ID | 新版实见 / 关闭判断 |
|---|---|
| HOME-D32-G6-F01 | §5.2明确五节点、七条具体关系和稳定ID，以已批准专属合同为完整依据；CSV四类型不构成撤销Product批准。仅落实首轮已查明的非扩张解释，没有修改CSV、正文或新增事实。§8及返修记录保持总控关闭与独立复验区别。**交付歧义关闭。** |
| HOME-D32-G6-F02 | §2.1明确“型号显示名（非链接标签）”，目标仅既有Hub/工艺入口，并禁止逐型号目标字段/链接/CTA；A05同步失败条件。与批准HTML的14个span及旧Gate7动作范围一致。A01保持原链接/顺序，编辑与恢复规则未变化。**本阶段必修关闭。** |

没有发现返修引入新的缺口或相邻回归。规划内链首轮由 `/root/d32_home_link_review` 检查全部59个来源导航实例、25个目标及共享动作，唯一Finding同为F02；本次主审已独立验证该交付修订，并实际读回[内链定向复验](HOME-001_D32_GATE6_LINK_PLANNING_RECHECK_V0.1.md)：同一V0.2 SHA、15项原输入身份未变、`REVIEW_PASS / F02 CLOSED_FOR_EXACT_CANDIDATE`。复用有效专项覆盖，不增加另一套全量扫描。

## 身份、覆盖及后置条件

[定向复验证据](HOME-001_D32_GATE6_TARGETED_RECHECK_EVIDENCE_V0.1.json)记录实际重算：48个声明源文件SHA均匹配，49个链接目标存在，12个AC及5个DEP保留；包/作者JSON与派发SHA一致。原35冻结输入未变，首轮34项字节一致及1项仅换行等价的判断继续有效。

后置事项仍按 DEP-01..05：D32实际仓库/制品/内容/环境与WordPress证据工具兼容、内容导入和编辑恢复、外部目标/法律页/receiver、独立Gate9及发布授权。本复验不将这些标为完成；特别是关闭Next专属marker不等于WP身份已验证，真实指纹与原预检仍须执行。

未重新截图、未启动WordPress或浏览器、未运行Gate8/9脚本。未变的视觉批准和首轮新增合同审查有效继承。准确V0.2组合已无本阶段必修，允许总控按常设授权接收关闭；不自动外发或启动Gate8。
