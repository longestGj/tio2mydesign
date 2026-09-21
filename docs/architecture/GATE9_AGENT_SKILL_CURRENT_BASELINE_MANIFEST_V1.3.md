# Gate 9 Agent与工具当前基线 V1.3

2026-09-21。`USER_APPROVED_SOURCE_SYNC / ACTIVE_CURRENT_BASELINE`。依据[开发流程](D:/32NextJS/CONTRIBUTING.md)及用户修改授权。

| 对象 | 当前源 | SHA-256 |
|---|---|---|
| Agent V0.7 | [agent.md](../../agents/gate9-read-only-acceptance/agent.md) | `ac66d392255553e68def16020a3e6210290448b0a136bd10ca9417af09ad0863` |
| 运行Skill V0.7 | [SKILL.md](../../skills/runtime-implementation-verification/SKILL.md) | `1be3426ee1bc4329575ffcf6a655639a84c94ecb057b544102d26904fe202977` |
| 兼容入口 | [validate_evidence_manifest.py](../../skills/runtime-implementation-verification/scripts/validate_evidence_manifest.py) | `15f1547debcda4818753669082e6851476f0de380c0cc80d1ae1096d4306ce88` |
| 静态制品验证 | [validate_static_artifact.py](../../skills/runtime-implementation-verification/scripts/validate_static_artifact.py) | `8e44ade938af8c5429f964ca84f8912c38ce46b761150b8f584a47a327334e62` |
| 运行预检 | [gate9_preflight.py](../../skills/runtime-implementation-verification/scripts/gate9_preflight.py) | `ffcebfe6af4b452d05faa50074ae75aeb88977d78360717f2ad228885606979b` |
| 旧格式测试 | [test_gate9_tools.py](../../skills/runtime-implementation-verification/tests/test_gate9_tools.py) | `e4fdab7890d02018c0fdb5e86ea021c4d2d8528d8ef42ea1a4236147a1edc769` |
| 静态测试 | [test_static_artifact.py](../../skills/runtime-implementation-verification/tests/test_static_artifact.py) | `b7112e8c6b6f1219a15ce14259a4134ca41873c010e6eeb90facdea35c189ef7` |
| 交接合同V1.2 | [GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.2.md](GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.2.md) | `e66c90f03e50a5d62741d9ade7637c764444b906818ccaccc7a08de480ddeadc` |
| 静态Schema V1.1 | [GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.1.json](GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.1.json) | `30405223e955c1534acd356d94b50c82e81ab83fe8198db5019c2ff232a240d3` |
| 旧Schema V1.0 | [GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json](GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json) | `cbd36d338412a5d311ae062a93982d9a5799e0cf3d459bcb72d41e4a155247ad` |

14项合成工具测试通过，含8项原格式回归及6项静态制品测试。静态方式不锁定工作区，按Git blob校验证据，按完整清单及响应hash绑定制品。未进行真实页面V1.1试跑，不赋予页面、开发、外发或发布授权。V1.1基线保留历史；旧D16集成队列不进入当前执行组合。

本次仅按用户纠正归并开发文档入口；校验脚本、Schema及测试未变，沿用上版14项合成测试证据，不声称重新执行。原独立Gate 8入口只保留历史，不再消费其hash。
