# APP-COAT Gate 4 Finding Response COAT-G4-IR-01 V0.2

## Control

| Field | Value |
|---|---|
| Page ID | `APP-COAT` |
| Finding | `COAT-G4-IR-01` |
| Response ID | `COAT-G4-IR-01-R1` |
| Workset / freeze | `COAT-G4-COMPLETE-V02` / `COAT-G4-COMPLETE-V02-F01` |
| Response status | `REMEDIATED / READY_FOR_INDEPENDENT_REREVIEW` |
| Candidate visual | `UNCHANGED / BYTE-IDENTICAL V0.1 INHERITANCE` |

## Finding disposition

The Finding correctly identified an inconsistency between the frozen source and its V0.1 records. The frozen visual itself is valid. The primary CTA hover uses white text on `#007F77`; the independently recomputed contrast is `4.881302249384679:1`, above the required `4.5:1` threshold. This state is present at 1440, 768 and 390 and complies with the accepted functional hover contract.

The erroneous V0.1 statement described the primary CTA as `#007F77` text on `#F5F8FB` at `4.5796989189682495:1`. That pairing belongs to the non-primary link hover rule. It was incorrectly attributed to the primary CTA in the V0.1 4A summary, execution report, evidence summary and independent-review entry.

## Corrective action

- Preserved `COAT-G4-COMPLETE-V01`, `COAT-G4-COMPLETE-V01-F01` and the failed V0.1 independent review without edits.
- Inherited the exact V0.1 candidate HTML, `33997` bytes, SHA-256 `a1e8c4153831aa829698f62e0c30c1fc7a77ec5bbb1f23ce264dede5d61443d2`.
- Inherited the exact V0.1 visual CSS, `6196` bytes, SHA-256 `f4c2e703345cb3eae1221937ff63b61b3742c6f2da6ccf9c1f3da730db67ca8c`.
- Created the corrected 4A record and statement-correction register. No candidate CSS, approved copy, URL, module, brand or shared-contract change was made.
- Re-ran the primary CTA true-hover state and full-page regression at all three required widths. Result: `24/24 PASS`, zero page errors, zero console errors and zero remote requests.
- Recomputed all 48 inherited formal asset file identities, dimensions and decoded RGBA pixel digests before citing them. Result: `48/48 PASS`.

## Three-width evidence

| Width | Foreground | Background | Contrast | Target | Geometry | Full-page extent |
|---:|---|---|---:|---:|---|---:|
| 1440 | `#FFFFFF` | `#007F77` | `4.8813:1` | `215.14×51.80` | stable | 10070 |
| 768 | `#FFFFFF` | `#007F77` | `4.8813:1` | `215.14×51.80` | stable | 11531 |
| 390 | `#FFFFFF` | `#007F77` | `4.8813:1` | `350×51.80` | stable | 17825 |

All visible controls remain at least 44 CSS pixels. Ten-section order, one H1, nine H2s, eight equal Grades, three request owners, six sources and full-page widths/heights remain unchanged.

## New freeze and evidence

- V0.2 source freeze: `approval_core/source-freeze.json`, SHA-256 `7f40b7202990a25b17448bd6d75480caebd813cb71a4905d9f8d4a7d1a551226`.
- V0.2 evidence index: `evidence_index.json`, SHA-256 `aad86687d0c8ca055d18482f49f86737ca3c35db72a3d88be5a71c6fb9f404ed`.
- V0.2 remediation runtime: `diagnostic_support/remediation-runtime.json`, SHA-256 `73ccbb763d5a623b0ceecc6dadd607dde95103d24e44470cbcda344a2024e9c4`.
- Inherited formal-asset verification: `approval_core/inherited-asset-verification.json`, SHA-256 `f783ae557672968cd58f4c2d71ea8285f6d0d5f089275b18578a1230b8f1f723`.

## Re-review condition

An independent reviewer must start from the V0.2 rereview submission, recompute the new freeze and evidence identities, reproduce white on `#007F77` at 1440/768/390 with contrast at least 4.5:1, confirm stable geometry and 44px targets, and confirm the inherited candidate source and full-page structure remain unchanged.

This response is an executor submission. It does not independently pass or close Gate 4 and does not start Gate 6, development, deployment or publication.
