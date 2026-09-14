# TiO2 Malaysia Google Post-launch Read-only Status 2026-09-14 V1.0

日期：2026-09-14（Asia/Shanghai）

Status ID：`TIO2-MY-GOOGLE-POSTLAUNCH-RO-20260914-01`

## 1. Source and scope

- Sanitized API observation time: `2026-09-14T03:36:19Z`
- Profile: `tio2malaysia`
- GA4 property: `properties/553880119`
- Production hostname: `tio2malaysia.com`
- Source artifact: `D:\29Github_SEO_GEO\codex-seo\.private\google-audits\tio2malaysia_20260914_01a09df9.json`
- Source SHA-256: `cce22e4be5eb2e1bbc6fe55f7a5b0f52a0013b26d799a235f47b8233c9503295`
- Scope: read-only GA4 Data/Admin and GSC API status. No Google configuration, permission or Sitemap write was performed by this task.

## 2. GA4 status

| Check | Result |
|---|---|
| Service-account property access | `PASS` |
| Realtime API availability | `AVAILABLE` |
| Realtime eventCount at observation | `0` |
| Realtime activeUsers at observation | `0` |
| Last-24-hour hostname report availability | `AVAILABLE` |
| Last-24-hour eventCount | `3` |
| Last-24-hour activeUsers | `1` |
| Observed events | `user_engagement=2`; `scroll=1` |

The Realtime zero is an observed value from an available report, not `Unavailable`. The last-24-hour hostname data provides direct evidence that the production property has received data from `tio2malaysia.com`.

## 3. GSC status

| Check | Result |
|---|---|
| Domain Property `sc-domain:tio2malaysia.com` visible | `NO` |
| URL-prefix Property `https://tio2malaysia.com/` visible | `YES` |
| Service-account permission | `siteFullUser` |
| Production Sitemap present | `YES` |
| Sitemap submitted | `YES` |
| Sitemap pending | `NO` |
| Sitemap warnings | `0` |
| Sitemap errors | `0` |
| Submitted URLs | `57` |
| Indexed URLs at observation | `0` |

The URL-prefix Property is operational and the production Sitemap must not be submitted again. `indexedUrls=0` is a fresh post-launch observation, not by itself an implementation failure. Indexing progress should be re-read after Google processes the new Sitemap.

The absent Domain Property is an optional coverage improvement for protocol/subdomain aggregation; it does not invalidate the current URL-prefix Property. Creating it requires a separate verified DNS/property action and should not duplicate the existing Sitemap workflow without a deliberate ownership decision.

## 4. Current disposition

- `GA4_DATA_COLLECTION=OBSERVED_WORKING`
- `GSC_URL_PREFIX_ACCESS=PASS`
- `GSC_SITEMAP=SUBMITTED / 57 URLS / 0 WARNINGS / 0 ERRORS`
- `GSC_INDEXING=PROCESSING / 0 INDEXED_AT_FIRST_OBSERVATION`
- `GSC_DOMAIN_PROPERTY=NOT_PRESENT / OPTIONAL_FUTURE_DECISION`

This status does not close `TIO2-MY-PROD-GA4-F01`. Actual GA4 collection and public legal disclosure remain inconsistent until the D16 correction is independently reverified and deployed.
