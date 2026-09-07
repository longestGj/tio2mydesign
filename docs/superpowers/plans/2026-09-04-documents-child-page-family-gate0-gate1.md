# Documents Child Page Family Gate 0–1 Execution Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` to execute this plan task-by-task. Do not dispatch subagents unless the user separately authorizes delegation.

**Goal:** Establish review-ready Gate 0–1 packages for `DOC-TDS`, `DOC-REACH` and `DOC-COO` without approving content, URLs, claims, development or publication.

**Architecture:** Use one shared source inventory and three independent page contracts. Internal evidence and current official sources feed page-specific Claim Registers; unsupported claims fail closed. The three pages are submitted together for Page Intent review, after which Gate 2 proceeds serially in the approved order.

**Tech Stack:** Markdown and CSV governance artifacts, PowerShell verification, SHA-256 source integrity, approved TiO2 Malaysia page standards, official-source web research.

**Spec:** `docs/superpowers/specs/2026-09-04-documents-child-page-family-design.md`

## Global Constraints

- Work only in `D:\23MySec`; do not modify `D:\16Wordpress_nextjs`.
- Preserve `PROVISIONAL_URL` and `FACT_EVIDENCE_REQUIRED` for all three pages.
- Every page gets an independent Brief, Page Intent Card, Claim Register, Gate 1 audit and Current Manifest.
- Online evidence must be captured locally before it supports an analysis or claim.
- Competitor sources may inform interface/question patterns only and cannot prove TiO2 Malaysia capability.
- Unverified REACH registration, SDS/COA availability, Malaysia COO, shipment, customs and traceability claims remain `DO_NOT_RENDER`.
- Submission is not approval; Gate 2 remains locked pending explicit user approval of Gate 1.
- Do not create code, CMS fields, routes, tests, deployments, DNS changes or publication artifacts.

---

### Task 1: Confirm Gate 0 identity and create page workspaces

**Files:**
- Create: `pages/documents/tds-sds-coa/01_research/`
- Create: `pages/documents/tds-sds-coa/04_planning/`
- Create: `pages/documents/tds-sds-coa/05_review/`
- Create: `pages/documents/reach/01_research/`
- Create: `pages/documents/reach/04_planning/`
- Create: `pages/documents/reach/05_review/`
- Create: `pages/documents/certificate-of-origin/01_research/`
- Create: `pages/documents/certificate-of-origin/04_planning/`
- Create: `pages/documents/certificate-of-origin/05_review/`

**Interfaces:**
- Consumes: Page Registry V0.2, keyword master, PRD V0.4, Documents Playbook and approved design specification.
- Produces: isolated artifact locations for each Page ID.

- [x] **Step 1: Re-read the three authoritative keyword rows**

  Export the three rows to the working log and verify Page ID, URL, primary keyword, mapping and verification status exactly match the specification.

- [x] **Step 2: Create the nine required directories**

  Use native PowerShell directory creation with explicit paths under `pages/documents/`.

- [x] **Step 3: Verify isolation**

  Confirm no file was written under `D:\16Wordpress_nextjs` and no existing DOC-000 or CONV-DOC artifact was modified.

---

### Task 2: Create independent Gate 0 Briefs and Page Intent Cards

**Files:**
- Create: `docs/page-briefs/DOC-TDS_TDS_SDS_COA_BRIEF_V0.1.md`
- Create: `docs/page-briefs/DOC-REACH_TITANIUM_DIOXIDE_REACH_BRIEF_V0.1.md`
- Create: `docs/page-briefs/DOC-COO_CERTIFICATE_OF_ORIGIN_BRIEF_V0.1.md`

**Interfaces:**
- Consumes: Task 1 page identities and the shared Page Intent design in the approved specification.
- Produces: three `BRIEF_IN_REVIEW` contracts used by all later Gate 1 artifacts.

- [x] **Step 1: Draft DOC-TDS Brief**

  Include the exact keyword contract; TDS/SDS/COA distinctions; grade/revision, market/language and lot/order controls; Hub/Products/CONV-DOC boundaries; CTA eligibility; SEO/GEO/Schema directions; fact freezes; responsive requirements; review ledger.

- [x] **Step 2: Draft DOC-REACH Brief**

  Include legal-actor, substance/product, market and evidence-date scope; current official-source requirement; EU Market and CONV-DOC relationships; unqualified `REACH compliant` prohibition; time-sensitive fact handling.

- [x] **Step 3: Draft DOC-COO Brief**

  Include product, order/shipment, destination, certificate type and issuing/evidence context; About/Market/Resource/CONV-DOC boundaries; anti-circumvention language; customs-outcome and Malaysia-origin fact freezes.

- [x] **Step 4: Validate Brief completeness**

  Check each Brief contains all 16 mandatory page-contract groups from the root charter and a complete Page Intent Card. Verify buyer-visible copy contains no internal status language.

---

### Task 3: Build and verify the shared internal source inventory

**Files:**
- Create: `pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_INVENTORY_V0.1.csv`
- Create: `pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_AUDIT_V0.1.md`

**Interfaces:**
- Consumes: approved internal page, product, company, document and conversion records.
- Produces: source IDs used by the three Claim Registers.

- [x] **Step 1: Inventory governance and page-owner sources**

  Record Registry V0.2, keyword master, PRD V0.4, Gate 1–5 Standard, Documents Playbook, DOC-000 Gate 9 authority, CONV-DOC Gate 9 authority, Global Chrome and visual standard.

- [x] **Step 2: Inventory product-document sources**

  Record all current approved TDS files and the existing grade-level validity/evidence decisions. Separate source presence, validity, public eligibility and request-route eligibility.

- [x] **Step 3: Inventory company/regulatory/origin evidence**

  Record current approved company claims and identify missing first-party SDS, COA, REACH, COO and traceability sources without inferring non-existence.

- [x] **Step 4: Hash and validate local sources**

  Compute SHA-256 for each eligible local source, record last-modified date and confirm every cited local file exists.

---

### Task 4: Capture current official REACH sources

**Files:**
- Create: `pages/documents/reach/01_research/raw/official/2026-09-04/`
- Create: `pages/documents/reach/01_research/raw/00_source_manifest.csv`

**Interfaces:**
- Consumes: current official ECHA and European Commission pages or publications.
- Produces: immutable local raw captures and source IDs for DOC-REACH analysis.

- [x] **Step 1: Identify primary official sources**

  Use ECHA and European Commission sources for REACH roles, registration scope and current titanium-dioxide substance context. Do not use search snippets as evidence.

- [x] **Step 2: Save complete source representations**

  Save the complete official webpage text/export or publication, source URL, publication/update date shown, capture timestamp, scope and limitations.

- [x] **Step 3: Register and hash captures**

  Add one manifest row per source and verify each stored file's SHA-256.

- [x] **Step 4: Separate stable and time-sensitive facts**

  Mark definitions/role descriptions separately from current registration or regulatory status. Keep company- and grade-specific coverage frozen unless first-party evidence exists.

---

### Task 5: Capture current official COO and origin-document sources

**Files:**
- Create: `pages/documents/certificate-of-origin/01_research/raw/official/2026-09-04/`
- Create: `pages/documents/certificate-of-origin/01_research/raw/00_source_manifest.csv`

**Interfaces:**
- Consumes: current official Malaysian origin-document sources and transaction-relevant official guidance.
- Produces: immutable local raw captures and source IDs for DOC-COO analysis.

- [x] **Step 1: Identify primary official sources**

  Use current Malaysian government, customs or authorized certificate-of-origin guidance that defines certificate purpose, issuance/evidence context and transaction scope.

- [x] **Step 2: Save complete source representations**

  Preserve original wording/language, URL, publication/update date shown, capture timestamp, scope and limitations.

- [x] **Step 3: Register and hash captures**

  Add one manifest row per source and verify each stored file's SHA-256.

- [x] **Step 4: Separate general guidance from company facts**

  General official definitions may support process explanations; they do not prove product origin, certificate issuance, customs acceptance or TiO2 Malaysia capability.

---

### Task 6: Create three Claim Registers

**Files:**
- Create: `pages/documents/tds-sds-coa/01_research/DOC-TDS_GATE1_CLAIM_REGISTER_V0.1.csv`
- Create: `pages/documents/reach/01_research/DOC-REACH_GATE1_CLAIM_REGISTER_V0.1.csv`
- Create: `pages/documents/certificate-of-origin/01_research/DOC-COO_GATE1_CLAIM_REGISTER_V0.1.csv`

**Interfaces:**
- Consumes: Tasks 3–5 source IDs and the approved evidence classes.
- Produces: row-level rendering authority for the Gate 1 audits.

- [x] **Step 1: Define the common CSV schema**

  Use `claim_id`, `page_id`, `claim_text_candidate`, `claim_type`, `source_ids`, `source_date`, `capture_date`, `scope`, `verification_status`, `render_decision`, `review_owner`, `notes`.

- [x] **Step 2: Populate DOC-TDS claims**

  Cover stable TDS/SDS/COA purposes, context distinctions, 14-grade system references, public inventory, availability and request-boundary claims.

- [x] **Step 3: Populate DOC-REACH claims**

  Cover REACH definitions, legal roles, evidence dates, substance/product scope, company registration/coverage and qualified-request claims.

- [x] **Step 4: Populate DOC-COO claims**

  Cover COO purpose, transaction scope, origin substantiation, traceability, company/product/shipment origin and customs-outcome claims.

- [x] **Step 5: Validate fail-closed behavior**

  Verify every unsupported, conflicted, stale or company-specific claim is `DO_NOT_RENDER` or, where explicitly allowed, `CONTROLLED_REQUEST_ONLY`.

---

### Task 7: Create Gate 1 evidence audits and current Manifests

**Files:**
- Create: `pages/documents/tds-sds-coa/01_research/DOC-TDS_GATE1_RESEARCH_EVIDENCE_AUDIT_V0.1.md`
- Create: `pages/documents/tds-sds-coa/05_review/DOC-TDS_CURRENT_GATE1_BASELINE_MANIFEST_V0.1.md`
- Create: `pages/documents/reach/01_research/DOC-REACH_GATE1_RESEARCH_EVIDENCE_AUDIT_V0.1.md`
- Create: `pages/documents/reach/05_review/DOC-REACH_CURRENT_GATE1_BASELINE_MANIFEST_V0.1.md`
- Create: `pages/documents/certificate-of-origin/01_research/DOC-COO_GATE1_RESEARCH_EVIDENCE_AUDIT_V0.1.md`
- Create: `pages/documents/certificate-of-origin/05_review/DOC-COO_CURRENT_GATE1_BASELINE_MANIFEST_V0.1.md`

**Interfaces:**
- Consumes: Briefs, source inventory, official captures and Claim Registers.
- Produces: three `DRAFT_FOR_PROJECT_CONTROL_REVIEW` Gate 1 packages.

- [x] **Step 1: Write DOC-TDS audit and Manifest**

  Summarize buyer questions, keyword intent, evidence-eligible definitions, local TDS evidence, missing SDS/COA/public-inventory evidence, route boundaries and proposed Page Intent disposition.

- [x] **Step 2: Write DOC-REACH audit and Manifest**

  Summarize official-source findings, legal-actor/scope distinctions, currentness controls, company/grade freezes, buyer questions and proposed Page Intent disposition.

- [x] **Step 3: Write DOC-COO audit and Manifest**

  Summarize official-source findings, transaction/origin/traceability distinctions, company/shipment freezes, buyer questions and proposed Page Intent disposition.

- [x] **Step 4: Lock next-state boundaries**

  Each Manifest states lifecycle `BRIEF_IN_REVIEW`, Gate 1 `PROJECT_CONTROL_REVIEW_PENDING`, `CONTENT_INTENT_CONFIRMED=NO`, Gate 2 `NOT_AUTHORIZED`, and development/release excluded.

---

### Task 8: Run Controller QA and prepare the user decision package

**Files:**
- Create: `pages/documents/05_review/DOCUMENT_CHILD_PAGES_GATE1_PROJECT_CONTROL_SUBMISSION_V0.1.md`
- Modify after verified review: `00_PROJECT_STATUS.md`
- Modify after verified review: `01_PROJECT_INDEX.md`

**Interfaces:**
- Consumes: all Task 1–7 outputs.
- Produces: one decision-ready comparison containing the exact three Page Intent Cards, claim/freeze summary, differences, risks, recommendation and next action.

- [x] **Step 1: Validate file and Page ID completeness**

  Confirm all three Briefs, Claim Registers, audits and Manifests exist, are non-empty and bind to the correct URL and keyword row.

- [x] **Step 2: Validate source traceability and hashes**

  Confirm every rendered or qualified claim resolves to registered local evidence and every official raw capture passes its recorded SHA-256.

- [x] **Step 3: Validate ownership and cannibalization**

  Confirm the pages do not take Product grade terms, Market supplier terms, About company-origin facts, Resource trade analysis or CONV-DOC form responsibilities.

- [x] **Step 4: Validate status language**

  Confirm no artifact claims Gate 1 approval, content confirmation, Gate 2 authority, development or publication.

- [x] **Step 5: Update project pointers**

  Record the three pages as `BRIEF_IN_REVIEW / GATE_1_PROJECT_CONTROL_REVIEW_PENDING`; do not mark Gate 1 closed.

- [x] **Step 6: Present the user decision package**

  Show the actual Page Intent Cards, evidence-supported content, frozen claims, page differences, recommendation and the consequence of approval. Ask for one explicit Gate 1 decision covering each Page ID.
