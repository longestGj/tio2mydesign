# APP-COAT Current Gate Baseline Manifest V0.8 — Draft

## 0. Candidate status

| Field | Value |
|---|---|
| Page ID / URL | `APP-COAT` / `/applications/titanium-dioxide-for-coatings/` |
| Site scope | `tio2-my` |
| Previous approved Manifest | `APP-COAT_CURRENT_GATE_BASELINE_MANIFEST_V0.6.md` / `3e4910df9b194decf8751adcadef58ae3233583b0de37fd190e48deb9d8ac6dd` |
| Retained first Gate 4 draft | `APP-COAT_CURRENT_GATE_BASELINE_MANIFEST_V0.7_DRAFT.md` / retained history |
| Gate 1–3 | `APPROVED / CLOSED` |
| Gate 4 V0.1 independent review | `FAIL / COAT-G4-IR-01 / RETAINED` |
| Gate 4 V0.2 directed remediation | `COMPLETE / FROZEN / READY_FOR_INDEPENDENT_REREVIEW` |
| Gate 4 Project Control / closure | `PENDING / NOT_CLOSED` |
| Gate 6 / development / release | `NOT_STARTED / NOT_AUTHORIZED` |

V0.8 is a remediation review draft. V0.6 remains the single approved current baseline. This draft neither supersedes the retained V0.1 failure record nor records an independent PASS, Project Control approval, Gate 4 closure or Gate 6 authorization.

## 1. Directed remediation object

| Role | Path | SHA-256 | State |
|---|---|---|---|
| Workset | `04_planning/gate4-v0.2/workset.json` | `9acc48801c9e171458c04dbbb86ae974b21806bf0fc146b228e6c30ea0e88fd1` | `COAT-G4-COMPLETE-V02` |
| Input identity index | `04_planning/gate4-v0.2/input_index.json` | `a12087e9469fd2f298eb08f8d32d3f9d74b04436d14dc29f0aca965dbf1cb28a` | `61 IDENTITIES` |
| Statement correction register | `04_planning/gate4-v0.2/statement-correction-register.json` | `dabc36d786b34a8eb436ac9c32ea626a58f46da7f6d16b1df14beb6d7c9147bf` | `COAT-G4-IR-01 CORRECTED IN ACTIVE V0.2 RECORDS` |
| Corrected 4A direction check | `04_planning/gate4-v0.2/4A-direction-check-correction.json` | `63a023c70211498770de981cc80798ca18b21ddfffeb303d4a66e20bc0c68657` | `PASS / RECORD CORRECTION` |
| V0.2 source freeze | `04_planning/gate4-v0.2/approval_core/source-freeze.json` | `7f40b7202990a25b17448bd6d75480caebd813cb71a4905d9f8d4a7d1a551226` | `COAT-G4-COMPLETE-V02-F01` |
| Remediation runtime | `04_planning/gate4-v0.2/diagnostic_support/remediation-runtime.json` | `73ccbb763d5a623b0ceecc6dadd607dde95103d24e44470cbcda344a2024e9c4` | `24/24 PASS` |
| Inherited formal-asset verification | `04_planning/gate4-v0.2/approval_core/inherited-asset-verification.json` | `f783ae557672968cd58f4c2d71ea8285f6d0d5f089275b18578a1230b8f1f723` | `48/48 FILE + DIMENSION + DECODED PIXEL PASS` |
| V0.2 evidence index | `04_planning/gate4-v0.2/evidence_index.json` | `aad86687d0c8ca055d18482f49f86737ca3c35db72a3d88be5a71c6fb9f404ed` | `FROZEN REVIEW ENTRY` |
| Finding response | `04_planning/gate4-v0.2/APP-COAT_GATE4_FINDING_RESPONSE_COAT-G4-IR-01_V0.2.md` | `d296c3dc166ff12764d57b6c5fbe5121fd0ea49ea3f027580b10ab43e21d3317` | `COAT-G4-IR-01-R1 / READY_FOR_REREVIEW` |
| Execution report | `04_planning/gate4-v0.2/APP-COAT_GATE4_VISUAL_AND_EXECUTION_REPORT_V0.2.md` | `4b4b0643d4d379186e07f4152b45f799dd0536208487bf0f2a1d539617076ba5` | `EXECUTOR REPORT` |
| Execution self-check | `05_review/APP-COAT_GATE4_EXECUTION_SELF_CHECK_V0.2.md` | `8bc30e668ae2167a2aac11ee5c404304185724274e96e3cce35d7d7a335b4ef2` | `PASS / NOT INDEPENDENT` |
| Independent rereview submission | `05_review/APP-COAT_GATE4_REREVIEW_SUBMISSION_V0.2.md` | `d5c10aaac33675a6fa0362c203ce2f7bf0deb8254b2d0452cc6a9ccc862d21bb` | `PENDING INDEPENDENT REREVIEW` |

## 2. Candidate source and visual disposition

The V0.2 candidate source is exact inheritance from V0.1. No HTML or CSS byte changed during remediation.

| Object | Path | Bytes | SHA-256 | Disposition |
|---|---|---:|---|---|
| Candidate HTML | `04_planning/gate4-v0.1/APP-COAT_GATE4_COMPLETE_VISUAL_V0.1.html` | 33997 | `a1e8c4153831aa829698f62e0c30c1fc7a77ec5bbb1f23ce264dede5d61443d2` | `INHERITED / BYTE-IDENTICAL` |
| Visual CSS | `04_planning/gate4-v0.1/visual-direction.css` | 6196 | `f4c2e703345cb3eae1221937ff63b61b3742c6f2da6ccf9c1f3da730db67ca8c` | `INHERITED / BYTE-IDENTICAL` |

The frozen primary CTA true-hover state is `#FFFFFF` text on `#007F77`, independently measured by the executor at `4.881302249384679:1` at 1440, 768 and 390. The V0.1 records incorrectly attributed the `#007F77` on `#F5F8FB` non-primary-link pairing and its `4.5796989189682495:1` ratio to the primary CTA. V0.2 corrects this attribution without changing the visual.

Approved A/B/C copy, the ten-part module order, URL, keyword ownership, brand, CTA, Global Chrome, production Logo, legal utility and shared contracts remain unchanged.

## 3. Evidence inheritance and rerun

The 48 formal V0.1 PNGs remain the formal visual package. Before inheritance, V0.2 recomputed every file's byte length, SHA-256, physical dimensions and independently decoded RGBA pixel digest against the V0.1 export inventory; result: `48/48 PASS`. No formal V0.1 file was copied, rewritten or replaced.

V0.2 adds six diagnostic images only:

- three true-hover captures at 1440, 768 and 390;
- three complete-page regression renders at 1440×10070, 768×11531 and 390×17825.

The V0.2 runtime result is `24/24 PASS`, with zero page errors, zero console errors, zero remote requests, zero horizontal overflow and no visible target below 44 CSS pixels. Ten sections, one H1, nine H2 headings, five endpoint objects, eight equal Grades, three request owners and six sources remain present. The inherited V0.1 formal runtime remains `720/720 PASS`.

## 4. Retained failure history

`COAT-G4-COMPLETE-V01`, freeze `COAT-G4-COMPLETE-V01-F01`, the V0.7 draft, all V0.1 evidence and `05_review/gate4-complete-independent-v0.1/REVIEW.md` remain unchanged. Their failure state is historical evidence for `COAT-G4-IR-01` and is not rewritten as a PASS.

## 5. Review and permission state

| Item | State |
|---|---|
| V0.2 directed remediation | `COMPLETE / FROZEN` |
| Executor self-check | `PASS / NOT INDEPENDENT` |
| Required Finding reported by executor | `0 FOR REMEDIATION SUBMISSION` |
| Independent rereview | `PENDING` |
| Project Control review | `PENDING` |
| Gate 4 approval / closure | `NOT RECORDED / NOT CLOSED` |
| Gate 6 / development / deployment / publication | `NOT STARTED / NOT AUTHORIZED` |

The independent reviewer must start from the V0.2 rereview submission and evidence index, recompute the source freeze and evidence identities, reproduce the three-width true-hover state, confirm stable geometry and 44px targets, and confirm exact inheritance of the source and 48 formal assets.

## 6. Version record

| Version | Date | Meaning |
|---|---|---|
| V0.6 | 2026-09-07 | Current approved baseline; Gate 3 approved and closed |
| V0.7 draft | 2026-09-07 | First Gate 4 candidate submission; retained after independent Finding `COAT-G4-IR-01` |
| V0.8 draft | 2026-09-07 | V0.2 record-only remediation frozen and submitted for independent rereview; no Gate 4 approval or closure |
