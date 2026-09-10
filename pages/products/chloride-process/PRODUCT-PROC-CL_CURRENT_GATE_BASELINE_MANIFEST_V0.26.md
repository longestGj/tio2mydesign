# PRODUCT-PROC-CL Current Gate Baseline Manifest V0.26

日期：2026-09-08。本版接替V0.25成为当前唯一页面入口；V0.25及更早版本保留为历史。

| Item | Current value |
|---|---|
| Page / URL / language / scope | `PRODUCT-PROC-CL` / `/products/chloride-process-titanium-dioxide/` / EN / `tio2-my` |
| Type / keyword | Process aggregation / `chloride process titanium dioxide` |
| Gate 1–4 | `USER_APPROVED / CLOSED`；历史Gate 5完整视觉按当前工作流等价继承 |
| Visual freeze | `CL-G5-V01-SOURCE-01`；组合SHA-256 `fb13f68d7ebf96c6e58e8551c5071a74c2ebc662c359ba7087f6d549ee056f51` |
| Gate 6 execution | `PRODUCT-PROC-CL_GATE6_EXECUTION_REPORT_V0.3.md`；SHA-256 `f2c057a3b13bd0898fd0c5301b7ca2fa89454e71cdd8b996709fc7210ccfa56a` |
| Independent review | `PRODUCT-PROC-CL-G6-TR-03 / REVIEW_PASS`；SHA-256 `0090ec0d0bd0e43faf71a3f108702196ba167eaf1e33c24b37d138ed0aee061c`；Required Finding 0 |
| Approved package | `CL-G6-HANDOFF-03` V0.3；SHA-256 `f8962402e3d243bd9bdcf452a843ad1b0977a562d53ac474549be974b494061a` |
| Gate 6 closure | `CL-G6-DELEGATED-CLOSE-01 / APPROVED / CLOSED`；`USER_STANDING_AUTHORITY / G346-DELEGATED-CLOSURE-20260907` |
| Gate 8 authorization | `G8-BR-CL-COO-FOUR-20260908-01 / USER_AUTHORIZED` |
| Recipient | `00Con` / thread `01a07a66-3c4a-75a2-9df4-648942742f9e` / `D:/16Wordpress_nextjs` |
| Lifecycle | `HANDED_OFF / GATE8_USER_AUTHORIZED` |
| Gate 8 / Gate 9–10 | `DISPATCHED / INTAKE_IN_PROGRESS`；`NOT_AUTHORIZED / NOT_EXECUTED` |

八个登记Page ID、型号、position、clean URL和批准摘要的五元组继续作为WordPress/CMS/API到Next.js、可见Grade和ItemList的稳定关系合同；禁止推断Page ID。`CL-G9-01…18`、13项依赖和四类无障碍依赖继续约束实现和后续验收。

用户明确授权本页与Brazil EN/PT、DOC-COO一并交给既有`00Con`执行Gate 8；正式范围见`docs/architecture/GATE8_BR_CL_COO_FOUR_PAGE_AUTHORIZATION_AND_DISPATCH_V1.0.md`。发送成功不等于实现完成或Gate 9通过；部署、发布、DNS、索引、生产写入及真实对外表单发送均未授权。
