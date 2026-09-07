# PRODUCT-PROC-CL Current Gate Baseline Manifest V0.9

## 1. Control and authorization

| Field | Value |
|---|---|
| Page ID | `PRODUCT-PROC-CL` |
| Page / URL | Chloride Process Titanium Dioxide / `/products/chloride-process-titanium-dioxide/` |
| Page type | Process aggregation page |
| Priority / language / scope | P1 / EN / `tio2-my` |
| Cluster / primary keyword | `PRODUCT-03` / `chloride process titanium dioxide` |
| Date | 2026-09-06 |
| Current package role | Unique current navigation for approved Gate 1, user-confirmed Gate 2 Skeleton and the new Full Copy candidate |
| Gate 1 | `APPROVED / CLOSED` |
| Gate 1 authority | V0.2 Manifest and its exact approved package remain authoritative |
| Gate 2 authorization | `USER_AUTHORIZED_STEP_1_SKELETON / EXECUTED` |
| Gate 2 Skeleton status | `USER_CONFIRMED` |
| Gate 2 Full Copy | `USER_AUTHORIZED / EXECUTED / DRAFT_FOR_PROJECT_CONTROL_REVIEW / PENDING_INDEPENDENT_BUYER_REVIEW` |
| Gate 2 closure | `NOT_SET` |
| Gate 3–10 | `NOT_STARTED / NOT_AUTHORIZED` |
| Authorization source | User selected Gate 2 queue item 7, then replied `确认。` after the concrete reviewed Skeleton was displayed; Full Copy is authorized within that confirmed scope |
| Execution owner | `chloride_gate2_execution` subagent |
| Review owner | Must be a different Gate 2 Buyer Review subagent |
| Historical relation | V0.2 remains the immutable approved Gate 1 baseline; V0.3–V0.7 preserve Skeleton execution/review states; V0.8 records the user-confirmed Skeleton and Full Copy authorization; V0.9 adds the Full Copy B/C candidate and its Execution Self-check |

This Manifest preserves the user's confirmation of Skeleton V0.4 and records the resulting Full Copy candidate. It does not approve Full Copy, close Gate 2 or authorize any later Gate, development, deployment, publication or indexing.

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
| Current Project-Control Revision Response | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_SKELETON_PROJECT_CONTROL_REVISION_RESPONSE_V0.1.md` | V0.1 | 5987 | `1518A48468827F2B369029312C64DA081E49645E9D1A0157593ABB7B64213A44` | `EXECUTION_REVISION_COMPLETE / PENDING_INDEPENDENT_BUYER_REVIEW` |
| Initial Buyer Review | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_SKELETON_BUYER_REVIEW_V0.1.md` | V0.1 | 9602 | `532EE4D3C870AC941EB01A3E4F0FEE8B25D391147FB9441F36E1213A12A1A262` | `BUYER_REVIEW_PASS_WITH_MINOR_REVISIONS`; BR-CL-01 open pending reviewer verification |
| Buyer Re-review | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_SKELETON_BUYER_REVIEW_V0.2.md` | V0.2 | 8568 | `83E566A7733CBD74F1B1C369AD2B12EA6D47D90A0D0CB4039E2F8C0F678B5EE0` | `BUYER_REVIEW_PASS_WITH_MINOR_REVISIONS`; BR-CL-01 partially resolved and open |
| Final BR-CL-01 Buyer Re-review | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_SKELETON_BUYER_REVIEW_V0.3.md` | V0.3 | 7222 | `A7D118F3EE8EB6ED70428F5C545015ED90FFB9ED77933BADC7C7013D523DD08B` | `READY_FOR_PROJECT_CONTROL_REVIEW`; BR-CL-01 resolved/closed in Buyer Review |
| Project Control Review | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_SKELETON_PROJECT_CONTROL_REVIEW_V0.1.md` | V0.1 | 5250 | `9FEBE9E53ED237601190628895CC1E4C73E6334E365717A8564E366B0ECF9F5C` | `RETURN_FOR_TARGETED_BUYER_COPY_REVISION`; PC-CL-01 open |
| PC-CL-01 Buyer Re-review | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_SKELETON_BUYER_REVIEW_V0.4.md` | V0.4 | 8052 | `0D94EC22A0A7A258FD4E6C71695146BAF334A5974C9EDD8CA08900C878B4014F` | `READY_FOR_PROJECT_CONTROL_REVIEW`; PC-CL-01 independently verified resolved |
| Current Project Control Review | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_SKELETON_PROJECT_CONTROL_REVIEW_V0.2.md` | V0.2 | 4808 | `21DDEFB125AAA8F55A3FCBBEDF070D62084D0C7BAE8DDD99098B27EDC1DF4D2F` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; PC-CL-01 closed |
| Skeleton user confirmation | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_SKELETON_USER_CONFIRMATION_V0.1.md` | V0.1 | 2849 | `5A0E032105F2DCCB701A69766DCA79823A14B444154478A235AF0E1A37C50BFD` | `CONTENT_SKELETON = USER_CONFIRMED`; Full Copy authorized |
| B — Full Buyer Clean Copy | `pages/products/chloride-process/04_planning/PRODUCT-PROC-CL_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md` | V0.1 | 5252 | `6DE3DFA221B285B22F45C80DF1A5E0690AD4A03822153DBBFBA36493B7ADE55C` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / PENDING_INDEPENDENT_BUYER_REVIEW` |
| Complete C — Full content and operation contract | `pages/products/chloride-process/04_planning/PRODUCT-PROC-CL_GATE2_CONTENT_CONTRACT_V0.5.md` | V0.5 | 18611 | `40EEDBDD0DC67F5C5C4247EEEB0118A9FDBA481DF80F87C46EA1049265290D62` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / PENDING_INDEPENDENT_BUYER_REVIEW` |
| Full Copy Execution Self-check | `pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE2_FULL_COPY_EXECUTION_SELF_CHECK_V0.1.md` | V0.1 | 8354 | `3A0DE4ED1EFF4C88FE56E0CEA3FD643E58822D17398854991DF7F02247B0035D` | `EXECUTION_SELF_CHECK_COMPLETE / NOT_INDEPENDENT_REVIEW` |

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

The Full Copy candidate implements these same five modules as the unique visible-copy source. It adds no page, URL, keyword owner, Grade relationship, document promise, form field, FAQ or structural module.

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
12. Full Buyer Clean Copy V0.1 for all candidate buyer-visible page words and actions.
13. Complete Content/Operation Contract V0.5 for link, context, state, SEO, social, GEO, Schema and source meaning.
14. Full Copy Execution Self-check V0.1 as producing-Agent evidence only.

If a Gate 2 candidate conflicts with the approved Gate 1 baseline, the candidate must be revised. A newer filename does not override approved facts or responsibilities.

## 6. Review and open items

| Item | Current state | Next owner / acceptance |
|---|---|---|
| `BR-CL-01` | `RESOLVED / CLOSED_IN_BUYER_REVIEW_V0.3` | Preserve the continuous list and absence of partial per-Grade application enumeration |
| `PC-CL-01` | `RESOLVED / CLOSED_BY_PROJECT_CONTROL_REVIEW_V0.2` | Preserve the range-level Hero, natural CL-03 overlap guidance and illustrative five-application context |
| Skeleton user confirmation | `USER_CONFIRMED` | Preserve the confirmed V0.4 structure, copy direction, eight-Grade treatment and action contract |
| Full Buyer Clean Copy | `EXECUTED / DRAFT_FOR_PROJECT_CONTROL_REVIEW / PENDING_INDEPENDENT_BUYER_REVIEW` | Different Gate 2 Buyer Review subagent reads actual B first, then complete C and the producing-Agent self-check last |
| Full Copy Project Control and user confirmation | `NOT_STARTED` | Begin only after independent Buyer Review returns `READY_FOR_PROJECT_CONTROL_REVIEW` |
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

## 8. Stop point

The Gate 2 Execution subagent completed only the authorized Full Buyer Clean Copy B, complete C, Full Copy self-check and candidate Manifest update. Root `00_PROJECT_STATUS.md` and `01_PROJECT_INDEX.md` were not changed. All earlier Skeleton, Contract, Revision Response, Review and user-confirmation records remain unchanged. Independent Full Copy Buyer Review is next; Full Copy is not approved, Gate 2 is not closed and Gate 3–10 are not authorized. No visual, code, CMS, development, deployment, publication or indexing work was performed. `D:\16Wordpress_nextjs` was not accessed.
