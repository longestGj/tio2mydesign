# GRADE-M200 Gate 7 Handoff Package Amendment V0.2

`GRADE-M200-G7-HANDOFF-AMENDMENT-02` · 2026-09-02 · `CONTROLLER_RETURN_CORRECTION / PENDING_REVIEW`

## Scope

This amendment supersedes only the runtime-state binding in `GRADE-M200_GATE7_HANDOFF_PACKAGE_V0.1.md`. All public copy, product facts, applications, technical values, URLs, routes, source approvals, evidence boundaries and release controls remain unchanged.

The authoritative runtime contract is now `GRADE-M200_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.2.json`. Its only semantic difference from V0.1 is:

`identity.recordState: candidate_for_preview → approved_for_preview`

Contract binding: raw SHA-256 `A19BDC03170470EECCC46497AFBBE4FFEF6288DB59C9C5F6163017C3DF6D8320`; canonical SHA-256 under `sha256-json-recursive-key-sort-v1` `815F920541B53A6038C1B214F41F35B55F654C74BBDECEC66BF5A54585690369`.

## Runtime rule

- Shared runtime validation must accept only `identity.recordState = approved_for_preview` for an enabled preview record.
- The developer must not broaden the validator to accept `candidate_for_preview`.
- Missing, candidate, unknown or mismatched states must fail closed.
- V0.1 remains immutable history and must not be consumed by runtime implementation.
- Preview remains `noindex,nofollow`, sitemap excluded; Gate 10 remains unauthorized.

Gate 8 implementation remains paused until Controller 02 approves this V0.2 correction and rebinds the handoff authority.
