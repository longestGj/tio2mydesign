# CONV-SAMPLE Gate 7 Manifest V0.1

## 0. Control

| Field | Value |
|---|---|
| Manifest ID | `CONV-SAMPLE-G7-MANIFEST-01` |
| Package ID | `CONV-SAMPLE-G7-HANDOFF-01` |
| Review ID | `CONV-SAMPLE-G7-PCR-01` |
| Date | 2026-09-03 |
| Gate 6 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Handoff | `NO` |
| Gate 8 / development | `LOCKED / NOT_AUTHORIZED` |

This is the only current Gate 7 Manifest for CONV-SAMPLE. It seals the review candidate and does not approve Gate 7, perform an actual handoff or authorize Gate 8.

## 1. Approved Roots

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `../04_planning/CONV-SAMPLE_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md` | 11,425 | `63565393620162506ba06660cd4f3c9c382b74979928c2aae8a7bd955c5c2508` | Approved Gate 5 visual/content root and 16-asset ledger |
| `../05_review/CONV-SAMPLE_GATE6_CURRENT_BASELINE_MANIFEST_V0.2.md` | 3,575 | `3b95c215355d59f46c538b5862f42283c213003dcc9665b857ec327cc88874a2` | Gate 6 project-control closure and approved contract root |
| `../05_review/CONV-SAMPLE_GATE7_USER_AUTHORIZATION_RECORD_V0.1.md` | 1,626 | `c2ab49036f17adba4d1f692e49109b59c73fc7043bafdf8c6f1e3164835dcdd6` | User's conditional Gate 7 authorization, activated after Gate 6 pass |

## 2. Gate 7 Payload

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `CONV-SAMPLE_GATE7_DEVELOPMENT_HANDOFF_PACKAGE_V0.1.md` | 10,589 | `d76b4d0e176bff4cc49f2527afb394217f1df0abbe2b8c71f91abbde9f662818` | Complete page, content, states, SEO, responsive and scope contract |
| `CONV-SAMPLE_GATE7_CMS_API_COMPONENT_MAPPING_V0.1.md` | 9,139 | `8e70fa0b368d498f26d8205c80c385dd69e68cf88974a0e482a4b5a67242369d` | Fields, enums, validation, prefill, payload, response and component mapping |
| `CONV-SAMPLE_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md` | 8,058 | `6473de12365ef79b72b049efb4d9417b9d986306f83ba371fd5b2ab22c170a07` | Gate 8 implementation, Gate 9 QA, ownership, blockers and rollback |
| `CONV-SAMPLE_GATE7_FRESH_VALIDATION_V0.1.md` | 2,719 | `036762b81665778dfa8b6dc974a4f33f2a55312c225cae499cdd54d1fe3c606e` | Fresh coverage, integrity and boundary evidence |

## 3. Contract Seal

The package preserves:

- `/request-sample/`, `CONV-SAMPLE`, P1 and `titanium dioxide sample supplier`;
- approved V0.5 Buyer Clean copy, field set, module order and 16 PNGs;
- required free-text Destination control;
- Privacy Policy link, receipt-only success and failure/value-retention semantics;
- PRODUCT V0.3 relationship restrictions;
- SEO/GEO/Schema visible/machine parity;
- 1440/768/390, Mobile Menu, responsive and accessibility acceptance;
- Global Chrome consumption without page-private fork;
- `site_scope=tio2-my` and no-cross-scope fallback;
- Gate 8 implementation and Gate 9 read-only QA responsibilities.

## 4. Responsibility Seal

| Surface/dependency | Implementation owner | CONV-SAMPLE Gate 8 role if later authorized |
|---|---|---|
| `/request-sample/`, form and local state UI | CONV-SAMPLE | Implement |
| Receiver/persistence/idempotency | CONV-SAMPLE + verified operational receiver owner | Integrate, document and verify |
| Privacy Policy page/body | Legal/Privacy page owner | Render exact short notice/link, supply actual data-flow facts and consume readiness |
| Header/Footer/Mobile Menu and logos | Global Chrome/Brand owner | Consume and verify; no fork |
| Shared Cookie/CMP/consent | Legal/Consent owner | Consume shared behavior; no local clone |
| Products/Grade/Applications/Markets prefill sources | Respective page owners | Validate and consume approved explicit inputs |
| Request a Quote route in shared Chrome | CONV-RFQ/Global Chrome owners | Preserve shared route and consume readiness |

External dependency failure is a Gate 9/complete-site release blocker. It never authorizes placeholder, hidden, disabled, relinked, cloned or cross-scope fallback UI.

## 5. Decision Set

Project control is asked to decide `S-G7-D01`–`S-G7-D10` in `CONV-SAMPLE_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md`.

Until all blocking decisions pass, Gate 7 remains `NOT_APPROVED`, page lifecycle does not advance to `APPROVED_FOR_HANDOFF`, `HANDED_OFF=NO` and Gate 8 remains locked.

## 6. Hash and Change Rule

Any change to a listed root or payload file requires a new Gate 7 Manifest version and project-control review. Approved Gate 5 assets must never be overwritten to repair a Gate 7 specification issue.

## 7. Boundary

No actual handoff, Gate 8, development, code, CMS implementation, test, deployment, publication, DNS or indexing action is included. `D:\16Wordpress_nextjs` was not accessed.

