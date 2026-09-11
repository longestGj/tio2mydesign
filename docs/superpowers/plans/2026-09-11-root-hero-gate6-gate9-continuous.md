# Seven Root-Page Hero Gate 6–9 Continuous Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Carry the approved seven-root-page Hero baseline through Gate 6 handoff, Gate 8 implementation in the existing D16 developer task, and Gate 9 independent read-only acceptance without intermediate user confirmation.

**Architecture:** D23 remains the planning, contract and read-only QA authority. Gate 6 produces one additive cross-page handoff contract that each page consumes alongside its current Manifest. The existing D16 `01My开发1` task implements the shared `RootPageHero` and seven page bindings in the existing integrated codebase, then the existing D23 `09Gate9验收` task independently validates the exact evidence Manifest and runtime.

**Tech Stack:** D23 Markdown/JSON governance; D16 WordPress + Next.js implementation; Playwright/Chromium, project tests, evidence Manifest validator and Gate 9 preflight.

**Spec:** `docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_APPROVED_BASELINE_MANIFEST_V1.0.md`

## Global Constraints

- Current sequence is Gate 6 → Gate 8 → Gate 9; historical Gate 7 is not a separate stage.
- D23 must not implement or fix code in `D:\16Wordpress_nextjs`; D16 owns Gate 8.
- The approved workset is additive Hero scope only and must not rewrite page bodies, SEO/GEO, Schema, routes or Global Chrome outside mapped Hero effects.
- One shared `RootPageHero` implementation must serve all seven pages; do not create seven independent components.
- Header and Footer remain shared Global Chrome and must not be page-local forks; buyer-visible `CURRENT` remains zero.
- `site_scope=tio2-my` applies to routes, content, caches, metadata, media and forms, with no cross-scope fallback.
- Home and APP use their approved open-white bindings; Product is a preservation/reference binding; Market and Documents use hub-light; Resources uses hub-dark; About uses corporate-light.
- RES-000 and ABOUT-001 may each use a natural four-line H1 only at 390px, with 36px/700, normal spacing and 24px shell padding. Other pages keep the shared three-line default.
- No paid Superdesign. No deployment, publication, DNS or indexing; Gate 10 remains separately authorized.
- Gate 8 must return `gate8_evidence_manifest.json` conforming to `docs/architecture/GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json`, with exact implementation/evidence/Build/runtime identities.
- Gate 9 must return separate recheck, page, integration and release statuses; Gate 9 acceptance does not authorize Gate 10 or publication.

---

### Task 1: Gate 6 additive cross-page handoff package

**Files:**
- Create: `docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_GATE6_HANDOFF_PACKAGE_V1.0.md`
- Create: `docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_GATE6_ACCEPTANCE_CONTRACT_V1.0.md`
- Create: `docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_GATE6_EXECUTION_REPORT_V1.0.md`
- Create: `docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_GATE6_INDEPENDENT_REVIEW_V1.0.md` (reviewer only)
- Create: `docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_CURRENT_GATE6_MANIFEST_V1.0.md` (project control only after review pass)
- Modify: `docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_TARGETED_GATE4_PROGRESS_V1.0.md`
- Modify: `00_PROJECT_STATUS.md`

**Interfaces:**
- Consumes: `ROOT_PAGE_HERO_SEVEN_PAGE_APPROVED_BASELINE_MANIFEST_V1.0.md`, the full Gate 4/Gate 5 review chain, the seven existing current page Manifests, current Global Chrome/Logo contracts, `GATE5_GATE6_ACCEPTANCE_CONTRACT_V1.0.md` and `GATE6_EXECUTION_REVIEW_CONTRACT_V1.1.md`.
- Produces: one exact D16 implementation entry, stable acceptance-condition IDs for seven page bindings and shared regressions, plus mapped Gate 9 conditions.

- [ ] **Step 1: Verify Gate 6 admission**

Read and record all six Gate 5→6 intake objects: approved visual combination, review chain, controller closure, continuous user authorization, open dependencies and changes since closure. Return `INPUT_INCOMPLETE` only for an actual unresolved identity gap.

- [ ] **Step 2: Write the additive implementation contract**

Specify one shared component, seven page bindings, approved variants and responsive exceptions, CTA/media/body-transition contracts, Global Chrome consumption, no visible `CURRENT`, `site_scope=tio2-my`, fallbacks and non-goals. Mark prototype HTML/CSS as `PROTOTYPE_ONLY`; visible/behavioral requirements as `APPROVED_CONTRACT`.

- [ ] **Step 3: Define Gate 8 and Gate 9 acceptance IDs**

Create stable IDs covering: shared component reuse, seven exact page bindings, 1440/768/390 typography and layout, RES/About exceptions, 44px actions, keyboard/menu behavior where applicable, zero horizontal overflow, media order/visibility, Header/Footer regression, exact CTA routes, unchanged body boundaries, SEO/Schema non-regression and scope isolation.

- [ ] **Step 4: Run author verification**

Verify referenced paths and hashes, unique IDs, complete page coverage, no conflicting current source, no conflict markers/trailing whitespace and no D16 modifications. Save actual command/results and limitations in the execution report.

- [ ] **Step 5: Independent Gate 6 review and fix loop**

A different agent reads the full package and inputs, checks spec compliance and package quality, and returns `REVIEW_PASS` only with zero required findings. The author performs any required targeted revisions; the same reviewer rechecks them.

- [ ] **Step 6: Project-control closure**

After independent pass, create the single Gate 6 current Manifest, register `APPROVED / CLOSED` under standing authority, record the user's continuous Gate 6→9 authorization and mark the package `APPROVED_FOR_HANDOFF`. Do not claim D16 handoff until the developer task acknowledges receipt.

### Task 2: Gate 8 implementation in the existing D16 developer task

**Files:**
- Modify/Create: only files selected by the D16 developer under `D:\16Wordpress_nextjs`, following that repository's AGENTS and existing architecture.
- Create: D16 implementation tests and evidence required by its project conventions.
- Create: D16 `gate8_evidence_manifest.json` conforming to the D23 schema.
- Create: D23 dispatch/receipt record under `docs/architecture/` after actual message acknowledgement.

**Interfaces:**
- Consumes: the approved Gate 6 current Manifest and handoff package from Task 1, plus the actual current D16 integrated baseline.
- Produces: one implementation commit/ref, evidence HEAD, Build ID, preserved runtime URL and a complete machine-verifiable evidence Manifest.

- [ ] **Step 1: Dispatch to the existing `01My开发1` task**

Send the exact Gate 6 entry, user authorization, page IDs and stop boundary. Require the developer to read D16 AGENTS, inspect the current integrated code and reuse the existing shared Hero/Chrome architecture rather than starting a parallel system.

- [ ] **Step 2: Implement test-first**

Add failing tests for the shared `RootPageHero`, seven configurations and responsive/accessibility contracts; run them red; implement the minimum shared solution; run focused tests green.

- [ ] **Step 3: Run integration verification**

Build and test all seven routes at 1440/768/390, verify exact CTA paths, media behavior, 44px targets, no overflow, zero buyer-visible `CURRENT`, unchanged Global Chrome and no cross-scope fallback. Run relevant existing regression tests.

- [ ] **Step 4: Produce and validate evidence**

Create screenshots/runtime reports, bind repository/branch/baseline/implementation/evidence/Build/runtime identities in `gate8_evidence_manifest.json`, validate it against the D23 schema and keep the runtime available for Gate 9.

- [ ] **Step 5: Return and repair**

Return the evidence Manifest and receipt to D23. Any D23/Gate 9 finding goes back to the same developer task for a targeted fix and new exact implementation/evidence identity; never silently reuse stale evidence.

### Task 3: Gate 9 independent read-only acceptance

**Files:**
- Create: D23 Gate 9 review, evidence and current review Manifest under an appropriate `docs/architecture/` shared-Hero review path.
- Modify: `docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_TARGETED_GATE4_PROGRESS_V1.0.md`
- Modify: `00_PROJECT_STATUS.md`

**Interfaces:**
- Consumes: the approved Gate 6 package, exact Gate 8 evidence Manifest, implementation/evidence/Build/runtime identity and preserved runtime.
- Produces: independent acceptance results for every stable acceptance-condition ID, plus separate page, integration and release statuses.

- [ ] **Step 1: Run machine preflight**

Run `validate_evidence_manifest.py` and two-round `gate9_preflight.py` against the returned Manifest. Classify failures as implementation, environment or evidence problems without converting missing evidence into PASS.

- [ ] **Step 2: Run full read-only acceptance**

Independently validate all seven routes, three required viewports, shared component reuse, exact content/CTA/media/transition bindings, responsive exceptions, keyboard/focus/menu behavior, 44px targets, horizontal overflow, Global Chrome, metadata/Schema non-regression and `site_scope=tio2-my` isolation.

- [ ] **Step 3: Return findings to Gate 8 and recheck**

Send each required finding with stable ID, exact reproduction and acceptance condition to the existing D16 developer task. After each returned candidate, rerun the affected checks plus shared regression coverage and bind the new exact identities.

- [ ] **Step 4: Close Gate 9 within authorized scope**

When required findings are zero, record `RECHECK_SCOPE_STATUS`, `PAGE_GATE9_STATUS`, `INTEGRATION_STATUS` and `RELEASE_STATUS`. Release may remain blocked by Gate 10 even when page/integration checks pass. Notify Gate 8 that the accepted runtime may be released.

- [ ] **Step 5: Final controller verification**

Verify report/Manifest paths, hashes, statuses, delivery acknowledgements, no unresolved required findings and no unauthorized deployment/publication. Update progress and status, commit only task-owned D23 files, and report completion to the user.
