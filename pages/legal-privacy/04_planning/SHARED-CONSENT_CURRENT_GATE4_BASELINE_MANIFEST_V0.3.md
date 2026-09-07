# Shared Consent Current Gate 4 Baseline Manifest V0.3

> Status: `CONDITIONAL_RETURN / SUPERSEDED_BY_V0.4 / HISTORICAL`; no longer current.

## Control

| Field | Value |
|---|---|
| Manifest ID | `SHARED-CONSENT-CURRENT-G4-03` |
| Surface | Cookie Settings / Advanced Consent shared control; not a page |
| Gate 3 | `USER_APPROVED / CLOSED` |
| Gate 4 | `CONDITIONAL_RETURN / PAUSED_PENDING_USER_DECISION` |
| Gate 5–10 | `NOT_AUTHORIZED` |
| Date | 2026-09-02 |

## Current evidence

| Asset | Dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `visual-direction/gate4_v0.1/assets/LEGAL-PRIVACY_G4_RESPONSIVE_CONSENT_DIRECTION_1440_V0.1.png` | 1440×1860 | 273294 | `8FD52B3343E01273202BCD9C7C022ED529BF1DA702FAB3B6DA6B299FB96F7544` |

## Current visual contract

- Current no-Analytics state and conditional Analytics state remain mutually exclusive.
- `Accept analytics` and `Necessary only` use identical white/Navy-outline treatment and dimensions.
- `Cookie Policy` is tertiary; `Save preferences` may use Accessible Action Teal in reopened settings.
- All four Google consent signals default denied; only `analytics_storage` may be granted.
- Only a Gate 8/9 verified release state may render.

Gate 4 user approval is pending. This manifest does not authorize Gate 5, implementation or release.
