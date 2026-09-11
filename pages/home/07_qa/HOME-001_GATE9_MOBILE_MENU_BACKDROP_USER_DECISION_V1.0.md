# HOME-001 Gate 9 Mobile Menu Backdrop User Decision V1.0

## Decision

| Field | Value |
|---|---|
| Date | `2026-09-11` |
| Decision source | User explicit instruction: `不修改` |
| Object | Shared Malaysia Mobile Menu `dialog::backdrop` |
| Decision ID | `ROOT-GLOBAL-CHROME-G9-F01-USER-DISPOSITION-01` |
| Status | `ACCEPTED_AS_IS_BY_USER / CLOSED / NO_CHANGE_REQUIRED` |

The user reviewed the concrete issue: the Mobile Menu is functionally modal, but its backdrop remains transparent rather than dimming the visible page. The user explicitly decided not to modify it.

## Scope

- Preserve the current transparent Mobile Menu backdrop.
- Do not change `components/sites/tio2-my/malaysia-global-chrome.module.css` for this issue.
- Do not create a Home-private backdrop or overlay.
- Existing keyboard focus containment, `aria-modal`, Escape focus return, body scroll lock, navigation order, fixed RFQ, production SVG and legal utilities remain required.
- This decision closes only the backdrop appearance finding. It does not approve Gate 10, integration, deployment, publication, DNS or indexing.

## Remaining Home return item

`HOME-001-G9-USER-CHANGE-01` remains open: remove only the green vertical ornament on the left side of the Home Hero and preserve the rest of the Hero and page.

