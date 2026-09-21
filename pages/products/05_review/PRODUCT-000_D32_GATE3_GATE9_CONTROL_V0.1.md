# PRODUCT-000 D32 Gate3–9控制记录 V0.1

2026-09-20；总控/root；用户原话：“现在我们开始产品集合页的Gate3到Gate9。开发的话交给01开发这个对话负责。”

范围PRODUCT-000 `/products/`、tio2-my；连续授权Gate3→4→5独立审查→6→8→9。D23负责策划/独立审查，Gate8指定D32任务“01开发” `01a0bd3a-a7ba-7632-bda0-fad444f654db`。Gate6关闭后才交开发；本授权不包含子页面或Gate10。已有部署流程由00首页开发负责，本记录不覆盖其独立授权。

批准内容继承完整Brief V0.4及旧Gate7交付Manifest V0.4；后续共享RootPageHero合同与Products绑定优先于早期截图对应区域。旧D16验收不作为D32通过。Gate3方法消费当前V1.12，基准为当前首页批准视觉和共享owner合同；首页运行仅对照，不复制业务页HTML。首页设备证据豁免属于首页具体候选，不自动扩展本页。

当前阶段Gate3 EXECUTING。执行与独立审查分离；总控维护唯一页面Manifest。正式输出分别进入04_planning/d32-gate3-v0.1、04_planning/d32-gate4-v0.1、05_review、06_handoff、07_qa。旧批准源不覆盖。后续目标未开发按合同依赖记录，不虚构路由或删核心目录。

## Gate5明确阶段

用户补充：“Gate4到Gate6还有一个Gate5,gate5会对内容进行审查的。”本批显式列出Gate5，以不同于Gate4作者的Reviewer检查完整成果中的批准文案、模块、产品关系、视觉与交互及冻结身份；必修关闭后总控按现行映射关闭Gate4/5组合一次，再进入Gate6。不遗漏Gate5，也不叠加另一轮相同最终视觉审查。

### PRODUCT-D32-G5-IVR-01（2026-09-20正式派发）

Gate4作者`/root/product_d32_gate3`已交回`PRODUCT-000_D32_GATE4_GATE5_HANDOFF_V0.1.md`；候选source SHA256 `bde34207290f7e6ed9064587af76bc6492df02f55b3b84c6b7991bfe68f4d235`，bundle `sha256:f76f37c6428d320dbb7f05db6976e4544bf55fcc6a639fc050bce26ed9db54ae`。Reviewer `/root/product_d32_contract_audit`，角色Gate5 V0.4及独立视觉审查Skill；模式INDEPENDENT_REVIEW，完整内容/关系/三端视觉/适用状态与实际本地行为，不把G3首审当本次完整视觉PASS。写`05_review/PRODUCT-000_D32_GATE5_INDEPENDENT_REVIEW_V0.1.md`及对应独立观察/必要证据；冻结源/执行索引/Manifest只读。源入口、运行条件、完整输入及图均由handoff提供。返回明确报告和Findings后停止，由总控按常设授权关闭一次；不增加另一轮Gate4最终审查。

## Gate8接入准备回执（只读）

### 正式实施中的域名接口协调（2026-09-20）

01开发在正式派发后报告已接收，发现首页部署分支09a8b6f的Task1计划拟将`tio2_public_base_url()`等同本地`home_url('/')`，与本包AC-DOMAIN冲突。此为开发方报告，D23未将该计划描述当作已实现缺陷。总控按已有正式域名决定确认：正式公开身份`https://tio2products.com`与请求运行地址分离；canonical/OG/Schema共用正式配置，本地地址不成为正式canonical。具体技术接口由D32与首页owner协调，不新增用户决定或第二套页面实现。已分别向01开发、00首页开发发送约束及两页回归要求，工具均返回目标任务ID。合同解释明确，实际实现/回归待Gate9。正式接收文件及当前基线仍待开发方提供，不把消息中的“已接收”冒充文件已独立读回。

Gate6新包审查派发`PRODUCT-D32-G6-IVR-01`：作者`/root`，Reviewer`/root/product_d32_contract_audit`；包`../06_handoff/PRODUCT-000_D32_GATE6_HANDOFF_PACKAGE_V0.1.md` SHA256 `0023743afc8cd1919ad6d05e274e03b721ba31f7248ecb639edb8975eb82fba2`。方法Gate6角色V0.7及基线V1.1两项Skill，完整审新增开发合同/来源/覆盖/依赖，继承有效Gate5不重审视觉。写`PRODUCT-000_D32_GATE6_INDEPENDENT_REVIEW_V0.1.md`及必要观察，不改包/Manifest；REVIEW_PASS或具体Finding后停止。另派原Gate3/4作者`/root/product_d32_gate3`按内链角色做本包PLANNING_REVIEW，作者/root与其不同；只审新增合同内链接/依赖映射，不审其自身视觉，写`PRODUCT-000_D32_GATE6_LINK_PLANNING_REVIEW_V0.1.md`。两个范围互补，不增加批准轮次。

2026-09-20，01开发从指定任务回报：当前main HEAD/origin/main `15759d5d596da9d7ef6b678ddbb192d38ac636e8`；develop/origin/develop `f520678e723fe040c2e3b2cb5f9bd219e33d8fb9`；tree同为 `570667a29bc26ab86e11abeeefe56522cb973f27`，工作区clean；未fetch，仅本机引用。正式开发前重新核对。

可复用：唯一Header/Footer/Menu/Cookie、主题tokens、scope字段/媒体验证和runtime身份。现有Hero与SEO仅首页专用；新页需共享扩展。关键迁移风险：schema_version=1且字段集合严格相等，直接加字段可令旧数据库失效；Gate8须做保留首页/CMS编辑的兼容、幂等、可恢复迁移，不重跑bootstrap。D23交语义和验收要求，具体存储名、迁移实现与WordPress路由由D32负责选择和验证。

现有测试绑定首页及24目标404，需要产品独立证据目录并将/products/预期改为真实200，同时保留其余目标的真实状态和首页回归。后台需有可辨识的产品页内容分组及预览入口。部署当前只有本地Compose；仓库无公开生产部署脚本/目标配置。已有逐页部署方向授权不被旧记录否定，但不能声称实际已部署。

来源为01开发直接消息；尚未正式Gate6交付/接收，无实现启动。

## 继续执行时恢复的有效决定（2026-09-20）

### 预览Schema过渡决定 PRODUCT-D32-SCHEMA-20260920

用户在本任务对明确的过渡方案回答“采用此过渡规则（推荐）”。范围：产品详情页尚未就绪的预览阶段，页面目录及ItemList保留全部14个型号身份、批准顺序；仅为经验证就绪的型号输出详情页URL。未就绪项省略详情页URL及指向该未就绪页面的URI标识，不生成假链接，也不删除型号。详情页就绪后补齐，正式发布前按完整URL合同再验收。此决定定向解释旧SEO/GEO合同V0.3 §6/10在预览阶段的URL要求，§7禁止unresolved/cross-scope URL继续有效；不改变正式发布依赖、型号/关系/摘要或其他Schema禁止项。Gate6记录映射与验收条件，D32实现，Gate9核验。准备审计P01的业务决定已关闭，实际实现和验收尚未完成。

Gate3原实例因额度中断，已有制作及diagnostics未构成完整提交；本次恢复原实例，不重复创建任务，独立审查仍待冻结。

独立Gate3派发`PRODUCT-D32-G3-IVR-01`：Reviewer `/root/product_d32_contract_audit`，作者`/root/product_d32_gate3`；方法Gate3当前V1.12及核验Skill Gate3专项。先准备批准输入；必须收到作者精确冻结入口后才审实际组合，不提前PASS。写范围`05_review/PRODUCT-000_D32_GATE3_INDEPENDENT_REVIEW_V0.1.md`及相应独立证据目录；设计源/Manifest只读。完整核对结构、内容、三端组装/行为和身份，不增加Gate4审美要求；交回后由总控关闭，Reviewer不推进下一Gate。

1. `ROOT_PAGE_HERO_SEVEN_PAGE_CURRENT_GATE9_MANIFEST_V1.0.md` §1与对应独立验收V1.0明确记录用户接受PRODUCT-000在390px的自然四行H1，条件36px/700、正常零字距、无变形或压缩。继承这项视觉决定，不继承D16运行通过；当前制作不得为满足旧三行要求使用负字距。
2. 总控直接读取D32任务“00首页开发”（`01a0bca9-1318-7022-aa49-8723850227f7`），用户turn `01a0bd5c-700a-7192-b4bd-c81e48e51b86`在明确询问`tio2products.com`用途后回答“正式的域名。”。本次产品交付应承接该最新域名决定：正式canonical为`https://tio2products.com/products/`，OG与Schema同源；路径、Page ID、site_scope及品牌不因此改变。旧合同的绝对域名作为历史保留，Gate6新版明确覆盖域名字段，不批量覆写历史。实际域名配置/共享Schema迁移由D32与首页owner协调，并纳入首页回归。部署方案尚在该任务讨论，不能将Caddy/GHCR建议记为已批准或已部署。风险是新旧域名混用；验收检查机器输出、站内绝对链接及重定向身份；失败返回D32修复，保持未发布状态。
