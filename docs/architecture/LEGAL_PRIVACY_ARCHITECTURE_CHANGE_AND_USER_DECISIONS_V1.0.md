# Legal / Privacy Architecture Change and User Decisions V1.0

## 0. Control

| Field | Value |
|---|---|
| Project | TiO2 Malaysia / `site_scope=tio2-my` |
| Decision date | 2026-09-02 |
| Status | `USER_APPROVED / ACTIVE_ARCHITECTURE_ADDENDUM` |
| Decision source | Current user instruction approving the independent BM URL, 54→58 page change and Basic Consent Mode, and supplying legal/privacy operating inputs |
| Parent framework | `docs/architecture/WEBSITE_LEGAL_PRIVACY_FRAMEWORK_ADOPTION_V1.0.md` |
| Current registry relationship | Supplements `PAGE_REGISTRY_V0.1.md` until a consolidated V0.2 registry is issued; the effective approved count is 58 |
| Development / release effect | No code, CMS, deployment, DNS, publication or indexing authority |

This record preserves the user's exact decisions and the project-control interpretation required by the root governance rules. It does not copy instructions from `mytio2.com`; that site is used only as a user-directed candidate factual reference.

## 1. Approved page architecture

The user approved four new legal-page records and an independent Bahasa Malaysia URL:

| Page ID | Page name | URL | Language | Page type | Primary keyword | Lifecycle |
|---|---|---|---|---|---|---|
| `LEGAL-PRIV-EN` | Privacy Policy / Privacy Notice | `/privacy-policy/` | English | Legal / privacy page | `NO_PRIMARY_KEYWORD` | `NOT_STARTED` |
| `LEGAL-PRIV-MS` | Dasar Privasi / Notis Perlindungan Data Peribadi | `/ms/privacy-policy/` | Bahasa Malaysia | Legal / privacy page | `NO_PRIMARY_KEYWORD` | `NOT_STARTED` |
| `LEGAL-TERMS-EN` | Terms of Use | `/terms-of-use/` | English | Legal terms page | `NO_PRIMARY_KEYWORD` | `NOT_STARTED` |
| `LEGAL-COOKIE-EN` | Cookie Policy | `/cookie-policy/` | English | Legal / cookie page | `NO_PRIMARY_KEYWORD` | `NOT_STARTED` |

Effective site architecture: `54 + 4 = 58` page records.

`Cookie Settings` is a shared functional control that reopens the consent manager. It is not a content page, has no indexable route and does not add a page record.

### 1.1 URL / SEO / language direction

- English and Bahasa Malaysia Privacy pages use separate, directly accessible URLs.
- Each language URL is self-canonical.
- The pair must expose reciprocal `hreflang` values: English and `ms-MY`; `x-default` points to the English Privacy Policy.
- All four legal pages remain `NO_PRIMARY_KEYWORD`; they must not target product, supplier, market or application commercial queries.
- Legal pages are crawlable/indexable unless a later separately approved technical decision changes that direction.
- No FAQ Schema is created solely from legal copy.
- The Global Header primary navigation remains unchanged. Legal pages have no inferred primary-navigation current item.

## 2. Approved contact and retention inputs

### 2.1 Privacy/contact email

Approved buyer-visible value for the TiO2 Malaysia legal/privacy system:

`info@tio2malaysia.com`

Approved scope:

- Privacy Policy / Privacy Notice contact;
- Cookie Policy contact;
- Terms of Use contact;
- rights, privacy and cookie request instructions;
- corresponding visible and machine-readable fields where semantically appropriate and where the same value is visible.

This is content-use approval. Mailbox ownership, MX, inbound/outbound delivery, monitoring owner and production operation must still be tested before release. A failed operational check blocks release but does not downgrade the user's content approval.

### 2.2 Inquiry retention

Approved company inquiry-data retention period:

`3 years`

Drafting direction:

- ordinary RFQ, Request Documents, Request Sample and general B2B inquiry submissions and related inquiry correspondence may be described as retained for up to three years, measured from the last substantive interaction or closure of the inquiry, subject to a precise Gate 2 definition;
- records required for a longer period by applicable law, accounting, customs, an executed contract, dispute preservation or other legal obligation must be described separately and narrowly;
- Web3Forms' own service retention is a processor fact and must not be presented as the source of IKHLAS TITANIUM's independent three-year business-retention decision.

The exact trigger date and exception wording remain Gate 2 drafting details, not additional unapproved retention periods.

## 3. Address evidence and approved use boundary

The user directed project control to use the other operating-entity website, `https://www.mytio2.com`, as the address reference.

The public site displays:

`NO.33 Industrial Perusahaan Ringan Tupai, 34000 Taiping, Perak, Malaysia`

Observed source treatment on 2026-09-02:

- the homepage labels it `Manufacturing Site`;
- the source site's Privacy Policy, Cookie Policy and Terms of Use use it as the postal contact address;
- the source does not identify it as the SSM registered office or expressly label it `registered address`.

Approved TiO2 Malaysia legal/privacy treatment:

- may be used as the company business, manufacturing-site and postal/correspondence address in the legal/privacy pages;
- must not be labelled `registered address`, `registered office`, visitor address or independent office unless later evidence or user approval establishes that classification;
- Schema may not silently upgrade it to the Organization's registered address.

This treatment satisfies the approved framework's `registered/business address` input through the business/postal-address branch without fabricating registration status.

## 4. Terms of Use reference audit

The user directed project control to refer to the source site's Terms of Use for governing-law and dispute direction.

Audit result on 2026-09-02:

- `https://www.mytio2.com/terms-of-use/` contains website purpose, product information, quotation, warranty, IP, prohibited-use, third-party-link, liability, change and contact terms;
- it contains no `Governing Law`, `Jurisdiction`, arbitration, court venue or dispute-resolution clause.

Therefore no governing-law or dispute term is inherited or treated as approved from that source.

Project-control recommendation, pending explicit user decision:

- governing law: laws of Malaysia;
- dispute forum: courts of Malaysia, preferably with the exact state/venue left to a later deliberate choice rather than invented;
- do not introduce arbitration, a foreign forum, fee shifting or mandatory pre-action procedure without a separate decision.

Status: `GOVERNING_LAW_AND_DISPUTE_DIRECTION_REQUIRED / NOT_YET_APPROVED`.

## 5. Approved consent and analytics direction

| Item | User decision | Project boundary |
|---|---|---|
| CMP | `REQUIRED / APPROVED` | Vendor and configuration remain to be selected and verified |
| Google Consent Mode | `BASIC MODE / APPROVED` | Google tags do not load and no Google measurement data is transmitted before applicable affirmative consent |
| GA4 | `PLANNED_BUT_NOT_ENABLED` | Disclose as active only when the production-equivalent configuration is enabled and verified |
| GTM | `PLANNED_BUT_NOT_ENABLED` | Container contents and firing order remain implementation evidence, not current facts |
| Google Ads | `PLANNED_BUT_NOT_ENABLED` | Advertising measurement disclosure becomes active only after implementation and consent verification |
| Remarketing / audience | `DO_NOT_USE` | Remains prohibited under the parent framework |
| Turnstile / reCAPTCHA | `DO_NOT_USE` | Remains prohibited under the parent framework |

Approved consent-state direction:

- Necessary: active only for genuinely required operation and consent-state storage.
- Analytics: off by default; GA4 may load only after applicable Analytics consent.
- Advertising: off by default; Google Ads measurement may load only after applicable Advertising consent.
- `ad_personalization` remains denied because personalization, remarketing and audience building are not used.
- Accept All, Reject Non-Essential and Manage Preferences remain comparably discoverable.
- Cookie Settings remains permanently available from the shared Footer.

## 6. Web3Forms decision and constraints

Approved plan: `Web3Forms Free`.

Current provider information checked on 2026-09-02 states that the Free plan includes 250 monthly submissions, one recipient per form, 30-day submission-history visibility and no file attachments, webhooks or paid third-party integrations. Provider limits may change and must be rechecked at Gate 7/9.

Project implications:

- the initial RFQ, Request Documents, Request Sample and any in-scope general inquiry form must remain compatible with the Free plan;
- no file-upload field is authorised;
- no Google Sheets, Slack, Discord, Telegram, webhook or other optional integration is treated as active;
- the actual access-key owner, destination mailbox, form inventory, submission limit handling, provider DPA and native spam/security processing remain Gate 7/8/9 evidence;
- exceeding the provider's monthly limit must not produce a false receipt-confirmed success state;
- provider hCaptcha availability does not authorise hCaptcha. Any captcha/provider addition requires a separate privacy and implementation decision.

## 7. Existing page impacts

| Surface | Required impact |
|---|---|
| Global Footer | Add `Privacy Policy`, `Terms of Use`, `Cookie Policy` and functional `Cookie Settings` through a successor Global Chrome contract; no Header navigation change |
| CONV-RFQ | Keep the approved short quotation-request privacy sentence and link; verify actual Web3Forms/data-flow parity |
| CONV-DOC | Keep the approved short document-request privacy sentence and link |
| CONV-SAMPLE | Replace the historical internal privacy block with the approved final-reader sample-request notice in a controlled revision |
| CONTACT-001 or later forms | Use a short task-specific notice and minimum data; do not bundle marketing consent |
| Privacy copy | Do not copy the source site's seven-/five-year retention, Microsoft Clarity, Vercel, Google Workspace, EU OR or other provider claims unless separately verified for this site |
| Product/application wording | Describe reviewing submitted product/application context; do not promise a suitable-grade recommendation without the separately approved recommendation workflow |

## 8. Required next governance artifacts

1. Consolidated `PAGE_REGISTRY_V0.2.md` containing all 58 records.
2. Updated page-keyword master with four `NO_PRIMARY_KEYWORD` legal records.
3. Legal / Privacy page-type Playbook.
4. Four independent page Briefs corresponding to the four Page IDs.
5. Successor Global Header/Footer contract adding the legal utility row and Cookie Settings interaction.
6. CMP selection and consent UI Brief covering Desktop, Tablet, Mobile, keyboard, focus, withdrawal and long-copy states.
7. Gate 1 processing/data map and provider evidence register.

These artifacts require their ordinary project-control and user approvals. This record does not self-approve Gate 0–10 outcomes.

## 9. Authority and release boundary

The decisions above are formally approved for content and architecture use. They do not authorise WordPress/Next.js work, code, CMS changes, external development, deployment, DNS, publication or indexing.

Final production-equivalent policy text, BM equivalence, consent behaviour, Web3Forms flow, actual provider list, Cookie/storage inventory and legal Footer operation must be presented to the user for final legal/privacy confirmation before Gate 10 release authority.
