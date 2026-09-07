# GRADE-M200 Gate 7 Fresh Validation V0.3

`GRADE-M200-G7-VALIDATION-03` · 2026-09-02 · `PASS_CORRECTION_PENDING_CONTROLLER_02_REVIEW` · D23 only.

## Contract correction

- V0.1 raw contract parses with `identity.recordState = candidate_for_preview`.
- V0.2 raw contract parses with `identity.recordState = approved_for_preview`.
- Recursive structural diff path count is exactly 1: `identity.recordState`.
- Removing that one path from both parsed objects produces identical canonical JSON.
- All public copy, applications, evaluation groups/items, technical columns/rows/values, documents, markets, routes, prefill, SEO, Schema direction and evidence ledger remain unchanged.
- V0.2 raw SHA-256 is `A19BDC03170470EECCC46497AFBBE4FFEF6288DB59C9C5F6163017C3DF6D8320`.
- V0.2 canonical SHA-256 under `sha256-json-recursive-key-sort-v1` is `815F920541B53A6038C1B214F41F35B55F654C74BBDECEC66BF5A54585690369`.

## Runtime acceptance boundary

Runtime must require exact `approved_for_preview`. It must not accept V0.1, candidate state, missing state, unknown state or mismatched identity/scope/hash. Failure remains closed with no cross-Grade or cross-scope fallback.

## Preserved controls

Identity remains `GRADE-M200 / /products/m-200/ / tio2-my`; Hero 4/5/2; Applications 3 = Plastics 2 + Masterbatch 1; Evaluation 2/8; Technical 2/12; Documents 2; Markets 4; Routes 12; index/sitemap false. Forbidden public outputs remain zero. M-996 artifacts remain zero. D16/Gate 8 implementation was not touched.
