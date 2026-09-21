# HOME-001 D32 Gate 6 独立复核控制记录 V0.1

日期：2026-09-20。当前状态：`COMPLETE_WITHIN_SCOPE / GATE6_CLOSED / NOT_HANDED_OFF`。

## 授权与派发

- 用户原话：“进行独立复核，启动子代理。”前序已授权首页及共享 Header/Footer 的 D32 WordPress 适配输入和交付包整理。
- dispatch_id：`HOME-D32-G6-INDEPENDENT-REVIEW-20260920-01`。
- Page / Gate：`HOME-001 + Home-owned Global Chrome / Gate 6`。
- 模式：`INDEPENDENT_REVIEW`；总控与原包作者：`/root`；独立 Reviewer：`/root/d32_gate6_independent_review`。
- 原包：[V0.1](../06_handoff/HOME-001_D32_GATE6_HANDOFF_PACKAGE_V0.1.md)，SHA-256 `29387195F49F7AF9977A794C9E4E00AFDE059A341FE8026E3D3B2AE533BBE13F`。
- 作者证据：[V0.1 JSON](../06_handoff/HOME-001_D32_GATE6_INPUT_VERIFICATION_V0.1.json)，SHA-256 `D7E363F86EDBB39E8EA05ABAEBAB67C81B02CE13D5B5B1603BE4E7FBB0D9B1A4`。仅作待核验声明。
- 角色/方法：[当前 Gate 6 基线 V1.1](../../../docs/architecture/GATE6_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.1.md)，Agent V0.7、合同一致性及开发交付 Skill V0.3；按[执行与复核合同 V1.1](../../../docs/architecture/GATE6_EXECUTION_REVIEW_CONTRACT_V1.1.md)执行。

## 范围与交回

审查全部新增/修改交付合同、有效上游继承、WordPress 内容编辑映射、共享 Chrome/Hero/Consent、SEO/Schema、素材身份、12 项接受条件、5 项后置依赖和运行证据映射。F01 为明确触发，按 ESCALATED_PATH 定向核对原始批准，不重做有效视觉审查或截图。

Reviewer 只写[独立报告 V0.1](HOME-001_D32_GATE6_INDEPENDENT_REVIEW_V0.1.md)及必要同名前缀证据，不能改包、作者证据、Manifest 或 Status。报告记录实际对象与身份、原始依据、完整覆盖、Finding/未测、PASS 或 RETURN。返修由作者完成，另交同一 Reviewer 定向复验。

总控并行恢复授权、现有 Manifest 和关闭条件，不叠加同范围专业审查。已有页面入口为[Home V1.6](../HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.6.md)，其 D16 运行结论不等于 D32 已实现。

只有有效独立通过、必修关闭、依赖归属明确且身份一致，才按[常设关闭授权](../../../docs/architecture/GATE_3_4_6_DELEGATED_CLOSURE_AUTHORITY_V1.0.md)处理 Gate 6 关闭。不得改 Reviewer 报告代签 PASS。

停止边界：本次不外发、不启动 Gate 8、不写 D16/D32 实现、不部署或发布。Gate 6 关闭与开发启动分别记录。

## 同批内链专项

按总控既有路由启动 `PLANNING_REVIEW`，review_id `HOME-D32-G6-LINK-20260920-01`，实际独立实例 `/root/d32_home_link_review`；角色为[内链审查 V0.2](../../../agents/internal-link-review/agent.md)及其引用方法。只核对首页/共享导航/法律动作的规划目标、语义与后置依赖，`site_scope=tio2-my`，首页语言 en，按原合同消费 BM 法律链接。计划发布集合为空，本批仅开发准备；无 D32 运行结果，不扫描生产或全部登记页面。

输入为上述精确包及其批准链接源；报告 [HOME-001_D32_GATE6_LINK_PLANNING_REVIEW_V0.1.md](HOME-001_D32_GATE6_LINK_PLANNING_REVIEW_V0.1.md)，必要清单同名前缀。其有效结论供主 Reviewer 复用，不叠加同范围扫描，不代替全部 Gate 6 复核。不得改批准目标、删除未开发链接或生成实现。

## 接收与结束

首轮主审和内链均发现同一 F02并返回；作者保留V0.1，修订V0.2 Products/A05非链接语义及F01五节点处置。两名原Reviewer完成定向复验，准确V0.2包SHA `EEB70B4D48753BBAF02D9CBEA1B6ADAD65B18D90CD6C6123A0F63C6063065A3A`，必修0。总控已实际读取报告并核对身份，按常设授权记录[Gate6关闭](HOME-001_D32_GATE6_PROJECT_CONTROL_CLOSEOUT_V1.0.md)，当前入口为[Manifest V1.7](../HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.7.md)。

下一动作owner为获授权的D32开发任务；本轮 `next_action.allowed=false`（缺本批Gate8启动/接收任务授权）。未外发、未实施、未发布。原D16状态保持。入口同步前快照及身份在 `99_workspace/home-d32-gate6-closeout-20260920/snapshot-map.json`；正式结论与原审查保留在本页目录，快照不是唯一批准依据。