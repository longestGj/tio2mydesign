# APP-INK Current Gate Baseline Manifest V0.2

## 1. Control

| Field | Value |
|---|---|
| Page ID | `APP-INK` |
| Page | `Titanium Dioxide for Printing Inks` |
| Date | `2026-09-07` |
| Manifest role | `UNIQUE_CURRENT_MANIFEST` |
| Manifest status | `GATE_2_PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL / ACTIVE` |
| Gate 1 | `USER_APPROVED / CLOSED`; `CONTENT_INTENT_CONFIRMED` |
| Current Gate | `GATE_2 / OPEN` |
| Gate 2 review state | `INDEPENDENT_REVIEW_COMPLETE / F01-F04_CLOSED / PROJECT_CONTROL_PASS_PENDING_BATCH_USER_APPROVAL` |
| Project Control / user approval | `PASS / PENDING_BATCH_USER_APPROVAL` |
| Gate 3–10 / development / publication | `NOT_AUTHORIZED / NOT_PUBLISHED` |
| Site scope | `tio2-my` |

This new-stage Manifest selects the complete APP-INK Gate 2 A/B/C candidate and execution cold read. It supersedes V0.1 as the current pointer because the page advanced from its approved Gate 1 baseline to a Full Copy candidate. It does not approve or close Gate 2.

## 2. Current Gate 2 candidate

| Role | Current file | SHA-256 | Status |
|---|---|---|---|
| A — Content Skeleton | `D:\23MySec\pages\applications\printing-inks\04_planning\APP-INK_GATE2_CONTENT_SKELETON_V0.1.md` | `BBB3A2BBD55D0140C4CFBEF2C7E929E5F7F5C47478671B50AEFF72F33E5554A6` | `CURRENT_GATE_2_CANDIDATE` |
| B — Full Buyer Clean Copy | `D:\23MySec\pages\applications\printing-inks\04_planning\APP-INK_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` | `B5A92976F526FCFEE74FDF088EC9EA3EF21456E5BA66965F79C50EC4DD5C938D` | `CURRENT_VISIBLE_COPY_CANDIDATE` |
| C — Content Contract | `D:\23MySec\pages\applications\printing-inks\04_planning\APP-INK_GATE2_CONTENT_CONTRACT_V0.2.md` | `11883E118E017E7886D91A3A6400150FCC92E3972B56847AAFECC9250E960DC3` | `CURRENT_STABLE_CONTRACT_CANDIDATE` |
| Execution and Buyer Cold Read | `D:\23MySec\pages\applications\printing-inks\05_review\APP-INK_GATE2_EXECUTION_AND_BUYER_COLD_READ_V0.1.md` | `679985CE0BEAB6A75812BFC1CD7FD911B193163FB9A9BDDE84D1656C7E80BF81` | `EXECUTION_SELF_CHECK / NOT_INDEPENDENT_REVIEW` |
| Independent Buyer Review | `D:\23MySec\pages\applications\printing-inks\05_review\APP-INK_GATE2_FULL_COPY_BUYER_REVIEW_V0.1.md` | `935445855CFFE928FA9E0F02C2569BEFF98A7132470AFF2E349D61524C523736` | `FINDINGS_REQUIRE_REVISION / F01-F04` |
| Revision Response | `D:\23MySec\pages\applications\printing-inks\05_review\APP-INK_GATE2_FULL_COPY_REVISION_RESPONSE_V0.1.md` | `D611EDEEF067275A1CD9C3EC776F6AECA984D10DE4F591EDE8B515FF391D97D6` | `F01-F04_REVISED / PENDING_INDEPENDENT_REREVIEW` |
| Independent Buyer Rereview | `D:\23MySec\pages\applications\printing-inks\05_review\APP-INK_GATE2_FULL_COPY_BUYER_REREVIEW_V0.1.md` | `6143280C4B03FBA117AA0F607F08C6C654BB73928DCD4824BFFCFE1983A7FFF2` | `F01-F04_CLOSED / NO_NEW_FINDINGS` |
| Project Control Review | `D:\23MySec\pages\applications\printing-inks\05_review\APP-INK_GATE2_FULL_COPY_PROJECT_CONTROL_REVIEW_V0.1.md` | `D80100EB908C38AF454939443C30AAB3A983380C3AC77CE21B43AE0B34983A7B` | `PASS_PENDING_BATCH_USER_APPROVAL` |

The Manifest does not record its own hash because adding that value would change the file being hashed.

## 3. Retained approved baseline and trace

| Role | File | SHA-256 | Status |
|---|---|---|---|
| Previous current Manifest | `D:\23MySec\pages\applications\printing-inks\APP-INK_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md` | `0ED087AF195B1EDA9F3417D787C31B3671595033AF1E977528CEF795A8CA1192` | `HISTORICAL_GATE_1_BASELINE` |
| Approved Brief | `D:\23MySec\docs\page-briefs\APP-INK_PRINTING_INKS_BRIEF_V0.1.md` | `8E07A744999FE8729006FA99D0045A0CDEBF1A7BA003C565F44785E136FB70E1` | `APPROVED_GATE_1_BASELINE` |
| Gate 1 research | `D:\23MySec\pages\applications\printing-inks\01_research\APP-INK_GATE1_RESEARCH_REPORT_V0.1.md` | `FD39CF35A3D94864C6D1DD9A23A476AAAFB0C380B780BC9E6F18F50180FDD6F6` | `APPROVED_GATE_1_RESEARCH_BASELINE` |
| Claim/Evidence Register | `D:\23MySec\pages\applications\printing-inks\01_research\APP-INK_GATE1_CLAIM_EVIDENCE_REGISTER_V0.1.csv` | `54C4BE2DA251245BE5C6655B9E52CD1A983067C17F1CBFD113E3AB9C29645F1F` | `APPROVED_GATE_1_EVIDENCE_BASELINE` |
| Search-intent support | `D:\23MySec\pages\applications\printing-inks\01_research\APP-INK_SEARCH_INTENT_EVIDENCE_SUPPORT_V0.1.md` | `258D531CA92902354C58B064118E3AA625ACA574D850096B3CE48EE22BA534C7` | `APPROVED_GATE_1_INPUT` |
| Gate 1 Project Control review | `D:\23MySec\pages\applications\printing-inks\05_review\APP-INK_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md` | `E34D11CCB40D65285F77D475162369FAB918BFE1A7684474EACC55B3B50D183F` | `PROJECT_CONTROL_PASS / CLOSED_AFTER_CORRECTION` |
| Exact approved Printing Inks article | `D:\22文案写作分析\projects\titanium-dioxide-for-printing-inks\a05-production\run-02-rqr-correction-v0.1\article-edited.md` | `9F80F99E7453AEEF28FCB8534AADA9980036EE6AB87F8ACA2D024D464D6F8C55` | `USER_APPROVED_PUBLIC_CONTENT_INPUT` |
| Governed-article approval record | `D:\23MySec\pages\applications\02_analysis\APP-INK_GOVERNED_ARTICLE_PROJECT_CONTROL_REVIEW_V0.1.md` | `399D11227CC170D2BF8909342BB20A2F3641ADC278E43BAB8ECC4FB83D50078D` | `APPROVED / RETAINED` |
| PRODUCT relationship matrix | `D:\23MySec\pages\products\01_research\PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` | `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406` | `CURRENT_RELATIONSHIP_AUTHORITY` |

## 4. Candidate scope and regression

- B contains one visible H1 and ten H2 sections: eleven modules including the Hero.
- Buyer order is system definition; opacity/coverage/colour; dispersion/rheology/stability; grind context; document roles; matched trial; accepted-endpoint economics; Grade review; owner actions; sources.
- Four Grade rows match PRODUCT V0.3: M-350, M-510, M-52 and M-2377. No process label is rendered, and M-2377 has only its approved neutral Printing Inks relationship.
- One, several and unknown-Grade paths, incomplete technical inputs and required-or-estimated MT are supported.
- Six public sources were checked on 7 September 2026 for entity, page type, date, landing identity and exact predicate. F01 corrected Source 1's author identity and Source 3's official title; F02 narrowed the ISO 1524 predicate to its gauge/discrete-solid-particle boundary.
- The exact article's private statement comments do not render.
- No Printing Inks process child page, formula or setting, universal threshold, Grade ranking/recommendation/equivalence, performance, availability or commercial promise renders.

## 5. Open items and next responsibility

| Item | Status / owner |
|---|---|
| `APP-INK-G2-BR-F01` | `CLOSED / INDEPENDENT_REREVIEW` |
| `APP-INK-G2-BR-F02` | `CLOSED / INDEPENDENT_REREVIEW` |
| `APP-INK-G2-BR-F03` | `CLOSED / INDEPENDENT_REREVIEW` |
| `APP-INK-G2-BR-F04` | `CLOSED / INDEPENDENT_REREVIEW` |
| Independent Buyer rereview | `COMPLETE / NO_NEW_FINDINGS` |
| Project Control review | `PASS_PENDING_BATCH_USER_APPROVAL` |
| Batch user approval | `PENDING / USER` |
| Registered URL | `PROVISIONAL_URL`; final Canonical and production route remain unresolved |

## 6. Gate boundary

- `READY_FOR_INDEPENDENT_BUYER_REVIEW` is a handoff state, not Gate approval.
- Gate 2 remains open. Gate 3, implementation, development, CMS, deployment, publication and indexing are not authorized.
- APP-PAPER may start under the strict serial queue after this recorded Project Control pass.
- Shared Status, Index and queue-control files are unchanged.

## 7. Change record

| Date | Version | Change | Status |
|---|---|---|---|
| 2026-09-07 | V0.2 | Advanced the current pointer from the approved Gate 1 baseline to the complete Gate 2 A/B/C candidate, source recheck and Buyer cold read | `READY_FOR_INDEPENDENT_BUYER_REVIEW / GATE_2_OPEN` |
| 2026-09-07 | V0.2 same-stage revision | Recorded Buyer Review F01–F04, retained A V0.1, selected B/C V0.2 and saved the revision response | `F01-F04_REVISED / PENDING_INDEPENDENT_REREVIEW / GATE_2_OPEN` |
| 2026-09-07 | V0.2 same-stage review closure | Recorded independent rereview, F01–F04 closure and Project Control pass; Gate 2 remains open pending batch user approval | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
