# PRODUCT-000 Gate 7 Responsive / Accessibility / Interaction Acceptance V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `PRODUCT-000` / `/products/` |
| Date | `2026-08-31` |
| Review ID | `PRODUCT-000-G7-PCR-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Visual source | Desktop V0.17 and 390px Mobile V0.16 |

Static PNGs define visual targets. Gate 8 must implement responsive semantics; Gate 9 must verify runtime behavior.

## 1. Required viewport evidence

| Viewport | Required acceptance evidence |
|---|---|
| 1440px Desktop | Full page, Header/Footer, Hero split, Selector work area, Process 2/1/0, directory 2×2, five Evaluation cards, Support 3/2/1/0, FAQ 1+4 and final RFQ |
| 1024px Tablet | Reflow without text compression, card overlap or horizontal scroll; navigation may switch to Menu pattern when necessary |
| 768px Tablet | Stacked/2-column behavior with all real copy and complete controls |
| 390px Mobile | Exact logical viewport; 780px approved proof is 2× only; no horizontal overflow; all targets at least 44×44 logical px |

Breakpoint values are implementation choices. Required behavior, content order and visual hierarchy are not optional.

## 2. Responsive module behavior

| Module | Desktop | Tablet | 390px Mobile |
|---|---|---|---|
| Global Header | 84px reference shell, full nav, 180×60 Logo asset box, fixed RFQ | Preserve readable nav or switch to Mobile Menu pattern | Logo 120×40 box; RFQ; Menu; all 44px targets |
| Breadcrumb | Single readable row | Wrap only between items | No clipping; current item readable |
| Hero | Approximate 7/5 copy/summary split; CTA row | Two columns while readable, otherwise stack | One column; primary before contextual RFQ; no large CTA terminal gap |
| Selector | Left controls / right results work area | Reflow controls above results as needed | Six controls in two columns, Not Sure full width; independent 44px controls |
| Process | Two equal cards; one restrained card; zero removes module | Two columns or stacked complete cards | Stacked complete cards; zero 0px closure |
| Directory | Four content-height groups in 2×2 grid | Two columns where copy remains readable | One column; grade/action first row, full summary below; no truncation |
| Evaluation | Five equal compact cards in one row | 3+2 or 2+2+1 | One ordered vertical list |
| Support paths | Three balanced cards | 2+1 or stacked | Complete stacked cards; zero 0px closure |
| FAQ | Full-width rows, one reference expansion | Full-width | Full-width, multi-line questions |
| Final RFQ | Copy/action split | Stack if needed | Single column; 24–32px between CTA and module boundary |
| Footer | Multi-column Deep Navy | Balanced reflow | Stacked sections; `PROCUREMENT` and RFQ complete |

No horizontal carousel is permitted for Selector, Process, directory, Evaluation, Support or FAQ.

## 3. Selector interaction

- Implement controls as semantic buttons or a radio-like group with an accessible group label.
- Each control has programmatic name, selected state and visible non-colour selected indicator.
- Keyboard order follows visual order: Coatings, Plastics, Masterbatch, Printing Inks, Paper, Specialty Materials, Not Sure, results.
- Enter/Space activates; arrow-key behavior is required only if using true radio semantics.
- Result heading announces the selected Application and count.
- Dynamic results use a polite live-region strategy that does not repeat the full page or steal focus.
- Focus remains on the selected control unless the user explicitly chooses to move to results.
- Interaction failure exposes a short accessible message and preserves access to the complete directory.
- No selection or error creates a URL, redirect, reload, crawlable parameter or hidden recommendation.

Required states: default/Coatings, each of the other five Applications, Not Sure, no-result contract, loading only if unavoidable, error/failure, keyboard focus and selected+focus.

## 4. FAQ interaction and initial DOM

- Exactly five disclosure buttons.
- Each button exposes `aria-expanded` and `aria-controls` and controls one uniquely identified answer region.
- All five exact answers are present in initial server-rendered DOM; collapsing changes visibility only.
- Baseline visual state is one expanded and four collapsed; multiple-open behavior is acceptable only if layout and semantics remain clear.
- Enter/Space toggles; focus remains on the control.
- Plus/minus icon is decorative and not the only state indication.
- Heading text is the accessible name; no generic “expand” label without question context.
- With JavaScript unavailable, answers remain available as readable content.

## 5. Mobile Menu

- Menu control has accessible name and expanded state.
- Open state exposes the same primary navigation order as Desktop.
- Products current state uses text/weight/structural marker, not colour only.
- `Request a Quote` remains the final action and is never hidden because body routes are unavailable.
- When implemented as a modal/drawer, focus enters the menu, remains within it, returns to the trigger on close and closes with Escape.
- Background content must not remain keyboard-interactive while a modal menu is open.
- Menu rows, close control, RFQ and Logo/Home action meet 44×44 logical target size.

## 6. Keyboard and focus

- Logical order: skip link → Header → Breadcrumb → Hero actions → Selector → Process → directory → Evaluation/support → FAQ → final RFQ → Footer.
- Every interactive element has a visible focus indicator meeting current brand component contrast.
- Hover is never required for discovery or completion.
- Focus styles must not be clipped by rounded cards, overflow containers or sticky shells.
- Conditional module removal must also remove hidden links from the focus order.
- Re-rendering Selector results must not reset the user to the top of the page.

## 7. Semantic structure

- One H1 only.
- Major modules use ordered H2s; card titles/questions use the next logical level without skipping for appearance.
- Navigation areas have distinct accessible labels where multiple nav landmarks exist.
- Breadcrumb uses an ordered list and current-page semantics.
- Grade directory may use lists or grouped structures; group headings and row relationships must remain programmatic.
- `View Grade` link accessible name must include or be associated with its grade, for example `View M-350 grade`.
- External-looking arrows are decorative; links remain understandable without them.

## 8. Colour, text and Logo

- Body text and controls must meet WCAG AA contrast for their size.
- `#00A99D` is not used for small white text or as the sole communication channel.
- Products current, selected Selector, FAQ expansion, focus and error states do not depend on colour alone.
- Production SVG Logo uses the exact Manifest asset; accessible name `TiO2 Malaysia`.
- A linked Logo may go Home but does not replace the visible Home nav item.
- Decorative icons/marks are hidden from assistive technology; meaningful icons receive text equivalents.

## 9. Long-copy and overflow acceptance

- No text clipping, ellipsis or fixed-height crop for the fourteen exact summaries.
- Desktop one-line summaries align with grade/action; multi-line summaries retain readable line height.
- Mobile summaries wrap fully inside the card with no CTA collision.
- M-896, M-200, M-108, M-340 and CR-901 long strings receive explicit visual inspection.
- The long H1, Process titles, five FAQ questions and Evaluation titles wrap without overlap.
- At 390px, `document.documentElement.scrollWidth` must not exceed viewport width after accounting for browser rounding.
- Conditional Process/Support removal and route-state changes leave one normal section gap, not accumulated blank bands.

## 10. Motion and state changes

- Respect `prefers-reduced-motion` for non-essential transitions.
- No information is conveyed only through animation.
- Selector and FAQ state changes must be immediate enough to preserve context and must not trigger layout jumps that hide the active control.
- Loading indicators, if needed, include accessible status text and cannot replace persistent access to the directory.

## 11. Gate 9 acceptance checklist

- [ ] 1440, 1024, 768 and 390 screenshots/video evidence captured.
- [ ] No horizontal overflow at all required viewports.
- [ ] All Mobile interactive targets at least 44×44 logical px.
- [ ] Keyboard-only completion recorded.
- [ ] Focus states visible and unclipped.
- [ ] Mobile Menu focus/close/return behavior verified.
- [ ] Six Selector states, Not Sure, failure and result announcements verified.
- [ ] Five FAQ answers confirmed in initial HTML/DOM.
- [ ] FAQ button/region ARIA relationships valid.
- [ ] Process 2/1/0 and Support 3/2/1/0 closure verified.
- [ ] Fourteen summaries show complete exact strings.
- [ ] Header/Footer fixed RFQ and `PROCUREMENT` verified.
- [ ] Reduced-motion and no-hover dependency verified.

Any failed runtime item is returned to Gate 8 for correction. Gate 9 review is read-only and must not modify implementation.

