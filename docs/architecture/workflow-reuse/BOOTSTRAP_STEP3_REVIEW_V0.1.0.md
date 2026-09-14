# 第3步：配置与初始化交付 V0.1.0

2026-09-11。状态：STEP3_IMPLEMENTED；母版及工具仍是候选，第4步完整隔离验证尚未执行。本轮没有安装D10、修改其治理、迁移资料或提交Git，也没有操作开发项目。

## 与第2步相比

| 第2步的缺口 | 本步实现 | 保留边界 |
|---|---|---|
| 母版只有角色与方法 | 独立bootstrap工具、配置schema和示例 | 未改已冻结母版63项载荷 |
| 新站入口靠人工解释 | rules/status/index最小配置，其他阶段输入渐进补齐 | 缺输入不等于阶段PASS |
| 版本号不足以约束文件 | lock绑定准确manifest SHA及规范化配置SHA | 页面组合仍由本站Manifest负责 |
| 已有文件可能被覆盖 | CREATE/KEEP/MERGE_REQUIRED/CONFLICT明确计划 | 治理文件从不由工具写入 |
| 重复初始化和失败行为不明确 | 完整暂存后发布.workflow；同身份不改mtime | 升级/残缺安装阻断，需另做迁移 |
| D10接入只停留在概念 | 实际配置候选、机器计划、两份治理接入片段 | 尚未合并或安装 |

工具：[bootstrap.py](../../../workflow-tooling/v0.1.0/bootstrap.py)；[使用与边界](../../../workflow-tooling/v0.1.0/README.md)；[配置Schema](../../../workflow-tooling/v0.1.0/site.config.schema.json)。工具不需要第三方依赖，不执行Git或注册全局Skill。

## D10实际结果

机器计划为BLOCKED：67项CREATE均在拟安装.workflow内，2项MERGE_REQUIRED分别是AGENTS.md和00_Governance/PLANNING_PROCESS.md。CREATE只是计划，不是已生成目标文件。

具体拟增加的规则是：

1. 根AGENTS引用.workflow/INSTANCE_ENTRY.md，使用锁定角色、Skill和合同；原有main-only/no-worktree、唯一进度、当前前置策划范围继续有效。安装不授予阶段、开发或发布权限。
2. 原流程表增加映射：01–02→W1，03→W2，04→W3，05–07→W4，08–09→W5，10→Gate0。保持原目录和步骤完成条件；W5只准备页面输入及缺口，正式Brief在10页面准入中按批准范围形成。

这两段是待接入的具体合并建议，不是本轮修改后的D10规则。第5步接入时按届时文件身份审阅并落地，不能拿旧计划覆盖新变化。

配置继续映射PROJECT_STATUS、PLANNING_PROCESS、DECISION_LOG与已有来源台账，不增加第二份Status。记录当前03_RESEARCH仅作为既有状态定位，不宣布研究成果已验证。site_scope和development_root保持未知；不把网站ID推导为批准开发scope。

查看：[配置候选](D10_SITE_CONFIG_CANDIDATE_V0.1.0.json)、[完整文件计划与合并片段](D10_BOOTSTRAP_PLAN_V0.1.0.json)。

## 已验证与未验证

7项真实文件系统测试通过：只读计划、锁定安装与重复运行、现有治理阻断、已安装文件编辑保护、来源漂移、危险相对路径、过期输入、候选发布限制；部分行为合并在同一测试场景中。

先运行未实现的入口：出现9个断言失败和1个NOT_IMPLEMENTED错误；候选拒绝和过期计划场景当时仅因通用拒绝而通过，不能算这两项已证明red。实现后7项全部通过（0.499秒）。这些是工具功能测试，使用小型手写包，不冒充真实母版完整隔离验收。

写入方式不覆盖目标文件：同卷暂存并验证，重新计算计划，再把完整内容重命名为.workflow。工具没有自动升级与语义批准器。断电残留、并发最终窗口、符号链接/junction、完整母版缺依赖及错误scope等组合正反例留给第4步验证。阶段准入仍由总控按原始合同判断，不把schema检查当事实或授权确认。

下一步：第4步用真实母版跑空目录、已有规则目录及失败场景；通过后再决定可安装发布身份，随后进入D10合并与试跑。
