# APP-PLAS Current Gate Baseline Manifest V0.8 Draft

## 0. Draft state

| Field | Value |
|---|---|
| Page ID / URL | `APP-PLAS` / `/applications/titanium-dioxide-for-plastics/` (`PROVISIONAL_URL`) |
| Site scope / language | `tio2-my` / EN |
| Draft date | 2026-09-07 |
| Manifest role | `EXECUTOR_DRAFT / NOT_CURRENT_UNTIL_INDEPENDENT_REREVIEW_AND_CONTROL` |
| Lifecycle | `GATE4_TARGETED_METADATA_REPAIR_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REREVIEW` |
| Gate 1–3 | `APPROVED / CLOSED` |
| Gate 4 workset / freeze | `APP-PLAS-G4-COMPLETE-20260907-02` / `APP-PLAS-G4-FREEZE-20260907-02` |
| Finding | `APP-PLAS-G4-R01 / RESPONSE_SUBMITTED / AWAITING_INDEPENDENT_REREVIEW` |
| Gate 4 independent re-review | `PENDING` |
| Gate 4 approval / closure | `NOT_CLAIMED_BY_EXECUTOR` |
| Gate 6–10 / development / release | `NOT_STARTED / NOT_AUTHORIZED_BY_THIS_REPAIR` |
| Existing current Manifest | `APP-PLAS_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md`, 8,069 bytes / `83168cedea27a81b7763c30579bc5904458a793e8a39c243dcf1b5ed2efd93ca` |

This file is the proposed next Manifest only. V0.7 remains the current pointer until a different reviewer accepts the V0.2 freeze and Project Control performs any authorized closure update.

## 1. Retained approved object

The V0.2 repair retains the exact candidate source `04_planning/gate4-v0.1/APP-PLAS_GATE4_COMPLETE_VISUAL_V0.1.html`, 43,487 bytes / `fd61a0b74f81c094af4193dcd323cb6f4965321ff453039e0b7bd58c6891e6f9`. Approved B V0.3, the twelve modules, provisional URL boundary, eight equal Grade relations, one/several/unknown Grade paths, APP-MB ownership exit, Documents/Sample/RFQ contexts, brand and shared contracts are unchanged.

The failed V0.1 review remains authoritative history for its old combination:

- freeze `APP-PLAS-G4-FREEZE-20260907-01`, 4,603 bytes / `d685eaf70e4bf781924a19c11e28751e26b2c7c2805476eab9e195a2304faa89`;
- evidence index V0.1, 53,704 bytes / `5239d64dcf6db4ece3b8647c7247ca209688eec8443037e330293db002746ecd`;
- independent `REVIEW.md`, 8,522 bytes / `77462b8743744fbe1a1386192264638398bd6b6aa7715fdce78887176a6074ca`, Required Finding 1.

## 2. V0.2 targeted repair combination

| Object | Path | Bytes | SHA-256 / state |
|---|---|---:|---|
| Input index | `04_planning/gate4-v0.2/APP-PLAS_GATE4_INPUT_INDEX_V0.2.json` | 13,209 | `4239e0ebfa90089ae1da9b041ab45ecee408af14fac5b8ac0069fbe6e2a11d9a` / 52 frozen inputs |
| Workset | `04_planning/gate4-v0.2/APP-PLAS_GATE4_WORKSET_V0.2.json` | 2,227 | `1f99aade07373e125854bc5545d6cbb76e2ec83180a08738713052fd8f6b057c` |
| Batch-control snapshot | `04_planning/gate4-v0.2/snapshots/GATE4_THIRTEEN_PAGE_BATCH4_CONTROL_V1.0.frozen.md` | 3,181 | `58426e59cbcb8af12be986bc9ddc5b187cbe90641520d92d793cfc9a76427ee8` |
| Reproduction script | `04_planning/gate4-v0.2/verify-and-rebuild-metadata.cjs` | 19,387 | `b1f4aa95d66c0a741b6be139d22a1231b113d1d286d837ce11e13a4041720908` |
| Three-viewport regression | `04_planning/gate4-v0.2/diagnostic_support/three-viewport-regression.json` | 83,541 | `b503fc1cd5effe84f7eb653ae359f5ae0076e6e0a885a3c699ee5ac8524eaab7` / 16/16 PASS |
| PNG metadata readback | `04_planning/gate4-v0.2/diagnostic_support/image-metadata-readback.json` | 44,469 | `fccc5ba32bcc52e9412ca521cc7a93ca8b706711bff6e442e8225e5cd5a5cc08` / 92/92 exact |
| Preflight | `04_planning/gate4-v0.2/APP-PLAS_GATE4_PREFLIGHT_RECORD_V0.2.json` | 1,822 | `68e5535a1644c44803b5517ba74807e26322f1acc72721d0b12328632ea6d4ec` / PASS |
| Freeze | `04_planning/gate4-v0.2/APP-PLAS_GATE4_FREEZE_RECORD_V0.2.json` | 4,458 | `945d56b58e3c0d12b9ece68701123d2a4ab840742f9477654487a09581120f1a` |
| Evidence index | `04_planning/gate4-v0.2/APP-PLAS_GATE4_EVIDENCE_INDEX_V0.2.json` | 56,567 | `23a93eb3bd8ff72b1b022087feb3fc2f991167e11c279836e703060332a52cf5` / 92 images |
| Finding response | `05_review/APP-PLAS_GATE4_FINDING_RESPONSE_V0.2.md` | 2,512 | `3e508abd928b89c66ea12d96d2c765a02db197922af9aca4864bb6192089c49f` |
| Executor self-check | `05_review/APP-PLAS_GATE4_EXECUTION_SELF_CHECK_V0.2.md` | 1,855 | `3aac490a9ee73257c50adf2b3135535b4575d09d8e846eefee5a19a86807c8b3` |
| Re-review submission | `05_review/APP-PLAS_GATE4_REREVIEW_SUBMISSION_V0.2.md` | 2,179 | `993b44ade15e20c4edb6a0f5e2bddbfd34d3d920c060810f8e9baf797c87011c` |

## 3. Repair evidence

- V0.2 frozen inputs: 52/52 exact; 51 original identities plus one refreshed current batch-control snapshot.
- Original evidence assets: 92/92 byte/SHA identities unchanged.
- Physical dimension and DPR ledger: 92/92 exact and complete.
- Renderer viewports: `1440×900`, `768×900`, `390×900`, DPR 1.
- Grade contexts: `1440×727`, `768×747`, `390×269`.
- Normal/hover/focus: 27/27 carry direct physical width/height and DPR 1.
- Runtime regression: 16/16 PASS; three full pages pixel-identical at 1440/768/390.
- Candidate, content, URL, modules, visual and shared contracts: no drift.

## 4. Re-review and stop boundary

Independent re-review starts at `05_review/gate4-complete-independent-v0.2/REVIEW.md` using `05_review/APP-PLAS_GATE4_REREVIEW_SUBMISSION_V0.2.md`. The reviewer must explicitly decide `APP-PLAS-G4-R01` against the V0.2 combination. The executor does not mark the Finding closed and does not claim `PROJECT_CONTROL_REVIEW_PASS`, approval or closure.

Gate 6, development, external handoff, deployment, publication, DNS and indexing remain outside this repair and are not started.

## 5. Version record

| Version | Date | Meaning |
|---|---|---|
| V0.7 | 2026-09-07 | V0.1 Gate 4 freeze submitted; later independent review opened required Finding `APP-PLAS-G4-R01` |
| V0.8_DRAFT | 2026-09-07 | V0.2 metadata-only repair frozen and submitted for targeted independent re-review; no executor PASS or closure |
