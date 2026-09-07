# SHARED-CONSENT Gate 9 Read-Only QA Evidence V0.1

## Control

| Field | Value |
|---|---|
| Identity | `SHARED-CONSENT-TIO2-MY` / non-page shared control |
| Review | `LEGAL-PRIVACY-G9-PCR-01` |
| Review date | 2026-09-04 |
| Current release state | `no_optional_analytics` |
| Result | `GATE_9_SHARED_DEPENDENCY_ACCEPTED_WITH_RELEASE_BLOCKERS` |
| Gate 10 | `NOT_AUTHORIZED / NOT_STARTED` |

## Verified behavior

- There is no first-visit banner in the current release state.
- Footer `Cookie Settings` opens one shared modal with the approved minimal title/body, `Close` and `Read Cookie Policy` only.
- The dialog has `aria-describedby`, receives initial focus, traps forward and reverse Tab, closes with Escape and restores focus to the Footer trigger.
- The current state writes no `tio2_my_consent_v1` storage record and loads no GA4, GTM, Google Ads or Vercel Analytics resource.
- Consent helpers set `analytics_storage`, `ad_storage`, `ad_user_data` and `ad_personalization` to denied by default. The separately conditional future model can grant only `analytics_storage`; all three advertising states remain denied.
- Mobile Menu remains the approved eight primary links and contains no Legal block; Cookie Settings is a Footer utility, not a registered page.
- Visual evidence `consent-settings-390.png` matches SHA-256 `B703C8771DC9037CFCA52AC68D5788D065B95E12C424E08096252E60050849AD`.

## Acceptance mapping

| Gate 9 item | Result |
|---|---|
| LP-G9-08 ordering | `PASS_CURRENT_STATE`; denied-default helper contract verified, and no Google measurement is present |
| LP-G9-09 choices | `N/A_CURRENT_RELEASE_STATE`; minimal status/settings modal verified; Accept/Necessary/withdraw controls belong only to a later Google-active state |
| LP-G9-10 denied traffic | `N/A_CURRENT_RELEASE_STATE`; there is no Google traffic to inventory |
| LP-G9-11 advertising | `PASS`; no advertising technology and no advertising state can be granted |

No implementation finding remains open. A later request to activate Google measurement requires a new approved release state and full LP-G9-07–11 revalidation; this record cannot be reused as that authorization.
