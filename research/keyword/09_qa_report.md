# Final QA Report — Revision 1

**QA date:** 2026-08-29  
**Status:** REVISED; AWAITING HUMAN KEYWORD RESEARCH REVIEW

## Required corrections

- [x] All 176 search_intent values use T/C/I/N/M.
- [x] Semrush raw intent is retained in notes for locally parsed metric rows.
- [x] No Primary Cluster uses EXCLUDE; all use the nine approved values.
- [x] Ten DO_NOT_TARGET rows retain exclusion status with OFF_SCOPE secondary labels.
- [x] 07 contains 360 rows: 36 queries × top 10.
- [x] High-purchase modifiers were searched directly and added with metrics Unavailable.
- [x] Seven brands and seven grade-level searches have direct top-10 SERP evidence.
- [x] No product-equivalence statement is made.
- [x] Priority is recalculated with an auditable weighted rule; missing demand/feasibility scores zero.

## Counts

- Master: 176; clusters: 29; architecture mappings: 29; candidates: 5; cannibalization rows: 10; markets: 4; SERP evidence: 360.
- Sources registered: 51; original and revision raw evidence remains append-only.
- Raw integrity: **PASS — 108 file hashes checked across 77 manifest files, 0 failures**. Machine result: `processed/final_verification.json`.
- Numeric Search Volume: 4; Unavailable Search Volume: 172; VERIFY_REQUIRED: 8.
- Master priority distribution: {"P3":16,"P2":122,"P1":13,"P0":15,"EXCLUDE":10}.
- Cluster priority distribution: {"P2":20,"P1":4,"P3":4,"P4":1}.

## Remaining limitations

- Commercial/brand SERPs do not supply Search Volume, KD, CPC or trend.
- ECHA substantive infocard capture remains incomplete.
- India Ministry of Finance implementation remains VERIFY_REQUIRED.
- Exact tariff/customs/import-duty rates require current official document-level verification.
- Grade-level SERPs establish search intent only, not technical equivalence.
- Unqualified KRONOS query ambiguity is documented; qualified TiO₂ query is used for decisions.

## Human review queue

1. Approve the P0/P1 homepage-planning input set and the P2/P3/P4 backlog.
2. Review BUYER-01 conversion mapping without creating a standalone quote page.
3. Approve/reject BRAND-01 and BRAND-02 candidate handling.
4. Require TDS/application/legal validation before any grade-comparison copy.
5. Decide whether to rerun Italy, Spain, Poland, Netherlands and Belgium separately.
6. Reacquire ECHA and verify India finance implementation.

**STOP. Await Keyword Research Review.**
