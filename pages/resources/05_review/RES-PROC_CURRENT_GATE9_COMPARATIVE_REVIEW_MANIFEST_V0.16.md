# RES-PROC Current Gate 9 Comparative Review Manifest V0.16

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-PROC` / Chloride vs Sulfate Titanium Dioxide |
| URL | `/resources/chloride-vs-sulfate-titanium-dioxide/` |
| Date | 2026-09-08 |
| Manifest status | `CURRENT` |
| Lifecycle | `CANDIDATE_ONE_SELECTED / INTEGRATION_READY` |
| Gate 0/1–7 | `CLOSED` under existing approved authority |
| Gate 8 | Candidate one repair complete and selected; candidate two remains isolated |
| Gate 9 | Candidate one `PASS / SELECTED`; comparative choice complete |
| Integration | `SELECTED / INTEGRATION_READY / NOT_EXECUTED` |
| Gate 10 | Not authorized |
| Public state | Not live, not indexed, not in RES-000 inventory or sitemap |
| Supersedes | `RES-PROC_CURRENT_GATE9_COMPARATIVE_REVIEW_MANIFEST_V0.15.md` |

## 1. Current Authority and Evidence

| Role | File | Bytes | SHA-256 | State |
|---|---|---:|---|---|
| Candidate-one user selection | `pages/resources/05_review/RES-PROC_GATE9_CANDIDATE_ONE_SELECTION_RECORD_V1.0.md` | 2721 | `A7DF3C8EB2F826C72562F7AAD08C51C4228218CD1270055ABDA294205160595E` | `CURRENT / CANDIDATE_ONE SELECTED` |
| Candidate-one focused recheck | `pages/resources/07_qa/RES-PROC_GATE9_CANDIDATE_ONE_FOCUSED_RECHECK_V1.0.md` | 5753 | `D83C725869C89DB2B3CE474CDBBAA795BDCC237DE04D839A180B9B9A67FB20E6` | `CURRENT / 28 PASS / F01_F02_F03 CLOSED` |
| Candidate-one pass notice | `pages/resources/06_handoff/RES-PROC_GATE9_CANDIDATE_ONE_PASS_NOTICE_V1.0.md` | 1189 | `3F9C146AF2318D3A071AB5310DB472BE9329A334D8C735870D57E257635E613A` | `INHERITED / PASS PRECEDED SELECTION` |
| Prior current Manifest | `pages/resources/05_review/RES-PROC_CURRENT_GATE9_COMPARATIVE_REVIEW_MANIFEST_V0.15.md` | 4559 | `861B7C16FD3F6085A85D024408C5FE57F60B45BC3E7D143D5713DB70E573BE33` | `HISTORICAL / SUPERSEDED` |

The sealed Gate 7 package and all approved Gate 0/1–6 authorities remain unchanged.

## 2. Candidate Conclusions

| Candidate | Exact identity | Gate 9 result | Selection / integration disposition |
|---|---|---|---|
| One | task `01a07406-9447-77b2-b44e-e32e1cfee617`; implementation `656d6d403bcc126d174ea2216ff8f0a693d1e455`; evidence `7595201a9fa682582332d7f4b4f23e9428b3cffd`; Build `N-WGbOfm7Y6MOF6bondmD` | `PASS`; 28 PASS / 0 FAIL / 0 NOT_VERIFIED | `SELECTED / INTEGRATION_READY / NOT_EXECUTED` |
| Two | task `01a07432-d148-7013-a516-0af87f4fe233`; last observed ref `818a3ef3587fbf5ea755150bafa804a92bb0454e` | `NOT_PASS / NOT_SELECTABLE_AS_IS`; 8 FAIL / 20 NOT_VERIFIED | `UNSELECTED / ISOLATED`; no repair, merge or copy authorized |

## 3. Finding State

| ID | State | Closure |
|---|---|---|
| `RES-PROC-G9-C1-F01` | `CLOSED` | Approved atomic source withdrawal removes the unapproved fallback and all dependent claims/actions/source identity for all seven withdrawal combinations. |
| `RES-PROC-G9-C1-F02` | `CLOSED` | Shared Global Chrome and owner test exactly equal approved baseline; direct consumer regressions pass; no page-private Chrome exists. |
| `RES-PROC-G9-C1-F03` | `CLOSED` | Headed Chromium native tab zoom is set/read at 200% with fixed-window viewport/DPR, overflow, clipping, obstruction and target evidence. |
| `RES-PROC-G9-RF-01` candidate-one branch | `CLOSED` | No unapproved shared Chrome change remains. |
| Candidate-two `G9-P0-01`, `G9-P0-02`, `G9-P1-01`, `G9-P1-02` | `OPEN / INACTIVE` | Candidate two is unselected and isolated; no work is requested absent explicit reauthorization. |

## 4. Four-Layer Status

| Layer | Status | Meaning |
|---|---|---|
| `RECHECK_SCOPE` | `PASS / CLOSED` | Candidate one's three findings and 28 conditions are resolved. |
| `PAGE_GATE9` | `PASS / CANDIDATE_ONE_SELECTED` | Candidate one passes and the user selection is recorded; candidate two is excluded. |
| `INTEGRATION` | `SELECTED / INTEGRATION_READY / NOT_EXECUTED` | Candidate one may enter the local-main serial integration queue; no merge or code transfer was performed or authorized by this record. |
| `RELEASE` | `NOT_AUTHORIZED` | Gate 10, deployment, publication, production writes, DNS and indexing remain outside scope. |

## 5. Next Admissible Event

The integration owner may prepare a concrete exact-identity integration change for separate review and authorization. Candidate two remains isolated. Candidate one requires no further Gate 8 repair unless new contrary evidence appears.

## 6. Boundary

D23 performed governance recording and read-only review only and did not change D16. This Manifest does not authorize Gate 10, merge, copy, push, deployment, publication, production WordPress writes, RES-000 inventory/sitemap change, DNS or indexing.
