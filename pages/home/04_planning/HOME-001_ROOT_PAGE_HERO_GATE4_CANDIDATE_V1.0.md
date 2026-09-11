# HOME-001 Root Page Hero · Gate 4 Candidate V1.0

## Document Control

| Field | Value |
|---|---|
| Page / route | `HOME-001` / `/` |
| Workset | `ROOT-HERO-G4-7P-V1` / Wave 1 |
| Parent contract | `ROOT-PAGE-HERO-001 = USER_APPROVED / ACTIVE` |
| Candidate ID | `HOME-ROOT-HERO-G4-CANDIDATE-01` |
| Date | `2026-09-11` |
| Status | `USER_REJECTED / SUPERSEDED_BY_OPEN_WHITE_V1.1` |
| Scope | Home Header-to-Hero join, full Hero and first following-module transition |
| Current page Manifest | Unchanged; `HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.6.md` remains current |
| Gate 8 / D16 | `NOT_AUTHORIZED / NOT_TOUCHED` |

## Candidate Design

The candidate preserves the current approved Home H1, intro, two CTA destinations, TiO₂ material image and `Start Here` sequence. It changes only the Hero visual assembly to the shared `flagship-light` contract:

- maximum Hero Shell width: `1200px`;
- Desktop padding: `56px`;
- border radius: `12px`;
- border: `1px solid #D9E2EC`;
- light shared Shell background and restrained shadow;
- H1: `56px`, two rendered lines at 1440px;
- text width: `640px`;
- media width: `406px` in this rendered composition;
- left teal/green decorative line: `0`;
- CTA order and targets unchanged: `Request a Quote` → `/request-a-quote/`, `View Products` → `/products/`.

No Breadcrumb is added to Home. Header and the following `Start Here` module are shown only to prove the real page transition; they are not redesigned by this candidate.

## Evidence

| Asset | Dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `visual-designs/home-root-page-hero-v1.0/HOME-001_ROOT_PAGE_HERO_DESKTOP_1440_CANDIDATE_V1.0.png` | `1440×900` | `392654` | `6F2F68EEE3891712A0180C201F79B34D6624D75DFB6B5FE182D47DE1F2EB0ED5` |
| `visual-designs/home-root-page-hero-v1.0/homepage-root-page-hero-preview-v1.0.html` | Static review source | — | `DA440AE628FCECA09E46D6A6BF462AE8E411FECE3E6E5E731877739A3D8DC7D3` |

Fresh browser inspection at 1440×900 recorded:

- document/body scroll width: `1440 / 1440`;
- Shell width: `1200px`;
- Shell padding: `56px`;
- Shell radius: `12px`;
- `::before`: `display:none`, `content:none`;
- H1 font size: `56px`;
- H1 approximate rendered lines: `2`;
- actions: exact two approved labels and destinations.

## Review Boundary

This is the first visual proof of Wave 1, not a Gate 4 close, Gate 5 review, approved page baseline or production implementation. User feedback may revise the shared master before 768px/390px evidence and the APP-000 binding are produced. Historical approved Home assets remain unchanged.

## User Disposition

The user rejected this framed-shell direction on `2026-09-11` and selected the open-white Products feeling for Home and Applications. The proposed replacement of Home media/content was explicitly not authorized. This candidate remains immutable history and must not be promoted.
