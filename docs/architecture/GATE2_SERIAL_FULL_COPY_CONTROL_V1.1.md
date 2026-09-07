# Gate 2 串行 Full Copy 总控合同 V1.1

V1.1 updates the progress pointer after the 2026-09-07 eight-page user approval. V1.0 remains the original batch authorization and queue contract.

## 1. 用户授权

- 日期：2026-09-07。
- 用户原话：“现在我不参与中间审核了，直接full copy审核。现在串行启动所有gate1关闭的页面，做完一个启动一个，我最后审核所有页面的full copy。”
- 状态：`USER_AUTHORIZED_GATE2_SERIAL_FULL_COPY_BATCH`。
- 范围：2026-09-07盘点中Gate 1已正式`APPROVED / CLOSED`、Gate 2尚未开始的12个页面。
- 最终用户停止点：全部12页完成Full Copy、独立Buyer Review和总控复核后，一次性提交用户审核。
- 不授权：Gate 3–10、开发、部署、发布、DNS或索引；不操作`D:\16Wordpress_nextjs`。

本授权取代本批次逐页Skeleton用户确认的停止点。Execution Agent仍制作可审Skeleton并据此完成Full Copy，Review Agent仍独立审读实际Buyer Copy；Skeleton不登记为用户批准，Gate 2在批量终审前不得写成`APPROVED / CLOSED`。

## 2. 固定串行队列

| 顺序 | Page ID | 类型 | 启动基线 |
|---:|---|---|---|
| 1 | `DOC-COO` | Document | Gate 1 approved；此前已登记Gate 2串行授权 |
| 2 | `MARKET-EU-NL` | Market / EN | Gate 1 approved |
| 3 | `MARKET-EU-BE` | Market / EN | Gate 1 approved |
| 4 | `MARKET-IN-001` | Market / EN | Gate 1 approved |
| 5 | `MARKET-BR-EN` | Market / EN | Gate 1 approved |
| 6 | `MARKET-BR-PT` | Market / PT-BR | Gate 1 approved；需要语言本地化审查 |
| 7 | `PRODUCT-PROC-SU` | Product process | Gate 1 approved |
| 8 | `RES-R706` | Grade-specific resource | Gate 1 approved；page mapping仍独立待决 |
| 9 | `RES-TRADE-EU` | Trade resource | Gate 1 approved；时间敏感事实按现行新鲜度规则复核 |
| 10 | `RES-TRADE-UK` | Trade resource | Gate 1 approved；时间敏感事实按现行新鲜度规则复核 |
| 11 | `RES-TRADE-IN` | Trade resource | Gate 1 approved；时间敏感事实按现行新鲜度规则复核 |
| 12 | `RES-TRADE-BR` | Trade resource | Gate 1 approved；时间敏感事实按现行新鲜度规则复核 |

Spain已在Gate 2 Full Copy待用户确认，不作为新启动项；最终批量提交时一并列为现有待确认成果。APP-MB属于独立Application流程，继承用户此前将APP排除出本串行Controller的决定，不进入本队列。Germany与Italy的Gate 1未正式关闭，不进入本队列。

## 3. 单页循环

1. 总控核对当前Manifest、Brief、Gate 1成果、事实/关键词/Playbook和共享合同。
2. Gate 2 Execution Agent V0.5在本页授权范围内完成A、完整B和稳定C；执行完整Buyer冷读及适用的第三方来源表达精度检查。
3. 不同子代理使用Gate 2 Review Agent V0.5完成Discovery pass与Reporting pass；发现一个问题后继续读至页面末尾。
4. Execution Agent处理全部required Findings；Reviewer复核实际修改。
5. 总控读取完整Buyer Copy、Review和关键来源，完成独立项目审查。问题未关闭时继续定向返修。
6. 将页面状态停在`PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL`；不关闭Gate 2，不启动Gate 3。
7. 只有当前页达到上述状态后，才启动队列下一页。

## 4. 版本与保存

- A负责Skeleton，B是Buyer Copy唯一编辑源，C只保存稳定页面合同。
- C仅在动作、事实/来源范围、SEO/GEO/Schema语义、模块职责或条件渲染变化时升级。
- Manifest仅在实质阶段、权限或当前权威组合变化时升级；同阶段Finding、单句返修和复审不新建Manifest。
- Review报告保存全部实质Finding，但不制作逐项PASS表。
- 页面成果保存在其正式页面目录；不使用临时目录，不覆盖历史或已批准源。

## 5. 批量终审包

全部页面完成后，总控向用户一次性展示：

- 每页实际Full Copy和模块顺序；
- 每页主任务、主要CTA及关键事实/来源边界；
- 独立Buyer Review与总控verdict；
- 需要用户决定的具体文字或事实；
- 建议批准、定向修改或退回的页面清单。

用户可逐页或批量批准。只有明确获批页面登记`FULL_COPY_AND_MODULE_ORDER_CONFIRMED`并关闭Gate 2；未获批页面保持待审。Gate 3仍需另行授权。

## 6. 当前进度

| Page ID | 当前状态 | 当前Full Copy |
|---|---|---|
| `DOC-COO` | `USER_APPROVED / GATE2_CLOSED` | `DOC-COO_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` |
| `MARKET-EU-NL` | `USER_APPROVED / GATE2_CLOSED` | `MARKET-EU-NL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` |
| `MARKET-EU-BE` | `USER_APPROVED / GATE2_CLOSED` | `MARKET-EU-BE_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` |
| `MARKET-IN-001` | `USER_APPROVED / GATE2_CLOSED` | `MARKET-IN-001_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md` |
| `MARKET-BR-EN` | `USER_APPROVED / GATE2_CLOSED` | `MARKET-BR-EN_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` |
| `MARKET-BR-PT` | `USER_APPROVED / GATE2_CLOSED` | `MARKET-BR-PT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` |
| `PRODUCT-PROC-SU` | `USER_APPROVED / GATE2_CLOSED` | `PRODUCT-PROC-SU_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` |
| `RES-R706` | `USER_APPROVED / GATE2_CLOSED` | `RES-R706_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md` |
| `RES-TRADE-EU` | `USER_APPROVED / GATE2_CLOSED` | `RES-TRADE-EU_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` |
| `RES-TRADE-UK` | `USER_APPROVED / GATE2_CLOSED` | `RES-TRADE-UK_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md` |
| `RES-TRADE-IN` | `USER_APPROVED / GATE2_CLOSED` | `RES-TRADE-IN_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` |
| `RES-TRADE-BR` | `USER_APPROVED / GATE2_CLOSED` | `RES-TRADE-BR_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` |

固定串行队列：`COMPLETE / ALL_SUBMITTED_PAGES_HAVE_RECORDED_GATE2_OUTCOMES`。

本批次前七页及批次外一并提交的Spain批准见 `GATE2_EIGHT_PAGE_USER_APPROVAL_AND_CLOSURE_V1.0.md`。`RES-R706`、`RES-TRADE-EU`、`RES-TRADE-UK`、`RES-TRADE-IN` 与 `RES-TRADE-BR` 批准见 `GATE2_FIVE_RESOURCE_PAGE_USER_APPROVAL_AND_CLOSURE_V1.0.md`。后一个决定不授权五页Gate 3。
