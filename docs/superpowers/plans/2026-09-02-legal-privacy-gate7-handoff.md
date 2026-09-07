# Legal / Privacy Gate 7 Development Handoff Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the approved Legal / Privacy Gate 6 baseline into one development-ready, hash-bound Gate 7 package without entering Gate 8 or modifying `D:\16Wordpress_nextjs`.

**Architecture:** Treat the three Legal pages and the shared Consent surface as one package because their routes, Footer utilities, Web3Forms disclosure, release-state selection and consent signals must remain synchronized. Keep exact long-form copy in the approved Gate 2 source documents, map it into stable CMS/component contracts, and bind every current source and Gate 7 deliverable by SHA-256. Separate current no-Analytics behavior from the conditional verified-Analytics replacement so the two states cannot render together.

**Tech Stack:** Markdown specifications, JSON audit evidence, Node.js read-only validation, WordPress content model and Next.js rendering contract for external implementation.

**Spec:** `pages/legal-privacy/05_review/LEGAL_PRIVACY_GATE6_PROJECT_CONTROL_REVIEW_V0.1.md`

## Global Constraints

- Planning scope is `D:\23MySec`; no WordPress, Next.js, CMS, test, branch, deployment or production change is performed here.
- External implementation target is `D:\16Wordpress_nextjs` only after separate Gate 8 authorization.
- Every local content/query/cache/menu/form/consent record must use exact `site_scope=tio2-my`; no cross-scope fallback.
- Approved routes are `/privacy-policy/`, `/ms/privacy-policy/` and `/cookie-policy/`; Cookie Settings is a non-indexable shared control.
- `/terms-of-use/` and `/legal/privacy-policy/` are not approved routes, redirects, links, Canonicals, sitemap entries or release dependencies.
- Global Header/Mobile Menu/Footer are shared-owner components; Legal pages pass no current top-navigation key and may not fork Chrome.
- Footer copyright is exact `© 2026 TiO2 Malaysia.` and Mobile Menu has exactly the frozen eight primary destinations.
- Current release state has no active GA4, GTM, Google Ads or Vercel Web Analytics; the Analytics-active copy is conditional and cannot be combined with current copy.
- Advanced Consent defaults all four Google states to denied before Google measurement commands; accepting Analytics grants only `analytics_storage`.
- BM Privacy requires human legal/meaning equivalence review before release.
- Web3Forms production key/receiver, production host/provider inventory, storage/network capture and legal review remain later-stage controls.

---

### Task 1: Gate 7 Authorization and Audit Harness

**Files:**
- Create: `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_USER_AUTHORIZATION_2026-09-02.md`
- Create: `99_workspace/scripts/audit_legal_gate7.js`
- Create: `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_AUDIT_RESULT.json`

**Interfaces:**
- Consumes: Gate 6 review `LEGAL-PRIVACY-G6-PCR-01` and current V0.7 manifests.
- Produces: executable package-level audit with JSON result and explicit Gate 8 lock.

- [ ] **Step 1: Write the failing audit**

Create a Node.js audit that loads the Gate 7 package root, requires the seven core contracts plus four current Gate 7 manifests, validates page/routes/site scope/release-state exclusivity, recomputes recorded SHA-256 values, and returns non-zero when any required artifact or invariant is absent.

- [ ] **Step 2: Run the audit to verify RED**

Run: `node 99_workspace/scripts/audit_legal_gate7.js`

Expected: exit `1`, with missing Gate 7 package artifacts reported; no syntax or dependency error.

- [ ] **Step 3: Record authorization**

Record the user instruction `授权gate7`, date `2026-09-02`, scope of authorization, and explicit non-authorization of Gate 8–10.

### Task 2: Core Content, Component and Route Contracts

**Files:**
- Create: `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_HANDOFF_PACKAGE_V0.1.md`
- Create: `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_CMS_API_COMPONENT_MAPPING_V0.1.md`
- Create: `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_SEO_GEO_SCHEMA_ROUTE_CONTRACT_V0.1.md`

**Interfaces:**
- Consumes: approved Gate 2 copy hashes, Gate 5 V0.6 visual inputs and Gate 6 V0.7 current roots.
- Produces: stable page identities, content-source boundaries, CMS fields, route keys, metadata and Schema acceptance.

- [ ] **Step 1: Define package authority order**

List the Gate 6 roots, exact current copy sources, current visual assets and shared authority overrides. State that internal control sections never render and that V0.2 corrected Chrome overrides conflicting Mobile Menu text in the older Gate 5 spec.

- [ ] **Step 2: Define CMS/API/component mapping**

Map `LEGAL-PRIV-EN`, `LEGAL-PRIV-MS`, `LEGAL-COOKIE-EN` and `SHARED-CONSENT-TIO2-MY` to stable fields, ordered modules, control types, current/conditional states and fail-closed behavior.

- [ ] **Step 3: Define SEO/GEO/Schema and routes**

Specify exact Title, Meta, Canonical, robots direction, language alternates, `WebPage` + `BreadcrumbList`, page-visible parity, sitemap rules and prohibited routes.

### Task 3: Consent, Data Flow, Chrome and Responsive Contracts

**Files:**
- Create: `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_CONSENT_CMP_DATA_FLOW_CONTRACT_V0.1.md`
- Create: `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_GLOBAL_CHROME_RESPONSIVE_A11Y_CONTRACT_V0.1.md`

**Interfaces:**
- Consumes: Advanced Consent decision, Web3Forms evidence map, Footer addendum, V0.2 corrected visual evidence and Consent V0.1 state proofs.
- Produces: release-state machine, signal/persistence requirements, shared-component ownership and viewport/accessibility acceptance.

- [ ] **Step 1: Define consent and CMP state machine**

Specify `no_optional_analytics` and `verified_google_analytics_active` as mutually exclusive release states; record denied defaults, allowed updates, persistence/failure behavior, TITAN adaptation limits, vendor-change control and analytics-data exclusions.

- [ ] **Step 2: Define Web3Forms/host/provider evidence inputs**

Keep credentials out of content/CMS; require owner, receiver, delivery, provider and retention evidence at Gate 8/9; preserve three-year company inquiry retention and provider TTL distinction.

- [ ] **Step 3: Define responsive and accessibility acceptance**

Bind 1440/768/390 assets; require normal-flow desktop TOC, table-to-card reflow, focus management, 44px targets, 200% zoom, screen-reader semantics, no false Legal current navigation item and exact shared Footer/Menu behavior.

### Task 4: Acceptance, Review and Current Gate 7 Authority

**Files:**
- Create: `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_GATE8_GATE9_ACCEPTANCE_AND_BLOCKERS_V0.1.md`
- Create: `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md`
- Create: `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_FRESH_VALIDATION_V0.1.md`
- Create: `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_HANDOFF_MANIFEST_V0.1.md`
- Create: `pages/legal-privacy/05_review/LEGAL_PRIVACY_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md`
- Create: four `*_CURRENT_GATE7_BASELINE_MANIFEST_V0.8.md` files under `pages/legal-privacy/06_handoff/`.

**Interfaces:**
- Consumes: all Gate 7 contracts from Tasks 1–3.
- Produces: one approved-for-handoff authority set with `HANDED_OFF=NO` and Gate 8–10 locked.

- [ ] **Step 1: Define Gate 8/9 evidence and blockers**

Require implementation evidence for routes, copy, Chrome, consent sequencing, storage/network behavior, Web3Forms delivery, BM equivalence, metadata/Schema, accessibility and site-scope isolation. Classify unresolved production/legal facts as Gate 9/Gate 10 release controls, not Buyer Clean placeholders.

- [ ] **Step 2: Run the audit to verify GREEN**

Run: `node 99_workspace/scripts/audit_legal_gate7.js`

Expected: exit `0`, status `PASS`, all package and invariant checks passing, zero failures.

- [ ] **Step 3: Complete project-control review**

Record the audit output, close Gate 7 as `PROJECT_CONTROL_REVIEW_PASS / CLOSED`, set lifecycle `APPROVED_FOR_HANDOFF`, keep `HANDED_OFF=NO`, and keep Gate 8–10 `NOT_AUTHORIZED`.

- [ ] **Step 4: Recompute final hashes**

After closure text is final, recompute all source and deliverable SHA-256 values, update the current Manifest once, and rerun the audit. Any semantic edit after this step requires a new version.

### Task 5: Governance Synchronization

**Files:**
- Modify: four Legal / Privacy Briefs in `docs/page-briefs/`
- Modify: `00_PROJECT_STATUS.md`
- Modify: `01_PROJECT_INDEX.md`

**Interfaces:**
- Consumes: closed Gate 7 package and current V0.8 manifests.
- Produces: discoverable project status with no false Gate 8, handoff, deployment or publication claim.

- [ ] **Step 1: Update Brief gate records**

Set Gate 7 to project-control pass/closed and lifecycle `APPROVED_FOR_HANDOFF`; replace stale `18/18` Gate 6 references with the current `20/20` result where present.

- [ ] **Step 2: Update project status and index**

Add the Gate 7 package, current manifests, validation and closure pointers. State `HANDED_OFF=NO` and Gate 8–10 not authorized.

- [ ] **Step 3: Run final verification**

Run the Gate 6 audit, Gate 7 audit, hash checks and governance-pointer checks. Expected: all pass with zero failures and no access/write under `D:\16Wordpress_nextjs`.

## Self-Review

- Spec coverage: every Gate 6 open later-stage control is assigned to Gate 8, Gate 9 or Gate 10 without entering Buyer Clean copy.
- Placeholder scan: package contains no `TBD`, `TODO`, fake route, fake provider, fake identifier or public internal-governance label.
- Type consistency: Page IDs, route keys, locale values, consent states and readiness keys are identical across all contracts.
- Authority consistency: current copy hashes and visual hashes are recomputed, not copied from memory.
- Scope consistency: Gate 7 closes the specification only; it does not hand off, develop, deploy or publish.
