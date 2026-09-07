# 项目自有Skill目录与Gate 1三方法拆分决定 V1.0

## 1. 用户决定

- 日期：2026-09-06。
- 来源：用户要求将page-gate1-execution从当前公共Skill目录拿掉，建立自有Skill目录，并同意先做三个Skill。
- 状态：`USER_APPROVED_DIRECTORY_AND_THREE_SKILL_SCOPE`。
- 迁移执行状态：`MIGRATION_COMPLETE / ARCHIVE_HASH_VERIFIED`；旧公共目录已移除，归档可恢复。
- 范围：迁出旧混合型Skill；在本项目建立方法源目录；确定三个方法Skill的职责，后续逐个细化和验证。
- 不包含：将旧版重新启用、创建新页面、修改历史页面、安装三个未经验证的Skill、部署Agent、修改全局Codex配置或D16代码。

## 2. 目录与运行发现分开

- 自有方法源目录：`D:/23MySec/skills/`，当前入口[Skill目录](../../skills/README.md)。
- 旧版归档：`D:/23MySec/90_archive/skills/2026-09-06/page-gate1-execution/`，完整保留原5个文件和相对结构。
- 旧公共位置：`C:/Users/longe/.codex/skills/page-gate1-execution/`，迁移验证后移除该精确目录，不影响其他公共Skill。
- 自有目录目前是设计/维护源，不宣称已自动注册。未来通过本项目内运行入口启用，不写回用户级公共目录，也不修改公共默认配置。
- 官方文档列出的项目本地发现位置是`.agents/skills`，与普通`skills/`源目录不同；未来是否建立项目内链接/入口，须随具体验证及启用方案确认。本次不创建运行入口或符号链接。
- 当前对话已经加载的旧Skill描述不会因文件迁移从历史上下文消失；不声称运行时缓存已清空。

官方依据：[Build skills — local locations](https://learn.chatgpt.com/docs/build-skills)。旧版仅作拆分材料，不作为当前页面执行指令。

## 3. 已批准的三个方法边界

| 方法 | 建议目录名 | 输入 | 方法输出 |
|---|---|---|---|
| 搜索意图与买家问题分析 | `search-intent-buyer-questions` | 页面职责、用户想法、当前关键词/相邻页面、适用搜索与读者资料 | 读者任务、优先问题、意图依据和职责建议 |
| 问题驱动研究 | `question-driven-research` | 已明确问题、已有答案/缺口及相关来源 | 回答要点、来源定位、条件、矛盾和剩余缺口 |
| 声明与证据核验 | `claim-evidence-verification` | 具体命题、拟用范围、原始依据与用户批准 | 命题—来源对应、支持范围、冲突及待确认内容 |

三个方法职责已经批准；建议英文名用于后续设计定位，不代表已有可调用SKILL.md。当前不创建空壳Skill或批量复制旧版。

先设计第一个，再按实际方法验证结果细化其余两个。旧Skill中的方法可提取复用；角色、版本选择、研究综合、交付、自检、返修及阶段授权仍由[Gate 1 Agent合同V0.6](../superpowers/specs/2026-09-06-gate1-execution-agent-design-v0.6.md)和项目规则负责，不复制到三个Skill中形成三套角色管理。

方法输出进入同一研究报告或证据登记表，不因调用三个方法要求新增三份正式报告。结构校验和行为验证分别报告；未实际验证的内容不能写成验证通过。

## 4. 迁移映射与校验基线

以下清单在迁移前采集。每个文件从旧公共目录映射到归档目录下同一相对路径；先复制、核对全部5个文件的字节数及SHA-256，再移除原公共目录。

| 相对路径 | 字节 | 迁移前SHA-256 |
|---|---:|---|
| `SKILL.md` | 10287 | `1CA0298B0613D4051194AC438B623635B545B84E009A5597EDCBA8CEBF3BB74A` |
| `agents/openai.yaml` | 396 | `AB2D05DFBE7AFCCA4675698A8E455D2ED3C241551078923EFE969D635313CDA2` |
| `references/acceptance-cases.md` | 3984 | `4DCDB142FED862EE0F8F9159F08035EE0FBBCBB188E8D5594BAC8D790F69AF95` |
| `references/deliverables.md` | 4434 | `A5C3D2AAF1F6C3893E65AB9BE60ADFDD4D1842FB946B30519B6BE574CBC1D590` |
| `references/tio2-malaysia.md` | 3981 | `F38D92F56F08E85D270D06F224A0CCD1715CE154C73BC4095B80D92588A76646` |

回退方式：若未来用户明确要求恢复旧版，先确认公共原路径仍不存在，再从归档恢复并按本表复核；本次不自动恢复。归档原文中的旧路径和旧职责保持历史原样，由本决定明确其非当前地位，不回写历史源。

## 5. 当前指针与历史兼容

- [Agent/Skill分工标准V1.0](AGENT_SKILL_SEPARATION_STANDARD_V1.0.md)中旧公共路径是当时位置；本决定只更新其迁移去向及三方法建设范围，不改变职责分层。
- 旧角色V0.1–V0.6保留原文，涉及旧Skill的表述按本决定解析为归档材料。
- 当前索引及Directory Guide指向本决定和自有方法目录，避免继续导航到已迁出的公共文件。
- 用户本次批准不改变任何页面Gate状态或事实批准。

## 6. 验证记录

2026-09-06执行：复制原目录到上述归档路径，逐项核对5个文件的相对路径、字节数及SHA-256，5/5一致；再次核对原文件未变化后移除精确公共目录。最终原公共目录不存在，归档5个文件仍保留。本次未删除其他公共Skill或修改全局配置。

自有源目录已建立，三个方法仅登记为范围已批准、详细方法待设计，未生成新的SKILL.md、未启用或开展行为试跑。不得将文件迁移检查当作三个新Skill的行为验收。索引和Directory Guide已增加当前入口；历史批准文档保持不变。
