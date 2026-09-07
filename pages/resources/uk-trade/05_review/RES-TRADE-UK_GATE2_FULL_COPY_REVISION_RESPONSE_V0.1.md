# RES-TRADE-UK Gate 2 Full Copy Revision Response V0.1

## Control

| Field | Value |
|---|---|
| Page ID | `RES-TRADE-UK` |
| Review addressed | `RES-TRADE-UK-G2-FULL-BR-01` |
| Findings | `RES-TRADE-UK-G2-BR-F01`, `RES-TRADE-UK-G2-BR-F02` |
| Formal Review | `RES-TRADE-UK_GATE2_FULL_COPY_BUYER_REVIEW_V0.1.md` |
| Revised Buyer Copy | `RES-TRADE-UK_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` |
| Revised content contract | `RES-TRADE-UK_GATE2_CONTENT_CONTRACT_V0.2.md` |
| Version | V0.1 |
| Status | `FINDINGS_ADDRESSED / READY_FOR_INDEPENDENT_REREVIEW` |
| Date | 2026-09-07 |

This is an execution response. It is not independent verification, Project Control approval, user approval or Gate closure.

## F01 response — incomplete Product / Grade path

**Affected locations:** B, final paragraph under `Continue the right review`; C §5, supporting `Request a Quote` receiver row.

**Before:**

> If you first need to compare product families, use the Product Hub. If you already have product, application, quantity and destination inputs, Request a Quote can capture them for a commercial response. A quote or supplier response does not replace the importer’s official tariff, origin and remedy checks.

**After:**

> If you first need to compare product families, use the Product Hub. You can also Request a Quote with a known Product / Grade or choose `Not sure / Need help`. Submit your application, required quantity or a positive estimate in metric tonnes, destination and any other context you already know. After submission, our team reviews your requirements and details, then contacts you using the information provided. This path does not recommend a Grade, decide technical suitability or replace the importer’s official classification, origin, tariff, VAT, remedy and clearance checks.

**Acceptance self-check:** The revised Buyer Copy now:

- exposes both a known Product / Grade and `Not sure / Need help` as valid RFQ paths;
- requests application, required quantity or a positive estimate in metric tonnes, destination and other known context;
- does not require or infer a Grade before the buyer can continue;
- does not rank or recommend a Grade or decide technical suitability; and
- keeps classification, origin, tariff, VAT, remedy and clearance outcomes outside the RFQ receiver.

`RES-TRADE-UK-G2-BR-F01 = ADDRESSED_PENDING_INDEPENDENT_VERIFICATION`

## F02 response — buyer-visible receiver result

**Affected locations:** the same B paragraph and C §5 receiver row.

**Removed wording:**

> capture them for a commercial response

**Current receiver expectation:**

> After submission, our team reviews your requirements and details, then contacts you using the information provided.

**Acceptance self-check:** The revised copy describes only the buyer-visible post-submit behavior: review of submitted requirements/details and later contact using the information provided. It does not promise or imply a quotation, price, availability, stock, lead time, order acceptance or other commercial output. C contains the same receiver expectation and no longer contains `commercial response`.

The customs boundary remains explicit: the RFQ path does not determine classification, origin, tariff, VAT, remedy or clearance.

`RES-TRADE-UK-G2-BR-F02 = ADDRESSED_PENDING_INDEPENDENT_VERIFICATION`

## Version and regression record

- B V0.1 → V0.2 changes only the file version label and the final RFQ paragraph in `Continue the right review`.
- C V0.1 → V0.2 changes only the file version label, Buyer-copy pointer and the supporting RFQ receiver row in §5.
- A, the seven-module order, Hero, dated investigation/registration facts, written goods/CAS/code scope, conditional 90-day language, timetable, shipment checklist, GB/Northern Ireland split, Malaysia-origin non-inference, tariff/VAT separation, primary/secondary CTA hierarchy, SEO/GEO/Schema, source links and freshness wording remain unchanged.
- No customs outcome, Grade choice, quotation, price, availability, lead time, order acceptance or other commercial result is supplied.

## Current artifacts

| Artifact | SHA-256 |
|---|---|
| `RES-TRADE-UK_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` | `E5B4F671150B1257678A37FA741F96DF53444EEC9CD33410ADBB5034D9B586CA` |
| `RES-TRADE-UK_GATE2_CONTENT_CONTRACT_V0.2.md` | `B7F3F0BD70E2A5D39D30ACF25DAD51BBE9CC1B30D756896835DEAB0CE8DB0368` |
| `RES-TRADE-UK_GATE2_FULL_COPY_BUYER_REVIEW_V0.1.md` | `1147C1553D80D32D120BA151CCBFDB66FEFBEF62ACC0A310D26F00C21873CE9E` |

## Stop

`NEXT = INDEPENDENT_BUYER_REREVIEW`

`GATE2 = OPEN`

`GATE3 = NOT_STARTED / NOT_AUTHORIZED`
