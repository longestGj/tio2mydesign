# DOC-REACH Current Gate 9 Baseline Manifest V0.17

## Current authority

| Field | Value |
|---|---|
| Page ID | `DOC-REACH` |
| Route | `/documents/reach/` |
| Lifecycle | `READ_ONLY_QA_APPROVED` |
| Gate 8 | `IMPLEMENTATION_RETURN_ACCEPTED / CLOSED` |
| Gate 9 | `DOC-REACH-G9-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Disposition | `READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS` |
| Targeted finding | `DOC-REACH-G9-P1-DEP-01 = VERIFIED_FIXED / CLOSED` |
| Gate 10 | `NOT_AUTHORIZED` |
| Current content answer | Generic approved REACH answer retained |
| EG-006 | `USER_APPROVED_CURRENT_BASELINE_ONLY / CLOSED` |
| Site scope | `tio2-my` only; no fallback |

## Frozen implementation reference

- Branch: `codex/doc-reach-gate8-evidence`.
- Reviewed HEAD: `036ea7a8f838acd93ef2f68865b9d6683d123cff`.
- Implementation chain: `2d4c7013d7286c7a8b08614ea4b9c1d3b868bd93` → `4344bfeea7107699604072bea4b3eefe82a03e83` → `036ea7a8f838acd93ef2f68865b9d6683d123cff`.
- Approved payload SHA-256: `F9D2A1F14BE61EEEB585454FFC139D9AC5051B1515950F39748E8F0E1CF0B339`.
- Final reviewed worktree: clean.
- Gate 9 review authority: `pages/documents/reach/05_review/DOC-REACH_GATE8_IMPLEMENTATION_INTAKE_AND_GATE9_ACCEPTANCE_V0.1.md`.

## Acceptance snapshot

- all eleven modules, exact Buyer Clean copy, CTA behavior and EG-006 output boundary: PASS;
- SEO/GEO/Schema/social and official-source freshness: PASS;
- responsive, accessibility, FAQ, Mobile Menu, receiver state, Back/Forward and prefill: PASS;
- focused regression: `44 files / 323 tests PASS`;
- optimized build: `37/37 PASS`;
- production-equivalent browser QA: `25/25 PASS`;
- eight named shared dependencies: PASS;
- evidence hash verification: `0 mismatch`;
- P0/P1/page-blocking P2 remaining: `0/0/0`.

## Gate 10 release blockers

- shared APP-000 `/applications/` route remains `404` for Malaysia;
- development-branch integration remains external to D23;
- real production CMS, form account/key, recipient, mailbox and privacy/data-flow evidence remain unverified for release;
- `PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED` controls remain;
- Gate 10, merge, deployment, production writes, DNS, release and indexing are not authorized.

## Version control

- V0.17 is the one current page-level lifecycle pointer.
- V0.16 is `HISTORICAL / SUPERSEDED_BY_V0.17` and remains preserved.
- Earlier Gate 1–8 Manifests remain historical evidence and cannot override this Gate 9 state.

## 2026-09-13 publication-contract overlay

`../../../../docs/architecture/TIO2_MY_23_PAGE_PUBLICATION_CONTRACT_FINALIZATION_V1.0.md` finalizes DOC-REACH's registered URL, page role, buyer task, CTA, SEO fields, self-canonical, `index, follow`, Sitemap target and internal-link sources. Factual statements remain limited to the approved REACH verification guidance; this overlay does not assert company registration/coverage or waive runtime/release evidence.
