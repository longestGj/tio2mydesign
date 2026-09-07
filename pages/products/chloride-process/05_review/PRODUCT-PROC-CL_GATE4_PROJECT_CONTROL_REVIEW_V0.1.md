# Chloride Process Gate 4 总控审查 V0.1

2026-09-07 · PRODUCT-PROC-CL · EN · `/products/chloride-process-titanium-dioxide/` · `site_scope=tio2-my`。

**PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL**。V0.1视觉方向、规则与代表样例可提交用户；本轮无必修Finding，不制造返修。Gate 4尚未关闭，Gate 5及开发、发布未授权。

## 对象与方向

冻结 **CL-G4-V01-SOURCE-01**，正式目录`04_planning/gate4-v0.1/`：

- [方向及可执行规则](../04_planning/gate4-v0.1/PRODUCT-PROC-CL_GATE4_VISUAL_DIRECTION_AND_METHOD_REPORT_V0.1.md)、[本地样例源](../04_planning/gate4-v0.1/PRODUCT-PROC-CL_GATE4_VISUAL_SAMPLES_V0.1.html)
- [冻结输入与依赖](../04_planning/gate4-v0.1/approval_core/source-freeze.json)、[26张正式图身份](../04_planning/gate4-v0.1/approval_core/export-inventory.json)、[完整资产清单](../04_planning/gate4-v0.1/asset-inventory.json)
- [执行自检](PRODUCT-PROC-CL_GATE4_EXECUTION_SELF_CHECK_V0.1.md)、[正式独立审查](gate4-project-control-v0.1/independent-review/report.md)

保留文本主导的技术目录：深蓝标题、Inter、浅Hero、白色连续目录；首屏以Explore Chloride Grades为实心主行动，RFQ为次入口。八个Grade名称、完整摘要、URL、顺序及三端对应保持同等视觉权重，不增加排名、推荐或图片含义。三步评估保持普通连续说明。实际细化包括辅助行动显式浅色hover、页内实心行动Navy hover、统一浅分隔线，以及共享浅底控件的当前功能色适配。

## 依据、独立性与检查

原始Brief、A V0.4/B V0.2/C V0.6、Gate 3批准V0.15→V0.14及交接表保持；B是唯一可编辑正文源。Poland的用户批准已关闭前序Gate 4，当前[CL-G4-QUEUE-01](PRODUCT-PROC-CL_GATE4_USER_AUTHORIZATION_V0.1.md)授权本页执行。Poland仅为视觉参考与辅助hover漏检经验，不是本页源模板。

执行者 `/root/gate4_design` 制作和自检；不同的 `/root/gate4_review_a` 从原始合同开始，冻结后先查看实际源/26图并独立运行，再核作者报告。root接收全部文件、逐张原尺寸查看26图并另算身份，最后整合审查；自检不替代独立结论。

| 风险 | 经核验的结论 |
|---|---|
| 正文和职责 | 三端B全文、16条main链接及八Grade精确绑定一致；process定义与限制同模块，五应用示例未变成Grade适用矩阵，未知Grade和人工联系句完整。 |
| 连续目录 | 1440为160/826/150px三列；768为116/564px两列，名称与View在同侧；390依次名称→完整摘要→入口。每项对象在所属行内，最长M-896完整，无排名暗示。 |
| 视觉与几何 | 全部正式区域/状态已看；可见控件至少44×44px，Grade入口48px高；文字无发现裁切，三宽度无横向越界。 |
| 实际状态 | 所测辅助hover Teal/浅底4.5201:1，主行动normal白/Teal4.8177:1、hover白/Navy13.9594:1；实际键盘focus可见，外侧与内侧轮廓按真实表面核对。 |
| 锚点与无JS | 三端Enter到可见目录H2，下一Tab到M-350；直接fragment及无JS原生目录路径可用，不引入选中Grade。 |
| 共享与导航 | Products当前项、固定RFQ、批准Logo及Footer法律/Cookie保持；菜单/Cookie进入、循环、背景隔离、退出恢复已实测。15条非锚点main链接每宽度实际点击，RFQ/DOC仅source_page_id，Grade无隐式选择；结果为本地记录，不是生产接收。 |
| 身份与复现 | 独立复算71条源/输入/PNG身份无差异，三端Header+Hero同范围内存重渲染与正式图逐字节相同；没有重复保存整套独立栅格图。 |

root的[核心核对](gate4-project-control-v0.1/controller-core-check.json)确认main与批准G3逐字相同，Logo引用路径规范化后body及脚本一致；[交付核对](gate4-project-control-v0.1/controller-delivery-check.json)复算49个交付/支持文件无不一致。数量仅描述记录范围，不作质量评分。独立报告保存运行、静态、源码与本地模拟各自范围。

## 失败留痕与后续范围

作者两次工具问题分别是外侧焦点背景取样错误、区域截图边界错误，已纠正并保留原脚本/失败与拒用片段；源未因此修改。独立复现首次误把不含Header的区域与含Header的正式Hero比较，纠正为同范围后三端一致，原值和更正保留。没有把这些工具问题包装成设计缺陷或失败证据通过。

三端Hero、目录上下段（完整八项）和三步评估均有完整区域样例；390另含process、末段RFQ、Footer；三端锚点/Cookie、两端菜单及代表hover/focus形成实际状态证据。未单独导出的Desktop/Tablet process和末段RFQ沿明确split/body/action规则复用。Gate 5另需完整1440/768/390页面、所有连接和节奏、全宽Footer及完整状态组合。

菜单跨桌面断点后焦点落BODY为批准G3既有行为，保留共享owner后续观察，不在本页擅改或列新增必修。真实设备、其他引擎、读屏、真实UI200%缩放、真实visited历史、所有中间宽度/指针边缘、生产接收/归因与CMP仍按后续适用Gate验证。无JS核心目录检查不证明无JS共享弹层可操作。无媒体、表单、筛选、技术表、FAQ或提交状态是本页合同的正常范围。

## 用户决定与方法验证

建议采用这一套V0.1方向。向用户直接展示桌面Hero、平板目录及手机目录代表样例；请求本页Gate 4视觉批准，既有执行顺序不再确认。收到批准后另记决定、关闭本页Gate 4；当前不代用户批准。

至此Gate 4角色和两项方法已实际经历Poland的独立发现→返修→复验→用户关闭，以及Chloride Process首次候选独立审查；Chloride仍待用户决定。方法源和角色源保持，页面验证结果不倒填通用源批准或运行注册。Gate 2继续不设专属Skill。
