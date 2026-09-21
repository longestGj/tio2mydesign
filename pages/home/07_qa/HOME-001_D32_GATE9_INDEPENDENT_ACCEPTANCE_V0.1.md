# HOME-001 D32 Gate9 首轮独立验收 V0.1

日期：2026-09-20。Review ID `HOME-D32-G9-20260920-01`。总控 `/root`；独立运行 Reviewer `/root/d32_gate9_runtime`；独立视觉/交互 Reviewer `/root/d32_gate9_visual`。均未参与D32实现。用户授权：“启动Gate9独立验收。”

## 结论

**11项AC通过，A09部分通过但必要证据不足。确认的实现必修缺陷0，证据开放项1。页面Gate9不整体通过，未签READ_ONLY_QA_APPROVED。**

| 层级 | 状态 |
|---|---|
| RECHECK_SCOPE_STATUS | INITIAL_REVIEW_COMPLETE / VERIFIED_SUBSET_PASS / A09_EVIDENCE_INCOMPLETE |
| PAGE_GATE9_STATUS | NOT_PASS / REQUIRED_EVIDENCE_REMAINS |
| INTEGRATION_STATUS | NOT_READY / HOME-VU-DEP-03_OPEN |
| RELEASE_STATUS | NOT_AUTHORIZED |

实际候选：`D:/32Wordpress_new`，branch `codex/home-001-wordpress`，implementation `a75572a36cc50e820b640fca663a3a60594029cb`，evidence HEAD `9de5ef0e3409daf9c9cb675efb26f54d7c7ba6c6`。制品 `wp-f576fa2d7a74ab057e5878765db4187ae7b2689aaf921f8c5d6f5ab0bac6fc3e`；内容SHA `ee6a324ea68ada21e9424f930ed52f87800cea9e982c0feb4fd9ef456b71a992`；预览 `http://127.0.0.1:8232/`，scope `tio2-my`。机器Manifest SHA `6A9071B539BB948712B490B1BE3738F26D9281971DCF9DBCCA8CCBD87E1D4232`。

批准输入：[唯一Gate6包V0.2](../06_handoff/HOME-001_D32_GATE6_HANDOFF_PACKAGE_V0.2.md)及[关闭](../05_review/HOME-001_D32_GATE6_PROJECT_CONTROL_CLOSEOUT_V1.0.md)，精确组合不变。[控制记录](HOME-001_D32_GATE9_CONTROL_V0.1.md)说明派发和只读边界。

## 实际独立覆盖

总控已实际读回三份报告、独立预检原件及内链HTTP证据，并打开移动首屏、菜单焦点和Cookie原图核对呈现；不重复子代理的全套专业扫描。完整覆盖及证据类型由以下原件支持：

- [运行/内容/SEO报告](HOME-001_D32_GATE9_RUNTIME_REVIEW_V0.1.md)：原validator独立PASS、两轮预检2/2；31实际主题/插件文件、Git blob、复制制品与实际运行/恢复内容指纹关联；九模块完整文本及链接、五节点七关系精确对照。
- [视觉/交互报告](HOME-001_D32_GATE9_VISUAL_INTERACTION_REVIEW_V0.1.md)：实际浏览器五宽度1440/1024/768/390/320、完整可读画面、导航/模块/媒体、Menu/型号/Cookie交互、键盘与可见焦点、44px命中区。诊断图排除及补图按原报告记录，不用无效画面判通过。
- [运行内链报告](HOME-001_D32_GATE9_LINK_RUNTIME_REVIEW_V0.1.md)：原59导航实例href保持，额外Skip及Cookie操作链接有合同依据，25真实目标独立GET为1个200、24个404，无越站回退。

| AC | 综合结论 | 依据与限度 |
|---|---|---|
| HOME-VU-A01 | PASS | 首次内容、来源到CMS/实际HTML及恢复身份；后台动态记录由开发原件+独立源码/当前状态核验支持，不声称QA亲自写CMS |
| HOME-VU-A02 | PASS | 品牌、网格、层级及功能色，实际截图和样式 |
| HOME-VU-A03 | PASS | 最新开放白底Hero、真实素材与56/44/36字号、批准主宽度行数 |
| HOME-VU-A04 | PASS | Start Here位置、三入口及响应布局 |
| HOME-VU-A05 | PASS | 四组14非链接型号，实际键盘展开/收起 |
| HOME-VU-A06 | PASS | RFQ五宽度显示/隐藏与六标签；真实询盘目标另属DEP-03 |
| HOME-VU-A07 | PASS | 唯一共享实现、品牌资产、菜单与未启用分析态Cookie；法律目标正文另属DEP-03 |
| HOME-VU-A08 | PASS | 五宽度全部内容、重排与可读性，无确认裁切/溢出 |
| HOME-VU-A09 | PARTIAL / NOT_VERIFIED | 浏览器键盘/焦点/隔离/命中区通过；真实设备/AT/原生200%尚缺，见VF01 |
| HOME-VU-A10 | PASS | 本地元数据、唯一输出owner、完整五节点图；不预签生产索引 |
| HOME-VU-A11 | PASS_WITH_DECLARED_EVIDENCE_LIMITS | 当前单站模型、正向输出/实际媒体与原异常证据独立审读；QA未改scope重演异常，不推导未来多站行为 |
| HOME-VU-A12 | PASS | 原工具与真实WP替代身份链独立核对；不是Next标记关闭即通过 |

## 唯一当前问题与依赖

`HOME-D32-G9-VF01`：**EVIDENCE_INCOMPLETE / OPEN**，关联A09，非已确认代码故障。已验证浏览器键盘、AX、焦点、模态、触控命中区；尚缺真实物理触控、命名读屏软件/浏览器版本下的实际播报与焦点，以及浏览器原生UI 200%缩放前后可关联证据。由具备设备/AT环境的验收者及开发证据owner补交，总控协调；补齐后定向验收，或由用户明确决定D32本候选的范围例外。无此决定不得自动豁免，旧D16决定不继承。

原DEP处置：

- DEP-01：本候选身份/原工具兼容已独立验证，准确候选范围满足。
- DEP-02：首版导入、来源、编辑恢复与实际视觉组合有证据，准确候选范围满足。
- DEP-03：24个实际404目标继续开放，owner为各页面/法律/接收功能负责人；阻断完整买家路径及集成/发布，不要求首页owner伪造24页或删除链接。
- DEP-04：首轮独立验收已执行，但页面整体关闭仍因VF01未满足。
- DEP-05：发布条件与明确授权未完成；无部署、合并、push、DNS、索引或Analytics激活授权。

新空卷重装/整库灾备未在本轮执行，不能用内容恢复快照声称已验证完整灾备；本批合同未要求把此局限另列为首页代码缺陷。开发编辑测试的残留媒体不作为前台使用素材，当前已批准Hero身份核验通过。

## 交回与停止

开发方无需无针对性修改首页代码或重做视觉；本轮无代码返修项。VF01只补准确缺失证据，已有有效范围保留；24目标按后续页面开发处理。独立验收执行完成不等于页面Gate9通过。

按[Gate9角色收口规则](../../../agents/gate9-read-only-acceptance/agent.md)向原任务 `00首页开发`（`01a0bca9-1318-7022-aa49-8723850227f7`）发送本精确候选的分项结论/补证通知；送达事实由同名前缀通知JSON记录。保持本地预览便于核对，变更或停止前明确记录运行身份；不另启生产操作。当前状态由新版首页Manifest导航。
