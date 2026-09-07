# MARKET-BR-EN Gate 4 Independent Final Review V1.0

Date: 2026-09-07. Reviewer role: independent final reviewer; the reviewer did not participate in production and did not edit the candidate. Page: `MARKET-BR-EN`, `/markets/brazil/`, EN. Frozen candidate: `BR-EN-G4-V10-SOURCE-01`.

## Verdict

`REVISION_REQUIRED / NOT_READY_FOR_PROJECT_CONTROL_PASS`

The approved content, Gate 3 responsive relationships, page identity and operated Menu/Cookie behavior pass. Two required findings remain in the frozen visual layer. Submission remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW`; this report is not user approval or Gate 4 closure.

## Scope and evidence readback

- Recomputed all 32 path/byte/SHA-256 identities reachable from the page evidence index: 32 matched, 0 missing or mismatched.
- Independently compared the candidate `main` content and all main link label/target pairs with the frozen Gate 3 source at 1440, 768 and 390: exact after whitespace normalization.
- Opened the 1440/768/390 full pages, all 16 readable long-page segments, 768/390 Menu states and all three Cookie states.
- Independently operated Menu and Cookie settings at the applicable logical viewports. Menu first focus, reverse/forward wrap, background inerting, body scroll lock, Escape closure and focus return passed. Cookie open, next focus, Escape closure and trigger focus return passed.
- Browser geometry found no page error, horizontal overflow, clipped container or viewport escape. Minimum visible control size was 44×44 CSS px. Inter loaded at all three viewports.
- The five modules and three application relationships remain ordered and complete. Exact COO, dated trade handoff, one-Grade document logic, Brazil RFQ list and local-simulation context are preserved without a local-operation or trade-outcome claim.

Machine observations: `observations.json` (`ACTUAL_RUNTIME`, `SOURCE_INSPECTION`, identity readback). The supplied PNGs are `STATIC_VISUAL`; production receivers, routes, consent storage, screen readers, other engines and real devices remain for later implementation and Gate 9.

## Required findings

### BR-EN-G4-IR-01 — Page visual CSS overrides shared Global Chrome

- Location: `MARKET-BR-EN_GATE4_COMPLETE_VISUAL_V1.0.html`, final `gate4-complete-visual` style block.
- Expected: the page may assemble `GLOBAL-CHROME-005` and declare Markets current state, but page visual CSS must not alter shared Header/Footer appearance or behavior.
- Observed: the page visual layer adds `.header { box-shadow: ... }` and adds transition/hover/background/transform/shadow rules to `.headerRfq` and `.footerRfq` together with the page CTA.
- Impact: the page creates a shared-component visual fork and makes Header/Footer CTA behavior depend on this page source.
- Severity: required Gate 4 contract correction.
- Acceptance: remove all page-specific visual-layer rules that target shared Header/Footer/Menu/Cookie selectors. Consume the unchanged owner rendering, create a new frozen identity, and rerun three full pages plus affected Menu/Cookie/shared-assembly checks. A shared-owner change, if desired, must go to that owner instead of this page.

### BR-EN-G4-IR-02 — Keyboard focus indicator is below 3:1 on the navy Documents surface

- Location: main Documents module `.m3`; links such as `Request Documents` and `View Document Hub`; all three viewports.
- Expected: a visible keyboard focus indicator with at least 3:1 contrast against its adjacent surface.
- Observed: computed outline `#008078` against `#062B5B` is `2.897:1`. The same `main a:focus-visible` rule is used on both light and dark surfaces.
- Impact: keyboard users may not reliably see focus in the dark document section.
- Severity: required accessibility correction.
- Acceptance: add an approved dark-surface focus treatment of at least 3:1 while retaining the approved light-surface treatment; verify actual keyboard focus at 1440, 768 and 390, regenerate affected evidence and bind it to the new freeze.

## Passed and non-blocking boundaries

Primary filled page CTAs use white on `#008078` at `4.82:1`. Copy, links, module order, three-card-to-single-stack conversion, touch targets, Menu/Cookie operation, planning canonical metadata, local `noindex,nofollow`, and buyer-clean boundaries passed. The bilingual counterpart was checked for responsibility overlap only; no identical layout was required.

