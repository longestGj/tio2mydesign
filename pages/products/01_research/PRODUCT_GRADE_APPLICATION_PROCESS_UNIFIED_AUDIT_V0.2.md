# 14 型号应用与工艺统一技术关系专项审计 V0.2

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| 审计对象 | TiO2 Malaysia 全站 14 型号 Application / Process 关系 |
| 唯一关系总表 | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.csv` |
| 版本 | V0.2 |
| 日期 | 2026-08-30 |
| 文档状态 | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
| 关系决策状态 | `APPROVED_RELATION_BASELINE` |
| 当前事实基线 | `www.mytio2.com` 当前公开的一方产品内容，仅限其明确表达的 Application / Process 关系 |
| Supersedes | V0.1 的 candidate / pending 证据规则；V0.1 保留为历史审计记录 |
| 唯一关系总表状态 | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
| 批准来源 | 用户 2026-08-30 原 V0.2 命令及最新明确澄清“刚才是我给你的命令，做V0.2” |
| 总控复审 | 2026-08-30 PASS；独立复验 `18 PASS / 0 FAIL` |
| Gate 5 影响 | 无；PRODUCT-000 Gate 5 状态与正式视觉资产均不在本轮修改 |
| 排除范围 | 视觉、14 个产品子页、Application/Process 子页、Gate 6/7、开发、CMS、测试、部署、发布及 `D:\16Wordpress_nextjs` |

## 1. 执行结论

用户已于 2026-08-30 决定：TiO2 Malaysia 的型号—应用和型号—工艺基础关系，以 `www.mytio2.com` 当前公开的一方产品内容为全站共用基线。明确出现且无来源内部冲突的关系可以公开为中性映射，不再以 TDS、应用测试或额外技术 owner 批准作为基础映射的前置条件。

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
| `CONFLICT_HOLD` | 1 |

## 2. 证据治理规则

### 2.1 当前允许用途

`www.mytio2.com` 在 V0.2 中是已批准的一方产品关系基线，可证明其当前页面明确表达且无内部冲突的：

- Grade → Application 中性关系；
- Grade → Process 中性分类。

公开表达只能是 `Grade to Review`、中性工艺标签或同等强度措辞。

### 2.2 不在批准范围

本基线不能自动证明或授权：性能优势、最佳/推荐/理想型号、等同关系、国际品牌等同、排序、配方兼容、耐候或分散优势、法规合规、库存、MOQ、价格、交期、国家可售性、原产地或制造地点。

## 3. 状态与数据模型

### 3.1 Application 字段

`relation_id`、`grade`、`application`、`application_status`、`application_source_id`、`application_source`、`application_source_type`、`application_source_date`、`application_scope`、`application_conflict`、`application_public_behavior`。

### 3.2 Process 字段

`process`、`process_status`、`process_source_id`、`process_source`、`process_source_type`、`process_source_date`、`process_scope`、`process_conflict`、`process_public_behavior`。

Process 是 grade-level attribute，在同一型号的六条应用行中允许重复，但所有 Process 字段必须完全一致。V0.2 不再使用一个 `current_status` 同时表达 Application 与 Process。

### 3.3 状态字典

| 状态 | 适用对象 | 含义 | 公开行为 |
|---|---|---|---|
| `VERIFIED_FOR_PUBLIC_MAPPING` | Application / Process | 当前一方基线明确支持且无来源内部冲突 | Application 使用 `RENDER_NEUTRAL_MAPPING`；Process 使用中性分类 |
| `CONFLICT_HOLD` | Application / Process | `mytio2.com` 内部来源冲突 | `DO_NOT_RENDER` |
| `NO_PUBLIC_MAPPING` | Application | 当前基线没有正向映射 | `DO_NOT_RENDER`；不解释为不适用或不推荐 |

## 4. 正式 Application Matrix

| Application | Verified Grade to Review | 数量 |
|---|---|---:|
| Coatings | M-350、M-510、M-896、M-996、M-2196、M-895、M-52 | 7 |
| Plastics | M-350、M-510、M-200、M-108、M-210、M-340、M-886 | 7 |
| Masterbatch | M-510、M-200、M-108、M-210、M-340、M-886 | 6 |
| Printing Inks | M-350、M-510、M-52 | 3 |
| Paper | M-350 | 1 |
| Specialty Materials | CR-901 | 1 |

总计 25 条。所有集合都是中性候选集合，不代表最佳、推荐、排序或配方适配保证。

## 5. 14 型号摘要

| 型号 | Verified applications | Process | 公开边界 |
|---|---|---|---|
| M-350 | Coatings；Plastics；Printing Inks；Paper | Chloride | 仅中性映射 |
| M-510 | Coatings；Plastics；Masterbatch；Printing Inks | Chloride | 仅中性映射 |
| M-896 | Coatings | Chloride | 仅中性映射 |
| M-996 | Coatings | Sulfate | 与 M-2196 的差异继续冻结 |
| M-2196 | Coatings | Sulfate | 与 M-996 的差异继续冻结 |
| M-895 | Coatings | Chloride | 仅中性映射 |
| M-200 | Plastics；Masterbatch | Chloride | 仅中性映射 |
| M-108 | Plastics；Masterbatch | Sulfate | 仅中性映射 |
| M-210 | Plastics；Masterbatch | Chloride | 仅中性映射 |
| M-340 | Plastics；Masterbatch | Chloride | 仅中性映射 |
| M-886 | Plastics；Masterbatch | Chloride | 仅中性映射 |
| M-52 | Coatings；Printing Inks | Sulfate | 仅中性映射 |
| M-2377 | 无公开映射；四项 conflict | `CONFLICT_HOLD` | 公共目录仅名称与批准 URL |
| CR-901 | Specialty Materials | Vapor-phase oxidation | 不进入 Chloride / Sulfate 聚合；不扩展合规声明 |

## 6. 正式 Process Matrix

### 6.1 Chloride

M-350、M-510、M-896、M-895、M-200、M-210、M-340、M-886。

### 6.2 Sulfate

M-996、M-2196、M-108、M-52。

### 6.3 Specialty Process

CR-901 → `Vapor-phase oxidation`。CR-901 不进入 Chloride Process 或 Sulfate Process 聚合。

### 6.4 M-2377

Process 为 `CONFLICT_HOLD`，不进入 Chloride / Sulfate 聚合，不公开工艺推断。

## 7. 冲突与冻结清单

| Conflict ID | 对象 | 当前决定 | 公共行为 | 是否阻塞其他关系 |
|---|---|---|---|---|
| `CF-2377-APP` | M-2377 Coatings / Plastics / Printing Inks / Paper | `CONFLICT_HOLD`，原因统一为 `mytio2.com internal source conflict` | 四条全部 `DO_NOT_RENDER` | 否 |
| `CF-2377-PROC` | M-2377 Process | `CONFLICT_HOLD` | 不进 Chloride/Sulfate，不显示工艺 | 否 |
| `CF-996-2196-DIFF` | M-996 与 M-2196 差异、排序、选择理由 | 继续冻结 | 不比较、不排序、不说明谁更好 | 否；两者基础 Coatings/Sulfate 关系可公开 |

M-2377 Masterbatch 与 Specialty Materials 为 `NO_PUBLIC_MAPPING`；该状态不产生“不适用”或“不推荐”的公开声明。

## 8. Selector 共用数据合同

- Products Selector、Applications 体系和后续 Process 聚合必须读取同一份批准矩阵，不维护第二套型号关系。
- 六个 Application 选择项均按第 4 节返回中性 `Grade to Review` 集合。
- 任何排序只能采用批准目录顺序或稳定型号顺序，并明确 `display order is not a performance ranking`。
- Route 未 approved + live 时，不渲染目标链接或依赖该目标的行动承诺。
- `Specialty Materials` 是 taxonomy / Selector mapping，不自动产生独立 Application 页面。
- M-2377 不进入 Selector 或标准 Process 聚合。

## 9. V0.1 → V0.2 Crosswalk

| Action | 数量 | 说明 |
|---|---:|---|
| `V01_VERIFIED_RETAINED` | 2 | 既有 M-350 两条 verified 保持 |
| `V01_PENDING_TO_VERIFIED` | 17 | 旧 Gate 1 中已独立列出的候选关系转为 verified |
| `NEW_RELATION_FROM_MYTIO2_BASELINE` | 6 | 新增六条直接关系，不冒充旧 relation 升级 |
| `V01_AGGREGATE_HOLD_SPLIT_AND_RETAINED` | 4 | M-2377 聚合 hold 拆为四条独立 conflict |
| `V01_AGGREGATE_HOLD_SPLIT_TO_NO_PUBLIC_MAPPING` | 2 | M-2377 另外两项保持无公开映射 |
| `V01_NO_PUBLIC_MAPPING_RETAINED` | 53 | 其余不增加正向关系 |

六条 `NEW_RELATION_FROM_MYTIO2_BASELINE`：M-350 → Plastics、M-350 → Paper、M-510 → Plastics、M-510 → Masterbatch、M-510 → Printing Inks、M-200 → Masterbatch。

其中 M-350 → Paper 在 Gate 1 V0.1 只有通用 `SEL-PAPER-ANY`，不是直接 grade relation，V0.2 明确标记为新关系。

## 10. 页面数量与治理边界

六个 Application taxonomy categories 不等于必须创建六个 Application pages。`Specialty Materials` 当前仅作为 taxonomy / Selector mapping；页面数量、Page ID、URL 和 route 状态仍由页面登记册决定。本专项没有新增、拆分或启动任何页面。

## 11. 既有门禁影响

| Gate item | V0.2 状态 |
|---|---|
| R-002 基础 Application mapping 证据 | `RESOLVED_BY_USER_GOVERNANCE_DECISION`，仅限中性关系 |
| R-003 Route / live 状态 | `OPEN`，不受本专项影响 |
| R-004 M-2377 与 M-996/M-2196 冻结 | `OPEN` |
| PRODUCT-000 Gate 5 | 不升级、不降级、不修改视觉资产 |
| Gate 6 / Gate 7 | 未进入 |

## 12. 验收清单

- [x] 14 个型号全部存在。
- [x] 6 个 Application taxonomy 全部存在。
- [x] 84 条 Grade × Application relation 完整且 relation_id 唯一。
- [x] 25 条正常 Application mapping 与用户批准基线一致。
- [x] Coatings 7、Plastics 7、Masterbatch 6、Printing Inks 3、Paper 1、Specialty Materials 1。
- [x] M-2377 四个 Application conflict 与一个 Process conflict 保持冻结。
- [x] Chloride 8、Sulfate 4、CR-901 Vapor-phase oxidation 1。
- [x] CR-901 未进入 Chloride / Sulfate。
- [x] M-996 与 M-2196 基础关系可公开，差异仍未被发明。
- [x] Application status 与 Process status 已分开。
- [x] `CANDIDATE_PENDING_USER_TECHNICAL_APPROVAL` 在 V0.2 基线中为 0。
- [x] `current_status` 已从 V0.2 数据模型移除。
- [x] V0.1 文件未覆盖。
- [x] V0.1 → V0.2 crosswalk 已建立。
- [x] 未创建页面、修改视觉或进入 Gate 6/7。
- [x] 未修改代码、CMS、测试、部署或 `D:\16Wordpress_nextjs`。

## 13. 剩余 Conflict / Blocker

### Conflict

- M-2377 Application / Process：继续冻结，仅阻塞 M-2377 相关公开关系。
- M-996 / M-2196 差异：继续冻结，仅阻塞比较、排序与选择理由。

### Blocker

- 对 V0.2 正常 25 条 Application mapping 与 13 个已验证 Process mapping：无新增技术 blocker。
- 路由上线、视觉同步、开发与发布仍是独立门禁，不由本专项授权。

## 14. 审查与版本记录

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.1 | 2026-08-30 | 历史审计：2 verified、23 pending、4 conflict、55 do-not-map | 历史记录，保留不覆盖 |
| V0.2 | 2026-08-30 | 按用户决定把当前 first-party 内容设为关系基线；形成 25 verified Application、13 verified Process、拆分状态字段并建立 crosswalk | `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
