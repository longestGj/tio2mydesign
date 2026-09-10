# RES-TRADE-UK Gate 9 Read-Only Acceptance V0.1

日期：2026-09-08。结果：`NOT_PASS / CHANGES_AND_EVIDENCE_REQUIRED`。候选身份、共同证据与Finding见`docs/architecture/GATE9_TRADE4_APPLICATION5_INITIAL_ACCEPTANCE_AND_RETURN_V1.0.md`。

## 稳定接受条件（13）

- `PASS`（8）：`UK-G6-AC01`、`AC02`、`AC03`、`AC07`、`AC08`、`AC09`、`AC11`、`AC13`。
- `FAIL`（2）：`UK-G6-AC04`（共享`/applications/`为404，`G9-T4A5-F02`）；`UK-G6-AC05`（六个官方目标之一`https://www.gov.uk/guidance/trade-remedies`实际404，`G9-T4A5-F04`）。
- `NOT_VERIFIED`（3）：`UK-G6-AC06`（receiver状态）、`AC10`（跨站scope/cache实际矩阵）、`AC12`（非Chromium、实体设备、指定AT）。

## 依赖（5）

- `PASS`（4）：`UK-G6-D01`、`D03`、`D04`、`D05`。
- `FAIL`（1）：`UK-G6-D02`，同时含失效官方目标及未完成receiver要求；确定404按FAIL控制。

## 证据判断

AD0086官方case、Notice 2026/14、notices collection、Trade Tariff和NI route目标可访问，当前case仍显示进行中；失效的HMRC guidance URL不能由标签或其他五个成功目标代替。页面内容、CMS链、响应式视觉、head/Schema和noindex候选行为其余通过。

Gate 9不关闭；source owner应先核对批准语义再替换失效目标，不得把搜索到的近似页面直接视为批准替代。
