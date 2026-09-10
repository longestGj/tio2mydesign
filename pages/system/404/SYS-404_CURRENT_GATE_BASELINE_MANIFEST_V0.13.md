# SYS-404 Current Gate Baseline Manifest V0.13

Date: 2026-09-08. Sole current authority pointer. V0.13 supersedes V0.12 for lifecycle navigation; approved content and Gate 6 package remain unchanged.

| Field | Value |
|---|---|
| Page / route / scope | `SYS-404` / `RUNTIME_FALLBACK` / `tio2-my`; no independent indexable `/404/` page |
| Gate 0–6 | `APPROVED / CLOSED`; exact combination inherited from [V0.12](SYS-404_CURRENT_GATE_BASELINE_MANIFEST_V0.12.md), SHA-256 `AFB9273467EF818D1789A157E5B8A824F76B5C603116718BB9CD5212FA02E2E4` |
| Gate 9 first round | `FIRST_ROUND_COMPLETE / NOT_PASS / RETURN_REQUIRED`; [report](07_qa/SYS404_CONVTHANK_GATE9_FIRST_ROUND_INDEPENDENT_ACCEPTANCE_V1.0.md), SHA-256 `207B6A845D7FB545FF4F70780B3495462349C0D6C4E63F5DAFDDD2D7A698562E` |
| Gate 8 repair 01 | `CODE_AND_BUILD_READY / FINAL_RUNTIME_BLOCKED`; implementation `d1f9d3502819d50b19c2d0246dff1cafcdf0cb48`; evidence `601f806c0da00778a983f20684dd907e8c689ca3`; Build `gfrvPw98NS3NTNBC3X_LU`; intended runtime `4384` not started |
| Verification | 44 files / 314 tests PASS; changed-file lint, TypeScript/build and evidence validator PASS; two-round preflight `ENVIRONMENT_FAILURE` because runtime was not started |
| Intake | [Gate 8 repair intake V1.0](../../../docs/architecture/GATE8_SYS404_CONVTHANK_REPAIR01_INTAKE_V1.0.md), SHA-256 `C009A2C401F3D1C3EE1DDADDD2D48669846F87EC1579DD688877BC72CF1ED081`; final runtime, Contact dependency and targeted Gate 9 recheck remain open |
| Status | `GATE8_REPAIR_IN_PROGRESS / NOT_READY_FOR_GATE9_RECHECK`; `PAGE_GATE9_STATUS=NOT_PASS`; `RELEASE_STATUS=NOT_AUTHORIZED` |

Passing first-round content, visual and SEO coverage remains reusable if the final identity preserves it. No Gate 9 closure, merge, deployment, publication or Gate 10 is authorized.
