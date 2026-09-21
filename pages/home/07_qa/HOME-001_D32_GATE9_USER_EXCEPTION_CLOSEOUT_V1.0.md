# HOME-001 D32 Gate9 用户范围决定与关闭 V1.0

日期：2026-09-20。决定 ID：HOME-D32-G9-UD01。状态：USER_APPROVED / CLOSED。

用户原话：“，但真实设备、读屏和原生缩放证据仍缺失。  这个不需要，因为这个做不到。”

## 决定及范围

用户明确取消本次 D32 首页及共享 Header/Footer 验收中真实物理触控、真实读屏软件和浏览器原生 UI 200% 缩放三类证据要求。原因是当前无法执行。此决定仅适用于本次精确候选，不改写全站通用标准，也不声称三项已实际测试。

精确候选：implementation `a75572a36cc50e820b640fca663a3a60594029cb`；evidence HEAD `9de5ef0e3409daf9c9cb675efb26f54d7c7ba6c6`；制品 `wp-f576fa2d7a74ab057e5878765db4187ae7b2689aaf921f8c5d6f5ab0bac6fc3e`；内容 SHA `ee6a324ea68ada21e9424f930ed52f87800cea9e982c0feb4fd9ef456b71a992`；scope `tio2-my`。

## 总控关闭

沿用[首轮独立验收及完整证据](HOME-001_D32_GATE9_INDEPENDENT_ACCEPTANCE_V0.1.md)，不重写原报告。11项 AC 已通过（保留 A11 的声明限度）；A09 浏览器可测部分通过，三项未测部分为 USER_WAIVED / NOT_TESTED。唯一 Finding `HOME-D32-G9-VF01` 以 USER_APPROVED_SCOPE_EXCEPTION / CLOSED 关闭，不属于代码修复或实测通过。

| 层级 | 当前结论 |
|---|---|
| RECHECK_SCOPE_STATUS | PASS_WITH_USER_APPROVED_SCOPE_EXCEPTION |
| PAGE_GATE9_STATUS | READ_ONLY_QA_APPROVED / CLOSED（上述用户例外） |
| INTEGRATION_STATUS | NOT_READY / HOME-VU-DEP-03_OPEN |
| RELEASE_STATUS | NOT_AUTHORIZED |

DEP-01/02 对当前候选满足；DEP-04 页面 Gate9 已关闭；DEP-03 的24个未完成目标以及 DEP-05 发布条件仍开放，由后续页面/发布负责人处理。当前首页实现必修0、待补证0。未测范围的兼容性仍未知，用户决定接受此验证范围；无需继续索取相同证据。

本次只调整验收范围和状态，无代码、内容或路由变化。若未来要求补测，另立针对性验证记录并沿用原始证据；发现真实缺陷时重新开启对应 Finding。原验收报告和旧 Manifest 保留作为回溯依据。

同步当前 Manifest V1.12、项目 Status/Index，并通知原开发任务停止本轮返修及三项补证。送达记录见 `HOME-001_D32_GATE9_NOTICE_V0.2.json`。本结论不授权后续页面开发、合并、push、部署、DNS、索引或分析工具启用。
