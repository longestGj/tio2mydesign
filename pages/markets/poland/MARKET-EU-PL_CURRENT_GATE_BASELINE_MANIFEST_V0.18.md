# MARKET-EU-PL Current Gate Baseline Manifest V0.18

2026-09-07。本版经项目总控独立审查后接替[V0.17](MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.17.md)为当前入口；V0.17保留授权启动截面，不回写。本版不代表用户已批准Gate 5。

| Item | Candidate value |
|---|---|
| Page ID / URL / language | `MARKET-EU-PL` / `/markets/poland/` / EN |
| Primary keyword / site_scope | `titanium dioxide supplier poland` / `tio2-my` |
| Gate 1–4 | `APPROVED / CLOSED`, exact combination inherited unchanged from V0.17→V0.16 |
| Gate 5 | **`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`**；由 `PL-G5-START-01` 授权执行；[总控独立审查PL-G5-PCR-01](05_review/MARKET-EU-PL_GATE5_PROJECT_CONTROL_REVIEW_V0.1.md)通过 |
| Lifecycle | `DESIGN_IN_REVIEW`; fact, keyword and external implementation states remain separate |
| Gate 6–10 / development / publication | **NOT_AUTHORIZED** |

## Candidate Gate 5 combination

Freeze: **`PL-G5-V01-SOURCE-01`**. Combined dependency/input SHA-256: `3f8b315da0e41091bf46f6d45ecc4b96c7ba22788339d16258ce752cb295221d`. Freeze record SHA-256: `e38d309465861823ba1be95f99144108ffcbee94f6fff50b8374f9a4e2036b80`.

| Candidate core | Identity |
|---|---|
| [Editable full visual HTML](04_planning/gate5-v0.1/source/MARKET-EU-PL_GATE5_FULL_VISUAL_V0.1.html) | 16,660 bytes; SHA-256 `d470aea165d457d5a7a264c10606f5d77446903abc88f923d7a4b759405a5944` |
| [Visual rules](04_planning/gate5-v0.1/source/visual-rules.css) | 1,728 bytes; SHA-256 `8d1299c9072b0413f242d4568cc62ed99cb6865a0938a7320c6f7ee5b4400785`; byte-identical to approved Gate 4 V0.2 |
| [Source freeze](04_planning/gate5-v0.1/approval_core/source-freeze.json) | Binds editable source, local font/Chrome snapshot, Production Logos and 30 controlling inputs |
| [Full visual specification](04_planning/gate5-v0.1/MARKET-EU-PL_GATE5_FULL_VISUAL_SPECIFICATION_V0.1.md) | Input mapping, complete-page rules, states, checks and limits |
| [Formal export inventory](04_planning/gate5-v0.1/approval_core/export-inventory.json) | 14 PNGs from the frozen source; exact dimensions, bytes and hashes |
| [Complete asset inventory](04_planning/gate5-v0.1/asset-inventory.json) | Submission-level core/support identity entry |
| [Execution self-check](05_review/MARKET-EU-PL_GATE5_EXECUTION_SELF_CHECK_V0.1.md) | Author check; does not replace independent review |
| [Gate 5→6 receiving draft](05_review/MARKET-EU-PL_GATE5_TO_GATE6_HANDOFF_V0.1.md) | Gate 6 remains unauthorised |

## Required full-page assets

| Viewport | Logical / physical size | SHA-256 |
|---|---|---|
| [Desktop full page](04_planning/gate5-v0.1/approval_core/full-page-1440.png) | 1440×1000 @1x / 1440×2387 | `d95bba7edb4fb7574110b52a5d9f3c6f3dec8b2abe044a354241b9f6139f4630` |
| [Tablet full page](04_planning/gate5-v0.1/approval_core/full-page-768.png) | 768×1000 @1x / 768×2854 | `af8cfd260dc460632c18b2ad6a990e2b94ea2c27d6b73b409600f9c68ceef792` |
| [Mobile full page](04_planning/gate5-v0.1/approval_core/full-page-390-logical-at2x.png) | 390×844 @2x / 780×7620; content height 3810 logical px | `1ed0be2db19a49be3dc469f9d99d00ce9033bed780ad8b40ffd1cb2fe5186a85` |

The remaining 11 formal images are two menu-open states, three Cookie Settings states, three main-action keyboard-focus states and three Document Hub hover states. Their exact identities are not duplicated here; `export-inventory.json` controls them.

## Authority, review and open boundaries

B V0.2 remains the sole editable buyer-copy source; C V0.4 remains the action/SEO/GEO/Schema contract. Gate 3 structure and Gate 4 V0.2 direction are unchanged. Current shared owner contracts and exact input identities are bound by the freeze; no other business page is a source.

Execution-author preflight and formal runtime passed after two recorded checker corrections. All 14 formal images and 11 readable long-page segments were opened. [Root independent review](05_review/MARKET-EU-PL_GATE5_PROJECT_CONTROL_REVIEW_V0.1.md)重新核对原始要求、身份、三端全页、状态与浏览器行为，未发现实质Finding，当前等待用户批准。

Open later-owner boundaries: destination routes and editable prefill, RFQ/Document receiver and real submission, production CMP/storage, Schema/robots/sitemap, `site_scope=tio2-my` runtime isolation, other engines, real devices, assistive technology and UI zoom. Gate 4 S01 remains a non-blocking Global Chrome suggestion. None is disguised as local proof.

本版已由有权总控记录为当前 `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；只有后续用户对精确成果的明确决定才能关闭Gate 5。若用户要求修改，保留本冻结并为影响源的返修建立新组合。Gate 6仍单独未授权。
