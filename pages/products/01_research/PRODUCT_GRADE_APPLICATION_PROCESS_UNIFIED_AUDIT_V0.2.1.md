# 14 型号应用、工艺与比较关系统一审计 V0.2.1

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| 审计对象 | TiO2 Malaysia 全站 14 型号的 Grade → Application、Grade → Process 与 Grade ↔ Grade Comparison 治理 |
| 唯一关系总表 | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.1.csv` |
| 版本 | V0.2.1 |
| 日期 | 2026-08-30 |
| 文档状态 | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
| 基线继承 | 继承 V0.2 已批准的 25 条中性 Application mapping 与 13 个已验证 Process classification；不改变关系集合 |
| 历史版本 | V0.2 与 V0.1 全部保留，不覆盖、不回写 |
| 本次范围 | 数据治理字段修正、冻结原因统一、比较关系与应用关系解耦 |
| 排除范围 | 新产品研究、竞品研究、视觉、页面、Gate 6/7、代码、CMS、测试、部署、发布及 `D:\16Wordpress_nextjs` |
| 唯一关系总表状态 | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
| 总控批准 | 2026-08-30；独立核验 `14 PASS / 0 FAIL` |
| 批准范围 | 数据治理小版本；25 条 Application 与 13 个 Process 集合不变，不需要再次申请用户技术关系批准 |

## 1. 小版本结论

V0.2.1 不新增、不删除、不降级任何已批准公开关系。它只修正两个治理问题：

1. M-2377 继续作为独立的 product-level evidence hold，Application、Process 与推荐关系均不解冻；
2. M-996/M-2196 的差异问题从 `application_conflict` 拆出，归入独立 Grade ↔ Grade Comparison governance。

### 1.1 Application 行级结果

| 检查项 | 结果 |
|---|---:|
| 型号 | 14 / 14 |
| Application taxonomy | 6 / 6 |
| Grade × Application 关系 | 84 / 84 |
| `VERIFIED_FOR_PUBLIC_MAPPING` | 25 |
| `CONFLICT_HOLD` | 4 |
| `NO_PUBLIC_MAPPING` | 55 |
| Pending 状态 | 0 |

### 1.2 Process 型号级结果

| Process 状态 | 型号数 |
|---|---:|
| Chloride — verified | 8 |
| Sulfate — verified | 4 |
| Vapor-phase oxidation — verified | 1 |
| `CONFLICT_HOLD` | 1：M-2377 |

## 2. 三类关系必须独立治理

| 关系域 | 数据字段 | 当前含义 | 不能被误读为 |
|---|---|---|---|
| Grade → Application | `application_status`、`application_conflict`、`application_public_behavior` | 某型号能否作为某应用的中性 `Grade to Review` 公开映射 | 型号之间的优劣或差异 |
| Grade → Process | `process_status`、`process_conflict`、`process_public_behavior` | 某型号的中性工艺分类是否可公开 | 性能优势或应用适配保证 |
| Grade ↔ Grade Comparison | `comparison_hold`、`comparison_hold_reason` | 两个型号之间是否允许差异、排序、选择理由或替代关系表达 | Application mapping conflict |

Application relation ≠ Comparison relation。后续 AI、CMS 或实现不得因为 M-996/M-2196 不能比较，而把两者已批准的 Coatings 或 Sulfate 基础映射判为冲突。

## 3. Application 基线保持不变

| Application | Verified Grade to Review | 数量 |
|---|---|---:|
| Coatings | M-350、M-510、M-896、M-996、M-2196、M-895、M-52 | 7 |
| Plastics | M-350、M-510、M-200、M-108、M-210、M-340、M-886 | 7 |
| Masterbatch | M-510、M-200、M-108、M-210、M-340、M-886 | 6 |
| Printing Inks | M-350、M-510、M-52 | 3 |
| Paper | M-350 | 1 |
| Specialty Materials | CR-901 | 1 |

总计 25 条。公开行为全部保持 `RENDER_NEUTRAL_MAPPING`，只允许 `Grade to Review` 等中性表达；不得扩展为 Best、Recommended、Ideal、Better than、Equivalent to 或 Replacement for。

M-350 → Paper 保持 V0.2 已确认关系，未修改。

## 4. Process 基线保持不变

### 4.1 Chloride — 8 grades

M-350、M-510、M-896、M-895、M-200、M-210、M-340、M-886。

### 4.2 Sulfate — 4 grades

M-996、M-2196、M-108、M-52。

### 4.3 Specialty Process

CR-901 → `Vapor-phase oxidation`。CR-901 不进入 Chloride 或 Sulfate 聚合。

### 4.4 M-2377

M-2377 → Process 保持 `CONFLICT_HOLD`，`process` 仍为 `UNRESOLVED`，公开行为为 `DO_NOT_RENDER`。它不得进入 Chloride 或 Sulfate 聚合。

## 5. M-2377 product-level evidence hold

### 5.1 当前状态

| Relationship | Status | Public behavior |
|---|---|---|
| M-2377 → Coatings | `CONFLICT_HOLD` | `DO_NOT_RENDER` |
| M-2377 → Plastics | `CONFLICT_HOLD` | `DO_NOT_RENDER` |
| M-2377 → Printing Inks | `CONFLICT_HOLD` | `DO_NOT_RENDER` |
| M-2377 → Paper | `CONFLICT_HOLD` | `DO_NOT_RENDER` |
| M-2377 → Masterbatch | `NO_PUBLIC_MAPPING` | `DO_NOT_RENDER` |
| M-2377 → Specialty Materials | `NO_PUBLIC_MAPPING` | `DO_NOT_RENDER` |
| M-2377 → Process | `CONFLICT_HOLD` | `DO_NOT_RENDER`；不进入 Chloride/Sulfate |

全部冻结原因统一为：

`Awaiting latest approved M-2377 TDS and dedicated technical review.`

`mytio2.com` 的 M-2377 页面只保留为未来专项审查输入，当前不是解冻依据。公共 All Grades 仍只中性显示 M-2377 名称和批准 URL；工艺、应用、推荐、差异与内部状态均不公开。

### 5.2 Open Item

| Item ID | Status | Required evidence | Impact |
|---|---|---|---|
| `R-M2377-TDS` | `OPEN_HARD_GATE` | `Latest approved M-2377 TDS followed by dedicated Application / Process technical review.` | 只阻塞 M-2377 Application、Process 与推荐关系；不阻塞其他 13 个型号或已批准的 25 条公开 Application mapping |

## 6. M-996 / M-2196 Comparison governance

### 6.1 基础关系继续有效

- M-996 → Coatings = `VERIFIED_FOR_PUBLIC_MAPPING`。
- M-996 → Sulfate = `VERIFIED_FOR_PUBLIC_MAPPING`。
- M-2196 → Coatings = `VERIFIED_FOR_PUBLIC_MAPPING`。
- M-2196 → Sulfate = `VERIFIED_FOR_PUBLIC_MAPPING`。

这些基础关系的 `application_conflict` 为 `none`。

### 6.2 独立比较冻结

M-996 与 M-2196 的全部六个 Application 行使用：

- `comparison_hold` = `M996_VS_M2196_DIFFERENTIATION_FROZEN`
- `comparison_hold_reason` = `Base Grade–Application and Grade–Process mappings are approved, but differentiation, ranking, selection rationale and comparative positioning between M-996 and M-2196 remain unsupported and must not render.`

继续禁止公开：技术差异、谁更好、如何选择、排名、优劣比较、formulation-specific selection reason、performance differentiation、equivalent / replacement logic。

其他 12 个型号的两个 comparison 字段为空。

## 7. 公共数据合同

- Application 仅在 `application_status=VERIFIED_FOR_PUBLIC_MAPPING` 且 `application_public_behavior=RENDER_NEUTRAL_MAPPING` 时渲染。
- Process 仅在 `process_status=VERIFIED_FOR_PUBLIC_MAPPING` 时使用相应中性行为；route/live 状态仍是独立门禁。
- `comparison_hold` 非空时，禁止生成型号之间的差异、排序、选择理由、性能比较、等效或替代关系。
- `CONFLICT_HOLD`、`NO_PUBLIC_MAPPING` 与 `DO_NOT_RENDER` 不得产生公开空标签、内部状态或负面适用性结论。
- 本矩阵不是推荐排名，不授权性能、配方、等效、法规、供应、原产地或制造声明。

## 8. V0.2 → V0.2.1 变更

1. M-2377 根据用户决定继续全量冻结，等待最新批准 TDS 与专项审查。
2. 未采用 `mytio2.com` 当前 M-2377 页面信息解冻任何 Application 或 Process。
3. M-996/M-2196 comparison hold 从 Application conflict 中拆出，新增 `comparison_hold` 与 `comparison_hold_reason`。
4. 25 条 verified Application mapping 未改变。
5. Process matrix 未改变。
6. 本次没有新增或删除任何公开 Application mapping。

## 9. 既有门禁影响

| Gate item | V0.2.1 状态 |
|---|---|
| R-002 基础 Application mapping 证据 | V0.2 已批准基线保持不变；本轮不重开 |
| R-003 Route / live 状态 | `OPEN`，不受本轮影响 |
| R-004 冻结技术内容 | `OPEN`；由 M-2377 product hold 与 M-996/M-2196 comparison hold 分域表达 |
| R-M2377-TDS | `OPEN_HARD_GATE` |
| PRODUCT-000 Gate 5 | 不升级、不降级、不修改视觉 |
| Gate 6 / Gate 7 | 未进入 |

## 10. 验收清单

- [x] 84 条 Grade × Application relation 完整。
- [x] `relation_id` 唯一，grade + application 唯一。
- [x] Application 状态为 25 verified / 4 conflict / 55 no-public。
- [x] M-2377 四条 Application conflict、两条 no-public 与 Process conflict 均未解冻。
- [x] M-2377 未进入 Chloride 或 Sulfate 聚合。
- [x] Chloride 8、Sulfate 4、CR-901 Vapor-phase oxidation 1。
- [x] M-996 与 M-2196 的 Coatings/Sulfate 基础关系保持 verified。
- [x] M-996/M-2196 comparison hold 已从 `application_conflict` 中独立。
- [x] 未公开两者差异、排序或选择理由。
- [x] 25 条公开 Application mapping 与 Process matrix 均未改变。
- [x] V0.2 历史文件未覆盖。
- [x] 未修改代码、CMS、页面、视觉或开发目录。

## 11. 审查与版本记录

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.1 | 2026-08-30 | 历史候选与冻结审计 | 历史记录，保留不覆盖 |
| V0.2 | 2026-08-30 | 25 条中性 Application 与 13 个 Process 基础关系获批 | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
| V0.2.1 | 2026-08-30 | M-2377 TDS hard gate；M-996/M-2196 comparison governance 独立字段；关系集合不变 | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
