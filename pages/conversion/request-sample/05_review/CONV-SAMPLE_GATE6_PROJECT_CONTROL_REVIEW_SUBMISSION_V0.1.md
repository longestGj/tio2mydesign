# CONV-SAMPLE Gate 6 Project-control Review Submission V0.1

## 0. Submission Control

| Field | Value |
|---|---|
| Page | `CONV-SAMPLE` / `/request-sample/` |
| Page type | Sample conversion page |
| Review ID | `CONV-SAMPLE-G6-PCR-01` |
| Date | 2026-09-03 |
| Gate 5 | `APPROVED / CLOSED` |
| Gate 5 baseline | `CONV-SAMPLE_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md` — `APPROVED_GATE_5_BASELINE / ACTIVE` |
| Gate 6 | `AUTHORIZED / SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 7 | `CONDITIONALLY_AUTHORIZED_AFTER_GATE_6_PROJECT_CONTROL_PASS / NOT_STARTED` |
| Development / release | `NOT_AUTHORIZED` |

## 1. Review Request

Project control is requested to review this Gate 6 package against the exact user-approved V0.5 Gate 5 baseline. The executor does not self-approve Gate 6 and has not created a Gate 7 delivery package.

The user's Gate 7 authorization is conditional: it becomes actionable only after project control passes and closes Gate 6. Until that decision is recorded, Gate 7 remains not started.

## 2. Submitted Gate 6 Authority Set

1. `CONV-SAMPLE_GATE6_AUDIT_AND_ACCEPTANCE_V0.1.md`.
2. `CONV-SAMPLE_GATE6_SEO_GEO_SCHEMA_CONTRACT_V0.1.md`.
3. `CONV-SAMPLE_GATE6_FIELD_STATE_SCOPE_AND_DEPENDENCY_CONTRACT_V0.1.md`.
4. `CONV-SAMPLE_GATE6_RESPONSIVE_ACCESSIBILITY_ACCEPTANCE_V0.1.md`.
5. `CONV-SAMPLE_GATE6_FRESH_VALIDATION_V0.1.md`.
6. `CONV-SAMPLE_GATE6_CURRENT_BASELINE_MANIFEST_V0.1.md`.

The approved Gate 5 Manifest remains the immutable visual/content root. Gate 6 adds review and later-stage acceptance contracts only.

## 3. Decisions Requested

| ID | Project-control decision |
|---|---|
| `S-G6-D01` | Page identity, `/request-sample/`, Sample conversion role, P1 priority and `titanium dioxide sample supplier` ownership remain correct. |
| `S-G6-D02` | Buyer journey and module order remain `Sample Request → Human Review → FAQ`, with receipt separated from approval or fulfilment. |
| `S-G6-D03` | Required, conditional and optional fields are the approved minimum necessary for qualified B2B sample review; Destination remains required free text. |
| `S-G6-D04` | Privacy Policy link and validation, focus, submitting, failure, success and unavailable states preserve the approved meanings. |
| `S-G6-D05` | Stock, free-sample, quantity, timing, freight, dispatch, delivery and regulatory-eligibility promises remain prohibited. |
| `S-G6-D06` | PRODUCT V0.3 and M-2377, Specialty Materials, Rubber, M-996/M-2196 and `NO_PUBLIC_MAPPING` boundaries remain intact. |
| `S-G6-D07` | SEO, GEO and Schema candidates match visible content, page ownership and anti-cannibalization boundaries. |
| `S-G6-D08` | Desktop 1440, Tablet 768, Mobile 390, Mobile Menu and critical-state evidence are sufficient for a later implementation contract. |
| `S-G6-D09` | Accessibility and runtime state acceptance are complete without treating static PNGs as production proof. |
| `S-G6-D10` | Global Chrome V0.5 is consumed as a shared contract with no page-owned Header/Footer fork and permanent RFQ routing. |
| `S-G6-D11` | `site_scope=tio2-my`, no-cross-scope fallback, upstream prefill and state/data contracts are correctly specified. |
| `S-G6-D12` | Privacy, receiver, persistence/idempotency, fallback, route and indexing work is assigned to Gate 8/9/10 rather than misclassified as a Gate 6 blocker. |

## 4. Gate 6 Reading

- The final-reader page asks for a sample request for technical evaluation, not a sample order or approval.
- The approved free-text Destination control accepts a buyer-entered country or market and does not imply shipping or regulatory qualification.
- Success means only that the receiver explicitly confirmed receipt; any sample arrangement remains separate.
- Privacy Policy and receiver readiness are complete-site implementation dependencies. Their later implementation does not justify buyer-visible placeholders and does not reopen the approved Gate 5 design.
- Shared Header, Mobile Header, Mobile Menu and Footer remain owned by Global Chrome. Request a Sample is not a first-level navigation item; Request a Quote remains permanently visible and points to `/request-a-quote/`.

## 5. Requested Disposition

Project control may pass, conditionally return or reject individual `S-G6-D01`–`S-G6-D12` decisions. Until the decision is received, Review ID `CONV-SAMPLE-G6-PCR-01` remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` and no Gate 7 artifact may be created.

