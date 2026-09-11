# ABOUT-001 Root Page Hero Gate 4 Candidate V1.0

## Candidate control

| Field | Value |
|---|---|
| Candidate ID | `ABOUT-ROOT-HERO-G4-CANDIDATE-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NEEDS_USER_DECISION` |
| Variant | `corporate-light` |
| Evidence root | `visual-designs/about-root-page-hero-v1.0/` |
| Reproduce | `node capture-about-root-page-hero-v1.0.cjs`, then `node recheck-about-root-page-hero-v1.0.cjs`, then `node verify-about-root-page-hero-v1.0.cjs` |

The source, runtime, freeze record and 1440/768/390 PNGs are a targeted page-context candidate, not production implementation or a replacement for the current ABOUT Manifest.

## Frozen content and transition

| Area | Frozen result |
|---|---|
| Hero | Exact approved eyebrow, H1 and first Source Map introduction paragraph |
| Actions | `Request a Quote` `/request-a-quote/`; `Contact Us` `/contact/` |
| Media | Approved `about.hero.composite` plus `about.hero.route_map`, decorative / `aria-hidden`, after CTAs when stacked |
| First module | `Who We Are`; approved paragraphs 2–6 then Operating Company, Location, Main Product, Annual Supply, Markets Served, Customer Base and Export Coordination |
| Chrome | Global V0.5 order; About `aria-current`; no buyer-visible `CURRENT`; desktop underline/mobile left marker |

## Verification disposition

All non-title mechanical checks pass at 1440, 768 and 390: 56/44/36 weight 700, CTA targets and visibility, media order, overflow=0, 44px targets, mobile Menu open/close, `CURRENT=0`, `aria-hidden` media and direct `Who We Are` transition. The only non-pass state is the honest 390px four-line natural H1 result; see the runtime and freeze record for the exact measurement and prohibited-workaround scan.

No Gate 5 closure, Gate 6 intake, Gate 8 authorization or D16 implementation follows from this candidate.
