# MARKET-BR-EN Current Gate Baseline Manifest V0.13

日期：2026-09-08。本版接替V0.12成为当前唯一页面入口；V0.12及更早版本保留为历史。

| Field | Current value |
|---|---|
| Page / URL / language / scope | `MARKET-BR-EN` / `/markets/brazil/` / EN / `tio2-my` |
| Gate 1–4 | `USER_APPROVED / CLOSED` |
| Gate 4 freeze | `BR-EN-G4-V11-SOURCE-01`；HTML SHA-256 `6827066a38c28b5e3fe990e0d53b8582ca215a1d5b481ffeacf18c74e3ac7707` |
| Gate 6 execution | `MARKET-BR-EN_GATE6_EXECUTION_REPORT_V0.2.md`；SHA-256 `44e688c9b21f3974c6a098a123e4d40c83284f2bda69dc32ae31cd9c76b6e0ab` |
| Independent review | `BR-EN-G6-TARGETED-RECHECK-02 / REVIEW_PASS`；SHA-256 `300105366615581378f1edbb7b56c424f8edabe95a815817179a19f3ab7f543d`；Required Finding 0 |
| Approved package | `BR-EN-G6-HANDOFF-02` V0.2；SHA-256 `d8b7c2e759d9952d7b94a09bc397a2837dbf6f80c0b3d968c2b0324a3ad6b18a` |
| Gate 6 closure | `BR-EN-G6-DELEGATED-CLOSE-01 / APPROVED / CLOSED`；`USER_STANDING_AUTHORITY / G346-DELEGATED-CLOSURE-20260907` |
| Gate 8 authorization | `G8-BR-CL-COO-FOUR-20260908-01 / USER_AUTHORIZED` |
| Recipient | `00Con` / thread `01a07a66-3c4a-75a2-9df4-648942742f9e` / `D:/16Wordpress_nextjs` |
| Lifecycle | `HANDED_OFF / GATE8_USER_AUTHORIZED` |
| Gate 8 / Gate 9–10 | `DISPATCHED / INTAKE_IN_PROGRESS`；`NOT_AUTHORIZED / NOT_EXECUTED` |

Gate 6批准组合和稳定合同保持不变。`BR-EN-G9-01…12`与`BR-EN-DEP-01…06`约束开发和后续验收，不表示运行时已通过。

用户明确授权本页与Brazil PT、Chloride Process、DOC-COO一并交给既有`00Con`执行Gate 8；正式范围见`docs/architecture/GATE8_BR_CL_COO_FOUR_PAGE_AUTHORIZATION_AND_DISPATCH_V1.0.md`。发送成功不等于实现完成或Gate 9通过；部署、发布、DNS、索引、生产写入及真实对外表单发送均未授权。
