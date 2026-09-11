# HOME-001 Root Page Hero Gate 4 Targeted Repair V1.1

`HOME-ROOT-HERO-G5-F01 = RESOLVED_IN_FROZEN_CANDIDATE_PENDING_INDEPENDENT_TARGETED_RECHECK`.

## Exact repair

1. Changed the `≤767` selector from global `.shell` to `.hero-shell`.
2. Restored the original `≤560` general `.shell` width of viewport minus 40px.
3. Added a later, more specific `≤350` Hero width of viewport minus 40px so the old general 16px margin does not override the Hero contract.
4. Kept every H1 breakpoint/token from V1.2 unchanged.

## Author verification

Fresh checks cover 1440, 1024, 1023, 768, 767, 561, 390 and 350. The repaired Hero widths, preserved Start Here widths, title tokens, maximum three lines, no horizontal overflow, byte-identical reused PNGs and unchanged body DOM all passed. The new 767 image was opened at original detail; no clipping, overlap, hidden CTA, unintended frame or abnormal blank area was observed.

The frozen combination is `HOME-001_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.3.md` plus `visual-designs/home-root-page-hero-v1.3/freeze-record.json`. Only the independent reviewer may close F01.
