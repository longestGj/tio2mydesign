# MARKET-EU-BE Gate 9 独立只读验收 V0.1

日期：2026-09-08。Review ID：`BE-G9-ROA-20260908-01`。验收对象：`MARKET-EU-BE` / `/markets/belgium/` / `site_scope=tio2-my`。

结论：**`PROJECT_CONTROL_REVIEWED / GATE9_NOT_PASS / CHANGES_OR_EVIDENCE_REQUIRED`**。

本轮对精确开发commit完成了独立只读的身份、源码、合同、开发证据和图像原件检查。总控复核确认该commit包含未在交回中取得原共享owner确认与受影响消费者闭环的Global Chrome、Consent和EN/BM布局修改，因此`BE-G9-AC12`为`FAIL`；其余11项因缺少可独立访问的准确运行对象或相应状态证据而为`NOT_VERIFIED`。因此不能签署`READ_ONLY_QA_APPROVED`，也不能声明买家完整路径已成立。

## 1. 对象、权限和方法

| 项目 | 本轮锁定值 |
|---|---|
| Gate 9授权 | `G9-MARKET-FOUR-20260908-01`；用户要求对四个Country Market页面验收 |
| 当前Manifest | [V0.14](../MARKET-EU-BE_CURRENT_GATE_BASELINE_MANIFEST_V0.14.md)；Gate 1–4/6已关闭，Gate 8返回已登记 |
| Gate 6批准包 | [BE-G6-HANDOFF-01](../06_handoff/MARKET-EU-BE_GATE6_HANDOFF_PACKAGE_V0.1.md)，实算SHA-256 `d63382757c6fc12eb2f1a423371050e32ddd1605f4f59700245633b569e2d55c` |
| 批准视觉 | `BE-G4-COMPLETE-20260907-02` / `BE-G4-FREEZE-20260907-02` / V1.1；HTML SHA-256 `9e583749...c9aa3` |
| 开发对象 | `C:/Users/longe/.codex/worktrees/bfe8/16Wordpress_nextjs`，branch `codex/market-four-gate8`，commit `2c97fe19b56f14e12c6e27daa7fd3c9a49207570`，tree `f067a48b9883c03c8b035b26692b46b9b942ea3a` |
| 开发状态 | HEAD与目标commit一致，工作树clean；base `c2764e6138aa0dc37d1f6cab04bc1ae39f45aecb` |
| Gate 8输入 | [统一开发回执](../../06_handoff/MARKET_FOUR_PAGE_GATE8_IMPLEMENTATION_RETURN_V0.1.md)及D16中该commit内的验证报告、runtime matrix和四张Belgium图片 |
| 本轮实际运行 | 未取得。只读探测3015/3017/3018为404，3021/3022为502；没有端口返回目标页面200 |
| 禁止动作 | 未运行D16测试、构建或服务；未修改代码/CMS；未执行真实RFQ或Documents提交 |

使用Gate 9 Agent V0.3、运行实现核验V0.2、Gate 9方法配合V0.2、布局与交互核验V0.8及页面合同一致性V0.3。开发自检只作输入；静态图、源码和测试源码观察没有被升级为本轮独立运行证据。

诊断原件：[acceptance-readback.json](gate9-v0.1/acceptance-readback.json)。

## 2. 源码和静态证据已经证明的范围

精确commit中的Belgium合同SHA-256为`be02916d90924e5f3e08c8d0ed5b22c2fde30ca36aab1dcd62fb01bd7d6df29d`。独立读取确认：

- Page ID、URL、语言和scope正确；五个模块顺序为Hero → Product/origin → Application context → Documents → Quote。
- H1、可见正文、COO准确句、禁止扩张边界、12个实际可点击正文链接和RFQ/DOC参数与Gate 6映射一致。
- RFQ正文入口仅传`destination_country=Belgium`与`source_page_id=MARKET-EU-BE`；共享Header/Footer RFQ保持无市场预填。
- Documents入口传来源/market identity，接收解析不会把Belgium写进company Country/Region，也不会自动选择Grade或document type。
- DTO要求唯一`tio2-my`、publish、准确Page ID/path和逐字一致payload；错scope、错身份或漂移时fail closed。
- 元数据源码含准确Title、Meta、Canonical、`noindex,nofollow`、`WebPage`和`BreadcrumbList`；没有页面级图片、日期、Product、Offer、LocalBusiness或FAQ Schema。

这些结论属于`SOURCE_INSPECTION`。由于SSR页面当前不可访问，它们不能单独关闭要求实际初始HTML、公开响应、查询变体、缓存和错误分支的条件。

## 3. V1.1视觉与焦点修复核对

Gate 9实际打开了D16中的`belgium-1440.png`、`belgium-768.png`、`belgium-390.png`和`belgium-390-menu-open.png`，复算hash与runtime matrix一致。三张全页图分别为1440×3730、768×4200和390×5565；模块顺序、无图分支、Navy/white/teal体系、按钮层级、卡片转换和Footer总体对应批准V1.1，未从原件观察到正文遗漏或横向裁切。

但这组图不能关闭V1.1焦点修复：

1. 四张图均带可见的Next开发指示器；390图中指示器遮到下一节标题开头。它更像采集环境痕迹而不是已确认的生产代码缺陷，但说明这些图不是干净的生产等价Buyer Clean证据。
2. 批准V1.1对BE-04内联`Product Hub`和`quotation request`使用44px行高、6px内边距、`outline-offset:-3px`及相邻标点保持，并有三视口正常/hover/focus原件。
3. 当前实现只提供通用`.main a:focus-visible { outline:3px solid #008078; outline-offset:4px; }`，内联链接为`inline-flex`，没有Belgium专属的内嵌轮廓或标点保持。CSS不同本身不等于失败，但它使V1.1已关闭的碰撞/裁切风险必须在真实实现中重验。
4. Gate 8 E2E只测正文链接宽高不低于44px、Mobile Menu Close初始焦点和Escape恢复；没有实际聚焦这两个内联链接，也没有记录其轮廓、邻文碰撞、标点可读性或三视口几何。开发证据目录中没有Belgium实现焦点状态图。

因此`BE-G9-AC02/03`保留`NOT_VERIFIED`；不能用“存在`:focus-visible`规则”或Gate 4原型PASS推导开发实现已通过。

## 4. 十二项接受条件

| ID | 结论 | 本轮证据与未验证范围 |
|---|---|---|
| `BE-G9-AC01` | `NOT_VERIFIED` | 合同JSON、模板源码及已打开的开发截图支持准确正文、五模块和无内部状态；未独立取得clean URL的SSR初始HTML。 |
| `BE-G9-AC02` | `NOT_VERIFIED` | 三端开发原图hash、尺寸和目视总体对应V1.1；原图含开发指示器，且不是本轮准确运行的独立采集，不能关闭真实几何、hover/focus和完整Buyer Clean。 |
| `BE-G9-AC03` | `NOT_VERIFIED` | 源码有通用焦点样式，Menu开发测试覆盖局部；BE-04两条已修复链接没有实现焦点原件或运行几何，全页键盘顺序、Footer、Cookie和隐藏面焦点也未独立操作。 |
| `BE-G9-AC04` | `NOT_VERIFIED` | 12个正文anchor的href和Page ID静态映射正确；未在准确运行实例逐一点击并核对最终URL、owner内容、scope和返回路径。 |
| `BE-G9-AC05` | `NOT_VERIFIED` | RFQ参数和接收端可编辑字段源码成立，Gate 8曾自测首个入口可编辑；未独立覆盖三个RFQ来源、买家已改值保护、返回/重入及空/无效/过期上下文。 |
| `BE-G9-AC06` | `NOT_VERIFIED` | DOC解析源码保持company Country/Region、Grade、types中立；未独立操作一Grade+多types、supplementary Grades、Other-only、验证与恢复。 |
| `BE-G9-AC07` | `NOT_VERIFIED` | 本轮未获准真实对外提交，也没有可访问的本地运行用于无外发失败模拟；RFQ/DOC有效、无效、timeout、error、ambiguous/non-JSON及retry没有独立实现证据。provider接受和邮箱收件继续分层。 |
| `BE-G9-AC08` | `NOT_VERIFIED` | 元数据/Schema源码和Gate 8的SSR自检记录符合合同；未独立读取clean/query/preview实际head、公开JSON-LD、生产配置或sitemap响应。 |
| `BE-G9-AC09` | `NOT_VERIFIED` | 已打开390 Menu图，源码消费共享Chrome/Logo/Consent且无Terms；未独立操作完整Tab/Shift+Tab/Escape/breakpoint、Cookie Settings重开、焦点恢复、背景隔离及真实配置。 |
| `BE-G9-AC10` | `NOT_VERIFIED` | DTO、GraphQL、cache tag、webhook和revalidation源码显示scope约束；未独立执行正确/错/缺scope、same slug、warm/cold/invalidation及七面反向跨站运行核验。 |
| `BE-G9-AC11` | `NOT_VERIFIED` | 可见合同和机器输出构造仅含批准Malaysia→Belgium与COO语义，开放依赖在回执中保留；没有实际公开表面和六项依赖的独立运行/owner readiness全链证据。 |
| `BE-G9-AC12` | `FAIL` | 精确commit、base、tree、clean worktree、65-file diff、CMS/API/render映射和单commit回退可定位；但交回把实质共享修改概括为复用，缺原owner决定、准确偏差和受影响消费者回归，见F03。 |

统计：`PASS=0`，`FAIL=1`，`NOT_VERIFIED=11`，`NOT_APPLICABLE=0`。一个FAIL来自共享交回/来源问题；没有把`NOT_VERIFIED`改名为发布条件来放行。

## 5. 当前Finding台账

### `BE-G9-F01` — V1.1内联焦点修复未在实现中取得有效证据

| 字段 | 内容 |
|---|---|
| 条件 | `BE-G9-AC02`、`BE-G9-AC03`，并影响`BE-G9-AC09`完整键盘结论 |
| 类别 / 严重度 | `EVIDENCE_GAP / BLOCKING_GATE9_ACCEPTANCE`；当前不是已确认代码缺陷 |
| 位置 | BE-04第三段的`Product Hub`与`quotation request`；1440/768/390键盘焦点 |
| 预期 | 实际键盘到达；轮廓清晰；不裁切、不碰邻文、不遮标点；目标至少44×44；正反向顺序成立 |
| 已见 | 批准V1.1原型焦点原件通过；实现源码改用通用外置轮廓；Gate 8没有聚焦目标或提供状态图/几何，开发全页图还带Next指示器 |
| Owner | Gate 8提供准确commit可访问运行对象；Gate 9独立操作与判定。若出现实际碰撞/裁切，再由Gate 8定向修复 |
| 关闭条件 | 在绑定`2c97fe19…`或后续明确修复commit的可访问实例，Gate 9实际键盘聚焦两条链接并检查1440/768/390正常与焦点对照、轮廓/邻文/标点/44px几何，同时完成相邻Menu/Footer/Cookie焦点回归 |

### `BE-G9-F02` — 准确候选运行对象不可访问，买家链路和运行隔离无法独立验收

| 字段 | 内容 |
|---|---|
| 条件 | `BE-G9-AC01`、`BE-G9-AC04–11`，并限制`AC02/03`运行结论 |
| 类别 / 严重度 | `ENVIRONMENT_AND_EVIDENCE_GAP / BLOCKING_GATE9_ACCEPTANCE` |
| 实见 | 本轮3015/3017/3018返回404，3021/3022返回502；均未提供目标页面。开发报告和测试源码不是本轮独立运行 |
| Owner | Gate 8 /运行环境owner提供与commit、CMS数据、scope和构建模式可关联的只读实例；各Conversion/共享owner补其负责层级证据 |
| 关闭条件 | Gate 9可只读访问准确候选，完成SSR/head、12链接最终owner、RFQ/DOC无外发交互、错误恢复、Chrome/Consent和七面scope/缓存覆盖。真实provider/邮箱层只有在已有授权和可关联证据下关闭；本报告不要求或授权重新发送 |

### `BE-G9-F03` — 共享owner改动随页面批次交回，但缺少授权来源与受影响消费者闭环

| 字段 | 内容 |
|---|---|
| 条件 | `BE-G9-AC12`，并限制`BE-G9-AC09`的共享Chrome/Consent结论 |
| 类别 / 严重度 | `HANDOFF_AND_SHARED_SCOPE_FAILURE / BLOCKING_GATE9_ACCEPTANCE` |
| 预期 | 本页消费原共享owner维护的Global Chrome、Consent与EN/BM布局；共享缺陷由Gate 8协调原owner，并在交回中登记准确差异、批准来源、受影响消费者和回归 |
| 实见 | 准确commit把compact breakpoint从900px改为1101px、重做compact menu并加入RFQ、把Cookie Settings改为原生`dialog`并调整焦点/滚动、修改共享Header/Footer和EN/BM字体绑定；统一回执只写复用共享能力，没有原owner决定、偏差台账或消费者处置 |
| Owner | Global Chrome / Consent / EN-BM布局原owner与Gate 8 |
| 关闭条件 | 原owner接受绑定准确commit的共享diff并提供EN/BM与其他受影响消费者、768/390 Menu、Cookie及焦点/恢复的定向回归；或Gate 8拆除/分离未经批准的共享变化并交回新准确commit。复验沿用本Finding ID |

当前确认的共享交回必修：**1**（F03）。另有**2个证据/环境缺口**（F01/F02）。F01在实际复验确认缺陷前不要求凭推测修改页面；先提供准确可访问实例和焦点状态。

## 6. 仍开放的依赖与停止点

- `BE-G6-D01–D06`继续按原owner保留。准确开发身份可追溯，但AC12因共享修改缺少owner/偏差/消费者闭环而未通过；页面运行、目标路由、RFQ/DOC接收、共享Chrome/Consent、设备和release层没有整体关闭。
- 当前探测失败不能证明目标路由在commit中不存在，也不能被开发截图替代。应由Gate 8提供同一commit或新明确commit的可访问只读运行对象。
- 真实RFQ、Documents provider或邮箱发送没有授权，本轮准确停在只读源码、原件检查和无业务写入的界面验收边界。
- 本报告不修改Manifest、Status或Index，不授权Gate 10、合并、部署、生产写入、发布、DNS或索引。

总控结论：接收本报告为Belgium Gate 9首轮独立审查，保持`CHANGES_OR_EVIDENCE_REQUIRED / GATE9_NOT_PASS`；向Gate 8定向索取可访问候选与BE-04焦点复验证据，并处理共享差异，取得后沿用`BE-G9-F01–F03`做定向复验。
