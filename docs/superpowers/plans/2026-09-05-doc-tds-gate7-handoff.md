# DOC-TDS Gate 7 Handoff Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the approved DOC-TDS Gate 1–6 baseline into one development-ready Gate 7 specification package without entering the development repository or authorizing Gate 8.

**Architecture:** The package separates content/component mapping, request transport, SEO/GEO/Schema, responsive/accessibility, scope/shared ownership, machine-readable source data and later-stage acceptance into focused contracts. A single current Manifest binds those files and the frozen Gate 5 visual assets by SHA-256.

**Tech Stack:** Markdown contracts, JSON source payload, Node.js validation, Playwright-based retained Gate 6 audit.

**Spec:** `pages/documents/tds-sds-coa/05_review/DOC-TDS_CURRENT_GATE6_BASELINE_MANIFEST_V0.1.md`

## Global Constraints

- Planning and handoff work stays in `D:\23MySec`; do not access or modify `D:\16Wordpress_nextjs`.
- Page identity is `DOC-TDS`; route is `/documents/tds-sds-coa/`; site scope is exactly `tio2-my`.
- Gate 1–5 are user-approved and frozen; Gate 6 is project-control passed and closed.
- Gate 7 authorization permits preparation and review of the handoff package only.
- Gate 8–10, implementation, deployment, publication, DNS and indexing remain unauthorized.
- The receiving form remains CONV-DOC at `/request-documents/` with one required Product Grade before submission and one-or-more document types.
- No public inventory, filename, download, availability, currentness, certification, compliance, origin or delivery claim may be introduced.

---

### Task 1: Create the Gate 7 package root and exact page payload

**Files:**
- Create: `pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_DEVELOPMENT_HANDOFF_PACKAGE_V0.1.md`
- Create: `pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_SOURCE_PAYLOAD_V0.1.json`

**Interfaces:**
- Consumes: approved Buyer Clean V0.3, Gate 5 visual Manifest V0.2 and Gate 6 Manifest V0.1.
- Produces: exact human-readable authority order and machine-readable content/field values used by all later contracts.

- [x] Record the page identity, authorization, package boundary and authority order.
- [x] Encode all ten modules, 14 Grade options, three document types, five FAQs and three related paths in valid JSON.
- [x] Preserve exact Buyer Clean wording and route/evidence restrictions.
- [x] Parse the JSON with Node.js and confirm no duplicate Grade or module IDs.

### Task 2: Define content, component and request-state contracts

**Files:**
- Create: `pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_CONTENT_COMPONENT_MAPPING_V0.1.md`
- Create: `pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_ROUTE_PREFILL_STATE_CONTRACT_V0.1.md`

**Interfaces:**
- Consumes: source payload module IDs and CONV-DOC Gate 7 field inventory.
- Produces: render rules, component ownership, exact prefill normalization and action-state behavior.

- [x] Map each module to fields, component semantics and empty/conditional behavior.
- [x] Define `document_types[]`, one `product_grade`, hidden `source_page=DOC-TDS` and invalid-input handling.
- [x] Require all three primary actions to share one synchronized target state.
- [x] Carry route-unavailable action/Schema atomic suppression with no Contact fallback.

### Task 3: Define search, responsive and shared-system contracts

**Files:**
- Create: `pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_SEO_GEO_SCHEMA_SOCIAL_CONTRACT_V0.1.md`
- Create: `pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_RESPONSIVE_ACCESSIBILITY_INTERACTION_ACCEPTANCE_V0.1.md`
- Create: `pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_SITE_SCOPE_SHARED_DEPENDENCY_CONTRACT_V0.1.md`

**Interfaces:**
- Consumes: approved SEO/GEO/Schema direction, Gate 5 visuals and Global Chrome V0.5.
- Produces: exact metadata/Schema limits, breakpoint/a11y acceptance and cross-scope/shared-owner rules.

- [x] Bind exact Title, Meta, H1, clean Canonical and `WebPage + BreadcrumbList` only.
- [x] Prohibit `FAQPage`, Product, Offer, DigitalDocument and unsupported document relationships.
- [x] Define 1440/1280/1024/768/640/430/390/375/320 acceptance, 44px targets, focus and no-overflow rules.
- [x] Bind Global Chrome, Production Logo, legal utilities and `site_scope=tio2-my` without page-local forks.

### Task 4: Define Gate 8 implementation and Gate 9 read-only acceptance

**Files:**
- Create: `pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_GATE8_IMPLEMENTATION_GATE9_ACCEPTANCE_V0.1.md`

**Interfaces:**
- Consumes: all Gate 7 contracts.
- Produces: independently testable implementation work packages, required evidence and release blockers for the external project.

- [x] Separate content, request-state, route, scope, SEO/Schema, accessibility and shared-dependency implementation work.
- [x] Specify positive, empty, invalid, duplicate, unsupported, route-unavailable and cross-scope test cases.
- [x] Require Gate 9 screenshots/runtime evidence without authorizing Gate 8.
- [x] Preserve Gate 10 control of release, production receiver readiness, robots and indexing.

### Task 5: Validate, review and close Gate 7

**Files:**
- Create: `99_workspace/DOC-TDS/gate7/validate-doc-tds-gate7.mjs`
- Create: `pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_VALIDATION_V0.1.md`
- Create: `pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md`
- Create: `pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md`
- Create: `pages/documents/tds-sds-coa/06_handoff/DOC-TDS_CURRENT_GATE7_BASELINE_MANIFEST_V0.1.md`
- Modify: `00_PROJECT_STATUS.md`
- Modify: `01_PROJECT_INDEX.md`

**Interfaces:**
- Consumes: complete Gate 7 package and frozen Gate 5 hashes.
- Produces: one approved Gate 7 baseline root with explicit Gate 8 stop boundary.

- [x] Validate JSON, exact counts/values, route/Schema/evidence controls, required files and frozen visual hashes.
- [x] Run the retained Gate 6 audit and the new Gate 7 validation with zero failures.
- [x] Submit and independently close Gate 7 only if P0/P1 are zero.
- [x] Bind every package file by SHA-256 in the current Gate 7 Manifest.
- [x] Update project status/index and verify no authorization for Gate 8–10 was introduced.
