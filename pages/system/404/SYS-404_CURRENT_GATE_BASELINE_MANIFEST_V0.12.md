# SYS-404 Current Gate Baseline Manifest V0.12

Date: 2026-09-08. Sole current authority pointer. V0.12 supersedes V0.11 for lifecycle navigation; the approved Gate 6 package and Gate 8 implementation remain unchanged.

| Field | Value |
|---|---|
| Page / route / scope | `SYS-404` / `RUNTIME_FALLBACK` / `tio2-my`; no independent indexable `/404/` page |
| Gate 0–6 | `APPROVED / CLOSED`; exact Gate 6 combination inherited from [V0.11](SYS-404_CURRENT_GATE_BASELINE_MANIFEST_V0.11.md), SHA-256 `43DDBDB7E2981371351F409F24C55C1FE30FC4E93360F2F7EF2F4874FB961301` |
| Gate 8 returned candidate | branch `codex/sys404-convthank-gate8`; implementation `1571a67da57d5dd6f2b358ba20508ba46c76f581`; Build `2z5DYuzAHx0An8WWlUsz2`; declared evidence `7fa0b1026c80c4b12bc1725fff1ad7ef1492a676`; current clean HEAD `35a99a12cf0c675c72a2d181e687a2076b0e2fab`; runtime `http://127.0.0.1:4381` |
| Gate 9 independent review | [First-round report V1.0](07_qa/SYS404_CONVTHANK_GATE9_FIRST_ROUND_INDEPENDENT_ACCEPTANCE_V1.0.md), SHA-256 `207B6A845D7FB545FF4F70780B3495462349C0D6C4E63F5DAFDDD2D7A698562E`; 11/11 AC traversed |
| Gate 9 evidence index | [Evidence index V1.0](07_qa/SYS404_CONVTHANK_GATE9_FIRST_ROUND_EVIDENCE_INDEX_V1.0.json), 35 items, SHA-256 `18874D28FFDF1828826F7FBEDD3F4B69D6B71E8CC833DC7E2CA967AFBA7BFE10` |
| Gate 9 status | `FIRST_ROUND_COMPLETE / NOT_PASS / RETURN_REQUIRED`; `INTEGRATION_STATUS=BLOCKED`; `RELEASE_STATUS=NOT_AUTHORIZED` |
| Findings | `SCT-G9-F01–F02`, shared `F04`, `F07–F09` open; passing content/visual/SEO observations retained |
| Directed return | [Return V1.0](../../../docs/architecture/GATE9_SYS404_CONVTHANK_FIRST_ROUND_RETURN_TO_GATE8_V1.0.md), SHA-256 `503E69D5C5F3EFBCF902C517C96AC5AA99C4FDF79D9FC4939C1B5364275E39FC`; targeted repair authorized under the user's instruction to complete both pages before prerelease testing |
| External page dependency | `SCT-G9-F02`: approved `/contact/` target remains 404; `CONTACT-001` is still user-deferred at Gate 1 and cannot be created or bypassed by this page's Gate 8 repair |
| Release | Local-main merge, remote push, deployment, publication, DNS, indexing and Gate 10 remain unauthorized |

Gate 8 must preserve all passing body-copy, three-width, SEO and ordinary-unmatched-path results. Gate 9 will perform a targeted recheck against the returned exact identity; this Manifest does not close Gate 9.
