# 六个Resource页面 Gate 6执行控制 V1.0

日期：2026-09-08。Control ID：`G6-6RESOURCE-20260908-01`。状态：`COMPLETED / GATE6_APPROVED_CLOSED_6_OF_6`。

用户从当前Gate 6未启动队列中选定R706 Alternative、Chemours Alternatives、EU Trade、UK Trade、India Trade、Brazil Trade，并明确要求“使用子代理完成”。本控制授权六页Gate 6执行、不同身份独立复核、必要返修/定向复验及总控依常设授权关闭；不授权Gate 8外发、开发、Gate 9、部署或发布。

## 分派与角色隔离

| Dispatch | EXECUTE页面 | 初始执行者 | 交叉独立复核者 |
|---|---|---|---|
| `G6-RES-A-EXEC-01` | `RES-R706`、`RES-CHEMOURS` | subagent A | subagent C |
| `G6-RES-B-EXEC-01` | `RES-TRADE-EU`、`RES-TRADE-UK` | subagent B | subagent A |
| `G6-RES-C-EXEC-01` | `RES-TRADE-IN`、`RES-TRADE-BR` | subagent C | subagent B |

每页写入仅限自身`05_review/`和`06_handoff/`中的Gate 6执行报告、唯一候选交付包及必要机器证据。执行者不得创建或更新当前Manifest，不得自签独立PASS或关闭Gate 6。复核者只写独立复核/定向复验记录，不改执行包；Finding返回原执行者修订。总控最终核对身份、输入、输出、Finding和依赖后维护唯一当前Manifest及Status/Index。

## 共同合同

- 当前基线：Gate 6 Agent V0.7、合同一致性Skill V0.3、开发交付Skill V0.3、执行与复核合同V1.1、新Gate 5→6接收合同V1.0。
- 六页默认从`FAST_PATH`开始判断；只有源、事实、URL、共享owner、审查覆盖、关闭或矛盾证据触发时才定向升级，不重复完整视觉截图和全量交互。
- 每页先核对六项接收对象，再形成唯一Gate 6包，锁定批准内容/视觉/行为/共享引用、开发映射、稳定Gate 9接受ID、开放依赖owner/接受条件和失败判定。
- Trade页面的动态贸易事实按批准源、新鲜度和包内边界处理；不能把历史日期外推为当前实时结论。R706/Chemours不得扩张“等同”“一比一替代”等未批准能力声明。
- 交付包可供Gate 8读取原型源与规格，但Gate 6不编写生产代码，也不承诺Gate 4原型可直接合并。

## 停止点

只有不同作者身份返回`REVIEW_PASS`、全部本阶段必修关闭、依赖可执行且总控登记`APPROVED / CLOSED`后，页面才成为`APPROVED_FOR_HANDOFF`。关闭后停止，不实际外发；Gate 8须另获用户授权。

## 完成结果

六页均已由子代理执行或接收既有子代理执行链，并由不同身份完成独立复核；全部必修Finding最终关闭。

| Page | Final package | Review result | Current Manifest |
|---|---|---|---|
| `RES-R706` | `RES-R706-G6-HANDOFF-02` V0.2 / `6b94e44c…d110c` | V0.1 Finding 1 → V0.2 targeted `REVIEW_PASS` / 0 open | V0.7 |
| `RES-CHEMOURS` | `RES-CHEMOURS-G6-HANDOFF-02` V0.2 / `708568bb…bd9c` | V0.1 Finding 1 → V0.2 targeted `REVIEW_PASS` / 0 open | V0.19 |
| `RES-TRADE-EU` | `RES-TRADE-EU-G6-HANDOFF-01` V0.1 / `bb1b44d4…21ad` | `REVIEW_PASS` / 0 open | V0.7 |
| `RES-TRADE-UK` | `RES-TRADE-UK-G6-HANDOFF-01` V0.1 / `b2093299…2c59` | `REVIEW_PASS` / 0 open | V0.7 |
| `RES-TRADE-IN` | `RES-TRADE-IN-G6-HANDOFF-01` V0.1 / `5fa99b70…e0e9` | `REVIEW_PASS` / 0 open | V0.7 |
| `RES-TRADE-BR` | `RES-TRADE-BR-G6-HANDOFF-02` V0.2 / `9d0b24b5…c592` | RC-F01 → targeted `REVIEW_PASS` / 0 open | V0.9 |

最终实际身份如下：R706/Chemours由`/root/g6_res_r706_chemours`执行、`/root/g6_res_trade_in_br`复验；EU/UK/India分别由既有子代理`/root/gate6_trade_eu`、`/root/gate6_trade_uk`、`/root/gate6_trade_in`执行并由`/root`独立复核；Brazil初版由`/root/gate6_trade_br`执行，`/root/g6_res_trade_eu_uk`完成定向修订，`/root/g6_res_trade_in_br`完成最终定向复验。所有最终作者与最终审查者身份均不同。

[完成机器审计](GATE6_SIX_RESOURCE_COMPLETION_AUDIT_V1.0.json)复算六个最终包与复核记录的SHA-256，核对稳定验收/依赖定义、关闭授权、当前Manifest和Status/Index入口；结果`PASS`，6/6通过，必修Finding 0，26份最终Markdown本地引用缺失0。

Brazil V0.1曾把必需PT-BR支持入口错误改为条件出现；交叉审查挑战后，V0.2恢复批准合同：链接必须显示并精确指向`/pt-br/markets/brazil/`，目标未就绪阻断affected path和complete-site release，不得隐藏、禁用、重链或fallback。R706/Chemours V0.1错误转录Gate 5首审ID，V0.2改为实际`G5-9PAGE-REVIEW-20260907-01`，其余合同保持。

六页最终生命周期均为`APPROVED_FOR_HANDOFF / HANDED_OFF=NO`。Gate 8、Gate 9、开发、部署、发布、DNS和索引未由本控制授权。
