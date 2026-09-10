# PRODUCT-PROC-CL Current Gate Baseline Manifest V0.29

日期：2026-09-08。本版接替V0.28成为当前唯一页面入口；V0.28及更早版本保留为历史。

| Item | Current value |
|---|---|
| Page / URL / scope | `PRODUCT-PROC-CL` / `/products/chloride-process-titanium-dioxide/` / `tio2-my` |
| Gate 1–4/6 | `APPROVED / CLOSED` |
| Approved package | `CL-G6-HANDOFF-03` V0.3；SHA-256 `f8962402e3d243bd9bdcf452a843ad1b0977a562d53ac474549be974b494061a` |
| Gate 8 repair | implementation `c8b11ced84119578edb3f0ef8e27d25cf11e7eb5`；evidence HEAD `86a2d00fe48b73cdb20b1b65e03e7720f1f46cc4`；Build `2IMF284tCfKor6WTwWdXq` |
| Gate 9 targeted review | `G9-BR-CL-COO-FOUR-TARGETED-RECHECK-20260908-01 / SCHEMA_FINDING_CLOSED / PAGE_NOT_PASS` |
| Finding status | `CL-G9-F01 CLOSED`；`CL-G9-F02…F04 OPEN` |
| Lifecycle | `READ_ONLY_QA_IN_REVIEW / DEPENDENCIES_AND_EVIDENCE_REQUIRED` |
| Gate 10 | `NOT_AUTHORIZED` |

Gate9已在精确Build静态HTML中独立确认Schema精确合同，关闭`CL-G9-F01`。Applications route、receiver后层、设备/AT及负向CMS/cache/scope证据继续按原Finding开放。当前验收记录为`docs/architecture/GATE9_BR_CL_COO_FOUR_PAGE_TARGETED_RECHECK_V1.1.md`。
