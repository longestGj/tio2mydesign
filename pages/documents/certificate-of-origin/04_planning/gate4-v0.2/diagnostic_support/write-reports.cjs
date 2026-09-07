const fs=require('fs'),path=require('path');const out=path.resolve(__dirname,'..').replaceAll('\\','/'),prior=out.replace('gate4-v0.2','gate4-v0.1'),review='D:/23MySec/pages/documents/certificate-of-origin/05_review';
const old=fs.readFileSync(prior+'/DOC-COO_GATE4_VISUAL_DIRECTION_AND_METHOD_REPORT_V0.1.md','utf8');let roles=old.slice(old.indexOf('| 视觉角色 |'),old.indexOf('| 本页模块 |'));roles=roles.split('\n').map(x=>x.startsWith('| 官方长链接')?'| 官方长链接 | coo-02/coo-06原链接增加officialSourceLink类，display:block、width:fit-content、max-width:100%、min-width/min-height:44px、上下margin8px、上下padding8px、line-height:1.7。D/T单行，M自然两行；常态Teal透明底，hover Teal/#F5F8FB、2px下划线，focus3pxTeal外环offset3。第二来源原句号纳入同anchor尾部以随标题换行；B字符/句序/URL不变。矩形包含全部文字，无重叠inline片段。 |':x).join('\n');
const deltas=JSON.parse(fs.readFileSync(out+'/diagnostic_support/geometry-delta.json')),probe=JSON.parse(fs.readFileSync(out+'/diagnostic_support/formal-source-probe.json'));
const geometry=deltas.map(d=>{let a=d.regions.find(x=>x.id==='coo-02'),b=d.regions.find(x=>x.id==='coo-06');return`| ${d.width} | ${a.oldHeight.toFixed(3)} → ${a.newHeight.toFixed(3)} (+${a.deltaHeight.toFixed(3)}) | ${b.oldHeight.toFixed(3)} → ${b.newHeight.toFixed(3)} (+${b.deltaHeight.toFixed(3)}) | ${d.oldTotal} → ${d.newTotal} |`;}).join('\n');
const targets=probe.records.filter(x=>x.state==='normal').map(x=>`| ${x.width} / ${x.section} | ${x.rect.width.toFixed(3)} × ${x.rect.height.toFixed(3)} | 1 | 25/25 | 0 / 0 |`).join('\n');
const report=`# DOC-COO Gate 4 视觉方向与方法报告 V0.2

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

${roles}
## 局部高度变化

下列是ACTUAL_RUNTIME相对V0.1（V0.1正常几何等于G3），单位CSS px。来源局部改为流式行盒导致后文整体下移，不能再称全页几何相同。

| 宽度 | coo-02高度 | coo-06高度 | document scrollHeight |
|---|---|---|---|
${geometry}

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
${targets}

真实文字对比最低4.520:1（Teal on#F5F8FB），白/Teal4.818:1；焦点对实际承载表面最低4.818:1，其他控件最小44×44。真实状态图已确认下划线/浅底/外环未覆盖自身或邻文；数字与实际读图分别保存，不以数字替代视读。此运行仅Chrome152.0.7977.82、Playwright1.62.1、Node24.16.0、本地file/headless/DPR1的指定视口，未宣称全设备矩阵。

STATIC_SOURCE核查反向撤销两class及句号的anchor归属可精确还原V0.1 HTML，其余原内联style/script不变；G3原组合保持。ACTUAL_RUNTIME再核B全部字符/句序（响应重复字段标签另测）、三类九字段对应、六模块、四上下文和五准备；href、两主上下文、共享组装与Inter/SVG加载均通过。JS仅本地意图记录，未导航/提交；外部请求观测0，未重新检索官方法规，不声称新法规确认。

实际Menu入口焦点、Tab/ShiftTab环、背景inert/滚动锁、Escape/选择/断点恢复；Cookie入口、循环、模态隔离、Escape/Close回触发器均回归。跨Desktop后BODY焦点继续作为共享继承观察，不为此分叉共享。本版Footer正常捕获另明确active BODY/无focus-visible/无hover，状态元数据与图相符。

两次Request Origin Documentation仍传prefill.document_types=['origin_supplier_qualification']、source_context.page_id='DOC-COO'；C要求接收端类型editable/removable，隐藏来源，不预选Grade/destination/scheme。这里只实测LOCAL_SIMULATION、receiverExecuted:false。生产receiver、可编辑/移除和prefill持久化本次Gate4未验证，待后续接入验收；不称整个receiver尚未实现。没有增加availability upon request句、签发/优惠/海关保证或公司traceability能力。

## 交付、失败历史与复验方法

源HTML、visual-direction.css、4个相对dependencies（本地Inter、OFL、正向及反白SVG）与source-freeze/export/asset清单均正式保存；报告、自检、返修回应及diagnostic_support详细测量/脚本/逐图读回分层存放。原V0.1失败和全部证据不动；本版曾在formal-runtime尚不存在时过早运行末尾汇总脚本报ENOENT，后在正式导出完成后成功读取；一次PowerShell引用解析失败改为本地cjs脚本完成，均未触及冻结源，见工具事件记录。

复现用已知bundled Playwright绝对require和Chrome，不安装依赖。prepare-revision.cjs说明精确派生；verify-render.cjs为正文/共享/状态，probe-source-states.cjs为两来源矩形/命中/邻字/状态图，probe-footer-normal.cjs为Cookie关闭后清洁普通态，measure-visual-roles.cjs与geometry-delta.json给出局部变化。已有PNG拒绝覆盖；应在另一个新输出目录复验，不重写已冻结证据。source-freeze和export绑定同一HTML/CSS/依赖组合，完整目录资产在asset-inventory，最后核清在final-receipt。

本轮执行者结论为IR01/IR02修正已自检、待独立定向复验；不自批、不关闭Gate。没有写Manifest/Status/Index/上游/方法源、其他页、D16或生产。最终资产核清和报告读回后停止本版本写入。
`;
fs.writeFileSync(out+'/DOC-COO_GATE4_VISUAL_DIRECTION_AND_METHOD_REPORT_V0.2.md',report);
fs.writeFileSync(out+'/DOC-COO_GATE4_TARGETED_REVISION_RESPONSE_V0.2.md',`# DOC-COO Gate4 定向返修回应 V0.2\n\n2026-09-07 · COO-G4-REV-01 · COO-G4-V02-SOURCE-01 · DRAFT_FOR_PROJECT_CONTROL_REVIEW\n\n| Finding | 执行回应 | 自检证据 | 状态 |\n|---|---|---|---|\n| COO-G4-IR01 / AUTHOR-01 | 两来源从重叠inline片段改成一个连续流式矩形，min44×44、上下padding8px/margin8px；coo-06原句号随anchor尾部，不改B字符/句序/href。hover浅底保留，focus边界独立，记录局部段高变化。 | 18个真实三状态/三宽度PNG，formal-source-probe18条、450命中点全真，邻字相交/误命中0；全部图实际读回。 | AUTHOR_VERIFIED_FIX_PENDING_INDEPENDENT_REVIEW |\n| COO-G4-IR02 / AUTHOR-02 | 仅修采集，等待浏览器完成焦点返回后清除并移开指针；正常图后实际断言无focus-visible/hover。共享源不改，旧Footer误标签历史保留。 | 三端footer新图，normal-state-after-capture为BODY、空focus/hover；预检也重演Cookie关闭后清洁捕获。 | AUTHOR_VERIFIED_FIX_PENDING_INDEPENDENT_REVIEW |\n\n原漏检：中心命中/矩形尺寸/对比未检测相邻绘制；预检未先看状态图。本版先完整看28张预检再冻结，45张正式图再全部实际打开。没有把V0.1变成通过记录，没有创建其他页。完整角色、保留范围和局部高度见同目录方向报告，细测和逐图观察在diagnostic_support。Finding正式关闭由总控依据独立复验决定。\n`);
fs.writeFileSync(review+'/DOC-COO_GATE4_EXECUTION_SELF_CHECK_V0.2.md',`# DOC-COO Gate4 执行自检 V0.2\n\n2026-09-07 · gate4_design · COO-G4-V02-SOURCE-01 · DRAFT_FOR_PROJECT_CONTROL_REVIEW / AUTHOR_SELF_CHECK_PASS_PENDING_INDEPENDENT_REVIEW\n\n只依据COO-G4-REV-01修IR01/IR02，V0.1全部保持。独立V0.1最终报告已完整读并绑定新冻结。67稳定输入、6运行文件、45正式图；没有写上游/方法/Manifest/Status/Index/其他页/D16。\n\n| 项目 | 自检结果与限制 |\n|---|---|\n| 来源可读绘制 | 两链接×三宽度×normal/hover/keyboard共18状态实际读图，矩形不覆盖邻字，focus不穿字，句号不孤立；450近边缘/内部命中点通过，neighbor overlap/hit均0。 |\n| Footer状态 | 三端新normal图实际无hover/focus且active BODY；共享CSS/HTML/行为未改，原勘误保持。 |\n| 完整文案/结构 | 六模块、九比较字段/顺序、四上下文、traceability、五准备、完整来源日期限定和B字符保持；仅第二来源现有句号纳入anchor，链接名称多此原句号。无新事实或媒体。 |\n| 几何 | 仅coo-02/coo-06增高，后文随流下移；页高4371/5257/6865。其他模块自身高度不变，不声称全页几何同G3。 |\n| 转化 | 两请求保持origin_supplier_qualification与DOC-COO hidden source，无Grade/destination/scheme；仅LOCAL_SIMULATION，生产receiver持久化和editable/removable本次未验证，待后续接入验收。 |\n| 实际运行 | 399通用预检+18来源+3Footer状态；492通用正式+18来源记录，均无断言错误。297控件三态回归、文本最低4.520、焦点4.818、其他控件最小44×44；Menu/Cookie实际行为通过，共享断点BODY焦点继承观察保留。 |\n| 实际看图 | 28预检全部先读后冻；45正式全部原生逐张读回，最长1661px。两风险各有新样例，未用数字代替读图。 |\n| 身份/证据 | 新source-freeze/export/asset绑定；正文反向还原、共享/字体/SVG精确。报告/回应/读回/几何/运行/工具事件/核清正式分层，最终清单核查后停止写。 |\n\n核心报告：../04_planning/gate4-v0.2/DOC-COO_GATE4_VISUAL_DIRECTION_AND_METHOD_REPORT_V0.2.md；返修回应同目录DOC-COO_GATE4_TARGETED_REVISION_RESPONSE_V0.2.md。源HTML SHA6d5a0352dad47b471cc78a5b51d590ac54458487e7b597b9e05385407a90ba43，CSS SHA134474dbba6d9b4719422d95fe78012b1c3ba1f109411043d1d977028895df43。\n\n本自检不代替独立审查，不关闭Finding或Gate；等待同一审查者定向复验及总控决定。\n`);
console.log('Current reports written.');
