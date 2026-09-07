# TiO2 Malaysia First-Level Page Sequencing and Ownership Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the approved first-level-first production sequence and parent-task ownership rule an unambiguous, project-wide governance baseline.

**Architecture:** Keep the 54-page registry and keyword master unchanged. Add one stable rule to the root charter, reflect its current execution state in the project status, expose the approved spec through the index and directory guide, and add a non-record-changing ownership note to the page registry. Existing Products and Markets tasks receive the same rule after the files agree.

**Tech Stack:** Markdown governance documents, CSV source-of-truth validation, PowerShell read-only verification.

**Spec:** `docs/superpowers/specs/2026-08-29-first-level-page-sequencing-and-ownership-design.md`

## Global Constraints

- `D:\23MySec` remains limited to visual planning, SEO, GEO, content architecture, delivery specifications and read-only QA.
- Do not modify `D:\16Wordpress_nextjs` or perform WordPress, Next.js, CMS, code, test, deployment or publishing work.
- Preserve all 54 page records, Page IDs, URLs, primary keywords, page responsibilities, mapping statuses and verification statuses.
- First-level pages are exactly `HOME-001`, `MARKET-000`, `PRODUCT-000`, `APP-000`, `DOC-000`, `RES-000`, `ABOUT-001`, and `CONV-RFQ`.
- A first-level page is complete for this sequence only at `APPROVED_FOR_HANDOFF`.
- No new second-level page work begins until all eight first-level pages reach `APPROVED_FOR_HANDOFF`.
- Each second-level page remains owned by the original task for its parent first-level page; do not create one task per child page.
- Existing Product page template and other approved historical artifacts remain valid; sequencing does not erase them.
- The next new first-level page after current Products and Markets work is `APP-000` Applications Hub, not `MARKET-EU-001` European Union.

---

### Task 1: Finalize the approved design specification

**Files:**
- Modify: `docs/superpowers/specs/2026-08-29-first-level-page-sequencing-and-ownership-design.md`

**Interfaces:**
- Consumes: User approval dated 2026-08-29 and the 54-row `research/keyword/11_page_keyword_master.csv`.
- Produces: One approved written specification used by all later governance edits.

- [ ] **Step 1: Update the approval record**

Change the final approval row from “书面规格待复核” to “书面规格已批准；允许同步项目治理文件”, preserving the approval date `2026-08-29`.

- [ ] **Step 2: Verify exact ownership coverage**

Run:

```powershell
$spec = Get-Content -Raw -LiteralPath 'D:\23MySec\docs\superpowers\specs\2026-08-29-first-level-page-sequencing-and-ownership-design.md'
$block = ($spec -split '### 4.1 54 页归属覆盖核对')[1] -split '## 5. 执行顺序' | Select-Object -First 1
$ids = [regex]::Matches($block, '`([A-Z][A-Z0-9-]+)`') | ForEach-Object { $_.Groups[1].Value }
$master = (Import-Csv -LiteralPath 'D:\23MySec\research\keyword\11_page_keyword_master.csv').page_id
"block=$($ids.Count) unique=$(($ids | Sort-Object -Unique).Count) master=$($master.Count)"
Compare-Object $master $ids
```

Expected: `block=54 unique=54 master=54` and no `Compare-Object` rows.

### Task 2: Add the hard sequencing and ownership rule to the root charter

**Files:**
- Modify: `AGENTS.md`

**Interfaces:**
- Consumes: The approved design specification.
- Produces: The stable instruction every current and future page task must obey.

- [ ] **Step 1: Add a dedicated first-level sequencing section**

Insert a section after the page-governance explanation that states:

- the eight first-level Page IDs and Header labels;
- Stage A completes all eight to `APPROVED_FOR_HANDOFF`;
- Stage B starts child pages only after Stage A;
- P0 cannot override this cross-level order;
- child pages stay in the original parent task;
- each child still requires its own Brief and Gate reviews;
- current Products and Markets tasks may finish only their hubs during Stage A;
- the next new page task is `APP-000`.

- [ ] **Step 2: Add the parent-task ownership table**

Record the exact ownership groups for Markets, Products, Applications, Documents, Resources, About and Conversion, including `RES-R706` and all four Trade Update pages.

- [ ] **Step 3: Preserve existing scope and completion rules**

Confirm the new section references the existing lifecycle value `APPROVED_FOR_HANDOFF` and does not redefine development, publishing or page-mapping status.

- [ ] **Step 4: Verify the charter contains every hard-rule phrase**

Run:

```powershell
Select-String -LiteralPath 'D:\23MySec\AGENTS.md' -Pattern '八个一级页面|APPROVED_FOR_HANDOFF|二级页面|原任务|APP-000|RES-R706|不得.*P0|D:\\16Wordpress_nextjs'
```

Expected: at least one current, unambiguous match for every concept; no statement authorizes code work.

### Task 3: Replace the obsolete build sequence in the live project status

**Files:**
- Modify: `00_PROJECT_STATUS.md`

**Interfaces:**
- Consumes: Root charter sequencing rule and current Home/Products/Markets execution state.
- Produces: A current operational snapshot naming Stage A and the next new first-level page.

- [ ] **Step 1: Replace section 5 build order**

Record Stage A as Home, Products Hub, Markets Hub, Applications Hub, Documents Hub, Resources Hub, About, and Request a Quote, with Home retained at its already-approved project state and Products/Markets continuing in their current tasks.

- [ ] **Step 2: Record the Stage B hold**

State that no Market, Process, Grade, Application, Document, Resource, Contact, Sample or Request Documents child page starts until all eight first-level pages are `APPROVED_FOR_HANDOFF`.

- [ ] **Step 3: Record task ownership and next action**

State that parent tasks resume their own children in Stage B and that the next new first-level task is `APP-000`, not `MARKET-EU-001`.

- [ ] **Step 4: Verify obsolete instructions are gone**

Run:

```powershell
Select-String -LiteralPath 'D:\23MySec\00_PROJECT_STATUS.md' -Pattern 'Products Hub 建立正式页面任务卡.*下一张视觉稿|Markets Hub 后.*European Union|下一张.*European Union'
```

Expected: no matches.

### Task 4: Expose the approved rule through the project index and directory guide

**Files:**
- Modify: `01_PROJECT_INDEX.md`
- Modify: `02_DIRECTORY_GUIDE.md`

**Interfaces:**
- Consumes: Approved spec and root charter rule.
- Produces: Discoverable entry points and an unambiguous directory-to-task relationship.

- [ ] **Step 1: Add the approved specification to the index**

Add `docs/superpowers/specs/2026-08-29-first-level-page-sequencing-and-ownership-design.md` to the first-use governance entries with status “APPROVED 2026-08-29”.

- [ ] **Step 2: Update the page-governance workflow sentence**

Change the workflow summary so it first completes eight first-level pages, then resumes parent tasks for child pages, while retaining independent Brief and Gate requirements.

- [ ] **Step 3: Clarify directory versus task ownership**

In `02_DIRECTORY_GUIDE.md`, state that a page directory groups artifacts by page system and does not imply a separate Codex task for each child page.

- [ ] **Step 4: Add the stage rule to the new-task checklist**

Add checks confirming whether Stage A is complete and whether the requested child belongs to the current parent task.

- [ ] **Step 5: Verify all links and terms**

Run:

```powershell
Select-String -LiteralPath 'D:\23MySec\01_PROJECT_INDEX.md','D:\23MySec\02_DIRECTORY_GUIDE.md' -Pattern 'first-level-page-sequencing|一级页面|二级页面|原任务|APP-000'
```

Expected: both files expose the approved rule and the next page.

### Task 5: Add non-mutating task ownership guidance to the page registry

**Files:**
- Modify: `docs/architecture/PAGE_REGISTRY_V0.1.md`

**Interfaces:**
- Consumes: The exact 54-ID ownership table in the approved spec.
- Produces: Registry usage guidance without altering registry records.

- [ ] **Step 1: Add a sequencing and task-ownership subsection**

State that the registry's section groups define parent-task ownership, Stage A contains the eight Hub/Header pages, and Stage B returns child work to the same parent task.

- [ ] **Step 2: State the non-mutation boundary**

Explicitly record that task ownership and production order do not change page count, Page ID, URL, keyword, mapping or verification status.

- [ ] **Step 3: Verify the registry still contains exactly 54 page records**

Run:

```powershell
$master = Import-Csv -LiteralPath 'D:\23MySec\research\keyword\11_page_keyword_master.csv'
"master_rows=$($master.Count) unique_ids=$(($master.page_id | Sort-Object -Unique).Count) unique_urls=$(($master.url | Sort-Object -Unique).Count)"
```

Expected: `master_rows=54 unique_ids=54 unique_urls=54`.

### Task 6: Notify active parent-page tasks and verify project-wide consistency

**Files:**
- Read: `AGENTS.md`
- Read: `00_PROJECT_STATUS.md`
- Read: `01_PROJECT_INDEX.md`
- Read: `02_DIRECTORY_GUIDE.md`
- Read: `docs/architecture/PAGE_REGISTRY_V0.1.md`
- Read: `docs/superpowers/specs/2026-08-29-first-level-page-sequencing-and-ownership-design.md`

**Interfaces:**
- Consumes: All synchronized governance files.
- Produces: Products and Markets task acknowledgements plus a verified project baseline.

- [ ] **Step 1: Send the final rule to the Products task**

Notify task `01a04d09-1b3d-7842-a886-44ccc43e7540` that it may complete `PRODUCT-000` but must hold `PRODUCT-PROC-CL`, `PRODUCT-PROC-SU` and all 14 Grade pages until Stage A finishes; those pages remain owned by the same task.

- [ ] **Step 2: Send the final rule to the Markets task**

Notify task `01a04d2d-92c3-75b1-8f81-a8d1056a0677` that it may complete `MARKET-000` but must hold `MARKET-EU-001` and all other Market children until Stage A finishes; those pages remain owned by the same task.

- [ ] **Step 3: Run governance consistency checks**

Run:

```powershell
$files = @(
  'D:\23MySec\AGENTS.md',
  'D:\23MySec\00_PROJECT_STATUS.md',
  'D:\23MySec\01_PROJECT_INDEX.md',
  'D:\23MySec\02_DIRECTORY_GUIDE.md',
  'D:\23MySec\docs\architecture\PAGE_REGISTRY_V0.1.md',
  'D:\23MySec\docs\superpowers\specs\2026-08-29-first-level-page-sequencing-and-ownership-design.md'
)
$draftMarkers = @('TO' + 'DO', 'T' + 'BD', 'PLACE' + 'HOLDER', 'Lo' + 'rem', '<<<<<<<', '=======', '>>>>>>>')
Select-String -LiteralPath $files -Pattern $draftMarkers -CaseSensitive:$false
Select-String -LiteralPath $files -Pattern '\s+$'
```

Expected: neither command returns a match.

- [ ] **Step 4: Confirm no development workspace file changed**

No write command may target `D:\16Wordpress_nextjs`. Report that the implementation changed governance Markdown files only.

- [ ] **Step 5: Record the next project action**

Report: current Products and Markets hubs continue to their own approval gates; after both are handled, the next new first-level page task is `APP-000` Applications Hub.
