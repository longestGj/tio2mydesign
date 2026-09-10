# APP-PAPER Gate 3 F01 Revision Response V0.1

Date: 2026-09-07  
Finding: `APP-PAPER-G3-PCR-F01`  
Response state: `REVISED / PENDING_INDEPENDENT_PROJECT_CONTROL_REREVIEW`  
Scope: record chronology and shared-evidence attribution only

## Response

The V0.3 `executedAt` and `frozenAt` values used an incorrect manually entered offset. The executor preserved both V0.3 records and used a tool to read the original diagnostic, preflight, freeze and formal filesystem/runtime times. Those sources establish the original order:

1. Diagnostic run `createdAt`: `2026-09-07T07:42:03.363Z`.
2. Diagnostic final filesystem write: `2026-09-07T07:42:30.410Z`.
3. V0.3 preflight filesystem creation: `2026-09-07T07:44:05.666Z`.
4. V0.3 freeze filesystem creation: `2026-09-07T07:44:50.621Z`.
5. Formal run `createdAt`: `2026-09-07T07:44:58.841Z`.
6. Formal final filesystem write: `2026-09-07T07:45:01.585Z`.

The corrected V0.4 preflight and freeze explicitly identify themselves as retrospective corrections of those original events. Their tool-generated `correctionGeneratedAt` values are separate from the corrected original event times. No claim is made that the V0.4 files existed before the formal run.

## Changed and retained identities

| Object | Bytes | SHA-256 | Meaning |
|---|---:|---|---|
| Correction generator V0.4 | 8,569 | `7E16BF3FB70723FB9EEFB471B9D6AE4605B2B5C6C139FF0C729A2390776CF26F` | Reads real times, checks sequence and generates corrected records |
| Chronology observations V0.4 | 3,619 | `BAFDDFF637289A805AF8D4BA879EE66D33DB4CABD872250F1749B7469FC780C2` | Tool-generated order evidence; all sequence checks true |
| Corrected preflight V0.4 | 7,416 | `0B35B1DB4A33031BDCB1D27C532825195CBF36B536A68736E4170197EDC8DB24` | Official checker `PASS_FOR_FORMAL_RENDER`, failures 0 |
| Corrected freeze V0.4 | 4,301 | `CC7EE3E3F830D9F598B381B7CB71FD3695BAE16FA76C564DECB77FFA782B5298` | Binds corrected preflight and retained formal evidence |
| Design report V0.4 | 5,003 | `C530961260994871ED6C2D71628B207D679A3CDD046FE253D45D6894C49481CB` | Corrects chronology and shared evidence wording |
| Execution self-check V0.4 | 4,330 | `7027F90F54CBDF7D08BE80B3F165E2B9476618E68A9C36236A96BD9EE8D4A71A` | F01 response self-check; not independent re-review |
| Handoff draft V0.2 | 5,691 | `D138BB0CA5BDF01467B60E4FF43885912966B450035B30F6E7DF7AC71E3A0D10` | Remains not ready; corrects evidence attribution |
| Historical preflight V0.3 | 5,386 | `711733E4111882AC67421BFC7A2ABDD2710B671A698C394F42E420C3CDDF19C1` | Preserved unchanged |
| Historical freeze V0.3 | 2,383 | `1264D877F78C0387001CAAFACB33657B53AB768E8EC09BDC64AF532412F532FA` | Preserved unchanged |
| Candidate HTML V0.3 | 32,131 | `7C907DEDA83419DA01F87B7A67C796A31E22E698F5F724D84972725848417973` | Preserved unchanged |
| Formal observations V0.3 | 20,991 | `C741F71CA8A95CC8C5CC2038249C48FCF2EB8B815B455DDC4C1B652606AE3A9B` | Preserved unchanged and PASS |

All eight formal PNG byte counts and hashes remain the exact identities reviewed in `APP-PAPER_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md`. No rendering or visual refinement was repeated because the review confirmed the original filesystem sequence and alleged no layout defect.

## Shared evidence clarification

The original shared report supports only its recorded current-navigation/breakpoint, Menu open/selection/Escape/breakpoint-close and Cookie open/colour/Escape-focus assertions. It contains no Tab/Shift+Tab loop assertion.

Execution evidence separately supports Menu selection close/background/focus restoration and Cookie Close-button restoration on the current APP-PAPER assembly. Independent observations `APP-PAPER_GATE3_INDEPENDENT_OBSERVATIONS_V0.1.json`, SHA-256 `469EDA09179672F38FBA6C613F9B7756E41FA6A42C0BDCF77B1A0FE58DE2C0FD`, supply the current-page forward/back Menu and Cookie loop checks. The corrected records and handoff no longer attribute those loops to the original shared report.

## Requested re-review

Project Control should re-review only F01 acceptance: corrected chronology sources/order, preservation of V0.3 history, V0.4 record semantics and hashes, unchanged candidate/formal assets, and corrected shared-evidence attribution. Execution does not mark F01 closed, grant a review pass, approve or close Gate 3, promote the handoff, or start Gate 4.
