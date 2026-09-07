# Global Footer Legal Utility Addendum V1.0

## 0. Control

| Field | Value |
|---|---|
| Date | 2026-09-02 |
| Status | `PROJECT_CONTROL_REVIEW_PASS / USER_APPROVED / CLOSED` |
| Parent | `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` |
| Scope | Footer legal utility row only |
| No effect | Header navigation, geometry, Logo, fixed RFQ and page body remain unchanged |

## 1. Approved Footer structure

The legal/utility row at the bottom of the shared Footer is:

`© 2026 TiO2 Malaysia. | Privacy Policy | Dasar Privasi (BM) | Cookie Policy | Cookie Settings`

| Label | Target / behaviour |
|---|---|
| Privacy Policy | Link to `/privacy-policy/` |
| Dasar Privasi (BM) | Link to `/ms/privacy-policy/` |
| Cookie Policy | Link to `/cookie-policy/` |
| Cookie Settings | Button that reopens the shared Consent Manager; no route, Canonical or sitemap record |

There is no `Terms of Use` link. `/terms-of-use/` and `/legal/privacy-policy/` are not approved routes.

## 2. Responsive and accessibility contract

- Desktop may render the row inline with clear separators.
- Tablet and Mobile may wrap or stack the controls without changing their order.
- All three page links remain directly discoverable and keyboard accessible.
- `Cookie Settings` uses a semantic button, is keyboard operable, has a visible focus state and returns focus correctly when the preference interface closes.
- Touch targets and spacing must satisfy the project's current accessible Global Chrome contract.
- Legal pages have no Header primary-navigation current item and no Footer current marker.

## 3. SEO and release contract

- The three legal URLs are eligible for sitemap inclusion and self-Canonical treatment under their page Briefs.
- English and BM Privacy pages expose reciprocal `en` / `ms-MY` hreflang; `x-default` points to English.
- `Cookie Settings` is not crawlable or indexable because it is a function, not a page.
- A missing link, incorrect route, nonfunctional preference reopen action or stale Terms link blocks complete-site release.

## 4. Authority boundary

This addendum records the user-approved Footer legal utility contract. The user confirmed on 2026-09-02 that the existing year must be retained. It does not authorise changes in `D:\16Wordpress_nextjs`, development, deployment, publication or indexing.
