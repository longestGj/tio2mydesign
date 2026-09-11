# HOME-001 Root Page Hero Gate 4 Candidate V1.4

## Control

| Field | Value |
|---|---|
| Page / route | `HOME-001` / `/` |
| Workset / bundle | `ROOT-HERO-G4-7P-V1` / `HOME-ROOT-HERO-G4-CANDIDATE-05` |
| Parent / finding | `ROOT-PAGE-HERO-001` / `ROOT-HERO-G5-XPAGE-F01` |
| Direct predecessor | `HOME-ROOT-HERO-G4-CANDIDATE-04` / V1.3 |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Date | `2026-09-11` |

## Minimal correction

V1.4 removes the V1.3 1440px-only H1 override (`61.92px / 750`). The unchanged shared base H1 now supplies `56px / 700` at 1440px. No Hero text, CTA label/destination, media, Header/Footer, open-white structure, Start Here module, later module, SEO/GEO/Schema, route or manifest is changed.

## Frozen page-context evidence

| Viewport | File | Runtime result |
|---|---|---|
| 1440×900 | `visual-designs/home-root-page-hero-v1.4/HOME-001_ROOT_PAGE_HERO_DESKTOP_1440_CANDIDATE_V1.4.png` | H1 `56px / 700`, 2 lines; two-column open-white Hero; Header, complete Hero, media and Start Here transition visible. |
| 768×1400 | `visual-designs/home-root-page-hero-v1.4/HOME-001_ROOT_PAGE_HERO_TABLET_768_CANDIDATE_V1.4.png` | H1 `44px / 700`, 2 lines; complete Hero and Start Here in authentic page context. |
| 390×1500 | `visual-designs/home-root-page-hero-v1.4/HOME-001_ROOT_PAGE_HERO_MOBILE_390_CANDIDATE_V1.4.png` | H1 `36px / 700`, 3 lines; mobile Chrome, Hero, CTA stack, media and Start Here transition visible. |

`capture-runtime-v1.4.json` additionally replays 1024, 1023, 767, 561 and 350px. It confirms all tested widths retain `700` weight, the inherited tablet/mobile sizes, at most three H1 lines, 44px-or-greater CTA height, and no horizontal overflow. `verification-runtime-v1.4.json` is the focused F01 behavioral validator replay; it passes at 1440/768/390.

## Freeze and boundary

The frozen source, renderer, validator, runtime outputs, dependency identities and PNG hashes are recorded in `visual-designs/home-root-page-hero-v1.4/freeze-record.json`.

V1.4 is a new Gate 4 candidate only. It preserves V1.3 and all prior versions; it does not update the current Manifest, shared progress/status, Gate 6/8, D16, or git history.
