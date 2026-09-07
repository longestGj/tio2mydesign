# MARKET-UK-001 Gate 3 Responsive Wireframe Specification V0.1

> Historical notice: this V0.1 initial draft is superseded by `MARKET-UK-001_GATE3_WIREFRAME_SPEC_V0.2.md` after `MARKET-UK-001-G3-PCR-02`. It was produced under the user's Gate 3 authorization and was never an approved Gate 3 baseline.

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `MARKET-UK-001` / `/markets/united-kingdom/` |
| Version / date | V0.1 / 2026-09-05 |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Gate 1 | `CONTENT_INTENT_CONFIRMED_WITH_REVISIONS / USER_APPROVED / CLOSED` |
| Gate 2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 3 | `HISTORICAL / SUPERSEDED / NOT_CURRENT` |
| Gate 4–10 | `LOCKED / NOT_AUTHORIZED` |
| Review ID | `MARKET-UK-001-G3-PCR-02 = CONDITIONAL_RETURN`; current response is V0.2 |
| User authorization | Gate 3 authorized 2026-09-05; Gate 4 not authorized |
| Visual basis | MARKET-EU-001 responsive HTML and local Playwright workflow reused as the sibling Market-page structural precedent; styling remains low-fidelity and is not Gate 4 approval |

## 1. Wireframe set

One responsive HTML source produces three complete Buyer Clean page proofs plus the required Mobile Menu-open/focus state.

| Proof | Dimensions | File |
|---|---:|---|
| Desktop | 1440 × 8213 | `market-uk-001/v0.1/MARKET-UK-001_GATE3_DESKTOP_1440_V0.1.png` |
| Tablet | 768 × 10760 | `market-uk-001/v0.1/MARKET-UK-001_GATE3_TABLET_768_V0.1.png` |
| Mobile | 390 × 14758 | `market-uk-001/v0.1/MARKET-UK-001_GATE3_MOBILE_390_V0.1.png` |
| Mobile Menu open + Close focus | 390 × 844 | `market-uk-001/v0.1/MARKET-UK-001_GATE3_MOBILE_MENU_OPEN_FOCUS_390_V0.1.png` |

Responsive source:

`market-uk-001/v0.1/MARKET-UK-001_GATE3_RESPONSIVE_WIREFRAME_V0.1.html`

The HTML is a planning-only visual source. It is not WordPress, Next.js, CMS or production code and is not a Gate 7 handoff.

## 2. Locked page sequence

The user-approved Gate 2 V0.4 sequence is unchanged:

1. Shared Header.
2. Breadcrumb.
3. Supplier-led Hero.
4. Direct Answer.
5. Five Application paths.
6. Six Representative Grades.
7. Great Britain / Northern Ireland decision.
8. Six-step Procurement Checklist.
9. Documents.
10. Malaysia Origin.
11. Evergreen Trade check.
12. Six Buyer Questions.
13. Final RFQ.
14. Shared Footer.

No Buyer Clean section, heading, paragraph, card label, question, answer or action is shortened with placeholder text or an ellipsis.

## 3. Responsive contract

### Desktop 1440

- Maximum body width is 1200px.
- Hero and final RFQ use an 8/4 or 7/5 editorial split.
- Applications use a 3+2 card rhythm; Representative Grades and GB/NI use paired panels.
- Procurement uses a 3×2 grid; Documents use a 2×2 grid; Buyer Questions use a 4/8 split.
- Shared Header is 84px with visible Home text, Markets underline/current semantics and fixed RFQ.

### Tablet 768

- Content uses 32px side padding and independently reflows rather than shrinking the Desktop grid.
- Hero text and actions stack.
- Applications, Procurement and Documents retain two columns only where copy remains legible.
- Grade category panels and GB/NI panels stack.
- Shared Header uses the approved 64px compact pattern: Logo, RFQ, Menu.

### Mobile 390

- Content width is 358px with 16px side padding.
- All content modules are single-column; GB and NI remain separate, complete cards.
- Body and question/answer text render at 16px with approximately 28px line height; labels and actions are at least 14px.
- Every visible link, button and disclosure target measures at least 44px high.
- Long H1, GB/NI labels, official-source labels and CTA text wrap naturally.
- Client width, document scroll width and body scroll width all equal 390px; no horizontal scrolling or clipping is present.

## 4. Content and relationship checks

- H1: `Malaysia-Origin Titanium Dioxide for United Kingdom Buyers`.
- Five Application paths: Coatings, Plastics, Masterbatch, Printing Inks and Paper.
- Six Representative Grades only: M-350, M-510 and M-896 under Coatings; M-200, M-108 and M-210 under Plastics and Masterbatch.
- The module presents approved global PRODUCT V0.3 discovery relationships only; it contains no UK-specific recommendation, process label, ranking, comparison, availability or registration claim.
- The exact sentence `A Certificate of Origin is available upon request.` appears once, in Documents.
- Great Britain and Northern Ireland remain separate visible assessment paths with the approved UK REACH / GB CLP and EU REACH / EU CLP wording.
- Buyer Questions contain six question/answer pairs; all answers remain in initial semantic HTML.

## 5. Conditional-state and Buyer Clean contract

- Evergreen Trade guidance and two official-source links render in the default frame.
- The dated `Trade context checked 5 September 2026` paragraph does not render in this default candidate because a same-day freshness confirmation has not been supplied for the Gate 3 render.
- The internal Trade Update action does not render because approved current content plus route readiness has not been supplied.
- Removing those two conditional elements leaves no blank card, empty divider or abnormal space.
- No internal Gate, route, evidence, Schema, review, pending, Hold or implementation label appears in Buyer Clean.
- No content image or image placeholder is present; only the approved shared Header/Footer logos render.
- All final-reader actions remain visible as approved Gate 2 design targets; this does not assert that any candidate route is live.

## 6. Interaction and accessibility proof

- Desktop and Mobile navigation surfaces each carry at most one `aria-current="page"`; Markets is the current item without visible `CURRENT` text.
- At Desktop, the exposed primary-navigation surface has one current item.
- At Mobile Menu-open, the exposed menu has eight links, one Markets current item, an accessible Close control, `aria-expanded=true`, body-scroll lock and programmatic focus on Close.
- `#application-paths` and `#representative-grades` are unique, focusable targets with fixed-header scroll margin.
- Buyer Questions use native `details`/`summary`; two expanded and four collapsed states are visible in the full proofs while all answer text remains semantic.
- Global `:focus-visible` treatment supplies a 3px teal outline with 3px separation.

## 7. Rendering validation

Fresh local Playwright validation on 2026-09-05 returned:

| Viewport | Client / scroll width | H1 | H2 set | Applications | Grades | GB / NI | Buyer Questions | Short targets | Result |
|---|---|---:|---|---:|---:|---:|---:|---:|---|
| 1440 | 1440 / 1440 | 1 | 10/10 | 5 | 6 | 1 / 1 | 6 | 0 | PASS |
| 768 | 768 / 768 | 1 | 10/10 | 5 | 6 | 1 / 1 | 6 | 0 | PASS |
| 390 | 390 / 390 | 1 | 10/10 | 5 | 6 | 1 / 1 | 6 | 0 | PASS |

Additional checks:

- exact COO sentence count: 1;
- dated Trade paragraph visible: 0;
- Trade Update action visible: 0;
- buyer-visible uppercase `CURRENT`: 0;
- approved primary Logo references: 2 per DOM fixture;
- approved reverse Logo references: 1;
- Mobile Menu-open: 8 links, 1 current item, Close focused, scroll locked, right edge = 390px.

## 8. Open items and Gate boundary

| ID | Item | Status | Impact |
|---|---|---|---|
| `MARKET-UK-001-G3-PCR-01` | Initial Gate 3 responsive-wireframe draft submission | `HISTORICAL / SUPERSEDED_BY_PCR-02` | Initial candidate only; it was not user-approved |
| `UK-G1-04` | Runtime route readiness | `OPEN / LATER_GATE_ROUTE_DEPENDENCY` | Does not remove Gate 2–5 final-reader actions; Gate 8 implements and Gate 9/10 verifies or blocks release |
| `UK-G1-05` | RFQ receiver and runtime workflow | `OPEN / LATER_GATE_CONVERSION_DEPENDENCY` | Same later-Gate boundary |
| `UK-R01–UK-R07` | Existing claim, market, trade, product, route and origin controls | OPEN as already recorded | Unchanged by Gate 3 |

This V0.1 package is historical and superseded by V0.2. Gate 3 remains unapproved under `MARKET-UK-001-G3-PCR-02`; Gate 4–10, another Market child page, development handoff, implementation, deployment, publication, DNS and indexing remain locked and unauthorized. `D:\16Wordpress_nextjs` was not accessed.

## 9. Change record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-05 | Created the 1440, 768 and 390 complete responsive wireframes plus Mobile Menu-open/focus proof from the approved Gate 2 V0.4 baseline and shared Global Chrome V0.5. | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| V0.1 authorization record | 2026-09-05 | Recorded that Gate 3 was authorized for responsive-wireframe execution; V0.1 remained a review draft and Gate 4 was not authorized. | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| V0.1 supersession notice | 2026-09-05 | V0.1 was superseded after the P0-01 Footer legal-utility return. | `HISTORICAL / SUPERSEDED_BY_V0.2` |
