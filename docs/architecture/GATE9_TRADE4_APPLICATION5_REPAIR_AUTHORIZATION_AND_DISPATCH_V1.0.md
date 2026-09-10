# Gate 9 Trade 4 + Application 5 返修授权与派发 V1.0

日期：2026-09-08。Dispatch ID：`G9-TRADE4-APP5-REPAIR-20260908-01`。

## 1. 用户决定

- 用户授权原文：`让他返修。`
- 授权对象：Gate 9首轮独立验收退回的Trade Resource四页与Application五页。
- 执行方：Gate 8返修开发任务`gate8_repair_trade4_app5`。
- 状态：`REPAIR_USER_AUTHORIZED / DISPATCHED / DEVELOPMENT_IN_PROGRESS`。

本授权允许在`D:/16Wordpress_nextjs/.worktrees/trade4-app5-gate8`对四项必修Finding做最小范围返修、测试、构建和本地预览补证。它不重开Gate 1–6，不改变已批准页面职责、文案、关键词、URL决定或事实，也不授权Gate 9关闭。

## 2. 绑定基线与返修范围

- branch：`codex/country-editorial-integration`
- implementation：`4fa585bc125c7b8fa926ab66059f4fc6887877f4`
- evidence/HEAD：`58af74dbe44b4ccaafe517d592ecae5d5ff37ef2`
- Gate 9退回控制：`G9-TRADE4-APP5-20260908-01`

返修只处理：

1. `G9-T4A5-F01`：恢复五个Application页的`PROVISIONAL_URL`约束，使其控制Canonical、`og:url`及相关Schema URL资格；不得自行批准或改变最终URL。
2. `G9-T4A5-F02`：由共享route owner使九页批准的`/applications/`目标实际可达；不得隐藏入口、改href或跨scope fallback。
3. `G9-T4A5-F03`：由Market route owner使Brazil英文和葡语批准目标实际可达；保留语言、标签、Page ID和`site_scope=tio2-my`边界。
4. `G9-T4A5-F04`：核对UK批准语义后修复失效的GOV.UK来源。若当前批准源不能确定替代目标，开发只返回拟议URL、官方证据和阻塞说明，不得静默改写正文或来源。

F02/F03若缺少批准页面包，执行方必须报告具体依赖，不得编造页面正文。首轮已通过且未受改动影响的内容、视觉和技术项保持；返修不得扩大到整页重做。

## 3. 回执与复验

执行方须返回新的implementation/evidence commit、clean worktree、Build ID与本地预览入口、逐Finding证据、测试结果、变更文件、回滚方法和仍未验证项。Gate 9收到回执后只复验四项Finding、受影响共享面、对应`NOT_VERIFIED`条件和新候选身份；可证明未受影响的PASS项允许继承。

2026-09-08定向复验发现代码和只读overlay已覆盖F01/F04，但隔离review CMS `127.0.0.1:8186`仍保存旧合同字节。用户返修授权覆盖完成本地可逆验证所必需的隔离环境同步；据此允许Gate 8只在该隔离clone同步APP-COAT provisional、UK批准维护URL及RFQ Brazil source allowlist，并保存前后哈希、字段diff与回滚种子后重做direct-CMS build/runtime。此补证不扩大到生产或远程CMS。

## 4. 授权边界

本授权不覆盖merge、push、部署、生产或远程CMS写入、DNS、发布、sitemap、索引、Gate 10或真实表单/邮件发送。仅允许上一节明确列出的隔离review CMS可逆同步。receiver、物理设备、非Chromium、screen reader及跨站冷/热缓存等尚未具备环境或授权的证据继续保持`NOT_VERIFIED`，不得伪造关闭。

## 5. Gate 9定向复验反馈

2026-09-08，用户明确要求“你去给Gate8反馈”。总控已向原Gate 8开发任务`00My开发2`（thread `01a07e6a-546d-7532-aa06-02d2bffd5eed`）送达定向复验结论：`F01/F03/F04 CLOSED`，`F02 OPEN / SHARED_ROUTE_OWNER_APPROVAL_BLOCKER`。消息绑定implementation `4a7e170b0bba90ce8428b8f23788c15e3e64dde4`、evidence `293231dee11c9b66bfa8b31938c6987d7fa585ad`和Build `nueBC1PmlOz7I74G5G0oP`，并要求保持候选、不得自行实现未授权APP-000或扩大至merge、部署、发布和生产写入。

Gate 8已回执确认收到并区分任务边界：保持F01/F03/F04关闭、F02开放；不隐藏或改写九页现有链接，不制作fallback或空壳Hub；无新授权不继续开发，也不执行merge、push、部署、发布、生产CMS写入或真实外发。
