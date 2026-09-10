# RES-TRADE-BR Gate 6 Review Challenge V0.1

日期：2026-09-08。Challenge ID：`RES-TRADE-BR-G6-RC-01`。提出者：`/root/g6_res_trade_in_br`。对象：Gate 6 候选交付包及其现有独立复核结论。

结论：**REVIEW_CHALLENGE / CHANGES_REQUIRED**。Gate 6 必修 Finding：**1 open**。在本 Finding 按新包身份定向复验关闭前，现有 `REVIEW_PASS` 不足以支持 Gate 6 关闭。

本 Challenge 不修改候选包、现有复核、当前 Manifest 或上游批准源，不自行关闭 Gate 6，不授权外发、Gate 8、Gate 9、开发、部署或发布。

## 1. 精确绑定

| 对象 | 精确身份 |
|---|---|
| 候选包 | [RES-TRADE-BR_GATE6_HANDOFF_PACKAGE_V0.1.md](../06_handoff/RES-TRADE-BR_GATE6_HANDOFF_PACKAGE_V0.1.md)，38,689 bytes，SHA-256 `3e2d65f8d00ce09d02ca6980a1e00eec7c6720f1a5f83d7e36fbc3f52c03a284`，Package ID `RES-TRADE-BR-G6-HANDOFF-01`。 |
| 当前独立复核 | [RES-TRADE-BR_GATE6_INDEPENDENT_REVIEW_V0.1.md](RES-TRADE-BR_GATE6_INDEPENDENT_REVIEW_V0.1.md)，3,162 bytes，SHA-256 `05c19dde75581c74a276b2933c23ff70357e073262acf333741be9f277acda19`；结论 `REVIEW_PASS`。 |
| 批准 Buyer Copy | [B V0.2](../04_planning/RES-TRADE-BR_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md)，第 112 行。 |
| 批准行为合同 | [C V0.2](../04_planning/RES-TRADE-BR_GATE2_CONTENT_CONTRACT_V0.2.md)，§5，第 74 行。 |

## 2. Finding `RES-TRADE-BR-G6-RC-F01`

### 必需 PT-BR 支持入口被错误写成条件出现

批准 B V0.2 第 112 行要求 Buyer Clean 显示 `Opções de fornecimento para o Brasil` 并指向 `/pt-br/markets/brazil/`。批准 C V0.2 §5 第 74 行把同一对象锁定为 `Supporting localized` 动作。两个批准源都没有授权在目标 route 尚未 live/accepted 时隐藏该入口。

候选包 §10 的 `BRTRADE-G9-06`（第 166 行）却要求：`PT-BR appears only when its actual route is live and accepted`。这把兄弟页的实现/发布依赖改写成条件渲染，允许 Gate 8 省略已批准 Buyer Copy。

该句也与候选包自身合同冲突：

- `BRTRADE-G9-01`（第 161 行）要求 SSR/hydrated page 保留 B V0.2 的全部 94 个内容块；
- `BRTRADE-G9-05`（第 165 行）把 `hidden/disabled/relinked action` 明确列为失败；
- `BRTRADE-DEP-02`（第 147 行）把 `hidden or relinked CTA` 明确列为失败，并把 route 问题定位为 affected path / complete-site release 依赖。

影响：Gate 8 无法从同一包得到唯一实现要求，可能用隐藏动作掩盖 PT-BR route 未就绪；Gate 9 的 G9-01、G9-05、G9-06 会对同一输出产生相反判定。这违反 Gate 5→6 接收方法中“必需兄弟入口未就绪可以阻断发布，不能由检查者改成隐藏”的规则。

严重度与处置：`IMPORTANT / GATE6_MANDATORY`。责任方为候选包作者 `/root/gate6_trade_br`；只修订 Gate 6 新增交付合同，不回写 B/C、结构、视觉或当前 Manifest。

## 3. 修订与定向复验接受条件

1. 修订 `BRTRADE-G9-06` 的 Expected observable result，明确批准的 PT-BR 支持链接必须按 B/C 出现并指向精确 `/pt-br/markets/brazil/`。
2. 明确目标 route 必须在 complete-site release 前实际 live、scope 正确并通过相应验收；若未就绪，保持依赖开放并阻断 affected path / complete-site release，不能隐藏、重链、禁用或用 fallback 掩盖。
3. 保持 `BRTRADE-G9-01` 的完整 B 内容要求、`BRTRADE-G9-05` 的逐实例动作要求和 `BRTRADE-DEP-02` 的失败边界语义一致。
4. 作者保存新包身份并更新作者自检的包 bytes/SHA；不得把修改写成正文、URL、事实或视觉变更。
5. 由不同身份执行 `TARGETED_RECHECK`，绑定修订后包与作者响应的实际 hash，只核对本 Finding 及相邻 `G9-01`、`G9-05`、`G9-06`、`DEP-02`。新包未出现或以上任一条件未满足时，保持 `CHANGES_REQUIRED`。

## 4. 其余覆盖边界

本 Challenge 不推翻身份未变的其他审查覆盖。802/2025、850/2026、四档税额、Ex-001、公共利益程序、动态来源复核、六项依赖、其余 Gate 9 条件和七面 `site_scope=tio2-my` 映射未发现另一个实质问题。运行实现、真实 route、RFQ、Consent、设备、辅助技术、部署及发布继续属于后续证据，不在本记录中宣称通过。
