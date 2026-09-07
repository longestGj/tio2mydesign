# CONV-RFQ Gate 7 Acceptance and Blockers V1.1

## 0. Control

| Field | Value |
|---|---|
| Package | `CONV-RFQ-G7-HANDOFF-01` |
| Review | `CONV-RFQ-G7-PCR-02` |
| Status | `TARGETED_REVISION / DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 8 / development | `LOCKED / NOT_AUTHORIZED` |

V1.1 supersedes V1.0 for responsibility assignment only. All unchanged Gate 8/9 acceptance, blockers, privacy, analytics, responsive, Schema and rollback criteria remain current.

## 1. Corrected Gate 8 responsibility list

If CONV-RFQ Gate 8 is separately authorized, it must:

1. implement only `/request-a-quote/`, its approved content/form/receiver integration and `tio2-my` local configuration;
2. render the approved short Privacy notice/link and provide actual RFQ data-flow facts to the independent Legal/Privacy owner;
3. render both required low-weight sibling links and consume their external readiness;
4. consume shared Header/Footer/Menu, legal links, CMP/Cookie UI/consent signal and Production SVG without a private fork;
5. implement local Title/Meta/canonical/Schema/a11y and privacy-safe analytics event semantics;
6. verify external dependency integration and report blockers.

CONV-RFQ Gate 8 must not implement:

- Privacy Policy page/route/body;
- shared Header/Footer/Mobile Menu or legal Footer system;
- Cookie Banner, Cookie Settings, CMP or shared consent platform;
- `/request-sample/` page/workflow;
- `/request-documents/` page/workflow.

## 2. Blocker ownership matrix

| Blocker | Implementation owner | RFQ Gate 8 obligation | Gate 9/release rule |
|---|---|---|---|
| RFQ page/form/receiver | CONV-RFQ | implement | RFQ QA/release blocker |
| Privacy Policy/final disclosure | Legal/Privacy Page ID owner | short notice/link, supply actual data-flow facts, consume readiness | cross-page release blocker |
| retention/processors/transfers/rights | Legal/Privacy owner with RFQ operational input | document RFQ facts | cross-owner release blocker |
| Header/Footer/Menu/legal links | Home/Global Chrome/Legal shared owner | consume/verify | shared release blocker |
| CMP/Cookies/consent | Consent shared owner | consume consent; gate local events | shared release blocker |
| Sample route/workflow | CONV-SAMPLE | retain/render link; consume readiness | cross-page release blocker |
| Documents route/workflow | CONV-DOC | retain/render link; consume readiness | cross-page release blocker |

## 3. Gate 9 evidence by owner

- CONV-RFQ evidence: page/form/receiver, states, metadata/Schema, a11y, local analytics events and dependency-consumption output.
- Legal/Privacy evidence: actual policy route/body and parity with RFQ/Web3Forms data flow.
- Global Chrome/Consent evidence: shared Header/Footer/Menu/legal links/CMP/Cookie Settings/consent behavior.
- CONV-SAMPLE evidence: `/request-sample/` functional workflow.
- CONV-DOC evidence: `/request-documents/` functional workflow.

RFQ Gate 9 consumes the relevant cross-page/shared evidence for complete-site readiness; it does not take ownership of their implementation.

## 4. Required final-system link behavior

Both links remain visible and exact in CONV-RFQ. Not-ready external routes block Gate 9/complete-site release. Prohibited responses remain placeholder, hidden, disabled, removed, merged, Contact/email/phone/RFQ fallback or RFQ-local sibling-page implementation.

## 5. Privacy/consent/analytics acceptance

- Short form notice and link exact.
- Policy owner uses actual RFQ receiver/Web3Forms facts; RFQ does not fabricate policy content.
- Shared CMP/consent owner controls platform; RFQ local events consume its signal.
- GA4/GTM local success only on explicit receipt-confirmed and applicable consent.
- No form values/errors in analytics; no remarketing/audience; no Turnstile/reCAPTCHA.

## 6. Release/rollback

Dependency failure records the correct owner and blocks release. Rollback must not replace an external dependency with an RFQ-local clone, other site scope, stale policy, Contact fallback or hidden link. Gate 5 Buyer Clean remains unchanged.

## 7. Preserved V1.0 acceptance

Exact fields/options/errors, prefill/query/canonical, receiver states, PRODUCT V0.3, Global Chrome consumption, `site_scope`, responsive/a11y, Gate 9 QA matrix and all unrelated blockers remain unchanged.

## 8. Boundary

Gate 7 remains not approved. This is no handoff and no Gate 8/development authorization.

