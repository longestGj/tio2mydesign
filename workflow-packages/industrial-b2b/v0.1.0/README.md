# 工业品B2B网站工作流母版 0.1.0

状态：EXTRACTED_CANDIDATE；完成第2步提取，尚未安装到任何新站，尚未完成第3/4步初始化与隔离验证，不作可安装发布包。

入口：[实例绑定](contracts/instance-bindings.md) → [总控](agents/project-orchestrator/agent.md) → 按任务读取[角色目录](agents/README.md)和[方法目录](skills/README.md)。

流程：W1企业事实 → W2市场/客户/竞争 → W3战略定位 → W4架构旅程 → W5生产准备 → Gate0准入 → Gate1研究 → Gate2内容 → Gate3结构 → Gate4视觉制作 → Gate5唯一独立视觉审查 → Gate6跨合同与开发交付 → Gate8外部开发 → Gate9只读验收 → Gate10发布授权。Gate7不恢复，不新增Gate8专属Agent。

[工作流](contracts/GATE_WORKFLOW_V3.2.md)、[统一阶段标准](contracts/PAGE_GATE_1_4_STANDARD_V2.2.md)、[治理细则](contracts/PROJECT_GOVERNANCE_DETAILS_V1.4.md)保留条款编号便于引用；文件名中的来源版本不是本站批准。共用合同优先解释历史编号：Gate4制作与Gate5审查组成一个视觉批准组合。

## 分层

- agents：15个岗位，负责结果、判断、交接和停止。
- skills：9个方法及所需references/scripts/tests；Gate2不新增专属Skill。
- contracts：共用阶段、输入输出、证据和权限边界；不含企业事实。
- profiles：行业问题模型及WordPress＋Next.js接口。
- templates：最小交接，不是已批准成果；配置/锁定/初始化工具在下一步完成。

[质量基线](contracts/quality-baseline.md)保留三端、44px和完整覆盖；[技术适配](profiles/wordpress-nextjs/README.md)说明已有工具能力和局限。旧站的事实、Hero、导航、法律决定、常设授权、页面状态、Git分支策略均不随包继承。

本目录独立于原项目角色基线；来源与逐项变更对照保存于框架建设项目，不作为新站运行依赖。release-manifest.json记录本目录准确身份，后续通过隔离验证后才能发布可安装版本。当前不是Codex全局Skill安装或自动注册。
