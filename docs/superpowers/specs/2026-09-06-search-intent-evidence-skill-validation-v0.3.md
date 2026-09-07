# 搜索意图证据分析 · 实际采集与首版验证 V0.3

- 日期：2026-09-06。
- 当前状态：`PROJECT_OWNED_SKILL_CANDIDATE / LIMITED_METHOD_VALIDATION_COMPLETE / NOT_INSTALLED / NOT_ENABLED`。
- 执行来源：用户同意验证并编写第一项 Skill，随后“现在我们回到我们的任务上面来”“那就继续”。本次仅方法建设，不授权 Paper 页面策划或开发。
- 批准方法：[设计 V0.1](2026-09-06-search-intent-evidence-skill-design-v0.1.md)。[首轮 V0.1](2026-09-06-search-intent-evidence-skill-validation-v0.1.md)、[浏览器 V0.2](2026-09-06-search-intent-evidence-skill-validation-v0.2.md)保留为历史观察，不回写当时的失败或未实现状态。
- 方法源：[SKILL.md](../../../skills/search-intent-evidence-analysis/SKILL.md)。无公共目录安装、运行链接、账号配置变更或其他两项 Skill 实现。

## 1. 验证分层，不混报结果

| 层次 | 实际目的 | 不能证明的事情 |
|---|---|---|
| 原合成案例 5 次无 Skill | 检查已整理材料下是否有预定缺陷；结果无缺陷 | 不能宣称 Skill 增益，也不能证明自主采集质量 |
| 本次从零采集 1 次无 Skill + 独立审查 | 观察真实检索、选源、归纳过程 | 单次结果不代表所有 Agent 都会失败 |
| 真实材料压缩回放，各 5 次无/有 Skill | 检查同一材料下的解释与证据边界 | 输入已有局限提示，不能作为从零采集有效性的因果证明 |
| 从零有 Skill 小样本 | 检查新采集链与解释是否落实方法 | 不构成统计显著性或长期稳定性保证 |
| 结构检查 | YAML、名称与描述是否符合 Skill 文件结构 | 不替代行为验证、工具验证或运行启用 |

所有独立回放使用新上下文、同一模型 gpt-5.6-sol/medium、同一研究题及输入。控制组不读目标 Skill、设计、评分或其他答案；有 Skill 组任务仅额外提供方法文件。第五份有 Skill 执行者还报告使用通用 verification-before-completion，因此不能称严格无其他指导变量的盲试。五份输出生成期间未修改方法文字。

## 2. 实际无 Skill 采集发现的缺陷

原始输出：[live-baseline-2026-09-06.md](../../../99_workspace/search-intent-evidence-skill-validation/live-baseline-2026-09-06.md)，SHA-256 `2AED05B24924F12100B02E0179F05B3CF9AD37BCE7B5B20944BD122E000A46D8`。

独立审查：[live-baseline-independent-review.md](../../../99_workspace/search-intent-evidence-skill-validation/live-baseline-independent-review.md)。审查者只读该原始报告，未读取目标 Skill 或设计；属于报告内部证据充分性审查，未复开来源。

1. **原词意图被定向扩展样本影响。** 12 个查询中含 4 个制造商 site 查询以及 supplier/TDS 等限定词；结果没有逐查询分开，却得出 `Primary interpretation: commercial investigation with technical qualification`。这可作为探索假设，不能确立原词主要意图。
2. **查询到来源的选择过程不可复核。** 有查询清单与 URL/正文位置，但没有哪条查询返回哪条来源、为何选中或排除的记录；无法核验“prominent/repeatedly”等分布结论。
3. **行动与阶段推断超过记录。** 报告写 `contact/sample routes` 和可能后期采购阶段，但来源摘要只登记 expert contact、TDS、选择指标等，没有样品申请入口定位。应补实际观察或降低为分析者待查线索。

好的边界同时保留：未伪造 UK 排名、指标、当地供货，也未直接决定页面。这不是全盘否定基线报告。

首版方法只针对上述缺陷及已批准四工具口径建立采集/分析步骤，不包含整套 Gate 1 角色、交付清单或审批管理。

## 3. 四条工具路径本轮状态

| 能力 | 实际结果 | 局限 |
|---|---|---|
| web_search | 独立采集实际查询并返回来源 | 通用结果不称 UK Google Top 10 |
| web_fetch | 实际读取代表 HTML/PDF 正文；失败来源如实排除 | 读取范围与资料日期不等于全部内容已核实 |
| 内置浏览器 Google | 原词 `titanium dioxide for paper` 查询成功，读取页面 accessibility tree | 单一已登录个性化会话；不是英国用户整体样本 |
| 内置浏览器 Semrush | Keyword Overview 实际输入原词，并从默认 Germany 切换 UK 后读到报告 | 数据缺失仍为缺失；不等于浏览器查询失败 |

浏览器曾发生多次读取或操作超时；恢复后先检查状态，再使用可用读取方式。不能将本次成功写成浏览器可靠性问题彻底修复。两站已有登录态，本轮未要求密码、未绕过验证、未购买/升级、未变更账号项目。

### Google 口径

- URL：`https://www.google.com/search?q=titanium+dioxide+for+paper&hl=en&gl=gb`。
- 日期：2026-09-06；英语；footer United Kingdom；账号个性化与位置影响仍存在，不保存账号身份或具体个人位置。
- 观察到 9 个普通 web entries，按文档顺序记录，不称前十排名；还有 AI Overview 和 shopping cards。
- 原词样本同时出现厂商应用/产品、行业科普、手工造纸小包装零售、混合用途产品及市场研究报告；不能为既定 B2B 页面背景排除反例。
- 没有记录 PAA 不证明其他会话不存在。AI Overview 文案或数值不在本轮升级为产品事实。

### Semrush 口径

- URL：`https://zh.semrush.com/analytics/keywordoverview/?q=titanium+dioxide+for+paper&db=uk`。
- UK database / Desktop / 页面日期 2026-09-06 / USD。
- 原词 Search volume、KD、Intent、CPC：均显示不可用，不能填 0。
- Global volume：10；US：10、100%。这是全球分布，不是 UK 量。
- 唯一变体 `titanium dioxide for paper making`：UK volume 0、KD 不可用；该行和总变体量 0 不得挪给原词或解释为市场无需求。
- Questions、related keywords 不可用；SERP analysis 未观察到填充结果行。

## 4. 回放材料与评价口径

材料：[live-replay-input.md](../../../99_workspace/search-intent-evidence-skill-validation/live-replay-input.md)，SHA-256 `201FEE21EE783D617C62DACD2B2AFE1678F7D1F1EAB6F8F1DCBA4ACF0C094100`。

材料只保留观察、查询、来源及实际缺失，不包含原报告意图结论或独立审查意见。A 为原采集压缩来源记录，B 为主任务原词 Google 观察，C 为 Semrush UK 实际报告。它经过人工整理且提示了局限，不能冒充无引导的自主采集测试。

检查实际含义而非关键词命中：原词与定向扩展是否混算；链条缺失是否诚实；是否虚构样品 CTA/购买阶段；是否保留其他解释；原词/变体/全球/UK/未知/0 是否区分；问题线索是否有来源、未被当成读者优先级；是否越权规划页面。

### 4.1 五次无 Skill 回放

原始输出位于同一验证目录，文件名 `replay-control-1.md` 至 `replay-control-5.md`；前两份由主任务原样保存执行者最终回答，后三份由执行者直接写文件。主任务逐份全文阅读。

| 次数 | 实际观察 | 结论 |
|---|---|---|
| 1 | `Commercial investigation is plausible`，明确不确定职业/阶段/主导意图；区分原词不可用、变体 0 和 US 10 | 未复现原始强主导意图或样品入口误判；来源链缺失概述过宽，未专指 A |
| 2 | 明确 `B2B procurement intent cannot be assumed`；保留 craft 解释与样品记录缺失 | 核心边界守住；`no UK volume` 不如 unavailable 准确，且 A 的 provenance 缺失概述到整份记录 |
| 3 | 混合意图、不确定职业/阶段；样品未保留不代表不存在 | 核心边界守住；`some observed demand` 把结果呈现叫作需求，不宜沿用 |
| 4 | 两类可能需求、不证明用户身份；不决定页面 | 核心边界守住；加入 `dispersion`，但压缩输入对应行未记录该术语，属于待查扩展而非直接来源观察 |
| 5 | 重叠意图、不证明 UK 需求；变体零不代表没有搜索 | 核心边界守住；将变体 0 解释为工具稀疏性仍是推测，不是已核实原因 |

### 4.2 五次有 Skill 回放

原始输出为 `replay-skill-1.md` 至 `replay-skill-5.md`，主任务逐份全文阅读。

| 次数 | 实际观察 | 结论 |
|---|---|---|
| 1 | 将 A 缺失映射与 B 原词观察分开；主导意图/职业/阶段均不确定；Semrush unavailable 明确不等于零 | 核心目标符合；`No sample-request CTA was observed` 应理解为本记录未见，不是完整网页不存在 |
| 2 | A 不能代表结果分布；Google 保留零售反例；问题注明 prompted/summarised/gap | 核心目标符合；缺失链条没有伪补 |
| 3 | 分别说明 A 选源、B 个性化原词；比较问题明示 inferred，UK供货明示 analyst-generated | 核心目标符合；并非所有问题都已获得答案 |
| 4 | A 扩展不能推断原词频率；零售为工业采购解释的反例；原词未知与变体零分开 | 核心目标符合，但问题中 `dispersion` 超出输入 A3/A6 保留记录，仍需改标待查线索 |
| 5 | `Its sources support content observations, not original-query prevalence`；未伪造用户或样品 | 核心目标符合；source-explicit/content-derived 混合标签不够精细，不能据此声称每个子命题都已逐项证明 |

**如实评价：** 五次有 Skill 回放未复现三个原始核心误判；五次无 Skill 回放同样未复现其强形式。因此本组不能证明 Skill 带来 5/5 增益，更不报告“全部无缺陷”。方法下仍可能出现问题线索中的未记录术语或笼统标签；Agent 需检查每个问题的证据跨度。既有规则要求这些内容改标分析者待验证线索，而非自动删除合理问题或升级为已核实事实。

### 4.3 首次从零有 Skill：部分符合，采集仍有缺陷

记录：[live-with-skill-2026-09-06.md](../../../99_workspace/search-intent-evidence-skill-validation/live-with-skill-2026-09-06.md)。3 个查询、27 条合并结果、4 个正文来源。

- 改善：有全部返回结果与选择/排除理由；明确合并结果不能判断原词主导性；Ti-Pure sample link 定位在 global navigation line 211，并与正文 Contact Us 分开，没有把联系入口冒充纸品专属样品承诺。
- 未达成：原词和两个扩展仍在一次调用内提交。工具合并返回导致 query→URL 归属仍缺失。虽没有伪补或过度推断，仍未落实预期的原词独立观察。
- 处理：保留首版方法原文为 [SKILL-first-trial.md](../../../99_workspace/search-intent-evidence-skill-validation/SKILL-first-trial.md)，哈希与首版完全一致；当前方法增加明确操作：原词单独调用、保留该次结果；扩展仅在逐查询归属明确时批量；已有混合结果须补独立原词查询，否则仅报告探索线索。
- 修订后方法 SHA-256：`8E3B950229463702F804D33D0F89DC828E0CF2883B7AAD3E8501E354ED3E137C`。不追改旧测试结果，也不将首轮写成完整 PASS。

### 4.4 修订后五次从零复测

原始记录：[第1次](../../../99_workspace/search-intent-evidence-skill-validation/live-final-1.md)、[第2次](../../../99_workspace/search-intent-evidence-skill-validation/live-final-2.md)、[第3次](../../../99_workspace/search-intent-evidence-skill-validation/live-final-3.md)、[第4次](../../../99_workspace/search-intent-evidence-skill-validation/live-final-4.md)、[第5次](../../../99_workspace/search-intent-evidence-skill-validation/live-final-5.md)。均为新上下文、gpt-5.6-sol/medium；同一原词、英国 B2B 背景及寻找供应商问题线索的任务，只读当前方法，不读其他答案。主任务逐份全文审查。

本轮统一限定最多 2 个查询、2 个 URL，并明确要求保存实际调用分组及来源链；这与早期探索任务的预算/记录要求不同，属于定向验收，不是仅改变 Skill 的严格因果 A/B。

| 次数 | 原词/扩展与来源链 | 正文及入口核验 | 解释边界 |
|---|---|---|---|
| 1 | 两次单独检索，返回来源各自保留；TINOX、R-942P 的选取理由明确 | 两页读取；sample/TDS/SDS 入口有具体正文行，未声称后续流程已验证 | 混合意图；UK 条件与供应商事实不扩张 |
| 2 | 原词单独，UK supplier 扩展单独；分别选 Ti-Pure 与 Plater | 两页读取；全站 sample link 与纸品正文 CTA 分开，Plater enquiry 不冒充样品 | 不用 UK 扩展证明原词主导或当地需求 |
| 3 | 原词单独，技术供应商扩展单独；分别选 ISO 与 R-942P | 两页读取；ISO Read sample 是标准预览，不是产品样品；产品 sample 另有行定位 | 检测与供应商任务并列，不推定访客职业/阶段 |
| 4 | 原词单独、扩展单独；TDMA 与 R-942P 对应清楚 | TDMA 超时只保留摘要；R-942P 成功读取与入口定位 | 未把失败正文写成已读；不算原词意图比例 |
| 5 | 原词单独、UK supplier 扩展单独；TDMA 与 Rakem 对应清楚 | TDMA 超时如实记录；Rakem enquiry 已见、sample 仅作待查问题 | 不把重复 Rakem 域名或 UK 查询诱导当独立需求证据 |

**定向验收结果：** 5/5 按要求分开原词与扩展调用并保留来源归属；共 10 次正文打开尝试，其中 8 次成功、2 次失败如实登记。五份均未用定向扩展占比证明原词主导意图，未从 Contact/Enquiry 自动推定 Sample，也未决定真实页面。当前修订满足本案例的核心采集与解释检查。

限制仍在：同一词、同日、小样本，同一工具返回可能共享缓存；不证明跨主题、跨账号或长期稳定。正文逐事实正确性不是本次方法验收的全量技术审计。首次回放中问题标签/证据跨度的建议继续保留；不能称所有研究问题已完全验证或所有输出零缺陷。

## 5. 当前文件结构与启用边界

- `SKILL.md` 首版 SHA-256：`C9C653FAE5E1CC25FC75CAAE741334848CA66E6000BAF7B7EB33DFC2D2867B72`；现保留于上述 first-trial 历史文件。当前修订版以 §4.3 哈希为准。
- skill-creator `quick_validate.py` 对首版和当前修订版均返回 `Skill is valid!`；结构检查独立于上述行为结果。
- 最终静态复核：本轮 5 份正式/入口文件为 0 conflict marker、0 trailing whitespace、0 缺失本地链接；10 份回放及 5 份最终采集输出均存在。当前方法、首版历史方法、原始无 Skill 报告 SHA-256 与本记录一致。路径检查按 Markdown 尖括号链接语法解析，未改动既有资料链接。
- 项目源目录不等于运行安装。仅验证子任务通过明确路径读取本文件，不宣称已被所有页面任务自动发现或启用。
- 其他两项 Skill 与 Gate 1 Agent 运行入口不在本轮实现范围。

## 6. 交付结论

第一项方法已从纸面设计变为项目自有 Skill 源文件；已完成真实工具观察、失败分析、方法修订、回放和五次定向真实复测。建议作为后续 Gate 1 Agent 小范围试跑的方法候选，不直接宣称生产成熟或自动启用。

第一项的职责仍只是搜索观察、意图解释、问题线索和局限；Agent 保留主要读者、问题优先级、页面职责、内容取舍与阶段管理。未实现其他两项方法，未改页面事实/视觉/阶段，也未操作开发项目。
