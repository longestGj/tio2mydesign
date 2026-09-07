# Poland Gate 4 V0.2 独立定向复验

2026-09-07 · MARKET-EU-PL · `/markets/poland/` · EN · `site_scope=tio2-my`

**结论：PL-G4-IR01 — ACCEPTANCE_MET / VERIFIED_RESOLVED。** 六个实际 supporting hover 状态均达到普通文本 4.5:1 接受阈值，所测相邻状态、正文、目标和几何未发现回归。建议总控关闭此项，按初审保留的其他通过结论呈交用户。此结论不是用户 Gate 4 批准，不授权 Gate 5、开发或发布。

本次严格限于总控指定的 V0.2 定向复验。原始初审 `../report.md` 保留；原 IMPORTANT 缺陷及失败证据不被新结论覆盖。未重新扩展为 Gate 5 全页审查，未处理初审可选 S01，也没有为凑数量增加偏好性问题。

## 独立性与对象

沿用初审已完整读取的原始批准 A/B/C、Gate 3 组合、当前授权、品牌/CTA、共享 owner 及 REVIEW_SCOPE；按 `layout-interaction-verification` V0.2 和 `core-risk-model.md` 的身份、状态与核心风险方法，以及品牌视觉方法复验。先核源、实际看图和运行浏览器，再读取作者 V0.2 方向报告、返修回应和执行自检；作者结论未作为独立通过依据。

冻结对象：`PL-G4-V02-SOURCE-01`，目录 `D:/23MySec/pages/markets/poland/04_planning/gate4-v0.2/`。

| 项目 | 独立核对 |
|---|---|
| HTML | SHA256 `d87fb01ea6c1fd3c1f93002b71c5c86222db38a6a15bb26d7a8319503aac53c9`；与 V0.1 文件逐字节相同 |
| CSS | SHA256 `8d1299c9072b0413f242d4568cc62ed99cb6865a0938a7320c6f7ee5b4400785`；保留 V0.1 完整前缀，仅追加 PL-04/05 supporting hover 的背景规则 |
| Freeze 绑定 | export inventory 中的 source-freeze SHA 与实际文件匹配 |
| 实际身份 | 9 个源/依赖、21 个输入、26 个正式 PNG 的 SHA 与字节数全部匹配（56 条）；数量仅描述覆盖，不作为质量评分 |
| 旧代表图 | V0.2 的原 18 个同名正式 PNG 与 V0.1 实际文件逐字节相同，承接初审逐图阅读结论；本轮不声称重新完整查看这 18 张 |

具体身份明细与 CSS 唯一追加内容保存于 `identity.json`，可复运行脚本为 `verify.cjs`。HTML 相同证明可见文字、结构、交互代码和目标没有源变化；浏览器另做了三端可见正文和 main 链接几何比较，防止只凭源相同推断渲染相同。

## PL-G4-IR01 接受条件与实测

原问题：PL-04 **View Document Hub**、PL-05 **European Union Procurement Overview** 在 16px/600 普通文本 hover 中使用 `#008078 / #E8EEF3`，4.1192:1。此次仅将这两处 hover 背景显式设为既有 `--pl-soft: #F5F8FB`。

环境：本地 Chrome 152.0.7977.82、Playwright、file URL、DPR1，逻辑视口 1440/768/390 ×1000。全部为实际指针 hover 和真实键盘事件，不使用假状态 class。运行时日志为 `runtime.json`。

| 实际状态 | 1440 | 768 | 390 |
|---|---|---|---|
| PL-04 hover | 4.5200728131:1 | 4.5200728131:1 | 4.5200728131:1 |
| PL-05 hover | 4.5200728131:1 | 4.5200728131:1 | 4.5200728131:1 |
| 两处键盘 focus-visible | 均 true | 均 true | 均 true |
| 正文、main 文案/href/坐标/尺寸相对 V0.1 | 相同 | 相同 | 相同 |
| 页面 scrollWidth | 1440 | 768 | 390 |

六个 hover 均实际匹配 `:hover`，计算前景为 `rgb(0,128,120)`、实心背景为 `rgb(245,248,251)`。普通文本阈值 4.5:1 达标；沿用既有功能色和既有浅背景，未引入新品牌色。无悬停位移，两个辅助目标保留 48px 高度及完整 label/href，390 保留全宽 350px 命中区。

移走指针后，以相邻项为起点的 Shift+Tab/Tab 实际重新进入两处链接；六次均 focus-visible。main 焦点仍为 3px `#008078`、offset4px，白底对比 4.8177:1（高于功能焦点 3:1）；移动焦点轮廓完整，无裁切或文字遮挡。

视觉含义保持：请求动作仍为实心主按钮；辅助入口仍有下划线，浅灰 hover 未将其提升为主要转换动作；EU 长标签全部可读。PL-04 三段普通说明和 COO 可请求声明没有变成状态标签、认证框或额外承诺。原无媒体方向、两条等权应用路径、Navy/Inter 主次关系继续成立。

## 新图实际阅读记录

实际逐张打开并阅读下列 8 张正式 PNG，路径均相对于候选 `approval_core/`：

| 图像 | 本轮视觉判断 |
|---|---|
| `1440-pl-04-support-hover.png` | Document Hub 浅背景、完整标签；主 Request Documents 分明 |
| `1440-pl-05-support-hover.png` | EU 浅背景、完整标签；同时保留 Document Hub 焦点，是可成立的焦点/指针组合 |
| `768-pl-04-support-hover.png` | 长文自然换行；辅助动作浅背景，与主请求区分清楚 |
| `768-pl-05-support-hover.png` | EU 标签完整；前一辅助动作焦点与当前 hover 可区分 |
| `390-pl-04-support-hover.png` | 全宽浅背景，文字左对齐；48px 目标清楚 |
| `390-pl-05-support-hover.png` | 长 EU 标签未截断；与 RFQ 和 Footer 有明确边界 |
| `390-pl-04-support-keyboard-focus.png` | 完整外轮廓及文字，未改变三段说明层级 |
| `390-pl-05-support-keyboard-focus.png` | 全宽完整外轮廓；与 Footer 无遮挡 |

这些是 viewport 状态图，画面顶部/底部可切过相邻模块，不解释为正文丢失；完整内容判断承接身份相同的代表图及正文运行时比较。曾有一次多图工具输出截断，因此重新逐张/小批打开上述全部 8 张后才记录已看结论。未另外保存整套重复图。

## 相邻回归

三端分别实测 Hero RFQ、Request Documents、最终 RFQ、Hero Explore Products、PL-03 Explore Products、Cookie Settings 的 hover 和 keyboard focus。上述邻近 hover 的颜色、标签、href、边框轮廓与目标盒记录相对 V0.1 相同。主请求白字/Navy 为 13.9594:1；Hero Products 为 4.5201:1；PL-03 Products 为 13.0969:1；Footer Cookie Settings 为 12.8188:1。各项实际 focus-visible 保留。

三端 Cookie 实际键盘打开、进入 Close、Tab 到 Policy、循环回 Close、Escape 关闭并回到 trigger；另补测 Policy 的真实 hover、键盘 focus 和 Close 按钮关闭返回。Policy hover 为 `#008078 / #F5F8FB`，4.5201:1。`cookie-policy.json` 与 `cookie-policy.cjs` 保存补测。页面错误与 HTTP(S) 尝试均为零。

未重跑未改动的完整菜单链路；其初审结论基于冻结依赖/HTML 不变和旧菜单图字节相同继续成立。没有将 S01 的跨断点 BODY 焦点可选观察宣布修复。

## 作者文件核对与保留限制

实际检查完成后，全文核对 `MARKET-EU-PL_GATE4_VISUAL_DIRECTION_AND_METHOD_REPORT_V0.2.md`、`MARKET-EU-PL_GATE4_IR01_REPAIR_RESPONSE_V0.2.md` 及 `05_review/MARKET-EU-PL_GATE4_EXECUTION_SELF_CHECK_V0.2.md`。规则表现已明确说明 supporting hover 的色对、覆盖与唯一改动；返修回应承认 V0.1 只测主要 hover 的遗漏，并保留旧失败。作者记录的修复范围和关键实测值与独立结果一致。作者额外重跑菜单/本地链接等自检不转换为本轮独立重测声明。

证据性质：看图是 STATIC_VISUAL；源与身份比较是 SOURCE_INSPECTION；浏览器 hover、键盘、几何、颜色是 ACTUAL_RUNTIME。没有生产接收、CMP、跨站行为或可用性全覆盖证据。本轮没有新增请求或导航模拟；目标依据相同 HTML 与实际 href 读取。

初审限制保留：本地 Chrome 单引擎；没有真实设备、屏幕阅读器/播报、实际浏览器 UI 200% 缩放、真实 visited 历史、所有中间宽度/指针边缘、生产路由与表单接收、CMP/storage 或 Gate 5 完整页面节奏验证。本轮达到 Gate 4 代表样例定向修复范围，不将未来 Gate 5/外部运行依赖提前判成此项失败。

**没有新增明确必修发现。PL-G4-IR01 可提交总控关闭；用户视觉方向批准与后续阶段授权仍由总控另行处理。**
