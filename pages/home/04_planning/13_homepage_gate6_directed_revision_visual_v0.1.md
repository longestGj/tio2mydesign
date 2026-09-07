# HOME-001 Gate 6 Directed Revision Visual Record V0.1

## 0. Document control

| Field | Value |
|---|---|
| Page | `HOME-001` / Home / `/` |
| Status | `GATE6_DIRECTED_REVISION_CANDIDATE / PENDING_PROJECT_CONTROL_REVIEW` |
| Date | 2026-08-31 |
| Gate 5 approved baseline | Desktop V0.7; 390px Mobile V0.6.1; Mobile Menu Open V0.6; Global Chrome V0.2 |
| Gate 7 | `LOCKED / NOT AUTHORISED` |
| Production status | Visual and responsive evidence only; not implementation |

This record does not replace the Gate 5 approved baseline. It registers only the authorised Gate 6 directed revisions and the resulting review candidates.

## 1. Authorised visible Home change

Only the Company / About paragraph receives a buyer-visible factual addition:

> TiO₂ Malaysia is operated by IKHLAS TITANIUM (MALAYSIA) SDN. BHD., a titanium dioxide manufacturer.

The existing About destination sentence remains after it. The user explicitly approved public use of `manufacturer` on 2026-08-31. This statement does not assert factory location, manufacture in Malaysia, product origin, COO, capacity, inventory, certification or traceability.

Outside this sentence and its unavoidable text-wrap geometry, Home module order, copy, Header, Footer, fixed RFQ, product names, grade counts, CTA logic, SEO ownership and evidence gates remain frozen.

## 2. Candidate Buyer Clean exports

| Role | Formal file | Dimensions | Bytes | SHA-256 | Status |
|---|---|---:|---:|---|---|
| Desktop Buyer Clean | `pages/home/04_planning/visual-designs/homepage-full-visual-pc-clean-v0.8.png` | 1440×5683 | 840463 | `DB34764C15A1F8F2197DDE019FDFD4F6FC90C6E85A4023CF5B76657929ABA117` | Gate 6 candidate |
| 390px Mobile Buyer Clean | `pages/home/04_planning/visual-designs/homepage-full-visual-mobile-clean-v0.6.2.png` | 390×8884 | 366200 | `4ECE62FA2E3ACDEE65CE983D80D5AEF3E294FED9F2593B2B1960A2524E78BB49` | Gate 6 candidate |

The previous approved files remain unchanged:

- Desktop V0.7: `8C3721309F9BF1A409E53B22AC7A53E0135D7D4347E33B911712763F66AB9E9A`.
- Mobile V0.6.1: `37C61C8C10B6B8F81EE36CA1B0D4AB6B3C751903583436E112D47CC67B11F9D5`.

Automated isolated-module comparison found zero pixel changes in all unaffected body modules. Human crop review confirmed that the longer Company sentence wraps without collision or overflow on Desktop and 390px Mobile.

## 3. Responsive and interaction evidence

| Evidence | Formal file | Dimensions | Bytes | SHA-256 |
|---|---|---:|---:|---|
| Mobile Products Expanded, current PRODUCT V0.3 | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-mobile-products-expanded-v0.4.png` | 390×1428 | 55001 | `B19D39AB44E26F419F48E1F68E4CBC76CE9B76BF838B3559CAD3B179E5D64A85` |
| Tablet 768 evidence | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-768-evidence-v0.1.png` | 768×5364 | 351499 | `A7A54820A2C12061CE5EEC97C0694F6E31C867DA31B80018F6E7225EAD9849C6` |
| Tablet 1024 evidence | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-1024-evidence-v0.1.png` | 1024×4070 | 346382 | `3B1D0D334F1FD18719CC67C648DAF5E253C0F1F9E96B300A21E3644A0DC9C7BB` |

The Mobile expanded state consumes the current PRODUCT V0.3 fourteen-grade data and shows all four groups and 6/5/2/1 counts. It keeps M-2377 neutral, does not compare M-996 with M-2196 and does not expose `NO_PUBLIC_MAPPING`.

The Tablet evidence covers Header/navigation, Hero, Markets, Products, Applications, Documents, Footer and fixed RFQ at both required widths. It is responsive review evidence, not an additional approved page version.

## 4. Shared Chrome candidate

The only shared Chrome buyer-visible revision is the Footer section title `Conversion` → `Procurement`. The contract and state boards are:

- `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.3.md`.
- `pages/home/04_planning/12_global_header_footer_component_states_v0.3.md`.
- `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_DESKTOP_STATES_V0.3.png` — 1440×1380, SHA-256 `A6F60D33E70B762BD3B2E2816FE0BB7947BC432FB1E93992E7A5182BE4E24BC4`.
- `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_MOBILE_STATES_V0.3.png` — 390×1690, SHA-256 `ADC330D8E074585844FF1A693C00D22FE6A7C454371912C58A8C9D1A474B5723`.

Fixed RFQ, Logo, Header order, Mobile Header/Menu, dimensions, colours and all other Footer content remain frozen. Global Chrome V0.3 is a project-control-review candidate; V0.2 remains the approved shared baseline until review.

## 5. Verification result

- Desktop, 390px Mobile, 768px Tablet and 1024px Tablet report no horizontal overflow.
- Mobile tested interactive targets are at least 44px.
- Buyer Clean scans contain no page IDs, pending/not-live labels or internal governance language.
- One exact H1 remains on each complete Home view.
- The authorised manufacturer sentence occurs once in each complete Home candidate.
- Fourteen grade IDs are complete and unique in the expanded verification state.
- Header, Hero and Footer RFQ remain visible; Desktop retains the page RFQ Section; Mobile omits it and proceeds from Resources / Buyer Answers directly to Footer.
- No Sample CTA, unsupported document promise, factory/location claim, Offer or commerce field was introduced.
- Automated checks do not replace project-control human visual review.

## 6. Review boundary

These files are candidates for the same Gate 6 directed review. They are not user-approved replacements for the Gate 5 baseline, not production assets and not permission to begin Gate 7, development, testing, handoff, deployment or publication.
