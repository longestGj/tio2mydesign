# HOME-001 Applications-Aligned Gate 5 Independent Visual Review V1.0

## 0. Review control

| Field | Value |
|---|---|
| Date | `2026-09-11` |
| Dispatch ID | `HOME-001-G5-INDEPENDENT-REVIEW-20260911-01` |
| Page / stage | `HOME-001` / `GATE5_INDEPENDENT_VISUAL_REVIEW` |
| Mode | `INITIAL` |
| Gate 4 author | `/root/home_gate4_visual` |
| Independent reviewer | `/root/home_gate5_review` |
| Reviewer role | `agent-gate5-independent-visual-review V0.4` |
| Method | `layout-interaction-verification V0.8`, `INDEPENDENT_REVIEW` |
| Frozen commit | `2b04c02decfc5682f732aeca797403bb8afc9783` |
| Workset | `HOME-001-G4-APP-ALIGN-V1-20260911` |
| Bundle | `HOME-001-G4-APP-ALIGN-BUNDLE-V1.0` |
| Frozen source SHA-256 | `87D02E746D2D43AF5EF981CF41D3880BF392F11AA10B173611BF91DBA421CEA5` |
| Result | **`CHANGES_REQUIRED`** |
| Gate effect | Keep the current combined Gate 4 lifecycle open; do not start Gate 6 from this bundle |

This is the one independent visual review required by the current Gate 4 to Gate 5 handoff. It is not project-control closure, implementation evidence, release approval or authority to change `D:/16Wordpress_nextjs`.

## 1. Admission and identity

The handoff was reviewable. The source, freeze record, author self-check and seven formal PNGs were present. The source, asset dimensions, byte sizes and SHA-256 values matched the frozen record. The author and reviewer are different actual task instances. The author self-check was used as an input only and was not accepted as an independent conclusion.

The frozen source and seven formal assets were opened from:

`pages/home/04_planning/visual-designs/home-applications-aligned-v1.0/`

| Formal asset | Recorded size | Independent inspection |
|---|---:|---|
| `home-001-applications-aligned-1440-v1.0.png` | `1440 x 6471` | Opened at original detail |
| `home-001-applications-aligned-1024-v1.0.png` | `1024 x 7127` | Opened at original detail |
| `home-001-applications-aligned-768-v1.0.png` | `768 x 8135` | Opened at original detail |
| `home-001-applications-aligned-390-v1.0.png` | `390 x 10142` | Opened at original detail |
| `home-001-applications-aligned-320-v1.0.png` | `320 x 10818` | Opened at original detail |
| `home-001-mobile-menu-390-v1.0.png` | `390 x 844` | Opened at original detail |
| `home-001-products-expanded-390-v1.0.png` | `390 x 10827` | Opened at original detail |

## 2. Coverage and independent observations

### 2.1 Visual hierarchy and approved Home scope

The Applications-family Navy/Teal hierarchy, white and Soft Background rhythm, restrained borders/radii/shadows and 1200px content language are coherent across the five widths. Home remains a global-entry page rather than becoming a copy of the Applications Hub.

The expected Home sequence is present: Hero, Start Here, Markets, Products, Applications, Company & Supply, Documents, Resources & Buyer Answers and page RFQ. The existing powder Hero image is visible at 1440, 1024, 768, 390 and 320. Start Here is visible at all five widths. Page RFQ is visible at 1440, 1024 and 768, and absent at 390 and 320. No buyer-visible `CURRENT` label was observed.

The visible copy, module identity and link destinations sampled against the current Home source remain within the frozen revision scope. No unexpected module removal, duplicate section or content-order change was observed.

### 2.2 Products, relationships and responsive layout

The Products presentation preserves four groups and the approved `6 / 5 / 2 / 1` grouping. An independent 390px keyboard operation opened the four native disclosure controls and exposed the exact fourteen ordered Grade IDs:

`M-350, M-510, M-896, M-996, M-2196, M-895, M-200, M-108, M-210, M-340, M-886, M-52, M-2377, CR-901`.

Independent Chromium layout reads at 1440, 1024, 768, 390 and 320 reported document width equal to viewport width. No horizontal overflow, card collision, clipped text or abnormal section gap was found in the formal images. At 390 and 320, independently measured visible links, buttons and summaries had no target smaller than 44px.

### 2.3 Local state operation

At 390px, keyboard activation opened the supplied Mobile Menu state, updated `aria-expanded`, locked body scrolling and exposed the eight expected destinations in order, including terminal Request a Quote. Scrim activation closed it. The Products disclosure state also operated locally. These checks prove only the supplied local prototype behavior; they do not replace Gate 8/9 production accessibility verification.

## 3. Required Finding

### `HOME-G5-VR-01` — P0 — The frozen candidate replaces rather than preserves the current shared Global Chrome

**Evidence**

1. The approved direction requires Header/Footer to continue assembling the shared component and forbids a page-private copy. The frozen HTML instead contains its own `.global-header`, `.mobile-menu` and `.global-footer` markup and CSS.
2. The approved Footer legal utility row is absent from the HTML and from all five full-page PNGs. Independent DOM inspection at all five widths found zero controls for `Privacy Policy`, `Dasar Privasi (BM)`, `Cookie Policy` and `Cookie Settings`. The active approved addendum requires those controls in that order, with Cookie Settings as a semantic button.
3. The frozen 390px Menu is a white panel with dark links. The current shared component uses the approved Deep Navy mobile navigation treatment, white links, Teal current-page marker and Teal terminal RFQ.
4. The frozen Mobile Header hard-codes the full `Request a Quote` label at 390 and 320. At 320 it wraps across two lines. The current shared component switches to the compact `RFQ` label below 1100px and preserves the approved `Logo | RFQ | Menu` geometry.
5. The frozen Footer gives regular Footer links a 36px minimum height and the Footer RFQ a 46px minimum height at non-mobile widths. The current shared component contract uses at least 44px for Footer links and 48px for its Footer RFQ.

This is not a request to redesign Global Chrome. It is a blocking regression because the Home revision scope explicitly freezes shared Header/Footer, Mobile Menu, fixed RFQ, production Logo binding and 84px/64px geometry.

**Exact acceptance conditions**

1. Gate 4 author creates a new versioned source and bundle; the submitted V1.0 source, record and PNGs remain immutable history.
2. The replacement visual source uses or faithfully renders the current shared Global Chrome rather than a Home-private variant. Do not change the shared Global Chrome contract to fit this candidate.
3. Footer includes, in order: `Privacy Policy` to `/privacy-policy/`; `Dasar Privasi (BM)` to `/ms/privacy-policy/`; `Cookie Policy` to `/cookie-policy/`; semantic `Cookie Settings` button with no page route.
4. 390/320 Header evidence uses the current compact `RFQ` treatment without wrapping; preserves `Logo | RFQ | Menu`, 64px Header and minimum 44px targets. Desktop preserves the current 84px shared Header.
5. The 390px open-menu evidence uses the current shared Mobile Menu visual treatment, eight-item order, Home current marker without visible `CURRENT`, terminal fixed RFQ and background isolation.
6. Shared Footer link and RFQ target geometry matches the current shared component at all affected widths.
7. Recapture the five full-page assets and the 390px Mobile Menu state because Global Chrome is visible in each. Re-run the complete frozen-identity checks plus adjacent regression for Hero, Start Here, page-RFQ breakpoint behavior, Products disclosures, fourteen Grade IDs and zero horizontal overflow.

**Responsible owner:** Gate 4 author, with the Home/Global Chrome owner contract treated as read-only authority.

## 4. Machine evidence and limitations

The existing author verifier was rerun against the frozen bundle and reported `164 PASS / 0 FAIL`; its JSON identity remained the recorded author evidence. That result proves the rules implemented by that verifier and the frozen file identities, but it did not check the approved legal utility row or exact shared Mobile Header/Menu/Footer fidelity, so it does not override `HOME-G5-VR-01`.

Independent local Chromium reads were used for layout and the two supplied interactive states. The normal CUA browser surface was unavailable in this task, so no CUA-only evidence was claimed and no duplicate diagnostic screenshot was created; all seven formal assets were nevertheless opened at original detail with the local image viewer.

Not tested at this planning stage: production React/WordPress assembly, real routes and submissions, analytics, multi-browser/real-device behavior, assistive-technology announcement, full focus trap/return lifecycle, Axe runtime scan, metadata/Schema parity, deployment or publication. Those remain Gate 8/9 work and do not explain or waive the present shared-Chrome visual regression.

## 5. Disposition

**Conclusion: `CHANGES_REQUIRED`.**

Required Findings: `1` (`P0: 1`, `P1: 0`). Recommendations: `0`.

The Applications-aligned Home body is otherwise suitable for targeted preservation. Return only `HOME-G5-VR-01` to the Gate 4 author. A subsequent Gate 5 review should verify the new bundle's changed Global Chrome scope plus the exact adjacent regressions listed above; it should retain the valid unchanged body coverage from this report rather than restart unrelated page design. Only project control may close the combined Gate 4 lifecycle after that independent result.
