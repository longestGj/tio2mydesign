# HOME-001 D32 Gate 6 内链规划独立审查 V0.1

- Review ID：`HOME-D32-G6-LINK-20260920-01`；日期：2026-09-20。
- 模式：`PLANNING_REVIEW`；结论：`CHANGES_REQUIRED`。
- 实际审查实例：`/root/d32_home_link_review`；被审交付包作者：`/root`。本实例未参与交付包编制或修改，与作者独立；经用户“进行独立复核，启动子代理”及总控明确派发启动。
- 范围：HOME-001 `/`、共享 Header/Footer/Mobile Menu、Cookie Settings；`site_scope=tio2-my`；正文 EN，法律区允许 BM 链接。无发布集合、无 D32 运行环境，本轮不是全站或运行验收。
- 唯一附属清单：[逐实例与输入身份 JSON](HOME-001_D32_GATE6_LINK_PLANNING_REVIEW_V0.1.json)。其 `inputs` 保存本次实际审查源 SHA-256。

## 1. 输入与方法

按现有 [内链角色](../../../agents/internal-link-review/agent.md)、[内链核验 Skill](../../../skills/internal-link-verification/SKILL.md) 和 [生效接收合同](../../../docs/architecture/INTERNAL_LINK_REVIEW_ACTIVATION_V1.1.md) 执行；已实际读取根规则、Context、Index 的适用入口、当前工作流、治理细则适用段、目录规则、Home 当前 Manifest、完整 Brief、Playbook、登记册、主表 Home 行和目标映射、原内容交付源、共享 Chrome、法律区及 Consent Brief。

被审对象：[D32 包 V0.1](../06_handoff/HOME-001_D32_GATE6_HANDOFF_PACKAGE_V0.1.md)。正文导航源为 [整页 HTML](../04_planning/visual-designs/home-applications-aligned-v1.1/homepage-applications-aligned-preview-v1.1.html)，Hero 消费 [V1.4 HTML](../04_planning/visual-designs/home-root-page-hero-v1.4/homepage-root-page-hero-preview-v1.4.html) 中的两项相同 CTA。以本地 PowerShell 提取全部 `a[href]`，逐实例保留位置、行号、可访问名、href、目标身份、语言及登记状态，再结合上下文人工核对；未启动浏览器、服务器、爬虫或外部请求。

## 2. 应检、实检与结论

| 对象 | 应检 / 实检 | 规划判断 |
|---|---|---|
| 首页来源页面 | 1 / 1 | 身份 `/` / HOME-001 / EN 一致 |
| 整页 HTML 导航链接实例（含响应式重复面） | 59 / 59 | 25 个不同目标全部唯一对应登记及关键词主表，未映射实例 0 |
| Hero 覆盖 | 2 / 2 | RFQ→`/request-a-quote/`；View Products→`/products/`，与整页原链接一致 |
| Header/Mobile Menu/Footer | 全部来源实例 | 七项导航及 RFQ、可见 Home 与 Logo 保留；Footer 三法律 URL、顺序、BM 标识正确；无 Terms/旧法律 URL |
| Cookie Settings 及未启用态动作 | 3 / 3 | Footer 为按钮；Close/Escape 返回触发点；Read Cookie Policy→`/cookie-policy/`；不新增可索引设置页 |
| 四组型号显示 | 14 / 14 | 源均为 span，不是14个链接；发现下述 F02 |
| 页面 RFQ、Documents、资源和问答 | 全部对应实例 | RFQ 是导航非表单；Documents 与 Request Documents 分工明确，没有下载保证；资源标题与目标职责匹配；无 Sample CTA |
| Mobile Menu / 四组展开动作 | 规划合同覆盖 | 控件行为由 A05/A07/A09 覆盖，运行操作 NOT_VERIFIED |
| 真实落点、重定向、焦点、键盘、接收及断点运行 | 0，按模式不适用采集 | `NOT_VERIFIED`，不得从规划 PASS 推导可用 |

59 个实例是来源 HTML 全部导航实例，不是59个页面。未对全登记册做入链或孤立页结论。25 个目标含首页；其余24个外部目标均属于本批之外的依赖集合。JSON 保留 `PROVISIONAL_URL` 等主表状态，登记匹配只证明规划身份一致，不自动把暂定路由升为批准或已实现。

## 3. 必修 Finding

### HOME-D32-G6-F02 — 型号字段误写可编辑目标

- 等级/类别：P2 / 本阶段交付合同必修；沿用主审发现的同一 ID，不另建内链重复 Finding。
- 责任：Gate 6 包作者，经总控交回；不是 Gate 8 实现错误或 Gate 2 新文案要求。
- 依据：整页 HTML 第201–204行，四组14个型号均为 `<span>`；原内容交付源 §5–6 与 Brief §5/7 的产品动作只列 Products Hub、Chloride、Sulfate 三条入口。
- 实见：D32 包 §2.1 Products 行写“型号显示名与目标”。这可能让开发方新增逐型号 href 字段及14条链接，与本包保留原链接/不变设计的声明不一致。
- 影响：首页 Products、后台编辑验收 A01/A05、未来目标依赖范围；本轮没有依据把既有型号页身份直接当作新增首页链接批准。
- 关闭条件：把型号项明确为可维护的非链接显示标签；可编辑链接目标限既有 Hub/工艺入口，或提供精确的另行批准来源。对新包身份定向复验该行及其关联 AC，不要求重做整页或全站扫描。

## 4. 依赖及停止边界

`HOME-VU-DEP-03` 已要求开发逐目标记录真实结果、保持准确 href、不伪造页面或跨站回退；`DEP-05` 保留发布条件。首页制作无须等待24个目标全部开发，但完整站点发布必须满足实际目标、法律路径、表单接收等适用合同。未获得真实 D32 运行证据，不能沿用旧 D16 的404、PASS或故障状态。

同一共享 Cookie Settings 在未启用分析状态仍须可操作；三法律页面缺失属于真实后续依赖，不通过删除链接消除。首页固定 RFQ 也不能因接收端未完成而隐藏。

本轮除 F02 外未发现新增内链合同必修。Schema F01 与证据工具兼容由并行 Gate 6 主审负责，本专项不重复裁决。报告只交总控，不更改 Manifest/Status，不启动开发、Gate 9 或发布。修订后沿用同一 review_id，限定复验受影响字段与源身份。
