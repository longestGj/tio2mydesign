# Legal / Privacy Advanced Consent and Code Reuse Decision V1.0

## 0. Control

| Field | Value |
|---|---|
| Project | TiO2 Malaysia / `site_scope=tio2-my` |
| Decision date | 2026-09-02 |
| Status | `USER_APPROVED / ACTIVE_OVERRIDE` |
| Decision source | User: Advanced Mode replaces Basic Mode; titantitanium.cn code may be reused from the user's local source |
| Supersedes | Basic Consent Mode decision in `LEGAL_PRIVACY_ARCHITECTURE_CHANGE_AND_USER_DECISIONS_V1.0.md` §5 |
| Parent framework | `WEBSITE_LEGAL_PRIVACY_FRAMEWORK_ADOPTION_V1.0.md` |
| Implementation authority | None in `D:\23MySec`; implementation remains a Gate 7/8 responsibility of `D:\16Wordpress_nextjs` |

This record is the current authority for Google Consent Mode and the permitted TITAN consent-code reuse direction. All unrelated decisions in the parent framework and architecture addendum remain unchanged.

Source boundary confirmed by the user on 2026-09-02: `titantitanium.cn` does not have a `Terms of Use` page. It is therefore approved only as a consent-code reference and must not be cited or treated as the source of TiO2 Malaysia Terms content, governing law or dispute language.

## 1. Approved Consent Mode change

The user approved:

`Google Consent Mode: ADVANCED MODE / APPROVED`

This replaces the previously recorded Basic Mode decision.

Approved behaviour:

1. Before GTM or any Google tag loads, set the following default states to `denied`:
   - `analytics_storage`
   - `ad_storage`
   - `ad_user_data`
   - `ad_personalization`
2. GTM / consent-aware Google tags may load while the applicable states remain denied.
3. Denied-state cookieless pings may occur and must be accurately disclosed.
4. Full Analytics or Advertising measurement activates only after the corresponding affirmative choice.
5. `ad_personalization` remains permanently denied under the current no-remarketing/no-audience decision.
6. Remarketing, audience building, Customer Match and personalized advertising remain prohibited.
7. Consent withdrawal must update signals immediately and stop subsequent optional storage/use as technically applicable.

GA4, GTM and Google Ads are still `PLANNED_BUT_NOT_ENABLED` for TiO2 Malaysia. Advanced Mode approval defines their future behaviour; it does not make them active facts today.

## 2. Required Advanced Mode disclosure

The first-layer consent copy and linked Privacy/Cookie disclosures must not claim that rejection means no data is sent to Google.

They must explain, in plain language, that while optional storage remains denied, Google may receive limited cookieless measurement signals. The final verified description must be based on the production-equivalent implementation and may include consent state, timestamp, browser/user-agent information, referrer, ad-click information, random per-page values, CMP information and IP-related processing where applicable.

The precise buyer-visible wording remains a Gate 2 approval item. This record approves the factual disclosure direction, not an unreviewed final sentence.

## 3. TITAN local-code reuse authorization

The user expressly confirmed that the code used for `titantitanium.cn` may be reused for this project from the user's local source.

Approved interpretation:

- user-attested reuse permission is recorded for the consent-management implementation;
- reuse is an input to the external development project, not code work in `D:\23MySec`;
- the development project should use the user's local authoritative source rather than treating the public website as the sole code repository;
- the exact local source path, version and hash must be identified in the Gate 7/8 implementation record before reuse;
- this approval does not assert trademark registration or third-party rights beyond the user's stated permission.

No matching `TitanConsent`, `titan_analytics_consent_v1`, `Analytics preferences` or `GTM-NF48WWKB` source was found in the non-archive/non-workspace scope of `D:\23MySec` on 2026-09-02. This is expected because implementation code belongs to the external development project.

## 4. Observed TITAN consent pattern

The public implementation inspected on 2026-09-02 uses a lightweight custom consent manager:

- four Google consent defaults are set to denied before GTM loads;
- GTM then loads, making the pattern Advanced rather than Basic;
- a first-visit `Analytics preferences` interface offers `Accept analytics` and `Necessary only`;
- the selected analytics state is stored locally;
- a Footer button reopens the preference interface;
- accepting updates `analytics_storage` only;
- advertising-related states remain denied.

This pattern is a valid reference input but is not a complete drop-in TiO2 Malaysia contract.

## 5. Mandatory adaptation boundary

The external development implementation must adapt the reusable code rather than copy production identifiers or TITAN branding.

### 5.1 Must change

- TITAN names, DOM namespaces, events and storage keys;
- buyer-visible copy and branding;
- English/Bahasa Malaysia legal links and disclosure path;
- preference model from analytics-only to the approved Necessary / Analytics / Advertising structure where the implemented stack requires those categories;
- consent version and decision timestamp handling needed by the approved audit contract;
- accessibility, focus return, keyboard behaviour, responsive layout and Global Footer integration;
- production identifiers supplied specifically for `site_scope=tio2-my`.

### 5.2 Must not copy

- TITAN GTM container ID, GA4 measurement ID or other analytics identifiers;
- TITAN Web3Forms access key, receiver or form configuration;
- TITAN domain, company, addresses, email, phone or privacy text;
- TITAN local-storage key or event namespace without site-specific replacement;
- TITAN product, document, analytics-provider or hosting facts as TiO2 Malaysia facts.
- any supposed TITAN `Terms of Use`, governing-law or dispute clause; no such TITAN page was identified and the user explicitly confirmed that it does not exist.

### 5.3 Category behaviour

- Necessary remains always active only for genuinely necessary operations and consent-state storage.
- Analytics controls GA4 when GA4 is actually enabled.
- Advertising controls Google Ads measurement when Google Ads is actually enabled.
- Advertising consent must not enable personalization, remarketing or audiences.
- Categories not backed by active production technology must not be falsely described as active.

## 6. CMP decision effect

Current preferred implementation direction:

`CUSTOM CONSENT MANAGER USING USER-AUTHORIZED LOCAL TITAN CODE AS A REUSE INPUT`

A paid third-party CMP vendor is not currently required. If Gate 7/8 analysis finds that the custom implementation cannot satisfy consent records, multilingual UI, withdrawal, Google signal correctness, accessibility or ongoing maintenance, a third-party CMP becomes a controlled change proposal rather than an automatic substitution.

## 7. Gate 7–9 evidence contract

Before release, the external implementation and read-only QA must verify:

1. consent defaults execute before GTM/Google tags;
2. denied-state Cookie/Local Storage behaviour matches the approved categories;
3. actual cookieless requests before choice and after rejection are inventoried;
4. Accept, Reject, granular Save and withdrawal update the correct signals;
5. `ad_personalization` stays denied in every state;
6. no remarketing/audience tag or identifier is active;
7. non-consent-aware optional third-party tags do not fire before permission;
8. displayed consent text, choices, version, affirmative decision date/time and withdrawal path are retained as required by the approved audit contract;
9. Privacy Policy and Cookie Policy match observed network/storage behaviour;
10. Desktop, Tablet, Mobile, keyboard, focus and screen-reader behaviour pass;
11. no TITAN production ID, key, receiver, branding or data leaks into `site_scope=tio2-my`.

## 8. Authority boundary

This decision authorizes the Advanced Mode direction and records code-reuse permission. It does not authorize implementation, code copying, code editing, CMS work, deployment, DNS, publication or indexing from `D:\23MySec`.

The reusable local source must be consumed only inside an appropriately authorized `D:\16Wordpress_nextjs` development task under that project's own governance.
