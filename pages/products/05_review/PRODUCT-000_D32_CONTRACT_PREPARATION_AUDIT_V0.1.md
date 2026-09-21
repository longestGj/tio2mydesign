# PRODUCT-000 D32 合同准备审计 V0.1

2026-09-20；执行：`/root/product_d32_contract_audit`；模式 `PLANNING_REVIEW / PREPARATION_ONLY`。仅核对后续交付的合同差异，不是 Gate6 准入、批准或 Gate9 运行验收；没有读取 D16 代码、修改合同、变更 URL 或发送外部消息。

## 权威输入

- [完整 Brief V0.4](../../../docs/page-briefs/PRODUCT-000_TITANIUM_DIOXIDE_PRODUCTS_BRIEF_V0.4.md)，全文；当前登记 PRODUCT-000 `/products/`，主词 `titanium dioxide pigment`。
- [旧交付 Manifest V0.4](../06_handoff/PRODUCT-000_GATE7_HANDOFF_MANIFEST_V0.4.md)，及其主交付包 V0.3、CMS/API/component V0.3、SEO/GEO V0.3、响应交互 V0.3、acceptance/blockers V0.3、isolation V0.4 原件，全文。
- [2026-09-02 Gate9 closure](PRODUCT-000_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md)：仅证明原 D16 候选，不能移植其 PASS。
- [D32 归属决定](../../../docs/architecture/DEVELOPMENT_OWNER_D32_SWITCH_DECISION_V1.0.md)、[当前控制记录](PRODUCT-000_D32_GATE3_GATE9_CONTROL_V0.1.md)、[当前 D32 Manifest](../PRODUCT-000_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md)。用户连续授权含明确 Gate5 内容审查，Gate8 指定“01开发”；不扩展子页面。
- [七页 Hero 批准组合](../../../docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_APPROVED_BASELINE_MANIFEST_V1.0.md)及 [Products binding](../04_planning/PRODUCT-000_ROOT_PAGE_HERO_GATE4_REFERENCE_BINDING_V1.0.md)。binding 原始 DRAFT 字样由准确批准组合覆盖，不能据此重启其批准。

## 已能解释的差异

| 项 | 来源及覆盖解释 | D32 交付应明确的要求 |
|---|---|---|
| 开发归属/技术栈 | D32 切换决定§2–3覆盖旧 D16/Next 实现指向；旧主包§7本来就是技术中立 | WordPress 原生承接语义结果；不强制旧 API、存储名、组件目录或 Next 检查。不迁移旧 commit/PASS。 |
| 14 型号及动作 | Brief§7.2/11、CMS§12优先要求保留14行；closure§3确认旧候选 Grade actions fail closed | 未就绪仍显示型号和全文摘要，省略该型号动作及空槽；不能删目录行、创建假目标、改为其他目标。CR-901 分类始终存在，动作单独按 Grade readiness。发布依赖仍开放。 |
| Process/Support | Brief§7.1、CMS§5/8及 isolation V0.4 | Process 2/1/0只数 Chloride/Sulfate 路由卡，不控制父标题/引言/CR-901行；Support 3/2/1/0整体条件隐藏。不可把全部 Process 内容隐藏。 |
| RFQ预填 | acceptance§7仅传明确 Application/Grade；isolation§8允许来源归因；RFQ [接收字段合同 V1.0 §7](../../conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_CMS_API_COMPONENT_MAPPING_V1.0.md)提供语义键 | `source_page_id=PRODUCT-000`仅内部；`application_id`来自用户实际选择，默认 Coatings 展示不等于用户选择；无独立型号选择动作时不推定 `grade_id`。有效预填在接收页可见可编辑，无效值安全清空，不产生 canonical 变体。具体编码由双方实现映射，不在 Hub 内造表单。 |
| 内容编辑/受控关系 | CMS§1声明语义键而非存储名；§6要求当前批准摘要与可选Schema description同源；Brief§6锁定关系 | 后台支持正常内容编辑，不用“当前批准字符串等于硬编码常量”锁死运行。交付初值及本次验收逐字核准；身份、scope、关系、路由、taxonomy与内部来源字段区分管理，改摘要不自动改关系；当前编辑后的正文与机器字段保持同源。 |
| Hero/Chrome | 后出的七页 Hero 批准组合只覆盖其 Hero 范围；旧 Manifest§6明确新 Chrome 语义覆盖旧 PNG CURRENT 像素 | 共享 RootPageHero 的 Products 变体；正文不照搬首页。复用同一 Header/Footer/Menu/Cookie；Products current、固定 RFQ、生产 Logo 与首页回归；旧截图不恢复 CURRENT 标签。 |
| 本页通过与发布 | closure§4/6保留子目标/RFQ release blockers，曾在本体无缺陷时关闭原候选 | D32重新验证本体和真实依赖。不能因旧合同有依赖就阻止 Gate3–6；也不能把单页通过/逐页部署方向视为全部目的页可用或公开索引。 |
| 数据升级和回归 | 当前控制记录末段引用“01开发”只读接入：schema_version=1严格集合，首页24目标404旧断言 | Gate6规定保留现有 CMS 编辑和首页数据、兼容/幂等/可恢复迁移；技术方法由D32决定，不重跑bootstrap覆盖数据。新增产品页独立记录及预览；产品200、新首页链接状态和共享组件回归用新证据，保留旧证据。此行是接入回执引用，非本审计独立源码验证。 |

## 必须在正式交付前消除的真实缺口

1. **准备项 P01：未就绪 Grade 的机器图状态需明确。** SEO合同§5/6/10要求14项 ItemList且每项绑定URL，§7又禁止 unresolved URL；Brief要求14身份与目录一直存在。已明确的可见行/动作行为不等于 Schema 零就绪状态已有精确定义。建议 Gate6 明确预览/未就绪状态保留14个有序身份，仅就绪项输出可导航 URL，或明确另一符合现有语义的机器图策略；不得擅自减少14行或输出假 URL。若改变既有必需 Schema 结构，按原批准责任处理并记录，不让 Gate8 自行猜测。
2. **准备项 P02：不能新造物理设备阻塞。** 当前产品响应验收§1/11要求1440/1024/768/390、键盘、焦点、44px、菜单、FAQ、无溢出等，没有明文要求实际触屏硬件、实际读屏软件或原生200% UI缩放。Gate9配合参考只说“合同要求真实UI zoom时”才记录，不普遍强制。首页[例外关闭](../../home/07_qa/HOME-001_D32_GATE9_USER_EXCEPTION_CLOSEOUT_V1.0.md)本身限首页候选，不能当本页豁免；但也不能反过来把首页A09三项硬加给本页。正式Gate6逐项标适用来源；无新增适用要求时记录能力覆盖边界即可，不需要用户再豁免不存在的必需项。
3. **准备项 P03：逐页部署的环境及发布状态由当前开发流程落实。** 已有用户逐页部署方向不应被旧“部署未授权”日期记录否定；当前回执尚无公开目标配置。正式交付应引用“00首页开发”建立的实际流程与环境；Hub子目标/RFQ未就绪时允许的预览部署与公开发布/索引状态分别记录。不能本审计发明公开上线例外。

## 交回

准备审计完成。P01交总控在Gate6中消歧；P02避免无依据加码；P03待当前部署流程提供准确引用。其余为有来源的承接要求，不要求重复研究、重做已批准内容或增加Gate。正式Gate6仍应消费已关闭的本轮Gate3/4/5成果及冻结身份后独立审查。
