# CONTACT-001 Current Gate Baseline Manifest V0.7

## 0. Control

| Field | Value |
|---|---|
| Page / route | `CONTACT-001` / `/contact/` |
| Page type | Utility contact page |
| Lifecycle | `GATE8_IMPLEMENTATION_RETURNED / GATE9_INDEPENDENT_REVIEW_IN_PROGRESS` |
| Keyword / fact status | `NO_PRIMARY_KEYWORD` / approved Contact facts |
| Gate 1–4 | `APPROVED / CLOSED` |
| Gate 6 | `APPROVED / CLOSED / HANDED_OFF` |
| Gate 8 | `IMPLEMENTATION_AND_EVIDENCE_RETURNED` |
| Gate 9 | `AUTHORIZED / INDEPENDENT_REVIEW_IN_PROGRESS` |
| Gate 10 | `NOT_AUTHORIZED` |
| Manifest date | `2026-09-10` |

This is the single current page Manifest. V0.6 and earlier remain historical baselines.

## 1. Approved source and returned implementation

| Role | Identity |
|---|---|
| Gate 6 package | `CONTACT-001-G6-HANDOFF-20260910-02`; `pages/contact/06_handoff/CONTACT-001_GATE6_HANDOFF_PACKAGE_V0.2.md`; SHA-256 `5AEB5C1C9009A0F771C89C03F47526F8813893FD672041E7D28FBE5E3157757D` |
| Gate 6 review | `CONTACT-001-G6-IR-01 = REVIEW_PASS`; Required Findings `0` |
| Gate 8 dispatch | `G8-CONTACT-001-20260910-01` |
| Development branch/worktree | `codex/contact-001-gate8`; `D:\16Wordpress_nextjs\.worktrees\contact-001-gate8` |
| Baseline / implementation / evidence HEAD | `9571dd2ab7e7f2c7c9cb373e008ca81b3c534822` / `619bd75afd2a4725d9efe9f2e0e0baa3bf3c515e` / `767e6b76ceceb002b0def0ad7c9e878b043e87e2` |
| Build / held runtime | `e9kK97wgApJrE2vMfUtPg` / `http://127.0.0.1:4491` |
| Gate 8 evidence Manifest | `docs/verification/intake/CONTACT-001-G8-20260910-01/gate8_evidence_manifest.json`; source SHA-256 `40975CC83837C9F01424CD69DA74FC034E9226D12F788A888F229A5DF47AE74A` |

## 2. Current Gate 9 scope override

The user's 2026-09-10 decision `CONTACT-G9-SCOPE-20260910-01` removes physical-device/touch-device and screen-reader/assistive-technology evidence from the required `CONTACT-001` Gate 9 and release set.

Authority: `docs/architecture/CONTACT-001_GATE9_REAL_DEVICE_AT_SCOPE_DECISION_V1.0.md`.

For `CONTACT-G9-15`, the removed checks are recorded as `NOT_TESTED / NO_LONGER_REQUIRED_BY_USER_DECISION`, not `PASS`. Keyboard/focus, native 200% zoom, reduced motion, Chromium/non-Chromium, semantics/accessibility-tree and Axe evidence remain in scope. The Gate 8 intake reported native 200% as open, so Gate 9 must independently verify or otherwise disposition that retained requirement.

## 3. Remaining boundary

The scope decision does not resolve the absent Contact-specific processor/receiver, positive receipt predicate, external provider/inbox evidence, anti-spam/durable dedup or Privacy/retention parity. `CONTACT-G9-06–09` and their corresponding dependencies remain subject to independent Gate 9 disposition.

No Gate 9 pass, integration readiness, Gate 10, merge, deployment, publication, DNS or indexing authority is created by this Manifest.

