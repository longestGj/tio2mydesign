# Gate 3 方法验证历史证据

本目录保存2026-09-07的一次隔离方法试验，不是实际页面成果或运行模板。三种内容类型组合在同一个虚构页面中；所有确认均为本地模拟。

## 阅读顺序

- `input.md`、`copy.json`：固定输入。
- `method-snapshots/`：本次实际使用的方法版本；v1批准源与v2定向澄清分别保存。
- `design-v1/design-report.md`、`design-v1/wireframe.html`：设计方法产物及自检。
- `review-design/report.md`：另一位执行者对设计产物的独立核验。
- `controller-expected-findings.md`：首次核验前保存、未交给审查者的受控缺陷列表及试验限制。
- `review-a/report.md`、`review-b/report.md`：原始核验；A不是已知无缺陷对照。
- `review-c/report.md`、`review-d/report.md`：同一审查者的定向复验，保留旧Finding与分类差异。
- `specimen-a/` 至 `specimen-d/`：受控候选与修订，各有源码、资产和身份清单。
- `controller-evidence/`：总控实际复核记录，不能代替独立审查报告。

## 历史路径与工具

原运行根为 `D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07`。正式证据副本保存在 `D:/23MySec/90_archive/skills/2026-09-07/gate3-method-validation`；归档时先登记映射再逐字节复制，原工作资料保留。原报告中的绝对路径不改写：查归档副本时，把前述根前缀替换为归档根，其余相对路径保持一致。`ARCHIVE_MAP.json` 和 `ARCHIVE_CHECK.json` 由归档操作生成，记录逐文件对应与校验结果。

脚本、浏览器运行记录和失败截图作为历史复核资料保存；脚本中含本机原路径，不要在归档目录直接运行并覆盖证据。需复现实验时使用新的隔离工作目录并调整明确的输入输出路径。当前项目方法源仍位于 `D:/23MySec/skills/`，不从本归档安装或调用历史快照。

正式结论与授权边界见 `D:/23MySec/docs/superpowers/specs/2026-09-07-gate3-skill-validation-v0.1.md`。方法验证不代表Agent完整流程、TiO2共享组件或页面Gate已通过。
