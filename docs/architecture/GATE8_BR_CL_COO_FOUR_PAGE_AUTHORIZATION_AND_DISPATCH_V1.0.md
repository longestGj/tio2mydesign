# Brazil EN/PT、Chloride Process、Certificate of Origin Gate 8启动授权与交接 V1.0

日期：2026-09-08。Decision / Dispatch ID：`G8-BR-CL-COO-FOUR-20260908-01`。
状态：`USER_AUTHORIZED / READY_TO_SEND`；实际发送、接收和开发状态以同目录 `GATE8_BR_CL_COO_FOUR_PAGE_DISPATCH_RECEIPT_V1.0.json` 为准。

用户在四页Gate 6完成后明确要求：**“现在把这个四个页面交付Gate8”**，并指定：**“Gate8有一个00Con的对话，交给他开发。”** 本决定授权四页准确批准包交给既有`00Con`开发任务，并授权该独立开发项目完成Gate 8基线核对、实现、测试、自验和开发回执。

## 1. 唯一交付组合

根路径：`D:/23MySec/`。四页Gate 1–4及Gate 6均已批准关闭；发送前重新计算四包SHA-256，与关闭后的当前Manifest完全匹配。

| Page ID / URL | Gate 6唯一批准包 | SHA-256 | 启动前Manifest / 关闭来源 | 稳定验收 / 开放项 |
|---|---|---|---|---|
| `MARKET-BR-EN` / `/markets/brazil/` | `BR-EN-G6-HANDOFF-02` V0.2 | `d8b7c2e759d9952d7b94a09bc397a2837dbf6f80c0b3d968c2b0324a3ad6b18a` | `pages/markets/brazil/MARKET-BR-EN_CURRENT_GATE_BASELINE_MANIFEST_V0.12.md`；`pages/markets/brazil/05_review/MARKET-BR-EN_GATE6_DELEGATED_APPROVAL_AND_CLOSURE_V0.1.md` | `BR-EN-G9-01…12`；`BR-EN-DEP-01…06` |
| `MARKET-BR-PT` / 包内批准URL合同 | `BR-PT-G6-HANDOFF-02` V0.2 | `f1be33c0cef8df85b6e8c8d32a62a7c95c2e210d81169061ba7b1fec2ba41b15` | `pages/markets/brazil/MARKET-BR-PT_CURRENT_GATE_BASELINE_MANIFEST_V0.12.md`；`pages/markets/brazil/05_review/MARKET-BR-PT_GATE6_DELEGATED_APPROVAL_AND_CLOSURE_V0.1.md` | `BR-PT-G9-01…12`；`BR-PT-DEP-01…06`；`PROVISIONAL_ROUTE`与conditional alternate限制保持 |
| `PRODUCT-PROC-CL` / 包内批准URL合同 | `CL-G6-HANDOFF-03` V0.3 | `f8962402e3d243bd9bdcf452a843ad1b0977a562d53ac474549be974b494061a` | `pages/products/chloride-process/PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.25.md`；`pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE6_DELEGATED_APPROVAL_AND_CLOSURE_V0.1.md` | `CL-G9-01…18`；包内13项依赖及4项无障碍依赖 |
| `DOC-COO` / 包内批准URL合同 | `COO-G6-HANDOFF-04` V0.4 | `41a8f87d32b4c27c45192eb35e17049a24a30ad60d0565f23fdeaaa6f1eb9788` | `pages/documents/certificate-of-origin/04_planning/DOC-COO_CURRENT_GATE_BASELINE_MANIFEST_V0.15.md`；`pages/documents/certificate-of-origin/05_review/DOC-COO_GATE6_DELEGATED_APPROVAL_AND_CLOSURE_V0.1.md` | `COO-G9-01…15`；`COO-G6-D01…09`；`PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED`保持 |

新授权仅改变Gate 8交接与开发权限，不更改四包正文、视觉、行为、SEO/GEO/Schema、URL或事实批准。包内旧`NOT_AUTHORIZED / NOT_DISPATCHED`由本次用户决定覆盖；Gate 6包正文及hash保持冻结，不重开Gate 6。

## 2. 接收方与执行边界

接收任务：**00Con**，thread `01a07a66-3c4a-75a2-9df4-648942742f9e`，host `local`，独立开发项目 `D:/16Wordpress_nextjs`。发送前读回显示任务工作区为该根目录；branch/worktree/commit和未提交状态由Gate 8在开工前重新核对并记录。

开发方先完整读取自身AGENTS和适用子目录规则，再读取四个唯一Gate 6包。先核对现有WordPress、API、Next.js、共享组件、路由、缓存、菜单、SEO、表单、媒体和已有页面实现，复用批准的共享能力，保留其他未提交工作，并按开发项目规则建立本批开发基线。Gate 4源代码是准确视觉和行为输入，不承诺可直接合并。

四页统一执行`site_scope=tio2-my`隔离，完整落实查询、路由、缓存、菜单、SEO、表单和媒体七面要求。共享Header/Footer、Logo、Consent、RFQ及Documents引用当前owner，不建立页面分叉。任何运行时依赖未满足时登记准确owner和阻断范围，并继续不受影响的授权工作。

`DOC-COO`必须先为批准合同建立能失败的同一项测试（RED），再以同一测试证明实现通过（GREEN），并完整记录开发仓库/root、worktree、branch、开工前HEAD、最终commit以及开工前/结束时clean或dirty状态。`PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED`不得在开发中擅自升级为正式事实或发布结论。

本次不授予Gate 9独立验收关闭、Gate 10、合并到发布分支、部署、生产数据或配置写入、DNS、公开索引、真实对外表单发送或发布权限。D23只维护交接治理记录，不在D16直接实施代码。

## 3. 开发回执要求

接收方先明确确认四个Package ID、hash、授权范围和当前工作区，并报告开发顺序；确认后在授权范围内持续执行，无需等待四页重复批准。

最终回执须逐页关联稳定验收ID，并包含实际commit/ref、branch/worktree状态、环境及数据版本、WordPress→API→Next.js映射、变更文件、共享消费与关联回归、1440/768/390实际页面和交互状态、自验结果、scope隔离证据、开放依赖、未测项及回退方式。接收确认不代表实现完成或Gate 9通过。

## 4. 变化与同步

原因：用户明确指定既有`00Con`接收四页Gate 8开发。影响仅限四页开发启动和实际交接。主要风险是开发工作区可能含既有改动、把原型误作生产代码、开放依赖误记完成及未保留COO测试证据；由Gate 8基线审计、批准包映射、逐项回执和COO硬合同控制。

发送成功后新增机器可读回执，并将四页当前Manifest升版，同时同步Status与Index。若需撤回或改变范围，必须向同一接收任务发送明确的新决定并追加记录；不覆盖历史批准源。
