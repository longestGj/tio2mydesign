# M-350 Hero Spacing Revision V0.4

## Document control

| Field | Value |
|---|---|
| Page | M-350 Exact Grade Product Detail Page |
| Revision | V0.4 |
| Status | `DRAFT_FOR_USER_VISUAL_REVIEW` |
| Date | 2026-08-31 |
| Scope | Desktop and mobile breadcrumb-to-Hero vertical spacing only |
| Supersedes | V0.3 visuals after user approval of this revision |
| Release readiness | `FAIL` — conversion routes remain planned |

## User review finding

The space between the breadcrumb and the first Hero content was excessive on both desktop and mobile. The Hero inherited the global section padding while also carrying its own inner padding, creating duplicated vertical space.

## Approved-for-review correction

- Removed the global section padding from the Hero only.
- Set the desktop breadcrumb-to-eyebrow distance to 56 px.
- Set the 390 px and 430 px breadcrumb-to-eyebrow distance to 32 px.
- Preserved Header, breadcrumb, Hero content, CTA, product visual, product facts, all downstream modules and Footer.
- Preserved V0.3 as a historical review asset; no V0.3 file was overwritten.

## Visual manifest

| Asset | Dimensions | SHA-256 |
|---|---:|---|
| `M350_PRODUCT_DETAIL_DESKTOP_V0.4.png` | 1440 × 6553 | `27EEB3C6BBB7BD1C54435B0C1CAF0018AA080C6FD7E89FD3920BBE30AB69E551` |
| `M350_PRODUCT_DETAIL_MOBILE_390_V0.4.png` | 390 × 10535 | `49BF99C9409654D9F6789FAC9D6B82A893F532300798F6E964E54FCB118DEFA6` |
| `M350_PRODUCT_DETAIL_MOBILE_430_QA_V0.4.png` | 430 × 10212 | `3EBD2258237464F5DA3EE4183F1F08A26E95AB0E0DB6062BEED999ECCFA311DE` |

## Verification

| Check | Result |
|---|---|
| V0.3 and V0.4 visible body text SHA-256 | Identical: `2DFF4C036AC29D535D9A187B99EDD2F02AA64EA0E84DE5ECC395D76F4081E9F1` |
| Desktop horizontal overflow | None; document width 1440 px at 1440 px viewport |
| Mobile 390 horizontal overflow | None; document width 390 px at 390 px viewport |
| Mobile 430 horizontal overflow | None; document width 430 px at 430 px viewport |
| Minimum interactive control height | 44 px |
| H1 count | 1 |
| Application cards | 5 |
| Technical rows | 15 |
| Evaluation cards | 2 |
| Internal QA token leakage | None |

## Gate impact

- Visual Gate: `PASS_WITH_USER_REVIEW_PENDING`
- Content, TDS, SEO, GEO and evidence gates: unchanged from V0.3
- Route Readiness Gate: `FAIL`
- Development and release: not unlocked

