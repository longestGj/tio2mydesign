# HOME-001 Current Gate Baseline Manifest V1.3

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
| Gate 8 | `IMPLEMENTATION_COMPLETE / EVIDENCE_INTAKE_PASS` |
| Gate 8 assignee | D16 task `01My开发1` / thread `01a07a66-3c4a-75a2-9df4-648942742f9e` |
| D16 implementation identity | `codex/home-001-app-align-gate8` at evidence HEAD `63898249810817bbd298fba259410fc7565c320c`, clean |
| Locked build / runtime | `jWyd3UOiNCdM8j7ue6NvY` / `http://127.0.0.1:3291` |
| Gate 9 | `READY_FOR_USER_AUTHORIZATION / NOT_STARTED` |
| Gate 10 / integration / release | `LOCKED_NOT_AUTHORIZED` |
| Production rollback | `pages/home/07_qa/HOME-001_GATE9_CURRENT_IMPLEMENTATION_MANIFEST_V0.2.md` |

This is the single current Home planning, handoff and Gate 8 return navigation entry. It inherits the approved composition from V1.2 and adds only the verified D16 implementation return. It does not promote that candidate over the production rollback baseline before independent Gate 9.

## Current composition and consumption order

1. Approved planning and handoff composition: `pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.2.md`.
2. Gate 8 completion intake: `pages/home/06_handoff/HOME-001_APPLICATIONS_ALIGNED_GATE8_COMPLETION_INTAKE_V1.0.md`.
3. External machine evidence Manifest: `D:\16Wordpress_nextjs\.worktrees\_handoffs\home-001-app-align-gate8\gate8_evidence_manifest.json`, SHA-256 `36FBAECCA6AD78BD5D42A9D85FEE768EE092F8F65BFF32602C09C6E63C318916`.
4. D16 committed receipt: `docs/verification/home-001/applications-aligned-gate8/GATE8_HANDOFF_RECEIPT.md` at evidence HEAD `63898249810817bbd298fba259410fc7565c320c`.

## Open status

- Page Gate 8 implementation is complete and its evidence intake passed.
- Independent Gate 9 has not started and requires explicit user authorization.
- Five Application child routes and the sulfate-process route remain external integration 404 items; Home keeps the approved hrefs and does not create substitute pages.
- Physical screen reader, touch-device and native 200% zoom remain for Gate 9.
- The locked runtime remains held until a Gate 9 pass or return notice.

## Stage boundary

This Manifest does not authorize Gate 9 approval, Gate 10, integration to D16 `main`, push, deployment, publication, DNS or indexing.
