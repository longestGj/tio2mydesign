# TiO2 Malaysia Directory Reorganization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在不删除或覆盖任何文件的前提下，把 `D:\23MySec` 重构为品牌、正式文档、研究、页面、归档和工作区六个职责清晰的区域，并建立根目录说明文件。

**Architecture:** 保留根级治理入口，整体移动大型主题目录，再逐项归档被新版本替代的文件。版本化历史文档保持内容不变；当前无版本号的治理入口更新为新路径，旧路径由 `02_DIRECTORY_GUIDE.md` 统一解释。

**Tech Stack:** Windows PowerShell、Markdown、CSV、SHA-256 文件清单

**Spec:** `D:\23MySec\docs\superpowers\specs\2026-08-29-directory-reorganization-design.md`

## Global Constraints

- 工作范围只能位于 `D:\23MySec`。
- 不删除或覆盖任何文件。
- 所有移动都使用明确绝对路径和 `-LiteralPath`，不使用通配符确定目标。
- 目标存在时立即停止，不允许 `-Force` 覆盖。
- 只在确认 `D:\23MySec\.tmp` 完全为空后删除这个空目录。
- 根目录最终只保留 `AGENTS.md`、`00_PROJECT_STATUS.md`、`01_PROJECT_INDEX.md`、`02_DIRECTORY_GUIDE.md` 和六个批准的一级目录。
- PRD V0.4、首页当前版本、关键词研究成果、产品页 V1.0 资料、页面登记册 V0.1 和任务卡模板 V0.1 都必须保留。
- 版本化历史文件内容保持不变；只移动文件。
- 当前治理入口使用新路径；历史文件中的旧路径通过迁移表解释。
- `D:\23MySec` 不是 Git 仓库，不创建分支、工作树、提交或 PR。

---

### Task 1: 建立迁移基线与目标容器

**Files:**
- Create: `D:\23MySec\99_workspace\directory-migration\2026-08-29-pre-move-manifest.csv`
- Create directories: `D:\23MySec\brand`, `docs\strategy`, `research`, `pages`, `90_archive`, `99_workspace`

**Interfaces:**
- Consumes: 当前 `D:\23MySec` 全部文件。
- Produces: 迁移前 SHA-256 清单和所有经过边界验证的目标父目录。

- [x] **Step 1: 确认工作区不是 Git 仓库并读取设计规格**

  Run:

  ```powershell
  git -C 'D:\23MySec' rev-parse --show-toplevel 2>&1
  Get-Content -LiteralPath 'D:\23MySec\docs\superpowers\specs\2026-08-29-directory-reorganization-design.md' -Raw | Out-Null
  ```

  Expected: Git 返回“not a git repository”；设计规格可读取。非 Git 状态意味着本计划不执行任何分支或提交操作。

- [x] **Step 2: 验证所有目标都位于项目根目录内**

  Run:

  ```powershell
  $migrationProjectRoot = [System.IO.Path]::GetFullPath('D:\23MySec')
  $migrationTargets = @(
    'D:\23MySec\brand',
    'D:\23MySec\docs\strategy',
    'D:\23MySec\research',
    'D:\23MySec\pages',
    'D:\23MySec\90_archive',
    'D:\23MySec\99_workspace'
  )
  $outside = $migrationTargets | Where-Object {
    -not [System.IO.Path]::GetFullPath($_).StartsWith($migrationProjectRoot + '\', [System.StringComparison]::OrdinalIgnoreCase)
  }
  if ($outside) { throw "Target outside project root: $($outside -join ', ')" }
  'TARGET_BOUNDARY_CHECK=PASS'
  ```

  Expected: `TARGET_BOUNDARY_CHECK=PASS`。

- [x] **Step 3: 记录迁移前文件清单**

  Run:

  ```powershell
  $migrationProjectRoot = 'D:\23MySec'
  $migrationPreFiles = @(Get-ChildItem -LiteralPath $migrationProjectRoot -File -Recurse -Force -ErrorAction Stop)
  $migrationPreCount = $migrationPreFiles.Count
  $migrationPreBytes = ($migrationPreFiles | Measure-Object Length -Sum).Sum
  [pscustomobject]@{
    FileCount = $migrationPreCount
    TotalBytes = $migrationPreBytes
  } | Format-List
  ```

  Expected: 文件数大于 340，总大小大于 60 MB；命令无访问错误。

- [x] **Step 4: 创建目标父目录**

  Run:

  ```powershell
  $migrationDirectories = @(
    'D:\23MySec\brand',
    'D:\23MySec\docs\strategy',
    'D:\23MySec\research',
    'D:\23MySec\pages',
    'D:\23MySec\90_archive\prd',
    'D:\23MySec\90_archive\pages\home\planning',
    'D:\23MySec\99_workspace\directory-migration'
  )
  foreach ($migrationDirectory in $migrationDirectories) {
    if (-not (Test-Path -LiteralPath $migrationDirectory)) {
      New-Item -ItemType Directory -Path $migrationDirectory | Out-Null
    }
  }
  ```

  Expected: 所有目录存在；没有文件被移动。

- [x] **Step 5: 写入 SHA-256 迁移前清单**

  Run:

  ```powershell
  $migrationProjectRoot = 'D:\23MySec'
  $migrationManifestPath = 'D:\23MySec\99_workspace\directory-migration\2026-08-29-pre-move-manifest.csv'
  if (Test-Path -LiteralPath $migrationManifestPath) { throw "Manifest already exists: $migrationManifestPath" }
  Get-ChildItem -LiteralPath $migrationProjectRoot -File -Recurse -Force -ErrorAction Stop |
    Where-Object { $_.FullName -ne $migrationManifestPath } |
    ForEach-Object {
      [pscustomobject]@{
        RelativePath = $_.FullName.Substring($migrationProjectRoot.Length + 1)
        Length = $_.Length
        SHA256 = (Get-FileHash -LiteralPath $_.FullName -Algorithm SHA256).Hash
      }
    } | Export-Csv -LiteralPath $migrationManifestPath -NoTypeInformation -Encoding utf8
  $manifestRows = @(Import-Csv -LiteralPath $migrationManifestPath)
  if ($manifestRows.Count -lt 340) { throw "Unexpected manifest count: $($manifestRows.Count)" }
  "MANIFEST_ROWS=$($manifestRows.Count)"
  ```

  Expected: 清单行数等于创建清单前的文件数；清单自身不包含在清单中。

### Task 2: 移动品牌、研究和首页主题目录

**Files:**
- Move: `D:\23MySec\01Visio` → `D:\23MySec\brand\visual`
- Move: `D:\23MySec\keyword-research` → `D:\23MySec\research\keyword`
- Move: `D:\23MySec\homepage` → `D:\23MySec\pages\home`

**Interfaces:**
- Consumes: Task 1 创建的目标父目录和迁移前清单。
- Produces: 三个职责明确的主题目录；文件内容不变。

- [x] **Step 1: 预检三个源目录和目标目录**

  Run:

  ```powershell
  $migrationPairs = @(
    @{ Source = 'D:\23MySec\01Visio'; Destination = 'D:\23MySec\brand\visual' },
    @{ Source = 'D:\23MySec\keyword-research'; Destination = 'D:\23MySec\research\keyword' },
    @{ Source = 'D:\23MySec\homepage'; Destination = 'D:\23MySec\pages\home' }
  )
  foreach ($migrationPair in $migrationPairs) {
    if (-not (Test-Path -LiteralPath $migrationPair.Source -PathType Container)) { throw "Missing source: $($migrationPair.Source)" }
    if (Test-Path -LiteralPath $migrationPair.Destination) { throw "Destination exists: $($migrationPair.Destination)" }
    if (-not [System.IO.Path]::GetFullPath($migrationPair.Destination).StartsWith('D:\23MySec\', [System.StringComparison]::OrdinalIgnoreCase)) {
      throw "Destination outside workspace: $($migrationPair.Destination)"
    }
  }
  'THEME_MOVE_PREFLIGHT=PASS'
  ```

  Expected: `THEME_MOVE_PREFLIGHT=PASS`。

- [x] **Step 2: 移动视觉目录**

  Run:

  ```powershell
  Move-Item -LiteralPath 'D:\23MySec\01Visio' -Destination 'D:\23MySec\brand\visual'
  ```

  Expected: 原路径不存在，目标路径包含 5 个文件。

- [x] **Step 3: 移动关键词研究目录**

  Run:

  ```powershell
  Move-Item -LiteralPath 'D:\23MySec\keyword-research' -Destination 'D:\23MySec\research\keyword'
  ```

  Expected: 原路径不存在，目标路径包含 `AGENTS.md`、11 个正式成果以及 raw/processed 证据。

- [x] **Step 4: 移动首页目录**

  Run:

  ```powershell
  Move-Item -LiteralPath 'D:\23MySec\homepage' -Destination 'D:\23MySec\pages\home'
  ```

  Expected: 原路径不存在，目标路径包含 `01_original_homepages`、`02_analysis`、`03_results`、`04_planning`。

- [x] **Step 5: 核对主题目录文件数量**

  Run:

  ```powershell
  @(
    [pscustomobject]@{ Directory = 'brand\visual'; Files = @(Get-ChildItem -LiteralPath 'D:\23MySec\brand\visual' -File -Recurse -Force).Count },
    [pscustomobject]@{ Directory = 'research\keyword'; Files = @(Get-ChildItem -LiteralPath 'D:\23MySec\research\keyword' -File -Recurse -Force).Count },
    [pscustomobject]@{ Directory = 'pages\home'; Files = @(Get-ChildItem -LiteralPath 'D:\23MySec\pages\home' -File -Recurse -Force).Count }
  ) | Format-Table -AutoSize
  ```

  Expected: 分别为 5、200、110；根目录不再出现三个旧目录。

### Task 3: 移动战略输入并归档历史版本

**Files:**
- Move and rename: `D:\23MySec\01Mylasiya的对应---00网站定位-2026-08-29.md` → `D:\23MySec\docs\strategy\TiO2_Malaysia_Website_Positioning_2026-08-29.md`
- Move: root keyword brief → `D:\23MySec\research\keyword\00_brief\`
- Move: PRD V0.1–V0.3 → `D:\23MySec\90_archive\prd\`
- Move: six superseded homepage planning files → `D:\23MySec\90_archive\pages\home\planning\`

**Interfaces:**
- Consumes: Task 2 的新主题目录。
- Produces: 根目录无散落输入文件，正式目录只保留当前版本，历史版本可追溯。

- [x] **Step 1: 创建关键词 Brief 目标目录并预检所有目标不存在**

  Run:

  ```powershell
  $briefDirectory = 'D:\23MySec\research\keyword\00_brief'
  if (-not (Test-Path -LiteralPath $briefDirectory)) { New-Item -ItemType Directory -Path $briefDirectory | Out-Null }
  $migrationDestinations = @(
    'D:\23MySec\docs\strategy\TiO2_Malaysia_Website_Positioning_2026-08-29.md',
    'D:\23MySec\research\keyword\00_brief\TiO2_Malaysia_Keyword_Research_Agent_Brief_V1.0.md',
    'D:\23MySec\90_archive\prd\TiO2_Malaysia_Website_PRD_V0.1.md',
    'D:\23MySec\90_archive\prd\TiO2_Malaysia_Website_PRD_V0.2.md',
    'D:\23MySec\90_archive\prd\TiO2_Malaysia_Website_PRD_V0.3.md'
  )
  $existing = $migrationDestinations | Where-Object { Test-Path -LiteralPath $_ }
  if ($existing) { throw "Destination already exists: $($existing -join ', ')" }
  'DOCUMENT_MOVE_PREFLIGHT=PASS'
  ```

  Expected: `DOCUMENT_MOVE_PREFLIGHT=PASS`。

- [x] **Step 2: 移动战略定位与关键词 Brief**

  Run:

  ```powershell
  Move-Item -LiteralPath 'D:\23MySec\01Mylasiya的对应---00网站定位-2026-08-29.md' -Destination 'D:\23MySec\docs\strategy\TiO2_Malaysia_Website_Positioning_2026-08-29.md'
  Move-Item -LiteralPath 'D:\23MySec\TiO2_Malaysia_Keyword_Research_Agent_Brief_V1.0.md' -Destination 'D:\23MySec\research\keyword\00_brief\TiO2_Malaysia_Keyword_Research_Agent_Brief_V1.0.md'
  ```

  Expected: 两个根文件消失，两个目标文件存在且长度大于 0。

- [x] **Step 3: 归档 PRD V0.1–V0.3**

  Run:

  ```powershell
  Move-Item -LiteralPath 'D:\23MySec\docs\prd\TiO2_Malaysia_Website_PRD_V0.1.md' -Destination 'D:\23MySec\90_archive\prd\TiO2_Malaysia_Website_PRD_V0.1.md'
  Move-Item -LiteralPath 'D:\23MySec\docs\prd\TiO2_Malaysia_Website_PRD_V0.2.md' -Destination 'D:\23MySec\90_archive\prd\TiO2_Malaysia_Website_PRD_V0.2.md'
  Move-Item -LiteralPath 'D:\23MySec\docs\prd\TiO2_Malaysia_Website_PRD_V0.3.md' -Destination 'D:\23MySec\90_archive\prd\TiO2_Malaysia_Website_PRD_V0.3.md'
  ```

  Expected: `docs\prd` 只保留 V0.4；归档目录有 V0.1、V0.2、V0.3。

- [x] **Step 4: 预检并归档六个首页历史策划文件**

  Run:

  ```powershell
  $homeArchiveFiles = @(
    '01_homepage_content_architecture_v0.1.md',
    '03_homepage_visual_direction_v0.1.md',
    '04_homepage_full_visual_design_v0.1.md',
    '04_homepage_full_visual_design_v0.2.md',
    '05_homepage_full_visual_self_check_v0.1.md',
    '05_homepage_full_visual_self_check_v0.2.md'
  )
  foreach ($homeArchiveFile in $homeArchiveFiles) {
    $source = Join-Path 'D:\23MySec\pages\home\04_planning' $homeArchiveFile
    $destination = Join-Path 'D:\23MySec\90_archive\pages\home\planning' $homeArchiveFile
    if (-not (Test-Path -LiteralPath $source -PathType Leaf)) { throw "Missing source: $source" }
    if (Test-Path -LiteralPath $destination) { throw "Destination exists: $destination" }
  }
  foreach ($homeArchiveFile in $homeArchiveFiles) {
    Move-Item -LiteralPath (Join-Path 'D:\23MySec\pages\home\04_planning' $homeArchiveFile) -Destination (Join-Path 'D:\23MySec\90_archive\pages\home\planning' $homeArchiveFile)
  }
  ```

  Expected: 当前 `04_planning` 保留 5 个最新或唯一文件；归档目录包含 6 个被替代版本。

### Task 4: 整理临时工作区并建立未来页面容器

**Files:**
- Move: `.codex_tmp_keyword_research` → `99_workspace\keyword-research-workbench`
- Move: `.tmp\page-keyword-map-v04` → `99_workspace\page-keyword-map-v04`
- Create directories: seven future page families under `pages`
- Remove: only the verified empty directory `D:\23MySec\.tmp`

**Interfaces:**
- Consumes: 原临时目录。
- Produces: 集中的可清理工作区和不含虚假文件的页面容器。

- [x] **Step 1: 预检临时目录移动边界**

  Run:

  ```powershell
  $temporaryMoves = @(
    @{ Source = 'D:\23MySec\.codex_tmp_keyword_research'; Destination = 'D:\23MySec\99_workspace\keyword-research-workbench' },
    @{ Source = 'D:\23MySec\.tmp\page-keyword-map-v04'; Destination = 'D:\23MySec\99_workspace\page-keyword-map-v04' }
  )
  foreach ($temporaryMove in $temporaryMoves) {
    if (-not (Test-Path -LiteralPath $temporaryMove.Source -PathType Container)) { throw "Missing source: $($temporaryMove.Source)" }
    if (Test-Path -LiteralPath $temporaryMove.Destination) { throw "Destination exists: $($temporaryMove.Destination)" }
    if (-not [System.IO.Path]::GetFullPath($temporaryMove.Destination).StartsWith('D:\23MySec\99_workspace\', [System.StringComparison]::OrdinalIgnoreCase)) {
      throw "Invalid workspace destination: $($temporaryMove.Destination)"
    }
  }
  'TEMP_MOVE_PREFLIGHT=PASS'
  ```

  Expected: `TEMP_MOVE_PREFLIGHT=PASS`。

- [x] **Step 2: 移动两个临时工作目录**

  Run:

  ```powershell
  Move-Item -LiteralPath 'D:\23MySec\.codex_tmp_keyword_research' -Destination 'D:\23MySec\99_workspace\keyword-research-workbench'
  Move-Item -LiteralPath 'D:\23MySec\.tmp\page-keyword-map-v04' -Destination 'D:\23MySec\99_workspace\page-keyword-map-v04'
  ```

  Expected: 两个目标目录分别保留原 12 个和 4 个文件。

- [x] **Step 3: 只删除已验证为空的 `.tmp` 目录**

  Run:

  ```powershell
  $emptyTmpPath = [System.IO.Path]::GetFullPath('D:\23MySec\.tmp')
  if ($emptyTmpPath -cne 'D:\23MySec\.tmp') { throw "Unexpected tmp path: $emptyTmpPath" }
  $remainingTmpItems = @(Get-ChildItem -LiteralPath $emptyTmpPath -Force)
  if ($remainingTmpItems.Count -ne 0) { throw "Refusing to remove non-empty directory: $emptyTmpPath" }
  Remove-Item -LiteralPath $emptyTmpPath
  ```

  Expected: `.tmp` 不存在；没有文件被删除。

- [x] **Step 4: 创建未来页面容器**

  Run:

  ```powershell
  $pageContainers = @(
    'D:\23MySec\pages\products',
    'D:\23MySec\pages\markets',
    'D:\23MySec\pages\applications',
    'D:\23MySec\pages\documents',
    'D:\23MySec\pages\resources',
    'D:\23MySec\pages\about-contact',
    'D:\23MySec\pages\conversion'
  )
  foreach ($pageContainer in $pageContainers) {
    if (-not (Test-Path -LiteralPath $pageContainer)) { New-Item -ItemType Directory -Path $pageContainer | Out-Null }
  }
  ```

  Expected: 七个目录存在且为空；`pages\home` 保持现有首页资料。

### Task 5: 建立目录说明并更新当前治理入口

**Files:**
- Create: `D:\23MySec\02_DIRECTORY_GUIDE.md`
- Modify: `D:\23MySec\AGENTS.md`
- Modify: `D:\23MySec\00_PROJECT_STATUS.md`
- Modify: `D:\23MySec\01_PROJECT_INDEX.md`
- Modify: `D:\23MySec\research\keyword\AGENTS.md`
- Modify: `D:\23MySec\research\keyword\agent.md`

**Interfaces:**
- Consumes: Tasks 2–4 的最终路径和设计规格第 9–10 节。
- Produces: 可供用户和新任务读取的准确目录入口；历史版本内容不变。

- [x] **Step 1: 使用 `apply_patch` 创建根目录说明**

  `02_DIRECTORY_GUIDE.md` 必须按以下顺序写入完整章节：

  1. 文档用途和适用范围。
  2. 最终目录树。
  3. 根入口文件职责。
  4. `brand`、`docs`、`research`、`pages`、`90_archive`、`99_workspace` 的“放什么/不放什么”。
  5. 当前权威文件及绝对路径。
  6. 页面研究 → Brief → Playbook → 视觉 → 开发 → 审核 → 归档的数据流。
  7. 文件命名、版本号和生命周期规则。
  8. 旧路径到新路径的完整迁移表。
  9. 历史文件旧路径解析规则。
  10. 新任务创建目录前检查清单。

  Expected: 文件位于根目录，内容中明确写出 `D:\23MySec` 与 `D:\16Wordpress_nextjs` 的边界。

- [x] **Step 2: 使用 `apply_patch` 更新根 `AGENTS.md`**

  执行以下路径替换并保持其他治理内容不变：

  ```text
  keyword-research/11_page_keyword_master.csv
  → research/keyword/11_page_keyword_master.csv

  keyword-research/AGENTS.md
  → research/keyword/AGENTS.md

  01Visio/TiO2_Malaysia_Visual_Standard_V1.0.md
  → brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md

  homepage
  → pages/home（仅路径语境）
  ```

  同时增加 `02_DIRECTORY_GUIDE.md` 为目录规则入口，并将 `90_archive`、`99_workspace` 从未来计划改为已建立目录。

- [x] **Step 3: 使用 `apply_patch` 更新 `00_PROJECT_STATUS.md`**

  把关键词、视觉、首页和战略资料入口改为新路径；把目录状态改为“V0.1 已完成重构”；保留所有事实冻结、页面状态和发布审批边界。

- [x] **Step 4: 使用 `apply_patch` 更新 `01_PROJECT_INDEX.md`**

  更新以下入口：

  ```text
  旧战略定位根文件 → docs/strategy/TiO2_Malaysia_Website_Positioning_2026-08-29.md
  keyword-research → research/keyword
  homepage → pages/home
  01Visio → brand/visual
  PRD V0.1–V0.3 → 90_archive/prd
  ```

  增加 `02_DIRECTORY_GUIDE.md` 链接，并确保所有 Markdown 本地链接指向现有目标。

- [x] **Step 5: 使用 `apply_patch` 更新关键词研究专项入口**

  在 `research/keyword/AGENTS.md` 和 `research/keyword/agent.md` 中：

  - 把专项目录改为 `D:\23MySec\research\keyword`。
  - 把根 Brief 路径改为 `D:\23MySec\research\keyword\00_brief\TiO2_Malaysia_Keyword_Research_Agent_Brief_V1.0.md`。
  - 增加根 `D:\23MySec\AGENTS.md` 为上级规则。
  - 保持关键词证据、raw、processed 和 QA 的专项流程不变。

- [x] **Step 6: 确认版本化文件保持内容不变**

  不编辑以下文件：PRD V0.1–V0.4、首页版本化文档、产品页 V1.0 文档、`PAGE_REGISTRY_V0.1.md`、`PAGE_BRIEF_TEMPLATE.md`、关键词研究 CSV/raw、已执行计划和设计规格。旧路径由目录说明迁移表解释。

  Expected: 这些文件的 SHA-256 与迁移前清单一致。

### Task 6: 验证文件守恒、路径和项目数据

**Files:**
- Read: `D:\23MySec\99_workspace\directory-migration\2026-08-29-pre-move-manifest.csv`
- Read: all migrated files
- Modify: implementation plan checkboxes only after each verification passes

**Interfaces:**
- Consumes: 完成后的目录和迁移前哈希清单。
- Produces: 可证明没有文件丢失或错误覆盖的验证结果。

- [x] **Step 1: 逐文件验证目标存在与内容守恒**

  Run a PowerShell verification that maps every old relative path to its exact new relative path in this order:

  ```text
  docs\prd\PRD V0.1–V0.3 → 90_archive\prd\同名文件
  homepage\04_planning\六个旧版文件 → 90_archive\pages\home\planning\同名文件
  01Visio\* → brand\visual\*
  keyword-research\* → research\keyword\*
  homepage\* → pages\home\*
  .codex_tmp_keyword_research\* → 99_workspace\keyword-research-workbench\*
  .tmp\page-keyword-map-v04\* → 99_workspace\page-keyword-map-v04\*
  根定位文件 → docs\strategy\TiO2_Malaysia_Website_Positioning_2026-08-29.md
  根关键词 Brief → research\keyword\00_brief\同名文件
  其他路径 → 保持原相对路径
  ```

  对以下有意更新的文件只验证存在，不比较旧哈希：

  ```text
  AGENTS.md
  00_PROJECT_STATUS.md
  01_PROJECT_INDEX.md
  keyword-research\AGENTS.md → research\keyword\AGENTS.md
  keyword-research\agent.md → research\keyword\agent.md
  docs\superpowers\plans\2026-08-29-directory-reorganization.md
  ```

  其余清单文件必须在新位置存在、长度一致、SHA-256 一致。Expected: `Missing=0`、`LengthMismatch=0`、`HashMismatch=0`。

- [x] **Step 2: 验证根目录结构**

  Run:

  ```powershell
  $allowedRootFiles = @('AGENTS.md','00_PROJECT_STATUS.md','01_PROJECT_INDEX.md','02_DIRECTORY_GUIDE.md')
  $allowedRootDirectories = @('brand','docs','research','pages','90_archive','99_workspace')
  $rootFiles = @(Get-ChildItem -LiteralPath 'D:\23MySec' -File -Force | Select-Object -ExpandProperty Name)
  $rootDirectories = @(Get-ChildItem -LiteralPath 'D:\23MySec' -Directory -Force | Select-Object -ExpandProperty Name)
  $unexpectedFiles = @(Compare-Object $allowedRootFiles $rootFiles | Where-Object SideIndicator -eq '=>')
  $missingFiles = @(Compare-Object $allowedRootFiles $rootFiles | Where-Object SideIndicator -eq '<=')
  $unexpectedDirectories = @(Compare-Object $allowedRootDirectories $rootDirectories | Where-Object SideIndicator -eq '=>')
  $missingDirectories = @(Compare-Object $allowedRootDirectories $rootDirectories | Where-Object SideIndicator -eq '<=')
  [pscustomobject]@{
    UnexpectedFiles = $unexpectedFiles.Count
    MissingFiles = $missingFiles.Count
    UnexpectedDirectories = $unexpectedDirectories.Count
    MissingDirectories = $missingDirectories.Count
  } | Format-List
  ```

  Expected: 四项均为 0。

- [x] **Step 3: 验证当前索引和目录说明链接**

  解析 `01_PROJECT_INDEX.md` 与 `02_DIRECTORY_GUIDE.md` 中所有非 HTTP Markdown 链接，URL 解码后相对 `D:\23MySec` 执行 `Test-Path -LiteralPath`。

  Expected: 两个文件的断链数均为 0。

- [x] **Step 4: 验证 54 页与关键词数据未变化**

  Run:

  ```powershell
  $rows = Import-Csv -LiteralPath 'D:\23MySec\research\keyword\11_page_keyword_master.csv'
  [pscustomobject]@{
    Pages = $rows.Count
    UniquePageIds = ($rows.page_id | Sort-Object -Unique).Count
    UniqueUrls = ($rows.url | Sort-Object -Unique).Count
    SeoPages = ($rows | Where-Object primary_keyword -ne 'NO_PRIMARY_KEYWORD').Count
    UniqueSeoKeywords = (($rows | Where-Object primary_keyword -ne 'NO_PRIMARY_KEYWORD').primary_keyword | Sort-Object -Unique).Count
  } | Format-List
  ```

  Expected: 54、54、54、48、48。

- [x] **Step 5: 验证登记册 432 个关键字段仍与 CSV 一致**

  从 `docs\architecture\PAGE_REGISTRY_V0.1.md` 提取 54 行页面记录，逐页比较 `page_id`、`page_name`、`url`、`page_type`、`primary_keyword`、`priority`、`mapping_status`、`verification_status`。

  Expected: `ComparedFields=432`、`FieldMismatches=0`。

- [x] **Step 6: 验证旧顶层路径已清空且没有含糊占位词**

  Run:

  ```powershell
  $legacyTopPaths = @(
    'D:\23MySec\01Visio',
    'D:\23MySec\keyword-research',
    'D:\23MySec\homepage',
    'D:\23MySec\.codex_tmp_keyword_research',
    'D:\23MySec\.tmp',
    'D:\23MySec\01Mylasiya的对应---00网站定位-2026-08-29.md',
    'D:\23MySec\TiO2_Malaysia_Keyword_Research_Agent_Brief_V1.0.md'
  )
  $legacyRemaining = @($legacyTopPaths | Where-Object { Test-Path -LiteralPath $_ })
  $placeholderHits = @(Select-String -Path 'D:\23MySec\02_DIRECTORY_GUIDE.md','D:\23MySec\docs\superpowers\plans\2026-08-29-directory-reorganization.md' -Pattern 'T[B]D|T[O]DO|稍后填[写]|待补[充]')
  [pscustomobject]@{
    LegacyPathsRemaining = $legacyRemaining.Count
    PlaceholderHits = $placeholderHits.Count
  } | Format-List
  ```

  Expected: 两项均为 0。

- [x] **Step 7: 更新计划勾选并输出完成摘要**

  只有 Tasks 1–6 的验证全部通过后，使用 `apply_patch` 把本计划所有已执行步骤从 `[ ]` 改为 `[x]`。最终报告必须注明：没有文件被删除或覆盖、空 `.tmp` 目录被移除、历史版本位置、当前权威入口和下一步 Products Hub 任务入口。
