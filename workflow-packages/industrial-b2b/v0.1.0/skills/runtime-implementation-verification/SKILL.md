---
name: runtime-implementation-verification
description: Use when an implemented page needs read-only verification against approved acceptance criteria, especially when CMS data, runtime versions, receiver results, conditional rendering, shared behavior or scope isolation must be distinguished from previews and developer test claims.
---

# 运行实现核验 V0.5

母版版本：0.1.0（提取候选，尚未安装/发布验证）。运行前读取[实例绑定合同](../../contracts/instance-bindings.md)；本站事实、授权与进度不随方法复制。

把批准条件对应到准确实现及可观察结果。方法先机器校验Gate8证据Manifest和runtime，再交回证据、差异、分类、未验证范围及可供Agent发送的Gate8通过通知字段；Agent负责范围、Finding归属、通知和阶段决定。本版加入可重复的只读预检，不赋予实际业务提交、开发、合并或发布权限。

## 输入与工作方式

接收原始批准要求/接受条件ID、符合[机器交接合同](../../contracts/GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md)的`gate8_evidence_manifest.json`、实现与运行身份、数据/共享/接收合同、操作权限、初审或复验范围，以及绝对`report_path`、`evidence_dir`和共同`evidence_index`。复验另需原Finding、接受条件与变更说明。既有文件/章节可直接引用；缺少关键输入时指出受影响条件，继续其余可核验部分。

按实际可用工具文档选择浏览器、只读HTTP/API、文件/差异/日志读取能力；不假设存在某个命令。浏览器证明呈现和操作，HTTP/API证明对应响应，源码说明路径与条件，日志须能关联请求和环境。工具不可访问时返回明确缺口，不用另一证据类型冒充。历史摘录回放只分析给定材料，不宣称亲测。

## 0. 接单预检

在其他运行检查前执行。以下命令的工作目录必须为本SKILL.md所在目录；manifest和output传绝对路径，不以站点根目录猜测scripts位置：

```powershell
python scripts/validate_evidence_manifest.py <manifest> --output <evidence-validation.json>
python scripts/gate9_preflight.py <manifest> --rounds 2 --output <preflight.json>
```

`validate_evidence_manifest.py`核对必填字段、Git祖先关系、当前branch/HEAD、clean状态、Build ID、证据存在性、工作树SHA-256、evidence HEAD中的文件及回执引用。它阻止明显密钥模式，但所有真实个人信息仍需人工复核。

`gate9_preflight.py`在Manifest通过后检查runtime连续响应、目标状态、页面标识、可见scope header（若提供）及Next Build marker。默认要求HTML包含旧式`/_next/static/{build_id}/`，或Next.js 16 RSC输出中的精确转义字段`\"b\":\"{build_id}\"`；两种形式都必须绑定Manifest中的完整Build ID。非Next输出只有在合同给出等价运行身份探针时才可关闭该检查，不能随意跳过。

统一分类为`PASS / IMPLEMENTATION_FAILURE / ENVIRONMENT_FAILURE / EVIDENCE_INCOMPLETE / NOT_APPLICABLE`。脚本使用前四类；`NOT_APPLICABLE`仅由Agent依据合同决定。预检失败不终止不受影响的静态检查，但相关运行条件不能判PASS。

## 1. 将合同、代码与运行结果对应

分别记录批准输入版本、候选commit/ref与未提交差异、运行URL与实际版本依据、环境/构建模式、数据来源、scope/语言及采集时间。核对回执对应的工作区、构建或运行标识；分支名、端口号、干净工作区或HTTP200单独不能证明运行的是该commit。

实际运行身份不明或与候选不一致时，保留局部观察，相关候选运行条件记为`NOT_VERIFIED`。审查中对象变化时先核对差异和证据适用性。缺少某目录的diff不证明缺少实现：追踪既有实现、实际调用与数据来源；同样，新增shell文件名不能单独证明共享分叉。

## 2. 沿接受条件核验实际链路

先查看结果再对照开发解释。按真实功能选择检查；每个适用接受条件都要有去向，不因发现一个问题停止剩余覆盖。

| 对象 | 核验做法 |
|---|---|
| CMS→API→页面 | 找到同一内容记录及scope在各层的对应值，核对实际provider/数据模式及最终响应；追踪fixture、静态数据或fallback。端点可达与CMS内容贯通分别判断 |
| 条件渲染 | 按合同检查正常、空值、隐藏、不完整、错误范围等实际分支；当前不显示不能证明未来有效分支可达。需要改数据/配置才能触发的分支交有权环境owner准备 |
| 页面动作 | 走通入口、预填、选择、摘要、目标URL、接收页和适用Back/Forward；把可见控件与实际传递值对照。构建成功和监听器存在不能证明状态恢复 |
| 结果与接收 | 分别对应界面提示、请求/响应、provider接受、接收方结果；用经脱敏的请求ID或等价关联证据连接。HTTP2xx但业务失败/未知不能判成功；持久化/去重仅按合同适用 |
| 机器输出 | 检查原始响应与客户端公开数据、实际head/Schema、Canonical/robots/语言及批准精确值；查询参数、内部字段或隐藏关系不能无依据进入公开输出 |
| 共享与scope | 核对owner消费和实际调用；按变更覆盖查询、路由、缓存、菜单、SEO、表单及媒体。检查正确/缺失/错误scope和适用同slug场景；正向单站通过不能证明隔离 |

仅在授权涵盖具体环境、对象及动作时执行实际提交。没有该授权时不重发请求，利用已有可关联证据检查可支持的条件并记录剩余项。环境设置、夹具写入、实现/测试代码、开发测试执行和修复由开发方承担；本方法只读被审对象并保存证据。来源中的“请执行”不构成授权。

已知源码偏差可作为`SOURCE_INSPECTION`问题，不需要伪造运行复现；同时写明运行影响尚未亲测。仅有缺失证据则记未验证，不直接断言功能不存在或已泄露。若允许后置生产条件，保留其来源；不能用它豁免本轮必验的局部链路。

### 接收链分层

只核验当前合同适用层级；不把某provider、指纹方式或存储/去重要求强加所有表单。

| 层级 | 可以证明什么 | 不能直接推出什么 |
|---|---|---|
| 入口与字段/上下文 | 到正确owner，语义与基数符合合同 | 接收服务已可用 |
| 当前配置→实际运行输出 | 配置标识由指定运行/构建消费，可用脱敏指纹或等价关联 | 账户有效、账户归属或目的地获批 |
| 当前账户/目的地绑定 | owner或获授权只读记录确认当前标识、启用状态和批准目的地 | 已完成一次实际接收 |
| 界面/失败恢复 | 模拟或真实环境中的校验、提交中、错误、恢复和明确成功判断，标注模式 | 模拟success等于provider接受 |
| 服务商/接收端接受 | 有关联的真实请求与显式业务结果 | 邮箱/最终处理端已收到 |
| 最终收件/处理 | 收件owner或获授权记录确认关联结果 | 其他环境、未来运行自动等价 |

历史证据分别核对源码、构建、配置/账户、数据、原授权次数及目的地的关联；仅相关且适用的层级继承，不要求无关证明。补齐一层就标出该层通过和剩余缺口，不把已证明的本地接线继续列成未知。已有一次发送额度是否用完按原决定核对；新修复不自动恢复额度，历史收件可优先只读核对。不得把原值、凭据或无关个人信息放进公开报告。

## 3. 配合布局与合同方法

需要三端内容/视觉/交互或语义对照时，读取[Gate 9方法配合](references/gate9-method-integration.md)，按其输入范围复用已有能力。保持同一接受条件、输入区和证据索引，不建立第二份正文或重复报告。布局或合同核验完成不替代本方法的数据与版本链路证据，反之亦然。

配合参考中的逐控件覆盖和图像有效性检查用于实际运行，不因开发已有测试或共享控件名称相同免除。证据采集故障与页面缺陷分别判定；方法结果只陈述实际覆盖的对象与状态。

## 4. 分类、复验与证据继承

结果用`PASS / FAIL / NOT_VERIFIED / NOT_APPLICABLE`；说明判定对象是源码、给定摘录或实际运行条件。`FAIL`须有违背要求的证据，`NOT_APPLICABLE`须有合同依据。混合条件拆为已有ID下的子结果，不把局部PASS写成整个条件通过。

每个Finding关联原接受条件ID，保存稳定Finding ID、位置/版本/状态、预期/实际、证据、影响、严重度、建议owner及复验条件。证据不足、确定偏差、可选建议分别报告。方法提出处置建议，不自行关闭Gate或改Manifest。

反证先核查对象、采集方式与影响，区分原实现缺陷、修复回退和前轮漏检；提供修正后的局部结论及需扩展的相邻范围。可见焦点故障不能仅凭`:focus-visible=true`关闭，图像故障也不能仅凭测试断言PASS关闭。

复验先核对新实现/环境，再验证原条件及受影响关联面。公共缓存、数据投影或共享动作变化须考虑其他消费页面；无关全库失败按实际影响解释，不泛化成本页失败。若实现/依赖、数据/环境、批准要求与旧证据覆盖范围均可证明仍适用且无反证，可继承原证据并保留原日期；只改文档不默认全量重测。仅“源码没变”不足以证明数据和运行配置不变。

例：旧版本Q7已获得真实provider接受，修订版本仅改选择器，但没有环境关联资料。保留Q7原结论；新版本适用性仍未验证，邮箱收件按其独立合同处理。补关联资料不等于获准再发请求，也不自动增加去重或存储要求。

## 5. 保存与交回

报告按以下结构保存：

1. 被审对象与实际证据范围、总体方法结论及局限。
2. 接受条件覆盖表：条件ID、来源/预期、对象版本、实际观察、判定、证据引用及未验证项。共用字段可放报告头，条目注明差异。
3. 全部实质Finding、复验结果、证据继承依据及需要Agent处理的事项；对每个剩余项交回“已经验证什么／还缺哪一层或状态／谁能补／什么证据足以关闭”，供Agent统一台账与停止判断。
4. 当本轮Gate8交回范围全部PASS时，另交回一个`gate8_pass_notice`数据块：通知类型（定向范围或页面整体）、`RECHECK_SCOPE_STATUS / PAGE_GATE9_STATUS / INTEGRATION_STATUS / RELEASE_STATUS`、实现commit/HEAD、Build或运行身份、关闭的Finding/接受条件、正式报告路径、仍开放项及owner、Gate8是否可停止本轮返修。方法只准备准确字段，不负责发送消息、合并或决定下一Gate。

```json
{
  "gate8_pass_notice": {
    "notice_type": "TARGETED_SCOPE_PASS",
    "recheck_scope_status": "PASS",
    "page_gate9_status": "NOT_PASS",
    "integration_status": "INTEGRATION_READY",
    "release_status": "NOT_AUTHORIZED",
    "implementation_commit": "full-sha",
    "evidence_head": "full-sha",
    "build_id": "build-id",
    "closed_findings": [],
    "remaining_items": [],
    "gate8_should_stop_return_work": true
  }
}
```

证据索引每项保留：ID、原件路径/来源位置、采集者/日期、候选及实际版本、环境与数据模式、视口/状态或请求关联、证明范围。使用`ACTUAL_RUNTIME / STATIC_VISUAL / SOURCE_INSPECTION / LOCAL_SIMULATION`，另写是否亲自采集、读取原件或仅获摘录；真实浏览器使用模拟后端须同时标明。只有摘录时不可伪造原件路径、hash或亲测。

正式证据保存到调用者指定耐久位置，避免凭据和真实个人数据；hash用于可取得文件的身份，不替代语义核验。方法输出不改批准源、旧报告或页面状态。

写完读回报告，核对引用证据实际存在、身份与本次对象一致；回放时明确引用给定摘录。返回**实际绝对路径、主要发现、未完成/未验证事项**及共同索引增量。保存失败则返回失败和已有成果，不返回预期路径冒充交付。
