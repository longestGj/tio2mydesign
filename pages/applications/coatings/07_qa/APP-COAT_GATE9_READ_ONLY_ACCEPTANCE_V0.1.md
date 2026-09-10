# APP-COAT Gate 9 Read-Only Acceptance V0.1

日期：2026-09-08。结果：`NOT_PASS / CHANGES_AND_EVIDENCE_REQUIRED`。候选身份、共同证据与Finding见`docs/architecture/GATE9_TRADE4_APPLICATION5_INITIAL_ACCEPTANCE_AND_RETURN_V1.0.md`。

## 稳定接受条件（13）

- `PASS`（8）：`APP-COAT-G9-AC01`、`AC02`、`AC03`、`AC05`、`AC07`、`AC09`、`AC11`、`AC13`。
- `FAIL`（3）：`APP-COAT-G9-AC04`（共享`/applications/`404，`G9-T4A5-F02`）；`AC08`、`AC12`（批准来源保持`PROVISIONAL_URL`，实际却输出正式Canonical/`og:url`且CMS配置写成`provisional=false`，`G9-T4A5-F01`）。
- `NOT_VERIFIED`（2）：`APP-COAT-G9-AC06`（真实conversion receiver）、`AC10`（跨站scope/cache实际矩阵）。

## 依赖（8）

- `PASS`（4）：`APP-COAT-G6-D01`、`D04`、`D05`、`D08`。
- `FAIL`（1）：`APP-COAT-G6-D03`。
- `NOT_VERIFIED`（3）：`APP-COAT-G6-D02`、`D06`、`D07`。

## 证据判断

十模块、八个Grade、两表、六个技术来源、三端视觉、CMS精确readback及当前Schema/robots通过。Registry、关键词主表、Brief和Application Playbook对临时路由的组合权威高于当前Manifest中遗漏的标记；本审查不把该遗漏解释为最终URL批准。

Gate 9不关闭；修复`G9-T4A5-F01/F02`并补齐receiver、环境与隔离证据后定向复验。
