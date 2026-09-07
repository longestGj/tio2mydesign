# Shared Consent Current Gate 3 Baseline Manifest V0.2

> Status: `APPROVED_GATE3_TRACE / SUPERSEDED_AS_CURRENT_STAGE_POINTER_BY_GATE4_V0.3`.

## Control

| Field | Value |
|---|---|
| Manifest ID | `SHARED-CONSENT-CURRENT-G3-02` |
| Surface | Cookie Settings / Advanced Consent shared control; not an independent page |
| Consuming pages | All 57 site pages through Footer; detailed policy at `/cookie-policy/` |
| Gate 2 | `USER_APPROVED / CLOSED` |
| Gate 3 | `USER_APPROVED / CLOSED` |
| Gate 4 | `USER_AUTHORIZED / PAUSED_PENDING_USER_DECISION` |
| Gate 5–10 | `NOT_AUTHORIZED` |
| Date | 2026-09-02 |

## Current Gate 3 evidence

| Asset | Logical viewport | Physical dimensions | Bytes | SHA-256 | Classification |
|---|---:|---:|---:|---|---|
| `wireframes/gate3_v0.1/assets/SHARED-CONSENT_G3_STATE_BOARD_1440_V0.1.png` | 1440px | 1440×1900 | 190275 | `F30F40E11D1BF010EE3637E156A90C17512B2DE82C8B3BEE7C27066219FA9D29` | Internal structural/state proof; buyer-visible UI copy inside panels |
| `wireframes/gate3_v0.1/assets/SHARED-GLOBAL-CHROME_G3_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V0.2.png` | 390px | 780×1800 (2×) | 47151 | `8A3D128B242C017E7FEE4DE38368E5748CAA829DE6036C388F84CD4F6AB298AB` | Current Mobile Menu open proof |

`SHARED-GLOBAL-CHROME_G3_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V0.1.*` is historical and excluded from current authority.

## State contract

- Current verified release: no optional Analytics active; no first-visit consent request.
- Conditional future release: Advanced Consent defaults all four states to denied; accepting Analytics grants only `analytics_storage`.
- `ad_storage`, `ad_user_data` and `ad_personalization` remain denied in every approved state.
- Cookie Settings must reopen from the Footer and support withdrawal, focus return and runtime/storage failure handling.

## Shared authority

- `docs/page-briefs/SHARED-CONSENT_ADVANCED_COOKIE_SETTINGS_BRIEF_V0.1.md`.
- `LEGAL_PRIVACY_GATE3_RESPONSIVE_WIREFRAME_SPEC_V0.2.md`.
- Global Header/Footer V0.5 SHA-256 `CC236F47018A68771856FDBAF5553517F63959774E0E8819130E66E2B1049F18`.

## Open boundaries

The state board itself is not a public route or a Buyer Clean page. Only the release state proven by Gate 8/9 may render. Gate 3 was approved and Gate 4 authorised on 2026-09-02; Gate 5+, implementation and release are unauthorized.




## V0.2 package alignment

Consent and Mobile Menu behaviour are unchanged. This manifest aligns shared evidence with the current V0.2 Gate 3 package; rendered assets and hashes are unchanged. V0.1 is historical.
