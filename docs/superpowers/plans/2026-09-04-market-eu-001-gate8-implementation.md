# MARKET-EU-001 Gate 8 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` to execute this plan task by task inside `D:\16Wordpress_nextjs` only after Gate 8 is explicitly authorized.

**Goal:** Implement the approved European Union Market page at `/markets/european-union/` for `site_scope=tio2-my` with exact approved copy, responsive behavior, SEO/GEO data, conversion routes and site-wide controls.

**Architecture:** WordPress remains the content source and Next.js the rendering layer. The implementation must reuse the repository's existing market-page, Global Chrome, conversion, legal and consent patterns; all queries, routes, cache keys, menus, media and fallbacks must remain isolated by `site_scope=tio2-my`. The approved Gate 7 package is the semantic contract; the external development repository's own `AGENTS.md`, established paths and test commands control the implementation mechanics.

**Tech Stack:** Existing WordPress, Next.js and TypeScript stack in `D:\16Wordpress_nextjs`; repository-native test, typecheck, lint, build and browser-test tooling.

**Spec:** `D:\23MySec\pages\markets\06_handoff\MARKET-EU-001_GATE7_HANDOFF_PACKAGE_V0.1.md`

## Global constraints

- Do not begin until the user separately authorizes Gate 8 and the package is formally handed off.
- Work only in `D:\16Wordpress_nextjs`; obey its root and applicable child `AGENTS.md` files.
- Do not edit the approved D23 package, source copy, visual assets, 57-row keyword master or 57-page Registry.
- Do not infer repository file paths. Before implementation, discover and record the exact existing WordPress, Next.js, test and fixture paths that own the required behavior.
- Use test-first implementation. Each behavior change begins with a failing test, then the smallest implementation that makes it pass.
- Preserve `site_scope=tio2-my` isolation. Never fall back to another site's content, menus, media, SEO, forms or cache entries.
- Do not enable production data, publishing, indexing, DNS, deployment or Origin-Hold release behavior. Those remain Gate 10 controls.
- For official-source data, missing or stale fields omit only the affected dynamic claim; the rest of the approved page must remain intact.

---

### Task 1: Repository preflight and exact-path map

**Inputs:**
- Read: `D:\23MySec\pages\markets\06_handoff\MARKET-EU-001_GATE7_HANDOFF_PACKAGE_V0.1.md`
- Read: `D:\23MySec\pages\markets\06_handoff\MARKET-EU-001_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md`
- Read: `D:\23MySec\docs\superpowers\plans\2026-09-04-market-eu-001-gate8-implementation.md`
- Read: `D:\16Wordpress_nextjs\AGENTS.md` and every applicable child instruction file
- Create in the external repository: one implementation evidence note under its established documentation/evidence directory

- [ ] Discover the existing market-page route, WordPress content model, API/query adapter, shared component, SEO, Schema, consent, integration-test and browser-test owners using repository-native search.
- [ ] Record their exact paths and the exact repository-native commands for unit, integration, typecheck, lint, build and browser tests in the implementation evidence note.
- [ ] Confirm the planned change is isolated to `site_scope=tio2-my` and list every cache/query key that includes site scope.
- [ ] Stop and return a blocking issue to project control if the repository lacks a safe site-scope boundary or if implementing this page would require a new URL, page count, primary keyword, product fact or architectural change.

### Task 2: Add the failing page-identity and isolation contract

**Behavior under test:** One English page exists at `/markets/european-union/` for `tio2-my`; it cannot be read through another site scope and cannot inherit another site's content.

- [ ] Add a failing contract/integration test using the exact test location discovered in Task 1.
- [ ] Assert page ID `MARKET-EU-001`, slug `european-union`, locale `en`, page type `market`, primary keyword `titanium dioxide supplier Europe`, canonical `/markets/european-union/` and index/follow intent.
- [ ] Assert an alternate `site_scope` returns no MARKET-EU-001 content and that no cross-site fallback occurs.
- [ ] Run the narrow test and capture the expected failure in the evidence note.
- [ ] Add the minimum content-model/query configuration needed to pass the contract.
- [ ] Re-run the narrow test and capture the pass.

### Task 3: Implement the approved CMS projection

**Behavior under test:** WordPress/API output deterministically projects Gate 2 V0.2 plus the Final Content Polish Delta, with no historical copy leakage.

- [ ] Add failing serialization/fixture tests for the exact Title, Meta, H1, five H2 values, module order and CTA labels specified by the Gate 7 package.
- [ ] Add failing relationship tests for all six representative Grades, two Grade groups and nine approved Grade/Application relations.
- [ ] Add failing relationship tests for the Application Hub, five Application children, six EU destinations, Documents, About, Resources, Trade Update, RFQ, Request Documents and Sample routes.
- [ ] Run the narrow tests and capture the failures.
- [ ] Implement the repository-native WordPress fields, records, fixtures or seed mapping without changing approved wording.
- [ ] Make missing unverified fields non-rendering rather than guessed, empty-labelled or cross-site-filled.
- [ ] Re-run the narrow tests and capture the passes.

### Task 4: Render the approved module and component contract

**Behavior under test:** Server output follows the approved module sequence and exposes meaningful HTML without client-side execution.

- [ ] Add failing component/page tests for the Hero, decision narrative, Grades, Applications, destinations, document support, procurement workflow, FAQ and closing conversion sections.
- [ ] Assert the H1/H2 hierarchy, ordered module sequence, CTA labels and approved visible answer text.
- [ ] Assert content is present in server-rendered HTML and no internal governance labels, placeholders or evidence-state text appears to buyers.
- [ ] Run the narrow tests and capture the failures.
- [ ] Implement the page using existing shared components where semantics and visuals match; introduce page-specific composition only where the approved contract requires it.
- [ ] Re-run the narrow tests and capture the passes.

### Task 5: Connect routes, prefill behavior and safe omission

**Behavior under test:** Every visible link resolves to its registered route; conversion links carry only approved prefill context; unavailable dependencies fail safely.

- [ ] Add failing link-contract tests for the six destination pages, Application pages, Products, Documents, Resources, About and Trade Update relations.
- [ ] Add failing tests for RFQ, Sample and Request Documents prefill values as defined in the package.
- [ ] Add failing tests proving that unavailable planned routes do not produce broken public links and that hidden dependencies do not reveal internal labels.
- [ ] Run the narrow tests and capture the failures.
- [ ] Implement the relations with repository-native route helpers and conversion-prefill conventions.
- [ ] Re-run the narrow tests and capture the passes.

### Task 6: Implement SEO, GEO and Schema output

**Behavior under test:** Metadata and machine-readable content match the visible page and contain no unsupported claims.

- [ ] Add failing tests for exact Title, Meta Description, canonical URL, robots intent, sitemap eligibility and English locale.
- [ ] Add failing tests for BreadcrumbList and the package-authorized Organization/WebPage/FAQ relationships, using only visible content.
- [ ] Assert no Product, Offer, rating, price, certification, inventory, guaranteed-delivery or unsupported origin claim is emitted.
- [ ] Assert Schema is isolated by `site_scope=tio2-my` and contains no entity from another site scope.
- [ ] Run the narrow tests and capture the failures.
- [ ] Implement metadata and Schema using existing repository owners.
- [ ] Re-run the narrow tests and capture the passes.

### Task 7: Reuse Global Chrome, legal links and Advanced Consent Mode

**Behavior under test:** The page consumes the shared header, mobile menu, footer, production logo, Privacy/Terms/Cookie routes and approved Advanced Consent Mode behavior without forking them.

- [ ] Add failing integration tests for current navigation key `Markets`, Home text link, RFQ CTA, mobile-menu open/close/focus behavior and footer legal/settings links.
- [ ] Add failing consent tests proving analytics/ad storage defaults and updates follow the approved shared CMP contract and that no tag fires outside that contract.
- [ ] Run the narrow tests and capture the failures.
- [ ] Wire the page to the existing Global Chrome and consent owners; do not create page-local copies.
- [ ] Re-run the narrow tests and capture the passes.

### Task 8: Match responsive, interaction and accessibility requirements

**Behavior under test:** The implementation matches the approved 1440, 768 and 390 layouts and remains operable by keyboard, zoom and reduced-motion users.

- [ ] Add browser assertions or approved visual-regression references for 1440px Desktop, 768px Tablet, 390px Mobile and Mobile Menu open.
- [ ] Add keyboard/focus tests for navigation, CTA, cards, FAQ controls, document actions and mobile menu focus return.
- [ ] Assert no horizontal overflow, 44px minimum touch targets, visible focus, semantic headings, labelled controls, FAQ state semantics, 200% zoom resilience and reduced-motion behavior.
- [ ] Run the targeted browser tests and capture the failures.
- [ ] Implement responsive styles and interaction behavior against the approved Gate 5 visual/state assets.
- [ ] Re-run the targeted browser tests and capture the passes; attach screenshots at the three required widths and applicable states.

### Task 9: Verify dynamic-source and release controls

**Behavior under test:** Dynamic trade/current-source content is traceable and atomically omitted when invalid; the Malaysia-origin hold remains enforced.

- [ ] Add failing tests for source URL, source title, source date, checked date, applicable scope and freshness state.
- [ ] Add failing tests showing a stale, missing or invalid source suppresses only its dependent visible claim and Schema fragment.
- [ ] Add failing tests proving `SITE_WIDE_CROSS_PAGE_MALAYSIA_ORIGIN_CLAIM_HOLD=OPEN` prevents release enablement of the affected claims.
- [ ] Run the narrow tests and capture the failures.
- [ ] Implement the repository-native evidence/freshness mapping and release guard.
- [ ] Re-run the narrow tests and capture the passes.

### Task 10: Full external-development verification and return package

- [ ] Run every repository-native narrow test introduced above.
- [ ] Run the exact typecheck, lint, unit/integration, build and browser-test commands recorded in Task 1.
- [ ] Confirm no unrelated site scope, route, page, shared component or data record regressed.
- [ ] Produce an implementation evidence bundle containing: commit/branch identity, changed-file list, exact commands and outputs, CMS/API sample, metadata/Schema sample, screenshots, accessibility result, known limitations and rollback method.
- [ ] Map the evidence against every Gate 8 acceptance item and every `EU-G6-R01`–`EU-G6-R05` carry-forward control.
- [ ] Return the bundle to D23 project control for Gate 9 read-only QA. Do not deploy, publish, enable indexing, change DNS or mark the page released.

