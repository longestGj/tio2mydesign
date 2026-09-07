# Legal / Privacy Gate 4 Consent Equal-Prominence Hold V0.1

## Control

| Field | Value |
|---|---|
| Date | 2026-09-02 |
| Review item | `LEGAL-PRIVACY-G4-CONSENT-PROMINENCE-01` |
| Upstream CTA decision | Option A approved; Accessible Action Teal `#008078` active |
| Gate 3 | `USER_APPROVED / CLOSED` |
| Gate 4 | `USER_AUTHORIZED / HOLD_RESOLVED / IN_PROGRESS` |
| Draft assets | Must be regenerated with equal-prominence Consent actions before submission |
| User decision | `OPTION_A / USER_APPROVED / CLOSED` — 2026-09-02 |

## Finding

The draft Analytics-active first layer uses a filled Action Teal treatment for `Accept analytics` and a Navy outline treatment for `Necessary only`. Although target size and effort are comparable, the filled action has materially greater visual prominence.

The approved consent contract prohibits dark patterns and unequal rejection treatment. Gate 4 pauses rather than silently accepting a consent-bias risk.

## Decision options

| Option | `Accept analytics` | `Necessary only` | Direction |
|---|---|---|---|
| A — recommended | White + Navy outline | White + Navy outline | Identical size, weight and visual prominence; Cookie Policy remains a lower-priority text/outline link |
| B | Accessible Action Teal + white | Accessible Action Teal + white | Identical prominence, but creates two competing filled primary actions |
| C | Neutral selectable rows; separate `Save preferences` Action Teal button | Neutral selectable rows; separate `Save preferences` Action Teal button | Strong for detailed settings but adds an extra first-layer step |

## Recommendation

The user approved Option A. `Accept analytics` and `Necessary only` use identical white surfaces, Navy outlines, dimensions and label weight. `Cookie Policy` is a tertiary link. Accessible Action Teal is reserved for genuine site CTAs and `Save preferences` in reopened detailed settings.

## Boundaries

- No change to Advanced Consent signals: only `analytics_storage` may become granted.
- No change to current no-Analytics release state.
- Gate 4 may resume after direction assets and specifications consume the approved equal-prominence treatment; Gate 5–10 and implementation remain unauthorized.
