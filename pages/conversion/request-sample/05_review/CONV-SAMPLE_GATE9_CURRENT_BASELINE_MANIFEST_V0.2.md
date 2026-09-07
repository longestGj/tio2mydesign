# CONV-SAMPLE Gate 9 Current Baseline Manifest V0.2

## 0. Manifest Control

| Field | Value |
|---|---|
| Manifest ID | `CONV-SAMPLE-G9-MANIFEST-02` |
| Review ID | `CONV-SAMPLE-G9-PCR-01` |
| Page | `CONV-SAMPLE` / `/request-sample/` |
| Date | 2026-09-04 |
| Revision commit | `49289d40fdb0b91d28f534776464403883d912ff` |
| Gate 9 re-review result | `FOUR_FINDINGS_VERIFIED_CORRECTED / NO_NEW_FINDING_OBSERVED` |
| Manifest status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Page lifecycle | `READ_ONLY_QA_IN_REVIEW` |
| Gate 10 / release | `LOCKED / NOT_AUTHORIZED` |

This V0.2 Manifest is the only current CONV-SAMPLE Gate 9 submission Manifest. V0.1 remains the historical first-review ledger. V0.2 does not self-approve or close Gate 9.

## 1. Authority and Return Chain

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `../06_handoff/CONV-SAMPLE_GATE7_MANIFEST_V0.2.md` | 4,561 | `5a8abfdb6a799cfa47e02a662202ffcdf4645a3ffd82bfe89007d9cce9325599` | Approved Gate 7 package authority |
| `CONV-SAMPLE_GATE8_EXTERNAL_DEVELOPMENT_COMPLETION_RECORD_V0.1.md` | 6,389 | `6003a057a1e337e7012bc8b7106d4fe5aac8192b3d772719e23a8076b8d4d73b` | Original Gate 8 completion record |
| `CONV-SAMPLE_GATE9_CURRENT_BASELINE_MANIFEST_V0.1.md` | 5,042 | `5dca7f1a3e06252876972bd27b643d95fe54a789361e22131ed014202ffb0d5b` | Historical first-review ledger; four findings |
| `CONV-SAMPLE_GATE9_PROJECT_CONTROL_RETURN_V0.1.md` | 3,894 | `65721dbe3c05e99a12d2a072767589ba870ffc84cd10bcf59c2eabe9f3a39ce0` | Project-control confirmation and targeted return; corrected URL `/request-sample/` |

The Gate 7 path is relative to this `05_review` directory.

## 2. Returned Revision Identity

| Item | Verified value |
|---|---|
| Worktree | `D:\16Wordpress_nextjs\.worktrees\home-001-tio2-my` |
| Branch | `codex/home-001-tio2-my` |
| Revision commit | `49289d40fdb0b91d28f534776464403883d912ff` |
| Subject | `fix: address sample request gate 9 findings` |
| Development evidence | `docs/verification/conv-sample/CONV-SAMPLE_G9_TARGETED_REVISION_VERIFICATION_2026-09-04.md` |
| Development evidence bytes | 7,079 |
| Development evidence SHA-256 | `31c567152ad02c7e5ad51cd262b912afc8fc2557d764fc25b5966cba8e2158c3` |
| Final tracked status | Clean — no retained tracked diff |

The development evidence path is relative to the D16 worktree.

## 3. Current Gate 9 Re-review Files

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `CONV-SAMPLE_GATE9_TARGETED_REREVIEW_EVIDENCE_V0.1.md` | 7,833 | `488f9ac5cf1e8cd6f89156d8ec5d14dfa596ba16b2f35e492b36be24bc642c46` | Fresh diff, commands, browser and visual evidence |
| `CONV-SAMPLE_GATE9_FINDING_CLOSURE_SUBMISSION_V0.1.md` | 2,674 | `aa6251d7df4f4f85f61fac94a4b1e61ec0d44bd6596fef1a921bade0d4d6ff11` | Four finding closure requests |
| `CONV-SAMPLE_GATE9_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.2.md` | 3,164 | `450023d08c3a72b68914467b225c0d93f122da498b2279cfd14cd5afeeba3a05` | Current project-control entry |

Paths are relative to `pages/conversion/request-sample/05_review/`.

## 4. Independent Runtime Evidence

Paths are relative to `D:\23MySec\`.

| File | Bytes | SHA-256 |
|---|---:|---|
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/gate9-targeted-rereview-runtime.mjs` | 15,792 | `b4bbbe1488ec83473257ea47405c4cb2dc9fbc749537d9dda3341243f7ecd12a` |
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/rereview/gate9-targeted-rereview-runtime.json` | 11,517 | `2f87e558fe787f68b3c6701dc5a085b7fac739531e8a41dde9ed01ddcc8af30b` |
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/rereview/configured-1440.png` | 249,000 | `7b64ccde7b9d8ab739e286647f437896572fc8fbf2bf49510acf43541d5d9715` |
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/rereview/configured-768.png` | 214,823 | `cfb351e0a346590fc185db4aadab2fc1c6666e10aab652292786ab007e84209d` |
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/rereview/configured-390.png` | 191,841 | `1586136851b2bdc66e56251f50f482e9fdad7e8ac0e7928b64586ee24a09c7d5` |
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/rereview/initial-unavailable-390.png` | 119,776 | `f364594541586d4735e43ae82dd6edbedd50eb4369fbbe32196d79781a71e910` |

## 5. Finding Ledger

| Finding | Original severity | Re-review state |
|---|---|---|
| `SAMPLE-G9-P1-01` known initial unavailability | P1 | `VERIFIED_CORRECTED / PENDING_PROJECT_CONTROL_CLOSURE` |
| `SAMPLE-G9-P1-02` Privacy anchor target | P1 | `VERIFIED_CORRECTED / PENDING_PROJECT_CONTROL_CLOSURE` |
| `SAMPLE-G9-P2-01` FAQ disclosure semantics | P2 | `VERIFIED_CORRECTED / PENDING_PROJECT_CONTROL_CLOSURE` |
| `SAMPLE-G9-P2-02` submitting `aria-busy` | P2 | `VERIFIED_CORRECTED / PENDING_PROJECT_CONTROL_CLOSURE` |

No new P0/P1/P2 finding was observed. Only project control may close the findings and approve Gate 9.

## 6. Fresh Verification Snapshot

- regression/isolation: 13 files / 133 tests PASS;
- TypeScript and targeted ESLint PASS;
- production build PASS;
- independent dual-server production-browser audit: 86/86 PASS;
- Desktop 1440, Tablet 768, Mobile 390 and initial-unavailable 390 manually inspected;
- fixed commit and final D16 tracked tree clean;
- all temporary local servers stopped.

## 7. Retained Release Dependencies

- production receiver, durable persistence, receiver-side deduplication and positive acknowledgement;
- authorized target WordPress singleton/seed and scope verification;
- Legal/Privacy production data-flow, policy and shared consent/CMP parity;
- target complete-site RFQ, upstream, Global Chrome and legal dependency readiness;
- project-control Gate 9 decision;
- separate Gate 10, deployment, publication, DNS, production-write, sitemap and indexing authorization.

## 8. Historical Disposition

`CONV-SAMPLE_GATE9_CURRENT_BASELINE_MANIFEST_V0.1.md` is `HISTORICAL_FIRST_REVIEW_LEDGER / SUPERSEDED_FOR_CURRENT_SUBMISSION_BY_V0.2`. Its findings and evidence remain immutable history.

## 9. Stop Boundary

Allowed current status:

`CONV-SAMPLE-G9-PCR-01 = DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`

Do not claim Gate 9 pass/closure, enter Gate 10, modify D16, deploy, publish, change DNS, write production data, migrate, add to sitemap or enable indexing. Await project-control decision.
