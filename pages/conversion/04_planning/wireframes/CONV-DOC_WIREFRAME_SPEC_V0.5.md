# CONV-DOC Gate 3 Visual Redesign Wireframe Specification V0.5

> Historical-status note — 2026-09-03: V0.5 is preserved for provenance but is no longer a current authority input. Its Mobile terminal-action order is superseded by `CONV-DOC_WIREFRAME_SPEC_V0.6.md`. Status: `HISTORICAL / SUPERSEDED_FOR_COUNTRY_PRIVACY_BINDING`.

## 0. Control

| Field | Value |
|---|---|
| Review ID | `CONV-DOC-G3-G5-VISUAL-REDESIGN-01` |
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Status | `HISTORICAL / SUPERSEDED_FOR_COUNTRY_PRIVACY_BINDING` |
| Scope | Historical Gate 3 evidence; not part of the current authority set |
| Input | Current Gate 2 Buyer Clean copy V0.4 and five-type contract |
| Reference use | Density and hierarchy reference only; no factual or field import |

V0.5 replaces the V0.4 wireframe as the current Gate 3 review candidate. V0.4 remains preserved as historical evidence of the rejected card-on-card direction.

## 1. Structural objective

The page must read as one compact controlled-request workflow, not as a stack of dashboard cards. The wireframe therefore uses:

1. a concise white Hero;
2. one horizontal three-step progress cue;
3. one primary form surface;
4. compact editable prefill chips when valid context exists;
5. paired fields at Desktop and Tablet widths;
6. compact two-column request-type choices at Desktop and Tablet;
7. one concise review table;
8. one terminal privacy-and-submit row;
9. inherited Global Footer.

No extra process explainer, minimum-information banner, review strip or nested module card is allowed between these sections.

## 2. Desktop 1440px wireframe

| Region | Layout rule |
|---|---|
| Shared Header | Inherited 84px Desktop Header; Request Documents is not a first-level item; RFQ remains persistent |
| Breadcrumb | One low-height row above Hero |
| Hero | Single content column, approximately 1120px max width; eyebrow, H1 and one sentence only |
| Stepper | Three equal horizontal nodes: Your Details, Request Details, Human Review |
| Form surface | One 1120px white surface; no nested module-level panels |
| Prefill | One compact row with editable/removable chips; absent or invalid values leave no empty panel |
| Buyer details | Two-column field grid |
| Request details | Product Grade and Application / Industry paired; document choices in two columns; Additional Requirements full width |
| Review | Four compact label/value rows, not a separate card |
| Terminal action | Privacy sentence left; primary Request Documents button right |
| Footer | Inherited Deep Navy Footer with persistent RFQ and four legal entries/settings controls |

The primary CTA must be visible before the Footer without another explanatory module below it.

## 3. Tablet 768px wireframe

- Retain the horizontal stepper.
- Retain a true two-column field and request-type grid where text remains readable.
- Keep the form as one surface with reduced side padding.
- The terminal privacy and CTA row may stack only when the available inline width cannot preserve the button and privacy copy without compression.
- Footer columns reflow using the shared component rules.
- No horizontal overflow is permitted.

## 4. Mobile 390px wireframe

- Use the inherited 64px Mobile Header.
- Keep the three step nodes horizontal; hide their secondary captions while retaining the step names.
- Use one field column and one request-type column.
- Make the submit button full width and place it before the privacy sentence in visual order while preserving accessible reading order.
- Maintain at least 44px logical touch height for controls, chips, legal links and menu actions.
- Do not create post-button dead space or an empty prefill container.
- Full-page logical height target: no more than 3800px with the approved long-copy stress case.

## 5. Mobile Menu open

The open-menu proof consumes the approved shared Mobile Menu unchanged. It includes all shared navigation items and a permanently visible Request a Quote action linked to `/request-a-quote/`. Request Documents is not added to first-level navigation.

## 6. Fixed content and behavior contract

The wireframe does not alter the frozen content architecture:

- exactly five public document types;
- exactly eight fields;
- Product Grade is one required 14-value selector;
- valid prefill is editable and removable;
- empty/invalid prefill creates no ghost content;
- Other-only makes Additional Requirements required;
- Other plus a named type keeps Additional Requirements optional;
- Country / Region records contact or company location only;
- personal email advice is nonblocking;
- no Market/Destination, RFQ, availability, approval, download or delivery promise.

## 7. Required states and long-content proof

Gate 5 must visually prove normal, editable prefill, no prefill, restricted request, personal-email advice, focus, field error, focusable error summary, Other-only validation, Other-plus-named behavior, submitting, retry, submission failure, success, privacy and human-review boundaries.

Long-content stress uses the full 14-grade selector, a 254-character email value and 500-character Additional Requirements value. The test cannot be replaced with short placeholders.

## 8. Gate 3 verification and open decision

| Check | Result |
|---|---|
| 1440 / 768 / 390 structures defined | Pass |
| Horizontal stepper at all widths | Pass |
| One primary form surface | Pass |
| Desktop/Tablet paired layout | Pass |
| Mobile single-column layout | Pass |
| Shared Header/Footer/RFQ boundary | Pass |
| Gate 1/2 reopened | No |
| Project-control approval | Open |
| User approval | Recorded 2026-09-01 |

`Gate 3 V0.5 = HISTORICAL / SUPERSEDED_FOR_COUNTRY_PRIVACY_BINDING`. Its prior user decision remains preserved for that exact version. Gate 6+ is not authorized.
