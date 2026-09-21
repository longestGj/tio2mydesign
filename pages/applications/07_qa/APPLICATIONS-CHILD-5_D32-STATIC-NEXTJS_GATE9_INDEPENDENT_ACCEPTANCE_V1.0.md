# Applications 五个子页面 D32 静态 Next.js Gate 9 独立验收 V1.0

日期：2026-09-21  
审查对象：`APP-COAT`、`APP-PLAS`、`APP-MB`、`APP-INK`、`APP-PAPER`  
Gate 9 授权：`USER_EXPLICIT_START / GATE9_INDEPENDENT_READ_ONLY_ACCEPTANCE`  
审查状态：`INDEPENDENT_REVIEW_COMPLETE / RETURNED_TO_GATE8`  

## 1. 四层状态与结论

| 状态层 | 本轮结论 |
|---|---|
| `RECHECK_SCOPE_STATUS` | `EVIDENCE_INCOMPLETE / RETURN_REQUIRED` |
| `PAGE_GATE9_STATUS` | `NOT_PASS / TARGETED_REPAIR_AND_EVIDENCE_RETURN_REQUIRED` |
| `INTEGRATION_STATUS` | `NOT_READY` |
| `RELEASE_STATUS` | `NOT_AUTHORIZED` |

五页买家路径、内容、视觉、链接、SEO/Schema 和技术可收录性在当前本地 `out/` 上基本成立。独立检查完成165项静态/HTTP断言，五页在1440、768、390三个视口共15次浏览器观察中均无页面横向溢出；36条技术来源、五页模块数、Grade集合和顺序、Applications Hub五条子页入口、robots与sitemap均符合Gate 6合同。

本轮不签整体通过，原因收敛为两项：

1. 当前Applications交回没有`gate8-evidence-manifest-v1.1`，无法执行标准Manifest校验和两轮preflight；Gate 8 `RESULTS.md`记录的五个HTML hash又与当前`out/`五个HTML字节全部不同，因此当前可访问结果没有按现行合同绑定到指定Gate 8制品。
2. 内置浏览器复现Cookie Settings模态框的键盘边界问题：首控件`Shift+Tab`和末控件`Tab`都会短暂把焦点落到`BODY`，弹窗保持打开但失去可见焦点。打开、关闭、Escape和焦点返回均正常；移动菜单的焦点循环与返回正常。

第二项是范围很小的共享交互修正，不要求视觉返工。仓库另一独立工作树已有提交`8cee4e8`（`fix: trap cookie dialog keyboard focus`）可供Gate 8核对后等价实现；不得把该工作树本身当作本候选证据。

## 2. 候选身份与独立性

| 项目 | 结果 |
|---|---|
| Repository / worktree | `D:/32NextJS/.worktrees/applications-child-5-gate8` |
| Branch | `codex/applications-child-5-gate8` |
| Candidate commit | `0c117ee0941a3b307f761ff0db5ea67fc98b5a07` |
| Tree | `9033cf746f14154fc6895ed0d1357fcabbea07fa` |
| Parents | `b8b00e423d04c4143c967ffce86a5ba00e81338e`、`28a2f5d28334a253d3d2fd0a73bf789c3b180ddb` |
| Worktree | `CLEAN` |
| Gate 6 package SHA-256 | `71153324f999035d3bb42357d3a44170651f49c9de4ae36bad054e16e36baa8c` |
| Gate 8 RESULTS SHA-256 | `fca64e709cf2cc59b1726cbe26f46cb4c03d530adb07576952945212ab0afe06` |
| Gate 8 source package checks | 13/13 hash match |
| Observed static artifact | 93 files; localhost responses byte-equal to current `out/` files |
| D32 mutations by Gate 9 | None |

Gate 9只读取D32源码、Git身份、已生成`out/`、Gate 8结果与截图，并在D23保存独立证据。没有执行构建、测试、代码修改、提交、合并、推送、部署、DNS、Search Console或真实RFQ提交。

## 3. Findings

### `APP5-D32-G9-F01` — Gate 8制品证据链不完整

- 严重度：`P1 / ACCEPTANCE_BLOCKING`
- 分类：`EVIDENCE_INCOMPLETE`
- 关联：`APP5-G9-11`、`APP5-G9-12`
- 预期：按`GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.2`提供`gate8-evidence-manifest-v1.1`、完整制品清单、已提交的build binding evidence、回执/evidence引用，并通过Manifest validator与两轮preflight。
- 实际：Applications工作树和已登记Gate 8目录中没有本批标准Manifest；因此validator/preflight没有合法输入。Gate 8结果记录的五个HTML hash与当前`out/`观察值全部不同。
- 影响：当前`out/`可独立检查且页面结果良好，但不能据此证明它就是Gate 8所声明测试通过的精确制品；`npm run typecheck`、`npm run build`、`npm test`与当前可访问字节的同候选绑定未关闭。
- Owner：`03开发` Gate 8。
- 关闭条件：返回当前格式Manifest和绑定证据；validator及`gate9_preflight.py --rounds 2`通过，五条HTTP响应与Manifest指定制品字节一致。

Gate 8 `RESULTS.md`与当前`out/`的HTML SHA-256对照：

| 页面 | Gate 8记录 | Gate 9当前观察 |
|---|---|---|
| Coatings | `9b1e1f44586321cd1f4b9044445c9dd2094fdb972d89ef59dd7d9e6503108733` | `bf58b6b21081888c06d9ed9919ca03f145fab5441a81eee62eec769d9dc3264b` |
| Plastics | `2f57bfc639c37f94ea642995fdf2d8da648d69f579ecf035e2541f958700ee29` | `b0fd05d83eb98fe1933945fc98b0355dbb319205481f753b4320ce1ba59b0d13` |
| Masterbatch | `8280952389a968364cecc149fabf2fd6d276fa149d3b4a98fbfc56840c3a1713` | `46820a5e59b63f9ead6f09acba43543e34aadd4b09cd9f6725a9104166ed44a0` |
| Printing Inks | `083e0c08f3c3dffaf3298b29defaa897f2b0e68f8a40a4863e7f85e20d621e75` | `1c1194f5243c9115bc5979b6df0455a68e2b41f7a30cc5cd8d5fc5959d3e62ee` |
| Paper | `9209d4f3ce59a2034cb464ba32cca49ea51268fe0c3fd147c64aca1256a55930` | `62a116d0f4ea48594b3b107445854fdc4cae9c17622be9d6ad76331150e00a82` |

### `APP5-D32-G9-F02` — Cookie模态框焦点边界丢失

- 严重度：`P2 / SMALL_TARGETED_FIX`
- 分类：`IMPLEMENTATION_FAILURE`
- 关联：`APP5-G9-05`
- 预期：Cookie模态框打开时，`Tab`与`Shift+Tab`保持焦点在弹窗内，并持续显示可见焦点。
- 实际：焦点初始位于`Close`；从`Close`按`Shift+Tab`后`document.activeElement`为`BODY`且不在dialog内。从`Read Cookie Policy`按`Tab`得到相同结果。弹窗仍打开。关闭后焦点正确返回`Cookie Settings`。
- 影响：键盘用户在边界会遇到一次无可见焦点状态。页面内容、视觉、RFQ、来源和索引语义不受影响。
- Owner：`03开发` Gate 8，共享Cookie组件。
- 关闭条件：在绑定后的同一候选中验证首控件反向循环到末控件、末控件正向循环到首控件、Escape关闭和触发器焦点返回。可核对现有独立修复提交`8cee4e8`，但需按当前候选正常集成和重新绑定证据。

## 4. `APP5-G9-01..12`结果

| ID | 结果 | 独立观察与证据 |
|---|---|---|
| `APP5-G9-01` | `PASS` | 五条静态目录路由均返回200；响应字节与当前`out/`对应HTML一致；实质正文存在初始HTML；公开HTML未出现WordPress、GraphQL或`/api/`内容依赖。 |
| `APP5-G9-02` | `PASS` | 五份仓库Markdown与批准Buyer Copy区域逐字相等（仅按合同抽取Coatings面包屑）；模块数10/12/11/11/11，来源6/13/4/6/7；Documents/Sample仅省略不可用控件，解释保留。 |
| `APP5-G9-03` | `PASS` | Grade集合与顺序精确；M-350是唯一已就绪Grade链接；Products、RFQ、Plastics↔Masterbatch链接正确；其余Grade/Documents/Sample无死链或隐藏href。 |
| `APP5-G9-04` | `PASS` | 内置浏览器1440/768/390共15次观察无横向页面溢出；代表性三档视觉和整页资源加载已查看；Gate 8另有五页三档全页/viewport证据30张。未把可接受的小视觉差异列为Finding。 |
| `APP5-G9-05` | `FAIL` | 36条外部来源URL、顺序、`https`、`target=_blank`与`noopener noreferrer`均通过；锚点与移动菜单通过；Cookie焦点边界失败，见`F02`。 |
| `APP5-G9-06` | `PASS` | 五页title、description、canonical、lang、OG、Breadcrumb和`WebPage`+`BreadcrumbList`通过；均为`index, follow`；robots允许；sitemap只含五个正式canonical且各一次。 |
| `APP5-G9-07` | `PASS` | 共享Header/Footer/Menu/Cookie/Logo/固定RFQ均复用；Applications为当前项；无买家可见`CURRENT`和Terms。Cookie组件的键盘缺陷只在`G9-05/F02`计一次。 |
| `APP5-G9-08` | `PASS` | `/applications/`可见五个子页动作，ItemList五项与之同序同URL；Specialty Materials没有子页动作。 |
| `APP5-G9-09` | `PASS` | Home、Products、M-350、Applications均返回200且H1正确；Gate 8报告的集成套件为9/9 Node合同、158个Playwright通过和1个有意跳过。没有发现本批造成的页面回归。 |
| `APP5-G9-10` | `PASS` | 五页公开HTML未出现内部Page ID、Gate/Finding、64位hash、D盘路径、readiness、旧origin或未就绪URL；品牌资源加载成功。 |
| `APP5-G9-11` | `NOT_VERIFIED` | Git候选身份和干净工作树已确认，Gate 8报告typecheck/build/test通过；但缺V1.1 Manifest且记录hash与当前制品不一致，无法把命令结果绑定为当前精确制品PASS。见`F01`。 |
| `APP5-G9-12` | `FAIL / EVIDENCE_INCOMPLETE` | 普通回执与结果说明存在，但缺当前合同要求的标准Manifest、完整制品绑定、validator和两轮preflight。Search Console仍是发布后责任，不是本轮失败原因。 |

## 5. 用户明确豁免与未测范围

以下三项均为`USER_EXCEPTED / NOT_TESTED / NON_BLOCKING`：

- 真实iPhone/Android实体设备；
- VoiceOver、TalkBack、NVDA、JAWS等人工辅助技术；
- 原生浏览器200%缩放。

390 CSS像素桌面浏览器响应式证据仍已完成。没有声称上述豁免环境已经通过。Google真实收录、生产发布、Search Console和真实表单提交均不属于本地Gate 9通过条件或本轮授权。

## 6. Gate 8定向返修范围

`03开发`只需处理以下范围：

1. 在当前候选的正常集成基础上修复共享Cookie模态框焦点循环，并加入首尾双向键盘回归断言；无需页面视觉返工。
2. 对返修后的精确静态制品生成并返回`gate8-evidence-manifest-v1.1`、完整93项或新构建实际数量的制品清单、已提交build binding evidence、回执/evidence引用和明确候选身份。
3. 保持五页当前已通过的正文、Grade顺序、36条来源、Hub五入口、SEO/Schema、robots/sitemap和静态路由不变；重新运行typecheck、build、完整测试，并让结果与Manifest指定制品绑定。

Gate 9下一轮范围可收窄为`F01`、`F02`、`APP5-G9-05`、`APP5-G9-11`、`APP5-G9-12`，同时对其余已通过项做差异保护抽查。Gate 8不得据此合并、push、部署、发布、修改DNS或提交Search Console。

## 7. 证据入口

- `pages/applications/07_qa/APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE9_20260921/candidate-identity.json`
- `pages/applications/07_qa/APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE9_20260921/observed-artifact-inventory.json`
- `pages/applications/07_qa/APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE9_20260921/static-http-audit.json`
- `pages/applications/07_qa/APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE9_20260921/browser-audit.json`
- `pages/applications/07_qa/APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE9_20260921/artifact-binding-gap.json`
- `pages/applications/07_qa/APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE9_20260921/run_static_audit.py`
- `pages/applications/07_qa/APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE9_20260921/collect_identity.py`

本报告完成后须将返修通知发送到原Gate 8任务`03开发`（`01a0be2a-838b-76c0-b116-6677b9cadb70`），并把送达结果与本报告SHA-256返回总控任务。
