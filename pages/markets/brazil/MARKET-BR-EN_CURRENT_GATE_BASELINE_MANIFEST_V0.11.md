# MARKET-BR-EN Current Gate Baseline Manifest V0.11

日期：2026-09-08。本版接替V0.10成为当前唯一页面入口；V0.10及更早版本保留为历史。

| Field | Current value |
|---|---|
| Page / URL / language / scope | `MARKET-BR-EN` / `/markets/brazil/` / EN / `tio2-my` |
| Gate 1–4 | `USER_APPROVED / CLOSED` |
| Gate 4 freeze | `BR-EN-G4-V11-SOURCE-01`；HTML SHA-256 `6827066a38c28b5e3fe990e0d53b8582ca215a1d5b481ffeacf18c74e3ac7707` |
| Gate 6 authorization | `G6-4PAGE-PRACTICE-01 / EXECUTION_AUTHORIZED` |
| Reviewed V0.1 | `BR-EN-G6-HANDOFF-01 / CANDIDATE_COMPARISON_ONLY` |
| Independent review | `BR-EN-G6-INDEPENDENT-REVIEW-01 / CHANGES_REQUIRED`；5项Required Finding OPEN |
| Existing Finding | `BR-EN-G6-F01`的交付映射方向可接受；仍须在身份合格的V0.2中重新派生和复核，原型未改、生产未验证 |
| Gate 6 lifecycle | `CHANGES_REQUIRED / NOT_CLOSED / NOT_APPROVED_FOR_HANDOFF` |
| Handoff / Gate 8–10 | `NOT_SENT / NOT_AUTHORIZED / NOT_EXECUTED` |

独立复核见`05_review/MARKET-BR-EN_GATE6_DELIVERY_INDEPENDENT_REVIEW_V0.1.md`。开放项为`BR-EN-G6-IR-01…05`：合格V0.2执行身份、准确上游及共享/receiver绑定、生产Logo语义、无障碍/设备接受条件和Consent消费验收。

Gate 4批准正文、行为合同、冻结源和视觉审查保持有效；没有视觉复核触发。下一步由页面隔离执行子代理从批准源形成V0.2执行报告与唯一交付包，再由不同身份定向复核。Gate 6后续按常设授权关闭，不等待逐页用户批准；实际外发及Gate 8仍需单独授权。
