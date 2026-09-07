# Legal / Privacy Gate 7 Development Handoff Package V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `LEGAL-PRIVACY-G7-HANDOFF-01` |
| Review ID | `LEGAL-PRIVACY-G7-PCR-01` |
| Scope | Three Legal pages + shared Consent/Cookie Settings |
| Site scope | `tio2-my` |
| Gate 6 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 7 authorization | `LEGAL-PRIVACY-G7-USER-AUTH-01 = USER_AUTHORIZED` |
| Package status | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_FOR_HANDOFF` |
| Gate 8–10 | `NOT_AUTHORIZED` |
| Handoff | `HANDED_OFF=NO` |
| Date | 2026-09-02 |

This package converts the approved Gate 6 baseline into an implementation-neutral development contract. It contains no code, credentials, CMS writes, deployment or production change.

## 1. Authority and consumption order

External implementation must consume authorities in this order:

1. The four current Gate 6 manifests:
   - `LEGAL-PRIV-EN_CURRENT_GATE6_BASELINE_MANIFEST_V0.7.md`, SHA-256 `B88795558F52E2D76937D4AB8205EB44F69DB49CB9D4C7D0304B4E5C0A3043FE`;
   - `LEGAL-PRIV-MS_CURRENT_GATE6_BASELINE_MANIFEST_V0.7.md`, SHA-256 `E3E5306818E121F419B72FE6C4F614EA190813743099CD0658C8ABA9DBF43259`;
   - `LEGAL-COOKIE-EN_CURRENT_GATE6_BASELINE_MANIFEST_V0.7.md`, SHA-256 `64E1D73296FF6952C6FCA8C8D705919D6212B5A7A90A6B75EBF75EEC2B35475B`;
   - `SHARED-CONSENT_CURRENT_GATE6_BASELINE_MANIFEST_V0.7.md`, SHA-256 `6E23D53EC1756CEA9AA8098DB276899207027AE37319F5AEB0E4C1286522EACC`.
2. Current approved exact copy:
   - `LEGAL-PRIV-EN_GATE2_FULL_COPY_V0.1.md`, SHA-256 `E40263FEC51ED9FD39C56C000AA244855E1CC0BE95B67BF2052112AAC0973626`;
   - `LEGAL-PRIV-MS_GATE2_FULL_COPY_V0.1.md`, SHA-256 `9FC9332CD6F1621AD658AAD861647E36E44623583618EE5ECD4A253DF499BC68`;
   - `LEGAL-COOKIE-EN_GATE2_FULL_COPY_V0.2.md`, SHA-256 `F1C54257C5D682ED2A9DAA458A52119CEFB752CD35662F6243644F2A9E70DF46`.
3. Current Gate 5 input manifests V0.6 and their V0.2 Legal page/Mobile Menu assets plus unchanged V0.1 Consent state proofs.
4. `LEGAL_PRIVACY_ADVANCED_CONSENT_AND_CODE_REUSE_DECISION_V1.0.md`, Gate 1 data-flow evidence, No-Terms override, Footer Legal Utility Addendum and Website Legal/Privacy Framework.
5. The Gate 7 contracts in this package.

The Buyer-visible boundary is the exact section labelled `Buyer-visible copy` or `Salinan yang boleh dilihat pembaca` in each approved copy source. Internal control, SEO contract, release-control and governance sections in those files must not render.

The V0.2 targeted Chrome correction is authoritative over the older Gate 5 specification wherever they conflict: the Mobile Menu contains no extra Legal/Privacy utility block and contains exactly the frozen eight primary destinations.

## 2. Delivery identities

| Identity | Type | Route/trigger | Locale | Header current key |
|---|---|---|---|---|
| `LEGAL-PRIV-EN` | indexable Legal page | `/privacy-policy/` | `en` | none |
| `LEGAL-PRIV-MS` | indexable Legal page | `/ms/privacy-policy/` | `ms-MY` | none |
| `LEGAL-COOKIE-EN` | indexable Legal page | `/cookie-policy/` | `en` | none |
| `SHARED-CONSENT-TIO2-MY` | non-page shared control | Footer `Cookie Settings` and conditional first-layer UI | locale-aware UI | not applicable |

Every local content, route, query, cache, menu, form and consent lookup is constrained to exact `site_scope=tio2-my`. Missing same-scope data fails closed; there is no cross-scope fallback.

## 3. Page assembly

### 3.1 Privacy Policy EN and BM

1. Shared Header with no Legal current-navigation state.
2. Breadcrumb and Hero.
3. Desktop two-column reading layout: left TOC and right body.
4. All ten ordered body sections from the exact approved source.
5. Page actions and language counterpart links.
6. Shared Footer.

The desktop TOC remains in normal document flow, is not sticky or fixed, and scrolls away with the page. Tablet and Mobile use the approved compact in-page summary without deleting any body section.

### 3.2 Cookie Policy EN

1. Shared Header with no Legal current-navigation state.
2. Breadcrumb and Hero.
3. Seven ordered sections from the release-state-selected exact source.
4. Current Cookie/storage inventory.
5. Page actions to Cookie Settings and Privacy Policy.
6. Shared Footer.

The production renderer selects exactly one release state:

- `no_optional_analytics`; or
- `verified_google_analytics_active`.

These variants must never render together. The current approved state is `no_optional_analytics` until Gate 8/9 evidence proves the Google measurement stack and the conditional replacement is separately activated.

### 3.3 Shared Consent/Cookie Settings

- In `no_optional_analytics`, show no first-visit Analytics request. Footer Cookie Settings opens the exact minimal status layer.
- In `verified_google_analytics_active`, show the approved `Analytics preferences` layer and allow `Accept analytics` or `Necessary only` with equal prominence.
- Reopening Settings preserves the existing choice unless Save/Accept/Necessary-only is activated.
- Before Google measurement or GTM commands, all four approved Google consent states default to denied.

## 4. Approved visual evidence

| Surface | Current asset | Dimensions | SHA-256 |
|---|---|---:|---|
| Privacy EN Desktop | `04_planning/visual-designs/gate5_v0.2/assets/LEGAL-PRIV-EN_G5_DESKTOP_1440_BUYER_CLEAN_V0.2.png` | 1440×7335 | `03B434BB35FC9E21090696CFF95182A3A72D716F3365C951D30A3CCADE908E69` |
| Privacy EN Tablet | `04_planning/visual-designs/gate5_v0.2/assets/LEGAL-PRIV-EN_G5_TABLET_768_BUYER_CLEAN_V0.2.png` | 768×7886 | `4D260D127CBEA984A9E0CD5E7F1D4C4B46FDD358A2A190BE2AD66A38F1751682` |
| Privacy EN Mobile | `04_planning/visual-designs/gate5_v0.2/assets/LEGAL-PRIV-EN_G5_MOBILE_390_LOGICAL_AT2X_BUYER_CLEAN_V0.2.png` | 780×21968 = 390 logical @2x | `F155A43FE60AF3618007A42256726924510DBD8BFC386F834642CDBDC0F635D8` |
| Privacy BM Desktop | `04_planning/visual-designs/gate5_v0.2/assets/LEGAL-PRIV-MS_G5_DESKTOP_1440_BUYER_CLEAN_V0.2.png` | 1440×7684 | `6343C6193C1F7B2E9643FB984FF543CE986BA275382E13721E9BBB12164E0920` |
| Privacy BM Tablet | `04_planning/visual-designs/gate5_v0.2/assets/LEGAL-PRIV-MS_G5_TABLET_768_BUYER_CLEAN_V0.2.png` | 768×8234 | `0FA695193ADC14471A93DA4C7CC7F4818EC1CAF9AE0A0B176E0D328C37631D93` |
| Privacy BM Mobile | `04_planning/visual-designs/gate5_v0.2/assets/LEGAL-PRIV-MS_G5_MOBILE_390_LOGICAL_AT2X_BUYER_CLEAN_V0.2.png` | 780×23910 = 390 logical @2x | `63945EFA3DF37ECC07F763ABC469B7D6979FA1645D00E4A5E24395341F9B86FE` |
| Cookie EN Desktop | `04_planning/visual-designs/gate5_v0.2/assets/LEGAL-COOKIE-EN_G5_DESKTOP_1440_BUYER_CLEAN_V0.2.png` | 1440×4022 | `3FC1AE7E9CC5D1E73A9BAEEB96AEC83473CC5C13855C0488A92E9010A749D69B` |
| Cookie EN Tablet | `04_planning/visual-designs/gate5_v0.2/assets/LEGAL-COOKIE-EN_G5_TABLET_768_BUYER_CLEAN_V0.2.png` | 768×4489 | `062DA094D23605ED40A5C8C4254F01E5C30F8D55D027AD378BA043F54C10B6BC` |
| Cookie EN Mobile | `04_planning/visual-designs/gate5_v0.2/assets/LEGAL-COOKIE-EN_G5_MOBILE_390_LOGICAL_AT2X_BUYER_CLEAN_V0.2.png` | 780×11858 = 390 logical @2x | `158EF9F7883A427A73A1DEEAEDB347A877AEFCD7189B7AE55BA0E8091764F428` |
| Mobile Menu Open | `04_planning/visual-designs/gate5_v0.2/assets/SHARED-GLOBAL-CHROME_G5_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V0.2.png` | 780×1800 = 390 logical @2x | `7E80645F5D63A9AFF13E8AAE32491BCB363B45717A88DB85A8917AA39D4BEC27` |
| Consent Desktop | `04_planning/visual-designs/gate5_v0.1/assets/SHARED-CONSENT_G5_STATE_PROOF_1440_V0.1.png` | 1440×1880 | `6C7054D6F8CCF7A3A7EA2B577616B0EC2BC0E021D0455DCE74DDAAA026BD7604` |
| Consent Mobile | `04_planning/visual-designs/gate5_v0.1/assets/SHARED-CONSENT_G5_MOBILE_STATE_PROOF_390_LOGICAL_AT2X_V0.1.png` | 780×2920 = 390 logical @2x | `87D38C654A95B6EBCD11A88EB9453480F9B62CFB43FCD2766B75D4F096083E7E` |

PNG evidence is for visual acceptance; exact editable text comes only from the approved copy contracts.

## 5. Shared ownership

- Global Chrome owner implements Header, Mobile Header, Mobile Menu, Footer, Logo, primary navigation and terminal RFQ action. Legal pages consume shared components and pass no current navigation key.
- Legal/Privacy owner supplies the three page records, legal utility destinations, public copy, route/metadata/Schema contract and release-state disclosure.
- Shared Consent owner supplies Cookie Settings, the optional first layer, persistence, consent signals and state-change events.
- RFQ and future forms supply verified actual payload/receiver facts; they consume the shared Privacy link and consent signal without owning either page or shared platform.

Footer legal utilities are exact: `Privacy Policy`, `Dasar Privasi (BM)`, `Cookie Policy`, `Cookie Settings`. Copyright is exact `© 2026 TiO2 Malaysia.`

## 6. Deliverable map

| Contract | Purpose |
|---|---|
| CMS/API/Component Mapping | Stable identities, source boundaries, fields, modules, cardinality and fail-closed behavior |
| Consent/CMP/Data Flow | Advanced Consent state machine, Web3Forms/provider inputs, persistence and privacy-safe analytics |
| SEO/GEO/Schema/Route | Metadata, Canonical, language alternates, structured data, sitemap and prohibited routes |
| Global Chrome/Responsive/A11y | Shared ownership and 1440/768/390/zoom/keyboard/screen-reader acceptance |
| Gate 8/9 Acceptance and Blockers | Implementation evidence, release controls, rollback and responsibility |
| Gate 7 Manifest | SHA-256-bound current package authority |

## 7. Gate boundary

Gate 7 approval makes this package eligible for handoff only. It does not itself create a development task or authorize Gate 8. `HANDED_OFF=NO`; Gate 8–10, development, deployment, publication, DNS and indexing remain `NOT_AUTHORIZED`.
