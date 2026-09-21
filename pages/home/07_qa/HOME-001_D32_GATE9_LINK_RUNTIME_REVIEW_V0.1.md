# HOME-001 D32 Gate9 运行内链核验 V0.1

日期：2026-09-20；review_id `HOME-D32-G9-LINK-20260920-01`；实际核验 `/root`，独立于D32实现作者。

## 对象、方法与证据

仅核对 `http://127.0.0.1:8232/` 首页及其批准目标，`site_scope=tio2-my`，EN首页及BM法律目标；没有发布集合，不对全站入链/孤立页作结论。

批准输入为Gate6包V0.2及有效首轮/返修规划内链审查；运行候选evidence HEAD `9de5ef0e3409daf9c9cb675efb26f54d7c7ba6c6`。在独立运行Reviewer的[原工具预检](d32-gate9-v0.1/runtime/gate9-preflight.json)PASS后，以Python标准库只读GET读取首页，HTMLParser提取全部a[href]，与批准整页HTML逐实例比较，再对25个不同批准目标各GET一次；超时15秒，不跟随重定向、不执行表单、无越站请求。

正式证据：[实例与实际目标响应](d32-gate9-v0.1/links/link-runtime.json)、[原始首页响应](d32-gate9-v0.1/links/homepage-response.html)。复现脚本位于 `99_workspace/home-d32-gate9-link-check.py`，正式JSON与响应不依赖临时脚本才能阅读。

## 结果及边界

| 项目 | 实见与判断 |
|---|---|
| 原59导航实例 | 全部批准href按数量保留，无新增型号链接；原25目标集合保持 |
| 实际61个a元素 | 额外两个为Skip to content→#main、共享Cookie弹窗Read Cookie Policy→/cookie-policy/，不是新增页面或业务目标 |
| RFQ文字比较 | HTTP纯文本拼接产生两处候选差异；不能用隐藏span拼接当可访问名称。视觉Reviewer在390实际确认顶栏RFQ、aria-label=Request a Quote，菜单末行Request a Quote；不存在已证实标签违约，详细操作证据归视觉报告 |
| 真实目标 | 首页200，24个其他批准目标均404；无重定向。路径保持不证明目标功能已实现 |
| 站点边界 | 所有请求限127.0.0.1:8232；没有指向D16/其他站作fallback；scope响应记录在JSON |
| 菜单/弹窗/展开 | HTTP只能证明元素和href，实际可见/聚焦/打开/关闭由独立视觉Reviewer检查，本专项不重复浏览器操作或声称自己亲测 |

结论：`LINK_MAPPING_PASS / DESTINATION_INTEGRATION_NOT_READY`。没有新增独立实现Finding；`HOME-VU-DEP-03`继续开放，由各目标页面owner补实现。市场/产品/应用/文件/资源/企业/法律/询盘相关路径尚未形成可完成的买家旅程，不能签完整集成或发布通过。

不要求首页owner为消除404临时造24个页面，不允许删除或重定向批准链接掩盖依赖。Cookie Settings本批功能是否通过仍以实际交互验收为准，Cookie Policy真实正文页面的404仍为后置依赖。批次单页开发验收与全站可用性分开。

四层状态交总体验收组合：本专项映射范围PASS；页面Gate9取决于全部AC及未测；Integration NOT_READY；Release NOT_AUTHORIZED。没有真实询盘/邮件或CMS写入，没有修改被审代码。
