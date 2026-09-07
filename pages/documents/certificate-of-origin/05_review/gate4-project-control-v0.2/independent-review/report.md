# DOC-COO Gate 4 V0.2 独立定向复验

2026-09-07 · gate4_review_a · **INDEPENDENT_TARGETED_REVIEW_ACCEPTED / 待总控记录决定**

**COO-G4-IR01、COO-G4-IR02 均满足既定接受条件，未发现新增必修问题。** 本结论基于冻结源、全部45张正式图及独立浏览器运行；不代替总控关闭、Gate 5完整视觉或生产批准。V0.1失败报告与证据保留不改。

## 范围与证据顺序

按 COO-G4-REV-01 和本人 V0.1 初审报告两项接受条件执行，写入仅本 independent-review 目录。原始 Brief V0.3、A V0.1、B V0.2、C V0.1、G3及共享/品牌合同继承前轮实际读取且当前冻结身份一致的输入，详见 V0.1 input-preparation.md / report.md。继续使用 layout-interaction-verification V0.2、core-risk-model、brand-applied-visual-design V0.1。

先读取V0.2源/CSS、正式图与运行，保存 initial-observations.md 后，才完整读取作者V0.2方向报告、自检、返修回应和最终清单。未读取总控复验结论，没有修改候选/上游/共享/状态，没有访问下一页或开发/生产环境。

冻结 COO-G4-V02-SOURCE-01；HTML SHA256 `6d5a0352dad47b471cc78a5b51d590ac54458487e7b597b9e05385407a90ba43`，CSS `134474dbba6d9b4719422d95fe78012b1c3ba1f109411043d1d977028895df43`。source-freeze `8b677f8b4fd01f38c4cc77943c68e371593f359a65d8bb6b3095ccf118135436`，export-inventory `6d1ece95433f53c3639b4ef76a451abaea46736044a58420d506d24bb58a3d0e`。

## COO-G4-IR01：接受

两处官方来源从重叠的 inline 片段改为单个 block 流式矩形，width:fit-content、max-width:100%、min-height/min-width:44px、上下padding8px/margin8px。功能色和下划线仍表达辅助来源，不改为第三类主要CTA或认证标记。实际图中上下文、链接自身多行、背景和外环均清楚，无遮挡、穿字、裁切或孤立标点。

三宽度 × 两链接 × normal/真实hover/Shift+Tab后Tab键盘焦点，共18状态均独立运行。18张正式状态图与独立同状态、同clip截图逐字节一致；正式图均已实际打开读回，不以匹配数字代替视觉判断。

| 视口 | coo-02 指引链接实际矩形 | coo-06 官方来源实际矩形 |
|---|---|---|
| 1440 | 388.46875 × 44.890625px | 453.125 × 44px |
| 768 | 388.46875 × 44.890625px | 453.125 × 44px |
| 390 | 350 × 70.375px | 350 × 70.375px |

每个状态只有一个client rect。独立在其中连续44×44区域按每CSS像素中心做1936次elementFromPoint检查，全部命中该anchor；另49个覆盖近边缘和内部的采样也全部命中。此证据结合单矩形布局与实际绘制，支持真实连续触达区域，而不是旧版跨行联合包围框/单中心点推断。相邻非链接可见字符Range与链接矩形没有相交；focus状态额外计入向外6px的焦点包络后仍无交叉，字符中心误命中为0。指定视口无横向溢出、链接没有超出视口。

普通/focus文字Teal对白底4.817749:1，hover Teal对实际#F5F8FB为4.520073:1；focus外环对实际承载白底4.817749:1。均符合文字4.5:1和焦点3:1要求。真实hover与focus-visible状态被读取确认，没有仅改颜色数字而漏看实际背景。

B完整段落、标题、列表、比较单元三端严格相等。原样链接标签比对保留一个明确差异：最后官方来源标签包含原来紧接anchor的句号。原句字符、标点数量、句序、日期、限定和href全未变。将两个新增class、该句号标签归属及版本标记还原后，整份HTML与V0.1精确一致。接受为防止块状换行产生孤立句号的标记调整，不构成原文修改或URL变更；没有把原样链接比对的false悄悄当成true。

局部流式增高属于已授权修复：coo-02在1440/768增高60.890625px、390增高59.1875px；coo-06分别增高60、32.8125、32px。后文随之下移，其他模块自身高度、横向位置/宽度和字体未变。未再声称全页几何等于G3。实际查看比较结论、后续context/traceability、prepare、官方来源至Footer，未见重叠或内容缺失。

## COO-G4-IR02：接受

1440/768/390新Footer正式图实际为无hover/focus普通态。独立清除焦点并将指针移至空白后按原clip重渲染，三图均逐字节一致；实际检查footer内focusedInside=false、hoveredControls=0、focusVisibleControls=0。新图、normal元数据一致。

共享Header、Footer、原内联CSS及行为脚本与V0.1精确一致，未通过隐藏/修改共享焦点样式掩盖采集错误。实际Cookie触发器仍有清晰白色键盘外环。V0.1报告和自检保留原三端Footer误标签勘误，原版本不是追溯改成通过。

## 全部图与必要回归

全部45正式图逐张实际打开：三端Hero、comparison（390分三段）、context-and-traceability、prepare、official-source、footer；三端Cookie焦点、两端Menu焦点；1440主请求hover、390Document Hub focus；两来源三端三状态18张细图。最长1661px正式图完整读回，不以缩小全页概览替代。final-check.json列出对应45文件及SHA，initial-observations.md保留作者报告前的观察。

三端Hero、768/390Menu及390比较前两段共7图与V0.1逐字节相同，仍实际查看；其余38图均新读。20张普通区域图及6张来源normal细图共26张普通态独立重渲染全部字节相等。没有复制一套重复独立PNG。

六模块仍完整；三类证据保持等权、对应字段和响应重排正确。四context、公司所在地/Additional Requirements用途、origin与traceability区别、五prepare、单Grade多文档类型与分Grade提交规则保留。长H1、完整来源标题及三个日期、订单/装运可得性限定均清楚。未添加availability upon request、证书/海关结果保证、库存/签发暗示、公司traceability能力、认证图案或其他媒体。品牌层级与正文主动作保持；新增留白有明确可读性用途。

必要相邻运行覆盖两次主请求、Product Hub、Document Hub、Footer RFQ、Cookie触发器的真实hover/focus；三端每个可见正文出口及Header/Footer RFQ实际点击。两个Request仍是`/request-documents/`，只有`prefill.document_types=['origin_supplier_qualification']`与`source_context.page_id='DOC-COO'`，无Grade/destination/scheme。RFQ只有`source_page_id='DOC-COO'`；其他出口context=null，两个官方href完全相同。全部为LOCAL_SIMULATION、receiverExecuted:false。

Cookie真实打开后首焦Close，背景拒焦、Escape回触发器通过。两窄端Menu打开、背景inert、Documents当前项键盘focus、Escape回Menu通过。共享源未变，前轮已完成的正反Tab全链路/所有共享导航出口/关闭分支可明确承接；本轮未重复其全部组合。共享跨Desktop关闭后BODY焦点的继承观察继续保留，不称其为返回可见桌面控件，也不扩展本页返修。

禁JS三端正文、表格、列表和原生链接与有JS结果相等。浏览器为Chrome152.0.7977.82、headless、本地file、DPR1，1440×900、768×900、390×844；pageerror和外网请求均0。没有实测生产receiver的可编辑/移除、隐藏来源持久化、真实提交/服务端归因、外网官方内容、其他设备浏览器矩阵。本地结果不宣称这些集成已验证，也不称接收器未实现。

## 作者文件及最终身份

独立发现落档后读取V0.2方向报告、执行自检和返修回应，说明与实际结果一致：承认原失败、准确记录句号可访问名称变化、局部高度增量及本地模拟边界；视觉角色与六模块映射完整。作者自检作为交付说明核对，不替代独立证据。

独立初核67输入+6运行文件+45图共118身份记录，零差异；45图像素尺寸一致，freeze/export与派发SHA一致。最终清单含重复引用共225记录零差异；最终报告、自检、asset-inventory SHA均等于派发身份。asset-inventory SHA `58994d55953f358774b08561ca0706bdead5058f27b52bc03da0d152d32983bd`。未发现冻结后源/图变更。记录数量仅说明核对范围，不作为评分或自动Gate判定。

复现文件为本目录verify.cjs / runtime.json、final-check.cjs / final-check.json；作者报告前观察为initial-observations.md。**建议总控记录IR01、IR02复验接受并按既有授权办理本页Gate4决定。** 本审查不改Manifest/Status，不自行批准或进入下一页/Gate5。
