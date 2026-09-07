# Legal / Privacy Gate 4 Light-Surface Teal Contrast Hold V0.1

## Control

| Field | Value |
|---|---|
| Date | 2026-09-02 |
| Review item | `LEGAL-PRIVACY-G4-LIGHT-TEAL-CONTRAST-01` |
| Gate 3 | `USER_APPROVED / CLOSED` |
| Gate 4 | `USER_AUTHORIZED / HOLD_RESOLVED / IN_PROGRESS` |
| Previous decisions | Filled CTA Option A and Consent equal-prominence Option A remain approved |
| Direction assets | Must be regenerated with Accessible Functional Teal before resubmission |
| User decision | `OPTION_A / USER_APPROVED / CLOSED` — 2026-09-02 |

## Finding

Malaysia Teal `#00A99D` against white has a contrast ratio of `2.93:1`:

- below `4.5:1` for normal-size link text;
- slightly below `3:1` for focus indicators and UI component boundaries.

The earlier CTA Option A explicitly retained `#00A99D` for links, borders and focus. That retained scope must be corrected through a user-approved accessibility boundary rather than silently changed.

## Decision options

| Option | Functional elements on white/light surfaces | `#00A99D` retained use | Impact |
|---|---|---|---|
| A — recommended | Use Accessible Action Teal `#008078` for normal link text, focus rings, interactive borders and filled CTAs | Decorative/large graphical accents and use on Deep Navy, where contrast is `5.86:1` | One accessible functional-teal token; clearest rule |
| B | Use Primary Navy `#062B5B` for link text; `#008078` for focus rings, borders and filled CTAs | Decorative accents and use on Deep Navy | Strongest text contrast but links lose teal identity |
| C | Replace Malaysia Teal globally with a darker teal token | Retire `#00A99D` from active palette | Largest brand change; unnecessary for current need |

## Recommendation

The user approved Option A. `#008078` is the functional teal for links, focus indicators, interactive borders and filled CTAs on white/light surfaces. `#00A99D` remains the bright decorative accent and may be used on Deep Navy where its contrast is verified.

## Boundaries

Gate 4 may resume after the assets, specification and validation are corrected. Gate 5–10 and implementation remain unauthorized.
