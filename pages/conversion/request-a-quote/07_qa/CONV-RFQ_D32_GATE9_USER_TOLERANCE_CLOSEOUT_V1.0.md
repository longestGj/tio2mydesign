# CONV-RFQ D32 Gate 9 用户偏差接受与关闭 V1.0

日期：2026-09-20。决定ID：`CONV-RFQ-D32-G9-UD01`。状态：`USER_APPROVED / CLOSED`。

用户在收到首轮独立验收的具体偏差和返修范围后明确决定：

> “一点点小误差，不要紧的。”

并对剩余证据项再次明确：

> “原生200%浏览器证 这个不需要啊。”

此前用户也已明确决定不要求实体手机触控及VoiceOver、TalkBack、NVDA或JAWS等命名辅助技术证据。

## 决定范围

本决定只绑定以下已审查固定候选，不改写全站通用标准：

- branch：`codex/conv-rfq-gate8`
- baseline：`ce4147c7076112934b3dc6d8d97e983efb045f2f`
- implementation：`f407f0ee526ac3d8fe1dc3efefa31364dc191030`
- evidence/observed HEAD：`616662613d170420dce6bcddd5f026652bc3b0d8`
- build：`wp-815f8debd4b2129b21a8cc67d8c410dea58e8986b4e3d38b2450ebbeeaaaeb58`
- scope：`tio2-my`

用户接受[首轮独立验收](CONV-RFQ_D32_GATE9_INDEPENDENT_ACCEPTANCE_V0.1.md)记录的F01/F02轻微偏差，无需Gate 8返修；F01/F02以`USER_ACCEPTED_TOLERANCE / CLOSED`关闭，不改写为技术测试PASS。原生浏览器UI 200%缩放、实体触控和命名辅助技术均为`USER_WAIVED / NOT_TESTED`，不再要求补证。

## Gate 9关闭

沿用首轮报告、机器审计和浏览器审计，不重写原始发现。13项AC保持PASS；AC-09的Products同分支回归仍属Integration未验证；AC-11按本用户决定接受当前页面范围并关闭。

| 层级 | 当前结论 |
|---|---|
| RECHECK_SCOPE_STATUS | `PASS_WITH_USER_APPROVED_TOLERANCE` |
| PAGE_GATE9_STATUS | `READ_ONLY_QA_APPROVED / CLOSED` |
| INTEGRATION_STATUS | `NOT_READY / PRODUCTS_AND_EXTERNAL_ROUTES_OPEN` |
| RELEASE_STATUS | `NOT_AUTHORIZED / SIX_EXTERNAL_DEPENDENCIES_OPEN` |

当前页面实现必修0、待补证0。已接受偏差仍按原始报告保留可追溯事实；若未来用户要求提高一致性或发现实际使用故障，可另开定向改进，不倒写本次关闭。

六项外部依赖不受本决定影响：provider、Privacy运营事实、Privacy route、Sample/Documents sibling routes、Cookie/CMP、Analytics/consent继续按原owner和阻断层级开放。`/products/`缺失继续使AC-09保持Integration未验证。页面Gate 9通过不代表Integration/Release完成。

本次只调整验收范围和生命周期状态，没有D32代码、CMS、receiver或路由修改；未做真实Web3Forms提交/邮件。Gate 10、push、PR、merge、部署、发布、DNS、sitemap和index仍未授权。

原开发任务已收到停止返修通知并回读确认：worktree clean，HEAD、implementation、HTTP 200和build marker均保持固定候选状态，未修改代码、测试、Evidence Manifest或证据。送达及回读见[通知记录V0.2](CONV-RFQ_D32_GATE9_NOTICE_V0.2.json)。

关闭后开发任务按Gate8→9合同仅停止本轮Compose运行容器；WordPress与MariaDB均正常退出，两个持久卷保留。停止运行未改变候选，worktree仍clean且HEAD保持`616662613d170420dce6bcddd5f026652bc3b0d8`。
