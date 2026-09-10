# APP-PLAS Gate 4 Finding Response V0.2

Date: 2026-09-07. Executor response to **`APP-PLAS-G4-R01`**.

Status: **`FINDING_RESPONSE_SUBMITTED / AWAITING_TARGETED_INDEPENDENT_REREVIEW`**.

## New reviewed object

- Workset: `APP-PLAS-G4-COMPLETE-20260907-02`
- Freeze: `APP-PLAS-G4-FREEZE-20260907-02`
- Candidate source: unchanged V0.1 HTML, 43,487 bytes, SHA-256 `fd61a0b74f81c094af4193dcd323cb6f4965321ff453039e0b7bd58c6891e6f9`
- New freeze: `04_planning/gate4-v0.2/APP-PLAS_GATE4_FREEZE_RECORD_V0.2.json`, 4,458 bytes, SHA-256 `945d56b58e3c0d12b9ece68701123d2a4ab840742f9477654487a09581120f1a`
- New evidence index: `04_planning/gate4-v0.2/APP-PLAS_GATE4_EVIDENCE_INDEX_V0.2.json`, 56,567 bytes, SHA-256 `23a93eb3bd8ff72b1b022087feb3fc2f991167e11c279836e703060332a52cf5`

## Exact correction

The V0.1 freeze and failed independent report remain unchanged. V0.2 corrects metadata only:

1. The renderer ledger now records all three actual viewports as `1440×900`, `768×900` and `390×900`, DPR 1.
2. The three `GRADE_PATH_CONTEXT` records now match direct PNG metadata: `1440×727`, `768×747` and `390×269`.
3. All 27 normal/hover/focus records now contain `physical_width`, `physical_height` and `dpr: 1`. Their dimensions match the independent Finding table for all three targets and widths.
4. The V0.2 reproduction script reads the PNG IHDR directly and rejects any byte/SHA/dimension disagreement. The resulting ledger has complete, exact dimensions and DPR for 92/92 evidence images.

## Regression and unchanged scope

All 52 V0.2 frozen inputs recomputed exact. Fifty-one retain the original identities; the shared batch-control input was refreshed to its current `STOP_AFTER_BATCH_1` authority and preserved as a page-local snapshot, with no APP-PLAS contract change. All 92 original evidence PNG byte/SHA identities recomputed exact, so the repair changes no evidence image. A new local-Chrome regression at 1440/768/390 passed 16/16 checks; all three full-page rerenders are pixel-identical to the V0.1 formal pages. The candidate source, approved copy, provisional URL, twelve modules, eight equal Grade relationships, one/several/unknown Grade paths, request-owner paths, brand, Menu/Cookie behavior and shared contracts are unchanged.

This executor response does not close `APP-PLAS-G4-R01`. A different reviewer must verify and explicitly close it against the V0.2 freeze. Gate 4 remains open; Gate 6, development, deployment and publication are not started or authorized by this repair.
