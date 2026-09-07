# TiO2 Malaysia Global Header / Footer Specification V0.4

## 1. Document control

| Field | Value |
|---|---|
| Document ID | `GLOBAL-CHROME-004` |
| Version | `V0.4` |
| Date | 2026-08-31 |
| Review ID | `GHC-CURRENT-TEXT-REMOVAL-01` |
| Current status | `USER_DECISION_RECORDED / DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| User decision | Remove the buyer-visible `CURRENT` text from Global Header and Mobile Menu current-page states |
| Inherited baseline | `GLOBAL_HEADER_FOOTER_SPEC_V0.3.md`; all contracts remain inherited except the current-page indicator rules replaced below |
| Production Logo authority | `GLOBAL_HEADER_FOOTER_LOGO_ASSET_ADDENDUM_V1.0.md` and `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` |
| Development boundary | Specification and impact registration only; no code, implementation, deployment or publication |

V0.4 is a controlled current-page-state revision. It does not reopen or modify the approved Logo, navigation, fixed RFQ, Footer, responsive geometry or page-body contracts.

## 2. Authoritative current-page state

### 2.1 Desktop Header

The current primary navigation item must use:

- Bold type weight; and
- a 3px Malaysia Teal underline aligned to the navigation item.

Buyer-visible `CURRENT` text, badges, superscripts, pills or equivalent labels are prohibited.

The implementation must apply `aria-current="page"` to the current navigation link. `aria-current` is semantic markup and must not create a visible text label.

### 2.2 Mobile Menu

The current primary navigation item must use:

- Bold type weight; and
- a 4px Malaysia Teal left marker aligned to the current menu row.

Buyer-visible `CURRENT` text, badges, suffixes or equivalent labels are prohibited.

The implementation must apply `aria-current="page"` to the current menu link. The left marker, weight and semantic attribute must remain intact at 200% zoom and in keyboard navigation.

### 2.3 Footer

The Footer does not display a current-page marker and is unchanged by V0.4.

## 3. Interaction-state separation

- Current page, hover and focus must remain distinguishable.
- Current page is represented by Bold + structural Teal marker as defined above.
- Keyboard focus retains the approved visible focus outline and must not be replaced by the current-page underline or marker.
- Hover may use the approved colour or underline transition, but it must not remove the persistent current-page structure.
- Disabled, hidden or text-only current states are not approved.

## 4. Frozen Global Chrome contracts

The following remain unchanged:

| Contract | Frozen value |
|---|---|
| Desktop navigation | `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote` |
| Desktop Header geometry | 84px |
| Mobile Header geometry | 64px |
| Mobile Header order | `Logo | RFQ | Menu` |
| Mobile Menu order | Same eight-item order as Desktop; `Request a Quote` remains the terminal action |
| Logo | Production SVG bindings in Production Manifest V1.0 |
| RFQ | Permanently visible in Desktop Header, Mobile Header, Mobile Menu and Footer |
| Footer | Deep Navy approved structure and wording; no change from the current approved contract |
| Page body | No module, copy, SEO/GEO, Schema, fact, route, CTA or responsive-content change |

## 5. Current-page mapping

| Page / family | Desktop and Mobile Menu current navigation item |
|---|---|
| Home | Home |
| Markets Hub and Market pages | Markets |
| Products Hub, Process pages and Grade pages | Products |
| Applications Hub and Application pages | Applications |
| Documents Hub and document-request information pages | Documents |
| Resources Hub and Resource pages | Resources |
| About / Contact | About |
| RFQ / Conversion pages | No false parent highlight unless a later approved navigation mapping explicitly defines one |

The visible marker must occur once at most. A route that cannot resolve an approved current item must not guess or mark multiple items.

## 6. Historical visual evidence boundary

Existing PNGs containing buyer-visible `CURRENT` remain immutable historical static evidence of prior Global Chrome approvals. They are no longer authoritative for the current-page label treatment after V0.4 passes project-control review.

This applies at minimum to:

- `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_DESKTOP_STATES_V0.2.png`;
- `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_MOBILE_STATES_V0.2.png`;
- `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_DESKTOP_STATES_V0.3.png`;
- `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_MOBILE_STATES_V0.3.png`; and
- Home, Product-detail Template, PRODUCT-000, MARKET-000, RES-000 and APP-000 full-page/state assets registered by the fixed-RFQ cross-page review.

The historical PNGs must not be deleted, overwritten or edited. Future state boards and implementation acceptance must follow V0.4 and must not reproduce the visible label.

## 7. Accessibility and acceptance

The following are blocking acceptance checks for future visual evidence and implementation:

1. Buyer-visible exact word `CURRENT` in Desktop Header or Mobile Menu: 0.
2. Desktop current item: one Bold item with one 3px Teal underline.
3. Mobile Menu current item: one Bold row with one 4px Teal left marker.
4. Current link semantic attribute: exactly one applicable `aria-current="page"`.
5. Keyboard focus remains independently visible.
6. Navigation order remains unchanged.
7. Desktop / Mobile Header heights remain 84px / 64px.
8. Logo and fixed RFQ remain present.
9. Footer and page body remain unchanged.
10. No horizontal overflow is introduced at 390px or 200% zoom.

## 8. Stage gate

`GHC-CURRENT-TEXT-REMOVAL-01 = DRAFT_FOR_PROJECT_CONTROL_REVIEW`

The user's decision is recorded, but this specification must not be marked project-control PASS, `APPROVED`, `CLOSED`, implemented or published until project control completes the directed review.

