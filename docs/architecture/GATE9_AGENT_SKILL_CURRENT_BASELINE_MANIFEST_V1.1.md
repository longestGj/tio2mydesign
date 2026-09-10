# Gate9 Agent / Skill Current Baseline Manifest V1.1

日期：2026-09-08

状态：`USER_AUTHORIZED_TARGETED_REPAIR / PROJECT_SOURCE_ACTIVE / PILOT_REQUIRED / NOT_RUNTIME_REGISTERED`。

本Manifest固定Next.js 16 Build marker兼容修复后的当前组合。前一组合保留于[Manifest V1.0](GATE9_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.0.md)，本次不改变Agent职责、Gate状态、页面接受条件或发布权限。

| 对象 | 当前版本 / SHA-256 |
|---|---|
| Gate9 Agent | `agents/gate9-read-only-acceptance/agent.md` V0.5 / `114E7DD102F77839819118C0320588B3761099B86D565203F65D994853101817` |
| Runtime Verification Skill | `skills/runtime-implementation-verification/SKILL.md` V0.5 / `59A1B7FED0E97CE8131F016A60217BE43F7FA1A341E8BA7B6B8E3F36382E9832` |
| Evidence validator | `skills/runtime-implementation-verification/scripts/validate_evidence_manifest.py` / `72E944731451F253444A8230CA553BE35739E9DA9922E316F734FFBF07501E6C` |
| Gate9 preflight | `skills/runtime-implementation-verification/scripts/gate9_preflight.py` / `D08E342B9B07218F1847C60F2C9723E27934FD17BB677133DDF2B69C95687066` |
| Tool tests | `skills/runtime-implementation-verification/tests/test_gate9_tools.py` / `E4FDAB7890D02018C0FDB5E86EA021C4D2D8528D8EF42EA1A4236147A1EDC769` |
| Gate8→9 contract | `docs/architecture/GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md` / `A74953971244D3B2BB43F6BC5D9B798F428D9590BAB8BCB8664E1D4E9B4B31CB` |
| Evidence schema | `docs/architecture/GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json` / `CBD36D338412A5D311AE062A93982D9A5799E0CF3D459BCB72D41E4A155247AD` |
| D16 local-main interface | `docs/architecture/D16_LOCAL_MAIN_INTEGRATION_QUEUE_RULE_V1.0.md` / `76BA8B3C1C84469F8B4A42B20A4DF9916125030A379645BF5F7EEE72496F949A` |

## 修复与验证

- 原预检只接受HTML中的`/_next/static/{build_id}/`，会把Next.js 16生产HTML中的RSC Build字段误判为`build_marker_missing`。
- TDD RED：新增仅含精确转义RSC字段`\"b\":\"BUILD-123\"`的runtime测试；修改前返回码为4、状态为`IMPLEMENTATION_FAILURE`。
- TDD GREEN：脚本现在接受旧式静态路径或精确RSC Build字段；`python tests/test_gate9_tools.py`为8/8通过，原旧式marker、错误页面、HTTP错误状态和不可达环境用例均保持原结果。
- 真实只读探针：`http://127.0.0.1:3232/resources/chloride-vs-sulfate-titanium-dioxide/`返回HTTP 200，HTML中检出Manifest待绑定的Build ID `YdJaIk7sxHg5-cqRGbdWK`及对应精确RSC字段；未检出旧静态路径形式。
- 本次完整`gate9_preflight.py`尚未运行：新版Gate8补交回Manifest仍在准备，不能用临时拼装清单代替正式身份链。

## 生效边界

本修复只调整可复用预检方法的Next Build身份识别，不修改D16页面代码、CMS数据、页面合同或任何Gate结论。收到完整`gate8_evidence_manifest.json`后，Gate9仍须先运行Manifest校验和两轮runtime预检，再开始28项页面结论；本Manifest不授权Gate10、合并、push、部署或发布。
