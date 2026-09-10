# CONV-THANK Current Gate Baseline Manifest V0.14

Date: 2026-09-08. Sole current authority pointer. V0.14 supersedes V0.13 for lifecycle navigation; approved content and Gate 6 package remain unchanged.

| Field | Value |
|---|---|
| Page / route / scope | `CONV-THANK` / `/thank-you/` / `tio2-my` |
| Prior state | [V0.13](CONV-THANK_CURRENT_GATE_BASELINE_MANIFEST_V0.13.md), SHA-256 `425188840B1524C09F5B923AC058F7EEDFFD04981F1D61DEE10DDAC229C9CE4D`; Gate 9 first round `NOT_PASS` and Repair 01 recorded |
| Current Gate 8 repair | implementation `df21f96f0dafc708b6978e6f6cafbb6feee8abb3`; evidence `942d0f73777b75ca8ff7a1186c203fb385df6460`; Build `Z4ufy5ln0usxkwVFmmxuF`; 48 files / 336 tests, lint, TS/Build and manifest validator PASS |
| Sample receiver contract | Browser uses server adapter; provider `success=true` plus fixed scope/config and confirmed idempotent persistence are required before the server returns `ok=true && receipt_confirmed=true`; actual inbox receipt remains separate evidence |
| Intake | [Repair 02 intake V1.0](../../../docs/architecture/GATE8_SYS404_CONVTHANK_REPAIR02_INTAKE_V1.0.md), SHA-256 `82257CB885D057324F85F3F66408FB9D5A94BCC38EA48B2B3D3008DC5A7953E5`; final runtime unavailable because candidate start was blocked by automatic policy |
| Status | `GATE8_REPAIR_IN_PROGRESS / CODE_AND_BUILD_READY / FINAL_RUNTIME_BLOCKED / NOT_READY_FOR_GATE9_RECHECK`; `PAGE_GATE9_STATUS=NOT_PASS` |
| Open | final runtime matrices `F01/F03/F04/F06/F08`; `F05` real receivers/inbox and runtime adapter proof; `F07` device/AT; `F02` CONTACT-001; final identity/preflight |
| Release | Full-site prerelease paused; Gate 10, merge, push, deployment, publication, DNS and indexing unauthorized |

Passing first-round and Repair 02 code-level evidence remains reusable only for the exact identity. This Manifest does not close Gate 8 or Gate 9.
