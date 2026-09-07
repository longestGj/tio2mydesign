# CONV-SAMPLE Gate 7 Manifest V0.2

## 0. Current Status

| Field | Value |
|---|---|
| Manifest ID | `CONV-SAMPLE-G7-MANIFEST-02` |
| Package ID | `CONV-SAMPLE-G7-HANDOFF-01` |
| Review ID | `CONV-SAMPLE-G7-PCR-01` |
| Date | 2026-09-03 |
| Gate 7 decision | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Decisions | `S-G7-D01`–`S-G7-D10 = PASS` |
| Package status | `APPROVED_GATE_8_DEVELOPMENT_DELIVERY_BASELINE / NOT_HANDED_OFF` |
| Page lifecycle | `APPROVED_FOR_HANDOFF` |
| Handoff | `HANDED_OFF=NO` |
| Gate 8 / development | `LOCKED / NOT_AUTHORIZED` |

This is the only current Gate 7 Manifest for CONV-SAMPLE. V0.1 remains the frozen PCR-01 submission ledger; V0.2 records project-control closure, approved package status and the current lifecycle.

## 1. Closure Authority

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `CONV-SAMPLE_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md` | 3,205 | `7ac2e673eaf3eb8289a82e26d467749562cc702209aa3778d59a0d6f7a61a252` | `S-G7-D01`–`S-G7-D10` pass, maximum-length approval and lifecycle decision |
| `CONV-SAMPLE_GATE7_MANIFEST_V0.1.md` | 4,627 | `367dcf4f7e27ca0a19647a2ad459bba46fb7bf716409c29944f0f1eb4b2fe029` | Exact PCR-01 approved-root and payload hash ledger |
| `../../../../docs/page-briefs/CONV-SAMPLE_REQUEST_SAMPLE_BRIEF_V0.1.md` | 37,352 | `39089f18f3bf4b39fee75a60d01237fab7d6b1e8ed559377a1a04d7ededc503c` | Current lifecycle, Gate decisions and handoff boundary |

The Brief path is relative to `pages/conversion/request-sample/06_handoff/` and resolves to the project-level `docs/page-briefs/` authority.

## 2. Approved Gate 7 Package

Package `CONV-SAMPLE-G7-HANDOFF-01` is the sole approved Request a Sample Gate 8 development-delivery baseline. Its exact PCR-01 file hashes are sealed by Manifest V0.1:

- `CONV-SAMPLE_GATE7_DEVELOPMENT_HANDOFF_PACKAGE_V0.1.md`;
- `CONV-SAMPLE_GATE7_CMS_API_COMPONENT_MAPPING_V0.1.md`;
- `CONV-SAMPLE_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md`;
- `CONV-SAMPLE_GATE7_FRESH_VALIDATION_V0.1.md`;
- `CONV-SAMPLE_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md` as review entry and Manifest seal.

The original `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` headers in these files remain point-in-time submission evidence. Current approval is governed by this Manifest and the Closure record.

## 3. Approved Maximum-length Contract

| Payload key | Maximum characters |
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

All over-limit errors must be accessible, name the affected field and preserve the buyer's input. Silent truncation is prohibited.

## 4. Frozen Approved Roots

- Gate 5: `CONV-SAMPLE_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md = APPROVED_GATE_5_BASELINE / ACTIVE`.
- Gate 6: `CONV-SAMPLE_GATE6_CURRENT_BASELINE_MANIFEST_V0.2.md = PROJECT_CONTROL_REVIEW_PASS / CLOSED`.
- Gate 7: `CONV-SAMPLE-G7-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`.
- Gate 5 visual evidence: all 16 V0.5 PNGs remain unchanged.

## 5. Handoff State

The package is approved for a future Gate 8 receiving task, but no task has confirmed receipt:

```text
page_lifecycle = APPROVED_FOR_HANDOFF
handoff_status = NOT_HANDED_OFF
receiving_task = NONE
gate_8 = LOCKED / NOT_AUTHORIZED
```

Do not change `HANDED_OFF=NO` until the authorized receiving development task and receipt evidence are recorded.

## 6. Later-stage Controls

- Gate 8 must implement the approved page/form/receiver/persistence/idempotency/prefill contracts and consume shared Privacy/Global Chrome/consent dependencies.
- Gate 9 must perform production-equivalent read-only QA for visuals, copy, fields, states, responsive/a11y, Privacy/receiver behavior, isolation, metadata and Schema.
- Gate 10 must block release until all route, privacy, receiver, shared-component, canonical and indexing conditions pass and the user separately authorizes release.

These statements are future acceptance contracts, not current Gate 8 authorization.

## 7. Historical Disposition

`CONV-SAMPLE_GATE7_MANIFEST_V0.1.md` is `HISTORICAL_PCR_01_SUBMISSION_LEDGER / SUPERSEDED_FOR_CURRENT_STATUS_BY_V0.2`. Its hashes remain the approved package seal.

## 8. Stop Boundary

Stop at `APPROVED_FOR_HANDOFF / HANDED_OFF=NO`. Do not execute handoff, Gate 8, development, tests, deployment, publication, DNS or indexing. Do not access or modify `D:\16Wordpress_nextjs`.
