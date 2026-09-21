# GRADE-M350 D32 Gate 9 独立验收 V0.1

日期：2026-09-20。Review ID：`GRADE-M350-D32-G9-20260920-01`。Reviewer：`/root`，未参与本轮D32实现。对象：`GRADE-M350` / `/products/m-350/`。

## 结论与四层状态

**PASS。16项接受条件全部通过，新Finding 0；Gate 9只读验收关闭。**

| 层级 | 状态 |
|---|---|
| RECHECK_SCOPE_STATUS | `INITIAL_REVIEW_COMPLETE / PASS` |
| PAGE_GATE9_STATUS | `READ_ONLY_QA_APPROVED / CLOSED` |
| INTEGRATION_STATUS | `NOT_READY / EXTERNAL_DEPENDENCIES_OPEN` |
| RELEASE_STATUS | `NOT_AUTHORIZED` |

页面本体达到Gate 9质量要求。RFQ、Sample、Document、Process、Applications、Markets与Indexing七项外部依赖仍开放；当前页面按合同失败关闭相应链接或模块，因此这些依赖不反转页面PASS，但继续阻止完整集成与发布结论。Gate 10、合并、部署、发布、sitemap和索引均未授权。

## 精确候选

| 对象 | 固定身份 |
|---|---|
| Worktree / branch | `D:/32Wordpress_new/.worktrees/grade-m350-gate8` / `codex/grade-m350-gate8` |
| Baseline | `5a7801b05bdb4aeccf7a95b336ef04c3740579ab` |
| Implementation | `a13d270160d39d009159d7c38f82b85456f71c03` |
| Evidence / clean HEAD | `a96d850ff487a3f0b566614bc826ef67bb3b5d23` |
| Build | `wp-b6ac6157961a238166aeb566b1121810a29ee6e2c4441547f36b0965107343d0` |
| Runtime | `http://127.0.0.1:8350/products/m-350/`; `site_scope=tio2-my` |
| Evidence Manifest | `.runtime/handoff/m350/gate8_evidence_manifest.json`; SHA-256 `2C9EB8EAE59067B4B92559F5099CCDD7A8DF53475D3CD5FF8417909D2A03C560` |
| Gate 8 receipt | `docs/handoffs/GRADE-M350-gate8.md`; SHA-256 `43B48A5A2E9F09C9FE9AF96C982D67322C240A6B93117F6B20A21538912B6AA9` |

Git独立复算确认baseline是implementation祖先，implementation是evidence HEAD祖先，已接受Product Hub evidence HEAD `8a4e3f5...`也是implementation祖先；工作树clean。候选在机器预检、浏览器验收和结束核验期间未漂移。

## 机器与运行态准入

| 检查 | 结果 |
|---|---|
| Evidence Manifest validator | `PASS`；235/235检查通过，36个声明证据文件均被校验 |
| Runtime preflight | `PASS`；2轮、6/6请求成功；Home、Products、M-350均HTTP 200，scope和Build标记一致 |
| Developer suite | `PASS`；46/46命令零退出，包括M-350 Playwright 9/9、Products 9/9、Home 11/11 |
| Migration / CMS | `PASS`；幂等、保留编辑、可回滚、可续跑、错误恢复、保存冲突与精确还原均有证据 |
| Readiness / fail-closed | `PASS`；目标owner、scope、发布态、重复项、receiver证明移除及Paper状态矩阵通过 |
| Code review | 未解决Critical/Important Finding为0 |

独立机器结果见[机器审计](GRADE-M350_D32_GATE9_20260920/independent-machine-audit.json)、[validator输出](GRADE-M350_D32_GATE9_20260920/evidence-validation.json)与[preflight输出](GRADE-M350_D32_GATE9_20260920/preflight.json)。

## 内置浏览器独立验收

在固定候选上直接复核1440、1024、768和390宽度：均无横向溢出，所有当前可见交互目标达到44×44px；桌面/平板保留技术表格，390宽度把15行数据转换为带`Property / Standard / Typical Value`标签的可读卡片。页面保持单一准确H1、批准模块顺序、六个应用场景、Paper独立评估边界和15行技术数据。

Head与Schema复核通过：Title、Meta、Canonical、`lang=en`、`noindex, nofollow`准确；Product与BreadcrumbList可见，15项`additionalProperty`与表格逐项无损一致，没有offers、rating、review、manufacturer或origin等未批准字段。公开HTML/DOM没有Gate、证据、内部Page ID、历史TDS文件或版本泄漏。

移动菜单和Cookie弹窗均通过键盘打开、焦点闭环、Escape关闭与焦点返回；当前页面和Products页面控制台错误、警告均为0。Products实际页面保留14个等级，只有M-350出现两个详情入口并进入Schema，其他13个等级仍未链接。与Freeze 02的1440和390批准资产对照，页面层级和视觉语法一致；未就绪的Documents、Sample、Markets与情境CTA按合同省略，不构成视觉缺失。

独立观察记录见[浏览器审计](GRADE-M350_D32_GATE9_20260920/independent-browser-audit.json)。

## 16项接受条件

| AC | 结论 | Gate 9依据与边界 |
|---|---|---|
| M350-D32-AC-IDENTITY | PASS | 精确managed path、owner/scope/revision与失败态一致；内部身份不公开 |
| M350-D32-AC-CONTENT | PASS | 批准模块、正文、限定词与条件省略一致 |
| M350-D32-AC-TECHNICAL | PASS | 15行可见数据与Schema逐项一致；保持evaluation data语义 |
| M350-D32-AC-VISUAL | PASS | 四档响应式与Freeze 02对照通过，无溢出、裁切或碰撞 |
| M350-D32-AC-A11Y | PASS | 语义、键盘、焦点、44px和Axe serious/critical=0证据通过；用户豁免项见下文 |
| M350-D32-AC-CONDITIONAL-ROUTES | PASS | 九个非转换目标的ready及五类fail-closed状态通过；外部owner仍开放 |
| M350-D32-AC-CONVERSION-CONTEXT | PASS | 未证明receiver时情境入口省略；证明时精确context与接收结果测试通过；共享固定RFQ保持干净 |
| M350-D32-AC-SEO | PASS | Title、Meta、Canonical、lang、H1、noindex及sitemap排除准确；Indexing等待Gate 10 |
| M350-D32-AC-SCHEMA | PASS | Product/Breadcrumb与15项属性同步，无未批准商业或来源声明 |
| M350-D32-AC-CMS | PASS | 编辑影响前台与Schema，非法/过期写入拒绝，数据精确还原 |
| M350-D32-AC-MIGRATION | PASS | 幂等、保留编辑、可逆、可续跑、隔离与失败恢复通过 |
| M350-D32-AC-SCOPE | PASS | 仅接受`tio2-my`；错scope/owner、重复项及无效内容失败关闭 |
| M350-D32-AC-PUBLIC-CLEAN | PASS | 公开payload无内部控制、Gate、证据和历史TDS身份 |
| M350-D32-AC-CHROME | PASS | 共用Header/Footer/Menu/Cookie及Home/Products回归通过 |
| M350-D32-AC-PRODUCT-HUB | PASS | 精确Product Hub证据已组合；仅ready M-350获得可见/Schema URL |
| M350-D32-AC-EVIDENCE | PASS | Git、Build、Runtime、36份证据、回执和16项映射形成可重复绑定 |

## 用户豁免

按用户明确决定，以下三项均记录为`USER_EXCEPTED / NOT_TESTED`，不是Finding、待补证或Gate 9阻塞项：

- 实体设备；
- 手工命名辅助技术；
- 浏览器/操作系统原生200%缩放。

保留的浏览器自动化覆盖为四档CSS视口、键盘/焦点、语义检查、44px几何及Axe serious/critical。Gate 9不会再向Gate 8索取上述三项证据。

## 外部依赖与停止边界

`M350-D32-DEP-PRODUCT-HUB`已关闭。以下七项保持开放：`M350-D32-DEP-RFQ`、`M350-D32-DEP-SAMPLE`、`M350-D32-DEP-DOCUMENT`、`M350-D32-DEP-PROCESS`、`M350-D32-DEP-APPLICATIONS`、`M350-D32-DEP-MARKETS`、`M350-D32-DEP-INDEXING`。

本轮没有真实表单提交、生产CMS写入、push、PR、merge、部署、发布、sitemap启用、索引或Gate 10。Gate 8已收到PASS通知并确认停止返修及隔离Compose preview；数据库和媒体volumes、分支、worktree与固定候选均保留，工作树保持clean。
