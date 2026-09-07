# MARKET-EU-NL 合并 Gate 4 最终独立审查

2026-09-07 · Review ID `NL-G4-COMPLETE-IR01` · 独立审查者 `/root/gate4_be_complete`。

**结论：PASS；required Finding 0。** 审查对象是 `NL-G4-COMPLETE-20260907-V01` 工作集、`NL-G4-COMPLETE-V01-FREEZE-01` 冻结组合。完整视觉已满足当前 Gate 4B 提交要求。总控可据此登记 `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；只有用户批准准确冻结组合后才能关闭 Gate 4。本报告不批准用户对象，不启动 Gate 6。

本审查者未参与 Netherlands 制作。只读候选源、批准输入和正式证据；新增审查材料仅存放在本目录，没有修改候选、V0.7/V0.8 Manifest、历史批准或共享源。正式候选入口为 [REPORT](../../04_planning/gate4-complete-v0.1/REPORT.md)、[V0.8 Manifest](../../MARKET-EU-NL_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md)、[source-freeze](../../04_planning/gate4-complete-v0.1/approval_core/source-freeze.json) 和 [evidence-index](../../04_planning/gate4-complete-v0.1/evidence-index.json)。

## 依据及身份

实际读取根 AGENTS、Context、Index、当前 Gate 工作流 V3.1、统一标准 V2.1 的共同/Gate 4 条款及历史 V1.1、治理细则适用章节、当前 Gate 4 Agent 和三个 Skill、基线 Manifest/合同、品牌/CTA、Global Chrome、生产 Logo、共享法律/Consent 合同。已实际读过且本轮身份未变的共享材料复用原文认识，不把其他执行者摘要视作读取。另读取本页 Brief、Playbook、本页登记/关键词归属、A V0.1、批准 B V0.2、C V0.1、Gate 3 源及交接、V0.7/V0.8、旧方向冻结/批准/独立复审、本次 WORKSET/REPORT 和冻结输入。

独立重新计算 **102 条输入、源/依赖、旧证据目录及正式图片身份记录**，字节数与 SHA-256 全部一致；这是记录数，含被独立引用的对象，不冒充 102 个视觉资产。完整结果在 [independent-runtime-and-identity.json](independent-runtime-and-identity.json)。

| 对象 | 精确身份 |
|---|---|
| 原批准 HTML（18534 bytes） | `9ffe164adbf63246a36601990d1841dbb6af24fb177fbf559dbdc616a1396be3` |
| 原批准 visual-direction.css（1163 bytes） | `7bc0c880ad3dc5ceabeea9b78f3e92f0ac1740bc6ff1aa067bd8b54554ffd847` |
| 当前 input-index | `bb01611716ce30e99bfe6beba411ebd055e6b3f3e932f9997ea3057f5990a110` |
| 原 42 图 export-inventory | `856620ecbf25b16ee6245c68ab2b77e8aa850941b9103f0668826b1263a0b8c9` |
| 新 1440×3590 整页 | `2488597134b5d11e0d6dfcb8fa6ac3e6b27a927fab932d9828a7faea31cc04f0` |
| 新 768×4048 整页 | `1e33f8967f87d4a7163b1d92330ac48541e8c64e684d53ed5411c0aee0585b0f` |
| 新 390×5320 整页 | `4a631b52b1d85cec1236c725752ee92adf435e731a1f9be1c8d6c77703183a6b` |

全部正式图片 DPR1；冻结 JSON、当前 Manifest、证据索引及本次审查文档的重新计算身份见 [review-artifact-identities.json](review-artifact-identities.json)。

## 旧 42 张与新 3 张的裁决

**允许精确继承旧 42 张，且本次 3 张整页补足当前 4B 基础证据。** 理由不是旧方向已获 PASS，而是本次实际验证了：六项 HTML/CSS/字体/许可证/Logo 源依赖完全未变；旧 42 图内容、尺寸、SHA 与批准版本相同；新冻结明确引用原路径；独立从当前冻结源重新生成三端整页及 18 个正常模块/共享分段，PNG SHA 与正式证据逐字节一致。没有把 Gate 3 的简化共享继承规则外推为 Gate 4 运行豁免。

证据共有 **45 张唯一正式图片：18 张可读正常分段 + 18 张 VVVF/Documents 链接 hover/focus + 3 张 Cookie + 2 张菜单 + 1 张主 CTA hover + 3 张新增整页**。本审查逐张打开全部 45 张：整页工具显示被缩小，故只判断顺序与整体节奏；18 张可读分段在原始比例下覆盖全部真实正文及 Footer，另外 24 张状态图单独检查。每端六段的 clip 区间从 y=0 连续覆盖至3590/4048/5320，段间重叠、无漏缝；浏览器实际相邻模块边界也连续。新增整页加原尺寸分段与真实操作，形成完整 4B 覆盖；不会把单纯三张缩略长图当作充分证据。

视觉静态判读登记见 [visual-inspection.json](visual-inspection.json)。未保存重复完整栅格套件：独立重渲染仅在内存计算哈希，正式原图可直接复算。

## 独立检查结果

| 范围 | 实见与结论 |
|---|---|
| 完整批准内容/职责 | 三端浏览器 main 文字归一化后与批准 B V0.2 完全一致；12 个正文/面包屑链接的文本、顺序与 href 完全一致。五模块顺序保持。没有额外国家 Grade 推荐、仓储/港口/交付/税率命题。 |
| Hero/行动 | 长 H1、完整公司名和 Malaysia-origin 命题清楚；390 首屏内可见两项行动。RFQ 实心，Products/Documents 为次要行动。无 Buyer Clean 治理标签。 |
| NL-02 | Desktop 三等列，Tablet 标签/解释行，Mobile 顺序块；三类对象关系未变。VVVF 全称、成员公司分组语义与不确定 Grade 的边界保持相邻；长链接换行为两行但完整可读。 |
| NL-03/04/05 | 中立产品评估；COO 原批准句仅一次；Documents 一 Grade/多文档、补充 Grade 不建立映射及分别请求说明完整；RFQ Not sure 路径、MT、可选城市/港口、人工审核联系均保留。 |
| 版面/连接 | 三端滚动宽度等于逻辑宽度，正文边界无横向越界；没有省略号、隐藏裁切或不可解释固定空白。Header、面包屑、五模块、Footer 接缝连续且 Footer 闭合。长移动页由完整文字产生。 |
| 品牌/共享 | 使用批准 Inter、海军蓝/CTA teal、生产正色及反白 SVG；Markets 当前态、固定 Header/Footer RFQ、移动菜单一致；隐私 EN/BM、Cookie Policy/Settings，无 Terms。未引入 Netherlands 共享分叉。 |
| 44×44/焦点/对比 | 三端全部可见正常控件分别运行 normal/hover/keyboard focus；实际宽高均≥44px。焦点样式存在且视觉清楚。补充三端及720等效宽度测量342条状态，最小文字与正确焦点表面对比均4.5200728131:1。 |
| Menu | 768/390 实际打开首焦 Home、前后循环、Escape/Close 返回 Menu、选择关闭、背景 inert/拒焦、滚动锁。跨 Desktop 另列观察，下文不混称可见焦点恢复。 |
| Cookie | 三端实际 Close 首焦、前后循环、原生 modal 背景拒焦、Escape/Close 返回 Cookie Settings，Footer 恢复。当前 no_optional_analytics 状态与批准 owner 一致，无自造 banner 或偏好开关。 |
| 链接/状态语义 | 逐个实际点击本地拦截链接；RFQ 携 source_page_id + visible/editable Netherlands，Request Documents 仅 source_page_id，普通链接不预选产品。记录为 LOCAL_SIMULATION，未声称目标页接收。 |

独立主检查361条，无失败、无 pageerror。补充342条对比状态、四组重排/字体准备和七项覆盖层检查均满足其接受条件；计数仅用于追溯，不作为质量分值。[主脚本](verify.cjs) 与 [补充脚本](supplement.cjs) 可复跑。Chrome 152.0.7977.82 headless，本地 file，正式视口1440×900、768×900、390×844，网络请求阻止。

补充探针初版错误地把外置焦点框与按钮填充色比较，并要求原生 showModal 的背景具有显式 inert 属性，产生16条诊断失败。核对真实 CSS outline-offset 和原生 :modal/实际拒焦后，只修正测量口径；候选源未改。原始脚本/结果保留为 `supplement-original-probe.cjs/json`，校正结果是 [independent-supplement.json](independent-supplement.json)。这些不是真实页面 Finding，也没有删除失败历史。

## 非阻断观察、未测与后续归属

1. **跨 Desktop 后 BODY 焦点：已实测存在，非本次 required Finding。** 768/390 菜单打开后扩至1440，菜单隐藏、aria 状态/背景隔离/滚动锁恢复；活动元素 BODY，不能写成“返回可见 Menu”。独立按下一次 Tab 均可进入可见正常控件，未留隐藏焦点或永久键盘陷阱。此行为在已批准中立共享源、旧独立复审明确披露，本页无覆盖修改；当前 Gate 4 常规打开/退出路径满足合同。本次保留共享 owner 观察，由 Global Chrome 在 Gate 8/9 集成键盘/断点验证时处理。若该 owner 收紧到断点关闭必须迁移到可见控件，须由共享 owner 修改并重新冻结/复验消费页，不能由 NL 局部分叉；如后续发现键盘不可恢复或隐藏背景仍可操作，应升级为 required Finding。

2. **原生浏览器200%未测：不是已通过项目，也不是本次 Gate 4 阻断。** 当前标准强制1440/768/390完整视觉并要求缩放处理，未把某一浏览器原生UI操作定为本关硬性证据。批准交接与本次报告均明确将原生缩放/OS文本/实体设备/其他引擎/辅助技术留待对应验收。独立720 CSS px @2x等效重排、菜单/对话框运行正常，但只登记 LOCAL_SIMULATION，不能替代原生200%。后续 Gate 9 应实际验证原生缩放及适用设备可访问性。

3. **生产依赖仍开放。** RFQ/文档接收页可见、编辑、清除、保存、提交及归因；真实路由与 VVVF 外链可达/时效；metadata/Schema/site_scope；共享法律/Consent生产配置，均交相关 owner/Gate 8–10。当前仅核对批准链接、内容和本地发送意图，没有网络提交、生产验收或发布。

页面不存在表单、输入字段、FAQ、表格、分页、空/错误/成功反馈或页面媒体，故这些状态按批准 B/C/G3 标记 NOT_APPLICABLE；未为凑数创造状态。当前无待修复 required Finding；历史 NL-G4-IR01 的V0.2修复保持有效。最终用户批准仍是 Gate 4 关闭的必要未完成步骤。

## 总控接收

建议总控将本报告及其哈希登记到当前候选组合并展示三端完整视觉供用户批准。批准对象必须是本次冻结 `NL-G4-COMPLETE-V01-FREEZE-01`，不可用历史旧方向关闭记录自动替代。本文写入后已读回，候选源/45图身份再次验证；所有审查文件身份在 `review-artifact-identities.json`，该身份目录不递归包含自身。
