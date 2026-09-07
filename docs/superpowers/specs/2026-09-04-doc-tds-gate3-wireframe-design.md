# DOC-TDS Gate 3 Responsive Wireframe Design Specification

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Design decision | `APPROACH A / DECISION-FIRST` |
| Decision date | `2026-09-04` |
| Decision source | User selected `A` in the project-control conversation |
| Gate 2 authority | `DOC-TDS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md` |
| Gate 3 status | `DESIGN APPROACH USER-APPROVED / SPECIFICATION REVIEW` |
| Gate ceiling | Gate 3 only; Gate 4–10, development and publication remain unauthorized |

This specification converts the approved Buyer Clean copy into a Gate 3 responsive structure. It does not change the approved copy, SEO/GEO scope, evidence controls, request transport contract or shared Global Chrome.

## 1. Design objective

Create a decision-first technical-document page that helps a buyer:

1. understand the difference between TDS, SDS and COA;
2. choose one or more document types without implying availability;
3. optionally add one primary Product Grade as editable request context;
4. compare the three document types and prepare useful request details;
5. continue to the separately owned Request Documents workflow.

The page remains an information and request-entry page. It is not a public document library, download centre, availability catalogue or embedded request form.

## 2. Locked module order

Shared Header precedes the page body and Shared Footer closes it. The approved ten-module body order remains:

`Hero → Direct Answer → Document Choice → Product Grade → Comparison → Request Checklist → Request Process → Buyer Questions → Related Document Paths → Final CTA`

No module may be omitted at 1440px, 768px or 390px.

## 3. Interaction model

### 3.1 Document types

- TDS, SDS and COA are three semantic checkbox choices.
- The buyer may select one, two or all three.
- No document type is selected by default.
- The fourth approved content block, `Multiple document needs`, is an explanatory card in the same section, not a fourth document type and not a select-all control.
- Selected styling must not imply document availability, approval, applicability, currentness or delivery.

### 3.2 Product Grade

- Product Grade is one semantic select/dropdown.
- The prompt is `Choose a Grade` and is not a valid Grade.
- Exactly the 14 approved Grade values appear.
- No valid Grade is selected by default.
- Grade selection is optional on this information page and remains editable/removable on the Request Documents form.
- The page must not expose a multi-Grade selector. Additional Grades remain buyer-provided supporting context in the receiving form.

### 3.3 Request action

- The visible primary label remains `Request TDS, SDS or COA`.
- The action remains visible in the Hero, after the choice/Grade context block and in the Final CTA.
- The action may continue with no preselection, one or more document types, one Grade, or both.
- Any valid selections are passed as buyer-editable prefill to `/request-documents/` under the approved contract.
- The page does not validate receiving-form required fields.
- If the route/action is not eligible, the visible action and its Schema relationship are removed together; no disabled button or automatic Contact fallback appears.

### 3.4 FAQ

- All five approved questions remain visible as disclosure buttons.
- Answers default collapsed.
- One expanded answer may be shown in Gate 3 evidence to prove document-flow expansion.
- Expanded state and focus direction must be programmatically expressible in later implementation.

## 4. Desktop — 1440px

- Consume the shared 84px Header and a 1200–1240px body working area.
- Hero uses a restrained two-column composition: approved copy and CTAs at left; a neutral TDS/SDS/COA decision key at right.
- The decision key is a structural information device, not a file preview, availability signal or downloadable-document card.
- Direct Answer is a compact full-width answer band immediately below Hero.
- Document Choice displays four equal-height cards in one row where space permits: three checkbox cards plus the explanatory Multiple document needs card.
- Product Grade follows as a two-column context band: explanation at left; complete field/helper/action panel at right.
- Comparison remains a semantic four-column table: Dimension, TDS, SDS, COA.
- Request Checklist uses two balanced columns while preserving reading order.
- Request Process uses four horizontally connected steps.
- Buyer Questions uses a full-width accordion list.
- Related Document Paths uses three equal cards.
- Final CTA uses a compact dark band with primary and secondary actions visible.

## 5. Tablet — 768px

- Consume the shared 64px compact Header.
- Hero stacks copy before the decision key; CTAs remain visible without horizontal overflow.
- Direct Answer remains full width.
- Document Choice becomes a 2 × 2 card grid.
- Product Grade becomes one column: explanation first, complete field/helper/action panel second.
- Comparison remains a semantic table only if every column is readable without horizontal page scrolling; otherwise it uses the approved card transformation described for Mobile.
- Request Checklist uses two columns when each item remains readable; it falls back to one column before crowding.
- Request Process becomes a vertical or two-by-two sequence without changing step order.
- FAQ, Related Paths and Final CTA retain all content and actions.
- Primary controls and disclosure buttons are at least 44px high.

## 6. Mobile — 390px logical

- Export may use 780px physical width only when labelled `390px logical @2x`.
- Consume the shared 64px Mobile Header in `Logo | RFQ | Menu` order.
- Page body is a single column with no carousel, clipped copy, text clamp or horizontal page overflow.
- Hero CTAs stack full width.
- The decision key becomes three compact rows rather than three narrow columns.
- Document Choice cards stack: TDS, SDS, COA, Multiple document needs.
- Product Grade field and request action are full width.
- The comparison table transforms into three document cards. Each card repeats the four approved dimensions so that document-to-dimension relationships remain explicit.
- Request Checklist is one list.
- Request Process is a vertical four-step sequence.
- FAQ remains a compact disclosure list.
- Related Document Paths stack in the approved order: REACH, Certificate of Origin, Document Hub.
- Final CTA actions stack full width.
- Footer closes the page without abnormal empty space.

## 7. Required Gate 3 evidence

| Asset | Required evidence |
|---|---|
| Desktop full page | 1440px complete initial state |
| Tablet full page | 768px complete initial state |
| Mobile full page | 390px logical complete initial state; 780px physical export allowed at 2× |
| Mobile Menu | 390px logical open state with Documents active treatment |
| Selection state board | Initial; one document type plus Grade; multiple document types with no Grade |
| FAQ proof | One expanded answer in document flow |

Review annotations such as `Gate 3`, state names, measurements and evidence notes may appear only outside the Buyer Clean page frame or on a separate review board.

## 8. Shared visual and chrome constraints

- Current navigation key is `Documents`.
- Header, Mobile Header, Mobile Menu and Footer consume Global Chrome V0.5 without redesign or page-level forking.
- Use the exact production TiO2 Malaysia logo asset.
- Wireframes are grayscale structural evidence; Gate 4 visual styling is not authorized.
- Preserve the industrial B2B hierarchy and the future Navy/Teal visual direction without turning the wireframe into a visual design.
- No factory photo, certificate image, fake PDF thumbnail, inventory table, download action or decorative stock image.

## 9. Content and evidence constraints

- Use the complete approved Buyer Clean text at realistic length; no lorem ipsum or shortened placeholder copy.
- Do not show filenames, revisions as available records, file counts, previews or public downloads.
- Do not create a Grade-to-document availability matrix.
- Do not infer SDS or COA availability from TDS evidence.
- Do not show internal Gate, Claim Register, Evidence Hold, allowlist, normalization, eligibility, fail-closed or Schema-parity language inside Buyer Clean frames.
- Conditional Related Paths and Request actions are shown as the intended complete-site experience, while their later implementation remains subject to approved route eligibility and Gate 7 dependency registration.

## 10. Accessibility and resilience

- All primary controls, checkbox cards, links and disclosure buttons have at least a 44px interactive target at Tablet and Mobile.
- Selected state is not communicated by color alone.
- Visible focus direction is included in the interaction specification.
- Long Grade names, headings, FAQ questions and CTA labels wrap without collision.
- Comparison relationships remain understandable after the Mobile card transformation.
- Shared inactive navigation surfaces do not enter the active accessibility tree in later implementation.
- Full-page evidence must show no horizontal overflow or unexplained vertical gaps.

## 11. Alternatives considered

| Approach | Disposition | Reason |
|---|---|---|
| A — Decision-first | `USER SELECTED` | Balances buyer education, controlled prefill and responsive clarity without turning the page into a form |
| B — Comparison-first | Rejected | Places a dense table too early and produces a heavier Mobile opening |
| C — Request-first | Rejected | Risks confusing DOC-TDS information ownership with the CONV-DOC form workflow |

## 12. Acceptance boundary

Approval of this specification authorizes production of the Gate 3 wireframe package only. It does not approve the resulting wireframes, close Gate 3, authorize Gate 4, modify `D:\16Wordpress_nextjs`, or authorize development, deployment, publication, DNS or indexing.
