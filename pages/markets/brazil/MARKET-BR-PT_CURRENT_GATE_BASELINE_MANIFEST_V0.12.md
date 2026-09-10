# MARKET-BR-PT Current Gate Baseline Manifest V0.12

日期：2026-09-08。本版接替V0.11成为当前唯一页面入口；V0.11及更早版本保留为历史。

| Field | Current value |
|---|---|
| Page / planning path / language / scope | `MARKET-BR-PT` / `/pt-br/markets/brazil/` / `pt-BR` / `tio2-my` |
| Mapping | `PROVISIONAL_ROUTE`；planning path不证明route/canonical/hreflang/live |
| Gate 1–4 | `USER_APPROVED / CLOSED` |
| Gate 4 freeze | `BRPT-G4-V11R1-SOURCE-01`；HTML SHA-256 `1159f03eb5018f73ba497cca77ed4d9903c10d2bb3a6c2612c51da89757a0357` |
| Gate 6 authorization | `G6-4PAGE-PRACTICE-01 / EXECUTION_COMPLETE` |
| Gate 6 execution | `MARKET-BR-PT_GATE6_EXECUTION_REPORT_V0.2.md`；SHA-256 `9ebd2fed093f569db620befc97451267bf7ea8209823d56bbfa3b22d45b75eed` |
| Independent review | `BR-PT-G6-TARGETED-RECHECK-01 / REVIEW_PASS`；SHA-256 `b00316abae8f6968d6ba43c8c90d31f818f2d053170f61fa4f6fde374cf524f4`；Required Finding 0 |
| Approved package | `BR-PT-G6-HANDOFF-02` V0.2；SHA-256 `f1be33c0cef8df85b6e8c8d32a62a7c95c2e210d81169061ba7b1fec2ba41b15` |
| Gate 6 closure | `BR-PT-G6-DELEGATED-CLOSE-01 / APPROVED / CLOSED`；`USER_STANDING_AUTHORITY / G346-DELEGATED-CLOSURE-20260907` |
| Lifecycle | `APPROVED_FOR_HANDOFF` |
| Handoff / Gate 8–10 | `HANDED_OFF=NO / NOT_AUTHORIZED / NOT_EXECUTED` |

Gate 6批准组合由V0.2执行报告、V0.2交付包、V0.2定向独立复核和常设授权关闭记录构成。`BR-PT-G6-IR-F01…F06`及`BR-PT-G6-F01`均已在交付层关闭；包内`BR-PT-G9-01…12`与`BR-PT-DEP-01…06`继续约束后续实现。

`PROVISIONAL_ROUTE`继续保留；reciprocal `en↔pt-BR`只在双方批准route实际live、自canonical并互相返回时成立，robots/sitemap/indexing仍由后续明确授权决定。V0.1 Gate 6对象只保留历史候选/对照。常规逐页用户审核为`NOT_REQUIRED_BY_STANDING_AUTHORITY`；本页未实际外发，Gate 8、D16、部署、发布、DNS和索引均未启动。
