# RES-ORIGIN Current Gate 9 Baseline Manifest V0.11

## 0. Governance

| Field | Value |
|---|---|
| Page | `RES-ORIGIN` / Non-China Titanium Dioxide Supply Guide |
| Route | `/resources/non-china-titanium-dioxide/` |
| Date | 2026-09-05 |
| Lifecycle | `READ_ONLY_QA_APPROVED` |
| Gate 0–8 | `USER_APPROVED_OR_AUTHORIZED / CLOSED` |
| Gate 9 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 9 disposition | `READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS` |
| Return review | `RES-ORIGIN-G9-ROQA-01 = RETURNED / CLOSED` |
| Closure review | `RES-ORIGIN-G9-ROQA-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 10 | `LOCKED / NOT AUTHORIZED` |
| Public state | Preview-only; not in public Resources inventory or sitemap; not indexable |
| Supersedes | `pages/resources/05_review/RES-ORIGIN_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md` |

V0.10 remains the historical Gate 8 dispatch state. This V0.11 is the sole current Gate 9 implementation pointer and does not authorize release.

## 1. External implementation lock

| Field | Value |
|---|---|
| D16 task | `Implement RES-ORIGIN Gate 8` |
| Task ID | `01a06f70-b99d-7a92-9def-196f2b21abd9` |
| Repository | `D:\16Wordpress_nextjs` |
| Reviewed worktree | `C:\Users\longe\.codex\worktrees\bd8e\16Wordpress_nextjs` |
| Branch | `codex/res-origin-gate8` |
| Base ref | `d1b15e253b1202d2e4639646845c7ca8155104a8` |
| Initial Gate 8 tip | `dd1e82ee3516e7e994a39f8b9e040d0743764069` |
| P0 correction | `ee64dd787e103b8a9a343d37533270ca7203a731` |
| Final reviewed ref | `53ec50213f806ed4a9995042c4431f8e4376d36d` |
| Worktree after verification | Clean |
| D16 modification by D23 | None; read-only inspection only |

## 2. Approved authority

The sealed Gate 7 authority remains unchanged:

- `pages/resources/06_handoff/RES-ORIGIN_GATE7_HANDOFF_PACKAGE_V0.1.md` — SHA-256 `69C711D737A5DFAE59B1E5CECBF0304E3A412154EB1D3F01B1E34D58E3292064`;
- `pages/resources/06_handoff/RES-ORIGIN_GATE7_CMS_API_COMPONENT_MAPPING_V0.1.md` — SHA-256 `DEB240F8B15C68C84F9E6896F23C715BF7F273B9192AD60101ADF9B0405ACA9B`;
- `pages/resources/06_handoff/RES-ORIGIN_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md` — SHA-256 `46A8A2D95BB4ABFD2A13850C7823D6EFC71000B811F33380F6A8F2F30F08405C`;
- `pages/resources/06_handoff/RES-ORIGIN_GATE7_MANIFEST_V0.1.md`.

The first-return evidence is `pages/resources/07_qa/RES-ORIGIN_GATE9_READ_ONLY_QA_RETURN_V0.1.md`; the closure authority is `pages/resources/07_qa/RES-ORIGIN_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md`.

## 3. Locked correction payload

All paths below are relative to the reviewed D16 worktree.

| Path | Bytes | SHA-256 |
|---|---:|---|
| `app/resources/non-china-titanium-dioxide/page.tsx` | 1,527 | `827D676A3B9405E8950439570A9FD177B34981FAFC68D87CAAAFC067D7C06C55` |
| `components/sites/tio2-my/resources/malaysia-resource-origin-page.tsx` | 12,021 | `050C85D3CC74B619BC276ABDAF00BDBA965D8DB5769D5C8574CFECDC98BD188B` |
| `components/sites/tio2-my/resources/malaysia-resource-origin-page.module.css` | 12,370 | `5B7E222CCAACA39127B34F0EFCD02DECF3E48555598E01A93D7B8AF1074E8E57` |
| `lib/resources/malaysia-resource-origin-article.ts` | 2,629 | `61A484CB3395396F4D0EC74968F296C2EB56B4C8A3DC346D6E117A173203EB3E` |
| `lib/seo/resource-origin-jsonld.ts` | 2,581 | `FA70D3F59389FD59652466F932D1487D5DE78782B92A5FBCB0BD326B6D60F95E` |
| `lib/wordpress/resource-origin-v01-dto.ts` | 9,344 | `E20065A3135623B152EFB3679EFE1C96EF3081D293D4D49E46372FEC02514910` |
| `lib/wordpress/resource-origin-v01-types.ts` | 1,763 | `FEA48D37E8D46BCBDCF4AB1C6FA8DB5AF841AB697396FF3CE3C337CBC0B5C7F2` |
| `wordpress/plugins/tio2-site-model/includes/resource-origin-v01.php` | 13,299 | `08996E7DA8DA36B352C3FA38A2454F819514A60EDF1FD1254A463A7A83ADFC9A` |
| `wordpress/plugins/tio2-site-model/includes/webhooks.php` | 31,961 | `4F9DF7B6885D50777CA138A4C6C5C61E77AE39B7808A4E97260EC3048F5C2DF2` |
| `tests/integration/resources/malaysia-resource-origin-article-pipeline.test.tsx` | 4,712 | `1A59FFF7ABDDA0FD1FB09AEC66C611351A7A94DA3D73636B4B8B1529AC391865` |
| `tests/integration/wordpress/tio2-my-resource-origin-article-runtime.test.ts` | 3,808 | `C8DD6B6C0B8B9EBFC8A5A8B72FE10F1EC3962CD67BF5353F0E87710FE8EA6F45` |
| `docs/verification/res-origin/GATE8_IMPLEMENTATION_RECEIPT_2026-09-05.md` | 9,031 | `C8C6677F4FA29C34FEF3790EBEEB70423D9BCAB9095276F6C991146FE8C59175` |

## 4. Independent verification

| Check | Result |
|---|---|
| Focused RES-ORIGIN + route/revalidation suite | PASS — `134/134`; one runtime-gated test separately enabled |
| Real local WordPress resolver/webhook fixture | PASS — `1/1`; original null record restored |
| Complete/incomplete/hidden/unapproved-logo integration | PASS — `4/4` |
| TypeScript | PASS |
| ESLint | PASS — zero errors; two pre-existing prototype warnings |
| `SITE_ID=tio2-my` optimized build | PASS — `37/37` static generations |
| Fresh runtime route | HTTP 200 |
| Current Article visibility / Article Schema | `0 / 0`, as required for approved null metadata |
| Current H1 / BreadcrumbList | `1 / 1` |
| Current robots | `noindex, nofollow` |
| Current canonical | `https://tio2malaysia.com/resources/non-china-titanium-dioxide/` |
| Frozen M-996 / M-2196 references | `0 / 0` |
| Commit diff check | PASS |
| Worktree | Clean |

The initial Gate 9 responsive and accessibility evidence also remains valid: 1440/1024/768/430/390/375px and 640px reflow had no overflow, clipping, undersized text or undersized interactive targets; mobile-menu focus trap/Escape/restoration and FAQ focus/expanded state passed.

## 5. Finding disposition

| Finding | Result |
|---|---|
| `RES-ORIGIN-G9-P0-01` conditional Article pipeline unreachable | `VERIFIED_FIXED / CLOSED` |
| Current null metadata incorrectly emitting Article | `NO REGRESSION` |
| Hidden/incomplete metadata leaking publicly | `FAIL-CLOSED / PASS` |
| Approved copy/module/SEO/relation drift | `NONE FOUND` |
| Cross-scope fallback | `NONE FOUND` |
| P0/P1 remaining | `0 / 0` |

## 6. Release boundary

Gate 9 is complete. RES-ORIGIN remains preview-only and excluded from parent public inventory/sitemap. Current Article metadata remains null. Production receiver/read-back, parent-child release predicates, official-source freshness and other recorded external dependencies remain release blockers. Gate 10, deployment, DNS, production writes, publication and indexing are not authorized.

