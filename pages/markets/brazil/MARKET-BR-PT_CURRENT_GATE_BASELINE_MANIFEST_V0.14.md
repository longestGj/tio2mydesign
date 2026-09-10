# MARKET-BR-PT Current Gate Baseline Manifest V0.14

日期：2026-09-08。本版接替V0.13成为当前唯一页面入口；V0.13及更早版本保留为历史。

| Field | Current value |
|---|---|
| Page / planning path / language / scope | `MARKET-BR-PT` / `/pt-br/markets/brazil/` / `pt-BR` / `tio2-my` |
| Mapping | `PROVISIONAL_ROUTE`；conditional alternate限制保持 |
| Gate 1–4/6 | `APPROVED / CLOSED` |
| Approved package | `BR-PT-G6-HANDOFF-02` V0.2；SHA-256 `f1be33c0cef8df85b6e8c8d32a62a7c95c2e210d81169061ba7b1fec2ba41b15` |
| Gate 8 implementation | commit `4ce8ecd121f5c4b7c89747d82d00aaff4a128b55`；receipt commit `155fec8025c8fb679c9cbc90549e4533de8aca84` |
| Gate 9 review | `BR-PT-G9-INITIAL-01 / PROJECT_CONTROL_ACCEPTED / NOT_PASS` |
| Acceptance count | `PASS 4 / FAIL 3 / NOT_VERIFIED 5` |
| Required Findings | `BR-PT-G9-F01/F02 OPEN` |
| Lifecycle | `READ_ONLY_QA_IN_REVIEW / CHANGES_AND_EVIDENCE_REQUIRED` |
| Gate 10 | `NOT_AUTHORIZED` |

Gate9确认准确PT正文、一次英文目的地提示、SEO/Schema、conditional alternate hold、基本三端几何、RFQ fresh Brazil预填、Request Documents source-only和共享对话框成立。当前阻塞为三个Application及Brazil Trade目标404，以及RFQ买家改写目的国在Back→Forward后被Brazil重置。无障碍环境、DOC提交阻断、外部接收和完整隔离矩阵仍未验证。

唯一当前验收记录为`pages/markets/brazil/07_qa/MARKET-BR-PT_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md`。下一轮沿两项Finding及五项未验证范围定向收口；不重开Gate1–4/6。`PROVISIONAL_ROUTE`不升级；合并、部署、生产写入、DNS、发布、sitemap和索引均未授权。
