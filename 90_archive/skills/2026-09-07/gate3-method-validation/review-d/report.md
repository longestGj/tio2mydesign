# specimen-d 有限定向复验

日期：2026-09-07。这是执行 A/C 检查的**同一审查者**依据 C 报告进行的定向复验，不是新盲测。仅针对 LIV-B-05 的菜单链接关闭/焦点/滚动剩余条件、LIV-C-01 的390长选中值错误/成功状态，以及有限相邻回归。候选与旧报告均未修改；结论不关闭 Gate，不构成总控或用户批准。

**两项所列剩余接受条件在本轮实测范围内满足。未发现本轮受影响范围的新缺陷。** 不把这个结论扩张成完整跨浏览器或全状态验收。

## 方法与新组合身份

本轮先完整重读 `D:/23MySec/skills/layout-interaction-verification/SKILL.md`，实际SHA-256为 `f181e8aa727fefb58e839cd37a7832e73a53b2a2b9bf42f090b00cdbe75885d7`，与指定版本一致。遵循新增规则：完整显示合同下，不能因前缀可识别或源中有全文而把可见裁切降为建议。输入仍是此前实际读取的同一 input.md、copy.json 与 C 报告接受条件。

新候选为 `D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/specimen-d/source.html`，完整读取；实际13,824字节，SHA-256 `3c1c82e500f971075dee3369655f095066f4ae32bf8f372eb5723ef6e0355db0`。七张PNG全部重新核对字节数、哈希、像素尺寸及sourceSha256，均与D清单一致。实际尺寸：1440初始1440×3233、768初始768×4482；390初始/展开/错误/成功/菜单分别390×5467、390×7993、390×8237、390×8083、390×900，全部1x。

本地Chromium 151.0.7922.34，逻辑视口宽1440/768/390、高900、DPR1。从D实际源复现的全部七张对应图与D供图逐像素一致。390供图默认选项仍为Not sure yet，所以它们单独不能证明Beta长值修复；本轮另有实际选择Beta后生成的错误/成功证据。

实际身份、逐步动作与测量保存在 [observations.json](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-d/evidence/observations.json)。没有读取控制者脚本、测量或预期文件，没有外部服务访问；本次仅写review-d报告与evidence。

## 定向接受结果

**LIV-B-05：本轮剩余条件满足。** 390、768分别实际点击全部五个菜单链接：Overview、Comparison、Reading、Request、Request review。等待浏览器关闭事件与两帧布局完成后，最终activeElement均为`menu`、dialog关闭、hash正确。焦点返回没有把视口拉回Header。

| 视口 | 五次点击后的实际scrollY | 对应目标顶部偏差 |
|---|---|---|
| 390 | 126 / 517 / 2824 / 4071 / 4071px | 各目标距视口顶绝对值≤0.5px |
| 768 | 141 / 419 / 2428 / 3236 / 3236px | 各目标距视口顶绝对值≤0.24px |

上表是实际浏览器CSS测量，偏差为锚点滚动取整。证据：[390导航到Comparison后的画面](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-d/evidence/390-after-comparison-link.png)、[768对应画面](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-d/evidence/768-after-comparison-link.png)，以及observations.json → views[].menu.links（含最终focus、实际scrollY、目标文档Y与expectedScroll）。截图证明滚动位置；焦点结论来自运行记录。

相邻菜单回归：两个宽度都实际复验7次Tab与7次Shift+Tab，焦点始终在菜单内、documentHasFocus=true；首末边界正确循环。菜单为真实modal，尝试聚焦底层name仍停留Close；Escape与Close最终均返回Menu。因而C中已经修复的A-02焦点循环在本轮没有回归。没有重复扩大背景点击或浏览器矩阵。

**LIV-C-01：本轮390错误/成功接受条件满足。** 实际选择完整 `Record Beta with an intentionally long evaluation label`。错误态提交quantity=0后，焦点在quantity、原定数量错误出现；随后改为0.001并提交，显示原定本地确认。两态中的Beta名称均在控件内分成两行，第二行`evaluation label`完整可见，尾部不再被隐藏。不能只依赖DOM value；本轮已实际看过控件及完整表单截图。

![390选中值完整换行](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-d/evidence/390-beta-selected.png)

实测select为324×80px、white-space:normal；它虽仍有overflow:clip，但实际两行长标签完整容纳，所以没有因该样式单独判错。错误态选项文档Y=7283.52，成功态Y=7130.33。完整上下文证据：[390 Beta错误表单](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-d/evidence/390-beta-error-form.png)、[390 Beta成功表单](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-d/evidence/390-beta-success-form.png)。这证明完整可读，而不仅是前缀能够识别。

相邻表单回归：0被拒绝，0.001显示本地确认；quantity仍324×48px；Beta及已有context保留，可恢复Not sure yet。完整隐私句与链接仍在Submit上方，链接113.55×48.05px、段落104.14px高且overflow visible；实际点击仍进入#privacy。390页面scrollWidth仍390，控件增高32px在正常流中推动后续内容，未形成遮挡或固定空白。

## 静态核对与限制

1440仅作指定静态核对：初始全页与表单实际查看，重新渲染与D供图一致；初始图身份与此前完整检查的C桌面图相同，未发现桌面外观回归。768初始也匹配新源和供图。本轮没有重跑1440表单交互、既往全部指标/脚注逐项矩阵或全部长文可读性检查；原来满足的其他项目只作上述有限相邻回归，不重新发布整套初审结论。

最易失败的操作仍是菜单关闭后的异步焦点返回；本次以关闭事件后最终状态与实际滚动联合验证。最需要看清的内容是390的长Beta选中值；本次使用实际错误/成功局部图验证完整性。最有风险的响应变化是select由48px增至80px对后续context、隐私及按钮的影响；本次两个表单状态未见碰撞或遮挡。

未验证：其他浏览器、实体触摸设备、原生select弹层、软键盘、屏幕阅读器、缩放及任意极端输入。成功为本地模拟，未发送消息、未验证外部接收；捕获的非file请求为零。原disclosure状态标记建议未在本轮重审，不能理解为已修复或新缺陷。

本轮有限工作已完成，不再追加范围。报告从实际路径读回，所引证据文件已核对存在；不修改原Finding历史或候选。
