# DOC-COO Gate 4 V0.1 独立实际观察（作者报告前）

2026-09-07，COO-G4-V01-SOURCE-01。已读冻结HTML/CSS、全部32正式PNG，并运行本目录verify.cjs和source-link-probe.cjs。当前未读取作者方向报告、自检、最终资产清单或root检查JSON。

结论：V0.1需要定向返修，不能关闭。两个实际问题如下，后续正文/来源/对比正确不能抵消。

## COO-G4-IR01 — 来源链接 hover 遮字、focus 穿邻行（IMPORTANT / REQUIRED）

两官方来源链接继承 display:inline、padding:14px 0，片段高度48px，而相邻文字行高27.2/28.9px；新增Soft hover背景会在未扩展的行布局上绘制。首次独立打开390-official-source-hover/focus即发现遮字/交叉（早于收到root转述作者发现）。正式三端official-source-hover均可见相邻正文受影响，390focus环穿过前一行和后续source-information句子。运行验证两链接三端均真实hover/focus，48px片段与非链接文字Range有重叠；小样本hit-test显示部分padding边缘不命中链接，不能仅凭48px或整体包围框报告触达通过。

独立运行图390-source-hover-runtime.png和390-source-focus-runtime.png实际重新打开确认，同正式图问题一致。source-link-probe.json保留每行真实client rect、3×3命中采样和相邻字符盒；字符中心被链接捕获计数为0，**没有声称已证明点击正文字符中心会导航**。已证明的是实际遮字、焦点绘制冲突及包围框不足以证明整个目标可用。

接受条件：两个官方来源链接在1440/768/390的normal/实际hover/keyboard focus均完整可读；背景/下划线/焦点不遮相邻文字、日期和限定、不与它们交叉；保持B原句/原顺序/精确href。真实可点击区域须满足44×44，不以多行外包框或被相邻行覆盖的padding凑高度；检查client rect与真实命中点。文字对实际背景≥4.5、焦点承载底≥3，焦点明确且不裁切。不得仅删除hover背景后沿用旧焦点/触达结论。允许定向调整源链接自身流式布局或间距，实际验证段落内标点和窄屏折行，不扩大为正文重写/全页改版。

## COO-G4-IR02 — 三端 Footer 正式证据状态误标（EVIDENCE / REQUIRED）

1440-footer.png、768-footer.png、390-footer.png均显示Cookie Settings的白色键盘焦点环，但export-inventory逐个state为normal。独立无焦点正常截图与三张文件均不相等；聚焦Cookie Settings后，同源同clip三张逐字节相等，确认是实际focus状态而非虚构的默认边框。

接受条件：保留V0.1原图、原冻结清单和失误记录，补准确勘误；新候选正式normal Footer须实际无焦点/hover后采集并核状态。若保留focus样例，必须单独准确命名/标注focus状态；源/图/状态清单/报告对应一致。不要通过改共享Footer默认样式消除证据问题。

## 其余已实际检查结果

32正式图已逐张打开：三端Hero；1440/768比较整体、390比较三段；三端context+traceability、Prepare、Official Source、Footer；三端Cookie focus；两端Menu focus；三端Official Source hover；1440Primary hover；768comparison-guidance hover；390Source focus、Hub focus。最长1661px可读图，未以G3缩放总览代替。

比较三类的relevance/verify文本均匹配，平板记录双字段、手机逐字段及标签清楚。四context及五prepare项目、长H1、traceability区别、未知Grade与提交前单Grade必填、多文件和分Grade提交规则、完整官方日期及最后限定均保留。表头/各类记录浅底一视同仁；没有认证图形、证书图片、availability upon request、关税/签发保证或追溯能力暗示。普通图未发现其他内容缺失或溢出。

独立B解析分别对标题、段落、列表、表格单元、链接进行比对，三端全部一致（忽略仅响应重复的cellLabel但实际图核其存在和对应）；禁用JS时这些内容仍一致。源main、原内联style和行为与批准G3相等，Logo引用为本包相对依赖。17张普通正文区域图同源同clip字节相等，三张Footer仅在正确focus状态相等。96条源/输入/正式导出记录身份及32图像素尺寸一致；freeze文件对root提供SHA一致。无外网请求、pageerror。

三端所有可见Header/main/Footer与适用菜单/弹窗控件进行normal、真实hover、Shift+Tab/Tab返回的focus；颜色对比和包围框尺寸无数值失败，**但来源链接不因这些绿色数值接受**。768/390菜单进入Home、正反循环、Escape/Close回Menu、Products选中关闭、背景inert/锁滚动成立。Cookie首焦Close、正反循环、背景拒焦、Escape/Close回触发器成立。跨桌面focus BODY属于已批准共享继承观察，保留不声称回可见Desktop控件。

三端main所有链接实际点击仅记录LOCAL_SIMULATION/receiverExecuted:false；两Request都只有origin_supplier_qualification类型与DOC-COO hidden source，无Grade/destination/scheme；其他main入口context=null。不宣称实际接收预选可编辑/移除、历史值保留、真正打开外网或收件成功。

接下来核作者已完成失败报告/自检/最终清单、补核全部共享链接本地意图，形成正式报告。以上两个Finding的接受条件是修复范围；未发现其他必需视觉返修。
