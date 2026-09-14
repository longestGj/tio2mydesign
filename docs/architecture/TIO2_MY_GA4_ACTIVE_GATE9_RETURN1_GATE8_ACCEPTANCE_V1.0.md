# TiO2 Malaysia GA4 Active Gate 9 Return-01 Gate 8 Acceptance V1.0

日期：2026-09-13

Review ID：`TIO2-MY-GA4-ACTIVE-G8-RETURN-01-ACCEPTANCE-01`

Finding：`TIO2-MY-GA4-G9-F01`

结论：`GATE8_RETURN_01_REPAIR_ACCEPTED / READY_FOR_GATE9_TARGETED_RECHECK`

## 1. 状态边界

- `TIO2-MY-GA4-G9-F01=RESOLVED_IN_GATE8_CANDIDATE / PENDING_GATE9_TARGETED_RECHECK`
- Gate 8定向返修已完成接收；本记录不替代Gate 9独立复核，也不宣称Gate 9 PASS。
- Gate 10、merge、push、deploy、GTM发布、公开发布、生产WordPress写入、DNS、GSC和索引均未授权。

## 2. 精确候选身份

| 字段 | 值 |
|---|---|
| Worktree | `D:\16Wordpress_nextjs\.worktrees\tio2-my-full-public-seo-ga4` |
| Branch | `codex/tio2-my-full-public-seo-ga4` |
| Baseline | `b52702cf52a1eb6a8292db160920158a3def3eed` |
| Implementation | `f61fb259faaa0d691602902336d81ae3e3b92c1f` |
| Evidence HEAD | `0f7a6299f3b9c1776366d9cf290506bddec8ea82` |
| Handoff / observed HEAD | `243d7546e6a367cdba0a8daf2eab7a0f5ce1cd61` |
| Build ID | `tio2-my-ga4-g9r1-f61fb259-20260913` |
| Runtime / CMS | `http://127.0.0.1:3124` / `http://127.0.0.1:8280/graphql` |
| GTM / GA4 | `GTM-MWQVK7J4` / `G-QDHLMRH2WB` |

只读核验时工作树洁净，implementation为handoff HEAD祖先。Manifest的19项证据全部存在、SHA-256匹配且已受Git追踪；receipt与Manifest的19项证据引用集合完全一致。

## 3. Finding定向核验

Codex内置浏览器对3124运行时执行了两个连续状态：

1. 没有有效Consent记录的首次打开，只显示`Accept analytics`、`Necessary only`和`Cookie Policy`；不显示`Save preferences`或`Close`，初始焦点位于`Accept analytics`。
2. 选择`Necessary only`后再次打开，只显示`Save preferences`、`Accept analytics`、`Necessary only`和`Close`；不显示`Cookie Policy`，初始焦点位于`Save preferences`。

两种状态与批准合同精确一致，原先的首次/重开动作混用及`Read Cookie Policy`标签漂移已经消除。

## 4. 回归证据

- 8个Vitest文件、104项测试通过。
- Legal/CMP Playwright 14/14通过；GA4/CMP Playwright 2/2通过。
- TypeScript和定向ESLint通过。
- 七条范围路由及CMS在独立请求中均返回HTTP 200。
- Return-01未改变已通过的GTM-only、Consent默认值、Analytics授权/撤回、Cookie生命周期、三个provider事件、四个非PII参数和法律页主体范围。

## 5. 工具限制

官方validator仍如实返回`EVIDENCE_INCOMPLETE`：131 PASS / 2 FAIL。两项为已知Manifest最终提交自引用限制：Manifest记录较早的`evidence_head`，而Manifest/receipt随后才进入handoff HEAD，故触发`git_head`和`receipt_committed`。独立哈希、追踪、引用集合、祖先链和运行时补验均通过；该机械限制不构成实现Finding，也不被重标为preflight PASS。

## 6. 下一责任方

Gate 9任务仅需对`TIO2-MY-GA4-G9-F01`执行定向独立复核，并回归已通过范围。3124运行时由开发任务保持至Gate 9给出PASS或新RETURN。

`TIO2-MY-GA4-ACTIVE-G8-RETURN-01-ACCEPTANCE-01 = PASS / CLOSED`
