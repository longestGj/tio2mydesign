# 同行研究 QA 报告

**状态**：PASS  
**日期**：2026-08-29

## QA 范围

- 样本登记与来源可追溯；
- 桌面/移动截图完整性；
- Cloudflare、selector、cookie 等异常记录；
- 模块矩阵与报告计数一致；
- 同行频率与项目建议的逻辑边界；
- 不触碰关键词研究、视觉标准和生产首页代码的阶段门槛；
- 双站事实与未经核验主张风险。

## 验证结果

- 24 个正式样本均有 `source-record.md` 和非零桌面完整首页截图。
- 10 个深度样本均有非零移动完整首页截图。
- 2 个 Cloudflare challenge 和 1 个国家/语言 selector 已单独标记，不计入实质频率。
- 自有基线 `mytio2.com` 已排除出同行频率。
- 模块清单共 75 条关键模块记录，source ID 均可回溯到来源索引。
- sequence matrix 共 24 行，source ID 唯一；20 个实质同行的自动计数与研究记录一致。
- 4 个最终结果文件存在，所有截图索引路径可解析。
- 研究目录中只包含 `.md`、`.csv`、`.png`；未创建 HTML、CSS、JavaScript、脚手架或生产首页代码。
- 已删除一次失败抓图产生的多余 `desktop-01.png`，仅保留批准规范内的留档文件。
- 报告未锁定最终 section、导航、URL、H1 或正式 SEO 文案。
- 未创建首页生产代码或脚手架。

## 验证命令摘要

- `source_index=24`
- `source_records=24`
- `desktop_full=24`
- `mobile_full=10`
- `module_inventory_rows=75`
- `sequence_rows=24`
- `substantive_peer_rows=20`
- `qa_errors=0`
- 退出状态：`0 / QA_PASS`

## 仍然存在的研究限制

- Chemours Ti-Pure 与 Univar UK 只保存了抓取当日 Cloudflare challenge 状态，未分析其正常首页模块。
- Brenntag 根站只保存国家/语言选择器，未选定国家站。
- LB Group 截图保留了 cookie preference overlay，并已在来源记录中说明。
- 同行页面内容、数字、认证和 Logo 未替同行核验；模块出现频率不等于效果。
- 关键词研究人工批准、企业证据包、双站角色和设计规格审批仍是进入实施前的硬门槛。
