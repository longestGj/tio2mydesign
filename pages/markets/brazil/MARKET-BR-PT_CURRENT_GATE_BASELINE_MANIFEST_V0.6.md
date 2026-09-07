# MARKET-BR-PT Current Gate Baseline Manifest V0.6

Date 2026-09-07. Current execution authority; supersedes V0.5 while preserving its approved Gate 1–3 combination.

| Field | Value |
|---|---|
| Page / planning path / language | `MARKET-BR-PT` / `/pt-br/markets/brazil/` / `pt-BR` |
| Gate 1–2 | `USER_APPROVED / CLOSED` |
| Gate 3 | `USER_PREAUTHORIZED_COMPLETION / APPROVED / CLOSED` |
| Gate 3 decision | `MARKET-BR-PT-G3-PREAUTH-CLOSE-01` |
| Gate 4 authorization | [Brazil bilingual parallel control V1.0](../../../docs/architecture/GATE4_BRAZIL_BILINGUAL_PARALLEL_CONTROL_V1.0.md), `USER_AUTHORIZED / EXECUTED` |
| Gate 4 internal 4A | `VISUAL_DIRECTION_CHECKED` |
| Gate 4 internal 4B | `COMPLETE_VISUAL_FROZEN` |
| Gate 4 submission | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Gate 4 independent review / user approval | `PENDING / NOT_CLOSED` |
| Gate 6–10 | `NOT_AUTHORIZED` |

Approved Gate 2 remains A V0.2 `12ed2a57c781aa335ced3e181b136644ad678f03cda2da287c308cb620fbe573`, B V0.2 `895054795f03b2587e8a49ab143cfb59c316ceef9df4d3a40269b8cb8bbed2cb`, C V0.2 `bb75a6ce6e1e21f7a892b4322878340762182d6c9390be6f333f2c6eba1a9d47`. The approved Gate 3 source remains `04_planning/gate3-pt-v0.1/MARKET-BR-PT_GATE3_RESPONSIVE_WIREFRAME_V0.1.html`, SHA-256 `d3567ae4c3dfabdcce46bc2364a0dafd3fc90fabe5e9c6f434f66167f4c7995f`.

## Gate 4 frozen candidate

Workset `BRPT-G4-WORKSET-V10`; freeze `BRPT-G4-V10-SOURCE-01`.

| Object | Identity / status |
|---|---|
| Editable complete visual source | `04_planning/gate4-pt-v1.0/MARKET-BR-PT_GATE4_COMPLETE_VISUAL_V1.0.html`; 25,001 bytes; `1135225b17ba0f0f203121321e548a55b05a96091fc108268eb3448adf2fb407` |
| Shared evidence index | `04_planning/gate4-pt-v1.0/MARKET-BR-PT_GATE4_EVIDENCE_INDEX_V1.0.json`; 12,212 bytes; `da5635caa29502ef1660352077ab031ecac184f2b819a4a9a5295278fc4c55ab` |
| Freeze record | `04_planning/gate4-pt-v1.0/MARKET-BR-PT_GATE4_FREEZE_RECORD_V1.0.json`; 11,593 bytes; `254c8c23ad4f72807698b2081c9e2630ebb74a8ad39f929d8a8e73e67fee5993` |
| 4A direction check | `04_planning/gate4-pt-v1.0/MARKET-BR-PT_GATE4_VISUAL_DIRECTION_CHECK_V1.0.md`; `9659c0eb26b898b164d8efae3c7823269dc55ec9b274b64e4e541cc18c1c7d36` |
| Complete composition report | `04_planning/gate4-pt-v1.0/MARKET-BR-PT_GATE4_COMPLETE_VISUAL_COMPOSITION_REPORT_V1.0.md`; `1ed5e425f31876ed758c8b6b4a84576794de3d0fafc320d25a6abc18352a5882` |
| Layout/interaction author verification | `05_review/MARKET-BR-PT_GATE4_LAYOUT_INTERACTION_VERIFICATION_V1.0.md`; `d47946ed0cf636a13c09f028db110e41d331199da579bcf8f900dc8ccb5e4801` |
| Execution self-check | `05_review/MARKET-BR-PT_GATE4_EXECUTION_SELF_CHECK_V1.0.md`; `f96ed800519229e033886e31751cea268a14b9e7f27d68e9e606404de7aef9b2` |

The approval core contains 1440/768/390 complete-page assets, 768/390 Menu and all-three Cookie assets; 390 is native DPR2. Sixteen readable segments cover the long pages. Browser evidence reports no page errors or horizontal overflow, Inter loaded, 44×44px minimum visible controls and passing operated Menu/Cookie behavior. Content parity reports exact normalized main copy, 14 link label/target pairs, five modules and seven inline language markers against the Gate 3 source.

The Portuguese copy, one English-destination notice, English receiving-field labels, application/product neutrality, document/COO limits, exact `06/09/2026` trade-owner handoff and Brazil RFQ context remain unchanged. Shared English Chrome is consumed under its owner. The planning path does not claim live route, canonical or hreflang implementation.

Author Finding count is 0. A different reviewer must inspect this frozen combination before project-control PASS. This Manifest does not approve or close Gate 4 and does not authorize Gate 6, development, deployment, publication or indexing.
