# DOC-COO Gate 5 → Gate 6 正式接收文件 V0.1

2026-09-07。状态：**`GATE5_APPROVED_CLOSED / READY_FOR_GATE6_WHEN_AUTHORIZED / GATE6_NOT_AUTHORIZED`**。本文件提供后续Gate 6的单一接收路径，不创建Gate 6授权或结论。Gate 7按工作流V2.0仅为历史编号。

## 1. 当前入口与批准

| 对象 | 当前身份 |
|---|---|
| Page | `DOC-COO` / EN / `/documents/certificate-of-origin/` / `site_scope=tio2-my` |
| Mapping / fact status | `PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED`；不因批准扩大事实 |
| 当前Manifest | [V0.12](../04_planning/DOC-COO_CURRENT_GATE_BASELINE_MANIFEST_V0.12.md)；Gate 1–5 `APPROVED / CLOSED` |
| Gate 5批准 | [COO-G5-APPROVAL-01](DOC-COO_GATE5_USER_APPROVAL_AND_CLOSURE_V0.1.md)；用户原话“批准” |
| Gate 5总控审查 | [COO-G5-PC-01](DOC-COO_GATE5_PROJECT_CONTROL_REVIEW_V0.1.md)；Finding 0 |
| Gate 6 | `NOT_AUTHORIZED`；只有另获授权后才能启动 |

## 2. Gate 6必须直接读取的权威输入

Gate 6应从V0.12沿V0.11读取完整Brief V0.3、Document Playbook、B V0.2、C V0.1、Gate 3批准结构、Gate 4 V0.2批准冻结、Gate 5授权、共享合同与开放项，不从本交接摘要重建正文或页面事实。B继续是唯一可见正文源；C继续控制行动、SEO/GEO/Schema与接收边界。

## 3. 精确Gate 5组合

| 接收对象 | 身份 |
|---|---|
| Source freeze | `COO-G5-V01-SOURCE-01`；`04_planning/gate5-v0.1/approval_core/source-freeze.json`；SHA-256 `6bdc6d117ae688e1d0a0143ec79b33311d7421fd112962b1bec4e6969191b7a2` |
| 完整HTML | `04_planning/gate5-v0.1/DOC-COO_GATE5_COMPLETE_VISUAL_V0.1.html`；SHA-256 `c4f9b788619afa7d1ef6ebf8f43be0c89d1bf177ffbe68326d3399f8db028b31` |
| 视觉CSS | `04_planning/gate5-v0.1/visual-direction.css`；SHA-256 `134474dbba6d9b4719422d95fe78012b1c3ba1f109411043d1d977028895df43` |
| 正式图 | `04_planning/gate5-v0.1/approval_core/export-inventory.json`；16张；SHA-256 `d95e7339e13bb1cab07d70adcb02fa5cc5cd16dc389cbc7bfc532b900dba9248` |
| 规格与证据 | `DOC-COO_GATE5_COMPLETE_VISUAL_AND_METHOD_REPORT_V0.1.md`、作者自检、独立review证据及diagnostic_support |

完整页为1440×4371@1、768×5257@1和390 logical对应780×13730@2。批准组合包含六模块、桌面表/平板双字段/移动标签字段、四项context、origin/traceability、五项准备、Official Source、无图方向、Documents current、共享Header/Footer、Menu、Cookie及适用hover/focus。

两个Request动作保持可编辑/可移除`document_types[]=origin_supplier_qualification`和隐藏`source_context.page_id=DOC-COO`，无grade/destination/scheme预填。Gate 5只提供本地intent证据，生产receiver仍须后续实现和验证。

## 4. Gate 6接收重点与开放项

Gate 6按当前工作流对Gate 1–5精确组合做策划综合审查，并整理唯一开发交付包和Gate 9接受条件；本文件本身不完成该工作。必须保留`COO-G4-SHARED-OBS-01`的Global Chrome owner归属，不在DOC-COO页面创建共享分叉。

生产receiver编辑/移除document type、隐藏source接收、真实提交/重试/持久化、生产路由、CMP、Official Source当前刷新、生产canonical/Schema/索引、`site_scope=tio2-my`隔离、真实设备/读屏/非Chrome/200%缩放/forced-colors仍未由Gate 5证明，应按Gate 6交付、Gate 8实现与Gate 9验收职责处理。

接收状态：**`READY_FOR_GATE6_WHEN_AUTHORIZED / GATE6_NOT_AUTHORIZED`**。不得从本文件启动Gate 6、派发开发、部署、发布或索引。
