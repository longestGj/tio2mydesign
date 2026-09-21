# CONV-RFQ D32 Gate 9 首轮独立验收 V0.1

日期：2026-09-20。Review ID：`CONV-RFQ-D32-G9-20260920-01`。执行者：`/root`，未参与本轮D32实现。对象：`CONV-RFQ` / `/request-a-quote/`。

## 结论

**13项AC通过，AC-09保留为集成未验证，AC-11失败。Gate 9退回Gate 8返修；页面未签`READ_ONLY_QA_APPROVED`。**

| 层级 | 状态 |
|---|---|
| RECHECK_SCOPE_STATUS | `INITIAL_REVIEW_COMPLETE / RETURN_REQUIRED` |
| PAGE_GATE9_STATUS | `NOT_PASS / AC11_RESPONSIVE_VISUAL_FAIL` |
| INTEGRATION_STATUS | `NOT_READY / PRODUCTS_AND_EXTERNAL_ROUTES_OPEN` |
| RELEASE_STATUS | `NOT_AUTHORIZED / SIX_EXTERNAL_DEPENDENCIES_OPEN` |

实际候选：`D:/32Wordpress_new/.worktrees/conv-rfq-gate8`，branch `codex/conv-rfq-gate8`，baseline `ce4147c7076112934b3dc6d8d97e983efb045f2f`，implementation `f407f0ee526ac3d8fe1dc3efefa31364dc191030`，evidence/observed HEAD `616662613d170420dce6bcddd5f026652bc3b0d8`，worktree clean。制品 `wp-815f8debd4b2129b21a8cc67d8c410dea58e8986b4e3d38b2450ebbeeaaaeb58`；运行地址 `http://127.0.0.1:8242/request-a-quote/`；scope `tio2-my`。

机器交接Manifest SHA-256：`39FF4ED7653E22068BD9E1D91F7CD0684DFA11236EE7C8B776A3B55FD3E5F77C`；开发回执SHA-256：`67387557F2605E2859D7FFA5BD7307904A275CFB0FE7DB762FFC616AC674EDD9`。独立validator为175 PASS / 0 FAIL；两轮preflight均HTTP 200、scope和build marker正确。详见同目录[机器审计](CONV-RFQ_D32_GATE9_20260920/independent-machine-audit.json)、[浏览器审计](CONV-RFQ_D32_GATE9_20260920/independent-browser-audit.json)、[validator输出](CONV-RFQ_D32_GATE9_20260920/evidence-validation.json)与[preflight输出](CONV-RFQ_D32_GATE9_20260920/preflight.json)。

## 独立覆盖

使用内置浏览器直接打开固定候选，检查了页面身份、11个可编辑字段、15个Grade选项、7个Application选项、固定MT语义、空表单7项错误与summary焦点、允许及恶意prefill、canonical/OG/JSON-LD/noindex、内部ID泄漏、八个规定宽度、两列/单列切换、页面溢出、控件与链接几何、控制台以及实际视觉。未提交有效表单，未触发真实receiver或邮件。

机器侧独立验证Evidence Manifest全部26个声明证据的身份和hash，并核对Git ancestry、clean状态、制品、运行标记、17个零退出命令及30项Playwright通过结果。服务端安全、CMS迁移、scope隔离和fake receiver状态机结论采用可追溯的开发证据并辅以源码审读；不把开发自测本身称为独立Gate 9。

## AC结果

| AC | Gate 9结论 | 依据与限度 |
|---|---|---|
| RFQ-D32-AC-01 | PASS | 页面身份、Buyer Clean正文、模块顺序、无内部治理泄漏 |
| RFQ-D32-AC-02 | PASS | 11个可编辑字段、固定MT、15/7选项及精确标签/placeholder |
| RFQ-D32-AC-03 | PASS | 初屏无错；空提交7项错误、summary焦点、`aria-invalid`与`aria-describedby`正确 |
| RFQ-D32-AC-04 | PASS | fake receiver的pending、明确receipt、field error、failure、unavailable分支证据完整；未做真实提交 |
| RFQ-D32-AC-05 | PASS | 允许prefill可见可编辑；stale、broad market、内部ID和buyer字段安全清空；head不变 |
| RFQ-D32-AC-06 | PASS | 服务端再校验、nonce、origin、size、honeypot、rate和PII/secret负例证据有效 |
| RFQ-D32-AC-07 | PASS | CMS编辑、回显、还原、幂等迁移和失败恢复证据有效 |
| RFQ-D32-AC-08 | PASS | `tio2-my`正向、错scope、缺scope与隔离证据有效 |
| RFQ-D32-AC-09 | NOT_VERIFIED / INTEGRATION | 共享实现与Home回归通过；同分支Products仍404，不能补写为整项PASS |
| RFQ-D32-AC-10 | PASS | 精确Title/Meta/lang/canonical/OG；仅WebPage+BreadcrumbList；本地noindex |
| RFQ-D32-AC-11 | **FAIL** | F01与F02均为固定候选上的确认缺陷；原生200%另为E01未验证 |
| RFQ-D32-AC-12 | PASS_WITH_OPEN_DEPENDENCIES | 三个准确链接始终可见且无fallback；目标404保持DEP-03/04 |
| RFQ-D32-AC-13 | PASS | 当前无analytics，未新增；DEP-06保留为发布决定 |
| RFQ-D32-AC-14 | PASS_WITH_RELEASE_DEPENDENCY | runtime配置/fail-closed/secret与收件人非公开边界满足；生产binding和实收未声明 |
| RFQ-D32-AC-15 | PASS | commit/runtime/build/Manifest/hash/AC映射完整且独立预检通过 |

## 必修Finding

### CONV-RFQ-D32-G9-F01 — 交互目标尺寸未达到合同

优先级：`P1 / MUST_FIX`。关联`RFQ-D32-AC-11-RESPONSIVE-VISUAL`。

八个规定宽度均观测到：Breadcrumb `Home`约`40.2 × 44px`；表单Privacy说明内的`Privacy Policy`约`92 × 17px`。Gate 6 AC-11要求目标`≥44px`，Gate 5视觉规范也要求390px Mobile的按钮和链接至少44px高。Gate 8测试只统计`#rfq-form`内input/select/textarea/button的高度，未覆盖链接，也未核对宽度，因此该测试通过不能关闭本Finding。

返修要求：修正这两个命中区，并把自动测试扩展到页面全部可见交互元素、同时核对宽和高；八个宽度重新出几何结果。不得改链接目标或Buyer Clean文案。

### CONV-RFQ-D32-G9-F02 — 页面专属视觉未复现批准Gate 5结果

优先级：`P1 / MUST_FIX`。关联`RFQ-D32-AC-11-RESPONSIVE-VISUAL`。

与批准的1440/390资产逐项对照后，运行时存在三处稳定差异：Desktop `Website`保持半宽并留下右侧空列，批准资产为整行；批准的Teal大写分组标题及分隔线被替换成Navy标题式legend且无分隔线；批准的低权重、带边框/Soft背景`Other request types`面板被替换成无框白底整段。它们属于页面专属视觉，不是D32共享Header/Footer的owner更新。

返修要求：按Gate 5 Approved Baseline Manifest V1.0及其1440/768/390资产恢复上述布局和视觉语法，同时保留当前精确文案、语义fieldset/legend和D32唯一共享Chrome；增加能捕获span、legend样式/分隔线和Other panel容器的结构/几何断言。

## 未验证证据与用户范围决定

`CONV-RFQ-D32-G9-E01`：内置浏览器未能执行浏览器原生UI 200% zoom；Gate 8仅有320/640重排代理，因此该项仍为`NOT_VERIFIED`。返修候选需提供固定commit上可关联的原生200%前后证据，或由用户明确豁免该项。

用户已在本对话明确决定，此页不要求此前说明的实体手机触控与命名辅助技术证据。因此真实物理触控及VoiceOver/TalkBack/NVDA/JAWS检查记为`USER_WAIVED`，不作为本轮阻断；本次退回只依据F01、F02及仍未关闭的原生200%证据。

## 外部依赖与停止边界

六项依赖保持原状态：provider、Privacy运营事实、Privacy route、Sample/Documents sibling routes、Cookie/CMP、Analytics/consent。当前`/privacy-policy/`、`/request-sample/`、`/request-documents/`和`/products/`均404；这是Integration/Release边界，不要求RFQ owner克隆页面、改链或隐藏入口。

本轮没有真实Web3Forms提交、邮件、生产CMS写入、D32代码修改、push、PR、merge、部署、发布、DNS、sitemap、index或Gate 10。Gate 8只返修F01/F02并补E01证据，保留其余有效证据；提交新implementation/evidence HEAD和更新Evidence Manifest后，Gate 9做定向复验。
