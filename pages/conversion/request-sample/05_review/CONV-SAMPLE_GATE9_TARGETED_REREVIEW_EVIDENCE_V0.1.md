# CONV-SAMPLE Gate 9 Targeted Re-review Evidence V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-SAMPLE` / `/request-sample/` |
| Review ID | `CONV-SAMPLE-G9-PCR-01` |
| Date | 2026-09-04 |
| Returned findings | `SAMPLE-G9-P1-01`, `SAMPLE-G9-P1-02`, `SAMPLE-G9-P2-01`, `SAMPLE-G9-P2-02` |
| Revision commit | `49289d40fdb0b91d28f534776464403883d912ff` |
| Branch | `codex/home-001-tio2-my` |
| Result | `FOUR_FINDINGS_VERIFIED_CORRECTED / NO_NEW_FINDING_OBSERVED` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 10 / release | `LOCKED / NOT_AUTHORIZED` |

This is a fresh D23 read-only re-review of the fixed commit. It does not self-close Gate 9 and does not modify D16.

## 1. Returned Diff Review

The submitted commit contains 18 changed files: five page/component/style files, three focused test files, one development verification record and nine refreshed runtime screenshots. The code change is limited to:

- server-derived, non-secret `receiverReady` state;
- initial unavailable replacement;
- Privacy Policy target sizing at responsive widths;
- FAQ disclosure buttons and their state/panel relationships;
- form-level submitting `aria-busy`.

No approved copy, field, Grade/Application/Product relation, metadata, Schema, shared Chrome component, route, receiver payload, `site_scope`, noindex or claim boundary changed. `git show --check` passed for the fixed commit.

## 2. Fresh Command Evidence

All commands ran read-only against `D:\16Wordpress_nextjs\.worktrees\home-001-tio2-my` at the revision commit.

| Check | Fresh result |
|---|---|
| Branch / HEAD | `codex/home-001-tio2-my` / exact `49289d40fdb0b91d28f534776464403883d912ff` |
| CONV-SAMPLE regression and isolation | PASS — 13 files / 133 tests |
| TypeScript | PASS |
| Changed-file ESLint | PASS — 0 errors/warnings |
| `tio2-my` production build | PASS — `/request-sample` and `/api/tio2-my/request-sample` present |
| Fixed commit whitespace check | PASS |
| Independent production-browser re-review | PASS — 86 assertions / 0 failures |
| Final tracked integrity | PASS — `git status --short` empty and `git diff --exit-code` clean |
| Test-process cleanup | PASS — ports 3101, 3006 and 3007 have zero listeners |

Development evidence independently read:

| File | Bytes | SHA-256 |
|---|---:|---|
| `docs/verification/conv-sample/CONV-SAMPLE_G9_TARGETED_REVISION_VERIFICATION_2026-09-04.md` | 7,079 | `31c567152ad02c7e5ad51cd262b912afc8fc2557d764fc25b5966cba8e2158c3` |

The development evidence path is relative to the D16 worktree.

## 3. Independent Dual-server Browser Method

The D23 harness launched the same production build in two isolated modes:

1. configured mode with a non-production placeholder receiver URL/token and intercepted form requests;
2. unavailable mode with both receiver variables explicitly absent.

The configured mode covered 1440, 1280, 1024, 768, 430, 390, 375 and 320px, and exercised normal rendering, PRODUCT V0.3 prefill, Privacy target, FAQ keyboard/state, failure, retained values, duplicate protection, same-token retry, explicit success and runtime 503 unavailable.

The unavailable mode loaded a query-bearing `/request-sample/` request and verified the initial SSR/runtime state contained the exact approved unavailable panel but no form, sample field, prefill module, submit action, receiver URL or receiver token. Shared Header/Footer/RFQ, no-overflow and serious/critical Axe checks remained intact.

## 4. Finding Re-verification

| Finding | Independent observation | Proposed state |
|---|---|---|
| `SAMPLE-G9-P1-01` | Missing receiver configuration: raw SSR and hydrated page contain no `<form>`, fields, prefill controls, submit or secret; exact unavailable panel visible. Runtime 503 still removes fields and does not show success. | `VERIFIED_CORRECTED / PENDING_PROJECT_CONTROL_CLOSURE` |
| `SAMPLE-G9-P1-02` | Privacy Policy anchor itself measured at least 44×44 at 768/430/390/375/320; no responsive overflow. | `VERIFIED_CORRECTED / PENDING_PROJECT_CONTROL_CLOSURE` |
| `SAMPLE-G9-P2-01` | Four FAQ buttons present; initial `true/false` state accurate; `aria-controls` and `aria-labelledby` match; Enter expands; panel becomes visible; focus remains on trigger; all four answers exist in initial SSR HTML. | `VERIFIED_CORRECTED / PENDING_PROJECT_CONTROL_CLOSURE` |
| `SAMPLE-G9-P2-02` | Form exposes `aria-busy=true` during first request and retry; disabled submit and double-click guard remain; attribute is absent after failure and success. | `VERIFIED_CORRECTED / PENDING_PROJECT_CONTROL_CLOSURE` |

## 5. Regression and Boundary Results

- Normal Desktop remains a full-width single main flow with `Sample Request → Human Review → FAQ`; no right rail or large empty side column returned.
- Unknown Grade, Other Application, validation/focus, retained failure values and idempotency behavior remain intact.
- M-2377 neutral prefill, Sulfate and approved Coatings relationship remain; no Specialty Materials, Rubber taxonomy, M-996/M-2196 comparison or `NO_PUBLIC_MAPPING` inference was introduced.
- Shared Header/Footer/RFQ remain visible; Request a Sample remains outside first-level navigation.
- Canonical remains clean, robots remains `noindex, nofollow`, and Schema remains `WebPage` + `BreadcrumbList` only.
- No sample approval, stock, free sample, quantity, lead time, shipping, freight, dispatch, delivery or regulatory promise was added.
- `site_scope=tio2-my` and existing fail-closed content/receiver boundaries remain unchanged.

## 6. Independent Evidence Ledger

Paths are relative to `D:\23MySec\`.

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/gate9-targeted-rereview-runtime.mjs` | 15,792 | `b4bbbe1488ec83473257ea47405c4cb2dc9fbc749537d9dda3341243f7ecd12a` | Independent assertions |
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/rereview/gate9-targeted-rereview-runtime.json` | 11,517 | `2f87e558fe787f68b3c6701dc5a085b7fac739531e8a41dde9ed01ddcc8af30b` | Machine-readable 86/0 result |
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/rereview/configured-1440.png` | 249,000 | `7b64ccde7b9d8ab739e286647f437896572fc8fbf2bf49510acf43541d5d9715` | Configured Desktop |
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/rereview/configured-768.png` | 214,823 | `cfb351e0a346590fc185db4aadab2fc1c6666e10aab652292786ab007e84209d` | Configured Tablet |
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/rereview/configured-390.png` | 191,841 | `1586136851b2bdc66e56251f50f482e9fdad7e8ac0e7928b64586ee24a09c7d5` | Configured Mobile |
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/rereview/initial-unavailable-390.png` | 119,776 | `f364594541586d4735e43ae82dd6edbedd50eb4369fbbe32196d79781a71e910` | Missing-receiver initial state |

The four screenshots were manually inspected. No collision, clipping, unintended side rail or Buyer Clean internal governance text was observed.

## 7. Retained Release Blockers

The correction closes only the four returned implementation findings if project control agrees. It does not supply:

- verified production receiver URL/token ownership, durable persistence, receiver-side deduplication or positive acknowledgement;
- authorized target WordPress singleton/seed application and verification;
- Legal/Privacy confirmation of production data-flow, Privacy Policy and consent/CMP parity;
- target complete-site readiness for shared RFQ, upstream pages, Global Chrome and legal dependencies;
- Gate 10, deployment, publication, DNS, production writes, sitemap admission or indexing authorization.

## 8. Stop Boundary

Recommended Gate 9 review result: `FOUR_FINDINGS_VERIFIED_CORRECTED / NO_NEW_FINDING_OBSERVED`.

Allowed current status remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`. Stop and await project-control decision.
