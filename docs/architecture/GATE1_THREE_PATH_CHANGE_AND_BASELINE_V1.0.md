# Gate 1三路径修订与当前基线 V1.0

2026-09-08。USER_APPROVED / ACTIVE_PROJECT_SOURCE / NOT_RUNTIME_REGISTERED。
用户批准三路径并限定先完成Agent、Skill与总控同步，不做页面回放。

| 修改前 | 修改后 |
|---|---|
| 一套四核心文件默认覆盖所有页面 | 四类信息保持，按路径引用或补差额，不强制四份新文件 |
| 有复用原则但缺少分流条件 | 复用确认、缺口研究、完整研究；升级触发与停止条件明确 |
| 搜索方法容易随阶段默认调用 | 只按搜索意图缺口调用；无任务不产空报告 |
| 独立审查范围易扩大为背景重建 | 核对本页适用性、全部新增判断与关键依据，继承有效旧结论 |

独立审查、用户Gate 1批准、关键事实/成功边界和适用必读规则保持。新稿无效、事实矛盾或实时缺口仍须升级核验，不以轻量名义放行。

## 当前源身份

| 文件 | SHA-256 |
|---|---|
| [agent.md](../../agents/gate1-execution/agent.md) | `70722956c526b07c816b664410556b4bd12a51aff4963dc0fecb0b706e7f8a34` |
| [SKILL.md](../../skills/search-intent-evidence-analysis/SKILL.md) | `fdae1fa133a1592db378026e6992caa7ffc5c13c1f561e17f6e40d4cc89fd8e0` |
| [GATE1_THREE_PATH_EXECUTION_CONTRACT_V1.0.md](GATE1_THREE_PATH_EXECUTION_CONTRACT_V1.0.md) | `f600a38be744655bb97e05417cc9860fc46737310dbbf284197c702deee2d06f` |

## 验证与回退

修改前九份文件及哈希保存在[快照](../../90_archive/project-governance/2026-09-08-gate1-three-path/)。历史设计/串行合同不覆盖新三路径交付规则，其页面授权和顺序保持。根入口、Index、两个目录及总控引用已同步。
静态核验结果见[记录](GATE1_THREE_PATH_VALIDATION_V1.0.json)，不代表真实页面回放或提速实测。没有改页面成果/Manifest/Status、Gate 2或开发项目。回退按快照定向恢复段落与入口，保留并行编辑，不整份覆盖历史或当前成果。
