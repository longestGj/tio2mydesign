# MARKET-EU-BE Current Gate Baseline Manifest V0.9 — user-approval candidate

2026-09-07. Status: **`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`**. V0.6 remains the approved Gate 1–3 fallback until the user approves this exact Gate 4 freeze. V0.7 and rejected freeze V1.0 remain history; V0.8 is the repair-submission pointer.

| Field | Current value |
|---|---|
| Page / URL / language / scope | `MARKET-EU-BE` / `/markets/belgium/` / EN / `tio2-my` |
| Gate 1–3 | `APPROVED / CLOSED` under V0.6 |
| Gate 4 workset / freeze | `BE-G4-COMPLETE-20260907-02` / `BE-G4-FREEZE-20260907-02` |
| 4A / 4B | `VISUAL_DIRECTION_CHECKED` / `COMPLETE_VISUAL_FROZEN` |
| Independent final re-review | `BE-G4-IR-20260907-02 = PASS`; `BE-G4-IR-01 = CLOSED_IN_BE-G4-FREEZE-20260907-02`; Required Finding 0 |
| Project control | `BE-G4-PC-20260907-02 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| User Gate 4 approval | `PENDING`; Gate 4 is not `APPROVED / CLOSED` |
| Gate 6–10 / development / release | `NOT_AUTHORIZED` |

## Exact pending combination

- [Complete visual V1.1](04_planning/gate4-v1.1/MARKET-EU-BE_GATE4_COMPLETE_VISUAL_V1.1.html): 21,728 bytes; SHA-256 `9e58374966ad2f13de0074ecfbf24f4c69644e55d340c070d7aa9b82debc9aa3`.
- [Freeze V1.1](04_planning/gate4-v1.1/MARKET-EU-BE_GATE4_FREEZE_RECORD_V1.1.json): 4,287 bytes; SHA-256 `43410a43435de2e41b0d32372bb5db18c19e12592bb1505a50af35a70c84a23b`.
- [Evidence index V1.1](04_planning/gate4-v1.1/MARKET-EU-BE_GATE4_EVIDENCE_INDEX_V1.1.json): 30,141 bytes; SHA-256 `24a8b43f5663707d91c13c9d0fb614012d43e39d785f1e851ece928e11a3ac54`.
- [Focused independent re-review](05_review/gate4-complete-focused-independent-v1.1/REVIEW.md): 7,736 bytes; SHA-256 `c9c00b4d83aae50e6b990af896a43edc17dd1161e0fb27c56ef3c43b6ec7da72`.
- [Project-control review](05_review/MARKET-EU-BE_GATE4_PROJECT_CONTROL_REVIEW_V1.0.md): current project-control acceptance record.

Formal visual evidence is 45 images: three full pages, 19 continuous segments, 18 focus states and five retained Menu/Cookie states. Independent review found 255 identity claims over 125 unique paths with zero identity error and 56/56 checks passing. Approved copy, URL, five-module order and shared contracts are unchanged.

The only V1.0 required Finding concerned two BE-04 inline-link focus outlines. V1.1 changes only their page-local padding and outline offset. Six of six three-viewport focus cases now have no collision, maintain at least 44 px target height and pass focus contrast. The historical failed freeze is preserved.

User approval of `BE-G4-FREEZE-20260907-02` would close merged Gate 4 only. It would not start or authorize Gate 6, development, deployment, publication, DNS or indexing.
