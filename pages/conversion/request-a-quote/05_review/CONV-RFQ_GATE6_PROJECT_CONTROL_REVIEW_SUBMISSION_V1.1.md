# CONV-RFQ Gate 6 Project-control Review Submission V1.1

## 0. Submission control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Review ID | `CONV-RFQ-G6-PCR-02` |
| Parent | `CONV-RFQ-G6-PCR-01 = CONDITIONAL_RETURN / NOT_APPROVED` |
| Targeted P0 | `P0-01_COMPLETE_SITE_SIBLING_ROUTES` |
| Submission | `TARGETED_REVISION / DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 5 | `USER_APPROVED / CLOSED`; unchanged |
| Gate 7 / development | `LOCKED / NOT_AUTHORIZED` |

## 1. Review request

Project control is requested to re-review only the complete-site classification of the two user-approved low-weight sibling links. Gate 5 and the previously cleared G6 areas are not reopened.

## 2. Current PCR-02 files

1. `CONV-RFQ_GATE6_PROJECT_CONTROL_RETURN_V1.0.md`.
2. `CONV-RFQ_GATE6_AUTHORITY_AND_PRECEDENCE_MANIFEST_V1.1.md`.
3. `CONV-RFQ_GATE6_AUDIT_AND_ACCEPTANCE_V1.1.md`.
4. `CONV-RFQ_GATE6_CMS_API_COMPONENT_FIELD_INVENTORY_V1.1.md`.
5. `CONV-RFQ_GATE6_GATE7_9_DELIVERY_ACCEPTANCE_V1.1.md`.
6. `CONV-RFQ_GATE6_FRESH_VALIDATION_V1.1.md`.
7. `CONV-RFQ_GATE6_CURRENT_BASELINE_MANIFEST_V1.1.md`.

Unchanged current inputs:

- Gate 5 approved baseline Manifest V1.0.
- Gate 6 SEO/GEO/Schema Contract V1.0.
- Gate 6 Responsive/Accessibility/Conversion Acceptance V1.0.

## 3. Exact corrected contract

| Approved Buyer Clean link | Current field status | Later-gate requirement |
|---|---|---|
| `Request a Sample` → `/request-sample/` | `sample_route_ref = REQUIRED_FINAL_SYSTEM` | implement at Gate 8; verify at Gate 9; missing/broken blocks complete-site release |
| `Request Documents` → `/request-documents/` | `documents_route_ref = REQUIRED_FINAL_SYSTEM` | implement at Gate 8; verify at Gate 9; missing/broken blocks complete-site release |

The Other Request Types module is required and contains both links. Route-readiness false never authorizes hide, disable, removal or Contact/email/phone/RFQ fallback. A change to either entry requires user-approved page change control.

## 4. Updated open item

`RFQ-G6-O06 = REQUIRED_FINAL_SYSTEM / GATE_8_IMPLEMENTATION / GATE_9_AND_RELEASE_BLOCKER`.

There is no default `approved conditional behavior` release path. Parallel route work may continue, but both routes/links must be operational before complete-site release.

## 5. Preserved prior review result

- G6-D01–D05 and G6-D07–D10: no change and no new issue.
- G6-D06: the only returned classification is corrected by PCR-02.
- Gate 5 assets remain 12/12 hash-identical and Buyer Clean remains unchanged.

## 6. Fresh validation

P0-01 targeted checks: `10 PASS / 0 failure`.

No Gate 7, handoff, development, D16, test, deployment, publication or indexing action occurred.

## 7. Requested disposition

If the corrected required-route/link classification closes P0-01, project control may record:

`CONV-RFQ-G6-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`

with Gate 6 outcome `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE7_AUTHORIZATION`. This does not itself authorize Gate 7.

