# Gate 9 Brazil EN/PT + Chloride + DOC-COO Initial Acceptance and Return V1.0

日期：2026-09-08。Control ID：`G9-BR-CL-COO-FOUR-20260908-01`。

## 1. 批次决定

| Page | Gate 9 result | Acceptance count | Required Findings |
|---|---|---|---|
| `MARKET-BR-EN` | `NOT_PASS / CHANGES_AND_DEPENDENCIES_REQUIRED` | `PASS 5 / FAIL 4 / NOT_VERIFIED 3` | `BR-EN-G9-F01…F03 OPEN` |
| `MARKET-BR-PT` | `NOT_PASS / CHANGES_AND_EVIDENCE_REQUIRED` | `PASS 4 / FAIL 3 / NOT_VERIFIED 5` | `BR-PT-G9-F01/F02 OPEN` |
| `PRODUCT-PROC-CL` | `NOT_PASS / CHANGES_AND_EVIDENCE_REQUIRED` | `PASS 12 / FAIL 2 / NOT_VERIFIED 4` | `CL-G9-F01…F04 OPEN` |
| `DOC-COO` | `NOT_PASS / REQUIRED_EVIDENCE_REMAINS` | `PASS 13 / FAIL 1 / NOT_VERIFIED 1` | `DOC-COO-G9-F01/F02 OPEN` |

合计57项稳定接受条件：`PASS 34 / FAIL 10 / NOT_VERIFIED 13`。四页均已完成首轮只读验收，没有一页满足Gate9关闭条件。Gate1–4/6既有批准不重开；Gate10、合并、部署、生产CMS写入、DNS、发布、sitemap和索引未授权。

验收绑定同一对象：D16 implementation `4ce8ecd121f5c4b7c89747d82d00aaff4a128b55`，receipt-only commit及当前HEAD `155fec8025c8fb679c9cbc90549e4533de8aca84`，branch `codex/poland-development`，clean worktree，local production runtime `http://127.0.0.1:3024`，Build ID `VNjQyPGmNIKlIArsXDx9J`，`SITE_ID=tio2-my`。

## 2. 不重复的返修与补证队列

### A. Gate 8 / D16实现必修

1. **Brazil EN完整视觉** — `BR-EN-G9-F01`
   - 按批准冻结`BR-EN-G4-V11-SOURCE-01`实现完整Hero、Application cards、Documents、Trade、RFQ及批准hover/focus/motion表现。
   - 不修改已通过正文、事实、SEO/Schema或动作语义。
2. **共享RFQ buyer-edit history恢复** — `BR-EN-G9-F03` + `BR-PT-G9-F02`
   - fresh Market入口仍只初始化Brazil；买家改成Chile/Argentina后，Back/Forward或离开后返回不得再次覆盖买家值。
   - 一次共享修复同时覆盖EN/PT及其他消费同一prefill的页面；回执提供fresh、edit、Back/Forward、direct revisit和相邻回归，不拆成两次返工。
3. **Chloride JSON-LD精确合同** — `CL-G9-F01`
   - WebPage `name`改为H1；补shared Organization `publisher`和指向ItemList的`mainEntity`；ItemList `@id`使用Canonical+`#chloride-grade-list`并补B-03 heading作为`name`。
   - 保留已通过的八个ListItem五元关系、禁止Product/Offer/FAQ/排名/价格扩张边界。

### B. 已有下游Gate 8 owner继续完成，禁止本批页面私建fallback

1. **Brazil三个Application与Brazil Trade routes** — `BR-EN-G9-F02` + `BR-PT-G9-F01`。
2. **Applications Hub `/applications/`** — `CL-G9-F02`的route部分。

这些目标已由独立Gate8任务开发；本页owner只在同一release candidate上复验最终URL、Page ID、语言/scope和owner内容。不要隐藏链接、改成别的页面或复制下游内容来规避404。Brazil Trade复验同时需要当日官方来源新鲜度记录。

### C. 证据补齐

1. **共同无障碍环境包** — `DOC-COO-G9-F01`、`CL-G9-F03`及Brazil对应NOT_VERIFIED范围：绑定准确commit/build，命名真实浏览器UI 200% zoom、至少一个非Chromium引擎、真实触控设备和screen-reader/AT；逐页保留各自适用页面、Menu、Cookie、长内容/目录与焦点范围。
2. **接收层分层证据** — Brazil `G9-06`、Chloride `CL-G9-F02`的receiver部分：入口、客户端校验、provider接受、最终收件与失败恢复分别记录；本返修包不授权新的真实发送。优先继承当前CONV-DOC owner已验证的provider状态，并准确保留mailbox/production control开放项。
3. **负向CMS/cache/scope矩阵** — `CL-G9-F04`及Brazil隔离NOT_VERIFIED：对missing/error/wrong-scope、错误/重复/缺失Page ID、合法/非法position、invalid refresh/recovery、cold/warm同slug和跨scope缓存，以及query/route/menu/SEO/form/media/analytics/storage按合同提供commit-bound durable outputs。
4. **DOC-COO硬身份链** — `DOC-COO-G9-F02`：从实施时保存的日志/终端记录补pre-work与final exact status outputs；pre-work dirty逐路径列出并分类。不得用现在的clean状态倒填历史。随后由获准在D16执行验证且与实施者身份独立的一方运行Gate6指定GREEN、typecheck、relevant lint和Malaysia production build，提交准确输出与commit/build/status关联。

## 3. 已通过范围必须保留

- Brazil EN/PT：批准正文、事实/COO范围、SEO/Schema、语言/canonical/conditional alternate边界、source-only Documents入口。
- Chloride：五模块、八个Grade显式Page ID五元组和固定顺序、三端视觉、fragment、空预填、SEO/社交、无图片和共享Chrome。
- DOC-COO：六模块正文、RMCD一般性来源范围、三端视觉、九档响应、请求预填/历史行为、SEO/Schema和共享Chrome。

返修不得把已通过范围改造成新功能、额外文案、fallback、页面私有共享组件或新的Schema事实。修复后Gate9仅复验对应Finding、受影响相邻条件和运行身份；未受影响且仍可证明等价的PASS可继承。

## 4. 页面记录

- `pages/markets/brazil/07_qa/MARKET-BR-EN_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md`
- `pages/markets/brazil/07_qa/MARKET-BR-PT_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md`
- `pages/products/chloride-process/07_qa/PRODUCT-PROC-CL_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md`
- `pages/documents/certificate-of-origin/07_qa/DOC-COO_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md`

## 5. 当前停止点

本文件是已完成验收后的具体返修/补证材料。用户随后授权发送，已按`G9-BR-CL-COO-FOUR-RETURN-20260908-01`写入既有D16线程；实际送达与执行状态见`docs/architecture/GATE9_BR_CL_COO_FOUR_PAGE_RETURN_DISPATCH_V1.0.md`。Gate9在上述Finding关闭前保持`NOT_PASS`。真实外部发送、开发修改、合并、部署和发布权限分别服从其既有任务与用户授权。
