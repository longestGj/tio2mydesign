# RES-PROC Current Gate 9 Comparative Review Manifest V0.15

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-PROC` / Chloride vs Sulfate Titanium Dioxide |
| URL | `/resources/chloride-vs-sulfate-titanium-dioxide/` |
| Date | 2026-09-08 |
| Manifest status | `CURRENT` |
| Lifecycle | `CANDIDATE_ONE_GATE9_PASS / USER_SELECTION_PENDING` |
| Gate 0/1–7 | `CLOSED` under existing approved authority |
| Gate 8 | Candidate one repair complete; candidate two remains not selectable as-is |
| Gate 9 | Candidate one `PASS`; comparative candidate selection pending |
| Gate 10 | Not authorized |
| Public state | Not live, not indexed, not in RES-000 inventory or sitemap |
| Supersedes | `RES-PROC_CURRENT_GATE9_COMPARATIVE_REVIEW_MANIFEST_V0.14.md` |

## 1. Current Authority and Evidence

| Role | File | Bytes | SHA-256 | State |
|---|---|---:|---|---|
| Candidate-one focused recheck | `pages/resources/07_qa/RES-PROC_GATE9_CANDIDATE_ONE_FOCUSED_RECHECK_V1.0.md` | 5753 | `D83C725869C89DB2B3CE474CDBBAA795BDCC237DE04D839A180B9B9A67FB20E6` | `CURRENT / 28 PASS / F01_F02_F03 CLOSED` |
| Candidate-one pass notice | `pages/resources/06_handoff/RES-PROC_GATE9_CANDIDATE_ONE_PASS_NOTICE_V1.0.md` | 1189 | `3F9C146AF2318D3A071AB5310DB472BE9329A334D8C735870D57E257635E613A` | `ISSUED / SELECTION_NOT_INFERRED` |
| Comparative Gate 9 report | `pages/resources/07_qa/RES-PROC_GATE9_COMPARATIVE_REVIEW_REPORT_V1.0.md` | 13844 | `5A812EF55D5370A5290560B153C92DF8C18C3B7A17D9251243608CB917ECB331` | `INHERITED / CANDIDATE_TWO RESULT UNCHANGED` |
| Prior current Manifest | `pages/resources/05_review/RES-PROC_CURRENT_GATE9_COMPARATIVE_REVIEW_MANIFEST_V0.14.md` | 6013 | `C232E2098F31A7F3D431CB3FC6FEE28551C038D3FAC9CCE7D9F29AC9826096A6` | `HISTORICAL / SUPERSEDED` |

The sealed Gate 7 package and all approved Gate 0/1–6 authorities remain unchanged.

## 2. Candidate Conclusions

| Candidate | Exact identity | Gate 9 result | Condition tally | Disposition |
|---|---|---|---|---|
| One | task `01a07406-9447-77b2-b44e-e32e1cfee617`; implementation `656d6d403bcc126d174ea2216ff8f0a693d1e455`; evidence `7595201a9fa682582332d7f4b4f23e9428b3cffd`; Build `N-WGbOfm7Y6MOF6bondmD` | `PASS` | 28 PASS / 0 FAIL / 0 NOT_VERIFIED | Eligible for user selection; no integration inferred |
| Two | task `01a07432-d148-7013-a516-0af87f4fe233`; last observed ref `818a3ef3587fbf5ea755150bafa804a92bb0454e` | `NOT_PASS / NOT_SELECTABLE_AS_IS` | 8 FAIL / 20 NOT_VERIFIED | Preserve isolated; no merge/copy/integration authorization |

## 3. Finding State

| ID | State | Closure |
|---|---|---|
| `RES-PROC-G9-C1-F01` | `CLOSED` | Approved atomic source withdrawal now removes the unapproved fallback and all dependent claims/actions/source identity for all seven withdrawal combinations. |
| `RES-PROC-G9-C1-F02` | `CLOSED` | Shared Global Chrome and owner test exactly equal approved baseline; direct consumer regressions pass; no page-private Chrome exists. |
| `RES-PROC-G9-C1-F03` | `CLOSED` | Headed Chromium native tab zoom is set/read at 200% with fixed-window viewport/DPR, overflow, clipping, obstruction and target evidence. |
| `RES-PROC-G9-RF-01` candidate-one branch | `CLOSED` | No unapproved shared Chrome change remains. |
| Candidate-two `G9-P0-01`, `G9-P0-02`, `G9-P1-01`, `G9-P1-02` | `OPEN / INACTIVE` | Candidate two remains unselected and not repair-ready; no work is requested absent explicit reauthorization. |

## 4. Four-Layer Status

| Layer | Status | Meaning |
|---|---|---|
| `RECHECK_SCOPE` | `PASS / CLOSED` | Candidate one's three findings and 28 conditions are resolved. |
| `PAGE_GATE9` | `CANDIDATE_ONE_PASS / USER_SELECTION_PENDING` | Candidate one passes Gate 9; candidate two does not; the user retains the comparative choice. |
| `INTEGRATION` | `NOT_SELECTED` | No merge or code transfer is authorized before explicit candidate selection. |
| `RELEASE` | `NOT_AUTHORIZED` | Gate 10, deployment, publication, production writes, DNS and indexing remain outside scope. |

## 5. Next Admissible Event

The next admissible event is the user's explicit candidate decision. If candidate one is selected, integration still requires its own authorization and exact identity check. Candidate two needs no further work unless explicitly reauthorized from the current architecture.

## 6. Boundary

D23 performed read-only review only and did not change D16. This Manifest does not select a candidate or authorize Gate 10, merge, push, deployment, publication, production WordPress writes, RES-000 inventory/sitemap change, DNS or indexing.

