# APP-INK Gate 3 candidate Manifest V0.3

## Control

| Field | Value |
|---|---|
| Page ID | `APP-INK` |
| Candidate status | `DRAFT_FOR_PROJECT_CONTROL_REREVIEW` |
| Gate state | `GATE_3_OPEN / F01-F02_CLOSED_BY_R1 / F03_REVISED_PENDING_SAME_REVIEWER` |
| Gate 4 | `NOT_AUTHORIZED / NOT_STARTED` |
| Approved page authority | [Current page Manifest V0.3](../../APP-INK_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md) remains unchanged |
| Prior candidate history | [Candidate Manifest V0.2](APP-INK_GATE3_CANDIDATE_MANIFEST_V0.2.md), 4,474 bytes, SHA-256 `b66c7ea3a4264a26375ce97ed510a0c58e60647267f73dc4a807dcf11aa7c724` |
| R1 report | [Project Control Rereview V0.1](../../05_review/APP-INK_GATE3_PROJECT_CONTROL_REREVIEW_V0.1.md), 13,974 bytes, SHA-256 `234b73c53f0a68edb5344e2912c3743e132d07d022028ab453e8b957a00201e1` |

This V0.3 candidate Manifest changes only the delivery pointer for the document-only F03 residual. It does not replace the approved page Manifest, change the frozen source, rerun evidence, close Gate 3 or authorize Gate 4.

## Unchanged frozen and approved identities

| Object | Bytes | SHA-256 | Status |
|---|---:|---|---|
| Approved A V0.1 | 5,228 | `bbb3a2bbd55d0140c4cfbef2c7e929e5f7f5c47478671b50aeff72f33e5554a6` | `MATCH` |
| Approved B V0.2 | 11,781 | `b5a92976f526fcfee74fdf088ec9ea3ef21456e5ba66965f79c50ec4dd5c938d` | `MATCH / SOLE_VISIBLE_COPY_SOURCE` |
| Approved C V0.2 | 8,927 | `11883e118e017e7886d91a3a6400150fcc92e3972b56847aafecc9250e960dc3` | `MATCH` |
| [Responsive source V0.2](APP-INK_GATE3_RESPONSIVE_WIREFRAME_V0.2.html) | 30,161 | `8e8353dad4aacf9ca20821ae2240a3398684b201a6e92fec5ef28d4fd61c1f63` | `UNCHANGED_FROZEN_SOURCE` |
| [Preflight V0.2](APP-INK_GATE3_PREFLIGHT_RECORD_V0.2.json) | 9,113 | `fe7222e68a15e713b8dc5259f5274a4f034282d9e5a42b09461aecec9c53f25e` | `UNCHANGED_PASS` |
| [Freeze V0.2](APP-INK_GATE3_FREEZE_RECORD_V0.2.json) | 5,485 | `11e77aac976a3ec66e78e9bb4de328e331296c5886e20a148be8544cac092755` | `UNCHANGED` |
| [Formal observations V0.2](approval_core/APP-INK_GATE3_FORMAL_OBSERVATIONS_V0.2.json) | 30,326 | `17a60bdfc4227552e71d9790e8404b2d126f929f7e1166dbc442622dbcc43ed5` | `UNCHANGED_PASS` |
| [Asset inventory V0.2](APP-INK_GATE3_ASSET_INVENTORY_V0.2.json) | 8,650 | `137f960491b7e1c731e164fe551f6aa17bc6110f7aa140c9c0fb15e9fb52f55f` | `HISTORICAL_R1_OBJECT` |

All seven V0.2 formal PNG identities remain those accepted by R1. No image was regenerated for this document-only correction.

## Successor delivery references

| Object | Bytes | SHA-256 | Role |
|---|---:|---|---|
| [Handoff draft V0.3](../../05_review/APP-INK_GATE3_TO_GATE4_HANDOFF_DRAFT_V0.3.md) | 11,991 | `87b97a6be58e00e41ee684ed610937dd7a91949095b4cb5a5ea2b173b358e291` | `F03_CORRECTED_HANDOFF` |
| [F03 response V0.3](../../05_review/APP-INK_GATE3_REVISION_RESPONSE_V0.3.md) | 2,777 | `d6760b3acf3c8de3525b52214b3b88545d86afbff1d616da649ff0b6d245556b` | `EXECUTION_RESPONSE` |
| [Delivery inventory V0.3](APP-INK_GATE3_ASSET_INVENTORY_V0.3.json) | generated after this Manifest | SHA-256 reported with the rereview submission | `CURRENT_REREVIEW_DELIVERY_INDEX` |

## Finding disposition

- `APP-INK-G3-PCR-F01`: `CLOSED_BY_INDEPENDENT_REREVIEW_R1`.
- `APP-INK-G3-PCR-F02`: `CLOSED_BY_INDEPENDENT_REREVIEW_R1`.
- `APP-INK-G3-PCR-F03`: collective receiving condition removed; `CONV-DOC`, `CONV-SAMPLE` and `CONV-RFQ` now each reproduce only its approved C §3 context; `REVISED_PENDING_SAME_REVIEWER_REREVIEW`.

No approval or closure is asserted by this candidate Manifest.
