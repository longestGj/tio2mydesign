# Product Detail Global Chrome Current Authority Addendum V0.5

## 1. Document control

| Field | Value |
|---|---|
| Document ID | `PRODUCT-DETAIL-GLOBAL-CHROME-ADDENDUM-005` |
| Date | `2026-09-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Parent Gate 6 Review ID | `PRODUCT-DETAIL-G6-PCR-01` |
| Applies to | All 14 Grade Detail Pages |
| Current Global Chrome authority | `D:\23MySec\docs\architecture\GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` |
| Current state-board authority | `D:\23MySec\pages\home\04_planning\16_global_header_footer_current_state_component_states_v0.5.md` |
| Logo authority | `D:\23MySec\brand\logo\production\PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` |
| Historical product-detail chrome | V0.1/V0.2 Addenda and V0.1/V0.2 PNGs; immutable history only |

This Addendum synchronizes the Grade Detail Page planning pack to the current shared Global Chrome authority. It does not redraw the Header or Footer, change M-350 body pixels, approve an implementation or modify a closed historical file.

## 2. Current required state

| Surface | Current Grade Detail Page contract |
|---|---|
| Desktop Header | 84px; `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote` |
| Desktop current state | `Products` bold with 3px Malaysia Teal underline; no buyer-visible `CURRENT` text |
| Mobile Header | 64px; `Logo | RFQ | Menu` |
| Mobile Menu current state | `Products` bold with 4px Malaysia Teal left marker; no buyer-visible `CURRENT` text |
| RFQ | Fixed and visible in approved Header, Mobile Header/Menu and Footer surfaces |
| Footer | Deep Navy; column title `Procurement`; no `Conversion` label and no current-page marker |
| Header Logo | `brand_logo_primary_horizontal` from Production SVG Logo Manifest V1.0 |
| Footer Logo | `brand_logo_reverse_monochrome` from Production SVG Logo Manifest V1.0 |
| Product body ending | Sample module → Global Footer; no final embedded RFQ module |

## 3. Semantic current-state contract

- Each Desktop or Mobile primary-navigation surface contains at most one `aria-current="page"`.
- Grade routes map to `Products`.
- At an active viewport, exactly one primary-navigation surface is exposed to the accessibility tree and it contains exactly one current link.
- The inactive responsive surface is absent from the accessibility tree and keyboard sequence.
- A shared DOM may retain one current node per responsive surface, but never more than one inside one surface.
- Visible `CURRENT` text count is zero on every buyer-facing navigation surface.

## 4. Historical conflict resolution

| Historical evidence | Current interpretation |
|---|---|
| Product-detail V0.1/V0.2 PNG contains visible `CURRENT` | Historical static pixel evidence only; not current buyer-facing copy |
| Product-detail V0.1/V0.2 Footer uses `Conversion` | Historical Footer label only; current Footer uses `Procurement` |
| Historical visual uses PNG Logo source | Historical rendered evidence only; production binding uses approved SVG asset keys |
| Earlier RFQ ON/OFF state board | Superseded for public Global Chrome; current RFQ is fixed |

Historical files remain unchanged. This Addendum establishes consumption precedence and prevents traceability loss caused by rewriting closed evidence.

## 5. Implementation-neutral acceptance

- Desktop Header height = 84px; Mobile Header height = 64px.
- Desktop and Mobile navigation orders remain identical to the shared contract.
- `Products` receives the current state for every Grade Detail Page.
- Visible `CURRENT` and Footer `Conversion` counts = 0.
- Production SVG keys resolve to the exact approved paths and hashes; the historical PNG cannot be used as a production fallback.
- RFQ remains fixed; a missing destination route fails closed rather than changing to Contact.
- At 390px and 200% zoom, no horizontal overflow, clipped navigation, duplicate accessible surface or hidden-surface focus leak occurs.
- Header/Footer changes do not alter product body order, content, SEO/GEO, Schema, evidence gates or responsive reading order.

## 6. Stage boundary

This Addendum passed Gate 6 project-control review under `PRODUCT-DETAIL-G6-PCR-01` and is closed. The user authorized Gate 7 specification preparation on 2026-09-01. It does not authorize Gate 8 or development and does not access `D:\16Wordpress_nextjs`.
