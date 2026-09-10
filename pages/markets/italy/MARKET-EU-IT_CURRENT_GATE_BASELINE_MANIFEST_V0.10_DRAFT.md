# MARKET-EU-IT Current Gate Baseline Manifest V0.10 — Draft

## 0. Candidate state

| Field | Value |
|---|---|
| Page ID / URL | `MARKET-EU-IT` / `/markets/italy/` |
| Site scope | `tio2-my` |
| Current authoritative Manifest | `MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md` / `9ec2c79f1ad0e8b4ec1145b729cbc77f69663788acc49b20ac2bdac9382885ca` |
| Gate 1–3 | `APPROVED / CLOSED` |
| Gate 4 V0.1 execution | `COMPLETE / RETAINED` |
| Gate 4 V0.1 independent review | `PASS / RETAINED` |
| Project Control Finding | `IT-G4-PC-R01 / OPEN PENDING INDEPENDENT REREVIEW` |
| V0.2 remediation | `COMPLETE / FROZEN / READY_FOR_INDEPENDENT_REREVIEW` |
| Gate 4 approval / closure | `NOT RECORDED / NOT CLOSED` |
| Gate 6 / development / release | `NOT STARTED / NOT AUTHORIZED` |

V0.10 is a remediation review draft. V0.9 remains the current authoritative Manifest until an independent reviewer closes `IT-G4-PC-R01` and subsequent controller conditions are satisfied.

## 1. V0.2 remediation package

| Role | Path | SHA-256 | State |
|---|---|---|---|
| Workset | `04_planning/gate4-v0.2/MARKET-EU-IT_GATE4_WORKSET_V0.2.json` | `8b6184506c2aad2f2c19fe2a89443c0da4e007fbf9472c6f3fd512e598c96a0c` | `IT-G4-COMPLETE-20260907-02` |
| Input index | `04_planning/gate4-v0.2/MARKET-EU-IT_GATE4_INPUT_INDEX_V0.2.json` | `912a4992584b9eda13cfed869338b77eb86c269783046caa0e07ef84cc1e6e9a` | `60 INPUTS` |
| Image identity verification | `04_planning/gate4-v0.2/MARKET-EU-IT_GATE4_IMAGE_IDENTITY_VERIFICATION_V0.2.json` | `0ed8500e59e8592808b110026514ab4500df7c34a45fa994fb7d9636ff142d89` | `56/56 PASS` |
| Runtime regression | `04_planning/gate4-v0.2/diagnostic_support/remediation-runtime.json` | `80ca0ee99fe9d1e78ed98fff26283920e62ee75ba33fdb82cd0d83fae4e76320` | `20/20 PASS` |
| Freeze | `04_planning/gate4-v0.2/MARKET-EU-IT_GATE4_FREEZE_RECORD_V0.2.json` | `a5b0e25d7d294f5b486594a70b19fe7407b195180940daf7258f01f6aee90410` | `IT-G4-FREEZE-20260907-02` |
| Evidence index | `04_planning/gate4-v0.2/MARKET-EU-IT_GATE4_EVIDENCE_INDEX_V0.2.json` | `deba8a2d8c1e10970dfc2d867fc7d694c7c08475e8960e37bd6b7b4fcb0fd116` | `CORRECTED / FROZEN` |
| Finding response | `04_planning/gate4-v0.2/MARKET-EU-IT_GATE4_FINDING_RESPONSE_IT-G4-PC-R01_V0.2.md` | `5e2be1538eb1db1fc471a1dbb9892395b2c5723c143ffb32dafefdfccb857f1d` | `IT-G4-PC-R01-R1` |
| Remediation report | `04_planning/gate4-v0.2/MARKET-EU-IT_GATE4_METADATA_REMEDIATION_REPORT_V0.2.md` | `64cec9bcf01675387581da774349daa3fffc07245acdb2c10f13151336833e44` | `EXECUTOR REPORT` |
| Self-check | `05_review/MARKET-EU-IT_GATE4_EXECUTION_SELF_CHECK_V0.2.md` | `13dd9c5ad8de67afcd57b7b0b88d7cd5c80bba5a0425db44da92972510d26559` | `PASS / NOT INDEPENDENT` |
| Rereview submission | `05_review/MARKET-EU-IT_GATE4_REREVIEW_SUBMISSION_V0.2.md` | `eca47d4738c1bc20460013e03fef1ce3861f2e24893ddddc241e6183e511fa93` | `PENDING INDEPENDENT REREVIEW` |

## 2. Source and visual inheritance

The candidate remains `04_planning/gate4-v0.1/MARKET-EU-IT_GATE4_COMPLETE_VISUAL_V0.1.html`, 28,199 bytes, SHA-256 `ed7d54648e058fee6ee4d6ff7ca76d3fe3f440eda0e5d0d7b8871b6da0f15615`. All 56 V0.1 executor PNGs retain their original byte lengths and SHA-256 identities. V0.2 does not copy, rewrite or replace them.

Approved Buyer Clean copy, URL, seven-module order, COO limitation adjacency, Grade neutrality, Italy destination guidance, EU-owner boundary, Documents/Sample/RFQ paths, visual styling and shared contracts remain unchanged.

## 3. Metadata correction and regression

All 56 image records now state logical width, decoded physical width, decoded physical height, DPR, state, bytes and SHA-256. Exactly 19 records changed:

- the 1440 direction sample records physical size 1440×436 at DPR 1;
- 18 Request Documents and Federchimica normal/hover/focus records now include their decoded dimensions and DPR 1.

Fresh 1440/768/390 execution passed `20/20`, with seven modules, 19 page-body links, COO limitation adjacency, 44px controls, current navigation presentation, horizontal fit and zero page/console errors intact. Three new complete-page diagnostic renders were opened through the Footer. They supplement and do not replace the inherited 56-image package.

## 4. Retained history and stop boundary

V0.1 workset `IT-G4-COMPLETE-20260907-01`, freeze `IT-G4-FREEZE-20260907-01`, evidence index, independent review and `MARKET-EU-IT_GATE4_PROJECT_CONTROL_REVIEW_V0.1.md` remain unchanged history. The Project Control report continues to record the Finding until a separate independent rereview explicitly closes it.

The executor reports required Finding count 0 for this remediation submission. This draft does not independently close `IT-G4-PC-R01`, approve or close Gate 4, invoke delegated closure, or start Gate 6, development, deployment or publication.

## 5. Version record

| Version | Date | Meaning |
|---|---|---|
| V0.9 | 2026-09-07 | Current Gate 4 V0.1 execution pointer; later Project Control report opened `IT-G4-PC-R01` |
| V0.10 draft | 2026-09-07 | Evidence-only V0.2 remediation frozen and submitted for independent rereview; Gate 4 remains open |
