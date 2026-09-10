# DOC-COO Current Gate Baseline Manifest V0.15

日期：2026-09-08。本版接替V0.14成为当前唯一页面入口；V0.14及更早版本保留为历史。

| Item | Current value |
|---|---|
| Page / URL / language / scope | `DOC-COO` / `/documents/certificate-of-origin/` / EN / `tio2-my` |
| Keyword / mapping / fact | `titanium dioxide country of origin certificate` / `PROVISIONAL_URL` / `FACT_EVIDENCE_REQUIRED` |
| Gate 1–4 | `USER_APPROVED / CLOSED`；历史Gate 5完整视觉按当前工作流等价继承 |
| Visual freeze | `COO-G5-V01-SOURCE-01`；HTML SHA-256 `c4f9b788619afa7d1ef6ebf8f43be0c89d1bf177ffbe68326d3399f8db028b31` |
| Gate 6 execution | `DOC-COO_GATE6_EXECUTION_REPORT_V0.4.md`；SHA-256 `30d6296918f85ae48447982d491ac95f127eb96cc14b90ea1b2e76eb1c9b7f67` |
| Independent review | `COO-G6-DELIVERY-TR-04 / REVIEW_PASS`；SHA-256 `c90439e819e7f11a6955462702ee1be1c95a1bde6203a2375e8f4f866b7dc428`；Required Finding 0 |
| Approved package | `COO-G6-HANDOFF-04` V0.4；SHA-256 `41a8f87d32b4c27c45192eb35e17049a24a30ad60d0565f23fdeaaa6f1eb9788` |
| Gate 6 path / closure | `ESCALATED_PATH_FOR_DELIVERY_REPAIR_ONLY`；`COO-G6-DELEGATED-CLOSE-01 / APPROVED / CLOSED`；`USER_STANDING_AUTHORITY / G346-DELEGATED-CLOSURE-20260907` |
| Lifecycle | `APPROVED_FOR_HANDOFF` |
| Handoff / Gate 8–10 | `HANDED_OFF=NO / NOT_AUTHORIZED / NOT_EXECUTED` |

`COO-G6-IR-F01…F06`及`COO-G6-F01`已在交付合同层关闭，实际生产输出仍由`COO-G9-01…15`验证。V0.4明确要求Gate 8提交合同测试RED→同测试GREEN，以及repository、worktree、branch、pre-work HEAD、final commit和前后clean/dirty完整身份；缺失时`COO-G9-15`不通过。

`PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED`、Official Source发布前新鲜核验、origin文档类型预填、交易级事实限制、共享Schema owner和`COO-G4-SHARED-OBS-01`继续有效。V0.1–V0.3保留历史证据。常规逐页用户审核为`NOT_REQUIRED_BY_STANDING_AUTHORITY`；本页未实际外发，Gate 8、D16、部署、发布、DNS和索引均未启动。
