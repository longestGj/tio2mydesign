# PRODUCT-000 Full Visual Design V0.13 — TDS-Based Directory Summary Revision

## 1. Document Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-000` |
| Page | Titanium Dioxide Products |
| URL | `/products/` |
| Version | `V0.13` |
| Date | `2026-08-31` |
| Review ID | `PRODUCT-G5-DIRECTORY-TDS-01` |
| Project-control review | `PROJECT_CONTROL_REVIEW_PASS` |
| Parent baseline | `PRODUCT-G5-BUYER-FINAL-01 = APPROVED / CLOSED` |
| Directed revision review | `PRODUCT-G5-BUYER-FINAL-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Previous directed review | `PRODUCT-G5-BUYER-FINAL-UX-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Superseded draft | `PRODUCT-G5-BUYER-FINAL-UX-02 = SUPERSEDED_BY_USER_DIRECTED_REVISION_BEFORE_PROJECT_CONTROL_DECISION` |
| Previous directed review | `PRODUCT-G5-BUYER-FINAL-UX-03 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Current status | `APPROVED_GATE_5_BASELINE` |
| User approval date | `2026-08-31` |
| Gate 5 source | `APPROVED` on `2026-08-31`; approved source files remain unchanged |
| User revision instruction | `2026-08-31`: use the supplied fourteen summaries directly; add nothing else |
| Relationship authority | `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` / approved PRODUCT V0.3 relationship baseline |
| Visual input | Approved Desktop V0.16 and Mobile V0.15 Buyer-Facing Final assets |
| Output set | Desktop V0.17 at 1440px plus 390px logical Mobile V0.16 at 2× |
| Scope | Replace only the fourteen directory descriptions with the exact user-supplied TDS-based summaries; make only the row-height changes required for legibility |
| Governance boundary | Gate 6 remains passed with its recorded open Gate 8/9 acceptance items; Gate 7 remains `LOCKED / NOT_AUTHORIZED`; no child pages, code, CMS, development, deployment, publication or operation in `D:\16Wordpress_nextjs` |

This revision implements the user's exact 2026-08-31 instruction to replace the fourteen Product Directory descriptions with the supplied technical-summary sentences and to add nothing else. It does not redesign the page, add a label, add a module or change Product V0.3 relationships. Header/Footer, fixed RFQ, `PROCUREMENT`, Selector, Hero, Process, Evaluation, FAQ and all unrelated contracts remain unchanged. Approved V0.12/V0.16/V0.15 files are retained without overwrite.

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
- Desktop uses a 2×2 editorial grid with content-driven card heights. Each card height is `88px + 88px × visible grade rows`; row two starts `24px` after the taller card in row one. The next module starts `40px` after the taller card in row two.
- Required Desktop card heights are: Coatings 616px, Plastics & Masterbatch 528px, Inks & Multi-Application 264px and Specialty 176px. No second-row card may overlap a row above it, and no card may inherit the height of a larger neighbour.
- Mobile remains a single-column directory. Every group card sizes to its own rows; the same no-overlap and no-artificial-empty-panel rule applies.
- Every directory row has three information zones on Desktop: fixed grade name, exact TDS-based directory summary and `View Grade →`. Mobile places grade and action on the first line and the complete summary below.
- Desktop measures the rendered summary at 326px. A one-line result (`≤25px` measured height) starts at row `y+29`, sharing the visual centerline with the grade at `y+28` and action at `y+29`; a multi-line result starts at `y+18`.
- The rule is content-responsive and applies to all fourteen rows. It does not use per-grade manual offsets.
- The descriptions are the exact user-approved TDS-based directory summaries in A5.1. They are individual-grade statements, not recommendations, rankings, equivalence claims, substitution claims or comparative selection reasons.
- Public disambiguation: `Portfolio groups are navigation categories. A grade may appear in more than one application result because application relationships can span multiple navigation groups.`
- The five evaluation steps remain unchanged in responsibility: application, process when relevant, grade-specific technical data, destination/documents and buyer validation.
- Desktop presents all five Evaluation steps in one ordered row. Each card is 220px wide, cards use a 25px gap, and the complete row stays within the 1200px content grid.
- Each Desktop Evaluation card is 236px high and uses an explicit `01`–`05` step number, title and full approved explanation. No card inherits unused space from another row because there is no second row.
- Mobile uses a centered 640px card inside the 780px 2× canvas, equivalent to 320px at 390px logical width. Each card is 230px high with a 20px vertical gap; the complete text remains visible.
- Width, padding and height changes apply consistently to all five cards. No individual step receives a larger or stronger treatment.
- The exact ordered titles remain: `Define the application`; `Confirm whether process matters`; `Review applicable technical data`; `Identify destination and document needs`; `Validate in the buyer's system`.
- Missing technical values must not be inferred from another grade, an older source or an unrelated TDS.
- Final suitability remains a buyer-side formulation, processing, performance and qualification decision.

#### A5.1 Exact directory description deck

| Grade | Exact public directory description |
|---|---|
| M-350 | `Excellent hue and high gloss with strong hiding power.` |
| M-510 | `TMP/TME-free multi-application grade with high brightness and durability.` |
| M-896 | `Superior weather resistance with high gloss and excellent opacity for demanding exterior coatings.` |
| M-996 | `High-durability coatings grade with high opacity and good gloss.` |
| M-2196 | `Highly durable coatings pigment with high opacity and easy dispersion.` |
| M-895 | `High-opacity, high-gloss coatings grade with good weather resistance.` |
| M-200 | `High-durability exterior plastics grade with strong anti-chalking performance.` |
| M-108 | `High-heat-stability plastics grade with low oil absorption and rapid dispersion.` |
| M-210 | `High hiding power and easy dispersion for polyolefin masterbatch.` |
| M-340 | `High whiteness with strong high-temperature anti-yellowing performance.` |
| M-886 | `Bright-white plastics grade with excellent dispersion and processability.` |
| M-52 | `Very high gloss, high opacity and low abrasivity for printing inks.` |
| M-2377 | `High gloss and brightness with good opacity and easy dispersion.` |
| CR-901 | `High-purity grade with low impurities and stable batch-to-batch quality.` |

M-996 and M-2196 remain separate individual-fact statements. The directory must not add `versus`, `better`, `preferred`, equivalence, substitution, ranking or comparative choice language. M-2377 receives no special badge or warning. Rubber remains absent.

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
- Specification and performance language outside the exact user-approved A5.1 deck: absent.
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
| Product Directory | Approved baseline used neutral application/process descriptions | Four existing groups and all fourteen rows retained; descriptions replaced only with the exact A5.1 TDS-based summaries supplied and approved by the user | User-directed copy revision |
| Directory row fit | Previous compact row geometry was sized for shorter relationship descriptions | Desktop rows use an 88px step and content-responsive one-line/multi-line placement; Mobile retains complete wrapping within its established row contract | Preserve readability without redesign |
| Evaluation | Wide 3+2 Desktop cards and 280px-high Mobile cards created unnecessary card and section whitespace | Five equal compact Desktop columns with `01`–`05`; narrower, shorter Mobile cards; exact five-step copy retained | User-directed density and scan-sequence repair |
| Procurement Review | Three approved downstream paths | Retained with concise Applications, Documents and Markets actions | SEO, GEO, UX |
| Buyer Questions | Five approved buyer questions | Direct answers cover the exact 14 grades, relationship dimensions, missing-result meaning and suitability; all answers required in DOM | GEO, SEO, Evidence, Copy |
| RFQ | Lightweight end CTA with internal-system wording risk | Buyer-facing requirements sentence plus one review boundary; no form fields | Conversion, Copy, Evidence |
| Hero portfolio summary | Abstract colour blocks plus a compressed legend required the buyer to infer the grouping | Four explicit count-and-name cards under `14 grades. Four portfolio groups.` | User-directed clarity repair, accessibility |
| Complete directory | Desktop cards shared oversized row geometry; lower cards could cover the last rows above and retained excessive internal blank space | Each card sizes to its own grade-row count; row starts are derived from the taller card above | User-directed overlap and spacing repair |

## J. Final Gate

These are execution-task self-check results for the directed copy revision. They do not substitute for project-control review of the new visual assets.

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

## 11. V0.17 Desktop + V0.16 Mobile Asset Manifest

| File | Actual dimensions | Bytes | SHA-256 | Status |
|---|---:|---:|---|---|
| `assets/PRODUCT-000_G5_DESKTOP_BUYER_FACING_FINAL_V0.17.png` | 1440×5481 | 406703 | `F0CE195FE5583FB68A81A2BD0468F74B126F3A851E1E799055FC705BECD1C63B` | `APPROVED_GATE_5_BASELINE` |
| `assets/PRODUCT-000_G5_MOBILE_390_BUYER_FACING_FINAL_V0.16.png` | 780×12867; 390px logical at 2× | 652118 | `27480B92700CDEB97EA41A1AB751E1D539F4D339FC58ED2967719A656869DE67` | `APPROVED_GATE_5_BASELINE` |

Desktop V0.17 and Mobile V0.16 were reviewed at original detail and in original-pixel directory crops. All fourteen exact summaries are readable. No description, grade or CTA collides; no horizontal overflow, crop, overlap or CTA blank band was introduced. Buyer-visible Footer labels remain `CONVERSION = 0` and `PROCUREMENT = 1` in each asset.

## 12. Protected Inputs and Governance Boundary

- PRODUCT V0.3 matrix: 84 rows; 30 verified, 0 conflict, 54 no-public; SHA-256 `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406`.
- Approved Desktop V0.16 and Mobile V0.15 are the immediate visual sources. The only Buyer Clean content change is the exact fourteen-summary deck in A5.1; Desktop directory row height changes are limited to the fit required by the longer summaries.
- Desktop Header `0,0,1440×84`, Mobile Header `0,0,780×128`, Desktop Footer 1440×410 and Mobile Footer 780×1056 remain RAW-identical to the approved source assets.
- The relationship sets, Product V0.3 matrix, exact FAQ copy, fixed RFQ, Products current state, `PROCUREMENT`, M-2377 public mappings, Rubber exclusion and M-996/M-2196 comparison hold remain unchanged.
- V0.9 historical assets, V0.10 internal proof, V0.11, V0.12, the project-control-approved V0.13, superseded V0.14 and project-control-approved V0.15 remain unchanged and are not overwritten.
- `PRODUCT-G5-BUYER-FINAL-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`.
- `PRODUCT-G5-BUYER-FINAL-01 = APPROVED / CLOSED`; user approval remains recorded for the unchanged historical V0.12 + Desktop V0.16 + Mobile V0.15 Gate 5 baseline.
- `PRODUCT-G5-BUYER-FINAL-UX-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`; V0.9 and both V0.13 assets are the current Buyer-Facing Final candidate baseline pending the parent user decision.
- `PRODUCT-G5-BUYER-FINAL-UX-02 = SUPERSEDED_BY_USER_DIRECTED_REVISION_BEFORE_PROJECT_CONTROL_DECISION`; V0.10 and both V0.14 assets remain draft history.
- `PRODUCT-G5-BUYER-FINAL-UX-03 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`; V0.11 and both V0.15 assets remain retained history.
- `PRODUCT-G5-BUYER-FINAL-UX-04 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`; V0.12, Desktop V0.16 and Mobile V0.15 remain the preserved approved source baseline and are not overwritten.
- `PRODUCT-G5-DIRECTORY-TDS-01 = APPROVED / CLOSED`; user approval date `2026-08-31`. V0.13, Desktop V0.17 and Mobile V0.16 are the current approved Gate 5 baseline.
- Gate 6 remains `PROJECT_CONTROL_GATE_6_PASS_WITH_OPEN_GATE_8_9_ACCEPTANCE_ITEMS`; this copy revision does not reopen unrelated Gate 6 contracts.
- Before any Gate 7 authorization or handoff package is created after user approval of this candidate, complete `PRODUCT-G6-TDS-DIRECTORY-IMPACT-01`: record each summary's TDS/user-approval source, source date and scope; reconcile visible copy with GEO, Schema, ItemList and development fields; and update the Gate 5 Manifest and Gate 6 current-baseline references. The historical Gate 6 PASS does not claim review of these fourteen new technical statements.
- Gate 7 remains `LOCKED / NOT_AUTHORIZED`. This revision does not authorize Process or Grade child-page work, code, CMS, development handoff, deployment, release or publication.

## 13. Version Record

| Version | Date | Change | Governance status |
|---|---|---|---|
| V0.5 / V0.9 | 2026-08-30 | Approved full-route, fixed-RFQ visual baseline | Approved historical baseline; unchanged |
| V0.6 / V0.10 | 2026-08-30 | Internal PRODUCT V0.3 relationship-impact proof | Project-control review pass pending user approval; not public page content |
| V0.7 / V0.11 | 2026-08-31 | Full buyer-facing relationship, taxonomy, process, editorial, SEO, GEO and claim-safety revision | Historical review input; superseded by V0.8/V0.12 without deletion |
| V0.8 / V0.12 | 2026-08-31 | Directed PCR-01 revision: Footer `PROCUREMENT` synchronization and formal five-question/five-answer copy deck | Project-control review pass pending user approval; retained historical candidate |
| V0.8 / project-control directed review | 2026-08-31 | Project control independently verified both V0.12 assets, protected RAW hashes, Footer deltas, formal FAQ copy, PRODUCT V0.3 boundaries and document hygiene | `PRODUCT-G5-BUYER-FINAL-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`; `PRODUCT-G5-BUYER-FINAL-01 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| V0.9 / V0.13 | 2026-08-31 | User-directed Hero portfolio explanation and content-driven directory card-height repair; Desktop and 390px synchronized | `PRODUCT-G5-BUYER-FINAL-UX-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`; current Buyer-Facing Final candidate baseline; Gate 5 remains unapproved |
| V0.10 / V0.14 | 2026-08-31 | User-directed Evaluation-card density repair: five equal 220px Desktop steps in one row; centered compact Mobile cards; exact copy retained | Superseded by V0.11/V0.15 before project-control decision; retained as draft history |
| V0.11 / V0.15 | 2026-08-31 | User-directed informative directory: exact neutral application/process description added to all fourteen Desktop and Mobile rows | `PRODUCT-G5-BUYER-FINAL-UX-03 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`; current Buyer-Facing Final candidate baseline; Gate 5 remains unapproved |
| V0.12 / Desktop V0.16 + Mobile V0.15 | 2026-08-31 | User-directed Desktop baseline repair: one-line directory descriptions align with grade and CTA; two-line descriptions and Mobile remain unchanged | `PRODUCT-G5-BUYER-FINAL-UX-04 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`; project-control-approved candidate subsequently approved by the user |
| V0.12 / Gate 5 user approval | 2026-08-31 | User approved the current Buyer-Facing Final baseline: V0.12 specification, Desktop V0.16 and Mobile V0.15 | `PRODUCT-G5-BUYER-FINAL-01 = APPROVED / CLOSED`; `Gate 5 = APPROVED`; hard stop before Gate 6/7 |
| V0.13 / Desktop V0.17 + Mobile V0.16 | 2026-08-31 | User-directed replacement of the fourteen directory descriptions with the exact supplied TDS-based summaries; no additional content or module; only necessary row-fit changes | `PRODUCT-G5-DIRECTORY-TDS-01 = APPROVED / CLOSED`; user approval date `2026-08-31`; current Gate 5 baseline; prior baseline retained |
| V0.13 / project-control directed review | 2026-08-31 | Project control independently verified 58 PASS / 0 FAIL, original-pixel fit, protected Header/Footer pixels and the directory-only change boundary | Visual and scope PASS pending user approval; `PRODUCT-G6-TDS-DIRECTORY-IMPACT-01` required before any later Gate 7 authorization or handoff package |
| V0.13 / user approval | 2026-08-31 | User approved `PRODUCT-G5-DIRECTORY-TDS-01` and authorized the required targeted Gate 6 impact audit | `APPROVED / CLOSED`; Gate 7 remains `LOCKED / NOT_AUTHORIZED` |
