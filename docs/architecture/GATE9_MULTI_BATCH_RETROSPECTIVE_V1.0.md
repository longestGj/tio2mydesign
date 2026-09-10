# Gate9 多批次任务复盘 V1.0

日期：2026-09-08  
范围：Poland；Spain/India/Netherlands/Belgium；Brazil EN/PT、Chloride、DOC-COO；Trade 4 + Application 5；Germany/Italy/Sulfate/R-706/Chemours。

## 1. 总体判断

Gate9已经从“读开发回执并核对页面”进化为能区分合同、源码、构建、运行、接收和发布层级的独立验收。最明显的进步是：不再把开发测试、HTTP 200、静态截图或源码存在直接推导为运行通过；Finding使用稳定ID；复验只重测变化与相邻影响；通过后能明确让Gate8停止无关返修。

当前主要短板已经从审查判断转到交接和运营：候选runtime未在接单前预检、证据清单偶有声明与文件不一致、共享依赖在多个页面重复出现、定向范围通过与页面整体通过容易混淆、D23多入口同步依赖人工，以及通过后曾漏发Gate8通知。

## 2. 各轮带来的关键经验

| 批次 | 暴露的问题 | 形成的能力 |
|---|---|---|
| Poland | 代表控件通过却遗漏末端焦点；200%图像纯白/截断仍被测试断言为PASS；多轮后难分已关闭项与外部依赖 | 逐控件/等价表现覆盖；保存后打开证据原件；区分采集故障与页面缺陷；稳定Finding台账；实现必修清零后停止返修 |
| Spain/India/Netherlands/Belgium | Gate8缺少当前可访问候选；共享Chrome/Consent变化披露不足；route 404、focus与页面视觉混在同一结论 | 绑定精确commit/build；共享owner与页面owner分离；静态、运行和开发自检分层；route依赖定向复验 |
| Brazil EN/PT、Chloride、DOC-COO | 源码已修复但runtime失效；回执声明的JSON文件实际缺失；旧CLI/线程协调造成绕路；局部通过与页面通过边界不清 | 不以源码替代Back/Forward实测；缺证时关闭已证明项并只退回runtime/证据；恢复后独立执行fresh/edit/Back/Forward/direct revisit/intentional clear；建立Gate8通过通知闭环 |
| Trade 4 + Application 5 | 九页121项AC与66项依赖带来报告膨胀；同一`/applications/`404影响九页；临时URL机器身份、共享route和外部来源属于不同owner | 页面AC逐项四值裁定；共享Finding统一ID并列消费者；临时route与Canonical资格分离；外部来源404与403/网络不可证分离 |
| Germany/Italy/Sulfate/R-706/Chemours | 本地页面本身多数正确，但共享RFQ/Sample、真实接收、设备/AT及route authority使五页全部NOT_PASS | 清楚区分页面实现缺陷、共享功能缺陷、证据阻塞和authority blocker；不要求页面开发者修自己无权处理的共享/外部问题 |

## 3. 已经做对的事情

1. **身份锁定更可靠。** 当前会同时核对repository/worktree、branch、implementation commit、evidence HEAD、Build ID、runtime、scope和clean status，避免把别的端口或旧构建写成当前候选。
2. **证据类型不再互相替代。** 源码只能证明路径和条件；构建证明精确输出；浏览器证明交互；provider/收件另有层级。Brazil RFQ的处理证明这条边界有效。
3. **Finding可追踪。** 首轮、返修、补证和定向复验沿用同一ID，能够准确说明关闭了什么、还有什么未验证。
4. **复验范围逐步收窄。** 已证明且身份/影响未变的结果允许继承，只重验原Finding和相邻影响，减少机械全量返工。
5. **问题归属更准确。** 页面偏差交Gate8；合同或route批准交原owner；环境缺口记`NOT_VERIFIED`；外部发布条件不伪装成页面代码错误。
6. **对真实业务动作保持边界。** 没有授权时不真实提交表单、不写生产CMS、不把2xx当provider或邮箱成功。
7. **已补上通知闭环。** Gate9 Agent V0.4要求定向范围或页面整体通过后主动通知原Gate8任务，说明通过层级、精确候选、剩余项和是否停止返修。

## 4. 不足与造成的代价

### 4.1 接单预检太晚

部分任务在大量读取和对照后才发现runtime不可访问、不是目标Build或缺关键证据。Brazil补证前3024失效，Spain/India首轮也没有绑定当前候选的可访问入口。结果是大量条件只能记`NOT_VERIFIED`，并增加一次返还。

### 4.2 Gate8证据包仍不够原子

Brazil回执曾声明`focused-vitest.json`和`focused-playwright.json`存在，但实际提交没有文件。文字回执、文件系统、commit和runtime没有由同一机器清单同时校验，Gate9需要人工追查。

### 4.3 状态层级表达曾混淆

“四个定向Finding通过”“某页Gate9通过”“允许进入Gate10”“允许发布”是四个不同结论。Brazil定向4/4关闭后四页仍`GATE9_NOT_PASS`；如果只说“通过”，Gate8和用户都可能误解。

### 4.4 共享问题重复污染页面统计

`/applications/`、RFQ、Sample、receiver、设备/AT等共享依赖会同时让多页失败或未验证。逐页保留映射是必要的，但把同一根因重复写成多个独立问题，会夸大返修量并让开发者误以为需要逐页修改。

### 4.5 批量报告过重

Trade/Application九页首轮需要追踪121项AC和66项依赖。覆盖是充分的，但人工阅读、同步和复验成本高；共享证据在九页中多次展开，真正需要行动的四个根Finding反而不够突出。

### 4.6 状态文件同步曾出现漂移

Brazil补证过程中，正式报告已经纠正为“Chromium可启动、runtime路由超时”，状态页一度仍写“无监听、spawn EPERM”；返修包也一度引用已放弃的旧报告路径。虽然随后纠正，但说明报告、Manifest、Index、Status和消息缺少统一提交检查。

### 4.7 工具与任务协调存在无效绕路

曾把旧版Codex CLI无法启动目标模型误认为阻塞，实际可直接向已有Codex任务发送消息。另有PowerShell管道语法错误和一次状态文本换行写入错误。这些没有改变验收结论，但浪费时间并增加记录污染风险。

### 4.8 永久性`NOT_VERIFIED`缺少前置owner计划

真实设备、screen reader、native 200%、provider、邮箱、生产缓存/隔离等项目在多个批次重复开放。如果Gate6/Gate8没有事先声明环境、授权、owner和证据时间点，Gate9只能反复登记，无法形成可预测的关闭路径。

## 5. 下一步改进优先级

### P0：建立Gate9接单预检

正式验收前先检查：批准Manifest和AC、implementation/evidence commit关系、Build ID、runtime实际Build、scope、clean status、证据文件存在/hash、服务持续可用、Gate8任务地址。预检失败时仍可做静态审查，但立即把运行条件标为缺口，避免做完大半才发现候选不可用。runtime由Gate8保持到收到Gate9通过/退回消息，或明确交接新的候选。

### P0：固定三层状态

所有报告和消息同时给出：

- `RECHECK_SCOPE_STATUS`：本轮指定Finding是否全部关闭；
- `PAGE_GATE9_STATUS`：页面整体是否通过Gate9；
- `RELEASE_STATUS`：Gate10/合并/部署/发布是否获授权。

任何“通过”必须带层级，禁止单独使用模糊PASS。

### P0：证据Manifest机器校验

Gate8交回一个机器可读清单，逐项列路径、hash、生成命令、commit/build、环境、证明范围和是否为开发自检。交回前验证所有声明文件真实存在。Gate9接单时独立重算关键hash和身份。

### P1：共享Finding建根因台账

共享route、RFQ、Sample、receiver和设备矩阵各保留一个根Finding ID，再映射受影响页面和AC。返修只派给共享owner；页面Manifest记录影响，不要求每页各修一遍。

### P1：批量报告采用“共享证据一次＋页面差异表”

共享Chrome、scope、receiver、route和设备证据只评估一次；页面报告只列本页差异与映射。总控首页突出可行动根Finding、owner和停止条件，完整AC矩阵放审计JSON。

### P1：把交回收口做成固定事务

顺序固定为：正式报告与审计证据 → 当前Manifest → Index/Status → 本地链接/旧指针检查 → Gate8通过或返修消息 → 保存目标任务ID和送达结果。任一步失败都不声称交接闭环完成。

### P2：在Gate6/Gate8提前安排难验证条件

对设备/AT、provider、邮箱、生产缓存/隔离和authority决定，在Gate6交付中提前写owner、允许动作、所需环境和计划验收时间。Gate9只验证已安排且当前适用的条件；没有环境时准确保留阻塞，不重复向页面开发者退回。

### P2：沉淀Gate9只读复验工具

把当前反复使用的身份探针、连续HTTP、Build绑定、RFQ history、内部目标、Schema和证据链接检查整理为只读工具。工具输出统一审计JSON；工具PASS仍由Agent结合合同作结论，不自动关闭Gate。

## 6. 衡量是否真正改善

后续三批Gate9应观察：

- 因runtime/缺文件导致的二次返还次数是否下降；
- 同一共享根因是否只产生一个开发任务；
- 定向通过后是否100%向原Gate8任务发送通知；
- 报告、Manifest、Index和Status是否无旧指针或结论冲突；
- `NOT_VERIFIED`是否都具备明确owner、所需证据和关闭时间点，而不是无限重复。

本复盘不改变任何页面Gate状态、批准内容或发布权限。具体改进进入Agent/Skill或Gate8交接合同时仍需保持Agent负责判断、Skill负责方法、项目资料保存当前事实的分工。
