# APP-COAT Current Gate Baseline Manifest V0.12

日期：2026-09-08。唯一当前入口，接替V0.11；此前文件保留为历史。

| 字段 | 当前值 |
|---|---|
| Page / URL / scope | `APP-COAT` / `/applications/titanium-dioxide-for-coatings/` (`PROVISIONAL_URL`) / `tio2-my` |
| Gate 1–6 | `APPROVED / CLOSED`；批准组合及关闭依据继承V0.11 |
| 唯一交付包 | `APP-COAT-G6-HANDOFF-01` V0.1；SHA-256 `0ed6c22408f96e4282917b935dd551d0d0ed4b74becbd78a6eefac967460f915` |
| Gate 8返修候选 | implementation `4a7e170b0bba90ce8428b8f23788c15e3e64dde4`；evidence `293231dee11c9b66bfa8b31938c6987d7fa585ad`；Build `nueBC1PmlOz7I74G5G0oP` |
| Gate 9 | `TARGETED_RECHECK_COMPLETE / NOT_PASS` |
| Finding | `G9-T4A5-F01 CLOSED`；`F02 OPEN` |
| Other open | receiver、跨站scope/cache和环境补证 |
| 生命周期 | `GATE9_DEPENDENCY_BLOCKED` |
| Gate 10 | `NOT_AUTHORIZED / NOT_EXECUTED` |

定向复验：`../../../docs/architecture/GATE9_TRADE4_APPLICATION5_TARGETED_RECHECK_V1.0.md`。`PROVISIONAL_URL`保持，未批准最终URL。

## 2026-09-13 publication-contract overlay

The user publication decision and `../../../docs/architecture/TIO2_MY_23_PAGE_PUBLICATION_CONTRACT_FINALIZATION_V1.0.md` now finalize the registered URL and publication fields. This supersedes `PROVISIONAL_URL` only for URL/publication targeting; approved copy, PRODUCT V0.3 boundaries, Gate 9 evidence and Gate 10 release remain separately controlled.
