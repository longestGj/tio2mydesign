# Poland Gate 9 独立只读验收 V0.1

2026-09-07。Review ID：**PL-G9-REVIEW-01**。结论：**定向修正并补证，Gate 9 未通过、未关闭**。记录状态：`DRAFT_FOR_PROJECT_CONTROL_REVIEW`；不是用户批准或发布许可。

本轮已逐项扫描全部 12 条接受条件。五模块正文、真实 CMS→API→初始 HTML 链、主要买家跳转及页面 SEO 精确值已有独立运行证据。共享视觉存在两项明确偏差；接收方、隔离负向场景及部分无障碍覆盖尚未满足完整验收证据要求。Applications 404 按用户“Application的还在开发”登记为已知开发中依赖，不作为 Poland 新增实现缺陷。

## 1. 输入、授权及准确对象

- 页面：`MARKET-EU-PL`，EN，`/markets/poland/`，`site_scope=tio2-my`；主词 `titanium dioxide supplier poland`。
- 授权：[PL-G9-START-01](../05_review/MARKET-EU-PL_GATE9_USER_AUTHORIZATION_V0.1.md)。D23 审查者未编写被审 Gate 8 实现或修复；只读审查独立于 D16 开发自检。
- 批准输入：[Manifest V0.21](../MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.21.md)、[Gate 6 批准记录](../05_review/MARKET-EU-PL_GATE6_USER_APPROVAL_AND_CLOSURE_V0.1.md)、[交付包 V0.1](../06_handoff/MARKET-EU-PL_GATE6_HANDOFF_PACKAGE_V0.1.md)，包 SHA-256 `18f1f5f2fe1b30a5233b8be3836de6d9c94e70a298dbebe14f5089f065063fdc`。继承 B V0.2、C V0.4、原批准完整视觉和当前共享合同，不另造正文。
- 实现：D:/16Wordpress_nextjs，`codex/poland-development`，基础 commit `c2764e6138aa0dc37d1f6cab04bc1ae39f45aecb` **加未提交实现**。采用[开发快照副本](gate9-v0.1/developer-implementation-snapshot.json)的 35 文件组合，不把基础 commit 当作完整实现版本。
- 运行：[本地 Poland](http://127.0.0.1:3015/markets/poland/)，构建目录 `.next-poland-http`，Build ID `y0X9yLdjyKOuGbj62JYsz`。实际 HTTP 中出现该 ID；响应引用的 13 项静态资源逐字节匹配磁盘构建，35 个源码文件匹配快照。该证据绑定本次采集的运行组合，不代表之后仍未变化。
- 数据：本地 WordPress `http://localhost:8080/graphql`，只读查询 `GetMalaysiaPolandMarketPage / malaysiaPolandMarketRecordJson`；实际记录 `market-eu-pl-18515`，publish，仅 `tio2-my`，modifiedGmt `2026-09-07T06:27:33`。真实本地 CMS 数据，不是本地 JSON 页面替身；生产账户与配置未验。
- 方法源：Gate 9 Agent V0.2、runtime-implementation-verification V0.1 及其 Gate 9 配合参考；共享布局/合同核验能力仅用于适用运行对照。方法源仍未运行注册；本次使用不自动批准方法全部能力。准确文件身份见[证据清单](gate9-v0.1/evidence-index.json)。
- 本轮仅读取源、HTTP/API及浏览器界面，保存 D23 文档与证据。未执行 D16 测试/构建、修改 CMS、真实提交或发送其他任务消息。

## 2. 接受条件逐项结果

各行来源均为交付包同名 PL-G9 条件；版本、环境、执行者共用第 1 节。复合条件保留子结果，不用局部 PASS 替代整项通过。

| 条件 | 预期与实际观察 | 判定及未验证范围 | 证据 |
|---|---|---|---|
| PL-G9-01 | 正确 CMS 记录→API→初始 HTML；五模块全部正文及动作逐项相等，全文与批准 B 一致；源码真实调用 CMS，未以本地正文回退 | **PASS**，仅当前正常记录链。缺失/错误记录分支列 G9-10，不宣称亲测 | E01、E02、E06 |
| PL-G9-02 | 1440/768/390 全页至 Footer；正文双列→单列，长限定文字及按钮完整，无观察到的裁切、重叠或横向越界；可见控件宽高均≥44；H1 为 54/44/36，生产 Logo 文件一致 | 正文几何局部 **PASS**；共享视觉 **FAIL**：F01/F02。不能签整页视觉通过 | E03、E04、E06 |
| PL-G9-03 | 实际键盘操作菜单/Cookie，首焦点、首尾循环、Escape 关闭及触发器焦点恢复成立；菜单/Cookie 打开时 AX 背景隔离。焦点功能色偏离批准值 | 交互局部 **PASS**；色值 **FAIL**（F02）；真实 200% UI zoom、独立 hover、适用其他设备/辅助技术 **NOT_VERIFIED**（E03缺口） | E03、E04、E05 |
| PL-G9-04 | 两个 RFQ 入口真实抵达正确页面；未知型号选项可选择；初始没有 Poland 公司位置或型号预填；批准多型号说明仍指向 Additional Requirements | 导航/字段语义 **PASS**；接收方必要提交、失败恢复及当前 receiver 证据 **NOT_VERIFIED**，见 E02缺口 | E05、E07 |
| PL-G9-05 | Request Documents、Document Hub 真实可达；单选 M350、勾选两类文件后摘要为一型号/两文件；无自动 COO/公司位置；Hub 说明受控申请。未知型号在 Poland 走 RFQ，而非绕过申请表必需型号 | 入口/基数及可见语义 **PASS**；历史 provider 接受保留，当前环境继承关联尚未验证，不宣称新接收或邮箱收件 | E05、E07 |
| PL-G9-06 | 7 个正文动作逐一实际导航；13 个唯一链接目标核对 HTTP、H1、Canonical，12 个为正确 owner 的 200，Applications 为 404 | 已就绪目标 **PASS**；完整导航条件尚未满足。I01 是用户确认开发中依赖，待 APP-000 完成后复验 | E01、E05 |
| PL-G9-07 | 初始/渲染后 Title、Description、Canonical、en 一致；WebPage/BreadcrumbList 引用合同中的共享实体 ID，无 Product/Offer/虚构本地企业；query 变体没有污染这些字段 | **PASS**，本次两个 URL 及公开页面输出范围；不扩展到未访问跨站环境 | E01、E02、E05 |
| PL-G9-08 | 本地 head noindex,nofollow；robots Disallow:/；sitemap 未列 Poland；Canonical 仍为批准正式 URL | 预览索引保护 **PASS**；最终生产配置 **NOT_VERIFIED**，保留 Gate 10 控制。当前实现硬编码 noindex，发布前须由开发核对环境切换 | E01、E02、E06 |
| PL-G9-09 | 实际消费共享 Header/Footer；当前 Markets、固定 RFQ、3 法律链接及 Cookie 功能成立，无 Terms/CURRENT；Logo 正确；Cookie 文案使用无可选 analytics 模型 | 结构/语义局部 **PASS**；共享视觉 **FAIL**，F01/F02。生产 Consent/Privacy 配置依原 owner 开放项 | E03–E07 |
| PL-G9-10 | 当前正向 scope/路由/CMS/SEO 有证据；源码校验正确 scope、发布态及严格 payload。开发缓存记录包含 CMS 修改→页面更新→恢复及错误 scope 拒绝 | **NOT_VERIFIED**（完整条件）：缺独立跨站 HTTP、缺失/错误 scope 与 CMS 异常分支运行组合；源码和开发测试不替代，见 E01缺口 | E01、E06、E07 |
| PL-G9-11 | 区分路由可达、receiver、provider 接受、实际邮箱和生产配置；沿用 RFQ 当前阻塞记录与 CONV-DOC V0.4 历史局部结论 | **NOT_VERIFIED**（当前必要接收证据/继承关联）。允许后置账户、邮箱及法律生产控制单列，不一律升级为所有页面缺陷 | E07、E02缺口 |
| PL-G9-12 | 对本次共享 Cookie 改动在 Home/1440、UK/768、Privacy/390 实际执行开关/焦点回归，局部成立；开发回执列共享 robots/Cookie 变化，接受条件和依赖全覆盖登记 | 局部共享回归 **PASS**；隔离、receiver、zoom 等关联覆盖 **NOT_VERIFIED**，全部 DEP 未整体关闭 | E05–E07 |

三端使用逻辑浏览器视口；390 图不按 780 物理像素误判。滚动条使 DOM 可用宽度与全页截图捕获宽度存在差值，未将其或批准允许的自然换行差异作为缺陷。正文比对剔除 CSS 面包屑分隔符差异；原始诊断文件保留，校正后相等不是修改网页所得。

## 3. 必修 Finding 与关闭条件

### PL-G9-F01 · P2 · 共享视觉未兑现批准组合

关联 PL-G9-02/03/09/12；owner：Home/Global Chrome 开发负责人，Poland 集成消费。

复现：768 或 390 打开 Poland，打开 Menu，再打开 Footer 的 Cookie Settings。批准菜单为深蓝单列下拉，compact Header 保留 RFQ；实见白色全屏菜单，768 为双列，顶部 RFQ 随菜单打开不再显示（菜单末端 RFQ 仍可用）。批准 Cookie 为 Inter、正常大小写标题；实际呈现 Arial、全大写及不同字号/间距，Footer 亦有字体排版差异。对照是本页批准完整视觉及共享适配源；本轮未找到覆盖该批准组合的视觉变更决定。

证据：[批准 768 菜单](../04_planning/gate5-v0.1/approval_core/menu-open-focus-768.png)、[实际 768 菜单](gate9-v0.1/menu-768.png)、[实际 390 菜单](gate9-v0.1/menu-390.png)、[批准 Cookie](../04_planning/gate5-v0.1/approval_core/cookie-settings-focus-768.png)、[实际 Cookie](gate9-v0.1/cookie-768.png)、E03/E06。影响为未按批准完整视觉交付，不声称菜单不可用。

关闭：共享 owner 恢复批准表现，或提交具体变更并取得有效批准及合同同步；Poland 继续消费同一共享组件。新版本核验三端完整组装、两端菜单及 Cookie 状态并回归受影响共享页。不得为 Poland 复制分叉。

### PL-G9-F02 · P2 · 共享功能色与批准增补不一致

关联 PL-G9-02/03/09；owner：共享视觉/交互开发负责人。

复现：查看 Header/Footer RFQ、键盘聚焦菜单或 Cookie 控件。当前批准 CTA/accessibility 增补要求功能绿色 `#008078`；实际共享 RFQ 使用 `#006a63`，共享焦点环为 `#ffbf47`，Cookie 边框亦未使用批准功能值。正文 CTA 已使用 `#008078`。证据 E03/E04/E06；这是明确色值合同偏差，不以未经测量的低对比结论代替。

关闭：共享组件使用当前批准功能色，保留可见焦点、44px 触控与实际键盘操作；提交相应 source/build 身份和三端状态，独立复验。无需改正文或新增视觉方案。

## 4. 补证与依赖，不混作新缺陷

| ID | 缺口/状态 | owner、必要交回与停止点 |
|---|---|---|
| PL-G9-I01 | **KNOWN_DEPENDENCY_IN_DEVELOPMENT**；用户已确认 Applications 正在开发，当前 /applications/ 404 | APP-000 完成批准目标后核验身份及实际导航；Poland 保留链接。未就绪不得完整发布，不因这一项抹去 Poland 局部通过 |
| PL-G9-E01 | 查询/路由/缓存/菜单/SEO/表单/媒体的完整跨 scope 及异常 CMS 运行覆盖不足 | D16 提供准确环境与负向回执，覆盖正确/缺失/错误 scope、跨站同路径/适用同 slug、无跨 scope fallback，并提供只读可访问结果。不得仅交单元测试数量；D23 不写夹具 |
| PL-G9-E02 | RFQ 当前 receiver 必要状态未验证；CONV-DOC 历史 provider 接受与本次运行环境的适用关联不足 | 接收 owner 给当前代码/配置/环境及原授权证据的关联，RFQ 按合同补适用成功/失败/重试证据。保留 DOC 原 provider accepted，不自动再次发送；实际邮箱、生产账户/Key及法律配置按原后置条件保留 |
| PL-G9-E03 | 实际 200% 浏览器 UI zoom 与独立 hover 未验；精确浏览器版本、其他引擎、真实设备/屏幕阅读器未取证 | D16 提供真实 zoom 方法及可复核结果，按本页合同和风险说明必要覆盖。此次快捷键尝试未改变 innerWidth/DPR/visual scale，故未冒充 zoom；720px viewport 也不等价。不是无依据要求全设备矩阵 |

PL-DEP-01 部分目标已验证，余 Applications；DEP-02 receiver 保持开放；DEP-03 历史接受保留，生产与邮箱条件开放；DEP-04 法律/Consent 组装有局部证据，生产项开放；DEP-05 CMS 正向及 SEO 已验，隔离/生产索引仍开放；DEP-06 键盘和三端已验，其余适用覆盖未关闭。

## 5. 证据索引与证明边界

完整文件身份、类别及采集元数据见 [evidence-index.json](gate9-v0.1/evidence-index.json)。除明确开发原件及批准对照外，均为 D23 本轮独立只读采集。运行对象共用第 1 节；截图逻辑宽度在文件名中。

| 证据 ID | 类别与路径 | 证明范围 |
|---|---|---|
| E01 | ACTUAL_RUNTIME：[HTTP/API/身份汇总](gate9-v0.1/http-content-identity-evidence.json) | 2026-09-07 07:10 UTC 采集，正文/动作、scope、版本绑定、目标身份、query SEO及索引 |
| E02 | ACTUAL_RUNTIME：[CMS 原始响应](gate9-v0.1/cms-response.json)、[初始 HTML](gate9-v0.1/poland-http.html)、[query HTML](gate9-v0.1/poland-query-http.html)、robots.txt、sitemap.xml | 本地真实数据/公开输出，不是生产证明 |
| E03 | ACTUAL_RUNTIME：gate9-v0.1 下 runtime-1440/768/390.png、dom-1440/768/390.json | 实际全页图及几何、字体、控件、head；独立目视结合 DOM |
| E04 | ACTUAL_RUNTIME：同目录 menu-768/390.png、cookie-1440/768/390.png、focus-1440/768/390.png | 菜单、Cookie、焦点实见状态；截图本身不单独证明键盘行为 |
| E05 | ACTUAL_RUNTIME：[交互记录](gate9-v0.1/interaction-evidence.json)、[浏览器 metadata](gate9-v0.1/browser-metadata.json)、[控制台](gate9-v0.1/browser-console.json) | 菜单/Cookie 键盘、真实导航、未提交的表单选择、共享回归；控制台该次读取 warn/error 为空，不宣称所有网络时段无错误 |
| E06 | SOURCE_INSPECTION / STATIC_VISUAL：批准 B/C/完整视觉与 approval_core、D16 snapshot 对应源码；批准图只读裁段保存在同目录 approved-*.png | 对照、数据通路、组件消费与静态分支；不可替代异常分支运行证据 |
| E07 | SOURCE_INSPECTION：本轮保存的[开发回执](gate9-v0.1/developer-receipt.md)、[快照](gate9-v0.1/developer-implementation-snapshot.json)；开发 ACTUAL_RUNTIME：[缓存原件副本](gate9-v0.1/developer-live-cache.json) | 开发缓存原记录保留原日期/执行者，未由 D23 重演修改；RFQ/DOC/Legal 当前 Manifest 与其来源按交付包 S07–09读取。历史接收不重标为本轮亲测 |

## 6. 交回及复验次序

先由共享 owner 处理 F01/F02，并由对应 owner 补 E01–E03；Applications 继续既有开发。开发交回精确变更清单、35 文件组合的新版快照或替代可追踪版本、新 Build ID、环境/配置关联及证据。D23 先重新绑定运行身份，再定向复验两项 Finding、关联共享页和补证条件；不变内容只能在身份、环境及影响范围得到证明后继承。

本报告已整理为可直接交给 D16 的反馈，**尚未通过工具发送给其他任务**。当前 Gate 9 仍在审查；本轮不改 Gate 1–6 批准，不签发布、DNS 或索引授权。
