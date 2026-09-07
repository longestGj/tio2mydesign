# MARKET-BR-PT Gate 6 合同一致性审查 V0.1

日期：2026-09-07。Review ID：`BR-PT-G6-REVIEW-01`。状态：`SELF_CHECK_COMPLETE / PENDING_INDEPENDENT_PROJECT_CONTROL_REVIEW`。

## 1. 对象与继承

- 当前接收入口：`MARKET-BR-PT_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md`。
- 正文：`04_planning/MARKET-BR-PT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`；行为/语言/SEO/Schema：`MARKET-BR-PT_GATE2_CONTENT_CONTRACT_V0.2.md`。
- 冻结原型：`04_planning/gate4-pt-v1.1/MARKET-BR-PT_GATE4_COMPLETE_VISUAL_V1.1.html`，SHA-256 `1159f03eb5018f73ba497cca77ed4d9903c10d2bb3a6c2612c51da89757a0357`。
- 最终独立复审：`05_review/gate4-pt-v1.1-independent-rereview/report.md`，59项递归身份一致，`BR-PT-G4-IR-01/02/03=CLOSED`。本轮继承冻结视觉，只定向复核本地化、alternate和接收语义。

## 2. 实际判断

PT-BR正文是独立批准的自然语言源，不从English页面机器翻译。页面明确所有链接和表单当前为English，葡语CTA标签不会让买家误以为目标页已本地化。Header、Footer和Cookie的共享English状态按已批准本地化边界保留。

页面用“para compradores no Brasil”和“local de entrega no Brasil”，没有声称Brazil当地公司、办公室、库存或经销商。COO、Trade Resource及三类应用与English页语义等价，但没有把English用词变成PT-BR的事实扩张。

RFQ只给Brazil可见可改的交付国家初值，Documents只传来源。`Country / Region`仍代表公司所在地；Documents不得自动选COO。完整原型及其页面内依赖可取得。

## 3. Finding与处置

| ID | 预期 / 实际 | 影响与处置 | 当前状态 |
|---|---|---|---|
| `BR-PT-G6-F01` | C定义候选canonical、`pt-BR`、双方上线后才启用的reciprocal `en↔pt-BR` hreflang，以及`WebPage`/`BreadcrumbList`共享关系。冻结原型有`lang=pt-BR`和SEO title，但没有最终canonical、hreflang或JSON-LD。 | 这些项目在C中明确属于后续实现/QA，不是Gate 4缺陷。交付包固定生产条件：路由未获批准或任一对应页未live时不得输出虚假alternate；条件成立后两页互相返回。Gate 9查实际SSR head。 | `DELIVERY_MAPPING_CLARIFIED_IN_DRAFT / PENDING_INDEPENDENT_REVIEW`; 原型未改；生产未验证 |

没有发现需要退回Gate 2–4的实质问题。规划路径`/pt-br/markets/brazil/`仍不证明生产路由、canonical或索引已完成。

## 4. 自检结论

本地化正文、English目标提示、动作上下文、事实边界和视觉之间一致。`BR-PT-G6-HANDOFF-01`可交不同审查者复核；本报告不构成独立PASS、用户批准、外发或Gate 8授权。

