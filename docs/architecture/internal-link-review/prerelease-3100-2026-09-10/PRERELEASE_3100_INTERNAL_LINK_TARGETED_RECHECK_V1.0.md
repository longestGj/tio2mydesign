# 3100预发布内链定向复验 V1.0

## 0. 结论

| 字段 | 结论 |
|---|---|
| Parent Review ID | `PRERELEASE-3100-IL-RR-20260910-01` |
| Recheck run | `R1` |
| 模式 | `INTERNAL_LINK_REVIEW / RUNTIME_REVIEW / TARGETED_RECHECK` |
| 精确候选 | implementation `c18abbc5f7216508e16163c0dfe25b0e0ecc64a6`；evidence HEAD `de8128e57a34877fc90366c8a61af084dd22b64c`；Build `ATKoXHh9g15QA-Y6c8Y2H` |
| Runtime | `http://127.0.0.1:4511`；`site_scope=tio2-my` |
| `RECHECK_SCOPE_STATUS` | `PASS` |
| `SCT-G9-F02-CONTACT-TARGET` | `CLOSED_FOR_EXACT_CANDIDATE` |
| `ILR3100-F01-CANONICAL-REDIRECT-PARITY` | `CLOSED_FOR_EXACT_CANDIDATE` |
| `INTERNAL_LINK_REVIEW` | `PASS_FOR_EXACT_CANDIDATE` |
| Gate 9复用 | `EVIDENCE_REUSABLE_FOR_RECHECKED_SCOPE` |
| 页面整体Gate 9 | `NOT_DETERMINED_BY_THIS_SPECIALIST_RECHECK` |
| Gate 10 / 发布 | `NOT_AUTHORIZED` |

两个原Finding在同一精确候选上均满足关闭条件。本结论只关闭本次内链返修范围，不宣布58个对象或CONTACT-001的其他Gate 9层通过，也不授予Gate 10、部署、公开sitemap、索引或发布权限。

## 1. 身份与机器交接

独立重算的交接文件SHA-256与Gate 8交回值一致：

| 文件 | SHA-256 |
|---|---|
| `gate8_evidence_manifest.json` | `734ae37e7d8630477132046c069097d8119a8e4b8d71ae6660c56afc504d76ac` |
| `manifest-validation.json` | `91195178ec26493430ae63a63fb5554a75503b86124abb8e572a95e334a01723` |
| `gate9-preflight.json` | `dedf36f2750fe5dc892e0fc31b431a91d73bafbede64ce606c5b68d819b53257` |

本Reviewer重新运行官方validator，结果`PASS`；随后重新运行两轮preflight，8/8请求`PASS`。Git HEAD与evidence HEAD一致，工作树clean，implementation是evidence HEAD祖先，Build目录中的Build ID与Manifest一致。`develop`当前集成记录为`891058bae3803360a5d2b75d55c46bcf9b5e82a3`且包含evidence HEAD；它只作集成记录，runtime仍绑定implementation commit `c18abbc…`。

## 2. 独立运行复验

采集使用GET-only HTTP和独立Playwright Chromium运行。直接路径以`redirect=manual`检查；浏览器逐一核对最终URL与hydration后DOM。浏览器网络限制在`http://127.0.0.1:4511`，未请求外部域名，未触发表单、`mailto:`、Cookie写入或任何业务动作。

| 核验集合 | 应检 | 实检结果 |
|---|---:|---|
| 原29个受影响页面 | 29 | 29/29直接`200`且无重定向；29/29浏览器最终URL保持尾斜杠；Canonical精确一致；hreflang及适用JSON-LD URL无方向/查询违规 |
| 原47个query-aware目标 | 47 | 47/47直接`200`且无重定向；47/47浏览器保留path与query；Canonical均为对应queryless生产身份 |
| 58个预发布共享消费者 | 58 | 58/58页面身份、语言和预期索引状态通过；58/58含批准Header/Footer目标集合；共享组装失败0 |
| 同源内部href | 2,375实例 | 非根、非文件路径尾斜杠违规0 |
| 直接受影响fragment | 123实例 | 123/123目标存在 |
| Contact原实例 | 3 | 3/3实际点击到正确CONTACT-001 |

集合并非由Home crawl推导。29页集合取自原机器清单的`canonical_path_mismatches`，47目标取自原清单的成功重定向query-aware目标，58消费者取自Gate 8 Manifest并排除CONTACT-001；对应规范化集合SHA-256分别为`e392784f…`、`f41acc4f…`、`9e33af8c…`，完整值见机器证据。

## 3. Finding关闭依据

### `SCT-G9-F02-CONTACT-TARGET` — CLOSED

ABOUT-001两处`Contact Us`和真实SYS-404恢复页一处`Contact Our Team`均保留raw href `/contact/`，解析为`http://127.0.0.1:4511/contact/`，实际点击后的最终URL仍为该地址。目标直接返回`200`，H1为`Contact TiO2 Malaysia`，Canonical为`https://tio2malaysia.com/contact/`，`lang=en`，`data-page-id=CONTACT-001`，`data-site-scope=tio2-my`。

入口没有被删除、隐藏或改指RFQ。About两处相邻CTA上下文仍存在；SYS-404仍保留`Explore Products`、`Go to Homepage`、`Request Documents`、`Contact Our Team`和`Request a Quote`五项恢复行动。CONTACT-001继续作为第59个依赖对象单列，不并入58对象完成集合。

### `ILR3100-F01-CANONICAL-REDIRECT-PARITY` — CLOSED

29个原受影响登记路径现在直接`200`且不再308到无尾斜杠地址。浏览器最终URL、Canonical、hreflang及适用JSON-LD URL沿批准尾斜杠方向一致。47个原query-aware变体全部保留原query，且Canonical不含query。58个共享消费者共检查2,375个同源href，未发现无尾斜杠方向回归；123个fragment目标全部存在。

私有预发布边界保持：`robots.txt`为`Disallow: /`；常规对象与Contact保持`noindex, nofollow`，SYS-404保持`noindex, follow`；`sitemap.xml`仍只有生产Home一条`loc`。本轮不要求公开完整sitemap，也未启动索引。

## 4. Gate 8全仓Vitest失败核对

Gate 8没有把全仓Vitest写成PASS。日志准确记录`9 files / 25 tests failed`、`361 files / 3,087 tests passed`、`52 tests skipped`：

- 21项来自七个Site A WordPress/editorial/product import或audit测试文件，直接原因是隔离工作树缺少`wordpress/.env`；
- 1项为GraphQL headers-first stalled body的5秒timeout测试超时；
- 3项为PRODUCT-PROC-SU、MARKET-EU-DE、MARKET-EU-IT的five-core editorial source-only attribution断言。

这些失败没有执行三处Contact入口、CONTACT-001身份、29个路径、47个query-aware目标、共享Header/Footer URL方向、fragment或私有索引边界，因此不构成本次两个Finding的反证。它们仍是全仓未通过事实，不能据本次专项PASS声称全仓测试通过。

## 5. Gate 9可复用范围与限制

Gate 9可复用本报告绑定的精确候选证据：三处Contact入口及目标身份、29个路径的route/Canonical/hreflang/适用Schema一致性、47个query-aware目标、58个共享Header/Footer消费者、123个fragment以及私有robots/held sitemap边界。若implementation、evidence HEAD、Build、runtime数据或共享配置变化，须重新判断证据可复用性。

本专项未检查真实表单接收、provider/inbox、真实设备、辅助技术、完整视觉、全部SEO/Schema或生产发布配置。原58对象预发布中的表单接收、原生200%与设备/AT等开放项，以及各页面现存Gate 9、Privacy和发布依赖继续由原责任链处理。公开robots/sitemap与索引资格仍留到获得发布准备授权后复验。

本轮停止点为`TARGETED_RECHECK_COMPLETE / RETURN_TO_PROJECT_CONTROL`。Gate 8可停止针对这两个Finding的继续返修；runtime仍按`GATE9_PASS_OR_RETURN_NOTICE`保持，直到总控向原Gate 8任务发出正式通知。

机器证据：[PRERELEASE_3100_INTERNAL_LINK_TARGETED_RECHECK_EVIDENCE_V1.0.json](PRERELEASE_3100_INTERNAL_LINK_TARGETED_RECHECK_EVIDENCE_V1.0.json)。
