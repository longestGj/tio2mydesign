# specimen-c 定向复验

2026-09-07；离线合成方法练习。实际执行 `layout-interaction-verification` 的定向复验流程，对照原 `LIV-B-01..07` 与 `A-01/A-02` 的接受条件，保持原 ID。候选 A/B/C、原报告、Skill 和批准记录均未修改；这不是 Gate 关闭或总控批准。

**本轮结果：LIV-B-01/02/03/04/06/07、A-01、A-02 的所列接受条件在本次范围内满足；LIV-B-05 部分满足，菜单链接关闭后的焦点返回仍未满足。另把移动端长 Beta 选中值的截断记录为 LIV-C-01，说明与 A 报告原建议分类的差异。**

## 新候选与证据身份

已读取原始 input.md、copy.json、原 A 报告及本轮指定的 review-b/report.md；重新读取 C 的完整 source.html 与 assets.json。没有读取构建脚本、控制者预期/测量、其他候选或设计产物。

候选路径：`D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/specimen-c/source.html`。实际 13,715 字节；SHA-256 `f73b8c818df213991732c9af1181fbd46c9ff8b73eb0e7281d2652925f0e6ae5`，以此锁定版本。

七张 C PNG 的实际字节数、SHA-256、宽高及 sourceSha256 均重新计算/核对。1440、768、390 初始图分别为 1440×3233、768×4482、390×5435；390 expanded/invalid/success/menu 分别为 390×7961、390×8205、390×8051、390×900，全部 1x。浏览器为本地 Chromium 151.0.7922.34，视口高度 900px、DPR 1。新源实际运行产生的七张对应状态与 C 供图全部逐像素一致，包括真实点击后的展开、空提交和本地模拟确认。清单与复现的原始记录在 [observations.json](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-c/evidence/observations.json)。

## 原 Finding 的接受结果

以下“满足/部分满足”只描述本轮观察，不改写原审查记录，不自动关闭项目事项。

| 原 ID | 本轮判定 | 新成果与接受条件核对 |
|---|---|---|
| LIV-B-01 | 满足 | 390 三卡全部 18 项的数值、完整单位和条件可见，逐项与 copy.json 对应。dd 已无 58px 限宽、nowrap 裁切；390 的可用 dd 宽为 320px，长条件完整显示。1440/768 同样检查对应关系及实际图片，未发现相邻回归。 |
| LIV-B-02 | 满足 | 三条 exact note 在 390 初始态直接可读，分别留在 Alpha/Beta/Gamma 卡内；有实际尺寸并可见。1440/768 同样完整，未把 DOM 中存在当成可见证明。 |
| LIV-B-03 | 满足 | 初始、空错误、部分错误和成功状态，完整隐私句、Privacy note 链接、句尾均保留在 form 内及 Submit 上方。390 段落高 104.14px，overflow visible，clientHeight/scrollHeight 均约104；链接 113.55×48.05px。1440/768 也检查。实际点击错误/成功状态中的链接进入 #privacy。初始态链接的几何与目标相同，本轮未另重复点击初始态。 |
| LIV-B-04 | 满足 | quantity 实测 390 为 324×48px、768 为 670×48px、1440 为 710×48px；初始、错误、成功状态均保持上述尺寸。0.001 与 1.25 的实际输入可读，不再为 28px 窄框。 |
| LIV-B-05 | **部分满足** | 390/768 均为 `:modal=true`；焦点进入 Close。各运行13次正向 Tab 和8次 Shift+Tab，始终在菜单内部且 documentHasFocus=true。底层 name 的 focus 尝试仍落 Close；背景点位 elementFromPoint 命中 dialog，实际点击该点不进入底层。Escape 与 Close 均关闭并返回 Menu，aria-expanded=false。**但五个菜单锚点逐个点击后，虽正确关闭及更新 hash，最终 activeElement 都为 BODY，不是 Menu，未满足原接受条件中的链接关闭焦点返回部分。** |
| LIV-B-06 | 满足 | 三个宽度都实际复验：全空 → name；name有效、email无效 → email；前两项有效、quantity为空/0/负数 → quantity。错误和 aria-describedby 关联保留；已有姓名、邮箱、Beta 和两行 context 保留。 |
| LIV-B-07 | 满足 | 三个宽度都实际提交0.001与1.25，显示原定本地确认；空值、0、−0.25都拒绝且显示 exact quantity error、焦点在 quantity。没有额外0.01门槛。 |
| A-01 | 满足 | 与 LIV-B-07 同一原因、同一接受矩阵，保留原ID作为交叉追踪，不重复算一个新缺陷。 |
| A-02 | 满足 | 原来末项 Tab 暂时离开页面焦点的问题，在390/768的正反向循环中均不再出现。源码已有首末项循环处理，运行证据支持它实际生效。菜单链接关闭后的焦点返回是 LIV-B-05 的剩余条件，不据此否定已测得的循环修复。 |

实际图片证据：[1440 comparison](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-c/evidence/1440-comparison.png)、[768 comparison](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-c/evidence/768-comparison.png)、[390 comparison](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-c/evidence/390-comparison.png)、[390 初始表单](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-c/evidence/390-initial-form.png)、[390 空错误表单](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-c/evidence/390-empty-form.png)、[390 正小数成功表单](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-c/evidence/390-positive-decimal-form.png)。交互逐步记录位于 observations.json → viewports，各宽度都有独立记录；菜单焦点为 menu.forward/backward/escape/close/links。

## 保留的缺陷与下一次接受条件

**LIV-B-05，剩余范围：菜单锚点关闭后的焦点返回。** 在390与768实际逐个点击 Overview、Comparison、Reading、Request、Request review，modal=false、open=false、aria-expanded=false，hash均正确；最终 focus 是 BODY。Close/Escape 路径已满足，无需把整项描述成“仍不是模态”。原中/高影响记录不在这里改写；本轮剩余影响较低，但明确违反本练习的统一返回触发器合同。接受条件：五个链接关闭并导航后，最终焦点按原合同落 Menu；同时保持正确目标、菜单正反循环、背景不可达、Close/Escape返回。若要采用“导航后焦点进入目标区”的不同合同，应由合同负责人决定，不能靠复验自行替换。

**LIV-C-01，390 的长 Beta 选中值未完整可读。** 这是本轮对既有可见性问题的重新分类，不宣称由 C 新引入。选择 exact `Record Beta with an intentionally long evaluation label` 后，#record 保留完整 value，但324px宽的收起控件只能显示到 `Record Beta with an intentionally long`，尾部 `evaluation label` 不可见；错误及成功状态均如此。见 [实际选择后的390表单](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-c/evidence/390-positive-decimal-form.png)。1440/768 的同一选择在较宽表单中完整可见，已查看对应运行截图。

分类依据：input.md 锁定完整 exact copy；方法要求核对最长字段实际可见性，并明确“字串命中只证明文字存在”。原 A 报告仅从 `Record Beta` 前缀足以辨认记录的角度把它列为建议，这能支持“未发生记录错配”，**不能支持“完整选中内容可读”**。本轮因此按完整文案标准记录为确定的显示缺陷。影响中等：读者能识别选了 Beta，却不能在提交上下文完整回读所选长标签。A 报告保持历史原样。

LIV-C-01 接受条件：390 选中 Beta 后，在当前选择上下文完整展示 exact 长名称，可采用控件换行或紧邻完整选中值说明等方式；初始选择、错误、成功状态都能完整回读，且不改变单选范围、默认 Not sure yet、表单值保留和44×44目标。原生选项弹层本轮没有检查，不能把源里的完整 option 字符串当成弹层或收起态可见性的替代证据。

## 相邻回归与边界

1440/768/390 初始与五节全部展开后，页面 scrollWidth 仍等于逻辑宽度，无小于44×44的已测可见网页交互框。全部记录/单位/脚注以及六节文章原文与copy.json逐项一致，正文顺序未改变。实际展开推动Request正常下移；页面高度从3233/4482/5435变为4160/5774/7961，未出现人为固定空白。三个宽度的表单边界、错误关联和保留值已补测；单选可从Beta恢复Not sure yet。桌面/平板新成功表单也实际查看，数量与完整Beta标签均能读到。原 disclosure 缺少可见展开标记的建议仍不属于本轮宣称已修复的内容。

静态比较和表单图用于检查像素与呈现；菜单、锚点和验证结果来自实际本地动作。本地 success 仍明确无消息发送、无预约；本轮捕获的非file请求为零。没有实际外部提交或接收证明。

未验证事项保持限定：实体触摸设备、原生select弹层/软键盘、屏幕阅读器播报、缩放、其他浏览器、任意极端超长用户输入不在本次定向范围内。没有为上述限制延伸测试，也没有修订候选。后续复验应聚焦 LIV-B-05 剩余条件与 LIV-C-01，并检查相邻状态。

输出仅在 `review-c/report.md` 和 `review-c/evidence/`。已从同一路径读回报告并核对所引证据存在；复现脚本为 evidence/recheck.cjs。
