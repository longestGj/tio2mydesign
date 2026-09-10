# MARKET-EU-ES Current Gate Baseline Manifest V0.17

日期：2026-09-08。唯一当前入口，接替V0.16。本版登记用户授权的Gate 9首轮只读验收结果，不改变Gate 1–4/6批准页面组合。

| 字段 | 当前值 |
|---|---|
| Page / URL / scope | `MARKET-EU-ES` / `/markets/spain/` / `tio2-my` |
| Gate 1–4 / Gate 6 | APPROVED / CLOSED，继承[Manifest V0.16](MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.16.md) |
| Gate 8实现返回 | `GATE8_IMPLEMENTATION_SUBMITTED / DEVELOPMENT_SELF_CHECK_PASS`；commit `2c97fe1` |
| Gate 9授权 / Review | `USER_AUTHORIZED / G9-MARKET-FOUR-20260908-01 / MARKET-EU-ES-G9-ROQA-01` |
| Gate 9结论 | `REVIEW_COMPLETE / CHANGES_OR_EVIDENCE_REQUIRED / GATE9_NOT_PASS` |
| 独立报告 | [MARKET-EU-ES Gate 9独立只读验收V0.1](07_qa/MARKET-EU-ES_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md) |
| 当前Findings | `ES-G9-F01` hover/focus偏离；`F02`排版/行动几何偏离；`F03`四个批准目标404；`F04`共享owner/偏差/消费者闭环缺失 |
| 稳定验收 / 开放项 | `ES-G9-01–12`；`ES-DEP-01–06`与`ES-G4-OBS01`继续按原owner保持 |
| 下一状态 | `RETURN_TO_GATE8_AND_DEPENDENCY_OWNERS / TARGETED_RECHECK_REQUIRED` |
| Gate 10/发布 | `NOT_AUTHORIZED / NOT_EXECUTED`；未合并、部署、发布、改DNS或开放索引 |

批准正文、URL、关键词、事实、Gate 4视觉和Gate 6包保持。已通过或已核对证据只按原对象与范围继承；新commit、Build、配置或依赖变化先核对影响，再沿稳定Finding ID定向复验。
