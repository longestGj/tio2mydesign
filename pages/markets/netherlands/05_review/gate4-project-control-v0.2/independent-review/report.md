# Netherlands Gate 4 V0.2 独立定向复验

2026-09-07 · gate4_review_a · **INDEPENDENT_TARGETED_RECHECK_COMPLETE / NL-G4-IR01 ACCEPTANCE_MET；无新增Required Finding。**

本次独立实际复验满足V0.1唯一必修项的接受条件。三端句尾8px外部空白已消除，两个Documents链接保持真实44px目标和可见内侧焦点。已重新原生查看全部42张正式PNG，不把旧图阅读或作者自检当成本次证据。作者最终交付末核完成，本报告正式冻结；未自行批准Gate、进入Gate5或启动下一页。

## 依据、身份和范围

沿用V0.1已独立完整读取的Brief V0.2、A V0.1/B V0.2/C V0.1、Manifest V0.6及G3关闭组合；以V0.1独立报告SHA256 `81c6a4efe86fa8068040b9f14086287f19229b7c0a7bc38bb334d1b37fa99d2d`的NL-G4-IR01接受条件为定向标准。当前AGENTS、GATE_WORKFLOW_V2.0、PAGE_GATE_1_5_STANDARD_V1.2和治理细则V1.1已在初审末核时重读；采用layout-interaction-verification V0.2、core-risk-model和brand-applied-visual-design方法。Gate6/7治理合并不改变本页Gate4质量或授权边界。

冻结NL-G4-V02-SOURCE-01。独立复算HTML `9ffe164adbf63246a36601990d1841dbb6af24fb177fbf559dbdc616a1396be3`；CSS `7bc0c880ad3dc5ceabeea9b78f3e92f0ac1740bc6ff1aa067bd8b54554ffd847`；source-freeze `d02e1585f40635cef01b4a542f9b9773599b45da4ba3bc6752eda30adc233eca`；export-inventory `856620ecbf25b16ee6245c68ab2b77e8aa850941b9103f0668826b1263a0b8c9`，均与派发一致。116条输入/源依赖/正式图身份记录零差异，42图尺寸相符。

HTML与V0.1逐字节相同；只有Documents两个段内链接的CSS改动：margin由8px变为1px 0，增加padding-inline:3px、position:relative和outline-offset:-3px。其余CSS精确相同。正文、标点归属、链接标签/URL、脚本、共享组件和依赖未改，不存在把句号移进anchor后仍声称标签相同的问题。

## IR01接受条件结果

| 接受项 | 独立结果 |
|---|---|
| 三端normal/真实hover/Tab焦点，句尾自然连续 | 满足。句号与目标右边界实测间隔均0px，保留3px内部padding；不是字形间距为0。全部正式状态图中句号紧随链接，未孤立或移到下一行。 |
| 原句、标点数量和顺序、href、RFQ语义 | 满足。HTML、标签均未改，批准B标题/段落/列表/链接在三端及禁JS模式相等。 |
| 连续≥44×44命中与焦点/邻文安全 | 满足。两Documents链接×三端×三态共18组，以及VVVF九组相邻回归，全部单矩形；每组连续44×44区域1936点及49近边缘点全命中。非链接邻字中心误命中0，点击盒或实际焦点包络与邻字字符框交叉0。 |
| 同段与后续Grade段、两个动作及相邻区域 | 满足。Product Hub/Not sure / Need help关系清晰；单Grade、多类型、额外Grade不可映射及分Grade请求原句保留。Request Documents/View Document Hub三态与点击意图正确，Products及RFQ区域无回归。 |

Documents实际尺寸：Product Hub为110.9375×44（1440/768）、105.515625×44（390）；quotation request为153.1875×44（1440/768）、145.609375×44（390）。新的3px outline向内偏移3px，其外延为0；探测按实际computed outline计算，不沿用旧7px外包络。描边、文字与下划线清楚，内部padding容纳描边，没有遮字；hover背景仍白色，未覆盖邻行。VVVF外侧焦点仍按7px包络实测，没有因本次局部修复改变。

## 新图实际阅读与关联回归

全部42正式图重新逐张原生读取：三端Hero/Applications/Products/Documents/RFQ/Footer共18区域；VVVF、Document Product Hub、Document quotation request三端hover/focus共18状态；三Cookie、两Menu、1440主请求hover共6图。与V0.1比较27图逐字节相同，15图变化为三Documents正常图及两正文链接12状态图；无论字节是否相同，本次均重新看图。独立同源同clip重渲染的18正常区域和18来源状态与V0.2正式PNG逐字节相等。三Footer确为normal，故意施加Cookie返回焦点时不再与normal图相同。

五模块、D三列/T标识行/M纵向应用对象关系完整，长文无截断。VVVF会员企业segments归属和不决定Grade限制保持；Products中性，无国家适用推荐。Documents已批准COO句一次；额外Grade未映射成文件类型。RFQ四准备项、MT单位、可选城市/港口、人工review/contact原句完整。品牌Navy标题/Teal动作、白/浅底工业说明层级和主辅动作关系未变。局部段落更紧凑，未以装饰、额外表单或新内容扩大范围。

Chrome152.0.7977.82 headless、DPR1、本地file；1440×900、768×900、390×844。重新运行所有可见正文/共享控件normal、hover、Shift+Tab→Tab焦点，共333实际状态；最小文字对比4.5200728131:1，实际焦点表面对比最小同值；没有小于44×44目标。没有pageerror、外网请求或横向溢出。正常/hover/焦点视觉判断独立于计数和比值。

768/390菜单实际Home入口、正反循环、Escape/Close返回Menu、选择关闭、背景inert及拒焦、滚动锁和Desktop断点恢复保持。三端Cookie实际Close首焦、循环、背景拒焦、Escape/Close返回Cookie Settings保持。跨Desktop焦点落BODY仍为初审已记录的共享继承观察，未把该路径说成完整可见焦点，也未将未改共享行为扩成新的局部返修。

三端12个正文链接逐一点击；共享入口另21/22/22条记录。RFQ仍含source_page_id=MARKET-EU-NL和destination_country={value:'Netherlands',visible:true,editable:true}；Documents只有source，无文档类型或Grade预选；Products、Hub、VVVF及普通导航context=null。所有记录kind=LOCAL_SIMULATION_NOT_RECEIVED，不能当成生产接收或实际字段可编辑的验证。

## 证据、次序和限制

新目录内verify.cjs/identity.json/runtime.json，link-probe-centered.cjs/json，punctuation-check.cjs/json，supplement.cjs/json，assess.cjs/assessment.json可复算上述结果。先看源图、实际运行并保存initial-observations.md，再核作者最终报告；未读取总控检查结论作为依据，未修改候选，也未另存全套重复PNG。

禁JS验证的是完整正文与原生href，未宣称脚本菜单/弹窗在禁JS下可用。生产receiver可编辑/移除/持久化/提交/归因、实时外链可达性、其他浏览器、实体设备、原生缩放及辅助技术仍不在本地范围内。Gate4代表样例不代替Gate5完整页面或生产验收。

独立观察保存后完整阅读作者最终方向报告、返修回应和自检。作者对局部CSS、标点归属、内侧焦点、实际颜色及生产未测边界的说明与独立结果一致。作者保留了零垂直margin尝试的像素命中失败及元数据勘误，本次未把该诊断当成正式冻结缺陷，也没有依据其“526/27/18”数量替代自己的运行。其报告明确独立复验待定，不自行批准。

作者交付的5个派发SHA均独立相符：方向报告`07eafe3ec51d3684df9f5787645b44d5b17bb4b0c55fd896e05eb8611bc86728`，返修回应`662a2353d3ab942fccd2057853ed042d739aa12bbabe5c6b35c132716ff06b3e`，asset-inventory `410d9f8d42c3e6d57d036fa4cbb56593959e0b7da9a17c9b092eb7f2a5e6bdd5`，final-receipt `a3f560ee1b2b8d32ef704538d4f1905fbcbd8bb1dee8091b075e6026dad8b09c`，执行自检`d6d6465a1e71832f6ac328dde0cbbb49d67fe8e26c5fa05a88fecf6e86051649`。final-check.cjs/json重新逐项计算asset-inventory、source-freeze、export-inventory所列共188条身份记录（含重复引用），全部相符；未发现本轮冻结后漂移。final-receipt校验的是文件身份，未将作者receipt统计冒充独立核验数量。

正式技术结论：**NL-G4-IR01接受条件已满足，无新增Required Finding，可交总控处理Gate4关闭。** Gate状态由总控按既有授权决定；本结论仅覆盖冻结组合和明确已测范围。
