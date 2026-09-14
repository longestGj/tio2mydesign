# LEGAL-PRIV-EN Current GA4 Launch Delivery Manifest V1.4

| Field | Value |
|---|---|
| Page / URL | `LEGAL-PRIV-EN` / `/privacy-policy/` |
| Base content authority | `pages/legal-privacy/04_planning/LEGAL-PRIV-EN_GATE2_FULL_COPY_V0.2.md` |
| GA4 activation overlay | `docs/architecture/TIO2_MY_GA4_LEGAL_CONTENT_DELIVERY_V1.0.md` §3 |
| Data-flow authority | `docs/architecture/LEGAL_PRIVACY_GATE1_DATA_FLOW_AND_EVIDENCE_V1.1.md` |
| Launch authority | `docs/architecture/TIO2_MY_FULL_PUBLIC_SEO_GA4_GSC_LAUNCH_DECISION_AND_SPEC_V1.0.md` |
| Current stage | `GATE_6_DEVELOPMENT_DELIVERY_READY / TARGETED_GATE_9_REVALIDATION_REQUIRED` |
| Active-copy state | `CONDITIONAL_ON_GATE_8_9_GA4_EVIDENCE` |
| Lifecycle | `READ_ONLY_QA_APPROVED_BASELINE / TARGETED_REOPEN_FOR_GA4_LAUNCH_CHANGE` |
| Gate 10 | `NOT_AUTHORIZED / NOT_STARTED` |

## Current authority composition

The approved V0.2 policy remains the authority for all unchanged content. The exact English replacements in GA4 Legal Content Delivery V1.0 §3 are the development input for the GA4-enabled release. They must activate atomically with the verified Google Analytics runtime; they are not a statement that the previously audited runtime already uses GA4.

SEO identity remains: `Privacy Policy | TiO2 Malaysia`, canonical `https://tio2malaysia.com/privacy-policy/`, reciprocal `en` / `ms-MY` with `x-default=en`, `index,follow`, and `WebPage` + `BreadcrumbList` with `inLanguage=en`.

## Activation and release controls

- Gate 8 binds the exact content version, consent configuration and final Local Storage key.
- Gate 9 verifies tag order, consent choices, withdrawal, denied-state cookieless requests, accepted-state cookies, no personal-data payloads, EN/BM equivalence and visible/machine parity.
- This page cannot use active Google wording while Cookie Policy or Cookie Settings still describes the no-Analytics state.
- Gate 9 evidence and Gate 10 release authorization remain required.

V1.3 remains historical evidence for the pre-GA4 post-Gate 9 runtime. This V1.4 file is the current D23 Gate 6 delivery pointer and does not alter that historical result.
