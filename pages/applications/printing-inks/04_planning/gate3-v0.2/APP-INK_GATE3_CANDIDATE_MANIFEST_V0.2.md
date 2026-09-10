# APP-INK Gate 3 candidate Manifest V0.2

## Control

| Field | Value |
|---|---|
| Page ID | `APP-INK` |
| Candidate status | `DRAFT_FOR_PROJECT_CONTROL_REREVIEW` |
| Gate state | `GATE_3_OPEN / F01-F03_REVISED_PENDING_INDEPENDENT_REREVIEW` |
| Gate 4 | `NOT_AUTHORIZED / NOT_STARTED` |
| Approved page authority | [APP-INK Current Gate Baseline Manifest V0.3](../../APP-INK_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md) remains the unique approved page pointer |
| Review source | [APP-INK Gate 3 Project Control Review V0.1](../../05_review/APP-INK_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md), SHA-256 `090c2f4cd13b6f3d18e3e971bdbfc4e93f8c5ae33a308ff469962b9789c243ee` |

This candidate Manifest records the successor Gate 3 review object only. It does not replace the current approved page Manifest, close Gate 3, authorize Gate 4 or change Gate 2 approval.

## Approved inputs

| Input | Bytes | SHA-256 | Result |
|---|---:|---|---|
| [A V0.1](../APP-INK_GATE2_CONTENT_SKELETON_V0.1.md) | 5,228 | `bbb3a2bbd55d0140c4cfbef2c7e929e5f7f5c47478671b50aeff72f33e5554a6` | `MATCH` |
| [B V0.2](../APP-INK_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md) | 11,781 | `b5a92976f526fcfee74fdf088ec9ea3ef21456e5ba66965f79c50ec4dd5c938d` | `MATCH / SOLE_VISIBLE_COPY_SOURCE` |
| [C V0.2](../APP-INK_GATE2_CONTENT_CONTRACT_V0.2.md) | 8,927 | `11883e118e017e7886d91a3a6400150fcc92e3972b56847aafecc9250e960dc3` | `MATCH` |

## V0.2 frozen combination

| Object | Bytes | SHA-256 | Status |
|---|---:|---|---|
| [Responsive wireframe V0.2](APP-INK_GATE3_RESPONSIVE_WIREFRAME_V0.2.html) | 30,161 | `8e8353dad4aacf9ca20821ae2240a3398684b201a6e92fec5ef28d4fd61c1f63` | `FROZEN_FOR_PROJECT_CONTROL_REREVIEW` |
| [Input binding V0.2](APP-INK_GATE3_INPUT_BINDING_V0.2.json) | 6,682 | `ea279a09c3520efcb2dc96f305ef44d9b4533a30ff71a236b485ada103077b93` | `BOUND` |
| [Preflight V0.2](APP-INK_GATE3_PREFLIGHT_RECORD_V0.2.json) | 9,113 | `fe7222e68a15e713b8dc5259f5274a4f034282d9e5a42b09461aecec9c53f25e` | `PASS_FOR_FORMAL_RENDER` |
| [Freeze V0.2](APP-INK_GATE3_FREEZE_RECORD_V0.2.json) | 5,485 | `11e77aac976a3ec66e78e9bb4de328e331296c5886e20a148be8544cac092755` | `FROZEN_FOR_PROJECT_CONTROL_REREVIEW` |
| [Formal observations V0.2](approval_core/APP-INK_GATE3_FORMAL_OBSERVATIONS_V0.2.json) | 30,326 | `17a60bdfc4227552e71d9790e8404b2d126f929f7e1166dbc442622dbcc43ed5` | `PASS` |

## Formal evidence

| Evidence | Bytes | SHA-256 |
|---|---:|---|
| 1440 full | 1,081,372 | `b7cf1408e33c6cc7dde2a2cff879401598684ac02e2415eeb1ac699ce2a2766b` |
| 768 full | 1,009,070 | `c620cec20393d3c336975c9f5963444513a177b2501b19a8aa30ce2d7f781196` |
| 390 full | 1,040,190 | `77e47920c419c6fc2a5e0d65360b7be7635e3724f3e903d11a23af341c154043` |
| 768 menu | 72,097 | `7d14c5fcbc683ae9fd3201efa1bfdb2af0824141f5a5e91bbfbf6ae38385b45e` |
| 390 menu | 40,098 | `d34c3845837cfd1b97d7429a2e4b87f4f93ba4831280ebe40bb3ca15615df245` |
| 390 Grades anchor | 32,998 | `446401bdabd988ccf0e0a3157daacb0236ddc9ed771e8310baa4aba8e70f1d72` |
| 390 body-link keyboard focus | 75,769 | `01460de87a3868a232119b991c06a42424869cdb4bbf2c77cc5f8dde704a0ddf` |

The six unchanged default/state images were freshly exported after the new freeze and are pixel-identical to V0.1, as expected from a focus-only CSS correction. The seventh image records the changed keyboard-focus state.

## Finding disposition

| Finding | Execution response | Independent state |
|---|---|---|
| `APP-INK-G3-PCR-F01` | Approved Teal body focus applied; actual Tab 18/18 at each width; all focus assertions pass | `PENDING_INDEPENDENT_REREVIEW` |
| `APP-INK-G3-PCR-F02` | Handoff counts/fields corrected to B/C and DOM | `PENDING_INDEPENDENT_REREVIEW` |
| `APP-INK-G3-PCR-F03` | Shared coverage statements narrowed; V0.2 loops rerun; retained dependencies assigned owner/phase/acceptance | `PENDING_INDEPENDENT_REREVIEW` |

## Review package

- [Revision response V0.2](../../05_review/APP-INK_GATE3_REVISION_RESPONSE_V0.2.md)
- [Execution self-check V0.2](../../05_review/APP-INK_GATE3_EXECUTION_SELF_CHECK_V0.2.md)
- [Gate 3→4 handoff draft V0.2](../../05_review/APP-INK_GATE3_TO_GATE4_HANDOFF_DRAFT_V0.2.md)
- [Asset inventory V0.2](APP-INK_GATE3_ASSET_INVENTORY_V0.2.json), generated after this Manifest

## Historical continuity

V0.1 source, freeze, evidence, self-check, handoff and independent review remain retained without modification. V0.2 supersedes V0.1 only as the current Gate 3 rereview candidate; it does not supersede the approved page Manifest V0.3.
