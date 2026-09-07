# Gate 4 八页串行接力合同 V1.0

2026-09-07。授权ID：`G4-8PAGE-SERIAL-01`。状态：`USER_AUTHORIZED / WAITING_FOR_UPSTREAM`。

## 用户授权

用户原话：“上游Gate3，在串行执行8个页面的任务。你进行定时监控，他完成一个，你开始执行一个，执行完了以后再执行下一个。每一个执行结果我都认可。”

本决定授权下列八页依序完成Gate 4全流程，并预先认可完成结果。每页通过制作、自检、独立审查及必要返修复验后，以`USER_PREAUTHORIZED_COMPLETION`记录批准来源，直接关闭Gate 4，不再逐页等待确认。预先认可不把失败、自检或缺失证据自动转成完成，也不伪造用户逐页看稿记录。

上游为任务“00-con-gate3”，ID `01a07589-a65c-7a22-a8fd-c0ed42bc602d`，host `local`；上游范围来自[G3-8PAGE-SERIAL-01](GATE3_EIGHT_PAGE_SERIAL_CONTROL_V1.0.md)。本任务为“00-cont-Gate4”，ID `01a07916-834c-7ab0-925c-14a8233f62e2`。

## 固定顺序与状态

| 顺序 | Page ID | 页面目录 | Gate 4初始状态 |
|---:|---|---|---|
| 1 | MARKET-EU-ES | pages/markets/spain | 等待Gate 3正式关闭与交接 |
| 2 | DOC-COO | pages/documents/certificate-of-origin | 等待上游及前序Gate 4关闭 |
| 3 | MARKET-EU-NL | pages/markets/netherlands | 等待上游及前序Gate 4关闭 |
| 4 | MARKET-EU-BE | pages/markets/belgium | 等待上游及前序Gate 4关闭 |
| 5 | MARKET-IN-001 | pages/markets/india | 等待上游及前序Gate 4关闭 |
| 6 | MARKET-BR-EN | pages/markets/brazil | 等待上游及前序Gate 4关闭 |
| 7 | MARKET-BR-PT | pages/markets/brazil | 等待上游及前序Gate 4关闭 |
| 8 | PRODUCT-PROC-SU | pages/products/sulfate-process | 等待上游及前序Gate 4关闭 |

Poland、Chloride Process及RES-CHEMOURS不在本八页范围。不得把后续Gate 2新完成页自动加入。

## 接力与恢复

原heartbeat已于2026-09-07按用户新指示“不需要定时了”删除。当前任务持续执行，优先读本批次进度、Status/Index所指当前页面Manifest、Gate 3关闭记录、独立审查及Gate 3→4交接。不能根据任务空闲、口头“完成”或文件名推断Gate 3已关闭。

只启动队列首个未关闭页面；其Gate 3必须已正式关闭，交接源/资产身份一致，无未关闭必修项，且前序Gate 4均已关闭。已有Gate 4工作则续做同一页，不重复创建执行任务，不因新一次定时唤醒另开并行页。上游可同时执行后续Gate 3，Gate 4自身始终一页在途。完成当前页后，如下一页已经就绪可立即接续，无需等待下次定时检查。

中断后根据页面记录及活动执行者状态恢复；不能只凭陈旧在途标记认定仍有人运行，也不能抛弃现有证据重做。八页全部关闭并具备Gate 5接口后汇总结果。

## 执行与完成条件

每页完整读取根规则及适用任务资料、本页当前批准组合和Gate 3交接；使用[Gate 4执行角色](../../agents/gate4-execution/agent.md)、[品牌应用方法](../../skills/brand-applied-visual-design/SKILL.md)及[布局交互核验方法](../../skills/layout-interaction-verification/SKILL.md)，吸收[两页复盘](../superpowers/specs/2026-09-07-gate4-two-page-process-retrospective-v0.1.md)。通用方法不因本批次自动升级或注册。

按每页目标判断视觉主次，从本页批准Gate 3源和当前共享合同制作；正式源冻结、必要的1440/768/390代表区域与关键状态导出、逐图读回、真实背景/hover/focus覆盖、自检、独立审查及必要定向返修复验均须完成。独立审查不能以执行者自检替代。样例数量由视觉方向决定和关键风险覆盖决定。

2026-09-07用户指出此前荷兰页执行实质覆盖了过多接近Gate 5的工作。自Belgium起，本批次明确收窄：Gate 4只确认视觉语言、信息密度、组件外观、媒体规则、响应式缩放方向和少量代表性关键状态；不要求五个模块全部三端出图，不生成或批准三端完整整页，不遍历全部控件/状态组合。完整1440/768/390整页、模块连接、Footer闭合和全部适用关键状态属于Gate 5。为判断Gate 4方向所必需的高风险链接、长文、触控和焦点验证仍保留，但不得借验证把局部样例扩成完整视觉稿。Spain、DOC-COO、Netherlands既有结果保持有效，其超出最小范围的证据只作为额外验证，不转成Gate 5批准。

通过后保存页面精确批准/关闭记录，引用本授权及独立审查，不回写旧候选；更新当前Manifest及Gate 5接口，说明批准规则、共享来源、全部模块映射和整页待验范围。随后更新批次动态进度、Status和Index的对应项，保留其他controller的新变更。页面资料各归本页，Brazil EN/PT分别以Page ID及语言隔离。

本授权补充上游文件中“Gate 4未授权”的历史表述，仅覆盖本八页；不修改上游批准源。DOC-COO未批准命题、市场事实/贸易日期限制与PT-BR规划路径状态继续继承，不借视觉执行改写。需要超出批准事实、结构、页面、共享owner或品牌的实质变化时列明具体问题，不扩大本批次范围。

工作仅在D:\23MySec的规划空间进行，不调用付费Superdesign，不进入D:\16Wordpress_nextjs实施。本授权止于Gate 4关闭和Gate 5资料就绪，不启动Gate 5或开发发布。
