# Gate 8→Gate 9 当前17页接收与验收准备控制 V1.0

日期：2026-09-08。Control ID：`G8G9-ACTIVE17-READINESS-20260908-01`。

状态：`USER_AUTHORIZED_PREPARE_AND_ACCEPT_WHEN_GATE8_SUBMITS / INTAKE_READY / NOT_GATE9_CLOSED`。

用户先要求“现在有很多Gate8在执行开发，准备接受gate8的结构，进行验收”，切换模型后又要求“继续”。本记录据此完成当前17页的Gate 8→9接收准备，并授权在准确Gate 8结果交回后开展独立只读验收。它不把尚未交回的开发标记为完成，也不授权D16代码修改、真实对外表单提交、合并、部署、发布、DNS或索引。Gate 9整体关闭仍按原用户批准方式处理。

## 1. 当前接收范围

下表中的17个Gate 6包已于2026-09-08重新计算SHA-256，17/17与各自Gate 8授权记录一致。每页仍以当前Manifest导航的批准组合为准；本控制只建立接收与验收入口，不复制或修改正文、视觉、URL、事实和机器语义。

### A. 四个Market页面：已有首轮Gate 9结论，等待定向修复回执

| Page ID / URL | Gate 6包 | 当前Manifest | 接受条件 | 当前接收模式 |
|---|---|---|---|---|
| `MARKET-EU-ES` / `/markets/spain/` | `pages/markets/spain/06_handoff/MARKET-EU-ES_GATE6_HANDOFF_PACKAGE_V0.1.md` | `pages/markets/spain/MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.17.md` | `ES-G9-01–12` | `TARGETED_RECHECK_PENDING_GATE8_RETURN`；沿用`ES-G9-F01…F04` |
| `MARKET-IN-001` / `/markets/india/` | `pages/markets/india/06_handoff/MARKET-IN-001_GATE6_HANDOFF_PACKAGE_V0.1.md` | `pages/markets/india/MARKET-IN-001_CURRENT_GATE_BASELINE_MANIFEST_V0.16.md` | `IN-G6-AC01–12` | `TARGETED_RECHECK_PENDING_GATE8_RETURN`；沿用`IN-G9-F01…F04` |
| `MARKET-EU-NL` / `/markets/netherlands/` | `pages/markets/netherlands/06_handoff/MARKET-EU-NL_GATE6_HANDOFF_PACKAGE_V0.1.md` | `pages/markets/netherlands/MARKET-EU-NL_CURRENT_GATE_BASELINE_MANIFEST_V0.15.md` | `NL-G9-AC-01–12` | `TARGETED_RECHECK_PENDING_GATE8_RETURN`；沿用`NL-G9-F01` |
| `MARKET-EU-BE` / `/markets/belgium/` | `pages/markets/belgium/06_handoff/MARKET-EU-BE_GATE6_HANDOFF_PACKAGE_V0.1.md` | `pages/markets/belgium/MARKET-EU-BE_CURRENT_GATE_BASELINE_MANIFEST_V0.15.md` | `BE-G9-AC01–12` | `TARGETED_RECHECK_PENDING_GATE8_RETURN`；沿用`BE-G9-F01…F03` |

准确首轮结论及统一返修输入继续使用：

- `pages/markets/06_handoff/MARKET_FOUR_PAGE_GATE9_ACCEPTANCE_CONTROL_V0.1.md`
- `pages/markets/06_handoff/MARKET_FOUR_PAGE_GATE9_RETURN_TO_GATE8_V0.1.md`

本组不得另开首轮验收或重新编号。新回执先锁定新commit、运行身份、共享变化与影响范围，再复验原Finding及相邻风险；可证明未受影响的旧证据按原日期和范围继承。

### B. `00Con`四页：等待首次Gate 8完成回执

| Page ID / URL | Gate 6包 / SHA-256 | 当前Manifest | 接受条件 | 当前接收模式 |
|---|---|---|---|---|
| `MARKET-BR-EN` / `/markets/brazil/` | `BR-EN-G6-HANDOFF-02` / `d8b7c2e7…ad6b18a` | `pages/markets/brazil/MARKET-BR-EN_CURRENT_GATE_BASELINE_MANIFEST_V0.13.md` | `BR-EN-G9-01…12` | `FIRST_ACCEPTANCE_PENDING_GATE8_RETURN` |
| `MARKET-BR-PT` / `/pt-br/markets/brazil/` | `BR-PT-G6-HANDOFF-02` / `f1be33c0…ba41b15` | `pages/markets/brazil/MARKET-BR-PT_CURRENT_GATE_BASELINE_MANIFEST_V0.13.md` | `BR-PT-G9-01…12` | `FIRST_ACCEPTANCE_PENDING_GATE8_RETURN` |
| `PRODUCT-PROC-CL` / `/products/chloride-process-titanium-dioxide/` | `CL-G6-HANDOFF-03` / `f8962402…494061a` | `pages/products/chloride-process/PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.26.md` | `CL-G9-01…18` | `FIRST_ACCEPTANCE_PENDING_GATE8_RETURN` |
| `DOC-COO` / `/documents/certificate-of-origin/` | `COO-G6-HANDOFF-04` / `41a8f87d…f1eb9788` | `pages/documents/certificate-of-origin/04_planning/DOC-COO_CURRENT_GATE_BASELINE_MANIFEST_V0.16.md` | `COO-G9-01…15` | `FIRST_ACCEPTANCE_PENDING_GATE8_RETURN` |

开发接收任务：`00Con`，thread `01a07a66-3c4a-75a2-9df4-648942742f9e`。Gate 8目前只登记为开发中；接收依据为`docs/architecture/GATE8_BR_CL_COO_FOUR_PAGE_AUTHORIZATION_AND_DISPATCH_V1.0.md`及配套回执JSON。

### C. `00My开发2`九页：等待首次Gate 8完成回执

| Page ID / URL | Gate 6包 / SHA-256 | 当前Manifest | 接受条件 | 当前接收模式 |
|---|---|---|---|---|
| `RES-TRADE-EU` / `/resources/eu-titanium-dioxide-anti-dumping-duty/` | `RES-TRADE-EU-G6-HANDOFF-01` / `bb1b44d4…021ad` | `pages/resources/eu-trade/RES-TRADE-EU_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md` | `RES-TRADE-EU-G9-AC01…AC14` | `FIRST_ACCEPTANCE_PENDING_GATE8_RETURN` |
| `RES-TRADE-UK` / `/resources/uk-titanium-dioxide-anti-dumping-investigation/` | `RES-TRADE-UK-G6-HANDOFF-01` / `b2093299…ff2c59` | `pages/resources/uk-trade/RES-TRADE-UK_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md` | `UK-G6-AC01…AC13` | `FIRST_ACCEPTANCE_PENDING_GATE8_RETURN` |
| `RES-TRADE-IN` / `/resources/india-titanium-dioxide-anti-dumping-duty/` | `RES-TRADE-IN-G6-HANDOFF-01` / `5fa99b70…e0e9` | `pages/resources/india-trade/RES-TRADE-IN_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md` | `RES-TRADE-IN-G9-AC01…AC12` | `FIRST_ACCEPTANCE_PENDING_GATE8_RETURN` |
| `RES-TRADE-BR` / `/resources/brazil-titanium-dioxide-anti-dumping-duty/` | `RES-TRADE-BR-G6-HANDOFF-02` / `9d0b24b5…ac592` | `pages/resources/brazil-trade/RES-TRADE-BR_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md` | `BRTRADE-G9-01…13` | `FIRST_ACCEPTANCE_PENDING_GATE8_RETURN` |
| `APP-COAT` / `/applications/titanium-dioxide-for-coatings/` | `APP-COAT-G6-HANDOFF-01` / `0ed6c224…f915` | `pages/applications/coatings/APP-COAT_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md` | `APP-COAT-G9-AC01…AC13` | `FIRST_ACCEPTANCE_PENDING_GATE8_RETURN` |
| `APP-PLAS` / `/applications/titanium-dioxide-for-plastics/` | `APP-PLAS-G6-HANDOFF-01` / `30b1a564…f9c0d` | `pages/applications/plastics/APP-PLAS_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md` | `APP-PLAS-G9-AC01…AC14` | `FIRST_ACCEPTANCE_PENDING_GATE8_RETURN` |
| `APP-MB` / `/applications/titanium-dioxide-for-masterbatch/` | `APP-MB-G6-HANDOFF-01` / `fc8f2535…c7c` | `pages/applications/masterbatch/APP-MB_CURRENT_GATE_BASELINE_MANIFEST_V0.11.md` | `APP-MB-G9-AC01…AC14` | `FIRST_ACCEPTANCE_PENDING_GATE8_RETURN` |
| `APP-INK` / `/applications/titanium-dioxide-for-printing-inks/` | `APP-INK-G6-HANDOFF-01` / `fe8769f9…014c` | `pages/applications/printing-inks/APP-INK_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md` | `APP-INK-G9-AC01…AC13` | `FIRST_ACCEPTANCE_PENDING_GATE8_RETURN` |
| `APP-PAPER` / `/applications/titanium-dioxide-for-paper/` | `APP-PAPER-G6-HANDOFF-01` / `c50e1287…f1fa` | `pages/applications/paper/APP-PAPER_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md` | `APP-PAPER-G9-AC01…AC15` | `FIRST_ACCEPTANCE_PENDING_GATE8_RETURN` |

开发接收任务：`00My开发2`，thread `01a07e6a-546d-7532-aa06-02d2bffd5eed`。Gate 8目前只登记为开发中；接收依据为`docs/architecture/GATE8_TRADE4_APPLICATION5_AUTHORIZATION_AND_DISPATCH_V1.0.md`及配套回执JSON。

## 2. Gate 8回执的最低接收结构

每次回执必须能从一个主入口或其明确引用中解析以下字段。缺项只阻止依赖该字段的验收条件；其余范围继续接收和核验。

```yaml
gate8_return_id: stable id
dispatch_id: original Gate 8 dispatch
site_scope: tio2-my
pages:
  - page_id: exact registered id
    gate6_package: exact package id/path/hash
    acceptance_ids: unchanged Gate 6 ids
source_identity:
  repository: exact D16 repository/root
  worktree: exact path
  branch: exact branch
  base_commit: full commit
  final_commit: full commit
  dirty_state: clean or exact uncommitted snapshot/diff identity
runtime_identity:
  url: directly accessible route or base URL
  environment: local/preview/other exact type
  build_id: exact build/deployment identity
  commit_binding: evidence that runtime serves final_commit
  data_mode: WordPress/CMS, fixture, seed, or other exact source
implementation_mapping:
  cms_api_next: content and field path to rendered result
  changed_files: page and shared changes
  shared_consumers: affected pages/sites and regression disposition
verification:
  commands_and_results: actual results with date and environment
  acceptance_mapping: each applicable AC -> result/evidence/unverified reason
  visual_and_interaction: 1440/768/390 plus applicable states
  scope_isolation: query/route/cache/menu/SEO/form/media coverage
  evidence_index: durable paths
open_items:
  implementation_findings: confirmed defects
  evidence_gaps: missing proof
  dependencies: owner, impact, and closure evidence
  release_conditions: separately identified
rollback: exact implementation rollback location/method
```

只给分支名、测试数量、HTTP 200、截图目录或“开发完成”不能形成完整接收。没有准确运行版本时，可以完成源码、静态证据和合同映射检查，但相关运行条件必须记为`NOT_VERIFIED`。

## 3. 接收与验收顺序

1. **按实际完成事件接收。** 任一开发批次或其中可独立验收的页面先交回，就先锁定并验收；不等待17页全部完成。
2. **先验身份，再验页面。** 先核对dispatch、包hash、commit/dirty状态、运行Build和数据来源，避免把开发截图或其他端口冒充指定实现。
3. **共享变化一次建立影响面。** 同一commit里的Global Chrome、Consent、EN/BM布局、缓存、数据投影或共享动作只建立一个准确差异与消费者清单；每页仍证明自己的组装和行为。
4. **逐页覆盖全部接受条件。** 使用`PASS / FAIL / NOT_VERIFIED / NOT_APPLICABLE`，每项都关联原ID、实际观察、证据和未测范围。发现一项问题后继续其余覆盖。
5. **问题按责任返回。** 实现偏离交Gate 8；内容/事实/合同冲突交原owner并同步Gate 6影响；共享问题交共享owner；环境和外部接收缺口保留准确层级与关闭证据。
6. **定向复验。** 新commit先核对变化和运行身份，再复验原Finding及相邻影响；有依据的未变证据可以继承，不重做整套验收。
7. **Gate 9决定单独处理。** 实现必修清零且本轮必验条件具备后，向用户提交可直接判断的页面/批次结论。Gate 9通过不启动Gate 10或发布。

## 4. 三批的实际接收策略

| 批次 | 首个有效触发 | 验收组织 |
|---|---|---|
| 四个Market定向复验 | Gate 8提交沿用原Finding ID的新commit、共享处理决定和可访问运行身份 | 先复验`BATCH-G9-F01/F02`与Spain两项实现偏离，再按各页未验证条件补齐；不重开首轮 |
| `00Con`四页 | 开发回执包含至少一个页面的准确commit、运行入口和AC映射 | 可按开发顺序`BR-EN → BR-PT → Chloride → COO`接收；共享身份只采集一次，页面结论分别保存 |
| `00My开发2`九页 | 开发回执可区分Trade四页与Application五页的实现及共享影响 | 同一commit先做共享/runtime/scope层，再按Trade与Application两个家族逐页验收；局部完成可先交回，不把一页阻塞扩为九页阻塞 |

## 5. 当前专项硬边界

- `RES-TRADE-BR`只接受V0.2包；历史V0.1不得实施。PT-BR支持链接必须保持批准目标，不能以隐藏、禁用、改链或fallback规避未就绪路由。
- `MARKET-BR-PT`保持`PROVISIONAL_ROUTE`；只有批准路由真实live、自canonical且双向返回成立时，才可验证reciprocal `en↔pt-BR` alternate。
- `PRODUCT-PROC-CL`必须核对八个Grade的Page ID、型号、position、clean URL和批准摘要五元组，以及可见列表与ItemList一致性。
- `DOC-COO`保持`PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED`；`COO-G9-15`必须取得同一合同测试的RED→GREEN证据及完整开发身份。
- `APP-PLAS / APP-MB / APP-INK / APP-PAPER`保持`PROVISIONAL_URL`，验收不能把可访问性自动解释为最终路由批准。
- 四个Trade Resource页在验收与首次发布前分别核对当前官方来源、公开复核日期和批准范围；事实变化返回内容owner，不由开发或Gate 9静默改写。
- 四个Market复验继续使用现有稳定Finding；共享Global Chrome、Consent和EN/BM布局变化必须取得原owner/偏差/消费者回归闭环或由Gate 8拆除未经批准变化。
- 真实表单发送、provider接受、最终收件、账户绑定和生产配置分别取证。当前授权没有增加真实对外提交次数。

## 6. 报告与证据放置

首次验收按页面现有正式目录保存，通常为`pages/<family>/<page>/07_qa/`；已有`05_review/`或其他当前目录合同继续继承，不迁移历史。每页使用一个当前问题台账，批次共同问题只记录一次并在页面报告引用。

正式证据索引至少记录：证据ID、原件路径、采集者与日期、候选及实际版本、环境与数据模式、视口/状态或请求关联、证明范围，以及`ACTUAL_RUNTIME / STATIC_VISUAL / SOURCE_INSPECTION / LOCAL_SIMULATION`类别。截图保存后必须实际打开核对，不以尺寸、hash、测试断言或缩略图代替目视。

## 7. 当前停止点

本控制已使17页具备统一接收结构。四个Market页等待Gate 8定向修复回执；其余13页等待首次完成回执。收到准确结果后可直接进入相应只读验收，不再重复询问本次接收与验收启动权限。任何页面在结果交回前均不标记Gate 8完成或Gate 9在审；Gate 9关闭、Gate 10及发布相关操作保持原权限。

