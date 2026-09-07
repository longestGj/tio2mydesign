# DOC-TDS Gate 3 Responsive Wireframe Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce, verify and register the complete DOC-TDS Gate 3 responsive wireframe package for 1440px Desktop, 768px Tablet, 390px logical Mobile, Mobile Menu and required interaction states.

**Architecture:** Create one Superdesign project target for `/documents/tds-sds-coa/` using the approved Buyer Clean copy, shared Global Chrome, production logo and the user-approved decision-first structure. Preserve one active draft and derive responsive/state evidence without changing Gate 2 content or entering Gate 4 styling.

**Tech Stack:** Superdesign CLI, HTML/CSS wireframe source, browser rendering/screenshot tooling available in the workspace runtime, PowerShell validation, Markdown control documents.

**Spec:** `docs/superpowers/specs/2026-09-04-doc-tds-gate3-wireframe-design.md`

**Execution note:** Superdesign project creation, model discovery and approved Logo uploads succeeded, but draft generation was blocked by `out of credits`. Under the skill fallback rule, Task 2 used a deterministic local HTML/CSS source and the existing browser runtime. No Superdesign draft id exists and `.superdesign/resume.json` is intentionally unchanged.

## Global Constraints

- Work only in `D:\23MySec`; do not access or modify `D:\16Wordpress_nextjs`.
- Gate ceiling is Gate 3; Gate 4–10, development, deployment, publication, DNS and indexing remain unauthorized.
- Use `DOC-TDS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md` verbatim for Buyer Clean content.
- Preserve module order: `Hero → Direct Answer → Document Choice → Product Grade → Comparison → Request Checklist → Request Process → Buyer Questions → Related Document Paths → Final CTA`.
- Consume Global Chrome V0.5 and the exact production TiO2 Malaysia logo without redesign.
- Produce 1440px Desktop, 768px Tablet and 390px logical Mobile evidence; a 780px export must be labelled `390px logical @2x`.
- No public inventory, filename, preview, direct download, Grade-document availability relation or buyer-visible internal governance language.
- All primary controls and disclosure targets are at least 44px at Tablet and Mobile.

---

### Task 1: Freeze source bundle and Superdesign target

**Files:**
- Create: `pages/documents/tds-sds-coa/04_planning/gate3/DOC-TDS_GATE3_SOURCE_BUNDLE_V0.1.md`
- Modify: `.superdesign/resume.json`

**Interfaces:**
- Consumes: approved Gate 2 copy, Gate 3 design spec, Global Chrome V0.5, Visual Standard V1.0, production logo manifest and existing `.superdesign/init/` files.
- Produces: an enumerated context bundle and one Superdesign project/target identity for later tasks.

- [x] **Step 1: Create and verify the Gate 3 output directories**

Create `pages/documents/tds-sds-coa/04_planning/gate3/assets` and `99_workspace/DOC-TDS/gate3` if absent; verify every resolved path remains under `D:\23MySec`.

- [x] **Step 2: Run the Superdesign CLI preflight and model discovery**

Run the bare CLI command, confirm authentication/project access, then run `list-models`. Select the available model best suited to a long responsive B2B page and record the returned model id in the source bundle.

- [x] **Step 3: Create or recover the Superdesign project**

Because `.superdesign/resume.json` contains no DOC-TDS target, create a project titled `TiO2 Malaysia — DOC-TDS Gate 3` and capture its returned project id and canvas URL. Do not change the existing `/request-sample/` or `/markets/european-union/` targets.

- [x] **Step 4: Upload the exact production logo as a Brand Asset**

Resolve the production SVG from its manifest, upload it with purpose `brand`, type `logo`, a stable repository-relative key and an identity-focused description. Capture the returned asset key.

- [x] **Step 5: Write the source-bundle record**

Record the exact context files, fingerprints, project id, model id, canvas URL and logo asset key. Confirm no temporary or untrusted file is represented as authority.

### Task 2: Create the responsive wireframe draft

**Files:**
- Create: Superdesign draft for target `/documents/tds-sds-coa/`
- Create: `99_workspace/DOC-TDS/gate3/DOC-TDS_GATE3_DRAFT_SOURCE_V0.1.html`
- Modify: `.superdesign/resume.json`

**Interfaces:**
- Consumes: Task 1 project id, model id, logo asset key and exact context bundle.
- Produces: one active responsive HTML draft with Desktop, Tablet, Mobile, Mobile Menu and state-board modes.

- [x] **Step 1: Generate one decision-first draft**

Use `create-design-draft` with one prompt, the selected model, the approved context files and the logo asset reference. The prompt must require grayscale Gate 3 wireframes, exact module/copy preservation, three semantic document checkboxes, one Grade dropdown, responsive comparison transformation and no Gate 4 decoration.

- [x] **Step 2: Fetch and inspect the generated HTML**

Use `get-design` to save the active draft HTML. Scan for all ten modules, five FAQ questions, fourteen Grade values, TDS/SDS/COA checkbox semantics, all required CTA labels and the absence of prohibited buyer-visible terms.

- [x] **Step 3: Enforce the logo invariant**

Confirm the exact uploaded production logo asset is referenced. If omitted or substituted, make the smallest deterministic HTML correction and import it into the same draft id; refetch and prove the invariant.

- [x] **Step 4: Correct deterministic content or structure defects**

Use same-draft HTML import for exact copy, labels, anchor targets, mode parameters, overflow rules and missing responsive structures. Use model replacement only if the hierarchy or composition requires design judgment.

- [x] **Step 5: Persist resume state**

Add a DOC-TDS target containing the project id, active/baseline draft id, current version, context bundle, logo asset key and fingerprints while preserving unrelated targets.

### Task 3: Render the required Gate 3 evidence

**Files:**
- Create: `pages/documents/tds-sds-coa/04_planning/gate3/assets/DOC-TDS_G3_DESKTOP_1440_WIREFRAME_V0.1.png`
- Create: `pages/documents/tds-sds-coa/04_planning/gate3/assets/DOC-TDS_G3_TABLET_768_WIREFRAME_V0.1.png`
- Create: `pages/documents/tds-sds-coa/04_planning/gate3/assets/DOC-TDS_G3_MOBILE_390_LOGICAL_2X_WIREFRAME_V0.1.png`
- Create: `pages/documents/tds-sds-coa/04_planning/gate3/assets/DOC-TDS_G3_MOBILE_MENU_390_LOGICAL_2X_WIREFRAME_V0.1.png`
- Create: `pages/documents/tds-sds-coa/04_planning/gate3/assets/DOC-TDS_G3_SELECTION_STATES_V0.1.png`

**Interfaces:**
- Consumes: Task 2 active draft HTML and its deterministic query/mode contract.
- Produces: five complete raster review assets.

- [x] **Step 1: Render Desktop at 1440px logical width**

Capture the complete initial page from Header through Footer and verify no crop or abnormal empty region.

- [x] **Step 2: Render Tablet at 768px logical width**

Capture the complete initial page and verify all modules, CTAs and comparison content remain present without horizontal overflow.

- [x] **Step 3: Render Mobile at 390px logical width and 2× scale**

Export at 780px physical width, record it as `390px logical @2x`, and verify the comparison uses document cards rather than horizontal scrolling.

- [x] **Step 4: Render Mobile Menu open**

Capture the complete visible open-menu state with Documents active treatment, terminal RFQ action and no buyer-visible `CURRENT` label.

- [x] **Step 5: Render the selection state board**

Show initial, one document type plus Grade, and multiple document types with no Grade. Keep review labels outside Buyer Clean page frames.

### Task 4: Validate structure, content and responsive behavior

**Files:**
- Create: `pages/documents/tds-sds-coa/04_planning/gate3/DOC-TDS_GATE3_VALIDATION_V0.1.md`

**Interfaces:**
- Consumes: Task 2 HTML and Task 3 raster evidence.
- Produces: a reproducible PASS/FAIL validation record.

- [x] **Step 1: Validate file dimensions and hashes**

Record each PNG's physical dimensions, byte size and SHA-256. Require widths of 1440, 768, 780, 780 and 1440 respectively; record actual full-page heights without preselecting a target value.

- [x] **Step 2: Validate content cardinalities**

Require ten body modules, three document checkboxes, one explanatory multiple-needs card, fourteen Grade values, five FAQ questions, three Related Paths and four request-process steps.

- [x] **Step 3: Validate Buyer Clean and prohibited claims**

Require all approved headings and CTA labels. Fail if Buyer Clean contains internal governance terms, public-download actions, file inventory claims, Grade-document availability mappings or invented response/availability promises.

- [x] **Step 4: Validate responsiveness and accessibility direction**

Verify no horizontal overflow at 1440, 768 and 390 logical widths; interactive targets are at least 44px at Tablet/Mobile; Mobile comparison is card-based; FAQ expansion stays in document flow; page closes at Footer.

- [x] **Step 5: Visually inspect every asset**

Open all five PNGs at readable scale and record any clipping, text collision, missing modules, excessive blank space or illegible annotations. Correct the active draft and rerender any failing asset before closing validation.

### Task 5: Assemble the Gate 3 project-control package

**Files:**
- Create: `pages/documents/tds-sds-coa/04_planning/gate3/DOC-TDS_GATE3_WIREFRAME_SPECIFICATION_V0.1.md`
- Create: `pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE3_PROJECT_CONTROL_SUBMISSION_V0.1.md`
- Create: `pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE3_BASELINE_MANIFEST_V0.1.md`
- Modify: `00_PROJECT_STATUS.md`
- Modify: `01_PROJECT_INDEX.md`

**Interfaces:**
- Consumes: Tasks 1–4 source bundle, active draft, raster evidence and validation record.
- Produces: one reviewable Gate 3 candidate and a unique current Gate 3 pointer.

- [x] **Step 1: Write the wireframe specification**

Record the exact Desktop, Tablet and Mobile layout, interaction state machine, comparison transformation, shared Chrome assembly, responsive rules and evidence restrictions implemented in the assets.

- [x] **Step 2: Write the current Manifest**

List every authoritative Gate 1–3 input/output with version, bytes, SHA-256, dimensions, status, user decision source, historical disposition, open items and Gate 4 authorization=`NO`.

- [x] **Step 3: Write the project-control submission**

Present the actual module structure, responsive differences, interaction states, visual evidence, validation results, remaining limitations and the precise user decision requested. Set candidate state to `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` only after all validation checks pass.

- [x] **Step 4: Synchronize status and index**

Update only the DOC-TDS Gate 3 records and preserve unrelated project progress. Do not mark Gate 3 approved until the user explicitly approves the completed assets.

- [x] **Step 5: Run final package verification**

Recompute hashes after documentation changes, verify every Manifest path exists, confirm there is one current Gate 3 pointer and rescan for unauthorized Gate 4–10, D16, deployment or publication status.
