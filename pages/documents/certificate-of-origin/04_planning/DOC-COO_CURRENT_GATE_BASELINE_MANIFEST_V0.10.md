# DOC-COO Current Gate Baseline Manifest V0.10

2026-09-07。状态：`GATE5_USER_AUTHORIZED / IN_PROGRESS / CURRENT`。本版接替[V0.9](DOC-COO_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md)成为唯一当前启动入口；V0.9及更早版本保持历史不回写。

| Field | Current value |
|---|---|
| Page / language / URL / scope | `DOC-COO` / EN / `/documents/certificate-of-origin/` / `tio2-my` |
| Primary keyword | `titanium dioxide country of origin certificate` |
| Mapping / fact status | `PROVISIONAL_URL` / `FACT_EVIDENCE_REQUIRED`；不因Gate 5自动扩大事实 |
| Gate 1–4 | `APPROVED / CLOSED`；精确组合继承V0.9 |
| Gate 5 | `USER_AUTHORIZED / IN_PROGRESS`；[COO-G5-START-01](../05_review/DOC-COO_GATE5_USER_AUTHORIZATION_V0.1.md)，属于[G5-2PAGE-SERIAL-01](../../../../docs/architecture/GATE5_TWO_ELIGIBLE_PAGE_SERIAL_CONTROL_V1.0.md)第2页 |
| Gate 6 / Gate 8–10 | `NOT_AUTHORIZED`；Gate 7仅保留历史编号 |

## Gate 5执行输入

Gate 5必须直接读取V0.9全部批准组合，并以以下当前对象为权威：

- [Brief V0.3](../../../../docs/page-briefs/DOC-COO_CERTIFICATE_OF_ORIGIN_BRIEF_V0.3.md)及其后续批准决定；
- [A V0.1](DOC-COO_GATE2_CONTENT_SKELETON_V0.1.md)、[B V0.2](DOC-COO_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md)、[C V0.1](DOC-COO_GATE2_CONTENT_CONTRACT_V0.1.md)；
- [Gate 3批准源](gate3-v0.1/DOC-COO_GATE3_RESPONSIVE_WIREFRAME_V0.1.html)及Gate 3关闭/交接；
- Gate 4批准冻结`COO-G4-V02-SOURCE-01`：[HTML](gate4-v0.2/DOC-COO_GATE4_VISUAL_SAMPLES_V0.2.html)、[visual CSS](gate4-v0.2/visual-direction.css)、[方向与方法报告](gate4-v0.2/DOC-COO_GATE4_VISUAL_DIRECTION_AND_METHOD_REPORT_V0.2.md)、正式45图清单及独立复验；
- 当前Global Chrome Consumer V0.2、品牌、生产Logo、CTA与共享法律/Cookie合同。

## Gate 5不可丢失的页面合同

1. 完整1440、768、390 logical @2x必须呈现B V0.2的六模块，不把Gate 4代表区域当整页。
2. 三种文件名称、相关性与核验文案必须完整；桌面表、平板双字段记录、移动标签字段遵循Gate 4 V0.2接受方向。
3. 四项context details、Additional Requirements、company Country / Region区别、origin evidence与traceability边界、五条准备事项及不完整context帮助全部保留。
4. Official Source准确保留来源标签、2025-10-10 information date、2026-01-05 page update、2026-09-07 review date、一般指导限制及链接标点；不得把来源事实重写成公司能力。
5. 两个`Request Origin Documentation`保持可编辑/可移除`prefill.document_types[]=origin_supplier_qualification`及隐藏`source_context.page_id=DOC-COO`；不得预填Grade、destination或scheme。静态本地intent不等于生产receiver证明。
6. Documents在桌面与移动导航为current；共享Chrome不分叉，保留`COO-G4-SHARED-OBS-01`的owner归属。无新媒体方向和正常Footer证据保持。

Gate 5执行者完成冻结、正式三端全页与适用状态、实际读回、自检及Gate 5→6接收草案后停止。root独立检查前不得写`PROJECT_CONTROL_REVIEW_PASS`；用户批准前不得写`APPROVED / CLOSED`。
