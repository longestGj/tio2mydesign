# HOME-001 Current Gate Baseline Manifest V1.1

## Current authority

| Field | Value |
|---|---|
| Date | `2026-09-11` |
| Page / route | `HOME-001` / `/` |
| Primary keyword | `malaysia titanium dioxide` |
| Current planning lifecycle | `GATE6_APPROVED_CLOSED / APPROVED_FOR_HANDOFF` |
| Approved visual bundle | `HOME-001-G4-APP-ALIGN-BUNDLE-V1.1` |
| Approved Gate 6 package | `HOME-001-G6-APP-ALIGN-PACKAGE-V1` |
| Handoff ID | `HOME-001-G6-APP-ALIGN-HANDOFF-V1` |
| Acceptance IDs | `HOME-VU-A01..HOME-VU-A12` |
| Gate 8 | `USER_AUTHORIZED / DISPATCH_PENDING_RECEIPT` |
| Gate 8 assignee | Existing task `01My开发1` / thread `01a07a66-3c4a-75a2-9df4-648942742f9e` |
| Gate 9 / Gate 10 | `NOT_STARTED` / `LOCKED_NOT_AUTHORIZED` |
| Production rollback | `pages/home/07_qa/HOME-001_GATE9_CURRENT_IMPLEMENTATION_MANIFEST_V0.2.md` |

This is the single current Home planning-and-handoff navigation entry. V1.0 remains the Gate 4-close/Gate 6-intake history. The old Gate 9 implementation remains the active rollback reference until a new exact candidate passes independent Gate 9 acceptance.

## Approved composition and consumption order

1. Complete page Brief: `docs/page-briefs/HOME-001_HOME_BRIEF_V0.1.md`.
2. Page identity and keyword ownership: `docs/architecture/PAGE_REGISTRY_V0.2.md` and `HOME-001` in `research/keyword/11_page_keyword_master.csv`.
3. Gate 4 result: `pages/home/04_planning/18_homepage_applications_aligned_visual_design_v1.1.md`, its frozen source and seven formal images under `pages/home/04_planning/visual-designs/home-applications-aligned-v1.1/`.
4. Gate 5 independent review chain: `HOME-001_APPLICATIONS_ALIGNED_GATE5_INDEPENDENT_VISUAL_REVIEW_V1.0.md` plus `HOME-001_APPLICATIONS_ALIGNED_GATE5_TARGETED_RECHECK_V1.1.md`.
5. Gate 4 closeout: `pages/home/05_review/HOME-001_APPLICATIONS_ALIGNED_GATE4_CLOSEOUT_V1.0.md`.
6. Sole Gate 8 entry: `pages/home/06_handoff/HOME-001_APPLICATIONS_ALIGNED_GATE6_HANDOFF_PACKAGE_V1.0.md`.
7. Acceptance and dependency contract: `pages/home/06_handoff/HOME-001_APPLICATIONS_ALIGNED_GATE6_ACCEPTANCE_AND_BLOCKERS_V1.0.md`.
8. Gate 6 author record, independent review and closeout: the three files in `pages/home/05_review/` named `HOME-001_APPLICATIONS_ALIGNED_GATE6_*_V1.0.md`.
9. Current shared and nonvisual authorities cited by the Gate 6 package, including Global Chrome V0.5, Footer legal addendum, Production SVG Manifest V1.0, Home SEO/GEO/Schema contract and the frozen Home visible-content source.
10. Rollback/current production evidence: `pages/home/07_qa/HOME-001_GATE9_CURRENT_IMPLEMENTATION_MANIFEST_V0.2.md`.

## Stage boundary

Gate 6 is approved and closed. Gate 8 may begin only in the assigned D16 task after it reads the approved package and performs the required repository identity preflight. A sent message is not a receipt; `HANDED_OFF=YES` requires readable acknowledgement. Gate 9, merge, deployment, publication, DNS and indexing are not authorized by this Manifest.

