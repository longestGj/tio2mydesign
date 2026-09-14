# TiO2 Malaysia GA4 Active Current Gate 9 Manifest V1.1

日期：2026-09-13

Manifest ID：`TIO2-MY-GA4-ACTIVE-CURRENT-GATE9-V1.1`

## 1. 当前状态

| 层级 | 状态 |
|---|---|
| Machine intake | `EVIDENCE_INCOMPLETE / KNOWN_SELF_REFERENCE_LIMITATION_ONLY` |
| Independent evidence audit | `PASS / 19_OF_19_HASHED_AND_TRACKED` |
| Required Finding | `TIO2-MY-GA4-G9-F01=CLOSED / PASS` |
| Recheck scope | `PASS` |
| Page/workset Gate 9 | `PASS / TIO2_MY_FULL_PUBLIC_SEO_GA4_WORKSET_ACCEPTED` |
| Integration | `INTEGRATION_READY` |
| Release / Gate 10 | `NOT_AUTHORIZED` |

V1.0保留为首轮RETURN历史。Return-01精确候选已完成Gate 8接收和Gate 9独立定向复核；首次与重开Cookie Settings动作、标签和焦点均满足批准合同，唯一Finding已经关闭。

## 2. 当前精确候选

| 字段 | 值 |
|---|---|
| Repository/worktree | `D:\16Wordpress_nextjs\.worktrees\tio2-my-full-public-seo-ga4` |
| Branch | `codex/tio2-my-full-public-seo-ga4` |
| Baseline | `b52702cf52a1eb6a8292db160920158a3def3eed` |
| Implementation | `f61fb259faaa0d691602902336d81ae3e3b92c1f` |
| Evidence HEAD | `0f7a6299f3b9c1776366d9cf290506bddec8ea82` |
| Handoff / observed HEAD | `243d7546e6a367cdba0a8daf2eab7a0f5ce1cd61` |
| Build ID | `tio2-my-ga4-g9r1-f61fb259-20260913` |
| Runtime | `http://127.0.0.1:3124` |
| CMS | `http://127.0.0.1:8280/graphql` |
| GTM / GA4 | `GTM-MWQVK7J4` / `G-QDHLMRH2WB` |

## 3. 已通过范围

- GTM-only加载与四项默认denied。
- 仅Analytics授权、撤回与Malaysia GA Cookie清理。
- accepted reload单一page_view。
- RFQ、Documents、Sample三个provider accepted事件及四个批准的非PII参数。
- 无PII、无cross-scope Measurement ID或fallback。
- Privacy EN/BM、Cookie Policy及共享Cookie Settings。
- 首次动作`Accept analytics / Necessary only / Cookie Policy`。
- 重开动作`Save preferences / Accept analytics / Necessary only / Close`。
- 首次/重开焦点、Close焦点返回和390px零横向溢出。

## 4. 当前证据入口

- [Gate 9 Return-01定向复验V1.0](TIO2_MY_GA4_ACTIVE_GATE9_RETURN1_TARGETED_RECHECK_V1.0.md)
- [Gate 8 Return-01接收V1.0](TIO2_MY_GA4_ACTIVE_GATE9_RETURN1_GATE8_ACCEPTANCE_V1.0.md)
- 历史[首轮Gate 9验收V1.0](TIO2_MY_GA4_ACTIVE_GATE9_INDEPENDENT_ACCEPTANCE_V1.0.md)
- D16 Manifest：`D:\16Wordpress_nextjs\.worktrees\tio2-my-full-public-seo-ga4\docs\verification\tio2-my-ga4-g9-return1-20260913\gate8_return1_evidence_manifest.json`

## 5. 已知机器限制

官方validator为131 PASS / 2 FAIL，仅因Manifest最终提交自引用导致`git_head`及`receipt_committed`失败。独立证据链和运行时补验已通过，但工具结果不重标为preflight PASS。

## 6. Authority boundary

Gate 9已于2026-09-13通知Gate 8停止Return-01返修并释放3124运行时。本Manifest不授权GTM发布、Gate 10、merge、push、deploy、公开发布、生产WordPress写入、DNS、GSC或索引。
