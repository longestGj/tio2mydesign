# TiO2 Malaysia production GA4 legal parity current Gate 9 Manifest V1.0

日期：2026-09-14

Manifest ID：`TIO2-MY-PROD-GA4-LEGAL-PARITY-CURRENT-G9-V1.0`

## 当前状态

| 层级 | 状态 |
|---|---|
| Finding | `TIO2-MY-PROD-GA4-F01` |
| Candidate remediation | `RESOLVED_IN_ACCEPTED_CANDIDATE` |
| Recheck scope | `PASS / THREE_LEGAL_PAGE_REMEDIATION_ACCEPTED` |
| Page Gate 9 | `PASS_FOR_EXACT_THREE_PAGE_CANDIDATE` |
| Integration | `NOT_READY / DEVELOP_CMS_57_PAGE_COMBINATION_43_OF_57` |
| Production Finding | `OPEN_IN_PRODUCTION` |
| Release / Gate 10 | `NOT_AUTHORIZED` |

## 当前候选身份

| 字段 | 值 |
|---|---|
| Branch | `codex/tio2-my-prod-ga4-legal-parity` |
| Baseline | `1ab1a9a02958394135b655d912463dd12d69e1cf` |
| Implementation | `24065cdeffef6a887b290f542be74d78be595b71` |
| Evidence-only | `f0c3bc9891822d1beb4d21d77211c3fd297e6ec2` |
| Receipt | `1ae56f2e93f098c66be61f02693c2fb380410827` |
| Handoff | `409053e008ccc767b01615bad73e6e38902b68b7` |
| Build ID | `aoZsmmoI852RtB8oVR-vb` |
| Content SHA-256 | `13ac8f9984d8a4cadb8c4e34f0cc07c2d7519d88ee3effd0583d23afeeb5a3a8` |

## 当前证据入口

- [Gate 9定向复验V1.0](TIO2_MY_PRODUCTION_GA4_LEGAL_PARITY_GATE9_TARGETED_RECHECK_V1.0.md)
- [生产Finding来源V1.0](TIO2_MY_PRODUCTION_SEO_GA4_READONLY_VERIFICATION_20260914_V1.0.md)
- [GA4法律内容交付V1.0](TIO2_MY_GA4_LEGAL_CONTENT_DELIVERY_V1.0.md)
- [独立机器审计](gate9-tio2-my-prod-ga4-legal-parity-20260914/independent-machine-audit.json)
- [独立浏览器审计](gate9-tio2-my-prod-ga4-legal-parity-20260914/independent-browser-audit.json)

## 开放责任

- 57页组合：`D16 integration environment`。
- BM Meta Description旧oracle：`D23/D16 contract owners`，与本三页GA4文案Finding分离。
- 内容发布：仅在用户另行明确授权后由D16 release owner执行。
- 生产复验：发布后由Gate 9只读执行，届时才能关闭`OPEN_IN_PRODUCTION`。

本Manifest不授权Gate 10、merge、push、deploy、生产CMS写入、公开发布、DNS、GSC或索引。

