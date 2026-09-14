# 项目级入口转换 0.2.0

用户否决仅将角色方法藏在.workflow/package的入口。当前布局采用Codex原生项目发现机制：

- agents/<name>/agent.md：15个职责的可阅读权威源。
- .codex/agents/<name>.toml：15个原生项目Agent配置，加载对应职责；不固定模型或覆盖权限。
- .agents/skills/<name>/SKILL.md：9个实际项目Skill目录，支持repo级发现。
- .workflow/contracts、profiles、templates：当前共同合同；项目清单记录准确内容身份。
- .workflow/package：保留发行来源快照，明确不是当前运行方法入口。

project_native.render(package)先验证来源清单，输出路径→字节映射，不写文件。它修正相对引用、更新旧候选标签、生成原生角色配置，现有脚本字节不变。由接入任务核对全部目标无冲突、快照、写入和锁定；本工具不是通用升级覆盖命令。

新网站应生成本布局，不能再把旧0.1.x bootstrap安装完成宣称原生Agent/Skill可用。已有0.1.x实例保留发行快照后进行此映射；根规则和README必须指向项目级入口，不能同时宣称两套方法为当前权威。

验证：`python -B -m unittest discover -s workflow-tooling/v0.2.0 -v`。D10额外通过app-server skills/list实际发现9个scope=repo的Skill。15个Agent TOML依官方当前格式配置；旧CLI未提供独立Agent列表接口，本次未逐一启动15个Agent，不声称全部角色已运行。

当前官方格式：https://learn.chatgpt.com/docs/agent-configuration/subagents 和 https://learn.chatgpt.com/docs/build-skills 。角色调用仍需原阶段授权。用户既有模型/权限设置继承；并发字段按客户端兼容性映射，不扩大数值。
