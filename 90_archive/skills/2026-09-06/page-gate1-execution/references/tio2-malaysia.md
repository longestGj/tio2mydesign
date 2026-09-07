# TiO2 Malaysia 项目适配

仅在 `D:\23MySec` / TiO2 Malaysia 工作时读取。这里提供资料入口和已知执行陷阱；具体事实和版本以执行时的当前权威资料为准。

## 查找当前输入

1. 读取根 `AGENTS.md`、相关目录的 `AGENTS.md`；关键词工作尤其核对 `research/keyword/AGENTS.md`。
2. 从 `00_PROJECT_STATUS.md`、`01_PROJECT_INDEX.md`、`02_DIRECTORY_GUIDE.md` 查当前资料和页面目录，再读页面唯一当前 Manifest 及其指向的 Brief/批准记录。状态快照只用于导航，不覆盖原批准来源。
3. 读取当前批准的 `docs/architecture/PAGE_GATE_1_5_STANDARD_*.md`、PRD、页面登记册中本页记录、`research/keyword/11_page_keyword_master.csv` 中本页完整行及可能内耗的邻页，以及对应 Playbook。
4. 涉及企业事实或旧 Hold 时，读取当前 Evidence Gap User Decision Register 及其引用的具体批准记录；已知入口是 `docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.0.md`，如当前指针升级则使用升级版。
5. 涉及型号/应用/工艺时，读取当前批准产品关系矩阵、审计及必要个体原件。不在 Skill 固定型号数量、关系计数、适用集合或冻结状态。
6. 只在需要解释本页行动或依赖时读取当前共享 Chrome、表单、法律页面合同，不把全站所有历史文档都装入上下文。

## 已知冲突处理

根章程 §2.3、§2.5、§2.6 明确规定用户批准的公开使用范围、对话内呈现决定内容和证据缺口处理。旧 Brief 模板、旧 Gate 说明可能仍写“证据不足即 DO_NOT_RENDER”，或引用旧页面数/旧关系结论。

遇到这种情况：在本次输入冲突记录中说明旧句与当前章程/批准决定的差别，按当前明确权威执行；不要复制旧禁止，也不要顺手改写全站模板或历史批准文件。页面级没有裁决依据的冲突仍交总控决定。Manifest 是当前文件指针，不能自行把草案排在章程和用户批准之前。

### 状态语义

以下状态在当前项目已存在；执行时核对最新定义：

- `PENDING_USER_FACT_CONFIRMATION`：具体企业命题待用户确认；尚未否决。
- `USER_APPROVED / CLOSED`：用户已批准的具体对象与使用范围；不等于整个 Gate 或后续 Gate 授权。
- `EXTERNAL_CURRENT_SOURCE_REQUIRED`：涉及实时政府、监管或第三方决定，需要当前来源。
- `CONFLICT_REQUIRES_USER_DECISION`：当前有效来源冲突，需要具体裁决。
- `DO_NOT_RENDER_WITH_REASON`：须有明确矛盾、用户否决、明确禁止或无法确认的实时外部结论等实际原因，不能仅写“项目没文件”。

来源支持且范围清楚的普通事实，使用本页现有验证状态并引用证据；没有项目要求时不额外要求逐句用户批准。事实公开批准、Page Intent 确认、整 Gate 批准和下一 Gate 授权分开登记。

## Gate 1 执行纪律

- 客户已提供一句话、附件或截图即可开始整理，不要求重新写 PRD。
- Brief 模板覆盖多个 Gate。Gate 1 完成身份、意图、研究和证据部分；视觉、完整文案、精确 CMS/API 字段等保留其阶段归属。
- 执行提交为 `DRAFT_FOR_PROJECT_CONTROL_REVIEW`；独立总控结论由总控给出。`CONTENT_INTENT_CONFIRMED` 必须有真实用户决定依据。
- 用户已授权后续阶段时继承其授权，并满足其中真实的先决条件；不要机械地反复要求用户授权同一步。
- 并行法律页、共享组件、尚未上线的 CTA 目标作为交付依赖记录，不阻止研究最终读者体验。
- 页面输出复用 Brief、研究文件和当前 Manifest，历史版本保留；临时验证放 `99_workspace`，正式研究成果放页面正式目录。
- 本 Skill 只执行 Gate 1。不修改 `D:\16Wordpress_nextjs`，不调用付费 Superdesign，不把技术预览或发布就绪作为 Gate 1 研究的前置条件。
