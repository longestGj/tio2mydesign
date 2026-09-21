# APP-000 D32 Current Gate Baseline Manifest V0.3

## Current authority

- Page ID / route: `APP-000` / `/applications/`
- Language / site scope: `EN` / `tio2-my`
- Date: `2026-09-20`
- Lifecycle: `GATE4_COMPLETE_VISUAL_APPROVED_CLOSED / GATE5_REVIEW_PASS / GATE6_AUTHORIZED`
- Gate 1–2: `RETAIN_APPROVED`
- Gate 3: `APPROVED / CLOSED`
- Gate 4: `APPROVED / CLOSED`
- New Gate 5: `INDEPENDENT_REVIEW_PASS / COMPLETE`
- Gate 6: `AUTHORIZED / NOT_YET_CLOSED`
- D32 Gate 8 implementation: `NOT_STARTED`
- Gate 9 / Gate 10: `NOT_STARTED / NOT_AUTHORIZED`
- D16 APP lineage: `HISTORICAL_ONLY / NOT_D32_EVIDENCE`
- Accepted visual input / closure: `pages/applications/05_review/APP-000_D32_GATE4_GATE5_CONTROLLER_CLOSURE_V0.1.md`

This V0.3 manifest supersedes D32 Manifest V0.2 as the current APP-000 authority. V0.2 remains the Gate 3 closure state; all failed and historical candidates remain unchanged for traceability.

## Accepted visual combination

| Item | Current identity / status |
|---|---|
| Gate 4 workset | `pages/applications/04_planning/d32-gate4-v0.1/` |
| Gate 4 bundle | `sha256:8275ccefa106ffca6186651b705f9a77bee9fe2a17a90981a3ecd2182a5ad618` |
| HTML / CSS | `1575cfed2fd93857a4ad0a49421099cef24ed34cc22e78cf49dad7c0f69c3cb4` / `1393717126ededfceac9f44e6d66b62376104433cd6dc5959275471d5357088a` |
| Gate 4 handoff | `APP-000_D32_GATE4_GATE5_HANDOFF_V0.1.md` |
| Gate 5 independent review | `APP-000_D32_GATE5_INDEPENDENT_REVIEW_V0.1.md`; `REVIEW_PASS`; 245/245; mandatory 0; advisory 0 |
| Controller decision | `APP000-D32-G45-PC-CLOSURE-20260920-01` / `APPROVED / CLOSED` |
| Approval basis | `USER_STANDING_AUTHORITY` / `G346-DELEGATED-CLOSURE-20260907` |

The accepted combination contains 14 formal images and the final complete visual at 1440/1024/768/390/320, plus applicable Menu, Cookie, route, focus and hover evidence. These are D23 planning and review assets, not D32 runtime evidence.

## Content, structure and shared-owner boundary

Gate 6 and later implementation must preserve the approved Gate 2 B/C, the PRODUCT V0.3 relationship delta and the closed Gate 3 structure: five modules, exactly three steps, six application collections, 30 relationships in `8/8/7/4/2/1`, zero Process and zero FAQ.

Five application actions remain bound to explicit owner Page IDs and their registered routes. Missing, wrong-scope or wrong-ID targets must fail closed without removing neutral relationship content. Specialty Materials must not invent a child Application page. Shared Header, Footer, Mobile Menu, Cookie Settings, production Logo and RootPageHero remain owner-controlled; Applications is current only on APP-000.

## Gate 6 entry and path

Gate 6 is authorized to use `ESCALATED_PATH` because:

- APP-000 has no current D32 implementation;
- WordPress/CMS/data/migration ownership differs from the historical D16 implementation;
- creating the real `/applications/` page changes Products and child-page dependency state;
- site-scope, route eligibility, migration/recovery, SEO/Schema and evidence-manifest requirements need explicit D32 contracts.

Gate 6 must consume the exact accepted visual combination and valid review chain through `APP-000_D32_GATE4_GATE5_CONTROLLER_CLOSURE_V0.1.md`. It must create one D32 handoff package, a machine-checkable identity record and an independent review by an identity different from the package author. Gate 6 cannot reinterpret the visual bundle, restore excluded modules or treat D16 evidence as current.

## Development and authorization boundary

- D23 owns Gate 6 planning, independent review, closure and dispatch preparation; it does not modify D32 production code.
- The intended Gate 8 implementer remains the existing task `03开发` (`01a0be2a-838b-76c0-b116-6677b9cadb70`). No message is sent until Gate 6 independently passes and closes.
- Gate 6 closure may authorize the already-approved Gate 8 dispatch, but it does not itself implement, merge, deploy or publish.
- Gate 9, Gate 10, PR/push/merge, deployment, release, DNS, indexing and publication remain not started or not authorized.
