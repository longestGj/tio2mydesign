# DOC-COO Gate 4 视觉方向与方法报告 V0.1

2026-09-07 · 执行者 gate4_design · DRAFT_FOR_PROJECT_CONTROL_REVIEW / AUTHOR_VISUAL_FAIL_REQUIRES_REVISION

本版不能批准。正式逐图读回发现 COO-G4-AUTHOR-01：Official Source 的长 inline 链接在三端 hover 覆盖相邻正文，390 keyboard focus 外环穿过上下行。冻结源和全部图保留，等待总控合并独立审查发现后定向返修。468 条自动记录均满足所编写断言，只证明其检测范围，不能覆盖这项真实视觉失败。源冻结后的绘制问题不回写上游或消除历史。

## 当前依据与范围

当前入口为本页 04_planning/DOC-COO_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md，承接 V0.7 精确 Gate 3 组合及 05_review/DOC-COO_GATE3_TO_GATE4_HANDOFF_V0.1.md。八页合同 GATE4_EIGHT_PAGE_SERIAL_CONTROL_V1.0.md 授权当前第二页，仅执行 DOC-COO Gate 4；预认可不代替独立审查。未改 Manifest、Status、Index、方法源或旧批准稿，未进入下一页、Gate 5 或 D16。

完整读取本页 Brief V0.3、A V0.1、B V0.2、C V0.1、G3 源/8 图、关闭/交接/审查，以及 DOCUMENT_PLAYBOOK_V0.3.md、DOCUMENT_REACH_COO_POST_TDS_EXECUTION_CHECKLIST_V0.1.md 和本页登记/关键词归属。最新批准 C 和 B 优先：旧 Brief 的 Hold、额外内容建议及旧接收规则不恢复。Playbook V0.3 文头为 SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED，其 DOC-000 finder 结构不作为本页批准结构。应用其通用边界须与本页当前 C 一致。

共同方法沿用已完整读取、哈希未变的 Gate 4 Agent V0.1、brand-applied-visual-design V0.1、layout-interaction-verification V0.2 及 core-risk-model、两页复盘、根规则/治理和 Gate 1–5 标准。当前品牌/CTA 增补、生产 SVG、Global Chrome、法律与 Shared Consumer V0.2 均按冻结输入绑定。Poland 是已批准视觉参考；本页 HTML/CSS/正文/上下文来自自己的批准 G3，不以 Poland 或 Spain 为母版。只复用已读的本地测试帮助函数；页面断言和样例范围重新按 DOC-COO 编写。

冻结：COO-G4-V01-SOURCE-01。approval_core/source-freeze.json 绑定 58 项稳定输入、6 项运行文件，排除动态 Status/Index/Progress。批准 G3 源 SHA256 为 04b65172bf9fbebce42c3cdc122e5f9f018f466e11a849a23113f7c214b82105；候选源为 ff0f09658e87519bcfe474b74d46b323b7f118eeda3929828995d259dd4b903d；CSS 为 792b92a251a06eb42fe90588048a0a3a6089324c1662d6c4152a51ef7c0f221d。完整身份以源冻结、导出及资产清单为准。

## 页面判断及实际改变

方向保留无图的文档说明页面：先帮助买家判断证据需求，再组织请求。保留长 H1、六模块、三类证据等权、四项上下文、origin 与 traceability 的区分、五项准备、完整官方日期和限定句。两次 Request Origin Documentation 是页面主动作；Product Hub、Document Hub 和官方来源均为辅助入口。Header/Footer 的 RFQ 属共享导航，不扩大为正文主题。没有伪证书、印章、国旗、图片、推荐排行、文件库存、表单或额外 FAQ。

G3 已具备可用的三端信息组织、排版和请求层级，本次不为展示变化而重排。具体新增判断是把比较区域的分组背景归一到准确品牌色，并明确所有正文链接的状态表面。Desktop 表头及 Tablet/Mobile 三条记录标题背景从 #F0F5F8 改为 #F5F8FB；三类使用同样背景，不赋予某类优先权。Navy #062B5B 文本对比从 12.711:1 提升至 13.097:1；记录的 #475569 小标签在新底为 7.109:1。正常态全部模块/共享区域几何与本页 G3 完全一致，页面高度分别 4251、5164、6774px。

普通正文链接 hover 原计划使用 #008078 / #F5F8FB 和 2px 下划线，避免 Poland IR01 的实际底色对比漏检；两主按钮保持白字/Teal，hover 增加下划线。前一判断适合独立块状链接，但本版将其直接用于有 14px 上下 padding 的长 inline 官方链接，造成绘制覆盖。此规则对两条来源链接目前是失败实现，不能直接交付 Gate 5；返修须补独立可读绘制/命中/焦点边界。其余复用落点与精确规则如下，不以“换按钮色”代替完整视觉规格。

## 可执行角色规则与所有模块映射

除来源链接待修项，以下继承规则已由本地渲染核实。D/T/M 对应 1440/768/390 logical px，1x 输出；内容断点 1000px、600px，共享菜单断点 1100px。不是把 780 图当 Tablet。

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
| 官方长链接（待修） | #coo-02 a与#coo-06 a 仍是G3 display:inline、上下padding14px。透明常态可读，hover背景遮邻行、窄屏focus穿字，故本项不得作为已验证可执行状态。必须新版本解决，禁止只删除失败截图或只引用对比数字。 |
| 共享 | 原嵌入Consumer V0.2的CSS、Header、Footer、Cookie、行为五slot与本页G3/中性快照核对一致；Documents current（DOC-000），无CURRENT可见文字。准确共享字号/间距/断点/颜色以冻结 shared-chrome.css、shared-chrome-data.json、shared-consent-data.json 及owner合同复用，不建本页分叉。 |

| 本页模块 | 代表图 / 后续复用范围 |
|---|---|
| coo-01 Hero | 三宽度 *-hero.png，覆盖完整共享Header、面包屑、长H1、全部开场正文、Product Hub与主请求；1440-primary-hover.png为真实主状态。 |
| coo-02 比较 | 1440/768-comparison.png覆盖完整三类与结论；390-comparison-1/-2/-3.png依内容边界完整分段，不缩成长图。768-comparison-guidance-hover.png为真实来源状态；需随来源链接返修回归三宽度。 |
| coo-03 上下文 + coo-04 Traceability | 三宽度 *-context-and-traceability.png，四项完整、表单用途说明、单据一致性及两段区别说明均在图中，M1661px可原生读回。 |
| coo-05 准备/请求 | 三宽度 *-prepare.png；五项、未知细节、单Grade、多文档类型、人工审查结果边界完整；390-document-hub-focus.png真实辅助焦点。 |
| coo-06 官方来源 | 三宽度 *-official-source.png完整标签、10 October 2025、5 January 2026、7 September 2026和不证明特定订单/装运可得性限定；三hover和390-focus保存失败证据。 |
| 共享组装 | 三宽度 *-footer.png、三Cookie-focus及768/390-menu-focus。Footer文件导出字段写normal，但实际包含Cookie Settings返回焦点，读回登记勘误；不得作为纯normal状态证据。 |

六模块无未映射区域。32张按风险分配：20个内容/共享区域、5个Menu/Cookie状态、7个正文状态；不是固定配额。所有原生PNG最大高1661px、逐张打开完整读回。Gate 5 仍需在获授权后生成三端完整视觉组合及批准状态，复用这些角色到全部模块并处理跨区连续性，不能把当前代表样例或失败状态作为整页批准。

## 内容和转化合同保持

两主链接 href 仍为 /request-documents/。本地模拟点击均记录 prefill.document_types=['origin_supplier_qualification'] 和 source_context.page_id='DOC-COO'；当前C要求接收端该文档类型可编辑/移除，source隐藏，不预选Grade、destination、scheme。Header/Footer RFQ遵从共享source规则，不能以其替换正文请求语义。

本地样例没有接收表单，也没有真实导航/提交。CONV-DOC已有其当前独立Gate9权威，不在本次访问范围；本次Gate4未验证生产receiver、预填持久化、可编辑/移除与提交，待后续接入验收。不能写成整个receiver尚未实现。B全文及A/C当前结构经源和浏览器文本核对一致，三行九字段顺序对应。无availability upon request新增句，无已签发/优惠/海关结果承诺，无公司traceability能力扩张。外部官方链接未访问，本版只保留批准B的完整来源和日期，不声称完成新的法规检索。

## 验证方法、证据层次与发现

依次读取本页源 → 提取风险/角色 → 保留本页G3并局部附加CSS → 392条预检 + 7张预检图实际打开 → 冻结源/依赖 → 本地正式导出 → 468条运行记录 → 32图逐张实际读取 → 发现失败并停写冻结源 → 本报告/自检/资产核清。

STATIC_SOURCE：HTML正文/结构/脚本反向还原与G3一致；B去控制注释和Markdown语法后，与实际文本比较，保留全部表格字段；五共享slot、SVG/字体身份一致。ACTUAL_RUNTIME：Chrome152.0.7977.82、Playwright1.62.1、Node24.16.0、headless、deviceScaleFactor1，file本地，所有外部请求拦截且观测0。normal/真实hover/Tab与Shift+Tab激活focus-visible共297条控件状态；文字最低4.520:1，焦点最低4.818:1，测得最小44×44。白/Teal主按钮为4.818:1；这些数字不消除来源绘制覆盖失败。

真实Menu验证入口焦点、Tab往返环、背景inert/滚动锁、Escape返还、选项关闭、切换Desktop关闭恢复；Cookie验证Close入口、Close/Policy循环、模态隔离、Escape/Close返还。继承观察：Menu打开后跨Desktop断点activeElement为BODY，未声称此路径保留可见焦点，归共享owner后续跟踪。LOCAL_SIMULATION仅证明出口意图，receiverExecuted:false；不冒充真实接收提交。

STATIC_VISUAL：32张正式图全部用tools.view_image(detail=original)实际打开，读回结论保存diagnostic_support/visual-readback.json。预检只看正常内容风险，虽执行状态测量，未导出/审视长来源hover和focus，所以冻结前漏检。正式状态图揭示COO-G4-AUTHOR-01，覆盖文本不能接受。现有片段中心elementFromPoint命中与矩形48px高检测不足以证明邻行可读/命中边界；新版本需检查完整绘制区域与相邻文字，而不能仅重复中心点。Poland教训促成真实背景对比，但仍需补此本页独特inline风险。

COO-G4-AUTHOR-02是证据状态勘误：三端footer PNG均见Cookie Settings白色返回焦点；原export state=normal保留历史，visual-readback记录实际状态。本版不另造截图覆盖。工具记录另保留批量图输出超过上下文后重开、小脚本查找路径不存在后用实际文件解决；未删除失败或伪造图检查。

## 交付、复现与停止条件

入口 DOC-COO_GATE4_VISUAL_SAMPLES_V0.1.html；方向CSS及4个dependencies（字体、许可、正向/反白生产SVG）均相对依赖，无在线资源。approval_core/source-freeze.json、export-inventory.json、asset-inventory.json分别绑定稳定输入、32图和全部交付文件；diagnostic_support保存构建、预检、正式运行、实测角色、读回、失败和最终核清。

复现工具为已知bundled Playwright绝对require + Chrome。diagnostic_support/build-samples.cjs说明原源派生；verify-render.cjs说明实际检查/截图步骤并拒绝覆盖PNG；measure-visual-roles.cjs比较正常几何。复验应在新输出位置或新的候选版本执行，不重写本冻结组合。核验sha256和PNG尺寸后读对应报告即可重建证据链。

本报告与05_review/DOC-COO_GATE4_EXECUTION_SELF_CHECK_V0.1.md属于执行者判断。当前状态是作者视觉失败、等待独立审查统一返修，未自批。本目录最终清单完成后停止写入；V0.2须由总控定向派发。未访问开发仓库、生产或付费工具，无外部提交。
