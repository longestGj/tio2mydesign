# CONV-THANK Current Gate Baseline Manifest V0.12

Date: 2026-09-08. Sole current authority pointer. V0.12 supersedes V0.11 for lifecycle navigation; the approved Gate 6 package and Gate 8 implementation remain unchanged.

| Field | Value |
|---|---|
| Page / route / scope | `CONV-THANK` / `/thank-you/` / `tio2-my` |
| Gate 0–6 | `APPROVED / CLOSED`; exact Gate 6 combination inherited from [V0.11](CONV-THANK_CURRENT_GATE_BASELINE_MANIFEST_V0.11.md), SHA-256 `4460A7B566F13DEFACBD2F0BA52DCED24AE88BDF7A36A1047A16C56C3BD021A8` |
| Gate 8 returned candidate | branch `codex/sys404-convthank-gate8`; implementation `1571a67da57d5dd6f2b358ba20508ba46c76f581`; Build `2z5DYuzAHx0An8WWlUsz2`; declared evidence `7fa0b1026c80c4b12bc1725fff1ad7ef1492a676`; current clean HEAD `35a99a12cf0c675c72a2d181e687a2076b0e2fab`; runtime `http://127.0.0.1:4381` |
| Gate 9 independent review | [First-round report V1.0](../../system/404/07_qa/SYS404_CONVTHANK_GATE9_FIRST_ROUND_INDEPENDENT_ACCEPTANCE_V1.0.md), SHA-256 `207B6A845D7FB545FF4F70780B3495462349C0D6C4E63F5DAFDDD2D7A698562E`; 16/16 AC traversed |
| Gate 9 evidence index | [Evidence index V1.0](../../system/404/07_qa/SYS404_CONVTHANK_GATE9_FIRST_ROUND_EVIDENCE_INDEX_V1.0.json), 35 items, SHA-256 `18874D28FFDF1828826F7FBEDD3F4B69D6B71E8CC833DC7E2CA967AFBA7BFE10` |
| Gate 9 status | `FIRST_ROUND_COMPLETE / NOT_PASS / RETURN_REQUIRED`; `INTEGRATION_STATUS=BLOCKED`; `RELEASE_STATUS=NOT_AUTHORIZED` |
| Findings | `SCT-G9-F03–F09` open; Direct/Quote/Documents/Sample visual and state-machine passes retained |
| Directed return | [Return V1.0](../../../docs/architecture/GATE9_SYS404_CONVTHANK_FIRST_ROUND_RETURN_TO_GATE8_V1.0.md), SHA-256 `503E69D5C5F3EFBCF902C517C96AC5AA99C4FDF79D9FC4939C1B5364275E39FC`; targeted repair authorized under the user's instruction to complete both pages before prerelease testing |
| Receiver truth | RFQ live attempt returned HTTP 403 and produced no inbox receipt; Documents/Sample have local/intercepted evidence only. None may be represented as real receiver acceptance. |
| Release | Local-main merge, remote push, deployment, publication, DNS, indexing and Gate 10 remain unauthorized |

Gate 8 must preserve all passing copy, state, negative-case, three-width and SEO results. Gate 9 will perform a targeted recheck against the returned exact identity; this Manifest does not close Gate 9.
