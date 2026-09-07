# CONV-RFQ Gate 6 — Gate 7/8/9 Delivery Acceptance V1.0

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Review ID | `CONV-RFQ-G6-PCR-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 7 | `LOCKED / NOT_AUTHORIZED` |

This file enumerates later acceptance requirements. It is not a Gate 7 handoff, implementation plan or authorization to access the development project.

## 1. Required Gate 7 package if separately authorized

Gate 7 must hand off a frozen, implementation-neutral contract containing:

1. Approved Gate 5 baseline Manifest and exact visual assets.
2. Gate 6 approved authority/precedence, SEO/GEO/Schema, field inventory, responsive/accessibility and state contracts.
3. `site_scope=tio2-my` isolation and no-cross-scope-fallback requirements.
4. Exact page/route identity, metadata, form options, validation rules and error strings.
5. Prefill source keys, safe discard rules, canonical/query behavior and PRODUCT V0.3 constraints.
6. Receiver interface, explicit positive receipt semantics, timeout/ambiguous failure behavior and duplicate prevention.
7. Privacy route, Web3Forms/data-flow, retention, receiver ownership, processors/transfers, CMP/Cookie and shared legal-link dependencies.
8. Global Chrome V0.5 reference; no local Header/Footer implementation fork.
9. Route readiness matrix for RFQ, Privacy, Sample and Documents.
10. Acceptance checklist for Gate 8 implementation and Gate 9 read-only QA.

## 2. Gate 8 implementation items for the external development project

If Gate 7 is later approved/handed off, the external project must implement and verify at minimum:

- registered route and isolated Malaysia page data;
- exact approved Buyer Clean content and responsive composition;
- semantic form fields/options/limits and accessible validation;
- visible/editable upstream prefill without relation inference;
- submission state machine and explicit receiver acknowledgement;
- safe retry/value retention and no Contact fallback;
- Privacy Policy link and production-equivalent data-processing disclosure;
- shared Footer legal links, Cookie Settings and approved CMP/consent behavior;
- canonical, metadata and JSON-LD parity;
- analytics/conversion events that do not expose form values or treat attempts/failures as successes;
- operational observability without leaking buyer details;
- no Turnstile/reCAPTCHA and no remarketing/audience features under current approved legal/privacy decisions;
- GA4/GTM only under approved consent behavior and actual production disclosure.

Implementation method, framework code, CMS schema and test tooling remain decisions of the authorized external project within its own repository rules.

## 3. Gate 9 read-only QA items

Gate 9 must inspect a production-equivalent result without modifying code:

### Route and visual

- `/request-a-quote/` resolves correctly with no cross-site content leakage.
- 1440/768/430/390/375/320 behavior, Header/Footer/Menu and all form states match approved intent.
- No page-level horizontal overflow, clipped H1/error/value or empty decorative band.

### Form and receiver

- all required/optional fields, option order, limits and exact errors;
- unknown grade and invalid/stale prefill paths;
- positive receiver acknowledgement required for success;
- timeout/network/server/ambiguous responses produce failure, retain values and allow retry;
- duplicate submit prevention and no sensitive URL/log/analytics leakage;
- actual receiver/owner, Web3Forms configuration, data path and delivery evidence.

### Privacy, consent and analytics

- Privacy Policy route and form notice alignment;
- final controller/contact/retention/processors/transfers match actual implementation;
- shared legal links and Cookie Settings function;
- production-equivalent Cookie/storage inventory;
- GA4/GTM consent signals and firing behavior;
- no remarketing/audience features, Turnstile or reCAPTCHA;
- no form-data values in analytics or marketing tools.

### SEO/GEO/Schema

- exact Title/Meta/H1, clean canonical equivalence and environment robots;
- WebPage + BreadcrumbList only, stable site graph references and visible/machine parity;
- no Product/Offer/price/availability/FAQ/HowTo/Contact or submitted-data Schema;
- query/prefill variants canonicalize cleanly and do not index private values.

### Accessibility and security behavior

- labels, keyboard order, focus/error summary, menu trap/Escape/return, live messages and 44px targets;
- safe handling/escaping of long and adversarial text without layout or output injection;
- no credentials, payment or confidential upload fields introduced.

## 4. Release blockers after implementation

Gate 9 may pass design/technical QA while release remains blocked. Gate 10/user release authorization requires verified operational route/form, privacy/legal/cookie/data-flow, receiver ownership, canonical/robots, required sibling links or approved conditional behavior, and no unresolved P0 issue.

`APPROVED_FOR_HANDOFF`, `HANDED_OFF` or `READ_ONLY_QA_APPROVED` never equals `PUBLISHED`.

