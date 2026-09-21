# Gate 8→9证据交接合同 V1.2

2026-09-21。`USER_APPROVED / ACTIVE_CURRENT_CONTRACT`。开发规则由D32的AGENTS.md、CONTRIBUTING.md及README.md维护，本合同仅规定D23验收证据交换；本次修订不改变V1.0/V1.1机器格式。适用于当前静态单站，保留V1.0历史交回兼容。

## 1. 交付物与代码身份

Gate 6提供批准结果和验收依据；Gate 8选择实现。附带代码沿用APPROVED_CONTRACT（约束批准语义）、REFERENCE_IMPLEMENTATION（参考）或PROTOTYPE_ONLY（原型）身份，未标默认原型。原型不规定生产文件结构或技术模型。

交回保留Page ID、原Gate 8任务、AC、实现版本、可访问对象、实际证据、未测与开放项。一个入口引用即可，不再要求页面另造证据协议。

## 2. 两种证据格式

- `gate8-evidence-manifest-v1.0`：仅兼容已有交付，按[V1.0合同](GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md)和原校验保持工作树/Build要求；其中scope字段不代表恢复静态单站隔离需求。不重写历史文件以凑新格式。
- `gate8-evidence-manifest-v1.1`：当前静态制品方式，按[Schema V1.1](GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.1.json)。不含site_scope、branch、clean_checked_at或BUILD_ID要求，不要求开发工作区HEAD停留在证据提交。

V1.1的git记录repository、baseline_commit、implementation_commit、evidence_head的完整40位SHA及祖先关系。证据和回执直接从指定evidence_head读取，SHA-256绑定Git blob原字节，不经过工作树换行转换；旧V1.0工作树hash语义不变。

build包含绝对directory、implementation_commit、完整files列表（相对路径与SHA-256）及binding_evidence。该证据是已提交JSON，内容精确为`{"implementation_commit":"<SHA>","files":[{"path":"index.html","sha256":"<hash>"}]}`，files覆盖全部制品文件。先构建和收集证据，再提交证据/回执，最后在开发仓库外生成Manifest，避免commit自引用。不要求将构建制品提交Git。

制品目录必须可读；文件不得越界或通过符号链接引入其他内容；完整清单不得漏文件。重复路径、字节变化、绑定不符均不通过。运行checks每项含path、expected_status、contains和artifact_path；每个交付页面至少有一项同路径检查。artifact_path必须出现在完整制品清单内，HTTP响应字节需与其hash一致。对不返回原样静态响应的目标，先定义适用身份机制，不能随意关闭检查或伪造PASS。

回执EVIDENCE引用与receipt_evidence_references集合一致，所引文件须声明为evidence。未列为EVIDENCE的普通说明不另建一套清单。必要证据可共用同一AC；不固定截图数。构建绑定记录证明可追溯声明及字节一致，不自动证明构建正确、可重复或业务符合；Gate 9仍独立核验。

## 3. 可访问性与预检

Gate 8保持同一候选可访问，直至Gate 9通知通过、退回或释放；可保持独立制品/服务，不锁住日常开发分支。不可维持时先说明环境缺口。URL或内容改变须重新绑定，不能把新端口默认为原候选。

在D23使用Python 3及`jsonschema`（V1.1 Schema验证依赖）：

```powershell
python skills/runtime-implementation-verification/scripts/validate_evidence_manifest.py <manifest>
python skills/runtime-implementation-verification/scripts/gate9_preflight.py <manifest> --rounds 2
```

缺依赖或证据结构错误返回EVIDENCE_INCOMPLETE。HTTP内容/状态与指定制品不同为IMPLEMENTATION_FAILURE；不可达为ENVIRONMENT_FAILURE。预检PASS只表示身份及入口可核验，不是页面验收通过。继续保留NOT_APPLICABLE由审查者依据合同判断；脚本不推导业务豁免。

## 4. 反馈、集成和权限

Gate 9分别交回RECHECK_SCOPE_STATUS、PAGE_GATE9_STATUS、INTEGRATION_STATUS、RELEASE_STATUS。通过/退回绑定指定实现、制品、AC/Finding、剩余项与是否释放runtime；通知按原任务授权执行。

当前INTEGRATION_STATUS表示开发仓库按其规范在develop组合验证的状态，不表示D16本地main队列。页面通过不自动授权合并、push或发布。真实表单发送、生产变更、部署、DNS和索引操作仍按具体授权。本合同不引入新Gate或Gate 8 Agent。
