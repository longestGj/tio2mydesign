# MARKET-EU-ES Current Gate Baseline Manifest V0.18

日期：2026-09-08。唯一当前入口，接替V0.17；批准页面组合保持。

| 字段 | 当前值 |
|---|---|
| Page / URL / scope | `MARKET-EU-ES` / `/markets/spain/` / `tio2-my` |
| Gate 1–4 / Gate 6 | `APPROVED / CLOSED`，继承V0.17 |
| Gate 8修订 | code `d764c36f17a8f90184bbbf12c9b703ec2fc7e4fc`；evidence `b0d8cf04f932f8da0652274bb36ccdc979026130`；Build `CniIF8B0T7ToCxd_PvQ2d` |
| Gate 9定向复验 | [G9-MARKET-FOUR-TARGETED-RECHECK-02](../07_qa/MARKET_FOUR_GATE9_TARGETED_RECHECK_V0.2.md) |
| 结论 | `CHANGES_AND_DEPENDENCIES_REMAIN / GATE9_NOT_PASS` |
| Finding | `ES-G9-F02/F04 CLOSED`；`ES-G9-F01 OPEN`（Secondary hover无实际underline）；`ES-G9-F03 OPEN`（四目标404） |
| Gate 10/发布 | `NOT_AUTHORIZED / NOT_EXECUTED` |

已关闭项只绑定上表精确commit/build。其他原AC、开放依赖和`ES-G4-OBS01`继续保持；批准href不得隐藏、改链或fallback。
