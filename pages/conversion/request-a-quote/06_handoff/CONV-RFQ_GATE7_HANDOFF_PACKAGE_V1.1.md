# CONV-RFQ Gate 7 Development Handoff Package V1.1

## 0. Control

| Field | Value |
|---|---|
| Package | `CONV-RFQ-G7-HANDOFF-01` |
| Review | `CONV-RFQ-G7-PCR-02` |
| Parent | `PCR-01 = CONDITIONAL_RETURN / NOT_APPROVED` |
| P0 | `P0-01_CROSS_PAGE_AND_SHARED_OWNER_SCOPE` |
| Status | `TARGETED_REVISION / DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 8 / development | `LOCKED / NOT_AUTHORIZED` |

V1.1 supersedes V1.0 for implementation responsibility and dependency ownership only. All exact page identity, Gate 5 visual/content, fields/options/errors, prefill/query/canonical, state, SEO/GEO/Schema, PRODUCT, responsive/accessibility and privacy-safe analytics contracts in V1.0 remain unchanged.

## 1. CONV-RFQ Gate 8 implementation scope

If separately authorized, CONV-RFQ Gate 8 may implement only:

1. `/request-a-quote/` page route and `site_scope=tio2-my` page/form configuration.
2. Approved Buyer Clean content, form fields/options/validation/states and responsive/accessibility behavior.
3. RFQ receiver/Web3Forms integration, explicit receipt acknowledgement, failure/retry and privacy-safe observability.
4. Approved short privacy notice and link rendering; alignment of the RFQ's actual data flow with the externally owned policy.
5. Required Sample/Documents link rendering and consumption of external route readiness.
6. Consumption of shared Global Header/Footer/Menu, legal Footer links, CMP/Cookie/consent signals and Production SVG.
7. Page-local Title/Meta/canonical/robots, WebPage/BreadcrumbList, prefill/query handling and PRODUCT constraints.
8. Page-local accessible interactions and privacy-safe analytics events, including receipt-confirmed-only success.

CONV-RFQ Gate 8 must not create or implement another page, shared Header/Footer/Menu, shared legal pages, CMP, Cookie Banner/Settings or a sibling workflow.

## 2. Responsibility matrix

| Dependency | Implementation owner | CONV-RFQ responsibility | Failure classification |
|---|---|---|---|
| `/request-a-quote/` page/form | CONV-RFQ Gate 8 | implement and verify | RFQ Gate 9/release blocker |
| receiver/Web3Forms integration | CONV-RFQ Gate 8 + verified operational owner | integrate, document actual data flow, require explicit receipt | RFQ Gate 9/release blocker |
| Privacy Policy page/route/body | independent Legal/Privacy Page ID and Gate package | render approved short notice/link; provide actual RFQ data-flow inputs; consume readiness | cross-page Gate 9/complete-site release blocker |
| retention/processors/transfers/rights disclosures | Legal/Privacy owner using actual system inputs | document RFQ facts/configuration; verify parity | cross-owner Gate 9/release blocker |
| Global Header/Footer/Mobile Menu | Home/Global Chrome shared owner | consume shared component; no local fork | shared-component release blocker |
| shared legal Footer links | Global Chrome/Legal shared owner | consume and verify | shared release blocker |
| Cookie Banner/Settings/CMP/consent signal | Legal/Consent shared owner | consume consent state; gate local GA4/GTM events; verify | shared Gate 9/release blocker |
| `/request-sample/` page/workflow | CONV-SAMPLE independent Gate 7/8 | render required link and consume route readiness | cross-page Gate 9/complete-site release blocker |
| `/request-documents/` page/workflow | CONV-DOC independent Gate 7/8 | render required link and consume route readiness | cross-page Gate 9/complete-site release blocker |
| Production SVG | shared Brand/Global Chrome owner | reference/consume approved asset | shared asset blocker |

## 3. Privacy Policy boundary

CONV-RFQ renders exactly:

> We use the information you provide to review and respond to your quotation request. Learn more in our Privacy Policy.

It does not create a placeholder, substitute or RFQ-private Privacy Policy. The independent Legal/Privacy page owns full controller/contact/purpose/categories/retention/processors/transfers/rights disclosure. CONV-RFQ supplies verified actual RFQ/Web3Forms data-flow facts to that owner and validates link/policy parity at Gate 9.

A missing or inaccurate policy blocks release; it does not add internal Buyer Clean text or authorize a local policy.

## 4. Shared legal/consent boundary

- Home/Global Chrome/Legal shared owner implements Header/Footer/Menu, Footer legal links, Cookie Banner, Cookie Settings, CMP and shared consent signaling.
- CONV-RFQ consumes those shared components/signals and never forks them.
- CONV-RFQ local GA4/GTM events obey the shared consent signal.
- Receipt-confirmed success may be measured only after applicable consent/measurement rules; no form values/errors enter analytics.
- Remarketing/audience remains off; Turnstile/reCAPTCHA remain absent unless a future separately approved project-wide change supersedes current authority.

## 5. Required sibling-route boundary

Both Buyer Clean links remain `REQUIRED_FINAL_SYSTEM`:

- `Request a Sample` → `/request-sample/`, implemented by CONV-SAMPLE owner.
- `Request Documents` → `/request-documents/`, implemented by CONV-DOC owner.

CONV-RFQ renders both exact links and consumes readiness. It does not implement, seed, merge or substitute either page/workflow. Readiness false blocks Gate 9/complete-site release and must not hide, disable, remove, placeholder or relink either entry to Contact/email/phone/RFQ.

## 6. External readiness consumption

Readiness is an internal typed dependency input, not Buyer Clean content:

```text
privacy_policy_ready
global_chrome_ready
shared_consent_ready
request_sample_route_ready
request_documents_route_ready
```

CONV-RFQ uses these only for validation/release reporting. The approved page continues to render final-reader links/components. A false value records the responsible owner and blocks the appropriate later gate/release; it does not trigger a conditional public renderer.

## 7. Gate 9 joint verification

RFQ Gate 9 verifies its page, form, receiver, metadata/Schema/a11y/analytics plus consumption of external dependencies. The owning page/shared tasks provide implementation evidence for Privacy, Global Chrome/consent, Sample and Documents. Cross-page readiness is assessed before complete-site release without assigning their implementation to CONV-RFQ.

## 8. Preserved Gate 7 contracts

The exact V1.0 contracts remain current for:

- all fields/options/lengths/helpers/errors and states;
- receiver receipt/failure semantics;
- prefill/query/canonical;
- SEO/GEO/Schema;
- PRODUCT V0.3;
- `site_scope` isolation;
- responsive/accessibility;
- analytics privacy and prohibited technologies;
- Gate 9 QA evidence and rollback.

## 9. Boundary

This is a targeted responsibility correction for project-control review. It does not approve Gate 7, authorize handoff or open Gate 8/development.

