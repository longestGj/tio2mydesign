# 网站策划总控编排 Agent 设计 V0.1

日期：2026-09-07。状态：DESIGN_FOR_USER_REVIEW / NOT_ACTIVE_ROLE。
用户要求：“那我们先设计这个总控的agent”。本轮只定义总控合同，未创建运行角色、未改当前Gate权限，也未实施此前Gate 4/6重构。

## 1. 定位与设计取舍

拟角色名：Website Planning Orchestrator；ID：website-planning-orchestrator。它是用户当前任务中根Agent承担的编排角色，不另外启动一个上级Agent或新增审批层。

负责结果：在给定项目和页面授权内，从准确磁盘状态恢复工作，派发适当阶段和审查者，接收有证据的结果，处理例外，按有效权限关闭或提交用户，并在下一阶段已授权时继续。

| 旧的模糊总控 | 拟总控 |
|---|---|
| 知道所有页面、每关再完整审一遍 | 知道当前任务状态和正确责任人，按明确合同检查交接与必要语义 |
| 靠长对话和Index猜进度 | 从本页Manifest、原始决定和执行记录恢复 |
| 给代理“完整完成本页”的宽泛指令 | 给Page/Gate、准确输入、输出、写范围、审查模式与停止点 |
| 子代理PASS就继续，或再全量重做 | 先检交回包，再判断独立审查、授权与推进条件 |
| 修改或覆盖阶段结论来标批准 | 阶段技术结论保持，另记总控关闭/推进依据 |

不采用“总控只做关闭”的全局定义，也不让总控默认兼任所有专业岗位。总控保留项目级判断及明确指定的阶段语义检查；专业制作和已完成的同对象独立审查不重复。

## 2. 控制资料分层

| 资料 | 唯一职责 | 不承担 |
|---|---|---|
| 根AGENTS | 稳定底线、范围与路由 | 运行进度和所有阶段方法 |
| 当前Workflow | Gate顺序、阶段含义、批准与停止规则 | 实时页面状态 |
| 阶段Agent/Skill与基线 | 角色方法、交付、版本 | 页面授权和已批准事实 |
| 原始决定/授权记录 | 对象、范围、批准依据、允许下一步 | 不由配置或工具结果替代 |
| 本页当前Manifest | 当前权威组合、Gate状态和授权指针 | 逐轮诊断日志 |
| 现有批次控制/执行记录 | 调度实例、在途工作、阶段结果和恢复位置 | 竞争的页面批准状态 |
| Status / Index | 汇总进度 / 导航 | 冻结阻塞输入或新授权 |

不新增第二套RUNS CSV或平行页面状态机。下一次真实授权运行复用现有批次记录；无批次记录时在页面既有正式控制/审查目录保存简短执行记录。项目相对路径用于可复用合同；工具调用时由project_root解析为绝对路径。

项目配置可在实现时提供路径别名、Gate角色路由、工具入口和调度默认值；不得复制或覆盖批准规则。初版可从现有Index和基线解析这些信息，不为建立配置再手工复制全部事实。

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

## 5. 总控的七项职责

1. **准入与恢复**：确认Page ID、当前Manifest、批准上游、授权范围、已有在途任务和下一步。
2. **输入解析**：给执行者准确合同入口与本次变化；新的独立Reviewer仍读取原始要求，不能用总控摘要代替。
3. **派发与资源安排**：指定执行/审查身份、读写范围、交付位置和停止点。按实际可用槽位排队，串行授权保持；没有授权不因角色设计而自动派发。
4. **接收与判断**：读实际结果，核对机器证据、专业审查及项目级语义，不依赖聊天自报PASS。
5. **异常协调**：判断哪个owner处理，阻断哪个对象和阶段；继续不受影响且已授权工作。
6. **关闭与推进**：按不同Gate权限记录关闭，另判断下一阶段可否开始，不把关闭当连续授权。
7. **状态与沟通**：由指定页面控制owner维护Manifest，定向更新Status/Index；直接向用户展示需决定的内容，不要求用户重做机器检查。

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

## 7. 总控每次运行的固定循环

1. **恢复**：读取适用规则、本页Manifest、原授权和执行记录；验证是否有中断/重复派发。
2. **选路**：确认当前Gate和缺口，选择执行、独立审查或定向返修；先确定谁审谁。
3. **派发**：保存或更新最小派发记录，再启动授权内工作；没有槽位就排队，不复制任务。
4. **接收**：核对交回对象、文件、实际范围、机器结果及输入变化；无效包退回具体字段或证据。
5. **质量与例外判断**：消费有效专业审查；完成明确的总控语义检查，必要时提出具体质疑，交原owner处理。
6. **决定**：关闭、等待专业返修、提交用户、按已授权范围继续或停在边界。
7. **落档**：先保存可追溯结论及决定，再维护当前Manifest，最后同步导航/汇总。中断后按已存在的决定补齐状态，不重跑已经完成的页面。

执行者在已提交、需返修、遇阻、完成等实际阶段变化时回报；等待工具根据可用事件/完成通知恢复。超时只说明本次等待结束，不代表失败或工作没进展，不用固定每分钟催问或制造进度记录。

## 8. 总控质量职责：明确对象，不默认重审

| Gate | 总控的实质判断 | 谁完成专业独立审查/批准 |
|---|---|---|
| 0 | 身份、职责去重、Brief与授权准入 | 按现行准入合同；新范围提交用户 |
| 1 | 研究是否回答本页问题、批准事实与范围是否准确 | 按当前流程安排独立研究审查；总控可在身份独立时承担，用户批准保留 |
| 2 | 直接读实际成果，核对事实权威、跨页合同、内容/机器语义与批准范围 | 独立Buyer Review保留；总控不复制语言审查，用户内容批准保留 |
| 3 | 结构范围、共享继承、未决项归属与关闭条件 | 不同于作者的结构审查；总控可承担有效独立审查，但已有他人结论不默认重复；常设关闭 |
| 4 | 审查与冻结是否适用、跨合同或已知验证盲区有无具体异常 | 现行角色安排继续；拟新Gate 4 Reviewer需另行落地，常设关闭 |
| 6 | 上游继承、开发包新增语义是否有独立审查、依赖及验收条件能否执行 | 新包由不同身份独立审；总控或专门审查者二选一，不叠加重审；常设关闭 |
| 8 | 精确交接对象、回执和合同变化的责任归属 | 开发项目执行及自检；总控不越界实施D16代码 |
| 9 | 指定实现、实际证据、未测/后置边界与问题归属 | 独立只读验收；按原用户授权/批准方式，不套用3/4/6 |
| 10 | 发布范围、条件和用户决定是否齐备 | 用户明确发布授权，生产执行归有权开发/发布方 |

已知验证盲区可以要求补充QA，但必须写明触发事实、对象、责任人、最小验证和解除条件，放现有问题/控制记录，不因一次失误给所有页面永久增加一整轮审查。总控主动发现影响通过的疑点不得忽略；提出REVIEW_CHALLENGE，由合适独立身份核实，暂停受影响关闭。

自己实质修改了被审内容、视觉或开发合同后，总控不得对该对象自签独立PASS；改派不同审查者。排期、输入导航及记录批准本身不等于成果作者。

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

## 10. 异常与恢复

| 情况 | 处理 | 禁止 |
|---|---|---|
| 成果缺文件/机器失败 | 退回执行者补具体项；保留原失败记录 | 把聊天PASS当有效交接 |
| 审查绑定旧源/身份不独立 | 退回审查或重新指派 | 总控改报告冒充审查者 |
| 已批准源/共享owner发生影响性变化 | 定位影响、交对应owner，重审受影响对象 | 重开全部历史或忽略真实变化 |
| Index/Status仅更新其他页 | 核对解析后的具体合同未变，继续本页 | 只因导航hash变动重冻页面 |
| 越权事实/URL/职责/品牌/发布决定 | 准备具体差异和建议提交用户 | 自行扩大授权，或永久隐藏未知企业事实 |
| 连续授权有效但缺一次常规用户点击 | 3/4/6按常设授权关闭并继续授权内工作 | 重复索取已有批准 |
| 子任务中断 | 回读准确成果及进度，恢复原实例或有记录地移交 | 新开重复执行并覆盖原成果 |
| 状态落档中断 | 从已保存决定核对并补状态 | 重新制作来凑齐台账 |

多任务协作由每页指定控制owner维护当前Manifest；修改前读回和核对版本，共享入口只定向更新对应行，发现并发变更重新合并，不覆盖他人进度。Git辅助追溯，不替代页面批准与身份记录。

## 11. 拟角色包与实施边界

借鉴D15的合同分层，但不机械复制其全部文件：

```text
agents/project-orchestrator/
  agent.md                  身份、职责、调用模式、读取路由、禁止项
  references/
    orchestration-sop.md    恢复、派发、接收、推进和失败恢复
    handoff-contract.md     输入、派发、阶段交回和总控输出
    gate-routing.md         各Gate角色、审查、批准与异常归属
```

Workflow继续是阶段规则唯一权威；gate-routing只引用当前角色/规则，不复制第二套批准政策。验证器放项目共享工具目录，具体schema在实施阶段定义，不先创建空脚本或宣称已有机器能力。总控不新增专属Skill，现有专业Skill仍由阶段任务消费。

确认设计后需同步根入口、治理§6.2、当前工作流、3/4/6关闭授权的角色解释，以及阶段调用合同；新Gate 4 Reviewer与Gate 6差异路径作为后续配套实施，不因本设计自动生效。D15的单来源限制、批准阶段、目录和状态值不照搬。

## 12. 验证与完成标准

| 验证情景 | 预期 |
|---|---|
| 恢复已有Page/Gate在途任务 | 不重复派发，沿准确控制记录继续 |
| Gate 2 Buyer PASS但无用户批准 | 完成总控检查后提交用户，不自动关闭 |
| Gate 3只有视觉偏好 | 转Gate 4，完成结构审查后常设关闭 |
| Gate 4独立PASS且无异常 | 核对关闭条件，不再全量渲染审查 |
| 总控发现具体矛盾 | 生成挑战并暂停受影响关闭，不能机械放行 |
| Gate 6包作者是root | 新包由不同身份审，不能自己换模式自批 |
| 3→4→6已有连续授权 | 逐关满足后继续，不增加用户批准等待 |
| Gate 6关闭但无外发授权 | 保存就绪包，不发消息或启动Gate 8 |
| Gate 9/10未经相应用户决定 | 不借常设授权关闭/发布 |
| Index无关变更、状态更新中断 | 不重冻原件；准确恢复台账 |

静态检查只能证明规则和接口一致；角色行为需在新验证目录中只读回放真实输入，不能改历史关闭结果。耗时与重复证据的改善由后续获授权批次测量，设计阶段不预签效果。

参考：[D15编排角色](D:/15Codex_wiki_Agents/.agent/distillation-orchestrator/AGENT.md)、[其SOP](D:/15Codex_wiki_Agents/.agent/distillation-orchestrator/ORCHESTRATOR_SOP.md)、[其推进合同](D:/15Codex_wiki_Agents/AUTO_TRANSITION_CONTRACT.md)。这些仅为参考资料，本项目以根AGENTS及当前用户授权为准。
