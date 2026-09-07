# 搜索意图证据分析 · 文件交接合同与验证 V0.4

- 日期：2026-09-06。
- 决定来源：用户要求“生成的内容需要保存到文件里面，然后才能交给 Agent，让 Agent 知道去哪里找”，并对具体交接方案明确“同意”。
- 合同状态：`USER_APPROVED_FILE_HANDOFF_CONTRACT`。
- 方法源状态：`PROJECT_OWNED_SOURCE / NOT_INSTALLED / NOT_ENABLED`。
- 适用范围：第一项搜索意图证据分析 Skill 与 Gate 1 Agent 的方法文件交接；不启动页面、不部署 Agent，不改变四项 Gate 1 核心成果。

## 当前合同

1. Agent 根据页面研究目录、任务范围及版本规则，提供 Markdown 报告的绝对 `output_path`。
2. Skill 将范围、来源观察、意图解释、问题线索和局限写入该文件，并从同一路径读回检查。
3. Skill 返回三项：已保存的绝对报告路径、结论摘要、未完成事项（没有则明确无）。
4. Agent 实际读取报告，核对任务对象、来源与局限，然后综合、判断并在 Gate 1 综合研究报告中引用。
5. 缺少路径由调用 Agent 补充；已有文件未经授权不覆盖。写入或读回失败不能声称完成交付。

真实任务的方法报告保存在 Agent 指定的页面研究目录，不写入 Skill 方法目录，也不以临时目录为唯一正式存档。该报告是附属研究资料，不是第五项核心成果；文件已交付不代表研究充分或 Gate 已批准。

本次合同替代[方法设计 V0.1](2026-09-06-search-intent-evidence-skill-design-v0.1.md) §5 中“不强制另建正式报告”的旧条款，其他方法与工具范围保持。V0.1 原件不回写。[验证 V0.3](2026-09-06-search-intent-evidence-skill-validation-v0.3.md)保留之前的方法采集验证，不代表已经验证本次新增接口。

## 当前文件

- [Skill 方法源](../../../skills/search-intent-evidence-analysis/SKILL.md)：SHA-256 `62EAF7F63565AB16AA3EECA96FA2BD451957CA8B3B2A7F94A14757E0B6199CB3`。
- [Agent 完整角色合同 V0.7](2026-09-06-gate1-execution-agent-design-v0.7.md)：§3.4.1、§4.1、§4.3 同步文件输入输出职责；未部署或试跑完整 Agent。
- [旧 Skill 验证快照](../../../99_workspace/search-intent-evidence-skill-validation/output-handoff/SKILL-before-file-contract.md)：SHA-256 `8E3B950229463702F804D33D0F89DC828E0CF2883B7AAD3E8501E354ED3E137C`，仅作本次旧规则对照，不是可用方法入口。
- 历史 Agent V0.6 未改：SHA-256 `5DA1EEBB4C7EA48B4EC6F51EFF495E0FC3E91439AE57F188490622FAB94D17DE`。

## 隔离验证范围与观察

复用[留存材料](../../../99_workspace/search-intent-evidence-skill-validation/output-handoff/input.md)，不重新查询 Google、Semrush 或网页，不启动 Paper 页面。调用约束为简短离线分析、指定 output_path、只可写该文件。

旧规则五次调用均保存了报告并返回绝对路径；不能说它们“没有保存文件”。实际缺口是最终交接没有同时给出分析结论和具体未完成事项。例如 control-3/4/5 均只返回“Completed ... and wrote it to”加路径。五份报告正文均另行读回检查。旧调用内部是否逐次读回不作未经核实的断言。

新版五次调用的报告已保存，主审逐份实际读取；5/5 最终回复均同时包含绝对路径、分析摘要和具体未完成事项，并声明已读回核对。报告均保留混合意图解释、UK/Semrush未知与来源定位局限，不把标准预览说成产品样品，也没有代替 Agent 批准页面。例如 green-4 交回混合意图结论，并明确待补原词分布、正文定位、综述阅读、样品入口和 UK Semrush 数据。三项交接形状 5/5 满足，正式 Agent 综合步骤仍只完成合同定义。

| 样本 | 旧报告 | 新报告 |
|---|---|---|
| 1 | [control-1](../../../99_workspace/search-intent-evidence-skill-validation/output-handoff/control-1.md) | [green-1](../../../99_workspace/search-intent-evidence-skill-validation/output-handoff/green-1.md) |
| 2 | [control-2](../../../99_workspace/search-intent-evidence-skill-validation/output-handoff/control-2.md) | [green-2](../../../99_workspace/search-intent-evidence-skill-validation/output-handoff/green-2.md) |
| 3 | [control-3](../../../99_workspace/search-intent-evidence-skill-validation/output-handoff/control-3.md) | [green-3](../../../99_workspace/search-intent-evidence-skill-validation/output-handoff/green-3.md) |
| 4 | [control-4](../../../99_workspace/search-intent-evidence-skill-validation/output-handoff/control-4.md) | [green-4](../../../99_workspace/search-intent-evidence-skill-validation/output-handoff/green-4.md) |
| 5 | [control-5](../../../99_workspace/search-intent-evidence-skill-validation/output-handoff/control-5.md) | [green-5](../../../99_workspace/search-intent-evidence-skill-validation/output-handoff/green-5.md) |

这是接口形状的小样本验证，不是严格同模型因果实验，也不是整个 Gate 1 Agent 的端到端试跑；不能据此宣称普遍成功率或研究质量提升。本轮没有模拟权限失败、文件损坏、覆盖冲突或重新验证浏览器链路。

Skill 结构检查使用 skill-creator 的 quick_validate.py，返回 `Skill is valid!`。最终治理文件另检查本地链接、冲突标记与行尾空白。
