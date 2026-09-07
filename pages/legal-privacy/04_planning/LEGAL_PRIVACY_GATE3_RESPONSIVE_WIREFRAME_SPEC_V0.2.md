# Legal / Privacy Gate 3 Responsive Wireframe Specification V0.2

## 1. Control

| Field | Value |
|---|---|
| Document ID | `LEGAL-PRIVACY-G3-WIREFRAME-02` |
| Page IDs | `LEGAL-PRIV-EN`; `LEGAL-PRIV-MS`; `LEGAL-COOKIE-EN` |
| Shared control | `SHARED-CONSENT` / Cookie Settings |
| Date | 2026-09-02 |
| Gate 2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / USER_APPROVED / CLOSED` |
| Targeted Cookie revision | `LEGAL-COOKIE-G3-BUYER-CLEAN-01 = USER_APPROVED / CLOSED`; V0.2 current authority |
| Gate 3 authorization | `USER_AUTHORIZED / CLOSED` |
| Status | `USER_APPROVED / GATE_3_CLOSED` |
| Gate 4 | `USER_AUTHORIZED / IN_PROGRESS` — CTA contrast and Consent equal-prominence Option A decisions closed |
| Gate 5–10 | `NOT_AUTHORIZED` |

## 2. Current asset set

All page images are complete Buyer Clean pages using real approved copy. Mobile PNGs are physical 2× exports of a 390px logical viewport.

| Surface | Desktop 1440 | Tablet 768 | Mobile 390 logical @2× |
|---|---|---|---|
| Privacy Policy EN | `LEGAL-PRIV-EN_G3_DESKTOP_1440_V0.1.png` | `LEGAL-PRIV-EN_G3_TABLET_768_V0.1.png` | `LEGAL-PRIV-EN_G3_MOBILE_390_LOGICAL_AT2X_V0.1.png` |
| Dasar Privasi BM | `LEGAL-PRIV-MS_G3_DESKTOP_1440_V0.1.png` | `LEGAL-PRIV-MS_G3_TABLET_768_V0.1.png` | `LEGAL-PRIV-MS_G3_MOBILE_390_LOGICAL_AT2X_V0.1.png` |
| Cookie Policy EN | `LEGAL-COOKIE-EN_G3_DESKTOP_1440_V0.1.png` | `LEGAL-COOKIE-EN_G3_TABLET_768_V0.1.png` | `LEGAL-COOKIE-EN_G3_MOBILE_390_LOGICAL_AT2X_V0.1.png` |

Shared evidence:

- `SHARED-CONSENT_G3_STATE_BOARD_1440_V0.1.png` — internal structural proof containing buyer-visible UI copy plus signal/accessibility contract; it is not a public page.
- `SHARED-GLOBAL-CHROME_G3_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V0.2.png` — current shared Mobile Menu open proof.
- `SHARED-GLOBAL-CHROME_G3_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V0.1.png` — historical draft only; not current authority.

Asset directory: `pages/legal-privacy/04_planning/wireframes/gate3_v0.1/assets/`.

## 3. Shared page structure

1. Shared Header.
2. Breadcrumb.
3. Policy Hero with H1, last-updated date, plain-language scope and two relevant actions.
4. Desktop/Tablet in-page table of contents; compact Mobile section count.
5. Approved policy sections in the exact Gate 2 order.
6. Closing action row.
7. Shared Footer legal utility row: `© 2026 TiO2 Malaysia. | Privacy Policy | Dasar Privasi (BM) | Cookie Policy | Cookie Settings`.

No Terms link or Terms page appears. Header current item is none for all three legal routes.

## 4. Desktop — 1440px

- Full shared navigation and RFQ action remain visible.
- Hero uses a contained reading panel and does not compete with commercial pages.
- On `LEGAL-PRIV-EN` and `LEGAL-PRIV-MS`, long-form policy content uses a narrow reading column with a table-of-contents rail in normal document flow. The left rail scrolls away together with the right-hand content and must not use `position: sticky` or `position: fixed`.
- H2 sections are separated by rules and natural content spacing; no decorative image or invented trust claim is used.
- The Cookie inventory remains a compact auditable table.
- Footer consumes the approved shared structure and legal links.

## 5. Tablet — 768px

- Header collapses to the approved compact navigation contract.
- Hero and policy content retain full copy without truncation.
- Table of contents becomes a full-width compact block before the main content.
- Cookie inventory remains within the viewport and may use simplified row presentation.
- Actions wrap without unequal consent treatment or horizontal overflow.

## 6. Mobile — 390px logical

- Header exposes Logo, RFQ and Menu; Mobile Menu open shows all eight navigation destinations.
- Hero actions stack to full width with minimum 44px targets.
- The table of contents becomes a compact section-count disclosure; the document remains readable in normal order.
- All H1/H2/body copy wraps naturally; no section is removed only for Mobile.
- Cookie inventory converts to a labelled single-column row and does not require horizontal scrolling.
- Footer groups stack, followed by the five-item legal utility set.

## 7. Consent / Cookie Settings states

| Release state | Buyer-visible behaviour |
|---|---|
| No optional Analytics active | Footer Cookie Settings opens an informational panel with `Close` and `Read Cookie Policy`; no first-visit consent request is shown |
| Verified Analytics active — first layer | Equal-access `Accept analytics` and `Necessary only` choices plus Cookie Policy link |
| Reopened settings | Existing choice is preserved until saved; Save, accept, necessary-only and close controls remain available |
| Withdrawal | `analytics_storage` returns to denied immediately; advertising-related states remain denied |
| Runtime/storage failure | Page and RFQ remain usable; optional states remain denied; persistence is not falsely claimed |

The state board is implementation-contract evidence, not a public standalone page. Only the state matching verified release technology may render.

## 8. Advanced Consent signal contract

| State | analytics_storage | ad_storage | ad_user_data | ad_personalization |
|---|---|---|---|---|
| Before choice | denied | denied | denied | denied |
| Necessary only | denied | denied | denied | denied |
| Accept analytics | granted | denied | denied | denied |
| Withdrawal | denied | denied | denied | denied |

This matrix describes the approved future-capable direction. It does not claim Google measurement is active now.

## 9. Accessibility and interaction

- One H1 per page; heading order follows Gate 2 copy.
- Body copy remains real and complete at all three viewports.
- Minimum interactive target is 44px; keyboard focus, Escape/close and focus return are required for Menu and Cookie Settings.
- Consent choices use comparable prominence and effort; optional consent is not preselected.
- Reading/DOM order follows the visible order. Tables have semantic headers in implementation and labelled-card equivalents on Mobile.
- No Buyer Clean page contains `Before release`, clean-browser QA instructions, review status, evidence gap labels or other internal governance wording.

## 10. Open release dependencies

- BM text still requires human language-equivalence review before publication.
- Production Cookie/Local Storage/network inventory must be captured during Gate 8/9 and matched to the public inventory.
- Web3Forms Access Key and receiver address remain Gate 8/9 configuration evidence.
- These dependencies do not change Gate 3 structure; failure to close them blocks release.

## 11. Gate checkpoint

The user is asked to review reading density, module order, responsive stacking, Cookie inventory presentation, Footer placement, Mobile Menu and Consent states.

`GATE3_RESPONSIVE_WIREFRAME_CONFIRMED = USER_APPROVED / CLOSED / 2026-09-02`.

## 12. V0.2 targeted interaction revision

- User direction: on both Privacy Policy desktop pages, the left table-of-contents rail scrolls with the page.
- Scope: `LEGAL-PRIV-EN` and `LEGAL-PRIV-MS` Desktop only.
- Cookie Policy, Tablet, Mobile, copy, module order, assets, Footer and Consent semantics are unchanged.
- V0.1 is superseded as the current interaction specification and retained for history.
- User approved Gate 3 V0.2 and authorised Gate 4 on 2026-09-02.

Gate 3 approval will not authorize Gate 4, development, deployment, publication or indexing.
