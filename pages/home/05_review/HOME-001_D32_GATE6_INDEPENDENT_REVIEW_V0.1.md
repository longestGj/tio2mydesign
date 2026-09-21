# HOME-001 D32 Gate 6 独立复核 V0.1

## 1. 身份、输入与结论

| 字段 | 值 |
|---|---|
| 日期 / 派发 | 2026-09-20 / `HOME-D32-G6-INDEPENDENT-REVIEW-20260920-01` |
| 模式 / 审查者 | `INDEPENDENT_REVIEW` / `/root/d32_gate6_independent_review` |
| 交付包作者 | `/root`；与本审查者不同，不以作者自检替代判断 |
| 对象 | HOME-001 + D32 首批共享 Header/Footer/Menu/Cookie Settings |
| 被审包 | [V0.1](../06_handoff/HOME-001_D32_GATE6_HANDOFF_PACKAGE_V0.1.md) |
| 包 SHA-256 | `29387195F49F7AF9977A794C9E4E00AFDE059A341FE8026E3D3B2AE533BBE13F` |
| 作者输入核验 SHA-256 | `D7E363F86EDBB39E8EA05ABAEBAB67C81B02CE13D5B5B1603BE4E7FBB0D9B1A4` |
| 结论 | **`CHANGES_REQUIRED / RETURN`** |
| 必修开放项 | `HOME-D32-G6-F02`，P2，1 项 |
| F01 | 五节点继承提议通过独立合同核对；见 §4，由总控纳入批准组合 |

授权来自用户当前“进行独立复核，启动子代理”。[总控控制记录](HOME-001_D32_GATE6_REVIEW_CONTROL_V0.1.md)提供本次派发和停止点；关闭仍由总控按常设授权办理。本报告不改 Manifest、Status、批准源或交付包，不启动 Gate 8。

采用 `ESCALATED_PATH`：本次新增 D32 CMS、共享组件首次实施及运行身份映射，并存在明确 Schema 清单差异。扩大检查限于这些新增/修改合同及关联源；未变的上游视觉继承有效独立审查，不重新截图。

## 2. 已实际读取的规则与有效继承

读取根 AGENTS、PROJECT_CONTEXT、Index 的 Gate 6 入口、Directory Guide、治理细则适用部分，以及：

- [当前 Gate 工作流](../../../docs/architecture/GATE_WORKFLOW_V3.2.md)、[Gate 6 基线](../../../docs/architecture/GATE6_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.1.md)、[Agent](../../../agents/gate6-review-delivery/agent.md)、[执行复核合同 V1.1](../../../docs/architecture/GATE6_EXECUTION_REVIEW_CONTRACT_V1.1.md)、[5→6 接收合同](../../../docs/architecture/GATE5_GATE6_ACCEPTANCE_CONTRACT_V1.0.md)、[常设关闭授权](../../../docs/architecture/GATE_3_4_6_DELEGATED_CLOSURE_AUTHORITY_V1.0.md)。
- 实际采用两项项目方法：[合同一致性核验](../../../skills/page-contract-consistency-review/SKILL.md)、[开发交付规格](../../../skills/development-delivery-specification/SKILL.md)。只核对来源、映射及接受条件，没有调用视觉重制方法。
- Home 登记与关键词本页/竞争归属行、完整 Brief、Playbook、[当前入口 V1.6](../HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.6.md)及[V1.1 批准组合](../HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.1.md)。用户当前 D32 WordPress-only、固定设计可编辑内容方向覆盖旧 D16 技术限定；历史运行 PASS、404 和未测状态不能转移。
- [整页 Gate 4 关闭](HOME-001_APPLICATIONS_ALIGNED_GATE4_CLOSEOUT_V1.0.md)锁定 V1.1 整页源、7 图及 `/root/home_gate5_review` 首审/定向复审链。有效视觉范围继承，原型 `<main>` 本轮实际读取，用于内容/字段映射核对。
- [七页 Hero 批准组合](../../../docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_APPROVED_BASELINE_MANIFEST_V1.0.md)、Home 绑定/候选 V1.4、共享 Hero/Open-White 合同、[V1.1 Home 复审](../../../docs/architecture/ROOT_HERO_G5_SEVEN_PAGE_CROSS_PAGE_INDEPENDENT_REVIEW_V1.1.md)与[V1.2 最终复审](../../../docs/architecture/ROOT_HERO_G5_SEVEN_PAGE_CROSS_PAGE_INDEPENDENT_REVIEW_V1.2.md)。Home F01 在 V1.4 被实际复验关闭；最终报告和批准 Manifest 解除七页当时剩余条件。本包正确组合整页与后续 Hero，未把局部最终报告冒充整页重验。
- [旧 Gate 6 关闭](HOME-001_APPLICATIONS_ALIGNED_GATE6_PROJECT_CONTROL_CLOSEOUT_V1.0.md)、原 12 AC/5 DEP、旧 Gate 7 正文/字段合同、Global Chrome V0.5、Footer 法律区、透明 backdrop 用户决定、生产 SVG Manifest、CTA 增补、共享 Consent Brief/数据合同/Cookie 正文/状态图 Manifest、GA4 法律覆盖、Home SEO 专属合同、后续 SEO CSV 与总交付包、原产地全站授权。

后续原产地决定可解除旧 Hold，但不授权本批自行扩写事实。字体/素材存在性只证明可取得与身份，不替代生产字体许可核对。没有重新裁定实时法律、税率或外部产品能力。

## 3. 新增合同的完整覆盖

| 被审范围 | 独立判断与实际依据 |
|---|---|
| §0–1 范围/继承 | D32 为首批新实施，旧文件字节冻结/D16任务身份显式取消；页面/URL/主词、正文及已批准设计保留。批准源有明确组合顺序。 |
| §2 CMS | 固定模块、语义可编辑、初始导入与编辑测试恢复分开；不要求 ACF/构建器/JSON审批运行依赖。除 F02 外逐模块语义与正文/原型一致。保存/预览暴露关键缺失、禁止跨站回退及未知业务空值返回原 owner 可接受。 |
| §3 设计/资产 | Hero V1.4 对旧整页优先；56/44/36、700、开放白底和媒体保留有批准来源。全页五宽度、RFQ响应式、Start Here、透明菜单背景与模态行为均保留。Chrome/Logo统一 owner 和资产身份明确，不强制照搬 React。 |
| §4 Consent | no_optional_analytics 是现有明确互斥分支，适合本批未启用测量的实际候选；准确最小文案、焦点/关闭和不伪造接受记录有依据。GA4后续启用仍要求真实配置/法律/存储/网络原子一致，不撤销未来目标或预签启用态通过。 |
| §5 SEO | 初始 Title/Description/H1/canonical/lang逐值对照专属合同和CSV一致；隔离环境noindex与生产index目标分开；唯一输出owner及编辑恢复明确。F01按§4处理。 |
| §6 A01–A12 | 沿用原稳定ID，覆盖内容、CMS编辑、视觉、状态/a11y、SEO、共享、隔离及身份。A05须补F02非链接语义。截图与运行证据区分，物理AT未测不能冒充通过。 |
| §7 运行映射 | 实际读回证据Schema及validator/preflight相关源码：BUILD_ID及实际实现commit、Git/evidence/receipt关系保留；require_build_marker=false为Schema已有字段，仅取消Next标记，真实候选contains指纹与代码/内容/环境证据仍必需。可作为结果合同交Gate8落地，不代表脚本已证明WordPress兼容。DEP-01保留实际两轮预检与失败返回。 |
| §8–9 依赖/停止 | 五项原DEP保留owner、接受证据与阻断位置；外部目标未完成不触发造假页面/隐藏链接，法律页及receiver由各owner承担。本批不接管全站，不等同集成或发布就绪。回退与入口同步归属清楚。 |

整页运行、实际WP后台、HTML/a11y/存储/网络/部署均未测试；它们是后续 Gate 8/9 条件，不以本次合同复核冒充实现通过。内链专项由另一Reviewer执行，沿用 F02，不重复建立同一问题编号。

## 4. Finding 与处置

### HOME-D32-G6-F01 — Schema 总表省略 Product

- 对象：包 §5.2；后续 SEO CSV `HOME-001.schema_type` 与 Home SEO 专属合同 §2/§5/§8。
- 严重度/阶段：P1 合同歧义；本次独立审查接受包内继承提议，**`RESOLVED_BY_SOURCE_RECONCILIATION`**，供总控登记交付合同关闭。
- 实际来源：专属合同记录用户明确批准最终实体方案及 `manufacturer`，明确五节点和七条具体边；Brief §3再次引用。2026-09-13总包 §2.5要求CSV类型，同时§2.7要求保留页面专属批准源，没有明确删除 Product 或撤销 manufacturer 的决定。
- 裁决：D32继续采用 WebSite、WebPage、Organization、Brand、generic Product 五节点及原七条具体关系。CSV的四类型列不能被当作撤销具体批准的命令。非14个Product、不新增Offer/FAQPage/原产地等属性。
- 关闭对象仅是本批交付歧义；不声称修改CSV、重新批准企业事实或验证生产Schema。总控需在最终包/关闭组合引用此处置，避免把“提议待复核”遗留为开发歧义。无需重新让用户确认已批准的 manufacturer。

### HOME-D32-G6-F02 — 后台映射可能新增14个型号链接

- 对象：V0.1 §2.1 Products 行“型号显示名与目标”；关联 A01/A05。
- 严重度/处置：**P2 / 本阶段必修 / OPEN**。owner：本次Gate6包作者；Gate8不得自行决定新增CTA。
- 预期：批准整页HTML第201–204行，14型号均为 `.grades > span` 非链接标签。Hub `/products/` 与两条工艺入口是既有行动。旧Gate7§4.5、§5、§6、§7没有14个型号逐项链接合同。
- 实际：“型号显示名与目标”可被读为后台增加每个型号目标字段并渲染链接；它与固定设计、原href语义保持及A01禁止新增目标冲突。不能由未来实现者猜测。
- 建议最小修改：写明“型号显示名（非链接标签）；既有Hub/工艺入口标签与目标”，不增加逐型号目标字段；A05明确改成逐型号链接/CTA是失败。
- 关闭条件：新版包采用该非扩张解释，作者核验身份同步；同一Reviewer定向复验 Products 行、A01/A05和相邻链接边界。无需重做视觉或修改批准源。

没有发现其他需要阻塞本次交付的新增合同问题。字节差异说明见下一节，不作为内容变更另造Finding。

## 5. 独立机器检查与局限

[独立证据JSON](HOME-001_D32_GATE6_INDEPENDENT_REVIEW_EVIDENCE_V0.1.json)保存本审查者重算的文件身份；不是直接引用作者PASS。

- 包与作者JSON准确匹配派发SHA；47个已登记源文件SHA全部匹配，48个链接目标全部存在。
- 35项冻结比较：34项原始字节匹配；Hero `verification-runtime-v1.4.json` 一项仅换行差异，在内存LF→CRLF后精确匹配原冻结SHA。实际文件不改写。对应原freeze-record和复审来源均已读取。
- 原型源码及实际字体/图像引用已核对；整页/新Hero的本地依赖可取得。D16参考程序不要求字节相同，也不是D32运行依赖。
- 本结果只支持输入身份/合同覆盖，不证明视觉运行、WordPress兼容、安全性或发布就绪。没有运行浏览器、WP或现有验收脚本，没有写入D16/D32。

## 6. 返回与复验范围

V0.1返回作者最小修订F02，并将F01已接受的非扩张处置明确落入新版包。既有有效覆盖继承；新版只复验变更及相邻影响和准确身份，不重审全部上游。必修未关闭前不签整包 REVIEW_PASS；总控不得据此关闭Gate6或派发Gate8。
