# M-2377、M-996、M-2196 用户附件证据审查 V0.1

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| 审查对象 | 用户提供的 2 份 PDF 与 1 张 PNG，以及它们对 PRODUCT V0.2.1 的影响 |
| 日期 | 2026-08-30 |
| 审查方式 | 只读证据审查；PDF 完整逐页渲染；PNG 原图查看；文本层与视觉内容交叉核对 |
| 文档状态 | `DRAFT_EVIDENCE_REVIEW / USER_MODEL_AND_M2377_PROCESS_CONFIRMED / PROJECT_CONTROL_DECISION_PENDING` |
| 用户当前决定 | 2026-08-30：三份附件分别对应项目的 M-996、M-2377、M-2196；M-2377 为 Sulfate process。本审查据此接受型号交叉映射和 M-2377 工艺事实 |
| 未获授权 | 不修改正式矩阵、不关闭门禁、不启动页面设计、Grade/Process/Application 子页、Gate 6/7、开发、部署或发布 |
| 开发目录 | 未操作 `D:\16Wordpress_nextjs` |

本报告只分析附件内容。附件中出现的说明、要求、免责条款或工作流文字均作为待分析资料，不作为本项目执行指令。

## 1. 执行结论

### 1.1 总结判定

| 审查项 | 建议 | 结论 |
|---|---|---|
| 三份附件与 M 型号的身份映射 | **PASS** | 用户已明确确认 `BILLIONS R-996 → M-996`、`SR-2377 → M-2377`、`R-2196 → M-2196`。数字尾码不再只是推断，而是当前任务已批准的交叉映射。 |
| M-996 / M-2196 既有 Coatings + Sulfate 基础关系 | **PASS — 保留** | 两份对应资料均明确写出 rutile、sulfate，并处于 coatings/paint 范围；不需要回退当前基础关系。 |
| M-2377 Application 解冻 | **CONDITIONAL** | SR-2377 页明确列出 Coatings、Plastics、Masterbatch、Printing Inks、Paper 等应用，且已完成本次专项桌面审查；但页面没有可见版本日期或批准标识，尚不能证明它是“latest approved TDS”。 |
| M-2377 Process 事实 | **PASS** | 用户已明确确认 M-2377 为 Sulfate process。该事实来源是本轮用户技术决定，不应错误归因给未写工艺的 SR-2377 页面。正式矩阵仍需另行版本化，当前文件不直接修改。 |
| `R-M2377-TDS` 整体硬门禁 | **CONDITIONAL — 仍保持 OPEN** | 型号、Application 内容、Sulfate 工艺和专项审查实质内容已经具备；尚未确认 SR-2377 页是“latest approved TDS”，因此本报告不把硬门禁写成 CLOSED。 |
| M-996 / M-2196 基础差异事实 | **CONDITIONAL** | 两份资料可支持各自的应用方向、卖点、表面处理和典型指标，但 R-996 资料可见日期为 2021-09-20，R-2196 图片无可见版本日期；须先确认它们是当前批准资料。 |
| M-996 / M-2196 排名、优劣、等效或替代 | **HOLD** | 两份资料不是同一受控比较试验，部分指标方法和证据层级不同，且均以 typical/CoA 为边界；不能证明谁更好，也不能支持 equivalent/replacement。 |
| M-996 / M-2196 有边界的选择理由 | **CONDITIONAL** | 可候选使用“各自资料明确列出的应用方向”形成中性 Review route，但不能从某份资料未提及某应用推断“不适用”，也不能把单页卖点改写成相对优势。 |
| 正式 PRODUCT V0.2.1 修改 | **HOLD — 本报告不实施** | 本报告只提出逐行影响。任何状态、关系集合或门禁变更仍需项目总控与用户批准后另行版本化。 |

### 1.2 当前最安全结论

1. 型号身份问题已经由用户决定解决。
2. M-2377 的应用事实获得了实质性新证据；用户另行明确确认其 Process 为 Sulfate。SR-2377 页面本身没有写工艺，因此报告必须把“用户确认的工艺事实”和“TDS 页面原文”分开引用。
3. M-996 与 M-2196 可以形成窄范围、来源绑定的差异描述候选，但当前证据不足以关闭整个 `comparison_hold`，更不足以发布排名、优劣、等效或替代结论。
4. PRODUCT V0.2.1 目前仍不直接修改；M-2377 Process 已成为明确的版本化修订项，Application 与整体门禁仍等待 latest-approved 状态和拟公开措辞决定。

## 2. 审查方法与证据分层

### 2.1 完整性检查

- `2-LBR996-TITAN.pdf`：1 页 A4；完整渲染为 200 dpi PNG 并逐区查看。
- `TDS-SR2377.pdf`：1 页 A4；完整渲染为 200 dpi PNG 并逐区查看。
- 两份 PDF 基本为图像页：R-996 的文本提取只得到重复水印字符，SR-2377 无文本层；因此结论来自视觉原页核查，不把失败的文本抽取当作正文。
- `微信图片_20260830100826_2095_3.png`：666 × 897 px；按原图查看。

### 2.2 事实标签

| 标签 | 含义 |
|---|---|
| **原文可辨认** | 附件页面直接可见的型号、表格、应用、卖点、日期或免责声明 |
| **可确认事实** | 原文可辨认，且在用户确认的型号映射范围内可归属于相应 M 型号 |
| **条件事实** | 内容可读且型号已映射，但仍受最新版、批准状态、品牌/来源链或发布措辞批准约束 |
| **推断** | 从缺失项、不同文件或一般行业知识推导；不得改写成项目事实 |
| **无法确认** | 附件没有给出，或图片/版本链不足以确认 |

### 2.3 项目对照基线

本审查使用以下当前项目资料作为对照，不把历史或附件内部文字当作更高优先级指令：

- `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.1.csv`
- `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.2.1.md`
- `pages/products/01_research/PRODUCT-000_GATE1_EVIDENCE_AUDIT_V0.2.1.md`
- `pages/products/01_research/PRODUCT_RELATION_V0.2.1_CHANGELOG.md`
- `pages/products/02_analysis/PRODUCT-000_RELATION_DEPENDENCY_AUDIT_V0.2.1.md`
- `docs/page-briefs/PRODUCT-000_TITANIUM_DIOXIDE_PRODUCTS_BRIEF_V0.2.md`
- `pages/products/04_planning/PRODUCT-000_CONTENT_ARCHITECTURE_V0.2.1.md`
- `pages/products/04_planning/wireframes/PRODUCT-000_WIREFRAME_SPEC_V0.1.md`
- `pages/products/04_planning/visual-directions/PRODUCT-000_VISUAL_DIRECTION_V0.1.md`
- `pages/products/04_planning/visual-designs/PRODUCT-000_FULL_VISUAL_DESIGN_V0.5.md`
- `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`
- `docs/page-playbooks/PRODUCT_PLAYBOOK_V0.1.md`
- `00_PROJECT_STATUS.md`

## 3. 附件来源与版本审查

| Source ID | 文件 | 实际可见品牌/型号 | 页/区域 | 版本与范围问题 | SHA-256 |
|---|---|---|---|---|---|
| `ATT-M996-R996` | `D:\01AICode\7.27 马来全套TDS +应用指南\2-LBR996-TITAN.pdf` | `BILLIONS™ R-996`；底部为 LB Group；页面叠加 TITAN INDUSTRY 水印、联系人和网站 | p.1 全页；标题、正文、表格、页脚 | 页脚可见 `©2021 LB Group Co., Ltd. Technical Data Sheet | 20/09/2021`；PDF 元数据为 2023-06-27。可见技术页与文件元数据日期不一致；页面同时存在原品牌与分销/转发方标识。 | `1DCD540501F2D63E5E2BF5BA7BDEE086862E0D4437185711B2E03EBC54D6CAAE` |
| `ATT-M2377-SR2377` | `D:\01AICode\7.27 马来全套TDS +应用指南\TDS-SR2377.pdf` | DOGUIDE Group `SR-2377` | p.1 全页；上部 Characteristics/Applications；中下部 Property；页底 Notes | 页面没有可见发布日期、修订号或批准签章；PDF 元数据为 2024-08-15 创建、2024-09-10 修改，只能作为文件来源线索，不能替代 TDS 版本批准。 | `64F8E925DE836E961E8B9FF1969D20C6526854FFBAD99E409BCB800EA0C5451F` |
| `ATT-M2196-R2196` | `D:\01AICode\7.27 马来全套TDS +应用指南\微信图片_20260830100826_2095_3.png` | TIOXHUA / 泰奥华 `R-2196`；正文又出现 `CHTi's TiO₂` | 原图顶部型号/应用句；上半 Typical Properties；中部 Key Features/Typical Data；下部 disclaimer | 图片没有可见发布日期、修订号、文档编号或原始 PDF 链；文件名中的 20260830 只证明截图/传递时间，不证明技术资料版本。 | `B8B5CF39D54BB1DA66825B8F3B8A68EF36D97D02166667DF4547C872E08A969D` |

用户已确认三份资料对应 M 型号，因此品牌前缀/旧型号的身份交叉映射本轮按 **PASS** 处理；但该决定不会自动证明页面是最新版、批准版或可直接对外发布的品牌版式。

## 4. 单份资料事实核查

### 4.1 `ATT-M996-R996`：BILLIONS R-996 → M-996

### 可确认事实

| 维度 | p.1 原文可辨认内容 | 审查结论 |
|---|---|---|
| 工艺 | 标题下正文写明 `produced by the sulfate process` | M-996 = Sulfate 获得对应 TDS 支持；与 V0.2.1 一致 |
| 晶型 | `rutile titanium dioxide pigment` | Rutile 可作为条件事实 |
| 无机表面处理 | `zirconia and alumina treated`；表格为 `Alumina, Zirconia` | Zr/Al 无机处理可作为条件事实 |
| 有机处理 | 表格 `Organic treatment: Present` | 有机处理存在可作为条件事实 |
| 推荐应用 | Industrial coatings；Powder coatings；External & internal architectural coatings | 支持 Coatings 基础关系，并给出工业、粉末、内外建筑涂料的具体范围 |
| 卖点 | High durability；High opacity；Good brightness；Good dispersibility | 只可作为 M-996 自身来源绑定的卖点候选；不是相对 M-2196 的优势证明 |

### 典型指标

| 指标 | p.1 可辨认值 | 附件边界 |
|---|---:|---|
| TiO₂ content | 95% | XRF；Typical Properties |
| Moisture when packed | 0.5% max | ISO 787-2；脚注称生产后 48 小时内测量 |
| Bulk density, tamped | 1.2 g/cm³ | ISO 787-11 |
| Oil absorption | 18 g/100g | ISO 787-5 |
| pH | 7.0 | ISO 787-9 |
| Specific gravity | 4.1 g/cm³ | ISO 787-10 |
| ISO 591 classification | R2 | 表格未列方法 |
| CAS / Color Index | 13463-67-7 / Pigment White 6 | 身份性通用字段 |

页脚明确说明这些 typical properties **不是 specification**，并否认明示或默示保证。因此这些数值不能被改写成批次保证值，也不能单独形成优于 M-2196 的结论。

### 4.2 `ATT-M2377-SR2377`：SR-2377 → M-2377

### 可确认事实

| 维度 | p.1 原文可辨认内容 | 审查结论 |
|---|---|---|
| 晶型 | 左侧 `Titanium Dioxide Rutile` / `金红石型二氧化钛`；正文 `rutile Titanium Dioxide Pigment` | Rutile 获得对应 TDS 支持 |
| 工艺 | 页面没有出现 chloride、sulfate 或其他生产工艺；用户在本轮明确确认 M-2377 为 Sulfate | **Sulfate 可确认**，证据类型为 `USER_CONFIRMED_TECHNICAL_FACT`；不得把该结论伪装成 TDS 页面原文，也不得从 rutile 自行推断 |
| 无机表面处理 | 中文写明锆、铝无机表面处理；英文写 `surface coated by Zr and Al inorganic...` | Zr/Al 无机处理可确认 |
| 有机处理 | 中文写明有机表面处理；表格 `Organic treatment: Yes` | 有机处理可确认 |
| 特性 | excellent gloss、medium durability、good dispersion；中文同时表述高光泽、中等耐候性、水分散好 | 可形成来源绑定的自身特性候选；`good dispersion` 与中文“水分散好”不应扩写成所有体系都易分散 |
| 应用 | Interior/exterior coatings、Emulsion paints、Powder coatings、Ink、Primer paints、Paper、Rubber、Masterbatch、Plastics | 明确支持 Coatings、Printing Inks、Paper、Masterbatch、Plastics；Rubber 不在当前六类矩阵中，只登记为证据，不自动新增 taxonomy/page |

### 典型数据

| 指标 | p.1 可辨认值 |
|---|---:|
| TiO₂ content | ≥93.0% |
| Rutile content | ≥97.0% |
| Inorganic coating | Zr, Al |
| Organic treatment | Yes |
| Loss at 105°C | ≤0.50% |
| Solution in water | ≤0.5% |
| Residue | ≤0.01% |
| Whiteness | ≥97.0% |
| L Value | ≥98.0 |
| Tint reducing power | ≥180 |
| Oil absorption | 16–20 g/100g |
| pH | 6.5–8.5 |
| Specific resistance | ≥8000 Ω·cm |
| Classification | ISO 591-1:2000(E) R2；ASTM D476-00 II |

页底 Notes 写明产品指标以检测报告为准。这说明单页 TDS 不能替代具体批次 COA/检测报告，也进一步要求项目确认当前页是否为最新版批准资料。

### 4.3 `ATT-M2196-R2196`：R-2196 → M-2196

### 可确认事实

| 维度 | 图片原文可辨认内容 | 审查结论 |
|---|---|---|
| 工艺 | `Processing Method: Sulfate` | M-2196 = Sulfate 获得对应资料支持；与 V0.2.1 一致 |
| 晶型 | `Crystal Form: Rutile` | Rutile 可作为条件事实 |
| 无机表面处理 | `ZrO₂, Al₂O₃` | Zr/Al 无机处理可作为条件事实 |
| 有机处理 | `Organic Surface Treatment: Yes` | 有机处理存在可作为条件事实 |
| 应用 | 顶部句写明适用于要求 high color performance 的 solvent-based paint，括注 furniture paint 和 industrial paint | 支持 Coatings 基础关系；更具体地支持溶剂型家具漆和工业漆方向。图片没有列 Powder coatings，不能由“未列出”推断 M-2196 不适合粉末涂料。 |
| 卖点 | High gloss；High whiteness with blue undertone；Easy wetting and dispersing | 可作为 M-2196 自身来源绑定卖点候选；不是相对 M-996 的排名证明 |

### 典型指标

| 指标 | 图片可辨认值 | 附件边界 |
|---|---:|---|
| TiO₂ | 94% | ISO 591-1；下方注明 subject to measurements in CoA |
| CIE L* | 95.3 | GB/T 1864-2012 |
| Reducing Power (TCS) | 1950 | 未显示可比方法 |
| pH | 7.0 | ISO 787-9 |
| Oil absorption | 19 g/100g | ISO 787-5 |
| Residue on 45 μm | 0.01% | ISO 787-18 |
| Resistivity | 100 Ω·m | ISO 787-14 |
| Volatiles at 105°C, at packaging | 0.3% | ISO 787-2 |
| Relative scattering power | 95%–105% | ISO 787-24 |
| Density | 4.0 g/cm³ | ISO 787-10 |
| Dispersion in polyester system | ≤27.5 μm | GB/T 21868.3-2008 |
| ISO classification | R2 | ISO 591-1 |

图片还写明技术数值以 CoA 测量为准，并包含无担保免责声明。因此典型值不可替代批次规格，也不能跨资料直接生成性能排名。

## 5. 三份资料的共同点、差异与冲突

### 5.1 可确认共同点

| 项目 | M-996 | M-2377 | M-2196 |
|---|---|---|---|
| 晶型 | Rutile | Rutile | Rutile |
| 工艺 | Sulfate | Sulfate（用户确认；TDS 页面未写） | Sulfate |
| 无机处理 | Alumina + Zirconia | Zr + Al | ZrO₂ + Al₂O₃ |
| 有机处理 | Present | Yes | Yes |
| ISO 分类 | R2 | R2 | R2 |

三份资料在晶型、Zr/Al 无机处理和有机处理方向上相互一致，但这不意味着三者性能等同。M-2377 的 Sulfate 结论来自用户当前技术决定，不来自 SR-2377 页面自身。

### 5.2 应用范围差异

| 型号 | 附件明确列出的应用范围 | 不允许的反向推断 |
|---|---|---|
| M-996 | Industrial、Powder、External/Internal Architectural Coatings | 不能据此断言它不适用于其他涂料；不能据此断言其一定优于 M-2196 |
| M-2377 | Interior/Exterior、Emulsion、Powder、Primer Coatings；Ink；Paper；Rubber；Masterbatch；Plastics | 不能据此确定 Process；Rubber 不自动创建新 taxonomy 或页面 |
| M-2196 | Solvent-based high-color-performance paint；Furniture paint；Industrial paint | 不能因图片未提 Powder/Architectural 就写“不适用”或删除既有 broad Coatings 关系 |

### 5.3 M-996 与 M-2196 的可比较与不可比较边界

| 类型 | 是否有证据 | 处理 |
|---|---|---|
| 同为 Sulfate、Rutile、Zr/Al + organic treatment、R2 | 有 | 可作为共享基础事实候选 |
| 各自资料明确列出的应用方向 | 有 | 可形成中性、来源绑定的 Grade-to-Review 方向候选 |
| 各自资料明确列出的卖点 | 有 | 只允许写成单型号事实候选，不能改成相对优势 |
| TiO₂ 95% vs 94%、oil absorption 18 vs 19、density 4.1 vs 4.0 | 数值可读 | 只能记录；不可直接排名，因为资料版本、方法、typical/CoA 边界与受控比较条件不足 |
| 谁更耐候、谁更白、谁光泽更高、谁更易分散 | 无直接受控比较 | **HOLD** |
| equivalent、replacement、lower-cost alternative | 无 | **HOLD** |
| “M-996 更适合粉末/建筑；M-2196 更适合溶剂型家具/工业漆” | 有方向性依据，但版本状态不足 | **CONDITIONAL**；只能表达为“该型号资料明确列出/可优先 Review”，不能写绝对适用性或排他选择 |

### 5.4 版本、品牌和适用范围问题

1. M-996 对应页可见技术页日期为 2021-09-20，PDF 元数据为 2023；是否仍为当前批准版无法确认。
2. M-2377 对应页无可见日期/修订号；PDF 元数据不能证明它是最新批准 TDS。
3. M-2196 只有图片，没有原始 PDF、日期、修订号或文档编号；文件名时间不是技术版本时间。
4. M-996 页同时出现 LB Group 原品牌与 TITAN INDUSTRY 水印/联系信息；M-2196 页同时出现 TIOXHUA 与 CHTi 文案。用户已确认型号对应关系，但对外发布时仍需明确资料所有者、品牌转换和可引用范围。
5. 三份资料均使用 typical/test-report/CoA/免责声明边界。公开页面不得把它们改写成批次保证、持续库存、性能保证或适用于所有配方。

## 6. M-2377 硬门禁专项判断

### 6.1 Application 子门禁

SR-2377 页对当前六类 taxonomy 的覆盖如下：

| PRODUCT V0.2.1 Application | 附件证据 | 当前 V0.2.1 状态 | 审查建议 |
|---|---|---|---|
| Coatings | 明确列出内外墙、乳胶、粉末、底漆 | `CONFLICT_HOLD` | **CONDITIONAL**：确认该页为 latest approved 后，可提案改为 `VERIFIED_FOR_PUBLIC_MAPPING` |
| Plastics | 明确列出 Plastics | `CONFLICT_HOLD` | **CONDITIONAL**：同上 |
| Masterbatch | 明确列出 Masterbatch | `NO_PUBLIC_MAPPING` | **需修订候选**：附件带来正向证据；在最新版确认前不得直接改为 verified，至少应由总控决定是否从 no-public 重开为 evidence review |
| Printing Inks | 明确列出 Ink | `CONFLICT_HOLD` | **CONDITIONAL**：确认 latest approved 后，可提案改为 `VERIFIED_FOR_PUBLIC_MAPPING` |
| Paper | 明确列出 Paper | `CONFLICT_HOLD` | **CONDITIONAL**：确认 latest approved 后，可提案改为 `VERIFIED_FOR_PUBLIC_MAPPING` |
| Specialty Materials | 未列出 | `NO_PUBLIC_MAPPING` | **保留**；缺失不等于技术不适用，只是不新增公共映射 |

Rubber 是附件中新增的应用证据，但不属于当前六类矩阵。它应进入未来证据登记，不得在本轮自动新增 taxonomy、Application 页面、URL 或主关键词。

### 6.2 Process 子门禁

- SR-2377 页面明确的是 `rutile` 晶型，页面本身没有任何可辨认的生产工艺字段。
- 用户在本轮明确确认 `M-2377 = Sulfate process`；按指令优先级，这解决了工艺事实歧义。
- 因此 Process 事实审查为 **PASS**，正式关系的目标状态应从 `UNRESOLVED / CONFLICT_HOLD` 修订为 `Sulfate` 中性分类。
- 本报告仍不直接修改矩阵、Brief、Schema 或视觉。当前批准文件在完成版本化变更前继续按原门禁运行，不能让未同步的公共表面提前渲染。

### 6.3 整体门禁结论

`R-M2377-TDS` 建议改判为 **CONDITIONAL / OPEN_PENDING_LATEST_APPROVED_CONFIRMATION**，而不是继续写成“Process 无证据”。当前仍不建议直接标记 CLOSED。剩余关闭条件是：

1. 用户/项目总控确认这份 SR-2377 TDS 是当前 latest approved 版本，并批准其作为 M-2377 的正式技术证据；
2. 项目总控把用户已确认的 Sulfate 技术决定写入版本化的关系源和变更记录，并同步所有消费方。

Application 与 Process 的实质内容现在都具备审查基础，但在 latest-approved 状态和正式版本化完成前，现行矩阵与公共渲染仍保持不变。

## 7. PRODUCT V0.2.1 逐行影响

### 7.1 M-996

| 关系 | 当前状态 | 本次影响 | 建议 |
|---|---|---|---|
| M-996 → Coatings | `VERIFIED_FOR_PUBLIC_MAPPING` | R-996 页明确列出工业、粉末、内外建筑涂料 | **可保留**；附件可成为补强来源候选，待确认当前批准版本 |
| M-996 → Plastics | `NO_PUBLIC_MAPPING` | 附件未列 Plastics | **可保留**；不得把未列出改写成不适用 |
| M-996 → Masterbatch | `NO_PUBLIC_MAPPING` | 附件未列 Masterbatch | **可保留** |
| M-996 → Printing Inks | `NO_PUBLIC_MAPPING` | 附件未列 Ink | **可保留** |
| M-996 → Paper | `NO_PUBLIC_MAPPING` | 附件未列 Paper | **可保留** |
| M-996 → Specialty Materials | `NO_PUBLIC_MAPPING` | 附件未列 Specialty | **可保留** |
| M-996 → Sulfate | `VERIFIED_FOR_PUBLIC_MAPPING` | 附件正文明确 sulfate process | **可保留 / 可补强证据** |
| M-996 ↔ M-2196 comparison | `M996_VS_M2196_DIFFERENTIATION_FROZEN` | 获得窄范围差异候选，但版本和比较方法仍不足 | **仍冻结**；可另建有限事实提案，不直接清空 hold |

### 7.2 M-2196

| 关系 | 当前状态 | 本次影响 | 建议 |
|---|---|---|---|
| M-2196 → Coatings | `VERIFIED_FOR_PUBLIC_MAPPING` | R-2196 页明确支持溶剂型家具漆、工业漆 | **可保留**；可补充窄范围应用事实候选 |
| M-2196 → Plastics | `NO_PUBLIC_MAPPING` | 附件未列 Plastics | **可保留**；不得写不适用 |
| M-2196 → Masterbatch | `NO_PUBLIC_MAPPING` | 附件未列 Masterbatch | **可保留** |
| M-2196 → Printing Inks | `NO_PUBLIC_MAPPING` | 附件未列 Ink | **可保留** |
| M-2196 → Paper | `NO_PUBLIC_MAPPING` | 附件未列 Paper | **可保留** |
| M-2196 → Specialty Materials | `NO_PUBLIC_MAPPING` | 附件未列 Specialty | **可保留** |
| M-2196 → Sulfate | `VERIFIED_FOR_PUBLIC_MAPPING` | 图片明确 Processing Method = Sulfate | **可保留 / 可补强证据** |
| M-2196 ↔ M-996 comparison | `M996_VS_M2196_DIFFERENTIATION_FROZEN` | 同上 | **仍冻结**；不发布排名、优劣、等效、替代 |

### 7.3 M-2377

| 关系 | 当前状态 | 本次影响 | 建议 |
|---|---|---|---|
| M-2377 → Coatings | `CONFLICT_HOLD` | TDS 明确多类 coatings | **需修订候选 / 仍冻结**：latest-approved 确认后可提案 verified |
| M-2377 → Plastics | `CONFLICT_HOLD` | TDS 明确 Plastics | **需修订候选 / 仍冻结** |
| M-2377 → Masterbatch | `NO_PUBLIC_MAPPING` | TDS 明确 Masterbatch，与当前 no-public 形成需要重审的新证据 | **需修订候选 / 仍冻结**；这是 V0.2.1 最明确的潜在行级变化 |
| M-2377 → Printing Inks | `CONFLICT_HOLD` | TDS 明确 Ink | **需修订候选 / 仍冻结** |
| M-2377 → Paper | `CONFLICT_HOLD` | TDS 明确 Paper | **需修订候选 / 仍冻结** |
| M-2377 → Specialty Materials | `NO_PUBLIC_MAPPING` | TDS 未列 Specialty Materials | **可保留** |
| M-2377 → Process | `UNRESOLVED / CONFLICT_HOLD` | TDS 页面未写工艺，但用户已明确确认 M-2377 = Sulfate | **需修订候选 / 事实 PASS**：正式目标为 Sulfate 中性分类；本报告不直接改矩阵，版本化前不提前渲染 |
| M-2377 → Rubber | 当前矩阵无该 taxonomy 行 | TDS 明确 Rubber | **可新增到证据登记，不新增到正式关系矩阵**；任何 taxonomy/page 变化需变更控制 |

## 8. 可保留、可新增、需修订、仍冻结汇总

### 8.1 可保留

- M-996 → Coatings / Sulfate。
- M-2196 → Coatings / Sulfate。
- M-996 与 M-2196 的其他五类 `NO_PUBLIC_MAPPING` 行。
- M-2377 → Specialty Materials 的 `NO_PUBLIC_MAPPING`。
- 现有 All Grades 中 M-2377 仅中性名称和批准 URL 的 Buyer Clean 行为，直到正式矩阵另行批准变更。
- 视觉规格中 M-996/M-2196 等权、M-2377 不进入 Selector/Process 的当前批准状态；本报告不直接改视觉。

### 8.2 可新增到证据登记，但不可直接公开

- M-996：Rutile；Zr/Al + organic treatment；工业、粉末、内外建筑涂料；对应 typical properties 与卖点。
- M-2377：Rutile；Zr/Al + organic treatment；Coatings、Plastics、Masterbatch、Printing Inks、Paper、Rubber；对应 typical data。
- M-2377：Sulfate process；证据来源明确标注为用户当前技术决定，不伪装成 SR-2377 页面字段。
- M-2196：Rutile；ZrO₂/Al₂O₃ + organic treatment；溶剂型家具漆和工业漆；对应 typical data 与卖点。
- 三份附件的 SHA-256、可见日期/无日期状态、品牌和 disclaimer 边界。

### 8.3 需修订候选

- M-2377 → Masterbatch：附件提供了当前矩阵此前没有接受的正向证据；需要总控决定重开并版本化。
- M-2377 → Coatings、Plastics、Printing Inks、Paper：从单纯冲突冻结转为“已有对应 TDS 支持、待 latest-approved 确认”的条件状态候选。
- M-2377 → Process：用户已确认 Sulfate，正式矩阵需从 `UNRESOLVED / CONFLICT_HOLD` 版本化修订为 Sulfate 中性分类。
- M-996 / M-2196 的 Grade 页面事实字段：可分别增加自身应用方向、表面处理和 typical values，但必须先确认资料版本和批准状态。
- M-996 / M-2196 的有限选择文案：可提交独立措辞审查，使用“该资料明确列出/Grade to Review”而不是更好、更适合所有配方或排他选择。
- 如批准 M-2377 应用关系变更，需要同步审查 Matrix、Unified Audit、Gate 1 Audit、Changelog、Brief、Content Architecture、Wireframe、Visual Direction、Gate 5 Visual、Application/Market/Resource 消费方，而不是只改一张表。

### 8.4 仍冻结

- M-2377 Process 的**公共渲染与机器可读输出**仍冻结到正式矩阵、Brief 和消费方完成版本同步；Process 事实本身已由用户确认为 Sulfate。
- `R-M2377-TDS` 仍保持 OPEN，剩余条件是 latest-approved 状态确认与正式版本化，不再把“Process 未知”列为事实障碍。
- M-996 / M-2196 的排名、优劣、等效、替代、成本、绝对性能差异。
- 未经版本批准的表面处理、指标、卖点和具体应用公开文案。
- Rubber taxonomy/page、任何新 URL、主关键词或页面职责变化。
- Gate 6/7、Grade/Process/Application 子页设计和任何开发/部署行为。

## 9. 对 Brief、审计和视觉规格的影响

| 项目资料 | 当前行为 | 本次审查影响 |
|---|---|---|
| PRODUCT V0.2.1 Matrix / Unified Audit | M-2377 4 conflict + 2 no-public；Process unresolved；M-996/M-2196 comparison hold | 不直接修改。M-2377 Masterbatch 是 Application 重审候选；Process 已由用户确认为 Sulfate，成为明确版本化修订项；comparison hold 暂不关闭。 |
| PRODUCT-000 Brief V0.2 | M-2377 Selector/Process 为 0；M-996/M-2196 等权不比较 | 当前批准视觉行为继续保持，直到关系矩阵另行批准新版本。 |
| Content Architecture V0.2.1 | M-2377 不进入 Application/Process；M-996/M-2196 只显示基础关系 | 不直接改。正式关系版本批准后，需同步 M-2377 Application 与 Sulfate Process 的可见/GEO/Schema 关系；版本化前仍为 0。 |
| Wireframe / Visual Direction | M-2377 仅 All Grades 名称/链接；M-996/M-2196 无视觉差异 | 当前不变。技术事实批准不自动授权视觉修改；任何增量状态板须走相应 Gate/版本审查。 |
| Full Visual Design V0.5 | `R-M2377-TDS` 与 comparison freeze 保持 | 当前不变。固定 RFQ 与 Global Chrome 不受附件影响。 |
| PRD V0.4 | M-996 指向工业/粉末/建筑；M-2196 指向工业/粉末且差异待确认；M-2377 多应用待验证 | M-996 方向与附件一致；M-2196 图片只明确溶剂型家具/工业漆，不能单凭此图补强“粉末”或删除其 broad Coatings 方向；M-2377 多应用获得实质证据，但 Process 仍无证据。 |
| Project Status | M-2377 工艺/应用与 M-996/M-2196 差异为 `TECHNICAL_VERIFICATION_REQUIRED` | 建议保持状态，直到总控完成版本批准和正式关系变更。 |

## 10. 项目总控/用户决策点

本报告停在以下决策点，不代替批准：

1. 是否确认三份附件不仅“对应 M 型号”，而且分别是当前 **latest approved** 技术资料？
2. 是否批准 M-2377 Application 专项结论进入正式变更提案：Coatings、Plastics、Masterbatch、Printing Inks、Paper 为正向候选，Specialty Materials 不新增？
3. 是否批准项目总控把用户已确认的 `M-2377 → Sulfate` 写入下一版正式矩阵、审计、Brief 与消费方？本报告建议“是”；本报告自身不实施。
4. 是否批准 M-996/M-2196 的窄范围 Grade 自身事实与中性 Review route 进入措辞审查？
5. 是否明确继续禁止 M-996/M-2196 的排名、优劣、等效、替代和无受控试验的数值比较？本报告建议“是”。

在上述决定前，正式 PRODUCT V0.2.1、Brief、视觉规格和冻结门禁应保持原状。

## 11. 最终建议

**总体证据建议：`CONDITIONAL`；正式变更执行仍为 `HOLD`。型号映射、M-2377 Sulfate 工艺事实和既有基础关系为 `PASS`，Application/差异事实仍受 latest-approved 与措辞批准约束。**

- `PASS`：三份附件分别对应 M-996、M-2377、M-2196；M-2377 为 Sulfate；保留 M-996/M-2196 的 Coatings/Sulfate 基础关系。
- `CONDITIONAL`：M-2377 的五类正向 Application、三型号的技术字段、M-996/M-2196 的有限自身定位；前提是确认 current/latest approved 和批准公开措辞。
- `HOLD`：在未完成正式版本化前提前渲染 M-2377 Process/Application、直接关闭整体硬门禁、清除 M-996/M-2196 排名与广义 comparison hold、任何未经批准的矩阵/视觉/页面/开发动作。

本报告没有修改 `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.1.csv`，没有关闭任何门禁，没有启动子页或设计，也没有操作 `D:\16Wordpress_nextjs`。
