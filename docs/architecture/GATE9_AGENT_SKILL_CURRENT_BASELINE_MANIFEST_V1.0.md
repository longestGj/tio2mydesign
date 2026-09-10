# Gate9 Agent / Skill Current Baseline Manifest V1.0

日期：2026-09-08  
状态：`USER_CONFIRMED_DESIGN / PROJECT_SOURCE_ACTIVE / PILOT_REQUIRED / NOT_RUNTIME_REGISTERED`。

本Manifest固定Gate8反馈后的当前组合。前一组合为Agent V0.4 SHA-256 `E53714C6E78F51EFF992014FDB95883AAF797AC402E533E0E7A36790742D797A`与Skill V0.3 SHA-256 `4EBFAC4A8397127AFB2473F70AA1DF0D372929E78F26EBFF32FB5FA369B000C5`，保留于版本记录和Git历史语境。

| 对象 | 当前版本 / SHA-256 |
|---|---|
| Gate9 Agent | `agents/gate9-read-only-acceptance/agent.md` V0.5 / `114E7DD102F77839819118C0320588B3761099B86D565203F65D994853101817` |
| Runtime Verification Skill | `skills/runtime-implementation-verification/SKILL.md` V0.4 / `FF7A78F9774B6A28ADE0F16B8A3FCC29A19017A09DDB8F14510CD213357E4287` |
| Evidence validator | `skills/runtime-implementation-verification/scripts/validate_evidence_manifest.py` / `72E944731451F253444A8230CA553BE35739E9DA9922E316F734FFBF07501E6C` |
| Gate9 preflight | `skills/runtime-implementation-verification/scripts/gate9_preflight.py` / `42099467AE1013A7E32C89A37A4EC3DA4301EF4C1727751CF157CB02E0AB8E37` |
| Tool tests | `skills/runtime-implementation-verification/tests/test_gate9_tools.py` / `F7C1A0A71AE184BA26F7BD8E56593D98E6E11D38ADB6F2EC52EAF24E580F0779` |
| Gate8→9 contract | `docs/architecture/GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md` / `A74953971244D3B2BB43F6BC5D9B798F428D9590BAB8BCB8664E1D4E9B4B31CB` |
| Evidence schema | `docs/architecture/GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json` / `CBD36D338412A5D311AE062A93982D9A5799E0CF3D459BCB72D41E4A155247AD` |
| D16 local-main interface | `docs/architecture/D16_LOCAL_MAIN_INTEGRATION_QUEUE_RULE_V1.0.md` / `76BA8B3C1C84469F8B4A42B20A4DF9916125030A379645BF5F7EEE72496F949A` |

## Validation

- TDD RED：两个脚本不存在时5项测试按预期失败；加入回执实际引用检查后新增测试先按预期失败。
- TDD GREEN：`python -m unittest discover -s skills/runtime-implementation-verification/tests -v`为7/7通过，包含预期HTTP错误状态与localhost代理误判回归。
- 两个脚本`py_compile`通过。
- Evidence Manifest Schema经`python -m json.tool`解析通过。
- Skill经`quick_validate.py`（`PYTHONUTF8=1`）验证为`Skill is valid!`。

## 生效边界

Agent负责接单范围、四层状态、共享根Finding、收口事务和消息发送；Skill及脚本负责可重复的只读核验和通知字段。D16本地main实际集成仍由D16采用唯一队列规则并在当前用户授权范围执行；本Manifest不授权合并、push、部署或发布。

D16已在commit `3ec98f34a8ee8dbb4cdca1ff7be6c5f25c32260b`采用交接接口与本地main队列规则；Gate9独立读回见[D16采用回执](D16_GATE9_INTERFACE_ADOPTION_RECEIPT_V1.0.md)。该采用只建立后续批次的流程入口，不代表现有页面代码已集成。

下一批真实页面必须使用`gate8_evidence_manifest.json`完整试跑。连续三批指标按[多批次复盘](GATE9_MULTI_BATCH_RETROSPECTIVE_V1.0.md)观察；未完成试跑前不声称全链成熟。
