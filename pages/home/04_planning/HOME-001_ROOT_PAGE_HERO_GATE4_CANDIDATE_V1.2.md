# HOME-001 Root Page Hero Gate 4 Candidate V1.2

## Control

| Field | Value |
|---|---|
| Page / route | `HOME-001` / `/` |
| Workset / bundle | `ROOT-HERO-G4-7P-V1` / `HOME-ROOT-HERO-G4-CANDIDATE-03` |
| Parent / addendum | `ROOT-PAGE-HERO-001` / `ROOT-PAGE-HERO-OPEN-WHITE-01` |
| Repair source | `HOME-ROOT-HERO-G5-F01` |
| Status | `GATE4_TARGETED_REPAIR_FROZEN / SUBMITTED_FOR_GATE5_TARGETED_RECHECK` |
| Date | `2026-09-11` |

V1.2 is a targeted responsive repair of V1.1. It preserves the user-approved 1440 open-white presentation byte-for-byte and changes only the H1 responsive tokens and the Mobile side-margin breakpoint required by the shared Hero contract. V1.1 remains historical and unchanged.

## Targeted change

- `1440`: exact V1.1 presentation retained at `61.92px / 750` under the user's exact visual approval.
- `1024–1439`: shared Desktop H1 `56px / 700`; `1024` remains two-column.
- `768–1023`: shared Tablet H1 `44px / 700`; one-column.
- `≤767`: shared Mobile H1 `36px / 700`, available width minus `40px`; one-column.
- H1 stays at or below three lines in all six measured widths.
- Complete body DOM/text, CTA labels/targets, photograph, Header, Start Here and later modules remain unchanged.

## Frozen evidence

The authoritative identity, dimensions, capture provenance and dependency hashes are in `visual-designs/home-root-page-hero-v1.2/freeze-record.json`. Formal visual evidence includes the byte-identical 1440 reuse, new 768 and 390 captures, and a new 767 boundary capture triggered by the responsive Finding.

The capture record binds Chromium `151.0.7922.34`, Playwright `1.62.1`, DPR `1`, the exact viewports, light color scheme, reduced motion, font wait, screenshot mode, script hash and runtime output. Runtime inspection also covers `1023` and `1024` without adding redundant screenshots.

## Boundary

This is a frozen Gate 4 repair submission, not an independent recheck result, Gate close, current Manifest replacement, Gate 6 start or Gate 8 authorization. No file in `D:\16Wordpress_nextjs` was touched.
