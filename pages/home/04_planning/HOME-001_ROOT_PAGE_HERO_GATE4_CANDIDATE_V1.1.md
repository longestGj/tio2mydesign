# HOME-001 Open-White Root Page Hero · Gate 4 Candidate V1.1

## Document Control

| Field | Value |
|---|---|
| Page / route | `HOME-001` / `/` |
| Workset | `ROOT-HERO-G4-7P-V1` / Wave 1 |
| Parent contract | `ROOT-PAGE-HERO-001 = USER_APPROVED / ACTIVE` |
| User addendum | `ROOT-PAGE-HERO-OPEN-WHITE-01 = USER_APPROVED / ACTIVE` |
| Candidate ID | `HOME-ROOT-HERO-G4-CANDIDATE-02` |
| Date | `2026-09-11` |
| Status | `GATE4_CANDIDATE_FROZEN / SUBMITTED_FOR_INDEPENDENT_GATE5_REVIEW` |
| Current page Manifest | Unchanged; `HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.6.md` remains current |
| Gate 8 / D16 | `NOT_AUTHORIZED / NOT_TOUCHED` |

## Exact Visual Revision

V1.1 starts from the current Home visual source and changes only the Hero's complete outer surface:

- outer Hero border: `0`;
- outer Hero rounded rectangle: `0`;
- outer Hero background/gradient: `none`;
- outer Hero box shadow: `none`;
- outer Hero horizontal card inset: `0` so content aligns to the open `1200px` page grid;
- Hero left decorative line: `0`.

The current Home H1, intro, CTA labels and destinations, TiO₂ material photo, Header and `Start Here` content are unchanged. No information summary, statistics card or replacement media is introduced.

## Evidence

| Asset | Dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `visual-designs/home-root-page-hero-v1.1/HOME-001_ROOT_PAGE_HERO_DESKTOP_1440_CANDIDATE_V1.1.png` | `1440×900` | `394336` | `FC3177BB1E4ED7F11E1E30C823184FA773CB90106647098A39311025B4027B2A` |
| `visual-designs/home-root-page-hero-v1.1/HOME-001_ROOT_PAGE_HERO_TABLET_768_CANDIDATE_V1.1.png` | `768×1400` | `369339` | `0D414EE88551A596A826AC6EC8074655EF0C6163F6909101F45559D9E75C0EDE` |
| `visual-designs/home-root-page-hero-v1.1/HOME-001_ROOT_PAGE_HERO_MOBILE_390_CANDIDATE_V1.1.png` | `390×1500` | `174695` | `E1FC8309624BA6E10695BDC0BF9E791F56556E9765061D34F454AC28F6E2153C` |
| `visual-designs/home-root-page-hero-v1.1/homepage-root-page-hero-preview-v1.1.html` | Static review source | `32464` | `FC7A73FEBC15FA974ED7868FD6EF52005702825D616AB92426CBEDB8A6B0CFAF` |

Fresh 1440×900 browser inspection recorded:

- document/body scroll width: `1440 / 1440`;
- layout width: `1200px`;
- border width: `0px`;
- border radius: `0px`;
- background image: `none`;
- box shadow: `none`;
- `::before`: `display:none`, `content:none`;
- exact current H1, intro, photo source and two CTA destinations retained.

Fresh responsive inspection additionally recorded:

- `768px`: `704px` content width, one-column Hero, `310px` informative media, both CTA heights `48.25px`, body scroll width `768px`;
- `390px`: `350px` content width, one-column Hero, `230px` informative media, vertically stacked full-width CTAs at `48.25px`, body scroll width `390px`;
- all three `Start Here` actions remain visible in the 390px transition evidence;
- all three viewports retain border/background/shadow/left-line counts of zero for the complete Hero surface.

## Review Boundary

This frozen three-viewport bundle is submitted for independent Gate 5 visual review. It is not a Gate 4 close, Gate 5 result, approved page Manifest baseline or production implementation. The Applications binding remains a later Wave 1 item and is not implied by the Home evidence. No D16 implementation was performed.

## User Direction Decision

On `2026-09-11`, the user approved the exact 1440px open-white direction with “可以。就这个。” The approval fixes the visible design direction and authorizes completion of the same Home treatment at 768px and 390px. It does not authorize content/media changes, Applications production, Gate 8 or D16 implementation.
