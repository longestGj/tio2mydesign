# CONV-RFQ Gate 6 — Gate 7/8/9 Delivery Acceptance V1.1

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Review ID | `CONV-RFQ-G6-PCR-02` |
| Status | `TARGETED_REVISION / DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Supersedes | V1.0 |
| Gate 7 | `LOCKED / NOT_AUTHORIZED` |

V1.1 removes conditional sibling-link behavior. All other later-gate acceptance items remain unchanged.

## 1. Required Gate 7 package if separately authorized

The later handoff must include:

1. approved Gate 5 visual/content baseline;
2. approved Gate 6 identity, SEO/GEO/Schema, field, state, responsive/accessibility and site-scope contracts;
3. exact form options/limits/errors, prefill rules and receiver response semantics;
4. Global Chrome V0.5 and shared legal/privacy dependencies;
5. **required final-system** `/request-sample/` and `/request-documents/` routes and exact low-weight links;
6. Gate 8 implementation and Gate 9 read-only QA acceptance, including all release blockers.

## 2. Gate 8 external implementation items

If separately authorized after Gate 7, the external project must implement:

- `/request-a-quote/` and isolated `tio2-my` content/form configuration;
- exact approved Buyer Clean, fields, validation, responsive behavior and state machine;
- explicit positive receiver acknowledgement and safe retry/value retention;
- Privacy Policy, shared legal links, Cookie Settings and production-equivalent data-processing/consent system;
- canonical/metadata/Schema parity and privacy-safe analytics;
- `/request-sample/` as the live destination of `Request a Sample`;
- `/request-documents/` as the live destination of `Request Documents`.

During implementation, temporary route incompleteness is tracked internally. It does not authorize hiding, disabling or changing either approved link and does not authorize Contact fallback.

## 3. Gate 9 read-only QA items

Gate 9 must verify:

### RFQ route/form

- route and `site_scope` isolation;
- complete 1440/768/430/390/375/320 rendering and all form states;
- exact fields/options/errors/prefill/unknown-grade behavior;
- receiver ownership/data path/positive receipt/failure handling;
- no sensitive form values in URL, metadata, logs or analytics.

### Privacy/consent/SEO/accessibility

- Privacy notice/route, final disclosures and actual processors/retention/transfers;
- legal Footer links, Cookie Settings, Cookie inventory and approved GA4/GTM consent behavior;
- exact Title/Meta/H1/canonical/robots and WebPage + BreadcrumbList-only Schema;
- labels, focus summary, field errors, Mobile Menu focus behavior, live messages and 44px targets.

### Complete-site sibling routes

- `Request a Sample` is visible, low weight and resolves to `/request-sample/`.
- `Request Documents` is visible, low weight and resolves to `/request-documents/`.
- both routes provide their separate intended workflow;
- neither link is hidden, disabled, removed, redirected to Contact or merged into RFQ;
- both are accessible before the complete site can pass release readiness.

Failure of either sibling route/link is a Gate 9/release blocker. There is no `approved conditional behavior` default path.

## 4. Change control

If product scope later requires deletion, destination change or workflow merge for either sibling entry, the project must submit impact analysis and obtain explicit user approval. A feature flag, null CMS relationship or route readiness check cannot substitute for change control.

## 5. Release boundary

Gate 9 may pass unrelated areas while release remains blocked by either sibling route, RFQ/form, privacy/legal/Cookie/data-flow or canonical/robots readiness. Gate 10 and publication require separate user authorization. This document is not a Gate 7 package or development approval.

