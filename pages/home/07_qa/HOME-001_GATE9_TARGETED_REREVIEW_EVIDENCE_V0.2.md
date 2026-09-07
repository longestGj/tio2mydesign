# HOME-001 Gate 9 Targeted Read-Only Re-review Evidence V0.2

## 1. Review identity

| Field | Value |
|---|---|
| Review ID | `HOME-001-G9-ROQA-02` |
| Date | `2026-09-04` |
| Reviewed commit | `616193f3dbf059f0e081c8d59119c008ba2b848b` |
| Mode | Fresh read-only verification |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 9 disposition | `READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS` |
| Gate 10 | `LOCKED / NOT AUTHORIZED` |

This review independently reran verification. Developer-authored pass statements were treated only as candidate evidence.

## 2. Scope and preservation check

HOME-001 changes in the targeted commit are limited to:

- accessible Home palette and spacing rules;
- exact H1 visual emphasis without changing its text;
- responsive Product group disclosures;
- regression tests and visual evidence.

The Home content contract JSON, metadata code, JSON-LD code and shared Global Chrome implementation hashes are unchanged from the prior review. Tablet `Start Here` remains implemented exactly as before, pending a user decision.

## 3. Fresh executable checks

| Check | Fresh result |
|---|---|
| Focused Home tests | PASS — 9 files / 53 tests |
| TypeScript | PASS — `tsc --noEmit` |
| Targeted ESLint | PASS — 0 errors |
| `SITE_ID=tio2-my`, `.next-tio2-my` production build | PASS — 35 routes |
| `malaysia-homepage-gate9.spec.ts` plus shared navigation E2E | PASS — 15/15 |
| Build/worktree hygiene | PASS — worktree clean after checks |

The first build attempt encountered a concurrent Next build lock. Read-only process and lock inspection found no remaining build process or lock file; the immediate clean retry completed successfully. No source or configuration file was changed by this review.

## 4. Accessibility and color contrast

The following current combinations were recalculated:

| Foreground / background | Ratio | Result |
|---|---:|---|
| `#007F77` / `#FFFFFF` | 4.881:1 | PASS |
| `#007F77` / `#F1F7FA` | 4.515:1 | PASS |
| `#14B8A6` / `#063873` | 4.633:1 | PASS |
| `#14B8A6` / `#001F40` | 6.643:1 | PASS |
| `#4C6073` / `#FFFFFF` | 6.506:1 | PASS |
| `#4C6073` / `#F1F7FA` | 6.018:1 | PASS |

Fresh Axe produced zero violations of any impact at 320, 390, 768, 1024 and 1440. At 320 and 390, all visible links/buttons met the 44px target check. Each of the four Product disclosure buttons was reached through keyboard traversal and exposed a visible 3px focus outline.

## 5. Five-viewport behavior

| Requested viewport | H1 | Horizontal overflow | Default visible grades | Page-level RFQ |
|---:|---:|---:|---:|---|
| 320 | 40px | 0 | 0; four group rows visible | Hidden |
| 390 | 42px | 0 | 0; four group rows visible | Hidden |
| 768 | 52px | 0 | 14 | Visible |
| 1024 | 52px | 0 | 14 | Visible |
| 1440 | 61.92px | 0 | 14 | Visible |

The 1440 module heights were measured as Hero 740, Start Here 176, Markets 732, Products 858, Applications 721, Company 379, Documents 519, Resources 715 and page RFQ 350 CSS pixels. Each is within 2px of the targeted approved content-driven values.

## 6. Mobile Product state

Default 320/390 behavior:

- four disclosure buttons are visible;
- group names are Coatings Grades, Plastics & Masterbatch Grades, Inks & Multi-Application and Specialty Grade;
- counts are `6/5/2/1`;
- all buttons show `Expand grades`;
- each button has `aria-expanded="false"` and an `aria-controls` reference resolving to an existing panel;
- zero grade IDs are visible before expansion.

Expanded 390 behavior:

- all four buttons report `aria-expanded="true"`;
- all 14 grade IDs are visible once and are unique;
- the approved `6/5/2/1` grouping is preserved.

Fresh E2E also verified JavaScript-disabled server rendering: 390 remains collapsed with four discovery rows, while 768 exposes all 14 grades.

## 7. SEO, GEO and Schema regression check

| Contract | Fresh result |
|---|---|
| Title | Exact approved value |
| Meta description | Exact approved value |
| Canonical | One equivalent Home canonical: `https://tio2malaysia.com` |
| Local robots | `noindex, nofollow`, as required outside production authorization |
| Language | `en` |
| H1 | One exact `Malaysia Titanium Dioxide for Industrial Buyers` |
| Site scope | `tio2-my`; no cross-scope leakage |
| JSON-LD | One graph, five stable nodes |
| Relations | All five approved relations resolve correctly |

The targeted commit did not change the Home content, metadata, Schema or Global Chrome files.

## 8. Shared Chrome and interaction states

- Desktop navigation exposes Home as the current page without visible `CURRENT` text.
- Mobile menu opens with the approved eight-item order and Home current state.
- Opening the mobile menu focuses Home; Escape returns focus to the Menu control.
- Header, Hero and Footer RFQ entries remain present.
- The page-level RFQ remains Desktop/Tablet-only, preserving the approved responsive difference.

## 9. Visual comparison

Original-detail inspection of the exact-width evidence confirmed:

- the H1 is the first visual focus and uses the approved deep-teal emphasis;
- the previous excessive section spacing is removed;
- Products remains compact on Desktop and becomes four explicit collapsed groups on Mobile;
- no content overlap, clipping or horizontal crop is visible;
- the prior approved module order and Buyer Clean content remain intact.

Current exact-width screenshots are locked by `HOME-001_GATE9_CURRENT_IMPLEMENTATION_MANIFEST_V0.2.md`.

## 10. External dependencies and non-Home items

Fresh route observation still found `/applications/` at 404 and `/request-a-quote/`, `/request-documents/` and the registered resource candidate at 500 in the current local environment. These are retained as external page-owner, receiver or release dependencies. They are not relabelled as failed Home-owned fixes, and Home must not resolve them by creating placeholder pages, changing URLs or using cross-scope fallback.

Tablet `Start Here` remains `USER_DECISION_REQUIRED / IMPLEMENTATION_UNCHANGED` because the written Gate 7 contract and V0.2 Tablet visual evidence disagree. This review does not decide that content question.

Broader-suite failures unrelated to Home or dependent on missing local environment remain assigned to their corresponding owners and are not counted as Home defects.

## 11. Recommendation

All Home-owned findings from `HOME-001-G9-ROQA-01` are verified fixed with no new Home blocking or important defect. Project control accepted `HOME-001-G9-ROQA-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`; lifecycle is `READ_ONLY_QA_APPROVED` and disposition is `READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`.

Gate 10 remains unauthorized.
