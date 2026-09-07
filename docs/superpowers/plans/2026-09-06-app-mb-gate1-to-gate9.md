# APP-MB Gate 1–9 Delivery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the governed Masterbatch article into an approved, implemented and read-only-QA-accepted TiO2 Malaysia Application landing page without skipping any project Gate.

**Architecture:** The source article is treated as evidence-led content input, not as a publishable HTML blob. D23 progressively freezes intent, full Buyer Clean copy, responsive structure, visual presentation and a semantic development contract; D16 separately implements WordPress/Next.js under `site_scope=tio2-my`; D23 then performs Gate 9 read-only QA.

**Tech Stack:** Markdown and CSV governance artifacts; SHA-256 manifests; 1440/768/390 PNG review assets; semantic HTML/CMS contract; external WordPress/Next.js implementation in `D:\16Wordpress_nextjs`.

**Spec:** `D:\23MySec\docs\superpowers\specs\2026-09-06-app-mb-article-to-application-page-design.md`

## Global Constraints

- Registered page: `APP-MB`, Application landing page, `/applications/titanium-dioxide-for-masterbatch/`, `PROVISIONAL_URL`.
- Primary keyword: `titanium dioxide for masterbatch`.
- Site scope: `tio2-my`; no cross-scope fallback or leakage.
- D23 does not modify WordPress, Next.js, CMS, components, styles, tests, deployment or production state.
- Gate approval is serial; approval of one Gate does not authorize the next.
- Buyer-visible output contains no internal Gate, review, blocker, evidence-gap or release-status language.
- The current Product V0.3 neutral Masterbatch set is `M-510`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-2377`; no ranking, recommendation, equivalence, availability or fit guarantee.
- The current article candidate may enter Gate 1, but its three recorded editorial issues must close before Gate 2 full-copy approval.
- Gate 10, deployment, publication, DNS and indexing are excluded.

---

### Task 1: Gate 1 Admission and Page Brief

**Files:**
- Create: `D:\23MySec\docs\page-briefs\APP-MB_MASTERBATCH_BRIEF_V0.1.md`
- Create: `D:\23MySec\pages\applications\masterbatch\01_research\APP-MB_GATE1_ARTICLE_INPUT_AUDIT_V0.1.md`
- Create: `D:\23MySec\pages\applications\masterbatch\01_research\APP-MB_GATE1_KEYWORD_INTENT_AUDIT_V0.1.md`
- Create: `D:\23MySec\pages\applications\masterbatch\01_research\APP-MB_GATE1_PRODUCT_RELATION_AUTHORITY_AUDIT_V0.1.md`
- Create: `D:\23MySec\pages\applications\masterbatch\01_research\APP-MB_GATE1_CLAIM_EVIDENCE_REGISTER_V0.1.csv`

**Interfaces:**
- Consumes: page registry APP-MB row, keyword-master APP-MB row, Application Playbook, Product V0.3 matrix, current revised D22 article package and the approved design specification.
- Produces: one page identity, Page Intent Card, buyer-question set, evidence dispositions and a traceable Gate 1 input baseline.

- [ ] **Step 1: Create and populate the Page Brief**

Copy every required template field with explicit values or explicit decision states. Record the user decision dated `2026-09-06` as approval of the Application-page-plus-depth-article direction and Gate 1 start only.

- [ ] **Step 2: Audit the revised article package**

Record exact paths and hashes; map each article section to a buyer question; record the three pre-Gate-2 corrections; distinguish source-backed statements, editorial synthesis and buyer-action copy.

- [ ] **Step 3: Audit keyword ownership and cannibalization**

Confirm the primary and secondary keywords, protect exact Grade, market-supplier and process terms, and test the proposed H1/Hero direction against APP-PLAS and Product Grade ownership.

- [ ] **Step 4: Resolve the Product relation authority chain**

Document why Product V0.3 supersedes the older M-2377 Application freeze for the neutral relationship while preserving both historical records. Verify the exact seven-member set from CSV rows rather than prose memory.

- [ ] **Step 5: Build the Claim/Evidence Register**

Use columns `claim_id,module_id,claim_text,source_id,source_path,source_date,scope,verification_status,public_behavior,notes`. Every proposed factual or relationship claim must have one disposition.

- [ ] **Step 6: Verify Gate 1 artifacts**

Run:

```powershell
Get-FileHash -Algorithm SHA256 -LiteralPath @(
  'D:\23MySec\docs\page-briefs\APP-MB_MASTERBATCH_BRIEF_V0.1.md',
  'D:\23MySec\pages\applications\masterbatch\01_research\APP-MB_GATE1_ARTICLE_INPUT_AUDIT_V0.1.md',
  'D:\23MySec\pages\applications\masterbatch\01_research\APP-MB_GATE1_KEYWORD_INTENT_AUDIT_V0.1.md',
  'D:\23MySec\pages\applications\masterbatch\01_research\APP-MB_GATE1_PRODUCT_RELATION_AUTHORITY_AUDIT_V0.1.md',
  'D:\23MySec\pages\applications\masterbatch\01_research\APP-MB_GATE1_CLAIM_EVIDENCE_REGISTER_V0.1.csv'
)
```

Expected: five readable artifacts with hashes; no empty critical Brief field; seven exact neutral Masterbatch relationships; no product ranking language.

### Task 2: Gate 1 Project-Control and User Decision

**Files:**
- Create: `D:\23MySec\pages\applications\masterbatch\05_review\APP-MB_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md`
- Create: `D:\23MySec\pages\applications\masterbatch\APP-MB_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md`
- Modify after decision: `D:\23MySec\docs\page-briefs\APP-MB_MASTERBATCH_BRIEF_V0.1.md`

**Interfaces:**
- Consumes: all Task 1 Gate 1 artifacts.
- Produces: project-control disposition, current authority pointer and the user-facing Page Intent Card decision package.

- [ ] **Step 1: Review Gate 1 against the page contract**

Check identity, buyer, intent, keyword ownership, article-source status, grade authority, evidence status, GEO entities and all open items. Classify findings as blocking, important or advisory.

- [ ] **Step 2: Present the actual Page Intent Card**

Show the user the proposed audience, buyer problem, core message, must-include, must-exclude, primary CTA, secondary CTA and ownership boundary, plus changes from the article and current risks.

- [ ] **Step 3: Record the user decision**

Only after explicit confirmation, write `CONTENT_INTENT_CONFIRMED` with date, approved text, scope and next-Gate boundary. If changes are requested, version the affected artifact and repeat project-control review.

- [ ] **Step 4: Freeze the Gate 1 Manifest**

Record all authoritative file paths and SHA-256 hashes, open evidence items, the provisional URL, Gate 1 disposition and whether Gate 2 work is authorized.

### Task 3: Gate 2 Content Skeleton

**Files:**
- Create: `D:\23MySec\pages\applications\masterbatch\04_planning\APP-MB_GATE2_CONTENT_SKELETON_V0.1.md`
- Create: `D:\23MySec\pages\applications\masterbatch\04_planning\APP-MB_GATE2_SEO_GEO_SCHEMA_SKELETON_V0.1.md`

**Interfaces:**
- Consumes: Gate 1 approved Page Intent Card, Claim/Evidence Register and corrected governed article candidate.
- Produces: H1, Hero, exact module order, one-sentence module purpose, CTA/internal-link direction and machine-readable scope for user review.

- [ ] **Step 1: Confirm corrected article input**

Verify the new D22 revision path, hash, trace and review disposition. Do not silently edit the previous accepted package.

- [ ] **Step 2: Write the actual content skeleton**

Use the fourteen modules from the design specification. Show the exact proposed H1, Hero direct answer, every section heading, CTA label and target Page ID/route condition.

- [ ] **Step 3: Define SEO/GEO/Schema direction**

Write the proposed Title, Meta Description, provisional Canonical treatment, index direction, core entities, answer-ready blocks, Breadcrumb relationship and the exact Schema types under consideration. Do not add an `Article` or `FAQPage` type merely because the copy is long.

- [ ] **Step 4: Present the skeleton decision**

Show the user the actual skeleton, its differences from the source article, the modules added for conversion, any condensed/relocated content and open route/evidence conditions. Record approval or produce a versioned revision.

### Task 4: Gate 2 Full Buyer Clean Copy and Content Model

**Files:**
- Create: `D:\23MySec\pages\applications\masterbatch\04_planning\APP-MB_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md`
- Create: `D:\23MySec\pages\applications\masterbatch\04_planning\APP-MB_GATE2_HTML_CONTENT_MODEL_V0.1.md`
- Create: `D:\23MySec\pages\applications\masterbatch\05_review\APP-MB_GATE2_PROJECT_CONTROL_REVIEW_V0.1.md`
- Modify after approval: `D:\23MySec\pages\applications\masterbatch\APP-MB_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md`

**Interfaces:**
- Consumes: approved Gate 2 skeleton, corrected article and Gate 1 evidence controls.
- Produces: complete publishable English copy and field-by-field semantic module contract.

- [ ] **Step 1: Write full Buyer Clean copy**

Include every visible paragraph, label, table heading/cell, process step, product-card label, FAQ answer, CTA, helper text and source note. Remove source comments and internal workflow language.

- [ ] **Step 2: Specify the HTML content model**

For each module define semantic element, heading level, repeatable fields, rich-text allowlist, citation anchor behavior, mobile table transformation, empty-state behavior and route eligibility.

- [ ] **Step 3: Run content controls**

Search for forbidden governance language and unapproved claims:

```powershell
rg -n -i 'internal review|pending copy|release blocker|evidence gap|best|ideal|recommended|equivalent|guarantee|finished masterbatch' 'D:\23MySec\pages\applications\masterbatch\04_planning\APP-MB_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md'
```

Expected: no internal-governance matches; any technical word match is reviewed in context and supported by the Claim/Evidence Register.

- [ ] **Step 4: Conduct Gate 2 project-control review**

Review complete copy, module order, SEO/GEO/Schema parity, CTA targets, grade set, citations, accessibility labels and conditional states.

- [ ] **Step 5: Obtain and record full-copy approval**

Present actual copy and material deltas. Only after user confirmation record `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` and update the current Manifest.

### Task 5: Gate 3 Responsive Wireframes

**Files:**
- Create: `D:\23MySec\pages\applications\masterbatch\04_planning\wireframes\APP-MB_GATE3_WIREFRAME_SPEC_V0.1.md`
- Create: `D:\23MySec\pages\applications\masterbatch\04_planning\wireframes\assets\APP-MB_G3_DESKTOP_1440_V0.1.png`
- Create: `D:\23MySec\pages\applications\masterbatch\04_planning\wireframes\assets\APP-MB_G3_TABLET_768_V0.1.png`
- Create: `D:\23MySec\pages\applications\masterbatch\04_planning\wireframes\assets\APP-MB_G3_MOBILE_390_V0.1.png`
- Create: `D:\23MySec\pages\applications\masterbatch\04_planning\wireframes\assets\APP-MB_G3_MOBILE_MENU_390_V0.1.png`
- Create: `D:\23MySec\pages\applications\masterbatch\05_review\APP-MB_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md`

**Interfaces:**
- Consumes: Gate 2 approved full copy and HTML content model.
- Produces: complete, real-copy responsive structure and interaction placement.

- [ ] **Step 1: Write the responsive wireframe contract**

Define 1440px, 768px and 390px module layout, on-page navigation, diagram/table transformations, CTA positions, source-note interaction and Mobile Menu assembly with shared Global Chrome.

- [ ] **Step 2: Produce all required wireframe assets**

Use real approved copy lengths. Show no placeholder text, clipped table, carousel or horizontal page overflow.

- [ ] **Step 3: Verify files and dimensions**

Use the project image-inspection runtime to confirm exact pixel dimensions and calculate SHA-256 for all assets.

- [ ] **Step 4: Review and obtain Gate 3 approval**

Present the four actual images, identify structural transformations and risks, and record approval without opening Gate 4 automatically.

### Task 6: Gate 4 Visual Direction

**Files:**
- Create: `D:\23MySec\pages\applications\masterbatch\04_planning\visual-directions\APP-MB_GATE4_VISUAL_DIRECTION_V0.1.md`
- Create: `D:\23MySec\pages\applications\masterbatch\04_planning\visual-directions\assets\APP-MB_G4_COMPONENT_STATES_V0.1.png`
- Create: `D:\23MySec\pages\applications\masterbatch\05_review\APP-MB_GATE4_PROJECT_CONTROL_REVIEW_V0.1.md`

**Interfaces:**
- Consumes: approved Gate 3 wireframes, visual standard and current shared Global Chrome.
- Produces: page-specific visual rules without redefining the brand system.

- [ ] **Step 1: Define visual treatment**

Specify hierarchy, typography, spacing, technical diagram style, evidence-card style, table/card transformation, citation treatment, button/focus states, media boundary and no-image fallback.

- [ ] **Step 2: Produce the component-state board**

Show normal, hover/focus, expanded, selected/context, route-omitted and long-content states using Buyer Clean labels.

- [ ] **Step 3: Review and obtain Gate 4 approval**

Present actual visuals and their relationship to the approved wireframe. Record only Gate 4 approval.

### Task 7: Gate 5 Full Visual Baseline

**Files:**
- Create: `D:\23MySec\pages\applications\masterbatch\04_planning\visual-designs\APP-MB_GATE5_FULL_VISUAL_DESIGN_V0.1.md`
- Create: `D:\23MySec\pages\applications\masterbatch\04_planning\visual-designs\assets\APP-MB_G5_DESKTOP_1440_V0.1.png`
- Create: `D:\23MySec\pages\applications\masterbatch\04_planning\visual-designs\assets\APP-MB_G5_TABLET_768_V0.1.png`
- Create: `D:\23MySec\pages\applications\masterbatch\04_planning\visual-designs\assets\APP-MB_G5_MOBILE_390_V0.1.png`
- Create: `D:\23MySec\pages\applications\masterbatch\04_planning\visual-designs\assets\APP-MB_G5_MOBILE_MENU_390_V0.1.png`
- Create: `D:\23MySec\pages\applications\masterbatch\04_planning\visual-designs\assets\APP-MB_G5_COMPONENT_STATES_V0.1.png`
- Create: `D:\23MySec\pages\applications\masterbatch\05_review\APP-MB_GATE5_PROJECT_CONTROL_REVIEW_V0.1.md`
- Create: `D:\23MySec\pages\applications\masterbatch\APP-MB_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md`

**Interfaces:**
- Consumes: approved Gate 2 copy, Gate 3 structure and Gate 4 visual direction.
- Produces: one complete intended buyer experience and current Gate 1–5 authority baseline.

- [ ] **Step 1: Produce the complete visual set**

Render every approved module and important state at 1440, 768 and 390 logical widths, plus Mobile Menu open and component states.

- [ ] **Step 2: Perform visual and content verification**

Check full-page closure, real content, H1, CTA labels, source numbering, table/card parity, 44px targets, focus direction, contrast, overflow, clipping, unexplained gaps and shared Chrome assembly.

- [ ] **Step 3: Build the current Manifest**

Record every authority file and image path, exact dimensions, bytes and SHA-256, user decisions, superseded pointers, open dependencies and the Gate 6 authorization state.

- [ ] **Step 4: Review and obtain Gate 5 approval**

Present the complete images and remaining risks. Approval closes only Gate 5.

### Task 8: Gate 6 Independent Project-Control Review

**Files:**
- Create: `D:\23MySec\pages\applications\masterbatch\05_review\APP-MB_GATE6_FINAL_PROJECT_CONTROL_REVIEW_V0.1.md`
- Modify after closure: `D:\23MySec\pages\applications\masterbatch\APP-MB_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md`

**Interfaces:**
- Consumes: the complete Gate 1–5 current Manifest and all authority artifacts.
- Produces: independent release-to-handoff disposition with blocking, important and advisory findings.

- [ ] **Step 1: Trace every contract item**

Check page identity, keyword, Claim/Evidence Register, full copy, three viewports, Global Chrome, CTA/dependencies, SEO/GEO/Schema parity, citations, accessibility and route conditions.

- [ ] **Step 2: Record and close findings**

Reopen only affected prior-Gate surfaces for any necessary correction, version all changed artifacts, and preserve the prior approved baseline until replacement approval.

- [ ] **Step 3: Record Gate 6 disposition**

Only when all blocking findings close, mark the package eligible for Gate 7 preparation. Do not write `APPROVED_FOR_HANDOFF` until the Gate 7 contract itself is complete and approved.

### Task 9: Gate 7 Development Handoff Contract

**Files:**
- Create: `D:\23MySec\pages\applications\masterbatch\06_handoff\APP-MB_GATE7_DEVELOPMENT_HANDOFF_V0.1.md`
- Create: `D:\23MySec\pages\applications\masterbatch\06_handoff\APP-MB_GATE7_CONTENT_PAYLOAD_V0.1.json`
- Create: `D:\23MySec\pages\applications\masterbatch\06_handoff\APP-MB_GATE7_ACCEPTANCE_CHECKLIST_V0.1.md`
- Create: `D:\23MySec\pages\applications\masterbatch\APP-MB_CURRENT_GATE7_BASELINE_MANIFEST_V0.3.md`

**Interfaces:**
- Consumes: Gate 6-passed current baseline.
- Produces: developer-executable fields, module behavior, conditional rendering, route dependency, asset, metadata and acceptance contract for D16.

- [ ] **Step 1: Define the implementation-neutral contract**

Specify identities, fields, semantic hierarchy, rich-text allowlist, citations, grade relationships, CTA prefill, internal-link eligibility, responsive transformations, SEO metadata, Schema-visible parity, empty/route-failure behavior and `site_scope=tio2-my` isolation.

- [ ] **Step 2: Produce the exact content payload**

Serialize only approved Buyer Clean content and approved relationships. Exclude review notes, evidence-gap metadata, local paths and unapproved URLs from the public payload.

- [ ] **Step 3: Validate handoff parity**

Compare payload labels and text to Gate 2, module order to Gate 3, visual states to Gate 5 and dependencies to the current route registry. Hash every handoff artifact.

- [ ] **Step 4: Present Gate 7 for approval**

Show the user the actual fields/modules, affected routes, unresolved release dependencies and Controller recommendation. Do not create or message an external development task until Gate 7 is explicitly authorized.

### Task 10: Gate 8 External Development Coordination

**Files:**
- D23 create: `D:\23MySec\pages\applications\masterbatch\07_qa\APP-MB_GATE8_EXTERNAL_DEVELOPMENT_TRACKING_V0.1.md`
- D16 changes: determined and executed only by the separately governed development task in `D:\16Wordpress_nextjs`

**Interfaces:**
- Consumes: user-approved Gate 7 package.
- Produces: an externally implemented preview/runtime, developer test evidence and an exact reviewed commit or immutable implementation reference.

- [ ] **Step 1: Start or continue the authorized D16 development task**

Send the complete Gate 7 paths, hashes, scope boundary, implementation acceptance checklist and prohibition on cross-scope fallback.

- [ ] **Step 2: Track implementation without editing code**

Record the development task ID, implementation reference, test commands/results, preview URL/path and any developer questions or deviations.

- [ ] **Step 3: Confirm Gate 9 entry evidence**

Require accessible Desktop/Tablet/Mobile results, exact content payload readback, metadata/Schema output, route behavior, form/prefill evidence and the D16 test summary before starting Gate 9.

### Task 11: Gate 9 Read-Only Quality Acceptance

**Files:**
- Create: `D:\23MySec\pages\applications\masterbatch\07_qa\APP-MB_GATE9_READ_ONLY_QA_V0.1.md`
- Create: `D:\23MySec\pages\applications\masterbatch\07_qa\APP-MB_GATE9_ISSUE_REGISTER_V0.1.csv`
- Create: `D:\23MySec\pages\applications\masterbatch\APP-MB_CURRENT_GATE9_BASELINE_MANIFEST_V0.4.md`

**Interfaces:**
- Consumes: Gate 7 approved contract and Gate 8 immutable implementation evidence.
- Produces: read-only parity findings, developer correction requests and final Gate 9 disposition.

- [ ] **Step 1: Capture read-only runtime evidence**

Inspect 1440, 768, 390, Mobile Menu, long tables/cards, citations, source backlinks, CTA prefill, route-omitted conditions and failure states without modifying D16 or production data.

- [ ] **Step 2: Validate content and machine-readable parity**

Compare visible copy, headings, links, grade set, metadata, Canonical, robots, Schema, Breadcrumbs and source notes to the Gate 7 payload and acceptance checklist.

- [ ] **Step 3: Classify and return issues**

Record exact evidence and severity for each discrepancy. Send correction requests to D16; do not repair code from D23.

- [ ] **Step 4: Re-verify corrected implementation**

Repeat only the affected QA surfaces plus regression-critical page identity, cross-scope isolation and route checks.

- [ ] **Step 5: Record Gate 9 disposition**

Mark `READ_ONLY_QA_APPROVED` only after all required checks pass. Keep Gate 10, deployment, publication, DNS and indexing explicitly unapproved.

## Plan self-review

- Spec coverage: all design-spec modules, evidence controls, Grade authority, Gate boundaries, semantic HTML contract, three responsive widths, D16 isolation and Gate 9 read-only QA are assigned to explicit tasks.
- Placeholder scan: clear; every task names its concrete artifact, action, input and output.
- Interface consistency: Gate outputs are consumed by the next Gate; `APP-MB`, `tio2-my`, the provisional URL and the seven-member neutral Grade set remain consistent throughout.
- Repository adaptation: `D:\23MySec` is not a Git repository, so immutable file paths, versions and SHA-256 manifests replace commit steps for D23 artifacts. D16 independently records its own implementation reference under its repository governance.
