# GRADE-M200 Gate 6-7 Project Control Review Submission V0.2

| Field | Value |
|---|---|
| Review ID | `GRADE-M200-G7-PCR-02` |
| Page | `GRADE-M200 / /products/m-200/` |
| Submission | `TARGETED_RECORD_STATE_CORRECTION` |
| Supersedes for runtime | V0.1 contract/Manifest binding only |
| Gate 8 implementation | `PAUSED_PENDING_CONTROLLER_REBIND` |
| M-996 | `LOCKED / ARTIFACTS 0` |

Requested review is limited to the V0.2 runtime contract correction. `identity.recordState` changes from `candidate_for_preview` to `approved_for_preview`; no other semantic path changes. Shared runtime validation must continue accepting only `approved_for_preview` and fail closed for candidate/missing/unknown/mismatched states.

V0.2 contract raw/canonical SHA-256: `A19BDC03170470EECCC46497AFBBE4FFEF6288DB59C9C5F6163017C3DF6D8320` / `815F920541B53A6038C1B214F41F35B55F654C74BBDECEC66BF5A54585690369`.

The V0.1 public copy, counts, source approval, visible-content resolution, URL, SEO/GEO/Schema, technical values, route registry, release controls and evidence boundaries remain unchanged. V0.1 remains immutable history.

Requested decision: approve `GRADE-M200_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.2.json` and `GRADE-M200_GATE7_MANIFEST_V0.2.md` as the corrected Gate 8 source authority, then separately rebind the existing Gate 8 handoff. No D16 implementation, M-996 activation or Gate 10 action is requested here.
