# APP-PLAS Gate 4 Targeted Re-review Submission V0.2

Date: 2026-09-07. Status: **`DRAFT_FOR_TARGETED_PROJECT_CONTROL_REREVIEW`**.

Review only workset `APP-PLAS-G4-COMPLETE-20260907-02` and freeze `APP-PLAS-G4-FREEZE-20260907-02`. This submission responds to required Finding `APP-PLAS-G4-R01`; the V0.1 freeze and failed independent review remain historical and unchanged.

## Entry set

| Object | Bytes | SHA-256 |
|---|---:|---|
| V0.2 input index | 13,209 | `4239e0ebfa90089ae1da9b041ab45ecee408af14fac5b8ac0069fbe6e2a11d9a` |
| V0.2 workset | 2,227 | `1f99aade07373e125854bc5545d6cbb76e2ec83180a08738713052fd8f6b057c` |
| V0.2 preflight | 1,822 | `68e5535a1644c44803b5517ba74807e26322f1acc72721d0b12328632ea6d4ec` |
| V0.2 freeze | 4,458 | `945d56b58e3c0d12b9ece68701123d2a4ab840742f9477654487a09581120f1a` |
| V0.2 evidence index | 56,567 | `23a93eb3bd8ff72b1b022087feb3fc2f991167e11c279836e703060332a52cf5` |
| Finding response | 2,512 | `3e508abd928b89c66ea12d96d2c765a02db197922af9aca4864bb6192089c49f` |
| Executor self-check | 1,855 | `3aac490a9ee73257c50adf2b3135535b4575d09d8e846eefee5a19a86807c8b3` |

Candidate source remains `04_planning/gate4-v0.1/APP-PLAS_GATE4_COMPLETE_VISUAL_V0.1.html`, 43,487 bytes, SHA-256 `fd61a0b74f81c094af4193dcd323cb6f4965321ff453039e0b7bd58c6891e6f9`.

## Targeted independent acceptance

The reviewer should recompute all 52 V0.2 frozen input identities, including the page-local current batch-control snapshot, and all 92 evidence image bytes/SHA/dimensions; confirm the freeze records `390×900`; confirm the three Grade images are `1440×727`, `768×747`, `390×269`; and confirm every one of the 27 normal/hover/focus records has exact physical width/height and DPR 1. Re-run or inspect the three-viewport regression and confirm the candidate plus all 92 evidence PNGs are unchanged. If exact, explicitly close `APP-PLAS-G4-R01` and state Required Finding 0 for the V0.2 combination.

Independent output entry: `pages/applications/plastics/05_review/gate4-complete-independent-v0.2/REVIEW.md`.

The executor does not self-review or close Gate 4. Gate 6, development, deployment and publication remain outside this submission.
