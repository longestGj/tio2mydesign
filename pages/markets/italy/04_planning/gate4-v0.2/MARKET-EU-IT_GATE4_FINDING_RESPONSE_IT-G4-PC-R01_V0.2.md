# MARKET-EU-IT Gate 4 Finding Response IT-G4-PC-R01 V0.2

## Control

| Field | Value |
|---|---|
| Workset | `IT-G4-COMPLETE-20260907-02` |
| Freeze | `IT-G4-FREEZE-20260907-02` |
| Response | `IT-G4-PC-R01-R1` |
| Status | `REMEDIATED / READY_FOR_INDEPENDENT_REREVIEW` |
| Candidate source | `UNCHANGED / BYTE-IDENTICAL V0.1 INHERITANCE` |

## Repair

The Finding is confirmed as an evidence-ledger defect. The V0.1 source and all 56 PNG files remain valid and byte-identical. V0.2 reads physical dimensions from decoded PNG metadata after capture and writes complete `physical_width`, `physical_height` and `dpr` fields for every image record.

- `1440-direction-risk.png` now records `1440×436`, DPR 1. The prior `436.625` value was the pre-rounding CSS clip height, not the PNG pixel height.
- All 18 Request Documents and Federchimica normal/hover/focus records now contain decoded physical dimensions and DPR 1.
- The complete ledger now has `56/56` image records with valid physical dimensions and DPR.
- All `56/56` inherited image byte lengths and SHA-256 identities match V0.1.
- Exactly 19 metadata records changed: one direction-height correction and 18 completed state records.

## Regression

The inherited source remains 28,199 bytes, SHA-256 `ed7d54648e058fee6ee4d6ff7ca76d3fe3f440eda0e5d0d7b8871b6da0f15615`. Fresh local Chromium checks at 1440, 768 and 390 passed `20/20` with zero page or console errors. Seven-module order, 19 body links, COO limitation adjacency, shared current-state presentation, 44px controls and horizontal fit remain intact. Three complete-page diagnostic rerenders were opened through the Footer.

## Frozen identities

- Image verification: SHA-256 `0ed8500e59e8592808b110026514ab4500df7c34a45fa994fb7d9636ff142d89`.
- Runtime regression: SHA-256 `80ca0ee99fe9d1e78ed98fff26283920e62ee75ba33fdb82cd0d83fae4e76320`.
- Freeze: SHA-256 `a5b0e25d7d294f5b486594a70b19fe7407b195180940daf7258f01f6aee90410`.
- Evidence index: SHA-256 `deba8a2d8c1e10970dfc2d867fc7d694c7c08475e8960e37bd6b7b4fcb0fd116`.

The V0.1 freeze, evidence, independent PASS and Project Control Finding remain unchanged history. An independent reviewer must verify and close `IT-G4-PC-R01` against the V0.2 freeze. This executor response does not approve or close Gate 4 and does not start Gate 6.
