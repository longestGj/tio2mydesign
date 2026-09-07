# Legal / Privacy Gate 1 Data Flow and Evidence V1.0

## 0. Control

| Field | Value |
|---|---|
| Project | TiO2 Malaysia / `site_scope=tio2-my` |
| Date | 2026-09-02 |
| Status | `APPROVED / CLOSED` |
| User approval | 2026-09-02 — user confirmed Web3Forms account configuration does not affect Gate 1, approved Gate 1 and authorised Gate 2 |
| Scope | Privacy EN, Privacy BM, Cookie Policy and shared Advanced Consent / Cookie Settings |
| Architecture authority | `PAGE_REGISTRY_V0.2.md` and `LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md` |
| Consent authority | `LEGAL_PRIVACY_ADVANCED_CONSENT_AND_CODE_REUSE_DECISION_V1.0.md` |
| Implementation access | Read-only inspection of `D:\16Wordpress_nextjs\.worktrees\home-001-tio2-my`; no code changes |

This is the shared Gate 1 processing map. It separates observed implementation, user-approved business rules, planned technology and unresolved production evidence. It is not final buyer-visible policy copy and is not legal advice.

## 1. Approved public identity and scope

| Item | Current authority |
|---|---|
| Data controller / operating entity | IKHLAS TITANIUM (MALAYSIA) SDN. BHD. |
| Site | `https://tio2malaysia.com` |
| Privacy contact | `info@tio2malaysia.com` |
| Address treatment | Taiping address may be described as business/manufacturing-site and postal/correspondence address; not as registered office |
| Company inquiry retention | Up to 3 years from the last substantive interaction or closure of the inquiry, subject to narrow legal/dispute exceptions |
| Terms page | None; `/terms-of-use/` is not an approved route |
| Legal pages | `/privacy-policy/`, `/ms/privacy-policy/`, `/cookie-policy/` |
| Consent control | Footer `Cookie Settings` button; no indexable route |

The public Privacy Policy will state the retention period and purposes. It will not state whether company records are stored in email, a computer, NAS, internal server or another internal medium. Exact internal storage media remain an internal security-control matter.

## 2. Current and planned data-flow map

| ID | Trigger | Data | From → To | Purpose | Retention / storage | Status |
|---|---|---|---|---|---|---|
| DF-01 | Visitor loads a public page | Request metadata ordinarily processed by a hosting platform, such as IP address, time, URL, user agent and security/routing information | Browser → intended Vercel-hosted Next.js site | Deliver and secure the website | Production retention/configuration not yet verified | `PLANNED_HOST / PRODUCTION_EVIDENCE_REQUIRED` |
| DF-02 | Visitor submits RFQ | Grade, application, quantity, destination country, destination port/city, company name, contact name, business email, optional phone/WhatsApp, optional website, optional requirements and source page | Browser → `https://api.web3forms.com/submit` | Validate, transmit and deliver quotation inquiry | Web3Forms physical TTL up to 3 years; Free dashboard history 30 days | `IMPLEMENTED_LOCALLY / PRODUCTION_KEY_AND_RECEIVER_REQUIRED` |
| DF-03 | Web3Forms processes RFQ | Form payload plus technical metadata that may include IP, timestamp and referrer | Web3Forms / Web3Creative → configured enterprise mailbox | Deliver inquiry to IKHLAS | Receiver mailbox and delivery operation not yet production-verified | `PROCESSOR_FLOW / RECEIVER_REQUIRED` |
| DF-04 | IKHLAS handles inquiry | Submitted inquiry and related correspondence | Enterprise mailbox → authorised IKHLAS personnel and company records | Review, respond, quote and maintain B2B correspondence | Company rule: up to 3 years from last substantive interaction or closure | `USER_APPROVED_RETENTION / INTERNAL_MEDIA_NOT_PUBLIC` |
| DF-05 | Web3Forms spam screening | Submitter IP and email may be supplied for abuse assessment | Web3Forms → CleanTalk and/or Akismet | Spam, abuse and phishing prevention | Provider-controlled; exact per-request use and retention require production/provider verification | `DISCLOSURE_REQUIRED` |
| DF-06 | Consent choice | Consent category/status and future consent version/decision time | Browser → site-specific browser storage and consent runtime | Remember and apply preferences; provide withdrawal | Exact key and lifetime pending implementation; TITAN key must not be reused | `APPROVED_DIRECTION / IMPLEMENTATION_REQUIRED` |
| DF-07 | Page load while Google consent denied | Consent state and limited cookieless measurement signals | Browser → Google, only after GA4/GTM/Ads are separately enabled | Advanced Consent Mode measurement/modeling | Google-controlled; not an active current data flow | `PLANNED_BUT_NOT_ENABLED` |
| DF-08 | Analytics consent granted after future enablement | Page/event measurement; RFQ local events contain only fixed event/page/site identity | Browser/dataLayer → future GTM/GA4 | Aggregate measurement and site improvement | Property/container and retention configuration not supplied | `PLANNED_BUT_NOT_ENABLED` |
| DF-09 | Advertising consent granted after future enablement | Advertising measurement allowed by the final tag inventory | Browser → future Google Ads tags | Advertising conversion measurement only | Account/tag/retention configuration not supplied | `PLANNED_BUT_NOT_ENABLED` |
| DF-10 | WordPress content delivery | Published page/content fields; not form submissions | WordPress → Next.js server/build/runtime | Render approved site content | Server-side implementation contract; production endpoint not verified | `IMPLEMENTED_ARCHITECTURE / NO_PUBLIC_FORM_STORAGE` |

## 3. Exact observed RFQ payload

Read-only inspection of `lib/rfq/malaysia-rfq-receiver.ts` found a browser-direct JSON POST to Web3Forms containing:

- `grade_id`;
- `application_id`;
- `quantity_mt` and fixed `quantity_unit=MT`;
- `destination_country`;
- optional `destination_port_city`;
- `company_name`;
- `contact_name`;
- `business_email`;
- optional `phone_whatsapp`;
- optional `website`;
- optional `additional_requirements`;
- optional `source_page_id`;
- fixed workflow metadata: `site_scope=tio2-my`, `page_id=CONV-RFQ`, `workflow_type=rfq`, `locale=en`;
- a generated request token and Web3Forms delivery configuration fields.

No consent checkbox value is included in the submission. The form privacy notice is transparency text and link, not bundled marketing consent.

Observed exclusions:

- no file upload;
- no health, biometric, financial-account or other intended special-category field;
- no Google Sheets, Slack, webhook or similar integration;
- no Turnstile, reCAPTCHA or hCaptcha;
- no form values or field errors in the local analytics-event payload.

## 4. Provider evidence

| Evidence ID | Source | Accessed | Relevant fact | Status |
|---|---|---|---|---|
| EV-W3F-PRICING | `https://web3forms.com/pricing` | 2026-09-02 | Free: 250 monthly submissions, one recipient per form and 30-day form-submission history visibility; paid integrations/file uploads are not Free features | `OFFICIAL_CURRENT` |
| EV-W3F-PRIVACY | `https://web3forms.com/privacy` — updated 2026-07-13 | 2026-09-02 | Web3Creative acts as processor for customer form submissions; provider states maximum 3-year submission retention and international infrastructure | `OFFICIAL_CURRENT` |
| EV-W3F-DPA | `https://web3forms.com/dpa` — V1.0, updated 2026-07-13 | 2026-09-02 | Physical submission TTL is 3 years; dashboard visibility varies by plan; lists AWS, Cloudflare, Hetzner, CleanTalk and Akismet among relevant subprocessors | `OFFICIAL_CURRENT / PRIMARY_PROCESSOR_CONTRACT` |
| EV-W3F-TERMS | `https://web3forms.com/terms` — updated 2026-07-13 | 2026-09-02 | Retention follows the provider schedule with a maximum of 3 years; customer remains responsible for its own records | `OFFICIAL_CURRENT` |
| EV-GOOGLE-CONSENT | `https://developers.google.com/tag-platform/security/guides/consent` — updated 2026-07-30 | 2026-09-02 | Defaults must be set before measurement commands; current Consent Mode includes four relevant states | `OFFICIAL_CURRENT` |
| EV-GOOGLE-ADVANCED | `https://support.google.com/analytics/answer/10000067` | 2026-09-02 | Advanced Mode loads Google tags with denied defaults and may send cookieless pings until consent is granted | `OFFICIAL_CURRENT` |
| EV-VERCEL-ANALYTICS | `https://vercel.com/docs/analytics/privacy-policy` | 2026-09-02 | Vercel Web Analytics is a separate optional analytics product; it requires an integration/script and is not inferred merely from Vercel hosting | `OFFICIAL_CURRENT` |
| EV-MY-PDPA | `https://www.pdp.gov.my/ppdpv1/en/akta/application-and-non-application-of-the-act/` | 2026-09-02 | Malaysia PDPA applies to processing connected with commercial transactions by an establishment in Malaysia | `OFFICIAL_CURRENT` |
| EV-MY-PRINCIPLES | `https://www.pdp.gov.my/ppdpv1/en/principles-of-personal-data-protection/` | 2026-09-02 | Notice, disclosure, security, retention, integrity and access are among the official principles | `OFFICIAL_CURRENT` |
| EV-MY-CROSSBORDER | `https://www.pdp.gov.my/ppdpv1/en/akta/personal-data-protection-guidelines-on-cross-border-transfer-of-personal-data-cbpdt/` | 2026-09-02 | Cross-border transfers are governed by section 129 and the Commissioner's current guidance | `OFFICIAL_CURRENT / LEGAL_REVIEW_REQUIRED` |

An older Web3Forms FAQ says submissions are not stored and mentions periodic log deletion. It conflicts with the provider's later-dated 2026 Privacy Policy, Terms and DPA. The current Gate 1 authority is the 2026 legal set, especially the DPA's explicit physical TTL; the older FAQ must not be used to promise 30-day deletion or no storage.

## 5. Consent and storage inventory

### 5.1 Current TiO2 Malaysia implementation state

- No GTM container ID, GA4 measurement ID or Google Ads identifier was found in the inspected TiO2 Malaysia worktree.
- No `@vercel/analytics` dependency or Vercel Web Analytics script was found.
- No shared CMP/Consent Manager implementation was found; readiness remains false.
- A local RFQ analytics adapter exists but emits only after same-scope Analytics consent and only pushes fixed event/site/page identity into `dataLayer`.
- Public visitor Cookie/Local Storage must be verified again against the production-equivalent build before final Cookie Policy approval.
- WordPress/Next.js preview cookies are administrative preview mechanics, not a general public-site consent category.

### 5.2 Authorised TITAN reuse source

| Item | Value |
|---|---|
| Local source | `D:\01AICode\01TitanTitan\website_src\static\assets\js\consent.js` |
| SHA-256 inspected | `92E25B2E28F2FDDE3BEEC1B18F97DA14117E0082F53C8D06DD6ADC8570E9DD69` |
| Observed capability | Analytics `granted/denied`, Local Storage persistence, preference reopen button, focus return and consent update event |
| Required adaptation | Site namespace/key, branding/copy, consent version/time, TiO2 Malaysia signal, policy links, responsive/accessibility verification and future category expansion if a real active stack requires it |
| Forbidden reuse | TITAN GTM/GA4 IDs, domain, company/policy text, Web3Forms credentials and production identifiers |

Because GA4/GTM/Google Ads are currently inactive, the first production consent UI may follow TITAN's `Accept analytics / Necessary only` pattern. It must not display an active Advertising category before an advertising tag is actually introduced. `ad_storage`, `ad_user_data` and `ad_personalization` remain denied; `ad_personalization` remains denied in every approved state.

## 6. Privacy Policy publication boundary

The public policy should disclose:

- controller identity and privacy contact;
- inquiry fields and purposes;
- Web3Forms processing and delivery by email;
- provider/subprocessor and cross-border categories at an accurate level;
- the company inquiry-retention rule and material legal exceptions;
- applicable access, correction, withdrawal/objection and deletion/request routes without promising an absolute right where law provides conditions;
- current Cookie/Consent behaviour, with planned Google/Vercel analytics mentioned as active only after verified activation;
- policy update date and language equivalence path.

The public policy should not disclose:

- the physical medium used for company records;
- access keys, mailbox credentials, internal paths or security topology;
- inactive GA4/GTM/Google Ads/Vercel Web Analytics as current facts;
- a false 30-day Web3Forms deletion promise;
- copied TITAN policy text or identifiers.

## 7. Open evidence and release blockers

| ID | Open item | Required before |
|---|---|---|
| LP-G1-01 | Production Web3Forms account/access key owner, verified receiver and 250-submission limit handling | Gate 8/9 and release |
| LP-G1-02 | Enterprise mailbox operation, monitoring owner and delivery test for `info@tio2malaysia.com` or approved receiver | Gate 9 and release |
| LP-G1-03 | Production host/project, Vercel contract/DPA configuration and actual request/log behaviour | Final policy and Gate 9 |
| LP-G1-04 | Final Sample and Request Documents fields/data flows | Those page Briefs and final policy |
| LP-G1-05 | Adapted Consent Manager implementation, exact storage key/lifetime, displayed text version and withdrawal evidence | Gate 8/9 and release |
| LP-G1-06 | Any future GA4/GTM/Google Ads IDs, account settings, tag inventory, regions and retention | Before enabling those services |
| LP-G1-07 | Malaysia PDPA 2024 amendment, DPO/registration/breach/cross-border obligations and EU/UK applicability review | Final legal copy / Gate 10 |
| LP-G1-08 | Production network/storage capture proving policies match reality | Gate 9 and release |

None of these items authorises buyer-visible placeholders. Unverified technologies are omitted or described as inactive until evidence exists.

## 8. Approved route correction

The user confirmed on 2026-09-02:

- `/privacy-policy/` is the only approved English Privacy route;
- `/legal/privacy-policy/` is an old development-test placeholder;
- no `/legal/privacy-policy/` route or redirect is required because it was not released;
- D16 environment fixtures, unit tests and integration tests must consume `/privacy-policy/` in a separately authorised external-development correction;
- Gate 8/9 must verify the RFQ link, Footer link, Canonical, hreflang and sitemap use the approved route.

Observed affected D16 test surfaces include `malaysia-rfq-template.test.tsx`, `malaysia-rfq-runtime.test.ts` and `tests/integration/rfq/route.test.tsx`. This D23 task did not modify them.

## 9. Gate status

`LEGAL-PRIVACY-G1 = APPROVED / CLOSED`

Approved scope: the processing inventory, three page identities, consent direction, evidence hierarchy, route correction and open-item treatment. The Web3Forms production access key, verified receiver and other production configuration remain Gate 8/9 evidence and do not reopen Gate 1. The approval authorises Gate 2 work only; it does not approve Gate 2 copy, visual design, development, deployment or publication.
