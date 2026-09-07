# MARKET-EU-NL merged Gate 4 project-control review V0.1

2026-09-07 · Review ID `NL-G4-COMPLETE-PC01`.

Status: **PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL**. This project-control decision accepts `NL-G4-COMPLETE-20260907-V01` at freeze `NL-G4-COMPLETE-V01-FREEZE-01` for user review. It does not record user approval, close Gate 4, start Gate 6, or authorize development, deployment, publication, DNS or indexing.

## Review separation and scope

- Complete-visual executor: `gate4_nl_complete`, as recorded in the candidate visual readback.
- Final independent reviewer: `/root/gate4_be_complete`, Review ID `NL-G4-COMPLETE-IR01`.
- Project-control reviewer: `/root/gate4_nl_control`, Review ID `NL-G4-COMPLETE-PC01`.
- The executor and independent reviewer are different identities. Project control independently recalculated the indexed file identities and reviewed the final independent result; no executor self-check was treated as independent approval.
- Write scope is limited to `pages/markets/netherlands/`. Root Status/Index, other pages, shared owners and external implementation remain unchanged.

## Frozen object received

| Object | Bytes | SHA-256 |
|---|---:|---|
| Approved historical Manifest V0.7 | 6082 | `528c4e823e0f7ef2c86a129c9a95cd488dcf45dec3d6e8f94e326e34fa57109d` |
| Candidate Manifest V0.8 | 5918 | `6716c2de9a6a53bbd5dae7d5f936ad1f60fb7157abd0533f043e4ca729936920` |
| [WORKSET](../04_planning/gate4-complete-v0.1/WORKSET.md) | 3829 | `17b4fe320357dd9e89e32e5a3b87dcdf764935bba262a5d571d1502976f7c96c` |
| [Input index](../04_planning/gate4-complete-v0.1/input-index.json) | 12419 | `bb01611716ce30e99bfe6beba411ebd055e6b3f3e932f9997ea3057f5990a110` |
| [Candidate REPORT](../04_planning/gate4-complete-v0.1/REPORT.md) | 12164 | `6bc44e771033b573ff7789dd0a91b363b3a765017bdabe25258c7ba4d29f38a9` |
| [Source freeze](../04_planning/gate4-complete-v0.1/approval_core/source-freeze.json) | 13317 | `3de49e971b86d0d273ccce6967522b358bd58c25f91c8a0eba2974a547113456` |
| [Evidence index](../04_planning/gate4-complete-v0.1/evidence-index.json) | 46592 | `07534b620b6bb9a4d974e228ac839df2ffe010b257e7440ac6645bf17f77d448` |
| [Final receipt](../04_planning/gate4-complete-v0.1/approval_core/final-receipt.json) | 42663 | `f494cb8c66b69a262359ba3de325f08e49ddda07766988482dc883670b41ef25` |
| [Final independent report](gate4-complete-independent-v0.1/report.md) | 10173 | `5c735e51de546226ed951ddabb656f456bf2b838f20fe25d747a3d183b230172` |
| [Independent runtime and identity](gate4-complete-independent-v0.1/independent-runtime-and-identity.json) | 161383 | `e30052cb2ff5dc07cde64a72ec47ccd2dcc4c98aaa31763d451a30bd155678b5` |
| [Independent supplement](gate4-complete-independent-v0.1/independent-supplement.json) | 119625 | `7fab7d65095d821f556261aeb0f2d67eae6e8b3141a25b73120fd8452deb3033` |
| [Visual inspection](gate4-complete-independent-v0.1/visual-inspection.json) | 25146 | `d3f80f87d7c60b740c539ec72ed48df114b397c56c5d8acdbdbcc041d8282001` |
| [Review artifact identities](gate4-complete-independent-v0.1/review-artifact-identities.json) | 29071 | `c0bdc317d334542e5d1c35f4315e6b9cfa0514bb131f5720ef75aabdbe2e7b77` |

All values above were recalculated immediately before this record was written.

## Identity audit

Project control recursively checked every object containing `path` and `sha256` in the seven identity-bearing candidate/review indexes below. Byte size was also checked where declared.

| Index | Identity declarations | Unique paths in index | Mismatch / missing |
|---|---:|---:|---:|
| input-index.json | 55 | 55 | 0 |
| evidence-index.json | 51 | 51 | 0 |
| source-freeze.json | 57 | 57 | 0 |
| final-receipt.json | 120 | 114 | 0 |
| independent-runtime-and-identity.json | 102 | 102 | 0 |
| review-artifact-identities.json | 116 | 116 | 0 |
| visual-inspection.json | 45 | 45 | 0 |
| **Combined declarations** | **546** | **124 distinct paths across indexes** | **0** |

The same path never carried conflicting byte or SHA identities across these indexes. The independent identity file also reports 102/102 matches; its main review contains 361 checks with no failures or page errors. The corrected independent supplement contains 342 contrast-state measurements, four reflow/font records and seven overlay checks with zero failures. Its retained initial diagnostic failures reflect a corrected measurement method, not a changed candidate or a hidden page Finding.

## Historical inheritance and current 4B coverage

The 42 inherited PNGs are valid evidence for this frozen combination. Project control compared the old approved `export-inventory.json` with the inherited array in the new evidence index: 42/42 paths, byte sizes, SHA-256 values and pixel dimensions match, with no addition or omission. The six editable-source/dependency objects also remain exact: approved HTML `9ffe164adbf63246a36601990d1841dbb6af24fb177fbf559dbdc616a1396be3`, CSS `7bc0c880ad3dc5ceabeea9b78f3e92f0ac1740bc6ff1aa067bd8b54554ffd847`, Inter licence/font and both production Logo payloads.

The inherited set supplies 18 readable normal regions, 18 inline-link hover/focus states, three Cookie states, two Menu states and one primary CTA hover state. Independent current-source rerenders match the 18 readable regions, whose overlapping intervals continuously cover each complete page. This establishes that inheritance is based on unchanged source, dependencies, visual state and proof scope, rather than on the historical direction PASS alone.

The three new DPR1 images supply the missing complete-page foundations required by merged Gate 4B:

| Logical width / pixels | Bytes | SHA-256 |
|---|---:|---|
| 1440 / 1440×3590 | 449860 | `2488597134b5d11e0d6dfcb8fa6ac3e6b27a927fab932d9828a7faea31cc04f0` |
| 768 / 768×4048 | 443363 | `1e33f8967f87d4a7163b1d92330ac48541e8c64e684d53ed5411c0aee0585b0f` |
| 390 / 390×5320 | 456686 | `4a631b52b1d85cec1236c725752ee92adf435e731a1f9be1c8d6c77703183a6b` |

Project control opened the three complete pages and representative original-scale Mobile content/Menu/Cookie assets. Header, breadcrumbs, five approved modules and Footer retain their order and close cleanly; approved copy, Netherlands procurement emphasis, neutral Product Review, exact COO sentence, document cardinality, RFQ hierarchy, shared Markets state and legal links remain legible and coherent. The complete overviews are used for page order and rhythm, while the inherited original-scale regions remain the readable long-copy proof.

Total formal visual evidence is therefore 45 unique images: 42 valid inherited images plus three complete pages. It satisfies the current Gate 4B foundation without duplicating the existing region/state set.

## Findings and phased open items

`NL-G4-COMPLETE-IR01` and this project-control audit both result in **required Finding 0**. Historical `NL-G4-IR01` remains resolved and accepted in V0.2; it is not reopened or rewritten.

The following are correctly retained outside current Gate 4 closure scope and must not be represented as already verified:

| Open item | Owner / stage | Current treatment |
|---|---|---|
| Menu transition from 768/390 to Desktop leaves focus on BODY | Global Chrome owner; Gate 8 integration and Gate 9 keyboard/breakpoint verification | Non-blocking inherited shared observation. No hidden focus trap or page override was found; a Netherlands-only fork is prohibited. |
| Native browser 200% zoom, OS text scaling, physical devices, other engines and assistive technology | Scoped implementation/accessibility verification, principally Gate 9 | `NOT_VERIFIED`. Current 720 CSS px @2x reflow is only `LOCAL_SIMULATION`. |
| RFQ/Request Documents destination visibility, editing, clearing, persistence, real receipt and attribution | Conversion owners; Gate 8 implementation and Gate 9 verification | Only local intent semantics were checked; no message or production request was sent. |
| Registered/live routes, current VVVF destination, metadata, Schema, indexing and `site_scope=tio2-my` isolation | Relevant owners; Gate 8 implementation, Gate 9 QA and Gate 10 release controls | Current source/link semantics are retained; live and production behavior remains unclaimed. |
| Shared legal/Consent production configuration and complete-site release conditions | Legal/Privacy and Global Chrome owners; Gate 8–10 | Current approved shared contracts are consumed without a page fork; production release remains separately gated. |

These items are explicit later-stage acceptance work or shared-owner observations. They do not conceal missing Netherlands design content or an unresolved local Gate 4 visual defect.

## Project-control decision and user object

`NL-G4-COMPLETE-PC01 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`.

The exact object proposed for user approval is freeze `NL-G4-COMPLETE-V01-FREEZE-01`: unchanged approved V0.2 HTML/CSS/dependencies and 42 exact inherited images, plus the three complete-page images above, under the single input/evidence indexes and the accepted independent report `NL-G4-COMPLETE-IR01`. Approval would close the current merged Gate 4 only. It would not authorize Gate 6 or any external implementation/release step.

The proposed next Manifest is [V0.9](../MARKET-EU-NL_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md). Until the user approves the exact frozen object, approved Manifest V0.7 remains the public/development authority and V0.8/V0.9 remain subordinate review records.
