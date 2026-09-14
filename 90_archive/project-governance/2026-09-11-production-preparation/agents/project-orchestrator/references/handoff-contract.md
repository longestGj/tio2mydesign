# 总控输入、派发与交回合同 V0.9

本合同随总控角色生效；保持既有阶段技术状态，以准确对象和权限映射接收，不强制重命名历史。

## 3. 支持的调用模式

| 模式 | 用途 | 前提 |
|---|---|---|
| STATUS | 查准确进度、阻塞和下一步 | 只读恢复；不推进 |
| PREPARE | 整理一个具体任务的输入、范围和缺口 | 可以形成待决定任务，不自动派发 |
| START | 启动指定页面及Gate范围 | 已有明确授权；不存在相同对象在途执行 |
| RESUME | 恢复中断任务 | 从原执行记录恢复，不新建同一工作 |
| ACCEPT_RESULT | 接收指定阶段交回并处理 | 包、实例和当前授权能准确对应 |

治理/Agent设计属于单独工作类型，不混入页面执行；设计完成不改变页面进度。初版不承担跨项目安装、自动注册Skill或通用部署管理。

## 4. 输入合同

调用至少提供或从磁盘准确解析以下内容；缺关键字段不得猜测，但可以完成无关准备：

```yaml
mode: START | RESUME | STATUS | PREPARE | ACCEPT_RESULT
project_root: absolute project directory
page_ids: [explicit page ids]
gate_scope: explicitly authorized stages
control_record: existing batch or page execution record
current_manifests: exact page pointers
authorization_records: original decisions and standing authority references
execution_policy:
  serial_or_parallel: inherited authorization
  stop_boundary: explicit scope boundary
result_to_accept: exact result path when applicable
```

同一Page/Gate已有在途实例时优先恢复，不重复派发；多个活动任务按page_ids筛选，不能要求整个网站永远只有一个Run。找不到唯一当前组合时核对原批准来源并登记冲突。

## 6. 派发合同与交回合同

### 派发

```yaml
dispatch_id: stable id
page_id: registered id
gate: active gate
mode: EXECUTE | INDEPENDENT_REVIEW | TARGETED_RECHECK
assignee_instance: actual task/agent identity
reviewed_author_instance: required for review
role_source: exact approved role and version
method_baseline: exact current methods for this task
inputs: [{path: exact source, identity: recorded identity, purpose: why needed}]
authority: original authorization reference
read_scope: relevant sources
write_scope: bounded outputs
outputs: expected paths and required result fields
acceptance: stage-specific completion conditions
stop_boundary: explicit next-stage boundary
```

未有已批准专属角色时，按当前工作流及具体合同指派，不凭空建立新Agent。独立审查不继承作者的预期结论；作者报告只作待核验声明。角色名不同不能代替真实实例独立。

### 阶段交回

必须能从既有报告或配套JSON解析以下信息，不强制每页新增一份重复文件：dispatch_id、Page/Gate、实际作者实例、角色/方法版本、输入及成果身份、实际执行范围、技术结论、机器检查位置及局限、全部必修Finding/未测项、建议责任人。

新接口建议技术结论：READY_FOR_REVIEW、REVIEW_PASS、CHANGES_REQUIRED、INPUT_INCOMPLETE、FAILED。旧阶段已有结论保留，由适配表映射，不改历史或强制全库重命名。阶段交回不授予Gate关闭、用户批准、外发或下一阶段执行权。

## 9. 关闭、推进与输出

### 三种事实分别记录

| 事实 | 依据 |
|---|---|
| 专业成果通过 | 明确对象、实际证据、独立Reviewer及无剩余必修 |
| Gate关闭 | 上述审查＋该Gate有效用户决定或3/4/6常设授权 |
| 下一阶段启动 | 原授权明确包含下一阶段、依赖允许、无明确暂停 |

不机械为每个动作新建transition文件。现有关闭记录/Manifest能记录三种事实即可；记录必须在推进前成立。Gate 6就绪不等于已发送，Gate 9通过不等于已发布。

总控交回最小内容：

```yaml
page_id: exact object
gate: current stage
status: STATUS_REPORTED | RUNNING | WAITING_EXECUTOR | WAITING_REVIEW | USER_DECISION_REQUIRED | BLOCKED | COMPLETE_WITHIN_SCOPE | FAILED
current_manifest: authoritative path
accepted_result: exact result and reviewed identity
authority_basis: actual decision reference
findings_and_dependencies: precise open items or references
decision: what was accepted, returned or closed
next_action:
  owner: responsible role
  action: concrete action
  allowed: true or false
  authority: supporting source or missing scope
recovery_entry: control record
```

这些是编排任务状态，不替换页面Gate生命周期。COMPLETE_WITHIN_SCOPE表示本次授权任务完成，不表示网站全部完成或发布。用户决定只展示真正需要判断的内容、影响和建议；机器校验只给结论与可追溯入口。


## 文章任务适配

文章工作按[共用合同](../../../docs/architecture/ARTICLE_D23_D22_HANDOFF_CONTRACT_V1.0.md)复用上述五种模式。输入增加work_type=ARTICLE、article_id、research_unit_id、content_owner、article_scope及冻结Brief；未有页面时page_ids/current_manifests/gate_scope不适用。派发与交回以article_id/article_scope替代必填Page/Gate，携带实际D22实例、输入/成稿身份及完整审查链；输出用原文章控制记录作recovery_entry，不伪造页面Manifest。

页面工作继续使用work_type=PAGE_GATE及原字段。文章专业通过、用户正文批准、Gate 1启动分别记录；批准文章交给Gate 1的输入及准入按共用合同第5节，不直接交给Gate 2。

## Gate 1派发与接收适配

按[三路径合同](../../../docs/architecture/GATE1_THREE_PATH_EXECUTION_CONTRACT_V1.0.md)第6节，在原派发记录中给出gate1_path、path_basis、reused_inputs、decision_gaps、review_scope、output_mapping及escalation_triggers。接收实际路径、变化与文件/章节映射；不要求轻量任务新建四份成果。原批准源保留，执行者不建竞争Manifest。独立审查覆盖适用性与全部新增判断，范围不清返回具体缺项；不得把REUSE_CONFIRMATION当作免审或Gate 1已关闭。

## Gate 1→2内容交接适配

按[交付结构V0.6](../../../docs/superpowers/specs/2026-09-08-gate2-delivery-structure-v0.6.md)§15，在既有记录提供六类信息：G1批准组合及等价来源映射；正文/Skeleton各自精确批准；有效研究与独立审查及局限；新增内容/缺口；可改范围/冲突/owner；当前步骤/剩余决定/停止点。不新建整套文件，不让G1代写G2骨架。

执行者读取后交回实际处理方式与继承/变化定位、完整可读成果、审查入口和未决事项。缺关键身份或权限退回具体缺项；不强索四份新G1文件、不猜测批准、不自动重做研究。总控维护唯一Manifest，已有连续授权及用户G2批准方式不变。

## 网站级准备适配

work_type=SITE_PREPARATION时以site_id、preparation_scope、site_baseline和原控制记录替代尚不存在的page_ids/current_manifests/gate_scope，按[准备合同](../../../docs/architecture/WEBSITE_PREPARATION_HANDOFF_CONTRACT_V1.4.md)与[模板](../../../docs/architecture/WEBSITE_PREPARATION_HANDOFF_TEMPLATE_V1.4.md)解析输入、批准、成果、独立审查、首批映射和readiness_scope。未决项说明owner及阻断范围，不新建竞争台账。START仅限实际获授权准备范围；交回不批准页面或发布。

W2派发/接收按准备合同V1.2§7及W2角色：传递W1身份/局限、研究问题/范围、实际样本、四类证据、机会条件和W3可判断范围，不新建竞争台账或默认全站研究。

W3交接按准备合同V1.3§8及战略定位角色：提供W1/W2、既有战略、可调整范围、约束和停止点；接收选择/定位/验证安排及用户决定，W4不得将未批建议当批准。

W4交接按准备合同V1.4§9：准确批准定位、既有页面/关键词/共享合同和可改范围作为输入；交回页面职责、采购关系、共享能力与用户决定，W5不可将待批建议当生产依据。
