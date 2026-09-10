# 四个 Country Market 页面 Gate 9 返回 Gate 8 V0.1

日期：2026-09-08。Return ID：`G9-MARKET-FOUR-RETURN-20260908-01`。来源控制：`G9-MARKET-FOUR-20260908-01`。

对象：Spain `/markets/spain/`、India `/markets/india/`、Netherlands `/markets/netherlands/`、Belgium `/markets/belgium/`；验收commit `2c97fe19b56f14e12c6e27daa7fd3c9a49207570`。四页Gate 9首轮独立只读验收均已完成，结论均为`GATE9_NOT_PASS / CHANGES_OR_EVIDENCE_REQUIRED`。本返回是可发送给Gate 8及依赖owner的准确任务包；尚未对外发送，不授权修改D23批准内容、真实表单提交、合并、部署、发布、DNS或索引。

## 1. 总控结论

| 页面 | PASS | FAIL | NOT_VERIFIED | 主要结果 |
|---|---:|---:|---:|---|
| Spain | 1 | 4 | 7 | 两项页面实现偏离；四个目标404；共享交回不完整 |
| India | 2 | 2 | 8 | India Trade目标404；共享交回不完整；运行与焦点证据不足 |
| Netherlands | 2 | 2 | 8 | 页面正文/静态视觉局部成立；共享交回不完整；VVVF直接可达性和运行层待证 |
| Belgium | 0 | 1 | 11 | V1.1两处内联焦点实证缺失；共享交回不完整；准确运行对象缺失 |

四页批准正文、Page ID、URL、关键词、Malaysia原产地范围和Gate 6组合没有被本轮修改。静态实现整体未发现内容越权、错误scope fallback或伪造图片；局部PASS只在各报告注明的静态/源码对象范围内成立。

## 2. Gate 8必修

### `BATCH-G9-F01` — 共享实现发生实质变化，交回来源与回归不完整

页面映射：`ES-G9-F04 / IN-G9-F04 / NL-G9-F01 / BE-G9-F03`。这是一个批次共同根因，不计为四个独立缺陷。

准确commit修改了Global Chrome断点与compact menu、在menu加入RFQ、把Cookie Settings改为原生`dialog`并改变焦点/滚动、调整Header/Footer及EN/BM根布局字体绑定；Gate 8回执将其概括为“复用”，没有原共享owner决定、base→candidate准确偏差、全部受影响EN/BM消费者清单和回归处置。

关闭方式二选一：

1. 原共享owner接受绑定准确commit的diff，并补受影响消费者、768/390 Menu、Cookie Settings、法律入口、逐类可见焦点/恢复及EN/BM代表页面回归；或
2. Gate 8拆除/分离未经批准的共享变化，交回新的准确commit及变化说明。

### `ES-G9-F01` — Spain主内容hover/focus状态偏离

按批准视觉恢复Primary、Secondary和text入口的hover/focus角色及3px/3px焦点轮廓；在新commit实际操作面包屑、Primary、Secondary、text代表入口，交1440/768/390适用状态原图和相邻回归。

### `ES-G9-F02` — Spain排版与行动几何偏离

恢复批准的H1/H2 `font-weight:650`、390普通正文/列表16px、行动`padding:13px 24px`及`min-height:50px`；交computed style、三端整页原图和无裁切/相邻回归。

### `BATCH-G9-F02` — 缺少绑定验收对象的可访问运行实例

当前未取得承载准确commit/CMS数据/Build模式的可访问只读实例；本机已识别端口均未提供四条country route。Gate 8需交回可访问URL、完整commit、Build ID、CMS/配置关联及有效时段。无需为此重跑无关全仓测试。

在该实例上，Gate 9将定向完成初始SSR/head、逐控件键盘、Menu/Cookie、链接最终目标、RFQ/Documents无外发交互、错误恢复和七面scope/cache验证。开发自测可引用，但不能代替独立运行结论。

## 3. 依赖owner任务

| 对象 | 当前状态 | Owner / 关闭证据 |
|---|---|---|
| Spain三个Application目标 | Gate 8验证报告登记local 404 | APP-COAT、APP-PLAS、APP-MB完成批准route；同一验收环境逐个打开，核对Page ID、scope、内容与返回路径 |
| EU Trade目标 | Gate 8验证报告登记local 404 | RES-TRADE-EU完成批准route并补当前官方来源/日期；Spain保持原href |
| India Trade目标 | Gate 8验证报告登记local 404 | RES-TRADE-IN完成批准route并补当前官方来源/日期；India保持原href |
| Belgium两处内联链接焦点 | 实现使用不同通用外置轮廓，尚无实际聚焦几何 | Gate 8提供准确实例；Gate 9在1440/768/390聚焦`Product Hub`与`quotation request`，核对44px、轮廓、邻文及标点。实测失败后再定向修复 |
| Netherlands VVVF | 近期官方索引支持有限表述；本轮直接打开超时 | 内容/source owner补成功的日期化直接响应和正文支持；不从超时推导断链 |
| RFQ/Documents接收 | 本地接线与开发断言不能关闭provider、失败/重试、邮箱和隐私层 | 各receiver/release owner按原合同补分层、可关联证据；本返回不授权真实重发 |
| 设备与可访问性 | native 200%、forced-colors、非Chromium、真实设备/触摸与AT未关闭 | 对应运行/设备owner在准确候选提供合同要求的适用证据，Gate 9定向复核 |

## 4. 复验边界

Gate 8修复须沿用原Finding ID，交完整commit、Build/环境身份、逐项变化和受影响范围。Gate 9只重验变化、原失败状态及相邻风险；正文、SEO/Schema和静态图等已核对且实现/依赖/环境身份未受影响的证据可以继承。

四页当前均不关闭Gate 9，也不启动Gate 10。必须先处理`BATCH-G9-F01`、Spain两项实现偏离并提供准确运行实例；各route/receiver/source/设备依赖按其owner并行补证，不把依赖404错误归给Spain或India页面本体。
