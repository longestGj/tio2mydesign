# RES-ORIGIN Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the approved RES-ORIGIN buying guide at `/resources/non-china-titanium-dioxide/` with exact content, responsive fidelity, fail-closed relations, SEO/GEO/Schema parity and strict `tio2-my` isolation.

**Architecture:** Bind the semantic contracts in this Gate 7 package to the existing WordPress/CMS, public API/ViewModel, Next.js route/component and shared Global Chrome architecture in `D:\16Wordpress_nextjs`. Scope filtering occurs before content, relation, media or cache resolution. Optional relations and Article metadata fail closed without placeholders or invented facts.

**Tech Stack:** Existing WordPress and Next.js shared architecture governed by `D:\16Wordpress_nextjs\AGENTS.md`; exact framework versions, commands and production file paths remain owned by that repository.

**Spec:** `D:\23MySec\pages\resources\06_handoff\RES-ORIGIN_GATE7_HANDOFF_PACKAGE_V0.1.md`

## Global Constraints

- Gate 8 must be separately authorized before executing this plan.
- Work occurs only in `D:\16Wordpress_nextjs` under its own `AGENTS.md` and workflow.
- This planning project does not prescribe or inspect implementation file paths; Task 1 must resolve the existing repository bindings before any code change.
- `site_scope` is exactly `tio2-my`; no cross-scope fallback is permitted.
- All buyer-facing copy equals `RES-ORIGIN_CONTENT_ARCHITECTURE_V0.2.md`.
- Page identity, URL, primary keyword, Title, Meta Description and Canonical are locked.
- Named grades, product-application mappings and M-996/M-2196 comparisons remain absent.
- Production route, publication and indexing remain blocked until Gate 9 and Gate 10.
- Use TDD for implementation changes and preserve existing shared architecture.

---

## Repository Path Resolution Rule

The exact D16 paths are intentionally not invented in D23. The external Gate 8 task must first read `D:\16Wordpress_nextjs\AGENTS.md`, identify the existing WordPress schema, API/ViewModel, route, component, metadata, Schema, cache and test files, and record the resolved paths in its task log. Later tasks must modify those existing files rather than create parallel infrastructure.

### Task 1: Resolve Existing Architecture and Freeze File Map

**Files:**

- Read: `D:\16Wordpress_nextjs\AGENTS.md`
- Read: all more-specific `AGENTS.md` files governing resolved targets
- Read: `D:\23MySec\pages\resources\06_handoff\RES-ORIGIN_GATE7_HANDOFF_PACKAGE_V0.1.md`
- Read: `D:\23MySec\pages\resources\06_handoff\RES-ORIGIN_GATE7_CMS_API_COMPONENT_MAPPING_V0.1.md`
- Read: `D:\23MySec\pages\resources\06_handoff\RES-ORIGIN_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md`
- Produce: development-task path map for existing CMS, API, route, component, metadata/Schema, cache and test targets

**Interfaces:**

- Consumes: Gate 7 semantic contracts and the D16 repository governance.
- Produces: one resolved existing path per logical target; test/build commands from D16 governance; no production change.

- [ ] **Step 1: Confirm repository and worktree state**

Run the D16-governed read-only Git and environment checks. Expected: a valid permitted development worktree; no mutation.

- [ ] **Step 2: Locate existing `site_scope` patterns**

Find the current Malaysia page query, API projection, route, shared chrome, metadata, Schema, cache and form-prefill patterns. Expected: reuse points are documented.

- [ ] **Step 3: Resolve implementation and test files**

Record exact existing paths and the repository-approved commands that later tasks will use. Expected: no logical target remains unbound.

- [ ] **Step 4: Stop on architecture conflict**

If an existing pattern cannot enforce pre-resolution scope filtering or exact content parity, return an impact analysis to project control before coding.

### Task 2: Add Scoped Route and Failure Tests

**Files:**

- Modify: resolved route/query test targets from Task 1
- Test: resolved route, API and scope-isolation suites

**Interfaces:**

- Consumes: `page_id=RES-ORIGIN`, `site_scope=tio2-my`, fixed path and canonical.
- Produces: failing tests for valid Malaysia data, missing Malaysia data and wrong-scope-only data.

- [ ] **Step 1: Write the route identity test**

```text
Given an approved RES-ORIGIN record in tio2-my
When /resources/non-china-titanium-dioxide/ is requested
Then the resolved Page ID is RES-ORIGIN
And canonical equals https://tio2malaysia.com/resources/non-china-titanium-dioxide/
```

- [ ] **Step 2: Write the cross-scope rejection test**

```text
Given RES-ORIGIN is absent in tio2-my
And another site scope contains a same-slug record
When the Malaysia route is requested
Then no body, metadata, media, relation or cache value is read from the other scope
And the approved not-found/error behavior is returned
```

- [ ] **Step 3: Run the focused tests and verify failure**

Use the exact D16 command resolved in Task 1. Expected: tests fail because the new route/binding does not yet exist.

- [ ] **Step 4: Implement the minimum scoped route/query binding**

Filter on `tio2-my` before resolving page, relations, media, metadata or cache identity.

- [ ] **Step 5: Rerun focused tests**

Expected: valid route passes; wrong-scope and missing-scope tests pass without fallback.

### Task 3: Bind CMS Content Model and Exact Approved Payload

**Files:**

- Modify: resolved WordPress/CMS schema and scoped content targets
- Test: resolved schema/content validation suites

**Interfaces:**

- Consumes: module fields and cardinalities from the CMS mapping; exact Gate 2 V0.2 copy.
- Produces: one scoped RES-ORIGIN content record with thirteen modules and internal version identity.

- [ ] **Step 1: Write failing cardinality and exact-copy tests**

```text
qualification_path=6
due_diligence_checks=6
technical_steps=5
application_routes=5
evidence_items=8
destinations=4
decisions=3
faq_pairs=9
all buyer-facing strings equal approved Gate 2 V0.2 values
```

- [ ] **Step 2: Write missing-required-content tests**

Expected behavior: a missing required singleton, collection record or FAQ answer blocks the scoped payload; it is never padded with placeholders.

- [ ] **Step 3: Run focused tests and verify failure**

Expected: failure before content-model binding.

- [ ] **Step 4: Bind the approved semantic fields to the existing CMS model**

Reuse existing content types/field groups where compatible. Do not create a page-private alternative to a shared model without repository approval.

- [ ] **Step 5: Load the exact approved payload**

Use the approved Gate 2 source. Do not copy text from PNGs or infer content from visual spacing.

- [ ] **Step 6: Rerun schema/content tests**

Expected: exact copy and every cardinality pass; prohibited strings and named grades remain zero.

### Task 4: Implement Public API/ViewModel Validation

**Files:**

- Modify: resolved API/ViewModel and validation targets
- Test: resolved projection, serialization and hydration suites

**Interfaces:**

- Consumes: scoped CMS record and eligible relation records.
- Produces: `ResOriginPageViewModel` matching the Gate 7 semantic interface.

- [ ] **Step 1: Write failing projection tests**

Verify exact order, counts, internal-field exclusion and stable server/client serialization.

- [ ] **Step 2: Write fail-closed relation tests**

```text
For each relation predicate set to a failing state
Then the public ViewModel omits its href/action
And retains approved explanatory copy
And emits no disabled, placeholder or fallback record
```

- [ ] **Step 3: Implement minimum projection and validation**

Reject count/order mismatch, wrong scope, invalid canonical and question-without-answer states.

- [ ] **Step 4: Run projection tests**

Expected: approved data passes; every invalid fixture fails closed.

### Task 5: Render Page and Shared Chrome

**Files:**

- Modify: resolved Next.js route and existing page/component bindings
- Test: resolved SSR, DOM and visual/component suites

**Interfaces:**

- Consumes: validated `ResOriginPageViewModel` and shared Global Chrome.
- Produces: semantic server-rendered page matching the thirteen-module order.

- [ ] **Step 1: Write failing SSR/DOM tests**

Assert one H1, ordered section IDs, all FAQ answers in initial HTML, valid breadcrumb links, `Resources` active, primary/reverse logo roles and buyer-visible `CURRENT` count zero.

- [ ] **Step 2: Bind the existing shared components**

Consume Global Chrome V0.5 and production logos. Do not clone Header, Mobile Menu, Footer or RFQ.

- [ ] **Step 3: Bind page modules in approved order**

Use content-driven heights and semantic headings/disclosures; do not use Gate 5 HTML as production code.

- [ ] **Step 4: Run SSR/DOM tests**

Expected: all required modules, counts, content and chrome assertions pass.

### Task 6: Implement Relations, RFQ Prefill and Conditional Absence

**Files:**

- Modify: resolved relation resolver, CTA/link binding and RFQ-prefill targets
- Test: resolved navigation, relation and form-prefill suites

**Interfaces:**

- Consumes: `EligibleRelation[]` and scoped route registry.
- Produces: approved links only; RFQ prefill limited to source and generic interest.

- [ ] **Step 1: Write relation matrix tests**

Test every allowed owner and every failing content/route/canonical/public predicate.

- [ ] **Step 2: Write RFQ prefill tests**

```text
Allowed: source_page=RES-ORIGIN
Allowed: interest=alternative-origin-sourcing
Forbidden/absent: grade, market, application, quantity, destination,
document availability, price, lead time, origin proof, trade treatment
```

- [ ] **Step 3: Implement minimum relation and prefill binding**

Remove ineligible affordances and link-only spacing atomically; never render guessed links.

- [ ] **Step 4: Run navigation and prefill tests**

Expected: permitted routes and fields pass; every unsupported value remains absent.

### Task 7: Implement Metadata, GEO and Conditional Schema

**Files:**

- Modify: resolved metadata and JSON-LD targets
- Test: resolved head, structured-data and parity suites

**Interfaces:**

- Consumes: locked SEO fields, visible content, breadcrumb and validated Article metadata.
- Produces: exact head metadata, BreadcrumbList and conditional Article output.

- [ ] **Step 1: Write exact metadata tests**

Assert one canonical, exact Title/Meta, language, and environment-specific robots behavior.

- [ ] **Step 2: Write Schema parity tests**

```text
If Article metadata is complete and visible, emit Article + BreadcrumbList.
If any required Article field is absent, emit BreadcrumbList only.
Never emit Product, Offer, Review, AggregateRating, FAQPage, QAPage,
hidden grades, fake dates or hidden origin/trade claims.
```

- [ ] **Step 3: Implement metadata and Schema binding**

Do not use import/build/file times for authoring dates.

- [ ] **Step 4: Run metadata and Schema tests**

Expected: visible/structured parity passes in complete and incomplete Article-metadata states.

### Task 8: Implement Responsive and Accessibility Behavior

**Files:**

- Modify: resolved page styling and interaction targets
- Test: resolved browser, visual-regression and accessibility suites

**Interfaces:**

- Consumes: approved Gate 5 visual assets and semantic DOM.
- Produces: responsive, keyboard-usable page at required viewports and zoom.

- [ ] **Step 1: Write browser assertions**

At 1440, 1024, 768, 430, 390 and 375: no horizontal page scroll, no clipped content, body type ≥16px and visible interactive targets ≥44×44 CSS px.

- [ ] **Step 2: Write interaction assertions**

FAQ buttons expose and update `aria-expanded`/`aria-controls`; focus is visible. Mobile Menu traps focus, closes with Escape and restores focus. Reduced motion retains all information.

- [ ] **Step 3: Implement responsive styling and interaction**

Match the approved Desktop/Tablet/Mobile hierarchy and key states using the existing design system.

- [ ] **Step 4: Run visual and accessibility suites**

Expected: no blocker-level visual difference, WCAG-oriented keyboard/focus checks pass and 200% zoom avoids two-dimensional page scrolling.

### Task 9: Run Full Gate 8 Verification and Prepare Gate 9 Evidence

**Files:**

- Test: all resolved focused and repository-wide required suites
- Produce: implementation commit/reference, commands and full outputs for the D23 Gate 9 read-only task

**Interfaces:**

- Consumes: completed scoped implementation and all Gate 7 acceptance criteria.
- Produces: accessible preview URL, commit/ref, test evidence, CMS/API evidence and known non-blocking differences.

- [ ] **Step 1: Run all required focused suites**

Expected: zero failures for scope, content, relations, SSR, metadata, Schema, responsive and accessibility tests.

- [ ] **Step 2: Run D16 repository-required lint/type/build/test commands**

Expected: every command exits 0. Preserve full command and output evidence.

- [ ] **Step 3: Verify protected boundaries**

Confirm no other site scope, page, shared chrome or form behavior regressed; production indexing and publication remain disabled.

- [ ] **Step 4: Provide Gate 9 receipt**

Return exact preview URL, commit/ref, environment, CMS/API payload evidence, route list, test commands/results and any variance from the approved visual.

## Self-Review Result

- Spec coverage: all identity, content, visual, relation, scope, SEO/GEO/Schema, responsive, accessibility, rollback and Gate 9 requirements map to Tasks 1–9.
- Placeholder scan: no buyer-facing or implementation behavior is left unspecified; exact D16 paths are deliberately resolved by Task 1 because D23 is prohibited from inspecting or selecting implementation architecture.
- Type consistency: the plan uses `ResOriginPageViewModel`, `EligibleRelation`, `SiteScope`, `RouteStatus`, `CanonicalStatus`, `ContentStatus`, `PublicEligibilityStatus` and `SchemaMode` consistently with the CMS/API mapping.

## Execution Boundary

This plan is complete as a Gate 7 deliverable but cannot be executed in this task. Execution requires separate Gate 8 authorization and must occur in an external development task governed by `D:\16Wordpress_nextjs\AGENTS.md`.

