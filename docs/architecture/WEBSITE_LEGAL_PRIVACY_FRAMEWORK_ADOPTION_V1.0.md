# Website Legal & Privacy Framework — Project Adoption V1.0

## 0. Control

| Field | Value |
|---|---|
| Project | TiO2 Malaysia / `site_scope=tio2-my` |
| Decision date | 2026-09-01 |
| Status | `APPROVED_PROJECT_IMPLEMENTATION_REQUIREMENT / ACTIVE` |
| Approval source | User: “这份是我们网站需要开发的内容” |
| Final legal/privacy confirmation owner | User |
| Source document | `C:\Users\longe\Downloads\WEBSITE_LEGAL_PRIVACY_FRAMEWORK_V1.0.md` |
| Source bytes | `38344` |
| Source SHA-256 | `6DA5BDBD3A04B3CF063868DF9C898BF02DB84507F2F7340DD5120AADA00C08F3` |

This adoption record treats the exact source document above as the approved website-wide legal and privacy implementation framework. The source document remains evidence; this record states the governing project interpretation and user override.

## 1. Required final website system

The final website must include and connect:

1. English Privacy Policy.
2. Bahasa Malaysia Privacy Policy / Privacy Notice with materially equivalent disclosures.
3. Terms of Use.
4. Cookie Policy.
5. Cookie Consent Banner.
6. Cookie Settings control that reopens the consent manager.
7. Short form-level privacy notices for Request a Quote, Request Documents, Request a Sample and any later personal-data form.
8. Web3Forms processing disclosure and verified production data flow.
9. Google Ads / applicable analytics disclosure, consent manager and current Google consent signalling matching the production implementation.
10. Shared Footer links to Privacy Policy, Terms of Use, Cookie Policy and Cookie Settings.

## 2. Final-reader and Gate interpretation

- Gate 1–5 must design the complete final reader experience, including final legal links, form notices, Cookie Banner and Cookie Settings states. Parallel legal pages or routes that are still being produced do not by themselves block content, wireframe, visual direction or Gate 5 approval.
- Buyer-visible work must not contain internal placeholders, `PENDING`, `LEGAL REVIEW REQUIRED`, `RELEASE BLOCKER`, evidence notes or governance annotations.
- Gate 7 records shared routes, component behaviour, consent/data contracts and cross-page dependencies.
- Gate 8 implements the approved system in the external development project.
- Gate 9 verifies the production-equivalent data flow, consent behaviour, tags, network requests, Web3Forms configuration, Cookie inventory, legal links, mobile behaviour and visible/machine parity.
- Gate 10 remains a separate user release authorization.

## 3. User confirmation rule

The source document's statements requiring a legal professional or external legal review before launch are superseded for project governance by the user's 2026-09-01 decision:

`USER_FINAL_LEGAL_PRIVACY_CONFIRMATION_REQUIRED_BEFORE_RELEASE`

External professional legal review is not a project hard gate. The final production-equivalent policies, disclosures, consent behaviour and actual data flows must instead be presented to the user for final confirmation before release.

This decision does not authorize fabrication. Unknown company details, providers, integrations, retention periods, Cookie names, durations, transfer mechanisms, governing law or technical behaviour must remain internal open inputs until verified.

## 4. Content and evidence boundaries

- Policies describe only technologies and integrations actually used in the production-equivalent implementation.
- The Cookie inventory is produced from a staging scan after CMP, Google, Web3Forms, analytics, anti-spam and third-party integrations are configured.
- Form submission is not bundled marketing consent. Any future unrelated marketing consent requires a separate, unticked choice and its own record.
- A mandatory “I agree to the Privacy Policy” checkbox must not be added merely to simulate consent when acknowledgement/notice is the correct mechanism.
- Product and Application statements remain governed by PRODUCT V0.3 and approved page contracts. Unless a separate recommendation workflow is approved, privacy-purpose copy must describe understanding the submitted product/application context, not promise or infer a suitable-grade recommendation.
- Web3Forms, Google, regional-law and provider-policy facts stated in the source remain subject to current-source and production-configuration verification before final user confirmation.

## 5. Final form notice direction

The preferred reader-facing pattern is:

`We use the information you provide to review and respond to your request. Learn more in our Privacy Policy.`

Each form may replace `request` with its page-specific task, such as `quotation request`, `document request` or `sample request`. The linked Privacy Policy owns the detailed disclosure.

## 6. Required open inputs before final user confirmation

- Final production domain.
- Publishable company address.
- Privacy/contact email.
- Selected CMP.
- Final Google Ads conversion-measurement configuration and its production consent behaviour.
- Actual Web3Forms plan, DPA, receiver, file-upload state, integrations and subprocessors used.
- Actual Web3Forms-native spam/security processing, if any.
- Internal inquiry-data retention schedule.
- Production-equivalent Cookie/storage inventory.
- Terms of Use governing-law and dispute language.

### 6.1 Approved technical decisions

| Item | User decision | Current implementation boundary |
|---|---|---|
| Google Analytics 4 (GA4) | `USE / APPROVED` | Include in the production data map, Cookie inventory, Analytics category, consent behaviour and Privacy/Cookie disclosures. |
| Google Tag Manager (GTM) | `USE / APPROVED` | Use as the approved tag-management layer; verify container contents, firing conditions and consent integration at Gate 9. |
| Remarketing / audience features | `DO_NOT_USE / APPROVED` | Do not enable remarketing lists, audience-building or related personalization features; do not describe them as active in policies or Cookie copy. |
| Turnstile / reCAPTCHA | `DO_NOT_USE / APPROVED` | Do not add Cloudflare Turnstile or Google reCAPTCHA to forms and do not disclose either as an active provider. Web3Forms-native processing remains a separate fact to verify. |

## 7. Authority effect

This file is an approved cross-page implementation requirement. It does not by itself authorize code changes, deployment, publication, DNS or indexing. Page tasks and the external development project must consume it within their currently authorized Gate and repository boundaries.
