# Gate 5 Agent / Skill 有限隔离验证 V0.1

日期：2026-09-07。总控：当前任务。设计决定：[G5-DESIGN-APPROVAL-01](2026-09-07-gate5-design-user-approval-v0.1.md)。对象：[Gate 5 角色 V0.1](../../../agents/gate5-execution/agent.md)、[完整页面视觉制作 V0.1](../../../skills/full-page-visual-composition/SKILL.md)，复用布局与交互核验 V0.2。

**当前结果：有限隔离验证完成。完整页面通过本次独立视觉核查；接收 B 的三项问题在 C 中全部通过独立复验关闭。** 这是设计获批后的有限行为验证，不是任何真实页面的 Gate 5/6 批准。精确获批方法源保持不变；本轮没有扩大方法、页面或运行授权。

## 1. 授权、输入及验证安排

用户“上面内容我都认可，继续下一步。”已登记为设计批准及有限隔离验证授权；后续“继续”延续同一任务。依 skill-creator 的独立前向验证方法，本轮使用彼此分开的执行、视觉审查及接收审查代理；不是新设常设岗位。总控负责固定输入、控制接收挑战、留存决定和综合结论，未代写候选 A 的页面源或独立报告。

[G5-LAB-01 固定输入](evidence/2026-09-07-gate5-validation/input/brief.md)采用既有虚构 Reference Materials Desk 的 O/C/R 全文、结构与具体视觉规则，补齐固定的中性 Header、Reading notes、FAQ 和 Footer。它不是 Page Registry ID，没有商业 URL、主关键词、公司事实或生产 Global Chrome。原 Gate 4 资料只提供指定内容／规则与允许复制的离线前身，旧自检结论不作当前证据。

控制计划在 A 完成前[预先登记](evidence/2026-09-07-gate5-validation/controller-plan.md)。执行者收到原始要求与方法；视觉审查从原始要求和冻结源／图开始；接收者初审只得到原始要求及 B 接收入口，没有控制计划、注入映射或预期答案。各方仍共享相同任务环境，未进行随机实验，也没有无 Skill 对照组。

## 2. 完整页面制作及独立审查

正式视觉组合为 **G5-LAB-01-CANDIDATE-A-F1**，源组合 SHA-256：`320230f713e39ed5b296c5cfe6e220ab45f6d414f689f44a6d83079d687c2c74`。

- [候选 Manifest](evidence/2026-09-07-gate5-validation/candidate-a/manifest.json) → [完整视觉规格与报告](evidence/2026-09-07-gate5-validation/candidate-a/final-visual-report.md)、[自检](evidence/2026-09-07-gate5-validation/candidate-a/self-check.md)、[冻结](evidence/2026-09-07-gate5-validation/candidate-a/freeze.json)、[资产身份](evidence/2026-09-07-gate5-validation/candidate-a/asset-inventory.json)。
- [离线可编辑预览](evidence/2026-09-07-gate5-validation/candidate-a/source/index.html)，字体和脚本等依赖均为随包相对路径；没有实际提交或外网请求。
- [独立视觉审查](evidence/2026-09-07-gate5-validation/review-a/report.md)：在所要求的本地范围内未发现新的实质缺陷；独立复验接受 SELF-01 的修复。

已完成 1440、768、390 logical 的完整页面，手机使用原生 DPR 2，正式图宽 780。默认与无媒体分支均覆盖 Header 至 Footer；每端覆盖缺选错误、完整 Beta 长名称选中／预览、FAQ 展开与键盘焦点，另有下拉选项焦点及两端紧凑菜单。共 23 张正式图，各自用于不同状态证明，不作为质量分数。

独立审查实际读取全部正式图和整页可读分段，重新运行 Chrome 键盘行为、焦点／滚动恢复、菜单背景 inert、内容关系、控件尺寸、文字与焦点对比度等。三端默认重新捕获像素与正式图一致。桌面／平板的表格对应到手机卡片后，数值、单位、条件及注释关系保持；手机长选项完整换行，错误／成功／FAQ 均自然推动后续内容。自检没有替代这些独立判断。

| 问题 | 真实观察与处理 | 当前状态 |
|---|---|---|
| SELF-01：菜单 Escape 后滚动恢复 | 制作预检发现：先恢复滚动，再把焦点移回离屏 Header 会滚回顶部；改为 preventScroll，保留修复前 JS 和失败记录 | 冻结前修正；作者复验及独立审查均确认两紧凑端恢复位置与焦点正确 |
| TOOL-01：截图裁剪坐标 | 文档坐标与视口截图范围混用导致采集失败；改正采集范围 | 工具问题已修正，不计作页面设计缺陷 |
| TOOL-02／审查断言：空样式属性 | null 与空字符串序列化差异导致误报；实际 lock/inert 已解除 | 保留原始失败；独立追加非空既有样式与滚动恢复核验，未修改页面源 |

这些结果没有暴露必须修改 Agent／Skill 指令的缺口；具体实现和测试工具问题分别处理。未为单次缺陷向已批准方法追加规则。

## 3. Gate 5 → Gate 6 接收验证

[A 的交接入口](evidence/2026-09-07-gate5-validation/candidate-a/G5-LAB-01_GATE5_TO_GATE6_HANDOFF.md)将输入／权威、冻结视觉、三端状态、元数据、动作接收、共享范围、未测项与后续 owner／阶段集中导航。Gate 6 可以复用原始依据和证据，不需要重新猜测来源，也没有收到提前制作的 Gate 7 开发包。

总控从完整 A 派生 B 接收元数据，保留底层源／图不动，按[注入映射](evidence/2026-09-07-gate5-validation/mutation-map.json)故意加入三类错误。它们是受控接收挑战，**不是执行者或 Skill 产生的缺陷**。独立接收者的[初审](evidence/2026-09-07-gate5-validation/receiving-review/review-b.md)要求退回修正，并准确区分清单缺口与资产真正缺失。

| 独立 Finding | B 的问题 | C 的修正 |
|---|---|---|
| G5-RCV-001 | 当前 HTML 的 SHA 与实际源／冻结组合冲突 | 使用实际 HTML 身份；保持同一 F1 源组合 |
| G5-RCV-002 | 宣称三端默认齐全，却漏列 768 默认整页图 | 恢复已存在图片的路径、状态、DPR、尺寸及身份；不重渲染 |
| G5-RCV-003 | 把设计批准写成页面 USER_APPROVED 与实际 Gate 6 AUTHORIZED | 分别记录页面未批准、实际 Gate 6 未授权、演练已授权；完整性单独记录 |

[C 接收入口](evidence/2026-09-07-gate5-validation/receiving-c/entry.md)与[修正记录](evidence/2026-09-07-gate5-validation/receiving-c/corrections.md)保留 B 初审引用。同一接收者的[独立复验](evidence/2026-09-07-gate5-validation/receiving-review/review-c.md)已按原 Finding ID 将三项全部关闭：四个源、23 张图片及既有证据身份一致，必需状态完整，页面／演练／实际 Gate 6 状态与原决定吻合，B 历史保持。C 达到本次接收演练的材料完整及一致要求。

接收完整性只说明材料可供本次演练核查；真实页面 Gate 5 用户批准和 Gate 6 启动授权始终分别判断。A 作者提交中的 pending 字段保留提交截面，后续独立结果由本记录及其报告链接控制；B 为负向测试历史，不能消费其错误状态作为授权。

## 4. 总控核验、适用范围与下一步

[总控文件核验](evidence/2026-09-07-gate5-validation/controller-check.json)独立读取源／输入／上游前身／正式图，确认 hash、字节、尺寸和必需状态覆盖；方法源及批准前快照逐字节一致。总控另抽看桌面完整概览与手机预览区域，未将缩放后的长图概览充当全文可读审查。文档链接和最终文件身份记录在[最终核验](evidence/2026-09-07-gate5-validation/final-check.json)。

本轮支持的结论是：在一组固定虚构长内容、完整三端及指定交互中，该角色／方法能形成可审查整页，实际发现并修正行为问题，并提供可由另一位接收者核对的 Gate 6 输入。不能据此声称已覆盖所有页面类型、测得通用检出率，或完成真实网站生产验证。

尚未验证生产 Chrome／Consent、真实接收服务、CMS、服务端 Canonical／索引、site_scope 运行隔离、其他浏览器／物理设备、浏览器 UI 缩放和辅助技术输出；本地预览结果不等于收到请求。未来真实页面仍按自身 Manifest、Gate 2／3／4 批准组合及页面授权执行，Gate 7／8／9 的依赖和 Gate 10 发布权限保持原边界。

下一阶段是选择具有有效 Gate 4 批准及 Gate 5 执行授权的真实页面进行试跑，重点验证长页实例覆盖、生产共享组件组装及真实内容／动作／SEO 交接。本记录不选择或启动业务页面，不更新其 Manifest／Status，不安装注册 Agent／Skill，不修改 Gate 1–4 已批准源，也不进入独立开发项目。
