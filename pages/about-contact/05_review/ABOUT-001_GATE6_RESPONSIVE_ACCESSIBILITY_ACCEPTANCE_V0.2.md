# ABOUT-001 Gate 6 Responsive / Accessibility Acceptance V0.2

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / `/about/` |
| Review ID | `ABOUT-001-G6-PCR-02` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |

## 1. Current Visual Evidence

| Surface | Current asset | Review interpretation |
|---|---|---|
| Desktop | 1440×3113 V0.3 | Exact-size Buyer Clean proof based on Gate 5 with only explicit user edits |
| Tablet | 768×1660 V0.3 | Exact-size preservation proof; no unrequested body redesign |
| Mobile | 390×4036 V0.3 | Continuous single-file normalization of the approved mobile presentation; no new body content added |

The user directed preservation of the original visual. Therefore these files demonstrate exact viewport assets and minimal edits, while runtime reflow, semantic order and content completeness remain implementation acceptance requirements rather than permission to redesign the approved page.

## 2. Runtime Responsive Acceptance

- Desktop consumes 84px shared Header; Mobile consumes 64px shared Header.
- 768, 390, 375 and 430px must have no horizontal scroll, fixed-height crop or anomalous blank region.
- Long company names and long fact values wrap without overlap or unreadable shrinkage.
- CTA targets remain at least 44×44 logical px at mobile widths.
- Hidden responsive navigation is absent from the active accessibility tree and cannot receive focus.
- Header/Footer remain shared components; current page uses underline/weight or left marker, never visible `CURRENT`.

## 3. Accessibility Acceptance

1. One H1 and ordered H2/H3 semantics.
2. Labelled breadcrumb navigation with current-page semantics.
3. Inline links distinguishable beyond color alone.
4. Visible focus for every link/button and logical keyboard order.
5. Mobile Menu focus trap, Escape close and focus return.
6. Reduced motion preserves content and interaction.
7. Decorative map lines/icons are hidden from assistive technology.
8. Flags supplement text labels; they do not replace market names.
9. Retained images use neutral ALT and never claim IKHLAS factory, inventory, warehouse or actual shipment.

## 4. Content and Evidence States

- `Operating Company` appears instead of `Legal Entity`.
- The user-identified public source block is absent.
- Restricted SSM/legal, ISO/QMS and batch-traceability fields remain absent.
- Omitted evidence fields remove their row/divider/spacing and Schema atomically.
- Shared RFQ remains present in all states; route failure is a release blocker.

Static PNGs are design evidence only and do not prove DOM, route, focus, target size or accessibility-tree behavior.
