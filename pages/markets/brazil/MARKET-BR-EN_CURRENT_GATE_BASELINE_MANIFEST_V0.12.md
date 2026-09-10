# MARKET-BR-EN Current Gate Baseline Manifest V0.12

日期：2026-09-08。本版接替V0.11成为当前唯一页面入口；V0.11及更早版本保留为历史。

| Field | Current value |
|---|---|
| Page / URL / language / scope | `MARKET-BR-EN` / `/markets/brazil/` / EN / `tio2-my` |
| Gate 1–4 | `USER_APPROVED / CLOSED` |
| Gate 4 freeze | `BR-EN-G4-V11-SOURCE-01`；HTML SHA-256 `6827066a38c28b5e3fe990e0d53b8582ca215a1d5b481ffeacf18c74e3ac7707` |
| Gate 6 authorization | `G6-4PAGE-PRACTICE-01 / EXECUTION_COMPLETE` |
| Gate 6 execution | `MARKET-BR-EN_GATE6_EXECUTION_REPORT_V0.2.md`；SHA-256 `44e688c9b21f3974c6a098a123e4d40c83284f2bda69dc32ae31cd9c76b6e0ab` |
| Independent review | `BR-EN-G6-TARGETED-RECHECK-02 / REVIEW_PASS`；SHA-256 `300105366615581378f1edbb7b56c424f8edabe95a815817179a19f3ab7f543d`；Required Finding 0 |
| Approved package | `BR-EN-G6-HANDOFF-02` V0.2；SHA-256 `d8b7c2e759d9952d7b94a09bc397a2837dbf6f80c0b3d968c2b0324a3ad6b18a` |
| Gate 6 closure | `BR-EN-G6-DELEGATED-CLOSE-01 / APPROVED / CLOSED`；`USER_STANDING_AUTHORITY / G346-DELEGATED-CLOSURE-20260907` |
| Lifecycle | `APPROVED_FOR_HANDOFF` |
| Handoff / Gate 8–10 | `HANDED_OFF=NO / NOT_AUTHORIZED / NOT_EXECUTED` |

Gate 6批准组合由V0.2执行报告、V0.2交付包、V0.2定向独立复核和常设授权关闭记录构成。`BR-EN-G6-IR-01…05`均已关闭；`BR-EN-G6-F01`在交付映射层关闭，生产输出仍由`BR-EN-G9-07`验证。包内`BR-EN-G9-01…12`与`BR-EN-DEP-01…06`是后续开发和验收合同，不表示运行时已经满足。

Gate 4批准正文、行为、冻结源和视觉审查保持不变。V0.1 Gate 6对象只保留历史候选/对照。常规逐页用户审核为`NOT_REQUIRED_BY_STANDING_AUTHORITY`；本页未实际外发，Gate 8、D16、部署、发布、DNS和索引均未启动。
