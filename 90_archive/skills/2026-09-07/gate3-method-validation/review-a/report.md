# specimen-a 独立首次核验

日期：2026-09-07。方法：`D:/23MySec/skills/layout-interaction-verification/SKILL.md`。这是离线合成方法练习的首次独立检查，不是页面 Gate、总控 PASS 或发布批准。候选文件未修改。

发现一项影响有效输入的校验缺陷，以及一项针对本练习严格菜单焦点合同的偏差。未发现正文缺失、比较关系错配、静态状态冒充新版本、页面横向溢出或表单后的任意固定空白。

## 范围与候选身份

权威输入为 `D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/input.md` 与同目录 `copy.json`，均已实际读取。已读根 AGENTS、PROJECT_CONTEXT 和方法全文。未读其他 specimen、其他 review、构建脚本、设计报告或既有测量；未使用外部服务，未访问 D16，未启动子代理。

候选根路径：`D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/specimen-a/`。源为 `source.html`，实际 13,278 字节，SHA-256 为 `aff16e9c7dc95e2ede9810be191a0bd651883a6de7e95647a2fd620a5c8cb21a`。候选没有另一个可核实的语义版本号，本报告以此哈希锁定组合。

| 实际检查资产 | 实际像素尺寸 | 实际字节数 |
|---|---:|---:|
| 1440-initial.png | 1440 × 3233 | 154988 |
| 768-initial.png | 768 × 4482 | 158095 |
| 390-initial.png | 390 × 5435 | 157625 |
| 390-expanded.png | 390 × 7961 | 267488 |
| 390-invalid.png | 390 × 8205 | 281995 |
| 390-success.png | 390 × 8051 | 273033 |
| 390-menu.png | 390 × 900 | 29155 |

七张图均为声明的逻辑宽度 × 1x。独立计算的每个字节数、SHA-256 与 assets.json 一致；每项的 sourceSha256 与实际源一致。更进一步，在本地 Chromium 151.0.7922.34 中，以 900px 高视口、DPR 1 从实际源重新走出相应状态，七张图的完整像素全部复现一致。由此支持本组合的一致性，而非只采信清单声明。完整身份与测量见 [audit.json](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-a/evidence/audit.json)、[supplement.json](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-a/evidence/supplement.json) 与 [menu-proof.json](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-a/evidence/menu-proof.json)。

## 实际覆盖与关键观察

静态检查：三个初始完整视口均先看整体，再按 1100px 高、950px 步长的原尺寸裁片逐段查看；段间重叠 150px。390 展开长图逐段全覆盖；invalid、success 的前 6650px 与已查看展开图逐像素相同，再查看各自表单与 Footer 变化区；菜单单独查看。联系图从左至右为连续段，灰色补底是证据拼版，非候选页面空白。

内容双向核对：Hero、Comparison、Reading、Request、Privacy note、Footer 顺序正确；三记录 × 六指标的名称、数值、单位及各自完整脚注均对应 copy.json。六段文章的标题、完整正文与顺序一致；首段初始可见，后五段有 summary 入口。表单标签、单选的四个选项、帮助说明、隐私句、三条错误和成功消息均保留。未发现额外业务承诺或排名。共享壳使用练习规定的 Example Evaluation Desk，不把它作为 TiO2 Global Chrome 证明。

最难比较的位置是桌面三张卡片：Beta 长标题换成两行，导致其指标行比两侧稍低。重复的指标标签和就近脚注仍消除了歧义，因此不是关系错配；对齐指标起点可作为可读性改进。窄屏变成单列后，Beta 全标题、单位和值以及注 2 均完整可读。参见 [桌面对比裁片](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-a/evidence/1440-initial-part0.png) 与 [移动对比证据](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-a/evidence/390-initial-sheet0.png)。

最有风险的响应式变化是长文章展开与下游表单移动。实际点击五个 disclosure 后，在 1440 / 768 / 390 宽度，Request 的文档 Y 坐标分别从 2014.44 → 2941.70、3235.77 → 4527.64、4070.50 → 6596.44 CSS px，表单随正文正常下移。390 完整展开后的高度 7961px 来自完整真实文案，不据此报长页问题。键盘 Enter 打开及 Space 关闭首个 disclosure 也已在 390、768 实测。参见 [完整阅读段证据](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-a/evidence/390-expanded-sheet1.png)。

初始与全部展开时，三个视口的 document scrollWidth 等于逻辑宽度，未测得内容元素横向溢出；结合实际图片及样式，没有发现隐藏容器裁掉正文、定高文章或重叠文本。初始状态所有可见交互元素边界框，1440 最小宽/高为 83.33/48、768 为 66.53/48、390 为 66.53/44 CSS px；移动菜单 Close 为 67.47 × 52.05，菜单链接为 312 × 48.05。这里是浏览器实际 CSS 几何，不是缩略图估计。原生 select 在选择长 Beta 名称后，收起显示会截短末尾；该值完整保留，前缀仍明确识别 Beta，列作改进建议而非误配。

最易失败的路径是表单边界输入。实际本地点击空提交，三个关联错误和 summary 都显示，焦点落 name；填入姓名、错误邮箱、0 kg 和两行 context 后提交，值全部保留，焦点落 email。正确邮箱与 1.25 kg 可显示原文的本地确认，并保留值；可把 Beta 单选改回 Not sure yet。隐私句与其链接在 form 内紧邻按钮上方，长错误换行保持字段上下文。此处 success 仅是候选的本地模拟，无收件、后台或外部接收证明。主审计捕获的非 file 请求为零。

## Findings

### A-01：正小数数量被额外的 0.01 下限拒绝

- 位置：候选 `source.html` 的 `#quantity` 与 form onsubmit；390 实际运行，其余断点共享同一校验源。
- 预期：input.md 要求 quantity 是大于零的十进制 kg 数量，没有规定最小 0.01。
- 实见：有效姓名、`reader@example.invalid`、`0.001` kg 点击提交后，出现 “Enter a quantity greater than zero in kilograms.”，不显示 confirmation，焦点在 quantity。DOM 实测 `min="0.01"` 且 `validity.rangeUnderflow=true`。
- 证据：[正小数被拒绝的表单局部图](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-a/evidence/positive-small-quantity.png)；audit.json → interactions.smallPositive。图是本地实际操作后的元素截图，不是设计模拟图。
- 读者影响与严重度：中等；合同允许的输入被阻断，错误信息要求“大于零”，但读者已经满足该条件。
- 接受条件：正的可表示十进制数量，包括 0.001，能通过数量校验；0、负数、空值仍被拒绝；保留原定错误文案、关联和焦点逻辑；至少在 390 定向复验，并核对其他断点共享表单不回归。

### A-02：菜单末项 Tab 没有严格留在菜单内循环

- 位置：候选 `source.html` 的 `#menu-dialog`；390、768 的菜单打开状态。
- 预期：input.md 明确写焦点进入菜单、留在内部直到关闭，并返回触发器。
- 实见：用键盘 Enter 打开菜单后，焦点进入 Close；连续 Tab 依次到五个链接。末项 Request review 后再 Tab，`document.activeElement` 为 BODY、`document.hasFocus()` 为 false、dialog 仍 open；再 Tab 才回 Close。即有一步离开页面焦点，而不是直接循环到首项。反向边界也观察到一次 BODY 状态。
- 边界澄清：这是本次 Chromium 原生 dialog 的浏览器焦点边界行为，不能误称“可操作背景内容”。从 Close 尝试聚焦底层 name 被阻止，仍停留 Close。Close 按钮与 Escape 的关闭/焦点返回实测正常。浏览器外具体焦点位置没有直接观测。
- 证据：[supplement.json](D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/review-a/evidence/supplement.json) → menus（含逐步 documentHasFocus），audit.json → interactions.menu.reverse。
- 读者影响与严重度：低；相对于本练习的严格合同，多一次 Tab 会暂时失去菜单内焦点。没有证据证明背景控件可用，也没有证据证明一般浏览器原生 dialog 不合格。
- 接受条件：若保持当前“始终留在菜单内”合同，末项 Tab 与首项 Shift+Tab 应直接循环到首/末项，保持背景不可聚焦，Close/Escape 返回 Menu。或者由合同负责人明确允许离开到浏览器 UI；本审查不自行修改合同。

输入未提供数值严重度或 Gate 状态映射，以上仅描述影响程度，不赋予项目阶段状态。

## 建议与未验证范围

建议与确定缺陷分开：summary 的 `display:flex` 去掉了可见原生 disclosure 标记，静态外观像普通粗体标题。虽然点击与键盘操作正常，增加状态指示可让首次读者更容易发现展开入口。可考虑使长 Beta 选中值能完整回读；桌面阅读段落宽度较大，也可评估收窄长文行长。以上没有用户研究结果，不夸称已证实影响转化。

本次未验证物理触摸设备、手机原生 select 弹层、软键盘、屏幕阅读器播报、200% 缩放、其他浏览器或任意超长用户输入。表单 invalid/success 运行主要在 390 实测；1440、768 的初始/展开几何已测，但没有逐一复跑全部表单边界矩阵。未把系统 select 的 option 行高当成已经实测的 44px 触摸目标。未访问任何接收页或外部服务，外部数据接收不属于这个离线练习。

本报告不包含返修，候选、批准记录、项目状态和其他审查结论均保持原样。证据目录包含复现脚本、原始 JSON、独立重新截图及来自候选的局部裁片；所有写入仅位于 review-a。报告与所引用证据在交付前从实际路径读回核对。
