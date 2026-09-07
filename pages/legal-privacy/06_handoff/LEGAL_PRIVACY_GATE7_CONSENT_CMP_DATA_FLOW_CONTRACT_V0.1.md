# Legal / Privacy Gate 7 Consent / CMP / Data-Flow Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Package | `LEGAL-PRIVACY-G7-HANDOFF-01` |
| Review | `LEGAL-PRIVACY-G7-PCR-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Shared identity | `SHARED-CONSENT-TIO2-MY` |
| Site scope | `tio2-my` |
| Direction | Custom Consent Manager adapted from user-authorized local TITAN source |
| Analytics stack | GA4, GTM, Google Ads and Vercel Web Analytics are not active in the currently verified state |

## 1. CMP implementation direction

The required CMP capability is fulfilled by a site-specific custom Consent Manager unless a later controlled change approves a third-party vendor. The implementation may reuse the local TITAN consent source as an engineering input:

- source: `D:\01AICode\01TitanTitan\website_src\static\assets\js\consent.js`;
- inspected SHA-256: `92E25B2E28F2FDDE3BEEC1B18F97DA14117E0082F53C8D06DD6ADC8570E9DD69`;
- authorization: user-approved code reuse, subject to adaptation requirements.

This is not authorization to copy a production file unchanged. The implementation must replace TITAN namespace, storage key, branding, text, policy links, identifiers, events and configuration. It must add the approved consent version/decision-time handling, `site_scope=tio2-my` isolation, responsive behavior and accessibility.

A third-party CMP is not automatically selected. If the custom implementation cannot meet consent records, multilingual UI, withdrawal, Google signal sequencing, accessibility or maintainability requirements, the developer must return a change proposal with vendor, data flow, cost, Cookie inventory, migration and rollback impact. It may not substitute a vendor silently.

## 2. Mutually exclusive release states

```text
ConsentReleaseState =
  | no_optional_analytics
  | verified_google_analytics_active
```

The two states must never render together.

### 2.1 `no_optional_analytics` — current authority

- Do not load GA4, GTM, Google Ads or Vercel Web Analytics merely because the architecture supports them.
- Do not show a first-visit Analytics consent request.
- Footer `Cookie Settings` opens the approved minimal `Cookie settings` layer.
- The layer states that no optional Analytics or advertising technology is active and links to Cookie Policy.
- A same-site necessary storage record may remember the applicable privacy-setting/status version only if the final behavior and Cookie inventory match.
- Advertising and personalisation choices are not shown.

### 2.2 `verified_google_analytics_active` — conditional authority

This state may be selected only after Gate 8/9 proves the exact Google configuration, tag inventory, consent ordering, storage and network behavior.

- Before GTM or Google measurement commands, set `analytics_storage`, `ad_storage`, `ad_user_data` and `ad_personalization` to `denied`.
- The first layer uses exact Cookie V0.2 §3.2 copy.
- `Accept analytics` grants only `analytics_storage`.
- `Necessary only`, before choice and withdrawal keep all four states denied.
- `ad_storage`, `ad_user_data` and `ad_personalization` remain denied in every approved state.
- Consent-aware Google tags may load under Advanced Mode with denied storage and may send limited cookieless signals; the public disclosure and network evidence must match.
- Non-consent-aware optional tags remain blocked until permission.
- No remarketing, audience creation, advertising personalisation or advertising user-data grant is authorized.

## 3. Consent state transition contract

| Trigger | Previous choice | Resulting choice | `analytics_storage` | Three advertising states | Persistence |
|---|---|---|---|---|---|
| Initial bootstrap | none | `unset` | denied | denied | no affirmative decision recorded |
| Necessary only | any | `necessary_only` | denied | denied | version, choice and affirmative time where storage is available |
| Accept analytics | any | `analytics_accepted` | granted | denied | version, choice and affirmative time where storage is available |
| Save with Analytics off | any | `necessary_only` | denied | denied | update version/choice/time |
| Withdraw Analytics | `analytics_accepted` | `necessary_only` | denied immediately | denied | update version/choice/time |
| Close without saving | saved choice | unchanged | unchanged | denied | do not overwrite prior choice |
| Runtime failure | any | fail-safe denied | denied | denied | do not claim persistence |

The Consent runtime must expose a same-scope snapshot to page/form analytics consumers. Transport may be a typed store, context or event chosen by the external developer, but the observable state values and transitions above are mandatory.

## 4. Persistence contract

Proposed current public inventory key is exact `tio2_my_consent_v1`, first-party Local Storage, Necessary category. Its public duration is `Until browser storage is cleared or the consent version is replaced`.

Stored value must be minimal and versioned:

```text
ConsentRecord {
  site_scope: "tio2-my"
  consent_version: string
  choice: necessary_only | analytics_accepted
  decided_at: ISO-8601 datetime
}
```

- Do not store form values, email, name, destination, IP address or marketing profile in this record.
- Do not read a TITAN or another `site_scope` key as fallback.
- Invalid, missing, foreign-scope or unsupported-version records are ignored and return to the applicable unset/default state.
- If Local Storage is unavailable, apply the choice to the current runtime where possible, disclose no persistence claim, and keep optional tags denied on error.
- Clearing site data may reset the choice and cause the applicable interface to appear again.
- Any change to the exact key/value shape/lifetime requires an updated Cookie inventory and versioned contract before release.

## 5. Shared UI and accessibility behavior

- Footer `Cookie Settings` always opens the shared interface after it exists.
- Opening moves focus into the labelled region/dialog; closing returns focus to the invoking element.
- Escape/close behavior is consistent and never silently changes a saved choice.
- `Accept analytics` and `Necessary only` have equal size, visibility and effort; no optional choice is preselected.
- Detailed Settings, when applicable, labels Necessary as always active and Analytics as off by default.
- No empty Advertising or Personalisation category is displayed.
- Interface remains operable by keyboard, screen reader, touch and at 200% zoom; minimum applicable target is 44×44 CSS px.

## 6. Form and Web3Forms data-flow boundary

The current verified form flow is RFQ only:

```text
Visitor browser
  -> Web3Forms / Web3Creative endpoint
  -> configured IKHLAS enterprise mailbox
  -> authorized IKHLAS personnel and business correspondence records
```

Current RFQ payload categories are grade, application, quantity, destination country, optional destination port/city, company/contact identity, business email, optional phone/WhatsApp, optional website, optional requirements, source page/context and fixed workflow metadata. The exact form owner remains `CONV-RFQ`; Legal/Privacy consumes its verified facts.

Required Gate 8/9 configuration evidence:

| Evidence key | Required proof | Public treatment |
|---|---|---|
| `web3forms_account_owner` | account belongs to or is controlled for IKHLAS/TiO2 Malaysia | do not expose account details |
| `web3forms_access_key` | secret configured outside public CMS/client-visible content except provider-required browser transport | never place in D23, public copy, analytics or screenshots |
| `web3forms_receiver` | verified enterprise mailbox recipient | policy may show only approved public privacy/contact email |
| `web3forms_positive_receipt` | test submission positively acknowledged and received | success UI only after positive receipt |
| `web3forms_failure_path` | network/provider/limit failure remains observable and recoverable | no false success |
| `web3forms_plan_limit` | Free plan 250 monthly submissions monitored by owner | internal operational control |
| `mailbox_owner_and_monitoring` | named operational responsibility and delivery monitoring | internal control |

Web3Forms Free dashboard history of 30 days is not a deletion promise. Current provider legal terms state physical submission TTL up to three years. IKHLAS normally keeps inquiry information and related correspondence for up to three years from the last substantive interaction or closure, subject to narrow legal/dispute exceptions. These periods remain distinct.

Sample and Request Documents data categories are not added to the published Privacy Policy until those workflows provide verified field/data-flow contracts. Their absence does not authorize placeholders.

## 7. Hosting, email and provider evidence

- Production host/project, contract/DPA configuration, request/log behavior and retention must be verified before final policy release.
- Vercel hosting may not be stated as active without production evidence; Vercel Web Analytics is a separate optional service and is inactive unless separately implemented and verified.
- Email delivery/provider categories must match the actual production receiver flow.
- Web3Forms and approved provider/subprocessor disclosure must match the current provider legal set at release.
- Any new processor, storage technology or network recipient triggers policy/inventory parity review.

## 8. Analytics event privacy

- Page/form analytics consumers may receive only consent state and fixed site/page/event identity.
- No form value, field error, grade, application, quantity, destination, email, phone, website, referrer containing personal data, request token or free text enters `dataLayer`, GA4, Google Ads or other analytics.
- RFQ success measurement requires explicit positive receiver acknowledgement and the applicable Analytics choice; click/attempt does not equal conversion.
- In `no_optional_analytics`, no Analytics event transport is treated as active.

## 9. Failure and rollback

Consent runtime error, malformed record or missing configuration fails optional technologies to denied/blocked while keeping public content and the RFQ usable where possible. Rollback must not restore a TITAN key/ID, enable Basic Mode, merge release variants, hide the legal links, or introduce another site-scope fallback.

## 10. Boundary

This is a Gate 7 specification. It contains no usable credential and does not authorize Gate 8 implementation, tag activation or production release.
