# CONV-DOC Gate 5 Visual Redesign Full Visual Design V0.5

## 0. Document control

| Field | Value |
|---|---|
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Page type | Utility conversion page |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Review ID | `CONV-DOC-G3-G5-VISUAL-REDESIGN-01` |
| Gate | Gate 5 complete visual and key interaction states |
| Status | `USER_APPROVED / PROJECT_CONTROL_REVIEW_PENDING / NOT_CLOSED` |
| Authority | User-authorized Gate 5 visual rework dated 2026-09-01 |
| Gate ceiling | Gate 5 only |

V0.5 supersedes V0.4 for current visual review because V0.4 was withdrawn for visual-quality rework. V0.4 documents and PNGs remain preserved as history.

## 1. Frozen inputs

1. Approved Gate 1 five-type authority.
2. Current Gate 2 Buyer Clean copy V0.4; Gate 2 is not reopened.
3. Gate 3 wireframe V0.5.
4. Gate 4 visual direction V0.5.
5. PRODUCT V0.3 relationship matrix and approved audits.
6. Current shared Global Chrome.

The supplied design specification and image were used only to calibrate compact density and hierarchy. Their old type count, Market field, turnaround language and other content are not consumed.

## 2. Formal visual assets

| Asset | Logical proof | Rendered pixels | Bytes | SHA-256 |
|---|---|---:|---:|---|
| `assets/CONV-DOC_G5_DESKTOP_1440_VISUAL_REDESIGN_V0.5.png` | Desktop 1440 | 1440 × 2357 | 309193 | `E856BA1CFDB9ABE44AA0A4EBE887BD46601F7DF569BD42AFD74040AD127CA3ED` |
| `assets/CONV-DOC_G5_TABLET_768_VISUAL_REDESIGN_V0.5.png` | Tablet 768 | 768 × 2676 | 271701 | `E78D1931AD5ECB7AC255D7F1F8DF62EF8A17453BD14DF9ABEAEA7FC7C26A5444` |
| `assets/CONV-DOC_G5_MOBILE_390_VISUAL_REDESIGN_V0.5.png` | 390 logical @2× | 780 × 6766 | 584917 | `2F16C1E52C1D032BC7C6A54DCD7C1BADA2EE3D3070D3400C4FD363FBB428670B` |
| `assets/CONV-DOC_G5_MOBILE_390_MENU_OPEN_V0.5.png` | 390 logical @2× | 780 × 1440 | 45816 | `BCB361A515FB3E03FE918E27BAD3B66C2A9DB67A624F5BA3788448831FB0DC4E` |
| `assets/CONV-DOC_G5_INTERACTION_STATES_VISUAL_REDESIGN_V0.5.png` | Interaction states | 1600 × 2536 | 251542 | `B5454E25B023B8E889398EE7F928046DA30F1BD51172C7EBFAA9C2D21DF7372A` |

## 3. Complete visual result

- Compact white Hero with the approved H1 and one action-oriented sentence.
- Horizontal three-step cue at Desktop, Tablet and Mobile.
- One primary form surface rather than nested module cards.
- Editable prefill chips within a compact row; empty/invalid prefill leaves no blank container.
- Two-column field and request-type layout at Desktop and Tablet; one column at 390px.
- Exactly five public request types, eight fields and 14 Product Grades.
- One concise review table followed immediately by privacy and the primary CTA.
- Shared Header, Mobile Menu and Deep Navy Footer remain intact; RFQ is visually subordinate to the page action but permanently available in shared Chrome.

## 4. Document types and scope boundary

The public choices are exactly:

1. Technical Data & Product Documentation
2. Safety Documentation
3. Quality & COA Documentation
4. Origin & Supplier Qualification Documentation
5. Other Documentation

The page does not represent any type as publicly downloadable, available, approved or immediately deliverable. Human review confirms document availability and applicable scope. The success state records receipt only.

## 5. Prefill and PRODUCT V0.3 consumption

Prefill may carry product, application, document-type and contextual origin page values from Products, Applications, Documents and Markets. All values remain editable and do not establish evidence.

M-2377 may be neutrally prefilled with Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate context. Specialty Materials remains `DO_NOT_RENDER`; Rubber is not a category or option. M-996/M-2196 comparisons, equivalence, ranking, replacement and selection claims remain frozen. `NO_PUBLIC_MAPPING` is not treated as not applicable.

## 6. Conditional and validation behavior

| State | Visual and behavioral contract |
|---|---|
| Other only | Additional Requirements becomes required; empty error is `Describe the document you need.` |
| Other + named type | Additional Requirements remains optional; entered text is retained |
| Required-field error | Field-level message plus focusable error-summary link |
| Keyboard focus | Visible amber outer ring with Navy structural edge |
| Personal email | Nonblocking advice; submission remains available |
| Restricted request | Neutral human-review explanation; no approval or availability inference |
| Submitting | Values stay visible; duplicate submission is blocked |
| Failure | Values stay; `Something went wrong`; `Try again` |
| Success | `Document Request Received`; receipt and review boundary; `Return to Documents` |

## 7. Privacy and human-review copy

Terminal privacy sentence:

> We use the information you provide to review and respond to your document request. Learn more in our Privacy Policy.

Only the minimum eight-field dataset is collected. The page asks buyers not to include passwords, payment details, personal identification numbers or confidential formulations in Additional Requirements.

Success does not mean approval or delivery. Its boundary remains: `Document availability and applicable scope are confirmed during review.`

## 8. Responsive and accessibility verification

| Proof | Viewport / output | Scroll width | H1 | Minimum tested target | Result |
|---|---:|---:|---:|---:|---|
| Desktop | 1440 / 1440×2357 | 1440 | 1 | 40px | Pass |
| Tablet | 768 / 768×2676 | 768 | 1 | 40px | Pass |
| Mobile | 390 @2× / 780×6766 | 390 | 1 | 44px | Pass |
| Mobile Menu | 390 @2× / 780×1440 | 390 | N/A | 44px | Pass |
| State board | 1600 / 1600×2536 | 1600 | 1 | 40px | Pass |

Automated checks returned five public types, zero removed-type labels, all 14 Grades, both Other branches, exact success/failure/privacy copy, all four legal labels, zero forbidden RFQ/Market fields, zero internal governance labels and stable 254/500-character stress values. Visual inspection confirmed complete Chrome, readable wrapping, distinct focus/error/success/failure states and no horizontal overflow.

## 9. Visual-quality delta

V0.5 reduces Desktop height from 3720px to 2357px, Tablet from 4312px to 2676px, and Mobile logical height from 4865px to 3383px. It removes step cards, the nested prefill panel and repeated process/review banners. The primary action now follows the compact review rows without an intervening module.

The detailed comparison is recorded in `pages/conversion/02_analysis/CONV-DOC_G3_G5_VISUAL_REDESIGN_DIFFERENCE_V0.1.md`.

## 10. SEO/GEO/Schema boundary

- `NO_PRIMARY_KEYWORD` remains fixed.
- Gate 2 Title, Meta, H1 and Canonical remain the current content input.
- Robots remains a registry/project-control decision.
- Schema remains `WebPage` and `BreadcrumbList` only.
- No file inventory, `DownloadAction`, `Offer`, certification, availability or approval relation is created.

## 11. Shared Chrome and downstream dependencies

Request Documents is not a first-level navigation item. Request a Quote remains visible in Desktop Header, Mobile Header, Mobile Menu, Desktop Footer and Mobile Footer and points to `/request-a-quote/`. Privacy Policy, Terms of Use, Cookie Policy and Cookie Settings are consumed through the shared Footer.

Legal route/settings delivery and operational form delivery are future release dependencies. They do not authorize Gate 6/7 and are not represented as completed implementation in this visual document.

## 12. Review status and stop

| Item | State |
|---|---|
| Project-control review of V0.5 | `OPEN` |
| User approval of V0.5 | `RECORDED / 2026-09-01` |
| Gate 5 closure | `NOT_AUTHORIZED` |
| Gate 6+ | `NOT_AUTHORIZED` |

`CONV-DOC-G3-G5-VISUAL-REDESIGN-01 = USER_APPROVED / PROJECT_CONTROL_REVIEW_PENDING / NOT_CLOSED`.

No Gate 6/7, handoff, development, code, CMS, testing, deployment, release, DNS or indexing action is authorized.

## 13. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.4 | 2026-09-01 | Buyer Clean card-on-card long-form candidate | `REVISION_REQUIRED / SUPERSEDED_FOR_VISUAL_QUALITY_REWORK / PRESERVED` |
| V0.5 | 2026-09-01 | Compact one-surface responsive redesign and condensed state board; user approval recorded | `USER_APPROVED / PROJECT_CONTROL_REVIEW_PENDING / NOT_CLOSED` |
