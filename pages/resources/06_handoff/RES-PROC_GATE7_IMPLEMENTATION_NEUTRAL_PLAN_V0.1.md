# RES-PROC Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the approved RES-PROC buying guide in the existing WordPress/Next.js architecture with exact content, scoped data, conditional routes, metadata/Schema parity, responsive behavior and Gate 9 evidence.

**Architecture:** Bind the semantic `ResProcPageViewModel` to existing `tio2-my` content and resource-page capabilities. Reuse shared Global Chrome and reusable layout components without copying RES-ORIGIN content or creating a parallel page system. Required content failures block incomplete output; optional relations, Article metadata and source-dependent claims fail closed.

**Tech Stack:** Existing D16 WordPress, API/ViewModel, Next.js, TypeScript, styling, test and build stack as discovered under that repository's current `AGENTS.md`.

**Spec:** `D:\23MySec\pages\resources\06_handoff\RES-PROC_GATE7_HANDOFF_PACKAGE_V0.1.md` plus the sealed CMS/API mapping and acceptance contract in the same directory.

## Global Constraints

- Work only in the separately authorized external development task under `D:\16Wordpress_nextjs\AGENTS.md`.
- Do not execute this plan until Gate 8 is explicitly authorized.
- `page_id=RES-PROC`, `site_scope=tio2-my`, locale `en`, path `/resources/chloride-vs-sulfate-titanium-dioxide/`.
- Buyer-facing strings and fourteen-module order equal Gate 2 Content Architecture V0.3.
- Reuse shared Header/Mobile Menu/Footer and production Logo; do not fork Global Chrome.
- Never fall back to TIOVAR, mytio2.com or another site scope.
- Products eligibility is independent; the two Process relations render together or neither renders.
- Article requires complete real visible editorial metadata; FAQPage, QAPage and HowTo remain off.
- Non-production remains noindex; production publish/index requires Gate 10.
- Follow test-first changes, retain full command outputs and return a Gate 9 receipt.

---

### Task 1: Resolve Existing Architecture and Establish Scoped Failing Tests

**Files:**

- Read: `D:\16Wordpress_nextjs\AGENTS.md` and every more-specific applicable instruction file.
- Inspect: existing Resource-page CMS, API/ViewModel, route, shared-component, metadata, Schema and test files using `rg --files` and `rg`.
- Test: add focused RES-PROC tests beside the existing Resource test pattern discovered in this step.

**Interfaces:**

- Consumes: sealed Gate 7 package and current D16 architecture.
- Produces: exact resolved file map and failing tests for `RES-PROC`, scope isolation and route identity.

- [ ] **Step 1: Record the existing-file map**

Run repository-native discovery for Resource page IDs, `site_scope`, global chrome, metadata builders, JSON-LD, route readiness and cache tags. Record exact paths in the development task before editing.

- [ ] **Step 2: Write failing identity and scope tests**

```text
given page_id RES-PROC and site_scope tio2-my
expect locale en
expect path /resources/chloride-vs-sulfate-titanium-dioxide/
expect wrong or missing scope to return safe absence/error
expect zero fallback reads from every other scope
```

- [ ] **Step 3: Run the focused tests and verify failure**

Use the repository's documented focused-test command against the new test file. Expected: failures because the RES-PROC content/route binding is absent.

- [ ] **Step 4: Commit the test foundation**

Commit only the focused tests and task evidence using the repository's normal commit workflow.

### Task 2: Bind the Scoped Content Record and ViewModel

**Files:**

- Modify: the existing Malaysia Resource CMS/data binding and `tio2-my` query layer identified in Task 1.
- Test: the focused content/scope suite identified in Task 1.

**Interfaces:**

- Consumes: exact Gate 2 V0.3 copy and the semantic mapping.
- Produces: `ResProcPageViewModel` with fixed identity, content and collection cardinalities.

- [ ] **Step 1: Extend failing tests for content completeness**

```text
expect exact fourteen-module semantic order
expect counts: routes=2, can_indicate=4, cannot_establish=6
expect grade_rows=6, overlap_statements=3, workflow_steps=5
expect outcomes=3, buyer_questions=4, source_groups=6, source_links=7
expect missing required singleton or count mismatch to block incomplete output
```

- [ ] **Step 2: Run and confirm the new failures**

Expected: count/content assertions fail before the scoped record is complete.

- [ ] **Step 3: Implement the minimal scoped record and projection**

Bind the exact approved strings to the existing content model. Internal evidence/status fields stay outside the public ViewModel.

- [ ] **Step 4: Run the focused suite**

Expected: identity, scope, exact-copy and cardinality tests pass with zero cross-scope fallback.

- [ ] **Step 5: Commit the scoped content binding**

Include the canonical content hash or exact-string fixture used for later Gate 9 parity.

### Task 3: Render the Fourteen-Module Page with Shared Chrome

**Files:**

- Modify: existing Resource route/page renderer and reusable Resource components identified in Task 1.
- Test: server-rendered DOM/order and Global Chrome suites.

**Interfaces:**

- Consumes: `ResProcPageViewModel`.
- Produces: complete semantic server HTML with shared Header/Footer and no page-local content fork.

- [ ] **Step 1: Write failing server-render assertions**

Assert one H1, exact module order, five valid in-page targets, all four Buyer Question answers in initial HTML, shared production Logo roles and one active `Resources` link per active navigation surface.

- [ ] **Step 2: Run and verify failure**

Expected: route/component assertions fail before page rendering is bound.

- [ ] **Step 3: Implement the minimal renderer**

Reuse the existing shell/components where contract-compatible; add page-specific rendering only for RES-PROC's route cards, evidence-boundary lists, six-row ledger, overlap citations, workflow and four disclosures.

- [ ] **Step 4: Run SSR and shared-component tests**

Expected: complete semantic order passes; RES-ORIGIN and shared chrome snapshots remain unchanged.

- [ ] **Step 5: Commit page rendering**

Keep page copy data separate from reusable component behavior.

### Task 4: Implement Internal Relations and Atomic Process Eligibility

**Files:**

- Modify: existing relation resolver and final-action binding.
- Test: relation eligibility truth-table suite.

**Interfaces:**

- Consumes: `EligibleRelation` records and scoped readiness statuses.
- Produces: Products action, Resources breadcrumb and atomic Process pair with no fallback.

- [ ] **Step 1: Write failing relation tests**

```text
eligible = same source scope AND same target scope
  AND approved content AND verified route AND verified canonical
  AND public eligibility

process_pair_visible = eligible(chloride_process) AND eligible(sulfate_process)
products_visible = eligible(products_primary)
```

Cover all four Process true/false combinations, Products independently true/false, invalid parent and cross-scope targets.

- [ ] **Step 2: Run and confirm failure**

Expected: existing renderer does not yet satisfy the atomic pair and scoped failure matrix.

- [ ] **Step 3: Implement eligibility projection**

Remove ineligible targets, affordances and spacing. Do not render disabled controls, Coming soon, `#`, Contact fallback or empty cards.

- [ ] **Step 4: Run relation and visual-state tests**

Expected: both Process actions appear only together; Products remains independent; no prefill is added.

- [ ] **Step 5: Commit relation behavior**

Record the actual readiness source used for each owner page.

### Task 5: Bind External Sources and Revocation Behavior

**Files:**

- Modify: existing source/citation content projection.
- Test: exact source-map and evidence-revocation suite.

**Interfaces:**

- Consumes: seven `ExternalSourceLink` records and approved statement families.
- Produces: exact source labels/URLs and atomic claim/citation/action removal.

- [ ] **Step 1: Write failing source-map tests**

Assert six source groups, seven exact approved links, correct statement-family adjacency, visible dates and no competitor-to-TiO2-Malaysia relation.

- [ ] **Step 2: Write the revoked-source fixture**

Set one source `evidence_status=REVOKED`; expect its affected claim, citation and source action to be absent while unrelated approved content remains.

- [ ] **Step 3: Run and confirm failure**

Expected: source and revocation behaviors fail before binding.

- [ ] **Step 4: Implement source projection and fail-closed behavior**

Preserve approved URLs. Do not substitute stale text, a mirror or a different source without project-control approval.

- [ ] **Step 5: Run tests and commit**

Expected: exact map and revocation suite pass.

### Task 6: Implement Metadata, GEO and Conditional Schema

**Files:**

- Modify: existing metadata and JSON-LD builders identified in Task 1.
- Test: metadata, visible-parity and Schema positive/negative suites.

**Interfaces:**

- Consumes: exact SEO fields, eligible breadcrumb and `ArticleMetadata | null`.
- Produces: one canonical metadata set and allowed Schema only.

- [ ] **Step 1: Write failing exact metadata tests**

Assert exact title, Meta description, canonical, one H1, locale and non-production noindex behavior.

- [ ] **Step 2: Write Article completeness tests**

```text
article_eligible = author AND publisher AND publisher_logo
  AND date_published AND date_modified AND last_reviewed_at
  AND maintenance_owner AND visible_metadata_parity
```

For each missing field, assert zero Article object. With all valid fields, assert visible/structured parity. Always assert FAQPage, QAPage, HowTo, Product, Offer, Review and AggregateRating are absent.

- [ ] **Step 3: Run and verify failures**

Expected: RES-PROC metadata/Schema cases fail before binding.

- [ ] **Step 4: Implement minimal metadata and Schema projection**

Never derive editorial dates from file, build, import or CMS mutation timestamps. BreadcrumbList renders only with the matching visible eligible breadcrumb.

- [ ] **Step 5: Run tests and commit**

Expected: exact metadata and all Article positive/negative states pass.

### Task 7: Implement Responsive and Accessible Interaction

**Files:**

- Modify: page-specific layout styles and interaction bindings resolved in Task 1.
- Test: browser, visual-regression and accessibility suites.

**Interfaces:**

- Consumes: approved semantic DOM and six Gate 5 visual references.
- Produces: robust page at required widths, states and zoom.

- [ ] **Step 1: Write viewport assertions**

At 1440, 1024, 768, 430, 390 and 375, assert no horizontal page scroll or clipped text, body text ≥16px, visible targets ≥44×44 CSS px and stable long source labels.

- [ ] **Step 2: Write interaction assertions**

Assert FAQ accessible names/states, all answers in initial HTML, visible focus, Mobile Menu focus trap/Escape/restore/inert background and reduced-motion information parity.

- [ ] **Step 3: Write semantic reflow assertions**

At mobile widths, each Grade-evidence record preserves its question, evidence and interpretation relationship; route meaning is not color-only.

- [ ] **Step 4: Implement responsive styling and interaction**

Match the approved hierarchy and important states using the existing design system; do not copy the Gate 5 HTML as production code.

- [ ] **Step 5: Run visual/accessibility suites and commit**

Expected: no blocker-level visual difference and 200% zoom avoids two-dimensional page scrolling.

### Task 8: Protect Scope, Cache, Inventory and Regression Boundaries

**Files:**

- Modify: only existing scoped cache/readiness configuration when required by the implementation.
- Test: cache-key, route, inventory/sitemap and cross-page regression suites.

**Interfaces:**

- Consumes: scoped page implementation and readiness records.
- Produces: isolated cache behavior and unchanged unauthorized public inventory.

- [ ] **Step 1: Write failing cache and scope tests**

Assert cache keys/tags and invalidation include `tio2-my`; mutation/revocation cannot evict or return another scope's record.

- [ ] **Step 2: Write inventory and regression assertions**

Assert RES-PROC is not added to RES-000 inventory/sitemap without separate eligibility; RES-ORIGIN, shared chrome and other scopes retain exact prior behavior.

- [ ] **Step 3: Run and confirm failures or missing coverage**

Expected: new scoped cases are absent before the minimal integration.

- [ ] **Step 4: Implement minimal scope protection**

Add only the existing architecture's required scoped keys/readiness bindings. Do not authorize publication or indexing.

- [ ] **Step 5: Run focused and regression tests, then commit**

Expected: isolation passes and protected pages remain unchanged.

### Task 9: Run Full Gate 8 Verification and Prepare Gate 9 Receipt

**Files:**

- Test: all resolved focused and repository-required suites.
- Produce: implementation commit/ref, preview, commands, outputs and evidence receipt for D23 read-only QA.

**Interfaces:**

- Consumes: completed scoped implementation and all 28 acceptance criteria.
- Produces: auditable Gate 9 input without publication claims.

- [ ] **Step 1: Run every focused suite**

Expected: zero failures for scope, identity, content, cardinality, SSR, relations, sources, metadata, Schema, responsive, accessibility, cache and inventory behavior.

- [ ] **Step 2: Run repository-required checks**

Run the exact lint, typecheck, build, test and diff/cleanliness commands required by D16 governance. Expected: every command exits 0; preserve full outputs.

- [ ] **Step 3: Capture visual and runtime evidence**

Capture all Section 2 acceptance fixtures, exact metadata/JSON-LD, link inventory and source-revocation behavior. Record any variance against the six approved Gate 5 references.

- [ ] **Step 4: Verify protected boundaries**

Confirm no other scope/page/shared chrome regression, no RES-000 inventory/sitemap promotion and no production indexing/publication activation.

- [ ] **Step 5: Return the Gate 9 receipt**

Provide the named task, exact commit/ref, preview URL, environment, resolved files, payload fixtures, commands/results, screenshots, metadata/Schema captures, link status, content hash and rollback instructions.

## Self-Review Result

- Spec coverage: all identity, content, visual, source, relation, scope, SEO/GEO/Schema, responsive, accessibility, cache, rollback and Gate 9 requirements map to Tasks 1–9.
- Placeholder scan: no unspecified buyer-facing content or behavior remains; exact D16 paths are resolved by Task 1 because this D23 task is prohibited from inspecting or selecting implementation architecture.
- Type consistency: `ResProcPageViewModel`, `EligibleRelation`, `ExternalSourceLink`, scope/status types and `SchemaMode` are used consistently with the CMS/API mapping.

## Execution Boundary

This plan is complete as a Gate 7 deliverable but cannot be executed in this task. Execution requires separate Gate 8 authorization and must occur in an external development task governed by `D:\16Wordpress_nextjs\AGENTS.md`.

