# Gate9 → Gate8 通过通知闭环修订 V1.0

日期：2026-09-08  
决定来源：用户明确要求“通过以后你要给Gate8发消息，通知他通过”。

## 问题与修订

此前Gate9在D23保存通过结论后，缺少一条明确、稳定的规则要求主动通知原Gate8开发任务。这会让开发方不知道本轮返修是否可以停止，也容易把“定向Finding通过”误读成“页面整体Gate9通过”。

本次修订：

- Gate9 Agent V0.4负责在Gate8交回范围全部PASS或页面整体Gate9通过后，主动向原Gate8任务发送通过通知。
- 通知绑定实现commit/HEAD、Build或运行身份、关闭的Finding/接受条件和正式报告路径。
- 通知明确通过层级、仍开放项、owner及Gate8是否可以停止该轮返修。
- Runtime Verification Skill V0.3只生成通知所需的准确字段；消息发送、范围判断和阶段决定仍由Agent负责。
- 通知不授予Gate10、合并、部署或发布权限。

## 本次实例

Gate9已向Gate8任务`01a07a66-3c4a-75a2-9df4-648942742f9e`发送正式定向通过通知：implementation `c8b11ce`、evidence HEAD `86a2d00`、Build `2IMF284tCfKor6WTwWdXq`；四个指定Finding 4/4关闭，并明确四页整体仍`GATE9_NOT_PASS`。

## 身份

- 修订前Agent V0.3 SHA-256：`800A99767C333801A83666CECD4DDD24FF100D9E6B7FD4FB3977919DDE5D64B0`
- 修订前Skill V0.2 SHA-256：`96676DFF31C4E4122C8361DDE55F50CCEF19CEBFBD4DCD2BDFACF7542EED4E96`
- 当前入口：`agents/gate9-read-only-acceptance/agent.md`与`skills/runtime-implementation-verification/SKILL.md`

状态：`APPROVED_USER_DIRECTIVE / ACTIVE_PROJECT_SOURCE / NOT_RUNTIME_REGISTERED`。
