# PRODUCT-000 Full Visual Design V0.10 — Compact Evaluation Steps Revision

## 1. Document Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-000` |
| Page | Titanium Dioxide Products |
| URL | `/products/` |
| Version | `V0.10` |
| Date | `2026-08-31` |
| Review ID | `PRODUCT-G5-BUYER-FINAL-UX-02` |
| Parent review | `PRODUCT-G5-BUYER-FINAL-01 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Directed revision review | `PRODUCT-G5-BUYER-FINAL-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Previous directed review | `PRODUCT-G5-BUYER-FINAL-UX-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Current status | `SUPERSEDED_BY_V0.11_BEFORE_PROJECT_CONTROL_DECISION` |
| Relationship authority | `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` / approved PRODUCT V0.3 relationship baseline |
| Visual input | `PRODUCT-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.9.png` |
| Output set | Two complete V0.14 buyer-facing pages: 1440px Desktop and 390px logical Mobile at 2× |
| Scope | Directed density repair only: five Evaluation cards become compact, equally weighted steps |
| Hard stop | No Gate 6/7, child pages, code, CMS, development handoff, deployment, publication or operation in `D:\16Wordpress_nextjs` |

This revision does not redesign the page or replace the approved global system. It preserves the project-control-approved V0.13 Hero and directory repairs, and implements the user's next 2026-08-31 directed request for all five Evaluation cards: Desktop changes from a wide 3+2 arrangement to one compact five-step row, while Mobile reduces card width and vertical padding without changing the words or sequence. Header/Footer, fixed RFQ, `PROCUREMENT`, relationships, FAQ, module order and all unrelated content contracts remain unchanged. V0.13 remains the project-control-approved historical candidate and is not overwritten.

## A. Revised Buyer-Facing Product Center

### A1. Public module order

1. Global Header with Products current state and fixed Request a Quote.
2. Breadcrumb: `Home > Products`.
3. Hero.
4. Start with Your Application.
5. Browse by Production Process.
6. Browse All 14 Titanium Dioxide Grades.
7. How to Evaluate a Titanium Dioxide Grade.
8. Continue Your Procurement Review.
9. Buyer Questions.
10. Lightweight Request a Quote CTA.
11. Global Footer with fixed Request a Quote.

### A2. Hero contract

- H1: `Titanium Dioxide Pigment Grades for Industrial Applications`.
- Supporting copy: `Explore 14 titanium dioxide pigment grades using the application selector, production-process categories or complete grade directory, then continue to individual grade pages for technical evaluation.`
- Safe rutile sentence: `The portfolio includes rutile titanium dioxide pigment grades for multiple industrial applications.`
- Suitability boundary: `Listed grades are starting points for technical evaluation and do not guarantee suitability for a specific formulation or operating condition.`
- Primary CTA: `Start Grade Selection`.
- Secondary CTA: `Request a Quote`.
- Hero summary title: `14 grades. Four portfolio groups.`
- Hero summary explanation: `Browse the complete directory by product family.`
- Four equal information cards show count and group name: `6 Coatings Grades`; `5 Plastics & Masterbatch`; `2 Inks & Multi-Application`; `1 Specialty Grade`.
- Count, name and card relationship must be legible without requiring a colour legend. Colour supports grouping but does not carry the meaning alone.
- The former `Find the Right Grade` CTA and `Additional Grades` taxonomy do not render.

### A3. Selector contract

- Step 1 presents six independent application controls plus `Not Sure`.
- Step 2 title is `Grades to Review — X` and lists every positive public relationship for the selected application.
- Every result receives the same neutral `Grade name + View Grade` treatment.
- No recommended, best match, top pick, preferred, score, percentage or visual ranking state exists.
- Buyer-facing disclaimer: `Listed grades are starting points for technical evaluation and do not guarantee suitability for a specific formulation or operating condition.`
- Default visual state is Coatings with eight results. The other five exact states are controlled by Section B and must use the same component treatment.

### A4. Process contract

- Two equal route cards remain: `Chloride Process Titanium Dioxide` and `Sulfate Process Titanium Dioxide`.
- Their CTAs remain `Explore Chloride Grades` and `Explore Sulfate Grades`.
- CR-901 appears in a separate lightweight row as `CR-901 · Vapor-phase oxidation · View Grade`.
- No third Process landing page, URL or primary keyword is created.

### A5. Directory and evaluation contract

- The complete directory uses four navigation groups and fourteen lightweight `View Grade` rows.
- Desktop uses a 2×2 editorial grid with content-driven card heights. Each card height is `92px + 50px × visible grade rows`; row two starts `24px` after the taller card in row one. The next module starts `40px` after the taller card in row two.
- Required Desktop card heights are: Coatings 392px, Plastics & Masterbatch 342px, Inks & Multi-Application 192px and Specialty 142px. No second-row card may overlap a row above it, and no card may inherit the height of a larger neighbour.
- Mobile remains a single-column directory. Every group card sizes to its own rows; the same no-overlap and no-artificial-empty-panel rule applies.
- Public disambiguation: `Portfolio groups are navigation categories. A grade may appear in more than one application result because application relationships can span multiple navigation groups.`
- The five evaluation steps remain unchanged in responsibility: application, process when relevant, grade-specific technical data, destination/documents and buyer validation.
- Desktop presents all five Evaluation steps in one ordered row. Each card is 220px wide, cards use a 25px gap, and the complete row stays within the 1200px content grid.
- Each Desktop Evaluation card is 236px high and uses an explicit `01`–`05` step number, title and full approved explanation. No card inherits unused space from another row because there is no second row.
- Mobile uses a centered 640px card inside the 780px 2× canvas, equivalent to 320px at 390px logical width. Each card is 230px high with a 20px vertical gap; the complete text remains visible.
- Width, padding and height changes apply consistently to all five cards. No individual step receives a larger or stronger treatment.
- The exact ordered titles remain: `Define the application`; `Confirm whether process matters`; `Review applicable technical data`; `Identify destination and document needs`; `Validate in the buyer's system`.
- Missing technical values must not be inferred from another grade, an older source or an unrelated TDS.
- Final suitability remains a buyer-side formulation, processing, performance and qualification decision.

### A6. Procurement, FAQ and conversion contract

- Continue Your Procurement Review retains `Explore Applications`, `Explore Documents` and `Explore Markets`.
- Buyer Questions retains exactly five questions. One answer is expanded in the visual baseline; all five answers must exist in initial HTML/DOM.
- Accordion disclosure may change visibility only. Answers must not be fetched only after click and must not be generated only client-side.
- Bottom conversion remains a lightweight CTA, not an embedded form.
- RFQ copy: `Share your application, destination market, expected quantity and any grade you are evaluating.`
- RFQ boundary: `Quotation, availability and documentation remain subject to review.`

#### A6.1 Formal FAQ copy deck

The following five questions and answers are the formal, exact content source. They no longer depend on a temporary renderer.

1. **How do I choose a titanium dioxide pigment grade?**

   Start with the intended application, then use production-process classification if it is a required sourcing parameter. Review the relevant grade page and confirm the available product information against the formulation, processing conditions, destination and documentation requirements. A listed result is a starting point for evaluation, not a suitability guarantee.

2. **Which grades are listed in this product center?**

   The product center lists 14 grades: M-350, M-510, M-896, M-996, M-2196, M-895, M-200, M-108, M-210, M-340, M-886, M-52, M-2377 and CR-901.

3. **What is the difference between application and process selection?**

   Application selection groups grades by listed use-case relationships, while process selection groups grades by their production-process classification. A process classification does not determine application suitability on its own.

4. **What if no grade is shown for my application?**

   A missing result means that the selector has no listed grade for that application. It should not automatically be interpreted as a technical rejection of every grade. Buyers can contact the team when a requirement is not represented in the selector.

5. **Does a listed grade guarantee suitability?**

   No. A listed grade is a starting point for technical evaluation. Final suitability should be confirmed against the buyer's formulation, processing conditions, performance requirements, destination requirements and applicable documentation.

Collapsed state controls presentation only. All five exact answers must be present in the initial HTML/DOM, remain readable by search and AI systems, and must not be fetched only after interaction.

## B. Application Selector Matrix Check

| Application | Count | Final public result order |
|---|---:|---|
| Coatings | 8 | M-350, M-510, M-896, M-996, M-2196, M-895, M-52, M-2377 |
| Plastics | 8 | M-350, M-510, M-200, M-108, M-210, M-340, M-886, M-2377 |
| Masterbatch | 7 | M-510, M-200, M-108, M-210, M-340, M-886, M-2377 |
| Printing Inks | 4 | M-350, M-510, M-52, M-2377 |
| Paper | 2 | M-350, M-2377 |
| Specialty Materials | 1 | CR-901 |

Result: all six sets match PRODUCT V0.3. M-2377 appears neutrally in five application sets and does not appear under Specialty Materials. `NO_PUBLIC_MAPPING` remains a non-render rule and is not rewritten as technical unsuitability.

## C. Process Classification Check

| Process | Count | Final public set |
|---|---:|---|
| Chloride | 8 | M-350, M-510, M-896, M-895, M-200, M-210, M-340, M-886 |
| Sulfate | 5 | M-996, M-2196, M-108, M-52, M-2377 |
| Vapor-phase oxidation | 1 | CR-901 |

The page does not imply that all fourteen grades belong only to Chloride or Sulfate. CR-901 is classified without creating an unapproved process page.

## D. Portfolio Taxonomy Check

| Navigation group | Count | Directory members |
|---|---:|---|
| Coatings Grades | 6 | M-350, M-510, M-896, M-996, M-2196, M-895 |
| Plastics & Masterbatch Grades | 5 | M-200, M-108, M-210, M-340, M-886 |
| Inks & Multi-Application Grades | 2 | M-52, M-2377 |
| Specialty Grade | 1 | CR-901 |

`Additional Grades` has been removed from the revised public page. Portfolio groups, application relationships and production-process classifications are presented as three different relationship dimensions.

## E. Product Count Check

The exact fourteen-grade set is: M-350, M-510, M-896, M-996, M-2196, M-895, M-200, M-108, M-210, M-340, M-886, M-52, M-2377 and CR-901.

- Count: 14.
- Missing grades: 0.
- Additional grades: 0.
- Duplicate directory rows: 0.

## F. SEO Keyword Boundary Check

| Element | Final contract |
|---|---|
| Primary keyword | `titanium dioxide pigment` |
| Supported intent | titanium dioxide grades; titanium dioxide grade selection; rutile titanium dioxide; rutile titanium dioxide pigment |
| H1 | `Titanium Dioxide Pigment Grades for Industrial Applications` |
| Title candidate | `Titanium Dioxide Pigment Grades | TiO2 Malaysia` |
| Meta candidate | `Explore 14 titanium dioxide pigment grades by application, production process and portfolio group, then continue to grade pages for technical evaluation.` |
| Canonical | `https://tio2malaysia.com/products/` |

The Hub owns generic product-family, pigment, grade-list and selection intent. It does not become an exact-grade landing page, application landing page, process article, market sourcing page, document page or technical data sheet. Process and application references are navigational and concise.

## G. GEO Relationship Check

The visible page establishes this extractable graph:

`Titanium dioxide pigment → 14 grades → four portfolio navigation groups + six application-result sets + three process classifications → individual grade pages → Applications / Documents / Markets → technical evaluation → RFQ`.

| Buyer or machine question | Visible answer source |
|---|---|
| How many grades are listed? | Hero `14-grade portfolio`, directory H2 and FAQ answer 2 |
| How is the portfolio organised? | Hero summary, four directory groups and directory explanation |
| Which grades relate to each application? | Six Selector states controlled by Section B |
| How are grades classified by process? | Two process cards, CR-901 row and Section C state contract |
| Can one grade appear under more than one application? | Directory disambiguation sentence |
| What is the difference between application and process? | FAQ answer 3 |
| Does process determine suitability? | Process intro, Evaluation step 2 and FAQ answer 3: no |
| Does a listed grade guarantee suitability? | Hero boundary, Selector disclaimer and FAQ answer 5: no |
| How should a buyer evaluate a grade? | Five-step evaluation and FAQ answer 1 |
| Which exact grades are listed? | Complete directory and FAQ answer 2 |

FAQ answers are Technical SEO/GEO content and must be present in initial HTML/DOM even when visually collapsed. FAQ Schema, if used later in an authorized handoff, must match the same visible questions and answers exactly.

## H. Evidence / Claim Safety Check

- Best-grade claim: absent.
- Recommended-grade claim: absent.
- Match score or percentage: absent.
- Suitability guarantee: expressly disclaimed.
- Product ranking or comparative selection rationale: absent.
- Invented specification, performance, manufacturing, origin, capacity, inventory, availability or delivery claim: absent.
- Internal QA counts, conflict states, evidence-only labels and boundary notes: absent from Buyer Clean visuals.
- M-2377: present neutrally in the approved five Applications, Sulfate and its directory group; no warning or special emphasis.
- M-996/M-2196: individual Coatings/Sulfate facts may render; difference, ranking, superiority, equivalence, substitution and comparative choice logic remain frozen.
- Rubber: no application control, category, page, link, URL, keyword block or public Schema relation.

## I. Change Log

| Module | Original | Revised | Reason |
|---|---|---|---|
| Hero | Generic 14-grade introduction; `Find the Right Grade`; legacy taxonomy summary | Natural grade-selection copy; one safe rutile sentence; `Start Grade Selection`; 6/5/2/1 unified taxonomy | SEO, Evidence, Copy, Conversion |
| Application Selector | Coatings visual could imply one featured result | Coatings displays all eight neutral results; six exact states governed by Section B; strengthened non-guarantee | Product relationship, UX, Evidence |
| Process | Chloride and Sulfate were the only prominent classifications | Retains both route cards and adds a lightweight CR-901 Vapor-phase oxidation row | Product relationship, GEO, SEO |
| Product Directory | `Additional Grades — 2`; relationship dimensions could appear inconsistent | `Inks & Multi-Application Grades — 2`; concise public disambiguation of navigation groups and application results | Product relationship, GEO, Copy |
| Evaluation | Wide 3+2 Desktop cards and 280px-high Mobile cards created unnecessary card and section whitespace | Five equal compact Desktop columns with `01`–`05`; narrower, shorter Mobile cards; exact five-step copy retained | User-directed density and scan-sequence repair |
| Procurement Review | Three approved downstream paths | Retained with concise Applications, Documents and Markets actions | SEO, GEO, UX |
| Buyer Questions | Five approved buyer questions | Direct answers cover the exact 14 grades, relationship dimensions, missing-result meaning and suitability; all answers required in DOM | GEO, SEO, Evidence, Copy |
| RFQ | Lightweight end CTA with internal-system wording risk | Buyer-facing requirements sentence plus one review boundary; no form fields | Conversion, Copy, Evidence |
| Hero portfolio summary | Abstract colour blocks plus a compressed legend required the buyer to infer the grouping | Four explicit count-and-name cards under `14 grades. Four portfolio groups.` | User-directed clarity repair, accessibility |
| Complete directory | Desktop cards shared oversized row geometry; lower cards could cover the last rows above and retained excessive internal blank space | Each card sizes to its own grade-row count; row starts are derived from the taller card above | User-directed overlap and spacing repair |

## J. Final Gate

These are execution-task self-check results. They do not substitute for project-control or user approval.

| Gate | Result |
|---|---|
| Visual Gate | PASS |
| Product Relationship Gate | PASS |
| Product Taxonomy Gate | PASS |
| Process Classification Gate | PASS |
| English Editorial Gate | PASS |
| SEO Gate | PASS |
| Keyword Cannibalization Gate | PASS |
| GEO Gate | PASS |
| Evidence Gate | PASS |
| Conversion Gate | PASS |

## 11. V0.14 Asset Manifest

| File | Actual dimensions | Bytes | SHA-256 | Status |
|---|---:|---:|---|---|
| `assets/PRODUCT-000_G5_DESKTOP_BUYER_FACING_FINAL_V0.14.png` | 1440×5185 | 366543 | `B132BC2FCAB4130109F7652D0B8525E70A895542788D1C9CB8035F5659CAF3FF` | `CURRENT_DIRECTED_REVISION_CANDIDATE / DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| `assets/PRODUCT-000_G5_MOBILE_390_BUYER_FACING_FINAL_V0.14.png` | 780×12279; 390px logical at 2× | 591153 | `DBCB2D007119AA60E63F7F7BA6E62823B60FD9C529A6B5274393BC9C987834AC` | `CURRENT_DIRECTED_REVISION_CANDIDATE / DRAFT_FOR_PROJECT_CONTROL_REVIEW` |

Both assets were reviewed at original detail and in cropped original-pixel views. Desktop shows the five complete steps in a single 220px-card row with no internal blank panel or second-row gap. Mobile shows all five complete steps in centered 320px-logical cards with reduced vertical padding. V0.13 Hero and directory repairs remain visible; no horizontal overflow, crop, overlap or CTA blank band was introduced. Buyer-visible Footer labels remain `CONVERSION = 0` and `PROCUREMENT = 1` in each asset.

## 12. Protected Inputs and Governance Boundary

- PRODUCT V0.3 matrix: 84 rows; 30 verified, 0 conflict, 54 no-public; SHA-256 `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406`.
- V0.13 is the protected Buyer-Facing Final candidate source. V0.14 changes only the five Evaluation cards plus the downstream vertical placement required by the shorter section.
- Desktop Header `0,0,1440×84`, Mobile Header `0,0,780×128`, Desktop Footer 1440×410 and Mobile Footer 780×1056 are RAW-identical to V0.12.
- The relationship sets, Product V0.3 matrix, exact FAQ copy, fixed RFQ, Products current state, `PROCUREMENT`, M-2377 public mappings, Rubber exclusion and M-996/M-2196 comparison hold remain unchanged.
- V0.9 historical assets, V0.10 internal proof, V0.11, V0.12 and the project-control-approved V0.13 remain unchanged and are not overwritten.
- `PRODUCT-G5-BUYER-FINAL-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`.
- `PRODUCT-G5-BUYER-FINAL-01 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; it is the parent review and is not closed by this directed repair.
- `PRODUCT-G5-BUYER-FINAL-UX-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`; V0.9 and both V0.13 assets are the current Buyer-Facing Final candidate baseline pending the parent user decision.
- `PRODUCT-G5-BUYER-FINAL-UX-02 = DRAFT_FOR_PROJECT_CONTROL_REVIEW`; V0.10 and both V0.14 assets are the current directed-revision candidate set.
- Gate 5 remains unapproved. No user approval date is recorded.
- This package stops at project-control review. It does not authorize Gate 6/7, Process or Grade child-page work, code, CMS, development handoff, deployment, release or publication.

## 13. Version Record

| Version | Date | Change | Governance status |
|---|---|---|---|
| V0.5 / V0.9 | 2026-08-30 | Approved full-route, fixed-RFQ visual baseline | Approved historical baseline; unchanged |
| V0.6 / V0.10 | 2026-08-30 | Internal PRODUCT V0.3 relationship-impact proof | Project-control review pass pending user approval; not public page content |
| V0.7 / V0.11 | 2026-08-31 | Full buyer-facing relationship, taxonomy, process, editorial, SEO, GEO and claim-safety revision | Historical review input; superseded by V0.8/V0.12 without deletion |
| V0.8 / V0.12 | 2026-08-31 | Directed PCR-01 revision: Footer `PROCUREMENT` synchronization and formal five-question/five-answer copy deck | Project-control review pass pending user approval; retained historical candidate |
| V0.8 / project-control directed review | 2026-08-31 | Project control independently verified both V0.12 assets, protected RAW hashes, Footer deltas, formal FAQ copy, PRODUCT V0.3 boundaries and document hygiene | `PRODUCT-G5-BUYER-FINAL-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`; `PRODUCT-G5-BUYER-FINAL-01 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| V0.9 / V0.13 | 2026-08-31 | User-directed Hero portfolio explanation and content-driven directory card-height repair; Desktop and 390px synchronized | `PRODUCT-G5-BUYER-FINAL-UX-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`; current Buyer-Facing Final candidate baseline; Gate 5 remains unapproved |
| V0.10 / V0.14 | 2026-08-31 | User-directed Evaluation-card density repair: five equal 220px Desktop steps in one row; centered compact Mobile cards; exact copy retained | `PRODUCT-G5-BUYER-FINAL-UX-02 = DRAFT_FOR_PROJECT_CONTROL_REVIEW`; Gate 5 remains unapproved |
