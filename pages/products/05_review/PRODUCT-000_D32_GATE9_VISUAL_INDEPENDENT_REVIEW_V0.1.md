# PRODUCT-000 D32 Gate9 视觉与交互独立验收 V0.1

日期：2026-09-20。Review ID：`PRODUCT-000-D32-G9-VISUAL-01`。Reviewer：`/root/product000_gate9_visual_final`；未参与 D32 实现及修复。本报告提交总控，不修改 D32、运行时、页面 Manifest 或项目状态，不授予发布。

## 1. 结论

**RETURN。** 页面在独立浏览器检查中未发现新的视觉、响应式或交互缺陷，但 Gate9 复核期间精确候选被更换，原 Gate8 Manifest 不再绑定当前 runtime 与工作树。依据 Gate8→Gate9 机器交接合同，不能把对变化前后两个对象的观察拼成同一精确候选的 Gate9 PASS。

- `RECHECK_SCOPE_STATUS=RETURN_REQUIRED_EXACT_CANDIDATE_IDENTITY_DRIFT`
- `PAGE_GATE9_STATUS=NOT_PASS`
- `INTEGRATION_STATUS=NOT_READY`
- `RELEASE_STATUS=NOT_AUTHORIZED`

唯一必修 Finding 为 `PRODUCT-000-D32-G9-VF01`。本轮没有要求视觉重做；Gate8 应固定新的干净候选、重建证据并重新交接。

## 2. 送审对象与依据

- Page ID：`PRODUCT-000`；URL：`/products/`；`site_scope=tio2-my`。
- 送审实现：`7d4875a778401d0ecd118f5935c6392571a6d13c`。
- 送审 evidence HEAD：`5c339caad74e8c00658c9497ee428c4f029adbb7`。
- 送审 build/artifact ID：`wp-fb45d8677fec877ae499976fdfa96491c03bf9c9c062d35c98f70b10eb7cea9b`。
- 送审 runtime：`http://127.0.0.1:8232/products/`。
- 送审 Manifest：`C:\Users\longe\.codex\worktrees\product-000-products\32Wordpress_new\.runtime\handoff\products\gate8_evidence_manifest.json`。
- 已实际读取根 AGENTS、PROJECT_CONTEXT、PRODUCT-000 当前 Manifest、Gate6交付包与Controller关闭记录、当前Brief/Playbook/页面登记和关键词归属、Gate工作流与治理适用章节、Gate8→Gate9机器交接合同、Gate9 Agent及当前方法基线、运行验收Skill和布局交互Skill；D32仅作只读检查。
- 用户已明确本页不要求真实设备、读屏及浏览器原生缩放证据；这些项目不作为 Finding 或阻断项。本报告只声明自动化浏览器和可检查DOM/AX范围。

## 3. 身份预检及复核过程

开始复核时，原送审对象满足准入：Manifest validator 为 `PASS`，205项检查全部通过；两轮 preflight 对 `/` 和 `/products/` 共四次请求全部为200，scope、内容标记及送审 artifact 一致。原始结果见[Manifest初检](evidence/product-000-d32-gate9-visual-v0.1/manifest-validation.json)与[两轮预检](evidence/product-000-d32-gate9-visual-v0.1/preflight.json)。

随后独立 Playwright/Chrome 检查在1440、768、390三个视口完成一次64/64通过的运行；在补充 Axe 人工判定字段并复跑时，三个视口均出现相同 artifact mismatch：实际值已变成 `wp-9fcfb835a0e8b3709924a3d05cfe0bf5173fcd4db200308e0c4edf96845b68df`。当前[独立结果](evidence/product-000-d32-gate9-visual-v0.1/independent-visual-results.json)保留67项中的64项通过与3项 artifact mismatch，结论为 `RETURN`。

漂移出现后，官方 preflight 首次复跑确认工作树存在7个未提交变更，状态为 `EVIDENCE_INCOMPLETE`，失败项为 `git_clean`，见[漂移后预检](evidence/product-000-d32-gate9-visual-v0.1/preflight-after-drift.json)与[漂移后Manifest核验](evidence/product-000-d32-gate9-visual-v0.1/manifest-validation-after-drift.json)。之后工作树又进入新的提交 `95ed4c4c47481ef78f64fa90b95a1096ea45bfae`，运行时仍输出新 artifact；原 Manifest 仍声明 `5c339caa…`及旧 artifact。16:00:58再次只读快照时，工作树还在改写/删除原证据文件；[候选变化后预检](evidence/product-000-d32-gate9-visual-v0.1/preflight-after-candidate-change.json)确认 `git_head`、`git_clean`及原证据文件均不再满足旧 Manifest，runtime阶段未获准继续。

因此，开始阶段的通过观察只能证明当时浏览器曾看到满足旧身份的页面；当前落盘截图和JSON已经由后续复跑绑定到新 artifact，不能倒签为旧候选的完整、可复核 Gate9 证据。

## 4. 独立视觉与交互观察

以下项目在浏览器检查中均未发现缺陷，但因VF01只作为“已检查子集”，不提升为精确候选整体PASS。

| 范围 | 独立观察 | 子项结果 |
|---|---|---|
| 1440视觉 | 84px Header；桌面导航；H1为56px/700、3行；Directory与Selector为2列，Evaluation为5列；完整页无横向溢出、文字裁切、模块碰撞或异常空白。 | PASS_OBSERVED |
| 768视觉 | 64px Header与移动菜单；H1为44px/700、2行；Directory与Selector为1列，Evaluation为2列；完整页无溢出或裁切。 | PASS_OBSERVED |
| 390视觉 | 64px Header；H1为36px/700、0字距、4行；各模块单列；完整页无溢出、裁切或隐藏正文。 | PASS_OBSERVED |
| 内容顺序 | Breadcrumb → Hero → Selector → Process → Directory → Evaluation → FAQ → Final RFQ；Header/Footer完整。 | PASS_OBSERVED |
| 导航与共享Chrome | Products在当前可见导航中唯一标记current；买家界面没有`CURRENT`文本；Header/Footer/RFQ、Cookie Settings与移动菜单视觉一致。 | PASS_OBSERVED |
| 14型号过渡规则 | 6/5/2/1四组、14个型号及批准顺序完整；未就绪型号在Directory与Selector结果中均为非链接；CR-901的Vapor-phase oxidation分类保留。 | PASS_OBSERVED |
| 条件路由 | 未就绪Process与Support route cards均未输出；RFQ保持`/request-a-quote/`。 | PASS_OBSERVED |
| Selector | Coatings/Plastics/Masterbatch/Printing Inks/Paper/Specialty Materials结果数为8/8/7/4/2/1；Not Sure显示批准空状态；结果不产生未就绪详情链接。 | PASS_OBSERVED |
| FAQ | 5项键盘展开/收起、aria状态及完整答案可读。 | PASS_OBSERVED |
| 菜单与Cookie | 焦点进入弹层、Tab/Shift+Tab循环、背景隔离、Escape关闭并返回触发器；移动菜单与Cookie弹层命中区满足44px。 | PASS_OBSERVED |
| 键盘与焦点 | 可见焦点、顺序导航及回焦正常；扫描未发现小于44px的可见交互控件。 | PASS_OBSERVED |
| 控制台与网络 | 三个视口均为0 page error、0 console error、0 console warning、0 failed request。 | PASS_OBSERVED |
| 基础Axe | 三个视口均为0 violation。两项`incomplete`经人工核对：Cookie按钮的`aria-controls=cookie-dialog`目标存在且可打开；FAQ加减号为`aria-hidden=true`，按钮另有完整可访问名，均不登记缺陷。 | PASS_OBSERVED |
| 无JavaScript核心降级 | 14个型号目录仍可读，核心内容未因脚本关闭而消失。 | PASS_OBSERVED |

完整页和分段截图、菜单/Cookie/Selector/FAQ/no-JS状态、检查脚本及JSON位于[evidence/product-000-d32-gate9-visual-v0.1](evidence/product-000-d32-gate9-visual-v0.1)。这些文件用于证明本轮检查动作和身份漂移，不用于把新 artifact 误记成旧候选。

## 5. Finding

### PRODUCT-000-D32-G9-VF01 — Gate9期间精确候选及证据身份发生变化

- 分类：`EVIDENCE_INCOMPLETE / EXACT_CANDIDATE_IDENTITY_DRIFT`。
- 严重度：`REQUIRED`；阻断本轮 Page Gate9 PASS。
- 适用验收条件：Gate8→Gate9精确身份、候选冻结、干净工作树和可复核证据；`PRODUCT-G7-B06`、`PRODUCT-G7-B07`。
- 预期：从Gate9准入至结论，implementation/evidence HEAD/build/runtime/content身份保持与Manifest一致；若需修复，结束旧轮次并以新身份重新交接。
- 实际：开始时旧身份通过validator和两轮preflight；复核期间 runtime artifact 从 `wp-fb45d867…`变为`wp-9fcfb835…`，工作树先出现未提交实现与测试变更，之后HEAD前进到`95ed4c4c…`并继续重建证据。旧Manifest没有同步，官方复跑返回`EVIDENCE_INCOMPLETE`。
- 影响：无法证明最终视觉、交互、Axe、控制台和网络结果全部来自送审的同一个精确候选；Gate9独立性与可复核性断裂。
- Owner：D32 Gate8实现/证据Owner；总控接收新交接。
- 关闭条件：停止对候选工作树和8232 runtime的并发改写；提交所有修复；生成新的implementation/evidence HEAD/build/content身份和完整证据Manifest；保持工作树干净且runtime稳定；Gate9用新Manifest重新运行validator、两轮preflight及受影响的视觉/交互复核。不得通过恢复旧artifact标签或删除检测来关闭。

## 6. 集成与发布边界

14个Grade详情、2个Process、Applications、Documents、Markets及RFQ目标仍按Gate6开放依赖管理；本轮过渡规则正确地让未就绪Grade保持非链接。这些外部目标不另登记为本页视觉缺陷，但在目标就绪并完成集成核验前，`INTEGRATION_STATUS`仍为`NOT_READY`。

本轮没有Gate10、部署或发布授权。真实设备、读屏和原生缩放按用户明确决定从本轮范围排除，不要求补证，也不构成RETURN原因。
