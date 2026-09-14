# LEGAL-PRIV-MS Current GA4 Launch Delivery Manifest V1.4

| Field | Value |
|---|---|
| Page / URL | `LEGAL-PRIV-MS` / `/ms/privacy-policy/` |
| Base content authority | `pages/legal-privacy/04_planning/LEGAL-PRIV-MS_GATE2_FULL_COPY_V0.2.md` |
| GA4 activation overlay | `docs/architecture/TIO2_MY_GA4_LEGAL_CONTENT_DELIVERY_V1.0.md` §4 |
| English parity source | `docs/architecture/TIO2_MY_GA4_LEGAL_CONTENT_DELIVERY_V1.0.md` §3 |
| Data-flow authority | `docs/architecture/LEGAL_PRIVACY_GATE1_DATA_FLOW_AND_EVIDENCE_V1.1.md` |
| Current stage | `GATE_6_DEVELOPMENT_DELIVERY_READY / TARGETED_GATE_9_REVALIDATION_REQUIRED` |
| Active-copy state | `CONDITIONAL_ON_GATE_8_9_GA4_EVIDENCE` |
| Lifecycle | `READ_ONLY_QA_APPROVED_BASELINE / TARGETED_REOPEN_FOR_GA4_LAUNCH_CHANGE` |
| Final legal/privacy confirmation owner | User |
| Gate 10 | `NOT_AUTHORIZED / NOT_STARTED` |

## Current authority composition

The approved V0.2 BM policy remains the authority for unchanged content. The BM replacements in GA4 Legal Content Delivery V1.0 §4 are the section-by-section legal-meaning counterpart of the English replacements in §3. They must activate in the same release and carry the same effective date.

SEO identity remains: `Dasar Privasi | TiO2 Malaysia`, canonical `https://tio2malaysia.com/ms/privacy-policy/`, reciprocal `ms-MY` / `en` with `x-default=en`, `index,follow`, and `WebPage` + `BreadcrumbList` with `inLanguage=ms-MY`.

## Activation and release controls

- Gate 8 binds one EN/BM content version and the common consent/runtime configuration.
- Gate 9 compares every changed provider, purpose, consent, storage and withdrawal statement across EN and BM and verifies reciprocal hreflang.
- The user is the final project confirmation owner under `WEBSITE_LEGAL_PRIVACY_FRAMEWORK_ADOPTION_V1.0.md`; no separate external-lawyer gate is created.
- Runtime parity, production evidence and Gate 10 remain required.

V1.3 remains historical evidence for the pre-GA4 post-Gate 9 runtime. This V1.4 file is the current D23 Gate 6 delivery pointer.
