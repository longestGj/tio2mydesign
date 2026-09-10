# SYS-404 Current Gate Baseline Manifest V0.10

Date: 2026-09-08. Sole current authority pointer. V0.10 supersedes V0.9 for current lifecycle navigation; approved upstream sources remain unchanged.

| Field | Value |
|---|---|
| Page / route / scope | `SYS-404` / `RUNTIME_FALLBACK` / `tio2-my` |
| Gate 0–4 | `APPROVED / CLOSED`; exact combination inherited from [V0.9](SYS-404_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md), SHA-256 `48520A59F8DDDDDE42A78E6B8042CC1231E6E86EB90348F8CE7FF7E92C62BC12` |
| Gate 6 | `APPROVED / CLOSED / APPROVED_FOR_HANDOFF`; package `SYS-404-G6-HANDOFF-20260908-01` |
| Approval basis | `USER_STANDING_AUTHORITY / G346-DELEGATED-CLOSURE-20260907`; per-page user review `NOT_REQUIRED_BY_STANDING_AUTHORITY` |
| Unique package | [SYS-404_GATE6_DEVELOPMENT_HANDOFF_PACKAGE_V0.1.md](06_handoff/SYS-404_GATE6_DEVELOPMENT_HANDOFF_PACKAGE_V0.1.md), SHA-256 `20306E38DECE8F242DDCF37B991A8207044E57178BFB90DD2C75129172BA2C5F` |
| Independent review | [SYS-404_GATE6_INDEPENDENT_REVIEW_V0.1.md](05_review/gate6-v0.1/SYS-404_GATE6_INDEPENDENT_REVIEW_V0.1.md), SHA-256 `4D137E638529F7552F40F24363352D9C89B85D569D0CF57A24FCB92755A85511`; `/root/sys404_gate5_review`; `REVIEW_PASS`; Required Findings 0 |
| Controller closure | [SYS-404_GATE6_DELEGATED_APPROVAL_AND_CLOSURE_V0.1.md](05_review/SYS-404_GATE6_DELEGATED_APPROVAL_AND_CLOSURE_V0.1.md), SHA-256 `387F632C4725D85EBE6816038D52CCB6255DC4630800E5C9D7377F25E4FE8671`; record `SYS404-G6-PC-CLOSURE-20260908-01` |
| Gate 9 coverage | 11 stable acceptance conditions; `DEP01–DEP07` remain open for Gate 8/9 implementation and runtime evidence |
| Gate 8 handoff | `AUTHORIZED / PENDING_ACTUAL_SEND`; target `00My开发2`, thread `01a07e6a-546d-7532-aa06-02d2bffd5eed` |
| Release | Merge, push, deployment, publication, DNS and indexing remain unauthorized |

The package is the only Gate 6 development-delivery entry. Gate 8 must return a schema-valid `gate8_evidence_manifest.json`, committed evidence receipt and held runtime under the active Gate 8→9 contract. Gate 6 approval does not prove implementation or Gate 9 acceptance.
