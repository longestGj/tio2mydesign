# APP-INK Gate 3 F03 residual revision response V0.3

## Control

| Field | Value |
|---|---|
| Original review | [APP-INK-G3-PCR-01](APP-INK_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md) |
| Targeted rereview | [APP-INK-G3-PCR-01-R1](APP-INK_GATE3_PROJECT_CONTROL_REREVIEW_V0.1.md), 13,974 bytes, SHA-256 `234b73c53f0a68edb5344e2912c3743e132d07d022028ab453e8b957a00201e1` |
| Stable Finding | `APP-INK-G3-PCR-F03` |
| Response status | `REVISED / DRAFT_FOR_SAME_PROJECT_CONTROL_REVIEWER_REREVIEW` |
| Unchanged independent disposition | F01/F02 `CLOSED_BY_INDEPENDENT_REREVIEW` |
| Gate state | `GATE_3_OPEN`; no self-approval, closure or Gate 4 authorization |

## Exact correction

The reviewed [handoff V0.2](APP-INK_GATE3_TO_GATE4_HANDOFF_DRAFT_V0.2.md) remains unchanged at 10,623 bytes and SHA-256 `a8ac94d4dd245cc3e046da77180c6ab04183ce1e226396be12883f5d5e525927`. Its collective Conversion sentence is retained as the historical R1 object.

The successor [handoff V0.3](APP-INK_GATE3_TO_GATE4_HANDOFF_DRAFT_V0.3.md) is 11,991 bytes with SHA-256 `87b97a6be58e00e41ee684ed610937dd7a91949095b4cb5a5ea2b173b358e291`. Section F now assigns separate existing owners and C §3 acceptance conditions:

- `CONV-DOC`: one known Grade per request; one or more document types; separate request for another Grade; human review of availability and scope. Unknown Grade, MT and `Additional Requirements` are explicitly excluded from transfer into this route.
- `CONV-SAMPLE`: known or unknown Grade; Printing Inks application; destination; test objective; submission begins review and arrangements are confirmed separately. RFQ-only MT and `Additional Requirements` are explicitly excluded from transfer.
- `CONV-RFQ`: known lead Grade or `Not sure / Need help`; application; required or estimated MT; destination; known context; other candidate names in `Additional Requirements`; only the approved review/contact post-submit expectation.

This closes the execution-side wording gap without treating C §6 continuation as an override of C §3. It introduces no receiver implementation and no new action requirement.

## Identity and evidence boundary

No HTML, approved input, preflight, freeze, formal observation, self-check runtime result or PNG was changed or regenerated. The retained source remains 30,161 bytes, SHA-256 `8e8353dad4aacf9ca20821ae2240a3398684b201a6e92fec5ef28d4fd61c1f63`; freeze remains SHA-256 `11e77aac976a3ec66e78e9bb4de328e331296c5886e20a148be8544cac092755`. F01/F02 evidence remains the independently accepted V0.2 combination.

## Disposition

`APP-INK-G3-PCR-F03 = REVISED_PENDING_SAME_REVIEWER_REREVIEW`. This response does not close the Finding or Gate 3. Project Control must independently verify the three C §3 rows and changed delivery-reference hashes.
