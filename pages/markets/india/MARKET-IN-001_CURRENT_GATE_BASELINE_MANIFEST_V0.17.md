# MARKET-IN-001 Current Gate Baseline Manifest V0.17

日期：2026-09-08。唯一当前入口，接替V0.16；批准页面组合保持。

| 字段 | 当前值 |
|---|---|
| Page / URL / scope | `MARKET-IN-001` / `/markets/india/` / `tio2-my` |
| Gate 1–4 / Gate 6 | `APPROVED / CLOSED`，继承V0.16 |
| Gate 8修订 | code `d764c36f17a8f90184bbbf12c9b703ec2fc7e4fc`；evidence `b0d8cf04f932f8da0652274bb36ccdc979026130`；Build `CniIF8B0T7ToCxd_PvQ2d` |
| Gate 9定向复验 | [G9-MARKET-FOUR-TARGETED-RECHECK-02](../07_qa/MARKET_FOUR_GATE9_TARGETED_RECHECK_V0.2.md) |
| 结论 | `DEPENDENCY_AND_UNVERIFIED_LAYERS_REMAIN / GATE9_NOT_PASS` |
| Finding | `IN-G9-F02/F03/F04 CLOSED`；`IN-G9-F01 OPEN`（India Trade目标404） |
| Gate 10/发布 | `NOT_AUTHORIZED / NOT_EXECUTED` |

已关闭项只绑定上表精确commit/build。原AC、接收/设备/生产开放依赖继续保持；批准Trade href不得隐藏、改链或fallback。
