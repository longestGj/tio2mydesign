# PRODUCT-PROC-CL Current Gate Baseline Manifest V0.11

## 1. Control and authorization

| Field | Value |
|---|---|
| Page ID | `PRODUCT-PROC-CL` |
| Page / URL | Chloride Process Titanium Dioxide / `/products/chloride-process-titanium-dioxide/` |
| Page type | Process aggregation page |
| Priority / language / scope | P1 / EN / `tio2-my` |
| Cluster / primary keyword | `PRODUCT-03` / `chloride process titanium dioxide` |
| Date | 2026-09-06 |
| Current package role | Unique current navigation for approved Gate 1, confirmed Gate 2 Skeleton and conditionally approved Full Copy revision |
| Gate 1 | `APPROVED / CLOSED` |
| Gate 1 authority | V0.2 Manifest and its exact approved package remain authoritative |
| Gate 2 authorization | `USER_AUTHORIZED_STEP_1_SKELETON / EXECUTED` |
| Gate 2 Skeleton status | `USER_CONFIRMED` |
| Gate 2 Full Copy | `USER_CONDITIONALLY_APPROVED / TWO_MINOR_REVISIONS_EXECUTED / PENDING_PROJECT_CONTROL_DIRECT_VERIFICATION` |
| Gate 2 closure | `PENDING_PROJECT_CONTROL_DIRECT_VERIFICATION` |
| Gate 3–10 | `NOT_STARTED / NOT_AUTHORIZED` |
| Authorization source | User confirmed the Skeleton, then confirmed the Full Copy module order and specified two exact Minor revisions; after those exact revisions Project Control may record `USER_APPROVED / CLOSED` without another Buyer Review |
| Execution owner | `chloride_gate2_execution` subagent |
| Review owner | Must be a different Gate 2 Buyer Review subagent |
| Historical relation | V0.2 remains the immutable approved Gate 1 baseline; V0.3–V0.8 preserve Skeleton execution/approval states; V0.9 preserves Full Copy execution; V0.10 records Buyer and Project Control review of B V0.1/C V0.5; V0.11 points to the user's exact two-Minor revision package |

This Manifest preserves the confirmed Skeleton and the reviewed B V0.1/C V0.5 baseline, and records execution of the user's exact two-Minor Full Copy revision. The Execution Agent does not itself close Full Copy or Gate 2. Project Control direct verification remains; no new Buyer Review is required. Gate 3, development, deployment, publication and indexing remain unauthorized.

## 2. Current Gate 1 authority retained

The complete Gate 1 authority remains the V0.2 package:

| Responsibility | Authority |
|---|---|
| Approved Page Brief | `docs/page-briefs/PRODUCT-PROC-CL_CHLORIDE_PROCESS_TITANIUM_DIOXIDE_BRIEF_V0.2.md` |
| Approved Gate 1 Research | `pages/products/chloride-process/01_research/PRODUCT-PROC-CL_GATE1_RESEARCH_REPORT_V0.2.md` |
| Current claim/evidence control | `pages/products/chloride-process/01_research/PRODUCT-PROC-CL_GATE1_CLAIM_EVIDENCE_REGISTER_V0.2.csv` |
| Gate 1 project-control review | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md` |
| Gate 1 authorization and original hashes | `pages/products/chloride-process/PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md` |

The approved direction remains: concise Process definition; exactly eight current Chloride Grades; Grade/Application/Documents/RFQ paths; primary same-page Grade action; no Process superiority or full versus content.

## 3. Confirmed Gate 2 Skeleton and current Full Copy candidate

| Responsibility | Candidate artifact | Version | Bytes | SHA-256 | Current status |
|---|---|---:|---:|---|---|
| A — Confirmed Content Skeleton | `pages/products/chloride-process/04_planning/PRODUCT-PROC-CL_GATE2_CONTENT_SKELETON_V0.4.md` | V0.4 | 12493 | `56ACF80C3C50BFBC36BAFF37452AE375C1F5323FF5728316497CC7F3E1B7C90D` | `USER_CONFIRMED` |
| C — Confirmed Skeleton-stage content and operation contract | `pages/products/chloride-process/04_planning/PRODUCT-PROC-CL_GATE2_CONTENT_CONTRACT_V0.4.md` | V0.4 | 15422 | `F89389B6A5D987DAF414AB6C0153FBFB84FD617BFF730E96ABEE4BD0705C074F` | `USER_CONFIRMED_AS_SKELETON_SCOPE` |
| Revision self-check | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_SKELETON_EXECUTION_SELF_CHECK_V0.4.md` | V0.4 | 8191 | `3324BEFBB7D3B5B7AA7A02050CDA415CD413973C30D3DAA1C398E879C6AF4FF9` | `PC_CL_01_REVISION_SELF_CHECK_COMPLETE / NOT_INDEPENDENT_REVIEW` |
| Current Project-Control Revision Response | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_SKELETON_PROJECT_CONTROL_REVISION_RESPONSE_V0.1.md` | V0.1 | 5987 | `1518A48468827F2B369029312C64DA081E49645E9D1A0157593ABB7B64213A44` | `EXECUTION_REVISION_COMPLETE / REVIEWED`; PC-CL-01 closed |
| Initial Buyer Review | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_SKELETON_BUYER_REVIEW_V0.1.md` | V0.1 | 9602 | `532EE4D3C870AC941EB01A3E4F0FEE8B25D391147FB9441F36E1213A12A1A262` | `BUYER_REVIEW_PASS_WITH_MINOR_REVISIONS`; BR-CL-01 open pending reviewer verification |
| Buyer Re-review | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_SKELETON_BUYER_REVIEW_V0.2.md` | V0.2 | 8568 | `83E566A7733CBD74F1B1C369AD2B12EA6D47D90A0D0CB4039E2F8C0F678B5EE0` | `BUYER_REVIEW_PASS_WITH_MINOR_REVISIONS`; BR-CL-01 partially resolved and open |
| Final BR-CL-01 Buyer Re-review | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_SKELETON_BUYER_REVIEW_V0.3.md` | V0.3 | 7222 | `A7D118F3EE8EB6ED70428F5C545015ED90FFB9ED77933BADC7C7013D523DD08B` | `READY_FOR_PROJECT_CONTROL_REVIEW`; BR-CL-01 resolved/closed in Buyer Review |
| Project Control Review | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_SKELETON_PROJECT_CONTROL_REVIEW_V0.1.md` | V0.1 | 5250 | `9FEBE9E53ED237601190628895CC1E4C73E6334E365717A8564E366B0ECF9F5C` | `RETURN_FOR_TARGETED_BUYER_COPY_REVISION`; PC-CL-01 open |
| PC-CL-01 Buyer Re-review | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_SKELETON_BUYER_REVIEW_V0.4.md` | V0.4 | 8052 | `0D94EC22A0A7A258FD4E6C71695146BAF334A5974C9EDD8CA08900C878B4014F` | `READY_FOR_PROJECT_CONTROL_REVIEW`; PC-CL-01 independently verified resolved |
| Current Project Control Review | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_SKELETON_PROJECT_CONTROL_REVIEW_V0.2.md` | V0.2 | 4808 | `21DDEFB125AAA8F55A3FCBBEDF070D62084D0C7BAE8DDD99098B27EDC1DF4D2F` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; PC-CL-01 closed |
| Skeleton user confirmation | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_SKELETON_USER_CONFIRMATION_V0.1.md` | V0.1 | 2849 | `5A0E032105F2DCCB701A69766DCA79823A14B444154478A235AF0E1A37C50BFD` | `CONTENT_SKELETON = USER_CONFIRMED`; Full Copy authorized |
| Previous reviewed B | `pages/products/chloride-process/04_planning/PRODUCT-PROC-CL_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md` | V0.1 | 5252 | `6DE3DFA221B285B22F45C80DF1A5E0690AD4A03822153DBBFBA36493B7ADE55C` | `REVIEWED_BASELINE / SUPERSEDED_BY_USER_DIRECTED_V0.2` |
| Previous reviewed complete C | `pages/products/chloride-process/04_planning/PRODUCT-PROC-CL_GATE2_CONTENT_CONTRACT_V0.5.md` | V0.5 | 18611 | `40EEDBDD0DC67F5C5C4247EEEB0118A9FDBA481DF80F87C46EA1049265290D62` | `REVIEWED_BASELINE / SUPERSEDED_BY_USER_DIRECTED_V0.6` |
| Current B — Full Buyer Clean Copy | `pages/products/chloride-process/04_planning/PRODUCT-PROC-CL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` | V0.2 | 5296 | `B4314B4B80F3C047FBB2481246A93894EDA4EE572329F8B1F606B85BC5853A0D` | `TWO_MINOR_REVISIONS_EXECUTED / PENDING_PROJECT_CONTROL_DIRECT_VERIFICATION` |
| Current complete C | `pages/products/chloride-process/04_planning/PRODUCT-PROC-CL_GATE2_CONTENT_CONTRACT_V0.6.md` | V0.6 | 20318 | `C0A4554DEB11A222384604A5EDA369EE2DA901D1F925915F8334A3C9D95687C0` | `SYNCHRONIZED / PENDING_PROJECT_CONTROL_DIRECT_VERIFICATION` |
| Current Full Copy Execution Self-check | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_FULL_COPY_EXECUTION_SELF_CHECK_V0.2.md` | V0.2 | 5088 | `3E11996A8004BA7B07D26F04E63E35E85D9B862261ABE92CA1C7C490B8B1CCA7` | `CONDITIONAL_APPROVAL_REVISION_SELF_CHECK_COMPLETE` |
| Current Full Copy Revision Response | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_FULL_COPY_REVISION_RESPONSE_V0.1.md` | V0.1 | 3495 | `C0A8F936C741F283B06B67AAB391E9711E2B10EA474FA6AAD83C6FED4563FE48` | `TWO_MINOR_REVISIONS_EXECUTED / PENDING_PROJECT_CONTROL_DIRECT_VERIFICATION` |
| Full Copy Buyer Review | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_FULL_COPY_BUYER_REVIEW_V0.1.md` | V0.1 | 11365 | `2F31E2CDD766D860872B6B1F66C4F3CBAEFC97C68598B836473C1357F780EE16` | `READY_FOR_PROJECT_CONTROL_REVIEW`; zero required Findings on B V0.1/C V0.5; no rerun required by user |
| Full Copy Project Control Review | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_FULL_COPY_PROJECT_CONTROL_REVIEW_V0.1.md` | V0.1 | 3969 | `A77621C1C70C6876BF49ACACF88ED7BE7309CEF82F87D133E5E69BDD0D42CDB0` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` on B V0.1/C V0.5 |

This Manifest has no self-referential hash.

## 4. Candidate structure and buyer path

Confirmed Skeleton and Full Copy candidate buyer path:

`Understand the Process label → scan eight Grades → open Grade evidence → request documents or discuss the requirement`

Candidate page-owned modules:

1. `Chloride Process Titanium Dioxide` — Hero and immediate actions.
2. `What the Chloride Process Tells You` — concise definition and limit of the label.
3. `Explore Chloride-Process Grades` — one continuous eight-Grade list with natural application-overlap guidance and exact approved directory summaries.
4. `How to Evaluate a Chloride-Process Grade` — illustrative context for all five approved Application audiences, Grade evidence, documents and validation sequence.
5. `Discuss Your Chloride-Process TiO2 Requirement` — RFQ and unknown-Grade path.

Current B V0.2 implements these same five modules as the unique visible-copy source. It changes only the user-specified B-03 opening and B-05 final sentence; it adds no page, URL, keyword owner, Grade relationship, document promise, form field, FAQ or structural module.

## 5. Authority and consumption order

1. Current explicit user decisions and root governance.
2. V0.2 approved Gate 1 Manifest and its four core artifacts.
3. PRODUCT V0.3 matrix/unified audit for the eight-Grade relationship.
4. Product Hub approved exact directory strings for Grade summaries.
5. Buyer Review V0.1–V0.4 for the history, closure of `BR-CL-01` and independent verification of `PC-CL-01`.
6. Project Control Review V0.1 for `PC-CL-01` and its acceptance condition.
7. Revised Gate 2 Skeleton V0.4 for proposed visible structure and candidate copy.
8. Revised Content/Operation Contract V0.4 for action, source and machine-expression meaning.
9. Project-Control Revision Response V0.1 and Execution Self-check V0.4 as producing-Agent evidence only.
10. Project Control Review V0.2 for closure of `PC-CL-01`.
11. Skeleton User Confirmation V0.1 for the confirmed Step 1 package and Full Copy authorization.
12. Full Buyer Clean Copy V0.1 and Complete C V0.5 as the independently reviewed pre-user-revision baseline.
13. Full Copy Buyer Review V0.1 and Full Copy Project Control Review V0.1 for that reviewed baseline.
14. User's conditional final decision: module order confirmed, two exact Minor revisions, no new Buyer Review.
15. Full Buyer Clean Copy V0.2 for the current buyer-visible page words and actions.
16. Complete Content/Operation Contract V0.6 for current link, context, state, SEO, social, GEO, Schema and source meaning.
17. Full Copy Revision Response V0.1 and Execution Self-check V0.2 as producing-Agent evidence only.

If a Gate 2 candidate conflicts with the approved Gate 1 baseline, the candidate must be revised. A newer filename does not override approved facts or responsibilities.

## 6. Review and open items

| Item | Current state | Next owner / acceptance |
|---|---|---|
| `BR-CL-01` | `RESOLVED / CLOSED_IN_BUYER_REVIEW_V0.3` | Preserve the continuous list and absence of partial per-Grade application enumeration |
| `PC-CL-01` | `RESOLVED / CLOSED_BY_PROJECT_CONTROL_REVIEW_V0.2` | Preserve the range-level Hero, natural CL-03 overlap guidance and illustrative five-application context |
| Skeleton user confirmation | `USER_CONFIRMED` | Preserve the confirmed V0.4 structure, copy direction, eight-Grade treatment and action contract |
| Module order | `USER_CONFIRMED` | Preserve the five-module order; no Skeleton rework |
| Two Minor Full Copy revisions | `EXECUTED / PENDING_PROJECT_CONTROL_DIRECT_VERIFICATION` | Project Controller mechanically verifies the two exact replacements, unchanged remainder and C synchronization |
| Additional Buyer Review | `NOT_REQUIRED_BY_USER` | Do not dispatch another Reviewer for these exact revisions |
| Full Copy and Gate 2 closure | `CONDITIONALLY_AUTHORIZED / NOT_RECORDED_BY_EXECUTION_AGENT` | Project Controller may record `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` and `USER_APPROVED / CLOSED` after clean direct verification |
| Downstream route integration | Later implementation dependency | Gate 7–9 bind and verify same-scope Grade, Applications, Documents, RFQ and RES-PROC routes |
| Social/page image | Not selected | Gate 4–5 may select an approved factual asset; no placeholder value |
| Publication and indexing | Not authorized | Requires later Gate completion and explicit release authorization |

There is no new enterprise-fact question in this Skeleton. Malaysia-origin uses existing site-wide approval. COO, plant operation, price, inventory, capacity, lead time and customs outcomes are not proposed.

## 7. Change record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-06 | Initial Gate 1 submission navigation | Historical |
| V0.2 | 2026-09-06 | Recorded Gate 1 project-control PASS and user approval | `APPROVED / CLOSED` Gate 1 authority retained |
| V0.3 | 2026-09-06 | Added Gate 2 Step 1 Skeleton, companion contract, execution self-check and independent-review handoff | `SUBMITTED_FOR_INDEPENDENT_BUYER_REVIEW / NOT_APPROVED` |
| V0.4 | 2026-09-06 | Recorded Buyer Review V0.1, narrow BR-CL-01 revision, revised A/C/self-check and Revision Response | `PENDING_SAME_REVIEWER_RE_REVIEW / NOT_APPROVED` |
| V0.5 | 2026-09-06 | Recorded Buyer Re-review V0.2 and the second narrow BR-CL-01 wording revision with revised A/C/self-check and Revision Response | `PENDING_FINAL_SAME_REVIEWER_RE_REVIEW / NOT_APPROVED` |
| V0.6 | 2026-09-06 | Recorded Buyer Review V0.3, Project Control Review V0.1 and the targeted PC-CL-01 copy revision with synchronized contract, self-check and response | `PENDING_INDEPENDENT_BUYER_REVIEW / NOT_APPROVED` |
| V0.7 | 2026-09-06 | Recorded Buyer Review V0.4 verification, Project Control Review V0.2 and closure of PC-CL-01 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| V0.8 | 2026-09-06 | Recorded the user's `确认。` for the concrete Skeleton and authorization to proceed to Full Buyer Clean Copy | `CONTENT_SKELETON = USER_CONFIRMED / FULL_COPY_AUTHORIZED` |
| V0.9 | 2026-09-06 | Added the complete Buyer Clean Copy B, complete C and Full Copy Execution Self-check within the confirmed five-module scope | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / PENDING_INDEPENDENT_BUYER_REVIEW / NOT_APPROVED` |
| V0.10 | 2026-09-06 | Recorded Full Copy Buyer Review V0.1 with zero Findings and Full Copy Project Control Review V0.1 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| V0.11 | 2026-09-06 | Recorded the user's confirmed module order and executed the two exact Minor Full Copy revisions in B V0.2/C V0.6 with response and self-check | `PENDING_PROJECT_CONTROL_DIRECT_VERIFICATION / NOT_CLOSED_BY_EXECUTION_AGENT` |

## 8. Stop point

The Gate 2 Execution Agent applied only the user's two exact Full Copy revisions, synchronized current C, saved a versioned response and self-check, and stopped for Project Control direct verification. Root `00_PROJECT_STATUS.md` and `01_PROJECT_INDEX.md` were not changed. Skeleton V0.4, B V0.1, C V0.5 and every Review report remain unchanged. No new Buyer Review is required. The Execution Agent did not close Full Copy or Gate 2, and Gate 3–10 remain unauthorized. No visual, code, CMS, development, deployment, publication or indexing work was performed. `D:\16Wordpress_nextjs` was not accessed.
