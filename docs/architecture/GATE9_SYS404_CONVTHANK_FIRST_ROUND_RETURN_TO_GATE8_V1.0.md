# SYS-404 / CONV-THANK Gate 9 首轮退回 Gate 8 V1.0

日期：2026-09-08  
控制 ID：`G9-SYS404-CONVTHANK-RETURN-20260908-01`  
页面：`SYS-404`、`CONV-THANK`  
结论：`FIRST_ROUND_COMPLETE / NOT_PASS / TARGETED_RETURN_AUTHORIZED`

## 1. 依据与固定对象

- 用户要求先完成两页 Gate 8 和 Gate 9，再启动全站预发布测试。
- Gate 8 候选：`codex/sys404-convthank-gate8`；implementation `1571a67da57d5dd6f2b358ba20508ba46c76f581`；Build `2z5DYuzAHx0An8WWlUsz2`；原 evidence `7fa0b1026c80c4b12bc1725fff1ad7ef1492a676`；当前 clean HEAD `35a99a12cf0c675c72a2d181e687a2076b0e2fab`。
- 独立审查：[首轮报告](../../pages/system/404/07_qa/SYS404_CONVTHANK_GATE9_FIRST_ROUND_INDEPENDENT_ACCEPTANCE_V1.0.md)，SHA-256 `207B6A845D7FB545FF4F70780B3495462349C0D6C4E63F5DAFDDD2D7A698562E`。
- 独立证据：[索引](../../pages/system/404/07_qa/SYS404_CONVTHANK_GATE9_FIRST_ROUND_EVIDENCE_INDEX_V1.0.json)，35项，SHA-256 `18874D28FFDF1828826F7FBEDD3F4B69D6B71E8CC833DC7E2CA967AFBA7BFE10`。
- 覆盖：SYS-404 11/11 AC；CONV-THANK 16/16 AC；9个稳定Finding。

## 2. 保留通过范围

Gate 8不得重写已批准正文或重做无变化的三宽页面主体。保留：

- SYS-404普通未知URL的批准内容、层级、SEO排除和三宽视觉；
- CONV-THANK Direct、Quote、Documents、Sample四状态及八类负向状态；
- 同会话marker、10分钟TTL、allowlist和无买家数据边界；
- 已通过的metadata、无Schema、sitemap排除、键盘、axe、Chromium/Firefox代理证据。

## 3. 定向退回

| Finding | Gate 8 / owner动作 | Gate 9关闭证据 |
|---|---|---|
| `SCT-G9-F01-SYS404-SPECIAL-PATH` | 使`/404/`也返回批准的SYS-404恢复内容及真实404状态，不暴露框架默认页 | 同一最终候选的raw response、完整运行截图、noindex及sitemap证据 |
| `SCT-G9-F02-CONTACT-TARGET` | 不修改批准href；等待`CONTACT-001`独立页面完成并进入最终候选 | `/contact/`为登记页面且从404页点击可达；无未知上下文转发或成功事件 |
| `SCT-G9-F03-APPLICATIONS-TARGET` | 从当前local `main`整合已存在的APP-000，不复制或重建页面 | `/applications/`返回APP-000；Thank You动作点击与返回通过 |
| `SCT-G9-F04-CONSENT-PREFERENCES` | 由共享Consent owner补齐当前状态、保存/接受、拒绝/撤回和持久化选择 | accept/reject/withdraw/persist矩阵、键盘/对话框、存储与data-layer无买家数据证据 |
| `SCT-G9-F05-REAL-RECEIVERS` | RFQ、Documents、Sample按当前真实接收合同分别完成正向、负向/歧义、重试及重复抑制；模拟只作局部证据 | 三流程provider确认与实际receiver/inbox关联；只有严格正向谓词产生marker/跳转 |
| `SCT-G9-F06-SUCCESS-EVENTS` | 补齐三类独立成功事件及Consent基数；不得包含PII/业务字段 | 三流accept/deny/withdraw及代表性非成功trace；exactly once；`ad_personalization=denied` |
| `SCT-G9-F07-DEVICE-AT-ZOOM` | Gate 8保持可测最终候选；本项由Gate 9设备/可访问性复验执行 | native 200%、物理触控或批准代理、命名读屏/浏览器记录，覆盖两页及共享对话框 |
| `SCT-G9-F08-SCOPE-CACHE-MATRIX` | 在最终集成候选补齐正确/错误/缺失scope和cold/warm/invalidation行为 | 路由、共享组件、SEO、表单出口及用户结果隔离矩阵 |
| `SCT-G9-F09-EVIDENCE-IDENTITY` | 返回一个包含或明确处置追加Web3Forms证据的统一evidence HEAD；不得隐藏implementation/Build变化 | `validate_evidence_manifest.py`通过；两轮`gate9_preflight.py`通过 |

## 4. 边界与交接

本次用户指令授权为关闭两页Gate 9所需的定向Gate 8返修，但不授权跳过`CONTACT-001`自身Gate流程，也不授权更改404页批准链接。D16先完成其可负责的F01、F03–F06、F08–F09并返回固定候选；F07由Gate 9执行。F02保持外部页面依赖，须由总控另行取得`CONTACT-001`阶段授权后处理。

返修回执必须沿用上述Finding ID，逐项给出改动或依赖状态、implementation/evidence/Build/runtime、测试和clean worktree。不得自行关闭Gate 9、合并、推送、部署、发布或启动Gate 10。全站预发布测试保持暂停。
