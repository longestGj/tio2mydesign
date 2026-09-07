# DOC-COO Gate 4 视觉方向与方法报告 V0.2

2026-09-07 · gate4_design · DRAFT_FOR_PROJECT_CONTROL_REVIEW / AUTHOR_SELF_CHECK_PASS_PENDING_INDEPENDENT_REVIEW

本版完成 COO-G4-REV-01 对 IR01/IR02 的定向修正；执行者自检未发现未解决视觉问题，等待同一独立审查者复验。不是执行者关闭Finding或批准Gate。V0.1的32图、失败报告、自检及状态勘误全部保留，不把原自动通过记录改写为原版视觉通过。

## 输入、身份与页面方向

当前Manifest仍为本页04_planning/DOC-COO_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md，保留V0.7批准G3组合。当前只做八页合同的DOC-COO第二页，未启动Netherlands/其他页或Gate5。完整读取定向指令05_review/DOC-COO_GATE4_TARGETED_REVISION_INSTRUCTION_V0.1.md和最终独立审查gate4-project-control-v0.1/independent-review/report.md（SHA6293ea28ec5eba76e611cc0947f055b6d7f3b87b13ef5ebc11851d084a3d6037），其结论仅IR01/IR02、没有额外实质Finding。

完整本页Brief V0.3、A V0.1/B V0.2/C V0.1、G3源及8图/可读分段、关闭/交接/审查、登记与关键词归属、Document Playbook及Post-TDS检查表已在前轮读取；未变输入经哈希再核。最新批准B/C优先旧Brief/Playbook Hold与旧字段建议；DOCUMENT_PLAYBOOK_V0.3文头为未批准的DOC-000 Gate5候选，不导入其Hub结构。根AGENTS/Context/治理、Gate1–5标准、Gate4 Agent V0.1、brand-applied-visual-design V0.1、layout-interaction-verification V0.2/core-risk-model、两页复盘继续应用，稳定输入全部绑定。

继续本页无图的文档说明方向：长H1帮助辨识用途，三类证据保持等权，四项上下文帮助组织请求，origin/traceability分别说明，五项准备与人工后续完整，末段保留全部来源日期/限定。两次Request Origin Documentation为主动作，Products/Document Hub/官方来源为辅助链接，共享RFQ不替代正文任务。没有伪证书、印章、媒体、库存、排行、FAQ或表单新增。本页从自己的G3及V0.1派生，Poland仅品牌参考，未以其他页为HTML/CSS/文案母版。

新冻结COO-G4-V02-SOURCE-01包含67项稳定输入和6项运行文件，含定向指令/完整独立报告及V0.1历史身份；排除动态Status/Index/Progress。HTML SHA256 6d5a0352dad47b471cc78a5b51d590ac54458487e7b597b9e05385407a90ba43；CSS 134474dbba6d9b4719422d95fe78012b1c3ba1f109411043d1d977028895df43；source-freeze 8b677f8b4fd01f38c4cc77943c68e371593f359a65d8bb6b3095ccf118135436；45图export-inventory 6d1ece95433f53c3639b4ef76a451abaea46736044a58420d506d24bb58a3d0e。源/依赖/正式图冻结后未改。

## 返修判断

IR01原问题来自48px高的分行inline padding处于约27.2/28.9px行高内；增加浅色hover表面后覆盖邻文，外环也跨行。单片段中心命中和对比数字不能证明实际边缘触达/文字可读。V0.2把两条来源链接改为独立连续流式矩形，以8px上下间距容纳真实焦点边界和正文呼吸空间。保留普通链接视觉角色，不增加按钮边框、图标或额外文字。允许两处来源成为独立行，句序保持；coo-02的谓语仍依原文接在下一行。coo-06现有终止句号移入同一anchor尾端，屏幕文本字符完全相同、href完全相同，但链接可访问名称包含原句号；这是为防止链接整体换行后孤立标点的定向标记调整，不是新正文。

IR02只改采集：正常区域每次截图前清除焦点、移动指针至空白、等浏览器状态稳定50ms，截图后检查所有可操作项的:focus-visible/:hover为空。Footer采集后activeElement为BODY；新三端Footer图真实无焦点/hover。没有改变共享默认外观或删除focus样式。V0.1三端Footer的normal误标签在原报告/读回中继续可查。

比较表头/记录标题仍保留V0.1合理品牌归一：#F0F5F8→#F5F8FB，三类同等；Navy文本对比12.711→13.097:1，辅助标签#475569在新底7.109:1。所有主/辅层级、字号、栏宽、正文顺序、共享源均保持，不以装饰制造差异。

## 全部视觉角色规则

D/T/M为1440/768/390 logical px、DPR1；内容断点1000/600px，共享菜单1100px。下表继承本页正常基线并用新来源规则替换旧失败实现。

| 视觉角色 | 准确规则及落点 |
|---|---|
| 基础字体/颜色 | Inter Variable 本地字体，Arial/sans-serif fallback；正文 #334155，标题 #062B5B，功能 Teal #008078，白底，分隔 #D9E2EC。Inter 实际平台字体加载已核。 |
| 版心 | main 最大 1200px；D/T 总横留白64px，M40px；实测内容宽1200/704/350px。底部72/72/48px；正文段落最大850px。 |
| H1 | 52/44/35px，650，行高1.12/1.12/1.15，字距-.025em，max1050px，底距26px。完整长标题自然换行，M四行；不缩成短标题。 |
| H2 | 32/30/27px，650，行高1.25，字距-.025em，max980px，底距28px；coo-02至06全部适用。 |
| 正文/长内容 | p/li/td/th 通用17/17/16px，行高1.7；p底距22px，li底距8px。保留全文和标点，无行数截断。coo-06 p 固定16px。 |
| 入口细节 | eyebrow14px/1.5、600、字距.08em、#475569、底距20px；Breadcrumb14px/1.6、gap10/10/8px，顶距20/20/16px，自然换行。 |
| 分区 | 普通section上下50/42/36px、1px顶部分隔；Hero36px顶52px底，M30px顶38px底；coo-06底padding0。不同模块沿同一左边界。 |
| 三类比较 D | 原生表格，固定列25%/32%/43%；thead14px/650 Navy，#F5F8FB；单元22px24px，底边1px；名称与完整两字段同行，tbody名称600，内部strong700；无卡片或优选标记。 |
| 三类比较 T | <=1000px 隐藏thead视觉，table/tbody块状；每条两列grid，标题跨两列且新背景；记录边框1px、记录间24px；标题18px22px，字段20px22px，右字段左边框。记录名20px/1.7，标签14px/1.5、600、#475569、底距8px；所有字段完整。 |
| 三类比较 M | <=600px单列；标题和字段统一18px padding；右字段取消左边，改顶边。每条依次名称/When/What，保留重复字段标签；三条完整依次纵排，名称允许两行。 |
| 四项上下文 | coo-03有序列表max1050px、inside编号、两列gap24px40px /20px28px；M单列gap12px。每项18px顶padding、1px顶边；列表底距30px。Country / Region公司位置与Additional Requirements用途说明完整保留。 |
| 准备清单 | coo-05 max850px，左缩进24px，底距24px；五项逐条，item底距8px。未知上下文、one Grade / multiple types、Grade提交前必选三段保留。 |
| 两主按钮 | coo-01/coo-05 .primary，白字/Teal填充、1pxTeal边、radius6px、16px/600；min-height52px，padding12px24px，M12px16px且宽100%。实测D/T285.203×53.188px，M350×53.188px。hover同填充且2px下划线offset4；focus3pxTeal外环offset3。 |
| 普通链接 | Product Hub、Document Hub、面包屑常态Teal下划线、min44×44；hover Teal/新浅底、2px下划线offset4；keyboard3px外环offset3。无链接目标/层级变化。 |
| 官方长链接 | coo-02/coo-06原链接增加officialSourceLink类，display:block、width:fit-content、max-width:100%、min-width/min-height:44px、上下margin8px、上下padding8px、line-height:1.7。D/T单行，M自然两行；常态Teal透明底，hover Teal/#F5F8FB、2px下划线，focus3pxTeal外环offset3。第二来源原句号纳入同anchor尾部以随标题换行；B字符/句序/URL不变。矩形包含全部文字，无重叠inline片段。 |
| 共享 | 原嵌入Consumer V0.2的CSS、Header、Footer、Cookie、行为五slot与本页G3/中性快照核对一致；Documents current（DOC-000），无CURRENT可见文字。准确共享字号/间距/断点/颜色以冻结 shared-chrome.css、shared-chrome-data.json、shared-consent-data.json 及owner合同复用，不建本页分叉。 |


## 局部高度变化

下列是ACTUAL_RUNTIME相对V0.1（V0.1正常几何等于G3），单位CSS px。来源局部改为流式行盒导致后文整体下移，不能再称全页几何相同。

| 宽度 | coo-02高度 | coo-06高度 | document scrollHeight |
|---|---|---|---|
| 1440 | 833.266 → 894.156 (+60.891) | 326.125 → 386.125 (+60.000) | 4251 → 4371 |
| 768 | 1287.531 → 1348.422 (+60.891) | 342.813 → 375.625 (+32.813) | 5164 → 5257 |
| 390 | 1827.938 → 1887.125 (+59.188) | 469.000 → 501.000 (+32.000) | 6774 → 6865 |

Header、Hero、coo-03、coo-04、coo-05、Footer各自高度保持；coo-03至05的y仅随coo-02增量下移，Footer的y随两处增量之和下移。对比表自身、四上下文和五准备布局没有变化。整数document高度受浏览器取整；精确小数见diagnostic_support/geometry-delta.json，不以PNG边缘取整差异推断共享几何变化。

## 样例与所有模块落点

| 区域 | 新正式证据及复用范围 |
|---|---|
| coo-01 | 三端hero，含完整Header/面包屑/长H1/正文/Product Hub/主请求；1440-primary-hover实测填充层级和邻区。 |
| coo-02 | 1440/768-comparison完整三行与结论；390-comparison-1/-2/-3按原生记录完整分段。来源另有每宽度coo-02-source-normal/hover/focus。 |
| coo-03+04 | 三端context-and-traceability完整四详情、单据一致性与两段区别；390高1661px实际原生读完。 |
| coo-05 | 三端prepare完整五项/未知Grade和上下文/一个Grade多类型/主请求/人工审查限制/Hub；390-document-hub-focus证明邻接状态。 |
| coo-06 | 三端official-source完整source标签、10 October2025、5 January2026、Last reviewed7 September2026及订单/装运限定；每宽度coo-06-source-normal/hover/focus细看绘制。 |
| 共享 | 三端footer真实normal，三端cookie-focus，768/390-menu-focus；Consumer V0.2五slot精确未变、Documents current，未加可见CURRENT。 |

45图由27个内容/共享/相邻状态与18个两来源三宽度三状态组成；不重复旧版5张来源状态，因为新18图给出更明确完整段落上下文。所有六模块已映射，无遗失区域；均为代表区域证据，未生成Gate5整页正式视觉。Gate5后续仍需获得阶段授权后整合三端全页、跨区连续性和关键状态，复用本报告各角色，不扩张事实/媒介/结构。

## 实际检测与读回

预检先完成399条通用记录、18条来源状态和3条Footer清洁状态，28张图全部实际view_image(original)打开后才冻结。正式通用492条（含297控件normal/真实hover/键盘焦点）、来源18条均无断言失败；45张正式图也全部逐张原生打开。最大1661px，没有用缩小长图代替细读。

来源每个状态只有一个getClientRects矩形；每个矩形采25个近边缘/内部点，18状态总450点全部命中该anchor。读取同段所有非链接可见字符Range，检查其矩形与链接含外侧6px焦点包络不相交，并检查字符中心不误命中链接；均0。下面正常态代表数值在hover/focus保持尺寸相同：

| 宽度/来源 | 实际矩形尺寸 | fragment数 | 边缘/内部命中 | 邻字相交/误命中 |
|---|---|---|---|---|
| 1440 / coo-02 | 388.469 × 44.891 | 1 | 25/25 | 0 / 0 |
| 1440 / coo-06 | 453.125 × 44.000 | 1 | 25/25 | 0 / 0 |
| 768 / coo-02 | 388.469 × 44.891 | 1 | 25/25 | 0 / 0 |
| 768 / coo-06 | 453.125 × 44.000 | 1 | 25/25 | 0 / 0 |
| 390 / coo-02 | 350.000 × 70.375 | 1 | 25/25 | 0 / 0 |
| 390 / coo-06 | 350.000 × 70.375 | 1 | 25/25 | 0 / 0 |

真实文字对比最低4.520:1（Teal on#F5F8FB），白/Teal4.818:1；焦点对实际承载表面最低4.818:1，其他控件最小44×44。真实状态图已确认下划线/浅底/外环未覆盖自身或邻文；数字与实际读图分别保存，不以数字替代视读。此运行仅Chrome152.0.7977.82、Playwright1.62.1、Node24.16.0、本地file/headless/DPR1的指定视口，未宣称全设备矩阵。

STATIC_SOURCE核查反向撤销两class及句号的anchor归属可精确还原V0.1 HTML，其余原内联style/script不变；G3原组合保持。ACTUAL_RUNTIME再核B全部字符/句序（响应重复字段标签另测）、三类九字段对应、六模块、四上下文和五准备；href、两主上下文、共享组装与Inter/SVG加载均通过。JS仅本地意图记录，未导航/提交；外部请求观测0，未重新检索官方法规，不声称新法规确认。

实际Menu入口焦点、Tab/ShiftTab环、背景inert/滚动锁、Escape/选择/断点恢复；Cookie入口、循环、模态隔离、Escape/Close回触发器均回归。跨Desktop后BODY焦点继续作为共享继承观察，不为此分叉共享。本版Footer正常捕获另明确active BODY/无focus-visible/无hover，状态元数据与图相符。

两次Request Origin Documentation仍传prefill.document_types=['origin_supplier_qualification']、source_context.page_id='DOC-COO'；C要求接收端类型editable/removable，隐藏来源，不预选Grade/destination/scheme。这里只实测LOCAL_SIMULATION、receiverExecuted:false。生产receiver、可编辑/移除和prefill持久化本次Gate4未验证，待后续接入验收；不称整个receiver尚未实现。没有增加availability upon request句、签发/优惠/海关保证或公司traceability能力。

## 交付、失败历史与复验方法

源HTML、visual-direction.css、4个相对dependencies（本地Inter、OFL、正向及反白SVG）与source-freeze/export/asset清单均正式保存；报告、自检、返修回应及diagnostic_support详细测量/脚本/逐图读回分层存放。原V0.1失败和全部证据不动；本版曾在formal-runtime尚不存在时过早运行末尾汇总脚本报ENOENT，后在正式导出完成后成功读取；一次PowerShell引用解析失败改为本地cjs脚本完成，均未触及冻结源，见工具事件记录。

复现用已知bundled Playwright绝对require和Chrome，不安装依赖。prepare-revision.cjs说明精确派生；verify-render.cjs为正文/共享/状态，probe-source-states.cjs为两来源矩形/命中/邻字/状态图，probe-footer-normal.cjs为Cookie关闭后清洁普通态，measure-visual-roles.cjs与geometry-delta.json给出局部变化。已有PNG拒绝覆盖；应在另一个新输出目录复验，不重写已冻结证据。source-freeze和export绑定同一HTML/CSS/依赖组合，完整目录资产在asset-inventory，最后核清在final-receipt。

本轮执行者结论为IR01/IR02修正已自检、待独立定向复验；不自批、不关闭Gate。没有写Manifest/Status/Index/上游/方法源、其他页、D16或生产。最终资产核清和报告读回后停止本版本写入。
