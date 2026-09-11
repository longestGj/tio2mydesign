# HOME-001 Root Page Hero Gate 4 Candidate V1.3

## Control

| Field | Value |
|---|---|
| Page / route | `HOME-001` / `/` |
| Workset / bundle | `ROOT-HERO-G4-7P-V1` / `HOME-ROOT-HERO-G4-CANDIDATE-04` |
| Parent / addendum | `ROOT-PAGE-HERO-001` / `ROOT-PAGE-HERO-OPEN-WHITE-01` |
| Repair source | `HOME-ROOT-HERO-G5-F01` and targeted recheck V1.1 |
| Status | `GATE4_TARGETED_REPAIR_FROZEN / SUBMITTED_FOR_GATE5_TARGETED_RECHECK` |
| Date | `2026-09-11` |

V1.3 narrows the Mobile side-margin correction to `.hero-shell`. It restores the original general `.shell` behavior for Start Here and every later module, and keeps the Hero-specific 20px margin authoritative at `≤350px`.

The exact 1440, 768 and 390 PNGs are byte-identical to the preceding accepted evidence. Only the 767 boundary screenshot was regenerated because its following-module width changed back to the approved source behavior. V1.1 and V1.2 remain unchanged history.

## Measured result

- H1 tokens remain correct at the shared boundaries: `1024=56/700`, `1023/768=44/700`, `767/561/390/350=36/700`.
- At `767`, Hero width is `727px` while Start Here returns to the original `703px`.
- At `350`, Hero width is `310px` (20px each side) while Start Here retains the original `318px` general-shell width.
- All eight runtime widths have document/body width equal to the viewport and H1 at no more than three lines.
- The full body DOM/text, CTA destinations, media, Header, Start Here content and later modules remain unchanged.

The authoritative file identities, screenshot provenance, runtime measurements and dependency hashes are in `visual-designs/home-root-page-hero-v1.3/freeze-record.json`.

## Boundary

This is a frozen Gate 4 repair candidate awaiting independent targeted recheck. It is not a Gate 5 result, current Manifest replacement, Gate 6 start or Gate 8 authorization. No D16 file was touched.
