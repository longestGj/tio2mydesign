# TiO2 Malaysia Directory Reorganization Design

## 0. 文档信息

| 项目 | 内容 |
|---|---|
| 日期 | 2026-08-29 |
| 状态 | 已完成聊天方案确认，等待迁移规范复核 |
| 适用目录 | `D:\23MySec` |
| 目标 | 按品牌、治理、研究、页面、归档和工作区建立稳定目录边界 |
| 安全原则 | 不删除任何文件；移动前后核对数量和大小；历史版本保持内容不变 |

## 1. 设计决定

采用“按职责完整重构”方案：

- 根目录只保留项目级入口文件。
- 品牌视觉、正式文档、研究证据、页面资产、历史归档和临时工作分别管理。
- 已批准或当前使用的成果留在工作目录；被新版本替代的成果进入 `90_archive`。
- 临时脚本、预览、验证结果和依赖进入 `99_workspace`。
- 版本化历史文件保持内容不变；其内部旧路径通过根目录迁移映射解释，不回写历史版本。
- 当前无版本号的治理入口同步更新为新路径。

## 2. 最终目录结构

```text
D:\23MySec\
├─ AGENTS.md
├─ 00_PROJECT_STATUS.md
├─ 01_PROJECT_INDEX.md
├─ 02_DIRECTORY_GUIDE.md
│
├─ brand\
│  └─ visual\
│
├─ docs\
│  ├─ strategy\
│  ├─ prd\
│  ├─ architecture\
│  ├─ page-playbooks\
│  ├─ page-briefs\
│  ├─ product-pages\
│  └─ superpowers\
│     ├─ plans\
│     └─ specs\
│
├─ research\
│  └─ keyword\
│     ├─ 00_brief\
│     ├─ raw\
│     └─ processed\
│
├─ pages\
│  ├─ home\
│  ├─ products\
│  ├─ markets\
│  ├─ applications\
│  ├─ documents\
│  ├─ resources\
│  ├─ about-contact\
│  └─ conversion\
│
├─ 90_archive\
│  ├─ prd\
│  └─ pages\
│     └─ home\
│        └─ planning\
│
└─ 99_workspace\
   ├─ keyword-research-workbench\
   └─ page-keyword-map-v04\
```

## 3. 根目录文件

### 3.1 保持原位

| 当前路径 | 处理 |
|---|---|
| `AGENTS.md` | 保持根目录，更新新路径规则 |
| `00_PROJECT_STATUS.md` | 保持根目录，更新目录整理状态和当前入口 |
| `01_PROJECT_INDEX.md` | 保持根目录，更新全部可点击路径 |

### 3.2 新增

| 新路径 | 职责 |
|---|---|
| `02_DIRECTORY_GUIDE.md` | 说明目录树、每个目录的职责、禁止内容、版本与归档规则、旧路径映射和新任务放置方法 |

### 3.3 移动并重命名

| 当前路径 | 目标路径 | 说明 |
|---|---|---|
| `01Mylasiya的对应---00网站定位-2026-08-29.md` | `docs/strategy/TiO2_Malaysia_Website_Positioning_2026-08-29.md` | 修正难以识别的文件名；内容不修改 |
| `TiO2_Malaysia_Keyword_Research_Agent_Brief_V1.0.md` | `research/keyword/00_brief/TiO2_Malaysia_Keyword_Research_Agent_Brief_V1.0.md` | 作为关键词研究任务输入保留；raw 中的发现副本仍保留 |

## 4. 顶层目录迁移

| 当前路径 | 目标路径 | 处理方式 |
|---|---|---|
| `01Visio` | `brand/visual` | 整体移动；标准和图片内容不变 |
| `keyword-research` | `research/keyword` | 整体移动；随后建立 `00_brief` |
| `homepage` | `pages/home` | 整体移动；随后归档已被替代的策划版本 |
| `docs` | `docs` | 保持原位；补充 `strategy`，现有子目录不改名 |

## 5. PRD 版本整理

### 5.1 当前工作版本

| 文件 | 处理 |
|---|---|
| `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | 保持当前正式目录，继续作为内容与页面架构基线 |

### 5.2 历史归档

以下文件从 `docs/prd` 移入 `90_archive/prd`，文件名和内容不修改：

- `TiO2_Malaysia_Website_PRD_V0.1.md`
- `TiO2_Malaysia_Website_PRD_V0.2.md`
- `TiO2_Malaysia_Website_PRD_V0.3.md`

## 6. 首页版本整理

`homepage` 整体迁移为 `pages/home` 后，再整理 `pages/home/04_planning`。

### 6.1 保留在当前工作目录

| 文件 | 原因 |
|---|---|
| `01_homepage_content_architecture_v0.2.md` | 最新内容架构 |
| `02_homepage_wireframe_spec_v0.1.md` | 当前唯一线框规格 |
| `03_homepage_visual_direction_v0.2.md` | 最新视觉方向 |
| `04_homepage_full_visual_design_v0.3.md` | 用户批准的最新完整视觉稿 |
| `05_homepage_full_visual_self_check_v0.3.md` | 最新完整视觉自检 |

### 6.2 移入历史归档

以下文件移入 `90_archive/pages/home/planning`，文件名和内容不修改：

- `01_homepage_content_architecture_v0.1.md`
- `03_homepage_visual_direction_v0.1.md`
- `04_homepage_full_visual_design_v0.1.md`
- `04_homepage_full_visual_design_v0.2.md`
- `05_homepage_full_visual_self_check_v0.1.md`
- `05_homepage_full_visual_self_check_v0.2.md`

首页的原始网页记录、分析和研究成果全部保留在 `pages/home/01_original_homepages`、`02_analysis` 和 `03_results`。

## 7. 临时目录迁移

| 当前路径 | 目标路径 | 处理方式 |
|---|---|---|
| `.codex_tmp_keyword_research` | `99_workspace/keyword-research-workbench` | 整体移动，包括脚本、依赖和中间文件 |
| `.tmp/page-keyword-map-v04` | `99_workspace/page-keyword-map-v04` | 整体移动，包括构建器、预览和验证结果 |

当 `.tmp` 中不再包含任何文件或子目录时，删除这个空目录。此操作不删除文件。

## 8. 新页面目录

以下目录只建立容器，不伪造页面成果：

- `pages/products`
- `pages/markets`
- `pages/applications`
- `pages/documents`
- `pages/resources`
- `pages/about-contact`
- `pages/conversion`

未来每个页面目录的标准结构由对应 Playbook 决定。未获得页面任务卡批准前，不提前生成内容、视觉稿或代码占位文件。

## 9. `02_DIRECTORY_GUIDE.md` 内容合同

目录说明文件必须包含：

1. 项目根目录用途。
2. 完整目录树。
3. 每个一级和关键二级目录“放什么”和“不放什么”。
4. 当前权威入口：AGENTS、状态、索引、PRD、关键词主表、页面登记册、任务卡模板和视觉标准。
5. 页面任务从研究、任务卡、视觉、开发到归档的资料流向。
6. 当前版本、历史版本和临时文件的判定规则。
7. 文件命名和版本命名规则。
8. 旧路径到新路径迁移表。
9. 历史文档中旧路径的解析方法。
10. 新任务创建目录前的检查清单。

该文件放在根目录，供用户和新任务第一时间查看；它解释目录，不重复 `AGENTS.md` 的治理细则。

## 10. 引用更新策略

### 10.1 更新的当前文件

以下当前入口允许更新为新路径：

- `AGENTS.md`
- `00_PROJECT_STATUS.md`
- `01_PROJECT_INDEX.md`
- 新建的 `02_DIRECTORY_GUIDE.md`
- `research/keyword/AGENTS.md` 和兼容入口 `agent.md`

### 10.2 保持内容不变的版本化文件

- PRD V0.1–V0.4。
- 首页所有版本化研究、策划和自检文档。
- 产品页 V1.0 规格、示例和 SOP。
- 页面登记册 V0.1、页面任务卡模板 V0.1。
- 关键词研究输出、raw 证据、manifest 和已保存任务 Brief。
- 已执行的 Superpowers 计划和本目录设计规格。

这些文件中的旧路径不回写，以保留批准时的内容。新任务遇到旧路径时，先查询 `02_DIRECTORY_GUIDE.md` 的迁移表；未来形成新版本时使用新路径。

## 11. 安全与验证

### 11.1 移动前记录

- 记录排除 `node_modules` 和包含 `node_modules` 两种文件数与总大小。
- 记录每个一级目录的文件数与大小。
- 保存全部源路径到目标路径的迁移清单。
- 确认所有目标路径位于 `D:\23MySec` 内。

### 11.2 移动过程

- 使用 PowerShell `Move-Item -LiteralPath` 和明确的绝对路径。
- 每次只移动一个已验证的源路径。
- 目标已存在时停止，不覆盖。
- 不使用通配符递归移动，不使用删除命令处理非空目录。

### 11.3 移动后验证

- 文件总数与移动前一致。
- 文件总大小与移动前一致。
- 所有源文件都能在目标路径找到。
- 根目录只保留批准的四个入口文件和批准的一级目录。
- 当前入口文件中的本地链接全部有效。
- 54 页登记册仍有 54 个唯一 Page ID 和 URL。
- 48 个 SEO 主关键词仍唯一。
- 页面登记册与关键词主表的 432 个关键字段继续保持零差异。
- `AGENTS.md`、状态、索引和目录说明使用新路径。
- 无文件被删除或覆盖。

## 12. 回退方式

本次重构没有内容删除。若验证失败：

1. 停止后续移动。
2. 根据迁移清单把已经移动的项目逐项移回原绝对路径。
3. 恢复当前入口文件中的旧路径引用。
4. 再次核对文件数与大小。

不使用批量强制覆盖，不删除冲突文件；出现目标冲突时保留两份并交由总控确认。

## 13. 完成定义

只有同时满足以下条件才可宣布目录整理完成：

- 精确迁移清单全部执行。
- 迁移前后文件数和总大小一致。
- 当前入口链接验证通过。
- 54 页与关键词唯一性验证通过。
- 根 `02_DIRECTORY_GUIDE.md` 内容完整。
- 没有覆盖或删除任何文件。
- 迁移结果由项目总控审查。
