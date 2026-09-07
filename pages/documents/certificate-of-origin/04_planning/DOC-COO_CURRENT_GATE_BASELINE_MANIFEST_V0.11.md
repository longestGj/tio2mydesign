# DOC-COO Current Gate Baseline Manifest V0.11

2026-09-07。状态：`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL / CURRENT`。本版接替[V0.10](DOC-COO_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md)成为唯一当前启动入口。Gate5作者提交已通过root独立检查，现等待用户审查；不自行授予`APPROVED / CLOSED`，也不授权Gate6、开发或发布。

| 项目 | 当前状态 |
|---|---|
| Page ID / URL / language / scope | `DOC-COO` / `/documents/certificate-of-origin/` / EN / `tio2-my` |
| 主词 | `titanium dioxide country of origin certificate` |
| Mapping / fact status | `PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED`；Gate5没有扩大事实 |
| Gate 1–4 | **APPROVED / CLOSED**；精确组合继承V0.10→V0.9 |
| Gate 5 | **PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL**；冻结`COO-G5-V01-SOURCE-01`；作者与总控Finding 0；未用户批准 |
| 串行位置 | `G5-2PAGE-SERIAL-01`第2页；作者提交与root检查均完成，固定队列执行结束 |
| Gate 6 / Gate 8–10 | **NOT_AUTHORIZED**；Gate7仅保留历史编号 |

## Gate 5当前候选组合

| 对象 | 身份 |
|---|---|
| 完整HTML | `gate5-v0.1/DOC-COO_GATE5_COMPLETE_VISUAL_V0.1.html`；23,929 bytes；SHA-256 `c4f9b788619afa7d1ef6ebf8f43be0c89d1bf177ffbe68326d3399f8db028b31` |
| 视觉CSS | `gate5-v0.1/visual-direction.css`；1,202 bytes；SHA-256 `134474dbba6d9b4719422d95fe78012b1c3ba1f109411043d1d977028895df43` |
| Source freeze | `gate5-v0.1/approval_core/source-freeze.json`；`COO-G5-V01-SOURCE-01`；SHA-256 `6bdc6d117ae688e1d0a0143ec79b33311d7421fd112962b1bec4e6969191b7a2` |
| 正式图 | `gate5-v0.1/approval_core/export-inventory.json`；3张全页+13张适用状态，共16张；SHA-256 `d95e7339e13bb1cab07d70adcb02fa5cc5cd16dc389cbc7bfc532b900dba9248` |
| 规格报告 | `gate5-v0.1/DOC-COO_GATE5_COMPLETE_VISUAL_AND_METHOD_REPORT_V0.1.md` |
| 作者自检 | `../05_review/DOC-COO_GATE5_EXECUTION_SELF_CHECK_V0.1.md`；作者Finding 0 |
| 总控独立审查 | `../05_review/DOC-COO_GATE5_PROJECT_CONTROL_REVIEW_V0.1.md`；Finding 0；`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate5→6草案 | `../05_review/DOC-COO_GATE5_TO_GATE6_HANDOFF_DRAFT_V0.1.md`；Gate6未启动 |

批准输入继续是Brief V0.3、B V0.2、C V0.1、Gate3批准源和Gate4冻结`COO-G4-V02-SOURCE-01`。候选可见body与Gate4 V0.2批准源逐字相等；只在head增加C批准的canonical与`WebPage + BreadcrumbList`。六模块、三类证据比较、四项context、origin/traceability、五条准备、Official Source、两个Request intent、无图方向、Documents current、共享Consumer V0.2和生产Logo都保持。

作者与总控独立审查的本页必修Finding均为0。总控实际打开16张正式图和19张可读分段，独立浏览器顺序重渲染三端全页并与正式图逐字节一致；冻结、内容、六模块、响应式比较、SEO/GEO/Schema、两处来源链接、请求intent、44px、菜单/Cookie及运行错误检查均通过。`COO-G5-TOOL-01`的无冻结首批导出已拒收并隔离，修复后重新冻结与导出。`COO-G4-SHARED-OBS-01`继续由Global Chrome owner持有：紧凑菜单打开后跨桌面，菜单与锁定恢复但焦点落BODY；未在本页分叉修复。

开放实施/验收项：生产receiver编辑/移除document type和隐藏source接收、提交/重试/持久化、生产路由、CMP、Official Source当前刷新、真实设备/读屏/非Chrome/缩放/forced-colors、生产Schema与索引。上述未测项不构成Gate6或发布通过。

Root独立检查若通过，应按治理另行更新本候选状态或生成经审查的当前版本；作者无权把本文件标为CURRENT或`PROJECT_CONTROL_REVIEW_PASS`。
