# MARKET-BR-PT Current Gate Baseline Manifest V0.13

日期：2026-09-08。本版接替V0.12成为当前唯一页面入口；V0.12及更早版本保留为历史。

| Field | Current value |
|---|---|
| Page / planning path / language / scope | `MARKET-BR-PT` / `/pt-br/markets/brazil/` / `pt-BR` / `tio2-my` |
| Mapping | `PROVISIONAL_ROUTE`；planning path不证明route/canonical/hreflang/live |
| Gate 1–4 | `USER_APPROVED / CLOSED` |
| Gate 4 freeze | `BRPT-G4-V11R1-SOURCE-01`；HTML SHA-256 `1159f03eb5018f73ba497cca77ed4d9903c10d2bb3a6c2612c51da89757a0357` |
| Gate 6 execution | `MARKET-BR-PT_GATE6_EXECUTION_REPORT_V0.2.md`；SHA-256 `9ebd2fed093f569db620befc97451267bf7ea8209823d56bbfa3b22d45b75eed` |
| Independent review | `BR-PT-G6-TARGETED-RECHECK-01 / REVIEW_PASS`；SHA-256 `b00316abae8f6968d6ba43c8c90d31f818f2d053170f61fa4f6fde374cf524f4`；Required Finding 0 |
| Approved package | `BR-PT-G6-HANDOFF-02` V0.2；SHA-256 `f1be33c0cef8df85b6e8c8d32a62a7c95c2e210d81169061ba7b1fec2ba41b15` |
| Gate 6 closure | `BR-PT-G6-DELEGATED-CLOSE-01 / APPROVED / CLOSED`；`USER_STANDING_AUTHORITY / G346-DELEGATED-CLOSURE-20260907` |
| Gate 8 authorization | `G8-BR-CL-COO-FOUR-20260908-01 / USER_AUTHORIZED` |
| Recipient | `00Con` / thread `01a07a66-3c4a-75a2-9df4-648942742f9e` / `D:/16Wordpress_nextjs` |
| Lifecycle | `HANDED_OFF / GATE8_USER_AUTHORIZED` |
| Gate 8 / Gate 9–10 | `DISPATCHED / INTAKE_IN_PROGRESS`；`NOT_AUTHORIZED / NOT_EXECUTED` |

Gate 6批准组合保持不变；`BR-PT-G9-01…12`与`BR-PT-DEP-01…06`继续约束开发和后续验收。`PROVISIONAL_ROUTE`及conditional alternate限制保持，只有批准route真实live、自canonical且互相返回时才可建立reciprocal `en↔pt-BR`。

用户明确授权本页与Brazil EN、Chloride Process、DOC-COO一并交给既有`00Con`执行Gate 8；正式范围见`docs/architecture/GATE8_BR_CL_COO_FOUR_PAGE_AUTHORIZATION_AND_DISPATCH_V1.0.md`。发送成功不等于实现完成或Gate 9通过；部署、发布、DNS、索引、生产写入及真实对外表单发送均未授权。
