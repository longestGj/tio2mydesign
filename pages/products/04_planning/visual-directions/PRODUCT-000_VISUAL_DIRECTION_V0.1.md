# PRODUCT-000 Visual Direction V0.1

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-000` |
| Page name | Titanium Dioxide Products |
| URL | `/products/` |
| Gate | Gate 4 — Visual Direction |
| Version | V0.1 |
| Date | 2026-08-29 |
| Status | `APPROVED_GATE_4_BASELINE` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Approved structure baseline | `pages/products/04_planning/wireframes/PRODUCT-000_WIREFRAME_SPEC_V0.1.md` — `APPROVED_GATE_3_BASELINE` |
| Approved brand baseline | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md` |
| Approved page reference | Homepage V0.3 Industrial Editorial base and accessibility color correction |
| Review owner | Project control and quality review; user final approval |
| Approval record | 2026-08-29: project-control review PASS; user approved PRODUCT-000 Gate 4 and authorized Gate 5 full-visual-design work only |
| Current authorization | Gate 5 full Buyer Clean visual design and required review states |
| Explicitly excluded | Gate 6/7 approval or handoff, code, CMS, testing, development, deployment and publishing |

This document is the approved Gate 4 visual-direction baseline for PRODUCT-000. It authorizes Gate 5 visual-design work only. The approved Gate 3 module order, real-length copy, responsive behavior and conditional states remain unchanged.

## 1. Direction Decision

### 1.1 Recommended direction: Industrial Editorial Selection

The page should feel like a premium industrial product-selection publication, not an ecommerce category, SaaS filter dashboard or chemical-company template.

The direction combines:

- the approved Homepage Industrial Editorial base;
- a stronger Technical Editorial language for Selector, Process and directory modules;
- restrained Navy/Teal hierarchy;
- dense but readable product navigation;
- visible evidence discipline without exposing internal evidence workflow.

Visual hierarchy:

1. **Selector** — strongest functional surface;
2. **All 14 Grades** — strongest persistent directory surface;
3. **Hero** — clear page identity and route-safe positioning;
4. **Process / Evaluation / Support** — editorial guidance and conditional navigation;
5. **Buyer Questions / RFQ** — answer and conversion close.

### 1.2 Approaches considered

| Direction | Strength | Risk | Decision |
|---|---|---|---|
| A. Industrial Editorial Selection | Aligns with Homepage V0.3; supports dense procurement choices; separates functional priority from decoration | Requires disciplined spacing so the page does not become document-heavy | **Recommended** |
| B. Technical Catalog Grid | Makes all grades immediately scannable | Easily becomes a 14-card ecommerce wall and overstates each grade | Rejected |
| C. Application Journey | Makes applications visually prominent | Could imply unsupported application-to-grade recommendations and weaken the complete directory | Rejected |

Direction A preserves the approved application-first logic while keeping unsupported relationships visually absent rather than filling space with generic recommendations.

## 2. Brand Continuity and Page-specific Character

### 2.1 Inherited global character

- Premium International Industrial B2B Supplier.
- Clean, technical and trustworthy.
- White-led canvas with Navy structure and Teal action.
- Inter typography.
- Thin rules, restrained cards and editorial labels.
- No tourism-style Malaysia imagery, oversized flags or decorative landmarks.

### 2.2 PRODUCT-000-specific character

This page is more functional and information-dense than the Homepage. It should not repeat the Homepage's large narrative photography rhythm. Its distinct visual signature is:

- numbered selection steps;
- strong option/result pairing;
- directory-led product rows;
- conditional route cards that disappear cleanly;
- procurement checklist and answer blocks;
- a verified `14 grade pages` collection motif, used as editorial context rather than a KPI dashboard.

The page must remain recognizable as TiO2 Malaysia while clearly functioning as a product center.

## 3. Color Direction

### 3.1 Approved palette roles

| Token | Value | PRODUCT-000 use |
|---|---|---|
| Primary Navy | `#062B5B` | H1/H2, active navigation, result headings, strong rules, footer |
| Deep Navy | `#031B3A` | Optional final RFQ band and limited high-contrast section only |
| Accessible Teal | `#007F77` | Buyer-facing small text, selected marker, focus-supporting accent and solid CTA |
| Bright Malaysia Teal | `#00A99D` | Non-text line, dot, icon fill or decorative particle accent only |
| Accent Teal | `#14B8A6` | Light hover or graphic accent; never dominant |
| White | `#FFFFFF` | Main canvas and functional card surfaces |
| Soft Background | `#F5F8FB` | Selector band, alternating editorial section separation |
| Border Gray | `#D9E2EC` | Cards, directory rows, accordion and control borders |
| Body Text | `#334155` | Main body and answer copy |
| Accessible Supporting Text | `#526176` | Secondary copy and metadata-like buyer-facing labels |

Homepage V0.3 contrast correction is mandatory:

- `#00A99D` does not carry small text or white-text solid buttons;
- solid CTA uses `#007F77` with white text;
- small Teal text on white/soft background uses `#007F77`;
- supporting text uses `#526176`, not a lower-contrast gray.

### 3.2 Page color ratio

Target visual balance:

- White: 60–68%;
- Navy/Deep Navy: 15–20%;
- Teal accents and actions: 8–12%;
- Soft background and border gray: 8–12%.

No full-page blue/teal gradient is permitted. If a gradient appears later, it is limited to a small decorative Hero graphic and must not sit behind long text.

### 3.3 State color discipline

- Selected: marker/check + border weight + label, not Teal fill alone.
- Focus: visible outline independent of selected state.
- No result: neutral Navy/Gray guidance; not warning yellow or error red.
- Interaction failure: restrained neutral notice with direct All Grades action; red is reserved for true form/input errors outside this page flow.
- Internal review states never become buyer-facing badges or colors.

## 4. Typography Direction

Font family remains Inter. Gate 4 locks hierarchy, not final font rendering metrics.

| Element | Desktop direction | Mobile direction | Weight / behavior |
|---|---|---|---|
| H1 | 54–60px / 1.08–1.14 | 40–44px / 1.12–1.18 | 700; natural wrapping, no ellipsis |
| H2 | 36–42px / 1.15–1.22 | 28–32px / 1.2 | 700 |
| H3 / card title | 22–26px | 19–22px | 600 |
| Body lead | 17–18px / 1.6 | 16–17px / 1.6 | 400 |
| Body | 16–17px / 1.6–1.7 | 16px / 1.6 | 400 |
| Kicker / step label | 14–15px | 14px minimum | 600; accessible Teal or Navy |
| Navigation / button | 14–16px | 14–16px | 500–600 |
| Internal review annotation | 12px minimum | 12px minimum | Never present in Buyer Clean output |

Uppercase is limited to short eyebrow or directory labels. Long headings, option labels and answers use sentence/title case. The page does not use a display serif or condensed industrial font.

## 5. Layout Rhythm and Surface System

### 5.1 Section rhythm

| Context | Desktop direction | Mobile direction |
|---|---:|---:|
| Major section vertical padding | 80–104px | 56–72px |
| Functional Selector padding | 56–72px | 36–48px |
| Card internal padding | 24–32px | 20–24px |
| Directory row height | 48–56px | 48–60px |
| Module transition | 40–56px | 28–36px |

These are visual-direction ranges. Gate 5 may adjust exact measurements while preserving the approved Gate 3 closure rules and controlled button-after whitespace.

### 5.2 Surfaces

- Base canvas: white.
- Functional band: Soft Background with a white Selector working surface.
- Cards: white, one-pixel Border Gray, 10–14px radius range, extremely light shadow only when needed to separate overlapping hierarchy.
- Directory: rows and rules, not floating promotional cards.
- Deep Navy: reserved for the RFQ band when RFQ is available and the Footer.
- No glassmorphism, neon border, heavy elevation or pill-shaped card language.

### 5.3 Shape and rule language

- Button radius: 6–8px.
- Card radius: 10–14px.
- Linear dividers: Border Gray; active/selected rule may use Navy or accessible Teal.
- Small step markers may use circles or square index blocks, but they must remain flat and editorial rather than gamified.
- One icon library only; Navy outline with limited non-text bright Teal accent.

## 6. Hero Visual Direction

### 6.1 Composition

Desktop uses a 7/5 editorial split:

- left: eyebrow, H1, active Hero copy, qualification note and CTA hierarchy;
- right: a restrained collection motif built from the verified `14 grade pages` fact and 6/5/2/1 grouping rhythm.

The right side is not a KPI panel. It can use:

- a large, low-contrast `14` typographic anchor;
- four thin directory lines or grouping markers;
- an abstract TiO2 particle/film texture used only as atmosphere;
- no product-performance data, factory evidence or inventory count.

Mobile stacks copy first. The collection motif becomes a compact editorial strip after the CTA and must not create a large empty Hero. The Hero is content-driven rather than fixed-height.

### 6.2 Full-route and route-safe modes

Full-route mode:

- full 169-character Hero intro;
- primary `Find the Right Grade` and secondary `Request a Quote`;
- collection motif may include the neutral path labels `Application / Process / Model`.

Route-safe mode:

- 97-character route-safe Hero intro;
- only `Find the Right Grade`;
- collection motif shows `14 Grade Pages` and 6/5/2/1 grouping only;
- no empty secondary-button slot and no Process/RFQ label in the motif.

The collection motif remains useful in both modes, preventing the route-safe Hero from looking incomplete.

## 7. Selector — Primary Functional Visual

The Selector is the page's strongest visual module but must not look like a SaaS dashboard.

### 7.1 Section composition

- Soft Background section band.
- Section title and real-length intro above one white working surface.
- Desktop: options on the left, result on the right, separated by a fine vertical rule and step labels.
- Tablet/mobile: options above result; the result begins immediately after the selected option group.

### 7.2 Application options

- Use compact outlined choice tiles, not illustrated industry cards.
- Default: white with Border Gray and Navy label.
- Hover: slightly stronger border; 2px maximum lift is optional.
- Focus: 2px accessible outline with separation.
- Selected: persistent check/radio marker, stronger Navy/Teal rule and `Selected` semantics; never color alone.
- Long `Specialty Materials` wraps naturally.

### 7.3 Result states

Default:

- neutral instruction panel with a simple route/arrow line icon;
- no product silhouette, disabled product card or empty gray box.

M-350 result:

- one restrained result card;
- M-350 is the only dominant label;
- application and `Chloride process` are secondary text lines, not performance badges;
- `View M-350` is the only grade action;
- no “recommended,” score, match percentage or availability treatment.

No-listed-grade / Not Sure:

- use a calm text panel with directory icon/line;
- local `View All Grades` is primary within the panel;
- conditional RFQ action is secondary and disappears with its dependent sentence;
- no warning triangle, amber badge or internal status copy.

Failure:

- compact neutral notice with direct All Grades action;
- no spinner-only surface and no large red error block.

## 8. Process Routes

Process cards are editorial route entries, not comparisons.

- Two live routes: two equal white cards with a thin Navy top/side rule and a simple process-line icon.
- One live route: one 6–8-column card; it does not stretch across 12 columns or become a second Hero.
- Zero routes: entire section absent; adjacent sections close with one normal approved gap.
- Card contains title, real-length body and CTA as one atomic visual unit.
- Chloride and Sulfate use identical icon weight, surface, spacing and CTA hierarchy.
- No versus divider, score, advantage list, performance color or quality implication.

## 9. All 14 Grades — Editorial Directory

### 9.1 Desktop

Use four directory groups with 6/5/2/1 density. Each group has:

- small Navy group heading;
- count in supporting text;
- thin top rule;
- grade rows with name left and `View Grade` action right.

The four groups may use an asymmetric editorial grid reflecting their counts, but row treatment remains identical. The page must not create 14 image cards, product badges or descriptions.

### 9.2 Mobile

- Accessible group headers with open/closed state marker and count.
- One group may open by default in a review frame; Buyer Clean default is decided in Gate 5.
- Expanded rows remain at least 44px high.
- No horizontal carousel or compressed 3-column model grid.

### 9.3 Freeze rendering

- M-2377 uses the same neutral row as every other grade and shows only its name/link.
- No restricted/pending visual state, muted disabled appearance, badge, qualifier or empty metadata shell.
- M-996 and M-2196 use identical row treatment with no visual connection, comparison cue or ranking order.

## 10. Evaluation Guide

Use a five-step editorial checklist rather than a progress tracker:

- desktop: 3+2 or a horizontal rule with five numbered text blocks where real copy remains readable;
- mobile: vertical numbered list with thin connecting rule optional;
- numbers use accessible Teal text or non-text bright Teal accent;
- steps do not show completed/current status because this is guidance, not a user workflow;
- optional owner CTAs remain visually secondary and disappear cleanly when unavailable.

## 11. Support Paths

- Use compact route cards with one linear icon, title, body and text/button action.
- Three cards: equal visual weight.
- Two cards: balanced two-column layout, not a three-column grid with an empty slot.
- One card: 6–8 columns on desktop; full width on mobile.
- Zero cards: whole module absent.
- Documents iconography does not imply a file is available; Markets iconography does not imply local registration or supply.

## 12. Buyer Questions

- White or Soft Background section separated by fine rules.
- Accordion headers are full-width, 48–56px minimum, with clear plus/minus or chevron state.
- Expanded answer uses a readable 65–75-character line length on desktop.
- Focus outline is visible around the control, not only the icon.
- The expanded answer pushes content naturally; no fixed-height crop.
- Buyer Clean never displays Evidence IDs, approval status or Schema labels.
- FAQ/QAPage Schema is not implied by the visual treatment.

## 13. RFQ Available / Unavailable Visual System

### 13.1 RFQ available

- **Global / terminal RFQ tier:** Header RFQ and the terminal Final RFQ action use the approved accessible Teal solid style. The Header remains the global action; the Final RFQ sits in a restrained Deep Navy band with white heading/body and no embedded form.
- **Contextual RFQ tier:** Hero, Selector and Buyer Questions use the same secondary family: White/Navy-border outline when presented as a button, or a Navy text link when embedded in local guidance. They never inherit the Teal solid treatment reserved for the global / terminal tier.
- **Hero hierarchy:** `Find the Right Grade` remains the accessible Teal solid primary action. The contextual `Request a Quote` remains White/Navy-border secondary and must never equal or exceed `Find the Right Grade` in fill, contrast weight, size, placement or emphasis.
- **Footer:** RFQ appears only as an ordinary item within registered navigation, not as a third CTA style.

Consistency is enforced within each RFQ tier. Header and Final RFQ share the same Teal solid color, icon policy, hover and focus behavior. Hero, Selector and Buyer Questions share the same secondary outline/text-link color, icon policy, hover and focus behavior for the applicable control type. Gate 5 must not flatten these two tiers into one universal RFQ style or introduce a third promotional style.

### 13.2 RFQ unavailable

Every RFQ surface disappears. Visual closure rules:

- Header menu closes with About;
- Hero uses a single CTA and rebalances copy/motif without an empty button slot;
- Selector and BQ panels close after local guidance;
- Deep Navy Final RFQ band is absent;
- Footer moves upward after Buyer Questions using one standard terminal gap;
- no disabled CTA, gray empty bar or “contact us” invention appears.

## 14. Imagery and Illustration Boundary

### 14.1 Preferred direction

PRODUCT-000 can succeed without a photograph. Preferred priority:

1. typography + collection motif;
2. rights-cleared abstract material/particle texture as atmosphere;
3. limited application-surface crops only when their generic nature is clear.

### 14.2 Permitted image meaning

- generic white powder/material macro;
- neutral coating surface, white polymer pellet or ink texture;
- abstract particle field or film layer illustration;
- decorative use only, with empty ALT when it conveys no unique information.

### 14.3 Prohibited implication

- actual TiO2 Malaysia product appearance;
- Malaysia factory, production line, warehouse, laboratory, port or shipment evidence;
- stock, capacity, certification, document availability or origin proof;
- a specific image attached to M-2377 or to an unsupported application-grade relationship;
- AI-generated “real factory” scene.

No final image is selected or generated in Gate 4. Rights, source, actual subject and ALT behavior remain Gate 5 asset-review requirements.

## 15. Iconography Direction

Use one restrained linear family:

- Navy outline;
- non-text bright Teal detail optional;
- consistent 1.5–2px visual stroke range;
- simple application, process, document, market, directory and checklist metaphors;
- no 3D, emoji, cartoon, glossy or multicolor icon mix.

Icons support labels and never replace them. Process icons must not imply one process is cleaner, better or more advanced.

## 16. Buyer Clean and Internal Review Separation

Buyer Clean contains only approved public content and route-valid actions.

Internal Review may overlay:

- module ID;
- route mode;
- evidence/route gate annotation;
- public-height 0 markers;
- responsive dimension notes.

Internal Review annotations use a separate review color and 12px minimum text but never define public UI. No `pending`, `restricted`, `not live`, Page ID, Evidence ID or approval phrase appears in Buyer Clean.

## 17. Responsive Visual Direction

### 17.1 Desktop 1440px

- 1200px content frame within wide white canvas.
- Hero 7/5 split; Selector 5/7 working surface.
- Process two cards; directory uses four editorial groups.
- Section whitespace supports scanning but does not inflate the approved Gate 3 height.
- Strict route-safe removal closes modules upward without alternating-background artifacts.

### 17.2 Tablet 1024px / 768px

- Keep two-column functional layouts only while full copy remains readable.
- Selector stacks at portrait tablet.
- Directory becomes two columns.
- Single Process/Support card remains restrained rather than full-bleed.
- Header changes to Menu before navigation labels become compressed.

### 17.3 Mobile 390px

- H1 remains 40–44px direction; visible buyer copy is at least 14px, body 16px.
- Hero is content-driven; buttons stack full width with 12–16px between them.
- Selector options use two columns where possible; result immediately follows.
- Process and Support cards stack; CTA follows copy with no large lower void.
- Directory uses accessible group controls and 48–60px rows.
- Buyer Questions headings wrap without truncation.
- Conditional module removal leaves one normal 28–36px transition, not a desktop-height blank band.
- Mobile Menu Open follows the approved Gate 3 state and uses 44px minimum touch rows.

## 18. Interaction and Motion Direction

Gate 4 defines character only; no implementation is authorized.

- Hover: border strengthen or 2px maximum lift.
- Focus: 2px visible outline with separation.
- Selected: marker + border + label semantics.
- Expand/collapse: icon rotation or swap plus content reveal.
- Motion duration direction: restrained 150–220ms.
- Reduced-motion state removes lift and nonessential transition.
- No animated particle field, rotating globe, parallax or auto-moving text.

## 19. Visual Red Lines

Reject any Gate 5 direction that introduces:

- 14 large ecommerce product cards;
- match percentages, rankings, “recommended” ribbons or performance scores;
- dashboard filters, KPI tiles or admin-panel styling;
- price, MOQ, stock, delivery, certificate or compliance badges;
- visual difference between M-996 and M-2196;
- any non-neutral M-2377 treatment;
- content-only Process/Support cards after their route action is removed;
- full-route visual labels in route-safe mode;
- huge decorative whitespace, especially after mobile CTAs;
- bright Teal small text with insufficient contrast;
- proof-like factory, origin, warehouse or shipment imagery;
- tourism-style Malaysia imagery;
- glassmorphism, neon, strong gradients, large pill controls or heavy animation.

## 20. Gate 4 Required Direction Frames for Later Gate 5

If Gate 4 is approved, Gate 5 must create and review at least:

- 1440px Buyer Clean full-route complete page;
- 1440px Buyer Clean strict route-safe closure state;
- 390px Buyer Clean route-safe complete page;
- 390px Buyer Clean full-route maximum-stack state or continuous key frames;
- Selector default, M-350 result, no-result, Not Sure and failure;
- Process 2/1/0;
- RFQ on/off;
- All Grades expanded/collapsed and freeze QA;
- Mobile Menu Open RFQ on/off;
- focus, selected, hover, expanded and no-image states;
- separate Internal Review overlays.

This list is a future Gate 5 review contract, not authorization to produce those frames now.

## 21. Gate 4 Self-check

### A. Governance

- [x] Gate 3 is recorded as `APPROVED_GATE_3_BASELINE`.
- [x] G3-01 and G3-02 are closed.
- [x] Page lifecycle remains `DESIGN_IN_REVIEW`.
- [x] Gate 4 is a draft for review; Gate 5 is not authorized.
- [x] R-002, R-003 and R-004 remain open.

### B. Brand continuity

- [x] Visual Standard V1.0 and Homepage V0.3 accessibility corrections are inherited.
- [x] White/Navy/Teal roles are fixed without inventing a page palette.
- [x] Inter hierarchy and restrained industrial card language are preserved.

### C. Page-specific direction

- [x] Selector is the strongest functional visual without becoming a dashboard.
- [x] All Grades is an editorial directory, not 14 marketing cards.
- [x] Process cards are neutral, atomic and non-comparative.
- [x] Evaluation Guide is instructional, not a completion tracker.
- [x] Buyer Questions remain visible answers without workflow labels.

### D. States and routes

- [x] Full-route and route-safe Hero/Meta pairing is visually preserved.
- [x] Process 2/1/0, Support 3/2/1/0 and RFQ on/off close without empty shells.
- [x] RFQ styling follows two explicit tiers: Header/Final use accessible Teal solid; Hero/Selector/BQ use secondary outline or contextual text link, with consistent color, icon, hover and focus behavior inside each tier.
- [x] Hero RFQ never equals or exceeds the primary `Find the Right Grade` action.
- [x] M-2377 and M-996/M-2196 freeze rules have explicit visual treatment.
- [x] No unsupported fallback action is invented.

### E. Responsive and accessibility

- [x] Desktop, Tablet and 390px Mobile visual rhythm is defined.
- [x] Buyer copy contrast follows Homepage V0.3 corrected colors.
- [x] Focus, selected, expanded, failure and touch states are not color-only.
- [x] Long copy, button wrapping and module-removal whitespace are addressed.

### F. Evidence and asset boundary

- [x] No image is used as product, factory, origin, stock, document or shipment proof.
- [x] No final image was selected or generated.
- [x] Buyer Clean/Internal Review separation prevents governance-language leakage.
- [x] No Process or Grade child-page work was started.

## 22. Open Gate Items

| Review ID | Level | Gate 4 effect | Status |
|---|---|---|---|
| R-002 | IMPORTANT | Unsupported Selector relations remain visually absent | OPEN |
| R-003 | IMPORTANT | Route-dependent modules and actions retain conditional visual states | OPEN |
| R-004 | IMPORTANT | M-2377 and M-996/M-2196 frozen visual fields remain absent | OPEN |
| G4-01 | BLOCKING | Gate 4 visual direction required project-control and user approval | Project-control review PASS and user approval recorded 2026-08-29; Gate 5 authorized | CLOSED |
| G4-02 | IMPORTANT | The initial RFQ section contradicted its position-specific styles by requiring one universal RFQ action style | Two-tier RFQ contract passed project-control re-review and user approved Gate 4 on 2026-08-29 | CLOSED |

## 23. Version Record

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.1 | 2026-08-29 | Initial Industrial Editorial Selection direction for PRODUCT-000, including palette, typography, module recipes, imagery boundary, route states, responsive rhythm and future Gate 5 frame contract | Draft for Gate 4 project-control review |
| V0.1 review revision | 2026-08-29 | Registered G4-02 and replaced the contradictory universal RFQ-style sentence with an explicit two-tier visual contract; synchronized Gate 4 self-check and retained all route/freeze boundaries | Conditional-return revision; pending project-control re-review; Gate 4 not approved |
| V0.1 re-review record | 2026-08-29 | Project control re-verified G4-02: the two RFQ tiers are unique and executable; prior brand, contrast, route, responsive, evidence and freeze boundaries remain unchanged | G4-02 project-control review PASS; pending user approval; Gate 4 not approved |
| V0.1 approval record | 2026-08-29 | User approved PRODUCT-000 Gate 4 after project-control PASS; G4-01/G4-02 closed; Gate 5 full visual design authorized; R-002/R-003/R-004 remain open | Approved Gate 4 baseline; Gate 6/7 not authorized |

Gate 4 is approved. Gate 5 visual-design work is authorized and must be submitted for project-control and user review. Gate 6/7 remain unauthorized.
