# ABOUT-001 Gate 7 Responsive / Accessibility Acceptance V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / `/about/` |
| Review ID | `ABOUT-001-G7-PCR-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |

## 1. Visual References

| Breakpoint proof | Frozen reference |
|---|---|
| Desktop | 1440×3113 V0.3, SHA-256 `2EE18B00936CCB27C7608B2D2F02D893B3FD405F995EC59437314BB8F255E463` |
| Tablet | 768×1660 V0.3, SHA-256 `0499575828FDEDA0981B74C26F2FF5EB7520329D3997C2B77BA14836D652D35A` |
| Mobile | 390×4036 V0.3, SHA-256 `3569506CD704FC7AEDADC4956FDC455F8763C8637D3C46DD2F23B4D9D6C45856` |

PNGs establish hierarchy, density, imagery and visual relationships. Runtime acceptance uses semantic content and reflow requirements below rather than image scaling.

## 2. Responsive Requirements

| Range | Required behavior |
|---|---|
| Desktop ≥1200px | Shared 84px Header; 1440 reference proportions; content-driven height; multi-column grids; no clipping |
| Tablet 768–1199px | Reflow long Hero, facts and cards without horizontal scroll; two columns only when labels and long company name remain readable |
| Mobile 375/390/430px | Shared 64px Header; one logical reading column; stacked body CTAs; no fixed-height crop, horizontal scroll or abnormal empty space |

- Long H1 and `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.` wrap naturally.
- Taiping address and all long card titles remain readable without ellipsis.
- Content order is Hero → Who We Are → Why Malaysia → What We Do → Markets → Applications → How We Work → Documentation → Company Facts → Final CTA.
- Mobile source is the semantic Source Map, not a literal crop/stitch algorithm from the proof PNG.
- 200% zoom does not cause hidden navigation focus, overlap or content loss.

## 3. Shared Header/Footer

- Consume Global Chrome V0.5 and Production SVG Manifest V1.0.
- Desktop current About: bold/weight plus 3px Teal underline; no buyer-visible `CURRENT`.
- Mobile current About: bold plus 4px Teal left marker; no buyer-visible `CURRENT`.
- Mobile order: Logo | RFQ | Menu; Menu order matches approved shared navigation.
- Request a Quote is permanently visible and targets `/request-a-quote/`.
- Footer has no current marker and no ABOUT-local variant.

## 4. Semantics and Keyboard

1. Exactly one H1; module titles use ordered H2/H3 semantics.
2. Breadcrumb is a labelled navigation landmark with Home link and current About item.
3. Inline links remain underlined or otherwise distinguishable beyond color.
4. All actions show visible `:focus-visible`; focus order follows the visual narrative.
5. Mobile Menu supports keyboard opening, focus containment, Escape close and focus return.
6. Hidden responsive navigation is excluded from the accessibility tree and has zero focusable descendants.
7. Cards are not nested interactive controls; use one clear anchor surface or separately valid links.
8. Reduced-motion mode preserves content and does not suppress state feedback.

## 5. Target Size and Contrast

- Mobile interactive targets are at least 44×44 logical px.
- Text and controls meet WCAG AA contrast for their size.
- Focus outline remains visible on White, Soft Background, Teal and Deep Navy surfaces.
- Body copy, qualifiers and long fact values do not fall below the approved readable type floor.

## 6. Image and Icon Accessibility

- Informative assets require rights-cleared neutral ALT.
- Decorative map lines, abstract background shapes and decorative icons are hidden from assistive technology.
- Flags supplement market text and never replace it.
- ALT cannot claim IKHLAS factory, warehouse, stock, shipment or customer evidence unless the exact asset identity is separately approved.
- Icon-only visual cards retain visible text labels; icons do not imply certification.

## 7. Evidence States

| State | Public behavior |
|---|---|
| Sufficient | Render all current user-approved facts and matching Schema |
| Partial | Remove only restricted fact rows/description fragments/Schema properties; collapse spacing |
| Restricted | Remove manufacturer/origin/location/scale/export facts as directed by the evidence owner; retain safe About identity, shared navigation and allowed CTAs |

The shared fixed RFQ remains visible in every state. A false RFQ route is a release blocker, not permission to hide or replace it.

## 8. Gate 9 Proof

Gate 9 read-only QA must inspect 1440, 768, 375, 390 and 430px; keyboard-only navigation; accessibility tree; 200% zoom; touch target boxes; heading order; focus behavior; image ALT; horizontal overflow; and visual comparison to the frozen proofs.
