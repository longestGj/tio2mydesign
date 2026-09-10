# 网站策划总控编排角色生效增补 V1.2

日期：2026-09-08。状态：USER_APPROVED / ACTIVE_PROJECT_SOURCE / NOT_RUNTIME_REGISTERED。

## 1. 生效范围

用户明确批准将文章工作线纳入总控，并指定文章完成后从Gate 1开始页面流程，本次不调整Gate 2。总控角色V0.3、Gate路由V0.3、交接合同V0.2及SOP V0.2共同生效。此前[生效增补V1.1](PROJECT_ORCHESTRATOR_ACTIVATION_V1.1.md)关于总控质量责任、Gate 4/5/6接口、阶段批准和独立性的规则继续适用，其身份表仅为历史版本。

新增[文章共用合同V1.0](ARTICLE_D23_D22_HANDOFF_CONTRACT_V1.0.md)明确独立文章身份、D23与D22职责、研究/审查复用、六类交回对象、定向返修、用户正文批准及Gate 1准入。具体文章授权、实际派发和页面启动分别核对；没有运行注册、启动任务或发布授权。本增补不声称修改了D22内部方法。

## 2. 当前精确身份

| 文件 | SHA-256 |
|---|---|
| [agent.md](../../agents/project-orchestrator/agent.md) | `8ad24ee13d0d57586eacbb800d5271d06b1daa24426b513923e6e0e8d832d004` |
| [orchestration-sop.md](../../agents/project-orchestrator/references/orchestration-sop.md) | `7b13de2b21307972c01da6596ee804d3981caf747ff81eb8efd5c16e457a9d03` |
| [handoff-contract.md](../../agents/project-orchestrator/references/handoff-contract.md) | `c9ea5a632b04a7585bab465695e02b8f283b034e8cb20fcaa61827768fcf0dce` |
| [gate-routing.md](../../agents/project-orchestrator/references/gate-routing.md) | `e3a74ff8d31abee2ff8da1d6cda5665acfe911e76ce6c60695113d18df730c31` |
| [ARTICLE_D23_D22_HANDOFF_CONTRACT_V1.0.md](ARTICLE_D23_D22_HANDOFF_CONTRACT_V1.0.md) | `a83b791f72c873b77b247a5a05295e01d1aeebb526e5671e920077fc86794d61` |

## 3. 变更与恢复

修改前七个文件的逐字节快照及哈希清单保存在[归档](../../90_archive/project-governance/2026-09-08-article-orchestrator/)。根AGENTS、Index及Agent目录已指向本版。未改页面正文、页面Manifest、Status、Gate 2或任何Skill，未写入D22/D16。

主要风险是把内容批准误作页面授权、跨项目重复研究/审稿，或为文章虚造Page ID；共用合同分别给出准入、复用和独立文章字段规则。既有文章和页面有效成果不重做。回退时按原快照定向恢复本次段落与版本入口，先核对并保留并行修改，不整份覆盖当前文件。V1.1及原批准记录保留。

核验范围：当前链接、角色/合同版本、基线哈希及归档完整性；这些静态检查不等于真实文章运行验证。实际结果见[核验记录](ARTICLE_ORCHESTRATOR_ALIGNMENT_VALIDATION_V1.0.json)。
