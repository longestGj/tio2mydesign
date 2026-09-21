# HOME-001 D32 Gate9 Runtime Review V0.1

日期：2026-09-20。Review ID：HOME-D32-G9-RUNTIME-01。审查者 `/root/d32_gate9_runtime`，独立于 D32 `00首页开发` 实现作者。状态 `DRAFT_FOR_PROJECT_CONTROL_REVIEW`；本报告为总控综合验收输入，不自行签署页面通过。

## 输入与实际对象

用户本轮明确“启动Gate9独立验收”；总控[本轮控制记录](HOME-001_D32_GATE9_CONTROL_V0.1.md)派发 A01/A10/A11/A12、CMS/内容/运行身份；视觉、交互 A02–09 由另一 Reviewer，目标页面 GET 由总控覆盖。仅写 D23 证据与报告；没有改 D32、CMS、数据库、配置或启动环境，没有运行开发测试或真实业务提交。

- 当前入口：[Manifest V1.10](../HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.10.md)。其中未启动 Gate9 为本轮用户授权之前的状态。
- 批准：[Gate6 总控关闭](../05_review/HOME-001_D32_GATE6_PROJECT_CONTROL_CLOSEOUT_V1.0.md)及[唯一包 V0.2](../06_handoff/HOME-001_D32_GATE6_HANDOFF_PACKAGE_V0.2.md)，SHA256 `EEB70B4D48753BBAF02D9CBEA1B6ADAD65B18D90CD6C6123A0F63C6063065A3A`。
- repository `D:/32Wordpress_new`，branch `codex/home-001-wordpress`，baseline `61cf09e0adabd90d67af645f973d936de7902d5e`，implementation `a75572a36cc50e820b640fca663a3a60594029cb`，evidence HEAD `9de5ef0e3409daf9c9cb675efb26f54d7c7ba6c6`，预检工作区 clean。
- runtime `http://127.0.0.1:8232/`，local Docker，scope `tio2-my`。环境原件记录 WordPress7.1/PHP8.3.33、主题/插件1.0.0；本轮没有独立 CLI 枚举这些软件版本。
- 实际制品 `wp-f576fa2d7a74ab057e5878765db4187ae7b2689aaf921f8c5d6f5ab0bac6fc3e`；恢复内容 SHA256 `ee6a324ea68ada21e9424f930ed52f87800cea9e982c0feb4fd9ef456b71a992`。
- Gate8 [回执](D:/32Wordpress_new/docs/handoffs/HOME-001-gate8.md)、[接受条件](D:/32Wordpress_new/docs/verification/home/acceptance.md)、[机器清单](D:/32Wordpress_new/.runtime/handoff/gate8_evidence_manifest.json)。清单来源 SHA256 `6A9071B539BB948712B490B1BE3738F26D9281971DCF9DBCCA8CCBD87E1D4232`。

实际读取根 AGENTS/Context/Index、Gate9 Agent V0.5/当前组合V1.1、运行核验 Skill及集成参考、工作流与治理§6–17、完整 Home Brief/Playbook、登记/关键词相关行、上述当前批准组合及专属SEO合同。旧 Brief/Playbook 过期 Hero、原产地 Hold、Next/D16 限制由本批批准包覆盖，不恢复旧限制。未读共享知识库。

## 独立证据

| 证据 | 类型与实际覆盖 |
|---|---|
| [Manifest校验](d32-gate9-v0.1/runtime/manifest-validation.json) | 本 Reviewer 运行原 validator；PASS。Git祖先关系、准确HEAD/branch、clean、真实BUILD_ID、34项证据哈希/提交与回执集合一致。文件身份不等于功能通过 |
| [两轮预检](d32-gate9-v0.1/runtime/gate9-preflight.json) | 本 Reviewer 运行原 preflight `--rounds 2`；2/2 HTTP200、精确制品/内容 markers、scope header匹配 |
| [独立运行审计](d32-gate9-v0.1/runtime/independent-runtime-audit.json) | 本人 ACTUAL_RUNTIME + SOURCE_INSPECTION；完整9模块有序文本/链接、原始head/五节点graph、31个自定义文件身份、Hero媒体、恢复快照关联 |
| [实际HTML](d32-gate9-v0.1/runtime/homepage-response.html) | 本人只读GET保存；服务器正文可读，无需客户端请求内容 |

独立辅助脚本为 `99_workspace/d32-gate9-runtime/readonly_audit.py`；正式结果保存在上表耐久目录。首次运行仅本地读取编码错误（Windows默认GBK），改为显式UTF-8后完成；不是被审页面故障。

## AC覆盖与判断

| ID | 批准预期→实际判断 | 结论/限制 |
|---|---|---|
| HOME-VU-A01 | 完整首版与可编辑内容。本人逐模块对照批准V1.4完整原型：9模块文本及链接顺序全部一致，H1唯一。源码读取完整模板、218字段schema、admin保存/验证与WordPress option链；没有运行时批准文案比较或D23依赖。14型号为span标签。当前响应内容指纹与恢复快照精确相符 | PASS：首版内容及CMS映射；编辑动态证据按下节有界继承，不声称本人写入。共享Header/Footer文字/状态另由视觉Reviewer与总控内链覆盖 |
| HOME-VU-A10 | 原始响应唯一title/description/canonical，lang=en，唯一批准H1。title/description与包§5准确一致；local noindex/nofollow符合环境映射。五节点JSON-LD与专属合同§5整个JSON对象精确相同，七条关系/稳定ID/manufacturer及可见企业句一致。SEO仅主题inc/seo.php输出，移除WP重复canonical/robots；后台SEO字段供同一输出消费 | PASS for local candidate。生产index/sitemap未验收或授权；F01已由批准关闭源关闭，不重开 |
| HOME-VU-A11 | 单项目独立数据库/媒体卷、固定scope常量、内容schema要求tio2-my；每次正常模板渲染先验证内容与媒体归属，缺失/异站错误503，不读取其他站fallback。菜单/SEO从同一已验证option，缓存仅请求内static；公开页面无表单提交或可选consent存储。实际X-Site-Scope正确，当前Hero下载hash=批准源 | PASS for submitted scope model and available evidence。三真实异常使用开发原件，不冒称独立mutation；无第二站运行对象/未来多站共宿主回归，本批不强造多站框架 |
| HOME-VU-A12 | 原工具独立通过；另外本人重新计算31个真实主题/插件文件指纹，逐文件与复制制品字节、implementation提交过滤后的blob相符。实际wp_head指纹逻辑确由运行路径计算，不是固定占位串；HTTP中的精确指纹与本轮计算一致。content指纹由实际经过校验的WordPress option计算，与恢复快照一致 | PASS for exact candidate identity。不因关闭Next marker就直接通过；已完成真实替代指纹链。未执行新空卷安装/整库灾备或生产恢复 |

## 已有动态证据的独立审读与继承边界

本人实际读取 `tests/editor.spec.mjs`、`tests/negative-runtime.py`、相关PHP脚本、`editor-results.json`、`test-results.json`、`negative-runtime.json`、before/restored/negative-restore快照和 environment.json，并打开 `editor-changed.png` 原图：确为临时标题/正文编辑状态，非最终批准页面。它们均由独立原validator确认属于指定evidence HEAD；当前恢复内容指纹/自定义制品经本轮独立GET和文件重算无漂移。

- 编辑证据涵盖 H1、简介、CTA目标、图片ID、型号、SEO标题/描述保存，错误路径422与过期revision409、nonce403、恢复；源码独立确认管理员能力/nonce/乐观并发检查、类型/必填/本地路径约束，保存不比较批准状态。图片测试是同一批准图片的另一媒体ID；可以证明映射/ID保存，不能推导任意新图片的视觉都符合设计。媒体picker原件只证明打开，不把它扩大成独立完成选图整个操作。
- 本人没有执行上述开发测试、重放CMS编辑或异常写入；已有结果按原2026-09-20采集保留为 `DEVELOPER_ACTUAL_RUNTIME / INDEPENDENTLY_REVIEWED`。本轮独立部分为实际最终HTML、源码路径、恢复状态及身份关联，不把作者测试整体重标独立亲测。
- 三个异常为内容scope错、内容缺失、媒体归属错；均503且无首页fallback，finally恢复。源码确实对这些输入拒绝，无跨站供应源。环境常量缺失分支仅源码检查；没有声称实际执行同slug跨站/错误常量/数据库断开所有可能异常。
- 后台动态链路及隔离正/负例已有可绑定原件，结合独立源码及当前实际恢复结果足以支持本批A01/A11限定判断；无反证时不因禁止QA写入而要求无意义重复开发测试。若总控需要新增后台状态，必须让Gate8提供，不由Reviewer改数据。

## Finding、依赖与四层建议

本分工范围 **确认的实现必修0**，没有新增代码Finding。不以此代替视觉Reviewer A02–09的结论。

- DEP-01：本候选真实WP适配已由原validator、两轮预检及额外实际身份核对支持，建议对准确对象关闭。
- DEP-02：当前初始导入、来源映射与恢复身份支持；最终共享/视觉范围由另一Reviewer合并。
- DEP-03：开发已报告24目标404；总控本轮独立GET核对，继续由对应页面owner负责，不能本报告关闭或伪造完成。
- DEP-04：本报告仅独立验收的一部分，等待总控接收两方结果；不得用本报告升级整体。
- DEP-05：生产部署、索引、法律页/表单接收与发布授权仍开放。
- A09物理AT/物理触控/原生200%开发明确未测；由视觉Reviewer确认本轮覆盖后给总控。未测本轮必验条件不能改名发布条件放行。

四层建议：`RECHECK_SCOPE_STATUS=RUNTIME_ASSIGNED_SCOPE_PASS_WITH_DECLARED_EVIDENCE_LIMITS`；`PAGE_GATE9_STATUS=NOT_SIGNED_BY_THIS_REVIEWER / AWAITING_COMBINED_REVIEW`；`INTEGRATION_STATUS=NOT_READY / DEP03_OPEN`；`RELEASE_STATUS=NOT_AUTHORIZED`。

本Reviewer未修改当前Manifest/Status、未通知外部任务、未发布或合并。总控接收本报告并与视觉/内链结果综合后，按既有流程作唯一阶段结论及通知；不要将本报告的局部PASS发送成页面整体通过。
