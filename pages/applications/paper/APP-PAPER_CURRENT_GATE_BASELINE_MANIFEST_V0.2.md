# APP-PAPER Current Gate Baseline Manifest V0.2

## 1. Control

| Field | Value |
|---|---|
| Page ID | `APP-PAPER` |
| Page | `Titanium Dioxide for Paper` |
| Date | `2026-09-07` |
| Manifest role | `UNIQUE_CURRENT_MANIFEST` |
| Manifest status | `GATE_2_PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL / ACTIVE` |
| Gate 1 | `USER_APPROVED / CLOSED`; `CONTENT_INTENT_CONFIRMED` |
| Current Gate | `GATE_2 / OPEN` |
| Gate 2 review state | `INDEPENDENT_REVIEW_COMPLETE / F01-F02_CLOSED / PROJECT_CONTROL_PASS_PENDING_BATCH_USER_APPROVAL` |
| Project Control / user approval | `PASS / PENDING_BATCH_USER_APPROVAL` |
| Gate 3–10 / development / publication | `NOT_AUTHORIZED / NOT_PUBLISHED` |
| Site scope | `tio2-my` |

This new-stage Manifest selects the complete APP-PAPER Gate 2 A/B/C candidate and execution cold read. It supersedes V0.1 as the current pointer because the page advanced from its approved Gate 1 baseline to a Full Copy candidate. It does not approve or close Gate 2.

## 2. Current Gate 2 candidate

| Role | Current file | SHA-256 | Status |
|---|---|---|---|
| A — Content Skeleton | `D:\23MySec\pages\applications\paper\04_planning\APP-PAPER_GATE2_CONTENT_SKELETON_V0.1.md` | `E3CAAC198E21B20BE7366D444201062BD6D3AF17DAABDF72984E37C8E5614C14` | `CURRENT_GATE_2_CANDIDATE` |
| B — Full Buyer Clean Copy | `D:\23MySec\pages\applications\paper\04_planning\APP-PAPER_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` | `14A77A04347E78B7AD080CD9D8B7F6251692450380216506E6E0745724012542` | `CURRENT_VISIBLE_COPY_CANDIDATE` |
| C — Content Contract | `D:\23MySec\pages\applications\paper\04_planning\APP-PAPER_GATE2_CONTENT_CONTRACT_V0.2.md` | `12AC65FD35F9B48FD5AABFB7085F443F4E94A57B9AEAD4B1E8B951D2BF1CA244` | `CURRENT_STABLE_CONTRACT_CANDIDATE` |
| Execution and Buyer Cold Read | `D:\23MySec\pages\applications\paper\05_review\APP-PAPER_GATE2_EXECUTION_AND_BUYER_COLD_READ_V0.1.md` | `E81E5D71F699FA5813384EA93A861B90FCD3C80578ACDF73D8CEDB21E4BA8B2D` | `EXECUTION_SELF_CHECK / NOT_INDEPENDENT_REVIEW` |
| Independent Buyer Review | `D:\23MySec\pages\applications\paper\05_review\APP-PAPER_GATE2_FULL_COPY_BUYER_REVIEW_V0.1.md` | `D4435B8D4B9987D6A52D040EA76C575A6B0CF1D5300745E402AFB9D8788686BF` | `PASS_WITH_MINOR_REVISIONS / F01-F02` |
| Revision Response | `D:\23MySec\pages\applications\paper\05_review\APP-PAPER_GATE2_FULL_COPY_REVISION_RESPONSE_V0.1.md` | `B451784F92796B52B6615D345665B32BF26BE34871C659F86CDC18D3AEDDB46E` | `F01-F02_REVISED / PENDING_INDEPENDENT_REREVIEW` |
| Independent Buyer Rereview | `D:\23MySec\pages\applications\paper\05_review\APP-PAPER_GATE2_FULL_COPY_BUYER_REREVIEW_V0.1.md` | `4554408EF376BFFC952314DAEF6A37C1CFC36F7E20B9ADE2062F457F6A05CF40` | `F01-F02_CLOSED / NO_NEW_FINDINGS` |
| Project Control Review | `D:\23MySec\pages\applications\paper\05_review\APP-PAPER_GATE2_FULL_COPY_PROJECT_CONTROL_REVIEW_V0.1.md` | `5F7642844ACA10C9EE044726E63E1463C3C8C87547DAA3D677F401BB17AA575C` | `PASS_PENDING_BATCH_USER_APPROVAL` |

The Manifest does not record its own hash because adding that value would change the file being hashed.

## 3. Retained approved baseline and trace

| Role | File | SHA-256 | Status |
|---|---|---|---|
| Previous current Manifest | `D:\23MySec\pages\applications\paper\APP-PAPER_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md` | `1E192C664000762D4D4ABAD248E3FE0FD78DDEB91113C69A05FBC2C350EE988D` | `HISTORICAL_GATE_1_BASELINE` |
| Approved Brief | `D:\23MySec\docs\page-briefs\APP-PAPER_PAPER_BRIEF_V0.1.md` | `A61557BA3175640706B9150AFEB402C2CEEDF58A0869BFF538A6CBE6E1259FE5` | `APPROVED_GATE_1_BASELINE` |
| Gate 1 research | `D:\23MySec\pages\applications\paper\01_research\APP-PAPER_GATE1_RESEARCH_REPORT_V0.1.md` | `EA3DA19D651A286FB34B6447771634084D261330C435E6821B734602BB439629` | `APPROVED_GATE_1_RESEARCH_BASELINE` |
| Claim Evidence Register | `D:\23MySec\pages\applications\paper\01_research\APP-PAPER_GATE1_CLAIM_EVIDENCE_REGISTER_V0.1.csv` | `C222D1CE1878765E50F900E91B8923C62B82FB7A56FD4B7DD2B65E6F8FBFAD5F` | `APPROVED_GATE_1_EVIDENCE_BASELINE` |
| Search-intent support | `D:\23MySec\pages\applications\paper\01_research\APP-PAPER_SEARCH_INTENT_EVIDENCE_SUPPORT_V0.1.md` | `20665CDE5B8A807461338F3E939EABE9D864A80FF9330A448CB803F55EF9E290` | `APPROVED_GATE_1_INPUT` |
| Gate 1 Project Control review | `D:\23MySec\pages\applications\paper\05_review\APP-PAPER_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md` | `9ACB742B6F49889F6A14C5615DC0A00FE222E8135377A61233CC7D841F1A1C15` | `PROJECT_CONTROL_PASS / CLOSED_AFTER_USER_DECISION` |
| Exact approved Paper article | `D:\22文案写作分析\projects\titanium-dioxide-for-paper\a05-editing-production\run-02-paper-targeted-revision-v02\article-edited.md` | `1B36A1835BF8DC6718D9D3E424121B3E5A66C499FD442DC78017DFF3D649DA77` | `USER_APPROVED_PUBLIC_CONTENT_INPUT` |
| Article user-approval record | `D:\23MySec\pages\applications\02_analysis\APPLICATION_ARTICLE_TOPIC_CONTROLLER_MANDATE_AND_THREE_ARTICLE_USER_APPROVAL_V0.1.md` | `12F5DCCB95F6D00156B975BB7D8594273988655D7519E76472666646D5384F6A` | `APPROVED / RETAINED` |
| PRODUCT relationship matrix | `D:\23MySec\pages\products\01_research\PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` | `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406` | `CURRENT_RELATIONSHIP_AUTHORITY` |

## 4. Candidate scope and regression

- B contains one visible H1 and ten H2 sections: eleven modules including the Hero.
- The buyer order is Paper-system definition; distinct optical method families; evidence roles; identity and sampling; bounded laboratory work; next-evidence decisions; accepted-endpoint economics; Grade review; owner actions; sources.
- The detailed technical framework is explicitly bounded to decorative and lightweight paper. It supports the general Paper page without treating those constructions or results as interchangeable with other paper contexts.
- Two Grade rows match PRODUCT V0.3: M-350 and M-2377. No process label is rendered, and neither link establishes recommendation, ranking, Paper-type suitability, performance or equivalence.
- One, several and unknown-Grade paths, incomplete technical inputs and required-or-estimated MT are supported.
- Seven public sources were rechecked on 7 September 2026 for entity, page type, date, landing identity and exact predicate. ISO 186:2002 is identified as published and confirmed in 2023, with the official page's dated revision status disclosed. The ISO 5269-1 exception now names ISO 3688 explicitly and cannot be confused with ISO 2470-1.
- The exact article's private workflow and trace material do not render.
- No child page, formula or setting, universal threshold, internal qualification/SOP/readiness language, Grade ranking/recommendation/equivalence, performance, availability or commercial promise renders.

## 5. Open items and next responsibility

| Item | Status / owner |
|---|---|
| `APP-PAPER-G2-BR-F01` | `CLOSED / INDEPENDENT_REREVIEW` |
| `APP-PAPER-G2-BR-F02` | `CLOSED / INDEPENDENT_REREVIEW` |
| Independent targeted rereview | `COMPLETE / NO_NEW_FINDINGS` |
| Project Control review after Finding closure | `PASS_PENDING_BATCH_USER_APPROVAL` |
| Batch user approval | `PENDING / USER` |
| Registered URL | `PROVISIONAL_URL`; final Canonical and production route remain unresolved |

## 6. Gate boundary

- `READY_FOR_INDEPENDENT_BUYER_REVIEW` is a handoff state, not Gate approval.
- Gate 2 remains open. Gate 3, implementation, development, CMS, deployment, publication and indexing are not authorized.
- Shared Status, Index and queue-control files are unchanged.
- `D:\16Wordpress_nextjs` was not operated.

## 7. Change record

| Date | Version | Change | Status |
|---|---|---|---|
| 2026-09-07 | V0.2 | Advanced the current pointer from the approved Gate 1 baseline to the complete Gate 2 A/B/C candidate, dated source recheck and Buyer cold read | `READY_FOR_INDEPENDENT_BUYER_REVIEW / GATE_2_OPEN` |
| 2026-09-07 | V0.2 same-stage revision | Recorded Buyer Review F01/F02, retained A V0.1, selected B/C V0.2 and saved the revision response | `F01-F02_REVISED / PENDING_INDEPENDENT_REREVIEW / GATE_2_OPEN` |
| 2026-09-07 | V0.2 same-stage review closure | Recorded independent rereview, F01/F02 closure and Project Control pass; Gate 2 remains open pending batch user approval | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
