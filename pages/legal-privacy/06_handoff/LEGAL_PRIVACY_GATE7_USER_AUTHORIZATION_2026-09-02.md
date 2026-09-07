# Legal / Privacy Gate 7 User Authorization Record

## 0. Control

| Field | Value |
|---|---|
| Decision ID | `LEGAL-PRIVACY-G7-USER-AUTH-01` |
| Date | 2026-09-02 |
| User instruction | `授权gate7` |
| Gate 7 | `USER_AUTHORIZED` |
| Gate 8–10 | `NOT_AUTHORIZED` |
| Development handoff | `NOT_AUTHORIZED / HANDED_OFF=NO` |

## 1. Authorized scope

The authorization permits Project Control to convert the approved Gate 6 Legal / Privacy baseline into development handoff specifications under `D:\23MySec`, review those specifications, bind them by SHA-256 and set the page-family lifecycle to `APPROVED_FOR_HANDOFF` if the Gate 7 review passes.

The authorized package covers:

- `LEGAL-PRIV-EN` at `/privacy-policy/`;
- `LEGAL-PRIV-MS` at `/ms/privacy-policy/`;
- `LEGAL-COOKIE-EN` at `/cookie-policy/`;
- `SHARED-CONSENT-TIO2-MY`, including Cookie Settings, Advanced Consent behavior and shared Footer integration.

## 2. Excluded authority

This decision does not authorize:

- creating or messaging an external development task;
- reading, copying into or modifying `D:\16Wordpress_nextjs`;
- WordPress, Next.js, CMS, component, test or configuration implementation;
- use of any Web3Forms, GTM, GA4 or Google Ads credential or production identifier;
- Gate 8, Gate 9, Gate 10, deployment, DNS, publication or indexing.

Any later handoff or development execution requires separate user authorization.

