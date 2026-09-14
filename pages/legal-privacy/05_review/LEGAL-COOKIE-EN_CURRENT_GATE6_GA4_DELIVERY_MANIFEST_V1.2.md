# LEGAL-COOKIE-EN Current GA4 Launch Delivery Manifest V1.2

| Field | Value |
|---|---|
| Page / URL | `LEGAL-COOKIE-EN` / `/cookie-policy/` |
| Base content authority | `pages/legal-privacy/04_planning/LEGAL-COOKIE-EN_GATE2_FULL_COPY_V0.2.md` |
| GA4 activation overlay | `docs/architecture/TIO2_MY_GA4_LEGAL_CONTENT_DELIVERY_V1.0.md` §5 |
| Data-flow authority | `docs/architecture/LEGAL_PRIVACY_GATE1_DATA_FLOW_AND_EVIDENCE_V1.1.md` |
| Launch authority | `docs/architecture/TIO2_MY_FULL_PUBLIC_SEO_GA4_GSC_LAUNCH_DECISION_AND_SPEC_V1.0.md` |
| Current stage | `GATE_6_DEVELOPMENT_DELIVERY_READY / TARGETED_GATE_9_REVALIDATION_REQUIRED` |
| Active-copy state | `CONDITIONAL_ON_GATE_8_9_GA4_EVIDENCE` |
| Lifecycle | `READ_ONLY_QA_APPROVED_BASELINE / TARGETED_REOPEN_FOR_GA4_LAUNCH_CHANGE` |
| Gate 10 | `NOT_AUTHORIZED / NOT_STARTED` |

## Current authority composition

The approved V0.2 Cookie Policy remains the authority for unchanged definitions, browser controls, contact, SEO and the no-Analytics rollback state. GA4 Legal Content Delivery V1.0 §5 is the exact activation overlay for the GA4-enabled release.

The active inventory is incomplete until Gate 8 supplies the final canonical consent key and Gate 9 captures the actual `_ga`, property-specific GA cookie, additional storage and denied/accepted/withdrawn network states. Bracketed delivery fields are not buyer-visible content and must never render.

SEO identity remains: `Cookie Policy | TiO2 Malaysia`, canonical `https://tio2malaysia.com/cookie-policy/`, `index,follow`, and `WebPage` + `BreadcrumbList` with `inLanguage=en`.

## Activation and release controls

- The final Local Storage key must be identical in the visible inventory, configuration and runtime.
- Cookie names, domains and durations must be production-observed or configuration-verified; anticipated defaults cannot be labelled observed.
- Active Cookie Policy, Privacy EN/BM and Cookie Settings copy switches atomically with the verified GA4 runtime.
- Any unexpected storage, Google request, advertising grant, duplicate page view or personal-data parameter blocks release.
- Gate 9 evidence and Gate 10 authorization remain required.

V1.1 remains historical evidence for the no-optional-Analytics runtime. This V1.2 file is the current D23 Gate 6 delivery pointer.
