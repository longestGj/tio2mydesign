# TiO2 Malaysia 目录说明

2026-09-21：按[Gate 3/4合并决定](docs/architecture/GATE3_GATE4_MERGE_DECISION_V1.0.md)，Gate 4统一负责跨页一致性、结构、视觉和验证；Gate 5独立审查后总控关闭一次。新页从Gate 2批准组合进入，不要求单独Gate 3冻结。历史成果、仅旧Gate 3授权及暂停按原范围继承。

> 2026-09-21 当前开发仓库为 `D:\32NextJS` 静态单站，D23负责策划、交付与只读验收。旧D16及D32 WordPress仅作历史，当前按[开发流程](D:/32NextJS/CONTRIBUTING.md)和[静态单站决定](docs/architecture/STATIC_NEXTJS_SINGLE_SITE_AND_GOOGLE_INDEXING_DECISION_V1.0.md)执行。

> 2026-09-07当前批准方式：Gate 3、4、6按[总控常设关闭授权](docs/architecture/GATE_3_4_6_DELEGATED_CLOSURE_AUTHORITY_V1.0.md)执行独立审查与总控关闭，不再等待逐页用户批准；Gate 1/2/9/10不变。本文历史“用户批准”表述只保留原记录语境，当前三关关闭由该授权解释；内容事实决定、明确暂停、下一阶段启动与外发/开发/发布权限分别保留。


> 2026-09-07：[Gate工作流V3.6](docs/architecture/GATE_WORKFLOW_V3.6.md)统一阶段解释。原Gate 4/5合并为当前Gate 4；`06_handoff`、`07_qa`及旧Gate 5/7路径保持，不迁移或重命名已批准资料。

## 1. 文件用途

本文件说明 `D:\23MySec` 的目录结构、资料放置规则、当前权威入口、版本与归档方法，以及旧路径迁移后的查找方式。

项目规则以根 [AGENTS.md](AGENTS.md) 为准；当前进度见 [00_PROJECT_STATUS.md](00_PROJECT_STATUS.md)；资料入口见 [01_PROJECT_INDEX.md](01_PROJECT_INDEX.md)。本文件只解释“资料放在哪里、如何查找和如何归档”。

## 2. 策划空间与代码空间

| 空间 | 职责 |
|---|---|
| `D:\23MySec` | 视觉、SEO、GEO、战略、PRD、关键词、证据、页面任务卡、开发交付规格、只读验收与归档 |
| `D:\32NextJS` | 当前网站开发：Next.js静态导出、本地内容、共享组件、代码、测试、部署与实际实现 |
| `D:\16Wordpress_nextjs` | 原开发项目与历史证据来源，不再承接本网站开发 |

Malaysia 新站代码使用独立 `site_scope=tio2-my`。本项目不修改代码；视觉、SEO、GEO 和交付规格批准后交给开发项目实现。开发完成后，本项目只读检查视觉还原、移动端、SEO 和 GEO，并把问题交回开发项目修正。

## 3. 当前目录树

```text
D:\23MySec\
├─ AGENTS.md
├─ PROJECT_CONTEXT.md
├─ 00_PROJECT_STATUS.md
├─ 01_PROJECT_INDEX.md
├─ 02_DIRECTORY_GUIDE.md
├─ brand\
│  ├─ visual\
│  └─ logo\
│     ├─ candidates\
│     └─ production\
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
├─ research\
│  └─ keyword\
│     ├─ 00_brief\
│     ├─ raw\
│     └─ processed\
├─ pages\
│  ├─ home\
│  ├─ products\
│  ├─ markets\
│  ├─ applications\
│  ├─ documents\
│  ├─ resources\
│  ├─ about-contact\
│  └─ conversion\
├─ 90_archive\
│  ├─ prd\
│  └─ pages\home\planning\
└─ 99_workspace\
   ├─ directory-migration\
   ├─ keyword-research-workbench\
   └─ page-keyword-map-v04\
```

## 4. 根目录入口

| 文件 | 职责 | 不应放入的内容 |
|---|---|---|
| `AGENTS.md` | 稳定底线、启动和按任务必读路由 | 每日进度、页面正文、临时任务记录 |
| `PROJECT_CONTEXT.md` | 全站前四环节的已有背景与批准源摘要 | 第二份事实权威、重复采访、页面详细进度 |
| `00_PROJECT_STATUS.md` | 当前完成项、冻结项和下一步 | 历史研究全文、长期稳定规则 |
| `01_PROJECT_INDEX.md` | 当前权威资料的可点击入口 | 重复的页面规范和研究正文 |
| `02_DIRECTORY_GUIDE.md` | 目录职责、迁移表和放置规则 | 页面决策、代码实现和事实结论 |

新任务先读根 `AGENTS.md` 与 `PROJECT_CONTEXT.md`，再按根规则的任务路由读取所需资料。进度/协调才读Status相关行；找资料读Index；创建/迁移文件读本说明。链接不自动加载，不要求每项任务通读全部入口与历史记录。

## 5. 一级目录职责

### 5.1 `brand`

放置品牌级视觉标准和可复用视觉资产。

- 当前视觉标准：[TiO2_Malaysia_Visual_Standard_V1.0.md](brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md)
- Production SVG Logo Manifest：[PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md](brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md)
- 可以放：色彩、字体、图形、图片使用规范、品牌级资产。
- `brand/logo/candidates/` 保留版本化候选、审查来源与 proof；`brand/logo/production/` 保存批准的生产授权 Manifest。生产 payload 的唯一性由 Manifest 路径与 SHA-256 控制。
- 不放：单页视觉稿、关键词研究、临时生成图片和代码。

### 5.2 `docs`

放置跨页面使用的正式治理与规格文件。

| 子目录 | 放置内容 | 不放置内容 |
|---|---|---|
| [strategy](docs/strategy/) | 网站定位、战略边界、目标市场 | 单页文案、临时研究 |
| [prd](docs/prd/) | 当前实施 PRD | 被替代的 PRD 版本 |
| [architecture](docs/architecture/) | 页面登记、架构、页面关系及页面中立的跨页规划消费包 | 页面视觉稿、业务页正文或生产实现 |
| [page-playbooks](docs/page-playbooks/) | 八类页面作业规范 | 单个页面执行记录 |
| [page-briefs](docs/page-briefs/) | 统一模板和具体页面任务卡 | 研究原始证据 |
| [product-pages](docs/product-pages/) | 14个型号页统一模板、示例和开发 QA | 未来具体产品页视觉稿 |
| [superpowers](docs/superpowers/) | 已批准设计规格和执行计划 | 正式页面成果 |

### 5.3 `research`

放置专项研究成果、原始证据和可复核处理结果。

- [keyword](research/keyword/) 是关键词研究唯一正式目录。
- `00_brief` 保存批准的研究输入。
- `raw` 保存不可回写的原始捕获和 manifest。
- `processed` 保存解析和标准化结果。
- 正式研究成果保留在 keyword 根层。
- 不放页面视觉稿、产品代码或随手临时脚本。

### 5.4 `pages`

按页面体系保存具体页面的研究、策划和视觉成果。

| 子目录 | 页面体系 |
|---|---|
| [home](pages/home/) | 首页研究、分析、成果和当前策划文件 |
| [products](pages/products/) | Products Hub、工艺页及具体产品页视觉成果 |
| [markets](pages/markets/) | Markets Hub、EU、国家和本地化市场页 |
| [applications](pages/applications/) | Applications Hub 与五个应用页 |
| [documents](pages/documents/) | Documents Hub 与合规/文件页 |
| [resources](pages/resources/) | Resources Hub、采购指南和贸易更新 |
| [about-contact](pages/about-contact/) | About 与 Contact |
| [conversion](pages/conversion/) | RFQ、Sample 与 Request Documents；正式页面成果使用页面专属子目录，例如 `request-a-quote/`，其中当前 Gate 1 资料进入页面自己的 `01_research/` |

页面目录只在任务卡批准后放入正式成果。空目录表示该页面体系尚未开始，不表示页面已经创建。

### 5.5 `90_archive`

放置被新版本替代、已废止但必须保留的文件。

- [prd](90_archive/prd/) 保存 PRD V0.1–V0.3。
- [首页历史策划](90_archive/pages/home/planning/) 保存被新版本替代的首页策划和自检。
- 归档文件保持原文件名和内容，不回写。
- 不把仍在使用的当前版本放入归档。
- 未经用户明确批准，不删除归档内容。

### 5.6 `99_workspace`

放置临时、可再生成或用于验证的工作资料。

- `directory-migration` 保存本次迁移的哈希清单。
- `keyword-research-workbench` 保存关键词研究脚本和中间工作文件。
- `page-keyword-map-v04` 保存页面关键词映射构建、预览和验证输出。
- 不把唯一证据、批准版本或正式页面成果只放在这里。
- 清理工作区仍需先确认文件是否已经进入正式目录或归档。

## 6. 当前权威入口

### 项目自有Skill目录增补（2026-09-06）

用户批准建立 `D:\23MySec\skills\` 作为项目方法源目录，入口见[Skill目录](skills/README.md)。旧公共 `page-gate1-execution` 完整归档至 `90_archive/skills/2026-09-06/page-gate1-execution/`，迁移与校验见[目录及三方法拆分决定](docs/architecture/PROJECT_SKILL_DIRECTORY_AND_GATE1_SPLIT_V1.0.md)。

该目录不放页面事实、Gate批准状态或Agent角色职责，不等于已自动注册的运行Skill。当前三个方法范围已确认，具体方法与启用仍分开处理；不在用户级公共目录新建本项目Skill，不批量迁移其他公共Skill。

全站当前版本指针统一维护在 [01_PROJECT_INDEX.md](01_PROJECT_INDEX.md)，页面阶段/Manifest统一由 [00_PROJECT_STATUS.md](00_PROJECT_STATUS.md)导航。不在此重复维护会过期的PRD/登记册/视觉版本表。

- 稳定规则：根AGENTS；详细要求：`docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.7.md`，按触发路由读取。
- 背景速读：根PROJECT_CONTEXT；事实变更先更新原责任文件，再同步摘要。
- 原四份根入口：`90_archive/project-governance/2026-09-06-entry-restructure/`，只保留历史，不覆盖当前规则。
- 迁移记录：`docs/architecture/PROJECT_ENTRY_RESTRUCTURE_MIGRATION_V1.0.md`。
- 页面任务卡模板：`docs/page-briefs/PAGE_BRIEF_TEMPLATE_V0.6.md`；按页面Manifest选当前完整Brief及增补。

版本化文件仍出现迁移前路径时，按第9节映射；不因旧链接回写历史批准内容。

## 7. 页面资料流向

```text
 research/ 专项研究、SEO 与 GEO 证据
        ↓
docs/architecture/ 页面身份与关键词归属
        ↓
docs/page-playbooks/ 页面类型作业规范
        ↓
docs/page-briefs/ 具体页面任务卡
        ↓
pages/{page-family}/ 内容架构、线框、视觉方向与完整视觉稿
        ↓
 D:\32NextJS 独立开发项目实现与测试
        ↓
本项目只读视觉、SEO 与 GEO 验收
        ↓
当前成果保留；被替代版本进入 90_archive/
```

视觉、SEO 或 GEO 完成不自动获得代码开发、部署或发布权限；本项目也不直接实施开发修复。

## 8. 命名和版本规则

- 目录使用稳定英文小写名称；多词使用连字符，例如 `about-contact`。
- 正式文件使用清晰英文主题和版本，例如 `MARKET_PLAYBOOK_V0.1.md`。
- 页面任务卡使用 `{PAGE_ID}_{SHORT_NAME}_BRIEF_V0.1.md`。
- 已发布版本不覆盖；范围变化时复制为下一个版本。
- `V0.x` 表示项目内迭代，稳定正式规范再升级到 `V1.0`。
- 当前状态、项目索引和目录说明属于动态入口，可以在批准变更后更新。
- 临时脚本和验证结果放入 `99_workspace`，不得混入正式文档目录。

## 9. 旧路径迁移表

| 旧路径 | 新路径 |
|---|---|
| `01Visio/` | `brand/visual/` |
| `keyword-research/` | `research/keyword/` |
| `homepage/` | `pages/home/` |
| `01Mylasiya的对应---00网站定位-2026-08-29.md` | `docs/strategy/TiO2_Malaysia_Website_Positioning_2026-08-29.md` |
| 根 `TiO2_Malaysia_Keyword_Research_Agent_Brief_V1.0.md` | `research/keyword/00_brief/TiO2_Malaysia_Keyword_Research_Agent_Brief_V1.0.md` |
| `docs/prd/` 中 V0.1–V0.3 | `90_archive/prd/` |
| `homepage/04_planning/` 中被替代版本 | `90_archive/pages/home/planning/` |
| `.codex_tmp_keyword_research/` | `99_workspace/keyword-research-workbench/` |
| `.tmp/page-keyword-map-v04/` | `99_workspace/page-keyword-map-v04/` |
| `pages/conversion/04_planning/` 中的 `CONV-RFQ*` | `pages/conversion/request-a-quote/04_planning/` 对应子目录 |
| `pages/conversion/05_review/` 中的 `CONV-RFQ*` | `pages/conversion/request-a-quote/05_review/` |

历史文档出现旧路径时：先按最长、最具体的旧路径匹配，再按目录前缀映射。例如首页 V0.1 视觉稿应查找 `90_archive/pages/home/planning/`，而不是当前 `pages/home/04_planning/`。

## 10. 新任务创建前检查

- [ ] 已读取根 `AGENTS.md`、`PROJECT_CONTEXT.md`及任务触发资料；创建/迁移文件已读取本说明。
- [ ] 已从索引指向的当前批准登记册确认 Page ID、URL、页面类型和状态。
- [ ] 已确定页面所属 `pages` 子目录。
- [ ] 已读取对应 Playbook 和页面任务卡；未批准时不创建正式页面成果。
- [ ] 研究证据放在 `research`，跨页面规范放在 `docs`，页面成果放在 `pages`。
- [ ] 没有把历史版本放进当前工作目录。
- [ ] 没有把唯一正式资料放进 `99_workspace`。
- [ ] 本任务只交付视觉、SEO、GEO 和开发规格，没有修改代码。
- [ ] 代码工作只在 `D:\32NextJS` 开发项目中按其项目规则和具体授权进行。
- [ ] 开发完成后的检查采用只读方式，问题交回开发项目处理。
- [ ] 发布、域名、DNS 和索引仍需用户单独授权。

## 11. 2026-09-06入口分层

用户已批准按稳定规则/背景摘要/当前导航/阶段状态分层。四份旧根入口逐字节归档，旧路径迁移表完整保留；没有迁移页面成果或改写页面批准。详细规则迁至architecture并保留原章编号，根规则通过必读触发路由调用，不依赖自动加载外链。

## 12. 项目自有 Agent 目录（2026-09-06）

- `agents/`：岗位职责、判断、协作与交付合同；当前入口为 `agents/README.md`。
- Gate 1 执行角色：`agents/gate1-execution/agent.md`，由已批准角色设计 V0.7 整理。
- Gate 4页面设计执行角色：[agent.md](agents/gate4-complete-visual/agent.md) V1.6；当前组合由[基线Manifest V1.11](docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.11.md)导航，吸收跨页一致性和结构；不恢复暂停页面或扩大授权。
- Gate 3历史执行入口：[agent.md](agents/gate3-execution/agent.md) V0.8，仅用于历史或明确保留的旧限定授权；新页按合并Gate 4执行。旧源身份从合并归档清单恢复，不迁移页面成果。
- Gate 2 执行角色：`agents/gate2-execution/agent.md`，由已确认目标、职责、质量和两步流程继续细化；2026-09-06按用户“执行下一步”要求创建，设计记录见索引。
- Gate 2 Review角色：`agents/gate2-review/agent.md`，由Spain真实实践归纳；必须由不同于执行者的子代理读取，负责买家视角预审及返修复核，不取得总控/用户批准权。
- 与 `skills/` 方法目录分开；页面研究和事实仍放在对应 `pages/` 等正式资料目录，不写死进角色文件。
- 本次仅创建项目角色文件，不进行运行注册或启动；任务需明确读取。根 `AGENTS.md` 不替换，既有 `research/keyword/agent.md` 与历史设计不移动、不覆盖。


## 独立模板库角色设计（2026-09-12）

职责放agents/page-template-library/agent.md，档案与入库合同放该角色references/；设计决定放docs/architecture/PAGE_TEMPLATE_LIBRARY_AGENT_DESIGN_V0.1.md。实际模板库使用另行指定的library_root，目录由合同定义，不放Website_Preparation或页面Gate目录；当前仅建角色规范，未建立含业务模板的实际库。


模板库位置已由用户指定到`D:/16Wordpress_nextjs/template-library`；D23保存角色和任务书，D16任务保存实际库。当前[首轮任务书](docs/architecture/TEMPLATE_LIBRARY_D16_INVENTORY_BRIEF_V0.1.md)已准备，未执行建库。

模板库属于独立资产事项：上述D16模板库位置保留历史指定，本次开发归属切换不执行模板库迁移，也不构成继续向D16派发本网站开发的例外。

开发规则直接读取D32的[AGENTS.md](D:/32NextJS/AGENTS.md)、[CONTRIBUTING.md](D:/32NextJS/CONTRIBUTING.md)与[README.md](D:/32NextJS/README.md)。D23只保留策划及验收交接接口。
