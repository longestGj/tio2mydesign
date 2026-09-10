# HOME-001 Applications-Aligned Visual Design V1.0

## 0. Document control

| Field | Value |
|---|---|
| Page ID | `HOME-001` |
| Route | `/` |
| Workset ID | `HOME-001-G4-APP-ALIGN-V1-20260911` |
| Bundle ID | `HOME-001-G4-APP-ALIGN-BUNDLE-V1.0` |
| Change type | Presentation-only visual revision |
| Author stage | Gate 4 complete visual authoring |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Approved direction | `docs/superpowers/specs/2026-09-11-home-applications-visual-unification-design.md` |
| Rollback implementation | `pages/home/07_qa/HOME-001_GATE9_CURRENT_IMPLEMENTATION_MANIFEST_V0.2.md` |
| Stop boundary | Freeze and submit the Gate 4 author bundle only; no independent review, Gate close, D16 edit, release or publication |

This contract applies the user-approved Applications visual language to Home without changing Home's content, information architecture, link targets, behavior, SEO/GEO/Schema, product relationships, shared Chrome or release status. The rollback implementation remains current until a later independently reviewed and authorized implementation replaces it.

## 1. Pinned input index

The author read these sources directly. SHA-256 values identify the inputs used for this workset; D16 paths were inspected read-only and are not modified by this Gate 4 task.

| Role | Source | SHA-256 |
|---|---|---|
| User-approved direction | `docs/superpowers/specs/2026-09-11-home-applications-visual-unification-design.md` | `8667A795510E996EC590689BFA15055FADDC4B5D370ADED2CB9F572296D19F36` |
| Home complete Brief | `docs/page-briefs/HOME-001_HOME_BRIEF_V0.1.md` | `690144A787A7B301360B1B31F90A184E2B8248557172E921794CB9BCF90209B0` |
| Home Playbook | `docs/page-playbooks/HOME_PLAYBOOK_V0.1.md` | `ABA3A53908849BC9361918DF4B2C81E2463356BBA532B9424EA3BB90BCF0C80A` |
| Rollback/current implementation record | `pages/home/07_qa/HOME-001_GATE9_CURRENT_IMPLEMENTATION_MANIFEST_V0.2.md` | `C86009C47ACF8E8C0D588DBF4938F4D34FB4853156AED2D5F5CD1CD23F774E85` |
| Applications visual token source | `D:/16Wordpress_nextjs/components/sites/tio2-my/applications/malaysia-application-hub.module.css` | `A8C9BA94316FF0B4EB89FC4E464F673F21E91F15B3D8609AB4097A73D9A3D6C1` |
| Home visible content/data source | `D:/16Wordpress_nextjs/wordpress/plugins/tio2-site-model/config/tio2-my-homepage.json` | `C89CC1E7029B96C67C7183B4081E1526905A4F1875DA9A9F9F6B290E2CD8554C` |
| Existing Home renderer reference | `D:/16Wordpress_nextjs/components/sites/tio2-my/homepage/malaysia-homepage.tsx` | `912FF8C08B76B108252023B5F84CA3B65606CED46DA275451A5A32ACAC3DFB2F` |
| Frozen Inter variable-font dependency | `pages/home/04_planning/visual-designs/home-applications-aligned-v1.0/dependencies/Inter-Variable.ttf` | `29160A80FF49DDCAB2C97711247E08B1FAB27A484A329CE8B813D820DC559031` |
| Existing approved Home powder image | `pages/home/04_planning/visual-designs/assets/homepage-hero-tio2-material-v0.6.png` | recorded in `freeze-record.json` from the actual file |
| Shared Chrome contract | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | recorded in `freeze-record.json` from the actual file |
| Production Logo authority | `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` | recorded in `freeze-record.json` from the actual file |
| Brand visual standard | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md` | recorded in `freeze-record.json` from the actual file |
| Primary CTA accessibility override | `brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md` | recorded in `freeze-record.json` from the actual file |

The current D16 Home content JSON is used only as the exact visible-copy and link inventory for this static planning source. Its newer byte identity is recorded here rather than silently reusing the historical V0.2 implementation hash.

## 2. Shared workset

| Shared entry | Path / identity |
|---|---|
| `input_index` | This document, Section 1 |
| `design_source` | `pages/home/04_planning/visual-designs/home-applications-aligned-v1.0/homepage-applications-aligned-preview-v1.0.html` |
| `evidence_index` | `pages/home/04_planning/visual-designs/home-applications-aligned-v1.0/freeze-record.json` |
| Author self-check | `pages/home/05_review/HOME-001_APPLICATIONS_ALIGNED_GATE4_AUTHOR_SELF_CHECK_V1.0.md` |
| Deterministic verifier | `99_workspace/HOME-001_applications_aligned_v1/verify_home_visual_bundle.ps1` |
| Machine result | `99_workspace/HOME-001_applications_aligned_v1/verification_home_visual_bundle_v1.json` |

## 3. Frozen content and behavior

The following are byte- or meaning-frozen for this revision:

- every visible string and href in the pinned Home JSON;
- module order: `hero`, `start-here`, `markets`, `products`, `applications`, `company`, `documents`, `resources`, `page-rfq`;
- one H1 and all existing heading relationships;
- all 14 unique Grade IDs and group counts `6 / 5 / 2 / 1`;
- PRODUCT V0.3 relationships and all existing comparison, Specialty and Rubber boundaries;
- Hero, Header, Mobile Menu and Footer RFQ entry points;
- page-level RFQ shown at 768, 1024 and 1440, and absent at 320 and 390;
- `Start Here` immediately after Hero and present at all five widths, including Tablet;
- existing SEO/GEO, metadata, JSON-LD, CMS contract and `site_scope=tio2-my` behavior;
- shared Header/Footer, navigation order, production SVG Logo, 84px/64px geometry and invisible-but-semantic current-page state;
- no buyer-visible `CURRENT`, internal workflow status, evidence status, route readiness or placeholder messaging.

This revision may change only visual grouping, spacing, typography within approved ranges, color/surface application, card treatment, responsive arrangement and media sizing.

## 4. Visual rules applied in 4A

### 4.1 Core tokens

The body uses the exact Applications family tokens where the systems overlap:

```css
--navy:#062b5b;
--deep:#031b3a;
--teal:#007f77;
--bright:#00a99d;
--ink:#334155;
--muted:#64748b;
--soft:#f5f8fb;
--line:#d9e2ec;
--white:#fff;
--functional:#008078;
```

The centered content shell is `1200px`. The separate `--functional:#008078` pairing implements the current Primary CTA accessibility addendum on light surfaces without changing the approved Applications-family token identities.

### 4.2 Visual grammar

- White and Soft Background sections alternate without turning the page into full-width color bands.
- Primary content surfaces use 14px outer radii; cards use 12px radii, fine `--line` borders and low-opacity Deep Navy shadows.
- Section hierarchy is Teal rule/eyebrow, H2, intro and then cards.
- CTA hierarchy is filled functional-Teal primary, Navy outline secondary and underlined Teal text link.
- Deep Navy is limited to the shared Footer and the single page-level RFQ container.
- The Hero uses a rounded bordered shell, left-side copy and a bounded media card containing the existing powder image.
- Home retains its own global-entry hierarchy; Applications is a visual family reference, not a content template.

`VISUAL_DIRECTION_CHECKED` means the above rules were checked internally against the approved direction and representative longest content. It is not an approval or separate Gate.

## 5. Module-to-surface mapping

| Order | `data-module` | Approved visual treatment | Responsive composition |
|---:|---|---|---|
| 1 | `hero` | Rounded bordered Hero; copy left; bounded powder media card right | 2 columns at 768+; copy, actions, image stack at 390/320 |
| 2 | `start-here` | Three numbered rounded entry cards | 3 columns at 768+; one column at 390/320 |
| 3 | `markets` | Four consistent destination cards | 2×2 at 768+; one column at 390/320 |
| 4 | `products` | Four grouped cards with rounded Grade tags and separate process/action row | 4 columns at 1440; 2×2 at 1024/768; accessible disclosure cards at 390/320 |
| 5 | `applications` | Five Applications-family cards | 3+2 at 1440; 2+2+1 at 1024/768; one column at 390/320 |
| 6 | `company` | One light rounded container, copy plus three supporting items | Two columns at 768+; one column at 390/320 |
| 7 | `documents` | Two white cards inside a Soft Background section | Two columns at 768+; one column at 390/320 |
| 8 | `resources` | Five same-family cards: two topics followed by three answers | 2+3 at 1440; two columns at 1024/768; one column at 390/320 |
| 9 | `page-rfq` | One rounded Deep Navy callout | Visible at 768/1024/1440; not rendered at 320/390 |

## 6. Required formal evidence

| Asset | Logical viewport | State | Required visible conditions |
|---|---:|---|---|
| `home-001-applications-aligned-1440-v1.0.png` | 1440 | default full page | Header through Footer; page RFQ shown |
| `home-001-applications-aligned-1024-v1.0.png` | 1024 | default full page | Start Here and page RFQ shown |
| `home-001-applications-aligned-768-v1.0.png` | 768 | default full page | Start Here and page RFQ shown |
| `home-001-applications-aligned-390-v1.0.png` | 390 | default full page | Hero image shown; page RFQ absent |
| `home-001-applications-aligned-320-v1.0.png` | 320 | default full page | Hero image shown; page RFQ absent |
| `home-001-mobile-menu-390-v1.0.png` | 390 | Mobile Menu open | All navigation and fixed RFQ visible; background visually isolated |
| `home-001-products-expanded-390-v1.0.png` | 390 | all Product groups expanded | All 14 Grade IDs visible in four groups |

The five full-page assets are captured at native 1× logical widths. Heights are content-driven and recorded, not prescribed. State assets use the 390px logical viewport and record their actual capture bounds.

## 7. Static behavior boundary

The editable HTML source provides local menu and Product disclosure behavior solely so Gate 4 can inspect the required states. It must not send forms or requests and must not be represented as production implementation. Static visual evidence can prove appearance, source inspection can prove local hooks, and local simulation can demonstrate state transitions; production routing, focus management, framework semantics, data reception and assistive-technology behavior remain Gate 8/9 responsibilities.

## 8. Gate 4 author disposition

The author may submit only after all seven assets exist, the source/freeze identities match, all formal assets have been opened and inspected, the deterministic verifier exits 0, and the author self-check contains no unresolved Gate 4 mandatory Finding.

Submission state is:

```text
COMPLETE_VISUAL_FROZEN / READY_FOR_REVIEW
lifecycle=DRAFT_FOR_PROJECT_CONTROL_REVIEW
review_stage=GATE5_INDEPENDENT_VISUAL_REVIEW_NOT_STARTED
gate_6=NOT_STARTED
gate_8=NOT_AUTHORIZED
```

The Gate 4 author does not create a current page Manifest, perform the independent review, approve the Gate, close findings on behalf of a reviewer, or authorize development.
