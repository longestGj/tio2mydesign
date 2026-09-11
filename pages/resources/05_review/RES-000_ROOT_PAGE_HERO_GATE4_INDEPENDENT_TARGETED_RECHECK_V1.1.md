# RES-000 Root Page Hero · Independent Targeted Recheck V1.1

## Result

`RES-ROOT-HERO-G4-IR-01-R1 = CHANGES_REQUIRED`.

This is the permitted `TARGETED_RECHECK` of `RES-ROOT-HERO-G4-CANDIDATE-02`, against the five findings in [V1.0 independent review](RES-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_REVIEW_V1.0.md). Four findings close: `P0-01`, `P1-01`, `P1-03`, and `P2-01`. One required finding remains: `P1-02`. Required findings remaining: **1**; therefore `PROJECT_CONTROL_REVIEW_PASS` and page/Gate closure are not available.

## Frozen object and coverage

- Candidate source: [V1.1 preview](../04_planning/visual-designs/res-root-page-hero-v1.1/res-root-page-hero-preview-v1.1.html), SHA-256 `45a1f1c6c81d544117906847b2da999d24e0fddbc938b1c8c37df8e15b274d07`, matched to [V1.1 freeze](../04_planning/visual-designs/res-root-page-hero-v1.1/freeze-record-v1.1.json).
- Original-detail review covered the frozen 1440×1200, 768×1450, and 390×1500 formal images; every recomputed SHA matches its freeze record.
- The author’s verifier reran read-only with exit `0`. Independent runtime used 1440, 1023, 901, 900, 768, and 390; the repeatable reviewer command and complete observations are in [V1.1 recheck evidence](RES-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_TARGETED_RECHECK_EVIDENCE_V1.1.json). Its exit `1` correctly represents the one remaining required finding.

## Closed findings

- `P0-01 CLOSED`: At 1023/901/768/390, native keyboard Enter opens the full eight-item Mobile Menu in the exact Global Chrome order, including terminal RFQ; Resources is the sole mobile `aria-current="page"`. The button has `aria-controls` / state. Escape closes the menu, returns focus to Menu, and the closed menu contains zero focusable links.
- `P1-01 CLOSED`: The exact `Explore Procurement Resources` action still targets `#research-paths`; its computed fill is `#008078` and its label white.
- `P1-03 CLOSED`: The technical illustration is now a non-landmark `div aria-hidden="true"`, without role or accessible name.
- `P2-01 CLOSED`: The decorative media is visible at 901px and 1023px; at 900px and below it is `display:none` with a `0×0` box.

## Remaining required finding

### P1-02 — 390px H1 remains visibly compressed through extreme negative tracking

The V1.1 source removes `scaleX` and the fixed 380px width, and independent runtime confirms `36px`, `700`, three lines, and `transform:none`. But the new mobile-only rule is `letter-spacing:-.11em`, computing to `-3.96px` for this H1. Original-detail review shows the resulting title remains tightly squeezed; it is a new page-private horizontal compression mechanism, not the normal shared 36px H1 layout required by the V1.0 acceptance condition.

Acceptance: retain the exact text at 36px/700 and no more than three lines, but remove the exceptional `-.11em` tracking. Use the normal shared heading tracking/column configuration and show that it has no clipping, overlap, hidden overflow, transform, fixed 380px width, or artificial glyph compression.

## Preserved regression scope

Contained `hub-dark`, exact eyebrow/H1/intro, `#research-paths`, direct Three Decision Paths transition, zero Featured/Latest/ItemList/RES-ORIGIN placeholder state, buyer-visible `CURRENT=0`, Hero left rule=0, ≥44px visible controls, and document-level horizontal overflow=0 all remain correct. No inventory, SEO/GEO/Schema, child-publication, Manifest, progress, D16, or candidate file was changed by this review.
