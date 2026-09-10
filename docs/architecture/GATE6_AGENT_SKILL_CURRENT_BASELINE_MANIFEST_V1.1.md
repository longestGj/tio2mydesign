# Gate 6 Agent与Skill当前基线 Manifest V1.1

2026-09-07，USER_APPROVED_TARGETED_REVISION / ACTIVE。用户在Gate 6效率与边界方案后要求“进行修改”。

| 对象 | 当前源 | SHA-256 |
|---|---|---|
| Gate 6 Agent V0.7 | [Gate 6 Agent V0.7](../../agents/gate6-review-delivery/agent.md) | `b302783e22d16d72d238bec336d766dd37f6f3ef34927e868de1c5f1bfc4372c` |
| 合同一致性Skill V0.3 | [合同一致性Skill V0.3](../../skills/page-contract-consistency-review/SKILL.md) | `5f8d864dbdb0da5118df5898d5dbe12421455aa5f5b346ff479b26ed643203ea` |
| 开发交付Skill V0.3 | [开发交付Skill V0.3](../../skills/development-delivery-specification/SKILL.md) | `92f7c3e4989714d62c12a8b4ddcf916397f405a45fca1193b541f6f652088180` |
| 执行与复核合同 V1.1 | [执行与复核合同 V1.1](GATE6_EXECUTION_REVIEW_CONTRACT_V1.1.md) | `d2aaffaadf6ba44f3472b4045a40c165b170aa4fdfdc4ee1d824fe66415e9f67` |

上游有效审查继承、FAST_PATH/ESCALATED_PATH、新包单一自检和不同身份独立复核、总控唯一Manifest写入按本合同执行。布局核验只有具体触发才从当前适用视觉方法基线选择；不是Gate 6默认第三方法。

[修订记录](GATE6_EFFICIENCY_CHANGE_V1.0.md)说明范围和限制。既有页面Manifest与历史报告不改写；不自动注册运行或授予页面、外发、开发权限。Gate 9消费共享一致性方法时继续检查实际实现，不继承Gate 6精简路径。

## Gate 5→6接收同步

当前接收按[共用接收合同](GATE5_GATE6_ACCEPTANCE_CONTRACT_V1.0.md)执行；详见[同步记录](GATE5_GATE6_CONTROLLER_ALIGNMENT_CHANGE_V1.0.md)。历史版本与页面授权保持，Skill方法不变。

| 对象 | 当前源 | SHA-256 |
|---|---|---|
| 接收合同 V1.0 | [接收合同](GATE5_GATE6_ACCEPTANCE_CONTRACT_V1.0.md) | `c408bdcd34b898edb5e95c76db8c126a203ebd1e85c530460e3615f49e0e80eb` |
