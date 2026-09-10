# 内链专项角色与方法生效及接收合同 V1.1

日期：2026-09-08。状态：USER_APPROVED_PROJECT_SOURCE / NOT_RUNTIME_REGISTERED / NOT_LIVE_VALIDATED。
用户在内链Agent职责、两种模式、角色分工及文件方案后回复“同意”，据此建立角色与方法、接入总控。批准不包含具体全站扫描、生产修改或发布。

## 1. 调用与接收

沿用总控STATUS/PREPARE/START/RESUME/ACCEPT_RESULT，以 `work_type=INTERNAL_LINK_REVIEW`、review_id、PLANNING_REVIEW/RUNTIME_REVIEW及明确页面集合识别专项任务；gate_scope只表示所在任务范围，专项不新增Gate。总控通用页面字段在跨页任务中按输入集合提供，不伪造单一全站页面Manifest。

派发须给出原授权、实际执行/审查实例、site_scope/语言/站点允许列表、计划发布集合、批准合同与逐页Manifest指针、运行身份、证据复用范围、Finding、输出目录及停止点。START按具体审查授权，建设角色不启动运行。

接收一个报告入口及其链接清单/证据记录即可，不重造报告。核对范围与实际覆盖、实例独立性、版本/环境/数据、问题归属及未测项。Gate 9可以引用有效相同对象同范围独立证据，保留未覆盖条件的实际验收；总控不追加同范围全站扫描。专项PASS不等于Gate 9通过、页面批准或发布。

## 2. 责任与例外

三类直接归属：批准目标正确但实现链接错误交Gate 8；交付包遗漏、目标映射错误或验收要求不清交Gate 6；锚文本、正文或产品关系含义错误交Gate 2／内容负责人。其余一律交总控，包括架构/URL调整、共享导航、未开发目标依赖、优化建议、缺项及责任不明确的问题；内链Agent不得自行向其他owner派发。共享导航问题即使表现为实现错误也先交总控协调。

元数据或记录问题只核对受影响绑定；修复版本复验原实例及受影响路径/共享消费者。缺输入或访问受限保留NOT_VERIFIED，不把未知视为PASS，不自动触发真实业务动作或扫描其他站。

## 2.1 启动时点

总控在四个时点按有效任务范围启动：一批Gate 6交付包就绪后做PLANNING_REVIEW；一批Gate 8交回进入Gate 9时做RUNTIME_REVIEW；修复后定向复验；发布准备时对明确发布集合做全站关系与覆盖核对。默认按开发批次组织，共享导航统一核验、各页确认组装，不逐页重扫全站。复用相同版本/环境/范围的有效证据；未开发目标如实登记依赖，阻断按合同判断。已有任务授权覆盖专项时直接衔接，不重复询问；无明确对象、环境或有效授权只做准备。时点规则不自动创建定时任务或授予发布权。

## 3. 当前源身份

| 文件 | SHA-256 |
|---|---|
| [agent.md](../../agents/internal-link-review/agent.md) | `2bb392b1c1528ace216b323925ba7b09d7e5721bc8cadb328bbd22572ed609a3` |
| [SKILL.md](../../skills/internal-link-verification/SKILL.md) | `f2e06f599ca0a9be00f67bdc7f0fbfce579408f302f157f6b56ddb8f67e9ba38` |

## 4. 变更、验证与回退

新增一个Agent和一个Skill；更新总控角色/路由及根入口、Index、Agent/Skill目录。未改Gate 6/9专业源、页面Manifest、页面正文或D16实现。修改前六个文件及哈希见[快照](../../90_archive/project-governance/2026-09-08-internal-link-review/)。

核验链接、格式、版本和身份，结果见[静态核验记录](INTERNAL_LINK_REVIEW_VALIDATION_V1.1.json)。未执行独立行为回放、爬虫开发或全站运行扫描，不能据静态通过声称实战成熟。后续真实审查须先取得具体范围和授权。

如需回退，按快照定向恢复本次段落及导航，核对并保留并行变化，不整份覆盖当前文件；新增源和本记录保留历史，不重做页面成果。

## V1.1修订

用户确认三类问题直接归属，其余交总控，并批准四个启动时点。当前Agent/Skill V0.2、总控/路由V0.5；不启动具体扫描。修改前八份文件见[快照](../../90_archive/project-governance/2026-09-08-internal-link-routing/)。前述六份快照为初版历史，本轮回退定向采用本次快照并保留并行修改。
