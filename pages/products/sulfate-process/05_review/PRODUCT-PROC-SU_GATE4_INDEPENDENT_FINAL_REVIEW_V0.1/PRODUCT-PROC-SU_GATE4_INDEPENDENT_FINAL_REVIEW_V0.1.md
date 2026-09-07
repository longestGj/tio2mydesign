# PRODUCT-PROC-SU Gate 4 合并候选独立最终审查 V0.1

- 日期：2026-09-07
- 审查者：`gate4_su_review`
- 页面：`PRODUCT-PROC-SU`，EN，`/products/sulfate-process-titanium-dioxide/`，`site_scope=tio2-my`
- 工作集：`SU-G4-COMPLETE-V01`
- 冻结：`SU-G4-COMPLETE-V01-F01`
- 候选入口：[`evidence_index.json`](../../04_planning/gate4-v0.1/evidence_index.json)
- 审查状态：`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`

## 1. 独立结论

**PASS。Required Finding：0。** 在本报告所列冻结身份、证据与限制内，没有发现必须返修的 Gate 4 缺陷；合并候选满足当前 Gate 4 完整视觉、批准文案、五正文模块、响应式、共享组件、状态与交互合同，可交总控登记 Gate 4 审查通过并进入用户批准等待。

本结论是独立项目控制审查，不是制作方自批，不构成用户批准，不关闭用户批准步骤，也不启动 Gate 6、开发、部署或发布。

## 2. 审查对象与冻结身份

审查前完整读取并核对根入口、Context、当前工作流及 Gate 1–4 标准、Gate 4 Agent/Contract/三份方法、SU Manifest V0.6 与 V0.7_DRAFT、Gate 3 关闭与交接、批准 Brief、A/B/C 及五正文模块更正、品牌、CTA、Global Chrome、生产 Logo、共享法律与 consent 权威、页面/关键词/原产地和产品关系来源。候选、Manifest、上游与共享 owner 全程只读。

| 对象 | 独立复算身份 |
|---|---|
| HTML | 19,596 bytes；`e17a3fafb143b2a9c7d9b72661093bdb237d453c162b6a7f38feb209cbea485c` |
| `visual-direction.css` | 808 bytes；`c9c3cd702764928f528f6be9824857b958df363171c5a1fff77fae204a2cfd99` |
| `source-freeze.json` | 14,735 bytes；`e4615952f2989d09c66e61dc45b926c36226fd92fbde5ca3ad698cb090bd8576` |
| `evidence_index.json` | 4,348 bytes；`25eb3cc6cdbb858e34bbfc0d8af8098ca7c4c25bf3846064ecd460a0e86f53e3` |
| 批准 B | 4,662 bytes；`8534c95765d8cb7869a686f20963f862f9f155555b49d6ada17fa5e310304fda` |
| Gate 3 冻结 HTML | 19,611 bytes；`2cb78dc30446194715abe5d310c99e80d067d8625e6e92a528025f224b7444ae` |

从候选入口、source freeze、export inventory、asset inventory 与 input index 递归解析出 254 条路径绑定、146 个唯一文件；全部路径、字节数与 SHA-256 一致。独立运行前后再次复算，146 个唯一文件均未变化。HTML、CSS、字体、两份生产 SVG、批准上游和正式 PNG 的冻结链闭合。

## 3. 完整视觉与内容合同

实际打开并逐项查看 36 张候选视觉证据：3 张 1440/768/390 完整页、18 张原始比例连续分段、15 张状态图。15 张状态图包括 2 张 Menu、3 张 Cookie、6 张 FTC hover/focus、4 张 Hero/RFQ/Compare/Grade hover 或 focus。独立浏览器再次生成三端完整页和全部 18 个同宽连续分段，其像素文件 SHA-256 与候选正式证据逐一相等。

三端完整页均形成连续、可读的最终页面：Breadcrumb 后依次为且仅为五个正文模块 `Hero → What the Sulfate Process Tells You → Explore Sulfate Grades → Continue Your Evaluation → Request a Quote`，随后组装共享 Footer。没有正文模块缺失、额外正文模块、模块换序、横向溢出、文字或焦点裁切、异常覆盖或悬空占位。

批准 B 的可见正文、链接标签与目标在三端逐项一致。五个 Grade 严格按 `M-996 → M-2196 → M-108 → M-52 → M-2377` 中性呈现；三个后续评估组顺序正确。没有增加推荐、排名、比较优劣、等效、Rubber/Specialty、工厂、批次、证书、关税或其他未经批准的能力与原产地扩张。

视觉层级、Navy/Teal/Soft 色彩、宽屏信息行、窄屏自然堆叠、主次 CTA、标题与正文行宽在 1440/768/390 均清楚。Inter 实际加载，两份批准生产 Logo 实际显示。Header/Footer、Products 当前导航、固定 RFQ、Menu、Cookie、Privacy/BM/Cookie 法律入口均来自当前共享 consumer；买家界面没有 `CURRENT` 标签，没有 Terms 链接，也没有页面自建共享分叉。

## 4. FTC 句号专项复核

冻结前记录的 FTC 句号问题已在本冻结候选中关闭，未复现为必需 Finding。

- 三端链接文字均精确为 `U.S. Federal Trade Commission public decision record`，目标为批准的 FTC 公共决定记录；其后的句号是锚点后的独立正文文本节点，不属于链接命中区。
- 1440 与 768 各为一个 44 px 高的链接片段；390 自然换行为两个片段，每个片段均为 44 px 高。390 的句号紧随第二片段，未被推离、遮挡或裁切。
- 正常、真实 hover、键盘 focus 三态均实际检查。焦点使用 3 px 内缩边线；句号从锚点边界后开始，保持在焦点边线之外；链接字形至焦点边线仍有 3 px 内距。
- 三端专项独立图：[`1440`](independent-ftc-focus-1440.png)、[`768`](independent-ftc-focus-768.png)、[`390`](independent-ftc-focus-390.png)。三图均可直接读出句号位置和焦点边界。

因此该问题不需要再次修改 CSS；若后续改变 FTC 句子、字体、字号、行高、锚点 display/padding、`box-decoration-break` 或 focus outline，须在 1440/768/390 重做正常、hover、focus、命中边界及句号归属复审。

## 5. 交互、可访问性与链接

独立运行环境为 Node `v24.16.0`、Chrome `152.0.7977.82` headless、deviceScaleFactor 1。三端逐一检查所有可见 Header/main/Footer 操作，以及打开状态下的 Menu 和 Cookie 操作：普通、真实鼠标 hover、键盘 focus 均保持文字可读、焦点可见和几何稳定；适用控件达到 44×44 px 最小触达要求。

768/390 Menu 的打开、首焦点、双向焦点循环、背景隔离、Escape 关闭回焦、8 项选择及跨断点关闭均通过。三端 Cookie 的打开、首焦点、双向循环、原生 modal 隔离、Escape/Close 关闭回焦均通过。页内锚点的点击、键盘激活、直接地址和无 JavaScript 路径均到达正确目标。

正文、导航、Footer、菜单和 Cookie Policy 链接均按本地导航意图检查，标签与目标符合合同；未发现运行时错误或外部网络请求。此处只证明本冻结页面的可见链接及本地意图，不证明生产接收端成功、表单提交或外部页面实时可用。

## 6. Finding 与复审条件

### Required Finding

**0。** 无 P0/P1/P2 或其他必须返修项，因此没有待执行的精确修复，也没有基于当前冻结候选的强制复审队列。

### Advisory Finding

**0。** 未用偏好性改版、额外装饰或阶段外能力制造建议项。

以下变化会使本 PASS 的对应证据失效并触发复审：HTML/CSS/字体/Logo/共享 consumer 任何身份变化；批准 B、五模块、Grade 顺序、FTC 文本或目标变化；断点、Menu/Cookie/焦点/触达尺寸变化；正式图片重导出；页面或链接职责变化。复审至少须重新冻结身份，并重跑受影响三端完整页、连续分段、状态与链接检查。

## 7. 证据计数与限制

- 候选视觉：36 张全部实际查看，其中完整页 3、连续分段 18、状态图 15。
- 独立重现：3 张完整页和 18 张连续分段，共 21 个逐文件相等绑定。
- 冻结链：254 条路径绑定、146 个唯一文件，全部身份一致且运行后未变。
- 独立自动与人工结合检查：508 项，508 通过，0 失败。
- 审查证据：[`independent-runtime-identity-and-observations.json`](independent-runtime-identity-and-observations.json)；可复跑脚本：[`review.cjs`](review.cjs)；完整审查产物身份见 [`review-evidence-index.json`](review-evidence-index.json)。

限制：本次为本地 headless Chrome 与静态视觉审查，没有覆盖真实手机/触摸、其他浏览器引擎、读屏、forced-colors、操作系统缩放或原生 200% zoom。未验证生产路由、缓存、接收端、表单参数持久化、提交/重试、CMP 存储、外部 FTC 来源实时可用性、部署、索引或发布。正式 PNG 可证明冻结时视觉，不能单独替代 Gate 6 交付核对或 Gate 9 实现验收。

## 8. 交接边界

总控可将 `SU-G4-COMPLETE-V01-F01` 登记为 `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`，并向用户呈现当前冻结候选。只有用户批准后，才可按现行工作流处理 Gate 4 关闭及后续 Gate 6 授权；本报告本身不授予该权限。
