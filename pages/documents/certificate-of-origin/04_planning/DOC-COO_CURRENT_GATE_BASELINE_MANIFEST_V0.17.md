# DOC-COO Current Gate Baseline Manifest V0.17

日期：2026-09-08。本版接替V0.16成为当前唯一页面入口；V0.16及更早版本保留为历史。

| Item | Current value |
|---|---|
| Page / URL / language / scope | `DOC-COO` / `/documents/certificate-of-origin/` / EN / `tio2-my` |
| Keyword / mapping / fact | `titanium dioxide country of origin certificate` / `PROVISIONAL_URL` / `FACT_EVIDENCE_REQUIRED` |
| Gate 1–4/6 | `APPROVED / CLOSED` |
| Approved package | `COO-G6-HANDOFF-04` V0.4；SHA-256 `41a8f87d32b4c27c45192eb35e17049a24a30ad60d0565f23fdeaaa6f1eb9788` |
| Gate 8 implementation | commit `4ce8ecd121f5c4b7c89747d82d00aaff4a128b55`；receipt commit `155fec8025c8fb679c9cbc90549e4533de8aca84` |
| Gate 9 review | `DOC-COO-G9-PCR-01 / NOT_PASS` |
| Confirmed implementation defects | `0` |
| Required Findings | `DOC-COO-G9-F01 OPEN`；`DOC-COO-G9-F02 OPEN` |
| Lifecycle | `GATE9_REQUIRED_EVIDENCE_RETURN` |
| Gate 10 | `NOT_AUTHORIZED` |

当前实现的正文、实际页面、三端视觉、九档响应、SEO/Schema、Request Documents预填和共享Chrome组装没有发现实现缺陷。`COO-G9-07`仍缺真实200% zoom、命名非Chromium/真实设备/屏幕阅读器证据；`COO-G9-15`缺pre-work/final原始status输出、pre-work dirty逐路径清单和可归于独立Gate9的GREEN/typecheck/lint/build复跑，因此Gate9不得关闭。

唯一当前验收记录为`pages/documents/certificate-of-origin/07_qa/DOC-COO_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md`。下一轮仅复验两项稳定Finding，不重开已通过条件。真实表单发送、生产WordPress写入、合并、部署、DNS、发布、sitemap和索引均未授权。

## 2026-09-13 publication-contract overlay

`../../../../docs/architecture/TIO2_MY_23_PAGE_PUBLICATION_CONTRACT_FINALIZATION_V1.0.md` finalizes DOC-COO's registered URL, origin-document guidance role, buyer task, CTA, SEO fields, self-canonical, `index, follow`, Sitemap target and internal-link sources. `EG-001` permits the Malaysia-origin product proposition; shipment-specific certificate/customs outcomes and any unextended availability claim remain outside this overlay.
