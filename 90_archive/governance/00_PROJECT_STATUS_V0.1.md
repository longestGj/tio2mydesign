# TiO2 Malaysia 项目状态

## 文档信息

| 项目 | 内容 |
|---|---|
| 状态日期 | 2026-08-30 |
| 状态版本 | V0.1 |
| 维护角色 | 项目总控与质量审查 |
| 稳定规则 | `AGENTS.md` |
| 页面基线 | `docs/architecture/PAGE_REGISTRY_V0.1.md` |
| 状态性质 | 动态快照；不替代 PRD、关键词主表或页面任务卡 |

## 1. 当前确认基线

- 前台品牌：TiO2 Malaysia。
- 规划域名：`https://tio2malaysia.com`。
- 运营主体：IKHLAS TITANIUM (MALAYSIA) SDN. BHD.。
- 技术架构：开发项目使用共享 WordPress 与 Next.js，Malaysia 新站使用独立 `site_scope=tio2-my`。
- 本项目范围：视觉稿、SEO、GEO、内容与页面架构、开发交付规格，以及开发完成后的只读质量验收。
- 开发范围：WordPress、Next.js、CMS、代码、测试、部署和发布全部由 `D:\16Wordpress_nextjs` 开发项目负责。
- 本项目不编写或修改任何开发代码；只读验收发现问题后提交给开发项目修正。
- 策划资料：`D:\23MySec`。
- 开发代码：`D:\16Wordpress_nextjs`。
- 当前 PRD：`docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`。
- 页面—关键词实施主表：`research/keyword/11_page_keyword_master.csv`。
- 全站页面记录：54。
- 产品详情页：14 个型号，各自一个权威 URL。
- 当前产品关系基线：`PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`，用户于 2026-08-30 批准；30 条公开 Application、0 条 conflict、54 条 no-public；8 Chloride / 5 Sulfate / 1 Vapor-phase oxidation。
- Header：Home、Markets、Products、Applications、Documents、Resources、About、Request a Quote。
- 全站 Header / Mobile Menu / Footer 合同：`docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.2.md`，状态 `APPROVED_GLOBAL_CHROME_BASELINE`；Request a Quote 全站固定显示。
- Malaysia Origin 不设置独立一级栏目，相关搜索意图分别由 Home、About、Documents 和 Resources 承接。

## 2. 已完成或已确认成果

| 工作项 | 当前状态 | 说明 |
|---|---|---|
| 战略定位 | 已形成项目资料 | 当前文件位于 `docs/strategy/TiO2_Malaysia_Website_Positioning_2026-08-29.md` |
| 关键词研究 | 已完成并有 QA | 原始、处理、主表、聚类、页面架构、机会与 QA 均保留 |
| 页面—关键词映射 | 已确认 V0.4 基线 | 54 页；其中批准、规划、暂定和候选状态必须继续区分 |
| 首页内容与视觉 | 用户确认完成 | 最新规划与自检版本为 V0.3；手机端按钮下空白问题已按用户要求修正并确认完成 |
| 14 个产品信息架构 | 已确认 | 独立 URL、主关键词、主分类和页面职责已写入 PRD V0.4 |
| 产品页统一模板 | 已形成 V1.0 资料 | 包含模板、M-350 完整示例、开发 SOP 与 QA；代码状态应在代码仓库单独复核 |
| 根项目治理 | 范围边界已更新 | 根章程、状态、索引、目录说明和页面任务卡 V0.2 已统一为视觉、SEO、GEO、外部开发交付和只读验收 |
| 全站公共 Header / Footer 规格 | 用户批准 V0.1 | 统一 Logo、Desktop/Mobile 导航、当前页状态、RFQ ON/OFF 与 Deep Navy Footer；仅修订公共首尾，不重做页面主体 |
| PRODUCT V0.3 技术关系 | 用户批准 | 三份用户附件为当前有效技术资料；M-2377 的 Coatings/Plastics/Masterbatch/Printing Inks/Paper 与 Sulfate 已解冻并可中性映射；Rubber 仅登记证据；M-996/M-2196 比较冻结继续开放 |
| RES-000 Resources Hub | Gate 1–5 与 Global Chrome V0.2 总控复审 PASS，待用户最终批准 | `RES-000-G15-PCR-01` 与 `GHC-RES-01` 均为 `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；页面及 V0.2 继续 `DESIGN_IN_REVIEW`。PRODUCT 关系消费源升级为 V0.3；route/freshness/inventory=0 与 RES-R002–R007 不变；子页、Gate 6+ 和开发未授权 |

“用户确认完成”记录用户在本项目对话中的批准，不等于本轮重新检查了生产代码、部署或线上页面。

页面映射中的 `PROVISIONAL_URL`、`PLANNED_*` 和 `NEW_PAGE_CANDIDATE` 继续保持原状态；它们没有因为进入登记册而升级为已批准或已完成。

## 3. 54 页组成

| 页面体系 | 数量 | 当前总体状态 |
|---|---:|---|
| Home | 1 | 页面映射批准；视觉完成 |
| About / Contact | 2 | About 映射批准但事实待核验；Contact 规划中 |
| Markets | 12 | Hub 与大部分市场映射批准；Brazil PT-BR URL 暂定 |
| Products | 17 | 架构批准；包含 Products Hub、2 个工艺页和 14 个型号页 |
| Applications | 6 | 页面职责规划完成；Hub 规划中，5 个详情 URL 暂定 |
| Documents | 4 | Hub 规划中，3 个详情 URL 暂定且事实证据受限 |
| Resources | 9 | 1 个页面映射批准，3 个候选，4 个贸易更新规划，Hub 规划中 |
| Conversion | 3 | RFQ、Sample、Request Documents 均待转化流程设计 |

## 4. 当前事实与质量冻结项

| 范围 | 状态 | 处理边界 |
|---|---|---|
| M-2377 工艺与应用 | `VERIFIED_FOR_PUBLIC_MAPPING` | Sulfate 及 Coatings、Plastics、Masterbatch、Printing Inks、Paper 已由 PRODUCT V0.3 批准；Specialty Materials 继续 `NO_PUBLIC_MAPPING`；Rubber 不扩展分类或页面 |
| M-996 与 M-2196 差异 | `TECHNICAL_VERIFICATION_REQUIRED` | 两个页面可独立建设；没有证据的差异化结论不发布 |
| About 制造、原产地与追溯事实 | `FACT_EVIDENCE_REQUIRED` | 可先策划信任结构；事实字段逐项核验后发布 |
| REACH、TDS/SDS/COA、COO 页面 | `FACT_EVIDENCE_REQUIRED` | 可完成页面流程与受控申请设计；不得提前作合规承诺 |
| Trade Update | `OFFICIAL_SOURCE_UPDATE_REQUIRED` | 每次发布或更新必须使用官方来源并显示资料日期 |
| Brazil PT-BR | `LOCALIZATION_REVIEW_REQUIRED` | 可做研究和结构；最终 URL、语言和本地化文案需批准 |
| Contact | `CONTACT_DETAILS_REQUIRED` | 仅可使用已验证实体资料与域名邮箱 |

这些冻结只影响相关事实或发布字段，不阻塞公共页面结构、组件、已验证内容和其他页面的开发。

## 5. 当前页面建设顺序

1. 为 Products Hub 建立正式页面任务卡与 Products Playbook；这是首页和产品详情页之后的下一张视觉稿。
2. 依次完成 Markets、Applications、Documents、Resources、About/Contact、Conversion 的页面类型作业规范。
3. 每个具体页面开工前，从登记册生成并批准独立页面任务卡。
4. 视觉、SEO、GEO 与交付规格获批后，交给 `D:\16Wordpress_nextjs` 的独立开发任务实现。
5. 开发完成后由本项目进行只读视觉、SEO、GEO 验收，不直接修改代码。
6. 验收问题交回 WordPress/Next.js 开发项目修正；发布需要用户另行批准。

建设顺序可由用户调整。调整优先级不等于改变页面职责、URL 或关键词归属。

### 5.1 当前跨页视觉修订

- 状态：`GLOBAL_CHROME_VISUAL_REVISION_IN_PROGRESS`。
- 范围：首页、03产品详情页统一模板、PRODUCT-000、MARKET-000、RES-000、APP-000。
- 页面主体、关键词、SEO/GEO、产品关系和事实门禁保持不变。
- 原页面任务只重导出含统一 Header / Footer 的视觉稿；不创建二级页面，不进入开发。
- 执行计划：`docs/superpowers/plans/2026-08-30-global-header-footer-visual-revision.md`。

## 6. 目录整理状态

- 目录重构 V0.1 已按批准映射执行。
- 根目录以 `brand`、`docs`、`research`、`pages`、`90_archive`、`99_workspace` 六个职责区管理资料。
- PRD V0.1–V0.3 和被新版替代的首页策划文件已进入 `90_archive/`。
- 临时脚本、预览和验证结果已进入 `99_workspace/`。
- 目录规则和旧路径映射见 `02_DIRECTORY_GUIDE.md`。
- 本次迁移未删除或覆盖任何文件；原 `.tmp` 在确认完全为空后移除。

## 7. 状态维护规则

- 每次用户批准页面、版本或架构变化后更新本文件。
- 只记录已经发生或已经批准的状态，不把计划写成完成。
- 页面生命周期、关键词映射状态和事实验证状态分别记录，不得合并成一个“完成”。
- 页面数量、URL、主关键词或职责变化时，必须同步更新 PRD 新版本、页面—关键词主表新版本、页面登记册和相关任务卡。
- 已发布状态文件不覆盖；重大基线变化复制为 V0.2、V0.3 等新版本，并在项目索引中更新“当前版本”入口。
