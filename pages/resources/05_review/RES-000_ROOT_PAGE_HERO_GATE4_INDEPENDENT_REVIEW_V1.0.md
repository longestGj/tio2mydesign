# RES-000 Root Page Hero · Independent Visual Review V1.0

## Result

`RES-ROOT-HERO-G4-IR-01 = CHANGES_REQUIRED`.

This is an `INDEPENDENT_REVIEW` of the frozen `RES-ROOT-HERO-G4-CANDIDATE-01`, not an approval or a replacement Manifest. Required findings: **4** (`P0=1`, `P1=3`). Advisory findings: **1** (`P2=1`). The candidate cannot enter project-control pass until the P0/P1 items are repaired in a new versioned freeze bundle.

## Scope, authority, and evidence identity

- Page / workset: `RES-000` / `ROOT-HERO-G4-7P-V1`, Wave 3 `hub-dark` binding.
- Reviewer mode: `INDEPENDENT_REVIEW`; this reviewer did not author the candidate.
- Frozen source: [candidate preview](../04_planning/visual-designs/res-root-page-hero-v1.0/res-root-page-hero-preview-v1.0.html), SHA-256 `ac4f1a6a660ab0f90e463eceac2ba1c696df55d31a26c3c96e5c824f06dd00e5`, which matches [freeze record](../04_planning/visual-designs/res-root-page-hero-v1.0/freeze-record.json).
- Formal 1440×1200, 768×1450, and 390×1500 PNG hashes recompute to their freeze values. Each was opened at original detail. The author’s read-only verifier reran with `PASS`; it does not inspect the mobile menu, accessible decorative-media wrapper, active functional-CTA token, or the mobile H1 transform.
- Independent runtime evidence and the complete observed values are in [evidence JSON](RES-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_REVIEW_EVIDENCE_V1.0.json). The repeatable, non-mutating reviewer command is `node pages/resources/05_review/RES-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_REVIEW_VALIDATOR_V1.0.cjs`; it intentionally exits `1` because the candidate has required findings.

## Required findings

### P0-01 — Mobile Global Chrome is absent rather than an operable navigation surface

At 768px and 390px, `Menu` is a button with no `aria-expanded`, no handler/state transition, and no corresponding mobile navigation DOM. Clicking it exposes neither the mandatory eight-item order nor the terminal RFQ. There is also no accessible mobile `Resources` current link. The desktop nav is `display:none`; the only exposed `<nav>` is Breadcrumb.

This fails Global Chrome V0.5’s `Logo | RFQ | Menu` plus same-eight-item Mobile Menu contract, active-viewport current-page semantics, and the required keyboard/focusable mobile navigation path. The source’s desktop-only assertion does not cover it.

Acceptance: consume the approved global mobile menu rather than a local stub; at 768px/390px it must open/close operably, expose the exact navigation order with RFQ terminal, expose exactly one `aria-current="page"` Resources node on the active navigation surface, keep buyer-visible `CURRENT=0`, and return focus/keep the hidden surface inert when closed.

### P1-01 — Filled primary CTA does not use the active functional CTA token

The Hero CTA computes to `rgb(0,169,157)` / `#00A99D` with `rgb(6,43,91)` text. The active accessibility addendum requires every filled Primary CTA to use `#008078` with a white label. Its current contrast is not the issue; it is a direct global-token deviation in a newly revised binding.

Acceptance: use the active filled-primary token and white label, retain the exact label and `#research-paths` target, and evidence the same state at all three required viewports.

### P1-02 — 390px H1 is a squeezed page-private override, not the shared 36px responsive treatment

At 390px the source sets `width:380px; max-width:none; transform:scaleX(.85)` for the H1. Independent runtime confirms the resulting transform matrix and a 323px transformed rectangle inside a 300px text column. The computed `36px/700` check therefore does not prove an undistorted shared H1 layout; the screenshot visibly compresses the type and relies on the Hero’s overflow clipping boundary.

Acceptance: remove the forced 380px width and horizontal transform. Let the exact H1 wrap naturally within the shared mobile text column at `36px`, `700`, no more than three lines, without clipping, overflow hiding, or a page-private responsive override.

### P1-03 — Decorative Hero illustration is exposed as an accessible aside

The desktop illustration wrapper is `<aside aria-label="Decorative research-path illustration">`; only its nested SVG has `aria-hidden="true"`. That creates a named, empty landmark in the accessibility tree despite the binding calling this media purely decorative.

Acceptance: make the entire decorative wrapper non-semantic and `aria-hidden="true"` (or remove the aside/label), while retaining the visible 1440 illustration and its zero-space removal at the approved narrow breakpoint.

## Advisory

### P2-01 — Claimed 900px media breakpoint does not match source

The binding says the decorative illustration is visible only above `900px`, but the source hides it at `max-width:1023px`; independent runtime confirms it is absent at 901px. The required `≤900px` zero-space condition is met, so this does not independently block the H0 transition. Either align the source to the stated 900px breakpoint or amend the next binding to state the intended 1023px hide point and obtain the required responsive decision.

## Verified preservation and non-findings

- The dark treatment is a contained 1200px `hub-dark` Shell; the page field and direct following module stay light. No Hero left teal/green rule was found.
- Exact eyebrow, H1, intro, and Hero label are present. The H0 CTA target is exactly `#research-paths`.
- `Featured`, `Latest`, `ItemList`, RES-ORIGIN card/action, headings, dividers, and placeholders are absent. The first module is directly `Choose the right research path` with the approved three informational panels.
- The illustration is hidden with zero rectangle at 768px and 390px; no document-level horizontal scroll was observed. Visible controls meet the 44px minimum.
- Desktop navigation order, Resources current treatment, and buyer-visible `CURRENT=0` are correct. The approved production SVG paths are used. No child route, inventory, Product relation, body-copy, SEO/GEO, Schema, or publication change was introduced by the candidate source.

## Stop boundary

Only this review report, its JSON observation record, and its repeatable validator were added under `pages/resources/05_review`. No candidate, freeze record, Manifest, progress/control file, review history, or D16 file was modified. This result does not start Gate 6/8, replace the current RES baseline, or close the seven-page workset.
