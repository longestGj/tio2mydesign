# Four Root Pages D32 Gate 3–9 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `MARKET-000`, `DOC-000`, `RES-000` and `ABOUT-001` as current D32 WordPress root pages from Gate 3 through Gate 9, using four page agents for D23 planning/review/QA and the existing `02开发` task for every Gate 8 implementation.

**Architecture:** Each page receives a new additive `*_D32_*` lineage in D23; approved Gate 0–2 content is preserved, historical D16 Gate 3–9 records are reference evidence only, and no old implementation status transfers to D32. Page agents author Gate 3/4/6 and later perform peer Gate 5/Gate 6/Gate 9 reviews; Project Control only orchestrates, accepts identities, resolves conflicts and closes authorized gates. Gate 8 is serialized through `02开发` in isolated D32 worktrees so shared WordPress components and data migrations cannot race.

**Tech Stack:** D23 Markdown/JSON plus editable HTML/CSS/JavaScript planning evidence and Playwright/Chromium; SHA-256 identity records; D32 WordPress/PHP/MariaDB with native CSS/JavaScript, typed editable content, migration/recovery tests, browser/editor/HTTP/PHP/Python evidence and machine-verifiable Gate 8 manifests.

**Spec:** Root `AGENTS.md`, `PROJECT_CONTEXT.md`, current `01_PROJECT_INDEX.md`, current Gate workflow/contracts, each page's current approved Brief/Manifest/Gate 2 sources, the seven-page approved RootPageHero baseline, current D32 Home/Product/APP shared implementation contracts, and `docs/architecture/GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md`.

## Global Constraints

- Preserve exact identities: `MARKET-000 /markets/`, `DOC-000 /documents/`, `RES-000 /resources/`, `ABOUT-001 /about/`; all are EN and `site_scope=tio2-my` unless the current approved page contract explicitly says otherwise.
- Start each page at Gate 3 while preserving its latest approved Gate 0–2 facts, copy, SEO ownership, route boundaries and user decisions. Do not reuse a historical D16 Gate 3–9 pass as D32 completion evidence.
- The four root pages use the same current D32 shared Header, Footer, Menu, Cookie Settings, production Logo and single `RootPageHero` owner as Home/Product/APP. Page-specific Chrome/Hero forks are forbidden.
- Visual consistency means the Home family system, not cloning Home modules or imagery. Preserve each page's approved root-page variant and content purpose.
- Project Control is not the content, visual or technical reviewer. It may validate submitted identities and authority but must not repeat the peer review.
- Author self-check never substitutes for independent review. Cross-review ring: DOC reviews MARKET; RES reviews DOC; ABOUT reviews RES; MARKET reviews ABOUT. A page author never reviews its own Gate.
- Page agents may write only their page-specific D23 paths and their plan workspace. They must not edit `00_PROJECT_STATUS.md`, `01_PROJECT_INDEX.md`, shared contracts, another page, D32, or historical approved source files. Project Control performs shared status/index changes after exact closures.
- Gate 3 freezes complete content/operation structure; Gate 4 freezes complete visual/responsive behavior; Gate 5 is the one independent content/visual review; Gate 6 creates and independently reviews the WordPress-native delivery contract; Gate 8 is implemented only by existing task `02开发`; Gate 9 is independent read-only QA by the assigned peer agent.
- Gate 8 pages run serially through `02开发`, each from the latest conflict-free `develop` that contains all earlier accepted shared baselines. Each uses its own branch/worktree, Compose project, port, database/media volumes and page evidence directory.
- Gate 8 must use test-first development, typed editable content, idempotent migration/recovery, strict `site_scope=tio2-my` isolation, fail-closed routing, exact SEO/Schema, Home/Product/APP plus already-integrated root-page regressions and a valid evidence Manifest.
- No agent may merge, push, deploy, publish, change DNS, request indexing, start Gate 10, or send a real form submission. Gate 9 pass is not release authority.

## Review Focus

1. Historical D16 evidence must not be mistaken for current D32 implementation or runtime proof.
2. Concurrent page work must not produce competing shared Header/Footer/RootPageHero implementations or conflicting status/index edits.
3. Each page's conditional routes and empty states must fail closed without inventing content, files, locations, capabilities or child pages.
4. D32 migration must preserve Home, Product, APP and earlier root-page edits and remain recoverable after interruption or collision.
5. Gate 9 must bind the exact Gate 8 implementation/evidence commits, runtime and proof hashes, while separately reporting page, integration and release status.

---

### Task 1: MARKET-000 D32 Gate 3 Authoring

**Files:** Create only `pages/markets/**/*D32*`, `pages/markets/04_planning/d32-gate3-*`, `pages/markets/05_review/*D32*`, and the MARKET-owned SDD report files.

- [ ] Read the current MARKET approved sources and historical D16 records, classify current authority versus history, and freeze input identities.
- [ ] Write a failing Gate 3 verifier for exact approved structure, copy, route states, shared-component ownership, responsive relationships and public-identity cleanliness.
- [ ] Produce editable Gate 3 structure and formal 1440/768/390 evidence, then freeze one immutable bundle and author self-check.
- [ ] Stop at `READY_FOR_INDEPENDENT_GATE3_REVIEW`; do not self-review or close Gate 3.

### Task 2: DOC-000 D32 Gate 3 Authoring

**Files:** Create only `pages/documents/**/*D32*`, `pages/documents/04_planning/d32-gate3-*`, `pages/documents/05_review/*D32*`, and the DOC-owned SDD report files.

- [ ] Read the current DOC approved sources and historical D16 records, classify current authority versus history, and freeze input identities.
- [ ] Write a failing Gate 3 verifier covering the approved scenarios/groups, Grade selector/handoff contract, empty inventory behavior, shared ownership and public cleanliness.
- [ ] Produce editable Gate 3 structure and formal 1440/768/390 evidence, then freeze one immutable bundle and author self-check.
- [ ] Stop at `READY_FOR_INDEPENDENT_GATE3_REVIEW`; do not self-review or close Gate 3.

### Task 3: RES-000 D32 Gate 3 Authoring

**Files:** Create only `pages/resources/**/*D32*`, `pages/resources/04_planning/d32-gate3-*`, `pages/resources/05_review/*D32*`, and the RES-owned SDD report files.

- [ ] Read the current RES approved sources and historical D16 records, classify current authority versus history, and freeze input identities.
- [ ] Write a failing Gate 3 verifier covering the approved resource inventory rules, zero-inventory and conditional-card states, freshness/source boundaries, shared ownership and public cleanliness.
- [ ] Produce editable Gate 3 structure and formal 1440/768/390 evidence, then freeze one immutable bundle and author self-check.
- [ ] Stop at `READY_FOR_INDEPENDENT_GATE3_REVIEW`; do not self-review or close Gate 3.

### Task 4: ABOUT-001 D32 Gate 3 Authoring

**Files:** Create only `pages/about-contact/**/*D32*`, `pages/about-contact/04_planning/d32-gate3-*`, `pages/about-contact/05_review/*D32*`, and the ABOUT-owned SDD report files.

- [ ] Read the current ABOUT approved sources and historical D16 records, classify current authority versus history, and freeze input identities.
- [ ] Write a failing Gate 3 verifier covering exact approved trust/company content, first-party-source qualifiers, action ownership, shared ownership and public cleanliness.
- [ ] Produce editable Gate 3 structure and formal 1440/768/390 evidence, then freeze one immutable bundle and author self-check.
- [ ] Stop at `READY_FOR_INDEPENDENT_GATE3_REVIEW`; do not self-review or close Gate 3.

### Task 5: Cross-review Gate 3 and Close

- [ ] Apply the fixed review ring; each reviewer independently recomputes bundle identities and reviews full approved content, structure, state behavior and Home-family binding.
- [ ] Return mandatory findings to the original author as additive candidates; preserve failed freezes.
- [ ] Project Control closes only exact passing bundles under standing Gate 3 authority and creates one Gate 3→4 handoff per page.

### Task 6: Gate 4 Production and Gate 5 Cross-review

- [ ] Original page agents create the complete five-width visual/responsive candidates and interaction evidence from the closed Gate 3 bundle.
- [ ] The fixed peer reviewer performs the single independent Gate 5 content/visual review without adding another approval layer.
- [ ] Project Control closes each exact Gate 4/5 combination and authorizes Gate 6; it does not repeat the visual review.

### Task 7: Gate 6 Delivery Contracts and Cross-review

- [ ] Original page agents produce WordPress-native Gate 6 packages with stable acceptance IDs, dependency owners, migration/recovery, route/fail-closed, isolation, SEO/Schema, regression and evidence-manifest requirements.
- [ ] The fixed peer reviewer independently reviews all new substantive delivery contracts and identities, inheriting Gate 5 visual PASS without repeating it.
- [ ] Project Control closes exact passing packages and records `APPROVED_FOR_HANDOFF / GATE8_DISPATCH_AUTHORIZED`.

### Task 8: Serialize Gate 8 Through `02开发`

- [ ] Project Control sends each closed Gate 6 package to existing task `02开发` (`01a0bd8c-1d64-7fd1-9026-243adc069ca9`) and records acknowledgement, baseline, branch/worktree/runtime identities and any hold.
- [ ] `02开发` executes test-first WordPress implementation, migration, editor, HTTP/browser, SEO/Schema, isolation, shared regressions and visual comparison; one page at a time from the latest accepted shared baseline.
- [ ] `02开发` returns implementation/evidence commits, runtime hold, content snapshot, acceptance map and valid Gate 8 evidence Manifest; no merge/push/deploy/publish.

### Task 9: Independent Gate 9 and Page Closeout

- [ ] The fixed peer reviewer validates Gate 8 identities and performs read-only Gate 9 preflight/runtime/static/visual/accessibility/negative-scope checks against the closed Gate 6 acceptance IDs.
- [ ] Findings return to `02开发` as scoped repairs; peer reviewers perform targeted rechecks on the new exact candidate.
- [ ] Project Control records each final Gate 9 page/integration/release status and current D32 manifest. Gate 10 and release remain unauthorized.

## Completion Check

- [ ] All four pages have additive D32 Gate 3→9 chains with different author/reviewer identities.
- [ ] All four Gate 8 candidates came from `02开发` isolated worktrees and carry valid evidence Manifests.
- [ ] Shared Home/Product/APP/root-page regressions are green for the exact final candidates.
- [ ] D16 history, unrelated dirty changes and other pages remain untouched.
- [ ] No merge, push, deploy, publish, DNS, indexing, Gate 10 or real form action occurred.
