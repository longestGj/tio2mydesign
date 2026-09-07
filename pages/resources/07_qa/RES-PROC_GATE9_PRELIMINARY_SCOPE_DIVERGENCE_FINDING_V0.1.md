# RES-PROC Gate 9 Preliminary Scope-Divergence Finding V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-PROC` |
| Date | 2026-09-06 |
| Review stage | Gate 9 comparative read-only QA |
| Trigger | User report: `现在Gate8的开发已经完全偏离了目标` |
| Reviewed candidate | Second D16 task `01a07432-d148-7013-a516-0af87f4fe233` |
| Task state | Completed/idle after narrowing itself to page completion and preview |
| Finding status | `PRELIMINARY_BLOCKING_DIVERGENCE / COMPARATIVE_REVIEW_OPEN` |

This record verifies the user's concern against the repository state. It is not yet the final two-candidate selection report.

## 1. Verified Divergence

### G9-P0-01 — Wrong implementation baseline

The second task started from D16 commit `c811622bff936dc111225e4388f36147c1b41b30`, a baseline that did not contain the current TiO2 Malaysia/RES-ORIGIN buying-guide implementation used by the first candidate. It therefore treated missing Malaysia infrastructure as new work and created parallel site shell, chrome, route, SEO and data layers.

Observed parallel files include:

- `components/sites/tio2-my/malaysia-site-shell.tsx`;
- `components/sites/tio2-my/malaysia-mobile-menu.tsx`;
- `sites/tio2-my-chrome.ts`;
- `lib/sites/runtime-site.ts`;
- changes to generic `app/resources/[slug]/page.tsx`.

The approved Gate 7 instruction was to resolve and reuse the existing WordPress/Next.js/resource-page architecture and shared Global Chrome, not create a competing Malaysia platform from a stale main baseline.

### G9-P0-02 — Required WordPress/CMS implementation absent

The second candidate's observed 32-file diff contains no `wordpress/` implementation, configuration, seed, resolver or GraphQL schema change. It instead adds local JSON/content and application-side query/cache layers under `lib/resources/malaysia/` and `lib/wordpress/resource-queries.ts`.

This does not satisfy the sealed Gate 7 CMS/API/component mapping or the required valid/missing/wrong-scope WordPress payload and runtime evidence. A page returning HTTP 200 is not enough to close this requirement.

### G9-P1-01 — Shared-surface regression risk

The second candidate modifies generic shared surfaces including `app/layout.tsx`, `app/resources/[slug]/page.tsx`, shared SEO utilities, `lib/wordpress/resource-queries.ts` and `next.config.ts`. Because it lacks the current integrated Malaysia resource baseline, it cannot by itself establish the Gate 8 requirement that RES-ORIGIN and other pages remain unchanged.

### G9-P1-02 — Gate 9 receipt not completed

The second task stopped its deeper review and receipt work after a direct conversation narrowed it to page completion and local preview. Its final reported result is a page preview with 338 focused tests, not the complete Gate 9 evidence receipt required by the sealed acceptance contract.

## 2. What Is Not a Divergence

Source-withdrawal, metadata parity, responsive/accessibility and cache-isolation tests are legitimate Gate 8 evidence work. The problem is not that these checks were attempted. The blocking problem is that they were implemented and tested against a competing stale-baseline architecture rather than the current approved D16 integration baseline.

## 3. Containment

- The second candidate remains isolated at `C:\Users\longe\.codex\worktrees\e49b\16Wordpress_nextjs` on detached HEAD.
- Its latest observed completed code ref is `818a3ef3587fbf5ea755150bafa804a92bb0454e`.
- The worktree is clean and the candidate has not been merged into D16 `main`.
- No D16 files were changed by the Gate 9 controller.

## 4. Next Review Action

Project control must compare this candidate with the first implementation at `d43b8b4d04da5ce918b9c85409de9adff65ac7ee`, verify the first candidate independently against all 28 criteria and determine whether any isolated tests or fixes from the second candidate are worth returning as requirements to the first task. No code is to be copied or merged before the user reviews the final comparison recommendation.

## 5. Boundary

Gate 9 remains open. Gate 10, merge, deployment, publication, production writes, DNS, RES-000 inventory/sitemap changes and indexing remain unauthorized.

