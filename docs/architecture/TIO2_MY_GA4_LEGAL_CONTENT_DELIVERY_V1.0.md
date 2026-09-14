# TiO2 Malaysia GA4 Legal Content Delivery V1.0

## 0. Control

| Field | Value |
|---|---|
| Date | 2026-09-13 |
| Site | `site_scope=tio2-my` / `https://tio2malaysia.com/` |
| Status | `GATE_6_DEVELOPMENT_DELIVERY_READY / CONDITIONAL_GA4_ACTIVATION` |
| Decision authority | `TIO2_MY_FULL_PUBLIC_SEO_GA4_GSC_LAUNCH_DECISION_AND_SPEC_V1.0.md` |
| Data-flow authority | `LEGAL_PRIVACY_GATE1_DATA_FLOW_AND_EVIDENCE_V1.1.md` |
| Pages | `LEGAL-PRIV-EN`, `LEGAL-PRIV-MS`, `LEGAL-COOKIE-EN`, shared Cookie Settings |
| Activation rule | Switch to the active copy in this document only in a release candidate that satisfies sections 2 and 6 |

This delivery is an activation overlay on the approved V0.2 Privacy and Cookie content. It does not replace unrelated policy sections, the no-Terms architecture, Web3Forms disclosures, retention, rights, routes, SEO identity or shared Footer order.

## 1. Approved technology and consent meaning

- Google Analytics 4 is the approved aggregate measurement service.
- Google Tag Manager is the approved tag-management layer.
- Advanced Consent Mode applies four `denied` defaults before measurement.
- **Accept analytics** grants only `analytics_storage`.
- **Necessary only**, rejection and withdrawal keep or return `analytics_storage` to `denied`.
- `ad_storage`, `ad_user_data` and `ad_personalization` remain `denied` in every state.
- Remarketing, audiences, Customer Match, personalised advertising, Google Ads measurement and Vercel Web Analytics are not active under this delivery.
- While Analytics storage is denied, consent-aware Google tags may send limited cookieless measurement signals. The production description must not claim that choosing Necessary only sends nothing to Google.

## 2. Atomic activation conditions

The active text in sections 3–5 must switch as one content/configuration release. Activation is prohibited unless Gate 8/9 evidence proves all of the following:

1. GA4 loads only for `site_scope=tio2-my` and the denied defaults precede every measurement command.
2. The choice and withdrawal matrix matches section 1.
3. The final Local Storage key and any migration are recorded.
4. `_ga` and the property-specific GA cookie are captured with their actual name/domain/duration and consent condition.
5. Denied, accepted and withdrawn network/storage states are captured.
6. No personal or form-submission data is sent to GA4.
7. The three legal surfaces and Cookie Settings use the same activated copy/version.

If any condition is absent, the release candidate is not legally/content-ready for GA4 activation. Do not mix old “no Analytics active” paragraphs with the active paragraphs below.

## 3. Privacy Policy EN — exact activation replacements

### 3.1 Technical and usage information

Replace the final paragraph of that subsection with:

> We use Google Analytics, delivered through Google Tag Manager, to measure aggregate website use and site performance. Analytics storage is off by default and is enabled only after you choose **Accept analytics**. When Analytics storage is denied, consent-aware Google tags may still send limited cookieless measurement signals to Google. See our Cookie Policy for the current storage and consent details.

### 3.2 Service Providers and International Processing

Insert after the Web3Forms subsection:

> ### Google Analytics and Google Tag Manager
>
> We use Google Analytics to measure aggregate website use and site performance, and Google Tag Manager to manage the measurement tag. Google may receive page and event information, consent signals and limited technical information. When Analytics storage is denied, consent-aware Google tags may send limited cookieless measurement signals. When you choose **Accept analytics**, Google Analytics may use the Analytics Cookies listed in our Cookie Policy.
>
> We do not send names, email addresses, telephone numbers, company names, free-text inquiry content or form submissions to Google Analytics. Advertising storage, advertising user data and advertising personalisation remain denied. We do not use this setup for remarketing, audience building or personalised advertising.
>
> Google may process measurement data outside Malaysia or the country where you are located. More information about the active storage items, consent conditions and how to withdraw your choice is available in our Cookie Policy and Cookie Settings.

### 3.3 Cookies and Analytics

Replace that section with:

> ## Cookies and Analytics
>
> The website uses Cookies, Local Storage and similar technologies to remember privacy choices and measure aggregate website use.
>
> We use Google Analytics through Google Tag Manager. Before you make a choice, `analytics_storage`, `ad_storage`, `ad_user_data` and `ad_personalization` are set to `denied`. If you choose **Accept analytics**, only `analytics_storage` changes to `granted`. The three advertising-related states remain `denied`.
>
> If you choose **Necessary only** or withdraw Analytics, Analytics storage remains or returns to denied. Consent-aware Google tags may still send limited cookieless measurement signals while storage is denied, but Analytics Cookies are not used in that state.
>
> Use **Cookie Settings** in the Footer to review or change your choice. See the [Cookie Policy](/cookie-policy/) for the current Cookie and Local Storage inventory.

## 4. Dasar Privasi BM — penggantian pengaktifan yang setara

### 4.1 Maklumat teknikal dan penggunaan

Gantikan perenggan terakhir subseksyen tersebut dengan:

> Kami menggunakan Google Analytics, yang disampaikan melalui Google Tag Manager, untuk mengukur penggunaan laman web secara agregat dan prestasi laman. Penyimpanan Analitik dimatikan secara lalai dan hanya diaktifkan selepas anda memilih **Accept analytics**. Apabila penyimpanan Analitik ditolak, tag Google yang mengetahui status persetujuan masih boleh menghantar isyarat pengukuran tanpa kuki yang terhad kepada Google. Rujuk Cookie Policy kami untuk butiran penyimpanan dan persetujuan semasa.

### 4.2 Penyedia Perkhidmatan dan Pemprosesan Antarabangsa

Masukkan selepas subseksyen Web3Forms:

> ### Google Analytics dan Google Tag Manager
>
> Kami menggunakan Google Analytics untuk mengukur penggunaan laman web secara agregat dan prestasi laman, serta Google Tag Manager untuk mengurus tag pengukuran. Google mungkin menerima maklumat halaman dan peristiwa, isyarat persetujuan dan maklumat teknikal yang terhad. Apabila penyimpanan Analitik ditolak, tag Google yang mengetahui status persetujuan mungkin menghantar isyarat pengukuran tanpa kuki yang terhad. Apabila anda memilih **Accept analytics**, Google Analytics mungkin menggunakan Kuki Analitik yang disenaraikan dalam Cookie Policy kami.
>
> Kami tidak menghantar nama, alamat e-mel, nombor telefon, nama syarikat, kandungan pertanyaan dalam teks bebas atau penghantaran borang kepada Google Analytics. Penyimpanan pengiklanan, data pengguna pengiklanan dan pemperibadian pengiklanan kekal ditolak. Kami tidak menggunakan tetapan ini untuk pemasaran semula, pembinaan khalayak atau pengiklanan diperibadikan.
>
> Google mungkin memproses data pengukuran di luar Malaysia atau negara tempat anda berada. Maklumat lanjut tentang item penyimpanan yang aktif, syarat persetujuan dan cara menarik balik pilihan anda tersedia dalam Cookie Policy dan Cookie Settings kami.

### 4.3 Kuki dan Analitik

Gantikan bahagian tersebut dengan:

> ## Kuki dan Analitik
>
> Laman web ini menggunakan Kuki, Local Storage dan teknologi yang serupa untuk mengingati pilihan privasi dan mengukur penggunaan laman web secara agregat.
>
> Kami menggunakan Google Analytics melalui Google Tag Manager. Sebelum anda membuat pilihan, `analytics_storage`, `ad_storage`, `ad_user_data` dan `ad_personalization` ditetapkan kepada `denied`. Jika anda memilih **Accept analytics**, hanya `analytics_storage` berubah kepada `granted`. Tiga keadaan berkaitan pengiklanan kekal `denied`.
>
> Jika anda memilih **Necessary only** atau menarik balik Analitik, penyimpanan Analitik kekal atau kembali ditolak. Tag Google yang mengetahui status persetujuan masih boleh menghantar isyarat pengukuran tanpa kuki yang terhad ketika penyimpanan ditolak, tetapi Kuki Analitik tidak digunakan dalam keadaan itu.
>
> Gunakan **Cookie Settings** di bahagian Footer untuk menyemak atau menukar pilihan anda. Rujuk [Cookie Policy](/cookie-policy/) untuk inventori Kuki dan Local Storage semasa.

The BM text above is the section-by-section legal-meaning counterpart of section 3. At release, EN and BM must carry the same effective date and reciprocal `en`, `ms-MY`, `x-default=en` hreflang.

## 5. Cookie Policy and Cookie Settings — active copy

The approved V0.2 section 2 replacement and section 3.2 Cookie Settings copy remain the base. Apply these clarifications when activating:

### 5.1 Active category statement

> Google Analytics is active for aggregate website measurement and is managed through Google Tag Manager. Analytics storage is off by default. It is enabled only after you choose **Accept analytics**. Advertising storage, advertising user data and advertising personalisation remain denied in every state.

### 5.2 Current Cookie and Storage Inventory

Publish a real semantic table with the following columns:

| Name | Provider | Type | Purpose | Duration | Category | Consent condition |
|---|---|---|---|---|---|---|
| `[FINAL_CONSENT_STORAGE_KEY]` | TiO2 Malaysia | Local Storage | Remembers the Analytics choice, consent version and decision time for this site | `[GATE_8_9_OBSERVED_OR_CONFIGURED_DURATION]` | Necessary | Used to remember the visitor's choice |
| `_ga` | Google Analytics | Cookie | Distinguishes browsers for aggregate website measurement | `[GATE_8_9_VERIFIED_DURATION]` | Analytics | Set only when `analytics_storage=granted` |
| `[PROPERTY_SPECIFIC_GA_COOKIE_NAME]` | Google Analytics | Cookie | Maintains measurement state for the TiO2 Malaysia GA4 property | `[GATE_8_9_VERIFIED_DURATION]` | Analytics | Set only when `analytics_storage=granted` |

Bracketed fields are internal delivery placeholders and must never render. Gate 8 supplies configuration values; Gate 9 supplies production-equivalent observation. Additional observed storage or cookies must be added before release, not silently omitted.

### 5.3 Advanced Consent Mode wording

> TiO2 Malaysia uses Google Advanced Consent Mode. Before you make a choice, `analytics_storage`, `ad_storage`, `ad_user_data` and `ad_personalization` are set to `denied`.
>
> When storage is denied, consent-aware Google tags may send limited cookieless measurement signals to Google. Analytics Cookies are not used while `analytics_storage` remains denied. If you choose **Accept analytics**, only `analytics_storage` changes to `granted`; the three advertising-related states remain `denied`.
>
> You can choose **Necessary only**, accept Analytics or withdraw Analytics at any time through **Cookie Settings** in the Footer.

### 5.4 Cookie Settings exact first-layer copy

**Title:** Analytics preferences

**Body:** Optional Analytics helps us understand aggregate website use and performance. If you choose Necessary only, Analytics storage remains off, but limited cookieless measurement signals may still be sent to Google.

**Actions:** Accept analytics · Necessary only · Cookie Policy

Detailed setting:

- **Necessary — Always active.** Supports site operation and remembers this site's privacy choice.
- **Analytics — Off by default.** Allows Google Analytics storage for aggregate measurement after you accept it. Advertising storage, advertising user data and advertising personalisation remain off.

When reopening an existing choice, show: **Save preferences · Accept analytics · Necessary only · Close**. Closing without saving preserves the existing choice. Withdrawal applies `analytics_storage=denied` immediately and returns focus to the control that opened Cookie Settings.

## 6. Gate 8/9 delivery fields and evidence

| Field | Gate 8 supplies | Gate 9 verifies | Current value |
|---|---|---|---|
| GTM Container ID binding | `NEXT_PUBLIC_TIO2_MY_GTM_CONTAINER_ID` limited to `tio2-my`; GTM is the only GA4 delivery path | Container identity, source/network ordering, no direct-gtag bypass and cross-scope absence | `OPEN_RUNTIME_FIELD` |
| GA4 Measurement ID binding | Environment binding limited to `tio2-my` | Network destination and cross-scope absence | `OPEN_RUNTIME_FIELD` |
| Final consent Local Storage key | Canonical key and legacy migration | Exact stored key/value/version and migration | `OPEN_RUNTIME_FIELD` |
| `_ga` inventory | Configured cookie setting | Actual name/domain/duration/consent condition | `OPEN_RUNTIME_EVIDENCE` |
| Property-specific GA cookie | Exact derived name and configuration | Actual name/domain/duration/consent condition | `OPEN_RUNTIME_EVIDENCE` |
| Denied cookieless requests | Expected Advanced Mode behaviour | Actual request inventory and payload privacy | `OPEN_RUNTIME_EVIDENCE` |
| Page views | SPA measurement contract | No duplicate page views | `OPEN_RUNTIME_EVIDENCE` |
| Conversion success events | Approved enumerated parameters | Positive/negative tests and no PII | `OPEN_RUNTIME_EVIDENCE` |
| EN/BM/Cookie parity | Content version binding | Visible/source/storage/network parity | `OPEN_RUNTIME_EVIDENCE` |

## 7. SEO, GEO and structured-data continuity

| Page | Title | Canonical | Hreflang | Robots | Schema |
|---|---|---|---|---|---|
| Privacy EN | `Privacy Policy | TiO2 Malaysia` | `https://tio2malaysia.com/privacy-policy/` | `en`, `ms-MY`, `x-default=en` | `index,follow` | `WebPage` + `BreadcrumbList`; visible Organization reference; `inLanguage=en` |
| Privacy BM | `Dasar Privasi | TiO2 Malaysia` | `https://tio2malaysia.com/ms/privacy-policy/` | `ms-MY`, `en`, `x-default=en` | `index,follow` | `WebPage` + `BreadcrumbList`; `inLanguage=ms-MY` |
| Cookie EN | `Cookie Policy | TiO2 Malaysia` | `https://tio2malaysia.com/cookie-policy/` | Not applicable | `index,follow` | `WebPage` + `BreadcrumbList`; `inLanguage=en` |

Machine-readable descriptions and entities may state that Google Analytics is active only after the same activation condition is met. They must not add Advertising, remarketing, audience or personalisation processing absent from visible copy. All policy sections and semantic tables must be present in initial server HTML.

## 8. Release blockers and rollback

- Missing evidence from section 6 blocks GA4/legal activation; it does not authorise publishing the active wording alone.
- A mismatch among visible text, consent configuration, Local Storage, Cookies or network behaviour blocks release.
- Rollback must remove/disable GA4 and restore the approved no-Analytics copy and Cookie Settings state atomically. It must not leave active tags behind a no-Analytics policy.
- This delivery does not authorise D16 edits, deployment, DNS, publication, indexing or GSC actions. Those remain separate Gate 8–10 responsibilities.
