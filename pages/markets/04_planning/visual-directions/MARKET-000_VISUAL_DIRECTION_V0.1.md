# MARKET-000 Visual Direction V0.1

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `MARKET-000` |
| Page name | Markets |
| URL | `/markets/` |
| Gate | Gate 4 — Visual Direction |
| Version | V0.1 |
| Date | 2026-08-30 |
| Status | `APPROVED_GATE_4_BASELINE` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Approved structure baseline | `pages/markets/04_planning/wireframes/MARKET-000_WIREFRAME_SPEC_V0.1.md` — `APPROVED_GATE_3_BASELINE` |
| Approved content baseline | `pages/markets/04_planning/MARKET-000_CONTENT_ARCHITECTURE_V0.1.md` — `APPROVED_GATE_2_BASELINE` |
| Approved route baseline | `pages/markets/02_analysis/MARKET-000_ROUTE_AUDIT_V0.1.md` — 22 external units remain `NOT_VERIFIED_LIVE` |
| Approved localization baseline | `pages/markets/02_analysis/MARKET-000_BRAZIL_PTBR_LOCALIZATION_AUDIT_V0.1.md` — `LOCALIZATION_HOLD / DO_NOT_RENDER` |
| Approved product relationship baseline | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` and V0.3 audits — `APPROVED_RELATION_BASELINE / USER_APPROVED` |
| Relationship impact audit | `pages/markets/02_analysis/MARKET-000_PRODUCT_RELATION_IMPACT_AUDIT_V0.3.md` — `DRAFT_FOR_PROJECT_CONTROL_REVIEW`; V0.2.1 audit remains historical |
| Approved brand baseline | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md` and Homepage V0.3 contrast correction |
| Review owner | Project control and quality review; user final approval |
| Authorization record | 2026-08-30: project-control Gate 4 review PASS; user explicitly approved MARKET-000 Gate 4 |
| Current authorization | MARKET-000 Gate 5 full-visual draft and review only |
| Explicitly excluded | Gate 6/7, Market child-page work, code, CMS, testing, development handoff, deployment, publishing and `D:\16Wordpress_nextjs` |

`APPROVED GATE 4 BASELINE / GATE 5 DESIGN ONLY / NOT PRODUCTION`

This document defines the proposed visual character for MARKET-000. It does not change the approved module order, English copy, route behavior, SEO/GEO contract, responsive structure, evidence boundary or localization hold.

## 1. Direction Decision

### 1.1 Recommended direction: Industrial Editorial Market Navigator

MARKET-000 should feel like a premium industrial market index that helps a procurement buyer choose the correct destination context. It must not resemble a tourism map, logistics coverage dashboard, global office locator or country-card directory.

The direction combines:

- the approved Homepage Industrial Editorial base;
- light Technical Editorial numbering, rules and relationship lines;
- one wide European Union field with six subordinate country destinations;
- three compact standalone market entries for the United Kingdom, India and Brazil;
- a copy-led, image-optional Hero;
- visible distinction between informative destination labels and verified live actions;
- route-safe closure that remains composed when all 22 external units are unavailable.

Visual hierarchy:

1. **Destination Selector** — strongest functional and editorial surface;
2. **Hero** — page identity and local `Choose a Market` action;
3. **Market Choice Guide** — explains EU overview, EU country and standalone market levels;
4. **Procurement Paths** — connects market choice to Products, Applications and Documents;
5. **Trade Boundary / Buyer Questions** — freshness boundary and concise navigation answers;
6. **Final RFQ** — conditional terminal action only when the synchronized RFQ state is available.

### 1.2 Approaches considered

| Direction | Strength | Risk | Decision |
|---|---|---|---|
| A. Industrial Editorial Market Navigator | Preserves approved EU hierarchy, works without images, supports route-safe and partial states, aligns with Homepage V0.3 | Requires disciplined typography so the long page remains compact | **Recommended** |
| B. Geographic Coverage Map | Gives immediate geographic recognition | Can imply service coverage, offices, logistics or verified supply reach; difficult at 390px | Rejected |
| C. Equal Country Card Grid | Familiar and easy to reproduce | Destroys EU parent/child hierarchy, becomes a ten-card wall and suggests equal page status | Rejected |

Direction A is the only option that expresses the approved information relationship without using geography as evidence.

## 2. Brand Continuity and Page-specific Character

### 2.1 Inherited global character

- Premium International Industrial B2B Supplier.
- Clean, technical, restrained and trustworthy.
- White-led canvas with Navy structure and accessible Teal action.
- Inter typography.
- Thin rules, modest radii and limited shadow.
- No tourism-style Malaysia imagery, oversized flags, decorative landmarks or generic corporate people.

### 2.2 MARKET-000-specific character

The page is a destination-choice publication rather than a sales landing page. Its signature is:

- asymmetric regional hierarchy rather than equal cards;
- editorial index numbers used as orientation, never ranking;
- country names treated as structured labels until their own routes are verified live;
- relationship lines and typographic grouping instead of a literal service map;
- clear transitions from market choice to product, application, document and trade-information paths;
- a calm S0 state with no disabled buttons, empty action rails or internal status badges.

The page must remain recognizably TiO2 Malaysia while functioning differently from the Homepage and Products Hub.

## 3. Color Direction

### 3.1 Palette roles

| Token | Value | MARKET-000 use |
|---|---|---|
| Primary Navy | `#062B5B` | H1/H2, active navigation, market titles, strong rules and Footer |
| Deep Navy | `#031B3A` | Optional Final RFQ band and limited terminal emphasis |
| Accessible Teal | `#007F77` | Small buyer-facing accent text, links, focus-supporting accent and solid CTA |
| Bright Malaysia Teal | `#00A99D` | Non-text dot, rule, route node or icon detail only |
| Accent Teal | `#14B8A6` | Limited hover or decorative line accent; never dominant |
| White | `#FFFFFF` | Main canvas and primary content surfaces |
| Soft Background | `#F5F8FB` | Destination, Trade or alternating editorial section separation |
| Border Gray | `#D9E2EC` | Rules, cards, country rows, disclosure and control borders |
| Body Text | `#334155` | Main body and answer copy |
| Accessible Supporting Text | `#526176` | Secondary buyer-facing explanations and metadata-like labels |

Homepage V0.3 contrast correction is mandatory:

- `#00A99D` never carries small text or white-text solid buttons;
- solid CTA uses `#007F77` with white text;
- small Teal text on white or Soft Background uses `#007F77`;
- supporting copy uses `#526176`, not a lower-contrast gray.

### 3.2 Page color balance

Target balance:

- White: 62–70%;
- Navy/Deep Navy: 14–19%;
- Teal actions and non-text accents: 7–11%;
- Soft Background and Border Gray: 9–14%.

No country receives its own theme color. EU, UK, India and Brazil use one TiO2 Malaysia system and identical action semantics.

### 3.3 State color discipline

- A live destination is identified by complete link affordance, underline/arrow behavior and focus state, not Teal alone.
- A plain destination label is not muted to look disabled; it remains readable Navy/Body Text without link affordance.
- Expanded and collapsed states use icon plus text plus programmatic state, not color alone.
- Internal route, localization and review states never become public badges or warning colors.

## 4. Typography Direction

Font family remains Inter. Gate 4 locks hierarchy and wrap behavior; Gate 5 must measure final font rendering with the approved full copy.

| Element | Desktop direction | Mobile direction | Weight / behavior |
|---|---|---|---|
| H1 | 54–60px / 1.08–1.14 | 40–44px / 1.12–1.18 | 700; natural wrapping, no ellipsis |
| H2 | 36–42px / 1.15–1.22 | 28–32px / 1.18–1.25 | 700 |
| H3 / market title | 22–26px | 20–22px | 600 |
| Body lead | 17–18px / 1.55–1.65 | 16–17px / 1.55–1.62 | 400 |
| Body | 16–17px / 1.6–1.7 | 16px / 25px | 400 |
| Kicker / index / path label | 14–15px | 14px minimum | 600; accessible Teal or Navy |
| Navigation / button | 14–16px | 14–16px | 500–600 |
| Internal review annotation | 12px minimum | 12px minimum | Review-only; never in Buyer Clean output |

Uppercase is limited to short eyebrow and index labels. Country names, Buyer Questions and CTA labels are never condensed, abbreviated or forced into one line.

## 5. Layout Rhythm and Surface System

### 5.1 Section rhythm

| Context | Desktop direction | Mobile direction |
|---|---:|---:|
| Major section vertical padding | 80–96px | 48–64px |
| Destination Selector padding | 64–80px | 40–56px |
| Market/path surface padding | 24–32px | 20–24px |
| Question row padding | 24–28px | 20–24px |
| Module transition | 40–56px | 28–36px |

The Mobile rhythm deliberately uses the lower half of the global spacing system because the approved real-copy page is long. Whitespace supports comprehension but may not inflate the page beyond the Gate 3 measurement contract.

### 5.2 Surfaces

- Base canvas: White.
- Destination band: Soft Background with an open editorial grid, not a floating dashboard.
- EU field: White, thin Navy rule and restrained 10–14px radius only if a containing surface is needed.
- Standalone markets: compact rows or panels with equal treatment and one-pixel Border Gray separation.
- Choice Guide: numbered editorial columns or rows, not promotional cards.
- Procurement Paths: three compact route surfaces with one icon, title, body and optional action.
- Deep Navy: reserved for Footer and the conditional Final RFQ band.
- Shadows are optional and extremely light; rules and spacing do most of the separation work.

### 5.3 Shape and rule language

- Button radius: 6–8px.
- Card/surface radius: 10–14px maximum.
- Standard divider: one-pixel Border Gray.
- Strong relationship rule: Primary Navy.
- Non-text active node: Bright Malaysia Teal, paired with a text/link affordance when interactive.
- Editorial index blocks remain flat and quiet; they are not progress steps or rankings.

## 6. Global Header, Breadcrumb and Footer

### 6.1 Header

Desktop preserves the fixed order:

`Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`

- Home remains visible text and is not replaced by the Logo.
- Markets uses a persistent current marker plus text semantics.
- In S0, the RFQ item and its space are absent.
- In S4/S6, the RFQ item appears as the approved accessible Teal solid global action.
- Header density remains editorial and white-led; no dark mega-navigation or country switcher is introduced.

### 6.2 Breadcrumb

`Home / Markets` uses supporting text, a fine separator and a clearly interactive Home label. It does not become a large banner or duplicate the Hero title.

### 6.3 Footer

- Deep Navy background with the established global typography and navigation order.
- Only registered and verified destinations appear.
- Footer RFQ is an ordinary Footer navigation item controlled only by `RFQ_AVAILABLE`; it is not a third promotional CTA style.
- Removing the RFQ item closes the list without an empty cell or divider.

## 7. Hero Visual Direction

### 7.1 Composition

Desktop uses a content-led 7/5 editorial split:

- left: eyebrow, H1, approved route-safe intro and local `Choose a Market` CTA;
- right: an optional abstract market-index motif made from four non-geographic nodes, one larger EU grouping line and restrained particle/rule texture.

The motif is decorative. It contains no office, port, route, availability, coverage or logistics claim and has empty ALT when rendered as an image. It must not be a map.

If no approved motif is used, the copy expands to a readable 7–8-column measure. No media placeholder, empty 40% panel or fixed-height Hero remains.

Mobile is copy-first and normally image-free. The local CTA follows the intro within 24–32px; the Destination Selector begins after one standard transition.

### 7.2 Route-safe and RFQ-ready modes

S0:

- route-safe H1 and intro;
- one local `Choose a Market` solid action;
- no secondary-button slot;
- no external destination, trade or RFQ implication in the motif.

S4/S6:

- local `Choose a Market` remains the primary Hero action;
- `Request a Quote` appears as a White/Navy-border secondary action;
- buttons stack before labels shrink on Mobile;
- the secondary action never equals or exceeds the local market-choice action in fill, contrast weight or placement.

## 8. Destination Selector — Primary Visual Signature

### 8.1 Desktop composition

Use a 12-column asymmetric field:

- European Union: 8 columns, visually wider because it contains a regional overview plus six country destinations;
- standalone market rail: 4 columns with United Kingdom, India and Brazil as three compact peer entries;
- destination introduction spans the full section before the split.

EU is visually dominant by relationship depth, not by sales priority. UK, India and Brazil use identical surface, spacing and action hierarchy.

### 8.2 EU field

- Small editorial index `01` and `EUROPEAN UNION` kicker.
- Regional title and complete approved description.
- Optional EU overview action appears only when its own route passes.
- Six country destinations use two text columns on Desktop and readable rows on Tablet.
- Country rows use names only plus a complete link affordance when live; no flag, performance text, availability badge or local-market summary.
- The hierarchy is communicated through indentation, rule and heading level, never through a literal political or logistics map.

### 8.3 Standalone market entries

- Editorial indices `02`, `03`, `04` identify reading order, not ranking.
- United Kingdom, India and Brazil use the same title size, body style and optional action position.
- Brazil EN closes naturally after its approved English-context description in the current state.
- No PT-BR divider, language icon, empty row or placeholder is present.

### 8.4 Plain label versus live action

Plain route-safe label:

- readable Navy/Body Text;
- no arrow, underline, hover lift, pointer treatment or empty button;
- never styled as disabled or pending.

Verified live action:

- full approved label and href affordance appear together;
- Accessible Teal or Navy link treatment with arrow/underline and a visible focus outline;
- hover is supplemental only;
- removing the action removes its arrow, analytics affordance and reserved height atomically.

## 9. Mobile EU Disclosure

- Mobile order stays EU → UK → India → Brazil.
- EU country rows are closed by default in the principal S0 frame.
- `View EU country destinations` / `Hide EU country destinations` is a full-width or full-row control with at least a 44px target.
- Text, plus/minus or chevron, focus outline and expanded state work together; no meaning depends on color.
- Expanded countries stack vertically with 48–56px rows and no horizontal carousel.
- The closed list has zero public height; the next standalone market follows after one standard gap.
- At 200% zoom, the control label and the country names remain complete.

## 10. Market Choice Guide

The three choices are editorial explanations, not cards that suggest products or services.

- Desktop: three numbered columns separated by fine rules, followed by the approved direct-answer summary.
- Tablet: two plus one or one-column stack depending on complete-copy readability.
- Mobile: three vertical numbered items.
- Index numbers use Accessible Teal text or a non-text Bright Teal detail.
- The direct answer uses a restrained Navy left rule or Soft Background field; it is not a promotional callout.
- No item is marked recommended, best, faster or lower risk.

## 11. Procurement Paths

Products, Applications and Documents use three equal responsibility surfaces.

- One consistent linear icon family supports, but never replaces, each label.
- Title and approved explanation are always present.
- Each action appears directly below its own explanation only when its route passes.
- In S0, the surfaces close after the explanation; no blank button rail remains.
- Two live actions do not leave a third empty action slot.
- One live action does not enlarge into a promotional Hero.
- The module must not resemble a SaaS launcher, workflow dashboard or file-availability panel.
- Products and Applications remain generic page destinations: no grade chip, model name, process badge, application-priority badge or country-specific preselection is permitted.
- The V0.3 matrix does not authorize MARKET-000 to expose its 30 verified Application or 14 grade-level Process relations; route availability and market evidence remain independent.

## 12. Trade Boundary

Use one restrained editorial boundary band:

- Soft Background or White with a strong Navy rule;
- simple document/clock/source-line icon;
- complete approved boundary copy;
- no duty value, policy result, customs outcome, current-date badge or status chip;
- `View Current Trade Updates` appears only for a market whose official-source, scope, date, freshness, content and live-route conditions all pass.

When a current Trade action disappears, the boundary answer remains and the action area becomes zero height. The module does not show a stale or unavailable state.

## 13. Buyer Questions

Buyer Questions remain visible answer content, not a support portal.

- Use a single readable editorial list with `Q1`–`Q7` indexes and fine dividers.
- Answers remain expanded in the principal Buyer Clean page so the complete route-safe content is visible and measurable.
- Desktop answer measure targets 65–75 characters per line.
- Mobile questions and answers wrap naturally; no fixed-height crop or ellipsis.
- Q7 ends at the route-safe base in S0.
- The approved additional sentence appears only in S4/S6 and remains part of Q7 rather than a separate badge or callout.
- No Evidence ID, Schema label, approval status, chat icon or accordion-only dependency appears.

## 14. RFQ Visual System

### 14.1 Unique synchronization rule

`RFQ_AVAILABLE` is the only condition for the six approved RFQ surfaces:

1. Header RFQ action;
2. Hero secondary RFQ action;
3. Q7 additional sentence;
4. GEO-A09 eligibility, which has no separate visual treatment;
5. Final RFQ module;
6. Footer RFQ navigation item.

There is no extra Footer, route or visual condition.

### 14.2 RFQ available

- Header and Final RFQ CTA use the accessible Teal solid global/terminal action family.
- Hero RFQ uses the secondary White/Navy-border family and remains below the local market-choice action.
- Q7 addition is ordinary answer text, not an action badge.
- Footer RFQ follows normal Footer navigation styling.
- Final RFQ uses a restrained Deep Navy band with white heading/body, one Teal solid CTA and no embedded form.
- The Final RFQ text preserves the approved qualification that submission does not confirm price, stock, documents, delivery or acceptance.

### 14.3 RFQ unavailable

- Header order ends with About.
- Hero has one local action and no empty secondary slot.
- Q7 ends at the approved base answer.
- GEO-A09 and Final RFQ are absent.
- Footer has no RFQ row or divider.
- Buyer Questions transition directly to Footer with one normal terminal gap.
- No disabled CTA, contact fallback or `coming soon` message is invented.

## 15. Deterministic Public-state Visual Contract

| State | Visual addition | Required closure / boundary |
|---|---|---|
| `S0_CURRENT_ROUTE_SAFE` | No external market/support/trade/RFQ action | Complete editorial hierarchy remains; no empty actions, PT-BR or Final RFQ |
| `S1_PARTIAL_MARKET` | Only the verified market action becomes interactive | Siblings remain plain labels; no inherited arrow, hover or link styling |
| `S2_PARTIAL_SUPPORT` | Only verified Products/Applications/Documents actions appear | Each action stays with its own explanation; no orphan action rail |
| `S3_TRADE_CURRENT` | Qualified Trade action appears | No policy summary, outcome badge or Hub freshness claim |
| `S4_RFQ_READY` | Six RFQ surfaces activate together | One visual state update; no extra Footer condition |
| `S5_PTBR_READY` | No current-canvas treatment in this Gate 4 draft; after independent approval, the approved localized label may use one subordinate text-link row inside the Brazil relationship | No flag, fifth market system or Hub hreflang; label, URL and relation must all be separately approved and live |
| `S6_FULL_EN_ACTION` | Ten EN market actions, three support actions and RFQ are visible | Trade and PT-BR remain independent; action stacks do not change content order |

No visual state may reveal `NOT_VERIFIED_LIVE`, `LOCALIZATION_HOLD`, route flags, review IDs or approval language to buyers.

## 16. Brazil PT-BR Localization Boundary

Current Buyer Clean frames render zero PT-BR pixels and zero PT-BR height.

- No Portuguese label, language switch, flag, globe icon, divider or reserved row.
- MARKET-000 hreflang remains `NOT_APPLICABLE`; no `pt-BR` hreflang or alternate marker belongs to the Hub.
- A future approved Brazil EN→PT-BR relation must remain subordinate inside the Brazil relationship and may not become a fifth market system.
- If independently approved later, that relation uses one compact text-link row below the Brazil EN content, with the approved localized label and normal live-link affordance; it does not use a flag or separate card.
- The future localized label, typography, wrap and URL treatment must be supplied by the Brazil localization task; Gate 4 does not invent them.
- Review-only notes remain outside the public canvas.

## 17. Imagery and Geographic Expression

### 17.1 Preferred direction

MARKET-000 should succeed without photography. Preferred order:

1. typography, rules and asymmetric destination hierarchy;
2. a decorative non-geographic four-node index motif;
3. a simplified outline or neutral material texture only if later evidence and rights review show that it adds meaning without implying coverage.

No final image is selected or generated in Gate 4.

### 17.2 Permitted meaning

- abstract destination relationship;
- neutral TiO2 particle or coating-surface texture used as atmosphere;
- simplified, unlabeled orientation geometry with a complete text equivalent;
- decorative image with empty ALT when it conveys no unique information.

### 17.3 Prohibited implication

- active service coverage or verified supply in a country;
- office, warehouse, port, stock, vessel, delivery path or lead time;
- Malaysia manufacturing, origin proof, certification or document availability;
- current duty, customs or trade advantage;
- oversized flags, tourism landmarks or country-specific theme skins;
- AI-generated factory, laboratory, port, shipment or business-handshake scene.

## 18. Iconography and Relationship Lines

Use one restrained linear family:

- Navy outline;
- optional non-text Bright Teal detail;
- consistent 1.5–2px visual stroke;
- destination, overview, document, application, product, source/freshness and quotation metaphors;
- no 3D, emoji, glossy, cartoon or mixed multicolor icons.

Relationship lines are editorial orientation, not logistics routes. They have no arrowhead or motion that suggests physical shipment unless the visible copy explicitly describes navigation.

## 19. Buyer Clean and Internal Review Separation

Buyer Clean contains only approved public copy and condition-valid actions.

Internal Review may overlay:

- module ID and state name;
- route/localization gate annotation;
- zero-height closure marker;
- viewport and measurement note;
- focus/expanded-state annotation.

Internal Review uses a distinct review color and 12px minimum annotation text, but it never defines the public palette. No Page ID, Evidence ID, flag name, `pending`, `restricted`, `not live`, `Gate` or approval phrase appears in Buyer Clean.

### 19.1 Product relation, GEO and Schema boundary

- Buyer Clean expresses only Markets → Products / Applications page-level navigation.
- No Market → Grade, Market → Application priority, Market → Process, Grade → Application, Grade → Process or Grade ↔ Grade Comparison relation is rendered.
- `CollectionPage`, `BreadcrumbList` and destination `ItemList` remain market-navigation Schema; no grade, application or process item is added.
- No hidden `Product`, `Offer`, `suitableFor`, equivalence, replacement or recommendation relation may be added for GEO enrichment.
- M-2377 has five approved Application relations and Sulfate in V0.3, but MARKET-000 generates zero row-level grade/Application/Process copy, pixels, icon labels, ALT or Schema relation for every grade. This is a Hub responsibility rule, not a global M-2377 hide or unresolved-conflict claim. Specialty Materials remains no-public and Rubber remains evidence-only.
- M-996/M-2196 do not receive difference, ranking, selection reason or comparative treatment; their base Coatings/Sulfate relations are not needed on this Hub.
- The 54 `NO_PUBLIC_MAPPING` rows generate no negative label, disabled state, crossed-out icon, tooltip or machine-readable exclusion.
- No destination market can be used to infer grade suitability, registration, stock or supply availability.

## 20. Responsive Visual Direction

### 20.1 Desktop 1440px

- 1200px content frame within a wide white canvas.
- Hero uses 7/5 split when the optional motif is present.
- Destination uses EU 8 columns and standalone markets 4 columns.
- EU countries use two readable text columns.
- Choice Guide uses three editorial items; Procurement Paths use three equal surfaces.
- Buyer Questions use one readable answer column rather than a dashboard grid.
- Conditional removal closes sections upward without leaving alternating-background remnants.

### 20.2 Tablet 1024px / 768px

- Preserve the EU/standalone split only while complete descriptions remain readable.
- At portrait Tablet, Destination becomes one column; EU countries may use two columns or the accessible disclosure pattern.
- Choice and Procurement modules become two-plus-one or one column according to copy width.
- Header changes to Menu before labels compress.
- No horizontal map, country strip or carousel is introduced.

### 20.3 Mobile 390px

- Public content width remains 358px with 16px side margins.
- H1 remains 40–44px; body remains 16px; visible buyer text is at least 14px.
- Hero and all actions stack; buttons are full width where needed.
- Destination order remains EU → UK → India → Brazil.
- EU country rows expand vertically.
- Choice, Procurement, Trade and Questions use one column.
- Final RFQ CTA remains within 24–32px of the module boundary.
- Conditional removal leaves one 28–36px transition, not a desktop-height blank band.
- Mobile Menu Open follows the approved Gate 3 RFQ off/on states and uses at least 44px rows.

### 20.4 Real-copy height guard

Gate 3 approved these 390px validation ranges:

- S0: 5,404–5,876px;
- S6: 6,656–7,228px;
- S6 plus independent S3 Trade action: 6,720–7,292px.

Gate 4 uses 16px/25px Mobile body text and the lower half of the approved Mobile spacing range. Gate 5 must remeasure every complete Gate 2 string in the final Inter rendering. It may not solve an overrun with truncation, smaller-than-approved text, hidden answers or horizontal scrolling. Any proposed range change requires a new reviewed measurement appendix.

## 21. Accessibility and Interaction Direction

- Keyboard focus: 2px visible outline with at least 2px separation.
- Hover: underline, border strengthen or 2px maximum lift; no path depends on hover.
- Current navigation: text semantics plus a persistent marker.
- Plain and live country states differ by complete affordance, not color alone.
- EU disclosure exposes programmatic expanded state and controls relationship.
- Touch targets: 44px minimum; country/disclosure rows target 48–56px where possible.
- 200% zoom may trigger Mobile reflow; overlap, clipped focus, hidden text and horizontal page scroll fail.
- Reduced motion removes lift and nonessential transitions.
- Heading order, labels and answer relationships remain meaningful without icons or color.

## 22. Motion Direction

Gate 4 defines character only; no implementation is authorized.

- Hover/focus transition: restrained 150–220ms direction.
- EU disclosure: icon rotate/swap plus content reveal; no height animation is required.
- Optional route-node motif remains static or uses a single subtle fade.
- No animated map paths, moving shipment lines, rotating globe, parallax, particle field or auto-moving text.

## 23. Visual Red Lines

Reject any later Gate 5 direction that introduces:

- a ten-country equal card wall;
- a geographic service-coverage or logistics map;
- large flags, tourism landmarks or country-colored themes;
- rankings, best-market labels, priority scores or KPI tiles;
- country-specific grade lists, application-priority badges, process labels or product-fit graphics;
- any row-level grade/Application/Process content, including M-2377, or any M-996/M-2196 comparison cue;
- `NO_PUBLIC_MAPPING` rendered as unsuitable, incompatible, unavailable or not recommended;
- supplier, stock, capacity, delivery, certification, compliance or trade-advantage badges;
- disabled or `coming soon` destination controls for unavailable routes;
- PT-BR pixels or reserved space in current Buyer Clean frames;
- policy excerpts or current-duty claims inside the Hub;
- a dashboard, command center, workflow tracker or SaaS launcher;
- proof-like factory, warehouse, port, laboratory or shipment imagery;
- huge decorative whitespace after Mobile actions;
- bright Teal small text, weak supporting-text contrast or color-only states;
- glassmorphism, neon, strong gradients, large pill controls or heavy animation.

## 24. Required Direction Frames for Gate 5

Gate 4 is approved. Gate 5 must create and review at least:

- 1440px Buyer Clean S0 route-safe complete page;
- 1440px Buyer Clean S6 full-EN-action complete page;
- 390px Buyer Clean S0 complete page with EU collapsed;
- 390px Buyer Clean EU expanded state;
- 390px Buyer Clean S6 maximum-action page or continuous key frames;
- Tablet reflow proof at 1024px and 768px;
- S1 one-market-link, S2 partial-support and S3 current-Trade deltas;
- S4 RFQ on and RFQ off across Header, Hero, Q7, Final RFQ and Footer;
- Mobile Menu Open with RFQ off and on;
- destination plain/live, hover, focus, current, expanded and collapsed states;
- long H1, long country name, full Q1–Q7, wrapped CTA, 200% zoom and reduced-motion proofs;
- no-image state with zero placeholder gap;
- PT-BR current-state zero-render proof and separate non-public future annotation;
- Product-relationship-clean proof: zero grade/process content in market cards, generic Products/Applications paths only, and no product relation in MARKET-000 Schema;
- separate Internal Review overlays.

This list is the approved Gate 5 review contract. The 2026-08-30 user decision authorizes only these MARKET-000 Gate 5 draft frames, not Gate 6/7, Market child pages or development.

## 25. Gate 4 Self-check

### A. Governance

- [x] Gate 3 is recorded as `APPROVED_GATE_3_BASELINE`.
- [x] G3-01/G3-02/G3-03 are closed by the 2026-08-30 user approval.
- [x] Page lifecycle remains `DESIGN_IN_REVIEW`.
- [x] This document is `APPROVED_GATE_4_BASELINE`.
- [x] Only MARKET-000 Gate 5 draft work is authorized; Market child pages, Gate 6/7 and development remain unauthorized.
- [x] MKT-R002/R003/R004/R005 remain OPEN.

### B. Brand continuity

- [x] Visual Standard V1.0 and Homepage V0.3 contrast correction are inherited.
- [x] White/Navy/Teal roles are fixed without country-specific palettes.
- [x] Inter hierarchy and restrained industrial surfaces are preserved.
- [x] Technical Editorial language remains light and does not become a dashboard.

### C. Page-specific hierarchy

- [x] Destination Selector is the strongest visual surface.
- [x] EU is an 8-column parent field; UK, India and Brazil are compact peers.
- [x] Ten equal country cards are prohibited.
- [x] Market Choice, Procurement, Trade and Buyer Questions retain their approved purpose.
- [x] The Hero works with no image and does not reserve an empty media panel.

### D. Routes, localization and freshness

- [x] S0, S1, S2, S3, S4, S5 and S6 have explicit visual behavior.
- [x] Plain and live destination states do not impersonate each other.
- [x] `RFQ_AVAILABLE` remains the sole six-surface RFQ condition.
- [x] PT-BR remains zero-render in current Buyer Clean frames.
- [x] Trade action remains subject to official-source, scope, date, freshness, content and live-route checks.
- [x] No unsupported fallback action or public status message is invented.

### E. Responsive and accessibility

- [x] Desktop, Tablet and 390px Mobile direction is defined.
- [x] Mobile EU closed/expanded, Menu and full-action states are covered.
- [x] Complete copy, 200% zoom, touch targets and no-horizontal-scroll remain required.
- [x] Gate 3 cumulative-height ranges remain the measurement contract.
- [x] Focus, current, plain/live and expanded/collapsed states are not color-only.

### F. Evidence and asset boundary

- [x] No final image is selected or generated.
- [x] Maps, flags and imagery cannot serve as supply, logistics, origin, document or trade evidence.
- [x] Buyer Clean and Internal Review remain separate.
- [x] No Market child page, code, CMS, test, deployment or development artifact was created.

### G. PRODUCT relationship V0.3

- [x] V0.3 is registered as the current sole Product/Application/Process relationship source.
- [x] MARKET-000 remains a destination hub and renders none of the 30 verified Application or 14 grade-level Process relations.
- [x] M-2377 approved-source relations, Specialty/Rubber boundaries, M-996/M-2196 comparison hold and 54 `NO_PUBLIC_MAPPING` controls are explicit without using the obsolete global-hide rule.
- [x] Product/Application cards and CTA remain generic page routes with no country inference.
- [x] GEO entity relationships and Schema remain market-navigation only.

## 26. Open Gate Items

| Review ID | Level | Gate 4 effect | Status |
|---|---|---|---|
| MKT-R002 | IMPORTANT | Keeps unsupported market-specific supply, application, product, document and logistics facts out of the visual direction | OPEN |
| MKT-R003 | IMPORTANT | Keeps PT-BR out of every current Buyer Clean frame and prevents a fifth market-system treatment | OPEN |
| MKT-R004 | IMPORTANT | Keeps 22 route-dependent actions atomic and unavailable in the principal S0 direction | OPEN |
| MKT-R005 | IMPORTANT | Keeps Trade Update actions behind official-source, scope, date, freshness, content and live-route checks | OPEN |
| G4-01 | BLOCKING | Gate 4 Visual Direction required project-control review and user approval before Gate 5 | `CLOSED` |
| G4-02 | IMPORTANT | Gate 4 and Gate 5 must use the current approved PRODUCT relationship standard; original V0.2.1 closure is now synchronized to V0.3 through `MKT-REL-V03-01` | `CLOSED` |
| G4-03 | IMPORTANT | Content Architecture section 12.4 must identify its Gate 2 authorization wording as a historical checkpoint and reflect downstream authorization accurately | `CLOSED` |

## 27. Version Record

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.1 | 2026-08-30 | Initial Industrial Editorial Market Navigator direction for MARKET-000, covering brand continuity, asymmetric EU hierarchy, palette, typography, module surfaces, S0–S6, RFQ synchronization, PT-BR hold, 390px guardrails, imagery boundary and Gate 5 frame contract | `APPROVED_GATE_4_BASELINE`; project-control review PASS; user approved Gate 4 |
| V0.1 / PRODUCT relation V0.2.1 impact | 2026-08-30 | Register V0.2.1 as the sole relation source; audit Product/Application/Process copy, cards, CTA, GEO and Schema; add M-2377, M-996/M-2196, NO_PUBLIC_MAPPING, country-inference and Gate 5 visual controls | G4-02=`CLOSED`; user approved Gate 4 |
| V0.1 / PRODUCT relation V0.3 source sync | 2026-08-30 | Update the current relation source and governance wording to V0.3; preserve zero row-level Hub rendering while recognizing approved M-2377 source relations and the continuing M-996/M-2196 comparison hold | No visual direction, geometry, Buyer Clean or asset change; `MKT-REL-V03-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`; approval source=`USER_APPROVED_PRODUCT_V0.3 + PROJECT_CONTROL_TARGETED_REVIEW` |
| V0.1 / Gate 4 governance consistency revision | 2026-08-30 | Register the corrected Content Architecture historical checkpoint and downstream Gate 5-only authorization without changing the approved content, wireframe geometry or visual direction | G4-03=`CLOSED`; user approved Gate 4 |
| V0.1 / Gate 4 approval | 2026-08-30 | User explicitly approved MARKET-000 Gate 4 and authorized only Gate 5 full-visual draft work | `APPROVED_GATE_4_BASELINE`; G4-01/G4-02/G4-03=`CLOSED` |

Gate 4 is approved. Only MARKET-000 Gate 5 full-visual draft work is authorized; Gate 6/7, Market child pages, development handoff, code, deployment and publishing remain unauthorized.
