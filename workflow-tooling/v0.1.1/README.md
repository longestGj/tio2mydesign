# 工作流实例初始化工具 0.1.1

可安装工具0.1.1配合母版0.1.1。通过完整母版隔离测试；不修改历史0.1.0。安装不等于网站或阶段通过。

## 使用

Python标准库，无网络、无Git、无全局Skill注册。目标目录须已存在。先从site.config.example.json填写本站配置，再运行：

```powershell
python -B bootstrap.py plan --package <母版绝对目录> --config <配置绝对路径>
python -B bootstrap.py apply --package <母版绝对目录> --config <配置绝对路径> --reviewed-plan <保存的计划JSON>
```

plan只向标准输出返回JSON，不写目标目录；由调用者保存输出作为审阅对象。BLOCKED或错误退出码为2。apply重新计算完整计划并逐项比较，禁止拿旧计划安装新内容。候选包默认拒绝安装；--allow-candidate仅用于明确隔离测试，不能用于真实项目接入或视作发布授权。

## 文件计划与写入边界

| 动作 | 条件 | 处理 |
|---|---|---|
| CREATE | .workflow中目标尚不存在 | 整包暂存完成且复核身份后一次重命名 |
| KEEP | 已有内容与拟安装字节一致 | 不重写文件，不改mtime |
| MERGE_REQUIRED | 既有治理文件缺少已拟定接入片段 | 展示片段、原文件哈希；阻断安装，人工审查后合并 |
| CONFLICT | 同路径异内容、残缺安装、未登记文件或升级 | 全部停止；不覆盖、不修补、不自动升级 |

工具只写.workflow，包含package原样副本、site.config.json、workflow.lock.json、INSTANCE_ENTRY.md。首次使用空目录时以INSTANCE_ENTRY作为显式工作入口，不自动创建根AGENTS，也不声称Codex自动发现了角色。已有项目必须映射原AGENTS及唯一状态和流程入口；接入规则可加入对INSTANCE_ENTRY的引用。含AGENTS的项目不能伪装空项目绕过合并。

既有规则的语义比较、批准和合并由总控负责；字符串匹配只证明具体片段存在，不证明用户批准。调用者须按实际授权操作。工具不修改治理文件，不生成第二份进度台账。

同一文件系统临时目录用于组装；写入前再次检查计划，最终目录存在就停止。失败不会留下半套正式.workflow；普通异常由TemporaryDirectory清理自己的暂存目录。系统断电可能留下.workflow-stage-*，需核对后清理，不把其当安装完成。并发不是数据库事务；外部规则在最终检查后仍可能变化，阶段启动必须重新核对原始规则。已实测重命名失败恢复、junction路径拒绝；未模拟系统断电或敌对进程竞态。

## 配置与阶段输入

bootstrap必需：format_version、site_id、project_root、package_version、profile、bindings中的rules/status/index。空白项目后三者可暂指.workflow/INSTANCE_ENTRY.md；已有项目必须指向实际唯一入口。文件绑定使用站内相对路径，不允许盘符、回退、反斜杠、符号链接或junction。JSON不存凭据；development_root属于外部定位信息，工具不访问或写入它。

企业事实、品牌、Brief及开发scope可以未知，配置用null或不填；初始化不会把缺口当作通过。

| 消费阶段 | 实际需补齐的输入 |
|---|---|
| W1–W5 | 当前授权、来源、已有前置成果与本工作包缺口；按包内交接合同逐步成熟 |
| Gate0/1/2 | page_registry、briefs、keywords、facts/relations、playbooks、批准和页面身份 |
| Gate3/4/5 | 批准全文/结构、brand、logo、shared_contracts、shared_consumer、质量标准及冻结证据 |
| Gate6 | 当前批准Manifest与有效审查链、development_root/development_rules、scope和接受条件 |
| Gate9 | 实际开发提交、运行环境、精确构建及数据身份、scope与机器证据 |

完整阶段准入由总控及包内合同判断。本工具验证的是安装配置、路径和身份，不是阶段语义校验器。bindings_resolved仍在每次已有dispatch中记录文件/章节、SHA、用途、批准或缺口。一个导航文件不能替代所有原始成果。

## 锁定及升级

lock绑定site_id、包版本、准确release-manifest SHA及规范化配置SHA；manifest再绑定所有包文件。不是用版本号代替内容身份。计划额外记录本站输入和拟合并文件SHA。升级必须先形成新的迁移计划与批准，首版不提供覆盖升级命令；保留旧版本和在途页面基线。配置也不能通过重跑工具静默覆盖。

配置参考：site.config.schema.json；运行时自带标准库检查，不依赖JSON Schema库，不宣称它是通用schema解释器。

验证命令：PowerShell先设置 `$env:PYTHONDONTWRITEBYTECODE='1'`，再运行 `python -B -m unittest discover -s tests -v`，避免子进程在受检包生成字节码缓存。17项初始化/隔离测试及9项Gate9本地测试通过。完整记录随工作流框架交付；测试不依赖外网。
