# DOC-COO Gate 4 V0.1 独立审查

2026-09-07 · 独立审查者 gate4_review_a · **CHANGES_REQUIRED / 本冻结版本不得关闭**

本轮实际查看全部 32 张正式 PNG，独立运行三端必要交互并核对批准原文，确认两项必须处理的问题：两处长来源链接的 hover/focus 绘制破坏邻文可读性；三端 Footer 图的 normal 状态标注与实际 Cookie Settings 焦点状态不符。除此之外，未发现应扩展返修范围的实质问题。V0.2 应定向修复并复验，不需要为视觉变化数量重做页面。

## 范围、依据与独立性

当前入口是 DOC-COO_CURRENT_GATE_BASELINE_MANIFEST_V0.8，承接 V0.7 批准 G3 和本页 G3→G4 交接；执行范围为八页串行合同下的 DOC-COO Gate 4 代表样例。原始输入及风险详见同目录 input-preparation.md、input-identities.json。已实际读取完整 Brief V0.3、A V0.1、B V0.2、C V0.1、G3 源及正式图、当前共享/品牌合同和适用文档页规则；当前批准 B/C 优先旧 Brief/Playbook 的过时字段。使用 layout-interaction-verification V0.2、core-risk-model 与 brand-applied-visual-design V0.1。

审查先读取冻结源和实际图、运行测试，保存 initial-observations.md 后才读取作者最终方向报告、自检及最终资产清单。过程中作者/总控传达了其来源链接和 Footer 发现；本报告不把他们的结论替代证据，来源 hover/focus 首次独立读图早于该通知，两项均由独立浏览器复现确认。没有读取总控核查 JSON，没有修改候选、上游、状态或共享实现。

冻结 ID：COO-G4-V01-SOURCE-01。HTML SHA256：ff0f09658e87519bcfe474b74d46b323b7f118eeda3929828995d259dd4b903d；CSS：792b92a251a06eb42fe90588048a0a3a6089324c1662d6c4152a51ef7c0f221d；source-freeze：72930df71f1ae647cdad0191f18aae1238e616657497116d0ab77c28244ff46d。

## 必须返修

### COO-G4-IR01 — 两处官方来源链接的绘制与实际触达边界失败

位置是 coo-02 比较结论中的官方指引链接及 coo-06 的 Royal Malaysian Customs Department, FAQ Rules of Origin 链接。旧规则保留 display:inline、上下 padding:14px；新增 hover 浅色背景叠加到该分行盒，遮挡相邻正文。390px 官方来源 focus 外环横穿上/下邻文，不能凭焦点颜色对比合格接受。正式三端 official-source-hover、390 official-source-focus 和 768 comparison-guidance-hover 图可见问题；独立 390-source-hover-runtime.png、390-source-focus-runtime.png 重现该问题。两处链接 × 三端的真实 hover 与 keyboard focus 均在 source-link-probe.json 中记录。

六个链接实例每个片段高度均为 48px，正文行高约 27.2/28.9px；多行片段和邻文区域相交。各片段 3×3 命中采样出现 6/9、7/9、8/9，不是全部填充矩形都可命中，所以不能把包围框的 48px 高或单一中心命中直接写成真实 44×44 触达通过。所采邻文字符中心误命中链接计数为 0，本审查**不主张**已经证实点击邻文字符中心会导航；已证实的是视觉遮挡、焦点穿字及现有尺寸检测不足。

接受条件：

- 两处链接在 1440、768、390 的 normal、真实 hover、键盘 focus 状态中，全部链接文字、上下相邻正文、日期和限定句完整可读。背景、下划线、焦点环不得覆盖或穿过其他文字，也不得遮住自身另一行。
- 为两处链接提供实际可点击的至少 44×44 区域，检查布局、分行片段及边缘命中，不能用跨空白/重叠的联合包围框或仅中心点代替。邻文阅读与点击不受侵入。
- 正常/hover 文字对其实际背景至少 4.5:1，焦点对实际承载表面至少 3:1，键盘焦点清楚且不裁切。不能只去掉 hover 背景便声称 focus 同时修复。
- 保留批准 B 的完整措辞、顺序、两处相同官方 href、来源日期与限定语义；允许为来源链接局部布局/留白修复产生必要几何变化，不扩展正文/页面职责。相关段落和后续区域在三端回归无溢出、截断或重叠。

本项对应作者 COO-G4-AUTHOR-01；独立范围明确覆盖两处来源，而非只修 Official Source 一处。

### COO-G4-IR02 — 三端 Footer 正式图的状态标注不符

1440-footer.png、768-footer.png、390-footer.png 的 export-inventory state 为 normal，实际均显示 Cookie Settings 的白色返回焦点环。独立无焦点普通态重渲染三张均不相等；先让该控件获得键盘焦点、按原 clip 重渲染，三张均与正式图逐字节相等（runtime.json 的 footerFocusRender）。这不是需要移除的正常共享 focus 样式，而是证据状态错误。

接受条件：保留 V0.1 源、正式图及原清单，留下明确勘误；在 V0.2 导出实际无 hover/focus 的三端 normal Footer 并准确绑定。若保留返回焦点图，单独标注真实状态、触发方法和关联源版本。清单、读图记录、报告三者一致，不隐藏共享焦点或覆盖旧图来消除错误。

本项对应作者 COO-G4-AUTHOR-02。作者当前报告/自检已诚实登记 V0.1 勘误，但新版本的正确普通态证据仍需补齐。

## 已通过部分及视觉判断

32 张正式 PNG 均已逐张打开并读清：三端 Hero；1440/768 比较整体及 390 比较三段；三端 context-and-traceability、prepare、official-source、footer；三端 cookie-focus；两端 menu-focus；三端 official-source-hover；1440 primary-hover；768 comparison-guidance-hover；390 official-source-focus 与 document-hub-focus。最长 1661px 的正式图实际读取，未以缩放 G3 全页总览替代文字/状态检查。

六模块保持完整。长 H1 清晰自然换行；三类证据在桌面按行比较，在平板按记录和两字段、手机按记录逐字段重排，名称/relevance/verify 配对正确，无优选或认证暗示。四 context、五 prepare、单 Grade/多文档类型/分 Grade 提交规则、未知 Grade 可开始但提交前必选，以及 origin 与 traceability 的区别均保留。Country / Region 表示公司位置，目的地等信息进入 Additional Requirements 的说明清楚。两次正文主请求没有被共享 RFQ 替代。

来源 information through 10 October 2025、page updated 5 January 2026、last reviewed 7 September 2026 及不证明特定 IKHLAS 订单/装运文件可得性的限定完整。没有增加 availability upon request、税率/优惠/签发保证、公司 traceability 能力、证书图片或印章。外部来源未重新访问，只核批准 B 的文字、日期和完整 href。

品牌判断不是仅统计颜色：Navy 标题、Teal 可行动作、白底正文和浅底比较分组形成清晰文档说明层级；三类使用相同浅底，不把功能色误作海关待遇或认证标识。表头/记录标题由 #F0F5F8 归一至品牌 #F5F8FB，具备合理用途；其余组织继承批准 G3，不为展示变化而改写或重排。IR01 修复之外，无需增加装饰或图片。

独立比较 B 的标题、段落、列表、表格单元、链接在三端全部相等；响应重复 cellLabel 从文本比对中排除，但其存在、文字和对应关系由实际图检查。禁用 JS 后同五类内容仍一致。源 main、原内联样式及脚本与 G3 相等；Logo 仅改为本包相对依赖。独立测量 header/main/section/footer/标题/段落/列表几何与字体在三端等于 G3（比较区域新背景不在几何相等结论内）。17 张普通正文区域图独立同 clip 渲染逐字节相等，三张 Footer 的特殊状态见 IR02。

## 实际运行、身份及限制

Chrome 152.0.7977.82，Playwright，headless 本地 file，视口 1440×900、768×900、390×844，deviceScaleFactor=1；没有外部请求或 pageerror。实际加载本地 Inter 与生产 Logo。96 条源/依赖/输入/导出记录（58 输入、6 运行文件、32 图）身份一致，32 图像素尺寸一致；另核 freeze 本身与提交 SHA 一致。作者完成后最终核查含资产清单、selfcheck、freeze/export 重复引用共 160 条记录全部相等，不把重复记录数当质量分数。最终 asset-inventory SHA 为 7cbd3854475728e80dc00513abc28f1eb30e289ec79a1e5762de4bddec6586fb，未发现冻结后源图变更。

三端实际控件 normal/hover/keyboard focus 共 297 状态记录，最低文字对比 4.520:1，焦点对实际表面最低 4.818:1；其他块状控件最小 44×44。两长 inline 来源的触达仍按 IR01 不接受，绿色数字不抵消真实绘制失败。实际 hover 与 Shift+Tab/Tab 焦点覆盖可见 Header/main/Footer 及适用 Menu/Cookie。

768/390 菜单进入 Home、正反 Tab 循环、Escape/Close 回 Menu、Products 选择关闭、背景 inert/拒绝焦点及滚动锁/恢复均实测。Cookie 首焦 Close、Close/Policy 正反循环、背景拒绝焦点、Escape/Close 回触发器均实测。Menu 打开后跨 Desktop 断点关闭时 activeElement=BODY，保留为共享继承观察，不宣称此路径返回可见桌面控件，不据此扩大本页返修。

三端正文八个链接实际点击记录均为 LOCAL_SIMULATION、receiverExecuted:false。两个 Request 均只有 prefill.document_types=['origin_supplier_qualification'] 和 source_context.page_id='DOC-COO'，无 Grade/destination/scheme。Header/Footer/移动菜单 RFQ 只有 source_page_id='DOC-COO'，其余共享出口 context=null；补测共享点击记录三端分别 21/22/22。Documents 导航当前状态正确，Cookie Policy 本地出口与共享合同一致。

本地样例不执行真正导航或接收器。本次未验证接收表单文档类型可编辑/移除、hidden 来源持久化、历史值、真实提交、服务端归因、外网内容、真实浏览器/触屏设备矩阵；这些是后续集成/验收范围，不称为整个 receiver 未实现。禁 JS 仅证明内容和原生 href 留存，不宣称 JS 共享 Menu/Cookie 可用。没有把代表样例当作 Gate 5 完整三端视觉或生产批准。

## 作者报告核对及交付

在独立观察落档后完整读取 DOC-COO_GATE4_VISUAL_DIRECTION_AND_METHOD_REPORT_V0.1.md 与 DOC-COO_GATE4_EXECUTION_SELF_CHECK_V0.1.md。作者明确失败、不自批，六模块/角色规则/代表图映射完整；当前失败原因、Footer 勘误及接收边界与独立证据一致。作者报告中的最小矩形/中心命中数值不可当作来源链接真实触达通过，其报告已承认检测不足，V0.2 按 IR01 接受条件重新证明。

可复现证据位于本目录：verify.cjs / identity.json / runtime.json；source-link-probe.cjs / source-link-probe.json 及两张独立缺陷 PNG；final-check.cjs / final-check.json；初始观察 initial-observations.md。正式样例引用冻结 approval_core 原图，不复制整套。正文原始准备见 input-preparation.md。

本轮结论仅为 **V0.1 需定向返修**。保持两个稳定 ID，在 V0.2 新冻结组合复验来源两处三端三状态、实际命中与邻文、正确 Footer 状态绑定及局部回归；对未变且身份相同的已通过证据可明确承接，无需重复无关全链路。独立审查不更新 Gate 状态、不批准、不修改页面。
