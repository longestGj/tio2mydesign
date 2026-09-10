# HOME-001 Applications-Aligned Visual Design V1.1

## 0. Document control

| Field | Value |
|---|---|
| Page ID / route | `HOME-001` / `/` |
| Workset ID | `HOME-001-G4-APP-ALIGN-V1-20260911` |
| Bundle ID | `HOME-001-G4-APP-ALIGN-BUNDLE-V1.1` |
| Parent visual contract | `pages/home/04_planning/17_homepage_applications_aligned_visual_design_v1.0.md` |
| Finding | `HOME-G5-VR-01` |
| Change type | Targeted shared-Global-Chrome conformance repair |
| Status | `RESOLVED_IN_DRAFT_PENDING_GATE5_TARGETED_RECHECK` |
| Gate boundary | Gate 4 author repair only; no independent-review conclusion, Gate close, Gate 6/8 authorization, D16 edit or release |

V1.1 inherits every V1.0 Home body, content, structure, link, SEO/GEO/Schema and responsive-content decision. It changes only the static rendering of the shared Header, Mobile Menu and Footer so that the planning evidence faithfully represents the current shared Global Chrome. V1.0 remains immutable review history.

## 1. Targeted authority set

| Role | Authority |
|---|---|
| Required finding | `pages/home/05_review/HOME-001_APPLICATIONS_ALIGNED_GATE5_INDEPENDENT_VISUAL_REVIEW_V1.0.md` |
| Shared Header/Menu/Footer | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` |
| Footer legal utility row | `docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md` |
| Production Logo | `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` |
| Shared implementation inspected read-only | `D:/16Wordpress_nextjs/components/sites/tio2-my/malaysia-global-chrome.tsx`, `malaysia-global-chrome-client.tsx`, `malaysia-global-chrome.module.css` |

The D16 files above are read-only reference inputs. This source does not create a private production component and does not modify the shared contract; it is a static Gate 4 rendering of that authority.

## 2. Frozen repair contract

- Desktop Header is 84px with the approved production Logo, seven navigation links, one fixed `Request a Quote` action and the Home current state shown only by bold text plus a 3px Malaysia Teal underline.
- At 1024px, 768px, 390px and 320px the shared Mobile Header is 64px in `Logo | RFQ | Menu` order. `RFQ` is the compact label, does not wrap, and each actionable control is at least 44px.
- The 390px open state has the shared white topbar and Deep Navy navigation surface, eight-item order `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`, a 4px Teal Home marker, white links, Teal terminal RFQ and modal background isolation. Buyer-visible `CURRENT` remains zero.
- Footer geometry mirrors the shared component: Deep Navy surface, four-column desktop grid, responsive two/one-column collapse, navigation targets at least 44px and Footer RFQ at least 48px.
- Footer legal utilities are exactly `Privacy Policy`, `Dasar Privasi (BM)`, `Cookie Policy`, `Cookie Settings` in that order. Their targets are `/privacy-policy/`, `/ms/privacy-policy/`, `/cookie-policy/`, and a semantic route-less button respectively.
- The exact UTF-8 `<main>...</main>` segment is preserved from V1.0; its SHA-256 is `A9CC17BA5C40D943949D56820F336CFFB384A61900B11791A31549E0866DC138` in both sources.

## 3. V1.1 evidence bundle

| Evidence | Identity |
|---|---|
| Static source | `pages/home/04_planning/visual-designs/home-applications-aligned-v1.1/homepage-applications-aligned-preview-v1.1.html` |
| Freeze record | `pages/home/04_planning/visual-designs/home-applications-aligned-v1.1/freeze-record.json` |
| Author repair record | `pages/home/05_review/HOME-001_APPLICATIONS_ALIGNED_GATE4_TARGETED_REPAIR_V1.1.md` |
| Capture tool | `99_workspace/HOME-001_applications_aligned_v1_1/capture_home_visual_bundle_v1_1.cjs` |
| Runtime verifier | `99_workspace/HOME-001_applications_aligned_v1_1/inspect_home_visual_runtime_v1_1.cjs` |
| Bundle verifier | `99_workspace/HOME-001_applications_aligned_v1_1/verify_home_visual_bundle_v1_1.ps1` |

All five full-page states, the 390px Mobile Menu and the 390px fully expanded Products state are newly captured as V1.1. No V1.0 asset is overwritten or reused as current evidence.

## 4. Author disposition

The author may submit this targeted repair only after all seven V1.1 images are opened at original detail, runtime and frozen-bundle verification both exit 0, V1.0 immutability is confirmed, and no new body regression exists.

```text
HOME-G5-VR-01=RESOLVED_IN_DRAFT_PENDING_GATE5_TARGETED_RECHECK
lifecycle=DRAFT_FOR_PROJECT_CONTROL_REVIEW
gate_6=NOT_STARTED
gate_8=NOT_AUTHORIZED
```

Only the independent Gate 5 reviewer may recheck the Finding. This document does not claim approval or closure.
