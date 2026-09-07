# CONV-SAMPLE Gate 7 Project-control Closure V0.1

## 0. Decision Record

| Field | Value |
|---|---|
| Package ID | `CONV-SAMPLE-G7-HANDOFF-01` |
| Review ID | `CONV-SAMPLE-G7-PCR-01` |
| Date | 2026-09-03 |
| Decision | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Decisions | `S-G7-D01`–`S-G7-D10 = PASS` |
| Page lifecycle | `APPROVED_FOR_HANDOFF` |
| Handoff | `HANDED_OFF=NO` |
| Gate 8 / development | `LOCKED / NOT_AUTHORIZED` |
| Decision source | project-control task `01a04b7e-5fed-7171-ae92-e946cfd7bdae` |

This closure records project-control approval of the Gate 7 development-delivery specification. It is not an actual handoff, Gate 8 authorization, development authorization or release decision.

## 1. Closed Decisions

Project control passed all ten Gate 7 decisions with no P0/P1 correction:

- approved authority chain and Gate 5/Gate 6 roots;
- exact page/content/composition contract;
- fields, enums, maximums, validation and prefill mapping;
- receiver, persistence, positive acknowledgement and idempotency semantics;
- Privacy and shared-owner responsibility;
- PRODUCT V0.3 and prohibited claims;
- SEO/GEO/Schema/canonical/indexing contract;
- responsive/accessibility/state acceptance;
- Global Chrome and cross-page prefill ownership;
- `site_scope`, security, Gate 8/9, blockers and rollback.

## 2. Approved Maximum-length Contract

| Field | Maximum characters |
|---|---:|
| `application_other` | 500 |
| `test_objective` | 2000 |
| `current_grade_or_target` | 1000 |
| `contact_name` | 120 |
| `company_organisation` | 200 |
| `business_email` | 254 |
| `destination_country_market` | 120 |
| `expected_project_annual_use` | 500 |
| `additional_context` | 2000 |

Implementation must expose accessible over-limit errors and preserve the buyer's value for correction. Silent truncation is prohibited.

## 3. Approved Package

`CONV-SAMPLE-G7-HANDOFF-01` is the sole approved Request a Sample Gate 8 development-delivery baseline. The reviewed file/hash ledger remains frozen in `CONV-SAMPLE_GATE7_MANIFEST_V0.1.md`; the post-closure Manifest controls current status.

The package preserves the approved V0.5 Gate 5 visual/content root, the Gate 6 contract set and all 16 unchanged PNG assets.

## 4. Lifecycle and Handoff Boundary

- Page lifecycle is `APPROVED_FOR_HANDOFF`.
- `HANDED_OFF=NO` until an actual development task confirms receipt.
- Gate 8 remains `LOCKED / NOT_AUTHORIZED`.
- No package may be treated as handed off merely because Gate 7 is approved.
- The receiving development task, host/project and receipt evidence must be recorded before changing handoff state.

## 5. External Dependencies

Privacy Policy, receiver/persistence/idempotency, upstream prefill, shared Global Chrome/consent and canonical/indexing readiness remain Gate 8 implementation, Gate 9 read-only QA and Gate 10 release controls as assigned in the approved package. They do not reopen Gate 7.

## 6. Final Status

`CONV-SAMPLE-G7-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`

`Package CONV-SAMPLE-G7-HANDOFF-01 = APPROVED_GATE_8_DEVELOPMENT_DELIVERY_BASELINE / NOT_HANDED_OFF`

`Page lifecycle = APPROVED_FOR_HANDOFF`

`Gate 8 / development / D16 = LOCKED / NOT_AUTHORIZED`

