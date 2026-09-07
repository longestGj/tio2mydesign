# TiO2 Malaysia 目录说明

## 1. 文件用途

本文件说明 `D:\23MySec` 的目录结构、资料放置规则、当前权威入口、版本与归档方法，以及旧路径迁移后的查找方式。

项目规则以根 [AGENTS.md](AGENTS.md) 为准；当前进度见 [00_PROJECT_STATUS.md](00_PROJECT_STATUS.md)；资料入口见 [01_PROJECT_INDEX.md](01_PROJECT_INDEX.md)。本文件只解释“资料放在哪里、如何查找和如何归档”。

## 2. 策划空间与代码空间

| 空间 | 职责 |
|---|---|
| `D:\23MySec` | 视觉、SEO、GEO、战略、PRD、关键词、证据、页面任务卡、开发交付规格、只读验收与归档 |
| `D:\16Wordpress_nextjs` | WordPress、Next.js、CMS、共享组件、代码、测试、部署与实际实现 |

Malaysia 新站代码使用独立 `site_scope=tio2-my`。本项目不修改代码；视觉、SEO、GEO 和交付规格批准后交给开发项目实现。开发完成后，本项目只读检查视觉还原、移动端、SEO 和 GEO，并把问题交回开发项目修正。

## 3. 当前目录树

```text
D:\23MySec\
├─ AGENTS.md
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
| `AGENTS.md` | 稳定的全项目治理规则 | 每日进度、页面正文、临时任务记录 |
| `00_PROJECT_STATUS.md` | 当前完成项、冻结项和下一步 | 历史研究全文、长期稳定规则 |
| `01_PROJECT_INDEX.md` | 当前权威资料的可点击入口 | 重复的页面规范和研究正文 |
| `02_DIRECTORY_GUIDE.md` | 目录职责、迁移表和放置规则 | 页面决策、代码实现和事实结论 |

新任务进入项目后，按上述顺序读取四个入口，再读取具体页面或专项目录中的资料。

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
| [architecture](docs/architecture/) | 页面登记、架构与页面关系 | 页面视觉稿 |
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

| 范围 | 当前文件 |
|---|---|
| 项目总规则 | [AGENTS.md](AGENTS.md) |
| 项目状态 | [00_PROJECT_STATUS.md](00_PROJECT_STATUS.md) |
| 项目索引 | [01_PROJECT_INDEX.md](01_PROJECT_INDEX.md) |
| 网站定位 | [TiO2_Malaysia_Website_Positioning_2026-08-29.md](docs/strategy/TiO2_Malaysia_Website_Positioning_2026-08-29.md) |
| PRD | [TiO2_Malaysia_Website_PRD_V0.4.md](docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md) |
| 页面—关键词主表 | [11_page_keyword_master.csv](research/keyword/11_page_keyword_master.csv) |
| 54页登记册 | [PAGE_REGISTRY_V0.1.md](docs/architecture/PAGE_REGISTRY_V0.1.md) |
| 页面任务卡模板 | [PAGE_BRIEF_TEMPLATE.md](docs/page-briefs/PAGE_BRIEF_TEMPLATE.md) |
| 视觉标准 | [TiO2_Malaysia_Visual_Standard_V1.0.md](brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md) |
| 产品页统一模板 | [01_Product_Page_Template_and_Content_Spec_V1.0.md](docs/product-pages/01_Product_Page_Template_and_Content_Spec_V1.0.md) |

当前页面任务卡模板为 V0.2，旧版 V0.1 保存在 `90_archive/project-governance/`。

版本化文件内部如果仍出现迁移前路径，以本文件第9节的路径映射为准；不得因此回写历史批准版本。

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
 D:\16Wordpress_nextjs 独立开发项目实现与测试
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

- [ ] 已读取根 `AGENTS.md`、当前状态、项目索引和本目录说明。
- [ ] 已在 54 页登记册中确认 Page ID、URL、页面类型和状态。
- [ ] 已确定页面所属 `pages` 子目录。
- [ ] 已读取对应 Playbook 和页面任务卡；未批准时不创建正式页面成果。
- [ ] 研究证据放在 `research`，跨页面规范放在 `docs`，页面成果放在 `pages`。
- [ ] 没有把历史版本放进当前工作目录。
- [ ] 没有把唯一正式资料放进 `99_workspace`。
- [ ] 本任务只交付视觉、SEO、GEO 和开发规格，没有修改代码。
- [ ] 代码工作只在 `D:\16Wordpress_nextjs` 开发项目中按其仓库规则进行。
- [ ] 开发完成后的检查采用只读方式，问题交回开发项目处理。
- [ ] 发布、域名、DNS 和索引仍需用户单独授权。
