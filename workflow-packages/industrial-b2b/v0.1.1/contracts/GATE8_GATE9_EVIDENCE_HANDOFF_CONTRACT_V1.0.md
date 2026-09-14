# Gate8 → Gate9 机器可验证交接合同 V1.0

母版版本：0.1.0（提取候选，尚未安装/发布验证）。运行前读取[实例绑定合同](instance-bindings.md)；本站事实、授权与进度不随方法复制。

## 1. Gate6附带代码身份

Gate6交付包中的每项代码、HTML、脚本或组件片段必须标明一种身份：

| 身份 | 含义 | Gate8处理 |
|---|---|---|
| `APPROVED_CONTRACT` | 已批准且必须保持的接口、可见语义或行为 | 可以选择实现技术，不得改变被批准的结果；需变更时返回原owner |
| `REFERENCE_IMPLEMENTATION` | 用于解释合同的参考实现 | 可复用、重构或替换，但最终结果仍按批准合同验收 |
| `PROTOTYPE_ONLY` | 只表达视觉或交互效果 | 不得直接视为生产代码、CMS模型或安全/接收实现 |

未标身份的代码默认按`PROTOTYPE_ONLY`接收，不允许Gate8自行猜测其约束强度。

## 2. Gate8统一证据Manifest

每次Gate8首次交回或返修回报必须提供`gate8_evidence_manifest.json`，符合[Schema V1.0](GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json)。人工回执可以解释背景，但所有被用于验收的文件、身份和runtime必须进入Manifest。

Manifest至少绑定：

- `handoff_id`、原Gate8任务ID、`site_scope`、Page ID、接受条件ID和runtime path；
- repository、branch、baseline commit、implementation commit、evidence HEAD及clean检查时间；
- Build目录、Build ID及其implementation commit；
- runtime URL、scope、环境类型、启动时间、路径检查及保持规则；
- 每份证据的仓库相对路径、SHA-256、类型、证明范围、生成命令和环境；
- 已进入evidence HEAD的人工回执路径；回执内每项证据使用独立一行`EVIDENCE: <repo-relative-path>`，并与Manifest的`receipt_evidence_references`集合完全一致；
- 已知开放项、owner、阻断层级、关闭证据和计划关闭时点。

证据文件必须存在于工作树并进入指定evidence HEAD。SHA-256绑定交付工作树文件；因Git换行过滤导致commit blob字节不同的，另记录blob ID，不把两者强制视为同一字节流。

## 3. Runtime保持责任

Gate8交回时将runtime状态设为`GATE9_PASS_OR_RETURN_NOTICE`。从消息送达起，Gate8保持同一候选可访问，直到Gate9向原Gate8任务发出：

- 定向或页面通过通知；
- 返修/补证通知；
- 明确释放runtime的通知。

如runtime必须更换，Gate8先返回新的implementation/evidence/Build/runtime身份及差异；Gate9不把新端口自动当作原候选。Gate8无法持续运行时须在交回前说明，相关运行条件直接进入`ENVIRONMENT_FAILURE`或`NOT_VERIFIED`，不能宣称完整可验。

## 4. Gate9预检与分类

Gate9正式运行验收的第一步如下，命令工作目录为锁定包根目录，manifest传绝对路径：

```powershell
python skills/runtime-implementation-verification/scripts/validate_evidence_manifest.py <manifest>
python skills/runtime-implementation-verification/scripts/gate9_preflight.py <manifest> --rounds 2
```

预检输出使用：

- `PASS`：清单、Git/Build身份和runtime检查通过；
- `IMPLEMENTATION_FAILURE`：候选可访问，但状态、Page ID、Build marker或批准标识不符；
- `ENVIRONMENT_FAILURE`：runtime不可连接、超时或中断；
- `EVIDENCE_INCOMPLETE`：Manifest、文件、commit或hash关系不完整；
- `NOT_APPLICABLE`：仅在合同明确不适用时由Gate9报告使用，预检脚本不自行推导。

预检失败不禁止Gate9继续静态/源码审查，但受影响运行条件不能判PASS。明显密钥由脚本阻止；真实个人信息仍需人工复核，工具不宣称自动识别全部PII。

## 5. Gate9返回

Gate9对每次交回同时给出：

1. `RECHECK_SCOPE_STATUS`；
2. `PAGE_GATE9_STATUS`；
3. `INTEGRATION_STATUS`；
4. `RELEASE_STATUS`。

通过通知包含精确implementation/evidence/Build、关闭项、剩余项、正式报告路径以及Gate8是否应停止本轮返修。消息发送成功后记录目标任务ID与送达结果。局部通过、页面通过、进入本地main队列和发布授权不得互相替代。

本合同不授权真实表单发送、生产CMS写入、本地main合并、远端push、部署或发布。
