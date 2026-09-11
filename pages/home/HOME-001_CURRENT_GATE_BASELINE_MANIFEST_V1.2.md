# HOME-001 Current Gate Baseline Manifest V1.2

## Current authority

| Field | Value |
|---|---|
| Date | `2026-09-11` |
| Page / route | `HOME-001` / `/` |
| Primary keyword | `malaysia titanium dioxide` |
| Planning lifecycle | `GATE6_APPROVED_CLOSED / APPROVED_FOR_HANDOFF` |
| Approved visual bundle | `HOME-001-G4-APP-ALIGN-BUNDLE-V1.1` |
| Approved Gate 6 package | `HOME-001-G6-APP-ALIGN-PACKAGE-V1` |
| Handoff ID | `HOME-001-G6-APP-ALIGN-HANDOFF-V1` |
| Acceptance IDs | `HOME-VU-A01..HOME-VU-A12` |
| Gate 8 | `HANDED_OFF=YES / DEVELOPMENT_IN_PROGRESS` |
| Gate 8 assignee | D16 task `01My开发1` / thread `01a07a66-3c4a-75a2-9df4-648942742f9e` |
| D16 pre-work identity | `main` at `9571dd2ab7e7f2c7c9cb373e008ca81b3c534822`, clean |
| Planned D16 branch | `codex/home-001-app-align-gate8` |
| Gate 9 / Gate 10 | `NOT_STARTED` / `LOCKED_NOT_AUTHORIZED` |
| Production rollback | `pages/home/07_qa/HOME-001_GATE9_CURRENT_IMPLEMENTATION_MANIFEST_V0.2.md` |

This is the single current Home planning-and-handoff navigation entry. It inherits the exact approved composition and consumption order from V1.1 and adds only the factual Gate 8 dispatch and receiver acknowledgement.

## Current composition

1. V1.1 approved composition and sole Gate 8 package: `pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.1.md`.
2. Gate 8 authorization, sent identity and readable receipt: `pages/home/06_handoff/HOME-001_APPLICATIONS_ALIGNED_GATE8_AUTHORIZATION_AND_DISPATCH_V1.0.md`.
3. Gate 8 must return evidence for `HOME-VU-A01..A12` under the Gate8→Gate9 machine handoff contract. Until then, no new implementation is accepted and the prior Gate 9 implementation remains rollback/current evidence.

## Stage boundary

Development is active only in the isolated D16 assignment. This Manifest does not authorize Gate 9 approval, Gate 10, merging to main, pushing, deployment, publication, DNS or indexing.

