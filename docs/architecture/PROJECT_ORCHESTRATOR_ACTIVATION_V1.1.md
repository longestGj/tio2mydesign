# 网站策划总控编排角色生效增补 V1.1

日期：2026-09-07。决定：ORCHESTRATOR-20260907。状态：USER_APPROVED / ACTIVE_PROJECT_SOURCE / NOT_RUNTIME_REGISTERED。

## 1. 批准来源与对象

用户在[总控设计V0.1](../superpowers/specs/2026-09-07-project-orchestrator-agent-design-v0.1.md)后明确“同意，开始编写。”批准按设计建立角色与引用合同。本文件记录实际生效，原设计作为历史提案保留，不回写其原状态。角色由当前根任务承担，不新增上级Agent、阶段或审批层。

## 2. 与当前治理和阶段合同的关系

本增补细化治理细则V1.4 §6.2、当前工作流V3.2的总控职责与交接、3/4/6常设关闭授权的执行角色，不改变这些文件的历史字节与阶段批准条件。

“总控审查通过”按对象解释：总控必须完成适用的项目级判断，并取得有效专业独立审查及阶段批准依据；不是专业Reviewer之后自动追加第二轮同对象全量审查。总控可以按现行阶段合同承担独立审查，前提是自己不是成果作者且不重复已有效完成的审查。Gate 2的实际成果阅读、事实权威与跨合同判断保留。

根AGENTS、Index和Agent目录已路由本角色。页面执行前由总控按交接合同提供准确输入/输出、实例、范围和停止点；阶段Agent现有专业职责、最低证据及技术结论不改。已有角色缺少新字段时从实际记录解析，不要求全库重写报告。

Gate 3/4/6常设关闭保留独立审查与必修关闭。1/2/9/10保留原批准规则；关闭、下一阶段执行、外发和发布各自按授权。新Gate 5唯一视觉审查、Gate 6差异路径及5→6接收按当前已批准合同执行；统一validator未实现，不虚报工具能力。

## 3. 当前角色身份

| 文件 | SHA-256 |
|---|---|
| [agent.md](../../agents/project-orchestrator/agent.md) | `dedf71cbbb8ba9a85e97919e9a11d0e4c10b15b54c7950e6b0a090e529c1e3b4` |
| [orchestration-sop.md](../../agents/project-orchestrator/references/orchestration-sop.md) | `0fd3cdd577443109a78095e4960646ccdc176fbf371c435dd0d25a15c2459bd0` |
| [handoff-contract.md](../../agents/project-orchestrator/references/handoff-contract.md) | `81f16e56055e0e0a20eefed5e2bab884f15615cd2c6c98fee08ffe68454d1ad9` |
| [gate-routing.md](../../agents/project-orchestrator/references/gate-routing.md) | `571571ad300fb58054207c4d1d78e737d5a5e497292a3bceedcb9945963a11e8` |

## 4. 初版实施、验证与恢复（历史）

创建一个角色入口及三个参考合同；只定向修改根AGENTS、Index和Agent目录的总控入口。无页面成果、Manifest、状态、专业Skill、D16实现或D15参考项目写入。

修改前三个共享入口逐字节保存在[归档](../../90_archive/project-governance/2026-09-07-project-orchestrator/)，写入前核对未变。验证见[静态验证JSON](PROJECT_ORCHESTRATOR_VALIDATION_V1.0.json)：文件/链接/身份、设计覆盖和典型规则场景。静态通过不等于独立角色回放、真实批次成功或效率改善；未注册、未启动页面试跑。

需要回退时按有效决定恢复本次入口段落和角色指针，不整份覆盖并行修改；保留本角色及本记录为历史。当前页面继续按其Manifest和原批准恢复，不因角色变更重做。

## V1.1当前生效

用户在Gate 5→6接收方案后明确“可以。修改”。Controller V0.2及Gate路由V0.2直接引用4→5、5→6和Gate 6执行合同；当前角色身份以上表为准，初版验证不替代本轮。详见[同步记录](GATE5_GATE6_CONTROLLER_ALIGNMENT_CHANGE_V1.0.md)。没有增加总控或审查层，页面历史不变。
