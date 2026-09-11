# Root Page Hero Contract Activation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Activate the user-approved shared Hero contract so every relevant project entry, Gate 4 producer and Gate 5 reviewer consumes the same authority.

**Architecture:** Keep the shared visual contract in one architecture document and add references from the project entry files and visual-stage roles. Do not copy its metrics into seven page manifests before page-specific candidates exist; track the cross-page change once in project status, then let later Gate 4 worksets bind each page candidate.

**Tech Stack:** Markdown governance files, PowerShell read-only validation, Git path-scoped commit.

**Spec:** `docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md`

## Global Constraints

- Scope is `HOME-001`, `MARKET-000`, `PRODUCT-000`, `APP-000`, `DOC-000`, `RES-000`, and `ABOUT-001` only.
- Do not reopen Gate 1, Gate 2, approved page facts, SEO/GEO, Schema, Global Chrome, or legal shared content.
- Do not modify any current page Manifest until a page-specific targeted Hero candidate exists.
- Do not access or modify `D:\16Wordpress_nextjs`.
- Preserve all unrelated user changes in the dirty worktree.

---

### Task 1: Promote the shared Hero contract

**Files:**
- Modify: `docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md`

**Interfaces:**
- Consumes: User approval in the current task on 2026-09-11.
- Produces: `ROOT-PAGE-HERO-001 = USER_APPROVED / ACTIVE` as the single cross-page authority.

- [x] **Step 1: Replace the draft status with the approved status**

Set the document status to `USER_APPROVED_SHARED_VISUAL_CONTRACT / ACTIVE`, add approval date `2026-09-11`, and replace the draft stop point with an activation boundary that still requires later Gate 4 and Gate 8 authorization.

- [x] **Step 2: Verify no draft status remains**

Run:

```powershell
rg -n "DRAFT_CONTRACT_FOR_USER_REVIEW|等待用户最终确认" docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md
```

Expected: no matches.

### Task 2: Add authoritative project entry points

**Files:**
- Modify: `AGENTS.md`
- Modify: `01_PROJECT_INDEX.md`
- Modify: `00_PROJECT_STATUS.md`

**Interfaces:**
- Consumes: Active `ROOT-PAGE-HERO-001` contract.
- Produces: Root task routing, visual index navigation, and one cross-page progress record.

- [x] **Step 1: Add the root execution rule**

Extend the shared-component rule in `AGENTS.md` so the seven named root pages must consume `RootPageHero`, may use only the approved variants, and may not create page-private Hero structure or decoration.

- [x] **Step 2: Add the visual index pointer**

Add one row under `## 4. 视觉与共享组件` in `01_PROJECT_INDEX.md` linking the active Hero contract.

- [x] **Step 3: Add one cross-page status entry**

Add a dated top entry in `00_PROJECT_STATUS.md` recording contract approval, affected pages, the targeted Gate 4→5→6→8→9 path, and that no page Manifest or D16 code has changed.

- [x] **Step 4: Confirm no page status was overwritten**

Run:

```powershell
git diff -- 00_PROJECT_STATUS.md 01_PROJECT_INDEX.md AGENTS.md
```

Expected: only additive Hero-routing changes plus unrelated pre-existing user changes.

### Task 3: Bind the visual producer and independent reviewer

**Files:**
- Modify: `agents/gate4-complete-visual/agent.md`
- Modify: `agents/gate5-independent-visual-review/agent.md`

**Interfaces:**
- Consumes: Root/index routing to the shared Hero contract.
- Produces: Explicit Gate 4 production and Gate 5 independent-review consumption requirements.

- [x] **Step 1: Update Gate 4 inputs**

Require the active shared Hero contract when the assigned Page ID is one of the seven root pages. State that Gate 4 may create page-specific content/media bindings but not a competing Hero skeleton.

- [x] **Step 2: Update Gate 5 input review**

Require the reviewer to check the shared Hero contract, shared-component ownership, absence of a left accent rule, and cross-page geometry without reopening unrelated page content.

- [x] **Step 3: Verify both roles reference the exact authority**

Run:

```powershell
rg -n "ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0|RootPageHero" agents/gate4-complete-visual/agent.md agents/gate5-independent-visual-review/agent.md
```

Expected: both role files contain an explicit reference.

### Task 4: Validate and commit the activation

**Files:**
- Test: all files modified in Tasks 1–3

**Interfaces:**
- Consumes: Completed activation edits.
- Produces: A path-scoped, auditable governance commit.

- [x] **Step 1: Run hygiene and authority checks**

Run:

```powershell
rg -n "ROOT-PAGE-HERO-001|ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0|RootPageHero" AGENTS.md 01_PROJECT_INDEX.md 00_PROJECT_STATUS.md docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md agents/gate4-complete-visual/agent.md agents/gate5-independent-visual-review/agent.md
git diff --check -- AGENTS.md 01_PROJECT_INDEX.md 00_PROJECT_STATUS.md docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md agents/gate4-complete-visual/agent.md agents/gate5-independent-visual-review/agent.md
```

Expected: the authority is discoverable in every required consumer and `git diff --check` returns no output.

- [x] **Step 2: Confirm prohibited scope remains untouched**

Run:

```powershell
git status --short
```

Expected: no changes under `D:\16Wordpress_nextjs`; no seven page Manifest changes from this activation.

- [x] **Step 3: Commit only this activation's paths**

Run:

```powershell
git add -- AGENTS.md 01_PROJECT_INDEX.md 00_PROJECT_STATUS.md docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md agents/gate4-complete-visual/agent.md agents/gate5-independent-visual-review/agent.md docs/superpowers/plans/2026-09-11-root-page-hero-contract-activation.md
git commit -m "docs: activate shared root page hero contract"
```

Expected: one commit containing only the shared Hero activation and its plan; unrelated dirty files remain unstaged.
