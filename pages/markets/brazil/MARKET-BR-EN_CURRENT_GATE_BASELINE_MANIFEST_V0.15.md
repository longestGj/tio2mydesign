# MARKET-BR-EN Current Gate Baseline Manifest V0.15

日期：2026-09-08。本版接替V0.14成为当前唯一页面入口；V0.14及更早版本保留为历史。

| Field | Current value |
|---|---|
| Page / URL / language / scope | `MARKET-BR-EN` / `/markets/brazil/` / EN / `tio2-my` |
| Gate 1–4/6 | `APPROVED / CLOSED` |
| Approved package | `BR-EN-G6-HANDOFF-02` V0.2；SHA-256 `d8b7c2e759d9952d7b94a09bc397a2837dbf6f80c0b3d968c2b0324a3ad6b18a` |
| Gate 8 repair | implementation `c8b11ced84119578edb3f0ef8e27d25cf11e7eb5`；current receipt HEAD `bc4abc254401605f2afde1f28a649eb1f9b7d02e`；Build `2IMF284tCfKor6WTwWdXq` |
| Gate 9 review | `G9-BR-CL-COO-TARGETED-RECHECK-02 / PARTIAL_RECHECK_COMPLETE / NOT_PASS` |
| Finding status | `BR-EN-G9-F01 CLOSED`；`BR-EN-G9-F02/F03 OPEN` |
| Lifecycle | `READ_ONLY_QA_IN_REVIEW / EVIDENCE_AND_DEPENDENCIES_REQUIRED` |
| Gate 10 | `NOT_AUTHORIZED` |

Gate9已独立关闭Brazil EN完整视觉Finding。下游Application/Brazil Trade route Finding继续开放；RFQ源码修复已存在，但同一候选服务在独立浏览器序列前失效，故buyer-edit history Finding不能关闭。当前验收记录为`docs/architecture/GATE9_BR_CL_COO_FOUR_PAGE_TARGETED_RECHECK_V1.0.md`。
