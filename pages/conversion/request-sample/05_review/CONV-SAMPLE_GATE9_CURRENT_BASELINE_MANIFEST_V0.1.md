# CONV-SAMPLE Gate 9 Current Baseline Manifest V0.1

## 0. Manifest Control

| Field | Value |
|---|---|
| Manifest ID | `CONV-SAMPLE-G9-MANIFEST-01` |
| Review ID | `CONV-SAMPLE-G9-PCR-01` |
| Page | `CONV-SAMPLE` / `/request-sample/` |
| Date | 2026-09-04 |
| Gate 8 | `IMPLEMENTED / DEVELOPMENT_COMPLETE` |
| Gate 9 result | `FINDINGS_PRESENT / P0=0 / P1=2 / P2=2` |
| Manifest status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Page lifecycle | `HANDED_OFF` |
| Gate 10 / release | `LOCKED / NOT_AUTHORIZED` |

This is the only current CONV-SAMPLE Gate 9 submission Manifest. It records a read-only QA candidate and does not approve or close Gate 9.

## 1. Authority Roots

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `../06_handoff/CONV-SAMPLE_GATE7_MANIFEST_V0.2.md` | 4,561 | `5a8abfdb6a799cfa47e02a662202ffcdf4645a3ffd82bfe89007d9cce9325599` | Approved Gate 7 package authority |
| `CONV-SAMPLE_GATE8_EXTERNAL_DEVELOPMENT_COMPLETION_RECORD_V0.1.md` | 6,389 | `6003a057a1e337e7012bc8b7106d4fe5aac8192b3d772719e23a8076b8d4d73b` | Returned Gate 8 implementation record |
| `CONV-SAMPLE_GATE9_USER_AUTHORIZATION_RECORD_V0.1.md` | 2,263 | `16f5ce4707a431dcee8064bebf2011e2e2e7783f7b4021aa820e7a164cf15937` | Explicit user Gate 9 authorization and limits |

The Gate 7 path is relative to this `05_review` directory.

## 2. Current Gate 9 Submission Files

| File | Bytes | SHA-256 | Status / role |
|---|---:|---|---|
| `CONV-SAMPLE_GATE9_EXECUTION_EVIDENCE_V0.1.md` | 6,305 | `00d4b50672c181a995e280b80595a66f68d67e9f3b14d2bc8775045c04f900d2` | Fresh commands, runtime evidence and visual inspection |
| `CONV-SAMPLE_GATE9_READ_ONLY_QA_AUDIT_V0.1.md` | 10,731 | `46ad61cc8d7b9419a77a4eccc8851880ce3594d6637326d508249c3ad413020b` | Acceptance matrix, findings and blockers |
| `CONV-SAMPLE_GATE9_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md` | 2,990 | `fd90260c2a81f9eefba5c573fce58bb21f8cacdb4743f4ffb495fe77f10698a2` | Formal PCR-01 review entry |

All paths in this section are relative to `pages/conversion/request-sample/05_review/`.

## 3. Returned Implementation Identity

| Item | Verified value |
|---|---|
| Worktree | `D:\16Wordpress_nextjs\.worktrees\home-001-tio2-my` |
| Branch | `codex/home-001-tio2-my` |
| Commit | `f7fc16e991d8a51f13cdc2376549dce8367578f7` |
| Commit subject | `feat: implement Malaysia sample request` |
| Final tracked status | Clean — no retained tracked diff |

## 4. Supplementary Runtime Evidence

| File | Bytes | SHA-256 |
|---|---:|---|
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/gate9-runtime-audit.mjs` | 15,239 | `0245ee6d5af40c8ab37bdce9aabe379905e143642bd918384c02e9712f7e8515` |
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/gate9-runtime-audit.json` | 20,403 | `9ebe91a5cddef0b0486b2454b0b59ae9acb34d503a2a7020df50ddae494efe60` |
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/gate9-runtime-1440.png` | 249,033 | `8d1b2f37ae9ce05af7fbba48840cc573d81641ada17d20ae067726bc9e76cf99` |
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/gate9-runtime-768.png` | 214,604 | `ce42f2998dac3cb3c0fec50dd1d3580a229800eb8ad9f4b925aa33510050f978` |
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/gate9-runtime-390.png` | 191,942 | `7b97262f3d1e60db06374a7d1688a12b714367ea2b2e3ddbb1731dbb348df874` |

These paths are relative to `D:\23MySec\`. They are evidence only and do not become implementation sources.

## 5. Finding Ledger

| Finding | Severity | State |
|---|---|---|
| `SAMPLE-G9-P1-01` known unavailable receiver still renders initial form | P1 | `OPEN / RETURN_TO_IMPLEMENTATION_OWNER` |
| `SAMPLE-G9-P1-02` Privacy Policy target below 44px | P1 | `OPEN / RETURN_TO_IMPLEMENTATION_OWNER` |
| `SAMPLE-G9-P2-01` FAQ lacks contracted explicit `aria-expanded` state | P2 | `OPEN / PROJECT_CONTROL_DISPOSITION_REQUIRED` |
| `SAMPLE-G9-P2-02` submitting form lacks `aria-busy` | P2 | `OPEN / PROJECT_CONTROL_DISPOSITION_REQUIRED` |

No P0 finding was observed. This does not mean Gate 9 passes; the four findings and production dependencies remain open.

## 6. Retained Release Dependencies

- verified production receiver, token handling, operational owner, durable persistence, deduplication and positive acknowledgement;
- authorized target WordPress migration/singleton/seed and scope verification;
- Legal/Privacy confirmation of actual data flow, Privacy Policy and shared consent/CMP parity;
- target-environment verification of RFQ, upstream prefill owners, Global Chrome and legal dependencies;
- project-control Gate 9 disposition and any required recheck;
- separate Gate 10 and release authorization, including robots/sitemap/indexing decision.

## 7. Approval and Stop Boundary

Allowed current state:

`CONV-SAMPLE-G9-PCR-01 = DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`

Prohibited conclusions and actions:

- Gate 9 pass, approval or closure;
- `READ_ONLY_QA_APPROVED`;
- Gate 10 authorization or release readiness;
- D16 fixes by this D23 task;
- deployment, publication, DNS, production writes, migration or indexing.

Stop and await project-control review.
