# Poland Gate 9 定向复验 V0.2

2026-09-07。Review ID：**PL-G9-RECHECK-02**。依据用户“D16已经修复。”及既有复验授权，独立复核 D16 V0.2。结论：**F01/F02 在指定本地实现关闭；E01 定向隔离证据已补齐；E02/E03 与 Applications 依赖仍开放，Gate 9 未整体通过/关闭。**

## 对象和继承

批准组合继续为 [Manifest V0.22](../MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.22.md)所指 Gate 6 包、B V0.2、C V0.4及批准完整视觉。原问题见 [PL-G9-REVIEW-01](MARKET-EU-PL_GATE9_READ_ONLY_REVIEW_V0.1.md)。当前工作流 V3.2、治理细则 V1.4 的新增常设关闭授权仅覆盖 Gate 3/4/6，不改变 Gate 9 批准方式。没有修改正文、事实或阶段合同。

被审代码为 D16 `codex/poland-development`，base `c2764e6138aa0dc37d1f6cab04bc1ae39f45aecb` 加未提交 **51 文件快照**；本轮独立重算全部匹配。Malaysia 构建 `.next-poland-g9` / `GjJdupnweqs0MK5nxZvnV`，URL `http://127.0.0.1:3015/markets/poland/`。当前响应引用的 14 项静态资源与磁盘相等。A/B 分别为 3017 / `2em7Cq2F5qlxEtZgH5FYw`、3018 / `NWKVDMtM13HNNtf5aMDrP`；独立核对三站响应 ID 及各自 12 项回执资源，均匹配。生产模式本地构建不等于生产部署。

相比旧快照，生产变化集中在 EN/MS Layout 的 Malaysia 条件字体、共享字体源、Global Chrome 和 Cookie 样式/组件；其余新增/变化主要为开发测试。Poland 正文、CMS/DTO、receiver 的旧快照内源身份未变，但运行构建已变，因此本轮重新读取 CMS、HTTP及实际共享界面。D23 未实施 CMS 修改、开发测试、构建或真实表单发送。

## 逐项处置

| ID | 本次证据及判断 | 当前状态 |
|---|---|---|
| PL-G9-F01 | 独立查看 1440/768/390 全页、两端打开菜单及三端 Cookie：Inter、深蓝单列菜单、compact 顶部 RFQ、Cookie 正常大小写和排版、Footer 字号已恢复；源码继续共用 owner | **CLOSED — 指定环境实现复验** |
| PL-G9-F02 | 独立 DOM/截图及实际键盘焦点确认共享 RFQ、焦点与 Cookie 边框使用 #008078。三端可见控件宽高均≥44 | **CLOSED — 指定环境实现复验** |
| PL-G9-E01 | 独立 GET 三站，Malaysia 正常，A/B Poland 规范路径 404，响应没有 Poland 标题/ID；三站构建已绑定。读取开发六异常状态的原始 HTML、GraphQL、ledger和缓存记录：missing/no-scope/wrong-scope/multiple-scopes/draft/malformed 均拒绝，无批准正文 fallback，恢复后正常；逐份 HTML 哈希匹配 ledger。当前 CMS 正向恢复独立核对一致 | **本页/本地三站定向证据缺口关闭**。异常写入及缓存失效由 D16 执行，D23 审核原件而非亲自重演；不扩展为全仓所有路由或生产隔离通过 |
| PL-G9-E02 | 当前 RFQ/DOC 的校验、失败保留、重试与明确成功 JSON 为开发浏览器截获模拟，providerAccepted/inboxConfirmed 均 false。历史 DOC 接受证据已恢复出处和源码关联，但实际当前账户/配置等价仍无证据；RFQ 真实 receiver 阻塞仍开放 | **OPEN / NOT_VERIFIED**。模拟行为局部可采纳，不能关闭真实接收要求；不得重复消耗 DOC 已执行的一次真实测试授权 |
| PL-G9-E03 | 原生 zoom 方法源码使用 chrome.tabs.setZoom(2)，固定 outerWidth 1440，innerWidth 1424→712、DPR 1→2、visual scale 1，支持真实缩放而非 resize。可是实际打开的 cookie-native-200.png 为纯白图，全页图右侧文字明显截断，无法证明完整可读及 Cookie 状态 | **OPEN — 缩放视觉证据需补正**。需提供同一实际 zoom 状态下完整可读页面/弹窗图及几何、焦点记录，解释采集异常；不将截图异常直接判为页面实现缺陷。hover 的开发实际操作及源码可支持局部，D23 未独立执行 hover；真机/其他引擎/屏幕阅读器仍未验证 |
| PL-G9-I01 | 当前 Applications 仍 404；用户已确认在开发 | **KNOWN_DEPENDENCY_IN_DEVELOPMENT**，保留入口与现有 owner |

缩放截图核对：Cookie 图 712×452，RGB 各通道极值均为 (255,255)，即全部纯白；全页图 712×3051，右侧可见文字被截断。JSON 断言通过不能覆盖原始图像反证；原图完整保留，不用裁剪补造有效证据。

## 12 条接受条件的当前去向

| 条件 | 复验结论 |
|---|---|
| PL-G9-01 | **PASS**：当前 CMS→API→初始 HTML，五模块正文及动作逐项一致，全文与批准 B 一致 |
| PL-G9-02 | **PASS（指定三端）**：实际完整页面、文字/按钮/Logo和共享视觉已复验，无观察到的横向越界与小于44px控件；真实 zoom 另列03 |
| PL-G9-03 | 菜单/Cookie 开关、焦点、背景隔离局部 **PASS**；完整 zoom 视觉及适用未测范围 **NOT_VERIFIED**，E03开放 |
| PL-G9-04 | 当前目标 HTTP/身份正常，入口与字段源未变；上轮真实导航语义可按影响范围继承；真实 receiver 必要证据 **NOT_VERIFIED** |
| PL-G9-05 | 当前 Documents/Hub 目标身份正常，页面合同和源未变；既有导航/基数语义继承；历史 DOC 接受保留，当前账户关联 **NOT_VERIFIED** |
| PL-G9-06 | 13目标中12为正确owner的200，Applications 404；完整导航条件尚未满足 |
| PL-G9-07 | **PASS**：当前精确 metadata/Schema、干净及 query URL 再读一致，不把旧 HTML 直接挂新版本 |
| PL-G9-08 | 本地 noindex/robots/sitemap 保护 **PASS**，最终生产配置保持未验证及发布控制 |
| PL-G9-09 | 共享组件组装/法律链接/Cookie局部 **PASS**，F01/F02关闭；原生产 Consent/Privacy 控制保持 |
| PL-G9-10 | **PASS（本次定向本地矩阵）**：独立三站HTTP及经审核的开发异常/CMS/cache原件共同支持；没有宣称独立重演数据修改或全仓证明 |
| PL-G9-11 | **NOT_VERIFIED**：真实 RFQ 接收及当前 DOC 环境关联不足，允许后置生产事项按原合同保留 |
| PL-G9-12 | 独立 Home/1440、UK/768、Privacy/390 Cookie开关、背景隔离、焦点回归 **PASS**；所需关联 E02/E03仍开放，不能整体关闭 |

独立菜单初始焦点为 Close；反向进入顶部 RFQ，前向回 Close；Escape 回 Menu。Cookie 初始 Close，反向到 Read Cookie Policy，Escape 回 Cookie Settings。旧菜单没有顶部 RFQ 时的首尾记录不直接套用新顺序。三页共享回归已保存实际逻辑宽度，均与1440/768/390一致。

## 证据与下一步

- 独立 ACTUAL_RUNTIME：[HTTP/CMS/身份](gate9-v0.2/http-content-identity-evidence.json)、[三站及原始HTML审计](gate9-v0.2/cross-site-independent.json)、[浏览器操作](gate9-v0.2/interaction-evidence.json)、同目录 runtime/menu/cookie 截图与 dom JSON。
- 开发原件副本：`gate9-v0.2/developer/`，保留 receipt、snapshot、绑定、isolation/cache/runtime/shared-visual/native-zoom/receivers 的原始日期与执行者。模拟 receiver 分类为 **LOCAL_SIMULATION**，缩放/隔离为开发 **ACTUAL_RUNTIME**，不是本轮 D23 亲自执行。
- [证据索引](gate9-v0.2/evidence-index.json)保存哈希与类别；源码检查为 SOURCE_INSPECTION，批准图为 STATIC_VISUAL 对照。

下一步仅请 D16 补正 E03 的真实 zoom 可视证据，并由 receiver owner 给出 E02 当前环境关联及真实接收的可执行处理路径。已有 F01/F02 不重复返修；Applications 按原任务继续。保留 PL-DEP-02/03/04/06和最终生产索引条件；Gate 9 继续 READ_ONLY_QA_IN_REVIEW，Gate 10 未授权。此复验结果依既有“发送D16任务”授权交回同一任务，不扩大真实业务提交授权。

发送确认：本轮已通过 send_message_to_thread 成功交回 D16 **00Con**，任务 `01a07a66-3c4a-75a2-9df4-648942742f9e`，工具返回同一任务 ID、isError=false；待剩余补证回执，不代表其已完成。
