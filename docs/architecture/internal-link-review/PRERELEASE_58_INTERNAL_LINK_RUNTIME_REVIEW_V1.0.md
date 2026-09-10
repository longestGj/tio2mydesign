# 58 对象预发布内链运行审查 V1.0

## 0. 审查结论

| 字段 | 结论 |
|---|---|
| Review ID | `ILR-PRERELEASE-58-20260909-01` |
| Work type / mode | `INTERNAL_LINK_REVIEW / RUNTIME_REVIEW` |
| Site scope | `tio2-my` |
| 固定运行入口 | `http://127.0.0.1:3100` |
| 固定实现 | local `main` `98c2c573dd090048352fa12415a9cc8eeefc485b` |
| 固定 run / Build | `20260908T162630Z-98c2c573dd09` / `QmeAVzHgLILD56DVWgAww` |
| 固定 CMS SHA-256 | `b1d425d1bd2d291e816cc54581dce5ae02070d945f34f2f55c10bde5c17dd2bd` |
| 专项结果 | `CHANGES_REQUIRED` |
| 发布含义 | 本结果不批准 Gate、部署、发布或索引 |

58/58 个授权对象均已按 D16 清单与 D23 登记身份绑定并实际检查，跳过 0。共享 Header、Mobile Menu、Footer 的目标、顺序、当前状态和站点范围组装通过。当前实质必修有两组，均沿用已有 Finding：

1. `SCT-G9-F02-CONTACT-TARGET`：`/contact/` 仍为 404，实际影响 ABOUT-001 两处与 SYS-404 一处。用户批准的例外只允许本轮预发布测试开始，不把该目标变为发布 PASS。
2. Home `P0-03 — Buyer-visible Home and Global Chrome links are not release-ready`：五个 Application 行动和一个 Process Resource 行动仍以 `role=link aria-disabled=true` 加箭头呈现。它们既不是可用链接，也不是普通信息卡，买家预期仍被中断。

另外三组发布集合依赖必须在准备发布这 58 个对象时关闭：Product Hub 对 14 个 Grade 与两个 Process/三类支持路径的激活、Applications Hub 的 child/Grade/support 路径激活，以及 Resources Hub 从 H0 切换到获批公共 inventory。当前实现对未获 `LIVE_APPROVED` 的目标执行 fail-closed，不能仅凭 200 把这些项误判成实现缺陷；但如果 58 个对象作为一个公开集合发布，不能保持当前未激活状态。

## 1. 范围与覆盖

| 覆盖项 | 登记/应检 | 实检 | 跳过/失败 | 结果 |
|---|---:|---:|---:|---|
| D16 scope 登记对象 | 59 | 59 个身份读回 | 0 | PASS |
| 本轮授权对象 | 58 | 58 | 0 | PASS |
| 明确排除 | CONTACT-001 | 1 | 0 | PASS；不计完成页 |
| 来源页面 GET | 58 | 58 | 0 | 57×200；SYS-404 按设计返回 404 |
| Chromium hydrated DOM | 58 | 58 | 0 | PASS |
| Desktop 共享导航 | 58 | 58 | 0 | PASS |
| Mobile Menu 打开态 | 58 | 58 | 0 | PASS |
| 唯一站内请求目标 | 83 | 83 | 0 | 82×200；`/contact/` 1×404 |

授权集合是 D16 `scope.json` 的原 56 页加 SYS-404、CONV-THANK，共 58 个对象；没有从首页可达集合反推全量。MARKET-BR-PT 的 `pt-BR` 与 LEGAL-PRIV-MS 的 `ms-MY` 是固定清单内的批准本地化对象；英文页面只通过批准的语言/法律关系进入它们，未见意外语言切换。SYS-404 的服务端响应是错误页 shell，故其五个正文行动以浏览器 hydration 后的实际 DOM 为准。

运行身份独立核对为 exact main commit，工作树 clean，页面 Build marker 与任务给定 Build 一致；没有发现候选身份漂移。

## 2. 实际关系清单摘要

Hydrated DOM 共记录 2,343 个链接/链接角色实例：

| 类型 | 实例数 | 处理 |
|---|---:|---|
| 站内页面链接 | 2,100 | 在允许的本地运行域检查目标 |
| 站内 fragment | 122 | 核对目标 fragment；未见缺失 |
| 第三方外链 | 100 | 只读识别，不跟随到未授权站点 |
| `mailto:` | 15 | 只读识别，不触发 |
| 禁用 link role | 6 | 全部位于 HOME-001，见 Home P0-03 |

正文区域包含 425 个站内页面链接实例：422 个落到 200，3 个落到同一个 `/contact/` 404。完整逐实例记录、原 href、解析目标、Page ID、语言、scope 证据、状态及共享导航检查见 `PRERELEASE_58_INTERNAL_LINK_RELATION_INVENTORY_V1.0.json`。

## 3. 必须修复的已有 Finding

### 3.1 `SCT-G9-F02-CONTACT-TARGET` — FAIL / RELEASE BLOCKING

| 来源 | 位置 / 锚文本 | 实见 |
|---|---|---|
| ABOUT-001 | Hero / `Contact Us` | `/contact/` → 308 去尾斜杠 → 404 错误页 |
| ABOUT-001 | Final CTA / `Contact Us` | `/contact/` → 308 去尾斜杠 → 404 错误页 |
| SYS-404 | Recovery panel / `Contact Our Team` | `/contact/` → 308 去尾斜杠 → 404 错误页 |

批准目标就是 CONTACT-001 `/contact/`，所以不能为消除 404 而删除、隐藏、换成 RFQ 或换到其他 scope。责任归总控协调 CONTACT-001 owner 与 Gate 8 消费页实现；这不是 ABOUT-001 或 SYS-404 的 Buyer Copy 改写任务。

关闭条件：CONTACT-001 在同一 `tio2-my` 计划发布集合中取得批准并以 `/contact/` 返回正确身份的可用页面；随后定向复验上面三个实例、redirect/canonical、语言/scope 与错误页恢复路径。`SYS404_CONTACT_DEPENDENCY_PRERELEASE_EXCEPTION_V1.0` 只把该问题标为 `NON_BLOCKING_FOR_PRERELEASE_TEST_START`，不构成发布豁免。

### 3.2 Home `P0-03` — FAIL / OPEN, NARROWED

HOME-001 当前仍有六个无 href 的买家可见 link role：

- `Coatings information →`
- `Plastics information →`
- `Masterbatch information →`
- `Printing inks information →`
- `Paper information →`
- `Read process overview →`

本轮五个 Application 路径和 RES-PROC 路径都实际返回 200，但 D23 当前仍保留 Application provisional URL/public eligibility 与 RES-PROC public eligibility 的独立批准边界。因此这里不能只看到 200 就擅自激活 URL；同样也不能把 `role=link aria-disabled=true` 当成完成的买家路径。

关闭顺序：

1. 总控按当前 Manifest/Registry 对五个 Application URL 与 RES-PROC 公共资格作正式决定；
2. 对已批准目标，Home/Gate 8 将对应行动实现为真实 `<a href>`；
3. 对仍未批准目标，按已有 Finding 改为真正的普通信息内容，去除 link role、禁用语义与箭头，或取得单独内容决定；
4. 在相同或更新的固定候选上复验六个实例及相邻路径。

不得用跨 scope、猜测 URL、Contact 或无关 Hub 代替。

## 4. 计划发布集合必须关闭的依赖

这些项不是本轮新增实现 Finding。当前页面在目标未 `LIVE_APPROVED` 时按合同完整省略链接，运行状态本身符合 fail-closed；它们仍是 58 对象作为公开集合前的必备激活和复验工作。

### 4.1 `PRODUCT-G6-B03` — OPEN / RELEASE DEPENDENCY

PRODUCT-000 当前保留 14 个 Grade 行及 8/5/1 Process 分类正文，但 14 个 `View Grade`、Chloride/Sulfate route cards、Applications/Documents/Markets support cards均未形成链接。14 个 Grade、两个 Process 以及三个 Hub 在本轮运行中均返回 200；14 个 Grade 当前 D23 生命周期仍为 `PREVIEW_ONLY`，`Active Grade=NONE`，所以 200 不能代替公共资格。

若这 14 个 Grade 属于本轮公开集合，必须先由总控/Grade owner完成公共资格与 Gate 10 范围决定，再由 Product Hub 消费 shared readiness：

- 14/14 directory 行与 Selector 结果使用准确 Grade Page ID/URL；
- CR-901 的 specialty row 取得正文入链；
- Chloride/Sulfate 按 2/1/0 原子状态呈现；
- Applications/Documents/Markets 按 3/2/1/0 原子状态呈现。

激活后须定向复验所有 14 个唯一 Grade 目标及各选择器实例。当前没有依据把 `PRODUCT-G6-B03` 关闭。

### 4.2 `APP000-G6-D03` / `D04` / `D05` — OPEN / INTEGRATION DEPENDENCY

APP-000 当前正文只有六个本页 application anchors；五个 child Application CTA、30 个 Grade occurrence 链接与 Products/Documents/Markets 支持卡均未出现。运行中的 30 个 Grade 名称保持普通文字，没有制造推荐关系，符合 ineligible 状态合同。

在把 APP-COAT、APP-PLAS、APP-MB、APP-INK、APP-PAPER、14 个 Grade 与三类 Hub 纳入同一公开集合前，总控须提供各目标当前公共资格。随后 APP-000/Gate 8 必须按原合同激活：

- D03：最多五个准确 child Application CTA；
- D04：逐 occurrence 核对全部 30 条 Grade edge，不能以 14 个唯一目标去重后跳过实例；
- D05：Products、Documents、Markets whole-card 状态。

目标继续未获批准时，现有原子省略可以保留；这时不能声称 58 对象已经形成完整公开内链集合。

### 4.3 `RES-R002`–`RES-R005` — OPEN / PUBLIC INVENTORY DEPENDENCY

RES-000 当前为获批 H0：公开 inventory=0、无 Featured/Latest、无 ItemList。该状态本身 PASS。与此同时，固定 58 集合包含 RES-ORIGIN、RES-PROC、RES-CHEMOURS、RES-R706 与四个 Trade 页面。若这些对象计划一并公开，Resources owner 必须在发布前逐项完成内容、claim、route、freshness 与 public eligibility，然后由 RES-000 从 H0 计算 H2/H3，不得由编辑器手工指定状态。

当前正文入链为 0 的 Resource 内容页包括 RES-CHEMOURS、RES-R706 与 RES-TRADE-UK；它们是公共 inventory 决定时应优先处理的发现性缺口。RES-ORIGIN、RES-PROC、RES-TRADE-EU/IN/BR已有相关 Home、Process 或 Market 上下文入口，但这不替代 Resources Hub 的公共 inventory 决定。

### 4.4 Grade Detail 与 DOC-TDS/DOC-REACH 的条件动作 — PASS NOW / RECHECK AFTER READINESS

14 个 Grade Detail 页面是 `PREVIEW_ONLY`，其 Hero RFQ、Sample、Documents、Market、Application、Process 与 Related Grade 正文动作按合同在目标非 `LIVE_APPROVED` 时省略；当前不把省略写成内链缺陷。公共资格改变时必须复验这些动作。

DOC-TDS 与 DOC-REACH 当前只保留返回 DOC-000 的信息路径，没有 Request Documents 正文行动。两页合同要求 CONV-DOC workflow eligible 时同步激活 Hero/process/final actions，不 eligible 时原子省略。三表单外部 receiver 阻断不属于本专项；当前省略按合同 PASS，receiver 状态改变后必须做定向链接复验。

## 5. 语义与买家路径判断

### 5.1 通过的实际路径

- Shared Chrome：58/58 页面 desktop 与打开后的 Mobile Menu 均按 `Home → Markets → Products → Applications → Documents → Resources → About` 组装；RFQ一致指向 `/request-a-quote/`。当前状态与页面类型匹配，conversion/legal/SYS-404 没有伪造 current。
- Markets：MARKET-000 提供全部十个市场入口；市场子页普遍提供 Product、Application、Documents、RFQ 及适用 Trade Resource 路径，锚文本与目标职责一致。
- Applications：五个应用页从买家应用语境进入已批准 Grade 关系，并提供 Documents、Sample、RFQ；Plastics/Masterbatch 的相互关系语义准确。
- Process：Chloride/Sulfate 页面链接各自批准 Grade 集合、APP-000、CONV-DOC、CONV-RFQ 与 RES-PROC；没有把工艺分类写成 suitability 或排名。
- Conversion：CONV-THANK 的三个行动分别返回 Documents/Sample/RFQ，作为提交后页面无需公共发现入口；本专项未提交任何表单。
- Legal/locales：EN/BM Privacy 与 Cookie 关系符合共享合同；Brazil PT-BR 由相关 Brazil Trade 上下文进入，没有把它冒充 English 市场页。

### 5.2 被中断的关键路径

- Home → Application detail / process comparison：被六个禁用伪链接中断，见 Home P0-03。
- Products → exact Grade：PRODUCT-000 当前没有 Grade action；买家只能从部分 Market/Application/Process 页面绕行，CR-901 没有任何正文入链。
- Applications Hub → Application detail / Grade / support hubs：APP-000 当前没有跨页正文行动，只有 Global Chrome RFQ。
- Resources Hub → Resource article：RES-000 当前 H0，不承担文章发现；如果八个资源页都进入公开集合，需先完成 public inventory 决定。
- About/SYS-404 → Contact：三个实例落到 404，见 `SCT-G9-F02-CONTACT-TARGET`。

## 6. 补内链建议

以下建议不能直接由 Gate 8 自行实现；它们涉及当前合同或公共 inventory 决定，先交总控。

### `ILR58-O01` — Documents guides 发现入口

DOC-TDS、DOC-REACH、DOC-COO 当前正文入链均为 0。DOC-000 的 Gate 7 合同明确把四个 Documentation categories 定义为无 route、无 CTA 的信息卡，所以这不是现有实现 Finding。建议 Gate 2/Gate 6 owner评估一个精简的 `Document guides` 路径，或在相关市场/资源页加入准确的上下文入口；若批准，应明确 Page ID、锚文本、模块位置和 CONV-DOC 的区别，再进入实现。不要把 guide 链接伪装成文件下载或可用性承诺。

### `ILR58-O02` — Resources Hub 发布集合归档

在 RES-R002–R005 关闭后，建议 RES-000 优先纳入当前无正文入链的 RES-CHEMOURS、RES-R706、RES-TRADE-UK，再按同一 approved eligibility 机制纳入其余资源。排序和 Featured/Latest 归属由 Resources owner按 H0–H5 合同决定，本报告不发明排序。

### `ILR58-O03` — Hub 激活后做路径复验，不再全站重扫

Home、PRODUCT-000、APP-000、RES-000 与 CONTACT-001 是本轮变化中心。修复/激活后先定向复验原 Finding、14/30 edge、H-state、三个 Contact 实例和共享消费者；只有共享 resolver、导航或数据范围发生全局变化时才扩展消费者范围。

## 7. 无入口候选解释

按正文链接（排除 Header/Footer、自链接与 fragment）计算，当前正文入链为 0 的九个对象是：GRADE-CR901、DOC-REACH、DOC-TDS、DOC-COO、RES-CHEMOURS、RES-R706、RES-TRADE-UK、CONV-THANK、SYS-404。

- CONV-THANK 是提交后目的页，SYS-404 是错误恢复页：无公共正文入链是有意设计，`NOT_APPLICABLE`。
- GRADE-CR901：由 `PRODUCT-G6-B03` 处理，发布集合前必需。
- 三个 Documents guide：当前合同没有 Hub 入口，属于 `ILR58-O01`，不是实现缺陷。
- 三个 Resource article：由 RES-R002–R005 与 `ILR58-O02` 处理；是否进入 Hub 需 current public eligibility。

不采用固定“每页至少几条链接”或通用点击层级阈值；只按页面职责、批准关系与计划发布集合判断。

## 8. 限制、复用与停止

- 本审查复用 D16 固定 run 的页面/截图/合同自动证据，但独立核对 exact commit、Build、scope 清单、实际 DOM、关键路径和语义；没有混用旧 run。
- 外链与 `mailto:` 只识别，不跟随、不发送；表单只读，不提交。
- 没有修改 D16 代码、CMS、运行环境；没有修改 D23 Page/Manifest/Status/Index。
- Canonical/Schema/sitemap不计为可见内链。
- 此结果覆盖内链专项，不替代完整 Gate 9、Gate 10 或发布验收。

`ILR-PRERELEASE-58-20260909-01 = CHANGES_REQUIRED / READ_ONLY_REVIEW_COMPLETE / RETURN_TO_CONTROLLER`

