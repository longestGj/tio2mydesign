# CONV-SAMPLE Gate 9 Current Baseline Manifest V0.3

## 0. Manifest Control

| Field | Value |
|---|---|
| Manifest ID | `CONV-SAMPLE-G9-MANIFEST-03` |
| Review ID | `CONV-SAMPLE-G9-PCR-01` |
| Page | `CONV-SAMPLE` / `/request-sample/` |
| Date | 2026-09-04 |
| Revision commit | `49289d40fdb0b91d28f534776464403883d912ff` |
| Gate 9 outcome | `READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS` |
| Manifest status | `CURRENT / PROJECT_CONTROL_APPROVED_GATE_9_BASELINE` |
| Page lifecycle | `READ_ONLY_QA_APPROVED` |
| Gate 10 | `NOT_AUTHORIZED` |

This V0.3 Manifest is the only current CONV-SAMPLE Gate 9 baseline. It consumes the project-control decision without authorizing Gate 10 or any production action.

## 1. Approval Authority

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `CONV-SAMPLE_GATE9_PROJECT_CONTROL_DECISION_V0.1.md` | 2,954 | `e643dea61b74ac1eea2aad0feab305e273d082742b7766e9dd08dccd247e9e4d` | Project-control Gate 9 decision and finding closure authority |
| `CONV-SAMPLE_GATE9_CURRENT_BASELINE_MANIFEST_V0.2.md` | 6,169 | `e00321aab884a03f74b78c0956a75f416abb7cb7f491c94e2f39983b32bbc4f5` | Historical submitted re-review baseline |
| `CONV-SAMPLE_GATE9_PROJECT_CONTROL_RETURN_V0.1.md` | 3,894 | `65721dbe3c05e99a12d2a072767589ba870ffc84cd10bcf59c2eabe9f3a39ce0` | Historical targeted return |
| `../06_handoff/CONV-SAMPLE_GATE7_MANIFEST_V0.2.md` | 4,561 | `5a8abfdb6a799cfa47e02a662202ffcdf4645a3ffd82bfe89007d9cce9325599` | Approved Gate 7 package authority |

The Gate 7 path is relative to this `05_review` directory.

## 2. Accepted Implementation Identity

| Item | Accepted value |
|---|---|
| Worktree reviewed | `D:\16Wordpress_nextjs\.worktrees\home-001-tio2-my` |
| Branch reviewed | `codex/home-001-tio2-my` |
| Revision commit | `49289d40fdb0b91d28f534776464403883d912ff` |
| Subject | `fix: address sample request gate 9 findings` |
| Development evidence | `docs/verification/conv-sample/CONV-SAMPLE_G9_TARGETED_REVISION_VERIFICATION_2026-09-04.md` |
| Development evidence SHA-256 | `31c567152ad02c7e5ad51cd262b912afc8fc2557d764fc25b5966cba8e2158c3` |
| Final tracked status at page-task re-review | Clean — no retained tracked diff |

This identity records the implementation that passed read-only QA. D23 did not modify D16.

## 3. Accepted Evidence Set

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `CONV-SAMPLE_GATE9_TARGETED_REREVIEW_EVIDENCE_V0.1.md` | 7,833 | `488f9ac5cf1e8cd6f89156d8ec5d14dfa596ba16b2f35e492b36be24bc642c46` | Fresh diff, commands, browser and visual evidence |
| `CONV-SAMPLE_GATE9_FINDING_CLOSURE_SUBMISSION_V0.1.md` | 2,674 | `aa6251d7df4f4f85f61fac94a4b1e61ec0d44bd6596fef1a921bade0d4d6ff11` | Four finding closure requests |
| `CONV-SAMPLE_GATE9_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.2.md` | 3,164 | `450023d08c3a72b68914467b225c0d93f122da498b2279cfd14cd5afeeba3a05` | Accepted project-control submission |
| `D:\23MySec\99_workspace\CONV-SAMPLE_GATE9_2026-09-04\rereview\gate9-targeted-rereview-runtime.json` | 11,517 | `2f87e558fe787f68b3c6701dc5a085b7fac739531e8a41dde9ed01ddcc8af30b` | Independent 86/86 production-browser result |

## 4. Closed Finding Ledger

| Finding | Severity | Final state |
|---|---|---|
| `SAMPLE-G9-P1-01` known initial unavailability | P1 | `VERIFIED_FIXED / CLOSED` |
| `SAMPLE-G9-P1-02` Privacy anchor target | P1 | `VERIFIED_FIXED / CLOSED` |
| `SAMPLE-G9-P2-01` FAQ disclosure semantics | P2 | `VERIFIED_FIXED / CLOSED` |
| `SAMPLE-G9-P2-02` submitting `aria-busy` | P2 | `VERIFIED_FIXED / CLOSED` |

No new P0, P1 or P2 finding was observed in the accepted targeted re-review.

## 5. Verification Snapshot

- project-control fresh regression/isolation: 13 files / 133 tests PASS;
- project-control TypeScript check PASS;
- project-control commit diff and Desktop 1440 / Mobile 390 / initial-unavailable 390 review PASS;
- accepted page-task production build and targeted ESLint PASS;
- accepted independent dual-server production-browser audit: 86/86 PASS;
- fixed commit and D16 tracked worktree were clean at final page-task verification;
- temporary local verification servers were stopped.

## 6. Recorded Gate 10 Release Blockers

Gate 9 approval does not waive any of the following:

1. verified production receiver URL/token ownership, durable persistence, receiver-side deduplication and positive acknowledgement;
2. authorized target WordPress singleton/seed application and scope verification;
3. Legal/Privacy confirmation of production data-flow, Privacy Policy and consent/CMP parity;
4. complete-site readiness for shared RFQ, upstream pages, Global Chrome and legal dependencies;
5. separate user authorization for Gate 10, deployment, publication, DNS, production writes, sitemap admission and indexing.

## 7. Historical Disposition

- `CONV-SAMPLE_GATE9_CURRENT_BASELINE_MANIFEST_V0.1.md` remains the immutable first-review ledger.
- `CONV-SAMPLE_GATE9_CURRENT_BASELINE_MANIFEST_V0.2.md` is `HISTORICAL_ACCEPTED_REREVIEW_SUBMISSION / SUPERSEDED_AS_CURRENT_POINTER_BY_V0.3`.
- Submission and closure-request files remain historical evidence; the project-control decision and this Manifest now govern final Gate 9 state.

## 8. Current Stop Boundary

Allowed current state:

`CONV-SAMPLE-G9-PCR-01 = PROJECT_CONTROL_ACCEPTED / CLOSED`

`Gate 9 = READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS`

`lifecycle = READ_ONLY_QA_APPROVED`

`Gate 10 = NOT_AUTHORIZED`

Do not modify D16, deploy, publish, change DNS, write production data, migrate, add the route to a sitemap or enable indexing under this decision.

## 2026-09-13 publication-contract overlay

`../../../../docs/architecture/TIO2_MY_23_PAGE_PUBLICATION_CONTRACT_FINALIZATION_V1.0.md` finalizes CONV-SAMPLE's URL, qualified sample-request role, buyer task, submit CTA, SEO fields, self-canonical, `index, follow`, Sitemap target and internal-link sources. Existing field/provider/privacy and fulfillment boundaries remain; actual Sitemap/indexing activation still requires the later release step.
