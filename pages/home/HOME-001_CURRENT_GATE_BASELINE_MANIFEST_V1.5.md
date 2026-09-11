# HOME-001 Current Gate Baseline Manifest V1.5

## Current authority

| Field | Value |
|---|---|
| Date | `2026-09-11` |
| Page / route | `HOME-001` / `/` |
| Primary keyword | `malaysia titanium dioxide` |
| Gate 8 reviewed candidate | implementation `cc55245e83bff0e7c4a63638f65d678dbc3989c3`; evidence `63898249810817bbd298fba259410fc7565c320c`; Build `jWyd3UOiNCdM8j7ue6NvY` |
| Gate 9 | `TARGETED_RETURN_IN_PROGRESS / RECHECK_PENDING` |
| Mobile Menu backdrop | `ACCEPTED_AS_IS_BY_USER / CLOSED / NO_CHANGE_REQUIRED` |
| Remaining Home change | `HOME-001-G9-USER-CHANGE-01` — remove Hero left green ornament |
| Integration | `NOT_READY` — five Application child routes plus sulfate-process route return `404` |
| Gate 10 / release | `LOCKED / NOT_AUTHORIZED` |
| Production rollback | `pages/home/07_qa/HOME-001_GATE9_CURRENT_IMPLEMENTATION_MANIFEST_V0.2.md` |

This is the single current Home navigation entry. It inherits the accepted Gate 8 identity from V1.3 and the initial Gate 9 evidence from V1.4. The user's later explicit decision closes the shared Mobile Menu backdrop finding without a code change. Only the Home Hero ornament removal remains in the current targeted return.

## Consumption order

1. `pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.4.md` — initial Gate 9 review and evidence.
2. `pages/home/07_qa/HOME-001_GATE9_MOBILE_MENU_BACKDROP_USER_DECISION_V1.0.md` — later user disposition; it supersedes the required-change status of `ROOT-GLOBAL-CHROME-G9-F01`.
3. `HOME-001-G9-USER-CHANGE-01` — current open Home change and recheck target.

## Stop point

- D16 task `01My开发1` has been notified not to modify Shared Global Chrome.
- D16 may remove only the Home Hero left ornament and return a new exact candidate identity and evidence.
- Gate 9 will recheck that narrow Home change before any pass decision.
- Gate 10, merge, push, deployment, publication, DNS and indexing remain unauthorized.

