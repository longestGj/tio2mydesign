# Poland Gate 4 独立初审

2026-09-07。结论：**REVISE — 一项 IMPORTANT 必须返修**。被审范围为 MARKET-EU-PL 的代表视觉样例和共享状态；不是 Gate 5 全页验收，不关闭 Gate 4、不授予开发或发布权限。

## 被审组合与独立性

冻结：`PL-G4-V01-SOURCE-01`，候选目录 `D:/23MySec/pages/markets/poland/04_planning/gate4-v0.1/`。

- HTML：`MARKET-EU-PL_GATE4_VISUAL_SAMPLES_V0.1.html`，SHA-256 `d87fb01ea6c1fd3c1f93002b71c5c86222db38a6a15bb26d7a8319503aac53c9`。
- CSS：`visual-rules.css`，SHA-256 `719f8ec8d00ac6175fa2c1aa94bedc56151b2c95b011283a441a0120a97b57eb`。
- `approval_core/source-freeze.json` 绑定9项源/依赖、20项输入；`export-inventory.json` 绑定18张正式PNG。独立读取并实算47项文件的字节数、hash及PNG尺寸，审查前后无不一致，清单对冻结记录的hash绑定也一致。原批准Gate 3和B未变。

先读取 REVIEW_SCOPE、原始Brief/A/B/C、V0.14授权及V0.13→V0.12批准组合、原产地/COO决定、当前品牌/CTA/Logo/Chrome/法律/Consent owner、布局核验V0.2及core-risk-model；随后查看全部正式图、检查源并运行本地交互；最后才读取作者方向/方法报告及执行自检。没有采信或读取root的检查结果作为本报告证据。

## 实际范围、核心与专属风险

**STATIC_VISUAL：**以原尺寸逐张打开全部18张正式图：三端Hero、Product Review、Documents；390 Material、Final RFQ、Footer；1440 Hero focus；768/390 Menu focus；三端Cookie focus。每图全部显示区域均已阅读，没有用缩略图或源码存在代替可见性判断。

**SOURCE_INSPECTION / ACTUAL_RUNTIME：**Chrome 152.0.7977.82、file URL、1440/768/390×1000、DPR1。独立比较三端main可见正文与原始B，空白规范化后一致；main源码与批准Gate 3逐字节一致。共享Logo路径从绝对file URL改为相对路径，所指生产SVG payload相同；未发现新增共享owner或业务页面正文来源。对1440 Product Review、768 Documents、390 Material做内存重渲染，三张与正式图逐字节相同；没有另存重复全套栅格图。

| 核心/专属风险 | 实见与范围结论 |
|---|---|
| 品牌与视觉含义 | Navy/Inter/白色阅读区/浅Hero/深Footer形成克制的采购阅读层级；填色请求与浏览、辅助链接可区分。无地图、证书章、工厂或本地库存暗示。颜色问题见IR01。 |
| 原料与white masterbatch | 390 Material保留完整同段解释，不把成品色母粒当成另一项在售商品；Desktop/Tablet沿用同类section-grid规则，正文和几何已核对，不把未单独导出的实例当作已完成全页视觉验收。 |
| 两类应用 | 1440两列各576px、768两列各336px；390依次350px单列。标题字号/字重相等，说明完整，公共Products动作位于两者之后，分隔线和cursor不暗示可点击或排名。 |
| 文件三段 | 三端保留已知Grade请求、普通COO句、未知Grade替代路径和两行动；COO没有放大为认证状态、普遍发证或放行保证。390是最密集、最值得保留的读例。 |
| 最终RFQ | 390完整保留未知Grade、多Grade在Additional Requirements补充、人工审阅联系的顺序。EU长链接全文可读且平时从属于RFQ；悬停色问题见IR01。 |
| 字体/几何 | Inter FontFace已加载；CDP实际Hero字形为自定义Inter（20pt/20pt/18pt）。正文17px、Hero20/20/18px、共享工具文字14px与源一致。全部测得可见控件宽高至少44px；三端及所测状态无水平越界。正式图另检查了文本裁切、碰撞和异常空白，未发现问题。 |
| 共享组装 | Header84/64/64px，Logo180×60/120×40/120×40，Footer反白Logo180×60；Markets对应当前导航，固定RFQ，无可见CURRENT或Footer当前标识。法律三链接及Cookie Settings存在且顺序继承批准快照。 |
| 菜单实际操作 | 768/390键盘打开进入Home；Tab及反向循环留在菜单+Close；主区、Footer、Logo及Header RFQ隔离，尝试聚焦背景未移出。Escape、Close、选择Products均关闭、释放隔离并返回Menu。跨1440断点关闭并恢复背景；其焦点细节见建议S01。 |
| Cookie实际操作 | 三端进入Close；正反Tab在Close/Policy之间循环；原生modal阻止背景焦点；Escape和Close均回Footer触发器。浅背景teal焦点、深Footer白色焦点真实操作并检查，未画假焦点。 |
| 行动边界 | 三端全部main链接实际点击，记录准确href且无自造预填。菜单Products及Cookie Policy也实际触发本地拦截。此为LOCAL_SIMULATION的导航记录，不证明目的页接收或生产CMP。网络拦截无HTTP(S)请求，运行无pageerror。 |
| 不适用范围 | B/C无页面内表单、选择器、表格、FAQ、提交状态或媒体，故NOT_APPLICABLE；不生成缺失组件清单。无图为正常基线，Logo仅品牌用途。 |

主CTA常态白/teal4.818:1、hover白/Navy13.959:1，teal/白4.818:1、teal/浅Hero4.520:1，正文/白10.355:1，Footer工具文字/Deep Navy12.819:1。浅背景焦点4.520:1以上，深菜单白焦点17.189:1，菜单Malaysia Teal当前标记/Deep Navy5.862:1。对话框文字在不透明白底；不把背后被遮罩、不可操作页面的颜色当作当前对话框文字背景。装饰分隔线不是唯一功能边界。

## 必须返修：PL-G4-IR01

**级别：IMPORTANT。位置：**PL-04 `View Document Hub`、PL-05 `European Union Procurement Overview`；1440/768/390均可复现的pointer hover状态。涉及HTML内通用 `.body-action a:hover{background:#e8eef3}` 与 `visual-rules.css`第8行的辅助链接teal文字规则。

**预期：**普通16px/600辅助链接在所有实际背景和hover状态下文字对比度至少4.5:1；保留现行功能teal、完整标签、既有动作位置和从属层级。

**实际：**两链接常态符合要求，但悬停时继承`#E8EEF3`背景，文字仍为`#008078`；实测样式在三个宽度均一致，计算比值 **4.119218891986719:1**。`Explore Products`另有`#F5F8FB`覆盖而正常；不能以其或主CTA的hover结果代表这两种实例。作者规则表未写辅助链接hover的实际组合，自检只列较强组合，因此未发现该遗漏。

**影响：**用户正在指向Document Hub或EU概览时，链接文字可辨性下降，违反本次品牌无障碍要求。无需改文案、结构或共享owner；修正辅助链接的视觉状态即可。

**直接证据：**

- `PL-G4-IR01-hover.json`：六次真实hover后computed foreground/background、字号及`:hover=true`。
- `supplement.json`：从实际computed色值计算的对比度。
- `PL-G4-IR01-390-pl-04-viewport-hover.png`、`PL-G4-IR01-390-pl-05-viewport-hover.png`：实际悬停且截图后复核仍为该状态，已逐张打开；图中的浅灰块和teal字为问题组合。
- `hover-capture-correction.json`：区分有效状态证据和早期截图编排问题。

**接受条件：**执行者为这两类辅助链接明确指定合规hover组合（例如保持`#008078`，将背景设为已验证的`#F5F8FB`或白色）；三端实际hover文字比值≥4.5:1，键盘focus仍可见，标签/目标/命中区/层级不变。复核Hero辅助Products、PL-03浏览按钮、主请求CTA、Cookie链接的相邻状态无回归；更新真实规则/自检及冻结身份与受影响证据后，由独立审查按同一ID复验。保留V0.1，不回写本初审。

## 应保留的优点与规则覆盖判断

保留真实长文案、自然而非固定裁切的高度、等权应用路径、COO普通段落、未知/多Grade及人工联系说明、无图基线和主次行动层级。作者规格给出具体字号、行高、宽度、间距、断点、颜色及共享适配范围，和所见/实测基本对应；未拍摄PL-02/05桌面平板实例的复用映射合理，可为Gate 5提供方向。IR01说明状态组合仍须补齐，不能仅凭少数token数值或已正确的主CTA推广为全组合合规。

## 可选建议、限制与失败留痕

**S01（建议，非Gate 4必修）：**菜单打开时跨到桌面断点，菜单关闭、滚动/背景隔离正常解除，但焦点实际落在BODY，因为原Menu按钮已隐藏。共享owner可在后续明确一个可见桌面导航焦点落点；不要以此自动重开本页批准Gate 3或擅自改共享包。普通Close/Escape路径已准确返回Menu。

未验证：真实移动设备、其他浏览器引擎、读屏宣布、真实浏览器UI200%缩放、所有中间宽度/指针边缘、真实`:visited`历史着色（仅审查源定义）、目的路由/可编辑预填/真实表单接收、生产Cookie存储/服务、Gate 5整页节奏及未单独输出的全页实例。原生modal的背景隔离通过实际聚焦尝试验证，不等同于读屏测试。

审查工具有两类失败，均不归为候选缺陷：第一次CDP字形补测未启用CSS agent，错误保存在`supplement-failure.json`与`supplement-attempt1.cjs.txt`，补启用后完成，结果在`supplement.json`。第一次两张hover局部截图调用locator截图时滚动，指针落到主CTA；原`*-pl-04-hover.png`/`*-pl-05-hover.png`保留为未成功捕获预期hover的诊断，**不得用于证明IR01外观**。已改用不滚动的viewport截图，并在截图后复核hover属性；修正记录与有效图片见上述直接证据。

`approval_core`：冻结候选/依赖、正式18张PNG及规格，和本最终独立结论。`diagnostic_support`：本目录runtime JSON、补测、必要状态图、运行脚本、失败及修正记录。仅保存必要诊断图，没有另建重复完整三端核心包。

下一责任方：`/root/gate4_design`执行IR01定向返修并提交新冻结；本独立审查者检查接受条件和相邻回归；root整合后向用户展示实际方向。用户最终批准前Gate 4保持未关闭。
