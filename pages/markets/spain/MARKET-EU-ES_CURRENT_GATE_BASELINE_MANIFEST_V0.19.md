# MARKET-EU-ES Current Gate Baseline Manifest V0.19

日期：2026-09-08。唯一当前入口，接替V0.18；批准页面组合保持。

| 字段 | 当前值 |
|---|---|
| Page / URL / scope | `MARKET-EU-ES` / `/markets/spain/` / `tio2-my` |
| Gate 1–4 / Gate 6 | `APPROVED / CLOSED`，继承V0.18 |
| Gate 8最新修订 | code `47307b8f7e7c4b8a706aed08f91738462fae3a6f`；evidence `ad31fd82b8f00aa87da6acdb9ed2367d172dca76`；Build `ax1NgfzN5PFVyPceTtKsF` |
| Gate 9复验 | [ES-G9-RECHECK-03](07_qa/MARKET-EU-ES_GATE9_TARGETED_RECHECK_V0.3.md) |
| 结论 | `ES-G9-F01 CLOSED / DEPENDENCIES_REMAIN / GATE9_NOT_PASS` |
| Finding | `ES-G9-F01/F02/F04 CLOSED`；`ES-G9-F03 OPEN`（Coatings、Plastics、Masterbatch、EU Trade仍404） |
| Gate 10/发布 | `NOT_AUTHORIZED / NOT_EXECUTED` |

关闭项只绑定上表精确commit/build。其他原AC、开放依赖和`ES-G4-OBS01`继续保持；批准href不得隐藏、改链或fallback。
