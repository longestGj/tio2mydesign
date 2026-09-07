# CONV-SAMPLE Full Visual Design V0.4 — Form-first Order

> `SUPERSEDED / HISTORICAL`. The current Gate 5 review candidate is `CONV-SAMPLE_FULL_VISUAL_DESIGN_V0.5.md`, which adds the final Buyer-visible privacy notice, required 768px evidence, destination text input and reader-first copy. This file remains for traceability only.

## Document Control

| Field | Value |
|---|---|
| Page | `CONV-SAMPLE` / `/request-sample/` |
| Gate | Gate 5 directed visual revision |
| Date | 2026-09-01 |
| Parent | V0.3 Desktop single-column revision |
| Status | `GATE_5_V0.4_REVISION_SUBMITTED / NOT_APPROVED / RELEASE_BLOCKED` |
| User direction | Adjust the positions of Human Review and Sample Request |

## Revision

V0.4 preserves the corrected single-column Desktop layout and exchanges the two module positions:

1. `Sample Request` full-width form.
2. `Human Review` full-width horizontal process band.
3. FAQ.

This makes the primary task immediately actionable after the Hero. Human Review remains adjacent to the submission area and explains the post-submit process before the FAQ. No right sidebar, sticky behavior or empty rail is reintroduced.

The 390px layout already used this order, so its structure remains unchanged.

## Unchanged Contracts

- Buyer-facing internal terminology remains absent.
- Malaysia-origin appears once in the Hero context.
- Success remains receipt for human review only.
- PRODUCT V0.3 prefill and comparison restrictions remain unchanged.
- Global Chrome and permanent RFQ remain unchanged.
- Privacy, receiver, route, idempotency and fallback remain release blockers.

## Verification

| Check | Result |
|---|---|
| V0.4 formal assets | PASS — 15/15 |
| Desktop form precedes Human Review | PASS |
| Form and Human Review width delta | PASS — 0px |
| Desktop/390px horizontal overflow | PASS — none |
| 390px minimum target | PASS — 44px |
| Buyer-facing internal terms | PASS — 0 |
| RFQ and CURRENT contract | PASS |

## Key Assets

- `assets/CONV-SAMPLE_G5_DESKTOP_1440_UNPREFILLED_BUYER_CLEAN_V0.4.png`
- `assets/CONV-SAMPLE_G5_DESKTOP_1440_PREFILLED_BUYER_CLEAN_V0.4.png`
- `assets/CONV-SAMPLE_G5_DESKTOP_1440_SUCCESS_BUYER_CLEAN_V0.4.png`
- `assets/CONV-SAMPLE_G5_MOBILE_390_UNPREFILLED_BUYER_CLEAN_V0.4.png`
- Remaining required Mobile and state-board frames use the same V0.4 suffix.

## Gate Decision

V0.4 is the current Gate 5 visual review candidate and supersedes V0.3 for module-order review. It is submitted, not approved, and not releasable while P0 privacy/submission-system blockers remain open.

## Version Record

| Version | Date | Change | Approval source |
|---|---|---|---|
| V0.4 | 2026-09-01 | Swapped Desktop module order to Sample Request first and Human Review second while retaining the full-width single-column composition | User-directed revision; submitted, not approved |
