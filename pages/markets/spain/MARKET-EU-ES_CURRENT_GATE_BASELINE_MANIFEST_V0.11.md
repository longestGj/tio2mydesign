# MARKET-EU-ES Current Gate Baseline Manifest V0.11

2026-09-07。状态：`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL / CURRENT`。本版接替[V0.10](MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md)成为唯一当前启动入口。Gate5作者提交已通过root独立检查，现等待用户审查；不自行授予`APPROVED / CLOSED`。

| 项目 | 当前状态 |
|---|---|
| Page ID / URL / language / scope | `MARKET-EU-ES` / `/markets/spain/` / EN / `tio2-my` |
| 主词 | `titanium dioxide supplier spain` |
| Gate 1–4 | **APPROVED / CLOSED**；精确组合继承V0.10→V0.9 |
| Gate 5 | **PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL**；冻结`ES-G5-V01-SOURCE-01`；独立审查Finding 0，未用户批准 |
| 串行位置 | `G5-2PAGE-SERIAL-01`第1页root检查完成；第2页DOC-COO已按串行合同放行 |
| Gate 6–10 / 开发发布 | **NOT_AUTHORIZED** |

## Gate 5当前候选组合

| 对象 | 身份 |
|---|---|
| 完整HTML | `04_planning/gate5-v0.1/MARKET-EU-ES_GATE5_COMPLETE_VISUAL_V0.1.html`；18,857 bytes；SHA-256 `26bbf086fddcacdb1b420ff65d5ed7a5ff3fb2699da1b358c33956d5519381ff` |
| 视觉CSS | `04_planning/gate5-v0.1/visual-direction.css`；1,079 bytes；SHA-256 `5d09b11e4386ab6245106ea6c9d44c06743dbc15a93e6d3553fa57c1ce4877f2` |
| Source freeze | `04_planning/gate5-v0.1/approval_core/source-freeze.json`；`ES-G5-V01-SOURCE-01`；SHA-256 `6fec51baa3dfab072a9d93c394779389c1f1b1e74292c47d46b9b654be70d994` |
| 正式图 | `04_planning/gate5-v0.1/approval_core/export-inventory.json`；3张全页+11张适用状态，共14张；SHA-256 `19e6c4c88d643786abcb9ce66b0a7d0f5d056c6107a4ce50a4e881e524e3bdeb` |
| 规格报告 | `04_planning/gate5-v0.1/MARKET-EU-ES_GATE5_COMPLETE_VISUAL_AND_METHOD_REPORT_V0.1.md` |
| 作者自检 | `05_review/MARKET-EU-ES_GATE5_EXECUTION_SELF_CHECK_V0.1.md` |
| 总控独立审查 | `05_review/MARKET-EU-ES_GATE5_PROJECT_CONTROL_REVIEW_V0.1.md`；Finding 0；`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate5→6草案 | `05_review/MARKET-EU-ES_GATE5_TO_GATE6_HANDOFF_DRAFT_V0.1.md`；Gate6未启动 |

批准输入继续是B V0.2、C V0.4、Gate3源和Gate4冻结`ES-G4-V01-SOURCE-01`。候选可见body与批准Gate4源逐字相等；只在head增加C批准的canonical与WebPage+BreadcrumbList。无图方向、四模块、Spain RFQ上下文、Documents来源边界、共享Consumer V0.2及生产Logo均保持。

作者和总控独立审查的本页必修Finding均为0。总控实际打开14张正式图与10张可读分段，独立浏览器顺序重渲染三端全页并与正式图逐字节一致；内容、结构、SEO/GEO/Schema、导航意图、44px、菜单/Cookie及运行错误检查均通过。保留共享观察`ES-G4-OBS01`：移动菜单打开后跨桌面，菜单与背景恢复但焦点落BODY；归Global Chrome owner，未在本页分叉修复。`ES-G5-TOOL-01`截图状态污染和`ES-G5-TOOL-02`清单脚本保留名错误均已修复，失败历史在diagnostic_support，不是页面缺陷。

开放实施/验收项：生产路由与receiver、Spain可编辑且不覆盖用户值、Documents仅source、提交/重试、CMP存储、生产Schema和索引、真实设备/读屏/非Chrome/缩放/forced-colors。上述未测项不构成Gate6或发布通过。
