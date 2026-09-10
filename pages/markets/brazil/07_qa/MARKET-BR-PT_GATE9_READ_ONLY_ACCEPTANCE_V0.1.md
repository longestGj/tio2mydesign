# MARKET-BR-PT Gate 9 Read-only Acceptance V0.1

日期：2026-09-08。Review ID：`BR-PT-G9-INITIAL-01`。结论：**`DRAFT_FOR_BATCH_PROJECT_CONTROL_REVIEW / GATE9_NOT_PASS / CHANGES_AND_EVIDENCE_REQUIRED`**。

## 1. 验收对象和独立性

本轮验收对象是 `MARKET-BR-PT`、`/pt-br/markets/brazil/`、`site_scope=tio2-my`，批准合同为 `BR-PT-G6-HANDOFF-02` V0.2，开发实现提交为 `4ce8ecd121f5c4b7c89747d82d00aaff4a128b55`，回执提交为 `155fec8025c8fb679c9cbc90549e4533de8aca84`，运行实例为 `http://127.0.0.1:3024`。

审查者未参与本页Gate 8实现或修复。本轮只读D16源码、提交、构建产物、开发回执与运行实例；没有修改D16、运行D16测试/构建/服务、写CMS或真实提交表单。

运行身份已建立：3024返回的PT-BR HTML与 `.next-document-coo-g8/server/app/pt-br/markets/brazil.html`逐字相同，两者SHA-256均为 `1e3f6025e0bbb14f6ae9b9fc56a2c6cd544d59207a10b1182d903583b0ce754c`；该构建的Build ID为 `VNjQyPGmNIKlIArsXDx9J`。receipt commit相对implementation commit只增加DOC-COO开发回执，未修改实现。

## 2. 买家路径结论

PT-BR主体内容、标题层级、准确正文、单次英文目的地提示、SEO/Schema/noindex、三端基本几何、RFQ初始Brazil上下文、Request Documents空初始状态、共享菜单和Cookie对话框均在准确运行对象上成立。

但完整买家路径不成立：三个Application目标和Brazil Trade Resource目标实际最终响应均为404；此外，买家把RFQ目的地从`Brazil`改为`Argentina`后，经浏览器Back→Forward回到RFQ，字段被重新覆盖为`Brazil`，违反“买家编辑不得被覆盖、历史导航保留编辑”的明确合同。

## 3. 接受条件结果

| Acceptance ID | 结果 | 独立观察与边界 |
|---|---|---|
| `BR-PT-G9-01` | `PASS` | 准确构建运行HTML包含B V0.2全部正文、一个H1、既定模块顺序、一次英文目的地提示；未发现Gate/Finding/readiness等内部状态。 |
| `BR-PT-G9-02` | `NOT_VERIFIED` | 1440/768/390运行图已打开核对；三视口无横向溢出，当前可见控件未发现小于44px，PT-BR长文无明显裁切或重叠。native 200% zoom、真实触控设备、非Chromium和命名辅助技术仍无独立证据。 |
| `BR-PT-G9-03` | `FAIL` | PT路由与query variant均200且保持PT身份/self-canonical；但Coatings、Plastics、Masterbatch及Brazil Trade四个批准目标最终均404，见`BR-PT-G9-F01`。 |
| `BR-PT-G9-04` | `FAIL` | RFQ初始只预填可见`Brazil`且其他字段为空；编辑为`Argentina`后Back→Forward恢复成`Brazil`，见`BR-PT-G9-F02`。未执行真实提交。 |
| `BR-PT-G9-05` | `NOT_VERIFIED` | 运行页以source-only进入Request Documents，Grade、Country/Region和所有Document Type为空；未在无真实提交授权下验证“提交前必须选择allowlisted Grade”的实际阻断链。 |
| `BR-PT-G9-06` | `NOT_VERIFIED` | 未授权真实发送；provider接受、邮箱/业务收件、超时/网络/non-JSON/non-acceptance、retry及生产隐私数据流均未独立验证。 |
| `BR-PT-G9-07` | `PASS` | Title、Description、`lang=pt-BR`、self-canonical、`og:locale=pt_BR`、`noindex,nofollow`、WebPage/BreadcrumbList均符合合同；robots.txt全站Disallow，sitemap不含PT或EN Brazil路由；query variant无冲突。 |
| `BR-PT-G9-08` | `PASS` | 同轮读取PT及EN响应：各自200、自canonical，双方均无alternate，PT无`x-default`；符合当前conditional hold，不伪造reciprocal关系。 |
| `BR-PT-G9-09` | `NOT_VERIFIED` | Mobile Menu可打开，焦点进入Close，Escape返回Menu；Cookie Settings打开原生dialog，焦点进入Close，Escape关闭；未完成screen-reader、native 200%及全部distinct-control焦点闭环。 |
| `BR-PT-G9-10` | `NOT_VERIFIED` | 准确源码对route/query/cache使用`tio2-my`常量并在site不符时notFound，PT/EN当前运行内容与head未混合；未独立完成wrong/missing scope、cold/warm跨语言缓存、表单/媒体/analytics/storage完整隔离矩阵。 |
| `BR-PT-G9-11` | `FAIL` | 可见/SSR/JSON-LD保持Malaysia-origin、准确COO句、三项中性Application关系和`06/09/2026`日期边界，无Brazil实体、Grade推荐或确定贸易结论；但四个承担Application/Trade事实深度的owner目标404，当前完整关系不可达，纳入`BR-PT-G9-F01`。 |
| `BR-PT-G9-12` | `PASS` | 页面回执与统一返回包组合绑定批准包、implementation/receipt commits、clean最终状态、CMS记录、构建、实现位置、测试/视觉输入、开放项与rollback；运行HTML已独立绑定到Build ID对应静态产物。开发自检仅作输入，未重标为独立验收。 |

计数：`PASS=4`、`FAIL=3`、`NOT_VERIFIED=5`、`NOT_APPLICABLE=0`，合计12。

## 4. 稳定Finding

### `BR-PT-G9-F01` — 四个批准下游owner路由不可达

- Acceptance：`BR-PT-G9-03`、`BR-PT-G9-11`。
- 环境/版本：3024，Build `VNjQyPGmNIKlIArsXDx9J`，implementation `4ce8ecd…`。
- 复现：从PT页面打开Coatings、Plastics、Masterbatch或Brazil Trade Update链接；去除末尾slash的最终响应分别为404。
- 预期：每个批准目标解析到其同scope owner页面，不能死链或静默改投。
- 实见：四个目标均进入站点404页面。
- 影响：核心应用评估与时效贸易深度路径中断；`PROVISIONAL_ROUTE`仍不能据此升级为已具备完整发布条件。
- 责任方：`APP-COAT`、`APP-PLAS`、`APP-MB`和`RES-TRADE-BR`各自Gate 8/route owner；MARKET-BR-PT只需在目标就绪后定向复验实际链接。
- 关闭条件：同一候选环境四个精确目标均返回批准owner内容和正确scope/identity；重新点击PT入口并核对最终URL、页面身份、语言/owner边界和无跨scope fallback。

### `BR-PT-G9-F02` — RFQ历史导航覆盖买家已编辑的目的地

- Acceptance：`BR-PT-G9-04`。
- 环境/版本：3024，Build `VNjQyPGmNIKlIArsXDx9J`，Chromium headless独立操作。
- 复现：从首个`Solicitar cotação`进入RFQ，确认`destination_country=Brazil`；改为`Argentina`；Back回PT页；Forward回RFQ。
- 预期：买家编辑后的`Argentina`保留，source预填不得在历史恢复时覆盖买家值。
- 实见：Forward后字段恢复为`Brazil`，其他字段仍为空。
- 影响：买家明确修改的询价目的地可能被静默还原，提交语义可能错误。
- 责任方：`CONV-RFQ` receiver/state owner及Gate 8集成owner。
- 关闭条件：在新实现commit和绑定运行Build上复现initial→edit→Back→Forward，编辑值保留；同时回归fresh market entry仍只预填Brazil、inline source-only入口不预填目的地、direct revisit和其他字段无推断；不得真实发送。

## 5. 证据入口和停止边界

- 诊断：`D:/23MySec/pages/markets/brazil/07_qa/gate9-br-pt-v0.1/acceptance-diagnostics.json`
- 独立只读脚本：`D:/23MySec/pages/markets/brazil/07_qa/gate9-br-pt-v0.1/run-readonly-check.cjs`
- D16开发回执：`D:/16Wordpress_nextjs/docs/verification/tio2-my/market-br-pt/DEVELOPMENT_RECEIPT_2026-09-08.md`
- 统一返回：`D:/23MySec/docs/architecture/GATE8_BR_CL_COO_FOUR_PAGE_IMPLEMENTATION_RETURN_V1.0.md`
- 打开核对的运行图：`brazil-pt-1440.png` SHA `0284d099…562`；`brazil-pt-768.png` SHA `2e56bf37…61e`；`brazil-pt-390.png` SHA `18fbd1c3…f3bd`。

本报告不关闭Gate 9，不升级`PROVISIONAL_ROUTE`，不授权Gate 10、CMS/生产写入、真实表单发送、部署、发布、DNS、sitemap或索引。建议当前Manifest下一版登记：`Gate 8 IMPLEMENTATION_SUBMITTED / Gate 9 INITIAL_ACCEPTANCE_COMPLETE / NOT_PASS`，保留`BR-PT-G9-F01/F02=OPEN`及五项`NOT_VERIFIED`范围。
