# SYS-404 Gate 4 → Gate 5 targeted recheck handoff V0.2

## Control and revised identity

| Field | Value |
|---|---|
| Finding / mode | `SYS404-G5-IR-F01` / `TARGETED_RECHECK` |
| Actual author / original Reviewer | `/root/sys404_gate4_execute` / `/root/sys404_gate5_review` |
| Workset | `SYS-404-G4-WORKSET-20260908-02` |
| Candidate / bundle | `SYS-404-G4-CANDIDATE-02` / `SYS-404-G4-BUNDLE-20260908-02` |
| Revised source identity | SHA-256 `FC42439402367D16FBCBA6A82A30E42C403CD5C00FC480F5B296BB1E5D2F485A` |
| Technical status | `COMPLETE_VISUAL_FROZEN / READY_FOR_REVIEW` |
| Lifecycle | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |

The prior source and bundle remain unchanged. This handoff replaces V0.1 only as the current review target; it does not edit the original independent review or close its Finding.

## Change response

[Finding response V0.1](SYS-404_GATE4_FINDING_RESPONSE_V0.1.md), SHA-256 `0751A589731DD85C3F151D818B7DACEE94BFBB5CEF0B009CD75C0BBEC8E237EE`, records the single change: Footer DOM and visual order is now `footerGrid → copyright → legalUtilities`. The exact sequence is `© 2026 TiO2 Malaysia. → Privacy Policy → Dasar Privasi (BM) → Cookie Policy → Cookie Settings`.

No CSS, page-owned copy, action, target, two-plus-three structure, responsive intent, Header, navigation state, fixed RFQ, Logo, Menu or Cookie Settings behavior changed. No Terms link was added.

## Frozen entry and evidence

- [Revision input index](../04_planning/gate4-v0.2/revision-input-index.json), SHA-256 `31970B044EEC1EECAD1D1515570A7B27B738098A0BAF032D34C3A59BF2E6E668`.
- [Revised design source](../04_planning/gate4-v0.2/SYS-404_GATE4_COMPLETE_VISUAL_V0.2.html), SHA-256 `FC42439402367D16FBCBA6A82A30E42C403CD5C00FC480F5B296BB1E5D2F485A`.
- [Freeze record](../04_planning/gate4-v0.2/freeze-record.json), SHA-256 `800C3119B13E578D0CEC9A8427DB33CA16A5B3E839CACD1228369E315C8CA04A`.
- [Workset](../04_planning/gate4-v0.2/workset.json), SHA-256 `CC7B186024D08DD4016EDF40A72DA47040748974B24A7D0DCE8834B89A64AA68`.
- [Evidence index](../04_planning/gate4-v0.2/evidence-index.json), SHA-256 `598C67FA0FA9F52DC24A94CDA0A30F489EDD4C35AD5F3CB7D279C5A442F9783B`.
- [Formal runtime](../04_planning/gate4-v0.2/approval_core/runtime.json), SHA-256 `D8896F36A7042F111386CB21FA2CE059A013E2CB29CA681D52E06813F1496B15`, records 66 checks with zero failure.
- [Targeted self-check V0.2](SYS-404_GATE4_EXECUTION_SELF_CHECK_V0.2.md), SHA-256 `56E2FED09BED8FC52E37C751435BF4E7795B7C0733A4A77495ADDFB531D94C55`.
- [Formal visual readback](SYS-404_GATE4_EXECUTION_EVIDENCE_V0.2/formal-visual-readback.json), SHA-256 `99BE4A527B22DAAD695D6EAF6FC09040EB9088CB59D488158CF3C8533793C6EC`.

Affected formal assets regenerated from V0.2:

| Viewport / state | SHA-256 |
|---|---|
| 1440 full | `1B8727D269596FC0E38258310B266AB9A3E05C4A31D65E0372658DCF887928FD` |
| 768 full | `0FA26761F5669603761B9BB2142C9A2059E98C462D6E03E52B818307608E80D7` |
| 390 full | `99C5359AADB01F0CAE578BC0C411A6788DF052B632F0238333FFE09AF523FD4D` |
| 1440 Cookie Settings | `555E2E5F41CE69B7972B8C082D3C038FDADB03A24BA969280F85023A8B9616CA` |
| 768 Cookie Settings | `A24D8FAE1C555A72C8E59CF645953C88C058F9772544ADDB30BABB8344B62799` |
| 390 Cookie Settings | `DDB7923EE47659BBCAB01610292D2C07542EA00DDA01239B2FD9F68904112BD5` |

The 768 and 390 Menu formal assets are inherited from `SYS-404-G4-BUNDLE-20260908-01`. New V0.2 preflight Menu captures are byte-for-byte identical to them:

| Viewport | Inherited formal SHA-256 | New preflight SHA-256 |
|---|---|---|
| 768 | `2BE39893B5570D6121B15F7FB0C46948FBE8759B003B1F2854AE156A22E11FFC` | `2BE39893B5570D6121B15F7FB0C46948FBE8759B003B1F2854AE156A22E11FFC` |
| 390 | `F59AAFEB5833A53AAB4DE0808A83B74932365C53CFD9C0D7F2709F37D32F1A10` | `F59AAFEB5833A53AAB4DE0808A83B74932365C53CFD9C0D7F2709F37D32F1A10` |

Render conditions remain Chrome through Playwright, 1440/768/390 logical CSS pixels, DPR 1, light scheme, reduced motion, local frozen Inter/Logo and blocked HTTP(S). The existing checker at `04_planning/gate4-v0.2/diagnostic_support/check.cjs` is the run entry.

## Recheck scope and stop

The original Reviewer should verify the Finding acceptance condition, all six regenerated formal originals, the two inherited Menu proofs and adjacent Footer/Cookie/focus regression. Execution-side Required Findings are 0; `SYS404-G5-IR-F01` remains pending independent closure. Output must stop at the Gate 5 targeted recheck conclusion. Gate 6, development and publication remain unauthorized.
