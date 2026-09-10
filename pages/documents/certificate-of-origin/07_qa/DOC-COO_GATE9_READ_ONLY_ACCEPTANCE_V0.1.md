# DOC-COO Gate 9 Read-only Acceptance V0.1

日期：2026-09-08（Asia/Shanghai）。

## 1. 结论

| Item | Decision |
|---|---|
| Page / route | `DOC-COO` / `/documents/certificate-of-origin/` |
| Gate 8 return | `INTAKE_ACCEPTED_FOR_REVIEW / REQUIRED_EVIDENCE_RETURN` |
| Gate 9 | `NOT_PASS / REQUIRED_EVIDENCE_REMAINS` |
| Review ID | `DOC-COO-G9-PCR-01` |
| Confirmed implementation defects | `0` |
| Required open Findings | `2` |
| Gate 10 | `NOT_AUTHORIZED` |

当前实现的正文、页面行为、三端视觉、九档宽度、SEO/Schema、请求文件预填和共享组件组装均未发现实现偏差。Gate 9仍不能关闭，因为`COO-G9-07`的指定无障碍覆盖未完成，且`COO-G9-15`的强制开发身份/独立复验链不完整。

本记录不授权修改D16代码、真实表单发送、生产WordPress写入、合并、部署、DNS、发布、sitemap或索引。

## 2. 验收对象与运行身份

| Field | Observed value |
|---|---|
| Approved package | `COO-G6-HANDOFF-04` V0.4 / SHA-256 `41a8f87d32b4c27c45192eb35e17049a24a30ad60d0565f23fdeaaa6f1eb9788` |
| Unified Gate 8 return | `docs/architecture/GATE8_BR_CL_COO_FOUR_PAGE_IMPLEMENTATION_RETURN_V1.0.md` |
| D16 receipt | `D:/16Wordpress_nextjs/docs/verification/tio2-my/document-coo/DEVELOPMENT_RECEIPT_2026-09-08.md` |
| Repository / branch | `D:/16Wordpress_nextjs` / `codex/poland-development` |
| Pre-work HEAD | `c2764e6138aa0dc37d1f6cab04bc1ae39f45aecb` |
| Implementation commit | `4ce8ecd121f5c4b7c89747d82d00aaff4a128b55` |
| Receipt-only commit / inspected HEAD | `155fec8025c8fb679c9cbc90549e4533de8aca84` |
| Receipt-only delta | one file: DOC-COO development receipt |
| Worktree at intake | clean |
| Runtime | `http://127.0.0.1:3024`; `SITE_ID=tio2-my`; `NEXT_DIST_DIR=.next-document-coo-g8` |
| Build ID | `VNjQyPGmNIKlIArsXDx9J` |
| Actual HTML | HTTP 200; SHA-256 `0761497701fda70816a8e2a4dc4052fa05c8ea453001a02a3662e3544f35e2e4` |

Gate 9以只读方式确认implementation commit存在、receipt commit的父提交就是implementation commit、当前工作树干净，且receipt commit只增加回执文件。端口、进程环境、构建目录、Build ID和实际静态资产链已相互核对。D23未在D16运行代码测试、构建、CMS或修复操作。

## 3. 独立页面观察

- 页面返回HTTP 200，`lang=en`，唯一H1及六个批准模块按锁定顺序完整呈现；未见内部治理词、可用性承诺、签发机构或交易结果扩张。
- Title、Meta、Canonical、`noindex,nofollow`、`WebPage`与`BreadcrumbList`符合Gate6；页面没有增加Product、FAQ或本页Organization节点。
- 两个Request Origin Documentation入口均带唯一批准的`origin_supplier_qualification`与隐藏`DOC-COO`来源。接收页可见选择可移除；Grade、Country/Region为空；来源不向买家显示。
- 初始进入、移除、Back、Forward、直接重访和不支持值丢弃均按规范恢复，Canonical保持干净；本轮未发送真实表单。
- 1440、1280、1024、900、768、600、430、390、360九档宽度均无横向溢出、裁切或不可达主操作；主内容链接的目标高度均不低于44 CSS px。
- 390宽度下Mobile Menu和Cookie Settings均能锁定焦点、以Escape关闭并把焦点还给触发器；逐个主内容链接的键盘焦点具有可见的3px青绿色外框。
- 独立打开并对照了1440/768/390三张实际完整页面与批准冻结图；桌面表格到窄屏记录块的变化、层级、正文、间距、换行、Logo和共享Chrome无实质偏差。
- `/`、`/documents/`、`/products/`和`/request-documents/`在同一运行环境均返回HTTP 200。

## 4. 稳定接受条件结果

| ID | Result | Gate 9 evidence / limit |
|---|---|---|
| `COO-G9-01` | `PASS` | 实际DOM、正文和完整页面视觉证明一个H1、六模块、批准顺序与Buyer Clean边界。 |
| `COO-G9-02` | `PASS` | 实际公开输出未扩张公司/批次/证书/关税结论；2026-09-08重新读取RMCD批准来源，页面仍标示信息截至2025-10-10、更新于2026-01-05。 |
| `COO-G9-03` | `PASS` | 两个实际入口均只预填可见可移除的origin category，来源隐藏，无Grade/目的地/方案。 |
| `COO-G9-04` | `PASS` | 独立浏览器序列覆盖初始、移除、Back、Forward、直接重访与不支持值丢弃。 |
| `COO-G9-05` | `PASS` | 三张独立完整页面图已与批准冻结图逐张打开比较，无实质偏差。 |
| `COO-G9-06` | `PASS` | 九档宽度独立几何检查通过。 |
| `COO-G9-07` | `NOT_VERIFIED / BLOCKING` | 本轮独立覆盖键盘、Menu、Cookie、焦点和44px；Gate8有Axe、forced-colors、reduced-motion结果。但真实浏览器UI 200% zoom、命名非Chromium引擎、真实设备和屏幕阅读器证据未提交，合同明确规定未测必需状态阻止本条件通过。见`DOC-COO-G9-F01`。 |
| `COO-G9-08` | `PASS` | D16 repository fixture与WordPress config均为SHA-256 `82c1c20791a7ab9391a73b623b6633a68094e3714cef2cc94d65087641f84ead`；源码、运行和回执未依赖D23绝对路径。 |
| `COO-G9-09` | `PASS_WITH_RECEIPT_AND_SOURCE_TRACE` | Gate8记录真实WordPress正向读回及missing/wrong/unpublished负向探针；Gate9只读检查route/query/DTO的fail-closed链及实际正常输出，未发现跨scope或原始对象泄漏。独立命令复跑并入`COO-G9-15`的开放项。 |
| `COO-G9-10` | `PASS` | clean/query页面的Head、lang、Canonical、robots与允许的JSON-LD图一致。 |
| `COO-G9-11` | `PASS` | 实际页面继承当前Malaysia Header/Menu/Footer/legal/Cookie owners；Documents current、固定RFQ、生产Logo、无可见CURRENT或本页fork。 |
| `COO-G9-12` | `PASS_WITH_RECEIPT_AND_SOURCE_TRACE` | 实际正向scope和源码隔离链一致；Gate8记录missing/wrong scope、cache和route负向结果。独立命令复跑并入`COO-G9-15`开放项。 |
| `COO-G9-13` | `PASS_WITH_GATE10_DEPENDENCIES` | 实际链接进入当前CONV-DOC；当前owner Manifest的browser-direct Web3Forms、provider accepted、mailbox未确认和生产控制开放状态被准确继承；合同禁止本页Gate9擅自重发。 |
| `COO-G9-14` | `PASS` | 两个RMCD链接均使用批准URL与可用标签；官方来源在本轮可访问且日期/一般性规则未发生影响批准正文的变化。 |
| `COO-G9-15` | `FAIL / BLOCKING` | final commit、当前clean、测试文件hash、GREEN/typecheck/lint/build结果可追溯；但回执没有保存pre-work与final的实际status输出，也没有在pre-work dirty时逐路径清单和分类。Gate6硬合同明确规定缺任一身份字段或dirty-path inventory即不通过。此外，Gate6要求Gate9独立复跑GREEN/typecheck/lint/build，而D23根规则禁止在D16执行这些操作，本轮没有可归于独立Gate9的复跑证据。见`DOC-COO-G9-F02`。 |

## 5. Required Findings

### `DOC-COO-G9-F01` — 必需无障碍环境覆盖未完成

- 关联：`COO-G9-07`、`COO-G6-D08`。
- 级别：`P1 / REQUIRED EVIDENCE GAP`。
- 预期：命名并验证真实浏览器UI 200% zoom、至少一个非Chromium引擎、真实设备及屏幕阅读器覆盖，连同合同已有Axe、键盘、forced-colors和reduced-motion证据形成完整条件。
- 实际：Gate8回执明确把这些范围列为open；Gate9也没有收到可继承的同build/同页面证据。
- 影响：不证明页面存在无障碍缺陷，但`COO-G9-07`不能PASS，Gate9不能关闭。
- Owner / closure：Gate8/可执行环境owner补交与`4ce8ecd...`及Build ID绑定的命名证据；Gate9按原ID独立核验。若运行发现缺陷，再按实际组件owner分派修复。

### `DOC-COO-G9-F02` — 强制身份记录与独立命令链不完整

- 关联：`COO-G9-15`。
- 级别：`P1 / REQUIRED HANDOFF DEFECT`。
- 预期：保存pre-work与final的exact identity/status commands and outputs；pre-work dirty时逐路径登记并区分预存与授权任务变化；Gate9能够据此重建并独立复跑GREEN、typecheck、lint和Malaysia production build。
- 实际：回执列出命令名、HEAD、branch、概括的dirty范围和当前clean结论，但没有原始status输出或每一dirty path清单。D23规则禁止本验收任务进入D16执行测试/构建，因此本轮不能补成独立Gate9复跑。
- 影响：Gate8最终commit仍可读取，页面实际运行也可观察，但Gate6明确的强制审计链没有满足，`COO-G9-15`为FAIL。
- Owner / closure：Gate8先从当时保存的日志、shell记录或其他不可变证据补回原始输出和逐路径清单；不得事后把当前clean冒充pre-work状态。随后由获准执行D16验证且与实施者身份独立的验收方运行合同指定命令，提交exact outputs、commit/build关联和最终状态，Gate9再定向复验。

## 6. 官方来源与独立证据

本轮读取的官方来源：`https://www.customs.gov.my/en/business/facilitation/rules-of-origin-roo/faq-rules-of-origin`。其页面仍显示2026-01-05更新、信息截至2025-10-10，并继续说明原产地证明、PCO/NPCO及一般支持材料边界。该核对只支持已批准的一般性说明，不扩张成TiO2 Malaysia具体批次、证书可用性、优惠待遇或税率结论。

独立截图保存在`07_qa/gate9-v0.1/`：

| File | SHA-256 |
|---|---|
| `document-coo-1440.png` | `30122575313e724785e286275e4aeae7d0ed36aea13f9def947f6200b5fd1515` |
| `document-coo-768.png` | `188e79f219ba2bab8da8de9e0887420e5198f1442468c8d62249acc1eac6dce2` |
| `document-coo-390.png` | `07fcf4a8f073fbf07c460918e068513597dcdac220967ed853fdd47a0b445cdf` |

## 7. 当前停止点

`DOC-COO implementation behavior = NO CONFIRMED DEFECT`。

`DOC-COO Gate 9 = NOT_PASS / REQUIRED_EVIDENCE_REMAINS`。

下一步只处理`DOC-COO-G9-F01`和`DOC-COO-G9-F02`，不要求返工已通过的正文、视觉、SEO/Schema或请求预填。`PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED`继续保留为发布边界；Gate10仍未授权。
