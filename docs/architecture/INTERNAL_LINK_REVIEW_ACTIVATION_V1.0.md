# 内链专项角色与方法生效及接收合同 V1.0

日期：2026-09-08。状态：USER_APPROVED_PROJECT_SOURCE / NOT_RUNTIME_REGISTERED / NOT_LIVE_VALIDATED。
用户在内链Agent职责、两种模式、角色分工及文件方案后回复“同意”，据此建立角色与方法、接入总控。批准不包含具体全站扫描、生产修改或发布。

## 1. 调用与接收

沿用总控STATUS/PREPARE/START/RESUME/ACCEPT_RESULT，以 `work_type=INTERNAL_LINK_REVIEW`、review_id、PLANNING_REVIEW/RUNTIME_REVIEW及明确页面集合识别专项任务；gate_scope只表示所在任务范围，专项不新增Gate。总控通用页面字段在跨页任务中按输入集合提供，不伪造单一全站页面Manifest。

派发须给出原授权、实际执行/审查实例、site_scope/语言/站点允许列表、计划发布集合、批准合同与逐页Manifest指针、运行身份、证据复用范围、Finding、输出目录及停止点。START按具体审查授权，建设角色不启动运行。

接收一个报告入口及其链接清单/证据记录即可，不重造报告。核对范围与实际覆盖、实例独立性、版本/环境/数据、问题归属及未测项。Gate 9可以引用有效相同对象同范围独立证据，保留未覆盖条件的实际验收；总控不追加同范围全站扫描。专项PASS不等于Gate 9通过、页面批准或发布。

## 2. 责任与例外

Gate 6提供预期目标、行为、依赖和接受条件；实现错误交Gate 8；共享配置问题交原共享owner；内容/关系/URL变更交对应owner决定。Gate 9已有问题沿用原ID。依赖按合同和发布集合确定阻断范围；优化建议独立列出，不作为未经批准的实施要求。

元数据或记录问题只核对受影响绑定；修复版本复验原实例及受影响路径/共享消费者。缺输入或访问受限保留NOT_VERIFIED，不把未知视为PASS，不自动触发真实业务动作或扫描其他站。

## 3. 当前源身份

| 文件 | SHA-256 |
|---|---|
| [agent.md](../../agents/internal-link-review/agent.md) | `186e48adfa2abcd1caf74247e989855fe7d6bb7b3e7d1dd0d0a48dab9343a548` |
| [SKILL.md](../../skills/internal-link-verification/SKILL.md) | `ea615253e4edcc6183c2d6d8a39d642071f1a31c95bcb9a1fca70b0fd824ed10` |

## 4. 变更、验证与回退

新增一个Agent和一个Skill；更新总控角色/路由及根入口、Index、Agent/Skill目录。未改Gate 6/9专业源、页面Manifest、页面正文或D16实现。修改前六个文件及哈希见[快照](../../90_archive/project-governance/2026-09-08-internal-link-review/)。

核验链接、格式、版本和身份，结果见[静态核验记录](INTERNAL_LINK_REVIEW_VALIDATION_V1.0.json)。未执行独立行为回放、爬虫开发或全站运行扫描，不能据静态通过声称实战成熟。后续真实审查须先取得具体范围和授权。

如需回退，按快照定向恢复本次段落及导航，核对并保留并行变化，不整份覆盖当前文件；新增源和本记录保留历史，不重做页面成果。
