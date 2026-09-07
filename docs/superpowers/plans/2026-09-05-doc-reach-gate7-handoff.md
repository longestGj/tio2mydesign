# DOC-REACH Gate 7 Development Handoff Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the user-approved DOC-REACH Gate 1–6 baseline into a deterministic, validated Gate 7 development-delivery package without accessing or modifying D16.

**Architecture:** One immutable JSON source payload carries the exact approved buyer-visible modules, routes, metadata and publication boundaries. Focused Markdown contracts define component mapping, request-state transport, SEO/GEO/Schema/social output, responsive/accessibility behavior, site-scope/shared dependencies and future Gate 8/Gate 9 acceptance. A local Node validator checks the package, upstream hashes and governance boundaries before a current Gate 7 Manifest becomes authoritative.

**Tech Stack:** Markdown governance contracts, JSON source payload, Node.js ESM validator, existing Playwright/Sharp Gate 6 regression tooling.

**Spec:** `pages/documents/reach/05_review/DOC-REACH_CURRENT_GATE6_BASELINE_MANIFEST_V0.12.md`

## Global Constraints

- Work only in `D:\23MySec`; do not access or modify `D:\16Wordpress_nextjs`.
- Page identity remains `DOC-REACH` / `/documents/reach/` / English / P1 / `site_scope=tio2-my`.
- Gate 1–6 approved copy, module order, visual assets and hashes remain immutable.
- Current public answer remains the approved general answer; the stronger IKHLAS/entity/arrangement coverage statement is not used in this baseline.
- `reach compliant titanium dioxide` remains query-language-only and may not render.
- CONV-DOC uses `document_types[]=other`, a buyer-visible `REACH Documentation` semantic presentation and buyer-editable additional requirements; raw `other` never appears as the page's public label.
- Hidden source attribution is system-controlled and non-editable; buyer fields cannot be satisfied by hidden data.
- Request action and corresponding Schema relation are removed atomically when ineligible; Contact and cross-scope fallback are prohibited.
- Gate 8–10, implementation, deployment, publication, DNS and indexing remain unauthorized.

---

### Task 1: Record the user decision and Gate 7 authority

**Files:**
- Create: `pages/documents/reach/05_review/DOC-REACH_GATE6_USER_DECISION_AND_GATE7_AUTHORIZATION_V0.1.md`
- Modify: `docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.0.md`

**Interfaces:**
- Consumes: the exact user decision `保留当前通用答案；授权 Gate 7。`
- Produces: a current, scoped fact/content decision and explicit Gate 7 authority.

- [ ] **Step 1: Record the exact decision and its two independent effects**

Record that the current general answer remains the page authority and that EG-006's stronger proposition is not approved for this baseline; separately record Gate 7 authorization.

- [ ] **Step 2: Preserve future change control**

State that the user did not declare the stronger proposition false forever; any future inclusion requires a new scoped decision and appropriate entity/arrangement evidence.

- [ ] **Step 3: Verify decision text and Gate boundary**

Run:

```powershell
rg -n "保留当前通用答案|授权 Gate 7|Gate 8–10.*NOT_AUTHORIZED|EG-006" pages/documents/reach/05_review docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.0.md
```

Expected: the exact user decision, current-baseline exclusion and Gate 8–10 lock are present.

### Task 2: Create the package root and exact source payload

**Files:**
- Create: `pages/documents/reach/06_handoff/DOC-REACH_GATE7_DEVELOPMENT_HANDOFF_PACKAGE_V0.1.md`
- Create: `pages/documents/reach/06_handoff/DOC-REACH_GATE7_SOURCE_PAYLOAD_V0.1.json`

**Interfaces:**
- Consumes: approved Buyer Clean V0.1, Gate 5 approved Manifest V0.11, Gate 6 Manifest V0.12.
- Produces: package ID `DOC-REACH-G7-HANDOFF-01` and a machine-readable `modules[11]` payload.

- [ ] **Step 1: Write the package authority order**

Lock Gate 6, Buyer Clean, Gate 5, CONV-DOC, Documents Hub, Global Chrome, Logo, Legal and evidence-decision authorities by path and hash.

- [ ] **Step 2: Encode the exact page payload**

The JSON must contain:

```json
{
  "schema_version": "0.1",
  "package_id": "DOC-REACH-G7-HANDOFF-01",
  "page": {"site_scope":"tio2-my","page_id":"DOC-REACH","route":"/documents/reach/","language":"en"},
  "modules": ["hero","direct_answer","substance_vs_coverage","legal_actor","regulatory_scope","verification_checklist","official_sources","request_process","buyer_questions","related_paths","final_cta"]
}
```

Each module must carry its full approved wording, not an identifier-only placeholder.

- [ ] **Step 3: Encode evidence and request controls**

Include exact official-source rows, reviewed/source-updated dates, `document_types[]=other`, semantic `REACH Documentation`, editable buyer context, hidden source attribution, the current-answer allowlist and explicit strong-claim/query-language denylists.

- [ ] **Step 4: Validate JSON syntax**

Run:

```powershell
node -e "JSON.parse(require('fs').readFileSync('pages/documents/reach/06_handoff/DOC-REACH_GATE7_SOURCE_PAYLOAD_V0.1.json','utf8')); console.log('JSON_PARSE=PASS')"
```

Expected: `JSON_PARSE=PASS`.

### Task 3: Create focused implementation contracts

**Files:**
- Create: `pages/documents/reach/06_handoff/DOC-REACH_GATE7_CONTENT_COMPONENT_MAPPING_V0.1.md`
- Create: `pages/documents/reach/06_handoff/DOC-REACH_GATE7_ROUTE_PREFILL_STATE_CONTRACT_V0.1.md`
- Create: `pages/documents/reach/06_handoff/DOC-REACH_GATE7_SEO_GEO_SCHEMA_SOCIAL_CONTRACT_V0.1.md`
- Create: `pages/documents/reach/06_handoff/DOC-REACH_GATE7_RESPONSIVE_ACCESSIBILITY_INTERACTION_ACCEPTANCE_V0.1.md`
- Create: `pages/documents/reach/06_handoff/DOC-REACH_GATE7_SITE_SCOPE_SHARED_DEPENDENCY_CONTRACT_V0.1.md`

**Interfaces:**
- Consumes: `DOC-REACH_GATE7_SOURCE_PAYLOAD_V0.1.json` and shared owner contracts.
- Produces: independently reviewable rendering, transport, machine-readable, accessibility and isolation specifications.

- [ ] **Step 1: Map all eleven modules to semantic components**

Define field names, ownership, render order, empty/conditional behavior and prohibited local forks.

- [ ] **Step 2: Specify request transport and state**

Define normalized inputs:

```text
prefill.document_types[]=other
prefill.additional_requirements=REACH documentation
source_context.page_id=DOC-REACH
```

The first two are visible/editable/removable buyer context; the source is hidden/system/non-editable. Invalid, duplicate, malformed and tampered values must fail safely.

- [ ] **Step 3: Specify exact SEO/GEO/Schema/social outputs**

Lock Title, Meta, Canonical candidate, one H1, EN locale, `WebPage + BreadcrumbList`, visible/Schema parity, OG/Twitter same-source rules and prohibited claim/node scans.

- [ ] **Step 4: Specify nine-width and accessibility acceptance**

Require 1440/1280/1024/768/640/430/390/375/320, 200% zoom, no overflow, 44×44 targets, FAQ disclosure semantics, Mobile Menu focus behavior, source-link clarity, forced colors and reduced motion.

- [ ] **Step 5: Specify `site_scope` and shared dependencies**

Require `tio2-my` at page, CMS, API, query, cache, route, metadata and Schema boundaries; prohibit missing/wrong-scope fallback; bind Global Chrome, Logo, Legal/CMP, DOC-000, MARKET-EU-001 and CONV-DOC ownership.

### Task 4: Create future Gate 8/Gate 9 acceptance and validator

**Files:**
- Create: `pages/documents/reach/06_handoff/DOC-REACH_GATE7_GATE8_IMPLEMENTATION_GATE9_ACCEPTANCE_V0.1.md`
- Create: `99_workspace/DOC-REACH/gate7/validate-doc-reach-gate7.mjs`

**Interfaces:**
- Consumes: all Gate 7 package artifacts.
- Produces: bounded implementation work packages and deterministic validation results.

- [ ] **Step 1: Define Gate 8 work packages**

Separate content/CMS, route/scope, request integration, source freshness, shared Chrome, responsive, accessibility, SEO/Schema/social, tests and evidence-return responsibilities so each can be independently accepted.

- [ ] **Step 2: Define Gate 9 evidence matrix**

Require exact payload comparison, visual evidence, nine-width measurements, interaction/accessibility proof, positive and negative prefill tests, wrong/missing-scope tests, metadata/Schema inspection, public-output denylist scans and dependency readiness.

- [ ] **Step 3: Write the core validator**

The validator must assert upstream hashes, JSON shape, 11 unique modules, exact SEO values, five FAQ items, four sources, seven checklist entries, three role entries, three jurisdiction entries, four request steps, two related routes, request-state rules, evidence denylists, nine widths, shared dependencies and no placeholders.

- [ ] **Step 4: Run core validation and Gate 6 regression**

Run:

```powershell
node 99_workspace/DOC-REACH/gate7/validate-doc-reach-gate7.mjs
node 99_workspace/DOC-REACH/gate6/audit-doc-reach-gate6.mjs
```

Expected: both return `PASS` and zero failures.

### Task 5: Close Gate 7 and establish the current Manifest

**Files:**
- Create: `pages/documents/reach/06_handoff/DOC-REACH_GATE7_VALIDATION_V0.1.md`
- Create: `pages/documents/reach/06_handoff/DOC-REACH_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md`
- Create: `pages/documents/reach/06_handoff/DOC-REACH_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md`
- Create: `pages/documents/reach/06_handoff/DOC-REACH_CURRENT_GATE7_BASELINE_MANIFEST_V0.13.md`
- Modify: `00_PROJECT_STATUS.md`
- Modify: `01_PROJECT_INDEX.md`

**Interfaces:**
- Consumes: validated package files and their SHA-256 values.
- Produces: `APPROVED_FOR_HANDOFF`, one current Gate 7 pointer and a locked Gate 8 decision boundary.

- [ ] **Step 1: Write validation and project-control records**

Record exact command output, P0/P1/required-P2 counts, upstream regression and the D16 non-access statement.

- [ ] **Step 2: Hash every package file**

Run:

```powershell
Get-FileHash -Algorithm SHA256 pages/documents/reach/06_handoff/*,99_workspace/DOC-REACH/gate7/validate-doc-reach-gate7.mjs
```

Expected: one stable SHA-256 for every file.

- [ ] **Step 3: Create the sole current Gate 7 Manifest**

List every artifact, hash, authority state, visual baseline, current-answer decision, later-stage controls and `Gate 8–10=NOT_AUTHORIZED`.

- [ ] **Step 4: Synchronize project status and index**

Set DOC-REACH lifecycle to `APPROVED_FOR_HANDOFF`, Gate 1–7 closed, Gate 8 pending separate user authorization. Do not change DOC-COO or external development status.

- [ ] **Step 5: Run final validator mode**

Run:

```powershell
node 99_workspace/DOC-REACH/gate7/validate-doc-reach-gate7.mjs --final
rg -n "DOC-REACH.*APPROVED_FOR_HANDOFF|Gate 8–10.*NOT_AUTHORIZED|DOC-REACH_CURRENT_GATE7_BASELINE_MANIFEST_V0.13" 00_PROJECT_STATUS.md 01_PROJECT_INDEX.md pages/documents/reach/06_handoff
```

Expected: final validation passes, one current pointer exists and Gate 8 remains unauthorized.

### Task 6: Self-review and stop at the Gate 8 boundary

**Files:**
- Review only: every file created or modified by Tasks 1–5.

**Interfaces:**
- Consumes: final package and Manifest.
- Produces: verified Gate 7 completion report, with no external handoff.

- [ ] **Step 1: Check specification coverage**

Map every Gate 6 carry-forward `DOC-REACH-G6-R01` through `R08` to a Gate 7 contract and future acceptance test.

- [ ] **Step 2: Scan placeholders and internal leakage**

Run:

```powershell
rg -n "TBD|TODO|fill in details|implement later|ECHA_TIO2_DIRECT_ANSWER_PUBLICATION_BLOCKER=OPEN" pages/documents/reach/06_handoff
```

Expected: no placeholder or obsolete current-control language.

- [ ] **Step 3: Confirm stop boundary**

Verify that no handoff message, D16 access, code change, deployment, publication, DNS or indexing action occurred. Gate 8 awaits a separate user decision.

