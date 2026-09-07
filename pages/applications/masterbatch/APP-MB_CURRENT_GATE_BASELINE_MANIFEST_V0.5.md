# APP-MB Current Gate Baseline Manifest V0.5

## 1. Control

| Field | Value |
|---|---|
| Page ID | `APP-MB` |
| Page | `TiO2 for Masterbatch` |
| Date | `2026-09-07` |
| Manifest role | `UNIQUE_CURRENT_MANIFEST` |
| Manifest status | `GATE_2_USER_APPROVED_CLOSED / ACTIVE` |
| Gate 1 | `USER_APPROVED / CLOSED`; `CONTENT_INTENT_CONFIRMED` |
| Current Gate | `GATE_2 / APPROVED / CLOSED` |
| Gate 2 review state | `INDEPENDENT_REVIEW_COMPLETE / F01-F03_CLOSED / PROJECT_CONTROL_PASS / USER_APPROVED` |
| Project Control / user approval | `PASS / USER_APPROVED` |
| Gate 3–10 | `NOT_STARTED / NOT_AUTHORIZED` |
| Site scope | `tio2-my` |

This V0.5 Manifest selects the user-approved APP-MB Gate 2 A/B/C combination after independent review and Project Control pass. It supersedes V0.4 as the unique current page pointer and records Gate 2 closure under `G2-7PAGE-APPROVAL-01`.

## 2. Approved Gate 2 combination

| Role | Current file | SHA-256 | Status |
|---|---|---|---|
| A — Content Skeleton | `D:\23MySec\pages\applications\masterbatch\04_planning\APP-MB_GATE2_CONTENT_SKELETON_V0.2.md` | `633A2165153D0F60711F9C170D84E658CB245D9F971AFE81A4F2B079C60344DC` | `APPROVED_GATE_2_STRUCTURE` |
| B — Full Buyer Clean Copy | `D:\23MySec\pages\applications\masterbatch\04_planning\APP-MB_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md` | `06BDD245D1722223C415E0C4CECC7248F64D938CC37F936AE160B240FAA9343F` | `SOLE_VISIBLE_COPY_SOURCE / USER_APPROVED` |
| C — Content Contract | `D:\23MySec\pages\applications\masterbatch\04_planning\APP-MB_GATE2_CONTENT_CONTRACT_V0.3.md` | `944FEE912E10FA2DDF9A5700D2D925E584B07EDB998AF7B6B13194D8143AD168` | `APPROVED_GATE_2_CONTRACT` |
| Execution and Buyer Cold Read | `D:\23MySec\pages\applications\masterbatch\05_review\APP-MB_GATE2_EXECUTION_AND_BUYER_COLD_READ_V0.1.md` | `E9E2712856EBBAD1747A3CE4B9A129D7F2042A8DDC745D70A74DDBEC67D91076` | `EXECUTION_SELF_CHECK / NOT_INDEPENDENT_REVIEW` |
| Independent Buyer Review | `D:\23MySec\pages\applications\masterbatch\05_review\APP-MB_GATE2_FULL_COPY_BUYER_REVIEW_V0.1.md` | `36FA858621CEE29B7A6CED8C519419CF51E0FB6C75720BE405E79BF70AC99B67` | `FINDINGS_REQUIRE_REVISION / F01-F02` |
| Revision Response | `D:\23MySec\pages\applications\masterbatch\05_review\APP-MB_GATE2_FULL_COPY_REVISION_RESPONSE_V0.1.md` | `9D711641E12031DC7EB6091DF32146A242EEFEFCE736F87BA06CF419F08BAA2C` | `F01-F02_REVISED` |
| Targeted Buyer Rereview | `D:\23MySec\pages\applications\masterbatch\05_review\APP-MB_GATE2_FULL_COPY_BUYER_REREVIEW_V0.1.md` | `84BB95CDC2C4093CDC78F0D443D9A22AB491DF08F89C0E85077D6731508D1988` | `F01-F02_CLOSED / F03_REQUIRED` |
| Step 3 Revision Response | `D:\23MySec\pages\applications\masterbatch\05_review\APP-MB_GATE2_STEP3_REVISION_RESPONSE_V0.1.md` | `BC6F3E3239A41048FA5B09A59733DC7F515D9D54353871245BAC55B1CCD101E4` | `F03_REVISED / PENDING_INDEPENDENT_REREVIEW` |
| Final Buyer Rereview | `D:\23MySec\pages\applications\masterbatch\05_review\APP-MB_GATE2_FULL_COPY_BUYER_REREVIEW_V0.2.md` | `926F6400CE021A0AAD65D277A69AF54AFC9D54B8BB6DF1651A7A7F0A51E3401D` | `F01-F03_CLOSED / NO_NEW_FINDINGS` |
| Project Control Review | `D:\23MySec\pages\applications\masterbatch\05_review\APP-MB_GATE2_FULL_COPY_PROJECT_CONTROL_REVIEW_V0.1.md` | `14299AA96D7C0BDA8F786CBC13D639CFD7A724ABF1B5884118579FBE275A174A` | `PASS_PENDING_BATCH_USER_APPROVAL` |

The Manifest does not record its own hash because adding that value would change the file being hashed.

## 3. Retained approved baseline and trace

| Role | File | SHA-256 | Status |
|---|---|---|---|
| Previous Manifest | `D:\23MySec\pages\applications\masterbatch\APP-MB_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md` | `01F1BD5896B71F65F086F4D97C4D59F6E4760BC0C4702EE119A018120843545A` | `SUPERSEDED_CURRENT_POINTER / HISTORICAL` |
| Approved Brief | `D:\23MySec\docs\page-briefs\APP-MB_MASTERBATCH_BRIEF_V0.2.md` | `17DCE11C09A9CC2FA156F9BC0F392C80873D902020AC13045DB841F2BF95EF65` | `APPROVED_GATE_1_BASELINE` |
| Gate 1 user approval | `D:\23MySec\pages\applications\masterbatch\05_review\APP-MB_GATE1_USER_APPROVAL_AND_CLOSURE_V0.1.md` | `6AE3FA0E0C849209F21A752ED99CDA60E90F368131F13655ED3A7D121F455E05` | `APPROVED / CLOSED` |
| Article input audit | `D:\23MySec\pages\applications\masterbatch\01_research\APP-MB_GATE1_ARTICLE_INPUT_AUDIT_V0.2.md` | `3D8033E1DFD6AB3522E122C9F8C6F4625FA5237B68E622A7ABD7A8D6D23BB752` | `ACCEPTED_GATE_1_AND_GATE_2_INPUT` |
| Claim/Evidence Register | `D:\23MySec\pages\applications\masterbatch\01_research\APP-MB_GATE1_CLAIM_EVIDENCE_REGISTER_V0.2.csv` | `B111A47EE0E09889DFDB1125157A7AB736EEA72A96EDD739C12896E9E0278C8B` | `APPROVED_GATE_1_EVIDENCE_BASELINE` |
| Gate 1 PCR | `D:\23MySec\pages\applications\masterbatch\05_review\APP-MB_GATE1_PROJECT_CONTROL_REVIEW_V0.2.md` | `2EE7EFEBEA33BA96C73E7F58FAFAEC0661B6CA775CF87C94AE5D6848E5B39F43` | `PROJECT_CONTROL_PASS / CLOSED_AFTER_USER_DECISION` |
| Exact R04 article | `D:\22文案写作分析\projects\titanium-dioxide-for-masterbatch\a05-editing-production\run-04-d23-gate2-buyer-clean-v1\article-edited.md` | `7A40744FF8BB20A4FC3B35CC8FFDFABD40ECFC18DE9C53F81B06A7630F277CFC` | `APPROVED_PLANNING_INPUT` |
| PRODUCT matrix | `D:\23MySec\pages\products\01_research\PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` | `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406` | `CURRENT_RELATIONSHIP_AUTHORITY` |

The V0.1 Gate 2 Skeleton and its Project Control review remain historical work inputs. Their proposed 14-module structure was not treated as user-approved Full Copy. A V0.2 preserves the substantive buyer decisions while removing duplicate standalone navigation/questions and internal workflow framing.

## 4. Candidate scope and regression

- B contains one visible H1 and 10 H2 sections: 11 modules including Hero.
- The technical sequence is two-stage definition, comparison basis, evidence roles, final-use boundary, documents, buyer-owned evaluation steps and accepted-endpoint economics.
- Product review follows technical evaluation and precedes Documents, Sample and RFQ.
- Seven Grade rows match PRODUCT V0.3: M-510, M-200, M-108, M-210, M-340, M-886 and M-2377; five Chloride and two Sulfate.
- One, several and unknown-Grade paths, incomplete technical inputs and required-or-estimated MT are supported.
- Four public sources were checked on 7 September 2026 for entity, page type, date, landing identity and exact predicate. Access restrictions and scope results are recorded in the cold-read report.
- The exact article's 51 private statement comments do not render.
- No carrier/loading/formulation prescription, universal process setting, pass threshold, Grade ranking/recommendation/equivalence, availability or commercial promise renders.

## 5. Open items and next responsibility

| Item | Status / owner |
|---|---|
| `APP-MB-G2-BR-F01` | `CLOSED / TARGETED_REREVIEW` |
| `APP-MB-G2-BR-F02` | `CLOSED / TARGETED_REREVIEW` |
| `APP-MB-G2-BR-F03` | `CLOSED / FINAL_TARGETED_REREVIEW` |
| Independent Step 3 and adjacent rereview | `COMPLETE / NO_NEW_FINDINGS` |
| Project Control review after Finding closure | `PASS` |
| Batch user approval | `USER_APPROVED / CLOSED / G2-7PAGE-APPROVAL-01` |
| Registered URL | `PROVISIONAL_URL`; final Canonical and production route remain unresolved |

The revised package passed independent verification and Project Control review, and the user approved the exact combination under `G2-7PAGE-APPROVAL-01`.

## 6. Gate boundary

- The earlier revision and rereview readiness states remain historical evidence.
- Gate 2 is `USER_APPROVED / CLOSED`. Gate 3, development, CMS, deployment, publication and indexing are not authorized.
- Status and Index now point to this approved successor Manifest.

## 7. Change record

| Date | Version | Change | Status |
|---|---|---|---|
| 2026-09-07 | V0.4 | Advanced the current pointer from the Skeleton checkpoint to the complete Gate 2 A/B/C candidate, source recheck and Buyer cold read | `READY_FOR_INDEPENDENT_BUYER_REVIEW / GATE_2_OPEN` |
| 2026-09-07 | V0.4 same-stage revision | Recorded Buyer Review F01/F02, retained A V0.2, selected B/C V0.2 and saved the revision response | `REVISED / PENDING_INDEPENDENT_REREVIEW / GATE_2_OPEN` |
| 2026-09-07 | V0.4 same-stage Step 3 revision | Recorded targeted rereview closure of F01/F02 and F03; retained A V0.2, selected B/C V0.3 and saved the Step 3 response | `F03_REVISED / PENDING_INDEPENDENT_REREVIEW / GATE_2_OPEN` |
| 2026-09-07 | V0.4 same-stage review closure | Recorded final independent rereview, F01–F03 closure and Project Control pass; Gate 2 remains open pending batch user approval | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |

## Gate 2 user approval and closure

On 2026-09-07 the user approved this exact current APP-MB Full Buyer Clean Copy and module order as part of the seven-page batch. Decision `G2-7PAGE-APPROVAL-01` closes Gate 2 and sets `FULL_COPY_AND_MODULE_ORDER_CONFIRMED = YES`. This V0.5 Manifest supersedes V0.4 as the unique current page pointer. Gate 3–10, development and publication remain not started and not authorized.

- Approved combination: A V0.2 / B V0.3 / C V0.3.
- Frozen identities: A `633A2165153D0F60711F9C170D84E658CB245D9F971AFE81A4F2B079C60344DC`; B `06BDD245D1722223C415E0C4CECC7248F64D938CC37F936AE160B240FAA9343F`; C `944FEE912E10FA2DDF9A5700D2D925E584B07EDB998AF7B6B13194D8143AD168`.
