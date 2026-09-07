# Legal / Privacy Gate 4 Primary CTA Contrast Hold V0.1

## Control

| Field | Value |
|---|---|
| Date | 2026-09-02 |
| Review item | `LEGAL-PRIVACY-G4-CTA-CONTRAST-01` |
| Gate 3 | `USER_APPROVED / CLOSED` |
| Gate 4 | `USER_AUTHORIZED / HOLD_RESOLVED / IN_PROGRESS` |
| Gate 4 assets | Must be regenerated with approved Accessible Action Teal before submission |
| User decision | `OPTION_A / USER_APPROVED / CLOSED` — 2026-09-02 |

## Finding

The approved Visual Standard V1.0 specifies Primary CTA as `#00A99D` Malaysia Teal background with white text. The calculated contrast ratio is `2.93:1`, below the WCAG AA `4.5:1` requirement for the normal-size button labels used by this site.

This is not limited to Legal / Privacy. Any change to the shared Primary CTA rule can affect every page consuming the global visual standard. Gate 4 therefore pauses instead of creating a Legal-only silent exception.

## Decision options

| Option | Treatment | Contrast | Impact |
|---|---|---:|---|
| A — recommended | Add accessible action teal `#008078` for filled CTA backgrounds; retain `#00A99D` for icons, borders, links and larger accents; keep white CTA text | `4.82:1` | Preserves the teal-button/white-text language; requires a global visual-standard accessibility addendum |
| B | Keep `#00A99D` filled CTA and change its label to Primary Navy `#062B5B` | `4.76:1` | Keeps the existing teal token but changes the approved white-label appearance |
| C | Use Primary Navy `#062B5B` with white text for primary CTA; use `#00A99D` only as accent/focus | `13.96:1` | Strongest contrast but changes the visual hierarchy most |

## Recommendation

The user approved Option A. Accessible Action Teal `#008078` with white text is now the global filled-CTA token. Malaysia Teal `#00A99D` remains the broader brand accent.

## Boundaries

- Gate 3 remains approved and closed.
- Gate 4 may resume after direction assets and specifications consume the approved token.
- Gate 5–10, development, deployment, publication and indexing remain unauthorized.
