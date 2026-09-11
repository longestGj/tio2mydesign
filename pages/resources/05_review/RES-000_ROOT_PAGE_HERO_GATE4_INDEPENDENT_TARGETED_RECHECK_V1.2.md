# RES-000 Root Page Hero · Final Independent Targeted Recheck V1.2

## Result

`RES-ROOT-HERO-G4-IR-01-R2 = PROJECT_CONTROL_REVIEW_PASS`.

Required findings: **0**. This `TARGETED_RECHECK` closes the V1.1 remainder and confirms the four earlier closures without reopening unchanged page content. It is a reviewer result for the exact frozen candidate, not a Manifest replacement, Gate 6/8 start, production implementation, or release authorization.

## Exact user decision and scope control

The binding records the 2026-09-11 user decision exactly: **RES-000 Hero H1 at 390px only** may use a natural four-line wrap at `36px / 700`, within the shared `24px` mobile Shell padding and page-side safety margins. It locks normal `0` letter-spacing, no transform, no font-stretch, no over-wide fixed H1, no clipping, and no horizontal overflow.

This is not a shared component change: the binding expressly leaves the shared three-line default, every other RES viewport, and every other root page unchanged. The exception therefore closes `P1-02` only for this object and viewport.

## Frozen identity and evidence

- [V1.2 candidate source](../04_planning/visual-designs/res-root-page-hero-v1.2/res-root-page-hero-preview-v1.2.html), SHA-256 `a8a8f06e28b5ab04f02f74a01ada3433a4e0c33fe18ad369b7d7e9fe2a5c9e94`, matches [freeze record](../04_planning/visual-designs/res-root-page-hero-v1.2/freeze-record-v1.2.json).
- The 1440×1200, 768×1450, and 390×1500 frozen formal PNGs were original-detail reviewed and each SHA recomputed to the freeze record.
- The author verifier reran read-only with exit `0`. Independent runtime covered 1440, 1023, 901, 900, 768, and 390; the repeatable non-mutating command and observations are in [V1.2 evidence](RES-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_TARGETED_RECHECK_EVIDENCE_V1.2.json).

## Recheck results

- `P1-02 CLOSED`: at 390 the H1 is `36px / 700`, normal letter spacing, `transform:none`, normal font stretch, natural four lines, and fits entirely within the 300px text column with the required 24px Shell padding and no overflow.
- `P0-01` remains closed: 768/390 native Enter opens the exact eight-item mobile order, including terminal RFQ and sole Resources `aria-current`; Escape closes it, restores focus, and leaves no closed-menu focusable links.
- `P1-01` remains closed: CTA remains exact `#research-paths`, `#008078`, white label.
- `P1-03` remains closed: media is a non-landmark `div aria-hidden="true"`.
- `P2-01` remains closed: media is visible at 1023/901 and zero-space hidden at 900/768/390.
- H0 regression checks pass: contained dark Shell; no Hero left rule; zero Featured/Latest/ItemList/RES-ORIGIN card or placeholder; direct `Choose the right research path` transition; buyer-visible `CURRENT=0`; ≥44px visible controls; and no document horizontal overflow.

## Stop boundary

Only this final review report, its evidence record, and its replay validator were added under `pages/resources/05_review`. No candidate, binding, Manifest, progress/control file, D16 file, or prior review was modified; no commit was created.
