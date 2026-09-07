# MARKET-BR-PT Gate 4 Independent Final Review V1.0

Date: 2026-09-07. Reviewer role: independent final reviewer; the reviewer did not participate in production and did not edit the candidate. Page: `MARKET-BR-PT`, planning path `/pt-br/markets/brazil/`, `pt-BR`. Frozen candidate: `BRPT-G4-V10-SOURCE-01`.

## Verdict

`REVISION_REQUIRED / NOT_READY_FOR_PROJECT_CONTROL_PASS`

The approved Portuguese content, Gate 3 responsive relationships, language attribution, page identity and operated Menu/Cookie behavior pass. Three required findings remain in the frozen visual layer. Submission remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW`; this report is not user approval or Gate 4 closure.

## Scope and evidence readback

- Recomputed all 51 path/byte/SHA-256 identities reachable from the page evidence index: 51 matched, 0 missing or mismatched.
- Independently compared the candidate `main` content and all main link label/target pairs with the frozen Gate 3 source at 1440, 768 and 390: exact after whitespace normalization.
- Opened the 1440/768/390 full pages, all 16 readable long-page segments, 768/390 Menu states and all three Cookie states. Long Portuguese headings, cards, English receiving-field labels and the long Trade CTA remain readable without clipping.
- Independently operated Menu and Cookie settings at the applicable logical viewports. Menu first focus, reverse/forward wrap, background inerting, body scroll lock, Escape closure and focus return passed. Cookie open, next focus, Escape closure and trigger focus return passed.
- Browser geometry found no page error, horizontal overflow, clipped container or viewport escape. Minimum visible control size was 44×44 CSS px. Inter loaded at all three viewports.
- `html` and `main` are `pt-BR`; shared Header/Footer/Dialog are `en`; seven approved English receiving-field instances carry `lang="en"`. Five modules, three application relationships, exact COO sentence, `06/09/2026` trade handoff and Brazil RFQ list remain complete.
- The planning path and Gate 2 metadata/Schema contract remain referenced planning inputs. No reciprocal hreflang or production-route implementation is claimed.

Machine observations: `observations.json` (`ACTUAL_RUNTIME`, `SOURCE_INSPECTION`, identity readback). The supplied PNGs are `STATIC_VISUAL`; production receivers, routes, consent storage, screen readers, other engines and real devices remain for later implementation and Gate 9.

## Required findings

### BR-PT-G4-IR-01 — Page visual CSS overrides shared Global Chrome

- Location: `MARKET-BR-PT_GATE4_COMPLETE_VISUAL_V1.0.html`, page visual layer after the `MARKET-BR-PT Gate 4 visual layer` marker.
- Expected: the page may assemble `GLOBAL-CHROME-005`, preserve English shared copy and declare Markets current state, but page visual CSS must not alter shared component appearance or behavior.
- Observed: the page visual layer adds `.header { box-shadow: ... }` and changes `.legalUtilities` gap at Mobile.
- Impact: the localized page creates Header/Footer presentation differences outside the shared owner.
- Severity: required Gate 4 contract correction.
- Acceptance: remove page-specific rules targeting shared Header/Footer/Menu/Cookie selectors, retain the unchanged owner rendering, create a new frozen identity, and rerun three full pages plus affected shared-state checks.

### BR-PT-G4-IR-02 — Hero primary CTA uses the prohibited low-contrast teal pairing

- Location: Hero `Solicitar cotação` at 1440, 768 and 390.
- Expected: the active global CTA addendum requires filled Primary CTA buttons to use `#008078` with white text; normal-size text must meet 4.5:1.
- Observed: the Hero override uses white on `#00A99D`, measured `2.932:1` at 16px/600. The final page CTA correctly uses white on `#008078` at `4.818:1`.
- Impact: the primary Hero action fails the approved global token and normal-text contrast requirement.
- Severity: required accessibility and brand correction.
- Acceptance: use `#008078` with white text or another explicitly approved compliant pairing, verify normal/hover/focus states at all three viewports, regenerate affected evidence and bind it to the new freeze.

### BR-PT-G4-IR-03 — Yellow focus ring disappears on white and pale page surfaces

- Location: `main :is(a,button):focus-visible`; application, document and RFQ modules at all three viewports.
- Expected: focus indication must have at least 3:1 contrast against the adjacent surface; the active addendum assigns `#008078` to focus indicators on white/light surfaces.
- Observed: the page visual layer sets `#FFD166` for every main focus ring. Measured contrast is `1.442:1` on white, about `1.330:1` on the pale document surface and about `1.302:1` on the sand RFQ surface.
- Impact: keyboard focus is difficult to locate across most of the page.
- Severity: required accessibility correction.
- Acceptance: use the approved light-surface focus color and a separately verified dark-surface treatment where needed; operate representative links/buttons in each surface family at 1440, 768 and 390 and preserve the results under a new freeze.

## Passed and non-blocking boundaries

Portuguese wrapping, English-destination notice, English-field language markers, card relationships, touch targets, Menu/Cookie operation, local RFQ context and buyer-clean limits passed. EN/PT keep separate visual compositions without crossing language ownership or requiring the same layout. No content, factual, route or canonical/hreflang implementation change is requested by these findings.

