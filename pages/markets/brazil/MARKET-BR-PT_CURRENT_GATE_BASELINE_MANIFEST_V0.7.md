# MARKET-BR-PT Current Gate Baseline Manifest V0.7

Date 2026-09-07. Current revision authority; supersedes V0.6 and preserves V1.0 as reviewed history.

| Field | Value |
|---|---|
| Page / planning path / language | `MARKET-BR-PT` / `/pt-br/markets/brazil/` / `pt-BR` |
| Gate 1–2 | `USER_APPROVED / CLOSED` |
| Gate 3 | `USER_PREAUTHORIZED_COMPLETION / APPROVED / CLOSED` |
| Gate 4 authorization | [Brazil bilingual parallel control V1.0](../../../docs/architecture/GATE4_BRAZIL_BILINGUAL_PARALLEL_CONTROL_V1.0.md), `USER_AUTHORIZED / IN_PROGRESS` |
| Gate 4 4A / 4B | `VISUAL_DIRECTION_CHECKED / COMPLETE_VISUAL_FROZEN` |
| Independent review V1.0 | `REVISION_REQUIRED`; `BR-PT-G4-IR-01–03` |
| V1.1 author revision | `AUTHOR_ACCEPTANCE_PASS / DRAFT_FOR_INDEPENDENT_REREVIEW` |
| Gate 4 user approval / closure | `PENDING / NOT_CLOSED` |
| Gate 6–10 | `NOT_AUTHORIZED` |

Approved Gate 2 A/B/C V0.2 and approved Gate 3 source remain unchanged. Gate 3 source identity is `d3567ae4c3dfabdcce46bc2364a0dafd3fc90fabe5e9c6f434f66167f4c7995f`.

## Current Gate 4 candidate

Workset `BRPT-G4-WORKSET-V11R1`; freeze `BRPT-G4-V11R1-SOURCE-01`; supersedes frozen candidate `BRPT-G4-V10-SOURCE-01` without altering its historical review evidence.

| Object | Identity / status |
|---|---|
| Editable complete visual source | `04_planning/gate4-pt-v1.1/MARKET-BR-PT_GATE4_COMPLETE_VISUAL_V1.1.html`; 25,092 bytes; `1159f03eb5018f73ba497cca77ed4d9903c10d2bb3a6c2612c51da89757a0357` |
| Evidence index | `04_planning/gate4-pt-v1.1/MARKET-BR-PT_GATE4_EVIDENCE_INDEX_V1.1.json`; 14,658 bytes; `445336a8aec5a4cf276eb7377192d0e2c675fa8bac0544fea67d51e1b9e42b13` |
| Freeze record | `04_planning/gate4-pt-v1.1/MARKET-BR-PT_GATE4_FREEZE_RECORD_V1.1.json`; 13,516 bytes; `207deaa13946a5e00f8ea00a95bf7499204f8a4a7cf0504c6867387e75afa201` |
| Author revision response | `04_planning/gate4-pt-v1.1/MARKET-BR-PT_GATE4_IR01_IR03_REVISION_RESPONSE_V1.1.md`; `4220dda3e7fc12d703f57e36801aa21f190b7ea3c60c951320093a6f3ee5a9f6` |
| Author targeted verification | `05_review/MARKET-BR-PT_GATE4_LAYOUT_INTERACTION_VERIFICATION_V1.1.md`; `3e216cbd9abfc1e5e88d354680d2745e5f7b3d2e0b9472583cf378db2a839326` |
| Author self-check | `05_review/MARKET-BR-PT_GATE4_EXECUTION_SELF_CHECK_V1.1.md`; `532213f02db72a1adbe0081c5330a605e939d54d5daf604f671d193966998766` |

## Review continuity and acceptance status

The immutable independent V1.0 report is `05_review/MARKET-BR-PT_GATE4_INDEPENDENT_REVIEW_V1.0/report.md`, SHA-256 `0cf3ad763797df3692021cbf58c8761fa390697359d2d77730d189e3a3866285`; observations SHA-256 `9dad8499de46d770bbd5088b71738936a45ee48053f70a5eb73bd5966e033071`.

- `BR-PT-G4-IR-01`: page visual-layer shared-selector scan now has zero hits.
- `BR-PT-G4-IR-02`: Hero primary CTA is white on approved `#008078`; hover is `#006c66` at all three viewports.
- `BR-PT-G4-IR-03`: fifteen operated focus probes pass across five surface families and three viewports; teal is used on light surfaces and white on dark surfaces.

The current freeze binds 33 exact inputs, four dependencies, eight formal assets, five diagnostic focus captures and sixteen readable segments. Content/link/module/language parity remains exact; three widths have no horizontal overflow or page error and retain 44×44px minimum controls. Menu and Cookie behavior remain passing.

The three Findings are author-corrected but remain open until a different reviewer accepts the new freeze. This Manifest does not record project-control PASS, user approval, Gate 4 closure, Gate 6 or any implementation/publication authorization.

