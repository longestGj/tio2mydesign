# RES-TRADE-UK Gate 2 Full Copy Revision Response V0.2

## Control

| Field | Value |
|---|---|
| Page ID | `RES-TRADE-UK` |
| Re-review addressed | `RES-TRADE-UK-G2-FULL-BR-RR-01` |
| Finding | `RES-TRADE-UK-G2-BR-F03` |
| Earlier findings | `RES-TRADE-UK-G2-BR-F01 = CLOSED`; `RES-TRADE-UK-G2-BR-F02 = CLOSED` |
| Revised Buyer Copy | `RES-TRADE-UK_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md` |
| Revised content contract | `RES-TRADE-UK_GATE2_CONTENT_CONTRACT_V0.3.md` |
| Previous response | `RES-TRADE-UK_GATE2_FULL_COPY_REVISION_RESPONSE_V0.1.md` |
| Status | `F03 ADDRESSED / READY_FOR_INDEPENDENT_TARGETED_REREVIEW` |
| Date | 2026-09-07 |

This execution response records the one-sentence F03 revision. It is not independent verification, Project Control approval, user approval or Gate closure.

## F03 response — natural application and quantity prompt

**Affected locations:** B, final RFQ paragraph under `Continue the right review`; C §5, supporting `Request a Quote` receiver row and implementation-validation note.

**Before:**

> Submit your application, required quantity or a positive estimate in metric tonnes, destination and any other context you already know.

**After:**

> Tell us your application, required or estimated quantity in metric tonnes, destination and any other context you already know.

**Acceptance self-check:**

- `Tell us your application` reads as the product use/application context rather than a request to submit an application document.
- `required or estimated quantity in metric tonnes` remains visible in natural buyer language.
- `positive estimate` is absent from Buyer Copy.
- C retains the unchanged implementation validation that `Required Quantity` must be a positive numeric value in metric tonnes, outside Buyer Copy.
- The known Product / Grade and `Not sure / Need help` routes remain visible.
- Team review/contact behavior and the complete no-customs-result boundary remain unchanged.

`RES-TRADE-UK-G2-BR-F03 = ADDRESSED_PENDING_INDEPENDENT_VERIFICATION`

## Exact version diff and preservation

- B V0.2 → V0.3 changes only the file version label and the single quoted RFQ input sentence.
- C V0.2 → V0.3 changes only the file version/status/Buyer-copy pointer, the same RFQ input wording in §5, and separates the unchanged positive-number rule into an implementation-validation note.
- F01 and F02 remain closed: unknown Grade remains accepted; `commercial response` remains absent; the post-submit result remains review of requirements/details followed by contact using the information provided.
- Every other Buyer Copy sentence and stable contract rule remains unchanged, including AD0086 facts, goods/CAS/codes, conditional liability, GB/Northern Ireland, Malaysia-origin boundary, CTA hierarchy, SEO/GEO/Schema, sources and freshness.

## Current artifacts

| Artifact | SHA-256 |
|---|---|
| `RES-TRADE-UK_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md` | `E2DF4CA206FC64E984F57D6171B3037D665F279C786405A4081EBB2E63C7AC97` |
| `RES-TRADE-UK_GATE2_CONTENT_CONTRACT_V0.3.md` | `4646C0B0F5DDF52065B574F82A1D2AE18DDA2718C0EEA1041F61A5CC7875E330` |
| `RES-TRADE-UK_GATE2_FULL_COPY_BUYER_REREVIEW_V0.1.md` | `89B3DBAEBF94A22A217A79EE65AEDCCA05B2E2BAD65CDFF339300BD808E8A810` |

## Stop

`NEXT = INDEPENDENT_TARGETED_BUYER_REREVIEW`

`GATE2 = OPEN`

`GATE3 = NOT_STARTED / NOT_AUTHORIZED`
