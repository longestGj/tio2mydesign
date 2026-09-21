# HOME-001 D32 Gate 6 内链规划定向复验 V0.1

- Review ID：`HOME-D32-G6-LINK-20260920-01`，沿用首轮链；日期：2026-09-20。
- 模式：`PLANNING_REVIEW / TARGETED_RECHECK`。
- 结论：`REVIEW_PASS`，仅针对本批内链规划合同；`HOME-D32-G6-F02 = CLOSED_FOR_EXACT_CANDIDATE`。
- 实際 Reviewer：`/root/d32_home_link_review`；交付包作者/返修者：`/root`。实例独立，Reviewer 没有修改被审包。

## 1. 精确对象及继承

本次对象：[D32 Gate 6 包 V0.2](../06_handoff/HOME-001_D32_GATE6_HANDOFF_PACKAGE_V0.2.md)，实测 SHA-256：`EEB70B4D48753BBAF02D9CBEA1B6ADAD65B18D90CD6C6123A0F63C6063065A3A`，与总控派发一致。

继承 [首轮报告](HOME-001_D32_GATE6_LINK_PLANNING_REVIEW_V0.1.md)（SHA-256 `47C35530EBDF0C1C9EA14508D0C7EDCD2F4AADDCF0DE5C18F3251AEA59AA14D3`）和 [原逐实例 JSON](HOME-001_D32_GATE6_LINK_PLANNING_REVIEW_V0.1.json)（SHA-256 `068FF9D4910E3759727FF4EB2ADEDBA721710810A2833B80DE5E7987450A4621`）。

复验前重新计算原 JSON 所列15项输入 SHA-256，15/15与原身份一致，包括旧包、两份原型、登记册、主表和共享合同。因此复用59个实例、25个目标的既有规划核对，不重新提取、爬行或扩大至全站。原V0.1的退回结论仍保留历史；本报告只对V0.2适用。

## 2. 实检与关闭

对 V0.1→V0.2 完整文本差异进行检查，定向核对下列项目：

| 项目 | 实见 | 结论 |
|---|---|---|
| §2.1 Products（第65行） | 明确“型号显示名（非链接标签）”；既有 Hub/工艺入口另列标签与目标；禁止新增逐型号目标字段或链接/CTA | PASS |
| A05（第174行） | 要求14型号以非链接标签呈现；擅改为逐型号链接/CTA列为失败 | PASS |
| A01（第170行） | 首次导入完整正文/链接/顺序、后台维护和目标不变要求保留 | PASS |
| 相邻字段及链接范围 | Hero、Start Here、Markets、Applications及共享Header/Footer目标没有变化；既有Products Hub、Chloride、Sulfate入口未删改 | PASS |
| §8 DEP-03及发布边界 | 未开发目标仍登记依赖，禁止伪造页面、擅改链接或跨scope fallback | PASS |

F02 的实际歧义已消除，接受条件与原批准原型一致；内链专项必修清零。无需新增页面、逐型号链接批准或重新制作视觉。

## 3. 未覆盖与停止

运行环境仍不存在；HTTP落点、重定向、WordPress输出、键盘/焦点、展开、Cookie Settings及表单接收均为 `NOT_VERIFIED`。本报告不是 Gate 9、全站可用性或发布通过，不把登记状态提升为路由实施/批准状态。Schema F01及其变化由主Reviewer核对，本专项不替代其结论。

报告交回总控与主Reviewer供现有Gate6审查复用；本实例不更改Manifest/Status，不关闭页面Gate，不派发开发或发布。
