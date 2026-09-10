# MARKET-EU-NL Current Gate Baseline Manifest V0.13

日期：2026-09-08。唯一当前入口，接替V0.12。本版只登记Gate 8授权及实际交接；原批准组合不变。

| 字段 | 当前值 |
|---|---|
| Page / URL / language / scope | MARKET-EU-NL / `/markets/netherlands/` / EN / `tio2-my` |
| Gate 1–4 / Gate 6 | APPROVED / CLOSED，继承[原Manifest V0.12](MARKET-EU-NL_CURRENT_GATE_BASELINE_MANIFEST_V0.12.md) |
| 唯一批准包 | [NL-G6-HANDOFF-01 V0.1](06_handoff/MARKET-EU-NL_GATE6_HANDOFF_PACKAGE_V0.1.md) |
| 包SHA-256 | `e34fdadaf693f25812a013625000dfa2efc17623c68bbc54b867b2a8be9ce113` |
| Gate 6批准与独立审查链 | [关闭记录](05_review/MARKET-EU-NL_GATE6_DELEGATED_APPROVAL_AND_CLOSURE_V0.1.md)；原依据保持，Gate 6必修0 |
| Gate 8授权 | USER_AUTHORIZED / G8-MARKET-FOUR-20260908-01；用户“现在把上面四个交给Gate8开发。” |
| 生命周期 / 交接 | HANDED_OFF / HANDED_OFF=YES |
| 接收任务 | 01my开发 / 01a05595-2a2c-7ef0-9be4-f55a42043bb6 / local |
| 外部进度 | 已确认接收；开发基线审计中；实现结果未回报 |
| 稳定验收ID | NL-G9-AC-01–12 |
| 开放依赖 | NL-DEP-01–06，原owner及接受条件保持 |
| Gate 9/10与发布 | 本次未授权独立验收关闭、合并发布分支、部署、生产写入、DNS、索引或发布 |

[启动授权](../06_handoff/MARKET_FOUR_PAGE_GATE8_AUTHORIZATION_AND_DISPATCH_V0.1.md)；[发送与接收回执](../06_handoff/MARKET_FOUR_PAGE_GATE8_DISPATCH_RECEIPT_V0.1.json)。

## 继承、变化与边界

原V0.12（SHA-256 `9f66bff8a3e0d7f73cb32c18472559317dc57436b5d37614a2b61658b7e76c0e`）作为原批准组合及事实/关键词/B/C/视觉/共享来源与开放项的历史依据保留，本版取代其当前入口身份。旧Gate 8未授权及未外发状态由本次明确决定和交接覆盖；其他批准范围保持。历史包DRAFT/待审措辞由原Gate 6关闭记录覆盖，不回写历史原件。

Gate 8核定现有代码和可验证开发基线；D23未预批当前未提交共享修改。保留现有工作，复用共享owner，落实WordPress→API→Next.js及七面scope隔离，具体语义冲突返回owner。未改正文、URL、主词、事实、视觉、机器语义或发布条件；接收确认不等于实现完成或Gate 9通过。

