# Legal / Privacy Data Flow and Evidence V1.1

## 0. Control

| Field | Value |
|---|---|
| Project | TiO2 Malaysia / `site_scope=tio2-my` |
| Date | 2026-09-13 |
| Status | `APPROVED_LAUNCH_DECISION_INPUT / GATE_6_DELIVERY_READY / GATE_8_9_EVIDENCE_REQUIRED` |
| Parent | `LEGAL_PRIVACY_GATE1_DATA_FLOW_AND_EVIDENCE_V1.0.md` |
| Change authority | `TIO2_MY_FULL_PUBLIC_SEO_GA4_GSC_LAUNCH_DECISION_AND_SPEC_V1.0.md` |
| Scope | GA4, Google Tag Manager, Advanced Consent Mode and the related legal-content activation only |

V1.0 remains the approved historical Gate 1 evidence baseline. This successor changes the planned Google rows into an authorised launch implementation contract without representing unobserved production behaviour as fact. All unchanged identity, Web3Forms, inquiry, retention, no-Terms and route decisions remain inherited from V1.0.

## 1. Current launch data-flow delta

| ID | Trigger | Data | From → To | Purpose | Status before production evidence |
|---|---|---|---|---|---|
| DF-06 | Visitor makes or changes an Analytics choice | Analytics choice, consent version and decision time in site-specific browser storage | Browser → TiO2 Malaysia consent runtime | Remember and apply the choice; support withdrawal | `GATE_8_IMPLEMENTATION_REQUIRED / EXACT_KEY_OPEN` |
| DF-07 | Public page loads before choice or while Analytics is denied | Consent state and limited cookieless measurement signals | Browser → Google through the consent-aware GA4/GTM implementation | Limited aggregate measurement and modelling without Analytics storage | `APPROVED_FOR_IMPLEMENTATION / GATE_8_9_NETWORK_EVIDENCE_REQUIRED` |
| DF-08 | Visitor selects **Accept analytics** | Page and approved non-personal event measurement; Analytics storage may be used | Browser → Google Analytics through Google Tag Manager | Measure aggregate use and site performance | `APPROVED_FOR_IMPLEMENTATION / GATE_8_9_STORAGE_AND_NETWORK_EVIDENCE_REQUIRED` |
| DF-09 | Any consent state | `ad_storage`, `ad_user_data` and `ad_personalization` | Consent runtime → Google consent API | Keep all advertising-related states denied | `PERMANENTLY_DENIED / MUST_BE_PROVEN_AT_GATE_8_9` |

Google Analytics and Google Tag Manager are approved launch services. They become buyer-visible active facts only in the same release candidate that supplies the evidence in section 3. Google Ads, remarketing, audience building, Customer Match, advertising personalisation and Vercel Web Analytics are not part of this activation.

## 2. Data minimisation and event boundary

- Consent Mode defaults must execute before any GA4 configuration or measurement command.
- Only `analytics_storage` may change to `granted`, and only after **Accept analytics**.
- Necessary only, rejection and withdrawal set `analytics_storage=denied`.
- `ad_storage`, `ad_user_data` and `ad_personalization` remain `denied` in every state.
- GA4 must not receive names, email addresses, telephone numbers, company names, free text, document-request contents, file names, full form payloads or unfiltered URL query strings.
- RFQ, Request Documents and Request a Sample success events may be sent only after server-confirmed success, a valid short-lived session marker and granted Analytics consent. Event parameters are limited to approved enumerated site/page/form/source identifiers.
- `/thank-you/` and analytics event payloads must not expose personal data or request content.

## 3. Evidence required before active wording can publish

| Evidence ID | Required observation | Consumer |
|---|---|---|
| GA4-E01 | Separate GTM Container ID and GA4 Measurement ID values are injected only for `site_scope=tio2-my`; the container delivers the matching GA4 destination, no direct-gtag bypass exists and no production identifier is committed as reusable cross-site content | Gate 8/9 configuration and QA |
| GA4-E02 | Four denied defaults execute before GTM, GA4 configuration and measurement | Consent QA and legal-text activation |
| GA4-E03 | Necessary only, Accept analytics and withdrawal produce the approved four-state matrix; advertising states never become granted | Consent QA and Cookie Settings |
| GA4-E04 | Clean-browser storage capture identifies the final consent Local Storage key, value shape, consent version and persistence behaviour | Cookie Policy inventory |
| GA4-E05 | Clean-browser capture identifies the actual `_ga` and property-specific GA cookie name, host/domain, purpose, observed consent condition and configured duration | Cookie Policy inventory |
| GA4-E06 | Denied-state network capture describes the limited cookieless requests actually observed; accepted and withdrawn states are captured separately | Privacy/Cookie disclosures |
| GA4-E07 | SPA navigation records one expected page view per valid view and no duplicate | Analytics QA |
| GA4-E08 | Success-event positive and negative tests prove consent, server-success and no-personal-data rules | Conversion analytics QA |
| GA4-E09 | Production HTML, Privacy EN/BM, Cookie Policy and Cookie Settings all use the activated copy version and match the observed runtime | Gate 9 parity |
| GA4-E10 | Source and network ordering proves `dataLayer` plus four denied defaults precede the site-scoped GTM loader, and the GTM container—not a separate direct loader—delivers the matching GA4 destination | Gate 8/9 configuration, source and network QA |

Anticipated Google cookie names or durations are not evidence. Until GA4-E04 and GA4-E05 exist, the public inventory must not label a key or cookie as observed.

## 4. Storage-key migration decision field

The legal configuration previously proposed `tio2_my_consent_v1`; an inspected implementation used `tio2-my:consent:v1`. Gate 8 must choose one final canonical key and document the migration result:

| Field | Value |
|---|---|
| Final canonical key | `OPEN_GATE_8_RUNTIME_FIELD` |
| Legacy key read | `OPEN_GATE_8_RUNTIME_FIELD` |
| Migration/delete behaviour | `OPEN_GATE_8_RUNTIME_FIELD` |
| Gate 9 observed value shape/version | `OPEN_GATE_9_EVIDENCE_FIELD` |

The visible Cookie Policy, consent configuration and runtime evidence must use the same final string. The migration rule must preserve an existing valid visitor choice rather than silently resetting or broadening consent.

## 5. Authority and release boundary

This V1.1 successor is the current GA4 data-flow input for Gate 6 delivery. It does not itself prove that GA4 is active, populate a Cookie inventory, authorise D16 edits or complete Gate 9. The active legal copy defined in `TIO2_MY_GA4_LEGAL_CONTENT_DELIVERY_V1.0.md` may publish only after the required Gate 8 implementation and Gate 9 parity evidence are present.
