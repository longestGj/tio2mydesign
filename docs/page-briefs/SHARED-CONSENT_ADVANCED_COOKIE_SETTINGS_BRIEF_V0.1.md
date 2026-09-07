# Shared Advanced Consent / Cookie Settings Brief V0.1

## 0. Control

| Field | Value |
|---|---|
| Component identity | `SHARED-CONSENT-TIO2-MY` — not a page record |
| Version / date | V0.1 / 2026-09-02 |
| Status | `HANDED_OFF / GATE_2_CLOSED / GATE_3_CLOSED / GATE_4_CLOSED / GATE_5_CLOSED / GATE_6_CLOSED / GATE_7_CLOSED / GATE_8_IN_EXTERNAL_DEVELOPMENT` |
| Site scope | `tio2-my` only |
| Authority | Advanced Consent decision, Gate 1 data map, Footer Legal Addendum and authorised TITAN code reuse |
| Implementation | External D16 task only after Gate 7/8 authority |

## 1. Intent and ownership

| Item | Direction |
|---|---|
| Audience | Every public-site visitor when an optional analytics technology requires a choice |
| Core task | Accept Analytics or continue with Necessary only, then review/change that choice later |
| Primary message | Optional Analytics helps measure site use; Necessary only keeps optional storage denied |
| Must disclose | If Advanced Google Consent Mode is active, limited cookieless signals may still be sent while storage is denied |
| Must exclude | Preselected consent, forced acceptance, Terms acceptance, marketing subscription and claims that rejection means zero Google transmission |
| Owner | Shared Consent owner; pages and RFQ only consume the signal/control |

## 2. Gate 2 first-layer skeleton

| Element | Copy direction |
|---|---|
| Title | `Analytics preferences` |
| Body when Google measurement is active | Explain optional Analytics and, in one concise sentence, that Necessary only keeps optional storage off while limited cookieless measurement signals may still be sent under Advanced Consent Mode |
| Body when no optional Analytics is active | Do not show a misleading first-visit Analytics banner; keep Cookie information/Settings consistent with the actual minimal state |
| Primary action | `Accept analytics` |
| Equal alternative | `Necessary only` |
| Detail action | `Manage preferences` only if more than one real optional category exists; otherwise avoid an empty settings layer |
| Policy link | `Cookie Policy` → `/cookie-policy/` |

## 3. Detailed settings skeleton

| Category | Status/control | Description direction |
|---|---|---|
| Necessary | Always active / no toggle | Required for site operation, security and remembering the consent choice; list only verified items |
| Analytics | Off by default / toggle when active | Aggregate site-use measurement; identify the actual provider in the linked Cookie Policy |
| Advertising | Hidden until actual Google Ads measurement is enabled | Measurement only; must not enable personalisation, remarketing or audiences |
| Personalisation | No user grant under current decision | `ad_personalization` remains denied |

Actions when a detailed layer is needed: `Save preferences`, `Accept analytics`, `Necessary only`, `Close` without silently changing the prior choice.

## 4. State and signal contract

| State | `analytics_storage` | `ad_storage` | `ad_user_data` | `ad_personalization` |
|---|---|---|---|---|
| Before choice | denied | denied | denied | denied |
| Necessary only | denied | denied | denied | denied |
| Accept analytics | granted | denied | denied | denied |
| Withdrawal | denied immediately | denied | denied | denied |

The Google defaults must run before GTM/measurement commands. Consent-aware tags may load under Advanced Mode only after the final implementation and disclosure are verified. Non-consent-aware optional tags remain blocked until permission.

## 5. Persistence and audit contract

- Replace TITAN names, key and events with a `tio2-my`-specific namespace.
- Store only what is necessary to apply the choice, including consent version and state; exact lifetime is a Gate 7/8 implementation decision reflected in Cookie Policy.
- Maintain an appropriate record of displayed text/version, choice and affirmative decision time where required; do not expose this record publicly.
- Clearing browser storage may reset the local choice and cause the interface to reappear.
- Footer `Cookie Settings` always reopens the interface after it exists.
- Cross-site or other `site_scope` consent must not be read as fallback.

## 6. Accessibility and responsive contract

- Use a labelled region/dialog appropriate to the final interaction model.
- Initial focus, keyboard order, Escape/close behaviour and focus return are defined and tested.
- Accept and Necessary-only controls have comparable visibility, size and effort.
- Minimum touch target 44px; no horizontal overflow at 390px.
- Content remains understandable at 200% zoom and with screen-reader navigation.
- Reduced-motion preferences are respected.

## 7. Conditional and failure behaviour

| Condition | Behaviour |
|---|---|
| Local Storage blocked | Apply choice for current page/session where possible; do not claim persistence |
| Consent runtime error | Optional non-essential tags remain denied/blocked; site content and RFQ remain usable where possible |
| Policy route unavailable | Release blocked; do not substitute `/legal/privacy-policy/` or another site scope |
| GA/GTM/Ads identifiers absent | No Google measurement is treated as active |
| Category has no active technology | Hide it rather than present a false active category |

## 8. Gate record

| Gate | Status |
|---|---|
| Gate 1 evidence/direction | `APPROVED / CLOSED` with Legal/Privacy Gate 1 |
| Gate 2 skeleton | `USER_APPROVED / CLOSED` — user approval 2026-09-02 |
| Full UI copy | `USER_APPROVED / CLOSED` with separate mutually exclusive no-Analytics and Analytics-active release variants |
| Gate 3 state wireframes | `USER_APPROVED / CLOSED` — state board and Mobile Menu validated; no Consent semantic change |
| Gate 4 | `USER_APPROVED / CLOSED` — equal prominence and accessible functional teal decisions closed |
| Gate 5 | `USER_APPROVED / CLOSED` — Desktop and Mobile state proofs validated |
| Gate 6 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` — shared Mobile Menu corrected; Consent state proofs unchanged |
| Gate 7 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` — `LEGAL-PRIVACY-G7-PCR-01`; approved authority unchanged |
| Gate 8 | `AUTHORIZED / EXTERNAL_DEVELOPMENT_IN_PROGRESS` — `LEGAL-PRIVACY-G8-HANDOFF-01`; lifecycle `HANDED_OFF`; `HANDED_OFF=YES`; destination `01My首页开发` / `01a05595-2a2c-7ef0-9be4-f55a42043bb6` |
| Gate 9–10 | `NOT_AUTHORIZED` |
