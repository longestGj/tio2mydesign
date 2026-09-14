# TiO2 Malaysia GA4 Active Current Gate 9 Manifest V1.0

日期：2026-09-13  
Manifest ID：`TIO2-MY-GA4-ACTIVE-CURRENT-GATE9-V1.0`

## 1. 当前状态

| 层级 | 状态 |
|---|---|
| Machine intake | `EVIDENCE_INCOMPLETE / KNOWN_SELF_REFERENCE_LIMITATION_ONLY` |
| Independent evidence audit | `PASS / 16_OF_16_HASHED_AND_TRACKED` |
| Required Finding | `TIO2-MY-GA4-G9-F01=OPEN` |
| Recheck scope | `RETURN / 1_REQUIRED_FINDING_OPEN` |
| Page/workset Gate 9 | `NOT_PASS / ACTIVE_GA4_ATOMIC_ACTIVATION_RETURN_01_REQUIRED` |
| Integration | `NOT_READY` |
| Release / Gate 10 | `NOT_AUTHORIZED` |

标准validator及preflight没有被重标为PASS。其两项失败来自Manifest/receipt在evidence commit之后才进入handoff commit的循环自引用限制。Gate 9已独立确认16项证据、提交祖先链、Build ID、两轮14/14 runtime和CMS身份，工具限制不构成实现缺陷。

实际必修项为Cookie Settings首次无选择状态未遵守批准的精确动作集合；原子GA4/Legal激活尚未通过。

## 2. 精确候选

| 字段 | 值 |
|---|---|
| Repository/worktree | `D:\16Wordpress_nextjs\.worktrees\tio2-my-full-public-seo-ga4` |
| Branch | `codex/tio2-my-full-public-seo-ga4` |
| Baseline | `b52702cf52a1eb6a8292db160920158a3def3eed` |
| Implementation | `30e026318006c141b725a1231f1942f555cd9a07` |
| Test alignment | `691ad3ed24384eea9f72a269da49035814c93bbd` |
| Evidence commit | `c55eb8f8dec38f9d96a817228cf7d66bfac9afeb` |
| Handoff / observed HEAD | `2cf213c43bd0d2b6ad3e5cbfeb1d09b8053eaee2` |
| Build ID | `tio2-my-ga4-g8-30e02631-20260913` |
| Runtime | `http://127.0.0.1:3123` |

## 3. Finding台账

`TIO2-MY-GA4-G9-F01`（P1）开放。无Consent记录的首次Cookie Settings实际显示`Close / Save preferences / Accept analytics / Necessary only / Read Cookie Policy`；批准合同要求首次仅`Accept analytics / Necessary only / Cookie Policy`，已有选择后重开才显示`Save preferences / Accept analytics / Necessary only / Close`。责任方为Gate8共享Consent owner。

GTM-only、四项默认denied、仅Analytics grant、撤回、两枚Cookie生命周期、accepted reload单一page_view、三个provider事件各一次、四个批准参数、无PII、无cross-scope、Privacy EN/BM与Cookie主体均已通过。Return-01只需修复F01并回归这些范围。

## 4. 正式证据

| Artifact | SHA-256 |
|---|---|
| `docs/architecture/TIO2_MY_GA4_ACTIVE_GATE9_INDEPENDENT_ACCEPTANCE_V1.0.md` | `2B3E835130BC471DA87D2317FB74B967DF4B348191D4A4880785106FE311BF5A` |
| `docs/architecture/gate9-tio2-my-ga4-active-20260913/evidence-validation.json` | `1DC3B2B9B6CA6917ADC8B6BF26AD2DA1A02C9A5521C4FA8F3A01E09AF1D61C99` |
| `docs/architecture/gate9-tio2-my-ga4-active-20260913/preflight.json` | `023F36449EFB523981B9120EFA98A22C0C36BB5813205FE1D662F951C3663834` |
| `docs/architecture/gate9-tio2-my-ga4-active-20260913/independent-machine-audit.json` | `67B0B59801EAB6D1D9945FD0569C173162B9487F90DFAD987FA188D44AC75363` |
| `docs/architecture/gate9-tio2-my-ga4-active-20260913/independent-runtime-two-rounds.json` | `D9BD06D8460762E22A5455659D51412C9EABA088C9DC951832A0A3D98D12044D` |
| `docs/architecture/gate9-tio2-my-ga4-active-20260913/independent-browser-observation.json` | `3E7CF95B1EF3E37DDAECE214A1D110D2A65217B2C03CBEEA1AF39E9360C10791` |

## 5. Next authority

Gate8只获授权定向修复F01并返回新的精确implementation/evidence/handoff HEAD、Build、runtime与Manifest。当前3123 runtime可在收到RETURN通知后释放。

本Manifest不授权真实表单提交、GTM发布、merge、push、deploy、生产发布、生产WordPress写入、DNS/GSC、索引或Gate 10。
