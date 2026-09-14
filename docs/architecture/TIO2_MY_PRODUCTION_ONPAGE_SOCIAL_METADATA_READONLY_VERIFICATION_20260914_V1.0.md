# TiO2 Malaysia Production On-page and Social Metadata Read-only Verification 2026-09-14 V1.0

日期：2026-09-14（Asia/Shanghai）

Verification ID：`TIO2-MY-PROD-ONPAGE-SOCIAL-ROV-20260914-01`

## 1. Identity and scope

- Production origin: `https://tio2malaysia.com/`
- Observed release header: `X-Tio2-Release: d5a061f60c7521a58b59292e337fe2788394cae9`
- Inventory authority: `TIO2_MY_59_OBJECT_PUBLICATION_TARGET_MATRIX_V1.0.csv`
- Scope: read-only HTML review of the 57 standard indexable pages, covering language declarations, title/meta-description hygiene, social text metadata, image ALT presence and approved hreflang pairs.
- Excluded: D16 changes, production writes, social-image creation, form submissions, GSC changes and GA4 console changes.

## 2. Results

| Check | Result |
|---|---|
| Pages reviewed | `57 / 57` |
| Valid page language declaration | `57 / 57` |
| `og:title` present | `57 / 57` |
| `og:description` present | `57 / 57` |
| `twitter:card` present | `57 / 57` |
| `og:image` present | `0 / 57` |
| Image elements missing the `alt` attribute | `0` |
| Empty ALT values observed | `1`; retained as a decorative-image state, not a missing attribute |
| Meta descriptions outside the 90–180 character review band | `0` |
| Approved EN/PT-BR hreflang pair | `PASS`; reciprocal `en`, `pt-BR`, `x-default` |
| Approved Privacy EN/BM hreflang pair | `PASS`; reciprocal `en`, `ms-MY`, `x-default` |

The absence of `og:image` on all 57 pages is not a current production defect. The approved contracts allow or require intentional omission when no exact rights-cleared page or shared `tio2-my` social asset has been selected. Representative current authorities include:

- `APP-000_GATE2_CONTENT_CONTRACT_V1.0.md`: no social image is required; an approved shared asset may be bound only through its owner.
- `ABOUT-001_GATE6_SEO_GEO_SCHEMA_CONTRACT_V0.3.md` and `ABOUT-001_GATE7_MEDIA_ASSET_HANDOFF_V0.1.md`: image output remains conditional/optional and must be omitted without an exact eligible asset record.
- `DOC-REACH_GATE7_SEO_GEO_SCHEMA_SOCIAL_CONTRACT_V0.1.md`: use an approved shared asset only if that authority exists; otherwise omit image tags.
- `GLOBAL_HEADER_FOOTER_LOGO_ASSET_ADDENDUM_V1.0.md`: the approved production SVG logo binding applies to Chrome and favicon contexts and does not independently authorize an SEO/social-image use.

Accordingly, no `og:image` repair is returned to D16. A future shared social card would be a separate D23 brand/asset decision requiring an exact asset key, rights/usage scope, neutral semantics and responsive/social validation before implementation.

## 3. Title-length review

The production corpus has no missing or duplicate Title. A neutral length heuristic identified four editorial review candidates only:

| Page ID | Observed character count | Disposition |
|---|---:|---|
| `APP-000` | `28` | `NO_DEFECT`; exact approved navigation-hub title |
| `LEGAL-PRIV-MS` | `29` | `NO_DEFECT`; legal/language identity is clear |
| `LEGAL-COOKIE-EN` | `29` | `NO_DEFECT`; legal-page intent is clear |
| `DOC-REACH` | `67` | `NO_DEFECT`; exact approved high-specificity title |

Character-count heuristics are not acceptance rules. None of these titles is missing, duplicated, misleading or outside its approved page contract, so no mechanical rewrite is authorized.

## 4. Disposition

`PRODUCTION_ONPAGE_SOCIAL_METADATA=PASS_WITH_INTENTIONAL_SOCIAL_IMAGE_OMISSION_FOR_RELEASE_d5a061f60c7521a58b59292e337fe2788394cae9`

This release-specific result does not close `TIO2-MY-PROD-GA4-F01`. The legal/runtime parity correction remains owned by `01My开发1`, followed by independent read-only verification from `09Gate9验收`; deployment receives only an accepted delivery.
