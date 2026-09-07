# Legal / Privacy Gate 7 Global Chrome / Responsive / Accessibility Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Package | `LEGAL-PRIVACY-G7-HANDOFF-01` |
| Review | `LEGAL-PRIVACY-G7-PCR-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Required widths | 1440 Desktop, 768 Tablet, 390 Mobile logical |
| Additional | Mobile Menu Open, keyboard, screen reader and 200% zoom |

## 1. Shared ownership

Legal/Privacy pages consume the current Global Chrome owner implementation. They must not clone, locally redefine or seed separate Header, navigation, Logo, Mobile Menu, Footer, RFQ action or legal-utility arrays.

Page input is `header_current_key=null`. No Legal page creates a false Home/other current state. The active viewport exposes only one accessible navigation surface.

## 2. Header and Mobile Menu

- Desktop uses the current shared Header and visible Home link.
- Tablet/Mobile header order is `Logo | RFQ | Menu`.
- Mobile Menu contains exactly the frozen eight primary destinations in this order: Home, Markets, Products, Applications, Documents, Resources, About, Request a Quote.
- Request a Quote remains the terminal action and RFQ remains visible in the Mobile Header.
- No extra Privacy Policy, Cookie Policy, Cookie Settings or Terms utility block appears inside Mobile Menu.
- Legal utilities remain in the shared Footer.
- No visible `CURRENT` label appears; structural/current semantics follow the shared owner and are absent for Legal routes.

The current assembly evidence is `SHARED-GLOBAL-CHROME_G5_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V0.2.png`, SHA-256 `7E80645F5D63A9AFF13E8AAE32491BCB363B45717A88DB85A8917AA39D4BEC27`.

## 3. Footer

The shared Footer retains its approved non-Legal groups and exact Legal utility row:

- `Privacy Policy` → `/privacy-policy/`;
- `Dasar Privasi (BM)` → `/ms/privacy-policy/`;
- `Cookie Policy` → `/cookie-policy/`;
- `Cookie Settings` → shared `OPEN_COOKIE_SETTINGS` control, not an anchor to a page.

Copyright is exact `© 2026 TiO2 Malaysia.` There is no Terms link. Footer Cookie Settings is a semantic button, keyboard operable, and returns focus after the shared interface closes.

## 4. Responsive page assembly

| Surface | Required behavior |
|---|---|
| 1440 Desktop | Complete Header/Hero/body/Footer; Privacy uses left TOC plus right reading column; Cookie inventory is a structured table |
| 768 Tablet | Shared compact Header; single reading column; compact TOC summary; full copy retained; technical keys wrap without clipping |
| 390 Mobile | 390 CSS-pixel logical layout; single column; full H1/body/actions; Cookie inventory reflows to labelled cards; Footer stacks/wraps |
| Mobile Menu Open | exact eight primary destinations, no Legal utility block and no false current-page marker |
| 200% zoom | content reflows without two-dimensional scrolling except genuinely unavoidable data presentation; no clipped control or text |

The 780px Mobile PNG files represent 390 logical @2x. They are not a 780px CSS breakpoint.

## 5. Privacy TOC behavior

- At 1440, the left TOC is in normal document flow and scrolls with the page; it is not sticky or fixed.
- TOC links target stable section IDs and do not place focused headings behind the shared Header.
- At 768/390, the compact summary remains in page flow and all ten sections remain present in source/visual order.
- Current-section tracking is not required and must not be invented from the static visual.

## 6. Cookie inventory reflow

- Desktop/Tablet table has semantic column headers and readable technical-key wrapping.
- At 390, each inventory row becomes one labelled card while preserving Name, Provider, Type, Purpose, Duration and Category relationships.
- Do not use horizontal page scroll to hide overflow.
- Empty/unverified rows do not render as placeholders.
- Conditional Google rows appear only in `verified_google_analytics_active` and must match production capture.

## 7. Actions, links and focus

- All controls use native or equivalent accessible semantics; links navigate and buttons perform actions.
- Applicable targets are at least 44×44 CSS px.
- Visible focus meets approved Accessible Functional Teal/Navy contrast and is not color-only.
- Focus order follows DOM/reading order and never enters inactive Desktop/Mobile navigation simultaneously.
- Cookie Settings opening, close/Escape, Save, Accept and Necessary-only focus behavior matches the Consent contract.
- `mailto:info@tio2malaysia.com`, language links and policy links expose self-identifying accessible names.
- No content or action is available only on hover.

## 8. Typography, contrast and reflow

- Long-form body maintains the approved 15–16px visual target and approximately 1.55–1.65 line height.
- Functional filled CTA uses `#008078` with white text; `#00A99D` remains decorative/deep-surface emphasis as approved.
- BM text expansion may increase height; do not reduce type below the readable system target or truncate text.
- Long company/provider names, URLs, technical keys and translated headings wrap without overlap.
- Reduced-motion preference is respected; no motion is required to understand state.

## 9. Semantic acceptance

- Exactly one H1 per page; body headings preserve approved hierarchy.
- Breadcrumb is labelled navigation and matches visible/Schema order.
- TOC is labelled in-page navigation/list.
- Tables expose headers; mobile cards retain programmatic labels.
- Consent region/dialog has accessible name, state descriptions and non-duplicative announcements.
- Language changes are expressed by page/document language and self-identifying link labels.
- Internal annotations from Consent state boards do not render.

## 10. Visual evidence binding

The twelve PNGs and hashes listed in `LEGAL_PRIVACY_GATE7_HANDOFF_PACKAGE_V0.1.md` are the visual acceptance set. Page visual sources are Gate 5 V0.2; Consent state proofs are carried forward unchanged from Gate 5 V0.1. SVGs remain editable/inspection evidence, but copy must come from the hashed copy authorities.

## 11. Boundary

This contract specifies observable acceptance. It does not prescribe component filenames or authorize shared-owner code changes before Gate 8.
