# HOME-001 D32 Gate9 视觉与交互独立验收 V0.1

日期：2026-09-20。Review ID：`HOME-D32-G9-VISUAL-01`。Reviewer：`/root/d32_gate9_visual`；未参与 D32 实现及修复。本报告提交总控，不改页面 Manifest，不授予发布。

## 1. 对象与依据

- 用户本轮明确“启动Gate9独立验收”；本轮为首次独立运行检查。
- [当前入口 V1.10](../HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.10.md)及[Gate6关闭](../05_review/HOME-001_D32_GATE6_PROJECT_CONTROL_CLOSEOUT_V1.0.md)，消费唯一[包 V0.2](../06_handoff/HOME-001_D32_GATE6_HANDOFF_PACKAGE_V0.2.md)，SHA256 `EEB70B4D48753BBAF02D9CBEA1B6ADAD65B18D90CD6C6123A0F63C6063065A3A`。包内历史候选状态由关闭记录覆盖。
- 实现 `a75572a36cc50e820b640fca663a3a60594029cb`；evidence HEAD `9de5ef0e3409daf9c9cb675efb26f54d7c7ba6c6`；runtime `http://127.0.0.1:8232/`，`site_scope=tio2-my`，本地真实 WordPress 数据输出。
- 制品 `wp-f576fa2d7a74ab057e5878765db4187ae7b2689aaf921f8c5d6f5ab0bac6fc3e`；恢复后内容 `ee6a324ea68ada21e9424f930ed52f87800cea9e982c0feb4fd9ef456b71a992`。机器 Manifest SHA `6A9071B539BB948712B490B1BE3738F26D9281971DCF9DBCCA8CCBD87E1D4232`。
- 主审先独立运行原 validator 和两轮 preflight PASS，再通知本 Reviewer 开始浏览器操作；原件见 [预检](d32-gate9-v0.1/runtime/gate9-preflight.json)与[清单核验](d32-gate9-v0.1/runtime/manifest-validation.json)。本报告不把开发自检当独立结果。
- 已实际读取根 AGENTS、Context、Index、适用治理细则、Gate9 Agent V0.5、当前方法基线、运行方法及配合参考、布局方法及核心风险模型、完整 Home Brief/Playbook、登记/关键词本页及 About 竞争归属行、目录规则、D32包与关闭记录、整页 V1.1 HTML/冻结记录、共享 Chrome V0.5、功能色增补、Home Hero V1.4 绑定/冻结记录和三张批准 Hero PNG。旧 Brief 的历史 Hold/旧视觉由本包明确的后续批准覆盖。
- 视觉对照组合为整页 V1.1 非 Hero 部分，加 Home Hero V1.4；不按旧整页 Hero 外框验收，不新增设计偏好。

## 2. 方法及实际覆盖

使用 CUA 的 Codex In-app Browser（Chrome 外部浏览器不可用），受支持的 viewport、DOM/AX、键盘、click 和 screenshot API。仅页面只读交互；无 CMS/DB/代码修改、开发测试运行、真实表单提交。逻辑视口 1440×1000、1024×900、768×900、390×844、320×900；DPR 1；没有把这些尺寸模拟称为物理设备测试。临时 viewport 已 reset。

完整观察从 Header 到 Footer，先看完整结构，长图再以实际浏览器未编辑分段或连续 viewport 阅读全部正文。证据为本 Reviewer 亲自采集的 `ACTUAL_RUNTIME`；批准 PNG 是 `STATIC_VISUAL` 预期。参见[证据索引](d32-gate9-v0.1/visual/evidence-index.json)、[几何与命中区](d32-gate9-v0.1/visual/observations.json)、五个 `dom-*.txt`、五个 `runtime-*.png` 及可读分段。

| AC | 预期与独立观察 | 结果/边界 |
|---|---|---|
| HOME-VU-A01 | 单一 H1；Header→Hero→Start Here→Markets→Products→Applications→Company→Documents→Resources/Answers→适用RFQ→Footer。全部卡片、限定句、公司 manufacturer 句、两资源及三答案可读；无内部状态词。 | 可见内容层 PASS；后台编辑/恢复由运行主审负责。 |
| A02 | 1200px桌面网格；品牌、深底 Footer、模块层级及卡片重排与批准源一致；实际主 CTA `rgb(0,128,120)`，Inter loaded。 | PASS；未以像素总差值替代语义视觉判断。 |
| A03 | 开放白底、没有 Hero 外框/竖线；原材料图片加载且作为装饰 alt=""；双CTA。1440/768/390 H1分别56/44/36px、700、2/2/3行；1024为56px三行，320为36px三行，无截字。 | PASS。 |
| A04 | 三入口紧随Hero；1440/1024/768三列；390/320单列，全部文字保留。 | PASS。 |
| A05 | 6/5/2/1组14型号唯一且为非链接span；手机初始四组折叠。390逐一Enter展开，四组说明/全部型号进入AX；再次Enter收起，aria-expanded随状态改变。 | PASS；[键盘展开](d32-gate9-v0.1/visual/products-keyboard-390.json)。 |
| A06 | RFQ模块1440/1024/768可见，六标签非输入表单；390/320 display:none且AX不包含该模块。Header/Hero/Menu/Footer固定RFQ保留。 | 页面层 PASS；目标接收页可用性是外部依赖。 |
| A07 | 84px桌面、64px其他本次宽度；正确主导航、Logo、Footer栏目/法律区。未启用态Cookie文案准确，无假开关/首访分析banner；打开进入Close；Tab/反向Tab循环；Escape和Close均返回Cookie Settings。320/390弹窗完整可读。 | 视觉/行为 PASS；共享源码、资产身份及无分析网络由运行主审核验。 |
| A08 | 五宽度全部内容检查，无可确认文字裁切、碰撞、横向越界或人为删除模块；平板Company/Applications/Resources正确重排。 | PASS；文件高度会受滚动条及截图机制影响，不用高度等于源图作为通过条件。 |
| A09 | 390菜单初始Close焦点；13次Tab覆盖全部菜单、首尾循环，无背景元素；反向从Close经顶栏RFQ/Logo到末端RFQ；Escape/Close返回Menu。透明backdrop及背景inert、body overflow:hidden并存。桌面53可聚焦对象顺序遍历，没有隐藏导航泄漏；填充/描边/整卡/文字/菜单焦点图可见。五宽度可见a/button/summary实际宽高扫描无小于44px者。 | 浏览器可测子项 PASS；物理AT、物理触控、原生200%未测，整个A09 NOT_VERIFIED。 |
| A10–A12 | SEO、数据隔离、候选/恢复身份由运行 Reviewer主审；本报告不重复签发其结论。 | 交总控合并。 |

桌面遍历见 [desktop-keyboard.json](d32-gate9-v0.1/visual/desktop-keyboard.json)，菜单见 [menu-keyboard.json](d32-gate9-v0.1/visual/menu-keyboard.json)，Cookie见 [cookie-keyboard-390.json](d32-gate9-v0.1/visual/cookie-keyboard-390.json)。菜单顶栏视觉是 `RFQ`、可访问名为 `Request a Quote`；末行是完整 `Request a Quote`，没有仅凭HTML文本拼接误报标签变化。当前项每个保留DOM导航面各一项，活动AX不暴露隐藏导航；Footer没有current标记。

## 3. Finding及未验证范围

本轮确认的实现必修缺陷：**0**。以下是一项证据缺口，不是已确认页面坏了。

### HOME-D32-G9-VF01 — A09真实设备/辅助技术与原生缩放证据缺失

- 分类：`EVIDENCE_INCOMPLETE / NOT_VERIFIED`；范围为本候选首页及共享交互，阻断整个A09及页面整体Gate9 PASS；不是自动后置到发布层。
- 已验证：上述桌面/逻辑窄屏键盘、AX状态、可见焦点、菜单模态隔离、展开/关闭、44px命中区；不能据此推出读屏实际播报、手指操作或浏览器UI 200%行为。
- 尚缺：实际物理设备/触控；命名读屏软件、浏览器与版本下的导航/菜单/展开/Cookie播报与焦点；原生浏览器UI 200%缩放前后窗口/逻辑视口/DPR及完整内容/菜单/弹窗实际证据。
- Owner：有该设备/AT环境的验收执行者及Gate8证据owner；总控协调。若用户采用范围例外，应另记录具体决定，本报告不自行豁免。
- 关闭条件：补交与同一候选/内容/环境可关联的上述真实证据，Gate9核验；或由用户作出明确适用于D32本候选的范围决定。D16历史例外/通过不继承。

外部24目标404由总控的独立HTTP内链证据统一登记，勿再次按视觉Finding重复派发。首页保留批准href，不应为通过本页而制造子页或删除入口。

## 4. 证据有效性与局限

- CUA截图可能排除约15px滚动条；逻辑viewport由DOM记录，不把PNG物理宽度当新的测试断点。完整图中短暂残留的Specialty焦点框来自本轮键盘操作，不是默认装饰。
- `runtime-768-segment-7200.png` 的clip采集错误返回首屏，不用于底部判定；保留原件。已用真实Control+End/向上滚动的 `runtime-768-footer-viewport.png` 和 `runtime-768-rfq-viewport.png`补足，实际看图通过。
- 快速连续Tab中的 `desktop-focus-49.png`、`desktop-focus-53.png`遇到平滑滚动尚未稳定，只作诊断，不用于Footer焦点结论；后以 `footer-focus-confirmed.png`与实际活动元素rect确认，未改页面来制造通过。
- 未调用原生浏览器UI zoom；未触发真实提交。未使用开发截图冒充本轮独立图，也未修改/拼接证据图片。

## 5. 交回状态

- `RECHECK_SCOPE_STATUS=READ_ONLY_VISUAL_INTERACTION_COMPLETE / VERIFIED_SUBSET_PASS / A09_EVIDENCE_INCOMPLETE`
- `PAGE_GATE9_STATUS=NOT_PASS`（A09上述未验证；最终综合由总控负责）
- `INTEGRATION_STATUS=NOT_READY`（批准目标依赖未就绪）
- `RELEASE_STATUS=NOT_AUTHORIZED`

建议停止无针对性的视觉重做；本轮无需代码返修。补证沿用VF01及A09，不把方法部分通过写成完整Gate9通过。报告及证据保存后已读回；本Reviewer未更改Manifest/Status，也未发送开发通知。
