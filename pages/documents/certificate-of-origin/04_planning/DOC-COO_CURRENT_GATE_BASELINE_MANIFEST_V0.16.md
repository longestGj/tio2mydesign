# DOC-COO Current Gate Baseline Manifest V0.16

日期：2026-09-08。本版接替V0.15成为当前唯一页面入口；V0.15及更早版本保留为历史。

| Item | Current value |
|---|---|
| Page / URL / language / scope | `DOC-COO` / `/documents/certificate-of-origin/` / EN / `tio2-my` |
| Keyword / mapping / fact | `titanium dioxide country of origin certificate` / `PROVISIONAL_URL` / `FACT_EVIDENCE_REQUIRED` |
| Gate 1–4 | `USER_APPROVED / CLOSED`；历史Gate 5完整视觉按当前工作流等价继承 |
| Visual freeze | `COO-G5-V01-SOURCE-01`；HTML SHA-256 `c4f9b788619afa7d1ef6ebf8f43be0c89d1bf177ffbe68326d3399f8db028b31` |
| Gate 6 execution | `DOC-COO_GATE6_EXECUTION_REPORT_V0.4.md`；SHA-256 `30d6296918f85ae48447982d491ac95f127eb96cc14b90ea1b2e76eb1c9b7f67` |
| Independent review | `COO-G6-DELIVERY-TR-04 / REVIEW_PASS`；SHA-256 `c90439e819e7f11a6955462702ee1be1c95a1bde6203a2375e8f4f866b7dc428`；Required Finding 0 |
| Approved package | `COO-G6-HANDOFF-04` V0.4；SHA-256 `41a8f87d32b4c27c45192eb35e17049a24a30ad60d0565f23fdeaaa6f1eb9788` |
| Gate 6 closure | `COO-G6-DELEGATED-CLOSE-01 / APPROVED / CLOSED`；`USER_STANDING_AUTHORITY / G346-DELEGATED-CLOSURE-20260907` |
| Gate 8 authorization | `G8-BR-CL-COO-FOUR-20260908-01 / USER_AUTHORIZED` |
| Recipient | `00Con` / thread `01a07a66-3c4a-75a2-9df4-648942742f9e` / `D:/16Wordpress_nextjs` |
| Lifecycle | `HANDED_OFF / GATE8_USER_AUTHORIZED` |
| Gate 8 / Gate 9–10 | `DISPATCHED / INTAKE_IN_PROGRESS`；`NOT_AUTHORIZED / NOT_EXECUTED` |

`COO-G9-01…15`及`COO-G6-D01…09`继续约束实现与后续验收。Gate 8必须提交同一合同测试的RED→GREEN证据，以及repository/root、worktree、branch、pre-work HEAD、final commit和前后clean/dirty完整身份；缺失时`COO-G9-15`不通过。`PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED`及共享Schema边界保持。

用户明确授权本页与Brazil EN/PT、Chloride Process一并交给既有`00Con`执行Gate 8；正式范围见`docs/architecture/GATE8_BR_CL_COO_FOUR_PAGE_AUTHORIZATION_AND_DISPATCH_V1.0.md`。发送成功不等于实现完成或Gate 9通过；部署、发布、DNS、索引、生产写入及真实对外表单发送均未授权。
