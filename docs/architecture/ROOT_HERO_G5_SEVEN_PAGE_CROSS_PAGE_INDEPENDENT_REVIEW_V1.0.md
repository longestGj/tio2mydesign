# Root Hero Seven-Page Cross-Page Independent Review V1.0

## Control

| Field | Value |
|---|---|
| Review ID | `ROOT-HERO-G5-XPAGE-IVR-01` |
| Date | `2026-09-11` |
| Reviewer mode | `INITIAL / INDEPENDENT_REVIEW` |
| Workset | `ROOT-HERO-G4-7P-V1` |
| Scope | `HOME-001`, `APP-000`, `PRODUCT-000`, `MARKET-000`, `DOC-000`, `RES-000`, `ABOUT-001` Root Hero bindings only |
| Reviewer independence | This reviewer did not produce any of the seven targeted Gate 4 candidates, captures, freeze records, or page-local reviews. |
| Authority | `ROOT-PAGE-HERO-001`, `ROOT-PAGE-HERO-OPEN-WHITE-01`, `ROOT-HERO-G4-7PAGE-CTRL-01`, current Gate workflow and the seven page-local binding/candidate/current-Manifest authority chains. |
| Result | **`CHANGES_REQUIRED / DRAFT / CONDITIONAL`** |
| Gate boundary | This report does not close Gate 4/5, replace a current Manifest, start Gate 6/8, authorize D16 work, or authorize publication. |

## Exact reviewed combinations

| Page | Frozen candidate / binding | Page-local review chain | Cross-page disposition |
|---|---|---|---|
| `HOME-001` | `HOME-ROOT-HERO-G4-CANDIDATE-04` / V1.3 | `HOME-ROOT-HERO-G5-IVR-01`, V1.0 → V1.2 | **P1 open**: desktop H1 shared token mismatch. |
| `APP-000` | `APP-ROOT-HERO-G4-CANDIDATE-02` / V1.1 | `APP-ROOT-HERO-G4-IR-02` | No new finding. |
| `PRODUCT-000` | `PRODUCT-ROOT-HERO-G4-REFERENCE-01` / V1.0 | `PRODUCT-ROOT-HERO-G4-REFERENCE-INDEPENDENT-01` | No new finding. |
| `MARKET-000` | `MARKET-ROOT-HERO-G4-CANDIDATE-01` / V1.0 | `MARKET-ROOT-HERO-G4-IR-01` | No new finding. |
| `DOC-000` | `DOC-ROOT-HERO-G4-CANDIDATE-01` / V1.0 | page-local independent review V1.0 | No new finding. |
| `RES-000` | `RES-ROOT-HERO-G4-CANDIDATE-03` / V1.2 | `RES-ROOT-HERO-G4-IR-01-R2` | Pass subject to the already approved, RES-only 390px four-line exception. |
| `ABOUT-001` | `ABOUT-ROOT-HERO-G4-CANDIDATE-01` / V1.0 | no promotion review: candidate correctly declares user decision required | **Conditional**: 390px H1 is naturally four lines and has no explicit exception. |

## Required findings

| ID | Severity / class | Object and evidence | Finding and reader impact | Required disposition |
|---|---|---|---|---|
| `ROOT-HERO-G5-XPAGE-F01` | **P1 / page-binding defect with shared-token impact** | `HOME-001`, 1440 runtime replay and `HOME-ROOT-HERO-G5-IVR-01-recheck-v1.2-runtime.json` | The H1 computes to **61.92px / 750** at 1440px. `ROOT-PAGE-HERO-001` §4.3 requires Desktop H1 `56px`, weight `700`; no Home typography exception is approved in the current shared contract or the Open-White Addendum. This breaks the stated cross-page typography token even though Home’s 1024/768/390 checks use 56/44/36 at 700. | Return to Gate 4 for a Home-only token-alignment revision, freeze affected 1440 evidence and run a targeted recheck. Do not alter the approved H1 copy, CTA, photograph, Start Here module, or the open-white surface. |

No P0 finding was observed. No P2 advisory is required.

## Required user decision — not a defect to silently repair

`ABOUT-001` at 390px uses the approved H1 text at `36px / 700`, normal spacing and the required 24px Shell padding; it naturally occupies **four lines** in its 302px text column. All mechanical checks otherwise pass: no transform, stretch, fixed over-width, clipping or horizontal overflow.

The shared contract’s default is a maximum of three H1 lines. The 2026-09-11 decision approving a four-line title applies only to `RES-000` at 390px. It does not extend to About. Therefore `ABOUT-001` remains `MOBILE_TITLE_LINE_USER_DECISION_REQUIRED` and cannot be promoted by this review.

Decision needed from the user: approve the exact `ABOUT-001` 390px four-line natural wrap under the current 36px/700, 24px-padding geometry; or return the binding for an approved content/geometry change. This review makes no recommendation to compress, stretch, shrink, clip, or otherwise force a three-line title.

## Cross-page checks

| Contract area | Result | Evidence / qualification |
|---|---|---|
| Authorized variants and surfaces | Pass, apart from the open F01 token issue | Home/APP are correctly open-white under `ROOT-PAGE-HERO-OPEN-WHITE-01`; Product is its reference open surface; Market/DOC are bounded `hub-light`; RES is contained `hub-dark`; About is bounded `corporate-light`. No unapproved fourth variant or giant full-screen Hero frame was observed. |
| Global Header/Footer consumption and `CURRENT=0` | Pass | All seven original page-context images show shared Chrome treatment and no buyer-visible `CURRENT`. Only page current semantics/markers are visible. Footer was not recreated by these targeted bindings. |
| Hero left green/teal decoration | Pass | Zero on all seven Hero shells. The retained DOC selector left rule is below the Hero and is an explicit selector-owned scope item, not a Hero decoration. |
| Approved copy, CTA and fact boundaries | Pass for reviewed Hero scopes | Home, APP, Product, Market, DOC, RES and About match their binding records. APP remains route-safe; Product preserves its relationship boundary; Market has zero child-market route hrefs and no PT-BR; DOC preserves the direct request link and selector gate; RES remains zero-inventory; About’s composite remains decorative. |
| H1 56/44/36 at weight 700 | **Conditional / P1 open** | APP, Product, Market, DOC, RES, and About meet the size/weight tokens at 1440/768/390. Home is nonconforming at 1440 only (`61.92px / 750`); see F01. |
| H1 line count | Conditional | All default cases are at most three lines. `RES-000` 390 is four lines under its exact user-approved exception. `ABOUT-001` 390 is four lines but lacks equivalent approval. |
| Responsive media / transitions | Pass | Informative media remains present where required; RES hides its decorative media at <=900px with zero space. Each original evidence image shows Header → complete Hero → first-module context. |
| 44px controls and overflow | Pass | The rerun validators report visible controls >=44px and no horizontal overflow at required 1440/768/390 widths; RES also passed its 1023/901/900 media boundary checks. |
| Freeze/evidence integrity | Pass | Candidate and supplied image SHA-256 values matched each page’s freeze record in the validators. |

## Validator and original-image evidence

All available candidate validators were rerun from `D:\23MySec`; no capture script was run and no candidate, Manifest, Status/progress, Gate 6/8 record, D16 file, commit, or Git operation was changed by this review. The Home independent auditor regenerates its reviewer-local runtime observation JSON as part of its normal read-only candidate check; that observation is not a candidate, Manifest, progress, or Gate-state change.

| Page | Rerun result |
|---|---|
| Home | `HOME-ROOT-HERO-G5-IVR-01-recheck-v1.2-audit.cjs`: PASS; frozen files, dependencies, eight responsive widths, CTA keyboard path, 44px minimum and overflow checks matched. |
| APP | `APP-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_RECHECK_VALIDATOR_V1.1.cjs`: `PROJECT_CONTROL_REVIEW_PASS`, exit 0. |
| Product | `verify-product-root-page-hero-v1.0.cjs`: PASS, exit 0. |
| Market | `MARKET-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_REVIEW_VALIDATOR_V1.0.cjs`: PASS, exit 0. |
| DOC | `verify-doc-root-page-hero-v1.0.cjs`: PASS, exit 0. |
| RES | `RES-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_TARGETED_RECHECK_VALIDATOR_V1.2.cjs`: `PROJECT_CONTROL_REVIEW_PASS`, exit 0. |
| About | `verify-about-root-page-hero-v1.0.cjs`: `NEEDS_USER_DECISION`, exit 0; mechanical safeguards pass and the isolated line-count condition remains explicit. |

Original-detail visual inspection was completed for the seven 1440px and seven 390px frozen PNGs. These are static-visual observations, not a claim of production implementation or real route/receiver success. The 768px supplied assets were additionally verified by the corresponding validators and their freeze hashes.

## Separation of responsibility

| Classification | Items |
|---|---|
| Shared-parent defect | None newly found. |
| Single-page binding defect | `ROOT-HERO-G5-XPAGE-F01` (Home desktop typography token). |
| User-decision condition | `ABOUT-001` 390px four-line H1; no change is authorized without the user’s explicit decision. |
| Production/implementation label only | All seven files are Gate 4 visual candidates/bindings. The shared production `RootPageHero` component remains a later D16/Gate 8 responsibility and was not inferred from static preview HTML. |

## Stop condition

The seven-page workset must remain `DRAFT / CONDITIONAL`. It cannot be returned as `REVIEW_PASS` or handed to Gate 6 until both F01 is closed on a newly frozen Home binding and the About line-count decision is recorded. No page Manifest promotion, Gate closure, Gate 6 intake, Gate 8 dispatch, D16 change, deployment or publication follows from this report.
