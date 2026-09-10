# PRODUCT-PROC-CL Current Gate Baseline Manifest V0.27

日期：2026-09-08。本版接替V0.26成为当前唯一页面入口；V0.26及更早版本保留为历史。

| Item | Current value |
|---|---|
| Page / URL / scope | `PRODUCT-PROC-CL` / `/products/chloride-process-titanium-dioxide/` / `tio2-my` |
| Type / keyword | Process aggregation / `chloride process titanium dioxide` |
| Gate 1–4/6 | `APPROVED / CLOSED` |
| Approved package | `CL-G6-HANDOFF-03` V0.3；SHA-256 `f8962402e3d243bd9bdcf452a843ad1b0977a562d53ac474549be974b494061a` |
| Gate 8 implementation | commit `4ce8ecd121f5c4b7c89747d82d00aaff4a128b55`；receipt commit `155fec8025c8fb679c9cbc90549e4533de8aca84` |
| Gate 9 review | `PRODUCT-PROC-CL-G9-INITIAL-01 / PROJECT_CONTROL_ACCEPTED / NOT_PASS` |
| Acceptance count | `PASS 12 / FAIL 2 / NOT_VERIFIED 4` |
| Required Findings | `CL-G9-F01…F04 OPEN` |
| Lifecycle | `READ_ONLY_QA_IN_REVIEW / CHANGES_AND_EVIDENCE_REQUIRED` |
| Gate 10 | `NOT_AUTHORIZED` |

Gate9确认正文、八个Grade显式五元组、三端视觉、fragment、空预填、共享Chrome、SEO和社交元数据符合批准范围。当前确定偏差为JSON-LD缺失/错误字段和`/applications/` 404；另缺receiver较后层、非Chromium/native-200%/真实设备/命名AT及负向payload/cache/scope独立证据。

唯一当前验收记录为`pages/products/chloride-process/07_qa/PRODUCT-PROC-CL_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md`。下一轮沿`CL-G9-F01…F04`定向修复/补证和复验，不重开Gate1–4/6。合并、部署、生产写入、DNS、发布、sitemap和索引均未授权。
