# HOME-001 Gate 5 Approved Baseline Manifest V0.1

## 1. Governance status

| Field | Value |
|---|---|
| Page | `HOME-001` / Home / `/` |
| Gate 5 | `APPROVED / CLOSED` |
| User approval date | `2026-08-31` |
| Approval source | User explicitly confirmed that the Homepage visual review passed, approved Home Gate 5, and authorised submission to Gate 6 project-control review. |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Gate 6 | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` |
| Gate 7 | `LOCKED / NOT AUTHORISED` |
| Production status | Not production assets; no development, deployment or release authority |

Gate 5 approval closes the visual-design stage only. It does not change keyword mapping, factual verification, route readiness, localization, technical evidence, development or publication status. It must not be interpreted as `APPROVED_FOR_HANDOFF`.

## 2. Approved Home visual baseline

| Asset role | Formal file | Dimensions | SHA-256 | Gate 5 status |
|---|---|---:|---|---|
| Desktop Buyer Clean | `pages/home/04_planning/visual-designs/homepage-full-visual-pc-clean-v0.7.png` | 1440×5683 | `8C3721309F9BF1A409E53B22AC7A53E0135D7D4347E33B911712763F66AB9E9A` | APPROVED_BASELINE |
| 390px Mobile Buyer Clean | `pages/home/04_planning/visual-designs/homepage-full-visual-mobile-clean-v0.6.1.png` | 390×8884 | `37C61C8C10B6B8F81EE36CA1B0D4AB6B3C751903583436E112D47CC67B11F9D5` | APPROVED_BASELINE |
| Mobile Menu Open | `pages/home/04_planning/visual-designs/homepage-mobile-menu-open-v0.6.png` | 390×844 | `FB0C56744BAE0B524E3D0B6F28B3FF56B617B2C2D9DB21554ADADF4BC1A0ABC6` | APPROVED_INTERACTION_STATE |
| Global Chrome Desktop states | `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_DESKTOP_STATES_V0.2.png` | 1440×1380 | `1FAE58F723D43BF804A81A11BA8EDF4FB79142F5236FB5185DEEA384FD284FC2` | APPROVED_SHARED_BASELINE |
| Global Chrome Mobile states | `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_MOBILE_STATES_V0.2.png` | 390×1690 | `4F573E7CAF7ACB587E1EE76797F9C6C32817A0BE10CD4B1205D77D1B809CF724` | APPROVED_SHARED_BASELINE |

## 3. Approved visual dependencies and limits

| Dependency | File | Dimensions | SHA-256 | Limit |
|---|---|---:|---|---|
| Desktop Hero material visual | `pages/home/04_planning/visual-designs/assets/homepage-hero-tio2-material-v0.6.png` | 1122×1402 | `7308472E4E633584FE4D7761AFD7ED9EA4EA4C622576E2D7736C105F13CF50A5` | Atmosphere-only visual; not company, factory, laboratory, warehouse, shipment, origin or manufacturing evidence |
| Current Logo PNG | `brand/visual/ChatGPT Image 2026年8月29日 09_37_10 (1).png` | Current visual-direction asset | See shared Chrome source record | Not a production SVG and not proof of final trademark/asset clearance |

## 4. Interaction-state boundary

- Mobile menu closed state is visible in the approved 390px Buyer Clean visual.
- Mobile menu open state is approved in `homepage-mobile-menu-open-v0.6.png` and retains the complete order: Home, Markets, Products, Applications, Documents, Resources, About, Request a Quote.
- The approved Mobile Products default state shows four collapsed groups with 6/5/2/1 counts and Expand labels.
- The historical `homepage-mobile-product-expanded-v0.3.png` is not promoted into this current Gate 5 baseline because it predates the V0.7 copy/grade terminology synchronisation. Gate 6 must decide whether a new expanded-state visual is required before handoff.
- Static visual states do not prove implemented interaction, focus order, keyboard behaviour, links or form submission.

## 5. Superseded or historical assets

- Desktop V0.1–V0.6.1 and Mobile V0.1–V0.6 remain preserved for traceability.
- Home V0.5 remains the historical fixed-RFQ shell baseline but is superseded for current Home body/copy review by Desktop V0.7 and Mobile V0.6.1.
- No historical file is deleted or overwritten by this manifest.

## 6. Approval boundary

This manifest records user approval of Gate 5 visuals. It does not:

- approve Gate 6;
- approve SEO metadata or Schema;
- verify origin, manufacture, COO, traceability, compliance, delivery, stock or export-performance claims;
- certify CTA routes or form behaviour;
- approve provisional child-page URLs;
- authorise Gate 7, development, code, WordPress, Next.js, CMS, testing, deployment, DNS or publication.
