# MARKET-EU-PL Gate 2 Full Copy Revision Response V0.1

## Control

| Field | Value |
|---|---|
| Date / phase | 2026-09-06 / Gate 2 Full Copy targeted revision |
| Finding | `PC-PL-FULL-01` |
| Revised B | `04_planning/MARKET-EU-PL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` |
| Revised C | `04_planning/MARKET-EU-PL_GATE2_CONTENT_CONTRACT_V0.4.md` |
| Status | `REVISED / PENDING_INDEPENDENT_FULL_COPY_REVIEWER_VERIFICATION` |

## Exact revision

Before:

> Tell us the product or current requirement, application, required or estimated quantity, and delivery location in Poland. If the exact grade is not yet known, choose “Not sure / Need help.” If you are considering more than one grade, add that context in Additional Requirements.

After:

> Tell us about your current requirement, including the application, required or estimated quantity, and delivery location in Poland. Select the product or grade you are evaluating, or choose “Not sure / Need help” if you have not decided yet.
>
> If you are considering more than one grade, add that context in Additional Requirements.

The existing after-submit sentence remains unchanged:

> Our team will review your requirements and contact you using the details provided.

## Acceptance-condition self-check

- **Naturalness and order:** `current requirement` now introduces application, required or estimated quantity and Poland delivery location as its parts. Product / Grade is handled by the following selector instruction.
- **Unknown Grade:** `Not sure / Need help` remains an explicit valid route when the buyer has not decided.
- **Estimated quantity:** `required or estimated quantity` is unchanged.
- **Receiver cardinality:** the copy still describes one Product / Grade selector. More-than-one-Grade context remains directed to the existing `Additional Requirements` field; no multi-select, repeated row or new field is implied.
- **After-submit boundary:** the clean human-review-and-contact sentence is unchanged and adds no quote, availability, delivery or response-time promise.

## Changed and adjacent Buyer cold read

1. **Buyer burden:** The revised sequence asks for one current requirement, names the minimum known context, and permits both an estimated quantity and an undecided Grade. It does not add a new task.
2. **Action and result:** Product / Grade selection now maps directly to the current RFQ selector. The adjacent multi-Grade guidance maps to `Additional Requirements`, and the after-submit result remains review and contact only.
3. **Incomplete information:** The buyer can proceed with `Not sure / Need help`, an estimated quantity, or more than one Grade under the unchanged receiver contract.
4. **Page-specific value:** Poland remains the delivery context in the revised paragraph. The revision does not alter the visible raw-material/masterbatch, coatings, plastics/masterbatch, Malaysia-origin or COO value elsewhere on the page.

No other Buyer Copy, module, Meta, CTA, fact or receiver cardinality was changed. This response does not approve Full Copy, close Gate 2 or authorize Gate 3.
