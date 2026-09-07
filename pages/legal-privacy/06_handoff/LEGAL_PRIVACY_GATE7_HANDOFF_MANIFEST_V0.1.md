# Legal / Privacy Gate 7 Handoff Manifest V0.1

## 0. Control

| Field | Value |
|---|---|
| Manifest ID | `LEGAL-PRIVACY-G7-MANIFEST-01` |
| Package | `LEGAL-PRIVACY-G7-HANDOFF-01` |
| Review | `LEGAL-PRIVACY-G7-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 7 outcome | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_FOR_HANDOFF` |
| Lifecycle | `APPROVED_FOR_HANDOFF` |
| Handoff | `HANDED_OFF=NO` |
| Gate 8–10 | `NOT_AUTHORIZED` |
| Date | 2026-09-02 |

This is the only current package-level Gate 7 Manifest for the three Legal pages and shared Consent surface. It records an approved-for-handoff specification, not an executed handoff or implementation authorization.

## 1. Current Gate 7 authority set

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_USER_AUTHORIZATION_2026-09-02.md` | 1413 | `209F4C3691728274C79C351B66145A99BD96B6380FB1B2C66CE242983716721B` | Gate 7 authorization and Gate 8–10 lock |
| `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_BM_META_HOLD_V0.1.md` | 1746 | `3A4E409CBD83FBCA3223B19064B77A82B2BB0325D0A7391E2E22C56FED6EAFED` | BM Meta Option A decision and closed hold |
| `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_HANDOFF_PACKAGE_V0.1.md` | 9680 | `69F63E17BACB7E6051E6723AC736068799BEE138BCDCEA4149980CD24166E740` | package root and authority order |
| `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_CMS_API_COMPONENT_MAPPING_V0.1.md` | 8991 | `A616A3FE4F523B30319BC9301559E030B05676A8930A8AFC11D81235AB94A1F5` | content, CMS/API and component contract |
| `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_CONSENT_CMP_DATA_FLOW_CONTRACT_V0.1.md` | 10554 | `FED667015CB003D544B7EF42A3E34EF108C2FDCC69E24BE732BCDB4949EFE2DF` | CMP, Advanced Consent, Web3Forms and data-flow contract |
| `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_SEO_GEO_SCHEMA_ROUTE_CONTRACT_V0.1.md` | 5289 | `D49165673226AF96F172046ABFA904C76FA116A783D1FF8FB477E096BAEBFC46` | metadata, route, hreflang and Schema contract |
| `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_GLOBAL_CHROME_RESPONSIVE_A11Y_CONTRACT_V0.1.md` | 6225 | `787D5F1A0549234163EF3968DF21A0E702EEEBED05C02DF350BCFACF2491F5D4` | shared Chrome, viewport and accessibility contract |
| `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_GATE8_GATE9_ACCEPTANCE_AND_BLOCKERS_V0.1.md` | 8002 | `9B7A5DF9F10EF0652C2EB3BE8BCB053B056E5B17FA1A8699C18CDB662A78A353` | implementation/QA evidence, blockers and rollback |
| `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md` | 4361 | `432EE225D0C0656171CA3E7EBDC5EA38542DE0B901A3A9421304DA1BA5A9D372` | project-control review and result |
| `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_FRESH_VALIDATION_V0.1.md` | 3399 | `89C3114898C1EABDF801A532CFE9C8FE3329676365B9758F5C77081EDF432816` | fresh validation and negative controls |
| `pages/legal-privacy/05_review/LEGAL_PRIVACY_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md` | 879 | `F04E1AA729513C3493E74F7E59483B15CFD2CF622CD4CC2C20CDD5E78220DB44` | Gate 7 closure and lifecycle boundary |

## 2. Current per-identity pointers

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `pages/legal-privacy/06_handoff/LEGAL-PRIV-EN_CURRENT_GATE7_BASELINE_MANIFEST_V0.8.md` | 741 | `D5CBAEE704FD1E4F146CD0B3DA4C5F9FB3C720010339025AA67A2F4970B70232` | current Privacy EN pointer |
| `pages/legal-privacy/06_handoff/LEGAL-PRIV-MS_CURRENT_GATE7_BASELINE_MANIFEST_V0.8.md` | 816 | `214AF0C9A6DBA3985FAB077ECC94893F90A5D03EB6EBCB8D15C498CCC792AF37` | current Privacy BM pointer |
| `pages/legal-privacy/06_handoff/LEGAL-COOKIE-EN_CURRENT_GATE7_BASELINE_MANIFEST_V0.8.md` | 754 | `AE125EF3650E8C74158B7E9353BF7333FFCD4D357395A4529CECE017BB84ED93` | current Cookie EN pointer |
| `pages/legal-privacy/06_handoff/SHARED-CONSENT_CURRENT_GATE7_BASELINE_MANIFEST_V0.8.md` | 873 | `9E5A302FDA2B1E287A8D45BFC099E45C81364AF17F9E2CF5285F06C5B7225965` | current shared Consent pointer |

## 3. Frozen upstream authority

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `pages/legal-privacy/05_review/LEGAL-PRIV-EN_CURRENT_GATE6_BASELINE_MANIFEST_V0.7.md` | 698 | `B88795558F52E2D76937D4AB8205EB44F69DB49CB9D4C7D0304B4E5C0A3043FE` | Gate 6 Privacy EN root |
| `pages/legal-privacy/05_review/LEGAL-PRIV-MS_CURRENT_GATE6_BASELINE_MANIFEST_V0.7.md` | 726 | `E3E5306818E121F419B72FE6C4F614EA190813743099CD0658C8ABA9DBF43259` | Gate 6 Privacy BM root |
| `pages/legal-privacy/05_review/LEGAL-COOKIE-EN_CURRENT_GATE6_BASELINE_MANIFEST_V0.7.md` | 747 | `64E1D73296FF6952C6FCA8C8D705919D6212B5A7A90A6B75EBF75EEC2B35475B` | Gate 6 Cookie EN root |
| `pages/legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE6_BASELINE_MANIFEST_V0.7.md` | 665 | `6E23D53EC1756CEA9AA8098DB276899207027AE37319F5AEB0E4C1286522EACC` | Gate 6 Consent root |
| `pages/legal-privacy/04_planning/LEGAL-PRIV-EN_GATE2_FULL_COPY_V0.1.md` | 12808 | `E40263FEC51ED9FD39C56C000AA244855E1CC0BE95B67BF2052112AAC0973626` | exact Privacy EN Buyer-visible copy |
| `pages/legal-privacy/04_planning/LEGAL-PRIV-MS_GATE2_FULL_COPY_V0.1.md` | 14153 | `9FC9332CD6F1621AD658AAD861647E36E44623583618EE5ECD4A253DF499BC68` | exact Privacy BM Buyer-visible body copy |
| `pages/legal-privacy/04_planning/LEGAL-COOKIE-EN_GATE2_FULL_COPY_V0.2.md` | 10830 | `F1C54257C5D682ED2A9DAA458A52119CEFB752CD35662F6243644F2A9E70DF46` | exact Cookie EN current/conditional copy authority |

## 4. Release-state seal

- Current implementation direction: `no_optional_analytics`.
- Conditional direction: `verified_google_analytics_active` only after Gate 8/9 proof.
- The two states must never render together.
- Before GTM or Google measurement commands, all four approved Google consent states default to denied.
- Accept Analytics grants only `analytics_storage`; `ad_storage`, `ad_user_data` and `ad_personalization` remain denied.

## 5. Architecture and scope seal

- Exact pages: `/privacy-policy/`, `/ms/privacy-policy/`, `/cookie-policy/`.
- Cookie Settings is a shared non-page control.
- No `/terms-of-use/` or `/legal/privacy-policy/` route/redirect/link/Canonical/sitemap dependency.
- All same-site data uses `site_scope=tio2-my`; no cross-scope fallback.
- Footer copyright is exact `© 2026 TiO2 Malaysia.`; Mobile Menu has exactly the frozen eight primary destinations and no extra Legal block.
- Privacy Desktop TOC is in normal document flow and is never sticky/fixed.

## 6. Later controls and authorization seal

BM human-equivalence, production Web3Forms/receiver, mailbox, host/provider, Cookie/storage/network inventory, any Google activation and legal review remain assigned later controls. They do not alter the Gate 7 pass, but block their assigned Gate 8/9/10 action or release until verified.

`HANDED_OFF=NO`. Gate 8, Gate 9, Gate 10, development, credentials, deployment, publication, DNS and indexing remain `NOT_AUTHORIZED`.

## 7. Hash rule

The JSON audit output is intentionally not hash-bound because running the audit rewrites it. Every authority row above must match its current bytes and SHA-256. Any semantic edit to a bound file requires a new package version and Manifest.
