# HOME-001 D32 Gate9 独立验收控制记录 V0.1

2026-09-20。用户原话：“启动Gate9独立验收。”

Review ID：`HOME-D32-G9-20260920-01`；状态 `INITIAL_REVIEW_COMPLETE / PAGE_NOT_PASS / EVIDENCE_REMAINS`。授权覆盖本次首页及其共享Chrome候选只读验收，不启动其他页面、修改CMS/代码、执行开发测试或发布。Gate6包V0.2及关闭不变，原先待授权停止点由本次用户要求覆盖。

## 对象与分工

- 批准源：[Gate6 V0.2](../06_handoff/HOME-001_D32_GATE6_HANDOFF_PACKAGE_V0.2.md)，SHA `EEB70B4D48753BBAF02D9CBEA1B6ADAD65B18D90CD6C6123A0F63C6063065A3A`；[当前入口V1.10](../HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.10.md)。
- 开发方：00首页开发，任务 `01a0bca9-1318-7022-aa49-8723850227f7`；实现 `a75572a36cc50e820b640fca663a3a60594029cb`，evidence HEAD `9de5ef0e3409daf9c9cb675efb26f54d7c7ba6c6`。
- 机器Manifest：`D:/32Wordpress_new/.runtime/handoff/gate8_evidence_manifest.json`，SHA `6A9071B539BB948712B490B1BE3738F26D9281971DCF9DBCCA8CCBD87E1D4232`；runtime `http://127.0.0.1:8232/`，`site_scope=tio2-my`，EN首页，BM法律链接按合同。
- 实际WP制品与内容身份由机器Manifest绑定，非Next标记适配仍须独立验证，不能仅信任开发自检。
- `/root/d32_gate9_runtime`：原校验器及两轮预检、内容链路/SEO/Schema/scope、AC01/10/11/12，报告 `HOME-001_D32_GATE9_RUNTIME_REVIEW_V0.1.md`，证据 `d32-gate9-v0.1/runtime/`。
- `/root/d32_gate9_visual`：独占浏览器检查五宽度、完整内容呈现、A02–09真实视觉及交互，报告 `HOME-001_D32_GATE9_VISUAL_INTERACTION_REVIEW_V0.1.md`，证据 `d32-gate9-v0.1/visual/`。
- `/root`：总控接收与运行内链专项，应用现有内链角色/方法；仅首页全部链接实例及批准目标，不扫描全站、不重复子代理专业覆盖。所有审查者独立于D32实现作者。

预检PASS后开始浏览器/运行采集；问题或缺证按实际归属区分，继续未受影响覆盖。物理AT/触控/原生缩放不可用时如实NOT_VERIFIED；24外部目标按实际响应与依赖合同判断，不能默认为404或已修复。

## 交回与停止

沿用12 AC、5 DEP，生成一个总体验收入口及证据引用、完整Finding、四层状态。不同审查子代理不修改页面Manifest/Status，不自行发送外部消息。总控读回后维护当前入口及Index/Status，按Gate9角色向原开发任务发送准确通过/退回通知，记录送达；反馈不授予部署/发布或超范围实现。

不将开发自检、几何指标、脚本结束或局部PASS代替完整独立判断。未满足本轮必要证据时不关闭页面Gate9；Gate10始终未授权。

正式结果见 [综合验收](HOME-001_D32_GATE9_INDEPENDENT_ACCEPTANCE_V0.1.md)。两名Reviewer及总控内链核验均完成；11AC通过，A09设备/AT/原生缩放未测，唯一VF01开放；实现必修0，集成/发布未就绪。
