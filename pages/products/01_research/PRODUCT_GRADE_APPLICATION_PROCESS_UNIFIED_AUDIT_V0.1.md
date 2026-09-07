# 14 型号应用与工艺统一技术关系专项审计 V0.1

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| 审计对象 | TiO2 Malaysia 全站 14 型号应用与工艺关系 |
| 关联页面 | `PRODUCT-000`、`APP-000` 及后续 Products / Applications 共用关系数据 |
| 唯一关系总表 | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.1.csv` |
| 唯一关系总表状态 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| 版本 | V0.1 |
| 日期 | 2026-08-30 |
| 状态 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| 审计性质 | 证据、应用映射与工艺映射专项；不是页面设计、子页内容或开发交付 |
| 批准状态 | 2026-08-30 总控复审 PASS；待用户一次性最终决定；候选关系不得因此公开 |
| 审核人 | 项目总控与质量审查 |
| 最终批准人 | 用户 |
| Gate 5 影响 | 无状态升级或降级；`PRODUCT-000` Gate 5 继续保持其现有待用户决定状态 |
| 排除范围 | 14 个产品子页、5 个 Application 子页、视觉修改、Gate 6/7、开发、CMS、测试、部署、发布及 `D:\16Wordpress_nextjs` |

本文件建立一次审核、一次批准、全站共用的型号—应用—工艺关系基线。CSV 是逐关系唯一总表；本文是来源、冲突、建议矩阵和一次性批准合同。任何候选只有在总控复审及用户统一技术批准后，才可以转为公开映射。

## 1. 执行结论

### 1.1 覆盖结果

| 检查项 | 结果 |
|---|---:|
| 型号 | 14 / 14 |
| 应用 | 6 / 6 |
| 型号 × 应用关系 | 84 / 84 |
| `VERIFIED_FOR_PUBLIC_MAPPING` | 2 |
| `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | 23 |
| `CONFLICT_HOLD` | 4 |
| `DO_NOT_MAP` | 55 |

六个应用各有 14 条独立审计记录。`DO_NOT_MAP` 只表示当前没有足够的正向候选依据，不等于“不适用”或负面技术结论。

### 1.2 当前可公开与待批准范围

- 当前只有 `M-350 → Coatings` 和 `M-350 → Printing Inks` 保持 `VERIFIED_FOR_PUBLIC_MAPPING`。
- 23 条关系具备项目架构候选与/或 legacy 一方产品事实候选，可集中提交一次用户技术批准；在批准前均保持 `DO_NOT_RENDER`。
- M-2377 的 Coatings、Plastics、Printing Inks、Paper 四条关系保持 `CONFLICT_HOLD`；Masterbatch 与 Specialty Materials 为 `DO_NOT_MAP`。
- M-996 与 M-2196 都可分别作为 Coatings / Sulfate 候选提交批准，但两者的差异、排序、选择理由和比较继续单独冻结。
- 工艺方面：M-350 的 Chloride 已有当前批准记录；其余 11 个常规型号的 Chloride/Sulfate 与 CR-901 的 Vapor-phase oxidation 提交一次技术批准；M-2377 工艺继续 `CONFLICT_HOLD`。

## 2. 状态与公开行为

| 状态 | 含义 | 当前公开行为 |
|---|---|---|
| `VERIFIED_FOR_PUBLIC_MAPPING` | 已有当前项目内明确产品级批准记录 | 可作为中性 `Grade to Review`；不得变成最佳、保证适用、等同或排名 |
| `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | 有候选依据，但缺少本项目当前批准 TDS、应用测试或技术 owner 决定 | `DO_NOT_RENDER`；集中等待一次用户技术批准 |
| `CONFLICT_HOLD` | 来源互相冲突或项目已有冻结决定 | `DO_NOT_RENDER`；不得在本轮用推断或多数来源投票解冻 |
| `DO_NOT_MAP` | 未找到正向候选依据，或不属于六应用映射范围 | 不映射；不表达不适用，不生成负面声明 |

用户统一批准只授权“型号—应用的中性评估关系”和“型号—工艺分类”。它不批准性能、推荐理由、Not Recommended、比较、等同、文件、法规、原产地、库存、价格或交期声明。

## 3. 证据等级

### 3.1 允许的证据用途

| 证据层 | 可以证明 | 不能单独证明 |
|---|---|---|
| 当前批准 TDS / 应用测试 / 明确技术 owner 决定 | 具体型号应用与工艺，限明确范围 | 来源未覆盖的性能、比较、市场合规或供应能力 |
| 已批准产品级示例 | 已批准示例中明确标为 verified 的关系 | 扩展到未列应用或其他型号 |
| PRD / Product SOP / 关键词主表 | 架构候选、页面职责、关系方向和 route owner | 技术适用性或公开许可 |
| mytio2.com 产品页 | 一方产品事实候选与冲突线索 | 本项目当前技术证明、差异证明或自动公开许可 |
| 搜索结果、竞品、AI 摘要 | 发现线索 | 本公司型号技术关系 |

### 3.2 本地资料盘点

2026-08-30 复核正式目录后，仍未发现 13 个型号的可直接审核 TDS、应用测试报告或独立技术批准表。M-350 完整示例是唯一明确标记 applications/process verified 的当前项目产品级记录。mytio2.com 页面虽然多处声称内容来自 current TDS，但实际 TDS 文件不在本工作区，因此只能作为候选来源，不能自行升级为 verified。

## 4. 来源清单

### 4.1 项目内来源

| Source ID | 路径 | 类型 | 日期 | 适用范围 | 审计结论 |
|---|---|---|---|---|---|
| `SRC-GOV` | `AGENTS.md` | 项目治理 | 2026-08-29 baseline | 证据、冻结、非开发边界 | Binding |
| `SRC-PRD` | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | 已批准 PRD | 2026-08-29 | 14 型号、候选应用、候选工艺、冻结项 | Architecture candidate only |
| `SRC-KW` | `research/keyword/11_page_keyword_master.csv` | 页面—关键词主表 | 2026-08-29 | 型号身份、职责和技术验证状态 | Architecture/SEO only |
| `SRC-TEMPLATE` | `docs/product-pages/01_Product_Page_Template_and_Content_Spec_V1.0.md` | 已批准产品内容规则 | 2026-08-29 | evidence gate、M-2377 与差异冻结 | Binding gating rule |
| `SRC-SOP` | `docs/product-pages/03_Product_Page_Development_SOP_and_QA_V1.0.md` | 已批准产品 SOP | 2026-08-29 | application/process candidate matrix | Candidate only |
| `SRC-M350-APPROVED` | `docs/product-pages/02_M350_Complete_Template_Example_V1.0.md` | 已批准产品级示例 | 2026-08-29 | M-350 Coatings、Printing Inks、Chloride | Product-level verified record |
| `SRC-G1-APPROVED` | `pages/products/01_research/PRODUCT-000_GATE1_EVIDENCE_AUDIT_V0.1.md` | 已批准 Gate 1 证据记录 | 2026-08-29 | 现有 2 RENDER / 19 DO_NOT_RENDER 基线 | Binding until superseded by user approval |

### 4.2 Legacy 一方网页候选来源

以下页面全部于 2026-08-30 观察；网页未提供统一发布日期。它们只用于提出候选或发现冲突，不复制正文，不单独授予本项目公开许可。

| Source ID | URL | 适用范围 | 审计用途 |
|---|---|---|---|
| `SRC-WEB-HOME` | `https://www.mytio2.com/` | 五应用 lead-grade 候选 | M-350 → Paper 候选；不作技术证明 |
| `SRC-WEB-M350` | `https://www.mytio2.com/products/m-350/` | M-350 应用与 Chloride 候选 | 仅新增 Plastics 候选；不覆盖已批准示例范围 |
| `SRC-WEB-M510` | `https://www.mytio2.com/products/m-510/` | M-510 应用与 Chloride 候选 | Coatings / Plastics / Masterbatch / Printing Inks 候选 |
| `SRC-WEB-M896` | `https://www.mytio2.com/products/m-896/` | M-896 应用与 Chloride 候选 | Coatings 候选 |
| `SRC-WEB-M996` | `https://www.mytio2.com/products/m-996/` | M-996 应用与 Sulfate 候选 | Coatings 候选；不证明与 M-2196 差异 |
| `SRC-WEB-M2196` | `https://www.mytio2.com/products/m-2196/` | M-2196 应用与 Sulfate 候选 | Coatings 候选；不证明与 M-996 差异 |
| `SRC-WEB-M895` | `https://www.mytio2.com/products/m-895/` | M-895 应用与 Chloride 候选 | Coatings 候选 |
| `SRC-WEB-M200` | `https://www.mytio2.com/products/m-200/` | M-200 应用与 Chloride 候选 | Plastics / Masterbatch 候选 |
| `SRC-WEB-M108` | `https://www.mytio2.com/products/m-108/` | M-108 应用与 Sulfate 候选 | Plastics / Masterbatch 候选 |
| `SRC-WEB-M210` | `https://www.mytio2.com/products/m-210/` | M-210 应用与 Chloride 候选 | Plastics / Masterbatch 候选 |
| `SRC-WEB-M340` | `https://www.mytio2.com/products/m-340/` | M-340 应用与 Chloride 候选 | Plastics / Masterbatch 候选 |
| `SRC-WEB-M886` | `https://www.mytio2.com/products/m-886/` | M-886 应用与 Chloride 候选 | Plastics / Masterbatch 候选 |
| `SRC-WEB-M52` | `https://www.mytio2.com/products/m-52/` | M-52 应用与 Sulfate 候选 | Coatings / Printing Inks 候选 |
| `SRC-WEB-M2377` | `https://www.mytio2.com/products/m-2377/` | M-2377 应用与工艺冲突 | 只登记冲突，不授予候选批准 |
| `SRC-WEB-CR901` | `https://www.mytio2.com/products/cr-901/` | CR-901 Specialty 与 Vapor-phase oxidation 候选 | Specialty Materials 与独立工艺候选；受监管用途排除 |

## 5. 14 型号统一摘要

| 型号 | 当前已验证应用 | 一次性批准候选应用 | 当前不映射 | 工艺及状态 | 冲突 |
|---|---|---|---|---|---|
| M-350 | Coatings；Printing Inks | Plastics；Paper | Masterbatch；Specialty Materials | Chloride — `VERIFIED_FOR_PUBLIC_MAPPING` | 新增 Plastics/Paper 不在已批准示例中 |
| M-510 | 无 | Coatings；Plastics；Masterbatch；Printing Inks | Paper；Specialty Materials | Chloride — `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | 无映射冲突 |
| M-896 | 无 | Coatings | Plastics；Masterbatch；Printing Inks；Paper；Specialty Materials | Chloride — `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | 无映射冲突 |
| M-996 | 无 | Coatings | Plastics；Masterbatch；Printing Inks；Paper；Specialty Materials | Sulfate — `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | 与 M-2196 差异继续冻结 |
| M-2196 | 无 | Coatings | Plastics；Masterbatch；Printing Inks；Paper；Specialty Materials | Sulfate — `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | 与 M-996 差异继续冻结 |
| M-895 | 无 | Coatings | Plastics；Masterbatch；Printing Inks；Paper；Specialty Materials | Chloride — `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | 无映射冲突 |
| M-200 | 无 | Plastics；Masterbatch | Coatings；Printing Inks；Paper；Specialty Materials | Chloride — `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | Masterbatch 为 legacy 新增候选 |
| M-108 | 无 | Plastics；Masterbatch | Coatings；Printing Inks；Paper；Specialty Materials | Sulfate — `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | 无映射冲突 |
| M-210 | 无 | Plastics；Masterbatch | Coatings；Printing Inks；Paper；Specialty Materials | Chloride — `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | 无映射冲突 |
| M-340 | 无 | Plastics；Masterbatch | Coatings；Printing Inks；Paper；Specialty Materials | Chloride — `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | 无映射冲突 |
| M-886 | 无 | Plastics；Masterbatch | Coatings；Printing Inks；Paper；Specialty Materials | Chloride — `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | 无映射冲突 |
| M-52 | 无 | Coatings；Printing Inks | Plastics；Masterbatch；Paper；Specialty Materials | Sulfate — `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | 无映射冲突 |
| M-2377 | 无 | 无 | Masterbatch；Specialty Materials | 工艺 — `CONFLICT_HOLD`；不得进 Chloride/Sulfate | Coatings、Plastics、Printing Inks、Paper 均 `CONFLICT_HOLD` |
| CR-901 | 无 | Specialty Materials | Coatings；Plastics；Masterbatch；Printing Inks；Paper | Vapor-phase oxidation — `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL`；不进入 Chloride/Sulfate | 医药/化妆品合规不在本矩阵批准范围 |

逐关系来源、日期、适用范围与冲突以唯一 CSV 为准，不从本摘要反向扩展关系。

## 6. Process 映射专项审计

| Process relation | 当前状态 | 来源 | 建议 |
|---|---|---|---|
| M-350 → Chloride | `VERIFIED_FOR_PUBLIC_MAPPING` | `SRC-M350-APPROVED`、`SRC-G1-APPROVED` | 保持可公开中性分类 |
| M-510 → Chloride | `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | `SRC-PRD`、`SRC-SOP`、`SRC-WEB-M510` | 纳入一次性批准 |
| M-896 → Chloride | `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | `SRC-PRD`、`SRC-SOP`、`SRC-WEB-M896` | 纳入一次性批准 |
| M-996 → Sulfate | `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | `SRC-PRD`、`SRC-SOP`、`SRC-WEB-M996` | 纳入一次性批准；不批准差异 |
| M-2196 → Sulfate | `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | `SRC-PRD`、`SRC-SOP`、`SRC-WEB-M2196` | 纳入一次性批准；不批准差异 |
| M-895 → Chloride | `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | `SRC-PRD`、`SRC-SOP`、`SRC-WEB-M895` | 纳入一次性批准 |
| M-200 → Chloride | `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | `SRC-PRD`、`SRC-SOP`、`SRC-WEB-M200` | 纳入一次性批准 |
| M-108 → Sulfate | `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | `SRC-PRD`、`SRC-SOP`、`SRC-WEB-M108` | 纳入一次性批准 |
| M-210 → Chloride | `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | `SRC-PRD`、`SRC-SOP`、`SRC-WEB-M210` | 纳入一次性批准 |
| M-340 → Chloride | `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | `SRC-PRD`、`SRC-SOP`、`SRC-WEB-M340` | 纳入一次性批准 |
| M-886 → Chloride | `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | `SRC-PRD`、`SRC-SOP`、`SRC-WEB-M886` | 纳入一次性批准 |
| M-52 → Sulfate | `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | `SRC-PRD`、`SRC-SOP`、`SRC-WEB-M52` | 纳入一次性批准 |
| M-2377 → process | `CONFLICT_HOLD` | `SRC-PRD`、`SRC-TEMPLATE`、`SRC-WEB-M2377` | 继续不渲染；不得进入两 Process 页 |
| CR-901 → Vapor-phase oxidation | `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` | `SRC-PRD`、`SRC-SOP`、`SRC-WEB-CR901` | 纳入一次性批准；保持在 Chloride/Sulfate 聚合之外 |

如果 P1 获批，标准 Process 聚合候选为：

- Chloride：M-350、M-510、M-896、M-895、M-200、M-210、M-340、M-886。
- Sulfate：M-996、M-2196、M-108、M-52。
- 独立 specialty process：CR-901 → Vapor-phase oxidation，不进入两张标准 Process 聚合页。
- M-2377：无公开工艺。

## 7. 冲突清单

| Conflict ID | 对象 | 已观察冲突 | 当前决定 | 解冻所需 |
|---|---|---|---|---|
| `CF-2377-APP` | M-2377 应用 | legacy 页面同时把 Plastics 列为 Key Application，又在同页把 Plastics/Masterbatch 写为不推荐；并混合 Coatings、Inks、Paper 定位 | Coatings、Plastics、Printing Inks、Paper 全部 `CONFLICT_HOLD` | 当前批准 TDS 或技术 owner 对逐应用的明确决定 |
| `CF-2377-PROC` | M-2377 工艺 | legacy 页面写 Chloride，但 PRD、Template 与已批准 Gate 1 明确冻结工艺 | `CONFLICT_HOLD`；不进入 Process 聚合 | 当前批准 TDS 或技术 owner 的明确工艺决定 |
| `CF-996-2196-DIFF` | M-996 / M-2196 差异 | 两个 legacy 页面公开的宽泛应用、工艺和可见指标高度重合，无法证明选择差异 | 两个型号可各自批准 Coatings/Sulfate；差异、比较、排序继续 `CONFLICT_HOLD` | 经批准的差异表、表面处理/分散/耐候/体系测试或技术 owner 决定 |
| `CF-M350-SCOPE` | M-350 新增应用 | 已批准示例只授权 Coatings 与 Printing Inks；legacy 产品页另列 Plastics，legacy 首页另列 Paper | Plastics、Paper 作为候选集中等待批准 | 用户技术批准或当前 TDS |

## 8. 建议公开矩阵

此矩阵只有在用户批准 A1 后生效；生效后仍只输出中性 `Grade to Review`，不输出排序、性能理由或等同关系。

| Application | 建议可公开 Grade set | 数量 | 明确排除 |
|---|---|---:|---|
| Coatings | M-350、M-510、M-896、M-996、M-2196、M-895、M-52 | 7 | M-2377 继续冻结 |
| Plastics | M-350、M-510、M-200、M-108、M-210、M-340、M-886 | 7 | M-2377 继续冻结 |
| Masterbatch | M-510、M-200、M-108、M-210、M-340、M-886 | 6 | 不把 finished masterbatch 当作供应产品；M-2377 不映射 |
| Printing Inks | M-350、M-510、M-52 | 3 | M-2377 继续冻结 |
| Paper | M-350 | 1 | M-2377 继续冻结 |
| Specialty Materials | CR-901 | 1 | 不公开医药、化妆品或市场合规保证 |

该建议矩阵共有 25 条公开关系：2 条现有 verified + 23 条待一次性批准。所有 application route 仍受各自 Page ID / route key / live 状态门禁；关系获批不等于 URL 已上线。

## 9. 对既有 2 RENDER / 19 DO_NOT_RENDER 的影响

### 9.1 保持不变

- `SEL-COAT-M350`：继续 `RENDER`。
- `SEL-INK-M350`：继续 `RENDER`。
- M-2377 聚合冻结规则：继续 `DO_NOT_RENDER`，在新矩阵中拆为四条 `CONFLICT_HOLD` 和两条 `DO_NOT_MAP`，公共行为不变。

### 9.2 用户批准后可由 DO_NOT_RENDER 转为 RENDER 的既有 18 条

| 既有关系 | 批准后建议 |
|---|---|
| M-510 → Coatings | 中性 Grade to Review |
| M-896 → Coatings | 中性 Grade to Review |
| M-996 → Coatings | 中性 Grade to Review；无差异说明 |
| M-2196 → Coatings | 中性 Grade to Review；无差异说明 |
| M-895 → Coatings | 中性 Grade to Review |
| M-200 → Plastics | 中性 Grade to Review |
| M-108 → Masterbatch / Plastics | 两条独立中性关系 |
| M-210 → Masterbatch / Plastics | 两条独立中性关系 |
| M-340 → Masterbatch / Plastics | 两条独立中性关系 |
| M-886 → Plastics / Masterbatch | 两条独立中性关系 |
| M-52 → Printing Inks / Coatings | 两条独立中性关系 |
| CR-901 → Specialty Materials | 中性 Grade to Review |
| Paper → M-350 | 中性 Grade to Review |

### 9.3 新增、原 21 条审计未覆盖的 5 条候选

- M-350 → Plastics。
- M-510 → Plastics。
- M-510 → Masterbatch。
- M-510 → Printing Inks。
- M-200 → Masterbatch。

这 5 条不会自动加入既有 Gate 1 baseline；只有用户批准 A1 后，才可与上述 18 条一起形成全站共用的 25 条公开矩阵。

## 10. 一次性用户技术批准表

总控已于 2026-08-30 复审通过。当前 `A1-APPLICATION-MATRIX`、`P1-PROCESS-MATRIX`、`H1-M2377`、`H2-M996-M2196` 均为 `PENDING_USER_DECISION`；用户最终决定前，23 条候选关系继续 `DO_NOT_RENDER`。建议用户只做以下一次统一决定，不逐条往返：

| Decision ID | 一次批准内容 | 推荐决定 | 批准后的治理结果 |
|---|---|---|---|
| `A1-APPLICATION-MATRIX` | 批准第 8 节 23 条候选应用关系，与 2 条既有 verified 共同形成 25 条全站共用中性映射 | `APPROVE_AS_NEUTRAL_PUBLIC_MAPPING` | 23 条由 pending 升为 `VERIFIED_FOR_PUBLIC_MAPPING`；不得附带性能、排名、差异或保证 |
| `P1-PROCESS-MATRIX` | 批准第 6 节 11 条常规型号工艺候选及 CR-901 的 Vapor-phase oxidation | `APPROVE_PROCESS_CLASSIFICATION` | Chloride 8、Sulfate 4、CR-901 独立 specialty process；M-2377 除外 |
| `H1-M2377` | M-2377 应用与工艺 | `KEEP_CONFLICT_HOLD` | 公共目录继续只显示名称与批准 URL；应用、工艺、推荐、差异不渲染 |
| `H2-M996-M2196` | M-996 与 M-2196 的差异、排序和选择理由 | `KEEP_CONFLICT_HOLD` | 两者可共享 Coatings/Sulfate 映射，但不得公开无证据差异 |

建议用户批准语句：

> 批准 A1 应用矩阵与 P1 工艺矩阵作为全站共用的中性技术关系；H1 M-2377 与 H2 M-996/M-2196 差异继续冻结。

## 11. 批准后的同步边界

若用户批准，后续应由总控另行授权并同步：

1. 为现有 Gate 1 Evidence Audit 建立新版本或批准增量记录，不回写覆盖已批准 V0.1 历史。
2. Products Selector 与 Applications 推荐数据使用同一 relation ID 和同一批准矩阵，不各自维护第二份映射。
3. Route 未 live 时只批准关系，不渲染不可用链接或依赖行动承诺。
4. M-2377、M-996/M-2196 差异保持独立硬门禁。
5. Gate 5 视觉状态不因本专项自动改变；任何内容状态或视觉更新必须另行授权。
6. 本专项不创建 14 个型号子页或 5 个 Application 子页成果，不进入 Gate 6/7 或开发。

## 12. 自检清单

- [x] 14 个型号各有 6 条应用关系，共 84 条且 relation ID 唯一。
- [x] 六个应用各覆盖 14 个型号。
- [x] 四个允许状态之外无其他 current status。
- [x] 每条 CSV 记录都有来源路径、来源类型、日期、适用范围、冲突和批准前公开行为。
- [x] PRD、SOP、关键词表没有被当作单独技术证明。
- [x] mytio2.com 没有被当作本项目当前技术证明，也未复制其正文。
- [x] M-2377 应用与工艺冲突单列且未推断解冻。
- [x] M-996/M-2196 仅共享宽泛映射候选，差异继续冻结。
- [x] Process 映射覆盖全部 14 型号及 CR-901 独立工艺。
- [x] 明确列出对既有 2 RENDER / 19 DO_NOT_RENDER 的影响。
- [x] 候选关系在用户批准前全部 `DO_NOT_RENDER`。
- [x] 未改变 PRODUCT-000 Gate 5 状态，未进入 Gate 6/7。
- [x] 未创建子页成果，未操作 `D:\16Wordpress_nextjs`。

## 13. 审查与版本记录

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.1 | 2026-08-30 | 建立 14×6 唯一关系 CSV、14 型号摘要、Process 审计、来源清单、冲突清单、建议公开矩阵和一次性用户批准表 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW`；未批准公开 |
| V0.1 self-verification | 2026-08-30 | 关系、状态、来源、旧基线影响、Process、冻结与治理交叉验证 71 PASS / 0 FAIL；CSV 经表格运行时导入为 A1:M85，公式错误扫描 0 命中，上下半表各完成一次视觉检查 | 提交总控复审；候选仍不得公开 |
| V0.1 project-control review | 2026-08-30 | 总控独立复验确认 84 条关系完整且唯一，状态计数、候选来源、Process 矩阵与冻结边界均通过 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；A1/P1/H1/H2 待用户决定；23 条候选继续 `DO_NOT_RENDER` |
