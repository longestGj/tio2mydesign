# DOC-000 Gate 5 Project-Control Conditional Return V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Returned review | `DOC-000-G5-FULL-VISUAL-01` |
| Disposition | `CONDITIONAL_RETURN / NOT_APPROVED` |
| Date | 2026-09-02 |
| Decision source | Project-control instruction from source task `01a04b7e-5fed-7171-ae92-e946cfd7bdae` |
| Repair review | `DOC-000-G5-MOBILE-REPAIR-01` |
| Gate 6 | `NOT_AUTHORIZED` |

## 1. Returned findings

| ID | Severity | Finding | Required correction |
|---|---|---|---|
| P0-01 | P0 | Mobile H1 exceeded the 390px viewport | Use valid mobile container geometry, wrapping and typography; retest the complete page for horizontal overflow |
| P0-02 | P0 | Mobile Footer omitted Information and concatenated Explore links | Reassemble the shared Deep Navy Footer with Brand, Explore, Information, Procurement / Request a Quote and Copyright; preserve 44px minimum targets |
| P1-01 | P1 | Long FAQ questions collided with the plus action | Reserve a fixed action slot and allow multiline, auto-height question labels |

## 2. Frozen elements

- Hero `Start a Document Request` continues directly to `/request-documents/`.
- The single 14-Grade Selector remains immediately after Hero.
- Initial `Continue to Request Documents` remains visible.
- `Explore Products` remains visible.
- Desktop and Tablet composition remain unchanged.
- Six FAQ questions, shared Header and Mobile Menu remain unchanged.

## 3. Version disposition

Gate 5 V0.6 remains preserved as the returned historical submission and is not overwritten. V0.7 is the sole current targeted-repair candidate. This record does not approve Gate 5 or authorize Gate 6/7.

