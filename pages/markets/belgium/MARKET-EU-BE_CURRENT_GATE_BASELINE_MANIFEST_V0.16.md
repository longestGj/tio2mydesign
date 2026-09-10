# MARKET-EU-BE Current Gate Baseline Manifest V0.16

日期：2026-09-08。唯一当前入口，接替V0.15；批准页面组合保持。

| 字段 | 当前值 |
|---|---|
| Page / URL / scope | `MARKET-EU-BE` / `/markets/belgium/` / `tio2-my` |
| Gate 1–4 / Gate 6 | `APPROVED / CLOSED`，继承V0.15 |
| Gate 8修订 | code `d764c36f17a8f90184bbbf12c9b703ec2fc7e4fc`；evidence `b0d8cf04f932f8da0652274bb36ccdc979026130`；Build `CniIF8B0T7ToCxd_PvQ2d` |
| Gate 9定向复验 | [G9-MARKET-FOUR-TARGETED-RECHECK-02](../07_qa/MARKET_FOUR_GATE9_TARGETED_RECHECK_V0.2.md) |
| 结论 | `TARGETED_FINDINGS_CLOSED / OTHER_LAYERS_REMAIN / GATE9_NOT_PASS` |
| Finding | `BE-G9-F01 CLOSED`；`BE-G9-F02 CLOSED_FOR_RUNTIME_AVAILABILITY`；`BE-G9-F03 CLOSED` |
| 开放项 | provider/真实收件、完整七面反向矩阵、设备/AT/非Chromium、生产与Gate 10 |
| Gate 10/发布 | `NOT_AUTHORIZED / NOT_EXECUTED` |

关闭结果只绑定上表精确commit/build；不把局部复验扩大为完整Gate 9或发布通过。
