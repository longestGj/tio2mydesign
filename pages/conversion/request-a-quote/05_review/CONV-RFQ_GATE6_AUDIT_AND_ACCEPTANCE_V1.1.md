# CONV-RFQ Gate 6 Audit and Acceptance V1.1

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Review ID | `CONV-RFQ-G6-PCR-02` |
| Status | `TARGETED_REVISION / DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Parent | `PCR-01 = CONDITIONAL_RETURN / NOT_APPROVED` |
| Targeted P0 | `P0-01_COMPLETE_SITE_SIBLING_ROUTES` |
| Gate 7 / development | `LOCKED / NOT_AUTHORIZED` |

V1.1 supersedes Audit V1.0. G6-D01–D05 and G6-D07–D10 remain unchanged; G6-D06 is revised only for the two complete-site sibling route dependencies.

## 1. Gate 6 audit outcome

| Audit area | Result |
|---|---|
| Identity/URL/keyword | PASS |
| Buyer Clean and approved Gate 5 copy | PASS |
| Minimum-data/unknown-grade contract | PASS |
| Privacy notice and later actual-data-flow dependency | PASS FOR GATE 6 |
| Validation/focus/error/state machine | PASS |
| Receipt-only success and no commercial promise | PASS |
| PRODUCT V0.3 | PASS |
| Global Chrome V0.5 and shared legal system | PASS |
| Responsive/accessibility | PASS FOR LATER HANDOFF |
| SEO/GEO/Schema parity | PASS |
| `site_scope=tio2-my` isolation | PASS AS CONTRACT |
| CMS/API/component inventory | PASS |
| Gate 7/8/9 acceptance | PASS |
| Complete-site Sample/Documents links | PASS AFTER PCR-02 REVISION — both required; no conditional renderer |

## 2. Minimum-data and state contracts retained

Required fields remain Product/Grade, Application, positive quantity in MT, Destination Country, Company Name, Your Name and Business Email. Port/City, Phone/WhatsApp, Website and Additional Requirements remain optional. No payment, ID, residential address, upload, confidential formulation or marketing-consent field is introduced.

First-load neutral, editable prefill, focus/error summary, value retention, submitting/duplicate prevention, failure/retry, explicit receipt-only success and unavailable-state semantics remain unchanged.

## 3. Complete-site sibling-route acceptance

`Other request types` is part of the approved final-reader page and always contains two required low-weight links:

1. `Request a Sample` → `/request-sample/`.
2. `Request Documents` → `/request-documents/`.

Required acceptance:

- both links remain visible in approved planning/implementation intent;
- both destinations must be implemented at Gate 8 and verified accessible at Gate 9 before complete-site release;
- readiness false does not hide, disable, remove or relink either entry;
- neither entry may fall back to `/contact/`, email, phone or the RFQ form;
- the two workflows remain separate and do not submit RFQ data;
- deletion, destination change or workflow merge requires user-approved change control.

## 4. Updated open-item classification

| ID | Open input | Classification |
|---|---|---|
| `RFQ-G6-O01` | RFQ route/form/receiver readiness | Gate 8 implementation; Gate 9/release blocker |
| `RFQ-G6-O02` | receiver/owner/Web3Forms/positive receipt/observability | Gate 7 contract; Gate 8/9 |
| `RFQ-G6-O03` | Privacy Policy route/final disclosure | Gate 8; Gate 9; final user confirmation before release |
| `RFQ-G6-O04` | privacy contact/retention/processors/transfers/Cookie inventory | Gate 7/8/9 |
| `RFQ-G6-O05` | shared Footer legal links/Cookie Settings | shared Gate 8 implementation; Gate 9/release blocker |
| `RFQ-G6-O06` | `/request-sample/` and `/request-documents/` routes plus exact links | `REQUIRED_FINAL_SYSTEM`; Gate 8 implementation and Gate 9/release blocker; no conditional hide/disable/Contact fallback |
| `RFQ-G6-O07` | canonical equivalence/robots/indexing | Gate 9; Gate 10/user release decision |

## 5. Product/SEO/Schema/Chrome boundaries retained

- M-2377 neutral context only; Specialty Materials relation, Rubber taxonomy and M-996/M-2196 comparison remain frozen.
- Approved natural Title/Meta and WebPage + BreadcrumbList-only Schema remain.
- Global Header/Footer/Menu fixed RFQ remains visible and points to `/request-a-quote/`.
- The two sibling links are page-body task switches, not Global Chrome additions.

## 6. Requested disposition

Project control is asked to review PCR-02 only. Gate 6 remains not approved until that decision. Gate 7 and development remain locked.

